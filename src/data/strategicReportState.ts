/**
 * ESTADO, PERSISTÊNCIA E GOVERNANÇA DO RELATÓRIO ESTRATÉGICO CONSOLIDADO (2027-2037)
 * 
 * REGRAS CRÍTICAS DE GOVERNANÇA:
 * 1. NENHUMA AFIRMAÇÃO SEM EVIDÊNCIA. NENHUMA MUDANÇA SEM NOVA EVIDÊNCIA.
 * 2. PROIBIDO inventar fatos, tendências, números, fontes ou hipóteses.
 * 3. RASTREABILIDADE OBRIGATÓRIA: Cada leitura estratégica possui IDs persistentes
 *    e vinculação obrigatória a evidenceIds[] e sourceIds[].
 * 4. PROIBIÇÃO DE PLACEHOLDERS: Textos genéricos ou de desenvolvimento nunca contam como evidência.
 * 5. ESTABILIDADE ENTRE GERAÇÕES: Se a base de evidências for idêntica (mesmo evidenceHash),
 *    o sistema NÃO reescreve nem altera a estrutura estratégica aleatoriamente.
 * 6. DIFERENCIAÇÃO:
 *    - Fato/Evidência (base documental)
 *    - Interpretação (síntese)
 *    - Implicação Lorenzetti (estritamente hipóteses observacionais: "Pode...")
 * 7. AUDITORIA: Registro de alterações mantidas[], atualizadas[], novas[], removidas[].
 */

export interface FundamentacaoFactual {
  afirmacao: string;
  evidenceId?: string;
  factId?: string;
  source: string;
}

export interface LeituraEstrategica {
  id: string; // Identificador persistente imutável: MT-001, MT-002...
  numero: number;
  titulo: string;
  sinal: string; // Fato observado diretamente nas evidências
  tendencia: string; // Leitura estrutural decorrente das evidências
  riscosLorenzetti: string[]; // Hipóteses observacionais ("Pode...") máx 3 bullets
  oportunidadesLorenzetti: string[]; // Hipóteses observacionais ("Pode...") máx 3 bullets
  impacto: 'Alto' | 'Médio' | 'Baixo';
  horizonte: string;
  temasRelacionados: string[];
  supportingPageIds?: string[];
  supportingFactIds?: string[];
  evidenceIds: string[]; // Rastreabilidade obrigatória: IDs das evidências no sistema (mínimo 2)
  sourceIds: string[]; // Fontes institucionais que comprovam a leitura
  fundamentacao?: FundamentacaoFactual[]; // Afirmações específicas vinculadas às evidências
}

export interface ConexaoEstrategica {
  temas: string[];
  insight: string;
}

export interface DimensaoLorenzetti {
  dimensao: string;
  implicacoes: string[];
}

export interface TemasMonitoramento {
  prioridadeAlta: string[];
  acompanhamento: string[];
  sinaisEmergentes: string[];
}

export interface FonteRelevante {
  instituicao: string;
  titulo: string;
  data: string;
  tipo?: string;
  link?: string;
}

export interface ReportGovernanceMetadata {
  evidenceHash: string;
  previousHash?: string;
  totalEvidenciasAnalisadas: number;
  dataVersion: string;
  alteracoes: {
    mantidas: string[];
    atualizadas: string[];
    novas: string[];
    removidas: string[];
  };
  statusGovernança: 'auditado' | 'estavel' | 'atualizado_incremental' | 'insuficiente';
  observacao?: string;
  diagnostico?: {
    candidatasPropostas: number;
    candidatasValidadas: number;
    candidatasRejeitadas: Array<{
      idProposto: string;
      titulo: string;
      motivo: string;
      idsInvalidos?: string[];
    }>;
    paginasUtilizadas: number;
    fatosDisponiveis: number;
    evidenciasValidas: number;
  };
  baseAnalitica?: {
    paginasEstrategicasIdentificadas: number;
    paginasEstruturadas: number;
    paginasAnalisadas: number;
    paginasPlaceholder: number;
    paginasNaoEstruturadas: number;
    fatosDisponiveis: number;
    evidenciasValidas: number;
    coberturaPercentual: number;
  };
}

