const fs = require('fs');

let content = fs.readFileSync('src/components/cenario-habitacional/LaresUnipessoaisView.tsx', 'utf-8');

if (!content.includes('LARES_UNIPESSOAIS_PAGE')) {
  content = content.replace(
    "import { LARES_UNIPESSOAIS_DATA } from '../../data/cenario-habitacional/laresUnipessoais';",
    "import { LARES_UNIPESSOAIS_DATA } from '../../data/cenario-habitacional/laresUnipessoais';\nimport { LARES_UNIPESSOAIS_PAGE } from '../../data/pages/LaresUnipessoais';"
  );
}

if (!content.includes('const getVal =')) {
  content = content.replace(
    "export function LaresUnipessoaisView({ setActivePage }: LaresUnipessoaisViewProps) {",
    "export function LaresUnipessoaisView({ setActivePage }: LaresUnipessoaisViewProps) {\n  const getVal = (id: string) => LARES_UNIPESSOAIS_PAGE.factualContent.find(f => f.id === id)?.value;"
  );
}

const reps = {
  "15 milhões": "{getVal('lares-unipessoais::kpi::total-domicilios')} milhões",
  "currentData.observeNotes.map((note, index) => (": "LARES_UNIPESSOAIS_PAGE.existingAnalysis.slice(0, currentData.observeNotes.length).map((note, index) => (",
  "currentData.lorenzettiImpacts.map((impact, index) => (": "LARES_UNIPESSOAIS_PAGE.existingAnalysis.slice(currentData.observeNotes.length).map((impact, index) => ("
};

for (const [k, v] of Object.entries(reps)) {
  content = content.replace(k, v);
}

fs.writeFileSync('src/components/cenario-habitacional/LaresUnipessoaisView.tsx', content);
