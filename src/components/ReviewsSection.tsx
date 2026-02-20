"use client";
import { ServiceIcons, SectionTitle } from "@/components/ui";

/*
 * ReviewsSection — temporarily hidden until real customer reviews are collected.
 * TODO: Once Vladimir provides real testimonials, restore the scrolling review cards.
 * Previous implementation used fake names/avatars from pravatar.cc — removed per brand guidelines.
 */

export default function ReviewsSection({ showServiceIcons = true }: { showServiceIcons?: boolean }) {
  return (
    <section className="py-20 overflow-visible">
      {/* Reviews section hidden — awaiting real customer testimonials */}
      {/* When ready, replace this placeholder with actual reviews or a Google Reviews widget */}

      {showServiceIcons && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Exceptional Service in Massachusetts" subtitle="From consultation to installation, we're with you every step." />
          <ServiceIcons />
        </div>
      )}
    </section>
  );
}
