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
  "Nusarat Madina — trusted Hajj, Umrah, flights, visa, hotel & tour services in Lodhran, Multan & Bahawalpur, Pakistan. Affordable packages, easy installments & 24/7 support since 2010.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Nusarat Madina — Hajj & Umrah Packages in Lodhran, Multan & Bahawalpur",
    template: "%s | Nusarat Madina",
  },
  description,
  applicationName: siteConfig.name,
  keywords: [
    "Hajj packages Pakistan",
    "Umrah packages Pakistan",
    "Hajj Umrah Lodhran",
    "Umrah package Multan",
    "Hajj package Bahawalpur",
    "travel agency Lodhran",
    "travel agency Multan",
    "travel agency Bahawalpur",
    "cheap Umrah package",
    "Ramadan Umrah",
    "air ticket Multan",
    "international flights Pakistan",
    "Saudi visa Pakistan",
    "Dubai visa",
    "hotel booking Makkah Madinah",
    "Nusarat Madina",
    "Rao Shafeeq travel",
    ...siteConfig.cities.map((c) => `Umrah ${c}`),
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
    title:
      "Nusarat Madina — Hajj & Umrah Packages in Lodhran, Multan & Bahawalpur",
    description,
    images: [
      {
        url: images.heroKaaba,
        width: 1200,
        height: 630,
        alt: "Nusarat Madina — Hajj & Umrah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nusarat Madina — Hajj, Umrah & Travel (Lodhran · Multan · Bahawalpur)",
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
