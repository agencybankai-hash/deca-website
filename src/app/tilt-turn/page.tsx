import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb, Section, SectionTitle, CTABlock, ServiceIcons, StatCard } from "@/components/ui";
import { WindowConfigurator } from "@/components/ProductConfigurator";

export const metadata: Metadata = {
  title: "Tilt & Turn Windows | European Style | DECA Windows",
  description: "Premium European tilt & turn windows with two opening modes. GEALAN profiles, U-values as low as 0.14, noise reduction up to 50 dB, manufactured in Massachusetts.",
  alternates: { canonical: "/tilt-turn" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How long do tilt and turn windows last?", "acceptedAnswer": { "@type": "Answer", "text": "With proper maintenance, DECA tilt and turn windows have a service life of 50+ years. We back this with a 15-year frame warranty and 10-year glass warranty." } },
    { "@type": "Question", "name": "Are tilt and turn windows more expensive than double hung?", "acceptedAnswer": { "@type": "Answer", "text": "Initial cost is typically 15-30% higher, but the energy savings, durability, and superior performance make them significantly more cost-effective over the window's lifetime." } },
    { "@type": "Question", "name": "Can I get custom sizes and shapes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We manufacture every window to order at our Massachusetts factory. Arched, circular, triangular, and any custom dimensions are available." } },
    { "@type": "Question", "name": "How energy efficient are they?", "acceptedAnswer": { "@type": "Answer", "text": "Our triple-glazed tilt and turn windows achieve U-values as low as 0.14 W/m²K — significantly exceeding ENERGY STAR requirements of 0.30." } },
    { "@type": "Question", "name": "Do they meet US building codes?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. All DECA windows are NFRC certified and meet or exceed all US building code requirements." } },
  ],
};

/* All images served from public/assets/ */
const a = "/assets";

