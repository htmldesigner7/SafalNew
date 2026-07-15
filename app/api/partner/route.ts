import { NextResponse } from "next/server";
import { partnerSchema } from "@/validation/partnerSchema";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";

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
