import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import {
  ASIA_TOPICS,
  ASIA_BY_ID,
  type AsiaTopicId
} from '../../data/geopolitica/asia';
import { RegionalHeader } from './RegionalNavigation';

interface AsiaViewProps {
  setActivePage?: (page: string) => void;
  initialTopic?: AsiaTopicId;
}

export function AsiaView({ setActivePage, initialTopic = 'china' }: AsiaViewProps) {
  const [selectedTopic, setSelectedTopic] = useState<AsiaTopicId>(initialTopic);
  const currentData = ASIA_BY_ID[selectedTopic] || ASIA_TOPICS[0];

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* CABEÇALHO COM TÍTULO E BARRA DE NAVEGAÇÃO REGIONAL PADRONIZADA */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <RegionalHeader
          title="Ásia"
          subtitle="Acompanhamento econômico, comercial e industrial nos mercados asiáticos estratégicos: China e Índia."
          activeRegion="Ásia"
          setActivePage={setActivePage}
        />

        {/* BARRA DE NAVEGAÇÃO DOS PAÍSES (SOMENTE CHINA E ÍNDIA) */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 p-1.5 sm:p-2 bg-indigo-50/30 dark:bg-slate-800/40 border border-indigo-100/60 dark:border-slate-700/60 rounded-2xl w-full shadow-inner">
            {ASIA_TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic.id;

              return (
                <button
                  key={topic.id}
                  id={`btn-asia-${topic.id}`}
                  type="button"
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`w-full px-4 py-3.5 rounded-[14px] text-[13.5px] sm:text-[14px] font-bold transition-all duration-200 ease-out whitespace-nowrap text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] ${
                    isSelected
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-700 dark:border-indigo-400 shadow-md ring-2 ring-indigo-600/30 dark:ring-indigo-500/30 hover:bg-indigo-700 dark:hover:bg-indigo-600'
                      : 'bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-200 shadow-sm border-indigo-200/60 dark:border-indigo-800/50 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-100 hover:shadow-md'
                  }`}
                >
                  {/* Bandeira do País Acima */}
                  <div className="flex items-center justify-center shrink-0">
                    {topic.flags.map((flag) => (
                      <img
                        key={flag.code}
                        src={`https://flagcdn.com/w80/${flag.code}.png`}
                        alt={flag.name}
                        title={flag.name}
                        className={`w-[34px] h-[23px] object-cover rounded-[4px] shadow-sm border ${
                          isSelected
                            ? 'border-white/70 shadow-md'
                            : 'border-slate-300 dark:border-slate-600'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    ))}
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
            {currentData.flags?.[0] ? (
              <img
                src={`https://flagcdn.com/w160/${currentData.flags[0].code}.png`}
                alt={currentData.flags[0].name}
                title={currentData.flags[0].name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              React.createElement(currentData.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400' })
            )}
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
                  Status e principais notícias
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                  {currentData.statusSubtitle || 'Principais desdobramentos e pontos de atenção para o cenário econômico'}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3 text-xs sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-normal">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {currentData.observeNotes.map((note, idx) => (
                <div key={`obs-${idx}`} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0 mt-1.5" />
                  <span className="flex-1">{note}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {currentData.lorenzettiImpacts.map((imp, idx) => (
                <div key={`imp-${idx}`} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0 mt-1.5" />
                  <span className="flex-1">{imp}</span>
                </div>
              ))}
            </div>
          </div>
          
          {selectedTopic === 'china' && (
            <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-slate-700 text-[11px] sm:text-[11.5px] text-slate-500 dark:text-slate-400 leading-normal flex flex-col gap-1.5 sm:gap-2">
              <div>
                * Evergrande — Uma das maiores incorporadoras imobiliárias da China. Deixou de pagar parte de suas dívidas em 2021 e entrou em processo de liquidação em 2024.
              </div>
              <div>
                * Country Garden — Grande incorporadora privada chinesa que também deixou de cumprir pagamentos de dívidas em 2023, tornando-se outro símbolo da crise financeira do setor imobiliário.
              </div>
              <div>
                * China Vanke — Uma das principais incorporadoras chinesas. Continua em operação, mas vem enfrentando dificuldades financeiras, negociando prazos de pagamento de dívidas e passando por mudanças relevantes em sua administração.
              </div>
            </div>
          )}

          {selectedTopic === 'india' && (
            <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-slate-700 text-[11px] sm:text-[11.5px] text-slate-500 dark:text-slate-400 leading-normal">
              * BBB/A-2 — Classificação de crédito atribuída pela S&P à capacidade do governo indiano de pagar suas dívidas. BBB é a nota de longo prazo e representa o nível mais baixo dentro da categoria considerada “grau de investimento”, ou seja, ainda indica capacidade adequada de pagamento. A-2 é a avaliação das obrigações de curto prazo e também indica capacidade considerada satisfatória de pagamento.
            </div>
          )}
        </div>
      </section>

      {/* 2. PRINCIPAIS NOTÍCIAS E DADOS (EVIDÊNCIAS FACTUAIS DO TEMA SELECIONADO) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4">
          <div className="flex items-center gap-2 sm:gap-2.5">
            {currentData.flags?.[0] ? (
              <img
                src={`https://flagcdn.com/w80/${currentData.flags[0].code}.png`}
                alt={currentData.flags[0].name}
                className="w-5 h-3.5 sm:w-6 sm:h-4 object-cover rounded shadow-xs border border-slate-300 dark:border-slate-600 shrink-0"
                referrerPolicy="no-referrer"
              />
            ) : (
              React.createElement(currentData.icon, { className: 'w-5 h-5 text-indigo-600 dark:text-indigo-400' })
            )}
            <h2 className="text-sm sm:text-[16px] font-bold text-slate-900 dark:text-white">
              Principais notícias e dados — {currentData.label}
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
