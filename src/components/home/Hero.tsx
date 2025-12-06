"use client";
import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import AnimatedButton from "../ui/animated-button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Hero = () => {
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
              <Sparkles className="text-accent h-4 w-4" />
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-foreground mb-4 flex flex-wrap items-center justify-center gap-3 text-2xl font-medium md:text-3xl lg:text-4xl">
              <Code2 className="text-accent h-8 w-8" />
              Software Engineer
              <span className="text-muted-foreground">•</span>
              Web & App Developer
            </h2>
          </motion.div>

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
            <Link href="/form">
              <AnimatedButton>Start Your Project</AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
