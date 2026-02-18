import type { Metadata } from "next";
import { Breadcrumb, PageHero, Section } from "@/components/ui";
import StickyCTA from "@/components/StickyCTA";
import BlogContent from "./blog-content";

export const metadata: Metadata = {
  title: "Resources & Guides | DECA Windows Blog",
  description: "Expert guides on choosing windows, energy efficiency, cost comparisons, and European vs American window styles.",
  keywords: "window buying guide, energy efficient windows, window comparisons, installation guides",
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Resources & Guides" }]} />
      <PageHero title="Resources & Guides" subtitle="Expert knowledge from our team to help you make informed decisions." badge="Knowledge Base" />

      <Section>
        <BlogContent />
      </Section>
      <StickyCTA />
    </>
  );
}
