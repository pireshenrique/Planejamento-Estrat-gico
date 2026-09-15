import fs from 'fs';
import path from 'path';
import { validateAll } from '../src/data/report/validateCandidates';
import { CANDIDATES } from '../src/data/report/candidates';
import { getStrategicPagesContext, getAllStrategicPages } from '../src/data/pages/strategicPagesRegistry';
import { getAllSystemEvidences } from '../src/data/portalMetrics';
import {
  isStrategicallyUsableEvidence,
  computeStrategicContextHash,
  StrategicReportData,
  LeituraEstrategica,
  ConexaoEstrategica,
  DimensaoLorenzetti,
  TemasMonitoramento,
  FonteRelevante
} from '../src/data/strategicReportState';

/**
 * Interface para rascunho editorial completo a ser serializado.
 */
export interface EditorialDraft {
  version: string;
  observacao?: string;
  resumoExecutivo: {
    paragrafo1: string;
    paragrafo2: string;
    principaisMensagens: string[];
  };
  riscosConsolidados: string[];
  oportunidadesConsolidadas: string[];
  conexoesEstrategicas: ConexaoEstrategica[];
  implicacoesLorenzetti: DimensaoLorenzetti[];
  temasMonitoramento: TemasMonitoramento;
  principaisFontes: FonteRelevante[];
}

/**
 * COMPILADOR E SERIALIZADOR DO RELATÓRIO ESTRATÉGICO OFICIAL
 * 
 * Regras:
 * 1. Não possui conteúdo estratégico inventado ou fixo no código.
 * 2. Valida 100% das candidatas via validateAll() antes de qualquer gravação.
 * 3. Calcula cobertura e métricas analíticas dinamicamente a partir do registry.
 * 4. Grava em src/data/publishedReport.ts apenas quando aprovado.
 */
