import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { PackageCard } from "@/components/sections/package-card";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Faq } from "@/components/sections/faq";
import { images } from "@/lib/images";
import {
  umrahPackages,
  umrahProcess,
  umrahWhyUs,
  umrahIncludes,
  umrahExcludes,
  ziyaratGallery,
  umrahBestTimes,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Umrah Packages â€” Lodhran, Multan & Bahawalpur",
  description:
    "Affordable Umrah packages from Lodhran, Multan & Bahawalpur. Family deals, Ramadan Umrah, Haram-view hotels & fast Umrah visa across Pakistan.",
  alternates: { canonical: "/umrah" },
};

export default function UmrahPage() {
  return (
    <>
      <PageHero
        image={images.umrahBanner}
        imageAlt="Kaaba in Makkah"
        eyebrow="UMRAH PACKAGES"
        title="Begin Your Umrah Journey with Confidence"
        subtitle="Custom packages for families, couples and groups â€” Haram-view hotels and visa included."
        crumbs={[{ label: "Home", href: "/" }, { label: "Umrah Packages" }]}
      />

      {/* Why Us */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-12 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            WHY NUSARAT MADINA
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Four Reasons Families Trust Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {umrahWhyUs.map((w) => (
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
      </section>

      {/* Filter chips + Packages */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              ALL PACKAGES
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Choose Your Umrah Package
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {["All", "Economy", "Family", "VIP", "Ramadan", "Short Trip"].map(
              (chip, i) => (
                <button
                  key={chip}
                  className={
                    i === 0
                      ? "bg-brand text-white px-4 py-2 rounded-full text-sm font-medium"
                      : "bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:border-brand hover:text-brand transition-colors"
                  }
                >
                  {chip}
                </button>
              )
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umrahPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included / Excluded */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-10 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            HONEST PRICING
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            What&apos;s Included &amp; What&apos;s Not
          </h2>
          <p className="text-muted-foreground mt-3 text-[15px] max-w-2xl mx-auto">
            We list everything upfront â€” what your package covers and what you should
            budget separately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border-2 border-brand-light/30 p-7">
            <div className="font-extrabold text-brand text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center text-sm">
                âœ“
              </span>
              What&apos;s Included
            </div>
            <ul className="space-y-2.5">
              {umrahIncludes.map((item) => (
                <li key={item} className="flex gap-3 items-start text-sm">
                  <span className="text-brand-light flex-shrink-0 mt-0.5">â—</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-7">
            <div className="font-extrabold text-gray-700 text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-sm">
                âœ•
              </span>
              Not Included
            </div>
            <ul className="space-y-2.5">
              {umrahExcludes.map((item) => (
                <li key={item} className="flex gap-3 items-start text-sm">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">â—‹</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
              Pro tip: ask our consultant about meal-plan upgrades if you&apos;d like
              all-inclusive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Ziyarat */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              ZIYARAT TOUR
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Historic Sites You&apos;ll Visit
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px]">
              Included in Standard & VIP packages â€” guided by an Urdu-speaking scholar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ziyaratGallery.map((z) => (
              <div
                key={z.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={z.image}
                    alt={z.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 text-brand px-3 py-1 rounded-full text-[11px] font-bold">
                    {z.city}
                  </span>
                </div>
                <div className="p-5">
                  <div className="font-extrabold text-brand">{z.name}</div>
                  <div className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {z.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-10 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            PLAN YOUR TRIP
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Best Time to Perform Umrah
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {umrahBestTimes.map((t) => (
            <div
              key={t.season}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="inline-block bg-brand-100 text-brand text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
                {t.tag}
              </span>
              <div className="font-extrabold text-brand text-xl">{t.season}</div>
              <div className="text-xs text-muted-foreground mb-3">{t.months}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{t.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              HOW IT WORKS
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Simple Umrah Booking Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {umrahProcess.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-xl p-6 text-center shadow-sm border-t-4 border-brand-light"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="text-xs text-brand-light font-bold mb-1">
                  STEP {s.step}
                </div>
                <div className="font-bold text-brand mb-1.5">{s.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <CtaStrip
        title="Plan Your Umrah Today"
        subtitle="Free consultation, customized packages, group discounts available."
        primary={{ label: "Get a Quote", href: "/contact" }}
        secondary={{ label: "WhatsApp Us", href: "https://wa.me/923082699997" }}
      />
    </>
  );
}
