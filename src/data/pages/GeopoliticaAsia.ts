import { StrategicPageContext } from './types';
import { ASIA_TOPICS } from '../geopolitica/asia';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

const allEvidences = ASIA_TOPICS.flatMap(t => t.evidences || []);

export const GEOPOLITICA_ASIA_PAGE: StrategicPageContext = {
  pageId: 'geo-asia',
  portalRouteId: "geo-asia",
  pageTitle: 'Geopolítica: Ásia',
  theme: 'Geopolítica & Economia Global',
  subtheme: 'Ásia',
  status: 'analyzable',
  description: 'China e Índia: capacidade industrial, demanda interna, cadeias de suprimentos e comércio internacional.',

  sources: extractUniqueSources(allEvidences),

  evidenceIds: allEvidences.map(ev => String(ev.id)),

  factualContent: ASIA_TOPICS.flatMap(topic => [
    {
      id: `geo-asia::${topic.id}::headline`,
      statement: topic.headline,
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(topic.evidences?.[0]?.source || 'asia'),
      evidenceId: String(topic.evidences?.[0]?.id || '')
    },
    ...(topic.evidences || []).map((ev) => ({
      id: `geo-asia::${topic.id}::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ]),

  existingAnalysis: ASIA_TOPICS.flatMap(topic => [
    topic.lorenzettiSummary,
    ...topic.observeNotes,
    ...topic.lorenzettiImpacts
  ])
};
