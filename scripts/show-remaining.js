const r = require('../design-audit-report.json');
const grouped = {};
for (const i of r.issues) {
  if (!grouped[i.rule]) grouped[i.rule] = [];
  grouped[i.rule].push({ page: i.page, line: i.line, message: i.message });
}
console.log('=== STILL MISSING H1 (7) ===');
for (const i of (grouped['missing-h1'] || [])) console.log('  ' + i.page);
console.log('\n=== STILL SKIPPED HEADINGS (8) ===');
for (const i of (grouped['skipped-heading-level'] || [])) console.log('  ' + i.page + ':' + i.line + ' ' + i.message);
console.log('\n=== STILL HARDCODED COLORS (12) ===');
for (const i of (grouped['hardcoded-color'] || [])) console.log('  ' + i.page + ':' + i.line + ' ' + i.message);
console.log('\n=== MISSING FAQ SCHEMA (7) ===');
for (const i of (grouped['missing-faq-schema'] || [])) console.log('  ' + i.page);
console.log('\n=== MISSING SERVICE ICONS (6) ===');
for (const i of (grouped['missing-service-icons'] || [])) console.log('  ' + i.page);
console.log('\n=== MISSING HERO (4) ===');
for (const i of (grouped['missing-hero'] || [])) console.log('  ' + i.page);
console.log('\n=== MISSING BOTTOM CTA (4) ===');
for (const i of (grouped['missing-bottom-cta'] || [])) console.log('  ' + i.page);
console.log('\n=== MISSING BREADCRUMB (4) ===');
for (const i of (grouped['missing-breadcrumb'] || [])) console.log('  ' + i.page);
console.log('\n=== OFF-BRAND COLORS ===');
for (const i of (grouped['off-brand-color'] || [])) console.log('  ' + i.page + ':' + i.line + ' ' + i.message);
console.log('\n=== LARGE TEXT NO RESPONSIVE ===');
for (const i of (grouped['large-text-no-responsive'] || [])) console.log('  ' + i.page + ':' + i.line);
console.log('\n=== EXCESSIVE INLINE STYLES ===');
for (const i of (grouped['excessive-inline-styles'] || [])) console.log('  ' + i.page + ' ' + i.message);
