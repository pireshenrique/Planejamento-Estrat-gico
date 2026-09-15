import { StrategicPageContext } from './types';
import { COMMODITIES_BY_ID, CommodityTopicId } from '../commodities/commodities';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

const topicIds: CommodityTopicId[] = ['aco', 'cobre', 'polipropileno', 'petroleo', 'semicondutores', 'terras_raras'];
const topics = topicIds.map(id => COMMODITIES_BY_ID[id]).filter(Boolean);

const allEvidences = topics.flatMap(t => t.evidences);

export const COMMODITIES_PAGE: StrategicPageContext = {
  pageId: 'geo-commodities',
  pageTitle: 'Commodities & Insumos Críticos',
  theme: 'Geopolítica & Economia Global',
  subtheme: 'Commodities',
  status: 'analyzable',
  description: 'Monitoramento estratégico de Aço, Cobre, Polipropileno, Petróleo, Semicondutores e Terras Raras.',

  sources: extractUniqueSources(allEvidences),

  evidenceIds: allEvidences.map(ev => String(ev.id)),

  factualContent: topics.flatMap(topic => [
    {
      id: `commodities::${topic.id}::headline`,
      statement: topic.headline,
      kind: 'summary' as const,
      block: topic.label,
      sourceId: toSourceSlug(topic.evidences[0]?.source || 'commodities'),
      evidenceId: String(topic.evidences[0]?.id || '')
    },
    ...topic.evidences.map((ev) => ({
      id: `commodities::${topic.id}::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ev.description || ''}`.trim(),
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
