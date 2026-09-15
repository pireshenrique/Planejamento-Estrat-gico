/**
 * CHINA — DADOS DO PAINEL ECONÔMICO E ESTRATÉGICO
 *
 * Próxima atualização: divulgação do PIB trimestral chinês pelo NBS,
 * dados mensais da balança comercial BR-CN via SECEX/MDIC
 * ou atualizações do Fundo de Cooperação Brasil-China.
 */

export interface TradeHistoryItem {
  year: string;
  exportacoes: number;
  importacoes: number;
  saldo: number;
}

export interface CommodityShareItem {
  name: string;
  value: number;
  color: string;
  amount: string;
}

export interface InvestmentSectorItem {
  setor: string;
  percentual: number;
  valor: string;
  iconName: 'Ship' | 'Zap' | 'Server' | 'Cpu';
}

export interface StrategicVectorItem {
  id: string;
  title: string;
  tag: string;
  badge: string;
  description: string;
  impactLorenzetti: string;
  image: string;
  stat: string;
  statLabel: string;
}

export interface StrategicIndicatorItem {
  id: string;
  label: string;
  value: string;
  numericValue?: number;
  unit?: string;
  trend: string;
  source: string;
  subtext: string;
  color: string;
  iconName: 'TrendingUp' | 'Globe' | 'Activity' | 'Building2';
}

export interface StrategicTrendItem {
  id: number;
  title: string;
  evidenceSource: string;
  description: string;
  brazilImpact: string;
  lorenzettiImpact: string;
  relevance: string;
}

export interface AttentionPointBlock {
  id: string;
  title: string;
  type: 'positive' | 'negative';
  points: string[];
}

export const CHINA_TRADE_HISTORY_DATA: TradeHistoryItem[] = [
  { year: '2019', exportacoes: 63.4, importacoes: 35.3, saldo: 28.1 },
  { year: '2020', exportacoes: 67.8, importacoes: 34.0, saldo: 33.8 },
  { year: '2021', exportacoes: 87.9, importacoes: 47.6, saldo: 40.3 },
  { year: '2022', exportacoes: 89.7, importacoes: 60.7, saldo: 29.0 },
  { year: '2023', exportacoes: 104.3, importacoes: 53.2, saldo: 51.1 },
  { year: '2024', exportacoes: 106.1, importacoes: 58.5, saldo: 47.6 },
  { year: '2025', exportacoes: 100.0, importacoes: 71.0, saldo: 29.0 },
  { year: '2026 (Proj)', exportacoes: 112.5, importacoes: 74.5, saldo: 38.0 }
];

export const CHINA_EXPORT_COMMODITIES_SHARE: CommodityShareItem[] = [
  { name: 'Soja em Grãos', value: 38.5, color: '#10B981', amount: 'US$ 38,5 Bi' },
  { name: 'Petróleo Bruto', value: 24.2, color: '#3B82F6', amount: 'US$ 24,2 Bi' },
  { name: 'Minério de Ferro', value: 21.8, color: '#F59E0B', amount: 'US$ 21,8 Bi' },
  { name: 'Carne Bovina / Aves', value: 7.8, color: '#EF4444', amount: 'US$ 7,8 Bi' },
  { name: 'Celulose & Madeira', value: 4.7, color: '#8B5CF6', amount: 'US$ 4,7 Bi' },
  { name: 'Outros Manufaturados', value: 3.0, color: '#64748B', amount: 'US$ 3,0 Bi' }
];

export const CHINA_INVESTMENT_SECTORS_DATA: InvestmentSectorItem[] = [
  { setor: 'Infraestrutura & Portos', percentual: 35, valor: 'US$ 7,0 Bi', iconName: 'Ship' },
  { setor: 'Energia Limpa & Transmissão', percentual: 30, valor: 'US$ 6,0 Bi', iconName: 'Zap' },
  { setor: 'Telecom, 5G & Data Centers', percentual: 20, valor: 'US$ 4,0 Bi', iconName: 'Server' },
  { setor: 'Indústria & Eletromobilidade', percentual: 15, valor: 'US$ 3,0 Bi', iconName: 'Cpu' }
];

