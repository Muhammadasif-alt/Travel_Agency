import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative h-[360px] md:h-[420px] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/85 via-brand/60 to-brand/30" />

      <div className="relative h-full max-w-[1440px] mx-auto px-[5%] flex flex-col justify-center text-white">
        {eyebrow && (
          <div className="inline-block self-start bg-white/15 backdrop-blur-sm border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl drop-shadow">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg mt-4 max-w-2xl opacity-95">
            {subtitle}
          </p>
        )}
        {crumbs && crumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm mt-6 opacity-90">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-semibold">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="opacity-60">/</span>}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
