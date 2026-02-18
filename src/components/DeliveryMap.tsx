"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ── Data ── */

interface City {
  name: string;
  state: string;
  x: number;
  y: number;
  delivery: string;
}

interface StateShape {
  id: string;
  name: string;
  d: string;
  served: boolean;
}

const HQ = { name: "Westfield, MA", x: 520, y: 248, label: "HQ" };

const cities: City[] = [
  // Massachusetts
  { name: "Boston", state: "MA", x: 575, y: 228, delivery: "1–2 days" },
  { name: "Springfield", state: "MA", x: 510, y: 252, delivery: "Same day" },
  { name: "Worcester", state: "MA", x: 545, y: 238, delivery: "1 day" },
  { name: "Cambridge", state: "MA", x: 570, y: 225, delivery: "1–2 days" },
  // Connecticut
  { name: "Hartford", state: "CT", x: 505, y: 278, delivery: "1–2 days" },
  { name: "New Haven", state: "CT", x: 485, y: 295, delivery: "2–3 days" },
  { name: "Stamford", state: "CT", x: 460, y: 305, delivery: "2–3 days" },
  // Rhode Island
  { name: "Providence", state: "RI", x: 560, y: 260, delivery: "1–2 days" },
  { name: "Newport", state: "RI", x: 568, y: 275, delivery: "1–2 days" },
  // New Hampshire
  { name: "Manchester", state: "NH", x: 540, y: 195, delivery: "2–3 days" },
  { name: "Nashua", state: "NH", x: 535, y: 210, delivery: "2 days" },
  // New York
  { name: "New York City", state: "NY", x: 440, y: 330, delivery: "3–4 days" },
  { name: "Albany", state: "NY", x: 470, y: 218, delivery: "2–3 days" },
  { name: "Long Island", state: "NY", x: 475, y: 340, delivery: "3–4 days" },
  // Vermont
  { name: "Burlington", state: "VT", x: 488, y: 140, delivery: "3–4 days" },
  // Maine
  { name: "Portland", state: "ME", x: 565, y: 168, delivery: "3–4 days" },
];

/* Simplified SVG paths for Northeast US states — approximate shapes */
const states: StateShape[] = [
  {
    id: "ME", name: "Maine", served: true,
    d: "M555 80 L590 90 L600 130 L590 175 L575 190 L560 180 L555 160 L545 140 L540 110 L545 95 Z",
  },
  {
    id: "NH", name: "New Hampshire", served: true,
    d: "M535 120 L545 95 L555 100 L555 160 L545 175 L530 180 L525 165 L530 140 Z",
  },
  {
    id: "VT", name: "Vermont", served: true,
    d: "M495 110 L520 105 L535 120 L530 140 L525 165 L520 175 L505 178 L495 160 L490 135 Z",
  },
  {
    id: "MA", name: "Massachusetts", served: true,
    d: "M505 220 L520 215 L530 218 L545 215 L560 220 L585 225 L590 235 L585 248 L575 255 L555 258 L530 260 L510 258 L500 250 L498 235 Z",
  },
  {
    id: "RI", name: "Rhode Island", served: true,
    d: "M555 258 L568 255 L575 265 L572 280 L560 282 L553 270 Z",
  },
  {
    id: "CT", name: "Connecticut", served: true,
    d: "M470 270 L510 258 L530 262 L553 270 L550 290 L540 305 L510 310 L480 310 L465 300 L465 285 Z",
  },
  {
    id: "NY", name: "New York", served: true,
    d: "M370 180 L420 170 L460 175 L490 190 L495 210 L505 220 L498 235 L500 250 L470 270 L465 285 L465 310 L455 320 L445 340 L430 350 L425 340 L420 320 L410 310 L390 310 L370 290 L360 260 L360 220 Z",
  },
  {
    id: "NJ", name: "New Jersey", served: true,
    d: "M440 310 L455 320 L460 340 L455 360 L448 375 L440 380 L430 375 L425 360 L428 340 L430 325 Z",
  },
  {
    id: "PA", name: "Pennsylvania", served: true,
    d: "M350 270 L360 260 L370 290 L390 310 L410 310 L420 320 L430 325 L428 340 L425 360 L410 370 L370 370 L340 360 L330 340 L330 300 L340 280 Z",
  },
  {
    id: "MD", name: "Maryland", served: false,
    d: "M340 370 L370 370 L410 370 L425 375 L430 390 L420 400 L395 400 L370 395 L350 390 L335 385 Z",
  },
  {
    id: "DE", name: "Delaware", served: false,
    d: "M430 355 L440 350 L445 370 L440 385 L430 390 L428 375 Z",
  },
];

/* ── Generate a curved path from HQ to target ── */
function routePath(tx: number, ty: number): string {
  const dx = tx - HQ.x;
  const dy = ty - HQ.y;
  // Control point offset for a nice curve
  const cx = HQ.x + dx * 0.5 - dy * 0.25;
  const cy = HQ.y + dy * 0.5 + dx * 0.15;
  return `M${HQ.x},${HQ.y} Q${cx},${cy} ${tx},${ty}`;
}

/* ── Component ── */

