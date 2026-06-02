import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site-data";
import { SectionHeader } from "./section-header";

export function Services() {
  return (
    <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
      <SectionHeader
        eyebrow="OUR SERVICES"
        title="Everything You Need for One Complete Journey"
        description="From your sacred pilgrimage to leisure travel abroad, we handle every detail so you can travel with confidence."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {s.isNew && (
                <span className="absolute top-3 right-3 bg-gold text-white px-2.5 py-1 rounded-full text-[10px] font-bold">
                  NEW
                </span>
              )}
              <div className="absolute -bottom-6 left-5 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl">
                {s.icon}
              </div>
            </div>

            {/* Body */}
            <div className="p-6 pt-9 flex flex-col flex-1">
              <h3 className="font-extrabold text-brand text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                {s.long}
              </p>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                {s.startingPrice ? (
                  <div>
                    <div className="text-[11px] text-gray-400">Starting from</div>
                    <div className="font-extrabold text-brand">
                      {s.startingPrice}
                    </div>
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    Custom quotes
                  </span>
                )}
                <span className="text-brand-light font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
