/**
 * ESTADO, PERSISTÊNCIA E GOVERNANÇA DO RELATÓRIO ESTRATÉGICO CONSOLIDADO (2027-2037)
 * 
 * REGRAS CRÍTICAS DE GOVERNANÇA (Itens 18 a 34):
 * 1. NENHUMA AFIRMAÇÃO SEM EVIDÊNCIA. NENHUMA MUDANÇA SEM NOVA EVIDÊNCIA.
 * 2. PROIBIDO inventar fatos, tendências, números, fontes ou hipóteses.
 * 3. RASTREABILIDADE OBRIGATÓRIA: Cada leitura estratégica possui IDs persistentes (MT-001, MT-002...)
 *    e vinculação obrigatória a evidenceIds[] (mínimo de 2 evidências independentes) e sourceIds[].
 * 4. PROIBIÇÃO DE PLACEHOLDERS: Textos genéricos ou de desenvolvimento nunca contam como evidência.
 * 5. ESTABILIDADE ENTRE GERAÇÕES: Se a base de evidências for idêntica (mesmo evidenceHash),
 *    o sistema NÃO reescreve nem altera a estrutura estratégica aleatoriamente.
 * 6. DIFERENCIAÇÃO:
 *    - Fato/Evidência (base documental)
 *    - Interpretação (síntese)
 *    - Implicação Lorenzetti (estritamente hipóteses observacionais: "Pode...")
 * 7. AUDITORIA: Registro de alterações mantidas[], atualizadas[], novas[], removidas[].
 */

export interface FundamentacaoFactual {
  afirmacao: string;
  evidenceId: string;
  source: string;
}

export interface LeituraEstrategica {
  id: string; // Identificador persistente imutável: MT-001, MT-002...
  numero: number;
  titulo: string;
  sinal: string; // Fato observado diretamente nas evidências
  tendencia: string; // Leitura estrutural decorrente das evidências
  riscosLorenzetti: string[]; // Hipóteses observacionais ("Pode...") máx 3 bullets
  oportunidadesLorenzetti: string[]; // Hipóteses observacionais ("Pode...") máx 3 bullets
  impacto: 'Alto' | 'Médio' | 'Baixo';
  horizonte: string;
  temasRelacionados: string[];
  evidenceIds: string[]; // Rastreabilidade obrigatória: IDs das evidências no sistema (mínimo 2)
  sourceIds: string[]; // Fontes institucionais que comprovam a leitura
  fundamentacao?: FundamentacaoFactual[]; // Afirmações específicas vinculadas às evidências
}

export interface ConexaoEstrategica {
  temas: string[];
  insight: string;
}

export interface DimensaoLorenzetti {
  dimensao: string;
  implicacoes: string[];
}

export interface TemasMonitoramento {
  prioridadeAlta: string[];
  acompanhamento: string[];
  sinaisEmergentes: string[];
}

export interface FonteRelevante {
  instituicao: string;
  titulo: string;
  data: string;
  tipo?: string;
  link?: string;
}

export interface ReportGovernanceMetadata {
  evidenceHash: string;
  previousHash?: string;
  totalEvidenciasAnalisadas: number;
  dataVersion: string;
  alteracoes: {
    mantidas: string[];
    atualizadas: string[];
    novas: string[];
    removidas: string[];
  };
  statusGovernança: 'auditado' | 'estavel' | 'atualizado_incremental';
  observacao?: string;
}

export interface StrategicReportData {
  ultimaAnalise: string; // Ex: '14/09/2026'
  governance: ReportGovernanceMetadata;
  resumoExecutivo: {
    paragrafo1: string;
    paragrafo2: string;
    paragrafo3?: string;
    principaisMensagens: string[];
  };
  leiturasEstrategicas: LeituraEstrategica[];
  riscosConsolidados: string[];
  oportunidadesConsolidadas: string[];
  conexoesEstrategicas: ConexaoEstrategica[];
  implicacoesLorenzetti: DimensaoLorenzetti[];
  temasMonitoramento: TemasMonitoramento;
  principaisFontes: FonteRelevante[];
  // Mantido para compatibilidade com partes da Home
  macrotendencias?: any[];
}

