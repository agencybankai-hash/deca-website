const r = require('../design-audit-report.json');
const grouped = {};
for (const i of r.issues) {
  if (!grouped[i.rule]) grouped[i.rule] = [];
  grouped[i.rule].push({ page: i.page, line: i.line, message: i.message, severity: i.severity });
}
console.log('=== MISSING H1 ===');
for (const i of (grouped['missing-h1'] || [])) console.log(i.page);
console.log('\n=== HARDCODED COLORS ===');
for (const i of (grouped['hardcoded-color'] || [])) console.log(i.page + ':' + i.line + ' ' + i.message);
console.log('\n=== OFF-BRAND COLORS ===');
for (const i of (grouped['off-brand-color'] || [])) console.log(i.page + ':' + i.line + ' ' + i.message);
console.log('\n=== SKIPPED HEADING LEVELS ===');
for (const i of (grouped['skipped-heading-level'] || [])) console.log(i.page + ':' + i.line + ' ' + i.message);
console.log('\n=== NON-RESPONSIVE GRID ===');
for (const i of (grouped['non-responsive-grid'] || [])) console.log(i.page + ':' + i.line + ' ' + i.message);
console.log('\n=== MISSING FAQ SCHEMA ===');
for (const i of (grouped['missing-faq-schema'] || [])) console.log(i.page);
console.log('\n=== MISSING SERVICE ICONS ===');
for (const i of (grouped['missing-service-icons'] || [])) console.log(i.page);
console.log('\n=== LARGE TEXT NO RESPONSIVE ===');
for (const i of (grouped['large-text-no-responsive'] || [])) console.log(i.page + ':' + i.line);
console.log('\n=== ALL INFO RULES ===');
const infoRules = {};
for (const i of r.issues.filter(x => x.severity === 'info')) {
  if (!infoRules[i.rule]) infoRules[i.rule] = 0;
  infoRules[i.rule]++;
}
for (const [rule, count] of Object.entries(infoRules)) console.log(rule + ': ' + count);
