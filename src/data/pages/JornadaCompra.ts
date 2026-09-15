import { StrategicPageContext } from './types';

/**
 * JORNADA DE COMPRA — Cenário Mercadológico
 *
 * Conteúdo extraído de src/components/cenario-mercadologico/JornadaExperienciaView.tsx
 * Nenhum número foi alterado, arredondado ou completado. Fatos sem fonte
 * explícita na página não foram incluídos.
 *
 * Três blocos, três estudos independentes. Percentuais de blocos diferentes
 * NÃO são comparáveis entre si (perguntas e amostras distintas).
 */
export const JORNADA_COMPRA_PAGE: StrategicPageContext = {
  pageId: 'jornada-compra',
  portalRouteId: "mer-jornada",
  pageTitle: 'Jornada de Compra',
  theme: 'Cenário Mercadológico',
  subtheme: 'Jornada de Compra',
  status: 'analyzable',
  description:
    'Como o consumidor pesquisa, compara, valida informações e constrói sua decisão de compra.',

  sources: [
    {
      id: 'globo-casa-construcao-2025',
      name: 'Globo · Casa & Construção 2025',
      dateStr: '2025',
      url: 'https://gente.globo.com/tijolo-a-tijolo-um-estudo-sobre-decisoes-que-moldam-o-lar.ghtml',
      type: 'Estudo proprietário',
      methodologyNote:
        'Considera como reforma desde ações simples, como pintar uma parede, até intervenções mais complexas, como trocar pisos ou azulejos.'
    },
    {
      id: 'fundacao-dados-2026',
      name: 'Fundação de Dados',
      dateStr: '04/03/2026',
      url: 'https://fundacaodedados.com.br/2026/03/04/consumidores-pesquisam-materiais-de-construcao-combinando-lojas-fisicas-e-virtuais-youtube-e-a-principal-midia-social/',
      type: 'Pesquisa de mercado',
      methodologyNote:
        'Considera materiais de construção de maneira geral durante o planejamento da obra/reforma. A própria fonte ressalta que os resultados podem variar quando analisados produtos específicos.'
    },
    {
      id: 'opinion-box-octadesk-cx-2026',
      name: 'Opinion Box + Octadesk · CX Trends 2026',
      dateStr: '30/04/2026',
      url: 'https://blog.opinionbox.com/tendencias-de-customer-experience/',
      type: 'Estudo de customer experience',
      methodologyNote:
        '11ª edição, mais de 2 mil respondentes de diferentes regiões e classes sociais do Brasil. Indicadores correspondem a perguntas e cenários distintos; percentuais de perguntas diferentes não devem ser somados entre si.'
    }
  ],

  evidenceIds: [
    'ev-globo-casa-construcao-2025',
    'ev-fundacao-dados-2026',
    'ev-opinion-box-octadesk-cx-trends-2026'
  ],

  factualContent: [
    // ───────────────────────────────────────────────────────────────
    // BLOCO 01 — INTENÇÃO E PLANEJAMENTO (Globo · Casa & Construção 2025)
    // ───────────────────────────────────────────────────────────────
    {
      id: 'jornada-compra::intencao::busca-melhorar-lar',
      statement: '86% dos consumidores buscam constantemente novas formas de melhorar o lar.',
      kind: 'indicator', value: 86, unit: '%', period: '2025',
      block: '01 · Intenção e Planejamento',
      sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025'
    },
    {
      id: 'jornada-compra::intencao::obra-12-meses',
      statement: '82% realizaram alguma obra ou reforma no imóvel nos últimos 12 meses.',
      kind: 'indicator', value: 82, unit: '%', period: '2025',
      block: '01 · Intenção e Planejamento',
      sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025'
    },

    // Perfil de quem pretende reformar — IDADE
    { id: 'jornada-compra::intencao::idade-18-24', statement: 'Entre quem pretende reformar nos próximos 12 meses, 21% têm de 18 a 24 anos.', kind: 'distribution', value: 21, unit: '%', group: 'Idade de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::idade-25-34', statement: 'Entre quem pretende reformar nos próximos 12 meses, 29% têm de 25 a 34 anos — a faixa etária mais presente.', kind: 'distribution', value: 29, unit: '%', group: 'Idade de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::idade-35-44', statement: 'Entre quem pretende reformar nos próximos 12 meses, 13% têm de 35 a 44 anos.', kind: 'distribution', value: 13, unit: '%', group: 'Idade de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::idade-45-54', statement: 'Entre quem pretende reformar nos próximos 12 meses, 20% têm de 45 a 54 anos.', kind: 'distribution', value: 20, unit: '%', group: 'Idade de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::idade-55-65', statement: 'Entre quem pretende reformar nos próximos 12 meses, 13% têm de 55 a 65 anos.', kind: 'distribution', value: 13, unit: '%', group: 'Idade de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::idade-66-mais', statement: 'Entre quem pretende reformar nos próximos 12 meses, 4% têm 66 anos ou mais.', kind: 'distribution', value: 4, unit: '%', group: 'Idade de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },

    // Perfil de quem pretende reformar — REGIÃO
    { id: 'jornada-compra::intencao::regiao-sudeste', statement: 'O Sudeste concentra 48% da intenção de reforma para os próximos 12 meses.', kind: 'distribution', value: 48, unit: '%', group: 'Região de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::regiao-nordeste', statement: 'O Nordeste concentra 24% da intenção de reforma para os próximos 12 meses.', kind: 'distribution', value: 24, unit: '%', group: 'Região de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::regiao-sul', statement: 'O Sul concentra 17% da intenção de reforma para os próximos 12 meses.', kind: 'distribution', value: 17, unit: '%', group: 'Região de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::regiao-norte', statement: 'O Norte concentra 6% da intenção de reforma para os próximos 12 meses.', kind: 'distribution', value: 6, unit: '%', group: 'Região de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::regiao-centro-oeste', statement: 'O Centro-Oeste concentra 5% da intenção de reforma para os próximos 12 meses.', kind: 'distribution', value: 5, unit: '%', group: 'Região de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },

    // Perfil — CLASSE SOCIAL e GÊNERO
    { id: 'jornada-compra::intencao::classe-ab', statement: 'Classes A e B representam 42% de quem pretende reformar nos próximos 12 meses.', kind: 'distribution', value: 42, unit: '%', group: 'Classe social de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::classe-c', statement: 'A classe C representa 41% de quem pretende reformar nos próximos 12 meses.', kind: 'distribution', value: 41, unit: '%', group: 'Classe social de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::classe-d', statement: 'A classe D representa 17% de quem pretende reformar nos próximos 12 meses.', kind: 'distribution', value: 17, unit: '%', group: 'Classe social de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::genero-mulher', statement: 'Mulheres representam 52% de quem pretende reformar nos próximos 12 meses.', kind: 'distribution', value: 52, unit: '%', group: 'Gênero de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::genero-homem', statement: 'Homens representam 48% de quem pretende reformar nos próximos 12 meses.', kind: 'distribution', value: 48, unit: '%', group: 'Gênero de quem pretende reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },

    // Motivos da reforma
    { id: 'jornada-compra::intencao::motivo-conforto', statement: 'Melhorar conforto ou acessibilidade é motivo de reforma para 42% dos consumidores.', kind: 'ranking', value: 42, unit: '%', group: 'Motivos para reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::motivo-estetica', statement: 'Melhorar a estética é motivo de reforma para 41% dos consumidores.', kind: 'ranking', value: 41, unit: '%', group: 'Motivos para reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::motivo-modernizar', statement: 'Renovar ou modernizar o ambiente é motivo de reforma para 39% dos consumidores.', kind: 'ranking', value: 39, unit: '%', group: 'Motivos para reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::motivo-valorizacao', statement: 'Valorização do imóvel é motivo de reforma para 27% dos consumidores.', kind: 'ranking', value: 27, unit: '%', group: 'Motivos para reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::motivo-conserto', statement: 'Conserto emergencial (vazamentos, rachaduras e infiltrações) é motivo de reforma para 20% dos consumidores.', kind: 'ranking', value: 20, unit: '%', group: 'Motivos para reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::motivo-estrutural', statement: 'Reforma geral ou estrutural / prevenção é motivo de reforma para 18% dos consumidores.', kind: 'ranking', value: 18, unit: '%', group: 'Motivos para reformar', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },

    // Cômodos em foco
    { id: 'jornada-compra::intencao::comodo-quarto', statement: 'O quarto é o ambiente mais planejado para reforma nos próximos 12 meses, com 42%.', kind: 'ranking', value: 42, unit: '%', group: 'Ambientes planejados para reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::comodo-cozinha', statement: 'A cozinha é ambiente planejado para reforma por 36% dos consumidores.', kind: 'ranking', value: 36, unit: '%', group: 'Ambientes planejados para reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::comodo-banheiro', statement: 'O banheiro é ambiente planejado para reforma por 33% dos consumidores.', kind: 'ranking', value: 33, unit: '%', group: 'Ambientes planejados para reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::comodo-sala', statement: 'A sala é ambiente planejado para reforma por 31% dos consumidores.', kind: 'ranking', value: 31, unit: '%', group: 'Ambientes planejados para reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::comodo-imovel-inteiro', statement: 'O imóvel inteiro é objeto de reforma planejada por 20% dos consumidores.', kind: 'ranking', value: 20, unit: '%', group: 'Ambientes planejados para reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::comodo-quintal', statement: 'Quintal ou jardim é ambiente planejado para reforma por 17% dos consumidores.', kind: 'ranking', value: 17, unit: '%', group: 'Ambientes planejados para reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::comodo-lavanderia', statement: 'A lavanderia é ambiente planejado para reforma por 14% dos consumidores.', kind: 'ranking', value: 14, unit: '%', group: 'Ambientes planejados para reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::comodo-escritorio', statement: 'O escritório é ambiente planejado para reforma por 8% dos consumidores.', kind: 'ranking', value: 8, unit: '%', group: 'Ambientes planejados para reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::comodo-outro', statement: 'Outros cômodos são objeto de reforma planejada por 4% dos consumidores.', kind: 'ranking', value: 4, unit: '%', group: 'Ambientes planejados para reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },

    // Materiais nos planos de compra
    { id: 'jornada-compra::intencao::material-cimento', statement: 'Cimento e argamassa estão previstos nos planos de compra de 80% de quem vai reformar.', kind: 'ranking', value: 80, unit: '%', group: 'Materiais previstos para a reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::material-tinta', statement: 'Tinta está prevista nos planos de compra de 77% de quem vai reformar.', kind: 'ranking', value: 77, unit: '%', group: 'Materiais previstos para a reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::material-pisos', statement: 'Pisos e revestimentos estão previstos nos planos de compra de 61% de quem vai reformar.', kind: 'ranking', value: 61, unit: '%', group: 'Materiais previstos para a reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::material-hidraulica', statement: 'Materiais hidráulicos estão previstos nos planos de compra de 38% de quem vai reformar.', kind: 'ranking', value: 38, unit: '%', group: 'Materiais previstos para a reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::material-moveis', statement: 'Móveis planejados estão previstos nos planos de compra de 33% de quem vai reformar.', kind: 'ranking', value: 33, unit: '%', group: 'Materiais previstos para a reforma', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },

    // Atenção a promoções
    { id: 'jornada-compra::intencao::promocoes-geral', statement: '78% dos consumidores estão atentos às promoções de materiais de construção.', kind: 'indicator', value: 78, unit: '%', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::promocoes-classe-a', statement: 'Na classe A, 82% estão atentos às promoções de materiais de construção.', kind: 'distribution', value: 82, unit: '%', group: 'Atenção a promoções por classe social', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::promocoes-classe-b', statement: 'Na classe B, 79% estão atentos às promoções de materiais de construção.', kind: 'distribution', value: 79, unit: '%', group: 'Atenção a promoções por classe social', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::promocoes-classe-c', statement: 'Na classe C, 73% estão atentos às promoções de materiais de construção — o menor índice entre as classes.', kind: 'distribution', value: 73, unit: '%', group: 'Atenção a promoções por classe social', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::promocoes-classe-d', statement: 'Na classe D, 84% estão atentos às promoções de materiais de construção — o maior índice entre as classes.', kind: 'distribution', value: 84, unit: '%', group: 'Atenção a promoções por classe social', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },

    // Janela de compra
    { id: 'jornada-compra::intencao::janela-6-meses', statement: '70% pretendem comprar os materiais da reforma em até 6 meses.', kind: 'indicator', value: 70, unit: '%', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::janela-ate-3m', statement: '37% pretendem comprar os materiais da reforma em até 3 meses.', kind: 'distribution', value: 37, unit: '%', group: 'Intenção de compra ao longo do tempo', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::janela-4-6m', statement: '33% pretendem comprar os materiais da reforma entre 4 e 6 meses.', kind: 'distribution', value: 33, unit: '%', group: 'Intenção de compra ao longo do tempo', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::janela-7-9m', statement: '12% pretendem comprar os materiais da reforma entre 7 e 9 meses.', kind: 'distribution', value: 12, unit: '%', group: 'Intenção de compra ao longo do tempo', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::janela-10-12m', statement: '19% pretendem comprar os materiais da reforma entre 10 e 12 meses.', kind: 'distribution', value: 19, unit: '%', group: 'Intenção de compra ao longo do tempo', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },

    // Instalação
    { id: 'jornada-compra::intencao::instalacao-gostariam', statement: '74% gostariam que as lojas oferecessem serviços de instalação.', kind: 'indicator', value: 74, unit: '%', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },
    { id: 'jornada-compra::intencao::instalacao-preferem', statement: '58% preferem comprar em lojas que oferecem serviços de instalação.', kind: 'indicator', value: 58, unit: '%', period: '2025', block: '01 · Intenção e Planejamento', sourceId: 'globo-casa-construcao-2025', evidenceId: 'ev-globo-casa-construcao-2025' },

    // ───────────────────────────────────────────────────────────────
    // BLOCO 02 — PESQUISA E COMPARAÇÃO (Fundação de Dados · 2026)
    // ───────────────────────────────────────────────────────────────
    { id: 'jornada-compra::pesquisa::loja-fisica-2025', metadata: { valorHistorico: 69.7 }, statement: '69,7% utilizam lojas físicas para pesquisar e comparar materiais de construção em 2025 — mesmo nível da média de 2022–2024 (69,7%).', kind: 'comparison', value: 69.7, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::ecommerce-2025', metadata: { valorHistorico: 41.2 }, statement: 'Sites e e-commerces de materiais de construção são usados por 34,0% em 2025, contra 41,2% na média de 2022–2024 — queda de 7,2 pontos.', kind: 'comparison', value: 34.0, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::youtube-2025', metadata: { valorHistorico: 34.2 }, statement: 'O YouTube é usado por 25,5% em 2025, contra 34,2% na média de 2022–2024 — queda de 8,7 pontos.', kind: 'comparison', value: 25.5, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::sites-fabricantes-2025', metadata: { valorHistorico: 31.3 }, statement: 'Sites das empresas fabricantes são usados por 24,1% em 2025, contra 31,3% na média de 2022–2024 — queda de 7,2 pontos.', kind: 'comparison', value: 24.1, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::instagram-2025', metadata: { valorHistorico: 24.1 }, statement: 'O Instagram é usado por 24,7% em 2025, contra 24,1% na média de 2022–2024.', kind: 'comparison', value: 24.7, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::pinterest-2025', metadata: { valorHistorico: 15.9 }, statement: 'O Pinterest é usado por 15,8% em 2025, contra 15,9% na média de 2022–2024.', kind: 'comparison', value: 15.8, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::apps-2025', metadata: { valorHistorico: 17.6 }, statement: 'Aplicativos de construção e reforma são usados por 15,3% em 2025, contra 17,6% na média de 2022–2024.', kind: 'comparison', value: 15.3, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::tabloides-2025', metadata: { valorHistorico: 14.0 }, statement: 'Tablóides e folhetos de ofertas são usados por 14,6% em 2025, contra 14,0% na média de 2022–2024.', kind: 'comparison', value: 14.6, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::tiktok-2025', statement: 'O TikTok é usado por 14,5% em 2025; não constava entre os 10 mais citados na média histórica de 2022–2024.', kind: 'comparison', value: 14.5, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::tv-2025', metadata: { valorHistorico: 14.1 }, statement: 'Programas de TV sobre decoração, reforma e construção são usados por 12,6% em 2025, contra 14,1% na média de 2022–2024.', kind: 'comparison', value: 12.6, unit: '%', group: 'Meios de pesquisa e comparação', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::facebook-historico', metadata: { valorHistorico: 16.3 }, statement: 'O Facebook aparecia com 16,3% na média de 2022–2024 e não consta entre os 10 mais citados em 2025.', kind: 'comparison', value: 16.3, unit: '%', group: 'Meios de pesquisa e comparação', period: 'média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },

    { id: 'jornada-compra::pesquisa::media-meios-2025', statement: 'A média de meios consultados durante a pesquisa caiu de 3,8 (média 2022–2024) para 2,9 em 2025.', kind: 'comparison', value: 2.9, unit: 'meios', period: '2025 vs média 2022–2024', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::media-meios-classe-a', statement: 'Consumidores da classe A consultam 4,4 meios em média durante a pesquisa.', kind: 'distribution', value: 4.4, unit: 'meios', group: 'Média de meios consultados por classe', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::media-meios-classe-b', statement: 'Consumidores da classe B consultam 3,2 meios em média durante a pesquisa.', kind: 'distribution', value: 3.2, unit: 'meios', group: 'Média de meios consultados por classe', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::media-meios-classe-c', statement: 'Consumidores da classe C consultam 2,6 meios em média durante a pesquisa.', kind: 'distribution', value: 2.6, unit: 'meios', group: 'Média de meios consultados por classe', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },

    // Matriz por classe social
    { id: 'jornada-compra::pesquisa::matriz-loja-fisica', metadata: { classeA: 62.9, classeB: 66.2, classeC: 71.9 }, statement: 'A loja física é usada para pesquisa por 62,9% da classe A, 66,2% da classe B e 71,9% da classe C — única modalidade que cresce nas classes mais baixas.', kind: 'distribution', group: 'Meios de pesquisa por classe social', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::matriz-ecommerce', metadata: { classeA: 47.8, classeB: 39.1, classeC: 30.7 }, statement: 'Sites e e-commerces são usados para pesquisa por 47,8% da classe A, 39,1% da classe B e 30,7% da classe C.', kind: 'distribution', group: 'Meios de pesquisa por classe social', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::matriz-sites-fabricantes', metadata: { classeA: 40.4, classeB: 30.5, classeC: 19.9 }, statement: 'Sites dos fabricantes são usados para pesquisa por 40,4% da classe A, 30,5% da classe B e 19,9% da classe C.', kind: 'distribution', group: 'Meios de pesquisa por classe social', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::matriz-youtube', metadata: { classeA: 38.5, classeB: 31.1, classeC: 22.0 }, statement: 'O YouTube é usado para pesquisa por 38,5% da classe A, 31,1% da classe B e 22,0% da classe C.', kind: 'distribution', group: 'Meios de pesquisa por classe social', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::matriz-instagram', metadata: { classeA: 35.6, classeB: 29.6, classeC: 21.6 }, statement: 'O Instagram é usado para pesquisa por 35,6% da classe A, 29,6% da classe B e 21,6% da classe C.', kind: 'distribution', group: 'Meios de pesquisa por classe social', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },
    { id: 'jornada-compra::pesquisa::matriz-apps', metadata: { classeA: 36.9, classeB: 17.2, classeC: 13.0 }, statement: 'Aplicativos de construção e reforma são usados para pesquisa por 36,9% da classe A, 17,2% da classe B e 13,0% da classe C.', kind: 'distribution', group: 'Meios de pesquisa por classe social', period: '2025', block: '02 · Pesquisa e Comparação', sourceId: 'fundacao-dados-2026', evidenceId: 'ev-fundacao-dados-2026' },

    // ───────────────────────────────────────────────────────────────
    // BLOCO 03 — CONFIANÇA E DECISÃO (Opinion Box + Octadesk · CX Trends 2026)
    // ───────────────────────────────────────────────────────────────
    { id: 'jornada-compra::confianca::criterio-qualidade', statement: 'Qualidade do produto é citada como principal fator na decisão por 22% dos consumidores.', kind: 'ranking', value: 22, unit: '%', group: 'Principal critério na decisão de compra', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::criterio-preco', statement: 'Preço baixo é citado como principal fator na decisão por 19% dos consumidores.', kind: 'ranking', value: 19, unit: '%', group: 'Principal critério na decisão de compra', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::criterio-frete-gratis', statement: 'Frete grátis é citado como principal fator na decisão por 13% dos consumidores.', kind: 'ranking', value: 13, unit: '%', group: 'Principal critério na decisão de compra', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::criterio-confianca-marca', statement: 'Confiança na marca é citada como principal fator na decisão por 10% dos consumidores.', kind: 'ranking', value: 10, unit: '%', group: 'Principal critério na decisão de compra', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::criterio-descontos', statement: 'Descontos são citados como principal fator na decisão por 6% dos consumidores.', kind: 'ranking', value: 6, unit: '%', group: 'Principal critério na decisão de compra', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },

    { id: 'jornada-compra::confianca::desempate-frete', statement: 'Quando duas ofertas têm o mesmo preço, 61% consideram o valor do frete para desempatar.', kind: 'indicator', value: 61, unit: '%', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::desempate-experiencia', statement: 'Quando duas ofertas têm o mesmo preço, 54% consideram a experiência anterior com a empresa para desempatar.', kind: 'indicator', value: 54, unit: '%', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },

    { id: 'jornada-compra::confianca::interrompe-frete-alto', statement: 'Frete alto pode fazer 65% dos consumidores abandonarem uma alternativa já considerada.', kind: 'ranking', value: 65, unit: '%', group: 'Fatores que interrompem a compra', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::interrompe-falta-confianca', statement: 'Falta de confiança na empresa pode fazer 56% dos consumidores abandonarem uma alternativa já considerada.', kind: 'ranking', value: 56, unit: '%', group: 'Fatores que interrompem a compra', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::interrompe-avaliacao-empresa', statement: 'Avaliações negativas da empresa podem fazer 39% dos consumidores abandonarem uma alternativa já considerada.', kind: 'ranking', value: 39, unit: '%', group: 'Fatores que interrompem a compra', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::interrompe-avaliacao-produto', statement: 'Avaliações negativas do produto podem fazer 39% dos consumidores abandonarem uma alternativa já considerada.', kind: 'ranking', value: 39, unit: '%', group: 'Fatores que interrompem a compra', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },

    { id: 'jornada-compra::confianca::boa-experiencia-preferencia', statement: '60% dão preferência a comprar de marcas que oferecem boas experiências.', kind: 'indicator', value: 60, unit: '%', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::criticam-marca', statement: '63% criticam a marca após uma experiência ruim (soma de "concordo" e "concordo totalmente").', kind: 'indicator', value: 63, unit: '%', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::relato-proximo', statement: '49% podem deixar de consumir após relato negativo de pessoa próxima (soma de "concordo" e "concordo totalmente").', kind: 'indicator', value: 49, unit: '%', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' },
    { id: 'jornada-compra::confianca::reclamacoes-redes', statement: '70% evitam comprar ao ver reclamações nas redes sociais (soma de "concordo" e "concordo totalmente").', kind: 'indicator', value: 70, unit: '%', period: '2026', block: '03 · Confiança e Decisão', sourceId: 'opinion-box-octadesk-cx-2026', evidenceId: 'ev-opinion-box-octadesk-cx-trends-2026' }
  ],

  // Leituras já escritas pela equipe. Contexto interpretativo — NÃO são fatos.
  existingAnalysis: [
    'Conforto, estética, modernização e manutenção ajudam a iniciar reformas. A partir dessa necessidade, o consumidor define ambientes, materiais, prazo de compra e avalia elementos que podem facilitar a execução.',
    'Os dados indicam uma relação ativa com o imóvel: buscar melhorias e realizar intervenções no lar já fazem parte da rotina de grande parte dos consumidores.',
    'A decisão de reformar parte de necessidades diferentes e se materializa na escolha dos ambientes que receberão intervenção.',
    'Conforto ou acessibilidade, estética e modernização lideram os motivos para reformar. Entre os ambientes planejados, quarto aparece em primeiro lugar, seguido por cozinha e banheiro.',
    'Cimento/argamassa, tinta e pisos ou revestimentos aparecem com maior presença nos planos de compra. Materiais hidráulicos estão previstos por 38% do público analisado.',
    'A atenção a promoções permanece elevada em todas as classes, variando de 73% na classe C a 84% na classe D.',
    'A intenção de compra se concentra nos primeiros seis meses: 37% pretendem comprar em até 3 meses e 33% entre 4 e 6 meses.',
    'O planejamento da reforma combina diferentes motivações, definição dos ambientes e materiais, prazo de compra e atenção a promoções.',
    'Em materiais mais técnicos, como hidráulica, a compra pode envolver não apenas a escolha do produto, mas também a forma como ele será instalado. Por isso, serviços associados à instalação passam a fazer parte da avaliação da oferta.',
    'A preferência por lojas que oferecem instalação indica que, para parte dos consumidores, a conveniência de resolver produto e serviço no mesmo processo também pode influenciar onde realizar a compra.',
    'A pesquisa de materiais de construção acontece em múltiplos canais, com a loja física ainda no centro.',
    'A loja física permanece como principal referência, enquanto sites/e-commerces, YouTube, sites dos fabricantes e Instagram ampliam os pontos de contato utilizados durante a pesquisa.',
    'A loja física lidera nas três classes, enquanto sites/e-commerces, sites dos fabricantes e outros meios digitais apresentam maior participação entre consumidores da classe A.',
    'O site do fabricante aparece entre os meios utilizados para pesquisa e comparação, com maior presença na classe A.',
    'Depois de pesquisar e comparar alternativas, o consumidor ainda avalia qualidade, preço, custos associados, confiança e experiências anteriores. Esses fatores podem confirmar a escolha, desempatar ofertas semelhantes ou interromper a compra.',
    'Quando o preço deixa de diferenciar as alternativas, o custo do frete e a experiência já vivida com a empresa ganham peso no desempate.',
    'Encontrar uma alternativa adequada não garante a compra. Custos adicionais, falta de confiança e avaliações negativas podem interromper a decisão mesmo quando o consumidor já avançou na escolha.',
    'Experiências ruins podem ultrapassar a relação entre consumidor e marca: quando compartilhadas, podem afetar a percepção e a decisão de compra de outras pessoas.',
    'Qualidade, preço, confiança e experiência ajudam a confirmar a escolha, enquanto custos adicionais, desconfiança e avaliações negativas podem interrompê-la. A experiência vivida depois da compra passa então a influenciar novas jornadas.'
  ]
};
