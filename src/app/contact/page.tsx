import { ContactForm } from "@/components/contact/Form";

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
