import React from 'react';
import { 
  Home, 
  Building2, 
  PiggyBank, 
  Layers, 
  ShieldCheck, 
  Compass, 
  FileText, 
  TrendingUp, 
  Hammer, 
  Building, 
  CheckCircle2, 
  Calendar,
  ChevronRight 
} from 'lucide-react';

interface CenarioHabitacionalViewProps {
  setActivePage?: (page: string) => void;
}

export function CenarioHabitacionalView({ setActivePage }: CenarioHabitacionalViewProps) {
  const monitoringAxes = [
    {
      id: 'mercado-lancamentos',
      title: 'Mercado Imobiliário, Lançamentos e Vendas',
      icon: Building2,
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/60',
      description: 'Acompanhamento dos volumes de lançamentos, vendas de novas unidades, estoques e velocidade de vendas (VSO) nos segmentos econômico, médio e alto padrão nas principais regiões metropolitanas.'
    },
    {
      id: 'programas-sociais',
      title: 'Programas Habitacionais e Habitação de Interesse Social',
      icon: Home,
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60',
      description: 'Acompanhamento do programa Minha Casa, Minha Vida (faixas de renda 1 a 4), contratações, subsídios públicos e parcerias federativas para redução do déficit habitacional brasileiro.'
    },
    {
      id: 'credito-financiamento',
      title: 'Crédito Imobiliário e Fontes de Financiamento',
      icon: PiggyBank,
      iconBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/60',
      description: 'Monitoramento das contratações com recursos do FGTS e da caderneta de poupança (SBPE), evolução das taxas de juros, funding imobiliário e capacidade de pagamento das famílias.'
    },
    {
      id: 'tendencias-construtivas',
      title: 'Padrões de Edificação, Reformas e Tipologias',
      icon: Hammer,
      iconBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/60',
      description: 'Mapeamento da evolução das metragens médias, número de pontos de água e banheiros por unidade habitacional, métodos construtivos industrializados e ciclo de reformas residenciais.'
    }
  ];

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* CABEÇALHO DA PÁGINA PAI */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Cenário Habitacional
            </h1>
            <p className="text-sm sm:text-[16px] text-slate-600 dark:text-slate-400">
              Acompanhamento do déficit habitacional, financiamento imobiliário, programas habitacionais e dinâmicas da construção civil.
            </p>
          </div>
        </div>
      </div>

      {/* BANNER INFORMATIVO DO TEMA PAI */}
      <div className="bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 bg-slate-100 dark:bg-slate-800">
            <Home className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h2 className="text-base sm:text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white mb-0.5 sm:mb-1 leading-tight">
              Habitação, Mercado Imobiliário e Dinâmica Construtiva
            </h2>
            <p className="text-xs sm:text-[14px] text-slate-600 dark:text-slate-300 max-w-4xl">
              Estrutura macroestratégica para monitoramento do ciclo 2027-2037, integrando dados oficiais de programas sociais, funding de crédito e atividade imobiliária.
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80">
          <Calendar className="w-3.5 h-3.5" />
          <span>Planejamento 2027-2037</span>
        </div>
      </div>

      {/* CARD UNIFICADO: STATUS E VISÃO DE MERCADO */}
      <section>
        <div className="w-full bg-white dark:bg-[#111827] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-3.5 sm:p-5 md:p-6 shadow-sm">
          {/* Cabeçalho do Card */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3.5">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                  Status e visão de mercado
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                  Diretrizes de inteligência corporativa para o setor habitacional e imobiliário
                </p>
              </div>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0 hidden sm:inline-block">
              Síntese Estratégica
            </span>
          </div>

          {/* Destaque de Status do Cenário */}
          <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-xl p-3 sm:px-4 sm:py-3 border border-slate-200/70 dark:border-slate-700/60 mb-4 sm:mb-6">
            <p className="text-xs sm:text-[14px] text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              O Cenário Habitacional constitui o pilar que conecta as variáveis demográficas, renda e crédito imobiliário à demanda estrutural por sistemas hidrossanitários, aquecimento de água, metais e louças. O monitoramento contínuo das políticas habitacionais federais e do ritmo de lançamentos residenciais subsidia o dimensionamento de capacidade industrial e decisões de portfólio no planejamento de longo prazo.
            </p>
          </div>

          {/* Grid de Eixos de Monitoramento */}
          <div>
            <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Eixos de Monitoramento Estruturados
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {monitoringAxes.map((axis) => {
                const AxisIcon = axis.icon;
                const isProgramasSociais = axis.id === 'programas-sociais';
                const isMercadoImobiliario = axis.id === 'mercado-lancamentos';
                const isClickable = (isProgramasSociais || isMercadoImobiliario) && setActivePage;

                return (
                  <div 
                    key={axis.id}
                    onClick={() => {
                      if (isProgramasSociais && setActivePage) {
                        setActivePage('Programas Sociais');
                      } else if (isMercadoImobiliario && setActivePage) {
                        setActivePage('Mercado Imobiliário');
                      }
                    }}
                    className={`p-3.5 sm:p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20 transition-all flex flex-col justify-between ${
                      isClickable 
                        ? 'cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-sm group' 
                        : 'hover:border-indigo-300 dark:hover:border-indigo-700/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${axis.iconBg}`}>
                            <AxisIcon className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs sm:text-[14px] font-bold text-slate-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {axis.title}
                          </h5>
                        </div>
                        {isClickable && (
                          <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5 shrink-0">
                            Acessar <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                        {axis.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CARD DE GOVERNANÇA DE EVIDÊNCIAS */}
      <section>
        <div className="w-full bg-white dark:bg-[#111827] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-3.5 sm:p-5 md:p-6 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Governança e Homologação de Evidências
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                Padrão metodológico do Planejamento Estratégico 2027-2037
              </p>
            </div>
          </div>

          <div className="text-xs sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed space-y-2 border-t border-slate-100 dark:border-slate-800 pt-3">
            <p>
              As evidências documentais desta página pai serão vinculadas diretamente a levantamentos e relatórios de instituições homologadas, incluindo Câmara Brasileira da Indústria da Construção (CBIC), Instituto Brasileiro de Geografia e Estatística (IBGE), Instituto Brasileiro de Economia da Fundação Getulio Vargas (FGV IBRE), Associação Brasileira de Incorporadoras Imobiliárias (Abrainc), Caixa Econômica Federal e Ministério das Cidades.
            </p>
            <p className="text-slate-500 dark:text-slate-400 italic">
              Em estrita conformidade com as regras de governança do portal, dados estatísticos, taxas e percentuais somente são publicados mediante comprovação documental expressa nas fontes primárias registradas.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
