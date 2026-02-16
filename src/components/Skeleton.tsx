"use client";

/* ═══════════════════════════════════════════════════════
   SKELETON UI COMPONENTS
   Shimmer-animated placeholders that show while content loads
   ═══════════════════════════════════════════════════════ */

const shimmer = "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent";

/* Base skeleton block */
export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`bg-gray-200/70 rounded ${shimmer} ${className}`} />;
}

/* Text line skeleton */
export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2.5 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-3.5 rounded ${i === lines - 1 ? "w-3/4" : "w-full"}`}
        />
      ))}
    </div>
  );
}

/* Heading skeleton */
export function SkeletonHeading({ className = "" }: { className?: string }) {
  return <Skeleton className={`h-8 w-2/3 mb-3 ${className}`} />;
}

/* Badge skeleton */
export function SkeletonBadge() {
  return <Skeleton className="h-4 w-20 rounded-full mb-2" />;
}

/* Card skeleton */
export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-xl border border-border overflow-hidden ${className}`}>
      <Skeleton className="h-48 rounded-none" />
      <div className="p-5">
        <Skeleton className="h-5 w-3/4 mb-3" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

/* Image placeholder skeleton */
export function SkeletonImage({ height = "h-64", className = "" }: { height?: string; className?: string }) {
  return (
    <div className={`${height} bg-gray-200/70 rounded-xl flex items-center justify-center ${shimmer} ${className}`}>
      <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  );
}

/* Stat card skeleton */
export function SkeletonStat() {
  return (
    <div className="text-center p-4">
      <Skeleton className="h-10 w-16 mx-auto mb-2" />
      <Skeleton className="h-3 w-24 mx-auto" />
    </div>
  );
}

/* Button skeleton */
export function SkeletonButton({ className = "" }: { className?: string }) {
  return <Skeleton className={`h-11 w-36 rounded ${className}`} />;
}

/* Nav skeleton */
export function SkeletonNav() {
  return (
    <div className="bg-brand">
      {/* Top bar */}
      <div className="h-8 bg-brand-darker flex items-center justify-center">
        <Skeleton className="h-3 w-48 !bg-white/10" />
      </div>
      {/* Main nav */}
      <div className="h-14 flex items-center justify-between px-6 max-w-7xl mx-auto">
        <Skeleton className="h-5 w-24 !bg-white/15" />
        <div className="hidden md:flex gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-3 w-16 !bg-white/10" />
          ))}
        </div>
        <Skeleton className="h-8 w-28 rounded !bg-white/15" />
      </div>
    </div>
  );
}

/* Hero section skeleton */
export function SkeletonHero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl">
          <Skeleton className="h-4 w-48 !bg-white/10 mb-4" />
          <Skeleton className="h-10 w-full !bg-white/15 mb-3" />
          <Skeleton className="h-10 w-3/4 !bg-white/15 mb-6" />
          <Skeleton className="h-4 w-full !bg-white/8 mb-2" />
          <Skeleton className="h-4 w-2/3 !bg-white/8 mb-8" />
          <div className="flex gap-3">
            <Skeleton className="h-12 w-40 rounded !bg-white/15" />
            <Skeleton className="h-12 w-36 rounded !bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Section skeleton — generic content section */
export function SkeletonSection({ cards = 3, gray = false }: { cards?: number; gray?: boolean }) {
  return (
    <section className={`py-16 ${gray ? "bg-warm-gray" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <SkeletonBadge />
          <Skeleton className="h-7 w-72 mx-auto mb-3" />
          <Skeleton className="h-4 w-96 mx-auto max-w-full" />
        </div>
        <div className={`grid md:grid-cols-${cards} gap-6`}>
          {Array.from({ length: cards }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Full page skeleton — used in loading.tsx files */
export function PageSkeleton() {
  return (
    <div className="animate-in fade-in duration-200">
      <SkeletonHero />
      <SkeletonSection cards={3} />
      <SkeletonSection cards={2} gray />
      <SkeletonSection cards={4} />
    </div>
  );
}

/* Product page skeleton */
export function ProductPageSkeleton() {
  return (
    <div className="animate-in fade-in duration-200">
      {/* Breadcrumb */}
      <div className="bg-warm-gray border-b border-border py-3 px-6">
        <Skeleton className="h-3 w-32" />
      </div>

      {/* Hero grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SkeletonBadge />
              <SkeletonHeading className="!w-3/4 !h-10" />
              <SkeletonText lines={4} />
              <div className="mt-6 space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full rounded-xl" />
                ))}
              </div>
            </div>
            <SkeletonImage height="h-[450px]" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-warm-gray py-8 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonStat key={i} />
          ))}
        </div>
      </section>

      <SkeletonSection cards={3} />
      <SkeletonSection cards={2} gray />
    </div>
  );
}