export interface StrategicReportData {
  ultimaAnalise: string; // Ex: '14/09/2026'
  governance: ReportGovernanceMetadata;
  resumoExecutivo: {
    paragrafo1: string;
    paragrafo2: string;
    paragrafo3?: string;
    principaisMensagens: string[];
  };
  leiturasEstrategicas: LeituraEstrategica[];
  riscosConsolidados: string[];
  oportunidadesConsolidadas: string[];
  conexoesEstrategicas: ConexaoEstrategica[];
  implicacoesLorenzetti: DimensaoLorenzetti[];
  temasMonitoramento: TemasMonitoramento;
  principaisFontes: FonteRelevante[];
  // Mantido para compatibilidade com partes da Home
  macrotendencias?: any[];
}

import { PUBLISHED_REPORT } from './publishedReport';

const STORAGE_KEY = 'lorenzetti_strategic_report_v6_pages';
const EDITORIAL_SESSION_KEY = 'lorenzetti_editorial_mode_active';
export const REPORT_UPDATED_EVENT = 'lorenzetti_strategic_report_updated';

export const INITIAL_REPORT_DATA: StrategicReportData = {
  ultimaAnalise: '',
  governance: {
    evidenceHash: 'EV-0-EMPTY',
    previousHash: 'EV-0-EMPTY',
    totalEvidenciasAnalisadas: 0,
    dataVersion: '2026.09.14-v1',
    alteracoes: {
      mantidas: [],
      atualizadas: [],
      novas: [],
      removidas: []
    },
    statusGovernança: 'auditado',
    observacao: 'Nenhuma análise foi executada ainda.'
  },
  resumoExecutivo: {
    paragrafo1: '',
    paragrafo2: '',
    principaisMensagens: []
  },
  leiturasEstrategicas: [],
  riscosConsolidados: [],
  oportunidadesConsolidadas: [],
  conexoesEstrategicas: [],
  implicacoesLorenzetti: [],
  temasMonitoramento: {
    prioridadeAlta: [],
    acompanhamento: [],
    sinaisEmergentes: []
  },
  principaisFontes: [],
  macrotendencias: []
};

/**
 * Filtro rígido de governança para bloquear evidências tipo "placeholder"
 * ou genéricas que não possuam lastro factual real.
 */
export function isStrategicallyUsableEvidence(evidence: any): boolean {
  if (!evidence) return false;

  const title = (evidence.title || '').trim().toLowerCase();
  const source = (evidence.source || '').trim().toLowerCase();
  const summary = (evidence.summary || evidence.headline || evidence.content || '').trim().toLowerCase();
  const url = (evidence.url || evidence.link || '').trim();

  // 1. Deve ter título e fonte preenchidos
  if (!title || !source) return false;

  // 2. Deve ter algum conteúdo factual/resumo
  if (!summary) return false;

  // 3. Bloqueio de termos genéricos (Placeholders)
  const placeholders = [
    'registro documental de evidência',
    'fonte oficial catalogada',
    'conteúdo estratégico em desenvolvimento',
    'placeholder',
    'a definir',
    'em breve',
    'sem título',
    'lorenzetti dummy'
  ];

  const isPlaceholder = placeholders.some(p => title.includes(p) || source.includes(p) || summary.includes(p));
  if (isPlaceholder) return false;

  // 4. Se o título for curto demais e sem link, provavelmente é inválido
  if (title.length < 10) return false;

  // 5. Opcional mas recomendado: deve possuir referência externa. Para ser mais estrito, 
  // se não tiver link, precisamos garantir que o nome da fonte não seja genérico.
  if (!url && (source.includes('genérica') || source.includes('portal'))) {
    return false;
  }

  return true;
}

/**
 * Calcula uma assinatura / hash determinístico da base de evidências.
 * Agora utiliza isStrategicallyUsableEvidence para filtro rígido.
 */
