import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { BrandIcon } from "@/components/ui/brand-icon";
import {
  visaRequirements,
  visaStats,
  visaRejectionReasons,
  visaDocCategories,
} from "@/lib/site-data";
import { getVisaCountries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Visa Services — Saudi, UAE, Turkey, UK & More",
  description:
    "Hassle-free visa processing in Lodhran, Multan & Bahawalpur for Saudi Arabia, UAE, Turkey, UK, USA, Canada & more. Documentation & application support.",
  alternates: { canonical: "/visa" },
};

const visaSteps = [
  {
    step: 1,
    title: "Pick Destination",
    desc: "Choose the country & visa type you need.",
    icon: "🌍",
  },
  {
    step: 2,
    title: "Submit Documents",
    desc: "We review your file and pre-check for rejection risks.",
    icon: "📋",
  },
  {
    step: 3,
    title: "Application Lodged",
    desc: "We submit to the embassy/consulate or e-visa portal.",
    icon: "🛂",
  },
  {
    step: 4,
    title: "Receive Visa",
    desc: "Approved visa delivered to your inbox or office.",
    icon: "✅",
  },
];

export default async function VisaPage() {
  const visaCountries = await getVisaCountries();
  return (
    <>
      <PageHero
        image={images.visaBanner}
        imageAlt="Passport on table"
        eyebrow="VISA SERVICES"
        title="Smooth Visa Processing for 50+ Countries"
        subtitle="Document review, appointment booking and full filing support — by visa experts you can trust."
        crumbs={[{ label: "Home", href: "/" }, { label: "Visa" }]}
      />

      {/* Stats banner */}
      <section className="px-[5%] -mt-12 relative z-10">
        <div className="max-w-[1440px] mx-auto bg-white rounded-2xl shadow-2xl px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-100">
          {visaStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand">
                {s.num}
              </div>
              <div className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Countries */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-10 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            DESTINATIONS WE COVER
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Popular Visa Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {visaCountries.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-brand hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-3">{c.flag}</div>
              <div className="font-bold text-brand text-lg">{c.country}</div>
              <div className="text-xs text-muted-foreground mt-1">{c.type}</div>

              <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Processing</span>
                  <span className="font-semibold text-gray-700">
                    {c.processingTime}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Starting from</span>
                  <span className="font-bold text-brand">{c.startingPrice}</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full mt-4">
                Apply Now →
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f5f8fc] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              HOW IT WORKS
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Visa Application in 4 Simple Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {visaSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-xl p-6 text-center shadow-sm border-t-4 border-brand"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-100 flex items-center justify-center text-brand">
                  <BrandIcon icon={s.icon} className="w-7 h-7" />
                </div>
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

      {/* Document categories */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-10 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            DOCUMENT CHECKLIST
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            What You&apos;ll Typically Need
          </h2>
          <p className="text-muted-foreground mt-3 text-[15px] max-w-2xl mx-auto">
            Requirements vary by country and visa type — this is the general checklist
            for most tourist & visit visas.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {visaDocCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mb-3 rounded-xl bg-brand-100 flex items-center justify-center text-brand">
                <BrandIcon icon={cat.icon} className="w-6 h-6" />
              </div>
              <div className="font-extrabold text-brand text-lg mb-4">
                {cat.title}
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex gap-2.5 items-start text-sm">
                    <span className="w-5 h-5 bg-brand-100 text-brand rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Rejection Reasons */}
      <section className="bg-[#f5f8fc] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10 text-center">
            <div className="text-coral text-[13px] font-bold tracking-[2px] mb-2">
              WE HELP YOU AVOID
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Common Visa Rejection Reasons
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px] max-w-2xl mx-auto">
              98% of our applications get approved because we screen for these before
              you submit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visaRejectionReasons.map((r, i) => (
              <div
                key={r.title}
                className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-coral"
              >
                <div className="flex gap-3 items-start">
                  <span className="w-9 h-9 bg-coral/10 text-coral rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">{r.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {r.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick requirements summary */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-100 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
                QUICK REFERENCE
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand mb-3">
                Minimum requirements
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.7]">
                Bring these and we&apos;ll guide you through the rest — country-specific
                forms, photos, appointment booking, you name it.
              </p>
            </div>
            <ul className="space-y-2.5">
              {visaRequirements.map((r) => (
                <li key={r} className="flex gap-3 items-start text-sm">
                  <span className="text-brand-light text-base flex-shrink-0">●</span>
                  <span className="text-gray-700">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Not sure which visa you qualify for?"
        subtitle="Book a free 15-minute consultation with our visa expert."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "Call Now", href: "tel:+923082699997" }}
      />
    </>
  );
}
