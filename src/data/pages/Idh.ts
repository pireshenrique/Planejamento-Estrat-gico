import { StrategicPageContext } from './types';

export const IDH_PAGE: StrategicPageContext = {
  pageId: 'eco-idh',
  portalRouteId: "eco-idh",
  pageTitle: 'Índice de Desenvolvimento Humano (IDH)',
  theme: 'Economia Brasileira',
  subtheme: 'IDH',
  status: 'analyzable',
  description: 'Acompanhamento estruturado dos indicadores globais de desenvolvimento humano (PNUD/ONU), longevidade, escolaridade, renda e desigualdade.',

  sources: [
    {
      id: 'pnud-rdh-2025',
      name: 'PNUD — Relatório do Desenvolvimento Humano 2025 (ano-base 2023)',
      dateStr: '2025',
      type: 'Relatório de Organismo Internacional (ONU)'
    }
  ],

  evidenceIds: ['ev-idh-pnud-2025'],

  factualContent: [
    {
      id: 'idh::kpi::brasil-2023',
      statement: 'O Brasil registrou IDH de 0,786 em 2023, ocupando a 84ª posição entre 193 países e territórios avaliados pela ONU.',
      kind: 'kpi',
      value: 0.786,
      period: '2023',
      block: 'Indicadores Globais',
      sourceId: 'pnud-rdh-2025',
      evidenceId: 'ev-idh-pnud-2025'
    },
    {
      id: 'idh::kpi::desigualdade-idhd',
      statement: 'O IDH do Brasil ajustado à desigualdade (IDHD) é de 0,594, o que representa uma perda de 24,4% em relação ao IDH original devido à disparidade na distribuição de renda, saúde e educação.',
      kind: 'kpi',
      value: 0.594,
      unit: 'índice',
      period: '2023',
      block: 'Indicadores Globais',
      sourceId: 'pnud-rdh-2025',
      evidenceId: 'ev-idh-pnud-2025'
    },
    {
      id: 'idh::kpi::distancia-limiar-muito-alto',
      statement: 'A distância calculada do Brasil para o limiar de 0,800 (que define desenvolvimento humano muito alto) é de 0,014 ponto.',
      kind: 'kpi',
      value: 0.014,
      unit: 'ponto',
      period: '2023',
      block: 'Indicadores Globais',
      sourceId: 'pnud-rdh-2025',
      evidenceId: 'ev-idh-pnud-2025'
    },
    {
      id: 'idh::dimensao::esperanca-vida',
      statement: 'A esperança de vida ao nascer no Brasil alcançou 75,8 anos conforme a base oficial do PNUD.',
      kind: 'indicator',
      value: 75.8,
      unit: 'anos',
      period: '2023',
      block: 'Dimensões do IDH',
      sourceId: 'pnud-rdh-2025',
      evidenceId: 'ev-idh-pnud-2025'
    },
    {
      id: 'idh::dimensao::escolaridade-esperada',
      statement: 'A escolaridade esperada no Brasil é de 15,8 anos.',
      kind: 'indicator',
      value: 15.8,
      unit: 'anos',
      period: '2023',
      block: 'Dimensões do IDH',
      sourceId: 'pnud-rdh-2025',
      evidenceId: 'ev-idh-pnud-2025'
    },
    {
      id: 'idh::dimensao::escolaridade-media',
      statement: 'A escolaridade média dos adultos no Brasil situa-se em 8,4 anos de estudo.',
      kind: 'indicator',
      value: 8.4,
      unit: 'anos',
      period: '2023',
      block: 'Dimensões do IDH',
      sourceId: 'pnud-rdh-2025',
      evidenceId: 'ev-idh-pnud-2025'
    },
    {
      id: 'idh::dimensao::rnb-per-capita',
      statement: 'A Renda Nacional Bruta (RNB) per capita do Brasil atingiu US$ 18.011 em Paridade do Poder de Compra (PPC de 2021).',
      kind: 'indicator',
      value: 18011,
      unit: 'US$ PPC',
      period: '2023',
      block: 'Dimensões do IDH',
      sourceId: 'pnud-rdh-2025',
      evidenceId: 'ev-idh-pnud-2025'
    },
    {
      id: 'idh::comparativo::america-latina',
      statement: 'No recorte regional de pares da América Latina, o Brasil (0,786 - 84º) posiciona-se próximo de Colômbia (0,788 - 83º), México (0,789 - 82º) e Peru (0,794 - 81º).',
      kind: 'ranking',
      period: '2023',
      block: 'Comparações Regionais',
      sourceId: 'pnud-rdh-2025',
      evidenceId: 'ev-idh-pnud-2025'
    },
    {
      id: 'idh::serie::historica-evolucao',
      statement: 'A série histórica do IDH brasileiro evoluiu de 0,641 (1990) para 0,690 (2000), 0,748 (2010), 0,764 (2015), 0,770 (2020), 0,768 (2021), 0,780 (2022) e 0,786 (2023).',
      kind: 'series',
      value: 0.786,
      period: '1990-2023',
      block: 'Série Histórica',
      sourceId: 'pnud-rdh-2025',
      evidenceId: 'ev-idh-pnud-2025'
    }
  ],

  existingAnalysis: [
    'O Brasil avança gradualmente em direção ao limiar de desenvolvimento muito elevado (0,800), impulsionado pela recuperação dos indicadores de longevidade pós-pandemia e aumento da RNB per capita.',
    'A perda de 24,4% por desigualdade evidencia que a concentração de renda e disparidades educacionais regionais continuam sendo o principal gargalo estrutural para a elevação generalizada do bem-estar.',
    'A baixa escolaridade média adulta (8,4 anos) aponta para desafios de qualificação profissional, produtividade do trabalho e absorção de inovações tecnológicas no mercado.',
    'Impacto Lorenzetti: a evolução do poder de compra e o aumento dos padrões de moradia nas famílias que ascendem socialmente podem ampliar a busca por produtos domésticos de maior eficiência, durabilidade e conforto no banheiro e na cozinha.'
  ]
};
