import { StrategicPageContext } from './types';
import { AFRICA_TOPICS } from '../geopolitica/africa';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

const allEvidences = AFRICA_TOPICS.flatMap(t => t.evidences || []);

export const GEOPOLITICA_AFRICA_PAGE: StrategicPageContext = {
  pageId: 'geo-africa',
  pageTitle: 'Geopolítica: África',
  theme: 'Geopolítica & Economia Global',
  subtheme: 'África',
  status: 'analyzable',
  description: 'Integração regional, AfCFTA, África do Sul e Quênia: comércio e oportunidades industriais.',

  sources: extractUniqueSources(allEvidences),

  evidenceIds: allEvidences.map(ev => String(ev.id)),

  factualContent: AFRICA_TOPICS.flatMap(topic => [
    {
      id: `geo-africa::${topic.id}::headline`,
      statement: topic.headline,
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(topic.evidences?.[0]?.source || 'africa-panorama'),
      evidenceId: String(topic.evidences?.[0]?.id || '')
    },
    ...(topic.evidences || []).map((ev) => ({
      id: `geo-africa::${topic.id}::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ]),

  existingAnalysis: AFRICA_TOPICS.flatMap(topic => [
    topic.lorenzettiSummary,
    ...topic.observeNotes,
    ...topic.lorenzettiImpacts
  ])
};
