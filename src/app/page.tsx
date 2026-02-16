import Link from "next/link";
import { Section, SectionTitle, FeatureCard, StatCard, CTABlock, ImagePlaceholder } from "@/components/ui";
import HomeContent from "./home-content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DECA Windows & Doors | European Energy-Efficient Windows Made in USA",
  description:
    "Premium European-style tilt & turn windows and doors manufactured in Massachusetts. Industry-leading U-values, soundproofing, and energy efficiency. Factory-direct pricing.",
  keywords: "european windows, tilt and turn windows, energy efficient windows, Massachusetts windows, DECA windows",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can DECA doors be used in extreme climates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, DECA doors are engineered to perform in extreme weather conditions, offering excellent thermal insulation and resistance to moisture, wind, and temperature fluctuations."
      }
    },
    {
      "@type": "Question",
      "name": "Are DECA doors suitable for commercial projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our doors are designed to meet both residential and commercial requirements, combining durability with sleek aesthetics for any project."
      }
    },
    {
      "@type": "Question",
      "name": "How are DECA doors delivered and installed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We ensure safe and timely delivery with professional packaging, and we offer guidance or connect you with certified installers for seamless installation."
      }
    },
    {
      "@type": "Question",
      "name": "Do DECA doors require special maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all. Our doors are made from low-maintenance materials like uPVC and aluminum, requiring only occasional cleaning to maintain their performance and appearance."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ===== HERO (matches design: dark bg with photo, location tag, headline) ===== */}
      <section className="relative bg-navy-950 overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-800/70" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-white/50 mb-4">
              Massachusetts, USA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              DECA &ndash; European Energy-efficient<br className="hidden md:block" /> windows and doors built in USA
            </h1>
            <p className="text-lg text-white/50 mb-8">
              Manufacturer of uPVC & Aluminum profile systems
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded-md font-semibold transition-colors">
                Request a Quote
              </Link>
              <Link href="/windows" className="border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-3.5 rounded-md font-semibold transition-colors">
                Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE TABS (matches design: horizontal tabs — Silence, Warmth, Convenience, Lifespan, Safety) ===== */}
      <HomeContent />

      {/* ===== OUR PRODUCTS (matches design: DECA Windows / DECA Doors with uPVC | Aluminum tabs) ===== */}
      <Section gray>
        <SectionTitle title="Our Products" subtitle="Download our catalog and study the specifications of our solutions" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Windows card */}
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <ImagePlaceholder label="DECA Windows" height="h-52" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-primary mb-3">DECA Windows</h3>
              <div className="flex gap-2 mb-4">
                <span className="text-xs font-medium px-3 py-1.5 bg-blue-light text-blue-accent rounded-md">uPVC</span>
                <span className="text-xs font-medium px-3 py-1.5 bg-warm-gray text-text-secondary rounded-md">Aluminum</span>
              </div>
              <Link href="/windows" className="inline-block w-full text-center bg-navy-950 hover:bg-navy-800 text-white py-3 rounded-md font-medium transition-colors">
                View Catalog
              </Link>
            </div>
          </div>
          {/* Doors card */}
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <ImagePlaceholder label="DECA Doors" height="h-52" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-primary mb-3">DECA Doors</h3>
              <div className="flex gap-2 mb-4">
                <span className="text-xs font-medium px-3 py-1.5 bg-blue-light text-blue-accent rounded-md">uPVC</span>
                <span className="text-xs font-medium px-3 py-1.5 bg-warm-gray text-text-secondary rounded-md">Aluminum</span>
              </div>
              <Link href="/doors" className="inline-block w-full text-center bg-navy-950 hover:bg-navy-800 text-white py-3 rounded-md font-medium transition-colors">
                View Catalog
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== GALLERY/CASES ===== */}
      <Section>
        <SectionTitle title="Gallery / Cases" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <ImagePlaceholder key={i} label={`Project ${i}`} height="h-64" />
          ))}
        </div>
      </Section>

      {/* ===== EXCEPTIONAL SERVICE IN MASSACHUSETTS (matches design) ===== */}
      <Section gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="Exceptional Service in Massachusetts"
              subtitle="We deliver top-tier service with the convenience and reliability of being locally based in the USA, ensuring a seamless and stress-free experience."
              align="left"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Faster Delivery",
                desc: "Based in Massachusetts, DECA delivers faster than overseas suppliers, keeping your projects on schedule.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Localized Support",
                desc: "Our U.S. headquarters offers quick access to consultations, technical help, and tailored service.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Made in the USA Quality",
                desc: "By manufacturing locally, we guarantee strict quality control and reliable, high-performance products.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Ease of Collaboration",
                desc: "Quick communication and flexible solutions make working with DECA seamless.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== GOT QUESTIONS CTA (dark navy block from design) ===== */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Got Questions?<br />We&rsquo;re Here to Help!
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Our team is ready to answer any questions and provide a free consultation about selecting, installing, or maintaining DECA windows and doors.
            </p>
            <Link href="/quote" className="inline-block bg-blue-accent hover:bg-blue-hover text-white px-8 py-3.5 rounded-md font-semibold transition-colors">
              Get a Free Consultation
            </Link>
            <p className="mt-4 text-white/40 text-sm">
              <a href="tel:+14137714457" className="hover:text-white/60 transition-colors">(413) 771-4457</a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== WARRANTY COMMITMENTS (from design) ===== */}
      <Section>
        <SectionTitle title="Warranty Commitments & Free Technical Support" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Up to 15-Year Warranty", desc: "We provide a long-term warranty on all components of our windows and doors, including frames, glass units, and hardware." },
            { title: "Transparent Terms", desc: "All warranty obligations are clearly outlined in the contract with no hidden conditions." },
            { title: "Free Repairs and Replacements", desc: "We quickly address any manufacturing defects at no additional cost to you." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-light flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== CUSTOMER TESTIMONIALS (carousel style from design) ===== */}
      <Section gray>
        <SectionTitle title="Our Customers About DECA" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Miranda Franklin", role: "Homeowner", text: "The noise reduction is superb. Nights are significantly quieter and we've seen a real drop in energy costs." },
            { name: "Michael Rodriguez", role: "General Contractor", text: "DECA's quality and customer service stands out. Their technical support is always available during installation." },
            { name: "Lisa Chen", role: "Homeowner, Boston", text: "The sound reduction is incredible. We live near a busy street, but it's remarkably quiet inside now." },
          ].map((r) => (
            <div key={r.name} className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">{r.name}</p>
                  <p className="text-xs text-text-muted">{r.role}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3 text-sm">{"★★★★★"}</div>
              <p className="text-sm text-text-secondary leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== SOLUTIONS FOR PROFESSIONALS (from design) ===== */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle title="Solutions Built for Professionals" align="left" />
            <Link href="/professionals" className="inline-flex items-center gap-2 text-blue-accent font-medium hover:text-blue-hover transition-colors">
              More for professionals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "For Builder/Contractor", desc: "We provide a long-term warranty on all components of our windows and doors, including frames, glass units, and hardware." },
              { title: "For Architects", desc: "All warranty obligations are clearly outlined in the contract with no hidden conditions." },
              { title: "For Dealers", desc: "We quickly address any manufacturing defects at no additional cost to you." },
            ].map((item) => (
              <div key={item.title} className="bg-warm-gray rounded-lg p-5 flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== ABOUT DECA ===== */}
      <Section gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">About DECA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">Mission</h2>
            <p className="text-text-secondary leading-relaxed text-lg mb-6">
              Our mission is to make European-style windows and doors available to everyone by manufacturing them in the USA. Our products prioritize energy efficiency, sound insulation, thermal comfort, security, sleek aesthetics, durability, environmental considerations, and easy maintenance.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-blue-accent font-medium hover:text-blue-hover transition-colors">
              More about us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <ImagePlaceholder label="Factory / Team Photo" height="h-80" />
        </div>
      </Section>

      {/* ===== EXPERT GUIDES (from design) ===== */}
      <Section>
        <SectionTitle title="Expert Guides and Instructions" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Window Safety", desc: "Windows must meet international safety standards. With DECA, your windows will be of the highest quality." },
            { title: "Warm Edge Spacer", desc: "Consists of a combination of aluminum and plastic with high insulating properties." },
            { title: "Warm Threshold", desc: "The DECA warm threshold is equipped with a thermal break, minimizing the risk of condensation." },
          ].map((g) => (
            <Link key={g.title} href="/blog" className="group">
              <div className="bg-warm-gray rounded-xl overflow-hidden">
                <ImagePlaceholder label="Guide Image" height="h-44" />
                <div className="p-5">
                  <h3 className="font-semibold text-text-primary mb-2 group-hover:text-blue-accent transition-colors">{g.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{g.desc}</p>
                  <span className="inline-block mt-3 text-sm text-blue-accent font-medium">Read more &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ===== FAQ (from design: "Your Questions Answered") ===== */}
      <Section gray>
        <SectionTitle title="Your Questions &mdash; Answered" />
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            ["Can DECA doors be used in extreme climates?", "Yes, DECA doors are engineered to perform in extreme weather conditions, offering excellent thermal insulation and resistance to moisture, wind, and temperature fluctuations."],
            ["Are DECA doors suitable for commercial projects?", "Absolutely. Our doors are designed to meet both residential and commercial requirements, combining durability with sleek aesthetics for any project."],
            ["How are DECA doors delivered and installed?", "We ensure safe and timely delivery with professional packaging, and we offer guidance or connect you with certified installers for seamless installation."],
            ["Do DECA doors require special maintenance?", "Not at all. Our doors are made from low-maintenance materials like uPVC and aluminum, requiring only occasional cleaning to maintain their performance and appearance."],
          ].map(([q, a]) => (
            <details key={q} className="bg-white rounded-lg border border-border group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-text-primary text-sm flex justify-between items-center">
                {q}
                <svg className="w-4 h-4 text-blue-accent shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-text-secondary leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <CTABlock
        title="Ready to Transform Your Space?"
        subtitle="Get a free quote with factory-direct pricing. Custom sizes available. 15-year warranty included."
        btnText="Get Your Free Quote"
      />
    </>
  );
}
