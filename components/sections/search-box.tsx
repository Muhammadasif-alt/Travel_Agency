"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { searchTabs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SearchBox() {
  const [activeTab, setActiveTab] = useState(searchTabs[0].id);

  return (
    <div className="max-w-[1100px] mx-auto -mt-10 bg-white rounded-2xl shadow-2xl p-7 relative z-10 mx-[5%] md:mx-auto">
      <div className="flex gap-2 mb-5 border-b border-gray-200 pb-4 flex-wrap">
        {searchTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 text-[13px] font-medium rounded-md transition-colors cursor-pointer",
              activeTab === tab.id
                ? "bg-brand text-white"
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-3.5 items-end">
        <SearchField label="From" value="Multan, Pakistan" />
        <SearchField label="To" value="Jeddah, KSA" />
        <SearchField label="Departure" value="15 Jun 2026" />
        <SearchField label="Travellers" value="2 Adults" />
        <Button className="h-11">🔍 Search</Button>
      </div>
    </div>
  );
}

function SearchField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-[11px] text-gray-500 font-semibold uppercase">
        {label}
      </label>
      <div className="border border-gray-300 px-3 py-2.5 rounded-lg mt-1 text-sm">
        {value}
      </div>
    </div>
  );
}
