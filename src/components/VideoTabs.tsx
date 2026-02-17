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
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left — Tabs */}
      <div className="flex flex-col gap-3">
        {tabs.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={tab.title}
              onClick={() => setActive(i)}
              className={`flex items-start gap-4 p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-brand border-brand text-white shadow-lg shadow-brand/20"
                  : "bg-white border-border text-text-primary hover:border-brand/30 hover:shadow-sm"
              }`}
            >
              {/* Icon */}
              <div
                className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  isActive ? "bg-white/20" : "bg-brand/5"
                }`}
              >
                <div className={isActive ? "text-white" : "text-brand"}>
                  {tab.icon}
                </div>
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h4
                  className={`font-bold text-base uppercase tracking-wide mb-1 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-text-primary"
                  }`}
                >
                  {tab.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-white/80" : "text-text-muted"
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
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
        <video
          ref={videoRef}
          key={tabs[active]?.video}
          src={tabs[active]?.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
