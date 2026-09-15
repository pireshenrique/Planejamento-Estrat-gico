const fs = require('fs');
const filePath = './src/components/layout/StrategicReportView.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove leftover of getPublishedReportFileContent:
content = content.replace(/export const PUBLISHED_AT[\s\S]*?\};\n/, '');

// Remove {isEditorial && ( ... )} block in JSX
const editorialMatch = /\{isEditorial && \([\s\S]*?\)\}/;
content = content.replace(editorialMatch, '');

fs.writeFileSync(filePath, content, 'utf-8');
