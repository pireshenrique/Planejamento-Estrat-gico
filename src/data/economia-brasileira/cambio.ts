import type { MacroeconomicKpi, ThreeItems, HighlightedNote, StrategicObserveBlock } from './types';

export interface CambioStrategicAnalysis {
  observe: StrategicObserveBlock;
  companyImpact: {
    summary: string;
    notes: ThreeItems<HighlightedNote>;
  };
}

export interface CambioData {
  kpis: {
    passado: MacroeconomicKpi;
    atual: MacroeconomicKpi;
    focus: MacroeconomicKpi;
  };
  strategicAnalysis: CambioStrategicAnalysis;
}

export const CAMBIO_DATA: CambioData = {
  kpis: {
    passado: {
      title: 'DÓLAR EM 2025',
      value: 'R$ 5,49',
      context: '−11,18% no ano',
      explanation: 'Fechamento do último pregão de 2025.',
      source: 'Banco Central',
    },
    atual: {
      title: 'DÓLAR ATUAL',
      value: 'R$ 5,19',
      context: 'Cotação em 20 de agosto de 2026',
      explanation: '−0,87% no pregão anterior.',
      source: 'Banco Central',
    },
    focus: {
      title: 'EXPECTATIVA FOCUS',
      value: 'R$ 5,20',
      context: 'Projeção dez/26 • R$ 5,29 em 2027',
      explanation: 'Expectativa de mercado para o câmbio.',
      source: 'Banco Central — Relatório Focus',
    },
  },
  strategicAnalysis: {
    observe: {
      summary: 'Petróleo, tensões geopolíticas, juros nos EUA (Fed), fluxo estrangeiro e incertezas domésticas.',
      notes: [
        'Acompanhar a cotação do dólar em torno de R$ 5,19 e a avaliação de estrategistas de mercado sobre o risco de depreciação adicional do real no curto prazo decorrente de petróleo, tensões EUA–Irã, juros nos EUA e incerteza doméstica (UOL).',
        'Monitorar as expectativas do Boletim Focus, que mantiveram a projeção em R$ 5,20 para o fim de 2026 pela nona semana consecutiva e elevaram para R$ 5,29 em 2027 e R$ 5,30 em 2028 (média do mês de dezembro) (Band / Focus).',
        'Observar a dinâmica do fluxo de capital estrangeiro na Bolsa brasileira, que registrou saída líquida em agosto com o aumento de preocupações fiscais domésticas e o comportamento dos juros nos Estados Unidos (CNN Brasil).',
      ],
    },
    companyImpact: {
      summary: 'Custos de insumos e matérias-primas dolarizadas, planejamento orçamentário e volatilidade de curto prazo.',
      notes: [
        {
          before: 'A estabilidade da projeção do Focus em R$ 5,20 para 2026 e a elevação moderada para R$ 5,29 em 2027 ',
          highlight: 'podem auxiliar',
          after: ' na elaboração de premissas financeiras e orçamentos para insumos cotados em moeda forte.',
        },
        {
          before: 'Possíveis episódios de depreciação adicional do real ou oscilação do petróleo ',
          highlight: 'podem elevar',
          after: ' a pressão sobre custos de componentes importados, matérias-primas e fretes internacionais.',
        },
        {
          before: 'A saída de capital estrangeiro em agosto e as incertezas fiscais e externas ',
          highlight: 'podem demandar acompanhamento',
          after: ' regular da volatilidade cambial para decisões de compra e precificação.',
        },
      ],
    },
  },
};
