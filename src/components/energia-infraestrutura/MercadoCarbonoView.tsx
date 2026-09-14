import React from 'react';
import { 
  Zap, 
  Leaf, 
  FileText, 
  ExternalLink, 
  Globe, 
  Building2, 
  Scale, 
  Search, 
  Target, 
  Layers, 
  Factory, 
  Flame, 
  CheckCircle2, 
  HelpCircle, 
  Radio, 
  AlertTriangle, 
  ArrowRight, 
  ArrowDown, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Sliders, 
  Activity, 
  Coins, 
  Cpu, 
  Truck, 
  Check, 
  Info,
  Calendar,
  Sparkles,
  DollarSign
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface MercadoCarbonoViewProps {
  setActivePage?: (page: string) => void;
}

// ============================================================================
// 1. NOTÍCIAS PRINCIPAIS (COM SEQUÊNCIA: PRECIFICAÇÃO -> SBCE -> INTERNACIONAL)
// ============================================================================
const CARBON_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'carb-noticia-01-cnn',
    tag: 'Precificação & Mercado / CNN Brasil',
    dateStr: '20/04/2026',
    title: 'Mercado de Carbono no Brasil entra na fase que define preço',
    headline: 'O avanço da regulamentação do SBCE leva o mercado brasileiro a uma nova etapa, em que a precificação das emissões pode começar a influenciar custos de produção, competitividade e decisões de investimento.',
    source: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/blogs/pedro-cortes/economia/money/macroeconomia/mercado-de-carbono-no-brasil-entra-na-fase-que-define-preco/'
  },
  {
    id: 'carb-noticia-02-mrv-fazenda',
    tag: 'Implementação do SBCE / Ministério da Fazenda',
    dateStr: '28/07/2026',
    title: 'Aberta consulta pública sobre proposta de cronograma para Monitoramento Relato e Verificação (MRV) no Mercado Regulado de Carbono',
    headline: 'O governo apresentou proposta para a entrada gradual dos setores nas obrigações de monitoramento, relato e verificação de emissões, etapa fundamental para a construção da base de dados do SBCE.',
    source: 'Ministério da Fazenda',
    url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/julho/aberta-consulta-publica-sobre-proposta-de-cronograma-para-monitoramento-relato-e-verificacao-mrv%29-no-mercado-regulado-de-carbono'
  },
  {
    id: 'carb-noticia-03-itmo-fazenda',
    tag: 'Conexão Internacional / Artigo 6 / Ministério da Fazenda',
    dateStr: '15/07/2026',
    title: 'Aberta consulta pública sobre regras para a transferência internacional de créditos de carbono',
    headline: 'A regulamentação dos ITMOs avança para definir como resultados de mitigação brasileiros poderão ser transferidos internacionalmente, conectando o mercado nacional aos mecanismos do Artigo 6 do Acordo de Paris.',
    source: 'Ministério da Fazenda',
    url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/julho/aberta-consulta-publica-sobre-regras-para-a-transferencia-internacional-de-creditos-de-carbono'
  }
];

// ============================================================================
// 2. OUTRAS NOTÍCIAS E MONITORAMENTO COMPLEMENTAR
// ============================================================================
const CARBON_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'carb-outras-01-cnn-desafio',
    tag: 'Regulação / CNN Brasil',
    dateStr: '2026',
    title: 'Para 2026, a regulação do mercado de carbono é um grande desafio',
    headline: 'A complexidade institucional de criar a governança do SBCE, sistemas de registro, metodologias de mensuração e acomodação dos setores produtivos representa o principal desafio do ano.',
    source: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/blogs/pedro-cortes/nacional/brasil/para-2026-a-regulacao-do-mercado-de-carbono-e-um-grande-desafio/'
  },
  {
    id: 'carb-outras-02-sbce-fazenda-portal',
    tag: 'Institucional / Ministério da Fazenda',
    dateStr: '2026',
    title: 'Sistema Brasileiro de Comércio de Emissões',
    headline: 'Página institucional para acompanhamento da implementação, regulamentação e infraestrutura do SBCE.',
    source: 'Ministério da Fazenda',
    url: 'https://www.gov.br/fazenda/pt-br/composicao/orgaos/mercado-de-carbono/sobre'
  },
  {
    id: 'carb-outras-03-coalizao-fazenda',
    tag: 'Cooperação Internacional / Fazenda',
    dateStr: '2026',
    title: 'Coalizão Aberta para Mercados Regulados de Carbono',
    headline: 'Iniciativa internacional para cooperação em precificação, MRV, contabilidade de carbono e regras de offsets.',
    source: 'Ministério da Fazenda',
    url: 'https://www.gov.br/fazenda/pt-br/composicao/orgaos/mercado-de-carbono/coalizao-internacional-mercados-de-carbono'
  }
];

