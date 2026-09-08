const fs = require('fs');

const path = 'src/data/evidences/rendimento.ts';
let content = fs.readFileSync(path, 'utf8');

// I will parse the array and re-order it
// Or just do a simple replacement if possible, but parsing AST is safer or just use regex.

const obj3 = `  {
    id: 3,
    tag: 'Desigualdade / UOL',
    dateStr: 'Agosto 2026',
    title: 'Renda média sobe, mas desigualdade permanece estrutural',
    headline: 'O rendimento médio real subiu em 2025, mas o 1% mais rico tinha renda 31,5 vezes superior à dos 50% mais pobres. O relatório do Observatório aponta diferenças relevantes por gênero, raça e região.',
    impacts: [
      'Consumo de itens de maior valor permanece fortemente concentrado.',
      'A ampliação de consumo nas classes baixas esbarra no limite da desigualdade.'
    ],
    source: 'UOL / Observatório Brasileiro das Desigualdades',
    url: 'https://economia.uol.com.br/noticias/redacao/2026/08/12/observatorio-brasileiro-das-desigualdades-2026.ghtm'
  }`;

const obj4 = `  {
    id: 4,
    tag: 'Média Anual / IBGE',
    dateStr: '2025',
    title: '2025: renda fecha o ano em nível recorde',
    headline: 'O IBGE mostra que o rendimento real habitual de todos os trabalhos alcançou R$ 3.560 na média anual de 2025, alta de 5,7% em relação a 2024. É o melhor número para representar o fechamento de 2025.',
    impacts: [
      'Base sólida de poder aquisitivo consolidada no fim do ano anterior.',
      'Permitiu a continuidade do aquecimento da demanda interna no início de 2026.'
    ],
    source: 'Agência de Notícias IBGE',
    url: 'https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/45923-em-2025-vinte-unidades-da-federacao-registram-a-menor-taxa-de-desocupacao-da-serie'
  }`;

const newObj4 = obj4.replace('id: 4', 'id: 3');
const newObj3 = obj3.replace('id: 3', 'id: 4');

content = content.replace(obj3 + ',', newObj4 + ',');
content = content.replace(obj4, newObj3);

fs.writeFileSync(path, content);
console.log('Swapped');
