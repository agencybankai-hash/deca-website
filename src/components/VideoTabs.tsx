"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import anime from "animejs";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const animeRef = useRef<anime.AnimeInstance | null>(null);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % tabs.length);
  }, [tabs.length]);

  /* When active tab changes — load & play video */
  useEffect(() => {
    const v = videoRef.current;
    const bar = progressRef.current;
    if (!v || !bar) return;

    // Reset
    bar.style.width = "0%";
    if (animeRef.current) {
      animeRef.current.pause();
      animeRef.current = null;
    }
    setIsPlaying(false);

    // Set new source
    v.src = tabs[active].video;
    v.load();

    const tryPlay = () => {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked — user needs to interact
          setIsPlaying(false);
        });
    };

    const startAnimation = () => {
      if (!v.duration || !isFinite(v.duration)) return;
      if (animeRef.current) animeRef.current.pause();

      animeRef.current = anime({
        targets: bar,
        width: ["0%", "100%"],
        duration: v.duration * 1000,
        easing: "linear",
        complete: () => advance(),
      });
    };

    const onCanPlay = () => {
      tryPlay();
      startAnimation();
    };

    const onEnd = () => {
      if (animeRef.current) animeRef.current.pause();
      if (bar) bar.style.width = "100%";
      advance();
    };

    v.addEventListener("canplay", onCanPlay, { once: true });
    v.addEventListener("ended", onEnd);

    // If already loaded
    if (v.readyState >= 3) {
      onCanPlay();
    }

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("ended", onEnd);
      if (animeRef.current) {
        animeRef.current.pause();
        animeRef.current = null;
      }
    };
  }, [active, advance, tabs]);

  const handleManualPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

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
                    ref={progressRef}
                    className="h-full bg-white/60"
                    style={{ width: "0%" }}
                  />
                </div>
              )}

              {/* Icon box */}
              <div
                className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive ? "bg-white/20" : "bg-brand/[0.06]"
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
      <div className="relative rounded-2xl overflow-hidden bg-white">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-auto block relative z-10"
        />
        {/* Click-to-play overlay when autoplay is blocked */}
        {!isPlaying && (
          <button
            onClick={handleManualPlay}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-white cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-brand/10 hover:bg-brand/20 flex items-center justify-center mb-3 transition-colors">
              <svg className="w-10 h-10 text-brand ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm text-text-muted font-medium">{tabs[active]?.title}</p>
          </button>
        )}
      </div>
    </div>
  );
}
