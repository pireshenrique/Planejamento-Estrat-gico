import { StrategicPageContext } from './types';
import { NORTH_AMERICA_TOPICS } from '../geopolitica/americaDoNorte';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

const allEvidences = NORTH_AMERICA_TOPICS.flatMap(t => t.evidences || []);

export const GEOPOLITICA_AMERICA_DO_NORTE_PAGE: StrategicPageContext = {
  pageId: 'geo-america-norte',
  portalRouteId: "geo-america-norte",
  pageTitle: 'Geopolítica: América do Norte',
  theme: 'Geopolítica & Economia Global',
  subtheme: 'América do Norte',
  status: 'analyzable',
  description: 'Estados Unidos e México: política monetária, tarifas, nearshoring e comércio bilateral.',

  sources: extractUniqueSources(allEvidences),

  evidenceIds: allEvidences.map(ev => String(ev.id)),

  factualContent: NORTH_AMERICA_TOPICS.flatMap(topic => [
    {
      id: `geo-america-norte::${topic.id}::headline`,
      statement: topic.headline,
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(topic.evidences?.[0]?.source || 'america-do-norte'),
      evidenceId: String(topic.evidences?.[0]?.id || '')
    },
    ...(topic.evidences || []).map((ev) => ({
      id: `geo-america-norte::${topic.id}::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ]),

  existingAnalysis: NORTH_AMERICA_TOPICS.flatMap(topic => [
    topic.lorenzettiSummary,
    ...topic.observeNotes,
    ...topic.lorenzettiImpacts
  ])
};
