import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, CTABlock, PhotoPlaceholder, ServiceIcons, GuideCard, StatCard } from "@/components/ui";
import { WindowConfigurator } from "@/components/ProductConfigurator";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Aluminum Windows | Modern European Design | DECA Windows",
  description: "Contemporary aluminum windows with thermal break technology. Slim profiles, maximum glass area, modern aesthetics. Ideal for commercial and modern residential.",
  alternates: { canonical: "/windows/aluminum-windows" },
};

export default function AluminumWindowsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Windows", href: "/windows" }, { label: "Aluminum Windows" }]} />

      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Modern Design</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">Aluminum Windows</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Contemporary aesthetics meets European engineering. Slim profiles, maximum glass area, and architectural flexibility for modern residential and commercial applications.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded font-semibold transition-colors">Get Custom Quote</Link>
                <Link href="/professionals" className="border border-border text-text-primary hover:border-blue-accent/30 px-7 py-3.5 rounded font-semibold transition-colors">Architect Resources</Link>
              </div>
            </div>
            <PhotoPlaceholder description="Фото: алюминиевое окно DECA в современном доме — тонкие профили, панорамное остекление" height="h-[450px]" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-warm-gray py-8 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="92%" label="Glass Area" />
          <StatCard value="0.20" label="Best U-Value" />
          <StatCard value={'1.75"'} label="Slimmest Profile" />
          <StatCard value="50+" label="Year Lifespan" />
        </div>
      </section>

      {/* Configurator */}
      <WindowConfigurator />

      {/* Why Aluminum */}
      <Section>
        <SectionTitle badge="Advantages" title="Why Choose Aluminum?" subtitle="The cutting edge of modern window design." />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Architectural Freedom", desc: "Thinner profiles (as narrow as 1.75 inches) maximize glass area. Corner-to-corner glass is achievable only with aluminum.", photoDesc: "Фото: угловое остекление алюминиевым профилем — минималистичный дизайн" },
            { title: "Modern Aesthetics", desc: "Crisp lines, precision-welded corners. Matte, brushed, anodized, or powder-coated finishes in unlimited colors.", photoDesc: "Фото: крупный план алюминиевого профиля — тонкая рамка, чистые линии" },
            { title: "Structural Strength", desc: "3-4x stronger than uPVC. Large unsupported spans, heavy tempered glass, minimal deflection.", photoDesc: "Фото: панорамное окно от пола до потолка — алюминиевый каркас" },
            { title: "Commercial Applications", desc: "Storefronts, curtain walls, modular assembly. Commercial-grade systems for retail, office, hospitality.", photoDesc: "Фото: коммерческое здание с алюминиевым фасадным остеклением DECA" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all">
              <PhotoPlaceholder description={item.photoDesc} height="h-48" className="rounded-none border-0" />
              <div className="p-6">
                <h3 className="font-bold text-lg text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Thermal Break */}
      <Section gray>
        <SectionTitle badge="Engineering" title="Thermal Break Technology" subtitle="How DECA achieves energy efficiency with aluminum." />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-text-secondary leading-relaxed mb-6">
              Aluminum conducts heat 200x faster than uPVC. DECA's solution: polyamide thermal breaks — synthetic strips that physically separate interior and exterior frames, interrupting the thermal bridge.
            </p>
            <div className="space-y-4">
              {[
                { step: "1", title: "Polyamide Barrier", desc: "15-25mm strips between exterior and interior aluminum" },
                { step: "2", title: "Thermal Interruption", desc: "Conducts heat 1/200th as efficiently as aluminum" },
                { step: "3", title: "Interior Warmth", desc: "Prevents condensation, improves comfort" },
                { step: "4", title: "Energy Savings", desc: "U-values of 0.20-0.30 with triple glazing" },
              ].map((s) => (
                <div key={s.step} className="flex gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-blue-accent text-white flex items-center justify-center text-sm font-bold">{s.step}</span>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">{s.title}</h4>
                    <p className="text-xs text-text-muted">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PhotoPlaceholder description="Фото: разрез алюминиевого профиля с термомостом — видны полиамидные вставки и камеры" height="h-96" />
        </div>
      </Section>

      {/* Technical Specs */}
      <Section>
        <SectionTitle badge="Specifications" title="Technical Data" />
        <div className="bg-white rounded-xl border border-border overflow-hidden max-w-3xl mx-auto">
          {[
            ["Frame Profile", "50-80mm depth, 1.75-2.25\" slim profiles"],
            ["Material", "6063-T5 aluminum + polyamide thermal breaks"],
            ["Thermal Break", "14-20mm polyamide strips"],
            ["Glass Area", "Up to 92% coverage"],
            ["U-Value", "0.20-0.30 W/m²K (thermally broken)"],
            ["Corner Welding", "Precision 45° mitered corners"],
            ["Lock Points", "6-10 multi-point locking"],
            ["Glass Options", "Double, triple, laminated, tempered"],
            ["Finish Options", "RAL anodized, powder-coat, brushed, matte"],
            ["Fire Rating", "Up to 2-hour rated assemblies"],
          ].map(([label, value], i) => (
            <div key={label} className={`flex justify-between px-6 py-3.5 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
              <span className="text-sm font-medium text-text-secondary">{label}</span>
              <span className="text-sm text-text-primary font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section gray>
        <SectionTitle title="Aluminum vs. uPVC" subtitle="Which is right for your project?" />
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Criterion</th>
                <th className="px-5 py-3.5 text-center font-medium">Aluminum</th>
                <th className="px-5 py-3.5 text-center font-medium">uPVC</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["U-Value", "0.20-0.30", "0.10-0.25"],
                ["Profile Width", "1.75-2.25\" (slim)", "2.75-3.5\""],
                ["Glass Area", "Up to 92%", "Up to 70%"],
                ["Strength", "Superior — large spans", "Good — moderate"],
                ["Aesthetics", "Minimalist, contemporary", "Traditional options"],
                ["Sound Insulation", "32-40 dB", "42-50 dB"],
                ["Cost", "Higher", "Lower"],
                ["Best For", "Modern / Commercial", "Residential"],
              ].map(([label, alum, upvc], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-5 py-3.5 font-medium text-text-secondary">{label}</td>
                  <td className="px-5 py-3.5 text-center text-text-primary">{alum}</td>
                  <td className="px-5 py-3.5 text-center text-text-primary">{upvc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <SectionTitle badge="Gallery" title="Aluminum Windows in Projects" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PhotoPlaceholder description="Фото: современный дом с алюминиевыми окнами от пола до потолка" height="h-48" />
          <PhotoPlaceholder description="Фото: коммерческое здание — фасад с алюминиевым остеклением" height="h-48" />
          <PhotoPlaceholder description="Фото: интерьер лофта с панорамными алюминиевыми окнами" height="h-48" />
          <PhotoPlaceholder description="Фото: угловое остекление алюминиевым профилем — вид снаружи" height="h-48" />
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
          <GuideCard title="uPVC vs Aluminum: Full Guide" desc="Complete material comparison for your project." href="/windows/upvc-windows" photoDesc="Фото: два профиля рядом — uPVC и алюминий" />
          <GuideCard title="Thermal Break Technology" desc="How polyamide strips transform aluminum performance." href="/performance" photoDesc="Фото: схема работы термомоста в алюминиевом профиле" />
          <GuideCard title="Architect Resources" desc="BIM data, specs, and support for professionals." href="/professionals" photoDesc="Фото: архитектор за работой с чертежами окон DECA" />
        </div>
      </Section>

      {/* FAQ */}
      <Section gray>
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            ["Aren't aluminum windows cold and inefficient?", "Not with thermal breaks. DECA's polyamide breaks achieve U-values of 0.20-0.30 — equivalent to uPVC. The key is specifying thermally-broken systems."],
            ["Can aluminum handle large, heavy glass?", "Yes — aluminum's primary advantage. Large tempered panes, full-height glass walls are feasible only with aluminum's strength."],
            ["What about condensation?", "Thermal-break systems keep interior surfaces warm, minimizing condensation. Always specify thermal breaks for heated spaces."],
            ["Are custom colors available?", "Unlimited RAL colors via powder coating, plus anodized finishes. Two-tone configurations with different interior/exterior colors."],
            ["What's the cost difference vs uPVC?", "Typically 20-40% more, but slim profiles maximize glass area and architectural impact often justifies the premium."],
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
        title="Ready for Contemporary Aluminum Windows?"
        subtitle="Get your custom order form, window blueprints, and detailed specification — all prepared for your project."
        btnText="Get Custom Quote"
      />

      <StickyCTA />
    </>
  );
}
