// contact.schema.ts
import { z } from "zod";

export const ContactSchema = z
  .object({
    name: z.string().min(1, "Name is required"),

    country: z.string().optional(),

    email: z.string().email("Invalid email").optional(),

    phone: z.string().min(5, "Phone number is too short").optional(),

    linkedin: z
      .string()
      .optional()
      .refine((value) => {
        if (!value) return true;
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      }, "Invalid URL"),

    subject: z.string().optional(),

    message: z.string().min(1, "Message is required")
  })

  // At least one contact method must be provided
  .refine((data) => data.email || data.phone || data.linkedin, {
    path: ["email"], // error appears under email field
    message: "Please provide at least one contact method"
  });

export type ContactSchemaType = z.infer<typeof ContactSchema>;
