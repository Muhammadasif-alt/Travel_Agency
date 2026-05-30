import Link from "next/link";
import { cityLandings } from "@/lib/site-data";

export function AreasServed() {
  return (
    <section className="px-[5%] py-16 bg-[#f7faf8] border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto text-center">
        <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
          AREAS WE SERVE
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand mb-3">
          Hajj &amp; Umrah Across South Punjab
        </h2>
        <p className="text-muted-foreground text-[15px] max-w-2xl mx-auto mb-8">
          Local Hajj &amp; Umrah packages for pilgrims in Lodhran, Multan,
          Bahawalpur and nearby towns.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {cityLandings.map((l) => (
            <Link
              key={l.slug}
              href={`/${l.slug}`}
              className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:border-brand hover:text-brand transition-colors"
            >
              {l.serviceLabel} in {l.city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}