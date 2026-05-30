import { ContactForm } from "./contact-form";
import { siteConfig } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="gradient-contact px-[5%] py-[70px]">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            GET IN TOUCH
          </div>
          <h2 className="text-2xl md:text-[34px] font-extrabold text-brand mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-600 text-[15px] leading-[1.7]">
            Hamare travel experts se aaj hi consult karein. Free consultation,
            customized packages, aur best rates.
          </p>

          <div className="flex flex-col gap-3.5 mt-7">
            <ContactItem
              icon="📞"
              label="Call Us"
              value={siteConfig.phone}
            />
            <ContactItem
              icon="💬"
              label="WhatsApp"
              value={siteConfig.whatsapp}
              variant="whatsapp"
            />
            <ContactItem
              icon="📍"
              label="Visit Office"
              value={siteConfig.address}
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  variant,
}: {
  icon: string;
  label: string;
  value: string;
  variant?: "whatsapp";
}) {
  return (
    <div className="flex items-center gap-3.5">
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center text-white text-lg ${
          variant === "whatsapp" ? "bg-whatsapp" : "bg-brand"
        }`}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="font-bold text-brand">{value}</div>
      </div>
    </div>
  );
}
