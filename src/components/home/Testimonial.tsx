"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Marquee from "react-fast-marquee";
import LargeHeading from "../LargeHeading";

export function Testimonials() {
  return (
    <section>
      <LargeHeading>CLIENTS</LargeHeading>
      <div className="relative mx-auto h-full w-full max-w-7xl overflow-hidden px-4 pt-20 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white/80">

            What My <span className="text-primary">Clients</span> Say</h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg text-white/60">
            I’ve had the privilege of working with amazing clients across different industries. Here’s what they have to say about collaborating with me—delivering fast, modern, and effective websites that exceed expectations.
          </p>
        </div>

        <div className="relative">
          <div className="bg-charcoal h-full w-full overflow-hidden">
            <TestimonialsGrid />
          </div>
        </div>

        <div className="from-charcoal absolute inset-x-0 bottom-0 h-40 w-full bg-linear-to-t to-transparent"></div>
      </div>
    </section>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 6);
  const second = testimonials.slice(6, 12);
  return (
    <div className="relative mask-[linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]">
      <Marquee direction="right" pauseOnHover speed={50}>
        {first.map((testimonial, index) => (
          <Card key={`testimonial-${index}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex text-yellow-400">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <div className="flex flex-col">
                <QuoteDescription className="text-neutral-600 dark:text-neutral-300">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-neutral-400">
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>

      <Marquee className="mt-10" direction="right" pauseOnHover speed={70}>
        {second.map((testimonial, index) => (
          <Card key={`testimonial-${index}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex text-yellow-400">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <div className="flex flex-col">
                <QuoteDescription className="text-neutral-300">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-neutral-400">
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};

export const Card = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group bg-background mx-4 h-full min-h-[230px] max-w-md rounded-xl p-4 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] md:max-w-lg md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "py-2 text-sm font-semibold text-black md:text-base dark:text-white",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "max-w-sm text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  quote: string;
  name: string;
  designation?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Manu Arora",
    quote:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    designation: "Tech Innovator & Entrepreneur",
    rating: 5
  },
  {
    name: "Tyler Durden",
    quote:
      "I made a soap with the help of AI, it was so easy to use. It revolutionized my entire business model and production process.",
    designation: "Creative Director & Business Owner",
    rating: 4
  },
  {
    name: "Alice Johnson",
    quote:
      "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need.",
    designation: "Senior Software Engineer",
    rating: 5
  },
  {
    name: "Bob Smith",
    quote:
      "Absolutely revolutionary and a game-changer for our industry. Productivity has skyrocketed.",
    designation: "Industry Analyst",
    rating: 5
  },
  {
    name: "Cathy Lee",
    quote:
      "I can't imagine going back to how things were before this AI. It improved both work and daily life.",
    designation: "Product Manager",
    rating: 4
  },
  {
    name: "David Wright",
    quote:
      "It's like having a superpower! This tool enables things we once thought impossible.",
    designation: "Research Scientist",
    rating: 5
  },
  {
    name: "Eva Green",
    quote:
      "The efficiency it brings is unmatched. A vital tool for improving our end product.",
    designation: "Operations Director",
    rating: 4
  },
  {
    name: "Frank Moore",
    quote:
      "A robust solution that fits perfectly into our workflow. Enhances team capabilities greatly.",
    designation: "Project Manager",
    rating: 5
  },
  {
    name: "Grace Hall",
    quote:
      "Incredibly intuitive. Even non-technical team members benefit from it.",
    designation: "Marketing Specialist",
    rating: 4
  },
  {
    name: "Henry Ford",
    quote:
      "Saved us countless hours. Highly recommended for efficiency boosts.",
    designation: "Operations Analyst",
    rating: 5
  },
  {
    name: "Ivy Wilson",
    quote:
      "A must-have for any modern professional. It has changed the way we solve problems.",
    designation: "Business Consultant",
    rating: 5
  },
  {
    name: "Jack Brown",
    quote:
      "The results are always impressive. Helps us meet and exceed performance targets.",
    designation: "Performance Manager",
    rating: 4
  }
];
