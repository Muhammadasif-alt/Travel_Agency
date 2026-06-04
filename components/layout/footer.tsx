import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import { getBlogPosts } from "@/lib/content";

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

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Hajj Packages", href: "/hajj" },
  { label: "Umrah Packages", href: "/umrah" },
];

const serviceLinks = [
  { label: "Flights", href: "/flights" },
  { label: "Visa", href: "/visa" },
  { label: "Hotels", href: "/hotels" },
  { label: "Transport", href: "/transport" },
  { label: "Tours", href: "/tours" },
];

export async function Footer() {
  const recentPosts = await getBlogPosts(2);
  return (
    <footer className="bg-gradient-to-br from-[#0f3d39] via-brand to-brand-dark text-white">
      <div className="px-[5%] pt-16 pb-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-10">
          {/* Get in touch */}
          <div>
            <div className="text-2xl font-extrabold tracking-wide">
              NUSARAT <span className="text-brand-light">MADINA</span>
            </div>
            <p className="text-[13px] text-white/70 leading-[1.8] mt-4 max-w-xs">
              Your trusted Hajj, Umrah and travel partner in Lodhran, Multan and
              Bahawalpur since 2010.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 mt-5 font-bold text-lg hover:text-brand-light transition-colors"
            >
              <Phone size={18} className="text-brand-light" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2.5 mt-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Mail size={16} className="text-brand-light" />
              {siteConfig.email}
            </a>
            <div className="flex gap-2.5 mt-5">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-light transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company info */}
          <FooterLinks title="Company Info" links={companyLinks} />
          {/* Services */}
          <FooterLinks title="Useful Links" links={serviceLinks} />

          {/* Recent posts */}
          <div>
            <h4 className="font-bold mb-5 uppercase tracking-wide text-sm">
              Recent Posts
            </h4>
            <div className="space-y-4">
              {recentPosts.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="flex gap-3 items-center group"
                >
                  <span className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-semibold leading-snug line-clamp-2 group-hover:text-brand-light transition-colors">
                      {p.title}
                    </span>
                    <span className="block text-[11px] text-white/60 mt-1">
                      🗓 {p.date}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="text-center py-5 text-xs text-white/60">
          © 2026 {siteConfig.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-bold mb-5 uppercase tracking-wide text-sm">{title}</h4>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-2.5 text-[13px] text-white/80 hover:text-brand-light transition-colors group"
          >
            <ArrowRight
              size={14}
              className="text-brand-light group-hover:translate-x-1 transition-transform"
            />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
