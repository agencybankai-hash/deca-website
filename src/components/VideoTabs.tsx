"use client";

import { useState, useRef, useEffect, useCallback } from "react";

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
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % tabs.length);
  }, [tabs.length]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
    setProgress(0);
  }, [active]);

  /* progress bar via timeupdate */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      if (v.duration && isFinite(v.duration)) {
        setProgress((v.currentTime / v.duration) * 100);
      }
    };
    const onEnd = () => {
      setProgress(100);
      advance();
    };
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", onEnd);
    };
  }, [active, advance]);

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-8 lg:gap-10 items-center">
      {/* Left — Tabs */}
      <div className="flex flex-col gap-3">
        {tabs.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={tab.title}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-5 px-5 py-5 text-left transition-all duration-300 cursor-pointer rounded-2xl border overflow-hidden ${
                isActive
                  ? "bg-brand border-brand shadow-lg shadow-brand/15"
                  : "bg-white border-gray-200 hover:border-brand/30 hover:shadow-sm"
              }`}
            >
              {/* Progress bar inside active tab */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20">
                  <div
                    className="h-full bg-white/60 transition-[width] duration-200 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              {/* Icon box */}
              <div
                className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-white/20"
                    : "bg-brand/[0.06]"
                }`}
              >
                <div className={`transition-colors duration-300 ${isActive ? "text-white" : "text-brand"}`}>
                  {tab.icon}
                </div>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <h4
                  className={`font-extrabold text-[15px] uppercase tracking-wider mb-0.5 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-brand"
                  }`}
                >
                  {tab.title}
                </h4>
                <p
                  className={`text-[13px] leading-snug transition-colors duration-300 ${
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
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
        <video
          ref={videoRef}
          key={tabs[active]?.video}
          src={tabs[active]?.video}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
