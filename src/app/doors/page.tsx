import Link from "next/link";
import { Breadcrumb, PageHero, Section, CTABlock, ImagePlaceholder } from "@/components/ui";

export const metadata = {
  title: "European-Style Doors | Entry, French & Sliding | DECA Windows",
  description: "Premium entry doors, French doors, and sliding door systems. Security, efficiency, and elegance in every product.",
};

export default function DoorsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Doors" }]} />
      <PageHero
        title="European-Style Doors"
        subtitle="Entry doors, French doors, and advanced sliding systems. Security, efficiency, and elegance in every product."
        badge="Our Products"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Entry & Front Doors",
              desc: "Single and double entry doors with multi-point locking, custom sidelights and transoms. Security meets design.",
            },
            {
              title: "French Doors",
              desc: "Double French doors with full glass options. Energy efficient and elegant. Perfect for connecting interior and exterior spaces.",
            },
            {
              title: "Sliding Door Systems",
              desc: "Three systems: PSk Parallel Slide, Lift & Slide (up to 20ft), and DECA with Roto Inova hardware.",
              href: "/sliding-doors",
            },
          ].map((d) => (
            <div key={d.title} className="group">
              {d.href ? (
                <Link href={d.href}>
                  <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                    <ImagePlaceholder label="Door Image" height="h-56" />
                    <div className="p-6">
                      <h3 className="font-bold text-text-primary text-lg mb-2 group-hover:text-blue-accent transition-colors">{d.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{d.desc}</p>
                      <span className="inline-block mt-4 text-sm font-medium text-blue-accent">View Systems &rarr;</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="bg-white rounded-xl border border-border overflow-hidden">
                  <ImagePlaceholder label="Door Image" height="h-56" />
                  <div className="p-6">
                    <h3 className="font-bold text-text-primary text-lg mb-2">{d.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <CTABlock title="Looking for the Perfect Door?" subtitle="Custom sizes, colors, and configurations. Factory-direct pricing." btnText="Get a Quote" />
    </>
  );
}
