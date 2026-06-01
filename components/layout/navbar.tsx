"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="bg-white px-[5%] py-4 shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={640}
            height={199}
            priority
            className="h-10 sm:h-12 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-gray-700 pb-1 border-b-2 border-transparent transition-colors hover:text-brand hover:border-brand",
                isActive(link.href) && "text-brand border-brand"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Book Now</Link>
          </Button>

          {/* Hamburger (mobile/tablet) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-brand hover:bg-brand-50 transition-colors"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-3 py-3 rounded-lg text-[15px] font-medium transition-colors",
                isActive(link.href)
                  ? "bg-brand-50 text-brand"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Book Now
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
