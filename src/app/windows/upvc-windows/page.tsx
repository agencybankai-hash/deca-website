import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, CTABlock, PhotoPlaceholder, ServiceIcons, GuideCard, StatCard } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "uPVC Vinyl Windows | Energy Efficient European Windows | DECA",
  description: "Premium uPVC vinyl windows with exceptional energy efficiency. 6-chamber profile, triple-pane glazing, U-values as low as 0.10, and 50+ year lifespan. Manufactured in Massachusetts.",
  alternates: { canonical: "/windows/upvc-windows" },
};

export default function UPVCWindowsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Windows", href: "/windows" }, { label: "uPVC Windows" }]} />

      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Energy Efficient</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">uPVC Vinyl Windows</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                European excellence in energy efficiency and durability. 6-chamber profile, triple-pane glazing, and U-values as low as 0.10 W/m²K — with a 50+ year lifespan.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded font-semibold transition-colors">Get Custom Quote</Link>
                <Link href="/tilt-turn" className="border border-border text-text-primary hover:border-blue-accent/30 px-7 py-3.5 rounded font-semibold transition-colors">View Tilt & Turn</Link>
              </div>
            </div>
            <PhotoPlaceholder description="Фото: uPVC окно DECA в интерьере — белый профиль, тройное остекление, вид на сад" height="h-[450px]" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-warm-gray py-8 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="50+" label="Year Lifespan" />
          <StatCard value="0.10" label="Lowest U-Value" />
          <StatCard value="70mm" label="Profile Depth" />
          <StatCard value="6" label="Chamber Design" />
        </div>
      </section>

      {/* What is uPVC */}
      <Section>
        <SectionTitle badge="Technology" title="What is uPVC?" subtitle="The gold standard material for European window manufacturing." />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-text-secondary leading-relaxed mb-6">
              uPVC (unplasticized polyvinyl chloride) is the gold standard material for European window manufacturing. Unlike standard vinyl or aluminum, uPVC combines exceptional thermal insulation properties with durability, low maintenance, and environmental sustainability.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              DECA's uPVC windows are engineered to European standards and manufactured with precision in Massachusetts, delivering performance that rivals imported European products at factory-direct pricing.
            </p>
            <h3 className="text-xl font-bold text-text-primary mb-3">Why uPVC Outperforms Other Materials</h3>
            <p className="text-text-secondary leading-relaxed">
              uPVC's crystalline structure creates superior thermal barriers compared to traditional vinyl. The material naturally resists temperature fluctuations, meaning your windows maintain structural integrity and sealing properties across extreme seasonal changes.
            </p>
          </div>
          <PhotoPlaceholder description="Фото: разрез uPVC профиля DECA — видны 6 камер, стальное армирование, уплотнители EPDM" height="h-96" />
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section gray>
        <SectionTitle badge="DECA 70 Series" title="Technical Specifications" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            {[
              ["Profile Depth", "70mm (2.76 inches)"],
              ["Material", "Virgin uPVC + galvanized steel"],
              ["Chamber Count", "5-6 chambers"],
              ["Wall Thickness", "2.8mm (Class A)"],
              ["Glass Package", "Triple-pane, argon-filled, 41mm"],
              ["U-Value Range", "0.10-0.25 W/m²K"],
              ["R-Value", "Up to 7.7"],
              ["Sound Insulation", "STC 42-50 dB"],
              ["Air Leakage", "<0.30 CFM/ft²"],
              ["Lock Points", "8-12 multi-point"],
              ["Security Rating", "RC2/RC3 certified"],
              ["Hardware", "Roto / Siegenia (Germany)"],
              ["Warranty", "15yr frame / 10yr glass / 5yr hardware"],
              ["Lifespan", "50+ years"],
            ].map(([label, value], i) => (
              <div key={label} className={`flex justify-between px-6 py-3.5 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
                <span className="text-sm font-medium text-text-secondary">{label}</span>
                <span className="text-sm text-text-primary font-semibold">{value}</span>
              </div>
            ))}
          </div>
          <PhotoPlaceholder description="Фото: 3D-рендер разреза uPVC профиля DECA 70 серии с обозначениями компонентов" height="h-[500px]" />
        </div>
      </Section>

      {/* Benefits with FeatureCards */}
      <Section>
        <SectionTitle badge="Benefits" title="Key Benefits of DECA uPVC Windows" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Energy Efficiency", desc: "U-values as low as 0.10 reduce heating/cooling costs by 40-50%. Triple-pane glazing with warm-edge spacers.", photoDesc: "Фото: термографический снимок — сравнение uPVC и обычного окна" },
            { title: "Durability & Longevity", desc: "50+ year lifespan with galvanized steel reinforcement. UV-resistant — no chalking or discoloration.", photoDesc: "Фото: uPVC окно после 20 лет эксплуатации — идеальное состояние" },
            { title: "Low Maintenance", desc: "No painting, staining, or sealing. Simple wipe with mild soap maintains pristine appearance.", photoDesc: "Фото: уход за uPVC окном — протирка профиля тканью" },
            { title: "Sound Insulation", desc: "STC 42-50 dB blocks highway noise, aircraft, and urban traffic. Ideal near roads and airports.", photoDesc: "Фото: диаграмма шумоизоляции — до и после установки uPVC окон" },
            { title: "Multi-Point Security", desc: "8-12 locking points with RC2/RC3 certification. Virtually break-in resistant construction.", photoDesc: "Фото: многоточечный замок uPVC окна — все точки запирания" },
            { title: "Factory-Direct Pricing", desc: "Manufactured in Massachusetts. European performance at American pricing — no import markups.", photoDesc: "Фото: производственная линия DECA — сборка uPVC окон" },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all">
              <PhotoPlaceholder description={b.photoDesc} height="h-40" className="rounded-none border-0" />
              <div className="p-5">
                <h4 className="font-semibold text-text-primary mb-2">{b.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Glazing Comparison */}
      <Section gray>
        <SectionTitle badge="Glass Options" title="Glazing Configuration Comparison" />
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Metric</th>
                <th className="px-5 py-3.5 text-center font-medium">Double (Standard)</th>
                <th className="px-5 py-3.5 text-center font-medium">Double Laminated</th>
                <th className="px-5 py-3.5 text-center font-medium bg-blue-accent">Triple ★ Recommended</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["U-Factor", "0.26", "0.18", "0.13"],
                ["R-Value", "4.0", "5.0", "7.7"],
                ["SHGC", "0.71", "0.60", "0.28-0.60"],
                ["Sound (STC)", "32 dB", "40 dB", "42-50 dB"],
                ["Argon Fill", "No", "No", "Yes (both)"],
                ["Condensation", "Higher risk", "Moderate", "Minimal"],
                ["Best For", "Mild climates", "Moderate", "Cold (North) ★"],
              ].map(([label, ...vals], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-5 py-3.5 font-medium text-text-secondary">{label}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={`px-5 py-3.5 text-center ${j === 2 ? "font-semibold text-blue-accent" : "text-text-secondary"}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Colors */}
      <Section>
        <SectionTitle badge="Customization" title="50+ Color & Finish Options" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">RAL Powder Coating</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Choose from over 50 RAL colors. UV-stable powder coating ensures color consistency and durability for 50+ years without fading. Wood-grain laminate finishes also available.
            </p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { name: "White", color: "#FFFFFF" }, { name: "Cream", color: "#F5F0E1" },
                { name: "Light Gray", color: "#C4C4C4" }, { name: "Anthracite", color: "#3C3C3C" },
                { name: "Dark Brown", color: "#4A2E1C" }, { name: "Golden Oak", color: "#B8860B" },
                { name: "Mahogany", color: "#6B3A2A" }, { name: "Black", color: "#1A1A1A" },
              ].map((c) => (
                <div key={c.name} className="text-center">
                  <div className="w-full aspect-square rounded-lg border border-border mb-1" style={{ backgroundColor: c.color }} />
                  <span className="text-[10px] text-text-muted">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
          <PhotoPlaceholder description="Фото: образцы цветов uPVC профилей — веер RAL палитры и ламинация под дерево" height="h-80" />
        </div>
      </Section>

      {/* Material Comparison */}
      <Section gray>
        <SectionTitle title="uPVC vs. Aluminum vs. Standard Vinyl" />
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Feature</th>
                <th className="px-5 py-3.5 text-center font-medium bg-blue-accent">DECA uPVC ★</th>
                <th className="px-5 py-3.5 text-center font-medium">Aluminum</th>
                <th className="px-5 py-3.5 text-center font-medium">Standard Vinyl</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["U-Value", "0.10-0.25", "0.30-0.50", "0.25-0.35"],
                ["Sound (STC)", "42-50 dB", "28-35 dB", "32-38 dB"],
                ["Lifespan", "50+ years", "30-40 years", "25-35 years"],
                ["Maintenance", "Wash only", "Periodic caulking", "Minimal"],
                ["Colors", "50+ RAL", "10-15", "5-10"],
                ["Security", "RC2/RC3", "Limited", "RC1"],
                ["Cold Climate", "Optimal", "Conducts cold", "Good"],
              ].map(([label, ...vals], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-5 py-3.5 font-medium text-text-secondary">{label}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={`px-5 py-3.5 text-center ${j === 0 ? "font-semibold text-blue-accent" : "text-text-secondary"}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Service Icons */}
      <Section>
        <SectionTitle title="Exceptional Service in Massachusetts" />
        <ServiceIcons />
      </Section>

      {/* Expert Guides */}
      <Section gray>
        <SectionTitle badge="Resources" title="Expert Guides" />
        <div className="grid md:grid-cols-3 gap-6">
          <GuideCard title="uPVC vs Aluminum Windows" desc="Which material is right for your project? A comprehensive comparison." href="/windows/aluminum-windows" photoDesc="Фото: сравнение разрезов uPVC и алюминиевого профиля" />
          <GuideCard title="Triple vs Double Glazing" desc="Data-driven comparison for your climate." href="/blog" photoDesc="Фото: сравнительная диаграмма двойного и тройного стеклопакета" />
          <GuideCard title="Energy Efficiency Standards" desc="NFRC, ENERGY STAR, and performance testing explained." href="/performance" photoDesc="Фото: сертификат NFRC и логотип ENERGY STAR" />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            ["Are uPVC windows prone to warping or discoloration?", "No. DECA's virgin uPVC compound is engineered for dimensional stability across -30°F to 140°F. UV-protective coatings maintain appearance for 50+ years without yellowing or warping."],
            ["How do uPVC windows compare to European imports?", "DECA uPVC windows match or exceed European standards — same German hardware, comparable thermal designs — but manufactured in MA at 30-40% lower cost with local warranties."],
            ["What energy savings can I expect?", "Homeowners typically save 40-50% on heating/cooling. A typical 2,500 sq ft home saves $1,500-2,500 annually. Federal tax credits up to $3,200 available."],
            ["Can I customize size, shape, and color?", "Absolutely. Every window is made to order. Arched, circular, triangular, any RAL color. Lead time is 4-6 weeks."],
            ["How long do uPVC windows last?", "50+ years with minimal maintenance (cleaning 2-3x yearly). 15-year frame warranty, 10-year glass, 5-year hardware."],
            ["Do you offer installation?", "Yes. Professional installation across New England through our field team and vetted local contractors."],
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

      <CTABlock title="Ready for Premium uPVC Windows?" subtitle="Any size, color, or configuration. Factory-direct pricing, domestic warranty." btnText="Get Free Custom Quote" variant="blue" />
    </>
  );
}
