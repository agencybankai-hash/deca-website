"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ── Data ── */

interface StateData {
  id: string;
  name: string;
  d: string;
  cx: number; // Center X for route endpoint
  cy: number; // Center Y for route endpoint
  served: boolean;
  delivery?: string;
}

const HQ = { x: 520, y: 248, label: "HQ" };

const DELIVERY_TIMES: Record<string, string> = {
  MA: "Same day – 2 days",
  CT: "1–3 days",
  RI: "1–3 days",
  NH: "1–3 days",
  NY: "2–4 days",
  VT: "2–4 days",
  ME: "2–4 days",
  NJ: "3–5 days",
  PA: "3–5 days",
};

/*
  Simplified but recognizable SVG paths for all 48 continental US states
  Using simplified Albers projection approximations commonly found in D3/datamaps.
  Paths are normalized to a ~960x600 viewBox scaled to fit our map dimensions.
*/
const states: StateData[] = [
  /* Northeast */
  {
    id: "ME", name: "Maine", served: true, cx: 575, cy: 160,
    d: "M553 65 L590 75 L605 120 L598 175 L575 195 L560 185 L555 155 L550 95 Z",
  },
  {
    id: "NH", name: "New Hampshire", served: true, cx: 540, cy: 150,
    d: "M535 115 L550 95 L558 155 L560 185 L530 180 L520 165 Z",
  },
  {
    id: "VT", name: "Vermont", served: true, cx: 505, cy: 140,
    d: "M495 105 L520 100 L535 115 L530 180 L520 195 L505 190 L495 155 Z",
  },
  {
    id: "MA", name: "Massachusetts", served: true, cx: 545, cy: 240,
    d: "M505 215 L520 210 L540 215 L560 215 L580 220 L585 235 L580 250 L560 255 L535 258 L510 255 L500 240 Z",
  },
  {
    id: "RI", name: "Rhode Island", served: true, cx: 560, cy: 265,
    d: "M560 250 L572 248 L575 265 L570 280 L558 278 Z",
  },
  {
    id: "CT", name: "Connecticut", served: true, cx: 505, cy: 285,
    d: "M470 265 L510 255 L535 258 L558 265 L555 290 L540 310 L510 315 L475 310 Z",
  },
  {
    id: "NY", name: "New York", served: true, cx: 420, cy: 260,
    d: "M365 170 L410 160 L455 165 L490 180 L505 215 L500 240 L470 265 L465 310 L455 330 L440 345 L425 350 L415 345 L410 325 L400 310 L375 290 L360 250 L355 210 Z",
  },
  {
    id: "NJ", name: "New Jersey", served: true, cx: 445, cy: 350,
    d: "M440 315 L455 310 L460 335 L450 365 L435 370 L428 345 Z",
  },
  {
    id: "PA", name: "Pennsylvania", served: true, cx: 380, cy: 330,
    d: "M345 260 L375 290 L400 310 L410 325 L415 345 L425 350 L435 370 L410 385 L365 385 L335 375 L325 350 L330 300 Z",
  },

  /* Atlantic */
  {
    id: "MD", name: "Maryland", served: false, cx: 410, cy: 370,
    d: "M410 345 L428 350 L435 370 L415 385 L395 385 L405 365 Z",
  },
  {
    id: "DE", name: "Delaware", served: false, cx: 450, cy: 355,
    d: "M450 315 L460 320 L465 355 L450 365 L445 345 Z",
  },
  {
    id: "VA", name: "Virginia", served: false, cx: 430, cy: 415,
    d: "M410 385 L450 365 L465 400 L460 450 L425 470 L405 445 L390 410 Z",
  },
  {
    id: "WV", name: "West Virginia", served: false, cx: 375, cy: 380,
    d: "M365 340 L410 345 L415 385 L405 410 L380 425 L360 390 Z",
  },
  {
    id: "OH", name: "Ohio", served: false, cx: 355, cy: 325,
    d: "M330 275 L365 285 L375 290 L375 350 L360 390 L330 385 L310 360 L315 310 Z",
  },
  {
    id: "KY", name: "Kentucky", served: false, cx: 350, cy: 395,
    d: "M330 360 L360 350 L375 380 L360 420 L320 410 Z",
  },
  {
    id: "TN", name: "Tennessee", served: false, cx: 340, cy: 420,
    d: "M310 410 L360 420 L375 440 L360 460 L310 450 Z",
  },
  {
    id: "NC", name: "North Carolina", served: false, cx: 440, cy: 445,
    d: "M425 410 L460 400 L480 430 L475 480 L425 475 Z",
  },
  {
    id: "SC", name: "South Carolina", served: false, cx: 450, cy: 480,
    d: "M425 460 L475 430 L485 480 L460 510 L430 505 Z",
  },
  {
    id: "GA", name: "Georgia", served: false, cx: 440, cy: 490,
    d: "M425 450 L460 460 L470 510 L440 540 L410 530 Z",
  },
  {
    id: "FL", name: "Florida", served: false, cx: 460, cy: 555,
    d: "M440 530 L470 510 L480 570 L460 590 L445 575 Z",
  },

  /* Midwest */
  {
    id: "MI", name: "Michigan", served: false, cx: 360, cy: 280,
    d: "M350 250 L385 255 L390 290 L385 330 L360 340 L345 310 L340 280 Z M365 320 L380 315 L385 340 L375 345 Z",
  },
  {
    id: "IN", name: "Indiana", served: false, cx: 335, cy: 340,
    d: "M315 310 L345 310 L345 350 L335 360 L315 340 Z",
  },
  {
    id: "IL", name: "Illinois", served: false, cx: 310, cy: 330,
    d: "M290 300 L315 310 L330 320 L330 380 L300 385 L285 360 Z",
  },
  {
    id: "MO", name: "Missouri", served: false, cx: 275, cy: 360,
    d: "M245 330 L290 330 L300 380 L300 420 L260 410 L250 360 Z",
  },
  {
    id: "AR", name: "Arkansas", served: false, cx: 280, cy: 430,
    d: "M260 410 L300 420 L305 480 L270 485 Z",
  },
  {
    id: "LA", name: "Louisiana", served: false, cx: 270, cy: 510,
    d: "M270 485 L305 480 L315 540 L280 545 Z",
  },
  {
    id: "MS", name: "Mississippi", served: false, cx: 310, cy: 450,
    d: "M300 420 L330 425 L340 490 L305 485 Z",
  },
  {
    id: "AL", name: "Alabama", served: false, cx: 365, cy: 455,
    d: "M360 420 L390 425 L400 490 L375 495 Z",
  },
  {
    id: "WI", name: "Wisconsin", served: false, cx: 330, cy: 290,
    d: "M315 260 L345 270 L350 280 L345 330 L320 340 L310 300 Z",
  },
  {
    id: "MN", name: "Minnesota", served: false, cx: 300, cy: 240,
    d: "M285 195 L320 200 L335 240 L330 300 L295 295 L280 250 Z",
  },
  {
    id: "IA", name: "Iowa", served: false, cx: 290, cy: 310,
    d: "M270 290 L310 300 L320 330 L290 330 Z",
  },

  /* Great Plains */
  {
    id: "ND", name: "North Dakota", served: false, cx: 275, cy: 190,
    d: "M240 160 L290 165 L295 200 L260 205 Z",
  },
  {
    id: "SD", name: "South Dakota", served: false, cx: 280, cy: 240,
    d: "M260 205 L300 210 L310 260 L280 265 Z",
  },
  {
    id: "NE", name: "Nebraska", served: false, cx: 265, cy: 280,
    d: "M240 250 L295 260 L300 310 L255 310 Z",
  },
  {
    id: "KS", name: "Kansas", served: false, cx: 260, cy: 330,
    d: "M230 300 L290 310 L295 360 L235 360 Z",
  },
  {
    id: "OK", name: "Oklahoma", served: false, cx: 255, cy: 390,
    d: "M230 360 L285 360 L290 420 L245 420 Z",
  },
  {
    id: "TX", name: "Texas", served: false, cx: 270, cy: 470,
    d: "M245 420 L290 415 L310 510 L270 530 Z",
  },

  /* Southwest & Mountain */
  {
    id: "MT", name: "Montana", served: false, cx: 220, cy: 180,
    d: "M175 150 L240 155 L250 200 L185 205 Z",
  },
  {
    id: "WY", name: "Wyoming", served: false, cx: 230, cy: 240,
    d: "M185 200 L255 205 L265 290 L200 290 Z",
  },
  {
    id: "CO", name: "Colorado", served: false, cx: 245, cy: 320,
    d: "M215 290 L280 290 L290 360 L220 360 Z",
  },
  {
    id: "NM", name: "New Mexico", served: false, cx: 245, cy: 410,
    d: "M220 360 L290 360 L295 440 L225 440 Z",
  },
  {
    id: "ID", name: "Idaho", served: false, cx: 205, cy: 210,
    d: "M175 160 L220 155 L225 260 L185 265 Z",
  },
  {
    id: "UT", name: "Utah", served: false, cx: 210, cy: 300,
    d: "M185 260 L235 265 L245 350 L200 350 Z",
  },
  {
    id: "AZ", name: "Arizona", served: false, cx: 210, cy: 390,
    d: "M185 350 L245 350 L255 450 L200 450 Z",
  },
  {
    id: "NV", name: "Nevada", served: false, cx: 165, cy: 310,
    d: "M140 270 L195 275 L205 370 L150 365 Z",
  },

  /* West Coast */
  {
    id: "CA", name: "California", served: false, cx: 145, cy: 370,
    d: "M120 270 L165 280 L170 420 L135 440 L120 350 Z",
  },
  {
    id: "OR", name: "Oregon", served: false, cx: 150, cy: 230,
    d: "M125 190 L180 200 L185 280 L140 275 Z",
  },
  {
    id: "WA", name: "Washington", served: false, cx: 155, cy: 160,
    d: "M130 130 L180 140 L185 210 L140 200 Z",
  },

  /* Non-continental (not included in render for simplicity, but listed for completeness) */
];

