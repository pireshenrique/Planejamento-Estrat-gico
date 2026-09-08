import { MacroeconomicKpi } from './types';

export interface RegionalIncomeItem {
  name: string;
  value: number;
  badge?: string;
  kind?: 'highest' | 'national' | 'lowest';
  barColor: string;
  textColor: string;
  badgeColor?: string;
}

export interface RendimentoData {
  kpis: {
    rendimentoMedio: MacroeconomicKpi;
    massaRendimento: MacroeconomicKpi;
    evolucaoReal: MacroeconomicKpi;
  };
  regionalIncome: RegionalIncomeItem[];
}

export const RENDIMENTO_DATA: RendimentoData = {
  kpis: {
    rendimentoMedio: {
      title: 'RENDIMENTO MÉDIO',
      value: 'R$ 3.726',
      context: '+4,0% vs. maio/25',
      explanation: 'Rendimento real habitual do trabalho.',
      source: 'Trimestre móvel encerrado em maio/2026 — IBGE',
    },
    massaRendimento: {
      title: 'MASSA DE RENDIMENTO',
      value: 'R$ 377,7 bi',
      context: '+4,8% vs. maio/25',
      explanation: 'Massa de rendimento real da economia.',
      source: 'Trimestre móvel encerrado em maio/2026 — IBGE',
    },
    evolucaoReal: {
      title: 'EVOLUÇÃO REAL',
      value: '+5,7%',
      context: 'vs. 2024',
      explanation: 'Crescimento real do rendimento no ano.',
      source: 'PNAD Contínua / IBGE',
    },
  },
  regionalIncome: [
    {
      name: 'Distrito Federal',
      value: 6320,
      badge: 'Maior do país',
      kind: 'highest',
      barColor: 'bg-blue-600 dark:bg-blue-500',
      textColor: 'text-blue-600 dark:text-blue-400',
      badgeColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      name: 'São Paulo',
      value: 4190,
      barColor: 'bg-blue-600 dark:bg-blue-500',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      name: 'Rio de Janeiro',
      value: 4177,
      barColor: 'bg-blue-600 dark:bg-blue-500',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      name: 'Brasil',
      value: 3560,
      badge: 'Média Nacional',
      kind: 'national',
      barColor: 'bg-orange-500 dark:bg-orange-400',
      textColor: 'text-orange-600 dark:text-orange-400',
      badgeColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      name: 'Ceará',
      value: 2394,
      barColor: 'bg-indigo-500 dark:bg-indigo-400',
      textColor: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      name: 'Bahia',
      value: 2284,
      barColor: 'bg-indigo-500 dark:bg-indigo-400',
      textColor: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      name: 'Maranhão',
      value: 2228,
      badge: 'Menor do país',
      kind: 'lowest',
      barColor: 'bg-indigo-500 dark:bg-indigo-400',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      badgeColor: 'text-indigo-500 dark:text-indigo-400',
    },
  ],
};

export const REGIONAL_INCOME_DATA = RENDIMENTO_DATA.regionalIncome;
