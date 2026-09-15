import { StrategicPageContext } from './types';
import { EXPORTACOES_EVIDENCES } from '../evidences/exportacoes';

export const EXPORTACOES_PAGE: StrategicPageContext = {
  pageId: 'eco-exportacao',
  portalRouteId: "eco-exportacao",
  pageTitle: 'Exportações Brasileiras',
  theme: 'Economia Brasileira',
  subtheme: 'Exportação',
  status: 'analyzable',
  description: 'Análise estruturada do comércio exterior brasileiro: balança comercial, destinos, produtos líderes, riscos protecionistas e fluxos cambiais.',

  sources: [
    {
      id: 'mdic-secex',
      name: 'MDIC / SECEX — Secretaria de Comércio Exterior',
      dateStr: '2025/2026',
      type: 'Dado oficial de comércio exterior'
    },
    {
      id: 'cna-trademap',
      name: 'CNA / Trade Map / USDA',
      dateStr: '2025',
      type: 'Bases setoriais agropecuárias'
    },
    {
      id: 'iba-celulose',
      name: 'Ibá — Indústria Brasileira de Árvores',
      dateStr: '2025',
      type: 'Relatório setorial industrial'
    },
    {
      id: 'world-steel',
      name: 'World Steel Association / Instituto Aço Brasil',
      dateStr: '2025',
      type: 'Bases industriais globais'
    }
  ],

  evidenceIds: EXPORTACOES_EVIDENCES.map(e => String(e.id)),

  factualContent: [
    {
      id: 'exportacao::kpi::mensal-exp',
      statement: 'Exportações mensais brasileiras totalizaram US$ 36,3 bilhões no mês de junho.',
      kind: 'kpi',
      value: 36.3,
      unit: 'US$ bi',
      period: 'junho/2026',
      block: 'Balança Comercial',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::kpi::mensal-imp',
      statement: 'Importações mensais brasileiras totalizaram US$ 26,5 bilhões no mês de junho.',
      kind: 'kpi',
      value: 26.5,
      unit: 'US$ bi',
      period: 'junho/2026',
      block: 'Balança Comercial',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::kpi::mensal-saldo',
      statement: 'Saldo da balança comercial brasileira em junho registrou superávit de US$ 9,8 bilhões.',
      kind: 'kpi',
      value: 9.8,
      unit: 'US$ bi',
      period: 'junho/2026',
      block: 'Balança Comercial',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::kpi::acumulado-2025',
      statement: 'As exportações brasileiras alcançaram recorde anual consolidado de US$ 348,7 bilhões em 2025.',
      kind: 'kpi',
      value: 348.7,
      unit: 'US$ bi',
      period: '2025',
      block: 'Balança Comercial',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::produto::petroleo',
      statement: 'Petróleo bruto foi o principal produto da pauta exportadora de 2025, representando 12,8% do total.',
      kind: 'distribution',
      value: 12.8,
      unit: '%',
      period: '2025',
      block: 'Principais Produtos Exportados',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::produto::soja',
      statement: 'Soja em grão respondeu por 12,5% das exportações brasileiras em 2025.',
      kind: 'distribution',
      value: 12.5,
      unit: '%',
      period: '2025',
      block: 'Principais Produtos Exportados',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::produto::minerio-ferro',
      statement: 'Minério de ferro correspondeu a 8,3% das exportações totais de 2025.',
      kind: 'distribution',
      value: 8.3,
      unit: '%',
      period: '2025',
      block: 'Principais Produtos Exportados',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::produto::cafe',
      statement: 'Café representou 4,3% da pauta exportadora em 2025.',
      kind: 'distribution',
      value: 4.3,
      unit: '%',
      period: '2025',
      block: 'Principais Produtos Exportados',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::produto::carne-bovina',
      statement: 'Carne bovina congelada representou 4,1% das exportações brasileiras de 2025.',
      kind: 'distribution',
      value: 4.1,
      unit: '%',
      period: '2025',
      block: 'Principais Produtos Exportados',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::destino::china',
      statement: 'A China foi o 1º destino das exportações brasileiras em 2025, somando US$ 100,0 bilhões (quase 29% da pauta).',
      kind: 'ranking',
      value: 100.0,
      unit: 'US$ bi',
      period: '2025',
      block: 'Principais Destinos',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::destino::eua',
      statement: 'Os Estados Unidos foram o 2º destino das exportações brasileiras em 2025, somando US$ 37,7 bilhões.',
      kind: 'ranking',
      value: 37.7,
      unit: 'US$ bi',
      period: '2025',
      block: 'Principais Destinos',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::destino::argentina',
      statement: 'A Argentina foi o 3º destino das exportações brasileiras em 2025, totalizando US$ 18,1 bilhões.',
      kind: 'ranking',
      value: 18.1,
      unit: 'US$ bi',
      period: '2025',
      block: 'Principais Destinos',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::lideranca::cafe',
      statement: 'Brasil mantém 1º lugar mundial em produção e 1º lugar em exportação de café.',
      kind: 'statement',
      period: '2025',
      block: 'Posição do Brasil no Mundo',
      sourceId: 'cna-trademap',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::lideranca::soja',
      statement: 'Brasil é o 1º produtor e 1º exportador mundial de soja.',
      kind: 'statement',
      period: '2025',
      block: 'Posição do Brasil no Mundo',
      sourceId: 'cna-trademap',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::lideranca::suco-laranja',
      statement: 'Brasil lidera globalmente a produção e exportação de suco de laranja (1º lugar mundial em ambas).',
      kind: 'statement',
      period: '2025',
      block: 'Posição do Brasil no Mundo',
      sourceId: 'cna-trademap',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::lideranca::acucar',
      statement: 'Brasil é o 1º produtor e 1º exportador global de açúcar.',
      kind: 'statement',
      period: '2025',
      block: 'Posição do Brasil no Mundo',
      sourceId: 'cna-trademap',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::lideranca::carne-bovina',
      statement: 'Brasil é o 2º produtor e 1º exportador mundial de carne bovina.',
      kind: 'statement',
      period: '2025',
      block: 'Posição do Brasil no Mundo',
      sourceId: 'cna-trademap',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::lideranca::frango',
      statement: 'Brasil é o 3º produtor e 1º exportador global de carne de frango.',
      kind: 'statement',
      period: '2025',
      block: 'Posição do Brasil no Mundo',
      sourceId: 'cna-trademap',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::lideranca::algodao',
      statement: 'Brasil é o 3º produtor e 1º exportador mundial de algodão.',
      kind: 'statement',
      period: '2024/2025',
      block: 'Posição do Brasil no Mundo',
      sourceId: 'cna-trademap',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::industria::celulose',
      statement: 'Produção brasileira de celulose atingiu 29,4 milhões de toneladas em 2025, com exportação de 20,7 milhões de toneladas (recorde e liderança exportadora).',
      kind: 'statement',
      value: 20.7,
      unit: 'mi t',
      period: '2025',
      block: 'Posição do Brasil no Mundo',
      sourceId: 'iba-celulose',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::risco::tarifas-eua',
      statement: 'Aproximadamente 22% das exportações brasileiras direcionadas aos Estados Unidos enfrentam medidas tarifárias e sobretaxas protecionistas.',
      kind: 'indicator',
      value: 22.0,
      unit: '%',
      period: '2025/2026',
      block: 'Riscos e Barreiras Comerciais',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    },
    {
      id: 'exportacao::risco::dependencia-china',
      statement: 'Quase 29% das vendas externas brasileiras concentram-se na China, tornando a pauta sensível ao ritmo da atividade macroeconômica chinesa.',
      kind: 'indicator',
      value: 28.7,
      unit: '%',
      period: '2025',
      block: 'Riscos e Barreiras Comerciais',
      sourceId: 'mdic-secex',
      evidenceId: 'exp-01'
    }
  ],

  existingAnalysis: [
    'Superávits comerciais expressivos geram entrada de divisas e fornecem suporte para reservas internacionais e liquidez cambial.',
    'A alta concentração em commodities primárias (petróleo, soja, minério de ferro) vendidas para a China cria dependência do ciclo econômico asiático.',
    'Riscos de medidas protecionistas e tarifas nos Estados Unidos demandam monitoramento para produtos de maior valor agregado e siderurgia.',
    'Impacto Lorenzetti: a estabilidade gerada pelos saldos comerciais alivia pressões desordenadas de desvalorização cambial, o que pode ajudar na previsibilidade do custo de importação de insumos fabris e componentes.'
  ]
};
