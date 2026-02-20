#!/usr/bin/env node
/**
 * DECA Website Design Audit Script
 *
 * Проверяет каждую страницу, секцию и компонент на соответствие
 * эталонному дизайну (LP Tilt & Turn — /lp/tilt-turn).
 *
 * Запуск: node scripts/design-audit.js
 *
 * Эталон (Reference):
 *   - Цвета: brand #3854AA, accent #3b5bdb, bg #f8f9fa, border #e9ecef
 *   - Контейнер: max-w-6xl mx-auto (LP) / max-w-7xl mx-auto (main)
 *   - Секции: py-16 px-4 (LP) / py-28 (main sections)
 *   - Карточки: bg-[#f8f9fa] rounded-xl p-6 border border-[#e9ecef]
 *   - Кнопки: AnimatedCTA или bg-[#3b5bdb] hover:bg-[#2f4bc7] rounded-lg
 *   - Тексты: text-[#3854AA] для заголовков, text-gray-600 для описаний
 */

const fs = require("fs");
const path = require("path");

const SCRIPT_DIR = __dirname;
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const APP_DIR = path.join(SRC_DIR, "app");
const COMPONENTS_DIR = path.join(SRC_DIR, "components");

// ─── Allowed color palette ───
const ALLOWED_HEX = new Set([
  "3854aa", "2d4590", "243b80", "4a66b8", "5a78c4",
  "f8f9fa", "e9ecef", "1a1b1e", "495057", "868e96",
  "edf2ff", "1b2038", "252a42", "3b5bdb", "2f4bc7",
  "ffffff", "000000",
  "e8873a", "d4792f", // orange accent (brand complementary)
]);

const TOKEN_MAP = {
  "3854aa": "brand / blue-accent",
  "2d4590": "brand-dark / blue-hover",
  "243b80": "brand-darker",
  "4a66b8": "brand-light",
  "5a78c4": "brand-lighter",
  "f8f9fa": "warm-gray",
  "e9ecef": "border",
  "1a1b1e": "text-primary",
  "495057": "text-secondary",
  "868e96": "text-muted",
  "edf2ff": "blue-light",
  "1b2038": "slate-dark",
  "252a42": "slate",
  "3b5bdb": "accent",
  "2f4bc7": "accent-hover",
};

// ─── Issue collector ───
const issues = [];

function addIssue(severity, page, section, rule, message, line, suggestion) {
  issues.push({ severity, page, section, rule, message, line: line || null, suggestion: suggestion || null });
}

// ─── File utils ───
function getAllFiles(dir, ext) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllFiles(full, ext));
    else if (entry.name.endsWith(ext)) results.push(full);
  }
  return results;
}

function rel(filePath) {
  return path.relative(PROJECT_ROOT, filePath);
}

// ═══════════════════════════════════════════════════════
//  25 AUDIT RULES
// ═══════════════════════════════════════════════════════

// 1. Hardcoded colors that have design tokens
function rule_hardcodedColors(lines, pg) {
  const re = /(?:bg|text|border|from|to|via)-\[#([0-9a-fA-F]{3,8})\]/g;
  for (let i = 0; i < lines.length; i++) {
    let m;
    while ((m = re.exec(lines[i])) !== null) {
      const hex = m[1].toLowerCase();
      if (TOKEN_MAP[hex]) {
        addIssue("warning", pg, "file", "hardcoded-color",
          `Hardcoded #${hex} → use token: ${TOKEN_MAP[hex]}`, i + 1,
          `Replace e.g. bg-[#${hex}] with bg-brand / text-brand-dark etc.`);
      }
    }
  }
}

// 2. Off-brand colors
function rule_offBrandColors(lines, pg) {
  const re = /(?:bg|text|border|from|to|via)-\[#([0-9a-fA-F]{6})\]/g;
  for (let i = 0; i < lines.length; i++) {
    let m;
    while ((m = re.exec(lines[i])) !== null) {
      const hex = m[1].toLowerCase();
      if (!ALLOWED_HEX.has(hex)) {
        addIssue("info", pg, "file", "off-brand-color",
          `Non-standard color #${hex} — verify intentional`, i + 1,
          `Brand palette: #3854AA, #3b5bdb, #f8f9fa, #e9ecef`);
      }
    }
  }
}

// 3. Container consistency
function rule_containers(lines, pg) {
  const isLP = pg.includes("lp/");
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/max-w-(7xl|6xl|5xl|4xl|3xl|2xl)/);
    if (m && !isLP && m[1] === "6xl") {
      addIssue("info", pg, "layout", "container-width",
        `max-w-6xl — main pages typically use max-w-7xl`, i + 1);
    }
  }
}

