import React, { useState } from 'react';
import { 
  Rocket, 
  Search, 
  Target, 
  TrendingUp, 
  Factory, 
  ShieldCheck, 
  Users, 
  Compass, 
  Award, 
  Sparkles,
  GitFork,
  ArrowRight,
  TrendingDown,
  DollarSign,
  Briefcase,
  Store,
  BarChart3,
  Scale,
  GraduationCap,
  ExternalLink,
  Info,
  Maximize2,
  X,
  FileText,
  AlertTriangle,
  Building2,
  CreditCard,
  Percent,
  CheckCircle2
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface EmpreendedorismoViewProps {
  setActivePage: (page: string) => void;
}

// ----------------------------------------------------------------------------
// 1. AS 3 PRINCIPAIS NOTÍCIAS (ALINHADAS COM OS 3 INDICADORES DO CABEÇALHO)
// Indicador 1: Potencial Global (2ª Maior População Empreendedora) -> Sebrae
// Indicador 2: Ritmo de Abertura (13 Mil / Dia & +14% em 2026) -> Exame Bússola & Sebrae
// Indicador 3: Juventude & MEI (1ª Empresa em vez do 1º emprego) -> O Globo
// ----------------------------------------------------------------------------
const EMPREENDEDORISMO_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'emp-sebrae-2a-maior-populacao',
    tag: 'Potencial Global / Agência Sebrae',
    dateStr: '2026',
    title: 'Brasil tem a 2ª maior população potencial empreendedora do mundo',
    headline: 'Levantamento oficial do Sebrae com base em dados demográficos e de intenção produtiva posiciona o Brasil como a segunda maior nação do planeta em contingente de pessoas que desejam ou planejam abrir seu próprio empreendimento.',
    source: 'Agência Sebrae',
    url: 'https://agenciasebrae.com.br/dados/brasil-tem-a-2a-maior-populacao-potencial-empreendedora-do-mundo/'
  },
  {
    id: 'emp-exame-13mil-empresas-dia',
    tag: 'Ritmo de Abertura / Exame Bússola',
    dateStr: '2025/2026',
    title: 'Brasil abriu 13 mil empresas por dia',
    headline: 'Estatísticas de registro mercantil e dinamismo empresarial compiladas pela Exame Bússola apontam a abertura média diária de cerca de 13 mil novas empresas no território nacional, somando-se à alta de 14% registrada pelo Sebrae em 2026.',
    source: 'Exame Bússola / Sebrae',
    url: 'https://exame.com/bussola/brasil-abriu-13-mil-empresas-por-dia-em-2025/'
  },
  {
    id: 'emp-oglobo-jovens-1a-empresa',
    tag: 'Juventude & Empreendedorismo / O Globo',
    dateStr: '2026',
    title: 'Em vez do 1º emprego, a 1ª empresa: cresce número de jovens que começam a vida profissional pelo empreendedorismo',
    headline: 'Matéria de O Globo detalha o movimento crescente de jovens que, ao invés de buscar a inserção inicial via emprego com carteira assinada (CLT), optam por iniciar sua trajetória profissional diretamente como fundadores de pequenos negócios, prestadores autônomos ou prestadores MEI.',
    source: 'O Globo',
    url: 'https://oglobo.globo.com/economia/noticia/2026/06/14/em-vez-do-1o-emprego-a-1a-empresa-cresce-numero-de-jovens-que-comecam-a-vida-profissional-pelo-empreendedorismo.ghtml'
  }
];

