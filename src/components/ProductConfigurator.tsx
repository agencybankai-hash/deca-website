"use client";
import { useState } from "react";
import Link from "next/link";

/* ───────────────────────── Types ───────────────────────── */
interface Option {
  id: string;
  label: string;
  desc?: string;
  benefit?: string;     // human-friendly "what this gives you"
  color?: string;       // for color swatches
  icon?: string;        // emoji or short label
  tag?: string;         // e.g. "Most Popular"
  specs?: string;       // e.g. "U-Factor 0.25"
}

interface Step {
  id: string;
  title: string;
  options: Option[];
  type?: "card" | "swatch" | "toggle";
}

interface ConfiguratorProps {
  title: string;
  subtitle: string;
  steps: Step[];
  svgPreview: (selections: Record<string, string>) => React.ReactNode;
  productType: "window" | "sliding-door" | "entry-door" | "french-door";
}

/* ──────────────── SVG Preview Helpers ──────────────── */

function WindowSVG({ selections }: { selections: Record<string, string> }) {
  const frameColor = selections.color === "anthracite" ? "#3C3C3C"
    : selections.color === "black" ? "#1A1A1A"
    : selections.color === "golden-oak" ? "#B8860B"
    : selections.color === "dark-brown" ? "#4A2E1C"
    : selections.color === "cream" ? "#F5F0E1"
    : "#FFFFFF";

  const glassColor = selections.glass === "triple" ? "#d0e8ff"
    : selections.glass === "solar" ? "#b8d4f0"
    : "#deeeff";

  const isDouble = selections.type === "double-casement" || selections.type === "triple-casement";
  const isTriple = selections.type === "triple-casement";
  const isFixed = selections.type === "fixed";
  const hasScreen = selections.screen === "flexscreen";

  return (
    <svg viewBox="0 0 280 320" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Outer frame */}
      <rect x="20" y="20" width="240" height="280" rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>

      {isFixed ? (
        /* Fixed window — single glass pane */
        <rect x="32" y="32" width="216" height="256" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
      ) : isTriple ? (
        /* Triple casement */
        <>
          <rect x="32" y="32" width="68" height="256" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          <rect x="106" y="32" width="68" height="256" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          <rect x="180" y="32" width="68" height="256" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          {/* Handles */}
          <rect x="95" y="155" width="4" height="14" rx="2" fill="#999"/>
          <rect x="169" y="155" width="4" height="14" rx="2" fill="#999"/>
          <rect x="243" y="155" width="4" height="14" rx="2" fill="#999"/>
          {/* Tilt arrows */}
          <path d="M66 46 L56 56 L76 56 Z" fill="none" stroke="#7799bb" strokeWidth="0.8" opacity="0.6"/>
          <path d="M140 46 L130 56 L150 56 Z" fill="none" stroke="#7799bb" strokeWidth="0.8" opacity="0.6"/>
          <path d="M214 46 L204 56 L224 56 Z" fill="none" stroke="#7799bb" strokeWidth="0.8" opacity="0.6"/>
        </>
      ) : isDouble ? (
        /* Double casement */
        <>
          <rect x="32" y="32" width="104" height="256" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          <rect x="144" y="32" width="104" height="256" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          {/* Handles */}
          <rect x="131" y="155" width="4" height="14" rx="2" fill="#999"/>
          <rect x="243" y="155" width="4" height="14" rx="2" fill="#999"/>
          {/* Tilt arrows */}
          <path d="M84 46 L74 56 L94 56 Z" fill="none" stroke="#7799bb" strokeWidth="0.8" opacity="0.6"/>
          <path d="M196 46 L186 56 L206 56 Z" fill="none" stroke="#7799bb" strokeWidth="0.8" opacity="0.6"/>
        </>
      ) : (
        /* Single casement */
        <>
          <rect x="32" y="32" width="216" height="256" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          {/* Handle */}
          <rect x="243" y="155" width="4" height="14" rx="2" fill="#999"/>
          {/* Tilt arrow */}
          <path d="M140 46 L130 56 L150 56 Z" fill="none" stroke="#7799bb" strokeWidth="0.8" opacity="0.6"/>
        </>
      )}

      {/* FlexScreen overlay */}
      {hasScreen && (
        <g opacity="0.15">
          {Array.from({ length: 28 }).map((_, i) => (
            <line key={`h${i}`} x1="32" y1={32 + i * 9.5} x2="248" y2={32 + i * 9.5} stroke="#444" strokeWidth="0.3"/>
          ))}
          {Array.from({ length: 22 }).map((_, i) => (
            <line key={`v${i}`} x1={32 + i * 10} y1="32" x2={32 + i * 10} y2="288" stroke="#444" strokeWidth="0.3"/>
          ))}
        </g>
      )}

      {/* Label */}
      <text x="140" y="310" textAnchor="middle" fontSize="8" fill="#999" fontFamily="system-ui">
        {selections.type === "fixed" ? "Fixed" : selections.type === "double-casement" ? "Double Tilt & Turn" : selections.type === "triple-casement" ? "Triple Tilt & Turn" : "Single Tilt & Turn"}
      </text>
    </svg>
  );
}

