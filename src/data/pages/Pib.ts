import { StrategicPageContext } from './types';

export const PIB_PAGE: StrategicPageContext = {
  pageId: 'eco-macro-pib',
  pageTitle: 'PIB do Brasil',
  theme: 'Economia Brasileira',
  subtheme: 'Cenário Macroeconômico / PIB',
  status: 'analyzable',
  description: 'Panorama do crescimento econômico brasileiro, Contas Nacionais, projeções Focus e dinâmica de consumo, serviços e indústria.',

  sources: [
    {
      id: 'ibge-contas-nacionais',
      name: 'IBGE — Contas Nacionais Trimestrais',
      dateStr: '2026',
      type: 'Dado oficial público'
    },
    {
      id: 'bcb-focus',
      name: 'Banco Central do Brasil — Relatório Focus',
      dateStr: '2026',
      type: 'Projeção de mercado'
    },
    {
      id: 'ipea-macro',
      name: 'Ipea — Visão Macroeconômica',
      dateStr: '2026',
      type: 'Pesquisa econômica'
    }
  ],

  evidenceIds: ['ev-pib-crescimento-1t-2026', 'ev-pib-projecao-focus-2026'],

  factualContent: [
    {
      id: 'pib::kpi::projecao-2026',
      statement: 'A projeção de crescimento do PIB brasileiro para 2026 segundo o Relatório Focus do Banco Central situa-se em 2,0% (mediana das projeções).',
      kind: 'kpi',
      value: 2.0,
      unit: '%',
      period: '2026',
      block: 'KPIs do Cabeçalho',
      sourceId: 'bcb-focus',
      evidenceId: 'ev-pib-projecao-focus-2026'
    },
    {
      id: 'pib::kpi::acumulado-2026',
      statement: 'O crescimento acumulado registrado pelo PIB no primeiro trimestre de 2026 foi de 1,1% em relação ao trimestre anterior.',
      kind: 'kpi',
      value: 1.1,
      unit: '%',
      period: '1T-2026',
      block: 'KPIs do Cabeçalho',
      sourceId: 'ibge-contas-nacionais',
      evidenceId: 'ev-pib-crescimento-1t-2026'
    },
    {
      id: 'pib::kpi::fechamento-2025',
      statement: 'O crescimento consolidado do PIB brasileiro no fechamento oficial de 2025 foi de 2,9%.',
      kind: 'kpi',
      value: 2.9,
      unit: '%',
      period: '2025',
      block: 'KPIs do Cabeçalho',
      sourceId: 'ibge-contas-nacionais',
      evidenceId: 'ev-pib-crescimento-1t-2026'
    },
    {
      id: 'pib::fato::motores-consumo-servicos',
      statement: 'O desempenho do 1T-2026 foi sustentado estruturalmente pela resiliência do consumo das famílias e expansão do setor de serviços.',
      kind: 'statement',
      period: '1T-2026',
      block: 'O que observar nos próximos meses',
      sourceId: 'ibge-contas-nacionais',
      evidenceId: 'ev-pib-crescimento-1t-2026'
    },
    {
      id: 'pib::fato::projecao-intervalo-ipea',
      statement: 'O Banco Central e o Ipea projetam moderação gradativa do ritmo de crescimento com intervalo entre 2,0% e 2,5% para o fechamento de 2026.',
      kind: 'series',
      value: 2.5,
      unit: '%',
      period: '2026',
      block: 'O que observar nos próximos meses',
      sourceId: 'ipea-macro',
      evidenceId: 'ev-pib-projecao-focus-2026'
    }
  ],

  existingAnalysis: [
    'O Brasil registrou crescimento de 1,1% no 1T-2026, evidenciando resiliência frente ao cenário de juros restritivos.',
    'A expansão foi impulsionada pela demanda doméstica resiliente das famílias e solidez do setor de serviços.',
    'O efeito defasado do aperto monetário prolongado e restrições de crédito podem levar a uma moderação gradual no ritmo de atividade ao longo dos próximos trimestres.',
    'Impacto Lorenzetti: pode demandar atenção em relação ao ritmo de escoamento e giro de produtos no varejo de construção civil, mas pode manter sustentada a demanda por reformas e manutenção residencial.'
  ]
};
