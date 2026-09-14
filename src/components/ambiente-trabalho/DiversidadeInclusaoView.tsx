import React from 'react';
import { 
  Users, 
  Target, 
  Search, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Scale, 
  HeartHandshake, 
  HelpCircle, 
  ArrowDown
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface DiversidadeInclusaoViewProps {
  setActivePage: (page: string) => void;
}

// ============================================================================
// EVIDÊNCIAS DE DESTAQUE (PRINCIPAIS NOTÍCIAS COM URLs DIRETAS PARA OS DADOS)
// ============================================================================
const DIVERSIDADE_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'div-b3-folha-2026',
    tag: 'Mercado & Alta Gestão / Folha de S.Paulo',
    dateStr: '12/08/2026',
    title: 'Diversidade chega a 83% das empresas da Bolsa, mas presença racial ainda é baixa',
    headline: 'Levantamento da B3 com o Instituto Locomotiva mostra avanço da diversidade na alta gestão das empresas listadas, mas revela diferenças expressivas entre os recortes de gênero, raça e pessoas com deficiência.',
    source: 'Folha de S.Paulo',
    url: 'https://www1.folha.uol.com.br/mercado/2026/08/diversidade-chega-a-83-das-empresas-da-bolsa-mas-presenca-racial-ainda-e-baixa.shtml'
  },
  {
    id: 'div-b3-exame-2026',
    tag: 'Carreira & Governança / Exame',
    dateStr: '20/08/2026',
    title: 'A mulher chegou à alta liderança — mas muitas vezes continua sozinha',
    headline: 'A presença feminina em diretorias e conselhos atingiu o maior nível desde o início do monitoramento da B3, mas muitas companhias ainda possuem apenas uma mulher nesses espaços de liderança (51% têm ao menos uma na diretoria estatutária, sendo 33% exatamente uma e 18% duas ou mais).',
    source: 'Exame',
    url: 'https://exame.com/carreira/a-mulher-chegou-a-alta-lideranca-mas-muitas-vezes-continua-sozinha/'
  },
  {
    id: 'div-forbes-evermonte-ceo-2026',
    tag: 'Liderança Executiva / Forbes Brasil',
    dateStr: '17/07/2026',
    title: 'Mulheres São Apenas 5,2% dos CEOs no Brasil',
    headline: 'Levantamento do Evermonte Institute com histórico de 2.153 empresas brasileiras mostra baixa participação feminina no cargo de CEO e identifica a transição entre gerência e diretoria como um dos principais gargalos da trajetória até o topo executivo.',
    source: 'Forbes Brasil',
    url: 'https://forbes.com.br/forbes-mulher/2026/07/mulheres-sao-apenas-52-dos-ceos-no-brasil/'
  }
];

// ============================================================================
// OUTRAS NOTÍCIAS E MONITORAMENTO SETORIAL (URLs DIRETAS DE CONSULTA)
// ============================================================================
const DIVERSIDADE_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'div-wef-future-jobs-dei-v2',
    tag: 'Cenário Global / World Economic Forum',
    dateStr: 'Future of Jobs 2025',
    title: '83% dos empregadores globais adotam medidas de diversidade, equidade e inclusão em suas estratégias',
    headline: 'Relatório global do Fórum Econômico Mundial documenta que a priorização de DEI saltou de 67% (2023) para 83% (2025), com foco principal em treinamentos corporativos (51%), atração/retenção direcionadas (48%) e metas estruturadas (42%).',
    source: 'World Economic Forum (Future of Jobs Report)',
    url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/4-workforce-strategies/'
  },
  {
    id: 'div-uol-lideranca-avanco-v2',
    tag: 'Mercado & Gestão / UOL Economia',
    dateStr: 'Cobertura Especial',
    title: 'Presença de mulheres e negros na liderança das empresas tem avanço gradual no Brasil',
    headline: 'Reportagem analisa os dados do Instituto Ethos evidenciando a distância entre a representatividade na base operacional e os níveis executivos, destacando a necessidade de programas internos de mentoria e aceleração de liderança.',
    source: 'UOL Economia / Estadão Conteúdo',
    url: 'https://economia.uol.com.br/noticias/estadao-conteudo/2024/05/28/presenca-de-mulheres-e-negros-na-lideranca-das-empresas-tem-avanco-lento-mostra-estudo.htm'
  }
];

