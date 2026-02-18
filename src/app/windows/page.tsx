import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, CTABlock, PhotoPlaceholder, ServiceIcons, GuideCard } from "@/components/ui";
import { WindowConfigurator } from "@/components/ProductConfigurator";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "European-Style Windows | uPVC & Aluminum | DECA Windows",
  description: "Premium tilt & turn, uPVC, and aluminum windows manufactured in Massachusetts. Industry-leading U-values, sound insulation, and security. Factory-direct pricing.",
  alternates: { canonical: "/windows" },
};

export default function WindowsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Windows" }]} />

      {/* Hero — matching Figma Windows page */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Our Products</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">DECA Windows</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                European engineering, manufactured in Massachusetts. Our windows deliver industry-leading thermal performance (U-value 0.10),
                exceptional noise reduction (45-50 dB), and multi-point security — all with factory-direct pricing and a 15-year warranty.
              </p>
              {/* Subcategory links — matches Figma sidebar */}
              <div className="space-y-3">
                {[
                  { href: "/tilt-turn", label: "Tilt & Turn Windows", tag: "Most Popular", desc: "Two opening modes for ventilation, cleaning, and security." },
                  { href: "/windows/upvc-windows", label: "uPVC / Vinyl Windows", tag: "Energy Efficient", desc: "6-chamber profile, exceptional thermal insulation." },
                  { href: "/windows/aluminum-windows", label: "Aluminum Windows", tag: "Modern Design", desc: "Slim profiles, maximum glass area, contemporary aesthetics." },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="group flex items-center gap-4 p-4 bg-warm-gray rounded-xl border border-border hover:border-blue-accent/30 hover:shadow-md transition-all">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-blue-accent/10 flex items-center justify-center group-hover:bg-blue-accent transition-colors">
                      <svg className="w-6 h-6 text-blue-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-text-primary group-hover:text-blue-accent transition-colors">{item.label}</h3>
                        <span className="text-[10px] font-semibold text-blue-accent bg-blue-light px-2 py-0.5 rounded">{item.tag}</span>
                      </div>
                      <p className="text-sm text-text-muted truncate">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <PhotoPlaceholder description="Фото: общий вид коллекции окон DECA — несколько моделей в белом/сером цвете" height="h-[500px]" />
          </div>
        </div>
      </section>

      {/* Configurator */}
      <WindowConfigurator />

      {/* GEALAN Profile Systems */}
      <Section gray>
        <SectionTitle badge="Engineered in Germany" title="GEALAN Profile Systems" subtitle="We build with GEALAN — one of Europe's leading uPVC profile manufacturers with 50+ years of innovation." />
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <PhotoPlaceholder description="Фото: GEALAN-LINEAR профиль — современный угловой дизайн, алюминиевый вид" height="h-64" className="rounded-none border-0" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-lg text-text-primary">GEALAN-LINEAR</h3>
                <span className="text-[9px] font-semibold text-brand bg-brand/10 px-1.5 py-0.5 rounded">Premium</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">Modern angular design with aluminum-like aesthetics. 3-level sealing, narrow visible widths for maximum glass area.</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-warm-gray rounded px-2.5 py-1.5"><span className="font-medium text-text-secondary">U-Factor:</span> <span className="text-text-primary font-semibold">0.14–0.25</span></div>
                <div className="bg-warm-gray rounded px-2.5 py-1.5"><span className="font-medium text-text-secondary">IGU:</span> <span className="text-text-primary font-semibold">0.8″–2.0″</span></div>
                <div className="bg-warm-gray rounded px-2.5 py-1.5"><span className="font-medium text-text-secondary">Max Size:</span> <span className="text-text-primary font-semibold">11′6″ × 11′6″</span></div>
                <div className="bg-warm-gray rounded px-2.5 py-1.5"><span className="font-medium text-text-secondary">Sealing:</span> <span className="text-text-primary font-semibold">3 Levels</span></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <PhotoPlaceholder description="Фото: GEALAN S 8000 профиль — классический 5-6 камерный дизайн, 3 дюйма глубина" height="h-64" className="rounded-none border-0" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-lg text-text-primary">GEALAN S 8000</h3>
                <span className="text-[9px] font-semibold text-brand bg-brand/10 px-1.5 py-0.5 rounded">Popular</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">Classic 5–6 chamber system with 3″ installation depth. Large main chamber for steel stiffeners, elements up to 80″.</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-warm-gray rounded px-2.5 py-1.5"><span className="font-medium text-text-secondary">U-Factor:</span> <span className="text-text-primary font-semibold">0.16–0.27</span></div>
                <div className="bg-warm-gray rounded px-2.5 py-1.5"><span className="font-medium text-text-secondary">IGU:</span> <span className="text-text-primary font-semibold">0.8″–2.0″</span></div>
                <div className="bg-warm-gray rounded px-2.5 py-1.5"><span className="font-medium text-text-secondary">Max Size:</span> <span className="text-text-primary font-semibold">11′6″ × 11′6″</span></div>
                <div className="bg-warm-gray rounded px-2.5 py-1.5"><span className="font-medium text-text-secondary">Chambers:</span> <span className="text-text-primary font-semibold">5–6</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* GEALAN-acrylcolor + components */}
        <div className="bg-white rounded-xl border border-border p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-text-primary mb-1">GEALAN-acrylcolor Surface Technology</h4>
              <p className="text-sm text-text-secondary leading-relaxed">Co-extruded acrylic surface (since 1980) — scratch-resistant, weather-resistant, lightfast, and dirt-resistant. Available in Matte, Smooth, Grained, and RealWood finishes. Over 40 standard colors + 200 RAL custom options.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Multi-Point Locks", desc: "Up to 12 locking points for maximum security", photoDesc: "Фото: крупный план многоточечного замка" },
            { title: "3-Level Sealing", desc: "EPDM triple sealing for air & water tightness", photoDesc: "Фото: крупный план уплотнителей EPDM в профиле" },
            { title: "Glass Packages", desc: "Double and triple glazing, IGU up to 2.0\"", photoDesc: "Фото: разрез стеклопакета — 3 стекла, аргон, дистанционная рамка" },
            { title: "FlexScreen Option", desc: "Virtually invisible spring-steel insect screens", photoDesc: "Фото: FlexScreen москитная сетка — пружинная стальная рамка, вид сбоку" },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-xl border border-border overflow-hidden">
              <PhotoPlaceholder description={c.photoDesc} height="h-32" className="rounded-none border-0" />
              <div className="p-4">
                <h4 className="font-semibold text-sm text-text-primary mb-1">{c.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Window Types Grid — matches Figma */}
      <Section>
        <SectionTitle badge="Configurations" title="Window Types" subtitle="Available in uPVC and aluminum. All types support tilt & turn functionality." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Fixed Window", desc: "Maximum light, no opening mechanism", photoDesc: "Фото/схема: глухое (неоткрывающееся) окно" },
            { name: "Single Casement", desc: "One tilt & turn sash", photoDesc: "Фото/схема: одностворчатое окно с поворотно-откидной створкой" },
            { name: "Double Casement", desc: "Two tilt & turn sashes", photoDesc: "Фото/схема: двустворчатое окно" },
            { name: "Triple Casement", desc: "Three-sash configuration", photoDesc: "Фото/схема: трёхстворчатое окно" },
            { name: "Basement / Hopper", desc: "Top-hinged inward tilt", photoDesc: "Фото/схема: подвальное/откидное окно" },
            { name: "Custom Combo", desc: "Any combination of fixed + operable", photoDesc: "Фото/схема: комбинированное окно — глухая часть + створка" },
          ].map((wt) => (
            <div key={wt.name} className="bg-warm-gray rounded-xl border border-border overflow-hidden hover:shadow-md transition-all">
              <PhotoPlaceholder description={wt.photoDesc} height="h-40" className="rounded-none border-0" />
              <div className="p-4 text-center">
                <h4 className="font-semibold text-text-primary mb-1">{wt.name}</h4>
                <p className="text-xs text-text-muted">{wt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Colors — matches Figma swatches section */}
      <Section gray>
        <SectionTitle badge="Customization" title="Colors That Complement Your Style" subtitle="Choose from over 40 standard colors and 200+ RAL custom options for both interior and exterior finishes." />
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-8">
          {[
            { name: "White", color: "#FFFFFF" }, { name: "Cream", color: "#F5F0E1" },
            { name: "Light Gray", color: "#C4C4C4" }, { name: "Anthracite", color: "#3C3C3C" },
            { name: "Dark Brown", color: "#4A2E1C" }, { name: "Golden Oak", color: "#B8860B" },
            { name: "Mahogany", color: "#6B3A2A" }, { name: "Black", color: "#1A1A1A" },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div className="w-full aspect-square rounded-lg border border-border mb-2" style={{ backgroundColor: c.color }} />
              <span className="text-xs text-text-muted">{c.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-text-muted">Wood-grain laminate finishes also available. <Link href="/quote" className="text-blue-accent hover:text-blue-hover">Contact us for samples →</Link></p>
      </Section>

      {/* Gallery */}
      <Section>
        <SectionTitle badge="Gallery" title="Windows in Real Homes" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PhotoPlaceholder description="Фото: панорамное окно в гостиной с видом на лес" height="h-48" />
          <PhotoPlaceholder description="Фото: кухня с угловым остеклением DECA" height="h-48" />
          <PhotoPlaceholder description="Фото: мансардное окно в спальне" height="h-48" />
          <PhotoPlaceholder description="Фото: фасад коттеджа с окнами DECA разных размеров" height="h-48" />
        </div>
      </Section>



      {/* ═══════ REVIEWS ═══════ */}
      <ReviewsSection />

      {/* ═══════ DELIVERY MAP ═══════ */}
      <DeliveryMapSection />

      {/* Expert Guides */}
      <Section>
        <SectionTitle badge="Resources" title="Expert Guides and Instructions" />
        <div className="grid md:grid-cols-3 gap-6">
          <GuideCard title="How Tilt & Turn Windows Work" desc="Complete guide to the dual-function opening mechanism that defines European windows." href="/blog" photoDesc="Фото: схема работы поворотно-откидного механизма" />
          <GuideCard title="Triple vs Double Glazing" desc="Which glass package is right for your climate? A data-driven comparison." href="/blog" photoDesc="Фото: сравнительная диаграмма двойного и тройного стеклопакета" />
          <GuideCard title="Window Maintenance Guide" desc="Simple steps to keep your DECA windows performing for decades." href="/blog" photoDesc="Фото: уход за окнами — чистка профиля и смазка фурнитуры" />
        </div>
      </Section>

      {/* FAQ */}
      <Section gray>
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "What is the difference between uPVC and aluminum windows?", a: "uPVC windows offer superior thermal insulation and are more affordable. Aluminum windows provide slimmer profiles, larger glass areas, and a more modern aesthetic. Both are available in tilt & turn configuration with the same glazing and hardware options." },
            { q: "Can I get custom sizes and configurations?", a: "Yes. Every DECA window is made to order. We can accommodate virtually any size, shape, or configuration — including arched tops, angled shapes, and multi-unit combinations." },
            { q: "How do tilt & turn windows open?", a: "Tilt & turn windows have two modes controlled by a single handle. Turn the handle 90° to tilt the sash inward from the top for ventilation. Turn it 180° to swing the entire sash inward like a door for full opening and easy cleaning." },
            { q: "What glazing options are available?", a: "We offer double-glazed (U-value 0.25), triple-glazed (U-value 0.10-0.13), and laminated safety glass. All units come with argon fill, Low-E coating, and warm-edge spacer bars as standard." },
          ].map((faq) => (
            <details key={faq.q} className="group bg-white rounded-xl border border-border">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-text-primary font-medium">
                {faq.q}
                <svg className="w-5 h-5 text-text-muted shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-5 text-text-secondary leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </Section>

      <CTAWithDocs
        title="Find Your Perfect Window"
        subtitle="Get your custom order form, window blueprints, and detailed specification — all prepared for your project."
        btnText="Get a Quote"
      />

      <StickyCTA />
    </>
  );
}
