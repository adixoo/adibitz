"use client";
import Logo from "@/components/Logo";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsX } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import AnimatedButton from "../ui/animated-button";
export const MobileNav = ({
  navItems
}: {
  navItems: { name: string; link: string }[];
}) => {
  const [open, setOpen] = useState(false);
  const item: Variants = {
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1
      }
    },
    show: {
      height: "100vh",
      opacity: 1,
      transition: { duration: 0.1, staggerChildren: 0.1 }
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const childItems = {
    hidden: { x: "-2vw", opacity: 0 },
    show: { x: 0, opacity: 1 }
  };
  return (
    <>
      <div className="bg-background/70 flex w-full flex-row items-center justify-between rounded-full px-4 py-2 backdrop-blur-2xl">
        <Logo />
        <IoIosMenu onClick={() => setOpen(!open)} className="size-6" />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
            className="bg-background fixed inset-0 z-50 flex flex-col items-center justify-center space-y-10 text-xl font-bold text-neutral-400 transition duration-200 hover:text-white"
          >
            <BsX
              className="absolute top-14 right-8 size-10"
              onClick={() => setOpen(!open)}
            />
            {navItems.map(
              (navItem: { name: string; link: string }, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  onClick={() => setOpen((c) => !c)}
                >
                  <motion.span variants={childItems} className="block">
                    {navItem.name}
                  </motion.span>
                </Link>
              )
            )}
            <motion.div variants={childItems}>
              <Link href={"/contact"} onClick={() => setOpen((c) => !c)}>
                <AnimatedButton>Start Your Project</AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
