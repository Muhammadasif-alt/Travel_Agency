import type { Metadata } from "next";
import { Poppins, Amiri } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";
import { images } from "@/lib/images";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["700"],
  variable: "--font-amiri",
  display: "swap",
});

const description =
  "Nusarat Madina is a Govt-approved, IATA-certified Hajj & Umrah travel agency in Pakistan. Affordable all-inclusive packages — Umrah visa, flights, Haram-view hotels, ziyarat & 24/7 support since 2010. Easy installments.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Best Hajj & Umrah Packages in Pakistan — Nusarat Madina Travel & Tours",
    template: "%s | Nusarat Madina",
  },
  description,
  applicationName: siteConfig.name,
  keywords: [
    "Hajj packages Pakistan",
    "Umrah packages Pakistan",
    "best Umrah packages Pakistan",
    "cheap Umrah package",
    "affordable Hajj package",
    "Umrah packages 2026",
    "Hajj 2026 Pakistan",
    "Ramadan Umrah package",
    "family Umrah package",
    "Umrah visa Pakistan",
    "Saudi visa Pakistan",
    "international flights Pakistan",
    "air ticket booking Pakistan",
    "Makkah Madinah hotel booking",
    "Haram view hotel",
    "Hajj Umrah travel agency",
    "IATA certified travel agency Pakistan",
    "Nusarat Madina",
    ...siteConfig.cities.map((c) => `Umrah packages ${c}`),
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Best Hajj & Umrah Packages in Pakistan — Nusarat Madina",
    description,
    images: [
      {
        url: images.heroKaaba,
        width: 1200,
        height: 630,
        alt: "Nusarat Madina — Hajj & Umrah Packages in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hajj & Umrah Packages in Pakistan — Nusarat Madina",
    description,
    images: [images.heroKaaba],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${amiri.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
