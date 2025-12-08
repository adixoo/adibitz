import { cn } from "@/lib/utils";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
  const pages = [
    {
      title: "Pricing",
      href: "/pricing"
    },
    {
      title: "Contact",
      href: "/contact"
    },
    {
      title: "Terms",
      href: "/terms"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden px-8 py-20">
      <div className="absolute inset-0 -z-10 h-full w-full opacity-25">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, transparent 40%, var(--primary) 100%)"
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl items-start justify-between text-sm text-neutral-500 md:px-8">
        <div className="relative flex w-full flex-col items-center justify-center">
          <div className="mb-8 md:flex">
            <Logo />
          </div>

          <ul className="hover:text-text-neutral-800 flex list-none flex-col items-center gap-4 text-neutral-600 transition-colors sm:flex-row dark:text-neutral-300">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="hover:text-text-neutral-800 transition-colors"
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="mx-auto mt-8 max-w-7xl" />
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-between sm:flex-row">
          <p className="mb-8 text-neutral-500 sm:mb-0 dark:text-neutral-400">
            &copy; Aditbitz 2025. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#">
              <IconBrandTwitter className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="#">
              <IconBrandLinkedin className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="#">
              <IconBrandGithub className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="#">
              <IconBrandFacebook className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="#">
              <IconBrandInstagram className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        } as React.CSSProperties
      }
      className={cn(
        "h-(--height) w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "bg-size-[var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)]",
        "mask-exclude",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Adibitz logo"
        width={512}
        height={512}
        className="h-10 w-auto sm:h-16"
      />
      <span className="sr-only">Adibitz</span>
    </Link>
  );
};
