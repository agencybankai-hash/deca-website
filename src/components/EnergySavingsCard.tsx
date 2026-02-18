"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function EnergySavingsCard() {
  const ref = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const taxRef = useRef<HTMLSpanElement>(null);
  const savingsRef = useRef<HTMLSpanElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !triggered) setTriggered(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;

    const obj = { val: 0 };
    anime({
      targets: obj, val: 45, duration: 2000, easing: "easeOutExpo",
      update: () => { if (pctRef.current) pctRef.current.textContent = `${Math.round(obj.val)}%`; },
    });

    if (beforeRef.current) {
      anime({ targets: beforeRef.current, height: ["0%", "75%"], duration: 1400, easing: "easeOutExpo", delay: 200 });
    }
    if (afterRef.current) {
      anime({ targets: afterRef.current, height: ["0%", "40%"], duration: 1400, easing: "easeOutExpo", delay: 400 });
    }

    const taxObj = { val: 0 };
    anime({
      targets: taxObj, val: 3200, duration: 1800, easing: "easeOutExpo", delay: 300,
      update: () => { if (taxRef.current) taxRef.current.textContent = `$${Math.round(taxObj.val).toLocaleString("en-US")}`; },
    });

    const savObj = { val: 0 };
    anime({
      targets: savObj, val: 2100, duration: 1800, easing: "easeOutExpo", delay: 400,
      update: () => { if (savingsRef.current) savingsRef.current.textContent = `$${Math.round(savObj.val).toLocaleString("en-US")}`; },
    });
  }, [triggered]);

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6">

      {/* ── Card 1: Energy Savings ── */}
      <div className="rounded-2xl border border-border bg-white p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-brand/10 hover:-translate-y-1 hover:border-brand/20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-primary">Energy Savings</h4>
            <p className="text-xs text-text-muted">Heating & cooling cost reduction</p>
          </div>
        </div>

        {/* Bar chart — fixed height, no flex-1 conflict */}
        <div className="flex items-end justify-center gap-6 h-36 mb-3">
          {/* Before */}
          <div className="flex flex-col items-center h-full" style={{ width: "4.5rem" }}>
            <div className="w-full flex-1 bg-gray-100 rounded-lg relative overflow-hidden">
              <div ref={beforeRef} className="absolute bottom-0 left-0 right-0 bg-[#e8873a] rounded-b-lg overflow-hidden" style={{ height: "0%" }}>
                {/* Inner glow */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(255,200,100,0.35) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 80%, rgba(255,255,255,0.12) 0%, transparent 60%)" }} />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.12 }}>
                  <defs><pattern id="energy-grid" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M 12 0 L 0 0 0 12" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
                  <rect width="100%" height="100%" fill="url(#energy-grid)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Indicator — vertically centered */}
          <div className="flex flex-col items-center justify-center gap-0.5 pb-6">
            <span ref={pctRef} className="text-2xl font-black text-brand leading-none">0%</span>
            <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">less</span>
          </div>

          {/* After */}
          <div className="flex flex-col items-center h-full" style={{ width: "4.5rem" }}>
            <div className="w-full flex-1 bg-gray-100 rounded-lg relative overflow-hidden">
              <div ref={afterRef} className="absolute bottom-0 left-0 right-0 bg-brand rounded-b-lg overflow-hidden" style={{ height: "0%" }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(120,180,255,0.35) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 50% 80%, rgba(255,255,255,0.12) 0%, transparent 60%)" }} />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.1 }}>
                  <defs><pattern id="energy-grid-after" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M 12 0 L 0 0 0 12" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
                  <rect width="100%" height="100%" fill="url(#energy-grid-after)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Labels row — separate from bars for perfect alignment */}
        <div className="flex justify-center gap-6 mb-6">
          <div className="text-center" style={{ width: "4.5rem" }}>
            <p className="text-[11px] font-semibold text-text-muted">Before</p>
            <p className="text-[11px] font-bold text-brand">$3,200/yr</p>
          </div>
          <div style={{ width: "3.5rem" }} />
          <div className="text-center" style={{ width: "4.5rem" }}>
            <p className="text-[11px] font-semibold text-text-muted">After</p>
            <p className="text-[11px] font-bold text-brand">$1,760/yr</p>
          </div>
        </div>

        {/* Footer — mt-auto pushes to bottom */}
        <div className="border-t border-border pt-4 mt-auto flex items-center justify-between">
          <div>
            <p className="text-[10px] text-text-muted uppercase tracking-wider font-medium">Annual savings</p>
            <span ref={savingsRef} className="text-lg font-black text-brand">$0</span>
          </div>
          <span className="text-[10px] text-text-muted">per household avg.</span>
        </div>
      </div>

      {/* ── Card 2: Federal Tax Credit ── */}
      <div className="rounded-2xl border border-border bg-white p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-brand/10 hover:-translate-y-1 hover:border-brand/20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-primary">Federal Tax Credit</h4>
            <p className="text-xs text-text-muted">Energy-efficient windows</p>
          </div>
        </div>

        {/* Big number */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <span className="text-[10px] text-text-muted uppercase tracking-[0.15em] font-medium mb-1">Up to</span>
          <span ref={taxRef} className="text-5xl font-black text-brand leading-none">$0</span>
          <span className="text-sm text-text-muted mt-2">per household</span>
        </div>

        {/* Info rows — mt-auto pushes to bottom */}
        <div className="border-t border-border pt-4 mt-auto space-y-2.5">
          {[
            "Inflation Reduction Act, Sec. 25C",
            "ENERGY STAR® Certified",
            "Available through 2032",
          ].map((text) => (
            <div key={text} className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-brand shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-xs text-text-secondary">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Card 3: ROI Timeline ── */}
      <div className="rounded-2xl border border-border bg-white p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-brand/10 hover:-translate-y-1 hover:border-brand/20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-primary">ROI Timeline</h4>
            <p className="text-xs text-text-muted">When windows pay for themselves</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex-1">
          {[
            { year: "Year 1", label: "Tax credit offsets cost", amount: "−$3,200" },
            { year: "Year 3–5", label: "Break-even point reached", amount: "±$0" },
            { year: "Year 10+", label: "Cumulative savings grow", amount: "+$15,000+" },
          ].map((step, i) => (
            <div key={step.year} className="flex gap-3.5">
              {/* Rail */}
              <div className="flex flex-col items-center" style={{ width: "12px" }}>
                <div className={`w-2.5 h-2.5 rounded-full ${i === 2 ? "bg-brand" : "bg-gray-300"} shrink-0 mt-1`} />
                {i < 2 && <div className="w-px flex-1 bg-gray-200" />}
              </div>
              {/* Content */}
              <div className={`flex-1 ${i < 2 ? "pb-6" : ""}`}>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold text-text-primary">{step.year}</span>
                  <span className="text-xs font-bold text-brand">{step.amount}</span>
                </div>
                <p className="text-xs text-text-muted mt-0.5">{step.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer — mt-auto pushes to bottom */}
        <div className="border-t border-border pt-4 mt-auto flex items-center justify-between">
          <div>
            <p className="text-[10px] text-text-muted uppercase tracking-wider font-medium">Average savings</p>
            <span className="text-lg font-black text-brand">$1,500–2,500</span>
          </div>
          <span className="text-[10px] text-text-muted">per year</span>
        </div>
      </div>
    </div>
  );
}
