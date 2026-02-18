"use client";

import Link from "next/link";

/* ── Document card data ── */

const docs = [
  {
    title: "Window Specification",
    type: "PDF · 2.4 MB",
    color: "#ef4444",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    content: "lines" as const,
    lines: [
      { w: "60%", h: 2 }, { w: "80%", h: 2 }, { w: "45%", h: 2 }, { w: "70%", h: 2 }, { w: "55%", h: 2 },
    ],
    extras: (
      <>
        {/* Table mockup */}
        <div className="mt-2.5 border border-gray-100 rounded-sm overflow-hidden">
          <div className="grid grid-cols-3 gap-px bg-gray-100">
            {[...Array(9)].map((_, j) => (
              <div key={j} className="bg-white px-1.5 py-1">
                <div className="rounded-sm bg-gray-100" style={{ width: `${40 + (j % 3) * 25}%`, height: 1.5 }} />
              </div>
            ))}
          </div>
        </div>
        {/* More lines */}
        <div className="space-y-1.5 mt-2.5">
          <div className="rounded-sm bg-gray-100" style={{ width: "75%", height: 1.5 }} />
          <div className="rounded-sm bg-gray-100" style={{ width: "50%", height: 1.5 }} />
        </div>
        {/* Signature line */}
        <div className="mt-2 pt-1.5 border-t border-dashed border-gray-200 flex items-end gap-2">
          <div className="rounded-sm bg-gray-100" style={{ width: "45%", height: 1.5 }} />
          <span className="text-[6px] text-gray-300">Date</span>
          <div className="rounded-sm bg-gray-100 ml-auto" style={{ width: "30%", height: 1.5 }} />
          <span className="text-[6px] text-gray-300">Sign</span>
        </div>
      </>
    ),
  },
  {
    title: "Order Form",
    type: "DOCX · 1.1 MB",
    color: "#3b82f6",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
    content: "lines" as const,
    lines: [
      { w: "70%", h: 2 }, { w: "50%", h: 2 }, { w: "85%", h: 2 }, { w: "40%", h: 2 }, { w: "65%", h: 2 },
    ],
    extras: (
      <>
        {/* Checkbox items */}
        <div className="space-y-1 mt-2.5">
          {["Profile: GEALAN S8000", "Glass: Triple Argon", "Color: RAL 7016", "Hardware: Roto NT", "Sill: Aluminum"].map((text, j) => (
            <div key={j} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-[1px] border border-gray-200 flex items-center justify-center flex-shrink-0">
                {j < 4 && <div className="w-1 h-1 rounded-[0.5px] bg-blue-500" />}
              </div>
              <span className="text-[6px] text-gray-400 truncate">{text}</span>
            </div>
          ))}
        </div>
        {/* Separator + more lines */}
        <div className="mt-2 pt-1.5 border-t border-gray-100 space-y-1">
          <div className="rounded-sm bg-gray-100" style={{ width: "60%", height: 1.5 }} />
          <div className="rounded-sm bg-gray-100" style={{ width: "45%", height: 1.5 }} />
        </div>
        {/* Total */}
        <div className="mt-1.5 pt-1 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[6px] text-gray-300 font-medium">Total</span>
          <div className="rounded-sm bg-gray-100" style={{ width: 35, height: 2 }} />
        </div>
      </>
    ),
  },
  {
    title: "Window Blueprint",
    type: "DWG · 856 KB",
    color: "#10b981",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    content: "blueprint" as const,
    lines: [],
    extras: null,
  },
];

/* ── Card positions: back(2) → middle(1) → front(0) ── */
const cardLayout = [
  { x: -30, y: -30, rot: -6,  z: 30 }, /* front */
  { x: 55,  y: 10,  rot: 2,   z: 20 }, /* middle */
  { x: -10, y: 40,  rot: 8,   z: 10 }, /* back */
];

