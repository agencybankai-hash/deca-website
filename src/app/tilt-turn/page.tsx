import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, CTABlock, PhotoPlaceholder, ServiceIcons, GuideCard, StatCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tilt & Turn Windows | European Style | DECA Windows",
  description: "Premium European tilt & turn windows with two opening modes. U-values as low as 0.10, noise reduction up to 50 dB, manufactured in Massachusetts.",
  alternates: { canonical: "/tilt-turn" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How long do tilt and turn windows last?", "acceptedAnswer": { "@type": "Answer", "text": "With proper maintenance, DECA tilt and turn windows have a service life of 50+ years. We back this with a 15-year frame warranty and 10-year glass warranty." } },
    { "@type": "Question", "name": "Are tilt and turn windows more expensive than double hung?", "acceptedAnswer": { "@type": "Answer", "text": "Initial cost is typically 15-30% higher, but the energy savings, durability, and superior performance make them significantly more cost-effective over the window's lifetime." } },
    { "@type": "Question", "name": "Can I get custom sizes and shapes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We manufacture every window to order at our Massachusetts factory. Arched, circular, triangular, and any custom dimensions are available." } },
    { "@type": "Question", "name": "How energy efficient are they?", "acceptedAnswer": { "@type": "Answer", "text": "Our triple-glazed tilt and turn windows achieve U-values as low as 0.10 W/m²K — significantly exceeding ENERGY STAR requirements of 0.30." } },
    { "@type": "Question", "name": "Do they meet US building codes?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. All DECA windows are NFRC certified and meet or exceed all US building code requirements." } },
  ],
};

