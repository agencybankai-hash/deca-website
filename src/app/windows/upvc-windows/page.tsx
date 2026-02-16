import Link from "next/link";
import { Breadcrumb, PageHero, Section, SectionTitle, CTABlock, ImagePlaceholder, FeatureCard, StatCard } from "@/components/ui";

export const metadata = {
  title: "uPVC Vinyl Windows | Energy Efficient European Windows | DECA",
  description:
    "Premium uPVC vinyl windows with exceptional energy efficiency. DECA's European-engineered uPVC windows feature triple-pane glazing, 70mm depth, 0.10-0.25 U-values, and 50+ year lifespan. Class A rated, multi-point locking, and available in 50+ colors.",
  keywords: "uPVC windows, vinyl windows, energy efficient windows, European windows, triple glazed windows, thermal windows",
};

export default function UPVCWindowsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Windows", href: "/windows" }, { label: "uPVC Windows" }]} />

      {/* Hero Section */}
      <PageHero
        title="uPVC Vinyl Windows"
        subtitle="European excellence in energy efficiency and durability. DECA's uPVC windows deliver industry-leading performance with 50+ year lifespan, triple-pane glazing, and U-values as low as 0.10 W/m²K."
        badge="Premium uPVC Technology"
      >
        <div className="flex gap-3 flex-wrap mt-8">
          <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded-md font-semibold transition-colors">
            Get Custom Quote
          </Link>
          <Link href="/tilt-turn" className="border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-3.5 rounded-md font-semibold transition-colors">
            View Tilt & Turn
          </Link>
        </div>
      </PageHero>

      {/* What is uPVC Section */}
      <Section>
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">What is uPVC? A Complete Guide</h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            uPVC (unplasticized polyvinyl chloride) is the gold standard material for European window manufacturing, and for good reason. Unlike standard vinyl or aluminum, uPVC combines exceptional thermal insulation properties with durability, low maintenance, and environmental sustainability. DECA's uPVC windows are engineered to European standards and manufactured with precision in Massachusetts, delivering performance that rivals imported European products at factory-direct pricing.
          </p>

          <h3 className="text-2xl font-bold text-text-primary mb-4">Why uPVC Outperforms Other Materials</h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            uPVC's crystalline structure creates superior thermal barriers compared to traditional vinyl. The material naturally resists temperature fluctuations, meaning your windows maintain their structural integrity and sealing properties across extreme seasonal changes. Unlike aluminum, which conducts heat directly, uPVC's low conductivity makes it ideal for cold climates and high-performance applications. DECA's European-engineered uPVC profiles incorporate galvanized steel reinforcement, creating a hybrid composite that delivers strength, insulation, and longevity without the maintenance demands of aluminum or the environmental concerns of single-wall vinyl.
          </p>

          <h3 className="text-2xl font-bold text-text-primary mb-4">Manufacturing Excellence</h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            Every DECA uPVC window begins with virgin uPVC compound, not recycled material. We extrude our proprietary profile designs at our Massachusetts facility, then assemble each window with Swiss-precision hardware, ensuring multi-point locking mechanisms function flawlessly for decades. Our Class A-rated walls (2.8mm) exceed US industry standards, and our 5-6 chamber design provides optimal thermal separation. Triple-pane glazing with argon fill and warm-edge spacers completes the thermal envelope, achieving U-values that place DECA among the most efficient window manufacturers in North America.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <StatCard value="50+" label="Year Lifespan" />
          <StatCard value="0.10" label="Lowest U-Value (W/m²K)" />
          <StatCard value="70mm" label="Profile Depth" />
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section gray>
        <SectionTitle badge="DECA 70 Series" title="Technical Specifications" subtitle="Industry-leading performance metrics for DECA uPVC windows" />
        <div className="bg-white rounded-xl border border-border overflow-hidden max-w-4xl mx-auto mb-12">
          {[
            ["Profile Depth", "70mm (2.76 inches) — Industry leading depth for maximum insulation"],
            ["Material Composition", "Virgin uPVC with galvanized steel reinforcement in sash and frame"],
            ["Chamber Count", "5-6 chambers engineered for thermal separation and structural strength"],
            ["Wall Thickness", "2.8mm (Class A Rating) — Exceeds US industry standards"],
            ["Glass Package", "Triple-pane, argon-filled, warm-edge spacers, 41mm total thickness"],
            ["U-Value Range", "0.10-0.25 W/m²K (far exceeds ENERGY STAR requirement of 0.30)"],
            ["R-Value", "Up to 7.7 (triple-pane configuration)"],
            ["Sound Insulation (STC)", "42-50 dB reduction — Comparable to commercial soundproofing"],
            ["Air Leakage", "<0.30 CFM/ft² (Airtight certification)"],
            ["Lock Points", "Multi-point locking: 8-12 points depending on window size"],
            ["Security Rating", "RC2/RC3 certified (Resistance Class 2/3)"],
            ["Hardware", "Roto or Siegenia premium German hardware with adjustable hinges"],
            ["Warranty", "15-year frame warranty, 10-year glass warranty, 5-year hardware warranty"],
            ["Fire Rating", "30-90 minute ratings available for commercial applications"],
            ["Lifespan", "50+ years under normal conditions with minimal maintenance"],
          ].map(([label, value], i) => (
            <div key={label} className={`flex justify-between px-6 py-4 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
              <span className="text-sm font-medium text-text-secondary w-1/3">{label}</span>
              <span className="text-sm text-text-primary leading-relaxed">{value}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-text-muted text-sm mb-3">Need detailed engineering specifications?</p>
          <button className="text-blue-accent text-sm font-medium hover:text-blue-hover transition-colors">Download Full Technical Data Sheet (PDF) →</button>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <SectionTitle title="Key Benefits of DECA uPVC Windows" subtitle="Why architects, builders, and homeowners choose uPVC for superior performance" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Exceptional Energy Efficiency",
              description: "U-values as low as 0.10 W/m²K reduce heating and cooling costs by 40-50% compared to standard windows. Argon-filled triple-pane glazing with warm-edge spacers creates an insulating barrier that maintains consistent indoor temperatures.",
            },
            {
              title: "Durability & Longevity",
              description: "50+ year lifespan with galvanized steel reinforcement ensures your windows perform reliably through decades of climate extremes. uPVC's resistance to UV degradation means no chalking, discoloration, or structural failure.",
            },
            {
              title: "Low Maintenance",
              description: "No painting, staining, or sealing required. A simple wipe with mild soap maintains pristine appearance indefinitely. Adjustable hinges and drip rails prevent moisture issues for life.",
            },
            {
              title: "Environmental Sustainability",
              description: "100% recyclable uPVC material reduces landfill waste. Manufacturing here in Massachusetts eliminates shipping emissions from Europe. Long lifespan means fewer replacements and lower lifetime environmental impact.",
            },
            {
              title: "Superior Sound Insulation",
              description: "STC ratings of 42-50 dB block highway noise, aircraft, and urban traffic. Ideal for homes near roads, airports, or urban centers where noise pollution is a concern.",
            },
            {
              title: "Multi-Point Security",
              description: "8-12 locking points distribute force across the frame, creating virtually break-in-resistant construction. RC2/RC3 certification meets or exceeds all residential security standards.",
            },
            {
              title: "Design Flexibility",
              description: "Available in 50+ RAL colors and wood-grain finishes. Slim profiles maximize glass area while maintaining structural integrity. Custom shapes, sizes, and configurations manufactured to order.",
            },
            {
              title: "Thermal Comfort",
              description: "Eliminates cold spots and drafts. Consistent internal surface temperature prevents condensation and maintains comfort even in extreme climates. Warm-edge spacers prevent thermal bridging.",
            },
            {
              title: "Factory-Direct Pricing",
              description: "Manufactured in Massachusetts with premium quality and domestic warranties. Avoid import markups—get European performance at American pricing.",
            },
          ].map((benefit, i) => (
            <FeatureCard key={i} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </Section>

      {/* Glazing Options */}
      <Section gray>
        <SectionTitle badge="Glass Configurations" title="uPVC Glazing Options Comparison" subtitle="Choose the right glass package for your climate and performance needs" />
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Performance Metric</th>
                <th className="px-5 py-3.5 text-center font-medium">Double Pane (Standard)</th>
                <th className="px-5 py-3.5 text-center font-medium">Double Laminated</th>
                <th className="px-5 py-3.5 text-center font-medium bg-blue-accent">Triple Pane ★ RECOMMENDED</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["U-Factor (BTU/hr-ft²-°F)", "0.26", "0.18", "0.13"],
                ["R-Value", "4.0", "5.0", "7.7"],
                ["SHGC (Solar Heat Gain)", "0.71", "0.60", "0.28-0.60"],
                ["VLT (Visible Light)", "0.80", "0.71", "0.59-0.62"],
                ["Sound Insulation (STC)", "32 dB", "40 dB", "42-50 dB"],
                ["Argon Fill", "No", "No", "Yes (both chambers)"],
                ["Warm-Edge Spacer", "Standard", "Standard", "Super Spacer™"],
                ["Outdoor Noise Reduction", "Minimal", "Good", "Excellent"],
                ["Winter Condensation", "Higher risk", "Moderate", "Minimal"],
                ["Cost Difference", "Baseline", "+$150-250", "+$300-500"],
                ["Recommended Climate", "Mild (South)", "Moderate", "Cold (North) ★"],
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
        <p className="text-center text-text-muted text-sm mt-6">
          Triple-pane glazing recommended for climates with heating or cooling seasons exceeding 5,000 degree-days annually.
        </p>
      </Section>

      {/* Colors & Finishes */}
      <Section>
        <SectionTitle badge="Customization" title="50+ Color & Finish Options" subtitle="Express your aesthetic without sacrificing performance" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">RAL Powder Coating</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Choose from over 50 RAL colors, from classic whites and blacks to contemporary grays, deep blues, and accent colors. UV-stable powder coating applied during manufacturing ensures color consistency and durability for 50+ years without fading.
            </p>
            <ul className="space-y-2 text-text-secondary text-sm mb-6">
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Classic: White, Ivory, Black, Anthracite</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Contemporary: Gray, Charcoal, Graphite, Slate</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Statement: Navy, Dark Green, Deep Red, Burgundy</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Custom: Any RAL color available on request</span>
              </li>
            </ul>
          </div>
          <ImagePlaceholder label="Color Swatches" height="h-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
          <ImagePlaceholder label="Wood Grain Finishes" height="h-80" />
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">Wood-Grain Finishes</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Authentic wood-grain textures applied with precision printing technology. Achieve the warmth and character of timber-frame windows with superior durability and zero maintenance. Available on white or colored bases.
            </p>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Golden Oak: Warm, light grain pattern</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Dark Walnut: Rich, deep tone</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Mahogany: Reddish-brown character</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>White Oak: Contemporary light wood</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Comparison with Other Materials */}
      <Section gray>
        <SectionTitle title="uPVC vs. Aluminum vs. Standard Vinyl" subtitle="Side-by-side comparison of the leading window materials" />
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Feature</th>
                <th className="px-5 py-3.5 text-center font-medium">DECA uPVC ★</th>
                <th className="px-5 py-3.5 text-center font-medium">Aluminum</th>
                <th className="px-5 py-3.5 text-center font-medium">Standard Vinyl</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Thermal Performance (U-Value)", "0.10-0.25", "0.30-0.50", "0.25-0.35"],
                ["Energy Efficiency", "Excellent", "Poor", "Good"],
                ["Sound Insulation (STC)", "42-50 dB", "28-35 dB", "32-38 dB"],
                ["Lifespan", "50+ years", "30-40 years", "25-35 years"],
                ["Maintenance", "Minimal — wash only", "Periodic caulking needed", "Minimal"],
                ["Color Options", "50+ RAL colors", "10-15 anodized colors", "5-10 standard colors"],
                ["Environmental Impact", "100% recyclable", "Recyclable but energy-intensive", "Recyclable"],
                ["Cost (per window)", "$$$", "$$", "$$"],
                ["Security Rating", "RC2/RC3 available", "Limited options", "RC1 typical"],
                ["Suitable for Cold Climate", "Yes — optimal", "No — conducts cold", "Yes — good"],
                ["Condensation Risk", "Very low", "Higher", "Moderate"],
                ["Customization", "Unlimited sizes/shapes", "Limited", "Limited"],
              ].map(([label, ...vals], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-5 py-3.5 font-medium text-text-secondary">{label}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={`px-5 py-3.5 text-center ${j === 0 ? "font-semibold text-blue-accent" : "text-text-secondary"}`}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-text-muted text-sm mt-6">
          uPVC represents the optimal balance of performance, longevity, maintenance, and cost for North American residential windows.
        </p>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionTitle title="Frequently Asked Questions About uPVC Windows" />
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            [
              "Are uPVC windows prone to warping or discoloration?",
              "No. DECA's virgin uPVC compound is engineered for dimensional stability across -30°F to 140°F temperature ranges. Our UV-protective powder coatings and profiles maintain appearance and structural integrity for 50+ years without yellowing, chalking, or warping. Unlike cheaper single-wall vinyl, our 2.8mm Class A walls resist thermal stress.",
            ],
            [
              "How do uPVC windows compare to European imported windows?",
              "DECA uPVC windows match or exceed European standards while offering domestic manufacturing advantages: faster delivery, local warranties, factory support, and no import markups. We use the same German hardware (Roto/Siegenia), similar thermal designs, and comparable glass packages—but manufactured in Massachusetts at 30-40% lower cost.",
            ],
            [
              "What is the actual energy savings from uPVC triple-pane windows?",
              "Homeowners typically save 40-50% on heating/cooling costs compared to single-pane or old double-pane windows. A typical 2,500 sq ft home with 25-30 windows installed in 2024 would save $1,500-2,500 annually depending on climate, heating fuel, and utility rates. Federal tax credits up to $3,200 and state rebates often recover 50% of installation costs.",
            ],
            [
              "Can I customize the size, shape, and color of my uPVC windows?",
              "Absolutely. Every DECA window is manufactured to order at our Massachusetts facility. We produce arched, circular, triangular, custom dimensions, and any RAL color. Lead time is 4-6 weeks for custom orders. No size or shape is too unusual.",
            ],
            [
              "Are uPVC windows secure? Do they meet US safety codes?",
              "Yes. DECA uPVC windows feature multi-point locking (8-12 points depending on size), RC2/RC3 security certification, reinforced frames, and meet all US building codes including IBC, IRC, and local requirements. Our hardware is sourced from Swiss and German manufacturers with 50-year reliability records.",
            ],
            [
              "How long do uPVC windows typically last?",
              "DECA uPVC windows are engineered for 50+ years with normal maintenance (cleaning 2-3x yearly, occasional hinge adjustment). We back this with a 15-year frame warranty, 10-year glass warranty, and 5-year hardware warranty. Many European installations from the 1970s continue performing flawlessly.",
            ],
            [
              "What maintenance does uPVC require?",
              "Minimal. Wash frames and glass with mild soap and water 2-3 times yearly. Occasionally clean drainage channels and adjust hinges if needed. No painting, staining, caulking, or sealing required—ever. Hardware like locks and hinges may need light lubrication every few years.",
            ],
            [
              "Do you offer installation services?",
              "Yes. DECA provides professional installation through our field operations team across New England. We also work with vetted local contractors nationwide. Installation is included in quotes. Proper installation is critical to performance and warranty coverage.",
            ],
          ].map(([q, a]) => (
            <details key={q} className="bg-white rounded-lg border border-border group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-text-primary text-sm flex justify-between items-center hover:bg-warm-gray transition-colors">
                {q}
                <svg className="w-4 h-4 text-blue-accent shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-text-secondary leading-relaxed border-t border-border">{a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* Author Attribution */}
      <Section gray>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-border p-8 mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent font-bold text-xl">DT</div>
              <div>
                <h3 className="font-semibold text-text-primary text-lg">DECA Technical Team</h3>
                <p className="text-sm text-text-muted">10+ years of European window engineering, NFRC certification, and continuous performance testing</p>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed text-sm">
              Our technical team includes certified window engineers with decades of combined experience in European window manufacturing, thermal testing, and North American building codes. We write our guides to reflect actual product specifications, real-world performance data, and customer feedback from 500+ installations across New England and beyond.
            </p>
          </div>

          <h3 className="font-bold text-text-primary text-lg mb-6 text-center">Related Resources & Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Tilt & Turn Windows vs Double Hung", href: "/tilt-turn" },
              { title: "Aluminum Windows: Modern European Design", href: "/windows/aluminum-windows" },
              { title: "Energy Efficiency Standards & Testing", href: "/performance" },
            ].map((t) => (
              <Link key={t.title} href={t.href} className="bg-warm-gray rounded-lg border border-border p-5 text-center hover:border-blue-accent/50 transition-colors group">
                <p className="text-sm font-medium text-blue-accent group-hover:text-blue-hover transition-colors">{t.title}</p>
                <p className="text-xs text-text-muted mt-2">Read article →</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        title="Ready for Premium uPVC Windows?"
        subtitle="Get a custom quote for your project. Any size, color, or configuration. Factory-direct pricing, domestic warranty, fast delivery."
        btnText="Get Free Custom Quote"
        btnHref="/quote"
      />
    </>
  );
}
