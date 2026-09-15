import fs from 'fs';

const files = [
  'SondagemConjunturalView.tsx',
  'ProducaoIndustriaView.tsx',
  'ImposicaoSobretaxasView.tsx'
];

files.forEach(f => {
  const p = 'src/components/eletroeletronico/' + f;
  let text = fs.readFileSync(p, 'utf-8');
  // replace literal {someData.foo} with actual data if inside a single quote string
  // actually, since I don't know exactly where, I'll just change the occurrences back to the numbers or use template literals.
  
  if (f === 'SondagemConjunturalView.tsx') {
    text = text.replace(/'• Vendas e Encomendas: \{sondagemData\.vendas\.crescimentoAnual\}%/g, "'• Vendas e Encomendas: 52%");
    text = text.replace(/para \{sondagemData\.uci\.atual\}% em maio/g, "para 76% em maio");
  }
  if (f === 'ProducaoIndustriaView.tsx') {
    text = text.replace(/\{producaoData\.totais\.setor\.m2\}/g, "-4,3");
    text = text.replace(/\{producaoData\.totais\.setor\.m3\}/g, "-2,4");
  }
  if (f === 'ImposicaoSobretaxasView.tsx') {
    text = text.replace(/\{sobretaxasData\.tarifas\.acumulada\}/g, "37,5");
  }
  
  fs.writeFileSync(p, text);
});