const STORAGE_KEY = 'lorenzetti_strategic_report_v5_grounded';
export const REPORT_UPDATED_EVENT = 'lorenzetti_strategic_report_updated';

/**
 * 8 Leituras Estratégicas com Identidade Estável (MT-001 a MT-008)
 * e Rastreabilidade Rigorosa às Evidências do Portal.
 */
export const INITIAL_LEITURAS: LeituraEstrategica[] = [
  {
    id: 'MT-001',
    numero: 1,
    titulo: 'Consumidor mais racional, seletivo e focado em durabilidade e custo de uso',
    sinal: 'O comprometimento de renda das famílias brasileiras e as taxas de juros reais elevadas mantêm o consumidor cauteloso, intensificando a comparação prévia de preços nos canais digitais e a análise das contas mensais de água e energia.',
    tendencia: 'A decisão de compra nos materiais de construção migra do menor preço inicial para a busca por custo total de posse (vida útil comprovada, facilidade de conserto e baixo consumo operacional).',
    riscosLorenzetti: [
      'Pode haver pressão sobre margens em linhas intermediárias decorrente de migração pontual de demanda para modelos de entrada.',
      'Pode aumentar a sensibilidade do consumidor a reajustes de preços no varejo sem imediata percepção de inovação funcional.'
    ],
    oportunidadesLorenzetti: [
      'Pode criar oportunidades para posicionar linhas com tecnologia de conservação hídrica e energética como investimento econômico familiar.',
      'Pode fortalecer a fidelidade à marca com garantia estendida e ampla disponibilidade de peças originais de reposição.'
    ],
    impacto: 'Alto',
    horizonte: 'Curto a Médio prazo (2027–2031)',
    temasRelacionados: ['Perfil de Consumo', 'Endividamento das Famílias', 'Jornada de Compra', 'Rendimento do Brasileiro'],
    evidenceIds: ['endiv-fam-001', 'endiv-fam-002', 'perfil-001', 'rend-001'],
    sourceIds: ['Banco Central do Brasil (BCB)', 'CNC', 'IBGE – PNAD Contínua', 'NielsenIQ']
  },
  {
    id: 'MT-002',
    numero: 2,
    titulo: 'Aceleração tecnológica, IA aplicada e automação residencial e industrial',
    sinal: 'A rápida disseminação da inteligência artificial generativa em rotinas corporativas e o avanço da conectividade de baixa latência impulsionam a automação de linhas fabris e a adoção de ecossistemas residenciais conectados.',
    tendencia: 'Equipamentos hidrotérmicos e eletrodomésticos iniciam a transição de controles estritamente mecânicos para controle eletrônico inteligente com ajuste preditivo e diagnóstico de falhas.',
    riscosLorenzetti: [
      'Pode representar risco de defasagem tecnológica caso concorrentes globais introduzam plataformas conectadas com ecossistemas proprietários.',
      'Pode exigir capacitação contínua de engenharia interna em protocolos de software e segurança de dados embarcados.'
    ],
    oportunidadesLorenzetti: [
      'Pode criar oportunidades para desenvolvimento de chuveiros e aquecedores com modulação eletrônica inteligente e interface via aplicativo.',
      'Pode aumentar a produtividade industrial com manutenção preditiva em maquinários fabris e automação de processos repetitivos.'
    ],
    impacto: 'Alto',
    horizonte: 'Médio a Longo prazo (2027–2037)',
    temasRelacionados: ['Inteligência Artificial', 'Smart Home', 'Automação Industrial', 'Setor Eletroeletrônico'],
    evidenceIds: ['ind-001', 'serv-003', 'ind-004', 'prod-002'],
    sourceIds: ['Abinee', 'CNI', 'EPE (Empresa de Pesquisa Energética)', 'Fórum Econômico Mundial (WEF)']
  },
  {
    id: 'MT-003',
    numero: 3,
    titulo: 'Reconfiguração geopolítica, protecionismo e reorganização das cadeias de suprimentos',
    sinal: 'Disputas comerciais multilaterais, aplicação frequente de salvaguardas antidumping e gargalos logísticos em estreitos e canais internacionais encarecem fretes e ampliam a volatilidade de insumos industriais.',
    tendencia: 'Aceleração de estratégias de diversificação de fornecimento regional (nearshoring) e busca de fornecedores locais confiáveis de polímeros e ligas metálicas.',
    riscosLorenzetti: [
      'Pode gerar oscilações de custos em termoplásticos de engenharia, cobre e componentes eletrônicos importados.',
      'Pode demandar manutenção de estoques de segurança maiores para itens com dependência exclusiva do mercado asiático.'
    ],
    oportunidadesLorenzetti: [
      'Pode criar oportunidades de ampliação de exportações para mercados da América Latina com vantagem logística regional.',
      'Pode fortalecer parcerias estratégicas de longo prazo com a cadeia nacional de reciclagem de metais e compostos plásticos.'
    ],
    impacto: 'Médio',
    horizonte: 'Médio a Longo prazo (2027–2035)',
    temasRelacionados: ['Conflitos Internacionais', 'América Latina', 'Cenário Logístico', 'Commodities', 'Exportação'],
    evidenceIds: ['exp-001', 'exp-003', 'exp-004', 'sobr-001', 'sobr-002'],
    sourceIds: ['MDIC / SECEX', 'CEBC', 'Ipea', 'Cenário Logístico']
  },
  {
    id: 'MT-004',
    numero: 4,
    titulo: 'Transição energética, eletrificação residencial e conservação de recursos hídricos',
    sinal: 'A forte penetração da energia solar distribuída em residências no Brasil, somada à frequência de bandeiras tarifárias e à pressão sobre bacias hidrográficas, eleva a atenção pública para o consumo elétrico e de água.',
    tendencia: 'Pressão crescente por eletrodomésticos com máxima eficiência de conversão por quilowatt-hora e redutores integrados de vazão sem perda de conforto térmico.',
    riscosLorenzetti: [
      'Pode haver aperto nos critérios de rotulagem Procel e criação de normas mais restritivas para consumo hídrico de chuveiros.',
      'Pode demandar investimentos adicionais de engenharia para atingir novas faixas de eficiência energética.'
    ],
    oportunidadesLorenzetti: [
      'Pode criar oportunidades para sistemas híbridos (solar + elétrico) e aquecedores a gás de alto rendimento térmico.',
      'Pode valorizar duchas e torneiras dotadas de arejadores avançados que proporcionem sensação de alto volume com baixa vazão.'
    ],
    impacto: 'Alto',
    horizonte: 'Curto a Longo prazo (2027–2037)',
    temasRelacionados: ['Energia Renovável', 'Eficiência Energética', 'Eletrificação', 'Fenômenos Climáticos'],
    evidenceIds: ['clima-solar-01', 'clima-ons-01', 'epe-energy-01', 'abinee-sust-01'],
    sourceIds: ['EPE (Empresa de Pesquisa Energética)', 'ANEEL', 'ONS', 'Canal Solar', 'Abinee']
  },
  {
    id: 'MT-005',
    numero: 5,
    titulo: 'Mudanças demográficas: aceleração de lares unipessoais e envelhecimento da população',
    sinal: 'Os dados censitários evidenciam aumento sem precedentes de lares habitados por apenas 1 ou 2 pessoas e elevação contínua da proporção de brasileiros com mais de 60 anos nas áreas metropolitanas.',
    tendencia: 'A redução das metragens dos banheiros em lançamentos imobiliários compactos alia-se à necessidade urgente de produtos seguros, ergonômicos e acessíveis.',
    riscosLorenzetti: [
      'Pode reduzir a participação relativa de modelos de grande porte nos lançamentos residenciais verticais compactos.',
      'Pode impor restrições de espaço físico em tubulações e shafts para instalações de modelos tradicionais volumosos.'
    ],
    oportunidadesLorenzetti: [
      'Pode criar oportunidades para linhas compactas e elegantes desenvolvidas sob medida para microapartamentos urbanos.',
      'Pode abrir espaço para linhas com foco em acessibilidade e facilidade de manuseio para consumidores da terceira idade.'
    ],
    impacto: 'Alto',
    horizonte: 'Médio a Longo prazo (2027–2037)',
    temasRelacionados: ['Lares Unipessoais', 'Estilos de Vida', 'Mercado Imobiliário', 'Perfil de Consumo'],
    evidenceIds: ['lares-unip-01', 'secovi-imob-01', 'fipezap-01', 'censo-ibge-01'],
    sourceIds: ['IBGE (Censo Demográfico)', 'Secovi-SP', 'FipeZAP', 'Ipea']
  },
  {
    id: 'MT-006',
    numero: 6,
    titulo: 'Transformação do mercado de trabalho e escassez crônica de mão de obra técnica',
    sinal: 'Pesquisas setoriais indicam que mais de 80% das indústrias e construtoras enfrentam escassez severa de técnicos, eletricistas e encanadores habilitados no país.',
    tendencia: 'Valorização de soluções construtivas de fácil instalação, que reduzam tempo de canteiro e eliminem a probabilidade de falhas e retrabalho.',
    riscosLorenzetti: [
      'Pode aumentar o índice de garantias acionadas indevidamente por falhas de instalação executadas por mão de obra despreparada.',
      'Pode limitar a comercialização de produtos complexos que dependam de adaptações hidráulicas ou elétricas não padronizadas.'
    ],
    oportunidadesLorenzetti: [
      'Pode criar diferenciação de mercado através de sistemas de engate rápido ("plug-and-play") com montagem simplificada.',
      'Pode fortalecer a presença de marca por meio de programas estruturados de treinamento digital e presencial para instaladores.'
    ],
    impacto: 'Médio',
    horizonte: 'Curto a Médio prazo (2027–2032)',
    temasRelacionados: ['Mão de obra qualificada', 'Capacitação Técnica', 'Construção Civil', 'Automação'],
    evidenceIds: ['desemp-001', 'desemp-004', 'caged-emp-01', 'cni-qualif-01'],
    sourceIds: ['IBGE – PNAD Contínua', 'Ministério do Trabalho e Emprego (Novo Caged)', 'CNI', 'CBIC']
  },
  {
    id: 'MT-007',
    numero: 7,
    titulo: 'Pressão regulatória, governança ESG e consolidação do mercado de carbono',
    sinal: 'A instituição do Sistema Brasileiro de Comércio de Emissões (SBCE) e a regulamentação estadual de logística reversa de descartes plásticos e eletroeletrônicos aumentam o escrutínio sobre as indústrias de manufatura.',
    tendencia: 'Transparência de ciclo de vida completo do produto e reciclabilidade de materiais tornam-se exigências contratuais em grandes canais e compras institucionais.',
    riscosLorenzetti: [
      'Pode representar custos adicionais de conformidade com auditorias de logística reversa e gestão de resíduos sólidos pós-consumo.',
      'Pode exigir comprovação de pegada de carbono auditada para participação em licitações públicas ou fornecimento corporativo.'
    ],
    oportunidadesLorenzetti: [
      'Pode criar oportunidades de pioneirismo com linhas manufaturadas com percentual de polímeros reciclados e embalagens biodegradáveis.',
      'Pode viabilizar acesso prioritário a linhas de crédito verde subsidiadas atreladas ao cumprimento de metas de sustentabilidade.'
    ],
    impacto: 'Médio',
    horizonte: 'Médio prazo (2027–2033)',
    temasRelacionados: ['Mercado de Carbono', 'Marcos Regulatórios', 'Logística Reversa', 'Governança ESG'],
    evidenceIds: ['esg-carbono-01', 'esg-log-reversa-01', 'esg-febraban-01', 'abinee-esg-01'],
    sourceIds: ['Congresso Nacional / Fazenda', 'MMA / Ibama', 'Febraban', 'Abinee']
  },
  {
    id: 'MT-008',
    numero: 8,
    titulo: 'Expansão habitacional, programas sociais de moradia e infraestrutura urbana',
    sinal: 'A continuidade de programas habitacionais federais e estaduais (como Minha Casa Minha Vida) para redução do déficit habitacional brasileiro sustenta uma demanda perene por linhas construtivas padronizadas e certificadas.',
    tendencia: 'Intensificação da demanda por soluções hidrotérmicas de entrada com alta escala e padronização para canteiros de obras de habitação de interesse social.',
    riscosLorenzetti: [
      'Pode demandar acompanhamento contínuo do ritmo de liberação de crédito FGTS e subsídios do orçamento geral da União.',
      'Pode haver pressão agressiva de preços por parte de grandes construtoras operando em compras corporativas de grande volume.'
    ],
    oportunidadesLorenzetti: [
      'Pode manter aquecido o volume de vendas de chuveiros e torneiras elétricas nas faixas de entrada e média para habitações populares.',
      'Pode criar oportunidades para fornecimento corporativo direto a construtoras especializadas em programas habitacionais.'
    ],
    impacto: 'Alto',
    horizonte: 'Curto a Longo prazo (2027–2037)',
    temasRelacionados: ['Mercado Imobiliário', 'Déficit Habitacional', 'Programas Sociais', 'Novo PAC'],
    evidenceIds: ['mcmv-caixa-01', 'deficit-hab-01', 'cbic-hab-01', 'pac-infra-01'],
    sourceIds: ['Caixa Econômica Federal', 'Ministério das Cidades', 'Fundação João Pinheiro', 'CBIC']
  }
];

