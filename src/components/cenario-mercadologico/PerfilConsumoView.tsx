import React, { useState } from 'react';
import { 
  Target, Users, ChevronRight, ChevronDown, Compass, Wallet, Shield, Zap, BadgeCheck, 
  SlidersHorizontal, Leaf, Layers, Award, CalendarCheck, Tag, Scale, Calculator,
  ShieldCheck, ArrowLeftRight, Lock, Smartphone, Home, History, Cpu, Boxes, Share2,
  Laptop, Bot, Info, Briefcase, BarChart3,
  Package, Megaphone, Globe, X, GitFork, CheckCircle2
, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import { PRIORIDADES_EVIDENCES, PERFIS_EVIDENCES } from '../../data/evidences/perfil_consumo';

interface PerfilConsumoViewProps {
  setActivePage?: (page: string) => void;
}

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

interface ComoAtuarItem {
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

interface PerfilEmergenteItem {
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

const PERFIS_EMERGENTES_DATA: PerfilEmergenteItem[] = [
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

const GEN_ACCENT_MAP: Record<string, {
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

export function PerfilConsumoView({ setActivePage }: PerfilConsumoViewProps) {
  const [subTab, setSubTab] = useState<'prioridades' | 'perfis'>('prioridades');
  const [selectedGeneration, setSelectedGeneration] = useState<string>('gen-x');
  const [selectedMicro, setSelectedMicro] = useState<string>('silenciosa-boomers');

  const handleSelectGeneration = (genId: string) => {
    setSelectedGeneration(genId);
  };;

  const currentGen = GERACOES_DATA.find((g) => g.id === selectedGeneration) || GERACOES_DATA[0];
  const CurrentGenIcon = currentGen.icon;
  const currentAccent = GEN_ACCENT_MAP[currentGen.id] || GEN_ACCENT_MAP['gen-x'];

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in duration-300">
      
      {/* CABEÇALHO */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage?.('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0 cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Cenário Mercadológico</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">Perfil de Consumo</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Perfil de Consumo
            </h1>
            <p className="text-sm sm:text-[16px] text-slate-600 dark:text-slate-400">
              Análise dos fatores que influenciam escolhas, prioridades e diferentes comportamentos de consumo.
            </p>
          </div>
        </div>
      </div>

      {/* NAVEGAÇÃO SECUNDÁRIA */}
      <div className="w-full bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-2 sm:p-2.5 shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 w-full">
          
          <button
            type="button"
            onClick={() => setSubTab('prioridades')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              subTab === 'prioridades'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md border-indigo-700 dark:border-indigo-400 ring-2 ring-indigo-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                subTab === 'prioridades'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400'
              }`}
            >
              <Target className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Prioridades de Compra</span>
          </button>

          <button
            type="button"
            onClick={() => setSubTab('perfis')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              subTab === 'perfis'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md border-indigo-700 dark:border-indigo-400 ring-2 ring-indigo-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                subTab === 'perfis'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400'
              }`}
            >
              <Users className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Perfis de Consumo</span>
          </button>

        </div>
      </div>

      {/* CONTEÚDO DO SUBTEMA */}
      {subTab === 'prioridades' ? (
        <div className="w-full flex flex-col gap-5 sm:gap-6 animate-in fade-in duration-300">
          
          {/* 1. CABEÇALHO DO SUBTEMA */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Prioridades de Compra
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed max-w-4xl">
              O consumidor brasileiro entra em 2026 mais cuidadoso e seletivo, com preço ainda relevante, mas avaliando também qualidade, durabilidade, conveniência e confiança para decidir se uma compra realmente vale a pena.
            </p>
          </div>

          {/* 2. SÍNTESE ESTRATÉGICA */}
          <section className="bg-white dark:bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <div className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Síntese Estratégica
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Pressionado por restrições orçamentárias, o consumidor brasileiro tende a adotar uma postura mais analítica e seletiva. Essa cautela aumenta o planejamento prévio e a busca por preços menores, mas não significa escolher automaticamente a alternativa mais barata. A decisão passa a considerar também o valor entregue, com maior atenção à qualidade, à durabilidade e à confiabilidade do produto. Nesse contexto, o consumidor procura equilibrar economia imediata com a expectativa de uma compra que faça sentido e entregue benefícios ao longo do uso.
            </p>
          </section>

          {/* 3. FAIXA COM 4 INDICADORES DE COMPORTAMENTO (NIELSENIQ FULL VIEW 2026) */}
          <section className="bg-white dark:bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 px-4 py-3 sm:px-5 sm:py-3.5 shadow-xs flex flex-col gap-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800 gap-2.5 sm:gap-0">
              
              {/* INDICADOR 1: PLANEJAMENTO (AZUL) */}
              <div className="flex flex-col gap-1 sm:px-3.5 first:sm:pl-0 pt-0.5 sm:pt-0">
                <div className="flex items-center gap-1.5">
                  <CalendarCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-[10px] font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400">
                    Planejamento
                  </span>
                </div>
                <div className="text-2xl sm:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-none my-0.5">
                  80%
                </div>
                <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                  Planejam previamente suas compras
                </p>
              </div>

              {/* INDICADOR 2: BUSCA POR ECONOMIA (ÍNDIGO) */}
              <div className="flex flex-col gap-1 sm:px-3.5 pt-2.5 sm:pt-0">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-700 dark:text-indigo-400">
                    Busca por economia
                  </span>
                </div>
                <div className="text-2xl sm:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-none my-0.5">
                  66%
                </div>
                <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                  Buscam opções de menor preço
                </p>
              </div>

              {/* INDICADOR 3: PREÇO × MARCA (ÂMBAR) */}
              <div className="flex flex-col gap-1 sm:px-3.5 pt-2.5 sm:pt-0">
                <div className="flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="text-[10px] font-bold tracking-wider uppercase text-amber-700 dark:text-amber-400">
                    Preço × marca
                  </span>
                </div>
                <div className="text-2xl sm:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-none my-0.5">
                  45%
                </div>
                <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                  Escolhem o mais barato, independentemente da marca
                </p>
              </div>

              {/* INDICADOR 4: CONTROLE DO ORÇAMENTO (TEAL) */}
              <div className="flex flex-col gap-1 sm:px-3.5 last:sm:pr-0 pt-2.5 sm:pt-0">
                <div className="flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span className="text-[10px] font-bold tracking-wider uppercase text-teal-700 dark:text-teal-400">
                    Controle do orçamento
                  </span>
                </div>
                <div className="text-2xl sm:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-none my-0.5">
                  40%
                </div>
                <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                  Monitoram o custo total da cesta
                </p>
              </div>

            </div>

            {/* Rodapé da fonte consolidado */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-normal leading-normal">
                Fonte: NielsenIQ, Full View 2026
              </p>
            </div>
          </section>

          {/* 4. PRINCIPAIS SINAIS DO CONSUMIDOR (6 SINAIS EM GRADE 2x3 COM HIERARQUIA EM 2 NÍVEIS) */}
          <section className="bg-white dark:bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs flex flex-col gap-3.5">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Principais sinais do consumidor
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
              {/* SINAL 01 - GRUPO 1: DECISÃO FINANCEIRA */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-l-[3px] border-l-blue-500 dark:border-l-blue-400 bg-blue-50/20 dark:bg-blue-950/15 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-blue-300/60 dark:hover:border-blue-800/60">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/70 dark:border-blue-900/50 shrink-0">
                    01
                  </span>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                    O consumidor planeja mais antes de comprar
                  </h4>
                </div>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Com o orçamento mais pressionado, a decisão tende a começar antes do ponto de venda, com maior definição de prioridades, comparação de alternativas e controle do que cabe no orçamento. Esse comportamento reduz o espaço para compras por impulso e torna a escolha mais deliberada.
                </p>
              </div>

              {/* SINAL 02 - GRUPO 1: DECISÃO FINANCEIRA */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-l-[3px] border-l-blue-500 dark:border-l-blue-400 bg-blue-50/20 dark:bg-blue-950/15 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-blue-300/60 dark:hover:border-blue-800/60">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/70 dark:border-blue-900/50 shrink-0">
                    02
                  </span>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                    O menor preço não vence sozinho
                  </h4>
                </div>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mesmo com maior busca por economia, o consumidor tende a diferenciar a alternativa simplesmente mais barata daquela que entrega melhor relação entre preço e benefício. Qualidade, desempenho e outros atributos podem justificar pagar um pouco mais quando o valor adicional é percebido com clareza.
                </p>
              </div>

              {/* SINAL 03 - GRUPO 2: REDUÇÃO DE RISCO */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-l-[3px] border-l-emerald-500 dark:border-l-emerald-400 bg-emerald-50/20 dark:bg-emerald-950/15 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-emerald-300/60 dark:hover:border-emerald-800/60">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-900/50 shrink-0">
                    03
                  </span>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                    Durabilidade aumenta o valor percebido
                  </h4>
                </div>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Qualidade comprovada e maior vida útil podem tornar uma compra mais racional mesmo quando o preço inicial é superior. Quando o consumidor percebe que o produto permanecerá útil por mais tempo e reduzirá a necessidade de substituição precoce, a durabilidade passa a compor o valor da escolha.
                </p>
              </div>

              {/* SINAL 04 - GRUPO 2: REDUÇÃO DE RISCO */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-l-[3px] border-l-emerald-500 dark:border-l-emerald-400 bg-emerald-50/20 dark:bg-emerald-950/15 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-emerald-300/60 dark:hover:border-emerald-800/60">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-900/50 shrink-0">
                    04
                  </span>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                    Confiança reduz a incerteza na escolha
                  </h4>
                </div>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Quanto maior a facilidade de comparar alternativas, maior a importância de conseguir verificar aquilo que a marca promete. Informações claras, certificações, origem, avaliações e reputação ajudam o consumidor a reduzir incertezas e diferenciar atributos comprováveis de promessas genéricas.
                </p>
              </div>

              {/* SINAL 05 - GRUPO 3: VÍNCULO E EXPERIÊNCIA */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-l-[3px] border-l-amber-500 dark:border-l-amber-400 bg-amber-50/20 dark:bg-amber-950/15 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-amber-300/60 dark:hover:border-amber-800/60">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200/70 dark:border-amber-900/50 shrink-0">
                    05
                  </span>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                    Fidelidade à marca ficou mais condicional
                  </h4>
                </div>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  O reconhecimento de uma marca continua relevante, mas tende a ser menos suficiente para garantir a próxima compra. O consumidor demonstra maior abertura para alternativas quando encontra uma proposta superior em preço, qualidade, experiência ou propósito, fazendo com que a preferência precise ser reforçada a cada nova decisão.
                </p>
              </div>

              {/* SINAL 06 - GRUPO 3: VÍNCULO E EXPERIÊNCIA */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-l-[3px] border-l-amber-500 dark:border-l-amber-400 bg-amber-50/20 dark:bg-amber-950/15 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-amber-300/60 dark:hover:border-amber-800/60">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200/70 dark:border-amber-900/50 shrink-0">
                    06
                  </span>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                    Conveniência e adequação também ampliam o valor
                  </h4>
                </div>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  A percepção de valor não termina no preço e no desempenho do produto. Conveniência, facilidade, experiência de uso e maior adequação às necessidades individuais podem tornar uma solução mais relevante quando ajudam a simplificar a rotina ou atendem melhor à necessidade do consumidor.
                </p>
              </div>
            </div>

            {/* Rodapé de fontes consolidado */}
            <div className="mt-1 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
              <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-normal leading-normal">
                Fontes: NielsenIQ, Full View 2026 • Sebrae, Prioridades de Compras 2026 • Deloitte, Perspectivas 2026 • Sebrae/RJ, Guia de Tendências 2026
              </p>
            </div>
          </section>

          {/* 5. O QUE PESA NA ESCOLHA (6 FATORES DE DECISÃO EM GRADE 3x2) */}
          <section className="bg-white dark:bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs flex flex-col gap-3.5">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                O que pesa na escolha
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                A escolha combina restrição orçamentária, valor funcional, redução de risco e adequação às necessidades do consumidor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
              {/* CARD 1 - ECONÔMICO (AZUL) */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-t-2 border-t-blue-500/90 dark:border-t-blue-400/90 bg-white dark:bg-slate-800/40 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-blue-300/50 dark:hover:border-blue-800/50">
                <div className="flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-[10.5px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-900/50">
                    Econômico
                  </span>
                </div>
                <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Preço e custo-benefício
                </h4>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  O preço continua central, mas a escolha tende a considerar mais do que o menor valor disponível. Diante de um orçamento mais controlado, o consumidor compara alternativas e avalia se a diferença de preço é compensada por qualidade, desempenho e benefícios que façam o gasto valer a pena.
                </p>
              </div>

              {/* CARD 2 - FUNCIONAL (ÍNDIGO) */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-t-2 border-t-indigo-500/90 dark:border-t-indigo-400/90 bg-white dark:bg-slate-800/40 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-indigo-300/50 dark:hover:border-indigo-800/50">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="text-[10.5px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-900/50">
                    Funcional
                  </span>
                </div>
                <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Qualidade e durabilidade
                </h4>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Qualidade comprovada e maior vida útil podem ampliar o valor percebido de um produto, inclusive quando o preço inicial é superior. Em um contexto de maior racionalidade financeira, durar mais reduz a necessidade de substituição precoce e ajuda a justificar o desembolso ao longo do uso.
                </p>
              </div>

              {/* CARD 3 - PRÁTICO (TEAL) */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-t-2 border-t-teal-500/90 dark:border-t-teal-400/90 bg-white dark:bg-slate-800/40 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-teal-300/50 dark:hover:border-teal-800/50">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span className="text-[10.5px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/70 dark:border-teal-900/50">
                    Prático
                  </span>
                </div>
                <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Conveniência
                </h4>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Conveniência ganha relevância quando reduz esforço e torna a solução mais simples de compreender, escolher e utilizar. Quando diferentes alternativas oferecem benefícios semelhantes, facilidade e praticidade podem ajudar a diferenciar a experiência e ampliar a percepção de valor.
                </p>
              </div>

              {/* CARD 4 - RISCO E CONFIANÇA (VERDE / EMERALD) */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-t-2 border-t-emerald-500/90 dark:border-t-emerald-400/90 bg-white dark:bg-slate-800/40 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-emerald-300/50 dark:hover:border-emerald-800/50">
                <div className="flex items-center gap-1.5">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-[10.5px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-900/50">
                    Risco e confiança
                  </span>
                </div>
                <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Confiança e transparência
                </h4>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Quanto maior a facilidade de comparar marcas, maior a importância de verificar se aquilo que é prometido realmente é entregue. Informações claras, certificações, origem, avaliações e reputação ajudam a reduzir incertezas e tornam atributos comprováveis mais relevantes do que afirmações genéricas.
                </p>
              </div>

              {/* CARD 5 - ADEQUAÇÃO (ÂMBAR) */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-t-2 border-t-amber-500/90 dark:border-t-amber-400/90 bg-white dark:bg-slate-800/40 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-amber-300/50 dark:hover:border-amber-800/50">
                <div className="flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="text-[10.5px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-900/50">
                    Adequação
                  </span>
                </div>
                <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Personalização e aderência à necessidade
                </h4>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  A oferta tende a ganhar relevância quando o consumidor percebe que ela responde melhor às suas necessidades e preferências, em vez de funcionar como uma solução genérica. Personalização pode ampliar essa percepção de adequação, desde que represente benefício real e não apenas uma comunicação individualizada.
                </p>
              </div>

              {/* CARD 6 - VALORES E IDENTIDADE (VIOLETA) */}
              <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 border-t-2 border-t-violet-500/90 dark:border-t-violet-400/90 bg-white dark:bg-slate-800/40 p-3.5 sm:p-4 flex flex-col gap-2 transition-all duration-200 hover:shadow-xs hover:border-violet-300/50 dark:hover:border-violet-800/50">
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400 shrink-0" />
                  <span className="text-[10.5px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200/70 dark:border-violet-900/50">
                    Valores e identidade
                  </span>
                </div>
                <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Sustentabilidade e propósito
                </h4>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Sustentabilidade e propósito podem diferenciar uma oferta quando aparecem de forma concreta e verificável. Durabilidade, menor impacto, origem responsável e práticas transparentes ganham mais consistência como critérios de escolha quando vêm acompanhados de benefícios reais, evitando que o tema se limite ao discurso da marca.
                </p>
              </div>
            </div>

            {/* Rodapé de fontes consolidado */}
            <div className="mt-1 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
              <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-normal leading-normal">
                Fontes: NielsenIQ, Full View 2026 • Sebrae, Prioridades de Compras 2026 • Deloitte, Perspectivas para a Indústria do Varejo 2026 • Sebrae/RJ, Guia de Tendências que Moldarão o Consumo em 2026
              </p>
            </div>
          </section>

          {/* 6. POSSÍVEIS IMPACTOS PARA A LORENZETTI (CONTAINER ÚNICO EM 3 COLUNAS) */}
          <section className="bg-white dark:bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs flex flex-col gap-3.5">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Possíveis impactos para a Lorenzetti
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Leituras estratégicas possíveis a partir das mudanças observadas nos critérios de escolha do consumidor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 gap-3.5 md:gap-0">
              {/* COLUNA 1: PROPOSTA DE VALOR (AZUL) */}
              <div className="flex flex-col gap-2 md:pr-4 pt-1 md:pt-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-900/50 flex items-center justify-center shrink-0">
                    <Target className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white">
                    Proposta de valor mais explícita
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Com um consumidor mais comparativo, pode ganhar importância deixar claro não apenas quanto o produto custa, mas o que ele entrega ao longo do uso. Para a Lorenzetti, atributos como desempenho, durabilidade, eficiência, facilidade de uso e adequação à necessidade podem ajudar a sustentar uma percepção de valor que vá além do menor preço.
                </p>
              </div>

              {/* COLUNA 2: PORTFÓLIO E POSICIONAMENTO (ÍNDIGO) */}
              <div className="flex flex-col gap-2 md:px-4 pt-3.5 md:pt-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-900/50 flex items-center justify-center shrink-0">
                    <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white">
                    Portfólio com diferenças mais claras
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  A combinação de maior controle do orçamento com busca por qualidade pode reforçar a importância de faixas de produto com benefícios claramente distintos. Quanto mais fácil for entender o que muda entre uma opção de entrada, intermediária ou superior, maior a chance de o consumidor escolher pela relação entre preço e benefício, e não apenas pelo menor desembolso.
                </p>
              </div>

              {/* COLUNA 3: MARCA E COMPROVAÇÃO DE VALOR (TEAL) */}
              <div className="flex flex-col gap-2 md:pl-4 pt-3.5 md:pt-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-teal-50 dark:bg-teal-950/60 border border-teal-200/70 dark:border-teal-900/50 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white">
                    Confiança comprovada na escolha
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  A força histórica da marca continua sendo um ativo, mas a maior facilidade de comparação pode tornar mais importante comprová-la no momento da decisão. Informações claras, certificações, avaliações, reputação e evidências sobre o produto podem reduzir a incerteza e ajudar a transformar confiança acumulada na marca em preferência efetiva.
                </p>
              </div>
            </div>

            {/* Rodapé da seção: Identificação de leitura estratégica */}
            <div className="mt-1 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
              <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-normal leading-normal">
                Leitura estratégica elaborada a partir das evidências apresentadas nesta página.
              </p>
            </div>
          </section>

          {/* 6. EVIDÊNCIAS E FONTES */}
          <section id="evidencias" className="scroll-mt-12 relative pt-2">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4">
              <div>
                <h2 className="text-sm sm:text-[16px] font-bold text-slate-900 dark:text-white">
                  Evidências e Fontes — Prioridades de Compra
                </h2>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-500">
                Evidências factuais rastreáveis com fontes e datas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              {PRIORIDADES_EVIDENCES.map((ev) => (
                <EvidenceCard key={ev.id} evidence={ev} />
              ))}
            </div>
          </section>

        </div>
      ) : (
        <div className="w-full flex flex-col gap-5 sm:gap-6 animate-in fade-in duration-300">
          
          {/* 1. CABEÇALHO DO SUBTEMA */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Perfis de Consumo
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed max-w-4xl">
              O consumidor brasileiro não pode ser explicado por um único perfil. Condição financeira, estágio de vida, experiências geracionais e relação com tecnologia se combinam de formas diferentes e ajudam a explicar por que pessoas com renda ou idade semelhantes podem apresentar necessidades, prioridades e jornadas de compra distintas.
            </p>
          </div>

          {/* 2. SÍNTESE ESTRATÉGICA */}
          <section className="bg-white dark:bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <div className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Síntese Estratégica
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              O comportamento de consumo resulta da combinação de múltiplas dimensões, e não apenas de renda, idade ou geração. Estabilidade financeira e momento de vida alteram necessidades, capacidade de planejamento e sensibilidade a risco; experiências geracionais ajudam a formar referências e expectativas; e a relação com tecnologia, confiança, autonomia, bem-estar e inovação diferencia consumidores aparentemente semelhantes. Nesse contexto, perfis rígidos tendem a explicar menos do que análises que combinam condição econômica, estágio de vida, experiências, valores e atitudes.
            </p>
          </section>

          {/* FAIXA SERASA EXPERIAN / MOSAIC INSIGHTS 2026 */}
          <div className="bg-slate-50/75 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 rounded-xl p-3 sm:py-2.5 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-slate-900 dark:text-slate-100">
            <div className="flex items-start gap-2.5 min-w-0 flex-1">
              <div className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <BarChart3 className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  SERASA EXPERIAN · MOSAIC INSIGHTS 2026
                </span>
                <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Estabilidade financeira e momento de vida ajudam a diferenciar consumidores com renda semelhante.
                </h4>
                <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Renda, isoladamente, não explica o comportamento de consumo. Diferentes níveis de estabilidade e previsibilidade financeira, combinados ao momento de vida, podem alterar planejamento, sensibilidade a preço e tolerância a risco.
                </p>
                <p className="text-[11px] sm:text-[11.5px] text-slate-500 dark:text-slate-400 italic">
                  <span className="font-semibold not-italic text-slate-600 dark:text-slate-300">Leitura:</span> Consumidores aparentemente semelhantes podem apresentar prioridades e comportamentos distintos.
                </p>
              </div>
            </div>
          </div>

          {/* 3. PERFIS EMERGENTES DE CONSUMO — 2026+ */}
          <section className="bg-white dark:bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-3.5 sm:p-4 shadow-xs flex flex-col gap-2.5">
            {/* CABEÇALHO */}
            <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-900/50 leading-none">
                  Tendências Comportamentais
                </span>
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono leading-none">
                  Prospectivo • 2026+
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight mt-0.5">
                Perfis Emergentes de Consumo — 2026+
              </h3>
              <p className="text-[13px] sm:text-sm text-slate-600 dark:text-slate-300 max-w-4xl leading-[1.4]">
                Além de características demográficas, atitudes diante de confiança, autonomia, bem-estar e inovação ajudam a diferenciar comportamentos de consumo.
              </p>
              <p className="text-[11.5px] sm:text-xs text-slate-500 dark:text-slate-400 italic mt-0.5 leading-[1.38]">
                Nota metodológica: Os perfis representam tendências comportamentais e não classificações rígidas. Um mesmo consumidor pode apresentar características de diferentes perfis conforme seus valores, contexto e momento de vida.
              </p>
            </div>

            {/* TABELA / MATRIZ EXECUTIVA (DESKTOP E TABLET GRANDE) */}
            <div className="hidden lg:block overflow-hidden rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="bg-slate-50/90 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80 text-[10.5px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      <th className="py-2 px-3 w-[15%] text-center">Perfil</th>
                      <th className="py-2 px-3 w-[16%] text-center">O que define</th>
                      <th className="py-2 px-3 w-[16%] text-center">O que valoriza</th>
                      <th className="py-2 px-3 w-[18%] text-center">Como tende a consumir</th>
                      <th className="py-2 px-3 w-[17%] text-center">O que aumenta sua confiança</th>
                      <th className="py-2 px-3 w-[18%] text-center bg-slate-100/70 dark:bg-slate-800/95 border-l border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        Leitura para a Lorenzetti
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                    {PERFIS_EMERGENTES_DATA.map((item) => {
                      const Icon = item.icon;
                      return (
                        <tr 
                          key={item.id} 
                          className={`transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30 border-l-[4px] ${item.color.border}`}
                        >
                          {/* 1. PERFIL (unidade visual compacta centralizada verticalmente) */}
                          <td className="py-2.5 px-3 align-middle text-left">
                            <div className="flex flex-col items-start gap-1">
                              <div className="flex items-center gap-1.5">
                                <span className={`text-[11px] font-mono font-bold px-1.5 py-0.5 rounded border leading-none ${item.color.badge}`}>
                                  {item.num}
                                </span>
                                <div className={item.color.icon}>
                                  <Icon className="w-4 h-4" />
                                </div>
                              </div>
                              <span className="text-[13.5px] font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-tight">
                                “{item.fraseEssencia}”
                              </span>
                            </div>
                          </td>

                          {/* 2. O QUE DEFINE */}
                          <td className="py-2.5 px-3 align-middle text-left">
                            <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-300 leading-[1.4]">
                              {item.oQueDefine}
                            </p>
                          </td>

                          {/* 3. O QUE VALORIZA (Tags / chips compactos e discretos) */}
                          <td className="py-2.5 px-3 align-middle text-left">
                            <div className="flex flex-wrap gap-1 items-center">
                              {item.tagsValoriza.map((tag) => (
                                <span 
                                  key={tag}
                                  className="inline-flex items-center text-[11px] font-medium px-1.5 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/80 leading-tight"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </td>

                          {/* 4. COMO TENDE A CONSUMIR */}
                          <td className="py-2.5 px-3 align-middle text-left">
                            <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-300 leading-[1.4]">
                              {item.comoTendeAConsumir}
                            </p>
                          </td>

                          {/* 5. O QUE AUMENTA SUA CONFIANÇA */}
                          <td className="py-2.5 px-3 align-middle text-left">
                            <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-300 leading-[1.4]">
                              {item.oQueAumentaConfianca}
                            </p>
                          </td>

                          {/* 6. LEITURA PARA A LORENZETTI (box sutil e compacto centralizado verticalmente) */}
                          <td className="py-2 px-2.5 align-middle text-left bg-slate-50/40 dark:bg-slate-800/30 border-l border-slate-200/60 dark:border-slate-800">
                            <div className={`p-1.5 sm:p-2 rounded border ${item.color.subtleBg}`}>
                              <p className="text-[12px] sm:text-[12.5px] text-slate-700 dark:text-slate-200 leading-[1.35] font-normal">
                                {item.leituraLorenzetti}
                              </p>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* VISÃO RESPONSIVA VERTICAL EM CARDS (MOBILE E TABLET) */}
            <div className="lg:hidden flex flex-col gap-2.5">
              {PERFIS_EMERGENTES_DATA.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.id}
                    className={`bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 border-l-[4px] ${item.color.border} p-3 flex flex-col gap-2 shadow-xs`}
                  >
                    {/* Header Card */}
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-bold px-1.5 py-0.5 rounded border leading-none ${item.color.badge}`}>
                          {item.num}
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                            {item.name}
                          </h4>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-tight">
                            “{item.fraseEssencia}”
                          </span>
                        </div>
                      </div>
                      <div className={item.color.icon}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Seções empilhadas com labels */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          O que define
                        </span>
                        <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-[1.38]">
                          {item.oQueDefine}
                        </p>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          O que valoriza
                        </span>
                        <div className="flex flex-wrap gap-1 items-center pt-0.5">
                          {item.tagsValoriza.map((tag) => (
                            <span 
                              key={tag}
                              className="inline-flex items-center text-[10.5px] font-medium px-1.5 py-0.5 rounded bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/80 leading-tight"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Como tende a consumir
                        </span>
                        <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-[1.38]">
                          {item.comoTendeAConsumir}
                        </p>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          O que aumenta sua confiança
                        </span>
                        <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-[1.38]">
                          {item.oQueAumentaConfianca}
                        </p>
                      </div>
                    </div>

                    {/* Leitura para a Lorenzetti */}
                    <div className={`mt-0.5 p-2 rounded border ${item.color.subtleBg}`}>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1 mb-0.5">
                        <span>◇</span> LEITURA PARA A LORENZETTI
                      </span>
                      <p className="text-[12px] text-slate-700 dark:text-slate-200 leading-[1.35]">
                        {item.leituraLorenzetti}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAIXA DE SÍNTESE (LEITURA CENTRAL) — RODAPÉ ANALÍTICO COMPACTO */}
            <div className="relative bg-white dark:bg-slate-900/80 rounded-lg border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-row items-center py-2 px-3 sm:px-3.5 gap-2.5">
              <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0">
                <BarChart3 className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-none">
                  LEITURA CENTRAL
                </span>
                <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-900 dark:text-white leading-[1.38]">
                  O consumidor de 2026+ tende a ser menos facilmente explicado apenas por idade ou renda. Atitudes diante de confiança, autonomia, bem-estar e inovação ajudam a diferenciar comportamentos entre consumidores aparentemente semelhantes.
                </p>
              </div>
            </div>

            {/* RODAPÉ DE FONTE CONSOLIDADO */}
            <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
              <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-normal leading-normal">
                Fonte: Sebrae/RJ, Tendências de Comportamento e Consumo 2026 (base WGSN) • Estudo prospectivo sobre atitudes e expectativas de consumo
              </p>
            </div>
          </section>

          {/* LEITURA GERACIONAL DO CONSUMO */}
          <section className="flex flex-col gap-5 sm:gap-6">
            
            {/* BLOCO 1: GERAÇÕES PRINCIPAIS */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="flex flex-col gap-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                  Leitura Geracional do Consumo
                </h3>
                <p className="text-[13px] sm:text-sm text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
                  Experiências econômicas, sociais e tecnológicas compartilhadas ajudam a formar diferentes referências, expectativas e comportamentos de consumo ao longo das gerações.
                </p>
              </div>

              {/* BARRA DE NAVEGAÇÃO DAS GERAÇÕES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3">
                {GERACOES_DATA.map((gen) => {
                  const isSelected = selectedGeneration === gen.id;
                  const Icon = gen.icon;
                  return (
                    <button
                      key={gen.id}
                      onClick={() => handleSelectGeneration(gen.id)}
                      className={`relative flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden text-left ${
                        isSelected 
                          ? gen.theme.btnActive 
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm hover:-translate-y-0.5'
                      }`}
                    >
                      {!isSelected && (
                        <div className={`absolute top-0 left-0 w-full h-[3px] ${gen.theme.topBar} opacity-70`} />
                      )}
                      
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isSelected ? 'bg-white/20 border-white/20' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'
                      }`}>
                        <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1 flex-wrap">
                          <span className={`font-bold text-[13px] sm:text-[14px] leading-tight ${isSelected ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                            {gen.name}
                          </span>
                        </div>
                        <span className={`text-[11px] sm:text-[11px] font-medium mt-0.5 ${isSelected ? 'text-white/80' : 'text-slate-500 dark:text-slate-500'}`}>
                          {gen.period}
                        </span>
                      </div>

                      {gen.isForming && !isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-2 right-2 shadow-sm" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* PAINEL DA GERAÇÃO */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden flex flex-col animate-in fade-in duration-300">
                <div className={`h-1.5 w-full ${currentGen.theme.topBar}`} />
                <div className="flex flex-col">
                  
                  {/* ZONA 1: IDENTIDADE E CONTEXTO */}
                  <div className="px-5 lg:px-6 pt-4 pb-3.5 bg-white dark:bg-slate-900 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 shadow-xs ${currentGen.theme.headerIconBox}`}>
                          <CurrentGenIcon className={`w-4 h-4 ${currentGen.theme.headerIcon}`} />
                        </div>
                        <h3 className="text-[20px] sm:text-[22px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">
                          {currentGen.name}
                        </h3>
                        <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400">
                          · {currentGen.period}
                        </span>
                        {currentGen.isForming && (
                          <span className="text-[11.5px] font-medium px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                            Perfil em formação
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-[14px] text-slate-600 dark:text-slate-300 font-normal">
                      {currentGen.assinaturaCurta}
                    </p>

                    {/* Bloco Contextual: O que moldou essa geração */}
                    <div className={`mt-0.5 rounded-r-md border-l-[3px] ${currentAccent.borderAccent} bg-slate-50/90 dark:bg-slate-800/40 px-3.5 py-2 flex flex-col gap-1`}>
                      <div className="flex items-center gap-1.5">
                        <History className={`w-3.5 h-3.5 ${currentAccent.textAccent}`} />
                        <span className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
                          O que moldou essa geração
                        </span>
                      </div>
                      <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                        {currentGen.oQueMoldou}
                      </p>
                    </div>
                  </div>

                  {/* ZONA 2: RESUMO EXECUTIVO (Faixa visual distinta) */}
                  <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/50 px-5 lg:px-6 py-2.5 sm:py-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
                      <div className="flex flex-col gap-1 md:pr-4 pt-2 md:pt-0 first:pt-0">
                        <div className="flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                          <span className="text-[12.5px] font-semibold text-slate-700 dark:text-slate-300">Valoriza</span>
                        </div>
                        <span className="text-[13.5px] sm:text-[14px] text-slate-900 dark:text-slate-100 font-medium leading-snug">
                          {currentGen.leituraRapida.valoriza}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 md:px-4 pt-2 md:pt-0">
                        <div className="flex items-center gap-1.5">
                          <Scale className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                          <span className="text-[12.5px] font-semibold text-slate-700 dark:text-slate-300">Como consome</span>
                        </div>
                        <span className="text-[13.5px] sm:text-[14px] text-slate-900 dark:text-slate-100 font-medium leading-snug">
                          {currentGen.leituraRapida.comoTendeAConsumir}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 md:pl-4 pt-2 md:pt-0">
                        <div className="flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                          <span className="text-[12.5px] font-semibold text-slate-700 dark:text-slate-300">Canais e tecnologia</span>
                        </div>
                        <span className="text-[13.5px] sm:text-[14px] text-slate-900 dark:text-slate-100 font-medium leading-snug">
                          {currentGen.leituraRapida.relacaoTecnologia}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ZONA 3: PARES DE CARDS (O que observamos → Como atuar) */}
                  <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30 px-5 lg:px-6 py-3.5 sm:py-4 flex flex-col gap-3">
                    
                    {/* Cabeçalho Orientador dos Pares */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 px-0.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500" />
                          <span className="text-[12.5px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                            O que observamos
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          Diagnóstico comportamental
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${currentAccent.dot}`} />
                          <span className={`text-[12.5px] font-bold ${currentAccent.textAccent} uppercase tracking-wider`}>
                            Como atuar
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          Tradução prática
                        </span>
                      </div>
                    </div>

                    {/* PAR 01: Prioridades e Comportamento -> Produto e Proposta */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
                      {/* Card Esquerdo: Diagnóstico */}
                      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[10.5px] font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200/60 dark:border-slate-700/60">
                                01
                              </span>
                              <h5 className="text-[13.5px] font-semibold text-slate-900 dark:text-white">
                                Prioridades e comportamento
                              </h5>
                            </div>
                            <span className="text-[10.5px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                              Diagnóstico
                            </span>
                          </div>
                          <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                            {currentGen.perfilEConsumo.prioridadesComportamento}
                          </p>
                        </div>
                      </div>

                      {/* Card Direito: Atuação */}
                      <div className={`rounded-lg border border-slate-200 dark:border-slate-800 ${currentAccent.bgSubtleRight} p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs`}>
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Package className={`w-3.5 h-3.5 ${currentAccent.textAccent}`} />
                              <h5 className="text-[13.5px] font-semibold text-slate-900 dark:text-white">
                                Produto e proposta
                              </h5>
                            </div>
                            <span className={`text-[10.5px] font-semibold ${currentAccent.textAccent} uppercase tracking-wider`}>
                              Ação recomendada
                            </span>
                          </div>
                          <ul className="flex flex-col gap-1.5 pt-0.5">
                            {currentGen.comoAtuar.produtoEProposta.map((p, idx) => (
                              <li key={idx} className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                                <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${currentAccent.dot}`} />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* PAR 02: Marcas, Canais e Experiência -> Comunicação e Relacionamento */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
                      {/* Card Esquerdo: Diagnóstico */}
                      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[10.5px] font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200/60 dark:border-slate-700/60">
                                02
                              </span>
                              <h5 className="text-[13.5px] font-semibold text-slate-900 dark:text-white">
                                Marcas, canais e experiência
                              </h5>
                            </div>
                            <span className="text-[10.5px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                              Diagnóstico
                            </span>
                          </div>
                          <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                            {currentGen.perfilEConsumo.marcasCanaisExperiencia}
                          </p>
                        </div>
                      </div>

                      {/* Card Direito: Atuação */}
                      <div className={`rounded-lg border border-slate-200 dark:border-slate-800 ${currentAccent.bgSubtleRight} p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs`}>
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Megaphone className={`w-3.5 h-3.5 ${currentAccent.textAccent}`} />
                              <h5 className="text-[13.5px] font-semibold text-slate-900 dark:text-white">
                                Comunicação e relacionamento
                              </h5>
                            </div>
                            <span className={`text-[10.5px] font-semibold ${currentAccent.textAccent} uppercase tracking-wider`}>
                              Ação recomendada
                            </span>
                          </div>
                          <ul className="flex flex-col gap-1.5 pt-0.5">
                            {currentGen.comoAtuar.comunicacao.map((c, idx) => (
                              <li key={idx} className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                                <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${currentAccent.dot}`} />
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* PAR 03: Sustentabilidade e Valores -> Canais e Experiência */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
                      {/* Card Esquerdo: Diagnóstico */}
                      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[10.5px] font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200/60 dark:border-slate-700/60">
                                03
                              </span>
                              <h5 className="text-[13.5px] font-semibold text-slate-900 dark:text-white">
                                Sustentabilidade e valores
                              </h5>
                            </div>
                            <span className="text-[10.5px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                              Diagnóstico
                            </span>
                          </div>
                          <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                            {currentGen.perfilEConsumo.sustentabilidadeValores}
                          </p>
                        </div>
                      </div>

                      {/* Card Direito: Atuação */}
                      <div className={`rounded-lg border border-slate-200 dark:border-slate-800 ${currentAccent.bgSubtleRight} p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs`}>
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Layers className={`w-3.5 h-3.5 ${currentAccent.textAccent}`} />
                              <h5 className="text-[13.5px] font-semibold text-slate-900 dark:text-white">
                                Canais e experiência
                              </h5>
                            </div>
                            <span className={`text-[10.5px] font-semibold ${currentAccent.textAccent} uppercase tracking-wider`}>
                              Ação recomendada
                            </span>
                          </div>
                          <ul className="flex flex-col gap-1.5 pt-0.5">
                            {currentGen.comoAtuar.canaisEExperiencia.map((e, idx) => (
                              <li key={idx} className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                                <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${currentAccent.dot}`} />
                                <span>{e}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* ZONA 4: TENDÊNCIAS E PALAVRAS-CHAVE (Fechamento) */}
                  <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-100/75 dark:bg-slate-800/60 px-5 lg:px-6 py-2.5 sm:py-3 flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                        Tendências
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentGen.tendencias.map((item, idx) => (
                          <span key={idx} className="text-[11.5px] font-medium px-2.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-2xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="hidden md:block w-px h-4 bg-slate-300 dark:bg-slate-600 shrink-0" />
                    
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                        Palavras-chave
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {currentGen.palavrasChave.map((tag, idx) => (
                          <span key={idx} className="text-[12.5px] text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1.5">
                            {tag}
                            {idx < currentGen.palavrasChave.length - 1 && (
                              <span className="text-slate-300 dark:text-slate-600 font-bold">•</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* SEPARADOR */}
            <div className="w-full h-px bg-slate-200/60 dark:bg-slate-800/80" />

            {/* BLOCO 2: MICROGERAÇÕES E TRANSIÇÕES DE CONSUMO */}
            <div className="flex flex-col gap-4 sm:gap-5">
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

          </section>

          {/* 6. TENSÕES QUE ATRAVESSAM OS PERFIS DE CONSUMO */}
          <section className="bg-slate-50/80 dark:bg-slate-900/60 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-800 p-3.5 sm:p-5 shadow-xs flex flex-col gap-3.5 sm:gap-4">
            <div className="border-b border-slate-200/70 dark:border-slate-800/80 pb-2.5">
              <div className="flex flex-col gap-1">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Tensões que atravessam os perfis de consumo
                </h3>
                <p className="text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                  Comportamentos de consumo não evoluem em uma única direção. Diferentes expectativas coexistem e ajudam a explicar escolhas aparentemente contraditórias.
                </p>
              </div>
            </div>

            {/* MATRIZ VERTICAL: 5 FAIXAS HORIZONTAIS */}
            <div className="flex flex-col gap-2">
              
              {/* LINHA 01 - AZUL (RACIONALIDADE ↔ EXPERIÊNCIA) */}
              <div className="relative bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 border-l-[5px] border-l-blue-500 dark:border-l-blue-400 shadow-xs hover:shadow-sm transition-all flex flex-col lg:flex-row items-stretch overflow-hidden">
                {/* ÁREA 1: Identificação */}
                <div className="flex lg:flex-col items-center justify-start lg:justify-center gap-1.5 p-2 lg:py-2.5 lg:px-2 lg:w-[60px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-800/10">
                  <span className="text-blue-700 dark:text-blue-300 font-mono font-bold text-[12px] sm:text-[12.5px] bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-200/50 dark:border-blue-900/50 leading-none">01</span>
                  <div className="text-blue-600 dark:text-blue-400">
                    <Scale className="w-4 h-4 sm:w-[16px] sm:h-[16px]" />
                  </div>
                </div>

                {/* CONTEÚDO PRINCIPAL */}
                <div className="flex flex-col lg:flex-row flex-1 p-2.5 lg:py-2 lg:px-3 gap-2.5 lg:gap-4 lg:items-center">
                  {/* ÁREA 2: Dualidade com Frase-Síntese */}
                  <div className="w-full lg:w-[31%] xl:w-[33%] flex flex-col justify-center gap-1 shrink-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">RACIONALIDADE</span>
                      <div className="text-slate-300 dark:text-slate-600 shrink-0">
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">EXPERIÊNCIA</span>
                    </div>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-snug">
                      Planejar e controlar o gasto sem abrir mão de experiências que gerem valor.
                    </p>
                  </div>

                  {/* Divisor vertical (Desktop) */}
                  <div className="hidden lg:block w-px h-7 bg-slate-200 dark:bg-slate-800 shrink-0" />

                  <div className="flex flex-col md:flex-row lg:flex-1 gap-2.5 lg:gap-4 items-stretch lg:items-center">
                    {/* ÁREA 3: Explicação */}
                    <div className="w-full md:flex-1 lg:w-auto flex flex-col justify-center gap-0.5">
                      <span className="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">
                        O QUE ISSO SIGNIFICA
                      </span>
                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-snug">
                        O consumidor tende a planejar e comparar mais suas compras, mas continua buscando experiências, conforto e benefícios que deem sentido ao gasto.
                      </p>
                    </div>

                    {/* ÁREA 4: Leitura Estratégica */}
                    <div className="w-full md:w-[45%] lg:w-[260px] xl:w-[300px] rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/30 p-2 lg:px-2.5 lg:py-1.5 flex flex-col justify-center gap-0.5 shrink-0">
                      <span className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1 leading-none">
                        <span className="text-[8px]">◇</span> LEITURA ESTRATÉGICA
                      </span>
                      <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-tight">
                        O valor percebido combina preço, qualidade, funcionalidade e experiência.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LINHA 02 - VIOLETA (PERSONALIZAÇÃO ↔ PRIVACIDADE) */}
              <div className="relative bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 border-l-[5px] border-l-violet-500 dark:border-l-violet-400 shadow-xs hover:shadow-sm transition-all flex flex-col lg:flex-row items-stretch overflow-hidden">
                {/* ÁREA 1: Identificação */}
                <div className="flex lg:flex-col items-center justify-start lg:justify-center gap-1.5 p-2 lg:py-2.5 lg:px-2 lg:w-[60px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-800/10">
                  <span className="text-violet-700 dark:text-violet-300 font-mono font-bold text-[12px] sm:text-[12.5px] bg-violet-50 dark:bg-violet-950/60 px-1.5 py-0.5 rounded border border-violet-200/50 dark:border-violet-900/50 leading-none">02</span>
                  <div className="text-violet-600 dark:text-violet-400">
                    <Shield className="w-4 h-4 sm:w-[16px] sm:h-[16px]" />
                  </div>
                </div>

                {/* CONTEÚDO PRINCIPAL */}
                <div className="flex flex-col lg:flex-row flex-1 p-2.5 lg:py-2 lg:px-3 gap-2.5 lg:gap-4 lg:items-center">
                  {/* ÁREA 2: Dualidade com Frase-Síntese */}
                  <div className="w-full lg:w-[31%] xl:w-[33%] flex flex-col justify-center gap-1 shrink-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">PERSONALIZAÇÃO</span>
                      <div className="text-slate-300 dark:text-slate-600 shrink-0">
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">PRIVACIDADE</span>
                    </div>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-snug">
                      Receber soluções personalizadas sem perder segurança e transparência no uso dos dados.
                    </p>
                  </div>

                  {/* Divisor vertical (Desktop) */}
                  <div className="hidden lg:block w-px h-7 bg-slate-200 dark:bg-slate-800 shrink-0" />

                  <div className="flex flex-col md:flex-row lg:flex-1 gap-2.5 lg:gap-4 items-stretch lg:items-center">
                    {/* ÁREA 3: Explicação */}
                    <div className="w-full md:flex-1 lg:w-auto flex flex-col justify-center gap-0.5">
                      <span className="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">
                        O QUE ISSO SIGNIFICA
                      </span>
                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-snug">
                        O consumidor quer ser reconhecido e receber soluções que atendam às suas necessidades, mas também espera transparência e segurança no uso de seus dados.
                      </p>
                    </div>

                    {/* ÁREA 4: Leitura Estratégica */}
                    <div className="w-full md:w-[45%] lg:w-[260px] xl:w-[300px] rounded-lg bg-violet-50/60 dark:bg-violet-950/20 border border-violet-100/50 dark:border-violet-900/30 p-2 lg:px-2.5 lg:py-1.5 flex flex-col justify-center gap-0.5 shrink-0">
                      <span className="text-[10px] font-bold text-violet-700 dark:text-violet-400 uppercase tracking-wider flex items-center gap-1 leading-none">
                        <span className="text-[8px]">◇</span> LEITURA ESTRATÉGICA
                      </span>
                      <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-tight">
                        Personalização precisa caminhar junto com privacidade, segurança e transparência.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LINHA 03 - VERDE/TEAL (AUTOMAÇÃO ↔ CONTATO HUMANO) */}
              <div className="relative bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 border-l-[5px] border-l-teal-500 dark:border-l-teal-400 shadow-xs hover:shadow-sm transition-all flex flex-col lg:flex-row items-stretch overflow-hidden">
                {/* ÁREA 1: Identificação */}
                <div className="flex lg:flex-col items-center justify-start lg:justify-center gap-1.5 p-2 lg:py-2.5 lg:px-2 lg:w-[60px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-800/10">
                  <span className="text-teal-700 dark:text-teal-300 font-mono font-bold text-[12px] sm:text-[12.5px] bg-teal-50 dark:bg-teal-950/60 px-1.5 py-0.5 rounded border border-teal-200/50 dark:border-teal-900/50 leading-none">03</span>
                  <div className="text-teal-600 dark:text-teal-400">
                    <Users className="w-4 h-4 sm:w-[16px] sm:h-[16px]" />
                  </div>
                </div>

                {/* CONTEÚDO PRINCIPAL */}
                <div className="flex flex-col lg:flex-row flex-1 p-2.5 lg:py-2 lg:px-3 gap-2.5 lg:gap-4 lg:items-center">
                  {/* ÁREA 2: Dualidade com Frase-Síntese */}
                  <div className="w-full lg:w-[31%] xl:w-[33%] flex flex-col justify-center gap-1 shrink-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">AUTOMAÇÃO</span>
                      <div className="text-slate-300 dark:text-slate-600 shrink-0">
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">CONTATO HUMANO</span>
                    </div>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-snug">
                      Ganhar agilidade e conveniência sem eliminar o valor do contato humano.
                    </p>
                  </div>

                  {/* Divisor vertical (Desktop) */}
                  <div className="hidden lg:block w-px h-7 bg-slate-200 dark:bg-slate-800 shrink-0" />

                  <div className="flex flex-col md:flex-row lg:flex-1 gap-2.5 lg:gap-4 items-stretch lg:items-center">
                    {/* ÁREA 3: Explicação */}
                    <div className="w-full md:flex-1 lg:w-auto flex flex-col justify-center gap-0.5">
                      <span className="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">
                        O QUE ISSO SIGNIFICA
                      </span>
                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-snug">
                        Automação e tecnologia podem tornar a experiência mais rápida e conveniente, sem eliminar a importância do contato humano.
                      </p>
                    </div>

                    {/* ÁREA 4: Leitura Estratégica */}
                    <div className="w-full md:w-[45%] lg:w-[260px] xl:w-[300px] rounded-lg bg-teal-50/60 dark:bg-teal-950/20 border border-teal-100/50 dark:border-teal-900/30 p-2 lg:px-2.5 lg:py-1.5 flex flex-col justify-center gap-0.5 shrink-0">
                      <span className="text-[10px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider flex items-center gap-1 leading-none">
                        <span className="text-[8px]">◇</span> LEITURA ESTRATÉGICA
                      </span>
                      <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-tight">
                        Automatizar o simples e preservar o contato humano onde ele gera valor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LINHA 04 - ÂMBAR (PROPÓSITO ↔ COMPROVAÇÃO) */}
              <div className="relative bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 border-l-[5px] border-l-amber-500 dark:border-l-amber-400 shadow-xs hover:shadow-sm transition-all flex flex-col lg:flex-row items-stretch overflow-hidden">
                {/* ÁREA 1: Identificação */}
                <div className="flex lg:flex-col items-center justify-start lg:justify-center gap-1.5 p-2 lg:py-2.5 lg:px-2 lg:w-[60px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-800/10">
                  <span className="text-amber-700 dark:text-amber-300 font-mono font-bold text-[12px] sm:text-[12.5px] bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-200/50 dark:border-amber-900/50 leading-none">04</span>
                  <div className="text-amber-600 dark:text-amber-400">
                    <CheckCircle2 className="w-4 h-4 sm:w-[16px] sm:h-[16px]" />
                  </div>
                </div>

                {/* CONTEÚDO PRINCIPAL */}
                <div className="flex flex-col lg:flex-row flex-1 p-2.5 lg:py-2 lg:px-3 gap-2.5 lg:gap-4 lg:items-center">
                  {/* ÁREA 2: Dualidade com Frase-Síntese */}
                  <div className="w-full lg:w-[31%] xl:w-[33%] flex flex-col justify-center gap-1 shrink-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">PROPÓSITO</span>
                      <div className="text-slate-300 dark:text-slate-600 shrink-0">
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">COMPROVAÇÃO</span>
                    </div>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-snug">
                      Valorizar marcas com propósito, mas exigir provas concretas do que elas afirmam.
                    </p>
                  </div>

                  {/* Divisor vertical (Desktop) */}
                  <div className="hidden lg:block w-px h-7 bg-slate-200 dark:bg-slate-800 shrink-0" />

                  <div className="flex flex-col md:flex-row lg:flex-1 gap-2.5 lg:gap-4 items-stretch lg:items-center">
                    {/* ÁREA 3: Explicação */}
                    <div className="w-full md:flex-1 lg:w-auto flex flex-col justify-center gap-0.5">
                      <span className="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">
                        O QUE ISSO SIGNIFICA
                      </span>
                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-snug">
                        Valores, sustentabilidade e responsabilidade influenciam escolhas, mas discursos genéricos perdem força diante da busca por evidências concretas.
                      </p>
                    </div>

                    {/* ÁREA 4: Leitura Estratégica */}
                    <div className="w-full md:w-[45%] lg:w-[260px] xl:w-[300px] rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-100/50 dark:border-amber-900/30 p-2 lg:px-2.5 lg:py-1.5 flex flex-col justify-center gap-0.5 shrink-0">
                      <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1 leading-none">
                        <span className="text-[8px]">◇</span> LEITURA ESTRATÉGICA
                      </span>
                      <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-tight">
                        A confiança depende cada vez mais da capacidade de demonstrar aquilo que a marca afirma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LINHA 05 - ÍNDIGO (INOVAÇÃO ↔ SIMPLICIDADE) */}
              <div className="relative bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 border-l-[5px] border-l-indigo-500 dark:border-l-indigo-400 shadow-xs hover:shadow-sm transition-all flex flex-col lg:flex-row items-stretch overflow-hidden">
                {/* ÁREA 1: Identificação */}
                <div className="flex lg:flex-col items-center justify-start lg:justify-center gap-1.5 p-2 lg:py-2.5 lg:px-2 lg:w-[60px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-800/10">
                  <span className="text-indigo-700 dark:text-indigo-300 font-mono font-bold text-[12px] sm:text-[12.5px] bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-200/50 dark:border-indigo-900/50 leading-none">05</span>
                  <div className="text-indigo-600 dark:text-indigo-400">
                    <Zap className="w-4 h-4 sm:w-[16px] sm:h-[16px]" />
                  </div>
                </div>

                {/* CONTEÚDO PRINCIPAL */}
                <div className="flex flex-col lg:flex-row flex-1 p-2.5 lg:py-2 lg:px-3 gap-2.5 lg:gap-4 lg:items-center">
                  {/* ÁREA 2: Dualidade com Frase-Síntese */}
                  <div className="w-full lg:w-[31%] xl:w-[33%] flex flex-col justify-center gap-1 shrink-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">INOVAÇÃO</span>
                      <div className="text-slate-300 dark:text-slate-600 shrink-0">
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[14px] font-semibold text-slate-900 dark:text-white uppercase tracking-tight leading-none">SIMPLICIDADE</span>
                    </div>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-snug">
                      Adotar novas tecnologias quando elas tornam a experiência mais simples e prática.
                    </p>
                  </div>

                  {/* Divisor vertical (Desktop) */}
                  <div className="hidden lg:block w-px h-7 bg-slate-200 dark:bg-slate-800 shrink-0" />

                  <div className="flex flex-col md:flex-row lg:flex-1 gap-2.5 lg:gap-4 items-stretch lg:items-center">
                    {/* ÁREA 3: Explicação */}
                    <div className="w-full md:flex-1 lg:w-auto flex flex-col justify-center gap-0.5">
                      <span className="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">
                        O QUE ISSO SIGNIFICA
                      </span>
                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-snug">
                        O consumidor está cada vez mais exposto a tecnologias avançadas, mas continua valorizando soluções práticas, intuitivas e fáceis de usar no cotidiano.
                      </p>
                    </div>

                    {/* ÁREA 4: Leitura Estratégica */}
                    <div className="w-full md:w-[45%] lg:w-[260px] xl:w-[300px] rounded-lg bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/30 p-2 lg:px-2.5 lg:py-1.5 flex flex-col justify-center gap-0.5 shrink-0">
                      <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1 leading-none">
                        <span className="text-[8px]">◇</span> LEITURA ESTRATÉGICA
                      </span>
                      <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-tight">
                        Inovação ganha valor quando reduz esforço e simplifica a experiência.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LEITURA CENTRAL */}
              <div className="relative bg-white dark:bg-slate-900/80 rounded-lg border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center p-2.5 lg:py-2 lg:px-3 mt-0 gap-2.5">
                <div className="w-7 h-7 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col gap-0">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-none">
                    LEITURA CENTRAL
                  </span>
                  <p className="text-[14px] sm:text-[14.5px] font-medium text-slate-900 dark:text-white leading-snug mt-0.5">
                    Essas expectativas não se excluem; o consumidor pode buscar as duas ao mesmo tempo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. EVIDÊNCIAS E FONTES */}
          <section id="evidencias-perfis" className="scroll-mt-12 relative pt-2">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4">
              <div>
                <h2 className="text-sm sm:text-[16px] font-bold text-slate-900 dark:text-white">
                  Evidências e Fontes — Perfis de Consumo
                </h2>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-500">
                Evidências factuais rastreáveis com fontes e datas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              {PERFIS_EVIDENCES.map((ev) => (
                <EvidenceCard key={ev.id} evidence={ev} />
              ))}
            </div>
          </section>

        </div>
      )}

    </div>
  );
}
