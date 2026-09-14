import React from 'react';
import { Landmark, Target, BarChart3, TrendingUp, Search, Info, ArrowUpRight, ArrowRight, ExternalLink, Globe, Trophy, Medal, CheckCircle2, FileText } from 'lucide-react';
import { EvidenceCard } from '../../layout/EvidenceCard';
import { HeaderKpiCard } from '../../layout/HeaderKpiCard';
import { JUROS_REAL_EVIDENCES } from '../../../data/evidences/juros_real';
import {
  JUROS_REAL_DATA,
  REAL_INTEREST_RANKING,
  REAL_INTEREST_RANKING_META,
  BRAZIL_REAL_INTEREST,
  LEADER_REAL_INTEREST,
} from '../../../data/economia-brasileira/jurosReal';

interface JurosRealViewProps {
  setActivePage: (page: string) => void;
}

export function JurosRealView({ setActivePage }: JurosRealViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* HEADER */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">Taxa de Juros Real</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">
            Acompanhamento do juro real brasileiro em perspectiva global e seu impacto no financiamento e crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch">
          {/* CARD 1 — PRESENTE */}
          <HeaderKpiCard
            title={JUROS_REAL_DATA.kpis.atual.title}
            value={JUROS_REAL_DATA.kpis.atual.value}
            context={JUROS_REAL_DATA.kpis.atual.subtitle}
            explanation={JUROS_REAL_DATA.kpis.atual.detail}
            icon={BarChart3}
            color="indigo"
          />

          {/* CARD 2 — FUTURO */}
          <HeaderKpiCard
            title={JUROS_REAL_DATA.kpis.projecaoIfi.title}
            value={JUROS_REAL_DATA.kpis.projecaoIfi.value}
            context={JUROS_REAL_DATA.kpis.projecaoIfi.subtitle}
            explanation={JUROS_REAL_DATA.kpis.projecaoIfi.detail}
            icon={Target}
            color="amber"
          />

          {/* CARD 3 — EFEITO NO CRÉDITO */}
          <HeaderKpiCard
            title={JUROS_REAL_DATA.kpis.captacaoCorporativa.title}
            value={JUROS_REAL_DATA.kpis.captacaoCorporativa.value}
            context={JUROS_REAL_DATA.kpis.captacaoCorporativa.subtitle}
            explanation={JUROS_REAL_DATA.kpis.captacaoCorporativa.detail}
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
          {JUROS_REAL_EVIDENCES.slice(0, 3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev as any} />
          ))}
        </div>
      </section>

      {/* BLOCOS ESTRATÉGICOS (01 e 02) */}
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
                        {JUROS_REAL_DATA.strategicAnalysis.observe.summary}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                    {JUROS_REAL_DATA.strategicAnalysis.observe.notes.map((note, index) => (
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
                        {JUROS_REAL_DATA.strategicAnalysis.companyImpact.summary}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    {JUROS_REAL_DATA.strategicAnalysis.companyImpact.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. RANKING GLOBAL (COMPACTO) */}
      <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm mb-6 mt-6 rounded-2xl overflow-hidden">
        
        {/* CABEÇALHO */}
        <div className="p-4 md:p-5 pb-3 border-b border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800/50">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[18px] md:text-[20px] font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  {REAL_INTEREST_RANKING_META.title} — {REAL_INTEREST_RANKING_META.referencePeriod}
                </h2>
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold px-2 py-0.5 rounded">
                  Top 10
                </span>
              </div>
              <p className="text-[12px] md:text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                {REAL_INTEREST_RANKING_META.subtitle}
              </p>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 text-[12px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>{LEADER_REAL_INTEREST.pos}º {LEADER_REAL_INTEREST.country} (<strong>{LEADER_REAL_INTEREST.rate}</strong>) | {BRAZIL_REAL_INTEREST.pos}º {BRAZIL_REAL_INTEREST.country} (<strong>{BRAZIL_REAL_INTEREST.rate}</strong>)</span>
          </div>
        </div>

        <div className="p-4 md:p-5 space-y-3.5">
          {/* DESTAQUE BRASIL COMPACTO */}
          <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-300/80 dark:border-emerald-800/60 rounded-xl p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-7 bg-emerald-100 dark:bg-emerald-900/40 rounded flex items-center justify-center border border-emerald-200 dark:border-emerald-800 shrink-0 overflow-hidden shadow-xs">
                <img src={`https://flagcdn.com/w40/${BRAZIL_REAL_INTEREST.code.toLowerCase()}.png`} alt={`Bandeira do ${BRAZIL_REAL_INTEREST.country}`} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-bold text-slate-900 dark:text-white">{BRAZIL_REAL_INTEREST.country}</span>
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">{BRAZIL_REAL_INTEREST.pos}º LUGAR</span>
                </div>
                <p className="text-[12px] text-emerald-800 dark:text-emerald-300 font-medium">
                  {REAL_INTEREST_RANKING_META.brazilHighlightDescription}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block leading-tight">Taxa Real Ex-Ante</span>
                <span className="text-[22px] md:text-[24px] font-black text-emerald-600 dark:text-emerald-400 leading-none">{BRAZIL_REAL_INTEREST.rate}</span>
              </div>
              <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 p-1.5 rounded-md">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* TABELA TOP 10 EM 2 COLUNAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Coluna 1: Posições 1 a 5 */}
            <div className="bg-slate-50/70 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-hidden">
              <div className="px-3.5 py-2 bg-slate-100/70 dark:bg-slate-800/60 border-b border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <span>Posição & País (1º ao 5º)</span>
                <span>Juros Reais</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {REAL_INTEREST_RANKING.slice(0, 5).map((item) => (
                  <div key={item.country} className={`flex items-center justify-between px-3.5 py-2 ${item.bg} hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition-colors`}>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        item.pos === 1 ? 'bg-blue-600 text-white' :
                        item.code === BRAZIL_REAL_INTEREST.code ? 'bg-emerald-600 text-white shadow-xs' :
                        'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {item.pos}º
                      </span>
                      <img src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`} alt={`${item.country} flag`} className="w-4 h-auto rounded-[1px] shadow-xs shrink-0" />
                      <span className="text-[11px] font-semibold text-slate-400 w-5">{item.code}</span>
                      <span className={`text-[13px] truncate ${item.code === BRAZIL_REAL_INTEREST.code ? 'font-bold text-emerald-700 dark:text-emerald-400' : 'font-medium text-slate-800 dark:text-slate-200'}`}>
                        {item.country}
                      </span>
                    </div>
                    <span className={`text-[13px] font-bold shrink-0 ${
                      item.pos === 1 ? 'text-blue-600 dark:text-blue-400 font-extrabold' :
                      item.code === BRAZIL_REAL_INTEREST.code ? 'text-emerald-600 dark:text-emerald-400 font-black' :
                      'text-slate-700 dark:text-slate-300'
                    }`}>
                      {item.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna 2: Posições 6 a 10 */}
            <div className="bg-slate-50/70 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-hidden">
              <div className="px-3.5 py-2 bg-slate-100/70 dark:bg-slate-800/60 border-b border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <span>Posição & País (6º ao 10º)</span>
                <span>Juros Reais</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {REAL_INTEREST_RANKING.slice(5, 10).map((item) => (
                  <div key={item.country} className={`flex items-center justify-between px-3.5 py-2 ${item.bg} hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition-colors`}>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        item.code === BRAZIL_REAL_INTEREST.code ? 'bg-emerald-600 text-white shadow-xs' :
                        'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {item.pos}º
                      </span>
                      <img src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`} alt={`${item.country} flag`} className="w-4 h-auto rounded-[1px] shadow-xs shrink-0" />
                      <span className="text-[11px] font-semibold text-slate-400 w-5">{item.code}</span>
                      <span className={`text-[13px] truncate ${item.code === BRAZIL_REAL_INTEREST.code ? 'font-bold text-emerald-700 dark:text-emerald-400' : 'font-medium text-slate-800 dark:text-slate-200'}`}>
                        {item.country}
                      </span>
                    </div>
                    <span className={`text-[13px] font-bold shrink-0 ${
                      item.code === BRAZIL_REAL_INTEREST.code ? 'text-emerald-600 dark:text-emerald-400 font-black' :
                      'text-slate-700 dark:text-slate-300'
                    }`}>
                      {item.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RODAPÉ FONTE */}
          <div className="flex justify-center items-center gap-2 pt-1 text-[11px] text-slate-400">
            <FileText className="w-3.5 h-3.5" />
            <span>{REAL_INTEREST_RANKING_META.sourceNote}</span>
          </div>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS E FONTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS E FONTES</h2>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {JUROS_REAL_EVIDENCES.slice(3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev as any} />
          ))}
        </div>
      </section>

    </div>
  );
}
