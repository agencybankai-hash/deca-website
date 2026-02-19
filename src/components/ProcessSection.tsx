"use client";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Design",
      description: "Share your project details and our team creates custom window specifications tailored to your home",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v8m0 0l-3-3m3 3l3-3M6 14h12m-2 4H8a2 2 0 01-2-2v-8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Manufacture",
      description: "Every window is built to order at our Westfield, MA factory using European engineering standards",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 3H5a2 2 0 00-2 2v4m0 0h18V5a2 2 0 00-2-2h-4m0 0v6m0-6H9m0 6v6a2 2 0 002 2h4a2 2 0 002-2v-6m0 0H7m0 0v6a2 2 0 002 2h4a2 2 0 002-2v-6" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Install",
      description: "Professional installation by our certified crew, or detailed guides for your contractor",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6v6m0 0v6m0-6h6m0 0h6m-6-6H6m0 0H0M6 12h6m0 0h6M6 18h6m0 0h6" />
          <path d="M3 9l18-6m0 0l-6 18m0 0L3 15m0 0l6-18m12 12l-6-18" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Service",
      description: "15-year warranty with free lifetime technical support. We're always a call away",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-brand/70 bg-white/60 px-3 py-1.5 rounded-full border border-brand/20">
            Our Process
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            From Concept to Comfort in 4 Steps
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our streamlined process ensures your custom windows are designed, built, and installed with precision and care.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting lines (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-brand/0 via-brand/30 to-brand/0 z-0" />
          <div className="hidden lg:block absolute top-24 left-1/8 w-1/4 h-0.5 bg-brand/40" style={{ left: "12.5%", width: "calc(25% - 1rem)" }} />
          <div className="hidden lg:block absolute top-24 left-3/8 w-1/4 h-0.5 bg-brand/40" style={{ left: "37.5%", width: "calc(25% - 1rem)" }} />
          <div className="hidden lg:block absolute top-24 left-5/8 w-1/4 h-0.5 bg-brand/40" style={{ left: "62.5%", width: "calc(25% - 1rem)" }} />

          {/* Step cards */}
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col">
              {/* Step number and icon container */}
              <div className="flex items-start gap-4 mb-6">
                {/* Step number */}
                <div className="flex-shrink-0 text-3xl font-bold text-brand/20">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/10 border border-brand/25 flex items-center justify-center text-brand/80 mt-1">
                  {step.icon}
                </div>
              </div>

              {/* Title and description */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Vertical connector for mobile (stacked view) */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-6">
                  <svg className="w-6 h-6 text-brand/30 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 5v14m0 0l-3-3m3 3l3-3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            Ready to start your window transformation?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
