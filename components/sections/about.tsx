import Image from "next/image";
import { images } from "@/lib/images";

const features = [
  { icon: "âœ“", title: "Govt. Approved", sub: "Licensed operator" },
  { icon: "ðŸ•“", title: "24/7 Support", sub: "On-call assistance" },
  { icon: "ðŸ’°", title: "Best Prices", sub: "No hidden charges" },
  { icon: "ðŸ¤", title: "Personal Care", sub: "Expert guidance" },
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
            Nusarat Madina 2010 se Pakistan ki most reliable Hajj & Umrah
            operators mein se ek hai. Ministry of Religious Affairs se licensed, IATA
            certified, aur thousands of satisfied pilgrims k saath â€” hum aap ki sacred
            journey ko memorable banate hain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                  {f.icon}
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
              Ù„ÙŽØ¨ÙŽÙ‘ÙŠÙ’ÙƒÙŽ Ø§Ù„Ù„ÙŽÙ‘Ù‡ÙÙ…ÙŽÙ‘ Ù„ÙŽØ¨ÙŽÙ‘ÙŠÙ’ÙƒÙŽ
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
