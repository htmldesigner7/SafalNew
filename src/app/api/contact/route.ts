import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/validation/contactSchema";
import { ZodError } from "zod";
import { getBaseMailTemplate } from "@/lib/emailTemplates";
import { sendMail } from "@/lib/sendMail";

const getContactUserTemplate = (name: string) => {
  return getBaseMailTemplate({
    title: "Thank You for Reaching Out",
    headerTitle: "Message Received",
    headerColor: "#E33A36",
    contentHtml: `
        <h2>Hi ${name},</h2>
        <p>Thank you for contacting Safal Infosoft! We have successfully received your message.</p>
        <p>Our team will review your inquiry and get back to you shortly.</p>
        <p>In the meantime, feel free to explore our website to learn more about our services.</p>
        <a href="${process.env.SITE_URL}" class="btn" style="color: #ffffff; text-decoration: none;">View our website</a>
    `,
  });
};

const getContactAdminTemplate = (data: {
  fullName: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) => {
  return getBaseMailTemplate({
    title: "New Contact Form Submission",
    headerTitle: "New Contact Form Submission",
    headerColor: "#111111",
    headerTitleColor: "#E33A36",
    contentHtml: `
        <p>A new visitor has submitted the contact form. Here are the details:</p>
        
        <div class="details-box">
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
                <span class="value">${data.phone || 'N/A'}</span>
            </div>
            <div class="details-row">
                <span class="label">Service Interested In:</span>
                <span class="value">${data.service || 'N/A'}</span>
            </div>
            <div class="details-row">
                <span class="label">Message:</span>
                <span class="value" style="white-space: pre-wrap;">${data.message}</span>
            </div>
        </div>
    `,
    footerText: "Safal System Notification",
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Save to Database
    const contact = await prisma.contacts.create({
      data: {
        full_name: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone || "",
        service: validatedData.service || "",
        message: validatedData.message,
      },
    });

    // Send Emails
    const userEmailHtml = getContactUserTemplate(validatedData.fullName);
    const adminEmailHtml = getContactAdminTemplate(validatedData);

    // Send to User
    await sendMail({
      to: validatedData.email,
      subject: "Thank You for Contacting Safal Infosoft",
      html: userEmailHtml,
    });

    // Send to Admin
    if (process.env.ADMIN_MAIL_TO) {
      await sendMail({
        to: process.env.ADMIN_MAIL_TO,
        subject: `New Contact Form Submission from ${validatedData.fullName}`,
        html: adminEmailHtml,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
        data: contact,
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

    console.error("Contact API Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save to database. Check server console logs.",
      },
      { status: 500 }
    );
  }
}
