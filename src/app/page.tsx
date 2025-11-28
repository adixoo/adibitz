import About from "@/components/home/About";
import { CTA } from "@/components/home/Cta";
import { FAQ } from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Projects from "@/components/home/Projects";
import Ribbon from "@/components/home/Ribbon";
import Services from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonial";
import Whyme from "@/components/home/Whyme";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Ribbon />
      <About />
      <Whyme />
      {/* <Projects /> */}
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
