import { StrategicPageContext } from './types';
import { LARES_UNIPESSOAIS_DATA } from '../cenario-habitacional/laresUnipessoais';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

const pageData = LARES_UNIPESSOAIS_DATA;

export const LARES_UNIPESSOAIS_PAGE: StrategicPageContext = {
  pageId: 'hab-lares-unipessoais',
  portalRouteId: "hab-lares",
  pageTitle: 'Lares Unipessoais & Imóveis Compactos',
  theme: 'Cenário Habitacional',
  subtheme: 'Lares Unipessoais',
  status: 'analyzable',
  description: pageData.headline,

  sources: extractUniqueSources(pageData.evidences),

  evidenceIds: pageData.evidences.map(ev => String(ev.id)),

  factualContent: [
    {
      id: 'hab-lares-unipessoais::factual::unipessoais-participacao',
      statement: 'Domicílios com apenas um morador passaram de 7,5 milhões em 2012 para mais de 15 milhões em 2025, atingindo 19,5% do total de residências brasileiras (cerca de 1 em cada 5 domicílios).',
      kind: 'indicator',
      value: 19.5,
      unit: '%',
      period: '2025',
      block: 'Panorama Demográfico',
      sourceId: toSourceSlug(pageData.evidences[0]?.source || 'ibge-pnad'),
      evidenceId: String(pageData.evidences[0]?.id || '')
    },
    {
      id: 'hab-lares-unipessoais::factual::lancamentos-compactos',
      statement: 'Studios e unidades de até 40 m² já concentram 41,1% das intenções de lançamento das incorporadoras imobiliárias analisadas.',
      kind: 'indicator',
      value: 41.1,
      unit: '%',
      period: '2026',
      block: 'Mercado Imobiliário Compacto',
      sourceId: toSourceSlug(pageData.evidences[1]?.source || 'exame-housi'),
      evidenceId: String(pageData.evidences[1]?.id || '')
    },
    {
      id: 'hab-lares-unipessoais::factual::status-subtitulo',
      statement: pageData.statusSubtitle,
      kind: 'summary',
      block: 'Panorama Demográfico',
      sourceId: toSourceSlug(pageData.evidences[0]?.source || 'ibge-pnad'),
      evidenceId: String(pageData.evidences[0]?.id || '')
    },
    ...pageData.evidences.map((ev) => ({
      id: `hab-lares-unipessoais::ev::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: ev.tag || 'Evidências Demográficas',
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ],

  existingAnalysis: [
    pageData.observeSummary,
    ...pageData.observeNotes,
    ...pageData.lorenzettiImpacts
  ]
};
