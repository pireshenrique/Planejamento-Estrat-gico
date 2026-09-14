import React from 'react';
import { 
  Users, 
  Briefcase, 
  Rocket, 
  Brain, 
  HeartHandshake, 
  Calendar, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  Search, 
  Factory, 
  Globe, 
  Layers,
  HeartPulse
} from 'lucide-react';

interface CarreiraGeracoesViewProps {
  setActivePage?: (page: string) => void;
}

export type PerfilGeracoesViewProps = CarreiraGeracoesViewProps;

interface SubtopicCardData {
  id: string;
  order: string;
  title: string;
  navTarget: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  icon: any;
  sources: string;
  briefSummary: string;
  keyMetric: string;
  macroImpact: string;
  lorenzettiHypothesis: string;
}

const CARREIRA_SUBTOPICS: SubtopicCardData[] = [
  {
    id: 'perfil_geracoes',
    order: '01',
    title: 'Perfil das gerações',
    navTarget: 'Perfil das gerações',
    badge: 'Demografia & Força de Trabalho Multigeracional',
    badgeBg: 'bg-blue-100 dark:bg-blue-950/60 border-blue-300 dark:border-blue-700/60',
    badgeText: 'text-blue-800 dark:text-blue-300',
    icon: Users,
    sources: 'IBGE, IPEA, Harvard Business Review, Mercer',
    briefSummary: 'Análise demográfica do envelhecimento da População Economicamente Ativa (PEA) e dinâmica de convivência entre Baby Boomers, Geração X, Millennials e Geração Z nas plantas fabris.',
    keyMetric: 'Transição Etária | Mentoria Cruzada',
    macroImpact: 'Necessidade de adaptação ergonômica em linhas de montagem, novos pacotes de benefícios e políticas ativas de retenção multigeracional.',
    lorenzettiHypothesis: 'Pode inspirar a estruturação de programas de mentoria intergeracional para transferir o know-how acumulado de operadores seniores para novas turmas técnicas.'
  },
  {
    id: 'mudancas_carreiras',
    order: '02',
    title: 'Mudança de carreiras',
    navTarget: 'Mudança de carreiras',
    badge: 'Mobilidade, Retenção & Carreira em Y',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-700/60',
    badgeText: 'text-indigo-800 dark:text-indigo-300',
    icon: Briefcase,
    sources: 'CNN Brasil, Exame (LinkedIn), G1, Forbes Brasil, CNI',
    briefSummary: 'Mais de 50% dos trabalhadores brasileiros querem mudar de emprego em 2026, mais de 40% pretendem mudar de carreira e fatores de retenção não estritamente financeiros ganham protagonismo.',
    keyMetric: '>50% Troca de Emprego | >40% Mudança de Carreira',
    macroImpact: 'Elevação da rotatividade de mercado, busca por equilíbrio pessoal e exigência de fatores qualitativos de retenção além da remuneração básica.',
    lorenzettiHypothesis: 'Pode intensificar a necessidade de acompanhamento do clima interno, planos de progressão técnica clara e fortalecimento de fatores de permanência fabril.'
  },
  {
    id: 'empreendedorismo',
    order: '03',
    title: 'Empreendedorismo',
    navTarget: 'Empreendedorismo',
    badge: 'Dinamismo, Rede de MEIs & Canal Prescritor',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700/60',
    badgeText: 'text-amber-800 dark:text-amber-300',
    icon: Rocket,
    sources: 'Sebrae, Exame Bússola, O Globo, Serasa, FGV IBRE, Anamaco',
    briefSummary: 'Brasil possui a 2ª maior população potencial empreendedora do mundo, com abertura de 13 mil empresas/dia, alta de 14% em 2026, jovens abrindo empresas e debate de expansão do teto do MEI.',
    keyMetric: '2ª Maior do Mundo | 13 mil empresas/dia | +14% em 2026',
    macroImpact: 'Consolidação de autônomos e MEIs como prescritores técnicos de marcas e concorrência direta da opção empreendedora com vagas fabris de entrada.',
    lorenzettiHypothesis: 'Pode demandar a intensificação de programas de capacitação técnica direta para instaladores e fortalecimento da atratividade das carreiras industriais.'
  },
  {
    id: 'escala_6x1',
    order: '04',
    title: 'Escala 6x1',
    navTarget: 'Escala 6x1',
    badge: 'Jornada de Trabalho & Produtividade Fabril',
    badgeBg: 'bg-rose-100 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700/60',
    badgeText: 'text-rose-800 dark:text-rose-300',
    icon: Calendar,
    sources: 'Congresso Nacional, CNI, DIEESE, OIT, 4 Day Week',
    briefSummary: 'Acompanhamento do debate legislativo em torno da PEC da escala 6x1, propostas de redução da jornada de trabalho semanal, gestão de turnos industriais ininterruptos e custos operacionais.',
    keyMetric: 'Debate PEC 6x1 | Gestão de Turnos 24/7',
    macroImpact: 'Reavaliação dos modelos de revezamento de turnos e necessidade de elevar a produtividade por hora trabalhada via automação fabril.',
    lorenzettiHypothesis: 'Pode motivar a simulação antecipada de arranjos de turnos de injeção e montagem, acelerando a automação fabril para manter a cadência de produção.'
  }
];

