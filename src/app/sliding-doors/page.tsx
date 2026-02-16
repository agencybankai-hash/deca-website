import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, CTABlock, PhotoPlaceholder, ServiceIcons, GuideCard, StatCard } from "@/components/ui";
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
          <StatCard value="20 ft" label="Max Opening Width" />
          <StatCard value="0.12" label="Best U-Value" />
          <StatCard value="3" label="System Types" />
          <StatCard value="50+" label="Year Lifespan" />
        </div>
      </section>

      {/* Three Systems - Figma Pattern: 3-Column Card Grid */}
      <Section>
        <SectionTitle badge="Systems" title="Choose Your Sliding System" subtitle="Each system is designed for specific applications and performance needs." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "PSk Parallel Slide",
              desc: "Smooth parallel sliding operation. Space-efficient design for standard openings. Excellent thermal performance.",
              uval: "0.18",
              photoDesc: "Фото: PSk параллельно-сдвижная дверь DECA — общий вид в интерьере",
              features: ["Standard openings", "Space-efficient", "Smooth operation"],
            },
            {
              title: "Lift & Slide",
              desc: "Premium system for openings up to 20 feet wide. Effortless operation with exceptional air tightness. Dramatic indoor-outdoor connections.",
              uval: "0.12",
              photoDesc: "Фото: подъёмно-сдвижная дверь Lift & Slide — панорамное остекление террасы",
              features: ["Up to 20ft wide", "Effortless lift", "Premium quality"],
            },
            {
              title: "DECA with Roto Inova",
              desc: "Maximum security and efficiency. uPVC with metal reinforcement, triple glazing options. Our most advanced sliding system.",
              uval: "0.12",
              photoDesc: "Фото: раздвижная система DECA с фурнитурой Roto Inova — крупный план механизма",
              features: ["Max security", "Triple glazing", "Most advanced"],
            },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
              <PhotoPlaceholder description={s.photoDesc} height="h-56" className="rounded-none border-0" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-bold text-text-primary text-lg">{s.title}</h3>
                  <span className="text-xs font-semibold text-blue-accent bg-blue-light px-2 py-0.5 rounded">U: {s.uval}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.desc}</p>
                <div className="space-y-1.5">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-text-muted">
                      <svg className="w-3.5 h-3.5 text-blue-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison Table - Figma Pattern: Data Table */}
      <Section gray>
        <SectionTitle badge="Comparison" title="System Comparison" />
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Feature</th>
                <th className="px-5 py-3.5 text-center font-medium">PSk Parallel</th>
                <th className="px-5 py-3.5 text-center font-medium">Lift & Slide</th>
                <th className="px-5 py-3.5 text-center font-medium bg-blue-accent">Roto Inova ★</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Max Width", "Up to 10ft", "Up to 20ft", "Up to 15ft"],
                ["U-Value", "0.18", "0.12", "0.12"],
                ["Operation", "Parallel slide", "Lift & slide", "Tilt & slide"],
                ["Security", "Multi-point", "Multi-point", "RC2 rated"],
                ["Glazing", "Double/Triple", "Double/Triple", "Triple standard"],
                ["Best For", "Standard patios", "Panoramic views", "Max performance"],
              ].map(([label, ...vals], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-5 py-3.5 font-medium text-text-secondary">{label}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={`px-5 py-3.5 text-center ${j === 2 ? "font-semibold text-blue-accent" : "text-text-secondary"}`}>
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
