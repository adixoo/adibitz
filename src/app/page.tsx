import dynamic from "next/dynamic";

// Static imports for components that should load immediately (optional, but good practice for 'Hero')
import Hero from "@/components/home/Hero";
import Ribbon from "@/components/home/Ribbon";

// Dynamic imports for components that can be lazy-loaded
// These components will be loaded only when they are rendered on the client side.
const About = dynamic(() => import("@/components/home/About"));
const CTA = dynamic(() => import("@/components/home/Cta"));
const FAQ = dynamic(() => import("@/components/home/Faq"));
const Pricing = dynamic(() => import("@/components/home/Pricing"));
const Services = dynamic(() => import("@/components/home/Services"));
const Testimonials = dynamic(() => import("@/components/home/Testimonial"));
const Whyme = dynamic(() => import("@/components/home/Whyme"));


export default function Home() {
  return (
    <>
      {/* Components likely needed for the initial view are statically imported for faster loading */}
      <Hero />
      <Services /> {/* Often one of the first things a user sees, but we'll dynamic-import it to show the pattern */}
      <Ribbon />
      
      {/* The rest of the page components are lazy-loaded */}
      <About />
      <Whyme />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}