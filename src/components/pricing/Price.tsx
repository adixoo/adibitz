"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingTiers = [
  {
    title: "Starter Website",
    icon: Zap,
    price: "₹1,000 - ₹2,000",
    description: "Perfect for simple one-page websites",
    features: [
      "Single home page",
      "Static content (no backend)",
      "Basic mobile responsiveness",
      "Minimal animations",
      "Simple navbar + footer",
      "Basic color styling",
      "Placeholder images",
      "WhatsApp / Email contact button",
      "Fast, lightweight UI",
      "Basic SEO (title + meta description)",
    ],
    color: "from-slate-500 to-slate-600",
  },
  {
    title: "Standard Website",
    icon: Sparkles,
    price: "₹2,000 - ₹3,000",
    description: "For small multi-page websites",
    features: [
      "Everything in Starter, plus:",
      "2 to 4 pages",
      "Better page layouts",
      "Improved responsiveness",
      "Smooth basic animations (fade/slide)",
      "Contact form (formsubmit.io)",
      "Google Maps embed",
    ],
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Advanced Website",
    icon: Rocket,
    price: "₹3,000 - ₹4,000",
    description: "Enhanced design & smoother interactions",
    popular: true,
    features: [
      "Everything in Standard, plus:",
      "Framer Motion animations (light)",
      "Fully responsive on all breakpoints",
      "Improved typography & spacing",
      "Icons + micro-interactions",
      "Back-to-top button",
      "Optional light/dark mode",
    ],
    color: "from-accent to-cyan-600",
  },
  {
    title: "Premium Website",
    icon: Star,
    price: "₹4,000 - ₹5,000",
    description: "Complete landing pages with modern UI/UX",
    features: [
      "Everything in Advanced, plus:",
      "Full landing page design",
      "High-quality Framer Motion animations",
      "Premium hero section",
      "Modern UI components",
      "SEO-friendly structure",
      "Fully working contact form",
      "On-page SEO tags (OG + Twitter Cards)",
      "Clean, reusable component structure",
      "Dark mode toggle",
    ],
    color: "from-violet-500 to-purple-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Simple & Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear, feature-based pricing for small business and personal
            websites. Every tier builds on the previous one with enhanced
            features.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12"
        >
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className={`relative h-full p-6 card-shadow hover:card-shadow-hover transition-smooth group ${
                    tier.popular
                      ? "border-2 border-accent ring-2 ring-accent/20"
                      : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-linear-to-br ${tier.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {tier.title}
                    </h3>
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                      {tier.price}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6 min-h-[280px]">
                    {tier.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm ${
                          feature.startsWith("Everything in")
                            ? "font-semibold text-foreground pt-2 border-t border-border"
                            : ""
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            tier.popular ? "text-accent" : "text-primary"
                          }`}
                        />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full transition-smooth"
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 card-shadow text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Need Extra Pages?
            </h3>
            <p className="text-muted-foreground mb-6">
              Add more pages to any tier for just{" "}
              <span className="text-accent font-bold text-xl">₹500/page</span>
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold text-foreground mb-2">
                  About Page
                </div>
                <p className="text-muted-foreground text-xs">
                  Company story & team info
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold text-foreground mb-2">
                  Services Page
                </div>
                <p className="text-muted-foreground text-xs">
                  Detailed service offerings
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold text-foreground mb-2">
                  Gallery/Portfolio
                </div>
                <p className="text-muted-foreground text-xs">
                  Showcase your work
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Not sure which plan is right for you? Let&apos;s discuss your
            project requirements and I&apos;ll help you choose the perfect
            solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Start Your Project</Button>
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
