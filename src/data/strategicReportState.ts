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
      return `${p.pageId}|${p.factualContent.map((f: any) => `${f.id}:${f.value}`).join(',')}|${p.existingAnalysis.join(',')}|${p.sources.join(',')}`;
    }).join('||');
    pagesPart = pagesData;
  }

  if ((!Array.isArray(evidences) || evidences.length === 0) && !strategicPages?.length) {
    return 'EV-0-EMPTY';
  }

  // Filtragem rigorosa utilizando a função unificada
  const validEvidences = evidences.filter(isStrategicallyUsableEvidence);

  const sortedStrings = (validEvidences
    .map(e => `${e.id || ''}:${(e.title || '').trim().toLowerCase()}:${(e.source || '').trim().toLowerCase()}`)
    .sort()
    .join('|')) + '|PAGES:' + pagesPart;

  // Algoritmo determinístico FNV-1a (32 bits)
  let hash = 0x811c9dc5;
  for (let i = 0; i < sortedStrings.length; i++) {
    hash ^= sortedStrings.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const hashHex = (hash >>> 0).toString(16).toUpperCase().padStart(8, '0');
  return `EV-${validEvidences.length}-${hashHex}`;
}

/**
 * Determina se a sessão atual está em Modo Editorial.
 * Regras:
 * - true se a URL contiver o parâmetro ?editorial=1
 * - ao detectar o parâmetro, grava uma flag em sessionStorage para persistir durante a navegação
 * - sessionStorage (não localStorage): expira ao fechar a aba
 * - se a URL contiver ?editorial=0, limpa a flag
 */
export function isEditorialMode(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const editorialParam = urlParams.get('editorial');

    if (editorialParam === '1') {
      sessionStorage.setItem(EDITORIAL_SESSION_KEY, 'true');
      return true;
    } else if (editorialParam === '0') {
      sessionStorage.removeItem(EDITORIAL_SESSION_KEY);
      return false;
    }

    return sessionStorage.getItem(EDITORIAL_SESSION_KEY) === 'true';
  } catch (e) {
    return false;
  }
}

/**
 * Obtém os dados do relatório estratégico atual seguindo a ordem de prioridade:
 * 1. Se estiver em MODO EDITORIAL e existir rascunho em localStorage -> usar o rascunho.
 * 2. Senão, se PUBLISHED_REPORT !== null -> usar PUBLISHED_REPORT.
 * 3. Senão -> INITIAL_REPORT_DATA (vazio).
 *
 * REGRA CRÍTICA:
 * Fora do modo editorial, o localStorage NUNCA é lido.
 * Um usuário comum sempre vê PUBLISHED_REPORT, independentemente do que exista no navegador dele.
 */
export function getStrategicReportData(): StrategicReportData {
  if (typeof window === 'undefined') {
    return PUBLISHED_REPORT || INITIAL_REPORT_DATA;
  }

  const editorial = isEditorialMode();

  // 1. Se estiver em MODO EDITORIAL e existir rascunho em localStorage -> usar o rascunho
  if (editorial) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed) {
          const leituras = Array.isArray(parsed.leiturasEstrategicas) ? parsed.leiturasEstrategicas : [];
          
          const result: StrategicReportData = {
            ...INITIAL_REPORT_DATA,
            ...parsed,
            resumoExecutivo: parsed.resumoExecutivo || INITIAL_REPORT_DATA.resumoExecutivo,
            governance: parsed.governance || INITIAL_REPORT_DATA.governance,
            leiturasEstrategicas: leituras,
            macrotendencias: leituras,
            riscosConsolidados: Array.isArray(parsed.riscosConsolidados) ? parsed.riscosConsolidados : [],
            oportunidadesConsolidadas: Array.isArray(parsed.oportunidadesConsolidadas) ? parsed.oportunidadesConsolidadas : [],
            conexoesEstrategicas: Array.isArray(parsed.conexoesEstrategicas) ? parsed.conexoesEstrategicas : [],
            implicacoesLorenzetti: Array.isArray(parsed.implicacoesLorenzetti) ? parsed.implicacoesLorenzetti : [],
            temasMonitoramento: {
              prioridadeAlta: Array.isArray(parsed.temasMonitoramento?.prioridadeAlta) ? parsed.temasMonitoramento.prioridadeAlta : [],
              acompanhamento: Array.isArray(parsed.temasMonitoramento?.acompanhamento) ? parsed.temasMonitoramento.acompanhamento : [],
              sinaisEmergentes: Array.isArray(parsed.temasMonitoramento?.sinaisEmergentes) ? parsed.temasMonitoramento.sinaisEmergentes : [],
            },
            principaisFontes: Array.isArray(parsed.principaisFontes) ? parsed.principaisFontes : []
          };
          
          return result;
        }
      }
    } catch (e) {
      console.warn('Erro ao ler rascunho do localStorage em modo editorial:', e);
    }
  }

  // 2. Senão, se PUBLISHED_REPORT !== null -> usar PUBLISHED_REPORT
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

  // 3. Senão -> INITIAL_REPORT_DATA (vazio)
  return INITIAL_REPORT_DATA;
}

/**
 * Salva os dados atualizados do relatório estratégico e notifica os componentes inscritos.
 * REGRA: Funciona apenas em modo editorial. Fora dele, não grava nada no navegador.
 */
export function saveStrategicReportData(data: StrategicReportData): void {
  if (typeof window === 'undefined') return;

  // Fora do modo editorial, a função não deve gravar nada.
  if (!isEditorialMode()) {
    return;
  }

  try {
    const enriched = {
      ...data,
      macrotendencias: Array.isArray(data.leiturasEstrategicas) ? data.leiturasEstrategicas : []
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(enriched));
    window.dispatchEvent(new CustomEvent(REPORT_UPDATED_EVENT, { detail: enriched }));
  } catch (e) {
    console.error('Erro ao salvar rascunho no localStorage:', e);
  }
}

/**
 * Hook ou listener helper para manter HomeView e StrategicReportView sincronizados
 */
export function subscribeToReportUpdates(callback: (data: StrategicReportData) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const handler = (e: Event) => {
    const custom = e as CustomEvent<StrategicReportData>;
    if (custom.detail) {
      callback(custom.detail);
    } else {
      callback(getStrategicReportData());
    }
  };

  window.addEventListener(REPORT_UPDATED_EVENT, handler);
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      callback(getStrategicReportData());
    }
  });

  return () => {
    window.removeEventListener(REPORT_UPDATED_EVENT, handler);
  };
}
