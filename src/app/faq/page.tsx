import { Breadcrumb, Section, SectionTitle } from "@/components/ui";
import type { Metadata } from "next";
import Link from "next/link";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions | DECA Windows & Doors",
  description: "Answers to common questions about DECA European-style windows and doors — pricing, installation, warranty, energy efficiency, and more.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    category: "Products",
    items: [
      {
        q: "What types of windows does DECA manufacture?",
        a: "DECA manufactures tilt-turn windows, casement windows, fixed windows, sliding doors, and entry doors. All products use European-engineered profile systems from GEALAN (uPVC) and ALUMIL (aluminum) with multi-chamber thermal insulation.",
      },
      {
        q: "What is a tilt-turn window?",
        a: "A tilt-turn window is a European-style window that operates in two modes: it tilts inward from the top for ventilation, and turns (swings) fully inward for easy cleaning and maximum airflow. It's the most popular window type in Europe and offers superior air-tightness and security compared to traditional American windows.",
      },
      {
        q: "What profile systems do you use?",
        a: "We use GEALAN-LINEAR and GEALAN-KUBUS uPVC profile systems (German-engineered, up to 7 chambers) and ALUMIL aluminum profiles. All profiles exceed U.S. energy codes and are available in 200+ RAL colors.",
      },
      {
        q: "Do you offer triple-pane glazing?",
        a: "Yes. We offer double and triple-pane insulated glass units with argon or krypton gas fill, low-E coatings, and warm-edge spacers. Triple glazing provides U-values as low as 0.15 BTU/(h·ft²·°F) for exceptional energy performance.",
      },
      {
        q: "Can I get custom sizes and shapes?",
        a: "Absolutely. Every DECA product is custom-manufactured to your exact specifications at our facility in Westfield, MA. We produce arched, round, trapezoidal, and other non-standard shapes.",
      },
    ],
  },
  {
    category: "Pricing & Ordering",
    items: [
      {
        q: "How much do DECA windows cost?",
        a: "Pricing depends on size, profile system, glazing, hardware, and finish. We provide free, no-obligation quotes. Contact us or use our online quote form to receive a detailed estimate for your project.",
      },
      {
        q: "Do you offer volume pricing for contractors?",
        a: "Yes. We offer quantity-based discounts for contractors, builders, and dealers. Larger orders receive better pricing. Visit our For Professionals page or contact our B2B team for details.",
      },
      {
        q: "What is the production time?",
        a: "Standard production time is approximately 4 weeks from order confirmation. Rush orders may be available — please contact us to discuss your timeline.",
      },
    ],
  },
  {
    category: "Installation & Delivery",
    items: [
      {
        q: "Do you provide installation services?",
        a: "Yes. DECA offers professional installation by our certified team throughout the Northeast. We also provide detailed installation guidelines for contractors and builders who prefer to install independently.",
      },
      {
        q: "What areas do you serve?",
        a: "We manufacture in Westfield, MA and deliver throughout the Northeast United States — Massachusetts, Connecticut, New York, New Jersey, Pennsylvania, Rhode Island, New Hampshire, Vermont, and Maine. Contact us for delivery to other regions.",
      },
      {
        q: "Can I install DECA windows myself?",
        a: "While our windows can be installed by experienced professionals, we recommend installation by DECA-certified installers to ensure optimal performance and full warranty coverage.",
      },
    ],
  },
  {
    category: "Energy Efficiency & Certifications",
    items: [
      {
        q: "Are DECA windows ENERGY STAR certified?",
        a: "Yes. Our windows meet or exceed ENERGY STAR requirements for all U.S. climate zones. Many of our configurations exceed code requirements by up to 300%.",
      },
      {
        q: "What certifications do your products have?",
        a: "Our products are NFRC certified for independently verified performance ratings, ENERGY STAR qualified, and eligible for LEED project credits. We provide full certification documentation with every order.",
      },
      {
        q: "Will new windows lower my energy bills?",
        a: "High-performance windows significantly reduce heat loss in winter and heat gain in summer. Homeowners typically see meaningful reductions in heating and cooling costs, especially when replacing older single-pane or aluminum-frame windows.",
      },
    ],
  },
  {
    category: "Warranty & Support",
    items: [
      {
        q: "What warranty do you offer?",
        a: "DECA products come with a 15-year transferable warranty covering manufacturing defects in materials and workmanship. The warranty is transferable to subsequent homeowners, adding value to your property.",
      },
      {
        q: "How do I file a warranty claim?",
        a: "Contact us by phone at (413) 771-4457 or email info@decawindows.com with your order details and description of the issue. Our team will respond within 24 hours.",
      },
      {
        q: "Do you offer after-sale support?",
        a: "Yes. Our team provides ongoing support including adjustment, maintenance guidance, and replacement parts. We stand behind every product we manufacture.",
      },
    ],
  },
];

/* Schema.org FAQPage structured data */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb items={[{ label: "FAQ" }]} />

      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Everything you need to know about DECA European-style windows and doors. Can&apos;t find your answer?{" "}
            <Link href="/quote" className="text-blue-accent font-semibold hover:underline">Contact us</Link> — we&apos;re happy to help.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="text-xl font-bold text-text-primary mb-6 pb-2 border-b border-border">{category.category}</h2>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-semibold text-text-primary mb-2">{item.q}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-brand text-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-white/60 text-lg mb-8">
            Our team is ready to help. Get a free consultation and quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-8 py-3.5 rounded-md font-semibold transition-colors">
              Get a Free Quote
            </Link>
            <a href="tel:+14137714457" className="border border-white/20 hover:bg-white/10 text-white px-8 py-3.5 rounded-md font-semibold transition-colors">
              Call (413) 771-4457
            </a>
          </div>
        </div>
      </section>

      <StickyCTA />
    </>
  );
}
