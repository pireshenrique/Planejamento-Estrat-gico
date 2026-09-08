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
  Droplet
} from 'lucide-react';

interface CidadesSustentaveisResilientesViewProps {
  setActivePage: (page: string) => void;
}

const EVIDENCES = [
  {
    id: 1,
    tag: 'Infraestrutura Urbana',
    dateStr: 'Dados das Notícias',
    title: 'Novo PAC amplia investimentos em cidades sustentáveis e resilientes',
    headline: 'O eixo Cidades Sustentáveis e Resilientes do Novo PAC reúne investimentos voltados para modernização urbana, contemplando ações integradas de saneamento e prevenção.',
    summary: 'Investimentos estruturais em modernização urbana, saneamento e prevenção de riscos em municípios brasileiros. O objetivo principal do eixo é reduzir vulnerabilidades das cidades diante do crescimento urbano desordenado e de eventos climáticos extremos.',
    source: 'Ministério das Cidades / Governo Federal',
    url: 'https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/pac'
  },
  {
    id: 2,
    tag: 'Gestão de Riscos',
    dateStr: 'Dados das Notícias',
    title: 'Novo PAC prevê R$ 3,5 bilhões para prevenção de desastres e encostas',
    headline: 'O programa direciona recursos estruturais para contenção de encostas e drenagem urbana, elevando a capacidade das cidades diante do risco climático.',
    summary: 'O programa direcionou recursos no valor de R$ 3,5 bilhões para a execução de obras de contenção de encostas, drenagem urbana, redução de riscos de enchentes e adaptação de áreas vulneráveis. O foco estratégico é aumentar de forma direta a capacidade das cidades brasileiras de enfrentar eventos climáticos extremos.',
    source: 'Novo PAC Seleções / Ministério das Cidades',
    url: 'https://cbhcaratinga.org.br/noticias/abertas-as-inscricoes-para-o-novo-pac-selecoes-2025'
  },
  {
    id: 3,
    tag: 'Adaptação Climática',
    dateStr: 'Dados das Notícias',
    title: 'Programa Cidades Verdes Resilientes cria estratégia nacional para adaptação climática',
    headline: 'Iniciativa interministerial propõe soluções baseadas na natureza para elevar a qualidade ambiental e resiliência das metrópoles brasileiras.',
    summary: 'Criação do Programa Cidades Verdes Resilientes pelas pastas do Meio Ambiente e das Cidades, com o objetivo de melhorar a qualidade ambiental urbana e aumentar a capacidade de enfrentamento aos impactos das mudanças climáticas através da arborização e infraestrutura verde.',
    source: 'Ministério do Meio Ambiente / Ministério das Cidades',
    url: 'https://www.redus.org.br/programa-cidades-verdes-resilientes'
  },
  {
    id: 4,
    tag: 'Saneamento Básico',
    dateStr: 'Dados das Notícias',
    title: 'Ações de universalização do saneamento e esgotamento sanitário',
    headline: 'Investimentos em saneamento integrado visam ampliar a cobertura de esgotamento e água potável nas cidades contempladas.',
    summary: 'Projetos prioritários de esgotamento sanitário, abastecimento de água e manejo de águas pluviais, integrando diretrizes do Marco Legal do Saneamento com os investimentos federais do Novo PAC para reduzir déficits históricos de infraestrutura.',
    source: 'Secretaria Nacional de Saneamento / Ministério das Cidades',
    url: 'https://www.gov.br/cidades/pt-br/assuntos/saneamento'
  },
  {
    id: 5,
    tag: 'Inclusão Social',
    dateStr: 'Dados das Notícias',
    title: 'Programa Periferia Viva e urbanização de territórios vulneráveis',
    headline: 'Eixo de Cidades Sustentáveis implementa saneamento, melhoria habitacional e acesso a serviços básicos em territórios vulneráveis.',
    summary: 'Ações integradas de urbanização em favelas e periferias que envolvem melhoria habitacional, infraestrutura urbana, regularização fundiária e ampliação do acesso a serviços essenciais, promovendo a integração de comunidades vulneráveis.',
    source: 'Secretaria Nacional de Periferias / Ministério das Cidades',
    url: 'https://www.gov.br/cidades/pt-br/assuntos/periferia-viva'
  }
];