function SlidingDoorSVG({ selections }: { selections: Record<string, string> }) {
  const frameColor = selections.color === "anthracite" ? "#3C3C3C"
    : selections.color === "black" ? "#1A1A1A"
    : selections.color === "dark-brown" ? "#4A2E1C"
    : "#FFFFFF";

  const glassColor = selections.glass === "triple" ? "#d0e8ff" : "#deeeff";
  const panels = selections.system === "multi-slide" ? 4 : selections.system === "lift-slide" ? 3 : 2;
  const hasScreen = selections.screen === "plisse";

  return (
    <svg viewBox="0 0 360 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Outer frame */}
      <rect x="10" y="10" width="340" height="250" rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
      {/* Track line */}
      <line x1="10" y1="252" x2="350" y2="252" stroke="#777" strokeWidth="2"/>

      {/* Panels */}
      {Array.from({ length: panels }).map((_, i) => {
        const panelW = (320 - (panels - 1) * 6) / panels;
        const x = 20 + i * (panelW + 6);
        return (
          <g key={i}>
            <rect x={x} y="20" width={panelW} height="224" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
            {/* Sliding direction arrow */}
            {i > 0 && (
              <path d={`M${x + panelW/2 - 10} ${135} L${x + panelW/2 + 10} ${135}`} stroke="#7799bb" strokeWidth="1" opacity="0.5" markerEnd="url(#arrowhead)"/>
            )}
          </g>
        );
      })}

      {/* Plissé screen indicator */}
      {hasScreen && (
        <g opacity="0.2">
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={i} x1={20 + i * 13} y1="20" x2={20 + i * 13} y2="244" stroke="#444" strokeWidth="0.5" strokeDasharray="2,3"/>
          ))}
        </g>
      )}

      {/* Arrow marker */}
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#7799bb" opacity="0.5"/>
        </marker>
      </defs>

      {/* Label */}
      <text x="180" y="272" textAnchor="middle" fontSize="8" fill="#999" fontFamily="system-ui">
        {selections.system === "lift-slide" ? "Lift & Slide" : selections.system === "smoovio" ? "SMOOVIO" : selections.system === "multi-slide" ? "Multi-Slide" : "PSk Parallel"} — {panels} panels
      </text>
    </svg>
  );
}

