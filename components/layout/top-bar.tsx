import { getSettings } from "@/lib/content";

export async function TopBar() {
  const s = await getSettings();
  return (
    <div className="bg-brand-light text-white px-[5%] py-2 text-[12px] sm:text-[13px] flex justify-between items-center gap-3">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <a
          href={`tel:${s.phone.replace(/\s/g, "")}`}
          className="hover:underline whitespace-nowrap"
        >
          📞 {s.phone}
        </a>
        <span className="hidden min-[420px]:inline opacity-50">|</span>
        <a
          href={`mailto:${s.email}`}
          className="hover:underline hidden min-[420px]:inline truncate"
        >
          ✉️ {s.email}
        </a>
      </div>
      <div className="hidden md:flex gap-[18px] flex-shrink-0">
        <span>🕌 24/7 Hajj &amp; Umrah Helpline</span>
        <span>🌍 EN | اردو</span>
      </div>
    </div>
  );
}
