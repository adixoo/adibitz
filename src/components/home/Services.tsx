import { Laptop, Megaphone, Palette } from "lucide-react";
import LargeHeading from "../LargeHeading";

const services = [
  {
    title: "Web Development",
    icon: (
      <Laptop className="group-hover:text-primary mb-6 size-20 text-white/60" />
    ),
    highlight: false
  },
  {
    title: "UI/UX Design",
    icon: (
      <Palette className="group-hover:text-primary mb-6 size-20 text-white/60" />
    ),
    highlight: true
  },
  {
    title: "SEO & Digital Growth",
    icon: (
      <Megaphone className="group-hover:text-primary mb-6 size-20 text-white/60" />
    ),
    highlight: false
  }
];

const Services = () => {
  return (
    <section >
      <LargeHeading>SERVICES</LargeHeading>

      <div className="px-4">
        <div className="mx-auto w-full max-w-7xl py-20">
        <div className="grid items-start gap-6 lg:gap-20 md:grid-cols-2">
          <div>
            <h2 className=" leading-tight font-normal text-white/80 text-5xl">
              High-Quality
              <br />
              Digital Services{" "}
              <span className="font-bold text-primary">Built for You.</span>
            </h2>
          </div>

          <p className=" leading-relaxed text-white/60 md:text-lg">
            I help businesses grow with clean, fast, and modern digital
            solutions — from high-performance websites to engaging interfaces
            and SEO strategies that boost visibility and drive real results.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group hover:outline-primary flex flex-col items-center justify-center rounded-3xl p-10 py-30 shadow-sm outline-2 outline-white/20 transition hover:shadow-md hover:outline-4`}
            >
              <span className="group-hover:text-primary transition-colors">
                {service.icon}
              </span>

              <h3 className="text-center text-xl font-medium text-white/70">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
