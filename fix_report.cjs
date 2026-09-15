const fs = require('fs');
const filePath = './src/components/layout/StrategicReportView.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove imports
content = content.replace(/\s*saveStrategicReportData,/, '');
content = content.replace(/\s*subscribeToReportUpdates,/, '');
content = content.replace(/\s*isEditorialMode/, '');

// Remove subscribe usage
content = content.replace(/const unsubscribe = subscribeToReportUpdates\(\(updated\) => \{[\s\S]*?\}\);\n\n    return \(\) => unsubscribe\(\);/, '');

// Remove setIsEditorial and isEditorial usage if any remaining
content = content.replace(/setIsEditorial\(.*\);/, '');
content = content.replace(/const \[isEditorial, setIsEditorial\] = useState\(.*\);/, '');

fs.writeFileSync(filePath, content, 'utf-8');
