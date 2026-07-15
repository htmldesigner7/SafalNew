import { NextResponse } from "next/server";
import { internshipSchema } from "@/validation/internshipSchema";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Parse the formData into a regular object for Zod validation
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      location: formData.get("location"),
      coverLetter: formData.get("coverLetter"),
      resume: formData.get("resume"),
    };

    // Validate using Zod
    const validatedData = internshipSchema.parse(data);

    // Save the file to public/uploads
    const file = validatedData.resume as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Generate a unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadDir, fileName);
    
    // Ensure the uploads directory exists (in case it got deleted)
    await fs.mkdir(uploadDir, { recursive: true });
    
    // Write the file
    await fs.writeFile(filePath, buffer);
    const resumeUrl = `/uploads/${fileName}`;

    // Save to Database
    const internshipApplication = await prisma.internshipApplication.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phoneNumber: validatedData.phoneNumber,
        location: validatedData.location,
        coverLetter: validatedData.coverLetter,
        resumeUrl: resumeUrl,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: internshipApplication,
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

    console.error("Internship API Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save application.",
      },
      { status: 500 }
    );
  }
}
