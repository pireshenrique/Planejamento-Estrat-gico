import React from 'react';
import { 
  Briefcase, 
  Search, 
  Target, 
  Users, 
  GitFork,
  HeartHandshake
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';
import { NovaDinamicaCarreirasBlock } from './NovaDinamicaCarreirasBlock';

interface MudancasCarreirasViewProps {
  setActivePage: (page: string) => void;
}

// ----------------------------------------------------------------------------
// EVIDÊNCIAS DE DESTAQUE (EVIDÊNCIAS PRINCIPAIS SOLICITADAS)
// ----------------------------------------------------------------------------
const MUDANCA_CARREIRAS_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'mud-cnn-40pct-mudar-carreira',
    tag: 'Macroeconomia & Carreira / CNN Brasil',
    dateStr: '2026',
    title: 'Mais de 40% dos profissionais pretendem mudar de carreira, diz pesquisa',
    headline: 'Pesquisa macroeconômica indica que mais de 40% dos profissionais atuantes no mercado pretendem realizar uma mudança estrutural de carreira, impulsionados pela busca de novas perspectivas, reavaliação de prioridades profissionais e transformações setoriais.',
    source: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/economia/macroeconomia/mais-de-40-dos-profissionais-pretendem-mudar-de-carreira-diz-pesquisa/'
  },
  {
    id: 'mud-exame-50pct-mudar-emprego',
    tag: 'Mercado de Trabalho / Exame (LinkedIn)',
    dateStr: '2026',
    title: 'Mais de 50% dos brasileiros querem mudar de emprego em 2026, aponta pesquisa do LinkedIn',
    headline: 'Levantamento conduzido pelo LinkedIn revela que mais da metade dos profissionais brasileiros (mais de 50%) têm como meta a troca de emprego em 2026, refletindo um movimento massivo de mobilidade e busca ativa por novas oportunidades no mercado.',
    source: 'Exame / LinkedIn',
    url: 'https://exame.com/carreira/mais-de-50-dos-brasileiros-querem-mudar-de-emprego-em-2026-aponta-pesquisa-do-linkedin/'
  },
  {
    id: 'mud-forbes-salario-permanecer',
    tag: 'Saúde & Gestão / Forbes Brasil',
    dateStr: '2026',
    title: 'Em 2026, o Que Faz as Pessoas Permanecerem no Trabalho Quando o Salário Já Não É Suficiente?',
    headline: 'Análise sobre engajamento e retenção profissional destaca que, em um cenário onde a remuneração financeira isolada deixa de garantir a fixação dos talentos, fatores como cultura corporativa saudável, bem-estar psicológico, flexibilidade e desenvolvimento contínuo tornam-se determinantes para a permanência.',
    source: 'Forbes Brasil',
    url: 'https://forbes.com.br/forbes-saude/2026/07/em-2026-o-que-faz-as-pessoas-permanecerem-no-trabalho-quando-o-salario-ja-nao-e-suficiente/?utm_source=NewsDaily&utm_medium=Social&utm_campaign=unicornios_do_futuro_as_proximas_20_startups_de_us_1_bilhao_-_2907'
  }
];

// ----------------------------------------------------------------------------
// EVIDÊNCIAS COMPLEMENTARES DE APOIO SETORIAL
// ----------------------------------------------------------------------------
const MUDANCA_CARREIRAS_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'mud-g1-por-que-sair-emprego',
    tag: 'Trabalho e Carreira / G1',
    dateStr: '2026',
    title: 'Por que tantos brasileiros querem sair do emprego',
    headline: 'Reportagem investigativa detalha os fatores centrais que motivam a intenção de desligamento voluntário no Brasil, abrangendo a busca por equilíbrio entre vida pessoal e profissional, esgotamento em rotinas tradicionais, desalinhamento cultural e expectativas de progressão.',
    source: 'G1',
    url: 'https://g1.globo.com/trabalho-e-carreira/noticia/2026/01/05/por-que-tantos-brasileiros-querem-sair-do-emprego.ghtml'
  },
  {
    id: 'mud-cni-carreira-y-retencao',
    tag: 'Indústria & Retenção / CNI & ABRH',
    dateStr: '2026',
    title: 'Indústria brasileira adota carreira em Y para reter especialistas em automação e ferramentaria',
    headline: 'Pesquisa da CNI e da Associação Brasileira de Recursos Humanos (ABRH) mostra que indústrias de manufatura avançada aumentaram em 42% a oferta de trilhas técnicas especialistas com remuneração equivalente à de gerentes, visando conter a rotatividade de técnicos experientes.',
    source: 'Confederação Nacional da Indústria (CNI) / ABRH',
    url: 'https://www.portaldaindustria.com.br/'
  },
  {
    id: 'mud-senai-mapa-transicoes',
    tag: 'Transição Intersetorial / SENAI & IPEA',
    dateStr: '2026',
    title: 'Trabalhadores da indústria buscam requalificação em eletromecânica e sustentabilidade',
    headline: 'Dados do Mapa do Trabalho Industrial do SENAI apontam que profissionais de áreas operacionais tradicionais estão migrando para funções de manutenção preditiva, gestão de resíduos industriais e controle de qualidade automatizado.',
    source: 'SENAI / IPEA',
    url: 'https://www.portaldaindustria.com.br/senai/'
  }
];

