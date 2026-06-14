import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Button } from "@/components/ui/button";
import { BrandIcon } from "@/components/ui/brand-icon";
import { images } from "@/lib/images";
import { airlines, flightsWhyUs, baggageInfo } from "@/lib/site-data";
import { getFlightDeals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Flight Bookings — International & Domestic (Multan & Pakistan)",
  description:
    "Best airfare deals from Multan, Lahore, Karachi & Islamabad to Saudi Arabia, UAE, Turkey, UK & more. Air tickets for Lodhran & Bahawalpur travellers — book in minutes.",
  alternates: { canonical: "/flights" },
};

export default async function FlightsPage() {
  const flightDeals = await getFlightDeals("INTERNATIONAL");
  return (
    <>
      {/* Premium hero — full-bleed airplane background */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src={images.airplane}
            alt="Airplane flying above the clouds"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* navy-tinted overlay so the text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand/85 via-brand/70 to-brand-dark/90" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-[5%] text-center pt-24 md:pt-32 pb-24 md:pb-32">
          <div className="text-brand-light text-[13px] font-bold tracking-[3px] mb-4">
            FLIGHT BOOKING
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] drop-shadow-lg">
            Fly Smarter,
            <br />
            Explore Further.
          </h1>
          <p className="text-white/85 text-[15px] md:text-base mt-5 max-w-xl mx-auto leading-relaxed">
            Elevate your journey with intelligent travel that takes you farther,
            faster, and with unmatched ease.
          </p>
          <Link
            href="#deals"
            className="inline-flex items-center mt-7 bg-white shadow-lg rounded-full px-8 py-4 font-semibold text-brand hover:bg-brand-light hover:text-white transition-colors"
          >
            Get Ticket Now
          </Link>
        </div>
      </section>

      {/* Popular deals */}
      <section id="deals" className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-10 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            POPULAR DEALS
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Trending Routes from Pakistan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flightDeals.map((d) => (
            <div
              key={d.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative h-[180px]">
                <Image
                  src={d.image}
                  alt={d.city}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <div className="text-xs opacity-80">{d.country}</div>
                  <div className="text-xl font-bold">{d.city}</div>
                </div>
                <span className="absolute top-3 right-3 bg-white text-brand px-3 py-1 rounded-full text-[11px] font-bold">
                  {d.type}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="font-semibold">{d.from}</span>
                  <span className="text-brand-light">✈</span>
                  <span className="font-semibold">{d.to}</span>
                </div>
                <div className="text-xs text-muted-foreground mb-3">
                  {d.airline}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <div>
                    <div className="text-[11px] text-gray-400">Starting from</div>
                    <div className="text-xl font-extrabold text-brand">
                      {d.price}
                    </div>
                  </div>
                  <Button variant="book" size="sm">
                    Book →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              WHY BOOK WITH NUSARAT MADINA
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              More Than Just a Booking Site
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flightsWhyUs.map((w) => (
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
        </div>
      </section>

      {/* Group bookings */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="bg-gradient-to-br from-brand to-brand-light rounded-3xl px-8 md:px-12 py-14 text-white grid md:grid-cols-2 gap-8 items-center shadow-xl">
          <div>
            <div className="text-brand-200 text-[12px] font-bold tracking-[2px] mb-3">
              GROUP TRAVEL
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Travelling as a Group of 10 or More?
            </h3>
            <p className="opacity-90 text-[15px] leading-relaxed">
              From corporate trips to extended family Umrah groups — we negotiate
              wholesale fares directly with airlines and lock them in for you, even
              before the full passenger list is finalised.
            </p>
          </div>
          <ul className="space-y-3 bg-white/10 rounded-2xl p-7 backdrop-blur">
            {[
              "Up to 15% off published fares",
              "Group seat blocks held without full payment",
              "Free name changes up to 7 days before departure",
              "Dedicated group coordinator throughout the trip",
              "One consolidated invoice for accounting",
            ].map((b) => (
              <li key={b} className="flex gap-3 items-start text-sm">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Baggage info */}
      <section className="bg-[#f7faf8] px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10 text-center">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              GOOD TO KNOW
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
              Baggage Allowance by Airline
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px]">
              Standard economy allowances on routes from Pakistan. Hajj/Umrah season may
              have higher allowances — ask us.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Airline</th>
                  <th className="text-center px-4 py-4 font-semibold">Check-in</th>
                  <th className="text-center px-4 py-4 font-semibold">Carry-on</th>
                  <th className="text-left px-4 py-4 font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {baggageInfo.map((b, i) => (
                  <tr
                    key={b.airline}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-3.5 font-semibold text-brand">
                      ✈️ {b.airline}
                    </td>
                    <td className="text-center px-4 py-3.5 text-gray-700">
                      {b.checkIn}
                    </td>
                    <td className="text-center px-4 py-3.5 text-gray-700">
                      {b.carry}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-muted-foreground">
                      {b.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Airline partners */}
      <section className="px-[5%] py-16">
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            AIRLINE PARTNERS
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand mb-8">
            We Partner with World-Class Airlines
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {airlines.map((a) => (
              <div
                key={a}
                className="bg-white px-5 py-3 rounded-xl shadow-sm font-semibold text-gray-700 border border-gray-100"
              >
                ✈️ {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Need help finding the best fare?"
        subtitle="Our experts hunt across airlines and consolidator rates to get you the lowest price."
        primary={{ label: "Get a Custom Quote", href: "/contact" }}
        secondary={{ label: "WhatsApp Now", href: "https://wa.me/923082699997" }}
      />
    </>
  );
}

