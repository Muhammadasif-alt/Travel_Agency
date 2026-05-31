"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-data";

const slides = [
  {
    image: images.heroKaaba,
    alt: "Kaaba in Masjid al-Haram, Makkah",
    title: "Your Sacred Journey to Makkah",
    sub: "Umrah & Hajj packages from Lodhran, Multan & Bahawalpur — visa, flights, hotels & guide included.",
  },
  {
    image: images.heroMadinah,
    alt: "Masjid an-Nabawi in Madinah",
    title: "Ziyarat of Madinah Munawwarah",
    sub: "Stay steps from Masjid an-Nabawi, with guided ziyarat and 24/7 on-ground support.",
  },
  {
    image: images.heroHira,
    alt: "Jabal al-Noor, Cave of Hira, Makkah",
    title: "Walk the Footsteps of History",
    sub: "Guided ziyarat of Ghar-e-Hira, Jabal Uhud, Masjid Quba and more, by an Urdu-speaking scholar.",
  },
  {
    image: images.heroArafat,
    alt: "Plain of Arafat on the day of Hajj",
    title: "Hajj 2026 — Reserve Your Place",
    sub: "Ministry-approved packages with hotels near the Haram and easy installment plans.",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[660px] overflow-hidden text-white">
      {/* Background slideshow */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />

      {/* Content */}
      <div className="relative h-full max-w-[1200px] mx-auto px-[5%] flex flex-col justify-center">
        <div className="inline-block self-start bg-white/15 backdrop-blur-sm border border-white/25 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5">
          ✦ Trusted Since 2010 · Lodhran · Multan · Bahawalpur ✦
        </div>

        {/* Changing text (re-animates on slide change) */}
        <div key={current} className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-2xl">
          <h1 className="text-[34px] md:text-[52px] font-extrabold leading-[1.1] drop-shadow-lg">
            {slides[current].title}
          </h1>
          <p className="text-base md:text-lg mt-4 opacity-95 max-w-xl">
            {slides[current].sub}
          </p>
        </div>

        <div className="flex flex-wrap gap-3.5 mt-7">
          <Button asChild size="lg" className="bg-white text-brand hover:bg-brand-50">
            <Link href="/umrah">Explore Packages →</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>📞 Call Expert</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 sm:gap-10 mt-9 pt-6 border-t border-white/20">
          <Stat num="15K+" label="Happy Pilgrims" />
          <Stat num="14+" label="Years Experience" />
          <Stat num="4.9★" label="Customer Rating" />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold">{num}</div>
      <div className="text-xs opacity-80">{label}</div>
    </div>
  );
}