function EntryDoorSVG({ selections }: { selections: Record<string, string> }) {
  const frameColor = selections.color === "anthracite" ? "#3C3C3C"
    : selections.color === "black" ? "#1A1A1A"
    : selections.color === "red" ? "#8B2500"
    : selections.color === "dark-brown" ? "#4A2E1C"
    : selections.color === "golden-oak" ? "#B8860B"
    : "#FFFFFF";

  const hasSidelights = selections.config === "with-sidelights";
  const hasTransom = selections.config === "with-transom" || selections.config === "full-surround";
  const hasSides = selections.config === "with-sidelights" || selections.config === "full-surround";
  const glassStyle = selections.glass;

  return (
    <svg viewBox="0 0 280 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Transom */}
      {hasTransom && (
        <>
          <rect x={hasSides ? "40" : "60"} y="10" width={hasSides ? "200" : "160"} height="50" rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
          <rect x={hasSides ? "48" : "68"} y="18" width={hasSides ? "184" : "144"} height="34" rx="1" fill="#deeeff" stroke="#aac" strokeWidth="0.5"/>
        </>
      )}

      {/* Sidelights */}
      {hasSides && (
        <>
          <rect x="40" y={hasTransom ? "64" : "10"} width="36" height={hasTransom ? "276" : "330"} rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
          <rect x="48" y={hasTransom ? "72" : "18"} width="20" height={hasTransom ? "260" : "314"} rx="1" fill={glassStyle === "frosted" ? "#e8eef4" : "#deeeff"} stroke="#aac" strokeWidth="0.5"/>

          <rect x="204" y={hasTransom ? "64" : "10"} width="36" height={hasTransom ? "276" : "330"} rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
          <rect x="212" y={hasTransom ? "72" : "18"} width="20" height={hasTransom ? "260" : "314"} rx="1" fill={glassStyle === "frosted" ? "#e8eef4" : "#deeeff"} stroke="#aac" strokeWidth="0.5"/>
        </>
      )}

      {/* Main door */}
      <rect
        x={hasSides ? "80" : "60"}
        y={hasTransom ? "64" : "10"}
        width={hasSides ? "120" : "160"}
        height={hasTransom ? "276" : "330"}
        rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"
      />

      {/* Door glass panel */}
      {glassStyle !== "solid" && (
        <rect
          x={hasSides ? "92" : "76"}
          y={hasTransom ? "80" : "30"}
          width={hasSides ? "96" : "128"}
          height={hasTransom ? "120" : "140"}
          rx="2"
          fill={glassStyle === "frosted" ? "#e8eef4" : glassStyle === "decorative" ? "#d4dff0" : "#deeeff"}
          stroke="#aac" strokeWidth="0.5"
        />
      )}

      {/* Decorative glass pattern */}
      {glassStyle === "decorative" && (
        <g opacity="0.3">
          <line x1={hasSides ? "140" : "140"} y1={hasTransom ? "80" : "30"} x2={hasSides ? "140" : "140"} y2={hasTransom ? "200" : "170"} stroke="#7799bb" strokeWidth="1"/>
          <line x1={hasSides ? "92" : "76"} y1={hasTransom ? "140" : "100"} x2={hasSides ? "188" : "204"} y2={hasTransom ? "140" : "100"} stroke="#7799bb" strokeWidth="1"/>
        </g>
      )}

      {/* Door handle */}
      <circle
        cx={hasSides ? "182" : "198"}
        cy={hasTransom ? "220" : "190"}
        r="5" fill="none" stroke="#999" strokeWidth="1.5"
      />
      <circle
        cx={hasSides ? "182" : "198"}
        cy={hasTransom ? "220" : "190"}
        r="1.5" fill="#999"
      />

      {/* Lock points */}
      {[0.2, 0.35, 0.5, 0.65, 0.8].map((pct, i) => {
        const doorH = hasTransom ? 276 : 330;
        const doorY = hasTransom ? 64 : 10;
        const y = doorY + doorH * pct;
        const x = hasSides ? 80 : 60;
        return (
          <g key={i} opacity="0.4">
            <rect x={x + 2} y={y - 2} width="6" height="4" rx="1" fill="#c9a020"/>
          </g>
        );
      })}

      {/* Label */}
      <text x="140" y="354" textAnchor="middle" fontSize="8" fill="#999" fontFamily="system-ui">
        {selections.config === "full-surround" ? "Full Surround" : selections.config === "with-sidelights" ? "With Sidelights" : selections.config === "with-transom" ? "With Transom" : "Single Door"}
        {glassStyle !== "solid" ? ` — ${glassStyle} glass` : " — Solid Panel"}
      </text>
    </svg>
  );
}

/* ──────────────── Main Configurator Component ──────────────── */

export function WindowConfigurator() {
  const steps: Step[] = [
    {
      id: "profile",
      title: "Profile System",
      type: "card",
      options: [
        { id: "linear", label: "GEALAN-LINEAR", desc: "Modern angular design, aluminum-look aesthetic", benefit: "Sleek, modern look that matches contemporary homes — thinnest frames for maximum glass area", tag: "Premium", specs: "U-Factor 0.14–0.25" },
        { id: "s8000", label: "GEALAN S 8000", desc: "Classic 5–6 chamber system, 3\" depth", benefit: "Proven reliability at a great price — perfect balance of performance and value", tag: "Popular", specs: "U-Factor 0.16–0.27" },
      ],
    },
    {
      id: "type",
      title: "Window Type",
      type: "card",
      options: [
        { id: "single-casement", label: "Single Tilt & Turn", desc: "One operable sash", benefit: "Simple and efficient — opens two ways for easy cleaning and safe ventilation" },
        { id: "double-casement", label: "Double Tilt & Turn", desc: "Two operable sashes", benefit: "Twice the airflow — both sides open independently for flexible ventilation", tag: "Most Popular" },
        { id: "triple-casement", label: "Triple Casement", desc: "Three-sash configuration", benefit: "Ideal for wide openings — fills large spaces with light and air" },
        { id: "fixed", label: "Fixed Window", desc: "Maximum light, no opening", benefit: "Unobstructed views with best insulation — no moving parts, no drafts" },
      ],
    },
    {
      id: "glass",
      title: "Glazing",
      type: "card",
      options: [
        { id: "double", label: "Double Glazing", desc: "IGU 0.8\"–1.2\"", benefit: "Solid energy savings over single-pane — keeps your home comfortable year-round", specs: "U-Factor 0.25" },
        { id: "triple", label: "Triple Glazing", desc: "IGU 1.2\"–2.0\"", benefit: "Maximum insulation — noticeably warmer in winter, quieter from outside noise", specs: "U-Factor 0.14", tag: "Best Performance" },
        { id: "solar", label: "Solar Control", desc: "Triple + solar coating", benefit: "Blocks summer heat while keeping winter warmth — lower AC bills in hot climates", specs: "Reduces heat gain 40%" },
      ],
    },
    {
      id: "color",
      title: "Frame Color",
      type: "swatch",
      options: [
        { id: "white", label: "White", color: "#FFFFFF" },
        { id: "cream", label: "Cream", color: "#F5F0E1" },
        { id: "anthracite", label: "Anthracite", color: "#3C3C3C" },
        { id: "black", label: "Black", color: "#1A1A1A" },
        { id: "golden-oak", label: "Golden Oak", color: "#B8860B" },
        { id: "dark-brown", label: "Dark Brown", color: "#4A2E1C" },
      ],
    },
    {
      id: "screen",
      title: "Insect Screen",
      type: "card",
      options: [
        { id: "none", label: "No Screen", desc: "Add later if needed", benefit: "You can always add one later — no commitment needed now" },
        { id: "flexscreen", label: "FlexScreen", desc: "Virtually invisible, spring-steel frame, no hardware", benefit: "Enjoy fresh air bug-free — pops in and out in seconds, barely visible from outside", tag: "Recommended" },
      ],
    },
  ];

  return (
    <Configurator
      title="Configure Your Window"
      subtitle="Select options and see a live preview. Submit for a free custom quote."
      steps={steps}
      svgPreview={(sel) => <WindowSVG selections={sel} />}
      productType="window"
    />
  );
}

