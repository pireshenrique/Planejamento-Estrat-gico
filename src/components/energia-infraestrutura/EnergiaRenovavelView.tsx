import React, { useState } from 'react';
import { 
  Zap, 
  Sun, 
  Globe, 
  Factory,
  Search, 
  Target, 
  ExternalLink, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle, 
  BatteryCharging, 
  Scale, 
  Layers, 
  ArrowRight,
  ShieldAlert,
  Flame,
  CheckCircle,
  HelpCircle,
  Cpu,
  Car,
  ArrowDown,
  Home,
  Building2,
  FileText,
  Radio
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar,
  Legend,
  CartesianGrid,
  LabelList
} from 'recharts';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface EnergiaRenovavelViewProps {
  setActivePage?: (page: string) => void;
  
  initialTab?: 'global' | 'brasil';
}

// -------------------------------------------------------------
// DADOS — CENÁRIO GLOBAL
// -------------------------------------------------------------
const GLOBAL_EVIDENCES: Evidence[] = [
  {
    id: 'solar-3tw-global-2026',
    tag: 'Capacidade Global / Solar',
    dateStr: 'Início de 2026',
    title: 'Solar ultrapassa 3 TW e lidera expansão mundial das renováveis',
    headline: 'A capacidade solar mundial superou 3 TW no início de 2026, menos de dois anos depois de atingir 2 TW. Em 2025 foram adicionados 664 GW, e a fonte respondeu por 77% de toda a nova capacidade renovável instalada no mundo.',
    source: 'Canal Solar — Mundo supera 3 TW de energia solar',
    url: 'https://canalsolar.com.br/mundo-energia-solar-caem-brasil/'
  },
  {
    id: 'renovaveis-carvao-marco-historico',
    tag: 'Matriz Elétrica Global / Marco Histórico',
    dateStr: 'Outubro 2025',
    title: 'Renováveis ultrapassam carvão na geração elétrica mundial',
    headline: 'A expansão acelerada de solar e eólica levou as fontes renováveis a ultrapassarem o carvão na geração mundial de eletricidade pela primeira vez, reforçando uma mudança estrutural da matriz elétrica global.',
    source: 'G1 — Renováveis ultrapassam carvão pela primeira vez',
    url: 'https://g1.globo.com/economia/noticia/2025/10/07/renovaveis-ultrapassam-carvao-e-se-tornam-maior-fonte-de-energia-eletrica-pela-1a-vez-na-historia.ghtml'
  },
  {
    id: 'wef-transicao-estagnou-3tri',
    tag: 'Transição Energética / Fórum Econômico Mundial',
    dateStr: '2026',
    title: 'Transição recebe US$ 3,3 trilhões, mas infraestrutura freia avanço',
    headline: 'Apesar do volume recorde investido em 2025, o Energy Transition Index 2026, do Fórum Econômico Mundial, aponta estagnação do ritmo global. Tensões geopolíticas, gargalos de infraestrutura e dificuldades de implementação passaram a limitar a transformação dos sistemas energéticos.',
    source: 'CNN Brasil / WEF — Transição energética estagnou apesar de investimento recorde',
    url: 'https://www.cnnbrasil.com.br/infra/transicao-energetica-estagnou-apesar-de-investimento-recorde-diz-relatorio/'
  }
];

const GLOBAL_OTHER_NEWS: Evidence[] = [
  {
    id: 'global-custos-despencam',
    tag: 'Custos de Capital / IRENA',
    dateStr: '2025/2026',
    title: 'Custos de solar e baterias despencam',
    headline: 'Desde 2010, custos instalados caíram 87% para solar fotovoltaica, 55% para eólica terrestre e 93% para baterias de armazenamento, segundo levantamento da IRENA.',
    source: 'CNN Brasil — Custos das renováveis despencam',
    url: 'https://www.cnnbrasil.com.br/infra/custo-de-fontes-renovaveis-de-energia-despenca-em-15-anos-aponta-irena/'
  },
  {
    id: 'global-china-carvao-termica',
    tag: 'Geopolítica Energética / China',
    dateStr: '2026',
    title: 'China volta a ampliar geração térmica',
    headline: 'Mesmo liderando a implantação de renováveis, a China aumentou sua geração térmica em 3,4% nos primeiros cinco meses de 2026, mostrando que segurança energética e crescimento da demanda ainda sustentam combustíveis fósseis.',
    source: 'CNN Brasil — Geração a carvão cresce na China',
    url: 'https://www.cnnbrasil.com.br/economia/geracao-de-energia-a-carvao-na-china-volta-a-crescer-em-2026/'
  }
];

// Dados dos mini-gráficos globais
const GLOBAL_SOLAR_EVOLUTION = [
  { period: '2022', tw: 1.0, label: '1 TW' },
  { period: '2024', tw: 2.0, label: '2 TW' },
  { period: 'Início 2026', tw: 3.0, label: '3 TW' },
];

