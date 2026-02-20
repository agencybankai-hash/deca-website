#!/usr/bin/env npx tsx
/**
 * DECA Website Design Audit Script
 *
 * Проверяет каждую страницу, секцию и компонент на соответствие
 * эталонному дизайну (LP Tilt & Turn — /lp/tilt-turn).
 *
 * Запуск: npx tsx scripts/design-audit.ts
 *
 * Эталон (Reference):
 *   - Цвета: brand #3854AA, accent #3b5bdb, bg #f8f9fa, border #e9ecef
 *   - Контейнер: max-w-6xl mx-auto (LP) / max-w-7xl mx-auto (main)
 *   - Секции: py-16 px-4 (LP) / py-28 (main sections)
 *   - Карточки: bg-[#f8f9fa] rounded-xl p-6 border border-[#e9ecef]
 *   - Кнопки: AnimatedCTA или bg-[#3b5bdb] hover:bg-[#2f4bc7] rounded-lg
 *   - Тексты: text-[#3854AA] для заголовков, text-gray-600 для описаний
 */

import * as fs from "fs";
import * as path from "path";

// ─── Design Tokens (from globals.css + LP reference) ───
const DESIGN_TOKENS = {
  colors: {
    brand: "#3854AA",
    brandDark: "#2d4590",
    brandDarker: "#243b80",
    brandLight: "#4a66b8",
    accent: "#3b5bdb",
    accentHover: "#2f4bc7",
    bgLight: "#f8f9fa",
    border: "#e9ecef",
    textPrimary: "#1a1b1e",
    textSecondary: "#495057",
    textMuted: "#868e96",
  },
  tailwindAliases: {
    "bg-brand": true, "bg-brand-dark": true, "bg-brand-darker": true,
    "text-brand": true, "text-brand-dark": true,
    "border-border": true, "bg-warm-gray": true,
    "text-text-primary": true, "text-text-secondary": true, "text-text-muted": true,
    "bg-blue-accent": true, "text-blue-accent": true,
    "bg-blue-light": true,
  },
  containers: ["max-w-7xl", "max-w-6xl", "max-w-5xl", "max-w-4xl", "max-w-3xl", "max-w-2xl"],
  sectionPaddings: ["py-28", "py-24", "py-20", "py-16", "py-12", "py-8", "py-6"],
  fontFamily: "Inter",
};

// ─── Severity Levels ───
type Severity = "error" | "warning" | "info";

interface Issue {
  severity: Severity;
  page: string;
  section: string;
  rule: string;
  message: string;
  line?: number;
  suggestion?: string;
}

const issues: Issue[] = [];

function addIssue(severity: Severity, page: string, section: string, rule: string, message: string, line?: number, suggestion?: string) {
  issues.push({ severity, page, section, rule, message, line, suggestion });
}

// ─── File Discovery ───
const SRC_DIR = path.resolve(__dirname, "../src");
const APP_DIR = path.join(SRC_DIR, "app");
const COMPONENTS_DIR = path.join(SRC_DIR, "components");

function getAllFiles(dir: string, ext: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllFiles(full, ext));
    else if (entry.name.endsWith(ext)) results.push(full);
  }
  return results;
}

// ─── Parse file into lines ───
function readLines(filePath: string): string[] {
  return fs.readFileSync(filePath, "utf-8").split("\n");
}

// ─── Utilities ───
function relativePath(filePath: string): string {
  return path.relative(path.resolve(__dirname, ".."), filePath);
}

function extractSections(lines: string[]): { name: string; startLine: number; endLine: number }[] {
  const sections: { name: string; startLine: number; endLine: number }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match section comments like {/* Hero */} or {/* ===== HERO ===== */}
    const commentMatch = line.match(/\{\/\*\s*=*\s*(.+?)\s*=*\s*\*\/\}/);
    if (commentMatch) {
      if (sections.length > 0) sections[sections.length - 1].endLine = i - 1;
      sections.push({ name: commentMatch[1].trim(), startLine: i, endLine: lines.length - 1 });
    }
    // Match <section or <Section
    const sectionTag = line.match(/<(?:section|Section)\s/);
    if (sectionTag && sections.length === 0) {
      sections.push({ name: `Section@L${i + 1}`, startLine: i, endLine: lines.length - 1 });
    }
  }
  return sections;
}