export default function TiltTurnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb items={[{ label: "Windows", href: "/windows" }, { label: "Tilt & Turn Windows" }]} />

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Most Popular</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">Tilt & Turn Windows</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                The most versatile window system in the world. Two opening modes, exceptional performance, and European engineering — manufactured right here in Massachusetts.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link 
                  href="/quote" 
                  className="bg-blue-accent hover:bg-blue-hover text-white px-8 py-4 rounded font-semibold transition-colors shadow-sm hover:shadow-md"
                >
                  Get a Quote
                </Link>
                <Link 
                  href="/performance" 
                  className="border border-border text-text-primary hover:bg-warm-gray hover:border-blue-accent/30 px-8 py-4 rounded font-semibold transition-colors"
                >
                  View Specs
                </Link>
              </div>
            </div>
            <PhotoPlaceholder 
              description="Фото: окно DECA Tilt & Turn в интерьере — приоткрыто в режиме проветривания (Tilt)" 
              height="h-[450px]" 
            />
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-warm-gray py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value="0.10" label="Best U-Value (W/m²K)" />
            <StatCard value="50 dB" label="Noise Reduction" />
            <StatCard value="12" label="Lock Points" />
            <StatCard value="50+" label="Year Lifespan" />
          </div>
        </div>
      </section>

      {/* How It Works - Two Modes */}
      <Section>
        <SectionTitle 
          badge="How It Works" 
          title="Two Modes, One Window" 
          subtitle="The tilt & turn mechanism gives you complete control over ventilation, cleaning, and security." 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              mode: "Tilt Mode", 
              desc: "Turn handle up — window tilts inward at the top for secure ventilation. Perfect for rain, sleep, and child safety.", 
              icon: "↗️",
              photoDesc: "Фото/схема: окно в режиме Tilt — наклон створки внутрь сверху" 
            },
            { 
              mode: "Turn Mode", 
              desc: "Turn handle to the side — window opens fully inward like a door. Easy cleaning from inside, maximum airflow.", 
              icon: "⤴️",
              photoDesc: "Фото/схема: окно в режиме Turn — полное открытие створки внутрь" 
            },
            { 
              mode: "Closed & Locked", 
              desc: "Handle down — up to 12 locking points engage simultaneously. Compression seals create airtight, watertight barrier.", 
              icon: "🔒",
              photoDesc: "Фото/схема: окно в закрытом и запертом состоянии — ручка вниз" 
            },
          ].map((m) => (
            <div key={m.mode} className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <PhotoPlaceholder 
                description={m.photoDesc} 
                height="h-52" 
                className="rounded-none border-0" 
              />
              <div className="p-7 text-center">
                <div className="text-3xl mb-3">{m.icon}</div>
                <h3 className="font-bold text-text-primary text-lg mb-3">{m.mode}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Specs */}
      <Section gray>
        <SectionTitle 
          badge="DECA 70 Series" 
          title="Technical Specifications" 
          subtitle="Professional-grade components and materials."
        />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            {[
              ["Profile Depth", "70mm (2.76 inches)"],
              ["Material", "uPVC with galvanized steel reinforcement"],
              ["Chamber Count", "5-6 chambers for optimal insulation"],
              ["Wall Thickness", "2.8mm (Class A Rating)"],
              ["Glass Package", "Triple-pane, argon-filled, 41mm total"],
              ["U-Value", "As low as 0.10 W/m²K"],
              ["Sound Insulation", "Up to 45-50 dB (STC 42-50)"],
              ["Lock Points", "Multi-point: 8-12 locking points"],
              ["Security Rating", "RC2 / RC3 rated"],
              ["Hardware", "Roto or Siegenia premium hardware"],
            ].map(([label, value], i) => (
              <div 
                key={label} 
                className={`flex justify-between px-6 py-4 border-b border-border last:border-b-0 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}
              >
                <span className="text-sm font-medium text-text-secondary">{label}</span>
                <span className="text-sm text-text-primary font-semibold">{value}</span>
              </div>
            ))}
          </div>
          <PhotoPlaceholder 
            description="Фото: разрез профиля DECA 70 серии — видны 6 камер, стальное армирование, тройное остекление" 
            height="h-[420px]" 
          />
        </div>
      </Section>

      {/* Glazing Comparison Table */}
      <Section>
        <SectionTitle 
          badge="Glazing Options" 
          title="Glass Configuration Comparison"
          subtitle="Choose the right glass package for your climate and performance needs."
        />
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-6 py-4 text-left font-semibold">Metric</th>
                <th className="px-6 py-4 text-center font-semibold">Laminated Double</th>
                <th className="px-6 py-4 text-center font-semibold">Double</th>
                <th className="px-6 py-4 text-center font-semibold bg-blue-accent">Triple ★</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["U-Factor (BTU)", "0.18", "0.26", "0.13"],
                ["R-Value", "5", "4", "Up to 7.7"],
                ["SHGC", "0.60", "0.71", "0.28-0.60"],
                ["VLT", "0.71", "0.80", "0.59-0.62"],
                ["STC Rating", "40", "32", "41-50"],
              ].map(([label, ...vals], i) => (
                <tr key={label} className={`border-t border-border ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
                  <td className="px-6 py-4 font-semibold text-text-primary">{label}</td>
                  {vals.map((v, j) => (
                    <td 
                      key={j} 
                      className={`px-6 py-4 text-center ${j === 2 ? "font-bold text-blue-accent" : "text-text-secondary"}`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Real World Gallery */}
      <Section gray>
        <SectionTitle 
          badge="Gallery" 
          title="Tilt & Turn in Real Homes"
          subtitle="See how DECA windows transform residential and commercial spaces."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
            <PhotoPlaceholder 
              description="Фото: тилт-тёрн окно в современной гостиной с панорамным видом" 
              height="h-56" 
              className="rounded-none border-0"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
            <PhotoPlaceholder 
              description="Фото: спальня с приоткрытым тилт-тёрн окном в режиме проветривания" 
              height="h-56" 
              className="rounded-none border-0"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
            <PhotoPlaceholder 
              description="Фото: кухня с большим тилт-тёрн окном над рабочей зоной" 
              height="h-56" 
              className="rounded-none border-0"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
            <PhotoPlaceholder 
              description="Фото: фасад дома с несколькими тилт-тёрн окнами DECA" 
              height="h-56" 
              className="rounded-none border-0"
            />
          </div>
        </div>
      </Section>

      {/* Service Excellence */}
      <Section>
        <SectionTitle 
          title="Exceptional Service in Massachusetts" 
          subtitle="From consultation to installation, we're with you every step."
        />
        <ServiceIcons />
      </Section>

      {/* Expert Resources */}
      <Section gray>
        <SectionTitle 
          badge="Resources" 
          title="Expert Guides & Learning"
          subtitle="Everything you need to know about tilt & turn windows."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <GuideCard 
            title="Tilt & Turn vs Double Hung" 
            desc="A detailed comparison of the two most popular window systems." 
            href="/blog/tilt-turn-vs-double-hung"
            photoDesc="Фото: сравнительная схема тилт-тёрн и двойного подвесного окна" 
          />
          <GuideCard 
            title="How Tilt & Turn Mechanism Works" 
            desc="Complete guide to the dual-function opening mechanism." 
            href="/blog/how-tilt-turn-works"
            photoDesc="Фото: детальная схема поворотно-откидного механизма" 
          />
          <GuideCard 
            title="Window Maintenance Guide" 
            desc="Simple steps to keep your windows performing for decades." 
            href="/blog/window-maintenance"
            photoDesc="Фото: уход за окнами — чистка и смазка фурнитуры" 
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionTitle 
          badge="FAQ" 
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our tilt & turn windows."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "How long do tilt and turn windows last?",
              a: "With proper maintenance, DECA tilt and turn windows have a service life of 50+ years. We back this with a 15-year frame warranty and 10-year glass warranty."
            },
            {
              q: "Are tilt and turn windows more expensive than double hung?",
              a: "Initial cost is typically 15-30% higher, but the energy savings, durability, and superior performance make them significantly more cost-effective over the window's lifetime."
            },
            {
              q: "Can I get custom sizes and shapes?",
              a: "Yes. We manufacture every window to order at our Massachusetts factory. Arched, circular, triangular, and any custom dimensions are available."
            },
            {
              q: "How energy efficient are they?",
              a: "Our triple-glazed tilt and turn windows achieve U-values as low as 0.10 W/m²K — significantly exceeding ENERGY STAR requirements of 0.30."
            },
            {
              q: "Do they meet US building codes?",
              a: "Absolutely. All DECA windows are NFRC certified and meet or exceed all US building code requirements."
            },
          ].map(({ q, a }) => (
            <details 
              key={q} 
              className="group bg-white rounded-xl border border-border overflow-hidden transition-all hover:border-blue-accent/30"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-text-primary font-semibold hover:bg-warm-gray/50 transition-colors">
                {q}
                <svg 
                  className="w-5 h-5 text-blue-accent shrink-0 ml-4 group-open:rotate-180 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-text-secondary leading-relaxed border-t border-border">{a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA Block */}
      <CTABlock 
        title="Ready for Tilt & Turn?" 
        subtitle="Get a custom quote for your project — any size, any configuration." 
        btnText="Get Free Quote" 
        variant="blue" 
      />
    </>
  );
}
