import React, { useState } from 'react';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../../layout/HeaderKpiCard';
import { TrendingUp, BarChart3, Target, ShoppingCart, Factory, Building2, Users, Globe, ArrowUpRight, Leaf, ChevronRight, Info, ExternalLink, X, BarChart2, AlertTriangle, ClipboardList, ShieldCheck, Building, Eye, Quote, Search } from 'lucide-react';
import { getEvidencesForTopic } from '../../../data/evidencesRegistry';
import { EvidenceLink } from '../../layout/EvidenceLink';
import { EvidenceCard } from '../../layout/EvidenceCard';

interface PibViewProps {
  setActivePage: (page: string) => void;
}

const PIB_EVIDENCES = getEvidencesForTopic('pib');

export function PibView({ setActivePage }: PibViewProps) {
  const [activeTab, setActiveTab] = useState('Geral');
  
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* HEADER */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">PIB do Brasil</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 ">
            Panorama do crescimento econômico brasileiro e seus impactos para consumo, indústria e construção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch">
          {/* Card 1 */}
          <HeaderKpiCard
            title="PROJEÇÃO 2026"
            value="2,0%"
            context="Expectativa Focus / BC"
            explanation="Mediana das projeções para o PIB em 2026."
            source="Banco Central — Relatório Focus"
            icon={Target}
            color="blue"
          />

          {/* Card 2 */}
          <HeaderKpiCard
            title="ACUMULADO 2026"
            value="1,1%"
            context="Variação vs. trimestre anterior"
            explanation="Ritmo de crescimento registrado no ano."
            source="IBGE — Contas Nacionais"
            icon={BarChart3}
            color="blue"
          />

          {/* Card 3 */}
          <HeaderKpiCard
            title="PIB 2025"
            value="2,9%"
            context="Fechamento oficial de 2025"
            explanation="Crescimento consolidado da economia em 2025."
            source="IBGE"
            icon={TrendingUp}
            color="blue"
          />
        </div>
      </div>

      {/* EVIDÊNCIAS DE DESTAQUE (TOP 3) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Principais notícias e dados</h2>
           </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {PIB_EVIDENCES.slice(0, 3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* O que observar */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que observar nos próximos meses</h4>
                    <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-orange-700 dark:text-orange-400 font-semibold">
                        Moderação, juros e crédito seguem como pontos de atenção.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>O Brasil registrou um crescimento de <strong className="text-slate-800 dark:text-slate-200">1,1%</strong> no primeiro trimestre de 2026, evidenciando notável resistência frente a cenários de juros altos e aperto monetário prolongado.</li>
                    <li>O desempenho foi sustentado estruturalmente pela resiliência do consumo das famílias e uma expansão vigorosa no setor de serviços.</li>
                    <li>O Banco Central e institutos como Ipea preveem moderação gradativa, ajustando a projeção anual para <strong className="text-slate-800 dark:text-slate-200">2,0% a 2,5%</strong>.</li>
                    <li>O principal fator de monitoramento será o impacto cumulativo e defasado da rígida política monetária e a restrição de crédito.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impacto */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-8 shadow-sm flex flex-col ">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-red-50 dark:text-red-900/20 leading-none pointer-events-none select-none">
                02
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a empresa</h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Ambiente favorável ao consumo, mas com cautela para expansão.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>Terreno fértil para linhas de produtos focadas no <strong className="text-slate-800 dark:text-slate-200">consumo interno direto</strong>, projetos de rápida execução e serviços ágeis de ciclo curto.</li>
                    <li>Forte sinal de <strong className="text-slate-800 dark:text-slate-200">prudência</strong> no planejamento de grandes expansões de capacidade produtiva.</li>
                    <li>Vendas dependentes de <strong className="text-slate-800 dark:text-slate-200">crédito longo</strong> devem ser mitigadas no curto e médio prazo.</li>
                    <li>A recomendação primária é <strong className="text-slate-800 dark:text-slate-200">maximizar a liquidez</strong>, focando no giro rápido de estoques e proteção de caixa.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMO O PIB É CALCULADO */}
      <section>
        <h3 className="text-[19px] font-bold text-slate-900 dark:text-white mb-4">Como o PIB é calculado?</h3>
        <div className="grid grid-cols-1 gap-6">
          
          {/* Ótica da Oferta */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row group">
            <div className="md:w-1/3 relative min-h-[160px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-white">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center mb-1">
                    <Factory className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Ótica da Oferta</h4>
                    <p className="text-sm text-slate-300">O que o país produz</p>
                  </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-6 md:p-8 flex items-center bg-slate-50 dark:bg-slate-900/50">
              <div className="w-full">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed ">
                  Soma de todos os bens e serviços finais produzidos em território nacional, descontados os insumos consumidos na produção.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                    <div className="font-extrabold text-slate-800 dark:text-slate-200 text-xl mr-2">PIB <span className="text-slate-400 dark:text-slate-600 font-medium ml-1">=</span></div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[15px] font-bold text-slate-800 dark:text-slate-200">
                      <Leaf className="w-5 h-5 text-emerald-500" /> Agropecuária
                    </div>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[15px] font-bold text-slate-800 dark:text-slate-200">
                      <Factory className="w-5 h-5 text-blue-500" /> Indústria
                    </div>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[15px] font-bold text-slate-800 dark:text-slate-200">
                      <Users className="w-4 h-4 text-purple-500" /> Serviços
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ótica da Demanda */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row group">
            <div className="md:w-1/3 relative min-h-[160px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-white">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/30 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center mb-1">
                    <ShoppingCart className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Ótica da Demanda</h4>
                    <p className="text-sm text-slate-300">Como o país gasta</p>
                  </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-6 md:p-8 flex items-center bg-slate-50 dark:bg-slate-900/50">
              <div className="w-full">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed ">
                  Soma de todos os gastos realizados em bens e serviços finais na economia, refletindo o destino da produção.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                    <div className="font-extrabold text-slate-800 dark:text-slate-200 text-xl mr-2">PIB <span className="text-slate-400 dark:text-slate-600 font-medium ml-1">=</span></div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[15px] font-bold text-slate-800 dark:text-slate-200">
                      <Users className="w-5 h-5 text-blue-500" /> Consumo Famílias
                    </div>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[15px] font-bold text-slate-800 dark:text-slate-200">
                      <BarChart3 className="w-5 h-5 text-cyan-500" /> Investimentos
                    </div>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[15px] font-bold text-slate-800 dark:text-slate-200">
                      <Building2 className="w-5 h-5 text-teal-500" /> Governo
                    </div>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[15px] font-bold text-slate-800 dark:text-slate-200">
                      <Globe className="w-5 h-5 text-orange-500" /> Exportações
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS E FONTES</h2>
           </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {PIB_EVIDENCES.slice(3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* GUIDELINES FOOTER */}
      <div className="flex bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-5 md:p-6 mt-4 gap-4 items-start">
         <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
           <Info className="w-4 h-4" />
         </div>
         <div>
           <h4 className="text-[15px] font-bold text-slate-900 dark:text-slate-200 mb-1">Nota Metodológica de Inteligência</h4>
           <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
             As análises apresentadas nesta página foram geradas por Inteligência Artificial a partir da base de evidências contida neste sistema, sendo posteriormente revisadas, checadas e aprovadas por nossa equipe de planejamento.
           </p>
         </div>
      </div>

    </div>
  );
}