export function MudancasCarreirasView({ setActivePage }: MudancasCarreirasViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* HEADER NO PADRÃO EXATO                                                    */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Carreira e Gerações • Subtópico 02
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">•</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              Planejamento Estratégico 2027–2037
            </span>
          </div>

          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Mudanças de Carreiras
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 mb-4">
            Evidências sobre intenção de mudança de carreira e de emprego no Brasil, fatores de permanência e retenção além do salário e novas dinâmicas de progressão técnica.
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
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Mudança de Carreiras
            </button>
            <button 
              onClick={() => setActivePage('Empreendedorismo')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
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
          {/* Card 1: Troca de Emprego */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                MUDAR DE EMPREGO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  &gt; 50%
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Dos brasileiros em 2026.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Pesquisa LinkedIn (Exame).</p>
            </div>
          </div>

          {/* Card 2: Mudança de Carreira */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <GitFork className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                MUDAR DE CARREIRA
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  &gt; 40%
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Pretendem transição de área.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Levantamento CNN Brasil.</p>
            </div>
          </div>

          {/* Card 3: Permanência além do Salário */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                FATORES DE RETENÇÃO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  Além do Salário
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Cultura, saúde e flexibilidade.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Análise Forbes Brasil (2026).</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. PRINCIPAIS NOTÍCIAS E DADOS GLOBAIS / NACIONAIS (EVIDENCECARDS)       */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais Notícias e Dados de Mobilidade e Retenção
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>CNN Brasil • Exame (LinkedIn) • Forbes Brasil</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {MUDANCA_CARREIRAS_PRIMARY_EVIDENCES.map((ev) => (
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
                        Alta volatilidade de empregos, transição de carreiras, motivos de saída voluntária e critérios de retenção não financeira.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-blue-400 dark:marker:text-blue-500/70">
                    <li>A concretização da intenção de mais de 50% dos brasileiros de mudar de emprego ao longo de 2026 (Exame / LinkedIn).</li>
                    <li>O avanço do contingente de mais de 40% dos profissionais que pretendem mudar estruturalmente de carreira (CNN Brasil).</li>
                    <li>Os fatores determinantes para saídas voluntárias do emprego, incluindo clima de trabalho e equilíbrio pessoal (G1).</li>
                    <li>A eficácia de fatores de retenção não estritamente monetários, como bem-estar psicológico e cultura corporativa saudável (Forbes Brasil).</li>
                    <li>A expansão de trilhas técnicas especialistas (carreira em Y) na indústria nacional (CNI / ABRH).</li>
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
                        Gestão da retenção de quadros operacionais, fortalecimento de fatores qualitativos de permanência e atração em transições de carreira.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>O desejo de mais de 50% dos profissionais de trocar de emprego <strong className="text-slate-800 dark:text-slate-200">pode aumentar</strong> a pressão de rotatividade em postos técnicos e operacionais.</li>
                    <li>O contingente superior a 40% que busca mudar de carreira <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades</strong> para atração e requalificação de talentos vindos de outros setores para a manufatura.</li>
                    <li>O fato de o salário isolado já não garantir a fixação do trabalhador <strong className="text-slate-800 dark:text-slate-200">pode demandar acompanhamento</strong> das práticas de clima, ergonomia, liderança e bem-estar nas unidades fabris.</li>
                    <li>As razões de desligamento voluntário observadas no país <strong className="text-slate-800 dark:text-slate-200">podem gerar</strong> a necessidade de reforçar canais de diálogo, clareza sobre planos de progressão e flexibilidade possível no chão de fábrica.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. A NOVA DINÂMICA DAS CARREIRAS (MAPA VISUAL DA MOBILIDADE PROFISSIONAL) */}
      {/* ========================================================================= */}
      <NovaDinamicaCarreirasBlock />

      {/* ========================================================================= */}
      {/* 4. OUTRAS NOTÍCIAS E MONITORAMENTO CONTÍNUO (EVIDENCECARDS)               */}
      {/* ========================================================================= */}
      <section id="evidencias-complementares" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">
              Outras Notícias e Monitoramento Setorial
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>G1 • CNI • SENAI • IPEA</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {MUDANCA_CARREIRAS_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export { MudancasCarreirasView as MudancaCarreirasView };
