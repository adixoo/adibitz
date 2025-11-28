import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Stack_Sans_Notch } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Footer } from "@/components/Footer";

const stackSans = Stack_Sans_Notch({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap"
});

const ApplicationUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${
      process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_PROJECT_PRODUCTION_URL
        : process.env.VERCEL_URL
    }`
  : "http://localhost:3000";
export const metadata: Metadata = {
  title: "Aditya — Software Engineer & Web/App Developer",
  description:
    "Portfolio of Aditya, a software engineer specializing in modern web and app development using Next.js, TypeScript, and TailwindCSS.",
  openGraph: {
    title: "Hartman - Your Brand, Our Expertise",
    description:
      "We help you go from idea to launch with custom formulations, smart packaging, premium ingredients, and certified manufacturing.",
    url: ApplicationUrl,
    siteName: "Hartman",
    images: [
      {
        url: "/logo-full.svg", // make sure logo is in public/ folder
        width: 1200,
        height: 630,
        alt: "Hartman Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hartman - Your Brand, Our Expertise",
    description:
      "We help you go from idea to launch with custom formulations, smart packaging, premium ingredients, and certified manufacturing.",
    images: ["/logo-full.svg"]
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
                background: "#000000",
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
          <Footer/>
        </ReactLenis>
        <NextTopLoader
          showSpinner={false}
          color="var(--primary)"
          zIndex={999}
          height={3}
        />
      </body>
    </html>
  );
}
