import React from 'react';
import { Target, TrendingUp, BarChart3, Info, Globe, ExternalLink, Factory, ShoppingCart, Users, Briefcase, DollarSign, Activity, Wheat, AlertTriangle, ShieldCheck, Eye, Quote, BookOpen, ChevronRight, BarChart2, Ship, Map, Truck, PackageOpen, RefreshCw, Trophy, Award, Star, Leaf, Search } from 'lucide-react';
import { EvidenceCard } from '../../layout/EvidenceCard';
import { EXPORTACOES_EVIDENCES } from '../../../data/evidences/exportacoes';
import { EXPORTACOES_PAGE } from '../../../data/pages/Exportacoes';

interface ExportacoesViewProps {
  setActivePage: (page: string) => void;
}



const agroData = [
  { name: 'Café', icon: '☕', prodLabel: 'Produção mundial:', prodText: '1º', expLabel: 'Exportação mundial:', expText: '1º', badge: { text: 'Liderança global', type: 'green' }, baseYear: 'Último dado fechado disponível', source: 'CNA / Trade Map' },
  { name: 'Suco de laranja', icon: '🍊', prodLabel: 'Produção mundial:', prodText: '1º', expLabel: 'Exportação mundial:', expText: '1º', badge: { text: 'Liderança global', type: 'green' }, baseYear: 'Último dado fechado disponível', source: 'CNA / Trade Map' },
  { name: 'Açúcar', icon: '🧊', prodLabel: 'Produção mundial:', prodText: '1º', expLabel: 'Exportação mundial:', expText: '1º', badge: { text: 'Liderança global', type: 'green' }, baseYear: 'Último dado fechado disponível', source: 'CNA / Trade Map' },
  { name: 'Soja', icon: '🌱', prodLabel: 'Produção mundial:', prodText: '1º', expLabel: 'Exportação mundial:', expText: '1º', badge: { text: 'Liderança global', type: 'green' }, baseYear: '2025', source: 'CNA / USDA' },
  { name: 'Milho', icon: '🌽', prodLabel: 'Produção mundial:', prodText: '3º', expLabel: 'Exportação mundial:', expText: '2º', badge: { text: 'Top 3', type: 'blue' }, baseYear: '2025', source: 'CNA / USDA' },
  { name: 'Carne bovina', icon: '🥩', prodLabel: 'Produção mundial:', prodText: '2º', expLabel: 'Exportação mundial:', expText: '1º', badge: { text: 'Liderança exportadora', type: 'green' }, baseYear: '2025', source: 'USDA / ABIEC' },
  { name: 'Carne de frango', icon: '🍗', prodLabel: 'Produção mundial:', prodText: '3º', expLabel: 'Exportação mundial:', expText: '1º', badge: { text: 'Liderança exportadora', type: 'green' }, baseYear: '2025', source: 'USDA / ABPA / Embrapa' },
  { name: 'Algodão', icon: '☁️', prodLabel: 'Produção mundial:', prodText: '3º', expLabel: 'Exportação mundial:', expText: '1º', badge: { text: 'Liderança exportadora', type: 'green' }, baseYear: '2024/2025', source: 'ABRAPA / USDA' }
];

const indData = [
  { name: 'Celulose', icon: '🪵', prodLabel: 'Produção 2025:', prodText: '29,4 mi t', expLabel: 'Exportações 2025:', expText: '20,7 mi t', badge: { text: 'Recorde / Liderança exportadora', type: 'emerald' }, baseYear: '2025', source: 'Ibá' },
  { name: 'Energia eólica', icon: '🎐', prodLabel: 'Capacidade instalada onshore:', prodText: '5º lugar', badge: { text: 'Top 5', type: 'blue' }, baseYear: 'Global Wind Report 2025 / dados 2024', source: 'ABEEólica / GWEC' },
  { name: 'Papel', icon: '📄', prodLabel: 'Produção mundial:', prodText: '8º (validar)', expLabel: 'Exportação mundial:', expText: '8º (validar)', badge: { text: 'Top 10', type: 'slate' }, baseYear: 'A validar', source: 'Validar fonte' },
  { name: 'Aço', icon: '🏗️', prodLabel: 'Produção de aço bruto:', prodText: 'Top 10', badge: { text: 'Top 10', type: 'slate' }, baseYear: '2025', source: 'World Steel Association / Instituto Aço Brasil' }
];

