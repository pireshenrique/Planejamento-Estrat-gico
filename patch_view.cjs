const fs = require('fs');

let content = fs.readFileSync('src/components/layout/StrategicReportView.tsx', 'utf-8');

if (!content.includes('getStrategicPagesContext')) {
  content = content.replace(
    "import { getAllSystemEvidences } from '../../data/evidences/evidencesCatalog';",
    "import { getAllSystemEvidences } from '../../data/evidences/evidencesCatalog';\nimport { getStrategicPagesContext } from '../../data/pages/strategicPagesRegistry';"
  );
}

// Update handleUpdateAnalysis
if (!content.includes('const strategicPages = getStrategicPagesContext();')) {
  content = content.replace(
    "const allEvs = getAllSystemEvidences();\n    const hash = computeEvidencesHash(allEvs);",
    "const allEvs = getAllSystemEvidences();\n    const strategicPages = getStrategicPagesContext();\n    const hash = computeStrategicContextHash(allEvs, strategicPages);"
  );
}

// Same for the other getAllSystemEvidences()
if (content.split('const allEvs = getAllSystemEvidences();').length > 2) {
    const firstOcc = content.indexOf('const allEvs = getAllSystemEvidences();\n    const hash = computeEvidencesHash(allEvs);');
    content = content.replace(
        "const allEvs = getAllSystemEvidences();\n    const hash = computeEvidencesHash(allEvs);",
        "const allEvs = getAllSystemEvidences();\n    const strategicPages = getStrategicPagesContext();\n    const hash = computeStrategicContextHash(allEvs, strategicPages);"
    );
}

fs.writeFileSync('src/components/layout/StrategicReportView.tsx', content);
