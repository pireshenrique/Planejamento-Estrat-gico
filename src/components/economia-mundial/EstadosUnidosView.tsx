import React, { useState } from 'react';
import { TrendingUp, Globe, Cpu, Building2, ArrowRight, Activity, ChevronRight, X, ExternalLink, Info, Lightbulb, Zap, ShoppingCart, Target, Pickaxe, MapPin, BarChart3, ShieldAlert, Search } from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import { EUA_EVIDENCES } from '../../data/evidences/eua';



export const EstadosUnidosView = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const [selectedEvidence, setSelectedEvidence] = useState<{
    data: typeof EUA_EVIDENCES[0];
    offsetTop: number;
  } | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleEvidenceClick = (ev: typeof EUA_EVIDENCES[0], e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedEvidence?.data.id === ev.id) {
       setSelectedEvidence(null);
    } else {
       setSelectedEvidence({ data: ev, offsetTop: e.currentTarget.offsetTop });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    // If the URL contains 2026 or is explicitly known to be a simulated future link
    if (url.includes('2026') || url === '#') {
      e.preventDefault();
      setToastMessage("Aviso: Esta é uma evidência projetada para 2026. O link de origem ainda não está ativo.");
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  return (
    <div className="flex flex-col bg-[#F8FAFC] dark:bg-[#070B14] text-slate-900 dark:text-slate-300 min-h-screen relative font-sans">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <Info className="w-5 h-5 text-blue-400 dark:text-blue-600" />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 p-1.5 bg-slate-800 dark:bg-white text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-900 rounded-full hover:bg-slate-700 dark:hover:bg-slate-100 transition-all cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
      )}

      <style>{`
        .evidence-panel-sync { margin-top: 0px; }
        @media (min-width: 1024px) {
          .evidence-panel-sync { margin-top: var(--panel-offset, 0px); }
        }
      `}</style>

      {/* HEADER */}
      <div className="relative pt-6 pb-12 px-4 lg:px-6 print:px-6 border-b border-slate-200 dark:border-slate-800/50 flex flex-col justify-end overflow-hidden bg-white dark:bg-[#070B14]">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none" style={{
          backgroundImage: "linear-gradient(to top, var(--tw-colors-slate-50) 0%, transparent 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          mixBlendMode: 'luminosity'
        }} />
        
        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <div className="flex items-center gap-2 text-[15px] font-medium text-slate-500 mb-8">
            <button onClick={() => setActivePage('Home')} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-sm active:border-b-[1px] active:translate-y-[2px]">Economia Mundial</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 dark:text-white">Estados Unidos</span>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-sm border border-slate-200 dark:border-slate-800">
              <img src="https://flagcdn.com/w160/us.png" alt="USA" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl print:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Estados Unidos</h1>
              <p className="text-[17px] text-slate-500 dark:text-slate-400">Inteligência Estratégica para o Planejamento 2027–2037</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:py-10 lg:px-6 print:py-10 print:px-6 max-w-[1600px] mx-auto w-full flex flex-col gap-14">
        
        {/* ROW 1: Panorama e Destaques */}
        <div className="flex flex-col gap-6">
          
          {/* 1. Indicadores principais */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-sm shrink-0">1</div>
              <h2 className="text-[22px] font-bold text-slate-900 dark:text-white">Indicadores principais</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900/50 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-slate-700 dark:text-slate-300 mb-1">Juros EUA (Fed)</p>
                  <h3 className="text-[30px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-1.5">Risco</h3>
                  <p className="text-[14px] text-slate-500 dark:text-slate-400">Metade prevê nova alta</p>
                  <p className="text-[13px] text-slate-400 dark:text-slate-500 mt-0.5">Última Atualização: 17/06/2026</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900/50 rounded-xl flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-slate-700 dark:text-slate-300 mb-1">Data Centers</p>
                  <h3 className="text-[30px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-1.5">US$ 3 Tri</h3>
                  <p className="text-[14px] text-slate-500 dark:text-slate-400">Projeção de investimentos</p>
                  <p className="text-[13px] text-slate-400 dark:text-slate-500 mt-0.5">Última Atualização: 12/01/2026</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900/50 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-slate-700 dark:text-slate-300 mb-1">Tarifas (BR)</p>
                  <h3 className="text-[30px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-1.5">Até 25%</h3>
                  <p className="text-[14px] text-slate-500 dark:text-slate-400">Risco p/ exportações</p>
                  <p className="text-[13px] text-slate-400 dark:text-slate-500 mt-0.5">Última Atualização: 02/06/2026</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900/50 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-slate-700 dark:text-slate-300 mb-1">Infra Elétrica</p>
                  <h3 className="text-[30px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-1.5">Urgência</h3>
                  <p className="text-[14px] text-slate-500 dark:text-slate-400">Pressão regulatória p/ IA</p>
                  <p className="text-[13px] text-slate-400 dark:text-slate-500 mt-0.5">Última Atualização: 18/06/2026</p>
                </div>
              </div>

            </div>

            <h3 className="text-2xl md:text-3xl print:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight mt-2">
              Os Estados Unidos enfrentam pressões inflacionárias, juros altos e intensa corrida por infraestrutura de IA.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-4 leading-relaxed max-w-3xl">
              O cenário econômico apresenta crescimento resiliente, mas impulsionado por uma forte demanda energética e investimentos focados em data centers. Tensões geopolíticas e discussões tarifárias indicam possíveis impactos sobre exportações e competitividade.
            </p>
          </section>

        </div>

        {/* TEMAS ESTRATÉGICOS */}
        <section>
          <div className="flex items-center gap-2 mb-6 text-slate-500">
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase">TEMAS ESTRATÉGICOS PARA ACOMPANHAR</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 print:grid-cols-5 gap-4">
            
            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <ShieldAlert className="w-6 h-6 text-red-500 mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white text-[17px] mb-2">1. Guerra Comercial e Tarifas</h3>
              <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">Possíveis tarifas de 25% sobre o Brasil afetam competitividade e pressionam setores como o metalúrgico.</p>
            </div>

            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <Cpu className="w-6 h-6 text-purple-500 mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white text-[17px] mb-2">2. Corrida por IA</h3>
              <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">Demanda intensa por data centers impulsiona consumo de equipamentos elétricos, cobre e obras industriais.</p>
            </div>

            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <Building2 className="w-6 h-6 text-emerald-500 mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white text-[17px] mb-2">3. Expansão Bilionária</h3>
              <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">Investimentos trilionários em infraestrutura digital pressionam modernização de redes elétricas no mundo.</p>
            </div>

            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <Target className="w-6 h-6 text-orange-500 mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white text-[17px] mb-2">4. Juros Elevados nos EUA</h3>
              <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">Altas taxas fortalecem o dólar, elevando o custo de financiamento no Brasil e pressionando o câmbio.</p>
            </div>

            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <Zap className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white text-[17px] mb-2">5. Demanda por Energia</h3>
              <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">Novas necessidades para suporte de IA geram demandas expressivas por renováveis e equipamentos do setor elétrico.</p>
            </div>

          </div>
        </section>

        {/* EVIDÊNCIAS RECENTES */}
        <section id="evidencias" className="scroll-mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-0 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
             <div>
                <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Notícias e dados oficiais base que fundamentam esta visão estratégica.</p>
             </div>
             <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ordenar por:</span>
                <select className="text-sm border border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Mais recentes</option>
                  <option>Maior impacto</option>
                </select>
             </div>
          </div>

          <div className="flex flex-col lg:flex-row print:flex-row items-start gap-8">
            {/* Lista de Evidências */}
            <div className="flex flex-col gap-5 flex-1 w-full relative z-0">
              {EUA_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
            </div>

            {/* Painel de Detalhes (Side by Side) */}
            {selectedEvidence && (
              <div 
                className="evidence-panel-sync w-full lg:w-[400px] print:w-[400px] xl:w-[450px] shrink-0 lg:sticky lg:top-6 flex flex-col bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 lg:slide-in-from-right-8 duration-300 z-10"
                style={{ '--panel-offset': `${selectedEvidence.offsetTop}px` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <h3 className="text-[13px] font-bold uppercase tracking-widest text-slate-500">Detalhes da Evidência</h3>
                  <button 
                    onClick={() => setSelectedEvidence(null)} 
                    className="p-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 rounded-full transition-all active:scale-95"
                    title="Fechar painel"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="overflow-y-auto max-h-[80vh] flex flex-col p-6 gap-8">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {selectedEvidence.data.title}
                    </h2>
                    <p className="text-[16px] text-slate-600 dark:text-slate-400 italic mb-3">
                      {selectedEvidence.data.headline}
                    </p>
                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                      <span>{selectedEvidence.data.source}</span>
                      <span>{selectedEvidence.data.dateStr}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 mb-3">Resumo Executivo</h4>
                    <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {selectedEvidence.data.summary}
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-4">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-blue-800 dark:text-blue-400 mb-3">Possíveis impactos Brasil</h4>
                    <ul className="space-y-3">
                      {selectedEvidence.data.impacts.map((imp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 mb-3">Temas Relacionados</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvidence.data.themes.map((theme, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-[13px] rounded-md font-bold uppercase tracking-wide">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-[#111827]">
                  <a 
                    href={selectedEvidence.data.url} 
                    onClick={(e) => handleLinkClick(e, selectedEvidence.data.url)}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-all shadow-sm border-b-[4px] border-slate-700 dark:border-blue-800 active:border-b-0 active:translate-y-[4px] cursor-pointer"
                  >
                    Notícia completa
                    <ExternalLink className="w-4 h-4 text-slate-400 dark:text-white/80" />
                  </a>
                </div>
              </div>
            )}
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
    </div>
  );
};
