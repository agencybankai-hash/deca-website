import { Breadcrumb, Section } from "@/components/ui";
import type { Metadata } from "next";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Terms of Service | DECA Windows & Doors",
  description: "Terms and conditions for using DECA Windows & Doors website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Terms of Service" }]} />

      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">Terms of Service</h1>
          <p className="text-sm text-text-muted mb-8">Last updated: February 20, 2026</p>

          <p className="text-text-secondary leading-relaxed">
            Welcome to DECA Windows &amp; Doors (&quot;DECA,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service govern your use of our website <strong>decawindows.com</strong> and the purchase of our products and services. By accessing our website or engaging our services, you agree to these terms.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">1. Products and Services</h2>
          <p className="text-text-secondary leading-relaxed">
            DECA manufactures and installs premium European-style windows and doors at our facility in Westfield, Massachusetts. All products are custom-manufactured to order. Product specifications, colors, and features shown on our website are for reference purposes and may vary slightly from the final product.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">2. Quotes and Pricing</h2>
          <p className="text-text-secondary leading-relaxed">
            All quotes provided through our website or by our team are estimates and are not binding until a formal written agreement is signed. Prices are subject to change based on final specifications, measurements, and material availability. Quotes are valid for 30 days unless otherwise stated.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">3. Orders and Production</h2>
          <p className="text-text-secondary leading-relaxed">
            Custom orders require a deposit as specified in the purchase agreement. Production begins after receipt of deposit and confirmation of final specifications. Standard production time is approximately 4 weeks. Custom orders cannot be canceled once production has begun.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">4. Warranty</h2>
          <p className="text-text-secondary leading-relaxed">
            DECA products come with a 15-year transferable warranty covering manufacturing defects in materials and workmanship. The warranty does not cover damage from improper installation (unless installed by DECA or an authorized installer), misuse, neglect, acts of nature, or normal wear and tear. Full warranty terms are provided with each purchase.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">5. Installation</h2>
          <p className="text-text-secondary leading-relaxed">
            Installation services are available throughout our service area. Installation by DECA-certified installers is recommended to maintain full warranty coverage. DECA is not responsible for issues arising from third-party installation that does not follow our published installation guidelines.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">6. Delivery</h2>
          <p className="text-text-secondary leading-relaxed">
            We deliver throughout the Northeast United States. Delivery times and costs are quoted based on project location and scope. Customer is responsible for providing adequate access to the delivery site. Risk of loss passes to the customer upon delivery.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">7. Website Use</h2>
          <p className="text-text-secondary leading-relaxed">
            You may use our website for lawful purposes only. You agree not to use the site to transmit harmful, offensive, or misleading content, or to interfere with the website&apos;s functionality. All content on our website, including text, images, and design, is the property of DECA Windows &amp; Doors and is protected by copyright law.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">8. Limitation of Liability</h2>
          <p className="text-text-secondary leading-relaxed">
            To the fullest extent permitted by law, DECA shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products. Our total liability shall not exceed the amount paid for the specific product or service giving rise to the claim.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">9. Governing Law</h2>
          <p className="text-text-secondary leading-relaxed">
            These terms are governed by the laws of the Commonwealth of Massachusetts. Any disputes shall be resolved in the courts of Hampden County, Massachusetts.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">10. Changes to Terms</h2>
          <p className="text-text-secondary leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">11. Contact Us</h2>
          <p className="text-text-secondary leading-relaxed mb-2">For questions about these Terms of Service:</p>
          <div className="text-text-secondary leading-relaxed">
            <p><strong>DECA Windows &amp; Doors</strong></p>
            <p>109 Apremont Way, Westfield, MA 01085</p>
            <p>Phone: <a href="tel:+14137714457" className="text-blue-accent hover:underline">(413) 771-4457</a></p>
            <p>Email: <a href="mailto:info@decawindows.com" className="text-blue-accent hover:underline">info@decawindows.com</a></p>
          </div>
        </div>
      </Section>

      <StickyCTA />
    </>
  );
}
