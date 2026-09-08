import React, { useState } from 'react';
import { ArrowRight, Globe, Lightbulb, Calendar, AlertTriangle, TrendingUp, Search, Target } from 'lucide-react';

export const EconomiaMundialView = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const economies = [
    {
      name: 'China',
      flag: 'https://flagcdn.com/w160/cn.png',
      description: 'Crescimento, infraestrutura e demanda por commodities.',
      risk: 'Aumento da competição com a indústria local brasileira por conta de produtos industriais mais baratos.',
      opportunity: 'Expansão de investimentos diretos chineses em infraestrutura e ferrovias.'
    },
    {
      name: 'Estados Unidos',
      flag: 'https://flagcdn.com/w160/us.png',
      description: 'Juros, dólar, tecnologia e liderança em IA.',
      risk: 'Aumento do protecionismo tarifário que pode ameaçar exportações de aço e agronegócio.',
      opportunity: 'Atração de investimentos americanos (nearshoring) em energia limpa e data centers.'
    },
    {
      name: 'Índia',
      flag: 'https://flagcdn.com/w160/in.png',
      description: 'Expansão industrial, população e consumo.',
      risk: 'Dificuldade de inserção de produtos de maior valor agregado brasileiro no mercado indiano.',
      opportunity: 'Ampliação de parcerias tecnológicas e forte demanda por petróleo, óleo de soja e minérios.'
    },
    {
      name: 'União Europeia',
      flag: 'https://flagcdn.com/w160/eu.png',
      description: 'Regulação, energia e sustentabilidade.',
      risk: 'Restrições de acesso ao mercado europeu por conta de novas barreiras tarifárias climáticas (ex: CBAM).',
      opportunity: 'Exportação de energia limpa, hidrogênio verde e venda de créditos de carbono.'
    },
    {
      name: 'BRICS',
      icon: Globe,
      description: 'Comércio, investimentos e novos mercados.',
      risk: 'Ruídos diplomáticos com parceiros tradicionais ocidentais em pautas sensíveis.',
      opportunity: 'Acesso ampliado a fundos de financiamento estrutural via Novo Banco de Desenvolvimento (NDB).'
    }
  ];

  return (
    <div className="flex flex-col bg-[#F8FAFC] dark:bg-[#070B14] min-h-screen relative font-sans overflow-hidden items-center justify-center py-20 px-6 lg:px-12">
      
      {/* BACKGROUND WATERMARK */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03]" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3000&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          mixBlendMode: 'luminosity'
        }} 
      />

      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-4 lg:px-6 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="flex flex-col items-start w-full mb-20">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[42px] font-bold text-[#0c162c] dark:text-white tracking-tight leading-none mb-1">Economia Mundial</h1>
              <p className="text-[19px] text-slate-500 dark:text-slate-400 font-medium">A visão global que influencia o Brasil.</p>
            </div>
          </div>
        </div>

        {/* SUBTITLE */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[22px] font-bold text-[#0c162c] dark:text-white">
            Explore os principais atores que estão moldando o cenário econômico global.
          </h2>
          <div className="w-12 h-[3px] bg-blue-600 rounded-full mt-6"></div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 print:grid-cols-5 gap-6 w-full mb-16">
          {economies.map((econ) => (
            <div 
              key={econ.name} 
              className="bg-white dark:bg-[#111827] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center cursor-pointer border border-slate-100 dark:border-slate-800"
              onClick={() => {
                if (['China', 'Estados Unidos', 'BRICS'].includes(econ.name)) {
                   setActivePage(econ.name);
                }
              }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-sm border-[4px] border-white dark:border-slate-800 mb-6 bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                {econ.flag ? (
                  <img src={econ.flag} alt={econ.name} className="w-full h-full object-cover" />
                ) : (
                  econ.icon && <econ.icon className="w-10 h-10 text-[#0c162c] dark:text-white" />
                )}
              </div>
              
              <h3 className="text-[22px] font-bold text-[#0c162c] dark:text-white mb-4">{econ.name}</h3>
              <div className="w-8 h-[2px] bg-slate-200 dark:bg-slate-700 mb-5"></div>
              
              <p className="text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                {econ.description}
              </p>
              
              <div className="flex items-center gap-3 mt-auto mb-8 relative">
                {/* Risk Hover */}
                <div 
                  className="relative group/tooltip"
                  onMouseEnter={() => setActiveTooltip(`${econ.name}-risk`)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="w-9 h-9 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 cursor-help hover:bg-red-100 transition-colors">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  {activeTooltip === `${econ.name}-risk` && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-slate-900 dark:bg-slate-800 text-white text-[15px] leading-relaxed rounded-xl shadow-xl z-50 pointer-events-none text-left">
                      <div className="font-bold text-red-400 mb-1 flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5" /> Maior Risco</div>
                      {econ.risk}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800"></div>
                    </div>
                  )}
                </div>

                {/* Opportunity Hover */}
                <div 
                  className="relative group/tooltip"
                  onMouseEnter={() => setActiveTooltip(`${econ.name}-opp`)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-500 cursor-help hover:bg-emerald-100 transition-colors">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  {activeTooltip === `${econ.name}-opp` && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-slate-900 dark:bg-slate-800 text-white text-[15px] leading-relaxed rounded-xl shadow-xl z-50 pointer-events-none text-left">
                      <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> Maior Oportunidade</div>
                      {econ.opportunity}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800"></div>
                    </div>
                  )}
                </div>
              </div>
              
              <button  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold text-[15px] rounded-xl border border-blue-200 dark:border-blue-800 border-b-[3px] border-b-blue-300 dark:border-b-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:border-b-[1px] active:translate-y-[2px]">
                Ver análise <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* FOOTER INFOS */}
        <div className="flex flex-col md:flex-row print:flex-row gap-8 w-full bg-[#F0F4F8] dark:bg-[#111827] border border-slate-100 dark:border-slate-800 rounded-3xl p-8 lg:p-10 print:p-10">
          <div className="flex items-start gap-5 flex-1">
             <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
             </div>
             <div>
               <h4 className="text-[18px] font-bold text-[#0c162c] dark:text-white mb-2">Como usar</h4>
               <p className="text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
                 Selecione um dos temas acima para acessar análises detalhadas, tendências, oportunidades e riscos específicos de cada região.
               </p>
             </div>
          </div>
          
          <div className="hidden md:block w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
          
          <div className="flex items-start gap-5 flex-1">
             <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-white" />
             </div>
             <div>
               <h4 className="text-[18px] font-bold text-[#0c162c] dark:text-white mb-2">Atualização</h4>
               <p className="text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
                 Este cenário global é atualizado continuamente com base nas melhores fontes e análises estratégicas.
               </p>
             </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

