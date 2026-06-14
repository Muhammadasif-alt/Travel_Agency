import {
  Landmark,
  Plane,
  PlaneTakeoff,
  FileText,
  Hotel,
  Bus,
  Car,
  ShieldCheck,
  Phone,
  ClipboardList,
  CreditCard,
  Stamp,
  Target,
  Users,
  BookOpen,
  Syringe,
  Luggage,
  Smartphone,
  Clock,
  Handshake,
  Wallet,
  Ticket,
  LifeBuoy,
  Gem,
  HandHeart,
  Feather,
  Globe,
  BadgeCheck,
  Check,
  BadgeDollarSign,
  Briefcase,
  Heart,
  Route,
  Contact,
  type LucideIcon,
} from "lucide-react";

// Maps the emoji icons stored in our content (static + DB) to clean
// brand-styled line icons. Falls back to rendering the raw text if unmapped.
const MAP: Record<string, LucideIcon> = {
  "🕌": Landmark,
  "🕋": Landmark,
  "🏛️": Landmark,
  "✈️": Plane,
  "✈": Plane,
  "🛫": PlaneTakeoff,
  "📄": FileText,
  "📝": ClipboardList,
  "📋": ClipboardList,
  "🏨": Hotel,
  "🚐": Bus,
  "🚌": Bus,
  "🚗": Car,
  "🛣️": Route,
  "🛡️": ShieldCheck,
  "📞": Phone,
  "💳": CreditCard,
  "🛂": Stamp,
  "🎯": Target,
  "🇸🇦": Users,
  "👨‍👩‍👧": Users,
  "👨‍👩‍👧‍👦": Users,
  "📚": BookOpen,
  "💉": Syringe,
  "🧳": Luggage,
  "📱": Smartphone,
  "🕓": Clock,
  "🤝": Handshake,
  "💰": Wallet,
  "💸": BadgeDollarSign,
  "🎟️": Ticket,
  "🛟": LifeBuoy,
  "🪪": Contact,
  "💎": Gem,
  "🤲": HandHeart,
  "🕊️": Feather,
  "🌍": Globe,
  "✅": BadgeCheck,
  "✓": Check,
  "💼": Briefcase,
  "💍": Heart,
};

export function BrandIcon({
  icon,
  className = "w-6 h-6",
}: {
  icon?: string | null;
  className?: string;
}) {
  if (!icon) return null;
  const key = icon.trim();
  const Cmp = MAP[key] ?? MAP[key.replace(/️/g, "")];
  if (Cmp) return <Cmp className={className} />;
  // Unmapped (e.g. a custom emoji typed in admin) — show it as-is.
  return <span className={className}>{icon}</span>;
}
