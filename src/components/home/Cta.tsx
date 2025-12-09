import { HoverBackground } from "@/components/ui/hover-background";
import { Sparkles } from "lucide-react"; // Optional: if you have lucide-react, adds a nice icon
import Link from "next/link";
import AnimatedButton from "../ui/animated-button";

export function CTA() {
  return (
    <section className="px-4 py-12 md:py-20">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl shadow-2xl">
        <HoverBackground className="group relative">
          {/* Optional: Subtle ambient glow behind text to ensure readability against hover effects */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/40" />

          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 md:py-32">
            {/* 1. Top Badge - Creates context before the big ask */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/60 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-yellow-200" />
              <span>Accepting new projects</span>
            </div>

            {/* 2. Main Heading - Tight tracking, responsive sizing */}
            <h2 className="max-w-4xl text-center text-5xl leading-[1.1] font-bold tracking-tight text-white lg:text-6xl">
              Ready to Build <br className="hidden md:block" />
              <span className="bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
                Something Great?
              </span>
            </h2>

            {/* 3. Subtext - Better contrast and reading width */}
            <p className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/60 md:text-xl">
              Your website is the first impression of your brand — make it
              count. Let’s turn your idea into a fast, modern, and
              high-converting digital experience.
            </p>

            {/* 4. Action Area - Spacing separation */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/contact" className="group/btn relative">
                {/* Button Component preserved exactly as requested */}
                <AnimatedButton>Start Your Project Today</AnimatedButton>
              </Link>
            </div>

            {/* Optional: Trust signal or secondary text could go here */}
            <p className="mt-6 text-xs tracking-widest text-white/30 uppercase">
              Response within 24 hours
            </p>
          </div>
        </HoverBackground>
      </div>
    </section>
  );
}
