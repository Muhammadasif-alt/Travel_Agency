"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const isGroupActive = (link: (typeof navLinks)[number]) =>
    link.children
      ? link.children.some((c) => isActive(c.href))
      : isActive(link.href);

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
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-gray-700 pb-1 border-b-2 border-transparent transition-colors group-hover:text-brand group-hover:border-brand",
                    isGroupActive(link) && "text-brand border-brand"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className="transition-transform group-hover:rotate-180"
                  />
                </Link>
                {/* Dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                    {link.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={cn(
                          "block px-5 py-2.5 text-[14px] text-gray-700 hover:bg-brand-50 hover:text-brand transition-colors",
                          isActive(c.href) && "bg-brand-50 text-brand font-semibold"
                        )}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
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
            )
          )}
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
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={() => setMobileServices((v) => !v)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium transition-colors",
                    isGroupActive(link)
                      ? "bg-brand-50 text-brand"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                  aria-expanded={mobileServices}
                >
                  {link.label}
                  <ChevronDown
                    size={18}
                    className={cn(
                      "transition-transform",
                      mobileServices && "rotate-180"
                    )}
                  />
                </button>
                {mobileServices && (
                  <div className="ml-3 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-brand-100 pl-3">
                    {link.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors",
                          isActive(c.href)
                            ? "bg-brand-50 text-brand"
                            : "text-gray-600 hover:bg-gray-50"
                        )}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
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
