import { Shield, Award, Briefcase, Smartphone, Bot, Laptop, Scale, Compass, Sparkles, Share2 } from 'lucide-react';

/**
 * PERFIL DE CONSUMO — DADOS ESTRUTURADOS DE GERAÇÕES E PERFIS
 *
 * Próxima atualização: quando houver novos relatórios comportamentais
 * e de consumo geracional (WGSN, NielsenIQ, FGV, etc.).
 */

export interface IndicadorPerfilConsumo {
  id: string;
  label: string;
  value: number;
  unit: string;
  period: string;
  source: string;
  description: string;
}

export const PERFIL_CONSUMO_INDICADORES: Record<string, IndicadorPerfilConsumo> = {
  planejamCompras: {
    id: 'perfil-consumo::indicador::planejam-compras',
    label: 'Planejamento',
    value: 80,
    unit: '%',
    period: '2026',
    source: 'NielsenIQ, Full View 2026',
    description: 'Planejam previamente suas compras'
  },
  buscaEconomia: {
    id: 'perfil-consumo::indicador::busca-economia',
    label: 'Busca por economia',
    value: 66,
    unit: '%',
    period: '2026',
    source: 'NielsenIQ, Full View 2026',
    description: 'Buscam opções de menor preço'
  },
  escolhemBaratoMarca: {
    id: 'perfil-consumo::indicador::escolhem-barato-marca',
    label: 'Preço × marca',
    value: 45,
    unit: '%',
    period: '2026',
    source: 'NielsenIQ, Full View 2026',
    description: 'Escolhem o mais barato, independentemente da marca'
  },
  controleOrcamento: {
    id: 'perfil-consumo::indicador::controle-orcamento',
    label: 'Controle do orçamento',
    value: 40,
    unit: '%',
    period: '2026',
    source: 'NielsenIQ, Full View 2026',
    description: 'Monitoram o custo total da cesta'
  }
};

export interface GeracaoTheme {
  btnActive: string;
  btnInactiveIcon: string;
  btnInactiveBadge: string;
  btnHoverBorder: string;
  topBar: string;
  headerIconBox: string;
  headerIcon: string;
  badge: string;
  quickReadBg: string;
  quickReadBorder: string;
  quickReadTitle: string;
  accentText: string;
  accentIcon: string;
  trendPanelBg: string;
  trendPanelBorder: string;
  trendBullet: string;
  chip: string;
}

export interface ComoAtuarItem {
  produtoEProposta: string[];
  comunicacao: string[];
  canaisEExperiencia: string[];
}

export interface MicrogeracaoItem {
  id: string;
  name: string;
  period: string;
  transicao: string;
  sintese: string;
  isProspectivo?: boolean;
  respostasRapidas: {
    combina: string;
    comoConsome: string;
    relacaoTecnologia: string;
  };
  perfilConsumo: string;
  comoSeRelacionar: string[];
  tendencias: string[];
  palavrasChave: string[];
  themeColors: {
    from: string;
    to: string;
  };
}

export interface PerfilEmergenteItem {
  id: string;
  num: string;
  name: string;
  fraseEssencia: string;
  icon: any;
  color: {
    border: string;
    badge: string;
    text: string;
    icon: string;
    subtleBg: string;
  };
  oQueDefine: string;
  tagsValoriza: string[];
  comoTendeAConsumir: string;
  oQueAumentaConfianca: string;
  leituraLorenzetti: string;
}

export interface GeracaoItem {
  id: string;
  name: string;
  period: string;
  assinaturaCurta: string;
  icon: any;
  isForming?: boolean;
  oQueMoldou: string;
  leituraRapida: {
    valoriza: string;
    comoTendeAConsumir: string;
    relacaoTecnologia: string;
  };
  theme: GeracaoTheme;
  perfilEConsumo: {
    prioridadesComportamento: string;
    marcasCanaisExperiencia: string;
    sustentabilidadeValores: string;
  };
  comoAtuar: ComoAtuarItem;
  tendencias: string[];
  palavrasChave: string[];
}

