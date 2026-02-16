import Link from "next/link";
import { Breadcrumb, PageHero, Section, SectionTitle, CTABlock, ImagePlaceholder, FeatureCard } from "@/components/ui";

export const metadata = {
  title: "Aluminum Windows | Modern European Design | DECA Windows",
  description:
    "Contemporary aluminum windows with European precision and thermal break technology. DECA's thermally broken aluminum windows deliver slim profiles, maximum glass area, and modern aesthetics. Ideal for commercial, modern residential, and large openings.",
  keywords: "aluminum windows, modern windows, commercial windows, thermal break, European windows, contemporary design",
};

export default function AluminumWindowsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Windows", href: "/windows" }, { label: "Aluminum Windows" }]} />

      {/* Hero Section */}
      <PageHero
        title="Aluminum Windows"
        subtitle="Contemporary aesthetics meets European engineering. DECA's thermally-broken aluminum windows deliver slim profiles, maximum glass area, and architectural flexibility for modern residential and commercial applications."
        badge="Modern Aluminum Technology"
      >
        <div className="flex gap-3 flex-wrap mt-8">
          <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded-md font-semibold transition-colors">
            Get Custom Quote
          </Link>
          <Link href="/professionals" className="border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-3.5 rounded-md font-semibold transition-colors">
            Architect Resources
          </Link>
        </div>
      </PageHero>

      {/* Why Aluminum Section */}
      <Section>
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Why Choose Aluminum Windows?</h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Aluminum represents the cutting edge of modern window design. Unlike traditional uPVC, aluminum delivers the architectural flexibility and contemporary aesthetics demanded by modern architects and designers. DECA's thermally-broken aluminum windows combine the strength and design freedom of aluminum with European thermal performance, creating windows that are simultaneously lightweight, structurally superior, and energy efficient.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Architectural Freedom</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Aluminum's inherent strength allows for dramatically thinner frame profiles (as narrow as 1.75") compared to uPVC (2.75"). This maximizes glass area and minimizes visual frame presence—critical for architects pursuing minimalist aesthetics, large glazed walls, and seamless indoor-outdoor integration. Corner-to-corner glass with minimal framing is achievable only with aluminum.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Modern Aesthetics</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Contemporary designs demand sleek, refined proportions. Aluminum's crisp lines, precision-welded corners, and variety of finish options (matte, brushed, anodized, powder-coated) deliver the sophisticated appearance expected in modern residential and commercial projects. Available in unlimited custom colors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Structural Strength</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Aluminum's tensile strength exceeds uPVC by 3-4x, enabling large unsupported spans, heavy tempered glass, and minimal deflection under load. Architectural glass walls, floor-to-ceiling installations, and cantilevered glass systems are feasible only with aluminum.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Commercial Applications</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Storefronts, curtain walls, and commercial glazing systems require aluminum's structural properties. Modular assembly, continuous mullion systems, and complex geometries are standard aluminum capabilities. DECA produces both residential aluminum and commercial-grade systems.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Thermal Break Technology */}
      <Section gray>
        <SectionTitle
          badge="Engineering Excellence"
          title="Thermal Break Technology Explained"
          subtitle="How DECA achieves energy efficiency with aluminum"
        />
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Aluminum's primary weakness is thermal conductivity—it conducts heat 200x faster than uPVC, creating condensation risk and energy loss. DECA's solution: polyamide thermal breaks. These synthetic material strips physically separate the interior and exterior aluminum frames, interrupting the thermal bridge and achieving energy performance competitive with traditional uPVC.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">How Thermal Breaks Work</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="text-blue-accent font-bold text-lg">1</span>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Polyamide Barrier</p>
                    <p className="text-sm text-text-secondary">15-25mm polyamide strips inserted between exterior and interior aluminum components</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-accent font-bold text-lg">2</span>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Thermal Interruption</p>
                    <p className="text-sm text-text-secondary">Polyamide conducts heat 1/200th as efficiently as aluminum, creating an insulating layer</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-accent font-bold text-lg">3</span>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Interior Warmth</p>
                    <p className="text-sm text-text-secondary">Indoor surface temperature remains warmer, preventing condensation and improving comfort</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-accent font-bold text-lg">4</span>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Energy Savings</p>
                    <p className="text-sm text-text-secondary">Combined with triple-pane glazing, thermal breaks achieve U-values of 0.20-0.30</p>
                  </div>
                </li>
              </ul>
            </div>
            <ImagePlaceholder label="Thermal Break Cross-Section Diagram" height="h-96" />
          </div>

          <div className="bg-blue-light rounded-xl p-8 border border-blue-accent/20">
            <h4 className="font-semibold text-text-primary mb-3">Performance Impact</h4>
            <p className="text-text-secondary leading-relaxed mb-4">
              DECA thermally-broken aluminum windows achieve U-values of 0.20-0.30 W/m²K—virtually identical to traditional uPVC windows with triple glazing. Interior surface temperatures remain warm, eliminating condensation and ensuring durability. Thermal break systems can be upgraded in DECA's manufacturing process, meaning architects can specify increasingly efficient performance as building code requirements evolve.
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section>
        <SectionTitle badge="DECA Aluminum Systems" title="Technical Specifications" />
        <div className="bg-white rounded-xl border border-border overflow-hidden max-w-4xl mx-auto mb-12">
          {[
            ["Frame Profile Width", "50-80mm frame depth (customizable) — slim 1.75-2.25\" profiles"],
            ["Material", "Extruded 6063-T5 aluminum with polyamide thermal breaks"],
            ["Thermal Break Thickness", "14-20mm polyamide strips separating interior/exterior"],
            ["Glass Area Coverage", "Up to 92% glass area — significantly exceeds uPVC (typically 70%)"],
            ["U-Value (Thermally Broken)", "0.20-0.30 W/m²K with triple glazing"],
            ["U-Value (Non-Thermally Broken)", "0.40-0.60 W/m²K — not recommended for climate control"],
            ["Corner Welding", "Precision 45° mitered corners with structural aluminum welds"],
            ["Hardware", "Heavy-duty stainless or plated hardware rated for commercial loads"],
            ["Lock Points", "Multi-point locking: 6-10 points depending on size"],
            ["Glass Options", "Double, triple, laminated, tempered — up to ½\" thick glass"],
            ["Finish Options", "RAL anodized, powder-coat (unlimited colors), brushed, matte"],
            ["Water Shedding", "Integrated drainage channels and positive pressure seals"],
            ["Condensation Resistance", "Good with thermal breaks; not recommended without"],
            ["Fire Rating", "Up to 2-hour fire-rated assemblies available"],
            ["Environmental", "Recyclable aluminum; often 30-50% recycled content"],
          ].map(([label, value], i) => (
            <div key={label} className={`flex justify-between px-6 py-4 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
              <span className="text-sm font-medium text-text-secondary w-2/5">{label}</span>
              <span className="text-sm text-text-primary leading-relaxed">{value}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-blue-accent text-sm font-medium hover:text-blue-hover transition-colors">Download Aluminum System Catalog & Specs (PDF) →</button>
        </div>
      </Section>

      {/* Color & Finish Options */}
      <Section gray>
        <SectionTitle title="Color & Finish Options" subtitle="Express your design vision with unlimited customization" />
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-neutral-200 border border-neutral-300"></span>
                Anodized Finishes
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Traditional anodizing creates a durable, natural oxide layer. Available in clear, bronze, champagne, and dark anodized finishes. Cost-effective and maintenance-free.
              </p>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li>• Clear anodized (natural silver)</li>
                <li>• Bronze anodized (warm tan)</li>
                <li>• Champagne anodized (light gold)</li>
                <li>• Dark anodized (charcoal gray)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-blue-600"></span>
                Powder Coat
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Custom RAL colors applied via electrostatic powder coating. Unlimited color options, superior durability, and scratch resistance. Industry standard for contemporary architecture.
              </p>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li>• Any RAL color available</li>
                <li>• Matte, satin, or gloss finishes</li>
                <li>• Custom color matching</li>
                <li>• UV-stable formulations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-neutral-400" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(0,0,0,0.1) 2px, transparent 2px)" }}></span>
                Specialty Finishes
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Brushed, textured, and metallic finishes for distinctive aesthetics. Combinations like exterior powder coat with interior anodized create visual contrast.
              </p>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li>• Brushed aluminum</li>
                <li>• Textured surfaces</li>
                <li>• Dual-tone finishes</li>
                <li>• Metallic accents</li>
              </ul>
            </div>
          </div>

          <div className="bg-warm-gray rounded-xl p-8 border border-border">
            <h4 className="font-semibold text-text-primary mb-3">Two-Tone Configuration</h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              Specify different finishes on exterior and interior. For example: matte black powder coat exterior with white powder coat interior, or anthracite outside with natural anodized inside. Creates visual impact while maintaining cohesive design language with interior décor.
            </p>
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section>
        <SectionTitle
          title="Ideal Applications"
          subtitle="Aluminum windows excel in these project types and aesthetic contexts"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "🏢",
              title: "Commercial Storefronts",
              description:
                "Large expanses of tempered glass, heavy loads, corner-to-corner glazing, and minimalist framing for retail, office, and hospitality projects.",
            },
            {
              icon: "🏠",
              title: "Modern Residential",
              description:
                "Contemporary homes demanding sleek proportions, floor-to-ceiling glass walls, and minimal frame visibility. Indoor-outdoor integration is seamless with aluminum.",
            },
            {
              icon: "🏗️",
              title: "Commercial Curtain Walls",
              description:
                "Multi-story glass facade systems, continuous mullion designs, and structural glass assemblies only feasible with aluminum's strength.",
            },
            {
              icon: "🏡",
              title: "Renovation & Heritage",
              description:
                "Slim aluminum profiles fit into tight restoration budgets and historic building requirements. Maintains sightlines while meeting modern energy codes.",
            },
            {
              icon: "🔬",
              title: "Institutional Buildings",
              description:
                "Laboratories, universities, healthcare facilities requiring large glass areas, heavy-duty hardware, and unobstructed views for safety and supervision.",
            },
            {
              icon: "🌳",
              title: "Outdoor Living",
              description:
                "Sunrooms, conservatories, and glass patios where minimal framing maximizes views and light penetration. Structural aluminum supports heavy glass loads safely.",
            },
          ].map((app, i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-6">
              <div className="text-4xl mb-3">{app.icon}</div>
              <h3 className="font-semibold text-text-primary text-lg mb-3">{app.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison with uPVC */}
      <Section gray>
        <SectionTitle title="Aluminum vs. uPVC: Which is Right for Your Project?" />
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Criterion</th>
                <th className="px-5 py-3.5 text-center font-medium">Aluminum</th>
                <th className="px-5 py-3.5 text-center font-medium">uPVC</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Thermal Performance", "Good (0.20-0.30 with thermal break)", "Excellent (0.10-0.25)"],
                ["Frame Profile Width", "1.75-2.25\" (slim)", "2.75-3.5\" (thicker)"],
                ["Glass Area Coverage", "Up to 92%", "Up to 70%"],
                ["Structural Strength", "Superior — handles large spans", "Good — moderate spans"],
                ["Contemporary Aesthetics", "Excellent — minimalist possible", "Good — traditional options"],
                ["Customization Options", "Unlimited colors & profiles", "50+ colors, limited profiles"],
                ["Maintenance", "Minimal (wash, occasional lubrication)", "Minimal (wash only)"],
                ["Longevity", "40-50 years", "50+ years"],
                ["Cost", "$$ (higher)", "$ (lower)"],
                ["Energy Efficiency", "Good", "Excellent"],
                ["Sound Insulation", "Good (32-40 dB)", "Excellent (42-50 dB)"],
                ["Commercial Suitability", "Ideal", "Residential focus"],
                ["Design Flexibility", "Maximum — any geometry", "Good — standard shapes"],
                ["Condensation Risk", "Low (with thermal breaks)", "Very low"],
                ["Recycled Content", "Often 30-50%", "Varies (typically virgin)"],
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
        <p className="text-center text-text-muted text-sm mt-6 max-w-3xl mx-auto">
          Choose aluminum for contemporary aesthetics, architectural flexibility, and commercial applications. Choose uPVC for maximum energy efficiency, low maintenance, and residential simplicity.
        </p>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionTitle title="Frequently Asked Questions About Aluminum Windows" />
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            [
              "Aren't aluminum windows cold and energy-inefficient?",
              "Not with DECA's thermally-broken aluminum systems. Polyamide thermal breaks interrupt the thermal bridge, achieving U-values of 0.20-0.30 W/m²K—equivalent to traditional uPVC windows. The key is specifying thermal-break systems; non-thermally-broken aluminum should be avoided for climate-controlled spaces.",
            ],
            [
              "How do aluminum windows compare to uPVC in terms of longevity?",
              "Aluminum typically lasts 40-50 years compared to uPVC's 50+ year lifespan. However, aluminum's superior strength means it resists structural failure longer. Both are essentially lifetime-duration products for residential use. DECA backs all aluminum products with comprehensive warranties.",
            ],
            [
              "Can aluminum windows handle large, heavy glass?",
              "Yes—aluminum's primary advantage. Large tempered glass panes, heavy laminated glass, and full-height glass walls are feasible only with aluminum's strength. This is why storefronts and commercial applications demand aluminum.",
            ],
            [
              "What about condensation on aluminum windows?",
              "Thermal-break aluminum systems minimize condensation risk by keeping interior surfaces warm. However, single-glazed or non-thermally-broken aluminum can experience condensation in cold climates. Always specify thermal breaks when selecting aluminum for heated spaces.",
            ],
            [
              "Are aluminum windows available in colors other than silver?",
              "Absolutely. Unlimited custom RAL colors via powder coating, plus anodized finishes (clear, bronze, champagne, dark). Two-tone configurations available—different colors inside and outside. This is one of aluminum's design advantages.",
            ],
            [
              "What's the cost difference between aluminum and uPVC?",
              "Aluminum typically costs 20-40% more than uPVC for comparable window sizes. However, the slim profiles maximize glass area, the design flexibility justifies premium pricing for contemporary projects, and the architectural impact often compensates for higher cost.",
            ],
            [
              "How do you maintain aluminum windows?",
              "Minimal maintenance. Wash frames and glass 2-3x yearly. Occasionally check and lubricate locks/hinges. No painting, staining, or caulking required. Anodized and powder-coated finishes require no additional care.",
            ],
            [
              "Are aluminum windows suitable for residential homes?",
              "Yes, increasingly so. Modern residential architecture embraces aluminum's minimalist aesthetics and design flexibility. DECA produces residential-grade aluminum systems optimized for single-family homes with all required thermal performance and warranties.",
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
                <p className="text-sm text-text-muted">Commercial and residential aluminum system specialists with 10+ years experience</p>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed text-sm">
              Our technical team includes systems engineers who design and specify DECA's aluminum window and curtain wall products for architects and builders nationwide. We combine European thermal engineering standards with North American commercial construction practices to deliver solutions that exceed building code requirements.
            </p>
          </div>

          <h3 className="font-bold text-text-primary text-lg mb-6 text-center">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "uPVC Windows: Energy-Efficient Alternative", href: "/windows/upvc-windows" },
              { title: "Tilt & Turn Window Systems", href: "/tilt-turn" },
              { title: "Architect & Professional Resources", href: "/professionals" },
            ].map((t) => (
              <Link key={t.title} href={t.href} className="bg-warm-gray rounded-lg border border-border p-5 text-center hover:border-blue-accent/50 transition-colors group">
                <p className="text-sm font-medium text-blue-accent group-hover:text-blue-hover transition-colors">{t.title}</p>
                <p className="text-xs text-text-muted mt-2">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        title="Ready for Contemporary Aluminum Windows?"
        subtitle="Get a quote for your commercial or modern residential project. Custom profiles, unlimited colors, and architectural flexibility."
        btnText="Get Custom Quote"
        btnHref="/quote"
      />
    </>
  );
}
