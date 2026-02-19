import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder, StatCard } from "@/components/ui";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "For Dealers & Installers | Partnership Program | DECA Windows",
  description: "Become a DECA dealer. Territory exclusivity, training, marketing support, priority pricing, and co-branding opportunities for window and door professionals.",
  keywords: "window dealer program, installer partnership, DECA dealer, window distributor, territory exclusivity, dealer pricing",
};

const benefits = [
  { icon: "🗺️", title: "Territory Exclusivity", desc: "Protected geographic territory with no competing dealers. Your area, your customers, your growth." },
  { icon: "💲", title: "Dealer Pricing", desc: "Preferred wholesale pricing with tiered discounts based on annual volume. Margins that make your business profitable." },
  { icon: "🎓", title: "Training & Certification", desc: "Comprehensive product training for your sales and installation teams. DECA-certified installer program with ongoing education." },
  { icon: "📢", title: "Marketing Support", desc: "Co-branded brochures, digital assets, showroom displays, and lead generation support. We invest in your success." },
  { icon: "🏪", title: "Showroom Program", desc: "Discounted display units, point-of-sale materials, and sample kits. Create a compelling in-store experience." },
  { icon: "🛡️", title: "Warranty Backing", desc: "15-year manufacturer warranty on all products. Your customers get peace of mind, you get fewer callbacks." },
];

const steps = [
  { num: "01", title: "Apply", desc: "Fill out the partnership application. We'll review your business, territory, and experience." },
  { num: "02", title: "Onboarding", desc: "Product training, pricing setup, marketing materials, and showroom planning — we set you up for success." },
  { num: "03", title: "Launch", desc: "Start selling with full support. Dedicated account manager, marketing co-op funds, and lead referrals." },
  { num: "04", title: "Grow Together", desc: "Quarterly business reviews, new product previews, and volume incentives. We grow when you grow." },
];

export default function DealersPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "For Professionals", href: "/professionals" },
        { label: "Dealers & Installers" },
      ]} />

      {/* Hero */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[10px] font-semibold tracking-widest uppercase mb-3 text-brand">Dealer Partnership</span>
            <h1 className="text-3xl md:text-[42px] font-bold text-text-primary leading-tight mb-4">
              Sell Premium European Windows in Your Market
            </h1>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
              Join the DECA dealer network. Exclusive territory, wholesale pricing, comprehensive training, and marketing support — everything you need to build a profitable window and door business with products that sell themselves.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact-form" className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded text-sm font-semibold transition-colors">
                Apply for Partnership
              </Link>
              <Link href="/windows" className="border border-border hover:border-brand text-text-secondary hover:text-brand px-6 py-3 rounded text-sm font-medium transition-colors">
                Explore Products
              </Link>
            </div>
          </div>
          <PhotoPlaceholder description="Фото: шоурум дилера DECA с образцами окон и дверей, клиент консультируется" height="h-80" />
        </div>
      </Section>

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value="40+" label="Active Dealers" />
          <StatCard value="15 yr" label="Warranty Coverage" />
          <StatCard value="4 wk" label="Order to Delivery" />
          <StatCard value="100%" label="Territory Protected" />
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionTitle badge="Partnership" title="Why Dealers Choose DECA" subtitle="A partnership program designed to grow your business." />
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
        <SectionTitle badge="Process" title="Becoming a DECA Dealer" subtitle="From application to your first sale — we make it straightforward." />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for Dealer Partnership</h2>
          <p className="text-white/60 text-lg mb-10">Tell us about your business and the territory you&apos;d like to cover.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[["Company Name", "text"], ["Your Name", "text"], ["Email", "email"], ["Phone", "tel"]].map(([label, type]) => (
              <div key={label}>
                <label className="text-xs text-white/50 block mb-1.5">{label}</label>
                <input type={type} className="w-full bg-navy-800 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-accent focus:outline-none" />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="text-xs text-white/50 block mb-1.5">Business Type</label>
              <select className="w-full bg-navy-800 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:border-blue-accent focus:outline-none">
                <option>Window & Door Showroom</option><option>General Contractor</option><option>Installation Company</option><option>Home Improvement Retailer</option><option>Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-white/50 block mb-1.5">Desired Territory & Business Details</label>
              <textarea rows={3} className="w-full bg-navy-800 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-accent focus:outline-none" />
            </div>
          </div>
          <button className="bg-blue-accent hover:bg-blue-hover text-white px-8 py-3.5 rounded-md font-semibold mt-8 transition-colors">
            Submit Application
          </button>
        </div>
      </section>
      <StickyCTA />
    </>
  );
}
