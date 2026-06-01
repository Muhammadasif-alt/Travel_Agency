import { milestones } from "@/lib/site-data";

export function StatsBand() {
  return (
    <section className="bg-brand-light text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {milestones.map((m, i) => (
          <div
            key={m.label}
            className={`text-center px-4 py-12 ${
              i < milestones.length - 1
                ? "md:border-r md:border-white/20"
                : ""
            } ${i < 2 ? "border-b md:border-b-0 border-white/20" : ""}`}
          >
            <div className="text-3xl md:text-5xl font-extrabold">{m.num}</div>
            <div className="text-[11px] md:text-xs font-semibold uppercase tracking-wider mt-2 text-white/90">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