export function SlidingDoorConfigurator() {
  const steps: Step[] = [
    {
      id: "system",
      title: "Sliding System",
      type: "card",
      options: [
        { id: "psk", label: "PSk Parallel Slide", desc: "Space-efficient, standard openings", benefit: "Slides parallel to the wall — saves space in smaller rooms while letting in lots of light", specs: "U-Factor 0.18" },
        { id: "lift-slide", label: "GEALAN S 9000 Lift & Slide", desc: "Openings up to 21 ft, threshold-free", benefit: "Walk-through without a threshold — massive openings connect your indoor and outdoor spaces", tag: "Premium", specs: "U-Factor 0.15–0.23" },
        { id: "smoovio", label: "GEALAN-SMOOVIO", desc: "Next-gen sliding, impermeable closure", benefit: "Glides effortlessly with one finger — sealed so tight, not a whisper of air gets through", specs: "U-Factor 0.16–0.23" },
        { id: "multi-slide", label: "GEALAN Multi-Slide", desc: "2–6 panel configurations", benefit: "Open up an entire wall — panels stack neatly to one side for unobstructed views", specs: "U-Factor 0.27–0.35" },
      ],
    },
    {
      id: "glass",
      title: "Glazing",
      type: "card",
      options: [
        { id: "double", label: "Double Glazing", benefit: "Good insulation for most climates — keeps your home warm without breaking the budget", specs: "Standard performance" },
        { id: "triple", label: "Triple Glazing", benefit: "Noticeably quieter and warmer — you'll feel the difference on cold mornings", specs: "Best thermal & acoustic", tag: "Recommended" },
      ],
    },
    {
      id: "color",
      title: "Frame Color",
      type: "swatch",
      options: [
        { id: "white", label: "White", color: "#FFFFFF" },
        { id: "anthracite", label: "Anthracite", color: "#3C3C3C" },
        { id: "black", label: "Black", color: "#1A1A1A" },
        { id: "dark-brown", label: "Dark Brown", color: "#4A2E1C" },
      ],
    },
    {
      id: "screen",
      title: "Insect Screen",
      type: "card",
      options: [
        { id: "none", label: "No Screen", desc: "Add later if needed", benefit: "Skip for now — you can always add one later" },
        { id: "plisse", label: "Plissé Screen", desc: "Retractable pleated mesh, ideal for large openings", benefit: "Folds away when you don't need it — keeps bugs out without blocking your view", tag: "Recommended" },
      ],
    },
  ];

  return (
    <Configurator
      title="Configure Your Sliding Door"
      subtitle="Choose your system and options. Get a free custom quote."
      steps={steps}
      svgPreview={(sel) => <SlidingDoorSVG selections={sel} />}
      productType="sliding-door"
    />
  );
}

