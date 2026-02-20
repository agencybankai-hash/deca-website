import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder, GuideCard } from "@/components/ui";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";
import AnimatedStatCard from "@/components/AnimatedStatCard";

export const metadata: Metadata = {
  title: "Performance & Testing Data | DECA Windows",
  description: "Comprehensive test results proving our windows exceed industry standards by up to 300%. U-values, noise reduction, energy efficiency data.",
  alternates: { canonical: "/performance" },
};

export default function PerformancePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Performance" }]} />

      {/* Hero Section - Design Pattern: Hero with Image */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Proven Results</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">Performance & Testing Data</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Comprehensive test results proving our windows exceed industry standards by up to 300%. Real data, real tests, real performance.
              </p>
              <Link href="/quote" className="inline-block bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded font-semibold transition-colors">
                Get a Quote
              </Link>
            </div>
            <PhotoPlaceholder 
              description="Фото: лаборатория тестирования окон — измерение U-value и воздухопроницаемости" 
              height="h-[400px]" 
            />
          </div>
        </div>
      </section>

      {/* Key Stats - Design Pattern: Stats Grid */}
      <section className="bg-blue-accent py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatedStatCard value="0.10" label="U-Value (lowest)" light />
          <AnimatedStatCard value="500 Pa" label="Water Resistance" light />
          <AnimatedStatCard value="45-50 dB" label="Noise Reduction" light />
          <AnimatedStatCard value="140 mph" label="Wind Rating" light />
        </div>
      </section>

      {/* Performance Categories - Design Pattern: Card Grid */}
      <Section>
        <SectionTitle badge="Categories" title="Performance Areas" subtitle="Every aspect of our windows is tested and proven." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Energy Efficiency", 
              tag: "U: 0.10", 
              desc: "U-values, R-values, SHGC data. Compare to ENERGY STAR.", 
              photoDesc: "Фото: термографический снимок дома — сравнение DECA и обычных окон" 
            },
            { 
              title: "Sound Insulation", 
              tag: "45-50 dB", 
              desc: "STC ratings, decibel reduction. Watch our soundproof test.", 
              photoDesc: "Фото: тест шумоизоляции — измерение децибел до и после установки" 
            },
            { 
              title: "Air & Water Tightness", 
              tag: "500 Pa", 
              desc: "Pressure test results for infiltration resistance.", 
              photoDesc: "Фото: тест воздухонепроницаемости в лаборатории — манометр" 
            },
            { 
              title: "Security", 
              tag: "RC2/RC3", 
              desc: "Multi-point locking, impact resistance data.", 
              photoDesc: "Фото: тест безопасности — имитация взлома окна с многоточечным замком" 
            },
            { 
              title: "Certifications", 
              tag: "NFRC", 
              desc: "NFRC, ENERGY STAR, LEED documentation.", 
              photoDesc: "Фото: сертификаты NFRC и ENERGY STAR рядом с окном DECA" 
            },
            { 
              title: "Durability", 
              tag: "50+ years", 
              desc: "UV resistance, weathering test data.", 
              photoDesc: "Фото: окно DECA после 20 лет эксплуатации — отличное состояние" 
            },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all">
              <PhotoPlaceholder 
                description={c.photoDesc} 
                height="h-40" 
                className="rounded-none border-0" 
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-semibold text-text-primary">{c.title}</h2>
                  <span className="text-[10px] font-semibold text-blue-accent bg-blue-light px-2 py-0.5 rounded">{c.tag}</span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* U-Value Comparison - Design Pattern: Progress Bars */}
      <Section gray>
        <SectionTitle badge="Energy" title="U-Value Comparison" subtitle="Lower U-value = better insulation. See where DECA stands." />
        <div className="max-w-3xl mx-auto space-y-5">
          {[
            { label: "DECA Triple Glazed", value: "0.10-0.12", pct: 95, color: "bg-blue-accent", note: "Passive house ready" },
            { label: "DECA Double Glazed", value: "0.20-0.25", pct: 75, color: "bg-blue-accent/70", note: "Superior efficiency" },
            { label: "ENERGY STAR® Required", value: "≤ 0.30", pct: 60, color: "bg-yellow-500", note: "Minimum certification" },
            { label: "Standard Windows", value: "0.30-0.50", pct: 40, color: "bg-gray-400", note: "Typical market" },
            { label: "Single Glazed", value: "≥ 1.0", pct: 15, color: "bg-red-400", note: "Poor performance" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-text-primary">{item.label}</span>
                <span className="font-bold text-text-primary">{item.value} W/m²K</span>
              </div>
              <div className="h-7 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${item.color} rounded-full flex items-center justify-end pr-3 transition-all duration-500`} 
                  style={{ width: `${item.pct}%` }}
                >
                  <span className="text-white text-xs font-medium">{item.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sound Test - Design Pattern: Two-Column with Image */}
      <Section>
        <SectionTitle badge="Acoustics" title="Sound Insulation Performance" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-text-secondary leading-relaxed mb-6">
              DECA windows achieve STC ratings of 42-50 dB — reducing highway noise, aircraft, and urban traffic to comfortable background levels. Our triple-glazed systems outperform standard windows by 50-80%.
            </p>
            <div className="space-y-3">
              {[
                { label: "Highway traffic (80 dB)", result: "Reduced to 30-35 dB" },
                { label: "Aircraft flyover (90 dB)", result: "Reduced to 40-45 dB" },
                { label: "Construction noise (95 dB)", result: "Reduced to 45-50 dB" },
              ].map((n) => (
                <div 
                  key={n.label} 
                  className="flex justify-between bg-warm-gray rounded-lg px-4 py-3 border border-border hover:bg-blue-light/30 transition-colors"
                >
                  <span className="text-sm text-text-secondary">{n.label}</span>
                  <span className="text-sm font-semibold text-blue-accent">{n.result}</span>
                </div>
              ))}
            </div>
          </div>
          <PhotoPlaceholder 
            description="Фото: звукоизоляционный тест — установка для измерения STC в лаборатории" 
            height="h-80" 
          />
        </div>
      </Section>

      {/* Energy Calculator - Design Pattern: Form Card */}
      <Section gray>
        <div className="bg-white border border-border rounded-xl p-8 md:p-10 text-center max-w-2xl mx-auto shadow-sm hover:shadow-md transition-shadow">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Calculator</span>
          <h3 className="font-bold text-text-primary text-2xl mb-3">Energy Savings Calculator</h3>
          <p className="text-text-secondary mb-6">Calculate how much you could save by upgrading to DECA windows.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-xs text-text-muted block mb-1.5 font-semibold">Current windows</label>
              <select className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white hover:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20 transition-all">
                <option>Single glazed</option>
                <option>Double glazed</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-text-muted block mb-1.5 font-semibold">Number of windows</label>
              <input 
                type="number" 
                defaultValue="10" 
                className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white hover:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20 transition-all" 
              />
            </div>
            <div>
              <label className="text-xs text-text-muted block mb-1.5 font-semibold">Region</label>
              <select className="w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white hover:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20 transition-all">
                <option>Massachusetts</option>
                <option>Connecticut</option>
                <option>New York</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-accent hover:bg-blue-hover text-white px-8 py-3 rounded-md font-semibold transition-colors shadow-sm hover:shadow-md active:scale-95">
            Calculate Savings
          </button>
        </div>
      </Section>

      {/* Expert Guides - Design Pattern: Content Cards */}
      <Section gray>
        <SectionTitle badge="Resources" title="Expert Guides" />
        <div className="grid md:grid-cols-3 gap-6">
          <GuideCard 
            title="Triple vs Double Glazing" 
            desc="Data-driven comparison for your climate zone." 
            href="/blog" 
            photoDesc="Фото: сравнительная диаграмма двойного и тройного стеклопакета" 
          />
          <GuideCard 
            title="Understanding U-Values" 
            desc="What U-values mean and why they matter for your home." 
            href="/blog" 
            photoDesc="Фото: инфографика — шкала U-value от плохого к отличному" 
          />
          <GuideCard 
            title="NFRC Certification Guide" 
            desc="How to read NFRC labels and what they mean." 
            href="/blog" 
            photoDesc="Фото: этикетка NFRC на окне — расшифровка показателей" 
          />
        </div>
      </Section>

      {/* ═══════ REVIEWS ═══════ */}
      <ReviewsSection />

      {/* ═══════ DELIVERY MAP ═══════ */}
      <DeliveryMapSection />

      {/* CTA Block - Design Pattern: Call to Action */}
      <CTAWithDocs
        title="Want the Full Performance Report?"
        subtitle="Get your custom order form, window blueprints, and detailed specification — all prepared for your project."
        btnText="Download Report"
      />

      <StickyCTA />
    </>
  );
}
