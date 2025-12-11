import dynamic from "next/dynamic";

// Static imports for components that should load immediately (optional, but good practice for 'Hero')
import Hero from "@/components/home/Hero";
import Ribbon from "@/components/home/Ribbon";

// Dynamic imports for components that can be lazy-loaded
// These components will be loaded only when they are rendered on the client side.
const About = dynamic(() => import("@/components/home/About"));
const CTA = dynamic(() => import("@/components/home/Cta"));
const FAQ = dynamic(() => import("@/components/home/Faq"));
const Pricing = dynamic(() => import("@/components/pricing/Pricing"));
const Services = dynamic(() => import("@/components/home/Services"));
const Testimonials = dynamic(() => import("@/components/home/Testimonial"));
const Whyme = dynamic(() => import("@/components/home/Whyme"));

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Ribbon />
      <About />
      <Whyme />
      <section className="w-full py-20 text-center">
        <div className="px-4">
          <h2 className="text-5xl text-white/80">Pricing</h2>

          <p className="mx-auto mt-6 max-w-4xl leading-relaxed text-white/60 md:text-lg">
            I focus on delivering clean, high-quality work with a process that’s
            simple, transparent, and built around what your business truly
            needs. Here’s what makes my services the right fit for modern brands
            and startups.
          </p>
        </div>
        <Pricing />
      </section>
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
