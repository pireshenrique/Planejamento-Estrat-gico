const fs = require('fs');
const filePath = './src/data/strategicReportState.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove the leftover try-catch block from saveStrategicReportData
content = content.replace(/\s*try \{\s*const enriched[\s\S]*?\}\n\}/, '');

fs.writeFileSync(filePath, content, 'utf-8');
