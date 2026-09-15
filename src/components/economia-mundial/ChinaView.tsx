import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHINA_EVIDENCES } from '../../data/evidences/china';
import { 
  Globe, 
  ChevronRight, 
  AlertTriangle, 
  TrendingUp, 
  Info, 
  ExternalLink, 
  Target, 
  FileText, 
  BarChart3, 
  Zap, 
  ShieldAlert, 
  Cpu, 
  Lightbulb, 
  Activity, 
  ArrowUpRight, 
  ChevronDown, 
  CheckCircle2, 
  X, 
  Search,
  Building2,
  PieChart as PieChartIcon,
  Layers,
  ArrowRight,
  TrendingDown,
  Coins,
  Radio,
  Server,
  Ship,
  Sparkles,
  Award,
  Filter
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area 
} from 'recharts';
import { EvidenceCard } from '../layout/EvidenceCard';
import {
  CHINA_TRADE_HISTORY_DATA,
  CHINA_EXPORT_COMMODITIES_SHARE,
  CHINA_INVESTMENT_SECTORS_DATA,
  CHINA_STRATEGIC_VECTORS,
  CHINA_EXECUTIVE_SUMMARY,
  CHINA_STRATEGIC_TRENDS,
  CHINA_STRATEGIC_INDICATORS,
  CHINA_ATTENTION_POINTS
} from '../../data/economia-mundial/china';

const ICON_MAP = {
  TrendingUp,
  Globe,
  Activity,
  Building2,
  Ship,
  Zap,
  Server,
  Cpu
};




