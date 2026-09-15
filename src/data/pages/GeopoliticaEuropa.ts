import { StrategicPageContext } from './types';
import { EUROPA_DATA } from '../geopolitica/europa';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

export const GEOPOLITICA_EUROPA_PAGE: StrategicPageContext = {
  pageId: 'geo-europa',
  pageTitle: 'Geopolítica: Europa & Acordo UE-Mercosul',
  theme: 'Geopolítica & Economia Global',
  subtheme: 'Europa',
  status: 'analyzable',
  description: EUROPA_DATA.observeSummary,

  sources: extractUniqueSources(EUROPA_DATA.evidences),

  evidenceIds: EUROPA_DATA.evidences.map(ev => String(ev.id)),

  factualContent: [
    {
      id: 'geo-europa::headline',
      statement: EUROPA_DATA.headline,
      kind: 'summary',
      block: 'Europa & UE-Mercosul',
      sourceId: toSourceSlug(EUROPA_DATA.evidences[0]?.source || 'europa'),
      evidenceId: String(EUROPA_DATA.evidences[0]?.id || '')
    },
    ...EUROPA_DATA.evidences.map((ev) => ({
      id: `geo-europa::ev::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: ev.tag || 'Acordo UE-Mercosul & Europa',
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ],

  existingAnalysis: [
    EUROPA_DATA.lorenzettiSummary,
    ...EUROPA_DATA.observeNotes,
    ...EUROPA_DATA.lorenzettiImpacts
  ]
};
