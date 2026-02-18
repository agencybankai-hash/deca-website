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
      anime({ targets: beforeRef.current, height: ["0%", "80%"], duration: 1400, easing: "easeOutExpo", delay: 200 });
    }
    if (afterRef.current) {
      anime({ targets: afterRef.current, height: ["0%", "38%"], duration: 1400, easing: "easeOutExpo", delay: 400 });
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
      <div className="rounded-2xl border border-border bg-white p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center">
            <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-primary">Energy Savings</h4>
            <p className="text-xs text-text-muted">Heating & cooling cost reduction</p>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex justify-center gap-5 h-40 mb-4 flex-1">
          {/* Before */}
          <div className="flex flex-col items-center w-16 h-full">
            <div className="w-full flex-1 bg-gray-100 rounded-lg relative overflow-hidden">
              <div ref={beforeRef} className="absolute bottom-0 left-0 right-0 bg-gray-400 rounded-b-lg" style={{ height: "0%" }} />
            </div>
            <span className="text-[11px] font-semibold text-text-muted mt-2">Before</span>
            <span className="text-[11px] font-bold text-text-primary">$3,200</span>
          </div>

          {/* Indicator */}
          <div className="flex flex-col items-center justify-center">
            <span ref={pctRef} className="text-3xl font-black text-brand">0%</span>
            <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">less</span>
          </div>

          {/* After */}
          <div className="flex flex-col items-center w-16 h-full">
            <div className="w-full flex-1 bg-gray-100 rounded-lg relative overflow-hidden">
              <div ref={afterRef} className="absolute bottom-0 left-0 right-0 bg-brand rounded-b-lg" style={{ height: "0%" }} />
            </div>
            <span className="text-[11px] font-semibold text-text-muted mt-2">After</span>
            <span className="text-[11px] font-bold text-brand">$1,760</span>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-text-muted uppercase tracking-wider font-medium">Annual savings</p>
            <span ref={savingsRef} className="text-lg font-black text-text-primary">$0</span>
          </div>
          <span className="text-[10px] text-text-muted">per household avg.</span>
        </div>
      </div>

      {/* ── Card 2: Federal Tax Credit ── */}
      <div className="rounded-2xl border border-border bg-white p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center">
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
          <span ref={taxRef} className="text-5xl font-black text-text-primary">$0</span>
          <span className="text-sm text-text-muted mt-1">per household</span>
        </div>

        {/* Info rows */}
        <div className="border-t border-border pt-4 space-y-3">
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-brand shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-xs text-text-secondary">Inflation Reduction Act, Sec. 25C</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-brand shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-xs text-text-secondary">ENERGY STAR® Certified</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-brand shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-xs text-text-secondary">Available through 2032</span>
          </div>
        </div>
      </div>

      {/* ── Card 3: ROI Timeline ── */}
      <div className="rounded-2xl border border-border bg-white p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center">
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
        <div className="flex-1 space-y-0">
          {[
            { year: "Year 1", label: "Tax credit offsets cost", amount: "−$3,200" },
            { year: "Year 3–5", label: "Break-even point reached", amount: "±$0" },
            { year: "Year 10+", label: "Cumulative savings grow", amount: "+$15,000+" },
          ].map((step, i) => (
            <div key={step.year} className="flex gap-3">
              {/* Rail */}
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${i === 2 ? "bg-brand" : "bg-gray-300"} shrink-0 mt-1.5`} />
                {i < 2 && <div className="w-px flex-1 bg-gray-200 my-1" />}
              </div>
              {/* Content */}
              <div className={`flex-1 ${i < 2 ? "pb-5" : ""}`}>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold text-text-primary">{step.year}</span>
                  <span className="text-xs font-bold text-brand">{step.amount}</span>
                </div>
                <p className="text-xs text-text-muted mt-0.5">{step.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-text-muted uppercase tracking-wider font-medium">Average savings</p>
            <span className="text-lg font-black text-text-primary">$1,500–2,500</span>
          </div>
          <span className="text-[10px] text-text-muted">per year</span>
        </div>
      </div>
    </div>
  );
}
