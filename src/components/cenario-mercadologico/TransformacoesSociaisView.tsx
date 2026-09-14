import React from 'react';
import { Users, ChevronRight } from 'lucide-react';

interface TransformacoesSociaisViewProps {
  setActivePage?: (page: string) => void;
}

export function TransformacoesSociaisView({ setActivePage }: TransformacoesSociaisViewProps) {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in duration-300">
      
      {/* CABEÇALHO */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage?.('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0 cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Cenário Mercadológico</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">Estilos de Vida</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Estilos de Vida
            </h1>
            <p className="text-sm sm:text-[16px] text-slate-600 dark:text-slate-400">
              Mudanças sociais que alteram a forma de morar, relação com tecnologia, envelhecimento e estilos de vida.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-4">
          <Users className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Estilos de Vida</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-md">
          Esta página analisará mudanças sociais que alteram a forma de morar, relação com tecnologia, envelhecimento e novos estilos de vida. Em estruturação.
        </p>
      </div>
    </div>
  );
}
