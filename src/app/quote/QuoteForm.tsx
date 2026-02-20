"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const configRaw = searchParams.get("config") || "";

  /* Parse config string: "[window] Profile System: GEALAN-LINEAR | Glazing: Triple" */
  let productType = "";
  const configItems: { step: string; value: string }[] = [];

  if (configRaw) {
    const bracketMatch = configRaw.match(/^\[([^\]]+)\]\s*/);
    if (bracketMatch) {
      productType = bracketMatch[1];
      const rest = configRaw.slice(bracketMatch[0].length);
      rest.split(" | ").forEach((part) => {
        const [step, ...valueParts] = part.split(": ");
        if (step && valueParts.length) {
          configItems.push({ step: step.trim(), value: valueParts.join(": ").trim() });
        }
      });
    }
  }

  const hasConfig = configItems.length > 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Form */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Get Your Free Quote</h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-8">
          Tell us about your project and we&rsquo;ll prepare a detailed, no-obligation quote. Custom sizes and configurations welcome.
        </p>

        {/* ── Configuration summary card ── */}
        {hasConfig && (
          <div className="mb-8 bg-brand/[0.03] border-2 border-brand/20 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h2 className="font-semibold text-text-primary text-sm">
                Your {productType.replace("-", " ")} Configuration
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {configItems.map((item) => (
                <span
                  key={item.step}
                  className="inline-flex items-center gap-1.5 text-[12px] bg-white px-3 py-1.5 rounded-lg border border-border"
                >
                  <span className="text-text-muted font-medium">{item.step}:</span>
                  <span className="text-text-primary font-semibold">{item.value}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-text-primary block mb-1.5">First Name</label>
              <input className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:border-blue-accent focus:outline-none" />
            </div>
            <div>
              <label className="text-sm font-medium text-text-primary block mb-1.5">Last Name</label>
              <input className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:border-blue-accent focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-text-primary block mb-1.5">Email</label>
            <input type="email" className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:border-blue-accent focus:outline-none" />
          </div>
          <div>
            <label className="text-sm font-medium text-text-primary block mb-1.5">Phone</label>
            <input type="tel" className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:border-blue-accent focus:outline-none" />
          </div>
          <div>
            <label className="text-sm font-medium text-text-primary block mb-1.5">Project Type</label>
            <select className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:border-blue-accent focus:outline-none bg-white">
              <option>Residential — Window Replacement</option>
              <option>Residential — New Construction</option>
              <option>Commercial Project</option>
              <option>Multi-family</option>
              <option>Dealer / Installer Partnership</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-text-primary block mb-1.5">Tell us about your project</label>
            <textarea
              rows={4}
              className="w-full border border-border rounded-md px-4 py-2.5 text-sm focus:border-blue-accent focus:outline-none"
              placeholder="Number of windows/doors, sizes, any special requirements..."
              defaultValue={hasConfig ? `Configuration: ${configItems.map((i) => `${i.step}: ${i.value}`).join(", ")}` : ""}
            />
          </div>
          <div className="bg-warm-gray rounded-lg border-2 border-dashed border-border p-6 text-center">
            <p className="text-sm text-text-secondary">Drop files here or click to upload</p>
            <p className="text-xs text-text-muted mt-1">Photos of your house or project (optional)</p>
          </div>
          <button className="w-full bg-blue-accent hover:bg-blue-hover text-white py-3.5 rounded-md font-semibold transition-colors">
            Request a Free Quote
          </button>
          <p className="text-xs text-text-muted text-center">By submitting, you agree to our Privacy Policy.</p>
        </div>
      </div>

      {/* Sidebar info */}
      <div className="space-y-6">
        <div className="bg-warm-gray rounded-xl p-6 border border-border">
          <h3 className="font-semibold text-text-primary text-lg mb-4">Contact Details</h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>109 Apremont Way, Westfield, MA 01085</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p>(413) 771-4457</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p>info@decawindows.com</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-light rounded-xl p-6 border border-blue-accent/10">
          <h3 className="font-semibold text-text-primary text-lg mb-4">What happens next?</h3>
          <div className="space-y-4">
            {[
              "We review your request within 24 hours",
              "Our team contacts you to discuss specifications",
              "You receive a detailed quote within 48 hours",
              "Custom order completed in 4 weeks or less",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-blue-accent text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <p className="text-sm text-text-secondary">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-warm-gray rounded-xl p-6 border border-border">
          <h3 className="font-semibold text-text-primary text-lg mb-4">Our Guarantees</h3>
          <div className="space-y-3">
            {[
              "15-year transferable warranty",
              "Factory-direct pricing",
              "Free consultation",
              "Custom sizes available",
            ].map((g) => (
              <div key={g} className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-blue-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-text-secondary">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Suspense boundary required for useSearchParams */
export default function QuoteForm() {
  return (
    <Suspense fallback={<div className="min-h-[400px]" />}>
      <QuoteFormInner />
    </Suspense>
  );
}
