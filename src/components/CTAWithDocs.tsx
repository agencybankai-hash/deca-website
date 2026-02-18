"use client";

import Link from "next/link";

/* ── Fake document cards that stack with perspective ── */

const docs = [
  {
    title: "Window Specification",
    type: "PDF",
    color: "#ef4444",
    lines: [
      { w: "60%", h: 3 },
      { w: "80%", h: 3 },
      { w: "45%", h: 3 },
      { w: "70%", h: 3 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Order Form",
    type: "DOCX",
    color: "#3b82f6",
    lines: [
      { w: "70%", h: 3 },
      { w: "50%", h: 3 },
      { w: "85%", h: 3 },
      { w: "40%", h: 3 },
      { w: "65%", h: 3 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    title: "Window Blueprint",
    type: "DWG",
    color: "#10b981",
    lines: [],
    blueprint: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
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
    <section className="bg-brand text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text + CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-lg">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href={btnHref}
                className="inline-block bg-white text-brand hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-colors"
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

          {/* Right — Stacked document cards */}
          <div className="relative h-[340px] hidden lg:block">
            {docs.map((doc, i) => (
              <div
                key={doc.title}
                className="absolute bg-white rounded-xl shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] cursor-default group"
                style={{
                  width: 220,
                  height: 280,
                  right: i * 60,
                  top: i * 20,
                  zIndex: 30 - i * 10,
                  transform: `rotate(${-5 + i * 6}deg)`,
                }}
              >
                {/* Doc header bar */}
                <div
                  className="h-2 rounded-t-xl"
                  style={{ backgroundColor: doc.color }}
                />

                <div className="p-4 flex flex-col h-[calc(100%-8px)]">
                  {/* File type + icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: doc.color + "15", color: doc.color }}
                      >
                        {doc.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-800 leading-tight">{doc.title}</p>
                        <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">{doc.type}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content area */}
                  {doc.blueprint ? (
                    /* Blueprint/drawing mockup */
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <svg viewBox="0 0 160 180" className="w-full h-full" fill="none">
                        {/* Window frame */}
                        <rect x="30" y="20" width="100" height="130" rx="2" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
                        {/* Center divider */}
                        <line x1="80" y1="20" x2="80" y2="150" stroke="#94a3b8" strokeWidth="1" />
                        {/* Horizontal divider */}
                        <line x1="30" y1="85" x2="130" y2="85" stroke="#94a3b8" strokeWidth="1" />
                        {/* Tilt arrows */}
                        <path d="M55 50 L55 38 L48 45" stroke={doc.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M105 110 L115 110 L108 117" stroke={doc.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        {/* Dimensions */}
                        <text x="80" y="165" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="Inter, sans-serif">1200 × 1400 mm</text>
                        {/* Dimension lines */}
                        <line x1="20" y1="20" x2="20" y2="150" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" />
                        <line x1="30" y1="160" x2="130" y2="160" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" />
                      </svg>
                    </div>
                  ) : (
                    /* Text document mockup */
                    <div className="flex-1 space-y-2.5 pt-1">
                      {doc.lines.map((line, j) => (
                        <div
                          key={j}
                          className="rounded-full bg-gray-100"
                          style={{ width: line.w, height: line.h }}
                        />
                      ))}
                      {/* Separator */}
                      <div className="border-t border-gray-100 pt-2.5 mt-3">
                        {[...Array(3)].map((_, j) => (
                          <div
                            key={`b${j}`}
                            className="rounded-full bg-gray-50 mb-2"
                            style={{ width: `${55 + j * 15}%`, height: 2.5 }}
                          />
                        ))}
                      </div>
                      {/* Checkbox items */}
                      <div className="space-y-1.5 mt-2">
                        {[...Array(2)].map((_, j) => (
                          <div key={`c${j}`} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded border border-gray-200 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: doc.color }} />
                            </div>
                            <div className="rounded-full bg-gray-100" style={{ width: `${50 + j * 20}%`, height: 2.5 }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom stamp */}
                  <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[8px] text-gray-300 font-medium tracking-wider uppercase">DECA Windows</span>
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="w-1 h-1 rounded-full" style={{ backgroundColor: doc.color, opacity: 0.3 + j * 0.25 }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
