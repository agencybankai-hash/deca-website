const r = require('../design-audit-report.json');
const grouped = {};
for (const i of r.issues) {
  if (!grouped[i.rule]) grouped[i.rule] = [];
  grouped[i.rule].push({ page: i.page, line: i.line, message: i.message, severity: i.severity });
}
console.log('=== LOW CONTRAST (errors) ===');
for (const i of (grouped['low-contrast'] || [])) console.log('  ' + i.page + ':' + i.line);
console.log('\n=== MISSING SERVICE ICONS ===');
for (const i of (grouped['missing-service-icons'] || [])) console.log('  ' + i.page);
console.log('\n=== MISSING FAQ SCHEMA ===');
for (const i of (grouped['missing-faq-schema'] || [])) console.log('  ' + i.page);
console.log('\n=== EXCESSIVE INLINE STYLES ===');
for (const i of (grouped['excessive-inline-styles'] || [])) console.log('  ' + i.page + ' — ' + i.message);
console.log('\n=== MISSING SECTION PADDING ===');
for (const i of (grouped['missing-section-padding'] || [])) console.log('  ' + i.page + ':' + i.line);
console.log('\n=== MISSING MX-AUTO ===');
for (const i of (grouped['missing-mx-auto'] || [])) console.log('  ' + i.page + ':' + i.line);
console.log('\n=== MIXED BUTTON STYLES ===');
for (const i of (grouped['mixed-button-styles'] || [])) console.log('  ' + i.page);
console.log('\n=== TODO COMMENTS ===');
for (const i of (grouped['todo-comment'] || [])) console.log('  ' + i.page + ':' + i.line + ' ' + i.message);
console.log('\n=== MISSING HERO ===');
for (const i of (grouped['missing-hero'] || [])) console.log('  ' + i.page);
