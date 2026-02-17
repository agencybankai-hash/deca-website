"use client";

import { useState, useRef, useEffect } from "react";

interface VideoTab {
  icon: React.ReactNode;
  title: string;
  description: string;
  video: string;
}

interface VideoTabsProps {
  tabs: VideoTab[];
}

export default function VideoTabs({ tabs }: VideoTabsProps) {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [active]);

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-8 lg:gap-10 items-center">
      {/* Left — Tabs */}
      <div className="flex flex-col gap-0">
        {tabs.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={tab.title}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-5 px-6 py-5 text-left transition-all duration-300 cursor-pointer border-l-4 ${
                isActive
                  ? "bg-brand border-l-brand"
                  : "bg-transparent border-l-transparent hover:bg-brand/[0.03]"
              } ${i === 0 ? "rounded-t-2xl" : ""} ${i === tabs.length - 1 ? "rounded-b-2xl" : ""}`}
            >
              {/* Icon box */}
              <div
                className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-white/20 shadow-inner"
                    : "bg-brand/[0.07]"
                }`}
              >
                <div className={`transition-colors duration-300 ${isActive ? "text-white" : "text-brand"}`}>
                  {tab.icon}
                </div>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <h4
                  className={`font-extrabold text-lg uppercase tracking-wider mb-0.5 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-brand"
                  }`}
                >
                  {tab.title}
                </h4>
                <p
                  className={`text-[13px] leading-snug transition-colors duration-300 ${
                    isActive ? "text-white/75" : "text-text-muted"
                  }`}
                >
                  {tab.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right — Video */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
        <video
          ref={videoRef}
          key={tabs[active]?.video}
          src={tabs[active]?.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
