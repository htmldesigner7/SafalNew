import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const jobApplicationSchema = z.object({
  jobId: z.string().min(1, "Job ID is required"),
  fullName: z.string().min(3, "Full Name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  phoneNumber: z.string().regex(/^\d{8,15}$/, "Phone number must be between 8 to 15 digits and contain only numbers"),
  location: z.string().min(2, "Current Location is required"),
  coverLetter: z.string().max(500, "Cover Letter must not exceed 500 characters").min(10, "Cover Letter must be at least 10 characters"),
  resume: z
    .any()
    .refine((file) => file instanceof File, "Resume file is required")
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB")
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file?.type), "Only .pdf, .doc, and .docx formats are supported."),
});
