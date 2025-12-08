export const metadata = {
  title: "Adibitz Projects — Websites & Digital Work Showcase",
  description:
    "Explore real client work: business websites, portfolios, landing pages, e-commerce stores, UI/UX designs, and digital branding projects delivered by Adibitz.",
  openGraph: {
    title: "Adibitz Portfolio — High-Quality Websites & Digital Projects",
    description:
      "See the websites and digital products we've built for startups, creators, and businesses. Modern design, clean code, and results-driven execution.",
    // url: `${ApplicationUrl}/projects`,
    siteName: "Adibitz",
    images: [
      {
        url: "/og-projects.png",
        width: 1200,
        height: 630,
        alt: "Adibitz Projects"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Adibitz Projects",
    description:
      "Browse our latest client work — websites, apps, UI/UX design, and more.",
    images: ["/og-projects.png"]
  }
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-center text-5xl leading-snug text-white/80">
            Our <span className="text-primary font-bold">Projects</span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-center leading-relaxed">
            Explore a selection of our recent projects, showcasing our expertise
            in web development, UI/UX design, and digital solutions.
          </p>
        </header>{" "}
      </div>
    </main>
  );
}
