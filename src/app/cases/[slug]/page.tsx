import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, PhotoPlaceholder, StatCard } from "@/components/ui";
import { cases } from "@/data/cases";
import { notFound } from "next/navigation";
import ReviewsSection from "@/components/ReviewsSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = cases.find((c) => c.slug === params.slug);
  if (!c) return {};
  return {
    title: `${c.title} | Customer Story | DECA Windows`,
    description: c.summary,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = cases.find((cs) => cs.slug === params.slug);
  if (!c) notFound();

  const otherCases = cases.filter((cs) => cs.slug !== c.slug);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Customer Stories", href: "/cases" },
        { label: c.title },
      ]} />

      {/* Hero */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-brand bg-brand/10 px-2.5 py-1 rounded-full">{c.type}</span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-text-muted bg-gray-100 px-2.5 py-1 rounded-full">{c.location}</span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-text-muted bg-gray-100 px-2.5 py-1 rounded-full">{c.products}</span>
          </div>
          <h1 className="text-3xl md:text-[42px] font-bold text-text-primary leading-tight mb-4">{c.title}</h1>
          <p className="text-lg text-text-secondary leading-relaxed">{c.summary}</p>
        </div>
      </Section>

      {/* Photo */}
      <Section gray>
        <div className="max-w-4xl mx-auto">
          <PhotoPlaceholder description={c.photoDescFull} height="h-72 md:h-96" className="rounded-2xl" />
        </div>
      </Section>

      {/* Results */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {c.results.map((r) => (
              <StatCard key={r.label} value={r.value} label={r.label} />
            ))}
          </div>
        </div>
      </Section>

      {/* Full Story */}
      <Section gray>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-6">The Full Story</h2>
          <div className="space-y-4">
            {c.story.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-[15px] text-text-secondary leading-[1.8]">{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 text-brand/15 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.277-.566-2.917-1.679zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.277-.566-2.917-1.679z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed mb-6 italic">
            &ldquo;{c.quote}&rdquo;
          </blockquote>
          <p className="font-semibold text-text-primary">{c.quoteName}</p>
          <p className="text-sm text-text-muted">{c.quoteRole}</p>
        </div>
      </Section>

      {/* Other cases */}
      {otherCases.length > 0 && (
        <Section gray>
          <SectionTitle badge="More Stories" title="Other Customer Projects" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCases.slice(0, 3).map((oc) => (
              <Link key={oc.slug} href={`/cases/${oc.slug}`} className="group block bg-white rounded-xl border border-border overflow-hidden transition-all hover:shadow-lg hover:border-blue-accent/20">
                <PhotoPlaceholder description={oc.photoDesc} height="h-44" className="rounded-none border-0" />
                <div className="p-5">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-brand">{oc.type}</span>
                  <h3 className="font-bold text-text-primary mt-1 mb-2 group-hover:text-blue-accent transition-colors">{oc.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">{oc.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <ReviewsSection showServiceIcons={false} />

      <CTAWithDocs
        title="Ready to Start Your Project?"
        subtitle="Get your custom quote, window blueprints, and energy savings estimate."
        btnText="Get a Quote"
      />
      <StickyCTA />
    </>
  );
}
