import React, { useState } from 'react';
import { Target, TrendingUp, ArrowLeft, BarChart3, Info, ChevronRight, ExternalLink, X, Factory, ShoppingCart, Users, Briefcase, DollarSign, Activity, Wheat, Building, BarChart2, AlertTriangle, ClipboardList, ShieldCheck, Eye, Quote, Search } from 'lucide-react';
import { EvidenceCard } from '../../layout/EvidenceCard';
import { SERVICOS_EVIDENCES } from '../../../data/evidences/servicos';

interface ServicosViewProps {
  setActivePage: (page: string) => void;
}



export function ServicosView({ setActivePage }: ServicosViewProps) {
  
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
            <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">PIB Serviços</h1>
            <p className="text-[17px] text-slate-600 dark:text-slate-400 ">
              Análise aprofundada do setor de serviços, principal motor do PIB, e suas dinâmicas no cenário nacional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Projeção 2026</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-purple-600 dark:text-purple-400 leading-none">2,1%</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Projeção CNI</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Acumulado de 2026</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-purple-600 dark:text-purple-400 leading-none">0,5%</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Variação vs. tri anterior</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Finalizado em 2025</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-purple-600 dark:text-purple-400 leading-none">1,8%</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Fechamento do ano (IBGE)</p>
            </div>
          </div>
        </div>
      </div>

                              {/* 1. Leitura estratégica */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-700 dark:text-purple-400 font-bold text-sm shrink-0">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">Serviços lideram a alta do PIB, mas <span className="text-purple-600 dark:text-purple-400">pressão de custos</span> acende alerta para a inflação.</h2>
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
                      Setor segue como locomotiva da economia, impulsionado por famílias e B2B.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <p>
                O setor de Serviços isolou-se no 1º trimestre de 2026 como a maior e principal locomotiva da economia nacional, apresentando um crescimento sólido e contínuo de 1,6%. O setor ignorou grande parte da estagnação geral, demonstrando excepcional resiliência estrutural e reforçando seu papel como esteio do emprego, ancorando a demanda por via direta.</p>
                <p>A força do setor deriva primordialmente dos serviços prestados diretamente às famílias e atividades turísticas, tracionados pelo aquecimento expressivo da massa salarial urbana e mercado de trabalho pujante. Paralelamente, o eixo de serviços B2B engatou alta, motivado por fortes demandas corporativas de modernização, infraestrutura de tecnologia, transformação digital e logística urbana pulverizada.
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
                      Pressão de custos e repasses inflacionários no mercado de trabalho.
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                A grande pauta nos próximos meses não será o crescimento, que deve se manter vigoroso, mas sim a pressão latente de custos. O principal alerta se concentra na inflação crônica dos serviços, induzida pelo repasse de altos salários e encarecimento operacional. Restrições e readequações de crédito podem esfriar subsegmentos dependentes de capital de giro pesado, como logística rodoviária e transportes volumosos.
              </p>
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
                      Oportunidades em digitalização e serviços ágeis de curto ciclo.
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                  Um setor aquecido aponta para um terreno muito promissor. Há estabilidade na empregabilidade e garantia de fluxo de renda nas cidades, o que é um cenário formidável para empresas focadas no varejo direto, pequenos reparos e consumo imediato. Entretanto, na gestão de retaguarda da própria empresa, será essencial lidar com a forte alta de custos na contratação de talentos, transporte logístico e dependência de serviços terceirizados essenciais.
                </p>
                </div>
              </div>
            </div>

          </div>
        </div>
          
          {/* Quote Section */}
          <div className="relative px-4 md:px-8 py-6 bg-violet-50 dark:bg-violet-900/10 rounded-2xl border border-violet-100 dark:border-violet-900/30">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-violet-200 dark:text-violet-900/50 rotate-180" />
            <p className="text-[18px] md:text-[20px] text-slate-800 dark:text-slate-200 italic font-medium relative z-10 pl-8 leading-relaxed">
              "Para a empresa, o aquecimento do setor indica forte retenção de vagas urbanas, mas encarece contratações logísticas e operacionais."
            </p>
          </div>
        </div>
      </section>

      {/* GUIDELINES */}
      <div className="flex bg-purple-50/50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30 rounded-2xl p-5 md:p-6 mb-0 gap-4 items-start">
         <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
           <Info className="w-4 h-4" />
         </div>
         <div>
           <h4 className="text-[15px] font-bold text-slate-900 dark:text-slate-200 mb-1">Nota Metodológica de Inteligência</h4>
           <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
             As análises apresentadas nesta página foram geradas por Inteligência Artificial a partir da base de evidências contida neste sistema, sendo posteriormente revisadas, checadas e aprovadas por nossa equipe de planejamento.
           </p>
         </div>
      </div>

      {/* 2. Evidências Recentes */}
      {/* EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-0 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Notícias e dados oficiais base que fundamentam esta visão estratégica.</p>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {SERVICOS_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>
      
    </div>
  );
}
