const fs = require('fs');

const file = 'src/components/economia-brasileira/RendimentoBrasileiroView.tsx';
let content = fs.readFileSync(file, 'utf8');

// The bottom section was changed to:
// {RENDIMENTO_EVIDENCES.length > 0 && (
// And RENDIMENTO_EVIDENCES.map((ev) => (
// And "Evidências e Notícias"

// Let's restore the bottom section to be exactly like EmpregosView for the rendering logic:
content = content.replace(/\{RENDIMENTO_EVIDENCES\.length > 0 && \(/g, '{RENDIMENTO_EVIDENCES.length > 3 && (');
content = content.replace(/RENDIMENTO_EVIDENCES\.map\(\(ev\) => \(/g, 'RENDIMENTO_EVIDENCES.slice(3).map((ev) => (');
content = content.replace(/>Evidências e Notícias</g, '>Outras Notícias<');

fs.writeFileSync(file, content);
console.log('Done slice fix');
