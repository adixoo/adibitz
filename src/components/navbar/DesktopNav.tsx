"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import { AnimatedButtonWhite } from "../ui/animated-button";

export const DesktopNav = ({
  navItems
}: {
  navItems: { name: string; link: string }[];
}) => {
  return (
    <div className="bg-background/70 flex flex-row items-center space-x-10 rounded-full border py-2 pr-2 pl-4 antialiased backdrop-blur-2xl">
      <Logo />
      {navItems.map((navItem: { name: string; link: string }, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className="relative text-sm text-white/70 uppercase transition-colors hover:text-white"
        >
          {/* <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 scale-105 transform rounded-xl bg-linear-to-b from-[#464d55] to-[#25292e]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 }
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 }
                }}
              />
            )}
          </AnimatePresence> */}
          {navItem.name}
        </Link>
      ))}
      <Link href="/signup">
        <AnimatedButtonWhite>Start Your Project</AnimatedButtonWhite>
      </Link>
    </div>
  );
};
