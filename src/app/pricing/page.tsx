"use client";

import CTA from "@/components/home/Cta";
import Pricing from "@/components/pricing/Pricing";

export default function Page() {
  return (
    <main className="pt-30">
      <div className="mb-4 text-center">
        <h1 className="text-6xl font-bold text-white/90 lg:text-7xl">
          Pricing
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60 md:text-xl">
          Flexible, transparent pricing crafted for every stage — from startup
          to scale-up.
        </p>
      </div>

      <Pricing />

      <CTA />
    </main>
  );
}
