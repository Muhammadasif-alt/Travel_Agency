import Image from "next/image";
import { Pill } from "./section-header";
import { images } from "@/lib/images";

const items = [
  {
    title: "Free Consultation",
    desc: "Speak directly with a real Hajj and Umrah expert — no bots and no cost. We help you choose the package that fits your budget and your family.",
    image: images.team,
  },
  {
    title: "Easy Booking & Payment",
    desc: "Flexible installment plans over 3 to 6 months, with secure and transparent pricing and zero hidden charges.",
    image: images.serviceTours,
  },
  {
    title: "Complete Peace of Mind",
    desc: "Visa, flights, hotels and guided ziyarat are all arranged for you, so your only focus is your worship.",
    image: images.heroKaaba,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand px-[5%] py-20 text-white">
      {/* decorative squares */}
      <div className="pointer-events-none absolute -left-6 top-10 w-28 h-28 border border-white/10 rotate-12" />
      <div className="pointer-events-none absolute left-10 top-24 w-20 h-20 bg-brand-light/10 rotate-12" />
      <div className="pointer-events-none absolute right-10 top-1/3 text-brand-light/30 text-5xl font-bold select-none">
        âœ› âœ›
      </div>

      <div className="relative max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <Pill>Why Choose Us</Pill>
          <h2 className="text-3xl md:text-[42px] font-extrabold mt-5">
            Your Sacred Journey, In Trusted Hands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`text-center px-6 ${
                i < items.length - 1 ? "md:border-r md:border-dashed md:border-white/20" : ""
              }`}
            >
              <div className="relative w-44 h-44 mx-auto mb-7 rounded-full overflow-hidden ring-4 ring-white/10">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{it.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-xs mx-auto">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
