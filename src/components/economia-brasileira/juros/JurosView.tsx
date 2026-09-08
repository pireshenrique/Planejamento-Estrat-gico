import React from 'react';
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ResponsiveContainer as ResponsiveLayoutContainer } from '../../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../../layout/HeaderKpiCard';
import { Landmark, Target, BarChart3, TrendingUp, Search, ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { EvidenceCard } from '../../layout/EvidenceCard';
import { JUROS_EVIDENCES, SELIC_DATA, SelicPoint } from '../../../data/evidences/juros';
import { JUROS_DATA } from '../../../data/economia-brasileira/juros';

interface JurosViewProps {
  setActivePage: (page: string) => void;
}



const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const dataItem = payload[0]?.payload as SelicPoint;
    if (!dataItem) return null;
    const isFocus = dataItem.tag === 'focus';
    const isAtual = dataItem.tag === 'atual';
    const val = dataItem.historico ?? dataItem.projecao;

    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-[13px] font-bold text-slate-600 dark:text-slate-400">{label}</p>
          {isAtual && (
            <span className="text-[10px] uppercase font-bold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 px-1.5 py-0.5 rounded">
              Atual
            </span>
          )}
          {isFocus && (
            <span className="text-[10px] uppercase font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-1.5 py-0.5 rounded">
              Projeção Focus
            </span>
          )}
        </div>
        <p className="text-[16px] font-black text-[#14b8a6]">
          {val !== null && val !== undefined ? `${val.toFixed(2).replace('.', ',')}%` : ''}
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
          {isFocus ? 'Expectativa de mercado (Boletim Focus)' : 'Taxa oficial definida pelo Copom'}
        </p>
      </div>
    );
  }
  return null;
};

const CustomTick = (props: any) => {
  const { x, y, payload } = props;
  const isFocus = payload.value === 'Dez/26' || payload.value === 'Dez/27';
  const isAtual = payload.value === 'Ago/26';

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill={isFocus ? '#d97706' : isAtual ? '#0f766e' : '#64748b'}
        className={`text-[11px] ${isAtual || isFocus ? 'font-bold' : 'font-medium'}`}
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

const HistoricalDot = (props: any) => {
  const { cx, cy, index } = props;
  const item = SELIC_DATA[index];
  if (!item || item.historico === null) return null;
  const isAtual = item.tag === 'atual';

  if (isAtual) {
    return (
      <g key={`dot-${index}`}>
        <circle cx={cx} cy={cy} r={8} fill="#14b8a6" fillOpacity={0.25} />
        <circle cx={cx} cy={cy} r={5.5} fill="#0f766e" stroke="#ffffff" strokeWidth={2} />
      </g>
    );
  }

  return (
    <circle
      key={`dot-${index}`}
      cx={cx}
      cy={cy}
      r={4}
      fill="#14b8a6"
      stroke="#ffffff"
      strokeWidth={1.5}
    />
  );
};

const ProjectionDot = (props: any) => {
  const { cx, cy, index } = props;
  const item = SELIC_DATA[index];
  if (!item || item.tag !== 'focus') return null;

  return (
    <g key={`pdot-${index}`}>
      <circle cx={cx} cy={cy} r={5} fill="#f59e0b" stroke="#ffffff" strokeWidth={2} />
    </g>
  );
};

const renderHistoricalLabel = (props: any) => {
  const { x, y, value, index } = props;
  if (value === null || value === undefined) return null;
  const item = SELIC_DATA[index];
  const isAtual = item?.tag === 'atual';

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={isAtual ? -20 : -12}
        textAnchor="middle"
        fill={isAtual ? '#0f766e' : '#64748b'}
        className={isAtual ? 'text-[12px] font-black dark:fill-teal-300' : 'text-[11px] font-bold dark:fill-slate-400'}
      >
        {`${value.toFixed(2).replace('.', ',')}%`}
      </text>
      {isAtual && (
        <text
          x={0}
          y={-8}
          textAnchor="middle"
          fill="#0d9488"
          className="text-[9px] font-bold uppercase tracking-wider dark:fill-teal-400"
        >
          (Atual)
        </text>
      )}
    </g>
  );
};

const renderProjectionLabel = (props: any) => {
  const { x, y, value, index } = props;
  if (value === null || value === undefined) return null;
  const item = SELIC_DATA[index];
  if (item?.tag !== 'focus') return null;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={-20}
        textAnchor="middle"
        fill="#d97706"
        className="text-[12px] font-black dark:fill-amber-400"
      >
        {`${value.toFixed(2).replace('.', ',')}%`}
      </text>
      <text
        x={0}
        y={-8}
        textAnchor="middle"
        fill="#b45309"
        className="text-[9px] font-bold dark:fill-amber-300"
      >
        {item.focusLabel || 'Focus'}
      </text>
    </g>
  );
};