export function EntryDoorConfigurator() {
  const steps: Step[] = [
    {
      id: "material",
      title: "Material",
      type: "card",
      options: [
        { id: "upvc", label: "uPVC", desc: "Best thermal insulation, low maintenance", benefit: "Never needs painting — stays looking great for decades with zero upkeep", tag: "Popular" },
        { id: "aluminum", label: "Aluminum", desc: "Slim profiles, modern aesthetic", benefit: "Ultra-thin frames for a clean, contemporary look — strong yet lightweight" },
        { id: "composite", label: "Composite", desc: "Strongest, premium look & feel", benefit: "Looks and feels like real wood but won't warp, crack, or rot — the premium choice", tag: "Premium" },
      ],
    },
    {
      id: "config",
      title: "Configuration",
      type: "card",
      options: [
        { id: "single", label: "Single Door", desc: "Standard entry", benefit: "Clean and simple — a solid, secure entrance that fits any opening" },
        { id: "with-sidelights", label: "With Sidelights", desc: "Glass panels on both sides", benefit: "Brightens your entryway — natural light floods in even when the door is closed", tag: "Popular" },
        { id: "with-transom", label: "With Transom", desc: "Glass panel above the door", benefit: "Makes your entrance feel taller and grander — extra light from above" },
        { id: "full-surround", label: "Full Surround", desc: "Sidelights + transom for maximum light", benefit: "The wow factor — your entrance becomes a bright, welcoming focal point" },
      ],
    },
    {
      id: "glass",
      title: "Glass Style",
      type: "card",
      options: [
        { id: "solid", label: "Solid Panel", desc: "Maximum privacy & security", benefit: "Complete privacy — no one sees in, and it's the most secure option" },
        { id: "clear", label: "Clear Glass", desc: "Tempered safety glass", benefit: "See who's at the door before opening — tempered glass for safety" },
        { id: "frosted", label: "Frosted Glass", desc: "Light with privacy", benefit: "Best of both worlds — lets daylight in while keeping your privacy" },
        { id: "decorative", label: "Decorative Glass", desc: "Architectural patterns", benefit: "Adds character and curb appeal — unique patterns make your home stand out" },
      ],
    },
    {
      id: "color",
      title: "Door Color",
      type: "swatch",
      options: [
        { id: "white", label: "White", color: "#FFFFFF" },
        { id: "anthracite", label: "Anthracite", color: "#3C3C3C" },
        { id: "black", label: "Black", color: "#1A1A1A" },
        { id: "red", label: "Heritage Red", color: "#8B2500" },
        { id: "golden-oak", label: "Golden Oak", color: "#B8860B" },
        { id: "dark-brown", label: "Dark Brown", color: "#4A2E1C" },
      ],
    },
    {
      id: "security",
      title: "Security Level",
      type: "card",
      options: [
        { id: "rc2", label: "RC2", desc: "3–5 min attack resistance, 5-point locking", benefit: "European-certified protection — withstands break-in attempts with 5 locking points", tag: "Standard" },
        { id: "rc3", label: "RC3", desc: "10+ min attack resistance, 7-point locking", benefit: "Maximum security — 7 locking points make forced entry nearly impossible", tag: "Premium" },
      ],
    },
  ];

  return (
    <Configurator
      title="Configure Your Entry Door"
      subtitle="Design your perfect entry. Get a free custom quote."
      steps={steps}
      svgPreview={(sel) => <EntryDoorSVG selections={sel} />}
      productType="entry-door"
    />
  );
}

/* ──────────────── French Door SVG ──────────────── */

