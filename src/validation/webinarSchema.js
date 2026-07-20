import { z } from "zod";

export const webinarSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email"),

  fullName: z
    .string()
    .min(3, "Full Name is required"),

  interested: z
    .string()
    .min(1, "Please select an option"),

  consent: z
  .boolean()
  .refine((value) => value === true, {
    message: "Please accept the consent",
  }),
});