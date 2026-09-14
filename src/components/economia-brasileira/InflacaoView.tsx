import React from 'react';
import { TrendingUp, BarChart3, Target, ArrowUpRight, Info, ArrowRight, ArrowDownRight, Activity, ShoppingCart, Building2, Car, Zap, HeartPulse, GraduationCap, ChevronRight, ExternalLink, Globe, Search, Droplets } from 'lucide-react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../layout/HeaderKpiCard';
import { EvidenceCard } from '../layout/EvidenceCard';
import { INFLACAO_EVIDENCES, INFLACAO_GRUPOS } from '../../data/evidences/inflacao';
import { INFLACAO_DATA } from '../../data/economia-brasileira/inflacao';

interface InflacaoViewProps {
  setActivePage: (page: string) => void;
}



export function InflacaoView({ setActivePage }: InflacaoViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* HEADER */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">Inflação (IPCA)</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">
            Acompanhamento da dinâmica de preços, custos setoriais e poder de compra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch">
          {/* Card 1 */}
          <HeaderKpiCard
            title={INFLACAO_DATA.kpis.focus.title}
            value={INFLACAO_DATA.kpis.focus.value}
            context={INFLACAO_DATA.kpis.focus.context}
            explanation={INFLACAO_DATA.kpis.focus.explanation}
            source={INFLACAO_DATA.kpis.focus.source}
            icon={Target}
            color="amber"
          />

          {/* Card 2 */}
          <HeaderKpiCard
            title={INFLACAO_DATA.kpis.ipca12Meses.title}
            value={INFLACAO_DATA.kpis.ipca12Meses.value}
            context={INFLACAO_DATA.kpis.ipca12Meses.context}
            explanation={INFLACAO_DATA.kpis.ipca12Meses.explanation}
            source={INFLACAO_DATA.kpis.ipca12Meses.source}
            icon={BarChart3}
            color="indigo"
          />

          {/* Card 3 */}
          <HeaderKpiCard
            title={INFLACAO_DATA.kpis.ipca2025.title}
            value={INFLACAO_DATA.kpis.ipca2025.value}
            context={INFLACAO_DATA.kpis.ipca2025.context}
            explanation={INFLACAO_DATA.kpis.ipca2025.explanation}
            source={INFLACAO_DATA.kpis.ipca2025.source}
            icon={TrendingUp}
            color="slate"
          />
        </div>
      </div>

      {/* EVIDÊNCIAS DE DESTAQUE (TOP 3) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Principais notícias e dados</h2>
           </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {INFLACAO_EVIDENCES.slice(0, 3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

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
                      {INFLACAO_DATA.strategicAnalysis.observe.summary}
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                    {INFLACAO_DATA.strategicAnalysis.observe.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Impacto */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-8 shadow-sm flex flex-col ">
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
                      {INFLACAO_DATA.strategicAnalysis.companyImpact.summary}
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    {INFLACAO_DATA.strategicAnalysis.companyImpact.notes.map((note, index) => (
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

      {/* 2. COMPOSIÇÃO DA INFLAÇÃO */}
      <section className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <h2 className="text-[22px] md:text-[24px] font-bold text-slate-900 dark:text-white tracking-tight">IPCA — Pressões relevantes para o consumidor</h2>
              <p className="text-[15px] text-slate-500">Peso na cesta e variação em junho/26 — grupos e itens selecionados</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {INFLACAO_GRUPOS.map((grupo, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300">
                {grupo.icon}
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-[15px] font-bold text-slate-900 dark:text-white mb-1 leading-tight h-10 flex items-center justify-center">{grupo.name}</h4>
                <div className="text-[13px] text-slate-500 dark:text-slate-400 mb-2">Peso: {grupo.weight}</div>
                <div className={`inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded-md text-[16px] font-bold mb-4 ${
                  grupo.var.startsWith('-') || grupo.var.startsWith('−')
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {grupo.var.startsWith('-') || grupo.var.startsWith('−') ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                  {grupo.var}
                </div>
                <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug">
                    <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Impacto Lorenzetti:</strong>
                    {grupo.lorenzettiImpact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS E FONTES</h2>
           </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {INFLACAO_EVIDENCES.slice(3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
        </section>

    </div>
  );
}
