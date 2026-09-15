import { StrategicPageContext, PageFact } from './types';
import {
  JUROS_REAL_DATA,
  REAL_INTEREST_RANKING,
  REAL_INTEREST_RANKING_META
} from '../economia-brasileira/jurosReal';

const kpis = JUROS_REAL_DATA.kpis;

export const JUROS_REAL_PAGE: StrategicPageContext = {
  pageId: 'juros-real',
  portalRouteId: "eco-macro",
  pageTitle: 'Taxa de Juros Real',
  theme: 'Economia Brasileira',
  subtheme: 'Cenário Macroeconômico',
  status: 'analyzable',
  description: 'Acompanhamento do juro real brasileiro em perspectiva global, projeções da IFI e condições de captação corporativa.',

  sources: [
    {
      id: 'moneyou-lev',
      name: 'MoneYou / Lev Intelligence',
      dateStr: REAL_INTEREST_RANKING_META.referencePeriod,
      type: 'Levantamento de mercado / Projeção',
      methodologyNote: REAL_INTEREST_RANKING_META.sourceNote
    },
    {
      id: 'ifi',
      name: 'Instituição Fiscal Independente (IFI)',
      dateStr: '2026',
      type: 'Projeção pública'
    },
    {
      id: 'anbima',
      name: 'ANBIMA',
      dateStr: '1º sem/2026',
      type: 'Dado de mercado'
    }
  ],
  evidenceIds: [],

  factualContent: [
    // KPIs
    {
      id: 'juros-real::kpi::atual',
      statement: `${kpis.atual.title}: ${kpis.atual.value} (${kpis.atual.subtitle} ${kpis.atual.detail}).`,
      kind: 'kpi',
      value: 9.33,
      unit: '%',
      block: 'KPIs',
      sourceId: 'moneyou-lev',
      evidenceId: ''
    },
    {
      id: 'juros-real::kpi::projecao-ifi',
      statement: `${kpis.projecaoIfi.title}: ${kpis.projecaoIfi.value} (${kpis.projecaoIfi.subtitle} ${kpis.projecaoIfi.detail}).`,
      kind: 'kpi',
      value: 7.5,
      unit: '%',
      block: 'KPIs',
      sourceId: 'ifi',
      evidenceId: ''
    },
    {
      id: 'juros-real::kpi::captacao-corporativa',
      statement: `${kpis.captacaoCorporativa.title}: ${kpis.captacaoCorporativa.value} (${kpis.captacaoCorporativa.subtitle} ${kpis.captacaoCorporativa.detail}).`,
      kind: 'kpi',
      value: -12.1,
      unit: '%',
      block: 'KPIs',
      sourceId: 'anbima',
      evidenceId: ''
    },

    // Destaque Brasil e Meta
    {
      id: 'juros-real::ranking::destaque-brasil',
      statement: `${REAL_INTEREST_RANKING_META.brazilHighlightDescription}.`,
      kind: 'summary',
      group: 'Ranking global de juros reais',
      period: REAL_INTEREST_RANKING_META.referencePeriod,
      block: 'Ranking Global de Juros Reais',
      sourceId: 'moneyou-lev',
      evidenceId: ''
    },

    // Ranking Global de 10 Países (sem emojis nem cores)
    ...REAL_INTEREST_RANKING.map((item): PageFact => {
      const numVal = parseFloat(item.rate.replace('%', '').replace(',', '.'));
      const slug = item.country
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-');

      return {
        id: `juros-real::ranking::${item.pos}-${slug}`,
        statement: `Ranking Global de Juros Reais (${REAL_INTEREST_RANKING_META.referencePeriod}) — ${item.pos}º lugar: ${item.country} com taxa de juro real de ${item.rate}.`,
        kind: 'ranking',
        group: 'Ranking global de juros reais',
        value: numVal,
        unit: '%',
        period: REAL_INTEREST_RANKING_META.referencePeriod,
        block: 'Ranking Global de Juros Reais',
        sourceId: 'moneyou-lev',
        evidenceId: ''
      };
    }),

    // Fato complementar extraído do detalhe de debêntures
    {
      id: 'juros-real::captacao::participacao-cdi',
      statement: 'Participação das debêntures atreladas ao CDI no volume captado no 1º sem/26: 59,4%.',
      kind: 'indicator',
      group: 'Captação corporativa',
      value: 59.4,
      unit: '%',
      period: '1º sem/2026',
      block: 'Captação Corporativa',
      sourceId: 'anbima',
      evidenceId: ''
    }
  ],

  existingAnalysis: [
    JUROS_REAL_DATA.strategicAnalysis.observe.summary,
    ...JUROS_REAL_DATA.strategicAnalysis.observe.notes,
    JUROS_REAL_DATA.strategicAnalysis.companyImpact.summary,
    ...JUROS_REAL_DATA.strategicAnalysis.companyImpact.notes
  ]
};
