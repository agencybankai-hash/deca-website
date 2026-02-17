"use client";

import { useState } from "react";
import Image from "next/image";

interface ComponentItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface ComponentTabsProps {
  items: ComponentItem[];
}

export default function ComponentTabs({ items }: ComponentTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-8 lg:gap-10 items-center">
      {/* Left — Tab list */}
      <div className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.title}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-5 px-5 py-5 text-left transition-all duration-300 cursor-pointer rounded-2xl border overflow-hidden ${
                isActive
                  ? "bg-brand border-brand shadow-lg shadow-brand/15"
                  : "bg-white border-gray-200 hover:border-brand/30 hover:shadow-sm"
              }`}
            >
              {/* Icon box */}
              <div
                className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive ? "bg-white/20" : "bg-brand/[0.06]"
                }`}
              >
                <div className={`transition-colors duration-300 ${isActive ? "text-white" : "text-brand"}`}>
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <h4
                  className={`font-extrabold text-[15px] uppercase tracking-wider mb-0.5 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-brand"
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-[13px] leading-snug transition-colors duration-300 ${
                    isActive ? "text-white/80" : "text-text-muted"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right — Large component image on white background */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
        <Image
          key={items[active]?.image}
          src={items[active]?.image}
          alt={items[active]?.alt}
          width={800}
          height={600}
          className="w-full h-full object-contain p-6 transition-opacity duration-300"
          priority
        />
      </div>
    </div>
  );
}
