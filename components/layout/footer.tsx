import { siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white px-[5%] pt-[50px] pb-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-[30px] border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-[50px] h-[50px] gradient-brand rounded-full flex items-center justify-center text-white font-bold text-[22px]">
                N
              </div>
              <div className="font-extrabold text-xl">{siteConfig.brand}</div>
            </div>
            <p className="text-[13px] opacity-80 leading-[1.7] mt-3">
              Pakistan&apos;s trusted Hajj, Umrah aur travel partner since 2010. Sacred
              journeys, made simple.
            </p>
            <div className="flex gap-2.5 mt-4">
              <div className="w-[34px] h-[34px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-light transition-colors">
                f
              </div>
              <div className="w-[34px] h-[34px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-light transition-colors">
                📷
              </div>
              <div className="w-[34px] h-[34px] bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-light transition-colors">
                ▶
              </div>
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            items={["About Us", "Packages", "Blog", "Contact"]}
            asLinks
          />
          <FooterCol
            title="Services"
            items={["Hajj", "Umrah", "Flights", "Visa"]}
            asLinks
          />
          <FooterCol
            title="Contact"
            items={[
              `📞 ${siteConfig.phone}`,
              `✉️ ${siteConfig.email}`,
              `📍 Lahore, Pakistan`,
            ]}
          />
        </div>
        <div className="text-center pt-5 text-xs opacity-60">
          © 2026 {siteConfig.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  asLinks = false,
}: {
  title: string;
  items: string[];
  asLinks?: boolean;
}) {
  return (
    <div>
      <h4 className="font-bold mb-3.5">{title}</h4>
      <div className="flex flex-col gap-2">
        {items.map((item) =>
          asLinks ? (
            <a
              key={item}
              href="#"
              className="text-[13px] opacity-80 hover:opacity-100 transition-opacity"
            >
              {item}
            </a>
          ) : (
            <div key={item} className="text-[13px] opacity-80">
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
}
