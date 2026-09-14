import React from 'react';
import { 
  ShieldAlert, 
  ExternalLink, 
  Scale, 
  Search, 
  Target, 
  FileText, 
  HelpCircle,
  Radio,
  AlertOctagon,
  Info,
  Vote
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface AssedioAmbienteTrabalhoViewProps {
  setActivePage?: (page: string) => void;
}

export type AssedioTrabalhoViewProps = AssedioAmbienteTrabalhoViewProps;

// ============================================================================
// 1. EVIDÊNCIAS DE DESTAQUE (3 PRINCIPAIS COM URLs EXATAS)
// ============================================================================
const ASSEDIO_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'ass-noticia-01-trt8',
    tag: 'Judicialização / TRT-8',
    dateStr: '2026',
    title: 'Justiça do Trabalho recebeu 600 mil casos de assédio moral em seis anos',
    headline: 'Entre 2020 e 2025, cerca de 600 mil processos relacionados a assédio moral chegaram à Justiça do Trabalho, evidenciando a dimensão jurídica e organizacional do problema.',
    source: 'Justiça do Trabalho / TRT-8',
    url: 'https://www.trt8.jus.br/noticias/2026/assedio-moral-justica-do-trabalho-recebeu-600-mil-casos-de-2020-2025'
  },
  {
    id: 'ass-noticia-02-valor',
    tag: 'Passivo Trabalhista / Valor Econômico',
    dateStr: '28/02/2026',
    title: 'Ações por assédio moral e sexual avançam na Justiça do Trabalho',
    headline: 'O crescimento das ações relacionadas a assédio moral e sexual aumenta a exposição jurídica das organizações e reforça a importância de mecanismos preventivos e de investigação.',
    source: 'Valor Econômico',
    url: 'https://valor.globo.com/legislacao/noticia/2026/02/28/cresce-volume-de-acoes-por-assedio-moral-e-sexual-na-justica-do-trabalho.ghtml'
  },
  {
    id: 'ass-noticia-03-estadao',
    tag: 'Governança & Compliance / Estadão',
    dateStr: '2026',
    title: 'Empresas registram recorde de denúncias nos canais internos',
    headline: 'O aumento dos relatos internos reforça a importância dos canais de denúncia como instrumento de identificação de comportamentos inadequados e de governança corporativa.',
    source: 'Estadão (Governança)',
    url: 'https://www.estadao.com.br/economia/governanca/empresas-no-brasil-registram-recorde-de-denuncias-internas-mulheres-recorrem-mais-aos-canais/'
  }
];

// ============================================================================
// 2. NOTÍCIAS COMPLEMENTARES E MONITORAMENTO (COM URLs EXATAS)
// ============================================================================
const ASSEDIO_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'ass-outras-01-valor',
    tag: 'Passivo Trabalhista / Valor Econômico',
    dateStr: '28/02/2026',
    title: 'Cresce volume de ações por assédio moral e sexual',
    headline: 'Aumento da busca pelo judiciário trabalhista eleva o risco financeiro e reputacional de condutas corporativas abusivas não mitigadas.',
    source: 'Valor Econômico',
    url: 'https://valor.globo.com/legislacao/noticia/2026/02/28/cresce-volume-de-acoes-por-assedio-moral-e-sexual-na-justica-do-trabalho.ghtml'
  },
  {
    id: 'ass-outras-04-tst-eleitoral',
    tag: 'Fonte Institucional / TST',
    dateStr: '2026',
    title: 'Pesquisa traça panorama do assédio eleitoral no Brasil',
    headline: 'Tribunal Superior do Trabalho consolida levantamento nacional sobre denúncias, formas de coação e condenações por interferência no voto de empregados.',
    source: 'Tribunal Superior do Trabalho (TST)',
    url: 'https://www.tst.jus.br/-/pesquisa-da-justica-do-trabalho-traca-panorama-do-assedio-eleitoral-no-brasil'
  }
];