// 4. Placeholder images
function rule_placeholders(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("PhotoPlaceholder") || line.includes("ImagePlaceholder") || line.includes("VideoPlaceholder")) {
      addIssue("warning", pg, `media@L${i+1}`, "placeholder-image",
        `Placeholder component → needs real image/video`, i + 1);
    }
    if (/Window Product Image|Фото:.*заглушка/i.test(line) && (line.includes("className") || line.includes("<span"))) {
      addIssue("warning", pg, `media@L${i+1}`, "inline-placeholder",
        `Inline placeholder text → replace with real content`, i + 1);
    }
  }
}

// 5. Image alt text
function rule_imageAlt(lines, pg) {
  const content = lines.join("\n");
  const re = /<(?:Image|img)\s[^>]*>/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const tag = m[0];
    if (!tag.includes("alt=") || tag.includes('alt=""') || tag.includes("alt={''}")) {
      const lineNum = content.substring(0, m.index).split("\n").length;
      addIssue("error", pg, `image@L${lineNum}`, "missing-alt",
        `Image without alt text — accessibility + SEO issue`, lineNum,
        `Add descriptive alt text`);
    }
  }
}

// 6. Heading hierarchy
function rule_headings(lines, pg) {
  // Skip components, loading states, layouts, and pages that get h1 from child components
  const skipH1Check = pg.includes("components/") || pg.includes("loading.tsx") || pg.includes("layout.tsx")
    || pg.includes("blog-content") || pg.includes("calculator/page")
    || pg === "src/app/page.tsx"          // h1 from home-content.tsx
    || pg === "src/app/blog/page.tsx"     // h1 from PageHero
    || pg === "src/app/locations/page.tsx" // h1 from PageHero
    || pg === "src/app/quote/page.tsx";   // h1 from QuoteForm
  const headings = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/<h([1-6])[\s>]/);
    if (m) headings.push({ level: parseInt(m[1]), line: i + 1 });
  }
  const h1s = headings.filter(h => h.level === 1);
  if (h1s.length === 0 && !skipH1Check) {
    addIssue("warning", pg, "headings", "missing-h1",
      `No <h1> found — page needs one for SEO`);
  } else if (h1s.length > 1) {
    addIssue("warning", pg, "headings", "multiple-h1",
      `${h1s.length} <h1> tags — should be exactly one`, h1s[1].line);
  }
  for (let i = 1; i < headings.length; i++) {
    if (headings[i].level - headings[i-1].level > 1) {
      addIssue("info", pg, "headings", "skipped-heading-level",
        `h${headings[i-1].level} → h${headings[i].level} — level skipped`, headings[i].line);
    }
  }
}

// 7. Non-responsive grids
function rule_responsive(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/grid-cols-[3-6]/.test(line) && !/md:|lg:|sm:/.test(line)) {
      addIssue("warning", pg, `grid@L${i+1}`, "non-responsive-grid",
        `grid-cols without responsive prefix → forced multi-col on mobile`, i + 1,
        `Use md:grid-cols-3 and default single column`);
    }
  }
}

// 8. Missing metadata
function rule_metadata(fp, lines, pg) {
  if (!fp.endsWith("page.tsx")) return;
  const content = lines.join("\n");
  const isClient = content.includes('"use client"') || content.includes("'use client'");
  if (!isClient && !content.includes("export const metadata") && !content.includes("generateMetadata")) {
    addIssue("warning", pg, "seo", "missing-metadata",
      `No metadata export — add title + description for SEO`);
  }
}

// 9. TODO/FIXME comments
function rule_todos(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/\/\/\s*(TODO|FIXME|HACK|XXX|TEMP)[\s:]+(.+)/i);
    if (m) {
      addIssue("info", pg, `code@L${i+1}`, "todo-comment",
        `${m[1].toUpperCase()}: ${m[2].trim()}`, i + 1);
    }
  }
}

// 10. Form accessibility (inputs without labels)
function rule_formA11y(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    if (/<input\s/.test(lines[i]) && !lines[i].includes("aria-label") && !lines[i].includes("id=")) {
      const ctx = lines.slice(Math.max(0, i-3), i+3).join("\n");
      if (!ctx.includes("<label") && !ctx.includes("aria-label")) {
        addIssue("info", pg, `form@L${i+1}`, "input-no-label",
          `<input> without <label> or aria-label`, i + 1);
      }
    }
  }
}

