"use client";
import { cn } from "@/lib/utils";
import React from "react";
import LargeHeading from "../LargeHeading";
import { Rating } from "../ui/rating";

export default function Testimonials() {
  return (
    <section>
      <LargeHeading>CLIENTS</LargeHeading>
      <div className="relative mx-auto h-full w-full max-w-7xl overflow-hidden px-4 pt-20 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl text-white/80">
            What My <span className="text-primary font-bold">Clients</span> Say
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-white/60 md:text-lg">
            I&apos;ve had the privilege of working with amazing clients across
            different industries. Here&apos;s what they have to say about
            collaborating with me—delivering fast, modern, and effective
            websites that exceed expectations.
          </p>
        </div>

        <div className="w-full space-y-4 pt-10">
          <TestimonialsGrid />
        </div>
      </div>
    </section>
  );
}

const TestimonialsGrid = () => {
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <Card key={`testimonial-${index}`} className="w-full">
          <Rating rating={testimonial.rating} />

          <Quote>{testimonial.quote}</Quote>
          <div className="mt-6 flex items-center gap-2">
            <div className="flex flex-col">
              <QuoteDescription className="text-neutral-300">
                {testimonial.name}
              </QuoteDescription>
              <QuoteDescription className="">
                {testimonial.designation}
              </QuoteDescription>
            </div>
          </div>
        </Card>
      ))}
    </>
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
        "group bg-background mx-auto h-full min-h-[230px] max-w-4xl rounded-xl p-6 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] md:p-8",
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
    <p
      className={cn(
        "mt-2 py-2 leading-relaxed font-light tracking-wide text-neutral-200 max-md:text-lg md:text-xl",
        className
      )}
    >
      {children}
    </p>
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
        "max-w-sm text-sm font-medium text-neutral-500 md:text-base",
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
    name: "Grisha Sanghavi",
    quote:
      "We've had the pleasure of working with Aadi for over a year, and we're thoroughly impressed with his web design and development skills. Aadi is not only talented but also a fantastic communicator. He's transparent about his process, and we've always felt confident in his abilities. We love working with him and look forward to collaborating on future projects. Highly recommended!",
    designation: "Founder of TheSocialBling",
    rating: 5
  },
  {
    name: "Harshit Tiwari",
    quote:
      "We've partnered with Aadi for over a year and have consistently been impressed by the quality of his web design and development work. His technical expertise is matched by his professionalism and clear communication. Aadi is transparent throughout the entire process, delivers reliably, and always ensures we feel confident in the project's direction. Working with him has been a pleasure, and we look forward to continuing our collaboration. Highly recommended.",
    designation: "Founder of Apexnexuss",
    rating: 5
  },
  {
    name: "Deepti Ranjan",
    quote:
      "Working with Aditya was one of the smoothest experiences I've had. He understood exactly what I wanted for my website and turned it into something even better than I imagined. His communication was clear, his ideas were sharp, and his execution was spot-on. Aditya doesn't just build websites, he brings your vision to life. I'm genuinely impressed and would recommend him to anyone looking for a talented and reliable developer.",
    designation: "Founder of Voxizo Media",
    rating: 5
  }
];
