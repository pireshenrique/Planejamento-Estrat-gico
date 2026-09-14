import React from 'react';
import { 
  Building2, 
  Target, 
  Search, 
  ShieldCheck, 
  Leaf, 
  Award, 
  Scale, 
  FileText, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Recycle, 
  Layers, 
  Droplets, 
  Zap, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Info,
  Globe2,
  ArrowRight,
  DollarSign,
  BarChart3,
  Flame,
  BadgePercent,
  Calendar,
  Radio
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface TopEmpresasEsgViewProps {
  setActivePage?: (page: string) => void;
  
}

// ============================================================================
// AS 3 PRINCIPAIS NOTÍCIAS (TOP 3 NO TOPO)
// ============================================================================
const TOP_EMPRESAS_EVIDENCES: Evidence[] = [
  {
    id: 'esg-merco-natura-1',
    tag: 'Ranking Merco Brasil • Liderança ESG',
    dateStr: '16/04/2026',
    title: 'Natura lidera ESG no Brasil pelo 12º ano consecutivo',
    headline: 'O ranking Merco mantém a Natura na primeira posição, seguida por Grupo Boticário e Mercado Livre. A Natura também ficou em primeiro lugar nas dimensões Ambiental, Social e Governança, indicando uma liderança que não depende apenas de um dos pilares ESG. Pódio Geral: 1º Natura → 2º Grupo Boticário → 3º Mercado Livre.',
    source: 'EXAME',
    url: 'https://exame.com/esg/ranking-merco-natura-lidera-esg-nas-empresas-pela-12a-vez/'
  },
  {
    id: 'esg-fleury-empresa-ano-2',
    tag: 'Melhores do ESG 2026 • Empresa do Ano',
    dateStr: '26/05/2026',
    title: 'Grupo Fleury é eleito Empresa do Ano no Melhores do ESG 2026',
    headline: 'A EXAME reconheceu o Fleury como empresa do ano. Um dos destaques é uma emissão de R$ 1 bilhão em debêntures ligada a uma meta social: atender 1 milhão de usuários das classes C, D e E sem plano de saúde. A companhia alcançou 1,8 milhão, dois anos antes do prazo estabelecido.',
    source: 'EXAME',
    url: 'https://exame.com/esg/melhores-do-esg-grupo-fleury-e-a-empresa-do-ano-veja-demais-vencedores-por-setor/'
  },
  {
    id: 'esg-boticario-divida-metas-3',
    tag: 'Finanças Sustentáveis • Títulos ESG',
    dateStr: '27/05/2026',
    title: 'Grupo Boticário atrela 65% da dívida bruta a metas ESG',
    headline: 'Cerca de 65% da dívida bruta do Grupo Boticário está vinculada a metas ESG por meio de títulos sustentáveis. A empresa captou R$ 2 bilhões nessa modalidade e estabeleceu compromissos como redução de 62% das emissões de Escopos 1 e 2 até 2034.',
    source: 'EXAME',
    url: 'https://exame.com/revista-exame/grupo-boticario-2/'
  }
];

// ============================================================================
// OUTRAS NOTÍCIAS E MONITORAMENTO COMPLEMENTAR
// ============================================================================
const OTHER_EMPRESAS_EVIDENCES: Evidence[] = [
  {
    id: 'esg-ambev-fazendeiros-4',
    tag: 'Cadeia de Valor & Ecoeficiência • Ambev',
    dateStr: '2026',
    title: 'Ambev chega a 100% dos fazendeiros parceiros capacitados',
    headline: 'A empresa informou que atingiu em 2025 100% dos fazendeiros parceiros capacitados e financeiramente empoderados. Além disso, 70,5% das embalagens eram retornáveis ou majoritariamente recicladas, 97,5% da eletricidade comprada vinha de fontes renováveis e a intensidade de emissões dos Escopos 1, 2 e 3 caiu 25%.',
    source: 'EXAME — Ambev',
    url: 'https://exame.com/revista-exame/ambev/'
  },
  {
    id: 'esg-boticario-ia-produtos-5',
    tag: 'Inovação & Biodegradabilidade • Grupo Boticário',
    dateStr: '2026',
    title: 'Boticário usa IA e ciência de dados para avaliar impacto de produtos',
    headline: 'O grupo informou que seu índice ambiental já analisa mais de 54 mil formulações; 98% dos shampoos e 100% dos sabonetes e óleos enxaguáveis avaliados atendiam ao critério de biodegradabilidade divulgado pela empresa.',
    source: 'EXAME — Grupo Boticário',
    url: 'https://exame.com/esg/seu-cosmetico-polui-as-aguas-boticario-consolida-metodologia-para-reduzir-impacto-ambiental/'
  }
];

const TABELA_BENCHMARK = [
  {
    empresa: 'Natura',
    posicao: '1º Merco ESG',
    evidencia: '1ª Merco ESG por 12 anos',
    pratica: 'Integração dos três pilares E, S e G',
    detalhe: 'Liderança simultânea nos rankings Ambiental, Social e Governança na edição 2025/2026.',
    url: 'https://exame.com/esg/ranking-merco-natura-lidera-esg-nas-empresas-pela-12a-vez/'
  },
  {
    empresa: 'Grupo Boticário',
    posicao: '2º Merco ESG',
    evidencia: '2º Merco ESG',
    pratica: 'Financiamento vinculado a metas + logística reversa',
    detalhe: '65% da dívida atrelada a metas sustentáveis (R$ 2 bi captados) e redução de 62% das emissões.',
    url: 'https://exame.com/revista-exame/grupo-boticario-2/'
  },
  {
    empresa: 'Mercado Livre',
    posicao: '3º Merco ESG',
    evidencia: '3º Merco ESG',
    pratica: 'Evolução entre as líderes e integração ESG ao negócio',
    detalhe: 'Eletrificação da malha logística de entregas e ecoeficiência em centros de distribuição.',
    url: 'https://www.merco.info/br/actualidad/natura-1-grupo-boticario-2-y-mercado-libre-3-lideran-el-ranking-de-empresas-mas-responsables-de-brasil-en-2025'
  },
  {
    empresa: 'Ambev',
    posicao: '4º Merco ESG',
    evidencia: '4º Merco ESG',
    pratica: 'Cadeia de fornecedores + água + circularidade',
    detalhe: '100% de fazendeiros parceiros empoderados, 70,5% de embalagens circulares e -25% emissões Escopos 1-3.',
    url: 'https://exame.com/revista-exame/ambev/'
  },
  {
    empresa: 'Fleury',
    posicao: 'Empresa do Ano EXAME',
    evidencia: 'Empresa do Ano EXAME 2026',
    pratica: 'Metas sociais associadas a instrumentos financeiros',
    detalhe: 'R$ 1 bi em debêntures atreladas ao atendimento de 1,8 milhão de usuários sem plano de saúde (meta superada).',
    url: 'https://exame.com/esg/melhores-do-esg-grupo-fleury-e-a-empresa-do-ano-veja-demais-vencedores-por-setor/'
  }
];

export function TopEmpresasEsgView({ setActivePage }: TopEmpresasEsgViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO DA PÁGINA (PADRÃO EXECUTIVO UNIFICADO)                       */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Identificação & Navegação */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60 flex items-center gap-1.5 shadow-xs">
                <Radio className="w-3 h-3 text-teal-600 dark:text-teal-400 animate-pulse" />
                BENCHMARK CORPORATIVO • TOP EMPRESAS ESG
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento 2027–2037</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <Award className="w-7 h-7 text-teal-600 dark:text-teal-400 shrink-0" />
              Top Empresas ESG
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Benchmark das empresas referência em sustentabilidade corporativa no Brasil, analisando práticas que antecipam exigências de mercado.
            </p>
          </div>

          {/* Navegação Rápida entre Temas Relacionados */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage?.('ESG')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              ESG
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Top Empresas ESG
            </button>
            <button 
              onClick={() => setActivePage?.('Concorrentes ESG')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Concorrentes ESG
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          {/* Card 1: 12 Anos Natura */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                LIDERANÇA CONSOLIDADA
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-teal-600 dark:text-teal-400 leading-none">
                  12 Anos
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Natura lidera Merco ESG consecutivamente.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                1º lugar nos pilares E, S e G (Merco / EXAME)
              </p>
            </div>
          </div>

          {/* Card 2: 17.354 Avaliações */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                AMPLITUDE METODOLÓGICA
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  17.354
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Entrevistas e avaliações no Ranking Merco.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                6 perspectivas e 25 fontes de informação
              </p>
            </div>
          </div>

          {/* Card 3: 15 Setores Melhores do ESG */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                MELHORES DO ESG
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-purple-600 dark:text-purple-400 leading-none">
                  15 Setores
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Empresas avaliadas com critérios financeiros.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Metodologia EXAME / Ibmec 2026
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. AS 3 PRINCIPAIS NOTÍCIAS EM DESTAQUE NO TOPO (PADRÃO ESTRUTURAL)       */}
      {/* ========================================================================= */}
      <section id="principais-noticias" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                Top 3 Destaques
              </span>
              <span className="text-xs text-slate-400">Casos Emblemáticos e Práticas de Liderança</span>
            </div>
            <h2 className="text-[18px] font-bold text-slate-900 dark:text-white">
              Principais Notícias sobre Líderes ESG no Brasil
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>Ranking Merco • EXAME / Ibmec • Relatórios Corporativos</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {TOP_EMPRESAS_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DUAS COLUNAS ANALÍTICAS (01 E 02)                                      */}
      {/* ========================================================================= */}
      <section id="analise-estrategica" className="scroll-mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* 01 — O que observar */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-6 md:p-8 shadow-sm flex flex-col">
            <div className="absolute top-6 right-6 md:top-8 md:right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
              01
            </div>

            <div className="flex flex-col gap-6 relative z-10 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center shrink-0">
                  <Search className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                </div>
                
                <div className="pt-1 pr-12">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    Monitoramento Estratégico • Líderes de Mercado
                  </span>
                  <h4 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-2">
                    01 — O que observar nos próximos meses
                  </h4>
                  <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg border border-orange-200/50 dark:border-orange-800/40">
                    <span className="text-[13px] text-orange-800 dark:text-orange-300 font-semibold">
                      Metas mensuráveis • Finanças sustentáveis • Cadeia de fornecedores • Circularidade • Impacto social
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                  <li>A consolidação de metas ESG vinculadas diretamente à estrutura de capital e debêntures sustentáveis (Fleury e Grupo Boticário).</li>
                  <li>A descarbonização e capacitação da cadeia de fornecedores e parceiros como critério de sustentabilidade (Ambev).</li>
                  <li>O uso de inteligência artificial e dados para cálculo de pegada ambiental e biodegradabilidade de formulações (Boticário).</li>
                  <li>A liderança equilibrada simultaneamente nas três dimensões Ambiental, Social e Governança (Natura no Ranking Merco).</li>
                  <li>A transição de relatórios descritivos para indicadores quantitativos auditáveis e metas atreladas à remuneração executiva.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 02 — Impacto para a Lorenzetti */}
          <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-emerald-100 dark:border-emerald-900/30 p-6 md:p-8 shadow-sm flex flex-col">
            <div className="absolute top-6 right-6 md:top-8 md:right-8 text-[44px] font-bold text-emerald-50 dark:text-emerald-900/20 leading-none pointer-events-none select-none">
              02
            </div>

            <div className="flex flex-col gap-6 relative z-10 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                
                <div className="pt-1 pr-12">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Hipóteses Observacionais para a Empresa
                  </span>
                  <h4 className="font-bold text-[18px] md:text-[20px] text-slate-900 dark:text-white mb-2">
                    02 — Impacto para a Lorenzetti
                  </h4>
                  <div className="inline-flex bg-emerald-50/80 dark:bg-emerald-900/30 px-3 py-1.5 rounded-lg border border-emerald-200/50 dark:border-emerald-800/40">
                    <span className="text-[13px] text-emerald-800 dark:text-emerald-300 font-semibold">
                      Práticas das líderes podem antecipar futuras expectativas de grandes redes e financiamento
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <p>
                  A evolução das empresas líderes em ESG <strong className="text-slate-900 dark:text-white font-bold">pode transformar</strong> exigências voluntárias em requisitos comerciais e operacionais para a indústria de materiais e bens duráveis.
                </p>
                <p>
                  A vinculação de debêntures e financiamentos a indicadores socioambientais <strong className="text-slate-900 dark:text-white font-bold">pode abrir oportunidades</strong> para redução do custo de capital atrelado a metas de eficiência energética e hídrica.
                </p>
                <p>
                  A demanda por rastreabilidade na cadeia de suprimentos <strong className="text-slate-900 dark:text-white font-bold">pode requerer</strong> maior integração com fornecedores de matérias-primas metálicas e termoplásticas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BLOCO VISUAL — BENCHMARK DAS LÍDERES ESG                               */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <h2 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white">
              Líderes ESG: da reputação à execução
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Quadro comparativo de evidências de liderança e práticas sob monitoramento contínuo
          </p>
        </div>

        {/* Tabela do Benchmark */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3.5 px-4">Empresa</th>
                <th className="py-3.5 px-4">Evidência de liderança</th>
                <th className="py-3.5 px-4">Prática que merece monitoramento</th>
                <th className="py-3.5 px-4 text-right">Fonte</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {TABELA_BENCHMARK.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-slate-900/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                    {row.empresa}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-semibold border border-teal-200/60 dark:border-teal-800/60">
                      {row.evidencia}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                    <div className="font-semibold text-slate-900 dark:text-white mb-0.5">{row.pratica}</div>
                    <div className="text-[11px] text-slate-400">{row.detalhe}</div>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <a 
                      href={row.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 dark:text-teal-400 font-bold hover:underline inline-flex items-center gap-0.5"
                    >
                      Link <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nota Metodológica Merco vs EXAME */}
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2.5">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <span>
            <strong>Nota Metodológica:</strong> O ranking Merco coloca Natura, Boticário, Mercado Livre e Ambev nas quatro primeiras posições. O Fleury não está entre esses quatro no Merco, mas entra no benchmark porque foi eleito Empresa do Ano da EXAME em 2026, com metodologias distintas e complementares.
          </span>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 5. OUTRAS NOTÍCIAS E MONITORAMENTO COMPLEMENTAR                            */}
      {/* ========================================================================= */}
      <section id="outras-noticias" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Monitoramento Complementar
              </span>
              <span className="text-xs text-slate-400">Rastreabilidade Documental</span>
            </div>
            <h2 className="text-[18px] font-bold text-slate-900 dark:text-white">
              Outras Notícias e Monitoramento
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>EXAME Especial ESG • Relatórios Setoriais</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {OTHER_EMPRESAS_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. NAVEGAÇÃO ENTRE SUBTÓPICOS                                              */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700/80">
        <button
          onClick={() => setActivePage?.('ESG')}
          className="flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Subtópico Anterior: ESG
        </button>

        <button
          onClick={() => setActivePage?.('Concorrentes ESG')}
          className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer"
        >
          Próximo Subtópico: Concorrentes ESG
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}


export const TopEmpresasEsgViewAlias = TopEmpresasEsgView;
export default TopEmpresasEsgView;
