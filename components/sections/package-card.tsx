import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Package } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:-translate-y-1.5 hover:shadow-xl",
        pkg.featured && "border-2 border-brand-light shadow-xl"
      )}
    >
      <div className="relative h-[230px] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <span
          className={cn(
            "absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold shadow-sm",
            pkg.tagVariant === "popular"
              ? "bg-gold text-gray-900"
              : "bg-white text-brand"
          )}
        >
          {pkg.tag}
        </span>
        {pkg.discount && (
          <span className="absolute top-3 right-3 bg-coral text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-sm">
            {pkg.discount}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="font-bold text-[17px] mb-1.5">{pkg.title}</div>
        <div className="text-muted-foreground text-[13px] mb-3.5">{pkg.meta}</div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.features.map((f) => (
            <span
              key={f}
              className="bg-brand-100 text-brand px-2.5 py-0.5 rounded-full text-[11px]"
            >
              {f}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-3.5 border-t border-gray-200">
          <div>
            {pkg.oldPrice && (
              <div className="text-[11px] text-gray-400 line-through">
                {pkg.oldPrice}
              </div>
            )}
            {pkg.priceLabel && (
              <div className="text-[11px] text-gray-400">{pkg.priceLabel}</div>
            )}
            <div className="text-[22px] font-extrabold text-brand">
              {pkg.newPrice}
            </div>
          </div>
          <Button variant="book" size="sm">
            Book →
          </Button>
        </div>
      </div>
    </div>
  );
}
