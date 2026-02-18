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
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-y-4">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-2.5 justify-center">
          <span
            id={`stat-num-${i}`}
            className="text-2xl md:text-3xl font-extrabold text-white leading-none tracking-tight"
          >
            {stat.prefix || ""}0{stat.suffix || ""}
          </span>
          <span className="text-xs text-white/60 font-medium leading-tight max-w-[7rem]">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
