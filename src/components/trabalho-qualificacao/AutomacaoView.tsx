import React from 'react';
import { 
  Settings, 
  Search, 
  Target, 
  DollarSign,
  Cpu, 
  Users,
  CheckCircle2,
  Zap,
  UserCheck,
  Scale
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface PageProps {
  setActivePage?: (page: string) => void;
}



// ----------------------------------------------------------------------------
// EVIDÊNCIAS DE DESTAQUE (EVIDÊNCIAS PRINCIPAIS)
// ----------------------------------------------------------------------------
const AUTOMACAO_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'aut-g1-openai-pib-1tri',
    tag: 'Macroeconomia & IA / G1',
    dateStr: '2026',
    title: 'OpenAI, do ChatGPT, diz que IA pode adicionar R$ 1 trilhão ao PIB do Brasil em três anos',
    headline: 'Estimativa da OpenAI projeta que a difusão e adoção em escala de ferramentas de inteligência artificial e processos automatizados têm o potencial de acrescentar R$ 1 trilhão à economia brasileira em um período de três anos.',
    source: 'G1',
    url: 'https://g1.globo.com/tecnologia/noticia/2026/08/13/openai-do-chatgpt-diz-que-ia-pode-adicionar-r-1-trilhao-ao-pib-do-brasil-em-tres-anos.ghtml'
  },
  {
    id: 'aut-g1-etep-44pct-tarefas',
    tag: 'Tendências do Trabalho / G1',
    dateStr: '2025/2026',
    title: 'As grandes tendências do mercado de trabalho: digitalização acelerada e estimativas apontam que 44% das tarefas administrativas estarão automatizadas até 2027.',
    headline: 'Levantamento sobre a transformação do mercado profissional indica aceleração na digitalização corporativa e projeta que 44% das atividades administrativas e rotineiras estarão completamente automatizadas até 2027.',
    source: 'G1 / ETEP',
    url: 'https://g1.globo.com/sp/vale-do-paraiba-regiao/especial-publicitario/etep-etep-ead/noticia/2025/12/10/etep-ead-as-8-tendencias-que-vao-moldar-o-mercado-de-trabalho-em-2026.ghtml'
  },
  {
    id: 'aut-exame-6em10-demissoes-tech',
    tag: 'Setor de Tecnologia / Exame',
    dateStr: '2026',
    title: 'IA já é a justificativa para 6 em cada 10 demissões no setor de tecnologia',
    headline: 'Mapeamento setorial aponta que a automação e o emprego de soluções de inteligência artificial já correspondem à justificativa de 60% dos desligamentos de profissionais no setor de tecnologia, redefinindo quadros operacionais.',
    source: 'Exame',
    url: 'https://exame.com/inteligencia-artificial/ia-ja-e-a-justificativa-para-6-em-cada-10-demissoes-no-setor-de-tecnologia/'
  }
];

// ----------------------------------------------------------------------------
// EVIDÊNCIAS COMPLEMENTARES
// ----------------------------------------------------------------------------
const AUTOMACAO_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'aut-valor-cargos-entrada',
    tag: 'Mercado de Trabalho / Valor Econômico',
    dateStr: '2026',
    title: 'IA está reduzindo contratações para cargos de entrada, aponta pesquisa',
    headline: 'Pesquisa revela retração na abertura de postos de trabalho de nível júnior e início de carreira decorrente da absorção de tarefas básicas por sistemas automatizados e modelos de inteligência artificial.',
    source: 'Valor Econômico',
    url: 'https://valor.globo.com/carreira/noticia/2026/08/07/ia-esta-reduzindo-contratacoes-para-cargos-de-entrada-aponta-pesquisa.ghtml'
  },
  {
    id: 'aut-exame-ganhos-empresas-br',
    tag: 'Competitividade & Eficiência / Exame',
    dateStr: '2026',
    title: 'Por que empresas brasileiras têm mais a ganhar com automação do que imaginam',
    headline: 'Análise corporativa evidencia o espaço existente para ampliação de produtividade e redução de ineficiências em empresas nacionais através da automação estruturada de processos industriais e administrativos.',
    source: 'Exame',
    url: 'https://exame.com/lideres-extraordinarios/por-que-empresas-brasileiras-tem-mais-a-ganhar-com-automacao-do-que-imaginam/'
  }
];

