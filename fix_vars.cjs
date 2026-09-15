const fs = require('fs');

let content = fs.readFileSync('src/components/layout/StrategicReportView.tsx', 'utf-8');

const target = "  const [showSourcesModal, setShowSourcesModal] = useState(false);";
const repl = "  const allEvs = getAllSystemEvidences();\n  const strategicPages = getStrategicPagesContext();\n\n  const [showSourcesModal, setShowSourcesModal] = useState(false);";

content = content.replace(target, repl);

// we can remove local declarations of allEvs and strategicPages inside handleUpdateAnalysis or let them shadow. Shadowing is fine.

fs.writeFileSync('src/components/layout/StrategicReportView.tsx', content);
