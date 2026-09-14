import React from 'react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../layout/HeaderKpiCard';
import { EvidenceCard } from '../layout/EvidenceCard';
import { RENDIMENTO_EVIDENCES } from '../../data/evidences/rendimento';
import { RENDIMENTO_DATA } from '../../data/economia-brasileira/rendimento';
import { 
  DollarSign, 
  BarChart3, 
  Search, 
  Target, 
  TrendingUp,
  Lightbulb,
  Wallet,
  Users,
  Crown,
  Info,
  Star,
  ArrowRight,
  Sparkles,
  UserCheck,
  User
} from 'lucide-react';

interface RendimentoBrasileiroViewProps {
  setActivePage: (page: string) => void;
}

const formatBRLInteger = (value: number) => `R$ ${value.toLocaleString('pt-BR')}`;

export const RendimentoBrasileiroView: React.FC<RendimentoBrasileiroViewProps> = ({ setActivePage }) => {
  const maxRegionalIncome = Math.max(...RENDIMENTO_DATA.regionalIncome.map(item => item.value));

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Rendimento do Brasileiro
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">
            Acompanhamento do rendimento médio real habitual, massa salarial, projeções macroeconômicas e desigualdade de renda.
          </p>
        </div>

        <ResponsiveContainer minWidth="200px" gap="gap-3" className="flex-1">
          {/* Card 1: Rendimento Médio */}
          <HeaderKpiCard
            title={RENDIMENTO_DATA.kpis.rendimentoMedio.title}
            value={RENDIMENTO_DATA.kpis.rendimentoMedio.value}
            context={RENDIMENTO_DATA.kpis.rendimentoMedio.context}
            explanation={RENDIMENTO_DATA.kpis.rendimentoMedio.explanation}
            source={RENDIMENTO_DATA.kpis.rendimentoMedio.source}
            icon={DollarSign}
            color="indigo"
          />

          {/* Card 2: Massa de Rendimento */}
          <HeaderKpiCard
            title={RENDIMENTO_DATA.kpis.massaRendimento.title}
            value={RENDIMENTO_DATA.kpis.massaRendimento.value}
            context={RENDIMENTO_DATA.kpis.massaRendimento.context}
            explanation={RENDIMENTO_DATA.kpis.massaRendimento.explanation}
            source={RENDIMENTO_DATA.kpis.massaRendimento.source}
            icon={TrendingUp}
            color="emerald"
          />

          {/* Card 3: Evolução Real */}
          <HeaderKpiCard
            title={RENDIMENTO_DATA.kpis.evolucaoReal.title}
            value={RENDIMENTO_DATA.kpis.evolucaoReal.value}
            context={RENDIMENTO_DATA.kpis.evolucaoReal.context}
            explanation={RENDIMENTO_DATA.kpis.evolucaoReal.explanation}
            source={RENDIMENTO_DATA.kpis.evolucaoReal.source}
            icon={BarChart3}
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
           
        {RENDIMENTO_EVIDENCES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {RENDIMENTO_EVIDENCES.slice(0, 3).map((ev) => (
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* O que observar nos próximos meses */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que observar nos próximos meses</h4>
                    <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-orange-700 dark:text-orange-400 font-semibold">
                        Ritmo de crescimento da renda e evolução do poder de compra
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>
                      <strong>Acompanhar a desaceleração do crescimento da renda.</strong> As projeções indicam avanço do rendimento real do trabalho em 2026, porém em ritmo inferior ao observado em 2025.
                    </li>
                    <li>
                      <strong>Monitorar se o atual patamar de renda se sustenta.</strong> O rendimento real permanece elevado em 2026, enquanto a massa salarial continua crescendo, ampliando o volume de renda na economia.
                    </li>
                    <li>
                      <strong>Observar a distribuição dos ganhos.</strong> Apesar do avanço médio dos rendimentos, a desigualdade permanece elevada, indicando que a evolução da renda pode gerar impactos distintos entre os diferentes grupos de consumidores.
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> XP Investimentos (2026), IBGE (2025 e 1º Tri/2026) e Observatório Brasileiro das Desigualdades / UOL.
                  </div>
                </div>
              </div>
            </div>

            {/* Impacto para a empresa */}
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
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a Lorenzetti</h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Potencial de consumo, demanda residencial e estratégia de portfólio
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>
                      <strong>Renda em patamar elevado pode sustentar a demanda por bens residenciais</strong>, criando um ambiente potencialmente favorável ao consumo de produtos ligados à reforma, manutenção e melhoria do lar.
                    </li>
                    <li>
                      <strong>A expansão da massa de rendimentos amplia o potencial de demanda do mercado</strong>, enquanto a evolução da renda disponível deve ser acompanhada como possível vetor adicional de consumo.
                    </li>
                    <li>
                      <strong>A desigualdade reforça a importância de uma oferta segmentada</strong>, equilibrando produtos de maior acessibilidade com linhas de maior valor agregado para diferentes perfis de consumidores.
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> IBGE (2025 e 1º Tri/2026), XP Investimentos (2026) e Observatório Brasileiro das Desigualdades / UOL.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. A RENDA CRESCE, MAS DE FORMA DESIGUAL */}
      <section className="bg-white dark:bg-[#111827] p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-[28px] font-black text-rose-300 dark:text-rose-400/60 leading-none">
              02
            </span>
            <div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight uppercase">
                A RENDA CRESCE, MAS DE FORMA DESIGUAL
              </h3>
              <p className="text-[14px] text-slate-500 dark:text-slate-400">
                Diferenças regionais, condições do mercado de trabalho e perspectivas para a renda
              </p>
            </div>
          </div>
        </div>

        {/* CONTAINER PRINCIPAL */}
        <div className="flex flex-col gap-6">
          
          {/* GRID SUPERIOR: 2 COLUNAS (DISPERSÃO REGIONAL & DESIGUALDADE NARRATIVA) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* BLOCO 1: DISTRIBUIÇÃO REGIONAL DA RENDA (BARRAS HORIZONTAIS) */}
            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header Card */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight uppercase leading-snug">
                      A RENDA VARIA SIGNIFICATIVAMENTE ENTRE AS REGIÕES
                    </h4>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Rendimento real habitual do trabalho — 2025
                    </p>
                  </div>
                </div>

                {/* BARRAS POR UF */}
                <div className="space-y-3 pt-1">
                  {RENDIMENTO_DATA.regionalIncome.map((item) => {
                    const widthPercent = (item.value / maxRegionalIncome) * 100;
                    const isNational = item.kind === 'national';

                    if (isNational) {
                      return (
                        <div 
                          key={item.name}
                          className="p-2.5 rounded-xl bg-orange-50/90 dark:bg-orange-950/40 border border-orange-200/90 dark:border-orange-900/50 flex items-center gap-3 text-[13.5px] shadow-2xs"
                        >
                          <div className="w-28 sm:w-32 shrink-0">
                            <span className="text-slate-900 dark:text-white font-extrabold truncate block">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] text-orange-600 dark:text-orange-400 font-black uppercase tracking-wider block">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex-1 h-4.5 bg-orange-100 dark:bg-orange-900/50 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${item.barColor} rounded-full`} 
                              style={{ width: `${widthPercent}%` }} 
                            />
                          </div>
                          <span className="w-20 text-right font-black text-orange-600 dark:text-orange-400 shrink-0 text-[15px]">
                            {formatBRLInteger(item.value)}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <div 
                        key={item.name}
                        className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 text-[13.5px]"
                      >
                        <div className="w-28 sm:w-32 shrink-0">
                          <span className={`text-slate-800 dark:text-slate-200 ${item.kind === 'highest' ? 'font-semibold' : 'font-medium'} truncate block`}>
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className={`text-[10px] ${item.badgeColor} font-bold uppercase tracking-wider block`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${item.barColor} rounded-full`} 
                            style={{ width: `${widthPercent}%` }} 
                          />
                        </div>
                        <span className={`w-20 text-right font-bold ${item.textColor} shrink-0 text-[14.5px]`}>
                          {formatBRLInteger(item.value)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Caixa de Interpretação: O QUE ISSO MOSTRA */}
                <div className="mt-4 p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                  <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-1">
                    O que isso mostra
                  </span>
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    O rendimento médio varia quase 3 vezes entre o maior e o menor valor estadual, mostrando que a renda nacional esconde diferenças importantes entre os mercados regionais.
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: PNAD Contínua 2025 — IBGE
              </div>
            </div>

            {/* BLOCO 2: DESIGUALDADE (O CRESCIMENTO DA RENDA NÃO CHEGA IGUALMENTE A TODOS) */}
            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header Card */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800/50 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight uppercase leading-snug">
                      O CRESCIMENTO DA RENDA NÃO CHEGA IGUALMENTE A TODOS
                    </h4>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                      A desigualdade aparece tanto na distribuição quanto na evolução dos rendimentos
                    </p>
                  </div>
                </div>

                {/* 4 DIMENSÕES DA DESIGUALDADE */}
                <div className="space-y-3 pt-0.5">
                  
                  {/* 1. Concentração de renda */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3.5">
                    <div className="shrink-0 text-center min-w-[95px]">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-[26px] font-black text-rose-600 dark:text-rose-400 tracking-tight leading-none">
                          31,5x
                        </span>
                      </div>
                      <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 block mt-1 tracking-wider leading-tight">
                        1% mais rico vs.<br />50% mais pobres
                      </span>
                      <span className="inline-block mt-1 text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                        2024: 30,2x
                      </span>
                    </div>
                    <div className="border-l border-slate-200 dark:border-slate-700/60 pl-3 py-0.5">
                      <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium">
                        Em 2025, o rendimento médio do <strong>1% mais rico foi 31,5 vezes maior</strong> que o dos 50% mais pobres.
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                        Em 2024, essa relação era de 30,2 vezes.
                      </p>
                    </div>
                  </div>

                  {/* 2. Evolução da renda por gênero */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Evolução da renda por gênero (2025)
                      </span>
                      <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                        Mulheres / Homens: <strong>72,2%</strong>
                      </span>
                    </div>

                    {/* Comparativo de crescimento */}
                    <div className="grid grid-cols-3 gap-2 text-center text-[11.5px]">
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-2 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Homens</span>
                        <span className="font-extrabold text-indigo-600 dark:text-indigo-400 text-[13px]">+5,8%</span>
                      </div>
                      <div className="bg-orange-50/60 dark:bg-orange-950/30 py-1.5 px-2 rounded-lg border border-orange-200/50 dark:border-orange-900/40">
                        <span className="text-slate-600 dark:text-slate-400 block text-[10.5px] font-medium">Brasil</span>
                        <span className="font-extrabold text-orange-600 dark:text-orange-400 text-[13px]">+5,3%</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-2 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Mulheres</span>
                        <span className="font-extrabold text-purple-600 dark:text-purple-400 text-[13px]">+4,8%</span>
                      </div>
                    </div>

                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug pt-0.5">
                      Em 2025, o rendimento cresceu 5,8% entre os homens e 4,8% entre as mulheres, enquanto a média nacional avançou 5,3%. Ainda assim, o rendimento médio das mulheres correspondeu a <strong>72,2% do rendimento dos homens</strong>.
                    </p>
                  </div>

                  {/* 3. Desigualdade regional */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Desigualdade também é regional
                      </span>
                      <span className="text-[10px] text-slate-400">1% mais rico vs. 50% mais pobres</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-[11.5px]">
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Sudeste</span>
                        <span className="font-bold text-slate-900 dark:text-white text-[13.5px]">30,3x</span>
                        <span className="text-[9.5px] text-slate-400 block mt-0.5">em 2025</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Centro-Oeste</span>
                        <span className="font-bold text-slate-900 dark:text-white text-[13.5px]">29,3x</span>
                        <span className="text-[9.5px] font-semibold text-rose-500 dark:text-rose-400 block mt-0.5">(2024: 25x)</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Sul</span>
                        <span className="font-bold text-slate-900 dark:text-white text-[13.5px]">21,8x</span>
                        <span className="text-[9.5px] text-slate-400 block mt-0.5">em 2025</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-0.5">
                      Razão entre o rendimento médio do 1% mais rico e dos 50% mais pobres. No Centro-Oeste, a relação passou de 25 vezes em 2024 para 29,3 vezes em 2025.
                    </p>
                  </div>

                  {/* 4. Recorte racial e de gênero */}
                  <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Recorte racial e de gênero
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-700 dark:text-slate-300">
                        Diferença: <span className="text-rose-600 dark:text-rose-400 font-black">57,8%</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[12px]">
                      <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-800/60">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Mulheres negras</span>
                        <span className="text-[14px] font-bold text-slate-900 dark:text-white block mt-0.5">R$ 2.184</span>
                      </div>
                      <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-800/60">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Homens não negros</span>
                        <span className="text-[14px] font-bold text-slate-900 dark:text-white block mt-0.5">R$ 5.172</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-0.5">
                      O rendimento das mulheres negras foi 57,8% inferior ao dos homens não negros.
                    </p>
                  </div>

                </div>

                {/* Caixa de Conclusão: O QUE ISSO MOSTRA */}
                <div className="mt-3.5 p-3.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-400 block mb-1">
                    O que isso mostra
                  </span>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    A melhora da renda média convive com desigualdades persistentes na concentração, no ritmo de crescimento e na distribuição entre regiões e grupos da população.
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: Observatório Brasileiro das Desigualdades — 2026, com base em dados de 2025 / UOL
              </div>
            </div>

          </div>

          {/* PARTE INFERIOR: PERSPECTIVA FUTURA & O QUE PODE SUSTENTAR A RENDA EM 2026 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* BLOCO 3: PERSPECTIVA FUTURA (ESQUERDA - 7 colunas) */}
            <div className="lg:col-span-7 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800/50 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight uppercase leading-snug">
                      CRESCIMENTO CONTINUA, MAS PERDE FORÇA
                    </h4>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Renda real disponível das famílias — variação prevista
                    </p>
                  </div>
                </div>

                {/* TIMELINE VISUAL */}
                <div className="py-5 px-2 sm:px-4">
                  <div className="relative">
                    {/* Linha horizontal conectora alinhada ao centro dos pontos */}
                    <div className="absolute bottom-[7px] left-[15%] right-[15%] h-0.5 bg-slate-300 dark:bg-slate-700 flex items-center z-0">
                      <div className="w-[66%] h-full bg-amber-400 dark:bg-amber-500" />
                      <div className="w-[34%] h-full border-t-2 border-dashed border-slate-300 dark:border-slate-600" />
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 absolute -right-2 -top-1.5" />
                    </div>

                    {/* Os 3 Pontos com números acima */}
                    <div className="grid grid-cols-3 text-center relative z-10">
                      {/* 2025 */}
                      <div className="flex flex-col items-center">
                        <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          2025
                        </span>
                        <span className="text-[22px] sm:text-[26px] font-black text-amber-600 dark:text-amber-400 tracking-tight leading-none mb-3">
                          +4,5%
                        </span>
                        <div className="w-4 h-4 rounded-full bg-amber-400 dark:bg-amber-500 border-2 border-white dark:border-slate-900 shadow-sm shrink-0" />
                      </div>

                      {/* 2026 */}
                      <div className="flex flex-col items-center">
                        <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          2026
                        </span>
                        <span className="text-[22px] sm:text-[26px] font-black text-amber-600 dark:text-amber-400 tracking-tight leading-none mb-3">
                          +4,5%
                        </span>
                        <div className="w-4 h-4 rounded-full bg-amber-400 dark:bg-amber-500 border-2 border-white dark:border-slate-900 shadow-sm shrink-0" />
                      </div>

                      {/* 2027 (DESTAQUE DE MODERAÇÃO) */}
                      <div className="flex flex-col items-center">
                        <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          2027
                        </span>
                        <span className="text-[22px] sm:text-[26px] font-black text-amber-600 dark:text-amber-400 tracking-tight leading-none mb-3">
                          +3,0%
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
                    <strong>A renda disponível deve continuar crescendo, mas a projeção indica moderação do ritmo em 2027.</strong>
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: XP Investimentos — 2026
              </div>
            </div>

            {/* BLOCO 4: O QUE PODE SUSTENTAR A RENDA EM 2026? (DIREITA - 5 colunas) */}
            <div className="lg:col-span-5 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-400/30" />
                  <h4 className="text-[14.5px] font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                    O QUE PODE SUSTENTAR A RENDA EM 2026?
                  </h4>
                </div>

                {/* 3 VETORES EXPLICATIVOS */}
                <div className="space-y-2.5">
                  {/* Vetor 1: Mercado de trabalho */}
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <div>
                        <span className="text-[12px] font-bold text-slate-900 dark:text-white block">
                          1. Mercado de trabalho aquecido
                        </span>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          Maior ocupação e rendimentos sustentam a renda proveniente do trabalho.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vetor 2: Reforma do IRPF */}
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[12px] font-bold text-slate-900 dark:text-white">
                            2. Reforma do IRPF
                          </span>
                          <span className="text-[12px] font-extrabold text-blue-600 dark:text-blue-400">(+0,6 p.p.)</span>
                        </div>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          A redução da carga tributária pode elevar a renda disponível das famílias.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vetor 3: Transferências fiscais */}
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                      <div>
                        <span className="text-[12px] font-bold text-slate-900 dark:text-white block">
                          3. Transferências fiscais
                        </span>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          Transferências de renda podem reforçar a renda disponível, especialmente entre famílias de menor rendimento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusão do painel */}
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 space-y-1">
                  <p className="text-[12px] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                    A renda em 2026 será influenciada tanto pelo mercado de trabalho quanto pelas medidas fiscais consideradas no cenário.
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 italic leading-snug">
                    Cenário condicionado às medidas consideradas pela XP.
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-4 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: XP Investimentos — 2026
              </div>
            </div>

          </div>

          {/* FAIXA DE INFERÊNCIA ESTRATÉGICA */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 block mb-0.5">
                INFERÊNCIA ESTRATÉGICA
              </span>
              <p className="text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed">
                A heterogeneidade regional e de renda indica que a evolução da renda média nacional não representa, isoladamente, o potencial de consumo de todos os mercados.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. EVIDÊNCIAS E FONTES */}
      {RENDIMENTO_EVIDENCES.length > 3 && (
        <section id="evidencias" className="scroll-mt-12 relative mt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS E FONTES</h2>
            </div>
          </div>
             
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {RENDIMENTO_EVIDENCES.slice(3).map((ev) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev as any} 
                onDownloadPdf={undefined}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};


