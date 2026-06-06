import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Packages } from "@/components/sections/packages";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { StatsBand } from "@/components/sections/stats-band";
import { About } from "@/components/sections/about";
import { Experts } from "@/components/sections/experts";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { AreasServed } from "@/components/sections/areas-served";
import { BlogNews } from "@/components/sections/blog-news";
import { getFaqs } from "@/lib/content";

export default async function HomePage() {
  const faqs = await getFaqs();
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <>
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <Hero />
      <Services />
      <Packages />
      <WhyChooseUs />
      <StatsBand />
      <About />
      <Experts />
      <Testimonials />
      <AreasServed />
      <Faq />
      <BlogNews />
      <Contact />
    </>
  );
}
