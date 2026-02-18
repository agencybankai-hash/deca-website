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
      {/* ── Glass photos row — white background, above the table ── */}
      <div className="grid grid-cols-[34%_22%_22%_22%] mb-0">
        {/* Empty cell aligned with Metric column */}
        <div />
        {glassTypes.map((g) => (
          <div key={g.id} className="flex flex-col items-center text-center px-3 pb-4 relative">
            {g.id === "triple" && (
              <span className="text-[9px] font-bold tracking-wider uppercase bg-brand text-white px-3 py-0.5 rounded-full whitespace-nowrap mb-2">
                Recommended
              </span>
            )}
            <div className="w-20 h-16 md:w-28 md:h-22 relative mb-2.5 flex items-center justify-center">
              <Image
                src={g.src}
                alt={`${g.name} cross-section`}
                width={120}
                height={90}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-text-primary">{g.name}</span>
            <span className="text-[11px] text-text-muted mt-0.5 hidden sm:block">{g.shortDesc}</span>
          </div>
        ))}
      </div>

      {/* ── Data table ── */}
      <table className="w-full text-sm border-separate border-spacing-0">
        {/* ── Thin brand-colored header ── */}
        <thead>
          <tr>
            <th className="w-[34%] bg-brand/8 border-b-2 border-brand/20 px-5 py-2.5 text-left">
              <span className="font-semibold text-text-primary text-xs uppercase tracking-wide">Metric</span>
            </th>
            {glassTypes.map((g) => (
              <th
                key={g.id}
                className={`w-[22%] border-b-2 border-brand/20 px-3 py-2.5 text-center text-xs uppercase tracking-wide font-semibold ${
                  g.id === "triple" ? "text-brand bg-brand/[0.06]" : "text-text-secondary bg-brand/8"
                }`}
              >
                {g.name}
              </th>
            ))}
          </tr>
        </thead>

        {/* ── Data rows ── */}
        <tbody>
          {metrics.map((m, i) => (
            <tr key={m.label} className={i % 2 === 0 ? "bg-warm-gray/40" : "bg-white"}>
              <td className="px-5 py-3.5 border-b border-border/60">
                <span className="font-medium text-text-primary block text-[13px]">{m.label}</span>
                <span className="text-[11px] text-text-muted leading-tight">{m.desc}</span>
              </td>
              {glassTypes.map((g) => {
                const isTriple = g.id === "triple";
                return (
                  <td
                    key={g.id}
                    className={`px-4 py-3.5 text-center border-b border-border/60 ${
                      isTriple
                        ? "font-bold text-brand bg-brand/[0.03]"
                        : "text-text-secondary"
                    }`}
                  >
                    {m.values[g.id]}
                  </td>
                );
              })}
            </tr>
          ))}

          {/* ── Best for row ── */}
          <tr>
            <td className="px-5 py-3 border-t border-brand/15">
              <span className="font-semibold text-text-primary text-xs uppercase tracking-wide">Best for</span>
            </td>
            {glassTypes.map((g) => (
              <td
                key={g.id}
                className={`px-4 py-3 text-center text-xs border-t border-brand/15 ${
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
