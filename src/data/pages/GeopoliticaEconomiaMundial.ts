import { StrategicPageContext } from './types';
import { ECONOMIC_TOPICS } from '../geopolitica/economiaMundial';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

const allEvidences = ECONOMIC_TOPICS.flatMap(t => t.evidences || []);

export const GEOPOLITICA_ECONOMIA_MUNDIAL_PAGE: StrategicPageContext = {
  pageId: 'geo-economia-mundial',
  pageTitle: 'Economia Mundial & Organismos Globais',
  theme: 'Geopolítica & Economia Global',
  subtheme: 'Economia Mundial',
  status: 'analyzable',
  description: 'OCDE, FMI, Banco Mundial e projeções de crescimento, comércio global e inflação internacional.',

  sources: extractUniqueSources(allEvidences),

  evidenceIds: allEvidences.map(ev => String(ev.id)),

  factualContent: ECONOMIC_TOPICS.flatMap(topic => [
    {
      id: `geo-economia-mundial::${topic.id}::headline`,
      statement: topic.headline,
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(topic.evidences?.[0]?.source || 'economia-mundial'),
      evidenceId: String(topic.evidences?.[0]?.id || '')
    },
    ...(topic.evidences || []).map((ev) => ({
      id: `geo-economia-mundial::${topic.id}::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ]),

  existingAnalysis: ECONOMIC_TOPICS.flatMap(topic => [
    topic.lorenzettiSummary,
    ...topic.observeNotes,
    ...topic.lorenzettiImpacts
  ])
};
