import React, { useState } from 'react';
import { Target, TrendingUp, ArrowLeft, BarChart3, Info, ChevronRight, ExternalLink, X, Factory, ShoppingCart, Users, Briefcase, DollarSign, Activity, Wheat, Building, BarChart2, AlertTriangle, ClipboardList, ShieldCheck, Eye, Quote, BookOpen, Search } from 'lucide-react';
import { EvidenceCard } from '../../layout/EvidenceCard';
import { GOVERNO_EVIDENCES } from '../../../data/evidences/governo';

interface GovernoViewProps {
  setActivePage: (page: string) => void;
}



export function GovernoView({ setActivePage }: GovernoViewProps) {
  
  return (
    <div className="w-full flex flex-col gap-6 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6 mb-2">
        <div className="flex items-start gap-4 w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <button 
            onClick={() => setActivePage("PIB")}
            className="group flex items-center justify-center w-10 h-10 mt-1 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 border-b-[3px] border-b-slate-300 dark:border-b-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:border-b-blue-400 dark:hover:border-b-blue-800 transition-all shadow-sm active:border-b-[1px] active:translate-y-[2px] cursor-pointer text-slate-600 dark:text-slate-400"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <div>
            <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">PIB Governo</h1>
            <p className="text-[17px] text-slate-600 dark:text-slate-400 ">
              Análise do Consumo do Governo e o impacto da atuação estatal na demanda agregada.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Projeção 2026</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-indigo-600 dark:text-indigo-400 leading-none">2,0%</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Projeção PIB Geral (CNI)</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Governo 1º tri/2026</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-indigo-600 dark:text-indigo-400 leading-none">0,4%</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Variação vs. tri anterior</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Governo 2025</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-indigo-600 dark:text-indigo-400 leading-none">2,1%</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Fechamento do ano (IBGE)</p>
            </div>
          </div>
        </div>
      </div>

                              {/* 1. Leitura estratégica */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-sm shrink-0">3</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">Gastos públicos sustentam serviços, mas espaço de expansão <span className="text-indigo-600 dark:text-indigo-400">é limitado</span>.</h2>
        </div>
        
        <div className="mb-0">
          {/* 4 Block Grid */}
          <div className="flex flex-col gap-5">
          
          {/* O que aconteceu e o que explica */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <div className="absolute top-8 right-8 text-[44px] font-bold text-slate-100 dark:text-slate-800/50 leading-none pointer-events-none select-none">
              01
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                
                <div className="pt-1">
                  <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que aconteceu e o que explica o resultado</h4>
                  <div className="inline-flex bg-slate-50/80 dark:bg-slate-900/30 px-3 py-1.5 rounded-lg mt-1">
                    <span className="text-[13px] text-slate-700 dark:text-slate-400 font-semibold">
                      Consumo estável, focado em políticas públicas e manutenção do Estado.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <p>O Consumo do Governo apresentou um crescimento estável e direcionado no primeiro trimestre de 2026. A expansão reflete a manutenção de políticas públicas essenciais, a continuidade de repasses para programas sociais e os investimentos contínuos em saúde e educação. Este desempenho evidencia o papel do Estado como agente estabilizador da demanda agregada, compensando em certa medida a retração em outras áreas da economia.</p>
                <p>A expansão pode ser justificada pelos esforços do governo para manter a máquina pública em funcionamento, aliado à liberação de recursos previstos em orçamentos anteriores. Ademais, o pagamento de precatórios e a recomposição do quadro de servidores em setores estratégicos garantiram o fluxo de recursos governamentais na economia.</p>
                <p>A recomposição não foi generalizada. O avanço foi impulsionado primordialmente por reações pontuais no setor de construção civil leve (como retrofits e reparos) e aquisições isoladas de máquinas e equipamentos focadas estritamente na renovação obrigatória por obsolescência, ao invés da expansão estrutural. É um sintoma de um setor produtivo tentando estabilizar sua capacidade, mas com passos ainda comedidos.
              </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* O que observar */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
                02
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que observar nos próximos meses</h4>
                  <div className="inline-flex bg-slate-50/80 dark:bg-slate-900/30 px-3 py-1.5 rounded-lg mt-1">
                    <span className="text-[13px] text-slate-700 dark:text-slate-400 font-semibold">
                      Dinâmica fiscal, teto de gastos e possíveis contingenciamentos orçamentários.
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>É fundamental acompanhar a execução do orçamento público e os limites impostos pelo arcabouço fiscal. Restrições orçamentárias podem limitar novas expansões dos gastos governamentais no segundo semestre. As discussões sobre o cumprimento das metas fiscais também podem impactar as expectativas e gerar cortes pontuais em investimentos governamentais não obrigatórios.</p>
                </div>
              </div>
            </div>

            {/* Impacto */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-slate-100 dark:border-slate-900/30 p-8 shadow-sm flex flex-col ">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-slate-50 dark:text-slate-900/20 leading-none pointer-events-none select-none">
                03
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a empresa</h4>
                  <div className="inline-flex bg-slate-50/80 dark:bg-slate-900/30 px-3 py-1.5 rounded-lg mt-1">
                    <span className="text-[13px] text-slate-700 dark:text-slate-400 font-semibold">
                      Oportunidade em licitações e serviços diretos, mas risco de atrasos.
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>O fluxo constante de recursos governamentais favorece empresas que participam de licitações públicas ou fornecem insumos para a prestação de serviços do governo. Contudo, o ambiente fiscal restritivo sinaliza que as empresas devem mitigar riscos de concentração excessiva em contratos públicos, buscando a diversificação de clientes e maior eficiência operacional.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
          
          {/* Quote Section */}
          <div className="relative px-4 md:px-8 py-6 bg-teal-50 dark:bg-teal-900/10 rounded-2xl border border-teal-100 dark:border-teal-900/30">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-teal-200 dark:text-teal-900/50 rotate-180" />
            <p className="text-[18px] md:text-[20px] text-slate-800 dark:text-slate-200 italic font-medium relative z-10 pl-8 leading-relaxed">
              "A atuação do governo se mantém como suporte relevante da demanda, mas o aperto fiscal sinaliza limites para uma expansão contínua."
            </p>
          </div>
        </div>
      </section>

      {/* GUIDELINES */}
      <div className="flex bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-5 md:p-6 mb-0 gap-4 items-start">
         <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
           <Info className="w-4 h-4" />
         </div>
         <div>
           <h4 className="text-[15px] font-bold text-slate-900 dark:text-slate-200 mb-1">Nota Metodológica de Inteligência</h4>
           <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
             As análises apresentadas nesta página foram geradas por Inteligência Artificial a partir da base de evidências contida neste sistema, sendo posteriormente revisadas, checadas e aprovadas por nossa equipe de planejamento.
           </p>
         </div>
      </div>

      {/* EVIDENCES - LISTA */}
            {/* EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-0 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Notícias e dados oficiais base que fundamentam esta visão estratégica.</p>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {GOVERNO_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>
    </div>
  );
}