import { Preloader } from "@/components/layout/preloader";
import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { siteConfig } from "@/lib/site-data";
import { images } from "@/lib/images";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  description:
    "Nusarat Madina — trusted Hajj, Umrah, flights, visa, hotel & tour services in Lodhran, Multan & Bahawalpur, Pakistan.",
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: images.heroKaaba,
  logo: images.heroKaaba,
  founder: { "@type": "Person", name: siteConfig.owner },
  foundingDate: "2010",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Multan Road, near Railway Station",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: "PK",
  },
  areaServed: siteConfig.cities.map((c) => ({
    "@type": "City",
    name: c,
  })),
  sameAs: [],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["Urdu", "English"],
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
