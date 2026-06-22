import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { PackageCard } from "@/components/sections/package-card";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Faq } from "@/components/sections/faq";
import { BrandIcon } from "@/components/ui/brand-icon";
import { images } from "@/lib/images";
import {
  cityLandings,
  umrahPackages,
  hajjPackages,
  umrahWhyUs,
  hajjWhyUs,
  type CityLanding,
} from "@/lib/site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return cityLandings.map((l) => ({ slug: l.slug }));
}

function getLanding(slug: string): CityLanding | undefined {
  return cityLandings.find((l) => l.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = getLanding(slug);
  if (!l) return {};
  const title = `${l.serviceLabel} Packages in ${l.city} — 2026 Prices`;
  const description = `Book affordable ${l.serviceLabel} packages from ${l.city}, Pakistan with Nusarat Madina. Visa, flights, hotels & transport included — easy installments & 24/7 support.`;
  return {
    title,
    description,
    alternates: { canonical: `/${l.slug}` },
    openGraph: {
      title: `${title} | Nusarat Madina`,
      description,
      images: [l.serviceKey === "hajj" ? images.hajjBanner : images.umrahBanner],
    },
  };
}

export default async function CityLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = getLanding(slug);
  if (!l) notFound();

  const isHajj = l.serviceKey === "hajj";
  const packages = isHajj ? hajjPackages : umrahPackages;
  const whyUs = isHajj ? hajjWhyUs : umrahWhyUs;
  const image = isHajj ? images.hajjBanner : images.umrahBanner;

  // Other cities offering the same service (for internal linking)
  const relatedCities = cityLandings.filter(
    (o) => o.serviceKey === l.serviceKey && o.slug !== l.slug
  );
  // The other service in the same city
  const otherService = cityLandings.find(
    (o) => o.city === l.city && o.serviceKey !== l.serviceKey
  );

  return (
    <>
      <PageHero
        image={image}
        imageAlt={`${l.serviceLabel} from ${l.city}`}
        eyebrow={`${l.serviceLabel.toUpperCase()} · ${l.city.toUpperCase()}`}
        title={`${l.serviceLabel} Packages in ${l.city}`}
        subtitle={`Affordable, all-inclusive ${l.serviceLabel} packages for families and groups from ${l.city} and nearby areas — handled end-to-end by Nusarat Madina.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: `${l.serviceLabel} Packages`, href: l.serviceHref },
          { label: l.city },
        ]}
      />

      {/* Intro */}
      <section className="px-[5%] py-16 max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand mb-4">
          {l.serviceLabel} from {l.city}, Made Simple
        </h2>
        <p className="text-gray-600 text-[15px] leading-[1.9]">
          Looking for a trusted <strong>{l.serviceLabel} package in {l.city}</strong>?
          Nusarat Madina has served pilgrims across South Punjab since 2010. We
          arrange everything — {l.serviceLabel} visa, return flights, hotels in
          Makkah &amp; Madinah, ground transport and a Pakistani Urdu-speaking
          guide — so families from {l.city} can travel with complete peace of mind.
        </p>
        <p className="text-gray-600 text-[15px] leading-[1.9] mt-4">
          Most {l.city} pilgrims depart via{" "}
          <strong>{l.airport}</strong>. We also welcome travellers from nearby{" "}
          {l.nearby.slice(0, 3).join(", ")} and surrounding towns. Flexible
          installment plans and honest, upfront pricing — no hidden charges.
        </p>
      </section>

      {/* Packages */}
      <section className="bg-[#f5f8fc] px-[5%] py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              {l.city.toUpperCase()} PACKAGES
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              {l.serviceLabel} Packages for {l.city} Pilgrims
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px]">
              Every package includes visa, flights &amp; guidance. Prices vary by
              season — contact us for today&apos;s {l.city} rates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="px-[5%] py-24 max-w-[1440px] mx-auto">
        <div className="mb-12 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            WHY {l.city.toUpperCase()} CHOOSES NUSARAT MADINA
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Your Local {l.serviceLabel} Experts
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((w) => (
            <div
              key={w.title}
              className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:border-brand hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand mb-4">
                <BrandIcon icon={w.icon} className="w-6 h-6" />
              </div>
              <div className="font-bold text-brand mb-2">{w.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {w.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Nearby areas */}
        <div className="mt-12 bg-brand-50 rounded-2xl p-7 border border-brand-100">
          <div className="font-bold text-brand mb-3">
            We also serve travellers near {l.city}
          </div>
          <div className="flex flex-wrap gap-2">
            {l.nearby.map((n) => (
              <span
                key={n}
                className="bg-white border border-brand-100 text-gray-700 px-3 py-1.5 rounded-full text-sm"
              >
                📍 {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      {/* Internal links to related city pages */}
      <section className="px-[5%] pb-16 max-w-[1440px] mx-auto">
        <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-4 text-center">
          MORE OPTIONS
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {otherService && (
            <Link
              href={`/${otherService.slug}`}
              className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-light transition-colors"
            >
              {otherService.serviceLabel} Packages in {l.city} →
            </Link>
          )}
          {relatedCities.map((o) => (
            <Link
              key={o.slug}
              href={`/${o.slug}`}
              className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:border-brand hover:text-brand transition-colors"
            >
              {o.serviceLabel} in {o.city}
            </Link>
          ))}
        </div>
      </section>

      <CtaStrip
        title={`Plan your ${l.serviceLabel} from ${l.city} today`}
        subtitle="Free consultation, customised packages and group discounts for families."
        primary={{ label: "Get a Quote", href: "/contact" }}
        secondary={{ label: "WhatsApp Us", href: "https://wa.me/923082699997" }}
      />
    </>
  );
}
