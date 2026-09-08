import React, { useState } from 'react';
import { 
  Users, 
  Factory, 
  Scale, 
  ArrowRight, 
  ArrowRightLeft, 
  Activity, 
  Coins,
  Sparkles
} from 'lucide-react';

interface IndustriaEletroeletronicoViewProps {
  setActivePage: (page: string) => void;
}

export const IndustriaEletroeletronicoView: React.FC<IndustriaEletroeletronicoViewProps> = ({ setActivePage }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const subPages = [
    {
      id: 'Confiança do Consumidor',
      title: 'Confiança do Consumidor (ICEI)',
      category: 'Percepção & Investimento',
      icon: Users,
      headline: 'ICEI de abril/2026 registra 47,9 pontos, marcando o 13º mês consecutivo abaixo da linha divisória de 50 pontos e reforçando cenário prolongado de falta de confiança.',
      iconColor: 'text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
      metrics: [
        { label: 'Eletroeletrônico', value: '47,9 pts', detail: 'Abril/2026' },
        { label: 'Área Elétrica', value: '49,3 pts', detail: 'Abaixo de 50 pts' },
        { label: 'Área Eletrônica', value: '46,3 pts', detail: 'Queda agravada' },
      ],
    },
    {
      id: 'Produção da Indústria',
      title: 'Produção da Indústria Eletroeletrônica',
      category: 'Atividade Física & Produção',
      icon: Factory,
      headline: 'Pesquisa Industrial Mensal (IBGE) de maio/2026 aponta recuo de 4,3% na produção física do setor ante 2025, acumulando retração de 2,4% nos primeiros cinco meses do ano.',
      iconColor: 'text-red-600 dark:text-red-300 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
      metrics: [
        { label: 'Eletroeletrônico', value: '-4,3%', detail: 'Maio/2026' },
        { label: 'Acumulado Ano', value: '-2,4%', detail: 'Jan-Mai/2026' },
        { label: 'Área Eletrônica', value: '-8,7%', detail: 'Maio/2026' },
      ],
    },
    {
      id: 'Sondagem Conjuntural',
      title: 'Sondagem Conjuntural (Custos & Insumos)',
      category: 'Operação & Custos Industriais',
      icon: Activity,
      headline: 'Sondagem industrial revela que 57% das empresas sofrem pressão de custos de matérias-primas e 62% indicam necessidade de repassar reajustes aos preços finais (Mai/2026).',
      iconColor: 'text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800',
      metrics: [
        { label: 'Pressão Custos', value: '57%', detail: 'Empresas afetadas' },
        { label: 'Reajuste Preços', value: '62%', detail: 'Repasse necessário' },
        { label: 'Atrasos Import.', value: '27%', detail: 'Maio/2026' },
      ],
    },
    {
      id: 'Imposição de Sobretaxas',
      title: 'Imposição de Sobretaxas & Protecionismo',
      category: 'Comércio Exterior & Regulação',
      icon: Scale,
      headline: 'Elevação tarifária nos EUA (Seções 301 e 232) impõe taxas de até 37,5%, atingindo diretamente 864 subitens exportados, o equivalente a 70% do universo tarifário do setor.',
      iconColor: 'text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800',
      metrics: [
        { label: 'Tarifa Máxima', value: 'Até 37,5%', detail: 'Barreiras EUA' },
        { label: 'Itens Afetados', value: '864 NCMs', detail: 'Subitens taxados' },
        { label: 'Impacto Global', value: '70%', detail: 'Do portfólio exportado' },
      ],
    },
    {
      id: 'Balanço Comercial',
      title: 'Balanço do Comércio Exterior (SECEX)',
      category: 'Fluxo Comercial Internacional',
      icon: ArrowRightLeft,
      headline: 'No 1º semestre de 2026, o setor acumulou déficit comercial de US$ 21,6 bilhões, com importações avançando para US$ 25,7 bilhões (+7,1%) e exportações de US$ 4,1 bilhões (+8,2%).',
      iconColor: 'text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800',
      metrics: [
        { label: 'Déficit Setorial', value: 'US$ -21,6 bi', detail: 'Jan-Jun/2026' },
        { label: 'Importações', value: 'US$ 25,7 bi', detail: 'Ásia representa 70%' },
        { label: 'Exportações', value: 'US$ 4,1 bi', detail: 'EUA lideram (29%)' },
      ],
    },
    {
      id: 'Preço de Commodities',
      title: 'Preço de Commodities Setoriais',
      category: 'Matérias-Primas & Insumos Críticos',
      icon: Coins,
      headline: 'Cotações em dólares acumulam fortes altas em 12 meses (mai/25 a abr/26), lideradas pelas disparadas no Alumínio (+45%), Petróleo (+41%), Cobre (+28%) e Resinas Plásticas (+17%).',
      iconColor: 'text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950 border-cyan-200 dark:border-cyan-800',
      metrics: [
        { label: 'Alumínio (LME)', value: '+45%', detail: 'Acumulado 12 meses' },
        { label: 'Cobre (LME)', value: '+28%', detail: 'Acumulado 12 meses' },
        { label: 'Resina PP', value: '+17%', detail: 'Acumulado 12 meses' },
      ],
    },
  ];

  return (
    <div className="w-full font-sans text-slate-800 dark:text-slate-100 animate-in fade-in duration-300 pb-12" id="industria-eletroeletronico-view-root">
      
      {/* CABEÇALHO COMPACTO ESTRATÉGICO */}
      <div className="mb-4 bg-white dark:bg-slate-800 rounded-xl py-2.5 px-4 sm:py-3 sm:px-5 border border-slate-200 dark:border-slate-700 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shrink-0">
            <Sparkles className="w-3 h-3 shrink-0" />
            Setor Eletroeletrônico
          </span>
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
            Indústria do Setor Eletroeletrônico
          </h2>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">
          Selecione o subtema desejado para acessar o detalhamento executivo.
        </p>
      </div>

      {/* GRID DE CARDS COM VISUAL DE BOTÕES INTERATIVOS (3x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {subPages.map((sub) => {
          const Icon = sub.icon;
          const isHovered = hoveredCard === sub.id;

          return (
            <button
              key={sub.id}
              type="button"
              onClick={() => setActivePage(sub.id)}
              onMouseEnter={() => setHoveredCard(sub.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="text-left w-full bg-white dark:bg-slate-800 hover:bg-slate-50/80 dark:hover:bg-slate-750 rounded-2xl p-5 border border-b-2 border-slate-200/90 dark:border-slate-700 dark:border-b-slate-600 hover:border-blue-400 dark:hover:border-blue-500 hover:border-b-blue-600 dark:hover:border-b-blue-500 shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.65),0_0_24px_rgba(59,130,246,0.15)] hover:ring-4 hover:ring-blue-500/10 dark:hover:ring-blue-400/20 active:scale-[0.99] active:translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between group relative select-none h-full"
            >
              <div className="w-full">
                {/* IDENTIFICAÇÃO: ÍCONE + CATEGORIA + TÍTULO */}
                <div className="flex items-start gap-3.5 mb-3.5">
                  <div className={`w-12 h-12 rounded-xl border ${sub.iconColor} flex items-center justify-center shrink-0 group-hover:scale-105 group-active:scale-95 transition-transform duration-150 shadow-2xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-0.5 break-words group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {sub.category}
                    </span>
                    <h3 className="text-[17px] sm:text-lg font-black text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                      {sub.title}
                    </h3>
                  </div>
                </div>

                {/* TEXTO / MANCHETE EXECUTIVA DA PÁGINA */}
                <p className="text-[13.5px] sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-4 break-words">
                  {sub.headline}
                </p>

                {/* LINHA DE MÉTRICAS EXECUTIVAS LIMPAS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 py-2.5 px-3.5 mb-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                  {sub.metrics.map((m, mIdx) => (
                    <div 
                      key={mIdx} 
                      className={`flex flex-col text-left ${mIdx < 2 ? 'sm:border-r sm:border-slate-200 sm:dark:border-slate-700/80 sm:pr-2' : ''}`}
                    >
                      <span className="text-[10.5px] font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 block leading-snug break-words">
                        {m.label}
                      </span>
                      <span className="text-[15px] sm:text-base font-black text-slate-900 dark:text-white tracking-tight my-0.5 leading-snug break-words">
                        {m.value}
                      </span>
                      <span className="text-[11.5px] text-slate-600 dark:text-slate-300 font-medium block leading-snug break-words">
                        {m.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTÃO DE AÇÃO NO RODAPÉ DO CARD */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-slate-700/80 w-full mt-auto">
                <div className="w-full py-2.5 px-3.5 rounded-xl bg-slate-100 dark:bg-slate-700/90 border border-slate-200/80 dark:border-slate-600/80 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 text-slate-700 dark:text-slate-100 group-hover:text-white dark:group-hover:text-white dark:group-hover:border-blue-500 transition-all duration-150 flex items-center justify-between font-bold text-[13.5px] sm:text-sm shadow-2xs group-hover:shadow-sm">
                  <span>Acessar Subtema</span>
                  <div className="w-6 h-6 rounded-lg bg-white/40 dark:bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0 ml-1.5">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150 text-slate-700 dark:text-slate-100 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default IndustriaEletroeletronicoView;
