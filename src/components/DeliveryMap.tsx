"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
  Annotation,
} from "react-simple-maps";

/* ── Data ── */

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

/* Westfield, MA – DECA HQ coordinates */
const HQ: [number, number] = [-72.75, 42.12];

interface ServedState {
  id: string;
  name: string;
  delivery: string;
}

const SERVED_STATES: Record<string, ServedState> = {
  "25": { id: "MA", name: "Massachusetts", delivery: "Same day – 2 days" },
  "09": { id: "CT", name: "Connecticut", delivery: "1–3 days" },
  "44": { id: "RI", name: "Rhode Island", delivery: "1–3 days" },
  "33": { id: "NH", name: "New Hampshire", delivery: "1–3 days" },
  "36": { id: "NY", name: "New York", delivery: "2–4 days" },
  "50": { id: "VT", name: "Vermont", delivery: "2–4 days" },
  "23": { id: "ME", name: "Maine", delivery: "2–4 days" },
  "34": { id: "NJ", name: "New Jersey", delivery: "3–5 days" },
  "42": { id: "PA", name: "Pennsylvania", delivery: "3–5 days" },
};

/* Approximate centroid coordinates [lon, lat] for served states */
const STATE_CENTERS: Record<string, [number, number]> = {
  "25": [-71.8, 42.3],
  "09": [-72.7, 41.6],
  "44": [-71.5, 41.7],
  "33": [-71.5, 43.7],
  "36": [-75.5, 43.0],
  "50": [-72.6, 44.0],
  "23": [-69.0, 45.3],
  "34": [-74.7, 40.2],
  "42": [-77.8, 41.0],
};

/* ── Component ── */

function DeliveryMap() {
  const [hoveredFips, setHoveredFips] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hoveredServed = hoveredFips ? SERVED_STATES[hoveredFips] : null;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

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
              const fips = geo.id;
              const isServed = fips in SERVED_STATES;
              const isHovered = hoveredFips === fips;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    if (isServed) setHoveredFips(fips);
                  }}
                  onMouseLeave={() => setHoveredFips(null)}
                  style={{
                    default: {
                      fill: isServed ? "rgba(56, 84, 170, 0.12)" : "#f0f1f3",
                      stroke: isServed ? "rgba(56, 84, 170, 0.25)" : "#e5e7eb",
                      strokeWidth: 0.6,
                      outline: "none",
                      cursor: isServed ? "pointer" : "default",
                    },
                    hover: {
                      fill: isServed ? "rgba(56, 84, 170, 0.25)" : "#f0f1f3",
                      stroke: isServed ? "#3854AA" : "#e5e7eb",
                      strokeWidth: isServed ? 1.8 : 0.6,
                      outline: "none",
                      cursor: isServed ? "pointer" : "default",
                    },
                    pressed: {
                      fill: isServed ? "rgba(56, 84, 170, 0.3)" : "#f0f1f3",
                      stroke: isServed ? "#3854AA" : "#e5e7eb",
                      strokeWidth: isServed ? 1.8 : 0.6,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Animated dashed route from HQ to hovered state center */}
        {hoveredFips && STATE_CENTERS[hoveredFips] && (
          <Line
            from={HQ}
            to={STATE_CENTERS[hoveredFips]}
            stroke="#3854AA"
            strokeWidth={2}
            strokeDasharray="6 4"
            strokeLinecap="round"
            style={{ opacity: 0.6 }}
          />
        )}

        {/* State abbreviation labels for served states */}
        {Object.entries(SERVED_STATES).map(([fips, state]) => (
          <Marker key={fips} coordinates={STATE_CENTERS[fips]}>
            <text
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                fill: hoveredFips === fips ? "#3854AA" : "rgba(56, 84, 170, 0.5)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {state.id}
            </text>
          </Marker>
        ))}

        {/* HQ marker */}
        <Marker coordinates={HQ}>
          {/* Pulsing ring */}
          <circle r={6} fill="none" stroke="#3854AA" strokeWidth={1.2} opacity={0.3}>
            <animate attributeName="r" from="6" to="14" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Dot */}
          <circle r={4} fill="#3854AA" stroke="white" strokeWidth={1.5} />
          {/* Label */}
          <rect x={-14} y={-20} width={28} height={14} rx={4} fill="#3854AA" />
          <text
            x={0}
            y={-11}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 8,
              fontWeight: 700,
              fill: "white",
            }}
          >
            HQ
          </text>
        </Marker>
      </ComposableMap>

      {/* Tooltip */}
      {hoveredServed && tooltipPos && (
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            left: tooltipPos.x + 16,
            top: tooltipPos.y - 10,
          }}
        >
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg px-4 py-2.5 whitespace-nowrap">
            <p className="text-sm font-bold text-gray-900">{hoveredServed.name}</p>
            <p className="text-xs font-semibold text-[#3854AA]">{hoveredServed.delivery}</p>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="px-5 py-3 border-t border-gray-200 bg-gray-50/80 rounded-b-2xl">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "rgba(56, 84, 170, 0.12)", border: "1px solid rgba(56, 84, 170, 0.25)" }} />
            <span>DECA delivery areas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#f0f1f3", border: "1px solid #e5e7eb" }} />
            <span>Other US states</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="10" viewBox="0 0 20 10" className="flex-shrink-0">
              <line x1="2" y1="5" x2="18" y2="5" stroke="#3854AA" strokeWidth="2" strokeDasharray="4 3" />
            </svg>
            <span>Route from Westfield, MA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(DeliveryMap);
