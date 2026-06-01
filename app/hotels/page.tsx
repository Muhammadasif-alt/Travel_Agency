import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { hotelOptions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Hotel Booking â€” Makkah, Madinah, Dubai & Worldwide",
  description:
    "Discounted hotel bookings by Nusarat Madina (Lodhran Â· Multan Â· Bahawalpur) â€” Haram-view 5â˜… stays in Makkah & Madinah plus family hotels in Dubai, Istanbul & beyond.",
  alternates: { canonical: "/hotels" },
};

const whyUs = [
  {
    icon: "ðŸ•‹",
    title: "Haram-View Rooms",
    desc: "Direct contracts with hotels facing the Haram & Masjid Nabawi.",
  },
  {
    icon: "ðŸ’¸",
    title: "Best Rate Promise",
    desc: "Wholesale nightly rates locked in below public booking sites.",
  },
  {
    icon: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§",
    title: "Family Room Blocks",
    desc: "Adjoining rooms and group blocks held for large families.",
  },
  {
    icon: "ðŸ›Ÿ",
    title: "On-Trip Support",
    desc: "Any issue at check-in? Our team sorts it on a single call.",
  },
];

export default function HotelsPage() {
  return (
    <>
      <PageHero
        image={images.serviceHotel}
        imageAlt="Hotel room"
        eyebrow="HOTEL BOOKING"
        title="Stay Close to the Haram â€” and Everywhere Else"
        subtitle="From Kaaba-view 5â˜… suites to budget-friendly family rooms, booked at rates the public can't get."
        crumbs={[{ label: "Home", href: "/" }, { label: "Hotels" }]}
      />

      {/* Hotel options */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-10 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            FEATURED STAYS
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Popular Hotels We Book
          </h2>
          <p className="text-muted-foreground mt-3 text-[15px] max-w-2xl mx-auto">
            A selection of our most-requested properties. Tell us your dates and
            budget â€” we&apos;ll match you with the right stay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hotelOptions.map((h) => (
            <div
              key={h.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand hover:shadow-md transition-all flex flex-col"
            >
              <span className="inline-block self-start bg-brand-100 text-brand text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
                {h.city}
              </span>
              <div className="text-gold text-sm mb-1">
                {"â˜…".repeat(h.stars)}
              </div>
              <div className="font-extrabold text-brand text-lg leading-tight">
                {h.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                ðŸ“ {h.distance}
              </div>

              <ul className="mt-4 space-y-1.5 flex-1">
                {h.perks.map((p) => (
                  <li key={p} className="flex gap-2 items-start text-sm">
                    <span className="text-brand-light mt-0.5">â—</span>
                    <span className="text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-[11px] text-gray-400">Starting from</div>
                <div className="font-extrabold text-brand">{h.startingPrice}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              WHY BOOK WITH NUSARAT MADINA
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Hotels Booked the Right Way
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:border-brand hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {w.icon}
                </div>
                <div className="font-bold text-brand mb-2">{w.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {w.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="/contact">Request a Hotel Quote â†’</a>
            </Button>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Need a hotel near the Haram?"
        subtitle="Send us your dates â€” we'll come back with options across every budget."
        primary={{ label: "Get a Quote", href: "/contact" }}
        secondary={{ label: "WhatsApp Us", href: "https://wa.me/923082699997" }}
      />
    </>
  );
}