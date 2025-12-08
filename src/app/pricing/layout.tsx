export const metadata = {
  title: "Adibitz Pricing — Website Packages for Every Business",
  description:
    "Transparent pricing for business websites, portfolios, e-commerce stores, and digital services. Choose a package that fits your goals with clear features and deliverables.",
  openGraph: {
    title: "Adibitz Pricing — Simple, Transparent & Value-Driven",
    description:
      "Explore pricing for websites, e-commerce stores, branding, UI/UX design, and SEO. No hidden fees, no confusion — only clear, honest packages built to grow your business.",
    // url: `${ApplicationUrl}/pricing`,
    siteName: "Adibitz",
    images: [
      {
        url: "/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "Adibitz Pricing"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Adibitz Pricing",
    description:
      "Straightforward website and digital service pricing tailored for startups, small businesses, and brands ready to grow.",
    images: ["/og-pricing.png"]
  }
};

export default function PricingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
