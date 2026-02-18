"use client";

import { useState, useCallback, useRef, useEffect } from "react";
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
  const [displayIdx, setDisplayIdx] = useState(0);
  const [phase, setPhase] = useState<"visible" | "fading-out" | "loading" | "fading-in">("visible");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const FADE_MS = 200;

  const switchTab = useCallback(
    (i: number) => {
      if (i === active || phase !== "visible") return;
      setActive(i);
      setPhase("fading-out");

      // After fade-out, swap image & show skeleton
      timeoutRef.current = setTimeout(() => {
        setDisplayIdx(i);
        setPhase("loading");
      }, FADE_MS);
    },
    [active, phase],
  );

  /* Cleanup */
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  /* When the Next.js <Image> finishes loading, fade in */
  const onImageLoad = useCallback(() => {
    if (phase === "loading") {
      // Small delay so the skeleton is visible briefly (feels like real loading)
      requestAnimationFrame(() => setPhase("fading-in"));
      timeoutRef.current = setTimeout(() => setPhase("visible"), FADE_MS);
    }
  }, [phase]);

  const imgOpacity =
    phase === "visible" || phase === "fading-in" ? "opacity-100" : "opacity-0";
  const showSkeleton = phase === "loading" || phase === "fading-out";

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-10 items-stretch">
      {/* Left — Tab list */}
      <div className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.title}
              onClick={() => switchTab(i)}
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

      {/* Right — Large component image (height driven by left column via items-stretch) */}
      <div className="relative rounded-2xl overflow-hidden bg-white">
        {/* Skeleton / loading state */}
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-200 ${
            showSkeleton ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border-[3px] border-brand/20 border-t-brand animate-spin" />
            <span className="text-xs font-medium text-text-muted tracking-wide">Loading view…</span>
          </div>
        </div>

        {/* Image fills container absolutely — no layout shift */}
        <Image
          key={items[displayIdx]?.image}
          src={items[displayIdx]?.image}
          alt={items[displayIdx]?.alt}
          fill
          className={`object-contain p-6 transition-opacity duration-200 ${imgOpacity}`}
          onLoad={onImageLoad}
          priority
        />
      </div>
    </div>
  );
}
