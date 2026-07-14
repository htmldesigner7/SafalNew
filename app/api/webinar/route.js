import { NextResponse } from "next/server";
import { webinarSchema } from "@/validation/webinarSchema";

export async function POST(request) {
  try {
    const body = await request.json();

    const data = webinarSchema.parse(body);

    console.log(data);
    //Store data in database

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid data",
      },
      {
        status: 400,
      }
    );
  }
}