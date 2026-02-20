import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder } from "@/components/ui";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import B2BContactForm from "@/components/B2BContactForm";
import StickyCTA from "@/components/StickyCTA";
import AnimatedStatCard from "@/components/AnimatedStatCard";

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
          <AnimatedStatCard value="500+" label="Projects Completed" />
          <AnimatedStatCard value="4 wk" label="Production Time" />
          <AnimatedStatCard value="300%" label="Exceeds Codes" />
          <AnimatedStatCard value="15 yr" label="Frame Warranty" />
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
                <h2 className="font-semibold text-text-primary mb-2">{item.title}</h2>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Segments — linked to dedicated pages */}
      <Section gray>
        <SectionTitle badge="Segments" title="Solutions for Your Business" subtitle="Explore dedicated resources for your industry." />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Contractors & Builders", href: "/professionals/contractors", desc: "Volume pricing, on-time delivery, dedicated project manager. Built for your construction schedule.", photoDesc: "Фото: подрядчик на строительной площадке с чертежами окон DECA" },
            { title: "Architects & Designers", href: "/professionals/architects", desc: "Custom specs, CAD/BIM data, NFRC reports, and 200+ RAL colors. Design without compromise.", photoDesc: "Фото: архитектор за рабочим столом с образцами профилей DECA" },
            { title: "Dealers & Installers", href: "/professionals/dealers", desc: "Territory exclusivity, dealer pricing, training, and marketing support. Grow your business with DECA.", photoDesc: "Фото: шоурум дилера DECA с образцами окон и дверей" },
            { title: "Commercial Projects", href: "/professionals/commercial", desc: "Multi-family, office, retail, historic renovation. Engineering support and phased delivery at scale.", photoDesc: "Фото: многоквартирный дом с окнами DECA — коммерческий проект" },
          ].map((s) => (
            <Link key={s.title} href={s.href} className="group block bg-white rounded-xl border border-border overflow-hidden transition-all hover:shadow-xl hover:border-blue-accent/20">
              <PhotoPlaceholder description={s.photoDesc} height="h-48" className="rounded-none border-0" />
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-text-primary text-lg mb-2 group-hover:text-blue-accent transition-colors">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center group-hover:bg-blue-accent transition-colors mt-1">
                  <svg className="w-5 h-5 text-blue-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Testimonials — hidden until real B2B testimonials are collected from contractors/architects */}



      {/* ═══════ REVIEWS ═══════ */}
      <ReviewsSection />

      {/* ═══════ DELIVERY MAP ═══════ */}
      <DeliveryMapSection />

      <B2BContactForm title="Get Professional Pricing" subtitle="Tell us about your project and we'll prepare a detailed quote." buttonText="Submit Request" segment="general" projectTypes={["New Construction", "Renovation", "Commercial", "Multi-family", "Dealer Partnership"]} />
      <StickyCTA />
    </>
  );
}
