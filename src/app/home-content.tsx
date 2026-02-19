"use client";
import { useState } from "react";
import Link from "next/link";
import { Section, SectionTitle, PhotoPlaceholder, ProductCard, StatCard, ServiceIcons, GuideCard } from "@/components/ui";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";

/* ===== Feature Tabs Data (Figma: Silence, Warmth, Convenience, Lifespan, Safety) ===== */
const featureTabs = [
  {
    id: "silence", label: "Silence",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>,
    title: "Engineered for Silence",
    description: "Our windows reduce noise by up to 95%, turning your home into a peaceful sanctuary. Robust 2.75-inch frames with six internal chambers effectively dampen sound waves, while advanced EPDM seals create a tight barrier against external noise. Multi-layered glass panels with soundproofing properties and multi-point locking systems ensure exceptional noise reduction.",
    photoDesc: "Фото: демонстрация шумоизоляции — разрез профиля с 6 камерами, звуковые волны, dB-шкала",
  },
  {
    id: "warmth", label: "Warmth",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>,
    title: "Warmth and Comfort",
    description: "Reduce heat loss by up to 35% with triple-pane glass and multi-chambered frames. These innovations maintain a comfortable environment regardless of the weather, ensuring energy efficiency even in extreme climates.",
    photoDesc: "Фото: тепловизионный снимок окна, сравнение температур снаружи и внутри",
  },
  {
    id: "convenience", label: "Convenience",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Convenience Made Simple",
    description: "DECA windows and doors are easy to use and require minimal maintenance. Intuitive handles and hardware provide smooth, straightforward operation, while inward-opening windows make cleaning effortless. Ventilation features allow fresh air to flow in while maintaining security and comfort.",
    photoDesc: "Фото: демонстрация режимов открывания — поворотно-откидное окно в двух положениях",
  },
  {
    id: "lifespan", label: "Lifespan",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Built to Last",
    description: "uPVC frames reinforced with galvanized steel and durable materials ensure a lifespan of over 50 years. Inspired by the reliability of German-engineered windows still in use since 1972, our thick frames and up to 12 locking points guarantee unmatched strength and longevity.",
    photoDesc: "Фото: крупный план усиленного стального армирования внутри uPVC профиля",
  },
  {
    id: "safety", label: "Safety",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Maximum Protection",
    description: "Up to 12 locking points, reinforced frames, and impact-resistant glass provide maximum security for your home. Rest assured, your loved ones are safe, and your home remains protected at all times.",
    photoDesc: "Фото: крупный план многоточечного замка с 12 точками запирания",
  },
];

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState("silence");
  const activeFeature = featureTabs.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* ===== HERO with YouTube Video Background ===== */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/noGgLNCpZGM?autoplay=1&mute=1&loop=1&playlist=noGgLNCpZGM&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&start=0&cc_load_policy=0&fs=0"
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 border-0"
            title="DECA Windows & Doors"
            style={{
              transform: "translate(-50%, -50%) scale(1.25)",
              width: "max(100%, 177.78vh)",
              height: "max(100%, 56.25vw)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-40 min-h-[85vh] flex items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-white/50 text-[11px] font-medium tracking-widest uppercase mb-5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              Westfield, Massachusetts
            </span>
            <h1 className="text-3xl md:text-[44px] font-bold text-white leading-[1.15] mb-4 tracking-tight">
              European Energy-Efficient Windows & Doors Built in USA
            </h1>
            <p className="text-sm md:text-base text-white/50 mb-8 leading-relaxed max-w-md">
              Factory-direct PVC & Aluminum systems. 15-year warranty, U-value&nbsp;0.10, noise reduction up to&nbsp;50&nbsp;dB.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/windows" className="bg-white hover:bg-gray-100 text-slate-dark px-6 py-3 rounded text-sm font-semibold transition-colors flex items-center gap-2">
                Explore Products
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/quote" className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white/80 px-6 py-3 rounded text-sm font-medium transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Product Cards (Figma: 2x2 grid) ===== */}
      <Section className="relative z-10 -mt-16 rounded-t-3xl shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
        <SectionTitle badge="Our Products" title="Windows and Doors for Every Project" subtitle="European engineering manufactured in Massachusetts. Tilt & turn, sliding, swing, and entry systems." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <ProductCard title="Tilt & Turn European Windows" subtitle="Premium tilt & turn system with triple glazing" href="/tilt-turn" photoDesc="Фото: поворотно-откидное окно в интерьере, вид на открытое окно в режиме поворота" />
          <ProductCard title="Sliding Doors" subtitle="PSk, Lift & Slide, and DECA Roto systems" href="/sliding-doors" photoDesc="Фото: панорамная раздвижная дверь с видом на сад/террасу" />
          <ProductCard title="Swing (French) Doors" subtitle="Classic elegance with European hardware" href="/doors/french-doors" photoDesc="Фото: распашные французские двери в светлом интерьере" />
          <ProductCard title="Entry Doors" subtitle="Secure, insulated, custom-designed entrance" href="/doors/entry-doors" photoDesc="Фото: парадная входная дверь DECA в фасаде дома" />
        </div>
      </Section>

      {/* ===== FEATURE TABS (Figma: Silence, Warmth, Convenience, Lifespan, Safety) ===== */}
      <Section gray>
        <div className="flex justify-center gap-1 mb-12 border-b border-border flex-wrap">
          {featureTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === tab.id ? "border-blue-accent text-blue-accent" : "border-transparent text-text-muted hover:text-text-primary"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="py-2">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{activeFeature.title}</h2>
            <p className="text-text-secondary leading-relaxed text-[15px] mb-5">{activeFeature.description}</p>
            <Link href="/performance" className="inline-flex items-center gap-2 text-blue-accent font-medium hover:text-blue-hover transition-colors">
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <PhotoPlaceholder description={activeFeature.photoDesc} height="h-72" />
        </div>
      </Section>

      {/* ===== Gallery / Cases (Figma: full-width photo row) ===== */}
      <Section>
        <SectionTitle badge="Gallery" title="Our Recent Projects" subtitle="See how DECA windows and doors transform homes across Massachusetts." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PhotoPlaceholder description="Фото: современный дом с панорамными окнами DECA" height="h-48" />
          <PhotoPlaceholder description="Фото: кухня с большим окном Tilt&Turn, вид на природу" height="h-48" />
          <PhotoPlaceholder description="Фото: офисное здание с алюминиевым фасадным остеклением" height="h-48" />
          <PhotoPlaceholder description="Фото: спальня с французскими дверями на балкон" height="h-48" />
        </div>
      </Section>

      {/* ===== Exceptional Service (Figma: 4 icons row) ===== */}
      <Section gray>
        <SectionTitle badge="Why DECA" title="Exceptional Service in Massachusetts" subtitle="Local manufacturing, expert support, and a seamless experience from quote to installation." />
        <ServiceIcons />
      </Section>

      {/* ===== CTA Block (Figma: blue bg — "Got Questions?") ===== */}
      <section className="bg-brand text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Got Questions? We&apos;re Here to Help!</h2>
          <p className="text-white/60 text-[15px] mb-6">Call us directly or request a callback — our team responds within 24 hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote" className="inline-block bg-white text-brand hover:bg-gray-100 px-8 py-3.5 rounded font-semibold transition-colors">
              Request a Quote
            </Link>
            <a href="tel:+14137714457" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              (413) 771-4457
            </a>
          </div>
        </div>
      </section>

      {/* ===== Warranty (Figma) ===== */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle align="left" badge="Peace of Mind" title="Warranty Commitments & Free Technical Support" subtitle="Every DECA product comes with a 15-year transferable warranty covering frames, glass units, and all hardware. Our in-house team provides free technical support for the lifetime of your windows." />
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="15 yr" label="Transferable Warranty" />
              <StatCard value="Free" label="Technical Support" />
              <StatCard value="48 hr" label="Response Time" />
              <StatCard value="100%" label="Parts Coverage" />
            </div>
          </div>
          <PhotoPlaceholder description="Фото: сертификат гарантии DECA, или техник на объекте у заказчика" height="h-96" />
        </div>
      </Section>

      {/* ═══════ REVIEWS ═══════ */}
      <ReviewsSection showServiceIcons={false} />

      {/* ===== Professionals (Figma: 3 cards — Contractors, Architects, Dealers) ===== */}
      <Section>
        <SectionTitle badge="B2B" title="Solutions Built for Professionals" subtitle="Special programs, pricing, and support for industry professionals." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "For Building Contractors", desc: "Volume pricing, priority delivery, and dedicated project support. Streamline your builds with factory-direct European windows.", href: "/professionals#contractors", photoDesc: "Фото: подрядчик/строитель на объекте, монтаж окон DECA" },
            { title: "For Architects", desc: "Custom configurations, CAD drawings, technical specifications, and sample programs. Design without compromise.", href: "/professionals#architects", photoDesc: "Фото: архитектор за рабочим столом с чертежами, окно DECA на фоне" },
            { title: "For Dealers", desc: "Become a DECA dealer. Competitive margins, marketing support, showroom displays, and training programs.", href: "/professionals#dealers", photoDesc: "Фото: шоурум DECA с образцами окон и дверей" },
          ].map((p) => (
            <Link key={p.title} href={p.href} className="group block">
              <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
                <PhotoPlaceholder description={p.photoDesc} height="h-44" className="rounded-none border-0" />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-text-primary mb-2 group-hover:text-blue-accent transition-colors">{p.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ===== About DECA (Figma: text + stats) ===== */}
      <Section dark>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle align="left" light badge="About Us" title="About DECA" subtitle="Founded by European window professionals, DECA brings decades of manufacturing expertise to Westfield, Massachusetts. We combine German engineering principles with American manufacturing standards to deliver windows that outperform industry benchmarks." />
            <Link href="/about" className="inline-flex items-center gap-2 text-blue-accent hover:text-blue-accent/80 font-medium transition-colors">
              Learn about our story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <StatCard value="500+" label="Homes Fitted" light />
            <StatCard value="0.10" label="Best U-Value" light />
            <StatCard value="15 yr" label="Full Warranty" light />
            <StatCard value="50+" label="Years Lifespan" light />
          </div>
        </div>
      </Section>

      {/* ===== Expert Guides (Figma: 3 cards) ===== */}
      <Section gray>
        <SectionTitle badge="Resources" title="Expert Guides and Instructions" subtitle="In-depth articles to help you make informed decisions about windows and doors." />
        <div className="grid md:grid-cols-3 gap-6">
          <GuideCard title="Tilt & Turn vs Double-Hung: Complete Comparison" desc="Which window type is right for your home? We compare performance, cost, and lifespan." href="/blog" photoDesc="Фото: сравнение двух типов окон рядом — tilt&turn и double-hung" />
          <GuideCard title="Understanding U-Values and Energy Efficiency" desc="What U-value means for your energy bills and comfort. A homeowner's guide." href="/blog" photoDesc="Фото: инфографика с диаграммой U-value и стрелками теплопотерь" />
          <GuideCard title="Window Replacement Guide for Massachusetts" desc="When to replace, what to look for, and how to maximize your investment." href="/blog" photoDesc="Фото: процесс замены старого окна на новое DECA в доме в Массачусетсе" />
        </div>
      </Section>

      {/* ═══════ DELIVERY MAP ═══════ */}
      <DeliveryMapSection />

      {/* ===== FAQ (Figma: accordion) ===== */}
      <Section>
        <SectionTitle badge="FAQ" title="Your Questions — Answered" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "What makes DECA windows different from standard American windows?", a: "DECA windows use European tilt & turn technology with multi-chamber uPVC or aluminum frames, triple glazing, and multi-point locking. This delivers significantly better energy efficiency (U-value 0.10 vs 0.30+ for standard windows), noise reduction (45-50 dB vs 25-30 dB), and security." },
            { q: "Do you manufacture in the United States?", a: "Yes. All DECA windows and doors are manufactured in our facility in Westfield, Massachusetts. We use European engineering principles and hardware (Roto, Siegenia) with American-made profiles." },
            { q: "What is a tilt & turn window?", a: "A tilt & turn window has two opening modes: 'tilt' inward from the top for secure ventilation, and 'turn' fully inward like a door for maximum airflow and easy cleaning. This versatile design is standard across Europe and offers superior performance over traditional American window styles." },
            { q: "What areas do you serve?", a: "We serve all of Massachusetts, Connecticut, Rhode Island, New Hampshire, and the greater New York area. For large commercial projects, we can deliver nationwide." },
            { q: "How long does delivery take?", a: "Standard residential orders are typically delivered in 4-6 weeks from measurement confirmation. Rush orders and commercial projects can be expedited — contact us for specifics." },
          ].map((faq) => (
            <details key={faq.q} className="group bg-warm-gray rounded-xl border border-border">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-text-primary font-medium">
                {faq.q}
                <svg className="w-5 h-5 text-text-muted shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-5 text-text-secondary leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══════ CTA WITH DOCS ═══════ */}
      <CTAWithDocs
        title="Let's Work Together to Build Better Spaces"
        subtitle="Get your custom order form, window blueprints, and detailed specification — all prepared for your project."
        btnText="Get a Free Quote"
      />

      <StickyCTA />
    </>
  );
}
