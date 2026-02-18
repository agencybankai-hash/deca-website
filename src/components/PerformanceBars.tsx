"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface MetricRow {
  label: string;
  icon: React.ReactNode;
  deca: number;      // 0-100
  decaLabel: string;
  traditional: number; // 0-100
  traditionalLabel: string;
  unit?: string;
}

interface PerformanceBarsProps {
  metrics: MetricRow[];
}

export default function PerformanceBars({ metrics }: PerformanceBarsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) setTriggered(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;

    metrics.forEach((_, i) => {
      anime({
        targets: `#perf-deca-${i}`,
        width: [`0%`, `${metrics[i].deca}%`],
        duration: 1200,
        easing: "easeOutExpo",
        delay: i * 120,
      });
      anime({
        targets: `#perf-trad-${i}`,
        width: [`0%`, `${metrics[i].traditional}%`],
        duration: 1200,
        easing: "easeOutExpo",
        delay: i * 120 + 100,
      });
    });
  }, [triggered, metrics]);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto space-y-8">
      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm bg-brand" />
          <span className="text-sm font-semibold text-text-primary">DECA Tilt & Turn</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm bg-[#d0d5dd]" />
          <span className="text-sm font-semibold text-text-secondary">Traditional Vinyl</span>
        </div>
      </div>

      {metrics.map((m, i) => (
        <div key={m.label} className="space-y-2">
          {/* Metric header */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center text-brand shrink-0">
              {m.icon}
            </div>
            <span className="text-sm font-bold text-text-primary uppercase tracking-wide">{m.label}</span>
          </div>

          {/* DECA bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-8 bg-brand/[0.06] rounded-lg overflow-hidden">
              <div
                id={`perf-deca-${i}`}
                className="h-full bg-brand rounded-lg flex items-center justify-end px-3"
                style={{ width: "0%" }}
              >
                <span className="text-xs font-bold text-white whitespace-nowrap">{m.decaLabel}</span>
              </div>
            </div>
          </div>

          {/* Traditional bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-8 bg-[#eef0f3] rounded-lg overflow-hidden">
              <div
                id={`perf-trad-${i}`}
                className="h-full bg-[#d0d5dd] rounded-lg flex items-center justify-end px-3"
                style={{ width: "0%" }}
              >
                <span className="text-xs font-bold text-[#6b7280] whitespace-nowrap">{m.traditionalLabel}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
