import { StrategicPageContext } from './types';
import { CONFLICT_TOPICS } from '../geopolitica/conflitosTensoesInternacionais';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

const allEvidences = CONFLICT_TOPICS.flatMap(t => t.evidences || []);

export const GEOPOLITICA_CONFLITOS_PAGE: StrategicPageContext = {
  pageId: 'geo-conflitos',
  pageTitle: 'Conflitos e Tensões Internacionais',
  theme: 'Geopolítica & Economia Global',
  subtheme: 'Conflitos e Tensões Internacionais',
  status: 'analyzable',
  description: 'Conflitos no Oriente Médio, Ucrânia, Estreito de Taiwan e Mar do Sul da China e seus reflexos energéticos e comerciais.',

  sources: extractUniqueSources(allEvidences),

  evidenceIds: allEvidences.map(ev => String(ev.id)),

  factualContent: CONFLICT_TOPICS.flatMap(topic => [
    {
      id: `geo-conflitos::${topic.id}::headline`,
      statement: topic.headline,
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(topic.evidences?.[0]?.source || 'conflitos-internacionais'),
      evidenceId: String(topic.evidences?.[0]?.id || '')
    },
    ...(topic.evidences || []).map((ev) => ({
      id: `geo-conflitos::${topic.id}::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ]),

  existingAnalysis: CONFLICT_TOPICS.flatMap(topic => [
    topic.lorenzettiSummary,
    ...topic.observeNotes,
    ...topic.lorenzettiImpacts
  ])
};
