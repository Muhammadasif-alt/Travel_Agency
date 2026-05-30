import type { Metadata } from "next";
import { Poppins, Amiri } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

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

export const metadata: Metadata = {
  title: {
    default: "Nusarat Madina — Hajj, Umrah & Worldwide Travel",
    template: "%s | Nusarat Madina",
  },
  description:
    "Pakistan's most trusted Hajj, Umrah and worldwide travel agency since 2010. Affordable packages, hassle-free visa, and 24/7 support.",
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
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
