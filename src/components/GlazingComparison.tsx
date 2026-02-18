"use client";

import Image from "next/image";

const a = "/assets/images";

interface GlassType {
  id: string;
  name: string;
  src: string;
  shortDesc: string;
  bestFor: string;
}

const glassTypes: GlassType[] = [
  { id: "double", name: "Double Pane", src: `${a}/double.webp`, shortDesc: "Standard insulated glass", bestFor: "Mild climates, budget-friendly projects" },
  { id: "laminated", name: "Laminated Double", src: `${a}/laminated-double.webp`, shortDesc: "Safety + sound control", bestFor: "Safety glass, moderate climates, noise reduction" },
  { id: "triple", name: "Triple Pane", src: `${a}/triple.webp`, shortDesc: "Maximum performance", bestFor: "New England winters, maximum energy savings" },
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
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-separate border-spacing-0">
        {/* ── Glass images row ── */}
        <thead>
          <tr>
            <th className="w-[34%]" />
            {glassTypes.map((g) => (
              <th key={g.id} className="px-2 pb-3 align-bottom w-[22%]">
                <div className="relative w-full flex flex-col items-center text-center rounded-2xl p-3 md:p-4 bg-white shadow-md">
                  {g.id === "triple" && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-wider uppercase bg-brand text-white px-3 py-0.5 rounded-full whitespace-nowrap">
                      Recommended
                    </span>
                  )}

                  <div className="w-full aspect-[4/3] relative mb-2 flex items-center justify-center">
                    <Image
                      src={g.src}
                      alt={`${g.name} cross-section`}
                      width={200}
                      height={150}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <span className="text-xs md:text-sm font-bold text-text-primary">{g.name}</span>
                  <span className="text-[10px] text-text-muted mt-0.5 hidden sm:block">{g.shortDesc}</span>
                </div>
              </th>
            ))}
          </tr>

          {/* ── Table header ── */}
          <tr>
            <th className="px-5 py-3 text-left font-semibold bg-brand text-white rounded-tl-xl">Metric</th>
            {glassTypes.map((g, i) => (
              <th
                key={g.id}
                className={`px-4 py-3 text-center font-semibold bg-brand text-white ${
                  i === glassTypes.length - 1 ? "rounded-tr-xl" : ""
                }`}
              >
                {g.name}
              </th>
            ))}
          </tr>
        </thead>

        {/* ── Data rows ── */}
        <tbody>
          {metrics.map((m, i) => {
            const isLast = i === metrics.length - 1;
            return (
              <tr key={m.label} className={i % 2 === 0 ? "bg-warm-gray/50" : "bg-white"}>
                <td className={`px-5 py-3.5 border-t border-border ${isLast ? "rounded-bl-xl" : ""}`}>
                  <span className="font-semibold text-text-primary block">{m.label}</span>
                  <span className="text-[11px] text-text-muted">{m.desc}</span>
                </td>
                {glassTypes.map((g, gi) => {
                  const isTriple = g.id === "triple";
                  return (
                    <td
                      key={g.id}
                      className={`px-4 py-3.5 text-center border-t border-border ${
                        isTriple
                          ? "font-bold text-brand bg-brand/[0.04]"
                          : "text-text-secondary"
                      } ${isLast && gi === glassTypes.length - 1 ? "rounded-br-xl" : ""}`}
                    >
                      {m.values[g.id]}
                    </td>
                  );
                })}
              </tr>
            );
          })}

          {/* ── Best for row ── */}
          <tr>
            <td className="px-5 py-3 border-t-2 border-brand/20">
              <span className="font-semibold text-text-primary text-xs uppercase tracking-wide">Best for</span>
            </td>
            {glassTypes.map((g) => (
              <td
                key={g.id}
                className={`px-4 py-3 text-center text-xs border-t-2 border-brand/20 ${
                  g.id === "triple" ? "text-brand font-medium" : "text-text-muted"
                }`}
              >
                {g.bestFor}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
