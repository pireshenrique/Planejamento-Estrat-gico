import React from 'react';
import { 
  HeartPulse, 
  TrendingUp, 
  ArrowRight, 
  ExternalLink, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Flame, 
  Layers, 
  HelpCircle,
  Radio,
  ShieldAlert
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip, 
  CartesianGrid, 
  ReferenceLine,
  Area,
  ComposedChart
} from 'recharts';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

export interface SaudeMentalViewProps {
  setActivePage?: (page: string) => void;
}

export type SaudeMentalTrabalhoViewProps = SaudeMentalViewProps;

// ============================================================================
// EVIDÊNCIAS DE DESTAQUE (3 PRINCIPAIS COM URLs EXATAS)
// ============================================================================
const SAUDE_MENTAL_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'sm-g1-burnout-800',
    tag: 'Esgotamento / G1',
    dateStr: '01/05/2026',
    title: 'Afastamentos por burnout crescem mais de 800% em quatro anos',
    headline: 'O avanço dos afastamentos associados ao burnout evidencia a crescente relevância do esgotamento relacionado ao trabalho e amplia a discussão sobre prevenção e organização das atividades.',
    source: 'G1 (Trabalho e Carreira)',
    url: 'https://g1.globo.com/trabalho-e-carreira/noticia/2026/05/01/afastamentos-por-burnout-crescem-mais-de-800percent-em-quatro-anos-entenda-o-que-esta-por-tras-do-esgotamento-no-trabalho.ghtml'
  },
  {
    id: 'sm-fundacentro-104-pospandemia',
    tag: 'Previdência Social / Fundacentro',
    dateStr: 'Março de 2026',
    title: 'Benefícios por transtornos mentais mais que dobram após a pandemia',
    headline: 'Dados da Previdência analisados pela Fundacentro mostram crescimento de 104,1% nas concessões por transtornos mentais e comportamentais entre 2019 e 2024.',
    source: 'Fundacentro / Ministério da Previdência',
    url: 'https://www.gov.br/fundacentro/pt-br/comunicacao/noticias/noticias/2026/marco/concessao-de-beneficios-por-transtornos-mentais-e-comportamentais-cresce-mais-de-100-apos-pandemia'
  },
  {
    id: 'sm-exame-gestao-pessoas',
    tag: 'Gestão Estratégica / Exame',
    dateStr: '2026',
    title: 'Saúde mental ganha peso nas decisões sobre trabalho e gestão de pessoas',
    headline: 'As mudanças regulatórias e as novas expectativas dos profissionais ampliam a pressão para que empresas avancem da discussão sobre bem-estar para ações estruturadas de prevenção.',
    source: 'Exame (Bússola)',
    url: 'https://exame.com/bussola/nr-1-muda-regras-de-saude-mental-e-amplia-pressao-da-geracao-z-sobre-empresas/'
  }
];

// ============================================================================
// OUTRAS NOTÍCIAS E MONITORAMENTO (COM URLs EXATAS)
// ============================================================================
const SAUDE_MENTAL_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'sm-fundacentro-fgv-desafio',
    tag: 'Estudo Conceitual / Fundacentro + FGV',
    dateStr: 'Abril de 2026',
    title: 'Saúde mental no trabalho avança como desafio no Brasil',
    headline: 'Pesquisa conjunta entre Fundacentro e FGV-EAESP analisa a multifatorialidade do sofrimento psíquico ocupacional e reforça a necessidade de atuação sistêmica entre indivíduo, organização e ambiente institucional.',
    source: 'Fundacentro / FGV-EAESP',
    url: 'https://www.gov.br/fundacentro/pt-br/comunicacao/noticias/noticias/2026/abril/saude-mental-no-trabalho-avanca-como-desafio-no-brasil'
  },
  {
    id: 'sm-mte-canpat-2026',
    tag: 'Fonte Institucional / CANPAT 2026',
    dateStr: '2026',
    title: 'Prevenção dos riscos psicossociais ganha destaque nacional',
    headline: 'Campanha Nacional de Prevenção de Acidentes do Trabalho (CANPAT) do Ministério do Trabalho e Emprego orienta auditorias fiscais e estabelece diretrizes educativas para ambientes industriais e corporativos.',
    source: 'Ministério do Trabalho e Emprego (MTE)',
    url: 'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/canpat-2/canpat-2025'
  }
];