// ═══════════════════════════════════════════════════════
// AUDIT RULES
// ═══════════════════════════════════════════════════════

// RULE 1: Hardcoded colors instead of design tokens
function checkHardcodedColors(filePath: string, lines: string[], pageName: string) {
  const hardcodedColorRegex = /(?:bg|text|border|from|to|via)-\[#([0-9a-fA-F]{3,8})\]/g;
  const tokenMap: Record<string, string> = {
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
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let match;
    while ((match = hardcodedColorRegex.exec(line)) !== null) {
      const hex = match[1].toLowerCase();
      const token = tokenMap[hex];
      if (token) {
        addIssue(
          "warning",
          pageName,
          "file",
          "hardcoded-color",
          `Hardcoded color #${hex} found — use Tailwind token instead`,
          i + 1,
          `Replace with corresponding token: ${token} (e.g., bg-brand, text-brand-dark, bg-warm-gray, border-border)`
        );
      }
    }
  }
}

// RULE 2: Off-brand colors (not in our palette)
function checkOffBrandColors(filePath: string, lines: string[], pageName: string) {
  const colorRegex = /(?:bg|text|border|from|to|via)-\[#([0-9a-fA-F]{6})\]/g;
  const allowedHexes = new Set([
    "3854aa", "2d4590", "243b80", "4a66b8", "5a78c4",
    "f8f9fa", "e9ecef", "1a1b1e", "495057", "868e96",
    "edf2ff", "1b2038", "252a42", "3b5bdb", "2f4bc7",
    "ffffff", "000000",
  ]);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let match;
    while ((match = colorRegex.exec(line)) !== null) {
      const hex = match[1].toLowerCase();
      if (!allowedHexes.has(hex)) {
        addIssue(
          "info",
          pageName,
          "file",
          "off-brand-color",
          `Non-standard color #${hex} found — verify it's intentional`,
          i + 1,
          `Check if this color is part of the design system. Brand palette: #3854AA, #3b5bdb, #f8f9fa, etc.`
        );
      }
    }
  }
}

// RULE 3: Container consistency
function checkContainerConsistency(filePath: string, lines: string[], pageName: string) {
  const containerRegex = /max-w-(7xl|6xl|5xl|4xl|3xl|2xl)/g;
  const containers: { width: string; line: number }[] = [];

  for (let i = 0; i < lines.length; i++) {
    let match;
    while ((match = containerRegex.exec(lines[i])) !== null) {
      containers.push({ width: match[1], line: i + 1 });
    }
  }

  // Check for mixed container widths (7xl for main pages, 6xl for LP is OK)
  const isLP = pageName.includes("lp/");
  const expectedWidth = isLP ? "6xl" : "7xl";
  const nonStandard = containers.filter(c => c.width !== expectedWidth && c.width !== "4xl" && c.width !== "3xl" && c.width !== "2xl");

  if (nonStandard.length > 0 && !isLP) {
    for (const c of nonStandard) {
      if (c.width === "6xl") {
        addIssue(
          "info",
          pageName,
          "layout",
          "container-width",
          `Container max-w-${c.width} — main pages typically use max-w-7xl`,
          c.line,
          `Consider using max-w-7xl for consistency with other main pages`
        );
      }
    }
  }
}

// RULE 4: Section padding consistency
function checkSectionPadding(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check <section or <Section tags
    if (/<(?:section|Section)\s/.test(line) || /className=.*py-/.test(line)) {
      // Section with no vertical padding
      if (/<section\s/.test(line) && !line.includes("py-") && !lines.slice(i, i + 3).join(" ").includes("py-")) {
        // Skip if it's a special section (hero, nav, etc.)
        if (!line.includes("hero") && !line.includes("nav") && !line.includes("footer") && !line.includes("bg-brand")) {
          addIssue(
            "info",
            pageName,
            `section@L${i + 1}`,
            "missing-padding",
            `<section> without vertical padding (py-*) — may cause inconsistent spacing`,
            i + 1,
            `Add py-16 (compact) or py-28 (standard) for consistent vertical rhythm`
          );
        }
      }
    }
  }
}