export const MICROGERACOES_DATA: MicrogeracaoItem[] = [
  {
    id: 'silenciosa-boomers',
    name: 'Silenciosa–Boomers',
    period: '1940–1945',
    transicao: 'Geração Silenciosa → Baby Boomers',
    sintese: 'Estabilidade e segurança com maior receptividade à modernização.',
    respostasRapidas: {
      combina: 'Busca por estabilidade e segurança financeira com maior abertura à modernização.',
      comoConsome: 'Valoriza qualidade e valor e, embora mantenha uma postura cautelosa, mostra abertura a inovações que ampliem conforto e bem-estar.',
      relacaoTecnologia: 'Mostra abertura a tecnologias que facilitem o cotidiano e a novos canais de comunicação, embora a mídia tradicional permaneça relevante.'
    },
    perfilConsumo: 'Mantém forte valorização de estabilidade, segurança e qualidade, mas demonstra maior abertura à modernização, à conveniência e a soluções que tragam praticidade, conforto e bem-estar.',
    comoSeRelacionar: [
      'Evidenciar conveniência, confiança e segurança.',
      'Apresentar inovação de forma acessível e associada a benefícios concretos para o cotidiano.',
      'Manter canais tradicionais enquanto amplia novas alternativas de comunicação.'
    ],
    tendencias: ['Praticidade', 'Conforto', 'Saúde', 'Segurança'],
    palavrasChave: ['Experiência', 'Conforto', 'Receptividade'],
    themeColors: { from: 'from-slate-700', to: 'to-blue-600' }
  },
  {
    id: 'jones',
    name: 'Geração Jones',
    period: '1954–1965',
    transicao: 'Baby Boomers → Geração X',
    sintese: 'Qualidade e status sob uma lógica mais pragmática, individualista e crítica.',
    respostasRapidas: {
      combina: 'Combina busca por status com abordagem pragmática, maior individualismo e postura mais crítica.',
      comoConsome: 'Tende a buscar produtos de alta qualidade, economiza quando necessário e compara marcas e preços antes da compra.',
      relacaoTecnologia: 'Adotou internet, e-commerce e smartphones, adaptando-se ao digital sem abandonar a valorização das interações presenciais.'
    },
    perfilConsumo: 'Formada em meio a mudanças sociais e incertezas econômicas e políticas, combina busca por qualidade e status com pragmatismo, comparação e disposição para economizar quando necessário.',
    comoSeRelacionar: [
      'Mesclar interações digitais e físicas.',
      'Considerar atendimento e comunicação omnichannel.',
      'Facilitar a avaliação de qualidade, atributos e preço durante a escolha.'
    ],
    tendencias: ['Alta qualidade', 'Comparação de marcas e preços', 'Adoção digital', 'Interações presenciais'],
    palavrasChave: ['Pragmatismo', 'Ceticismo', 'Liberdade pessoal'],
    themeColors: { from: 'from-blue-600', to: 'to-indigo-600' }
  },
  {
    id: 'xennials',
    name: 'Xennials',
    period: '1977–1983',
    transicao: 'Geração X → Millennials',
    sintese: 'Flexibilidade tecnológica entre autenticidade, independência e conveniência digital.',
    respostasRapidas: {
      combina: 'Combina independência e equilíbrio entre trabalho e vida pessoal com conveniência digital, autenticidade e propósito.',
      comoConsome: 'É consumidora informada, valoriza conveniência digital e autenticidade e demonstra abertura a pagar mais por marcas associadas a propósito e transparência.',
      relacaoTecnologia: 'Vivenciou tanto o mundo analógico quanto o início da internet, desenvolvendo familiaridade tecnológica sem perder o apreço por interações pessoais.'
    },
    perfilConsumo: 'Apresenta flexibilidade no uso de tecnologia e combina independência financeira, equilíbrio entre trabalho e vida pessoal, autenticidade e conveniência digital.',
    comoSeRelacionar: [
      'Combinar estratégias online e offline, oferecendo flexibilidade e conveniência.',
      'Proporcionar uma experiência de compra fácil e intuitiva, conectando o analógico e o digital.',
      'Considerar redes sociais sem abandonar canais como e-mail e comunicação direta.'
    ],
    tendencias: ['Alta qualidade', 'Conveniência online', 'Experiência em lojas físicas'],
    palavrasChave: ['Cultura pop', 'Globalização', 'Conectividade'],
    themeColors: { from: 'from-indigo-600', to: 'to-violet-600' }
  },
  {
    id: 'zillennials',
    name: 'Zillennials',
    period: '1993–1998',
    transicao: 'Millennials → Geração Z',
    sintese: 'Propósito e autenticidade na transição entre a era digital emergente e a hiperconectividade.',
    respostasRapidas: {
      combina: 'Combina busca por propósito, autenticidade e experiências personalizadas com maior presença da hiperconectividade e do imediatismo digital.',
      comoConsome: 'Prefere experiências personalizadas e direciona gastos a viagens, eventos e produtos tecnológicos, valorizando também a agilidade das compras online.',
      relacaoTecnologia: 'Ocupa a transição entre a era digital emergente e o ambiente hiperconectado, mantendo forte presença nas redes sociais sem depender exclusivamente delas.'
    },
    perfilConsumo: 'Equilibra propósito e experiências digitais, busca autenticidade e tende a se relacionar melhor com marcas social e ambientalmente responsáveis.',
    comoSeRelacionar: [
      'Estar presente nas redes sociais sem depender exclusivamente delas.',
      'Comunicar-se com transparência e autenticidade.',
      'Combinar experiências digitais e físicas, preservando conveniência e conexão humana.'
    ],
    tendencias: ['Imediatismo nas compras online', 'Experiência física satisfatória'],
    palavrasChave: ['Digitalização', 'Autocuidado', 'Socialização via redes'],
    themeColors: { from: 'from-violet-600', to: 'to-teal-600' }
  },
  {
    id: 'zalpha',
    name: 'Zalpha',
    period: '2010–2012',
    transicao: 'Geração Z → Geração Alpha',
    sintese: 'Hiperconexão, interatividade e expressão individual em experiências cada vez mais integradas entre físico e digital.',
    respostasRapidas: {
      combina: 'Combina hiperconexão e preocupação socioambiental com gamificação, personalização e experiências digitais imersivas.',
      comoConsome: 'Compra por redes sociais e marketplaces, recebe influência de influenciadores digitais e valoriza experiências associadas aos produtos, além de opções customizáveis.',
      relacaoTecnologia: 'Relaciona-se intensamente com vídeos curtos, realidade aumentada e virtual, produtos inteligentes e experiências que integram ambientes físicos e digitais.'
    },
    perfilConsumo: 'Valoriza experiências interativas e gamificadas, autenticidade, identidade e causas socioambientais, com consumo fortemente conectado a plataformas digitais e tecnologia.',
    comoSeRelacionar: [
      'Explorar vídeos curtos e conteúdos visuais de rápida interação.',
      'Considerar parcerias com micro e nano-influenciadores e oferecer opções customizáveis.',
      'Comunicar de forma clara impactos sociais e ambientais e explorar experiências participativas ou gamificadas.'
    ],
    tendencias: ['Phygital', 'Produtos inteligentes e IoT', 'Circularidade e second-hand', 'Experiências imersivas e gamificadas', 'Hiperpersonalização'],
    palavrasChave: ['Hiperconexão', 'Personalização', 'Fluidez'],
    themeColors: { from: 'from-teal-600', to: 'to-amber-600' }
  },
  {
    id: 'alpha-beta',
    name: 'Alpha–Beta',
    period: '2024–2028',
    transicao: 'Geração Alpha → Geração Beta',
    isProspectivo: true,
    sintese: 'Hiperconexão, imersão e personalização em um perfil prospectivo.',
    respostasRapidas: {
      combina: 'Combina a interatividade e conectividade associadas à Alpha com maior integração de inteligência artificial, automação e experiências imersivas projetadas para a Beta.',
      comoConsome: 'O relatório projeta experiências de consumo imersivas, personalizadas e gamificadas, com crescente presença de tecnologia e sustentabilidade.',
      relacaoTecnologia: 'Perfil prospectivo associado a um ambiente completamente digital e hiperconectado, com forte presença de inteligência artificial, automação, realidade aumentada e realidade virtual.'
    },
    perfilConsumo: 'Por representar uma transição ainda em formação, deve ser tratada como perfil prospectivo. O relatório projeta forte relação com inteligência artificial e automação, experiências personalizadas e imersivas e maior conscientização sobre questões ambientais e éticas.',
    comoSeRelacionar: [
      'Explorar experiências digitais envolventes, interativas e imersivas.',
      'Considerar realidade aumentada, realidade virtual e interfaces de inteligência artificial como possibilidades futuras de interação.',
      'Incentivar experiências que estimulem criatividade e participação.'
    ],
    tendencias: ['Experiências imersivas', 'Inteligência artificial e automação', 'Personalização', 'Sustentabilidade'],
    palavrasChave: ['Hiperconexão', 'Imersão', 'Personalização'],
    themeColors: { from: 'from-amber-600', to: 'to-rose-600' }
  }
];

