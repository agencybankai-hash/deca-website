import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder } from "@/components/ui";
import type { Metadata } from "next";
import { cases } from "@/data/cases";
import ReviewsSection from "@/components/ReviewsSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Customer Stories | Real Results with DECA Windows & Doors",
  description: "Read how homeowners, architects, contractors, and developers achieved real energy savings, noise reduction, and comfort with DECA European windows and doors.",
  keywords: "DECA case studies, window replacement results, energy savings windows, customer stories, tilt turn windows review",
};

export default function CasesPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Customer Stories" },
      ]} />

      <Section>
        <SectionTitle badge="Customer Stories" title="Real Homes. Real Results." subtitle="Every project is different. The outcome is always the same — better comfort, lower bills, zero regrets." />
        <div className="space-y-12">
          {cases.map((c, idx) => (
            <Link key={c.slug} href={`/cases/${c.slug}`} className="group block bg-warm-gray rounded-2xl border border-border overflow-hidden transition-all hover:shadow-xl hover:border-blue-accent/20">
              <div className={`grid md:grid-cols-2 gap-0 ${idx % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <PhotoPlaceholder description={c.photoDesc} height="h-64 md:h-full" className="rounded-none border-0 min-h-[280px]" />
                <div className="p-8 md:p-10" style={{ direction: "ltr" }}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-brand bg-brand/10 px-2.5 py-1 rounded-full">{c.type}</span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-text-muted bg-gray-100 px-2.5 py-1 rounded-full">{c.location}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-blue-accent transition-colors">{c.title}</h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{c.summary}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                    {c.results.map((r) => (
                      <div key={r.label} className="text-center bg-white rounded-lg p-3 border border-border">
                        <span className="block text-lg font-bold text-brand">{r.value}</span>
                        <span className="text-[10px] text-text-muted uppercase tracking-wide">{r.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-blue-accent font-medium text-sm">
                    Read full story
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <ReviewsSection showServiceIcons={false} />

      <CTAWithDocs
        title="Ready to Write Your Own Success Story?"
        subtitle="Get a custom quote, window blueprints, and energy savings estimate — all prepared for your project."
        btnText="Start Your Project"
      />
      <StickyCTA />
    </>
  );
}
