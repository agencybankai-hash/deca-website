import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white font-bold text-2xl tracking-tight">DECA</span>
              <span className="text-white/40 text-[10px] leading-tight border-l border-white/15 pl-3">Euro Windows<br />and Doors</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              USA-based manufacturer of premium European-style tilt & turn windows and doors. Factory-direct from Westfield, Massachusetts.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                109 Apremont Way, Westfield, MA 01085
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                <a href="tel:+14137714457" className="hover:text-white transition-colors">(413) 771-4457</a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <a href="mailto:info@decawindows.com" className="hover:text-white transition-colors">info@decawindows.com</a>
              </p>
            </div>
          </div>

          {/* Windows */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Windows</h4>
            <div className="space-y-2.5">
              {[
                { href: "/windows", label: "All Windows" },
                { href: "/tilt-turn", label: "Tilt & Turn" },
                { href: "/windows/upvc-windows", label: "uPVC Windows" },
                { href: "/windows/aluminum-windows", label: "Aluminum Windows" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="block text-sm hover:text-white transition-colors">{item.label}</Link>
              ))}
            </div>
          </div>

          {/* Doors */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Doors</h4>
            <div className="space-y-2.5">
              {[
                { href: "/doors", label: "All Doors" },
                { href: "/doors/entry-doors", label: "Entry Doors" },
                { href: "/doors/french-doors", label: "French Doors" },
                { href: "/sliding-doors", label: "Sliding Doors" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="block text-sm hover:text-white transition-colors">{item.label}</Link>
              ))}
            </div>

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mt-8 mb-4">Company</h4>
            <div className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/performance", label: "Technology" },
                { href: "/professionals", label: "For Professionals" },
                { href: "/blog", label: "Blog" },
                { href: "/quote", label: "Contact" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="block text-sm hover:text-white transition-colors">{item.label}</Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h4>
            <div className="space-y-2.5">
              {["Massachusetts", "Boston, MA", "Connecticut", "Rhode Island", "New Hampshire", "New York"].map((area) => (
                <Link key={area} href="/locations" className="block text-sm hover:text-white transition-colors">{area}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">&copy; 2026 DECA Company. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="hover:text-white/60 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer">Terms of Service</span>
            <span>Design by <a href="https://bankai.agency" target="_blank" rel="noopener noreferrer" className="hover:text-white/60">BANKAI.AGENCY</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
