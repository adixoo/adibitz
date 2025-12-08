"use client";
import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
  Twitter
} from "lucide-react";
import Link from "next/link";
import AnimatedButton from "../ui/animated-button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Hero = () => {
  // Social links configuration
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aditya-kumar-b77703385/",
      label: "LinkedIn"
    },
    { icon: Github, href: "https://github.com/adixoo", label: "GitHub" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aditya.anand.dev/",
      label: "Instagram"
    },
    { icon: Twitter, href: "https://x.com/aadi_ku", label: "X" },
    { icon: Mail, href: "mailto:aadi.aanand89@gmail.com", label: "Email" }
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full opacity-30">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, transparent 40%, var(--primary) 100%)"
          }}
        />
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-background flex items-center gap-2 text-white"
            >
              <Sparkles className="h-4 w-4 text-yellow-200" />
              Available for new projects
            </HoverBorderGradient>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl"
          >
            Build Better Websites. Grow Faster.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-lg text-white/50 md:text-xl"
          >
            I design, develop, and maintain modern, high-performance websites
            that help businesses look professional and convert more customers
            online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <AnimatedButton>Start Your Project</AnimatedButton>
            </Link>
          </motion.div>

          {/* Social Icons Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1 // Stagger effect
                }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  color: "white" // Brighten on hover
                }}
                whileTap={{ scale: 0.9 }}
                className="text-white/50 transition-colors hover:text-white"
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
