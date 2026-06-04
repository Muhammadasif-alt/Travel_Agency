"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Newspaper,
  Star,
  Briefcase,
  Plane,
  FileText,
  Hotel,
  Map,
  Users,
  HelpCircle,
  Settings,
  Shield,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { logout } from "@/app/admin/auth-actions";

type Item = { href: string; label: string; icon: typeof Package; adminOnly?: boolean };

const items: Item[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/packages", label: "Packages", icon: Package },
  { href: "/admin/blogs", label: "Blogs / News", icon: Newspaper },
  { href: "/admin/testimonials", label: "Success Stories", icon: Star },
  { href: "/admin/services", label: "Services", icon: Briefcase },
  { href: "/admin/flights", label: "Flights", icon: Plane },
  { href: "/admin/visa", label: "Visa", icon: FileText },
  { href: "/admin/hotels", label: "Hotels", icon: Hotel },
  { href: "/admin/tours", label: "Tours", icon: Map },
  { href: "/admin/team", label: "Team", icon: Users },
  { href: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { href: "/admin/settings", label: "Settings", icon: Settings, adminOnly: true },
  { href: "/admin/users", label: "Users", icon: Shield, adminOnly: true },
];

export function AdminSidebar({
  user,
}: {
  user: { name: string; role: string };
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  const visible = items.filter((i) => !i.adminOnly || user.role === "ADMIN");

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between bg-brand text-white px-4 h-14">
        <span className="font-extrabold tracking-wide text-sm">
          NUSARAT <span className="text-brand-light">MADINA</span>
        </span>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="w-10 h-10 flex items-center justify-center"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 z-40 h-screen w-64 bg-brand text-white flex flex-col transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-5 h-16 flex items-center border-b border-white/10">
          <span className="font-extrabold tracking-wide">
            NUSARAT <span className="text-brand-light">MADINA</span>
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {visible.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive(href)
                  ? "bg-brand-light text-white"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 p-3 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/75 hover:bg-white/10 hover:text-white transition-colors"
          >
            <ExternalLink size={18} />
            View Website
          </Link>
          <div className="px-3 py-2">
            <div className="text-sm font-semibold truncate">{user.name}</div>
            <div className="text-xs text-white/50">{user.role}</div>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/75 hover:bg-red-500/80 hover:text-white transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
