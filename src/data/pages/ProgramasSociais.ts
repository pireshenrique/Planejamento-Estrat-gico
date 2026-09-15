import { StrategicPageContext } from './types';
import { PROGRAMAS_SOCIAIS_BY_ID, ProgramasSociaisTopicId } from '../cenario-habitacional/programasSociais';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

const topicIds: ProgramasSociaisTopicId[] = ['mcmv', 'reforma_brasil'];
const topics = topicIds.map(id => PROGRAMAS_SOCIAIS_BY_ID[id]).filter(Boolean);

const allEvidences = topics.flatMap(t => t.evidences);

export const PROGRAMAS_SOCIAIS_PAGE: StrategicPageContext = {
  pageId: 'hab-programas',
  portalRouteId: "hab-programas",
  pageTitle: 'Programas Sociais & Habitação Popular',
  theme: 'Cenário Habitacional',
  subtheme: 'Programas Sociais',
  status: 'analyzable',
  description: 'Minha Casa Minha Vida e Reforma Casa Brasil: políticas públicas de habitação, financiamento subsidiado e reformas.',

  sources: extractUniqueSources(allEvidences),

  evidenceIds: allEvidences.map(ev => String(ev.id)),

  factualContent: topics.flatMap(topic => [
    {
      id: `programas-sociais::${topic.id}::headline`,
      statement: topic.headline,
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(topic.evidences[0]?.source || 'programas-sociais'),
      evidenceId: String(topic.evidences[0]?.id || '')
    },
    ...topic.evidences.map((ev) => ({
      id: `programas-sociais::${topic.id}::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ]),

  existingAnalysis: topics.flatMap(topic => [
    ...topic.observeNotes,
    ...topic.lorenzettiImpacts
  ])
};
