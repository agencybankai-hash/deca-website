import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, CTABlock, PhotoPlaceholder, ServiceIcons, GuideCard } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "European-Style Doors | Entry, French & Sliding | DECA Doors",
  description: "Premium European entry doors, swing (French) doors, and sliding door systems manufactured in Massachusetts. Multi-point locking, thermal break technology, factory-direct pricing.",
  alternates: { canonical: "/doors" },
};

export default function DoorsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Doors" }]} />

      {/* Hero — matches Figma Doors page layout */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Our Products</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
                Style, Warmth, Security.<br />DECA Doors for Your Home and Business.
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                European engineering meets American manufacturing. Our door systems deliver exceptional thermal performance,
                multi-point security, and elegant design — all backed by a 15-year warranty and factory-direct pricing.
              </p>
              {/* Subcategory links — matches Figma */}
              <div className="space-y-3">
                {[
                  { href: "/sliding-doors", label: "Sliding Doors", desc: "PSk, Lift & Slide, and DECA Roto systems for panoramic openings.", photoDesc: "Фото: раздвижная дверь в интерьере" },
                  { href: "/doors/french-doors", label: "Swing (French) Doors", desc: "Classic double-leaf doors with European tilt & turn hardware.", photoDesc: "Фото: распашные французские двери" },
                  { href: "/doors/entry-doors", label: "Entry Doors", desc: "Secure, insulated entrance doors with multi-point locking.", photoDesc: "Фото: входная дверь DECA в фасаде" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="group flex items-center gap-4 p-4 bg-warm-gray rounded-xl border border-border hover:border-blue-accent/30 hover:shadow-md transition-all">
                    <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <PhotoPlaceholder description={item.photoDesc} height="h-20" className="rounded-lg border-0" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-text-primary group-hover:text-blue-accent transition-colors mb-0.5">{item.label}</h3>
                      <p className="text-sm text-text-muted line-clamp-2">{item.desc}</p>
                    </div>
                    <svg className="w-5 h-5 text-text-muted group-hover:text-blue-accent shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
            <PhotoPlaceholder description="Фото: коллекция дверей DECA — вход, французские, раздвижные в одном кадре" height="h-[500px]" />
          </div>
        </div>
      </section>

      {/* Benefits row — matches Figma "Experience the True Benefits" */}
      <Section gray>
        <SectionTitle title="Experience the True Benefits of DECA Doors" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { icon: "🔒", title: "Multi-Point Security", desc: "Up to 12 locking points" },
            { icon: "🌡️", title: "Thermal Insulation", desc: "U-value as low as 0.10" },
            { icon: "🔇", title: "Sound Reduction", desc: "Up to 50 dB noise block" },
            { icon: "💨", title: "Weather Resistance", desc: "140 mph wind rated" },
            { icon: "🏗️", title: "Made in USA", desc: "Westfield, MA factory" },
          ].map((b) => (
            <div key={b.title} className="text-center">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h4 className="font-semibold text-sm text-text-primary mb-1">{b.title}</h4>
              <p className="text-xs text-text-muted">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Profiles — matches Figma uPVC/Aluminum section */}
      <Section>
        <SectionTitle badge="Technology" title="Precision in Every Detail" subtitle="Advanced components engineered for decades of reliable performance." />
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-warm-gray rounded-xl border border-border overflow-hidden">
            <PhotoPlaceholder description="Фото: технический чертёж/разрез дверного uPVC профиля с аннотациями камер и армирования" height="h-72" className="rounded-none border-0" />
            <div className="p-6">
              <h3 className="font-bold text-lg text-text-primary mb-2">uPVC Door Profile</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Multi-chamber design with galvanized steel reinforcement. Triple EPDM sealing for maximum weather protection. Low-maintenance, UV-resistant exterior.</p>
            </div>
          </div>
          <div className="bg-warm-gray rounded-xl border border-border overflow-hidden">
            <PhotoPlaceholder description="Фото: технический чертёж/разрез алюминиевого дверного профиля с термомостом" height="h-72" className="rounded-none border-0" />
            <div className="p-6">
              <h3 className="font-bold text-lg text-text-primary mb-2">Aluminum Door Profile</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Thermal break technology with polyamide insulation strips. Structural strength for large openings. Available in 200+ RAL colors.</p>
            </div>
          </div>
        </div>
        {/* Specs table — matches Figma */}
        <div className="bg-warm-gray rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                <th className="text-left py-3 px-4 font-medium">Specification</th>
                <th className="text-center py-3 px-4 font-medium">uPVC Doors</th>
                <th className="text-center py-3 px-4 font-medium">Aluminum Doors</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Frame Depth", "70 mm", "65 mm"],
                ["U-Value (frame)", "1.0 W/m²K", "1.4 W/m²K"],
                ["U-Value (system)", "0.10 W/m²K", "0.12 W/m²K"],
                ["Sound Insulation", "Up to 47 dB", "Up to 45 dB"],
                ["Security Class", "RC2 / RC3", "RC2 / RC3"],
                ["Max Height", "2,500 mm", "3,000 mm"],
                ["Colors Available", "40+ standard", "200+ RAL"],
              ].map(([spec, upvc, alu], i) => (
                <tr key={spec} className={i % 2 === 0 ? "bg-white" : "bg-warm-gray"}>
                  <td className="py-3 px-4 font-medium text-text-primary">{spec}</td>
                  <td className="py-3 px-4 text-center text-text-secondary">{upvc}</td>
                  <td className="py-3 px-4 text-center text-text-secondary">{alu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Door product types — matches Figma grid */}
      <Section gray>
        <SectionTitle badge="Catalog" title="uPVC and Aluminum Doors" subtitle="Choose your door type and customize every detail." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Sliding Doors", desc: "PSk, Lift & Slide, DECA Roto. Panoramic glass walls with effortless operation.", href: "/sliding-doors", photoDesc: "Фото: раздвижная дверная система в интерьере, вид на террасу" },
            { title: "Swing (French) Doors", desc: "Single or double-leaf. Tilt & turn hardware. Classic elegance.", href: "/doors/french-doors", photoDesc: "Фото: распашные французские двери открытые внутрь, свет из сада" },
            { title: "Entry Doors", desc: "Multi-point locking, thermal insulation, custom panel designs.", href: "/doors/entry-doors", photoDesc: "Фото: парадная входная дверь с боковым остеклением" },
          ].map((d) => (
            <Link key={d.title} href={d.href} className="group block">
              <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
                <PhotoPlaceholder description={d.photoDesc} height="h-56" className="rounded-none border-0" />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-text-primary mb-2 group-hover:text-blue-accent transition-colors">{d.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">{d.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-accent group-hover:gap-2.5 transition-all">
                    View details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Colors */}
      <Section>
        <SectionTitle badge="Customization" title="Colors That Complement Your Style" subtitle="Over 40 standard finishes and 200+ RAL custom colors for interior and exterior." />
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-8">
          {[
            { name: "White", color: "#FFFFFF" }, { name: "Cream", color: "#F5F0E1" },
            { name: "Light Gray", color: "#C4C4C4" }, { name: "Anthracite", color: "#3C3C3C" },
            { name: "Dark Brown", color: "#4A2E1C" }, { name: "Golden Oak", color: "#B8860B" },
            { name: "Mahogany", color: "#6B3A2A" }, { name: "Black", color: "#1A1A1A" },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div className="w-full aspect-square rounded-lg border border-border mb-2" style={{ backgroundColor: c.color }} />
              <span className="text-xs text-text-muted">{c.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section gray>
        <SectionTitle badge="Gallery" title="Doors in Real Projects" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PhotoPlaceholder description="Фото: современный дом с большими раздвижными дверями DECA на террасу" height="h-48" />
          <PhotoPlaceholder description="Фото: классический фасад с французскими дверями и боковыми окнами" height="h-48" />
          <PhotoPlaceholder description="Фото: элегантная входная дверь в каменном портале" height="h-48" />
          <PhotoPlaceholder description="Фото: интерьер лофта с панорамными раздвижными дверями" height="h-48" />
        </div>
      </Section>

      {/* Service Icons */}
      <Section>
        <SectionTitle title="Exceptional Service in Massachusetts" />
        <ServiceIcons />
      </Section>

      {/* Expert Guides */}
      <Section gray>
        <SectionTitle badge="Resources" title="Expert Guides" />
        <div className="grid md:grid-cols-3 gap-6">
          <GuideCard title="Entry Door Security Guide" desc="Understanding RC classes, multi-point locks, and how to protect your home." href="/blog" photoDesc="Фото: крупный план системы запирания входной двери" />
          <GuideCard title="Sliding Door Systems Compared" desc="PSk vs Lift & Slide vs DECA Roto — which system is right for you?" href="/blog" photoDesc="Фото: три типа раздвижных систем рядом в сравнении" />
          <GuideCard title="French Doors: Design Guide" desc="Indoor vs outdoor, single vs double leaf, glazing and hardware options." href="/blog" photoDesc="Фото: дизайн-подборка вариантов французских дверей" />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionTitle badge="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "What types of doors does DECA manufacture?", a: "We manufacture three main categories: sliding doors (PSk parallel-slide, Lift & Slide, and DECA Roto tilt & slide), swing/French doors (single and double-leaf with tilt & turn), and entry doors (insulated panel doors with multi-point locking)." },
            { q: "How secure are DECA doors?", a: "All DECA doors feature multi-point locking systems (up to 12 points) and are available in RC2 and RC3 security classes. Entry doors include steel-reinforced frames and anti-drill, anti-pick cylinder locks." },
            { q: "Can doors be custom sized?", a: "Yes. Every door is made to order. Sliding doors can span up to 6 meters wide and 3 meters tall. Entry doors and French doors are available in virtually any dimension within structural limits." },
            { q: "What is the thermal performance of DECA doors?", a: "Our door systems achieve U-values as low as 0.10 W/m²K with triple glazing. This exceeds Passive House requirements and delivers significant energy savings compared to standard American doors." },
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

      <CTABlock title="Let's Work Together to Build Better Spaces" subtitle="Whether residential or commercial — we're here to help you find the perfect door solution." btnText="Get a Quote" />
    </>
  );
}
