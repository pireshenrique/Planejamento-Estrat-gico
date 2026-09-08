import React from 'react';
import { Target, TrendingUp, DollarSign, Search, BarChart3 } from 'lucide-react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../layout/HeaderKpiCard';
import { EvidenceCard } from '../layout/EvidenceCard';
import { CAMBIO_EVIDENCES } from '../../data/evidences/cambio';
import { CAMBIO_DATA } from '../../data/economia-brasileira/cambio';

interface CambioViewProps {
  setActivePage: (page: string) => void;
}



export function CambioView({ setActivePage }: CambioViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">Câmbio / Dólar</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">
            Acompanhamento das oscilações da moeda, previsões e impactos da política global e doméstica no câmbio.
          </p>
        </div>

        <ResponsiveContainer minWidth="200px" gap="gap-3" className="flex-1">
          {/* CARD 1: PASSADO */}
          <HeaderKpiCard
            title={CAMBIO_DATA.kpis.passado.title}
            value={CAMBIO_DATA.kpis.passado.value}
            context={CAMBIO_DATA.kpis.passado.context}
            explanation={CAMBIO_DATA.kpis.passado.explanation}
            source={CAMBIO_DATA.kpis.passado.source}
            icon={BarChart3}
            color="slate"
          />

          {/* CARD 2: PRESENTE */}
          <HeaderKpiCard
            title={CAMBIO_DATA.kpis.atual.title}
            value={CAMBIO_DATA.kpis.atual.value}
            context={CAMBIO_DATA.kpis.atual.context}
            explanation={CAMBIO_DATA.kpis.atual.explanation}
            source={CAMBIO_DATA.kpis.atual.source}
            icon={DollarSign}
            color="indigo"
          />

          {/* CARD 3: FUTURO */}
          <HeaderKpiCard
            title={CAMBIO_DATA.kpis.focus.title}
            value={CAMBIO_DATA.kpis.focus.value}
            context={CAMBIO_DATA.kpis.focus.context}
            explanation={CAMBIO_DATA.kpis.focus.explanation}
            source={CAMBIO_DATA.kpis.focus.source}
            icon={Target}
            color="amber"
          />
        </ResponsiveContainer>
      </div>

      {/* EVIDÊNCIAS DE DESTAQUE (TOP 3) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Principais notícias e dados</h2>
           </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {CAMBIO_EVIDENCES.slice(0, 3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev as any} />
          ))}
        </div>
      </section>

      {/* ANÁLISE ESTRATÉGICA (2 BLOCOS) */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* O que observar */}
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
                        {CAMBIO_DATA.strategicAnalysis.observe.summary}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                    {CAMBIO_DATA.strategicAnalysis.observe.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Impacto */}
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
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a empresa</h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        {CAMBIO_DATA.strategicAnalysis.companyImpact.summary}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    {CAMBIO_DATA.strategicAnalysis.companyImpact.notes.map((note, index) => (
                      <li key={index}>
                        {note.before}
                        <strong className="text-slate-800 dark:text-slate-200">{note.highlight}</strong>
                        {note.after}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUTRAS NOTÍCIAS (se houver) */}
      {CAMBIO_EVIDENCES.length > 3 && (
        <section id="evidencias" className="scroll-mt-12 relative mt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
             <div>
                <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">Outras Notícias</h2>
             </div>
          </div>
             
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {CAMBIO_EVIDENCES.slice(3).map((ev) => (
              <EvidenceCard key={ev.id} evidence={ev as any} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

