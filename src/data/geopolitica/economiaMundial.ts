/**
 * REGRAS DE GOVERNANÇA E CONTRATO DE DADOS — ECONOMIA MUNDIAL
 * 
 * 1. Tópicos cadastrados em ECONOMIC_TOPICS seguindo estritamente EconomicTopicData.
 * 2. A View (EconomiaMundialView) é estruturada com o mesmo layout e padrão de Conflitos e Tensões Internacionais.
 * 3. Campos obrigatórios essenciais para a renderização da página:
 *    - id, label, icon, flags, headline, observeSummary, observeNotes, lorenzettiSummary, lorenzettiImpacts, evidences.
 * 4. Padrões fixados para consistência visual do layout:
 *    - observeNotes: exatamente 3 itens (tupla [string, string, string]);
 *    - lorenzettiImpacts: exatamente 3 itens (tupla [string, string, string]);
 *    - flags: lista de países/blocos com code e name para renderização na Pill Bar;
 *    - evidences: notícias com id, title, source, date, dateStr, url, summary.
 */

import { Globe, DollarSign, Building2, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type EconomicTopicId = 'crescimento-global' | 'estados-unidos' | 'zona-do-euro' | 'china-asia';

export interface EconomicFlag {
  code: string;
  name: string;
}

export interface EconomicEvidence {
  id: string;
  title: string;
  date: string;
  dateStr: string;
  source: string;
  url: string;
  summary: string;
  tag: string;
  category?: string;
  evidence?: string;
  brazilImpact?: string;
  lorenzettiImpact?: string;
}

export interface EconomicTopicData {
  id: EconomicTopicId;
  label: string;
  icon: LucideIcon;
  flags: EconomicFlag[];
  headline: string;
  statusSubtitle: string;
  description: string;
  observeSummary: string;
  observeNotes: [string, string, string];
  lorenzettiSummary: string;
  lorenzettiImpacts: [string, string, string];
  evidences: EconomicEvidence[];
  badge?: string;
  badgeColor?: string;
}

export const ECONOMIC_TOPICS: EconomicTopicData[] = [
  {
    id: 'crescimento-global',
    label: 'Crescimento Global',
    badge: 'Projeção Multilateral',
    badgeColor: 'blue',
    icon: Globe,
    flags: [
      { code: 'un', name: 'Global' }
    ],
    headline: 'A economia mundial desacelera para 3,0% em 2026 diante do choque de energia e da maior incerteza internacional, enquanto inflação e comércio perdem ritmo e o desempenho entre regiões permanece bastante desigual.',
    statusSubtitle: 'Desaceleração global, choque de energia, inflação, comércio internacional e diferenças regionais',
    description: 'Acompanhamento do PIB global, choque de preços de energia no Oriente Médio, inflação e ritmo do comércio internacional com base em projeções do FMI.',
    observeSummary: 'O crescimento mundial perde força em 2026 após dois anos de expansão mais elevada, pressionado pelo encarecimento da energia, pela inflação e pela desaceleração do comércio. A economia global, porém, continua crescendo e deve recuperar parte do ritmo em 2027, com diferenças importantes entre economias avançadas, emergentes e regiões mais diretamente afetadas pelo conflito no Oriente Médio.',
    observeNotes: [
      'A economia mundial deve crescer 3,0% em 2026, abaixo dos 3,5% estimados para 2025, antes de acelerar novamente para 3,4% em 2027. A projeção indica uma desaceleração relevante, mas não uma recessão global, já que a atividade continua crescendo mesmo diante do choque de energia, da maior incerteza geopolítica e da fragmentação do comércio internacional.',
      'O conflito no Oriente Médio elevou os preços internacionais de energia em cerca de 25% em relação ao período anterior ao choque, aumentando custos de transporte, produção e consumo em diferentes economias. Esse movimento ajudou a elevar a projeção de inflação global para 4,7% em 2026, 0,3 ponto percentual acima da estimativa anterior, antes de uma redução esperada para 3,9% em 2027.',
      'O comércio mundial também perde força. Depois de crescer 5,0% em 2025, o volume de comércio internacional deve avançar apenas 3,5% em 2026. A desaceleração significa menor expansão dos fluxos de bens e serviços entre países, em um ambiente marcado por tensões comerciais, reorganização de cadeias de suprimentos e maior incerteza sobre tarifas e relações econômicas internacionais.'
    ],
    lorenzettiSummary: 'O encarecimento de cerca de 25% na energia, a desaceleração do comércio mundial para 3,5% e a inflação global de 4,7% podem demandar acompanhamento sobre custos operacionais e cadeias de suprimentos.',
    lorenzettiImpacts: [
      'As economias avançadas devem crescer 1,7% em 2026, abaixo dos 1,9% estimados para 2025, enquanto as economias emergentes e em desenvolvimento devem desacelerar de 4,5% para 3,8%. Mesmo perdendo ritmo, os emergentes continuam crescendo mais rapidamente, mostrando que a desaceleração global não ocorre de forma uniforme entre os diferentes grupos de países.',
      'As diferenças regionais também são expressivas. A Ásia emergente e em desenvolvimento deve crescer 5,0% em 2026, com Índia em 6,4% e China em 4,6%, enquanto a América Latina e o Caribe permanecem em 2,4% e a África Subsaariana em 4,3%. Já Oriente Médio e Ásia Central sofrem uma queda muito mais intensa, de 3,7% em 2025 para apenas 0,7% em 2026, antes de uma recuperação projetada para 6,5% em 2027.',
      'Apesar do choque, a economia mundial mostrou maior capacidade de adaptação do que se temia inicialmente. A liberação de reservas de petróleo, ajustes nas cadeias de suprimentos e a continuidade de investimentos ligados à tecnologia ajudaram a limitar parte do impacto sobre a atividade. A recuperação prevista para 2027, porém, permanece condicionada à evolução dos preços de energia, do conflito no Oriente Médio, das tensões comerciais e das expectativas sobre investimentos em inteligência artificial.'
    ],
    evidences: [
      {
        id: 'ev-cg-cnn-fmi-2026',
        title: 'FMI reduz previsão de crescimento global para 2026 a 3%',
        date: '08/09/2026',
        dateStr: '08/09/2026',
        source: 'CNN Brasil',
        category: 'Macroeconomia',
        tag: 'PIB & Energia',
        summary: 'A economia mundial deve crescer 3,0% em 2026, abaixo da média de 3,5% registrada em 2024 e 2025, antes de se recuperar para 3,4% em 2027. A revisão reflete principalmente os efeitos da guerra no Oriente Médio, que elevou os preços da energia em cerca de 25%, além da fragmentação do comércio internacional e de riscos relacionados às expectativas sobre inteligência artificial. Apesar do choque, a economia global mostrou maior resiliência do que inicialmente se temia, ajudada pela liberação de reservas de petróleo, adaptação das cadeias de suprimentos e forte demanda ligada ao setor de tecnologia. A inflação global também foi revisada para cima e deve chegar a 4,7% em 2026, 0,3 ponto percentual acima da previsão anterior, antes de recuar para 3,9% em 2027. Ao mesmo tempo, o crescimento do comércio mundial deve desacelerar de 5,0% em 2025 para 3,5% em 2026, mostrando que o cenário combina menor expansão econômica, energia mais cara e perda de ritmo do comércio internacional.',
        evidence: 'A economia mundial deve crescer 3,0% em 2026 (média de 3,5% em 2024 e 2025) e 3,4% em 2027. Efeitos da guerra no Oriente Médio elevaram energia em ~25%. Inflação global revisada para 4,7% (+0,3 p.p.) e comércio global desacelera de 5,0% para 3,5% em 2026.',
        brazilImpact: 'A perda de ritmo do comércio mundial para 3,5% e o choque de ~25% nos preços da energia podem influenciar a dinâmica das exportações brasileiras e os custos de combustíveis.',
        lorenzettiImpact: 'Pode representar risco de aumento nos custos logísticos e de insumos industriais com a alta de ~25% na energia e demandar acompanhamento da desaceleração do comércio mundial para 3,5%.',
        url: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/fmi-reduz-previsao-de-crescimento-global-para-2026-a-3/'
      }
    ]
  },
  {
    id: 'estados-unidos',
    label: 'Economia dos EUA & Fed',
    badge: 'Política Monetária',
    badgeColor: 'amber',
    icon: DollarSign,
    flags: [
      { code: 'us', name: 'EUA' }
    ],
    headline: 'Trajetória dos juros básicos do Federal Reserve, desaceleração gradual da inflação e mercado de trabalho americano',
    statusSubtitle: 'Política monetária do Fed, ritmo do consumo e nível da taxa dos Treasuries',
    description: 'Acompanhamento das decisões de juros do Federal Reserve, da evolução do índice de preços PCE e dos desdobramentos sobre a liquidez global.',
    observeSummary: 'O Federal Reserve conduz a política monetária com foco no balanço de riscos entre a desaceleração da inflação e o arrefecimento ordenado no mercado de trabalho americano.',
    observeNotes: [
      'O Comitê de Mercado Aberto (FOMC) do Federal Reserve calibra a taxa básica de juros (Fed Funds) visando convergir a inflação para a meta de 2% ao ano de forma sustentável.',
      'Indicadores do mercado de trabalho americano demonstram criação moderada de vagas e taxa de desemprego estabilizada, reduzindo pressões de alta sobre custos salariais.',
      'Os rendimentos dos títulos do Tesouro dos EUA (Treasuries) balizam as taxas de juros de longo prazo em âmbito mundial e orientam a alocação global de capitais.'
    ],
    lorenzettiSummary: 'A política de juros dos Estados Unidos define o custo de capital internacional e condiciona a taxa de câmbio do dólar frente ao real.',
    lorenzettiImpacts: [
      'Cortes ou manutenção das taxas do Fed podem influenciar a taxa de câmbio USD/BRL e os custos de importação de insumos e matérias-primas.',
      'O rendimento dos Treasuries pode afetar as condições financeiras globais e o ritmo de cortes de juros praticados por bancos centrais de economias emergentes.',
      'O dinamismo do consumo nos EUA pode impactar indiretamente as cadeias de suprimento e a disponibilidade de frete marítimo internacional.'
    ],
    evidences: [
      {
        id: 'ev-us-fed-01',
        title: 'Federal Reserve avalia balanço de riscos para juros com inflação em moderação e emprego estável',
        date: '31/07/2026',
        dateStr: '31/07/2026',
        source: 'Federal Reserve / Reuters',
        category: 'Política Monetária',
        tag: 'Federal Reserve',
        summary: 'Em comunicado de política monetária, o Federal Reserve indicou que os dados recentes de inflação mostraram progresso contínuo em direção à meta de 2%, permitindo avaliar o momento apropriado para ajustes graduais na taxa básica de juros.',
        evidence: 'O FOMC registrou que a inflação registrou moderação no acumulado de 12 meses e que os riscos para os objetivos de emprego e estabilidade de preços passaram a um melhor equilíbrio.',
        brazilImpact: 'A sinalização de estabilização ou afrouxamento monetário nos EUA pode aliviar a pressão altista sobre o dólar no Brasil.',
        lorenzettiImpact: 'Pode mitigar pressões cambiais sobre contratos de aquisição internacional de componentes técnicos.',
        url: 'https://www.federalreserve.gov/monetarypolicy.htm'
      },
      {
        id: 'ev-us-reuters-02',
        title: 'Crescimento do PIB dos EUA no segundo trimestre reflete suporte contínuo do consumo e investimento',
        date: '25/07/2026',
        dateStr: '25/07/2026',
        source: 'Reuters / Bureau of Economic Analysis (BEA)',
        category: 'Atividade Econômica',
        tag: 'PIB EUA',
        summary: 'A economia dos EUA cresceu a uma taxa anualizada de 2,8% no segundo trimestre, impulsionada por gastos dos consumidores e investimentos empresariais em estoques e equipamentos tecnológicos.',
        evidence: 'Dados do BEA confirmaram crescimento anualizado de 2,8% do PIB americano, sustentado pela resiliência nos gastos das famílias e formação bruta de capital.',
        brazilImpact: 'Pode manter aquecido o fluxo de exportações brasileiras de produtos manufaturados e semi-elaborados destinados aos Estados Unidos.',
        lorenzettiImpact: 'Pode manter estável o ambiente geral de demanda nos mercados atendidos pela cadeia produtiva.',
        url: 'https://www.reuters.com/markets/us/'
      }
    ]
  },
  {
    id: 'zona-do-euro',
    label: 'Zona do Euro & BCE',
    badge: 'Atividade Industrial',
    badgeColor: 'blue',
    icon: Building2,
    flags: [
      { code: 'eu', name: 'União Europeia' },
      { code: 'de', name: 'Alemanha' }
    ],
    headline: 'Desempenho industrial na Europa, condução de juros pelo Banco Central Europeu e custos de energia',
    statusSubtitle: 'Atividade manufatureira europeia, política monetária do BCE e competitividade industrial',
    description: 'Monitoramento da produção industrial e dos índices de gerentes de compras (PMI) na Alemanha e Zona do Euro, com desdobramentos em cadeias produtivas.',
    observeSummary: 'A Zona do Euro mantém ritmo econômico de crescimento modesto com divergência entre o setor de serviços e a indústria de transformação, acompanhada de reduções graduais nas taxas do BCE.',
    observeNotes: [
      'O Banco Central Europeu (BCE) implementa cortes graduais nas taxas de juros de referência à medida que a inflação converge para a meta de 2% ao ano no bloco europeu.',
      'A indústria alemã e o setor manufatureiro da Zona do Euro enfrentam recuperação contida, pressionados pela transição energética e pela concorrência internacional em bens de capital.',
      'Os preços de gás natural e energia elétrica na Europa registraram estabilização em patamares inferiores aos picos históricos, embora permaneçam acima dos níveis pré-crise.'
    ],
    lorenzettiSummary: 'A dinâmica econômica europeia afeta os custos de bens de capital e equipamentos importados e as diretrizes regulatórias e ambientais globais.',
    lorenzettiImpacts: [
      'A evolução das taxas de juros pelo BCE pode afetar a paridade cambial do euro e as cotações de máquinas e insumos de origem europeia.',
      'A adaptação do setor industrial europeu a metas de descarbonização pode antecipar padrões regulatórios e requisitos técnicos adotados no comércio internacional.',
      'Pode demandar acompanhamento contínuo de fornecedores europeus de maquinário industrial e automação fabril.'
    ],
    evidences: [
      {
        id: 'ev-eu-bce-01',
        title: 'Banco Central Europeu reduz taxa básica de juros com inflação próxima da meta de 2%',
        date: '18/07/2026',
        dateStr: '18/07/2026',
        source: 'Banco Central Europeu (BCE)',
        category: 'Política Monetária',
        tag: 'BCE',
        summary: 'O Conselho do Banco Central Europeu decidiu reduzir em 25 pontos-base as três principais taxas de juros de referência, fundamentando a decisão na trajetória consistente de arrefecimento da inflação e no crescimento moderado da atividade na região.',
        evidence: 'O comunicado oficial do BCE apontou que a dinâmica de preços e a transmissão da política monetária confirmam a convergência da inflação para a meta estabelecida.',
        brazilImpact: 'Pode contribuir para a melhora nas condições financeiras globais e na liquidez de investimentos estrangeiros.',
        lorenzettiImpact: 'Pode favorecer negociações de importação de equipamentos e componentes cotados em moeda europeia.',
        url: 'https://www.ecb.europa.eu/press/pr/date/2026/html/index.en.html'
      },
      {
        id: 'ev-eu-reuters-02',
        title: 'Índice de gerentes de compras (PMI) da Zona do Euro sinaliza estabilização na indústria manufatureira',
        date: '24/07/2026',
        dateStr: '24/07/2026',
        source: 'S&P Global / Reuters',
        category: 'Indicadores Industriais',
        tag: 'Indústria Europeia',
        summary: 'O índice PMI composto da Zona do Euro apontou estabilização no setor manufatureiro, com melhora nos prazos de entrega dos fornecedores e estoques controlados, embora novos pedidos industriais ainda reflitam cautela empresarial.',
        evidence: 'O indicador PMI industrial registrou sinais de recuperação gradual na produção de bens intermediários, com alívio nos custos de frete e cadeias logísticas.',
        brazilImpact: 'Pode manter previsibilidade sobre o fornecimento de insumos industriais e tecnologia de manufatura de origem europeia.',
        lorenzettiImpact: 'Pode apoiar o planejamento de aquisições técnicas fabris e manutenção preditiva com prazos de entrega estáveis.',
        url: 'https://www.reuters.com/markets/europe/'
      }
    ]
  },
  {
    id: 'china-asia',
    label: 'China & Ásia Emergente',
    badge: 'Produção & Commodities',
    badgeColor: 'red',
    icon: TrendingUp,
    flags: [
      { code: 'cn', name: 'China' }
    ],
    headline: 'Metas de crescimento do PIB chinês, estímulos fiscais à manufatura e impacto na demanda global por commodities',
    statusSubtitle: 'Capacidade manufatureira, demanda por matérias-primas e exportações chinesas',
    description: 'Monitoramento da produção industrial, políticas fiscais e demanda por insumos básicos e minerais pela segunda maior economia do planeta.',
    observeSummary: 'A economia chinesa busca atingir suas metas oficiais de crescimento em torno de 5%, alicerçada na expansão do setor manufatureiro de alta tecnologia e no estímulo a investimentos produtivos.',
    observeNotes: [
      'O governo da China mantém medidas de suporte fiscal e monetário orientadas a setores industriais estratégicos, transição energética e infraestrutura de transporte.',
      'A demanda chinesa por minério de ferro, cobre e insumos industriais continua exercendo papel central na determinação dos preços globais de matérias-primas.',
      'O volume de exportações manufatureiras da China expandiu-se em ritmo expressivo, gerando discussões bilaterais com parceiros comerciais sobre sobrecapacidade industrial.'
    ],
    lorenzettiSummary: 'A dinâmica da indústria e do comércio exterior da China influencia diretamente as cotações de commodities e os custos de componentes.',
    lorenzettiImpacts: [
      'A demanda chinesa por commodities metálicas e energéticas pode balizar os custos mundiais de insumos industriais básicos.',
      'A competitividade das exportações manufatureiras chinesas pode influenciar preços internacionais de peças, semicondutores e componentes técnicos.',
      'Pode demandar acompanhamento contínuo de cotações internacionais de cobre, polímeros e ligas metálicas essenciais para o setor eletroeletrônico.'
    ],
    evidences: [
      {
        id: 'ev-cn-reuters-01',
        title: 'China registra crescimento de 5,0% no primeiro semestre sustentada pela produção manufatureira',
        date: '15/07/2026',
        dateStr: '15/07/2026',
        source: 'National Bureau of Statistics (NBS) / Reuters',
        category: 'Atividade Econômica',
        tag: 'PIB China',
        summary: 'Dados oficiais do Departamento Nacional de Estatísticas da China confirmaram avanço de 5,0% no Produto Interno Bruto no acumulado do primeiro semestre, impulsionado pela alta na produção industrial e exportações de equipamentos de alta tecnologia.',
        evidence: 'O NBS reportou expansão de 5,0% no PIB no primeiro semestre, com a indústria manufatureira apresentando crescimento de 5,8% na comparação anual.',
        brazilImpact: 'Pode manter sustentado o volume de exportações brasileiras de minério de ferro e produtos agropecuários para o mercado chinês.',
        lorenzettiImpact: 'Pode assegurar liquidez e previsibilidade nas cotações globais de matérias-primas de base importadas pela indústria.',
        url: 'https://www.reuters.com/world/china/'
      },
      {
        id: 'ev-cn-reuters-02',
        title: 'Banco do Povo da China mantém suporte monetário e corte de juros para incentivar crédito produtivo',
        date: '22/07/2026',
        dateStr: '22/07/2026',
        source: 'People\'s Bank of China (PBOC) / Reuters',
        category: 'Política Monetária',
        tag: 'Crédito Industrial',
        summary: 'O Banco do Povo da China (PBOC) anunciou cortes em taxas de empréstimo de curto e médio prazo (LPR) para reduzir o custo financeiro das empresas industriais e estimular o investimento em modernização de linhas de produção.',
        evidence: 'O banco central chinês reduziu a taxa de empréstimo preferencial de um ano em 10 pontos-base para apoiar o crédito corporativo e o investimento no setor produtivo.',
        brazilImpact: 'Pode manter aquecida a atividade comercial entre Brasil e China e dar suporte aos termos de troca bilaterais.',
        lorenzettiImpact: 'Pode favorecer a continuidade operacional e a estabilidade nas relações de fornecimento de insumos e matérias-primas.',
        url: 'https://www.reuters.com/markets/asia/'
      }
    ]
  }
];

export const ECONOMICS_BY_ID: Record<EconomicTopicId, EconomicTopicData> = ECONOMIC_TOPICS.reduce(
  (acc, topic) => {
    acc[topic.id] = topic;
    return acc;
  },
  {} as Record<EconomicTopicId, EconomicTopicData>
);