export function CidadesSustentaveisResilientesView({ setActivePage }: CidadesSustentaveisResilientesViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200" id="cidades-sustentaveis-resilientes-root">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6" id="cidades-sustentaveis-header">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight" id="cidades-sustentaveis-title">
            Cidades Sustentáveis e Resilientes
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed" id="cidades-sustentaveis-desc">
            Acompanhamento dos investimentos do Novo PAC em infraestrutura sustentável, saneamento, mobilidade urbana e resiliência climática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1" id="cidades-sustentaveis-grid">
          {/* Card 1 — Resiliência Climática */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="cidades-sustentaveis-card-1">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Resiliência Climática</p>
              <div className="flex items-baseline gap-1">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-blue-600 dark:text-blue-400 leading-none">R$ 3,5 bi</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Prevenção de riscos urbanos</p>
            </div>
          </div>

          {/* Card 2 — Alcance Territorial */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="cidades-sustentaveis-card-2">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Alcance Territorial</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-emerald-600 dark:text-emerald-400 leading-none">686</h3>
                <span className="text-[14px] font-bold text-emerald-600 dark:text-emerald-400">municípios</span>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Infraestrutura urbana e social</p>
            </div>
          </div>

          {/* Card 3 — Propostas Selecionadas */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="cidades-sustentaveis-card-3">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Propostas Selecionadas</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-indigo-600 dark:text-indigo-400 leading-none">861</h3>
                <span className="text-[14px] font-bold text-indigo-600 dark:text-indigo-400">projetos</span>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Aprovados pelo Novo PAC</p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section id="cidades-sustentaveis-analise-section">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Análise Estratégica
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            
            {/* 1. O que aconteceu e o que explica o resultado */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs" id="cidades-sustentaveis-analise-1">
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    
                    <div className="pt-1 flex-1 min-w-0">
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">1. O que aconteceu e o que explica o resultado</h4>
                      <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                        <span className="text-[13px] text-slate-600 dark:text-slate-300 font-semibold break-words">
                          Foco em resiliência climática urbana e preservação integrada
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                    01
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                    O Governo Federal, por meio do Ministério das Cidades e Meio Ambiente, estabeleceu uma infraestrutura integrada de suporte urbano que contempla investimentos na modernização das cidades e na consolidação do Programa Cidades Verdes Resilientes. Esse panorama visa de maneira direta conter os danos históricos do crescimento desordenado e de eventos climáticos extremos.
                  </p>
                  <p>
                    A estratégia de investimento direciona recursos para eixos fundamentais como a contenção de encostas, drenagem de bacias, proteção de recursos hídricos e urbanização de territórios vulneráveis. Assim, o arcabouço de expansão urbana brasileiro transiciona de um modelo focado unicamente no crescimento físico para um modelo centrado em adaptação climática estrutural e infraestrutura natural.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800">
                    Evidências utilizadas: Ministério das Cidades / Governo Federal ("Novo PAC amplia investimentos em cidades sustentáveis e resilientes"), Ministério do Meio Ambiente / Ministério das Cidades ("Programa Cidades Verdes Resilientes cria estratégia nacional para adaptação climática").
                  </div>
                </div>
              </div>
            </div>

            <ResponsiveContainer minWidth="320px" gap="gap-5">
              
              {/* 2. O que observar nos próximos meses */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="cidades-sustentaveis-analise-2">
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                        <Search className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      
                      <div className="pt-1 flex-1 min-w-0">
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">2. O que observar nos próximos meses</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-600 dark:text-slate-300 font-semibold break-words">
                            Aplicação de recursos de desastres e frentes ambientais
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                     02
                    </span>
                  </div>

                  <div className="flex flex-col gap-3.5 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      Deve-se acompanhar de forma rigorosa a liberação e execução física do orçamento de R$ 3,5 bilhões voltados para prevenção de desastres urbanos, monitorando de forma direta as obras de contenção de encostas e drenagem urbana que beneficiarão regiões de risco.
                    </p>
                    <p>
                      Paralelamente, deve-se observar os desdobramentos de planejamento urbano sustentável do Programa Cidades Verdes Resilientes, especificamente na implementação de soluções baseadas na natureza, arborização de centros urbanos e iniciativas estruturais voltadas a preparar as cidades para enchentes, ondas de calor e escassez hídrica.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências utilizadas: Novo PAC Seleções / Ministério das Cidades ("Novo PAC prevê R$ 3,5 bilhões para prevenção de desastres e encostas") e Ministério do Meio Ambiente / Ministério das Cidades ("Programa Cidades Verdes Resilientes cria estratégia nacional para adaptação climática").
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Impacto para a Lorenzetti */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="cidades-sustentaveis-analise-3">
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                        <Target className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      
                      <div className="pt-1 flex-1 min-w-0">
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">3. Impacto para a Lorenzetti</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-600 dark:text-slate-300 font-semibold break-words">
                            Metas de saneamento, eficiência hídrica e habitabilidade
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                      03
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      Os vultosos investimentos do Novo PAC em urbanização de territórios vulneráveis com foco em melhoria habitacional, saneamento e conexão de serviços básicos <strong>podem gerar</strong> um aumento sustentado na necessidade de fornecimento de produtos sanitários eficientes, tais como chuveiros, aquecedores e torneiras adequadas aos novos padrões.
                    </p>
                    <p>
                      Da mesma forma, as metas governamentais em mobilidade urbana e na ampliação da infraestrutura das metrópoles <strong>podem criar oportunidades</strong> no fornecimento de metais e louças economizadoras direcionados a edificações públicas, enquanto o foco estratégico na mitigação de escassez hídrica e resiliência habitacional <strong>pode representar risco</strong> regulatório acrescido ou <strong>pode demandar acompanhamento</strong> estrito no desenvolvimento de portfólios altamente eficientes no uso dos recursos hídricos.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências Utilizadas: Ministério das Cidades / Governo Federal ("Novo PAC amplia investimentos em cidades sustentáveis e resilientes"), Secretaria Nacional de Periferias / Ministério das Cidades ("Programa Periferia Viva e urbanização de territórios vulneráveis") e Secretaria Nacional de Saneamento / Ministério das Cidades ("Ações de universalização do saneamento e esgotamento sanitário").
                    </div>
                  </div>
                </div>
              </div>

            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. MATRIZ DE FRENTES DE ATUAÇÃO */}
      <section className="flex flex-col gap-6" id="cidades-sustentaveis-frentes">
        
        <div className="flex flex-col gap-1 pb-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">2</div>
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
              Principais Frentes do Novo PAC – Cidades Sustentáveis e Resilientes
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 pl-[44px]">
            Eixos prioritários de investimento em saneamento, prevenção de riscos e resiliência urbana.
          </p>
        </div>

        <ResponsiveContainer minWidth="280px" gap="gap-6" className="w-full" id="cidades-sustentaveis-frentes-grid">
          
          {/* Card 1: Prevenção de Riscos e Encostas */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="cidades-sustentaveis-frente-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Prevenção de Riscos<br />e Contenção de Encostas
              </h3>
            </div>
            
            <div className="h-px w-full bg-blue-100/70 dark:bg-blue-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Mitigar impactos de eventos climáticos extremos e proteger populações vulneráveis em áreas de encostas e várzeas.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-blue-50/40 dark:bg-blue-950/20 rounded-2xl p-5 border border-blue-100/80 dark:border-blue-900/40 mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">CONTENÇÃO DE ENCOSTAS</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  R$ 3,5 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-100 dark:border-blue-900/40">
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Obras de drenagem urbana e <strong className="font-bold text-blue-600 dark:text-blue-400">controle de alagamentos</strong>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Redução de desastres naturais, maior resiliência de encostas e preservação de vidas em áreas urbanas.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Saneamento Básico e Urbanização */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="cidades-sustentaveis-frente-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Droplet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Saneamento Básico<br />e Urbanização
              </h3>
            </div>
            
            <div className="h-px w-full bg-emerald-100/70 dark:bg-emerald-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Universalizar o saneamento e urbanizar favelas e territórios vulneráveis através do programa Periferia Viva.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/80 dark:border-emerald-900/40 mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 block">ATENDIMENTO MUNICIPAL</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  686 <span className="text-[18px] md:text-[20px] font-bold text-emerald-600/90 dark:text-emerald-400/90">municípios</span>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-100 dark:border-emerald-900/40">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Obras de <strong className="font-bold text-emerald-600 dark:text-emerald-400">saneamento integrado</strong> e esgotamento sanitário.
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
                  Aumento da habitabilidade, melhoria da saúde pública e redução de desigualdades territoriais.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Resiliência e Soluções Verdes */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="cidades-sustentaveis-frente-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Resiliência Urbana e<br />Soluções Verdes
              </h3>
            </div>
            
            <div className="h-px w-full bg-indigo-100/70 dark:bg-indigo-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Promover a adaptação climática urbana através do Programa Cidades Verdes Resilientes e infraestruturas ecológicas.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-indigo-50/40 dark:bg-indigo-950/20 rounded-2xl p-5 border border-indigo-100/80 dark:border-indigo-900/40 mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 block">PROPOSTAS SELECIONADAS</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                  861 <span className="text-[18px] md:text-[20px] font-bold text-indigo-600/90 dark:text-indigo-400/90">propostas</span>
                </div>
              </div>

              <div className="pt-3 border-t border-indigo-100 dark:border-indigo-900/40">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Parques lineares, arborização e <strong className="font-bold text-indigo-600 dark:text-indigo-400">soluções baseadas na natureza</strong>.
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
                  Mitigação de ilhas de calor, conservação ambiental e resiliência das cidades frente às mudanças do clima.
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
            <strong className="font-semibold text-blue-600 dark:text-blue-400">Fontes:</strong> Ministério das Cidades (08/05/2026), Casa Civil / Novo PAC (2026)
          </p>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="cidades-sustentaveis-evidencias-section" className="scroll-mt-12 relative mt-2">
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
