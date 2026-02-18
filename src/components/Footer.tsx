import Link from "next/link";

const marqueeText = "Premium European Windows.   Factory-Direct Pricing.   Made in Massachusetts.   ";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#0f1112" }}>
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "2.5rem 2.5rem",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 pt-16 md:pt-24 pb-8 md:pb-12" style={{ gap: "4rem" }}>
        {/* ── Top: Brand + Contact ── */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-white font-bold text-2xl tracking-tight">DECA</span>
                <span className="text-white/40 text-[10px] leading-tight border-l border-white/15 pl-3">
                  Euro Windows<br />and Doors
                </span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                USA-based manufacturer of premium European-style tilt&nbsp;&amp;&nbsp;turn windows and doors. Factory-direct from Westfield, Massachusetts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <span>109 Apremont Way, Westfield, MA</span>
              </div>
              <a href="tel:+14137714457" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                (413) 771-4457
              </a>
              <a href="mailto:info@decawindows.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                info@decawindows.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Link columns ── */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            {/* Windows */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Windows</span>
              <div className="flex flex-col items-start gap-2">
                {[
                  { href: "/windows", label: "All Windows" },
                  { href: "/tilt-turn", label: "Tilt & Turn" },
                  { href: "/windows/upvc-windows", label: "uPVC Windows" },
                  { href: "/windows/aluminum-windows", label: "Aluminum" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">{item.label}</Link>
                ))}
              </div>
            </div>

            {/* Doors */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Doors</span>
              <div className="flex flex-col items-start gap-2">
                {[
                  { href: "/doors", label: "All Doors" },
                  { href: "/doors/entry-doors", label: "Entry Doors" },
                  { href: "/doors/french-doors", label: "French Doors" },
                  { href: "/sliding-doors", label: "Sliding Doors" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">{item.label}</Link>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Service Areas</span>
              <div className="flex flex-col items-start gap-2">
                {["Massachusetts", "Boston, MA", "Connecticut", "Rhode Island", "New Hampshire", "New York"].map((area) => (
                  <Link key={area} href="/locations" className="text-sm text-white/60 hover:text-white transition-colors">{area}</Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">Company</span>
              <div className="flex flex-col items-start gap-2">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/performance", label: "Technology" },
                  { href: "/professionals", label: "For Professionals" },
                  { href: "/blog", label: "Blog" },
                  { href: "/quote", label: "Contact" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">{item.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Marquee scrolling text ── */}
        <div
          className="hidden md:block overflow-hidden"
          style={{ position: "relative", width: "100vw", left: "50%", transform: "translateX(-50%)" }}
        >
          <div
            className="whitespace-nowrap"
            style={{
              fontSize: "clamp(60px, 7vw, 110px)",
              fontWeight: 700,
              color: "rgba(255,255,255,0.08)",
              letterSpacing: "-0.04em",
              animation: "footer-marquee 35s linear infinite",
            }}
          >
            {marqueeText.repeat(6)}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="max-w-7xl mx-auto mt-10">
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: brand + copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="text-white font-bold text-sm tracking-tight">DECA Windows</span>
              <p className="text-xs text-white/30">&copy; 2026 DECA Company. All Rights Reserved.</p>
            </div>

            {/* Right: Bankai badge */}
            <a
              href="https://bankaiagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              <span>Design &amp; Development by</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 15 15" fill="none">
                <path d="M0.530008 4.43966L13.5591 0.442106C13.9327 0.327463 14.2106 0.789407 13.9342 1.06577L7.92691 7.0731C7.73792 7.26208 7.87176 7.58523 8.13904 7.58523H11.1043C11.4395 7.58523 11.6063 7.99129 11.368 8.2269L5.15569 14.3686C4.91884 14.6028 4.51705 14.435 4.51705 14.1019V10.8682C4.51705 10.7025 4.38273 10.5682 4.21705 10.5682H0.75C0.335786 10.5682 0 10.2324 0 9.81818V5.15667C0 4.82719 0.215025 4.5363 0.530008 4.43966Z" fill="#ef4444" />
              </svg>
              <span className="font-semibold tracking-wide text-white/45">BANKAI.AGENCY</span>
            </a>
          </div>
        </div>
      </div>

      {/* Marquee keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes footer-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </footer>
  );
}