// ----------------------------------------------------------------------------
// 2. OUTRAS NOTÍCIAS E EVIDÊNCIAS ESTRATÉGICAS
// ----------------------------------------------------------------------------
const EMPREENDEDORISMO_OTHER_EVIDENCES: Evidence[] = [
  {
    id: 'emp-sebrae-cresce-14pct-2026',
    tag: 'Abertura de Negócios / Agência Sebrae',
    dateStr: '2026',
    title: 'Empreendedorismo em alta: abertura de novos pequenos negócios cresce 14% em 2026',
    headline: 'Dados consolidados da Agência Sebrae registram uma expansão de 14% no ritmo de criação e formalização de novos pequenos negócios e microempresas no país em 2026, impulsionada por serviços especializados, comércio e construção civil.',
    source: 'Agência Sebrae',
    url: 'https://agenciasebrae.com.br/dados/empreendedorismo-em-alta-abertura-de-novos-pequenos-negocios-cresce-14-em-2026/'
  },
  {
    id: 'emp-oglobo-teto-mei',
    tag: 'Regulação & Tributação / O Globo',
    dateStr: '2026',
    title: 'Governo avalia elevar o teto de faturamento para enquadrar empreendedor no MEI',
    headline: 'Reportagem de O Globo informa que o governo federal discute e avalia propostas para a elevação do limite máximo de faturamento anual do Microempreendedor Individual (MEI), visando adequar a faixa de enquadramento à inflação e evitar a exclusão de autônomos em crescimento.',
    source: 'O Globo',
    url: 'https://oglobo.globo.com/economia/noticia/2026/06/02/governo-cogita-elevar-o-teto-de-faturamento-para-enquadrar-empreendedor-no-mei-veja-o-que-pode-mudar.'
  },
  {
    id: 'emp-anamaco-prescritores',
    tag: 'Canais de Prescrição / Anamaco',
    dateStr: '2026',
    title: 'Anamaco aponta que instaladores autônomos influenciam 68% das compras de duchas e materiais hidráulicos',
    headline: 'Sondagem com o varejo de materiais de construção indica que o eletricista e o instalador hidráulico autônomo (MEI) atuam como principais prescritores técnicos de marcas e modelos no ponto de venda junto ao consumidor final.',
    source: 'Associação Nacional dos Comerciantes de Material de Construção (Anamaco)',
    url: 'https://www.anamaco.com.br/'
  }
];

