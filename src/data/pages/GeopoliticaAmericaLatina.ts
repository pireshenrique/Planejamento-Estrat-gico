import { StrategicPageContext } from './types';
import { LATAM_TOPICS } from '../geopolitica/americaLatina';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

const allEvidences = LATAM_TOPICS.flatMap(t => t.evidences || []);

export const GEOPOLITICA_AMERICA_LATINA_PAGE: StrategicPageContext = {
  pageId: 'geo-america-latina',
  portalRouteId: "geo-america-latina",
  pageTitle: 'Geopolítica: América Latina',
  theme: 'Geopolítica & Economia Global',
  subtheme: 'América Latina',
  status: 'analyzable',
  description: 'Argentina, Chile, Colômbia, Paraguai, Peru e Uruguai: ambiente de negócios, comércio regional e demanda por produtos.',

  sources: extractUniqueSources(allEvidences),

  evidenceIds: allEvidences.map(ev => String(ev.id)),

  factualContent: LATAM_TOPICS.flatMap(topic => [
    {
      id: `geo-america-latina::${topic.id}::headline`,
      statement: topic.headline,
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(topic.evidences?.[0]?.source || 'america-latina'),
      evidenceId: String(topic.evidences?.[0]?.id || '')
    },
    ...(topic.evidences || []).map((ev) => ({
      id: `geo-america-latina::${topic.id}::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ]),

  existingAnalysis: LATAM_TOPICS.flatMap(topic => [
    topic.lorenzettiSummary,
    ...topic.observeNotes,
    ...topic.lorenzettiImpacts
  ])
};