export function DiversidadeInclusaoView({ setActivePage }: DiversidadeInclusaoViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* HEADER NO PADRÃO EXATO DO PORTAL                                          */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Lado Esquerdo: Identificação Executiva e Navegação */}
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Carreira e Gerações • Subtópico 09
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">•</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              Planejamento Estratégico 2027–2037
            </span>
          </div>

          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Diversidade e Inclusão
          </h1>

          <p className="text-[17px] text-slate-600 dark:text-slate-400 mb-4">
            Evidências sobre a institucionalização de DEI no planejamento estratégico corporativo, representatividade na liderança e impacto na atração e retenção de talentos.
          </p>

          {/* Subtopic Switcher Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage('Carreira e Gerações')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral (Indexador)
            </button>
            <button 
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Diversidade e Inclusão
            </button>
            <button 
              onClick={() => setActivePage('Perfil das gerações')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Perfil das Gerações
            </button>
            <button 
              onClick={() => setActivePage('Mudanças de Carreiras')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mudanças de Carreiras
            </button>
            <button 
              onClick={() => setActivePage('Saúde Mental no Trabalho')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Saúde Mental
            </button>
            <button 
              onClick={() => setActivePage('NR-1')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              NR-1
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          {/* Card 1: 83% Diversidade na Alta Gestão */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                DIVERSIDADE NA ALTA GESTÃO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  83%
                </h3>
              </div>
              <p className="text-[13px] text-slate-600 dark:text-slate-300 mt-1 leading-snug">das empresas analisadas atendem ao critério amplo de diversidade da B3 na alta gestão.</p>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-tight font-medium">290 empresas listadas analisadas • B3 + Instituto Locomotiva (2026)</p>
            </div>
          </div>

          {/* Card 2: 51% Liderança Feminina */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                  LIDERANÇA FEMININA
                </p>
                <span className="text-[10.5px] font-semibold text-indigo-600 dark:text-indigo-400">
                  2021 (39%) → 2026
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                  51%
                </h3>
              </div>
              <p className="text-[13px] text-slate-600 dark:text-slate-300 mt-1 leading-snug">das empresas analisadas têm ao menos uma mulher na diretoria estatutária.</p>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-tight font-medium">Maior nível desde o início do monitoramento em 2021 • B3 + Instituto Locomotiva (2026)</p>
            </div>
          </div>

          {/* Card 3: 5,2% Topo Executivo */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                TOPO EXECUTIVO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-purple-600 dark:text-purple-400 leading-none">
                  5,2%
                </h3>
              </div>
              <p className="text-[13px] text-slate-600 dark:text-slate-300 mt-1 leading-snug">dos postos de CEO no levantamento são ocupados por mulheres.</p>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-tight font-medium">2.153 empresas brasileiras analisadas • Evermonte Institute / Forbes (2026)</p>
            </div>
          </div>

        </div>
      </div>

      {/* Nota Metodológica de Integridade dos Dados */}
      <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            <strong className="text-slate-700 dark:text-slate-300">Nota de Governança:</strong> Os indicadores de 83% e 51% referem-se à proporção de empresas analisadas (amostra de 290 empresas listadas) que atendem aos critérios de presença, e não ao percentual do total de cadeiras ocupadas. O dado de 5,2% reflete a participação feminina em cargos de CEO em universo metodológico próprio (Evermonte Institute, 2.153 empresas).
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. PRINCIPAIS NOTÍCIAS E DADOS (EVIDENCECARDS COM LINKS DIRETOS)          */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais Notícias e Dados de Diversidade e Inclusão Corporativa
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes com Acesso Direto: <strong>Folha de S.Paulo • Exame • Forbes Brasil</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {DIVERSIDADE_PRIMARY_EVIDENCES.map((ev) => (
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
                        Avanço de metas estratégicas, afunilamento de liderança e métricas de clima e retenção.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-blue-400 dark:marker:text-blue-500/70">
                    <li>A consolidação de metas de DEI no planejamento estratégico corporativo e na avaliação de executivos (Pesquisa Ethos).</li>
                    <li>A evolução da representatividade feminina e étnico-racial em diretorias e conselhos de administração (Perfil Social e de Gênero).</li>
                    <li>A migração de políticas formais em códigos de conduta para sistemas estruturados de gestão, metas e indicadores (Deloitte & Ethos).</li>
                    <li>A correlação entre ambientes inclusivos e a atração e retenção sustentável de profissionais técnicos (WEF 2025).</li>
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
                        Ampliação das fontes de talentos, estruturação de trilhas formativas inclusivas e fortalecimento da governança social.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>A ampliação de práticas de DEI <strong className="text-slate-800 dark:text-slate-200">pode ampliar</strong> as fontes de recrutamento e qualificação técnica para as linhas industriais e administrativas.</li>
                    <li>O afunilamento observado na liderança <strong className="text-slate-800 dark:text-slate-200">pode demandar acompanhamento</strong> de planos de sucessão e capacitação de encarregadas e supervisoras fabris.</li>
                    <li>A estruturação de indicadores de diversidade e clima <strong className="text-slate-800 dark:text-slate-200">pode fortalecer</strong> a governança corporativa e a conformidade aos relatórios de sustentabilidade e clientes.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GRÁFICO PRINCIPAL: EVOLUÇÃO NA ALTA LIDERANÇA + REPRESENTATIVIDADE     */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* CARD SUPERIOR ESQUERDO: EVOLUÇÃO NA ALTA LIDERANÇA (7 colunas) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full space-y-5">
          
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Evolução na Alta Liderança
                </span>
                <h3 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">
                  Diversidade Avança nas Diretorias e Conselhos
                </h3>
              </div>
              <a 
                href="https://www.b3.com.br/pt_br/noticias/oito-em-cada-dezempresaslistadasna-bolsatem-diversidade-na-diretoria-estatutaria-ou-conselho-mostra-b3.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 shrink-0"
              >
                Fonte: B3 + Instituto Locomotiva — Lideranças Plurais 2026
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Barras Horizontais: Comparativo 2025 -> 2026 */}
            <div className="space-y-4">
              
              {/* BLOCO 1: Diretoria Estatutária */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    DIRETORIA ESTATUTÁRIA
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    +7 p.p.
                  </span>
                </div>
                
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
                  Empresas com presença de integrantes de grupos sub-representados na diretoria estatutária.
                </p>

                {/* Barra 2025 */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">2025</span>
                    <span className="font-bold text-slate-600 dark:text-slate-300">52%</span>
                  </div>
                  <div className="w-full h-6 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden p-0.5 flex items-center">
                    <div 
                      className="h-full bg-slate-400 dark:bg-slate-600 rounded-md flex items-center justify-end px-2 text-[10px] font-bold text-white transition-all"
                      style={{ width: '52%' }}
                    >
                      52%
                    </div>
                  </div>
                </div>

                {/* Barra 2026 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-bold text-indigo-700 dark:text-indigo-400">2026</span>
                    <span className="font-black text-indigo-600 dark:text-indigo-400 text-xs">59%</span>
                  </div>
                  <div className="w-full h-6 bg-indigo-100 dark:bg-indigo-950/60 rounded-lg overflow-hidden p-0.5 flex items-center">
                    <div 
                      className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-md flex items-center justify-end px-2 text-[10px] font-black text-white transition-all"
                      style={{ width: '59%' }}
                    >
                      59%
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOCO 2: Conselho de Administração */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                    CONSELHO DE ADMINISTRAÇÃO
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    +4 p.p.
                  </span>
                </div>
                
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
                  Empresas com presença de integrantes de grupos sub-representados no conselho de administração.
                </p>

                {/* Barra 2025 */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">2025</span>
                    <span className="font-bold text-slate-600 dark:text-slate-300">69%</span>
                  </div>
                  <div className="w-full h-6 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden p-0.5 flex items-center">
                    <div 
                      className="h-full bg-slate-400 dark:bg-slate-600 rounded-md flex items-center justify-end px-2 text-[10px] font-bold text-white transition-all"
                      style={{ width: '69%' }}
                    >
                      69%
                    </div>
                  </div>
                </div>

                {/* Barra 2026 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-bold text-teal-700 dark:text-teal-400">2026</span>
                    <span className="font-black text-teal-600 dark:text-teal-400 text-xs">73%</span>
                  </div>
                  <div className="w-full h-6 bg-teal-100 dark:bg-teal-950/60 rounded-lg overflow-hidden p-0.5 flex items-center">
                    <div 
                      className="h-full bg-teal-600 dark:bg-teal-500 rounded-md flex items-center justify-end px-2 text-[10px] font-black text-white transition-all"
                      style={{ width: '73%' }}
                    >
                      73%
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Nota Metodológica Discreta */}
            <p className="text-[10px] text-slate-400 mt-3 leading-relaxed">
              * Grupos sub-representados considerados pelo levantamento incluem pessoas pretas, pardas ou indígenas, integrantes da comunidade LGBTQIA+ e pessoas com deficiência. Os indicadores representam o percentual de empresas analisadas (amostra de 290 empresas listadas) que reportam presença desses grupos nos respectivos órgãos, e não a proporção de cadeiras ocupadas.
            </p>
          </div>

          {/* Insight Analítico do Card Esquerdo */}
          <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 mt-4">
            <span className="text-[11px] font-bold uppercase text-indigo-800 dark:text-indigo-300 block mb-0.5">
              EVIDÊNCIA B3 + INSTITUTO LOCOMOTIVA
            </span>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              “Entre 2025 e 2026, aumentou a proporção de empresas listadas que reportam integrantes de grupos sub-representados tanto nas diretorias estatutárias quanto nos conselhos de administração.”
            </p>
            <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 block mt-1">
              Diretorias: 52% → 59% (+7 p.p.) | Conselhos: 69% → 73% (+4 p.p.)
            </span>
          </div>

        </div>

        {/* CARD SUPERIOR DIREITO: REPRESENTATIVIDADE NA LIDERANÇA (5 colunas) */}
        <div className="lg:col-span-5 bg-white dark:bg-[#111827] border border-purple-200 dark:border-purple-900/60 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full space-y-5">
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 dark:border-purple-900/50 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Representatividade na Liderança
              </span>
              <a 
                href="https://www.b3.com.br/pt_br/noticias/oito-em-cada-dezempresaslistadasna-bolsatem-diversidade-na-diretoria-estatutaria-ou-conselho-mostra-b3.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 shrink-0"
              >
                Fonte: B3 + Locomotiva 2026
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <h3 className="text-[17px] font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Avanço Geral Ainda Convive com Desafios de Representatividade
            </h3>

            {/* Dois Indicadores Principais em Destaque */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              
              {/* Indicador 1: 83% Diversidade na Alta Gestão */}
              <div className="p-3.5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/80 text-center flex flex-col justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400 tracking-tight leading-none block">
                    83%
                  </span>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 uppercase leading-tight">
                    EMPRESAS COM DIVERSIDADE NA ALTA GESTÃO
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-purple-200/60 dark:border-purple-800/60 text-left">
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-snug">
                    Empresas analisadas que atendem ao critério de diversidade do Anexo ASG da B3 (ao menos uma mulher ou grupo sub-representado).
                  </p>
                </div>
              </div>

              {/* Indicador 2: 51% Mulher na Diretoria */}
              <div className="p-3.5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/80 text-center flex flex-col justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400 tracking-tight leading-none block">
                    51%
                  </span>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 mt-1.5 uppercase leading-tight">
                    EMPRESAS COM MULHER NA DIRETORIA
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-purple-200/60 dark:border-purple-800/60 text-left">
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-snug">
                    Empresas com ao menos 1 mulher na diretoria estatutária.
                  </p>
                  <span className="text-[10px] font-bold text-purple-700 dark:text-purple-300 block mt-0.5">
                    2021: 39% → 2026: 51%
                  </span>
                </div>
              </div>

            </div>

            {/* Indicador Contextual: Mulher no Conselho (70%) */}
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase">
                  EMPRESAS COM MULHER NO CONSELHO
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs text-slate-400 line-through">55% (2021)</span>
                  <span className="text-sm font-black text-slate-900 dark:text-white">70% (2026)</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-1">
                Empresas analisadas com ao menos uma mulher no Conselho de Administração. Maior proporção registrada desde o início do monitoramento em 2021.
              </p>
            </div>

            {/* Desafio Racial (23% pardos | 2% pretos) */}
            <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                  DESAFIO RACIAL NA DIRETORIA ESTATUTÁRIA
                </span>
                <span className="text-[10px] text-amber-700 dark:text-amber-400 font-semibold">
                  Presença reportada
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-white dark:bg-[#111827] rounded-xl border border-amber-200 dark:border-amber-800/80">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-black text-amber-700 dark:text-amber-400">23%</span>
                    <span className="text-[10px] font-bold text-slate-500">PARDOS</span>
                  </div>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">
                    Empresas com ao menos 1 pessoa parda na diretoria.
                  </p>
                </div>
                <div className="p-2 bg-white dark:bg-[#111827] rounded-xl border border-amber-200 dark:border-amber-800/80">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-black text-amber-700 dark:text-amber-400">2%</span>
                    <span className="text-[10px] font-bold text-slate-500">PRETOS</span>
                  </div>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">
                    Empresas com ao menos 1 pessoa preta na diretoria.
                  </p>
                </div>
              </div>
              <p className="text-[9.5px] text-amber-800/80 dark:text-amber-400/80 italic">
                * Presença reportada pelas empresas — não participação percentual nos cargos. Os valores não devem ser somados.
              </p>
            </div>
          </div>

          {/* Mensagem Analítica */}
          <div className="p-3 rounded-xl bg-purple-100/60 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-900/60 text-xs text-purple-950 dark:text-purple-200 font-medium leading-relaxed mt-2">
            “A presença feminina avançou nos órgãos de alta gestão analisados, mas os diferentes recortes de diversidade apresentam níveis distintos de representatividade.”
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. CARD INFERIOR: DA PRESENÇA À REPRESENTATIVIDADE (COMPARAÇÃO VISUAL)   */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              ANÁLISE DE EFETIVIDADE • CENÁRIO 2026
            </span>
            <h3 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">
              Da Presença à Representatividade
            </h3>
          </div>
          <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2.5 py-1 rounded-lg">
            Leitura Estratégica
          </span>
        </div>

        {/* Comparativo: Lado 1 (Presença) vs Centro (Distinção) vs Lado 2 (Representatividade) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* LADO 1: PRESENÇA DE DIVERSIDADE (5 colunas) */}
          <div className="md:col-span-5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Lado 1 — Presença de Diversidade
            </span>
            <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
              83%
            </div>
            <p className="text-xs font-bold text-slate-700 dark:text-slate-300 max-w-xs mx-auto leading-snug">
              das empresas listadas analisadas atendem ao critério de diversidade previsto no Anexo ASG da B3
            </p>
            <span className="text-[10.5px] text-slate-400 block">
              Ao menos uma mulher ou integrante de grupo sub-representado no conselho ou diretoria estatutária.
            </span>
          </div>

          {/* CENTRO: DISTINÇÃO FUNDAMENTAL (2 colunas) */}
          <div className="md:col-span-2 flex flex-col items-center justify-center p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center gap-1">
            <span className="text-[11px] font-black text-amber-900 dark:text-amber-200 uppercase">
              PRESENÇA
            </span>
            <span className="text-base font-black text-amber-600">≠</span>
            <span className="text-[10px] font-black text-amber-900 dark:text-amber-200 uppercase leading-tight">
              REPRESENTATIVIDADE EQUILIBRADA
            </span>
            <span className="text-[9px] font-semibold text-amber-700 dark:text-amber-400 mt-1 uppercase tracking-wider">
              LEITURA ESTRATÉGICA
            </span>
          </div>

          {/* LADO 2: REPRESENTATIVIDADE NA ALTA LIDERANÇA (5 colunas) */}
          <div className="md:col-span-5 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/60 rounded-2xl p-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 block text-center">
              Lado 2 — Representatividade na Alta Liderança
            </span>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-white dark:bg-[#111827] rounded-xl border border-indigo-200 dark:border-indigo-800">
                <span className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400 block">
                  59%
                </span>
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mt-0.5">
                  Empresas com grupos sub-representados nas Diretorias Estatutárias
                </span>
                <span className="text-[10px] font-bold text-indigo-500 mt-1 block">2026</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#111827] rounded-xl border border-indigo-200 dark:border-indigo-800">
                <span className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400 block">
                  73%
                </span>
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mt-0.5">
                  Empresas com grupos sub-representados nos Conselhos de Administração
                </span>
                <span className="text-[10px] font-bold text-indigo-500 mt-1 block">2026</span>
              </div>
            </div>
            <p className="text-[9.5px] text-center text-slate-400 italic">
              * Indicadores representam o percentual de empresas com presença desses grupos, e não a parcela total dos cargos ocupados.
            </p>
          </div>

        </div>

        {/* Cadeia de Implementação e Conclusão */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700">PRESENÇA</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700">PARTICIPAÇÃO</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700">DESENVOLVIMENTO</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700">OPORTUNIDADE</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">REPRESENTATIVIDADE</span>
          </div>

          <p className="text-xs text-center text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            “A presença de pessoas de grupos diversos é um indicador relevante, mas a análise estratégica também deve considerar participação, oportunidades de desenvolvimento e progressão para posições de liderança.”
          </p>
          <span className="text-[10px] text-center text-slate-400 font-semibold block uppercase tracking-wider">
            Leitura estratégica para o Planejamento 2027–2037
          </span>
        </div>

        {/* Fontes e Metodologia 2026 (B3, Ethos 2026 e Deloitte 2025/2026) */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              Fontes e Metodologia 2026:
            </span>
            <a 
              href="https://www.b3.com.br/pt_br/noticias/oito-em-cada-dezempresaslistadasna-bolsatem-diversidade-na-diretoria-estatutaria-ou-conselho-mostra-b3.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-medium"
            >
              B3 + Locomotiva 2026 (290 empresas listadas)
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a 
              href="https://www.ethos.org.br/pesquisa-ethos-de-diversidade-equidade-e-inclusao-conheca-as-empresas-premiadas-na-6a-edicao/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
            >
              Pesquisa Ethos 6ª Ed. 2026 (206 empresas participantes)
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a 
              href="https://www.deloitte.com/br/pt/issues/work/pesquisa-diversidade-inclusao-organizacoes.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-medium"
            >
              Deloitte Brasil Ciclo 2025/2026 (114 organizações)
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 5. OUTRAS NOTÍCIAS E MONITORAMENTO (EVIDENCECARDS COM LINKS DIRETOS)     */}
      {/* ========================================================================= */}
      <section id="evidencias-complementares" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">
              Outras Notícias e Monitoramento Setorial
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>World Economic Forum • GIFE / Ethos • UOL Economia • Presidência da República</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {DIVERSIDADE_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}
