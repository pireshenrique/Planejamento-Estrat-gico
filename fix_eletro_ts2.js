import fs from 'fs';

let content = fs.readFileSync('src/data/pages/Eletroeletronico.ts', 'utf-8');

// Fix syntax error of comma and missing sources
content = content.replace(/existingAnalysis: \[\], \/\/ placeholder\n  ,/, 'existingAnalysis: [],');

const newSources = `
    {
      id: 'abinee-decon',
      name: 'Abinee/Decon',
      description: 'Associação Brasileira da Indústria Elétrica e Eletrônica'
    },
    {
      id: 'ibge-pim',
      name: 'IBGE / PIM-PF',
      description: 'Pesquisa Industrial Mensal - Produção Física'
    },
    {
      id: 'abinee',
      name: 'ABINEE',
      description: 'Associação Brasileira da Indústria Elétrica e Eletrônica'
    },
    {
      id: 'secex',
      name: 'SECEX',
      description: 'Secretaria de Comércio Exterior'
    }
  ]
`;

content = content.replace(/sources: \[\n    {\n      id: 'abinee-decon',\n      name: 'Abinee\/Decon',\n      description: 'Associação Brasileira da Indústria Elétrica e Eletrônica'\n    }\n  \]/, `sources: [${newSources}`);

fs.writeFileSync('src/data/pages/Eletroeletronico.ts', content);