// RULE 5: Missing mx-auto on containers
function checkMissingCenter(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("max-w-") && !line.includes("mx-auto") && !line.includes("absolute") && !line.includes("relative")) {
      // Check next line for mx-auto
      const nextLine = lines[i + 1] || "";
      if (!nextLine.includes("mx-auto")) {
        addIssue(
          "warning",
          pageName,
          `container@L${i + 1}`,
          "missing-mx-auto",
          `max-w-* found without mx-auto — container won't be centered`,
          i + 1,
          `Add mx-auto to center the container`
        );
      }
    }
  }
}

// RULE 6: Placeholder images still present
function checkPlaceholders(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("PhotoPlaceholder") || line.includes("ImagePlaceholder") || line.includes("VideoPlaceholder")) {
      addIssue(
        "warning",
        pageName,
        `media@L${i + 1}`,
        "placeholder-image",
        `Placeholder component found — needs real image/video`,
        i + 1,
        `Replace with actual product photo or video`
      );
    }
    // Also check for inline placeholders
    if (/фото:|photo:|placeholder|Window Product Image/i.test(line) && !line.trimStart().startsWith("//") && !line.trimStart().startsWith("*")) {
      if (line.includes("className") || line.includes("<span") || line.includes("<div")) {
        addIssue(
          "warning",
          pageName,
          `media@L${i + 1}`,
          "inline-placeholder",
          `Inline placeholder text found — should be replaced with actual content`,
          i + 1
        );
      }
    }
  }
}

// RULE 7: Missing alt text on images
function checkImageAlt(filePath: string, lines: string[], pageName: string) {
  const content = lines.join("\n");
  // <Image ... without alt
  const imgRegex = /<(?:Image|img)\s[^>]*>/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const tag = match[0];
    if (!tag.includes("alt=") || tag.includes('alt=""') || tag.includes("alt={''}")) {
      const lineNum = content.substring(0, match.index).split("\n").length;
      addIssue(
        "error",
        pageName,
        `image@L${lineNum}`,
        "missing-alt",
        `Image without alt text — accessibility issue`,
        lineNum,
        `Add descriptive alt text for screen readers and SEO`
      );
    }
  }
}

// RULE 8: Button/CTA consistency
function checkButtonConsistency(filePath: string, lines: string[], pageName: string) {
  let hasAnimatedCTA = false;
  let hasInlineButtons = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("AnimatedCTA")) hasAnimatedCTA = true;
    // Detect inline styled buttons (not using AnimatedCTA)
    if (/<(?:button|a)\s/.test(line) && /bg-\[#/.test(line) && /rounded/.test(line)) {
      inlineButtons.push(i + 1);
      hasInlineButtons++;
    }
  }

  if (hasAnimatedCTA && hasInlineButtons > 0) {
    addIssue(
      "info",
      pageName,
      "buttons",
      "mixed-button-styles",
      `Mixed button patterns: AnimatedCTA component + ${hasInlineButtons} inline styled buttons`,
      undefined,
      `Consider using AnimatedCTA consistently across the page`
    );
  }
}
const inlineButtons: number[] = [];

