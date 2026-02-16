"use client";

import { useState } from "react";

const PHONE = "(413) 771-4457";

export default function TiltTurnLP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    projectType: "residential",
    windows: "1-5",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to HubSpot / API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#3854AA] text-white py-3 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">DECA</span>
          <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`} className="text-sm font-medium hover:text-blue-300">
            {PHONE}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3854AA] to-[#4a66b8] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-600/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Made in Massachusetts
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              European Tilt & Turn Windows
              <span className="text-[#3b5bdb]"> at Factory-Direct Prices</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Premium European engineering, manufactured in Westfield, MA. Up to 72% energy savings
              with the best U-value in the industry (0.10 W/m²K).
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {["U-Value 0.10", "45-50 dB Noise Block", "140 mph Wind Rated", "15-Year Warranty"].map((badge) => (
                <span key={badge} className="bg-white/10 px-3 py-1.5 rounded text-sm font-medium">
                  ✓ {badge}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="#quote-form"
                className="bg-[#3b5bdb] hover:bg-[#2f4bc7] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl aspect-[4/3] flex items-center justify-center border border-white/10">
            <span className="text-gray-400 text-sm">Window Product Image</span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#f8f9fa] py-6 px-4 border-y border-[#e9ecef]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { num: "500+", label: "Homes Fitted" },
            { num: "0.10", label: "Best U-Value in USA" },
            { num: "15 yr", label: "Full Warranty" },
            { num: "4.9★", label: "Customer Rating" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#3854AA]">{s.num}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3854AA] mb-12">
            Why Homeowners Choose DECA Tilt & Turn
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Two Modes, One Window",
                desc: "Tilt for secure ventilation. Turn for full opening and easy cleaning. European hardware rated for 60,000+ cycles.",
              },
              {
                title: "Slash Energy Bills by 72%",
                desc: "Triple-glazed units with argon fill and warm-edge spacers deliver the lowest U-value of any window made in America.",
              },
              {
                title: "Block 95% of Outside Noise",
                desc: "Multi-chamber profiles plus laminated glass options reduce noise by 45-50 dB — perfect near airports and highways.",
              },
              {
                title: "Hurricane-Grade Durability",
                desc: "Steel-reinforced frames rated for 140 mph winds. Multi-point locking on every sash for maximum security.",
              },
              {
                title: "Factory-Direct, No Middleman",
                desc: "Made in our Westfield, MA facility and delivered directly to your door. No dealer markup means better value.",
              },
              {
                title: "15-Year Transferable Warranty",
                desc: "Full coverage on frames, glass, and hardware. Transferable to new owners — adds value to your home.",
              },
            ].map((b) => (
              <div key={b.title} className="bg-[#f8f9fa] rounded-xl p-6 border border-[#e9ecef]">
                <h3 className="text-lg font-semibold text-[#3854AA] mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#f8f9fa] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#3854AA] mb-8">
            DECA vs. Standard American Windows
          </h2>
          <div className="bg-white rounded-xl border border-[#e9ecef] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#3854AA] text-white">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">DECA Tilt & Turn</th>
                  <th className="text-center py-3 px-4">Standard Double-Hung</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["U-Value", "0.10 W/m²K", "0.30+ W/m²K"],
                  ["Glazing", "Triple (standard)", "Double"],
                  ["Noise Reduction", "45-50 dB", "25-30 dB"],
                  ["Opening Modes", "Tilt + Turn + Locked", "Up/Down only"],
                  ["Air Seal", "Multi-point compression", "Friction fit"],
                  ["Wind Rating", "140 mph", "80-100 mph"],
                  ["Security", "Multi-point locking", "Single latch"],
                  ["Cleaning", "Inward opening", "Tilt-in (limited)"],
                  ["Lifespan", "30-50 years", "15-25 years"],
                ].map(([feat, deca, std], i) => (
                  <tr key={feat} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}>
                    <td className="py-3 px-4 font-medium text-[#3854AA]">{feat}</td>
                    <td className="py-3 px-4 text-center text-green-700 font-semibold">{deca}</td>
                    <td className="py-3 px-4 text-center text-gray-500">{std}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl italic text-gray-700 mb-4">
            &ldquo;Our heating bill dropped 68% the first winter after installing DECA tilt & turn windows.
            The noise from Route 9 is practically gone. Best home improvement we&apos;ve ever made.&rdquo;
          </p>
          <p className="font-semibold text-[#3854AA]">— Sarah M., Northampton, MA</p>
          <div className="flex justify-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className="text-yellow-500 text-lg">★</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="bg-[#3854AA] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Get Your Free Quote in 24 Hours
          </h2>
          <p className="text-gray-400 text-center mb-8">
            No obligation. No pressure. Just expert advice from a local manufacturer.
          </p>

          {submitted ? (
            <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300">
                We&apos;ve received your request. A DECA consultant will contact you within 24 hours
                with a detailed quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#3b5bdb]"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#3b5bdb]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#3b5bdb]"
                />
                <input
                  type="text"
                  placeholder="ZIP Code *"
                  required
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#3b5bdb]"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#3b5bdb]"
                >
                  <option value="residential" className="text-black">Residential</option>
                  <option value="commercial" className="text-black">Commercial</option>
                  <option value="new-construction" className="text-black">New Construction</option>
                  <option value="replacement" className="text-black">Window Replacement</option>
                </select>
                <select
                  value={formData.windows}
                  onChange={(e) => setFormData({ ...formData, windows: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#3b5bdb]"
                >
                  <option value="1-5" className="text-black">1-5 Windows</option>
                  <option value="6-10" className="text-black">6-10 Windows</option>
                  <option value="11-20" className="text-black">11-20 Windows</option>
                  <option value="20+" className="text-black">20+ Windows</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your project (optional)"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#3b5bdb]"
              />
              <button
                type="submit"
                className="w-full bg-[#3b5bdb] hover:bg-[#2f4bc7] text-white py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Get My Free Quote →
              </button>
              <p className="text-center text-gray-500 text-xs mt-2">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d4590] text-gray-400 py-8 px-4 text-center text-sm">
        <p>© 2025 DECA Windows & Doors. Manufactured in Westfield, Massachusetts.</p>
        <p className="mt-1">109 Apremont Way, Westfield, MA 01085 · {PHONE}</p>
      </footer>
    </div>
  );
}
