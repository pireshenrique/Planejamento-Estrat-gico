import type { MacroeconomicKpi, ThreeItems, HighlightedNote, StrategicObserveBlock } from './types';

export interface InflacaoStrategicAnalysis {
  observe: StrategicObserveBlock;
  companyImpact: {
    summary: string;
    notes: ThreeItems<HighlightedNote>;
  };
}

export interface InflacaoData {
  kpis: {
    focus: MacroeconomicKpi;
    ipca12Meses: MacroeconomicKpi;
    ipca2025: MacroeconomicKpi;
  };
  strategicAnalysis: InflacaoStrategicAnalysis;
}

export const INFLACAO_DATA: InflacaoData = {
  kpis: {
    focus: {
      title: 'EXPECTATIVA FOCUS',
      value: '5,02%',
      context: 'Projeção para 2026 • 4,24% em 2027',
      explanation: 'Expectativa de mercado para o IPCA.',
      source: 'Banco Central — Relatório Focus',
    },
    ipca12Meses: {
      title: 'IPCA 12 MESES',
      value: '4,44%',
      context: 'Acumulado até jul/26 • 3,44% no ano',
      explanation: 'Índice Nacional de Preços ao Consumidor Amplo.',
      source: 'IBGE',
    },
    ipca2025: {
      title: 'IPCA 2025',
      value: '4,26%',
      context: 'Fechamento do ano de 2025',
      explanation: 'Inflação oficial acumulada em 2025.',
      source: 'IBGE',
    },
  },
  strategicAnalysis: {
    observe: {
      summary: 'Expectativas ainda acima da meta, riscos inflacionários persistentes e pressão diferenciada sobre custos produtivos e construção.',
      notes: [
        'O mercado mantém as expectativas de inflação acima da meta, com projeções de 5,30% para 2026 e 4,10% para 2027.',
        'O Banco Central aponta riscos de desancoragem das expectativas, maior persistência da inflação de serviços e possíveis pressões de petróleo, câmbio, clima e demanda agregada.',
        'A inflação dos custos de construção permanece mais pressionada: o INCC-M acumula 6,40% em 12 meses, com mão de obra em 7,06% e materiais e serviços em 5,93%.',
      ],
    },
    companyImpact: {
      summary: 'Pressão sobre poder de compra, custos industriais e construção, com efeitos potenciais sobre demanda e margens.',
      notes: [
        {
          before: 'A persistência da inflação e das expectativas acima da meta ',
          highlight: 'pode pressionar',
          after: ' o orçamento das famílias e aumentar a sensibilidade do consumidor a preço, crédito e financiamento.',
        },
        {
          before: 'A evolução dos custos industriais, energia e insumos ',
          highlight: 'deve ser acompanhada',
          after: ' pelo potencial de pressionar custos de produção e margens ao longo da cadeia de suprimentos.',
        },
        {
          before: 'O INCC-M em patamar elevado ',
          highlight: 'pode aumentar',
          after: ' custos de obras e instalações, afetando a dinâmica da construção e potencialmente a demanda por materiais e equipamentos ligados às novas obras.',
        },
      ],
    },
  },
};