// RULE 9: Heading hierarchy
function checkHeadingHierarchy(filePath: string, lines: string[], pageName: string) {
  const headings: { level: number; line: number; text: string }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/<h([1-6])\s/);
    if (match) {
      headings.push({ level: parseInt(match[1]), line: i + 1, text: lines[i].trim().substring(0, 80) });
    }
  }

  // Check for h1 count
  const h1Count = headings.filter(h => h.level === 1).length;
  if (h1Count === 0) {
    addIssue(
      "warning",
      pageName,
      "headings",
      "missing-h1",
      `No <h1> found — every page should have exactly one h1 for SEO`,
      undefined,
      `Add a single <h1> tag for the main page heading`
    );
  } else if (h1Count > 1) {
    addIssue(
      "warning",
      pageName,
      "headings",
      "multiple-h1",
      `${h1Count} <h1> tags found — should have exactly one per page`,
      headings.filter(h => h.level === 1)[1]?.line,
      `Change additional h1 tags to h2`
    );
  }

  // Check for skipped heading levels
  for (let i = 1; i < headings.length; i++) {
    const diff = headings[i].level - headings[i - 1].level;
    if (diff > 1) {
      addIssue(
        "info",
        pageName,
        "headings",
        "skipped-heading-level",
        `Heading level skipped: h${headings[i - 1].level} → h${headings[i].level}`,
        headings[i].line,
        `Use sequential heading levels (h2 → h3, not h2 → h4)`
      );
    }
  }
}

// RULE 10: Missing responsive classes
function checkResponsiveness(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Grid without responsive breakpoint
    if (/grid-cols-[3-6]/.test(line) && !line.includes("md:grid-cols") && !line.includes("lg:grid-cols") && !line.includes("sm:grid-cols")) {
      if (!line.includes("md:") && !line.includes("lg:")) {
        addIssue(
          "warning",
          pageName,
          `grid@L${i + 1}`,
          "non-responsive-grid",
          `grid-cols-* without responsive prefix — will force multi-column on mobile`,
          i + 1,
          `Use md:grid-cols-* or lg:grid-cols-* and default to single column on mobile`
        );
      }
    }

    // Text size too large without responsive prefix
    if (/text-(?:4xl|5xl|6xl)/.test(line) && !line.includes("md:text-") && !line.includes("lg:text-")) {
      if (!/md:|lg:|xl:/.test(line.split("text-")[0]?.slice(-5) || "")) {
        // Check if there's a smaller mobile text nearby
        const hasResponsive = /text-(?:2xl|3xl).*(?:md|lg):text-(?:4xl|5xl|6xl)/.test(line);
        if (!hasResponsive) {
          addIssue(
            "info",
            pageName,
            `typography@L${i + 1}`,
            "large-text-not-responsive",
            `Large text size without responsive scaling detected`,
            i + 1,
            `Use text-2xl md:text-4xl pattern for responsive typography`
          );
        }
      }
    }
  }
}

// RULE 11: Missing metadata (SEO)
function checkMetadata(filePath: string, lines: string[], pageName: string) {
  const content = lines.join("\n");
  const isClientComponent = content.includes('"use client"') || content.includes("'use client'");

  // Server component pages should have metadata export
  if (!isClientComponent && filePath.includes("page.tsx")) {
    if (!content.includes("export const metadata") && !content.includes("export function generateMetadata")) {
      addIssue(
        "warning",
        pageName,
        "seo",
        "missing-metadata",
        `No metadata export found — page needs title and description for SEO`,
        undefined,
        `Add 'export const metadata: Metadata = { title: "...", description: "..." }' or use generateMetadata()`
      );
    }
  }

  // Client component pages — check if they have a separate metadata file
  if (isClientComponent && filePath.includes("page.tsx")) {
    const dir = path.dirname(filePath);
    const hasLayout = fs.existsSync(path.join(dir, "layout.tsx"));
    // If it's the main page.tsx and a client component, metadata should be in layout or via generateMetadata
    if (!hasLayout && !content.includes("metadata")) {
      addIssue(
        "info",
        pageName,
        "seo",
        "client-component-metadata",
        `Client component page — ensure metadata is defined in parent layout.tsx`,
        undefined,
        `Move metadata to a server-side layout.tsx or split into server page + client content component`
      );
    }
  }
}

