"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const topBarLinks = [
  { href: "/professionals#builders", label: "For Builders" },
  { href: "/professionals#contractors", label: "For Contractors" },
  { href: "/professionals#dealers", label: "For Dealers" },
  { href: "/professionals#architects", label: "For Architects" },
];

const topBarRight = [
  { href: "/performance", label: "Technical Specifications" },
  { href: "/quote", label: "Support" },
];

const navItems = [
  {
    label: "Windows",
    children: [
      { href: "/windows", label: "All Windows" },
      { href: "/tilt-turn", label: "Tilt & Turn Windows" },
      { href: "/windows/upvc-windows", label: "uPVC Windows" },
      { href: "/windows/aluminum-windows", label: "Aluminum Windows" },
    ],
  },
  {
    label: "Doors",
    children: [
      { href: "/doors", label: "All Doors" },
      { href: "/doors/entry-doors", label: "Entry Doors" },
      { href: "/doors/french-doors", label: "Swing (French) Doors" },
      { href: "/sliding-doors", label: "Sliding Doors" },
    ],
  },
  {
    label: "Resources",
    highlight: true,
    children: [
      { href: "/performance", label: "Technology & Performance" },
      { href: "/blog", label: "Expert Guides" },
      { href: "/about", label: "About DECA" },
    ],
  },
  { href: "/professionals", label: "For Pros" },
  { href: "/quote", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Only hide after scrolling past 80px
      if (y > 80) {
        setHidden(y > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-transform duration-300 ease-in-out"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      {/* Top bar — B2B links */}
      <div className="bg-brand-darker text-white/50 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-8">
          <div className="flex items-center gap-5">
            {topBarLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white/80 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5">
            {topBarRight.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white/80 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-brand backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="text-white font-bold text-xl tracking-tight">DECA</span>
            <span className="hidden sm:block text-white/40 text-[9px] leading-tight border-l border-white/15 pl-2.5">
              Euro Windows<br />and Doors
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={`text-[12px] px-3 py-2 transition-colors flex items-center gap-1 uppercase tracking-wider font-medium ${
                    (item as { highlight?: boolean }).highlight
                      ? "text-white hover:text-white/80"
                      : "text-white/60 hover:text-white"
                  }`}>
                    {item.label}
                    <svg className="w-2.5 h-2.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-1">
                      <div className="bg-white rounded-lg shadow-2xl border border-gray-100 py-1.5 w-52">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-[13px] text-gray-600 hover:bg-blue-light hover:text-brand transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="text-[12px] text-white/60 hover:text-white px-3 py-2 transition-colors uppercase tracking-wider font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Search icon */}
            <button className="hidden lg:block text-white/40 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <a
              href="tel:+14137714457"
              className="hidden md:flex items-center gap-1.5 text-[12px] text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (413) 771-4457
            </a>
            <Link
              href="/quote"
              className="bg-white hover:bg-gray-100 text-brand px-4 py-2 rounded text-[12px] font-semibold transition-colors flex items-center gap-1.5 uppercase tracking-wider"
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white/80 hover:text-white p-1"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-brand-dark border-t border-white/10 py-4 px-4 space-y-1">
            {navItems.flatMap((item) =>
              item.children
                ? item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-white/70 hover:text-white py-2.5 px-3 rounded hover:bg-white/5"
                    >
                      {child.label}
                    </Link>
                  ))
                : [
                    <Link
                      key={item.href}
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-white/70 hover:text-white py-2.5 px-3 rounded hover:bg-white/5"
                    >
                      {item.label}
                    </Link>,
                  ]
            )}
            {/* Mobile B2B links */}
            <div className="border-t border-white/10 mt-3 pt-3">
              {topBarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-xs text-white/40 hover:text-white/70 py-1.5 px-3"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
