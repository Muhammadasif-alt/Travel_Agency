import Image from "next/image";
import { Pill } from "./section-header";
import { images } from "@/lib/images";

const items = [
  {
    icon: "📞",
    title: "Book Free Consultation",
    desc: "Talk to a real Hajj & Umrah expert — no bots, no cost. We help you choose the right package.",
    image: images.team,
  },
  {
    icon: "💳",
    title: "Easy Booking & Payment",
    desc: "Flexible 3–6 month installment plans with secure, transparent pricing and zero hidden charges.",
    image: images.serviceTours,
  },
  {
    icon: "🕋",
    title: "Begin Your Sacred Journey",
    desc: "Visa, flights, hotels and guided ziyarat — all arranged so you travel with complete peace of mind.",
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
        ✛ ✛
      </div>

      <div className="relative max-w-[1200px] mx-auto">
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
              <div className="relative w-44 h-44 mx-auto mb-7">
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/10">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-2xl shadow-lg">
                  {it.icon}
                </span>
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
