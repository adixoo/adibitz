import { ContactForm } from "@/components/contact/Form";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <header className="mb-12">
          <p className="text-muted-foreground mb-2 text-sm">Contact</p>
          <h1 className="text-foreground text-3xl font-medium tracking-tight text-balance md:text-4xl">
            Let&apos;s work together
          </h1>
          <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
            Have a project in mind or just want to say hi? Fill out the form
            below and I&apos;ll get back to you as soon as possible.
          </p>
        </header>

        <ContactForm />
      </div>
    </main>
  );
}
