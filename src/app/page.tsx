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
      "name": "What makes DECA windows different from standard American windows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DECA windows use European tilt & turn technology with multi-chamber uPVC or aluminum frames, triple glazing, and multi-point locking. This delivers significantly better energy efficiency (U-value 0.10 vs 0.30+ for standard windows), noise reduction (45-50 dB vs 25-30 dB), and security."
      }
    },
    {
      "@type": "Question",
      "name": "Do you manufacture in the United States?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All DECA windows and doors are manufactured in our facility in Westfield, Massachusetts. We use European engineering principles and hardware (Roto, Siegenia) with American-made profiles."
      }
    },
    {
      "@type": "Question",
      "name": "What is a tilt & turn window?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A tilt & turn window has two opening modes: tilt inward from the top for secure ventilation, and turn fully inward like a door for maximum airflow and easy cleaning. This versatile design is standard across Europe and offers superior performance over traditional American window styles."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all of Massachusetts, Connecticut, Rhode Island, New Hampshire, and the greater New York area. For large commercial projects, we can deliver nationwide."
      }
    },
    {
      "@type": "Question",
      "name": "How long does delivery take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard residential orders are typically delivered in 4-6 weeks from measurement confirmation. Rush orders and commercial projects can be expedited — contact us for specifics."
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
      <HomeContent />
    </>
  );
}
