"use client";
import Image from "next/image";
import { reviews } from "@/data/reviews";
import { SectionTitle, ServiceIcons } from "@/components/ui";

export default function ReviewsSection({ showServiceIcons = true }: { showServiceIcons?: boolean }) {
  return (
    <section className="py-28 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">What Homeowners Say</h2>
          <p className="text-sm text-text-muted">Trusted by families across New England</p>
        </div>
      </div>
      {/* Horizontal scrolling reviews — full-bleed */}
      <div
        className="flex gap-5 overflow-x-auto py-4 cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollSnapType: "x proximity",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "max(1rem, calc((100vw - 80rem) / 2 + 1.5rem))",
          paddingRight: "max(1rem, calc((100vw - 80rem) / 2 + 1.5rem))",
        }}
      >
        {reviews.map((r, idx) => (
          <div key={r.name} className="shrink-0 w-[320px] snap-start bg-warm-gray rounded-xl border border-border p-6 relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            {/* Quote icon */}
            <svg className="absolute top-4 right-4 w-8 h-8 text-brand/10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.277-.566-2.917-1.679zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.277-.566-2.917-1.679z" />
            </svg>
            {/* 5 glowing stars */}
            <div className="flex gap-1 mb-3">
              {[0, 1, 2, 3, 4].map((n) => (
                <svg key={n} className="w-5 h-5" viewBox="0 0 20 20" fill="none" style={{ filter: "drop-shadow(0 0 4px rgba(250,190,50,0.6)) drop-shadow(0 0 10px rgba(250,190,50,0.3))" }}>
                  <defs>
                    <linearGradient id={`star-rv-${idx}-${n}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fcd34d" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill={`url(#star-rv-${idx}-${n})`} />
                </svg>
              ))}
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <Image src={r.avatar} alt={r.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
              <div>
                <span className="text-sm font-semibold text-text-primary block">{r.name}</span>
                <span className="text-[11px] text-text-muted">{r.loc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showServiceIcons && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
          <SectionTitle title="Exceptional Service in Massachusetts" subtitle="From consultation to installation, we're with you every step." />
          <ServiceIcons />
        </div>
      )}
    </section>
  );
}
