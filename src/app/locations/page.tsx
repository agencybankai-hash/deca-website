import { Breadcrumb, PageHero, Section, StatCard } from "@/components/ui";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";

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

      {/* ═══════ DELIVERY MAP ═══════ */}
      <DeliveryMapSection />

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

      {/* ═══════ REVIEWS ═══════ */}
      <ReviewsSection />

      <CTAWithDocs
        title="Serving Your Area?"
        subtitle="Get your custom order form, window blueprints, and detailed specification — all prepared for your project."
        btnText="Get Your Free Quote"
      />

      <StickyCTA />
    </>
  );
}