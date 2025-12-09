"use client";

import { Marquee } from "../ui/marquee";

const Ribbon = () => {
  const items = [
    "WEB DEVELOPMENT",
    "UI/UX DESIGN",
    "SEO OPTIMIZATION",
    "CLOUD SERVICES"
  ];

  return (
    <section className="bg-primary my-10 flex w-full items-center justify-center py-4">
      <Marquee className="[--duration:20s]">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-3xl font-semibold text-white lg:text-4xl">
              {item}
            </span>
            <span className="text-5xl leading-none text-white">•</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Ribbon;
