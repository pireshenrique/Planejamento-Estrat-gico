import React from 'react';
import { 
  Scale, 
  Droplets, 
  Flame, 
  Zap, 
  TrendingUp, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Search, 
  Target, 
  Globe, 
  Info, 
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  Layers,
  Recycle,
  Calendar,
  Building2,
  Factory,
  Sliders,
  Activity,
  Sun
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface MarcosRegulatoriosViewProps {
  setActivePage?: (page: string) => void;
  
}

// ---------------------------------------------------------------------------
// 3 NOTÍCIAS PRINCIPAIS (QUE EVIDENCIAM OS 3 CARDS DO TOPO)
// ---------------------------------------------------------------------------
const MAIN_REGULATORY_EVIDENCES: Evidence[] = [
  {
    id: 'reg-cni-saneamento-2033',
    tag: 'Saneamento • Marco Legal',
    dateStr: '2026',
    title: 'CNI defende agenda estruturada para ampliar cobertura de saneamento até 2033',
    headline: 'A agenda do setor passa a depender cada vez mais da capacidade de transformar contratos e metas regulatórias em investimentos e obras efetivamente executados.',
    source: 'CNI — Confederação Nacional da Indústria',
    url: 'https://imprensa.portaldaindustria.com.br/posicionamentos/cni-defende-agenda-estruturada-para-que-o-pais-tenha-ampla-cobertura-de-saneamento-ate-2033/',
    sourceUrl: 'https://imprensa.portaldaindustria.com.br/posicionamentos/cni-defende-agenda-estruturada-para-que-o-pais-tenha-ampla-cobertura-de-saneamento-ate-2033/'
  },
  {
    id: 'reg-anp-gas-release-cp16',
    tag: 'Gás Natural • Consulta Pública nº 16/2026',
    dateStr: '2026',
    title: 'ANP avança em programa para ampliar concorrência no mercado de gás',
    headline: 'A Consulta Pública nº 16/2026 discute a implementação de um programa de Gas Release voltado à desconcentração e ao aumento da competição na oferta de gás natural.',
    source: 'ANP',
    url: 'https://www.gov.br/anp/pt-br/canais_atendimento/imprensa/noticias-comunicados/gas-release-anp-aprova-relatorio-e-abertura-de-consulta-publica-sobre-programa-para-ampliar-concorrencia-no-mercado-de-gas-natural',
    sourceUrl: 'https://www.gov.br/anp/pt-br/canais_atendimento/imprensa/noticias-comunicados/gas-release-anp-aprova-relatorio-e-abertura-de-consulta-publica-sobre-programa-para-ampliar-concorrencia-no-mercado-de-gas-natural'
  },
  {
    id: 'reg-governo-acordo-renovaveis-3-3bi',
    tag: 'Energia Elétrica • Regulação e Curtailment',
    dateStr: '2026',
    title: 'Governo regulamenta acordo de R$ 3,3 bilhões com usinas renováveis',
    headline: 'O acordo relacionado aos cortes de geração mostra como a rápida expansão das fontes renováveis está criando novas questões sobre compensação, divisão de riscos e operação do sistema elétrico.',
    source: 'Governo Federal',
    url: '', // Fonte a validar (botão desabilitado)
    sourceUrl: ''
  }
];

// ---------------------------------------------------------------------------
// OUTRAS NOTÍCIAS COMPLEMENTANDO O TEMA (SEÇÃO FINAL)
// ---------------------------------------------------------------------------
const OTHER_REGULATORY_EVIDENCES: Evidence[] = [
  {
    id: 'reg-eixos-acesso-infra-gas',
    tag: 'Gás Natural • Consulta Pública nº 13/2026',
    dateStr: '2026',
    title: 'Novas regras discutem acesso à infraestrutura essencial de gás',
    headline: 'A Consulta Pública nº 13/2026 discute regras para acesso negociado e não discriminatório às infraestruturas essenciais, incluindo escoamento e unidades de processamento de gás natural (UPGN).',
    source: 'Eixos',
    url: 'https://eixos.com.br/politica/a-regulamentacao-que-pode-destravar-o-mercado-brasileiro-de-gas-natural/',
    sourceUrl: 'https://eixos.com.br/politica/a-regulamentacao-que-pode-destravar-o-mercado-brasileiro-de-gas-natural/'
  },
  {
    id: 'reg-revistane-custo-brasil-saneamento',
    tag: 'Infraestrutura e Custo Brasil',
    dateStr: '19/08/2026',
    title: 'CNI defende nova agenda de investimentos em saneamento a partir de 2027',
    headline: 'Gargalos estruturais de infraestrutura no Brasil ajudam a contextualizar os desafios para transformar metas regulatórias em investimentos e obras efetivamente executados.',
    source: 'Revista Nordeste',
    url: 'https://revistane.com.br/2026/08/19/cni-defende-nova-agenda-de-investimentos-em-saneamento-a-partir-de-2027/',
    sourceUrl: 'https://revistane.com.br/2026/08/19/cni-defende-nova-agenda-de-investimentos-em-saneamento-a-partir-de-2027/'
  }
];

export function MarcosRegulatoriosView({ setActivePage }: MarcosRegulatoriosViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO — TÍTULO, SUBTÍTULO, TABS E 3 CARDS QUANTITATIVOS DO TOPO   */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Lado Esquerdo: Identificação e Navegação */}
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Energia e Infraestrutura • Subtópico
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">•</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              Planejamento Estratégico 2027–2037
            </span>
          </div>
          
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-3">
            <Scale className="w-8 h-8 text-amber-600 dark:text-amber-400 shrink-0" />
            Marcos Regulatórios
          </h1>
          
          <p className="text-[15px] md:text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Novas regras em saneamento básico, gás natural, matriz elétrica e sustentabilidade redefinem investimentos, custos operacionais e a competitividade da indústria no horizonte 2027–2037.
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
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Marcos Regulatórios
            </button>
            <button 
              onClick={() => setActivePage?.('Data Centers')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Data Centers
            </button>
          </div>
        </div>

        {/* Lado Direito: 3 Cards Quantitativos no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full flex-1">
          
          {/* Card 1: SANEAMENTO */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-start gap-3.5 h-full">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/40 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40">
              <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  SANEAMENTO
                </p>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  Meta Legal
                </span>
              </div>
              <h3 className="text-[22px] 2xl:text-[24px] font-black text-blue-600 dark:text-blue-400 leading-none my-1">
                2033
              </h3>
              <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight mb-0.5">
                Universalização do saneamento
              </p>
              <p className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 mb-1">
                99% água | 90% coleta e tratamento de esgoto
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Metas estabelecidas no Marco Legal do Saneamento para universalização dos serviços.
              </p>
            </div>
          </div>

          {/* Card 2: GÁS NATURAL */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-start gap-3.5 h-full">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-950/40 rounded-xl flex items-center justify-center shrink-0 border border-amber-100 dark:border-amber-900/40">
              <Flame className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  GÁS NATURAL
                </p>
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">
                  Em Consulta
                </span>
              </div>
              <h3 className="text-[22px] 2xl:text-[24px] font-black text-amber-600 dark:text-amber-400 leading-none my-1">
                2 CONSULTAS
              </h3>
              <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight mb-0.5">
                Abertura do mercado de gás
              </p>
              <p className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 mb-1">
                Gas Release + acesso à infraestrutura
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Duas frentes regulatórias discutidas em 2026 podem ampliar competição e acesso ao mercado brasileiro de gás natural.
              </p>
            </div>
          </div>

          {/* Card 3: ENERGIA */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-start gap-3.5 h-full">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900/40">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  ENERGIA
                </p>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 italic">
                  Fonte a validar
                </span>
              </div>
              <h3 className="text-[22px] 2xl:text-[24px] font-black text-emerald-600 dark:text-emerald-400 leading-none my-1">
                R$ 3,3 BI
              </h3>
              <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-tight mb-1">
                Renováveis e regulação
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Acordo relacionado às perdas decorrentes de cortes de geração renovável evidencia novos desafios regulatórios provocados pela transformação da matriz elétrica.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. 3 NOTÍCIAS PRINCIPAIS (QUE EVIDENCIAM OS 3 CARDS DO TOPO)              */}
      {/* ========================================================================= */}
      <section id="evidencias-principais" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Evidências & Diretrizes Oficiais
            </span>
            <h2 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">
              3 Notícias Principais
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>CNI • ANP • Governo Federal</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {MAIN_REGULATORY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SEÇÃO DE OBSERVAÇÕES (01) E IMPACTOS LORENZETTI (02)                   */}
      {/* ========================================================================= */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* 01 — O QUE OBSERVAR */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-amber-100 dark:border-amber-900/30 p-8 shadow-sm flex flex-col justify-between">
            <div className="absolute top-8 right-8 text-[44px] font-bold text-amber-50 dark:text-amber-900/20 leading-none pointer-events-none select-none">
              01
            </div>

            <div className="flex flex-col gap-5 relative z-10 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 flex items-center justify-center shrink-0">
                  <Search className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                
                <div className="pt-1 pr-12">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Regulação e Mercados
                  </span>
                  <h4 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-2">
                    01 — O que observar
                  </h4>
                  <div className="inline-flex bg-amber-50/80 dark:bg-amber-950/30 px-3 py-1.5 rounded-lg border border-amber-200/50 dark:border-amber-800/40">
                    <span className="text-[12px] text-amber-800 dark:text-amber-300 font-semibold">
                      Cinco Frentes de Monitoramento Regulatório
                    </span>
                  </div>
                </div>
              </div>

              {/* 5 Frentes Estruturadas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:pl-[64px] pt-1">
                
                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300 mb-1">
                      <Droplets className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Saneamento:</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      Ritmo de investimentos, cumprimento de contratos e avanço das metas de universalização até 2033.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300 mb-1">
                      <Flame className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Gás Natural:</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      Desenho final do Gas Release, acesso às infraestruturas, entrada de novos comercializadores e evolução dos preços.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300 mb-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Energia:</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      Curtailment, armazenamento, expansão da rede, compensações e evolução do mercado elétrico.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300 mb-1">
                      <Globe className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Carbono:</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      Implementação do mercado regulado brasileiro de carbono (SBCE) e potenciais impactos sobre indústria e fornecedores.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 flex flex-col justify-between sm:col-span-2">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300 mb-1">
                      <Recycle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>Circularidade:</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px]">
                      Evolução das regras relacionadas a resíduos, logística reversa, reciclagem e responsabilidade do fabricante.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* 02 — IMPACTOS PARA A LORENZETTI */}
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
                      Hipóteses Observacionais: Mercado, Operação e Produto
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 text-[14.5px] text-slate-700 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                <p className="text-xs">
                  Os movimentos regulatórios podem impactar as estratégias de negócios da Lorenzetti em três dimensões complementares:
                </p>

                {/* 3 Dimensões Estruturadas Lorenzetti */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
                  
                  <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 flex flex-col justify-between">
                    <div>
                      <strong className="text-red-700 dark:text-red-400 block mb-0.5 font-bold">Mercado & Demanda:</strong>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        Pode criar oportunidades para o fornecimento de louças, metais e conexões hidráulicas com novas ligações domiciliares da universalização do saneamento até 2033.
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 flex flex-col justify-between">
                    <div>
                      <strong className="text-red-700 dark:text-red-400 block mb-0.5 font-bold">Operação & Custos:</strong>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        Pode demandar acompanhamento contínuo dos custos fabris de energia elétrica e gás natural, além de exigir indicadores mensuráveis de descarbonização em fornos e fundição.
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 flex flex-col justify-between">
                    <div>
                      <strong className="text-red-700 dark:text-red-400 block mb-0.5 font-bold">Produto & Eficiência:</strong>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        Pode alterar a competitividade relativa entre aquecedores a gás, duchas elétricas e sistemas solares/híbridos conforme variem os custos relativos de energia e gás.
                      </span>
                    </div>
                  </div>

                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 italic mt-1">
                  * Todas as análises de impacto para a Lorenzetti são formuladas estritamente sob forma de hipóteses observacionais, respeitando os princípios de governança estratégica corporativa.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUTRAS NOTÍCIAS COMPLEMENTANDO O TEMA (LAYOUT PADRÃO EVIDENCECARD)     */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Acompanhamento Complementar
            </span>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Outras Notícias e Monitoramento Complementar
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Fontes: <strong>Eixos • Revista Nordeste</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {OTHER_REGULATORY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const MarcosRegulatoriosViewAlias = MarcosRegulatoriosView;
export default MarcosRegulatoriosView;