// 11. Links with empty/hash href
function rule_links(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    if (/<a\s/.test(lines[i]) && (lines[i].includes('href=""') || lines[i].includes("href=''"))) {
      addIssue("warning", pg, `link@L${i+1}`, "empty-href",
        `<a> with empty href — broken link`, i + 1);
    }
    if (/<a\s/.test(lines[i]) && lines[i].includes('href="#"') && !/href="#(quote|form|calc)/.test(lines[i])) {
      addIssue("info", pg, `link@L${i+1}`, "hash-href",
        `<a href="#"> — likely placeholder`, i + 1);
    }
  }
}

// 12. Low contrast text on dark backgrounds
function rule_contrast(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Skip bg-brand with opacity modifiers like bg-brand/[0.04] — those are nearly transparent
    if (line.includes("bg-brand/") || line.includes("bg-brand-dark/") || line.includes("bg-[#3854AA]/")) continue;
    if ((line.includes("bg-brand") || line.includes("bg-[#3854AA]") || line.includes("bg-slate-dark"))
        && (line.includes("text-gray-600") || line.includes("text-gray-500") || line.includes("text-text-secondary"))) {
      addIssue("error", pg, `contrast@L${i+1}`, "low-contrast",
        `Dark bg + gray text — low contrast`, i + 1,
        `Use text-white or text-gray-300 on dark backgrounds`);
    }
  }
}

// 13. Missing Breadcrumb on product pages
function rule_breadcrumb(lines, pg) {
  if (pg.includes("loading.tsx")) return;
  const content = lines.join("\n");
  const isProduct = (pg.includes("windows/") || pg.includes("doors/") || (pg.includes("tilt-turn") && !pg.includes("lp/")) || pg.includes("sliding")) && pg.endsWith("page.tsx");
  if (isProduct && !content.includes("Breadcrumb")) {
    addIssue("warning", pg, "navigation", "missing-breadcrumb",
      `Product page without Breadcrumb — hurts SEO`);
  }
}

// 14. Missing StickyCTA on key pages
function rule_stickyCTA(lines, pg) {
  const content = lines.join("\n");
  const isKey = (pg.includes("page.tsx") || pg.includes("content.tsx")) &&
    (pg.includes("windows") || pg.includes("doors") || pg.includes("tilt-turn") || pg.includes("sliding") || pg === "src/app/home-content.tsx");
  if (isKey && !content.includes("StickyCTA")) {
    addIssue("info", pg, "conversion", "missing-sticky-cta",
      `Key page without StickyCTA — may reduce conversions`);
  }
}

// 15. Russian placeholder descriptions
function rule_russianPlaceholders(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    if (/photoDesc:\s*["'`].*[\u0400-\u04FF]/.test(lines[i]) || /Фото:/.test(lines[i]) || /Заглушка/.test(lines[i])) {
      addIssue("warning", pg, `content@L${i+1}`, "russian-placeholder",
        `Russian placeholder text — needs real content`, i + 1);
    }
  }
}

// 16. Console.log left in code
function rule_consoleLogs(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    if (/console\.(log|warn|error|debug)\(/.test(lines[i]) && !lines[i].trimStart().startsWith("//")) {
      addIssue("warning", pg, `code@L${i+1}`, "console-log",
        `console.log — remove before production`, i + 1);
    }
  }
}

// 17. Missing bottom CTA on content pages
function rule_bottomCTA(lines, pg) {
  if (pg.includes("loading.tsx")) return;
  const content = lines.join("\n");
  const isContent = (pg.includes("windows") || pg.includes("doors") || pg.includes("tilt-turn") || pg.includes("sliding") || pg.includes("about") || pg.includes("performance")) && pg.endsWith("page.tsx");
  if (isContent && !pg.includes("lp/") && !content.includes("CTAWithDocs") && !content.includes("CTABlock") && !content.includes("quote-form")) {
    addIssue("info", pg, "conversion", "missing-bottom-cta",
      `Content page without bottom CTA section`);
  }
}

// 18. Missing FAQ schema on product pages
function rule_faqSchema(lines, pg) {
  if (pg.includes("loading.tsx")) return;
  const content = lines.join("\n");
  // Only check actual product detail pages (with a subfolder like entry-doors/, upvc-windows/, etc.)
  const isProductDetail = pg.endsWith("page.tsx") && (
    /windows\/\w+-windows\/page\.tsx$/.test(pg) ||
    /doors\/\w+-doors\/page\.tsx$/.test(pg) ||
    /sliding-doors\/page\.tsx$/.test(pg)
  );
  if (isProductDetail && !content.includes("FAQPage") && !content.includes("faqSchema")) {
    addIssue("info", pg, "seo", "missing-faq-schema",
      `Product page without FAQ schema — missed SEO opportunity`);
  }
}