// ============================================================================
// SÉRIE HISTÓRICA OFICIAL DOS AFASTAMENTOS (2012 A 2024 - INSS / SMARTLAB / FUNDACENTRO)
// ============================================================================
const DADOS_SERIE_HISTORICA = [
  { ano: '2012', valor: 213853, valorFormatado: '213,9 mil', nota: 'Série Histórica' },
  { ano: '2013', valor: 228170, valorFormatado: '228,2 mil', nota: 'Série Histórica' },
  { ano: '2014', valor: 221127, valorFormatado: '221,1 mil', nota: 'Série Histórica' },
  { ano: '2015', valor: 170413, valorFormatado: '170,4 mil', nota: 'Série Histórica' },
  { ano: '2016', valor: 199035, valorFormatado: '199,0 mil', nota: 'Série Histórica' },
  { ano: '2017', valor: 182030, valorFormatado: '182,0 mil', nota: 'Série Histórica' },
  { ano: '2018', valor: 219570, valorFormatado: '219,6 mil', nota: 'Série Histórica' },
  { ano: '2019', valor: 224647, valorFormatado: '224,6 mil', nota: 'Pré-Pandemia' },
  { ano: '2020', valor: 289697, valorFormatado: '289,7 mil', nota: 'Início Pandemia' },
  { ano: '2021', valor: 195486, valorFormatado: '195,5 mil', nota: 'Período Atípico' },
  { ano: '2022', valor: 200588, valorFormatado: '200,6 mil', nota: 'Início da Alta Recente' },
  { ano: '2023', valor: 283345, valorFormatado: '283,3 mil', nota: 'Aceleração Forte' },
  { ano: '2024', valor: 471649, valorFormatado: '471,6 mil', nota: 'Pico Histórico da Série' }
];

// Custom Tooltip para o Gráfico Recharts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 text-white p-3 rounded-xl shadow-xl border border-slate-700 text-xs z-50">
        <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-1.5 mb-1.5">
          <span className="font-bold text-slate-300">Ano {label}</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
            {data.nota}
          </span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-[18px] font-extrabold text-rose-400">
            {data.valor.toLocaleString('pt-BR')}
          </span>
          <span className="text-slate-400 text-[11px]">concessões</span>
        </div>
        <p className="text-[10.5px] text-slate-400 mt-1">
          Transtornos mentais e comportamentais (INSS / SmartLab / Fundacentro)
        </p>
      </div>
    );
  }
  return null;
};

