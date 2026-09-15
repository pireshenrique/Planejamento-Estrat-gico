import { StrategicPageContext } from './types';

export const FENOMENOS_CLIMATICOS_PAGE: StrategicPageContext = {
  pageId: 'amb-fenomenos',
  portalRouteId: "amb-fenomenos",
  pageTitle: 'Fenômenos Climáticos',
  theme: 'Meio Ambiente e Clima',
  subtheme: 'Fenômenos Climáticos & El Niño',
  status: 'analyzable',
  description: 'Acompanhamento de anomalias climáticas, El Niño/La Niña, regime de chuvas, ondas de calor e impactos na cadeia produtiva e infraestrutura.',

  sources: [
    {
      id: 'uol-economia-governo',
      name: 'UOL Economia / The News (Governo Federal)',
      dateStr: '29/07/2026',
      type: 'Veículo de imprensa / Aporte federal',
      url: 'https://economia.uol.com.br/noticias/redacao/2026/07/29/governo-anuncia-reforco-de-r-13-bi-para-enfrentar-efeitos-do-el-nino.ghtm'
    },
    {
      id: 'omm-onu-g1',
      name: 'OMM / ONU (G1 Meio Ambiente)',
      dateStr: '03/09/2026',
      type: 'Organismo internacional meteorológico',
      url: 'https://g1.globo.com/meio-ambiente/noticia/2026/09/03/el-nino-vai-ficar-muito-forte-e-deve-persistir-ate-fevereiro-de-2027-diz-onu.ghtml'
    },
    {
      id: 'veja-agenda-verde',
      name: 'Veja / Agenda Verde',
      dateStr: '2026',
      type: 'Veículo de imprensa',
      url: 'https://veja.abril.com.br/agenda-verde/el-nino-ja-provoca-secas-perdas-agricolas-e-pressao-sobre-alimentos-em-tres-continentes/'
    },
    {
      id: 'noaa-roni',
      name: 'NOAA (National Oceanic and Atmospheric Administration)',
      dateStr: '2026',
      type: 'Agência científica governamental dos EUA',
      url: 'https://www.noaa.gov/news-release/el-nino-forms-expected-to-strengthen-say-noaa-forecasters'
    },
    {
      id: 'inmet-g1-calor',
      name: 'Inmet / G1 Meio Ambiente',
      dateStr: '29/08/2026',
      type: 'Instituto meteorológico nacional',
      url: 'https://g1.globo.com/meio-ambiente/noticia/2026/08/29/el-nino-brasil-deve-ter-ao-menos-seis-ondas-de-calor-ate-o-fim-do-ano.ghtml'
    },
    {
      id: 'inmet-gzh-rs',
      name: 'Inmet / GZH Ambiente',
      dateStr: '08/2026',
      type: 'Instituto meteorológico nacional / Imprensa regional',
      url: 'https://gauchazh.clicrbs.com.br/ambiente/noticia/2026/08/rs-deve-enfrentar-el-nino-muito-forte-e-risco-de-inundacoes-ate-2027-diz-inmet-cmsdopsls00a7013lq3k1b7ng.html'
    },
    {
      id: 'canal-rural-safra',
      name: 'Canal Rural',
      dateStr: '2026',
      type: 'Veículo especializado agropecuário',
      url: 'https://www.canalrural.com.br/videos/super-el-nino-pode-ameacar-safra-2026-27-com-seca-calor-de-40c-e-chuva-extrema/'
    },
    {
      id: 'copernicus-c3s',
      name: 'Copernicus Climate Change Service (C3S) / ERA5',
      dateStr: '2026',
      type: 'Serviço de observação da União Europeia'
    }
  ],

  evidenceIds: [
    'ev-governo-reforco-13bi',
    'ev-onu-g1-2026',
    'ev-veja-secas-alimentos',
    'ev-noaa-roni-2026',
    'ev-g1-ondas-calor-2026',
    'ev-rs-inmet-inundacoes',
    'ev-canal-rural-safra'
  ],

  factualContent: [
    {
      id: 'amb-fenomenos::kpi::reforco-governo',
      statement: 'O governo federal anunciou a liberação de aporte de R$ 1,3 bilhão para ações de contingência, socorro a municípios e mitigação dos impactos do El Niño.',
      kind: 'kpi',
      value: 1.3,
      unit: 'R$ bilhões',
      period: '2026',
      block: 'KPIs Principais',
      sourceId: 'uol-economia-governo',
      evidenceId: 'ev-governo-reforco-13bi'
    },
    {
      id: 'amb-fenomenos::kpi::duracao-el-nino',
      statement: 'A Organização Meteorológica Mundial (OMM/ONU) projeta que o fenômeno El Niño atingirá intensidade "muito forte" e deve persistir pelo menos até fevereiro de 2027.',
      kind: 'statement',
      period: 'fevereiro/2027',
      block: 'KPIs Principais',
      sourceId: 'omm-onu-g1',
      evidenceId: 'ev-onu-g1-2026'
    },
    {
      id: 'amb-fenomenos::kpi::pressao-continentes',
      statement: 'O fenômeno El Niño desencadeia secas severas, perdas na produtividade agropecuária e pressão de alta sobre os preços dos alimentos simultaneamente em três continentes.',
      kind: 'indicator',
      value: 3,
      unit: 'continentes',
      period: '2026',
      block: 'KPIs Principais',
      sourceId: 'veja-agenda-verde',
      evidenceId: 'ev-veja-secas-alimentos'
    },
    {
      id: 'amb-fenomenos::indicador::ondas-calor-brasil',
      statement: 'Projeções meteorológicas do Inmet apontam que o Brasil deve registrar ao menos seis ondas de calor sob a influência do El Niño até o fim do ano.',
      kind: 'indicator',
      value: 6,
      unit: 'ondas de calor',
      period: '2026',
      block: 'Monitoramento Nacional',
      sourceId: 'inmet-g1-calor',
      evidenceId: 'ev-g1-ondas-calor-2026'
    },
    {
      id: 'amb-fenomenos::statement::metrica-roni',
      statement: 'A NOAA adotou oficialmente em 2026 o índice RONI (Relative Oceanic Niño Index) para refinar a resposta atmosférica ao aquecimento relativo das águas tropicais.',
      kind: 'statement',
      period: '2026',
      block: 'Monitoramento Técnico NOAA',
      sourceId: 'noaa-roni',
      evidenceId: 'ev-noaa-roni-2026'
    },
    {
      id: 'amb-fenomenos::statement::inundacoes-rs',
      statement: 'O Inmet projeta que o Rio Grande do Sul enfrenta impacto de El Niño muito forte, mantendo risco elevado de inundações, cheias de rios e tempestades recorrentes até 2027.',
      kind: 'statement',
      period: '2026–2027',
      block: 'Impactos Regionais',
      sourceId: 'inmet-gzh-rs',
      evidenceId: 'ev-rs-inmet-inundacoes'
    },
    {
      id: 'amb-fenomenos::statement::ameaca-safra',
      statement: 'Análise técnica indica riscos para a safra 2026/27 no Centro-Sul com alternância de estiagens severas, picos térmicos de 40°C e precipitações extremas concentradas.',
      kind: 'statement',
      period: 'safra 2026/2027',
      block: 'Impactos Regionais',
      sourceId: 'canal-rural-safra',
      evidenceId: 'ev-canal-rural-safra'
    },
    {
      id: 'amb-fenomenos::series::sst-oceanica-2024',
      statement: 'A média global da temperatura da superfície do mar (SST 60°S–60°N) bateu recorde de 20,96°C em 2024 (+0,76°C de anomalia) e manteve-se em 20,94°C em 2026 segundo o Copernicus.',
      kind: 'series',
      value: 20.94,
      unit: '°C',
      period: '2026',
      block: 'Climatologia Oceânica',
      sourceId: 'copernicus-c3s',
      evidenceId: 'ev-aquecimento-oceanos-julho2026'
    }
  ],

  existingAnalysis: [
    'A liberação de R$ 1,3 bilhão para contingência hídrica e os episódios de seca podem criar oportunidades para tecnologias de pressurização, bombas e purificação domiciliar.',
    'A persistência do El Niño prolongado e a ocorrência de ondas de calor podem alterar a sazonalidade de demanda de duchas elétricas e aquecedores de água.',
    'A pressão sobre a renda proveniente da inflação de alimentos decorrente de perdas agrícolas pode reforçar a busca dos consumidores por durabilidade e eficiência.',
    'O risco continuado de inundações na região Sul pode demandar planos de prontidão logística para reposição de metais e louças sanitárias.'
  ]
};
