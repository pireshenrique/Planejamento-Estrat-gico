import { StrategicPageContext } from './types';

export const ENERGIA_RENOVAVEL_PAGE: StrategicPageContext = {
  pageId: 'ene-renovavel',
  pageTitle: 'Energia Renovável',
  theme: 'Energia e Infraestrutura',
  subtheme: 'Energia Renovável e Matriz Elétrica',
  status: 'analyzable',
  description: 'Evolução da matriz elétrica brasileira e global, transição energética, capacidade solar fotovoltaica, eólica, geração distribuída e eletromobilidade.',

  sources: [
    {
      id: 'epe-ben-2026',
      name: 'EPE — Balanço Energético Nacional (BEN 2026 / Ano-base 2025)',
      dateStr: '2026',
      type: 'Dado oficial governamental',
      url: 'https://www.epe.gov.br/pt/imprensa/noticias/epe-publica-o-relatorio-sintese-do-balanco-energetico-nacional-2026'
    },
    {
      id: 'mme-epe-pde2035',
      name: 'MME / EPE — Estudo de Demanda de Eletricidade / PDE 2035',
      dateStr: '2026',
      type: 'Planejamento decenal governamental',
      url: 'https://www.epe.gov.br/pt/imprensa/noticias/consumo-de-eletricidade-no-brasil-deve-crescer-em-media-3-3-ao-ano-ate-2035-indica-estudo-do-mme-e-da-epe'
    },
    {
      id: 'canal-solar-3tw',
      name: 'Canal Solar — Mundo supera 3 TW de energia solar',
      dateStr: 'Início de 2026',
      type: 'Veículo especializado do setor solar',
      url: 'https://canalsolar.com.br/mundo-energia-solar-caem-brasil/'
    },
    {
      id: 'g1-renovaveis-carvao',
      name: 'G1 — Renováveis ultrapassam carvão pela primeira vez na história',
      dateStr: 'Outubro 2025',
      type: 'Veículo de imprensa / Agências internacionais',
      url: 'https://g1.globo.com/economia/noticia/2025/10/07/renovaveis-ultrapassam-carvao-e-se-tornam-maior-fonte-de-energia-eletrica-pela-1a-vez-na-historia.ghtml'
    },
    {
      id: 'wef-energy-transition-2026',
      name: 'CNN Brasil / WEF (Fórum Econômico Mundial) — Energy Transition Index 2026',
      dateStr: '2026',
      type: 'Relatório internacional de inteligência econômica',
      url: 'https://www.cnnbrasil.com.br/infra/transicao-energetica-estagnou-apesar-de-investimento-recorde-diz-relatorio/'
    },
    {
      id: 'irena-custos-renovaveis',
      name: 'IRENA (International Renewable Energy Agency) / CNN Brasil',
      dateStr: '2025/2026',
      type: 'Agência internacional de energia renovável'
    },
    {
      id: 'ebc-mercado-livre-2027',
      name: 'Agência Brasil (EBC) — Abertura do Mercado Livre',
      dateStr: '08/2026',
      type: 'Agência oficial pública de notícias',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/consumidores-poderao-escolher-fornecedores-de-energia-partir-de-2027'
    },
    {
      id: 'bradesco-bbi-eletricos-2035',
      name: 'Bradesco BBI & EPE / CNN Brasil — Eletromobilidade e Demanda',
      dateStr: '2026',
      type: 'Relatório setorial bancário'
    }
  ],

  evidenceIds: [
    'solar-3tw-global-2026',
    'renovaveis-carvao-marco-historico',
    'wef-transicao-estagnou-3tri',
    'epe-ben-2026-matriz-renovavel',
    'epe-ben-2026-consumo-transportes-eletricidade',
    'epe-mme-consumo-eletricidade-3-3-2035',
    'global-custos-despencam',
    'global-china-carvao-termica',
    'brasil-solar-90-conta-2027',
    'brasil-lcoe-solar-cai-25',
    'brasil-eletricos-frota-2035-bradesco',
    'brasil-eletromobilidade-pde-2035'
  ],

  factualContent: [
    {
      id: 'ene-renovavel::kpi::brasil-matriz-eletrica-renovavel',
      statement: 'A matriz elétrica brasileira atingiu 86,8% de renovabilidade em 2025 segundo o Balanço Energético Nacional (BEN 2026), com a matriz energética total próxima a 50% renovável.',
      kind: 'kpi',
      value: 86.8,
      unit: '% da matriz elétrica',
      period: '2025/2026',
      block: 'Matriz Elétrica Brasileira',
      sourceId: 'epe-ben-2026',
      evidenceId: 'epe-ben-2026-matriz-renovavel'
    },
    {
      id: 'ene-renovavel::kpi::solar-eolica-share-brasil',
      statement: 'A geração combinada de energia solar e eólica já representa 26,4% de toda a geração de eletricidade no Brasil no fechamento do BEN 2026.',
      kind: 'indicator',
      value: 26.4,
      unit: '% da geração elétrica',
      period: '2025/2026',
      block: 'Matriz Elétrica Brasileira',
      sourceId: 'epe-ben-2026',
      evidenceId: 'epe-ben-2026-matriz-renovavel'
    },
    {
      id: 'ene-renovavel::kpi::projecao-demanda-pde2035',
      statement: 'O consumo de eletricidade no Brasil deve crescer em média 3,3% ao ano até 2035, segundo estudo conjunto do Ministério de Minas e Energia (MME) e da EPE.',
      kind: 'series',
      value: 3.3,
      unit: '% ao ano',
      period: 'até 2035',
      block: 'Planejamento Decenal MME/EPE',
      sourceId: 'mme-epe-pde2035',
      evidenceId: 'epe-mme-consumo-eletricidade-3-3-2035'
    },
    {
      id: 'ene-renovavel::kpi::consumo-nacional-total-2025',
      statement: 'O consumo energético total do Brasil avançou 1,1% em 2025, enquanto o consumo no setor de transportes cresceu 3,5%, impulsionado por eletricidade, biodiesel e etanol.',
      kind: 'indicator',
      value: 1.1,
      unit: '% de crescimento',
      period: '2025',
      block: 'Consumo Energético Nacional',
      sourceId: 'epe-ben-2026',
      evidenceId: 'epe-ben-2026-consumo-transportes-eletricidade'
    },
    {
      id: 'ene-renovavel::kpi::capacidade-solar-global-3tw',
      statement: 'A capacidade instalada global de energia solar superou a marca histórica de 3 TW no início de 2026, tendo adicionado 664 GW em 2025.',
      kind: 'kpi',
      value: 3.0,
      unit: 'TW',
      period: 'início de 2026',
      block: 'Cenário Global de Renováveis',
      sourceId: 'canal-solar-3tw',
      evidenceId: 'solar-3tw-global-2026'
    },
    {
      id: 'ene-renovavel::indicator::solar-share-adicoes-mundo',
      statement: 'A energia solar fotovoltaica respondeu por 77% de toda a nova capacidade de geração renovável instalada no mundo em 2025.',
      kind: 'indicator',
      value: 77.0,
      unit: '% das adições renováveis',
      period: '2025',
      block: 'Cenário Global de Renováveis',
      sourceId: 'canal-solar-3tw',
      evidenceId: 'solar-3tw-global-2026'
    },
    {
      id: 'ene-renovavel::indicator::queda-custos-irena',
      statement: 'Entre 2010 e 2024, os custos de capital caíram 87% para solar fotovoltaica, 55% para eólica terrestre e 93% para baterias de armazenamento segundo a IRENA.',
      kind: 'comparison',
      value: 87.0,
      unit: '% de queda no custo solar',
      period: '2010–2024',
      block: 'Custos de Capital e Tecnologias',
      sourceId: 'irena-custos-renovaveis',
      evidenceId: 'global-custos-despencam'
    },
    {
      id: 'ene-renovavel::statement::mercado-livre-cronograma',
      statement: 'A partir de novembro de 2027, consumidores comerciais e industriais de baixa tensão poderão migrar para o Mercado Livre de energia; demais consumidores entram em novembro de 2028.',
      kind: 'statement',
      period: '2027–2028',
      block: 'Regulação do Mercado Livre',
      sourceId: 'ebc-mercado-livre-2027',
      evidenceId: 'brasil-solar-90-conta-2027'
    },
    {
      id: 'ene-renovavel::distribution::consumo-setor-brasil',
      statement: 'No Brasil, o setor industrial responde por 36,1% do consumo elétrico e o residencial por 28,2% (cerca de 158 TWh), com chuveiros, aquecimento de água e climatização.',
      kind: 'distribution',
      value: 28.2,
      unit: '% consumo residencial',
      period: '2025',
      block: 'Consumo por Setor',
      sourceId: 'epe-ben-2026',
      evidenceId: 'epe-ben-2026-matriz-renovavel'
    },
    {
      id: 'ene-renovavel::series::demanda-veiculos-eletricos-2035',
      statement: 'A demanda de eletricidade da frota de veículos elétricos no Brasil é projetada pela EPE em 7,8 TWh em 2035 (frota estimada de 3,81 milhões de veículos), ante 0,6 TWh em 2025.',
      kind: 'series',
      value: 7.8,
      unit: 'TWh em 2035',
      period: '2025–2035',
      block: 'Eletromobilidade e Demanda Futura',
      sourceId: 'mme-epe-pde2035',
      evidenceId: 'brasil-eletromobilidade-pde-2035'
    }
  ],

  existingAnalysis: [
    'A expansão da microgeração distribuída solar pode criar oportunidades para sistemas de aquecimento de água integrados ao perfil de geração própria do imóvel.',
    'A crescente sensibilidade à eficiência energética e às bandeiras tarifárias pode valorizar chuveiros e aquecedores com modulação eletrônica precisa de potência.',
    'O cronograma de abertura gradual do mercado livre a partir de 2027 e tarifas dinâmicas pode demandar acompanhamento contínuo dos padrões de consumo residencial.',
    'O avanço da eletrificação em transportes e edificações pode reforçar a relevância de produtos com alta durabilidade e baixo consumo em horário de ponta.'
  ]
};
