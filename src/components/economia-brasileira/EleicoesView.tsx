import React from 'react';
import { 
  Vote, 
  Target, 
  Activity, 
  Landmark, 
  Scale, 
  Building2, 
  Info, 
  Briefcase, 
  CheckCircle2, 
  Calendar,
  Layers,
  ArrowRight,
  Eye,
  ShieldAlert,
  Users,
  FileText,
  TrendingUp,
  BarChart3,
  ArrowRightLeft,
  Sparkles,
  Compass,
  AlertCircle
} from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import { ELEICOES_EVIDENCES } from '../../data/evidences/eleicoes';

interface EleicoesViewProps {
  setActivePage: (page: string) => void;
}

export function EleicoesView({ setActivePage }: EleicoesViewProps) {
  // Categorização das evidências
  const evidenciasGerais = ELEICOES_EVIDENCES.filter(e => e.id === 1 || e.id === 2);
  const evidenciasLula = ELEICOES_EVIDENCES.filter(e => e.id === 3 || e.id === 5);
  const evidenciasFlavio = ELEICOES_EVIDENCES.filter(e => e.id === 4 || e.id === 6);

  return (
    <div className="w-full flex flex-col gap-9 font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. CABEÇALHO DA PÁGINA */}
      <div className="flex flex-col gap-2 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 shadow-2xs">
            <Vote className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11.5px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Inteligência Política & Macroestratégia
          </span>
        </div>
        <h1 className="text-[26px] md:text-[30px] font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
          ELEIÇÕES 2026 — CENÁRIOS PARA O AMBIENTE DE NEGÓCIOS
        </h1>
        <p className="text-[15px] md:text-[16px] text-slate-600 dark:text-slate-400 max-w-4xl leading-normal">
          Disputa eleitoral, propostas econômicas, riscos e possíveis implicações para o planejamento empresarial.
        </p>
      </div>

      {/* BLOCO 01 — CENÁRIO ELEITORAL ATUAL */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-500" />
            <h2 className="text-[13px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Cenário Eleitoral Atual — Fotografia do Momento
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Coluna Esquerda: Cenários Quantitativos Empilhados (1º e 2º Turno) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Card 1: Cenário 1º Turno */}
            <div className="bg-white dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-[11.5px] font-bold tracking-wider text-slate-700 dark:text-slate-200 uppercase">
                    Cenário 1º Turno
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium border border-slate-200/60 dark:border-slate-700/60">
                  Estimulada
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2.5 my-1.5">
                {/* Candidato 1: Lula */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-lg p-2.5 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-300">Lula</span>
                    <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300">LU</span>
                  </div>
                  <div className="my-1">
                    <span className="text-[26px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">37%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-800 dark:bg-slate-200 h-full rounded-full transition-all" style={{ width: '37%' }}></div>
                  </div>
                </div>

                {/* Candidato 2: Flávio Bolsonaro */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-lg p-2.5 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-300 truncate mr-1">F. Bolsonaro</span>
                    <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0">FB</span>
                  </div>
                  <div className="my-1">
                    <span className="text-[26px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">31%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-800 dark:bg-slate-200 h-full rounded-full transition-all" style={{ width: '31%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium text-slate-600 dark:text-slate-400">Fonte: Nexus / BTG Pactual • ago/2026</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Diferença: 6 p.p.</span>
              </div>
            </div>

            {/* Card 2: Simulação 2º Turno */}
            <div className="bg-white dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-[11.5px] font-bold tracking-wider text-slate-700 dark:text-slate-200 uppercase">
                    Simulação 2º Turno
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-semibold border border-amber-200/80 dark:border-amber-800/50">
                  Empate Técnico
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2.5 my-1.5">
                {/* Candidato 1: Lula */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-lg p-2.5 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-300">Lula</span>
                    <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300">LU</span>
                  </div>
                  <div className="my-1">
                    <span className="text-[26px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">46%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-800 dark:bg-slate-200 h-full rounded-full transition-all" style={{ width: '46%' }}></div>
                  </div>
                </div>

                {/* Candidato 2: Flávio Bolsonaro */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-lg p-2.5 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-300 truncate mr-1">F. Bolsonaro</span>
                    <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0">FB</span>
                  </div>
                  <div className="my-1">
                    <span className="text-[26px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">45%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-800 dark:bg-slate-200 h-full rounded-full transition-all" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium text-slate-600 dark:text-slate-400">Fonte: Nexus / BTG Pactual • ago/2026</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Diferença: 1 p.p.</span>
              </div>
            </div>

          </div>

          {/* Coluna Direita: Análise Qualitativa (Rejeição & Capacidade de Expansão) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-[11.5px] font-bold tracking-wider text-slate-700 dark:text-slate-200 uppercase">
                      Rejeição & Capacidade de Expansão
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium border border-slate-200/60 dark:border-slate-700/60">
                    Variável Crítica
                  </span>
                </div>
                
                <div className="flex flex-col gap-2 my-2">
                  <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-lg p-2.5 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5">
                    <div className="w-4.5 h-4.5 rounded-md bg-slate-200/80 dark:bg-slate-700 flex items-center justify-center text-[9.5px] font-bold text-slate-700 dark:text-slate-300 shrink-0 mt-0.5">
                      1
                    </div>
                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug">
                      <strong className="text-slate-800 dark:text-slate-100">Expansão além da base:</strong> Ambos precisam ampliar apoio para além de seus eleitorados consolidados. No eventual 2º turno, a atração de indecisos e eleitores de outros candidatos ganha peso decisivo.
                    </p>
                  </div>

                  <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-lg p-2.5 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5">
                    <div className="w-4.5 h-4.5 rounded-md bg-slate-200/80 dark:bg-slate-700 flex items-center justify-center text-[9.5px] font-bold text-slate-700 dark:text-slate-300 shrink-0 mt-0.5">
                      2
                    </div>
                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug">
                      <strong className="text-slate-800 dark:text-slate-100">Rejeição como limite:</strong> Níveis elevados de rejeição podem restringir o potencial de crescimento, tornando a redução da resistência eleitoral tão estratégica quanto a intenção direta de voto.
                    </p>
                  </div>

                  <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-lg p-2.5 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5">
                    <div className="w-4.5 h-4.5 rounded-md bg-slate-200/80 dark:bg-slate-700 flex items-center justify-center text-[9.5px] font-bold text-slate-700 dark:text-slate-300 shrink-0 mt-0.5">
                      3
                    </div>
                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug">
                      <strong className="text-slate-800 dark:text-slate-100">Segmentos decisivos:</strong> Diferenças de desempenho por renda, gênero, religião, região e porte municipal podem alterar a dinâmica de expansão de cada candidatura ao longo da campanha.
                    </p>
                  </div>
                </div>

                {/* Leitura Executiva Integrada */}
                <div className="mt-2.5 px-3 py-2 rounded-md bg-slate-100/90 dark:bg-slate-800/70 border-l-2 border-slate-600 dark:border-slate-400 text-[11px] text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[9.5px] block mb-0.5">Leitura Executiva:</span>
                  <span className="leading-tight">O segundo turno pode depender menos da mobilização das bases e mais da capacidade de reduzir rejeição e conquistar eleitores fora do núcleo já consolidado.</span>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium text-slate-600 dark:text-slate-400">Base: pesquisas eleitorais e análises selecionadas • ago/2026</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Análise qualitativa</span>
              </div>
            </div>
          </div>

        </div>

        {/* Nota Metodológica Refinada */}
        <div className="flex items-center gap-2 px-3.5 py-2 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-slate-200/60 dark:border-slate-800 text-[11.5px] text-slate-500 dark:text-slate-400">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>
            <strong className="text-slate-700 dark:text-slate-300 font-semibold">Nota Metodológica:</strong> Pesquisas eleitorais representam uma fotografia do momento e não constituem previsão do resultado da eleição. Resultados podem variar conforme metodologia, período de campo, instituto e margem de erro.
          </span>
        </div>
      </section>

      {/* BLOCO 02 — COMPARATIVO ENTRE OS PRINCIPAIS CANDIDATOS */}
      <section className="flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2 text-slate-500 mb-0.5">
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span className="text-[11.5px] font-bold uppercase tracking-wider">Análise de Diretrizes e Impactos</span>
          </div>
          <h2 className="text-[19px] md:text-[21px] font-bold text-slate-900 dark:text-white tracking-tight">
            Comparativo entre os Principais Candidatos
          </h2>
          <p className="text-[13.5px] text-slate-500 dark:text-slate-400">
            Análise simétrica de teses econômicas, fatores de sustentação, pontos de risco e implicações empresariais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* COLUNA LULA */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 md:p-6 shadow-xs flex flex-col justify-between gap-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200">
            
            {/* 1. Header Candidato & Tese Central */}
            <div className="bg-slate-50/90 dark:bg-slate-800/50 p-4.5 -m-5 md:-m-6 -mt-5 md:-mt-6 mb-0 rounded-t-2xl border-b border-slate-200/80 dark:border-slate-800 flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-[16px] shadow-2xs tracking-wider">
                    LU
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[20px] font-bold text-slate-900 dark:text-white leading-tight">
                        Lula
                      </h3>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300/60 dark:border-slate-600">
                        PT
                      </span>
                    </div>
                    <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-medium">
                      Continuidade e Investimento Produtivo
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  Mandato Atual
                </span>
              </div>

              {/* Bloco Nobre de Tese Central */}
              <div className="bg-white dark:bg-slate-900/90 rounded-xl p-3 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 shrink-0 mt-0.5">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-0.5">
                    Tese Central de Governo
                  </span>
                  <p className="text-[12.5px] font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    Estímulos via investimentos públicos, obras do PAC e fortalecimento do mercado interno.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Seção A: Diretrizes Econômicas */}
            <div className="flex flex-col gap-2.5 pt-1">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-sky-50 dark:bg-sky-950/50 border border-sky-200/70 dark:border-sky-800/50 text-sky-700 dark:text-sky-300 flex items-center justify-center shrink-0">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-[12px] uppercase tracking-wider">
                    A. Diretrizes Econômicas
                  </span>
                </div>
                <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
                  Pilares de Gestão
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800 flex flex-col gap-0.5">
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                    Arcabouço Fiscal & Investimento
                  </span>
                  <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Manutenção da regra fiscal combinada à continuidade de investimentos públicos em infraestrutura, habitação e desenvolvimento produtivo. O principal ponto de atenção é conciliar expansão dos investimentos com metas fiscais e trajetória da dívida.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800 flex flex-col gap-0.5">
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                    Obras & Habitação
                  </span>
                  <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Continuidade e possível expansão do Novo PAC, concessões de transporte e programas habitacionais, mantendo infraestrutura como vetor de crescimento. Para empresas ligadas à construção e materiais, execução física e orçamentária será uma variável relevante.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800 flex flex-col gap-0.5">
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                    Demanda & Mercado Interno
                  </span>
                  <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Foco em política industrial, infraestrutura logística, crédito e fortalecimento do mercado interno. O resultado dependerá da evolução de renda, emprego, juros e capacidade de consumo das famílias.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Seção B: Fatores que Podem Favorecer */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/70 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-[12px] uppercase tracking-wider">
                    B. Fatores que Podem Favorecer
                  </span>
                </div>
                <span className="text-[10.5px] font-medium text-emerald-700 dark:text-emerald-300">
                  Pontos de Sustentação
                </span>
              </div>

              <div className="bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl p-3 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Exercício do poder:</strong> Experiência recente no Poder Executivo federal e estrutura institucional já estabelecida podem facilitar continuidade administrativa e execução de políticas em andamento.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Base social:</strong> desempenho eleitoral historicamente mais forte em segmentos de menor renda e associação a políticas sociais podem contribuir para sustentação eleitoral em parte desse eleitorado.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Execução em curso:</strong> Projetos de infraestrutura, habitação e crédito já em andamento permitem apresentar políticas em execução, embora resultados concretos e percepção do eleitor continuem sendo determinantes.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Seção C: Riscos e Pontos de Atenção */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200/70 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-[12px] uppercase tracking-wider">
                    C. Riscos e Pontos de Atenção
                  </span>
                </div>
                <span className="text-[10.5px] font-medium text-amber-700 dark:text-amber-300">
                  Variáveis Críticas
                </span>
              </div>

              <div className="bg-amber-50/30 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900/30 rounded-xl p-3 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Trajetória fiscal:</strong> Dificuldades no cumprimento das metas fiscais ou deterioração da dívida podem pressionar expectativas, juros e custo de financiamento, afetando investimento e consumo.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Juros e crédito:</strong> Endividamento das famílias e juros elevados podem limitar consumo, mercado imobiliário e expansão do crédito, reduzindo parte do efeito esperado das políticas de estímulo.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Resistência eleitoral:</strong> Rejeição em segmentos específicos e problemas de percepção sobre serviços públicos podem limitar expansão eleitoral fora da base atualmente mais forte.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Seção D: Possíveis Implicações para Empresas (PROTAGONISMO CORPORATIVO) */}
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-4.5 border-2 border-slate-200 dark:border-slate-700 shadow-2xs flex flex-col gap-3.5">
              <div className="flex items-center justify-between border-b border-slate-200/90 dark:border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-[12.5px] uppercase tracking-wider">
                    D. Possíveis Implicações para Empresas
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-700 dark:text-slate-200 tracking-wider bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                  Visão Estratégica
                </span>
              </div>
              
              <div className="flex flex-col gap-2.5">
                <div className="bg-white dark:bg-slate-900/90 p-3 rounded-lg border border-slate-200/80 dark:border-slate-700/80 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/50">
                      Oportunidades
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-200 leading-snug pt-0.5">
                    Pode sustentar oportunidades em materiais de construção, infraestrutura e mercado imobiliário caso haja continuidade e expansão de programas de habitação, saneamento e obras públicas.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900/90 p-3 rounded-lg border border-slate-200/80 dark:border-slate-700/80 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/50">
                      Monitoramento
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-200 leading-snug pt-0.5">
                    Demanda acompanhamento da trajetória fiscal, pois deterioração das contas públicas pode manter juros elevados, encarecer crédito e afetar investimento, consumo e mercado imobiliário.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900/90 p-3 rounded-lg border border-slate-200/80 dark:border-slate-700/80 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Reforma Fiscal
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-200 leading-snug pt-0.5">
                    Tende a preservar maior previsibilidade na continuidade da Reforma Tributária, embora regulamentações e efeitos setoriais continuem exigindo acompanhamento.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Síntese do Cenário Lula (Encerramento do Card) */}
            <div className="px-4 py-3.5 rounded-r-xl rounded-l bg-slate-100/90 dark:bg-slate-800/60 border-l-[3px] border-l-slate-800 dark:border-l-slate-200 border-y border-r border-slate-200 dark:border-slate-700 text-[12.5px] text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0 mt-0.5" />
              <p className="leading-snug">
                <strong className="text-slate-900 dark:text-white font-semibold">Leitura Estratégica:</strong> cenário de maior continuidade de investimentos públicos e estímulo ao mercado interno, com oportunidades ligadas a infraestrutura e habitação, condicionado à trajetória fiscal, juros e capacidade de execução.
              </p>
            </div>

          </div>

          {/* COLUNA FLÁVIO BOLSONARO */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 md:p-6 shadow-xs flex flex-col justify-between gap-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200">
            
            {/* 1. Header Candidato & Tese Central */}
            <div className="bg-slate-50/90 dark:bg-slate-800/50 p-4.5 -m-5 md:-m-6 -mt-5 md:-mt-6 mb-0 rounded-t-2xl border-b border-slate-200/80 dark:border-slate-800 flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-[16px] shadow-2xs tracking-wider">
                    FB
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[20px] font-bold text-slate-900 dark:text-white leading-tight">
                        Flávio Bolsonaro
                      </h3>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300/60 dark:border-slate-600">
                        PL
                      </span>
                    </div>
                    <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-medium">
                      Contenção de Gastos e Redução do Estado
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  Oposição
                </span>
              </div>

              {/* Bloco Nobre de Tese Central */}
              <div className="bg-white dark:bg-slate-900/90 rounded-xl p-3 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 shrink-0 mt-0.5">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 block mb-0.5">
                    Tese Central de Governo
                  </span>
                  <p className="text-[12.5px] font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    Corte de gastos públicos, novo teto fiscal e protagonismo de investimentos privados.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Seção A: Diretrizes Econômicas */}
            <div className="flex flex-col gap-2.5 pt-1">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-sky-50 dark:bg-sky-950/50 border border-sky-200/70 dark:border-sky-800/50 text-sky-700 dark:text-sky-300 flex items-center justify-center shrink-0">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-[12px] uppercase tracking-wider">
                    A. Diretrizes Econômicas
                  </span>
                </div>
                <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">
                  Pilares de Gestão
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800 flex flex-col gap-0.5">
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                    Corte de Despesas & Novo Teto
                  </span>
                  <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Proposta de redução mais intensa do gasto público e criação de uma nova regra de controle orçamentário. A efetividade dependerá das despesas atingidas, do apoio no Congresso e da capacidade de execução.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800 flex flex-col gap-0.5">
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                    Reforma Administrativa
                  </span>
                  <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Proposta de redução da estrutura pública, incluindo ministérios e cargos comissionados, com objetivo de diminuir despesas permanentes. O impacto fiscal dependerá do desenho final e da viabilidade administrativa e legislativa.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800 flex flex-col gap-0.5">
                  <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                    Iniciativa Privada & Desregulamentação
                  </span>
                  <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Maior ênfase em privatizações, concessões e participação privada em infraestrutura, além de possíveis revisões regulatórias e tributárias. A execução dependerá da atratividade dos projetos, segurança jurídica e articulação política.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Seção B: Fatores que Podem Favorecer */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/70 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-[12px] uppercase tracking-wider">
                    B. Fatores que Podem Favorecer
                  </span>
                </div>
                <span className="text-[10.5px] font-medium text-emerald-700 dark:text-emerald-300">
                  Pontos de Sustentação
                </span>
              </div>

              <div className="bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl p-3 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Mobilização eleitoral:</strong> Base mobilizada e alinhada a pautas de menor intervenção estatal e liberdade econômica pode oferecer um núcleo consistente de apoio eleitoral.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Disciplina fiscal:</strong> Discurso de maior contenção de despesas e controle fiscal pode encontrar apoio entre eleitores e agentes econômicos que priorizam redução do déficit e estabilização da dívida.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Agenda pró-investimento privado:</strong> Defesa de concessões, privatizações e maior participação privada pode ampliar expectativas de oportunidades em determinados setores, dependendo do detalhamento e da viabilidade política das propostas.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Seção C: Riscos e Pontos de Atenção */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200/70 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-[12px] uppercase tracking-wider">
                    C. Riscos e Pontos de Atenção
                  </span>
                </div>
                <span className="text-[10.5px] font-medium text-amber-700 dark:text-amber-300">
                  Variáveis Críticas
                </span>
              </div>

              <div className="bg-amber-50/30 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900/30 rounded-xl p-3 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Viabilidade política:</strong> Cortes profundos de despesas e mudanças estruturais dependem de aprovação legislativa, tornando composição do Congresso e capacidade de articulação fatores centrais para execução da agenda.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Rejeição segmentada:</strong> Rejeição mais elevada em determinados segmentos do eleitorado pode dificultar expansão para além da base já mobilizada, especialmente em um eventual segundo turno.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 mt-2 shrink-0"></div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Experiência Executiva:</strong> Ausência de experiência prévia no comando do Poder Executivo amplia a importância da equipe econômica, capacidade de gestão e articulação institucional apresentadas durante a campanha.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Seção D: Possíveis Implicações para Empresas (PROTAGONISMO CORPORATIVO) */}
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-4.5 border-2 border-slate-200 dark:border-slate-700 shadow-2xs flex flex-col gap-3.5">
              <div className="flex items-center justify-between border-b border-slate-200/90 dark:border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-[12.5px] uppercase tracking-wider">
                    D. Possíveis Implicações para Empresas
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-700 dark:text-slate-200 tracking-wider bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                  Visão Estratégica
                </span>
              </div>
              
              <div className="flex flex-col gap-2.5">
                <div className="bg-white dark:bg-slate-900/90 p-3 rounded-lg border border-slate-200/80 dark:border-slate-700/80 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/50">
                      Oportunidades
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-200 leading-snug pt-0.5">
                    Pode ampliar oportunidades associadas a concessões, privatizações e projetos privados de infraestrutura caso a agenda avance politicamente e aumente a participação do capital privado.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900/90 p-3 rounded-lg border border-slate-200/80 dark:border-slate-700/80 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/50">
                      Monitoramento
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-200 leading-snug pt-0.5">
                    Demanda acompanhamento da capacidade de aprovação e execução dos cortes propostos, pois os efeitos econômicos dependerão de sustentação política no Congresso e do detalhamento das medidas.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900/90 p-3 rounded-lg border border-slate-200/80 dark:border-slate-700/80 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Reforma Fiscal
                    </span>
                  </div>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-200 leading-snug pt-0.5">
                    Pode demandar atenção a eventuais revisões de exceções ou ajustes regulatórios relacionados à Reforma Tributária, caso essas propostas avancem no programa de governo.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Síntese do Cenário Flávio (Encerramento do Card) */}
            <div className="px-4 py-3.5 rounded-r-xl rounded-l bg-slate-100/90 dark:bg-slate-800/60 border-l-[3px] border-l-slate-800 dark:border-l-slate-200 border-y border-r border-slate-200 dark:border-slate-700 text-[12.5px] text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0 mt-0.5" />
              <p className="leading-snug">
                <strong className="text-slate-900 dark:text-white font-semibold">Leitura Estratégica:</strong> cenário de maior contenção fiscal e participação privada, com possíveis oportunidades em concessões e privatizações, condicionado à viabilidade política, aprovação legislativa e capacidade de implementação.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BLOCO 03 — CENÁRIOS PARA O AMBIENTE DE NEGÓCIOS (MATRIZ COMPARATIVA) */}
      <section className="bg-white dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2 text-slate-500">
            <Layers className="w-3.5 h-3.5" />
            <span className="text-[11.5px] font-bold uppercase tracking-wider">Matriz Comparativa de Cenários</span>
          </div>
          <h2 className="text-[19px] md:text-[21px] font-bold text-slate-900 dark:text-white tracking-tight">
            COMO OS CENÁRIOS PODEM DIFERIR PARA O AMBIENTE DE NEGÓCIOS?
          </h2>
          <p className="text-[13.5px] text-slate-500 dark:text-slate-400">
            Comparação das principais direções de política econômica e das variáveis estratégicas associadas a cada cenário.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-slate-200/70 dark:divide-slate-800">
          
          {/* Dimensão 1: Política Fiscal */}
          <div className="py-3.5 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-3 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5">
                <Landmark className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[13px] font-bold text-slate-900 dark:text-white block uppercase tracking-tight">
                  POLÍTICA FISCAL
                </span>
                <span className="text-[11px] text-slate-500">
                  Regras fiscais, gastos e dívida
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Lula</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Arcabouço + Investimento
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Continuidade do arcabouço fiscal combinada à manutenção de investimentos públicos estratégicos.
              </p>
            </div>

            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center text-[10px] font-bold border border-slate-200 dark:border-slate-700">
                vs
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Flávio</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Cortes + Novo Teto
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Maior ênfase em contenção de despesas e implementação de uma nova regra ou teto fiscal.
              </p>
            </div>
          </div>

          {/* Dimensão 2: Infraestrutura */}
          <div className="py-3.5 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-3 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5">
                <Building2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[13px] font-bold text-slate-900 dark:text-white block uppercase tracking-tight">
                  INFRAESTRUTURA
                </span>
                <span className="text-[11px] text-slate-500">
                  Obras, concessões e logística
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Lula</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  PAC + Concessões
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Continuidade e possível expansão do Novo PAC, combinada a concessões em infraestrutura e programas habitacionais.
              </p>
            </div>

            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center text-[10px] font-bold border border-slate-200 dark:border-slate-700">
                vs
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Flávio</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Concessões + Privatizações
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Maior ênfase em concessões, privatizações e participação privada em projetos de infraestrutura.
              </p>
            </div>
          </div>

          {/* Dimensão 3: Papel do Estado */}
          <div className="py-3.5 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-3 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5">
                <Activity className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[13px] font-bold text-slate-900 dark:text-white block uppercase tracking-tight">
                  PAPEL DO ESTADO
                </span>
                <span className="text-[11px] text-slate-500">
                  Tamanho da máquina e fomento
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Lula</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Maior Atuação Pública
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Maior atuação do Estado em investimentos, infraestrutura e políticas de desenvolvimento produtivo.
              </p>
            </div>

            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center text-[10px] font-bold border border-slate-200 dark:border-slate-700">
                vs
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Flávio</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Estrutura Estatal Menor
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Redução da estrutura ministerial e de cargos comissionados, associada a maior participação da iniciativa privada.
              </p>
            </div>
          </div>

          {/* Dimensão 4: Tributação */}
          <div className="py-3.5 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-3 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5">
                <Scale className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[13px] font-bold text-slate-900 dark:text-white block uppercase tracking-tight">
                  TRIBUTAÇÃO
                </span>
                <span className="text-[11px] text-slate-500">
                  Reforma sobre o consumo
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Lula</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Continuidade
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Tendência de continuidade na implementação e regulamentação da Reforma Tributária.
              </p>
            </div>

            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center text-[10px] font-bold border border-slate-200 dark:border-slate-700">
                vs
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Flávio</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Possíveis Revisões
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Possibilidade de revisão de regimes de exceção ou de pontos específicos da Reforma Tributária.
              </p>
            </div>
          </div>

          {/* Dimensão 5: Risco Principal a Monitorar */}
          <div className="py-3.5 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-3 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0 mt-0.5">
                <ShieldAlert className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[13px] font-bold text-slate-900 dark:text-white block uppercase tracking-tight">
                  RISCO A MONITORAR
                </span>
                <span className="text-[11px] text-slate-500">
                  Gargalo de execução prioritário
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Lula</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Trajetória da Dívida
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Trajetória fiscal, sustentabilidade da dívida e possíveis reflexos sobre juros e custo de financiamento.
              </p>
            </div>

            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center text-[10px] font-bold border border-slate-200 dark:border-slate-700">
                vs
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg p-3 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Cenário Flávio</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Viabilidade no Congresso
                </span>
              </div>
              <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                Viabilidade política e capacidade parlamentar para implementar cortes e reformas estruturais.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ÁREA DE NOTÍCIAS / EVIDÊNCIAS — PADRÃO DO DASHBOARD */}
      <section id="evidencias-eleicoes" className="scroll-mt-12 flex flex-col gap-6 pt-3 border-t border-slate-200 dark:border-slate-800">
        
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white tracking-tight">
            Fontes & Evidências Documentais
          </h2>
          <p className="text-[13px] text-slate-500 dark:text-slate-400">
            Notícias e documentos de referência utilizados na estruturação dos cenários analíticos.
          </p>
        </div>

        {/* 1. Cenário Geral (2 notícias) */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            <h3 className="text-[12.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Cenário Geral & Mercados (2 notícias)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {evidenciasGerais.map((ev) => (
              <EvidenceCard key={ev.id} evidence={ev} />
            ))}
          </div>
        </div>

        {/* 2. Lula (2 notícias) */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            <h3 className="text-[12.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Lula — Propostas e Fatores de Risco (2 notícias)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {evidenciasLula.map((ev) => (
              <EvidenceCard key={ev.id} evidence={ev} />
            ))}
          </div>
        </div>

        {/* 3. Flávio Bolsonaro (2 notícias) */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            <h3 className="text-[12.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Flávio Bolsonaro — Propostas e Fatores de Risco (2 notícias)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {evidenciasFlavio.map((ev) => (
              <EvidenceCard key={ev.id} evidence={ev} />
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}


