import { Evidence } from '../../components/layout/EvidenceCard';

/**
 * FONTES E EVIDÊNCIAS — PRIORIDADES E CRITÉRIOS DE ESCOLHA
 * Pergunta central: "O que pesa na decisão de compra do consumidor brasileiro?"
 */
export const PRIORIDADES_EVIDENCES: Evidence[] = [
  // 1. NIELSENIQ / NIQ
  {
    id: 'prioridades-nielseniq-2026',
    tag: 'Notícia / Estudo Online',
    source: 'NielsenIQ / NIQ',
    dateStr: '2026',
    title: 'Pressão sobre o orçamento amplia planejamento e estratégias de economia',
    headline: 'As cinco forças que atuam na queda de volume',
    summary: 'Endividamento, custo de vida elevado e novas prioridades de gasto tornam o consumidor mais cauteloso. Crescem o planejamento prévio das compras, a busca por preços mais baixos e o controle mais atento do orçamento disponível.',
    isPdf: false,
    url: 'https://nielseniq.com/global/pt/insights/analysis/2026/as-cinco-forcas-que-atuam-na-queda-de-volume/',
    actionLabel: 'ACESSAR FONTE'
  },
  // 2. SEBRAE/RJ — CONHEÇA AS PRIORIDADES DE COMPRAS 2026
  {
    id: 'prioridades-sebrae-2026',
    tag: 'Relatório / PDF',
    source: 'Sebrae/RJ — Inteligência de Mercado',
    dateStr: '2026',
    title: 'Racionalidade, valor e confiança ganham peso nas escolhas de consumo',
    headline: 'Conheça as prioridades de compras do consumidor para 2026',
    summary: 'O consumidor de 2026 tende a equilibrar desejo por experiências com maior cautela orçamentária. Planejamento, comparação, custo-benefício, qualidade, conveniência, transparência e confiança passam a ter maior peso nas escolhas.',
    isPdf: true,
    author: 'Sebrae Inteligência de Mercado (26 p.)',
    fileName: 'Conheça as prioridades de compras do consumidor para 2026.pdf',
    pdfUrl: '/Conheça as prioridades de compras do consumidor para 2026.pdf',
    downloadLabel: 'BAIXAR PDF ORIGINAL',
    secondaryActionLabel: 'ACESSAR PÁGINA DA FONTE',
    pageUrl: 'https://www.inteligenciademercado.rj.sebrae.com.br/multissetorial/Conheca-as-prioridades-de-compra-do-consumidor-para-2026'
  },
  // 3. SEBRAE/RJ — GUIA DE TENDÊNCIAS 2026
  {
    id: 'prioridades-sebrae-rj-2026',
    tag: 'Relatório / PDF',
    source: 'Sebrae/RJ — Inteligência de Mercado',
    dateStr: '2026',
    title: 'Estágios de vida, comportamento e novas demandas também influenciam critérios de escolha',
    headline: 'Guia de Tendências que Moldarão o Consumo em 2026',
    summary: 'Mudanças em estágio de vida, bem-estar, acessibilidade, sustentabilidade e comportamento ampliam a diversidade de necessidades e ajudam a explicar por que diferentes consumidores atribuem pesos distintos aos mesmos critérios de compra.',
    isPdf: true,
    author: 'Mara Godoy e Tayná Arruda (Sebrae/RJ, 80 p., ISBN 978-65-5818-852-0)',
    fileName: 'Guiadetendncias2026v9.pdf',
    pdfUrl: '/Guiadetendncias2026v9.pdf',
    downloadLabel: 'BAIXAR PDF ORIGINAL',
    secondaryActionLabel: 'ACESSAR PÁGINA DA FONTE',
    pageUrl: 'https://inteligenciademercado.rj.sebrae.com.br/multissetorial/Confira-o-Guia-de-tendencias-que-moldarao-o-consumo-em-2026'
  }
];

/**
 * FONTES E EVIDÊNCIAS — PERFIS E CONTEXTOS DE CONSUMO
 * Pergunta central: "Por que consumidores diferentes apresentam necessidades, comportamentos e jornadas diferentes?"
 */
