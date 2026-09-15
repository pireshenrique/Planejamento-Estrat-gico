import React from 'react';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../../layout/HeaderKpiCard';
import { EvidenceCard } from '../../layout/EvidenceCard';
import { ENDIVIDAMENTO_FAMILIAS_EVIDENCES } from '../../../data/evidences/endividamento_familias';
import { ENDIVIDAMENTO_DATA } from '../../../data/economia-brasileira/endividamento';
import { ENDIVIDAMENTO_FAMILIAS_PAGE } from '../../../data/pages/EndividamentoFamilias';
import { 
  CreditCard, 
  Wallet, 
  AlertTriangle, 
  BarChart3, 
  Search, 
  Target, 
  TrendingUp,
  Lightbulb,
  Percent,
  Layers,
  HelpCircle,
  Users,
  Sparkles,
  DollarSign
} from 'lucide-react';

interface EndividamentoFamiliasViewProps {
  setActivePage?: (page: string) => void;
  embedded?: boolean;
}

const formatPercent = (value: number) =>
  `${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}%`;

export const EndividamentoFamiliasView: React.FC<EndividamentoFamiliasViewProps> = ({ setActivePage, embedded = false }) => {
  const getVal = (id: string) => ENDIVIDAMENTO_FAMILIAS_PAGE.factualContent.find(f => f.id === id)?.value?.toString().replace(".", ",");
  const modalidadesDivida = ENDIVIDAMENTO_DATA.familias.modalidadesDivida;
  const causasEndividamento = ENDIVIDAMENTO_DATA.familias.causasEndividamento;
  const custoCredito = ENDIVIDAMENTO_DATA.familias.custoCredito;
  const vulnerabilidadeRenda = ENDIVIDAMENTO_DATA.familias.vulnerabilidadeRenda;
  const bets = ENDIVIDAMENTO_DATA.familias.bets;

  const handleDownloadPdf = async (fileName: string = 'Endividamento_Familias_2026.pdf') => {
    try {
      const cleanName = fileName.replace(/^\//, '');
      const candidates = [
        `/${cleanName}`,
        cleanName.endsWith('.pdf') ? `/${cleanName.replace(/\.pdf$/, '')}-1.pdf` : `/${cleanName}-1.pdf`
      ];

      let blob: Blob | null = null;
      for (const targetUrl of candidates) {
        try {
          const response = await fetch(`${targetUrl}?t=${Date.now()}`, { cache: 'no-store' });
          if (response.ok) {
            blob = await response.blob();
            break;
          }
        } catch {
          // try next candidate
        }
      }

      if (!blob) throw new Error('Falha ao obter arquivo');

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', cleanName);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      const cleanName = fileName.replace(/^\//, '');
      const link = document.createElement('a');
      link.href = `/${cleanName}`;
      link.download = cleanName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* HEADER */}
      {!embedded ? (
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
            <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Endividamento das Famílias
            </h1>
            <p className="text-[17px] text-slate-600 dark:text-slate-400">
              Acompanhamento do endividamento doméstico (Peic/CNC e Banco Central), comprometimento da renda e perfil das dívidas.
            </p>
          </div>

          <ResponsiveContainer minWidth="200px" gap="gap-3" className="flex-1">
            {/* Card 1: Endividamento 2025 */}
            <HeaderKpiCard
              title={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.title}
              value={`${getVal('endividamento-familias::kpi::bacen')}%`}
              context={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.context}
              explanation={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.explanation}
              source={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.source}
              icon={Wallet}
              color="emerald"
            />

            {/* Card 2: Famílias Endividadas */}
            <HeaderKpiCard
              title={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.title}
              value={`${getVal('endividamento-familias::kpi::familias-endividadas')}%`}
              context={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.context}
              explanation={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.explanation}
              source={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.source}
              icon={CreditCard}
              color="amber"
            />

            {/* Card 3: Renda Comprometida */}
            <HeaderKpiCard
              title={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.title}
              value={`${getVal('endividamento-familias::kpi::renda-comprometida')}%`}
              context={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.context}
              explanation={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.explanation}
              source={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.source}
              icon={AlertTriangle}
              color="rose"
            />
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Endividamento 2025 */}
          <HeaderKpiCard
            title={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.title}
            value={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.value}
            context={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.context}
            explanation={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.explanation}
            source={ENDIVIDAMENTO_DATA.familias.kpis.endividamentoBacen.source}
            icon={Wallet}
            color="emerald"
          />

          {/* Card 2: Famílias Endividadas */}
          <HeaderKpiCard
            title={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.title}
            value={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.value}
            context={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.context}
            explanation={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.explanation}
            source={ENDIVIDAMENTO_DATA.familias.kpis.familiasEndividadas.source}
            icon={CreditCard}
            color="amber"
          />

          {/* Card 3: Renda Comprometida */}
          <HeaderKpiCard
            title={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.title}
            value={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.value}
            context={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.context}
            explanation={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.explanation}
            source={ENDIVIDAMENTO_DATA.familias.kpis.rendaComprometida.source}
            icon={AlertTriangle}
            color="rose"
          />
        </div>
      )}

      {/* EVIDÊNCIAS DE DESTAQUE (TOP 3) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Principais notícias e dados</h2>
          </div>
        </div>
           
        {ENDIVIDAMENTO_FAMILIAS_EVIDENCES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {ENDIVIDAMENTO_FAMILIAS_EVIDENCES.slice(0, 3).map((ev: any) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev} 
                onDownloadPdf={ev.isPdf ? () => handleDownloadPdf(ev.fileName) : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Nenhuma notícia cadastrada no momento. Insira novas evidências para exibir nesta seção.
            </p>
          </div>
        )}
      </section>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* O que observar nos próximos meses */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que observar nos próximos meses</h4>
                    <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-orange-700 dark:text-orange-400 font-semibold">
                        Endividamento elevado, custo do crédito e risco de inadimplência
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>
                      {ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[0]}
                    </li>
                    <li>
                      {ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[1]}
                    </li>
                    <li>
                      {ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[2]}
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> Agência Brasil / CNC, Banco Central do Brasil, UOL Economia, Serasa Experian e Folha de S.Paulo.
                  </div>
                </div>
              </div>
            </div>

            {/* Impacto para a empresa */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-red-50 dark:text-red-900/20 leading-none pointer-events-none select-none">
                02
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a Lorenzetti</h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Potencial de consumo, sensibilidade a preço e condições de pagamento
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>
                      {ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[3]}
                    </li>
                    <li>
                      {ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[4]}
                    </li>
                    <li>
                      {ENDIVIDAMENTO_FAMILIAS_PAGE.existingAnalysis[5]}
                    </li>
                  </ul>
                  
                  <div className="p-3.5 bg-red-50/70 dark:bg-red-950/30 rounded-xl border border-red-100 dark:border-red-900/40 text-[13px] text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-red-800 dark:text-red-300 block mb-0.5 uppercase tracking-wider text-[11px]">Síntese Estratégica</span>
                    <p className="italic">
                      &quot;O elevado endividamento pode reduzir a flexibilidade financeira das famílias, tornando preço, valor percebido e condições de pagamento fatores relevantes para a demanda.&quot;
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> Hipóteses observacionais fundamentadas diretamente em Agência Brasil / CNC, Banco Central do Brasil, UOL Economia, Serasa Experian e Folha de S.Paulo.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. POR TRÁS DO ENDIVIDAMENTO */}
      <section className="bg-white dark:bg-[#111827] p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">
                POR TRÁS DO ENDIVIDAMENTO
              </h3>
              <p className="text-[14px] text-slate-500 dark:text-slate-400">
                Causas, crédito e vulnerabilidade financeira
              </p>
            </div>
          </div>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-3 py-1.5 rounded-lg self-start md:self-auto">
            Anatomia do Endividamento
          </span>
        </div>

        {/* GRID DOS 4 BLOCOS ANALÍTICOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* BLOCO 1: POR QUE AS FAMÍLIAS SE ENDIVIDAM? */}
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-[16px] md:text-[17px] font-bold text-slate-900 dark:text-white tracking-tight">
                    POR QUE AS FAMÍLIAS SE ENDIVIDAM?
                  </h4>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Percentual de entrevistados que apontaram cada motivo
                  </p>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shrink-0">
                  Causas
                </span>
              </div>

              {/* BARRAS HORIZONTAIS */}
              <div className="space-y-3.5 my-4">
                {/* Desemprego ou perda de renda */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {causasEndividamento.desempregoPerdaRenda.label}
                    </span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 text-[14px]">
                      {`${causasEndividamento.desempregoPerdaRenda.value}%`}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500" 
                      style={{ width: `${causasEndividamento.desempregoPerdaRenda.value}%` }} 
                    />
                  </div>
                </div>

                {/* Gastos de emergência */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {causasEndividamento.gastosEmergencia.label}
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-[14px]">
                      {`${causasEndividamento.gastosEmergencia.value}%`}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-500 dark:bg-slate-400 rounded-full transition-all duration-500" 
                      style={{ width: `${causasEndividamento.gastosEmergencia.value}%` }} 
                    />
                  </div>
                </div>

                {/* Descontrole ou desorganização financeira */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {causasEndividamento.descontroleFinanceiro.label}
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-[14px]">
                      {`${causasEndividamento.descontroleFinanceiro.value}%`}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-500 dark:bg-slate-400 rounded-full transition-all duration-500" 
                      style={{ width: `${causasEndividamento.descontroleFinanceiro.value}%` }} 
                    />
                  </div>
                </div>

                {/* Apoio financeiro a familiares ou amigos */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {causasEndividamento.apoioFamiliaresAmigos.label}
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-[14px]">
                      {`${causasEndividamento.apoioFamiliaresAmigos.value}%`}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-400 dark:bg-slate-500 rounded-full transition-all duration-500" 
                      style={{ width: `${causasEndividamento.apoioFamiliaresAmigos.value}%` }} 
                    />
                  </div>
                </div>

                {/* Atraso de contas básicas */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {causasEndividamento.atrasoContasBasicas.label}
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-[14px]">
                      {`${causasEndividamento.atrasoContasBasicas.value}%`}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-400 dark:bg-slate-500 rounded-full transition-all duration-500" 
                      style={{ width: `${causasEndividamento.atrasoContasBasicas.value}%` }} 
                    />
                  </div>
                </div>
              </div>

              {/* NOTA METODOLÓGICA */}
              <p className="text-[11.5px] text-slate-500 dark:text-slate-400 italic mb-3">
                * Os percentuais indicam a parcela dos entrevistados que citou cada motivo e, por isso, não precisam somar 100%.
              </p>

              {/* CAIXA DE INTERPRETAÇÃO */}
              <div className="p-3.5 bg-white dark:bg-[#111827] rounded-xl border border-slate-200/90 dark:border-slate-800 text-[12.5px] leading-relaxed">
                <span className="font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 text-[11px] block mb-1">
                  O QUE ISSO MOSTRA
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  &quot;A perda de renda é o principal motivo relatado pelos entrevistados, mostrando que o endividamento está associado não apenas ao consumo, mas também à perda de capacidade financeira.&quot;
                </p>
              </div>
            </div>

            {/* FONTE */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400 dark:text-slate-500">
              Fonte: Serasa / Opinion Box — 2026
            </div>
          </div>

          {/* BLOCO 2: ONDE ESTÃO AS DÍVIDAS? */}
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-[16px] md:text-[17px] font-bold text-slate-900 dark:text-white tracking-tight">
                    ONDE ESTÃO AS DÍVIDAS?
                  </h4>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Percentual de famílias endividadas por modalidade de dívida
                  </p>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shrink-0">
                  Modalidades
                </span>
              </div>

              {/* BARRAS HORIZONTAIS */}
              <div className="space-y-3.5 my-4">
                {/* Cartão de Crédito */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {modalidadesDivida.cartaoCredito.label}
                    </span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 text-[14px]">
                      {formatPercent(modalidadesDivida.cartaoCredito.value)}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500" 
                      style={{ width: `${modalidadesDivida.cartaoCredito.value}%` }} 
                    />
                  </div>
                </div>

                {/* Carnês */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {modalidadesDivida.carnes.label}
                    </span>
                    <span className="font-bold text-amber-600 dark:text-amber-400 text-[14px]">
                      {formatPercent(modalidadesDivida.carnes.value)}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 dark:bg-amber-500 rounded-full transition-all duration-500" 
                      style={{ width: `${modalidadesDivida.carnes.value}%` }} 
                    />
                  </div>
                </div>

                {/* Crédito pessoal */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {modalidadesDivida.creditoPessoal.label}
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-[14px]">
                      {formatPercent(modalidadesDivida.creditoPessoal.value)}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-500 dark:bg-slate-400 rounded-full transition-all duration-500" 
                      style={{ width: `${modalidadesDivida.creditoPessoal.value}%` }} 
                    />
                  </div>
                </div>

                {/* Financiamento de casa */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {modalidadesDivida.financiamentoCasa.label}
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-[14px]">
                      {formatPercent(modalidadesDivida.financiamentoCasa.value)}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-400 dark:bg-slate-500 rounded-full transition-all duration-500" 
                      style={{ width: `${modalidadesDivida.financiamentoCasa.value}%` }} 
                    />
                  </div>
                </div>

                {/* Financiamento de carro */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {modalidadesDivida.financiamentoCarro.label}
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-[14px]">
                      {formatPercent(modalidadesDivida.financiamentoCarro.value)}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-400 dark:bg-slate-500 rounded-full transition-all duration-500" 
                      style={{ width: `${modalidadesDivida.financiamentoCarro.value}%` }} 
                    />
                  </div>
                </div>
              </div>

              {/* NOTA METODOLÓGICA */}
              <p className="text-[11.5px] text-slate-500 dark:text-slate-400 italic mb-3">
                * Uma mesma família pode possuir mais de uma modalidade de dívida; por isso, os percentuais não somam 100%.
              </p>

              {/* CAIXA DE INTERPRETAÇÃO & CHAMADA COMPLEMENTAR */}
              <div className="space-y-2.5">
                <div className="p-3.5 bg-white dark:bg-[#111827] rounded-xl border border-slate-200/90 dark:border-slate-800 text-[12.5px] leading-relaxed">
                  <span className="font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 text-[11px] block mb-1">
                    O QUE ISSO MOSTRA
                  </span>
                  <p className="text-slate-600 dark:text-slate-300">
                    &quot;O cartão de crédito é, de longe, a principal modalidade de dívida, presente em mais de 8 em cada 10 famílias endividadas.&quot;
                  </p>
                </div>

                {/* Chamada complementar de custo de crédito */}
                <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-amber-200/50 dark:border-amber-900/30 pb-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                      CUSTO DO CRÉDITO — MAR/26
                    </span>
                    <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium">
                      Fonte: Banco Central
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px]">
                    <div className="bg-white/80 dark:bg-[#111827]/80 p-2 rounded-lg border border-amber-100 dark:border-amber-900/30">
                      <span className="text-[15px] font-black text-amber-700 dark:text-amber-400 block leading-tight">
                        {custoCredito.taxaMediaPessoasFisicas.value}
                      </span>
                      <span className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-tight block mt-0.5">
                        {custoCredito.taxaMediaPessoasFisicas.label}
                      </span>
                    </div>

                    <div className="bg-white/80 dark:bg-[#111827]/80 p-2 rounded-lg border border-amber-100 dark:border-amber-900/30">
                      <span className="text-[15px] font-black text-rose-700 dark:text-rose-400 block leading-tight">
                        {custoCredito.creditoRotativoCartao.value}
                      </span>
                      <span className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-tight block mt-0.5">
                        {custoCredito.creditoRotativoCartao.label}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed pt-0.5">
                    &quot;O custo elevado do crédito encarece novas dívidas e pode dificultar a quitação dos saldos já existentes.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* FONTE */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400 dark:text-slate-500">
              Fonte: CNC / PEIC — julho/2026
            </div>
          </div>

          {/* BLOCO 3: QUEM ESTÁ MAIS VULNERÁVEL? */}
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-[16px] md:text-[17px] font-bold text-slate-900 dark:text-white tracking-tight">
                    QUEM ESTÁ MAIS VULNERÁVEL?
                  </h4>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Endividamento e inadimplência por faixa de renda — julho/2026
                  </p>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 shrink-0">
                  Renda & Risco
                </span>
              </div>

              {/* LEGENDA EXPLICATIVA DAS MÉTRICAS */}
              <div className="grid grid-cols-2 gap-2 p-2.5 bg-white dark:bg-[#111827] rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11.5px] mb-3.5">
                <div>
                  <strong className="text-amber-700 dark:text-amber-400 block font-bold">ENDIVIDADAS</strong>
                  <span className="text-slate-500 dark:text-slate-400 leading-tight block">Famílias que possuem algum tipo de dívida.</span>
                </div>
                <div>
                  <strong className="text-rose-700 dark:text-rose-400 block font-bold">INADIMPLENTES</strong>
                  <span className="text-slate-500 dark:text-slate-400 leading-tight block">Famílias com alguma dívida em atraso.</span>
                </div>
              </div>

              {/* COMPARATIVO LADO A LADO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2">
                {/* Até 3 Salários Mínimos */}
                <div className="p-4 bg-white dark:bg-[#111827] rounded-xl border border-rose-100 dark:border-rose-900/40 space-y-3">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="text-[11px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider block">
                      Faixa de Renda
                    </span>
                    <h5 className="text-[14px] font-extrabold text-slate-900 dark:text-white">
                      {vulnerabilidadeRenda.ateTresSalariosMinimos.label}
                    </h5>
                  </div>
                  
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between items-baseline text-[12.5px]">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">Endividadas:</span>
                        <span className="text-[16px] font-black text-amber-600 dark:text-amber-400">
                          {formatPercent(vulnerabilidadeRenda.ateTresSalariosMinimos.endividadas)}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-amber-500 rounded-full" 
                          style={{ width: `${vulnerabilidadeRenda.ateTresSalariosMinimos.endividadas}%` }} 
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline text-[12.5px]">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">Inadimplentes:</span>
                        <span className="text-[16px] font-black text-rose-600 dark:text-rose-400">
                          {formatPercent(vulnerabilidadeRenda.ateTresSalariosMinimos.inadimplentes)}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-rose-500 rounded-full" 
                          style={{ width: `${vulnerabilidadeRenda.ateTresSalariosMinimos.inadimplentes}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Acima de 10 Salários Mínimos */}
                <div className="p-4 bg-white dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="text-[11px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider block">
                      Faixa de Renda
                    </span>
                    <h5 className="text-[14px] font-extrabold text-slate-900 dark:text-white">
                      {vulnerabilidadeRenda.acimaDezSalariosMinimos.label}
                    </h5>
                  </div>
                  
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between items-baseline text-[12.5px]">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">Endividadas:</span>
                        <span className="text-[16px] font-black text-slate-800 dark:text-slate-200">
                          {formatPercent(vulnerabilidadeRenda.acimaDezSalariosMinimos.endividadas)}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-slate-500 rounded-full" 
                          style={{ width: `${vulnerabilidadeRenda.acimaDezSalariosMinimos.endividadas}%` }} 
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline text-[12.5px]">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">Inadimplentes:</span>
                        <span className="text-[16px] font-black text-slate-800 dark:text-slate-200">
                          {formatPercent(vulnerabilidadeRenda.acimaDezSalariosMinimos.inadimplentes)}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-slate-400 rounded-full" 
                          style={{ width: `${vulnerabilidadeRenda.acimaDezSalariosMinimos.inadimplentes}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CAIXA DE INTERPRETAÇÃO */}
              <div className="mt-4 p-3.5 bg-white dark:bg-[#111827] rounded-xl border border-slate-200/90 dark:border-slate-800 text-[12.5px] leading-relaxed">
                <span className="font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 text-[11px] block mb-1">
                  O QUE ISSO MOSTRA
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  &quot;As famílias de menor renda apresentam maior exposição ao endividamento e uma diferença ainda maior quando observamos a inadimplência.&quot;
                </p>
              </div>
            </div>

            {/* FONTE */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400 dark:text-slate-500">
              Fonte: CNC / PEIC — julho/2026
            </div>
          </div>

          {/* BLOCO 4: FATOR EMERGENTE — BETS */}
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-3.5 pb-3 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-[16px] md:text-[17px] font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                    <span>FATOR EMERGENTE — BETS</span>
                  </h4>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Ponto de atenção recente na dinâmica financeira das famílias
                  </p>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 shrink-0">
                  Emergente
                </span>
              </div>

              {/* NOTA DE BASE DA AMOSTRA */}
              <div className="mb-3 px-3 py-2 bg-purple-50/70 dark:bg-purple-950/30 rounded-xl border border-purple-100 dark:border-purple-900/40 text-[11.5px] text-purple-900 dark:text-purple-300">
                <span className="font-semibold">Base da pesquisa:</span> {bets.amostra.apostadores} consumidores que declararam jogar/apostar online, dentro de uma amostra de {bets.amostra.entrevistados.toLocaleString('pt-BR')} entrevistados.
              </div>

              {/* CAMADA 1: TRÊS INDICADORES PRINCIPAIS DE IMPACTO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
                {/* Indicador 1: 39,7% - Endividamento */}
                <div className="p-3 bg-white dark:bg-[#111827] rounded-xl border border-purple-100 dark:border-purple-900/40 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-300 block mb-0.5">
                      {bets.indicadores.endividamento.label}
                    </span>
                    <span className="text-[24px] font-black text-purple-700 dark:text-purple-300 tracking-tight leading-none block mb-1">
                      {formatPercent(bets.indicadores.endividamento.value)}
                    </span>
                    <p className="text-[11.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium">
                      Dos {bets.amostra.apostadores} apostadores entrevistados afirmaram ter se endividado após utilizar bets.
                    </p>
                  </div>
                </div>

                {/* Indicador 2: 52,4% - Pressão sobre a Renda */}
                <div className="p-3 bg-white dark:bg-[#111827] rounded-xl border border-purple-100 dark:border-purple-900/40 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-300 block mb-0.5">
                      {bets.indicadores.pressaoRenda.label}
                    </span>
                    <span className="text-[24px] font-black text-purple-700 dark:text-purple-300 tracking-tight leading-none block mb-1">
                      {formatPercent(bets.indicadores.pressaoRenda.value)}
                    </span>
                    <p className="text-[11.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium">
                      Dos {bets.amostra.apostadores} apostadores relataram comprometimento relevante da renda ou recorrer a empréstimos.
                    </p>
                  </div>
                </div>

                {/* Indicador 3: 68,7% - Perdas Financeiras */}
                <div className="p-3 bg-white dark:bg-[#111827] rounded-xl border border-purple-100 dark:border-purple-900/40 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-300 block mb-0.5">
                      {bets.indicadores.perdasFinanceiras.label}
                    </span>
                    <span className="text-[24px] font-black text-purple-700 dark:text-purple-300 tracking-tight leading-none block mb-1">
                      {formatPercent(bets.indicadores.perdasFinanceiras.value)}
                    </span>
                    <p className="text-[11.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium">
                      Dos apostadores entrevistados disseram ter tido mais perdas do que ganhos com as apostas.
                    </p>
                  </div>
                </div>
              </div>

              {/* CAMADA 2: FAIXA COMPLEMENTAR (INTENSIDADE DO GASTO & PERFIL) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2.5">
                {/* Comparativo Temporal de Gasto: 18,3% -> 30,1% */}
                <div className="p-3 bg-white dark:bg-[#111827] rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11.5px]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      GASTO ACIMA DE R$ 1.000/MÊS
                    </span>
                    <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300">
                      {formatPercent(bets.gastoAcimaMil.anterior.value)} ({bets.gastoAcimaMil.anterior.ano}) → {formatPercent(bets.gastoAcimaMil.atual.value)} ({bets.gastoAcimaMil.atual.ano})
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    A parcela que declara gastar mais de R$ 1.000 por mês aumentou de {formatPercent(bets.gastoAcimaMil.anterior.value)} para {formatPercent(bets.gastoAcimaMil.atual.value)} em relação ao levantamento anterior.
                  </p>
                </div>

                {/* Perfil dos Endividados: 46,8% */}
                <div className="p-3 bg-white dark:bg-[#111827] rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11.5px]">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      PERFIL DOS ENDIVIDADOS
                    </span>
                    <span className="text-[13px] font-black text-purple-700 dark:text-purple-300">
                      {formatPercent(bets.perfilEndividados.value)}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Entre os apostadores que declararam possuir dívidas relacionadas às apostas, {formatPercent(bets.perfilEndividados.value)} tinham renda de até dois salários mínimos.
                  </p>
                </div>
              </div>

              {/* O QUE ISSO MOSTRA */}
              <div className="mt-3 p-3 bg-white dark:bg-[#111827] rounded-xl border border-slate-200/90 dark:border-slate-800 text-[12px] leading-relaxed">
                <span className="font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 text-[10.5px] block mb-1">
                  O QUE ISSO MOSTRA
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  &quot;Entre os apostadores pesquisados, o risco financeiro aparece associado a perdas, comprometimento da renda e endividamento, com maior exposição entre determinados grupos de menor renda.&quot;
                </p>
              </div>

              {/* OBSERVAÇÃO METODOLÓGICA */}
              <div className="mt-2.5 p-2.5 bg-purple-50/60 dark:bg-purple-950/20 rounded-xl border border-purple-100 dark:border-purple-900/30 text-[11.5px] text-purple-900 dark:text-purple-300">
                <span className="font-bold block mb-0.5">Observação Metodológica:</span>
                <p>
                  Base: {bets.amostra.apostadores} consumidores que declararam jogar/apostar online, dentro de {bets.amostra.entrevistados.toLocaleString('pt-BR')} entrevistados. O levantamento não representa a origem do endividamento de toda a população.
                </p>
              </div>
            </div>

            {/* FONTE */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400 dark:text-slate-500">
              Fonte: Procon-SP — levantamento realizado entre dezembro/2025 e janeiro/2026 ({bets.amostra.entrevistados.toLocaleString('pt-BR')} consumidores entrevistados; {bets.amostra.apostadores} apostadores)
            </div>
          </div>

        </div>

        {/* FAIXA HORIZONTAL DE CONCLUSÃO DA SEÇÃO */}
        <div className="mt-6 bg-gradient-to-r from-blue-50/90 via-slate-50 to-amber-50/70 dark:from-blue-950/30 dark:via-slate-900/50 dark:to-amber-950/20 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-0.5">
              O QUE OS DADOS REVELAM
            </span>
            <p className="text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed">
              O endividamento não é homogêneo: suas causas, modalidades e intensidade variam conforme renda, capacidade financeira e comportamento de consumo.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS E FONTES */}
      {ENDIVIDAMENTO_FAMILIAS_EVIDENCES.length > 3 && (
        <section id="evidencias" className="scroll-mt-12 relative mt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS E FONTES</h2>
            </div>
          </div>
             
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {ENDIVIDAMENTO_FAMILIAS_EVIDENCES.slice(3).map((ev: any) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev} 
                onDownloadPdf={ev.isPdf ? () => handleDownloadPdf(ev.fileName) : undefined}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
