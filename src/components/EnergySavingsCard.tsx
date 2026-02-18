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

    // Animate the savings number
    const obj = { val: 0 };
    anime({
      targets: obj,
      val: 45,
      duration: 2000,
      easing: "easeOutExpo",
      update: () => {
        if (pctRef.current) pctRef.current.textContent = `${Math.round(obj.val)}%`;
      },
    });

    // Animate the cost bars via refs
    if (beforeRef.current) {
      anime({ targets: beforeRef.current, height: ["0%", "80%"], duration: 1400, easing: "easeOutExpo", delay: 200 });
    }
    if (afterRef.current) {
      anime({ targets: afterRef.current, height: ["0%", "38%"], duration: 1400, easing: "easeOutExpo", delay: 400 });
    }

    // Animate the tax credit
    const taxObj = { val: 0 };
    anime({
      targets: taxObj,
      val: 3200,
      duration: 1800,
      easing: "easeOutExpo",
      delay: 300,
      update: () => {
        if (taxRef.current) {
          const v = Math.round(taxObj.val);
          taxRef.current.textContent = `$${v.toLocaleString("en-US")}`;
        }
      },
    });

    // Animate annual savings
    const savObj = { val: 0 };
    anime({
      targets: savObj,
      val: 2100,
      duration: 1800,
      easing: "easeOutExpo",
      delay: 400,
      update: () => {
        if (savingsRef.current) {
          const v = Math.round(savObj.val);
          savingsRef.current.textContent = `$${v.toLocaleString("en-US")}`;
        }
      },
    });
  }, [triggered]);

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-5">

      {/* ── Card 1: Energy Savings ── */}
      <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-sm">
        {/* Colored header strip */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 px-6 pt-6 pb-5">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Energy Savings</h4>
              <p className="text-xs text-white/70">Heating & cooling reduction</p>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="px-6 py-6">
          {/* Bar chart with labels */}
          <div className="flex justify-center gap-6 h-48 mb-5">
            {/* Before bar */}
            <div className="flex flex-col items-center w-20 h-full">
              <div className="w-full flex-1 bg-red-50 rounded-xl relative overflow-hidden border border-red-100">
                <div
                  ref={beforeRef}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 to-red-400 rounded-b-xl"
                  style={{ height: "0%" }}
                />
                {/* Dollar label on bar */}
                <div className="absolute top-2 left-0 right-0 text-center">
                  <span className="text-[11px] font-bold text-red-700/60">$3,200</span>
                  <p className="text-[9px] text-red-600/50 font-medium">/year</p>
                </div>
              </div>
              <div className="text-center mt-2">
                <span className="text-xs font-bold text-red-600">Before</span>
                <p className="text-[10px] text-text-muted leading-tight">Standard<br/>windows</p>
              </div>
            </div>

            {/* Arrow indicator */}
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-10 h-10 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <span ref={pctRef} className="text-2xl font-black text-green-600">0%</span>
              <span className="text-[10px] font-semibold text-green-600/70 uppercase tracking-wider">Less</span>
            </div>

            {/* After bar */}
            <div className="flex flex-col items-center w-20 h-full">
              <div className="w-full flex-1 bg-green-50 rounded-xl relative overflow-hidden border border-green-100">
                <div
                  ref={afterRef}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-green-500 rounded-b-xl"
                  style={{ height: "0%" }}
                />
                <div className="absolute top-2 left-0 right-0 text-center">
                  <span className="text-[11px] font-bold text-green-700/60">$1,760</span>
                  <p className="text-[9px] text-green-600/50 font-medium">/year</p>
                </div>
              </div>
              <div className="text-center mt-2">
                <span className="text-xs font-bold text-green-600">After</span>
                <p className="text-[10px] text-text-muted leading-tight">DECA<br/>windows</p>
              </div>
            </div>
          </div>

          {/* Bottom stat highlight */}
          <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-green-700/60 font-medium">Annual savings</p>
              <span ref={savingsRef} className="text-xl font-black text-green-700">$0</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Card 2: Federal Tax Credit ── */}
      <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-sm flex flex-col">
        {/* Colored header strip */}
        <div className="bg-gradient-to-br from-brand to-brand-dark px-6 pt-6 pb-5 shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Federal Tax Credit</h4>
              <p className="text-xs text-white/70">Energy-efficient windows</p>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="px-6 py-6 flex flex-col flex-1">
          {/* Big number with visual context */}
          <div className="flex-1 flex flex-col items-center justify-center py-2">
            <span className="text-xs font-bold text-brand/50 uppercase tracking-[0.2em] mb-2">Up to</span>
            <div className="relative">
              <span ref={taxRef} className="text-5xl font-black text-brand">$0</span>
              {/* Decorative ring behind number */}
              <div className="absolute -inset-4 -z-10 bg-brand/[0.04] rounded-full" />
            </div>
            <span className="text-sm font-semibold text-text-muted mt-2">per household</span>
          </div>

          {/* Info badges */}
          <div className="space-y-2.5">
            <div className="bg-brand/[0.04] border border-brand/10 rounded-xl px-4 py-2.5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">Inflation Reduction Act</p>
                <p className="text-[10px] text-text-muted">Sec. 25C — through 2032</p>
              </div>
            </div>
            <div className="bg-brand/[0.04] border border-brand/10 rounded-xl px-4 py-2.5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">ENERGY STAR® Certified</p>
                <p className="text-[10px] text-text-muted">Meets federal requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Card 3: ROI Timeline ── */}
      <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-sm">
        {/* Colored header strip */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 px-6 pt-6 pb-5">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-white">ROI Timeline</h4>
              <p className="text-xs text-white/70">When windows pay for themselves</p>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="px-6 py-6">
          {/* Visual timeline with full-width steps */}
          <div className="space-y-0">
            {[
              { year: "Year 1", label: "Federal tax credit applied", amount: "−$3,200", color: "bg-brand", bgColor: "bg-brand/[0.06]", borderColor: "border-brand/10", textColor: "text-brand", dotBorder: "ring-brand/20" },
              { year: "Year 3–5", label: "Investment break-even point", amount: "±$0", color: "bg-green-500", bgColor: "bg-green-50", borderColor: "border-green-100", textColor: "text-green-600", dotBorder: "ring-green-200" },
              { year: "Year 10+", label: "Pure savings from energy reduction", amount: "+$15k+", color: "bg-amber-500", bgColor: "bg-amber-50", borderColor: "border-amber-100", textColor: "text-amber-600", dotBorder: "ring-amber-200" },
            ].map((step, i) => (
              <div key={step.year} className="flex gap-4">
                {/* Timeline rail */}
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${step.color} ring-4 ${step.dotBorder} shrink-0 mt-4`} />
                  {i < 2 && <div className="w-0.5 flex-1 bg-gray-200 my-1" />}
                </div>

                {/* Step card */}
                <div className={`flex-1 ${step.bgColor} border ${step.borderColor} rounded-xl px-4 py-3.5 ${i < 2 ? "mb-3" : ""}`}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`text-xs font-extrabold ${step.textColor} uppercase tracking-wider`}>{step.year}</span>
                    <span className={`text-sm font-black ${step.textColor}`}>{step.amount}</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{step.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom summary */}
          <div className="mt-5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">$1,500–2,500 <span className="font-normal text-text-muted">/year savings</span></p>
                <p className="text-[10px] text-text-muted">Based on average US household</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
