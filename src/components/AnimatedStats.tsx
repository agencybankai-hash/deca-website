"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
  icon?: React.ReactNode;
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
    });
  }, [triggered, stats]);

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex flex-col items-center text-center">
          {stat.icon && (
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
              {stat.icon}
            </div>
          )}
          <span
            id={`stat-num-${i}`}
            className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight"
          >
            {stat.prefix || ""}0{stat.suffix || ""}
          </span>
          <span className="text-sm text-white/60 font-medium mt-2">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