export const CHINA_STRATEGIC_INDICATORS: StrategicIndicatorItem[] = [
  {
    id: 'pib-china',
    label: 'Crescimento PIB Chinês',
    value: '5,0%',
    numericValue: 5.0,
    unit: '%',
    trend: '1º Tri 2026',
    source: 'Money Times (21/04/2026)',
    subtext: 'Tracionado por manufatura e transição verde',
    iconName: 'TrendingUp',
    color: 'emerald'
  },
  {
    id: 'comercio-bilateral',
    label: 'Comércio Bilateral BR-CN',
    value: 'US$ 170,8 Bi',
    numericValue: 170.8,
    unit: 'US$ Bi',
    trend: 'Recorde Anual',
    source: 'Agência Brasil / MDIC (2026)',
    subtext: 'Superávit brasileiro > US$ 38 Bi',
    iconName: 'Globe',
    color: 'blue'
  },
  {
    id: 'alta-compras-chinesas',
    label: 'Alta nas Compras Chinesas',
    value: '+ 32,5%',
    numericValue: 32.5,
    unit: '%',
    trend: '1º Semestre 2026',
    source: 'SECEX (Maio 2026)',
    subtext: 'Liderança em soja, minério e óleo bruto',
    iconName: 'Activity',
    color: 'indigo'
  },
  {
    id: 'fundo-bilateral-ano',
    label: 'Fundo Bilateral BR-CN',
    value: '2026–2027',
    trend: 'Projetos Aprovados',
    source: 'Ministério da Fazenda (29/05/2026)',
    subtext: 'Foco em portos, energia e ferrovias',
    iconName: 'Building2',
    color: 'amber'
  }
];

export const CHINA_EXECUTIVE_SUMMARY = {
  message: 'O crescimento da China em 2026 (5% no 1º trimestre), alicerçado em inovação tecnológica, manufatura avançada e transição energética, aprofunda fortemente a integração com o Brasil. A expansão das compras bilaterais e o novo plano do Fundo Brasil-China 2026-2027 abrem canais estruturantes de investimento asiático direcionados à logística, infraestrutura elétrica e hubs de Data Centers de Inteligência Artificial.',
  bullets: [
    'PIB da China mantém ritmo sólido de 5%, ancorado em alta tecnologia, eletrificação e energia limpa.',
    'Corrente de comércio bilateral ultrapassa US$ 170 bilhões, com superávit expressivo para o Brasil.',
    'Fundo Brasil-China 2026-2027 destina bilhões a ferrovias, modernização portuária e malha energética.',
    'Expansão chinesa em IA e telecomunicações fomenta novas oportunidades para infraestruturas elétricas de missão crítica no Brasil.'
  ]
};

export const CHINA_STRATEGIC_VECTORS: StrategicVectorItem[] = [
  {
    id: 'transicao',
    title: 'Transição Energética & Eletromobilidade',
    tag: 'ENERGIA & INDÚSTRIA',
    badge: 'Liderança Global',
    description: 'A China lidera mundialmente a cadeia de veículos elétricos, baterias de lítio e painéis fotovoltaicos, expandindo unidades fabris e infraestrutura no Brasil.',
    impactLorenzetti: 'Aumento expressivo na demanda global de cobre e alumínio; novas oportunidades para componentes e infraestruturas de recarga e proteção elétrica.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop',
    stat: '5% PIB',
    statLabel: '1º Tri 2026'
  },
  {
    id: 'infra-digital',
    title: 'Infraestrutura Digital & Data Centers',
    tag: 'TECNOLOGIA & IA',
    badge: 'Expansão Acelerada',
    description: 'Missões bilaterais articularam atração de gigantes de IA chinesas, cabos submarinos, satélites de baixa órbita e hubs de processamento de dados no território nacional.',
    impactLorenzetti: 'Construção de Data Centers de alta densidade exige instalações elétricas robustas, quadros blindados e sistemas de cabeamento de alta capacidade.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    stat: '+40%',
    statLabel: 'Demanda de IA'
  },
  {
    id: 'fundo-bilateral',
    title: 'Fundo de Cooperação Brasil-China',
    tag: 'FINANCIAMENTO ESTRUTURAL',
    badge: 'Plano 2026-2027',
    description: 'Aprovação de novo plano focado em ferrovias de escoamento, modernização portuária e parques industriais com operações financeiras em moedas locais.',
    impactLorenzetti: 'Aquecimento direto da construção civil pesada e novos galpões logísticos, demandando materiais elétricos de instalação e acabamento.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    stat: 'US$ 20+ Bi',
    statLabel: 'Pipeline 26-27'
  },
  {
    id: 'commodities',
    title: 'Demanda Massiva por Minerais & Agro',
    tag: 'COMÉRCIO EXTERIOR',
    badge: 'US$ 170+ Bi',
    description: 'Compras chinesas cresceram 32,5% no 1º semestre de 2026, absorvendo quase 80% da soja e quase 70% do minério de ferro exportados pelo Brasil.',
    impactLorenzetti: 'Alívio cambial pela entrada de dólares, mas exigência de controle rigoroso sobre os custos de reposição de matérias-primas metálicas.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    stat: '+32,5%',
    statLabel: 'Alta em 2026'
  }
];

