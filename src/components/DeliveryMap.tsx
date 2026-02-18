"use client";

import { useState, useRef, useCallback, memo } from "react";
import statesData from "@/data/us-states-paths.json";

/* ── Types ── */

interface StateInfo {
  abbr: string;
  name: string;
  d: string;
  cx: number;
  cy: number;
}

/* ── Delivery estimates from Westfield, MA ── */

const DELIVERY: Record<string, string> = {
  MA: "Same day – 2 days",
  CT: "1–2 days",  RI: "1–2 days",
  NH: "1–3 days",  VT: "1–3 days",
  NY: "2–4 days",  ME: "2–4 days",  NJ: "2–4 days",
  PA: "3–5 days",  DE: "3–5 days",  MD: "3–5 days",  DC: "3–5 days",
  VA: "4–6 days",  WV: "4–6 days",  OH: "4–6 days",
  NC: "5–7 days",  SC: "5–7 days",  GA: "5–7 days",  TN: "5–7 days",
  KY: "5–7 days",  IN: "5–7 days",  MI: "5–7 days",  IL: "5–7 days",
  FL: "6–8 days",  AL: "6–8 days",  MS: "6–8 days",
  WI: "6–8 days",  MN: "6–8 days",  IA: "6–8 days",  MO: "6–8 days",
  AR: "7–9 days",  LA: "7–9 days",
  ND: "7–9 days",  SD: "7–9 days",  NE: "7–9 days",  KS: "7–9 days",  CO: "7–9 days",
  OK: "7–10 days",  TX: "7–10 days",
  MT: "8–10 days",  WY: "8–10 days",  NM: "8–10 days",
  ID: "8–10 days",  UT: "8–10 days",  AZ: "8–10 days",  NV: "8–10 days",
  CA: "8–10 days",  OR: "8–10 days",  WA: "8–10 days",
  AK: "10–14 days", HI: "10–14 days",
};

/* Core delivery area (Northeast) */
const CORE = new Set(["MA", "CT", "RI", "NH", "VT", "NY", "ME", "NJ", "PA"]);

/* HQ location — Westfield, MA (pre-projected Albers coords) */
const HQ = { x: 893, y: 181 };

/* ── All states as array ── */

const states: StateInfo[] = Object.values(statesData) as StateInfo[];

/* ── Component ── */

function DeliveryMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const info = hovered ? (statesData as Record<string, StateInfo>)[hovered] : null;

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full bg-white rounded-2xl border border-gray-200 overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseLeave={() => { setHovered(null); setMouse(null); }}
    >
      {/* SVG Map */}
      <svg
        viewBox="60 0 910 610"
        className="w-full h-auto block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* State shapes */}
        {states.map((s) => {
          const isCore = CORE.has(s.abbr);
          const isHov = hovered === s.abbr;

          return (
            <path
              key={s.abbr}
              d={s.d}
              fill={
                isHov
                  ? isCore ? "rgba(56,84,170,0.28)" : "rgba(56,84,170,0.14)"
                  : isCore ? "rgba(56,84,170,0.08)" : "#f3f4f6"
              }
              stroke={isHov ? "#3854AA" : isCore ? "rgba(56,84,170,0.18)" : "#dfe1e6"}
              strokeWidth={isHov ? 1.6 : 0.5}
              strokeLinejoin="round"
              style={{ cursor: "pointer", transition: "fill .15s,stroke .15s,stroke-width .15s" }}
              onMouseEnter={() => setHovered(s.abbr)}
            />
          );
        })}

        {/* Dashed route line from HQ to hovered state centroid */}
        {hovered && info && (
          <line
            x1={HQ.x}
            y1={HQ.y}
            x2={info.cx}
            y2={info.cy}
            stroke="#3854AA"
            strokeWidth={1.4}
            strokeDasharray="6 4"
            strokeLinecap="round"
            opacity={0.45}
          />
        )}

        {/* HQ pulsing marker */}
        <circle cx={HQ.x} cy={HQ.y} r={5} fill="none" stroke="#3854AA" strokeWidth={1} opacity={0.3}>
          <animate attributeName="r" from="5" to="14" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx={HQ.x} cy={HQ.y} r={3.5} fill="#3854AA" stroke="white" strokeWidth={1.5} />
        <rect x={HQ.x - 11} y={HQ.y - 17} width={22} height={11} rx={3} fill="#3854AA" />
        <text
          x={HQ.x}
          y={HQ.y - 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="7"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
        >
          HQ
        </text>
      </svg>

      {/* Tooltip */}
      {hovered && mouse && info && (
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: mouse.x + 14, top: mouse.y - 6 }}
        >
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-lg px-3.5 py-2 whitespace-nowrap">
            <p className="text-sm font-bold text-gray-900 leading-tight">{info.name}</p>
            <p className="text-xs font-semibold text-[#3854AA] leading-tight mt-0.5">
              Delivery: {DELIVERY[hovered] ?? "Contact us"}
            </p>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/60 rounded-b-2xl">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: "rgba(56,84,170,0.08)", border: "1px solid rgba(56,84,170,0.18)" }} />
            <span>Core delivery region</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="8" viewBox="0 0 16 8" className="flex-shrink-0">
              <line x1="1" y1="4" x2="15" y2="4" stroke="#3854AA" strokeWidth="1.5" strokeDasharray="3 2" />
            </svg>
            <span>Route from Westfield, MA</span>
          </div>
          <span className="ml-auto">Hover any state for delivery estimate</span>
        </div>
      </div>
    </div>
  );
}

export default memo(DeliveryMap);