export const PERFIS_EMERGENTES_DATA: PerfilEmergenteItem[] = [
  {
    id: 'imparcialista',
    num: '01',
    name: 'Imparcialista',
    fraseEssencia: 'Prova, clareza e coerência',
    icon: Scale,
    color: {
      border: 'border-l-blue-500 dark:border-l-blue-400',
      badge: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-900/50',
      text: 'text-blue-700 dark:text-blue-400',
      icon: 'text-blue-600 dark:text-blue-400',
      subtleBg: 'bg-blue-50/30 dark:bg-blue-950/15 border-blue-100/40 dark:border-blue-900/20'
    },
    oQueDefine: 'Mais crítico diante do excesso de informação, da desinformação e de promessas pouco comprovadas.',
    tagsValoriza: ['Clareza', 'Transparência', 'Fatos verificáveis', 'Coerência', 'Segurança'],
    comoTendeAConsumir: 'Questiona mais as informações disponíveis e busca elementos concretos que sustentem sua escolha.',
    oQueAumentaConfianca: 'Informações objetivas, dados verificáveis, transparência e consistência entre discurso e entrega.',
    leituraLorenzetti: 'Pode reforçar a importância de provar benefícios com clareza e objetividade.'
  },
  {
    id: 'autonomista',
    num: '02',
    name: 'Autonomista',
    fraseEssencia: 'Controle, liberdade e escolha',
    icon: Compass,
    color: {
      border: 'border-l-violet-500 dark:border-l-violet-400',
      badge: 'bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border-violet-200/60 dark:border-violet-900/50',
      text: 'text-violet-700 dark:text-violet-400',
      icon: 'text-violet-600 dark:text-violet-400',
      subtleBg: 'bg-violet-50/30 dark:bg-violet-950/15 border-violet-100/40 dark:border-violet-900/20'
    },
    oQueDefine: 'Busca maior controle sobre suas escolhas e demonstra menor aderência a modelos rígidos de consumo.',
    tagsValoriza: ['Liberdade', 'Flexibilidade', 'Personalização', 'Independência', 'Protagonismo'],
    comoTendeAConsumir: 'Valoriza alternativas que permitam escolher conforme suas próprias necessidades, sem depender de soluções padronizadas.',
    oQueAumentaConfianca: 'Alternativas compreensíveis, liberdade de escolha e clareza sobre as diferenças entre as soluções.',
    leituraLorenzetti: 'Pode aumentar a importância de tornar as diferenças do portfólio fáceis de compreender.'
  },
  {
    id: 'esperancoso',
    num: '03',
    name: 'Esperançoso',
    fraseEssencia: 'Bem-estar e pequenas melhorias',
    icon: Sparkles,
    color: {
      border: 'border-l-amber-500 dark:border-l-amber-400',
      badge: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-900/50',
      text: 'text-amber-700 dark:text-amber-400',
      icon: 'text-amber-600 dark:text-amber-400',
      subtleBg: 'bg-amber-50/30 dark:bg-amber-950/15 border-amber-100/40 dark:border-amber-900/20'
    },
    oQueDefine: 'Busca bem-estar, leveza e pequenas melhorias capazes de gerar efeitos positivos na vida cotidiana.',
    tagsValoriza: ['Bem-estar', 'Conexão', 'Cuidado', 'Leveza', 'Experiências positivas'],
    comoTendeAConsumir: 'Preserva espaço para escolhas associadas a satisfação, conforto e melhoria do cotidiano, mesmo em um ambiente de maior racionalidade.',
    oQueAumentaConfianca: 'Benefícios perceptíveis, autenticidade e contribuição concreta para sua experiência cotidiana.',
    leituraLorenzetti: 'Pode ampliar a relevância de benefícios ligados a conforto, bem-estar e melhoria do cotidiano.'
  },
  {
    id: 'sinergista',
    num: '04',
    name: 'Sinergista',
    fraseEssencia: 'Inovação com responsabilidade',
    icon: Share2,
    color: {
      border: 'border-l-teal-500 dark:border-l-teal-400',
      badge: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200/60 dark:border-teal-900/50',
      text: 'text-teal-700 dark:text-teal-400',
      icon: 'text-teal-600 dark:text-teal-400',
      subtleBg: 'bg-teal-50/30 dark:bg-teal-950/15 border-teal-100/40 dark:border-teal-900/20'
    },
    oQueDefine: 'Relaciona inovação, colaboração e responsabilidade à possibilidade de melhorar experiências e gerar impacto positivo.',
    tagsValoriza: ['Inovação responsável', 'Inclusão', 'Sustentabilidade', 'Colaboração', 'Tecnologia humanizada'],
    comoTendeAConsumir: 'Demonstra abertura a novas soluções quando percebe benefício concreto e coerência com valores sociais e ambientais.',
    oQueAumentaConfianca: 'Inovação compreensível, responsabilidade demonstrável e benefícios funcionais claros.',
    leituraLorenzetti: 'Pode favorecer soluções que combinem inovação, eficiência e responsabilidade de forma simples.'
  }
];