// 19. Inline styles count
function rule_inlineStyles(lines, pg) {
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (/style=\{\{/.test(lines[i])) count++;
  }
  if (count > 8) {
    addIssue("info", pg, "code", "excessive-inline-styles",
      `${count} inline style={{}} usages — prefer Tailwind utilities`);
  }
}

// 20. Missing mx-auto on max-w containers
function rule_missingCenter(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    if (/max-w-\d/.test(lines[i]) && !lines[i].includes("mx-auto") && !lines[i].includes("absolute")) {
      const next = lines[i + 1] || "";
      if (!next.includes("mx-auto") && !lines[i].includes("overflow")) {
        addIssue("warning", pg, `layout@L${i+1}`, "missing-mx-auto",
          `max-w-* without mx-auto — container not centered`, i + 1);
      }
    }
  }
}

// 21. Button style consistency check
function rule_buttons(lines, pg) {
  let hasAnimatedCTA = false;
  let inlineCount = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("AnimatedCTA")) hasAnimatedCTA = true;
    if (/<(?:button|a)\s/.test(lines[i]) && /bg-\[#/.test(lines[i]) && /rounded/.test(lines[i])) {
      inlineCount++;
    }
  }
  if (hasAnimatedCTA && inlineCount > 0) {
    addIssue("info", pg, "buttons", "mixed-button-styles",
      `Mixed: AnimatedCTA + ${inlineCount} inline buttons — consider standardizing`);
  }
}

// 22. Section padding check
function rule_sectionPadding(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    if (/<section\s/.test(lines[i]) && !lines[i].includes("py-") && !lines[i].includes("hero") && !lines[i].includes("nav")) {
      const block = lines.slice(i, Math.min(i + 3, lines.length)).join(" ");
      if (!block.includes("py-")) {
        addIssue("info", pg, `section@L${i+1}`, "missing-section-padding",
          `<section> without vertical padding`, i + 1,
          `Add py-16 or py-28 for consistent spacing`);
      }
    }
  }
}

// 23. Hero section presence
function rule_heroPresence(fp, lines, pg) {
  if (!fp.endsWith("page.tsx") && !fp.endsWith("content.tsx")) return;
  const content = lines.join("\n");
  if (pg.includes("lp/") || pg.includes("[slug]") || pg.includes("calculator") || pg.includes("loading.tsx")) return;
  // Pages that get hero from imported components
  if (pg === "src/app/page.tsx" || pg === "src/app/quote/page.tsx") return;
  if (!content.includes("PageHero") && !content.includes("hero") && !content.includes("Hero") && !content.includes("<h1") && !content.includes("HomeContent")) {
    addIssue("info", pg, "design", "missing-hero",
      `No hero section detected — pages should have a strong opening`);
  }
}

// 24. Check for ServiceIcons on product pages
function rule_serviceIcons(lines, pg) {
  if (pg.includes("loading.tsx")) return; // skip loading states
  const content = lines.join("\n");
  const isProduct = (pg.includes("windows/") || pg.includes("doors/") || pg.includes("sliding")) && pg.endsWith("page.tsx");
  if (isProduct && !content.includes("ServiceIcons")) {
    addIssue("info", pg, "design", "missing-service-icons",
      `Product page without ServiceIcons strip (Delivery/Support/USA/Collab)`);
  }
}

// 25. Large text not responsive
function rule_textResponsive(lines, pg) {
  for (let i = 0; i < lines.length; i++) {
    if (/text-(?:4xl|5xl|6xl)/.test(lines[i])) {
      const line = lines[i];
      if (!/text-(?:xl|2xl|3xl).*(?:md|lg):text-(?:4xl|5xl|6xl)/.test(line) && !/(?:md|lg):text-(?:4xl|5xl|6xl)/.test(line)) {
        if (/className/.test(line)) {
          addIssue("info", pg, `typography@L${i+1}`, "large-text-no-responsive",
            `Large text without responsive scaling`, i + 1,
            `Use text-2xl md:text-4xl pattern`);
        }
      }
    }
  }
}

// ═══════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════

