import { StrategicPageContext } from './types';
import { CHINA_EVIDENCES } from '../evidences/china';

/**
 * CHINA — Economia Mundial
 *
 * Página de inteligência sobre o crescimento do PIB chinês, comércio bilateral Brasil-China,
 * Fundo de Cooperação e investimentos em infraestrutura e IA.
 */
export const CHINA_PAGE: StrategicPageContext = {
  pageId: 'china',
  pageTitle: 'China',
  theme: 'Economia Mundial',
  subtheme: 'China',
  status: 'analyzable',
  description: 'Crescimento do PIB da China, expansão do comércio bilateral com o Brasil, Fundo Brasil-China e atração de investimentos em transição energética e infraestrutura de IA.',

  sources: [
    {
      id: 'money-times-2026',
      name: 'Money Times',
      dateStr: '21/04/2026',
      url: 'https://www.moneytimes.com.br/como-a-china-acelera-mudanca-estrutural-e-abre-janela-estrategica-para-reindustrializacao-do-brasil-jals/',
      type: 'Veículo de Imprensa Especializado'
    },
    {
      id: 'ministerio-fazenda-2026',
      name: 'Ministério da Fazenda',
      dateStr: '29/05/2026',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/maio/terceira-reuniao-do-fundo-brasil-china-ocorre-em-sao-paulo',
      type: 'Órgão Governamental'
    },
    {
      id: 'agencia-brasil-2026',
      name: 'Agência Brasil',
      dateStr: '31/05/2026',
      url: 'https://agenciabrasil.ebc.com.br/internacional/noticia/2026-05/vieira-vai-pequim-para-reuniao-bilateral-com-governo-chines',
      type: 'Agência Oficial de Notícias'
    },
    {
      id: 'ministerio-comunicacoes-2026',
      name: 'Ministério das Comunicações',
      dateStr: 'Maio de 2026',
      url: 'https://www.gov.br/mcom/pt-br/noticias/2026/maio/ministro-das-comunicacoes-vai-a-china-para-ampliar-conectividade-via-satelite-e-atrair-investimentos-em-infraestrutura-digital',
      type: 'Órgão Governamental'
    },
    {
      id: 'secex-mdic-2026',
      name: 'SECEX / MDIC',
      dateStr: 'Maio de 2026',
      url: 'https://mtpress.com.br/agronegocio/china-lidera-avanco-da-balanca-comercial-brasileira-e-garante-superavit-de-us-105-bilhoes-em-abril/',
      type: 'Dados Oficiais / Imprensa'
    },
    {
      id: 'secex-mdic-historico',
      name: 'SECEX / MDIC',
      dateStr: '2019–2026',
      url: 'https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior/estatisticas',
      type: 'Base Estatística Governamental'
    },
    {
      id: 'fundo-brasil-china',
      name: 'Fundo de Cooperação Brasil-China',
      dateStr: '2026',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/maio/terceira-reuniao-do-fundo-brasil-china-ocorre-em-sao-paulo',
      type: 'Fundo Bilateral'
    }
  ],

  evidenceIds: [
    'china::1',
    'china::2',
    'china::3',
    'china::4',
    'china::5',
    'china::6'
  ],

  factualContent: [
    // 1. Indicadores Principais
    {
      id: 'china::indicador::pib-china',
      statement: 'O PIB da China cresceu 5,0% no primeiro trimestre de 2026, impulsionado por manufatura e transição verde.',
      kind: 'indicator',
      value: 5.0,
      unit: '%',
      period: '1º Tri 2026',
      block: 'Indicadores Estratégicos',
      sourceId: 'money-times-2026',
      evidenceId: 'china::1'
    },
    {
      id: 'china::indicador::comercio-bilateral',
      statement: 'O comércio bilateral entre Brasil e China atingiu o recorde anual de US$ 170,8 bilhões em 2026.',
      kind: 'indicator',
      value: 170.8,
      unit: 'US$ Bi',
      period: '2026',
      block: 'Indicadores Estratégicos',
      sourceId: 'agencia-brasil-2026',
      evidenceId: 'china::3'
    },
    {
      id: 'china::indicador::alta-compras-chinesas',
      statement: 'As exportações brasileiras para a China registraram alta de 32,5% no primeiro semestre de 2026.',
      kind: 'indicator',
      value: 32.5,
      unit: '%',
      period: '1º Semestre 2026',
      block: 'Indicadores Estratégicos',
      sourceId: 'secex-mdic-2026',
      evidenceId: 'china::6'
    },
    {
      id: 'china::indicador::fundo-bilateral',
      statement: 'Brasil e China aprovaram o novo plano de trabalho 2026-2027 do Fundo de Cooperação Brasil-China, priorizando portos, energia e ferrovias.',
      kind: 'statement',
      period: '2026–2027',
      block: 'Indicadores Estratégicos',
      sourceId: 'ministerio-fazenda-2026',
      evidenceId: 'china::2'
    },

    // 2. Série Histórica de Comércio Bilateral (2019-2026)
    {
      id: 'china::comercio-historico::2019-exportacoes',
      statement: 'Exportações brasileiras para a China em 2019 somaram US$ 63,4 bilhões.',
      kind: 'indicator',
      value: 63.4,
      unit: 'US$ Bi',
      period: '2019',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2019-importacoes',
      statement: 'Importações brasileiras provenientes da China em 2019 somaram US$ 35,3 bilhões.',
      kind: 'indicator',
      value: 35.3,
      unit: 'US$ Bi',
      period: '2019',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2019-saldo',
      statement: 'Saldo da balança comercial com a China em 2019 foi de US$ 28,1 bilhões.',
      kind: 'indicator',
      value: 28.1,
      unit: 'US$ Bi',
      period: '2019',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2020-exportacoes',
      statement: 'Exportações brasileiras para a China em 2020 somaram US$ 67,8 bilhões.',
      kind: 'indicator',
      value: 67.8,
      unit: 'US$ Bi',
      period: '2020',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2020-importacoes',
      statement: 'Importações brasileiras provenientes da China em 2020 somaram US$ 34,0 bilhões.',
      kind: 'indicator',
      value: 34.0,
      unit: 'US$ Bi',
      period: '2020',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2020-saldo',
      statement: 'Saldo da balança comercial com a China em 2020 foi de US$ 33,8 bilhões.',
      kind: 'indicator',
      value: 33.8,
      unit: 'US$ Bi',
      period: '2020',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2021-exportacoes',
      statement: 'Exportações brasileiras para a China em 2021 somaram US$ 87,9 bilhões.',
      kind: 'indicator',
      value: 87.9,
      unit: 'US$ Bi',
      period: '2021',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2021-importacoes',
      statement: 'Importações brasileiras provenientes da China em 2021 somaram US$ 47,6 bilhões.',
      kind: 'indicator',
      value: 47.6,
      unit: 'US$ Bi',
      period: '2021',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2021-saldo',
      statement: 'Saldo da balança comercial com a China em 2021 foi de US$ 40,3 bilhões.',
      kind: 'indicator',
      value: 40.3,
      unit: 'US$ Bi',
      period: '2021',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2022-exportacoes',
      statement: 'Exportações brasileiras para a China em 2022 somaram US$ 89,7 bilhões.',
      kind: 'indicator',
      value: 89.7,
      unit: 'US$ Bi',
      period: '2022',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2022-importacoes',
      statement: 'Importações brasileiras provenientes da China em 2022 somaram US$ 60,7 bilhões.',
      kind: 'indicator',
      value: 60.7,
      unit: 'US$ Bi',
      period: '2022',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2022-saldo',
      statement: 'Saldo da balança comercial com a China em 2022 foi de US$ 29,0 bilhões.',
      kind: 'indicator',
      value: 29.0,
      unit: 'US$ Bi',
      period: '2022',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2023-exportacoes',
      statement: 'Exportações brasileiras para a China em 2023 somaram US$ 104,3 bilhões.',
      kind: 'indicator',
      value: 104.3,
      unit: 'US$ Bi',
      period: '2023',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2023-importacoes',
      statement: 'Importações brasileiras provenientes da China em 2023 somaram US$ 53,2 bilhões.',
      kind: 'indicator',
      value: 53.2,
      unit: 'US$ Bi',
      period: '2023',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2023-saldo',
      statement: 'Saldo da balança comercial com a China em 2023 foi de US$ 51,1 bilhões.',
      kind: 'indicator',
      value: 51.1,
      unit: 'US$ Bi',
      period: '2023',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2024-exportacoes',
      statement: 'Exportações brasileiras para a China em 2024 somaram US$ 106,1 bilhões.',
      kind: 'indicator',
      value: 106.1,
      unit: 'US$ Bi',
      period: '2024',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2024-importacoes',
      statement: 'Importações brasileiras provenientes da China em 2024 somaram US$ 58,5 bilhões.',
      kind: 'indicator',
      value: 58.5,
      unit: 'US$ Bi',
      period: '2024',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2024-saldo',
      statement: 'Saldo da balança comercial com a China em 2024 foi de US$ 47,6 bilhões.',
      kind: 'indicator',
      value: 47.6,
      unit: 'US$ Bi',
      period: '2024',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2025-exportacoes',
      statement: 'Exportações brasileiras para a China em 2025 somaram US$ 100,0 bilhões.',
      kind: 'indicator',
      value: 100.0,
      unit: 'US$ Bi',
      period: '2025',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2025-importacoes',
      statement: 'Importações brasileiras provenientes da China em 2025 somaram US$ 71,0 bilhões.',
      kind: 'indicator',
      value: 71.0,
      unit: 'US$ Bi',
      period: '2025',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2025-saldo',
      statement: 'Saldo da balança comercial com a China em 2025 foi de US$ 29,0 bilhões.',
      kind: 'indicator',
      value: 29.0,
      unit: 'US$ Bi',
      period: '2025',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2026-exportacoes',
      statement: 'Projeção de exportações brasileiras para a China em 2026 alcança US$ 112,5 bilhões.',
      kind: 'indicator',
      value: 112.5,
      unit: 'US$ Bi',
      period: '2026 (Proj)',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2026-importacoes',
      statement: 'Projeção de importações brasileiras da China em 2026 atinge US$ 74,5 bilhões.',
      kind: 'indicator',
      value: 74.5,
      unit: 'US$ Bi',
      period: '2026 (Proj)',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },
    {
      id: 'china::comercio-historico::2026-saldo',
      statement: 'Projeção de saldo comercial bilateral com a China em 2026 é de US$ 38,0 bilhões.',
      kind: 'indicator',
      value: 38.0,
      unit: 'US$ Bi',
      period: '2026 (Proj)',
      block: 'Balança Comercial',
      sourceId: 'secex-mdic-historico',
      evidenceId: 'china::5'
    },

    // 3. Participação das Commodities Exportadas
    {
      id: 'china::commodity::soja-graos',
      statement: 'Soja em grãos representa 38,5% da pauta exportadora brasileira para a China (US$ 38,5 bilhões).',
      kind: 'indicator',
      value: 38.5,
      unit: '%',
      period: '2026',
      block: 'Composição de Exportações',
      sourceId: 'secex-mdic-2026',
      evidenceId: 'china::6'
    },
    {
      id: 'china::commodity::petroleo-bruto',
      statement: 'Petróleo bruto representa 24,2% da pauta exportadora brasileira para a China (US$ 24,2 bilhões).',
      kind: 'indicator',
      value: 24.2,
      unit: '%',
      period: '2026',
      block: 'Composição de Exportações',
      sourceId: 'secex-mdic-2026',
      evidenceId: 'china::6'
    },
    {
      id: 'china::commodity::minerio-ferro',
      statement: 'Minério de ferro representa 21,8% da pauta exportadora brasileira para a China (US$ 21,8 bilhões).',
      kind: 'indicator',
      value: 21.8,
      unit: '%',
      period: '2026',
      block: 'Composição de Exportações',
      sourceId: 'secex-mdic-2026',
      evidenceId: 'china::6'
    },
    {
      id: 'china::commodity::carne-bovina-aves',
      statement: 'Carne bovina e aves representam 7,8% da pauta exportadora brasileira para a China (US$ 7,8 bilhões).',
      kind: 'indicator',
      value: 7.8,
      unit: '%',
      period: '2026',
      block: 'Composição de Exportações',
      sourceId: 'secex-mdic-2026',
      evidenceId: 'china::6'
    },
    {
      id: 'china::commodity::celulose-madeira',
      statement: 'Celulose e madeira representam 4,7% da pauta exportadora brasileira para a China (US$ 4,7 bilhões).',
      kind: 'indicator',
      value: 4.7,
      unit: '%',
      period: '2026',
      block: 'Composição de Exportações',
      sourceId: 'secex-mdic-2026',
      evidenceId: 'china::6'
    },
    {
      id: 'china::commodity::outros-manufaturados',
      statement: 'Outros produtos manufaturados representam 3,0% da pauta exportadora brasileira para a China (US$ 3,0 bilhões).',
      kind: 'indicator',
      value: 3.0,
      unit: '%',
      period: '2026',
      block: 'Composição de Exportações',
      sourceId: 'secex-mdic-2026',
      evidenceId: 'china::6'
    },

    // 4. Setores de Investimento do Fundo Bilateral
    {
      id: 'china::investimento-setorial::infraestrutura-portos',
      statement: 'Infraestrutura e portos concentram 35% (US$ 7,0 bilhões) dos investimentos do Fundo Brasil-China.',
      kind: 'indicator',
      value: 35,
      unit: '%',
      period: '2026',
      block: 'Investimentos Setoriais',
      sourceId: 'fundo-brasil-china',
      evidenceId: 'china::2'
    },
    {
      id: 'china::investimento-setorial::energia-limpa-transmissao',
      statement: 'Energia limpa e transmissão representam 30% (US$ 6,0 bilhões) dos investimentos do Fundo Brasil-China.',
      kind: 'indicator',
      value: 30,
      unit: '%',
      period: '2026',
      block: 'Investimentos Setoriais',
      sourceId: 'fundo-brasil-china',
      evidenceId: 'china::2'
    },
    {
      id: 'china::investimento-setorial::telecom-data-centers',
      statement: 'Telecom, 5G e Data Centers representam 20% (US$ 4,0 bilhões) dos investimentos do Fundo Brasil-China.',
      kind: 'indicator',
      value: 20,
      unit: '%',
      period: '2026',
      block: 'Investimentos Setoriais',
      sourceId: 'fundo-brasil-china',
      evidenceId: 'china::2'
    },
    {
      id: 'china::investimento-setorial::industria-eletromobilidade',
      statement: 'Indústria e eletromobilidade respondem por 15% (US$ 3,0 bilhões) dos investimentos do Fundo Brasil-China.',
      kind: 'indicator',
      value: 15,
      unit: '%',
      period: '2026',
      block: 'Investimentos Setoriais',
      sourceId: 'fundo-brasil-china',
      evidenceId: 'china::2'
    },

    // 5. Dados Fatuais Documentados
    {
      id: 'china::comercio::concentracao-soja-minerio',
      statement: 'Compras chinesas absorvem quase 80% da soja e quase 70% do minério de ferro exportados pelo Brasil.',
      kind: 'statement',
      period: '1º semestre de 2026',
      block: 'Comércio Exterior',
      sourceId: 'secex-mdic-2026',
      evidenceId: 'china::6'
    },
    {
      id: 'china::infra-digital::parcerias-ia-telecom',
      statement: 'Missão brasileira na China avançou em tratativas para atração de investimentos chineses em internet via satélite, expansão do 5G e implantação de Data Centers de IA no Brasil.',
      kind: 'statement',
      period: 'maio/2026',
      block: 'Tendências Estruturais',
      sourceId: 'ministerio-comunicacoes-2026',
      evidenceId: 'china::4'
    }
  ],

  existingAnalysis: [
    'O crescimento da China em 2026 (5% no 1º trimestre), alicerçado em inovação tecnológica, manufatura avançada e transição energética, aprofunda fortemente a integração com o Brasil. A expansão das compras bilaterais e o novo plano do Fundo Brasil-China 2026-2027 abrem canais estruturantes de investimento asiático direcionados à logística, infraestrutura elétrica e hubs de Data Centers de Inteligência Artificial.',
    'PIB da China mantém ritmo sólido de 5%, ancorado em alta tecnologia, eletrificação e energia limpa.',
    'Corrente de comércio bilateral ultrapassa US$ 170 bilhões, com superávit expressivo para o Brasil.',
    'Fundo Brasil-China 2026-2027 destina bilhões a ferrovias, modernização portuária e malha energética.',
    'Expansão chinesa em IA e telecomunicações fomenta novas oportunidades para infraestruturas elétricas de missão crítica no Brasil.',
    'A China lidera mundialmente a cadeia de veículos elétricos, baterias de lítio e painéis fotovoltaicos, expandindo unidades fabris e infraestrutura no Brasil.',
    'Hipótese estratégica: Aumento expressivo na demanda global de cobre e alumínio pode gerar novas oportunidades para componentes e infraestruturas de recarga e proteção elétrica.',
    'Missões bilaterais articularam atração de gigantes de IA chinesas, cabos submarinos, satélites de baixa órbita e hubs de processamento de dados no território nacional.',
    'Hipótese estratégica: A construção de Data Centers de alta densidade exige instalações elétricas robustas, quadros blindados e sistemas de cabeamento de alta capacidade.',
    'Aprovação de novo plano focado em ferrovias de escoamento, modernização portuária e parques industriais com operações financeiras em moedas locais.',
    'Hipótese estratégica: O aquecimento direto da construção civil pesada e novos galpões logísticos pode demandar materiais elétricos de instalação e acabamento.',
    'Recepção de investimentos diretos focados em estruturas logísticas e matriz energética renovável, acelerando a modernização do parque industrial nacional.',
    'Hipótese estratégica: Oportunidade expressiva no fornecimento de materiais elétricos de instalação e distribuição na construção e ampliação de galpões, portos e plantas industriais.',
    'Salto na capacidade computacional e modernização das redes de telecomunicações do Brasil com cooperação tecnológica asiática.',
    'Hipótese estratégica: A construção de centros de dados exige especificações rigorosas de segurança, proteção contra surtos, cabeamento de alta densidade e quadros elétricos dedicados.',
    'Garantia de volumoso superávit comercial e reservas cambiais, mantendo no entanto alta sensibilidade às oscilações da demanda de Pequim.',
    'Hipótese estratégica: A forte extração mineral e exportação de metais para a Ásia requer acompanhamento estreito sobre a cotação e o abastecimento de cobre e alumínio no mercado doméstico.',
    'Oportunidades em análise: Fornecimento de materiais elétricos de instalação (disjuntores, quadros, conduítes e cabos) para os novos polos industriais, logísticos e portuários financiados pelo Fundo Brasil-China.',
    'Oportunidades em análise: Demanda acelerada por infraestruturas de Data Centers de IA e redes 5G, exigindo componentes de alta confiabilidade, aterramento e proteção elétrica.',
    'Oportunidades em análise: Parcerias com montadoras e desenvolvedoras de energia solar chinesas instaladas no Brasil para fornecimento conjunto de sistemas elétricos prediais e residenciais.',
    'Riscos em análise: Pressão sobre custos e disponibilidade interna de cobre, alumínio e aço devido ao apetite acelerado de compras industriais da China.',
    'Riscos em análise: Concorrência com produtos eletroeletrônicos e componentes importados da Ásia com custo competitivo no varejo brasileiro.',
    'Riscos em análise: Dependência macroeconômica brasileira do ciclo imobiliário e do ritmo fabril chinês para sustentação do superávit externo.',
    'Riscos em análise: Necessidade de qualificação constante de produtos para atender aos novos padrões técnicos de infraestrutura digital e transição energética.'
  ]
};
