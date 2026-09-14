export interface StrategicPageContext {
  pageId: string;
  pageTitle: string;
  theme: string;
  factualContent: string[];
  existingAnalysis: string[];
}

export function getStrategicPageContext(): StrategicPageContext[] {
  return [
    {
      pageId: 'endividamento-familias',
      pageTitle: 'Endividamento das Famílias',
      theme: 'Economia Brasileira',
      factualContent: [
        'Percentual de Famílias Endividadas atinge 78,5% em julho de 2026 segundo a CNC.',
        'Comprometimento de Renda média chegou a 29,8%, conforme dados do BCB de 2026.',
        'Cartão de Crédito permanece como principal modalidade da dívida, afetando 86,5% dos endividados (CNC).'
      ],
      existingAnalysis: [
        'A combinação de juros reais e inflação prolongada pressiona estruturalmente o orçamento familiar.',
        'Esse cenário força uma alta seletividade no consumo, onde as famílias postergam a compra de bens duráveis não essenciais e buscam custo-benefício estrito.'
      ]
    },
    {
      pageId: 'lares-unipessoais',
      pageTitle: 'Lares Unipessoais',
      theme: 'Cenário Habitacional',
      factualContent: [
        'O número de domicílios com apenas um morador passou de 7,5 milhões (2012) para mais de 15 milhões em 2025 (IBGE).',
        'Lares unipessoais representam agora cerca de 19,5% (1 em cada 5) dos domicílios brasileiros.',
        'Imóveis de até 40 m² (studios e compactos) representam 41,1% das intenções de novos lançamentos (CBIC).'
      ],
      existingAnalysis: [
        'O adensamento urbano e a proliferação de lares compactos demandam produtos adaptados.',
        'As indústrias precisam fornecer soluções ergonômicas, de fácil instalação (plug-and-play) e que maximizem a economia de espaço e recursos em metragens reduzidas.'
      ]
    },
    {
      pageId: 'cenario-logistico',
      pageTitle: 'Cenário Logístico',
      theme: 'Commodities e Logística',
      factualContent: [
        'Pressão contínua nas cadeias de suprimentos globais em 2026, com aumento nas tarifas de frete marítimo.',
        'Custos de termoplásticos de engenharia, cobre e outros metais essenciais permanecem voláteis.'
      ],
      existingAnalysis: [
        'A volatilidade de insumos força as empresas a absorver custos ou repassar gradualmente para consumidores já sensíveis a preço.',
        'A necessidade de estoques de segurança e nacionalização de peças de reposição se torna imperativa para mitigar riscos de ruptura logística.'
      ]
    }
  ];
}
