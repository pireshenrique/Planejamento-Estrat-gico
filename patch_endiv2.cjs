const fs = require('fs');

let content = fs.readFileSync('src/components/economia-brasileira/endividamento/EndividamentoFamiliasView.tsx', 'utf-8');

if (!content.includes('const getVal =')) {
  content = content.replace(
    "export function EndividamentoFamiliasView({ setActivePage }: EndividamentoFamiliasViewProps) {",
    "export function EndividamentoFamiliasView({ setActivePage }: EndividamentoFamiliasViewProps) {\n  const getVal = (id: string) => ENDIVIDAMENTO_FAMILIAS_PAGE.factualContent.find(f => f.id === id)?.value?.toString().replace('.', ',');"
  );
}

const reps = {
  "value={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.value}": "value={`${getVal('endividamento-familias::kpi::bacen')}%`}",
  "value={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.value}": "value={`${getVal('endividamento-familias::kpi::familias-endividadas')}%`}",
  "value={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.value}": "value={`${getVal('endividamento-familias::kpi::renda-comprometida')}%`}"
};

for (const [k, v] of Object.entries(reps)) {
  content = content.replace(k, v);
}

fs.writeFileSync('src/components/economia-brasileira/endividamento/EndividamentoFamiliasView.tsx', content);
