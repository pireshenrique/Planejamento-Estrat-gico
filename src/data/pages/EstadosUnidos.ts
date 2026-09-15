import { StrategicPageContext } from './types';
import { EUA_EVIDENCES } from '../evidences/eua';

/**
 * ESTADOS UNIDOS — Economia Mundial
 *
 * Página de inteligência sobre política monetária, taxas tarifárias e investimentos em infraestrutura/IA nos EUA.
 */
export const ESTADOS_UNIDOS_PAGE: StrategicPageContext = {
  pageId: 'estados-unidos',
  portalRouteId: "geo-america-norte",
  pageTitle: 'Estados Unidos',
  theme: 'Economia Mundial',
  subtheme: 'Estados Unidos',
  status: 'analyzable',
  description: 'Cenário econômico dos EUA, política de juros do Fed, discussões tarifárias e demanda energética por Data Centers e IA.',

  sources: [
    {
      id: 'agencia-brasil-cni-2026',
      name: 'Agência Brasil / CNI',
      dateStr: '02/06/2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-06/cni-ve-risco-para-exportacoes-com-tarifa-de-25-dos-eua',
      type: 'Notícia / Agência Oficial'
    },
    {
      id: 'associated-press-2026',
      name: 'Associated Press',
      dateStr: '18/06/2026',
      url: 'https://apnews.com/article/506e3d206871111f15c3c62fc5368be5',
      type: 'Imprensa Internacional'
    },
    {
      id: 'moodys-cenario-energia-2026',
      name: "Moody's / Cenário Energia",
      dateStr: '12/01/2026',
      url: 'https://cenarioenergia.com.br/2026/01/12/relatorio-da-moodys-preve-us-3-trilhoes-para-data-centers-e-novo-ciclo-de-demanda-eletrica/',
      type: 'Relatório de Classificação / Análise Setorial'
    },
    {
      id: 'reuters-fed-2026',
      name: 'Reuters',
      dateStr: '17/06/2026',
      url: 'https://www.reuters.com/business/nearly-half-fed-policymakers-see-2026-rate-hike-cards-2026-06-17/',
      type: 'Imprensa Internacional'
    },
    {
      id: 'pwc-energia-2026',
      name: 'PwC',
      dateStr: '07/04/2026',
      url: 'https://www.pwc.com.br/pt/estudos/setores-atividade/energia/2026/data-centers-na-convergencia-entre-disrupcao-tecnologica-e-resiliencia.html',
      type: 'Consultoria Estratégica'
    }
  ],

  evidenceIds: [
    'eua::1',
    'eua::2',
    'eua::3',
    'eua::4',
    'eua::5'
  ],

  factualContent: [
    {
      id: 'estados-unidos::tarifas::aliquota-risco-exportacoes',
      statement: 'Governo dos EUA avalia impor tarifas de importação de até 25% sobre produtos brasileiros, gerando alerta da CNI sobre perda de competitividade.',
      kind: 'indicator',
      value: 25,
      unit: '%',
      period: 'junho/2026',
      block: 'Indicadores principais',
      sourceId: 'agencia-brasil-cni-2026',
      evidenceId: 'eua::1'
    },
    {
      id: 'estados-unidos::investimentos::projecao-data-centers',
      statement: "Relatório da Moody's projeta até US$ 3 trilhões em investimentos em data centers e infraestrutura digital pelas grandes empresas americanas.",
      kind: 'indicator',
      value: 3,
      unit: 'US$ Tri',
      period: 'janeiro/2026',
      block: 'Indicadores principais',
      sourceId: 'moodys-cenario-energia-2026',
      evidenceId: 'eua::3'
    },
    {
      id: 'estados-unidos::politica-monetaria::expectativa-alta-fed',
      statement: 'Quase metade dos dirigentes do Federal Reserve preveem possibilidade de nova alta nas taxas de juros em 2026 devido a pressões inflacionárias persistentes.',
      kind: 'statement',
      period: 'junho/2026',
      block: 'Indicadores principais',
      sourceId: 'reuters-fed-2026',
      evidenceId: 'eua::4'
    },
    {
      id: 'estados-unidos::infra-eletrica::urgencia-operadores-rede',
      statement: 'Reguladores federais dos EUA instruíram operadores de redes elétricas a acelerar a capacidade de conexão energética para atender à expansão de data centers de IA.',
      kind: 'statement',
      period: 'junho/2026',
      block: 'Indicadores principais',
      sourceId: 'associated-press-2026',
      evidenceId: 'eua::2'
    }
  ],

  existingAnalysis: [
    'Os Estados Unidos enfrentam pressões inflacionárias, juros altos e intensa corrida por infraestrutura de IA.',
    'O cenário econômico apresenta crescimento resiliente, mas impulsionado por uma forte demanda energética e investimentos focados em data centers. Tensões geopolíticas e discussões tarifárias indicam possíveis impactos sobre exportações e competitividade.',
    'Possíveis tarifas de 25% sobre o Brasil afetam competitividade e pressionam setores como o metalúrgico.',
    'Demanda intensa por data centers impulsiona consumo de equipamentos elétricos, cobre e obras industriais.',
    'Investimentos trilionários em infraestrutura digital pressionam modernização de redes elétricas no mundo.',
    'Altas taxas de juros nos EUA fortalecem o dólar, elevando o custo de financiamento no Brasil e pressionando o câmbio.',
    'Novas necessidades para suporte de IA geram demandas expressivas por renováveis e equipamentos do setor elétrico.'
  ]
};
