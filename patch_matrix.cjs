const fs = require('fs');

let content = fs.readFileSync('src/components/cenario-mercadologico/JornadaExperienciaView.tsx', 'utf-8');

if (!content.includes('getMeta')) {
  content = content.replace(
    "const getStr = (id: string) => getVal(id)?.toString().replace('.', ',');",
    "const getStr = (id: string) => getVal(id)?.toString().replace('.', ',');\n  const getMeta = (id: string, key: string) => JORNADA_COMPRA_PAGE.factualContent.find(f => f.id === id)?.metadata?.[key];"
  );
}

const replacements = [
  {
    find: /nome:\s*'Loja física',\s*classeA:\s*62.9,\s*classeB:\s*66.2,\s*classeC:\s*71.9,/,
    replace: "nome: 'Loja física',\n      classeA: getMeta('jornada-compra::pesquisa::matriz-loja-fisica', 'classeA'),\n      classeB: getMeta('jornada-compra::pesquisa::matriz-loja-fisica', 'classeB'),\n      classeC: getMeta('jornada-compra::pesquisa::matriz-loja-fisica', 'classeC'),"
  },
  {
    find: /nome:\s*'Sites \/ e-commerces',\s*classeA:\s*47.8,\s*classeB:\s*39.1,\s*classeC:\s*30.7,/,
    replace: "nome: 'Sites / e-commerces',\n      classeA: getMeta('jornada-compra::pesquisa::matriz-ecommerce', 'classeA'),\n      classeB: getMeta('jornada-compra::pesquisa::matriz-ecommerce', 'classeB'),\n      classeC: getMeta('jornada-compra::pesquisa::matriz-ecommerce', 'classeC'),"
  },
  {
    find: /nome:\s*'Sites das empresas fabricantes',\s*classeA:\s*40.4,\s*classeB:\s*30.5,\s*classeC:\s*19.9,/,
    replace: "nome: 'Sites das empresas fabricantes',\n      classeA: getMeta('jornada-compra::pesquisa::matriz-sites-fabricantes', 'classeA'),\n      classeB: getMeta('jornada-compra::pesquisa::matriz-sites-fabricantes', 'classeB'),\n      classeC: getMeta('jornada-compra::pesquisa::matriz-sites-fabricantes', 'classeC'),"
  },
  {
    find: /nome:\s*'YouTube',\s*classeA:\s*38.5,\s*classeB:\s*31.1,\s*classeC:\s*22.0,/,
    replace: "nome: 'YouTube',\n      classeA: getMeta('jornada-compra::pesquisa::matriz-youtube', 'classeA'),\n      classeB: getMeta('jornada-compra::pesquisa::matriz-youtube', 'classeB'),\n      classeC: getMeta('jornada-compra::pesquisa::matriz-youtube', 'classeC'),"
  },
  {
    find: /nome:\s*'Instagram',\s*classeA:\s*35.6,\s*classeB:\s*29.6,\s*classeC:\s*21.6,/,
    replace: "nome: 'Instagram',\n      classeA: getMeta('jornada-compra::pesquisa::matriz-instagram', 'classeA'),\n      classeB: getMeta('jornada-compra::pesquisa::matriz-instagram', 'classeB'),\n      classeC: getMeta('jornada-compra::pesquisa::matriz-instagram', 'classeC'),"
  },
  {
    find: /nome:\s*'Aplicativos de construção\/reforma',\s*classeA:\s*36.9,\s*classeB:\s*17.2,\s*classeC:\s*13.0,/,
    replace: "nome: 'Aplicativos de construção/reforma',\n      classeA: getMeta('jornada-compra::pesquisa::matriz-apps', 'classeA'),\n      classeB: getMeta('jornada-compra::pesquisa::matriz-apps', 'classeB'),\n      classeC: getMeta('jornada-compra::pesquisa::matriz-apps', 'classeC'),"
  }
];

for (const rep of replacements) {
  content = content.replace(rep.find, rep.replace);
}

fs.writeFileSync('src/components/cenario-mercadologico/JornadaExperienciaView.tsx', content);
