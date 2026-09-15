const fs = require('fs');

let content = fs.readFileSync('src/components/economia-brasileira/endividamento/EndividamentoFamiliasView.tsx', 'utf-8');

if (!content.includes('ENDIVIDAMENTO_FAMILIAS_PAGE')) {
  content = content.replace(
    "import { ENDIVIDAMENTO_DATA } from '../../../data/economia-brasileira/endividamento';",
    "import { ENDIVIDAMENTO_DATA } from '../../../data/economia-brasileira/endividamento';\nimport { ENDIVIDAMENTO_FAMILIAS_PAGE } from '../../../data/pages/EndividamentoFamilias';"
  );
}

const reps = {
  "Acompanhar a evolução do endividamento das famílias. Em julho de 2026, 82% das famílias possuíam algum tipo de dívida, enquanto 29,5% do orçamento médio estava comprometido com pagamentos.": "{ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[0]}",
  "Monitorar a trajetória da inadimplência. Apesar do endividamento recorde, a inadimplência estava em 29,8%; para o 3º trimestre de 2026, os bancos projetam piora desse indicador.": "{ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[1]}",
  "Observar o custo e a duração das dívidas. Juros elevados, especialmente no crédito rotativo, e o prolongamento das dívidas podem dificultar a redução do comprometimento financeiro das famílias.": "{ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[2]}",
  "O elevado comprometimento da renda pode tornar o consumidor mais sensível ao preço e às condições de pagamento, especialmente em compras de maior valor.": "{ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[3]}",
  "Juros elevados podem favorecer decisões de compra mais cautelosas, aumentando a importância de propostas com boa relação entre preço, benefício e durabilidade.": "{ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[4]}",
  "O impacto do endividamento tende a variar entre os perfis de consumidor, reforçando a necessidade de acompanhar diferenças de renda, capacidade de pagamento e sensibilidade a preço.": "{ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[5]}",
  '"O elevado endividamento pode reduzir a flexibilidade financeira das famílias, tornando preço, valor percebido e condições de pagamento fatores relevantes para a demanda."': '"{ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[6]}"'
};

for (const [k, v] of Object.entries(reps)) {
  content = content.replace(k, v);
}

fs.writeFileSync('src/components/economia-brasileira/endividamento/EndividamentoFamiliasView.tsx', content);