export function EmpreendedorismoView({ setActivePage }: EmpreendedorismoViewProps) {
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const fgvStudyUrl = 'https://blogdoibre.fgv.br/posts/retrato-do-empreendedorismo-no-brasil';

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* HEADER NO PADRÃO EXATO                                                    */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Carreira e Gerações • Subtópico 03
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">•</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              Planejamento Estratégico 2027–2037
            </span>
          </div>

          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Empreendedorismo
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 mb-4">
            Panorama do empreendedorismo no Brasil: abertura de empresas, jovens fundadores, debate regulatório sobre o MEI e o papel estratégico dos autônomos na cadeia produtiva.
          </p>

          {/* Subtopic Switcher Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage('Carreira e Gerações')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral
            </button>
            <button 
              onClick={() => setActivePage('Perfil das gerações')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Perfil das Gerações
            </button>
            <button 
              onClick={() => setActivePage('Mudança de carreiras')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mudança de Carreiras
            </button>
            <button 
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Empreendedorismo
            </button>
            <button 
              onClick={() => setActivePage('Escala 6x1')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Escala 6x1
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          {/* Card 1: 2ª Maior População Empreendedora */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                POTENCIAL GLOBAL
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  2ª Maior
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">População empreendedora global.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Agência Sebrae.</p>
            </div>
          </div>

          {/* Card 2: 13 Mil Empresas/Dia & +14% */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                RITMO DE ABERTURA
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  13 Mil / Dia
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">+14% novos negócios em 2026.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Exame Bússola & Sebrae.</p>
            </div>
          </div>

          {/* Card 3: Jovens & 1ª Empresa */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                JUVENTUDE & MEI
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-purple-600 dark:text-purple-400 leading-none">
                  1ª Empresa
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Em vez do primeiro emprego CLT.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">O Globo (Economia).</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. PRINCIPAIS NOTÍCIAS (3 PRINCIPAIS ALINHADAS AOS 3 INDICADORES)        */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais Notícias de Empreendedorismo (Alinhadas aos Indicadores)
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes dos 3 Indicadores: <strong>Agência Sebrae • Exame Bússola • O Globo</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {EMPREENDEDORISMO_PRIMARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. O QUE OBSERVAR NOS PRÓXIMOS MESES / IMPACTO PARA A EMPRESA (2 COLUNAS) */}
      {/* ========================================================================= */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* Coluna 01: O que observar nos próximos meses */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-blue-100 dark:border-blue-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-blue-50 dark:text-blue-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      O que observar nos próximos meses
                    </h4>
                    <div className="inline-flex bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold">
                        Ritmo de criação de novos pequenos negócios (+14%), abertura de 13 mil empresas/dia, adesão juvenil e revisão do teto do MEI.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-blue-400 dark:marker:text-blue-500/70">
                    <li>O ritmo de criação de pequenos negócios no país, que registrou alta de 14% em 2026 (Agência Sebrae).</li>
                    <li>A abertura diária em torno de 13 mil empresas e a taxa de sobrevivência dos novos empreendimentos (Exame Bússola / Serasa).</li>
                    <li>O desfecho das discussões governamentais sobre a ampliação do teto de faturamento anual do MEI (O Globo).</li>
                    <li>A tendência de jovens iniciarem sua trajetória profissional criando empresas em vez de buscar vagas CLT (O Globo).</li>
                    <li>As séries históricas da FGV IBRE sobre a divisão entre empreendedorismo por oportunidade e por necessidade (Blog do IBRE FGV).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coluna 02: Impacto para a empresa (Lorenzetti) */}
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
                      Impacto para a empresa
                    </h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Fortalecimento da rede de instaladores e eletricistas autônomos como canal prescritor e atratividade frente à opção de empreender.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>O fato de o Brasil ter a 2ª maior população potencial empreendedora <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades</strong> para parcerias de capacitação técnica direta com milhares de prestadores de serviços de instalação.</li>
                    <li>A abertura massiva de pequenos negócios e reformas residenciais <strong className="text-slate-800 dark:text-slate-200">pode aumentar</strong> a relevância do eletricista e encanador autônomo na decisão de compra de duchas e torneiras no PDV.</li>
                    <li>A eventual elevação do teto de faturamento do MEI <strong className="text-slate-800 dark:text-slate-200">pode viabilizar</strong> maior formalização de assistências técnicas autorizadas e instaladores parceiros.</li>
                    <li>A preferência de jovens por empreender desde cedo <strong className="text-slate-800 dark:text-slate-200">pode representar risco</strong> de escassez na atração de operadores e técnicos iniciantes para o chão de fábrica, exigindo diferenciais de carreira.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. RETRATO DO EMPREENDEDORISMO NO BRASIL (FGV IBRE)                       */}
      {/* ========================================================================= */}
      <section id="retrato-empreendedorismo-fgv" className="scroll-mt-12 space-y-8">
        
        {/* CABEÇALHO DO BLOCO */}
        <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                  Estudo Estrutural
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  FGV IBRE | PNADC/IBGE + Sondagem FGV IBRE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Retrato do Empreendedorismo no Brasil
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Quem empreende, por que empreende e quais são os principais desafios enfrentados pelos donos de negócios no país.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={fgvStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                Ver estudo completo
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* DESTAQUES INICIAIS (4 INDICADORES) */}
          <div className="pt-6 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  Donos de negócios
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  ~30 MILHÕES
                </div>
                <span className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 block">
                  PNADC / 2º tri 2025
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  Da população ocupada
                </span>
                <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
                  29,3%
                </div>
                <span className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 block">
                  Participação no mercado
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  Trabalham por conta própria
                </span>
                <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">
                  85,9%
                </div>
                <span className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 block">
                  Sem empregados
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  Possuem CNPJ
                </span>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  34,4%
                </div>
                <span className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 block">
                  Taxa de formalização
                </span>
              </div>
            </div>

            {/* LEITURA DE SÍNTESE DOS DADOS */}
            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-900 dark:text-blue-300 font-bold block mb-0.5">
                  Síntese dos dados
                </strong>
                <span>
                  Empreendedorismo possui grande participação no mercado de trabalho brasileiro, mas uma parcela relevante ainda opera de forma individual e com baixa formalização.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* GRÁFICO 1 — EVOLUÇÃO DO EMPREENDEDORISMO (LARGURA AMPLA)             */}
        {/* --------------------------------------------------------------------- */}
        <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Gráfico 1 • FGV IBRE / PNADC
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Empreendedorismo mantém elevada participação no mercado de trabalho
              </h3>
            </div>
            <a
              href={fgvStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-semibold"
            >
              Fonte: FGV IBRE — Retrato do empreendedorismo no Brasil ↗
            </a>
          </div>

          {/* Imagem do Gráfico 1 com container responsivo e botão de zoom */}
          <div className="relative group bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-3 sm:p-4 border border-slate-200/80 dark:border-slate-750 flex items-center justify-center overflow-hidden">
            <img
              src="/fgv_grafico_1.jpg"
              alt="Gráfico 1: Evolução do Número de Donos de Negócios no Brasil - FGV IBRE"
              className="w-full h-auto max-h-[460px] object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setModalImage({
                src: '/fgv_grafico_1.jpg',
                title: 'Gráfico 1: Evolução do Número de Donos de Negócios no Brasil',
                subtitle: 'FGV IBRE | PNADC/IBGE'
              })}
              className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Ampliar
            </button>
          </div>

          {/* BOX: LEITURA DO GRÁFICO 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="md:col-span-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                LEITURA DO GRÁFICO
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                O Brasil chegou a aproximadamente 30 milhões de donos de negócios no segundo trimestre de 2025, equivalentes a 29,3% da população ocupada.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1">
                Evolução Temporal
              </span>
              <div className="flex items-center gap-3 my-1">
                <div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">2012</span>
                  <span className="text-lg font-bold text-slate-800 dark:text-slate-200">23,5 mi</span>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">2025</span>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">~30 mi</span>
                </div>
              </div>
              <p className="text-[11.5px] text-slate-600 dark:text-slate-400 mt-1 leading-tight">
                O empreendedorismo se consolidou como componente relevante da estrutura ocupacional brasileira.
              </p>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* PERFIL DO EMPREENDEDOR: QUEM EMPREENDE NO BRASIL?                     */}
        {/* --------------------------------------------------------------------- */}
        <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Perfil Estrutural • FGV IBRE / PNADC
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Quem empreende no Brasil?
              </h3>
            </div>
            <a
              href={fgvStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-semibold"
            >
              Fonte: FGV IBRE — Retrato do empreendedorismo no Brasil ↗
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Idade</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Concentração nas Faixas Maduras
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Predominância de adultos experientes (30 a 59 anos), com recente avanço da entrada direta de jovens no trabalho por conta própria.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                <Store className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Região</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Presença Nacional Descentralizada
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Forte presença no Sudeste e Nordeste, refletindo polos urbanos de comércio e serviços de instalação/manutenção.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
              <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Escolaridade (Destaque)</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Aumento Contínuo da Qualificação
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Crescimento progressivo da fatia de donos de negócios com ensino médio e superior completos na última década.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-750 text-xs text-slate-600 dark:text-slate-400">
            <strong>Síntese de perfil:</strong> Além do crescimento quantitativo, o perfil do empreendedor também passa por transformações, incluindo aumento da escolaridade.
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* GRÁFICO 7 — POR QUE O BRASILEIRO EMPREENDE? (GRANDE DESTAQUE)        */}
        {/* --------------------------------------------------------------------- */}
        <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Gráfico 7 • Destaque de Motivações
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Por que o brasileiro empreende?
              </h3>
            </div>
            <a
              href={fgvStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-semibold"
            >
              Fonte: FGV IBRE — Retrato do empreendedorismo no Brasil ↗
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Imagem do Gráfico 7 */}
            <div className="lg:col-span-7 relative group bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-3 sm:p-4 border border-slate-200/80 dark:border-slate-750 flex items-center justify-center overflow-hidden">
              <img
                src="/fgv_grafico_7.jpg"
                alt="Gráfico 7: Principal motivação para empreender - Sondagem FGV IBRE"
                className="w-full h-auto max-h-[380px] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setModalImage({
                  src: '/fgv_grafico_7.jpg',
                  title: 'Gráfico 7: Principal motivação para empreender',
                  subtitle: 'Sondagem do Mercado de Trabalho do FGV IBRE'
                })}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Ampliar
              </button>
            </div>

            {/* Painel Interpretativo ao Lado */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Principais Resultados da Sondagem
              </span>

              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    DESEJO DE INDEPENDÊNCIA
                  </span>
                  <span className="text-lg font-black text-blue-600 dark:text-blue-400">
                    22,2%
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    NECESSIDADE DE RENDA EXTRA
                  </span>
                  <span className="text-lg font-black text-slate-700 dark:text-slate-300">
                    18,3%
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    DESEMPREGO / NECESSIDADE DE RENDA
                  </span>
                  <span className="text-lg font-black text-slate-700 dark:text-slate-300">
                    17,5%
                  </span>
                </div>
              </div>

              {/* Bloco de Relação: Autonomia + Necessidade */}
              <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <div className="flex items-center justify-between font-bold text-slate-700 dark:text-slate-300">
                  <span>AUTONOMIA</span>
                  <span className="text-slate-400">+</span>
                  <span>NECESSIDADE</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>“Desejo de independência”</span>
                  <span>“Renda extra e sobrevivência”</span>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider block">
                    ↓ EMPREENDEDORISMO BRASILEIRO ↓
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-xs text-slate-700 dark:text-slate-300">
                <strong className="text-blue-800 dark:text-blue-300 block mb-0.5">Leitura dos resultados:</strong>
                “Autonomia e necessidade econômica coexistem entre as motivações para empreender.”
              </div>
            </div>

          </div>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* GRÁFICO 10 — BARREIRAS PARA EMPREENDER (GRANDE DESTAQUE)              */}
        {/* --------------------------------------------------------------------- */}
        <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                Gráfico 10 • Destaque de Barreiras & Dificuldades
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                O que dificulta empreender no Brasil?
              </h3>
            </div>
            <a
              href={fgvStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-semibold"
            >
              Fonte: FGV IBRE — Retrato do empreendedorismo no Brasil ↗
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Imagem do Gráfico 10 */}
            <div className="lg:col-span-7 relative group bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-3 sm:p-4 border border-slate-200/80 dark:border-slate-750 flex items-center justify-center overflow-hidden">
              <img
                src="/fgv_grafico_10.jpg"
                alt="Gráfico 10: Dificuldades para empreender - Sondagem FGV IBRE"
                className="w-full h-auto max-h-[400px] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setModalImage({
                  src: '/fgv_grafico_10.jpg',
                  title: 'Gráfico 10: Dificuldades para empreender',
                  subtitle: 'Sondagem do Mercado de Trabalho do FGV IBRE'
                })}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Ampliar
              </button>
            </div>

            {/* Destaques e Relações Estratégicas ao Lado */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Dois Maiores Gargalos Mapeados
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 text-center">
                  <span className="text-xl sm:text-2xl font-black text-red-600 dark:text-red-400 block">
                    36,5%
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    ACESSO AO CRÉDITO
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40 text-center">
                  <span className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 block">
                    36,0%
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    CARGA TRIBUTÁRIA
                  </span>
                </div>
              </div>

              {/* Quatro Relações Estratégicas */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Relações Estratégicas (Interpretação para Gestão)
                </span>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-white block font-bold">CRÉDITO</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">↓ Capacidade de investir</span>
                  </div>
                  
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-white block font-bold">TRIBUTAÇÃO</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">↓ Custos e margens</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-white block font-bold">BUROCRACIA</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">↓ Formalização</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-white block font-bold">CAPACITAÇÃO</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">↓ Gestão e produtividade</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-750 text-[11.5px] text-slate-500 dark:text-slate-400">
                <em>*As quatro relações acima constituem interpretação estratégica para tomada de decisão da liderança.</em>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. OUTRAS NOTÍCIAS E EVIDÊNCIAS DE SUPORTE (EVIDENCECARDS)                */}
      {/* ========================================================================= */}
      <section id="evidencias-complementares" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">
              Outras Notícias e Monitoramento Setorial
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>Sebrae • O Globo • Anamaco</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {EMPREENDEDORISMO_OTHER_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* MODAL DE AMPLIAÇÃO DAS IMAGENS ORIGINAIS */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-5 max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
              <div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {modalImage.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {modalImage.subtitle}
                </p>
              </div>
              <button
                onClick={() => setModalImage(null)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center p-2 bg-slate-50 dark:bg-slate-950/50 rounded-2xl">
              <img
                src={modalImage.src}
                alt={modalImage.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800 mt-3 text-xs text-slate-500 dark:text-slate-400">
              <span>Fonte: FGV IBRE — Retrato do empreendedorismo no Brasil</span>
              <a
                href={fgvStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold"
              >
                Abrir matéria original ↗
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
