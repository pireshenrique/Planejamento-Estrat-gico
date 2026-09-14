import React from 'react';
import { 
  Brain, 
  Bot, 
  Search, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Briefcase, 
  Clock, 
  Globe2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface PageProps {
  setActivePage?: (page: string) => void;
}



// ----------------------------------------------------------------------------
// EVIDÊNCIAS DE DESTAQUE (3 PRINCIPAIS NOTÍCIAS ALINHADAS AOS INDICADORES)
// ----------------------------------------------------------------------------
const IA_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'ia-ev-epoca-quatro-cenarios',
    tag: 'Cenários Globais / Época Negócios',
    dateStr: '02/2026',
    title: 'O futuro do trabalho em quatro cenários: como a IA pode transformar (ou travar) a economia global',
    headline: 'Análise prospectiva apresenta quatro possíveis caminhos para o impacto da inteligência artificial sobre produtividade, crescimento econômico e reorganização do trabalho.',
    source: 'Época Negócios',
    url: 'https://epocanegocios.globo.com/futuro-do-trabalho/noticia/2026/02/o-futuro-do-trabalho-em-quatro-cenarios-como-a-ia-pode-transformar-ou-travar-a-economia-global.ghtml'
  },
  {
    id: 'ia-ev-epoca-novos-colegas-agentes',
    tag: 'Organização do Trabalho / Época Negócios',
    dateStr: '05/2026',
    title: 'Os novos colegas de trabalho: como os agentes de IA estão entrando na rotina das empresas',
    headline: 'A convivência entre profissionais humanos e agentes de IA começa a avançar nas organizações, trazendo novas questões sobre supervisão, segurança, governança e regulação.',
    source: 'Época Negócios',
    url: 'https://epocanegocios.globo.com/futuro-do-trabalho/noticia/2026/05/os-novos-colegas-de-trabalho-como-os-agentes-de-ia-estao-entrando-na-rotina-das-empresas.ghtml'
  },
  {
    id: 'ia-ev-estadao-cargos-entrada',
    tag: 'Cargos de Entrada / Estadão',
    dateStr: '2026',
    title: 'O redesenho do trabalho: IA pode transformar primeiro os cargos de entrada',
    headline: 'Em vez de uma substituição imediata e generalizada de trabalhadores, a automação de tarefas iniciais pode alterar funções de entrada e os caminhos tradicionais de formação profissional.',
    source: 'Estadão',
    url: 'https://www.estadao.com.br/economia/o-impacto-da-ia-nao-e-demissao-e-o-desaparecimento-dos-cargos-de-entrada-afirma-pesquisadora/'
  }
];

// ----------------------------------------------------------------------------
// EVIDÊNCIAS COMPLEMENTARES (OUTRAS NOTÍCIAS NO FIM DA PÁGINA)
// ----------------------------------------------------------------------------
const IA_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'ia-ev-exame-trabalho-hibrido-agentes',
    tag: 'Trabalho Híbrido & Agentes / Exame',
    dateStr: '2026',
    title: 'Na era da IA, existe um novo significado para o trabalho híbrido',
    headline: 'Convivência entre profissionais humanos e agentes de IA começa a ganhar força dentro das organizações; com isso, cresce a preocupação com segurança, governança e regulação na rotina das empresas.',
    source: 'Exame (Carreira)',
    url: 'https://exame.com/carreira/na-era-da-ia-existe-um-novo-significado-para-o-trabalho-hibrido/'
  },
  {
    id: 'ia-ev-pwc-estadao-barometro-2026',
    tag: 'Barômetro Global / PwC & Estadão',
    dateStr: '2026',
    title: 'IA remodela o mercado de trabalho global e gera forte valorização de competências estritamente humanas',
    headline: 'Barômetro Global de Empregos em IA 2026 da PwC aponta que a tecnologia remodela o mercado de trabalho global em dois caminhos distintos e gera forte valorização de competências estritamente humanas.',
    source: 'Estadão Blue Studio / PwC',
    url: 'https://bluestudio.estadao.com.br/agencia-de-comunicacao/prnewswire/ia-remodela-mercado-de-trabalho-global-em-dois-caminhos-distintos-e-valoriza-competencias-humanas-aponta-barometro-global-de-empregos-em-ia-2026-da-pwc/'
  },
  {
    id: 'ia-ev-valor-cortes-recentes',
    tag: 'Cortes de Vagas / Valor Econômico',
    dateStr: '07/09/2026',
    title: 'A IA é realmente responsável pelos cortes de empregos recentes?',
    headline: 'Investigação do mercado corporativo avalia se os cortes recentes de empregos foram motivados diretamente por automação com IA ou por ajustes orçamentários, pressões de custos e reestruturações pós-expansão.',
    source: 'Valor Econômico',
    url: 'https://valor.globo.com/carreira/noticia/2026/09/07/a-ia-e-realmente-responsavel-pelos-cortes-de-empregos-recentes.ghtml'
  },
  {
    id: 'ia-ev-exame-devolver-tempo',
    tag: 'Produtividade & Tempo / Exame',
    dateStr: '2026',
    title: 'IA e futuro do trabalho: devolver tempo às pessoas é a transformação real',
    headline: 'Análise estratégica argumenta que o papel mais significativo e transformador da inteligência artificial no ambiente corporativo é eliminar fricções e tarefas repetitivas, devolvendo tempo para as pessoas exercerem criatividade e julgamento.',
    source: 'Exame (Bússola)',
    url: 'https://exame.com/bussola/ia-e-futuro-do-trabalho-devolver-tempo-as-pessoas-e-a-transformacao-real/'
  }
];

