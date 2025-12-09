"use client";
import { cn } from "@/lib/utils";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FAQs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most small websites and landing pages are completed in 2–5 days. Larger projects like business websites or e-commerce stores usually take 1–3 weeks depending on the features and complexity."
  },
  {
    question: "What technologies do you use?",
    answer:
      "I work with modern technologies including Next.js, TypeScript, TailwindCSS, Shadcn UI, and Framer Motion to deliver fast, scalable, and professional web experiences."
  },
  {
    question: "Do you provide hosting or domain?",
    answer:
      "I guide you in selecting the best domain and hosting provider based on your needs. Deployment is handled by me through Vercel or your preferred hosting provider."
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I frequently convert slow or outdated websites—especially WordPress sites—into fast, clean, custom-coded websites with improved UI/UX and performance."
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes. Every project includes free post-delivery support. Monthly maintenance plans are also available for ongoing updates, monitoring, and improvements."
  },
  {
    question: "How do payments work?",
    answer:
      "I take 50% once half of the work is completed, and the remaining amount upon final delivery. For bigger projects, I also offer milestone-based payment options."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40">
      <div>
        <h2 className="text-center text-5xl font-normal tracking-tight text-white/80 md:text-left">
          Frequently Asked{" "}
          <span className="text-primary font-bold">Questions</span>
        </h2>
        <p className="mt-4 text-center text-neutral-400 md:text-left md:text-lg">
          Here are the most common questions clients ask before working with me.
          Everything is transparent, simple, and designed to make your project
          experience smooth and stress-free.
        </p>
      </div>

      <div className="divide-y divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-4"
      onClick={() => setOpen(isOpen ? null : question)}
    >
      <div className="flex items-start">
        <div className="relative mt-1 mr-4 h-6 w-6 shrink-0">
          <IconPlus
            className={cn(
              "text-primary absolute inset-0 h-6 w-6 transform transition-all duration-200",
              isOpen && "scale-0 rotate-90"
            )}
          />
          <IconMinus
            className={cn(
              "text-primary absolute inset-0 h-6 w-6 scale-0 rotate-90 transform transition-all duration-200",
              isOpen && "scale-100 rotate-0"
            )}
          />
        </div>

        <div>
          <h3 className="text-lg font-medium text-neutral-200">{question}</h3>

          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden text-neutral-400"
              >
                <p className="mt-2">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
