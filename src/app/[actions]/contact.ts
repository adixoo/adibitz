"use server";

import { countries } from "@/constants/countries";
import { ContactSchema, type ContactFormValues } from "@/types/contact.schema";
import dayjs from "dayjs";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_CODE!);

interface ContactResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string[] | undefined>;
  error?: string;
}

export async function contactMe(
  data: ContactFormValues
): Promise<ContactResponse> {
  // VALIDATE INPUT
  const parsed = ContactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors
    };
  }

  const payload = parsed.data;

  // Convert country code to name if available
  const countryName = payload.country
    ? (countries[payload.country as keyof typeof countries]?.name ??
      payload.country)
    : "-";

  // Generate "from" email dynamically
  const fromEmail = `${payload.name.toLowerCase().replace(/\s+/g, "-")}@resend.dev`;

  // Get current time
  const currentTime = dayjs().format("D MMM YYYY, h:mm A");

  try {
    // SEND EMAIL
    await resend.emails.send({
      from: fromEmail,
      to: "aadi.aanand89@gmail.com",
      subject: payload.subject ?? "No Subject",
      html: `
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f7; margin: 0; padding: 0;">
      <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <h2 style="color: #333333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Contact Form Submission</h2>
        <p style="margin: 5px 0;"><strong>Time:</strong> ${currentTime}</p>
        <p style="margin: 5px 0;"><strong>Subject:</strong> ${payload.subject ?? "No Subject"}</p>
        <p style="margin: 5px 0;"><strong>Name:</strong> ${payload.name}</p>
        <p style="margin: 5px 0;"><strong>Country:</strong> ${countryName}</p>
        <p style="margin: 5px 0;"><strong>Email:</strong> ${payload.email ?? "-"}</p>
        <p style="margin: 5px 0;"><strong>Phone:</strong> ${payload.phone ?? "-"}</p>
        ${
          payload.linkedin
            ? `<p style="margin: 5px 0;"><strong>Profile URL:</strong> <a href="${payload.linkedin}" style="color: #1a73e8; text-decoration: none;">${payload.linkedin}</a></p>`
            : ""
        }
        <div style="margin-top: 15px;">
          <p style="margin: 5px 0; font-weight: bold;">Message:</p>
          <p style="margin: 5px 0; line-height: 1.5; color: #555555;">${payload.message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #999999;">This email was sent via Resend API.</p>
      </div>
    </body>
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
