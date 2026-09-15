import { StrategicPageContext } from './types';
import { MERCADO_IMOBILIARIO_DATA } from '../cenario-habitacional/mercadoImobiliario';
import { extractUniqueSources, toSourceSlug } from './sourceUtils';

export const MERCADO_IMOBILIARIO_PAGE: StrategicPageContext = {
  pageId: 'hab-mercado',
  portalRouteId: "hab-mercado",
  pageTitle: 'Mercado Imobiliário',
  theme: 'Cenário Habitacional',
  subtheme: 'Mercado Imobiliário',
  status: 'analyzable',
  description: MERCADO_IMOBILIARIO_DATA.observeSummary,

  sources: extractUniqueSources(MERCADO_IMOBILIARIO_DATA.evidences),

  evidenceIds: MERCADO_IMOBILIARIO_DATA.evidences.map(ev => String(ev.id)),

  factualContent: [
    {
      id: 'mercado-imobiliario::headline',
      statement: MERCADO_IMOBILIARIO_DATA.headline,
      kind: 'summary',
      block: 'Panorama do Mercado',
      sourceId: toSourceSlug(MERCADO_IMOBILIARIO_DATA.evidences[0]?.source || 'abrainc-fipe'),
      evidenceId: String(MERCADO_IMOBILIARIO_DATA.evidences[0]?.id || '')
    },
    ...MERCADO_IMOBILIARIO_DATA.evidences.map((ev) => ({
      id: `mercado-imobiliario::ev::${ev.id}`,
      statement: `${ev.title}. ${ev.summary || ''}`.trim(),
      kind: 'summary' as const,
      block: ev.tag || 'Evidências do Setor',
      sourceId: toSourceSlug(ev.source),
      evidenceId: String(ev.id)
    }))
  ],

  existingAnalysis: [
    ...MERCADO_IMOBILIARIO_DATA.observeNotes,
    ...MERCADO_IMOBILIARIO_DATA.lorenzettiImpacts
  ]
};