export function SaudeMentalView({ setActivePage }: SaudeMentalViewProps) {
  return (
    <div className="w-full flex flex-col gap-6 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO DA PÁGINA COM 3 CARDS QUANTITATIVOS                          */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Título e Identificação Executiva */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 flex items-center gap-1.5 shadow-xs">
                <Radio className="w-3 h-3 text-rose-600 dark:text-rose-400 animate-pulse" />
                CENÁRIO & SAÚDE OCUPACIONAL
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento 2027–2037</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <HeartPulse className="w-7 h-7 text-rose-600 dark:text-rose-400 shrink-0" />
              Saúde Mental no Trabalho
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              O crescimento dos afastamentos relacionados à saúde mental amplia o debate sobre organização do trabalho, liderança, prevenção e sustentabilidade da força de trabalho.
            </p>
          </div>

          {/* Navegação Rápida entre Subtópicos de SST e Força de Trabalho */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage?.('Carreira e Gerações')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Saúde Mental no Trabalho
            </button>
            <button 
              onClick={() => setActivePage?.('NR-1')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              NR-1 Psicossociais
            </button>
            <button 
              onClick={() => setActivePage?.('Assédio no ambiente de trabalho')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              CIPA+A & Assédio
            </button>
            <button 
              onClick={() => setActivePage?.('Escala 6x1')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Escala 6x1
            </button>
          </div>
        </div>

        {/* 3 Cards Quantitativos no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          {/* CARD 1: 546 MIL Benefícios em 2025 */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                BENEFÍCIOS EM 2025
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  546 MIL
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Dados preliminares apontam 546.254 benefícios concedidos por transtornos mentais e comportamentais em 2025.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Fundacentro / Ministério da Previdência Social
              </p>
            </div>
          </div>

          {/* CARD 2: +104% (2019 -> 2024) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                2019 → 2024
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-amber-600 dark:text-amber-400 leading-none">
                  +104%
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                As concessões relacionadas a transtornos mentais e comportamentais mais que dobraram entre 2019 e 2024.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Fundacentro / Previdência Social
              </p>
            </div>
          </div>

          {/* CARD 3: +800% Burnout em 4 Anos */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                BURNOUT EM QUATRO ANOS
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-orange-600 dark:text-orange-400 leading-none">
                  +800%
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Afastamentos especificamente associados ao burnout cresceram mais de 800% em quatro anos, segundo dados apresentados pelo G1.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                G1 (Trabalho e Carreira)
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Nota Metodológica de Integridade dos Dados */}
      <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            <strong className="text-slate-700 dark:text-slate-300">Rastreabilidade & Integridade dos Dados:</strong> Os indicadores distinguem rigorosamente entre o universo total de <em>“benefícios por transtornos mentais e comportamentais”</em> (INSS/Fundacentro) e o recorte específico de <em>“afastamentos associados ao burnout”</em> (G1).
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TRÊS NOTÍCIAS PRINCIPAIS (ALINHADAS COM URLs REAIS)                    */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais Notícias sobre Saúde Mental no Trabalho
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes das Evidências: <strong>G1 • Fundacentro • Exame</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {SAUDE_MENTAL_PRIMARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4 & 5 & 6. GRÁFICO PRINCIPAL HISTÓRICO + MUDANÇA DE ESCALA + BURNOUT      */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* GRÁFICO HISTÓRICO (2/3 da largura no Desktop = 8 colunas) */}
        <div className="lg:col-span-8 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Série Histórica (2012–2024)
              </span>
              <h3 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">
                Transtornos Mentais Ganham Peso nos Afastamentos
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md shrink-0">
              Fonte: INSS / SmartLab / Fundacentro
            </span>
          </div>

          {/* Destaques Numéricos do Gráfico */}
          <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="text-center">
              <span className="text-[11px] font-bold text-slate-500 uppercase block">2022</span>
              <span className="text-base sm:text-lg font-bold text-slate-700 dark:text-slate-300">200,6 mil</span>
              <span className="text-[10px] text-slate-400 block">Base recente</span>
            </div>
            <div className="text-center border-x border-slate-200 dark:border-slate-800 px-1">
              <span className="text-[11px] font-bold text-amber-600 uppercase block">2023</span>
              <span className="text-base sm:text-lg font-black text-amber-600">283,3 mil</span>
              <span className="text-[10px] text-amber-500/80 block">+41,3% em 1 ano</span>
            </div>
            <div className="text-center">
              <span className="text-[11px] font-bold text-rose-600 uppercase block">2024 (Pico)</span>
              <span className="text-base sm:text-lg font-black text-rose-600">471,6 mil</span>
              <span className="text-[10px] text-rose-500/80 block">Maior valor da série</span>
            </div>
          </div>

          {/* Container do Gráfico Recharts */}
          <div className="h-64 sm:h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={DADOS_SERIE_HISTORICA} margin={{ top: 10, right: 15, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e11d48" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#e11d48" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.6} />
                <XAxis 
                  dataKey="ano" 
                  tickLine={false} 
                  axisLine={{ stroke: '#cbd5e1' }}
                  tick={{ fontSize: 11, fill: '#64748b' }}
                />
                <YAxis 
                  tickLine={false} 
                  axisLine={{ stroke: '#cbd5e1' }}
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`}
                  domain={[150000, 500000]}
                />
                <RechartsTooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="valor" 
                  stroke="#e11d48" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValor)" 
                  activeDot={{ r: 6, fill: '#e11d48', stroke: '#ffffff', strokeWidth: 2 }}
                />
                <ReferenceLine 
                  x="2024" 
                  stroke="#e11d48" 
                  strokeDasharray="3 3" 
                  label={{ value: '471,6 mil', position: 'top', fill: '#e11d48', fontSize: 11, fontWeight: 'bold' }} 
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Callout e Dado Preliminar 2025 Separado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
            
            <div className="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
              <span className="text-[11px] font-bold uppercase text-rose-800 dark:text-rose-300 block mb-0.5">
                Callout Metodológico
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-tight">
                2024 representa o maior valor da série histórica apresentada (471.649 concessões).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400">
                  Dado Preliminar Adicional (2025)
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded">
                  Recorte Próprio
                </span>
              </div>
              <p className="text-xs text-slate-800 dark:text-slate-200 font-bold">
                546.254 benefícios concedidos
              </p>
              <p className="text-[10.5px] text-slate-400 mt-0.5">
                Fonte: Fundacentro / Previdência Social
              </p>
            </div>

          </div>

        </div>

        {/* COLUNA LATERAL: ACELERAÇÃO RECENTE + BURNOUT (4 colunas no Desktop) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* BLOCO 5: UMA MUDANÇA DE ESCALA */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Uma Mudança de Escala
              </span>
              <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                Fundacentro
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-tight">
              Recorte publicado pela Fundacentro (2026) demonstrando a aceleração das concessões:
            </p>

            {/* Escala 2019 -> 2024 */}
            <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
              <div className="flex justify-between items-center text-xs text-slate-600 dark:text-slate-400 mb-1.5">
                <span>2019: <strong>235.935</strong></span>
                <span>2024: <strong>481.476</strong></span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-amber-600 dark:text-amber-400 leading-none">
                  +104,1%
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Mais que dobrou
                </span>
              </div>
            </div>

            {/* 2025 Preliminar */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300">2025: 546.254</span>
                <span className="font-bold text-rose-600">+15,7% vs 2024</span>
              </div>
              <span className="text-[10.5px] text-slate-400 block mt-0.5">
                Dado preliminar do Ministério da Previdência Social
              </span>
            </div>

            <a 
              href="https://www.gov.br/fundacentro/pt-br/comunicacao/noticias/noticias/2026/marco/concessao-de-beneficios-por-transtornos-mentais-e-comportamentais-cresce-mais-de-100-apos-pandemia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11.5px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 pt-1"
            >
              Ver publicação na íntegra (Fundacentro)
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* BLOCO 6: BURNOUT (+800%) */}
          <div className="bg-white dark:bg-[#111827] border border-orange-200 dark:border-orange-900/60 rounded-3xl p-5 shadow-sm space-y-3 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-xl pointer-events-none"></div>

            <div className="flex items-center justify-between pb-2 border-orange-100 dark:border-orange-900/50">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                Burnout: Crescimento em Destaque
              </span>
              <span className="text-[10px] font-bold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-950 px-2 py-0.5 rounded">
                G1
              </span>
            </div>

            <div className="text-center py-2">
              <span className="text-4xl font-black text-orange-600 dark:text-orange-400 tracking-tight leading-none block">
                +800%
              </span>
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 uppercase tracking-wide">
                Crescimento dos Afastamentos em Quatro Anos
              </h4>
            </div>

            {/* Linha Temporal Simples */}
            <div className="p-3 rounded-xl bg-orange-50/60 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/60 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700 dark:text-slate-300">4 ANOS</span>
              <ArrowRight className="w-4 h-4 text-orange-500" />
              <span className="font-extrabold text-orange-600 dark:text-orange-400">+800% de alta</span>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
              <em>Nota técnica:</em> Burnout é um recorte específico e não representa a totalidade dos afastamentos por saúde mental.
            </p>

            <a 
              href="https://g1.globo.com/trabalho-e-carreira/noticia/2026/05/01/afastamentos-por-burnout-crescem-mais-de-800percent-em-quatro-anos-entenda-o-que-esta-por-tras-do-esgotamento-no-trabalho.ghtml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11.5px] font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1 pt-1"
            >
              Matéria completa no G1
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* BLOCO VISUAL: SAÚDE + PRODUTIVIDADE (FLUXO VIRTUOSO vs RISCO POTENCIAL)   */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Dinâmica de Causa e Efeito
              </span>
              <h2 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">
                Saúde e Produtividade: Dois Caminhos Operacionais
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Fluxo Saudável / Virtuoso */}
          <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200 dark:border-emerald-800 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  FLUXO VIRTUOSO (SUSTENTABILIDADE)
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="space-y-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                  <span>CONDIÇÕES DE TRABALHO EQUILIBRADAS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                  <span>SAÚDE E BEM-ESTAR OPERACIONAL</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                  <span>PRESENÇA + ENGAJAMENTO DAS EQUIPES</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                  <span>CONTINUIDADE DAS EQUIPES</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                  <span>PRODUTIVIDADE SUSTENTÁVEL</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="p-2 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                  SUSTENTABILIDADE DA FORÇA DE TRABALHO
                </div>
              </div>
            </div>
          </div>

          {/* Fluxo de Risco Potencial */}
          <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-rose-200 dark:border-rose-800 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300">
                  FLUXO DE RISCO POTENCIAL
                </span>
                <AlertTriangle className="w-4 h-4 text-rose-600" />
              </div>
              <div className="space-y-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-rose-200 dark:border-rose-800 flex items-center justify-between">
                  <span>FATORES DE RISCOS PSICOSSOCIAIS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-rose-200 dark:border-rose-800 flex items-center justify-between">
                  <span>ADOECIMENTO / AFASTAMENTOS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-rose-200 dark:border-rose-800 flex items-center justify-between">
                  <span>ABSENTEÍSMO + TURNOVER</span>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#111827] border border-rose-200 dark:border-rose-800 flex items-center justify-between">
                  <span>PERDA DE CONHECIMENTO TÉCNICO</span>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
                </div>
                <div className="p-2 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold">
                  IMPACTO OPERACIONAL E DE CUSTOS
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              Não representa relação causal inevitável; ilustra o risco potencial a ser mitigado preventivamente.
            </p>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 12. CONEXÃO COM A PÁGINA NR-1 (CARD NAVEGÁVEL INTERNO)                    */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Conexão Conceitual e Regulatória
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Da Análise do Cenário à Conformidade da NR-1
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-blue-100">
            <div className="p-3 rounded-xl bg-white/10 border border-white/15">
              <strong className="block text-white mb-0.5">Saúde Mental no Trabalho</strong>
              <span className="text-blue-200">CENÁRIO: Por que o tema e os afastamentos estão crescendo?</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/15">
              <strong className="block text-white mb-0.5">NR-1 (Capítulo 1.5)</strong>
              <span className="text-blue-200">REGULAÇÃO: Como os riscos psicossociais entram no GRO e PGR?</span>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setActivePage?.('NR-1')}
          className="px-5 py-3 rounded-xl bg-white text-blue-950 font-extrabold text-sm hover:bg-blue-50 transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <span>Entender as mudanças da NR-1</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 13. OUTRAS NOTÍCIAS E MONITORAMENTO                                       */}
      {/* ========================================================================= */}
      <section id="evidencias-complementares" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Outras Notícias e Monitoramento Institucional
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>Fundacentro / FGV-EAESP • Ministério do Trabalho e Emprego</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {SAUDE_MENTAL_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const SaudeMentalTrabalhoView = SaudeMentalView;
export default SaudeMentalView;
