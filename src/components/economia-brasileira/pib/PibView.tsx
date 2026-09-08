import React, { useState } from 'react';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../../layout/HeaderKpiCard';
import { TrendingUp, BarChart3, Target, ShoppingCart, Factory, Building2, Users, Globe, ArrowUpRight, Leaf, ChevronRight, Info, ExternalLink, X, BarChart2, AlertTriangle, ClipboardList, ShieldCheck, Building, Eye, Quote, Search } from 'lucide-react';
import { AgropecuariaView } from './AgropecuariaView';
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
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">PIB do Brasil</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 ">
            Panorama do crescimento econômico brasileiro e seus impactos para consumo, indústria e construção.
          </p>
        </div>

        <ResponsiveContainer minWidth="220px" gap="gap-3" className="flex-1">
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
        </ResponsiveContainer>
      </div>

      {/* LEITURA ESTRATÉGICA */}
      <section className="mb-12">
        <h3 className="text-[22px] md:text-[24px] font-bold text-slate-900 dark:text-white leading-tight mb-6">
          Consumo e serviços <span className="text-blue-600 dark:text-blue-400">sustentam a alta</span>, mas juros contêm investimentos estruturais.
        </h3>
        
        <div className="flex flex-col gap-5">
          
          {/* O que aconteceu e o que explica */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <div className="pt-1 flex-1 min-w-0">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que aconteceu e o que explica o resultado</h4>
                    <div className="inline-flex bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg max-w-full">
                      <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold break-words">
                        Crescimento acima do esperado, sustentado por consumo e serviços.
                      </span>
                    </div>
                  </div>
                </div>

                <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                  01
                </span>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <p>O Brasil registrou um crescimento surpreendente de <strong className="text-slate-800 dark:text-slate-200">1,1%</strong> no primeiro trimestre de 2026. Este resultado superou largamente as expectativas de moderação traçadas pelo mercado financeiro no início do ano. A consolidação dessa forte alta interanual reflete um ritmo de atividade mais aquecido que a tendência histórica recente, evidenciando uma notável <strong className="text-slate-800 dark:text-slate-200">resistência da economia</strong> frente a cenários de juros altos e aperto monetário prolongado.</p>
                <p>O desempenho foi sustentado estruturalmente pela <strong className="text-slate-800 dark:text-slate-200">resiliência do consumo das famílias</strong> e uma expansão vigorosa no setor de <strong className="text-slate-800 dark:text-slate-200">serviços</strong>. A massa salarial aquecida e fortes programas de <strong className="text-slate-800 dark:text-slate-200">estímulo garantiram o fluxo contínuo</strong> de demanda. Por outro lado, a <strong className="text-slate-800 dark:text-slate-200">indústria e a agropecuária</strong> registraram acomodação após fortes ciclos anteriores de alta, atuando como alicerce de estabilização macroeconômica, sem tracionar o avanço do trimestre.</p>
              </div>
            </div>
          </div>

          <ResponsiveContainer minWidth="320px" gap="gap-5">
            
            {/* O que observar */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-6 md:p-8 shadow-sm flex flex-col">
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                      <Search className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                    </div>
                    
                    <div className="pt-1 flex-1 min-w-0">
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que observar nos próximos meses</h4>
                      <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg max-w-full">
                        <span className="text-[13px] text-orange-700 dark:text-orange-400 font-semibold break-words">
                          Moderação, juros e crédito seguem como pontos de atenção.
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[36px] md:text-[44px] font-bold text-orange-100 dark:text-orange-900/40 leading-none shrink-0 select-none">
                    02
                  </span>
                </div>

                <div className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 md:pl-[64px]">
                  <p>O Banco Central e institutos como Ipea preveem uma moderação gradativa no ritmo produtivo, ajustando a projeção anual de convergência para algo em torno de <strong className="text-slate-800 dark:text-slate-200">2,0% a 2,5%</strong>. O principal fator de monitoramento será o impacto cumulativo e defasado da <strong className="text-slate-800 dark:text-slate-200">rígida política monetária</strong>, além da restrição seletiva de <strong className="text-slate-800 dark:text-slate-200">concessão de crédito</strong>, que inevitavelmente inibirão novos investimentos estruturais no segundo semestre.</p>
                </div>
              </div>
            </div>

            {/* Impacto */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-blue-100 dark:border-blue-900/30 p-6 md:p-8 shadow-sm flex flex-col">
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    
                    <div className="pt-1 flex-1 min-w-0">
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a empresa</h4>
                      <div className="inline-flex bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg max-w-full">
                        <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold break-words">
                          Ambiente favorável ao consumo, mas com cautela para expansão.
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[36px] md:text-[44px] font-bold text-blue-100 dark:text-blue-900/40 leading-none shrink-0 select-none">
                    03
                  </span>
                </div>

                <div className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 md:pl-[64px]">
                  <p>A atual conjuntura desenha um terreno fértil para linhas de produtos focadas no <strong className="text-slate-800 dark:text-slate-200">consumo interno direto</strong>, projetos de rápida execução e serviços ágeis de ciclo curto. No entanto, o cenário manda um forte sinal de <strong className="text-slate-800 dark:text-slate-200">prudência</strong> para a empresa ao planejar grandes expansões de <strong className="text-slate-800 dark:text-slate-200">capacidade produtiva</strong>. Vendas dependentes de <strong className="text-slate-800 dark:text-slate-200">crédito longo</strong> devem ser mitigadas; a recomendação primária é <strong className="text-slate-800 dark:text-slate-200">maximizar a liquidez</strong>, focando no giro rápido de estoques e proteção do caixa.</p>
                </div>
              </div>
            </div>

          </ResponsiveContainer>
          
          <div className="bg-slate-50/80 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800/50 rounded-2xl p-6 flex items-center gap-5 mt-2">
            <Quote className="w-8 h-8 text-blue-500/60 dark:text-blue-400/50 shrink-0 fill-current" />
            <p className="text-[15px] font-medium text-slate-700 dark:text-slate-300 italic leading-snug">
              "O ambiente econômico favorece linhas voltadas ao consumo interno direto, enquanto sinaliza prudência para grandes expansões produtivas."
            </p>
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
                    <button 
                      onClick={() => setActivePage('PIB Agropecuária')}
                      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-blue-400 dark:border-blue-500 rounded-xl shadow-sm text-[15px] font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <Leaf className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Agropecuária <ChevronRight className="w-4 h-4 text-blue-500/70" />
                    </button>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <button 
                      onClick={() => setActivePage('PIB Indústria')}
                      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-blue-400 dark:border-blue-500 rounded-xl shadow-sm text-[15px] font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <Factory className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Indústria <ChevronRight className="w-4 h-4 text-blue-500/70" />
                    </button>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[15px] font-bold text-slate-700 dark:text-slate-300">
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
                    
                    <button 
                      onClick={() => setActivePage('PIB Consumo das Famílias')}
                      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-blue-400 dark:border-blue-500 rounded-xl shadow-sm text-[15px] font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Consumo Famílias <ChevronRight className="w-4 h-4 text-blue-500/70" />
                    </button>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <button onClick={() => setActivePage('PIB Investimentos')} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-cyan-400 dark:border-cyan-500 rounded-xl shadow-sm text-[15px] font-bold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors">
                      <BarChart3 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" /> Investimentos <ChevronRight className="w-4 h-4 text-cyan-500/70" />
                    </button>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <button onClick={() => setActivePage('PIB Governo')} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-teal-400 dark:border-teal-500 rounded-xl shadow-sm text-[15px] font-bold text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors">
                      <Building2 className="w-5 h-5 text-teal-600 dark:text-teal-400" /> Governo <ChevronRight className="w-4 h-4 text-teal-500/70" />
                    </button>
                    <span className="text-slate-300 dark:text-slate-600 font-bold text-lg">+</span>
                    <button onClick={() => setActivePage('Exportação')} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-orange-400 dark:border-orange-500 rounded-xl shadow-sm text-[15px] font-bold text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                      <Globe className="w-5 h-5 text-orange-600 dark:text-orange-400" /> Exportações <ChevronRight className="w-4 h-4 text-orange-500/70" />
                    </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* APROFUNDAR COMPONENTES */}
      <section>
        <h3 className="text-[19px] font-bold text-slate-900 dark:text-white mb-4">Aprofundar componentes do PIB</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <button 
            onClick={() => setActivePage('PIB Agropecuária')}
            className="w-full text-left group relative rounded-2xl overflow-hidden cursor-pointer h-32 flex items-end p-4 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="relative z-10 flex items-center gap-2 text-white w-full justify-between">
              <div className="flex items-center gap-2 font-bold"><Leaf className="w-5 h-5 text-emerald-400" /> Agropecuária</div>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
            </div>
          </button>

          <button 
            onClick={() => setActivePage('PIB Indústria')}
            className="w-full text-left group relative rounded-2xl overflow-hidden cursor-pointer h-32 flex items-end p-4 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="relative z-10 flex items-center gap-2 text-white w-full justify-between">
              <div className="flex items-center gap-2 font-bold"><Factory className="w-5 h-5 text-blue-400" /> Indústria</div>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
            </div>
          </button>

          <button onClick={() => setActivePage('PIB Serviços')} className="w-full text-left group relative rounded-2xl overflow-hidden cursor-pointer h-32 flex items-end p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="relative z-10 flex items-center gap-2 text-white w-full justify-between">
              <div className="flex items-center gap-2 font-bold"><Users className="w-5 h-5 text-purple-400" /> Serviços</div>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
            </div>
          </button>
          <button 
            onClick={() => setActivePage('PIB Consumo das Famílias')}
            className="w-full text-left group relative rounded-2xl overflow-hidden cursor-pointer h-32 flex items-end p-4 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="relative z-10 flex items-center gap-2 text-white w-full justify-between">
              <div className="flex items-center gap-2 font-bold"><ShoppingCart className="w-5 h-5 text-orange-400" /> Consumo</div>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
            </div>
          </button>

          <button onClick={() => setActivePage('PIB Investimentos')} className="w-full text-left group relative rounded-2xl overflow-hidden cursor-pointer h-32 flex items-end p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="relative z-10 flex items-center gap-2 text-white w-full justify-between">
              <div className="flex items-center gap-2 font-bold"><BarChart3 className="w-5 h-5 text-indigo-400" /> Investimentos</div>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
            </div>
          </button>

          <button onClick={() => setActivePage('PIB Governo')} className="w-full text-left group relative rounded-2xl overflow-hidden cursor-pointer h-32 flex items-end p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="relative z-10 flex items-center gap-2 text-white w-full justify-between">
              <div className="flex items-center gap-2 font-bold"><Building2 className="w-5 h-5 text-red-400" /> Governo</div>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
            </div>
          </button>

          <button onClick={() => setActivePage('Exportação')} className="w-full text-left group relative rounded-2xl overflow-hidden cursor-pointer h-32 flex items-end p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="relative z-10 flex items-center gap-2 text-white w-full justify-between">
              <div className="flex items-center gap-2 font-bold"><Globe className="w-5 h-5 text-teal-400" /> Exportações</div>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
            </div>
          </button>

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