// RULE 12: TODO / FIXME comments
function checkTodos(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const todoMatch = line.match(/\/\/\s*(TODO|FIXME|HACK|XXX|TEMP)[\s:]+(.+)/i);
    if (todoMatch) {
      addIssue(
        "info",
        pageName,
        `code@L${i + 1}`,
        "todo-comment",
        `${todoMatch[1].toUpperCase()}: ${todoMatch[2].trim()}`,
        i + 1
      );
    }
  }
}

// RULE 13: Form accessibility
function checkFormAccessibility(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Input without label
    if (/<input\s/.test(line) && !line.includes("aria-label") && !line.includes("id=")) {
      // Check surrounding lines for <label>
      const surroundingLines = lines.slice(Math.max(0, i - 3), i + 3).join("\n");
      if (!surroundingLines.includes("<label") && !surroundingLines.includes("aria-label")) {
        addIssue(
          "info",
          pageName,
          `form@L${i + 1}`,
          "input-without-label",
          `<input> without associated <label> or aria-label`,
          i + 1,
          `Add aria-label or associated <label> for accessibility`
        );
      }
    }
  }
}

// RULE 14: Consistent card styling
function checkCardConsistency(filePath: string, lines: string[], pageName: string) {
  const cardPatterns: { pattern: string; line: number }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Detect card-like divs (with rounded + border + bg)
    if (line.includes("rounded") && line.includes("border") && (line.includes("bg-") || line.includes("p-"))) {
      const isCard = line.includes("p-6") || line.includes("p-8") || line.includes("px-6");
      if (isCard) {
        let pattern = "";
        if (line.includes("bg-[#f8f9fa]") || line.includes("bg-warm-gray") || line.includes("bg-gray-50")) pattern = "light-card";
        else if (line.includes("bg-white/5") || line.includes("bg-white/10")) pattern = "glass-card";
        else if (line.includes("bg-white")) pattern = "white-card";
        else pattern = "other-card";
        cardPatterns.push({ pattern, line: i + 1 });
      }
    }
  }

  // Report mixed patterns
  const uniquePatterns = [...new Set(cardPatterns.map(c => c.pattern))];
  if (uniquePatterns.length > 2) {
    addIssue(
      "info",
      pageName,
      "cards",
      "mixed-card-styles",
      `${uniquePatterns.length} different card styling patterns found: ${uniquePatterns.join(", ")}`,
      undefined,
      `Standardize card styles: use bg-warm-gray/rounded-xl/border-border for light, bg-white/5 for dark`
    );
  }
}

// RULE 15: Link without href or empty href
function checkLinks(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/<a\s/.test(line) && (line.includes('href=""') || line.includes("href=''"))) {
      addIssue(
        "warning",
        pageName,
        `link@L${i + 1}`,
        "empty-href",
        `<a> with empty href — breaks navigation and SEO`,
        i + 1,
        `Add proper href or use <button> if it's a click handler`
      );
    }
    if (/<a\s/.test(line) && line.includes('href="#"') && !line.includes('href="#quote') && !line.includes('href="#form')) {
      addIssue(
        "info",
        pageName,
        `link@L${i + 1}`,
        "hash-href",
        `<a href="#"> — likely placeholder link`,
        i + 1,
        `Replace with actual URL or use <button> for actions`
      );
    }
  }
}

// RULE 16: Dark mode text contrast on dark backgrounds
function checkContrast(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Dark bg with potentially low-contrast text
    if ((line.includes("bg-brand") || line.includes("bg-[#3854AA]") || line.includes("bg-slate-dark"))
        && (line.includes("text-gray-600") || line.includes("text-gray-500") || line.includes("text-text-secondary"))) {
      addIssue(
        "error",
        pageName,
        `contrast@L${i + 1}`,
        "low-contrast",
        `Dark background with light-gray text — likely low contrast ratio`,
        i + 1,
        `Use text-white, text-gray-300, or text-white/80 on dark backgrounds`
      );
    }
  }
}

