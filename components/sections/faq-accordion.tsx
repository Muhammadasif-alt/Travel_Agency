"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="flex flex-col">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={item.question} className="border-b border-gray-200">
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
              <span className="flex-1 font-bold text-gray-900">{item.question}</span>
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
                isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden pl-9 text-sm text-muted-foreground leading-[1.8]">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
