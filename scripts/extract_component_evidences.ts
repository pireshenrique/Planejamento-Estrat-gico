import fs from 'fs';
import path from 'path';

// Let's find all evidence arrays in components
const dirs = [
  'src/components/ambiente-trabalho',
  'src/components/carreira-geracoes',
  'src/components/cenario-mercadologico',
  'src/components/energia-infraestrutura',
  'src/components/esg',
  'src/components/meio-ambiente-clima',
  'src/components/trabalho-qualificacao'
];

interface ExtractedEvidence {
  id: string;
  tag?: string;
  dateStr?: string;
  title: string;
  headline?: string;
  source: string;
  url: string;
  category?: string;
}

const allExtracted: Record<string, ExtractedEvidence[]> = {};

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (!f.endsWith('.tsx') && !f.endsWith('.ts')) continue;
    const fullPath = path.join(dir, f);
    const content = fs.readFileSync(fullPath, 'utf-8');
    
    // Check if it has evidence objects
    const matches = content.match(/\{\s*id\s*:\s*['"`]([^'"`]+)['"`][^}]+url\s*:\s*['"`](https?:\/\/[^'"`]+)['"`][^}]*\}/gs);
    if (matches) {
      const topicName = f.replace(/View\.(tsx|ts)/, '');
      allExtracted[topicName] = [];
      for (const m of matches) {
        const idM = m.match(/id\s*:\s*['"`]([^'"`]+)['"`]/);
        const titleM = m.match(/title\s*:\s*['"`]([^'"`]+)['"`]/);
        const sourceM = m.match(/source\s*:\s*['"`]([^'"`]+)['"`]/);
        const urlM = m.match(/url\s*:\s*['"`](https?:\/\/[^'"`]+)['"`]/);
        const tagM = m.match(/tag\s*:\s*['"`]([^'"`]+)['"`]/);
        const dateM = m.match(/dateStr\s*:\s*['"`]([^'"`]+)['"`]/);
        const headlineM = m.match(/headline\s*:\s*['"`]([^'"`]+)['"`]/);

        if (titleM && urlM) {
          allExtracted[topicName].push({
            id: idM ? idM[1] : `ev-${Date.now()}`,
            title: titleM[1],
            source: sourceM ? sourceM[1] : '',
            url: urlM[1],
            tag: tagM ? tagM[1] : undefined,
            dateStr: dateM ? dateM[1] : undefined,
            headline: headlineM ? headlineM[1] : undefined,
            category: topicName
          });
        }
      }
    }
  }
}

let totalExtracted = 0;
for (const k in allExtracted) {
  console.log(`${k}: ${allExtracted[k].length} evidences`);
  totalExtracted += allExtracted[k].length;
}
console.log('Total extracted from components:', totalExtracted);

// Write to src/data/evidences/setoriais.ts
const tsContent = `// Evidências Estratégicas Consolidadas dos Temas e Setores
export interface EvidenciaSetorial {
  id: string;
  tag?: string;
  dateStr?: string;
  title: string;
  headline?: string;
  source: string;
  url: string;
  category?: string;
}

export const EVIDENCIAS_SETORIAIS: EvidenciaSetorial[] = ${JSON.stringify(Object.values(allExtracted).flat(), null, 2)};
`;

fs.writeFileSync('src/data/evidences/setoriais.ts', tsContent, 'utf-8');
console.log('Saved src/data/evidences/setoriais.ts successfully!');