export const PERFIS_EVIDENCES: Evidence[] = [
  // 1. SERASA EXPERIAN — MOSAIC INSIGHTS 2026
  {
    id: 'perfis-serasa-mosaic-2026',
    tag: 'Notícia / Estudo Online',
    source: 'Serasa Experian — Mosaic Insights 2026',
    dateStr: '2026',
    title: 'Estabilidade financeira e momento de vida diferenciam o consumidor brasileiro',
    headline: 'Mosaic Insights 2026 — Estabilidade financeira e momentos de vida',
    summary: 'Estabilidade e previsibilidade financeira alteram a capacidade de planejamento, a sensibilidade a preço, a tolerância a risco e os critérios de escolha. Consumidores com renda ou idade semelhantes podem apresentar comportamentos diferentes conforme seu momento de vida e nível de segurança financeira.',
    isPdf: false,
    url: 'https://www.serasaexperian.com.br/sala-de-imprensa/servicos-de-marketing/estabilidade-financeira-e-excecao-e-22-concentram-46-da-receita-do-e-commerce-revela-estudo-inedito-da-serasa-experian/',
    actionLabel: 'ACESSAR FONTE'
  },
  // 2. PERFIS GERACIONAIS E SEUS COMPORTAMENTOS DE CONSUMO
  {
    id: 'perfis-sebrae-geracionais-pdf',
    tag: 'Relatório / PDF',
    source: 'Sebrae Inteligência de Mercado / Sebrae-RJ',
    dateStr: '2026',
    title: 'Gerações e microgerações ajudam a explicar diferentes comportamentos de consumo',
    headline: 'Perfis geracionais e seus comportamentos de consumo',
    summary: 'Experiências econômicas, sociais e tecnológicas compartilhadas ao longo da vida influenciam prioridades, expectativas, relação com marcas e formas de consumo. As microgerações reforçam que idade é uma lente de análise, e não uma classificação rígida do consumidor.',
    isPdf: true,
    author: 'Sebrae Inteligência de Mercado (22 p.)',
    fileName: 'Perfis geracionais e seus comportamentos de consumo.pdf',
    pdfUrl: '/Perfis geracionais e seus comportamentos de consumo.pdf',
    downloadLabel: 'BAIXAR PDF ORIGINAL',
    secondaryActionLabel: 'ACESSAR PÁGINA DA FONTE',
    pageUrl: 'https://inteligenciademercado.rj.sebrae.com.br/multissetorial/Perfis-geracionais-e-seus-comportamentos-de-consumo'
  },
  // 3. PERFIS DE CONSUMIDORES DE TECNOLOGIA
  {
    id: 'perfis-sebrae-tecnologia-pdf',
    tag: 'Relatório / PDF',
    source: 'Sebrae Inteligência de Mercado / Sebrae-RJ',
    dateStr: '2026',
    title: 'A relação com tecnologia cria perfis que vão além de idade e demografia',
    headline: 'Perfis de consumidores de tecnologia',
    summary: 'Experiências, valores e diferentes formas de incorporar tecnologia ao cotidiano ajudam a formar perfis de consumo distintos. Conectividade, personalização, segurança, transparência e familiaridade digital diferenciam expectativas e comportamentos entre consumidores.',
    isPdf: true,
    author: 'Sebrae Inteligência de Mercado (17 p.)',
    fileName: 'Perfis de consumidores de tecnologia.pdf',
    pdfUrl: '/Perfis de consumidores de tecnologia.pdf',
    downloadLabel: 'BAIXAR PDF ORIGINAL',
    secondaryActionLabel: 'ACESSAR PÁGINA DA FONTE',
    pageUrl: 'https://inteligenciademercado.rj.sebrae.com.br/multissetorial/Perfis-tecnologicos-2025'
  },
  // 4. GUIA DE TENDÊNCIAS QUE MOLDARÃO O CONSUMO EM 2026
  {
    id: 'perfis-sebrae-rj-tendencias-pdf',
    tag: 'Relatório / PDF',
    source: 'Sebrae/RJ — Inteligência de Mercado',
    dateStr: '2026',
    title: 'Estágios de vida e estilos de vida ampliam a diversidade de necessidades',
    headline: 'Guia de Tendências que Moldarão o Consumo em 2026',
    summary: 'Consumidores com idades semelhantes podem ter rotinas, necessidades e expectativas muito diferentes. Estágio de vida, formas de moradia, bem-estar, acessibilidade e contexto individual ganham relevância para compreender perfis de consumo com maior precisão.',
    isPdf: true,
    author: 'Mara Godoy e Tayná Arruda (Sebrae/RJ, 80 p., ISBN 978-65-5818-852-0)',
    fileName: 'Guiadetendncias2026v9.pdf',
    pdfUrl: '/Guiadetendncias2026v9.pdf',
    downloadLabel: 'BAIXAR PDF ORIGINAL',
    secondaryActionLabel: 'ACESSAR PÁGINA DA FONTE',
    pageUrl: 'https://inteligenciademercado.rj.sebrae.com.br/multissetorial/Confira-o-Guia-de-tendencias-que-moldarao-o-consumo-em-2026'
  },
  // 5. CONHEÇA AS PRIORIDADES DE COMPRAS DO CONSUMIDOR PARA 2026
  {
    id: 'perfis-sebrae-prioridades-2026',
    tag: 'Relatório / PDF',
    source: 'Sebrae/RJ — Inteligência de Mercado',
    dateStr: '2026',
    title: 'Racionalidade, valor e confiança também ajudam a explicar mudanças nos perfis de consumo',
    headline: 'Conheça as prioridades de compras do consumidor para 2026',
    summary: 'Maior cautela orçamentária, planejamento, comparação, menor fidelidade automática, personalização, confiança e busca por propósito ajudam a explicar mudanças comportamentais que atravessam diferentes perfis de consumidor.',
    isPdf: true,
    author: 'Sebrae Inteligência de Mercado (26 p.)',
    fileName: 'Conheça as prioridades de compras do consumidor para 2026.pdf',
    pdfUrl: '/Conheça as prioridades de compras do consumidor para 2026.pdf',
    downloadLabel: 'BAIXAR PDF ORIGINAL',
    secondaryActionLabel: 'ACESSAR PÁGINA DA FONTE',
    pageUrl: 'https://www.inteligenciademercado.rj.sebrae.com.br/multissetorial/Conheca-as-prioridades-de-compra-do-consumidor-para-2026'
  }
];
