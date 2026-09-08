export const JUROS_EVIDENCES = [
  {
    id: 1,
    tag: 'Decisão do Copom',
    dateStr: 'Agosto 2026',
    title: 'Copom reduz a Selic para 14% ao ano',
    headline: 'O Copom reduziu a Selic de 14,25% para 14%, no quarto corte consecutivo de 0,25 p.p. O Banco Central destacou desaceleração gradual da atividade e da inflação, mas ainda vê inflação acima do limite superior da meta e um mercado de trabalho aquecido.',
    source: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/em-nova-reducao-copom-baixa-taxa-selic-para-14-ao-ano'
  },
  {
    id: 2,
    tag: 'Projeção / Focus',
    dateStr: 'Agosto 2026',
    title: 'Mercado mantém Selic em 13,75% para 2026 e 12% para 2027',
    headline: 'O Focus mantém a expectativa de Selic em 13,75% no fim de 2026 e projeta 12% para 2027, depois de o mercado já ter incorporado os quatro cortes realizados em 2026. Para 2028 e 2029, as projeções são de 10,5% e 10%.',
    source: 'UOL Economia / Relatório Focus',
    url: 'https://economia.uol.com.br/noticias/redacao/2026/08/17/relatorio-focus---17-de-agosto-de-2026.ghtm'
  },
  {
    id: 3,
    tag: 'Crédito Corporativo',
    dateStr: 'Agosto 2026',
    title: 'Para sobreviver aos juros altos, empresas fatiam dívidas',
    headline: 'Mesmo com a Selic já em 14%, o crédito continua caro: no primeiro semestre de 2026, o volume emitido em debêntures caiu 12,1%, enquanto o número de operações aumentou. Empresas passaram a realizar captações menores e mais frequentes para reduzir o custo financeiro.',
    source: 'UOL Economia',
    url: 'https://economia.uol.com.br/noticias/redacao/2026/08/20/para-sobreviver-aos-juros-altos-empresas-fatiam-dividas.ghtm'
  },
  {
    id: 4,
    tag: 'Investimentos',
    dateStr: 'Agosto 2026',
    title: 'Redução da taxa de juros ainda é insuficiente, avaliam entidades',
    headline: 'Após o corte para 14%, entidades empresariais avaliaram que a redução ainda é insuficiente para destravar plenamente investimentos. A Firjan destacou que a continuidade dos cortes é positiva, mas que o nível da Selic ainda mantém o crédito caro e posterga investimentos.',
    source: 'Agência Brasil / Firjan',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/reducao-da-taxa-de-juros-ainda-e-insuficiente-avaliam-entidades'
  }
];

export interface SelicPoint {
  name: string;
  historico: number | null;
  projecao: number | null;
  tag?: 'atual' | 'focus';
  focusLabel?: string;
}

export const SELIC_DATA: SelicPoint[] = [
  { name: 'Jan/24', historico: 11.25, projecao: null },
  { name: 'Mar/24', historico: 10.75, projecao: null },
  { name: 'Mai/24', historico: 10.50, projecao: null },
  { name: 'Jun/24', historico: 10.50, projecao: null },
  { name: 'Jul/24', historico: 10.50, projecao: null },
  { name: 'Set/24', historico: 10.75, projecao: null },
  { name: 'Nov/24', historico: 11.25, projecao: null },
  { name: 'Dez/24', historico: 12.25, projecao: null },
  { name: 'Jan/25', historico: 13.25, projecao: null },
  { name: 'Mar/25', historico: 14.25, projecao: null },
  { name: 'Mai/25', historico: 14.75, projecao: null },
  { name: 'Jun/25', historico: 15.00, projecao: null },
  { name: 'Jul/25', historico: 15.00, projecao: null },
  { name: 'Set/25', historico: 15.00, projecao: null },
  { name: 'Nov/25', historico: 15.00, projecao: null },
  { name: 'Dez/25', historico: 15.00, projecao: null },
  { name: 'Jan/26', historico: 15.00, projecao: null },
  { name: 'Mar/26', historico: 14.75, projecao: null },
  { name: 'Abr/26', historico: 14.50, projecao: null },
  { name: 'Jun/26', historico: 14.25, projecao: null },
  { name: 'Ago/26', historico: 14.00, projecao: 14.00, tag: 'atual' },
  { name: 'Dez/26', historico: null, projecao: 13.75, tag: 'focus', focusLabel: 'Focus 2026' },
  { name: 'Dez/27', historico: null, projecao: 12.00, tag: 'focus', focusLabel: 'Focus 2027' }
];
