import re

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace Interfaces & Data
new_data = """interface ComoAtuarItem {
  produtoEProposta: string[];
  comunicacao: string[];
  canaisEExperiencia: string[];
}

interface MicrogeracaoItem {
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

const MICROGERACOES_DATA: MicrogeracaoItem[] = [
  {
    id: 'silenciosa-boomers',
    name: 'Silenciosa–Boomers',
    period: '1940–1945',
    transicao: 'Geração Silenciosa → Baby Boomers',
    sintese: 'Combina estabilidade e cautela com maior receptividade à modernização.',
    respostasRapidas: {
      combina: 'Cautela e foco em segurança da Silenciosa com a busca por bem-estar e conforto dos Boomers.',
      comoConsome: 'Foco em qualidade e durabilidade, mas com maior abertura à inovação que traga praticidade.',
      relacaoTecnologia: 'Receptividade a tecnologias que facilitem a vida e novos canais, mantendo uso funcional.'
    },
    perfilConsumo: 'Transição entre a economia do pós-crise e a prosperidade do pós-guerra. Busca estabilidade financeira, mas já permite um consumo voltado a melhorias no padrão de vida e saúde.',
    comoSeRelacionar: [
      'Manter confiança e segurança.',
      'Introduzir inovação sem romper completamente com familiaridade e tradição.',
      'Combinar canais tradicionais com novas alternativas.'
    ],
    tendencias: ['Saúde e bem-estar', 'Segurança', 'Conforto', 'Longevidade'],
    palavrasChave: ['Tradição', 'Valor', 'Confiança', 'Modernização'],
    themeColors: { from: 'from-slate-700', to: 'to-blue-600' }
  },
  {
    id: 'jones',
    name: 'Geração Jones',
    period: '1954–1965',
    transicao: 'Baby Boomers → Geração X',
    sintese: 'Combina referências dos Boomers com maior pragmatismo e comportamento analítico.',
    respostasRapidas: {
      combina: 'A valorização de qualidade e status dos Boomers com a independência pragmática da Geração X.',
      comoConsome: 'Compara marcas e preços rigorosamente e equilibra a conveniência digital com a interação presencial.',
      relacaoTecnologia: 'Adotaram amplamente a internet, e-commerce e smartphones para embasar decisões.'
    },
    perfilConsumo: 'Cresceram no final da euforia econômica e início das desacelerações. São compradores criteriosos, valorizam a qualidade comprovada e mesclam perfeitamente o ambiente físico e digital em suas jornadas.',
    comoSeRelacionar: [
      'Combinar digital e presencial.',
      'Apresentar informação transparente.',
      'Demonstrar qualidade e valor.'
    ],
    tendencias: ['Conveniência', 'Qualidade', 'Comparação'],
    palavrasChave: ['Pragmatismo', 'Status', 'Conectividade', 'Análise'],
    themeColors: { from: 'from-blue-600', to: 'to-indigo-600' }
  },
  {
    id: 'xennials',
    name: 'Xennials',
    period: '1977–1983',
    transicao: 'Geração X → Millennials',
    sintese: 'Une memória de uma vida mais analógica com elevada adaptação ao ambiente digital.',
    respostasRapidas: {
      combina: 'O comportamento mais reservado e focado em qualidade da Geração X com a demanda por agilidade dos Millennials.',
      comoConsome: 'Busca conveniência digital e autenticidade, mas não abre mão da experiência presencial e da validação física.',
      relacaoTecnologia: 'Possuem alta flexibilidade e fluência em ambos os ambientes, equilibrando vida offline e online.'
    },
    perfilConsumo: 'Cresceram sem internet, mas entraram no mercado de trabalho com a digitalização plena. Apresentam um comportamento híbrido muito bem resolvido, sendo um público altamente adaptável.',
    comoSeRelacionar: [
      'Integrar online e offline.',
      'Oferecer conveniência.',
      'Preservar autenticidade e interação pessoal.'
    ],
    tendencias: ['Omnichannel', 'Conveniência', 'Autenticidade'],
    palavrasChave: ['Flexibilidade', 'Independência', 'Híbrido', 'Qualidade'],
    themeColors: { from: 'from-indigo-600', to: 'to-violet-600' }
  },
  {
    id: 'zillennials',
    name: 'Zillennials',
    period: '1993–1998',
    transicao: 'Millennials → Geração Z',
    sintese: 'Equilibra propósito e experiência com comportamento digital mais intenso.',
    respostasRapidas: {
      combina: 'A valorização da experiência dos Millennials com a hiperconectividade e consciência social da Geração Z.',
      comoConsome: 'Foca em compras online, exige customização e valoriza marcas atreladas a sustentabilidade e impacto.',
      relacaoTecnologia: 'Uso intenso de dispositivos móveis e redes sociais, transitando fluentemente entre plataformas.'
    },
    perfilConsumo: 'Trazem forte senso de responsabilidade social e ambiental, mas buscam que essas causas sejam vivenciadas por meio de experiências físicas e digitais muito bem amarradas e autênticas.',
    comoSeRelacionar: [
      'Integrar digital e físico.',
      'Utilizar comunicação autêntica.',
      'Trabalhar personalização.',
      'Demonstrar propósito de forma concreta.'
    ],
    tendencias: ['Experiência', 'Propósito', 'Personalização', 'Circularidade'],
    palavrasChave: ['Responsabilidade', 'Hiperconectividade', 'Autenticidade'],
    themeColors: { from: 'from-violet-600', to: 'to-teal-600' }
  },
  {
    id: 'zalpha',
    name: 'Zalpha',
    period: '2010–2012',
    transicao: 'Geração Z → Geração Alpha',
    sintese: 'Combina hiperconectividade, identidade e crescente integração entre consumo e tecnologia.',
    respostasRapidas: {
      combina: 'O foco em individualidade da Geração Z com a imersão tecnológica precoce da Alpha.',
      comoConsome: 'Extremamente influenciados por redes sociais, influenciadores e mecânicas de gamificação e marketplaces.',
      relacaoTecnologia: 'Integração nativa de IoT, produtos inteligentes e dinâmicas phygital no cotidiano.'
    },
    perfilConsumo: 'Nascidos na transição para a era dos tablets e IA, exigem interatividade, personalização contínua e demonstram afinidade precoce com experiências imersivas e customizáveis.',
    comoSeRelacionar: [
      'Oferecer experiências interativas.',
      'Considerar customização.',
      'Integrar físico e digital.',
      'Demonstrar impacto social/ambiental quando real.'
    ],
    tendencias: ['Gamificação', 'Phygital', 'Hiperpersonalização'],
    palavrasChave: ['Interatividade', 'Customização', 'Redes Sociais'],
    themeColors: { from: 'from-teal-600', to: 'to-amber-600' }
  },
  {
    id: 'alpha-beta',
    name: 'Alpha–Beta',
    period: '2024–2028',
    transicao: 'Geração Alpha → Geração Beta',
    isProspectivo: true,
    sintese: 'Grupo ainda em formação marcado pela hiperconectividade, IA e automação desde o nascimento.',
    respostasRapidas: {
      combina: 'A natividade interativa da Alpha com as tecnologias generativas imersivas da Beta.',
      comoConsome: 'Perfil prospectivo com projeção para uso de experiências imersivas, automação residencial e interfaces lúdicas.',
      relacaoTecnologia: 'Convivência integral com IA, assistentes virtuais e realidades mistas como padrão básico de interação.'
    },
    perfilConsumo: 'Por se tratar de um perfil prospectivo, seus hábitos ainda não estão consolidados. A expectativa do relatório é de altíssima exigência por respostas em tempo real e adaptação automática das soluções.',
    comoSeRelacionar: [
      'Monitorar integração de IA.',
      'Observar tendências em gamificação.',
      'Acompanhar a evolução das expectativas de conectividade e sustentabilidade.'
    ],
    tendencias: ['Inteligência Artificial', 'Automação', 'Experiências Imersivas'],
    palavrasChave: ['Prospectivo', 'Automação', 'IA', 'Hiperconectividade'],
    themeColors: { from: 'from-amber-600', to: 'to-rose-600' }
  }
];

interface GeracaoTheme {
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

interface GeracaoItem {
  id: string;
  name: string;
  period: string;
  assinaturaCurta: string;
  icon: typeof Shield;
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

const GERACOES_DATA: GeracaoItem[] = [
  {
    id: 'silenciosa',
    name: 'Geração Silenciosa',
    period: '1925–1945',
    assinaturaCurta: 'Tradição, confiança e longevidade.',
    icon: Shield,
    oQueMoldou: 'A Grande Depressão e a Segunda Guerra Mundial moldaram um perfil focado na economia doméstica, poupança, consumo cauteloso e valorização de produtos essenciais e duráveis.',
    leituraRapida: {
      valoriza: 'Durabilidade, qualidade e marcas de confiança.',
      comoTendeAConsumir: 'Consumo moderado, preferência por consertar produtos e foco no que é funcional.',
      relacaoTecnologia: 'Uso prático e preferência por soluções seguras e simples.'
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
      prioridadesComportamento: 'Orientada à estabilidade, segurança e tradição. Evita riscos e busca relações pautadas no respeito e na transparência.',
      marcasCanaisExperiencia: 'Prioriza marcas tradicionais e atendimento pessoal. Valoriza jornadas simples e suporte atencioso que traga previsibilidade.',
      sustentabilidadeValores: 'Relação pautada pelo não desperdício, aproveitamento máximo da vida útil e consumo responsável.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Evidenciar qualidade, segurança e durabilidade.',
        'Valorizar confiabilidade e longevidade.'
      ],
      comunicacao: [
        'Utilizar comunicação clara, respeitosa e transparente.',
        'Reforçar confiança e benefícios concretos.'
      ],
      canaisEExperiencia: [
        'Manter atendimento pessoal e canais tradicionais acessíveis.',
        'Evitar complexidade desnecessária na jornada.'
      ]
    },
    tendencias: ['Saúde e bem-estar', 'Segurança', 'Conforto', 'Longevidade dos produtos'],
    palavrasChave: ['Tradição', 'Confiança', 'Durabilidade', 'Responsabilidade']
  },
  {
    id: 'boomers',
    name: 'Baby Boomers',
    period: '1946–1964',
    assinaturaCurta: 'Reputação, conforto e qualidade de vida.',
    icon: Award,
    oQueMoldou: 'O pós-guerra, a reconstrução, a expansão econômica, o crescimento do consumo de massa e da publicidade moldaram a valorização de bens duráveis e conforto.',
    leituraRapida: {
      valoriza: 'Boa reputação, conforto e benefícios tangíveis.',
      comoTendeAConsumir: 'Maior fidelidade a marcas reconhecidas e foco na melhoria da qualidade de vida.',
      relacaoTecnologia: 'Crescente adesão digital, mas mantém proximidade com meios tradicionais.'
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
      prioridadesComportamento: 'Busca segurança financeira, qualidade de vida e reconhecimento. Aceita pagar mais por soluções que garantam bem-estar e conforto.',
      marcasCanaisExperiencia: 'Tende a ser fiel a marcas que entregam o prometido. Transita entre lojas físicas e o uso crescente de e-mail e redes sociais.',
      sustentabilidadeValores: 'Preocupação ambiental presente, porém tratada com uma abordagem mais pragmática e voltada aos resultados práticos.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Evidenciar reputação, qualidade, conforto e benefícios tangíveis.',
        'Considerar soluções associadas a bem-estar e qualidade de vida.'
      ],
      comunicacao: [
        'Utilizar comunicação direta e informativa.',
        'Demonstrar benefícios de forma clara.'
      ],
      canaisEExperiencia: [
        'Manter canais tradicionais sem ignorar o crescimento digital.',
        'Combinar atendimento convencional, e-mail e redes sociais.'
      ]
    },
    tendencias: ['Saúde', 'Bem-estar', 'Conforto', 'Longevidade'],
    palavrasChave: ['Conforto', 'Reputação', 'Conveniência', 'Qualidade de vida']
  },
  {
    id: 'gen-x',
    name: 'Geração X',
    period: '1965–1980',
    assinaturaCurta: 'Pragmatismo, autonomia e busca por valor.',
    icon: Briefcase,
    oQueMoldou: 'Transformações culturais, mudanças no mercado de trabalho, crise do petróleo e transição entre o analógico e o digital formaram consumidores mais pragmáticos e autônomos.',
    leituraRapida: {
      valoriza: 'Relação custo-benefício, praticidade e durabilidade.',
      comoTendeAConsumir: 'Pesquisa informada, comparação de opções e avaliação de valor no curto e longo prazo.',
      relacaoTecnologia: 'Adotou a tecnologia na vida adulta e transita com facilidade entre o físico e o digital.'
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
      prioridadesComportamento: 'Busca equilíbrio entre vida pessoal e profissional. Questiona padrões tradicionais e exige flexibilidade e autonomia nas escolhas.',
      marcasCanaisExperiencia: 'Consumidores analíticos que exigem informações completas e transparentes antes da decisão. Combinam canais sociais, digitais e lojas físicas.',
      sustentabilidadeValores: 'Busca equilíbrio entre responsabilidade ambiental e preço, priorizando soluções sustentáveis desde que não exijam sacrifícios financeiros desproporcionais.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Demonstrar qualidade, durabilidade, valor e praticidade.',
        'Apresentar claramente características e benefícios.'
      ],
      comunicacao: [
        'Disponibilizar informações detalhadas e transparentes.',
        'Manter comunicação objetiva e personalizada.'
      ],
      canaisEExperiencia: [
        'Combinar canais tradicionais, digitais e sociais.',
        'Facilitar pesquisa e comparação.'
      ]
    },
    tendencias: ['Tecnologia', 'Bem-estar', 'Qualidade de vida', 'Educação continuada'],
    palavrasChave: ['Autonomia', 'Valor', 'Durabilidade', 'Praticidade']
  },
  {
    id: 'millennials',
    name: 'Millennials',
    period: '1981–1996',
    assinaturaCurta: 'Experiência, personalização e autenticidade.',
    icon: Smartphone,
    oQueMoldou: 'A globalização, a expansão da internet, a computação pessoal e o crescimento das redes sociais formaram um público focado em acesso à informação, pesquisa e experiência.',
    leituraRapida: {
      valoriza: 'Experiências, inovação e conveniência.',
      comoTendeAConsumir: 'Pesquisa intensamente avaliações de terceiros e espera jornadas fluidas entre o online e o offline.',
      relacaoTecnologia: 'Nativos da era digital, hiperconectados e habituados à integração tecnológica no dia a dia.'
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
      prioridadesComportamento: 'Foco em vivenciar experiências em vez da mera posse de bens. Exige personalização e soluções fortemente alinhadas às suas necessidades cotidianas.',
      marcasCanaisExperiencia: 'Espera coerência da marca. A jornada mistura pesquisa online, redes sociais e validação antes da compra, frequentemente finalizada no ambiente digital.',
      sustentabilidadeValores: 'Conexão direta com causas sociais e ambientais, demonstrando maior abertura a marcas associadas a práticas genuinamente éticas e sustentáveis.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Considerar personalização, conveniência e inovação.',
        'Demonstrar coerência entre experiência, produto e valores.'
      ],
      comunicacao: [
        'Priorizar autenticidade e transparência.',
        'Utilizar comunicação rápida e responsiva.'
      ],
      canaisEExperiencia: [
        'Integrar físico e digital.',
        'Considerar redes sociais, aplicativos e jornadas omnichannel.'
      ]
    },
    tendencias: ['Personalização', 'Experiências', 'Tecnologias emergentes', 'Saúde mental'],
    palavrasChave: ['Autenticidade', 'Experiência', 'Inovação', 'Propósito']
  },
  {
    id: 'gen-z',
    name: 'Geração Z',
    period: '1997–2012',
    assinaturaCurta: 'Conectividade, individualidade e propósito.',
    icon: Bot,
    oQueMoldou: 'Smartphones, redes sociais, conectividade permanente, digitalização acelerada e mudanças ambientais geraram consumidores ágeis, focados em individualidade e propósito.',
    leituraRapida: {
      valoriza: 'Diversidade, causas autênticas e hiperpersonalização.',
      comoTendeAConsumir: 'Muito influenciados por redes sociais, influenciadores e validação constante da comunidade online.',
      relacaoTecnologia: 'Conectividade móvel permanente, comunicação rápida e essencialmente visual.'
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
      prioridadesComportamento: 'Busca alinhar o consumo à própria identidade e valores. É ágil na tomada de decisão e demonstra forte senso de individualidade e inclusão.',
      marcasCanaisExperiencia: 'É menos fiel de forma automática às marcas. A compra é frequentemente mediada por vídeos curtos, estética interativa e rapidez de entrega.',
      sustentabilidadeValores: 'Forte cobrança por impacto positivo, circularidade e sustentabilidade concreta — repudiam discursos vazios e greenwashing.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Considerar personalização e adequação às preferências individuais.',
        'Demonstrar propósito ou sustentabilidade somente quando forem concretos.'
      ],
      comunicacao: [
        'Utilizar comunicação rápida, visual e interativa.',
        'Reforçar autenticidade com evidências.'
      ],
      canaisEExperiencia: [
        'Priorizar boa experiência digital.',
        'Considerar influência social e integração físico-digital.'
      ]
    },
    tendencias: ['Personalização visual', 'Sustentabilidade circular', 'Tecnologias imersivas', 'Causas sociais'],
    palavrasChave: ['Conectividade', 'Diversidade', 'Propósito', 'Validação social']
  },
  {
    id: 'alpha',
    name: 'Geração Alpha',
    period: '2013–2024',
    assinaturaCurta: 'Interatividade, tecnologia e personalização.',
    icon: Laptop,
    isForming: true,
    oQueMoldou: 'Ambiente integralmente digital, dispositivos conectados, inteligência artificial, automação e tecnologias interativas moldam expectativas de conectividade fluida.',
    leituraRapida: {
      valoriza: 'Conectividade contínua e integração tecnológica natural.',
      comoTendeAConsumir: 'Estimulados por experiências lúdicas, gamificação e forte apelo interativo visual.',
      relacaoTecnologia: 'Nativos de inteligência artificial, interfaces imersivas e resposta em tempo real.'
    },
    theme: {
      btnActive: 'bg-orange-600 text-white shadow-md shadow-orange-500/20 ring-1 ring-orange-600',
      btnInactiveIcon: 'text-slate-400 group-hover:text-orange-500',
      btnInactiveBadge: 'bg-slate-100 text-slate-500',
      btnHoverBorder: 'hover:border-orange-400',
      topBar: 'bg-gradient-to-r from-orange-600 to-orange-400',
      headerIconBox: 'bg-orange-50 dark:bg-orange-900/30 border-orange-100 dark:border-orange-800',
      headerIcon: 'text-orange-600 dark:text-orange-400',
      badge: 'bg-orange-50 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800',
      quickReadBg: 'bg-orange-50/40 dark:bg-orange-950/20',
      quickReadBorder: 'border-orange-100/60 dark:border-orange-900/30',
      quickReadTitle: 'text-orange-600 dark:text-orange-400',
      accentText: 'text-orange-700 dark:text-orange-400',
      accentIcon: 'text-orange-500 dark:text-orange-400',
      trendPanelBg: 'bg-orange-50/50 dark:bg-orange-900/10',
      trendPanelBorder: 'border-orange-200/60 dark:border-orange-900/40',
      trendBullet: 'bg-orange-400',
      chip: 'bg-white dark:bg-slate-800 text-orange-700 dark:text-orange-300 border-orange-200/80 dark:border-orange-800/60 shadow-sm'
    },
    perfilEConsumo: {
      prioridadesComportamento: 'Sendo um perfil ainda em formação, projeta-se a busca por interatividade constante e adaptação nativa de todas as soluções às suas preferências.',
      marcasCanaisExperiencia: 'Tendência a transitar pelo consumo via jogos virtuais, assistentes de voz e criadores de conteúdo digitais, exigindo respostas imediatas das marcas.',
      sustentabilidadeValores: 'A sustentabilidade e a consciência global tendem a ser tratadas como requisito básico e naturalizado do mundo, mais do que um diferencial.'
    },
    comoAtuar: {
      produtoEProposta: [
        'Monitorar conectividade, personalização e interatividade.',
        'Observar evolução de soluções inteligentes.'
      ],
      comunicacao: [
        'Considerar formatos visuais, educativos e interativos.',
        'Evitar apresentar previsões como comportamento consolidado.'
      ],
      canaisEExperiencia: [
        'Monitorar gamificação, IA, realidade aumentada e experiências digitais.',
        'Considerar que ainda é um público majoritariamente em formação.'
      ]
    },
    tendencias: ['IA', 'Automação', 'Personalização contínua', 'Interatividade'],
    palavrasChave: ['Prospectivo', 'Conectividade', 'IA', 'Imersão']
  }
];
"""