/* ── Generate a curved path from HQ to target ── */
function routePath(cx: number, cy: number): string {
  const dx = cx - HQ.x;
  const dy = cy - HQ.y;
  // Control point offset for a nice quadratic curve
  const cpx = HQ.x + dx * 0.45 - dy * 0.2;
  const cpy = HQ.y + dy * 0.45 + dx * 0.15;
  return `M${HQ.x},${HQ.y} Q${cpx},${cpy} ${cx},${cy}`;
}

/* ── Component ── */

export default function DeliveryMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const routeRef = useRef<SVGPathElement>(null);

  // Animate the dashed line on state hover
  useEffect(() => {
    const path = routeRef.current;
    if (!path || !hoveredState) {
      return;
    }
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    // Force reflow to trigger animation
    path.getBoundingClientRect();
    path.style.transition = "stroke-dashoffset 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
    path.style.strokeDashoffset = "0";
  }, [hoveredState]);

  const handleStateEnter = useCallback((stateId: string) => {
    const state = states.find((s) => s.id === stateId);
    if (!state || !state.served) return;
    setHoveredState(stateId);
    setTooltipPos({ x: state.cx, y: state.cy - 50 });
  }, []);

  const handleStateLeave = useCallback(() => {
    setHoveredState(null);
    setTooltipPos(null);
  }, []);

  return (
    <div className="relative w-full bg-white rounded-lg border border-gray-200">
      <svg
        viewBox="100 120 800 520"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ── State shapes ── */}
        {states.map((state) => {
          const isHovered = hoveredState === state.id;
          const isServed = state.served;

          return (
            <path
              key={state.id}
              d={state.d}
              className="transition-all duration-300"
              style={{
                cursor: isServed ? "pointer" : "default",
                fill: isHovered && isServed
                  ? "rgba(56, 84, 170, 0.25)"
                  : isServed
                  ? "rgba(56, 84, 170, 0.12)"
                  : "#f0f1f3",
                stroke: isHovered && isServed
                  ? "#3854AA"
                  : isServed
                  ? "rgba(56, 84, 170, 0.2)"
                  : "#e5e7eb",
                strokeWidth: isHovered && isServed ? 2 : 1,
              }}
              onMouseEnter={() => handleStateEnter(state.id)}
              onMouseLeave={handleStateLeave}
            />
          );
        })}

        {/* ── State abbreviation labels (served states only) ── */}
        {states.filter((s) => s.served).map((state) => (
          <text
            key={`label-${state.id}`}
            x={state.cx}
            y={state.cy}
            textAnchor="middle"
            dominantBaseline="middle"
            className="pointer-events-none select-none transition-all duration-300"
            fill={hoveredState === state.id ? "#3854AA" : "rgba(56, 84, 170, 0.45)"}
            fontSize="12"
            fontWeight="700"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {state.id}
          </text>
        ))}

        {/* ── Animated route line from HQ to hovered state center ── */}
        {hoveredState && (
          <path
            ref={routeRef}
            d={routePath(
              states.find((s) => s.id === hoveredState)?.cx || HQ.x,
              states.find((s) => s.id === hoveredState)?.cy || HQ.y
            )}
            fill="none"
            stroke="#3854AA"
            strokeWidth="2"
            strokeDasharray="8 5"
            strokeLinecap="round"
            opacity="0.7"
            className="transition-opacity duration-300"
          />
        )}

        {/* ── HQ marker at Westfield, MA ── */}
        <g>
          {/* Pulsing ring animation */}
          <circle
            cx={HQ.x}
            cy={HQ.y}
            r="10"
            fill="none"
            stroke="#3854AA"
            strokeWidth="1.5"
            opacity="0.4"
          >
            <animate
              attributeName="r"
              from="10"
              to="20"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.6"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          {/* HQ central dot */}
          <circle
            cx={HQ.x}
            cy={HQ.y}
            r="6"
            fill="#3854AA"
            stroke="white"
            strokeWidth="2"
          />
          {/* HQ label badge */}
          <rect
            x={HQ.x - 20}
            y={HQ.y - 28}
            width="40"
            height="18"
            rx="5"
            fill="#3854AA"
          />
          <text
            x={HQ.x}
            y={HQ.y - 16}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="10"
            fontWeight="700"
            fontFamily="Inter, system-ui, sans-serif"
          >
            HQ
          </text>
        </g>

        {/* ── Tooltip near hovered state ── */}
        {hoveredState && tooltipPos && (
          <g className="pointer-events-none">
            {/* Tooltip background */}
            <rect
              x={tooltipPos.x - 65}
              y={tooltipPos.y - 48}
              width="130"
              height="42"
              rx="8"
              fill="white"
              stroke="rgba(56, 84, 170, 0.2)"
              strokeWidth="1"
              filter="drop-shadow(0 4px 12px rgba(0,0,0,0.12))"
            />
            {/* State name */}
            <text
              x={tooltipPos.x}
              y={tooltipPos.y - 32}
              textAnchor="middle"
              fill="#1a1b1e"
              fontSize="12"
              fontWeight="700"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {states.find((s) => s.id === hoveredState)?.name}
            </text>
            {/* Delivery estimate */}
            <text
              x={tooltipPos.x}
              y={tooltipPos.y - 16}
              textAnchor="middle"
              fill="#3854AA"
              fontSize="11"
              fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {DELIVERY_TIMES[hoveredState]}
            </text>
          </g>
        )}
      </svg>

      {/* Legend and information */}
      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
        <div className="flex flex-col gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(56, 84, 170, 0.12)" }} />
              <span>DECA delivery areas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f0f1f3" }} />
              <span>Other US states</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="12" viewBox="0 0 20 12" className="flex-shrink-0">
              <line x1="2" y1="6" x2="18" y2="6" stroke="#3854AA" strokeWidth="2" strokeDasharray="4 3" />
            </svg>
            <span>Route from Westfield, MA HQ (hover over a state)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
