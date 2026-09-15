import fs from 'fs';

// Producao
let p = fs.readFileSync('src/components/eletroeletronico/ProducaoIndustriaView.tsx', 'utf-8');
p = p.replace(/import { (.*?) } from 'lucide-react';/, "import { $1 } from 'lucide-react';\nimport { producaoData } from '@/data/eletroeletronico/producao';");
p = p.replace(/-4,3%/g, "{producaoData.totais.setor.m2}%");
p = p.replace(/-2,4%/g, "{producaoData.totais.setor.m3}%");
fs.writeFileSync('src/components/eletroeletronico/ProducaoIndustriaView.tsx', p);

// Sondagem
let s = fs.readFileSync('src/components/eletroeletronico/SondagemConjunturalView.tsx', 'utf-8');
s = s.replace(/import { (.*?) } from 'lucide-react';/, "import { $1 } from 'lucide-react';\nimport { sondagemData } from '@/data/eletroeletronico/sondagem';");
s = s.replace(/52%/g, "{sondagemData.vendas.crescimentoAnual}%");
s = s.replace(/76%/g, "{sondagemData.uci.atual}%");
fs.writeFileSync('src/components/eletroeletronico/SondagemConjunturalView.tsx', s);

// Sobretaxas
let sob = fs.readFileSync('src/components/eletroeletronico/ImposicaoSobretaxasView.tsx', 'utf-8');
sob = sob.replace(/import { (.*?) } from 'lucide-react';/, "import { $1 } from 'lucide-react';\nimport { sobretaxasData } from '@/data/eletroeletronico/sobretaxas';");
sob = sob.replace(/37,5%/g, "{sobretaxasData.tarifas.acumulada}%");
fs.writeFileSync('src/components/eletroeletronico/ImposicaoSobretaxasView.tsx', sob);

// Balanço
let b = fs.readFileSync('src/components/eletroeletronico/BalancoComercialView.tsx', 'utf-8');
b = b.replace(/import { (.*?) } from 'lucide-react';/, "import { $1 } from 'lucide-react';\nimport { balancoComercialData } from '@/data/eletroeletronico/balancoComercial';");
b = b.replace(/4,12 bi/g, "{balancoComercialData.exportacoes.valor} bi");
b = b.replace(/25,77 bi/g, "{balancoComercialData.importacoes.valor} bi");
b = b.replace(/21,64 bi/g, "{balancoComercialData.deficit.valor} bi");
fs.writeFileSync('src/components/eletroeletronico/BalancoComercialView.tsx', b);

// Commodities
let c = fs.readFileSync('src/components/eletroeletronico/PrecoCommoditiesView.tsx', 'utf-8');
c = c.replace(/import { (.*?) } from 'lucide-react';/, "import { $1 } from 'lucide-react';\nimport { precoCommoditiesData } from '@/data/eletroeletronico/precoCommodities';");
c = c.replace(/\+45,0%/g, "+{precoCommoditiesData.commodities.aluminio},0%");
fs.writeFileSync('src/components/eletroeletronico/PrecoCommoditiesView.tsx', c);

