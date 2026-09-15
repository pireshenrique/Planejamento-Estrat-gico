import { StrategicPageContext } from './types';

export const MARCOS_REGULATORIOS_PAGE: StrategicPageContext = {
  pageId: 'ene-marcos',
  portalRouteId: "ene-marcos",
  pageTitle: 'Marcos Regulatórios',
  theme: 'Energia e Infraestrutura',
  subtheme: 'Marcos Regulatórios & Setoriais',
  status: 'analyzable',
  description: 'Regulamentações estruturantes em saneamento básico (Lei 14.026/2020), abertura do mercado de gás natural, cortes na geração renovável (curtailment) e logística reversa.',

  sources: [
    {
      id: 'cni-saneamento-meta2033',
      name: 'CNI (Confederação Nacional da Indústria) — Notícias e Estudos',
      dateStr: '2025/2026',
      type: 'Entidade de representação industrial',
      url: 'https://noticias.portaldaindustria.com.br/noticias/infraestrutura/marco-legal-do-saneamento-o-que-mudou-e-quais-os-desafios-para-alcancar-as-metas-de-2033/'
    },
    {
      id: 'anp-gas-release-consultas',
      name: 'ANP (Agência Nacional do Petróleo, Gás Natural e Biocombustíveis)',
      dateStr: '2025/2026',
      type: 'Agência reguladora federal',
      url: 'https://www.gov.br/anp/pt-br/canais_atendimento/imprensa/noticias-comunicados/anp-aprova-consultas-publicas-sobre-desconcentracao-do-mercado-de-gas-natural-gas-release-e-sobre-acesso-a-infraestruturas'
    },
    {
      id: 'gov-energia-acordo-3bi',
      name: 'Governo Federal / Imprensa Especializada de Energia',
      dateStr: '2025/2026',
      type: 'Documento governamental / Noticiário regulatório'
    }
  ],

  evidenceIds: [
    'saneamento-marco-legal-metas-2033',
    'gas-natural-anp-consultas-publicas',
    'energia-renovaveis-acordo-3-3-bi'
  ],

  factualContent: [
    {
      id: 'ene-marcos::statement::saneamento-metas-2033',
      statement: 'O Marco Legal do Saneamento Básico (Lei 14.026/2020) estabelece a meta legal de universalização até 2033: 99% da população brasileira com acesso a água potável e 90% com coleta e tratamento de esgoto.',
      kind: 'statement',
      period: 'até 2033',
      block: 'Universalização do Saneamento Básico',
      sourceId: 'cni-saneamento-meta2033',
      evidenceId: 'saneamento-marco-legal-metas-2033'
    },
    {
      id: 'ene-marcos::statement::gas-release-consultas',
      statement: 'A ANP colocou em consulta pública duas frentes regulatórias cruciais para a abertura do mercado de gás natural: regras de desconcentração (Gas Release) e acesso não discriminatório a dutos e terminais de GNL.',
      kind: 'statement',
      period: '2026',
      block: 'Abertura do Mercado de Gás Natural',
      sourceId: 'anp-gas-release-consultas',
      evidenceId: 'gas-natural-anp-consultas-publicas'
    },
    {
      id: 'ene-marcos::kpi::curtailment-acordo-perdas',
      statement: 'Acordo regulatório envolvendo cerca de R$ 3,3 bilhões foi estruturado para mitigar perdas com cortes operacionais (curtailment) de geração renovável solar e eólica decorrentes de gargalos na rede de transmissão.',
      kind: 'kpi',
      value: 3.3,
      unit: 'R$ bilhões',
      period: '2025/2026',
      block: 'Regulação do Setor Elétrico e Renováveis',
      sourceId: 'gov-energia-acordo-3bi',
      evidenceId: 'energia-renovaveis-acordo-3-3-bi'
    }
  ],

  existingAnalysis: [
    'A expansão das redes de abastecimento e novas ligações domiciliares para cumprir as metas de saneamento até 2033 pode criar oportunidades para metais, louças, conexões hidráulicas e chuveiros.',
    'A evolução regulatória dos preços e do suprimento de gás natural pode afetar diretamente custos operacionais em processos industriais de queima contínua (como fornos de cerâmica e fundição) e influenciar a competitividade relativa de aquecedores a gás ante os elétricos e solares.',
    'A resolução de regras para corte de geração e abertura do mercado livre pode estimular produtos com modulação inteligente e eficiência energética certificada.',
    'O avanço de regras de logística reversa e economia circular pode demandar incorporação de materiais reciclados e design para desmontagem no portfólio.'
  ]
};
