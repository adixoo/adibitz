"use client";
import { cn } from "@/lib/utils";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import React from "react";
import { Button } from "../ui/button";

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

export default function PricingGrid({
  title,
  subtitle,
  data,
  onSelect
}: {
  title?: string;
  subtitle?: string;
  data: PricingData;
  onSelect?: (id: string) => void;
}) {
  const plans: PricingItem[] = Object.entries(data).map(([key, val]) => ({
    id: key,
    name: val.name,
    price: val.price,
    currency: val.currency,
    features: val.features ?? [],
    featured: val.featured ?? false,
    additionalFeatures: val.additionalFeatures ?? []
  }));

  return (
    <div className="relative isolate mx-auto max-w-5xl bg-transparent px-4 py-8 sm:py-12 lg:px-4">
      {title && (
        <h2 className="pt-2 text-center text-lg font-bold text-neutral-800 md:text-4xl dark:text-neutral-100">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mx-auto mt-3 max-w-md text-center text-base text-neutral-600 dark:text-neutral-300">
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "mx-auto mt-10 grid grid-cols-1 gap-6",
          // 2x2 grid on medium and above
          "md:grid-cols-2 lg:grid-cols-2"
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

const Card = ({
  plan,
  onClick
}: {
  plan: PricingItem;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "bg-background rounded-3xl border border-gray-100 p-1 sm:p-4 md:p-4 dark:border-neutral-800"
      )}
    >
      <div className="flex h-full flex-col justify-start gap-4">
        <div className={cn("shadow-input w-full rounded-2xl bg-white/7 p-4")}>
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-white/70">{plan.name}</p>

            {plan.featured && (
              <div className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-black">
                Featured
              </div>
            )}
          </div>

          <div className="mt-6">
            <div className="flex items-end gap-3 text-white">
              <span className="text-2xl font-bold">{plan.currency}</span>
              <span className="text-3xl font-bold md:text-5xl">
                {plan.price}
              </span>
            </div>
          </div>

          <Button
            type="button"
            className="mt-8 mb-2 w-full rounded-full px-3 py-2 font-medium text-white"
            onClick={onClick}
          >
            Get Started
          </Button>
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

      <div className="text-sm font-medium text-black dark:text-white">
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
        <IconPlus className="h-3 w-3 [stroke-width:4px] text-black dark:text-neutral-300" />
      </div>
    </div>
  );
};
