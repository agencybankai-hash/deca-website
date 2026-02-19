"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Breadcrumb, Section, AnimatedCTA } from "@/components/ui";
import StickyCTA from "@/components/StickyCTA";
import ReviewsSection from "@/components/ReviewsSection";

// ===== Types & Constants =====
type WindowType = "tilt-turn" | "fixed" | "sliding-door" | "entry-door" | "french-door";
type FrameMaterial = "upvc" | "aluminum";
type Glazing = "double" | "triple";
type Color = "white" | "anthracite" | "bronze" | "custom";

const WINDOW_TYPES: { id: WindowType; label: string; basePrice: number }[] = [
  { id: "tilt-turn", label: "Tilt & Turn", basePrice: 450 },
  { id: "fixed", label: "Fixed", basePrice: 280 },
  { id: "sliding-door", label: "Sliding Door", basePrice: 1200 },
  { id: "entry-door", label: "Entry Door", basePrice: 900 },
  { id: "french-door", label: "French Door", basePrice: 1100 },
];

const FRAME_MATERIALS: { id: FrameMaterial; label: string; multiplier: number }[] = [
  { id: "upvc", label: "uPVC", multiplier: 1.0 },
  { id: "aluminum", label: "Aluminum", multiplier: 1.35 },
];

const GLAZING_OPTIONS: { id: Glazing; label: string; multiplier: number }[] = [
  { id: "double", label: "Double", multiplier: 1.0 },
  { id: "triple", label: "Triple", multiplier: 1.25 },
];

const COLORS: { id: Color; label: string; multiplier: number; hex: string }[] = [
  { id: "white", label: "White", multiplier: 1.0, hex: "#FFFFFF" },
  { id: "anthracite", label: "Anthracite Gray", multiplier: 1.08, hex: "#3C3C3C" },
  { id: "bronze", label: "Bronze", multiplier: 1.08, hex: "#8B7355" },
  { id: "custom", label: "Custom", multiplier: 1.15, hex: "#D4A574" },
];

// ===== Price Calculation Logic =====
function calculatePrice(
  basePrice: number,
  frameMaterial: FrameMaterial,
  glazing: Glazing,
  width: number,
  height: number,
  color: Color,
  quantity: number
): number {
  // Get multipliers
  const materialMultiplier = FRAME_MATERIALS.find((m) => m.id === frameMaterial)?.multiplier || 1.0;
  const glazingMultiplier = GLAZING_OPTIONS.find((g) => g.id === glazing)?.multiplier || 1.0;
  const colorMultiplier = COLORS.find((c) => c.id === color)?.multiplier || 1.0;

  // Size multiplier: (width * height) / (30 * 48) — normalized to standard 30x48 window
  const sizeMultiplier = (width * height) / (30 * 48);

  // Base calculation
  let unitPrice = basePrice * materialMultiplier * glazingMultiplier * sizeMultiplier * colorMultiplier;

  // Quantity discount
  let discount = 1.0;
  if (quantity >= 10) {
    discount = 0.9; // 10% off
  } else if (quantity >= 5) {
    discount = 0.95; // 5% off
  }

  const totalPrice = unitPrice * quantity * discount;
  return Math.round(totalPrice * 100) / 100; // Round to 2 decimals
}

