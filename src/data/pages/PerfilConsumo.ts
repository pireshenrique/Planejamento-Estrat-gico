import { StrategicPageContext } from './types';

/**
 * PERFIL DE CONSUMO — Cenário Mercadológico
 *
 * Página de inteligência sobre forças de consumo, prioridades de compra,
 * segmentação geracional (gerações e microgerações) e perfis emergentes.
 */
export const PERFIL_CONSUMO_PAGE: StrategicPageContext = {
  pageId: 'perfil-consumo',
  pageTitle: 'Perfil de Consumo',
  theme: 'Cenário Mercadológico',
  subtheme: 'Perfil de Consumo',
  status: 'analyzable',
  description: 'Como o orçamento restrito, o cenário econômico e a estabilidade financeira influenciam escolhas de consumo e os diferentes comportamentos por faixa etária.',

  sources: [
    {
      id: 'nielseniq-fullview-2026',
      name: 'NielsenIQ, Full View 2026',
      dateStr: '2026',
      url: 'https://nielseniq.com/global/pt/insights/analysis/2026/as-cinco-forcas-que-atuam-na-queda-de-volume/',
      type: 'Estudo Global / Pesquisa de Mercado',
      methodologyNote: 'Estudo sobre as forças que atuam no volume de consumo e as respostas dos consumidores.'
    },
    {
      id: 'sebrae-prioridades-2026',
      name: 'Sebrae, Prioridades de Compras 2026',
      dateStr: '2026',
      url: 'https://www.inteligenciademercado.rj.sebrae.com.br/multissetorial/Conheca-as-prioridades-de-compra-do-consumidor-para-2026',
      type: 'Relatório / PDF',
      methodologyNote: 'Conheça as prioridades de compras do consumidor para 2026.'
    },
    {
      id: 'deloitte-perspectivas-2026',
      name: 'Deloitte, Perspectivas 2026',
      dateStr: '2026',
      url: 'https://www2.deloitte.com/br/pt/pages/consumer-business/articles/perspectivas-consumo.html',
      type: 'Relatório Consultoria',
      methodologyNote: 'Análise de tendências do consumidor e varejo.'
    },
    {
      id: 'sebrae-rj-tendencias-2026',
      name: 'Sebrae/RJ, Tendências de Comportamento e Consumo 2026 (base WGSN)',
      dateStr: '2026',
      url: 'https://inteligenciademercado.rj.sebrae.com.br/multissetorial/Confira-o-Guia-de-tendencias-que-moldarao-o-consumo-em-2026',
      type: 'Relatório / PDF',
      methodologyNote: 'Guia de Tendências que Moldarão o Consumo em 2026.'
    },
    {
      id: 'serasa-mosaic-2026',
      name: 'Serasa Experian — Mosaic Insights 2026',
      dateStr: '2026',
      url: 'https://www.serasaexperian.com.br/sala-de-imprensa/servicos-de-marketing/estabilidade-financeira-e-excecao-e-22-concentram-46-da-receita-do-e-commerce-revela-estudo-inedito-da-serasa-experian/',
      type: 'Estudo Demográfico / Crédito'
    },
    {
      id: 'sebrae-geracionais-2026',
      name: 'Sebrae Inteligência de Mercado / Sebrae-RJ',
      dateStr: '2026',
      url: 'https://inteligenciademercado.rj.sebrae.com.br/multissetorial/Perfis-geracionais-e-seus-comportamentos-de-consumo',
      type: 'Relatório / PDF',
      methodologyNote: 'Perfis geracionais e seus comportamentos de consumo.'
    },
    {
      id: 'sebrae-tecnologia-2026',
      name: 'Sebrae Inteligência de Mercado / Sebrae-RJ',
      dateStr: '2026',
      url: 'https://inteligenciademercado.rj.sebrae.com.br/multissetorial/Perfis-tecnologicos-2025',
      type: 'Relatório / PDF',
      methodologyNote: 'Perfis de consumidores de tecnologia.'
    }
  ],

  evidenceIds: [
    'perfil-de-consumo::prioridades-nielseniq-2026',
    'perfil-de-consumo::prioridades-sebrae-2026',
    'perfil-de-consumo::prioridades-sebrae-rj-2026',
    'perfil-de-consumo::perfis-serasa-mosaic-2026',
    'perfil-de-consumo::perfis-sebrae-geracionais-pdf',
    'perfil-de-consumo::perfis-sebrae-tecnologia-pdf',
    'perfil-de-consumo::perfis-sebrae-rj-tendencias-pdf',
    'perfil-de-consumo::perfis-sebrae-prioridades-2026'
  ],

  factualContent: [
    // 1. Indicadores de Comportamento e Orçamento (NielsenIQ)
    {
      id: 'perfil-consumo::indicador::planejam-compras',
      statement: '80% dos consumidores planejam previamente suas compras.',
      kind: 'indicator',
      value: 80,
      unit: '%',
      period: '2026',
      block: 'Indicadores de Comportamento',
      sourceId: 'nielseniq-fullview-2026',
      evidenceId: 'perfil-de-consumo::prioridades-nielseniq-2026'
    },
    {
      id: 'perfil-consumo::indicador::busca-economia',
      statement: '66% dos consumidores buscam opções de menor preço.',
      kind: 'indicator',
      value: 66,
      unit: '%',
      period: '2026',
      block: 'Indicadores de Comportamento',
      sourceId: 'nielseniq-fullview-2026',
      evidenceId: 'perfil-de-consumo::prioridades-nielseniq-2026'
    },
    {
      id: 'perfil-consumo::indicador::escolhem-barato-marca',
      statement: '45% dos consumidores escolhem o mais barato, independentemente da marca.',
      kind: 'indicator',
      value: 45,
      unit: '%',
      period: '2026',
      block: 'Indicadores de Comportamento',
      sourceId: 'nielseniq-fullview-2026',
      evidenceId: 'perfil-de-consumo::prioridades-nielseniq-2026'
    },
    {
      id: 'perfil-consumo::indicador::controle-orcamento',
      statement: '40% dos consumidores acompanham de perto os gastos do orçamento.',
      kind: 'indicator',
      value: 40,
      unit: '%',
      period: '2026',
      block: 'Indicadores de Comportamento',
      sourceId: 'nielseniq-fullview-2026',
      evidenceId: 'perfil-de-consumo::prioridades-nielseniq-2026'
    },
    {
      id: 'perfil-consumo::indicador::concentracao-receita-ecommerce',
      statement: 'Estabilidade financeira é exceção e 22% dos consumidores concentram 46% da receita do e-commerce brasileiro.',
      kind: 'indicator',
      value: 22,
      unit: '%',
      period: '2026',
      block: 'Estabilidade Financeira',
      sourceId: 'serasa-mosaic-2026',
      evidenceId: 'perfil-de-consumo::perfis-serasa-mosaic-2026'
    },

    // 2. Microgerações — Fatos Documentados (Nome, Período, Transição, Tendências, Palavras-Chave)
    {
      id: 'perfil-consumo::microgeracao::silenciosa-boomers',
      statement: 'Microgeração Silenciosa–Boomers compreende os nascidos entre 1940 e 1945, na transição entre a Geração Silenciosa e os Baby Boomers. Tendências: Praticidade, Conforto, Saúde, Segurança. Palavras-chave: Experiência, Conforto, Receptividade.',
      kind: 'statement',
      period: '1940–1945',
      block: 'Microgerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },
    {
      id: 'perfil-consumo::microgeracao::jones',
      statement: 'Geração Jones compreende os nascidos entre 1954 e 1965, na transição entre Baby Boomers e Geração X. Tendências: Qualidade, Longevidade, Consumo consciente. Palavras-chave: Pragmatismo, Exigência, Custo-benefício.',
      kind: 'statement',
      period: '1954–1965',
      block: 'Microgerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },
    {
      id: 'perfil-consumo::microgeracao::xennials',
      statement: 'Microgeração Xennials compreende os nascidos entre 1977 e 1983, na transição entre Geração X e Millennials. Tendências: Vida saudável, Consumo digital com propósito, Valorização da experiência. Palavras-chave: Equilíbrio, Transição analógico-digital, Autenticidade.',
      kind: 'statement',
      period: '1977–1983',
      block: 'Microgerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },
    {
      id: 'perfil-consumo::microgeracao::zillennials',
      statement: 'Microgeração Zillennials compreende os nascidos entre 1993 e 1998, na transição entre Millennials e Geração Z. Tendências: Economia circular, Consumo consciente, Inovação acessível. Palavras-chave: Mobilidade, Praticidade, Autenticidade.',
      kind: 'statement',
      period: '1993–1998',
      block: 'Microgerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },
    {
      id: 'perfil-consumo::microgeracao::zalphas',
      statement: 'Microgeração Zalphas compreende os nascidos entre 2008 e 2012, na transição entre Geração Z e Geração Alpha. Tendências: Tecnologia imersiva, Sustentabilidade, Criatividade digital, Consumo ético. Palavras-chave: Interatividade, Diversidade, Inovação.',
      kind: 'statement',
      period: '2008–2012',
      block: 'Microgerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },

    // 3. Gerações — Fatos Documentados (Nome, Período, Tendências, Palavras-Chave)
    {
      id: 'perfil-consumo::geracao::boomers',
      statement: 'Baby Boomers compreende os nascidos entre 1946 e 1964. Tendências: Saúde, Viagens, Tecnologia para conforto e bem-estar. Palavras-chave: Conforto, Status, Conveniência, Longevidade.',
      kind: 'statement',
      period: '1946–1964',
      block: 'Gerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },
    {
      id: 'perfil-consumo::geracao::gen-x',
      statement: 'Geração X compreende os nascidos entre 1965 e 1980. Tendências: Consumo consciente, Planejamento financeiro, Conveniência. Palavras-chave: Autonomia, Pragmatismo, Família, Estabilidade.',
      kind: 'statement',
      period: '1965–1980',
      block: 'Gerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },
    {
      id: 'perfil-consumo::geracao::millennials',
      statement: 'Millennials (Geração Y) compreende os nascidos entre 1981 e 1996. Tendências: Economia compartilhada, Produtos sustentáveis, Experiências. Palavras-chave: Propósito, Experiência, Sustentabilidade, Flexibilidade.',
      kind: 'statement',
      period: '1981–1996',
      block: 'Gerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },
    {
      id: 'perfil-consumo::geracao::gen-z',
      statement: 'Geração Z compreende os nascidos entre 1997 e 2012. Tendências: Moda sustentável, Tecnologia imersiva, Bens digitais, Saúde e bem-estar mental. Palavras-chave: Diversidade, Propósito, Inovação digital, Inclusão.',
      kind: 'statement',
      period: '1997–2012',
      block: 'Gerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },
    {
      id: 'perfil-consumo::geracao::alpha',
      statement: 'Geração Alpha compreende os nascidos entre 2013 e 2024. Tendências: Interatividade, Personalização extrema, Tecnologias emergentes. Palavras-chave: Conectividade, Gamificação, Inovação precoce, Adaptação.',
      kind: 'statement',
      period: '2013–2024',
      block: 'Gerações',
      sourceId: 'sebrae-geracionais-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-geracionais-pdf'
    },

    // 4. Perfis Emergentes — Fatos Documentados
    {
      id: 'perfil-consumo::perfis-emergentes::nativos-ia',
      statement: 'Perfil Emergente 01: Nativos da IA. Valoriza: IA integrada, Automação, Fluidez. Mapeado no relatório de consumidores de tecnologia.',
      kind: 'statement',
      period: '2026',
      block: 'Perfis Emergentes',
      sourceId: 'sebrae-tecnologia-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-tecnologia-pdf'
    },
    {
      id: 'perfil-consumo::perfis-emergentes::pragmaticos-custo-vida',
      statement: 'Perfil Emergente 02: Pragmáticos do Custo de Vida. Valoriza: Custo-benefício, Transparência, Durabilidade. Mapeado nas prioridades de compra 2026.',
      kind: 'statement',
      period: '2026',
      block: 'Perfis Emergentes',
      sourceId: 'sebrae-prioridades-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-prioridades-2026'
    },
    {
      id: 'perfil-consumo::perfis-emergentes::prateados-conectados',
      statement: 'Perfil Emergente 03: Prateados Conectados. Valoriza: Saúde & longevidade, Interface clara, Atendimento humano. Mapeado no guia de tendências 2026.',
      kind: 'statement',
      period: '2026',
      block: 'Perfis Emergentes',
      sourceId: 'sebrae-rj-tendencias-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-rj-tendencias-pdf'
    },
    {
      id: 'perfil-consumo::perfis-emergentes::consumidor-circular',
      statement: 'Perfil Emergente 04: Consumidor Circular e Regenerativo. Valoriza: Reparabilidade, Baixa pegada de carbono, Eficiência de recursos. Mapeado no guia de tendências 2026.',
      kind: 'statement',
      period: '2026',
      block: 'Perfis Emergentes',
      sourceId: 'sebrae-rj-tendencias-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-rj-tendencias-pdf'
    },
    {
      id: 'perfil-consumo::perfis-emergentes::bem-estar-saude-mental',
      statement: 'Perfil Emergente 05: Buscador de Bem-Estar e Saúde Mental. Valoriza: Redução de fricção, Ergonomia, Sensação de tranquilidade. Mapeado no guia de tendências 2026.',
      kind: 'statement',
      period: '2026',
      block: 'Perfis Emergentes',
      sourceId: 'sebrae-rj-tendencias-2026',
      evidenceId: 'perfil-de-consumo::perfis-sebrae-rj-tendencias-pdf'
    }
  ],

  existingAnalysis: [
    'O aumento do endividamento, as altas taxas de juros e o crédito mais restrito afetam diretamente o poder de compra da maior parte da população. Com um orçamento mais apertado e novas necessidades de consumo — como conectividade e serviços por assinatura —, o espaço para o varejo tradicional diminui.',
    'Menos sobra no orçamento exige um planejamento mais rigoroso. O consumidor torna-se mais seletivo e pragmático, equilibrando qualidade e custo de acordo com seu momento financeiro.',
    'Endividamento, custo de vida elevado e novas prioridades de gasto tornam o consumidor mais cauteloso. Crescem o planejamento prévio das compras, a busca por preços mais baixos e o controle mais atento do orçamento disponível.',
    'A instabilidade financeira cria comportamentos distintos. Quem possui maior estabilidade tende a ser menos sensível a preço, focando em qualidade e inovação. Quem vive sob pressão orçamentária desenvolve um consumo defensivo, marcado pelo alto planejamento, substituição de marcas e forte dependência de promoções.',
    'A idade isolada não explica o comportamento de consumo. Fatores como estabilidade financeira, estrutura familiar, composição da moradia e o momento de vida de cada indivíduo alteram drasticamente prioridades, restrições e preferências dentro de uma mesma faixa etária.',
    'Síntese Silenciosa–Boomers: Estabilidade e segurança com maior receptividade à modernização. Valoriza qualidade e valor e, embora mantenha uma postura cautelosa, mostra abertura a inovações que ampliem conforto e bem-estar.',
    'Síntese Geração Jones: Qualidade e status sob uma lógica mais pragmática, individualista e crítica. Tende a buscar produtos de alta qualidade, economiza quando necessário e compara marcas e preços antes da compra.',
    'Síntese Xennials: Equilíbrio entre a estabilidade analógica e a fluidez digital, com consumo consciente e pragmático. Valoriza marcas autênticas e transparentes, priorizando funcionalidade e benefícios claros.',
    'Síntese Zillennials: Busca por autenticidade, sustentabilidade e inovação com forte senso de realidade financeira. Comportamento híbrido entre a ambição millennial e a cautela pragmática da Geração Z.',
    'Síntese Zalphas: Imersão digital precoce, forte consciência socioambiental e cocriação de experiências. Influenciam decisões de compra familiares desde cedo por meio de conteúdos e plataformas interativas.',
    'Caracterização Baby Boomers: Reputação, conforto e qualidade de vida. Consumidor frequentemente fiel, que busca marcas consolidadas, durabilidade e benefícios tangíveis.',
    'Caracterização Geração X: Pragmatismo, autonomia e busca por valor. Forte foco em equilíbrio entre trabalho e vida pessoal, planejamento financeiro e consumo funcional.',
    'Caracterização Millennials: Propósito, experiência e sustentabilidade. Busca alinhamento de valores com marcas, priorizando flexibilidade, inovação digital e responsabilidade social.',
    'Caracterização Geração Z: Hiperconectividade, diversidade e pragmatismo financeiro. Consumo pautado em autenticidade, canais digitais e causas ambientais e sociais.',
    'Caracterização Geração Alpha: Conectividade, personalização e interatividade desde a infância. Consumo fortemente guiado por tecnologias emergentes e influência na dinâmica familiar.',
    'Hipótese de leitura para Lorenzetti — Nativos da IA: Pode abrir oportunidades para produtos conectados (IoT) com controle por voz, automação residencial e integração com assistentes virtuais.',
    'Hipótese de leitura para Lorenzetti — Pragmáticos do Custo de Vida: Pode reforçar a demanda por produtos com durabilidade comprovada, facilidade de manutenção e excelente relação custo-benefício.',
    'Hipótese de leitura para Lorenzetti — Prateados Conectados: Pode demandar acompanhamento no desenvolvimento de produtos com ergonomia facilitada, comandos visíveis e manuais intuitivos.',
    'Hipótese de leitura para Lorenzetti — Consumidor Circular: Pode valorizar certificações ambientais, disponibilidade de peças de reposição e eficiência no consumo de água e energia.',
    'Hipótese de leitura para Lorenzetti — Bem-Estar e Saúde Mental: Pode impulsionar produtos que transformem o banho e o ambiente doméstico em espaços de relaxamento, descompressão e conforto sensorial.'
  ]
};
