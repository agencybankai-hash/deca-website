import { Breadcrumb, Section } from "@/components/ui";
import type { Metadata } from "next";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Privacy Policy | DECA Windows & Doors",
  description: "DECA Windows & Doors privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">Privacy Policy</h1>
          <p className="text-sm text-text-muted mb-8">Last updated: February 20, 2026</p>

          <p className="text-text-secondary leading-relaxed">
            DECA Windows &amp; Doors (&quot;DECA,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>decawindows.com</strong> or contact us for products and services.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-text-secondary leading-relaxed mb-3">We may collect personal information that you voluntarily provide when you:</p>
          <ul className="text-text-secondary space-y-1 list-disc pl-5 mb-4">
            <li>Submit a quote request or contact form</li>
            <li>Call, email, or otherwise communicate with us</li>
            <li>Visit our showroom or factory</li>
          </ul>
          <p className="text-text-secondary leading-relaxed mb-3">This information may include:</p>
          <ul className="text-text-secondary space-y-1 list-disc pl-5">
            <li>Name, email address, phone number</li>
            <li>Company name and job title (for B2B inquiries)</li>
            <li>Project details, property address</li>
            <li>Product preferences and configuration choices</li>
          </ul>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">2. Automatically Collected Information</h2>
          <p className="text-text-secondary leading-relaxed">
            When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and browsing behavior. This data is collected through cookies and similar technologies to improve website performance and user experience.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">3. How We Use Your Information</h2>
          <ul className="text-text-secondary space-y-1 list-disc pl-5">
            <li>To respond to your inquiries and provide quotes</li>
            <li>To process and fulfill orders</li>
            <li>To communicate about your project or installation</li>
            <li>To improve our website and services</li>
            <li>To send relevant product information (with your consent)</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">4. Information Sharing</h2>
          <p className="text-text-secondary leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist in operating our website, conducting our business, or servicing you, provided they agree to keep this information confidential. We may also disclose information when required by law.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">5. Data Security</h2>
          <p className="text-text-secondary leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">6. Cookies</h2>
          <p className="text-text-secondary leading-relaxed">
            Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">7. Third-Party Links</h2>
          <p className="text-text-secondary leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">8. Your Rights</h2>
          <p className="text-text-secondary leading-relaxed">
            You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at{" "}
            <a href="mailto:info@decawindows.com" className="text-blue-accent hover:underline">info@decawindows.com</a>.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">9. Children&apos;s Privacy</h2>
          <p className="text-text-secondary leading-relaxed">
            Our website is not directed at children under 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">10. Changes to This Policy</h2>
          <p className="text-text-secondary leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">11. Contact Us</h2>
          <p className="text-text-secondary leading-relaxed mb-2">If you have questions about this Privacy Policy, please contact us:</p>
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