const GLOBAL_RENEWABLE_SHARE_DETAILED = [
  { name: 'Solar Fotovoltaica', shortName: 'Solar FV', value: 77.0, color: '#F59E0B' },
  { name: 'Eólica (Onshore & Offshore)', shortName: 'Eólica', value: 19.5, color: '#3B82F6' },
  { name: 'Hidrelétrica', shortName: 'Hidro', value: 2.3, color: '#06B6D4' },
  { name: 'Bioenergia / Biomassa', shortName: 'Bioenergia', value: 0.9, color: '#10B981' },
  { name: 'Geotérmica & Outras', shortName: 'Geotérmica/Outras', value: 0.3, color: '#8B5CF6' },
];

const GLOBAL_POWER_GENERATION_MIX = [
  { name: 'Carvão Mineral', shortName: 'Carvão', value: 35.4, color: '#475569' },
  { name: 'Gás Natural', shortName: 'Gás Natural', value: 22.5, color: '#F97316' },
  { name: 'Hidrelétrica', shortName: 'Hidro', value: 14.3, color: '#0284C7' },
  { name: 'Nuclear', shortName: 'Nuclear', value: 9.1, color: '#7C3AED' },
  { name: 'Eólica', shortName: 'Eólica', value: 7.8, color: '#3B82F6' },
  { name: 'Solar Fotovoltaica', shortName: 'Solar FV', value: 5.5, color: '#F59E0B' },
  { name: 'Petróleo e Fósseis', shortName: 'Petróleo', value: 3.0, color: '#64748B' },
  { name: 'Bioenergia e Outras', shortName: 'Bioenergia', value: 2.4, color: '#10B981' },
];

const GLOBAL_COST_DROPS = [
  { tech: 'Baterias', drop: 93, color: '#10B981' },
  { tech: 'Solar FV', drop: 87, color: '#F59E0B' },
  { tech: 'Eólica Onshore', drop: 55, color: '#3B82F6' },
];

// -------------------------------------------------------------
// DADOS — CENÁRIO BRASIL
// -------------------------------------------------------------
const BRASIL_EVIDENCES: Evidence[] = [
  {
    id: 'epe-ben-2026-matriz-renovavel',
    tag: 'EPE / BEN 2026 • Notícia Principal 01',
    dateStr: 'Relatório Síntese 2026 (Ano-base 2025)',
    title: 'Brasil mantém matriz energética próxima de 50% renovável, com forte avanço da energia solar e eólica em 2025',
    headline: 'A matriz elétrica alcançou 86,8% de fontes renováveis, e solar e eólica já representam juntas 26,4% da geração de eletricidade do país. No balanço energético geral (incluindo transportes e indústria), o Brasil sustenta quase metade de todo o seu suprimento por fontes renováveis, consolidando liderança mundial.',
    source: 'EPE — Relatório Síntese do Balanço Energético Nacional (BEN 2026)',
    url: 'https://www.epe.gov.br/pt/imprensa/noticias/epe-publica-o-relatorio-sintese-do-balanco-energetico-nacional-2026'
  },
  {
    id: 'epe-ben-2026-consumo-transportes-eletricidade',
    tag: 'EPE / BEN 2026 • Notícia Principal 02',
    dateStr: 'Relatório Síntese 2026 (Ano-base 2025)',
    title: 'Consumo de energia cresce no Brasil, impulsionado principalmente por transportes e eletricidade',
    headline: 'O consumo energético total avançou 1,1% em 2025, enquanto o setor de transportes cresceu 3,5%, com destaque para o aumento do biodiesel e do etanol. A expansão da demanda por eletricidade nos setores residencial e industrial reforçou a pressão sobre a infraestrutura da rede.',
    source: 'EPE — Relatório Síntese do Balanço Energético Nacional (BEN 2026)',
    url: 'https://www.epe.gov.br/pt/imprensa/noticias/epe-publica-o-relatorio-sintese-do-balanco-energetico-nacional-2026'
  },
  {
    id: 'epe-mme-consumo-eletricidade-3-3-2035',
    tag: 'MME & EPE • Notícia Principal 03',
    dateStr: 'Planejamento Decenal (Horizonte até 2035)',
    title: 'Consumo de eletricidade no Brasil deve crescer em média 3,3% ao ano até 2035, indica estudo do MME e da EPE',
    headline: 'Estudo conjunto do Ministério de Minas e Energia (MME) e da Empresa de Pesquisa Energética (EPE) para o PDE 2035 projeta expansão média da demanda elétrica em 3,3% ao ano até 2035, demandando investimentos contínuos em geração limpa, reforço de transmissão e gestão de carga domiciliar.',
    source: 'MME / EPE — Estudo de Demanda de Eletricidade até 2035',
    url: 'https://www.epe.gov.br/pt/imprensa/noticias/consumo-de-eletricidade-no-brasil-deve-crescer-em-media-3-3-ao-ano-ate-2035-indica-estudo-do-mme-e-da-epe'
  }
];

