import React from 'react';
import { Compass, Home, Building, Building2, Droplets, BarChart3 } from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import { DEFICIT_HABITACIONAL_DATA } from '../../data/cenario-habitacional/deficitHabitacional';

interface DeficitHabitacionalViewProps {
  setActivePage?: (page: string) => void;
}

export function DeficitHabitacionalView({ setActivePage }: DeficitHabitacionalViewProps) {
  const currentData = DEFICIT_HABITACIONAL_DATA;

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* CABEÇALHO COM TÍTULO E SUBTÍTULO */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Déficit Habitacional
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              O déficit quantitativo recuou nos dados mais recentes, mas o principal componente continua sendo o peso do aluguel. Além disso, há um volume muito elevado de moradias inadequadas, e a existência de imóveis desocupados não significa oferta habitacional imediata.
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
                {currentData.observeTitle || 'Últimas notícias e dados apurados'}
              </div>
              {currentData.observeNotes.map((note, idx) => (
                <div key={`obs-${idx}`} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0 mt-1.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="font-bold text-slate-900 dark:text-white mb-2">Possíveis impactos para a Lorenzetti</div>
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

      {/* PAINEL ANALÍTICO: ANÁLISE EXECUTIVA */}
      <section className="w-full">
        <div className="w-full bg-white dark:bg-[#111827] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm flex flex-col gap-4">
          
          {/* BLOCO 1 — Cabeçalho */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2.5 sm:pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Análise Executiva do Déficit Habitacional no Brasil
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Síntese baseada em dados oficiais da Fundação João Pinheiro (FJP), Ministério das Cidades e IBGE
                </p>
              </div>
            </div>
          </div>

          {/* DUAS COLUNAS PRINCIPAIS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
            
            {/* COLUNA ESQUERDA: Conceitos-chave e Cards Principais de Indicadores (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-3.5">
              
              {/* BLOCO 2 — Conceitos-chave */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-3 sm:p-3.5 flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-slate-200/70 dark:border-slate-700/60 pb-1.5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Conceitos-chave
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Fundamentos metodológicos
                  </span>
                </div>
                
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div>
                    <strong className="text-slate-900 dark:text-white font-semibold">Déficit habitacional →</strong> Necessidade de nova moradia ou comprometimento excessivo da renda com aluguel.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white font-semibold">Inadequação habitacional →</strong> Moradias ocupadas que precisam de melhorias de infraestrutura, condições da própria habitação ou regularização.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white font-semibold">Imóveis desocupados →</strong> Imóveis vazios que existem no estoque, mas não estão automaticamente disponíveis para atender o déficit habitacional.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white font-semibold">Ônus com aluguel →</strong> Famílias que comprometem parcela excessiva da renda para pagar moradia.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white font-semibold">Coabitação →</strong> Mais de uma família vivendo na mesma moradia por falta de alternativa habitacional adequada.
                  </div>
                </div>
              </div>

              {/* BLOCO 3 — Cards de indicadores principais (Apenas 4 cards em grid 2x2) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 flex-1">
                
                {/* Card 1: Déficit habitacional */}
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 mb-1">
                      <Home className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Déficit habitacional
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      5,77 mi
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-snug">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">7,4% dos domicílios ocupados no Brasil</span>
                    <span className="block text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                      Recuo frente a 7,6% em 2023
                    </span>
                  </div>
                </div>

                {/* Card 2: Principal componente */}
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
                      <Building className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Principal componente
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      62,1%
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-snug">
                    Peso excessivo do aluguel na renda
                  </div>
                </div>

                {/* Card 3: Moradias inadequadas */}
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 mb-1">
                      <Droplets className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Moradias inadequadas
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      ~28 mi
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-snug">
                    Moradias ocupadas com carências de infraestrutura ou condições inadequadas
                  </div>
                </div>

                {/* Card 4: Imóveis desocupados */}
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 mb-1">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Imóveis desocupados
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      ~11 mi
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-snug">
                    Estoque vazio que não se converte automaticamente em oferta habitacional
                  </div>
                </div>

              </div>

            </div>

            {/* COLUNA DIREITA: Gráfico da Composição do Déficit + Legenda Analítica + Interpretação (6 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="p-3.5 sm:p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 h-full flex flex-col justify-between gap-3 sm:gap-3.5">
                
                {/* Título e Apoio */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Composição do déficit habitacional brasileiro (5,77 mi)
                    </h4>
                    <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">
                      100% do déficit
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    O déficit habitacional brasileiro não é explicado apenas pela falta física de moradias. Em 2024, sua maior parcela esteve ligada ao comprometimento excessivo da renda com aluguel, enquanto habitação precária e coabitação completaram a composição do indicador.
                  </p>
                </div>

                {/* BLOCO 4 — Barra Horizontal Empilhada 100% */}
                <div className="space-y-1.5">
                  <div className="w-full h-5 rounded-lg bg-slate-200/80 dark:bg-slate-800 overflow-hidden flex shadow-inner">
                    <div 
                      className="h-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-[11px] font-bold text-white transition-all" 
                      style={{ width: '62.1%' }}
                      title="Ônus excessivo com aluguel: 62,1% (3,59 mi)"
                    >
                      62,1%
                    </div>
                    <div 
                      className="h-full bg-amber-500 dark:bg-amber-400 flex items-center justify-center text-[11px] font-bold text-white transition-all border-l border-white/20" 
                      style={{ width: '20%' }}
                      title="Habitação precária: ~20% (~1,16 mi)"
                    >
                      ~20%
                    </div>
                    <div 
                      className="h-full bg-sky-500 dark:bg-sky-400 flex items-center justify-center text-[11px] font-bold text-white transition-all border-l border-white/20" 
                      style={{ width: '17.9%' }}
                      title="Coabitação: ~17,9% (~1,03 mi)"
                    >
                      ~17,9%
                    </div>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono px-0.5">
                    <span>0%</span>
                    <span>100% (5,77 mi)</span>
                  </div>
                </div>

                {/* Mini-Legenda Analítica com os 3 Componentes Detalhados */}
                <div className="space-y-2">
                  {/* Item 1 */}
                  <div className="p-2 sm:p-2.5 rounded-md bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2 shadow-2xs">
                    <div className="flex items-start gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500 mt-1 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Ônus excessivo com aluguel
                        </div>
                        <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                          Famílias cujo gasto com aluguel compromete parcela excessiva da renda.
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white block">62,1%</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">3,59 mi</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-2 sm:p-2.5 rounded-md bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2 shadow-2xs">
                    <div className="flex items-start gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-1 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Habitação precária
                        </div>
                        <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                          Moradias com condições físicas inadequadas, incluindo situações improvisadas ou muito precárias.
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white block">~20%</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">~1,16 mi</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-2 sm:p-2.5 rounded-md bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2 shadow-2xs">
                    <div className="flex items-start gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-sky-500 dark:bg-sky-400 mt-1 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Coabitação
                        </div>
                        <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                          Famílias que compartilham a mesma moradia por não terem acesso a uma solução habitacional própria.
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white block">~17,9%</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">~1,03 mi</span>
                    </div>
                  </div>
                </div>

                {/* BLOCO 5 — Texto de interpretação executiva */}
                <div className="p-2.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50">
                  <p className="text-xs text-indigo-950 dark:text-indigo-200 font-medium leading-relaxed">
                    A principal leitura do indicador é que o déficit habitacional no Brasil está mais relacionado à dificuldade de pagar pela moradia do que apenas à ausência física de casas. Habitação precária e coabitação continuam relevantes, mas possuem peso menor na composição do déficit.
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* FONTE E RODAPÉ */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <span>Fonte: Fundação João Pinheiro (FJP), Ministério das Cidades e IBGE.</span>
            <span className="font-medium text-slate-600 dark:text-slate-300">
              Metodologia oficial brasileira.
            </span>
          </div>
        </div>
      </section>

      {/* 2. PRINCIPAIS NOTÍCIAS E DADOS (EVIDÊNCIAS FACTUAIS DO TEMA SELECIONADO) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4">
          <div>
            <h2 className="text-sm sm:text-[16px] font-bold text-slate-900 dark:text-white">
              Principais notícias e dados — {currentData.label}
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
