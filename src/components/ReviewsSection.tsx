"use client";
import { ServiceIcons, SectionTitle } from "@/components/ui";

/*
 * ReviewsSection — temporarily hidden until real customer reviews are collected.
 * TODO: Once Vladimir provides real testimonials, restore the scrolling review cards.
 * Previous implementation used fake names/avatars from pravatar.cc — removed per brand guidelines.
 */

export default function ReviewsSection({ showServiceIcons = true }: { showServiceIcons?: boolean }) {
  /* When showServiceIcons is false, render nothing at all (no empty wrapper) */
  if (!showServiceIcons) return null;

  return (
    <section className="py-16 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Exceptional Service in Massachusetts" subtitle="From consultation to installation, we're with you every step." />
        <ServiceIcons />
      </div>
    </section>
  );
}
