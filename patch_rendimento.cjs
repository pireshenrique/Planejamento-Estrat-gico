const fs = require('fs');

let content = fs.readFileSync('src/components/economia-brasileira/RendimentoBrasileiroView.tsx', 'utf-8');

if (!content.includes('RENDIMENTO_BRASILEIRO_PAGE')) {
  content = content.replace(
    "import { RENDIMENTO_DATA } from '../../data/economia-brasileira/rendimento';",
    "import { RENDIMENTO_DATA } from '../../data/economia-brasileira/rendimento';\nimport { RENDIMENTO_BRASILEIRO_PAGE } from '../../data/pages/RendimentoBrasileiro';"
  );
}

const reps = {
  "<strong>Acompanhar a desaceleração do crescimento da renda.</strong> As projeções indicam avanço do rendimento real do trabalho em 2026, porém em ritmo inferior ao observado em 2025.": "<strong>Acompanhar a desaceleração do crescimento da renda.</strong> {RENDIMENTO_BRASILEIRO_PAGE.existingAnalysis[0].replace('Acompanhar a desaceleração do crescimento da renda. ', '')}",
  "<strong>Monitorar se o atual patamar de renda se sustenta.</strong> O rendimento real permanece elevado em 2026, enquanto a massa salarial continua crescendo, ampliando o volume de renda na economia.": "<strong>Monitorar se o atual patamar de renda se sustenta.</strong> {RENDIMENTO_BRASILEIRO_PAGE.existingAnalysis[1].replace('Monitorar se o atual patamar de renda se sustenta. ', '')}",
  "<strong>Observar a distribuição dos ganhos.</strong> Apesar do avanço médio dos rendimentos, a desigualdade permanece elevada, indicando que a evolução da renda pode gerar impactos distintos entre os diferentes grupos de consumidores.": "<strong>Observar a distribuição dos ganhos.</strong> {RENDIMENTO_BRASILEIRO_PAGE.existingAnalysis[2].replace('Observar a distribuição dos ganhos. ', '')}",
  '"A manutenção da renda real em níveis mais altos tende a beneficiar a demanda agregada, mas o ritmo de crescimento menor sugere que o impulso sobre o consumo em 2026 pode ser mais moderado."': '"{RENDIMENTO_BRASILEIRO_PAGE.existingAnalysis[3]}"',
  "Diferenças regionais continuam relevantes. As disparidades de renda entre as regiões indicam que o potencial de consumo não cresce de maneira uniforme, o que pode exigir abordagens comerciais e mix de produtos ajustados a cada mercado local.": "{RENDIMENTO_BRASILEIRO_PAGE.existingAnalysis[4]}",
  "O aumento da renda real não significa alívio financeiro para todos os perfis. Parte dos ganhos pode ser direcionada para o pagamento de dívidas acumuladas, reduzindo a sobra no orçamento para a compra de novos bens.": "{RENDIMENTO_BRASILEIRO_PAGE.existingAnalysis[5]}"
};

for (const [k, v] of Object.entries(reps)) {
  content = content.replace(k, v);
}

fs.writeFileSync('src/components/economia-brasileira/RendimentoBrasileiroView.tsx', content);