export function MercadoCarbonoView({ setActivePage }: MercadoCarbonoViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO COM TÍTULO, SUBTÍTULO E 3 CARDS DE INDICADORES               */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-6 bg-white dark:bg-[#111827] rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Título e Subtítulo */}
        <div className="w-full xl:w-5/12 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1.5 shadow-xs">
                <Leaf className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                MERCADO DE CARBONO
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento Estratégico 2027–2037</span>
            </div>
            
            <h1 className="text-[28px] md:text-[32px] font-bold text-slate-900 dark:text-white tracking-tight mb-2.5 leading-tight flex items-center gap-3">
              <Scale className="w-8 h-8 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Mercado de Carbono
            </h1>
            
            <p className="text-[14.5px] md:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Estruturação do mercado regulado brasileiro, precificação das emissões e possíveis impactos sobre custos, investimentos, competitividade e cadeias produtivas.
            </p>
          </div>

          {/* Navegação Rápida entre Subtópicos de Energia e Infraestrutura */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage && setActivePage?.('Energia e Infraestrutura')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Energia e Infraestrutura
            </button>
            <button 
              onClick={() => setActivePage && setActivePage?.('Energia Renovável')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Energia Renovável
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs cursor-default"
            >
              Mercado de Carbono
            </button>
            <button 
              onClick={() => setActivePage && setActivePage?.('Marcos Regulatórios')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Marcos Regulatórios
            </button>
            <button 
              onClick={() => setActivePage && setActivePage?.('Data Centers')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Data Centers
            </button>
          </div>
        </div>

        {/* Lado Direito: 3 Cards de Indicadores do Cabeçalho */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full flex-1">
          
          {/* CARD 01: MARCO REGULATÓRIO */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10.5px] font-black uppercase text-emerald-700 dark:text-emerald-400 tracking-wider block mb-1">
                MARCO REGULATÓRIO
              </span>
              <div className="text-[20px] 2xl:text-[22px] font-black text-slate-900 dark:text-white leading-tight mb-1">
                LEI 15.042/2024
              </div>
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                Mercado regulado instituído no Brasil
              </h3>
              <p className="text-[11.5px] text-slate-600 dark:text-slate-400 leading-snug">
                A legislação criou o Sistema Brasileiro de Comércio de Emissões (SBCE), estabelecendo as bases para a precificação regulada do carbono no país.
              </p>
            </div>
            <div className="pt-2.5 mt-2 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[10.5px] text-slate-400 font-medium">
                Fonte: <strong>Ministério da Fazenda</strong>
              </span>
            </div>
          </div>

          {/* CARD 02: IMPLEMENTAÇÃO */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10.5px] font-black uppercase text-blue-700 dark:text-blue-400 tracking-wider block mb-1">
                IMPLEMENTAÇÃO
              </span>
              <div className="text-[20px] 2xl:text-[22px] font-black text-blue-600 dark:text-blue-400 leading-tight mb-1">
                2027
              </div>
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                Início previsto do MRV
              </h3>
              <p className="text-[11.5px] text-slate-600 dark:text-slate-400 leading-snug">
                A proposta de implementação prevê que os primeiros setores iniciem obrigações de Monitoramento, Relato e Verificação de emissões a partir de 2027.
              </p>
            </div>
            <div className="pt-2.5 mt-2 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-0.5">
              <span className="text-[10.5px] text-slate-400 font-medium">
                Fonte: <strong>Ministério da Fazenda • Consulta Pública 2026</strong>
              </span>
              <span className="text-[9.5px] text-amber-600 dark:text-amber-400 font-medium italic">
                * Cronograma preliminar sujeito à regulamentação.
              </span>
            </div>
          </div>

          {/* CARD 03: COBERTURA SETORIAL */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10.5px] font-black uppercase text-amber-700 dark:text-amber-400 tracking-wider block mb-1">
                COBERTURA SETORIAL
              </span>
              <div className="text-[20px] 2xl:text-[22px] font-black text-amber-600 dark:text-amber-400 leading-tight mb-1">
                3 ETAPAS
              </div>
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                Entrada gradual dos setores
              </h3>
              <p className="text-[11.5px] text-slate-600 dark:text-slate-400 leading-snug">
                A proposta de cronograma de MRV distribui a entrada dos setores produtivos em três etapas: 2027, até 2029 e até 2031.
              </p>
            </div>
            <div className="pt-2.5 mt-2 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[10.5px] text-slate-400 font-medium">
                Fonte: <strong>Ministério da Fazenda • 2026</strong>
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. TRÊS NOTÍCIAS PRINCIPAIS (COM SEQUÊNCIA E NARRATIVA ESTRUTURADA)       */}
      {/* ========================================================================= */}
      <section className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Evidências & Dados Oficiais
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Sequência: Precificação → Implementação do SBCE → Conexão Internacional
              </span>
            </div>
            <h2 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">
              3 Notícias Principais
            </h2>
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 text-[11.5px] text-emerald-800 dark:text-emerald-300">
            <Info className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Fase 2026: Regulamentação, construção institucional e preparação para implementação.</span>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {CARBON_PRIMARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DUAS COLUNAS ANALÍTICAS (01 E 02) — O QUE OBSERVAR E IMPACTOS LORENZETTI*/}
      {/* ========================================================================= */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* 01 — O QUE OBSERVAR */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-emerald-100 dark:border-emerald-900/30 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="absolute top-6 right-6 text-[44px] font-bold text-emerald-50 dark:text-emerald-900/20 leading-none pointer-events-none select-none">
              01
            </div>

            <div className="flex flex-col gap-5 relative z-10 flex-1">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                
                <div className="pt-0.5 pr-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Governança e Mercado
                  </span>
                  <h3 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-1">
                    01 — O que observar
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Acompanhamento sistemático dos marcos de implementação do mercado de carbono
                  </p>
                </div>
              </div>

              {/* Tópicos curtos de acompanhamento */}
              <div className="flex flex-col gap-3 text-xs pt-1">
                
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    Regulamentação do SBCE
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px]">
                    Acompanhar a publicação das normas infralegais necessárias para transformar o marco legal em um sistema efetivamente operacional.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                    Cronograma de MRV
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px]">
                    Observar quais setores serão incluídos nas diferentes etapas de monitoramento, relato e verificação das emissões.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                    Formação do preço do carbono
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px]">
                    Acompanhar como limites de emissão, alocação de cotas e negociação de ativos poderão determinar o custo econômico das emissões.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
                    Mercado regulado × mercado voluntário
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px]">
                    Monitorar a definição das regras de interação entre créditos voluntários e instrumentos reconhecidos pelo SBCE.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                    Integração internacional
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px]">
                    Acompanhar a regulamentação dos ITMOs e a conexão brasileira com mecanismos internacionais previstos no Artigo 6 do Acordo de Paris.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* 02 — IMPACTOS PARA A LORENZETTI */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="absolute top-6 right-6 text-[44px] font-bold text-red-50 dark:text-red-900/20 leading-none pointer-events-none select-none">
              02
            </div>

            <div className="flex flex-col gap-5 relative z-10 flex-1">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-red-500 dark:text-red-400" />
                </div>
                
                <div className="pt-0.5 pr-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    Leitura Estratégica Lorenzetti
                  </span>
                  <h3 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-1">
                    02 — Impactos para a Lorenzetti
                  </h3>
                  <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-2.5 py-1 rounded-md border border-red-200/50 dark:border-red-800/40">
                    <span className="text-[11px] text-red-800 dark:text-red-300 font-semibold">
                      Leitura de cenários e potenciais transmissões ao longo da cadeia de valor
                    </span>
                  </div>
                </div>
              </div>

              {/* 5 Dimensões Estratégicas de Impacto */}
              <div className="flex flex-col gap-3 text-xs pt-1">
                
                {/* 1. CUSTO DE INSUMOS */}
                <div className="p-3.5 rounded-xl bg-red-50/40 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                  <div className="font-bold text-red-800 dark:text-red-300 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                    1. Custo de Insumos
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px] mb-1.5">
                    A precificação de carbono em setores intensivos em emissões pode alterar custos ao longo das cadeias de materiais e fornecedores, com potencial transmissão de custos ao longo da cadeia.
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400">Cadeias para monitoramento:</span>
                    {['Aço', 'Alumínio', 'Vidro', 'Cerâmica', 'Energia', 'Química'].map((mat) => (
                      <span key={mat} className="px-2 py-0.5 rounded text-[10.5px] bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. FORNECEDORES */}
                <div className="p-3.5 rounded-xl bg-red-50/40 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                  <div className="font-bold text-red-800 dark:text-red-300 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                    2. Fornecedores
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px]">
                    Dados de emissões e intensidade de carbono podem ganhar importância na avaliação e desenvolvimento da cadeia de fornecimento.
                  </p>
                </div>

                {/* 3. PRODUTOS E MATERIAIS */}
                <div className="p-3.5 rounded-xl bg-red-50/40 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                  <div className="font-bold text-red-800 dark:text-red-300 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                    3. Produtos e Materiais
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px]">
                    A diferença de intensidade de carbono entre materiais e processos pode tornar-se uma nova variável nas decisões de engenharia, desenvolvimento de produtos e compras.
                  </p>
                </div>

                {/* 4. INVESTIMENTOS */}
                <div className="p-3.5 rounded-xl bg-red-50/40 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                  <div className="font-bold text-red-800 dark:text-red-300 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                    4. Investimentos
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px]">
                    Projetos de eficiência energética, redução de emissões, eletrificação e substituição de materiais podem adquirir uma dimensão econômica adicional conforme o carbono passe a ser precificado.
                  </p>
                </div>

                {/* 5. MENSURAÇÃO */}
                <div className="p-3.5 rounded-xl bg-red-50/40 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                  <div className="font-bold text-red-800 dark:text-red-300 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                    5. Mensuração
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[12px]">
                    Inventários e dados confiáveis de emissões podem ganhar importância para decisões estratégicas, relacionamento com fornecedores e avaliação de riscos futuros.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUTRAS NOTÍCIAS E MONITORAMENTO COMPLEMENTAR                            */}
      {/* ========================================================================= */}
      <section className="scroll-mt-12">
        <div className="flex items-center justify-between mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Acompanhamento Complementar
            </span>
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">
              Outras Notícias e Monitoramento
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            3 registros e fontes institucionais
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {CARBON_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}


export const MercadoCarbonoViewAlias = MercadoCarbonoView;
export default MercadoCarbonoView;
