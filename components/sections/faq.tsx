import Image from "next/image";
import { images, avatar } from "@/lib/images";
import { Pill } from "./section-header";
import { FaqAccordion } from "./faq-accordion";
import { getFaqs } from "@/lib/content";

export async function Faq() {
  const faqs = await getFaqs();
  if (faqs.length === 0) return null;

  return (
    <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image + floating stat card */}
        <div className="relative">
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images.aboutMosque}
              alt="Pilgrims at the mosque"
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 sm:-left-6 bg-white rounded-2xl shadow-xl p-5 w-60">
            <div className="font-bold text-brand mb-2">Happy Pilgrims</div>
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {["Ahmed", "Fatima", "Bilal"].map((n) => (
                  <span
                    key={n}
                    className="w-9 h-9 rounded-full ring-2 ring-white overflow-hidden"
                  >
                    <Image src={avatar(n, { bg: "2563eb" })} alt={n} width={36} height={36} />
                  </span>
                ))}
              </div>
              <span className="ml-3 w-9 h-9 rounded-full bg-brand-light text-white text-xs font-bold flex items-center justify-center">
                15K+
              </span>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div>
          <Pill>Most Asked Questions</Pill>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-brand leading-tight mt-5 mb-8">
            Everything You Need to Know
          </h2>
          <FaqAccordion items={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
        </div>
      </div>
    </section>
  );
}