// ===== Main Component =====
export function CalculatorContent() {
  // Form state
  const [windowType, setWindowType] = useState<WindowType>("tilt-turn");
  const [frameMaterial, setFrameMaterial] = useState<FrameMaterial>("upvc");
  const [glazing, setGlazing] = useState<Glazing>("double");
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(48);
  const [color, setColor] = useState<Color>("white");
  const [quantity, setQuantity] = useState(1);

  // Memoize calculated price
  const basePrice = WINDOW_TYPES.find((wt) => wt.id === windowType)?.basePrice || 450;
  const estimatedPrice = useMemo(
    () => calculatePrice(basePrice, frameMaterial, glazing, width, height, color, quantity),
    [basePrice, frameMaterial, glazing, width, height, color, quantity]
  );

  const unitPrice = estimatedPrice / quantity;

  return (
    <>
      <Breadcrumb items={[{ label: "Calculator" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand to-brand/95 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-white/70 mb-3">
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Window Cost Estimator</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get an instant estimate for your custom DECA windows. Adjust specifications to see real-time pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Configurator Form */}
          <div className="space-y-8">
            {/* Window Type */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">Window Type</label>
              <div className="grid grid-cols-2 gap-2">
                {WINDOW_TYPES.map((wt) => (
                  <button
                    key={wt.id}
                    onClick={() => setWindowType(wt.id)}
                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                      windowType === wt.id
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-border bg-white text-text-secondary hover:border-brand/50"
                    }`}
                  >
                    {wt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Material */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">Frame Material</label>
              <div className="grid grid-cols-2 gap-3">
                {FRAME_MATERIALS.map((fm) => (
                  <button
                    key={fm.id}
                    onClick={() => setFrameMaterial(fm.id)}
                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                      frameMaterial === fm.id
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-border bg-white text-text-secondary hover:border-brand/50"
                    }`}
                  >
                    {fm.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Glazing */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">Glazing</label>
              <div className="grid grid-cols-2 gap-3">
                {GLAZING_OPTIONS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGlazing(g.id)}
                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                      glazing === g.id
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-border bg-white text-text-secondary hover:border-brand/50"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Width */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-text-primary">Width (inches)</label>
                <span className="text-2xl font-bold text-brand">{width}</span>
              </div>
              <input
                type="range"
                min="12"
                max="96"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-brand"
              />
              <div className="flex gap-2 mt-3">
                <input
                  type="number"
                  min="12"
                  max="96"
                  value={width}
                  onChange={(e) => setWidth(Math.max(12, Math.min(96, Number(e.target.value))))}
                  className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
            </div>

            {/* Height */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-text-primary">Height (inches)</label>
                <span className="text-2xl font-bold text-brand">{height}</span>
              </div>
              <input
                type="range"
                min="24"
                max="96"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-brand"
              />
              <div className="flex gap-2 mt-3">
                <input
                  type="number"
                  min="24"
                  max="96"
                  value={height}
                  onChange={(e) => setHeight(Math.max(24, Math.min(96, Number(e.target.value))))}
                  className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">Color</label>
              <div className="grid grid-cols-2 gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c.id)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg border-2 transition-all ${
                      color === c.id
                        ? "border-brand bg-brand/10"
                        : "border-border bg-white hover:border-brand/50"
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-md border border-gray-200 shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-sm font-medium text-text-primary">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-text-primary">Quantity</label>
                <span className="text-2xl font-bold text-brand">{quantity}</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-brand"
              />
              <div className="flex gap-2 mt-3">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(20, Number(e.target.value))))}
                  className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              {quantity >= 5 && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-xs font-semibold text-green-800">
                    {quantity >= 10 ? "✓ 10% quantity discount applied" : "✓ 5% quantity discount applied"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Live Preview Card */}
          <div className="flex flex-col gap-6">
            {/* Preview Card */}
            <div className="sticky top-24 bg-gradient-to-br from-warm-gray to-white border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-6">
                Your Estimate
              </h2>

              {/* Configuration Summary */}
              <div className="space-y-3 mb-8 pb-8 border-b border-border">
                <div className="flex items-start justify-between">
                  <span className="text-sm text-text-secondary">Window Type:</span>
                  <span className="text-sm font-semibold text-text-primary text-right">
                    {WINDOW_TYPES.find((wt) => wt.id === windowType)?.label}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-sm text-text-secondary">Frame Material:</span>
                  <span className="text-sm font-semibold text-text-primary">
                    {FRAME_MATERIALS.find((fm) => fm.id === frameMaterial)?.label}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-sm text-text-secondary">Glazing:</span>
                  <span className="text-sm font-semibold text-text-primary">
                    {GLAZING_OPTIONS.find((g) => g.id === glazing)?.label}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-sm text-text-secondary">Dimensions:</span>
                  <span className="text-sm font-semibold text-text-primary">
                    {width}" × {height}"
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-sm text-text-secondary">Color:</span>
                  <span className="text-sm font-semibold text-text-primary">
                    {COLORS.find((c) => c.id === color)?.label}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-sm text-text-secondary">Quantity:</span>
                  <span className="text-sm font-semibold text-text-primary">{quantity} unit(s)</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <p className="text-xs text-text-secondary uppercase tracking-wide font-semibold mb-2">
                  Estimated Total
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-brand">${estimatedPrice.toLocaleString()}</span>
                  <span className="text-sm text-text-secondary">
                    ${unitPrice.toLocaleString()} per unit
                  </span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
                <p className="text-xs text-orange-800 leading-relaxed">
                  <strong>Starting from</strong> the estimated price above. Final price may vary based on installation requirements, site conditions, custom specifications, and shipping.
                </p>
              </div>

              {/* CTA Button */}
              <AnimatedCTA href="/quote" className="w-full justify-center">
                Request Detailed Quote
              </AnimatedCTA>
            </div>

            {/* Info Box */}
            <div className="bg-blue-light border border-blue-accent/20 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-2">💡 How Pricing Works</h3>
              <ul className="text-xs text-text-secondary space-y-1.5 leading-relaxed">
                <li>• <strong>Base price</strong> varies by window type</li>
                <li>• <strong>Material upgrade:</strong> aluminum costs 35% more</li>
                <li>• <strong>Triple glazing:</strong> +25% for superior insulation</li>
                <li>• <strong>Size scaling:</strong> normalized to 30" × 48" standard</li>
                <li>• <strong>Color premium:</strong> custom colors cost 15% more</li>
                <li>• <strong>Bulk discount:</strong> 5% off 5+, 10% off 10+</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Final CTA Section */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Order Your Windows?</h2>
          <p className="text-white/80 text-lg mb-8">
            Our team will provide detailed specifications, samples, installation guidance, and a comprehensive quote tailored to your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedCTA href="/quote" variant="blue" size="lg">
              Get Your Quote
            </AnimatedCTA>
            <Link
              href="/windows"
              className="px-6 py-3 rounded font-semibold text-brand bg-white hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      <StickyCTA />
    </>
  );
}
