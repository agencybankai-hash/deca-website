import { Breadcrumb, PageHero, Section, CTABlock, ImagePlaceholder } from "@/components/ui";

export const metadata = {
  title: "Sliding Door Systems | PSk, Lift & Slide | DECA Windows",
  description: "Three innovative sliding door systems for any application — from standard patio doors to panoramic 20-foot openings.",
};

export default function SlidingDoorsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Doors", href: "/doors" }, { label: "Sliding Door Systems" }]} />
      <PageHero
        title="Sliding Door Systems"
        subtitle="Three innovative systems for any application — from standard patio doors to panoramic 20-foot openings."
        badge="Our Products"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "PSk Parallel Slide", desc: "Smooth parallel sliding operation. Space-efficient design for standard openings. Excellent thermal performance.", uval: "0.18" },
            { title: "Lift & Slide", desc: "Premium system for openings up to 20 feet wide. Effortless operation with exceptional air tightness. Dramatic indoor-outdoor connections.", uval: "0.12" },
            { title: "DECA with Roto Inova", desc: "Maximum security and efficiency. uPVC with metal reinforcement, triple glazing options. Our most advanced sliding system.", uval: "0.12" },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-border overflow-hidden">
              <ImagePlaceholder label="System Image" height="h-56" />
              <div className="p-6">
                <h3 className="font-bold text-text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-3xl font-bold text-blue-accent mb-3">U: {s.uval}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock title="Which Sliding System Is Right for You?" subtitle="We'll help you choose the perfect system for your project." btnText="Get Expert Advice" />
    </>
  );
}
