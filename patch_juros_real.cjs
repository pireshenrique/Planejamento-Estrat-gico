const fs = require('fs');

let content = fs.readFileSync('src/components/economia-brasileira/juros/JurosRealView.tsx', 'utf-8');

if (!content.includes('JUROS_REAL_PAGE')) {
  content = content.replace(
    "} from '../../../data/economia-brasileira/jurosReal';",
    "} from '../../../data/economia-brasileira/jurosReal';\nimport { JUROS_REAL_PAGE } from '../../../data/pages/JurosReal';"
  );
}

if (!content.includes('const getVal =')) {
  content = content.replace(
    "export function JurosRealView({ setActivePage }: JurosRealViewProps) {",
    "export function JurosRealView({ setActivePage }: JurosRealViewProps) {\n  const getVal = (id: string) => JUROS_REAL_PAGE.factualContent.find(f => f.id === id)?.value?.toString().replace('.', ',');"
  );
}

const reps = {
  "value={JUROS_REAL_DATA.kpis.atual.value}": "value={`${getVal('juros-real::kpi::atual')}%`}",
  "{JUROS_REAL_DATA.strategicAnalysis.observe.summary}": "{JUROS_REAL_PAGE.existingAnalysis[0]}",
  "JUROS_REAL_DATA.strategicAnalysis.observe.notes.map((note, index) => (": "JUROS_REAL_PAGE.existingAnalysis.slice(1, 4).map((note, index) => (",
  "{JUROS_REAL_DATA.strategicAnalysis.companyImpact.summary}": "{JUROS_REAL_PAGE.existingAnalysis[4]}",
  "JUROS_REAL_DATA.strategicAnalysis.companyImpact.notes.map((note, index) => (": "JUROS_REAL_PAGE.existingAnalysis.slice(5).map((note, index) => ("
};

for (const [k, v] of Object.entries(reps)) {
  content = content.replace(k, v);
}

fs.writeFileSync('src/components/economia-brasileira/juros/JurosRealView.tsx', content);
