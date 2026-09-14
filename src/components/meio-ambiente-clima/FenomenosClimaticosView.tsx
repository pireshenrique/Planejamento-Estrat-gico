import React from 'react';
import { 
  CloudRain, 
  Thermometer, 
  Droplets, 
  Zap, 
  Target, 
  Search, 
  ArrowUpRight, 
  Activity,
  MapPin,
  AlertTriangle,
  AlertCircle,
  Flame,
  Globe2,
  TrendingUp,
  TrendingDown,
  Coins,
  ShieldCheck,
  Building,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  Clock,
  Truck,
  Wheat,
  Beef,
  Coffee,
  ShoppingBag,
  Compass,
  BarChart3,
  Waves,
  Info,
  Radio,
  HelpCircle,
  Sun,
  Newspaper
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';
import { ElNinoRecordeCharts } from './ElNinoRecordeCharts';

interface FenomenosClimaticosViewProps {
  setActivePage?: (page: string) => void;
  
}

// ============================================================================
// AS 3 PRINCIPAIS NOTÍCIAS (DESTAQUES PRINCIPAIS NO TOPO)
// ============================================================================
const MAIN_TOP_EVIDENCES: Evidence[] = [
  {
    id: 'ev-governo-reforco-13bi',
    tag: 'Ações Governamentais / UOL Economia',
    dateStr: '29/07/2026',
    title: 'Governo anuncia reforço de R$ 1,3 bi para enfrentar efeitos do El Niño',
    headline: 'O governo federal anunciou a liberação de aporte de R$ 1,3 bilhão destinado a ações de contingência, socorro a municípios e enfrentamento dos impactos climáticos do El Niño.',
    source: 'UOL Economia / The News',
    url: 'https://economia.uol.com.br/noticias/redacao/2026/07/29/governo-anuncia-reforco-de-r-13-bi-para-enfrentar-efeitos-do-el-nino.ghtm?utm_source=the_news&utm_medium=newsletter&utm_campaign=30-07-2026&cmpid'
  },
  {
    id: 'ev-onu-g1-2026',
    tag: 'Projeção Global / ONU & OMM',
    dateStr: '03/09/2026',
    title: 'El Niño vai ficar muito forte e deve persistir até fevereiro de 2027, diz ONU',
    headline: 'A Organização Meteorológica Mundial (OMM/ONU) projeta que o fenômeno El Niño atingirá intensidade "muito forte" e deverá persistir pelo menos até fevereiro de 2027, alterando padrões globais de precipitação e temperatura.',
    source: 'G1 / Meio Ambiente (ONU / OMM)',
    url: 'https://g1.globo.com/meio-ambiente/noticia/2026/09/03/el-nino-vai-ficar-muito-forte-e-deve-persistir-ate-fevereiro-de-2027-diz-onu.ghtml'
  },
  {
    id: 'ev-veja-secas-alimentos',
    tag: 'Impactos Globais / Veja',
    dateStr: '2026',
    title: 'El Niño já provoca secas, perdas agrícolas e pressão sobre alimentos em três continentes',
    headline: 'O fenômeno El Niño já desencadeia secas severas, perdas na produtividade agropecuária e pressão de alta sobre os preços dos alimentos em três continentes simultaneamente.',
    source: 'Veja / Agenda Verde',
    url: 'https://veja.abril.com.br/agenda-verde/el-nino-ja-provoca-secas-perdas-agricolas-e-pressao-sobre-alimentos-em-tres-continentes/'
  }
];

// ============================================================================
// DEMAIS NOTÍCIAS (DESLOCADAS PARA O FIM DA PÁGINA)
// ============================================================================
const OTHER_EVIDENCES: Evidence[] = [
  {
    id: 'ev-noaa-roni-2026',
    tag: 'Métrica de Monitoramento / NOAA',
    dateStr: '2026',
    title: 'NOAA adota oficialmente índice RONI para refinar previsões e resposta atmosférica do El Niño',
    headline: 'A NOAA adotou oficialmente em 2026 o índice RONI (Relative Oceanic Niño Index) para refinar as previsões e entender melhor a resposta atmosférica ao aquecimento das águas tropicais no Pacífico.',
    source: 'National Oceanic and Atmospheric Administration (NOAA)',
    url: 'https://www.noaa.gov/news-release/el-nino-forms-expected-to-strengthen-say-noaa-forecasters#:~:text=Past%20El%20Nino%20episodes%20have%20also%20enhanced,forecasting%20El%20Nino%20and%20La%20Nina%20events.'
  },
  {
    id: 'ev-g1-ondas-calor-2026',
    tag: 'Ondas de Calor / G1',
    dateStr: '29/08/2026',
    title: 'El Niño: Brasil deve ter ao menos seis ondas de calor até o fim do ano',
    headline: 'Sob influência do El Niño, projeções meteorológicas apontam que o Brasil deve registrar ao menos seis ondas de calor até o fim do ano, intensificando picos térmicos em diversas regiões do país.',
    source: 'G1 / Meio Ambiente',
    url: 'https://g1.globo.com/meio-ambiente/noticia/2026/08/29/el-nino-brasil-deve-ter-ao-menos-seis-ondas-de-calor-ate-o-fim-do-ano.ghtml'
  },
  {
    id: 'ev-rs-inmet-inundacoes',
    tag: 'Impactos RS / GZH & Inmet',
    dateStr: '08/2026',
    title: 'RS deve enfrentar El Niño "muito forte" e risco de inundações até 2027',
    headline: 'O Inmet projeta que o Rio Grande do Sul deve enfrentar os impactos de um El Niño muito forte, mantendo riscos elevados de cheias de rios, inundações recorrentes e tempestades até 2027.',
    source: 'GZH / Inmet',
    url: 'https://gauchazh.clicrbs.com.br/ambiente/noticia/2026/08/rs-deve-enfrentar-el-nino-muito-forte-e-risco-de-inundacoes-ate-2027-diz-inmet-cmsdopsls00a7013lq3k1b7ng.html'
  },
  {
    id: 'ev-canal-rural-safra',
    tag: 'Impactos RS & Safra / Canal Rural',
    dateStr: '2026',
    title: 'Super El Niño pode ameaçar safra 2026/27 com seca, calor de 40°C e chuva extrema',
    headline: 'Análise técnica detalha as ameaças do Super El Niño para a safra 2026/27 no Rio Grande do Sul e Centro-Sul com alternância de estiagens severas, picos de calor de 40°C e chuvas extremas concentradas.',
    source: 'Canal Rural',
    url: 'https://www.canalrural.com.br/videos/super-el-nino-pode-ameacar-safra-2026-27-com-seca-calor-de-40c-e-chuva-extrema/'
  }
];

export function FenomenosClimaticosView({ setActivePage }: FenomenosClimaticosViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO DA PÁGINA COM NAVEGAÇÃO E 3 CARDS DE INDICADORES PRINCIPAIS   */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Identificação & Navegação */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 flex items-center gap-1.5 shadow-xs">
                <Radio className="w-3 h-3 text-amber-600 dark:text-amber-400 animate-pulse" />
                FENÔMENOS CLIMÁTICOS & EL NIÑO
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento 2027–2037</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <Thermometer className="w-7 h-7 text-amber-600 dark:text-amber-400 shrink-0" />
              Fenômenos Climáticos
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Acompanhamento de anomalias climáticas, regime de chuvas, afluência dos reservatórios e impactos no setor elétrico e na cadeia produtiva nacional.
            </p>
          </div>

          {/* Navegação Rápida entre Temas Relacionados */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage?.('Meio Ambiente e Clima')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral Clima
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Fenômenos Climáticos
            </button>
            <button 
              onClick={() => setActivePage?.('Mudanças Climáticas')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mudanças Climáticas
            </button>
            <button 
              onClick={() => setActivePage?.('Hidrelétricas e reservatórios')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Reservatórios & Hídrico
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo (Conversando diretamente com as 3 Principais Notícias) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          {/* Card 1: R$ 1,3 Bi (Governo anuncia reforço - UOL Economia) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                REFORÇO GOVERNAMENTAL
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  R$ 1,3 Bi
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Aporte federal para enfrentar efeitos do El Niño.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Contingência e socorro a municípios (UOL)
              </p>
            </div>
          </div>

          {/* Card 2: Fev / 2027 (El Niño muito forte - ONU / OMM) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                DURAÇÃO & PROJEÇÃO (ONU)
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  Fev / 2027
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                El Niño "muito forte" projetado pela OMM/ONU.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Persistência prolongada no Pacífico (G1)
              </p>
            </div>
          </div>

          {/* Card 3: 3 Continentes (Secas, perdas e alimentos - Veja) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Globe2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                PRESSÃO EM 3 CONTINENTES
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-amber-600 dark:text-amber-400 leading-none">
                  3 Continentes
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Secas e perdas agrícolas pressionam alimentos.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Impactos simultâneos na produção (Veja)
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. AS 3 PRINCIPAIS NOTÍCIAS EM DESTAQUE NO TOPO                           */}
      {/* ========================================================================= */}
      <section id="principais-noticias" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800">
                Top 3 Destaques
              </span>
              <span className="text-xs text-slate-400">Evidências Estratégicas</span>
            </div>
            <h2 className="text-[18px] font-bold text-slate-900 dark:text-white">
              Principais Notícias sobre o El Niño e Efeitos Globais / Brasil
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>UOL Economia • G1 / ONU • Veja</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {MAIN_TOP_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PAINEL EXPLICATIVO: NOVA MÉTRICA DE MONITORAMENTO — ÍNDICE RONI (NOAA) */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] rounded-3xl border border-amber-200 dark:border-amber-900/40 shadow-sm p-6 lg:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center shrink-0">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                  Métrica Oficial de Monitoramento • NOAA 2026
                </span>
                <span className="text-[12px] text-slate-400 dark:text-slate-500 font-medium">
                  Refinamento de Modelagem Climática
                </span>
              </div>
              <h2 className="text-[21px] md:text-[23px] font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                O que é o Índice RONI e Como Ele Ajuda na Previsão do El Niño
              </h2>
            </div>
          </div>

          <a
            href="https://www.noaa.gov/news-release/el-nino-forms-expected-to-strengthen-say-noaa-forecasters#:~:text=Past%20El%20Nino%20episodes%20have%20also%20enhanced,forecasting%20El%20Nino%20and%20La%20Nina%20events."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold transition-all shadow-xs shrink-0 self-start lg:self-auto"
          >
            <span>Comunicado Oficial NOAA</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Blocos de Explicação Técnica Estruturada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Bloco 1: O Conceito do RONI */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  1. O que é o RONI (Relative ONI)
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                O <strong>RONI (Relative Oceanic Niño Index)</strong> mede a anomalia de temperatura da superfície do mar na região do Niño 3.4 <em>em relação à média de todos os oceanos tropicais globais</em>, e não apenas contra uma média histórica estática.
              </p>
            </div>
            <div className="p-3 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200/50 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-200">
              <strong>Fórmula Conceitual:</strong> Anomalia Local (Niño 3.4) menos a Anomalia Média dos Trópicos Globais.
            </div>
          </div>

          {/* Bloco 2: Por que foi adotado em 2026 */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  2. O Desafio do Aquecimento de Fundo
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Com o aquecimento generalizado dos oceanos pelo aquecimento global, o índice tradicional (ONI) podia indicar águas quentes sem que houvesse o <em>gradiente de temperatura</em> necessário para disparar as mudanças na circulação atmosférica (célula de Walker).
              </p>
            </div>
            <div className="p-3 bg-blue-50/70 dark:bg-blue-950/30 rounded-xl border border-blue-200/50 dark:border-blue-900/40 text-[11px] text-blue-900 dark:text-blue-200">
              <strong>Gradiente Térmico:</strong> O que move os ventos e a chuva é a diferença térmica entre o Pacífico e os demais oceanos.
            </div>
          </div>

          {/* Bloco 3: Como melhora a previsão */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  3. Ganho de Precisão na Previsão
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                O RONI permite aos meteorologistas da NOAA identificar com maior precisão quando o aquecimento do Pacífico realmente forçará a atmosfera, antecipando com maior exatidão a intensidade de eventos de <strong>El Niño</strong> ou <strong>La Niña</strong>.
              </p>
            </div>
            <div className="p-3 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/50 dark:border-emerald-900/40 text-[11px] text-emerald-900 dark:text-emerald-200">
              <strong>Resposta Acoplada:</strong> Evita falsos positivos e aprimora a modelagem de chuvas e estiagens globais.
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. O QUE OBSERVAR NO BRASIL / IMPACTO PARA A EMPRESA (2 COLUNAS 01 E 02) */}
      {/* ========================================================================= */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* Coluna 01: O que observar nos próximos meses */}
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
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      O que observar nos próximos meses
                    </h4>
                    <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-orange-700 dark:text-orange-400 font-semibold">
                        Aporte federal de R$ 1,3 bi, El Niño até fev/2027, ondas de calor e pressão sobre alimentos.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>A liberação e execução do reforço governamental de R$ 1,3 bilhão para socorro e contingência frente ao El Niño (UOL Economia).</li>
                    <li>A confirmação pela OMM/ONU de que o El Niño atingirá classificação "muito forte" e deve persistir até fevereiro de 2027 (ONU / G1).</li>
                    <li>As secas severas e perdas na agropecuária gerando pressão de alta sobre os preços dos alimentos em três continentes (Veja).</li>
                    <li>A previsão de ao menos seis ondas de calor no território brasileiro sob a atuação do El Niño (G1 / Meio Ambiente).</li>
                    <li>O monitoramento da resposta atmosférica do Pacífico através da métrica oficial RONI da NOAA (NOAA).</li>
                    <li>Os riscos elevados de inundações continuadas e cheias no Rio Grande do Sul decorrentes do El Niño muito forte (Inmet / GZH).</li>
                    <li>As ameaças à safra 2026/27 no RS e Centro-Sul com alternância de estiagens, picos de calor de 40°C e chuva extrema (Canal Rural).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coluna 02: Impacto para a Lorenzetti */}
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
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      Impacto para a Lorenzetti
                    </h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Sazonalidade térmica, demanda por pressurização e reposição de materiais hidrossanitários.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>O aporte emergencial federal de R$ 1,3 bilhão e as secas regionais <strong className="text-slate-800 dark:text-slate-200">podem criar oportunidades</strong> para produtos de gestão hídrica, como pressurizadores, bombas e purificadores de água.</li>
                    <li>A persistência do El Niño muito forte até fevereiro de 2027 e a ocorrência de ondas de calor <strong className="text-slate-800 dark:text-slate-200">podem alterar</strong> a sazonalidade de uso e o mix de demanda entre duchas elétricas e aquecedores a gás.</li>
                    <li>A pressão inflacionária nos alimentos decorrente de perdas agrícolas globais <strong className="text-slate-800 dark:text-slate-200">pode influenciar</strong> a renda disponível das famílias, podendo favorecer produtos de alta durabilidade e eficiência energética.</li>
                    <li>O risco elevado de inundações continuadas no Rio Grande do Sul <strong className="text-slate-800 dark:text-slate-200">pode demandar</strong> prontidão na cadeia de suprimentos e logística para reposição de metais e louças na região Sul.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BLOCO COM OS TRÊS GRÁFICOS DO EL NIÑO RECORDE (FOLHA / NOAA / COPERNICUS) */}
      {/* ========================================================================= */}
      <ElNinoRecordeCharts />

      {/* ========================================================================= */}
      {/* 6. INSIGHTS ESTRATÉGICOS PARA LORENZETTI (4 VETORES)                      */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                  Planejamento Estratégico 2027–2037
                </span>
              </div>
              <h2 className="text-[21px] md:text-[23px] font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                Insights Estratégicos para Lorenzetti
              </h2>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-slate-700/80 self-start sm:self-auto">
            Síntese Executiva • <strong>4 Vetores Estratégicos</strong>
          </div>
        </div>

        {/* GRADE DOS 4 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          
          {/* CARD 01 — MAPA DE IMPACTOS NO BRASIL */}
          <div className="bg-white dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-200 dark:border-slate-750 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-all">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  Mapa de Impactos no Brasil
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Efeitos regionais mapeados do El Niño
                </p>
              </div>

              {/* MAPA SIMPLIFICADO DO BRASIL POR REGIÕES */}
              <div className="bg-slate-50/80 dark:bg-slate-900/60 rounded-xl p-3 border border-slate-100 dark:border-slate-800 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 190"
                  className="w-full max-w-[175px] h-auto drop-shadow-xs"
                  aria-label="Mapa esquemático do Brasil por regiões afetadas"
                >
                  {/* Norte & Nordeste */}
                  <path
                    d="M 30,35 C 50,15 110,10 145,20 C 175,28 190,55 180,80 C 160,95 130,85 115,80 C 95,80 70,85 50,75 C 35,65 20,50 30,35 Z"
                    className="fill-teal-500/20 stroke-teal-600 dark:stroke-teal-400 hover:fill-teal-500/30 transition-colors"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <text x="100" y="50" className="text-[9px] font-bold fill-teal-800 dark:fill-teal-200" textAnchor="middle">
                    Norte / Nordeste
                  </text>

                  {/* Centro-Oeste */}
                  <path
                    d="M 50,75 C 70,85 95,80 115,80 C 120,95 118,115 110,125 C 90,130 65,125 55,110 C 45,95 45,85 50,75 Z"
                    className="fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400 hover:fill-amber-500/30 transition-colors"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <text x="85" y="105" className="text-[9px] font-bold fill-amber-800 dark:fill-amber-200" textAnchor="middle">
                    Centro-Oeste
                  </text>

                  {/* Sudeste */}
                  <path
                    d="M 115,80 C 130,85 160,95 155,115 C 145,135 125,140 110,135 C 110,125 118,105 115,80 Z"
                    className="fill-orange-500/20 stroke-orange-600 dark:stroke-orange-400 hover:fill-orange-500/30 transition-colors"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <text x="135" y="112" className="text-[9px] font-bold fill-orange-800 dark:fill-orange-200" textAnchor="middle">
                    Sudeste
                  </text>

                  {/* Sul */}
                  <path
                    d="M 65,128 C 90,128 110,135 105,150 C 95,175 75,182 60,175 C 50,165 52,145 65,128 Z"
                    className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400 hover:fill-blue-500/30 transition-colors"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <text x="80" y="156" className="text-[9px] font-bold fill-blue-800 dark:fill-blue-200" textAnchor="middle">
                    Sul
                  </text>
                </svg>
              </div>

              {/* LEGENDA REGIONAL */}
              <div className="space-y-2 pt-1">
                <div className="flex items-start gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Norte / Nordeste</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                      • Risco de estiagens e secas pontuais
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Centro-Oeste</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                      • Ondas de calor até 40°C e impacto na safra
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Sudeste</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                      • Ao menos 6 ondas de calor até o fim do ano
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Sul (RS)</span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                      • El Niño muito forte e inundações até 2027
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10.5px] text-slate-400 text-center">
              Síntese cartográfica setorial
            </div>
          </div>

          {/* CARD 02 — LINHA DO TEMPO ESTRATÉGICA (HORIZONTE AMPLIADO) */}
          <div className="bg-white dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-200 dark:border-slate-750 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-all">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    Linha do Tempo
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                    2024 → 2037
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Evolução do fenômeno e ciclo de planejamento
                </p>
              </div>

              {/* TIMELINE CONTÍNUA ESTRUTURADA SEM SOBREPOSIÇÃO DE ELEMENTOS */}
              <div className="relative pl-5 space-y-4 pt-1 border-l-2 border-slate-200 dark:border-slate-700 ml-2">
                
                {/* Etapa 1: 2024–2025 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-slate-400 dark:bg-slate-500 ring-4 ring-slate-100 dark:ring-slate-900" />
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-1.5 py-0.2 rounded text-[9.5px] font-black bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      2024–2025
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Histórico & Calibração
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Eventos climáticos extremos e revisão de métricas globais pela NOAA.
                  </p>
                </div>

                {/* Etapa 2: 2026 (Atual) */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-100 dark:ring-amber-950" />
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-1.5 py-0.2 rounded text-[9.5px] font-black bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
                      2026 (Atual)
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Adoção RONI & Ondas de Calor
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ao menos 6 ondas de calor no Brasil e liberação do aporte de R$ 1,3 bi.
                  </p>
                </div>

                {/* Etapa 3: Fev/2027 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-red-500 ring-4 ring-red-100 dark:ring-red-950" />
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-1.5 py-0.2 rounded text-[9.5px] font-black bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800/50">
                      Fev / 2027
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Pico Muito Forte (ONU)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Persistência do El Niño, cheias no RS e pressão sobre a safra 26/27.
                  </p>
                </div>

                {/* Etapa 4: 2027–2032 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-950" />
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-1.5 py-0.2 rounded text-[9.5px] font-black bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                      2027–2032
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Transição & Novos Ciclos
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Oscilação para fases de neutralidade/La Niña e recomposição de reservatórios.
                  </p>
                </div>

                {/* Etapa 5: 2033–2037 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-950" />
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-1.5 py-0.2 rounded text-[9.5px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                      2033–2037
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Planejamento de Longo Prazo
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Resiliência hídrico-energética e adaptação contínua da infraestrutura.
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="bg-amber-50/70 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-900 dark:text-amber-200 leading-snug">
                  OMM/ONU projeta persistência do El Niño muito forte até fevereiro de 2027 no ciclo 2027–2037.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 03 — IMPACTO NA ECONOMIA GLOBAL */}
          <div className="bg-white dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-200 dark:border-slate-750 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-all">
            <div className="space-y-3.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    Impacto na economia global
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Evidências em 3 continentes (Veja)
                  </p>
                </div>
                <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Globe2 className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2.5 pt-0.5">
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750">
                  <div className="w-6 h-6 rounded-lg bg-rose-100 dark:bg-rose-950/60 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                    <Coins className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      Pressão de Preços
                    </span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                      Alta nos preços de alimentos em 3 continentes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750">
                  <div className="w-6 h-6 rounded-lg bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0 mt-0.5">
                    <TrendingDown className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      Perdas na Produção
                    </span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                      Secas e quebras registradas no agronegócio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      Socorro Emergencial
                    </span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                      Aporte de R$ 1,3 bi do governo federal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750">
                  <div className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      Volatilidade da Safra
                    </span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                      Ameaça à safra 2026/27 com seca e calor de 40°C.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                  Secas e eventos extremos elevam custos globais e pressionam cadeias de suprimentos.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 04 — PRESSÃO SOBRE OS PREÇOS DE ALIMENTOS */}
          <div className="bg-white dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-200 dark:border-slate-750 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-all">
            <div className="space-y-3.5">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  Pressão sobre os preços de alimentos
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Setores impactados pelas anomalias
                </p>
              </div>

              <div className="space-y-2.5 pt-0.5">
                
                {/* Grãos */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750">
                  <div className="flex items-start gap-2">
                    <Wheat className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                        Grãos & Safra
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight block">
                        Ameaça à safra 2026/27.
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-red-50 dark:bg-red-950/70 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/60 shrink-0">
                    Alto
                  </span>
                </div>

                {/* Alimentos Básicos */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750">
                  <div className="flex items-start gap-2">
                    <ShoppingBag className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                        Alimentos Básicos
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight block">
                        Pressão em 3 continentes.
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 shrink-0">
                    Moderado
                  </span>
                </div>

                {/* Carnes */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750">
                  <div className="flex items-start gap-2">
                    <Beef className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                        Pecuária
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight block">
                        Custos de ração e estresse térmico.
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-red-50 dark:bg-red-950/70 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/60 shrink-0">
                    Alto
                  </span>
                </div>

                {/* Açúcar / Café */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750">
                  <div className="flex items-start gap-2">
                    <Coffee className="w-4 h-4 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                        Culturas Perenes
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight block">
                        Impacto de calor e secas localizadas.
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 shrink-0">
                    Moderado
                  </span>
                </div>

              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                  Secas e quebras agrícolas podem pressionar o orçamento das famílias e direcionar prioridades de consumo.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 7. OUTRAS NOTÍCIAS E MONITORAMENTO COMPLEMENTAR (FIM DA PÁGINA)          */}
      {/* ========================================================================= */}
      <section id="outras-noticias" className="scroll-mt-12 relative bg-slate-50/60 dark:bg-[#0d131f] p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                  Monitoramento Adicional
                </span>
                <span className="text-xs text-slate-400 font-medium">Evidências Complementares</span>
              </div>
              <h2 className="text-[19px] md:text-[21px] font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                Outras Notícias e Monitoramento
              </h2>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>NOAA • G1 • Inmet / GZH • Canal Rural</strong>
          </div>
        </div>

        {/* GRADE DAS OUTRAS 4 NOTÍCIAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
          {OTHER_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between flex-wrap gap-2">
          <span>
            Todas as evidências mapeadas possuem rastreabilidade documental direta às publicações oficiais.
          </span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Planejamento Estratégico 2027–2037
          </span>
        </div>
      </section>

    </div>
  );
}

export const FenomenosClimaticosViewAlias = FenomenosClimaticosView;
export default FenomenosClimaticosView;
