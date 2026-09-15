import { StrategicPageContext } from './types';

export const DATA_CENTERS_PAGE: StrategicPageContext = {
  pageId: 'ene-datacenters',
  pageTitle: 'Data Centers & Infraestrutura',
  theme: 'Energia e Infraestrutura',
  subtheme: 'Data Centers, IA & Demanda de Potência',
  status: 'analyzable',
  description: 'Expansão de data centers impulsionada por IA, demanda potencial de 15,7 GW até 2037 mapeada pela EPE, pressão em subestações de SP e infraestrutura de transmissão.',

  sources: [
    {
      id: 'epe-gpl-018-datacenters',
      name: 'EPE (Empresa de Pesquisa Energética) — Nota Técnica GPL-018',
      dateStr: 'Fevereiro 2025',
      type: 'Estudo de planejamento energético governamental',
      url: 'https://www.epe.gov.br/sites-pt/publicacoes-dados-abertos/publicacoes/PublicacoesArquivos/publicacao-458/topico-801/GPL-018.pdf'
    },
    {
      id: 'epe-workshop-grandes-cargas',
      name: 'EPE — Workshop de Planejamento da Transmissão para Grandes Cargas',
      dateStr: '2025/2026',
      type: 'Evento técnico / Divulgação oficial EPE',
      url: 'https://www.epe.gov.br/pt/imprensa/noticias/workshop-da-epe-aborda-planejamento-da-transmissao-de-energia-para-conectar-grandes-cargas'
    },
    {
      id: 'mme-epe-transmissao-120bi',
      name: 'MME / EPE — Investimentos em Transmissão até 2035',
      dateStr: '2025/2026',
      type: 'Planejamento decenal de infraestrutura',
      url: 'https://www.epe.gov.br/pt/imprensa/noticias/mme-e-epe-preveem-investimentos-de-cerca-de-r-120-bilhoes-para-o-sistema-de-transmissao-ate-o-ano-de-2035'
    },
    {
      id: 'infomoney-datacenters-investimentos',
      name: 'InfoMoney / Mercado Corporativo',
      dateStr: '2025/2026',
      type: 'Imprensa econômica e de negócios',
      url: 'https://www.infomoney.com.br/negocios/data-centers-investimentos-brasil-energia-verde/'
    },
    {
      id: 'camara-incentivos-datacenters-2026',
      name: 'Câmara dos Deputados / Metrópoles',
      dateStr: '2026',
      type: 'Legislação e incentivos federais',
      url: 'https://www.metropoles.com/brasil/camara-aprova-projeto-que-permite-incentivos-a-data-centers-ja-em-2026'
    }
  ],

  evidenceIds: [
    'infomoney-datacenters-ia-investimentos',
    'epe-demanda-datacenters-15-7-gw',
    'epe-workshop-conectar-grandes-cargas',
    'epe-transmissao-120-bi-2035',
    'camara-incentivos-datacenters-2026'
  ],

  factualContent: [
    {
      id: 'ene-datacenters::kpi::demanda-potencial-epe',
      statement: 'A EPE (Nota Técnica GPL-018) mapeou uma demanda potencial de projetos de data centers no Brasil saltando de 9,0 GW em setembro de 2024 para 15,7 GW em fevereiro de 2025 no horizonte até 2037.',
      kind: 'kpi',
      value: 15.7,
      unit: 'GW de demanda potencial',
      period: 'até 2037',
      block: 'Demanda Potencial de Data Centers (EPE)',
      sourceId: 'epe-gpl-018-datacenters',
      evidenceId: 'epe-demanda-datacenters-15-7-gw'
    },
    {
      id: 'ene-datacenters::kpi::sp-grandes-cargas',
      statement: 'A Região Metropolitana de São Paulo e o estado concentram cerca de 8,8 GW em projetos de grandes cargas mapeadas em estudos de conexão e atendimento da EPE.',
      kind: 'indicator',
      value: 8.8,
      unit: 'GW em SP',
      period: '2025/2026',
      block: 'Concentração Regional em São Paulo',
      sourceId: 'epe-workshop-grandes-cargas',
      evidenceId: 'epe-workshop-conectar-grandes-cargas'
    },
    {
      id: 'ene-datacenters::kpi::investimentos-transmissao-2035',
      statement: 'O MME e a EPE preveem cerca de R$ 120 bilhões em investimentos na expansão da malha de transmissão de energia elétrica do país até 2035 para escoamento de renováveis e suprimento de grandes cargas.',
      kind: 'kpi',
      value: 120.0,
      unit: 'R$ bilhões',
      period: 'até 2035',
      block: 'Infraestrutura de Transmissão',
      sourceId: 'mme-epe-transmissao-120bi',
      evidenceId: 'epe-transmissao-120-bi-2035'
    },
    {
      id: 'ene-datacenters::statement::incentivos-legislacao-2026',
      statement: 'A Câmara dos Deputados aprovou projeto de lei autorizando incentivos fiscais e regulatórios com vigência a partir de 2026 para atrair data centers voltados à inteligência artificial associados a fontes limpas de energia.',
      kind: 'statement',
      period: '2026',
      block: 'Políticas Públicas e Incentivos',
      sourceId: 'camara-incentivos-datacenters-2026',
      evidenceId: 'camara-incentivos-datacenters-2026'
    }
  ],

  existingAnalysis: [
    'A expansão de data centers de grande porte no Sistema Interligado Nacional pode gerar disputa por potência e margem de conexão em subestações metropolitanas de São Paulo.',
    'A concentração de grandes consumidores contínuos pode alterar a dinâmica de preços de energia no Mercado Livre (ACL) e a precificação de energia firme.',
    'O aumento na demanda eletrointensiva pode demandar acompanhamento contínuo dos reforços na rede de distribuição das zonas industriais onde a Lorenzetti opera.',
    'A vantagem comparativa do Brasil em energia limpa reforça a atração de hiperscalers com metas globais de descarbonização, estimulando contratação corporativa de longo prazo (PPAs renováveis).'
  ]
};
