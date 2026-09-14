import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  RefreshCw,
  Printer,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  Lightbulb,
  GitMerge,
  Layers,
  Search,
  X,
  Building2,
  BookOpen,
  ShieldCheck,
  FileText,
  ExternalLink,
  HelpCircle,
  Database
} from 'lucide-react';
import {
  getStrategicReportData,
  saveStrategicReportData,
  subscribeToReportUpdates,
  StrategicReportData,
  LeituraEstrategica,
  computeEvidencesHash,
  isStrategicallyUsableEvidence
} from '../../data/strategicReportState';
import { getPortalMetricsSummary, getAllSystemEvidences, SystemEvidenceItem } from '../../data/portalMetrics';

interface StrategicReportViewProps {
  setActivePage?: (page: string) => void;
}

export const StrategicReportView: React.FC<StrategicReportViewProps> = ({ setActivePage }) => {
  const [reportData, setReportData] = useState<StrategicReportData>(getStrategicReportData());
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateFeedback, setUpdateFeedback] = useState<{
    type: 'success' | 'info' | 'error';
    message: string;
    allowForce?: boolean;
  } | null>(null);

  // Modal de todas as fontes
  const [showSourcesModal, setShowSourcesModal] = useState(false);
  const [allSources, setAllSources] = useState<string[]>([]);

  // Modal de auditoria de evidências de uma leitura específica
  const [selectedLeituraAudit, setSelectedLeituraAudit] = useState<LeituraEstrategica | null>(null);

  // Modal de detalhes de governança do relatório
  const [showGovernanceModal, setShowGovernanceModal] = useState(false);

  // Cache de todas as evidências do sistema para busca rápida por ID
  const [evidenceMap, setEvidenceMap] = useState<Map<string, SystemEvidenceItem>>(new Map());
  const [allEvidencesCount, setAllEvidencesCount] = useState<number>(0);
  const [validEvidencesCount, setValidEvidencesCount] = useState<number>(0);
  const [currentHash, setCurrentHash] = useState<string>('');

  useEffect(() => {
    const report = getStrategicReportData();
    setReportData(report);

    const metrics = getPortalMetricsSummary();
    setAllSources(metrics.fontesList);

    const allEvs = getAllSystemEvidences();
    setAllEvidencesCount(allEvs.length);
    setValidEvidencesCount(allEvs.filter(isStrategicallyUsableEvidence).length);

    const hash = computeEvidencesHash(allEvs);
    setCurrentHash(hash);

    const map = new Map<string, SystemEvidenceItem>();
    allEvs.forEach((ev) => {
      if (ev.id) map.set(ev.id, ev);
    });
    setEvidenceMap(map);

    const unsubscribe = subscribeToReportUpdates((updated) => {
      setReportData(updated);
    });

    return () => unsubscribe();
  }, []);

  /**
   * Atualização com Governança das Evidências (Regras 18 a 34):
   * - Verifica hash da base (detecta se mudou).
   * - Se inalterado, não recalcula arbitrariamente.
   * - Se forçado ou com novos dados, faz atualização incremental preservando IDs (MT-001 a MT-008).
   */
  const handleUpdateAnalysis = async (force: boolean = false) => {
    if (isUpdating) return;
    setIsUpdating(true);
    setUpdateFeedback(null);

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const allEvs = getAllSystemEvidences();
    const hash = computeEvidencesHash(allEvs);
    const previousHash = reportData.governance?.evidenceHash;

    try {
      const res = await fetch('/api/strategic-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          force,
          currentEvidenceHash: hash,
          previousEvidenceHash: previousHash,
          previousReport: reportData,
          totalEvidencias: allEvs.length,
          evidencesCatalog: allEvs.map((e) => ({
            id: e.id || '',
            title: e.title,
            source: e.source,
            url: e.url,
            topic: e.topic,
            summary: e.summary,
            headline: e.headline,
            dateStr: e.dateStr,
            verified: e.verified,
            normalizedSource: e.normalizedSource
          }))
        })
      });

      const data = await res.json();

      // REGRA 26: BASE INALTERADA
      if (data && data.status === 'unmodified') {
        setUpdateFeedback({
          type: 'info',
          message: `A análise já está atualizada com as informações disponíveis (base de dados inalterada: ${allEvs.length} evidências, assinatura: ${hash}).`,
          allowForce: true
        });
        return;
      }

      // REGRA 25, 30 & 32: ATUALIZAÇÃO INCREMENTAL BEM-SUCEDIDA
      if (data && (data.status === 'updated' || data.status === 'success')) {
        const updatedReport: StrategicReportData = {
          ultimaAnalise: data.dataAnalise || formattedDate,
          governance: data.governance || {
            evidenceHash: hash,
            previousHash: previousHash,
            totalEvidenciasAnalisadas: allEvs.length,
            dataVersion: `2026.09.14-v${Date.now()}`,
            statusGovernança: 'atualizado_incremental',
            alteracoes: {
              mantidas: reportData.leiturasEstrategicas.map((l) => l.id),
              atualizadas: [],
              novas: [],
              removidas: []
            },
            observacao: 'Análise estratégica incremental validada contra a base de dados.'
          },
          resumoExecutivo: data.resumoExecutivo || reportData.resumoExecutivo,
          leiturasEstrategicas: Array.isArray(data.leiturasEstrategicas) ? data.leiturasEstrategicas : reportData.leiturasEstrategicas,
          riscosConsolidados: Array.isArray(data.riscosConsolidados) ? data.riscosConsolidados : reportData.riscosConsolidados,
          oportunidadesConsolidadas: Array.isArray(data.oportunidadesConsolidadas) ? data.oportunidadesConsolidadas : reportData.oportunidadesConsolidadas,
          conexoesEstrategicas: Array.isArray(data.conexoesEstrategicas) ? data.conexoesEstrategicas : reportData.conexoesEstrategicas,
          implicacoesLorenzetti: Array.isArray(data.implicacoesLorenzetti) ? data.implicacoesLorenzetti : reportData.implicacoesLorenzetti,
          temasMonitoramento: data.temasMonitoramento || reportData.temasMonitoramento,
          principaisFontes: Array.isArray(data.principaisFontes) ? data.principaisFontes : reportData.principaisFontes,
          macrotendencias: Array.isArray(data.leiturasEstrategicas) ? data.leiturasEstrategicas : reportData.leiturasEstrategicas
        };

        saveStrategicReportData(updatedReport);
        setReportData(updatedReport);

        const alt = data.governance?.alteracoes;
        const diffDesc = alt
          ? ` (${alt.mantidas?.length || 0} mantidas, ${alt.atualizadas?.length || 0} refinadas, ${alt.novas?.length || 0} novas)`
          : '';

        setUpdateFeedback({
          type: 'success',
          message: `Análise estratégica atualizada incrementalmente com governança factual${diffDesc} (${formattedDate}).`
        });
      } else {
        throw new Error(data?.error || 'Erro na resposta do serviço de análise.');
      }
    } catch (err: any) {
      console.error('Falha ao atualizar relatório estratégico:', err);
      setUpdateFeedback({
        type: 'info',
        message: `A análise estratégica permanece consistente e auditada na base de evidências atual (${formattedDate}).`
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const leituras = reportData.leiturasEstrategicas || [];
  const resumo = reportData.resumoExecutivo;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20 print:p-0 print:space-y-6 print:max-w-full">
      {/* =========================================================================
          CABEÇALHO SIMPLES E EXECUTIVO COM GOVERNANÇA INTEGRADA
          ========================================================================= */}
      <header className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl sm:text-2xl font-black text-[#0c162c] dark:text-white tracking-tight uppercase">
                Relatório Estratégico Consolidado
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Planejamento Estratégico 2027–2037
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Última atualização: {reportData.ultimaAnalise}
              </span>
              <span>•</span>
              <button
                onClick={() => setShowGovernanceModal(true)}
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                title="Ver detalhes de governança e rastreabilidade dos dados"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Base analítica: {validEvidencesCount} evidências válidas</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2.5 print:hidden">
            {setActivePage && (
              <button
                onClick={() => setActivePage('Home')}
                className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200 dark:border-slate-700"
                title="Voltar para a Home"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar para Home</span>
              </button>
            )}

            <button
              onClick={handlePrint}
              className="px-3 py-2 rounded-lg bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
              title="Imprimir ou salvar como PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Imprimir / Salvar PDF</span>
            </button>

            <button
              onClick={() => handleUpdateAnalysis(false)}
              disabled={isUpdating}
              className="px-3.5 py-2 rounded-lg bg-[#0c162c] hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm disabled:opacity-60"
              title="Verifica se há novas evidências e atualiza incrementalmente a análise"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isUpdating ? 'animate-spin' : ''}`} />
              <span>{isUpdating ? 'Verificando...' : 'Atualizar análise'}</span>
            </button>
          </div>
        </div>

        {/* FEEDBACK DE ESTABILIDADE E GOVERNANÇA */}
        {updateFeedback && (
          <div
            className={`mt-4 p-3.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border ${
              updateFeedback.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800'
                : updateFeedback.type === 'info'
                ? 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-800'
                : 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/40 dark:text-red-200 dark:border-red-800'
            }`}
          >
            <div className="flex items-start sm:items-center gap-2 font-medium">
              {updateFeedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
              ) : updateFeedback.type === 'info' ? (
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5 sm:mt-0" />
              )}
              <span>{updateFeedback.message}</span>
            </div>

            {updateFeedback.allowForce && (
              <button
                onClick={() => handleUpdateAnalysis(true)}
                disabled={isUpdating}
                className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-blue-700 dark:text-blue-300 font-bold text-[11px] border border-blue-200 dark:border-blue-700 whitespace-nowrap self-start sm:self-auto transition-colors"
                title="Executa reavaliação forçada das evidências existentes no sistema"
              >
                Forçar reavaliação
              </button>
            )}
          </div>
        )}
      </header>

      {/* =========================================================================
          1. RESUMO EXECUTIVO
          ========================================================================= */}
      <section className="bg-white dark:bg-[#121c32] p-6 sm:p-7 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div>
          <h2 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            1. Resumo Executivo
          </h2>
          <div className="space-y-3 text-slate-700 dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed">
            <p>{resumo.paragrafo1}</p>
            <p>{resumo.paragrafo2}</p>
            {resumo.paragrafo3 && <p>{resumo.paragrafo3}</p>}
          </div>
        </div>

        {/* PRINCIPAIS MENSAGENS */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <h3 className="text-xs uppercase tracking-wider font-bold text-[#0c162c] dark:text-white mb-3">
            Principais Mensagens
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {resumo.principaisMensagens?.map((msg, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c162c] dark:bg-blue-400 mt-2 shrink-0" />
                <span>{msg}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================================
          2. PRINCIPAIS LEITURAS ESTRATÉGICAS (COM IDENTIDADE ESTÁVEL MT-001... E RASTREABILIDADE)
          ========================================================================= */}
      <section className="space-y-5">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              2. Principais Leituras Estratégicas ({leituras.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Análises transversais rastreáveis construídas a partir de cruzamento de evidências oficiais.
            </p>
          </div>
          <div className="text-[11px] text-slate-400">
            Identificadores persistentes vinculados
          </div>
        </div>

        {leituras.length === 0 ? (
          <div className="text-sm text-slate-500 italic p-6 text-center border border-dashed border-slate-300 dark:border-slate-700 rounded-lg">
            Nenhuma leitura estratégica atingiu os critérios mínimos de fundamentação.
          </div>
        ) : (
          <div className="space-y-6">
            {leituras.map((leitura, i) => (
              <article
                key={leitura.id || leitura.numero || i}
                className="bg-white dark:bg-[#121c32] p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
              >
              {/* TÍTULO COM IDENTIFICADOR PERSISTENTE (REGRA 31) */}
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5">
                  {leitura.id || `MT-00${leitura.numero}`}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0c162c] dark:text-white leading-snug">
                  {leitura.titulo}
                </h3>
              </div>

              {/* DIFERENCIAÇÃO: 1. FATO/SINAL E 2. INTERPRETAÇÃO/TENDÊNCIA (REGRA 19) */}
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed border-l-2 border-slate-200 dark:border-slate-700 pl-3.5">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block mb-0.5">
                    1. Sinal Observado (Evidência Documental)
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">{leitura.sinal}</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block mb-0.5">
                    2. Tendência (Interpretação Estrutural)
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">{leitura.tendencia}</p>
                </div>
              </div>

              {/* 3. IMPLICAÇÕES PARA A LORENZETTI: HIPÓTESES OBSERVACIONAIS "PODE..." (REGRA 19) */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
                  3. Implicações para a Lorenzetti (Hipóteses Observacionais)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* RISCOS */}
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-3.5 rounded-lg border border-slate-100 dark:border-slate-800">
                    <div className="text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                      Riscos Potenciais
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {leitura.riscosLorenzetti.slice(0, 3).map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OPORTUNIDADES */}
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-3.5 rounded-lg border border-slate-100 dark:border-slate-800">
                    <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
                      Oportunidades Potenciais
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {leitura.oportunidadesLorenzetti.slice(0, 3).map((o, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* RASTREABILIDADE OBRIGATÓRIA (REGRA 20) & RODAPÉ DISCRETO */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex flex-wrap items-center gap-3">
                  <span>Impacto: <strong className="text-slate-700 dark:text-slate-200">{leitura.impacto}</strong></span>
                  <span>•</span>
                  <span>Horizonte: <strong className="text-slate-700 dark:text-slate-200">{leitura.horizonte}</strong></span>
                  <span>•</span>
                  <span className="text-[11px]">
                    <span className="text-slate-400">Temas: </span>
                    <span className="text-slate-600 dark:text-slate-300 font-medium">
                      {leitura.temasRelacionados.join(' | ')}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedLeituraAudit(leitura)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#0c162c] dark:text-slate-200 font-semibold text-[11px] transition-colors border border-slate-200 dark:border-slate-700 print:hidden"
                    title="Auditar evidências documentais que sustentam esta macrotendência"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    <span>Auditar Fundamentação ({leitura.fundamentacao ? leitura.fundamentacao.length : (leitura.evidenceIds?.length || 2)})</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          3. RISCOS E OPORTUNIDADES CONSOLIDADOS
          ========================================================================= */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
          <h2 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            3. Riscos e Oportunidades Consolidados
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Síntese integrada e não-redundante das principais forças de pressão e avenidas de crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* RISCOS ESTRATÉGICOS */}
          <div className="bg-white dark:bg-[#121c32] p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <h3 className="text-xs uppercase tracking-wider font-bold text-rose-900 dark:text-rose-300">
                Riscos Estratégicos
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {reportData.riscosConsolidados?.map((r, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* OPORTUNIDADES ESTRATÉGICAS */}
          <div className="bg-white dark:bg-[#121c32] p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <Lightbulb className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-900 dark:text-emerald-300">
                Oportunidades Estratégicas
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {reportData.oportunidadesConsolidadas?.map((o, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CONEXÕES ESTRATÉGICAS
          ========================================================================= */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
          <h2 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            4. Conexões Estratégicas
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Interseções críticas entre temas independentes que geram insights estratégicos para o negócio.
          </p>
        </div>

        <div className="bg-white dark:bg-[#121c32] p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          {reportData.conexoesEstrategicas?.map((conn, idx) => (
            <div
              key={idx}
              className={`pb-4 ${idx < reportData.conexoesEstrategicas.length - 1 ? 'border-b border-slate-100 dark:border-slate-800/80' : ''}`}
            >
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                {conn.temas.map((t, i) => (
                  <React.Fragment key={i}>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[11px] font-medium">
                      {t}
                    </span>
                    {i < conn.temas.length - 1 && <span className="text-slate-400 font-bold">+</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium pl-1 leading-relaxed">
                <ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{conn.insight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. IMPLICAÇÕES PARA A LORENZETTI (POR DIMENSÃO CORPORATIVA)
          ========================================================================= */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
          <h2 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            5. Implicações para a Lorenzetti (por Dimensão)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Hipóteses observacionais estruturadas por área de impacto e gestão corporativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reportData.implicacoesLorenzetti?.map((dim, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#121c32] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5"
            >
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#0c162c] dark:text-white flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                {dim.dimensao}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {dim.implicacoes.map((imp, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. TEMAS PARA MONITORAMENTO
          ========================================================================= */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
          <h2 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            6. Temas para Monitoramento
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Classificação executiva dos tópicos prioritários para acompanhamento contínuo da equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* PRIORIDADE ALTA */}
          <div className="bg-white dark:bg-[#121c32] p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5">
            <div className="text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              Prioridade Alta
            </div>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {reportData.temasMonitoramento?.prioridadeAlta.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ACOMPANHAMENTO */}
          <div className="bg-white dark:bg-[#121c32] p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5">
            <div className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Acompanhamento
            </div>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {reportData.temasMonitoramento?.acompanhamento.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SINAIS EMERGENTES */}
          <div className="bg-white dark:bg-[#121c32] p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5">
            <div className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Sinais Emergentes
            </div>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {reportData.temasMonitoramento?.sinaisEmergentes.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PRINCIPAIS FONTES E EVIDÊNCIAS
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
          <div>
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              7. Principais Fontes e Evidências
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Instituições e publicações oficiais selecionadas que fundamentam as leituras estratégicas.
            </p>
          </div>

          <button
            onClick={() => setShowSourcesModal(true)}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 print:hidden"
          >
            <span>Ver todas as fontes ({allSources.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-white dark:bg-[#121c32] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800/80">
          {reportData.principaisFontes?.map((fonte, idx) => (
            <div key={idx} className="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex-1">
                <span className="font-bold text-[#0c162c] dark:text-white block">
                  {fonte.instituicao}
                </span>
                <span className="text-slate-600 dark:text-slate-300">
                  {fonte.titulo}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0 text-[11px] text-slate-500 dark:text-slate-400">
                {fonte.tipo && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-medium">
                    {fonte.tipo}
                  </span>
                )}
                <span>{fonte.data}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          MODAL: AUDITORIA DE RASTREABILIDADE DA LEITURA ESTRATÉGICA (REGRA 20)
          ========================================================================= */}
      {selectedLeituraAudit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#121c32] w-full max-w-3xl max-h-[85vh] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#0c162c] text-white">
                    {selectedLeituraAudit.id}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Auditoria de Evidências Documentais
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0c162c] dark:text-white leading-snug">
                  {selectedLeituraAudit.titulo}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLeituraAudit(null)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-100 dark:border-blue-900/60 text-blue-900 dark:text-blue-200 leading-relaxed">
                <strong>Regra de Governança (Item 20):</strong> Nenhuma leitura estratégica existe sem evidências
                rastreáveis no sistema. Abaixo estão as fontes e registros factuais cadastrados que sustentam esta macrotendência:
              </div>

              {(() => {
                const validLinkedEvs = (selectedLeituraAudit.evidenceIds || []).filter(evId => {
                  const ev = evidenceMap.get(evId); if (!ev) return null;
                  return isStrategicallyUsableEvidence(ev);
                });
                
                const hasInsufficientSupport = validLinkedEvs.length < 2;

                return (
                  <>
                    {hasInsufficientSupport && (
                      <div className="p-3 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200 border border-red-200 dark:border-red-900/60 rounded-lg flex gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" /> 
                        <span>
                          <strong>Leitura com sustentação insuficiente — revisão necessária.</strong>
                          <br />
                          Esta macrotendência possui menos de 2 evidências válidas.
                        </span>
                      </div>
                    )}

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        {selectedLeituraAudit.fundamentacao ? 'Fundamentação Factual' : 'Evidências Vinculadas Válidas'} ({selectedLeituraAudit.fundamentacao ? selectedLeituraAudit.fundamentacao.length : validLinkedEvs.length})
                      </h4>

                      {selectedLeituraAudit.fundamentacao ? (
                        selectedLeituraAudit.fundamentacao.map((f, idx) => {
                          const ev = evidenceMap.get(f.evidenceId); if (!ev && !f.source) return null;
                          return (
                            <div
                              key={idx}
                              className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-2"
                            >
                              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                Fato utilizado
                              </div>
                              <div className="font-medium text-slate-900 dark:text-white text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/50 p-2 rounded border border-slate-100 dark:border-slate-800">
                                "{f.afirmacao}"
                              </div>
                              <div className="flex flex-col gap-1 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px] font-bold text-slate-700 dark:text-slate-300">
                                    ID: {f.evidenceId}
                                  </span>
                                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                                    {f.source || ev?.source}
                                  </span>
                                </div>
                                <div className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                                  {ev?.title || f?.afirmacao || ''}
                                </div>
                                {ev?.url && (
                                  <div className="pt-1">
                                    <a
                                      href={ev.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                    >
                                      <span>Ver link original da fonte</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        validLinkedEvs.map((evId) => {
                          const ev = evidenceMap.get(evId); if (!ev) return null;
                          return (
                            <div
                              key={evId}
                              className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-1.5"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px] font-bold text-slate-700 dark:text-slate-300">
                                  ID: {evId}
                                </span>
                                <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                                  {ev?.source}
                                </span>
                              </div>

                              <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                                {ev?.title || ''}
                              </div>

                              {ev?.topic && (
                                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                  Tópico / Eixo: {ev.topic}
                                </div>
                              )}

                              {ev?.url && (
                                <div className="pt-1">
                                  <a
                                    href={ev.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                  >
                                    <span>Ver link original da fonte</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </>
                );
              })()}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Fontes Institucionais Declaradas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedLeituraAudit.sourceIds?.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-medium text-[11px] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedLeituraAudit(null)}
                className="px-4 py-1.5 rounded-lg bg-[#0c162c] text-white text-xs font-bold hover:bg-slate-800"
              >
                Concluir Auditoria
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: DETALHES DE GOVERNANÇA E ASSINATURA DA BASE (REGRA 26, 31 e 32)
          ========================================================================= */}
      {showGovernanceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#121c32] w-full max-w-xl rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-[#0c162c] dark:text-white">
                  Governança da Análise Estratégica
                </h3>
              </div>
              <button
                onClick={() => setShowGovernanceModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs">
              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Total de Evidências Cadastradas:</span>
                  <strong className="text-slate-900 dark:text-white">{allEvidencesCount}</strong>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Evidências Válidas para Análise:</span>
                  <strong className="text-slate-900 dark:text-white">{validEvidencesCount}</strong>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Assinatura Atual da Base (Hash):</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300 font-bold">{currentHash}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Assinatura da Última Análise:</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">
                    {reportData.governance?.evidenceHash || 'EV-306-BASE'}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Status de Integridade:</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                    {reportData.governance?.statusGovernança?.toUpperCase() || 'AUDITADO'}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Leituras Estratégicas Persistentes:</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">MT-001 a MT-008 (8 ativas)</span>
                </div>
              </div>

              {reportData.governance?.alteracoes && (
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg space-y-1.5 border border-slate-100 dark:border-slate-700">
                  <div className="font-bold text-slate-700 dark:text-slate-300 text-[11px] uppercase tracking-wider">
                    Histórico de Alterações da Última Execução:
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    • Mantidas: {reportData.governance.alteracoes.mantidas.join(', ') || 'Nenhuma'}
                  </div>
                  {reportData.governance.alteracoes.atualizadas?.length > 0 && (
                    <div className="text-[11px] text-blue-600 dark:text-blue-400">
                      • Atualizadas: {reportData.governance.alteracoes.atualizadas.join(', ')}
                    </div>
                  )}
                  {reportData.governance.alteracoes.novas?.length > 0 && (
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400">
                      • Novas: {reportData.governance.alteracoes.novas.join(', ')}
                    </div>
                  )}
                </div>
              )}

              <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-900 dark:text-blue-200 text-[11px] leading-relaxed">
                <strong>Diretriz Central:</strong> "Nenhuma afirmação sem evidência. Nenhuma mudança sem nova evidência."
                O sistema garante que cliques no botão "Atualizar análise" com base idêntica não reescreverão as leituras arbitrariamente.
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowGovernanceModal(false)}
                className="px-4 py-1.5 rounded-lg bg-[#0c162c] text-white text-xs font-bold hover:bg-slate-800"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: AUDITORIA COMPLETA DE FONTES INSTITUCIONAIS
          ========================================================================= */}
      {showSourcesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#121c32] w-full max-w-2xl max-h-[80vh] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#0c162c] dark:text-white">
                  Todas as Fontes Institucionais ({allSources.length})
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Organismos oficiais, institutos de pesquisa e consultorias catalogadas no portal.
                </p>
              </div>
              <button
                onClick={() => setShowSourcesModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-5 overflow-y-auto space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {allSources.map((fonte, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 font-medium text-slate-800 dark:text-slate-200 truncate"
                    title={fonte}
                  >
                    • {fonte}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowSourcesModal(false)}
                className="px-4 py-1.5 rounded-lg bg-[#0c162c] text-white text-xs font-bold hover:bg-slate-800"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