function FrenchDoorSVG({ selections }: { selections: Record<string, string> }) {
  const frameColor = selections.color === "anthracite" ? "#3C3C3C"
    : selections.color === "black" ? "#1A1A1A"
    : selections.color === "dark-brown" ? "#4A2E1C"
    : selections.color === "golden-oak" ? "#B8860B"
    : "#FFFFFF";

  const glassColor = selections.glass === "triple" ? "#d0e8ff"
    : selections.glass === "frosted" ? "#e8eef4"
    : "#deeeff";

  const isDouble = selections.config === "double" || selections.config === "with-sidelights" || selections.config === "with-transom";
  const hasSidelights = selections.config === "with-sidelights";
  const hasTransom = selections.config === "with-transom";

  return (
    <svg viewBox="0 0 300 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Transom */}
      {hasTransom && (
        <>
          <rect x={isDouble ? "50" : "70"} y="10" width={isDouble ? "200" : "160"} height="45" rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
          <rect x={isDouble ? "58" : "78"} y="18" width={isDouble ? "184" : "144"} height="30" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
        </>
      )}

      {/* Sidelights */}
      {hasSidelights && (
        <>
          <rect x="20" y="10" width="30" height="330" rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
          <rect x="26" y="18" width="18" height="314" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          <rect x="250" y="10" width="30" height="330" rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
          <rect x="256" y="18" width="18" height="314" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
        </>
      )}

      {/* Main doors */}
      {isDouble ? (
        <>
          {/* Left door */}
          <rect x={hasSidelights ? "54" : "50"} y={hasTransom ? "59" : "10"} width={hasSidelights ? "94" : "98"} height={hasTransom ? "281" : "330"} rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
          <rect x={hasSidelights ? "62" : "58"} y={hasTransom ? "67" : "18"} width={hasSidelights ? "78" : "82"} height={hasTransom ? "265" : "314"} rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          {/* Left handle */}
          <rect x={hasSidelights ? "140" : "148"} y="175" width="3" height="18" rx="1.5" fill="#999"/>

          {/* Right door */}
          <rect x={hasSidelights ? "152" : "152"} y={hasTransom ? "59" : "10"} width={hasSidelights ? "94" : "98"} height={hasTransom ? "281" : "330"} rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
          <rect x={hasSidelights ? "160" : "160"} y={hasTransom ? "67" : "18"} width={hasSidelights ? "78" : "82"} height={hasTransom ? "265" : "314"} rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          {/* Right handle */}
          <rect x="157" y="175" width="3" height="18" rx="1.5" fill="#999"/>

          {/* Opening arrows */}
          <path d={`M${hasSidelights ? "100" : "100"} ${hasTransom ? "180" : "170"} L${hasSidelights ? "80" : "80"} ${hasTransom ? "200" : "190"}`} stroke="#7799bb" strokeWidth="1" opacity="0.4" strokeDasharray="3,2"/>
          <path d={`M${hasSidelights ? "200" : "200"} ${hasTransom ? "180" : "170"} L${hasSidelights ? "220" : "220"} ${hasTransom ? "200" : "190"}`} stroke="#7799bb" strokeWidth="1" opacity="0.4" strokeDasharray="3,2"/>
        </>
      ) : (
        /* Single door */
        <>
          <rect x="70" y="10" width="160" height="330" rx="2" fill={frameColor} stroke="#888" strokeWidth="1.5"/>
          <rect x="78" y="18" width="144" height="314" rx="1" fill={glassColor} stroke="#aac" strokeWidth="0.5"/>
          {/* Handle */}
          <rect x="210" y="175" width="3" height="18" rx="1.5" fill="#999"/>
          {/* Opening arrow */}
          <path d="M150 180 L130 200" stroke="#7799bb" strokeWidth="1" opacity="0.4" strokeDasharray="3,2"/>
        </>
      )}

      {/* Label */}
      <text x="150" y="354" textAnchor="middle" fontSize="8" fill="#999" fontFamily="system-ui">
        {selections.config === "with-sidelights" ? "Double + Sidelights" : selections.config === "with-transom" ? "Double + Transom" : isDouble ? "Double French" : "Single French"}
      </text>
    </svg>
  );
}

export function FrenchDoorConfigurator() {
  const steps: Step[] = [
    {
      id: "config",
      title: "Configuration",
      type: "card",
      options: [
        { id: "single", label: "Single French Door", desc: "One-panel swing, 32–42\" width", benefit: "Elegant glass door for patios or side entries — lets light flow between rooms" },
        { id: "double", label: "Double French Doors", desc: "Two matching doors, 60–72\" total", benefit: "Wide-open access to your patio or garden — both doors swing open for a grand feel", tag: "Classic" },
        { id: "with-sidelights", label: "Double + Sidelights", desc: "Flanked by fixed glass panels for maximum light", benefit: "Panoramic light — fixed glass panels beside the doors make the space feel twice as wide", tag: "Popular" },
        { id: "with-transom", label: "Double + Transom", desc: "Fixed transom above extends height", benefit: "Adds height and drama — the glass above makes ceilings feel taller" },
      ],
    },
    {
      id: "material",
      title: "Frame Material",
      type: "card",
      options: [
        { id: "upvc", label: "uPVC", desc: "Best thermal insulation, low maintenance", benefit: "Zero maintenance — keeps heat in and noise out for decades", tag: "Popular" },
        { id: "aluminum", label: "Aluminum", desc: "Slim profiles, modern aesthetic", benefit: "Thinnest possible frames — maximizes your glass area for the best views" },
        { id: "composite", label: "Composite", desc: "Premium look & feel", benefit: "The beauty of wood without the headaches — won't warp or need refinishing" },
      ],
    },
    {
      id: "glass",
      title: "Glazing",
      type: "card",
      options: [
        { id: "double", label: "Double Glazing", desc: "Insulated, argon fill", benefit: "Keeps your home cozy — argon gas between panes adds extra insulation", specs: "U-Value 0.9–1.3" },
        { id: "triple", label: "Triple Glazing", desc: "Maximum thermal performance", benefit: "The warmest option — three layers of glass mean your energy bills drop noticeably", specs: "U-Value 0.9", tag: "Best Performance" },
        { id: "frosted", label: "Frosted Glass", desc: "Light with privacy", benefit: "Perfect for bedrooms or bathrooms — bright natural light without anyone seeing in" },
      ],
    },
    {
      id: "color",
      title: "Frame Color",
      type: "swatch",
      options: [
        { id: "white", label: "White", color: "#FFFFFF" },
        { id: "anthracite", label: "Anthracite", color: "#3C3C3C" },
        { id: "black", label: "Black", color: "#1A1A1A" },
        { id: "golden-oak", label: "Golden Oak", color: "#B8860B" },
        { id: "dark-brown", label: "Dark Brown", color: "#4A2E1C" },
      ],
    },
    {
      id: "screen",
      title: "Insect Screen",
      type: "card",
      options: [
        { id: "none", label: "No Screen", desc: "Add later if needed", benefit: "No worries — you can always add one down the road" },
        { id: "plisse", label: "Plissé Screen", desc: "Retractable pleated mesh", benefit: "Folds neatly out of sight — enjoy fresh air without the bugs", tag: "Recommended" },
      ],
    },
  ];

  return (
    <Configurator
      title="Configure Your French Doors"
      subtitle="Design your perfect doors. Get a free custom quote."
      steps={steps}
      svgPreview={(sel) => <FrenchDoorSVG selections={sel} />}
      productType="french-door"
    />
  );
}