export const GERACOES_DATA: GeracaoItem[] = [
  {
    id: 'silenciosa',
    name: 'Geração Silenciosa',
    period: '1925–1945',
    assinaturaCurta: 'Estabilidade, tradição e confiança.',
    icon: Shield,
    oQueMoldou: 'A Grande Depressão, a Segunda Guerra Mundial e períodos de forte instabilidade econômica contribuíram para referências de consumo associadas à economia doméstica, à poupança e à valorização de produtos essenciais e duráveis.',
    leituraRapida: {
      valoriza: 'Estabilidade, saúde, conforto, segurança financeira, tradição e relações de confiança.',
      comoTendeAConsumir: 'Prefere produtos duráveis e de qualidade, marcas tradicionais e de confiança, com valorização do conserto e do consumo moderado.',
      relacaoTecnologia: 'Prefere atendimento pessoal e canais tradicionais, valorizando interações claras, respeitosas e transparentes.'
    },
    theme: {
      btnActive: 'bg-slate-800 text-white shadow-md ring-1 ring-slate-900',
      btnInactiveIcon: 'text-slate-400 group-hover:text-slate-600',
      btnInactiveBadge: 'bg-slate-100 text-slate-500',
      btnHoverBorder: 'hover:border-slate-400',
      topBar: 'bg-gradient-to-r from-slate-700 to-slate-500',
      headerIconBox: 'bg-slate-100 border-slate-200',
      headerIcon: 'text-slate-700',
      badge: 'bg-slate-100 text-slate-700 border border-slate-200',
      quickReadBg: 'bg-slate-50/50',
      quickReadBorder: 'border-slate-200/60',
      quickReadTitle: 'text-slate-500',
      accentText: 'text-slate-700',
      accentIcon: 'text-slate-600',
      trendPanelBg: 'bg-slate-50/80',
      trendPanelBorder: 'border-slate-200/80',
      trendBullet: 'bg-slate-400',
      chip: 'bg-white text-slate-700 border-slate-200 shadow-sm'
    },
    perfilEConsumo: {
      prioridadesComportamento: 'O relatório descreve um perfil mais conservador, resiliente e orientado à estabilidade. Saúde, conforto, segurança financeira e valorização do trabalho aparecem entre suas prioridades, em um contexto de forte vínculo com tradição e relações de confiança.',
      marcasCanaisExperiencia: 'A preferência recai sobre marcas tradicionais e de confiança, produtos de qualidade e um relacionamento pautado por respeito e transparência, com maior proximidade de canais tradicionais.',
      sustentabilidadeValores: 'O consumo aparece associado ao aproveitamento prolongado dos produtos, ao conserto e à moderação, refletindo uma postura mais conservadora em relação ao impacto do consumo.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Evidenciar qualidade, durabilidade, segurança e longevidade.',
        'Reforçar confiança e valores tradicionais na proposta.'
      ],
      comunicacao: [
        'Utilizar comunicação clara, respeitosa e transparente.',
        'Destacar longevidade, confiança e benefícios concretos.'
      ],
      canaisEExperiencia: [
        'Manter atendimento pessoal e canais tradicionais acessíveis.',
        'Considerar programas de fidelidade para reconhecer a lealdade.'
      ]
    },
    tendencias: ['Saúde e bem-estar', 'Segurança', 'Conveniência'],
    palavrasChave: ['Tradição', 'Confiança', 'Durabilidade', 'Responsabilidade']
  },
  {
    id: 'boomers',
    name: 'Baby Boomers',
    period: '1946–1964',
    assinaturaCurta: 'Reputação, conforto e qualidade de vida.',
    icon: Award,
    oQueMoldou: 'O pós-guerra, a reconstrução e a expansão econômica ampliaram o consumo de bens duráveis e o foco em conforto, enquanto shopping centers e publicidade em massa contribuíram para consolidar novos padrões de consumo.',
    leituraRapida: {
      valoriza: 'Segurança financeira, reconhecimento social, conforto e qualidade de vida.',
      comoTendeAConsumir: 'É frequentemente descrito como um consumidor fiel, que busca marcas de grande reputação, benefícios tangíveis e ofertas de fidelização, além de experiências associadas a conforto, status e luxo acessível.',
      relacaoTecnologia: 'Mantém proximidade com canais tradicionais, mas vem ampliando o uso de redes sociais e e-mail; tecnologias voltadas a conforto e bem-estar aparecem entre as tendências desse público.'
    },
    theme: {
      btnActive: 'bg-blue-600 text-white shadow-md shadow-blue-500/20 ring-1 ring-blue-600',
      btnInactiveIcon: 'text-slate-400 group-hover:text-blue-500',
      btnInactiveBadge: 'bg-slate-100 text-slate-500',
      btnHoverBorder: 'hover:border-blue-400',
      topBar: 'bg-gradient-to-r from-blue-600 to-blue-400',
      headerIconBox: 'bg-blue-50 dark:bg-blue-900/30 border-blue-100 dark:border-blue-800',
      headerIcon: 'text-blue-600 dark:text-blue-400',
      badge: 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
      quickReadBg: 'bg-blue-50/40 dark:bg-blue-950/20',
      quickReadBorder: 'border-blue-100/60 dark:border-blue-900/30',
      quickReadTitle: 'text-blue-600 dark:text-blue-400',
      accentText: 'text-blue-700 dark:text-blue-400',
      accentIcon: 'text-blue-500 dark:text-blue-400',
      trendPanelBg: 'bg-blue-50/50 dark:bg-blue-900/10',
      trendPanelBorder: 'border-blue-200/60 dark:border-blue-900/40',
      trendBullet: 'bg-blue-400',
      chip: 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 border-blue-200/80 dark:border-blue-800/60 shadow-sm'
    },
    perfilEConsumo: {
      prioridadesComportamento: 'O relatório associa esse grupo à busca por segurança financeira, reconhecimento, conforto e qualidade de vida, além da valorização de experiências que proporcionam conforto e status.',
      marcasCanaisExperiencia: 'São frequentemente considerados consumidores fiéis e valorizam marcas de grande reputação, produtos e atendimento de qualidade. Canais tradicionais permanecem relevantes, enquanto redes sociais e e-mail ganham espaço.',
      sustentabilidadeValores: 'Há preocupação com questões ambientais, embora o relatório descreva uma postura mais pragmática em relação ao consumo.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Evidenciar reputação, qualidade, conforto e benefícios tangíveis.',
        'Considerar a evolução das necessidades de um público em envelhecimento, especialmente nas dimensões de saúde e bem-estar.'
      ],
      comunicacao: [
        'Utilizar comunicação direta, informativa e profissional.',
        'Demonstrar benefícios de forma clara e objetiva.'
      ],
      canaisEExperiencia: [
        'Manter canais tradicionais sem ignorar o avanço do digital.',
        'Combinar atendimento convencional, redes sociais e e-mail.'
      ]
    },
    tendencias: ['Saúde', 'Viagens', 'Tecnologia para conforto e bem-estar'],
    palavrasChave: ['Conforto', 'Status', 'Conveniência', 'Longevidade']
  },
  {
    id: 'gen-x',
    name: 'Geração X',
    period: '1965–1980',
    assinaturaCurta: 'Pragmatismo, autonomia e busca por valor.',
    icon: Briefcase,
    oQueMoldou: 'Transformações culturais, mudanças no mercado de trabalho, a crise do petróleo e a transição entre o analógico e o digital marcaram sua formação, em um período de maior questionamento das tradições rígidas de trabalho e de crescente preocupação ambiental.',
    leituraRapida: {
      valoriza: 'Custo-benefício, qualidade, durabilidade, conveniência, praticidade e autonomia.',
      comoTendeAConsumir: 'É descrita como consumidora informada, que pesquisa extensamente antes de comprar e avalia o valor no curto e no longo prazo, com atenção à qualidade e à durabilidade.',
      relacaoTecnologia: 'É descrita como adaptável às tecnologias emergentes e pertence a uma geração que vivenciou a transição entre o mundo analógico e o digital.'
    },
    theme: {
      btnActive: 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-600',
      btnInactiveIcon: 'text-slate-400 group-hover:text-indigo-500',
      btnInactiveBadge: 'bg-slate-100 text-slate-500',
      btnHoverBorder: 'hover:border-indigo-400',
      topBar: 'bg-gradient-to-r from-indigo-600 to-indigo-400',
      headerIconBox: 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-100 dark:border-indigo-800',
      headerIcon: 'text-indigo-600 dark:text-indigo-400',
      badge: 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800',
      quickReadBg: 'bg-indigo-50/40 dark:bg-indigo-950/20',
      quickReadBorder: 'border-indigo-100/60 dark:border-indigo-900/30',
      quickReadTitle: 'text-indigo-600 dark:text-indigo-400',
      accentText: 'text-indigo-700 dark:text-indigo-400',
      accentIcon: 'text-indigo-500 dark:text-indigo-400',
      trendPanelBg: 'bg-indigo-50/50 dark:bg-indigo-900/10',
      trendPanelBorder: 'border-indigo-200/60 dark:border-indigo-900/40',
      trendBullet: 'bg-indigo-400',
      chip: 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60 shadow-sm'
    },
    perfilEConsumo: {
      prioridadesComportamento: 'Busca estabilidade financeira e equilíbrio entre vida pessoal e profissional, ao mesmo tempo que valoriza autonomia e flexibilidade e questiona tradições rígidas de trabalho.',
      marcasCanaisExperiencia: 'Prioriza valor e experiência do cliente e é descrita como adepta da pesquisa antes da compra e da fidelidade à marca.',
      sustentabilidadeValores: 'Demonstra preocupação com impactos ambientais e sociais, mas tende a equilibrar sustentabilidade e preço no momento da escolha.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Evidenciar qualidade, durabilidade, praticidade e custo-benefício.',
        'Demonstrar valor no curto e no longo prazo e considerar personalização nas ofertas.'
      ],
      comunicacao: [
        'Disponibilizar informações claras, detalhadas e transparentes.',
        'Considerar programas de fidelidade e um atendimento atencioso e eficiente.'
      ],
      canaisEExperiencia: [
        'Manter presença em mídias tradicionais, digitais e sociais.',
        'Utilizar e-mail e comunicações personalizadas como canais de relacionamento.'
      ]
    },
    tendencias: ['Tecnologia', 'Educação continuada', 'Produtos voltados ao bem-estar'],
    palavrasChave: ['Autonomia', 'Flexibilidade', 'Valor', 'Personalização', 'Experiências', 'Lealdade', 'Conveniência']
  },
  {
    id: 'millennials',
    name: 'Millennials',
    period: '1981–1996',
    assinaturaCurta: 'Experiência, autenticidade e personalização.',
    icon: Smartphone,
    oQueMoldou: 'Globalização e rápida evolução tecnológica, com a popularização da internet, da computação pessoal, dos dispositivos móveis e das redes sociais, marcaram sua transição para a era digital e ampliaram o acesso à informação e a produtos de forma global.',
    leituraRapida: {
      valoriza: 'Experiências, inovação, autenticidade, diversidade e personalização.',
      comoTendeAConsumir: 'Pesquisa antes de escolher, considera a experiência de outros consumidores e valoriza experiências mais do que bens materiais, além de produtos e serviços alinhados às próprias necessidades e valores.',
      relacaoTecnologia: 'Acompanhou o início da internet, mas preserva referências de uma vida com menos tecnologia digital; o relatório a descreve como adaptável e interessada em equilibrar inovação e contato humano.'
    },
    theme: {
      btnActive: 'bg-violet-600 text-white shadow-md shadow-violet-500/20 ring-1 ring-violet-600',
      btnInactiveIcon: 'text-slate-400 group-hover:text-violet-500',
      btnInactiveBadge: 'bg-slate-100 text-slate-500',
      btnHoverBorder: 'hover:border-violet-400',
      topBar: 'bg-gradient-to-r from-violet-600 to-violet-400',
      headerIconBox: 'bg-violet-50 dark:bg-violet-900/30 border-violet-100 dark:border-violet-800',
      headerIcon: 'text-violet-600 dark:text-violet-400',
      badge: 'bg-violet-50 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800',
      quickReadBg: 'bg-violet-50/40 dark:bg-violet-950/20',
      quickReadBorder: 'border-violet-100/60 dark:border-violet-900/30',
      quickReadTitle: 'text-violet-600 dark:text-violet-400',
      accentText: 'text-violet-700 dark:text-violet-400',
      accentIcon: 'text-violet-500 dark:text-violet-400',
      trendPanelBg: 'bg-violet-50/50 dark:bg-violet-900/10',
      trendPanelBorder: 'border-violet-200/60 dark:border-violet-900/40',
      trendBullet: 'bg-violet-400',
      chip: 'bg-white dark:bg-slate-800 text-violet-700 dark:text-violet-300 border-violet-200/80 dark:border-violet-800/60 shadow-sm'
    },
    perfilEConsumo: {
      prioridadesComportamento: 'É uma geração exigente e bem informada, que valoriza experiências mais do que bens materiais, além de inovação, autenticidade, diversidade e soluções personalizadas.',
      marcasCanaisExperiencia: 'A pesquisa e a experiência de outros consumidores têm peso relevante, e há maior abertura a marcas que demonstram transparência, responsabilidade social e alinhamento com valores pessoais.',
      sustentabilidadeValores: 'Apresentam elevada preocupação com causas sociais e ambientais e maior abertura a marcas que compartilham valores e práticas sustentáveis.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Oferecer personalização, conveniência e inovação.',
        'Considerar produtos e serviços alinhados às necessidades específicas e aos valores pessoais desse público.'
      ],
      comunicacao: [
        'Priorizar autenticidade e transparência.',
        'Utilizar comunicação rápida e responsiva.'
      ],
      canaisEExperiencia: [
        'Integrar estratégias online e offline em uma jornada omnichannel.',
        'Considerar redes sociais, aplicativos, e-commerce e marketing de influência.'
      ]
    },
    tendencias: ['Produtos sustentáveis', 'Saúde mental', 'Personalização', 'Tecnologias emergentes'],
    palavrasChave: ['Autenticidade', 'Inovação', 'Experiência', 'Propósito', 'Sustentabilidade']
  },
  {
    id: 'gen-z',
    name: 'Geração Z',
    period: '1997–2012',
    assinaturaCurta: 'Conectividade, individualidade e propósito.',
    icon: Bot,
    oQueMoldou: 'Smartphones, aplicativos, redes sociais e conectividade permanente fizeram parte da formação de uma geração exposta a um fluxo contínuo de informações, em um contexto marcado pela expansão da vida digital e pela crescente integração da tecnologia ao cotidiano.',
    leituraRapida: {
      valoriza: 'Individualidade, diversidade, propósito, autenticidade, conectividade e personalização.',
      comoTendeAConsumir: 'É altamente digitalizada, procura marcas alinhadas às próprias causas, valoriza personalização e apresenta menor lealdade automática, com influência relevante de amigos, familiares e recomendações.',
      relacaoTecnologia: 'É descrita como nativa digital, habituada à conectividade, à rapidez e a um fluxo constante de informações, com forte presença da tecnologia em sua relação com marcas e consumo.'
    },
    theme: {
      btnActive: 'bg-teal-600 text-white shadow-md shadow-teal-500/20 ring-1 ring-teal-600',
      btnInactiveIcon: 'text-slate-400 group-hover:text-teal-500',
      btnInactiveBadge: 'bg-slate-100 text-slate-500',
      btnHoverBorder: 'hover:border-teal-400',
      topBar: 'bg-gradient-to-r from-teal-600 to-teal-400',
      headerIconBox: 'bg-teal-50 dark:bg-teal-900/30 border-teal-100 dark:border-teal-800',
      headerIcon: 'text-teal-600 dark:text-teal-400',
      badge: 'bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
      quickReadBg: 'bg-teal-50/40 dark:bg-teal-950/20',
      quickReadBorder: 'border-teal-100/60 dark:border-teal-900/30',
      quickReadTitle: 'text-teal-600 dark:text-teal-400',
      accentText: 'text-teal-700 dark:text-teal-400',
      accentIcon: 'text-teal-500 dark:text-teal-400',
      trendPanelBg: 'bg-teal-50/50 dark:bg-teal-900/10',
      trendPanelBorder: 'border-teal-200/60 dark:border-teal-900/40',
      trendBullet: 'bg-teal-400',
      chip: 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/60 shadow-sm'
    },
    perfilEConsumo: {
      prioridadesComportamento: 'Individualidade, diversidade e propósito aparecem como elementos centrais, acompanhados por forte expectativa de autenticidade e conexão com marcas.',
      marcasCanaisExperiencia: 'Apresenta menor lealdade às marcas, procura empresas alinhadas às suas causas e valoriza personalização, enquanto amigos, familiares e outras referências influenciam suas escolhas.',
      sustentabilidadeValores: 'O relatório associa essa geração a forte preocupação com sustentabilidade e justiça social, com preferência por produtos recicláveis, éticos e de impacto positivo.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Oferecer personalização e soluções adequadas às necessidades individuais.',
        'Evidenciar atributos éticos, sustentáveis ou de impacto positivo quando forem concretos.'
      ],
      comunicacao: [
        'Utilizar mensagens rápidas, visuais e interativas.',
        'Trabalhar autenticidade e recomendações de referências consideradas confiáveis pelo público.'
      ],
      canaisEExperiencia: [
        'Priorizar experiências digitais ágeis, visuais e de fácil interação.',
        'Considerar plataformas de vídeo, redes sociais e atendimento digital rápido.'
      ]
    },
    tendencias: ['Moda sustentável', 'Tecnologia imersiva', 'Bens digitais', 'Saúde e bem-estar mental'],
    palavrasChave: ['Diversidade', 'Propósito', 'Inovação digital', 'Inclusão']
  },
  {
    id: 'alpha',
    name: 'Geração Alpha',
    period: '2013–2024',
    assinaturaCurta: 'Conectividade, personalização e interatividade.',
    icon: Laptop,
    isForming: true,
    oQueMoldou: 'A Geração Alpha cresce integralmente no século XXI, em um ambiente marcado por dispositivos conectados, inteligência artificial, realidade aumentada e automação. O relatório também destaca a influência de pais, especialmente Millennials, que tendem a valorizar educação personalizada e desenvolvimento de habilidades emocionais.',
    leituraRapida: {
      valoriza: 'Tecnologias emergentes, personalização extrema, conectividade e interatividade.',
      comoTendeAConsumir: 'O relatório associa essa geração a um consumo fortemente digital, influenciado por vídeos e interações gamificadas, com destaque para experiência, personalização e formatos interativos.',
      relacaoTecnologia: 'Cresce exposta desde cedo a dispositivos conectados, inteligência artificial, realidade aumentada e automação, em um ambiente cada vez mais digital e interativo.'
    },
    theme: {
      btnActive: 'bg-rose-600 text-white shadow-md shadow-rose-500/20 ring-1 ring-rose-600',
      btnInactiveIcon: 'text-slate-400 group-hover:text-rose-500',
      btnInactiveBadge: 'bg-slate-100 text-slate-500',
      btnHoverBorder: 'hover:border-rose-400',
      topBar: 'bg-gradient-to-r from-rose-600 to-rose-400',
      headerIconBox: 'bg-rose-50 dark:bg-rose-900/30 border-rose-100 dark:border-rose-800',
      headerIcon: 'text-rose-600 dark:text-rose-400',
      badge: 'bg-rose-50 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      quickReadBg: 'bg-rose-50/40 dark:bg-rose-950/20',
      quickReadBorder: 'border-rose-100/60 dark:border-rose-900/30',
      quickReadTitle: 'text-rose-600 dark:text-rose-400',
      accentText: 'text-rose-700 dark:text-rose-400',
      accentIcon: 'text-rose-500 dark:text-rose-400',
      trendPanelBg: 'bg-rose-50/50 dark:bg-rose-900/10',
      trendPanelBorder: 'border-rose-200/60 dark:border-rose-900/40',
      trendBullet: 'bg-rose-400',
      chip: 'bg-white dark:bg-slate-800 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/60 shadow-sm'
    },
    perfilEConsumo: {
      prioridadesComportamento: 'Por ainda estar em formação, o perfil deve ser tratado como tendência. O relatório associa essa geração a conectividade, personalização, tecnologias emergentes e experiências interativas desde os primeiros anos de vida.',
      marcasCanaisExperiencia: 'O consumo aparece fortemente ligado ao ambiente digital, a vídeos, gamificação e experiências interativas. Mesmo ainda em formação como consumidores, crianças desse grupo já podem influenciar decisões de compra dos pais.',
      sustentabilidadeValores: 'O relatório projeta a sustentabilidade como uma expectativa cada vez mais naturalizada, associada a marcas éticas e responsáveis, mas essa leitura deve permanecer identificada como característica ainda em formação.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Explorar personalização, interatividade e tecnologias aplicadas à experiência.',
        'Considerar soluções digitais e educativas adequadas a um público ainda em formação.'
      ],
      comunicacao: [
        'Utilizar conteúdos visuais, educativos e interativos.',
        'Priorizar conteúdos lúdicos e educativos que conectem pais e crianças.'
      ],
      canaisEExperiencia: [
        'Explorar experiências digitais, gamificação e realidade aumentada quando fizerem sentido.',
        'Considerar a influência das crianças nas decisões familiares e a importância de conteúdos adequados a pais e filhos.'
      ]
    },
    tendencias: ['Produtos digitais', 'Aprendizado imersivo', 'Tecnologias educativas', 'Bem-estar tecnológico'],
    palavrasChave: ['Conectividade', 'Personalização', 'Sustentabilidade', 'Interatividade']
  }
];

