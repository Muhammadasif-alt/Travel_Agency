import { siteConfig } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="bg-brand text-white px-[5%] py-2 text-[13px] flex justify-between items-center">
      <div>
        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:underline">
          📞 {siteConfig.phone}
        </a>
        &nbsp;|&nbsp;
        <a href={`mailto:${siteConfig.email}`} className="hover:underline">
          ✉️ {siteConfig.email}
        </a>
      </div>
      <div className="hidden sm:flex gap-[18px]">
        <span>🕌 24/7 Hajj & Umrah Helpline</span>
        <span>🌍 EN | اردو</span>
      </div>
    </div>
  );
}
