import { z } from "zod";

// Allow unicode letters + space . ' -
const nameRegex = /^[\p{L} .'-]+$/u;

// WhatsApp: + allowed only at start, rest digits, min 5 chars
const whatsappRegex = /^\+?\d{5,}$/;

export const ContactSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .regex(nameRegex, "Name contains invalid characters"),

    country: z.string().min(1, "Country is required"),

    email: z.string().email("Invalid email").optional(),

    whatsapp: z
      .string()
      .regex(whatsappRegex, "WhatsApp number must be valid")
      .optional(),

    // Any URL where you can message (Telegram, Instagram, WhatsApp link, etc.)
    instantProfile: z.string().url("Invalid URL").optional(),

    subject: z.string().optional(),

    message: z.string().min(1, "Message is required")
  })

  // Require at least one contact method
  .refine((data) => data.email || data.whatsapp || data.instantProfile, {
    message: "Provide at least one contact method",
    path: ["email"]
  });

export type ContactFormValues = z.infer<typeof ContactSchema>;
