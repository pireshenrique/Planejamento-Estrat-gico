import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  ArrowUpRight, 
  Landmark, 
  DollarSign,
  Sparkles,
  ChevronRight
} from 'lucide-react';

import { PibView } from './pib/PibView';
import { InflacaoView } from './InflacaoView';
import { JurosView } from './juros/JurosView';
import { JurosRealView } from './juros/JurosRealView';
import { CambioView } from './CambioView';

export type MacroTab = 'pib' | 'inflacao' | 'selic' | 'juros-real' | 'cambio';

interface CenarioMacroeconomicoViewProps {
  setActivePage: (page: string) => void;
  activePage?: string;
}

export function CenarioMacroeconomicoView({ 
  setActivePage, 
  activePage 
}: CenarioMacroeconomicoViewProps) {
  const [activeTab, setActiveTab] = useState<MacroTab>(() => {
    if (activePage === 'Inflação') return 'inflacao';
    if (activePage === 'Juros / Selic') return 'selic';
    if (activePage === 'Taxa de Juros Real') return 'juros-real';
    if (activePage === 'Câmbio / dólar') return 'cambio';
    return 'pib';
  });

  useEffect(() => {
    if (activePage === 'Inflação') setActiveTab('inflacao');
    else if (activePage === 'Juros / Selic') setActiveTab('selic');
    else if (activePage === 'Taxa de Juros Real') setActiveTab('juros-real');
    else if (activePage === 'Câmbio / dólar') setActiveTab('cambio');
    else if (activePage === 'PIB' || activePage === 'Cenário Macroeconômico') setActiveTab('pib');
  }, [activePage]);

  return (
    <div 
      className="w-full font-sans text-slate-800 dark:text-slate-100 animate-in fade-in duration-300 pb-12 flex flex-col gap-6"
      id="cenario-macro-hub-root"
    >
      {/* CABEÇALHO */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <button 
              type="button"
              onClick={() => setActivePage('Home')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shrink-0">
              <Sparkles className="w-3 h-3 shrink-0" />
              Economia Brasileira
            </span>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Cenário Macroeconômico
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 font-normal leading-relaxed max-w-3xl">
              Selecione o subtema desejado para acessar os indicadores e análises estratégicas.
            </p>
          </div>
        </div>
      </div>

      {/* SELETOR COMPACTO HORIZONTAL */}
      <div className="w-full bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-2 sm:p-2.5 shadow-inner">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5 w-full">
          
          {/* Opção 1: PIB */}
          <button
            id="btn-seletor-pib"
            type="button"
            onClick={() => setActiveTab('pib')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              activeTab === 'pib'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md border-indigo-700 dark:border-indigo-400 ring-2 ring-indigo-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'pib'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400'
              }`}
            >
              <BarChart3 className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">PIB</span>
          </button>

          {/* Opção 2: Inflação */}
          <button
            id="btn-seletor-inflacao"
            type="button"
            onClick={() => setActiveTab('inflacao')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              activeTab === 'inflacao'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-md border-emerald-700 dark:border-emerald-400 ring-2 ring-emerald-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-emerald-800 dark:hover:text-emerald-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'inflacao'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400'
              }`}
            >
              <ArrowUpRight className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Inflação</span>
          </button>

          {/* Opção 3: Juros / Selic */}
          <button
            id="btn-seletor-selic"
            type="button"
            onClick={() => setActiveTab('selic')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              activeTab === 'selic'
                ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md border-blue-700 dark:border-blue-400 ring-2 ring-blue-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-800 dark:hover:text-blue-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'selic'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-800/60 text-blue-600 dark:text-blue-400'
              }`}
            >
              <Landmark className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Juros / Selic</span>
          </button>

          {/* Opção 4: Taxa de Juros Real */}
          <button
            id="btn-seletor-juros-real"
            type="button"
            onClick={() => setActiveTab('juros-real')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
              activeTab === 'juros-real'
                ? 'bg-rose-600 dark:bg-rose-500 text-white shadow-md border-rose-700 dark:border-rose-400 ring-2 ring-rose-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-rose-50/80 dark:hover:bg-rose-950/40 hover:border-rose-300 dark:hover:border-rose-700 hover:text-rose-800 dark:hover:text-rose-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'juros-real'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-rose-50 dark:bg-rose-950/60 border-rose-200/80 dark:border-rose-800/60 text-rose-600 dark:text-rose-400'
              }`}
            >
              <Landmark className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Taxa de Juros Real</span>
          </button>

          {/* Opção 5: Câmbio / dólar */}
          <button
            id="btn-seletor-cambio"
            type="button"
            onClick={() => setActiveTab('cambio')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              activeTab === 'cambio'
                ? 'bg-amber-600 dark:bg-amber-500 text-white shadow-md border-amber-700 dark:border-amber-400 ring-2 ring-amber-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-amber-50/80 dark:hover:bg-amber-950/40 hover:border-amber-300 dark:hover:border-amber-700 hover:text-amber-800 dark:hover:text-amber-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'cambio'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-amber-50 dark:bg-amber-950/60 border-amber-200/80 dark:border-amber-800/60 text-amber-600 dark:text-amber-400'
              }`}
            >
              <DollarSign className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Câmbio / dólar</span>
          </button>

        </div>
      </div>

      {/* CONTEÚDO DO SUBTEMA SELECIONADO */}
      <div className="w-full" id="cenario-macro-subtema-content-container">
        {activeTab === 'pib' && (
          <PibView setActivePage={setActivePage} />
        )}
        {activeTab === 'inflacao' && (
          <InflacaoView setActivePage={setActivePage} />
        )}
        {activeTab === 'selic' && (
          <JurosView setActivePage={setActivePage} />
        )}
        {activeTab === 'juros-real' && (
          <JurosRealView setActivePage={setActivePage} />
        )}
        {activeTab === 'cambio' && (
          <CambioView setActivePage={setActivePage} />
        )}
      </div>

    </div>
  );
}

export default CenarioMacroeconomicoView;
