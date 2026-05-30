"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-data";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="px-[5%] py-20 max-w-[900px] mx-auto">
      <SectionHeader eyebrow="FAQs" title="Frequently Asked Questions" />
      <div className="flex flex-col gap-3">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={item.q}
              onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              className={cn(
                "bg-white rounded-xl px-6 py-5 shadow-sm border-l-4 cursor-pointer transition-colors",
                isOpen ? "border-l-brand" : "border-l-gray-200"
              )}
            >
              <div className="flex justify-between items-center">
                <div className="font-bold text-gray-900">{item.q}</div>
                <div className="text-brand text-xl font-bold">
                  {isOpen ? "−" : "+"}
                </div>
              </div>
              {isOpen && (
                <div className="mt-3 text-muted-foreground text-sm leading-[1.7]">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
