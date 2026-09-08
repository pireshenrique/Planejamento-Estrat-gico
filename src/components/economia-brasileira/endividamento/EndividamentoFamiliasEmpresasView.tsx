import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Building2, 
  Sparkles, 
  ChevronRight 
} from 'lucide-react';
import { EndividamentoFamiliasView } from './EndividamentoFamiliasView';
import { EndividamentoEmpresasView } from './EndividamentoEmpresasView';

export type EndividamentoTab = 'familias' | 'empresas';

interface EndividamentoFamiliasEmpresasViewProps {
  setActivePage: (page: string) => void;
  activePage?: string;
}

export function EndividamentoFamiliasEmpresasView({ 
  setActivePage, 
  activePage 
}: EndividamentoFamiliasEmpresasViewProps) {
  const [activeTab, setActiveTab] = useState<EndividamentoTab>(() => {
    if (activePage === 'Endividamento das Empresas' || activePage === 'Endividamento das empresas') {
      return 'empresas';
    }
    return 'familias';
  });

  useEffect(() => {
    if (activePage === 'Endividamento das Empresas' || activePage === 'Endividamento das empresas') {
      setActiveTab('empresas');
    } else if (activePage === 'Endividamento das Famílias' || activePage === 'Endividamento das famílias') {
      setActiveTab('familias');
    }
  }, [activePage]);

  return (
    <div 
      className="w-full font-sans text-slate-800 dark:text-slate-100 animate-in fade-in duration-300 pb-12 flex flex-col gap-6"
      id="endividamento-familias-empresas-hub-root"
    >
      {/* CABEÇALHO */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-2xs">
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
              Endividamento das Famílias e Empresas
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 font-normal leading-relaxed max-w-3xl">
              Selecione o subtema desejado para acessar os indicadores e análises estratégicas.
            </p>
          </div>
        </div>
      </div>

      {/* SELETOR COMPACTO HORIZONTAL (REFERÊNCIA: CONFLITOS E TENSÕES INTERNACIONAIS) */}
      <div className="overflow-x-auto no-scrollbar -mx-1 px-1 py-1">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5 p-1.5 sm:p-2 bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-2xl w-full shadow-inner">
          {/* Opção 1: Endividamento das Famílias */}
          <button
            id="btn-seletor-familias"
            type="button"
            onClick={() => setActiveTab('familias')}
            className={`flex-1 w-full sm:w-auto px-5 py-3.5 rounded-[16px] text-[14px] sm:text-[15px] font-bold transition-all duration-200 ease-out whitespace-nowrap text-center cursor-pointer border flex flex-col items-center justify-center gap-1.5 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              activeTab === 'familias'
                ? 'bg-amber-500 dark:bg-amber-500 text-white shadow-md border-amber-600 dark:border-amber-400 ring-2 ring-amber-500/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-xs border-slate-200/90 dark:border-slate-700/80 hover:bg-amber-50/80 dark:hover:bg-amber-950/40 hover:border-amber-300 dark:hover:border-amber-700 hover:text-amber-800 dark:hover:text-amber-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'familias'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-amber-50 dark:bg-amber-950/60 border-amber-200/80 dark:border-amber-800/60 text-amber-600 dark:text-amber-400'
              }`}
            >
              <Users className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Endividamento das Famílias</span>
          </button>

          {/* Opção 2: Endividamento das Empresas */}
          <button
            id="btn-seletor-empresas"
            type="button"
            onClick={() => setActiveTab('empresas')}
            className={`flex-1 w-full sm:w-auto px-5 py-3.5 rounded-[16px] text-[14px] sm:text-[15px] font-bold transition-all duration-200 ease-out whitespace-nowrap text-center cursor-pointer border flex flex-col items-center justify-center gap-1.5 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              activeTab === 'empresas'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md border-indigo-700 dark:border-indigo-400 ring-2 ring-indigo-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-xs border-slate-200/90 dark:border-slate-700/80 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'empresas'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400'
              }`}
            >
              <Building2 className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Endividamento das Empresas</span>
          </button>
        </div>
      </div>

      {/* CONTEÚDO DO SUBTEMA SELECIONADO (INLINE) */}
      <div className="w-full" id="endividamento-subtema-content-container">
        {activeTab === 'familias' && (
          <EndividamentoFamiliasView setActivePage={setActivePage} embedded />
        )}
        {activeTab === 'empresas' && (
          <EndividamentoEmpresasView setActivePage={setActivePage} embedded />
        )}
      </div>
    </div>
  );
}

export default EndividamentoFamiliasEmpresasView;
