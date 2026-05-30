import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { images } from "@/lib/images";
import { siteConfig, faqs, departments, businessHours } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Travel Quote",
  description:
    "Reach Nusrat Travel & Tours by phone, WhatsApp or email. Offices in Lahore, Karachi & Islamabad.",
};

const offices = [
  {
    city: "Lahore (HQ)",
    address: "Main Boulevard, Gulberg III, Lahore",
    phone: "+92 300 1234567",
  },
  {
    city: "Karachi",
    address: "Shahrah-e-Faisal, near Aisha Bawany, Karachi",
    phone: "+92 301 1234567",
  },
  {
    city: "Islamabad",
    address: "Blue Area, F-7 Markaz, Islamabad",
    phone: "+92 302 1234567",
  },
];

export default function ContactPage() {
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
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <Tile
            icon="📞"
            label="Call Us"
            value={siteConfig.phone}
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          />
          <Tile
            icon="💬"
            label="WhatsApp"
            value={siteConfig.whatsapp}
            href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
            variant="whatsapp"
          />
          <Tile
            icon="✉️"
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
        </div>
      </section>

      {/* Departments + Hours */}
      <section className="px-[5%] py-20 max-w-[1200px] mx-auto">
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
                      className="text-brand-light font-semibold"
                    >
                      📞 {d.phone}
                    </a>
                    <a
                      href={`mailto:${d.email}`}
                      className="text-brand-light font-semibold"
                    >
                      ✉️ {d.email}
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
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-start">
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
                  <div className="text-sm text-muted-foreground mt-1">
                    📍 {o.address}
                  </div>
                  <a
                    href={`tel:${o.phone.replace(/\s/g, "")}`}
                    className="text-sm text-brand-light font-semibold mt-1 inline-block"
                  >
                    📞 {o.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Map placeholder */}
      <section className="px-[5%] pb-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl h-[280px] flex items-center justify-center text-center border border-brand-100">
            <div>
              <div className="text-5xl mb-3">🗺️</div>
              <div className="font-bold text-brand">Visit our Lahore HQ</div>
              <div className="text-sm text-muted-foreground mt-1">
                Main Boulevard, Gulberg III · Mon–Sat 10am–8pm
              </div>
            </div>
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
                key={f.q}
                className="bg-white rounded-xl px-6 py-5 shadow-sm border-l-4 border-brand cursor-pointer group"
              >
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-brand text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.7]">
                  {f.a}
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
  variant,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
  variant?: "whatsapp";
}) {
  return (
    <a
      href={href}
      target={variant === "whatsapp" ? "_blank" : undefined}
      rel={variant === "whatsapp" ? "noopener noreferrer" : undefined}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-4 border border-gray-100"
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 ${
          variant === "whatsapp" ? "bg-whatsapp" : "bg-brand"
        }`}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="font-bold text-brand">{value}</div>
      </div>
    </a>
  );
}
