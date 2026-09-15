const fs = require('fs');

let content = fs.readFileSync('src/data/pages/JornadaCompra.ts', 'utf-8');

const replacements = {
  "id: 'jornada-compra::pesquisa::matriz-loja-fisica',": "id: 'jornada-compra::pesquisa::matriz-loja-fisica', metadata: { classeA: 62.9, classeB: 66.2, classeC: 71.9 },",
  "id: 'jornada-compra::pesquisa::matriz-ecommerce',": "id: 'jornada-compra::pesquisa::matriz-ecommerce', metadata: { classeA: 47.8, classeB: 39.1, classeC: 30.7 },",
  "id: 'jornada-compra::pesquisa::matriz-sites-fabricantes',": "id: 'jornada-compra::pesquisa::matriz-sites-fabricantes', metadata: { classeA: 40.4, classeB: 30.5, classeC: 19.9 },",
  "id: 'jornada-compra::pesquisa::matriz-youtube',": "id: 'jornada-compra::pesquisa::matriz-youtube', metadata: { classeA: 38.5, classeB: 31.1, classeC: 22.0 },",
  "id: 'jornada-compra::pesquisa::matriz-instagram',": "id: 'jornada-compra::pesquisa::matriz-instagram', metadata: { classeA: 35.6, classeB: 29.6, classeC: 21.6 },",
  "id: 'jornada-compra::pesquisa::matriz-apps',": "id: 'jornada-compra::pesquisa::matriz-apps', metadata: { classeA: 36.9, classeB: 17.2, classeC: 13.0 },"
};

for (const [k, v] of Object.entries(replacements)) {
  content = content.replace(k, v);
}

fs.writeFileSync('src/data/pages/JornadaCompra.ts', content);
