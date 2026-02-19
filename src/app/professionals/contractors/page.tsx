import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder, StatCard } from "@/components/ui";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "For Contractors & Builders | Volume Pricing & Reliable Delivery | DECA Windows",
  description: "Bulk ordering with volume pricing, on-time delivery, and dedicated project management. European-quality windows and doors for new construction and renovation.",
  keywords: "contractor windows, builder windows, bulk window orders, volume pricing, construction windows, DECA partner",
};

const benefits = [
  { icon: "💰", title: "Volume Pricing", desc: "Tiered discounts starting from 10+ units. The more you order, the more you save — up to 25% off retail." },
  { icon: "📦", title: "Bulk Ordering", desc: "Streamlined ordering for entire projects. One PO, one shipment, one point of contact. No per-unit hassle." },
  { icon: "🕐", title: "On-Time Delivery", desc: "4-week production cycle with guaranteed delivery dates. We coordinate with your project timeline, not the other way around." },
  { icon: "📋", title: "Technical Documentation", desc: "Complete installation guides, structural calculations, and spec sheets for every product in your order." },
  { icon: "👤", title: "Dedicated Project Manager", desc: "A single point of contact from quote to installation. Direct line, fast answers, no runaround." },
  { icon: "🔧", title: "Installation Support", desc: "On-site training for your crew, video guides, and phone support during installation. We want it done right." },
];

const steps = [
  { num: "01", title: "Request a Quote", desc: "Share your project specs — blueprints, quantities, sizes. We'll prepare a detailed quote within 48 hours." },
  { num: "02", title: "Review & Approve", desc: "We'll walk you through options, pricing tiers, and delivery schedule. Adjustments welcome." },
  { num: "03", title: "Production", desc: "Your order enters our Massachusetts facility. 4-week turnaround, quality-checked at every stage." },
  { num: "04", title: "Delivery & Support", desc: "Shipped to your job site on schedule. Our team stays available for installation questions." },
];

export default function ContractorsPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "For Professionals", href: "/professionals" },
        { label: "Contractors & Builders" },
      ]} />

      {/* Hero */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[10px] font-semibold tracking-widest uppercase mb-3 text-brand">For Contractors & Builders</span>
            <h1 className="text-3xl md:text-[42px] font-bold text-text-primary leading-tight mb-4">
              Windows That Arrive On Time, Every Time
            </h1>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
              We know your schedule doesn&apos;t wait. DECA delivers European-quality windows and doors with volume pricing, guaranteed delivery dates, and a dedicated project manager for every order. Built in Massachusetts, shipped direct to your job site.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact-form" className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded text-sm font-semibold transition-colors">
                Get Volume Pricing
              </Link>
              <Link href="/performance" className="border border-border hover:border-brand text-text-secondary hover:text-brand px-6 py-3 rounded text-sm font-medium transition-colors">
                View Specs & Testing
              </Link>
            </div>
          </div>
          <PhotoPlaceholder description="Фото: подрядчик на строительной площадке принимает партию окон DECA" height="h-80" />
        </div>
      </Section>

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value="500+" label="Projects Completed" />
          <StatCard value="4 wk" label="Production Cycle" />
          <StatCard value="25%" label="Volume Discount" />
          <StatCard value="98%" label="On-Time Delivery" />
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionTitle badge="Why DECA" title="Built for Contractors" subtitle="Every aspect of our process is designed around your project needs." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="bg-warm-gray rounded-xl p-6 border border-border">
              <span className="text-2xl mb-3 block">{b.icon}</span>
              <h3 className="font-bold text-text-primary text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section gray>
        <SectionTitle badge="Process" title="How We Work Together" subtitle="From quote to delivery — a clear, predictable process." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <span className="text-5xl font-black text-brand/10 absolute -top-2 -left-1">{s.num}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Contractor Pricing</h2>
          <p className="text-white/60 text-lg mb-10">Share your project details and we&apos;ll prepare a volume quote within 48 hours.</p>
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
                <option>New Construction</option><option>Renovation</option><option>Multi-family</option><option>Mixed-Use</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-white/50 block mb-1.5">Project Details (approx. quantities, sizes, timeline)</label>
              <textarea rows={3} className="w-full bg-navy-800 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-accent focus:outline-none" />
            </div>
          </div>
          <button className="bg-blue-accent hover:bg-blue-hover text-white px-8 py-3.5 rounded-md font-semibold mt-8 transition-colors">
            Request Volume Quote
          </button>
        </div>
      </section>
      <StickyCTA />
    </>
  );
}
