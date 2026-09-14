import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

interface CenarioMercadologicoViewProps {
  setActivePage?: (page: string) => void;
  activePage?: string;
}

export function CenarioMercadologicoView({ setActivePage }: CenarioMercadologicoViewProps) {
  return (
    <div 
      className="w-full font-sans text-slate-800 dark:text-slate-100 animate-in fade-in duration-300 pb-12 flex flex-col gap-6"
      id="cenario-mercadologico-hub-root"
    >
      {/* CABEÇALHO */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <button 
              type="button"
              onClick={() => setActivePage?.('Home')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shrink-0">
              <Sparkles className="w-3 h-3 shrink-0" />
              Mercado & Consumo
            </span>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Cenário Mercadológico
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 font-normal leading-relaxed max-w-3xl">
              Utilize o menu lateral para navegar entre os temas do Cenário Mercadológico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
