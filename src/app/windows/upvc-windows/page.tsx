import Link from "next/link";
import Image from "next/image";
import { Breadcrumb, Section, SectionTitle, CTABlock, ServiceIcons, StatCard } from "@/components/ui";
import { WindowConfigurator } from "@/components/ProductConfigurator";
import VideoTabs from "@/components/VideoTabs";
import ComponentTabs from "@/components/ComponentTabs";
import GalleryLightbox from "@/components/GalleryLightbox";
import AnimatedStats from "@/components/AnimatedStats";
import PerformanceBars from "@/components/PerformanceBars";
import EnergySavingsCard from "@/components/EnergySavingsCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "uPVC Vinyl Windows | Energy Efficient European Windows | DECA",
  description:
    "Premium uPVC vinyl windows with exceptional energy efficiency. GEALAN profiles, triple-pane glazing, U-values as low as 0.14, and 50+ year lifespan. Manufactured in Massachusetts.",
  alternates: { canonical: "/windows/upvc-windows" },
};

/* All images served from public/assets/ */
const a = "/assets";

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

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src={`${a}/gallery/gallery-2.webp`}
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

      {/* ═══════ STATS BAR — Animated rings + counters ═══════ */}
      <section className="bg-brand text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedStats
            stats={[
              { value: 50, suffix: "+", label: "Year Lifespan", ring: 100 },
              { value: 0.14, suffix: "", label: "Lowest U-Value", ring: 95, decimals: 2 },
              { value: 83, suffix: "mm", label: "Profile Depth", ring: 70 },
              { value: 6, suffix: "", label: "Chamber Design", ring: 85 },
            ]}
          />
        </div>
      </section>

      {/* ═══════ SOCIAL PROOF — Reviews ═══════ */}
      <section className="bg-warm-gray py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <Image src={`${a}/icons/stars.svg`} alt="5-star reviews" width={108} height={20} className="mx-auto mb-2" />
            <p className="text-sm text-text-muted">Trusted by homeowners across New England</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Miranda S.", text: "Our energy bills dropped by 45% after replacing all windows with DECA uPVC. The noise reduction is incredible — we live near a highway and can barely hear traffic now.", photo: "miranda.webp" },
              { name: "Jordan K.", text: "The tilt-and-turn mechanism is a game-changer. Easy cleaning, great ventilation options, and the build quality is noticeably better than our old vinyl windows.", photo: "jordan.webp" },
              { name: "Casey M.", text: "Impressive attention to detail from consultation to installation. The triple-glazed windows keep our 1920s colonial warm even in January without cranking the heat.", photo: "casey.webp" },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-xl border border-border p-6">
                <Image src={`${a}/icons/stars.svg`} alt="5 stars" width={100} height={20} className="mb-3" />
                <p className="text-sm text-text-secondary leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm">{r.name.split(" ").map(n => n[0]).join("")}</div>
                  <span className="text-sm font-semibold text-text-primary">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CONFIGURATOR ═══════ */}
      <WindowConfigurator />

      {/* ═══════ PROFILE TECHNOLOGY — Interactive component viewer ═══════ */}
      <Section>
        <SectionTitle
          badge="GEALAN Technology"
          title="What Makes Our uPVC Different"
          subtitle="German-engineered GEALAN profiles with multi-chamber design for superior thermal performance."
        />
        <ComponentTabs
          items={[
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                </svg>
              ),
              title: "Profile Cross-Section",
              description: "Multi-chamber uPVC profile with galvanized steel reinforcement for structural rigidity.",
              image: `${a}/components/components-1.webp`,
              alt: "DECA uPVC window — Profile Cross-Section",
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
              ),
              title: "Chamber Structure",
              description: "5–6 insulating chambers trap air, creating a thermal barrier that outperforms standard vinyl by 40%.",
              image: `${a}/components/components-2.webp`,
              alt: "DECA uPVC window — Chamber Structure",
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              ),
              title: "Triple Seal System",
              description: "Three continuous EPDM gaskets block air, water, and sound at every point of the frame.",
              image: `${a}/components/components-3.webp`,
              alt: "DECA uPVC window — Triple Seal System",
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
              ),
              title: "Steel Reinforcement",
              description: "Galvanized steel inserts prevent flexing and warping across extreme temperatures (-30°F to 140°F).",
              image: `${a}/components/components-4.webp`,
              alt: "DECA uPVC window — Steel Reinforcement",
            },
          ]}
        />
      </Section>

      {/* ═══════ GLAZING — Glass type cards ═══════ */}
      <Section gray>
        <SectionTitle badge="Glass Options" title="Energy-Efficient Glass Packages" subtitle="Choose the right glazing for your climate and budget." />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "double.webp", name: "Double Pane", spec: "U-Factor 0.26" },
            { src: "laminated-double.webp", name: "Laminated Double", spec: "U-Factor 0.18" },
            { src: "triple.webp", name: "Triple Pane ★", spec: "U-Factor 0.14" },
            { src: "low-e-glass.webp", name: "Low-E Coating", spec: "UV Block 99.5%" },
          ].map((g) => (
            <div key={g.name} className="bg-white rounded-xl border border-border overflow-hidden text-center">
              <Image
                src={`${a}/images/${g.src}`}
                alt={`DECA ${g.name} glazing`}
                width={300}
                height={200}
                className="w-full h-44 object-contain bg-gray-50 p-4"
              />
              <div className="p-3">
                <p className="text-sm font-semibold text-text-primary">{g.name}</p>
                <p className="text-xs text-brand">{g.spec}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-8">
          {[
            { src: "tempered.webp", name: "Tempered" },
            { src: "laminated.webp", name: "Laminated Safety" },
            { src: "non-spaces.webp", name: "Warm-Edge Spacer" },
          ].map((g) => (
            <div key={g.name} className="bg-white rounded-xl border border-border overflow-hidden text-center">
              <Image
                src={`${a}/images/${g.src}`}
                alt={g.name}
                width={200}
                height={150}
                className="w-full h-28 object-contain bg-gray-50 p-3"
              />
              <div className="p-2">
                <p className="text-xs font-medium text-text-muted">{g.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ GLAZING COMPARISON TABLE ═══════ */}
      <Section>
        <SectionTitle badge="Performance" title="Glazing Comparison" subtitle="See how each glass package performs across key metrics." />
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
                    <td key={j} className={`px-5 py-3.5 text-center ${j === 2 ? "font-semibold text-brand bg-brand/[0.04]" : "text-text-secondary"}`}>{v}</td>
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
              src={`${a}/components/components-5.webp`}
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

      {/* ═══════ VIDEO — Interactive Tabs (like decawindows.com) ═══════ */}
      <Section gray>
        <SectionTitle badge="See It In Action" title="Why Homeowners Love Tilt & Turn" />
        <VideoTabs
          tabs={[
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              ),
              title: "Tilt to Vent",
              description: "Just turn handle up to air out your home. Secure, rain-safe airflow — no need to open the window fully.",
              video: `${a}/videos/ventilation.mp4`,
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              ),
              title: "Easy to Clean",
              description: "Opens inward, making cleaning more convenient. Clean exterior glass from inside, on any floor.",
              video: `${a}/videos/easy-to-clean.mp4`,
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              ),
              title: "Air-Tight & Secure",
              description: "Up to 12 locking points engage with a single handle turn. RC2/RC3 certified security.",
              video: `${a}/videos/airtight-secure.mp4`,
            },
          ]}
        />
      </Section>

      {/* ═══════ PERFORMANCE — DECA vs Traditional ═══════ */}
      <Section>
        <SectionTitle
          badge="Why Upgrade"
          title="DECA vs. Traditional Windows"
          subtitle="See how European uPVC technology outperforms standard American vinyl windows."
        />
        <PerformanceBars
          metrics={[
            {
              label: "Thermal Insulation",
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /></svg>,
              deca: 95,
              decaLabel: "U-Factor 0.14",
              traditional: 40,
              traditionalLabel: "U-Factor 0.30",
            },
            {
              label: "Sound Reduction",
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>,
              deca: 90,
              decaLabel: "42–50 dB",
              traditional: 55,
              traditionalLabel: "25–30 dB",
            },
            {
              label: "Air Tightness",
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>,
              deca: 98,
              decaLabel: "12-point lock",
              traditional: 35,
              traditionalLabel: "2-point lock",
            },
            {
              label: "Lifespan",
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
              deca: 100,
              decaLabel: "50+ years",
              traditional: 40,
              traditionalLabel: "15–20 years",
            },
          ]}
        />
      </Section>

      {/* ═══════ ENERGY SAVINGS INFOGRAPHIC ═══════ */}
      <Section gray>
        <SectionTitle
          badge="Your Investment"
          title="The Economics of Quality Windows"
          subtitle="Energy-efficient windows aren't just better — they pay for themselves."
        />
        <EnergySavingsCard />
      </Section>

      {/* ═══════ GALLERY — Project photos ═══════ */}
      <Section>
        <SectionTitle badge="Our Work" title="Installed Projects" subtitle="Real DECA uPVC windows in homes across New England." />
        <GalleryLightbox
          alt="DECA window installation project"
          items={[
            { src: `${a}/gallery/gallery-9.webp`, tall: true },
            { src: `${a}/gallery/gallery-10.webp`, tall: true },
            { src: `${a}/gallery/gallery-11.webp` },
            { src: `${a}/gallery/gallery-12.webp` },
            { src: `${a}/gallery/gallery-13.webp` },
            { src: `${a}/gallery/gallery-14.webp` },
            { src: `${a}/gallery/gallery-15.webp` },
            { src: `${a}/gallery/gallery-16.webp` },
          ]}
        />
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
                    <td key={j} className={`px-5 py-3.5 text-center ${j === 0 ? "font-semibold text-brand bg-brand/[0.04]" : "text-text-secondary"}`}>{v}</td>
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
                src={`${a}/images/${w.src}`}
                alt={`DECA ${w.name}`}
                width={400}
                height={300}
                className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
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
