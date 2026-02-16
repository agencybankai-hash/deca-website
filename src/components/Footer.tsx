import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-white font-bold text-xl tracking-tight">DECA</span>
              <span className="text-white/40 text-xs leading-tight">Euro Windows<br />and Doors</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              USA-based manufacturer of premium European-style tilt & turn windows and doors.
            </p>
            <div className="space-y-1.5 text-sm">
              <p>109 Apremont Way, Westfield, MA 01085</p>
              <p>(413) 771-4457</p>
              <p>info@decawindows.com</p>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Catalog</h4>
            <div className="space-y-2.5">
              {[
                { href: "/tilt-turn", label: "Tilt & Turn Windows" },
                { href: "/windows", label: "uPVC Windows" },
                { href: "/windows", label: "Aluminum Windows" },
                { href: "/doors", label: "Entry Doors" },
                { href: "/doors", label: "Swing (French) Doors" },
                { href: "/sliding-doors", label: "Sliding Doors" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="block text-sm hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <div className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/windows", label: "Windows" },
                { href: "/doors", label: "Doors" },
                { href: "/performance", label: "Performance" },
                { href: "/blog", label: "News" },
                { href: "/about", label: "About Us" },
                { href: "/quote", label: "Contact" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="block text-sm hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h4>
            <div className="space-y-2.5">
              {["Massachusetts", "Boston, MA", "Connecticut", "Rhode Island", "New Hampshire", "New York"].map((area) => (
                <Link key={area} href="/locations" className="block text-sm hover:text-white transition-colors">
                  {area}
                </Link>
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
            <span>Design by BANKAI.AGENCY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
