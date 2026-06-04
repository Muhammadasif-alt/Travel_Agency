import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Nusarat Madina",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