export default function CTAWithDocs({
  title = "Ready for Tilt & Turn?",
  subtitle = "Any size, color, or configuration. Factory-direct pricing with GEALAN quality.",
  btnText = "Get Free Quote",
  btnHref = "/quote",
}: {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnHref?: string;
}) {
  return (
    <section className="pt-24 pb-16 overflow-visible relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="rounded-2xl text-white px-8 sm:px-10 lg:px-14 py-0 overflow-visible relative"
          style={{ background: "linear-gradient(135deg, #d94e1a 0%, #f47b2b 30%, #ff9a44 60%, #f0751e 100%)" }}
        >
          {/* Radial glow — top-right warm spot */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
            style={{
              background: "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(255,200,100,0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 15% 85%, rgba(180,50,0,0.3) 0%, transparent 60%)",
            }}
          />

          {/* Blueprint pattern overlay */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
            style={{ opacity: 0.1 }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
              {/* Window frame schematic */}
              <rect x="75%" y="10%" width="130" height="180" rx="2" fill="none" stroke="white" strokeWidth="1.4" />
              <line x1="75%" y1="10%" x2="75%" y2="calc(10% + 180px)" stroke="white" strokeWidth="1" transform="translate(65,0)" />
              <line x1="75%" y1="calc(10% + 90px)" x2="calc(75% + 130px)" y2="calc(10% + 90px)" stroke="white" strokeWidth="0.7" />
              <rect x="calc(75% + 5px)" y="calc(10% + 5px)" width="57" height="80" rx="1" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="calc(75% + 68px)" y="calc(10% + 5px)" width="57" height="80" rx="1" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="calc(75% + 5px)" y="calc(10% + 95px)" width="57" height="80" rx="1" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="calc(75% + 68px)" y="calc(10% + 95px)" width="57" height="80" rx="1" fill="none" stroke="white" strokeWidth="0.6" />
              {/* Handle details */}
              <circle cx="calc(75% + 60px)" cy="calc(10% + 45px)" r="3" fill="white" fillOpacity="0.3" />
              <circle cx="calc(75% + 72px)" cy="calc(10% + 135px)" r="3" fill="white" fillOpacity="0.3" />
              {/* Dimension lines */}
              <line x1="calc(75% - 18px)" y1="10%" x2="calc(75% - 18px)" y2="calc(10% + 180px)" stroke="white" strokeWidth="0.6" />
              <line x1="calc(75% - 23px)" y1="10%" x2="calc(75% - 13px)" y2="10%" stroke="white" strokeWidth="0.6" />
              <line x1="calc(75% - 23px)" y1="calc(10% + 180px)" x2="calc(75% - 13px)" y2="calc(10% + 180px)" stroke="white" strokeWidth="0.6" />
              <line x1="75%" y1="calc(10% + 198px)" x2="calc(75% + 130px)" y2="calc(10% + 198px)" stroke="white" strokeWidth="0.6" />
              {/* Circle / section marks */}
              <circle cx="18%" cy="65%" r="35" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="18%" cy="65%" r="22" fill="none" stroke="white" strokeWidth="0.3" />
              <line x1="calc(18% - 35px)" y1="65%" x2="calc(18% + 35px)" y2="65%" stroke="white" strokeWidth="0.3" />
              <line x1="18%" y1="calc(65% - 35px)" x2="18%" y2="calc(65% + 35px)" stroke="white" strokeWidth="0.3" />
              {/* Diagonal detail */}
              <line x1="5%" y1="15%" x2="15%" y2="5%" stroke="white" strokeWidth="0.4" />
              <line x1="6%" y1="15%" x2="16%" y2="5%" stroke="white" strokeWidth="0.4" />
            </svg>
          </div>

          {/* Bottom edge shine */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.15) 50%, transparent 90%)" }}
          />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left — Text + CTA */}
          <div className="py-6 lg:py-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h2>
            <p className="text-white/75 text-lg leading-relaxed mb-5 max-w-lg">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href={btnHref}
                className="inline-block bg-white text-[#d94e1a] hover:bg-orange-50 px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15"
              >
                {btnText}
              </Link>
              <a
                href="tel:+14137714457"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors py-3.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                (413) 771-4457
              </a>
            </div>
          </div>

          {/* Right — Stacked document cards, overflow above section */}
          <div className="relative h-[280px] hidden lg:flex items-center justify-center">
            {docs.map((doc, i) => {
              const layout = cardLayout[i];
              return (
                <div
                  key={doc.title}
                  className="absolute bg-white rounded-[3px] overflow-hidden"
                  style={{
                    width: 240,
                    height: 330,
                    left: `calc(50% + ${layout.x - 120}px)`,
                    top: `calc(50% + ${layout.y - 165}px)`,
                    zIndex: layout.z,
                    transform: `rotate(${layout.rot}deg)`,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.12), 0 12px 48px rgba(0,0,0,0.18)",
                  }}
                >
                  {/* Top color strip — thin like a file tab */}
                  <div className="h-1" style={{ backgroundColor: doc.color }} />

                  <div className="p-3 flex flex-col h-[calc(100%-4px)]">
                    {/* Header: icon + title + type */}
                    <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-gray-100">
                      <div
                        className="w-6 h-6 rounded-[2px] flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: doc.color + "14", color: doc.color }}
                      >
                        {doc.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-bold text-gray-800 leading-tight truncate">{doc.title}</p>
                        <p className="text-[7px] text-gray-400 font-medium uppercase tracking-wider">{doc.type}</p>
                      </div>
                    </div>

                    {/* Content */}
                    {doc.content === "blueprint" ? (
                      <div className="flex-1 bg-[#f8fafb] rounded-[2px] border border-gray-100 p-2">
                        <svg viewBox="0 0 170 210" className="w-full h-full" fill="none">
                          {/* Grid */}
                          {[0, 1, 2, 3, 4, 5].map((j) => (
                            <line key={`h${j}`} x1="8" y1={15 + j * 33} x2="162" y2={15 + j * 33} stroke="#e2e8f0" strokeWidth="0.3" />
                          ))}
                          {[0, 1, 2, 3, 4].map((j) => (
                            <line key={`v${j}`} x1={8 + j * 39} y1="8" x2={8 + j * 39} y2="185" stroke="#e2e8f0" strokeWidth="0.3" />
                          ))}
                          {/* Window frame outer */}
                          <rect x="28" y="16" width="112" height="140" rx="1" stroke="#64748b" strokeWidth="1.2" />
                          {/* Mullion */}
                          <line x1="84" y1="16" x2="84" y2="156" stroke="#64748b" strokeWidth="1" />
                          <line x1="28" y1="86" x2="140" y2="86" stroke="#64748b" strokeWidth="0.6" />
                          {/* Inner panes */}
                          <rect x="31" y="19" width="50" height="64" rx="0.5" stroke="#94a3b8" strokeWidth="0.5" fill="#f0f9ff" fillOpacity="0.3" />
                          <rect x="87" y="19" width="50" height="64" rx="0.5" stroke="#94a3b8" strokeWidth="0.5" fill="#f0f9ff" fillOpacity="0.3" />
                          <rect x="31" y="89" width="50" height="64" rx="0.5" stroke="#94a3b8" strokeWidth="0.5" fill="#f0f9ff" fillOpacity="0.3" />
                          <rect x="87" y="89" width="50" height="64" rx="0.5" stroke="#94a3b8" strokeWidth="0.5" fill="#f0f9ff" fillOpacity="0.3" />
                          {/* Handle dots */}
                          <circle cx="79" cy="51" r="1.5" fill="#94a3b8" />
                          <line x1="79" y1="47" x2="79" y2="55" stroke="#94a3b8" strokeWidth="0.8" />
                          <circle cx="91" cy="121" r="1.5" fill="#94a3b8" />
                          <line x1="91" y1="117" x2="91" y2="125" stroke="#94a3b8" strokeWidth="0.8" />
                          {/* Tilt arrows */}
                          <path d="M56 34 L56 25 L51 29" stroke="#10b981" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M112 104 L121 104 L117 109" stroke="#10b981" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                          {/* Dimension — vertical */}
                          <line x1="17" y1="16" x2="17" y2="156" stroke="#cbd5e1" strokeWidth="0.4" />
                          <line x1="15" y1="16" x2="19" y2="16" stroke="#cbd5e1" strokeWidth="0.4" />
                          <line x1="15" y1="156" x2="19" y2="156" stroke="#cbd5e1" strokeWidth="0.4" />
                          <text x="13" y="88" textAnchor="middle" fontSize="4.5" fill="#94a3b8" fontFamily="Inter, sans-serif" transform="rotate(-90 13 88)">1400 mm</text>
                          {/* Dimension — horizontal */}
                          <line x1="28" y1="166" x2="140" y2="166" stroke="#cbd5e1" strokeWidth="0.4" />
                          <line x1="28" y1="164" x2="28" y2="168" stroke="#cbd5e1" strokeWidth="0.4" />
                          <line x1="140" y1="164" x2="140" y2="168" stroke="#cbd5e1" strokeWidth="0.4" />
                          <text x="84" y="173" textAnchor="middle" fontSize="4.5" fill="#94a3b8" fontFamily="Inter, sans-serif">1200 mm</text>
                          {/* Section mark */}
                          <circle cx="28" cy="86" r="3" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
                          <text x="28" y="87.5" textAnchor="middle" fontSize="3" fill="#f59e0b" fontFamily="Inter, sans-serif" fontWeight="600">A</text>
                          {/* Profile label */}
                          <text x="84" y="190" textAnchor="middle" fontSize="4.5" fill="#10b981" fontFamily="Inter, sans-serif" fontWeight="600">GEALAN S8000 · Tilt &amp; Turn</text>
                          {/* Scale */}
                          <text x="155" y="200" textAnchor="end" fontSize="3.5" fill="#cbd5e1" fontFamily="Inter, sans-serif">1:10</text>
                        </svg>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col">
                        {/* Text lines */}
                        <div className="space-y-1.5 pt-0.5">
                          {doc.lines.map((line, j) => (
                            <div key={j} className="rounded-[1px] bg-gray-100" style={{ width: line.w, height: line.h }} />
                          ))}
                        </div>
                        {/* Extras */}
                        {doc.extras}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="mt-auto pt-1.5 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 rounded-[1px] bg-brand/10 flex items-center justify-center">
                          <svg className="w-1.5 h-1.5 text-brand" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
                        </div>
                        <span className="text-[6px] text-gray-300 font-medium tracking-wider uppercase">DECA Windows &amp; Doors</span>
                      </div>
                      <span className="text-[6px] text-gray-300">2025</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
