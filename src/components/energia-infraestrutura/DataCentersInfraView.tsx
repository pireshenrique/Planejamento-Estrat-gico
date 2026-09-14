import React from 'react';
import { 
  Server, 
  Zap, 
  Cpu, 
  Activity, 
  Leaf, 
  MapPin, 
  ArrowRight, 
  ArrowDown, 
  TrendingUp, 
  ExternalLink, 
  AlertCircle, 
  ShieldCheck, 
  DollarSign, 
  Building2, 
  Car, 
  FlaskConical, 
  CheckCircle2, 
  HelpCircle,
  FileText,
  Clock,
  Sparkles,
  Search,
  Target,
  Layers,
  Radio
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip, 
  Cell, 
  CartesianGrid, 
  LabelList 
} from 'recharts';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface DataCentersViewProps {
  setActivePage?: (page: string) => void;
  
}

// ----------------------------------------------------------------------------
// EVIDÊNCIAS / NOTÍCIAS PRINCIPAIS (LAYOUT PADRÃO VIA EVIDENCECARD)
// ----------------------------------------------------------------------------
const DATA_CENTERS_EVIDENCES: Evidence[] = [
  {
    id: 'dc-infomoney-100bi',
    tag: 'Mercado & IA / Infraestrutura',
    dateStr: '2025/2026',
    title: 'Data centers de IA podem destravar R$ 100 bilhões por ano no Brasil',
    headline: 'A expansão acelerada da inteligência artificial transforma data centers de uma pauta puramente computacional em uma nova frente de infraestrutura pesada, mobilizando grandes blocos de geração de energia, expansão da rede de transmissão, construção civil e captação no mercado de capitais.',
    source: 'InfoMoney',
    url: 'https://www.infomoney.com.br/mercados/data-centers-da-ia-podem-destravar-r-100-bi-por-ano-no-brasil-quais-acoes-ganharao/'
  },
  {
    id: 'dc-epe-planejamento-eletrico',
    tag: 'Planejamento Setorial / EPE',
    dateStr: '2025/2026',
    title: 'Data centers entram no planejamento elétrico brasileiro',
    headline: 'A rápida expansão dos pedidos de conexão de data centers passa a ser tratada como prioridade no planejamento do Sistema Interligado Nacional. A elevada demanda contínua por potência exige planejamento fino e coordenação com a infraestrutura de transmissão e distribuição local.',
    source: 'EPE — Empresa de Pesquisa Energética',
    url: 'https://www.epe.gov.br/pt/areas-de-atuacao/energia-eletrica/consumo-de-energia-el%C3%A9trica/consumo-de-data-centers'
  },
  {
    id: 'dc-epe-workshop-sp-ne',
    tag: 'Grandes Cargas / EPE Workshop',
    dateStr: '2025/2026',
    title: 'Novos projetos exigem expansão da transmissão em São Paulo e no Nordeste',
    headline: 'Estudo apresentado no workshop da EPE indica concentração de 8,8 GW de potenciais grandes cargas no estado de São Paulo e o registro de 30 novos projetos de data centers no Nordeste, totalizando 8,3 GW de interesse de carga até 2038, demandando novos bipolos e subestações.',
    source: 'EPE (Workshop Grandes Cargas)',
    url: 'https://www.epe.gov.br/pt/imprensa/noticias/workshop-da-epe-aborda-planejamento-da-transmissao-de-energia-para-conectar-grandes-cargas'
  }
];

