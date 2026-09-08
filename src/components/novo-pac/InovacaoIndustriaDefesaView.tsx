import { EvidenceCard } from '../layout/EvidenceCard';
import React from 'react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { 
  Shield, 
  Target, 
  TrendingUp, 
  Search, 
  CheckCircle,
  Activity,
  Layers,
  ArrowUpRight,
  Calendar,
  Radio,
  Ship,
  Anchor,
  Compass,
  Zap,
  Globe,
  Award,
  Cpu
} from 'lucide-react';

interface InovacaoIndustriaDefesaViewProps {
  setActivePage: (page: string) => void;
}

const EVIDENCES = [
  {
    id: 1,
    tag: 'Aeronáutica / Caça Supersônico Gripen',
    dateStr: '27/03/2026',
    title: 'Primeiro caça supersônico produzido no Brasil tem apoio do Novo PAC',
    headline: 'Apresentação do primeiro F-39E Gripen produzido integralmente no país marca avanço da indústria de defesa com apoio do Novo PAC.',
    summary: 'A apresentação do primeiro F-39E Gripen produzido integralmente no Brasil marcou avanço importante da indústria de defesa. O programa FX-2 possui R$ 10,5 bilhões dentro do Novo PAC, contempla 36 aeronaves e envolve transferência de tecnologia para a indústria nacional, envolvendo empresas como Embraer, AEL Sistemas, Akaer e Atech.',
    source: 'Plantão News',
    url: 'https://plantaonews.com.br/primeiro-caca-supersonico-produzido-inteiramente-no-pais-tem-apoio-do-novo-pac/'
  },
  {
    id: 2,
    tag: 'Presidência da República / Programa FX-2',
    dateStr: '25/03/2026',
    title: 'Com presença de Lula, Brasil apresenta primeiro caça supersônico produzido inteiramente no país',
    headline: 'Projeto FX-2 envolve R$ 28,5 bilhões no período 2014–2033 com transferência de tecnologia e capacitação da indústria.',
    summary: 'A apresentação do primeiro caça supersônico produzido no país consolida a capacitação tecnológica nacional. O projeto FX-2 envolve R$ 28,5 bilhões no período 2014–2033, sendo R$ 10,5 bilhões no Novo PAC, com transferência de tecnologia e formação de competência para atender futuras encomendas da indústria de defesa.',
    source: 'Portal Novo Contexto / Agência Gov',
    url: 'https://portalnovocontexto.com.br/com-presenca-de-lula-brasil-apresenta-primeiro-caca-supersonico-produzido-inteiramente-no-pais/'
  },
  {
    id: 3,
    tag: 'Marinha do Brasil / Complexo de Itaguaí',
    dateStr: '27/03/2026',
    title: 'Novas instalações fortalecem o Programa de Desenvolvimento de Submarinos em Itaguaí',
    headline: 'Entrega de prédio de 4.206 m² para formação e sistema de combustível marítimo de 1,4 milhão de litros no PROSUB.',
    summary: 'O Novo PAC apoiou a entrega de novas instalações no Complexo Naval de Itaguaí, incluindo um prédio de 4.206 m² destinado à formação militar e um sistema de armazenamento de combustível marítimo com dois tanques de 700 mil litros cada. O projeto reforça logística, abastecimento, capacitação e infraestrutura do PROSUB.',
    source: 'Casa Civil',
    url: 'https://www.gov.br/casacivil/pt-br/assuntos/noticias/2026/marco/novas-instalacoes-da-marinha-fortalecem-infraestrutura-do-programa-de-desenvolvimento-de-submarinos-em-itaguai-rj-1'
  },
  {
    id: 4,
    tag: 'Marinha do Brasil / Manutenção de Submarinos',
    dateStr: '20/03/2025',
    title: 'Marinha inaugura estaleiro para manutenção e modernização de submarinos',
    headline: 'Ativação do Estaleiro de Manutenção da Ilha da Madeira amplia capacidade permanente de suporte aos submarinos.',
    summary: 'O Estaleiro de Manutenção da Ilha da Madeira, no Complexo Naval de Itaguaí, foi ativado como parte do PROSUB e do Novo PAC. A estrutura amplia a capacidade de manutenção e aprestamento dos submarinos e fortalece a infraestrutura permanente necessária ao desenvolvimento da capacidade naval brasileira.',
    source: 'Poder Naval',
    url: 'https://www.naval.com.br/blog/2025/03/20/marinha-inaugura-estaleiro-para-manutencao-e-modernizacao-de-submarinos/'
  },
  {
    id: 5,
    tag: 'Exército Brasileiro / PLOA 2025',
    dateStr: '20/01/2025',
    title: 'Os Programas do Exército Brasileiro no PLOA 2025',
    headline: 'Novo PAC contempla R$ 1,43 bi em quatro programas estratégicos: Forças Blindadas, Aviação, SISFRON e ASTROS 2020.',
    summary: 'O Novo PAC contempla quatro projetos estratégicos do Exército: Forças Blindadas (R$ 622 milhões, para reativar a produção de viaturas blindadas no Brasil e fortalecer a BID), Aviação do Exército (R$ 538 milhões), SISFRON (R$ 200 milhões, para ampliar o monitoramento na faixa de fronteira) e ASTROS 2020 (R$ 70 milhões).',
    source: 'Forças Terrestres',
    url: 'https://www.forte.jor.br/2025/01/20/os-programas-do-exercito-brasileiro-no-projeto-de-lei-orcamentaria-de-2025/'
  }
];

