"use client";

import { useState, useRef, useCallback, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";

/* ── Data ── */

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

/* Westfield, MA – DECA HQ */
const HQ: [number, number] = [-72.75, 42.12];

/*
  FIPS → { abbr, name, delivery }.
  All 50 states + DC with realistic delivery estimates from Westfield, MA.
*/
const ALL_STATES: Record<string, { abbr: string; name: string; delivery: string }> = {
  /* Northeast — core service area */
  "25": { abbr: "MA", name: "Massachusetts", delivery: "Same day – 2 days" },
  "09": { abbr: "CT", name: "Connecticut", delivery: "1–2 days" },
  "44": { abbr: "RI", name: "Rhode Island", delivery: "1–2 days" },
  "33": { abbr: "NH", name: "New Hampshire", delivery: "1–3 days" },
  "50": { abbr: "VT", name: "Vermont", delivery: "1–3 days" },
  "36": { abbr: "NY", name: "New York", delivery: "2–4 days" },
  "23": { abbr: "ME", name: "Maine", delivery: "2–4 days" },
  "34": { abbr: "NJ", name: "New Jersey", delivery: "2–4 days" },
  "42": { abbr: "PA", name: "Pennsylvania", delivery: "3–5 days" },
  /* Mid-Atlantic */
  "10": { abbr: "DE", name: "Delaware", delivery: "3–5 days" },
  "24": { abbr: "MD", name: "Maryland", delivery: "3–5 days" },
  "11": { abbr: "DC", name: "District of Columbia", delivery: "3–5 days" },
  "51": { abbr: "VA", name: "Virginia", delivery: "4–6 days" },
  "54": { abbr: "WV", name: "West Virginia", delivery: "4–6 days" },
  /* Southeast */
  "37": { abbr: "NC", name: "North Carolina", delivery: "5–7 days" },
  "45": { abbr: "SC", name: "South Carolina", delivery: "5–7 days" },
  "13": { abbr: "GA", name: "Georgia", delivery: "5–7 days" },
  "12": { abbr: "FL", name: "Florida", delivery: "6–8 days" },
  "01": { abbr: "AL", name: "Alabama", delivery: "6–8 days" },
  "28": { abbr: "MS", name: "Mississippi", delivery: "6–8 days" },
  "47": { abbr: "TN", name: "Tennessee", delivery: "5–7 days" },
  "21": { abbr: "KY", name: "Kentucky", delivery: "5–7 days" },
  /* Midwest */
  "39": { abbr: "OH", name: "Ohio", delivery: "4–6 days" },
  "26": { abbr: "MI", name: "Michigan", delivery: "5–7 days" },
  "18": { abbr: "IN", name: "Indiana", delivery: "5–7 days" },
  "17": { abbr: "IL", name: "Illinois", delivery: "5–7 days" },
  "55": { abbr: "WI", name: "Wisconsin", delivery: "6–8 days" },
  "27": { abbr: "MN", name: "Minnesota", delivery: "6–8 days" },
  "19": { abbr: "IA", name: "Iowa", delivery: "6–8 days" },
  "29": { abbr: "MO", name: "Missouri", delivery: "6–8 days" },
  "05": { abbr: "AR", name: "Arkansas", delivery: "7–9 days" },
  "22": { abbr: "LA", name: "Louisiana", delivery: "7–9 days" },
  /* Great Plains */
  "38": { abbr: "ND", name: "North Dakota", delivery: "7–9 days" },
  "46": { abbr: "SD", name: "South Dakota", delivery: "7–9 days" },
  "31": { abbr: "NE", name: "Nebraska", delivery: "7–9 days" },
  "20": { abbr: "KS", name: "Kansas", delivery: "7–9 days" },
  "40": { abbr: "OK", name: "Oklahoma", delivery: "7–10 days" },
  "48": { abbr: "TX", name: "Texas", delivery: "7–10 days" },
  /* Mountain */
  "30": { abbr: "MT", name: "Montana", delivery: "8–10 days" },
  "56": { abbr: "WY", name: "Wyoming", delivery: "8–10 days" },
  "08": { abbr: "CO", name: "Colorado", delivery: "7–9 days" },
  "35": { abbr: "NM", name: "New Mexico", delivery: "8–10 days" },
  "16": { abbr: "ID", name: "Idaho", delivery: "8–10 days" },
  "49": { abbr: "UT", name: "Utah", delivery: "8–10 days" },
  "04": { abbr: "AZ", name: "Arizona", delivery: "8–10 days" },
  "32": { abbr: "NV", name: "Nevada", delivery: "8–10 days" },
  /* West Coast */
  "06": { abbr: "CA", name: "California", delivery: "8–10 days" },
  "41": { abbr: "OR", name: "Oregon", delivery: "8–10 days" },
  "53": { abbr: "WA", name: "Washington", delivery: "8–10 days" },
};

/* Core delivery region FIPS (northeast) — highlighted on map */
const CORE_FIPS = new Set(["25", "09", "44", "33", "50", "36", "23", "34", "42"]);

/* ── Helpers ── */

function getFillColor(fips: string, isHovered: boolean): string {
  const isCore = CORE_FIPS.has(fips);
  if (isHovered) return isCore ? "rgba(56, 84, 170, 0.3)" : "rgba(56, 84, 170, 0.15)";
  if (isCore) return "rgba(56, 84, 170, 0.1)";
  return "#f3f4f6";
}

function getStrokeColor(fips: string, isHovered: boolean): string {
  if (isHovered) return "#3854AA";
  if (CORE_FIPS.has(fips)) return "rgba(56, 84, 170, 0.2)";
  return "#e5e7eb";
}

/* ── Component ── */

function DeliveryMap() {
  const [hoveredFips, setHoveredFips] = useState<string | null>(null);
  const [hoveredCenter, setHoveredCenter] = useState<[number, number] | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hoveredInfo = hoveredFips ? ALL_STATES[hoveredFips] : null;

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white rounded-2xl border border-gray-200 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        width={800}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const fips = geo.id as string;
              const info = ALL_STATES[fips];
              if (!info) return null; // skip territories

              const isHovered = hoveredFips === fips;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setHoveredFips(fips);
                    const centroid = geoCentroid(geo);
                    setHoveredCenter(centroid as [number, number]);
                  }}
                  onMouseLeave={() => {
                    setHoveredFips(null);
                    setHoveredCenter(null);
                  }}
                  style={{
                    default: {
                      fill: getFillColor(fips, false),
                      stroke: getStrokeColor(fips, false),
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: "pointer",
                      transition: "fill 0.2s, stroke 0.2s, stroke-width 0.2s",
                    },
                    hover: {
                      fill: getFillColor(fips, true),
                      stroke: getStrokeColor(fips, true),
                      strokeWidth: 1.5,
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: getFillColor(fips, true),
                      stroke: getStrokeColor(fips, true),
                      strokeWidth: 1.5,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Dashed route line from HQ to hovered state centroid */}
        {hoveredCenter && (
          <Line
            from={HQ}
            to={hoveredCenter}
            stroke="#3854AA"
            strokeWidth={1.5}
            strokeDasharray="6 4"
            strokeLinecap="round"
            style={{ opacity: 0.5 }}
          />
        )}

        {/* HQ pulsing marker */}
        <Marker coordinates={HQ}>
          <circle r={5} fill="none" stroke="#3854AA" strokeWidth={1} opacity={0.3}>
            <animate attributeName="r" from="5" to="12" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r={3.5} fill="#3854AA" stroke="white" strokeWidth={1.5} />
          <rect x={-12} y={-18} width={24} height={12} rx={3} fill="#3854AA" />
          <text
            x={0} y={-10}
            textAnchor="middle" dominantBaseline="middle"
            style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: 7, fontWeight: 700, fill: "white" }}
          >
            HQ
          </text>
        </Marker>
      </ComposableMap>

      {/* Floating tooltip following cursor */}
      {hoveredInfo && tooltipPos && (
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: tooltipPos.x + 14, top: tooltipPos.y - 8 }}
        >
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-lg px-3.5 py-2 whitespace-nowrap">
            <p className="text-sm font-bold text-gray-900 leading-tight">{hoveredInfo.name}</p>
            <p className="text-xs font-semibold text-[#3854AA] leading-tight mt-0.5">
              Delivery: {hoveredInfo.delivery}
            </p>
          </div>
        </div>
      )}

      {/* Compact legend */}
      <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/60 rounded-b-2xl">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: "rgba(56, 84, 170, 0.1)", border: "1px solid rgba(56, 84, 170, 0.2)" }} />
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
