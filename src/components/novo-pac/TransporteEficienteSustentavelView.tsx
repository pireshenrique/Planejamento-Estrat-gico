import { EvidenceCard } from '../layout/EvidenceCard';
import React from 'react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { 
  Building2, 
  Target, 
  TrendingUp, 
  Search, 
  Globe, 
  ExternalLink,
  BookOpen,
  HeartPulse,
  Wifi,
  MapPin,
  Activity,
  Landmark,
  Users,
  CheckCircle,
  Map,
  Leaf,
  Monitor,
  ShieldAlert,
  Droplet,
  Truck,
  Ship,
  AlertTriangle,
  Zap,
  Battery
} from 'lucide-react';

interface TransporteEficienteSustentavelViewProps {
  setActivePage: (page: string) => void;
}

const EVIDENCES: any[] = [
  {
    id: 1,
    tag: 'Transporte Hidroviário',
    dateStr: '01/04/2026',
    title: 'Governo abre propostas para dragagem da hidrovia Lagoa Mirim no RS',
    headline: 'Projeto prevê R$ 52,7 milhões para dragagem e sinalização da hidrovia no RS, fortalecendo a integração com o Uruguai.',
    summary: 'O projeto integra o Novo PAC e prevê R$ 52,7 milhões para dragagem e sinalização da hidrovia da Lagoa Mirim (RS). A iniciativa busca melhorar a navegabilidade durante todo o ano, aumentar a segurança e eficiência logística e fortalecer a integração comercial e de transportes com o Uruguai.',
    source: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/infra/governo-abre-propostas-para-dragagem-da-hidrovia-lagoa-mirim-no-rs/'
  },
  {
    id: 2,
    tag: 'Mobilidade Urbana',
    dateStr: '2026',
    title: 'Mobilidade Urbana Sustentável – Grandes e Médias Cidades',
    headline: 'Modalidade contempla BRTs, metrôs, trens urbanos, VLTs, ciclovias e terminais em 28 municípios selecionados.',
    summary: 'Fonte oficial do Ministério das Cidades para o Novo PAC. A modalidade contempla BRTs, metrôs, trens urbanos, VLTs, corredores exclusivos, terminais, sistemas inteligentes e infraestrutura cicloviária/pedonal integrada ao transporte público. A seleção registra 33 propostas, totalizando R$ 6,5 bilhões em investimentos e 28 municípios beneficiados.',
    source: 'Ministério das Cidades',
    url: 'https://www.gov.br/cidades/pt-br/novo-pac-selecoes/mobilidade-urbana-sustentavel-mobilidade-grandes-e-medias-cidades'
  },
  {
    id: 3,
    tag: 'Renovação de Frota',
    dateStr: '2026',
    title: 'Renovação de Frota – Novo PAC Seleções 2026',
    headline: 'Diretrizes oficiais para aquisição de ônibus elétricos, carregadores, veículos Euro 6, material sobre trilhos e embarcações.',
    summary: 'Programa de Renovação de Frota do Ministério das Cidades voltado à mobilidade sustentável. Prevê aquisição de ônibus elétricos e carregadores, veículos Euro 6, material rodante para trilhos e embarcações aquaviárias. Exige itens de conforto e tecnologia como acessibilidade universal, ar-condicionado, internet e sistemas de bilhetagem e rastreamento.',
    source: 'Ministério das Cidades',
    url: 'https://www.gov.br/cidades/pt-br/novo-pac-selecoes-2026/renovacao-de-frota'
  },
  {
    id: 4,
    tag: 'Execução e Governança',
    dateStr: '13/07/2026',
    title: 'Avaliação do TCU sobre a execução de metas do Novo PAC e PPA',
    headline: 'TCU aponta entrega de 23,1% das metas previstas para 2025 no recorte do PPA; Casa Civil contesta escopo da metodologia.',
    summary: 'Auditoria do Tribunal de Contas da União (TCU) apontou que, no recorte do PPA, o Novo PAC alcançou 23,1% das metas de entregas previstas para 2025, indicando entraves orçamentários, capacidade técnica, licitações e cronogramas. No transporte rodoviário, 20% das metas foram integralmente atendidas. A Casa Civil contestou que esse recorte represente a metodologia global de acompanhamento do programa.',
    source: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/economia/macroeconomia/governo-lula-nao-cumpre-metas-de-saude-e-do-novo-pac-em-2025-diz-tcu/'
  }
];

