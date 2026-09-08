import React, { useState } from 'react';
import { 
  Building2, 
  Building, 
  Truck, 
  Droplets, 
  Wifi, 
  Zap, 
  Shield, 
  GraduationCap, 
  HeartPulse, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface NovoPacViewProps {
  setActivePage: (page: string) => void;
}

export const NovoPacView: React.FC<NovoPacViewProps> = ({ setActivePage }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const subPages = [
    {
      id: 'Infraestrutura social inclusiva',
      title: 'Infraestrutura Social Inclusiva',
      category: 'Social & Comunitário',
      icon: Building2,
      headline: 'O governo federal projeta R$ 4,0 bilhões até 2026 para implantação de Centros Comunitários pela Vida (Convive), CEUs da Cultura e espaços esportivos, já contabilizando 50 obras concluídas e retomadas em 686 municípios atendidos.',
      iconColor: 'text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800',
      metrics: [
        { label: 'Investimento Total', value: 'R$ 4,0 bi', detail: 'Recursos previstos' },
        { label: 'Alcance', value: '686 mun.', detail: 'Cidades atendidas' },
        { label: 'Entregas 2025', value: '50 obras', detail: 'Concluídas/retomadas' },
      ],
    },
    {
      id: 'Cidades Sustentáveis e Resilientes',
      title: 'Cidades Sustentáveis e Resilientes',
      category: 'Desenvolvimento Urbano',
      icon: Building,
      headline: 'Destinação de R$ 3,5 bilhões para obras estruturais de contenção de encostas críticas e macrodrenagem urbana, abrangendo 861 propostas selecionadas para mitigação de riscos geológicos e inundações em 686 cidades brasileiras.',
      iconColor: 'text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800',
      metrics: [
        { label: 'Resiliência', value: 'R$ 3,5 bi', detail: 'Prevenção de riscos' },
        { label: 'Áreas Críticas', value: '686 mun.', detail: 'Zonas mapeadas' },
        { label: 'Projetos', value: '861 aprovados', detail: 'Obras selecionadas' },
      ],
    },
    {
      id: 'Transporte Eficiente e Sustentável',
      title: 'Transporte Eficiente e Sustentável',
      category: 'Logística & Mobilidade',
      icon: Truck,
      headline: 'Carteira mobiliza R$ 369,4 bilhões para ampliação e duplicação da malha rodoviária federal, corredores ferroviários de carga e 33 propostas de mobilidade de média e alta capacidade em 28 grandes centros urbanos.',
      iconColor: 'text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
      metrics: [
        { label: 'Total do Eixo', value: 'R$ 369,4 bi', detail: 'Investimento total' },
        { label: 'Mobilidade Urbana', value: 'R$ 6,5 bi', detail: '33 propostas / 28 mun.' },
        { label: 'Execução PPA', value: '23,1%', detail: 'Atingimento 2025' },
      ],
    },
    {
      id: 'Água para Todos',
      title: 'Água para Todos',
      category: 'Segurança Hídrica & Saneamento',
      icon: Droplets,
      headline: 'Investimento total de R$ 30,2 bilhões com foco em 371 empreendimentos de abastecimento de água, implantação de grandes canais e adutoras regionais, estações de tratamento de esgoto e cisternas no semiárido brasileiro.',
      iconColor: 'text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950 border-cyan-200 dark:border-cyan-800',
      metrics: [
        { label: 'Investimento', value: 'R$ 30,2 bi', detail: 'Recursos totais' },
        { label: 'Abastecimento', value: 'R$ 12,5 bi', detail: '371 empreendimentos' },
        { label: 'Pós-2026', value: 'R$ 4,8 bi', detail: 'Carteira de longo prazo' },
      ],
    },
    {
      id: 'Inclusão Digital e Conectividade',
      title: 'Inclusão Digital e Conectividade',
      category: 'Telecom & Conectividade',
      icon: Wifi,
      headline: 'Alocação de R$ 23,6 bilhões para garantir banda larga de alta velocidade em 138 mil escolas públicas, expansão das redes móveis 4G/5G em rodovias e 13,2 mil km de infovias subfluviais com fibra óptica na Amazônia.',
      iconColor: 'text-teal-600 dark:text-teal-300 bg-teal-50 dark:bg-teal-950 border-teal-200 dark:border-teal-800',
      metrics: [
        { label: 'Total do Eixo', value: 'R$ 23,6 bi', detail: 'Conectividade e TI' },
        { label: 'Redes 4G/5G', value: 'R$ 14,2 bi', detail: 'Expansão de cobertura' },
        { label: 'Infovias Amazônia', value: '13,2 mil km', detail: '9 rotas subfluviais' },
      ],
    },
    {
      id: 'Transição e Segurança Energética',
      title: 'Transição e Segurança Energética',
      category: 'Matriz Limpa & Transmissão',
      icon: Zap,
      headline: 'Maior carteira do programa com R$ 596,2 bilhões, contemplando 343 usinas de energia solar e eólica, R$ 156,8 bilhões em leilões de linhas de transmissão elétrica de grande porte e estruturação da cadeia de hidrogênio verde.',
      iconColor: 'text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
      metrics: [
        { label: 'Total do Eixo', value: 'R$ 596,2 bi', detail: 'Energia e Transição' },
        { label: 'Renováveis', value: 'R$ 75,6 bi', detail: '343 usinas eólicas/solares' },
        { label: 'Pós-2026', value: 'R$ 156,8 bi', detail: 'Leilões de transmissão' },
      ],
    },
    {
      id: 'Inovação para a Indústria da Defesa',
      title: 'Inovação para a Indústria da Defesa',
      category: 'Tecnologia Estratégica & BID',
      icon: Shield,
      headline: 'Aporte de R$ 52,8 bilhões distribuídos em 16 projetos estratégicos das Forças Armadas, envolvendo submarinos, blindados e caças, mobilizando mais de 1.000 empresas da cadeia nacional e impulsionando as exportações militares em 74%.',
      iconColor: 'text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800',
      metrics: [
        { label: 'Total do Eixo', value: 'R$ 52,8 bi', detail: '16 projetos de Defesa' },
        { label: 'Conteúdo Local', value: '+R$ 4,8 bi', detail: '1.000 empresas na cadeia' },
        { label: 'Exportações BID', value: 'US$ 3,1 bi', detail: 'Autorizações (+74%)' },
      ],
    },
    {
      id: 'Educação, Ciência e Tecnologia',
      title: 'Educação, Ciência e Tecnologia',
      category: 'Capital Humano & Pesquisa',
      icon: GraduationCap,
      headline: 'Recursos de R$ 1,6 bilhão destinados à construção de 100 novos campi de Institutos Federais (IFs), R$ 785 milhões para infraestrutura escolar indígena e ampliação do sistema de monitoramento de desastres do Cemaden em 1.295 municípios.',
      iconColor: 'text-sky-600 dark:text-sky-300 bg-sky-50 dark:bg-sky-950 border-sky-200 dark:border-sky-800',
      metrics: [
        { label: 'Infraestrutura IFs', value: 'R$ 1,6 bi', detail: '100 novos campi federais' },
        { label: 'Educação Indígena', value: 'R$ 785 mi', detail: '117 escolas / 17 estados' },
        { label: 'Cemaden Alertas', value: '1.295', detail: 'Municípios monitorados' },
      ],
    },
    {
      id: 'Saúde',
      title: 'Saúde',
      category: 'Complexo Econômico da Saúde',
      icon: HeartPulse,
      headline: 'Investimentos de R$ 37,2 bilhões para fortalecimento da rede pública de saúde, incluindo 541 novas Unidades Básicas de Saúde (UBS), 34 maternidades de referência, 30 policlínicas regionais e renovação contínua da frota do SAMU.',
      iconColor: 'text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950 border-rose-200 dark:border-rose-800',
      metrics: [
        { label: 'Total do Eixo', value: 'R$ 37,2 bi', detail: 'Total Novo PAC Saúde' },
        { label: 'Atenção Básica', value: '541 un.', detail: '505 municípios atendidos' },
        { label: 'Rede Materna', value: '34 mat.', detail: 'R$ 4,4 bi previstos' },
      ],
    },
  ];

  return (
    <div className="w-full font-sans text-slate-800 dark:text-slate-100 animate-in fade-in duration-300 pb-12" id="novo-pac-view-root">
      
      {/* CABEÇALHO COMPACTO ESTRATÉGICO */}
      <div className="mb-4 bg-white dark:bg-slate-800 rounded-xl py-2.5 px-4 sm:py-3 sm:px-5 border border-slate-200 dark:border-slate-700 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shrink-0">
            <Sparkles className="w-3 h-3 shrink-0" />
            Eixos Estratégicos
          </span>
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
            NOVO PAC — Programa de Aceleração do Crescimento
          </h2>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">
          Selecione o subtema desejado para acessar o detalhamento executivo.
        </p>
      </div>

      {/* GRID DE CARDS COM VISUAL DE BOTÕES INTERATIVOS (3x3) */}
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

                {/* TEXTO / MANCHETE EXECUTIVA DA PÁGINA COM MAIS CONTEÚDO ESTRATÉGICO */}
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

export default NovoPacView;
