import { NextResponse } from "next/server";
import { jobApplicationSchema } from "@/validation/jobApplicationSchema";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";
import { getBaseMailTemplate } from "@/lib/emailTemplates";
import { sendMail } from "@/lib/sendMail";

const getJobApplicationUserTemplate = (name: string, jobId: string) => {
  return getBaseMailTemplate({
    title: "Thank You for Your Application",
    headerTitle: "Application Received",
    headerColor: "#E33A36",
    contentHtml: `
        <h2>Hi ${name},</h2>
        <p>Thank you for applying for the position of: ${jobId}. We have successfully received your application and resume.</p>
        <p>Our team will review your profile and get back to you if your qualifications match our current openings.</p>
        <p>In the meantime, feel free to explore our website to learn more about our company culture and projects.</p>
        <a href="${process.env.SITE_URL}" class="btn" style="color: #ffffff; text-decoration: none;">View our website</a>
    `,
  });
};

const getJobApplicationAdminTemplate = (data: {
  jobId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  coverLetter: string;
}) => {
  return getBaseMailTemplate({
    title: "New Job Application",
    headerTitle: "New Job Application",
    headerColor: "#111111",
    headerTitleColor: "#E33A36",
    contentHtml: `
        <p>A new candidate has submitted a job application. Here are the details:</p>
        
        <div class="details-box">
            <div class="details-row">
                <span class="label">Job ID:</span>
                <span class="value">${data.jobId}</span>
            </div>
            <div class="details-row">
                <span class="label">Full Name:</span>
                <span class="value">${data.fullName}</span>
            </div>
            <div class="details-row">
                <span class="label">Email Address:</span>
                <span class="value">
                    <a href="mailto:${data.email}" style="color: #E33A36; text-decoration: none;">${data.email}</a>
                </span>
            </div>
            <div class="details-row">
                <span class="label">Phone Number:</span>
                <span class="value">${data.phoneNumber}</span>
            </div>
            <div class="details-row">
                <span class="label">Location:</span>
                <span class="value">${data.location}</span>
            </div>
            <div class="details-row">
                <span class="label">Cover Letter:</span>
                <span class="value" style="white-space: pre-wrap;">${data.coverLetter}</span>
            </div>
        </div>
        <p><em>The applicant's resume is attached to this email.</em></p>
    `,
    footerText: "Safal System Notification",
  });
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Parse the formData into a regular object for Zod validation
    const data = {
      jobId: formData.get("jobId"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      location: formData.get("location"),
      coverLetter: formData.get("coverLetter"),
      resume: formData.get("resume"),
    };

    // Validate using Zod
    const validatedData = jobApplicationSchema.parse(data);

    // Save the file to public/uploads
    const file = validatedData.resume as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Generate a unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadDir, fileName);
    
    // Ensure the uploads directory exists
    await fs.mkdir(uploadDir, { recursive: true });
    
    // Write the file
    await fs.writeFile(filePath, buffer);
    const resumeUrl = `/safal/uploads/${fileName}`;

    // Save to Database
    const jobApplication = await prisma.job_application.create({
      data: {
        jobId: validatedData.jobId,
        fullName: validatedData.fullName,
        email: validatedData.email,
        phoneNumber: validatedData.phoneNumber,
        location: validatedData.location,
        coverLetter: validatedData.coverLetter,
        resumeUrl: resumeUrl,
      },
    });

    //SEND MAIL TO USER AND ADMIN
    const userEmailHtml = getJobApplicationUserTemplate(validatedData.fullName, validatedData.jobId);
    const adminEmailHtml = getJobApplicationAdminTemplate(validatedData);

    // Send to User
    await sendMail({
      to: validatedData.email,
      subject: "Thank You for Your Application - SafalInfosoft",
      html: userEmailHtml,
    });

    // Send to Admin
    if (process.env.ADMIN_MAIL_TO) {
      await sendMail({
        to: process.env.ADMIN_MAIL_TO,
        subject: `New Job Application Received (Job ID: ${validatedData.jobId})`,
        html: adminEmailHtml,
        attachments: [
          {
            filename: file.name,
            path: filePath,
          },
        ],
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: jobApplication,
      },
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form fields and try again.",
          errors: err.flatten(),
        },
        { status: 400 }
      );
    }

    console.error("Job Application API Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save application.",
      },
      { status: 500 }
    );
  }
}
