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
  Database,
  Download,
  Copy,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  getStrategicReportData,
  saveStrategicReportData,
  subscribeToReportUpdates,
  StrategicReportData,
  LeituraEstrategica,
  computeStrategicContextHash,
  isStrategicallyUsableEvidence,
  isEditorialMode
} from '../../data/strategicReportState';
import { getPortalMetricsSummary, getAllSystemEvidences, SystemEvidenceItem } from '../../data/portalMetrics';
import { getStrategicPagesContext } from '../../data/pages/strategicPagesRegistry';

interface StrategicReportViewProps {
  setActivePage?: (page: string) => void;
}

export const StrategicReportView: React.FC<StrategicReportViewProps> = ({ setActivePage }) => {
  const [reportData, setReportData] = useState<StrategicReportData>(getStrategicReportData());
  const [isEditorial, setIsEditorial] = useState<boolean>(isEditorialMode());
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateFeedback, setUpdateFeedback] = useState<{
    type: 'success' | 'info' | 'error';
    message: string;
    allowForce?: boolean;
  } | null>(null);

  // Fonte de dados de evidências e páginas do sistema
  const allEvs = React.useMemo(() => getAllSystemEvidences(), []);
  const strategicPages = React.useMemo(() => getStrategicPagesContext(), []);

  // Modal de todas as fontes
  const [showSourcesModal, setShowSourcesModal] = useState(false);
  const [allSources, setAllSources] = useState<string[]>([]);

  // Modal de fundamentação executiva de uma leitura específica
  const [selectedLeituraAudit, setSelectedLeituraAudit] = useState<LeituraEstrategica | null>(null);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  // Mapeamento confiável de supportingPageId para rota ativa do portal
  const pageIdToRouteMap: Record<string, string> = {
    'jornada-compra': 'Jornada de Compra',
    'perfil-consumo': 'Perfil de Consumo',
    'eco-macro-pib': 'PIB',
    'eco-exportacao': 'Exportação',
    'eco-idh': 'IDH',
    'eco-pac': 'Novo PAC',
    'eco-reforma-tributaria': 'Reforma Tributária',
    'eco-eleicoes': 'Eleições',
    'endividamento-familias': 'Endividamento das Famílias e Empresas',
    'endividamento-empresas': 'Endividamento das Famílias e Empresas',
    'rendimento-brasileiro': 'Rendimento do Brasileiro',
    'juros-real': 'Taxa de Juros Real',
    'juros-selic': 'Juros / Selic',
    'eco-cambio': 'Câmbio / dólar',
    'eco-emprego': 'Emprego e Desemprego',
    'eco-inflacao': 'Inflação',
    'eco-eletroeletronico': 'Indústria do Setor Eletroeletrônico',
    'hab-deficit': 'Déficit Habitacional',
    'hab-lares-unipessoais': 'Lares Unipessoais',
    'hab-mercado': 'Mercado Imobiliário',
    'hab-programas': 'Programas Sociais',
    'amb-fenomenos': 'Fenômenos Climáticos',
    'amb-mudancas': 'Mudanças Climáticas',
    'amb-aquecimento': 'Aquecimento Global',
    'ene-renovavel': 'Energia Renovável',
    'ene-carbono': 'Mercado de Carbono',
    'ene-marcos': 'Marcos Regulatórios',
    'ene-datacenters': 'Data Centers (Energia)',
    'geo-commodities': 'Commodities',
    'geo-logistica': 'Cenário Logístico',
    'geo-africa': 'África',
    'geo-america-norte': 'América do Norte',
    'geo-america-latina': 'América Latina',
    'geo-asia': 'Ásia',
    'geo-conflitos': 'Conflitos e Tensões Internacionais',
    'geo-economia-mundial': 'Economia Mundial',
    'geo-europa': 'Europa',
    'china': 'China',
    'estados-unidos': 'América do Norte',
    'casa-conectada': 'Casa Conectada',
    'ecommerce': 'E-commerce',
    'tendencias-produto': 'Tendências de Produto',
    'transformacao-varejo': 'Transformação do Varejo',
    'transformacoes-sociais': 'Transformações Sociais',
    'esg-top': 'Top Empresas ESG',
    'esg-concorrentes': 'Concorrentes ESG',
    'car-perfil': 'Perfil das gerações',
    'car-mudanca': 'Mudança de carreiras',
    'car-empreendedorismo': 'Empreendedorismo',
    'car-escala': 'Escala 6x1',
    'tra-saude': 'Saúde mental no trabalho',
    'tra-nr1': 'NR-1',
    'tra-diversidade': 'Diversidade e inclusão',
    'tra-assedio': 'Assédio no ambiente de trabalho',
    'tq-maodeobra': 'Mão de obra qualificada',
    'tq-softskills': 'Soft skills',
    'tq-iafuturo': 'IA e o futuro do trabalho',
    'tq-automacao': 'Automação'
  };

  const handleNavigateToPage = (pageId: string, pageTitle?: string) => {
    if (!setActivePage) return;
    const targetRoute = pageIdToRouteMap[pageId] || pageTitle || pageId;
    setSelectedLeituraAudit(null);
    setActivePage(targetRoute);
  };

  // Modal de detalhes de governança do relatório
  const [showGovernanceModal, setShowGovernanceModal] = useState(false);

  // Modal de exportação de relatório publicado
  const [showExportModal, setShowExportModal] = useState(false);
  const [copiedExport, setCopiedExport] = useState(false);

  // Cache de todas as evidências do sistema para busca rápida por ID
  const [evidenceMap, setEvidenceMap] = useState<Map<string, SystemEvidenceItem>>(new Map());
  const [allEvidencesCount, setAllEvidencesCount] = useState<number>(0);
  const [validEvidencesCount, setValidEvidencesCount] = useState<number>(0);
  const [currentHash, setCurrentHash] = useState<string>('');

  useEffect(() => {
    setIsEditorial(isEditorialMode());
    const report = getStrategicReportData();
    setReportData(report);

    const metrics = getPortalMetricsSummary();
    setAllSources(metrics.fontesList);

    const allEvs = getAllSystemEvidences();
    setAllEvidencesCount(allEvs.length);
    setValidEvidencesCount(allEvs.filter(isStrategicallyUsableEvidence).length);

    const hash = computeStrategicContextHash(allEvs);
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
   * Gera o conteúdo completo em TypeScript para o arquivo src/data/publishedReport.ts
   */
  const getPublishedReportFileContent = () => {
    const now = new Date().toISOString();
    return `import { StrategicReportData } from './strategicReportState';

/**
 * RELATÓRIO ESTRATÉGICO PUBLICADO
 *
 * Este arquivo é o relatório oficial exibido a todos os usuários do portal.
 * NÃO é editado à mão e NÃO é gerado em tempo de execução.
 *
 * Fluxo de atualização:
 *   1. abrir o portal em modo editorial (?editorial=1)
 *   2. clicar em "Atualizar análise"
 *   3. revisar o resultado
 *   4. clicar em "Exportar relatório publicado"
 *   5. substituir o conteúdo deste arquivo pelo texto exportado
 *   6. republicar
 *
 * null = nenhum relatório publicado ainda.
 */
export const PUBLISHED_REPORT: StrategicReportData | null = ${JSON.stringify(reportData, null, 2)};

export const PUBLISHED_AT: string | null = ${JSON.stringify(now)};
`;
  };

  const handleCopyExportText = async () => {
    const content = getPublishedReportFileContent();
    try {
      await navigator.clipboard.writeText(content);
      setCopiedExport(true);
      setTimeout(() => setCopiedExport(false), 3000);
    } catch (err) {
      console.error('Falha ao copiar texto do relatório:', err);
    }
  };

  const handleDownloadExportFile = () => {
    const content = getPublishedReportFileContent();
    const blob = new Blob([content], { type: 'text/typescript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'publishedReport.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  /**
   * Atualização com Governança das Evidências (Regras 18 a 34):
   * - Verifica hash da base (detecta se mudou).
   * - Se inalterado, não recalcula arbitrariamente.
   * - Se forçado ou com novos dados, faz atualização incremental preservando IDs existentes.
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
    const strategicPages = getStrategicPagesContext();
    const hash = computeStrategicContextHash(allEvs, strategicPages);
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
          strategicPages: strategicPages,
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

      // TRATAMENTO HONESTO DE ERRO (NÃO MASCARAR ERRO COMO SUCESSO)
      if (data && data.status === 'error') {
        setUpdateFeedback({
          type: 'error',
          message: data.mensagem || 'Não foi possível atualizar a análise. O relatório anterior foi preservado.'
        });
        return;
      }

      // REGRA 26: BASE INALTERADA
      if (data && data.status === 'unmodified') {
        setUpdateFeedback({
          type: 'info',
          message: `A análise já está atualizada com as informações disponíveis (base de dados inalterada: ${allEvs.length} evidências, assinatura: ${hash}).`,
          allowForce: true
        });
        return;
      }

      // ATUALIZAÇÃO INCREMENTAL BEM-SUCEDIDA
      if (data && data.status === 'updated') {
        const updatedReport: StrategicReportData = {
          ultimaAnalise: data.dataAnalise || formattedDate,
          governance: data.governance || {
            evidenceHash: hash,
            previousHash: previousHash,
            totalEvidenciasAnalisadas: allEvs.length,
            dataVersion: `2026.09.14-v${Date.now()}`,
            statusGovernança: data.leiturasEstrategicas?.length > 0 ? 'atualizado_incremental' : 'insuficiente',
            alteracoes: {
              mantidas: reportData.leiturasEstrategicas.map((l) => l.id),
              atualizadas: [],
              novas: [],
              removidas: []
            },
            observacao: 'Análise estratégica incremental validada contra a base de dados.',
            diagnostico: data.diagnostico
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

        if (data.leiturasEstrategicas?.length === 0) {
          setUpdateFeedback({
            type: 'info',
            message: `Avaliação concluída: nenhuma macrotendência atingiu validação factual suficiente (${formattedDate}).`
          });
        } else {
          setUpdateFeedback({
            type: 'success',
            message: `Análise estratégica atualizada incrementalmente com governança factual${diffDesc} (${formattedDate}).`
          });
        }
      } else {
        throw new Error(data?.detalhe || data?.error || 'Erro na resposta do serviço de análise.');
      }
    } catch (err: any) {
      console.error('Falha ao atualizar relatório estratégico:', err);
      setUpdateFeedback({
        type: 'error',
        message: 'Falha na comunicação com o serviço de inteligência estratégica. O relatório anterior foi preservado.'
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
          INDICADOR VISUAL DISCRETO DO MODO EDITORIAL (REGRA 5)
          ========================================================================= */}
      {isEditorial && (
        <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-center justify-between gap-3 shadow-sm print:hidden">
          <div className="flex items-center gap-2.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 animate-pulse" />
            <span>
              <strong>Modo editorial ativo</strong> — as alterações não são visíveis para os demais usuários até que o relatório seja exportado e publicado.
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-mono text-[11px] font-bold shrink-0">
            ?editorial=1
          </span>
        </div>
      )}

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
                Última atualização: {reportData.ultimaAnalise || 'Pendente de publicação'}
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

            {/* BOTÕES CONDICIONAIS EXCLUSIVOS DO MODO EDITORIAL (REGRAS 3 E 4) */}
            {isEditorial && (
              <>
                <button
                  onClick={() => setShowExportModal(true)}
                  className="px-3 py-2 rounded-lg bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                  title="Exporta o relatório atual como código TypeScript para publicação"
                >
                  <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Exportar relatório publicado</span>
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
              </>
            )}
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
          2. PRINCIPAIS LEITURAS ESTRATÉGICAS (COM IDENTIDADE ESTÁVEL E RASTREABILIDADE)
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
                  {(() => {
                    const pagesCount = leitura.supportingPageIds?.length || 0;
                    const factsCount = leitura.fundamentacao?.length || leitura.supportingFactIds?.length || 0;
                    const labelText = pagesCount > 0 && factsCount > 0
                      ? `Ver Fundamentação (${pagesCount} ${pagesCount === 1 ? 'página' : 'páginas'} · ${factsCount} ${factsCount === 1 ? 'fato' : 'fatos'})`
                      : pagesCount > 0
                      ? `Ver Fundamentação (${pagesCount} ${pagesCount === 1 ? 'página' : 'páginas'})`
                      : 'Ver Fundamentação';

                    return (
                      <button
                        onClick={() => {
                          setSelectedLeituraAudit(leitura);
                          setShowTechnicalDetails(false);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#0c162c] dark:text-slate-200 font-semibold text-[11px] transition-colors border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 cursor-pointer print:hidden"
                        title="Ver páginas do portal e fatos que fundamentam esta leitura estratégica"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{labelText}</span>
                      </button>
                    );
                  })()}
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
          {(reportData.conexoesEstrategicas || []).map((conn, idx) => (
            <div
              key={idx}
              className={`pb-4 ${idx < (reportData.conexoesEstrategicas?.length || 0) - 1 ? 'border-b border-slate-100 dark:border-slate-800/80' : ''}`}
            >
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                {(conn.temas || []).map((t, i) => (
                  <React.Fragment key={i}>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[11px] font-medium">
                      {t}
                    </span>
                    {i < (conn.temas?.length || 0) - 1 && <span className="text-slate-400 font-bold">+</span>}
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
          {(reportData.implicacoesLorenzetti || []).map((dim, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#121c32] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5"
            >
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#0c162c] dark:text-white flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                {dim.dimensao}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {(dim.implicacoes || []).map((imp, i) => (
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
              {(reportData.temasMonitoramento?.prioridadeAlta || []).map((t, idx) => (
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
              {(reportData.temasMonitoramento?.acompanhamento || []).map((t, idx) => (
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
              {(reportData.temasMonitoramento?.sinaisEmergentes || []).map((t, idx) => (
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
          MODAL: FUNDAMENTAÇÃO EXECUTIVA DA LEITURA ESTRATÉGICA (VER FUNDAMENTAÇÃO)
          Hierarquia: MACROTENDÊNCIA -> PÁGINA DO PORTAL -> FATO/INDICADOR -> FONTE
          ========================================================================= */}
      {selectedLeituraAudit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#121c32] w-full max-w-3xl max-h-[88vh] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
            
            {/* CABEÇALHO EXECUTIVO */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/60 dark:bg-slate-800/40">
              <div className="space-y-1 pr-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <h3 className="text-base font-bold text-[#0c162c] dark:text-white">
                    Fundamentação da Análise Estratégica
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-blue-700 dark:text-blue-300">
                    {selectedLeituraAudit.id}
                  </span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {selectedLeituraAudit.titulo}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                  Esta leitura estratégica foi consolidada a partir das seguintes páginas e fatos apurados no portal:
                </p>
              </div>

              <button
                onClick={() => setSelectedLeituraAudit(null)}
                className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* CORPO DO MODAL — HIERARQUIA EXECUTIVA: PÁGINAS -> FATOS -> FONTES */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              
              {/* LISTA DE PÁGINAS DO PORTAL */}
              <div className="space-y-4">
                {selectedLeituraAudit.supportingPageIds && selectedLeituraAudit.supportingPageIds.length > 0 ? (
                  selectedLeituraAudit.supportingPageIds.map(pageId => {
                    const page = strategicPages.find(p => p.pageId === pageId);
                    if (!page) return null;
                    
                    // Fatos vinculados da página
                    const usedFacts = (page.factualContent || []).filter(f =>
                      selectedLeituraAudit.supportingFactIds?.includes(f.id) ||
                      selectedLeituraAudit.fundamentacao?.some(fun => fun.factId === f.id)
                    );
                    
                    return (
                      <div
                        key={pageId}
                        className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4 sm:p-5 shadow-xs space-y-4"
                      >
                        {/* CABEÇALHO DA PÁGINA COM AÇÃO DE NAVEGAÇÃO */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                          <div className="space-y-0.5">
                            <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                              Página do Portal
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-[#0c162c] dark:text-white">
                              {page.pageTitle}
                            </h4>
                          </div>

                          {setActivePage && (
                            <button
                              onClick={() => handleNavigateToPage(pageId, page.pageTitle)}
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-semibold text-xs transition-colors border border-blue-200 dark:border-blue-800 self-start sm:self-auto cursor-pointer"
                              title={`Abrir página ${page.pageTitle} no portal`}
                            >
                              <span>Ir para página</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* FATOS UTILIZADOS DESSA PÁGINA */}
                        {usedFacts.length > 0 ? (
                          <div className="space-y-2.5">
                            <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                              Fatos e indicadores utilizados:
                            </div>
                            <div className="space-y-2.5">
                              {usedFacts.map(fact => {
                                // Resolução de Fonte e Link associado
                                const sourceItem = page.sources?.find(s => s.id === fact.sourceId);
                                const evidenceItem = allEvs.find(e => e.id === fact.evidenceId);
                                const sourceName = sourceItem?.name || (fact as any).source || fact.sourceId;
                                const originalUrl = sourceItem?.url || evidenceItem?.url;

                                return (
                                  <div
                                    key={fact.id}
                                    className="p-3 sm:p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-2"
                                  >
                                    <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                                      {fact.statement}
                                    </div>

                                    {/* FONTE E LINK INTEGRADOS DIRETAMENTE AO FATO */}
                                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px]">
                                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                                        <span className="font-semibold text-slate-500 dark:text-slate-400">Fonte:</span>
                                        <span className="font-bold text-[#0c162c] dark:text-slate-200">{sourceName}</span>
                                      </div>

                                      {originalUrl && (
                                        <a
                                          href={originalUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                                        >
                                          <span>Link original</span>
                                          <ExternalLink className="w-3 h-3" />
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 italic">
                            O diagnóstico e a conjuntura estrutural desta página foram utilizados como suporte de contexto para esta leitura.
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-500 dark:text-slate-400">
                    Nenhuma página cadastrada para esta leitura.
                  </div>
                )}
              </div>

              {/* DETALHES TÉCNICOS (RETRÁTIL/ACCORDION PARA NÃO POLUIR A VISÃO EXECUTIVA) */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                  className="flex items-center justify-between w-full p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 text-xs font-semibold text-slate-600 dark:text-slate-400 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-slate-400" />
                    <span>Detalhes técnicos e rastreabilidade cadastrada</span>
                  </span>
                  {showTechnicalDetails ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {showTechnicalDetails && (
                  <div className="mt-3 p-4 rounded-lg bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 animate-in fade-in duration-150 text-xs font-mono">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Páginas Cadastradas (supportingPageIds):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedLeituraAudit.supportingPageIds?.map(pid => (
                          <span key={pid} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px]">
                            {pid}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Fatos Registrados (supportingFactIds):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(selectedLeituraAudit.supportingFactIds || []).length > 0 ? (
                          selectedLeituraAudit.supportingFactIds.map(fid => (
                            <span key={fid} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px]">
                              {fid}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-slate-400 italic">Nenhum factId isolado</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Evidências do Sistema (evidenceIds):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(selectedLeituraAudit.evidenceIds || []).length > 0 ? (
                          selectedLeituraAudit.evidenceIds.map(eid => (
                            <span key={eid} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px]">
                              {eid}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-slate-400 italic">Nenhum evidenceId isolado</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Fontes Declaradas (sourceIds):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(selectedLeituraAudit.sourceIds || []).length > 0 ? (
                          selectedLeituraAudit.sourceIds.map((sid, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px]">
                              {sid}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-slate-400 italic">Nenhum sourceId isolado</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* RODAPÉ DO MODAL COM BOTÃO FECHAR */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedLeituraAudit(null)}
                className="px-5 py-2 rounded-lg bg-[#0c162c] text-white text-xs font-bold hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Fechar
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
                  <span className="font-mono text-slate-700 dark:text-slate-300">
                    {reportData.leiturasEstrategicas?.length
                      ? `${reportData.leiturasEstrategicas.map(l => l.id).join(', ')} (${reportData.leiturasEstrategicas.length} ativas)`
                      : 'Nenhuma leitura ativa'}
                  </span>
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

              {reportData.governance?.diagnostico && (
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg space-y-2 border border-slate-100 dark:border-slate-700">
                  <div className="font-bold text-slate-700 dark:text-slate-300 text-[11px] uppercase tracking-wider">
                    Diagnóstico do Gate de Governança:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                    <div>• Candidatas Propostas: <strong>{reportData.governance.diagnostico.candidatasPropostas}</strong></div>
                    <div>• Candidatas Validadas: <strong>{reportData.governance.diagnostico.candidatasValidadas}</strong></div>
                    <div>• Páginas Analisadas: <strong>{reportData.governance.diagnostico.paginasUtilizadas}</strong></div>
                    <div>• Fatos Mapeados: <strong>{reportData.governance.diagnostico.fatosDisponiveis}</strong></div>
                  </div>
                  {reportData.governance.diagnostico.candidatasRejeitadas?.length > 0 && (
                    <div className="pt-1 border-t border-slate-200 dark:border-slate-700 space-y-1">
                      <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                        Rejeições no Gate ({reportData.governance.diagnostico.candidatasRejeitadas.length}):
                      </span>
                      <ul className="space-y-1 text-[10px] text-slate-600 dark:text-slate-400">
                        {reportData.governance.diagnostico.candidatasRejeitadas.map((rej, rIdx) => (
                          <li key={rIdx} className="leading-tight">
                            • <strong>{rej.idProposto} ({rej.titulo})</strong>: {rej.motivo}
                          </li>
                        ))}
                      </ul>
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

      {/* =========================================================================
          MODAL: EXPORTAR RELATÓRIO PUBLICADO (REGRA 4)
          ========================================================================= */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#121c32] w-full max-w-3xl max-h-[85vh] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-800">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0c162c] dark:text-white">
                    Exportar Relatório Publicado
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Gere o código TypeScript para substituir em <code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px]">src/data/publishedReport.ts</code>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                  Instruções para Publicação Oficial:
                </div>
                <ol className="list-decimal pl-4 space-y-1 text-[11px]">
                  <li>Copie o código gerado abaixo ou baixe o arquivo <code>publishedReport.ts</code>.</li>
                  <li>Substitua o arquivo em <code>src/data/publishedReport.ts</code> no repositório.</li>
                  <li>Faça a compilação e deploy — o relatório passará a ser exibido para todos os usuários automaticamente sem depender de <code>localStorage</code>.</li>
                </ol>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Prévia do arquivo gerado ({reportData.leiturasEstrategicas?.length || 0} macrotendências ativas):</span>
                  <span className="font-mono text-[11px]">src/data/publishedReport.ts</span>
                </div>
                <pre className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto max-h-72 border border-slate-800">
                  <code>{getPublishedReportFileContent()}</code>
                </pre>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {copiedExport ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Código copiado para a área de transferência!
                  </span>
                ) : (
                  'Pronto para substituição no código.'
                )}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyExportText}
                  className="px-3.5 py-2 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                >
                  {copiedExport ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copiedExport ? 'Copiado!' : 'Copiar código'}</span>
                </button>

                <button
                  onClick={handleDownloadExportFile}
                  className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar publishedReport.ts</span>
                </button>

                <button
                  onClick={() => setShowExportModal(false)}
                  className="px-3.5 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
