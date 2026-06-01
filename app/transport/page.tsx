import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaStrip } from "@/components/sections/cta-strip";
import { images } from "@/lib/images";
import { transportOptions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Transport Services â€” Airport & Intercity Transfers",
  description:
    "Comfortable AC transport in Saudi Arabia & Pakistan â€” airport transfers, Makkahâ€“Madinah transfers, plus local pick-up from Lodhran, Multan & Bahawalpur. Cars, vans & coaches.",
  alternates: { canonical: "/transport" },
};

const routes = [
  { route: "Jeddah Airport â†’ Makkah Hotel", time: "~1 hr 15 min" },
  { route: "Makkah â†’ Madinah (intercity)", time: "~4 hrs 30 min" },
  { route: "Madinah Airport â†’ Hotel", time: "~25 min" },
  { route: "Makkah Ziyarat Tour (half day)", time: "~3 hrs" },
];

export default function TransportPage() {
  return (
    <>
      <PageHero
        image={images.serviceTransport}
        imageAlt="Passenger bus"
        eyebrow="TRANSPORT"
        title="Comfortable, Reliable Transport on Every Leg"
        subtitle="Airport pick-ups, Makkahâ€“Madinah transfers and private rides â€” in clean, air-conditioned vehicles with verified drivers."
        crumbs={[{ label: "Home", href: "/" }, { label: "Transport" }]}
      />

      {/* Fleet */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-10 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            OUR FLEET
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Choose the Right Vehicle
          </h2>
          <p className="text-muted-foreground mt-3 text-[15px] max-w-2xl mx-auto">
            Whether you&apos;re a couple or a 50-strong group, we have the right
            vehicle â€” booked as part of your package or on its own.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {transportOptions.map((t) => (
            <div
              key={t.title}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-brand hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-3xl mb-4">
                {t.icon}
              </div>
              <div className="font-extrabold text-brand">{t.title}</div>
              <div className="text-xs text-brand-light font-semibold mt-1">
                {t.capacity}
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular routes */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-10 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              POPULAR ROUTES
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Transfers We Handle Daily
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {routes.map((r) => (
              <div
                key={r.route}
                className="flex items-center justify-between px-6 py-4 gap-4"
              >
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  ðŸ›£ï¸ {r.route}
                </span>
                <span className="text-brand-light font-semibold text-sm whitespace-nowrap">
                  {r.time}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Travel times are approximate and depend on traffic & season.
          </p>
        </div>
      </section>

      <CtaStrip
        title="Need a transfer or a group coach?"
        subtitle="Tell us your route, dates and group size for an instant quote."
        primary={{ label: "Get a Quote", href: "/contact" }}
        secondary={{ label: "WhatsApp Us", href: "https://wa.me/923082699997" }}
      />
    </>
  );
}
