import { MacroeconomicKpi } from './types';

export interface SectorEmploymentContribution {
  name: string;
  value: string;
  percentageText?: string;
  /**
   * Largura deliberada para representação visual da barra na interface.
   * Não representa proporcionalidade matemática direta.
   */
  visualBarWidthPercent: number;
  dotColor: string;
  textColor: string;
  barColor: string;
}

export interface CommerceHighlight {
  name: string;
  label: string;
  badgeText: string;
}

export interface SectorExecutiveInsight {
  metric: string;
  metricSubtext: string;
  metricColor: string;
  borderHover: string;
  title: string;
  description: string;
}

export interface EmpregosData {
  kpis: {
    fechamento2025: MacroeconomicKpi;
    primeiroSemestre2026: MacroeconomicKpi;
    expectativaQ3: MacroeconomicKpi;
  };
  sectorHighlights: {
    title: string;
    subtitle: string;
    sourceBadge: string;
    sectors: SectorEmploymentContribution[];
    comercio: CommerceHighlight;
    totalAdded: string;
    periodBase: string;
    insights: SectorExecutiveInsight[];
    structuralPattern: string;
    paceH1: string;
  };
}

export const EMPREGOS_DATA: EmpregosData = {
  kpis: {
    fechamento2025: {
      title: '2025 FECHADO',
      value: '+1,28 milhão',
      context: '1.279.498 novos postos formais',
      explanation: 'Saldo líquido de empregos com carteira assinada gerados no ano.',
      source: 'MTE — Novo Caged',
    },
    primeiroSemestre2026: {
      title: '1º SEMESTRE 2026',
      value: '+2,46 milhões',
      context: '+4,1% • Estoque: 62,89 milhões',
      explanation: 'Crescimento de vínculos formais no primeiro semestre.',
      source: 'MTE — RAIS Mensal',
    },
    expectativaQ3: {
      title: 'EXPECTATIVA Q3 2026',
      value: '52%',
      context: 'Expectativa Líquida: 37%',
      explanation: 'Empregadores que pretendem aumentar equipes no 3º tri.',
      source: 'ManpowerGroup',
    },
  },
  sectorHighlights: {
    title: 'Motores da geração de empregos',
    subtitle: 'Setores que mais contribuíram para o crescimento dos empregos formais entre 2023 e junho de 2026.',
    sourceBadge: 'Fonte: Exame / MTE (2023 - 2026)',
    sectors: [
      {
        name: 'Serviços',
        value: '+8,45 milhões',
        percentageText: '(≈84% do total)',
        visualBarWidthPercent: 100,
        dotColor: 'bg-blue-600',
        textColor: 'text-blue-600 dark:text-blue-400',
        barColor: 'bg-blue-600 dark:bg-blue-500',
      },
      {
        name: 'Indústria',
        value: '+832 mil',
        visualBarWidthPercent: 26,
        dotColor: 'bg-amber-500',
        textColor: 'text-amber-600 dark:text-amber-400',
        barColor: 'bg-amber-500 dark:bg-amber-500',
      },
      {
        name: 'Construção Civil',
        value: '+360 mil',
        visualBarWidthPercent: 16,
        dotColor: 'bg-emerald-500',
        textColor: 'text-emerald-600 dark:text-emerald-400',
        barColor: 'bg-emerald-500 dark:bg-emerald-500',
      },
      {
        name: 'Agropecuária',
        value: '+88 mil',
        visualBarWidthPercent: 9,
        dotColor: 'bg-slate-400',
        textColor: 'text-slate-600 dark:text-slate-300',
        barColor: 'bg-slate-400 dark:bg-slate-500',
      },
    ],
    comercio: {
      name: 'Comércio',
      label: '(Variação percentual)',
      badgeText: '+3,3% no período',
    },
    totalAdded: '+10,1 milhões',
    periodBase: '2023 – Jun/2026',
    insights: [
      {
        metric: '≈84%',
        metricSubtext: 'do total',
        metricColor: 'text-blue-600 dark:text-blue-400',
        borderHover: 'hover:border-blue-200 dark:hover:border-blue-900/50',
        title: 'DA EXPANSÃO VEIO DE SERVIÇOS',
        description: 'Cerca de 84% dos 10,1 milhões de empregos adicionados no período foram gerados no setor de Serviços.',
      },
      {
        metric: '+1,19 mi',
        metricSubtext: 'combinados',
        metricColor: 'text-amber-600 dark:text-amber-400',
        borderHover: 'hover:border-amber-200 dark:hover:border-amber-900/50',
        title: 'INDÚSTRIA + CONSTRUÇÃO CIVIL',
        description: 'Empregos adicionados pelos dois setores no período, reforçando sua contribuição à atividade produtiva e construtiva.',
      },
      {
        metric: '62,89 mi',
        metricSubtext: 'em jun/2026',
        metricColor: 'text-slate-900 dark:text-white',
        borderHover: 'hover:border-slate-300 dark:hover:border-slate-700',
        title: 'TOTAL DE EMPREGOS FORMAIS EM JUNHO/2026',
        description: 'O país chegou a 62,89 milhões de empregos formais em junho de 2026, com aumento de 2,46 milhões no primeiro semestre (+4,1%).',
      },
    ],
    structuralPattern: 'Alta concentração setorial',
    paceH1: '+4,1%',
  },
};