export const INITIAL_CONEXOES: ConexaoEstrategica[] = [
  {
    temas: ['Pressão sobre renda', 'Digitalização da jornada de compra', 'Busca por durabilidade'],
    insight: 'O consumidor tende a avaliar cada vez mais o custo total do ciclo de vida do produto (consumo de água/luz e longevidade) e não apenas o preço de aquisição na gôndola.'
  },
  {
    temas: ['Lares unipessoais', 'Envelhecimento da população', 'Redução da metragem dos banheiros'],
    insight: 'A demanda habitacional migra rapidamente para produtos compactos que combinem design contemporâneo com ergonomia facilitada e acionamento seguro para faixas etárias seniores.'
  },
  {
    temas: ['Transição energética', 'Bandeiras tarifárias na conta de luz', 'Conectividade Smart Home'],
    insight: 'O aquecimento de água residencial tende a integrar sensores de modulação eletrônica e compatibilidade com geração solar distribuída para minimizar o custo nos horários de pico.'
  },
  {
    temas: ['Escassez de instaladores qualificados', 'Pressão de custos em obras', 'Necessidade de retenção de garantias'],
    insight: 'A facilidade e rapidez de instalação tornam-se fatores decisivos para especificadores e construtoras, premiando produtos com conexões padronizadas e instruções visuais intuitivas.'
  }
];

