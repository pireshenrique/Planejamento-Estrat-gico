const fs = require('fs');
const filePath = './src/components/layout/HomeView.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(/subscribeToReportUpdates,\s*/, '');
content = content.replace(/const unsubscribe = subscribeToReportUpdates\(\(updated\) => \{[\s\S]*?\}\);\n\n    return \(\) => unsubscribe\(\);/g, '');

fs.writeFileSync(filePath, content, 'utf-8');
