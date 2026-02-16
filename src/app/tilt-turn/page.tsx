import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, PageHero, Section, SectionTitle, CTABlock, ImagePlaceholder, StatCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tilt & Turn Windows | European Style | DECA Windows",
  description: "Premium European tilt & turn windows with two opening modes. U-values as low as 0.10, noise reduction up to 50 dB, manufactured in Massachusetts.",
  keywords: "tilt and turn windows, European windows, energy efficient, soundproof windows, Massachusetts",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long do tilt and turn windows last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With proper maintenance, DECA tilt and turn windows have a service life of 50+ years. We back this with a 15-year frame warranty and 10-year glass warranty."
      }
    },
    {
      "@type": "Question",
      "name": "Are tilt and turn windows more expensive than double hung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Initial cost is typically 15-30% higher, but the energy savings, durability, and superior performance make them significantly more cost-effective over the window's lifetime."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get custom sizes and shapes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We manufacture every window to order at our Massachusetts factory. Arched, circular, triangular, and any custom dimensions are available."
      }
    },
    {
      "@type": "Question",
      "name": "How energy efficient are they?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our triple-glazed tilt and turn windows achieve U-values as low as 0.10 W/m²K — significantly exceeding ENERGY STAR requirements of 0.30."
      }
    },
    {
      "@type": "Question",
      "name": "Do they meet US building codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. All DECA windows are NFRC certified and meet or exceed all US building code requirements."
      }
    }
  ]
};

export default function TiltTurnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumb items={[{ label: "Windows", href: "/windows" }, { label: "Tilt & Turn Windows" }]} />

      {/* Hero with two-column layout */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tilt & Turn Windows</h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              The most versatile window system in the world. Two opening modes, exceptional performance, and European engineering — manufactured right here in Massachusetts.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded-md font-semibold transition-colors">
                Get a Quote
              </Link>
              <button className="border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-3.5 rounded-md font-semibold transition-colors">
                Configure Your Window
              </button>
            </div>
          </div>
          <ImagePlaceholder label="Product Hero Image" height="h-72" />
        </div>
      </section>

      {/* How It Works */}
      <Section>
        <SectionTitle badge="How It Works" title="Two Modes, One Window" subtitle="The tilt & turn mechanism gives you complete control over ventilation, cleaning, and security." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { mode: "Tilt Mode", desc: "Turn handle up — window tilts inward at the top for secure ventilation. Perfect for rain, sleep, and child safety." },
            { mode: "Turn Mode", desc: "Turn handle to the side — window opens fully inward like a door. Easy cleaning from inside, maximum airflow." },
            { mode: "Closed & Locked", desc: "Handle down — up to 11 locking points engage simultaneously. Compression seals create airtight, watertight barrier." },
          ].map((m) => (
            <div key={m.mode} className="text-center">
              <ImagePlaceholder label={m.mode} height="h-44" />
              <h3 className="font-bold text-text-primary text-lg mt-5 mb-2">{m.mode}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="text-blue-accent text-sm font-medium hover:text-blue-hover transition-colors">
            Compare: Tilt & Turn vs Double Hung &rarr;
          </Link>
        </div>
      </Section>

      {/* Technical Specs */}
      <Section gray>
        <SectionTitle badge="DECA 70 Series" title="Technical Specifications" />
        <div className="bg-white rounded-xl border border-border overflow-hidden max-w-3xl mx-auto">
          {[
            ["Profile Depth", "70mm (2.76 inches)"],
            ["Material", "uPVC with galvanized steel reinforcement"],
            ["Chamber Count", "5-6 chambers for optimal insulation"],
            ["Wall Thickness", "2.8mm (Class A Rating)"],
            ["Glass Package", "Triple-pane, argon-filled, 41mm total"],
            ["U-Value", "As low as 0.10 W/m\u00b2K"],
            ["Sound Insulation", "Up to 45-50 dB (STC 42-50)"],
            ["Lock Points", "Multi-point: 8-12 locking points"],
            ["Security Rating", "RC2 / RC3 rated"],
            ["Hardware", "Roto or Siegenia premium hardware"],
          ].map(([label, value], i) => (
            <div key={label} className={`flex justify-between px-6 py-3.5 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
              <span className="text-sm font-medium text-text-secondary">{label}</span>
              <span className="text-sm text-text-primary font-semibold">{value}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="text-blue-accent text-sm font-medium">Download Full Spec Sheet (PDF) &rarr;</button>
        </div>
      </Section>

      {/* Glazing Comparison Table */}
      <Section>
        <SectionTitle badge="Glazing Options" title="Glass Configuration Comparison" />
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Metric</th>
                <th className="px-5 py-3.5 text-center font-medium">Laminated Double</th>
                <th className="px-5 py-3.5 text-center font-medium">Double</th>
                <th className="px-5 py-3.5 text-center font-medium bg-blue-accent">Triple ★</th>
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

      {/* FAQ */}
      <Section gray>
        <SectionTitle title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            ["How long do tilt and turn windows last?", "With proper maintenance, DECA tilt and turn windows have a service life of 50+ years. We back this with a 15-year frame warranty and 10-year glass warranty."],
            ["Are tilt and turn windows more expensive than double hung?", "Initial cost is typically 15-30% higher, but the energy savings, durability, and superior performance make them significantly more cost-effective over the window's lifetime."],
            ["Can I get custom sizes and shapes?", "Yes. We manufacture every window to order at our Massachusetts factory. Arched, circular, triangular, and any custom dimensions are available."],
            ["How energy efficient are they?", "Our triple-glazed tilt and turn windows achieve U-values as low as 0.10 W/m\u00b2K \u2014 significantly exceeding ENERGY STAR requirements of 0.30."],
            ["Do they meet US building codes?", "Absolutely. All DECA windows are NFRC certified and meet or exceed all US building code requirements."],
          ].map(([q, a]) => (
            <details key={q} className="bg-white rounded-lg border border-border group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-text-primary text-sm flex justify-between items-center">
                {q}
                <svg className="w-4 h-4 text-blue-accent shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-text-secondary leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* Author + Related */}
      <Section>
        <div className="bg-blue-light rounded-xl p-6 max-w-3xl mx-auto mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent font-bold">TD</div>
            <div>
              <p className="font-semibold text-text-primary text-sm">Written by DECA Technical Team</p>
              <p className="text-xs text-text-muted">10+ years of European window engineering experience. NFRC certified.</p>
            </div>
          </div>
        </div>
        <h3 className="font-bold text-text-primary text-lg mb-6 text-center">Related Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {["Tilt & Turn vs Double Hung", "European vs American Windows", "Triple vs Double Pane"].map((t) => (
            <Link key={t} href="/blog" className="bg-warm-gray rounded-lg border border-border p-4 text-center hover:border-blue-accent/30 transition-colors">
              <p className="text-sm font-medium text-blue-accent">{t}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTABlock title="Ready for Tilt & Turn?" subtitle="Get a custom quote for your project — any size, any configuration." btnText="Get Free Quote" />
    </>
  );
}
