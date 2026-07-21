import { NextResponse } from "next/server";
import { partnerSchema } from "@/validation/partnerSchema";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";
import { getBaseMailTemplate } from "@/lib/emailTemplates";
import { sendMail } from "@/lib/sendMail";

const getPartnerUserTemplate = (name: string) => {
  return getBaseMailTemplate({
    title: "Thank You for Your Partnership Application",
    headerTitle: "Partnership Application Received",
    headerColor: "#E33A36",
    contentHtml: `
        <h2>Hi ${name},</h2>
        <p>Thank you for expressing interest in becoming a partner! We have successfully received your application.</p>
        <p>Our team is carefully reviewing your details and the proposed partnership type. We will reach out to you shortly to discuss the next steps.</p>
        <p>In the meantime, feel free to explore our website to learn more about our services.</p>
        <a href="${process.env.SITE_URL}" class="btn" style="color: #ffffff; text-decoration: none;">View our website</a>
    `,
  });
};

const getPartnerAdminTemplate = (data: {
  fullName: string;
  corporateEmail: string;
  phoneNumber: string;
  companyName: string;
  websiteUrl?: string | null;
  partnershipType: string;
  executiveSummary: string;
}) => {
  return getBaseMailTemplate({
    title: "New Partnership Application",
    headerTitle: "New Partnership Application",
    headerColor: "#111111",
    headerTitleColor: "#E33A36",
    contentHtml: `
        <p>A new user has submitted a partnership application. Here are the details:</p>
        
        <div class="details-box">
            <div class="details-row">
                <span class="label">Full Name:</span>
                <span class="value">${data.fullName}</span>
            </div>
            <div class="details-row">
                <span class="label">Email Address:</span>
                <span class="value">
                    <a href="mailto:${data.corporateEmail}" style="color: #E33A36; text-decoration: none;">${data.corporateEmail}</a>
                </span>
            </div>
            <div class="details-row">
                <span class="label">Phone Number:</span>
                <span class="value">${data.phoneNumber}</span>
            </div>
            <div class="details-row">
                <span class="label">Company Name:</span>
                <span class="value">${data.companyName}</span>
            </div>
            ${
              data.websiteUrl
                ? `
            <div class="details-row">
                <span class="label">Website URL:</span>
                <span class="value"><a href="${data.websiteUrl}" style="color: #E33A36; text-decoration: none;">${data.websiteUrl}</a></span>
            </div>`
                : ""
            }
            <div class="details-row">
                <span class="label">Partnership Type:</span>
                <span class="value">${data.partnershipType}</span>
            </div>
            <div class="details-row">
                <span class="label">Executive Summary:</span>
                <span class="value">${data.executiveSummary}</span>
            </div>
        </div>
    `,
    footerText: "Safal System Notification",
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = partnerSchema.parse(body);

    const partner = await prisma.become_a_partner.create({
      data: {
        fullName: data.fullName,
        corporateEmail: data.corporateEmail,
        phoneNumber: data.phoneNumber,
        companyName: data.companyName,
        websiteUrl: data.websiteUrl,
        partnershipType: data.partnershipType,
        executiveSummary: data.executiveSummary,
      },
    });

    //SEND MAIL TO USER AND ADMIN
    const userEmailHtml = getPartnerUserTemplate(data.fullName);
    const adminEmailHtml = getPartnerAdminTemplate(data);

    // Send to User
    await sendMail({
      to: data.corporateEmail,
      subject: "Thank You for Your Partnership Application - SafalInfosoft",
      html: userEmailHtml,
    });

    // Send to Admin
    if (process.env.ADMIN_MAIL_TO) {
      await sendMail({
        to: process.env.ADMIN_MAIL_TO,
        subject: "New Partnership Application Received",
        html: adminEmailHtml,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: partner,
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

    console.error("Partner API Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save data.",
      },
      { status: 500 }
    );
  }
}
