import fs from 'fs';

let content = fs.readFileSync('src/data/pages/Eletroeletronico.ts', 'utf-8');

// Replace all sources array entirely to be safe
const newSources = `sources: [
    {
      id: 'abinee-decon',
      name: 'Abinee/Decon',
      dateStr: '2026',
      type: 'Associação'
    },
    {
      id: 'ibge-pim',
      name: 'IBGE / PIM-PF',
      dateStr: '2026',
      type: 'Pesquisa Oficial'
    },
    {
      id: 'abinee',
      name: 'ABINEE',
      dateStr: '2026',
      type: 'Associação'
    },
    {
      id: 'secex',
      name: 'SECEX',
      dateStr: '2026',
      type: 'Dados Oficiais'
    }
  ]
};`;

content = content.replace(/sources: \[[\s\S]*\}\];/, newSources);

fs.writeFileSync('src/data/pages/Eletroeletronico.ts', content);
