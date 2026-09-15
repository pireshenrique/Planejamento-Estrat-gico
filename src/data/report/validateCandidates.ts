import { StrategicCandidate, CandidateFundamentacao } from './candidateTypes';
import { getStrategicPagesContext, getAllStrategicPages } from '../pages/strategicPagesRegistry';
import { getAllSystemEvidences, SystemEvidenceItem } from '../portalMetrics';
import { isStrategicallyUsableEvidence } from '../strategicReportState';
import { CANDIDATES } from './candidates';
import { PageFact, StrategicPageContext } from '../pages/types';

export interface ValidationResult {
  candidateId: string;
  titulo: string;
  isValid: boolean;
  motivo: string;
  validPageIds: string[];
  validFactIds: string[];
  validEvidenceIds: string[];
  invalidPageIds: string[];
  invalidFactIds: string[];
  invalidEvidenceIds: string[];
  temasDistintos: string[];
  numerosNaoEncontrados: string[];
  avisos: string[];
}

/**
 * Converte strings numéricas em número para comparação neutra de formatação.
 * Exemplos:
 *  "34,0" -> 34
 *  "34.0" -> 34
 *  "34%"  -> 34
 *  "3.726" -> 3726
 *  "R$ 3.726" -> 3726
 */
export function normalizeNumberValue(raw: string): number | null {
  if (!raw) return null;
  const cleaned = raw.replace(/[R$\s%]/g, '').trim();
  if (!cleaned) return null;

  // Caso 1: Formato brasileiro de milhar com ponto (ex: 3.726 ou 10.500)
  if (/^\d{1,3}(\.\d{3})+$/.test(cleaned)) {
    const num = parseInt(cleaned.replace(/\./g, ''), 10);
    return isNaN(num) ? null : num;
  }

  // Caso 2: Formato com vírgula decimal (ex: 34,0 ou 1.234,56 ou 12,5)
  if (cleaned.includes(',')) {
    const standard = cleaned.replace(/\./g, '').replace(',', '.');
    const num = parseFloat(standard);
    return isNaN(num) ? null : num;
  }

  // Caso 3: Formato com ponto decimal ou inteiro puro (ex: 34.0 ou 3726 ou 5)
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}

/**
 * Extrai todos os números com seu texto original e valor normalizado.
 */
export function extractNumbersWithValues(text: string): Array<{ raw: string; value: number }> {
  if (!text) return [];
  const results: Array<{ raw: string; value: number }> = [];
  
  // Regex para capturar valores monetários, percentuais, decimais e inteiros
  const regex = /(?:R\$\s*)?(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d+)?|\d+(?:[.,]\d+)?)(?:\s*%)?/gi;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const raw = match[0].trim();
    const val = normalizeNumberValue(raw);
    if (val !== null && !isNaN(val)) {
      results.push({ raw, value: val });
    }
  }

  return results;
}

/**
 * Marcadores obrigatórios de linguagem probabilística para hipóteses da Lorenzetti
 */
const PROBABILISTIC_MARKERS = [
  'pode',
  'poderá',
  'podera',
  'tende a',
  'há sinais de',
  'ha sinais de',
  'sugere',
  'indica',
  'eventualmente'
];

/**
 * Validador rigoroso de conformidade metodológica e governança factual.
 */
