import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Factory, 
  Scale, 
  ArrowRightLeft, 
  Activity, 
  Coins,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { ConfiancaConsumidorView } from './ConfiancaConsumidorView';
import { ProducaoIndustriaView } from './ProducaoIndustriaView';
import { SondagemConjunturalView } from './SondagemConjunturalView';
import { ImposicaoSobretaxasView } from './ImposicaoSobretaxasView';
import { BalancoComercialView } from './BalancoComercialView';
import { PrecoCommoditiesView } from './PrecoCommoditiesView';

export type EletroTab = 'confianca' | 'producao' | 'sondagem' | 'sobretaxas' | 'balanco' | 'commodities';

interface IndustriaEletroeletronicoViewProps {
  setActivePage: (page: string) => void;
  activePage?: string;
}

export function IndustriaEletroeletronicoView({ 
  setActivePage, 
  activePage 
}: IndustriaEletroeletronicoViewProps) {

  const [activeTab, setActiveTab] = useState<EletroTab>(() => {
    if (activePage === 'Confiança do Consumidor' || activePage === 'Confiança do consumidor') return 'confianca';
    if (activePage === 'Produção da Indústria') return 'producao';
    if (activePage === 'Sondagem Conjuntural' || activePage === 'SONDAGEM CONJUNTURAL') return 'sondagem';
    if (activePage === 'Imposição de Sobretaxas' || activePage === 'IMPOSIÇÃO DE SOBRETAXAS') return 'sobretaxas';
    if (activePage === 'Balanço Comercial' || activePage === 'BALANÇO COMERCIAL') return 'balanco';
    if (activePage === 'Preço de Commodities' || activePage === 'PREÇO DE COMMODITIES') return 'commodities';
    return 'confianca';
  });

  useEffect(() => {
    if (activePage === 'Confiança do Consumidor' || activePage === 'Confiança do consumidor') setActiveTab('confianca');
    else if (activePage === 'Produção da Indústria') setActiveTab('producao');
    else if (activePage === 'Sondagem Conjuntural' || activePage === 'SONDAGEM CONJUNTURAL') setActiveTab('sondagem');
    else if (activePage === 'Imposição de Sobretaxas' || activePage === 'IMPOSIÇÃO DE SOBRETAXAS') setActiveTab('sobretaxas');
    else if (activePage === 'Balanço Comercial' || activePage === 'BALANÇO COMERCIAL') setActiveTab('balanco');
    else if (activePage === 'Preço de Commodities' || activePage === 'PREÇO DE COMMODITIES') setActiveTab('commodities');
    else if (activePage === 'Indústria do Setor Eletroeletrônico') setActiveTab('confianca');
  }, [activePage]);

  return (
    <div 
      className="w-full font-sans text-slate-800 dark:text-slate-100 animate-in fade-in duration-300 pb-12 flex flex-col gap-6"
      id="eletro-hub-root"
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
              Indústria
            </span>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Indústria do Setor Eletroeletrônico
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 font-normal leading-relaxed max-w-3xl">
              Selecione o subtema desejado para acessar os indicadores e análises estratégicas do setor.
            </p>
          </div>
        </div>
      </div>

      {/* SELETOR COMPACTO HORIZONTAL */}
      <div className="w-full bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-2 sm:p-2.5 shadow-inner">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 w-full">
          
          {/* Opção 1: Confiança do Consumidor */}
          <button
            id="btn-seletor-confianca"
            type="button"
            onClick={() => setActiveTab('confianca')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              activeTab === 'confianca'
                ? 'bg-amber-600 dark:bg-amber-500 text-white shadow-md border-amber-700 dark:border-amber-400 ring-2 ring-amber-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-amber-50/80 dark:hover:bg-amber-950/40 hover:border-amber-300 dark:hover:border-amber-700 hover:text-amber-800 dark:hover:text-amber-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'confianca'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-amber-50 dark:bg-amber-950/60 border-amber-200/80 dark:border-amber-800/60 text-amber-600 dark:text-amber-400'
              }`}
            >
              <Users className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Confiança do Consumidor</span>
          </button>

          {/* Opção 2: Produção da Indústria */}
          <button
            id="btn-seletor-producao"
            type="button"
            onClick={() => setActiveTab('producao')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
              activeTab === 'producao'
                ? 'bg-red-600 dark:bg-red-500 text-white shadow-md border-red-700 dark:border-red-400 ring-2 ring-red-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-red-50/80 dark:hover:bg-red-950/40 hover:border-red-300 dark:hover:border-red-700 hover:text-red-800 dark:hover:text-red-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'producao'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-red-50 dark:bg-red-950/60 border-red-200/80 dark:border-red-800/60 text-red-600 dark:text-red-400'
              }`}
            >
              <Factory className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Produção da Indústria</span>
          </button>

          {/* Opção 3: Sondagem Conjuntural */}
          <button
            id="btn-seletor-sondagem"
            type="button"
            onClick={() => setActiveTab('sondagem')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              activeTab === 'sondagem'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-md border-emerald-700 dark:border-emerald-400 ring-2 ring-emerald-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-emerald-800 dark:hover:text-emerald-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'sondagem'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400'
              }`}
            >
              <Activity className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Sondagem Conjuntural</span>
          </button>

          {/* Opção 4: Imposição de Sobretaxas */}
          <button
            id="btn-seletor-sobretaxas"
            type="button"
            onClick={() => setActiveTab('sobretaxas')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
              activeTab === 'sobretaxas'
                ? 'bg-purple-600 dark:bg-purple-500 text-white shadow-md border-purple-700 dark:border-purple-400 ring-2 ring-purple-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-purple-50/80 dark:hover:bg-purple-950/40 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-800 dark:hover:text-purple-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'sobretaxas'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-purple-50 dark:bg-purple-950/60 border-purple-200/80 dark:border-purple-800/60 text-purple-600 dark:text-purple-400'
              }`}
            >
              <Scale className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Imposição de Sobretaxas</span>
          </button>

          {/* Opção 5: Balanço Comercial */}
          <button
            id="btn-seletor-balanco"
            type="button"
            onClick={() => setActiveTab('balanco')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              activeTab === 'balanco'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md border-indigo-700 dark:border-indigo-400 ring-2 ring-indigo-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'balanco'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400'
              }`}
            >
              <ArrowRightLeft className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Balanço Comercial</span>
          </button>

          {/* Opção 6: Preço de Commodities */}
          <button
            id="btn-seletor-commodities"
            type="button"
            onClick={() => setActiveTab('commodities')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
              activeTab === 'commodities'
                ? 'bg-cyan-600 dark:bg-cyan-500 text-white shadow-md border-cyan-700 dark:border-cyan-400 ring-2 ring-cyan-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-cyan-50/80 dark:hover:bg-cyan-950/40 hover:border-cyan-300 dark:hover:border-cyan-700 hover:text-cyan-800 dark:hover:text-cyan-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                activeTab === 'commodities'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200/80 dark:border-cyan-800/60 text-cyan-600 dark:text-cyan-400'
              }`}
            >
              <Coins className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Preço de Commodities</span>
          </button>
        </div>
      </div>

      {/* CONTEÚDO DO SUBTEMA SELECIONADO */}
      <div className="w-full" id="eletro-subtema-content-container">
        {activeTab === 'confianca' && (
          <ConfiancaConsumidorView setActivePage={setActivePage} />
        )}
        {activeTab === 'producao' && (
          <ProducaoIndustriaView setActivePage={setActivePage} />
        )}
        {activeTab === 'sondagem' && (
          <SondagemConjunturalView setActivePage={setActivePage} />
        )}
        {activeTab === 'sobretaxas' && (
          <ImposicaoSobretaxasView setActivePage={setActivePage} />
        )}
        {activeTab === 'balanco' && (
          <BalancoComercialView setActivePage={setActivePage} />
        )}
        {activeTab === 'commodities' && (
          <PrecoCommoditiesView setActivePage={setActivePage} />
        )}
      </div>
    </div>
  );
}

export default IndustriaEletroeletronicoView;