const BRASIL_OTHER_NEWS: Evidence[] = [
  {
    id: 'brasil-solar-90-conta-2027',
    tag: 'Geração Distribuída / Economia',
    dateStr: '2026',
    title: 'Energia solar já corta 90% da conta de luz e pode dobrar de tamanho no Brasil até 2027',
    headline: 'Com economia de até 90% na conta de energia para residências, comércios e propriedades rurais, a geração própria de energia solar segue em forte expansão no Brasil, com projeções indicando que o segmento pode dobrar de capacidade instalada até 2027.',
    source: 'O Presente Rural — Energia solar já corta 90% da conta de luz',
    url: 'https://opresenterural.com.br/energia-solar-ja-corta-90-da-conta-de-luz-e-pode-dobrar-de-tamanho-no-brasil-ate-2027/'
  },
  {
    id: 'brasil-lcoe-solar-cai-25',
    tag: 'Competitividade & LCOE / IRENA',
    dateStr: '2025/2026',
    title: 'Custo da energia solar cai 25% no Brasil e coloca o país entre os mais competitivos do mundo',
    headline: 'O custo nivelado de energia (LCOE) da solar fotovoltaica caiu 25% no Brasil segundo levantamento internacional da IRENA, posicionando o país entre os ambientes mais competitivos do planeta para geração solar em virtude da alta irradiação e custos decrescentes de equipamentos.',
    source: 'Canal Solar — Custo nivelado (LCOE) de energia solar no Brasil / IRENA',
    url: 'https://canalsolar.com.br/custo-nivelado-lcoe-energia-solar-brasil-irena/'
  },
  {
    id: 'brasil-eletricos-frota-2035-bradesco',
    tag: 'Eletromobilidade / Frota & Combustíveis',
    dateStr: '2026',
    title: 'Elétricos serão 1/3 da frota em 2035 e consumo de combustíveis vai cair 20%',
    headline: 'Relatório do Bradesco BBI projeta avanço substancial dos veículos elétricos e híbridos no país (atingindo até 31% da frota circulante em 2035). O estudo estima queda de 20% no consumo de combustíveis líquidos (gasolina e etanol), gerando novos desafios de arrecadação e uma grande migração para a demanda elétrica.',
    source: 'CNN Brasil / Bradesco BBI & EPE',
    url: 'https://www.cnnbrasil.com.br/infra/eletricos-serao-1-3-da-frota-em-2035-e-consumo-de-combustiveis-vai-cair-20/'
  },
  {
    id: 'brasil-eletromobilidade-pde-2035',
    tag: 'Eletromobilidade Rodoviária / PDE 2035',
    dateStr: '2026',
    title: 'Eletromobilidade avança no país e PDE 2035 projeta expansão da eletrificação no transporte rodoviário',
    headline: 'Nota técnica da EPE para o Plano Decenal de Expansão de Energia (PDE 2035) detalha o avanço da eletrificação veicular no Brasil (já atingindo 16% dos emplacamentos de leves) e projeta os requisitos de infraestrutura para recarga residencial, comercial e em eixos rodoviários.',
    source: 'EPE — Eletromobilidade no Transporte Rodoviário / PDE 2035',
    url: 'https://www.epe.gov.br/pt/imprensa/noticias/eletromobilidade-avanca-no-pais-e-pde-2035-projeta-expansao-da-eletrificacao-no-transporte-rodoviario'
  }
];

// Dados do dashboard de geração e demanda EPE / BEN 2026
const BRASIL_MATRIZ_ELETRICA_2025 = [
  { name: 'Hidrelétrica', value: 52.0, share: '52,0%', gwh: '~312 TWh', color: '#0284C7', type: 'Renovável' },
  { name: 'Eólica', value: 15.0, share: '15,0%', gwh: '~90 TWh', color: '#3B82F6', type: 'Renovável' },
  { name: 'Solar Fotovoltaica', value: 11.4, share: '11,4%', gwh: '~68 TWh', color: '#F59E0B', type: 'Renovável' },
  { name: 'Biomassa & Biogás', value: 8.4, share: '8,4%', gwh: '~50 TWh', color: '#10B981', type: 'Renovável' },
  { name: 'Fóssil, Gás & Nuclear', value: 13.2, share: '13,2%', gwh: '~79 TWh', color: '#64748B', type: 'Convencional' },
];

const BRASIL_SOLAR_SEGMENTOS_2025 = [
  { name: 'Geração Distribuída (GD)', value: 54.3, share: '73,1%', gw: '54,3 GW', color: '#F59E0B', type: 'Telhados & Consumo Próprio' },
  { name: 'Geração Centralizada (GC)', value: 20.0, share: '26,9%', gw: '20,0 GW', color: '#D97706', type: 'Grandes Complexos Solares' },
];

const BRASIL_CONSUMO_SETOR_2025 = [
  { setor: 'Indústria', percentual: 36.1, display: '36,1%', gwh: '~202 TWh', isTarget: false, tag: 'Metalurgia, química, manufatura' },
  { setor: 'Residencial', percentual: 28.2, display: '28,2%', gwh: '~158 TWh', isTarget: true, tag: 'Chuveiros, aquecimento de água e iluminação' },
  { setor: 'Demais setores', percentual: 18.9, display: '18,9%', gwh: '~106 TWh', isTarget: false, tag: 'Agropecuária, iluminação pública e transportes' },
  { setor: 'Comercial', percentual: 16.8, display: '16,8%', gwh: '~94 TWh', isTarget: false, tag: 'Varejo, escritórios e serviços' },
];

