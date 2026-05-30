import { siteConfig } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="bg-brand text-white px-[5%] py-2 text-[12px] sm:text-[13px] flex justify-between items-center gap-3">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="hover:underline whitespace-nowrap"
        >
          📞 {siteConfig.phone}
        </a>
        <span className="hidden min-[420px]:inline opacity-50">|</span>
        <a
          href={`mailto:${siteConfig.email}`}
          className="hover:underline hidden min-[420px]:inline truncate"
        >
          ✉️ {siteConfig.email}
        </a>
      </div>
      <div className="hidden md:flex gap-[18px] flex-shrink-0">
        <span>🕌 24/7 Hajj &amp; Umrah Helpline</span>
        <span>🌍 EN | اردو</span>
      </div>
    </div>
  );
}
