import fs from 'fs';

let content = fs.readFileSync('src/components/eletroeletronico/ConfiancaConsumidorView.tsx', 'utf-8');

// Adicionar import do iceiData
content = content.replace(
  /import { (.*?) } from 'lucide-react';/,
  "import { $1 } from 'lucide-react';\nimport { iceiData } from '@/data/eletroeletronico/icei';"
);

// linha 360
content = content.replace(/Recuo de 2,2 pontos em relação a março\/26 \(50,1 pts\)/, "Recuo de ${iceiData.variacoes.quedaSetorVsMarco} ponto em relação a ${iceiData.referenciaAnterior} (${iceiData.valores.marco} pts)");

// linha 367
content = content.replace(/48,6 pts/, "{iceiData.valores.industriaGeral} pts");

// linha 370
content = content.replace(/Recuo de 2,3 pontos comparado a março\/26 \(50,9 pts\)/, "Dado referente a ${iceiData.referenciaCurta}");

// linha 377
content = content.replace(/49,6 pts/, "{iceiData.valores.areaEletrica} pts");

// linha 382
content = content.replace(/46,7 pts/, "{iceiData.valores.areaEletronica} pts");

// Fix those template literal replacements
content = content.replace(/Recuo de \$\{iceiData\.variacoes\.quedaSetorVsMarco\} ponto em relação a \$\{iceiData\.referenciaAnterior\} \(\$\{iceiData\.valores\.marco\} pts\)/, "Recuo de {iceiData.variacoes.quedaSetorVsMarco} ponto em relação a {iceiData.referenciaAnterior} ({iceiData.valores.marco} pts)");

content = content.replace(/Dado referente a \$\{iceiData\.referenciaCurta\}/, "Dado referente a {iceiData.referenciaCurta}");

fs.writeFileSync('src/components/eletroeletronico/ConfiancaConsumidorView.tsx', content);