export function TransporteEficienteSustentavelView({ setActivePage }: TransporteEficienteSustentavelViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200" id="transporte-eficiente-sustentavel-root">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6" id="transporte-eficiente-header">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight" id="transporte-eficiente-title">
            Transporte Eficiente e Sustentável
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed" id="transporte-eficiente-desc">
            Acompanhamento dos investimentos do Novo PAC em mobilidade urbana sustentável, descarbonização de frotas, transporte hidroviário e monitoramento de execução.
          </p>
        </div>

        <ResponsiveContainer minWidth="240px" gap="gap-3" className="w-full flex-1" id="transporte-eficiente-grid">
          {/* Card 1 — Investimento Total do Eixo */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full" id="transporte-eficiente-card-1">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Investimento Total do Eixo</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-tight">R$ 369,4 bi</h3>
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">Investimentos previstos no eixo Transporte Eficiente e Sustentável do Novo PAC.</p>
            </div>
          </div>

          {/* Card 2 — Mobilidade Urbana */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full" id="transporte-eficiente-card-2">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
              <Truck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Mobilidade Urbana</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-tight">R$ 6,5 bi</h3>
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">33 propostas em 28 municípios selecionados.</p>
            </div>
          </div>

          {/* Card 3 — Execução do Programa */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full" id="transporte-eficiente-card-3">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center shrink-0 border border-amber-200 dark:border-amber-800">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1 mb-1 flex-wrap">
                <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Execução do Programa</p>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                  Ponto de Atenção
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-tight">23,1%</h3>
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">Metas de entregas atingidas em 2025 no recorte do PPA.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section id="transporte-eficiente-analise-section">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Análise Estratégica
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            
            {/* 1. O que aconteceu e o que explica o resultado */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs" id="transporte-eficiente-analise-1">
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    
                    <div className="pt-1 flex-1 min-w-0">
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">1. O que aconteceu e o que explica o resultado</h4>
                      <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                        <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                          Mobilidade urbana, renovação de frotas e logística hidroviária avançam, enquanto a execução permanece como ponto de atenção.
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                    01
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                  <p>
                    O Ministério das Cidades selecionou <strong>33 projetos de mobilidade urbana</strong>, totalizando <strong>R$ 6,5 bilhões em investimentos para 28 municípios</strong>. A carteira inclui BRTs, metrôs, trens urbanos, VLTs, corredores exclusivos e infraestrutura cicloviária.
                  </p>
                  <p>
                    O Novo PAC 2026 também amplia a renovação da frota, incluindo <strong>ônibus elétricos, veículos Euro 6, material rodante ferroviário e embarcações</strong>. Na frente hidroviária, a dragagem da Lagoa Mirim recebeu <strong>R$ 52,7 milhões</strong>, reforçando a integração logística com o Uruguai.
                  </p>
                  <p>
                    <strong>A execução permanece como ponto de atenção.</strong> No recorte analisado pelo TCU, o programa atingiu <strong>23,1% das metas de entrega previstas para 2025</strong>, enquanto o modal rodoviário alcançou 20%. O governo federal contestou a abrangência metodológica desse recorte.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Fontes: Ministério das Cidades | CNN Brasil | TCU | Novo PAC
                  </div>
                </div>
              </div>
            </div>

            <ResponsiveContainer minWidth="320px" gap="gap-5">
              
              {/* 2. O que observar nos próximos meses */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="transporte-eficiente-analise-2">
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                        <Search className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      
                      <div className="pt-1 flex-1 min-w-0">
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">2. O que observar nos próximos meses</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                            Contratação dos projetos, renovação das frotas e evolução da execução.
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                     02
                    </span>
                  </div>

                  <div className="flex flex-col gap-3.5 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                    <p>
                      Acompanhar a contratação dos <strong>33 projetos de mobilidade urbana</strong> e o início das obras nos municípios contemplados.
                    </p>
                    <p>
                      Monitorar a entrega de <strong>ônibus elétricos, veículos Euro 6 e novos equipamentos de transporte</strong>, além da evolução da dragagem da Lagoa Mirim.
                    </p>
                    <p>
                      Observar se os entraves orçamentários, licitatórios e operacionais identificados pelo TCU estão sendo superados.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Fontes: Ministério das Cidades | CNN Brasil | TCU | Novo PAC
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Impacto para a Lorenzetti */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="transporte-eficiente-analise-3">
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                        <Target className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      
                      <div className="pt-1 flex-1 min-w-0">
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">3. Impacto para a Lorenzetti</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                            Possíveis efeitos sobre infraestrutura predial, eletrificação e cadeia de construção.
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                      03
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                    <p>
                      A expansão de terminais, estações e corredores de transporte <strong>pode gerar demanda indireta por sistemas hidráulicos, elétricos e materiais de instalação</strong>, principalmente por meio das construtoras e fornecedores das obras.
                    </p>
                    <p>
                      A eletrificação de frotas e a instalação de pontos de recarga <strong>podem aumentar a demanda por infraestrutura elétrica predial e distribuição de energia</strong> em terminais e garagens.
                    </p>
                    <p>
                      O ritmo de execução do Novo PAC será importante para definir <strong>quando essa demanda poderá chegar efetivamente à cadeia de construção e distribuição</strong>.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Fontes: Ministério das Cidades | CNN Brasil | TCU | Novo PAC
                    </div>
                  </div>
                </div>
              </div>

            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. ONDE O NOVO PAC ESTÁ INVESTINDO EM TRANSPORTE EFICIENTE */}
      <section className="flex flex-col gap-6" id="transporte-eficiente-frentes">
        
        <div className="flex flex-col gap-1 pb-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">2</div>
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
              Onde o Novo PAC está investindo em transporte eficiente e sustentável
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 pl-[44px]">
            Principais frentes de infraestrutura urbana de transporte, descarbonização de frotas e logística hidroviária.
          </p>
        </div>

        <ResponsiveContainer minWidth="280px" gap="gap-6" className="w-full" id="transporte-eficiente-frentes-grid">
          
          {/* Card 1: Mobilidade Urbana (Grandes e Médias Cidades) */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="transporte-eficiente-frente-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Mobilidade Urbana<br />(Grandes e Médias Cidades)
              </h3>
            </div>
            
            <div className="h-px w-full bg-blue-100/70 dark:bg-blue-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Implantar e qualificar sistemas de transporte coletivo de média e alta capacidade e infraestrutura integrada.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-blue-50/40 dark:bg-blue-950/20 rounded-2xl p-5 border border-blue-100/80 dark:border-blue-900/40 mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">INVESTIMENTO SELECIONADO</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  R$ 6,5 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-100 dark:border-blue-900/40">
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-blue-600 dark:text-blue-400">33 propostas</strong> aprovadas distribuídas em <strong className="font-bold text-blue-600 dark:text-blue-400">28 municípios</strong>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Truck className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Redução do tempo de viagem e de emissões através de BRTs, metrôs, VLTs, terminais e ciclovias integradas.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Renovação de Frota */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="transporte-eficiente-frente-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Transição Energética<br />(Renovação de Frota)
              </h3>
            </div>
            
            <div className="h-px w-full bg-emerald-100/70 dark:bg-emerald-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Financiar veículos limpos e modernizar o material rodante com tecnologias de menor impacto ambiental.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/80 dark:border-emerald-900/40 mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 block">MODAIS ATENDIDOS</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                  <Battery className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-[24px] md:text-[26px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  Elétricos & Trilhos
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-100 dark:border-emerald-900/40">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Frotas elétricas, <strong className="font-bold text-emerald-600 dark:text-emerald-400">Euro 6</strong>, ar-condicionado, Wi-Fi e acessibilidade universal.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <Leaf className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Descarbonização do transporte coletivo urbano e elevação do padrão de conforto, segurança e conectividade.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Hidrovia Lagoa Mirim */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="transporte-eficiente-frente-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <Ship className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Transporte Hidroviário<br />(Hidrovia Lagoa Mirim)
              </h3>
            </div>
            
            <div className="h-px w-full bg-indigo-100/70 dark:bg-indigo-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Garantir navegabilidade perene ao longo de todo o ano e fortalecer a integração logística Brasil–Uruguai.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-indigo-50/40 dark:bg-indigo-950/20 rounded-2xl p-5 border border-indigo-100/80 dark:border-indigo-900/40 mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 block">INVESTIMENTO PREVISTO</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center shrink-0">
                  <Droplet className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                  R$ 52,7 <span className="text-[22px] md:text-[24px] font-bold">mi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-indigo-100 dark:border-indigo-900/40">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Obras estruturantes de <strong className="font-bold text-indigo-600 dark:text-indigo-400">dragagem e sinalização</strong> no canal de navegação.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <Ship className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Aumento da eficiência logística hidroviária, redução de emissões e intensificação do comércio binacional.
                </p>
              </div>
            </div>
          </div>

        </ResponsiveContainer>

        {/* Rodapé de Fontes da Seção 2 */}
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl px-5 py-3.5 flex items-center gap-3 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
            <Search className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-[13px] text-slate-600 dark:text-slate-400">
            <strong className="font-semibold text-blue-600 dark:text-blue-400">Fontes:</strong> Ministério das Cidades (08/05/2026), CNN Brasil (08/05/2026), Ministério dos Transportes (09/05/2026)
          </p>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="transporte-eficiente-evidencias-section" className="scroll-mt-12 relative mt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Rastreabilidade direta de publicações oficiais, portais governamentais e notícias do Novo PAC.</p>
          </div>
        </div>
           
        {EVIDENCES.length > 0 ? (
          <ResponsiveContainer minWidth="320px" gap="gap-5" className="w-full">
            {EVIDENCES.map((ev) => (<EvidenceCard key={ev.id} evidence={ev as any} />))}
          </ResponsiveContainer>
        ) : (
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <Search className="w-8 h-8 text-slate-400 mb-3" />
            <p className="text-[15px] font-medium text-slate-600 dark:text-slate-400">Nenhuma evidência registrada no momento.</p>
          </div>
        )}
      </section>

    </div>
  );
}
