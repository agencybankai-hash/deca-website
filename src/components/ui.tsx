import Link from "next/link";

/* ===== Section wrapper ===== */
export function Section({
  children,
  className = "",
  dark = false,
  gray = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  gray?: boolean;
}) {
  const bg = dark ? "bg-navy-950 text-white" : gray ? "bg-warm-gray" : "bg-white";
  return (
    <section className={`py-20 ${bg} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

/* ===== Section Title ===== */
export function SectionTitle({
  badge,
  title,
  subtitle,
  light = false,
  align = "center",
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`${textAlign} mb-12`}>
      {badge && (
        <span className={`inline-block text-xs font-semibold tracking-wider uppercase mb-3 ${light ? "text-blue-accent/70" : "text-blue-accent"}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-lg leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-text-secondary"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ===== Feature Card ===== */
export function FeatureCard({
  icon,
  title,
  description,
  href,
  tag,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  tag?: string;
}) {
  const inner = (
    <div className={`bg-white rounded-xl border border-border p-6 h-full transition-all hover:shadow-lg hover:border-blue-accent/30 ${href ? "cursor-pointer" : ""}`}>
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      {tag && (
        <span className="inline-block text-xs font-semibold text-blue-accent bg-blue-light px-2.5 py-1 rounded mb-3">
          {tag}
        </span>
      )}
      <h3 className="font-semibold text-text-primary text-lg mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      {href && (
        <span className="inline-block mt-4 text-sm font-medium text-blue-accent">
          Learn more &rarr;
        </span>
      )}
    </div>
  );
  if (href) {
    return <Link href={href}>{inner}</Link>;
  }
  return inner;
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

/* ===== CTA Block (dark navy, matches "Got Questions" from design) ===== */
export function CTABlock({
  title,
  subtitle,
  btnText,
  btnHref = "/quote",
}: {
  title: string;
  subtitle: string;
  btnText: string;
  btnHref?: string;
}) {
  return (
    <section className="bg-navy-900 text-white py-20">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-white/60 text-lg mb-8">{subtitle}</p>
        <Link
          href={btnHref}
          className="inline-block bg-blue-accent hover:bg-blue-hover text-white px-8 py-3.5 rounded-md font-semibold transition-colors"
        >
          {btnText}
        </Link>
      </div>
    </section>
  );
}

/* ===== Breadcrumb ===== */
export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <div className="bg-warm-gray border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-text-muted">
        <Link href="/" className="hover:text-blue-accent transition-colors">Home</Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-text-muted/50">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-blue-accent transition-colors">{item.label}</Link>
            ) : (
              <span className="text-text-primary font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== Page Hero (dark navy with gradient, matches design concept) ===== */
export function PageHero({
  title,
  subtitle,
  badge,
  children,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 opacity-80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-accent mb-4">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/* ===== Product Image Placeholder ===== */
export function ImagePlaceholder({ label = "Image", height = "h-64" }: { label?: string; height?: string }) {
  return (
    <div className={`bg-gray-100 rounded-xl ${height} flex items-center justify-center text-text-muted text-sm border border-border`}>
      [{label}]
    </div>
  );
}
