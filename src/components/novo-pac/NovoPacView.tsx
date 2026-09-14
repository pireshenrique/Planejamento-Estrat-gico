import React from 'react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../layout/HeaderKpiCard';
import { EvidenceCard } from '../layout/EvidenceCard';
import { 
  Building2, 
  BarChart3, 
  Target, 
  TrendingUp,
  Lightbulb,
  Wallet,
  Users,
  Crown,
  Star,
  Sparkles,
  Layers
} from 'lucide-react';

interface NovoPacViewProps {
  setActivePage: (page: string) => void;
}

const NOVO_PAC_DATA = {
  kpis: {
    investimentoTotal: {
      title: "Investimento Previsto",
      value: "R$ 1,7 Tri",
      context: "Até 2026 e pós-2026",
      explanation: "Montante total anunciado para obras estruturantes, mobilidade e sustentabilidade no país.",
      source: "Governo Federal"
    },
    eixosAtuacao: {
      title: "Eixos de Atuação",
      value: "9",
      context: "Áreas temáticas",
      explanation: "Desde transição energética e infraestrutura social até saúde e conectividade.",
      source: "Casa Civil"
    },
    cidadesAtingidas: {
      title: "Alcance",
      value: "5.500+",
      context: "Municípios",
      explanation: "Impacto logístico, urbano e social em praticamente todos os municípios brasileiros.",
      source: "Programa Novo PAC"
    }
  }
};

const NOVO_PAC_EVIDENCES: any[] = [];

