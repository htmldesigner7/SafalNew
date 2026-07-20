import { NextResponse } from "next/server";
// HMR trigger
import { webinarSchema } from "@/validation/webinarSchema";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";
import { sendMail } from "@/lib/sendMail";
import { getBaseMailTemplate } from "@/lib/emailTemplates";

const getWebinarUserTemplate = (name: string) => {
  return getBaseMailTemplate({
    title: "Thank You for Registering",
    headerTitle: "Webinar Registration Confirmed",
    headerColor: "#E33A36",
    contentHtml: `
        <h2>Hi ${name},</h2>
        <p>Thank you for registering for our webinar! We have successfully received your request.</p>
        <p>Our team is reviewing your details and will get back to you shortly with more information and the webinar link.</p>
        <p>If you have requested a product demo, our experts will coordinate with you to schedule a personalized session.</p>
        <a href="${process.env.SITE_URL}" class="btn" style="color: #ffffff; text-decoration: none;">View our website</a>
    `,
  });
};

const getWebinarAdminTemplate = (data: { name: string; email: string; product_demo: string }) => {
  return getBaseMailTemplate({
    title: "New Webinar Registration",
    headerTitle: "New Webinar Registration",
    headerColor: "#111111",
    headerTitleColor: "#E33A36",
    contentHtml: `
        <p>A new user has registered for the webinar. Here are the details:</p>
        
        <div class="details-box">
            <div class="details-row">
                <span class="label">Full Name:</span>
                <span class="value">${data.name}</span>
            </div>
            <div class="details-row">
                <span class="label">Email Address:</span>
                <span class="value">
                    <a href="mailto:${data.email}" style="color: #E33A36; text-decoration: none;">${data.email}</a>
                </span>
            </div>
            <div class="details-row">
                <span class="label">Product Demo:</span>
                <span class="value">${data.product_demo}</span>
            </div>
        </div>
    `,
    footerText: "Safal System Notification",
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // SERVER SIDE VALIDATIONS
    const data = webinarSchema.parse(body);
    // DATABASE INSERTION
    const webinar = await prisma.webinar.create({
      data: {
        name: data.fullName,
        email: data.email,
        product_demo: data.interested,
      },
    });
    //SEND MAIL TO USER AND ADMIN
    const userEmailHtml = getWebinarUserTemplate(data.fullName);
    const adminEmailHtml = getWebinarAdminTemplate({
      name: data.fullName,
      email: data.email,
      product_demo: data.interested,
    });

    // Send to User
    await sendMail({
      to: data.email,
      subject: "Thank You for Registering - SafalInfosoft",
      html: userEmailHtml,
    });

    // Send to Admin
    if (process.env.ADMIN_MAIL_TO) {
      await sendMail({
        to: process.env.ADMIN_MAIL_TO,
        subject: "New Webinar Registration Received",
        html: adminEmailHtml,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: webinar,
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

    console.error("Webinar API Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save data.",
      },
      { status: 500 }
    );
  }
}