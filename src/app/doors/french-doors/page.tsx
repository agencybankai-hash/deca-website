import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder, GuideCard, StatCard, ServiceIcons } from "@/components/ui";
import { FrenchDoorConfigurator } from "@/components/ProductConfigurator";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "French Doors | Double Swing European Doors | DECA Windows",
  description: "Classic European-style French swing doors with dual openings, minimal profiles, and premium aesthetics. Energy efficient with multi-point locking.",
  alternates: { canonical: "/doors/french-doors" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What are the opening modes for French doors?", "acceptedAnswer": { "@type": "Answer", "text": "DECA French doors feature hinged swing operation with 45-degree arc opening. Both doors swing fully open for 100% clear passage and unobstructed airflow. Optional foot bolts hold doors open in wind. Single and double configurations are available." } },
    { "@type": "Question", "name": "What sizes are available for French doors?", "acceptedAnswer": { "@type": "Answer", "text": "Single French doors range from 32-42 inches wide. Double French doors (the classic configuration) range from 60-72 inches total width. Custom sizes are available. All doors are 80 inches standard height, with custom heights up to 108 inches." } },
    { "@type": "Question", "name": "What glass options do you offer for French doors?", "acceptedAnswer": { "@type": "Answer", "text": "Choose from clear, frosted, decorative, textured, or laminated tempered glass. All glass is insulated with argon fill for energy efficiency. Triple-glazing achieves U-values of 0.9-1.3 W/m²K, meeting ENERGY STAR and building codes." } },
    { "@type": "Question", "name": "Are French doors weatherproof in cold climates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. DECA French doors use compression seals and EPDM gaskets to create watertight, airtight barriers. Triple-glazed insulated units with thermal breaks prevent condensation and drafts even in cold climates like New England winters." } },
  ],
};

