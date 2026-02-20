import { Breadcrumb, Section } from "@/components/ui";
import StickyCTA from "@/components/StickyCTA";
import QuoteForm from "./QuoteForm";

export const metadata = {
  title: "Get a Free Quote | DECA Windows & Doors",
  description: "Get a free, no-obligation quote for premium European-style windows and doors. Custom sizes and configurations available.",
};

export default function QuotePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Get a Free Quote" }]} />
      <Section>
        <QuoteForm />
      </Section>

      {/* Google Maps — DECA factory location */}
      <section className="w-full h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.5!2d-72.765!3d42.125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6d93bfbf09b0d%3A0x0!2s109+Apremont+Way%2C+Westfield%2C+MA+01085!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DECA Windows & Doors - 109 Apremont Way, Westfield, MA"
          className="absolute inset-0"
        />
      </section>

      <StickyCTA />
    </>
  );
}
