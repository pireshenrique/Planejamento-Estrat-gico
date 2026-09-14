import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Activity, FileText, MessageSquare, TrendingUp, ChevronRight, AlertTriangle, RefreshCw, Target, Users, DollarSign, Settings, Truck, BarChart2, Megaphone, Lightbulb, Leaf, Globe2, Briefcase, Building, Home, Info, ShieldAlert, Zap, Building2, Cpu, Clock } from 'lucide-react';
import { ResponsiveContainer } from './ResponsiveContainer';
import { getStrategicReportData, subscribeToReportUpdates, StrategicReportData } from '../../data/strategicReportState';
import { getPortalMetricsSummary, PortalMetricsSummary } from '../../data/portalMetrics';
import { StrategicChatbot } from './StrategicChatbot';

interface HomeViewProps {
  setActivePage: (page: string) => void;
}

export function HomeView({ setActivePage }: HomeViewProps) {
  const [reportData, setReportData] = useState<StrategicReportData>(getStrategicReportData());
  const [metrics, setMetrics] = useState<PortalMetricsSummary>(getPortalMetricsSummary());

  useEffect(() => {
    setReportData(getStrategicReportData());
    setMetrics(getPortalMetricsSummary());

    const unsubscribe = subscribeToReportUpdates((updated) => {
      setReportData(updated);
      setMetrics(getPortalMetricsSummary());
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-10 pb-6 sm:pb-10">
      {/* Header and Search */}
      <div>
        <div className="text-[15px] sm:text-[17px] font-medium text-slate-500 dark:text-slate-400 mb-3.5 sm:mb-6 max-w-2xl leading-relaxed">
          Base consolidada de tendências, cenários e evidências estratégicas para apoiar as decisões da Lorenzetti.
        </div>
        
        <StrategicChatbot />
      </div>

      {/* 1 RESUMO EXECUTIVO */}
      <section>
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0c162c] text-white flex items-center justify-center font-bold text-sm sm:text-[17px] shadow-sm">1</div>
          <h2 className="text-base sm:text-[17px] font-bold text-[#0c162c] dark:text-white uppercase tracking-wide">Resumo Executivo</h2>
        </div>
        <div className="bg-white dark:bg-[#121c32] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 sm:p-5 md:p-7 shadow-sm flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="flex-1 min-w-[260px] md:max-w-[400px] shrink-0">
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&h=400&fit=crop" alt="World Globe Data" className="w-full h-[140px] sm:h-[180px] object-cover rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/50" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-[2] min-w-[260px] flex flex-col justify-center">
               <div className="text-sm sm:text-[16px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-2.5 sm:mb-4">
                 {reportData.resumoExecutivo.paragrafo1}
               </div>
               <div className="text-sm sm:text-[16px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                 {reportData.resumoExecutivo.paragrafo2}
               </div>
               <div className="mt-2.5 sm:mt-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                 <Clock className="w-3.5 h-3.5 text-slate-400" />
                 <span>Última análise: {reportData.ultimaAnalise}</span>
               </div>
            </div>
            <div className="shrink-0 flex-1 min-w-[240px] md:max-w-[350px] flex flex-col gap-3.5 sm:gap-5 border-t md:border-t-0 mt-3 md:mt-0 pt-4 md:pt-0 md:border-l border-slate-100 dark:border-slate-800/50 md:pl-6 lg:pl-8 py-1 sm:py-2">
               <button onClick={() => setActivePage('Relatório Estratégico')} className="bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold hover:from-blue-500 hover:to-blue-700 shadow-md shadow-blue-500/20 border-b-[4px] border-blue-900 transition-all active:border-b-0 active:translate-y-1 w-full">
                  Ver relatório completo <ArrowRight className="w-4 h-4 ml-2" />
               </button>
               <div className="grid grid-cols-1 gap-2.5 sm:gap-3.5 pl-1 sm:pl-2">
                 <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-[15px] text-slate-700 dark:text-slate-300 font-bold"><div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/50 flex items-center justify-center"><Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 dark:text-slate-400" /></div> {(reportData.leiturasEstrategicas?.length || reportData.macrotendencias?.length || 7)} Macrotendências</div>
                 <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-[15px] text-slate-700 dark:text-slate-300 font-bold"><div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/50 flex items-center justify-center"><FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 dark:text-slate-400" /></div> {metrics.subtemasCount} Subtemas</div>
                 <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-[15px] text-slate-700 dark:text-slate-300 font-bold"><div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/50 flex items-center justify-center"><Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 dark:text-slate-400" /></div> {metrics.evidenciasCount.toLocaleString('pt-BR')} Evidências</div>
                 <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-[15px] text-slate-700 dark:text-slate-300 font-bold"><div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/50 flex items-center justify-center"><MessageSquare className="w-3.5 h-3.5 text-slate-400 dark:text-slate-400" /></div> {metrics.fontesCount} Fontes</div>
               </div>
            </div>
        </div>
      </section>

      {/* 2 RADAR ESTRATÉGICO */}
      <section>
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0c162c] text-white flex items-center justify-center font-bold text-sm sm:text-[17px] shadow-sm">2</div>
          <h2 className="text-base sm:text-[17px] font-bold text-[#0c162c] dark:text-white uppercase tracking-wide">Radar Estratégico 2027-2037</h2>
        </div>
        <ResponsiveContainer minWidth="250px" gap="gap-3.5 sm:gap-5">
           
           {/* OPORTUNIDADES */}
           <div className="bg-white dark:bg-[#121c32] border border-emerald-200 dark:border-emerald-500/20 rounded-2xl p-4 sm:p-5 md:p-6 relative overflow-hidden shadow-sm flex flex-col h-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 dark:bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
               <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400 font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-3.5 sm:mb-6 relative z-10">
                 <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-100 flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></div>
                 Oportunidades
               </div>
               <ul className="space-y-2.5 sm:space-y-4 relative z-10 flex-1">
                 {[
                   'Crescimento da IA e automação industrial',
                   'Expansão do mercado de habitação no Brasil',
                   'Transição energética e energias renováveis',
                   'Novos modelos de negócio digitais'
                 ].map((item, i) => (
                    <li key={i} className="flex gap-2 sm:gap-2.5 text-xs sm:text-[15px] font-bold text-slate-700 dark:text-slate-300 leading-snug items-start">
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0 mt-0.5" /> {item}
                    </li>
                 ))}
               </ul>
               <button className="text-xs sm:text-[15px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center gap-2 w-full mt-4 sm:mt-6 py-2 sm:py-2.5 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all relative z-10 border-b-[3px] border-emerald-200 dark:border-emerald-800 active:border-b-0 active:translate-y-[3px]">Ver todos <ArrowRight className="w-4 h-4" /></button>
           </div>

           {/* RISCOS */}
           <div className="bg-white dark:bg-[#121c32] border border-rose-200 dark:border-rose-500/20 rounded-2xl p-4 sm:p-5 md:p-6 relative overflow-hidden shadow-sm flex flex-col h-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 dark:bg-rose-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
               <div className="flex items-center gap-2.5 text-rose-700 dark:text-rose-400 font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-3.5 sm:mb-6 relative z-10">
                 <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-rose-100 dark:bg-rose-500/20 flex items-center justify-center"><ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></div>
                 Riscos
               </div>
               <ul className="space-y-2.5 sm:space-y-4 relative z-10 flex-1">
                 {[
                   'Aumento das tensões geopolíticas globais',
                   'Guerra comercial entre EUA e China',
                   'Escassez de recursos hídricos e climáticos',
                   'Instabilidade econômica global'
                 ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-[15px] font-bold text-slate-700 dark:text-slate-300 leading-snug items-start">
                      <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" /> {item}
                    </li>
                 ))}
               </ul>
               <button className="text-xs sm:text-[15px] font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center gap-2 w-full mt-4 sm:mt-6 py-2 sm:py-2.5 rounded-xl hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-all relative z-10 border-b-[3px] border-rose-200 dark:border-rose-800 active:border-b-0 active:translate-y-[3px]">Ver todos <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></button>
           </div>

           {/* TENDÊNCIAS EMERGENTES */}
           <div className="bg-white dark:bg-[#121c32] border border-blue-200 dark:border-blue-500/20 rounded-2xl p-4 sm:p-5 md:p-6 relative overflow-hidden shadow-sm flex flex-col h-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
               <div className="flex items-center gap-2.5 text-blue-700 dark:text-blue-400 font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-3.5 sm:mb-6 relative z-10">
                 <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center"><RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></div>
                 Tendências Emergentes
               </div>
               <ul className="space-y-2.5 sm:space-y-4 relative z-10 flex-1">
                 {[
                   'Inteligência Artificial generativa',
                   'Blockchain e Web3',
                   'Computação quântica',
                   'Economia circular'
                 ].map((item, i) => (
                    <li key={i} className="flex gap-2 sm:gap-2.5 text-xs sm:text-[15px] font-bold text-slate-700 dark:text-slate-300 leading-snug items-start">
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 shrink-0 mt-0.5" /> {item}
                    </li>
                 ))}
               </ul>
               <button className="text-xs sm:text-[15px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center gap-2 w-full mt-4 sm:mt-6 py-2 sm:py-2.5 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all relative z-10 border-b-[3px] border-blue-200 dark:border-blue-800 active:border-b-0 active:translate-y-[3px]">Ver todos <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></button>
           </div>

           {/* TEMAS ESTRATÉGICOS */}
           <div className="bg-white dark:bg-[#121c32] border border-indigo-200 dark:border-indigo-500/20 rounded-2xl p-4 sm:p-5 md:p-6 relative overflow-hidden shadow-sm flex flex-col h-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
               <div className="flex items-center gap-2.5 text-indigo-700 dark:text-indigo-400 font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-3.5 sm:mb-6 relative z-10">
                 <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center"><Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></div>
                 Temas Estratégicos
               </div>
               <ul className="space-y-2.5 sm:space-y-4 relative z-10 flex-1">
                 {[
                   'Eficiência energética',
                   'Segurança da informação',
                   'Saúde e bem-estar',
                   'Mobilidade urbana'
                 ].map((item, i) => (
                    <li key={i} className="flex gap-2 sm:gap-2.5 text-xs sm:text-[15px] font-bold text-slate-700 dark:text-slate-300 leading-snug items-start">
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500 shrink-0 mt-0.5" /> {item}
                    </li>
                 ))}
               </ul>
               <button className="text-xs sm:text-[15px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center gap-2 w-full mt-4 sm:mt-6 py-2 sm:py-2.5 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all relative z-10 border-b-[3px] border-indigo-200 dark:border-indigo-800 active:border-b-0 active:translate-y-[3px]">Ver todos <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></button>
           </div>

        </ResponsiveContainer>
      </section>

      {/* 3 NAVEGUE POR SUA ÁREA */}
      <section>
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0c162c] text-white flex items-center justify-center font-bold text-sm sm:text-[17px] shadow-sm">3</div>
          <h2 className="text-base sm:text-[17px] font-bold text-[#0c162c] dark:text-white uppercase tracking-wide">Navegue por sua Área de Atuação</h2>
        </div>
        <ResponsiveContainer minWidth="130px" gap="gap-3 sm:gap-4">
          {[
            { icon: Users, name: 'RH', desc: 'Pessoas, cultura, futuro do trabalho e educação' },
            { icon: DollarSign, name: 'Finanças', desc: 'Economia, juros, câmbio, inflação e investimentos' },
            { icon: Settings, name: 'Operações', desc: 'Produtividade, automação e eficiência' },
            { icon: Truck, name: 'Supply Chain', desc: 'Logística, fornecedores, matérias-primas e geopolítica' },
            { icon: BarChart2, name: 'Comercial', desc: 'Mercados, clientes, consumo e concorrência' },
            { icon: Megaphone, name: 'Marketing', desc: 'Tendências de consumo, marcas e comunicação' },
            { icon: Lightbulb, name: 'P&D', desc: 'Inovação, tecnologias emergentes e produtos' },
            { icon: Leaf, name: 'Sustentabilidade', desc: 'Meio ambiente, ESG e impacto socioambiental' }
          ].map(area => (
             <button  key={area.name} className="bg-white dark:bg-[#121c32] border border-slate-200 dark:border-slate-700 border-b-[4px] border-b-slate-300 dark:border-b-slate-800 rounded-2xl p-3.5 sm:p-5 flex flex-col items-center text-center hover:shadow-md hover:border-blue-300 transition-all group h-full hover:-translate-y-1 active:border-b-[1px] active:translate-y-[3px] duration-200">
               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/50 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2.5 sm:mb-4 group-hover:bg-blue-50 dark:bg-blue-500/10 transition-colors">
                  <area.icon className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] stroke-[1.5]" />
               </div>
               <h3 className="text-sm sm:text-[16px] font-bold text-[#0c162c] dark:text-white mb-1 sm:mb-2">{area.name}</h3>
               <div className="text-xs sm:text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-snug line-clamp-3">{area.desc}</div>
             </button>
          ))}
        </ResponsiveContainer>
        <div className="flex justify-center mt-4 sm:mt-6">
           <button  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-[15px] font-bold text-[#0c162c] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm active:border-b-[1px] active:translate-y-[2px]">
             Ver todos os temas recomendados para minha área <ArrowRight className="w-4 h-4 ml-2 inline-block" />
           </button>
        </div>
      </section>

      {/* 4 MACROTENDÊNCIAS */}
      <section>
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0c162c] text-white flex items-center justify-center font-bold text-sm sm:text-[17px] shadow-sm">4</div>
          <h2 className="text-base sm:text-[17px] font-bold text-[#0c162c] dark:text-white uppercase tracking-wide">Macrotendências</h2>
        </div>
        <ResponsiveContainer minWidth="180px" gap="gap-3 sm:gap-4">
           {[
             { icon: Globe2, name: 'Geopolítica', count: '14 subtemas', img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=400&h=300&fit=crop' },
             { icon: Activity, name: 'Economia Mundial', count: '18 subtemas', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&h=300&fit=crop' },
             { icon: TrendingUp, name: 'Economia Brasil', count: '16 subtemas', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&h=300&fit=crop' },
             { icon: Users, name: 'População e Sociedade', count: '15 subtemas', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&h=300&fit=crop' },
             { icon: Cpu, name: 'Ciência e Tecnologia', count: '22 subtemas', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=300&fit=crop' },
             { icon: Leaf, name: 'Meio Ambiente', count: '13 subtemas', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=400&h=300&fit=crop' },
             { icon: Building2, name: 'Empresas do Futuro', count: '12 subtemas', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&h=300&fit=crop' },
             { icon: BarChart2, name: 'Cenário Mercadológico', count: '14 subtemas', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=300&fit=crop' },
             { icon: Home, name: 'Cenário Habitacional', count: '12 subtemas', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&h=300&fit=crop' },
             { icon: Target, name: 'Mercado da Construção Civil', count: '15 subtemas', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&h=300&fit=crop' },
           ].map((macro, idx) => (
             <button key={idx} onClick={() => setActivePage(macro.name)} className="bg-white dark:bg-[#121c32] border border-slate-200 dark:border-slate-700 border-b-[4px] border-b-slate-300 dark:border-b-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all group flex flex-col text-left min-h-[140px] sm:min-h-[160px] h-auto hover:-translate-y-1 active:border-b-[1px] active:translate-y-[3px] duration-200">
               <div className="p-3 sm:p-4 bg-white dark:bg-[#121c32] relative z-10 flex-1">
                 <div className="flex items-center gap-2 mb-1 sm:mb-1.5">
                   <macro.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                   <span className="text-sm sm:text-[15px] font-bold text-[#0c162c] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">{macro.name}</span>
                 </div>
                 <div className="text-xs sm:text-[13px] font-medium text-slate-500 dark:text-slate-400">{macro.count}</div>
               </div>
               <div className="h-16 sm:h-20 w-full relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white dark:to-slate-900 z-10 h-8 -mt-8"></div>
             <img src={macro.img} alt={macro.name} className="w-full h-full object-cover opacity-60 mix-blend-multiply dark:mix-blend-normal dark:!opacity-30 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" referrerPolicy="no-referrer" />
               </div>
             </button>
           ))}
        </ResponsiveContainer>
        <div className="flex justify-center mt-4 sm:mt-6">
           <button  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-[15px] font-bold text-[#0c162c] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm active:border-b-[1px] active:translate-y-[2px]">
             Explorar todas as macrotendências <ArrowRight className="w-4 h-4 ml-2 inline-block" />
           </button>
        </div>
      </section>

      {/* 5 TEMAS EM DESTAQUE */}
      <section className="relative">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0c162c] text-white flex items-center justify-center font-bold text-sm sm:text-[17px] shadow-sm">5</div>
          <h2 className="text-base sm:text-[17px] font-bold text-[#0c162c] dark:text-white uppercase tracking-wide">Temas em Destaque do Ciclo 2027-2037</h2>
        </div>
        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 sm:pb-4 custom-scrollbar snap-x -mx-1 px-1">
          {[
            { name: 'Conflitos e Tensões Internacionais', count: '4 conflitos mapeados', img: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=400&h=300&fit=crop' },
            { name: 'Inteligência Artificial', count: 'Tecnologia Estratégica', img: 'https://images.unsplash.com/photo-1677442136019-21780ec4cb30?q=80&w=400&h=300&fit=crop' },
            { name: 'PIB', count: 'Economia Brasileira', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&h=300&fit=crop' },
            { name: 'Inflação', count: 'Preços & IPCA', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&h=300&fit=crop' },
            { name: 'Câmbio / dólar', count: 'Moeda & Paridade', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&h=300&fit=crop' },
            { name: 'Data Centers', count: 'Infraestrutura Crítica', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&h=300&fit=crop' },
            { name: 'Smart Home', count: 'Conectividade & Casa', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&h=300&fit=crop' },
          ].map((tema, idx) => (
             <button key={idx} onClick={() => setActivePage(tema.name)} className="shrink-0 w-[160px] sm:w-[200px] snap-start group text-left transition-transform hover:-translate-y-1 active:translate-y-[2px] duration-200 cursor-pointer">
                <div className="h-[96px] sm:h-[120px] rounded-xl overflow-hidden mb-2 sm:mb-3 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-800 shadow-sm relative group-active:border-b-[1px] transition-all">
                   <div className="absolute inset-0 bg-[#0c162c]/10 group-hover:bg-[#0c162c]/0 transition-colors z-10"></div>
                   <img src={tema.img} alt={tema.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xs sm:text-[15px] font-bold text-[#0c162c] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-0.5 line-clamp-2">{tema.name}</h3>
                <div className="text-[11px] sm:text-[13px] font-medium text-slate-500 dark:text-slate-400">{tema.count}</div>
             </button>
          ))}
        </div>
        <button  className="hidden sm:flex absolute right-0 top-[60%] -translate-y-1/2 translate-x-4 w-8 h-8 bg-white dark:bg-[#121c32] border border-slate-200 dark:border-slate-700/50 rounded-full items-center justify-center shadow-md text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:group-hover:text-blue-400 z-20 hover:-translate-y-0.5 active:scale-95 hover:shadow-md transition-all duration-200">
            <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* FOOTER INFO */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-[14px] font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl py-3 sm:py-4 mt-6 sm:mt-8 px-4 sm:px-6 text-center">
         <Info className="w-4 h-4 flex-shrink-0 text-slate-400 dark:text-slate-400" />
         As informações apresentadas são baseadas em evidências de fontes confiáveis e atualizadas continuamente com o apoio de Inteligência Artificial e curadoria humana.
      </div>

    </div>
  );
}
