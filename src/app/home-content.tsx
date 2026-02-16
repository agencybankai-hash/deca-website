"use client";
import { useState } from "react";
import Link from "next/link";
import { Section, SectionTitle, ImagePlaceholder } from "@/components/ui";

/* ===== Feature Tabs Data (matches design concept: Silence, Warmth, Convenience, Lifespan, Safety) ===== */
const featureTabs = [
  {
    id: "silence",
    label: "Silence",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    title: "Engineered for Silence",
    description:
      "Our windows reduce noise by up to 95%, turning your home into a peaceful sanctuary. Robust 2.75-inch frames with six internal chambers effectively dampen sound waves, while advanced EPDM seals create a tight barrier against external noise. Multi-layered glass panels with soundproofing properties and multi-point locking systems ensure exceptional noise reduction.",
  },
  {
    id: "warmth",
    label: "Warmth",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
    title: "Warmth and Comfort",
    description:
      "Reduce heat loss by up to 35% with triple-pane glass and multi-chambered frames. These innovations maintain a comfortable environment regardless of the weather, ensuring energy efficiency even in extreme climates.",
  },
  {
    id: "convenience",
    label: "Convenience",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Convenience Made Simple",
    description:
      "DECA windows and doors are easy to use and require minimal maintenance. Intuitive handles and hardware provide smooth, straightforward operation, while inward-opening windows make cleaning effortless. Ventilation features allow fresh air to flow in while maintaining security and comfort.",
  },
  {
    id: "lifespan",
    label: "Lifespan",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Built to Last",
    description:
      "uPVC frames reinforced with galvanized steel and durable materials ensure a lifespan of over 50 years. Inspired by the reliability of German-engineered windows still in use since 1972, our thick frames and up to 12 locking points guarantee unmatched strength and longevity.",
  },
  {
    id: "safety",
    label: "Safety",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Maximum Protection",
    description:
      "Up to 12 locking points, reinforced frames, and impact-resistant glass provide maximum security for your home. Rest assured, your loved ones are safe, and your home remains protected at all times.",
  },
];

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState("silence");
  const activeFeature = featureTabs.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* ===== FEATURE TABS (matches design: horizontal tabs — Silence, Warmth, Convenience, Lifespan, Safety) ===== */}
      <Section>
        {/* Tab navigation */}
        <div className="flex justify-center gap-1 mb-12 border-b border-border overflow-x-auto">
          {featureTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-blue-accent text-blue-accent"
                  : "border-transparent text-text-muted hover:text-text-primary"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">{activeFeature.title}</h2>
            <p className="text-text-secondary leading-relaxed text-lg mb-6">{activeFeature.description}</p>
            <Link href="/performance" className="inline-flex items-center gap-2 text-blue-accent font-medium hover:text-blue-hover transition-colors">
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <ImagePlaceholder label="Feature Illustration" height="h-80" />
        </div>
      </Section>
    </>
  );
}
