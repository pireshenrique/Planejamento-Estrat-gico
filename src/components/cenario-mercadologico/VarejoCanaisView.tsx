import React, { useState, useEffect } from 'react';
import { Store, ShoppingCart, ChevronRight, Building2 } from 'lucide-react';
import { InternalDualNav, DualNavItem } from './InternalDualNav';
import { TransformacaoVarejoView } from './TransformacaoVarejoView';
import { EcommerceView } from './EcommerceView';
import { EstruturaFormatosView } from './EstruturaFormatosView';

interface VarejoCanaisViewProps {
  setActivePage?: (page: string) => void;
  initialTab?: 'estrutura' | 'varejo' | 'ecommerce';
}

const NAV_ITEMS: DualNavItem[] = [
  {
    id: 'estrutura',
    label: 'Estrutura e Formatos',
    icon: Building2
  },
  {
    id: 'varejo',
    label: 'Varejo em Transformação',
    icon: Store
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: ShoppingCart
  }
];

export function VarejoCanaisView({ setActivePage, initialTab = 'estrutura' }: VarejoCanaisViewProps) {
  const [subTab, setSubTab] = useState<'estrutura' | 'varejo' | 'ecommerce'>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setSubTab(initialTab);
    }
  }, [initialTab]);

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in duration-300">
      
      {/* CABEÇALHO */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button 
            type="button"
            onClick={() => setActivePage?.('Home')} 
            className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0 cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Cenário Mercadológico</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">Varejo e Canais</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Varejo e Canais
            </h1>
            <p className="text-sm sm:text-[16px] text-slate-600 dark:text-slate-400">
              Estrutura, formatos e transformações dos canais que conectam fabricantes, varejistas e consumidores.
            </p>
          </div>
        </div>
      </div>

      {/* NAVEGAÇÃO SECUNDÁRIA (REUTILIZA PADRÃO DE PERFIL DE CONSUMO) */}
      <InternalDualNav 
        items={NAV_ITEMS}
        activeId={subTab}
        onChange={(id) => setSubTab(id as 'estrutura' | 'varejo' | 'ecommerce')}
      />

      {/* CONTEÚDO DA PÁGINA SELECIONADA */}
      {subTab === 'estrutura' ? (
        <EstruturaFormatosView setActivePage={setActivePage} hideHeader={true} />
      ) : subTab === 'varejo' ? (
        <TransformacaoVarejoView setActivePage={setActivePage} hideHeader={true} />
      ) : (
        <EcommerceView setActivePage={setActivePage} hideHeader={true} />
      )}
    </div>
  );
}
