import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Packages } from "@/components/sections/packages";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { AreasServed } from "@/components/sections/areas-served";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Packages />
      <About />
      <Testimonials />
      <AreasServed />
      <Faq />
      <Contact />
    </>
  );
}