export const GEN_ACCENT_MAP: Record<string, {
  borderAccent: string;
  bgSubtleRight: string;
  headerRightBg: string;
  dot: string;
  textAccent: string;
  arrowBorder: string;
}> = {
  silenciosa: {
    borderAccent: 'border-slate-500 dark:border-slate-400',
    bgSubtleRight: 'bg-slate-50/80 dark:bg-slate-800/30',
    headerRightBg: 'bg-slate-100 dark:bg-slate-800',
    dot: 'bg-slate-500 dark:bg-slate-400',
    textAccent: 'text-slate-700 dark:text-slate-300',
    arrowBorder: 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300',
  },
  boomers: {
    borderAccent: 'border-blue-500 dark:border-blue-400',
    bgSubtleRight: 'bg-blue-50/40 dark:bg-blue-950/20',
    headerRightBg: 'bg-blue-50/80 dark:bg-blue-950/40',
    dot: 'bg-blue-500 dark:bg-blue-400',
    textAccent: 'text-blue-700 dark:text-blue-300',
    arrowBorder: 'border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400',
  },
  'gen-x': {
    borderAccent: 'border-indigo-500 dark:border-indigo-400',
    bgSubtleRight: 'bg-indigo-50/40 dark:bg-indigo-950/20',
    headerRightBg: 'bg-indigo-50/80 dark:bg-indigo-950/40',
    dot: 'bg-indigo-500 dark:bg-indigo-400',
    textAccent: 'text-indigo-700 dark:text-indigo-300',
    arrowBorder: 'border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400',
  },
  millennials: {
    borderAccent: 'border-violet-500 dark:border-violet-400',
    bgSubtleRight: 'bg-violet-50/40 dark:bg-violet-950/20',
    headerRightBg: 'bg-violet-50/80 dark:bg-violet-950/40',
    dot: 'bg-violet-500 dark:bg-violet-400',
    textAccent: 'text-violet-700 dark:text-violet-300',
    arrowBorder: 'border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400',
  },
  'gen-z': {
    borderAccent: 'border-teal-500 dark:border-teal-400',
    bgSubtleRight: 'bg-teal-50/40 dark:bg-teal-950/20',
    headerRightBg: 'bg-teal-50/80 dark:bg-teal-950/40',
    dot: 'bg-teal-500 dark:bg-teal-400',
    textAccent: 'text-teal-700 dark:text-teal-300',
    arrowBorder: 'border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400',
  },
  alpha: {
    borderAccent: 'border-rose-500 dark:border-rose-400',
    bgSubtleRight: 'bg-rose-50/40 dark:bg-rose-950/20',
    headerRightBg: 'bg-rose-50/80 dark:bg-rose-950/40',
    dot: 'bg-rose-500 dark:bg-rose-400',
    textAccent: 'text-rose-700 dark:text-rose-300',
    arrowBorder: 'border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400',
  },
};
