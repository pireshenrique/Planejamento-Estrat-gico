import fs from 'fs';

const files = [
  'BalancoComercialView.tsx',
  'ImposicaoSobretaxasView.tsx',
  'PrecoCommoditiesView.tsx',
  'ProducaoIndustriaView.tsx',
  'SondagemConjunturalView.tsx'
];

files.forEach(f => {
  const p = 'src/components/eletroeletronico/' + f;
  let text = fs.readFileSync(p, 'utf-8');
  text = text.replace(/@\/data\/eletroeletronico\//g, '../../data/eletroeletronico/');
  fs.writeFileSync(p, text);
});