// Outras Notícias e Monitoramento (Layout Padrão EvidenceCard)
const DATA_CENTERS_OTHER_EVIDENCES: Evidence[] = [
  {
    id: 'dc-istoedinheiro-dobrar-2030',
    tag: 'Mercado & Capacidade',
    dateStr: '2025/2026',
    title: 'Mercado de data centers no Brasil deve dobrar até 2030',
    headline: 'A expansão da infraestrutura digital impulsionada por inteligência artificial aumenta simultaneamente as perspectivas de investimento e a pressão sobre a infraestrutura elétrica nacional.',
    source: 'IstoÉ Dinheiro',
    url: 'https://istoedinheiro.com.br/infraestrutura-digital-brasil-expansao-data-centers-pressao-setor-eletrico'
  },
  {
    id: 'dc-infomoney-azquest-1tri',
    tag: 'Projeção de Mercado / AZ Quest',
    dateStr: '2025/2026',
    title: 'Data centers podem trazer US$ 1 trilhão para o Brasil em cinco anos, projeta AZ Quest',
    headline: 'A estimativa da gestora AZ Quest demonstra o elevado nível de expectativa financeira em torno da expansão de infraestrutura digital no país (projeção privada de mercado; não representa estimativa oficial de governo).',
    source: 'InfoMoney / AZ Quest',
    url: 'https://www.infomoney.com.br/onde-investir/data-centers-podem-trazer-us-1-tri-para-o-brasil-em-5-anos-projeta-az-quest/'
  },
  {
    id: 'dc-poder360-1-3bi-financiamento',
    tag: 'Financiamento Público / Governo',
    dateStr: '2025/2026',
    title: 'Governo libera R$ 1,3 bilhão para financiar data centers',
    headline: 'O financiamento público adiciona nova dimensão à expansão do setor, aproximando infraestrutura digital de políticas industriais, de inovação e de desenvolvimento econômico.',
    source: 'Poder360',
    url: 'https://www.poder360.com.br/poder-governo/governo-libera-r-13-bilhao-para-financiar-data-centers'
  },
  {
    id: 'dc-metropoles-incentivos-2026',
    tag: 'Legislação & Incentivos / Congresso',
    dateStr: '2026',
    title: 'Câmara aprova projeto que permite incentivos a data centers já em 2026',
    headline: 'A Câmara dos Deputados aprovou projeto de lei que autoriza a concessão de incentivos fiscais e regulatórios para atração e expansão de data centers no país com vigência já a partir de 2026, associando a infraestrutura de inteligência artificial a regimes especiais de estímulo e transição energética.',
    source: 'Metrópoles',
    url: 'https://www.metropoles.com/brasil/camara-aprova-projeto-que-permite-incentivos-a-data-centers-ja-em-2026'
  }
];

// Dados do Gráfico: Demanda potencial de projetos mapeada no Brasil (EPE GPL-018)
const DEMANDA_POTENCIAL_DATA = [
  {
    periodo: 'Setembro 2024',
    gw: 9.0,
    label: '9,0 GW',
    fill: '#64748b'
  },
  {
    periodo: 'Fevereiro 2025',
    gw: 15.7,
    label: '15,7 GW',
    fill: '#0284c7'
  }
];

