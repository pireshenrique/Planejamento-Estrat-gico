const fs = require('fs');

let content = fs.readFileSync('src/components/layout/StrategicReportView.tsx', 'utf-8');

if (!content.includes("import { getStrategicPagesContext }")) {
  content = content.replace(
    "import { getAllSystemEvidences } from '../../data/evidences/evidencesCatalog';",
    "import { getAllSystemEvidences } from '../../data/evidences/evidencesCatalog';\nimport { getStrategicPagesContext } from '../../data/pages/strategicPagesRegistry';"
  );
}

fs.writeFileSync('src/components/layout/StrategicReportView.tsx', content);