export function CarreiraGeracoesView({ setActivePage }: CarreiraGeracoesViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* CABEÇALHO DO INDEXADOR */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Tópico Estratégico
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Portal de Inteligência Estratégica 2027–2037</span>
            </div>
            
            <h1 className="text-[28px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-3 leading-tight flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0" />
              Carreira e Gerações
            </h1>
            
            <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Indexador executivo consolidado com os <strong>4 subtópicos essenciais</strong> sobre a força de trabalho multigeracional, dinâmicas de transição de carreira, empreendedorismo e a rede de instaladores autônomos, e os desdobramentos legislativos e operacionais da escala 6x1 para o Planejamento Estratégico da Lorenzetti.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-750/70 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider block mb-1">
                Subtópicos Monitorados
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-blue-600 dark:text-blue-400">04</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Eixos Estratégicos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* METRICAS CONSOLIDADAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/40 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block mb-1">
              Transição Demográfica
            </span>
            <h3 className="text-xl font-black text-blue-600 dark:text-blue-400 mb-1">Força Multigeracional</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Convivência simultânea de 4 gerações ativas demandando ergonomia, mentoria e flexibilidade de carreira.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900">
            <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              Canal Prescritor
            </span>
            <h3 className="text-xl font-black text-emerald-600 dark:text-emerald-400 mb-1">+15 Milhões de MEIs</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Eletricistas e encanadores autônomos orientando mais de dois terços das compras de materiais de construção.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-950/40 rounded-xl flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-900">
            <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider block mb-1">
              Jornada & Produtividade
            </span>
            <h3 className="text-xl font-black text-purple-600 dark:text-purple-400 mb-1">Debate Escala 6x1</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Acompanhamento das propostas de redução da jornada semanal e impactos operacionais em turnos industriais.
            </p>
          </div>
        </div>
      </div>

      {/* GRID DE SUBTÓPICOS INDEXADOS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Eixos Temáticos de Carreira e Gerações
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Clique no card para abrir o subtópico correspondente
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARREIRA_SUBTOPICS.map((sub) => {
            const SubIcon = sub.icon;
            return (
              <div 
                key={sub.id}
                onClick={() => setActivePage?.(sub.navTarget)}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-xs hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-black text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {sub.order}
                    </span>
                    <span className={`px-2 py-0.5 text-[11px] font-bold rounded-md border ${sub.badgeBg} ${sub.badgeText}`}>
                      {sub.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600 dark:text-blue-400">
                      <SubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {sub.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {sub.briefSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-750/80 space-y-3">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    <strong className="text-slate-700 dark:text-slate-300 block mb-0.5">Métrica / Foco:</strong>
                    {sub.keyMetric}
                  </div>

                  <div className="p-2.5 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 text-[11px] text-slate-600 dark:text-slate-400">
                    <strong className="text-red-700 dark:text-red-400 block mb-0.5 flex items-center gap-1">
                      <Target className="w-3 h-3 text-red-500" />
                      Hipótese Lorenzetti:
                    </strong>
                    {sub.lorenzettiHypothesis}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 pt-1 group-hover:translate-x-1 transition-transform">
                    <span>Acessar Subtópico</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export const PerfilGeracoesView = CarreiraGeracoesView;
export default CarreiraGeracoesView;
