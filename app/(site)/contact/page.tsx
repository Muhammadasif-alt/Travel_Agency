import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { images } from "@/lib/images";
import { departments, businessHours } from "@/lib/site-data";
import { getFaqs, getSettings } from "@/lib/content";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.516 5.26l-.999 3.648 3.972-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Travel Quote",
  description:
    "Reach Nusarat Madina by phone, WhatsApp or email. Hajj & Umrah offices in Lodhran, Multan & Bahawalpur, Pakistan.",
  alternates: { canonical: "/contact" },
};

const offices = [
  {
    city: "Lodhran (Head Office)",
    address: "Multan Road, near Railway Station, Lodhran",
    phone: "+92 308 2699997",
  },
  {
    city: "Multan",
    address: "Bosan Road, near Chowk Kumharanwala, Multan",
    phone: "+92 308 2699997",
  },
  {
    city: "Bahawalpur",
    address: "Circular Road, near Farid Gate, Bahawalpur",
    phone: "+92 308 2699997",
  },
];

export default async function ContactPage() {
  const [faqs, siteConfig] = await Promise.all([getFaqs(), getSettings()]);
  return (
    <>
      <PageHero
        image={images.contactBanner}
        imageAlt="Customer service team"
        eyebrow="GET IN TOUCH"
        title="Talk to a Real Travel Expert"
        subtitle="Free consultation, customised quotes, and 24/7 Hajj & Umrah helpline."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Quick contact tiles */}
      <section className="px-[5%] -mt-12 relative z-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <Tile
            icon={<Phone className="w-6 h-6" />}
            label="Call Us"
            value={siteConfig.phone}
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          />
          <Tile
            icon={<WhatsAppIcon className="w-6 h-6" />}
            label="WhatsApp"
            value={siteConfig.whatsapp}
            href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
            external
          />
          <Tile
            icon={<Mail className="w-6 h-6" />}
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
        </div>
      </section>

      {/* Departments + Hours */}
      <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
        <div className="mb-12 text-center">
          <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
            REACH THE RIGHT TEAM
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand">
            Department Direct Lines
          </h2>
          <p className="text-muted-foreground mt-3 text-[15px]">
            Skip the queue — call or email the team handling your specific request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {departments.map((d) => (
            <div
              key={d.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand hover:shadow-md transition-all"
            >
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  {d.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-brand">{d.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {d.desc}
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm">
                    <a
                      href={`tel:${d.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-1.5 text-brand-light font-semibold"
                    >
                      <Phone size={14} /> {d.phone}
                    </a>
                    <a
                      href={`mailto:${d.email}`}
                      className="flex items-center gap-1.5 text-brand-light font-semibold"
                    >
                      <Mail size={14} /> {d.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand text-white rounded-2xl px-8 py-7 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div>
            <div className="text-brand-200 text-[12px] font-bold tracking-[2px] mb-2">
              BUSINESS HOURS
            </div>
            <div className="text-xl md:text-2xl font-extrabold">
              We&apos;re here Monday through Saturday
            </div>
            <p className="text-sm opacity-80 mt-1">
              Our 24/7 Hajj &amp; Umrah hotline runs even on closed days.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
            {businessHours.map((b) => (
              <div
                key={b.day}
                className="bg-white/10 rounded-xl px-4 py-3 backdrop-blur"
              >
                <div className="text-[11px] uppercase tracking-wide opacity-80">
                  {b.day}
                </div>
                <div className="font-semibold mt-1">{b.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form + offices */}
      <section className="px-[5%] py-20">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              SEND A MESSAGE
            </div>
            <h2 className="text-2xl md:text-[34px] font-extrabold text-brand mb-4">
              Tell us about your journey
            </h2>
            <p className="text-gray-600 text-[15px] leading-[1.7] mb-6">
              Share a few details and a travel expert will reach out within one
              business day (usually much sooner).
            </p>
            <div className="space-y-3">
              {offices.map((o) => (
                <div
                  key={o.city}
                  className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
                >
                  <div className="font-bold text-brand">{o.city}</div>
                  <div className="flex items-start gap-1.5 text-sm text-muted-foreground mt-1">
                    <MapPin size={15} className="text-brand-light mt-0.5 flex-shrink-0" />
                    {o.address}
                  </div>
                  <a
                    href={`tel:${o.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-1.5 text-sm text-brand-light font-semibold mt-1.5"
                  >
                    <Phone size={14} /> {o.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="px-[5%] pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-4 flex items-center gap-2 text-brand font-bold">
            <MapPin size={18} className="text-brand-light" />
            Visit our Lodhran Head Office — Multan Road, near Railway Station
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              title="Nusarat Madina — Lodhran office location"
              src="https://www.google.com/maps?q=Lodhran,+Punjab,+Pakistan&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale-[15%]"
            />
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="bg-[#f7faf8] px-[5%] py-16">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-8">
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              QUICK ANSWERS
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand">
              Common Pre-Booking Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.slice(0, 3).map((f) => (
              <details
                key={f.id}
                className="bg-white rounded-xl px-6 py-5 shadow-sm border-l-4 border-brand cursor-pointer group"
              >
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {f.question}
                  <span className="text-brand text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.7]">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Tile({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-4 border border-gray-100"
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white bg-brand-light flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="font-bold text-brand">{value}</div>
      </div>
    </a>
  );
}
