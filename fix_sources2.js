import fs from 'fs';

let content = fs.readFileSync('src/data/pages/Eletroeletronico.ts', 'utf-8');

// The file ends with:
// sources: [
//   { id: 'abinee-decon', name: 'Abinee/Decon' },
//   { id: 'ibge-pim', name: 'IBGE / PIM-PF' },
//   { id: 'abinee', name: 'ABINEE' },
//   { id: 'secex', name: 'SECEX' }
// ]
// };

content = content.replace(/sources: \[\s*\{\s*id: 'abinee-decon',\s*name: 'Abinee\/Decon'\s*\},[\s\S]*\}\s*\]\s*\};\s*$/, `sources: [
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
};
`);

fs.writeFileSync('src/data/pages/Eletroeletronico.ts', content);
