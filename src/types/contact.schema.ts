import { z } from "zod";

// Allow unicode letters + space . ' -
const nameRegex = /^[\p{L} .'-]+$/u;

// WhatsApp: + allowed only at start, rest digits, min 5 chars
const whatsappRegex = /^\+?\d{5,}$/;

export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name can't be more than 100 characters")
    .regex(nameRegex, "Name contains invalid characters"),

  country: z
    .string()
    .min(1, "Country is required")
    .max(3, "Country can't be more than 2 characters"),

  email: z
    .email("Invalid email")
    .max(150, "Email can't be more than 150 characters")
    .optional(),

  whatsapp: z
    .string()
    .regex(whatsappRegex, "WhatsApp number must be valid")
    .max(20, "WhatsApp number can't be more than 20 characters")
    .optional(),

  subject: z
    .string()
    .max(200, "Subject can't be more than 200 characters")
    .optional(),

  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message can't be more than 1000 characters")
});

export type ContactFormValues = z.infer<typeof ContactSchema>;
