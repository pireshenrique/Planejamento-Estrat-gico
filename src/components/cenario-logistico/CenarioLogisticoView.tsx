import React from 'react';
import { Compass, Ship } from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import { CENARIO_LOGISTICO_DATA } from '../../data/logistica/cenarioLogistico';

interface CenarioLogisticoViewProps {
  setActivePage?: (page: string) => void;
}

export function CenarioLogisticoView({ setActivePage }: CenarioLogisticoViewProps) {
  const currentData = CENARIO_LOGISTICO_DATA;
  const Icon = currentData.icon || Ship;

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* CABEÇALHO COM TÍTULO (SEM BOTÕES DE NAVEGAÇÃO) */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Cenário Logístico
            </h1>
            <p className="text-sm sm:text-[16px] text-slate-600 dark:text-slate-400">
              Acompanhamento de rotas marítimas estratégicas, fretes internacionais, gargalos portuários e fluxos logísticos globais.
            </p>
          </div>
        </div>
      </div>

      {/* BANNER INFORMATIVO DO TEMA ATIVO */}
      <div className="bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 bg-slate-100 dark:bg-slate-800">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
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
                {currentData.observeTitle || 'Últimas notícias'}
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

      {/* 2. PRINCIPAIS NOTÍCIAS E DADOS (EVIDÊNCIAS FACTUAIS) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="text-indigo-600 dark:text-indigo-400">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-sm sm:text-[16px] font-bold text-slate-900 dark:text-white">
              Evidências e Dados — {currentData.label}
            </h2>
          </div>
          <span className="text-[11px] sm:text-xs text-slate-500">
            Evidências factuais rastreáveis com fontes e datas
          </span>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {currentData.evidences.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}
