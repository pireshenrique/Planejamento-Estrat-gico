import { StrategicPageContext } from './types';
import { EMPREGOS_DATA } from '../economia-brasileira/emprego';

export const EMPREGO_PAGE: StrategicPageContext = {
  pageId: 'eco-emprego',
  pageTitle: 'Emprego e Desemprego',
  theme: 'Economia Brasileira',
  subtheme: 'Emprego e Desemprego',
  status: 'analyzable',
  description: 'Dinâmica do mercado de trabalho formal, estoque de empregos e concentração setorial da geração de vagas.',

  sources: [
    {
      id: 'caged',
      name: 'MTE — Novo Caged',
      dateStr: '2025',
      type: 'Dado público'
    },
    {
      id: 'rais',
      name: 'MTE — RAIS Mensal',
      dateStr: '2026',
      type: 'Dado público'
    },
    {
      id: 'manpower',
      name: 'ManpowerGroup',
      dateStr: '2026',
      type: 'Pesquisa'
    }
  ],

  evidenceIds: [],

  factualContent: [
    {
      id: 'emprego::kpi::2025',
      statement: `Saldo 2025 Fechado: ${EMPREGOS_DATA.kpis.fechamento2025.value} (${EMPREGOS_DATA.kpis.fechamento2025.context}).`,
      kind: 'kpi',
      value: 1279498,
      unit: 'postos',
      block: 'KPIs',
      sourceId: 'caged',
      evidenceId: ''
    },
    {
      id: 'emprego::kpi::1s2026',
      statement: `1º Semestre 2026: ${EMPREGOS_DATA.kpis.primeiroSemestre2026.value} (${EMPREGOS_DATA.kpis.primeiroSemestre2026.context}).`,
      kind: 'kpi',
      value: 2460000,
      unit: 'postos',
      block: 'KPIs',
      sourceId: 'rais',
      evidenceId: ''
    },
    {
      id: 'emprego::kpi::q32026',
      statement: `Expectativa Q3 2026: ${EMPREGOS_DATA.kpis.expectativaQ3.value} (${EMPREGOS_DATA.kpis.expectativaQ3.context}).`,
      kind: 'kpi',
      value: 52,
      unit: '%',
      block: 'KPIs',
      sourceId: 'manpower',
      evidenceId: ''
    },
    ...EMPREGOS_DATA.sectorHighlights.sectors.map((sec, idx) => ({
      id: `emprego::setor::${idx}`,
      statement: `Setor ${sec.name}: ${sec.value} postos adicionados entre 2023 e junho/2026.`,
      kind: 'distribution' as const,
      block: 'Motores da Geração de Empregos',
      sourceId: 'caged',
      evidenceId: ''
    }))
  ],

  existingAnalysis: [
    EMPREGOS_DATA.sectorHighlights.subtitle,
    ...EMPREGOS_DATA.sectorHighlights.insights.map(i => `${i.title}: ${i.description}`)
  ]
};