// ----------------------------------------------------------------------------
// COMPONENTE PRINCIPAL
// ----------------------------------------------------------------------------
export function AutomacaoView({ setActivePage }: PageProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* HEADER NO PADRÃO EXATO                                                    */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              Trabalho e Qualificação • Subtópico 04
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">•</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              Planejamento Estratégico 2027–2037
            </span>
          </div>

          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Automação
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 mb-4">
            Mapeamento dos impactos macroeconômicos da automação, transformação de postos de trabalho, ganho de eficiência operacional e reconfiguração de funções corporativas e fabris.
          </p>

          {/* Subtopic Switcher Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage?.('Trabalho e Qualificação')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral
            </button>
            <button 
              onClick={() => setActivePage?.('Mão de obra qualificada')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mão de Obra
            </button>
            <button 
              onClick={() => setActivePage?.('Soft skills')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Soft Skills
            </button>
            <button 
              onClick={() => setActivePage?.('IA e o futuro do trabalho')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              IA e o Futuro
            </button>
            <button 
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Automação
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          {/* Card 1: Impacto no PIB */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                IMPACTO NO PIB
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  R$ 1 Tri
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Projeção em três anos.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Estudo OpenAI para o Brasil (G1).</p>
            </div>
          </div>

          {/* Card 2: Automação de Tarefas */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                TAREFAS ATÉ 2027
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  44%
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Das rotinas administrativas.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Digitalização acelerada (G1 / ETEP).</p>
            </div>
          </div>

          {/* Card 3: Demissões em Tech */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                DEMISSÕES EM TECH
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  6 em 10
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Com justificativa de IA.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Reestruturação no setor (Exame).</p>
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
              Principais Notícias e Dados Globais / Nacionais
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>G1 • Exame</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {AUTOMACAO_PRIMARY_EVIDENCES.map((ev) => (
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
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-purple-100 dark:border-purple-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-purple-50 dark:text-purple-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      O que observar nos próximos meses
                    </h4>
                    <div className="inline-flex bg-purple-50/80 dark:bg-purple-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-purple-700 dark:text-purple-400 font-semibold">
                        Ganhos econômicos no PIB, automação de tarefas rotineiras, retração em vagas de entrada e reorganização de quadros operacionais.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-purple-400 dark:marker:text-purple-500/70">
                    <li>O ritmo de concretização da estimativa da OpenAI de injeção de até R$ 1 trilhão no PIB brasileiro por IA em três anos (G1).</li>
                    <li>A progressão da automação de até 44% das tarefas administrativas corporativas projetada até 2027 (G1 / ETEP).</li>
                    <li>A redução de contratações para postos de nível júnior e posições de entrada no mercado de trabalho (Valor Econômico).</li>
                    <li>A reestruturação de equipes em que a IA já fundamenta 6 em cada 10 demissões no setor de tecnologia (Exame).</li>
                    <li>A captura de ganhos de escala e eficiência operacional por empresas instaladas no Brasil (Exame).</li>
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
                        Ganhos de eficiência em processos administrativos e industriais, requalificação operacional e adaptação na entrada de talentos.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>A automação de 44% das tarefas administrativas <strong className="text-slate-800 dark:text-slate-200">pode liberar</strong> capacidade de trabalho para análises e suporte fabril.</li>
                    <li>A retração de vagas de entrada no mercado <strong className="text-slate-800 dark:text-slate-200">pode demandar acompanhamento</strong> na formatação de programas de estágio técnico e formação inicial.</li>
                    <li>O potencial de ganhos com automação para empresas brasileiras <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades</strong> para modernização de linhas de montagem e teste final.</li>
                    <li>A reestruturação de funções pelo avanço da IA <strong className="text-slate-800 dark:text-slate-200">pode gerar</strong> a necessidade de requalificação interna para operação e supervisão de novas ferramentas.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ========================================================================= */}
      {/* 4. OUTRAS NOTÍCIAS E MONITORAMENTO CONTÍNUO (EVIDENCECARDS)               */}
      {/* ========================================================================= */}
      <section id="evidencias-complementares" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">
              Outras Notícias e Monitoramento
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>Valor Econômico • Exame</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {AUTOMACAO_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

// Exportação de compatibilidade
export { AutomacaoView as AumentoAutomacaoView };

export const AutomacaoViewAlias = AutomacaoView;
export default AutomacaoView;
