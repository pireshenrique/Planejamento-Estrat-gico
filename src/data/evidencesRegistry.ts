import { EvidenciaAssociada } from '../types';

export interface EvidenciaEstrategica {
  id: string;
  topicId: string;
  tag: string;
  dateStr: string;
  title: string;
  headline?: string;
  summary: string;
  source: string;
  url: string;
  useCategory?: string;
  verified?: boolean;
  impacts?: string[];
  themes?: string[];
  image?: string;
}

/**
 * REPOSITÓRIO CENTRALIZADO E IMUTÁVEL DE EVIDÊNCIAS E LINKS DO PORTAL
 * 
 * Regra de Governança das Evidências (Planejamento Estratégico 2027-2037):
 * 1. NUNCA remover ou sobrescrever links e evidências já registrados pela equipe.
 * 2. Novos links enviados pelo usuário devem ser ACRESCENTADOS a este repositório central.
 * 3. Todos os componentes do portal consomem este registro como Fonte Única da Verdade.
 * 4. Rastreabilidade total: Qualquer gráfico, card ou citação aponta para uma URL nesta base.
 */
export const CENTRAL_EVIDENCES_REGISTRY: Record<string, EvidenciaEstrategica[]> = {
  desemprego: [
    {
      id: 'desemp-001',
      topicId: 'desemprego',
      tag: 'IBGE / PNAD CONTÍNUA',
      dateStr: 'Maio/2026',
      title: 'Taxa de desemprego permanece próxima das mínimas históricas no Brasil',
      summary: 'A taxa de desocupação brasileira segue em patamar reduzido. No trimestre encerrado em maio de 2026, o desemprego ficou em 5,6%, menor nível para o período desde o início da série histórica do IBGE, refletindo aumento da população ocupada e redução do número de pessoas buscando trabalho.',
      source: 'IBGE – PNAD Contínua',
      url: 'https://www.ibge.gov.br/estatisticas/sociais/trabalho/9171-pesquisa-nacional-por-amostra-de-domicilios-continua-mensal.html',
      useCategory: 'Evidência de cenário atual de baixo desemprego',
      verified: true,
    },
    {
      id: 'desemp-002',
      topicId: 'desemprego',
      tag: 'AGÊNCIA IBGE',
      dateStr: '2026',
      title: 'Emprego continua forte, porém ritmo de expansão perde intensidade',
      summary: 'Apesar do mercado de trabalho permanecer resiliente, os dados mais recentes mostram uma desaceleração marginal no ritmo de criação de ocupações. A taxa de desemprego apresentou leve aumento frente aos meses anteriores, indicando uma possível normalização após níveis historicamente favoráveis.',
      source: 'Agência de Notícias IBGE',
      url: 'https://agenciadenoticias.ibge.gov.br/agencia-noticias',
      useCategory: 'Evidência de acomodação no ritmo de contratações',
      verified: true,
    },
    {
      id: 'desemp-003',
      topicId: 'desemprego',
      tag: 'IBGE / PNAD CONTÍNUA',
      dateStr: 'Abril/2026',
      title: 'Renda do trabalhador permanece elevada e sustenta consumo interno',
      summary: 'O rendimento médio real habitual do trabalhador continua em trajetória positiva. No trimestre encerrado em abril de 2026, o rendimento médio real habitual ficou em aproximadamente R$ 3.732, contribuindo para manutenção da massa salarial e do consumo doméstico.',
      source: 'IBGE – PNAD Contínua',
      url: 'https://www.ibge.gov.br/estatisticas/sociais/trabalho.html',
      useCategory: 'Evidência de sustentação do consumo das famílias',
      verified: true,
    },
    {
      id: 'desemp-004',
      topicId: 'desemprego',
      tag: 'MTE / NOVO CAGED',
      dateStr: '2026',
      title: 'Geração de empregos formais mantém saldo positivo em 2026',
      summary: 'Os dados do Novo Caged mostram continuidade na geração líquida de empregos formais, com destaque para setores intensivos em mão de obra, especialmente serviços, comércio e construção civil.',
      source: 'Ministério do Trabalho e Emprego – Novo Caged',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho',
      useCategory: 'Evidência de criação contínua no mercado formal',
      verified: true,
    },
    {
      id: 'desemp-005',
      topicId: 'desemprego',
      tag: 'NOVO CAGED',
      dateStr: '2026',
      title: 'Setor de serviços lidera criação de vagas formais',
      summary: 'O setor de serviços segue como principal responsável pela abertura de novas vagas formais, impulsionado por segmentos como saúde, transporte, tecnologia, serviços administrativos e atividades ligadas ao consumo interno.',
      source: 'Novo Caged – Ministério do Trabalho',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged',
      useCategory: 'Evidência de liderança setorial de serviços',
      verified: true,
    },
    {
      id: 'desemp-006',
      topicId: 'desemprego',
      tag: 'ANÁLISE ESTRATÉGICA',
      dateStr: '2026',
      title: 'Juros elevados podem limitar novas contratações e investimentos',
      summary: 'Apesar da força do mercado de trabalho, o ambiente de juros elevados pode reduzir a velocidade de expansão das empresas, principalmente em setores dependentes de crédito e investimentos produtivos. A manutenção da renda e do emprego favorece o consumo, porém o custo financeiro permanece como fator de risco para novos ciclos de contratação.',
      source: 'MTE & IBGE',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho',
      useCategory: 'Ponto de atenção para o planejamento estratégico',
      verified: true,
    },
  ],
  agropecuaria: [
    {
      id: 'agro-001',
      topicId: 'agropecuaria',
      tag: 'AGROPECUÁRIA NO PIB',
      dateStr: '29/05/2026',
      title: 'Agropecuária cresce 2,0% e lidera avanço entre os grandes setores',
      summary: 'O PIB brasileiro cresceu 1,1% no 1º trimestre de 2026 frente ao trimestre anterior. Pela ótica da produção, a Agropecuária cresceu 2,0%, acima da Indústria, que avançou 1,0%, e dos Serviços, que cresceram 0,5%.',
      source: 'IBGE',
      url: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/46917-pib-cresce-1-1-no-primeiro-trimestre-de-2026',
      verified: true,
    },
    {
      id: 'agro-002',
      topicId: 'agropecuaria',
      tag: 'ANÁLISE SETORIAL',
      dateStr: '02/06/2026',
      title: 'Agropecuária tem melhor desempenho entre os grandes setores da economia',
      summary: 'A CNA destacou que o PIB da Agropecuária cresceu 2,0% no 1º trimestre de 2026. O resultado refletiu contribuições positivas da produção animal e vegetal.',
      source: 'CNA Brasil',
      url: 'https://cnabrasil.org.br/publicacoes/pib-da-agropecuaria-cresce-2-0-no-primeiro-trimestre-de-2026',
      verified: true,
    },
    {
      id: 'agro-003',
      topicId: 'agropecuaria',
      tag: 'VALOR ECONÔMICO',
      dateStr: '29/05/2026',
      title: 'PIB da Agropecuária totaliza R$ 230,4 bilhões no 1º trimestre',
      summary: 'A CNN informou que o PIB da Agropecuária cresceu 2,0% no trimestre e totalizou R$ 230,4 bilhões no 1º trimestre de 2026, representando cerca de 7% do PIB.',
      source: 'CNN Brasil',
      url: 'https://www.cnnbrasil.com.br/agro/pib-da-agropecuaria-cresce-2-no-trimestre-e-corresponde-a-7-do-pib/',
      verified: true,
    },
    {
      id: 'agro-004',
      topicId: 'agropecuaria',
      tag: 'PIB GERAL / OFERTA',
      dateStr: '29/05/2026',
      title: 'Agropecuária puxa crescimento do PIB para cima no 1º trimestre',
      summary: 'A Agência Brasil destacou que os três grandes setores cresceram no trimestre: Agropecuária +2,0%, Indústria +1,0% e Serviços +0,5%.',
      source: 'Agência Brasil',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-05/economia-brasileira-cresce-11-no-1o-trimestre',
      verified: true,
    },
    {
      id: 'agro-005',
      topicId: 'agropecuaria',
      tag: 'SAFRA / PRODUÇÃO',
      dateStr: '29/05/2026',
      title: 'Soja impulsiona Agropecuária, mas milho e arroz têm queda estimada',
      summary: 'O Ministério do Planejamento, com base em dados do IBGE, informou que a taxa da Agropecuária pode ser explicada pelo crescimento da produção de soja (+4,8%).',
      source: 'Ministério do Planejamento',
      url: 'https://www.gov.br/planejamento/pt-br/assuntos/noticias/2026/maio/pib-avanca-1-1-no-primeiro-trimestre-e-chega-a-r-3-3-trilhoes-aponta-ibge',
      verified: true,
    },
    {
      id: 'agro-006',
      topicId: 'agropecuaria',
      tag: 'CONTEXTO ANUAL',
      dateStr: '03/03/2026',
      title: 'Agropecuária foi destaque no PIB de 2025, com alta de 11,7%',
      summary: 'O PIB brasileiro cresceu 2,3% em 2025, alcançando R$ 12,7 trilhões. A Agropecuária liderou com alta de 11,7%.',
      source: 'IBGE',
      url: 'https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/45969-pib-cresce-2-3-em-2025',
      verified: true,
    },
    {
      id: 'agro-007',
      topicId: 'agropecuaria',
      tag: 'ANÁLISE ECONÔMICA',
      dateStr: '08/06/2026',
      title: 'Ipea vê aceleração no trimestre, mas crescimento acumulado desacelera',
      summary: 'O Ipea analisou o desempenho do PIB no 1º trimestre de 2026 e destacou crescimento de 1,1% na série dessazonalizada.',
      source: 'Ipea — Carta de Conjuntura',
      url: 'https://www.ipea.gov.br/cartadeconjuntura/index.php/2026/06/desempenho-do-pib-primeiro-trimestre-de-2026/',
      verified: true,
    },
    {
      id: 'agro-008',
      topicId: 'agropecuaria',
      tag: 'PROJEÇÃO AGROPECUÁRIA',
      dateStr: '29/05/2026',
      title: 'CNA eleva projeção do PIB da Agropecuária para 2,8% em 2026',
      summary: 'A CNA elevou para 2,8% sua estimativa preliminar de crescimento do PIB da Agropecuária em 2026, fundamentada no bom desempenho da safra de grãos.',
      source: 'Canal Rural / CNA',
      url: 'https://www.canalrural.com.br/economia/cna-eleva-projecao-de-crescimento-do-pib-agro-para-28-em-2026/',
      verified: true,
    },
  ],
  exportacoes: [
    {
      id: 'exp-001',
      topicId: 'exportacoes',
      tag: 'Indicadores atuais',
      dateStr: 'Junho/2026',
      title: 'Exportações brasileiras somam US$ 36,3 bilhões em junho de 2026',
      summary: 'O MDIC informa que em junho de 2026 o comércio exterior registrou US$ 36,3 bilhões em exportações e superávit comercial de US$ 9,8 bilhões.',
      source: 'MDIC / Estatísticas de Comércio Exterior',
      url: 'https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior/estatisticas',
      verified: true,
    },
    {
      id: 'exp-002',
      topicId: 'exportacoes',
      tag: 'Fechamento anual',
      dateStr: '06/01/2026',
      title: 'Exportações brasileiras alcançam US$ 348,7 bilhões em 2025',
      summary: 'As exportações brasileiras chegaram a US$ 348,7 bilhões em 2025, recorde histórico com saldo comercial de US$ 68,3 bilhões.',
      source: 'MDIC',
      url: 'https://www.gov.br/mdic/pt-br/assuntos/noticias/2026/janeiro/exportacoes-brasileiras-alcancam-us-349-bi-em-2025-e-batem-recorde-historico',
      verified: true,
    },
    {
      id: 'exp-003',
      topicId: 'exportacoes',
      tag: 'Destinos das exportações',
      dateStr: '06/01/2026',
      title: 'China lidera destinos das exportações brasileiras em 2025',
      summary: 'A China foi o principal destino das exportações brasileiras em 2025, com US$ 100,0 bilhões (28,69% do total exportado).',
      source: 'IstoÉ Dinheiro / dados MDIC',
      url: 'https://istoedinheiro.com.br/ranking-paises-exportacoes-brasil-importa-2025',
      verified: true,
    },
    {
      id: 'exp-004',
      topicId: 'exportacoes',
      tag: 'Destino estratégico',
      dateStr: 'Janeiro/2026',
      title: 'China responde por 28,7% das exportações brasileiras em 2025',
      summary: 'Comércio Brasil-China atinge recorde de US$ 171 bilhões em corrente de comércio em 2025.',
      source: 'CEBC / dados MDIC',
      url: 'https://static.poder360.com.br/2026/01/Comercio-Brasil-China-atinge-recorde-de-US-171-bilhoes-em-2025-CEBC-Alerta.pdf',
      verified: true,
    },
    {
      id: 'exp-005',
      topicId: 'exportacoes',
      tag: 'Produtos exportados',
      dateStr: '2026',
      title: 'Petróleo, soja e minério lideram pauta exportadora de 2025',
      summary: 'Produtos mais vendidos: óleos brutos de petróleo (12,8%), soja (12,5%) e minério de ferro (8,3%).',
      source: 'Panorama do Comércio Exterior de Minas Gerais / dados MDIC',
      url: 'https://desenvolvimento.mg.gov.br/assets/projetos/1084/6c8a8dbe98911464612fe2842779e07e.pdf',
      verified: true,
    },
    {
      id: 'exp-006',
      topicId: 'exportacoes',
      tag: 'Posição global',
      dateStr: '2025',
      title: 'Brasil lidera exportações mundiais em nove cadeias do agro',
      summary: 'Líder em suco de laranja, soja, açúcar, carne de frango, carne bovina, café, fumo, celulose e algodão.',
      source: 'BrasilAgro / Globo Rural',
      url: 'https://www.brasilagro.com.br/conteudo/brasil-lidera-exportacao-mundial-em-nove-setores-do-agro-saiba-quais.html',
      verified: true,
    },
    {
      id: 'exp-007',
      topicId: 'exportacoes',
      tag: 'Posição global / Agro',
      dateStr: '2025',
      title: 'Brasil é o 3º maior exportador mundial de produtos agropecuários',
      summary: 'Movimentação de US$ 144,4 bilhões em produtos agropecuários, representando 7% das exportações globais do setor.',
      source: 'CNA / Panorama do Agro',
      url: 'https://cnabrasil.org.br/cna/panorama-do-agro',
      verified: true,
    },
    {
      id: 'exp-008',
      topicId: 'exportacoes',
      tag: 'Atualização por destino',
      dateStr: '06/07/2026',
      title: 'China amplia liderança e EUA mostram recuperação parcial em junho',
      summary: 'Exportações para EUA crescem 3,7% no mês, enquanto China mantém alta continuada de 21,9% no semestre.',
      source: 'Money Times / Agência Brasil / MDIC',
      url: 'https://www.moneytimes.com.br/exportacoes-aos-eua-crescem-pela-primeira-vez-apos-tarifaco-de-trump-china-aumenta-participacao-e-argentina-perde-fets/',
      verified: true,
    },
    {
      id: 'exp-009',
      topicId: 'exportacoes',
      tag: 'Barreiras comerciais',
      dateStr: '05/02/2026',
      title: 'Tarifas dos EUA ainda afetam parte das exportações brasileiras',
      summary: 'MDIC estima que 22% das exportações aos EUA ainda sofrem com tarifas elevadas após revisões pontuais.',
      source: 'Agência Brasil',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-02/exportacoes-aos-eua-caem-255-em-janeiro-mas-vendas-china-sobem',
      verified: true,
    },
    {
      id: 'exp-010',
      topicId: 'exportacoes',
      tag: 'Barreiras comerciais',
      dateStr: '11/09/2025',
      title: 'EUA retiram tarifa adicional sobre celulose e ferro-níquel brasileiros',
      summary: 'Retirada de tarifas adicionais norte-americanas para celulose e ferro-níquel fabricados no Brasil.',
      source: 'Reuters',
      url: 'https://www.reuters.com/world/W4DGPFOOCZLC5N5GR4D5FEXIX4-2025-09-11/',
      verified: true,
    },
  ],
  pib: [
    {
      id: 'pib-001',
      topicId: 'pib',
      tag: 'IBGE / CONTAS NACIONAIS',
      dateStr: '29/05/2026',
      title: 'PIB cresce 1,1% no primeiro trimestre de 2026 e atinge R$ 3,3 trilhões',
      summary: 'O Produto Interno Bruto brasileiro avançou 1,1% no 1º trimestre de 2026 em relação ao 4º tri de 2025. O setor agropecuário registrou a maior alta (+2,0%), seguido pela Indústria (+1,0%) e Serviços (+0,5%).',
      source: 'Agência de Notícias IBGE',
      url: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/46917-pib-cresce-1-1-no-primeiro-trimestre-de-2026',
      verified: true,
    },
    {
      id: 'pib-002',
      topicId: 'pib',
      tag: 'BANCO CENTRAL DO BRASIL',
      dateStr: 'Junho/2026',
      title: 'Banco Central projeta crescimento de 2,0% para o PIB em 2026',
      summary: 'O Banco Central ajustou sua projeção para o PIB de 2026 para 2,0%, apontando desaceleração em relação a 2025 devido à política monetária contracionista e desaceleração do crédito.',
      source: 'Agência Brasil / BCB',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-06/banco-central-preve-crescimento-de-2-para-o-pib-em-2026',
      verified: true,
    },
    {
      id: 'pib-003',
      topicId: 'pib',
      tag: 'IPEA / CONJUNTURA',
      dateStr: '08/06/2026',
      title: 'Desempenho do PIB no primeiro trimestre de 2026 aponta moderação',
      summary: 'Análise do Ipea indica aceleração na ponta, porém com trajetória anualizada em desaceleração gradativa de 2,3% para 2,0%.',
      source: 'Ipea — Carta de Conjuntura',
      url: 'https://www.ipea.gov.br/cartadeconjuntura/index.php/2026/06/desempenho-do-pib-primeiro-trimestre-de-2026/',
      verified: true,
    },
  ],
  imposicao_sobretaxas: [
    {
      id: 'sob-001',
      topicId: 'imposicao_sobretaxas',
      tag: 'INDICADORES ABINEE / ESTRATÉGIA',
      dateStr: '03/08/2026',
      title: 'EUA aplicam sobretaxas de 25% e 12,5% sob a Seção 301 totalizando até 37,5% de tarifa',
      headline: '"Ampliação das barreiras comerciais dos EUA atinge 70% do universo tarifário do setor elétrico e eletrônico brasileiro"',
      summary: 'Os Estados Unidos anunciaram em 15 de julho de 2026 a aplicação de uma sobretaxa de 25% (Seção 301 do USTR, vigência em 22/07) e em 23 de julho uma tarifa adicional de 12,5% (vigência em 24/07). Com a nova medida, a carga sobre grande parte das exportações brasileiras do setor eleva-se para 37,5%, comprometendo a competitividade no mercado americano.',
      source: 'Abinee / Decon',
      url: 'https://www.abinee.org.br/noticias/',
      verified: true,
    },
    {
      id: 'sob-002',
      topicId: 'imposicao_sobretaxas',
      tag: 'EXPORTAÇÕES & MERCADO EUA',
      dateStr: '03/08/2026',
      title: 'Sobretaxas atingem US$ 1,9 bilhão das exportações brasileiras de eletroeletrônicos',
      headline: '"EUA representam 26% das exportações totais do setor; 91% dos embarques para o país foram atingidos por novas tarifas"',
      summary: 'No ano de 2025, as exportações totais do setor somaram US$ 8,1 bilhões, sendo os EUA o principal destino com US$ 2,1 bilhões (26% do total). Das vendas para os EUA, 864 subitens NCM (70% do universo tarifário do setor) foram atingidos pelas sobretaxas das Seções 232 ou 301, somando US$ 1,9 bilhão (91% do total exportado aos EUA).',
      source: 'Abinee / Decon',
      url: 'https://www.abinee.org.br/noticias/',
      verified: true,
    },
    {
      id: 'sob-003',
      topicId: 'imposicao_sobretaxas',
      tag: 'IMPACTOS SETORIAIS',
      dateStr: '03/08/2026',
      title: 'Automação, Componentes e Geração & Transmissão são as áreas mais afetadas',
      headline: '"Vendas para os EUA dos segmentos mais atingidos representaram em média 14% do faturamento total do setor em 2025"',
      summary: 'Abinee destaca que as áreas de Automação Industrial, Componentes Elétricos e Eletrônicos e Geração, Transmissão e Distribuição de Energia são as mais impactadas. O redirecionamento de volumes é de alta complexidade técnica devido a exigências de normas e homologações específicas de cada país.',
      source: 'Abinee / Decon',
      url: 'https://www.abinee.org.br/noticias/',
      verified: true,
    },
    {
      id: 'sob-004',
      topicId: 'imposicao_sobretaxas',
      tag: 'PROPOSTAS DE MITIGAÇÃO',
      dateStr: '03/08/2026',
      title: 'Abinee propõe 5 medidas ao Governo Brasileiro para mitigar efeitos das sobretaxas',
      headline: '"Ações incluem crédito e seguro à exportação, promoção de novos mercados, certificações e diplomacia com o Governo dos EUA"',
      summary: 'Para mitigar a perda de competitividade, a Abinee sugeriu ao governo brasileiro: ampliação de apoio via crédito e seguro de exportação; promoção comercial e abertura de mercados alternativos; apoio a homologações internacionais; instrumentos de reforço à competitividade; e negociações diplomáticas diretas com os EUA para revisão das medidas.',
      source: 'Abinee / Decon',
      url: 'https://www.abinee.org.br/noticias/',
      verified: true,
    }
  ],
  endividamento: [
    {
      id: 'end-001',
      topicId: 'endividamento',
      tag: 'SENADO FEDERAL',
      dateStr: 'Maio de 2026',
      title: 'Dívidas em recorde assombram as famílias brasileiras',
      summary: 'O percentual de famílias endividadas chegou a 80,9%, maior nível da série histórica da Peic/CNC. O avanço ocorreu mesmo com melhora em alguns indicadores de renda, associado a juros elevados, maior utilização de crédito e aumento do comprometimento financeiro.',
      source: 'Senado Federal',
      url: 'https://www12.senado.leg.br/noticias/infomaterias/2026/05/dividas-em-recorde-assombram-as-familias-brasileiras',
      verified: true,
      impacts: [
        'A recuperação da renda não significa necessariamente maior capacidade de consumo, pois parte relevante do orçamento familiar está comprometida com dívidas.'
      ]
    },
    {
      id: 'end-002',
      topicId: 'endividamento',
      tag: 'CNN BRASIL',
      dateStr: '2026',
      title: 'Endividamento das famílias sobe para 49,9% e bate recorde, aponta BC',
      summary: 'O endividamento das famílias alcançou 49,9% da renda acumulada em 12 meses. O Banco Central acompanha esse indicador como relação entre dívida financeira e renda. O comprometimento da renda com pagamentos de dívidas também avançou.',
      source: 'CNN Brasil',
      url: 'https://www.cnnbrasil.com.br/economia/macroeconomia/endividamento-das-familias-sobe-para-499-e-bate-recorde-aponta-bc/',
      verified: true,
      impacts: [
        'O consumidor possui renda, porém uma parcela maior está direcionada para obrigações financeiras, reduzindo espaço para compras planejadas.'
      ]
    },
    {
      id: 'end-003',
      topicId: 'endividamento',
      tag: 'AGÊNCIA BRASIL',
      dateStr: 'Abril de 2026',
      title: 'Juros elevados mantêm pressão sobre endividamento das famílias',
      summary: 'O Banco Central indicou que o endividamento das famílias atingiu 49,9% e o comprometimento da renda com dívidas chegou a 29,7%. A alta dos juros aumenta o custo do crédito e dificulta a redução do endividamento.',
      source: 'Agência Brasil',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-04/juros-elevados-mantem-pressao-sobre-endividamento-das-familias',
      verified: true,
      impacts: [
        'O ambiente de juros altos limita principalmente compras financiadas e bens de maior valor.'
      ]
    },
    {
      id: 'end-004',
      topicId: 'endividamento',
      tag: 'DIEESE',
      dateStr: '2026',
      title: 'Endividamento das famílias aumenta e inadimplência segue elevada',
      summary: 'O estudo analisa a evolução do endividamento e inadimplência das famílias brasileiras, destacando o percentual de famílias endividadas, com dívidas atrasadas e incapacidade de pagamento. O cartão de crédito continua sendo uma das principais fontes de endividamento.',
      source: 'DIEESE',
      url: 'https://www.dieese.org.br/sinteseespecial/2026/sinteseEspecial23.html',
      verified: true,
      impacts: [
        'Famílias inadimplentes tendem a priorizar despesas essenciais e adiar compras não urgentes.'
      ]
    },
    {
      id: 'end-005',
      topicId: 'endividamento',
      tag: 'CNC / PORTAL DO COMÉRCIO',
      dateStr: 'Junho de 2026',
      title: 'PEIC: endividamento e inadimplência estabilizam em junho',
      summary: 'Apesar do elevado número de famílias endividadas, houve melhora na percepção sobre o nível das dívidas. Cresceu a parcela de famílias que se consideram "pouco endividadas". A composição da dívida e os prazos de pagamento são fatores importantes para avaliar o risco.',
      source: 'CNC / Portal do Comércio',
      url: 'https://portaldocomercio.org.br/economia/peic-endividamento-e-inadimplencia-estabilizam-em-junho/',
      verified: true,
      impacts: [
        'O cenário não é apenas de aumento da dívida; é necessário avaliar se o consumidor consegue administrar esse compromisso financeiro.'
      ]
    },
    {
      id: 'end-006',
      topicId: 'endividamento',
      tag: 'BANCO CENTRAL DO BRASIL',
      dateStr: '2026',
      title: 'Estatísticas de crédito e endividamento das famílias',
      summary: 'Dados oficiais do Banco Central permitem acompanhar endividamento das famílias (49,9%), comprometimento da renda (29,7%), crédito às pessoas físicas e evolução histórica.',
      source: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/estatisticas/estatisticasmonetariascredito',
      verified: true,
      impacts: [
        'Relatório oficial para acompanhamento da relação entre dívida financeira, renda acumulada e crédito.'
      ]
    }
  ],
  idh: [
    {
      id: 'idh-001',
      topicId: 'idh',
      tag: 'PNUD / ONU (Gov.br)',
      dateStr: 'Maio/2025',
      title: 'Brasil sobe no ranking global de desenvolvimento humano',
      summary: 'O Brasil avançou no ranking mundial do IDH, passando para a 84ª posição, com índice de 0,786. O resultado representa melhora em relação aos ciclos anteriores, impulsionada pelos avanços combinados em saúde, educação e renda.',
      source: 'PNUD / ONU — Relatório de Desenvolvimento Humano 2025',
      url: 'https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/05/brasil-sobe-cinco-posicoes-ranking-de-desenvolvimento-humano-da-onu',
      verified: true
    },
    {
      id: 'idh-002',
      topicId: 'idh',
      tag: 'PNUD Global',
      dateStr: '2025',
      title: 'Desenvolvimento humano global desacelera',
      summary: 'O relatório alerta que o avanço global do desenvolvimento humano desacelerou para o menor ritmo em aproximadamente 35 anos. Entre os principais fatores estão: crises econômicas; conflitos; desigualdade; dificuldades de recuperação pós-pandemia.',
      source: 'PNUD — Relatório de Desenvolvimento Humano 2025',
      url: 'https://www.undp.org/pt/brazil/press-releases/progresso-do-desenvolvimento-humano-desacelera-para-nivel-mais-baixo-em-35-anos-segundo-novo-relatorio-do-pnud',
      verified: true
    },
    {
      id: 'idh-003',
      topicId: 'idh',
      tag: 'PNUD / IA',
      dateStr: '2025',
      title: 'Inteligência Artificial como novo vetor do desenvolvimento humano',
      summary: 'O relatório de 2025 destaca a IA como um possível acelerador do desenvolvimento humano, principalmente em: educação; produtividade; acesso a serviços; inovação. Porém, alerta para riscos caso países com menor capacidade tecnológica fiquem para trás.',
      source: 'Relatório de Desenvolvimento Humano 2025 — PNUD',
      url: 'https://www.undp.org/pt/brazil/press-releases/pnud-lanca-relatorio-de-desenvolvimento-humano-2025-nesta-terca-feira',
      verified: true
    }
  ],
  eleicoes: [
    {
      id: 'eleic-001',
      topicId: 'eleicoes',
      tag: 'MERCADOS & VOLATILIDADE',
      dateStr: 'Agosto / 2026',
      title: 'Eleições de 2026 aumentam a volatilidade e colocam Bolsa, câmbio e juros sob pressão',
      summary: 'A aproximação das eleições elevou a incerteza sobre a condução econômica do próximo governo, principalmente em relação à trajetória da dívida pública e à credibilidade fiscal. Em agosto, houve saída de capital estrangeiro da Bolsa e do mercado cambial, enquanto analistas passaram a projetar juros mais altos por mais tempo. A matéria mostra que o impacto eleitoral sobre os mercados depende menos do nome do vencedor e mais da percepção sobre a sustentabilidade fiscal do próximo governo.',
      source: 'Folha de S.Paulo',
      url: 'https://www1.folha.uol.com.br/mercado/2026/08/eleicoes-aumentam-volatilidade-e-colocam-bolsa-e-real-sob-pressao.shtml',
      verified: true
    },
    {
      id: 'eleic-002',
      topicId: 'eleicoes',
      tag: 'CENÁRIO FISCAL COMPARADO',
      dateStr: '26/08/2026',
      title: 'Lula e Flávio Bolsonaro apresentam estratégias econômicas diferentes, mas ambos enfrentam desafio fiscal',
      summary: 'Lula e Flávio Bolsonaro defendem caminhos diferentes para a economia, mas investidores veem dificuldades para uma mudança expressiva na trajetória da dívida pública em qualquer dos cenários. Lula tende a combinar arcabouço fiscal e investimento público, enquanto Flávio defende maior contenção de gastos e uma regra vinculada à dívida. A credibilidade fiscal aparece como fator crítico para juros, câmbio e crescimento independentemente do resultado eleitoral.',
      source: 'Reuters',
      url: 'https://www.reuters.com/world/americas/brazil-vote-offers-opposing-politics-similar-fiscal-outcomes-2026-08-26/',
      verified: true
    },
    {
      id: 'eleic-003',
      topicId: 'eleicoes',
      tag: 'PLANO ECONÔMICO / LULA',
      dateStr: 'Agosto / 2026',
      title: 'Lula aposta em investimento público, infraestrutura e produtividade para sustentar o crescimento',
      summary: 'O programa de Lula propõe manter o arcabouço fiscal e ampliar investimentos em infraestrutura logística, indústria e desenvolvimento produtivo. Entre as propostas estão uma nova edição do Novo PAC, continuidade de concessões de rodovias e ferrovias e estímulos ao mercado imobiliário. O principal ponto favorável dessa estratégia é a tentativa de usar investimento público e privado para ampliar produtividade e crescimento; o desafio é compatibilizar essa agenda com a trajetória fiscal.',
      source: 'Folha de S.Paulo',
      url: 'https://www1.folha.uol.com.br/poder/2026/08/veja-pontos-em-que-os-planos-de-governo-de-lula-e-flavio-bolsonaro-divergem.shtml',
      verified: true
    },
    {
      id: 'eleic-004',
      topicId: 'eleicoes',
      tag: 'PLANO ECONÔMICO / FLÁVIO BOLSONARO',
      dateStr: 'Agosto / 2026',
      title: 'Flávio Bolsonaro propõe corte de gastos, novo teto fiscal e redução da máquina pública',
      summary: 'O programa econômico de Flávio Bolsonaro propõe um “tesouraço” nas despesas públicas, criação de um novo teto de gastos, redução de pelo menos dez ministérios, corte de cargos comissionados e retomada de privatizações e concessões. Também prevê revisão de exceções da Reforma Tributária. Para o mercado, a proposta sinaliza maior disciplina fiscal; o desafio está na execução política e no detalhamento de como os cortes e a nova regra fiscal seriam implementados.',
      source: 'Folha de S.Paulo',
      url: 'https://www1.folha.uol.com.br/mercado/2026/08/plano-de-governo-de-flavio-bolsonaro-propoe-tesouraco-e-novo-teto-de-gastos.shtml',
      verified: true
    },
    {
      id: 'eleic-005',
      topicId: 'eleicoes',
      tag: 'FATORES DE RISCO / LULA',
      dateStr: 'Agosto / 2026',
      title: 'Situação fiscal, endividamento das famílias e avaliação do governo aparecem entre os principais riscos para Lula',
      summary: 'Entre os fatores que podem dificultar a reeleição estão o elevado endividamento das famílias, problemas na fila do INSS, preocupações com a dívida pública e juros elevados, além da avaliação negativa de parte do eleitorado. A rejeição elevada e dificuldades em alguns segmentos, como o eleitorado evangélico, também aparecem como vulnerabilidades da candidatura.',
      source: 'Folha de S.Paulo',
      url: 'https://www1.folha.uol.com.br/poder/2026/08/o-que-pesa-contra-lula-nas-eleicoes-de-2026.shtml',
      verified: true
    },
    {
      id: 'eleic-006',
      topicId: 'eleicoes',
      tag: 'FATORES DE RISCO / FLÁVIO BOLSONARO',
      dateStr: 'Agosto / 2026',
      title: 'Rejeição, dificuldade entre mulheres e falta de experiência executiva aparecem como riscos para Flávio Bolsonaro',
      summary: 'A candidatura de Flávio enfrenta rejeição elevada, desempenho mais fraco entre mulheres e questionamentos sobre sua experiência em cargos executivos. Controvérsias envolvendo o caso da “rachadinha” e o financiamento do filme “Dark Horse” também aparecem como fatores de desgaste. Ao mesmo tempo, aliados avaliam que parte de sua rejeição pode ser reduzida durante a campanha por estar associada à imagem de Jair Bolsonaro.',
      source: 'Folha de S.Paulo',
      url: 'https://www1.folha.uol.com.br/poder/2026/08/o-que-pesa-contra-flavio-bolsonaro-nas-eleicoes-de-2026.shtml',
      verified: true
    }
  ]
};

// Funções Utilitárias para Garantir Validade e Rastreabilidade do Link
export function getEvidencesForTopic(topicId: string): EvidenciaEstrategica[] {
  return CENTRAL_EVIDENCES_REGISTRY[topicId] || [];
}

/**
 * Registra um novo link/evidência enviado pelo usuário no repositório centralizado sem apagar os existentes.
 */
export function registerNewEvidence(topicId: string, newEv: Omit<EvidenciaEstrategica, 'id' | 'topicId'>): EvidenciaEstrategica {
  if (!CENTRAL_EVIDENCES_REGISTRY[topicId]) {
    CENTRAL_EVIDENCES_REGISTRY[topicId] = [];
  }
  
  const created: EvidenciaEstrategica = {
    ...newEv,
    id: `${topicId}-${Date.now()}`,
    topicId,
    verified: true
  };

  CENTRAL_EVIDENCES_REGISTRY[topicId].push(created);
  return created;
}

export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function getCleanDomain(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace('www.', '');
  } catch {
    return 'fonte-oficial';
  }
}
