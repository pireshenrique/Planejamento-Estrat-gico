import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import {
  CONFLICT_TOPICS,
  CONFLICTS_BY_ID,
  type ConflictTopicId
} from '../../data/geopolitica/conflitosTensoesInternacionais';

interface ConflitosTensoesInternacionaisViewProps {
  setActivePage?: (page: string) => void;
}

export function ConflitosTensoesInternacionaisView({ setActivePage }: ConflitosTensoesInternacionaisViewProps) {
  const [selectedTopic, setSelectedTopic] = useState<ConflictTopicId>('ucrania-russia');
  const currentData = CONFLICTS_BY_ID[selectedTopic];

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* CABEÇALHO COM TÍTULO E BARRA DE NAVEGAÇÃO TEMÁTICA (FORMATO PILL BAR) */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Conflitos e Tensões Internacionais
          </h1>
          <p className="text-[16px] text-slate-600 dark:text-slate-400">
            Acompanhamento de pontos de fricção geopolítica, riscos à estabilidade global e impactos nas cadeias de valor.
          </p>
        </div>

        {/* BARRA DE NAVEGAÇÃO HORIZONTAL COM BANDEIRAS */}
        <div className="overflow-x-auto no-scrollbar -mx-1 px-1 py-1">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 sm:gap-2.5 p-1.5 sm:p-2 bg-indigo-50/30 dark:bg-slate-800/40 border border-indigo-100/60 dark:border-slate-700/60 rounded-2xl w-full shadow-inner">
            {CONFLICT_TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic.id;

              return (
                <button
                  key={topic.id}
                  id={`btn-conflito-${topic.id}`}
                  type="button"
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`flex-1 min-w-[220px] sm:min-w-0 px-4 sm:px-5 py-3.5 rounded-[16px] text-[13.5px] sm:text-[14.5px] font-bold transition-all duration-200 ease-out whitespace-nowrap text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] ${
                    isSelected
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-700 dark:border-indigo-400 shadow-md ring-2 ring-indigo-600/30 dark:ring-indigo-500/30 hover:bg-indigo-700 dark:hover:bg-indigo-600'
                      : 'bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-200 shadow-sm border-indigo-200/60 dark:border-indigo-800/50 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-100 hover:shadow-md'
                  }`}
                >
                  {/* Bandeiras dos Países Acima e Maiores */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    {topic.flags.map((flag) => (
                      <img
                        key={flag.code}
                        src={`https://flagcdn.com/w80/${flag.code}.png`}
                        alt={flag.name}
                        title={flag.name}
                        className={`w-[34px] h-[23px] object-cover rounded-[5px] shadow-sm border ${
                          isSelected
                            ? 'border-white/60 shadow-md'
                            : 'border-slate-300 dark:border-slate-600'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>

                  <span className="mt-0.5">{topic.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* BANNER INFORMATIVO DO TEMA ATIVO */}
      <div className="bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            {React.createElement(currentData.icon, { className: 'w-6 h-6' })}
          </div>
          <div>
            <h2 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white mb-1">
              {currentData.label}
            </h2>
            <p className="text-[14px] text-slate-600 dark:text-slate-300 max-w-4xl">
              {currentData.headline}
            </p>
          </div>
        </div>
      </div>

      {/* 1. CARD UNIFICADO: STATUS E PRINCIPAIS NOTÍCIAS (COMPACTADO EM ALTURA) */}
      <section>
        <div className="w-full bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 md:p-6 shadow-sm">
          {/* Cabeçalho do Card Compacto */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                  Status e principais notícias
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {currentData.statusSubtitle || 'Principais desdobramentos do conflito e pontos de atenção para o cenário internacional'}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0 hidden sm:inline-block">
              Síntese Estratégica
            </span>
          </div>

          {/* Destaque de Status do Cenário Compacto */}
          <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-xl px-3.5 py-2.5 border border-slate-200/70 dark:border-slate-700/60 mb-3.5">
            <p className="text-[13px] sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-snug font-medium">
              {currentData.observeSummary}
            </p>
          </div>

          {/* Lista Unificada de Pontos Sob Monitoramento em 2 Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2 text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-snug">
            <div className="space-y-2">
              {currentData.observeNotes.map((note, idx) => (
                <div key={`obs-${idx}`} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0 mt-1.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {currentData.lorenzettiImpacts.map((imp, idx) => (
                <div key={`imp-${idx}`} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0 mt-1.5" />
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRINCIPAIS NOTÍCIAS E DADOS (TOP 3 DO TEMA SELECIONADO) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais notícias e dados — {currentData.label}
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            Evidências factuais rastreáveis com fontes e datas
          </span>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {currentData.evidences.map((ev: any) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}
