const fs = require('fs');

let content = fs.readFileSync('src/components/economia-brasileira/RendimentoBrasileiroView.tsx', 'utf-8');

if (!content.includes('const getVal =')) {
  content = content.replace(
    "export const RendimentoBrasileiroView: React.FC<RendimentoBrasileiroViewProps> = ({ setActivePage }) => {",
    "export const RendimentoBrasileiroView: React.FC<RendimentoBrasileiroViewProps> = ({ setActivePage }) => {\n  const getVal = (id: string) => RENDIMENTO_BRASILEIRO_PAGE.factualContent.find(f => f.id === id)?.value;"
  );
}

const reps = {
  "value={RENDIMENTO_DATA.kpis.rendimentoMedio.value}": "value={`R$ ${getVal('rendimento-brasileiro::kpi::rendimento-medio')?.toString().replace('.', ',')}`}"
};

for (const [k, v] of Object.entries(reps)) {
  content = content.replace(k, v);
}

fs.writeFileSync('src/components/economia-brasileira/RendimentoBrasileiroView.tsx', content);
