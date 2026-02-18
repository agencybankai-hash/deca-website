import Link from "next/link";
import { Breadcrumb, Section, SectionTitle, CTABlock, PhotoPlaceholder, ServiceIcons, StatCard } from "@/components/ui";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import DeliveryMapSection from "@/components/DeliveryMapSection";
import CTAWithDocs from "@/components/CTAWithDocs";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "About DECA | European Technology, American Craftsmanship",
  description: "Elevating home comfort. European technology, American craftsmanship, Massachusetts quality. Learn about DECA Windows & Doors.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "About DECA" }]} />

      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-3">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">About DECA</h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Elevating home comfort. European technology, American craftsmanship, Massachusetts quality. We bring 70 years of German window engineering to American homes — manufactured locally in Westfield, MA.
              </p>
              <Link href="/quote" className="inline-block bg-blue-accent hover:bg-blue-hover text-white px-7 py-3.5 rounded font-semibold transition-colors">
                Get in Touch
              </Link>
            </div>
            <PhotoPlaceholder description="Фото: производственный цех DECA в Вестфилде, Массачусетс — линия сборки окон" height="h-[400px]" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section gray>
        <SectionTitle badge="Our Mission" title="Making European Windows Accessible" />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Our mission is to make European-style windows and doors available to everyone by manufacturing them in the USA. Our products prioritize energy efficiency, sound insulation, thermal comfort, security, sleek aesthetics, durability, environmental considerations, and easy maintenance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <StatCard value="70+" label="Years of German Engineering" />
          <StatCard value="500+" label="Completed Projects" />
          <StatCard value="15" label="Year Warranty" />
          <StatCard value="0.10" label="Best U-Value" />
        </div>
      </Section>

      {/* What Makes DECA Different */}
      <Section>
        <SectionTitle badge="Why DECA" title="What Makes DECA Different" subtitle="One of few local tilt & turn window manufacturers in the US." />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <PhotoPlaceholder description="Фото: сравнение профилей DECA с обычными американскими окнами — крупный план разреза" height="h-80" />
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">European Standards, Local Production</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              DECA is one of few local tilt and turn window manufacturers in the US. Taking advantage of German standards and technologies proven over 70 years, we deliver premium quality with the speed and warranties of domestic suppliers. Our well-streamlined production allows for more attainable pricing than European importers.
            </p>
            <div className="space-y-4">
              {[
                { title: "Factory-Direct Pricing", desc: "No import markups. 30-40% less than European imported windows." },
                { title: "4-Week Lead Time", desc: "Local manufacturing means faster delivery across the Northeast." },
                { title: "Domestic Warranties", desc: "15-year frame, 10-year glass, 5-year hardware — backed locally." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-accent/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">{item.title}</h4>
                    <p className="text-xs text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section gray>
        <SectionTitle badge="Our Values" title="Built on Quality, Driven by Innovation" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Quality First", desc: "Every window is manufactured to exacting European standards with premium materials and rigorous quality control.", photoDesc: "Фото: контроль качества на производстве — проверка профиля" },
            { title: "Innovation", desc: "We continuously invest in new technologies to improve thermal performance, security, and ease of use.", photoDesc: "Фото: современное оборудование на заводе DECA" },
            { title: "Customer Satisfaction", desc: "From initial consultation to installation and after-sale service, we ensure every customer is fully satisfied.", photoDesc: "Фото: довольный клиент у новых окон DECA в своём доме" },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-xl border border-border overflow-hidden">
              <PhotoPlaceholder description={v.photoDesc} height="h-48" className="rounded-none border-0" />
              <div className="p-6">
                <h3 className="font-bold text-lg text-text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionTitle badge="Leadership" title="Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Vladimir", role: "Founder & CEO", desc: "15+ years in European window industry. Passionate about making premium products accessible.", photoDesc: "Фото: портрет Владимира, основателя и CEO DECA" },
            { name: "Technical Director", role: "Engineering Lead", desc: "10+ years of window engineering. NFRC certified specialist.", photoDesc: "Фото: портрет технического директора DECA" },
            { name: "Installation Lead", role: "Field Operations", desc: "500+ completed projects across New England. Expert in residential and commercial installation.", photoDesc: "Фото: руководитель монтажной бригады DECA" },
          ].map((m) => (
            <div key={m.name} className="bg-white rounded-xl border border-border overflow-hidden text-center">
              <PhotoPlaceholder description={m.photoDesc} height="h-56" className="rounded-none border-0" />
              <div className="p-6">
                <h3 className="font-semibold text-text-primary text-lg">{m.name}</h3>
                <p className="text-sm text-blue-accent mb-3">{m.role}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Factory */}
      <Section gray>
        <SectionTitle badge="Manufacturing" title="Our Factory in Westfield, MA" subtitle="All DECA products are manufactured at our modern facility in Westfield, Massachusetts." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PhotoPlaceholder description="Фото: внешний вид завода DECA в Вестфилде" height="h-48" />
          <PhotoPlaceholder description="Фото: линия экструзии профилей на заводе" height="h-48" />
          <PhotoPlaceholder description="Фото: сборка стеклопакетов — аргоновая заправка" height="h-48" />
          <PhotoPlaceholder description="Фото: склад готовой продукции с упакованными окнами" height="h-48" />
        </div>
      </Section>



      {/* ═══════ REVIEWS ═══════ */}
      <ReviewsSection />

      {/* ═══════ DELIVERY MAP ═══════ */}
      <DeliveryMapSection />

      <CTAWithDocs
        title="Ready to Work with Us?"
        subtitle="Get your custom order form, window blueprints, and detailed specification — all prepared for your project."
        btnText="Contact Us"
      />

      <StickyCTA />
    </>
  );
}
