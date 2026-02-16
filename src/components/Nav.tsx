"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Windows", children: [
      { href: "/windows", label: "All Windows" },
      { href: "/tilt-turn", label: "Tilt & Turn Windows" },
    ]
  },
  {
    label: "Doors", children: [
      { href: "/doors", label: "All Doors" },
      { href: "/sliding-doors", label: "Sliding Doors" },
    ]
  },
  { href: "/performance", label: "Performance" },
  { href: "/professionals", label: "For Professionals" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-navy-950 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <span className="text-white font-bold text-xl tracking-tight">DECA</span>
          </div>
          <div className="hidden sm:block text-white/50 text-xs leading-tight">
            Euro Windows<br />and Doors
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-md transition-colors flex items-center gap-1">
                  {item.label}
                  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 pt-1">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-52">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-light hover:text-blue-accent transition-colors"
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
                className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a href="tel:+14137714457" className="hidden md:flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (413) 771-4457
          </a>
          <Link
            href="/quote"
            className="bg-blue-accent hover:bg-blue-hover text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Request a Quote
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
        <div className="lg:hidden bg-navy-900 border-t border-white/10 py-4 px-4 space-y-1">
          {navItems.flatMap((item) =>
            item.children
              ? item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-white/70 hover:text-white py-2 px-3 rounded-md hover:bg-white/5"
                  >
                    {child.label}
                  </Link>
                ))
              : [
                  <Link
                    key={item.href}
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-white/70 hover:text-white py-2 px-3 rounded-md hover:bg-white/5"
                  >
                    {item.label}
                  </Link>,
                ]
          )}
        </div>
      )}
    </nav>
  );
}
