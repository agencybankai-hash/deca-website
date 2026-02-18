"use client";

import { useState } from "react";
import Image from "next/image";

const a = "/assets/images";

interface GlassType {
  id: string;
  name: string;
  src: string;
  shortDesc: string;
}

const glassTypes: GlassType[] = [
  { id: "double", name: "Double Pane", src: `${a}/double.webp`, shortDesc: "Standard insulated glass" },
  { id: "laminated", name: "Laminated Double", src: `${a}/laminated-double.webp`, shortDesc: "Safety + sound control" },
  { id: "triple", name: "Triple Pane", src: `${a}/triple.webp`, shortDesc: "Maximum performance" },
];

const metrics: { label: string; desc: string; values: Record<string, string> }[] = [
  {
    label: "Heat Transfer (U-Factor)",
    desc: "Lower is better — how much heat escapes",
    values: { double: "0.26", laminated: "0.18", triple: "0.14" },
  },
  {
    label: "R-Value",
    desc: "Higher is better — resistance to heat flow",
    values: { double: "4.0", laminated: "5.0", triple: "7.1" },
  },
  {
    label: "Solar Heat Gain (SHGC)",
    desc: "How much solar heat passes through",
    values: { double: "0.71", laminated: "0.60", triple: "0.28–0.60" },
  },
  {
    label: "Visible Light (VLT)",
    desc: "How much natural light gets in",
    values: { double: "79%", laminated: "75%", triple: "60–74%" },
  },
  {
    label: "Air Leakage",
    desc: "Lower is better — drafts and energy loss",
    values: { double: "0.3 cfm", laminated: "0.3 cfm", triple: "< 0.1 cfm" },
  },
  {
    label: "Sound Insulation (STC)",
    desc: "Higher is better — blocks outside noise",
    values: { double: "32 dB", laminated: "40 dB", triple: "42–50 dB" },
  },
];

export default function GlazingComparison() {
  const [activeGlass, setActiveGlass] = useState("triple");

  return (
    <div>
      {/* ── Glass type selector with images ── */}
      <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-10">
        {glassTypes.map((g) => {
          const isActive = activeGlass === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setActiveGlass(g.id)}
              className={`group relative flex flex-col items-center text-center transition-all duration-200 rounded-2xl p-4 md:p-6 ${
                isActive
                  ? "bg-white shadow-lg shadow-brand/10 ring-2 ring-brand"
                  : "bg-white/60 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200"
              }`}
            >
              {/* Recommended badge */}
              {g.id === "triple" && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-wider uppercase bg-brand text-white px-3 py-0.5 rounded-full whitespace-nowrap">
                  Recommended
                </span>
              )}

              {/* Glass cross-section image */}
              <div className="w-full aspect-[4/3] relative mb-3 flex items-center justify-center">
                <Image
                  src={g.src}
                  alt={`${g.name} cross-section`}
                  width={240}
                  height={180}
                  className={`w-full h-full object-contain transition-transform duration-200 ${
                    isActive ? "scale-105" : "opacity-70 group-hover:opacity-100"
                  }`}
                />
              </div>

              {/* Label */}
              <h4 className={`text-sm md:text-base font-bold transition-colors ${
                isActive ? "text-brand" : "text-text-primary"
              }`}>{g.name}</h4>
              <p className="text-[11px] text-text-muted mt-0.5 hidden sm:block">{g.shortDesc}</p>
            </button>
          );
        })}
      </div>

      {/* ── Comparison table ── */}
      <div className="overflow-x-auto rounded-xl border border-border bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand text-white">
              <th className="px-5 py-3.5 text-left font-semibold w-[40%]">Metric</th>
              {glassTypes.map((g) => (
                <th
                  key={g.id}
                  className={`px-5 py-3.5 text-center font-semibold cursor-pointer transition-colors ${
                    activeGlass === g.id ? "bg-brand-dark" : "hover:bg-brand-dark/50"
                  }`}
                  onClick={() => setActiveGlass(g.id)}
                >
                  {g.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {metrics.map((m, i) => (
              <tr key={m.label} className={`border-t border-border ${i % 2 === 0 ? "bg-warm-gray/50" : "bg-white"}`}>
                <td className="px-5 py-3.5">
                  <span className="font-semibold text-text-primary block">{m.label}</span>
                  <span className="text-[11px] text-text-muted">{m.desc}</span>
                </td>
                {glassTypes.map((g) => {
                  const isHighlighted = activeGlass === g.id;
                  const val = m.values[g.id];
                  return (
                    <td
                      key={g.id}
                      className={`px-5 py-3.5 text-center transition-colors ${
                        isHighlighted
                          ? "font-bold text-brand bg-brand/[0.04]"
                          : "text-text-secondary"
                      }`}
                    >
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Best for summary ── */}
      <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mt-6">
        {[
          { id: "double", text: "Mild climates, budget-friendly projects" },
          { id: "laminated", text: "Safety glass, moderate climates, noise reduction" },
          { id: "triple", text: "New England winters, maximum energy savings" },
        ].map((item) => (
          <div
            key={item.id}
            className={`text-center text-xs px-3 py-2 rounded-lg transition-colors ${
              activeGlass === item.id
                ? "bg-brand/10 text-brand font-medium"
                : "text-text-muted"
            }`}
          >
            <span className="font-semibold block mb-0.5">Best for:</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
