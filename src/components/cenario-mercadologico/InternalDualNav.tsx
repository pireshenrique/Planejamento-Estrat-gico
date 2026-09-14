import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface DualNavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface InternalDualNavProps {
  items: DualNavItem[];
  activeId: string;
  onChange: (id: string) => void;
}

/**
 * Componente padronizado de navegação interna de opções simétricas
 * Reutiliza exatamente o mesmo padrão visual, proporção, comportamento,
 * hover, estados ativo/inativo e responsividade.
 */
export function InternalDualNav({ items, activeId, onChange }: InternalDualNavProps) {
  const gridColsClass = items.length === 3 ? 'sm:grid-cols-3' : items.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-2';
  
  return (
    <div className="w-full bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-2 sm:p-2.5 shadow-inner">
      <div className={`grid grid-cols-1 ${gridColsClass} gap-2 sm:gap-2.5 w-full`}>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                isActive
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md border-indigo-700 dark:border-indigo-400 ring-2 ring-indigo-600/30'
                  : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-200 hover:shadow-md'
              }`}
            >
              <div 
                className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                  isActive
                    ? 'bg-white/20 border-white/40 text-white'
                    : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400'
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
              </div>
              <span className="mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
