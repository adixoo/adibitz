"use client";
import React from "react";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
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
    onSelect,
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
        additionalFeatures: val.additionalFeatures ?? [],
    }));

    return (
        <div className="relative isolate bg-transparent px-4 py-8 sm:py-12 lg:px-4 max-w-5xl mx-auto">
            {title && (
                <h2 className="pt-2 font-bold text-lg md:text-4xl text-center text-neutral-800 dark:text-neutral-100">
                    {title}
                </h2>
            )}

            {subtitle && (
                <p className="max-w-md mx-auto text-base text-center text-neutral-600 dark:text-neutral-300 mt-3">
                    {subtitle}
                </p>
            )}

            <div
                className={cn(
                    "mx-auto grid grid-cols-1 gap-6 mt-10",
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

const Card = ({ plan, onClick }: { plan: PricingItem; onClick?: () => void }) => {
    return (
        <div
            className={cn(
                "p-1 sm:p-4 md:p-4 rounded-3xl bg-background border border-gray-100 dark:border-neutral-800"
            )}
        >
            <div className="flex flex-col gap-4 h-full justify-start">
                <div
                    className={cn(
                        "p-4 bg-white/7 rounded-2xl shadow-input w-full"
                    )}
                >
                    <div className="flex justify-between items-start">
                        <p className="font-medium text-lg text-white/70">
                            {plan.name}
                        </p>

                        {plan.featured && (
                            <div className="font-medium text-xs px-3 py-1 rounded-full bg-neutral-900 dark:bg-white dark:text-black text-white">
                                Featured
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        <div className="flex items-end gap-3 text-white">
                            <span className="text-2xl font-bold">
                                {plan.currency}
                            </span>
                            <span className="text-3xl md:text-5xl font-bold ">
                                {plan.price}
                            </span>
                        </div>
                    </div>

                    <Button
                        type="button"
                        className="w-full mt-8 mb-2 px-3 py-2 rounded-full  text-white font-medium"
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

                {plan.additionalFeatures && plan.additionalFeatures.length > 0 && <Divider />}

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
    additional,
}: {
    children: React.ReactNode;
    additional?: boolean;
}) => {
    return (
        <div className="flex items-start justify-start gap-2 my-3">
            <div
                className={cn(
                    "h-4 w-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                    additional ? "bg-primary" : "bg-white/20"
                )}
            >
                <IconCheck className="h-3 w-3 stroke-[4px] text-white/80" />
            </div>

            <div className="font-medium text-black text-sm dark:text-white">
                {children}
            </div>
        </div>
    );
};

const Divider = () => {
    return (
        <div className="relative">
            <div className="w-full h-px dark:bg-neutral-950 bg-white" />
            <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />
            <div className="absolute inset-0 h-5 w-5 m-auto rounded-xl dark:bg-neutral-800 bg-white flex items-center justify-center">
                <IconPlus className="h-3 w-3 [stroke-width:4px] dark:text-neutral-300 text-black" />
            </div>
        </div>
    );
};
