import { StrategicPageContext } from './types';
import { DEFICIT_HABITACIONAL_DATA } from '../cenario-habitacional/deficitHabitacional';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

export const DEFICIT_HABITACIONAL_PAGE: StrategicPageContext = {
  pageId: 'hab-deficit',
  portalRouteId: "hab-deficit",
  pageTitle: 'Déficit Habitacional',
  theme: 'Cenário Habitacional',
  subtheme: 'Déficit Habitacional',
  status: 'analyzable',
  description: DEFICIT_HABITACIONAL_DATA.observeSummary,

  sources: extractUniqueSources(DEFICIT_HABITACIONAL_DATA.evidences),

  evidenceIds: DEFICIT_HABITACIONAL_DATA.evidences.map(ev => String(ev.id)),

  factualContent: [
    {
      id: 'deficit-habitacional::headline',
      statement: DEFICIT_HABITACIONAL_DATA.headline,
      kind: 'summary',
      block: 'Panorama Estrutural',
      sourceId: toSourceSlug(DEFICIT_HABITACIONAL_DATA.evidences[0]?.source || 'fjp-ibge'),
      evidenceId: String(DEFICIT_HABITACIONAL_DATA.evidences[0]?.id || '')
    },
    ...DEFICIT_HABITACIONAL_DATA.evidences.map((ev) => ({
      id: `deficit-habitacional::ev::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: ev.tag || 'Evidências FJP/IBGE',
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ],

  existingAnalysis: [
    ...DEFICIT_HABITACIONAL_DATA.observeNotes,
    ...DEFICIT_HABITACIONAL_DATA.lorenzettiImpacts
  ]
};
