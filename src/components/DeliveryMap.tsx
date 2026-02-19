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
    <div className="relative">
      {/* Wooden frame */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          padding: "10px",
          background: "linear-gradient(145deg, #8B6914 0%, #a47e1b 15%, #6b4f10 50%, #8B6914 85%, #a47e1b 100%)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3)",
        }}
      >
        {/* Inner wood groove */}
        <div
          className="rounded-lg overflow-hidden"
          style={{
            padding: "3px",
            background: "linear-gradient(145deg, #6b4f10 0%, #5a4210 50%, #7a5c12 100%)",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          {/* Chalkboard surface */}
          <div
            ref={wrapRef}
            className="relative rounded-md overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #2a4a2a 0%, #1e3a1e 30%, #243d24 60%, #1a351a 100%)",
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={() => { setHovered(null); setMouse(null); }}
          >
            {/* Chalk dust texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 1px),
                  radial-gradient(circle at 60% 70%, rgba(255,255,255,0.6) 0%, transparent 1px),
                  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.7) 0%, transparent 1px),
                  radial-gradient(circle at 40% 80%, rgba(255,255,255,0.5) 0%, transparent 1px),
                  radial-gradient(circle at 10% 60%, rgba(255,255,255,0.6) 0%, transparent 1px),
                  radial-gradient(circle at 90% 50%, rgba(255,255,255,0.4) 0%, transparent 1px)`,
                backgroundSize: "120px 100px, 80px 120px, 100px 90px, 90px 110px, 110px 80px, 70px 130px",
              }}
            />

            {/* Subtle chalk smudge marks */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 30% 15% at 70% 40%, rgba(255,255,255,0.03) 0%, transparent 70%), radial-gradient(ellipse 20% 25% at 25% 65%, rgba(255,255,255,0.02) 0%, transparent 70%)",
              }}
            />

            {/* Map with generous padding */}
            <div className="p-6 sm:p-8">
              <svg
                viewBox="-70 5 1040 615"
                className="w-full h-auto block"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* State shapes — chalk-style */}
                {states.map((s) => {
                  const isCore = CORE.has(s.abbr);
                  const isHov = hovered === s.abbr;

                  return (
                    <path
                      key={s.abbr}
                      d={s.d}
                      fill={
                        isHov
                          ? isCore ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.1)"
                          : isCore ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.02)"
                      }
                      stroke={isHov ? "rgba(255,255,255,0.8)" : isCore ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)"}
                      strokeWidth={isHov ? 1.8 : 0.6}
                      strokeLinejoin="round"
                      style={{ cursor: "pointer", transition: "fill .15s,stroke .15s,stroke-width .15s" }}
                      onMouseEnter={() => setHovered(s.abbr)}
                    />
                  );
                })}

                {/* Dashed route line — chalk-like */}
                {hovered && info && (
                  <line
                    x1={HQ.x}
                    y1={HQ.y}
                    x2={info.cx}
                    y2={info.cy}
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth={1.6}
                    strokeDasharray="8 5"
                    strokeLinecap="round"
                  />
                )}

                {/* HQ pulsing marker — chalk white */}
                <circle cx={HQ.x} cy={HQ.y} r={5} fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth={1}>
                  <animate attributeName="r" from="5" to="16" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx={HQ.x} cy={HQ.y} r={4} fill="rgba(255,255,255,0.9)" stroke="#1e3a1e" strokeWidth={1.5} />
                <rect x={HQ.x - 12} y={HQ.y - 19} width={24} height={12} rx={3} fill="rgba(255,255,255,0.85)" />
                <text
                  x={HQ.x}
                  y={HQ.y - 11.5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#1e3a1e"
                  fontSize="7.5"
                  fontWeight="800"
                  fontFamily="Inter, system-ui, sans-serif"
                >
                  HQ
                </text>
              </svg>
            </div>

            {/* Tooltip — chalk style */}
            {hovered && mouse && info && (
              <div
                className="absolute z-10 pointer-events-none"
                style={{ left: mouse.x + 14, top: mouse.y - 6 }}
              >
                <div
                  className="border border-white/20 shadow-xl rounded-lg px-3.5 py-2 whitespace-nowrap"
                  style={{ background: "rgba(30,58,30,0.92)", backdropFilter: "blur(8px)" }}
                >
                  <p className="text-sm font-bold text-white/90 leading-tight">{info.name}</p>
                  <p className="text-xs font-semibold text-white/60 leading-tight mt-0.5">
                    Delivery: {DELIVERY[hovered] ?? "Contact us"}
                  </p>
                </div>
              </div>
            )}

            {/* Legend — bottom chalk tray area */}
            <div className="px-6 sm:px-8 pb-4 -mt-2">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] text-white/35">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.25)" }} />
                  <span>Core delivery region</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="8" viewBox="0 0 16 8" className="flex-shrink-0">
                    <line x1="1" y1="4" x2="15" y2="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="3 2" />
                  </svg>
                  <span>Route from Westfield, MA</span>
                </div>
                <span className="ml-auto">Hover any state for delivery estimate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chalk ledge / tray at the bottom */}
      <div
        className="relative mx-1 h-3 rounded-b-md -mt-0.5"
        style={{
          background: "linear-gradient(180deg, #6b4f10 0%, #8B6914 40%, #a47e1b 100%)",
          boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
        }}
      />

      {/* Board legs */}
      <div className="flex justify-between px-12 -mt-0.5">
        {/* Left leg */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-16 rounded-b-sm" style={{ background: "linear-gradient(180deg, #7a5c12 0%, #5a4210 40%, #4a3610 100%)", boxShadow: "2px 4px 8px rgba(0,0,0,0.25)" }} />
          <div className="w-6 h-1.5 rounded-b-sm -mt-px" style={{ background: "linear-gradient(180deg, #4a3610 0%, #3d2d0e 100%)", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
        </div>
        {/* Right leg */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-16 rounded-b-sm" style={{ background: "linear-gradient(180deg, #7a5c12 0%, #5a4210 40%, #4a3610 100%)", boxShadow: "-2px 4px 8px rgba(0,0,0,0.25)" }} />
          <div className="w-6 h-1.5 rounded-b-sm -mt-px" style={{ background: "linear-gradient(180deg, #4a3610 0%, #3d2d0e 100%)", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
        </div>
      </div>
    </div>
  );
}

export default memo(DeliveryMap);
