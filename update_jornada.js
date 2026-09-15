const fs = require('fs');

let content = fs.readFileSync('src/components/cenario-mercadologico/JornadaExperienciaView.tsx', 'utf-8');

// Insert import if not exists
if (!content.includes("import { JORNADA_COMPRA_PAGE }")) {
  content = content.replace(
    "import { EvidenceCard, Evidence } from '../layout/EvidenceCard';",
    "import { EvidenceCard, Evidence } from '../layout/EvidenceCard';\nimport { JORNADA_COMPRA_PAGE } from '../../data/pages/JornadaCompra';"
  );
}

// Insert helpers
if (!content.includes("const getVal = ")) {
  content = content.replace(
    "export function JornadaExperienciaView({ setActivePage }: JornadaExperienciaViewProps) {",
    "export function JornadaExperienciaView({ setActivePage }: JornadaExperienciaViewProps) {\n  const getVal = (id: string) => JORNADA_COMPRA_PAGE.factualContent.find(f => f.id === id)?.value;\n  const formatVal = (id: string) => getVal(id)?.toString().replace('.', ',');"
  );
}

content = content.replace(/>\s*86%\s*<\/span>/, '>{getVal("jornada-compra::intencao::busca-melhorar-lar")}%</span>');
content = content.replace(/>\s*82%\s*<\/span>/, '>{getVal("jornada-compra::intencao::obra-12-meses")}%</span>');

fs.writeFileSync('src/components/cenario-mercadologico/JornadaExperienciaView.tsx', content);