export default function FrenchDoorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb items={[{ label: "Doors", href: "/doors" }, { label: "French Doors" }]} />

      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Classic Style</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">French Doors</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Elegant, functional, and classically beautiful. Flood interiors with light while creating seamless transitions to outdoor spaces. Available in single or double configurations.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded font-semibold transition-colors">Get Custom Quote</Link>
                <Link href="/doors" className="border border-border text-text-primary hover:border-blue-accent/30 px-7 py-3.5 rounded font-semibold transition-colors">All Doors</Link>
              </div>
            </div>
            <PhotoPlaceholder description="Фото: французские двери DECA в интерьере — двустворчатые, полностью открыты, вид на террасу и сад" height="h-[450px]" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-warm-gray py-8 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="100%" label="Opening Width" />
          <StatCard value="0.9" label="Best U-Value" />
          <StatCard value="5" label="Lock Points" />
          <StatCard value="50+" label="Year Lifespan" />
        </div>
      </section>

      {/* Configurator */}
      <FrenchDoorConfigurator />

      {/* Benefits */}
      <Section>
        <SectionTitle badge="Benefits" title="Why French Doors?" subtitle="Elegance, light, and seamless indoor-outdoor transitions." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Maximum Natural Light", desc: "Full-height glass panes flood interiors with daylight, reducing artificial lighting needs.", photoDesc: "Фото: гостиная залитая светом через французские двери" },
            { title: "Unobstructed Passage", desc: "Both doors swing fully open — 100% clear passage. Move furniture, enjoy full airflow.", photoDesc: "Фото: полностью открытые французские двери — свободный проход на террасу" },
            { title: "Visual Elegance", desc: "Symmetrical glass-paned design is timelessly beautiful. Works in any architectural style.", photoDesc: "Фото: французские двери в классическом интерьере — симметрия и элегантность" },
            { title: "Superior Airflow", desc: "Both doors create cross-ventilation. Cool homes naturally with fresh air circulation.", photoDesc: "Фото: открытые французские двери — ветер и свежий воздух в комнате" },
            { title: "Mechanical Simplicity", desc: "Hinged mechanism is reliable for decades. No tracks to clean, no rollers to fail.", photoDesc: "Фото: петли французской двери — надёжный механизм" },
            { title: "Flexible Configurations", desc: "Single, double, triple, with sidelights and transoms. Fully customizable.", photoDesc: "Фото: различные конфигурации французских дверей — от одинарной до тройной" },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all">
              <PhotoPlaceholder description={b.photoDesc} height="h-40" className="rounded-none border-0" />
              <div className="p-5">
                <h2 className="font-semibold text-text-primary mb-2">{b.title}</h2>
                <p className="text-sm text-text-muted leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Configurations */}
      <Section gray>
        <SectionTitle badge="Configurations" title="Opening Options" subtitle="Flexible designs that match your space and aesthetic." />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Single French Door", desc: "One-panel swing for interior passages and narrow openings. 36-42\" widths.", photoDesc: "Фото: одинарная французская дверь — вид из коридора" },
            { name: "Double French Doors", desc: "Two matching doors swing open from center. 60-72\" total. Classic choice.", photoDesc: "Фото: двойные французские двери — симметричный вход на террасу" },
            { name: "With Sidelights", desc: "Pair flanked by fixed glass panels. Maximum light and architectural presence.", photoDesc: "Фото: двойные французские двери с боковыми стеклянными панелями" },
            { name: "With Transom", desc: "Fixed transom window above extends height. Additional light and ventilation.", photoDesc: "Фото: французские двери с фрамугой сверху — высокий потолок" },
          ].map((config) => (
            <div key={config.name} className="bg-white rounded-xl border border-border overflow-hidden">
              <PhotoPlaceholder description={config.photoDesc} height="h-48" className="rounded-none border-0" />
              <div className="p-6">
                <h2 className="font-bold text-text-primary text-lg mb-2">{config.name}</h2>
                <p className="text-sm text-text-secondary leading-relaxed">{config.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Specs */}
      <Section>
        <SectionTitle badge="Specifications" title="Technical Data" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            {[
              ["Door Type", "Hinged swing, 45° arc"],
              ["Frame Material", "uPVC, aluminum, or composite"],
              ["Glass Type", "Tempered, insulated, argon fill"],
              ["U-Value", "0.9-1.3 W/m²K"],
              ["Sound Insulation", "STC 30-38 dB"],
              ["Standard Widths", "Single: 32-42\" / Double: 60-72\""],
              ["Lock Points", "3-5 per door"],
              ["Hinge Type", "Concealed or visible"],
              ["Weathersealing", "Compression seals + gaskets"],
              ["Lifespan", "40-50 years"],
            ].map(([label, value], i) => (
              <div key={label} className={`flex justify-between px-6 py-3.5 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
                <span className="text-sm font-medium text-text-secondary">{label}</span>
                <span className="text-sm text-text-primary font-semibold">{value}</span>
              </div>
            ))}
          </div>
          <PhotoPlaceholder description="Фото: разрез рамы французской двери — видны уплотнители, стеклопакет, армирование" height="h-[400px]" />
        </div>
      </Section>

      {/* French vs Sliding */}
      <Section gray>
        <SectionTitle title="French Doors vs. Sliding Doors" />
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Feature</th>
                <th className="px-5 py-3.5 text-center font-medium">French Doors</th>
                <th className="px-5 py-3.5 text-center font-medium">Sliding Doors</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Visual Appeal", "Elegant, symmetrical, timeless", "Contemporary, functional"],
                ["Opening Width", "100% — full open", "50% — one panel slides"],
                ["Mechanism", "Simple hinge", "Track & roller system"],
                ["Maintenance", "Minimal — hinge lube", "Moderate — track cleaning"],
                ["Airflow", "Excellent cross-ventilation", "Good — one side"],
                ["Best For", "Elegance, traditional homes", "Large openings, modern spaces"],
              ].map(([label, french, sliding], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-5 py-3.5 font-medium text-text-secondary">{label}</td>
                  <td className="px-5 py-3.5 text-center text-text-primary">{french}</td>
                  <td className="px-5 py-3.5 text-center text-text-primary">{sliding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <SectionTitle badge="Gallery" title="French Doors in Real Homes" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PhotoPlaceholder description="Фото: белые французские двери в загородном доме — выход в сад" height="h-48" />
          <PhotoPlaceholder description="Фото: антрацитовые французские двери — современный интерьер" height="h-48" />
          <PhotoPlaceholder description="Фото: тройная конфигурация французских дверей — панорамный вид" height="h-48" />
          <PhotoPlaceholder description="Фото: интерьерные французские двери между гостиной и столовой" height="h-48" />
        </div>
      </Section>



      {/* ═══════ REVIEWS ═══════ */}
      <ReviewsSection />

      {/* ═══════ DELIVERY MAP ═══════ */}
      <DeliveryMapSection />

      {/* Expert Guides */}
      <Section>
        <SectionTitle badge="Resources" title="Expert Guides" />
        <div className="grid md:grid-cols-3 gap-6">
          <GuideCard title="Entry & Front Doors" desc="Premium security and design for your main entrance." href="/doors/entry-doors" photoDesc="Фото: парадная входная дверь DECA" />
          <GuideCard title="Sliding Patio Doors" desc="Panoramic openings up to 20 feet wide." href="/sliding-doors" photoDesc="Фото: раздвижная панорамная дверь" />
          <GuideCard title="Door Maintenance Guide" desc="Keep your doors performing beautifully for decades." href="/blog" photoDesc="Фото: обслуживание дверной фурнитуры — смазка петель" />
        </div>
      </Section>

      {/* FAQ */}
      <Section gray>
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            ["Are French doors difficult to operate?", "No. Quality hinges and well-adjusted mechanisms ensure smooth operation. Optional foot bolts hold doors open in wind."],
            ["Can French doors be used in cold climates?", "Absolutely. With insulated glazing and thermal breaks, U-values are competitive with windows. Triple glazing available."],
            ["What glass patterns are available?", "Frosted, decorative, textured, and laminated glass. Preserve elegance while controlling privacy."],
            ["Do French doors meet energy codes?", "Yes. Triple-glazed insulated units achieve U-values of 0.9-1.3, meeting ENERGY STAR and state building codes."],
            ["How do I choose between French and sliding?", "French for elegance and full opening. Sliding for large panoramic openings in contemporary spaces. We'll help you decide."],
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

      <ServiceIcons />

      <CTAWithDocs
        title="Add Elegance with French Doors"
        subtitle="Get your custom order form, door blueprints, and detailed specification — all prepared for your project."
        btnText="Get Custom Quote"
      />

      <StickyCTA />
    </>
  );
}
