"use client";
import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════
   1. SPLASH PRELOADER — shows once on first visit
   Animated DECA logo + progress bar + fade out
   ═══════════════════════════════════════════════════════ */

export function SplashPreloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "complete" | "hidden">("loading");

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem("deca-splash-shown")) {
      setPhase("hidden");
      return;
    }

    // Animate progress
    const start = Date.now();
    const duration = 2200; // ms
    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const tick = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      setProgress(Math.round(ease(t) * 100));
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setPhase("complete");
        sessionStorage.setItem("deca-splash-shown", "1");
        setTimeout(() => setPhase("hidden"), 600);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand transition-opacity duration-500 ${
        phase === "complete" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Blueprint pattern background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url(/pattern-blueprint.svg)] bg-[600px]" />

      {/* Logo animation */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo mark — animated window shape */}
        <div className="mb-6 relative">
          <svg width="72" height="72" viewBox="0 0 72 72" className="drop-shadow-lg">
            {/* Outer frame */}
            <rect
              x="4" y="4" width="64" height="64" rx="4"
              fill="none" stroke="white" strokeWidth="2.5"
              className="animate-[drawFrame_1s_ease-out_forwards]"
              strokeDasharray="256"
              strokeDashoffset="256"
              style={{ animation: "drawFrame 0.8s ease-out forwards" }}
            />
            {/* Cross dividers */}
            <line x1="36" y1="8" x2="36" y2="64" stroke="white" strokeWidth="1.5" opacity="0.8"
              strokeDasharray="56" strokeDashoffset="56"
              style={{ animation: "drawFrame 0.5s ease-out 0.4s forwards" }}
            />
            <line x1="8" y1="36" x2="64" y2="36" stroke="white" strokeWidth="1.5" opacity="0.8"
              strokeDasharray="56" strokeDashoffset="56"
              style={{ animation: "drawFrame 0.5s ease-out 0.6s forwards" }}
            />
            {/* Glass shimmer */}
            <rect x="9" y="9" width="25" height="25" rx="1" fill="white" opacity="0.08"
              style={{ animation: "fadeIn 0.5s ease-out 0.8s both" }}
            />
            <rect x="38" y="9" width="25" height="25" rx="1" fill="white" opacity="0.05"
              style={{ animation: "fadeIn 0.5s ease-out 1s both" }}
            />
            <rect x="9" y="38" width="25" height="25" rx="1" fill="white" opacity="0.05"
              style={{ animation: "fadeIn 0.5s ease-out 1.1s both" }}
            />
            <rect x="38" y="38" width="25" height="25" rx="1" fill="white" opacity="0.08"
              style={{ animation: "fadeIn 0.5s ease-out 1.2s both" }}
            />
          </svg>
        </div>

        {/* Brand name */}
        <h1
          className="text-2xl font-bold tracking-[0.25em] text-white mb-1"
          style={{ animation: "fadeIn 0.6s ease-out 0.3s both" }}
        >
          DECA
        </h1>
        <p
          className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-10"
          style={{ animation: "fadeIn 0.6s ease-out 0.5s both" }}
        >
          Windows & Doors
        </p>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/80 rounded-full transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] text-white/30 mt-3 tracking-wider font-medium tabular-nums">
          {progress}%
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   2. ROUTE PRELOADER — top bar for page navigation
   Thin progress bar at top of page during navigation
   ═══════════════════════════════════════════════════════ */

export function RoutePreloader() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const startLoading = () => {
      setLoading(true);
      setProgress(0);
      let p = 0;
      timer = setInterval(() => {
        p += Math.random() * 15 + 5;
        if (p > 90) p = 90;
        setProgress(p);
      }, 200);
    };

    const stopLoading = () => {
      clearInterval(timer);
      setProgress(100);
      hideTimer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
    };

    // Listen for navigation events via Next.js
    // We hook into link clicks and popstate
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (anchor && anchor.href && anchor.origin === window.location.origin && anchor.pathname !== window.location.pathname) {
        startLoading();
      }
    };

    const handleComplete = () => {
      stopLoading();
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handleComplete);

    // MutationObserver to detect when page content changes (route transition complete)
    const observer = new MutationObserver(() => {
      if (loading) stopLoading();
    });
    const main = document.querySelector("main");
    if (main) {
      observer.observe(main, { childList: true, subtree: true });
    }

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handleComplete);
      observer.disconnect();
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, [loading]);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-[3px]">
      <div
        className="h-full bg-gradient-to-r from-brand-light via-white to-brand-lighter rounded-r-full transition-[width] duration-200 ease-out shadow-[0_0_8px_rgba(56,84,170,0.4)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
