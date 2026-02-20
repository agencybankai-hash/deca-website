import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder, StatCard } from "@/components/ui";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Commercial Projects | Multi-Family, Office & Retail | DECA Windows",
  description: "European-quality windows for commercial construction. Multi-family, office, retail, and historic renovation. LEED-eligible products with code compliance support.",
  keywords: "commercial windows, multi-family windows, office windows, LEED windows, commercial construction, historic renovation windows",
};

const benefits = [
  { icon: "🏢", title: "Multi-Family Solutions", desc: "Standardized window lines for apartment and condo projects. Consistent quality across hundreds of units with bulk pricing." },
  { icon: "🌿", title: "LEED & Green Building", desc: "Products eligible for LEED credits. Energy Star certified, with documented performance data for green building certifications." },
  { icon: "📜", title: "Code Compliance", desc: "We handle energy code calculations, structural engineering reviews, and compliance documentation for your jurisdiction." },
  { icon: "🏛️", title: "Historic Renovation", desc: "Custom profiles that replicate historic window aesthetics while delivering modern energy performance. SHPO-approvable designs." },
  { icon: "📈", title: "Project Management", desc: "Phased delivery scheduling, on-site coordination, and dedicated project engineer for complex commercial builds." },
  { icon: "🔬", title: "Engineering Support", desc: "Structural calculations, wind load analysis, thermal modeling, and condensation resistance studies for your project." },
];

const steps = [
  { num: "01", title: "Project Review", desc: "Share plans and specifications. Our commercial team evaluates scope, timeline, and technical requirements." },
  { num: "02", title: "Engineering & Pricing", desc: "Detailed engineering review, product selection, and competitive commercial pricing proposal." },
  { num: "03", title: "Shop Drawings", desc: "Precise shop drawings for every opening. Approval cycle with your architect and GC before production." },
  { num: "04", title: "Phased Delivery", desc: "Coordinated delivery matching your construction schedule. Floor-by-floor, phase-by-phase — on your terms." },
];

export default function CommercialPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "For Professionals", href: "/professionals" },
        { label: "Commercial Projects" },
      ]} />

      {/* Hero */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[10px] font-semibold tracking-widest uppercase mb-3 text-brand">Commercial Division</span>
            <h1 className="text-3xl md:text-[42px] font-bold text-text-primary leading-tight mb-4">
              European Performance at Commercial Scale
            </h1>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
              From 50-unit apartment buildings to office towers and historic renovations — DECA delivers code-compliant, energy-efficient fenestration with engineering support, phased delivery, and the performance data your project demands.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact-form" className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded text-sm font-semibold transition-colors">
                Discuss Your Project
              </Link>
              <Link href="/performance" className="border border-border hover:border-brand text-text-secondary hover:text-brand px-6 py-3 rounded text-sm font-medium transition-colors">
                View Test Reports
              </Link>
            </div>
          </div>
          <PhotoPlaceholder description="Фото: многоквартирный жилой комплекс с установленными окнами DECA" height="h-80" />
        </div>
      </Section>

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value="300%" label="Exceeds Energy Code" />
          <StatCard value="50+" label="Commercial Projects" />
          <StatCard value="LEED" label="Eligible Products" />
          <StatCard value="PE" label="Engineering Stamped" />
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionTitle badge="Capabilities" title="Built for Commercial Construction" subtitle="Engineering support and project management for buildings of any scale." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="bg-warm-gray rounded-xl p-6 border border-border">
              <span className="text-2xl mb-3 block">{b.icon}</span>
              <h2 className="font-bold text-text-primary text-lg mb-2">{b.title}</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section gray>
        <SectionTitle badge="Process" title="Commercial Project Workflow" subtitle="Structured process for projects of any complexity." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <span className="text-3xl md:text-5xl font-black text-brand/10 absolute -top-2 -left-1">{s.num}</span>
              <div className="pt-10">
                <h3 className="font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ReviewsSection />
      <DeliveryMapSection />

      {/* B2B Contact Form */}
      <section id="contact-form" className="bg-brand text-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Commercial Project</h2>
          <p className="text-white/60 text-lg mb-10">Share project details for a commercial assessment and pricing proposal.</p>
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
                <option>Multi-Family Residential</option><option>Office / Corporate</option><option>Retail / Hospitality</option><option>Historic Renovation</option><option>Mixed-Use</option><option>Institutional</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-white/50 block mb-1.5">Project Scope (units, timeline, special requirements)</label>
              <textarea rows={3} className="w-full bg-navy-800 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-accent focus:outline-none" />
            </div>
          </div>
          <button className="bg-blue-accent hover:bg-blue-hover text-white px-8 py-3.5 rounded-md font-semibold mt-8 transition-colors">
            Request Commercial Quote
          </button>
        </div>
      </section>
      <StickyCTA />
    </>
  );
}
