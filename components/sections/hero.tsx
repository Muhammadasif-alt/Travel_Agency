import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="gradient-brand-soft px-[5%] py-[70px] relative overflow-hidden">
      <div className="absolute -right-12 -top-12 w-[300px] h-[300px] opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="100,10 130,70 195,70 145,110 165,175 100,135 35,175 55,110 5,70 70,70"
            fill="#0a5c36"
          />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
        <div>
          <div className="inline-block bg-brand-100 text-brand px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            ✦ Trusted Since 2010 ✦
          </div>
          <h1 className="text-[32px] md:text-[46px] font-extrabold text-brand leading-[1.15] mb-4">
            Your Sacred Journey
            <br />
            Starts With{" "}
            <span className="text-brand-light">Nusarat Madina</span>
          </h1>
          <p className="text-base text-gray-600 leading-[1.7] mb-7">
            Hajj, Umrah aur worldwide travel k liye Pakistan ki most trusted agency.
            Affordable packages, hassle-free visa, aur 24/7 support — sab kuch ek hi
            jaga.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-[30px]">
            <Button size="lg" asChild>
              <Link href="/umrah">Explore Packages →</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                📞 Call Expert
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-[30px] pt-5 border-t border-gray-200">
            <Stat num="15K+" label="Happy Pilgrims" />
            <Stat num="14+" label="Years Experience" />
            <Stat num="4.9★" label="Customer Rating" />
          </div>
        </div>

        <div className="relative rounded-[20px] h-[400px] shadow-2xl shadow-brand/25 overflow-hidden">
          <Image
            src={images.heroKaaba}
            alt="Kaaba in Makkah at night"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
            <div className="text-[28px] font-bold">Makkah · Madinah</div>
            <div className="text-sm opacity-90 mt-1">Sacred Journey Awaits</div>
          </div>
          <div className="absolute top-5 right-5 bg-white text-brand px-3.5 py-2 rounded-full text-xs font-bold shadow-md">
            ✦ IATA Certified
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-brand">{num}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