export default function DeliveryMap() {
  const [hovered, setHovered] = useState<City | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const routeRef = useRef<SVGPathElement>(null);
  const [routeDrawn, setRouteDrawn] = useState(false);

  // Animate the dashed line
  useEffect(() => {
    const path = routeRef.current;
    if (!path || !hovered) {
      setRouteDrawn(false);
      return;
    }
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    // Force reflow
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    path.getBoundingClientRect();
    path.style.transition = "stroke-dashoffset 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
    path.style.strokeDashoffset = "0";
    setRouteDrawn(true);
  }, [hovered]);

  const handleCityEnter = useCallback((city: City) => {
    setHovered(city);
    setHoveredState(city.state);
  }, []);

  const handleCityLeave = useCallback(() => {
    setHovered(null);
    setHoveredState(null);
  }, []);

  const handleStateEnter = useCallback((stateId: string) => {
    if (!states.find((s) => s.id === stateId)?.served) return;
    setHoveredState(stateId);
    // Find first city in this state for route
    const city = cities.find((c) => c.state === stateId);
    if (city) setHovered(city);
  }, []);

  const handleStateLeave = useCallback(() => {
    setHoveredState(null);
    setHovered(null);
  }, []);

  return (
    <div className="relative w-full">
      <svg
        viewBox="300 60 330 370"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── State shapes ── */}
        {states.map((s) => {
          const isHovered = hoveredState === s.id;
          const isServed = s.served;
          return (
            <path
              key={s.id}
              d={s.d}
              className="transition-all duration-300 cursor-pointer"
              fill={
                isHovered && isServed
                  ? "rgba(56, 84, 170, 0.25)"
                  : isServed
                  ? "rgba(56, 84, 170, 0.10)"
                  : "rgba(0,0,0,0.04)"
              }
              stroke={
                isHovered && isServed
                  ? "#3854AA"
                  : isServed
                  ? "rgba(56, 84, 170, 0.35)"
                  : "rgba(0,0,0,0.10)"
              }
              strokeWidth={isHovered ? 1.8 : 1}
              onMouseEnter={() => handleStateEnter(s.id)}
              onMouseLeave={handleStateLeave}
            />
          );
        })}

        {/* ── State labels ── */}
        {states.filter((s) => s.served).map((s) => {
          // Approximate center for label
          const coords: Record<string, [number, number]> = {
            ME: [570, 140], NH: [540, 150], VT: [507, 145], MA: [545, 240],
            RI: [564, 268], CT: [505, 288], NY: [400, 250], NJ: [445, 355], PA: [370, 330],
          };
          const [lx, ly] = coords[s.id] || [0, 0];
          return (
            <text
              key={`label-${s.id}`}
              x={lx}
              y={ly}
              textAnchor="middle"
              className="pointer-events-none select-none"
              fill={hoveredState === s.id ? "#3854AA" : "rgba(56, 84, 170, 0.45)"}
              fontSize="10"
              fontWeight="700"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {s.id}
            </text>
          );
        })}

        {/* ── Animated route line ── */}
        {hovered && (
          <path
            ref={routeRef}
            d={routePath(hovered.x, hovered.y)}
            fill="none"
            stroke="#3854AA"
            strokeWidth="2"
            strokeDasharray="6 4"
            strokeLinecap="round"
            opacity={routeDrawn ? 0.7 : 0}
          />
        )}

        {/* ── City dots ── */}
        {cities.map((city) => {
          const isActive = hovered?.name === city.name;
          return (
            <g
              key={city.name}
              onMouseEnter={() => handleCityEnter(city)}
              onMouseLeave={handleCityLeave}
              className="cursor-pointer"
            >
              {/* Hover hit area */}
              <circle cx={city.x} cy={city.y} r="10" fill="transparent" />
              {/* Outer ring on hover */}
              <circle
                cx={city.x}
                cy={city.y}
                r={isActive ? 8 : 0}
                fill="rgba(56, 84, 170, 0.10)"
                className="transition-all duration-300"
              />
              {/* Dot */}
              <circle
                cx={city.x}
                cy={city.y}
                r={isActive ? 4.5 : 3}
                fill={isActive ? "#3854AA" : "#6b89cf"}
                stroke="white"
                strokeWidth="1.5"
                className="transition-all duration-200"
              />
            </g>
          );
        })}

        {/* ── HQ marker ── */}
        <g>
          {/* Pulse ring */}
          <circle cx={HQ.x} cy={HQ.y} r="12" fill="none" stroke="#3854AA" strokeWidth="1.5" opacity="0.3">
            <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          {/* HQ dot */}
          <circle cx={HQ.x} cy={HQ.y} r="6" fill="#3854AA" stroke="white" strokeWidth="2" />
          {/* HQ label */}
          <rect x={HQ.x - 18} y={HQ.y - 25} width="36" height="16" rx="4" fill="#3854AA" />
          <text
            x={HQ.x}
            y={HQ.y - 14}
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="700"
            fontFamily="Inter, system-ui, sans-serif"
          >
            HQ
          </text>
        </g>

        {/* ── Tooltip ── */}
        {hovered && (
          <g className="pointer-events-none">
            <rect
              x={hovered.x - 55}
              y={hovered.y - 48}
              width="110"
              height="36"
              rx="8"
              fill="white"
              stroke="rgba(56, 84, 170, 0.15)"
              strokeWidth="1"
              filter="drop-shadow(0 2px 8px rgba(0,0,0,0.10))"
            />
            <text
              x={hovered.x}
              y={hovered.y - 33}
              textAnchor="middle"
              fill="#1a1b1e"
              fontSize="9"
              fontWeight="700"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {hovered.name}
            </text>
            <text
              x={hovered.x}
              y={hovered.y - 20}
              textAnchor="middle"
              fill="#3854AA"
              fontSize="8"
              fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {hovered.delivery} from HQ
            </text>
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-3 justify-center text-xs text-text-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-brand inline-block" />
          Delivery area
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 border-t-2 border-dashed border-brand/50 inline-block" />
          Route from HQ
        </span>
      </div>
    </div>
  );
}
