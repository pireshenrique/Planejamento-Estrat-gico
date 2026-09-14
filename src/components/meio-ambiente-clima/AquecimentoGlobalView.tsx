import React from 'react';
import { 
  TrendingUp, 
  Target, 
  Search, 
  Waves, 
  Flame, 
  Wind,
  Thermometer,
  Calendar,
  Layers,
  ArrowRight,
  Globe2,
  Building2,
  MapPin,
  Clock,
  Radio,
  Sparkles
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface AquecimentoGlobalViewProps {
  setActivePage?: (page: string) => void;
  
}

// ============================================================================
// AS 3 PRINCIPAIS NOTÍCIAS (TOP 3 NO TOPO)
// ============================================================================
const TOP_EVIDENCES_AQUECIMENTO: Evidence[] = [
  {
    id: 'ev-aquecimento-sp-usp-cnn-2026',
    tag: 'Climatologia Regional • CNN Brasil / USP',
    dateStr: '17/05/2026',
    title: 'São Paulo aqueceu mais que a média global no último século',
    headline: 'Estudos apresentados por pesquisadores da USP mostram que, desde 1900, enquanto a temperatura média global aumentou cerca de 1,2°C, São Paulo registrou elevação de 2,4°C nas máximas diárias e 2,8°C nas mínimas. Em áreas urbanizadas críticas da Grande São Paulo, a temperatura da superfície pode chegar a 60°C, contra cerca de 25°C em áreas mais vegetadas.',
    source: 'CNN Brasil / Pesquisadores da USP / IPCC',
    url: 'https://www.cnnbrasil.com.br/nacional/sudeste/sp/temperatura-em-sao-paulo-superou-media-global-no-ultimo-seculo-diz-estudo/'
  },
  {
    id: 'ev-aquecimento-antropico-cnn-2026',
    tag: 'Estudo Internacional • CNN Brasil',
    dateStr: '11/06/2026',
    title: 'Aquecimento causado pela atividade humana chega a 1,37°C',
    headline: 'Estudo internacional com 73 cientistas aponta que o aquecimento provocado pela atividade humana chegou a aproximadamente 1,37°C em 2025. A taxa atual é de 0,27°C por década e, mantido o ritmo, o nível de aquecimento de longo prazo pode atingir 1,5°C por volta de 2030.',
    source: 'CNN Brasil / Estudo com 73 cientistas',
    url: 'https://www.cnnbrasil.com.br/'
  },
  {
    id: 'ev-aquecimento-oceanos-julho2026',
    tag: 'Recorde Oceânico • Agência Brasil',
    dateStr: '10/08/2026',
    title: 'Temperatura dos oceanos bate novo recorde em julho de 2026',
    headline: 'A temperatura média da superfície dos oceanos fora das regiões polares chegou a 20,96°C em julho, superando o recorde anterior de 20,89°C. No mesmo mês, a temperatura média global do ar alcançou 16,90°C, ficando 1,47°C acima do período pré-industrial.',
    source: 'Agência Brasil (Copernicus / Relatórios Oficiais)',
    url: 'https://agenciabrasil.ebc.com.br/'
  }
];

// ============================================================================
// OUTRAS NOTÍCIAS E MONITORAMENTO COMPLEMENTAR
// ============================================================================
const OTHER_EVIDENCES_AQUECIMENTO: Evidence[] = [
  {
    id: 'ev-aquecimento-calor-extremo-folha-2026',
    tag: 'Ondas de Calor • Folha de S.Paulo / Reuters',
    dateStr: '11/08/2026',
    title: 'Calor extremo se torna mais frequente, intenso e duradouro',
    headline: 'A Organização Meteorológica Mundial alerta que episódios de calor extremo estão se tornando mais frequentes, intensos, duradouros e geograficamente abrangentes. Oceanos mais quentes e solos secos contribuem para intensificar as temperaturas observadas em terra.',
    source: 'Folha de S.Paulo / Reuters (Alerta OMM)',
    url: 'https://www1.folha.uol.com.br/'
  },
  {
    id: 'ev-aquecimento-unep-politicas-28c',
    tag: 'Cenários Globais • UNEP',
    dateStr: '2025 / 2026',
    title: 'Políticas atuais ainda apontam para cerca de 2,8°C',
    headline: 'O cenário baseado apenas nas políticas atualmente implementadas permanece muito acima do objetivo do Acordo de Paris, reforçando a pressão por adaptação estrutural na infraestrutura urbana e edificações.',
    source: 'UNEP — Emissions Gap Report 2025',
    url: 'https://www.unep.org/resources/emissions-gap-report-2024'
  }
];

export function AquecimentoGlobalView({ setActivePage }: AquecimentoGlobalViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO DA PÁGINA (PADRÃO EXECUTIVO UNIFICADO)                       */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Identificação & Navegação */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 flex items-center gap-1.5 shadow-xs">
                <Radio className="w-3 h-3 text-rose-600 dark:text-rose-400 animate-pulse" />
                AQUECIMENTO GLOBAL & TEMPERATURAS
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento 2027–2037</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <Thermometer className="w-7 h-7 text-rose-600 dark:text-rose-400 shrink-0" />
              Aquecimento Global
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Evolução das temperaturas globais, aquecimento regional em São Paulo, anomalias dos oceanos e aproximação de limites críticos para o ciclo 2027–2037.
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
              onClick={() => setActivePage?.('Mudanças Climáticas')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mudanças Climáticas
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Aquecimento Global
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
          
          {/* Card 1: São Paulo (+2,4°C / +2,8°C - USP / CNN) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                SÃO PAULO (DESDE 1900)
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-amber-600 dark:text-amber-400 leading-none">
                  +2,4°C / +2,8°C
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Máximas e mínimas acima do dobro da média global.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Superfície urbana até 60°C (USP / IPCC)
              </p>
            </div>
          </div>

          {/* Card 2: +1,37°C — Aquecimento Antrópico (CNN / Estudo Internacional) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                AQUECIMENTO HUMANO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  +1,37°C
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Ritmo de +0,27°C por década observado.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                1,5°C projetado para ≈ 2030 (Estudo 73 cientistas)
              </p>
            </div>
          </div>

          {/* Card 3: 20,96°C — Recorde Oceânico (Agência Brasil / Copernicus) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Waves className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                OCEANOS EM JULHO/2026
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  20,96°C
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Novo recorde histórico da superfície oceânica.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Ar global atingiu 16,90°C (+1,47°C pré-industrial)
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
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                Top 3 Destaques
              </span>
              <span className="text-xs text-slate-400">Evidências Científicas e Climatológicas Oficiais</span>
            </div>
            <h2 className="text-[18px] font-bold text-slate-900 dark:text-white">
              Principais Notícias sobre Aquecimento Global e Temperaturas
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>USP • CNN Brasil • Agência Brasil • Copernicus</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {TOP_EVIDENCES_AQUECIMENTO.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DUAS COLUNAS ANALÍTICAS (01 E 02)                                      */}
      {/* ========================================================================= */}
      <section id="analise-estrategica" className="scroll-mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* 01 — O que observar */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-6 md:p-8 shadow-sm flex flex-col">
            <div className="absolute top-6 right-6 md:top-8 md:right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
              01
            </div>

            <div className="flex flex-col gap-6 relative z-10 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center shrink-0">
                  <Search className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                </div>
                
                <div className="pt-1 pr-12">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    Monitoramento Climatológico
                  </span>
                  <h4 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-2">
                    01 — O que observar
                  </h4>
                  <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg border border-orange-200/50 dark:border-orange-800/40">
                    <span className="text-[13px] text-orange-800 dark:text-orange-300 font-semibold">
                      Temperatura global • ilhas de calor urbanas • calor oceânico • marca de 1,5°C
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                  <li>O aquecimento acentuado na Grande São Paulo, onde as temperaturas médias subiram 2,4°C a 2,8°C desde 1900 (USP).</li>
                  <li>O avanço do aquecimento antrópico global para 1,37°C com aproximação do limiar de 1,5°C por volta de 2030 (Estudo Internacional / CNN).</li>
                  <li>A sucessão de recordes térmicos nos oceanos globais, atingindo média de 20,96°C (Copernicus / Agência Brasil).</li>
                  <li>A frequência, intensidade e amplitude geográfica crescente das ondas de calor em centros urbanos (OMM / Folha de S.Paulo).</li>
                  <li>A persistência de cenários de emissões apontando para aquecimento de cerca de 2,8°C sob políticas atuais (UNEP).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 02 — Impacto para a Lorenzetti */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-emerald-100 dark:border-emerald-900/30 p-6 md:p-8 shadow-sm flex flex-col">
            <div className="absolute top-6 right-6 md:top-8 md:right-8 text-[44px] font-bold text-emerald-50 dark:text-emerald-900/20 leading-none pointer-events-none select-none">
              02
            </div>

            <div className="flex flex-col gap-6 relative z-10 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                
                <div className="pt-1 pr-12">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Hipóteses Observacionais para a Empresa
                  </span>
                  <h4 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-2">
                    02 — Impacto para a Lorenzetti
                  </h4>
                  <div className="inline-flex bg-emerald-50/80 dark:bg-emerald-900/30 px-3 py-1.5 rounded-lg border border-emerald-200/50 dark:border-emerald-800/40">
                    <span className="text-[13px] text-emerald-800 dark:text-emerald-300 font-semibold">
                      Elevação térmica pode deslocar sazonalidade e exigir flexibilidade nos aparelhos
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <ul className="list-disc pl-4 space-y-2 marker:text-emerald-400 dark:marker:text-emerald-500/70">
                  <li>A elevação estrutural das temperaturas médias e os picos de calor em regiões metropolitanas <strong className="text-slate-900 dark:text-white font-bold">podem alterar</strong> o padrão tradicional de sazonalidade na demanda por aquecimento de água.</li>
                  <li>Dias com temperaturas da superfície próximas a 60°C em polos urbanos e noites mais quentes <strong className="text-slate-900 dark:text-white font-bold">podem favorecer</strong> produtos com controle eletrônico gradual de temperatura, menor consumo em potências mínimas e integração com sistemas de ventilação e conforto térmico.</li>
                  <li>Variações extremas entre ondas de calor e frentes frias <strong className="text-slate-900 dark:text-white font-bold">podem demandar</strong> aparelhos versáteis que mantenham eficiência tanto sob temperaturas ambiente elevadas quanto em quedas bruscas de temperatura.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUTRAS NOTÍCIAS E MONITORAMENTO COMPLEMENTAR                            */}
      {/* ========================================================================= */}
      <section id="outras-noticias" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Monitoramento Complementar
              </span>
              <span className="text-xs text-slate-400">Rastreabilidade Documental</span>
            </div>
            <h2 className="text-[18px] font-bold text-slate-900 dark:text-white">
              Outras Notícias e Monitoramento
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>Folha de S.Paulo / Reuters • OMM • UNEP</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {OTHER_EVIDENCES_AQUECIMENTO.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. NAVEGAÇÃO ENTRE SUBTÓPICOS                                              */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700/80">
        <button
          onClick={() => setActivePage?.('Mudanças Climáticas')}
          className="flex items-center gap-2 text-sm font-bold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Subtópico Anterior: Mudanças Climáticas
        </button>

        <button
          onClick={() => setActivePage?.('Meio Ambiente e Clima')}
          className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer"
        >
          Visão Geral: Meio Ambiente e Clima
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}


export const AquecimentoGlobalViewAlias = AquecimentoGlobalView;
export default AquecimentoGlobalView;
