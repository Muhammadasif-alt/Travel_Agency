import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaStrip } from "@/components/sections/cta-strip";
import { images } from "@/lib/images";
import { avatar } from "@/lib/images";
import { milestones, certifications, team, timeline, coreValues } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us — 14 Years of Trusted Hajj & Umrah Service",
  description:
    "Nusarat Madina, founded by Rao Shafeeq in Lodhran, has guided 15,000+ pilgrims since 2010 across Multan & Bahawalpur. Ministry-licensed, IATA certified.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={images.aboutBanner}
        imageAlt="Kaaba"
        eyebrow="ABOUT NUSARAT MADINA"
        title="14 Years of Trust. Thousands of Sacred Journeys."
        subtitle="A family-run travel agency on a mission to make Hajj, Umrah and worldwide travel simple, affordable and dignified."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="px-[5%] py-20 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={images.team}
              alt="Nusarat Madina team"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              OUR STORY
            </div>
            <h2 className="text-2xl md:text-[34px] font-extrabold text-brand mb-4">
              From a small office in Lodhran to 15,000+ pilgrims served
            </h2>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              Rao Shafeeq founded the agency in 2010 with one belief — that
              every Pakistani Muslim deserves a smooth, dignified path to Makkah &
              Madinah, without overpaying or getting lost in red tape.
            </p>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              Today, we&apos;re an IATA-certified, Ministry of Religious Affairs
              licensed operator with offices in Lodhran, Multan, and Bahawalpur —
              and on-ground support teams in Makkah & Madinah throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-brand px-[5%] py-16 text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {milestones.map((m) => (
            <div key={m.label}>
              <div className="text-4xl md:text-5xl font-extrabold">{m.num}</div>
              <div className="text-sm opacity-80 mt-2 uppercase tracking-wide">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="px-[5%] py-20 max-w-[1200px] mx-auto">
        <div className="mb-12 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            CORE VALUES
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            What We Stand For
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-brand hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-3xl mb-4">
                {v.icon}
              </div>
              <div className="font-extrabold text-brand mb-2">{v.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {v.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-br from-brand-50 to-white px-[5%] py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              OUR JOURNEY
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              14 Years in Numbers &amp; Moments
            </h2>
          </div>

          <ol className="relative border-l-2 border-brand/30 ml-3 md:ml-8 space-y-8">
            {timeline.map((t) => (
              <li key={t.year} className="ml-6 md:ml-8">
                <span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-brand rounded-full ring-4 ring-white" />
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="text-2xl md:text-3xl font-extrabold text-brand">
                      {t.year}
                    </span>
                    <span className="font-bold text-gray-800">{t.title}</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {t.desc}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="px-[5%] py-20 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-l-4 border-brand rounded-xl p-8 shadow-sm">
            <div className="text-brand-light text-[12px] font-bold tracking-[2px] mb-2">
              OUR MISSION
            </div>
            <h3 className="text-xl font-extrabold text-brand mb-3">
              Make sacred journeys accessible
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              Honest pricing. Clear paperwork. Empathetic guidance — so a first-time
              pilgrim feels as confident as someone going for the tenth time.
            </p>
          </div>
          <div className="bg-white border-l-4 border-brand-light rounded-xl p-8 shadow-sm">
            <div className="text-brand-light text-[12px] font-bold tracking-[2px] mb-2">
              OUR VISION
            </div>
            <h3 className="text-xl font-extrabold text-brand mb-3">
              Pakistan&apos;s most loved travel partner
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              Beyond Hajj & Umrah — to be the trusted travel partner Pakistani
              families turn to for every meaningful journey.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              CERTIFICATIONS
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Licensed, Certified, Accountable
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div
                key={c}
                className="flex gap-3 items-start bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <span className="w-8 h-8 rounded-full bg-brand-100 text-brand flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-[5%] py-20 max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            OUR TEAM
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            The People Behind Your Journey
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-brand-100">
                <Image
                  src={avatar(m.name, { bg: "171717" })}
                  alt={m.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="font-bold text-brand">{m.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <CtaStrip
        title="Plan your sacred journey with people who care"
        subtitle="Talk to a real Hajj/Umrah expert — no bots, no scripts."
        primary={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
