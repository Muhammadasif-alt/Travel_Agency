import Link from "next/link";
import { packages } from "@/lib/site-data";
import { PackageCard } from "./package-card";

export function Packages() {
  return (
    <section id="packages" className="bg-[#f7faf8] px-[5%] py-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <div className="text-brand-light text-[13px] font-bold tracking-[2px] mb-2">
              FEATURED PACKAGES
            </div>
            <h2 className="text-2xl md:text-[34px] font-extrabold text-brand">
              Our Most Popular Hajj &amp; Umrah Deals
            </h2>
          </div>
          <Link
            href="/umrah"
            className="text-brand font-semibold text-sm hover:text-brand-light transition-colors"
          >
            View All Packages →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
