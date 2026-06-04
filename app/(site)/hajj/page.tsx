import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { PackageCard } from "@/components/sections/package-card";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Faq } from "@/components/sections/faq";
import { images } from "@/lib/images";
import {
  hajjProcess,
  hajjWhyUs,
  hajjInclusions,
  hajjDates2026,
  hajjPreparation,
} from "@/lib/site-data";
import { getPackagesByType, getHajjStatus } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const hajjStatus = await getHajjStatus();
  return {
    title: hajjStatus.metaTitle,
    description: hajjStatus.metaDescription,
    alternates: { canonical: "/hajj" },
  };
}

export default async function HajjPage() {
  const [hajjPackages, hajjStatus] = await Promise.all([
    getPackagesByType("HAJJ"),
    getHajjStatus(),
  ]);
  return (
    <>
      <PageHero
        image={images.hajjBanner}
        imageAlt="Masjid an-Nabawi Madinah"
        eyebrow={hajjStatus.eyebrow}
        title={hajjStatus.heroTitle}
        subtitle={hajjStatus.heroSubtitle}
        crumbs={[{ label: "Home", href: "/" }, { label: "Hajj Packages" }]}
      />

      {/* Season status banner */}
      {hajjStatus.banner && (
        <div className="bg-gold/15 border-y border-gold/40 px-[5%] py-4">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <span className="inline-flex items-center gap-2 bg-gold text-brand text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full flex-shrink-0">
              ⏳ Pre-Registration
            </span>
            <p className="text-sm text-brand font-medium leading-relaxed flex-1">
              {hajjStatus.banner}
            </p>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-brand-light text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-brand transition-colors"
            >
              {hajjStatus.ctaPrimary} →
            </Link>
          </div>
        </div>
      )}

      {/* Why Us */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-12 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            WHY CHOOSE NUSARAT MADINA
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            What Makes Our Hajj Different
          </h2>
          <p className="text-muted-foreground mt-3 text-[15px] max-w-2xl mx-auto">
            14 years of experience, direct Ministry quotas, Pakistani teams on the ground —
            and pricing you can trust.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {hajjWhyUs.map((w) => (
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

      {/* Packages */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              CHOOSE YOUR PACKAGE
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              {hajjStatus.packagesHeading}
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px] max-w-2xl mx-auto">
              {hajjStatus.packagesNote}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hajjPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions Table */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-10 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            WHAT'S INCLUDED
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Package Comparison
          </h2>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-brand text-white">
              <tr>
                <th className="text-left px-6 py-4 font-semibold">Feature</th>
                <th className="text-center px-4 py-4 font-semibold">Economy</th>
                <th className="text-center px-4 py-4 font-semibold bg-brand-light">
                  Standard ⭐
                </th>
                <th className="text-center px-4 py-4 font-semibold">VIP</th>
              </tr>
            </thead>
            <tbody>
              {hajjInclusions.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-3.5 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <Cell value={row.economy} />
                  <Cell value={row.standard} highlight />
                  <Cell value={row.vip} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Important Dates */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              IMPORTANT DATES
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              {hajjStatus.datesHeading}
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px]">
              Subject to moon sighting & Ministry of Hajj announcements.
            </p>
          </div>

          {hajjStatus.datesAnnounced ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hajjDates2026.map((d) => (
                <div
                  key={d.label}
                  className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-brand"
                >
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {d.label}
                  </div>
                  <div className="font-extrabold text-brand text-xl mt-1">
                    {d.date}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{d.note}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="text-4xl mb-3">🗓️</div>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {hajjStatus.datesPendingNote}
              </p>
              <Link
                href="/contact"
                className="inline-block mt-5 bg-brand-light text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-brand transition-colors"
              >
                {hajjStatus.ctaPrimary} →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-12 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            HOW IT WORKS
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Your Hajj Journey, Step by Step
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {hajjProcess.map((s) => (
            <div
              key={s.step}
              className="bg-white rounded-xl p-6 text-center shadow-sm border-t-4 border-brand"
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
      </section>

      {/* Preparation */}
      <section className="bg-gradient-to-br from-brand-50 to-white px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              WE PREPARE YOU FULLY
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Pre-Departure Support
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {hajjPreparation.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-7 text-center shadow-sm"
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="font-bold text-brand mb-2">{p.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <CtaStrip
        title={hajjStatus.ctaTitle}
        subtitle={hajjStatus.ctaSubtitle}
        primary={{ label: hajjStatus.ctaPrimary, href: "/contact" }}
        secondary={{ label: "Call Expert", href: "tel:+923082699997" }}
      />
    </>
  );
}

function Cell({
  value,
  highlight = false,
}: {
  value: string | boolean;
  highlight?: boolean;
}) {
  return (
    <td
      className={`text-center px-4 py-3.5 text-sm ${
        highlight ? "bg-brand-50 font-semibold text-brand" : "text-gray-700"
      }`}
    >
      {typeof value === "boolean" ? (
        value ? (
          <span className="text-brand-light text-lg">✓</span>
        ) : (
          <span className="text-gray-300">—</span>
        )
      ) : (
        value
      )}
    </td>
  );
}
