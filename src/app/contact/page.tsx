import { ContactForm } from "@/components/contact/Form";

export const metadata = {
  title: "Contact Adibitz — Start Your Website or Digital Project",
  description:
    "Get in touch with Adibitz for web development, UI/UX design, SEO, branding, and digital growth services. Let’s turn your idea into a high-performing website or product.",
  openGraph: {
    title: "Contact Adibitz — Let’s Build Something Great",
    description:
      "Reach out to discuss your website, design, or digital growth needs. Fast responses, clear communication, and professional project guidance.",
    // url: `${ApplicationUrl}/contact`,
    siteName: "Adibitz",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Adibitz"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Adibitz",
    description:
      "Let’s talk about your website or digital project. Professional guidance and fast communication.",
    images: ["/og-contact.png"]
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-center text-5xl leading-snug text-white/80">
            Let&apos;s{" "}
            <span className="text-primary font-bold">work together</span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-center leading-relaxed">
            Have a project in mind or just want to say hi? Fill out the form
            below and I&apos;ll get back to you as soon as possible.
          </p>
        </header>

        <ContactForm />
      </div>
    </main>
  );
}
