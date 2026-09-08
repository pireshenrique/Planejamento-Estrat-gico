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
  Droplets,
  Waves,
  Shield,
  Truck
} from 'lucide-react';

interface AguaParaTodosViewProps {
  setActivePage: (page: string) => void;
}

const EVIDENCES: any[] = [
  {
    id: 1,
    tag: 'Populações Rurais / Cisternas',
    dateStr: '10/02/2026',
    title: 'Programa Cisternas supera 100 mil entregas desde 2023, 88% no Nordeste',
    headline: 'MDS registra 104,3 mil cisternas entregues entre 2023 e 2025, com forte concentração no Nordeste.',
    summary: 'Balanço do Ministério do Desenvolvimento e Assistência Social (MDS) aponta a entrega de 104,3 mil cisternas no país entre 2023 e 2025, superando a marca de 100 mil unidades, com 88% das entregas concentradas na região Nordeste para garantir segurança hídrica a populações vulneráveis.',
    source: 'Ministério do Desenvolvimento e Assistência Social (MDS)',
    url: 'https://www.gov.br/mds/pt-br/noticias-e-conteudos/desenvolvimento-social/noticias-desenvolvimento-social/programa-cisternas-supera-100-mil-entregas-desde-2023-88-no-nordeste/'
  },
  {
    id: 2,
    tag: 'Abastecimento de Água',
    dateStr: '2026',
    title: 'Abastecimento de água – Escala oficial do Novo PAC',
    headline: 'Carteira de 371 empreendimentos e R$ 12,5 bilhões, com R$ 4,8 bilhões previstos para o pós-2026.',
    summary: 'Página oficial da Casa Civil detalha a escala atual do subeixo Abastecimento de Água do Novo PAC: 371 empreendimentos e investimento total de R$ 12,5 bilhões, sendo R$ 7,7 bilhões no ciclo até 2026 e R$ 4,8 bilhões previstos para o período pós-2026, servindo de base para o Planejamento 2027–2037.',
    source: 'Casa Civil / Novo PAC',
    url: 'https://www.gov.br/casacivil/pt-br/novopac/agua-para-todos/abastecimento-de-agua/abastecimento-de-agua'
  },
  {
    id: 3,
    tag: 'Revitalização de Bacias',
    dateStr: '09/04/2026',
    title: 'Governo do Brasil destina R$ 1 bi do Novo PAC para revitalização de bacias hidrográficas',
    headline: 'São 60 empreendimentos e mais de R$ 1 bilhão para segurança hídrica, saneamento, drenagem e navegação.',
    summary: 'A Casa Civil oficializou a destinação de mais de R$ 1 bilhão do Novo PAC para 60 empreendimentos de revitalização hidroambiental de bacias hidrográficas, integrando conservação ambiental, segurança hídrica, saneamento, drenagem e melhoria da navegabilidade.',
    source: 'Casa Civil / Presidência da República',
    url: 'https://www.gov.br/casacivil/pt-br/assuntos/noticias/2026/abril/governo-do-brasil-destina-r-1-bi-do-novo-pac-para-revitalizacao-de-bacias-hidrograficas'
  },
  {
    id: 4,
    tag: 'Planejamento 2027–2037',
    dateStr: '17/08/2026',
    title: 'CNI defende nova agenda de investimentos em saneamento a partir de 2027',
    headline: 'Indústria propõe continuidade e ampliação dos aportes em saneamento após o ciclo atual do Novo PAC.',
    summary: 'A Confederação Nacional da Indústria (CNI) defende a estruturação de uma nova agenda contínua de investimentos em saneamento básico a partir de 2027, assegurando a manutenção dos aportes após o ciclo vigente do Novo PAC para viabilizar as metas de universalização.',
    source: 'Brasil 61 / CNI',
    url: 'https://brasil61.com/n/saneamento-cni-defende-nova-agenda-de-investimentos-em-saneamento-a-partir-de-2027-pind264798'
  },
  {
    id: 5,
    tag: 'Saneamento Municipal',
    dateStr: '19/05/2026',
    title: 'Novo PAC amplia saneamento em Três Pontas com R$ 54 milhões',
    headline: 'Construção de ETE e 5 km de interceptores para tratamento integral do esgoto urbano coletado.',
    summary: 'Empreendimento do Novo PAC viabilizou investimento de R$ 54 milhões no município de Três Pontas (MG) para construção de Estação de Tratamento de Esgoto (ETE) e implantação de cerca de 5 km de interceptores, assegurando o tratamento de 100% do esgoto urbano coletado.',
    source: 'Casa Civil / Novo PAC',
    url: 'https://www.gov.br/casacivil/pt-br/assuntos/noticias/2026/maio/novo-pac-amplia-saneamento-em-tres-pontas-e-leva-mais-saude-e-qualidade-de-vida-para-a-populacao'
  }
];

