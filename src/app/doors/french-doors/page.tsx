import Link from "next/link";
import { Breadcrumb, PageHero, Section, SectionTitle, CTABlock, ImagePlaceholder, FeatureCard } from "@/components/ui";

export const metadata = {
  title: "French Doors | Double Swing European Doors | DECA Windows",
  description:
    "Classic European-style French swing doors with dual openings, minimal frame profiles, and premium aesthetics. Available in single or double configurations with sidelights. Energy efficient with multi-point locking.",
  keywords: "French doors, swing doors, European doors, double doors, glass doors, patio doors, light doors",
};

export default function FrenchDoorsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Doors", href: "/doors" }, { label: "French Doors" }]} />

      {/* Hero Section */}
      <PageHero
        title="French Doors"
        subtitle="Elegant, functional, and classically beautiful. DECA's French swing doors flood interiors with light while creating seamless transitions to outdoor spaces. Available in single or double configurations with multiple opening options."
        badge="Classic European Style"
      >
        <div className="flex gap-3 flex-wrap mt-8">
          <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded-md font-semibold transition-colors">
            Get Custom Quote
          </Link>
          <Link href="/doors" className="border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-3.5 rounded-md font-semibold transition-colors">
            View All Doors
          </Link>
        </div>
      </PageHero>

      {/* What are French Doors */}
      <Section>
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">What Are French Doors? A Complete Guide</h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            French doors are hinged swing doors with multiple glass panes spanning the full door height. Originally designed in 17th-century France, they epitomize elegance and functionality. Unlike sliding patio doors, French doors swing open in a full arc, creating visual drama and unobstructed passages. They maximize natural light, connect interior and exterior spaces, and provide architectural sophistication that sliding doors cannot match.
          </p>

          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            DECA's French doors are engineered with European precision: minimal frame profiles that maximize glass area, dual swing or single-swing configurations for flexible layouts, and hardware that enables effortless operation. Available in uPVC or aluminum, French doors deliver performance and beauty in equal measure.
          </p>

          <h3 className="text-2xl font-bold text-text-primary mb-4">Why French Doors Excel</h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            French doors create visual continuity between interior and exterior living spaces. Their full-height glass panels flood rooms with natural light, reducing reliance on artificial lighting. The swing mechanism is mechanically simple and reliable—no tracks to jam, no rollers to fail. They work beautifully in both traditional and contemporary homes, adapting to any aesthetic. Most importantly, they create an inviting transition between spaces that sliding doors—with their busy tracks and divided sightlines—cannot replicate.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section gray>
        <SectionTitle title="Key Benefits of French Doors" subtitle="Why homeowners and designers choose French doors for their elegance and function" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Maximum Natural Light",
              description:
                "Full-height glass panes flood interiors with daylight. Reduces artificial lighting needs, creates bright, inviting spaces, and improves mood and circadian rhythm.",
            },
            {
              title: "Visual Elegance",
              description:
                "Symmetrical glass-paned design is timelessly beautiful. Works in traditional farmhouses, contemporary minimalist homes, and everything between. Instantly elevates architectural presence.",
            },
            {
              title: "Unobstructed Passage",
              description:
                "Unlike sliding doors with center posts, French doors swing fully open creating completely clear passages. Move furniture, appliances, and landscape materials outdoors effortlessly.",
            },
            {
              title: "Superior Airflow",
              description:
                "When opened, both doors move air freely. Creates cross-ventilation that cools homes naturally and circulates fresh air more effectively than sliding doors.",
            },
            {
              title: "Mechanical Simplicity",
              description:
                "Hinged swing mechanism is mechanically simple and reliable. No tracks to clean, no rollers to fail. Hardware lasts decades with minimal maintenance.",
            },
            {
              title: "Flexible Configurations",
              description:
                "Single doors, double doors, triple configurations, narrow sidelights, and transom windows. Fully customizable to match any architectural vision.",
            },
            {
              title: "Energy Efficiency",
              description:
                "Modern glazing with argon fill, insulated frames, and multi-point locking deliver thermal performance comparable to windows. Reduces heating and cooling costs.",
            },
            {
              title: "Security & Safety",
              description:
                "Multi-point locking systems and tempered glass provide security and safety. Full visibility through glass panes provides psychological reassurance.",
            },
            {
              title: "Indoor/Outdoor Integration",
              description:
                "Creates seamless transitions between interior and exterior spaces. Extends living areas, blurs boundaries, and enhances connection to nature.",
            },
          ].map((benefit, i) => (
            <FeatureCard key={i} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </Section>

      {/* Opening Configurations */}
      <Section>
        <SectionTitle title="Opening Configurations" subtitle="Flexible designs that match your space and aesthetic" />
        <div className="max-w-5xl mx-auto space-y-12">
          {[
            {
              name: "Single French Door",
              description:
                "One-panel swing door ideal for interior passages, bathrooms, or narrow exterior openings. Clean aesthetic with minimal frame. Standard 36-42\" widths.",
              useCases: ["Interior passages", "Bathroom entries", "Narrow openings", "Pantries and closets"],
              icon: "🚪",
            },
            {
              name: "Double French Doors (Pair)",
              description:
                "Two matching doors swing open from center post to create symmetrical, elegant passage. Ideal for living rooms, dining rooms, and patio access. 60-72\" total widths standard.",
              useCases: ["Living room to patio", "Dining room entries", "Master bedroom decks", "Sunrooms", "Large openings"],
              icon: "🚪🚪",
            },
            {
              name: "Double with Sidelights",
              description:
                "Pair of French doors flanked by fixed glass sidelights. Maximizes light and glass area while creating dramatic architectural presence. Ideal for formal entries.",
              useCases: ["Front entries", "Formal dining rooms", "Foyer passages", "Statement walls"],
              icon: "🪟🚪🚪🪟",
            },
            {
              name: "Triple Configuration",
              description:
                "Three doors (center swinging either direction, outer doors may be fixed or operable). Maximum flexibility for large openings and complex layouts.",
              useCases: ["Wide patio walls", "Bi-fold alternatives", "Three-panel access", "Commercial entries"],
              icon: "🚪🚪🚪",
            },
            {
              name: "With Transom",
              description:
                "French doors paired with fixed transom window above. Extends height, allows ventilation in upper window while doors remain closed.",
              useCases: ["Higher ceilings", "Additional ventilation", "Enhanced light", "Contemporary design"],
              icon: "🪟\n🚪🚪",
            },
          ].map((config, i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-6xl text-center text-blue-accent/20">{config.icon}</div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{config.name}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">{config.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-text-primary mb-2">Common Applications</p>
                      <ul className="space-y-1">
                        {config.useCases.map((use) => (
                          <li key={use} className="text-xs text-text-secondary flex gap-2">
                            <span className="text-blue-accent">→</span>
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section gray>
        <SectionTitle badge="Performance Standards" title="Technical Specifications" />
        <div className="bg-white rounded-xl border border-border overflow-hidden max-w-4xl mx-auto mb-12">
          {[
            ["Door Type", "Hinged swing doors with 45° arc swing clearance"],
            ["Frame Material", "uPVC, aluminum, or composite with steel reinforcement"],
            ["Panel Count", "Typically 10-15 glass panes per door (4-6 panes per column)"],
            ["Pane Size", "Adjustable from small 6-pane classic to large 2-pane contemporary"],
            ["Glass Type", "Tempered safety glass, insulated units with argon fill"],
            ["Thermal Performance", "U-Value 0.9-1.3 W/m²K typical (varies by configuration)"],
            ["Sound Insulation", "STC 30-38 dB reduction depending on glazing"],
            ["Standard Widths", "Single: 32-42\", Double: 60-72\" (custom sizes available)"],
            ["Standard Height", "80\" standard (custom heights up to 96\" possible)"],
            ["Lock Points", "Multi-point locking: 3-5 points per door"],
            ["Hardware", "Heavy-duty hinges, handle-locks, and foot-controlled bolts"],
            ["Hinge Type", "Concealed or visible depending on aesthetic preference"],
            ["Opening Options", "Single or both doors swinging, fixed outer doors in triples"],
            ["Weathersealing", "Compression seals and gaskets prevent drafts and water infiltration"],
            ["Lifespan", "40-50 years with normal maintenance"],
          ].map(([label, value], i) => (
            <div key={label} className={`flex justify-between px-6 py-4 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
              <span className="text-sm font-medium text-text-secondary w-2/5">{label}</span>
              <span className="text-sm text-text-primary leading-relaxed">{value}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-blue-accent text-sm font-medium hover:text-blue-hover transition-colors">
            Download French Door Specifications (PDF) →
          </button>
        </div>
      </Section>

      {/* Indoor vs Outdoor Use */}
      <Section>
        <SectionTitle title="Indoor vs. Outdoor Use" subtitle="French doors work beautifully in multiple applications" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-blue-light rounded-xl p-8 border border-blue-accent/20">
            <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">🏠</span> Indoor Applications
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Interior French doors create dramatic visual division between spaces while maintaining connection. They work beautifully between living room and dining room, master bedroom and ensuite, office and hallway. Interior French doors add architectural interest and elegance without requiring weather protection.
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Living room to dining room transitions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Master bedroom to bathroom or dressing room</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Home office or library from hallway</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Pantry or walk-in closet access</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Media room or wine cellar doors</span>
              </li>
            </ul>
          </div>

          <div className="bg-warm-gray rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">🌳</span> Outdoor Applications
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Exterior French doors are the ultimate connection to outdoor living. They open patios, decks, and gardens seamlessly, extending living spaces and creating fluid transitions. Multi-point locking, weather seals, and insulated frames ensure performance in all climates.
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Living room to patio or deck</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Dining room to garden or yard</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Master bedroom to private balcony</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Sunroom to deck transitions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-accent font-bold">•</span>
                <span>Basement family room to patio level</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Security & Energy */}
      <Section gray>
        <SectionTitle title="Security & Energy Performance" subtitle="Modern French doors combine elegance with protection" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Security Features</h3>
            <ul className="space-y-4 mb-8">
              {[
                {
                  title: "Multi-Point Locking",
                  desc: "3-5 lock points per door ensure secure closure. Distributes force across entire frame for maximum security.",
                },
                {
                  title: "Tempered Safety Glass",
                  desc: "All glass is tempered for safety. Even if broken, glass shatters into small, safe pieces rather than dangerous shards.",
                },
                {
                  title: "Adjustable Hinges",
                  desc: "Heavy-duty hinges support full-height glass and allow fine-tuning of door alignment and closing force.",
                },
                {
                  title: "Foot Bolts",
                  desc: "Optional foot-controlled bolts lock bottom of door when open, preventing wind damage or unintended closing.",
                },
              ].map((f) => (
                <div key={f.title}>
                  <p className="font-semibold text-text-primary mb-1">{f.title}</p>
                  <p className="text-sm text-text-secondary">{f.desc}</p>
                </div>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Energy Performance</h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Insulated Glass Units",
                  desc: "Argon-filled double or triple-pane glass with insulated spacers reduces heat loss and gain.",
                },
                {
                  title: "Sealed Frames",
                  desc: "Compression seals and gaskets prevent air leakage and drafts. U-values of 0.9-1.3 typical.",
                },
                {
                  title: "Thermal Breaks",
                  desc: "Aluminum doors include polyamide thermal breaks to interrupt thermal bridging.",
                },
                {
                  title: "Low-E Coatings",
                  desc: "Optional low-emissivity coatings reflect heat back indoors in winter, improving efficiency.",
                },
              ].map((e) => (
                <div key={e.title}>
                  <p className="font-semibold text-text-primary mb-1">{e.title}</p>
                  <p className="text-sm text-text-secondary">{e.desc}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section>
        <SectionTitle title="French Doors vs. Sliding Patio Doors" subtitle="Understanding the practical differences" />
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="px-5 py-3.5 text-left font-medium">Feature</th>
                <th className="px-5 py-3.5 text-center font-medium">French Doors</th>
                <th className="px-5 py-3.5 text-center font-medium">Sliding Patio Doors</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Visual Appeal", "Elegant, symmetrical, timeless", "Contemporary, functional, busy"],
                ["Natural Light", "Excellent — full height glass", "Good — center post blocks sightline"],
                ["Unobstructed Passage", "Complete — doors swing fully open", "Limited — center post always present"],
                ["Mechanical Simplicity", "Simple hinge mechanism", "Complex track & roller system"],
                ["Maintenance", "Minimal — hinge lubrication occasional", "Moderate — tracks need regular cleaning"],
                ["Air Leakage Risk", "Very low with proper seals", "Higher — tracks collect dirt"],
                ["Wide Opening Capacity", "Both doors swing creating 100% open", "50% maximum (one panel slides)"],
                ["Closing Force Control", "Adjustable hinges allow fine-tuning", "Limited control"],
                ["Noise Level", "Quiet operation when properly maintained", "Track noise, roller squeaking"],
                ["Cost", "$$ (mid-range)", "$$ (comparable)"],
                ["Best For", "Elegance, interior passages, traditional homes", "Large openings, contemporary spaces"],
              ].map(([label, french, sliding], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-5 py-3.5 font-medium text-text-secondary">{label}</td>
                  <td className="px-5 py-3.5 text-center text-text-primary">{french}</td>
                  <td className="px-5 py-3.5 text-center text-text-primary">{sliding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-text-muted text-sm mt-6 max-w-3xl mx-auto">
          French doors excel when elegance matters. Sliding doors work well for large, unobstructed openings in contemporary spaces.
        </p>
      </Section>

      {/* FAQ */}
      <Section gray>
        <SectionTitle title="Frequently Asked Questions About French Doors" />
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            [
              "Are French doors difficult to operate?",
              "No. Modern DECA French doors operate smoothly with quality hinges and well-adjusted closing mechanisms. Children and elderly can open them easily. Optional foot bolts hold doors open in wind without strain.",
            ],
            [
              "Can French doors be used in cold climates?",
              "Absolutely. Modern French doors with insulated glazing and thermal breaks achieve U-values competitive with windows. They work beautifully in cold climates when specified with triple glazing and insulated frames.",
            ],
            [
              "Do French doors require regular maintenance?",
              "Minimal. Wash glass and frames periodically. Occasionally lubricate hinges and locks. No caulking, painting, or weather-stripping replacement needed with proper initial installation.",
            ],
            [
              "Can I get French doors with different operable configurations?",
              "Yes. Both doors can swing, only one door can swing (other fixed), or outer doors in triple configurations can be fixed. Flexible configurations match any architectural vision.",
            ],
            [
              "What glass patterns are available for privacy?",
              "Frosted glass, decorative patterns, textured glass, or even laminated glass for security. Preserve elegance while controlling visibility. Sidelights can be frosted while door panels remain clear.",
            ],
            [
              "Do French doors meet current energy codes?",
              "Yes. Specify triple-glazed insulated units with thermal breaks and insulated frames. DECA French doors achieve U-values of 0.9-1.3, meeting or exceeding ENERGY STAR and most state building code requirements.",
            ],
            [
              "How are French doors more elegant than sliding doors?",
              "Symmetrical design, full-height glass panes, hinged swing mechanism, and architectural tradition create timeless elegance that sliding doors cannot match. French doors are simply more beautiful.",
            ],
            [
              "Can interior French doors improve my home's design?",
              "Dramatically. Interior French doors add sophistication, create visual interest, and elegantly divide spaces while maintaining connection. They're one of the most impactful design elements available.",
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
                <p className="text-sm text-text-muted">Design and functionality specialists focused on door aesthetics and mechanical performance</p>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed text-sm">
              Our team includes specialists in door design, mechanical systems, and architectural integration. We work with architects and designers nationwide to specify French doors that are both beautiful and functional, meeting energy code requirements while delivering timeless elegance.
            </p>
          </div>

          <h3 className="font-bold text-text-primary text-lg mb-6 text-center">Related Door & Window Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Entry & Front Doors", href: "/doors/entry-doors" },
              { title: "Sliding Patio Doors", href: "/sliding-doors" },
              { title: "Tilt & Turn Windows", href: "/tilt-turn" },
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
        title="Add Elegance with French Doors"
        subtitle="Interior passages or outdoor transitions. Custom configurations and colors. Get your quote today."
        btnText="Get Custom Quote"
        btnHref="/quote"
      />
    </>
  );
}
