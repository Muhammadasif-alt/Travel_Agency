import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { getTours } from "@/lib/content";

export const metadata: Metadata = {
  title: "Group & Leisure Tours — Dubai, Turkey, Malaysia & More",
  description:
    "Guided ziyarat tours plus leisure holidays to Dubai, Turkey, Malaysia & Thailand for families & groups from Lodhran, Multan & Bahawalpur. Fully managed by Nusarat Madina.",
  alternates: { canonical: "/tours" },
};

const tourTypes = [
  {
    icon: "🕌",
    title: "Ziyarat Tours",
    desc: "Guided visits to the historic sites of Makkah & Madinah with an Urdu-speaking scholar.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Holidays",
    desc: "Kid-friendly itineraries with comfortable hotels and relaxed pacing.",
  },
  {
    icon: "💼",
    title: "Corporate Groups",
    desc: "Incentive trips and team retreats with one consolidated invoice.",
  },
  {
    icon: "💍",
    title: "Honeymoon Packages",
    desc: "Romantic getaways with premium stays and private transfers.",
  },
];

export default async function ToursPage() {
  const tourPackages = await getTours();
  return (
    <>
      <PageHero
        image={images.serviceTours}
        imageAlt="Dubai skyline"
        eyebrow="GROUP & LEISURE TOURS"
        title="Beyond the Pilgrimage — See the World With Us"
        subtitle="Guided ziyarat plus curated holidays to Dubai, Turkey, Malaysia and Thailand, fully managed end-to-end."
        crumbs={[{ label: "Home", href: "/" }, { label: "Tours" }]}
      />

      {/* Tour packages */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-10 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            HOLIDAY PACKAGES
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Popular Tour Destinations
          </h2>
          <p className="text-muted-foreground mt-3 text-[15px] max-w-2xl mx-auto">
            Sample packages below — every trip is customised to your dates,
            budget and group size.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourPackages.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="gradient-brand p-6 text-white">
                <div className="text-4xl">{t.flag}</div>
                <div className="text-xl font-extrabold mt-2">
                  {t.destination}
                </div>
                <div className="text-xs opacity-90 mt-0.5">{t.nights}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {t.highlights}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] text-gray-400">
                      Starting from
                    </div>
                    <div className="font-extrabold text-brand">
                      {t.startingPrice}
                    </div>
                  </div>
                  <Button asChild variant="book" size="sm">
                    <a href="/contact">Book →</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tour types */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              WE ARRANGE
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Tours for Every Occasion
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tourTypes.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:border-brand hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {t.icon}
                </div>
                <div className="font-bold text-brand mb-2">{t.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Planning a group trip or holiday?"
        subtitle="Tell us where you want to go — we'll build a custom itinerary and quote."
        primary={{ label: "Plan My Tour", href: "/contact" }}
        secondary={{ label: "WhatsApp Us", href: "https://wa.me/923082699997" }}
      />
    </>
  );
}
