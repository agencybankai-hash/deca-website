"use client";
import Link from "next/link";
import { Breadcrumb, PageHero, Section, SectionTitle, StatCard, FeatureCard, CTABlock, ImagePlaceholder } from "@/components/ui";

export default function PerformancePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Performance" }]} />
      <PageHero
        title="Performance & Testing Data"
        subtitle="Comprehensive test results proving our windows exceed industry standards by up to 300%. Real data, real tests, real performance."
        badge="Proven Results"
      />

      {/* Key Stats */}
      <section className="bg-blue-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="0.10" label="U-Value (lowest)" />
          <StatCard value="500 Pa" label="Water Resistance" />
          <StatCard value="45-50 dB" label="Noise Reduction" />
          <StatCard value="140 mph" label="Wind Rating" />
        </div>
      </section>

      {/* Performance Categories */}
      <Section>
        <SectionTitle title="Performance Categories" subtitle="Click any category to see detailed test results and specifications." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Energy Efficiency", desc: "U-values, R-values, SHGC data. Compare to ENERGY STAR and standard windows.", tag: "U: 0.10" },
            { title: "Sound Insulation", desc: "STC ratings, decibel reduction data. Watch our soundproof test video.", tag: "45-50 dB" },
            { title: "Air & Water Tightness", desc: "Pressure test results for air and water infiltration resistance.", tag: "500 Pa" },
            { title: "Security", desc: "Multi-point locking, RC2/RC3 ratings, impact resistance data.", tag: "RC2/RC3" },
            { title: "Certifications", desc: "NFRC, ENERGY STAR, LEED compliance documentation.", tag: "NFRC" },
            { title: "Durability", desc: "50+ year lifespan, UV resistance, weathering test data.", tag: "50+ years" },
          ].map((c) => (
            <FeatureCard key={c.title} title={c.title} description={c.desc} tag={c.tag} />
          ))}
        </div>
      </Section>

      {/* U-Value Comparison */}
      <Section gray>
        <SectionTitle title="U-Value Comparison" subtitle="Lower U-value = better insulation. See where DECA stands." />
        <div className="max-w-3xl mx-auto space-y-5">
          {[
            { label: "DECA Triple Glazed", value: "0.10-0.12", pct: 95, color: "bg-blue-accent", note: "Exceptional — passive house ready" },
            { label: "DECA Double Glazed", value: "0.20-0.25", pct: 75, color: "bg-blue-accent/70", note: "Superior efficiency" },
            { label: "ENERGY STAR\u00ae Required", value: "\u2264 0.30", pct: 60, color: "bg-yellow-500", note: "Minimum certification level" },
            { label: "Standard Windows", value: "0.30-0.50", pct: 40, color: "bg-gray-400", note: "Typical market offering" },
            { label: "Single Glazed", value: "\u2265 1.0", pct: 15, color: "bg-red-400", note: "Poor performance" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-text-primary">{item.label}</span>
                <span className="font-bold text-text-primary">{item.value} W/m\u00b2K</span>
              </div>
              <div className="h-7 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full flex items-center justify-end pr-3`} style={{ width: `${item.pct}%` }}>
                  <span className="text-white text-xs font-medium">{item.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Energy Calculator */}
      <Section>
        <div className="bg-blue-light border border-blue-accent/20 rounded-xl p-8 md:p-10 text-center max-w-2xl mx-auto">
          <h3 className="font-bold text-text-primary text-2xl mb-3">Energy Savings Calculator</h3>
          <p className="text-text-secondary mb-6">Calculate how much you could save by upgrading to DECA energy-efficient windows.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-xs text-text-muted block mb-1.5">Current windows</label>
              <select className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white">
                <option>Single glazed</option><option>Double glazed</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-text-muted block mb-1.5">Number of windows</label>
              <input type="number" defaultValue="10" className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white" />
            </div>
            <div>
              <label className="text-xs text-text-muted block mb-1.5">Region</label>
              <select className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white">
                <option>Massachusetts</option><option>Connecticut</option><option>New York</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-accent hover:bg-blue-hover text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Calculate Savings
          </button>
        </div>
      </Section>

      <CTABlock title="Want the Full Performance Report?" subtitle="Download our comprehensive test data or schedule a consultation." btnText="Get a Quote" />
    </>
  );
}
