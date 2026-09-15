import { StrategicPageContext, PageFact } from './types';
import { RENDIMENTO_DATA } from '../economia-brasileira/rendimento';

const kpis = RENDIMENTO_DATA.kpis;

export const RENDIMENTO_BRASILEIRO_PAGE: StrategicPageContext = {
  pageId: 'rendimento-brasileiro',
  pageTitle: 'Rendimento do Brasileiro',
  theme: 'Economia Brasileira',
  subtheme: 'Rendimento do Brasileiro',
  status: 'analyzable',
  description: 'Evolução da renda média real do trabalho, massa salarial e disparidades regionais de rendimento no Brasil.',

  sources: [
    {
      id: 'ibge',
      name: 'IBGE — PNAD Contínua',
      dateStr: 'Trimestre móvel até mai/2026',
      type: 'Dado público'
    }
  ],
  evidenceIds: [],

  factualContent: [
    // KPIs
    {
      id: 'rendimento-brasileiro::kpi::rendimento-medio',
      statement: `${kpis.rendimentoMedio.title}: ${kpis.rendimentoMedio.value} (${kpis.rendimentoMedio.context}). ${kpis.rendimentoMedio.explanation}`,
      kind: 'kpi',
      value: 3726,
      unit: 'R$',
      block: 'KPIs',
      sourceId: 'ibge',
      evidenceId: ''
    },
    {
      id: 'rendimento-brasileiro::kpi::massa-rendimento',
      statement: `${kpis.massaRendimento.title}: ${kpis.massaRendimento.value} (${kpis.massaRendimento.context}). ${kpis.massaRendimento.explanation}`,
      kind: 'kpi',
      value: 377.7,
      unit: 'R$ bilhões',
      block: 'KPIs',
      sourceId: 'ibge',
      evidenceId: ''
    },
    {
      id: 'rendimento-brasileiro::kpi::evolucao-real',
      statement: `${kpis.evolucaoReal.title}: ${kpis.evolucaoReal.value} (${kpis.evolucaoReal.context}). ${kpis.evolucaoReal.explanation}`,
      kind: 'kpi',
      value: 5.7,
      unit: '%',
      block: 'KPIs',
      sourceId: 'ibge',
      evidenceId: ''
    },

    // Rendimento por Região (7 itens)
    ...RENDIMENTO_DATA.regionalIncome.map((item): PageFact => {
      const slug = item.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-');

      return {
        id: `rendimento-brasileiro::regional::${slug}`,
        statement: `Rendimento médio habitual em ${item.name}: R$ ${item.value.toLocaleString('pt-BR')}${item.badge ? ` (${item.badge})` : ''}.`,
        kind: 'distribution',
        group: 'Rendimento por região',
        value: item.value,
        unit: 'R$',
        block: 'Rendimento por Região',
        sourceId: 'ibge',
        evidenceId: ''
      };
    })
  ],

  existingAnalysis: [
    'Acompanhar a desaceleração do crescimento da renda. As projeções indicam avanço do rendimento real do trabalho em 2026, porém em ritmo inferior ao observado em 2025.',
    'Monitorar se o atual patamar de renda se sustenta. O rendimento real permanece elevado em 2026, enquanto a massa salarial continua crescendo, ampliando o volume de renda na economia.',
    'Observar a distribuição dos ganhos. Apesar do avanço médio dos rendimentos, a desigualdade permanece elevada, indicando que a evolução da renda pode gerar impactos distintos entre os diferentes grupos de consumidores.',
    'A manutenção da renda real em níveis mais altos tende a beneficiar a demanda agregada, mas o ritmo de crescimento menor sugere que o impulso sobre o consumo em 2026 pode ser mais moderado.',
    'Diferenças regionais continuam relevantes. As disparidades de renda entre as regiões indicam que o potencial de consumo não cresce de maneira uniforme, o que pode exigir abordagens comerciais e mix de produtos ajustados a cada mercado local.',
    'O aumento da renda real não significa alívio financeiro para todos os perfis. Parte dos ganhos pode ser direcionada para o pagamento de dívidas acumuladas, reduzindo a sobra no orçamento para a compra de novos bens.'
  ]
};
