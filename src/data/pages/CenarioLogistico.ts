import { StrategicPageContext } from './types';
import { CENARIO_LOGISTICO_DATA } from '../logistica/cenarioLogistico';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

export const CENARIO_LOGISTICO_PAGE: StrategicPageContext = {
  pageId: 'geo-logistica',
  portalRouteId: "geo-logistica",
  pageTitle: 'Cenário Logístico Global',
  theme: 'Geopolítica & Economia Global',
  subtheme: 'Cenário Logístico',
  status: 'analyzable',
  description: CENARIO_LOGISTICO_DATA.observeSummary,

  sources: extractUniqueSources(CENARIO_LOGISTICO_DATA.evidences),

  evidenceIds: CENARIO_LOGISTICO_DATA.evidences.map(ev => String(ev.id)),

  factualContent: [
    {
      id: 'cenario-logistico::headline',
      statement: CENARIO_LOGISTICO_DATA.headline,
      kind: 'summary',
      block: 'Panorama Logístico',
      sourceId: toSourceSlug(CENARIO_LOGISTICO_DATA.evidences[0]?.source || 'logistica-global'),
      evidenceId: String(CENARIO_LOGISTICO_DATA.evidences[0]?.id || '')
    },
    ...CENARIO_LOGISTICO_DATA.evidences.map((ev) => ({
      id: `cenario-logistico::ev::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: ev.tag || 'Evidências de Rotas Globais',
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ],

  existingAnalysis: [
    ...CENARIO_LOGISTICO_DATA.observeNotes,
    ...CENARIO_LOGISTICO_DATA.lorenzettiImpacts
  ]
};
