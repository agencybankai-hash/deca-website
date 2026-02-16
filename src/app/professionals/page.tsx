import Link from "next/link";
import { Breadcrumb, PageHero, Section, SectionTitle, FeatureCard, ImagePlaceholder } from "@/components/ui";

export const metadata = {
  title: "For Professionals | Contractors, Architects, Dealers | DECA Windows",
  description: "Premium European-style windows for contractors, architects, builders, and dealers. Volume pricing, custom specifications, and dedicated technical support.",
};

export default function ProfessionalsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "For Professionals" }]} />
      <PageHero
        title="Partner with DECA"
        subtitle="Premium European-style windows for contractors, architects, builders, and dealers. Volume pricing, custom specifications, and dedicated technical support."
        badge="For Professionals"
      />

      {/* Why Professionals Choose DECA */}
      <Section>
        <SectionTitle title="Why Professionals Choose DECA" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Custom to Spec", desc: "Any size, shape, or configuration manufactured to your exact specifications at our MA facility." },
            { title: "Volume Pricing", desc: "Quantity-based discounts. Larger orders = better pricing. Factory-direct, no middleman." },
            { title: "Technical Support", desc: "Dedicated project support, detailed specifications, and installation guidance throughout." },
            { title: "Local Manufacturing", desc: "Made in Massachusetts. 4-week production. Reliable delivery across the Northeast." },
            { title: "Exceed Codes", desc: "Our windows exceed building codes by up to 300%. NFRC certified, ENERGY STAR ready, LEED eligible." },
            { title: "Partnership Program", desc: "Become a DECA dealer or preferred installer. Training, marketing support, and priority pricing." },
          ].map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.desc} />
          ))}
        </div>
      </Section>

      {/* Segments */}
      <Section gray>
        <SectionTitle title="Solutions for Your Segment" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Contractors & Builders", desc: "Bulk orders, consistent quality, on-time delivery. Volume pricing for new construction and renovation projects." },
            { title: "Architects & Designers", desc: "Detailed specifications, custom designs, BIM data. Products that match any architectural vision." },
            { title: "Dealers & Installers", desc: "Become a DECA partner. Training, marketing materials, priority pricing, and territory exclusivity." },
            { title: "Commercial Projects", desc: "Multi-family, office, retail, historic renovation. LEED-eligible products with commercial-grade performance." },
          ].map((s) => (
            <FeatureCard key={s.title} title={s.title} description={s.desc} />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionTitle title="Trusted by Professionals" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Michael Rodriguez", role: "General Contractor, Cambridge", text: "As a contractor, I've worked with many window suppliers, but DECA's quality and customer service stands out." },
            { name: "Robert Williams", role: "Architect, Springfield", text: "We specified DECA for a luxury apartment complex. Both we and our client are extremely satisfied with the performance." },
          ].map((t) => (
            <div key={t.name} className="bg-warm-gray rounded-xl p-6 border border-border">
              <p className="text-sm text-text-secondary italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-sm text-text-primary">{t.name}</p>
              <p className="text-xs text-text-muted">{t.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* B2B Contact Form */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Professional Pricing</h2>
          <p className="text-white/60 text-lg mb-10">Tell us about your project and we&rsquo;ll prepare a detailed quote.</p>
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
    </>
  );
}