// RULE 17: Missing Breadcrumb on product/inner pages
function checkBreadcrumb(filePath: string, lines: string[], pageName: string) {
  const content = lines.join("\n");
  const isInnerPage = pageName.includes("/") && !pageName.includes("page") && !pageName.includes("lp/");
  const isProductPage = pageName.includes("windows/") || pageName.includes("doors/") || pageName.includes("tilt-turn") || pageName.includes("sliding");

  if (isProductPage && !content.includes("Breadcrumb")) {
    addIssue(
      "warning",
      pageName,
      "navigation",
      "missing-breadcrumb",
      `Product page without Breadcrumb component — hurts SEO and navigation`,
      undefined,
      `Add <Breadcrumb items={[...]} /> at the top of the page`
    );
  }
}

// RULE 18: Missing StickyCTA on pages
function checkStickyCTA(filePath: string, lines: string[], pageName: string) {
  const content = lines.join("\n");
  const isContentPage = !pageName.includes("lp/") && !pageName.includes("quote") && !pageName.includes("calculator");
  const isMainPage = pageName === "page.tsx" || pageName.includes("tilt-turn") || pageName.includes("windows") || pageName.includes("doors") || pageName.includes("sliding");

  if (isMainPage && !content.includes("StickyCTA")) {
    addIssue(
      "info",
      pageName,
      "conversion",
      "missing-sticky-cta",
      `Page without StickyCTA — may reduce conversion rate`,
      undefined,
      `Consider adding <StickyCTA /> for persistent conversion element`
    );
  }
}

// RULE 19: Unused imports
function checkUnusedImports(filePath: string, lines: string[], pageName: string) {
  const importLines: { name: string; line: number }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const importMatch = line.match(/import\s+(?:\{([^}]+)\}|(\w+))\s+from/);
    if (importMatch) {
      const names = (importMatch[1] || importMatch[2] || "").split(",").map(n => n.trim().split(" as ").pop()!.trim()).filter(Boolean);
      for (const name of names) {
        importLines.push({ name, line: i + 1 });
      }
    }
  }

  const contentAfterImports = lines.slice(importLines.length > 0 ? importLines[importLines.length - 1].line : 0).join("\n");

  for (const imp of importLines) {
    // Skip common always-used imports
    if (["React", "useState", "useEffect", "useCallback", "useRef", "useMemo", "type", "Metadata"].includes(imp.name)) continue;
    // Count occurrences after imports
    const regex = new RegExp(`\\b${imp.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
    const matches = contentAfterImports.match(regex);
    if (!matches || matches.length === 0) {
      addIssue(
        "info",
        pageName,
        "code",
        "unused-import",
        `Import '${imp.name}' appears unused`,
        imp.line,
        `Remove unused import to keep code clean`
      );
    }
  }
}

// RULE 20: photoDesc in Russian (placeholder for CMS)
function checkRussianPlaceholders(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/photoDesc:\s*["'`].*[а-яА-Я]/.test(line) || /Фото:/.test(line) || /Заглушка/.test(line)) {
      addIssue(
        "warning",
        pageName,
        `content@L${i + 1}`,
        "russian-placeholder",
        `Russian placeholder text found — needs real content or translation`,
        i + 1,
        `Replace with actual image description or alt text in English`
      );
    }
  }
}

