"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function EnergySavingsCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !triggered) setTriggered(true); },
      { threshold: 0.3 }
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
        const el = document.getElementById("savings-pct");
        if (el) el.textContent = `${Math.round(obj.val)}%`;
      },
    });

    // Animate the cost bars
    anime({ targets: "#cost-before", height: ["0%", "85%"], duration: 1200, easing: "easeOutExpo", delay: 200 });
    anime({ targets: "#cost-after", height: ["0%", "40%"], duration: 1200, easing: "easeOutExpo", delay: 400 });

    // Animate the tax credit
    const taxObj = { val: 0 };
    anime({
      targets: taxObj,
      val: 3200,
      duration: 1800,
      easing: "easeOutExpo",
      delay: 300,
      update: () => {
        const el = document.getElementById("tax-credit");
        if (el) el.textContent = `$${Math.round(taxObj.val).toLocaleString()}`;
      },
    });
  }, [triggered]);

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6">
      {/* Card 1: Energy savings with bar chart */}
      <div className="bg-white rounded-2xl border border-border p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-text-primary mb-1">Energy Savings</h4>
        <p className="text-sm text-text-muted mb-6">Average heating & cooling reduction</p>

        {/* Bar chart */}
        <div className="flex items-end justify-center gap-6 h-36 w-full">
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full max-w-[60px] h-full bg-gray-100 rounded-lg relative overflow-hidden">
              <div id="cost-before" className="absolute bottom-0 left-0 right-0 bg-red-400/80 rounded-lg" style={{ height: "0%" }} />
            </div>
            <span className="text-xs font-semibold text-text-muted">Before</span>
          </div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full max-w-[60px] h-full bg-gray-100 rounded-lg relative overflow-hidden">
              <div id="cost-after" className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-lg" style={{ height: "0%" }} />
            </div>
            <span className="text-xs font-semibold text-text-muted">After</span>
          </div>
        </div>

        <div className="mt-4">
          <span id="savings-pct" className="text-4xl font-bold text-green-600">0%</span>
          <p className="text-xs text-text-muted mt-1">lower energy bills</p>
        </div>
      </div>

      {/* Card 2: Tax credit */}
      <div className="bg-white rounded-2xl border border-border p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-text-primary mb-1">Federal Tax Credit</h4>
        <p className="text-sm text-text-muted mb-6">Available for energy-efficient windows</p>

        <div className="flex-1 flex flex-col items-center justify-center">
          <span className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">Up to</span>
          <span id="tax-credit" className="text-5xl font-bold text-brand">$0</span>
          <p className="text-sm text-text-muted mt-3 leading-relaxed">
            per household under the<br />Inflation Reduction Act
          </p>
        </div>
      </div>

      {/* Card 3: ROI timeline */}
      <div className="bg-white rounded-2xl border border-border p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-text-primary mb-1">ROI Timeline</h4>
        <p className="text-sm text-text-muted mb-6">When windows pay for themselves</p>

        <div className="flex-1 flex flex-col items-center justify-center w-full">
          {/* Visual timeline */}
          <div className="relative w-full max-w-[200px]">
            {[
              { year: "Year 1", label: "Tax credit applied", color: "bg-brand" },
              { year: "Year 3-5", label: "Break-even point", color: "bg-green-500" },
              { year: "Year 10+", label: "Pure savings", color: "bg-amber-500" },
            ].map((step, i) => (
              <div key={step.year} className="flex items-start gap-3 mb-4 last:mb-0 text-left">
                <div className="flex flex-col items-center">
                  <div className={`w-3.5 h-3.5 rounded-full ${step.color} shrink-0 mt-0.5`} />
                  {i < 2 && <div className="w-0.5 h-6 bg-gray-200" />}
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">{step.year}</p>
                  <p className="text-xs text-text-muted">{step.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border w-full">
            <p className="text-sm text-text-secondary">
              <span className="font-bold text-text-primary">$1,500–2,500</span>/year savings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
