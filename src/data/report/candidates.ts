import { StrategicCandidate } from './candidateTypes';

/**
 * CANDIDATAS A MACROTENDÊNCIA — STAGING AREA
 * 
 * Versão Editorial: 2026.09.15.2
 * Propostas auditadas e transversais abrangendo Economia, Habitação, Indústria,
 * Comércio Global, Jornada do Consumidor, Energia & Clima e Geopolítica.
 */
export const CANDIDATES: StrategicCandidate[] = [
  {
    id: 'MT-001',
    titulo: 'Racionalização do Consumo sob Pressão de Crédito e Endividamento',
    sinal: 'O endividamento das famílias alcança 82,0% sob taxa Selic em 14,00%, levando a maioria dos consumidores a planejar compras com foco rigoroso em custo-benefício.',
    tendencia: 'A restrição de crédito e a perda de poder de compra consolidam um padrão de consumo eminentemente defensivo, no qual durabilidade comprovada, facilidade de manutenção e economia na conta de luz e água superam apelos aspiracionais.',
    riscosLorenzetti: [
      'Pode gerar migração da demanda para linhas de entrada com menor margem unitária.',
      'Pode aumentar a pressão de redes de varejo por descontos comerciais agressivos e prazos estendidos.',
      'Pode adiar decisões de reformas residenciais completas e de substituição de produtos em funcionamento.'
    ],
    oportunidadesLorenzetti: [
      'Pode consolidar a preferência de marca ao destacar durabilidade superior e facilidade de reposição de peças.',
      'Pode ampliar a atratividade de modelos que comprovam redução direta no consumo doméstico de água e energia elétrica.',
      'Pode favorecer marcas tradicionais percebidas pelo consumidor como escolhas seguras contra o desperdício financeiro.'
    ],
    impacto: 'Alto',
    horizonte: 'Curto a Médio Prazo (2026-2029)',
    temasRelacionados: [
      'Economia Brasileira',
      'Cenário Mercadológico'
    ],
    supportingPageIds: [
      'endividamento-familias',
      'perfil-consumo',
      'juros-selic'
    ],
    supportingFactIds: [
      'endividamento-familias::kpi::familias-endividadas',
      'endividamento-familias::kpi::renda-comprometida',
      'juros-selic::kpi::selic-atual',
      'perfil-consumo::indicador::planejam-compras',
      'perfil-consumo::indicador::busca-economia'
    ],
    evidenceIds: [
      'end-001',
      'prioridades-nielseniq-2026'
    ],
    sourceIds: [
      'cnc-peic',
      'copom',
      'nielseniq-fullview-2026'
    ],
    fundamentacao: [
      {
        afirmacao: 'Famílias Endividadas atinge nível recorde de 82,0% e renda comprometida com dívidas é de 29,5%.',
        factId: 'endividamento-familias::kpi::familias-endividadas',
        source: 'cnc-peic'
      },
      {
        afirmacao: 'Taxa Selic atual situa-se em 14,00% ao ano.',
        factId: 'juros-selic::kpi::selic-atual',
        source: 'copom'
      },
      {
        afirmacao: '80% dos consumidores planejam previamente suas compras e 66% buscam opções de menor preço.',
        factId: 'perfil-consumo::indicador::planejam-compras',
        source: 'nielseniq-fullview-2026'
      }
    ]
  },
  {
    id: 'MT-002',
    titulo: 'Reconfiguração Habitacional Urbana e Expansão de Moradias Compactas',
    sinal: 'Os lares de morador único já representam 19,5% dos domicílios no Brasil, enquanto apartamentos compactos e estúdios concentram 41,1% das intenções de novos lançamentos imobiliários.',
    tendencia: 'A verticalização acelerada dos centros urbanos e a redução do tamanho médio das famílias exigem soluções residenciais projetadas para otimização espacial, fácil instalação e perfeita integração estética em banheiros e cozinhas de metragem reduzida.',
    riscosLorenzetti: [
      'Pode gerar perda de atratividade de linhas com dimensões excessivas para ambientes compactos.',
      'Pode concentrar poder de negociação em grandes incorporadoras imobiliárias com forte pressão por preços.',
      'Pode intensificar a concorrência em soluções compactas padronizadas para construtoras.'
    ],
    oportunidadesLorenzetti: [
      'Pode criar oportunidade para desenhar e destacar duchas, metais e acessórios sob medida para plantas inteligentes de até 40 m².',
      'Pode fortalecer parcerias de especificação técnica diretamente nos projetos arquitetônicos de incorporadoras imobiliárias.',
      'Pode estimular produtos ergonômicos e multifuncionais com manutenção acessível ao próprio morador.'
    ],
    impacto: 'Médio',
    horizonte: 'Médio a Longo Prazo (2027-2035)',
    temasRelacionados: [
      'Cenário Habitacional',
      'Cenário Mercadológico'
    ],
    supportingPageIds: [
      'hab-lares-unipessoais',
      'perfil-consumo',
      'hab-deficit'
    ],
    supportingFactIds: [
      'hab-lares-unipessoais::factual::unipessoais-participacao',
      'hab-lares-unipessoais::factual::lancamentos-compactos',
      'perfil-consumo::perfis-emergentes::pragmaticos-custo-vida'
    ],
    evidenceIds: [
      'lares-ev-band-morar-sozinho-15mi',
      'lares-ev-exame-lancamentos-compactos-40m2'
    ],
    sourceIds: [
      'jornal-da-band-ibge-pnad-continua',
      'exame-levantamento-housi'
    ],
    fundamentacao: [
      {
        afirmacao: 'Domicílios com apenas um morador alcançam 19,5% do total de residências brasileiras.',
        factId: 'hab-lares-unipessoais::factual::unipessoais-participacao',
        source: 'jornal-da-band-ibge-pnad-continua'
      },
      {
        afirmacao: 'Studios e unidades de até 40 m² concentram 41,1% das intenções de lançamento das incorporadoras.',
        factId: 'hab-lares-unipessoais::factual::lancamentos-compactos',
        source: 'exame-levantamento-housi'
      }
    ]
  },
  {
    id: 'MT-003',
    titulo: 'Pressão de Custos em Insumos Industriais e Volatilidade Tarifária',
    sinal: 'A forte oscilação de commodities como alumínio e cobre pressiona os custos industriais, enquanto 57% dos fabricantes do setor eletroeletrônico relatam aperto nas margens operacionais sob tarifas externas de 37,5% acumuladas.',
    tendencia: 'A volatilidade nos mercados globais de matérias-primas e a adoção de barreiras tarifárias externas demandam excelência contínua em engenharia de materiais, substituição técnica e eficiência nos processos fabris para sustentar a competitividade.',
    riscosLorenzetti: [
      'Pode elevar os custos de fabricação em categorias intensivas em ligas metálicas e condutores.',
      'Pode limitar a capacidade de repasse imediato dos custos industriais diante da sensibilidade do varejo.',
      'Pode criar assimetrias competitivas com concorrentes internacionais que contam com subsídios locais em matérias-primas.'
    ],
    oportunidadesLorenzetti: [
      'Pode acelerar projetos de engenharia de valor com substituição de metais por polímeros técnicos de alta engenharia.',
      'Pode ampliar a vantagem competitiva de escala produtiva e automação em relação a fabricantes menores.',
      'Pode impulsionar a inovação em processos internos de manufatura com maior eficiência no uso de energia e insumos.'
    ],
    impacto: 'Alto',
    horizonte: 'Curto a Médio Prazo (2026-2028)',
    temasRelacionados: [
      'Economia Brasileira',
      'Geopolítica & Economia Global'
    ],
    supportingPageIds: [
      'eco-eletroeletronico',
      'geo-commodities',
      'estados-unidos'
    ],
    supportingFactIds: [
      'eco-eletroeletronico::06-commodities::aluminio',
      'eco-eletroeletronico::06-commodities::cobre',
      'eco-eletroeletronico::03-sondagem::custos-pressao',
      'eco-eletroeletronico::03-sondagem::custos-reajuste',
      'eco-eletroeletronico::04-sobretaxas::tarifa-acumulada'
    ],
    evidenceIds: [
      'sob-001',
      'pdf-001'
    ],
    sourceIds: [
      'abinee-decon',
      'abinee'
    ],
    fundamentacao: [
      {
        afirmacao: 'Alumínio acumulou alta de 45% e cobre acumulou alta de 28% entre maio de 2025 e abril de 2026.',
        factId: 'eco-eletroeletronico::06-commodities::aluminio',
        source: 'abinee-decon'
      },
      {
        afirmacao: '57% das empresas relataram pressões de alta nos custos e 62% reajustaram preços finais.',
        factId: 'eco-eletroeletronico::03-sondagem::custos-pressao',
        source: 'abinee-decon'
      },
      {
        afirmacao: 'Carga tarifária acumulada sobre produtos brasileiros exportados para os EUA alcançou 37,5%.',
        factId: 'eco-eletroeletronico::04-sobretaxas::tarifa-acumulada',
        source: 'abinee'
      }
    ]
  },
  {
    id: 'MT-004',
    titulo: 'Integração Comercial com a Ásia e Concorrência de Importados',
    sinal: 'O comércio bilateral entre Brasil e China ultrapassa US$ 170,8 bilhões em fluxo anual, enquanto o setor eletroeletrônico nacional registra expressivo volume de importação de insumos e manufaturados.',
    tendencia: 'A expressiva escala produtiva asiática mantém fluxo contínuo de itens e componentes ao mercado brasileiro, intensificando a concorrência nos canais de venda e reforçando a necessidade de proteção da cadeia de suprimentos e diferenciação por serviço e conformidade.',
    riscosLorenzetti: [
      'Pode intensificar a pressão competitiva de produtos importados com preços agressivos em marketplaces digitais.',
      'Pode gerar dependência de componentes eletrônicos essenciais sujeitos a oscilações de frete e suprimento internacional.',
      'Pode dificultar a competitividade em linhas com baixo índice de diferenciação tecnológica.'
    ],
    oportunidadesLorenzetti: [
      'Pode alavancar a força da marca nacional, com garantia de assistência técnica presencial e total conformidade Inmetro.',
      'Pode viabilizar a compra estratégica de semicondutores e sensores globais para agregação de recursos inteligentes aos produtos.',
      'Pode fortalecer a fidelidade no canal físico pela segurança de fornecimento e pronta entrega aos revendedores.'
    ],
    impacto: 'Alto',
    horizonte: 'Médio a Longo Prazo (2026-2032)',
    temasRelacionados: [
      'Economia Mundial',
      'Economia Brasileira'
    ],
    supportingPageIds: [
      'china',
      'eco-eletroeletronico'
    ],
    supportingFactIds: [
      'china::indicador::comercio-bilateral',
      'china::comercio-historico::2026-importacoes',
      'china::indicador::pib-china',
      'eco-eletroeletronico::05-balanco::deficit-total',
      'eco-eletroeletronico::05-balanco::imp-total'
    ],
    evidenceIds: [
      'ev-cn-pib-q2-2026',
      'ev-cn-estrategia-exportadora-2026'
    ],
    sourceIds: [
      'agencia-brasil-2026',
      'secex'
    ],
    fundamentacao: [
      {
        afirmacao: 'Comércio bilateral Brasil-China atingiu recorde de US$ 170,8 bilhões com US$ 74,5 bilhões em importações projetadas.',
        factId: 'china::indicador::comercio-bilateral',
        source: 'agencia-brasil-2026'
      },
      {
        afirmacao: 'Déficit comercial do setor eletroeletrônico somou US$ 21,64 bilhões e importações somaram US$ 25,77 bilhões no 1º semestre de 2026.',
        factId: 'eco-eletroeletronico::05-balanco::deficit-total',
        source: 'secex'
      }
    ]
  },
  {
    id: 'MT-005',
    titulo: 'Digitalização da Jornada do Consumidor e Centralidade da Reputação da Marca',
    sinal: 'Cerca de 69,7% dos consumidores utilizam lojas físicas e 34,0% utilizam e-commerce na pesquisa de materiais, enquanto 70% evitam marcas com reclamações em redes sociais.',
    tendencia: 'A jornada de compra de itens de acabamento e instalação consolidou-se em padrão omnicanal, onde o suporte técnico pré-compra, tutoriais de instalação e a confiabilidade das avaliações digitais orientam diretamente a conversão no balcão e no e-commerce.',
    riscosLorenzetti: [
      'Pode amplificar o impacto de experiências negativas de instalação ou atendimento em redes sociais e plataformas de avaliação.',
      'Pode aumentar a vulnerabilidade de vendas em lojas físicas diante da consulta instantânea de preços e avaliações no smartphone.',
      'Pode favorecer marcas nativas digitais com estratégias ágeis de relacionamento direto com o consumidor.'
    ],
    oportunidadesLorenzetti: [
      'Pode ampliar a liderança no ponto de venda mediante conteúdos digitais educativos, vídeos de instalação e capacitação técnica de profissionais.',
      'Pode transformar a reputação centenária de qualidade em diferencial decisivo de conversão no balcão de vendas.',
      'Pode estruturar ecossistemas de pós-venda que transformem consumidores e instaladores satisfeitos em promotores da marca.'
    ],
    impacto: 'Médio',
    horizonte: 'Curto a Médio Prazo (2026-2030)',
    temasRelacionados: [
      'Cenário Mercadológico',
      'Economia Brasileira'
    ],
    supportingPageIds: [
      'jornada-compra',
      'eco-eletroeletronico',
      'perfil-consumo'
    ],
    supportingFactIds: [
      'jornada-compra::pesquisa::loja-fisica-2025',
      'jornada-compra::pesquisa::ecommerce-2025',
      'jornada-compra::intencao::promocoes-geral',
      'jornada-compra::confianca::reclamacoes-redes',
      'jornada-compra::confianca::boa-experiencia-preferencia',
      'eco-eletroeletronico::03-sondagem::vendas-abaixo'
    ],
    evidenceIds: [
      'ev-fundacao-dados-2026',
      'ev-opinion-box-octadesk-cx-trends-2026'
    ],
    sourceIds: [
      'fundacao-dados-2026',
      'opinion-box-octadesk-cx-2026',
      'abinee-decon'
    ],
    fundamentacao: [
      {
        afirmacao: '69,7% utilizam lojas físicas e 34,0% utilizam e-commerce para pesquisar materiais de construção.',
        factId: 'jornada-compra::pesquisa::loja-fisica-2025',
        source: 'fundacao-dados-2026'
      },
      {
        afirmacao: '70% evitam comprar ao ver reclamações nas redes sociais e 60% dão preferência a marcas com boas experiências.',
        factId: 'jornada-compra::confianca::reclamacoes-redes',
        source: 'opinion-box-octadesk-cx-2026'
      }
    ]
  },
  {
    id: 'MT-006',
    titulo: 'Transição Energética, Descarbonização e Pressão sobre a Infraestrutura Elétrica',
    sinal: 'A matriz elétrica brasileira atinge 86,8% de participação renovável e o país institui o marco legal de comércio de emissões, enquanto o consumo residencial responde por 28,2% da eletricidade nacional.',
    tendencia: 'A expansão contínua de fontes renováveis somada a exigências regulatórias de sustentabilidade e novas cargas elétricas impulsiona a valorização de soluções eficientes de aquecimento e gestão energética, demandando equipamentos de alta performance que minimizem picos de consumo.',
    riscosLorenzetti: [
      'Pode gerar exigências regulatórias mais estritas sobre eficiência hidroenergética e rotulagem de equipamentos de aquecimento.',
      'Pode aumentar a sensibilidade do consumidor ao consumo elétrico de aparelhos de banho em momentos de bandeira tarifária elevada.',
      'Pode exigir investimentos adicionais em adequação fabril a metas de emissões e critérios do mercado de carbono.'
    ],
    oportunidadesLorenzetti: [
      'Pode criar oportunidade para destacar produtos elétricos de alta eficiência com controle inteligente de potência e consumo de água.',
      'Pode valorizar soluções integradas que combinem aquecimento elétrico e solar com tecnologias de baixo impacto ambiental.',
      'Pode fortalecer o posicionamento institucional junto a consumidores e parceiros corporativos focados em práticas sustentáveis.'
    ],
    impacto: 'Alto',
    horizonte: 'Médio a Longo Prazo (2027-2035)',
    temasRelacionados: [
      'Energia e Infraestrutura',
      'Meio Ambiente e Clima'
    ],
    supportingPageIds: [
      'ene-renovavel',
      'ene-carbono',
      'amb-mudancas',
      'ene-datacenters'
    ],
    supportingFactIds: [
      'ene-renovavel::kpi::brasil-matriz-eletrica-renovavel',
      'ene-renovavel::distribution::consumo-setor-brasil',
      'ene-carbono::statement::marco-legal-lei15042',
      'amb-mudancas::kpi::prejuizo-desastres-2025',
      'ene-datacenters::kpi::investimentos-transmissao-2035'
    ],
    evidenceIds: [
      'solar-3tw-global-2026',
      'renovaveis-carvao-marco-historico'
    ],
    sourceIds: [
      'epe-ben-2026',
      'fazenda-sbce-lei15042'
    ],
    fundamentacao: [
      {
        afirmacao: 'A matriz elétrica brasileira atingiu 86,8% de renovabilidade em 2025 segundo o Balanço Energético Nacional (BEN 2026).',
        factId: 'ene-renovavel::kpi::brasil-matriz-eletrica-renovavel',
        source: 'epe-ben-2026'
      },
      {
        afirmacao: 'O setor residencial responde por 28,2% do consumo elétrico nacional, com forte presença de chuveiros e aquecimento de água.',
        factId: 'ene-renovavel::distribution::consumo-setor-brasil',
        source: 'epe-ben-2026'
      },
      {
        afirmacao: 'A Lei nº 15.042/2024 instituiu o Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa (SBCE).',
        factId: 'ene-carbono::statement::marco-legal-lei15042',
        source: 'fazenda-sbce-lei15042'
      }
    ]
  },
  {
    id: 'MT-007',
    titulo: 'Reconfiguração Geopolítica Global, Riscos Logísticos e Fragmentação do Comércio',
    sinal: 'A economia internacional desacelera para 3,0% em 2026 sob incertezas comerciais, enquanto conflitos geopolíticos e rotas marítimas estratégicas sustentam volatilidade em fretes e insumos.',
    tendencia: 'A multiplicação de tensões geopolíticas e o aumento de medidas protecionistas entre grandes blocos econômicos reforçam a necessidade de resiliência nas cadeias produtivas, valorizando fornecedores com base industrial local e gestão preventiva de suprimentos.',
    riscosLorenzetti: [
      'Pode acarretar atrasos e elevação de custos de frete internacional no transporte de componentes importados.',
      'Pode gerar surtos pontuais de escassez ou encarecimento de matérias-primas críticas no mercado internacional.',
      'Pode impor volatilidade cambial sobre os contratos de compra de suprimentos industriais.'
    ],
    oportunidadesLorenzetti: [
      'Pode reforçar a confiabilidade da produção fabril nacional frente a competidores dependentes de importação acabada.',
      'Pode estimular o desenvolvimento de fornecedores regionais na América Latina para mitigação de riscos de rotas longas.',
      'Pode permitir ganhos de mercado em momentos de desabastecimento de concorrentes que operam sem estoques de segurança.'
    ],
    impacto: 'Alto',
    horizonte: 'Médio a Longo Prazo (2026-2032)',
    temasRelacionados: [
      'Geopolítica & Economia Global',
      'Economia Mundial'
    ],
    supportingPageIds: [
      'geo-conflitos',
      'geo-logistica',
      'geo-economia-mundial',
      'china'
    ],
    supportingFactIds: [
      'geo-conflitos::ucrania-russia::headline',
      'cenario-logistico::headline',
      'geo-economia-mundial::crescimento-global::headline',
      'china::indicador::pib-china'
    ],
    evidenceIds: [
      'ev-ur-reuters-01',
      'logistica-ev-1'
    ],
    sourceIds: [
      'reuters',
      'cnn-brasil',
      'money-times-2026'
    ],
    fundamentacao: [
      {
        afirmacao: 'A economia mundial desacelera para 3,0% em 2026 diante do choque de energia e incertezas internacionais.',
        factId: 'geo-economia-mundial::crescimento-global::headline',
        source: 'cnn-brasil'
      },
      {
        afirmacao: 'A logística internacional opera com menor previsibilidade decorrente de tensões em rotas marítimas.',
        factId: 'cenario-logistico::headline',
        source: 'reuters'
      },
      {
        afirmacao: 'O PIB da China cresceu 5,0% no primeiro trimestre de 2026, impulsionado por manufatura.',
        factId: 'china::indicador::pib-china',
        source: 'money-times-2026'
      }
    ]
  }
];
