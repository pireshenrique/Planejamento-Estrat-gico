const fs = require('fs');

let content = fs.readFileSync('src/components/layout/StrategicReportView.tsx', 'utf-8');

// The error is on line 776
content = content.replace(/fact\.source/g, "fact.sourceId");

fs.writeFileSync('src/components/layout/StrategicReportView.tsx', content);
