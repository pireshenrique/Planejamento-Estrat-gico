import { StrategicPageContext } from './types';

/**
 * PÁGINAS PLACEHOLDERS — CENÁRIO MERCADOLÓGICO
 * 
 * Páginas com status 'placeholder' não geram fatos e são totalmente ignoradas pelo motor de análise do Relatório.
 */

export const CASA_CONECTADA_PAGE: StrategicPageContext = {
  pageId: 'casa-conectada',
  portalRouteId: "mer-produto",
  pageTitle: 'Casa Conectada',
  theme: 'Cenário Mercadológico',
  subtheme: 'Produto e Inovação',
  status: 'placeholder',
  description: 'Tendências e adoção de soluções para casa inteligente, conectividade e automação residencial.',
  factualContent: [],
  existingAnalysis: [],
  sources: [],
  evidenceIds: []
};

export const ECOMMERCE_PAGE: StrategicPageContext = {
  pageId: 'ecommerce',
  portalRouteId: 'mer-varejo',
  pageTitle: 'E-commerce & Digital Retail',
  theme: 'Cenário Mercadológico',
  subtheme: 'Varejo e Canais',
  status: 'placeholder',
  description: 'Evolução dos canais digitais de venda, marketplaces e logística de entrega de materiais.',
  factualContent: [],
  existingAnalysis: [],
  sources: [],
  evidenceIds: []
};

export const TENDENCIAS_PRODUTO_PAGE: StrategicPageContext = {
  pageId: 'tendencias-produto',
  portalRouteId: 'mer-produto',
  pageTitle: 'Tendências de Produto',
  theme: 'Cenário Mercadológico',
  subtheme: 'Produto e Inovação',
  status: 'placeholder',
  description: 'Inovações em design, eficiência energética e sustentabilidade no portfólio de produtos.',
  factualContent: [],
  existingAnalysis: [],
  sources: [],
  evidenceIds: []
};

export const TRANSFORMACAO_VAREJO_PAGE: StrategicPageContext = {
  pageId: 'transformacao-varejo',
  portalRouteId: 'mer-varejo',
  pageTitle: 'Transformação do Varejo',
  theme: 'Cenário Mercadológico',
  subtheme: 'Varejo e Canais',
  status: 'placeholder',
  description: 'Mudanças no varejo físico de materiais de construção, novos formatos e omnicanalidade.',
  factualContent: [],
  existingAnalysis: [],
  sources: [],
  evidenceIds: []
};

export const TRANSFORMACOES_SOCIAIS_PAGE: StrategicPageContext = {
  pageId: 'transformacoes-sociais',
  portalRouteId: 'mer-estilos',
  pageTitle: 'Transformações Sociais',
  theme: 'Cenário Mercadológico',
  subtheme: 'Estilos de Vida',
  status: 'placeholder',
  description: 'Mudanças demográficas, dinâmicas familiares e novos padrões de convívio social.',
  factualContent: [],
  existingAnalysis: [],
  sources: [],
  evidenceIds: []
};
