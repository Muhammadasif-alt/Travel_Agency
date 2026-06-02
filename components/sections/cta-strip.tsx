import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaStrip({
  title,
  subtitle,
  primary = { label: "Get a Free Quote", href: "/contact" },
  secondary,
}: {
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="px-[5%] py-14">
      <div className="max-w-[1440px] mx-auto gradient-brand rounded-2xl px-8 md:px-12 py-10 md:py-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold">{title}</h3>
          {subtitle && (
            <p className="opacity-90 mt-2 max-w-xl text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary" size="lg" className="bg-white text-brand hover:bg-brand-50">
            <Link href={primary.href}>{primary.label} →</Link>
          </Button>
          {secondary && (
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10"
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
