import { Footer } from "@/components/Footer";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Stack_Sans_Notch } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const stackSans = Stack_Sans_Notch({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap"
});

import { Toaster } from "sonner";

const ApplicationUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${
      process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_PROJECT_PRODUCTION_URL
        : process.env.VERCEL_URL
    }`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Adibitz — Web Development, UI/UX & Digital Growth Solutions",
  description:
    "Adibitz builds modern, fast, and conversion-focused websites for businesses. We offer web development, UI/UX design, SEO, branding, and complete digital growth solutions to help you scale online.",

  openGraph: {
    title: "Adibitz — Build Faster. Look Better. Grow Online.",
    description:
      "Get a high-performance website with clean design, strong SEO, and modern tech. Adibitz provides web development, UI/UX, branding, digital strategy, and scalable solutions for businesses.",
    url: ApplicationUrl,
    siteName: "Adibitz",
    images: [
      {
        url: "/og-image.png", // Replace with your real OG image
        width: 1200,
        height: 630,
        alt: "Adibitz — Web Development & Digital Solutions"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Adibitz — Web Development & Digital Growth",
    description:
      "Modern websites, UI/UX design, SEO optimization, and digital growth strategies built to make your business stand out.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${stackSans.className} relative antialiased`}>
        <ReactLenis root>
          <div className="absolute inset-0 -z-20 h-full w-full">
            {/* Dark Noise Colored Background */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "var(--background)",
                backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      `,
                backgroundSize: "20px 20px, 30px 30px, 25px 25px",
                backgroundPosition: "0 0, 10px 10px, 15px 5px"
              }}
            />
            {/* Your Content/Components */}
          </div>

          {children}
          <Footer />
        </ReactLenis>
        <NextTopLoader
          showSpinner={false}
          color="var(--primary)"
          zIndex={999}
          height={3}
        />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
