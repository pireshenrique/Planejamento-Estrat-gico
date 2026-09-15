const fs = require('fs');

let content = fs.readFileSync('src/components/economia-brasileira/juros/JurosView.tsx', 'utf-8');

if (!content.includes('JUROS_SELIC_PAGE')) {
  content = content.replace(
    "import { JUROS_DATA } from '../../../data/economia-brasileira/juros';",
    "import { JUROS_DATA } from '../../../data/economia-brasileira/juros';\nimport { JUROS_SELIC_PAGE } from '../../../data/pages/JurosSelic';"
  );
}

if (!content.includes('const getVal =')) {
  content = content.replace(
    "export function JurosView({ setActivePage }: JurosViewProps) {",
    "export function JurosView({ setActivePage }: JurosViewProps) {\n  const getVal = (id: string) => JUROS_SELIC_PAGE.factualContent.find(f => f.id === id)?.value?.toString().replace('.', ',');"
  );
}

const reps = {
  "value={JUROS_DATA.kpis.focus.value}": "value={`${getVal('juros-selic::kpi::focus')}%`}",
};

for (const [k, v] of Object.entries(reps)) {
  content = content.replace(k, v);
}

fs.writeFileSync('src/components/economia-brasileira/juros/JurosView.tsx', content);
