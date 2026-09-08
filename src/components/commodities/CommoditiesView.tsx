import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import {
  COMMODITIES_TOPICS,
  COMMODITIES_BY_ID,
  type CommodityTopicId
} from '../../data/commodities/commodities';

interface CommoditiesViewProps {
  setActivePage?: (page: string) => void;
}

export function CommoditiesView({ setActivePage }: CommoditiesViewProps) {
  const [selectedTopic, setSelectedTopic] = useState<CommodityTopicId>('aco');
  const currentData = COMMODITIES_BY_ID[selectedTopic];

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* CABEÇALHO COM TÍTULO E BARRA DE NAVEGAÇÃO TEMÁTICA (FORMATO PILL BAR) */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Commodities
            </h1>
            <p className="text-sm sm:text-[16px] text-slate-600 dark:text-slate-400">
              Acompanhamento de insumos críticos e macro-tendências globais de materiais estratégicos.
            </p>
          </div>

          {/* ATALHO ENTRE PÁGINAS (SE NECESSÁRIO, PODERIAMOS ADICIONAR ATALHOS. COMO É UMA NOVA ABA RAIZ, TALVEZ UM BREADCRUMB OU NADA) */}
        </div>

        {/* BARRA DE NAVEGAÇÃO DAS COMMODITIES */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 bg-indigo-50/30 dark:bg-slate-800/40 border border-indigo-100/60 dark:border-slate-700/60 rounded-2xl w-full shadow-inner">
            {COMMODITIES_TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic.id;
              const Icon = topic.icon;

              return (
                <button
                  key={topic.id}
                  id={`btn-commodity-${topic.id}`}
                  type="button"
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`w-full px-1.5 sm:px-3 py-2 sm:py-3 rounded-xl sm:rounded-[14px] text-xs sm:text-[13.5px] font-bold transition-all duration-200 ease-out whitespace-nowrap text-center cursor-pointer border flex flex-col items-center justify-center gap-1 sm:gap-1.5 select-none active:scale-[0.98] ${
                    isSelected
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-700 dark:border-indigo-400 shadow-md ring-2 ring-indigo-600/30 dark:ring-indigo-500/30 hover:bg-indigo-700 dark:hover:bg-indigo-600'
                      : 'bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-200 shadow-sm border-indigo-200/60 dark:border-indigo-800/50 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-100 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-center shrink-0">
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`} />
                  </div>

                  <span className="mt-0.5 tracking-tight truncate max-w-full">{topic.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* BANNER INFORMATIVO DO TEMA ATIVO */}
      <div className="bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 bg-slate-100 dark:bg-slate-800">
            {React.createElement(currentData.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400' })}
          </div>
          <div>
            <h2 className="text-base sm:text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white mb-0.5 sm:mb-1 leading-tight">
              {currentData.label}
            </h2>
            <p className="text-xs sm:text-[14px] text-slate-600 dark:text-slate-300 max-w-4xl">
              {currentData.headline}
            </p>
          </div>
        </div>
      </div>

      {/* 1. CARD UNIFICADO: STATUS E PRINCIPAIS NOTÍCIAS (COMPACTADO EM ALTURA) */}
      <section>
        <div className="w-full bg-white dark:bg-[#111827] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-3.5 sm:p-5 md:p-6 shadow-sm">
          {/* Cabeçalho do Card Compacto */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3.5">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                  Status e visão de mercado
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                  {currentData.statusSubtitle}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0 hidden sm:inline-block">
              Síntese Estratégica
            </span>
          </div>

          {/* Destaque de Status do Cenário Compacto */}
          <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-xl p-2.5 sm:px-3.5 sm:py-2.5 border border-slate-200/70 dark:border-slate-700/60 mb-2.5 sm:mb-3.5">
            <p className="text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-snug font-medium">
              {currentData.observeSummary}
            </p>
          </div>

          {/* Lista Unificada de Pontos Sob Monitoramento em 2 Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-snug">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="font-bold text-slate-900 dark:text-white mb-2">
                {currentData.observeTitle || 'Pontos sob monitoramento'}
              </div>
              {currentData.observeNotes.map((note, idx) => (
                <div key={`obs-${idx}`} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0 mt-1.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="font-bold text-slate-900 dark:text-white mb-2">Possíveis impactos para a Lorenzetti:</div>
              {currentData.lorenzettiImpacts.map((imp, idx) => (
                <div key={`imp-${idx}`} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0 mt-1.5" />
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRINCIPAIS NOTÍCIAS E DADOS (EVIDÊNCIAS FACTUAIS DO TEMA SELECIONADO) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="text-indigo-600 dark:text-indigo-400">
              {React.createElement(currentData.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
            </div>
            <h2 className="text-sm sm:text-[16px] font-bold text-slate-900 dark:text-white">
              Evidências e Dados — {currentData.label}
            </h2>
          </div>
          <span className="text-[11px] sm:text-xs text-slate-500">
            Evidências factuais rastreáveis com fontes e datas
          </span>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-5 w-full">
          {currentData.evidences.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}
