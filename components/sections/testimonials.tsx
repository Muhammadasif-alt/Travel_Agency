import Image from "next/image";
import { testimonials } from "@/lib/site-data";
import { avatar } from "@/lib/images";

export function Testimonials() {
  return (
    <section className="bg-brand px-[5%] py-20 text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <div className="text-brand-200 text-[13px] font-bold tracking-[2px] mb-2">
            TESTIMONIALS
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold">
            What Our Pilgrims Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 rounded-xl p-7 backdrop-blur-sm"
            >
              <div className="text-gold mb-3 text-base">★★★★★</div>
              <p className="text-sm leading-[1.7] opacity-95">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/30 flex-shrink-0">
                  <Image
                    src={avatar(t.name)}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs opacity-70">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