export const NovoPacView: React.FC<NovoPacViewProps> = ({ setActivePage }) => {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Novo PAC
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">
            Acompanhamento do Programa de Aceleração do Crescimento, investimentos estruturantes e eixos estratégicos.
          </p>
        </div>

        <ResponsiveContainer minWidth="200px" gap="gap-3" className="flex-1">
          {/* Card 1: Investimento Total */}
          <HeaderKpiCard
            title={NOVO_PAC_DATA.kpis.investimentoTotal.title}
            value={NOVO_PAC_DATA.kpis.investimentoTotal.value}
            context={NOVO_PAC_DATA.kpis.investimentoTotal.context}
            explanation={NOVO_PAC_DATA.kpis.investimentoTotal.explanation}
            source={NOVO_PAC_DATA.kpis.investimentoTotal.source}
            icon={Wallet}
            color="indigo"
          />

          {/* Card 2: Eixos */}
          <HeaderKpiCard
            title={NOVO_PAC_DATA.kpis.eixosAtuacao.title}
            value={NOVO_PAC_DATA.kpis.eixosAtuacao.value}
            context={NOVO_PAC_DATA.kpis.eixosAtuacao.context}
            explanation={NOVO_PAC_DATA.kpis.eixosAtuacao.explanation}
            source={NOVO_PAC_DATA.kpis.eixosAtuacao.source}
            icon={Layers}
            color="emerald"
          />

          {/* Card 3: Alcance */}
          <HeaderKpiCard
            title={NOVO_PAC_DATA.kpis.cidadesAtingidas.title}
            value={NOVO_PAC_DATA.kpis.cidadesAtingidas.value}
            context={NOVO_PAC_DATA.kpis.cidadesAtingidas.context}
            explanation={NOVO_PAC_DATA.kpis.cidadesAtingidas.explanation}
            source={NOVO_PAC_DATA.kpis.cidadesAtingidas.source}
            icon={Target}
            color="amber"
          />
        </ResponsiveContainer>
      </div>

      {/* EVIDÊNCIAS DE DESTAQUE (TOP 3) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Principais notícias e dados</h2>
           </div>
        </div>
           
        {NOVO_PAC_EVIDENCES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {NOVO_PAC_EVIDENCES.slice(0, 3).map((ev) => (
              <EvidenceCard 
                key={ev.id}
                evidence={ev as any}
                onDownloadPdf={undefined}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Nenhuma notícia cadastrada no momento. Insira novas evidências para exibir nesta seção.
            </p>
          </div>
        )}
      </section>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* O que observar nos próximos meses */}
            <div className="lg:col-span-7 relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
                01
              </div>
              <div className="flex-1 z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-orange-600 dark:text-orange-500">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="text-[18px] font-black text-slate-900 dark:text-white tracking-tight uppercase">
                    Focos de Oportunidade
                  </h3>
                </div>

                <p className="text-[13.5px] text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                  Com o foco maciço em infraestrutura e sustentabilidade, há um impulso considerável para a economia de base e cadeia construtiva:
                </p>

                {/* Box central */}
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 border border-slate-100 dark:border-slate-800 relative mb-6">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-orange-500 rounded-r-md"></div>
                  
                  <div className="flex justify-center items-center">
                    <div className="flex items-end gap-6 w-full max-w-sm justify-around">
                      {/* Transição Energética */}
                      <div className="flex flex-col items-center">
                        <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          Energia Limpa
                        </span>
                        <span className="text-[22px] sm:text-[26px] font-black text-slate-700 dark:text-slate-200 tracking-tight leading-none mb-3">
                          R$ 596 bi
                        </span>
                        <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900 shadow-sm shrink-0" />
                      </div>
                      
                      {/* Transporte */}
                      <div className="flex flex-col items-center">
                        <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          Transporte
                        </span>
                        <span className="text-[22px] sm:text-[26px] font-black text-amber-600 dark:text-amber-400 tracking-tight leading-none mb-3">
                          R$ 369 bi
                        </span>
                        <div className="w-4 h-4 rounded-full bg-amber-400 dark:bg-amber-500 border-2 border-white dark:border-slate-900 shadow-sm shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caixa de Interpretação: O QUE OBSERVAR */}
                <div className="mt-4 p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-0.5">
                    O que observar
                  </span>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong>A execução do orçamento impacta a demanda por insumos de infraestrutura, logística e tecnologia, mas as restrições fiscais podem desacelerar parte da agenda.</strong>
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: Governo Federal — 2026
              </div>
            </div>

            {/* BLOCO 4: O QUE PODE SUSTENTAR O PAC EM 2026? (DIREITA - 5 colunas) */}
            <div className="lg:col-span-5 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-400/30" />
                  <h4 className="text-[14.5px] font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                    PRINCIPAIS VETORES DE INVESTIMENTO
                  </h4>
                </div>

                {/* 3 VETORES EXPLICATIVOS */}
                <div className="space-y-2.5">
                  {/* Vetor 1: Parcerias Público-Privadas */}
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <div>
                        <span className="text-[12px] font-bold text-slate-900 dark:text-white block">
                          1. Parcerias e Concessões
                        </span>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          O modelo atual do PAC prioriza editais de concessão à iniciativa privada e PPPs para superar as limitações do orçamento público.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vetor 2: Transição Energética */}
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <div>
                        <span className="text-[12px] font-bold text-slate-900 dark:text-white block">
                          2. Transição Energética e Sustentabilidade
                        </span>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          Obras voltadas a energias renováveis e adaptação climática urbana formam a maior fatia dos recursos previstos, atraindo financiamento internacional.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vetor 3: Infraestrutura Logística */}
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                      <div>
                        <span className="text-[12px] font-bold text-slate-900 dark:text-white block">
                          3. Infraestrutura Logística
                        </span>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          Melhoria de portos, rodovias e malha ferroviária visa reduzir o custo Brasil e facilitar o escoamento do agronegócio e indústria de transformação.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusão do painel */}
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 space-y-1">
                  <p className="text-[12px] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                    O desempenho do Novo PAC depende diretamente do apetite de investidores privados e da capacidade de estruturação de bons projetos de concessão.
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-4 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: Inteligência Corporativa — 2026
              </div>
            </div>
          </div>

          {/* FAIXA DE INFERÊNCIA ESTRATÉGICA */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs mt-5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 block mb-0.5">
                INFERÊNCIA ESTRATÉGICA
              </span>
              <p className="text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed">
                As empresas que atuam com soluções para cidades sustentáveis, saneamento e transição energética devem alinhar suas rotas tecnológicas aos editais do programa para capturar a demanda induzida.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default NovoPacView;
