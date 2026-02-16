import Link from "next/link";
import { Breadcrumb, PageHero, Section, SectionTitle, CTABlock, ImagePlaceholder } from "@/components/ui";

export const metadata = {
  title: "European-Style Windows | uPVC & Aluminum | DECA Windows",
  description: "Premium tilt & turn, uPVC, and aluminum windows manufactured in Massachusetts. Industry-leading U-values, sound insulation, and security.",
};

export default function WindowsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Windows" }]} />
      <PageHero
        title="European-Style Windows"
        subtitle="Premium tilt & turn, uPVC, and aluminum windows manufactured in Massachusetts. Industry-leading U-values, sound insulation, and security."
        badge="Our Products"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Tilt & Turn Windows",
              desc: "Our flagship product. Two opening modes, U-value as low as 0.10, up to 12 locking points. The most versatile window system available.",
              tag: "Most Popular",
              href: "/tilt-turn",
            },
            {
              title: "uPVC / Vinyl Windows",
              desc: "6-chamber profile with 2.8mm walls. Exceptional durability, noise resistance, and thermal insulation. 30+ year service life.",
              tag: "Energy Efficient",
              href: "/windows/upvc-windows",
            },
            {
              title: "Aluminum Windows",
              desc: "Modern European design with thermal break technology. Slim profiles, maximum glass area, contemporary aesthetics.",
              tag: "Modern Design",
              href: "/windows/aluminum-windows",
            },
          ].map((w) => (
            <Link key={w.title} href={w.href} className="group">
              <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
                <ImagePlaceholder label="Product Image" height="h-56" />
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-blue-accent bg-blue-light px-2.5 py-1 rounded mb-3">{w.tag}</span>
                  <h3 className="font-bold text-text-primary text-lg mb-2 group-hover:text-blue-accent transition-colors">{w.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{w.desc}</p>
                  <span className="text-blue-accent font-medium text-sm">Learn More &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Glazing Options */}
      <Section gray>
        <SectionTitle title="Glazing Options" subtitle="Choose the right glass package for your climate and needs." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Double Glazed", uval: "0.25", desc: "Two panes with argon fill. Excellent performance for moderate climates." },
            { title: "Triple Glazed", uval: "0.10-0.13", desc: "Three panes with dual argon chambers. Maximum efficiency for cold climates.", featured: true },
            { title: "Laminated Double", uval: "0.18", desc: "Safety glass with acoustic benefits. Hurricane and impact resistance." },
          ].map((g) => (
            <div key={g.title} className={`bg-white rounded-xl border p-6 text-center ${g.featured ? "border-blue-accent shadow-lg" : "border-border"}`}>
              {g.featured && <span className="inline-block text-xs font-semibold text-blue-accent bg-blue-light px-2.5 py-1 rounded mb-3">Recommended</span>}
              <h3 className="font-bold text-text-primary text-lg mb-2">{g.title}</h3>
              <p className="text-3xl font-bold text-blue-accent mb-3">U: {g.uval}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock title="Find Your Perfect Window" subtitle="Use our configurator or get a free consultation." btnText="Get a Quote" />
    </>
  );
}
