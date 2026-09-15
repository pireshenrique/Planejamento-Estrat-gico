/**
 * REGISTRO DE CONHECIMENTO DAS PÁGINAS DO PORTAL
 *
 * Objetivo: tornar legível para o Relatório Estratégico o conteúdo que hoje
 * existe apenas como JSX dentro dos componentes de página.
 *
 * Regras:
 * 1. factualContent = APENAS o que está documentado na fonte citada.
 *    Nenhum número aqui pode ser estimado, arredondado ou inferido.
 * 2. existingAnalysis = leitura já escrita pela equipe. Serve de contexto
 *    para a IA, NUNCA é tratada como fato.
 * 3. Páginas com status 'placeholder' são totalmente ignoradas na análise.
 * 4. Todo fato aponta para uma fonte (sourceId) e para a evidência
 *    cadastrada no portal (evidenceId), garantindo a cadeia:
 *    MACROTENDÊNCIA → PÁGINA → FATO → EVIDÊNCIA → FONTE
 */

export type FactKind =
  | 'indicator'     // número único (ex.: 86% buscam melhorar o lar)
  | 'distribution'  // recorte de uma mesma pergunta (ex.: idade, região)
  | 'ranking'       // lista ordenada (ex.: cômodos mais reformados)
  | 'comparison'    // mesmo indicador em dois períodos ou dois grupos
  | 'statement'     // fato documental sem número
  | 'series'        // série histórica ou projeção
  | 'kpi'           // indicador chave de desempenho
  | 'summary';      // síntese factual de evidência ou panorama

export interface PageFact {
  /** ID global único. Padrão: <pageId>::<bloco>::<slug> */
  id: string;
  /** O fato escrito de forma autossuficiente, legível fora da página. */
  statement: string;
  kind: FactKind;
  /** Valor numérico quando houver. */
  value?: number;
  metadata?: Record<string, any>;
  unit?: string;
  /** Agrupador para fatos que pertencem à mesma pergunta da pesquisa. */
  group?: string;
  /** Período de referência do dado. */
  period?: string;
  /** Bloco / seção da página onde o dado aparece. */
  block: string;
  sourceId: string;
  evidenceId: string;
}

export interface PageSource {
  id: string;
  name: string;
  dateStr: string;
  url?: string;
  type: string;
  /** Limites declarados pela própria fonte. */
  methodologyNote?: string;
}

export interface StrategicPageContext {
  pageId: string;
  pageTitle: string;
  theme: string;
  subtheme?: string;
  /** 'placeholder' nunca participa da análise. */
  status: 'analyzable' | 'placeholder';
  description: string;
  factualContent: PageFact[];
  /** Interpretações da equipe. Contexto, não prova. */
  existingAnalysis: string[];
  sources: PageSource[];
  /** Evidências do portal vinculadas a esta página. */
  evidenceIds: string[];
}
