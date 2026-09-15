import { StrategicPageContext } from './types';

export const AQUECIMENTO_GLOBAL_PAGE: StrategicPageContext = {
  pageId: 'amb-aquecimento',
  pageTitle: 'Aquecimento Global',
  theme: 'Meio Ambiente e Clima',
  subtheme: 'Aquecimento Global & Temperaturas',
  status: 'analyzable',
  description: 'Evolução das temperaturas globais, anomalias dos oceanos, ilhas de calor urbanas em São Paulo e aproximação do limiar de 1,5°C.',

  sources: [
    {
      id: 'usp-sp-cnn',
      name: 'CNN Brasil / Pesquisadores da USP / IPCC',
      dateStr: '17/05/2026',
      type: 'Estudo acadêmico de climatologia urbana',
      url: 'https://www.cnnbrasil.com.br/nacional/sudeste/sp/temperatura-em-sao-paulo-superou-media-global-no-ultimo-seculo-diz-estudo/'
    },
    {
      id: 'estudo-antropico-73cientistas',
      name: 'CNN Brasil / Estudo Internacional com 73 cientistas',
      dateStr: '11/06/2026',
      type: 'Estudo científico internacional',
      url: 'https://www.cnnbrasil.com.br/'
    },
    {
      id: 'agenciabrasil-copernicus-oceanos',
      name: 'Agência Brasil (Copernicus / Relatórios Oficiais)',
      dateStr: '10/08/2026',
      type: 'Serviço oficial de observação da Terra (Copernicus)',
      url: 'https://agenciabrasil.ebc.com.br/'
    },
    {
      id: 'folha-reuters-omm',
      name: 'Folha de S.Paulo / Reuters (Alerta OMM)',
      dateStr: '11/08/2026',
      type: 'Organismo internacional meteorológico / Imprensa',
      url: 'https://www1.folha.uol.com.br/'
    },
    {
      id: 'unep-emissions-gap-2025',
      name: 'UNEP — Emissions Gap Report 2025',
      dateStr: '2025/2026',
      type: 'Relatório de agência da ONU (Meio Ambiente)',
      url: 'https://www.unep.org/resources/emissions-gap-report-2024'
    }
  ],

  evidenceIds: [
    'ev-aquecimento-sp-usp-cnn-2026',
    'ev-aquecimento-antropico-cnn-2026',
    'ev-aquecimento-oceanos-julho2026',
    'ev-aquecimento-calor-extremo-folha-2026',
    'ev-aquecimento-unep-politicas-28c'
  ],

  factualContent: [
    {
      id: 'amb-aquecimento::kpi::sp-elevacao-temperatura',
      statement: 'Desde 1900, enquanto a média global subiu cerca de 1,2°C, São Paulo registrou elevação de 2,4°C nas máximas diárias e 2,8°C nas mínimas segundo pesquisadores da USP.',
      kind: 'comparison',
      value: 2.8,
      unit: '°C nas mínimas',
      period: '1900–2026',
      block: 'Aquecimento Regional em São Paulo',
      sourceId: 'usp-sp-cnn',
      evidenceId: 'ev-aquecimento-sp-usp-cnn-2026'
    },
    {
      id: 'amb-aquecimento::indicador::sp-superficie-urbana',
      statement: 'Em áreas urbanizadas críticas da Grande São Paulo, a temperatura da superfície atinge até 60°C em picos de calor, contra cerca de 25°C em áreas com vegetação densa.',
      kind: 'indicator',
      value: 60,
      unit: '°C',
      period: '2026',
      block: 'Aquecimento Regional em São Paulo',
      sourceId: 'usp-sp-cnn',
      evidenceId: 'ev-aquecimento-sp-usp-cnn-2026'
    },
    {
      id: 'amb-aquecimento::kpi::aquecimento-antropico',
      statement: 'Estudo com 73 cientistas apontou que o aquecimento provocado pela atividade humana atingiu aproximadamente 1,37°C em 2025, avançando a um ritmo de 0,27°C por década.',
      kind: 'kpi',
      value: 1.37,
      unit: '°C',
      period: '2025',
      block: 'Aquecimento Global Antrópico',
      sourceId: 'estudo-antropico-73cientistas',
      evidenceId: 'ev-aquecimento-antropico-cnn-2026'
    },
    {
      id: 'amb-aquecimento::series::projecao-limiar-1-5c',
      statement: 'No ritmo de elevação de 0,27°C por década, o nível de aquecimento de longo prazo de 1,5°C acima dos níveis pré-industriais pode ser atingido por volta de 2030.',
      kind: 'series',
      period: '≈ 2030',
      block: 'Aquecimento Global Antrópico',
      sourceId: 'estudo-antropico-73cientistas',
      evidenceId: 'ev-aquecimento-antropico-cnn-2026'
    },
    {
      id: 'amb-aquecimento::kpi::recorde-oceanos-julho2026',
      statement: 'A temperatura média da superfície dos oceanos fora dos polos atingiu recorde histórico de 20,96°C em julho de 2026, com o ar global ficando 1,47°C acima do período pré-industrial.',
      kind: 'kpi',
      value: 20.96,
      unit: '°C',
      period: 'julho/2026',
      block: 'Oceanos e Recordes Globais',
      sourceId: 'agenciabrasil-copernicus-oceanos',
      evidenceId: 'ev-aquecimento-oceanos-julho2026'
    },
    {
      id: 'amb-aquecimento::series::politicas-atuais-unep',
      statement: 'O relatório Emissions Gap 2025 da UNEP aponta que as políticas governamentais globais atualmente em vigor conduzem a uma trajetória de aquecimento de cerca de 2,8°C até o fim do século.',
      kind: 'series',
      value: 2.8,
      unit: '°C',
      period: '2025/2026',
      block: 'Cenários Globais UNEP',
      sourceId: 'unep-emissions-gap-2025',
      evidenceId: 'ev-aquecimento-unep-politicas-28c'
    }
  ],

  existingAnalysis: [
    'A elevação estrutural das temperaturas médias e os picos de calor em regiões metropolitanas podem alterar o padrão tradicional de sazonalidade na demanda por aquecimento de água.',
    'Dias com temperaturas de superfície elevadas em polos urbanos e noites mais quentes podem favorecer produtos com controle eletrônico gradual de temperatura, menor consumo em potências mínimas e integração com sistemas de ventilação e conforto.',
    'Variações extremas entre ondas de calor e frentes frias podem demandar aparelhos versáteis que mantenham eficiência tanto sob temperaturas ambiente elevadas quanto em quedas bruscas.'
  ]
};
