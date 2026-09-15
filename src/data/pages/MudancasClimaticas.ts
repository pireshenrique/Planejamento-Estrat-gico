import { StrategicPageContext } from './types';

export const MUDANCAS_CLIMATICAS_PAGE: StrategicPageContext = {
  pageId: 'amb-mudancas',
  pageTitle: 'Mudanças Climáticas',
  theme: 'Meio Ambiente e Clima',
  subtheme: 'Mudanças Climáticas & Emissões',
  status: 'analyzable',
  description: 'Transformações estruturais do clima, trajetória global de emissões de CO₂, extremos hídricos, prejuízos econômicos e adaptação estratégica 2027–2037.',

  sources: [
    {
      id: 'folha-aon-2025',
      name: 'Folha de S.Paulo / Aon',
      dateStr: '05/02/2026',
      type: 'Relatório corporativo de risco / Imprensa',
      url: 'https://www1.folha.uol.com.br/ambiente/2026/02/desastres-climaticos-causaram-prejuizos-de-r-28-bilhoes-ao-brasil-em-2025-diz-relatorio.shtml'
    },
    {
      id: 'omm-wmo-global',
      name: 'OMM / WMO (World Meteorological Organization)',
      dateStr: '2025/2026',
      type: 'Organismo internacional meteorológico',
      url: 'https://wmo.int/'
    },
    {
      id: 'omm-wmo-regional',
      name: 'OMM / WMO (Relatório Regional América Latina e Caribe)',
      dateStr: '2025/2026',
      type: 'Organismo internacional meteorológico'
    },
    {
      id: 'cnn-cemaden-inpe-usp',
      name: 'CNN Brasil (Cemaden, INPE, USP e UFSCar)',
      dateStr: '15/07/2026',
      type: 'Estudo acadêmico / Institutos de pesquisa',
      url: 'https://www.cnnbrasil.com.br/nacional/brasil/nove-em-cada-10-municipios-brasileiros-ja-sofreram-com-desastres-hidricos/'
    },
    {
      id: 'cnn-sus-calor',
      name: 'CNN Brasil (Estudo com registros do SUS / 5.566 Municípios)',
      dateStr: '17/06/2026',
      type: 'Estudo de saúde pública com dados governamentais',
      url: 'https://www.cnnbrasil.com.br/saude/ondas-de-calor-no-brasil-registrou-120-mil-mortes-associadas-em-20-anos/'
    },
    {
      id: 'agenciabrasil-desertificacao',
      name: 'Agência Brasil (EBC)',
      dateStr: '15/08/2026',
      type: 'Agência oficial pública de notícias',
      url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-08/risco-de-desertificacao-no-brasil-ameaca-seguranca-hidrica-e-alimentar'
    },
    {
      id: 'instituto-ar-pesquisa',
      name: 'Instituto Ar',
      dateStr: '2026',
      type: 'Pesquisa de opinião e percepção social',
      url: 'https://institutoar.org.br/noticias/mudanca-climatica-impactam-brasileiros/'
    }
  ],

  evidenceIds: [
    'ev-folha-desastres-28bi-2025',
    'ev-omm-11-anos-recorde-2025',
    'ev-omm-america-latina-extremos-2025',
    'ev-cnn-municipios-desastres-hidricos',
    'ev-cnn-ondas-calor-120mil-mortes',
    'ev-agenciabrasil-desertificacao-39mi',
    'ev-percepcao-brasileiros-clima-2026'
  ],

  factualContent: [
    {
      id: 'amb-mudancas::kpi::prejuizo-desastres-2025',
      statement: 'Eventos climáticos extremos provocaram R$ 28,4 bilhões (US$ 5,4 bilhões) em perdas econômicas no Brasil em 2025 segundo levantamento da Aon, sendo as secas responsáveis por 88% do prejuízo.',
      kind: 'kpi',
      value: 28.4,
      unit: 'R$ bilhões',
      period: '2025',
      block: 'Prejuízos e Extremos Econômicos',
      sourceId: 'folha-aon-2025',
      evidenceId: 'ev-folha-desastres-28bi-2025'
    },
    {
      id: 'amb-mudancas::kpi::secas-share-perdas',
      statement: 'As secas responderam por 88% de todas as perdas econômicas causadas por desastres climáticos no Brasil em 2025.',
      kind: 'indicator',
      value: 88,
      unit: '%',
      period: '2025',
      block: 'Prejuízos e Extremos Econômicos',
      sourceId: 'folha-aon-2025',
      evidenceId: 'ev-folha-desastres-28bi-2025'
    },
    {
      id: 'amb-mudancas::kpi::11-anos-quentes',
      statement: 'A OMM confirmou que o período 2015–2025 concentrou os 11 anos mais quentes já registrados no planeta, atingindo anomalia média de cerca de +1,43°C acima do período pré-industrial em 2025.',
      kind: 'indicator',
      value: 11,
      unit: 'anos recordistas',
      period: '2015–2025',
      block: 'Climatologia Global',
      sourceId: 'omm-wmo-global',
      evidenceId: 'ev-omm-11-anos-recorde-2025'
    },
    {
      id: 'amb-mudancas::indicador::municipios-desastres-hidricos',
      statement: 'Estudo do Cemaden, INPE, USP e UFSCar apontou que 90% dos municípios brasileiros já sofreram ao menos um desastre relacionado à água (inundações, secas, tempestades ou deslizamentos).',
      kind: 'indicator',
      value: 90,
      unit: '% dos municípios',
      period: '2026',
      block: 'Vulnerabilidade Territorial',
      sourceId: 'cnn-cemaden-inpe-usp',
      evidenceId: 'ev-cnn-municipios-desastres-hidricos'
    },
    {
      id: 'amb-mudancas::indicador::mortes-ondas-calor',
      statement: 'Estudo com registros do SUS em 5.566 municípios identificou pelo menos 120 mil mortes associadas a ondas de calor no Brasil em duas décadas (~0,6% da mortalidade analisada).',
      kind: 'indicator',
      value: 120000,
      unit: 'óbitos associados',
      period: '20 anos (até 2026)',
      block: 'Saúde Pública e Calor',
      sourceId: 'cnn-sus-calor',
      evidenceId: 'ev-cnn-ondas-calor-120mil-mortes'
    },
    {
      id: 'amb-mudancas::indicador::populacao-desertificacao',
      statement: 'Cerca de 39 milhões de brasileiros habitam atualmente regiões ameaçadas pelo processo de desertificação e degradação de solos no Semiárido e Caatinga.',
      kind: 'indicator',
      value: 39,
      unit: 'milhões de pessoas',
      period: '2026',
      block: 'Segurança Hídrica e Solo',
      sourceId: 'agenciabrasil-desertificacao',
      evidenceId: 'ev-agenciabrasil-desertificacao-39mi'
    },
    {
      id: 'amb-mudancas::indicador::percepcao-populacao',
      statement: 'Pesquisa do Instituto Ar revelou que 85% dos brasileiros declaram que as mudanças climáticas já interferem no seu cotidiano e hábitos de consumo.',
      kind: 'indicator',
      value: 85,
      unit: '% da população',
      period: '2026',
      block: 'Percepção Social',
      sourceId: 'instituto-ar-pesquisa',
      evidenceId: 'ev-percepcao-brasileiros-clima-2026'
    }
  ],

  existingAnalysis: [
    'O aumento contínuo de temperaturas e episódios de calor pode influenciar o perfil de consumo e a sazonalidade de duchas elétricas e aquecedores de água nas macrorregiões.',
    'A frequência de extremos hídricos e secas prolongadas no Sudeste e Nordeste pode criar oportunidades para tecnologias economizadoras de água, arejadores, pressurizadores e sistemas de purificação.',
    'Exigências regulatórias globais e locais de descarbonização podem demandar aprimoramento contínuo da pegada de carbono dos produtos e dos processos industriais.',
    'A vulnerabilidade de rotas de transporte e polos industriais a eventos climáticos extremos pode exigir monitoramento logístico e estoques estratégicos regionalizados.'
  ]
};