function auditFile(fp) {
  const lines = fs.readFileSync(fp, "utf-8").split("\n");
  const pg = rel(fp);

  rule_hardcodedColors(lines, pg);
  rule_offBrandColors(lines, pg);
  rule_containers(lines, pg);
  rule_placeholders(lines, pg);
  rule_imageAlt(lines, pg);
  rule_headings(lines, pg);
  rule_responsive(lines, pg);
  rule_metadata(fp, lines, pg);
  rule_todos(lines, pg);
  rule_formA11y(lines, pg);
  rule_links(lines, pg);
  rule_contrast(lines, pg);
  rule_breadcrumb(lines, pg);
  rule_stickyCTA(lines, pg);
  rule_russianPlaceholders(lines, pg);
  rule_consoleLogs(lines, pg);
  rule_bottomCTA(lines, pg);
  rule_faqSchema(lines, pg);
  rule_inlineStyles(lines, pg);
  rule_missingCenter(lines, pg);
  rule_buttons(lines, pg);
  rule_sectionPadding(lines, pg);
  rule_heroPresence(fp, lines, pg);
  rule_serviceIcons(lines, pg);
  rule_textResponsive(lines, pg);
}

console.log("");
console.log("╔══════════════════════════════════════════════════════════╗");
console.log("║          DECA Website — Design Audit                    ║");
console.log("║   Reference: /lp/tilt-turn                              ║");
console.log("║   25 Rules · Colors · Layout · SEO · A11y · Conversion  ║");
console.log("╚══════════════════════════════════════════════════════════╝");
console.log("");

const pageFiles = getAllFiles(APP_DIR, ".tsx");
const componentFiles = getAllFiles(COMPONENTS_DIR, ".tsx");
const allFiles = [...pageFiles, ...componentFiles];

console.log(`📁 Scanning ${allFiles.length} files...\n`);

for (const f of allFiles) auditFile(f);

// ─── Results ───
const errors = issues.filter(i => i.severity === "error");
const warnings = issues.filter(i => i.severity === "warning");
const infos = issues.filter(i => i.severity === "info");

const byPage = {};
for (const iss of issues) {
  if (!byPage[iss.page]) byPage[iss.page] = [];
  byPage[iss.page].push(iss);
}

console.log("═══════════════════════════════════════════════════════════");
console.log("                     RESULTS BY FILE");
console.log("═══════════════════════════════════════════════════════════");

for (const [page, list] of Object.entries(byPage)) {
  const e = list.filter(i => i.severity === "error").length;
  const w = list.filter(i => i.severity === "warning").length;
  const inf = list.filter(i => i.severity === "info").length;

  console.log(`\n📄 ${page}`);
  console.log(`   🔴 ${e} errors | 🟡 ${w} warnings | 🔵 ${inf} info`);
  console.log("   " + "─".repeat(55));

  for (const iss of list) {
    const icon = iss.severity === "error" ? "🔴" : iss.severity === "warning" ? "🟡" : "🔵";
    console.log(`   ${icon} [${iss.rule}] ${iss.message}`);
    if (iss.line) console.log(`      └─ Line ${iss.line}`);
    if (iss.suggestion) console.log(`      💡 ${iss.suggestion}`);
  }
}

// ─── Summary ───
console.log("\n\n═══════════════════════════════════════════════════════════");
console.log("                       SUMMARY");
console.log("═══════════════════════════════════════════════════════════");
console.log(`\n   Files scanned:  ${allFiles.length}`);
console.log(`   Issues found:   ${issues.length}`);
console.log(`   🔴 Errors:      ${errors.length}`);
console.log(`   🟡 Warnings:    ${warnings.length}`);
console.log(`   🔵 Info:        ${infos.length}`);

const byRule = {};
for (const iss of issues) byRule[iss.rule] = (byRule[iss.rule] || 0) + 1;
const topRules = Object.entries(byRule).sort((a, b) => b[1] - a[1]).slice(0, 10);

console.log("\n   Top issues:");
for (const [rule, count] of topRules) {
  console.log(`   · ${rule}: ${count}`);
}

const maxScore = allFiles.length * 25;
const deductions = errors.length * 10 + warnings.length * 3 + infos.length * 1;
const score = Math.max(0, Math.round((1 - deductions / maxScore) * 100));
const bar = "█".repeat(Math.round(score / 5)) + "░".repeat(20 - Math.round(score / 5));
console.log(`\n   Design compliance: ${bar} ${score}%\n`);

// ─── Save JSON ───
const reportPath = path.join(PROJECT_ROOT, "design-audit-report.json");
fs.writeFileSync(reportPath, JSON.stringify({
  timestamp: new Date().toISOString(),
  filesScanned: allFiles.length,
  summary: { errors: errors.length, warnings: warnings.length, info: infos.length, score },
  issuesByRule: byRule,
  issues,
}, null, 2));

console.log(`   📋 Full report: design-audit-report.json`);
console.log("═══════════════════════════════════════════════════════════\n");
