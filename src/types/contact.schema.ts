import { z } from "zod";

// Allow unicode letters + space . ' -
const nameRegex = /^[\p{L} .'-]+$/u;

// Phone: allow + only at start, rest digits, min 5 total chars
const phoneRegex = /^\+?\d{5,}$/;

// LinkedIn: strict hostname check
const linkedinRegex = /^https?:\/\/([\w.-]+\.)?linkedin\.com(\/.*)?$/i;

export const ContactSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .regex(nameRegex, "Name contains invalid characters"),

    country: z.string().min(1, "Country is required"),

    email: z.string().email("Invalid email").optional(),

    phone: z
      .string()
      .regex(phoneRegex, "Phone must contain only numbers and be valid")
      .optional(),

    linkedin: z
      .string()
      .url("Invalid URL")
      .regex(linkedinRegex, "Enter a valid LinkedIn profile URL")
      .optional(),

    subject: z.string().optional(),

    message: z.string().min(1, "Message is required")
  })
  .refine((data) => data.email || data.phone || data.linkedin, {
    message: "Provide at least one contact method",
    path: ["email"]
  });

export type ContactFormValues = z.infer<typeof ContactSchema>;
