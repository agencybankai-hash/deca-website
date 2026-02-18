import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder, GuideCard, StatCard } from "@/components/ui";
import { EntryDoorConfigurator } from "@/components/ProductConfigurator";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Entry Doors & Front Doors | Secure European Design | DECA Windows",
  description: "Premium entry doors with multi-point locking (5-7 points), RC2/RC3 security, and U-value 0.8-1.2. Sidelights, transoms, custom options.",
  alternates: { canonical: "/doors/entry-doors" },
};

export default function EntryDoorsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Doors", href: "/doors" }, { label: "Entry Doors" }]} />

      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Secure Entry</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">Entry & Front Doors</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                First impressions matter. European-engineered entry doors with multi-point locking, weather seals, and timeless design. Security, thermal performance, and elegance.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded font-semibold transition-colors">Get Custom Quote</Link>
                <Link href="/doors" className="border border-border text-text-primary hover:border-blue-accent/30 px-7 py-3.5 rounded font-semibold transition-colors">All Doors</Link>
              </div>
            </div>
            <PhotoPlaceholder 
              description="Фото: входная дверь DECA — современный дизайн, боковые стеклянные панели, вечернее освещение" 
              height="h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-warm-gray py-8 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="7" label="Lock Points" />
          <StatCard value="RC3" label="Security Rating" />
          <StatCard value="0.8" label="Best U-Value" />
          <StatCard value="50+" label="Year Lifespan" />
        </div>
      </section>

      {/* Configurator */}
      <EntryDoorConfigurator />

      {/* Security */}
      <Section>
        <SectionTitle badge="Security" title="Multi-Point Locking System" subtitle="5-7 lock points engage simultaneously across the entire frame." />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {[
              { title: "Top Lock Points", desc: "Secure upper frame, prevent top prying" },
              { title: "Center Deadbolt", desc: "Primary lock, centrally located" },
              { title: "Bottom Lock Points", desc: "2-3 points secure lower frame against forcing" },
              { title: "Compression Seals", desc: "All lock points compress frame seals when engaged" },
            ].map((lp) => (
              <div key={lp.title} className="flex gap-3 items-start">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-accent/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">{lp.title}</h4>
                  <p className="text-xs text-text-muted">{lp.desc}</p>
                </div>
              </div>
            ))}
            <div className="bg-blue-light rounded-lg p-4 border border-blue-accent/20 mt-4">
              <p className="text-sm font-semibold text-text-primary mb-1">RC2/RC3 Certification</p>
              <p className="text-xs text-text-secondary">RC2 resists 3-5 min of attack; RC3 resists 10+ min. DECA doors available in both.</p>
            </div>
          </div>
          <PhotoPlaceholder 
            description="Фото: схема многоточечного замка входной двери — все точки запирания обозначены" 
            height="h-96"
          />
        </div>
      </Section>

      {/* Technical Specs */}
      <Section gray>
        <SectionTitle badge="Performance" title="Technical Specifications" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            {[
              ["Construction", "Solid core / foam-insulated + steel"],
              ["U-Value", "0.8-1.2 W/m²K"],
              ["Weathersealing", "Triple compression seals"],
              ["Lock Points", "5-7 depending on size"],
              ["Security", "RC2/RC3 certified"],
              ["Width", "32-48\" (custom to 60\")"],
              ["Height", "80\" standard (custom available)"],
              ["Material", "uPVC, aluminum, or composite"],
              ["Glass", "Tempered safety glass"],
              ["Lifespan", "40-50 years"],
            ].map(([label, value], i) => (
              <div key={label} className={`flex justify-between px-6 py-3.5 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
                <span className="text-sm font-medium text-text-secondary">{label}</span>
                <span className="text-sm text-text-primary font-semibold">{value}</span>
              </div>
            ))}
          </div>
          <PhotoPlaceholder 
            description="Фото: входная дверь DECA в разрезе — видна пенная изоляция, стальное армирование, уплотнители" 
            height="h-[420px]"
          />
        </div>
      </Section>

      {/* Design Options */}
      <Section>
        <SectionTitle badge="Customization" title="Design Options" subtitle="Customize your entry to match your home's architecture." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Panel Configurations", desc: "Single, double, triple. Solid or glazed.", photoDesc: "Фото: варианты конфигураций входных дверей — одна, две, три створки" },
            { title: "Sidelights & Transoms", desc: "Fixed glass panels for natural light.", photoDesc: "Фото: входная дверь с боковыми стеклянными панелями и фрамугой сверху" },
            { title: "Glass Styles", desc: "Clear, frosted, decorative, laminated.", photoDesc: "Фото: образцы стёкол для входных дверей — матовое, декоративное, прозрачное" },
            { title: "Hardware Styles", desc: "Contemporary pulls, classic handles, Euro levers.", photoDesc: "Фото: различная фурнитура для входных дверей — ручки, замки, петли" },
            { title: "Colors & Finishes", desc: "50+ RAL colors, wood-grain, anodized.", photoDesc: "Фото: палитра цветов для входных дверей — образцы профилей" },
            { title: "Material Options", desc: "uPVC, aluminum, or composite.", photoDesc: "Фото: три материала входных дверей — uPVC, алюминий, композит — рядом" },
          ].map((opt) => (
            <div key={opt.title} className="bg-warm-gray rounded-xl border border-border overflow-hidden hover:shadow-md transition-all">
              <PhotoPlaceholder 
                description={opt.photoDesc} 
                height="h-36" 
                className="rounded-none border-0"
              />
              <div className="p-4 text-center">
                <h4 className="font-semibold text-text-primary text-sm mb-1">{opt.title}</h4>
                <p className="text-xs text-text-muted">{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section gray>
        <SectionTitle badge="Gallery" title="Entry Doors in Real Homes" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PhotoPlaceholder 
            description="Фото: парадная входная дверь с боковыми панелями — классический стиль" 
            height="h-48"
          />
          <PhotoPlaceholder 
            description="Фото: современная входная дверь — антрацит, минималистичная ручка" 
            height="h-48"
          />
          <PhotoPlaceholder 
            description="Фото: двустворчатая входная дверь с декоративным остеклением" 
            height="h-48"
          />
          <PhotoPlaceholder 
            description="Фото: входная дверь с фрамугой — вечернее освещение крыльца" 
            height="h-48"
          />
        </div>
      </Section>



      {/* ═══════ REVIEWS ═══════ */}
      <ReviewsSection />

      {/* ═══════ DELIVERY MAP ═══════ */}
      <DeliveryMapSection />

      {/* Expert Guides */}
      <Section gray>
        <SectionTitle badge="Resources" title="Expert Guides" />
        <div className="grid md:grid-cols-3 gap-6">
          <GuideCard 
            title="Entry Door Security Guide" 
            desc="Multi-point locking vs deadbolts — a complete comparison." 
            href="/blog" 
            photoDesc="Фото: сравнение многоточечного замка и обычного дедболта"
          />
          <GuideCard 
            title="French Swing Doors" 
            desc="Classic elegance for indoor-outdoor transitions." 
            href="/doors/french-doors" 
            photoDesc="Фото: французские двери в интерьере — свет и простор"
          />
          <GuideCard 
            title="Sliding Patio Doors" 
            desc="Panoramic openings for modern living." 
            href="/sliding-doors" 
            photoDesc="Фото: панорамная раздвижная дверь с видом на террасу"
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            ["How secure are multi-point locking doors?", "Significantly more secure than single deadbolts. 5-7 lock points distribute force across the frame, making forced entry virtually impossible. RC2/RC3 tested."],
            ["Will entry doors reduce energy costs?", "Yes. U-values of 0.8-1.2 (vs 1.5-2.5 standard) typically save $200-400 annually in heating/cooling."],
            ["Can I get sidelights and transoms?", "Absolutely. Fixed glass sidelights and transom windows in matching materials and finishes. All glass is tempered."],
            ["What's the difference between RC2 and RC3?", "RC2: 3-5 min resistance. RC3: 10+ min. RC3 for high-value homes; RC2 meets typical residential needs."],
            ["How long do entry doors last?", "40-50 years with minimal maintenance. Backed by comprehensive DECA warranties."],
          ].map(([q, a]) => (
            <details key={q} className="group bg-white rounded-xl border border-border">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-text-primary font-medium">
                {q}
                <svg className="w-5 h-5 text-text-muted shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-5 text-text-secondary leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </Section>

      <CTAWithDocs
        title="Ready to Upgrade Your Entry?"
        subtitle="Get your custom order form, door blueprints, and detailed specification — all prepared for your project."
        btnText="Get Custom Quote"
      />

      <StickyCTA />
    </>
  );
}