export const INITIAL_DIMENSOES_LORENZETTI: DimensaoLorenzetti[] = [
  {
    dimensao: 'Portfólio e Produtos',
    implicacoes: [
      'Pode orientar o desenvolvimento de modelos com controle eletrônico gradual de potência e compatibilidade nativa com aquecimento solar.',
      'Pode acelerar o design de linhas compactas e ergonômicas voltadas para pequenos espaços e usuários seniores.',
      'Pode demandar a introdução de sistemas "plug-and-play" que dispensem ferramentas complexas na fixação e conexão hidráulica.'
    ]
  },
  {
    dimensao: 'Consumidor e Canais',
    implicacoes: [
      'Pode exigir comunicação visual clara nos pontos de venda destacando o custo por banho e a durabilidade comparativa.',
      'Pode criar oportunidades para estreitar parcerias com construtoras dedicadas a empreendimentos compactos e habitação social.',
      'Pode demandar canais digitais interativos de suporte técnico rápido para solucionar dúvidas de instalação no varejo.'
    ]
  },
  {
    dimensao: 'Indústria e Operações',
    implicacoes: [
      'Pode impulsionar a automação preditiva e sensoriamento fabril em processos críticos de injeção plástica e prensagem.',
      'Pode justificar investimentos contínuos em eficiência energética fabril e redução de geração de refugo de metais e termoplásticos.'
    ]
  },
  {
    dimensao: 'Suprimentos e Logística',
    implicacoes: [
      'Pode sugerir ampliação de fornecedores regionais qualificados de cobre, polímeros de engenharia e componentes elétricos.',
      'Pode indicar a conveniência de estoques de segurança dinâmicos para componentes importados sujeitos a atritos aduaneiros.'
    ]
  },
  {
    dimensao: 'Pessoas e Capacitação',
    implicacoes: [
      'Pode valorizar a criação de academias técnicas digitais para capacitação e credenciamento de encanadores e eletricistas pelo país.',
      'Pode demandar requalificação interna de equipes industriais em mecatrônica, dados e automação de processos.'
    ]
  },
  {
    dimensao: 'Sustentabilidade e Regulação',
    implicacoes: [
      'Pode orientar a ampliação do uso de polímeros reciclados pós-consumo e certificação de pegada hídrica e carbônica.',
      'Pode requerer monitoramento proativo das revisões de normas de eficiência Procel e regramentos de logística reversa.'
    ]
  }
];