export function computeStrategicContextHash(evidences: { id?: string; title: string; source: string; url?: string }[], strategicPages?: any[]): string {
  let pagesPart = '';
  if (strategicPages) {
    const pagesData = strategicPages.filter(p => p.status !== 'placeholder').map(p => {
      const facts = (p.factualContent || []).map((f: any) => `${f.id}:${f.value}:${f.unit}:${f.period}:${f.sourceId}:${f.evidenceId}`);
      const existingAnalysis = (p.existingAnalysis || []).join(',');
      const sources = (p.sources || []).map((s: any) => `${s.id}:${s.name}:${s.dateStr}:${s.type}`).join(',');
      return `${p.pageId}|${p.status}|${facts.join(',')}|${existingAnalysis}|${sources}`;
    }).join('||');
    pagesPart = pagesData;
  }
  if ((!Array.isArray(evidences) || evidences.length === 0) && !strategicPages?.length) {
    return 'EV-0-EMPTY';
  }
  const validEvidences = evidences.filter(isStrategicallyUsableEvidence);
  const sortedStrings = (validEvidences
    .map(e => `${e.id || ''}:${(e.title || '').trim().toLowerCase()}:${(e.source || '').trim().toLowerCase()}`)
    .sort()
    .join('|')) + '|PAGES:' + pagesPart;
  
  let hash = 0x811c9dc5;
  for (let i = 0; i < sortedStrings.length; i++) {
    hash ^= sortedStrings.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const hashHex = (hash >>> 0).toString(16).toUpperCase().padStart(8, '0');
  return `EV-${validEvidences.length}-${hashHex}`;
}

/**
 * Obtém os dados do relatório estratégico atual.
 * Agora utiliza exclusivamente PUBLISHED_REPORT, eliminando o modo editorial runtime.
 */
export function getStrategicReportData(): StrategicReportData {
  if (PUBLISHED_REPORT !== null) {
    const leituras = Array.isArray(PUBLISHED_REPORT.leiturasEstrategicas) ? PUBLISHED_REPORT.leiturasEstrategicas : [];
    return {
      ...INITIAL_REPORT_DATA,
      ...PUBLISHED_REPORT,
      resumoExecutivo: PUBLISHED_REPORT.resumoExecutivo || INITIAL_REPORT_DATA.resumoExecutivo,
      governance: PUBLISHED_REPORT.governance || INITIAL_REPORT_DATA.governance,
      leiturasEstrategicas: leituras,
      macrotendencias: leituras,
      riscosConsolidados: Array.isArray(PUBLISHED_REPORT.riscosConsolidados) ? PUBLISHED_REPORT.riscosConsolidados : [],
      oportunidadesConsolidadas: Array.isArray(PUBLISHED_REPORT.oportunidadesConsolidadas) ? PUBLISHED_REPORT.oportunidadesConsolidadas : [],
      conexoesEstrategicas: Array.isArray(PUBLISHED_REPORT.conexoesEstrategicas) ? PUBLISHED_REPORT.conexoesEstrategicas : [],
      implicacoesLorenzetti: Array.isArray(PUBLISHED_REPORT.implicacoesLorenzetti) ? PUBLISHED_REPORT.implicacoesLorenzetti : [],
      temasMonitoramento: {
        prioridadeAlta: Array.isArray(PUBLISHED_REPORT.temasMonitoramento?.prioridadeAlta) ? PUBLISHED_REPORT.temasMonitoramento.prioridadeAlta : [],
        acompanhamento: Array.isArray(PUBLISHED_REPORT.temasMonitoramento?.acompanhamento) ? PUBLISHED_REPORT.temasMonitoramento.acompanhamento : [],
        sinaisEmergentes: Array.isArray(PUBLISHED_REPORT.temasMonitoramento?.sinaisEmergentes) ? PUBLISHED_REPORT.temasMonitoramento.sinaisEmergentes : [],
      },
      principaisFontes: Array.isArray(PUBLISHED_REPORT.principaisFontes) ? PUBLISHED_REPORT.principaisFontes : []
    };
  }
  return INITIAL_REPORT_DATA;
}
