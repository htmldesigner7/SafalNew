import { z } from "zod";

export const partnerSchema = z.object({
  fullName: z.string().min(3, "Full Name is required"),
  corporateEmail: z.string().min(1, "Email is required").email("Enter a valid email"),
  phoneNumber: z.string().regex(/^\d{8,15}$/, "Phone number must be between 8 to 15 digits and contain only numbers"),
  companyName: z.string().min(2, "Company Name is required"),
  websiteUrl: z.string().url("Please enter a valid URL (e.g., https://example.com)").or(z.literal("")).optional(),
  partnershipType: z.string().min(1, "Please select a partnership type"),
  executiveSummary: z.string().min(10, "Executive Summary must be at least 10 characters"),
});