export function JurosView({ setActivePage }: JurosViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
            <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">Juros e Política Monetária (Selic)</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">
            Acompanhamento das decisões do Copom, custo de crédito e impactos na economia.
          </p>
        </div>

        <ResponsiveLayoutContainer minWidth="200px" gap="gap-3" className="flex-1">
          {/* Card 1 */}
          <HeaderKpiCard
            title={JUROS_DATA.kpis.focus.title}
            value={JUROS_DATA.kpis.focus.value}
            context={JUROS_DATA.kpis.focus.context}
            explanation={JUROS_DATA.kpis.focus.explanation}
            source={JUROS_DATA.kpis.focus.source}
            icon={Target}
            color="amber"
          />

          {/* Card 2 */}
          <HeaderKpiCard
            title={JUROS_DATA.kpis.atual.title}
            value={JUROS_DATA.kpis.atual.value}
            context={JUROS_DATA.kpis.atual.context}
            explanation={JUROS_DATA.kpis.atual.explanation}
            source={JUROS_DATA.kpis.atual.source}
            icon={BarChart3}
            color="indigo"
          />

          {/* Card 3 */}
          <HeaderKpiCard
            title={JUROS_DATA.kpis.passado.title}
            value={JUROS_DATA.kpis.passado.value}
            context={JUROS_DATA.kpis.passado.context}
            explanation={JUROS_DATA.kpis.passado.explanation}
            source={JUROS_DATA.kpis.passado.source}
            icon={TrendingUp}
            color="slate"
          />
        </ResponsiveLayoutContainer>
      </div>

      {/* EVIDÊNCIAS DE DESTAQUE (TOP 3) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Principais notícias e dados</h2>
           </div>
        </div>
              
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {JUROS_EVIDENCES.slice(0, 3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev as any} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-0">
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
                      {JUROS_DATA.strategicAnalysis.observe.summary}
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                    {JUROS_DATA.strategicAnalysis.observe.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
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
                      {JUROS_DATA.strategicAnalysis.companyImpact.summary}
                    </span>
                  </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    {JUROS_DATA.strategicAnalysis.companyImpact.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EVOLUÇÃO DA SELIC */}
      <section className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6 mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-[22px] md:text-[24px] font-bold text-slate-900 dark:text-white tracking-tight">Evolução da Taxa Selic (%)</h2>
          <div className="flex items-center gap-5 text-[13px] font-medium text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-4 h-1 bg-[#14b8a6] rounded-full inline-block"></span>
              <span className="text-slate-700 dark:text-slate-300 font-semibold">Histórico Copom</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-0 border-t-2 border-dashed border-amber-500 inline-block"></span>
              <span className="text-amber-700 dark:text-amber-400 font-semibold">Projeção Focus</span>
            </div>
          </div>
        </div>
        
        <div className="h-[360px] w-full text-slate-900 dark:text-slate-200">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={SELIC_DATA} margin={{ top: 35, right: 30, left: 25, bottom: 20 }}>
              <defs>
                <linearGradient id="colorSelic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={false} stroke="#e2e8f0" strokeOpacity={0.8} className="dark:opacity-20" />
              <XAxis 
                dataKey="name" 
                axisLine={{ stroke: '#e2e8f0', strokeWidth: 1, className: 'dark:opacity-20' }}
                tickLine={false}
                tick={<CustomTick />}
                dy={10}
              />
              <YAxis hide={true} domain={[9.5, 16.5]} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '4 4' }} />
              
              {/* HISTÓRICO COPOM */}
              <Area 
                type="monotone" 
                dataKey="historico" 
                stroke="#14b8a6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorSelic)"
                isAnimationActive={false}
                dot={<HistoricalDot />}
                label={renderHistoricalLabel}
                activeDot={{ r: 7, fill: '#0f766e', stroke: '#fff', strokeWidth: 2 }}
              />

              {/* PROJEÇÃO FOCUS */}
              <Line 
                type="monotone" 
                dataKey="projecao" 
                stroke="#f59e0b" 
                strokeWidth={2.5}
                strokeDasharray="5 5"
                isAnimationActive={false}
                dot={<ProjectionDot />}
                label={renderProjectionLabel}
                activeDot={{ r: 7, fill: '#f59e0b', stroke: '#fff', strokeWidth: 2 }}
                connectNulls={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* RODAPÉ E LEGENDA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[12px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-4">
            <span className="font-medium">━━ Histórico Copom</span>
            <span className="font-medium text-amber-600 dark:text-amber-400">- - - Projeção Focus</span>
          </div>
          <p className="font-medium">
            Fonte: Banco Central do Brasil — histórico das decisões do Copom; projeções Focus para 2026 e 2027.
          </p>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">Outras Notícias</h2>
           </div>
        </div>
              
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {JUROS_EVIDENCES.slice(3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev as any} />
          ))}
        </div>
      </section>

    </div>
  );
}