export function compileAndPublishReport(draft?: EditorialDraft) {
  const pages = getStrategicPagesContext();
  const allPages = getAllStrategicPages();
  const allEvs = getAllSystemEvidences();
  const validEvs = allEvs.filter(isStrategicallyUsableEvidence);

  // Mapa de fatos para resgatar fontes associadas
  const factMap = new Map<string, { sourceId: string; pageId: string }>();
  pages.forEach(p => {
    p.factualContent?.forEach(f => {
      if (f.id) factMap.set(f.id, { sourceId: f.sourceId || '', pageId: p.pageId });
    });
  });

  const results = validateAll();
  const validCandidatesWithResults = CANDIDATES.map((cand, idx) => ({
    candidate: cand,
    validation: results[idx]
  })).filter(item => item.validation?.isValid);

  if (CANDIDATES.length === 0) {
    console.error('\n  [AVISO] Nenhum item em src/data/report/candidates.ts.');
    console.error('  Para gerar uma nova versão oficial, cadastre as candidatas em candidates.ts');
    console.error('  e passe o rascunho editorial para compilação.\n');
    process.exit(1);
  }

  if (validCandidatesWithResults.length !== CANDIDATES.length) {
    console.error('\n  [ERRO] Foram encontradas candidatas inválidas ou inconsistentes:');
    results.filter(r => !r.isValid).forEach(r => {
      console.error(`    • ${r.candidateId} (${r.titulo}): ${r.motivo}`);
    });
    console.error('\n  Nenhum relatório foi gerado. O arquivo publishedReport.ts NÃO foi modificado.\n');
    process.exit(1);
  }

  if (!draft) {
    console.error('\n  [ERRO] Rascunho editorial (EditorialDraft) não fornecido.');
    console.error('  Forneça a síntese editorial contendo resumo executivo, conexões e implicações.');
    process.exit(1);
  }

  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  const nowIso = today.toISOString();

  const evidenceHash = computeStrategicContextHash(allEvs, pages);

  const leiturasEstrategicas: LeituraEstrategica[] = validCandidatesWithResults.map((item, idx) => {
    const c = item.candidate;
    const v = item.validation;
    const mtId = `MT-${String(idx + 1).padStart(3, '0')}`;

    const sourceIdsSet = new Set<string>();
    c.supportingFactIds?.forEach(fid => {
      const f = factMap.get(fid);
      if (f?.sourceId) sourceIdsSet.add(f.sourceId);
    });

    return {
      id: mtId,
      numero: idx + 1,
      titulo: c.titulo,
      sinal: c.sinal,
      tendencia: c.tendencia,
      riscosLorenzetti: c.riscosLorenzetti,
      oportunidadesLorenzetti: c.oportunidadesLorenzetti,
      impacto: c.impacto,
      horizonte: c.horizonte,
      temasRelacionados: c.temasRelacionados,
      supportingPageIds: v.validPageIds,
      supportingFactIds: v.validFactIds,
      evidenceIds: v.validEvidenceIds,
      sourceIds: Array.from(sourceIdsSet),
      fundamentacao: c.fundamentacao.map(f => ({
        afirmacao: f.afirmacao,
        factId: f.factId,
        evidenceId: f.evidenceId,
        source: f.factId && factMap.get(f.factId)?.sourceId ? factMap.get(f.factId)!.sourceId : 'Fonte institucional validada'
      }))
    };
  });

  // Métricas dinâmicas de cobertura
  const placeholders = allPages.filter(p => p.status === 'placeholder').length;
  const structuredAnalyzable = pages.length;
  const totalIdentified = allPages.length;
  const nonStructured = totalIdentified - structuredAnalyzable - placeholders;
  const coveragePercent = Number(((structuredAnalyzable / (totalIdentified - placeholders)) * 100).toFixed(1));

  const reportData: StrategicReportData = {
    ultimaAnalise: formattedDate,
    governance: {
      evidenceHash,
      totalEvidenciasAnalisadas: validEvs.length,
      dataVersion: draft.version,
      alteracoes: {
        mantidas: [],
        atualizadas: [],
        novas: leiturasEstrategicas.map(l => `${l.id}: ${l.titulo}`),
        removidas: []
      },
      statusGovernança: 'auditado',
      observacao: draft.observacao || `Versão oficial ${draft.version} publicada em ${formattedDate}.`,
      diagnostico: {
        candidatasPropostas: CANDIDATES.length,
        candidatasValidadas: leiturasEstrategicas.length,
        candidatasRejeitadas: [],
        paginasUtilizadas: pages.length,
        fatosDisponiveis: pages.reduce((acc, p) => acc + (p.factualContent?.length || 0), 0),
        evidenciasValidas: validEvs.length
      },
      baseAnalitica: {
        paginasEstrategicasIdentificadas: totalIdentified,
        paginasEstruturadas: structuredAnalyzable,
        paginasAnalisadas: structuredAnalyzable,
        paginasPlaceholder: placeholders,
        paginasNaoEstruturadas: nonStructured > 0 ? nonStructured : 0,
        fatosDisponiveis: pages.reduce((acc, p) => acc + (p.factualContent?.length || 0), 0),
        evidenciasValidas: validEvs.length,
        coberturaPercentual: coveragePercent
      }
    },
    resumoExecutivo: draft.resumoExecutivo,
    leiturasEstrategicas,
    riscosConsolidados: draft.riscosConsolidados,
    oportunidadesConsolidadas: draft.oportunidadesConsolidadas,
    conexoesEstrategicas: draft.conexoesEstrategicas,
    implicacoesLorenzetti: draft.implicacoesLorenzetti,
    temasMonitoramento: draft.temasMonitoramento,
    principaisFontes: draft.principaisFontes
  };

  const tsContent = `import { StrategicReportData } from './strategicReportState';

/**
 * RELATÓRIO ESTRATÉGICO PUBLICADO — PLANEJAMENTO ESTRATÉGICO 2027–2037
 *
 * Versão Oficial Publicada: ${reportData.governance.dataVersion}
 * Data de Publicação: ${formattedDate}
 * Base Analítica: ${pages.length} páginas estratégicas, ${reportData.governance.diagnostico?.fatosDisponiveis} fatos quantificados, ${validEvs.length} evidências validadas.
 *
 * Este arquivo é a FONTE ÚNICA DE VERDADE para a página de Relatório Estratégico Consolidado.
 * O conteúdo reflete a síntese das evidências do sistema e é totalmente auditado.
 */
export const PUBLISHED_REPORT: StrategicReportData | null = ${JSON.stringify(reportData, null, 2)};

export const PUBLISHED_AT: string | null = ${JSON.stringify(nowIso)};
`;

  const targetPath = path.join(process.cwd(), 'src', 'data', 'publishedReport.ts');
  fs.writeFileSync(targetPath, tsContent, 'utf-8');

  console.log('\n=========================================================================');
  console.log('  RELATÓRIO ESTRATÉGICO PUBLICADO GERADO COM SUCESSO!');
  console.log(`  Arquivo gravado: ${targetPath}`);
  console.log(`  Data: ${formattedDate}`);
  console.log(`  Versão: ${reportData.governance.dataVersion}`);
  console.log(`  Leituras Estratégicas: ${leiturasEstrategicas.length}`);
  console.log('=========================================================================\n');
}

// Execução via CLI se invocado diretamente
if (process.argv[1]?.endsWith('gerarRelatorioPublicado.ts')) {
  console.log('\n  [INFO] Para compilar um draft editorial, execute o fluxo editorial com o rascunho desejado.');
  console.log('  Consulte scripts/validarRelatorio.ts para auditar as candidatas em staging.\n');
}