export function IaFuturoTrabalhoView({ setActivePage }: PageProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* HEADER EXECUTIVO COM NAVEGAÇÃO E 3 CARDS DE INDICADORES PRINCIPAIS        */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-6 bg-white dark:bg-[#111827] rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Identificação & Navegação */}
        <div className="w-full xl:w-5/12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                Trabalho e Qualificação • Subtópico 03
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento Estratégico 2027–2037</span>
            </div>

            <h1 className="text-[26px] md:text-[30px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <Brain className="w-7 h-7 text-indigo-600 dark:text-indigo-400 shrink-0" />
              IA e o Futuro do Trabalho
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Acompanhamento dos cenários de impacto da inteligência artificial na economia global, convivência com agentes de IA, valorização de competências humanas e reorganização estrutural das funções corporativas.
            </p>
          </div>

          {/* Navegação Rápida entre Subtópicos */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage?.('Trabalho e Qualificação')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral
            </button>
            <button 
              onClick={() => setActivePage?.('Mão de obra qualificada')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mão de Obra
            </button>
            <button 
              onClick={() => setActivePage?.('Soft skills')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Soft Skills
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              IA e o Futuro
            </button>
            <button 
              onClick={() => setActivePage?.('Automação')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Automação
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          {/* Card 1: Cenário Econômico */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Globe2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                CENÁRIO ECONÔMICO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[23px] 2xl:text-[25px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                  4 Cenários
                </h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">IA pode acelerar produtividade e crescimento, mas os resultados dependem da adoção e da reorganização do trabalho.</p>
              <p className="text-[11.5px] text-slate-400 mt-1 leading-tight font-medium">Época Negócios (02/2026)</p>
            </div>
          </div>

          {/* Card 2: Nova Organização do Trabalho */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                NOVA ORGANIZAÇÃO DO TRABALHO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[23px] 2xl:text-[25px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  Humanos + Agentes
                </h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Agentes de IA começam a dividir processos com profissionais humanos, ampliando questões de supervisão, segurança e governança.</p>
              <p className="text-[11.5px] text-slate-400 mt-1 leading-tight font-medium">Época Negócios (05/2026)</p>
            </div>
          </div>

          {/* Card 3: Formação de Talentos */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                FORMAÇÃO DE TALENTOS
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[23px] 2xl:text-[25px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  Cargos de Entrada
                </h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">A automação de tarefas iniciais pode alterar caminhos tradicionais de aprendizado, experiência e progressão profissional.</p>
              <p className="text-[11.5px] text-slate-400 mt-1 leading-tight font-medium">Estadão (2026)</p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. PRINCIPAIS NOTÍCIAS (3 EVIDÊNCIAS DE DESTAQUE / URLs OFICIAIS)         */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais Notícias de IA e o Futuro do Trabalho
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Evidências centrais alinhadas aos cenários econômicos globais, organização com agentes de IA e formação profissional.
            </p>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>Época Negócios • Estadão</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {IA_PRIMARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. O QUE OBSERVAR NOS PRÓXIMOS MESES / IMPACTO PARA A EMPRESA (2 COLUNAS) */}
      {/* ========================================================================= */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* Coluna 01: O que observar nos próximos meses */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-indigo-100 dark:border-indigo-900/30 p-8 shadow-sm flex flex-col">
            <div className="absolute top-8 right-8 text-[44px] font-bold text-indigo-50 dark:text-indigo-900/20 leading-none pointer-events-none select-none">
              01
            </div>

            <div className="flex flex-col gap-6 relative z-10 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                
                <div className="pt-1 pr-12">
                  <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                    O que observar nos próximos meses
                  </h4>
                  <div className="inline-flex bg-indigo-50/80 dark:bg-indigo-900/30 px-3 py-1.5 rounded-lg mt-1">
                    <span className="text-[13px] text-indigo-700 dark:text-indigo-400 font-semibold">
                      Agentes de IA no fluxo de trabalho, valorização de competências humanas e reconfiguração de cargos de entrada em 2026.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <ul className="list-disc pl-4 space-y-2.5 marker:text-indigo-400 dark:marker:text-indigo-500/70">
                  <li>Os quatro cenários de longo prazo mapeados sobre como a inteligência artificial pode impulsionar o avanço ou gerar travas à economia global (Época Negócios).</li>
                  <li>A consolidação do novo trabalho híbrido fundamentado na convivência de profissionais com agentes de IA e as exigências associadas de segurança, governança e regulação (Exame).</li>
                  <li>As conclusões do Barômetro Global de Empregos em IA 2026 da PwC sobre a remodelagem do mercado de trabalho global e a acentuada valorização de competências estritamente humanas (Estadão / PwC).</li>
                  <li>O redesenho estrutural das organizações onde o impacto imediato da IA decorre do sumiço progressivo de cargos de entrada em vez de ondas repentinas de demissão em massa (Estadão).</li>
                  <li>As apurações sobre se os cortes de empregos recentes decorrem de automação por ferramentas de IA ou de reestruturações financeiras e macroeconômicas (Valor Econômico).</li>
                  <li>O foco corporativo no ganho real de produtividade, direcionando a IA para automatizar processos repetitivos e devolver tempo útil aos profissionais (Exame Bússola).</li>
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
                      Governança de agentes digitais, novas trilhas de formação técnica e valorização de competências humanas nas operações.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <ul className="list-disc pl-4 space-y-2.5 marker:text-red-400 dark:marker:text-red-500/70">
                  <li>A convivência com agentes autônomos de IA em fluxos corporativos e de suporte <strong className="text-slate-800 dark:text-slate-200">pode demandar acompanhamento</strong> formal de protocolos de segurança da informação, governança interna e supervisão humana.</li>
                  <li>A forte valorização de competências estritamente humanas apontada pela PwC <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades</strong> para intensificar o desenvolvimento interno de habilidades de negociação, liderança fabril e resolução de problemas complexos.</li>
                  <li>O sumiço progressivo de cargos e funções de entrada tradicionais <strong className="text-slate-800 dark:text-slate-200">pode representar risco</strong> para a renovação e retenção de talentos técnicos, demandando reestruturação nas trilhas de estágio e início de carreira.</li>
                  <li>A liberação de tempo proporcionada pela automação de tarefas rotineiras <strong className="text-slate-800 dark:text-slate-200">pode aumentar</strong> a disponibilidade de engenheiros, projetistas e encarregados para melhorias de processo e inovação de produtos.</li>
                  <li>A divergência entre os cenários de transformação e de travamento econômico <strong className="text-slate-800 dark:text-slate-200">pode exigir</strong> critérios bem delimitados de priorização para evitar investimentos dispersos em ferramentas de IA sem retorno comprovado.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DO USO DA IA AO REDESENHO DO TRABALHO (BLOCOS OBJETIVOS E CLEANS)       */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
        
        {/* Cabeçalho */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
            Leitura Estratégica • Cenário 2026
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Do uso da IA ao redesenho do trabalho
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            A transformação avança da utilização isolada de ferramentas para a integração de agentes e a revisão de tarefas e competências.
          </p>
        </div>

        {/* 3 Pilares Concisos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                1. Automatizar
              </span>
              <Cpu className="w-4 h-4 text-slate-500" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Execução Operacional</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Transferência de tarefas repetitivas, rotineiras e estruturadas para processamento automatizado, reduzindo atritos operacionais.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-300">
                2. Ampliar
              </span>
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h4 className="text-sm font-bold text-indigo-950 dark:text-white">Potencialização Humana</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Complementaridade entre profissionais e IA em análises aprofundadas, ideação, suporte à decisão e resolução de problemas.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                3. Preservar
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Centralidade Humana</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Manutenção do julgamento ético, responsabilidade corporativa, tomada de decisões críticas e validação final por pessoas.
            </p>
          </div>

        </div>

        {/* Desdobramentos (Grid de 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
              <Clock className="w-3.5 h-3.5" />
              Tempo & Produtividade
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Redução de rotinas burocráticas devolvendo tempo útil para atividades de maior valor estratégico.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              Competências
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Forte valorização de habilidades analíticas, julgamento crítico e capacidade de colaboração transversal.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
              <Briefcase className="w-3.5 h-3.5" />
              Carreiras
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Redesenho dos cargos de entrada e evolução nas trilhas tradicionais de formação e aprendizado corporativo.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Governança
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Supervisão de agentes autônomos, protocolos de segurança da informação e diretrizes regulatórias.
            </p>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. OUTRAS NOTÍCIAS E EVIDÊNCIAS DE SUPORTE (FIM DA PÁGINA)                */}
      {/* ========================================================================= */}
      <section id="evidencias-complementares" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Outras Notícias e Monitoramento de IA no Trabalho
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Evidências adicionais sobre trabalho híbrido, valorização de competências humanas, investigações de cortes de empregos e ganho real de produtividade.
            </p>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>Exame • PwC & Estadão • Valor Econômico</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
          {IA_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const IaFuturoTrabalhoViewAlias = IaFuturoTrabalhoView;
export default IaFuturoTrabalhoView;