/* ──────────────── Step Icons ──────────────── */

function StepIcon({ stepId, className = "w-4 h-4" }: { stepId: string; className?: string }) {
  const props = { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 };
  switch (stepId) {
    case "profile":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>;
    case "type":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" /></svg>;
    case "glass":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>;
    case "color":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" /></svg>;
    case "screen":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>;
    case "system":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>;
    case "material":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>;
    case "config":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437" /></svg>;
    case "security":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>;
    default:
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>;
  }
}

/* ──────────────── Base Configurator ──────────────── */

function Configurator({ title, subtitle, steps, svgPreview, productType }: ConfiguratorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    steps.forEach((s) => { init[s.id] = s.options[0].id; });
    return init;
  });

  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;
  const isFirst = currentStep === 0;

  function select(optionId: string) {
    setSelections((prev) => ({ ...prev, [step.id]: optionId }));
  }

  function goNext() {
    if (!isLast) setCurrentStep((p) => p + 1);
  }

  function goBack() {
    if (!isFirst) setCurrentStep((p) => p - 1);
  }

  /* Build summary string for quote link */
  const summaryParts = steps.map((s) => {
    const opt = s.options.find((o) => o.id === selections[s.id]);
    return `${s.title}: ${opt?.label || selections[s.id]}`;
  });
  const quoteParam = encodeURIComponent(`[${productType}] ${summaryParts.join(" | ")}`);

  return (
    <section id="configurator" className="bg-warm-gray py-16 md:py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-brand mb-2">Configurator</span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">{title}</h2>
          <p className="text-[15px] text-text-secondary max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* ── Left: SVG Preview ── */}
          <div className="md:col-span-5 sticky top-24">
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              {/* Preview area with subtle gradient bg */}
              <div className="p-8 flex items-center justify-center min-h-[320px] bg-gradient-to-br from-gray-50 to-white">
                <div className="w-full max-w-[240px] transition-all duration-300">
                  {svgPreview(selections)}
                </div>
              </div>
              {/* Summary bar — below preview */}
              <div className="border-t border-border px-5 py-4 bg-white">
                <p className="text-[10px] font-semibold tracking-wider uppercase text-text-muted mb-2.5">Your Configuration</p>
                <div className="flex flex-wrap gap-1.5">
                  {steps.map((s, i) => {
                    const opt = s.options.find((o) => o.id === selections[s.id]);
                    return (
                      <button
                        key={s.id}
                        onClick={() => setCurrentStep(i)}
                        className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full transition-all ${
                          i === currentStep
                            ? "bg-brand/10 text-brand ring-1 ring-brand/20"
                            : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                        }`}
                      >
                        <span className="font-medium">{s.title}:</span>
                        <span className={i === currentStep ? "text-brand font-semibold" : "text-text-primary"}>{opt?.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Steps ── */}
          <div className="md:col-span-7">
            {/* ── Step progress bar ── */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 relative">
                {/* Background track line */}
                <div className="absolute top-4 left-0 right-0 h-[2px] bg-gray-200" style={{ marginLeft: `${100 / steps.length / 2}%`, marginRight: `${100 / steps.length / 2}%` }} />
                {/* Filled progress line */}
                <div
                  className="absolute top-4 left-0 h-[2px] bg-brand transition-all duration-300"
                  style={{
                    marginLeft: `${100 / steps.length / 2}%`,
                    width: currentStep === 0 ? "0%" : `${(currentStep / (steps.length - 1)) * (100 - 100 / steps.length)}%`,
                  }}
                />
                {steps.map((s, i) => {
                  const isCompleted = i < currentStep;
                  const isCurrent = i === currentStep;
                  return (
                    <div key={s.id} className="flex flex-col items-center flex-1 relative z-10">
                      {/* Circle with icon */}
                      <button
                        onClick={() => setCurrentStep(i)}
                        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isCurrent
                            ? "bg-brand text-white shadow-md shadow-brand/30 scale-110"
                            : isCompleted
                            ? "bg-brand text-white"
                            : "bg-white text-text-muted border-2 border-gray-200"
                        }`}
                      >
                        {isCompleted ? (
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <StepIcon stepId={s.id} className="w-4 h-4" />
                        )}
                      </button>
                      {/* Label */}
                      <span className={`mt-1.5 text-[10px] font-medium text-center leading-tight hidden sm:block ${
                        isCurrent ? "text-brand" : isCompleted ? "text-text-secondary" : "text-text-muted"
                      }`}>
                        {s.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Current step header ── */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                <StepIcon stepId={step.id} className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary leading-tight">{step.title}</h3>
                <p className="text-xs text-text-muted">Select an option below</p>
              </div>
            </div>

            {/* ── Options ── */}
            {step.type === "swatch" ? (
              /* ── Color swatches ── */
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
                {step.options.map((opt) => {
                  const isSelected = selections[step.id] === opt.id;
                  const isLight = opt.color === "#FFFFFF" || opt.color === "#F5F0E1";
                  return (
                    <button
                      key={opt.id}
                      onClick={() => select(opt.id)}
                      className={`group flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-200 ${
                        isSelected
                          ? "border-brand bg-white shadow-lg shadow-brand/10 scale-[1.02]"
                          : "border-transparent bg-white hover:border-gray-200 hover:shadow-sm"
                      }`}
                    >
                      <div className="relative">
                        <div
                          className={`w-12 h-12 rounded-full mb-2 transition-transform duration-200 group-hover:scale-105 ${
                            isLight ? "border border-gray-200" : ""
                          } ${isSelected ? "ring-2 ring-brand ring-offset-2" : ""}`}
                          style={{ backgroundColor: opt.color }}
                        />
                        {/* Checkmark overlay */}
                        {isSelected && (
                          <div className="absolute inset-0 flex items-center justify-center mb-2">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              isLight ? "bg-brand" : "bg-white/90"
                            }`}>
                              <svg className={`w-3 h-3 ${isLight ? "text-white" : "text-gray-800"}`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      <span className={`text-[11px] font-medium transition-colors ${
                        isSelected ? "text-brand" : "text-text-secondary"
                      }`}>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* ── Card options ── */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {step.options.map((opt) => {
                  const isSelected = selections[step.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => select(opt.id)}
                      className={`group relative text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        isSelected
                          ? "border-brand bg-brand/[0.03] shadow-lg shadow-brand/10"
                          : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                      }`}
                    >
                      {/* Tag — top-right absolute */}
                      {opt.tag && (
                        <span className={`absolute -top-2 right-3 text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full ${
                          opt.tag.includes("Popular") || opt.tag.includes("Recommended")
                            ? "bg-brand text-white"
                            : "bg-amber-100 text-amber-700"
                        }`}>{opt.tag}</span>
                      )}

                      <div className="flex items-start gap-3">
                        {/* Radio indicator */}
                        <div className={`mt-0.5 w-[18px] h-[18px] rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                          isSelected ? "border-brand bg-brand" : "border-gray-300 group-hover:border-gray-400"
                        }`}>
                          {isSelected && (
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold text-sm leading-tight transition-colors ${
                            isSelected ? "text-brand" : "text-text-primary"
                          }`}>{opt.label}</h4>
                          {opt.desc && <p className="text-xs text-text-muted mt-1 leading-relaxed">{opt.desc}</p>}
                          {/* Benefit — human-friendly explanation */}
                          {opt.benefit && isSelected && (
                            <p className="text-xs text-brand/80 mt-1.5 leading-relaxed italic">{opt.benefit}</p>
                          )}
                          {opt.specs && (
                            <span className={`inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              isSelected ? "bg-brand/10 text-brand" : "bg-gray-100 text-text-secondary"
                            }`}>{opt.specs}</span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* ── Navigation ── */}
            <div className="flex items-center gap-3">
              {!isFirst && (
                <button
                  onClick={goBack}
                  className="flex items-center gap-1.5 text-sm font-medium px-5 py-2.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:bg-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                  Back
                </button>
              )}

              <div className="flex-1" />

              {isLast ? (
                <Link
                  href={`/quote?config=${quoteParam}`}
                  className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand/20"
                >
                  Get Free Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </Link>
              ) : (
                <button
                  onClick={goNext}
                  className="flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand/20"
                >
                  Next Step
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
