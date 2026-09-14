import React from 'react';
import {
  Thermometer,
  Waves,
  Activity,
  AlertTriangle,
  Info,
  TrendingUp,
  Globe2,
  ExternalLink,
  Flame,
  BarChart3
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from 'recharts';

// Dados 1: Histórico Comparativo de Intensidade dos Eventos El Niño (°C de Anomalia Niño 3.4)
// Fonte: NOAA / Physical Sciences Laboratory & OMM
const HISTORICO_EL_NINO = [
  { ano: '1982-83', anomalia: 2.1, class: 'Forte', cor: '#f59e0b' },
  { ano: '1997-98', anomalia: 2.4, class: 'Muito Forte', cor: '#f97316' },
  { ano: '2015-16', anomalia: 2.6, class: 'Super El Niño', cor: '#ef4444' },
  { ano: '2023-24', anomalia: 2.0, class: 'Forte', cor: '#f59e0b' },
  { ano: '2026-27 (Proj.)', anomalia: 1.9, class: 'Muito Forte (OMM)', cor: '#dc2626' }
];

// Dados 2: Média Global da Temperatura da Superfície do Mar (SST 60°S–60°N)
// Fonte: Copernicus Climate Change Service (C3S) / ERA5
const SST_OCEANICA = [
  { ano: '2020', temp: 20.61, anomalia: '+0.41' },
  { ano: '2021', temp: 20.64, anomalia: '+0.44' },
  { ano: '2022', temp: 20.69, anomalia: '+0.49' },
  { ano: '2023', temp: 20.87, anomalia: '+0.67' },
  { ano: '2024', temp: 20.96, anomalia: '+0.76 (Recorde)' },
  { ano: '2025', temp: 20.91, anomalia: '+0.71' },
  { ano: '2026', temp: 20.94, anomalia: '+0.74' }
];

// Dados 3: Distribuição das Ondas de Calor no Brasil por Trimestre / 2026
// Fonte: G1 / Inmet / NOAA (Mapeamento de ao menos 6 ondas de calor)
const ONDAS_CALOR_BRASIL = [
  { periodo: '1º Tri', ondas: 2, picoMedio: '38°C', regiao: 'Sul e Sudeste' },
  { periodo: '2º Tri', ondas: 1, picoMedio: '35°C', regiao: 'Centro-Oeste' },
  { periodo: '3º Tri', ondas: 1, picoMedio: '39°C', regiao: 'Centro-Oeste e Norte' },
  { periodo: '4º Tri', ondas: 2, picoMedio: '40°C', regiao: 'Sudeste e Centro-Oeste' }
];

export function ElNinoRecordeCharts() {
  return (
    <section id="bloco-graficos-el-nino-recorde" className="space-y-6">
      {/* CABEÇALHO DO BLOCO ANALÍTICO */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-orange-100 dark:bg-orange-950/80 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800/60">
                  Evidências Climatológicas & Oceânicas
                </span>
                <span className="text-xs text-slate-400">NOAA • Copernicus • OMM • Inmet</span>
              </div>
              <h2 className="text-[21px] md:text-[23px] font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                Evidências Quantitativas do El Niño Recorde e Aquecimento Oceânico
              </h2>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-slate-700/80 self-start lg:self-auto">
            Fontes Primárias: <strong>NOAA (RONI) • Copernicus (C3S) • OMM • Inmet</strong>
          </div>
        </div>

        {/* GRADE DOS TRÊS GRÁFICOS LADO A LADO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          
          {/* GRÁFICO 1: Histórico de Super El Niños (Anomalia °C) */}
          <div className="bg-slate-50/70 dark:bg-slate-900/40 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    ANOMALIA TÉRMICA NIÑO 3.4
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Super El Niños Históricos
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-orange-100/80 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <Thermometer className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Pico de anomalia de temperatura (°C) na região do Pacífico Tropical equatoriano.
              </p>

              {/* GRÁFICO RECHARTS */}
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={HISTORICO_EL_NINO} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.6} />
                    <XAxis 
                      dataKey="ano" 
                      tick={{ fontSize: 10, fill: '#64748b' }} 
                      interval={0}
                      angle={-15}
                      textAnchor="end"
                      height={45}
                    />
                    <YAxis 
                      domain={[0, 3]} 
                      tick={{ fontSize: 10, fill: '#64748b' }}
                      unit="°C"
                    />
                    <Tooltip 
                      formatter={(val: number) => [`+${val}°C`, 'Pico de Anomalia']}
                      labelFormatter={(label) => `Ciclo: ${label}`}
                      contentStyle={{
                        backgroundColor: '#0f172a',
                        borderColor: '#334155',
                        borderRadius: '0.75rem',
                        color: '#f8fafc',
                        fontSize: '12px'
                      }}
                    />
                    <Bar dataKey="anomalia" radius={[6, 6, 0, 0]}>
                      {HISTORICO_EL_NINO.map((entry, idx) => (
                        <Cell key={`bar-${idx}`} fill={entry.cor} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* NOTA DE GOVERNANÇA E FONTE */}
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 mt-2 space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Fonte: <strong>NOAA & OMM</strong></span>
                <span className="font-semibold text-orange-600 dark:text-orange-400">+1,9°C persistente</span>
              </div>
              <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-tight">
                OMM projeta que o evento atual se mantenha na categoria "muito forte" até fev/2027.
              </p>
            </div>
          </div>

          {/* GRÁFICO 2: Recorde Térmico Oceânico Global (Copernicus / C3S) */}
          <div className="bg-slate-50/70 dark:bg-slate-900/40 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    COPERNICUS (C3S) / ERA5
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Temperatura dos Oceanos (SST)
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-blue-100/80 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Waves className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Média diária da superfície dos oceanos globais (60°S–60°N) atingindo 20,96°C.
              </p>

              {/* GRÁFICO RECHARTS */}
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={SST_OCEANICA} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0284c7" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#0284c7" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.6} />
                    <XAxis 
                      dataKey="ano" 
                      tick={{ fontSize: 10, fill: '#64748b' }} 
                    />
                    <YAxis 
                      domain={[20.4, 21.1]} 
                      tick={{ fontSize: 10, fill: '#64748b' }}
                      unit="°C"
                    />
                    <Tooltip 
                      formatter={(val: number) => [`${val.toFixed(2)}°C`, 'Média SST']}
                      labelFormatter={(label) => `Ano: ${label}`}
                      contentStyle={{
                        backgroundColor: '#0f172a',
                        borderColor: '#334155',
                        borderRadius: '0.75rem',
                        color: '#f8fafc',
                        fontSize: '12px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="temp" 
                      stroke="#0284c7" 
                      strokeWidth={2.5}
                      fillOpacity={1} 
                      fill="url(#oceanGrad)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* NOTA DE GOVERNANÇA E FONTE */}
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 mt-2 space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Fonte: <strong>Copernicus / C3S</strong></span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">Recorde: 20,96°C</span>
              </div>
              <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-tight">
                Oceanos mais aquecidos sustentam maior evaporação e alimentam perturbações atmosféricas.
              </p>
            </div>
          </div>

          {/* GRÁFICO 3: Ondas de Calor no Brasil (Inmet / G1) */}
          <div className="bg-slate-50/70 dark:bg-slate-900/40 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    MONITORAMENTO INMET / G1
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Ondas de Calor no Brasil
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-rose-100/80 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Ao menos 6 ondas de calor projetadas até o fim do ano com picos térmicos em diversas regiões.
              </p>

              {/* GRÁFICO RECHARTS */}
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ONDAS_CALOR_BRASIL} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.6} />
                    <XAxis 
                      dataKey="periodo" 
                      tick={{ fontSize: 10, fill: '#64748b' }} 
                    />
                    <YAxis 
                      domain={[0, 3]} 
                      tick={{ fontSize: 10, fill: '#64748b' }}
                      unit=" ev."
                    />
                    <Tooltip 
                      formatter={(val: number, _, props: any) => [
                        `${val} evento(s) • Pico médio: ${props.payload.picoMedio} (${props.payload.regiao})`,
                        'Ocorrência'
                      ]}
                      contentStyle={{
                        backgroundColor: '#0f172a',
                        borderColor: '#334155',
                        borderRadius: '0.75rem',
                        color: '#f8fafc',
                        fontSize: '12px'
                      }}
                    />
                    <Bar dataKey="ondas" fill="#e11d48" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* NOTA DE GOVERNANÇA E FONTE */}
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 mt-2 space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Fonte: <strong>Inmet / G1</strong></span>
                <span className="font-semibold text-rose-600 dark:text-rose-400">≥ 6 Ondas de Calor</span>
              </div>
              <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-tight">
                Picos de calor intenso alteram sazonalidade do uso de banho e pressurização residencial.
              </p>
            </div>
          </div>

        </div>

        {/* FAIXA EXECUTIVA DE SÍNTESE ESTRATÉGICA (HIPÓTESES OBSERVACIONAIS LORENZETTI) */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="text-amber-950 dark:text-amber-200 leading-relaxed">
              <strong>Contexto para o Planejamento 2027–2037:</strong> A combinação de recorde oceânico (+20,96°C) e a persistência do El Niño até fev/2027 <span className="underline decoration-amber-500/50">pode influenciar</span> a demanda regional de duchas e aquecedores solares/gás, e <span className="underline decoration-amber-500/50">pode criar oportunidades</span> para sistemas economizadores de água e pressurização em áreas sujeitas a secas ou cheias repentinas.
            </p>
          </div>
          <div className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold shrink-0">
            Hipótese Observacional
          </div>
        </div>

      </div>
    </section>
  );
}

export default ElNinoRecordeCharts;
