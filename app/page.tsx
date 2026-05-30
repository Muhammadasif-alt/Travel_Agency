import { Hero } from "@/components/sections/hero";
import { SearchBox } from "@/components/sections/search-box";
import { Services } from "@/components/sections/services";
import { Packages } from "@/components/sections/packages";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchBox />
      <Services />
      <Packages />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