export function AguaParaTodosView({ setActivePage }: AguaParaTodosViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200" id="agua-para-todos-root">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6" id="agua-para-todos-header">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight" id="agua-para-todos-title">
            Água para Todos
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed" id="agua-para-todos-desc">
            Acompanhamento dos investimentos do Novo PAC em abastecimento de água, programa de cisternas rurais, revitalização de bacias hidrográficas e perspectivas de saneamento pós-2026.
          </p>
        </div>

        <ResponsiveContainer minWidth="240px" gap="gap-3" className="w-full flex-1" id="agua-para-todos-grid">
          {/* Card 1 — Investimento Total */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full" id="agua-para-todos-card-1">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800">
              <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">INVESTIMENTO TOTAL</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-tight">R$ 30,2 bi</h3>
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">Investimentos previstos no eixo Água para Todos.</p>
            </div>
          </div>

          {/* Card 2 — Abastecimento de Água */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full" id="agua-para-todos-card-2">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
              <Waves className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">ABASTECIMENTO DE ÁGUA</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-tight">R$ 12,5 bi</h3>
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">371 empreendimentos previstos.</p>
            </div>
          </div>

          {/* Card 3 — Pós-2026 */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full" id="agua-para-todos-card-3">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0 border border-indigo-200 dark:border-indigo-800">
              <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">PÓS-2026</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-tight">R$ 4,8 bi</h3>
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">Investimentos em abastecimento previstos após 2026.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section id="agua-para-todos-analise-section">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Análise Estratégica
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            
            {/* 1. O que aconteceu e o que explica o resultado */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs" id="agua-para-todos-analise-1">
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
                          Escala de R$ 12,5 bi em abastecimento, mais de 100 mil cisternas, R$ 1 bi em bacias e continuidade pós-2026.
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
                    O subeixo de abastecimento de água do Novo PAC reúne <strong>371 empreendimentos</strong> e <strong>R$ 12,5 bilhões em investimentos previstos</strong>, dos quais <strong>R$ 4,8 bilhões</strong> estão programados para execução no período pós-2026, estruturando a base física para a expansão do acesso à água no ciclo 2027–2037.
                  </p>
                  <p>
                    Na frente de atendimento rural, foram registradas <strong>104,3 mil cisternas entregues entre 2023 e 2025</strong> pelo Ministério do Desenvolvimento e Assistência Social (MDS), com <strong>88% das entregas concentradas no Nordeste</strong> para ampliar a segurança hídrica em áreas vulneráveis.
                  </p>
                  <p>
                    Para preservação dos mananciais e esgotamento urbano, a Casa Civil destinou <strong>mais de R$ 1 bilhão para 60 empreendimentos</strong> de revitalização de bacias, complementados por obras municipais de saneamento — como os <strong>R$ 54 milhões em Três Pontas (MG)</strong> para estação de tratamento de esgoto e 5 km de interceptores.
                  </p>
                  <p>
                    Completando o cenário, a <strong>Confederação Nacional da Indústria (CNI)</strong> defende uma nova agenda de investimentos em saneamento a partir de 2027, reforçando a discussão sobre a continuidade dos aportes após o ciclo atual do Novo PAC.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Fontes: Casa Civil / Novo PAC | MDS | CNI / Brasil 61
                  </div>
                </div>
              </div>
            </div>

            <ResponsiveContainer minWidth="320px" gap="gap-5">
              
              {/* 2. O que observar nos próximos meses */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="agua-para-todos-analise-2">
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
                            Execução pós-2026, expansão do acesso à água e continuidade dos investimentos em saneamento.
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
                      Acompanhar o ritmo de execução física e orçamentária dos projetos de abastecimento previstos para o período posterior a 2026, verificando a conversão dos investimentos em novas ligações de água tratada.
                    </p>
                    <p>
                      Monitorar a abertura de novas contratações e o cronograma de entregas do Programa Cisternas, avaliando a expansão da capacidade de reservação descentralizada no semiárido e em outras regiões prioritárias.
                    </p>
                    <p>
                      Observar as diretrizes regulatórias e orçamentárias para a agenda de saneamento a partir de 2027, incluindo a mobilização institucional do setor industrial para sustentar o ciclo de investimentos e metas de universalização.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Fontes: Casa Civil / Novo PAC | MDS | CNI / Brasil 61
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Impacto para a Lorenzetti */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="agua-para-todos-analise-3">
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
                            Hipóteses observacionais sobre infraestrutura hidráulica, reservação e planejamento 2027–2037.
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
                      A expansão das redes de abastecimento de água e o avanço de novas ligações domiciliares <strong>podem criar oportunidades indiretas</strong> para componentes de infraestrutura hidráulica residencial, como registros, torneiras, tubos, conexões e dispositivos hidrossanitários em pontos de consumo.
                    </p>
                    <p>
                      A instalação de cisternas e sistemas de reservação descentralizada <strong>pode gerar demanda potencial</strong> por reservatórios complementares, bombas, torneiras e acessórios para distribuição interna de água em residências rurais.
                    </p>
                    <p>
                      A carteira com entregas previstas pós-2026 somada ao debate sobre uma agenda contínua de saneamento a partir de 2027 <strong>deve ser monitorada</strong> como indicador de dinâmica territorial, apoiando o planejamento comercial e de portfólio no horizonte 2027–2037.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Fontes: Casa Civil / Novo PAC | MDS | CNI / Brasil 61
                    </div>
                  </div>
                </div>
              </div>

            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. MATRIZ DE FRENTES DE ATUAÇÃO */}
      <section className="flex flex-col gap-6" id="agua-para-todos-frentes">
        
        <div className="flex flex-col gap-1 pb-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">2</div>
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
              Onde o Novo PAC está investindo em Água para Todos
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 pl-[44px]">
            Principais frentes de abastecimento de água, reservação rural descentralizada e revitalização de bacias hidrográficas.
          </p>
        </div>

        <ResponsiveContainer minWidth="280px" gap="gap-6" className="w-full" id="agua-para-todos-frentes-grid">
          
          {/* Card 1: Abastecimento de Água */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="agua-para-todos-frente-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Subeixo Estruturante<br />(Abastecimento de Água)
              </h3>
            </div>
            
            <div className="h-px w-full bg-blue-100/70 dark:bg-blue-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Implantar e expandir redes de água tratada, captação e reservação em todo o território nacional.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-blue-50/40 dark:bg-blue-950/20 rounded-2xl p-5 border border-blue-100/80 dark:border-blue-900/40 mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">INVESTIMENTO TOTAL</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  R$ 12,5 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-100 dark:border-blue-900/40">
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-blue-600 dark:text-blue-400">371 empreendimentos</strong> no total; <strong className="font-bold text-blue-600 dark:text-blue-400">R$ 4,8 bi</strong> no ciclo pós-2026.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Droplet className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Universalização do acesso à água tratada e continuidade dos investimentos estruturais de longo prazo.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Programa Cisternas (MDS) */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="agua-para-todos-frente-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Waves className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Água Rural & Semiárido<br />(Programa Cisternas)
              </h3>
            </div>
            
            <div className="h-px w-full bg-emerald-100/70 dark:bg-emerald-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Garantir reservação de água para consumo humano e produção de alimentos a famílias de baixa renda no campo.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/80 dark:border-emerald-900/40 mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 block">CISTERNAS INSTALADAS</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  104,3 <span className="text-[22px] md:text-[24px] font-bold">mil</span>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-100 dark:border-emerald-900/40">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Entregas (2023–2025) com <strong className="font-bold text-emerald-600 dark:text-emerald-400">88% de concentração no Nordeste</strong>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <Waves className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Segurança hídrica para famílias do semiárido e fortalecimento da resiliência climática rural.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Revitalização de Bacias e Saneamento */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="agua-para-todos-frente-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Bacias & Saneamento<br />(Revitalização & Esgotamento)
              </h3>
            </div>
            
            <div className="h-px w-full bg-indigo-100/70 dark:bg-indigo-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Recuperar bacias hidrográficas, implantar ETEs urbanas e estruturar a agenda de investimentos pós-2027.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-indigo-50/40 dark:bg-indigo-950/20 rounded-2xl p-5 border border-indigo-100/80 dark:border-indigo-900/40 mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 block">REVITALIZAÇÃO DE BACIAS</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                  R$ 1,0 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-indigo-100 dark:border-indigo-900/40">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-indigo-600 dark:text-indigo-400">60 empreendimentos</strong>; Ex.: R$ 54 mi em Três Pontas/MG (ETE + 5 km interceptores).
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <Globe className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Proteção aos mananciais de captação e ampliação da coleta e tratamento de esgoto urbano.
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
            <strong className="font-semibold text-blue-600 dark:text-blue-400">Fontes:</strong> Casa Civil / Novo PAC (2026), MDS (17/02/2026), CNI / Brasil 61 (10/02/2026)
          </p>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="agua-para-todos-evidencias-section" className="scroll-mt-12 relative mt-2">
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

