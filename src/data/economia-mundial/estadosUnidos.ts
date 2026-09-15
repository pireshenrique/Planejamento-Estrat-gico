/**
 * ESTADOS UNIDOS — DADOS DO PAINEL ECONÔMICO
 *
 * Próxima atualização: quando houver novas decisões do FOMC/Fed,
 * atualizações de tarifas de importação ou relatórios consolidados de investimentos em IA.
 */

export interface IndicadorEUA {
  id: string;
  label: string;
  valueStr: string;
  numericValue?: number;
  unit?: string;
  description: string;
  lastUpdate: string;
  source: string;
}

export interface TemaEstrategicoEUA {
  id: number;
  title: string;
  description: string;
  iconName: 'ShieldAlert' | 'Cpu' | 'Building2' | 'Target' | 'Zap';
  color: string;
}

export const EUA_INDICADORES: IndicadorEUA[] = [
  {
    id: 'juros-fed',
    label: 'Juros EUA (Fed)',
    valueStr: 'Risco',
    description: 'Metade prevê nova alta',
    lastUpdate: '17/06/2026',
    source: 'Reuters'
  },
  {
    id: 'data-centers',
    label: 'Data Centers',
    valueStr: 'US$ 3 Tri',
    numericValue: 3,
    unit: 'US$ Tri',
    description: 'Projeção de investimentos',
    lastUpdate: '12/01/2026',
    source: "Moody's / Cenário Energia"
  },
  {
    id: 'tarifas-br',
    label: 'Tarifas (BR)',
    valueStr: 'Até 25%',
    numericValue: 25,
    unit: '%',
    description: 'Risco p/ exportações',
    lastUpdate: '02/06/2026',
    source: 'Agência Brasil / CNI'
  },
  {
    id: 'infra-eletrica',
    label: 'Infra Elétrica',
    valueStr: 'Urgência',
    description: 'Pressão regulatória p/ IA',
    lastUpdate: '18/06/2026',
    source: 'Associated Press'
  }
];

export const EUA_PANORAMA = {
  headline: 'Os Estados Unidos enfrentam pressões inflacionárias, juros altos e intensa corrida por infraestrutura de IA.',
  description: 'O cenário econômico apresenta crescimento resiliente, mas impulsionado por uma forte demanda energética e investimentos focados em data centers. Tensões geopolíticas e discussões tarifárias indicam possíveis impactos sobre exportações e competitividade.'
};

export const EUA_TEMAS_ESTRATEGICOS: TemaEstrategicoEUA[] = [
  {
    id: 1,
    title: '1. Guerra Comercial e Tarifas',
    description: 'Possíveis tarifas de 25% sobre o Brasil afetam competitividade e pressionam setores como o metalúrgico.',
    iconName: 'ShieldAlert',
    color: 'text-red-500'
  },
  {
    id: 2,
    title: '2. Corrida por IA',
    description: 'Demanda intensa por data centers impulsiona consumo de equipamentos elétricos, cobre e obras industriais.',
    iconName: 'Cpu',
    color: 'text-purple-500'
  },
  {
    id: 3,
    title: '3. Expansão Bilionária',
    description: 'Investimentos trilionários em infraestrutura digital pressionam modernização de redes elétricas no mundo.',
    iconName: 'Building2',
    color: 'text-emerald-500'
  },
  {
    id: 4,
    title: '4. Juros Elevados nos EUA',
    description: 'Altas taxas fortalecem o dólar, elevando o custo de financiamento no Brasil e pressionando o câmbio.',
    iconName: 'Target',
    color: 'text-orange-500'
  },
  {
    id: 5,
    title: '5. Demanda por Energia',
    description: 'Novas necessidades para suporte de IA geram demandas expressivas por renováveis e equipamentos do setor elétrico.',
    iconName: 'Zap',
    color: 'text-blue-500'
  }
];