start_str = "interface ComoAtuarItem {"
end_str = "];"
start_idx = content.find(start_str)
end_idx = content.find(end_str, content.find("const GERACOES_DATA")) + 2

content = content[:start_idx] + new_data + content[end_idx:]


# 2. Component Code Replace state
state_replace = """  const [subTab, setSubTab] = useState<'prioridades' | 'perfis'>('prioridades');
  const [selectedGeneration, setSelectedGeneration] = useState<string>('gen-x');
  const [selectedMicro, setSelectedMicro] = useState<string>('silenciosa-boomers');

  const handleSelectGeneration = (genId: string) => {
    setSelectedGeneration(genId);
  };"""

content = re.sub(
    r"  const \[subTab, setSubTab\] = useState<'prioridades' \| 'perfis'>\('prioridades'\);\n.*?(?:handleSelectGeneration.*?})",
    state_replace,
    content,
    flags=re.DOTALL
)

sec_start = content.find("{/* 6. LEITURA GERACIONAL DO CONSUMO */}")
sec_end = content.find("{/* 7. POSSÍVEIS IMPACTOS PARA A LORENZETTI (CONTAINER ÚNICO EM 3 COLUNAS) */}")

if sec_start == -1 or sec_end == -1:
    print("Could not find section 6 or 7")
    exit(1)