export const CHINA_STRATEGIC_TRENDS: StrategicTrendItem[] = [
  {
    id: 1,
    title: 'Investimentos em Infraestrutura, Energia e Modernização',
    evidenceSource: 'Money Times (21/04/2026); Min. da Fazenda (29/05/2026)',
    description: 'As evidências apontam aprovação de novo plano de trabalho para 2026-2027 (Fundo Brasil-China) priorizando infraestrutura de transporte, logística e energia limpa.',
    brazilImpact: 'Recepção de investimentos diretos focados em estruturas logísticas e matriz energética renovável, acelerando a modernização do parque industrial nacional.',
    lorenzettiImpact: 'Oportunidade expressiva no fornecimento de materiais elétricos de instalação e distribuição na construção e ampliação de galpões, portos e plantas industriais.',
    relevance: 'Direcionamento de capital para infraestrutura básica e pesada, impulsionando a demanda de materiais elétricos no setor construtivo.'
  },
  {
    id: 2,
    title: 'Aceleração da Conectividade e Infraestrutura Digital',
    evidenceSource: 'Ministério das Comunicações (Maio/2026)',
    description: 'Missões de alto nível à China apresentaram projetos bilaterais em inteligência artificial, 5G, cabos submarinos e novos Data Centers em território brasileiro.',
    brazilImpact: 'Salto na capacidade computacional e modernização das redes de telecomunicações do Brasil com cooperação tecnológica asiática.',
    lorenzettiImpact: 'A construção de centros de dados exige especificações rigorosas de segurança, proteção contra surtos, cabeamento de alta densidade e quadros elétricos dedicados.',
    relevance: 'Aumento da participação em infraestrutura digital estruturante, abrindo nichos de produtos técnicos de alto valor agregado.'
  },
  {
    id: 3,
    title: 'Dependência de Commodities e Dinâmica de Matérias-Primas',
    evidenceSource: 'Agência Brasil (31/05/2026); SECEX (Maio 2026)',
    description: 'Expansão de 32,5% nas compras chinesas no Brasil e corrente bilateral de US$ 170 bilhões, com alta concentração em minério de ferro, petróleo e soja.',
    brazilImpact: 'Garantia de volumoso superávit comercial e reservas cambiais, mantendo no entanto alta sensibilidade às oscilações da demanda de Pequim.',
    lorenzettiImpact: 'A forte extração mineral e exportação de metais para a Ásia requer acompanhamento estreito sobre a cotação e o abastecimento de cobre e alumínio no mercado doméstico.',
    relevance: 'China segue como âncora primária de demanda, exigindo gestão estratégica de estoques e contratos de suprimentos metálicos.'
  }
];

export const CHINA_ATTENTION_POINTS: AttentionPointBlock[] = [
  {
    id: 'opportunities',
    title: 'Oportunidades Estratégicas Lorenzetti',
    type: 'positive',
    points: [
      'Fornecimento de materiais elétricos de instalação (disjuntores, quadros, conduítes e cabos) para os novos polos industriais, logísticos e portuários financiados pelo Fundo Brasil-China.',
      'Demanda acelerada por infraestruturas de Data Centers de IA e redes 5G, exigindo componentes de alta confiabilidade, aterramento e proteção elétrica.',
      'Parcerias com montadoras e desenvolvedoras de energia solar chinesas instaladas no Brasil para fornecimento conjunto de sistemas elétricos prediais e residenciais.',
      'Entrada contínua de divisas de exportação fortalecendo a liquidez e atenuando choques cambiais desordenados.'
    ]
  },
  {
    id: 'risks',
    title: 'Riscos & Pontos de Atenção Contínua',
    type: 'negative',
    points: [
      'Pressão sobre custos e disponibilidade interna de cobre, alumínio e aço devido ao apetite acelerado de compras industriais da China.',
      'Concorrência com produtos eletroeletrônicos e componentes importados da Ásia com custo competitivo no varejo brasileiro.',
      'Dependência macroeconômica brasileira do ciclo imobiliário e do ritmo fabril chinês para sustentação do superávit externo.',
      'Necessidade de qualificação constante de produtos para atender aos novos padrões técnicos de infraestrutura digital e transição energética.'
    ]
  }
];