export const INITIAL_TEMAS_MONITORAMENTO: TemasMonitoramento = {
  prioridadeAlta: [
    'Revisão dos tetos de vazão hídrica e índices de eficiência energética na etiquetagem Procel/Inmetro.',
    'Evolução do orçamento e contratações do programa Minha Casa Minha Vida e crédito FGTS habitacional.',
    'Variação de cotações internacionais de cobre, ligas metálicas e polímeros plásticos (polipropileno, ABS e poliamidas).',
    'Nível de endividamento e comprometimento de renda das famílias brasileiras e taxas de juros reais.'
  ],
  acompanhamento: [
    'Ritmo de expansão de sistemas solares fotovoltaicos distribuídos residenciais e tarifas de energia elétrica.',
    'Mudanças regulatórias sobre modelos de jornada de trabalho (escala de trabalho industrial e comércio).',
    'Implementação do Sistema Brasileiro de Comércio de Emissões (Mercado de Carbono) e regras de logística reversa.',
    'Lançamentos e metragem média de novos empreendimentos residenciais nas principais regiões metropolitanas.'
  ],
  sinaisEmergentes: [
    'Adoção de assistentes de inteligência artificial generativa e protocolos unificados de automação residencial (padrão Matter).',
    'Rotas logísticas alternativas no Mercosul (como Corredor Bioceânico) e novos acordos comerciais bilaterais.',
    'Materiais poliméricos avançados de base biológica para substituição sustentável em engenharia de produtos.'
  ]
};

