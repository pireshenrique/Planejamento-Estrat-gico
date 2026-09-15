const fs = require('fs');
let view = fs.readFileSync('src/components/layout/StrategicReportView.tsx', 'utf-8');

// Also need to pass strategicPages in fetch to /api/strategic-report
if (!view.includes('strategicPages: strategicPages,')) {
    view = view.replace(
        "evidencesCatalog: allEvs.map((e)",
        "strategicPages: strategicPages,\n          evidencesCatalog: allEvs.map((e)"
    );
}

// replace computeEvidencesHash with computeStrategicContextHash in imports
view = view.replace(/computeEvidencesHash/g, 'computeStrategicContextHash');

fs.writeFileSync('src/components/layout/StrategicReportView.tsx', view);

let state = fs.readFileSync('src/data/strategicReportState.ts', 'utf-8');
state = state.replace(
    "export function computeEvidencesHash(evidences: { id?: string; title: string; source: string; url?: string }[]): string {",
    "export function computeStrategicContextHash(evidences: { id?: string; title: string; source: string; url?: string }[], strategicPages?: any[]): string {\n  let pagesPart = '';\n  if (strategicPages) {\n    const pagesData = strategicPages.filter(p => p.status !== 'placeholder').map(p => {\n      return `${p.pageId}|${p.factualContent.map(f => `${f.id}:${f.value}`).join(',')}|${p.existingAnalysis.join(',')}|${p.sources.join(',')}`;\n    }).join('||');\n    pagesPart = pagesData;\n  }\n"
);
// wait, the length condition:
state = state.replace(
    "  if (!Array.isArray(evidences) || evidences.length === 0) {\n    return 'EV-0-EMPTY';\n  }",
    "  if ((!Array.isArray(evidences) || evidences.length === 0) && !strategicPages?.length) {\n    return 'EV-0-EMPTY';\n  }"
);
state = state.replace(
    "const sortedStrings = validEvidences",
    "const sortedStrings = (validEvidences"
);
state = state.replace(
    "    .join('|');",
    "    .join('|')) + '|PAGES:' + pagesPart;"
);

fs.writeFileSync('src/data/strategicReportState.ts', state);
