import Link from "next/link";

/* ===== Photo Placeholder (Russian description) ===== */
export function PhotoPlaceholder({
  description,
  height = "h-64",
  className = "",
}: {
  description: string;
  height?: string;
  className?: string;
}) {
  return (
    <div className={`bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl ${height} flex flex-col items-center justify-center text-center p-6 border border-border ${className}`}>
      <svg className="w-10 h-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
      <span className="text-gray-400 text-xs leading-relaxed max-w-[200px]">{description}</span>
    </div>
  );
}

/* ===== Video Placeholder ===== */
export function VideoPlaceholder({ description }: { description: string }) {
  return (
    <div className="bg-black/90 rounded-xl aspect-video flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/50 to-brand/30" />
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 mx-auto backdrop-blur">
          <svg className="w-8 h-8 text-white/80 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-white/40 text-xs">{description}</span>
      </div>
    </div>
  );
}

/* ===== Section wrapper ===== */
export function Section({ children, className = "", dark = false, gray = false, id }: { children: React.ReactNode; className?: string; dark?: boolean; gray?: boolean; id?: string }) {
  const bg = dark ? "bg-brand text-white" : gray ? "bg-warm-gray" : "bg-white";
  return (
    <section id={id} className={`py-20 ${bg} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

/* ===== Section Title ===== */
export function SectionTitle({ badge, title, subtitle, light = false, align = "center" }: { badge?: string; title: string; subtitle?: string; light?: boolean; align?: "center" | "left" }) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`${textAlign} mb-12`}>
      {badge && <span className={`inline-block text-xs font-semibold tracking-wider uppercase mb-3 ${light ? "text-blue-accent/70" : "text-blue-accent"}`}>{badge}</span>}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-text-primary"}`}>{title}</h2>
      {subtitle && <p className={`max-w-2xl text-lg leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-text-secondary"}`}>{subtitle}</p>}
    </div>
  );
}

/* ===== Feature Card ===== */
export function FeatureCard({ icon, title, description, href, tag }: { icon?: React.ReactNode; title: string; description: string; href?: string; tag?: string }) {
  const inner = (
    <div className={`bg-white rounded-xl border border-border p-6 h-full transition-all hover:shadow-lg hover:border-blue-accent/30 ${href ? "cursor-pointer group" : ""}`}>
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      {tag && <span className="inline-block text-xs font-semibold text-blue-accent bg-blue-light px-2.5 py-1 rounded mb-3">{tag}</span>}
      <h3 className="font-semibold text-text-primary text-lg mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      {href && <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-blue-accent group-hover:gap-2.5 transition-all">Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>}
    </div>
  );
  if (href) return <Link href={href}>{inner}</Link>;
  return inner;
}

/* ===== Product Card (matches Figma "Our Products") ===== */
export function ProductCard({ title, subtitle, href, photoDesc }: { title: string; subtitle: string; href: string; photoDesc: string }) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl border border-border overflow-hidden transition-all hover:shadow-xl hover:border-blue-accent/20">
        <PhotoPlaceholder description={photoDesc} height="h-56" className="rounded-none border-0" />
        <div className="p-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-blue-accent transition-colors">{title}</h3>
            <p className="text-sm text-text-secondary">{subtitle}</p>
          </div>
          <div className="shrink-0 w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center group-hover:bg-blue-accent transition-colors">
            <svg className="w-5 h-5 text-blue-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ===== Stat Card ===== */
export function StatCard({ value, label, light = false }: { value: string; label: string; light?: boolean }) {
  return (
    <div className="text-center py-4">
      <div className={`text-3xl md:text-4xl font-bold mb-1 ${light ? "text-white" : "text-blue-accent"}`}>{value}</div>
      <div className={`text-sm ${light ? "text-white/60" : "text-text-secondary"}`}>{label}</div>
    </div>
  );
}

/* ===== CTA Block ("Got Questions?" from Figma) ===== */
export function CTABlock({ title, subtitle, btnText, btnHref = "/quote", variant = "navy" }: { title: string; subtitle: string; btnText: string; btnHref?: string; variant?: "navy" | "blue" }) {
  const bg = variant === "blue" ? "bg-brand-light" : "bg-brand";
  return (
    <section className={`${bg} text-white py-20`}>
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-white/60 text-lg mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={btnHref} className="inline-block bg-white text-brand hover:bg-gray-100 px-8 py-3.5 rounded font-semibold transition-colors">{btnText}</Link>
          <a href="tel:+14137714457" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            (413) 771-4457
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===== Service Icons Row ("Exceptional Service" from Figma) ===== */
export function ServiceIcons() {
  const items = [
    { title: "Faster Delivery", desc: "Local manufacturing means shorter lead times" },
    { title: "Localized Support", desc: "On-site consultations and after-sale service" },
    { title: "Made in the USA", desc: "Quality manufacturing in Westfield, MA" },
    { title: "Ease of Collaboration", desc: "Streamlined process from quote to installation" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {items.map((item) => (
        <div key={item.title} className="text-center">
          <div className="w-14 h-14 rounded-full bg-blue-accent/10 flex items-center justify-center mx-auto mb-4 text-blue-accent">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h4 className="font-semibold text-text-primary text-sm mb-1">{item.title}</h4>
          <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ===== Expert Guide Card ===== */
export function GuideCard({ title, desc, href, photoDesc }: { title: string; desc: string; href: string; photoDesc: string }) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
        <PhotoPlaceholder description={photoDesc} height="h-40" className="rounded-none border-0" />
        <div className="p-5">
          <h4 className="font-semibold text-text-primary mb-2 group-hover:text-blue-accent transition-colors">{title}</h4>
          <p className="text-sm text-text-muted leading-relaxed line-clamp-2">{desc}</p>
        </div>
      </div>
    </Link>
  );
}

/* ===== Breadcrumb ===== */
export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.decawindows.com/" },
    ...items.map((item, i) => ({ "@type": "ListItem", position: i + 2, name: item.label, item: item.href ? `https://www.decawindows.com${item.href}` : undefined })),
  ];
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbItems };
  return (
    <div className="bg-warm-gray border-b border-border">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-text-muted">
        <Link href="/" className="hover:text-blue-accent transition-colors">Home</Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-text-muted/50">/</span>
            {item.href ? <Link href={item.href} className="hover:text-blue-accent transition-colors">{item.label}</Link> : <span className="text-text-primary font-medium">{item.label}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== Page Hero ===== */
export function PageHero({ title, subtitle, badge, children }: { title: string; subtitle?: string; badge?: string; children?: React.ReactNode }) {
  return (
    <section className="bg-brand relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          {badge && <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-4">{badge}</span>}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/* ===== ImagePlaceholder (legacy compat) ===== */
export function ImagePlaceholder({ label = "Image", height = "h-64" }: { label?: string; height?: string }) {
  return <PhotoPlaceholder description={label} height={height} />;
}