export function validateCandidate(c: StrategicCandidate): ValidationResult {
  const motivos: string[] = [];
  const avisos: string[] = [];

  // Carregar dados da base
  const analyzablePages = getStrategicPagesContext();
  const allPages = getAllStrategicPages();
  const analyzablePageMap = new Map<string, StrategicPageContext>();
  analyzablePages.forEach(p => analyzablePageMap.set(p.pageId, p));

  const allPagesMap = new Map<string, StrategicPageContext>();
  allPages.forEach(p => allPagesMap.set(p.pageId, p));

  // Mapa de fatos
  const factMap = new Map<string, { fact: PageFact; pageId: string; theme: string }>();
  analyzablePages.forEach(page => {
    page.factualContent?.forEach(fact => {
      if (fact.id) {
        factMap.set(fact.id, { fact, pageId: page.pageId, theme: page.theme });
      }
    });
  });

  // Mapa de evidências válidas
  const rawEvidences = getAllSystemEvidences();
  const validEvidencesMap = new Map<string, SystemEvidenceItem>();
  rawEvidences.forEach(ev => {
    if (isStrategicallyUsableEvidence(ev)) {
      if (ev.id) validEvidencesMap.set(String(ev.id), ev);
      if (ev.originalId !== undefined && ev.originalId !== null) validEvidencesMap.set(String(ev.originalId), ev);
    }
  });

  // ----------------------------------------------------
  // R8 — CAMPOS OBRIGATÓRIOS
  // ----------------------------------------------------
  if (!c.titulo || !c.titulo.trim()) {
    motivos.push("campo 'titulo' não pode estar vazio");
  }
  if (!c.sinal || !c.sinal.trim()) {
    motivos.push("campo 'sinal' não pode estar vazio");
  }
  if (!c.tendencia || !c.tendencia.trim()) {
    motivos.push("campo 'tendencia' não pode estar vazio");
  }
  if (!['Alto', 'Médio', 'Baixo'].includes(c.impacto)) {
    motivos.push(`impacto inválido: '${c.impacto}' (deve ser 'Alto', 'Médio' ou 'Baixo')`);
  }
  if (Array.isArray(c.riscosLorenzetti) && c.riscosLorenzetti.length > 3) {
    motivos.push(`riscosLorenzetti excede o limite de 3 itens (possui ${c.riscosLorenzetti.length})`);
  }
  if (Array.isArray(c.oportunidadesLorenzetti) && c.oportunidadesLorenzetti.length > 3) {
    motivos.push(`oportunidadesLorenzetti excede o limite de 3 itens (possui ${c.oportunidadesLorenzetti.length})`);
  }

  // ----------------------------------------------------
  // R1 — PÁGINAS EXISTEM E SÃO ANALISÁVEIS
  // ----------------------------------------------------
  const validPageIds: string[] = [];
  const invalidPageIds: string[] = [];

  const pageIdsToCheck = c.supportingPageIds || [];
  pageIdsToCheck.forEach(pid => {
    if (analyzablePageMap.has(pid)) {
      validPageIds.push(pid);
    } else {
      invalidPageIds.push(pid);
      if (allPagesMap.has(pid) && allPagesMap.get(pid)?.status === 'placeholder') {
        motivos.push(`pageId placeholder (não analisável): ${pid}`);
      } else {
        motivos.push(`pageId inexistente: ${pid}`);
      }
    }
  });

  // ----------------------------------------------------
  // R2 — FATOS EXISTEM (COMPARAÇÃO EXATA DE STRING)
  // ----------------------------------------------------
  const validFactIds: string[] = [];
  const invalidFactIds: string[] = [];

  const factIdsToCheck = c.supportingFactIds || [];
  factIdsToCheck.forEach(fid => {
    if (factMap.has(fid)) {
      validFactIds.push(fid);
    } else {
      invalidFactIds.push(fid);
      motivos.push(`factId inexistente: ${fid}`);
    }
  });

  // ----------------------------------------------------
  // R3 — EVIDÊNCIAS EXISTEM E SÃO VÁLIDAS
  // ----------------------------------------------------
  const validEvidenceIds: string[] = [];
  const invalidEvidenceIds: string[] = [];

  const evIdsToCheck = c.evidenceIds || [];
  evIdsToCheck.forEach(eid => {
    if (validEvidencesMap.has(eid)) {
      validEvidenceIds.push(eid);
    } else {
      invalidEvidenceIds.push(eid);
      motivos.push(`evidenceId inexistente ou não utilizável: ${eid}`);
    }
  });

  // ----------------------------------------------------
  // R4 — FUNDAMENTAÇÃO RESOLVÍVEL
  // ----------------------------------------------------
  const resolvableFundamentacao: CandidateFundamentacao[] = [];
  const fundamentacaoItems = c.fundamentacao || [];

  fundamentacaoItems.forEach(item => {
    let resolved = false;
    if (item.factId && factMap.has(item.factId)) {
      resolved = true;
      if (!validFactIds.includes(item.factId)) validFactIds.push(item.factId);
    } else if (item.evidenceId && validEvidencesMap.has(item.evidenceId)) {
      resolved = true;
      if (!validEvidenceIds.includes(item.evidenceId)) validEvidenceIds.push(item.evidenceId);
    }

    if (resolved) {
      resolvableFundamentacao.push(item);
    }
  });

  if (resolvableFundamentacao.length < 2) {
    motivos.push(`apenas ${resolvableFundamentacao.length} item(ns) de fundamentação resolvível (mínimo 2)`);
  }

  // ----------------------------------------------------
  // R5 — TRANSVERSALIDADE (NO MÍNIMO 2 PÁGINAS E 2 TEMAS)
  // ----------------------------------------------------
  const contributingPageIds = new Set<string>();
  const contributingThemes = new Set<string>();

  validFactIds.forEach(fid => {
    const entry = factMap.get(fid);
    if (entry) {
      contributingPageIds.add(entry.pageId);
      contributingThemes.add(entry.theme);
    }
  });

  // Adicionar páginas explicitadas e verificadas
  validPageIds.forEach(pid => {
    contributingPageIds.add(pid);
    const page = analyzablePageMap.get(pid);
    if (page?.theme) {
      contributingThemes.add(page.theme);
    }
  });

  const temasDistintos = Array.from(contributingThemes);

  if (contributingPageIds.size < 2) {
    const singlePage = Array.from(contributingPageIds)[0] || 'nenhuma';
    motivos.push(`fatos vêm de uma única página (${singlePage})`);
  } else if (temasDistintos.length < 2) {
    const singleTheme = temasDistintos[0] || 'nenhum';
    motivos.push(`fatos vêm de um único tema (${singleTheme})`);
  }

  // ----------------------------------------------------
  // R6 — NÚMEROS RASTREÁVEIS
  // ----------------------------------------------------
  const numerosNaoEncontrados: string[] = [];
  const numbersInSignal = extractNumbersWithValues(c.sinal || '');

  // Coletar textos e números de todos os fatos e evidências resolvidos na fundamentação
  const referencedFactsTexts: string[] = [];
  const referencedFactsNumbers: number[] = [];

  validFactIds.forEach(fid => {
    const entry = factMap.get(fid);
    if (entry) {
      const stmt = entry.fact.statement || '';
      referencedFactsTexts.push(stmt);
      extractNumbersWithValues(stmt).forEach(n => referencedFactsNumbers.push(n.value));
      if (entry.fact.value !== undefined && entry.fact.value !== null) {
        referencedFactsNumbers.push(entry.fact.value);
      }
    }
  });

  validEvidenceIds.forEach(eid => {
    const ev = validEvidencesMap.get(eid);
    if (ev) {
      const txt = `${ev.title} ${ev.summary || ''} ${ev.headline || ''}`;
      referencedFactsTexts.push(txt);
      extractNumbersWithValues(txt).forEach(n => referencedFactsNumbers.push(n.value));
    }
  });

  for (const item of numbersInSignal) {
    // 1. Verificar se o valor numérico exato/arredondado está presente nos fatos
    const matchesNumericValue = referencedFactsNumbers.some(targetVal => {
      return Math.abs(targetVal - item.value) < 0.0001;
    });

    // 2. Verificar se a string literal ou substring equivalente está em algum texto
    const cleanedRaw = item.raw.replace(/[^\d.,]/g, '');
    const matchesLiteral = referencedFactsTexts.some(txt => {
      return txt.includes(item.raw) || (cleanedRaw.length >= 2 && txt.includes(cleanedRaw));
    });

    if (!matchesNumericValue && !matchesLiteral) {
      numerosNaoEncontrados.push(item.raw);
      motivos.push(`número ${item.raw} no sinal não consta em nenhum fato citado`);
    }
  }

  // ----------------------------------------------------
  // R7 — LINGUAGEM HIPOTÉTICA (AVISO, NÃO INVALIDA)
  // ----------------------------------------------------
  const checkHypotheticalLanguage = (items: string[], fieldName: string) => {
    (items || []).forEach(item => {
      const lower = item.toLowerCase();
      const hasMarker = PROBABILISTIC_MARKERS.some(marker => lower.includes(marker));
      if (!hasMarker) {
        avisos.push(`Item em ${fieldName} sem marcador de linguagem hipotética: "${item}"`);
      }
    });
  };

  checkHypotheticalLanguage(c.riscosLorenzetti || [], 'riscosLorenzetti');
  checkHypotheticalLanguage(c.oportunidadesLorenzetti || [], 'oportunidadesLorenzetti');

  // ----------------------------------------------------
  // CONSOLIDAÇÃO DO RESULTADO
  // ----------------------------------------------------
  const isValid = motivos.length === 0;
  const motivo = motivos.length > 0 ? motivos.join('; ') : 'Válida';

  return {
    candidateId: c.id,
    titulo: c.titulo,
    isValid,
    motivo,
    validPageIds,
    validFactIds,
    validEvidenceIds,
    invalidPageIds,
    invalidFactIds,
    invalidEvidenceIds,
    temasDistintos,
    numerosNaoEncontrados,
    avisos
  };
}

/**
 * Valida todas as candidatas em src/data/report/candidates.ts
 */
export function validateAll(): ValidationResult[] {
  return CANDIDATES.map(c => validateCandidate(c));
}
