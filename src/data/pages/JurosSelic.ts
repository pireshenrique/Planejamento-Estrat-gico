import { StrategicPageContext } from './types';
import { JUROS_DATA } from '../economia-brasileira/juros';

const kpis = JUROS_DATA.kpis;

export const JUROS_SELIC_PAGE: StrategicPageContext = {
  pageId: 'juros-selic',
  portalRouteId: "eco-macro",
  pageTitle: 'Juros / Selic',
  theme: 'Economia Brasileira',
  subtheme: 'Cenário Macroeconômico',
  status: 'analyzable',
  description: 'Evolução da taxa Selic, decisões do Copom, expectativas do mercado e impactos sobre a atividade econômica.',

  sources: [
    {
      id: 'focus',
      name: 'Banco Central — Relatório Focus',
      dateStr: '2026',
      type: 'Projeção de mercado'
    },
    {
      id: 'copom',
      name: 'Banco Central — Copom',
      dateStr: 'Ago/2026',
      type: 'Dado público'
    },
    {
      id: 'bacen',
      name: 'Banco Central do Brasil',
      dateStr: '2025',
      type: 'Dado público'
    }
  ],
  evidenceIds: [],

  factualContent: [
    {
      id: 'juros-selic::kpi::focus-2026',
      statement: `${kpis.focus.title} (2026): ${kpis.focus.value} (Projeção para 2026). ${kpis.focus.explanation}`,
      kind: 'kpi',
      value: 13.75,
      unit: '%',
      period: '2026',
      block: 'KPIs',
      sourceId: 'focus',
      evidenceId: ''
    },
    {
      id: 'juros-selic::kpi::focus-2027',
      statement: `${kpis.focus.title} (2027): 12,00% (Projeção de mercado para 2027). ${kpis.focus.explanation}`,
      kind: 'kpi',
      value: 12.00,
      unit: '%',
      period: '2027',
      block: 'KPIs',
      sourceId: 'focus',
      evidenceId: ''
    },
    {
      id: 'juros-selic::kpi::selic-atual',
      statement: `${kpis.atual.title}: ${kpis.atual.value} (${kpis.atual.context}). ${kpis.atual.explanation}`,
      kind: 'kpi',
      value: 14.00,
      unit: '%',
      period: 'Ago/2026',
      block: 'KPIs',
      sourceId: 'copom',
      evidenceId: ''
    },
    {
      id: 'juros-selic::kpi::selic-2025',
      statement: `${kpis.passado.title}: ${kpis.passado.value} (${kpis.passado.context}). ${kpis.passado.explanation}`,
      kind: 'kpi',
      value: 15.00,
      unit: '%',
      period: '2025',
      block: 'KPIs',
      sourceId: 'bacen',
      evidenceId: ''
    }
  ],

  existingAnalysis: [
    JUROS_DATA.strategicAnalysis.observe.summary,
    ...JUROS_DATA.strategicAnalysis.observe.notes,
    JUROS_DATA.strategicAnalysis.companyImpact.summary,
    ...JUROS_DATA.strategicAnalysis.companyImpact.notes
  ]
};
