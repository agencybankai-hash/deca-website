import { Breadcrumb, PageHero, Section, SectionTitle, StatCard, CTABlock, ImagePlaceholder } from "@/components/ui";

export const metadata = {
  title: "Service Areas | Massachusetts & Northeast | DECA Windows",
  description: "Proudly serving Massachusetts and the entire Northeast from our Westfield, MA factory.",
};

export default function LocationsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Service Areas" }]} />
      <PageHero
        title="Areas We Serve"
        subtitle="Proudly serving Massachusetts and the entire Northeast from our Westfield, MA factory."
        badge="Service Areas"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ImagePlaceholder label="Interactive Map — Clickable Regions" height="h-96" />
          <div className="space-y-4">
            {[
              { state: "Massachusetts", cities: ["Boston", "Springfield", "Worcester", "Cambridge", "Westfield"], primary: true },
              { state: "Connecticut", cities: ["Hartford", "New Haven", "Stamford"] },
              { state: "Rhode Island", cities: ["Providence", "Newport"] },
              { state: "New Hampshire", cities: ["Manchester", "Nashua"] },
              { state: "New York", cities: ["NYC Metro", "Albany", "Long Island"] },
            ].map((area) => (
              <div key={area.state} className="bg-white rounded-lg border border-border p-4 hover:border-blue-accent/30 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  {area.primary && <span className="bg-blue-light text-blue-accent text-xs font-semibold px-2 py-0.5 rounded">HQ</span>}
                  <h3 className="font-semibold text-text-primary">{area.state}</h3>
                </div>
                <p className="text-sm text-text-secondary">{area.cities.join(" \u00b7 ")}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section gray>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Why Local Manufacturing Matters</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Unlike imported European windows that take 8-12 weeks to arrive, DECA manufactures in Westfield, MA — giving you 4-week turnaround, local warranty support, and no import headaches.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <StatCard value="4 wks" label="Production Time" />
            <StatCard value="Local" label="Warranty Service" />
            <StatCard value="$0" label="Import Duties" />
          </div>
        </div>
      </Section>

      <CTABlock title="Serving Your Area?" subtitle="Get a free quote with delivery estimate for your location." btnText="Get Your Free Quote" />
    </>
  );
}
