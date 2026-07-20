import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  service: z.string().optional(),
  phone: z.string().optional().refine(val => {
    if (!val) return true;
    return val.replace(/[^0-9]/g, "").length >= 10;
  }, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});
