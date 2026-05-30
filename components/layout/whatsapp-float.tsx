import { siteConfig } from "@/lib/site-data";

export function WhatsAppFloat() {
  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 w-[60px] h-[60px] bg-whatsapp rounded-full flex items-center justify-center text-white text-3xl shadow-lg shadow-whatsapp/40 z-[1000] animate-pulseRing"
    >
      💬
    </a>
  );
}
