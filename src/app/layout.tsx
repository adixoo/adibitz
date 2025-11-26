import type { Metadata } from "next";
import { Stack_Sans_Notch } from "next/font/google";
import "./globals.css";

const stackSans = Stack_Sans_Notch({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya — Software Engineer & Web/App Developer",
  description:
    "Portfolio of Aditya, a software engineer specializing in modern web and app development using Next.js, TypeScript, and TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stackSans.className} antialiased`}>{children}</body>
    </html>
  );
}
