"use client";
import { cn } from "@/lib/utils";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { foreignPricing, indianPricing } from "./pricingData";

export type PricingItem = {
  id: string;
  name: string;
  price: string | number;
  currency: string;
  features: string[];
  featured?: boolean;
  additionalFeatures?: string[];
};

export type PricingData = Record<
  string,
  {
    name: string;
    price: string | number;
    currency: string;
    features: string[];
    featured?: boolean;
    additionalFeatures?: string[];
  }
>;

export default function Pricing({
  onSelect
}: {
  title?: string;
  subtitle?: string;
  onSelect?: (id: string) => void;
}) {
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
        console.error("Error fetching geolocation data:", err);
      }
    }

    fetchCountry();
  }, []);

  const pricing = (isIndian ? indianPricing : foreignPricing) as PricingData;

  const plans: PricingItem[] = Object.entries(pricing).map(([key, val]) => ({
    id: key,
    name: val.name,
    price: val.price,
    currency: val.currency,
    features: val.features ?? [],
    featured: val.featured ?? false,
    additionalFeatures: val.additionalFeatures ?? []
  }));

  return (
    <div className="relative isolate mx-auto max-w-7xl bg-transparent px-4 py-8 sm:py-12 lg:px-4">
      <div
        className={cn(
          "mx-auto mt-10 grid grid-cols-1 gap-4",
          // 2x2 grid on medium and above
          "md:grid-cols-1 lg:grid-cols-3"
        )}
      >
        {plans.map((plan) => (
          <Card
            key={plan.id}
            plan={plan}
            onClick={() => {
              onSelect?.(plan.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({ plan }: { plan: PricingItem; onClick?: () => void }) => {
  return (
    <div
      className={cn(
        "bg-background rounded-3xl border border-gray-100 p-1 sm:p-4 md:p-4 dark:border-neutral-800"
      )}
    >
      <div className="flex h-full flex-col justify-start gap-4">
        <div className={cn("shadow-input w-full rounded-2xl bg-white/7 p-4")}>
          <div className="flex items-start justify-between">
            <p className="text-base font-medium text-white/70 md:text-lg">
              {plan.name}
            </p>

            {plan.featured && (
              <div className="bg-primary rounded-full px-3 py-1 text-xs font-medium text-white">
                Featured
              </div>
            )}
          </div>

          <div className="mt-6">
            <div className="flex items-end gap-3 text-white">
              <span className="text-xl font-bold md:text-2xl">
                {plan.currency}
              </span>
              <span className="text-3xl font-bold md:text-4xl">
                {plan.price}
              </span>
            </div>
          </div>

          {/* <Button
            type="button"
            className="mt-8 mb-2 w-full rounded-full px-3 py-2 font-medium text-white"
            onClick={onClick}
          >
            Get Started
          </Button> */}
        </div>

        <div className="mt-1 p-4">
          {plan.features.map((feature, idx) => (
            <Step key={idx}>{feature}</Step>
          ))}
        </div>

        {plan.additionalFeatures && plan.additionalFeatures.length > 0 && (
          <Divider />
        )}

        <div className="p-4">
          {plan.additionalFeatures?.map((feature, idx) => (
            <Step additional key={idx}>
              {feature}
            </Step>
          ))}
        </div>
      </div>
    </div>
  );
};

const Step = ({
  children,
  additional
}: {
  children: React.ReactNode;
  additional?: boolean;
}) => {
  return (
    <div className="my-3 flex items-start justify-start gap-2">
      <div
        className={cn(
          "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
          additional ? "bg-primary" : "bg-white/20"
        )}
      >
        <IconCheck className="h-3 w-3 stroke-[4px] text-white/80" />
      </div>

      <div className="text-sm font-normal text-black dark:text-white">
        {children}
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="relative">
      <div className="h-px w-full bg-white dark:bg-neutral-950" />
      <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
      <div className="absolute inset-0 m-auto flex h-5 w-5 items-center justify-center rounded-xl bg-white dark:bg-neutral-800">
        <IconPlus className="h-3 w-3 stroke-[4px] text-black dark:text-neutral-300" />
      </div>
    </div>
  );
};