export const ChinaView = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const [activeTab, setActiveTab] = useState<'geral' | 'graficos' | 'lorenzetti' | 'evidencias'>('geral');
  const [selectedTagFilter, setSelectedTagFilter] = useState<string>('TODAS');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const tags = ['TODAS', 'ECONOMIA', 'INVESTIMENTOS', 'GEOPOLÍTICA', 'TECNOLOGIA', 'IA & DADOS', 'EXPORTAÇÕES'];

  const filteredEvidences = selectedTagFilter === 'TODAS'
    ? CHINA_EVIDENCES
    : CHINA_EVIDENCES.filter(ev => ev.tag === selectedTagFilter);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.includes('2026') || url === '#') {
      e.preventDefault();
      setToastMessage("Aviso: Esta é uma evidência projetada para 2026. O link de origem ainda não está ativo.");
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 pb-12 font-sans">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <Info className="w-5 h-5 text-red-400 dark:text-red-600" />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)} 
            className="ml-2 p-1.5 bg-slate-800 dark:bg-white text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-900 rounded-full hover:bg-slate-700 dark:hover:bg-slate-100 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 1. BREADCRUMBS & TOP HEADER */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-[14px] font-medium text-slate-500 dark:text-slate-400">
          <button 
            onClick={() => setActivePage('Home')} 
            className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs active:border-b-[1px] active:translate-y-[2px]"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button 
            onClick={() => setActivePage('Economia Mundial')} 
            className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            Economia Mundial
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-red-600 dark:text-red-400 font-bold">China</span>
        </div>

        {/* HERO BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c162c] via-[#142346] to-[#1e1022] text-white p-6 sm:p-8 lg:p-10 border border-[#1e2a4a] shadow-xl">
          {/* Fundo com imagem temática suave */}
          <div 
            className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-screen"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2000&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-2xl border-2 border-white/20 bg-slate-900 flex items-center justify-center">
                <img 
                  src="https://flagcdn.com/w160/cn.png" 
                  alt="Bandeira da China" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-red-600/80 text-white border border-red-400/30 flex items-center gap-1.5 shadow-sm">
                    <Award className="w-3 h-3" /> Parceiro Comercial Nº 1 do Brasil
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-300 border border-blue-400/20">
                    Planejamento 2027–2037
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-2">
                  China
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
                  Crescimento impulsionado por tecnologia, transição energética, infraestrutura logística e o aprofundamento das relações comerciais e financeiras com o Brasil.
                </p>
              </div>
            </div>

            {/* Quick Actions / Tab Switcher */}
            <div className="flex flex-wrap items-center gap-2 bg-black/30 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shrink-0">
              <button
                onClick={() => setActiveTab('geral')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'geral'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Visão Executiva
              </button>
              <button
                onClick={() => setActiveTab('graficos')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'graficos'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <BarChart3 className="w-4 h-4" /> Gráficos & Dados
              </button>
              <button
                onClick={() => setActiveTab('lorenzetti')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'lorenzetti'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Target className="w-4 h-4" /> Lorenzetti
              </button>
              <button
                onClick={() => setActiveTab('evidencias')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'evidencias'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <FileText className="w-4 h-4" /> Notícias ({CHINA_EVIDENCES.length})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CARDS DE INDICADORES PRINCIPAIS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CHINA_STRATEGIC_INDICATORS.map((ind, idx) => {
          const IconComp = ICON_MAP[ind.iconName] || TrendingUp;
          return (
            <div 
              key={idx}
              className="bg-white dark:bg-[#0c162c] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    {ind.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {ind.value}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    {ind.trend}
                  </span>
                  <span className="text-[12px] text-slate-600 dark:text-slate-400 font-medium truncate">
                    {ind.subtext}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span>Fonte: {ind.source}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. RESUMO EXECUTIVO ESTRATÉGICO */}
      <section className="bg-gradient-to-br from-[#0c162c] to-[#122244] rounded-3xl border border-[#1e2a4a] p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
            Resumo Executivo Integrado
          </h2>
        </div>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6 relative z-10 max-w-5xl">
          {CHINA_EXECUTIVE_SUMMARY.message}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {CHINA_EXECUTIVE_SUMMARY.bullets.map((bullet, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-white/10 flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-[15px] text-slate-200 leading-snug font-medium">
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEÇÃO DE GRÁFICOS INTERATIVOS RECHARTS */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Dinâmica Comercial e Investimentos Bilaterais
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Evolução do comércio Brasil-China, pauta exportadora e alocação do Fundo Bilateral
              </p>
            </div>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg self-start sm:self-auto">
            Série Histórica & Projeções
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* GRÁFICO 1: EVOLUÇÃO HISTÓRICA DO COMÉRCIO (BAR CHART) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0c162c] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Corrente de Comércio Bilateral (US$ Bilhões)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Exportações Brasileiras vs Importações da China vs Saldo Comercial
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Exportações</span>
                <span className="w-3 h-3 rounded-full bg-blue-500 inline-block ml-2"></span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Importações</span>
              </div>
            </div>

            <div className="h-[280px] sm:h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHINA_TRADE_HISTORY_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#888888' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#888888' }} unit=" bi" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0c162c', 
                      borderRadius: '12px', 
                      border: '1px solid #1e2a4a',
                      color: '#ffffff',
                      fontSize: '12px'
                    }}
                    formatter={(value: any) => [`US$ ${value} Bi`]}
                  />
                  <Bar dataKey="exportacoes" name="Exportações BR → CN" fill="#10B981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="importacoes" name="Importações BR ← CN" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>Fonte: MDIC / SECEX / Banco Central do Brasil</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Superávit médio anual &gt; US$ 35 Bilhões</span>
            </div>
          </div>

          {/* GRÁFICO 2: COMPOSIÇÃO DAS EXPORTAÇÕES (DONUT/PIE) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#0c162c] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Pauta de Exportação para a China
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Participação por grupo de produtos principais
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <PieChartIcon className="w-4 h-4" />
                </div>
              </div>

              <div className="h-[210px] w-full relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={CHINA_EXPORT_COMMODITIES_SHARE}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {CHINA_EXPORT_COMMODITIES_SHARE.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0c162c', 
                        borderRadius: '10px', 
                        border: '1px solid #1e2a4a',
                        color: '#ffffff',
                        fontSize: '12px'
                      }}
                      formatter={(val: any, name: any) => [`${val}%`, name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Top 3</span>
                  <span className="text-lg font-black text-slate-900 dark:text-white">84,5%</span>
                  <span className="text-[10px] text-slate-500">Commodities</span>
                </div>
              </div>
            </div>

            {/* LEGENDA DETALHADA */}
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
              {CHINA_EXPORT_COMMODITIES_SHARE.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <div className="min-w-0 flex-1">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block truncate">{item.name}</span>
                    <span className="text-[11px] text-slate-500 font-medium">{item.value}% ({item.amount})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GRÁFICO 3: ALOCAÇÃO SETORIAL DO FUNDO BRASIL-CHINA E INVESTIMENTOS DIRETOS */}
        <div className="bg-white dark:bg-[#0c162c] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Fundo Brasil-China: Alocação Estrutural de Recursos (2026–2027)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Direcionamento de capital direto para projetos estruturantes no Brasil
                </p>
              </div>
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-lg">
              Pipeline Estimado: US$ 20 Bilhões
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CHINA_INVESTMENT_SECTORS_DATA.map((item, idx) => {
              const IconSetor = ICON_MAP[item.iconName] || Ship;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 flex flex-col justify-between hover:border-amber-300 dark:hover:border-amber-500/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/60 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300">
                      <IconSetor className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-black text-slate-900 dark:text-white">{item.percentual}%</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{item.setor}</h4>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mb-2">
                      <div 
                        className="bg-amber-500 h-full rounded-full" 
                        style={{ width: `${item.percentual * 2.5}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">{item.valor} em projetos</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 4 VETORES DA TRANSFORMAÇÃO PRODUTIVA CHINESA (COM IMAGENS) */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Pilares da Nova Produtividade Chinesa & Reflexos no Brasil
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Transformação industrial asiática, transição ecológica e conectividade de alta capacidade
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHINA_STRATEGIC_VECTORS.map((vec) => (
            <div 
              key={vec.id}
              className="bg-white dark:bg-[#0c162c] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
            >
              {/* Imagem de Capa */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src={vec.image} 
                  alt={vec.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {vec.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-600 text-white shadow-md">
                    {vec.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-md">
                    {vec.title}
                  </h3>
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-xl text-right shrink-0 border border-white/20">
                    <span className="text-xs font-bold text-white block leading-tight">{vec.stat}</span>
                    <span className="text-[10px] text-slate-300 uppercase">{vec.statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Corpo Informativo */}
              <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {vec.description}
                </p>

                <div className="p-4 rounded-2xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 flex items-start gap-3">
                  <Target className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-700 dark:text-red-400 block mb-0.5">
                      Impacto Lorenzetti
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {vec.impactLorenzetti}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. O QUE ISSO SIGNIFICA PARA A LORENZETTI? (BENTO GRID ESTRATÉGICO) */}
      <section className="bg-white dark:bg-[#0c162c] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                O Que Isso Significa para a Lorenzetti?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Diretrizes de posicionamento industrial, gestão de custos e novos canais comerciais
              </p>
            </div>
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
            Plano Estratégico 2027–2037
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Matérias-Primas */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                1. Insumos & Matérias-Primas
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                A forte demanda chinesa por minerais e commodities metálicas (cobre, alumínio e aço) exige acompanhamento estrito das cotações na LME e contratos de fornecimento antecipado para resguardar as margens industriais.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700 text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
              <span>Ação: Hedge & Gestão de Estoques</span>
            </div>
          </div>

          {/* Card 2: Construção Civil */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                2. Expansão da Construção Civil
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                O Fundo Brasil-China destina capital massivo a ferrovias, portos e novos galpões logísticos, gerando forte demanda por fiações, conduítes, disjuntores e materiais de instalação predial/industrial.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700 text-xs font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1">
              <span>Ação: Parcerias com Construtoras</span>
            </div>
          </div>

          {/* Card 3: Data Centers & IA */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                3. Data Centers & Alta Tecnologia
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                A atração de polos de Inteligência Artificial e Data Centers asiáticos fomenta nichos de alta especificação técnica, como quadros de distribuição reforçados, barramentos blindados e proteção de surtos.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700 text-xs font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
              <span>Ação: Portfólio de Alta Proteção</span>
            </div>
          </div>

          {/* Card 4: Concorrência & Componentes */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                4. Cadeias Globais & Concorrência
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Manter vigilância estratégica sobre a entrada de componentes chineses de baixo custo no mercado local, ao mesmo tempo em que se aproveita a importação qualificada de semicondutores e automação.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700 text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
              <span>Ação: Diferenciação de Marca & Qualidade</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MATRIZ DE ATENÇÃO: OPORTUNIDADES VS RISCOS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CHINA_ATTENTION_POINTS.map((block) => {
          const isPos = block.type === 'positive';
          return (
            <div 
              key={block.id}
              className={`p-6 sm:p-7 rounded-3xl border ${
                isPos 
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900/40' 
                  : 'bg-red-50/40 dark:bg-red-950/10 border-red-200 dark:border-red-900/40'
              } flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isPos ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                  }`}>
                    {isPos ? <TrendingUp className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                  </div>
                  <h3 className={`text-lg font-bold uppercase tracking-wide ${
                    isPos ? 'text-emerald-900 dark:text-emerald-300' : 'text-red-900 dark:text-red-300'
                  }`}>
                    {block.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {block.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div className={`w-2 h-2 rounded-full shrink-0 mt-2 ${
                        isPos ? 'bg-emerald-500' : 'bg-red-500'
                      }`} />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Monitoramento: Mensal</span>
                <span className={isPos ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}>
                  {isPos ? 'Vetor de Expansão' : 'Fator de Mitigação'}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* 8. TENDÊNCIAS DERIVADAS DAS EVIDÊNCIAS */}
      <section className="bg-white dark:bg-[#0c162c] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Tendências Estratégicas Derivadas das Evidências
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Rastreabilidade factual conectando fontes oficiais às decisões corporativas
              </p>
            </div>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg">
            Interpretação Executiva
          </span>
        </div>

        <div className="space-y-6">
          {CHINA_STRATEGIC_TRENDS.map((trend) => (
            <div 
              key={trend.id}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-700/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {trend.title}
                </h3>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-md self-start sm:self-auto">
                  Fontes: {trend.evidenceSource}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                {trend.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    Impacto Brasil
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {trend.brazilImpact}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400 block mb-1">
                    Impacto Lorenzetti
                  </span>
                  <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-bold leading-relaxed">
                    {trend.lorenzettiImpact}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 dark:text-red-300 block mb-1">
                    Relevância Estratégica
                  </span>
                  <p className="text-xs sm:text-sm text-red-950 dark:text-red-200 font-medium leading-relaxed">
                    {trend.relevance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. NOTÍCIAS E EVIDÊNCIAS OFICIAIS (FONTE ORIGINAL) */}
      <section id="evidencias" className="scroll-mt-12 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Evidências e Notícias Originais
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Base documental oficial de suporte às análises estratégicas da China
              </p>
            </div>
          </div>

          {/* Filtro por Tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTagFilter(t)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedTagFilter === t
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {filteredEvidences.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev as any} />
          ))}
        </div>
      </section>

      {/* 10. NOTA METODOLÓGICA DE INTELIGÊNCIA */}
      <div className="flex bg-blue-50/60 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-5 md:p-6 gap-4 items-start">
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
          <Info className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-1">
            Nota Metodológica de Governança Estratégica (China 2027–2037)
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            As projeções e dados apresentados nesta página integram o Planejamento Estratégico Corporativo 2027–2037. As informações são sincronizadas a partir de relatórios do Ministério do Desenvolvimento, Indústria e Comércio (MDIC), Ministério da Fazenda, Ministério das Comunicações, SECEX, CEBC e agências internacionais de economia.
          </p>
        </div>
      </div>
    </div>
  );
};
