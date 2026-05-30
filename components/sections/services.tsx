import Link from "next/link";
import { services } from "@/lib/site-data";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section className="px-[5%] py-20 max-w-[1200px] mx-auto">
      <SectionHeader
        eyebrow="OUR SERVICES"
        title="Everything You Need for Your Journey"
        description="From sacred pilgrimage to leisure travel — we handle it all"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {services.map((s, idx) => (
          <Link
            key={s.title}
            href={s.href}
            className={cn(
              "bg-white rounded-xl p-7 px-5 text-center shadow-sm border-t-4 transition-all hover:-translate-y-1 hover:shadow-lg relative block",
              idx % 2 === 0 ? "border-brand" : "border-brand-light"
            )}
          >
            {s.isNew && (
              <span className="absolute top-2 right-2 bg-gold text-white px-2 py-0.5 rounded-full text-[9px] font-bold">
                NEW
              </span>
            )}
            <div className="text-4xl mb-3">{s.icon}</div>
            <div className="font-bold text-brand mb-1.5">{s.title}</div>
            <div className="text-xs text-muted-foreground">{s.desc}</div>
            {s.startingPrice && (
              <div className="text-[11px] text-brand-light font-semibold mt-2">
                From {s.startingPrice}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
