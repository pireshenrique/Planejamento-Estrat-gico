const fs = require('fs');
const filePath = './src/data/portalMetrics.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the canonicalId logic
content = content.replace(
  /const canonicalId = ev\.id \? `\$\{topicPrefix\}::\$\{ev\.id\}` : `\$\{topicPrefix\}::\$\{titleKey\.slice\(0, 15\)\}-\$\{Date\.now\(\)\}-\$\{Math\.floor\(Math\.random\(\) \* 1000\)\}`;/,
  'const canonicalId = ev.id ? ev.id : `ev-${topicPrefix}-${titleKey.replace(/\\s+/g, \'-\').slice(0, 15)}`;'
);

fs.writeFileSync(filePath, content, 'utf-8');