const RankingCard: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="bg-white dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 p-3.5 shadow-sm flex flex-col justify-between gap-3 h-full">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-11 h-11 rounded-full bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50 flex items-center justify-center text-[26px] shadow-inner shrink-0">
            {item.icon}
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-[18px] leading-tight">{item.name}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[15px] text-slate-600 dark:text-slate-400 leading-snug">
            {item.prodLabel} <strong className="text-slate-800 dark:text-slate-200 font-bold">{item.prodText}</strong>
          </span>
          {item.expLabel && (
            <span className="text-[15px] text-slate-600 dark:text-slate-400 leading-snug">
              {item.expLabel} <strong className="text-slate-800 dark:text-slate-200 font-bold">{item.expText}</strong>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <div>
          {item.badge.type === 'green' && (
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md text-[14px] font-bold">
              <Trophy className="w-3.5 h-3.5" />
              {item.badge.text}
            </div>
          )}
          {item.badge.type === 'emerald' && (
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-md text-[14px] font-bold">
              <Trophy className="w-3.5 h-3.5" />
              {item.badge.text}
            </div>
          )}
          {item.badge.type === 'blue' && (
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-md text-[14px] font-bold">
              <Award className="w-3.5 h-3.5" />
              {item.badge.text}
            </div>
          )}
          {item.badge.type === 'slate' && (
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[14px] font-bold">
              <Star className="w-3.5 h-3.5" />
              {item.badge.text}
            </div>
          )}
        </div>
        <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/50 flex flex-col gap-0.5">
          <span className="text-[13px] text-slate-500 dark:text-slate-500 leading-tight"><span className="font-semibold">Ano:</span> {item.baseYear}</span>
          <span className="text-[13px] text-slate-500 dark:text-slate-500 leading-tight truncate" title={item.source}><span className="font-semibold">Fonte:</span> {item.source}</span>
        </div>
      </div>
    </div>
  );
};

