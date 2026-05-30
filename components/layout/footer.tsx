import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

type IconProps = { className?: string };

function Facebook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function Instagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.18.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.34a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 10.72a4.22 4.22 0 1 1 0-8.44 4.22 4.22 0 0 1 0 8.44Zm6.27-10.97a1.52 1.52 0 1 0 0 3.04 1.52 1.52 0 0 0 0-3.04Z" />
    </svg>
  );
}

function TikTok({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 5.5a4.9 4.9 0 0 1-1.2-3.2h-3v13.1a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12V7.4a5.66 5.66 0 0 0-.78-.05A5.65 5.65 0 1 0 15.3 13V8.2a8 8 0 0 0 4.5 1.4V6.6a4.9 4.9 0 0 1-3.3-1.1Z" />
    </svg>
  );
}

const socials = [
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "Instagram", href: "#", Icon: Instagram },
  { name: "TikTok", href: "#", Icon: TikTok },
];

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
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[36px] h-[36px] bg-brand-100 text-brand rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
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
