"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_CODE!);

// ZOD SCHEMA
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  country: z.string().min(1, "Country is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone number is required"),

  // Validate ONLY that it is a proper URL
  linkedinProfile: z
    .string()
    .refine((value) => {
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    }, "Invalid URL")
    .optional(),

  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required")
});

export type ContactFormProps = z.infer<typeof ContactFormSchema>;

interface ContactResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string[] | undefined>;
  error?: string;
}

export async function contactMe(
  data: ContactFormProps
): Promise<ContactResponse> {
  // VALIDATE INPUT
  const parsed = ContactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors
    };
  }

  const payload = parsed.data;

  try {
    // SEND EMAIL
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aadi.aanand89@gmail.com",
      subject: payload.subject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Country:</strong> ${payload.country}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone}</p>
        ${
          payload.linkedinProfile
            ? `<p><strong>Profile URL:</strong> ${payload.linkedinProfile}</p>`
            : ""
        }
        <p><strong>Message:</strong></p>
        <p>${payload.message}</p>
      `
    });

    return {
      success: true,
      message: "Email sent successfully!"
    };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error occurred";

    return {
      success: false,
      message: "Failed to send email",
      error: errorMessage
    };
  }
}