export function DataCentersView({ setActivePage }: DataCentersViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO PADRÃO — IDENTIFICAÇÃO, TABS E 3 TOP METRIC CARDS           */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Lado Esquerdo: Identificação e Navegação */}
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Energia e Infraestrutura • Subtópico
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">•</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              Planejamento Estratégico 2027–2037
            </span>
          </div>
          
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-3">
            <Server className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0" />
            Data Centers
          </h1>
          
          <p className="text-[15px] md:text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            A expansão da inteligência artificial transforma data centers em grandes consumidores contínuos de eletricidade e posiciona energia limpa, disponibilidade de rede e infraestrutura como fatores estratégicos para atração de investimentos.
          </p>

          {/* Subtopic Switcher Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage?.('Energia e Infraestrutura')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Energia e Infraestrutura (Principal)
            </button>
            <button 
              onClick={() => setActivePage?.('Energia Renovável')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Energia Renovável
            </button>
            <button 
              onClick={() => setActivePage?.('Mercado de Carbono')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mercado de Carbono
            </button>
            <button 
              onClick={() => setActivePage?.('Marcos Regulatórios')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Marcos Regulatórios
            </button>
            <button 
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Data Centers
            </button>
          </div>
        </div>

        {/* Lado Direito: 3 CARDS QUANTITATIVOS NO TOPO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full flex-1">
          
          {/* Card 1: 15,7 GW */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-start gap-3.5 h-full">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/40 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40">
              <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  DEMANDA POTENCIAL
                </p>
                <a 
                  href="https://www.epe.gov.br/sites-pt/publicacoes-dados-abertos/publicacoes/PublicacoesArquivos/publicacao-458/topico-801/GPL-018.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5 font-bold"
                >
                  Fonte <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <h3 className="text-[22px] 2xl:text-[24px] font-black text-blue-600 dark:text-blue-400 leading-none my-1">
                15,7 GW
              </h3>
              <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight mb-1">
                Horizonte até 2037 (EPE)
              </p>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug">
                Demanda potencial de projetos mapeados, e não capacidade já instalada.
              </p>
            </div>
          </div>

          {/* Card 2: 8,8 GW */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-start gap-3.5 h-full">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900/40">
              <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  SÃO PAULO / SUDESTE
                </p>
                <a 
                  href="https://www.epe.gov.br/pt/imprensa/noticias/workshop-da-epe-aborda-planejamento-da-transmissao-de-energia-para-conectar-grandes-cargas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-0.5 font-bold"
                >
                  Fonte <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <h3 className="text-[22px] 2xl:text-[24px] font-black text-emerald-600 dark:text-emerald-400 leading-none my-1">
                8,8 GW
              </h3>
              <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight mb-1">
                Grandes Cargas Mapeadas
              </p>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug">
                Identificação em estudos da EPE para atendimento às subestações metropolitanas de SP.
              </p>
            </div>
          </div>

          {/* Card 3: R$ 120 BI */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-start gap-3.5 h-full">
            <div className="w-10 h-10 bg-purple-50 dark:bg-purple-950/40 rounded-xl flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-900/40">
              <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-[11px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider">
                  TRANSMISSÃO 2035
                </p>
                <a 
                  href="https://www.epe.gov.br/pt/imprensa/noticias/mme-e-epe-preveem-investimentos-de-cerca-de-r-120-bilhoes-para-o-sistema-de-transmissao-ate-o-ano-de-2035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center gap-0.5 font-bold"
                >
                  Fonte <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <h3 className="text-[22px] 2xl:text-[24px] font-black text-purple-600 dark:text-purple-400 leading-none my-1">
                R$ 120 bi
              </h3>
              <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight mb-1">
                Investimentos Planejados
              </p>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug">
                Expansão de linhas e subestações para escoamento e grandes cargas até 2035 (EPE/MME).
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* MENSAGEM CONECTANDO OS TRÊS INDICADORES */}
      <div className="bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 flex items-center justify-center">
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-700 rounded-lg shadow-xs">
            <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            DATA CENTERS ↑
          </span>
          <span className="text-blue-500 dark:text-blue-400 font-black">→</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-700 rounded-lg shadow-xs">
            <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            DEMANDA DE POTÊNCIA ↑
          </span>
          <span className="text-blue-500 dark:text-blue-400 font-black">→</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-700 rounded-lg shadow-xs">
            <Activity className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            INFRAESTRUTURA ELÉTRICA ↑
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. NOTÍCIAS PRINCIPAIS / EVIDÊNCIAS DESTAQUE (LAYOUT PADRÃO EVIDENCECARD) */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Evidências Oficiais & Notícias Estratégicas
            </span>
            <h2 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">
              3 Notícias Principais
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>InfoMoney • EPE (Consumo & Workshop de Grandes Cargas)</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {DATA_CENTERS_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DUAS COLUNAS ANALÍTICAS PADRÃO (01 E 02)                               */}
      {/* ========================================================================= */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* 01 — O que observar nos próximos meses */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-blue-100 dark:border-blue-900/30 p-8 shadow-sm flex flex-col justify-between">
            <div className="absolute top-8 right-8 text-[44px] font-bold text-blue-50 dark:text-blue-900/20 leading-none pointer-events-none select-none">
              01
            </div>

            <div className="flex flex-col gap-5 relative z-10 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center shrink-0">
                  <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="pt-1 pr-12">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Diretrizes de Monitoramento
                  </span>
                  <h4 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-2">
                    01 — O que observar
                  </h4>
                  <div className="inline-flex bg-blue-50/80 dark:bg-blue-950/30 px-3 py-1.5 rounded-lg border border-blue-200/50 dark:border-blue-800/40">
                    <span className="text-[12px] text-blue-800 dark:text-blue-300 font-semibold">
                      5 Pilares Estruturais para o Ciclo 2027–2037
                    </span>
                  </div>
                </div>
              </div>

              {/* 5 Pilares de Monitoramento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:pl-[64px] pt-1">
                
                <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-blue-800 dark:text-blue-300 mb-1">
                      <Cpu className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>IA & Capacidade Computacional:</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      A expansão da inteligência artificial aumenta a necessidade de processamento e intensifica a demanda energética contínua dos data centers.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-blue-800 dark:text-blue-300 mb-1">
                      <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Potência Local e Conexão:</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      Para grandes data centers, não basta energia na matriz: é obrigatório existir potência garantida no ponto geográfico e margem em subestações.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-blue-800 dark:text-blue-300 mb-1">
                      <Activity className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>Transmissão & Gargalos de Rede:</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      Novas linhas, reforços e leilões determinam a viabilidade temporal e a localização prioritária dos investimentos.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-blue-800 dark:text-blue-300 mb-1">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Vantagem Renovável Nacional:</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      A elevada participação renovável do Brasil representa diferencial competitivo para hiperscalers com metas globais de emissão líquida zero.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex flex-col justify-between sm:col-span-2">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-blue-800 dark:text-blue-300 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>Localização Estratégica (SP vs. Nordeste):</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      São Paulo concentra conexões digitais e maior proximidade dos usuários, enquanto o Nordeste combina abundante geração solar/eólica com novas conexões costeiras.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* 02 — Hipóteses de Impacto para a Lorenzetti */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-8 shadow-sm flex flex-col justify-between">
            <div className="absolute top-8 right-8 text-[44px] font-bold text-red-50 dark:text-red-900/20 leading-none pointer-events-none select-none">
              02
            </div>

            <div className="flex flex-col gap-5 relative z-10 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-red-500 dark:text-red-400" />
                </div>
                
                <div className="pt-1 pr-12">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    Planejamento Estratégico Lorenzetti
                  </span>
                  <h4 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-2">
                    02 — Impactos para a Lorenzetti
                  </h4>
                  <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg border border-red-200/50 dark:border-red-800/40">
                    <span className="text-[12px] text-red-800 dark:text-red-300 font-semibold">
                      Nova Competição por Infraestrutura Elétrica e Potência
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 text-slate-700 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                <p className="text-xs">
                  A entrada de data centers de grande porte no Sistema Interligado Nacional <strong className="text-slate-900 dark:text-white">pode gerar impactos observacionais</strong> relevantes para as unidades fabris e estratégia comercial da Lorenzetti:
                </p>

                {/* 3 Níveis Estruturados Lorenzetti */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40">
                    <strong className="text-red-700 dark:text-red-400 block mb-0.5 font-bold">Custo de Energia:</strong>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">
                      Pode alterar a dinâmica de contratação no ACL (Mercado Livre) e precificação regional de energia firme.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40">
                    <strong className="text-red-700 dark:text-red-400 block mb-0.5 font-bold">Disponibilidade:</strong>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">
                      Pode criar disputa por potência e margem de conexão em subestações metropolitanas de São Paulo.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40">
                    <strong className="text-red-700 dark:text-red-400 block mb-0.5 font-bold">Infraestrutura:</strong>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">
                      Pode demandar acompanhamento de reforços de rede de distribuição nas zonas industriais da capital e interior.
                    </span>
                  </div>
                </div>

                {/* Pergunta Estratégica em Destaque */}
                <div className="mt-2 p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-1">
                  <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400 font-bold text-[11px] uppercase tracking-wider">
                    <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                    Pergunta Estratégica para Diretoria
                  </div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white leading-snug">
                    “Como a expansão de novas cargas eletrointensivas pode alterar custos, disponibilidade de potência e infraestrutura nas regiões industriais relevantes para a Lorenzetti?”
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ========================================================================= */}
      {/* 7. OUTRAS NOTÍCIAS E MONITORAMENTO (LAYOUT PADRÃO EVIDENCECARD)            */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Acompanhamento de Mercado e Regulação
            </span>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Outras Notícias e Monitoramento Complementar
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Fontes: <strong>IstoÉ Dinheiro • InfoMoney / AZ Quest • Poder360 • Metrópoles</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {DATA_CENTERS_OTHER_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const DataCentersInfraView = DataCentersView;
export const DataCentersViewAlias = DataCentersView;
export default DataCentersView;
