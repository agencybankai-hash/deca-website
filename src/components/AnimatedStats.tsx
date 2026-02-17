"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  /** 0-100: how full the ring is */
  ring: number;
  decimals?: number;
}

interface AnimatedStatsProps {
  stats: Stat[];
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;

    // Animate each stat value
    stats.forEach((stat, i) => {
      const numEl = document.getElementById(`stat-num-${i}`);
      if (!numEl) return;

      const obj = { val: 0 };
      anime({
        targets: obj,
        val: stat.value,
        duration: 1800,
        easing: "easeOutExpo",
        delay: i * 150,
        update: () => {
          numEl.textContent = `${stat.prefix || ""}${obj.val.toFixed(stat.decimals ?? 0)}${stat.suffix || ""}`;
        },
      });

      // Animate ring
      const circle = document.getElementById(`stat-ring-${i}`);
      if (circle) {
        const circumference = 2 * Math.PI * 40;
        const offset = circumference - (stat.ring / 100) * circumference;
        anime({
          targets: circle,
          strokeDashoffset: [circumference, offset],
          duration: 2000,
          easing: "easeOutExpo",
          delay: i * 150,
        });
      }
    });
  }, [triggered, stats]);

  const circumference = 2 * Math.PI * 40;

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex flex-col items-center text-center">
          {/* Circular progress ring */}
          <div className="relative w-28 h-28 mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              {/* Background ring */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="6" opacity="0.15" />
              {/* Animated ring */}
              <circle
                id={`stat-ring-${i}`}
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                opacity="0.9"
              />
            </svg>
            {/* Number in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`stat-num-${i}`}
                className="text-2xl md:text-3xl font-bold text-white"
              >
                {stat.prefix || ""}0{stat.suffix || ""}
              </span>
            </div>
          </div>
          {/* Label */}
          <span className="text-sm text-white/60 font-medium">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