new_section = """{/* 6. LEITURA GERACIONAL DO CONSUMO */}
          <section className="flex flex-col gap-10 md:gap-14 pb-12">
            
            {/* BLOCO 1: GERAÇÕES PRINCIPAIS */}
            <div className="flex flex-col gap-5 sm:gap-7">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                  Leitura Geracional do Consumo
                </h3>
                <p className="text-[13px] sm:text-sm text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
                  Experiências econômicas, sociais e tecnológicas compartilhadas ajudam a formar diferentes referências, expectativas e comportamentos de consumo ao longo das gerações.
                </p>
              </div>

              {/* BARRA DE NAVEGAÇÃO DAS GERAÇÕES */}
              <div className="flex flex-wrap gap-2">
                {GERACOES_DATA.map((gen) => {
                  const isSelected = selectedGeneration === gen.id;
                  const Icon = gen.icon;
                  return (
                    <button
                      key={gen.id}
                      onClick={() => handleSelectGeneration(gen.id)}
                      className={`relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border font-bold text-[12px] sm:text-[13px] transition-all duration-200 cursor-pointer ${
                        isSelected 
                          ? gen.theme.btnActive 
                          : `bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 ${gen.theme.btnHoverBorder} hover:shadow-xs`
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'opacity-90' : gen.theme.btnInactiveIcon}`} />
                      <span>{gen.name}</span>
                      {gen.isForming && !isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute -top-0.5 -right-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* PAINEL DA GERAÇÃO */}
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900/60 flex flex-col shadow-sm overflow-hidden animate-in fade-in duration-300">
                <div className={`h-1.5 w-full ${currentGen.theme.topBar}`} />

                <div className="p-4 sm:p-5 flex flex-col gap-4">
                  {/* CABEÇALHO DO PAINEL */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs ${currentGen.theme.headerIconBox}`}>
                      <CurrentGenIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${currentGen.theme.headerIcon}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                          {currentGen.name}
                        </h4>
                        <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                          ({currentGen.period})
                        </span>
                        {currentGen.isForming && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                            Perfil em formação
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-slate-600 dark:text-slate-300 mt-0.5 font-medium">
                        {currentGen.assinaturaCurta}
                      </p>
                    </div>
                  </div>

                  {/* O QUE MOLDOU ESSA GERAÇÃO */}
                  <div className={`mt-1 rounded-xl border p-3.5 sm:p-4 flex flex-col gap-1.5 ${currentGen.theme.quickReadBg} ${currentGen.theme.quickReadBorder}`}>
                    <h5 className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${currentGen.theme.accentText}`}>
                      O que moldou essa geração
                    </h5>
                    <p className="text-[13.5px] sm:text-[14px] text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {currentGen.oQueMoldou}
                    </p>
                  </div>

                  {/* 3 RESPOSTAS RÁPIDAS (VALORIZA | COMO CONSOME | TECNOLOGIA) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-slate-200/80 dark:md:divide-slate-700/60 mt-1">
                    <div className="flex flex-col gap-1 pr-4">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className={`w-3.5 h-3.5 ${currentGen.theme.accentIcon} shrink-0`} />
                        <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${currentGen.theme.accentText}`}>
                          Valoriza
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug pl-5">
                        {currentGen.leituraRapida.valoriza}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 md:px-4">
                      <div className="flex items-center gap-1.5">
                        <Target className={`w-3.5 h-3.5 ${currentGen.theme.accentIcon} shrink-0`} />
                        <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${currentGen.theme.accentText}`}>
                          Como Tende a Consumir
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug pl-5">
                        {currentGen.leituraRapida.comoTendeAConsumir}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 md:pl-4">
                      <div className="flex items-center gap-1.5">
                        <Cpu className={`w-3.5 h-3.5 ${currentGen.theme.accentIcon} shrink-0`} />
                        <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${currentGen.theme.accentText}`}>
                          Relação com Tecnologia
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug pl-5">
                        {currentGen.leituraRapida.relacaoTecnologia}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-200/80 dark:border-slate-800 my-1" />

                  {/* CONTEÚDO PRINCIPAL (60% / 40%) */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                    
                    {/* COLUNA ESQUERDA: PERFIL E CONSUMO (60%) */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                      <h5 className="text-[13px] sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                        Perfil e Consumo
                      </h5>

                      <div className="flex flex-col gap-3.5">
                        <div className="flex flex-col gap-1">
                          <h6 className={`text-[11px] font-bold uppercase tracking-wider ${currentGen.theme.accentText}`}>
                            Prioridades e Comportamento
                          </h6>
                          <p className="text-[12.5px] sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                            {currentGen.perfilEConsumo.prioridadesComportamento}
                          </p>
                        </div>
                        
                        <div className="border-t border-slate-100 dark:border-slate-800/60" />
                        
                        <div className="flex flex-col gap-1">
                          <h6 className={`text-[11px] font-bold uppercase tracking-wider ${currentGen.theme.accentText}`}>
                            Marcas, Canais e Experiência
                          </h6>
                          <p className="text-[12.5px] sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                            {currentGen.perfilEConsumo.marcasCanaisExperiencia}
                          </p>
                        </div>

                        <div className="border-t border-slate-100 dark:border-slate-800/60" />

                        <div className="flex flex-col gap-1">
                          <h6 className={`text-[11px] font-bold uppercase tracking-wider ${currentGen.theme.accentText}`}>
                            Sustentabilidade e Valores
                          </h6>
                          <p className="text-[12.5px] sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                            {currentGen.perfilEConsumo.sustentabilidadeValores}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* COLUNA DIREITA: COMO ATUAR (40%) */}
                    <div className={`lg:col-span-2 rounded-xl p-4 sm:p-5 flex flex-col gap-4 shadow-2xs ${currentGen.theme.trendPanelBg} ${currentGen.theme.trendPanelBorder}`}>
                      <div className="flex flex-col gap-0.5">
                        <h5 className={`text-[13px] sm:text-sm font-bold uppercase tracking-wider ${currentGen.theme.accentText}`}>
                          Como Atuar com Este Perfil
                        </h5>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                          Orientações de relacionamento e atuação derivadas do relatório.
                        </span>
                      </div>

                      <div className="flex flex-col gap-3.5">
                        <div className="flex flex-col gap-1.5">
                          <h6 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <Package className={`w-3.5 h-3.5 ${currentGen.theme.accentIcon}`} />
                            Produto e Proposta
                          </h6>
                          <ul className="flex flex-col gap-1.5 pl-5">
                            {currentGen.comoAtuar.produtoEProposta.map((p, idx) => (
                              <li key={idx} className="text-[12px] text-slate-700 dark:text-slate-300 leading-relaxed list-disc">
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <h6 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <Megaphone className={`w-3.5 h-3.5 ${currentGen.theme.accentIcon}`} />
                            Comunicação
                          </h6>
                          <ul className="flex flex-col gap-1.5 pl-5">
                            {currentGen.comoAtuar.comunicacao.map((c, idx) => (
                              <li key={idx} className="text-[12px] text-slate-700 dark:text-slate-300 leading-relaxed list-disc">
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <h6 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <Globe className={`w-3.5 h-3.5 ${currentGen.theme.accentIcon}`} />
                            Canais e Experiência
                          </h6>
                          <ul className="flex flex-col gap-1.5 pl-5">
                            {currentGen.comoAtuar.canaisEExperiencia.map((e, idx) => (
                              <li key={idx} className="text-[12px] text-slate-700 dark:text-slate-300 leading-relaxed list-disc">
                                {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200/80 dark:border-slate-800 my-1" />

                  {/* TENDÊNCIAS E PALAVRAS-CHAVE */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                      <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shrink-0 sm:w-40 pt-1 ${currentGen.theme.accentText}`}>
                        Tendências Associadas
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentGen.tendencias.map((item, idx) => (
                          <span key={idx} className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${currentGen.theme.chip}`}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                      <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shrink-0 sm:w-40 pt-1 ${currentGen.theme.accentText}`}>
                        Palavras-Chave
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentGen.palavrasChave.map((tag, idx) => (
                          <span key={idx} className="text-[10.5px] text-slate-600 dark:text-slate-400 font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* SEPARADOR */}
            <div className="w-full h-px bg-slate-200/60 dark:bg-slate-800/80 my-4" />

            {/* BLOCO 2: MICROGERAÇÕES E TRANSIÇÕES DE CONSUMO */}
            <div className="flex flex-col gap-5 sm:gap-7">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                  Microgerações e Transições de Consumo
                </h3>
                <p className="text-[13px] sm:text-sm text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
                  Grupos formados nas fronteiras entre gerações combinam referências de diferentes períodos e ajudam a explicar comportamentos que não se encaixam integralmente nas classificações tradicionais.
                </p>
              </div>

              {/* NAVEGAÇÃO DAS MICROGERAÇÕES */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                {MICROGERACOES_DATA.map((micro) => {
                  const isSelected = selectedMicro === micro.id;
                  return (
                    <button
                      key={micro.id}
                      onClick={() => setSelectedMicro(micro.id)}
                      className={`relative flex flex-col items-center justify-center gap-1 p-2 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                        isSelected 
                          ? 'bg-slate-800 dark:bg-slate-700 text-white shadow-md border-slate-900 dark:border-slate-600 ring-1 ring-slate-800' 
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400 hover:shadow-xs'
                      }`}
                    >
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${micro.themeColors.from} ${micro.themeColors.to}`} />
                      <span className={`text-[12px] sm:text-[13px] font-bold mt-1 ${isSelected ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                        {micro.name}
                      </span>
                      <span className={`text-[9.5px] uppercase font-bold tracking-wider ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {micro.transicao.replace('Geração ', '').replace('Geração ', '').replace('Baby ', '')}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* PAINEL DA MICROGERAÇÃO */}
              {(() => {
                const micro = MICROGERACOES_DATA.find((m) => m.id === selectedMicro);
                if (!micro) return null;

                return (
                  <div className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900/60 p-4 sm:p-5 flex flex-col gap-4 shadow-sm animate-in fade-in duration-300 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${micro.themeColors.from} ${micro.themeColors.to}`} />
                    
                    <div className="pl-2 sm:pl-3 flex flex-col gap-4">
                      {/* HEADER MICROGERAÇÃO */}
                      <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                            {micro.name}
                          </h4>
                          <span className="text-[11px] sm:text-xs font-mono text-slate-500">({micro.period})</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                            {micro.transicao}
                          </span>
                          {micro.isProspectivo && (
                            <span className="text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                              Perfil Prospectivo
                            </span>
                          )}
                        </div>
                        <p className="text-[13px] font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                          {micro.sintese}
                        </p>
                      </div>

                      {/* 3 RESPOSTAS RÁPIDAS */}
                      <div className="flex flex-col gap-1.5">
                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Por que essa transição é relevante
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-[12.5px]">
                          <div className="bg-slate-50/80 dark:bg-slate-800/40 p-3.5 rounded-lg border border-slate-200/60 dark:border-slate-700/50 flex flex-col gap-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Combina</span>
                            <p className="text-[12px] sm:text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">{micro.respostasRapidas.combina}</p>
                          </div>
                          <div className="bg-slate-50/80 dark:bg-slate-800/40 p-3.5 rounded-lg border border-slate-200/60 dark:border-slate-700/50 flex flex-col gap-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Como Consome</span>
                            <p className="text-[12px] sm:text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">{micro.respostasRapidas.comoConsome}</p>
                          </div>
                          <div className="bg-slate-50/80 dark:bg-slate-800/40 p-3.5 rounded-lg border border-slate-200/60 dark:border-slate-700/50 flex flex-col gap-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Relação com Tecnologia</span>
                            <p className="text-[12px] sm:text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">{micro.respostasRapidas.relacaoTecnologia}</p>
                          </div>
                        </div>
                      </div>

                      {/* CONTEÚDO PRINCIPAL (60/40) */}
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 pt-2">
                        <div className="lg:col-span-3 flex flex-col gap-1.5">
                          <h5 className="text-[12px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                            Perfil e Consumo
                          </h5>
                          <p className="text-[12.5px] sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                            {micro.perfilConsumo}
                          </p>
                        </div>
                        <div className="lg:col-span-2 flex flex-col gap-1.5 pl-0 lg:pl-6 lg:border-l border-slate-200/70 dark:border-slate-700/60">
                          <h5 className="text-[12px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                            Como se Relacionar
                          </h5>
                          <ul className="flex flex-col gap-1.5 mt-1">
                            {micro.comoSeRelacionar.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-[12px] sm:text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0 mt-1.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex flex-col sm:flex-row gap-4 sm:items-center text-[11px]">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-bold uppercase tracking-wider text-slate-500 mr-1">Tendências:</span>
                          {micro.tendencias.map((t, idx) => (
                            <span key={idx} className="px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium">{t}</span>
                          ))}
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-slate-200 dark:bg-slate-700" />
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-bold uppercase tracking-wider text-slate-500 mr-1">Palavras-chave:</span>
                          <span className="text-slate-600 dark:text-slate-400 font-medium">{micro.palavrasChave.join(' • ')}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })()}
            </div>

            {/* SEPARADOR */}
            <div className="w-full h-px bg-slate-200/60 dark:bg-slate-800/80 my-4" />

            {/* BLOCO 3: GERAÇÃO BETA */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
                <Telescope className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                Olhando para 2037 — Geração Beta
              </h3>
              
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    A partir de 2025
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-slate-600 dark:text-slate-400 font-medium italic">
                    O perfil ainda é prospectivo e deve ser interpretado como sinal de longo prazo.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1.5">
                      Ambiente
                    </h5>
                    <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                      IA, automação e hiperconectividade.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1.5">
                      Expectativa
                    </h5>
                    <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                      Personalização e experiências altamente digitais.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1.5">
                      Consumo
                    </h5>
                    <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                      Maior mediação tecnológica e automação.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1.5">
                      O Que Monitorar
                    </h5>
                    <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                      Produtos inteligentes, interfaces de IA, experiências imersivas e sustentabilidade.
                    </p>
                  </div>
                </div>

                <div className="mt-2 pt-3 border-t border-slate-200/70 dark:border-slate-700/50 flex items-start gap-1.5">
                  <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="text-[12px] sm:text-[12.5px] text-slate-500 dark:text-slate-400 italic">
                    As características da Geração Beta são projeções apresentadas pelo relatório e não representam comportamento de consumo já consolidado.
                  </p>
                </div>
              </div>
            </div>

            {/* NOTA METODOLÓGICA E FONTE */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="rounded-xl bg-slate-50 dark:bg-slate-900/40 p-4 flex items-start gap-2.5 border border-slate-200/60 dark:border-slate-800">
                <Info className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Nota Metodológica
                  </span>
                  <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Os recortes geracionais representam tendências de grupo e não determinam o comportamento individual. Pessoas da mesma geração podem apresentar necessidades e hábitos diferentes conforme condição financeira, estágio de vida, contexto, interesses e relação com tecnologia. As microgerações ajudam a evidenciar essa fluidez ao combinar características de períodos distintos.
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium pl-1">
                Fonte: Sebrae — Perfis Geracionais e seus Comportamentos de Consumo
              </p>
            </div>

          </section>
"""

content = content[:sec_start] + new_section + "\n          " + content[sec_end:]

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