export default function TiltTurnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb items={[{ label: "Windows", href: "/windows" }, { label: "Tilt & Turn Windows" }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-brand mb-3">Most Popular in Europe</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-5">Tilt & Turn Windows</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                The most versatile window system in the world. Two opening modes,
                exceptional performance, and German GEALAN engineering —
                manufactured in Massachusetts.
              </p>

              {/* Trust micro-badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["ENERGY STAR®", "NFRC Certified", "Made in MA", "RC2 Security"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary bg-warm-gray border border-border rounded-full px-3 py-1.5">
                    <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/></svg>
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link href="/quote" className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-sm">
                  Get a Quote
                </Link>
                <a href="tel:+14137714457" className="border border-border text-text-primary hover:border-brand/30 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                  (413) 771-4457
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={`${a}/gallery/gallery-3.webp`}
                alt="DECA tilt & turn window installed in a modern home"
                width={800}
                height={600}
                className="w-full h-[450px] object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm font-medium">European tilt & turn uPVC window — Westfield, MA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="bg-brand text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="0.14" label="Best U-Value (W/m²K)" light />
          <StatCard value="50 dB" label="Noise Reduction" light />
          <StatCard value="12" label="Lock Points" light />
          <StatCard value="50+" label="Year Lifespan" light />
        </div>
      </section>

      {/* ═══════ VIDEO — How It Works ═══════ */}
      <Section>
        <SectionTitle
          badge="See It In Action"
          title="Two Modes, One Window"
          subtitle="The tilt & turn mechanism gives you complete control over ventilation, cleaning, and security."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Tilt Mode — Ventilation",
              desc: "Turn handle up — window tilts inward at the top for secure, rain-safe airflow. Perfect for sleep, child safety, and year-round ventilation.",
              video: `${a}/videos/ventilation.mp4`,
            },
            {
              title: "Turn Mode — Easy Cleaning",
              desc: "Turn handle to the side — window opens fully inward like a door. Clean exterior glass from inside your home, on any floor.",
              video: `${a}/videos/easy-to-clean.mp4`,
            },
            {
              title: "Closed — Airtight & Secure",
              desc: "Handle down — up to 12 locking points engage simultaneously. Compression seals create an airtight, watertight, burglar-resistant barrier.",
              video: `${a}/videos/airtight-secure.mp4`,
            },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 pb-0">
                <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  <video
                    src={v.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-text-primary text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ CONFIGURATOR ═══════ */}
      <WindowConfigurator />

      {/* ═══════ PROFILE TECHNOLOGY ═══════ */}
      <Section gray>
        <SectionTitle
          badge="GEALAN Engineering"
          title="Technical Specifications"
          subtitle="Professional-grade GEALAN profiles with NFRC-certified performance."
        />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            {[
              ["Profile System", "GEALAN-LINEAR® / S 8000"],
              ["Profile Depth", "74mm – 83mm"],
              ["Material", "uPVC + galvanized steel reinforcement"],
              ["Chamber Count", "5–6 chambers"],
              ["Surface", "GEALAN-acrylcolor® (co-extruded)"],
              ["Glass Package", "Triple-pane, argon-filled, up to 52mm"],
              ["U-Factor", "As low as 0.14 W/m²K"],
              ["Max Size", "Up to 11′6″ × 11′6″"],
              ["Sound Insulation", "STC 42–50 dB"],
              ["Lock Points", "8–12 multi-point (Roto/Siegenia)"],
              ["Security Rating", "RC2 / RC3 certified"],
              ["Insect Screen", "FlexScreen® (virtually invisible)"],
            ].map(([label, value], i) => (
              <div key={label} className={`flex justify-between px-6 py-4 border-b border-border last:border-b-0 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
                <span className="text-sm font-medium text-text-secondary">{label}</span>
                <span className="text-sm text-text-primary font-semibold text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* Cross-section images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "components-1.webp", label: "Profile cross-section" },
                { src: "components-2.webp", label: "Chamber structure" },
                { src: "components-3.webp", label: "Seal detail" },
                { src: "components-5.webp", label: "Hardware detail" },
              ].map((c) => (
                <div key={c.src} className="bg-white rounded-xl overflow-hidden border border-border">
                  <Image
                    src={`${a}/components/${c.src}`}
                    alt={`DECA tilt & turn window ${c.label}`}
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover"
                  />
                  <p className="text-[11px] text-text-muted text-center py-2">{c.label}</p>
                </div>
              ))}
            </div>
            <Image
              src={`${a}/components/components-4.webp`}
              alt="DECA window steel reinforcement detail"
              width={600}
              height={300}
              className="w-full rounded-xl border border-border"
            />
          </div>
        </div>
      </Section>

      {/* ═══════ GLAZING — Glass type cards ═══════ */}
      <Section>
        <SectionTitle badge="Glass Options" title="Glazing Configuration" subtitle="Choose the right glass package for your climate." />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "double.webp", name: "Double Pane", spec: "U-Factor 0.26" },
            { src: "laminated-double.webp", name: "Laminated Double", spec: "U-Factor 0.18" },
            { src: "triple.webp", name: "Triple Pane ★", spec: "U-Factor 0.14" },
            { src: "low-e-glass.webp", name: "Low-E Coating", spec: "UV Block 99.5%" },
          ].map((g) => (
            <div key={g.name} className="bg-white rounded-xl border border-border overflow-hidden text-center">
              <Image src={`${a}/images/${g.src}`} alt={`${g.name} glazing`} width={300} height={200} className="w-full h-36 object-contain bg-gray-50 p-4" />
              <div className="p-3">
                <p className="text-sm font-semibold text-text-primary">{g.name}</p>
                <p className="text-xs text-brand">{g.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ GLAZING COMPARISON TABLE ═══════ */}
      <Section gray>
        <SectionTitle badge="Performance" title="Glazing Comparison" subtitle="See how each glass package performs across key metrics." />
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-6 py-4 text-left font-semibold">Metric</th>
                <th className="px-6 py-4 text-center font-semibold">Double</th>
                <th className="px-6 py-4 text-center font-semibold">Laminated Double</th>
                <th className="px-6 py-4 text-center font-semibold bg-brand-dark">Triple ★</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["U-Factor", "0.26", "0.18", "0.14"],
                ["R-Value", "4.0", "5.0", "7.1"],
                ["SHGC", "0.71", "0.60", "0.28–0.60"],
                ["Sound (STC)", "32 dB", "40 dB", "42–50 dB"],
                ["Argon Fill", "No", "No", "Yes (both)"],
                ["Best For", "Mild climates", "Safety / moderate", "New England ★"],
              ].map(([label, ...vals], i) => (
                <tr key={label} className={`border-t border-border ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
                  <td className="px-6 py-4 font-semibold text-text-primary">{label}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={`px-6 py-4 text-center ${j === 2 ? "font-bold text-brand" : "text-text-secondary"}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══════ GALLERY ═══════ */}
      <Section gray>
        <SectionTitle badge="Our Work" title="Tilt & Turn in Real Homes" subtitle="DECA windows installed across New England." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { src: `${a}/gallery/gallery-1.webp`, tall: true },
            { src: `${a}/gallery/gallery-2.webp`, tall: true },
            { src: `${a}/gallery/gallery-3.webp` },
            { src: `${a}/gallery/gallery-4.webp` },
            { src: `${a}/gallery/gallery-5.webp` },
            { src: `${a}/gallery/gallery-6.webp` },
            { src: `${a}/gallery/gallery-7.webp` },
            { src: `${a}/gallery/gallery-8.webp` },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl overflow-hidden ${item.tall ? "md:row-span-2" : ""}`}>
              <Image
                src={item.src}
                alt={`DECA tilt & turn window installation ${i + 1}`}
                width={500}
                height={item.tall ? 600 : 300}
                className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${item.tall ? "h-full" : "h-48 md:h-52"}`}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ REVIEWS ═══════ */}
      <Section>
        <div className="text-center mb-8">
          <Image src={`${a}/icons/stars.svg`} alt="5-star reviews" width={108} height={20} className="mx-auto mb-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">What Homeowners Say</h2>
          <p className="text-sm text-text-muted">Trusted by families across New England</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Miranda S.", text: "Our energy bills dropped by 45% after replacing all windows with DECA. The noise reduction is incredible — we live near a highway and can barely hear traffic now.", photo: "miranda.webp" },
            { name: "Jordan K.", text: "The tilt-and-turn mechanism is a game-changer. Easy cleaning, great ventilation options, and the build quality is noticeably better than our old vinyl windows.", photo: "jordan.webp" },
            { name: "Casey M.", text: "Impressive attention to detail from consultation to installation. The triple-glazed windows keep our 1920s colonial warm even in January without cranking the heat.", photo: "casey.webp" },
          ].map((r) => (
            <div key={r.name} className="bg-warm-gray rounded-xl border border-border p-6">
              <Image src={`${a}/icons/stars.svg`} alt="5 stars" width={100} height={20} className="mb-3" />
              <p className="text-sm text-text-secondary leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Image src={`${a}/team/${r.photo}`} alt={r.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm font-semibold text-text-primary">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ SERVICE ═══════ */}
      <Section gray>
        <SectionTitle title="Exceptional Service in Massachusetts" subtitle="From consultation to installation, we're with you every step." />
        <ServiceIcons />
      </Section>

      {/* ═══════ WINDOW TYPES ═══════ */}
      <Section>
        <SectionTitle badge="Configurations" title="Available Styles" subtitle="Every window is custom-made to your specifications." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "two-sections.webp", name: "Double Section", desc: "Side-by-side tilt & turn panels" },
            { src: "three-sections.webp", name: "Triple Section", desc: "Panoramic three-panel systems" },
            { src: "curved-type.webp", name: "Arched / Custom", desc: "Any shape — curved, triangular, circular" },
            { src: "basemant-windows.webp", name: "Basement Windows", desc: "Compact tilt-only for below-grade" },
          ].map((w) => (
            <div key={w.name} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all group">
              <Image src={`${a}/images/${w.src}`} alt={`DECA ${w.name}`} width={400} height={300} className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4">
                <h4 className="font-semibold text-text-primary text-sm">{w.name}</h4>
                <p className="text-xs text-text-muted">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ FAQ ═══════ */}
      <Section gray>
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            { q: "How long do tilt and turn windows last?", a: "With proper maintenance, DECA tilt and turn windows last 50+ years. We back this with a 15-year frame warranty, 10-year glass warranty, and 5-year hardware warranty." },
            { q: "Are tilt and turn windows more expensive than double hung?", a: "Initial cost is typically 15-30% higher, but the energy savings ($1,500-2,500/year for a typical home), durability, and superior performance make them significantly more cost-effective over their lifetime." },
            { q: "Can I get custom sizes and shapes?", a: "Yes. We manufacture every window to order in Massachusetts. Arched, circular, triangular, and any custom dimensions. 50+ RAL colors plus wood-grain laminates." },
            { q: "What energy savings can I expect?", a: "Our triple-glazed tilt & turn windows achieve U-values as low as 0.14 — far exceeding ENERGY STAR requirements. Homeowners typically save 40-50% on heating/cooling. Federal tax credits up to $3,200 available." },
            { q: "What about insect screens?", a: "We offer FlexScreen® — a virtually invisible, spring-steel insect screen that snaps into place without hardware. It doesn't block your view or airflow like traditional screens." },
            { q: "Do they meet US building codes?", a: "Absolutely. All DECA windows are NFRC certified and meet or exceed all US building code requirements, including ENERGY STAR criteria." },
          ].map(({ q, a }) => (
            <details key={q} className="group bg-white rounded-xl border border-border">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-text-primary font-medium">
                {q}
                <svg className="w-5 h-5 text-text-muted shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <div className="px-6 pb-5 text-text-secondary leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══════ CTA ═══════ */}
      <CTABlock
        title="Ready for Tilt & Turn?"
        subtitle="Any size, color, or configuration. Factory-direct pricing with GEALAN quality."
        btnText="Get Free Quote"
        variant="blue"
      />
    </>
  );
}
