import { Breadcrumb, PageHero, Section, SectionTitle, CTABlock, ImagePlaceholder } from "@/components/ui";

export const metadata = {
  title: "About DECA | European Technology, American Craftsmanship",
  description: "Elevating home comfort. European technology, American craftsmanship, Massachusetts quality.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "About DECA" }]} />
      <PageHero
        title="About DECA"
        subtitle="Elevating home comfort. European technology, American craftsmanship, Massachusetts quality."
        badge="Our Story"
      />

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h2>
          <p className="text-text-secondary leading-relaxed text-lg mb-10">
            Our mission is to make European-style windows and doors available to everyone by manufacturing them in the USA. Our products prioritize energy efficiency, sound insulation, thermal comfort, security, sleek aesthetics, durability, environmental considerations, and easy maintenance.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4">What Makes DECA Different</h2>
          <p className="text-text-secondary leading-relaxed text-lg mb-10">
            DECA is one of few local tilt and turn window manufacturers in the US. Taking advantage of German standards and technologies proven over 70 years, we deliver premium quality with the speed and warranties of domestic suppliers. Our well-streamlined production allows for more attainable pricing than European importers.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4">Our Values</h2>
          <p className="text-text-secondary leading-relaxed text-lg mb-10">
            We are dedicated to ensuring long-term customer satisfaction. We keep innovating and improving to provide the best quality, price, and time-frames.
          </p>
        </div>
      </Section>

      {/* Team */}
      <Section gray>
        <SectionTitle title="Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Vladimir", role: "Founder & CEO", desc: "15+ years in European window industry. Passionate about making premium products accessible." },
            { name: "Technical Director", role: "Engineering Lead", desc: "10+ years of window engineering. NFRC certified specialist." },
            { name: "Installation Lead", role: "Field Operations", desc: "500+ completed projects across New England. Expert in residential and commercial installation." },
          ].map((m) => (
            <div key={m.name} className="bg-white rounded-xl border border-border p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-blue-accent/10 mx-auto mb-4 flex items-center justify-center text-blue-accent font-bold text-2xl">
                {m.name[0]}
              </div>
              <h3 className="font-semibold text-text-primary text-lg">{m.name}</h3>
              <p className="text-sm text-blue-accent mb-3">{m.role}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock title="Ready to Work with Us?" subtitle="Whether homeowner or professional, we're here to help." btnText="Contact Us" />
    </>
  );
}
