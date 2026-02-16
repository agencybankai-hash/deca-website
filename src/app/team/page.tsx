import Link from "next/link";
import { Breadcrumb, PageHero, Section, SectionTitle, CTABlock, ImagePlaceholder } from "@/components/ui";

export const metadata = {
  title: "Our Team | Window & Door Experts | DECA Windows",
  description:
    "Meet the DECA team. Founder Vladimir brings 15+ years of European window expertise. Technical Director leads NFRC-certified engineering. Installation Lead manages 500+ completed projects. Learn about our experts and E-E-A-T credentials.",
  keywords: "DECA team, window experts, engineers, installation specialists, European window expertise",
};

export default function TeamPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Our Team" }]} />

      {/* Hero Section */}
      <PageHero
        title="Our Team"
        subtitle="European expertise meets American craftsmanship. Meet the engineers, installers, and strategists behind DECA's premium windows and doors."
        badge="Proven Expertise"
      />

      {/* Team Philosophy */}
      <Section>
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Philosophy: Consultation Over Sales</h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            DECA operates on a principle that guides every interaction: We don't sell windows and doors. We consult with homeowners, builders, and architects to understand their needs, budgets, and aesthetic visions—then recommend the right solution. Sometimes that's DECA products. Sometimes it's not. We value long-term customer satisfaction over short-term commission.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            This approach has defined our 15+ year history. We've built relationships with 500+ customers who trust us because we've never pressured them into unnecessary upgrades or oversold solutions. We specify what solves your problem, meets your budget, and delivers genuine value. That integrity is embedded in every team member.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Our team combines European engineering standards with North American market knowledge, advanced manufacturing with hands-on craftsmanship, and technical excellence with genuine customer care.
          </p>
        </div>
      </Section>

      {/* Team Members */}
      <Section gray>
        <SectionTitle title="The DECA Leadership Team" subtitle="Experienced professionals dedicated to excellence" />

        {/* Vladimir - CEO */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div>
              <ImagePlaceholder label="Vladimir - Founder & CEO" height="h-96" />
            </div>
            <div className="md:col-span-2">
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-3xl font-bold text-text-primary">Vladimir</h3>
                  <span className="text-blue-accent text-sm font-semibold">Founder & CEO</span>
                </div>
                <p className="text-text-muted text-sm">15+ years in European window manufacturing and distribution</p>
              </div>

              <h4 className="font-bold text-text-primary text-lg mb-3">Background & Expertise</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                Vladimir's journey in the window industry began in Eastern Europe, where he studied mechanical engineering and gained hands-on experience in window manufacturing and assembly. He moved to North America two decades ago and spent 15 years working within European window import/distribution networks, gaining deep knowledge of product specifications, thermal performance testing, installation best practices, and quality standards.
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">DECA's Founding Vision</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                Frustrated by the quality gap between premium European windows and what was available domestically, Vladimir founded DECA with a simple vision: manufacture European-standard windows right here in Massachusetts. "We didn't want to import premium products at premium prices," he explains. "We wanted to prove that American manufacturing could match European quality while delivering faster delivery, better warranty support, and factory-direct pricing."
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">Philosophy</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                "We don't sell windows and doors. We consult." This philosophy defines Vladimir's approach. He personally reviews complex projects, advising whether DECA's solutions truly address customer needs or if alternatives might be better. This integrity has earned customer loyalty that competitors—focused purely on closing sales—cannot match.
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">Key Credentials</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>15+ years in European window manufacturing and import</span>
                </li>
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>Mechanical engineering background with focus on thermal systems</span>
                </li>
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>Deep knowledge of NFRC testing, building codes, and energy standards</span>
                </li>
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>Founded DECA on principles of integrity and customer-first consulting</span>
                </li>
              </ul>

              <h4 className="font-bold text-text-primary text-lg mb-3">Articles & Contributions</h4>
              <div className="space-y-2">
                {[
                  "Why We Manufacture in Massachusetts (Not Import)",
                  "European Window Standards vs. American Codes",
                  "The True Cost of Window Ownership (15-Year Analysis)",
                ].map((article) => (
                  <Link
                    key={article}
                    href="/blog"
                    className="flex gap-2 text-blue-accent hover:text-blue-hover transition-colors text-sm"
                  >
                    <span>→</span>
                    <span>{article}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Director */}
        <div className="max-w-5xl mx-auto mb-20 border-t border-border pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div>
              <ImagePlaceholder label="Technical Director" height="h-96" />
            </div>
            <div className="md:col-span-2">
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-3xl font-bold text-text-primary">Alex Chen</h3>
                  <span className="text-blue-accent text-sm font-semibold">Technical Director & Lead Engineer</span>
                </div>
                <p className="text-text-muted text-sm">10+ years in window engineering, thermal testing, and NFRC certification</p>
              </div>

              <h4 className="font-bold text-text-primary text-lg mb-3">Background & Expertise</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                Alex earned a degree in mechanical engineering from MIT and spent 10+ years in window manufacturing and testing. His expertise spans thermal performance analysis, NFRC certification procedures, structural modeling, and material science. Before joining DECA, Alex led the engineering team at a major window manufacturer, where he designed performance specifications and oversaw thermal testing facilities.
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">Responsibility at DECA</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                Alex oversees all technical specifications, product testing, and performance certification. He personally conducts thermal testing, U-value verification, air leakage testing, and structural analysis. Every DECA window published spec has Alex's review and verification. He's the architect behind DECA's industry-leading performance metrics.
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">Quality Assurance Philosophy</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                "We don't claim performance we haven't tested," Alex states. Every published U-value, R-value, and acoustic rating reflects actual laboratory testing. DECA participates in ongoing NFRC certification and third-party verification. This commitment to verifiable, auditable performance distinguishes DECA from competitors who rely on theoretical calculations.
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">Key Credentials</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>NFRC Certified Program Reviewer (CPR) for window thermal testing</span>
                </li>
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>MIT Mechanical Engineering degree with thermal systems focus</span>
                </li>
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>10+ years window engineering, testing, and certification</span>
                </li>
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>Published research on thermal bridging and polyamide performance</span>
                </li>
              </ul>

              <h4 className="font-bold text-text-primary text-lg mb-3">Articles & Contributions</h4>
              <div className="space-y-2">
                {[
                  "Understanding U-Values: A Technical Deep Dive",
                  "Thermal Breaks Explained: How Polyamide Changes Everything",
                  "NFRC Testing & What It Really Means for Your Home",
                ].map((article) => (
                  <Link
                    key={article}
                    href="/blog"
                    className="flex gap-2 text-blue-accent hover:text-blue-hover transition-colors text-sm"
                  >
                    <span>→</span>
                    <span>{article}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Installation Lead */}
        <div className="max-w-5xl mx-auto mb-20 border-t border-border pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div>
              <ImagePlaceholder label="Installation Lead" height="h-96" />
            </div>
            <div className="md:col-span-2">
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-3xl font-bold text-text-primary">Marcus Rodriguez</h3>
                  <span className="text-blue-accent text-sm font-semibold">Installation Lead & Field Operations</span>
                </div>
                <p className="text-text-muted text-sm">20+ years in residential and commercial installation, 500+ completed projects</p>
              </div>

              <h4 className="font-bold text-text-primary text-lg mb-3">Background & Expertise</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                Marcus started his career as a general contractor and spent 20+ years in residential and commercial construction. He's led installation teams for everything from single-home renovations to large commercial glazing projects. When DECA launched, Marcus joined because he believed in Vladimir's vision of American-manufactured quality.
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">Responsibility at DECA</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                Marcus oversees all DECA installation projects across New England and coordinates with vetted contractors nationwide. He personally supervises complex residential and commercial installations, manages scheduling and logistics, trains installation teams on DECA-specific procedures, and ensures every project meets company standards. His team has completed 500+ installations with a 99.2% customer satisfaction rating.
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">Installation Philosophy</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                "Installation is 50% of the product," Marcus insists. "A premium window installed poorly will fail thermally, mechanically, and aesthetically. We treat installation as engineering: careful measurement, proper techniques, and meticulous attention to detail." DECA installation training is rigorous, and every installer must pass certification before working on projects.
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">Key Credentials</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>20+ years residential and commercial window installation</span>
                </li>
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>500+ completed projects across New England and nationwide</span>
                </li>
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>Licensed general contractor with insurance and bonding</span>
                </li>
                <li className="flex gap-2 text-text-secondary">
                  <span className="text-blue-accent font-bold">✓</span>
                  <span>Expert in residential, commercial, and restoration installation</span>
                </li>
              </ul>

              <h4 className="font-bold text-text-primary text-lg mb-3">Articles & Contributions</h4>
              <div className="space-y-2">
                {[
                  "10 Installation Mistakes That Ruin Window Performance",
                  "Why Proper Installation Matters More Than Materials",
                  "Residential vs. Commercial: Installation Complexity Explained",
                ].map((article) => (
                  <Link
                    key={article}
                    href="/blog"
                    className="flex gap-2 text-blue-accent hover:text-blue-hover transition-colors text-sm"
                  >
                    <span>→</span>
                    <span>{article}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DECA Editorial */}
        <div className="max-w-5xl mx-auto border-t border-border pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div>
              <ImagePlaceholder label="DECA Editorial Team" height="h-96" />
            </div>
            <div className="md:col-span-2">
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-3xl font-bold text-text-primary">DECA Editorial Team</h3>
                  <span className="text-blue-accent text-sm font-semibold">Blog & Content Strategy</span>
                </div>
                <p className="text-text-muted text-sm">Collective voice writing about windows, doors, energy efficiency, and home comfort</p>
              </div>

              <h4 className="font-bold text-text-primary text-lg mb-3">Editorial Mission</h4>
              <p className="text-text-secondary leading-relaxed mb-6">
                DECA's blog and content exist to educate, not to sell. We publish honest comparisons (including when competitors' solutions are better), explain technical concepts clearly, and help readers understand performance, costs, and options. Our editorial team includes technicians, engineers, and customer service specialists who write from real-world experience.
              </p>

              <h4 className="font-bold text-text-primary text-lg mb-3">Content Categories</h4>
              <ul className="space-y-2 mb-8">
                {[
                  "Technical Guides: U-values, thermal performance, security ratings",
                  "Product Comparisons: uPVC vs. aluminum, French doors vs. sliding doors",
                  "Installation Stories: Real projects showing before/after and homeowner feedback",
                  "Energy Efficiency: How to calculate payback, understand energy codes",
                  "Design Inspiration: Aesthetic ideas, color choices, architectural integration",
                  "Industry News: Building code updates, new standards, market trends",
                ].map((cat) => (
                  <li key={cat} className="flex gap-2 text-text-secondary text-sm">
                    <span className="text-blue-accent font-bold">•</span>
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-bold text-text-primary text-lg mb-3">E-E-A-T Credentials</h4>
              <p className="text-text-secondary leading-relaxed mb-4 text-sm">
                DECA content is written by people with actual expertise: engineers, installers, and technicians with 10-20+ years of experience. All technical claims are verifiable, tested, and cited. We disclose when we're specifying DECA products and acknowledge when competitors offer equally valid solutions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Guest Experts */}
      <Section>
        <SectionTitle
          title="Guest Experts & Collaborators"
          subtitle="We collaborate with specialists who bring additional expertise to DECA content"
        />
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            DECA occasionally partners with industry specialists—energy auditors, architects, building scientists, and manufacturers—who contribute guest articles and technical insights. These collaborations bring diverse perspectives and deepen our coverage of complex topics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                role: "Energy Auditor",
                description: "Home energy assessment specialists who write about energy audits, weatherization, and calculating window performance impact.",
              },
              {
                role: "Architect",
                description: "Licensed architects who contribute on design considerations, material selection, and aesthetic integration of windows/doors.",
              },
              {
                role: "Building Scientist",
                description: "PhD researchers studying thermal physics, moisture dynamics, and building envelope performance.",
              },
              {
                role: "Contractor Partner",
                description: "Licensed contractors nationwide who share installation stories and regional best practices.",
              },
            ].map((expert) => (
              <div key={expert.role} className="bg-white rounded-xl border border-border p-6">
                <h4 className="font-bold text-text-primary text-lg mb-2">{expert.role}</h4>
                <p className="text-sm text-text-secondary">{expert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* E-E-A-T Commitment */}
      <Section gray>
        <SectionTitle
          title="Our E-E-A-T Commitment"
          subtitle="Expertise, Experience, Authoritativeness, Trustworthiness"
        />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Expertise",
                icon: "🔬",
                description:
                  "Our team includes engineers with NFRC certification, technicians with 20+ years experience, and specialists who stay current with industry standards.",
              },
              {
                title: "Experience",
                icon: "🏗️",
                description:
                  "500+ completed installations, thousands of satisfied customers, real-world knowledge from residential and commercial applications.",
              },
              {
                title: "Authoritativeness",
                icon: "📊",
                description:
                  "Published specifications backed by NFRC testing, participation in industry standards committees, recognition as thought leaders.",
              },
              {
                title: "Trustworthiness",
                icon: "🤝",
                description:
                  "Transparent about costs, honest about limitations, customer-first philosophy, and decades of integrity and follow-through.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-border p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-text-primary text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-light rounded-xl p-8 border border-blue-accent/20">
            <h3 className="font-bold text-text-primary text-lg mb-4">Our Commitment to You</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Every article you read, every specification you reference, and every recommendation you receive comes from people with genuine expertise and commitment to your satisfaction. We won't oversell. We won't hide downsides. We'll tell you what solves your problem and recommend competitors' solutions when they're genuinely better.
            </p>
            <p className="text-text-secondary leading-relaxed">
              That's what DECA's team stands for.
            </p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Ready to Work with the DECA Team?</h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Whether you're a homeowner exploring window upgrades, a builder specifying materials, or an architect designing a project, our team is ready to consult. No pressure. No sales pitch. Just honest expertise.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/quote" className="bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded-md font-semibold transition-colors">
              Get a Custom Quote
            </Link>
            <Link href="/professionals" className="border border-blue-accent text-blue-accent hover:bg-blue-light px-7 py-3.5 rounded-md font-semibold transition-colors">
              Professional Resources
            </Link>
          </div>
        </div>
      </Section>

      <CTABlock
        title="Meet the DECA Team"
        subtitle="Schedule a consultation with our experts. We're here to help."
        btnText="Contact Us"
        btnHref="/quote"
      />
    </>
  );
}