export function InovacaoIndustriaDefesaView({ setActivePage }: InovacaoIndustriaDefesaViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200" id="inovacao-defesa-root">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6" id="inovacao-defesa-header">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight" id="inovacao-defesa-title">
            Inovação para a Indústria da Defesa
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed" id="inovacao-defesa-desc">
            Acompanhamento dos investimentos do Novo PAC no fortalecimento da Base Industrial de Defesa (BID), programas estratégicos das Forças Armadas, transferência de tecnologia e capacitação produtiva nacional.
          </p>
        </div>

        <ResponsiveContainer minWidth="240px" gap="gap-3" className="w-full flex-1" id="inovacao-defesa-grid">
          {/* Card 1 — Investimento Novo PAC (Escala) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="inovacao-defesa-card-1">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">INVESTIMENTO NOVO PAC</p>
              <div className="flex items-baseline gap-1">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">R$ 52,8 bi</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">16 projetos estratégicos de Defesa no Novo PAC.</p>
            </div>
          </div>

          {/* Card 2 — Conteúdo Local (Tamandaré) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="inovacao-defesa-card-2">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <Ship className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">CONTEÚDO LOCAL — TAMANDARÉ</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">+R$ 4,8 bi</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Conteúdo local no programa das Fragatas Tamandaré, envolvendo cerca de 1.000 empresas.</p>
            </div>
          </div>

          {/* Card 3 — Exportações de Defesa (Competitividade Internacional) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="inovacao-defesa-card-3">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">EXPORTAÇÕES DE DEFESA</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">US$ 3,1 bi</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Autorizações de exportação em 2025, alta de 74%.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section id="inovacao-defesa-analise-section">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Análise Estratégica
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            
            {/* 1. O que aconteceu e o que explica o resultado */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs" id="inovacao-defesa-analise-1">
              <div className="flex flex-col gap-6">
                
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-800">
                      <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">1. O que aconteceu e o que explica o resultado</h4>
                      <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                        <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                          Avanço da indústria aeroespacial, infraestrutura naval estratégica e fortalecimento das capacidades terrestres no Novo PAC.
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800 shrink-0">
                    FATO
                  </span>
                </div>

                <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                  <p>
                    No segmento aeroespacial, a apresentação do primeiro caça supersônico F-39E Gripen produzido integralmente no Brasil marcou um avanço na transferência de tecnologia e na capacitação da indústria nacional. O programa FX-2 envolve R$ 28,5 bilhões entre 2014 e 2033, sendo R$ 10,5 bilhões alocados no Novo PAC.
                  </p>
                  <p>
                    Na indústria naval, o Novo PAC apoia a expansão da infraestrutura do Complexo Naval de Itaguaí e do PROSUB, fortalecendo capacidades de formação, manutenção e suporte ao ciclo de vida dos submarinos. O movimento amplia a infraestrutura tecnológica e industrial necessária à produção e sustentação de sistemas de alta complexidade.
                  </p>
                  <p>
                    No segmento terrestre, a carteira contempla programas como Forças Blindadas, SISFRON, Aviação do Exército e ASTROS 2020, combinando modernização de equipamentos, monitoramento de fronteiras e fortalecimento da Base Industrial de Defesa.
                  </p>
                  <p>
                    Em conjunto, os projetos indicam uma estratégia que combina aquisição de capacidades, transferência tecnológica e fortalecimento da indústria nacional.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Evidências utilizadas: Plantão News (27/03/2026), Portal Novo Contexto / Agência Gov (25/03/2026), Casa Civil (27/03/2026), Poder Naval (20/03/2025), Forças Terrestres (20/01/2025)
                  </div>
                </div>
              </div>
            </div>

            {/* 2. O que observar nos próximos meses e 3. Impacto para a Lorenzetti */}
            <ResponsiveContainer minWidth="320px" gap="gap-5" className="w-full" id="inovacao-defesa-duas-colunas">
              
              {/* Bloco 2: O que observar nos próximos meses */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col justify-between" id="inovacao-defesa-analise-2">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800">
                        <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">2. O que observar nos próximos meses</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                            Produção seriada do Gripen, operação do estaleiro de Itaguaí e execução orçamentária dos programas do Exército.
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800 shrink-0">
                      MONITORAMENTO
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                    <p>
                      Acompanhar o ritmo de produção e montagem das unidades do caça supersônico F-39E Gripen no Brasil e a absorção de tecnologia pela cadeia de fornecedores nacionais (Embraer, AEL, Akaer, Atech).
                    </p>
                    <p>
                      Monitorar o cronograma operacional das novas instalações e do Estaleiro de Manutenção da Ilha da Madeira em Itaguaí (RJ) para manutenção e sustentação do ciclo de vida dos submarinos.
                    </p>
                    <p>
                      Observar a execução dos repasses orçamentários para as Forças Blindadas, o SISFRON, a Aviação do Exército e o ASTROS 2020, avaliando o avanço na produção seriada e no monitoramento de fronteiras.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências utilizadas: Plantão News (27/03/2026), Portal Novo Contexto (25/03/2026), Casa Civil (27/03/2026), Poder Naval (20/03/2025), Forças Terrestres (20/01/2025)
                    </div>
                  </div>
                </div>
              </div>

              {/* Bloco 3: Impacto para a Lorenzetti */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col justify-between" id="inovacao-defesa-analise-3">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-800">
                        <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">3. Impacto para a Lorenzetti</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                            Hipóteses observacionais sobre infraestrutura predial, polos industriais e variáveis de contexto 2027–2037.
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800 shrink-0">
                      HIPÓTESE
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                    <p>
                      A construção e modernização de infraestruturas físicas de grande porte (como prédios de formação de 4.206 m², sistemas de armazenamento e instalações de estaleiros) podem gerar demandas indiretas por soluções prediais, materiais elétricos e equipamentos hidrossanitários.
                    </p>
                    <p>
                      A mobilização e o fortalecimento de polos industriais especializados (como aeroespacial, complexos navais em Itaguaí e polos metalmecânicos de defesa terrestre) podem criar oportunidades de desenvolvimento regional e demanda por infraestrutura urbana e predial nos municípios do entorno.
                    </p>
                    <p>
                      No horizonte de Planejamento Estratégico 2027–2037, a continuidade dos contratos estruturantes de defesa plurianuais (como o ciclo FX-2 até 2033 e projetos de blindados) pode demandar acompanhamento como indicador de estabilidade da atividade industrial de média e alta tecnologia no país.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências Utilizadas: Casa Civil (27/03/2026), Poder Naval (20/03/2025), Plantão News (27/03/2026), Forças Terrestres (20/01/2025)
                    </div>
                  </div>
                </div>
              </div>

            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. MATRIZ DE FRENTES DE ATUAÇÃO */}
      <section className="flex flex-col gap-6" id="inovacao-defesa-frentes">
        
        <div className="flex flex-col gap-1 pb-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">2</div>
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
              Principais Frentes do Novo PAC – Indústria da Defesa
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 pl-[44px]">
            Pilares estratégicos de investimentos em aviação e sistemas aeroespaciais, indústria naval e sistemas terrestres de defesa.
          </p>
        </div>

        <ResponsiveContainer minWidth="280px" gap="gap-6" className="w-full" id="inovacao-defesa-frentes-grid">
          
          {/* Card 1 — Aviação e Sistemas Aeroespaciais */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="inovacao-defesa-frente-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Aviação e Sistemas<br />Aeroespaciais
              </h3>
            </div>
            
            <div className="h-px w-full bg-indigo-100/70 dark:bg-indigo-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Produzir sistemas de alta complexidade e ampliar a transferência de tecnologia para a Base Industrial de Defesa.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-indigo-50/40 dark:bg-indigo-950/20 rounded-2xl p-5 border border-indigo-100/80 dark:border-indigo-900/40 mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 block">APORTE NOVO PAC (FX-2)</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                  R$ 10,5 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-indigo-100 dark:border-indigo-900/40">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-indigo-600 dark:text-indigo-400">36 caças Gripen</strong> com produção nacional e ~350 engenheiros brasileiros capacitados.
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
                  Desenvolvimento de competências tecnológicas, engenharia de alta complexidade e capacidade produtiva nacional.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — Indústria Naval e Submarinos */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="inovacao-defesa-frente-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Ship className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Indústria Naval e<br />Submarinos
              </h3>
            </div>
            
            <div className="h-px w-full bg-blue-100/70 dark:bg-blue-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Desenvolver capacidade nacional para construção, manutenção e sustentação de sistemas navais de alta complexidade.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-blue-50/40 dark:bg-blue-950/20 rounded-2xl p-5 border border-blue-100/80 dark:border-blue-900/40 mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">CONTEÚDO LOCAL (TAMANDARÉ)</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <Anchor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  +R$ 4,8 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-100 dark:border-blue-900/40">
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-blue-600 dark:text-blue-400">4 fragatas</strong> de alta complexidade gerando ~23 mil empregos diretos e indiretos no país.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Activity className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Adensamento da cadeia naval, desenvolvimento de fornecedores e sustentação tecnológica estratégica.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — Sistemas Terrestres e Fronteiras */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="inovacao-defesa-frente-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Sistemas Terrestres e<br />Fronteiras
              </h3>
            </div>
            
            <div className="h-px w-full bg-emerald-100/70 dark:bg-emerald-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Modernizar capacidades terrestres, ampliar o monitoramento de fronteiras e fortalecer a produção nacional.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/80 dark:border-emerald-900/40 mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 block">PROGRAMAS DO EXÉRCITO</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  R$ 1,43 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-100 dark:border-emerald-900/40">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Forças Blindadas, Aviação e <strong className="font-bold text-emerald-600 dark:text-emerald-400">R$ 200 mi no SISFRON</strong> para monitoramento de fronteiras.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <Award className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Fortalecimento da Base Industrial de Defesa terrestre, sensores e capacidade de vigilância territorial.
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
            <strong className="font-semibold text-blue-600 dark:text-blue-400">Fontes:</strong> Casa Civil / Novo PAC (2026), Ministério da Defesa (2025/2026)
          </p>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="inovacao-defesa-evidencias-section" className="scroll-mt-12 relative mt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Rastreabilidade direta de publicações especializadas e veículos de comunicação sobre o Novo PAC.</p>
          </div>
        </div>

        {EVIDENCES.length > 0 ? (
          <ResponsiveContainer minWidth="320px" gap="gap-5" className="w-full">
            {EVIDENCES.map((ev) => (
              <EvidenceCard key={ev.id} evidence={ev as any} />
            ))}
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