// RULE 21: Console.log statements
function checkConsoleLogs(filePath: string, lines: string[], pageName: string) {
  for (let i = 0; i < lines.length; i++) {
    if (/console\.(log|warn|error|debug)\(/.test(lines[i]) && !lines[i].trimStart().startsWith("//")) {
      addIssue(
        "warning",
        pageName,
        `code@L${i + 1}`,
        "console-log",
        `console.log statement found — remove before production`,
        i + 1
      );
    }
  }
}

// RULE 22: Missing CTA section at bottom of page
function checkBottomCTA(filePath: string, lines: string[], pageName: string) {
  const content = lines.join("\n");
  const isContentPage = pageName.includes("windows") || pageName.includes("doors") || pageName.includes("tilt-turn") || pageName.includes("sliding") || pageName.includes("about") || pageName.includes("performance");

  if (isContentPage && !content.includes("CTAWithDocs") && !content.includes("CTABlock") && !content.includes("quote-form")) {
    addIssue(
      "info",
      pageName,
      "conversion",
      "missing-bottom-cta",
      `Content page without CTA section at bottom — users may not convert`,
      undefined,
      `Add CTAWithDocs or CTABlock near the footer for conversion`
    );
  }
}

// RULE 23: Check for FAQ schema on product pages
function checkFAQSchema(filePath: string, lines: string[], pageName: string) {
  const content = lines.join("\n");
  const isProductPage = pageName.includes("windows/") || pageName.includes("doors/") || pageName.includes("tilt-turn") || pageName.includes("sliding");

  if (isProductPage && !content.includes("FAQPage") && !content.includes("faqSchema")) {
    addIssue(
      "info",
      pageName,
      "seo",
      "missing-faq-schema",
      `Product page without FAQ structured data — missed SEO opportunity`,
      undefined,
      `Add FAQ schema (JSON-LD) for rich search results`
    );
  }
}

// RULE 24: Check hero section quality
function checkHeroQuality(filePath: string, lines: string[], pageName: string) {
  const content = lines.join("\n");
  const isPage = filePath.endsWith("page.tsx") || filePath.endsWith("content.tsx");
  if (!isPage) return;

  // Check for hero with proper structure
  const hasHero = content.includes("PageHero") || content.includes("hero") || content.includes("Hero");
  if (!hasHero && !pageName.includes("lp/") && !pageName.includes("cases/[slug]")) {
    addIssue(
      "info",
      pageName,
      "design",
      "missing-hero",
      `No hero section detected`,
      undefined,
      `Add PageHero or custom hero section for a strong first impression`
    );
  }
}

// RULE 25: Inline styles (should use Tailwind)
function checkInlineStyles(filePath: string, lines: string[], pageName: string) {
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (/style=\{\{/.test(lines[i])) {
      count++;
    }
  }
  if (count > 5) {
    addIssue(
      "info",
      pageName,
      "code",
      "excessive-inline-styles",
      `${count} inline style={{}} usages found — prefer Tailwind utilities`,
      undefined,
      `Convert inline styles to Tailwind classes where possible`
    );
  }
}

// ═══════════════════════════════════════════════════════
// MAIN AUDIT RUNNER
// ═══════════════════════════════════════════════════════

function auditFile(filePath: string) {
  const lines = readLines(filePath);
  const pageName = relativePath(filePath);

  checkHardcodedColors(filePath, lines, pageName);
  checkOffBrandColors(filePath, lines, pageName);
  checkContainerConsistency(filePath, lines, pageName);
  checkSectionPadding(filePath, lines, pageName);
  checkMissingCenter(filePath, lines, pageName);
  checkPlaceholders(filePath, lines, pageName);
  checkImageAlt(filePath, lines, pageName);
  checkButtonConsistency(filePath, lines, pageName);
  checkHeadingHierarchy(filePath, lines, pageName);
  checkResponsiveness(filePath, lines, pageName);
  checkMetadata(filePath, lines, pageName);
  checkTodos(filePath, lines, pageName);
  checkFormAccessibility(filePath, lines, pageName);
  checkCardConsistency(filePath, lines, pageName);
  checkLinks(filePath, lines, pageName);
  checkContrast(filePath, lines, pageName);
  checkBreadcrumb(filePath, lines, pageName);
  checkStickyCTA(filePath, lines, pageName);
  checkUnusedImports(filePath, lines, pageName);
  checkRussianPlaceholders(filePath, lines, pageName);
  checkConsoleLogs(filePath, lines, pageName);
  checkBottomCTA(filePath, lines, pageName);
  checkFAQSchema(filePath, lines, pageName);
  checkHeroQuality(filePath, lines, pageName);
  checkInlineStyles(filePath, lines, pageName);
}

// ─── Run Audit ───
console.log("\n╔══════════════════════════════════════════════════════════╗");
console.log("║          DECA Website Design Audit                      ║");
console.log("║   Reference: /lp/tilt-turn (design standard)            ║");
console.log("╚══════════════════════════════════════════════════════════╝\n");

// Collect all files to audit
const pageFiles = getAllFiles(APP_DIR, ".tsx");
const componentFiles = getAllFiles(COMPONENTS_DIR, ".tsx");
const allFiles = [...pageFiles, ...componentFiles];

console.log(`📁 Scanning ${allFiles.length} files...\n`);

for (const file of allFiles) {
  auditFile(file);
}

// ─── Output Results ───
const errors = issues.filter(i => i.severity === "error");
const warnings = issues.filter(i => i.severity === "warning");
const infos = issues.filter(i => i.severity === "info");

// Group by page
const byPage = new Map<string, Issue[]>();
for (const issue of issues) {
  const key = issue.page;
  if (!byPage.has(key)) byPage.set(key, []);
  byPage.get(key)!.push(issue);
}

console.log("═══════════════════════════════════════════════════════════");
console.log("                     AUDIT RESULTS");
console.log("═══════════════════════════════════════════════════════════\n");

for (const [page, pageIssues] of byPage) {
  const pageErrors = pageIssues.filter(i => i.severity === "error").length;
  const pageWarnings = pageIssues.filter(i => i.severity === "warning").length;
  const pageInfos = pageIssues.filter(i => i.severity === "info").length;

  console.log(`\n📄 ${page}`);
  console.log(`   🔴 ${pageErrors} errors | 🟡 ${pageWarnings} warnings | 🔵 ${pageInfos} info`);
  console.log("   " + "─".repeat(55));

  for (const issue of pageIssues) {
    const icon = issue.severity === "error" ? "🔴" : issue.severity === "warning" ? "🟡" : "🔵";
    const lineInfo = issue.line ? `:${issue.line}` : "";
    console.log(`   ${icon} [${issue.rule}] ${issue.message}`);
    if (issue.line) console.log(`      └─ Line ${issue.line}`);
    if (issue.suggestion) console.log(`      💡 ${issue.suggestion}`);
  }
}

// ─── Summary ───
console.log("\n\n═══════════════════════════════════════════════════════════");
console.log("                     SUMMARY");
console.log("═══════════════════════════════════════════════════════════");
console.log(`\n   Total files scanned: ${allFiles.length}`);
console.log(`   Total issues found:  ${issues.length}`);
console.log(`   🔴 Errors:   ${errors.length}`);
console.log(`   🟡 Warnings: ${warnings.length}`);
console.log(`   🔵 Info:     ${infos.length}`);

// Top issues by rule
const byRule = new Map<string, number>();
for (const issue of issues) {
  byRule.set(issue.rule, (byRule.get(issue.rule) || 0) + 1);
}
const topRules = [...byRule.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);

console.log("\n   Top issues by category:");
for (const [rule, count] of topRules) {
  console.log(`   · ${rule}: ${count}`);
}

console.log("\n   📊 Design system compliance score:");
const maxScore = allFiles.length * 25; // 25 checks per file max
const deductions = errors.length * 10 + warnings.length * 3 + infos.length * 1;
const score = Math.max(0, Math.round((1 - deductions / maxScore) * 100));
console.log(`   ████████████████████ ${score}%\n`);

// ─── Save JSON report ───
const reportPath = path.resolve(__dirname, "../design-audit-report.json");
fs.writeFileSync(reportPath, JSON.stringify({
  timestamp: new Date().toISOString(),
  filesScanned: allFiles.length,
  summary: { errors: errors.length, warnings: warnings.length, info: infos.length, score },
  issuesByRule: Object.fromEntries(byRule),
  issues: issues.map(i => ({ ...i })),
}, null, 2));

console.log(`   📋 Full report saved to: design-audit-report.json`);
console.log("═══════════════════════════════════════════════════════════\n");
