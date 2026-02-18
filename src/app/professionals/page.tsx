import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder, StatCard } from "@/components/ui";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "For Professionals | Contractors, Architects, Dealers | DECA Windows",
  description: "Premium European-style windows for contractors, architects, builders, and dealers. Volume pricing, custom specifications, and dedicated technical support.",
  alternates: { canonical: "/professionals" },
};

export default function ProfessionalsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "For Professionals" }]} />

      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">B2B Partnership</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">Partner with DECA</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Premium European-style windows for contractors, architects, builders, and dealers. Volume pricing, custom specifications, and dedicated technical support.
              </p>
              <Link href="#contact-form" className="inline-block bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded font-semibold transition-colors">
                Get Professional Pricing
              </Link>
            </div>
            <PhotoPlaceholder description="Фото: строительная площадка — монтажная бригада устанавливает окна DECA в новостройке" height="h-[400px]" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-warm-gray py-8 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="500+" label="Projects Completed" />
          <StatCard value="4 wk" label="Production Time" />
          <StatCard value="300%" label="Exceeds Codes" />
          <StatCard value="15 yr" label="Frame Warranty" />
        </div>
      </section>

      {/* Why Professionals Choose DECA */}
      <Section>
        <SectionTitle badge="Advantages" title="Why Professionals Choose DECA" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Custom to Spec", desc: "Any size, shape, or configuration manufactured to your exact specifications at our MA facility.", photoDesc: "Фото: нестандартное окно DECA — арочная форма, изготовленное по спецификации" },
            { title: "Volume Pricing", desc: "Quantity-based discounts. Larger orders = better pricing. Factory-direct, no middleman.", photoDesc: "Фото: склад готовых окон — крупная партия для застройщика" },
            { title: "Technical Support", desc: "Dedicated project support, detailed specs, and installation guidance throughout.", photoDesc: "Фото: технический консультант DECA на стройплощадке с подрядчиком" },
            { title: "Local Manufacturing", desc: "Made in Massachusetts. 4-week production. Reliable delivery across the Northeast.", photoDesc: "Фото: производственная линия DECA в Вестфилде, MA" },
            { title: "Exceed Codes", desc: "Windows exceed building codes by up to 300%. NFRC certified, ENERGY STAR ready, LEED eligible.", photoDesc: "Фото: сертификаты NFRC и ENERGY STAR для окон DECA" },
            { title: "Partnership Program", desc: "Become a DECA dealer or preferred installer. Training, marketing support, priority pricing.", photoDesc: "Фото: рукопожатие — партнёрское соглашение с дилером DECA" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-all">
              <PhotoPlaceholder description={item.photoDesc} height="h-40" className="rounded-none border-0" />
              <div className="p-5">
                <h4 className="font-semibold text-text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Segments */}
      <Section gray id="builders">
        <SectionTitle badge="Segments" title="Solutions for Your Business" />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Contractors & Builders", id: "contractors", desc: "Bulk orders, consistent quality, on-time delivery. Volume pricing for new construction and renovation projects.", photoDesc: "Фото: подрядчик на строительной площадке с чертежами окон DECA" },
            { title: "Architects & Designers", id: "architects", desc: "Detailed specifications, custom designs, BIM data. Products that match any architectural vision.", photoDesc: "Фото: архитектор за рабочим столом с образцами профилей DECA" },
            { title: "Dealers & Installers", id: "dealers", desc: "Become a DECA partner. Training, marketing materials, priority pricing, and territory exclusivity.", photoDesc: "Фото: шоурум дилера DECA с образцами окон и дверей" },
            { title: "Commercial Projects", desc: "Multi-family, office, retail, historic renovation. LEED-eligible products with commercial-grade performance.", photoDesc: "Фото: многоквартирный дом с окнами DECA — коммерческий проект" },
          ].map((s) => (
            <div key={s.title} id={s.id} className="bg-white rounded-xl border border-border overflow-hidden">
              <PhotoPlaceholder description={s.photoDesc} height="h-48" className="rounded-none border-0" />
              <div className="p-6">
                <h3 className="font-bold text-text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionTitle badge="Testimonials" title="Trusted by Professionals" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Michael Rodriguez", role: "General Contractor, Cambridge", text: "As a contractor, I've worked with many window suppliers, but DECA's quality and customer service stands out. Reliable delivery, consistent quality." },
            { name: "Robert Williams", role: "Architect, Springfield", text: "We specified DECA for a luxury apartment complex. Both we and our client are extremely satisfied with the performance and aesthetics." },
          ].map((t) => (
            <div key={t.name} className="bg-warm-gray rounded-xl p-6 border border-border">
              <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
              <p className="text-sm text-text-secondary italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-sm text-text-primary">{t.name}</p>
              <p className="text-xs text-text-muted">{t.role}</p>
            </div>
          ))}
        </div>
      </Section>



      {/* ═══════ REVIEWS ═══════ */}
      <ReviewsSection />

      {/* ═══════ DELIVERY MAP ═══════ */}
      <DeliveryMapSection />

      {/* B2B Contact Form */}
      <section id="contact-form" className="bg-brand text-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Professional Pricing</h2>
          <p className="text-white/60 text-lg mb-10">Tell us about your project and we'll prepare a detailed quote.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[["Company Name", "text"], ["Your Name", "text"], ["Email", "email"], ["Phone", "tel"]].map(([label, type]) => (
              <div key={label}>
                <label className="text-xs text-white/50 block mb-1.5">{label}</label>
                <input type={type} className="w-full bg-navy-800 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-accent focus:outline-none" />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="text-xs text-white/50 block mb-1.5">Project Type</label>
              <select className="w-full bg-navy-800 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:border-blue-accent focus:outline-none">
                <option>New Construction</option><option>Renovation</option><option>Commercial</option><option>Multi-family</option><option>Dealer Partnership</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-white/50 block mb-1.5">Project Details</label>
              <textarea rows={3} className="w-full bg-navy-800 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-accent focus:outline-none" />
            </div>
          </div>
          <button className="bg-blue-accent hover:bg-blue-hover text-white px-8 py-3.5 rounded-md font-semibold mt-8 transition-colors">
            Submit Request
          </button>
        </div>
      </section>
      <StickyCTA />
    </>
  );
}