export function AssedioAmbienteTrabalhoView({ setActivePage }: AssedioAmbienteTrabalhoViewProps) {
  return (
    <div className="w-full flex flex-col gap-6 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO DA PÁGINA COM NAVEGAÇÃO E 3 CARDS DE INDICADORES PRINCIPAIS   */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Identificação & Navegação */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 flex items-center gap-1.5 shadow-xs">
                <Radio className="w-3 h-3 text-rose-600 dark:text-rose-400 animate-pulse" />
                ASSÉDIO NO AMBIENTE DE TRABALHO
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento 2027–2037</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <ShieldAlert className="w-7 h-7 text-rose-600 dark:text-rose-400 shrink-0" />
              Assédio no Trabalho
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              O crescimento das denúncias e das ações judiciais amplia a importância da prevenção, dos canais internos, da capacitação das lideranças e de mecanismos consistentes de governança no ambiente de trabalho.
            </p>
          </div>

          {/* Navegação Rápida entre Subtópicos de SST e Força de Trabalho */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage && setActivePage('Carreira e Gerações')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral
            </button>
            <button 
              onClick={() => setActivePage && setActivePage('Saúde Mental no Trabalho')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Saúde Mental
            </button>
            <button 
              onClick={() => setActivePage && setActivePage('NR-1')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              NR-1 Psicossociais
            </button>
            <button 
              onClick={() => setActivePage && setActivePage('Diversidade e inclusão')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Diversidade & Inclusão
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Assédio no Trabalho
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          {/* Card 1: 600 MIL Casos de Assédio Moral */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                ASSÉDIO MORAL (2020–2025)
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  600 MIL
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Processos relacionados a assédio moral recebidos pela Justiça do Trabalho em seis anos.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Justiça do Trabalho / TRT-8
              </p>
            </div>
          </div>

          {/* Card 2: ~10 MIL Denúncias ao MPT */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                DENÚNCIAS AO MPT
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  ~10 MIL
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Denúncias de assédio moral registradas no Ministério Público do Trabalho (Jan a Jul 2025).
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Ministério Público do Trabalho (MPT)
              </p>
            </div>
          </div>

          {/* Card 3: ~800 Denúncias de Assédio Sexual */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <AlertOctagon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                ASSÉDIO SEXUAL (MPT)
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-amber-600 dark:text-amber-400 leading-none">
                  ~800
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Registros de assédio sexual formalizados no MPT entre janeiro e julho de 2025.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Ministério Público do Trabalho (MPT)
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Nota Metodológica de Integridade dos Dados */}
      <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            <strong className="text-slate-700 dark:text-slate-300">Rastreabilidade & Integridade Metodológica:</strong> Os dados da <em>Justiça do Trabalho</em> (processos judiciais distribuídos) e do <em>Ministério Público do Trabalho</em> (denúncias administrativas recebidas) representam esferas distintas e não devem ser somados ou tratados como casos com decisão final transitada em julgado.
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. PRINCIPAIS NOTÍCIAS (ALINHADAS AOS INDICADORES / URLs OFICIAIS)        */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais Notícias sobre Assédio no Ambiente de Trabalho (Alinhadas aos Indicadores)
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes das Evidências: <strong>TRT-8 • Valor Econômico • Estadão</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {ASSEDIO_PRIMARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>

        {/* Quadro Analítico: Leitura das Denúncias e Canais */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <p className="font-bold text-slate-900 dark:text-white">
              Hipótese Contextual sobre o Aumento dos Relatos Internos
            </p>
            <p>
              O aumento no volume de denúncias não significa necessariamente um crescimento proporcional na ocorrência de abusos. A expansão dos canais estruturados, a maior confiança institucional e a conscientização sobre direitos e limites de conduta encorajam os colaboradores a formalizar queixas antes reprimidas.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. O QUE OBSERVAR NO BRASIL / IMPACTO PARA A EMPRESA (2 COLUNAS 01 E 02) */}
      {/* ========================================================================= */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* Coluna 01: O que observar no Brasil */}
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
                      O que observar no Brasil
                    </h4>
                    <div className="inline-flex bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold">
                        Avanço de ações judiciais, tipologia das denúncias, tempos de apuração e integridade eleitoral.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-blue-400 dark:marker:text-blue-500/70">
                    <li>A evolução do volume e da tipologia de ações de assédio moral e sexual na Justiça do Trabalho (TRT-8 / Valor Econômico).</li>
                    <li>A maturidade e capacidade de resposta dos canais de denúncia para garantir apurações rápidas e com sigilo estrito (Estadão).</li>
                    <li>A intensificação da atuação do Ministério Público do Trabalho na mediação e fiscalização de assédio moral e sexual nas empresas (MPT).</li>
                    <li>A diferenciação prática entre cobrança legítima por resultados e condutas abusivas ou vexatórias de liderança (TST / OIT).</li>
                    <li>O monitoramento preventivo de assédio eleitoral e coação de voto no ambiente corporativo e fabril (TST / MPT).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coluna 02: Impacto para a Lorenzetti */}
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
                      Impacto para a Lorenzetti
                    </h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Governança de canais éticos, capacitação de lideranças fabris, clima e mitigação de passivos.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>A manutenção de canais de denúncia acessíveis e blindados <strong className="text-slate-800 dark:text-slate-200">pode fortalecer</strong> a credibilidade institucional e a segurança psicológica das equipes.</li>
                    <li>Programas contínuos de capacitação de encarregados e gestores em feedback construtivo <strong className="text-slate-800 dark:text-slate-200">podem demandar</strong> alinhamentos regulares sobre liderança ética.</li>
                    <li>A resolução interna e preventiva de conflitos interpessoais <strong className="text-slate-800 dark:text-slate-200">pode reduzir</strong> a exposição jurídica a litígios e passivos indenizatórios.</li>
                    <li>A consolidação de um ambiente percebido como justo e respeitoso <strong className="text-slate-800 dark:text-slate-200">pode gerar oportunidades</strong> de ganho no engajamento e na retenção de talentos.</li>
                    <li>O uso sistemático de indicadores consolidados de integridade <strong className="text-slate-800 dark:text-slate-200">pode orientar</strong> melhorias nos processos e nos planos de treinamento fabril.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GRÁFICO PRINCIPAL (JUDICIALIZAÇÃO) & DENÚNCIAS MPT                      */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* GRÁFICO PRINCIPAL — JUDICIALIZAÇÃO (600 MIL CASOS) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                Judicialização Trabalhista
              </span>
              <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-0.5 rounded border border-rose-200 dark:border-rose-900">
                Série Acumulada
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Assédio moral na Justiça do Trabalho
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Processos relacionados a assédio moral recebidos entre 2020 e 2025.
            </p>
          </div>

          {/* VISUALIZAÇÃO DO PERÍODO 2020-2025 */}
          <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <div>
                <span className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  600 MIL
                </span>
                <span className="text-xs font-bold text-slate-500 ml-2 block sm:inline">
                  processos acumulados
                </span>
              </div>
              <div className="text-right">
                <span className="text-xl lg:text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                  ≈100 MIL/ANO
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                  média matemática simples
                </span>
              </div>
            </div>

            {/* TIMELINE VISUAL */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 font-mono">
                <span>2020</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">Período de 6 anos</span>
                <span>2025</span>
              </div>
              <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 rounded-full w-full" />
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              * A indicação de ≈100 mil/ano representa cálculo visual de média simples do período; não representa o número efetivamente registrado em cada ano individual.
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Fonte: Justiça do Trabalho / TRT-8</span>
            <a 
              href="https://www.trt8.jus.br/noticias/2026/assedio-moral-justica-do-trabalho-recebeu-600-mil-casos-de-2020-2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1"
            >
              Consultar Matéria Original <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* VISUAL — DENÚNCIAS AO MPT */}
        <div className="lg:col-span-5 bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Órgãos de Fiscalização
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Denúncias também chegam à fiscalização
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Registros no Ministério Público do Trabalho entre Jan → Jul 2025.
            </p>
          </div>

          <div className="space-y-3">
            {/* ASSÉDIO MORAL */}
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-blue-900 dark:text-blue-200 uppercase tracking-wider block">
                  Assédio Moral
                </span>
                <span className="text-2xl font-black text-blue-700 dark:text-blue-400">
                  ~10.000
                </span>
                <span className="text-xs text-blue-600 dark:text-blue-300 ml-1.5 font-medium">denúncias</span>
              </div>
              <ShieldAlert className="w-6 h-6 text-blue-600 dark:text-blue-400 opacity-80" />
            </div>

            {/* ASSÉDIO SEXUAL */}
            <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-rose-900 dark:text-rose-200 uppercase tracking-wider block">
                  Assédio Sexual
                </span>
                <span className="text-2xl font-black text-rose-700 dark:text-rose-400">
                  ~800
                </span>
                <span className="text-xs text-rose-600 dark:text-rose-300 ml-1.5 font-medium">denúncias</span>
              </div>
              <AlertOctagon className="w-6 h-6 text-rose-600 dark:text-rose-400 opacity-80" />
            </div>
          </div>

          {/* AVISO DENÚNCIA != CASO COMPROVADO */}
          <div className="bg-slate-900 text-white p-4 rounded-xl space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-rose-400 block">
              DENÚNCIA ≠ CASO COMPROVADO
            </span>
            <p className="text-[11.5px] text-slate-300 leading-relaxed">
              Os registros indicam demanda por apuração e atuação institucional, mas não significam confirmação automática da ocorrência denunciada. Não representam vítimas únicas nem soma direta de casos.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 font-medium">
            Fonte: Ministério Público do Trabalho (MPT)
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TIPOLOGIA: DIFERENTES FORMAS DE ASSÉDIO                                */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Tipologia e Definições Conceituais
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Diferentes Formas de Assédio no Ambiente de Trabalho
            </h2>
          </div>
          <span className="text-xs text-slate-500">Exigência de Prevenção e Canais Consistentes</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ASSÉDIO MORAL */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-900">
                  Conduta Abusiva
                </span>
                <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Assédio Moral
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Situações envolvendo condutas abusivas, reiteradas ou graves que possam produzir humilhação, constrangimento ou degradação do ambiente de trabalho.
              </p>
              
              <div className="space-y-1.5 pt-3 border-t border-slate-200/70 dark:border-slate-700/70">
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                  Exemplos Conceituais:
                </span>
                {['Humilhação pública ou velada', 'Constrangimento recorrente', 'Exposição inadequada de falhas', 'Práticas de isolamento e abuso', 'Gestão baseada em intimidação'].map((ex, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ASSÉDIO SEXUAL */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-md border border-rose-200 dark:border-rose-900">
                  Violação Ética e Legal
                </span>
                <AlertOctagon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Assédio Sexual
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Condutas de conotação sexual não desejadas, verbais, não verbais ou físicas, com impacto na dignidade da pessoa e na integridade do ambiente.
              </p>

              <div className="space-y-1.5 pt-3 border-t border-slate-200/70 dark:border-slate-700/70">
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                  Exemplos Conceituais:
                </span>
                {['Insinuações indesejadas', 'Chantagem por favorecimento', 'Abuso de poder hierárquico', 'Comentários sobre corpo/vida íntima', 'Contato físico inadequado'].map((ex, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ASSÉDIO ELEITORAL */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-200 dark:border-amber-900">
                  Coação Política
                </span>
                <Vote className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Assédio Eleitoral
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Práticas de intimidação, promessa de vantagens ou ameaças de demissão com a finalidade de coagir o voto ou a manifestação política de trabalhadores.
              </p>

              <div className="space-y-1.5 pt-3 border-t border-slate-200/70 dark:border-slate-700/70">
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                  Exemplos Conceituais:
                </span>
                {['Pressão sobre voto e candidatos', 'Ameaça de corte de benefícios', 'Coação via superior hierárquico', 'Obrigatoriedade de atos políticos', 'Perseguição por posicionamento'].map((ex, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUTRAS NOTÍCIAS E MONITORAMENTO SETORIAL (URLs OFICIAIS)              */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Monitoramento Contínuo
              </span>
              <h2 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">
                Outras Notícias e Evidências Documentais
              </h2>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg shrink-0">
            Consultas Diretas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ASSEDIO_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const AssedioTrabalhoView = AssedioAmbienteTrabalhoView;
export default AssedioAmbienteTrabalhoView;
