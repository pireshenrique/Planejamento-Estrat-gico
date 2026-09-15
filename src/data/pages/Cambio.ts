import { StrategicPageContext } from './types';
import { CAMBIO_DATA } from '../economia-brasileira/cambio';

export const CAMBIO_PAGE: StrategicPageContext = {
  pageId: 'eco-cambio',
  pageTitle: 'Câmbio / Dólar',
  theme: 'Economia Brasileira',
  subtheme: 'Cenário Macroeconômico',
  status: 'analyzable',
  description: 'Comportamento da taxa de câmbio, projeções de mercado do Boletim Focus e impactos nos custos de insumos.',

  sources: [
    {
      id: 'bacen',
      name: 'Banco Central do Brasil',
      dateStr: '2025/2026',
      type: 'Dado público'
    },
    {
      id: 'focus',
      name: 'Banco Central — Relatório Focus',
      dateStr: '2026',
      type: 'Projeção de mercado'
    }
  ],

  evidenceIds: [],

  factualContent: [
    {
      id: 'cambio::kpi::passado',
      statement: `Dólar em 2025: ${CAMBIO_DATA.kpis.passado.value} (${CAMBIO_DATA.kpis.passado.context}).`,
      kind: 'kpi',
      value: 5.49,
      unit: 'R$',
      block: 'KPIs',
      sourceId: 'bacen',
      evidenceId: ''
    },
    {
      id: 'cambio::kpi::atual',
      statement: `Dólar Atual: ${CAMBIO_DATA.kpis.atual.value} (${CAMBIO_DATA.kpis.atual.context}).`,
      kind: 'kpi',
      value: 5.19,
      unit: 'R$',
      block: 'KPIs',
      sourceId: 'bacen',
      evidenceId: ''
    },
    {
      id: 'cambio::kpi::focus',
      statement: `Expectativa Focus: ${CAMBIO_DATA.kpis.focus.value} (${CAMBIO_DATA.kpis.focus.context}).`,
      kind: 'kpi',
      value: 5.20,
      unit: 'R$',
      block: 'KPIs',
      sourceId: 'focus',
      evidenceId: ''
    }
  ],

  existingAnalysis: [
    ...CAMBIO_DATA.strategicAnalysis.observe.notes,
    CAMBIO_DATA.strategicAnalysis.companyImpact.summary,
    ...CAMBIO_DATA.strategicAnalysis.companyImpact.notes.map(n => `${n.before}${n.highlight}${n.after}`)
  ]
};
