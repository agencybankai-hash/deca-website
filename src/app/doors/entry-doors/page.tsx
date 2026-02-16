import Link from "next/link";
import { Breadcrumb, PageHero, Section, SectionTitle, CTABlock, ImagePlaceholder, FeatureCard } from "@/components/ui";

export const metadata = {
  title: "Entry Doors & Front Doors | Secure European Design | DECA Windows",
  description:
    "Premium entry and front doors with European engineering, multi-point locking (5-7 points), RC2/RC3 security rating, and thermal performance U-value 0.8-1.2. Sidelights, transoms, and custom glass options available.",
  keywords: "entry doors, front doors, European doors, secure doors, thermal doors, multi-point locking",
};

export default function EntryDoorsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Doors", href: "/doors" }, { label: "Entry Doors" }]} />

      {/* Hero Section */}
      <PageHero
        title="Entry & Front Doors"
        subtitle="First impressions matter. DECA's European-engineered entry doors combine security, thermal performance, and timeless design. Multi-point locking, weather seals, and sidelights create inviting entries that protect your home."
        badge="Secure Entry Systems"
      >
        <div className="flex gap-3 flex-wrap mt-8">
          <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded-md font-semibold transition-colors">
            Get Custom Quote
          </Link>
          <Link href="/doors" className="border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-3.5 rounded-md font-semibold transition-colors">
            View All Door Options
          </Link>
        </div>
      </PageHero>

      {/* Why European Entry Doors */}
      <Section>
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Why Choose European Entry Doors?</h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            American entry door standards lag decades behind European construction. European entry doors are engineered to extreme durability standards, featuring multi-point locking mechanisms that distribute force across the entire frame, structural reinforcement that prevents frame deformation under load, and thermal seals that eliminate drafts and energy loss. DECA's entry doors bring this European engineering to American homes, delivering security, performance, and aesthetic sophistication that traditional American doors cannot match.
          </p>

          <h3 className="text-2xl font-bold text-text-primary mb-4">The Security Advantage</h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            Traditional American entry doors use a single deadbolt lock—a security design that's fundamentally flawed. When force is applied to one point, the door and frame can warp and fail. European entry doors use multi-point locking systems where 5-7 lock points engage simultaneously across the top, middle, and bottom of the frame. This distributes force evenly, making forced entry virtually impossible. RC2 and RC3 certifications test doors against actual burglary techniques and ensure proven protection.
          </p>

          <h3 className="text-2xl font-bold text-text-primary mb-4">Thermal Performance & Comfort</h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            Entry doors are often a home's largest thermal weak point. DECA entry doors feature triple-weathersealing, thermal foam insulation, and thermally-broken hardware that eliminate drafts and energy loss. U-values of 0.8-1.2 (compared to 1.5-2.5 for standard doors) reduce heating/cooling costs and maintain comfortable indoor temperatures even in extreme climates.
          </p>
        </div>
      </Section>

      {/* Security Features */}
      <Section gray>
        <SectionTitle badge="Multi-Point Protection" title="Security Features & Certification" />
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Multi-Point Locking System</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <span className="text-blue-accent font-bold text-xl flex-shrink-0">🔒</span>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Top Lock Point</p>
                    <p className="text-sm text-text-secondary">Secures upper frame, prevents top prying</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-accent font-bold text-xl flex-shrink-0">🔒</span>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Center Lock Point</p>
                    <p className="text-sm text-text-secondary">Primary deadbolt, centrally located</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-accent font-bold text-xl flex-shrink-0">🔒</span>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Bottom Lock Points (2-3)</p>
                    <p className="text-sm text-text-secondary">Secure lower frame, prevent bottom forcing</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-accent font-bold text-xl flex-shrink-0">🔒</span>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Compression Seals</p>
                    <p className="text-sm text-text-secondary">All lock points compress frame seals when locked</p>
                  </div>
                </li>
              </ul>

              <div className="bg-blue-light rounded-lg p-4 border border-blue-accent/20">
                <p className="text-sm font-semibold text-text-primary mb-2">RC2/RC3 Certification</p>
                <p className="text-xs text-text-secondary">
                  European Resistance Class ratings test doors against specific burglary tools and techniques. RC2 resists 3-5 minutes of attack; RC3 resists 10+ minutes. DECA doors available in both ratings.
                </p>
              </div>
            </div>
            <ImagePlaceholder label="Multi-Point Lock Mechanism Diagram" height="h-96" />
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section>
        <SectionTitle badge="Performance Standards" title="Technical Specifications" />
        <div className="bg-white rounded-xl border border-border overflow-hidden max-w-4xl mx-auto mb-12">
          {[
            ["Door Construction", "Solid core or foam-insulated with galvanized steel reinforcement"],
            ["Thermal Insulation", "100mm foam core or equivalent provides R-value of 8-12"],
            ["U-Value Range", "0.8-1.2 W/m²K (significantly exceeds 1.5-2.5 standard doors)"],
            ["Weathersealing", "Triple compression seals with brush strips and gasket seals"],
            ["Lock Points", "5-7 locking points depending on door size and configuration"],
            ["Lock Type", "Euro cylinder with multipoint engagement or mortise lock systems"],
            ["Security Rating", "RC2 (3-5 min resistance) or RC3 (10+ min resistance)"],
            ["Door Width", "32-48 inches standard (custom widths available up to 60 inches)"],
            ["Door Height", "Standard 80 inches, custom heights available"],
            ["Material", "uPVC, aluminum, or composite with structural reinforcement"],
            ["Glass Options", "Tempered safety glass in decorative or security patterns"],
            ["Hardware", "Stainless or plated hinges with adjustable positioning"],
            ["Lifespan", "40-50 years with normal maintenance"],
            ["Weather Resistance", "Waterproof gaskets prevent rain infiltration and drafts"],
            ["Fire Rating", "30-90 minute ratings available for commercial/multi-unit"],
          ].map(([label, value], i) => (
            <div key={label} className={`flex justify-between px-6 py-4 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
              <span className="text-sm font-medium text-text-secondary w-2/5">{label}</span>
              <span className="text-sm text-text-primary leading-relaxed">{value}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-blue-accent text-sm font-medium hover:text-blue-hover transition-colors">
            Download Entry Door Specifications (PDF) →
          </button>
        </div>
      </Section>

      {/* Design Options */}
      <Section gray>
        <SectionTitle title="Design & Configuration Options" subtitle="Customize your entry to match your home's architecture" />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Panel Configurations",
                description:
                  "Single, double, or triple panel arrangements. Solid panels for privacy, glazed panels for light. Asymmetric designs for modern aesthetics.",
                image: "Door Panel Options",
              },
              {
                title: "Sidelights & Transoms",
                description:
                  "Fixed glass sidelights frame the door and flood entryways with natural light. Transom windows above create dramatic architectural impact.",
                image: "Sidelights & Transoms",
              },
              {
                title: "Glass Styles",
                description:
                  "Clear tempered glass for maximum light, frosted or decorative patterns for privacy, laminated glass for additional security.",
                image: "Glass Patterns",
              },
              {
                title: "Hardware Styles",
                description:
                  "Contemporary pulls, classic handles, or European lever handles. All hardware rated for weather exposure and security compliance.",
                image: "Hardware Options",
              },
              {
                title: "Color & Finish",
                description:
                  "50+ RAL colors via powder coating, anodized finishes for aluminum, wood-grain textures for composite doors.",
                image: "Color Options",
              },
              {
                title: "Glass Glazing",
                description:
                  "Single, double, or triple-pane options. Insulated glass units reduce sound and improve thermal performance.",
                image: "Glazing Styles",
              },
            ].map((opt, i) => (
              <div key={i} className="bg-white rounded-xl border border-border p-6">
                <ImagePlaceholder label={opt.image} height="h-48" />
                <h3 className="font-semibold text-text-primary text-lg mt-4 mb-2">{opt.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Material Options */}
      <Section>
        <SectionTitle title="Material Options" subtitle="Choose the best material for your climate and aesthetic" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "uPVC Entry Doors",
              description:
                "Excellent thermal performance, low maintenance, available in 50+ colors. Ideal for cold climates and traditional homes. 50+ year lifespan.",
              benefits: ["U-Value: 0.8-1.2", "50+ year lifespan", "No painting needed", "Affordable option"],
            },
            {
              title: "Aluminum Entry Doors",
              description:
                "Sleek, contemporary aesthetics with thermal-break technology. Excellent for modern homes. Superior structural strength for large glass areas.",
              benefits: ["Contemporary design", "Unlimited colors", "Slim profiles", "Large glass options"],
            },
            {
              title: "Composite Entry Doors",
              description:
                "Wood-like appearance with superior durability. Combines beauty of wood with performance of engineered materials. No rotting or warping.",
              benefits: ["Wood-grain textures", "Durable & strong", "Low maintenance", "Timeless appeal"],
            },
          ].map((mat, i) => (
            <div key={i} className="bg-blue-light rounded-xl p-6 border border-blue-accent/20">
              <h3 className="font-bold text-text-primary text-lg mb-3">{mat.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{mat.description}</p>
              <ul className="space-y-2">
                {mat.benefits.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-text-secondary">
                    <span className="text-blue-accent font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section gray>
        <SectionTitle title="Frequently Asked Questions About Entry Doors" />
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            [
              "How secure are multi-point locking doors compared to traditional deadbolts?",
              "Multi-point locking is significantly more secure. Traditional single-deadbolt doors fail when force is applied to one location—the frame warps and the deadbolt pulls out. Multi-point systems distribute force across 5-7 lock points, making the entire frame a unified security element. RC2/RC3 testing proves these doors resist 3-10+ minutes of active burglary techniques.",
            ],
            [
              "Will entry doors really reduce my heating and cooling costs?",
              "Yes, significantly. Entry doors are often responsible for 10-15% of home energy loss. DECA entry doors with U-values of 0.8-1.2 (vs. 1.5-2.5 for standard doors) typically save $200-400 annually in heating/cooling costs. Combined with windows, savings can exceed $1,500/year.",
            ],
            [
              "Can I get sidelights and a transom with my entry door?",
              "Absolutely. Sidelights (fixed glass panels flanking the door) and transoms (fixed windows above) are standard offerings. Available in matching materials and finishes. Sidelights can be glazed or privacy-frosted, and all glass is tempered safety glass.",
            ],
            [
              "What's the difference between RC2 and RC3 security ratings?",
              "Both test doors against actual burglary tools and techniques. RC2 requires 3-5 minutes of resistance; RC3 requires 10+ minutes. RC3 is suitable for high-value homes or security-conscious homeowners. RC2 is appropriate for typical residential use and meets insurance requirements.",
            ],
            [
              "Can I customize the panel configuration and glass style?",
              "Yes. Single, double, or triple panels are available. Glazing options include clear, frosted, decorative patterns, or solid panels. Asymmetric designs are possible for contemporary aesthetics. Tempered safety glass is standard.",
            ],
            [
              "How long do entry doors typically last?",
              "DECA entry doors are engineered for 40-50 year lifespan with normal maintenance. Weather-sealed entry doors require minimal upkeep—an occasional wash and hardware lubrication. We back all doors with comprehensive warranties.",
            ],
            [
              "What about drafts and air leakage?",
              "DECA entry doors feature triple compression seals, brush gaskets, and weatherstripping that eliminate drafts. Air leakage rates below 0.3 CFM/ft² are typical—significantly better than standard doors.",
            ],
            [
              "Are entry doors available in colors other than white and black?",
              "Yes. uPVC and aluminum entry doors are available in 50+ RAL colors. Composite doors offer wood-grain finishes including oak, walnut, and mahogany. Two-tone configurations are possible with different interior and exterior finishes.",
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
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-light rounded-xl border border-blue-accent/20 p-8 mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent font-bold text-xl">DT</div>
              <div>
                <h3 className="font-semibold text-text-primary text-lg">DECA Technical Team</h3>
                <p className="text-sm text-text-muted">Security and thermal performance specialists with European engineering background</p>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed text-sm">
              Our technical team includes security engineers and thermal specialists focused on entry door performance. We design and test DECA entry doors to ensure they meet RC2/RC3 security standards, maintain U-values below 1.2, and provide comfort in extreme climates.
            </p>
          </div>

          <h3 className="font-bold text-text-primary text-lg mb-6 text-center">Related Door Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "French Swing Doors", href: "/doors/french-doors" },
              { title: "Sliding Patio Doors", href: "/sliding-doors" },
              { title: "Performance & Testing", href: "/performance" },
            ].map((t) => (
              <Link key={t.title} href={t.href} className="bg-warm-gray rounded-lg border border-border p-5 text-center hover:border-blue-accent/50 transition-colors group">
                <p className="text-sm font-medium text-blue-accent group-hover:text-blue-hover transition-colors">{t.title}</p>
                <p className="text-xs text-text-muted mt-2">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        title="Ready to Upgrade Your Entry?"
        subtitle="Premium security, energy efficiency, and design. Get a custom quote for your entry door project."
        btnText="Get Custom Quote"
        btnHref="/quote"
      />
    </>
  );
}