export function ExportacoesView({ setActivePage }: ExportacoesViewProps) {
  
  return (
    <div className="w-full flex flex-col gap-6 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in duration-300">
      
            {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6 mb-6">
        <div className="flex items-start gap-4 w-full xl:w-[450px] shrink-0">
          <div>
            <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">Exportações Brasileiras</h1>
            <p className="text-[17px] text-slate-600 dark:text-slate-400">
              Análise do comércio exterior brasileiro: setores, riscos e impactos estratégicos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full flex-1">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Exportações (Jun)</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-indigo-600 dark:text-indigo-400 leading-none">US$ 36,3 bi</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Total no mês</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-slate-500 dark:text-slate-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Importações (Jun)</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-700 dark:text-slate-300 leading-none">US$ 26,5 bi</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Total no mês</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Saldo (Jun)</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-blue-600 dark:text-blue-400 leading-none">US$ 9,8 bi</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Superávit comercial</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Acumulado 2025</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-emerald-600 dark:text-emerald-400 leading-none">US$ 348,7 bi</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Recorde anual</p>
            </div>
          </div>
        </div>
      </div>

{/* 1. LEITURA ESTRATÉGICA */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-sm shrink-0">2</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">Exportações atingem <span className="text-indigo-600 dark:text-indigo-400">patamar histórico</span>, garantindo superávits robustos.</h2>
        </div>
        
        <div className="mb-0">
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
                      Patamar histórico garantido por commodities e fluxo cambial robusto.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <p>
                As exportações brasileiras alcançaram um patamar histórico impulsionadas por volumes de commodities e pela força da indústria extrativa e agropecuária, garantindo superávits comerciais robustos. A concentração em produtos como soja, petróleo e minério de ferro vendidos para a China assegura fluxo cambial positivo.
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
                      Riscos tarifários nos EUA e moderação da demanda na Ásia.
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                O risco de tarifas dos EUA e as rígidas exigências ambientais na Europa demandam cautela contínua. Será vital monitorar possíveis sinais de desaceleração da economia asiática, que poderiam afetar a demanda e reconfigurar de forma rápida os volumes escoados dos nossos principais produtos.
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
                      Monitoramento de custos logísticos e diversificação de fornecedores.
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                  Embora a entrada de dólares alivie a pressão de desvalorização do Real (ajudando no custo de importação de insumos), as empresas devem antecipar a elevação nos custos logísticos pelo redesenho das cadeias de suprimento e buscar fornecedores diversificados para mitigar solavancos.
                </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 3. PRINCIPAIS PRODUTOS EXPORTADOS EM 2025 */}
        <section className="bg-white dark:bg-[#111827] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <PackageOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-[20px] font-bold text-slate-900 dark:text-white">Principais Produtos Exportados — 2025</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { n: 'Petróleo bruto', val: '12,8%' },
              { n: 'Soja', val: '12,5%' },
              { n: 'Minério de ferro', val: '8,3%' },
              { n: 'Café', val: '4,3%' },
              { n: 'Carne bovina congelada', val: '4,1%' },
              { n: 'Açúcar', val: '-' },
              { n: 'Combustíveis', val: '-' },
              { n: 'Celulose', val: '-' },
              { n: 'Farelo de soja', val: '-' },
              { n: 'Carne de aves', val: '-' }
            ].map((prod, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-[13px] font-bold text-indigo-700 dark:text-indigo-400 shrink-0">{i+1}</span>
                  <span className="text-[15px] font-semibold text-slate-700 dark:text-slate-200">{prod.n}</span>
                </div>
                {prod.val !== '-' && (
                  <span className="text-[15px] font-bold text-slate-900 dark:text-white">{prod.val}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. TOP 10 DESTINOS */}
        <section className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-[22px] md:text-[26px] font-bold text-slate-900 dark:text-white tracking-tight">Principais Destinos das Exportações Brasileiras — 2025</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { n: 'China', val: 'US$ 100,0 bi', code: 'cn' },
                { n: 'Estados Unidos', val: 'US$ 37,7 bi', code: 'us' },
                { n: 'Argentina', val: 'US$ 18,1 bi', code: 'ar' }
              ].map((dest, i) => {
                const getStyle = (index: number) => {
                  if (index === 0) return {
                    bg: 'bg-amber-50/50 dark:bg-amber-900/10',
                    border: 'border-amber-200 dark:border-amber-800/50',
                    ribbon: 'bg-amber-400 dark:bg-amber-500',
                    textVal: 'text-amber-600 dark:text-amber-500',
                    divider: 'bg-amber-200 dark:bg-amber-800/50',
                  };
                  if (index === 1) return {
                    bg: 'bg-slate-50 dark:bg-slate-800/50',
                    border: 'border-slate-200 dark:border-slate-700/50',
                    ribbon: 'bg-slate-400 dark:bg-slate-500',
                    textVal: 'text-blue-700 dark:text-blue-400',
                    divider: 'bg-slate-200 dark:bg-slate-700/50',
                  };
                  return {
                    bg: 'bg-orange-50/30 dark:bg-orange-900/10',
                    border: 'border-orange-200 dark:border-orange-800/50',
                    ribbon: 'bg-orange-400 dark:bg-orange-500',
                    textVal: 'text-orange-700 dark:text-orange-500',
                    divider: 'bg-orange-200 dark:bg-orange-800/50',
                  };
                };
                const s = getStyle(i);
                return (
                  <div key={i} className={`relative p-6 rounded-2xl border ${s.border} ${s.bg} flex items-center justify-center gap-4 md:gap-5 overflow-hidden shadow-sm`}>
                    <div className={`absolute top-0 left-4 flex items-start justify-center w-10 pt-2 pb-4 ${s.ribbon} text-white font-bold text-[18px]`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}>
                      {i + 1}º
                    </div>
                    <div className="mt-3">
                      <img src={`https://flagcdn.com/w160/${dest.code}.png`} alt={dest.n} className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full object-cover border-[3px] border-white dark:border-slate-800 shadow-sm shrink-0" />
                    </div>
                    <div className="flex flex-col flex-1 mt-3">
                      <span className="text-[18px] md:text-[22px] font-bold text-slate-900 dark:text-white leading-tight">{dest.n}</span>
                      <div className={`h-[2px] w-full my-2 ${s.divider}`}></div>
                      <span className={`text-[17px] md:text-[20px] font-black ${s.textVal}`}>{dest.val}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {[
                { n: 'Países Baixos', val: 'US$ 11,7 bi', code: 'nl' },
                { n: 'Espanha', val: 'US$ 8,8 bi', code: 'es' },
                { n: 'México', val: 'US$ 7,7 bi', code: 'mx' },
                { n: 'Singapura', val: 'US$ 7,4 bi', code: 'sg' },
                { n: 'Canadá', val: 'US$ 7,3 bi', code: 'ca' },
                { n: 'Chile', val: 'US$ 7,2 bi', code: 'cl' },
                { n: 'Índia', val: 'US$ 6,9 bi', code: 'in' }
              ].map((dest, i) => (
                <div key={i + 3} className="relative pt-6 pb-5 px-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] flex flex-col items-center flex-[1_1_180px] md:flex-[1_1_200px] min-w-[150px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-4 left-5 text-[18px] font-black text-slate-800 dark:text-slate-200">{i + 4}º</div>
                  <img src={`https://flagcdn.com/w80/${dest.code}.png`} alt={dest.n} className="w-12 h-12 rounded-full object-cover border-[2px] border-slate-100 dark:border-slate-700 shadow-sm mb-3" />
                  <span className="text-[15px] font-semibold text-slate-900 dark:text-white text-center leading-tight mb-2.5">{dest.n}</span>
                  <div className="h-[2px] w-[80%] bg-slate-100 dark:bg-slate-800 mb-2.5"></div>
                  <span className="text-[15px] font-black text-slate-900 dark:text-white">{dest.val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 5. BRASIL NO MUNDO */}
      <section className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-6">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0">
                 <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                 <h2 className="text-[24px] font-bold text-slate-900 dark:text-white">Posição do Brasil no Mundo</h2>
                 <p className="text-[16px] text-slate-500">Ranking global de produção e exportação &mdash; ano-base 2025 ou último dado fechado disponível</p>
              </div>
            </div>
          </div>

          {/* AGRO */}
          <div className="mb-12">
            <h3 className="text-[20px] font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Produção Agropecuária
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {agroData.map((item, i) => (
                <RankingCard key={i} item={item} />
              ))}
            </div>
          </div>

          {/* INDUSTRIAL */}
          <div className="mb-6">
            <h3 className="text-[20px] font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Factory className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              Produção Industrial
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {indData.map((item, i) => (
                <RankingCard key={i} item={item} />
              ))}
            </div>
          </div>

          <div className="flex items-start gap-2 mt-8 text-[15px] text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
            <Info className="w-4 h-4 mt-0.5 shrink-0" />
            <p>Rankings sujeitos à atualização conforme divulgação das bases internacionais. Dados com diferentes anos-base podem refletir ano civil, safra ou último relatório fechado disponível.</p>
          </div>
        </div>
      </section>

      {/* 6. RISCOS E BARREIRAS COMERCIAIS */}
      <section className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-200 dark:border-red-900/30 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
          <h2 className="text-[20px] font-bold text-red-900 dark:text-red-100">Riscos e Barreiras Comerciais</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/60 dark:bg-[#111827]/40 p-4 rounded-xl border border-red-100 dark:border-red-800/30">
            <h4 className="text-[16px] font-bold text-red-800 dark:text-red-300 mb-2">Tarifas dos EUA</h4>
            <p className="text-[15px] text-red-900/80 dark:text-red-200/70">Aproximadamente 22% das exportações brasileiras aos EUA enfrentam sobretaxas. Ações protecionistas impactam diretamente bens manufaturados e setores como a siderurgia.</p>
          </div>
          <div className="bg-white/60 dark:bg-[#111827]/40 p-4 rounded-xl border border-red-100 dark:border-red-800/30">
            <h4 className="text-[16px] font-bold text-red-800 dark:text-red-300 mb-2">Dependência da China</h4>
            <p className="text-[15px] text-red-900/80 dark:text-red-200/70">Com quase 29% das exportações voltadas para a China, uma desaceleração da economia asiática representa um grande risco de demanda para commodities como soja e minério de ferro.</p>
          </div>
          <div className="bg-white/60 dark:bg-[#111827]/40 p-4 rounded-xl border border-red-100 dark:border-red-800/30">
            <h4 className="text-[16px] font-bold text-red-800 dark:text-red-300 mb-2">Barreiras Sanitárias/Ambientais</h4>
            <p className="text-[15px] text-red-900/80 dark:text-red-200/70">Exigências europeias de rastreabilidade contra desmatamento podem limitar o acesso de carnes e grãos. O setor depende de redirecionamento para mercados no Oriente Médio e Ásia.</p>
          </div>
        </div>
      </section>

      {/* 8. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Notícias e dados base que fundamentam esta visão estratégica.</p>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {EXPORTACOES_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>
    </div>
  );
}
