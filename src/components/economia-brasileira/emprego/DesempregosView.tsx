import React from 'react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ResponsiveContainer as ResponsiveLayoutContainer } from '../../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../../layout/HeaderKpiCard';
import { EvidenceCard } from '../../layout/EvidenceCard';
import { DESEMPREGO_EVIDENCES } from '../../../data/evidences/desemprego';
import { 
  Briefcase, 
  Users, 
  DollarSign, 
  BarChart3, 
  Search, 
  Target, 
  Building2, 
  TrendingUp,
  Building,
  Home,
  Lightbulb,
  Factory
} from 'lucide-react';

interface DesempregosViewProps {
  setActivePage: (page: string) => void;
  embedded?: boolean;
}

export const DesempregosView: React.FC<DesempregosViewProps> = ({ 
  setActivePage,
  embedded = false 
}) => {
  const handleDownloadPdf = async (fileName: string = 'documento.pdf') => {
    // Função de download mantida como estrutura
  };
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* HEADER */}
      {!embedded ? (
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
            <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Desemprego e Mercado
            </h1>
            <p className="text-[17px] text-slate-600 dark:text-slate-400">
              Acompanhamento dos indicadores de desocupação e subutilização da mão de obra.
            </p>
          </div>

          <ResponsiveLayoutContainer minWidth="200px" gap="gap-3" className="flex-1">
            {/* Card 1 */}
            <HeaderKpiCard
              title="DESEMPREGO 2025"
              value="5,6%"
              context="Menor taxa anual da série histórica"
              explanation="Taxa média anual de desocupação em 2025."
              source="IBGE — PNAD Contínua"
              icon={BarChart3}
              color="slate"
            />

            {/* Card 2 */}
            <HeaderKpiCard
              title="DESEMPREGO ATUAL"
              value="5,4%"
              context="2º tri/26 • Mínima para o período"
              explanation="Taxa de desocupação medida pela PNAD Contínua."
              source="IBGE — PNAD Contínua"
              icon={Briefcase}
              color="indigo"
            />

            {/* Card 3 */}
            <HeaderKpiCard
              title="EXPECTATIVA 2026–2027"
              value="5,7%"
              context="Projeção 2026 • 6,1% em 2027"
              explanation="Expectativa do mercado financeiro para a taxa de desemprego."
              source="Itaú Macro"
              icon={Target}
              color="amber"
            />
          </ResponsiveLayoutContainer>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <HeaderKpiCard
            title="DESEMPREGO 2025"
            value="5,6%"
            context="Menor taxa anual da série histórica"
            explanation="Taxa média anual de desocupação em 2025."
            source="IBGE — PNAD Contínua"
            icon={BarChart3}
            color="slate"
          />

          {/* Card 2 */}
          <HeaderKpiCard
            title="DESEMPREGO ATUAL"
            value="5,4%"
            context="2º tri/26 • Mínima para o período"
            explanation="Taxa de desocupação medida pela PNAD Contínua."
            source="IBGE — PNAD Contínua"
            icon={Briefcase}
            color="indigo"
          />

          {/* Card 3 */}
          <HeaderKpiCard
            title="EXPECTATIVA 2026–2027"
            value="5,7%"
            context="Projeção 2026 • 6,1% em 2027"
            explanation="Expectativa do mercado financeiro para a taxa de desemprego."
            source="Itaú Macro"
            icon={Target}
            color="amber"
          />
        </div>
      )}

      {/* EVIDÊNCIAS DE DESTAQUE */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Principais notícias e dados</h2>
           </div>
        </div>
           
        {DESEMPREGO_EVIDENCES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {DESEMPREGO_EVIDENCES.slice(0, 3).map((ev) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev as any} 
                onDownloadPdf={(ev as any).isPdf ? () => handleDownloadPdf((ev as any).fileName) : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Nenhuma evidência cadastrada no momento.
            </p>
          </div>
        )}
      </section>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* O que observar nos próximos meses */}
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
                        Mercado de trabalho ainda aquecido, mas com sinais de possível moderação e desafios na inserção dos jovens.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>
                      Acompanhar a consolidação dos 5,4% de desemprego no 2º trimestre de 2026, menor taxa já registrada para o período, com 103,1 milhões de pessoas ocupadas.
                    </li>
                    <li>
                      Observar a projeção de aumento gradual do desemprego, de 5,7% no fim de 2026 para 6,1% em 2027, em um cenário de desaceleração da atividade econômica.
                    </li>
                    <li>
                      Monitorar a inserção dos jovens de 18 a 24 anos no mercado de trabalho, cuja taxa de desemprego chega a 13,8%, bem acima da média nacional.
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> IBGE, EBC, CNN Brasil, UOL.
                  </div>
                </div>
              </div>
            </div>

            {/* Impacto para a empresa */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-red-50 dark:text-red-900/20 leading-none pointer-events-none select-none">
                02
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a Lorenzetti</h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Mercado de trabalho favorável no curto prazo, mas com desafios para renda futura e formação de novos consumidores.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>
                      A taxa de desemprego em nível historicamente baixo pode favorecer a sustentação da renda e do consumo das famílias, embora o efeito sobre a demanda dependa também de inflação, crédito e renda disponível.
                    </li>
                    <li>
                      O desemprego de 13,8% entre jovens de 18 a 24 anos pode limitar a entrada dessa parcela da população em empregos formais e em trajetórias de renda mais estáveis, com possíveis efeitos de longo prazo sobre consumo e formação de novos domicílios.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ESTRUTURA DE DADOS */}
      <section className="bg-white dark:bg-[#111827] p-4 md:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">
                Desemprego no Brasil — trajetória e diferenças
              </h3>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                A taxa nacional caiu, mas a melhora permanece desigual e pode perder força à frente.
              </p>
            </div>
          </div>
          <span className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-2.5 py-1 rounded-md self-start md:self-auto shrink-0">
            Fonte: IBGE, UOL e Itaú
          </span>
        </div>

        {/* BENTO GRID CONTAINER */}
        <div className="bg-slate-50/50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800/80 p-3 shadow-sm flex flex-col gap-3">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            
            {/* 1. TRAJETÓRIA (GRÁFICO) - SPAN 6 */}
            <div className="lg:col-span-6 flex flex-col bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-lg p-4 shadow-xs relative overflow-hidden">
              <div className="mb-2">
                <h4 className="text-[14px] font-bold text-slate-900 dark:text-white tracking-tight">
                  Cenário nacional: resultado e projeções
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Brasil — média de 2025, 2º tri/26 e projeções para o fim de 2026 e 2027
                </p>
              </div>

              <div className="flex-1 w-full min-h-[160px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={[
                    { name: '2025 — média', observed: 5.6, projected: null },
                    { name: '2º tri/26', observed: 5.4, projected: 5.4 },
                    { name: 'fim/26', observed: null, projected: 5.7 },
                    { name: 'fim/27', observed: null, projected: 6.1 }
                  ]} margin={{ top: 25, right: 25, left: 25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorObserved" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.25}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.6} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} dy={10} />
                    <YAxis domain={[4.5, 6.5]} hide={true} />
                    <Tooltip 
                      cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '4 4' }}
                      contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', fontSize: '12px', padding: '8px 12px', fontWeight: 600, color: '#0f172a' }}
                      formatter={(value) => [`${value}%`, 'Taxa de desemprego']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="observed" 
                      stroke="#0ea5e9" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorObserved)" 
                      dot={{ r: 4.5, fill: '#fff', strokeWidth: 2.5, stroke: '#0ea5e9' }} 
                      activeDot={{ r: 7, fill: '#0ea5e9', stroke: '#fff', strokeWidth: 2 }} 
                      isAnimationActive={true} 
                      animationDuration={1500}
                      connectNulls 
                      label={{ position: 'top', fill: '#0284c7', fontSize: 12, fontWeight: 800, formatter: (val) => `${val}%`, dy: -12 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="projected" 
                      stroke="#64748b" 
                      strokeWidth={2.5} 
                      strokeDasharray="6 6" 
                      dot={{ r: 4.5, fill: '#fff', strokeWidth: 2.5, stroke: '#64748b' }} 
                      activeDot={{ r: 7, fill: '#64748b', stroke: '#fff', strokeWidth: 2 }} 
                      isAnimationActive={true} 
                      animationDuration={1500}
                      animationBegin={500}
                      connectNulls 
                      label={{ position: 'top', fill: '#475569', fontSize: 12, fontWeight: 800, formatter: (val) => `${val}%`, dy: -12 }} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-2 flex flex-col items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/60 pt-3">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium w-full">
                  A taxa de desemprego caiu para 5,4% no 2º trimestre de 2026, menor resultado já registrado para um segundo trimestre. O Itaú projeta alta gradual para 5,7% no fim de 2026 e 6,1% no fim de 2027.
                </p>
                <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium w-full">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-0.5 bg-[#0ea5e9]"></span> Observado
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 border-t-2 border-dashed border-[#64748b]"></span> Projetado (Itaú)
                  </div>
                </div>
              </div>
            </div>

            {/* 2. DESIGUALDADE REGIONAL - SPAN 6 */}
            <div className="lg:col-span-6 flex flex-col bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-lg p-4 shadow-xs">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900 dark:text-white tracking-tight">
                    Diferença regional no desemprego — 1º tri/26
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    A média nacional esconde diferenças importantes entre os estados.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded border border-slate-100 dark:border-slate-700">
                  Diferença entre a menor e a maior taxa: 7,3 p.p.
                </span>
              </div>

              <div className="flex flex-col flex-1 gap-5 justify-center">
                {/* MENORES */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    Menores Taxas
                  </span>
                  {[
                    { uf: 'SC', nome: 'Santa Catarina', val: 2.7 },
                    { uf: 'MT', nome: 'Mato Grosso', val: 3.1 },
                    { uf: 'ES', nome: 'Espírito Santo', val: 3.2 }
                  ].map(st => (
                    <div key={st.uf} className="flex items-center gap-3">
                      <div className="w-24 shrink-0 font-medium text-[11px] text-slate-600 dark:text-slate-400 truncate" title={st.nome}>{st.nome}</div>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="h-5 bg-slate-50 dark:bg-slate-800/60 rounded-r-md w-full relative">
                          <div className="absolute left-0 top-0 bottom-0 bg-emerald-400 dark:bg-emerald-500 rounded-r-md" style={{ width: `${(st.val/10)*100}%` }}></div>
                        </div>
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 w-8 text-right">{st.val}%</span>
                      </div>
                      <span className="text-[9px] text-slate-400 w-[100px] shrink-0 truncate">Taxa de desemprego</span>
                    </div>
                  ))}
                </div>

                {/* MAIORES */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-bold text-red-600 dark:text-red-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    Maiores Taxas
                  </span>
                  {[
                    { uf: 'AP', nome: 'Amapá', val: 10.0 },
                    { uf: 'AL', nome: 'Alagoas', val: 9.2 },
                    { uf: 'BA', nome: 'Bahia', val: 9.2 }
                  ].map(st => (
                    <div key={st.uf} className="flex items-center gap-3">
                      <div className="w-24 shrink-0 font-medium text-[11px] text-slate-600 dark:text-slate-400 truncate" title={st.nome}>{st.nome}</div>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="h-5 bg-slate-50 dark:bg-slate-800/60 rounded-r-md w-full relative">
                          <div className="absolute left-0 top-0 bottom-0 bg-red-400 dark:bg-red-500 rounded-r-md" style={{ width: `${(st.val/10)*100}%` }}></div>
                        </div>
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 w-8 text-right">{st.val}%</span>
                      </div>
                      <span className="text-[9px] text-slate-400 w-[100px] shrink-0 truncate">Taxa de desemprego</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. INSERÇÃO DOS JOVENS NO MERCADO DE TRABALHO - SPAN 12 */}
            <div className="lg:col-span-12 flex flex-col bg-white dark:bg-[#111827] border border-red-100 dark:border-red-900/30 rounded-lg p-4 shadow-xs relative overflow-hidden group">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-50 dark:bg-red-900/10 rounded-full blur-2xl -z-0 opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <h4 className="text-[12px] font-bold text-red-700 dark:text-red-400 uppercase tracking-wider">
                  INSERÇÃO DOS JOVENS NO MERCADO DE TRABALHO
                </h4>
                <span className="text-[9px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                  FONTE: MTE / UOL
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 lg:gap-6 relative z-10 flex-1">
                {/* ETAPA 1: O PROBLEMA */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[38px] font-black text-red-600 dark:text-red-500 leading-none tracking-tight">
                      13,8%
                    </span>
                  </div>
                  <h5 className="text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2">
                    Taxa de desemprego entre jovens de 18–24 anos <span className="text-[11px] font-normal text-slate-500">(1º tri/26)</span>
                  </h5>
                  
                  <div className="bg-slate-50 dark:bg-slate-800/40 rounded-md p-3 border border-slate-100 dark:border-slate-700/50 mt-1">
                    <p className="text-[12px] font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      2,7 milhões de jovens de 18–24 anos estavam desempregados.
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      A taxa é 2,4 vezes superior à média nacional, de 5,8%.
                    </p>
                  </div>
                </div>

                {/* TRANSIÇÃO */}
                <div className="flex flex-col md:flex-row items-center justify-center shrink-0">
                   {/* Mobile Arrow */}
                   <div className="md:hidden flex flex-col items-center gap-2 py-4">
                     <div className="h-5 w-px bg-slate-200 dark:bg-slate-700"></div>
                     <div className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-bold uppercase tracking-widest px-5 py-1.5 rounded-full text-center">
                       Por trás do desemprego, há um desafio maior
                     </div>
                     <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 relative">
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b-2 border-r-2 border-slate-400 dark:border-slate-500 rotate-45"></div>
                     </div>
                   </div>
                   
                   {/* Desktop Arrow */}
                   <div className="hidden md:flex flex-row items-center gap-3 px-2">
                     <div className="w-8 xl:w-12 h-px bg-slate-200 dark:bg-slate-700"></div>
                     <div className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-bold uppercase tracking-widest px-5 py-1.5 rounded-full text-center whitespace-nowrap min-w-[320px]">
                       Por trás do desemprego, há um desafio maior
                     </div>
                     <div className="w-8 xl:w-12 h-px bg-slate-200 dark:bg-slate-700 relative">
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-slate-400 dark:border-slate-500 rotate-45"></div>
                     </div>
                   </div>
                </div>

                {/* ETAPA 2: CONTEXTO */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[32px] font-black text-slate-700 dark:text-slate-300 leading-none tracking-tight">
                      6,2 milhões
                    </span>
                  </div>
                  <h5 className="text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2">
                    Jovens de 14–24 anos que não estudam nem trabalham
                  </h5>
                  
                  <div className="bg-slate-50 dark:bg-slate-800/40 rounded-md p-3 border border-slate-100 dark:border-slate-700/50 mt-1 flex flex-col gap-1.5">
                    <p className="text-[12px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      18,8% dos jovens de 14–24 anos estão nessa condição.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAIXA HORIZONTAL DE MENSAGEM-CHAVE */}
              <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-lg p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-sm mt-6">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4 text-amber-300" />
                </div>
                <div className="flex-1">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block mb-0.5">
                    O QUE ISSO SIGNIFICA
                  </span>
                  <p className="text-[12.5px] text-slate-100 leading-snug font-medium">
                    O desemprego juvenil permanece um desafio de entrada no mercado de trabalho, com uma taxa significativamente superior à média nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {DESEMPREGO_EVIDENCES.length > 3 && (
        <section id="evidencias-outras" className="scroll-mt-12 relative mt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
             <div>
                <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS E FONTES</h2>
             </div>
          </div>           
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {DESEMPREGO_EVIDENCES.slice(3).map((ev) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev as any} 
                onDownloadPdf={(ev as any).isPdf ? () => handleDownloadPdf((ev as any).fileName) : undefined}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
