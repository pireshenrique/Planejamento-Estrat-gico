import React from 'react';
import { 
  TrendingUp, 
  Target, 
  Search, 
  Globe2, 
  Thermometer, 
  Activity, 
  CloudLightning,
  ShieldCheck,
  Zap,
  Droplets,
  Building2,
  Scale,
  Calendar,
  Layers,
  FileText,
  Radio,
  ExternalLink,
  Newspaper
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';
import { BrasilImpactosClimaticosVisual } from './BrasilImpactosClimaticosVisual';

interface MudancasClimaticasViewProps {
  setActivePage?: (page: string) => void;
}

// ============================================================================
// AS 3 PRINCIPAIS NOTÍCIAS (TOP 3 NO TOPO)
// ============================================================================
const TOP_3_MUDANCAS_EVIDENCES: Evidence[] = [
  {
    id: 'ev-folha-desastres-28bi-2025',
    tag: 'Economia & Perdas • Folha de S.Paulo',
    dateStr: '05/02/2026',
    title: 'Desastres climáticos causaram R$ 28,4 bilhões em prejuízos no Brasil em 2025',
    headline: 'Eventos climáticos extremos provocaram aproximadamente US$ 5,4 bilhões (R$ 28,4 bilhões) em perdas econômicas no Brasil em 2025, segundo levantamento da Aon. As secas responderam por 88% das perdas, mostrando como extremos climáticos já representam um risco econômico relevante para o país.',
    source: 'Folha de S.Paulo / Aon',
    url: 'https://www1.folha.uol.com.br/ambiente/2026/02/desastres-climaticos-causaram-prejuizos-de-r-28-bilhoes-ao-brasil-em-2025-diz-relatorio.shtml'
  },
  {
    id: 'ev-omm-11-anos-recorde-2025',
    tag: 'Climatologia Global • OMM/WMO',
    dateStr: '2025 / 2026',
    title: 'Últimos 11 anos confirmam mudança estrutural do clima global',
    headline: 'A OMM confirmou que 2015–2025 foram os 11 anos mais quentes já registrados. Em 2025, a temperatura ficou aproximadamente 1,43°C acima do período pré-industrial, acompanhada por recordes de calor oceânico e extremos climáticos.',
    source: 'OMM / WMO (World Meteorological Organization)',
    url: 'https://wmo.int/'
  },
  {
    id: 'ev-omm-america-latina-extremos-2025',
    tag: 'Extremos Hídricos • OMM Regional',
    dateStr: '2025 / 2026',
    title: 'América Latina enfrenta ciclo cada vez mais extremo entre secas e chuvas intensas',
    headline: 'A OMM registra aumento de extremos hídricos na região, combinando calor, secas persistentes, precipitações intensas, retração de geleiras e elevação do nível do mar. Os efeitos alcançam agricultura, infraestrutura, energia e economias.',
    source: 'OMM / WMO (Relatório Regional América Latina e Caribe)',
    url: 'https://wmo.int/'
  }
];

// ============================================================================
// OUTRAS NOTÍCIAS E MONITORAMENTO COMPLEMENTAR (INTEGRAÇÃO DE IMPACTOS)
// ============================================================================
const OTHER_MUDANCAS_EVIDENCES: Evidence[] = [
  {
    id: 'ev-cnn-municipios-desastres-hidricos',
    tag: 'Desastres Hídricos • CNN Brasil',
    dateStr: '15/07/2026',
    title: 'Nove em cada dez municípios brasileiros já sofreram desastres relacionados à água',
    headline: 'Estudo de Cemaden, INPE, USP e UFSCar mostra que 90% dos municípios brasileiros já registraram pelo menos um desastre relacionado à água, incluindo inundações, secas, tempestades e deslizamentos. Mais de 20% das cidades já enfrentaram três das quatro categorias analisadas.',
    source: 'CNN Brasil (Cemaden, INPE, USP e UFSCar)',
    url: 'https://www.cnnbrasil.com.br/nacional/brasil/nove-em-cada-10-municipios-brasileiros-ja-sofreram-com-desastres-hidricos/'
  },
  {
    id: 'ev-cnn-ondas-calor-120mil-mortes',
    tag: 'Saúde Pública • CNN Brasil',
    dateStr: '17/06/2026',
    title: 'Ondas de calor estão associadas a 120 mil mortes no Brasil em 20 anos',
    headline: 'Estudo baseado em registros do SUS de 5.566 municípios identificou pelo menos 120 mil mortes associadas às ondas de calor no Brasil nas últimas duas décadas. O número equivale a aproximadamente 0,6% da mortalidade analisada, evidenciando que o calor extremo também representa um problema de saúde pública.',
    source: 'CNN Brasil (Estudo SUS / 5.566 Municípios)',
    url: 'https://www.cnnbrasil.com.br/saude/ondas-de-calor-no-brasil-registrou-120-mil-mortes-associadas-em-20-anos/'
  },
  {
    id: 'ev-agenciabrasil-desertificacao-39mi',
    tag: 'Segurança Hídrica • Agência Brasil',
    dateStr: '15/08/2026',
    title: '39 milhões de brasileiros vivem em áreas ameaçadas pela desertificação',
    headline: 'Cerca de 39 milhões de brasileiros vivem atualmente em regiões ameaçadas pela desertificação. A degradação reduz a capacidade do solo de reter água e sustentar atividades produtivas, ampliando riscos relacionados à segurança hídrica, agricultura e disponibilidade de alimentos.',
    source: 'Agência Brasil (EBC)',
    url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-08/risco-de-desertificacao-no-brasil-ameaca-seguranca-hidrica-e-alimentar'
  },
  {
    id: 'ev-percepcao-brasileiros-clima-2026',
    tag: 'Percepção Social • Instituto Ar',
    dateStr: '2026',
    title: 'Mudança climática já impacta o cotidiano de 85% da população brasileira, aponta pesquisa',
    headline: 'Pesquisa aponta que as mudanças climáticas já interferem no cotidiano de 85% da população brasileira, influenciando o dia a dia, a percepção de calor e os hábitos de consumo das famílias.',
    source: 'Instituto Ar',
    url: 'https://institutoar.org.br/noticias/mudanca-climatica-impactam-brasileiros/'
  }
];

export function MudancasClimaticasView({ setActivePage }: MudancasClimaticasViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO DA PÁGINA (PADRÃO FENÔMENOS CLIMÁTICOS)                       */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Identificação & Navegação */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1.5 shadow-xs">
                <Radio className="w-3 h-3 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                MUDANÇAS CLIMÁTICAS & EMISSÕES
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento 2027–2037</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <Thermometer className="w-7 h-7 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Mudanças Climáticas
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Transformações estruturais do clima, trajetória global de emissões de CO₂, extremos hídricos e adaptação estratégica para o ciclo 2027–2037.
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
              onClick={() => setActivePage?.('Fenômenos Climáticos')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Fenômenos Climáticos
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
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
          
          {/* Card 1: Prejuízos no Brasil (R$ 28,4 bi / Folha & Aon) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                PREJUÍZOS NO BRASIL (2025)
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  R$ 28,4 bi
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Perdas econômicas por desastres em 2025.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                88% decorrentes de secas severas (Folha / Aon)
              </p>
            </div>
          </div>

          {/* Card 2: 11 anos (Últimos 11 anos mais quentes / OMM) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                RECORDES CONSECUTIVOS
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-purple-600 dark:text-purple-400 leading-none">
                  11 anos
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                2015–2025 foram os 11 anos mais quentes registrados.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Anomalia de +1,43°C pré-industrial (OMM)
              </p>
            </div>
          </div>

          {/* Card 3: América Latina (Extremos Hídricos / OMM Regional) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                AMÉRICA LATINA
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-amber-600 dark:text-amber-400 leading-none">
                  Secas & Chuvas
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Aumento crítico de extremos hídricos e calor.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Impacto em infraestrutura e agricultura (OMM)
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. AS 3 PRINCIPAIS NOTÍCIAS EM DESTAQUE NO TOPO (PADRÃO ESTRUTURAL)       */}
      {/* ========================================================================= */}
      <section id="principais-noticias" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Top 3 Destaques
              </span>
              <span className="text-xs text-slate-400">Evidências Oficiais e Impactos Econômicos</span>
            </div>
            <h2 className="text-[18px] font-bold text-slate-900 dark:text-white">
              Principais Notícias sobre Mudanças Climáticas e Impactos no Brasil
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>OMM / WMO • Cemaden / Agência Brasil • Relatórios Oficiais</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {TOP_3_MUDANCAS_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DUAS COLUNAS ANALÍTICAS (01 E 02) COM PADRÃO DE GOVERNANÇA              */}
      {/* ========================================================================= */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* 01 — O que observar nos próximos meses */}
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
                        Extremos na América Latina, prejuízos econômicos no Brasil e segurança hídrica.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>Os R$ 28,4 bilhões em prejuízos econômicos por desastres em 2025, com secas respondendo por 88% do total (Folha de S.Paulo / Aon).</li>
                    <li>A vulnerabilidade de 90% dos municípios brasileiros a desastres hídricos e o registro de 120 mil mortes associadas a ondas de calor em 20 anos (Cemaden / USP / SUS).</li>
                    <li>A exposição de 39 milhões de brasileiros a áreas com risco de desertificação e perda de solo (Agência Brasil).</li>
                    <li>A confirmação pela OMM de que 2015–2025 representaram os 11 anos mais quentes já registrados globalmente (OMM).</li>
                    <li>O aumento crítico de extremos hídricos e secas severas na América Latina (OMM Regional).</li>
                    <li>A percepção da população brasileira, com 85% dos cidadãos relatando que as mudanças climáticas já impactam o cotidiano (Instituto Ar).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 02 — Impacto para a Lorenzetti */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-emerald-100 dark:border-emerald-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-emerald-50 dark:text-emerald-900/20 leading-none pointer-events-none select-none">
                02
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      Impacto para a Lorenzetti
                    </h4>
                    <div className="inline-flex bg-emerald-50/80 dark:bg-emerald-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-emerald-700 dark:text-emerald-400 font-semibold">
                        Eficiência hídrico-energética, resiliência na cadeia logística e adaptação do portfólio.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-emerald-400 dark:marker:text-emerald-500/70">
                    <li>O aquecimento contínuo e as anomalias térmicas <strong className="text-slate-800 dark:text-slate-200">podem influenciar</strong> o perfil de consumo e a sazonalidade de duchas elétricas e aquecedores de água nas diferentes macrorregiões brasileiras.</li>
                    <li>O aumento da frequência de extremos hídricos e secas prolongadas no Sudeste <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades</strong> para tecnologias economizadoras de água, arejadores, pressurizadores e sistemas de purificação.</li>
                    <li>As exigências regulatórias globais de descarbonização e eficiência energética <strong className="text-slate-800 dark:text-slate-200">podem demandar</strong> o aprimoramento contínuo da pegada de carbono dos produtos e dos processos industriais.</li>
                    <li>A vulnerabilidade de infraestruturas litorâneas e logísticas a eventos climáticos <strong className="text-slate-800 dark:text-slate-200">pode exigir</strong> acompanhamento contínuo de rotas de distribuição e estoques estratégicos.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INFOGRÁFICO TERRITORIAL • BRASIL DOS IMPACTOS CLIMÁTICOS (INTEGRADO)    */}
      {/* ========================================================================= */}
      <section id="infografico-territorial-brasil" className="scroll-mt-12 relative">
        <BrasilImpactosClimaticosVisual />
      </section>

      {/* ========================================================================= */}
      {/* 5. OUTRAS NOTÍCIAS E MONITORAMENTO COMPLEMENTAR                            */}
      {/* ========================================================================= */}
      <section id="evidencias-adicionais" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Monitoramento Complementar
              </span>
              <span className="text-xs text-slate-400">Notícias e Estudos Estruturais</span>
            </div>
            <h2 className="text-[16px] md:text-[18px] font-bold tracking-tight text-slate-900 dark:text-white">
              Outras notícias e monitoramento
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>Folha / Aon • CNN Brasil • Agência Brasil • Instituto Ar</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {OTHER_MUDANCAS_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const MudancasClimaticasViewAlias = MudancasClimaticasView;
export default MudancasClimaticasView;
