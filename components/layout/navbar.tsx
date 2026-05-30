"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { siteConfig, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white px-[5%] py-4 flex justify-between items-center shadow-sm border-b-[3px] border-brand sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-[50px] h-[50px] gradient-brand rounded-full flex items-center justify-center text-white font-bold text-[22px]">
          N
        </div>
        <div>
          <div className="text-[22px] font-extrabold text-brand tracking-wide leading-none">
            {siteConfig.brand}
          </div>
          <div className="text-[10px] text-muted-foreground tracking-[2px]">
            {siteConfig.tagline}
          </div>
        </div>
      </Link>

      <div className="hidden lg:flex gap-7 text-sm font-medium">
        {navLinks.map((link) => {
          const active =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-gray-700 pb-1 border-b-2 border-transparent transition-colors hover:text-brand hover:border-brand",
                active && "text-brand border-brand"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <Button asChild>
        <Link href="/contact">Book Now</Link>
      </Button>
    </nav>
  );
}
