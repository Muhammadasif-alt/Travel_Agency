import Image from "next/image";
import { Pill } from "./section-header";
import { team } from "@/lib/site-data";
import { avatar } from "@/lib/images";

export function Experts() {
  return (
    <section className="px-[5%] py-16">
      <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-brand-50 via-sky-50 to-blue-50 rounded-3xl px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <Pill>Our Team</Pill>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-brand mt-5">
            Meet the People Behind Your Journey
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative h-56 sm:h-64 bg-brand-50">
                <Image
                  src={m.photo ?? avatar(m.name, { bg: "14b8a6", size: 400 })}
                  alt={m.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                <div className="font-bold text-brand">{m.name}</div>
                <div className="text-sm text-brand-light font-semibold mt-0.5">
                  {m.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
