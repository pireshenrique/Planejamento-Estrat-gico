import fs from 'fs';

let content = fs.readFileSync('src/data/pages/Eletroeletronico.ts', 'utf-8');

// Add missing kind property
content = content.replace(/(id: 'eco-eletroeletronico[^}]+)(statement: '[^']+'),/g, "$1$2,\n      kind: 'indicator',");

// Fix sources
content = content.replace(/description: 'Associação Brasileira da Indústria Elétrica e Eletrônica'/g, "dateStr: '2026',\n      type: 'Associação'");
content = content.replace(/description: 'Pesquisa Industrial Mensal - Produção Física'/g, "dateStr: '2026',\n      type: 'Pesquisa Oficial'");
content = content.replace(/description: 'Secretaria de Comércio Exterior'/g, "dateStr: '2026',\n      type: 'Dados Oficiais'");

// Add description and evidenceIds to context
content = content.replace(/status: 'analyzable',/, "status: 'analyzable',\n  description: 'Análise completa dos indicadores do setor eletroeletrônico em 2026.',\n  evidenceIds: [],");

fs.writeFileSync('src/data/pages/Eletroeletronico.ts', content);
