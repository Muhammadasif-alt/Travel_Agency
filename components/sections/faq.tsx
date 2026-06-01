"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-data";
import { images, avatar } from "@/lib/images";
import { Pill } from "./section-header";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="px-[5%] py-20 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image + floating stat card */}
        <div className="relative">
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images.aboutMosque}
              alt="Pilgrims at the mosque"
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 sm:-left-6 bg-white rounded-2xl shadow-xl p-5 w-60">
            <div className="font-bold text-brand mb-2">Happy Pilgrims</div>
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {["Ahmed", "Fatima", "Bilal"].map((n) => (
                  <span
                    key={n}
                    className="w-9 h-9 rounded-full ring-2 ring-white overflow-hidden"
                  >
                    <Image
                      src={avatar(n, { bg: "14b8a6" })}
                      alt={n}
                      width={36}
                      height={36}
                    />
                  </span>
                ))}
              </div>
              <span className="ml-3 w-9 h-9 rounded-full bg-brand-light text-white text-xs font-bold flex items-center justify-center">
                15K+
              </span>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div>
          <Pill>Most Asked Questions</Pill>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-brand leading-tight mt-5 mb-8">
            Everything You Need to Know
          </h2>

          <div className="flex flex-col">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={item.q} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full flex items-center gap-4 text-left py-5"
                  >
                    <span
                      className={cn(
                        "text-lg font-extrabold tabular-nums",
                        isOpen ? "text-brand-light" : "text-gray-300"
                      )}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-bold text-gray-900">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={cn(
                        "text-brand-light transition-transform flex-shrink-0",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-5"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden pl-9 text-sm text-muted-foreground leading-[1.8]">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