export const INITIAL_PRINCIPAIS_FONTES: FonteRelevante[] = [
  {
    instituicao: 'IBGE (Instituto Brasileiro de Geografia e Estatística)',
    titulo: 'Censo Demográfico e Pesquisa Nacional por Amostra de Domicílios (PNAD Contínua)',
    data: '2025–2026',
    tipo: 'Estatística Oficial'
  },
  {
    instituicao: 'Banco Central do Brasil (BCB)',
    titulo: 'Relatório de Estabilidade Financeira e Séries de Endividamento das Famílias',
    data: '2025–2026',
    tipo: 'Autoridade Monetária'
  },
  {
    instituicao: 'EPE (Empresa de Pesquisa Energética)',
    titulo: 'Plano Decenal de Expansão de Energia (PDE 2034) e Balanço Energético Nacional',
    data: '2025',
    tipo: 'Planejamento Energético'
  },
  {
    instituicao: 'CBIC / Secovi-SP / FipeZAP',
    titulo: 'Indicadores Imobiliários Nacionais e Perfil de Lançamentos Residenciais Urbanos',
    data: '2025–2026',
    tipo: 'Construção & Mercado'
  },
  {
    instituicao: 'CNI / FIESP',
    titulo: 'Sondagem Especial de Mão de Obra e Indicadores de Competitividade Industrial',
    data: '2025–2026',
    tipo: 'Entidades Industriais'
  },
  {
    instituicao: 'Abinee (Associação Brasileira da Indústria Elétrica e Eletrônica)',
    titulo: 'Panorama Setorial da Indústria Eletroeletrônica e Diretrizes de Descarbonização',
    data: '2025–2026',
    tipo: 'Setorial Eletroeletrônico'
  },
  {
    instituicao: 'MDIC / SECEX',
    titulo: 'Estatísticas de Comércio Exterior, Tarifas de Importação e Medidas de Defesa Comercial',
    data: '2026',
    tipo: 'Comércio Exterior'
  },
  {
    instituicao: 'Ministério das Cidades / Caixa Econômica Federal',
    titulo: 'Relatórios de Execução Habitacional e Diretrizes do Programa Minha Casa Minha Vida',
    data: '2025–2026',
    tipo: 'Habitação & Políticas Públicas'
  }
];

