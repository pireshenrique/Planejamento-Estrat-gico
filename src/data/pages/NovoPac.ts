import { StrategicPageContext } from './types';

export const NOVO_PAC_PAGE: StrategicPageContext = {
  pageId: 'eco-pac',
  portalRouteId: "eco-pac",
  pageTitle: 'Novo PAC',
  theme: 'Economia Brasileira',
  subtheme: 'Novo PAC',
  status: 'analyzable',
  description: 'Acompanhamento estruturado do Programa de Aceleração do Crescimento, investimentos públicos e privados, concessões e transição energética.',

  sources: [
    {
      id: 'casa-civil-pac',
      name: 'Governo Federal — Casa Civil / Programa Novo PAC',
      dateStr: '2026',
      type: 'Programa Governamental Oficial'
    }
  ],

  evidenceIds: [],

  factualContent: [
    {
      id: 'novo-pac::kpi::investimento-total',
      statement: 'O investimento total anunciado para o Novo PAC é de R$ 1,7 trilhão abrangendo o ciclo até 2026 e períodos posteriores em obras estruturantes.',
      kind: 'kpi',
      value: 1700,
      unit: 'R$ bi',
      period: '2023-2026+',
      block: 'Indicadores do Programa',
      sourceId: 'casa-civil-pac',
      evidenceId: ''
    },
    {
      id: 'novo-pac::kpi::eixos-atuacao',
      statement: 'O Novo PAC é estruturado em 9 eixos de atuação temática, compreendendo transporte, energia, infraestrutura social, cidades sustentáveis, saneamento e inclusão digital.',
      kind: 'kpi',
      value: 9,
      unit: 'eixos',
      period: '2026',
      block: 'Indicadores do Programa',
      sourceId: 'casa-civil-pac',
      evidenceId: ''
    },
    {
      id: 'novo-pac::kpi::cidades-atingidas',
      statement: 'O alcance do Novo PAC contempla intervenções e projetos em mais de 5.500 municípios brasileiros.',
      kind: 'kpi',
      value: 5500,
      unit: 'municípios',
      period: '2026',
      block: 'Indicadores do Programa',
      sourceId: 'casa-civil-pac',
      evidenceId: ''
    },
    {
      id: 'novo-pac::eixo::transicao-energetica',
      statement: 'O eixo de Transição Energética e Energias Limpas do Novo PAC concentra R$ 596 bilhões em investimentos previstos (maior fatia de recursos do programa).',
      kind: 'distribution',
      value: 596,
      unit: 'R$ bi',
      period: '2026',
      block: 'Focos de Oportunidade',
      sourceId: 'casa-civil-pac',
      evidenceId: ''
    },
    {
      id: 'novo-pac::eixo::transporte-logistica',
      statement: 'O eixo de Transporte e Mobilidade Urbana do Novo PAC prevê investimentos de R$ 369 bilhões em rodovias, ferrovias, portos e hidrovias.',
      kind: 'distribution',
      value: 369,
      unit: 'R$ bi',
      period: '2026',
      block: 'Focos de Oportunidade',
      sourceId: 'casa-civil-pac',
      evidenceId: ''
    },
    {
      id: 'novo-pac::modelo::parcerias-concessoes',
      statement: 'O modelo de financiamento do PAC prioriza editais de concessão à iniciativa privada e Parcerias Público-Privadas (PPPs) para complementar o orçamento fiscal da União.',
      kind: 'statement',
      period: '2026',
      block: 'Principais Vetores de Investimento',
      sourceId: 'casa-civil-pac',
      evidenceId: ''
    }
  ],

  existingAnalysis: [
    'O Novo PAC estimula a cadeia da construção pesada, logística e infraestrutura urbana, dependendo fortemente da segurança jurídica para atração de capitais privados via leilões e concessões.',
    'Restrições fiscais da União e cumprimento de metas de resultado primário impõem limites à execução direta do orçamento público, tornando os investimentos privados o principal fator de sustentação das obras.',
    'A priorização da transição energética e modernização de redes elétricas e de água cria vetores favoráveis para indústrias fornecedoras de materiais elétricos e saneamento.',
    'Impacto Lorenzetti: a expansão de obras de saneamento e redes habitacionais induzida pelo PAC pode expandir a base instalada de residências atendidas com água encanada e esgoto, o que pode impulsionar a demanda estrutural por metais sanitários, chuveiros e filtros residenciais.'
  ]
};
