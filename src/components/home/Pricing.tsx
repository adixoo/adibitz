"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Starter Website",
      price: "₹3,000 – ₹5,000",
      description:
        "A clean and conversion-ready website for small brands & freelancers.",
      highlight: false,
      features: [
        "3–5 Custom Pages",
        "Fully Mobile Responsive",
        "Fast, Lightweight Code",
        "Basic On-Page SEO",
        "1 Month Free Support",
        "Hosted on Vercel / Custom Hosting"
      ],
      button: "Get Started"
    },
    {
      title: "Business Website",
      price: "₹8,000 – ₹15,000",
      description:
        "A premium website built for growth, branding & performance.",
      highlight: true,
      features: [
        "6–12 Premium Pages",
        "Custom UI/UX + Motion Effects",
        "Ultra-Fast Code Optimization",
        "Advanced SEO Setup",
        "CMS / Admin Panel (Optional)",
        "WhatsApp, Forms, Analytics Integrations",
        "2 Months Free Support"
      ],
      button: "Start Project"
    },
    {
      title: "Landing Page",
      price: "₹2,500 – ₹4,000",
      description: "A razor-sharp landing page crafted for conversions & ads.",
      highlight: false,
      features: [
        "High-Conversion Landing Page",
        "Hero + Sections + CTA",
        "Framer Motion Animations",
        "Analytics / Pixel Setup",
        "SEO-Ready & Super Fast",
        "1–2 Day Delivery"
      ],
      button: "Order Now"
    },
    {
      title: "E-Commerce Store",
      price: "₹15,000 – ₹35,000",
      description: "A scalable online store with modern shopping features.",
      highlight: false,
      features: [
        "Product Catalog + Categories",
        "Cart, Checkout & Wishlist",
        "Razorpay Payment Gateway",
        "Admin Dashboard",
        "Order & Inventory Management",
        "SEO + Speed Optimized",
        "3 Months Priority Support"
      ],
      button: "Discuss Store"
    },
    {
      title: "Portfolio Website",
      price: "₹4,000 – ₹7,000",
      description:
        "A visually stunning portfolio that builds your personal brand.",
      highlight: false,
      features: [
        "Custom Personal Brand UI",
        "Smooth Micro Interactions",
        "Projects, Case Studies, Skills",
        "Contact Form + Social Links",
        "SEO Setup",
        "Deployed on Vercel"
      ],
      button: "Build Portfolio"
    },
    {
      title: "Monthly Maintenance",
      price: "₹500 – ₹1,500 / month",
      description: "Keep your website fast, secure & always updated.",
      highlight: false,
      features: [
        "Monthly Updates & Fixes",
        "Speed Optimization",
        "Security Scan + Monitoring",
        "Backup System Setup",
        "Priority Support"
      ],
      button: "Subscribe"
    }
  ];

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white/90">Pricing</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Flexible, transparent pricing crafted for every stage — from startup
            to scale-up.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-primary/20 relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight ? "border-primary border-2 shadow-lg" : ""
              }`}
            >
              {plan.highlight && (
                <div className="bg-primary absolute top-0 right-0 rounded-bl-xl px-3 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  {plan.title}
                </CardTitle>
                <CardDescription className="leading-relaxed text-white/70">
                  {plan.description}
                </CardDescription>
                <div className="text-primary mt-4 text-3xl font-bold">
                  {plan.price}
                </div>
              </CardHeader>

              <CardContent className="mt-4 space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="text-primary mt-1 h-5 w-5" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="mt-auto pt-6">
                <Button
                  className={`w-full py-5 text-base ${
                    plan.highlight ? "bg-primary text-white" : ""
                  }`}
                >
                  {plan.button}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
