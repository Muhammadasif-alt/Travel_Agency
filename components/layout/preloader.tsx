"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex h-28 w-28 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-brand-100 border-t-brand-light" />
        <Image
          src="/images/emblem.png"
          alt="Nusarat Madina"
          width={64}
          height={64}
          priority
          className="h-16 w-16"
        />
      </div>
    </div>
  );
}
