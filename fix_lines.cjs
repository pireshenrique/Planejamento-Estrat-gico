const fs = require('fs');
const filePath = './src/components/layout/StrategicReportView.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(/\s*\);\n\};\n?$/, '\n    </div>\n  );\n};\n');

fs.writeFileSync(filePath, content, 'utf-8');
