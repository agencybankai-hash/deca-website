import Link from "next/link";
import Image from "next/image";
import { Breadcrumb, Section, SectionTitle, CTABlock, ServiceIcons, StatCard } from "@/components/ui";
import { WindowConfigurator } from "@/components/ProductConfigurator";
import { img } from "@/lib/cdn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "uPVC Vinyl Windows | Energy Efficient European Windows | DECA",
  description:
    "Premium uPVC vinyl windows with exceptional energy efficiency. GEALAN profiles, triple-pane glazing, U-values as low as 0.14, and 50+ year lifespan. Manufactured in Massachusetts.",
  alternates: { canonical: "/windows/upvc-windows" },
};

export default function UPVCWindowsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Windows", href: "/windows" }, { label: "uPVC Windows" }]} />

      {/* ═══════ HERO — Split with real photo + trust bar ═══════ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-brand mb-3">
                European Engineering · American Craftsmanship
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-5">
                Premium uPVC Windows
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                GEALAN-engineered profiles with up to 6 chambers, triple-pane
                glazing, and U-values as low as 0.14&nbsp;W/m²K — delivering
                40-50% energy savings with a 50+ year lifespan.
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
                <Link href="/quote" className="bg-brand hover:bg-brand-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-colors shadow-sm">
                  Get Free Quote
                </Link>
                <a href="tel:+14137714457" className="border border-border text-text-primary hover:border-brand/30 px-7 py-3.5 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                  (413) 771-4457
                </a>
              </div>
            </div>

            {/* Hero image — gallery photo or hero */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={img("gallery/gallery-1.webp")}
                alt="DECA uPVC windows installed in a modern home — white profile, triple glazing"
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
          <StatCard value="50+" label="Year Lifespan" light />
          <StatCard value="0.14" label="Lowest U-Value" light />
          <StatCard value="83mm" label="Profile Depth" light />
          <StatCard value="6" label="Chamber Design" light />
        </div>
      </section>

      {/* ═══════ SOCIAL PROOF — Reviews ═══════ */}
      <section className="bg-warm-gray py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <Image src={img("icons/stars.svg")} alt="5-star reviews" width={108} height={20} className="mx-auto mb-2" />
            <p className="text-sm text-text-muted">Trusted by homeowners across New England</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Miranda S.", text: "Our energy bills dropped by 45% after replacing all windows with DECA uPVC. The noise reduction is incredible — we live near a highway and can barely hear traffic now.", img: "miranda.webp" },
              { name: "Jordan K.", text: "The tilt-and-turn mechanism is a game-changer. Easy cleaning, great ventilation options, and the build quality is noticeably better than our old vinyl windows.", img: "jordan.webp" },
              { name: "Casey M.", text: "Impressive attention to detail from consultation to installation. The triple-glazed windows keep our 1920s colonial warm even in January without cranking the heat.", img: "casey.webp" },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-xl border border-border p-6">
                <Image src={img("icons/stars.svg")} alt="5 stars" width={100} height={20} className="mb-3" />
                <p className="text-sm text-text-secondary leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image src={img(`team/${r.img}`)} alt={r.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm font-semibold text-text-primary">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CONFIGURATOR ═══════ */}
      <WindowConfigurator />

      {/* ═══════ PROFILE TECHNOLOGY — Components cross-section ═══════ */}
      <Section>
        <SectionTitle
          badge="GEALAN Technology"
          title="What Makes Our uPVC Different"
          subtitle="German-engineered GEALAN profiles with multi-chamber design for superior thermal performance."
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Advanced Multi-Chamber Profile</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Our GEALAN-LINEAR and S&nbsp;8000 profiles feature 5-6 insulating chambers
              that trap air to create a thermal barrier. Combined with galvanized
              steel reinforcement, the result is a window that&apos;s structurally
              rigid yet thermally efficient — outperforming standard vinyl by 40%.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { label: "GEALAN-acrylcolor® surface", desc: "Co-extruded acrylic surface technology (since 1980). Matte, smooth, grained, and RealWood finishes — no painting needed." },
                { label: "Steel-reinforced core", desc: "Galvanized steel inserts prevent flexing, sagging, and warping across extreme temperature swings (-30°F to 140°F)." },
                { label: "Triple EPDM gaskets", desc: "Three continuous sealing lines block air, water, and sound infiltration at every point of the frame." },
              ].map((f) => (
                <div key={f.label} className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{f.label}</p>
                    <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-section images */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "components-1.webp", label: "Profile cross-section" },
              { src: "components-2.webp", label: "Chamber structure" },
              { src: "components-3.webp", label: "Seal detail" },
              { src: "components-4.webp", label: "Steel reinforcement" },
            ].map((c) => (
              <div key={c.src} className="bg-warm-gray rounded-xl overflow-hidden border border-border">
                <Image
                  src={img(`components/${c.src}`)}
                  alt={`DECA uPVC window ${c.label}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <p className="text-[11px] text-text-muted text-center py-2">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════ GLAZING — With real glass images ═══════ */}
      <Section gray>
        <SectionTitle badge="Glass Options" title="Energy-Efficient Glass Packages" subtitle="Choose the right glazing for your climate and budget." />

        {/* Glass type cards with real images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { src: "double.webp", name: "Double Pane", spec: "U-Factor 0.26" },
            { src: "laminated-double.webp", name: "Laminated Double", spec: "U-Factor 0.18" },
            { src: "triple.webp", name: "Triple Pane ★", spec: "U-Factor 0.14" },
            { src: "low-e-glass.webp", name: "Low-E Coating", spec: "UV Block 99.5%" },
          ].map((g) => (
            <div key={g.name} className="bg-white rounded-xl border border-border overflow-hidden text-center">
              <Image
                src={img(`images/${g.src}`)}
                alt={`DECA ${g.name} glazing`}
                width={300}
                height={200}
                className="w-full h-36 object-contain bg-gray-50 p-4"
              />
              <div className="p-3">
                <p className="text-sm font-semibold text-text-primary">{g.name}</p>
                <p className="text-xs text-brand">{g.spec}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional glass types */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
          {[
            { src: "tempered.webp", name: "Tempered" },
            { src: "laminated.webp", name: "Laminated Safety" },
            { src: "non-spaces.webp", name: "Warm-Edge Spacer" },
          ].map((g) => (
            <div key={g.name} className="text-center">
              <Image
                src={img(`images/${g.src}`)}
                alt={g.name}
                width={200}
                height={150}
                className="w-full h-24 object-contain bg-white rounded-lg border border-border p-2 mb-1"
              />
              <p className="text-[10px] text-text-muted">{g.name}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-5 py-3.5 text-left font-medium">Metric</th>
                <th className="px-5 py-3.5 text-center font-medium">Double</th>
                <th className="px-5 py-3.5 text-center font-medium">Laminated Double</th>
                <th className="px-5 py-3.5 text-center font-medium bg-brand-dark">Triple ★</th>
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
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-5 py-3.5 font-medium text-text-secondary">{label}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={`px-5 py-3.5 text-center ${j === 2 ? "font-semibold text-brand" : "text-text-secondary"}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══════ TECHNICAL SPECS — GEALAN data ═══════ */}
      <Section>
        <SectionTitle badge="Specifications" title="Technical Details" subtitle="Built to GEALAN standards with NFRC-certified performance." />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            {[
              ["Profile System", "GEALAN-LINEAR® / S 8000"],
              ["Profile Depth", "74mm – 83mm"],
              ["Material", "Virgin uPVC + galvanized steel"],
              ["Chamber Count", "5–6 chambers"],
              ["Surface", "GEALAN-acrylcolor® (co-extruded)"],
              ["Glass Package", "Triple-pane, argon-filled, up to 52mm"],
              ["U-Factor (window)", "0.14 – 0.25 W/m²K"],
              ["Max Size", "Up to 11′6″ × 11′6″"],
              ["Sound Insulation", "STC 42–50 dB"],
              ["Air Leakage", "< 0.30 CFM/ft²"],
              ["Lock Points", "8–12 multi-point (Roto/Siegenia)"],
              ["Security Rating", "RC2 / RC3 certified"],
              ["Insect Screen", "FlexScreen® (virtually invisible)"],
              ["Warranty", "15yr frame / 10yr glass / 5yr hardware"],
            ].map(([label, value], i) => (
              <div key={label} className={`flex justify-between px-6 py-3.5 ${i % 2 === 0 ? "bg-warm-gray" : "bg-white"}`}>
                <span className="text-sm font-medium text-text-secondary">{label}</span>
                <span className="text-sm text-text-primary font-semibold text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* Component detail image */}
          <div className="space-y-4">
            <Image
              src={img("components/components-5.webp")}
              alt="DECA uPVC window component detail — hardware and seal"
              width={600}
              height={400}
              className="w-full rounded-xl border border-border"
            />
            <div className="bg-brand/5 rounded-xl p-6 border border-brand/10">
              <h4 className="font-semibold text-text-primary mb-2">GEALAN-acrylcolor® Finishes</h4>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Co-extruded acrylic surface technology, proven since 1980. The surface is molecularly bonded to the profile — it cannot peel, crack, or fade.
              </p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "White", color: "#FFFFFF" }, { name: "Cream", color: "#F5F0E1" },
                  { name: "Anthracite", color: "#3C3C3C" }, { name: "Golden Oak", color: "#B8860B" },
                  { name: "Dark Brown", color: "#4A2E1C" }, { name: "Mahogany", color: "#6B3A2A" },
                  { name: "Light Gray", color: "#C4C4C4" }, { name: "Black", color: "#1A1A1A" },
                ].map((c) => (
                  <div key={c.name} className="text-center">
                    <div className="w-full aspect-square rounded-lg border border-border shadow-sm" style={{ backgroundColor: c.color }} />
                    <span className="text-[10px] text-text-muted mt-1 block">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════ VIDEO FEATURES ═══════ */}
      <Section gray>
        <SectionTitle badge="See It In Action" title="Why Homeowners Love Tilt & Turn" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Easy Ventilation", desc: "Tilt mode provides secure, rain-safe airflow. No need to open the window fully.", video: "https://dl.dropbox.com/scl/fi/pl8p06wjj21den45p2ufi/Ventilation.mp4", poster: img("gallery/gallery-4.webp") },
            { title: "Effortless Cleaning", desc: "Turn mode swings the sash inward 180° for easy exterior glass cleaning from inside.", video: "https://dl.dropbox.com/scl/fi/iydq7eq3auh1aibpal07m/Easy_To_Clean.mp4", poster: img("gallery/gallery-6.webp") },
            { title: "Airtight & Secure", desc: "Multi-point locking engages 8–12 points simultaneously. RC2/RC3 certified security.", video: "https://dl.dropbox.com/scl/fi/wgy6ge1z4hy9bknj18wwb/Air-tight-_-Secure.mp4", poster: img("gallery/gallery-7.webp") },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="relative aspect-video bg-black">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href={v.video} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  {/* Use poster image as static preview — video plays on click via direct link */}
                  <Image
                    src={v.poster}
                    alt={v.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-text-primary mb-1">{v.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ GALLERY — Real project photos ═══════ */}
      <Section>
        <SectionTitle badge="Our Work" title="Installed Projects" subtitle="Real DECA uPVC windows in homes across New England." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "gallery-2.webp", "gallery-3.webp", "gallery-5.webp", "gallery-8.webp",
            "gallery-10.webp", "gallery-11.webp", "gallery-14.webp", "gallery-15.webp",
          ].map((src, i) => (
            <div key={src} className={`rounded-xl overflow-hidden ${i < 2 ? "md:row-span-2" : ""}`}>
              <Image
                src={img(`gallery/${src}`)}
                alt={`DECA window installation project ${i + 1}`}
                width={500}
                height={i < 2 ? 600 : 300}
                className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${i < 2 ? "h-full" : "h-48 md:h-52"}`}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ MATERIAL COMPARISON ═══════ */}
      <Section gray>
        <SectionTitle title="uPVC vs. Aluminum vs. Standard Vinyl" subtitle="See why DECA uPVC delivers the best value for New England homeowners." />
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-5 py-3.5 text-left font-medium">Feature</th>
                <th className="px-5 py-3.5 text-center font-medium bg-brand-dark">DECA uPVC ★</th>
                <th className="px-5 py-3.5 text-center font-medium">Aluminum</th>
                <th className="px-5 py-3.5 text-center font-medium">Standard Vinyl</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["U-Factor", "0.14–0.25", "0.30–0.50", "0.25–0.35"],
                ["Sound (STC)", "42–50 dB", "28–35 dB", "32–38 dB"],
                ["Lifespan", "50+ years", "30–40 years", "25–35 years"],
                ["Maintenance", "Wash only", "Periodic caulking", "Minimal"],
                ["Colors", "50+ RAL", "10–15", "5–10"],
                ["Security", "RC2 / RC3", "Limited", "RC1"],
                ["Cold Climate", "Optimal", "Conducts cold", "Good"],
              ].map(([label, ...vals], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-warm-gray" : "bg-white"}>
                  <td className="px-5 py-3.5 font-medium text-text-secondary">{label}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={`px-5 py-3.5 text-center ${j === 0 ? "font-semibold text-brand" : "text-text-secondary"}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══════ WINDOW TYPES — Product images ═══════ */}
      <Section>
        <SectionTitle badge="Window Types" title="Styles for Every Project" subtitle="Custom-made to your exact specifications." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "two-sections.webp", name: "Double Section", desc: "Side-by-side panels for wider openings" },
            { src: "three-sections.webp", name: "Triple Section", desc: "Three-panel for panoramic views" },
            { src: "curved-type.webp", name: "Arched / Custom", desc: "Curved, triangular, circular shapes" },
            { src: "kitchen-windows.webp", name: "Kitchen Windows", desc: "Compact designs with tilt ventilation" },
          ].map((w) => (
            <div key={w.name} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all group">
              <Image
                src={img(`images/${w.src}`)}
                alt={`DECA ${w.name}`}
                width={400}
                height={300}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h4 className="font-semibold text-text-primary text-sm">{w.name}</h4>
                <p className="text-xs text-text-muted">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ SERVICE ═══════ */}
      <Section gray>
        <SectionTitle title="Exceptional Service in Massachusetts" />
        <ServiceIcons />
      </Section>

      {/* ═══════ FAQ ═══════ */}
      <Section>
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            ["Are uPVC windows prone to warping or discoloration?", "No. Our GEALAN profiles use virgin uPVC with co-extruded acrylic surfaces, engineered for dimensional stability from -30°F to 140°F. UV-stable coloring is bonded at the molecular level — it cannot fade, yellow, or peel."],
            ["How do your windows compare to European imports?", "We use the same GEALAN profiles and German Roto/Siegenia hardware as top European manufacturers, but fabricate in Massachusetts. You get identical performance at 30-40% lower cost with local warranties and service."],
            ["What energy savings can I expect?", "Homeowners typically save 40-50% on heating/cooling. A 2,500 sq ft home saves $1,500-2,500 annually. Federal energy tax credits up to $3,200 are available for qualifying installations."],
            ["Can I customize size, shape, and color?", "Absolutely. Every window is custom-made. Arched, circular, triangular — any shape. 50+ RAL colors plus wood-grain laminates. Standard lead time is 4-6 weeks."],
            ["What about insect screens?", "We offer FlexScreen® — a virtually invisible, spring-steel insect screen that snaps into place without visible hardware. Unlike traditional screens, FlexScreen doesn't block your view or airflow."],
            ["Do you offer installation?", "Yes. Professional installation across New England through our field team and vetted local contractors. Every installation includes a final quality inspection."],
          ].map(([q, a]) => (
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

      {/* ═══════ FINAL CTA ═══════ */}
      <CTABlock
        title="Ready for Premium uPVC Windows?"
        subtitle="Any size, color, or configuration. Factory-direct pricing with GEALAN quality."
        btnText="Get Free Custom Quote"
        variant="blue"
      />
    </>
  );
}
