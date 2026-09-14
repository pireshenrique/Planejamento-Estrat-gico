import React from 'react';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../../layout/HeaderKpiCard';
import { EvidenceCard } from '../../layout/EvidenceCard';
import { EMPREGO_EVIDENCES } from '../../../data/evidences/emprego';
import { EMPREGOS_DATA } from '../../../data/economia-brasileira/emprego';
import { 
  Briefcase, 
  Users, 
  DollarSign, 
  BarChart3, 
  Search, 
  Target, 
  Building2, 
  TrendingUp,
  Building,
  Home,
  Lightbulb,
  Factory
} from 'lucide-react';

interface EmpregosViewProps {
  setActivePage: (page: string) => void;
  embedded?: boolean;
}

export const EmpregosView: React.FC<EmpregosViewProps> = ({ 
  setActivePage,
  embedded = false 
}) => {
  const handleDownloadPdf = async (fileName: string = 'Novo_Caged_Sumario_Executivo_2025.pdf') => {
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
              Empregos e Mercado Formal
            </h1>
            <p className="text-[17px] text-slate-600 dark:text-slate-400">
              Acompanhamento dos vínculos formais (Novo Caged / RAIS), intenções de contratação e composição setorial.
            </p>
          </div>

          <ResponsiveContainer minWidth="200px" gap="gap-3" className="flex-1">
            {/* Card 1: Saldo 2025 Fechado */}
            <HeaderKpiCard
              title={EMPREGOS_DATA.kpis.fechamento2025.title}
              value={EMPREGOS_DATA.kpis.fechamento2025.value}
              context={EMPREGOS_DATA.kpis.fechamento2025.context}
              explanation={EMPREGOS_DATA.kpis.fechamento2025.explanation}
              source={EMPREGOS_DATA.kpis.fechamento2025.source}
              icon={Briefcase}
              color="indigo"
            />

            {/* Card 2: 1º Semestre 2026 */}
            <HeaderKpiCard
              title={EMPREGOS_DATA.kpis.primeiroSemestre2026.title}
              value={EMPREGOS_DATA.kpis.primeiroSemestre2026.value}
              context={EMPREGOS_DATA.kpis.primeiroSemestre2026.context}
              explanation={EMPREGOS_DATA.kpis.primeiroSemestre2026.explanation}
              source={EMPREGOS_DATA.kpis.primeiroSemestre2026.source}
              icon={TrendingUp}
              color="emerald"
            />

            {/* Card 3: Intenção Q3 */}
            <HeaderKpiCard
              title={EMPREGOS_DATA.kpis.expectativaQ3.title}
              value={EMPREGOS_DATA.kpis.expectativaQ3.value}
              context={EMPREGOS_DATA.kpis.expectativaQ3.context}
              explanation={EMPREGOS_DATA.kpis.expectativaQ3.explanation}
              source={EMPREGOS_DATA.kpis.expectativaQ3.source}
              icon={Users}
              color="amber"
            />
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Saldo 2025 Fechado */}
          <HeaderKpiCard
            title={EMPREGOS_DATA.kpis.fechamento2025.title}
            value={EMPREGOS_DATA.kpis.fechamento2025.value}
            context={EMPREGOS_DATA.kpis.fechamento2025.context}
            explanation={EMPREGOS_DATA.kpis.fechamento2025.explanation}
            source={EMPREGOS_DATA.kpis.fechamento2025.source}
            icon={Briefcase}
            color="indigo"
          />

          {/* Card 2: 1º Semestre 2026 */}
          <HeaderKpiCard
            title={EMPREGOS_DATA.kpis.primeiroSemestre2026.title}
            value={EMPREGOS_DATA.kpis.primeiroSemestre2026.value}
            context={EMPREGOS_DATA.kpis.primeiroSemestre2026.context}
            explanation={EMPREGOS_DATA.kpis.primeiroSemestre2026.explanation}
            source={EMPREGOS_DATA.kpis.primeiroSemestre2026.source}
            icon={TrendingUp}
            color="emerald"
          />

          {/* Card 3: Intenção Q3 */}
          <HeaderKpiCard
            title={EMPREGOS_DATA.kpis.expectativaQ3.title}
            value={EMPREGOS_DATA.kpis.expectativaQ3.value}
            context={EMPREGOS_DATA.kpis.expectativaQ3.context}
            explanation={EMPREGOS_DATA.kpis.expectativaQ3.explanation}
            source={EMPREGOS_DATA.kpis.expectativaQ3.source}
            icon={Users}
            color="amber"
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
           
        {EMPREGO_EVIDENCES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {EMPREGO_EVIDENCES.slice(0, 3).map((ev) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev as any} 
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
                        Concretização das intenções de contratação, evolução do estoque formal e dinâmica setorial do emprego.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>
                      Acompanhar a concretização das intenções de contratação do terceiro trimestre de 2026; segundo a pesquisa, 52% dos empregadores pretendem ampliar suas equipes e a Expectativa Líquida de Emprego alcança 37%.
                    </li>
                    <li>
                      Monitorar a evolução do estoque de vínculos formais após o aumento de 2,46 milhões no primeiro semestre de 2026, que levou o total a 62,89 milhões de vínculos.
                    </li>
                    <li>
                      Observar se a expansão do emprego formal continua concentrada em Serviços e se Indústria e Construção mantêm sua contribuição ao longo de 2026.
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> MTE (Novo Caged / RAIS Mensal), ManpowerGroup e Exame.
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
                        Evolução da renda, consumo residencial e atividade construtiva.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>
                      A expansão do emprego formal e o estoque de 62,89 milhões de vínculos podem favorecer a sustentação da renda e do consumo das famílias, embora o efeito sobre a demanda por bens residenciais dependa também de crédito, inflação e renda disponível.
                    </li>
                    <li>
                      A intenção de contratação de 52% dos empregadores sinaliza continuidade da demanda por mão de obra; para a Lorenzetti, o efeito sobre o consumo dependerá da evolução conjunta de emprego, renda e crédito.
                    </li>
                    <li>
                      A expansão do emprego formal em Construção e Indústria deve ser acompanhada como possível sinal de atividade econômica e demanda por materiais hidráulicos, duchas e metais sanitários em obras e reformas.
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> MTE (RAIS Mensal), ManpowerGroup (Q3/2026) e Exame (Agosto/2026).
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MOTORES DA GERAÇÃO DE EMPREGOS */}
      <section className="bg-white dark:bg-[#111827] p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">
                {EMPREGOS_DATA.sectorHighlights.title}
              </h3>
              <p className="text-[14px] text-slate-500 dark:text-slate-400">
                {EMPREGOS_DATA.sectorHighlights.subtitle}
              </p>
            </div>
          </div>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-3 py-1.5 rounded-lg self-start md:self-auto">
            {EMPREGOS_DATA.sectorHighlights.sourceBadge}
          </span>
        </div>

        {/* CONTAINER PRINCIPAL */}
        <div className="bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800/80 p-4 md:p-6 shadow-sm flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* ÁREA ESQUERDA: CONTRIBUIÇÃO POR SETOR (DADOS BRUTOS) */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-xs">
              <div>
                <div className="mb-5 pb-3 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-[17px] font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                      Contribuição por setor
                    </h4>
                    <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {EMPREGOS_DATA.sectorHighlights.subtitle}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">
                    Dados Brutos
                  </span>
                </div>

                {/* LISTA DE SETORES COM BARRAS COERENTES */}
                <div className="space-y-4">
                  {EMPREGOS_DATA.sectorHighlights.sectors.map((sector) => (
                    <div key={sector.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-[13.5px]">
                        <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${sector.dotColor} inline-block`}></span>
                          {sector.name}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className={`text-[14px] font-extrabold ${sector.textColor}`}>
                            {sector.value}
                          </span>
                          {sector.percentageText && (
                            <span className="text-[11.5px] font-semibold text-slate-400 dark:text-slate-500">
                              {sector.percentageText}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                        <div 
                          className={`h-full ${sector.barColor} rounded-full transition-all duration-500`} 
                          style={{ width: `${sector.visualBarWidthPercent}%` }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Comércio (Destaque Textual Separado - Métrica Percentual) */}
                  <div className="pt-2">
                    <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0"></span>
                        <span className="text-[13.5px] font-bold text-slate-900 dark:text-white">
                          {EMPREGOS_DATA.sectorHighlights.comercio.name}
                        </span>
                        <span className="text-[11.5px] text-purple-700 dark:text-purple-300 font-medium">
                          {EMPREGOS_DATA.sectorHighlights.comercio.label}
                        </span>
                      </div>
                      <span className="text-[13.5px] font-black text-purple-700 dark:text-purple-300 bg-white dark:bg-purple-900/50 px-2.5 py-1 rounded-lg border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                        {EMPREGOS_DATA.sectorHighlights.comercio.badgeText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rodapé metodológico discreto */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11.5px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
                <span>Total adicionado no período: <strong>{EMPREGOS_DATA.sectorHighlights.totalAdded}</strong></span>
                <span>Base: {EMPREGOS_DATA.sectorHighlights.periodBase}</span>
              </div>
            </div>

            {/* ÁREA DIREITA: O QUE OS DADOS REVELAM (INSIGHTS EXECUTIVOS) */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-xs">
              <div>
                <div className="mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-[17px] font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                      O que os dados revelam
                    </h4>
                    <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Principais sinais do crescimento do emprego formal
                    </p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shrink-0">
                    Leitura Estratégica
                  </span>
                </div>

                {/* OS 3 INSIGHTS EXECUTIVOS */}
                <div className="flex flex-col gap-3">
                  {EMPREGOS_DATA.sectorHighlights.insights.map((insight) => (
                    <div 
                      key={insight.title}
                      className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 ${insight.borderHover} transition-colors`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 text-center min-w-[76px]">
                          <span className={`text-[24px] md:text-[26px] font-black ${insight.metricColor} tracking-tight leading-none block`}>
                            {insight.metric}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mt-1 tracking-wider">
                            {insight.metricSubtext}
                          </span>
                        </div>
                        <div className="border-l border-slate-200 dark:border-slate-700/60 pl-4 py-0.5">
                          <h5 className="text-[12px] font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-1">
                            {insight.title}
                          </h5>
                          <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-snug">
                            {insight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicador auxiliar de síntese */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11.5px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
                <span>Padrão estrutural: <strong>{EMPREGOS_DATA.sectorHighlights.structuralPattern}</strong></span>
                <span>Ritmo 1º Sem/26: <strong>{EMPREGOS_DATA.sectorHighlights.paceH1}</strong></span>
              </div>
            </div>
          </div>

          {/* FAIXA HORIZONTAL DE MENSAGEM-CHAVE */}
          <div className="bg-gradient-to-r from-blue-50/90 via-slate-50 to-amber-50/70 dark:from-blue-950/30 dark:via-slate-900/50 dark:to-amber-950/20 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-0.5">
                MENSAGEM-CHAVE
              </span>
              <p className="text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed">
                O crescimento do emprego formal permanece fortemente concentrado em <strong className="font-extrabold text-blue-700 dark:text-blue-300">Serviços</strong>, enquanto <strong className="font-extrabold text-amber-700 dark:text-amber-300">Indústria</strong> e <strong className="font-extrabold text-emerald-700 dark:text-emerald-300">Construção</strong> adicionam escala relevante ao mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS E FONTES */}
      {EMPREGO_EVIDENCES.length > 3 && (
        <section id="evidencias" className="scroll-mt-12 relative mt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS E FONTES</h2>
            </div>
          </div>
             
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {EMPREGO_EVIDENCES.slice(3).map((ev) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev as any} 
                onDownloadPdf={ev.isPdf ? () => handleDownloadPdf(ev.fileName) : undefined}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};


