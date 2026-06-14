import Image from "next/image";
import { images } from "@/lib/images";
import { BrandIcon } from "@/components/ui/brand-icon";

const features = [
  { icon: "✓", title: "Govt. Approved", sub: "Licensed operator" },
  { icon: "🕓", title: "24/7 Support", sub: "On-call assistance" },
  { icon: "💰", title: "Best Prices", sub: "No hidden charges" },
  { icon: "🤝", title: "Personal Care", sub: "Expert guidance" },
];

export function About() {
  return (
    <section id="about" className="px-[5%] py-20 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            ABOUT NUSARAT MADINA
          </div>
          <h2 className="text-2xl md:text-[34px] font-extrabold text-brand mb-4.5">
            14 Years of Trust, Thousands of Happy Pilgrims
          </h2>
          <p className="text-gray-600 text-[15px] leading-[1.8] mb-6">
            Since 2010, Nusarat Madina has been one of the most reliable Hajj
            and Umrah operators in Pakistan. We are a licensed operator with the Ministry
            of Religious Affairs, IATA certified, and trusted by thousands of
            satisfied pilgrims. From your first inquiry to your safe return home,
            our team is committed to making your sacred journey smooth, affordable and truly memorable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand flex-shrink-0">
                  <BrandIcon icon={f.icon} className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-brand">{f.title}</div>
                  <div className="text-[13px] text-muted-foreground">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-[420px] shadow-xl">
          <Image
            src={images.aboutMosque}
            alt="Mosque interior architecture"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white">
            <div className="font-arabic text-[32px] font-bold drop-shadow-lg">
              لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
            </div>
            <div className="text-sm opacity-95 mt-2">
              Here I am, O Allah, here I am
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
