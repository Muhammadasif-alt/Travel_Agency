import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#f7faf8] text-gray-700 border-t-4 border-brand">
      <div className="px-[5%] pt-[50px] pb-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-[30px] border-b border-gray-200">
            <div>
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-[50px] h-[50px] gradient-brand rounded-full flex items-center justify-center text-white font-bold text-[22px]">
                  N
                </div>
                <div className="font-extrabold text-xl text-brand">
                  {siteConfig.brand}
                </div>
              </div>
              <p className="text-[13px] text-muted-foreground leading-[1.7] mt-3">
                Lodhran, Multan aur Bahawalpur ki trusted Hajj, Umrah aur travel
                partner since 2010. Sacred journeys, made simple.
              </p>
              <div className="flex gap-2.5 mt-4">
                <div className="w-[34px] h-[34px] bg-brand-100 text-brand rounded-full flex items-center justify-center cursor-pointer hover:bg-brand hover:text-white transition-colors">
                  f
                </div>
                <div className="w-[34px] h-[34px] bg-brand-100 text-brand rounded-full flex items-center justify-center cursor-pointer hover:bg-brand hover:text-white transition-colors">
                  📷
                </div>
                <div className="w-[34px] h-[34px] bg-brand-100 text-brand rounded-full flex items-center justify-center cursor-pointer hover:bg-brand hover:text-white transition-colors">
                  ▶
                </div>
              </div>
            </div>

            <FooterCol
              title="Quick Links"
              links={[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Hajj Packages", href: "/hajj" },
                { label: "Umrah Packages", href: "/umrah" },
              ]}
            />
            <FooterCol
              title="Services"
              links={[
                { label: "Flights", href: "/flights" },
                { label: "Visa", href: "/visa" },
                { label: "Hotels", href: "/hotels" },
                { label: "Transport", href: "/transport" },
                { label: "Tours", href: "/tours" },
              ]}
            />
            <FooterCol
              title="Contact"
              items={[
                `📞 ${siteConfig.phone}`,
                `✉️ ${siteConfig.email}`,
                `📍 Lodhran · Multan · Bahawalpur`,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Brand copyright bar (the "mixed" accent) */}
      <div className="bg-brand text-white text-center py-4 px-[5%] text-xs">
        © 2026 {siteConfig.name}. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  links,
}: {
  title: string;
  items?: string[];
  links?: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-bold mb-3.5 text-brand">{title}</h4>
      <div className="flex flex-col gap-2">
        {links?.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] text-muted-foreground hover:text-brand transition-colors"
          >
            {link.label}
          </Link>
        ))}
        {items?.map((item) => (
          <div key={item} className="text-[13px] text-muted-foreground">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
