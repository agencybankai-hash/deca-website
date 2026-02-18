import { Breadcrumb, PageHero, Section, StatCard, CTABlock } from "@/components/ui";
import DeliveryMap from "@/components/DeliveryMap";

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
          {/* Map */}
          <DeliveryMap />

          {/* Sidebar — state list */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Delivery Regions</h3>
            {[
              { state: "Massachusetts", abbr: "MA", cities: ["Westfield (HQ)", "Boston", "Springfield", "Worcester", "Cambridge"], primary: true },
              { state: "Connecticut", abbr: "CT", cities: ["Hartford", "New Haven", "Stamford"] },
              { state: "Rhode Island", abbr: "RI", cities: ["Providence", "Newport"] },
              { state: "New Hampshire", abbr: "NH", cities: ["Manchester", "Nashua"] },
              { state: "New York", abbr: "NY", cities: ["NYC Metro", "Albany", "Long Island"] },
              { state: "Vermont", abbr: "VT", cities: ["Burlington"] },
              { state: "Maine", abbr: "ME", cities: ["Portland"] },
              { state: "New Jersey", abbr: "NJ", cities: ["Statewide"] },
              { state: "Pennsylvania", abbr: "PA", cities: ["Statewide"] },
            ].map((area) => (
              <div
                key={area.state}
                className="bg-white rounded-xl border border-border p-4 hover:border-brand/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  {area.primary && (
                    <span className="bg-brand/10 text-brand text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">HQ</span>
                  )}
                  <h4 className="font-semibold text-text-primary text-sm">{area.state}</h4>
                  <span className="text-[10px] text-text-muted font-medium ml-auto">{area.abbr}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{area.cities.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section gray>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Why Local Manufacturing Matters</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Unlike imported European windows that take 8–12 weeks to arrive, DECA manufactures in Westfield, MA — giving you 4-week turnaround, local warranty support, and no import headaches.
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
