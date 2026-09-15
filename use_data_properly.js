import fs from 'fs';

let p = fs.readFileSync('src/components/eletroeletronico/ProducaoIndustriaView.tsx', 'utf-8');
p = p.replace(/-4,3/g, "${producaoData.totais.setor.m2}");
p = p.replace(/-2,4/g, "${producaoData.totais.setor.m3}");
p = p.replace(/'(.*?\$\{producaoData.*?)'/g, "`$1`");
fs.writeFileSync('src/components/eletroeletronico/ProducaoIndustriaView.tsx', p);

let s = fs.readFileSync('src/components/eletroeletronico/SondagemConjunturalView.tsx', 'utf-8');
s = s.replace(/52%/g, "${sondagemData.vendas.crescimentoAnual}%");
s = s.replace(/76%/g, "${sondagemData.uci.atual}%");
s = s.replace(/'(.*?\$\{sondagemData.*?)'/g, "`$1`");
// For JSX parts, it should be {sondagemData.uci.atual}% instead of ${...} but since we used ${...}, let's fix JSX
s = s.replace(/>\$\{sondagemData\.vendas\.crescimentoAnual\}%</g, ">{sondagemData.vendas.crescimentoAnual}%<");
s = s.replace(/>\$\{sondagemData\.uci\.atual\}%</g, ">{sondagemData.uci.atual}%<");
s = s.replace(/<strong>\$\{sondagemData/g, "<strong>{sondagemData");
fs.writeFileSync('src/components/eletroeletronico/SondagemConjunturalView.tsx', s);

let sob = fs.readFileSync('src/components/eletroeletronico/ImposicaoSobretaxasView.tsx', 'utf-8');
sob = sob.replace(/37,5/g, "${sobretaxasData.tarifas.acumulada}");
sob = sob.replace(/'(.*?\$\{sobretaxasData.*?)'/g, "`$1`");
sob = sob.replace(/>\$\{sobretaxasData\.tarifas\.acumulada\}%</g, ">{sobretaxasData.tarifas.acumulada}%<");
sob = sob.replace(/<strong>\$\{sobretaxasData/g, "<strong>{sobretaxasData");
fs.writeFileSync('src/components/eletroeletronico/ImposicaoSobretaxasView.tsx', sob);

