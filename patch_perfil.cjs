const fs = require('fs');

let content = fs.readFileSync('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'utf-8');

// Insert import
if (!content.includes('PERFIL_CONSUMO_PAGE')) {
  content = content.replace(
    "import { EvidenceCard } from '../layout/EvidenceCard';",
    "import { EvidenceCard } from '../layout/EvidenceCard';\nimport { PERFIL_CONSUMO_PAGE } from '../../data/pages/PerfilConsumo';"
  );
}

// Insert helpers
if (!content.includes('const getVal =')) {
  content = content.replace(
    "export function PerfilConsumoView({ setActivePage }: PerfilConsumoViewProps) {",
    "export function PerfilConsumoView({ setActivePage }: PerfilConsumoViewProps) {\n  const getVal = (id: string) => PERFIL_CONSUMO_PAGE.factualContent.find(f => f.id === id)?.value;\n  const getStr = (id: string) => getVal(id)?.toString().replace('.', ',');"
  );
}

// Replace values
const reps = {
  '>80%</div>': '>{getVal("perfil-consumo::indicador::planejam-compras")}%</div>',
  '>66%</div>': '>{getVal("perfil-consumo::indicador::busca-economia")}%</div>',
  '>45%</div>': '>{getVal("perfil-consumo::indicador::escolhem-barato-marca")}%</div>',
  '>40%</div>': '>{getVal("perfil-consumo::indicador::controle-orcamento")}%</div>',
  '>                  80%': '>                  {getVal("perfil-consumo::indicador::planejam-compras")}%',
  '>                  66%': '>                  {getVal("perfil-consumo::indicador::busca-economia")}%',
  '>                  45%': '>                  {getVal("perfil-consumo::indicador::escolhem-barato-marca")}%',
  '>                  40%': '>                  {getVal("perfil-consumo::indicador::controle-orcamento")}%',
};

for (const [k, v] of Object.entries(reps)) {
  content = content.replace(new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), v);
}

fs.writeFileSync('src/components/cenario-mercadologico/PerfilConsumoView.tsx', content);
