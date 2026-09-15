import { StrategicPageContext } from './types';
import { INFLACAO_DATA } from '../economia-brasileira/inflacao';

export const INFLACAO_IPCA_PAGE: StrategicPageContext = {
  pageId: 'eco-inflacao',
  pageTitle: 'Inflação / IPCA',
  theme: 'Economia Brasileira',
  subtheme: 'Cenário Macroeconômico',
  status: 'analyzable',
  description: 'Comportamento da inflação oficial (IPCA), expectativas do Focus e custos da construção civil (INCC).',

  sources: [
    {
      id: 'ibge',
      name: 'IBGE',
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
      id: 'inflacao::kpi::focus',
      statement: `Expectativa Focus: ${INFLACAO_DATA.kpis.focus.value} (${INFLACAO_DATA.kpis.focus.context}).`,
      kind: 'kpi',
      value: 5.02,
      unit: '%',
      block: 'KPIs',
      sourceId: 'focus',
      evidenceId: ''
    },
    {
      id: 'inflacao::kpi::12meses',
      statement: `IPCA 12 Meses: ${INFLACAO_DATA.kpis.ipca12Meses.value} (${INFLACAO_DATA.kpis.ipca12Meses.context}).`,
      kind: 'kpi',
      value: 4.44,
      unit: '%',
      block: 'KPIs',
      sourceId: 'ibge',
      evidenceId: ''
    },
    {
      id: 'inflacao::kpi::2025',
      statement: `IPCA 2025: ${INFLACAO_DATA.kpis.ipca2025.value} (${INFLACAO_DATA.kpis.ipca2025.context}).`,
      kind: 'kpi',
      value: 4.26,
      unit: '%',
      block: 'KPIs',
      sourceId: 'ibge',
      evidenceId: ''
    }
  ],

  existingAnalysis: [
    ...INFLACAO_DATA.strategicAnalysis.observe.notes,
    INFLACAO_DATA.strategicAnalysis.companyImpact.summary,
    ...INFLACAO_DATA.strategicAnalysis.companyImpact.notes.map(n => `${n.before}${n.highlight}${n.after}`)
  ]
};
