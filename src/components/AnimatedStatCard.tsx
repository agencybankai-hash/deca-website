"use client";
import { useEffect, useRef, useState } from "react";

interface AnimatedStatCardProps {
  value: string;
  label: string;
  light?: boolean;
}

/**
 * Animated stat card with count-up effect when scrolled into view.
 * Parses numeric part from value string (e.g. "500+" → counts to 500, appends "+").
 */
export default function AnimatedStatCard({ value, label, light = false }: AnimatedStatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse numeric portion and suffix
    const match = value.match(/^(\d+)(.*)/);
    if (!match) return; // No number to animate

    const target = parseInt(match[1], 10);
    const suffix = match[2]; // e.g. "+", " yr", " wk", "%"

    // Start from 0 display
    setDisplay(`0${suffix}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const duration = 1200; // ms
          const startTime = performance.now();

          function animate(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setDisplay(`${current}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className={`text-center py-6 px-4 rounded-xl ${light ? "bg-white/5 border border-white/10" : "bg-gray-50 border border-border"}`}
    >
      <div className={`text-3xl md:text-4xl font-bold mb-1 ${light ? "text-white" : "text-blue-accent"}`}>
        {display}
      </div>
      <div className={`text-sm ${light ? "text-white/60" : "text-text-secondary"}`}>{label}</div>
    </div>
  );
}
