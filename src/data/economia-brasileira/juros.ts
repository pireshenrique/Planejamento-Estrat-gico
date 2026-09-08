import type { MacroeconomicKpi, ThreeItems, StrategicObserveBlock } from './types';

export interface JurosStrategicAnalysis {
  observe: StrategicObserveBlock;
  companyImpact: {
    summary: string;
    notes: ThreeItems<string>;
  };
}

export interface JurosData {
  kpis: {
    focus: MacroeconomicKpi;
    atual: MacroeconomicKpi;
    passado: MacroeconomicKpi;
  };
  strategicAnalysis: JurosStrategicAnalysis;
}

export const JUROS_DATA: JurosData = {
  kpis: {
    focus: {
      title: 'EXPECTATIVA FOCUS',
      value: '13,75%',
      context: 'Projeção para 2026 • 12,00% em 2027',
      explanation: 'Expectativa de mercado para a taxa Selic.',
      source: 'Banco Central — Relatório Focus',
    },
    atual: {
      title: 'SELIC ATUAL',
      value: '14,00%',
      context: 'Copom ago/26 • Quarto corte consecutivo',
      explanation: 'Taxa básica de juros da economia brasileira.',
      source: 'Banco Central — Copom',
    },
    passado: {
      title: 'SELIC 2025',
      value: '15,00%',
      context: 'Fechamento do ano de 2025',
      explanation: 'Taxa de juros no fim de 2025.',
      source: 'Banco Central',
    },
  },
  strategicAnalysis: {
    observe: {
      summary: 'Evolução da inflação, continuidade dos cortes e condições de crédito para empresas e consumidores.',
      notes: [
        'O Banco Central observa desaceleração da inflação e moderação da atividade, mas mantém atenção à inflação ainda elevada, às expectativas desancoradas e ao mercado de trabalho aquecido.',
        'O Boletim Focus projeta Selic de 13,75% no fim de 2026 e 12% para 2027, sinalizando continuidade de cortes, porém de forma gradual.',
        'Empresas estão adotando captações menores e mais frequentes para se adaptar ao custo elevado do crédito e às condições do mercado financeiro.',
      ],
    },
    companyImpact: {
      summary: 'Juros ainda restritivos podem afetar investimentos, crédito e decisões de capital ao longo de 2026–2027.',
      notes: [
        'A Selic ainda elevada pode manter o crédito restritivo e postergar decisões de investimento, especialmente em projetos com maior dependência de financiamento.',
        'O crédito corporativo elevado pode incentivar estruturas de captação menores e mais frequentes, aumentando a importância da gestão do custo e do prazo das dívidas.',
        'A combinação entre juros ainda elevados, inflação e desaceleração gradual da atividade deve ser monitorada nas decisões de investimento, estoques e capital de giro.',
      ],
    },
  },
};