export const INITIAL_REPORT_DATA: StrategicReportData = {
  ultimaAnalise: '14/09/2026',
  governance: {
    evidenceHash: 'EV-0-EMPTY',
    previousHash: 'EV-0-EMPTY',
    totalEvidenciasAnalisadas: 0,
    dataVersion: '2026.09.14-v1',
    alteracoes: {
      mantidas: [],
      atualizadas: [],
      novas: [],
      removidas: []
    },
    statusGovernança: 'auditado',
    observacao: 'Relatório vazio. Aguardando geração com base em fundamentação válida.'
  },
  resumoExecutivo: {
    paragrafo1: 'Não há fundamentação suficiente para produzir leituras estratégicas consolidadas com a base atualmente válida.',
    paragrafo2: '',
    principaisMensagens: []
  },
  leiturasEstrategicas: [],
  riscosConsolidados: [],
  oportunidadesConsolidadas: [],
  conexoesEstrategicas: [],
  implicacoesLorenzetti: [],
  temasMonitoramento: {
    prioridadeAlta: [],
    acompanhamento: [],
    sinaisEmergentes: []
  },
  principaisFontes: [],
  macrotendencias: []
};

/**
 * Filtro rígido de governança para bloquear evidências tipo "placeholder"
 * ou genéricas que não possuam lastro factual real.
 */