const BRASIL_DEMANDA_VEICULOS_ELETRICOS = [
  { ano: '2025', displayAno: '2025 (Atual)', demanda: 0.6, label: '0,6 TWh', frota: '~150 mil', fill: '#94A3B8' },
  { ano: '2028', displayAno: '2028 (Aceleração)', demanda: 1.8, label: '1,8 TWh', frota: '~750 mil', fill: '#60A5FA' },
  { ano: '2031', displayAno: '2031 (Expansão)', demanda: 4.2, label: '4,2 TWh', frota: '~1,9 mi', fill: '#3B82F6' },
  { ano: '2035', displayAno: '2035 (PDE)', demanda: 7.8, label: '7,8 TWh (~12x)', frota: '3,81 mi', fill: '#1D4ED8' },
];

export function EnergiaRenovavelView({ setActivePage, initialTab }: EnergiaRenovavelViewProps) {
  const [activeTab, setActiveTab] = useState<'global' | 'brasil'>(initialTab);
  const [selectedGlobalChip, setSelectedGlobalChip] = useState<string>('Solar');
  const [selectedBrasilChip, setSelectedBrasilChip] = useState<string>('Geração distribuída');
  const [chart2Mode, setChart2Mode] = useState<'renovaveis' | 'matriz_geral'>('renovaveis');
  const [chart1BrasilMode, setChart1BrasilMode] = useState<'matriz' | 'solar_segmentos'>('matriz');

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. CABEÇALHO PADRÃO — FORMATO FENÔMENOS CLIMÁTICOS */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Identificação e Navegação */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 flex items-center gap-1.5 shadow-xs">
                <Radio className="w-3 h-3 text-amber-600 dark:text-amber-400 animate-pulse" />
                ENERGIA RENOVÁVEL & TRANSIÇÃO
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento 2027–2037</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <Sun className="w-7 h-7 text-amber-500 shrink-0" />
              Energia Renovável
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Transição energética global e brasileira: expansão solar fotovoltaica, eólica, descentralização da rede (GD), eletrificação do consumo predial e metas de descarbonização.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-auto pt-2">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
              <button 
                onClick={() => setActivePage?.('Energia e Infraestrutura')}
                className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Visão Geral
              </button>
              <button 
                className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
              >
                Energia Renovável
              </button>
              <button 
                onClick={() => setActivePage?.('Mercado de Carbono')}
                className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Mercado de Carbono
              </button>
              <button 
                onClick={() => setActivePage?.('Marcos Regulatórios')}
                className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Regulatório
              </button>
              <button 
                onClick={() => setActivePage?.('Data Centers')}
                className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Data Centers
              </button>
            </div>

            {/* Alternador minimalista de cenário Brasil / Global */}
            <div className="inline-flex p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1 w-fit">
              <button
                onClick={() => setActiveTab('brasil')}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'brasil'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Cenário Brasil
              </button>
              <button
                onClick={() => setActiveTab('global')}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'global'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Cenário Global
              </button>
            </div>
          </div>
        </div>

        {/* Lado Direito: 3 Cards de Indicadores Quantitativos de Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          {activeTab === 'global' ? (
            <>
              {/* Card 1: 3 TW Global */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                      SOLAR MUNDIAL
                    </p>
                    <a 
                      href="https://canalsolar.com.br/mundo-energia-solar-caem-brasil/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-0.5 font-bold shrink-0"
                    >
                      Fonte <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-[22px] 2xl:text-[24px] font-black text-amber-600 dark:text-amber-400 leading-none">
                      3 TW
                    </h3>
                  </div>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                    Capacidade global instalada em operação.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                    Triplicou em ~4 anos; 664 GW em 2025 (Canal Solar)
                  </p>
                </div>
              </div>

              {/* Card 2: 77% Expansão */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                      LIDERANÇA RENOVÁVEL
                    </p>
                    <a 
                      href="https://canalsolar.com.br/mundo-energia-solar-caem-brasil/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5 font-bold shrink-0"
                    >
                      Fonte <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-[22px] 2xl:text-[24px] font-black text-blue-600 dark:text-blue-400 leading-none">
                      77%
                    </h3>
                  </div>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                    Das novas fontes renováveis adicionadas no mundo.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                    Acréscimos globais recordes de geração limpa em 2025
                  </p>
                </div>
              </div>

              {/* Card 3: US$ 3,3 TRI */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                      INVESTIMENTO GLOBAL
                    </p>
                    <a 
                      href="https://www.cnnbrasil.com.br/infra/transicao-energetica-estagnou-apesar-de-investimento-recorde-diz-relatorio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-0.5 font-bold shrink-0"
                    >
                      Fonte WEF <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-[22px] 2xl:text-[24px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                      US$ 3,3 TRI
                    </h3>
                  </div>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                    Aporte estimado em transição energética global.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                    Necessidades de investimento até 2030 (WEF / IRENA)
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Card 1 Brasil: Relacionado à Notícia 1 (EPE / BEN 2026 - Matriz 86,8% Renovável) */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                      MATRIZ ELÉTRICA (BEN)
                    </p>
                    <a 
                      href="https://www.epe.gov.br/pt/imprensa/noticias/epe-publica-o-relatorio-sintese-do-balanco-energetico-nacional-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-0.5 font-bold shrink-0"
                    >
                      Fonte EPE <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-[22px] 2xl:text-[24px] font-black text-amber-600 dark:text-amber-400 leading-none">
                      86,8%
                    </h3>
                    <span className="text-[10.5px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      ~50% Matriz Total
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                    Renovabilidade da matriz elétrica em 2025.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                    Solar e eólica somam 26,4% da geração (EPE / BEN 2026)
                  </p>
                </div>
              </div>

              {/* Card 2 Brasil: Relacionado à Notícia 2 (EPE / BEN 2026 - Consumo Total +1,1% e Transportes +3,5%) */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                      CONSUMO NACIONAL (EPE)
                    </p>
                    <a 
                      href="https://www.epe.gov.br/pt/imprensa/noticias/epe-publica-o-relatorio-sintese-do-balanco-energetico-nacional-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5 font-bold shrink-0"
                    >
                      Fonte EPE <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-[22px] 2xl:text-[24px] font-black text-blue-600 dark:text-blue-400 leading-none">
                      +1,1%
                    </h3>
                    <span className="text-[10.5px] font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
                      Transportes: +3,5%
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                    Consumo energético total no Brasil.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                    Avanço puxado por transportes, biodiesel e etanol (BEN 2026)
                  </p>
                </div>
              </div>

              {/* Card 3 Brasil: Relacionado à Notícia 3 (MME & EPE - Demanda Eletricidade +3,3% a.a. até 2035) */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                      PROJEÇÃO MME & EPE
                    </p>
                    <a 
                      href="https://www.epe.gov.br/pt/imprensa/noticias/consumo-de-eletricidade-no-brasil-deve-crescer-em-media-3-3-ao-ano-ate-2035-indica-estudo-do-mme-e-da-epe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-0.5 font-bold shrink-0"
                    >
                      Fonte EPE <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-[22px] 2xl:text-[24px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                      +3,3% a.a.
                    </h3>
                    <span className="text-[10.5px] font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded">
                      Até 2035 (PDE)
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                    Crescimento médio do consumo elétrico.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                    Eletrificação e expansão da demanda nacional (PDE 2035)
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

      </div>

      {/* 2. NOTÍCIAS PRINCIPAIS / EVIDÊNCIAS */}
      <section id="evidencias-renovavel" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Evidências & Dados Oficiais
            </span>
            <h2 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">
              3 Notícias Principais {activeTab === 'global' ? '— Cenário Global' : '— Cenário Brasil'}
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {activeTab === 'global' 
              ? 'Fontes: Canal Solar • G1 • CNN Brasil / WEF' 
              : 'Fontes: EPE (Balanço Energético Nacional - BEN 2026) • Ministério de Minas e Energia (MME / PDE 2035)'}
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {(activeTab === 'global' ? GLOBAL_EVIDENCES : BRASIL_EVIDENCES).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* 3. DUAS COLUNAS ANALÍTICAS (01 E 02) — O QUE OBSERVAR E IMPACTOS LORENZETTI */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* 01 — O que observar */}
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
                    {activeTab === 'global' ? 'Monitoramento Internacional' : 'Monitoramento Nacional'}
                  </span>
                  <h4 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-2">
                    01 — O que observar {activeTab === 'global' ? 'no Mundo' : 'no Brasil'}
                  </h4>
                  <div className="inline-flex bg-blue-50/80 dark:bg-blue-950/30 px-3 py-1.5 rounded-lg border border-blue-200/50 dark:border-blue-800/40">
                    <span className="text-[12px] text-blue-800 dark:text-blue-300 font-semibold">
                      {activeTab === 'global' ? 'Cinco Movimentos Estruturais da Matriz Global' : 'Cinco Dinâmicas Operacionais e Regulatórias no Brasil'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chips de Temas */}
              <div className="flex items-center gap-1.5 flex-wrap md:pl-[64px]">
                {(activeTab === 'global' 
                  ? ['Solar', 'Armazenamento', 'Custos', 'Redes', 'China'] 
                  : ['Geração distribuída', 'Curtailment', 'Armazenamento', 'Transmissão', 'Mercado Livre']
                ).map((chip) => {
                  const isSelected = activeTab === 'global' ? selectedGlobalChip === chip : selectedBrasilChip === chip;
                  return (
                    <button
                      key={chip}
                      onClick={() => activeTab === 'global' ? setSelectedGlobalChip(chip) : setSelectedBrasilChip(chip)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>

              {/* Detalhamento dos Tópicos Selecionados */}
              <div className="space-y-3 text-xs md:pl-[64px]">
                {activeTab === 'global' ? (
                  <>
                    <div className={`p-3.5 rounded-xl transition-all border ${selectedGlobalChip === 'Solar' ? 'bg-amber-50/80 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <strong className="text-amber-800 dark:text-amber-300 block mb-1 flex items-center gap-1.5 font-bold text-[12.5px]">
                        ☀️ Solar segue como protagonista
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        A questão deixa progressivamente de ser apenas “quanto solar será instalado?” e passa a ser “como integrar volumes tão grandes de geração variável?”.
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl transition-all border ${selectedGlobalChip === 'Armazenamento' ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <strong className="text-emerald-800 dark:text-emerald-300 block mb-1 flex items-center gap-1.5 font-bold text-[12.5px]">
                        🔋 Armazenamento ganha importância
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        Os sistemas de baterias (BESS) ficaram cerca de 93% mais baratos entre 2010 e 2024, segundo levantamento da IRENA divulgado pela CNN Brasil.
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl transition-all border ${selectedGlobalChip === 'Custos' ? 'bg-blue-50/80 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <strong className="text-blue-800 dark:text-blue-300 block mb-1 flex items-center gap-1.5 font-bold text-[12.5px]">
                        💰 Custos continuam em queda estrutural
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        No mesmo período, o custo instalado da solar fotovoltaica caiu cerca de 87% e o da eólica terrestre, 55%.
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl transition-all border ${selectedGlobalChip === 'Redes' ? 'bg-purple-50/80 dark:bg-purple-950/30 border-purple-300 dark:border-purple-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <strong className="text-purple-800 dark:text-purple-300 block mb-1 flex items-center gap-1.5 font-bold text-[12.5px]">
                        ⚡ Redes e transmissão tornam-se gargalo
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        Expansão de transmissão, distribuição, armazenamento e flexibilidade passa a ser tão relevante quanto adicionar novas usinas.
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl transition-all border ${selectedGlobalChip === 'China' ? 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-300 dark:border-rose-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <strong className="text-rose-800 dark:text-rose-300 block mb-1 flex items-center gap-1.5 font-bold text-[12.5px]">
                        🇨🇳 China continua determinante
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        Vale acompanhar tanto a expansão renovável chinesa quanto a permanência do carvão: nos primeiros cinco meses de 2026, a geração térmica chinesa cresceu 3,4% frente ao mesmo período anterior.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`p-3.5 rounded-xl transition-all border ${selectedBrasilChip === 'Geração distribuída' ? 'bg-amber-50/80 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <strong className="text-amber-800 dark:text-amber-300 block mb-1 flex items-center gap-1.5 font-bold text-[12.5px]">
                        ☀️ Geração distribuída (GD)
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        A solar em telhados ultrapassa 33 GW de potência e continua alterando profundamente a curva diária de carga do Sistema Interligado Nacional (SIN).
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl transition-all border ${selectedBrasilChip === 'Curtailment' ? 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-300 dark:border-rose-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <strong className="text-rose-800 dark:text-rose-300 block mb-1 flex items-center gap-1.5 font-bold text-[12.5px]">
                        ⚡ Curtailment (Cortes de Geração)
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        Cortes operacionais de geração solar e eólica ordenados pelo ONS passam de questão puramente técnica para risco financeiro direto na remuneração dos projetos.
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl transition-all border ${selectedBrasilChip === 'Armazenamento' ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <strong className="text-emerald-800 dark:text-emerald-300 block mb-1 flex items-center gap-1.5 font-bold text-[12.5px]">
                        🔋 Armazenamento em Baterias
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        Baterias ganham importância crucial para absorver excedentes de energia em horários solares e devolvê-la nos horários de ponta noturna.
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl transition-all border ${selectedBrasilChip === 'Transmissão' ? 'bg-purple-50/80 dark:bg-purple-950/30 border-purple-300 dark:border-purple-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <strong className="text-purple-800 dark:text-purple-300 block mb-1 flex items-center gap-1.5 font-bold text-[12.5px]">
                        🏗️ Infraestrutura & Transmissão
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        O governo federal prevê R$ 130 bilhões em investimentos até 2030 associados à modernização de redes de distribuição em contratos renovados em 13 estados.
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl transition-all border ${selectedBrasilChip === 'Mercado Livre' ? 'bg-blue-50/80 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700' : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'}`}>
                      <div className="flex items-center justify-between mb-1">
                        <strong className="text-blue-800 dark:text-blue-300 flex items-center gap-1.5 font-bold text-[12.5px]">
                          🔓 Abertura do Mercado Livre de Energia
                        </strong>
                        <a 
                          href="https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/consumidores-poderao-escolher-fornecedores-de-energia-partir-de-2027" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5 font-bold"
                        >
                          Fonte EBC <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                        A partir de novembro de 2027, consumidores industriais e comerciais de baixa tensão poderão escolher seu fornecedor; demais consumidores, inclusive residenciais, entram a partir de novembro de 2028.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* 02 — Impactos para a Lorenzetti */}
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
                      Eletrificação e Matriz Renovável no Consumo Predial
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 text-slate-700 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                <p className="text-xs">
                  A expansão da geração renovável, da microgeração solar e a digitalização das redes elétricas geram hipóteses observacionais para o portfólio e operação da Lorenzetti:
                </p>

                {/* 3 Níveis Estruturados Lorenzetti */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 flex flex-col justify-between">
                    <div>
                      <strong className="text-red-700 dark:text-red-400 block mb-0.5 font-bold">Aquecimento Solar/Elétrico:</strong>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400">Pode criar oportunidades para sistemas de aquecimento integrados ao perfil de geração solar do imóvel.</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 flex flex-col justify-between">
                    <div>
                      <strong className="text-red-700 dark:text-red-400 block mb-0.5 font-bold">Modulação Eletrônica:</strong>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400">Pode valorizar chuveiros e aquecedores com modulação eletrônica precisa e alta eficiência energética.</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 flex flex-col justify-between">
                    <div>
                      <strong className="text-red-700 dark:text-red-400 block mb-0.5 font-bold">Tarifas Dinâmicas:</strong>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400">Pode demandar acompanhamento contínuo da abertura do mercado livre e tarifas horárias no consumo residencial.</span>
                    </div>
                  </div>
                </div>

                {/* Tags de monitoramento */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Aquecimento elétrico', 'Aquecimento híbrido', 'Eficiência energética', 'Controle eletrônico', 'Integração residencial'].map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-red-100/70 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-bold rounded-md text-[10.5px]">
                      • {tag}
                    </span>
                  ))}
                </div>

                {/* Pergunta Estratégica */}
                <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-2 mt-1">
                  <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider block mb-0.5">
                      Diretriz Estratégica 2027–2037
                    </span>
                    <p className="text-[11.5px] font-semibold text-slate-800 dark:text-slate-200 italic leading-snug">
                      “Como produtos elétricos de aquecimento podem evoluir em um ambiente com geração solar distribuída, tarifas horárias mais dinâmicas, armazenamento e gestão predial inteligente?”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PAINÉIS GRÁFICOS E VISUALIZAÇÕES ESTRUTURADAS (SEM SOBREPOSIÇÕES) */}
      {activeTab === 'global' ? (
        <section className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
              Painel Gráfico Global
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Solar acelera a transformação da matriz elétrica mundial
            </h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Escala em expansão exponencial combinada à redução histórica de custos de capital e baterias de armazenamento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Gráfico 1: Capacidade Solar Mundial */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between min-w-0 overflow-hidden shadow-xs">
              <div>
                <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
                  GRÁFICO 1 — Capacidade Solar Mundial
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                  1 TW → 2 TW → 3 TW (Evolução 2022–2026)
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Capacidade acumulada em gigawatts/terawatts atingindo marcos em tempo recorde.
                </p>

                <div className="w-full h-[240px] min-w-0 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 p-3 overflow-hidden">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={GLOBAL_SOLAR_EVOLUTION} margin={{ top: 25, right: 35, left: 10, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.2} />
                      <XAxis 
                        dataKey="period" 
                        tick={{ fontSize: 11, fill: '#64748b' }} 
                        axisLine={{ stroke: '#cbd5e1' }} 
                        tickLine={false} 
                        tickMargin={8} 
                      />
                      <YAxis 
                        tick={{ fontSize: 10, fill: '#64748b' }} 
                        domain={[0, 3.8]} 
                        unit=" TW" 
                        width={52} 
                        axisLine={false} 
                        tickLine={false} 
                        tickMargin={4} 
                        tickCount={5} 
                      />
                      <RechartsTooltip 
                        formatter={(val: number) => [`${val} TW`, 'Capacidade Global']}
                        contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155', color: '#fff', fontSize: '11px' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="tw" 
                        stroke="#F59E0B" 
                        strokeWidth={3} 
                        dot={{ r: 5, fill: '#F59E0B', stroke: '#fff', strokeWidth: 2 }} 
                        activeDot={{ r: 7 }}
                      >
                        <LabelList dataKey="label" position="top" offset={10} style={{ fontSize: '11px', fontWeight: 'bold', fill: '#d97706' }} />
                      </Line>
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-300 font-medium leading-relaxed">
                ★ <strong>Marco Histórico:</strong> 3 TW alcançados no início de 2026 — a capacidade solar mundial triplicou em aproximadamente 4 anos.
              </div>
            </div>

            {/* Gráfico 2: Métodos de Geração */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between min-w-0 overflow-hidden shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-1 gap-2 flex-wrap">
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    GRÁFICO 2 — Métodos de Geração
                  </span>
                  
                  {/* Alternância entre Novas Renováveis e Matriz Global Total */}
                  <div className="inline-flex p-0.5 rounded-lg bg-slate-200/80 dark:bg-slate-700 text-[10px] font-bold">
                    <button
                      onClick={() => setChart2Mode('renovaveis')}
                      className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                        chart2Mode === 'renovaveis'
                          ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs font-black'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Novas Renováveis
                    </button>
                    <button
                      onClick={() => setChart2Mode('matriz_geral')}
                      className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                        chart2Mode === 'matriz_geral'
                          ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs font-black'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Matriz Global
                    </button>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                  {chart2Mode === 'renovaveis' 
                    ? 'Adições Renováveis: Solar 77% vs 23% Outros'
                    : 'Matriz Global de Geração Elétrica'}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-snug">
                  {chart2Mode === 'renovaveis'
                    ? 'Solar responde por 77% e demais 23% dividem-se em eólica, hidro e biomassa.'
                    : 'Participação percentual de todos os métodos na produção mundial de eletricidade.'}
                </p>

                {/* Gráfico Donut limpo e desobstruído */}
                <div className="w-full h-[240px] min-w-0 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 p-3 flex items-center justify-center overflow-hidden">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                      <Pie
                        data={chart2Mode === 'renovaveis' ? GLOBAL_RENEWABLE_SHARE_DETAILED : GLOBAL_POWER_GENERATION_MIX}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={76}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {(chart2Mode === 'renovaveis' ? GLOBAL_RENEWABLE_SHARE_DETAILED : GLOBAL_POWER_GENERATION_MIX).map((entry, idx) => (
                          <Cell key={`donut-${idx}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        formatter={(val: number, name: string) => [`${val}%`, name]}
                        contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155', color: '#fff', fontSize: '11px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Detalhamento dos Métodos com Legenda Fora do Gráfico */}
              {chart2Mode === 'renovaveis' ? (
                <div className="mt-4 pt-2 border-t border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] bg-slate-100/80 dark:bg-slate-800 p-2 rounded-lg border border-slate-200/70 dark:border-slate-700/70">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Solar FV:
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">77,0%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Eólica:
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">19,5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Hidro:
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">2,3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Bioenergia:
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">0,9%</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 text-center">
                    Fonte: IRENA / Canal Solar
                  </div>
                </div>
              ) : (
                <div className="mt-4 pt-2 border-t border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] bg-slate-100/80 dark:bg-slate-800 p-2 rounded-lg border border-slate-200/70 dark:border-slate-700/70">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Carvão:
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">35,4%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Gás Natural:
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">22,5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span> Hidrelétrica:
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">14,3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Solar FV:
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">5,5%</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 text-center">
                    Fonte: IEA / Ember Global Electricity Review
                  </div>
                </div>
              )}
            </div>

            {/* Gráfico 3: Queda dos Custos (2010–2024) */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between min-w-0 overflow-hidden shadow-xs">
              <div>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                  GRÁFICO 3 — Queda dos Custos (2010–2024)
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                  Custo Instalado / Levantamento IRENA
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Evolução percentual de barateamento de equipamentos.
                </p>

                <div className="w-full h-[240px] min-w-0 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 p-3 overflow-hidden">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={GLOBAL_COST_DROPS} layout="vertical" margin={{ top: 15, right: 65, left: 10, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#94a3b8" strokeOpacity={0.2} />
                      <XAxis 
                        type="number" 
                        domain={[0, 100]} 
                        unit="%" 
                        tick={{ fontSize: 10, fill: '#64748b' }} 
                        axisLine={{ stroke: '#cbd5e1' }} 
                        tickLine={false} 
                        tickMargin={8} 
                      />
                      <YAxis 
                        type="category" 
                        dataKey="tech" 
                        tick={{ fontSize: 11, fill: '#64748b', fontWeight: 600 }} 
                        axisLine={false} 
                        tickLine={false} 
                        width={105} 
                        tickMargin={6} 
                      />
                      <RechartsTooltip 
                        formatter={(val: number) => [`-${val}%`, 'Queda no Custo']}
                        contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155', color: '#fff', fontSize: '11px' }}
                      />
                      <Bar dataKey="drop" radius={[0, 6, 6, 0]} barSize={22}>
                        {GLOBAL_COST_DROPS.map((entry, idx) => (
                          <Cell key={`bar-${idx}`} fill={entry.color} />
                        ))}
                        <LabelList 
                          dataKey="drop" 
                          position="right" 
                          offset={8} 
                          formatter={(val: number) => `-${val}%`} 
                          style={{ fontSize: '11px', fontWeight: 'bold', fill: '#475569' }} 
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 text-xs text-emerald-900 dark:text-emerald-300 font-medium leading-relaxed">
                🔋 <strong>Armazenamento viabilizado:</strong> Queda de 93% no custo das baterias de lítio e 87% na solar acelera a competitividade de sistemas híbridos e flexibilidade de rede.
              </div>
            </div>

          </div>

          {/* Faixa de Síntese */}
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-black text-amber-900 dark:text-amber-300">
                ESCALA ↑ + CUSTO ↓ = renováveis avançam rapidamente
              </span>
            </div>
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-medium">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Novo desafio: integrar geração variável por meio de redes, armazenamento e flexibilidade.</span>
            </div>
          </div>
        </section>
      ) : null}

      {/* 5. OUTRAS NOTÍCIAS E MONITORAMENTO */}
      <section>
        <div className="flex items-center justify-between mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Acompanhamento Complementar
            </span>
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">
              Outras Notícias e Evidências {activeTab === 'global' ? '— Cenário Global' : '— Cenário Brasil'}
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            {activeTab === 'global' ? `${GLOBAL_OTHER_NEWS.length} evidências registradas` : `${BRASIL_OTHER_NEWS.length} evidências registradas`}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(activeTab === 'global' ? GLOBAL_OTHER_NEWS : BRASIL_OTHER_NEWS).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const EnergiaRenovavelViewAlias = EnergiaRenovavelView;
export default EnergiaRenovavelView;
