"use client";

import PricingPage from "@/components/pricing/Pricing";
import {
  foreignPricing,
  indianPricing
} from "@/components/pricing/pricingData";
import AnimatedButton from "@/components/ui/animated-button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [isIndian, setIsIndian] = useState(false); // default → US

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();

        if (data.country_code === "IN") {
          setIsIndian(true);
        }
      } catch (err) {
        // fail silently — keep US pricing
      }
    }

    fetchCountry();
  }, []);

  const pricing = isIndian ? indianPricing : foreignPricing;

  return (
    <main className="pt-30">
      <div className="mb-4 text-center">
        <h1 className="text-6xl font-bold text-white/90">Pricing</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          Flexible, transparent pricing crafted for every stage — from startup
          to scale-up.
        </p>
      </div>

      <PricingPage data={pricing} />

      <section>
        <AdditionalPagePricing isIndian={isIndian} />
      </section>
    </main>
  );
}

function AdditionalPagePricing({ isIndian }: { isIndian: boolean }) {
  const priceText = isIndian ? "₹500/page" : "$10/page";

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <Card className="card-shadow bg-background border-0 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Need Extra Pages?
          </h3>

          <p className="mb-6 text-white/60">
            Add more pages to any tier for{" "}
            <span className="text-primary text-xl font-bold">{priceText}</span>
          </p>

          <div className="grid gap-4 text-sm md:grid-cols-3">
            <div className="bg-muted rounded-lg p-4">
              <div className="text-foreground mb-2 font-semibold">
                About Page
              </div>
              <p className="text-muted-foreground text-xs">
                Company story & team info
              </p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="text-foreground mb-2 font-semibold">
                Services Page
              </div>
              <p className="text-muted-foreground text-xs">
                Detailed service offerings
              </p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="text-foreground mb-2 font-semibold">
                Gallery/Portfolio
              </div>
              <p className="text-muted-foreground text-xs">
                Showcase your work
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-12 mb-14 text-center">
        <p className="mx-auto mb-6 max-w-2xl text-white/60">
          Not sure which plan is right for you? Let&apos;s discuss your project
          requirements and I&apos;ll help you choose the perfect solution.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href={"/contact"}>
            <AnimatedButton>Let&apos;s discuss Your Project</AnimatedButton>
          </Link>
        </div>
      </div>
    </>
  );
}