export function isStrategicallyUsableEvidence(evidence: any): boolean {
  if (!evidence) return false;

  const title = (evidence.title || '').trim().toLowerCase();
  const source = (evidence.source || '').trim().toLowerCase();
  const summary = (evidence.summary || evidence.headline || evidence.content || '').trim().toLowerCase();
  const url = (evidence.url || evidence.link || '').trim();

  // 1. Deve ter título e fonte preenchidos
  if (!title || !source) return false;

  // 2. Deve ter algum conteúdo factual/resumo
  if (!summary) return false;

  // 3. Bloqueio de termos genéricos (Placeholders)
  const placeholders = [
    'registro documental de evidência',
    'fonte oficial catalogada',
    'conteúdo estratégico em desenvolvimento',
    'placeholder',
    'a definir',
    'em breve',
    'sem título',
    'lorenzetti dummy'
  ];

  const isPlaceholder = placeholders.some(p => title.includes(p) || source.includes(p) || summary.includes(p));
  if (isPlaceholder) return false;

  // 4. Se o título for curto demais e sem link, provavelmente é inválido
  if (title.length < 10) return false;

  // 5. Opcional mas recomendado: deve possuir referência externa. Para ser mais estrito, 
  // se não tiver link, precisamos garantir que o nome da fonte não seja genérico.
  if (!url && (source.includes('genérica') || source.includes('portal'))) {
    return false;
  }

  return true;
}

/**
 * Calcula uma assinatura / hash determinístico da base de evidências.
 * Agora utiliza isStrategicallyUsableEvidence para filtro rígido.
 */
export function computeEvidencesHash(evidences: { id?: string; title: string; source: string; url?: string }[]): string {
  if (!Array.isArray(evidences) || evidences.length === 0) {
    return 'EV-0-EMPTY';
  }

  // Filtragem rigorosa utilizando a função unificada
  const validEvidences = evidences.filter(isStrategicallyUsableEvidence);

  const sortedStrings = validEvidences
    .map(e => `${e.id || ''}:${(e.title || '').trim().toLowerCase()}:${(e.source || '').trim().toLowerCase()}`)
    .sort()
    .join('|');

  // Algoritmo determinístico FNV-1a (32 bits)
  let hash = 0x811c9dc5;
  for (let i = 0; i < sortedStrings.length; i++) {
    hash ^= sortedStrings.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const hashHex = (hash >>> 0).toString(16).toUpperCase().padStart(8, '0');
  return `EV-${validEvidences.length}-${hashHex}`;
}

/**
 * Obtém os dados do relatório estratégico atual (do localStorage ou do padrão inicial)
 */
export function getStrategicReportData(): StrategicReportData {
  if (typeof window === 'undefined') {
    return INITIAL_REPORT_DATA;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_REPORT_DATA));
      return INITIAL_REPORT_DATA;
    }
    const parsed = JSON.parse(raw);
    if (parsed) {
      return {
        ...INITIAL_REPORT_DATA,
        ...parsed,
        governance: parsed.governance || INITIAL_REPORT_DATA.governance,
        macrotendencias: Array.isArray(parsed.leiturasEstrategicas) ? parsed.leiturasEstrategicas : []
      };
    }
  } catch (e) {
    console.warn('Erro ao ler relatório do localStorage, usando inicial:', e);
  }

  return INITIAL_REPORT_DATA;
}

/**
 * Salva os dados atualizados do relatório estratégico e notifica os componentes inscritos
 */
export function saveStrategicReportData(data: StrategicReportData): void {
  if (typeof window === 'undefined') return;

  try {
    const enriched = {
      ...data,
      macrotendencias: Array.isArray(data.leiturasEstrategicas) ? data.leiturasEstrategicas : []
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(enriched));
    window.dispatchEvent(new CustomEvent(REPORT_UPDATED_EVENT, { detail: enriched }));
  } catch (e) {
    console.error('Erro ao salvar relatório no localStorage:', e);
  }
}

/**
 * Hook ou listener helper para manter HomeView e StrategicReportView sincronizados
 */
export function subscribeToReportUpdates(callback: (data: StrategicReportData) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const handler = (e: Event) => {
    const custom = e as CustomEvent<StrategicReportData>;
    if (custom.detail) {
      callback(custom.detail);
    } else {
      callback(getStrategicReportData());
    }
  };

  window.addEventListener(REPORT_UPDATED_EVENT, handler);
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      callback(getStrategicReportData());
    }
  });

  return () => {
    window.removeEventListener(REPORT_UPDATED_EVENT, handler);
  };
}
