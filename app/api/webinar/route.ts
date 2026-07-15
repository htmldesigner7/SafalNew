import { NextResponse } from "next/server";
import { webinarSchema } from "@/validation/webinarSchema";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = webinarSchema.parse(body);

    const webinar = await prisma.webinar.create({
      data: {
        name: data.fullName,
        email: data.email,
        product_demo: data.interested,
      },
    });

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