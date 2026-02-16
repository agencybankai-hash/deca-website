import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, CTABlock, PhotoPlaceholder, ServiceIcons, GuideCard, StatCard } from "@/components/ui";
import { SlidingDoorConfigurator } from "@/components/ProductConfigurator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sliding Door Systems | PSk, Lift & Slide | DECA Windows",
  description: "Three innovative sliding door systems for any application — from standard patio doors to panoramic 20-foot openings. Manufactured in Massachusetts.",
  alternates: { canonical: "/sliding-doors" },
};

export default function SlidingDoorsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Doors", href: "/doors" }, { label: "Sliding Door Systems" }]} />

      {/* Hero Section - Figma Pattern: Hero with Image Right */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Our Products</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">Sliding Door Systems</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Three innovative systems for any application — from standard patio doors to panoramic 20-foot openings. Seamless indoor-outdoor living with European engineering.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded font-semibold transition-colors">Get a Quote</Link>
                <Link href="/doors" className="border border-border text-text-primary hover:border-blue-accent/30 px-7 py-3.5 rounded font-semibold transition-colors">All Doors</Link>
              </div>
            </div>
            <PhotoPlaceholder description="Фото: панорамная раздвижная дверь DECA в современном доме — вид на террасу" height="h-[450px]" />
          </div>
        </div>
      </section>

      {/* Stats Section - Figma Pattern: Stats Bar */}
      <section className="bg-warm-gray py-8 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="21 ft" label="Max Opening Width" />
          <StatCard value="0.15" label="Best U-Factor" />
          <StatCard value="4" label="GEALAN Systems" />
          <StatCard value="50+" label="Year Lifespan" />
        </div>
      </section>

      {/* Configurator */}
      <SlidingDoorConfigurator />

      {/* GEALAN Systems - Detailed */}
      <Section>
        <SectionTitle badge="Engineered in Germany" title="GEALAN Sliding Systems" subtitle="Built on GEALAN profile technology — German-engineered for decades of smooth, reliable performance." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {[
            {
              title: "GEALAN S 9000 Lift & Slide",
              desc: "Premium panoramic system. Threshold-free floor connection for seamless indoor-outdoor living.",
              tag: "Premium",
              photoDesc: "Фото: подъёмно-сдвижная дверь Lift & Slide — панорамное остекление террасы",
              specs: [["Max Size", "21′4\" × 9′"], ["U-Factor", "0.15–0.23"], ["IGU", "0.9\"–2.3\""], ["Threshold", "Flush / barrier-free"]],
            },
            {
              title: "GEALAN-SMOOVIO",
              desc: "Next-generation sliding with impermeable closure. Space-saving design with exceptional thermal performance.",
              tag: "New",
              photoDesc: "Фото: GEALAN-SMOOVIO раздвижная система — компактный дизайн",
              specs: [["Max Size", "13′1\" × 8′"], ["U-Factor", "0.16–0.23"], ["IGU", "0.8\"–2.0\""], ["Closure", "Impermeable"]],
            },
            {
              title: "GEALAN Multi-Slide",
              desc: "Flexible 2–6 panel configurations for maximum opening possibilities. Multiple stacking directions.",
              tag: "Versatile",
              photoDesc: "Фото: GEALAN Multi-Slide — несколько панелей, различные конфигурации открывания",
              specs: [["Max Size", "11′6\" × 8′2\""], ["U-Factor", "0.27–0.35"], ["IGU", "0.3\"–1.1\""], ["Panels", "2–6"]],
            },
            {
              title: "PSk Parallel Slide",
              desc: "Space-efficient parallel sliding for standard openings. Smooth operation with reliable GEALAN engineering.",
              tag: "Classic",
              photoDesc: "Фото: PSk параллельно-сдвижная дверь — общий вид в интерьере",
              specs: [["Max Width", "Up to 10′"], ["U-Factor", "0.18"], ["Operation", "Parallel slide"], ["Best For", "Standard patios"]],
            },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
              <PhotoPlaceholder description={s.photoDesc} height="h-52" className="rounded-none border-0" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-text-primary text-lg">{s.title}</h3>
                  <span className="text-[9px] font-semibold text-brand bg-brand/10 px-1.5 py-0.5 rounded">{s.tag}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">{s.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {s.specs.map(([label, value]) => (
                    <div key={label} className="bg-warm-gray rounded px-2.5 py-1.5 text-xs">
                      <span className="font-medium text-text-secondary">{label}:</span>{" "}
                      <span className="text-text-primary font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Plissé screen mention */}
        <div className="bg-white rounded-xl border border-border p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-text-primary mb-1">Plissé Retractable Insect Screens</h4>
              <p className="text-sm text-text-secondary leading-relaxed">All sliding door systems can be equipped with pleated (plissé) insect screens — retractable mesh that folds neatly to the side when not in use. Ideal for large openings where traditional screens are impractical.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison Table - Updated with GEALAN data */}
      <Section gray>
        <SectionTitle badge="Comparison" title="System Comparison" />
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto text-sm">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-4 py-3.5 text-left font-medium">Feature</th>
                <th className="px-4 py-3.5 text-center font-medium">PSk Parallel</th>
                <th className="px-4 py-3.5 text-center font-medium bg-brand-dark">S 9000 Lift & Slide ★</th>
                <th className="px-4 py-3.5 text-center font-medium">SMOOVIO</th>
                <th className="px-4 py-3.5 text-center font-medium">Multi-Slide</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Max Width", "Up to 10′", "21′4″", "13′1″", "11′6″"],
                ["Max Height", "8′", "9′", "8′", "8′2″"],
                ["U-Factor", "0.18", "0.15–0.23", "0.16–0.23", "0.27–0.35"],
                ["IGU Range", "Standard", "0.9\"–2.3\"", "0.8\"–2.0\"", "0.3\"–1.1\""],
                ["Panels", "2", "2–3", "2", "2–6"],
                ["Best For", "Standard patios", "Panoramic views", "Space-saving", "Max flexibility"],
              ].map(([label, ...vals], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-4 py-3.5 font-medium text-text-secondary">{label}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={`px-4 py-3.5 text-center ${j === 1 ? "font-semibold text-brand" : "text-text-secondary"}`}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Gallery - Figma Pattern: 4-Column Image Grid */}
      <Section>
        <SectionTitle badge="Gallery" title="Sliding Doors in Real Homes" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PhotoPlaceholder description="Фото: панорамные раздвижные двери в гостиной с выходом на террасу" height="h-48" />
          <PhotoPlaceholder description="Фото: Lift & Slide дверь с видом на сад — полностью открыта" height="h-48" />
          <PhotoPlaceholder description="Фото: раздвижная дверь на кухне — стык внутреннего и наружного пространства" height="h-48" />
          <PhotoPlaceholder description="Фото: вечерний вид дома с подсвеченными раздвижными дверями DECA" height="h-48" />
        </div>
      </Section>

      {/* Service Icons - Figma Pattern: Features with Icons */}
      <Section gray>
        <SectionTitle title="Exceptional Service in Massachusetts" />
        <ServiceIcons />
      </Section>

      {/* Expert Guides - Figma Pattern: 3-Column Card Grid */}
      <Section>
        <SectionTitle badge="Resources" title="Expert Guides" />
        <div className="grid md:grid-cols-3 gap-6">
          <GuideCard
            title="Sliding vs French Doors"
            desc="Which door type is right for your home? A practical comparison."
            href="/blog"
            photoDesc="Фото: сравнение раздвижной и французской двери в интерьере"
          />
          <GuideCard
            title="Choosing the Right Sliding System"
            desc="PSk vs Lift & Slide vs Roto Inova — which fits your project?"
            href="/blog"
            photoDesc="Фото: три типа раздвижных систем рядом"
          />
          <GuideCard
            title="Sliding Door Maintenance"
            desc="Simple steps to keep your sliding doors operating smoothly."
            href="/blog"
            photoDesc="Фото: обслуживание раздвижной двери — чистка направляющих"
          />
        </div>
      </Section>

      {/* FAQ - Figma Pattern: Accordion */}
      <Section gray>
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            [
              "What is the maximum opening width?",
              "Our Lift & Slide system supports openings up to 20 feet wide. PSk systems handle up to 10 feet, and Roto Inova up to 15 feet. Custom sizes available.",
            ],
            [
              "Are sliding doors energy efficient?",
              "Yes. With triple glazing and thermal breaks, our sliding doors achieve U-values as low as 0.12 — comparable to our window systems.",
            ],
            [
              "Which system is best for my home?",
              "PSk for standard patio openings, Lift & Slide for dramatic panoramic views, and Roto Inova for maximum security and performance. We'll help you choose.",
            ],
            [
              "Do sliding doors require a lot of maintenance?",
              "Minimal. Clean tracks periodically, lubricate hardware annually. Our systems are engineered for decades of reliable operation.",
            ],
          ].map(([q, a]) => (
            <details key={q} className="group bg-white rounded-xl border border-border">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-text-primary font-medium">
                {q}
                <svg className="w-5 h-5 text-text-muted shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-text-secondary leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA Block - Figma Pattern: Call-to-Action Section */}
      <CTABlock
        title="Which Sliding System Is Right for You?"
        subtitle="We'll help you choose the perfect system for your project."
        btnText="Get Expert Advice"
        variant="blue"
      />
    </>
  );
}
