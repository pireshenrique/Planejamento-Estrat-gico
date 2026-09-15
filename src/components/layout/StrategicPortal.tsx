import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeView } from './HomeView';
import { StrategicReportView } from './StrategicReportView';

// Geopolítica
import { ConflitosTensoesInternacionaisView } from '../geopolitica/ConflitosTensoesInternacionaisView';
import { EconomiaMundialView } from '../geopolitica/EconomiaMundialView';
import { AmericaLatinaView } from '../geopolitica/AmericaLatinaView';
import { AmericaDoNorteView } from '../geopolitica/AmericaDoNorteView';
import { AfricaView } from '../geopolitica/AfricaView';
import { AsiaView } from '../geopolitica/AsiaView';
import { EuropaView } from '../geopolitica/EuropaView';

// Economia Brasileira
import { CenarioMacroeconomicoView } from '../economia-brasileira/CenarioMacroeconomicoView';
import { PibView } from '../economia-brasileira/pib/PibView';
import { InflacaoView } from '../economia-brasileira/InflacaoView';
import { ReformaTributariaView } from '../economia-brasileira/ReformaTributariaView';
import { EleicoesView } from '../economia-brasileira/EleicoesView';
import { JurosView } from '../economia-brasileira/juros/JurosView';
import { JurosRealView } from '../economia-brasileira/juros/JurosRealView';
import { CambioView } from '../economia-brasileira/CambioView';
import { ExportacoesView } from '../economia-brasileira/pib/ExportacoesView';
import { EmpregosDesempregosView } from '../economia-brasileira/emprego/EmpregosDesempregosView';
import { RendimentoBrasileiroView } from '../economia-brasileira/RendimentoBrasileiroView';
import { EndividamentoFamiliasView } from '../economia-brasileira/endividamento/EndividamentoFamiliasView';
import { EndividamentoEmpresasView } from '../economia-brasileira/endividamento/EndividamentoEmpresasView';
import { EndividamentoFamiliasEmpresasView } from '../economia-brasileira/endividamento/EndividamentoFamiliasEmpresasView';
import { GovernoView } from '../economia-brasileira/pib/GovernoView';
import { IdhView } from '../economia-brasileira/IdhView';

// Setores Produtivos
import { IndustriaView } from '../economia-brasileira/pib/IndustriaView';
import { AgropecuariaView } from '../economia-brasileira/pib/AgropecuariaView';
import { ServicosView } from '../economia-brasileira/pib/ServicosView';
import { ConsumoView } from '../economia-brasileira/pib/ConsumoView';
import { InvestimentosView } from '../economia-brasileira/pib/InvestimentosView';

// Setor Eletroeletrônico
import { IndustriaEletroeletronicoView } from '../eletroeletronico/IndustriaEletroeletronicoView';
import { ConfiancaConsumidorView } from '../eletroeletronico/ConfiancaConsumidorView';
import { ProducaoIndustriaView } from '../eletroeletronico/ProducaoIndustriaView';
import { SondagemConjunturalView } from '../eletroeletronico/SondagemConjunturalView';
import { ImposicaoSobretaxasView } from '../eletroeletronico/ImposicaoSobretaxasView';
import { BalancoComercialView } from '../eletroeletronico/BalancoComercialView';
import { PrecoCommoditiesView } from '../eletroeletronico/PrecoCommoditiesView';

// Novo PAC
import { NovoPacView } from '../novo-pac/NovoPacView';

// Commodities
import { CommoditiesView } from '../commodities/CommoditiesView';
import { CenarioLogisticoView } from '../cenario-logistico/CenarioLogisticoView';
import { CenarioHabitacionalView } from '../cenario-habitacional/CenarioHabitacionalView';
import { CenarioMercadologicoView } from '../cenario-mercadologico/CenarioMercadologicoView';
import { MercadoImobiliarioView } from '../cenario-habitacional/MercadoImobiliarioView';
import { DeficitHabitacionalView } from '../cenario-habitacional/DeficitHabitacionalView';
import { ProgramasSociaisView } from '../cenario-habitacional/ProgramasSociaisView';
import { LaresUnipessoaisView } from '../cenario-habitacional/LaresUnipessoaisView';

// Backups & Testes

import { Home, TrendingUp, Globe2, ChevronDown, ChevronRight, ChevronLeft, Search, Bell, Info, Calendar, MapPin, Target, Users, ExternalLink, ArrowRight, ArrowLeft, ArrowUp, FileText, CheckCircle, Globe, Activity, Briefcase, Building, AlertTriangle, Leaf, ShieldAlert, Sun, Moon, Menu, X, Zap, Printer, Cpu, Box, BarChart3, ArrowUpRight, Landmark, CreditCard, Factory, Building2, HardHat, Truck, Package, PiggyBank, Coins, Layers, Shield, Droplet, Hexagon, Sparkles, Wind, Share2, Cable, Battery, Brain, Settings, Server, Wifi, Swords, Map, Banknote, Ship, Anchor, GitBranch, Droplets, Recycle, Scale, Smartphone, HeartPulse, Thermometer, CloudLightning, CloudRain, LineChart, ShoppingCart, ArrowRightLeft, DollarSign, Store, Waves, Award, GraduationCap, Maximize2, Minimize2, Vote, User, ShoppingBag, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// New Mercadologico imports
import { PerfilConsumoView } from '../cenario-mercadologico/PerfilConsumoView';
import { JornadaExperienciaView } from '../cenario-mercadologico/JornadaExperienciaView';
import { VarejoCanaisView } from '../cenario-mercadologico/VarejoCanaisView';
import { ProdutoInovacaoView } from '../cenario-mercadologico/ProdutoInovacaoView';
import { TransformacaoVarejoView } from '../cenario-mercadologico/TransformacaoVarejoView';
import { TendenciasProdutoView } from '../cenario-mercadologico/TendenciasProdutoView';
import { CasaConectadaView } from '../cenario-mercadologico/CasaConectadaView';
import { TransformacoesSociaisView } from '../cenario-mercadologico/TransformacoesSociaisView';
import { EcommerceView } from '../cenario-mercadologico/EcommerceView';

// Carreira e Gerações
import { PerfilGeracoesView } from '../carreira-geracoes/PerfilGeracoesView';
import { MudancaCarreirasView } from '../carreira-geracoes/MudancaCarreirasView';
import { EmpreendedorismoView } from '../carreira-geracoes/EmpreendedorismoView';
import { Escala6x1View } from '../carreira-geracoes/Escala6x1View';

// Ambiente de Trabalho e Bem-Estar
import { SaudeMentalView } from '../ambiente-trabalho/SaudeMentalView';
import { Nr1View } from '../ambiente-trabalho/Nr1View';
import { DiversidadeInclusaoView } from '../ambiente-trabalho/DiversidadeInclusaoView';
import { AssedioTrabalhoView } from '../ambiente-trabalho/AssedioTrabalhoView';

// Meio Ambiente e Clima
import { FenomenosClimaticosView } from '../meio-ambiente-clima/FenomenosClimaticosView';
import { MudancasClimaticasView } from '../meio-ambiente-clima/MudancasClimaticasView';
import { AquecimentoGlobalView } from '../meio-ambiente-clima/AquecimentoGlobalView';

// ESG
import { TopEmpresasEsgView } from '../esg/TopEmpresasEsgView';
import { ConcorrentesEsgView } from '../esg/ConcorrentesEsgView';

// Energia e Infraestrutura
import { EnergiaRenovavelView } from '../energia-infraestrutura/EnergiaRenovavelView';
import { MercadoCarbonoView } from '../energia-infraestrutura/MercadoCarbonoView';
import { MarcosRegulatoriosView } from '../energia-infraestrutura/MarcosRegulatoriosView';
import { DataCentersInfraView } from '../energia-infraestrutura/DataCentersInfraView';

// Trabalho e Qualificação
import { MaoDeObraQualificadaView } from '../trabalho-qualificacao/MaoDeObraQualificadaView';
import { SoftSkillsView } from '../trabalho-qualificacao/SoftSkillsView';
import { IaFuturoTrabalhoView } from '../trabalho-qualificacao/IaFuturoTrabalhoView';
import { AutomacaoView } from '../trabalho-qualificacao/AutomacaoView';

const EVIDENCES = [
  {
    id: 1,
    tag: 'FINANÇAS',
    dateStr: 'Maio de 2026',
    highlight: true,
    title: 'NDB aprova aproximadamente US$ 43 bilhões para 140 projetos e expande financiamento em moedas locais',
    description: 'O Banco dos BRICS aprova 140 projetos e reforça sua estratégia de ampliar financiamentos em moedas locais, reduzindo a dependência do dólar em operações de infraestrutura.',
    source: 'New Development Bank (NDB) / Global Times',
    url: 'https://www.globaltimes.cn/page/202605/1361591.shtml',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=300&h=200&fit=crop',
    executiveSummary: 'O Novo Banco de Desenvolvimento (NDB) anunciou a aprovação de quase US$ 43 bilhões destinados ao financiamento de 140 projetos de infraestrutura e sustentabilidade. Esses financiamentos englobam os países membros do bloco e reforçam a atuação do NDB como uma alternativa de crédito global.\n\nA instituição confirmou que manterá a estratégia agressiva de fornecer empréstimos nas moedas nacionais de cada membro, minimizando o impacto das flutuações do dólar.',
    keyPoints: [
      'Aprovação de US$ 43 bilhões em projetos',
      'Foco em 140 iniciativas de infraestrutura',
      'Ampliação do financiamento em moedas locais',
      'Redução histórica da dependência do dólar',
      'Expansão da atuação global do NDB'
    ],
    strategicRelevance: 'A medida consolida o banco como uma força motriz na integração econômica do BRICS e fortalece o movimento global de desdolarização em operações estruturais.',
    brazilImpact: 'Maior possibilidade de captação de recursos de longo prazo para projetos de energia e mobilidade urbana com risco cambial reduzido, fortalecendo indústrias de base.'
  },
  {
    id: 2,
    tag: 'ECONOMIA',
    dateStr: 'Maio de 2026',
    highlight: true,
    title: 'NDB expande estratégia de empréstimos em moedas locais em meio a esforços de integração financeira',
    description: 'O NDB confirmou que continuará aumentando a participação de financiamentos realizados em moedas nacionais dos países membros, reduzindo a exposição cambial ao dólar.',
    source: 'New Development Bank (NDB) / Global Times',
    url: 'https://www.globaltimes.cn/page/202605/1361591.shtml',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&h=200&fit=crop',
    executiveSummary: 'O NDB reiterou sua política estratégica de expandir a carteira de empréstimos concedidos em moedas locais dos países membros, reduzindo assim o peso do dólar nos balanços do bloco.\n\nA medida visa contornar vulnerabilidades do mercado internacional e estreitar as relações comerciais intrarregionais no eixo Sul-Sul.',
    keyPoints: [
      'Compromisso ampliado com moedas locais',
      'Redução da exposição cambial ao dólar',
      'Integração do ecossistema financeiro interno',
      'Mitigação de choques extremos externos',
      'Promoção de forte comércio intra-bloco'
    ],
    strategicRelevance: 'Acelera a transição estrutural do BRICS para construir plataformas de compensação não-dependentes do circuito tradicional atlantista.',
    brazilImpact: 'Facilita a obtenção de crédito mais acessível para projetos públicos e privados no longo prazo, mitigando riscos inflacionários por flutuação cambial externa.'
  },
  {
    id: 3,
    tag: 'GEOPOLÍTICA',
    dateStr: '2026',
    highlight: true,
    title: 'Ministros das finanças do BRICS defendem maior representação de economias emergentes em instituições globais',
    description: 'Os ministros das finanças dos países do BRICS reforçaram a necessidade de ampliar a participação das economias emergentes em instituições como FMI e Banco Mundial.',
    source: 'Cúpula BRICS 2026',
    url: 'https://brics2026.gov.br',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=300&h=200&fit=crop',
    executiveSummary: 'Durante o encontro preparatório ministerial para a Cúpula de 2026, os ministros das finanças do bloco unificaram discursos exigindo reformas imediatas no FMI e no Banco Mundial.\n\nO grupo cobra cotas de voto proporcionais ao peso do PIB da paridade de compra atual das economias emergentes, buscando alterar o poder decisório do capital no mundo.',
    keyPoints: [
      'Pressão intensificada sobre FMI e Banco Mundial',
      'Exigência de novas estruturas de votação institucional',
      'Cobrança de alinhamento real com as economias do Sul',
      'Identidade e consenso entre economias emergentes',
      'Fortalecimento amplo da postura conjunta financeira global'
    ],
    strategicRelevance: 'O bloco busca atuar abertamente como contraponto revisionista ponderado das velhas instituições de Bretton Woods, forçando adaptações globais multiformes.',
    brazilImpact: 'Permite ao Brasil projetar-se agudamente como fiador diplomático e articulador das reformas multilaterais, recolhendo prestígio decisório global.'
  },
  {
    id: 4,
    tag: 'DIPLOMACIA',
    dateStr: '14/05/2026',
    highlight: false,
    title: 'Mauro Vieira participa de reunião de chanceleres do Brics',
    description: 'A reunião ministerial discutiu reforma da governança global, sustentabilidade, inovação e preparação para a Cúpula dos Líderes 2026.',
    source: 'Radioagência Nacional / Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/internacional/audio/2026-05/mauro-vieira-participa-de-reuniao-de-chanceleres-do-brics',
    image: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=300&h=200&fit=crop',
    executiveSummary: 'O Ministro das Relações Exteriores, Mauro Vieira, esteve presente na cúpula de organização logística que definiu as pautas para a reunião dos Líderes.\n\nAs principais discussões focaram em priorizar pautas sobre sustentabilidade e readequação da arquitetura macroeconômica global.',
    keyPoints: [
      'Fortalecimento de inovação orientada',
      'Alinhamento das diretrizes para a grande Cúpula',
      'Coordenação moderadora entre blocos multipolares',
      'Crescimento focado em premissas sustentáveis ambientais'
    ],
    strategicRelevance: 'Confirma a disposição em organizar resoluções operativas antes de buscar conflitos retóricos maiores.',
    brazilImpact: 'Traz reorientações imediatas em rotas comerciais via tecnologias limpas suportadas intra-bloco.'
  },
  {
    id: 5,
    tag: 'ECONOMIA',
    dateStr: '07/06/2026',
    highlight: true,
    title: 'MinC busca apoio do BRICS para infraestrutura cultural',
    description: 'Representantes do governo brasileiro buscaram o Banco dos BRICS (NDB) para ampliar financiamento de projetos de infraestrutura e modernização.',
    source: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-06/minc-busca-apoio-do-brics-para-infraestrutura-cultural',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=300&h=200&fit=crop',
    executiveSummary: 'O Ministério da Cultura impulsionou inciativas inovadoras para classificar equipamentos de economia criativa como elegíveis aos empréstimos operados originariamente pelo NDB.\n\nSinalizou-se aprovação preliminar para cobrir custos logísticos formativos em territórios brasileiros, consolidando nova veia desenvolvimentista.',
    keyPoints: [
      'Inovação setorial na captação de portfólios',
      'Financiamento internacional em centros formativos culturais',
      'Descentralização de verbas para o desenvolvimento macrorregional'
    ],
    strategicRelevance: 'Supera o uso do NDB exclusivo para portos e pontes, abrindo precedentes inter-regionais para o apoio irrestrito aos polos construtivos antropossociais focais.',
    brazilImpact: 'Permitirá grandes incrementos líquidos nos cofres governamentais orientados a espaços públicos artísticos em províncias e capitais nacionais cruciais.'
  }
];

const sidebarGroups = [
  {
    name: 'Geopolítica & Economia Global',
    icon: ShieldAlert,
    children: [
      'Conflitos e Tensões Internacionais',
      {
        name: 'Economia Mundial',
        children: ['América Latina', 'América do Norte', 'África', 'Ásia', 'Europa']
      },
      'Cenário Logístico',
      'Commodities'
    ]
  },
  {
    name: 'Economia Brasileira',
    icon: LineChart,
    children: [
      'Cenário Macroeconômico',
      'Exportação', 
      'Emprego e Desemprego', 
      'Rendimento do Brasileiro', 
      'Endividamento das Famílias e Empresas', 
      'Indústria do Setor Eletroeletrônico', 
      'IDH',
      'Novo PAC',
      'Reforma Tributária',
      'Eleições'
    ]
  },
  {
    name: 'Cenário Habitacional',
    icon: Home,
    children: ['Mercado Imobiliário', 'Déficit Habitacional', 'Programas Sociais', 'Lares Unipessoais']
  },
  {
    name: 'Cenário Mercadológico',
    icon: Store,
    children: [
      'Perfil de Consumo',
      'Jornada de Compra',
      'Varejo e Canais',
      'Produto e Inovação',
      'Estilos de Vida'
    ]
  },
  {
    name: 'Meio Ambiente e Clima',
    icon: Leaf,
    children: [
      'Fenômenos Climáticos',
      'Mudanças Climáticas',
      'Aquecimento Global'
    ]
  },
  {
    name: 'ESG',
    icon: Award,
    children: [
      'Top Empresas ESG',
      'Concorrentes ESG'
    ]
  },
  {
    name: 'Energia e Infraestrutura',
    icon: Zap,
    children: [
      'Energia Renovável',
      'Mercado de Carbono',
      'Marcos Regulatórios',
      'Data Centers (Energia)'
    ]
  },
  {
    name: 'Carreira e Gerações',
    icon: Briefcase,
    children: [
      'Perfil das gerações',
      'Mudança de carreiras',
      'Empreendedorismo',
      'Escala 6x1'
    ]
  },
  {
    name: 'Ambiente de Trabalho e Bem-Estar',
    icon: HeartPulse,
    children: [
      'Saúde mental no trabalho',
      'NR-1',
      'Diversidade e inclusão',
      'Assédio no ambiente de trabalho'
    ]
  },
  {
    name: 'Trabalho e Qualificação',
    icon: GraduationCap,
    children: [
      'Mão de obra qualificada',
      'Soft skills',
      'IA e o futuro do trabalho',
      'Automação'
    ]
  }
];

// Mapeamento exclusivo para os rótulos curtos exibidos na navegação da Sidebar (Cenário Mercadológico e outros)
const sidebarDisplayLabels: Record<string, string> = {
  'Perfil de Consumo': 'Perfil de Consumo',
  'Jornada de Compra': 'Jornada de Compra',
  'Jornada e Experiência': 'Jornada de Compra',
  'Varejo e Canais': 'Varejo e Canais',
  'Produto e Inovação': 'Produto e Inovação',
  'Estilos de Vida': 'Estilos de Vida',
  'Transformações Sociais': 'Estilos de Vida',
  'Transformação do Varejo': 'Varejo em Transformação',
  'Tendências de Produto': 'Produto e Valor',
  'Casa Conectada': 'Casa Conectada',
  'E-commerce': 'E-commerce',
  'Data Centers (Energia)': 'Data Centers'
};

const getSidebarItemLabel = (name: string): string => {
  return sidebarDisplayLabels[name] || name;
};

export function StrategicPortal() {
  const navigate = useNavigate();
  const location = useLocation();

  const customPageRoutes: Record<string, string> = {
    // Meio Ambiente e Clima
    'Fenômenos Climáticos': '/meio-ambiente-clima/fenomenos-climaticos',
    'Mudanças Climáticas': '/meio-ambiente-clima/mudancas-climaticas',
    'Aquecimento Global': '/meio-ambiente-clima/aquecimento-global',

    // ESG
    'Top Empresas ESG': '/esg/top-empresas',
    'Concorrentes ESG': '/esg/concorrentes',

    // Energia e Infraestrutura
    'Energia Renovável': '/energia-infraestrutura/energia-renovavel',
    'Mercado de Carbono': '/energia-infraestrutura/mercado-carbono',
    'Marcos Regulatórios': '/energia-infraestrutura/marcos-regulatorios',
    'Data Centers (Energia)': '/energia-infraestrutura/data-centers',

    // Carreira e Gerações
    'Perfil das gerações': '/carreira-geracoes/perfil-geracoes',
    'Mudança de carreiras': '/carreira-geracoes/mudanca-carreiras',
    'Empreendedorismo': '/carreira-geracoes/empreendedorismo',
    'Escala 6x1': '/carreira-geracoes/escala-6x1',

    // Ambiente de Trabalho e Bem-Estar
    'Saúde mental no trabalho': '/ambiente-trabalho/saude-mental',
    'NR-1': '/ambiente-trabalho/nr-1',
    'Diversidade e inclusão': '/ambiente-trabalho/diversidade-inclusao',
    'Assédio no ambiente de trabalho': '/ambiente-trabalho/assedio',

    // Trabalho e Qualificação
    'Mão de obra qualificada': '/trabalho-qualificacao/mao-de-obra-qualificada',
    'Soft skills': '/trabalho-qualificacao/soft-skills',
    'IA e o futuro do trabalho': '/trabalho-qualificacao/ia-futuro-trabalho',
    'Automação': '/trabalho-qualificacao/automacao',

    // Relatório Estratégico
    'Relatório Estratégico': '/relatorio-estrategico',
    'Relatório Estratégico 2027-2037': '/relatorio-estrategico',
  };

  const pageToPath = (page: string) => {
    if (page === 'Home') return '/';
    if (customPageRoutes[page]) return customPageRoutes[page];
    return "/" + page.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  // Lista unificada e exaustiva de páginas do portal
  const allNavPages = React.useMemo(() => {
    const pages: string[] = ['Home'];

    sidebarGroups.forEach(group => {
      pages.push(group.name);
      if (group.children) {
        group.children.forEach((child: any) => {
          if (typeof child === 'string') {
            pages.push(child);
          } else if (child && typeof child === 'object' && child.name) {
            pages.push(child.name);
            if (Array.isArray(child.children)) {
              child.children.forEach((subChild: any) => {
                if (typeof subChild === 'string') {
                  pages.push(subChild);
                }
              });
            }
          }
        });
      }
    });

    // Manter rotas antigas para redirecionamento transparente e links existentes
    const legacyPages = [
      'PIB', 'Inflação', 'Juros / Selic', 'Taxa de Juros Real', 'Câmbio / dólar',
      'Jornada de Compra', 'Jornada e Experiência',
      'Varejo e Canais', 'Transformação do Varejo', 'Varejo em Transformação', 'E-commerce',
      'Produto e Inovação', 'Tendências de Produto', 'Produto e Valor', 'Casa Conectada',
      'Estilos de Vida', 'Transformações Sociais'
    ];
    legacyPages.forEach(p => pages.push(p));

    return Array.from(new Set(pages));
  }, []);

  const pathToPage = (path: string) => {
    const currentPath = path === "/" ? "/" : path;

    const customRouteMap: Record<string, string> = {
      // Meio Ambiente e Clima
      '/meio-ambiente-clima/fenomenos-climaticos': 'Fenômenos Climáticos',
      '/fenomenos-climaticos': 'Fenômenos Climáticos',
      '/meio-ambiente-clima/mudancas-climaticas': 'Mudanças Climáticas',
      '/mudancas-climaticas': 'Mudanças Climáticas',
      '/meio-ambiente-clima/aquecimento-global': 'Aquecimento Global',
      '/aquecimento-global': 'Aquecimento Global',

      // ESG
      '/esg/top-empresas': 'Top Empresas ESG',
      '/top-empresas-esg': 'Top Empresas ESG',
      '/esg/concorrentes': 'Concorrentes ESG',
      '/concorrentes-esg': 'Concorrentes ESG',

      // Energia e Infraestrutura
      '/energia-infraestrutura/energia-renovavel': 'Energia Renovável',
      '/energia-renovavel': 'Energia Renovável',
      '/energia-infraestrutura/mercado-carbono': 'Mercado de Carbono',
      '/mercado-carbono': 'Mercado de Carbono',
      '/mercado-de-carbono': 'Mercado de Carbono',
      '/energia-infraestrutura/marcos-regulatorios': 'Marcos Regulatórios',
      '/marcos-regulatorios': 'Marcos Regulatórios',
      '/energia-infraestrutura/data-centers': 'Data Centers (Energia)',

      // Carreira e Gerações
      '/carreira-geracoes/perfil-geracoes': 'Perfil das gerações',
      '/carreira-geracoes/perfil-das-geracoes': 'Perfil das gerações',
      '/perfil-das-geracoes': 'Perfil das gerações',
      '/perfil-geracoes': 'Perfil das gerações',
      
      '/carreira-geracoes/mudanca-carreiras': 'Mudança de carreiras',
      '/carreira-geracoes/mudanca-de-carreiras': 'Mudança de carreiras',
      '/mudanca-carreiras': 'Mudança de carreiras',
      '/mudanca-de-carreiras': 'Mudança de carreiras',
      
      '/carreira-geracoes/empreendedorismo': 'Empreendedorismo',
      '/empreendedorismo': 'Empreendedorismo',
      
      '/carreira-geracoes/escala-6x1': 'Escala 6x1',
      '/escala-6x1': 'Escala 6x1',
      
      // Ambiente de Trabalho e Bem-Estar
      '/ambiente-trabalho/saude-mental': 'Saúde mental no trabalho',
      '/ambiente-trabalho/saude-mental-no-trabalho': 'Saúde mental no trabalho',
      '/saude-mental-no-trabalho': 'Saúde mental no trabalho',
      '/saude-mental': 'Saúde mental no trabalho',
      
      '/ambiente-trabalho/nr-1': 'NR-1',
      '/ambiente-trabalho/nr1': 'NR-1',
      '/nr-1': 'NR-1',
      '/nr1': 'NR-1',
      
      '/ambiente-trabalho/diversidade-inclusao': 'Diversidade e inclusão',
      '/ambiente-trabalho/diversidade-e-inclusao': 'Diversidade e inclusão',
      '/diversidade-e-inclusao': 'Diversidade e inclusão',
      '/diversidade-inclusao': 'Diversidade e inclusão',
      
      '/ambiente-trabalho/assedio': 'Assédio no ambiente de trabalho',
      '/ambiente-trabalho/assedio-no-ambiente-de-trabalho': 'Assédio no ambiente de trabalho',
      '/assedio-no-ambiente-de-trabalho': 'Assédio no ambiente de trabalho',
      '/assedio': 'Assédio no ambiente de trabalho',

      // Trabalho e Qualificação
      '/trabalho-qualificacao/mao-de-obra-qualificada': 'Mão de obra qualificada',
      '/trabalho-qualificacao/mao-de-obra': 'Mão de obra qualificada',
      '/mao-de-obra-qualificada': 'Mão de obra qualificada',
      
      '/trabalho-qualificacao/soft-skills': 'Soft skills',
      '/soft-skills': 'Soft skills',
      
      '/trabalho-qualificacao/ia-futuro-trabalho': 'IA e o futuro do trabalho',
      '/trabalho-qualificacao/ia-e-o-futuro-do-trabalho': 'IA e o futuro do trabalho',
      '/ia-futuro-trabalho': 'IA e o futuro do trabalho',
      '/ia-e-o-futuro-do-trabalho': 'IA e o futuro do trabalho',
      
      '/trabalho-qualificacao/automacao': 'Automação',
      '/automacao': 'Automação',

      '/trabalho-qualificacao': 'Trabalho e Qualificação',

      // Relatório Estratégico
      '/relatorio-estrategico': 'Relatório Estratégico',
      '/relatorio': 'Relatório Estratégico',
    };

    if (customRouteMap[currentPath]) {
      return customRouteMap[currentPath];
    }

    if (currentPath === '/perfil-de-consumo') return 'Perfil de Consumo';
    if (currentPath === '/jornada-de-compra' || currentPath === '/jornada-e-experiencia') return 'Jornada de Compra';
    if (
      currentPath === '/varejo-e-canais' || 
      currentPath === '/varejo-em-transformacao' || 
      currentPath === '/transformacao-do-varejo' || 
      currentPath === '/e-commerce' || 
      currentPath === '/ecommerce'
    ) return 'Varejo e Canais';
    if (
      currentPath === '/produto-e-inovacao' || 
      currentPath === '/produto-e-valor' || 
      currentPath === '/tendencias-de-produto' || 
      currentPath === '/casa-conectada'
    ) return 'Produto e Inovação';
    if (currentPath === '/estilos-de-vida' || currentPath === '/transformacoes-sociais') return 'Estilos de Vida';

    const match = allNavPages.find(p => pageToPath(p) === currentPath);
    return match || "Home";
  };

  const activePage = pathToPage(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const setActivePage = (page: string) => {
    navigate(pageToPath(page));
    setIsMobileMenuOpen(false);
  };

  const currentNavIndex = allNavPages.indexOf(activePage);
  const prevPage = currentNavIndex > 0 ? allNavPages[currentNavIndex - 1] : null;
  const nextPage = currentNavIndex >= 0 && currentNavIndex < allNavPages.length - 1 ? allNavPages[currentNavIndex + 1] : null;

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    'Geopolítica & Economia Global': false,
    'Economia Brasileira': false,
    'Cenário Habitacional': false,
    'Cenário Mercadológico': false,
    'Meio Ambiente e Clima': false,
    'ESG': false,
    'Energia e Infraestrutura': false,
    'Carreira e Gerações': false,
    'Ambiente de Trabalho e Bem-Estar': false,
    'Trabalho e Qualificação': false
  });

  // Auto-expandir grupo e subgrupo pai quando activePage mudar
  useEffect(() => {
    sidebarGroups.forEach(group => {
      const hasDirectChild = group.children.some(c => typeof c === 'string' && c === activePage);
      const isGroup = group.name === activePage;
      if (hasDirectChild || isGroup) {
        setOpenGroups(prev => ({ ...prev, [group.name]: true }));
      }
      group.children.forEach(child => {
        if (typeof child === 'object' && child !== null) {
          const isSubChild = Array.isArray(child.children) && child.children.includes(activePage);
          const isSub = child.name === activePage;
          if (isSubChild || isSub) {
            setOpenGroups(prev => ({ ...prev, [group.name]: true, [child.name]: true }));
          }
        }
      });
    });
  }, [activePage]);

  // Fechar menu mobile ao pressionar ESC ou ao redimensionar para tela grande
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const toggleGroup = (group: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };
  const [showAllEvidences, setShowAllEvidences] = useState(false);
  const [expandedEvidenceId, setExpandedEvidenceId] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        setToastMessage("Dica: Pressione F11 no teclado para tela cheia na TV.");
        setTimeout(() => setToastMessage(null), 4000);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    // Detecção automática inteligente de Smart TVs e dispositivos de apresentação
    const userAgent = (navigator.userAgent || '').toLowerCase();
    const isTvDevice = /smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv|viera|bravia|tizen|web0s|webos|crkey|roku|aftt|aftm|boxee|kylo|roku|dlnadoc|ce-html/i.test(userAgent);
    
    if (isTvDevice) {
      document.documentElement.classList.add('smart-tv-detected');
      setIsSidebarCollapsed(true); // Abre com a tela ampla pronta para apresentação na TV
    }
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.includes('2026') || url === '#') {
      e.preventDefault();
      setToastMessage("Aviso: Esta é uma evidência projetada para 2026. O link de origem ainda não está ativo.");
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  const handleScroll = () => {
    if (mainRef.current && mainRef.current.scrollTop > 300) {
      setShowToTop(true);
    } else {
      setShowToTop(false);
    }
  };

  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    scrollToTop();
  }, [activePage]);

  const getBreadcrumb = (page: string) => {
    if (['América Latina', 'America Latinal', 'America Latina', 'América do Norte', 'America do Norte', 'África', 'Africa', 'ÁFRICA', 'AFRICA', 'Ásia', 'Asia', 'ÁSIA', 'ASIA', 'China', 'Índia', 'India', 'Europa', 'europa', 'EUROPA'].includes(page)) {
      const pageTitle = ['América do Norte', 'America do Norte'].includes(page)
        ? 'América do Norte'
        : ['África', 'Africa', 'ÁFRICA', 'AFRICA'].includes(page)
        ? 'África'
        : ['Ásia', 'Asia', 'ÁSIA', 'ASIA', 'China', 'Índia', 'India'].includes(page)
        ? 'Ásia'
        : ['Europa', 'europa', 'EUROPA'].includes(page)
        ? 'Europa'
        : 'América Latina';
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Geopolítica & Economia Global</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <button onClick={() => setActivePage('Economia Mundial')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer shrink-0">Economia Mundial</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{pageTitle}</span>
        </div>
      );
    }
    if (['Mercosul', 'União Europeia', 'OCDE', 'G20', 'BRICS', 'OPEP'].includes(page)) {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Geopolítica</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Blocos Econômicos</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{page}</span>
        </div>
      );
    }
    if (page === 'Programas Sociais' || page === 'Programas sociais' || page === 'PROGRAMAS SOCIAIS') {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <button onClick={() => setActivePage('Cenário Habitacional')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer shrink-0">Cenário Habitacional</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">Programas Sociais</span>
        </div>
      );
    }
    if (page === 'Mercado Imobiliário' || page === 'Mercado imobiliário' || page === 'MERCADO IMOBILIÁRIO') {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <button onClick={() => setActivePage('Cenário Habitacional')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer shrink-0">Cenário Habitacional</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">Mercado Imobiliário</span>
        </div>
      );
    }
    if (page === 'Déficit Habitacional' || page === 'Deficit Habitacional' || page === 'DÉFICIT HABITACIONAL') {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <button onClick={() => setActivePage('Cenário Habitacional')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer shrink-0">Cenário Habitacional</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">Déficit Habitacional</span>
        </div>
      );
    }
    if ([
      'Perfil de Consumo', 'Jornada de Compra', 'Jornada e Experiência', 
      'Varejo e Canais', 'Produto e Inovação', 'Estilos de Vida', 
      'Transformações Sociais', 'Transformação do Varejo', 'Varejo em Transformação', 
      'Tendências de Produto', 'Produto e Valor', 'Casa Conectada', 'E-commerce'
    ].includes(page)) {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Cenário Mercadológico</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{page}</span>
        </div>
      );
    }
    if (['Fenômenos Climáticos', 'Mudanças Climáticas', 'Aquecimento Global'].includes(page)) {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Meio Ambiente e Clima</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{page}</span>
        </div>
      );
    }
    if (['Top Empresas ESG', 'Concorrentes ESG'].includes(page)) {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">ESG</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{page}</span>
        </div>
      );
    }
    if (['Energia Renovável', 'Mercado de Carbono', 'Marcos Regulatórios', 'Data Centers (Energia)'].includes(page)) {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Energia e Infraestrutura</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{page === 'Data Centers (Energia)' ? 'Data Centers' : page}</span>
        </div>
      );
    }
    if (['Perfil das gerações', 'Mudança de carreiras', 'Empreendedorismo', 'Escala 6x1'].includes(page)) {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Carreira e Gerações</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{page}</span>
        </div>
      );
    }
    if (['Saúde mental no trabalho', 'NR-1', 'Diversidade e inclusão', 'Assédio no ambiente de trabalho'].includes(page)) {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Ambiente de Trabalho e Bem-Estar</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{page}</span>
        </div>
      );
    }
    if (['Mão de obra qualificada', 'Soft skills', 'IA e o futuro do trabalho', 'Automação'].includes(page)) {
      return (
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0 cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Trabalho e Qualificação</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{page}</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <button onClick={() => setActivePage('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0">Home</button>
        {page !== 'Home' && (
          <>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[#0c162c] dark:text-white font-bold shrink-0">{page}</span>
          </>
        )}
      </div>
    );
  };

  const getSubthemeIcon = (child: string) => {
    if (['China', 'China (Teste)'].includes(child)) return <img src="https://flagcdn.com/w20/cn.png" className="w-[14px] rounded-[1px] opacity-80" alt="China" />;
    if (child === 'Estados Unidos') return <img src="https://flagcdn.com/w20/us.png" className="w-[14px] rounded-[1px] opacity-80" alt="USA" />;
    if (child === 'União Europeia') return <img src="https://flagcdn.com/w20/eu.png" className="w-[14px] rounded-[1px] opacity-80" alt="EU" />;
    if (child === 'Índia') return <img src="https://flagcdn.com/w20/in.png" className="w-[14px] rounded-[1px] opacity-80" alt="India" />;

    const icons: Record<string, any> = {
      // Geopolítica & Economia Global
      'Conflitos e Tensões Internacionais': Swords,
      'Economia Mundial': Globe,
      'América Latina': Globe,
      'America Latinal': Globe,
      'America Latina': Globe,
      'América do Norte': Globe,
      'America do Norte': Globe,
      'África': Globe,
      'Africa': Globe,
      'Ásia': Globe,
      'Asia': Globe,
      'Europa': Globe,
      'europa': Globe,
      'EUA x China': Swords,
      'China x Taiwan': Swords,
      'Rússia x Ucrânia': Swords,
      'Oriente Médio': Map,
      'BRICS': Users,
      'Multipolaridade e nova ordem global': Globe,
      'Tarifas comerciais': Banknote,
      'Sanções econômicas': ShieldAlert,
      'Protecionismo industrial': Shield,
      'Acordos comerciais': FileText,
      // Logística Global e Cadeias de Suprimento
      'Cenário Logístico': Ship,
      'Cenário Logistico': Ship,
      'Cenario Logistico': Ship,
      'Frete marítimo internacional': Anchor,
      'Rotas marítimas críticas': MapPin,
      'Mar Vermelho / Canal de Suez': Ship,
      'Canal do Panamá': Ship,
      'Portos internacionais': Anchor,
      'Gargalos logísticos': AlertTriangle,
      'Disponibilidade de contêineres': Package,
      'Prazos de importação': Calendar,
      'Cadeias globais de suprimentos': GitBranch,
      // Commodities e Insumos Globais
      'Cobre': Coins,
      'Alumínio': Layers,
      'Aço': Shield,
      'Petróleo': Droplet,
      'Resinas plásticas': Hexagon,
      'Gás natural': Zap,
      'Componentes industriais importados': Cpu,
      // Meio Ambiente e Clima
      'El Niño': Sun,
      'La Niña': CloudRain,
      'Eventos climáticos extremos': CloudLightning,
      'Secas': Sun,
      'Chuvas intensas': CloudRain,
      'Crise hídrica': Droplet,
      'Mudanças climáticas': Thermometer,
      // Energia e Infraestrutura
      'Energia elétrica': Zap,
      'Bandeiras tarifárias': AlertTriangle,
      'Hidrelétricas e reservatórios': Waves,
      'Energia solar': Sun,
      'Geração distribuída': Share2,
      'Transmissão elétrica': Cable,
      'Infraestrutura urbana': Building2,
      // Economia Brasileira
      'Cenário Macroeconômico': LineChart,
      'PIB': BarChart3,
      'Exportação': Globe,
      'Investimentos': TrendingUp,
      'Inflação': ArrowUpRight,
      'Reforma Tributária': Scale,
      'Eleições': Vote,
      'Juros / Selic': Landmark,
      'Taxa de Juros Real': Landmark,
      'Câmbio / dólar': DollarSign,
      'Empregos e Desempregos no Brasil': Briefcase,
      'Emprego e Desemprego': Briefcase,
      'Empregos': Briefcase,
      'Desempregos': Users,
      'Emprego e renda': Briefcase,
      'Crédito': CreditCard,
      'Rendimento do Brasileiro': DollarSign,
      'Endividamento das Famílias e Empresas': CreditCard,
      'Endividamento das Famílias': CreditCard,
      'Endividamento': CreditCard,
      'Produção industrial': Factory,
      'Indústria do Setor Eletroeletrônico': Cpu,
      'IDH': Award,
      'Confiança do consumidor': Users,
      'Confiança do Consumidor': Users,
      'Produção da Indústria': Factory,
      'Sondagem Conjuntural': Activity,
      'SONDAGEM CONJUNTURAL': Activity,
      'Imposição de Sobretaxas': Scale,
      'IMPOSIÇÃO DE SOBRETAXAS': Scale,
      'Balanço Comercial': ArrowRightLeft,
      'BALANÇO COMERCIAL': ArrowRightLeft,
      'Preço de Commodities': Coins,
      'PREÇO DE COMMODITIES': Coins,
      // Construção Civil e Habitação
      'Cenário Habitacional': Home,
      'Cenario Habitacional': Home,
      'Cenário Mercadológico': Store,
      'Cenario Mercadologico': Store,
      'Perfil de Consumo': Users,
      'Jornada de Compra': ShoppingBag,
      'Jornada e Experiência': ShoppingBag,
      'Varejo e Canais': Store,
      'Transformação do Varejo': Store,
      'Varejo em Transformação': Store,
      'E-commerce': ShoppingCart,
      'Produto e Inovação': Lightbulb,
      'Tendências de Produto': Lightbulb,
      'Produto e Valor': Lightbulb,
      'Casa Conectada': Cpu,
      'Estilos de Vida': Users,
      'Transformações Sociais': Users,
      'Programas Sociais': Home,
      'Programas sociais': Home,
      'PROGRAMAS SOCIAIS': Home,
      'Mercado imobiliário': Building2,
      'Mercado Imobiliário': Building2,
      'MERCADO IMOBILIÁRIO': Building2,
      'Déficit Habitacional': Home,
      'Deficit Habitacional': Home,
      'DÉFICIT HABITACIONAL': Home,
      'Lares Unipessoais': User,
      'Lares unipessoais': User,
      'LARES UNIPESSOAIS': User,
      'Lançamentos imobiliários': Building,
      'Vendas de imóveis': Banknote,
      'Minha Casa Minha Vida': Home,
      'Financiamento habitacional': PiggyBank,
      'Reformas residenciais': Home,
      'Obras públicas': HardHat,
      'Materiais de construção': Package,
      // Saneamento e Infraestrutura Hídrica
      'Marco do Saneamento': Droplets,
      'Universalização do saneamento': Globe,
      'Investimentos em saneamento': Banknote,
      'Infraestrutura de água e esgoto': Droplet,
      'Eficiência hídrica': Recycle,
      'Reúso de água': Recycle,
      'Regulamentações do setor': Scale,
      // Regulação e Sustentabilidade
      'Logística reversa': ArrowRightLeft,
      'Economia circular': Recycle,
      'Embalagens': Package,
      'Normas técnicas': FileText,
      'Eficiência energética obrigatória': Zap,
      'ESG': Leaf,
      'Regulamentações ambientais': Scale,
      // Mercado Setorial e Concorrência
      'Deca / Dexco': Store,
      'Docol': Store,
      'Zagonel': Store,
      'Fani': Store,
      'Icasa': Store,
      'Produtos importados': Ship,
      'Preços dos concorrentes': Banknote,
      'Canais de venda': ShoppingCart,
      'Inovação de produtos': Target,
      // Gerações
      'Gerações': Users,
      // Novo PAC
      'Novo PAC': Layers,
      'Infraestrutura social inclusiva': Building2,
      'Cidades Sustentáveis e Resilientes': Building,
      'Transporte Eficiente e Sustentável': Truck,
      'Água para Todos': Droplets,
      'Inclusão Digital e Conectividade': Wifi,
      'Transição e Segurança Energética': Zap,
      'Inovação para a Indústria da Defesa': Shield,
      'Educação, Ciência e Tecnologia': GraduationCap,
      'Saúde': HeartPulse,
      // Commodities
      'Commodities e Insumos Globais': Package,
      'Commodities': Coins,
      // Carreira e Gerações
      'Perfil das gerações': Users,
      'Mudança de carreiras': TrendingUp,
      'Empreendedorismo': Lightbulb,
      'Escala 6x1': Calendar,
      // Ambiente de Trabalho e Bem-Estar
      'Saúde mental no trabalho': HeartPulse,
      'NR-1': FileText,
      'Diversidade e inclusão': Users,
      'Assédio no ambiente de trabalho': ShieldAlert,
      // Meio Ambiente e Clima
      'Fenômenos Climáticos': CloudLightning,
      'Mudanças Climáticas': Thermometer,
      'Aquecimento Global': Sun,
      // ESG
      'Top Empresas ESG': Award,
      'Concorrentes ESG': Shield,
      // Energia e Infraestrutura
      'Energia Renovável': Zap,
      'Mercado de Carbono': Leaf,
      'Marcos Regulatórios': Scale,
      'Data Centers (Energia)': Server,
      // Trabalho e Qualificação
      'Mão de obra qualificada': GraduationCap,
      'Soft skills': Sparkles,
      'IA e o futuro do trabalho': Brain,
      'Automação': Cpu,
    };

    const IconComponent = icons[child];
    if (IconComponent) {
      return <IconComponent className="w-[14px] h-[14px] opacity-80" />;
    }

    return <div className="w-[6px] h-[6px] rounded-full bg-slate-500 opacity-80" />;
  };

  return (
    <div className="flex h-screen bg-[#F4F7FB] dark:bg-[#080f1e]/80 font-sans text-slate-800 dark:text-slate-200 overflow-hidden print:overflow-visible print:h-auto print:block">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <Info className="w-5 h-5 text-blue-400 dark:text-blue-600" />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 p-1.5 bg-slate-800 dark:bg-white text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-900 rounded-full hover:bg-slate-700 dark:hover:bg-slate-100 transition-all cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
      )}
      {/* BACKDROP OVERLAY PARA MOBILE */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300 cursor-pointer animate-in fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* SIDEBAR */}
      <aside 
        id="portal-sidebar"
        className={`print:hidden fixed lg:relative inset-y-0 left-0 z-50 h-full bg-[#0c162c] text-slate-300 flex flex-col flex-shrink-0 overflow-hidden transition-transform lg:transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none ${
          isMobileMenuOpen ? "translate-x-0 w-[280px] max-w-[85vw]" : "-translate-x-full lg:translate-x-0"
        } ${isSidebarCollapsed ? "lg:w-[80px]" : "lg:w-[280px]"}`}
      >
        <div className="p-4 sm:p-5 lg:p-6 flex items-center justify-between border-b border-white/5 lg:border-none">
          <h1 
            className={`${isSidebarCollapsed ? "lg:text-xl" : "text-2xl"} text-white font-black tracking-tight italic cursor-pointer hover:opacity-80`} 
            onClick={() => setActivePage('Home')}
          >
            {isSidebarCollapsed ? (
              <>
                <span className="hidden lg:inline">LZ</span>
                <span className="lg:hidden">LORENZETTI</span>
              </>
            ) : (
              'LORENZETTI'
            )}
          </h1>

          {/* BOTÃO FECHAR MENU NO MOBILE */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <ul className="space-y-1 py-2">
            <li>
              <button onClick={() => setActivePage('Home')} className={`w-full flex items-center justify-between px-6 py-2.5 text-sm font-medium transition-all group ${activePage === 'Home' ? 'text-white bg-white/10 border-r-4 border-blue-500' : 'text-slate-400 hover:text-white hover:bg-white/5 active:bg-white/10 cursor-pointer'}`}>
                <div className="flex items-center gap-3">
                  <Home className="w-4 h-4 shrink-0" /> {!isSidebarCollapsed && <span>Home</span>}
                </div>
                {!isSidebarCollapsed && <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activePage === 'Home' ? 'text-blue-500 opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}`} />}
              </button>
            </li>
            <li>
              <button onClick={() => setActivePage('Relatório Estratégico')} className={`w-full flex items-center justify-between px-6 py-2.5 text-sm font-medium transition-all group ${activePage === 'Relatório Estratégico' ? 'text-white bg-white/10 border-r-4 border-blue-500' : 'text-slate-400 hover:text-white hover:bg-white/5 active:bg-white/10 cursor-pointer'}`}>
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 shrink-0 text-blue-400" /> {!isSidebarCollapsed && <span>Relatório Estratégico</span>}
                </div>
                {!isSidebarCollapsed && <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activePage === 'Relatório Estratégico' ? 'text-blue-500 opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}`} />}
              </button>
            </li>
            
            {/* Dynamic Groups */}
            {!isSidebarCollapsed && (
              <li className="px-6 mt-6 mb-3 flex items-center justify-between">
                <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wider">Temas Estratégicos</span>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenGroups({});
                  }} 
                  className="text-[12px] font-bold text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2 py-1 rounded flex items-center shrink-0 cursor-pointer"
                  title="Recolher todos os temas"
                >
                  Recolher
                </button>
              </li>
            )}
            {sidebarGroups.map((group, idx) => {
              const isOpen = !!openGroups[group.name];
              const isGroupActive = activePage === group.name || group.children.some(child => 
                typeof child === 'object' && child !== null
                  ? (child.name === activePage || (Array.isArray(child.children) && child.children.includes(activePage)))
                  : child === activePage
              );

              return (
                <li key={idx}>
                  <div className="flex flex-col">
                    <div 
                      className={`flex items-center justify-between px-6 py-2.5 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors cursor-pointer select-none ${
                        isGroupActive ? 'bg-white/5 text-white' : 'text-slate-300'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (group.children && group.children.length > 0) {
                          setOpenGroups(prev => ({ ...prev, [group.name]: !prev[group.name] }));
                        } else {
                          setActivePage(group.name);
                        }
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <group.icon className="w-4 h-4 shrink-0 mt-[2px]" />
                        {!isSidebarCollapsed && <span className="whitespace-normal break-words leading-tight">{group.name}</span>}
                      </div>
                      {!isSidebarCollapsed && (
                        group.children && group.children.length > 0 ? (
                          <ChevronDown className={`w-4 h-4 shrink-0 mt-[2px] transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`} />
                        ) : (
                          <ChevronRight className={`w-4 h-4 shrink-0 mt-[2px] transition-transform duration-200 opacity-60 ${activePage === group.name ? 'text-blue-400 opacity-100' : ''}`} />
                        )
                      )}
                    </div>
                    
                    {/* Sub-menu */}
                    {!isSidebarCollapsed && isOpen && (
                      <ul className="bg-[#080f1e] py-2 relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-700/50"></div>
                        {group.children.map((child, cIdx) => {
                          const isSubGroup = typeof child === 'object' && child !== null;
                          const childName = isSubGroup ? child.name : child;
                          const isSubOpen = isSubGroup ? !!openGroups[childName as string] : false;
                          const isSubActive = isSubGroup
                            ? (activePage === childName || (Array.isArray(child.children) && child.children.includes(activePage)))
                            : activePage === childName;
                          
                          return (
                            <li key={cIdx}>
                              <div className={`w-full flex items-center justify-between transition-colors ${
                                isSubActive ? 'text-white bg-[#1a2b4c] border-l-[3px] border-[#3b82f6] font-bold' : 'text-slate-400 dark:text-slate-400 hover:text-white border-l-[3px] border-transparent'
                              }`}>
                                <button 
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActivePage(childName as string);
                                    if (isSubGroup) {
                                      setOpenGroups(prev => ({ ...prev, [childName as string]: true }));
                                    }
                                  }} 
                                  className="flex-1 flex items-center text-left pl-10 pr-2 text-[15px] py-2 cursor-pointer min-w-0"
                                >
                                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                    <div className="shrink-0 mt-0.5">
                                      {getSubthemeIcon(childName as string)}
                                    </div>
                                    <span className="whitespace-normal break-words leading-tight flex-1">{getSidebarItemLabel(childName as string)}</span>
                                  </div>
                                </button>
                                {isSubGroup && (
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenGroups(prev => ({ ...prev, [childName as string]: !prev[childName as string] }));
                                    }}
                                    className="p-2 mr-2 text-slate-400 hover:text-white transition-colors cursor-pointer rounded hover:bg-white/10"
                                    title={isSubOpen ? "Recolher subitens" : "Expandir subitens"}
                                  >
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSubOpen ? '' : '-rotate-90'}`} />
                                  </button>
                                )}
                              </div>
                              
                              {isSubGroup && isSubOpen && (
                                <ul className="bg-[#050a14] py-1 w-full">
                                  {child.children.map((subChild: string, scIdx: number) => (
                                    <li key={scIdx}>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setActivePage(subChild);
                                        }}
                                        className={`w-full flex items-center gap-2 text-left pl-14 pr-4 text-[14px] py-1.5 transition-colors cursor-pointer ${
                                          activePage === subChild ? 'text-[#3b82f6] font-bold bg-white/5' : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-current shrink-0 opacity-60" />
                                        <span className="whitespace-normal break-words leading-tight">{getSidebarItemLabel(subChild)}</span>
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={`p-6 border-t border-slate-700/50 mt-auto ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
          <div className="mb-4">
            <h4 className="text-[13px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Última atualização</h4>
            <p className="text-sm text-slate-300 font-medium">20/05/2027</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden print:overflow-visible print:h-auto min-w-0">
        
        {/* TOPBAR */}
        <header className="print:hidden h-16 sm:h-[72px] bg-white dark:bg-[#0c162c]/80 flex shrink-0 items-center justify-between px-3.5 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-700/50 z-10 w-full shadow-xs">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <button
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                } else {
                  setIsSidebarCollapsed(!isSidebarCollapsed);
                }
              }}
              className="p-2 -ml-1 sm:-ml-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5 flex-shrink-0" />
            </button>
            <h2 className="text-xs sm:text-sm md:text-base lg:text-[19px] font-bold text-[#0c162c] dark:text-white tracking-tight uppercase truncate max-w-[130px] sm:max-w-xs md:max-w-none">
              Planejamento Estratégico 2027-2037
            </h2>
          </div>
          <div className="flex items-center shrink-0">
            {/* BOTÕES DE REDIMENSIONAMENTO DE FONTE - ESCONDIDOS EM TELAS PEQUENAS */}
            <div className="hidden sm:flex items-center">
              <button
                onClick={() => setZoomLevel(prev => Math.max(0.8, Number((prev - 0.1).toFixed(1))))}
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-1.5 lg:mr-2 cursor-pointer"
                aria-label="Diminuir fonte"
                title="Diminuir tamanho da fonte"
              >
                <span className="font-bold text-[14px] lg:text-[15px]">A-</span>
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-1.5 lg:mr-2 text-[15px] lg:text-[16px] font-bold cursor-pointer"
                aria-label="Fonte padrão"
                title="Tamanho de fonte padrão (100%)"
              >
                A
              </button>
              <button
                onClick={() => setZoomLevel(prev => Math.min(1.5, Number((prev + 0.1).toFixed(1))))}
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-1.5 lg:mr-2 cursor-pointer"
                aria-label="Aumentar fonte"
                title="Aumentar tamanho da fonte"
              >
                <span className="font-bold text-[16px] lg:text-[17px]">A+</span>
              </button>
            </div>

            {/* BOTÃO TELA CHEIA (FULLSCREEN) - ESCONDIDO EM TELAS PEQUENAS */}
            <button
              onClick={toggleFullscreen}
              className={`hidden sm:flex w-9 h-9 lg:w-10 lg:h-10 rounded-full items-center justify-center transition-colors mr-2 lg:mr-3 cursor-pointer ${
                isFullscreen
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia (F11)"}
              aria-label="Tela cheia"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4 lg:w-5 lg:h-5" /> : <Maximize2 className="w-4 h-4 lg:w-5 lg:h-5" />}
            </button>

            {/* MODO ESCURO */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Alternar modo escuro"
              title={darkMode ? "Modo Claro" : "Modo Escuro"}
            >
              {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

            {/* BOTÕES DE NAVEGAÇÃO ENTRE PÁGINAS (APÓS O TEMA) */}
            <div className="flex items-center gap-1 sm:gap-1.5 ml-1.5 sm:ml-3 pl-1.5 sm:pl-3 border-l border-slate-200 dark:border-slate-700/60">
              <button
                onClick={() => prevPage && setActivePage(prevPage)}
                disabled={!prevPage}
                className="h-8 px-2 sm:h-9 sm:px-3 rounded-xl flex items-center gap-1 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
                title={prevPage ? `Página Anterior: ${prevPage}` : 'Primeira página'}
                aria-label="Página anterior"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              <button
                onClick={() => nextPage && setActivePage(nextPage)}
                disabled={!nextPage}
                className="h-8 px-2 sm:h-9 sm:px-3 rounded-xl flex items-center gap-1 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
                title={nextPage ? `Próxima Página: ${nextPage}` : 'Última página'}
                aria-label="Próxima página"
              >
                <span className="hidden sm:inline">Próxima</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* BOTÃO IMPRIMIR - ESCONDIDO NO MOBILE */}
            <button
              onClick={() => {
                try {
                  window.print();
                } catch (e) {
                  console.error("Print error:", e);
                }
              }}
              className="hidden md:flex w-9 h-9 sm:w-10 sm:h-10 ml-2 sm:ml-3 rounded-full flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Imprimir página"
              title="Imprimir página (A4 Paisagem)"
            >
              <Printer className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </header>

        {/* CABEÇALHO EXECUTIVO EXCLUSIVO PARA IMPRESSÃO */}
        <div className="hidden print:flex items-center justify-between pb-3 mb-6 border-b-2 border-slate-900 text-slate-900 w-full">
          <div>
            <span className="text-xs font-black tracking-wider uppercase text-slate-600 block">LORENZETTI • Planejamento Estratégico 2027–2037</span>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">{activePage}</h1>
          </div>
          <div className="text-right text-xs text-slate-500 font-medium">
            <span className="block font-bold text-slate-800">Relatório Estratégico</span>
            <span className="text-[10px] text-slate-500">Documento de consulta executiva</span>
          </div>
        </div>

        {/* SCROLLABLE MAIN */}
        <main 
          ref={mainRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-5 lg:p-8 bg-[#F4F7FB] dark:bg-transparent relative print:overflow-visible print:p-0 print:w-full print:max-w-none print:min-w-0 print:h-auto"
        >
          <div 
            className="app-container-max w-full transition-all duration-150 origin-top-left print:w-full print:max-w-none print:min-w-0"
            style={{ 
              zoom: zoomLevel 
            } as React.CSSProperties}
          >
            
            {activePage === 'Relatório Estratégico' || activePage === 'Relatório Estratégico 2027-2037' ? (
              <StrategicReportView setActivePage={setActivePage} />
            ) : activePage === 'Home' ? (
              <HomeView setActivePage={setActivePage} />
            ) : activePage === 'Cenário Macroeconômico' || activePage === 'PIB' || activePage === 'Inflação' || activePage === 'Juros / Selic' || activePage === 'Taxa de Juros Real' || activePage === 'Câmbio / dólar' ? (
              <CenarioMacroeconomicoView setActivePage={setActivePage} activePage={activePage} />
            ) : activePage === 'PIB Agropecuária' ? (
              <AgropecuariaView setActivePage={setActivePage} />
            ) : activePage === 'PIB Indústria' ? (
              <IndustriaView setActivePage={setActivePage} />
            ) : activePage === 'PIB Serviços' ? (
              <ServicosView setActivePage={setActivePage} />
            ) : activePage === 'PIB Investimentos' ? (
              <InvestimentosView setActivePage={setActivePage} />
            ) : activePage === 'PIB Governo' ? (
              <GovernoView setActivePage={setActivePage} />
            ) : activePage === 'Exportação' || activePage === 'PIB Exportações' ? (
              <ExportacoesView setActivePage={setActivePage} />
            ) : activePage === 'PIB Consumo das Famílias' ? (
              <ConsumoView setActivePage={setActivePage} />
            ) : activePage === 'Reforma Tributária' || activePage === 'Reforma tributária' || activePage === 'REFORMA TRIBUTÁRIA' ? (
              <ReformaTributariaView setActivePage={setActivePage} />
            ) : activePage === 'Eleições' || activePage === 'Eleicoes' || activePage === 'ELEIÇÕES' || activePage === 'eleicoes' ? (
              <EleicoesView setActivePage={setActivePage} />
            ) : activePage === 'IDH' ? (
              <IdhView setActivePage={setActivePage} />
            ) : activePage === 'Indústria do Setor Eletroeletrônico' || activePage === 'Confiança do Consumidor' || activePage === 'Confiança do consumidor' || activePage === 'Produção da Indústria' || activePage === 'Sondagem Conjuntural' || activePage === 'SONDAGEM CONJUNTURAL' || activePage === 'Imposição de Sobretaxas' || activePage === 'IMPOSIÇÃO DE SOBRETAXAS' || activePage === 'Balanço Comercial' || activePage === 'BALANÇO COMERCIAL' || activePage === 'Preço de Commodities' || activePage === 'PREÇO DE COMMODITIES' ? (
              <IndustriaEletroeletronicoView setActivePage={setActivePage} activePage={activePage} />
            ) : activePage === 'Emprego e Desemprego' || activePage === 'Emprego e desemprego' || activePage === 'Empregos e Desempregos' || activePage === 'Empregos e Desempregos no Brasil' || activePage === 'Emprego e renda' || activePage === 'Empregos' || activePage === 'Emprego' || activePage === 'Desempregos' || activePage === 'Desemprego' ? (
              <EmpregosDesempregosView setActivePage={setActivePage} activePage={activePage} />
            ) : activePage === 'Rendimento do Brasileiro' || activePage === 'Rendimento' || activePage === 'RENDIMENTO DO BRASILEIRO' ? (
              <RendimentoBrasileiroView setActivePage={setActivePage} />
            ) : activePage === 'Endividamento das Famílias e Empresas' || activePage === 'Endividamento das famílias e empresas' || activePage === 'Endividamento das Famílias' || activePage === 'Endividamento das famílias' || activePage === 'Endividamento das Empresas' || activePage === 'Endividamento das empresas' || activePage === 'Endividamento' || activePage === 'Produção industrial' ? (
              <EndividamentoFamiliasEmpresasView setActivePage={setActivePage} activePage={activePage} />
            ) : activePage === 'Conflitos e Tensões Internacionais' || activePage === 'Conflitos e Tensoes Internacionais' || activePage === 'Geopolítica & Economia Global' || activePage === 'EUA x China' || activePage === 'Rússia x Ucrânia' || activePage === 'Guerra Ucrânia e Rússia' || activePage === 'Guerra Ucrania e Russia' ? (
              <ConflitosTensoesInternacionaisView setActivePage={setActivePage} />
            ) : activePage === 'Economia Mundial' || activePage === 'Economia mundial' || activePage === 'ECONOMIA MUNDIAL' ? (
              <EconomiaMundialView setActivePage={setActivePage} />
            ) : activePage === 'América Latina' || activePage === 'America Latinal' || activePage === 'America Latina' || activePage === 'AMÉRICA LATINA' ? (
              <AmericaLatinaView setActivePage={setActivePage} />
            ) : activePage === 'América do Norte' || activePage === 'America do Norte' || activePage === 'AMÉRICA DO NORTE' ? (
              <AmericaDoNorteView setActivePage={setActivePage} />
            ) : activePage === 'África' || activePage === 'Africa' || activePage === 'ÁFRICA' || activePage === 'AFRICA' ? (
              <AfricaView setActivePage={setActivePage} />
            ) : activePage === 'Ásia' || activePage === 'Asia' || activePage === 'ÁSIA' || activePage === 'ASIA' || activePage === 'China' || activePage === 'Índia' || activePage === 'India' ? (
              <AsiaView 
                setActivePage={setActivePage} 
                initialTopic={['Índia', 'India'].includes(activePage) ? 'india' : 'china'} 
              />
            ) : activePage === 'Europa' || activePage === 'europa' || activePage === 'EUROPA' || activePage === 'União Europeia' || activePage === 'Uniao Europeia' ? (
              <EuropaView setActivePage={setActivePage} />
            ) : activePage === 'Cenário Logístico' || activePage === 'Cenário Logistico' || activePage === 'CENÁRIO LOGÍSTICO' || activePage === 'Cenario Logistico' || activePage === 'CENARIO LOGISTICO' ? (
              <CenarioLogisticoView setActivePage={setActivePage} />
            ) : activePage === 'Commodities' || activePage === 'COMMODITIES' ? (
              <CommoditiesView setActivePage={setActivePage} />
            ) : activePage === 'Cenário Habitacional' || activePage === 'Cenário habitacional' || activePage === 'Cenario Habitacional' || activePage === 'CENÁRIO HABITACIONAL' ? (
              <CenarioHabitacionalView setActivePage={setActivePage} />
            ) : activePage === 'Cenário Mercadológico' || activePage === 'Cenário mercadológico' || activePage === 'Cenario Mercadologico' || activePage === 'CENÁRIO MERCADOLÓGICO' ? (
              <CenarioMercadologicoView setActivePage={setActivePage} />
            ) : activePage === 'Perfil de Consumo' ? (
              <PerfilConsumoView setActivePage={setActivePage} />
            ) : activePage === 'Jornada de Compra' || activePage === 'Jornada e Experiência' ? (
              <JornadaExperienciaView setActivePage={setActivePage} />
            ) : activePage === 'Varejo e Canais' || activePage === 'Transformação do Varejo' || activePage === 'Varejo em Transformação' || activePage === 'E-commerce' ? (
              <VarejoCanaisView 
                setActivePage={setActivePage} 
                initialTab={location.pathname === '/e-commerce' || location.pathname === '/ecommerce' ? 'ecommerce' : 'varejo'} 
              />
            ) : activePage === 'Produto e Inovação' || activePage === 'Tendências de Produto' || activePage === 'Produto e Valor' || activePage === 'Casa Conectada' ? (
              <ProdutoInovacaoView 
                setActivePage={setActivePage} 
                initialTab={location.pathname === '/casa-conectada' ? 'casaconectada' : 'produto'} 
              />
            ) : activePage === 'Estilos de Vida' || activePage === 'Transformações Sociais' ? (
              <TransformacoesSociaisView setActivePage={setActivePage} />
            ) : activePage === 'Programas Sociais' || activePage === 'Programas sociais' || activePage === 'PROGRAMAS SOCIAIS' || activePage === 'Minha Casa Minha Vida' || activePage === 'Programa Reforma Brasil' || activePage === 'Reforma Casa Brasil' ? (
              <ProgramasSociaisView setActivePage={setActivePage} />
            ) : activePage === 'Mercado Imobiliário' || activePage === 'Mercado imobiliário' || activePage === 'MERCADO IMOBILIÁRIO' || activePage === 'Mercado Imobiliario' || activePage === 'Mercado imobiliario' ? (
              <MercadoImobiliarioView setActivePage={setActivePage} />
            ) : activePage === 'Déficit Habitacional' || activePage === 'Deficit Habitacional' || activePage === 'DÉFICIT HABITACIONAL' || activePage === 'deficit-habitacional' ? (
              <DeficitHabitacionalView setActivePage={setActivePage} />
            ) : activePage === 'Lares Unipessoais' || activePage === 'Lares unipessoais' || activePage === 'LARES UNIPESSOAIS' || activePage === 'lares-unipessoais' ? (
              <LaresUnipessoaisView setActivePage={setActivePage} />
            ) : activePage === 'Novo PAC' || activePage === 'NOVO PAC' || activePage === 'Novo Pac' || activePage === 'Novo PAC (Original)' ? (
              <NovoPacView setActivePage={setActivePage} />
            ) : activePage === 'Perfil das gerações' || activePage === 'Carreira e Gerações' || activePage === 'Carreira e gerações' || activePage === 'carreira-geracoes' ? (
              <PerfilGeracoesView setActivePage={setActivePage} />
            ) : activePage === 'Mudança de carreiras' ? (
              <MudancaCarreirasView setActivePage={setActivePage} />
            ) : activePage === 'Empreendedorismo' ? (
              <EmpreendedorismoView setActivePage={setActivePage} />
            ) : activePage === 'Escala 6x1' ? (
              <Escala6x1View setActivePage={setActivePage} />
            ) : activePage === 'Saúde mental no trabalho' || activePage === 'Saúde Mental no Trabalho' || activePage === 'Saude mental no trabalho' || activePage === 'Saude Mental no Trabalho' || activePage === 'saude-mental' ? (
              <SaudeMentalView setActivePage={setActivePage} />
            ) : activePage === 'NR-1' ? (
              <Nr1View setActivePage={setActivePage} />
            ) : activePage === 'Diversidade e inclusão' ? (
              <DiversidadeInclusaoView setActivePage={setActivePage} />
            ) : activePage === 'Assédio no ambiente de trabalho' ? (
              <AssedioTrabalhoView setActivePage={setActivePage} />
            ) : activePage === 'Fenômenos Climáticos' ? (
              <FenomenosClimaticosView setActivePage={setActivePage} />
            ) : activePage === 'Mudanças Climáticas' ? (
              <MudancasClimaticasView setActivePage={setActivePage} />
            ) : activePage === 'Aquecimento Global' ? (
              <AquecimentoGlobalView setActivePage={setActivePage} />
            ) : activePage === 'Top Empresas ESG' ? (
              <TopEmpresasEsgView setActivePage={setActivePage} />
            ) : activePage === 'Concorrentes ESG' ? (
              <ConcorrentesEsgView setActivePage={setActivePage} />
            ) : activePage === 'Energia Renovável' ? (
              <EnergiaRenovavelView setActivePage={setActivePage} />
            ) : activePage === 'Mercado de Carbono' ? (
              <MercadoCarbonoView setActivePage={setActivePage} />
            ) : activePage === 'Marcos Regulatórios' ? (
              <MarcosRegulatoriosView setActivePage={setActivePage} />
            ) : activePage === 'Data Centers (Energia)' ? (
              <DataCentersInfraView setActivePage={setActivePage} />
            ) : activePage === 'Mão de obra qualificada' ? (
              <MaoDeObraQualificadaView setActivePage={setActivePage} />
            ) : activePage === 'Soft skills' ? (
              <SoftSkillsView setActivePage={setActivePage} />
            ) : activePage === 'IA e o futuro do trabalho' ? (
              <IaFuturoTrabalhoView setActivePage={setActivePage} />
            ) : activePage === 'Automação' ? (
              <AutomacaoView setActivePage={setActivePage} />
            ) : activePage === 'Trabalho e Qualificação' ? (
              <MaoDeObraQualificadaView setActivePage={setActivePage} />
            ) : (
              <div className="flex flex-col gap-4 sm:gap-6">
                {getBreadcrumb(activePage)}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white dark:bg-[#0c162c]/80 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700/50 shrink-0 shadow-sm">
                      {getSubthemeIcon(activePage)}
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0c162c] dark:text-white leading-none tracking-tight">{activePage}</h1>
                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">Planejamento Estratégico 2027-2037</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0c162c]/80 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm p-6 sm:p-10 lg:p-16 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[400px] text-center mt-1 sm:mt-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 dark:bg-blue-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-blue-600 dark:text-blue-400">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0c162c] dark:text-white mb-2 sm:mb-3">Conteúdo de {activePage} em Consolidação</h2>
                  <p className="text-slate-600 dark:text-slate-400 max-w-lg text-sm sm:text-base leading-relaxed">
                    Esta seção integra os pilares estratégicos de 2027-2037. As evidências documentais, indicadores de monitoramento e impactos regulatórios estão em processo de consolidação pela equipe de Inteligência Estratégica Corporativa.
                  </p>
                  <button 
                    onClick={() => setActivePage('Home')} 
                    className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                  >
                    <Home className="w-4 h-4" />
                    Voltar para a Home
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* BACK TO TOP BUTTON */}
          <AnimatePresence>
            {showToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors z-30 cursor-pointer"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-6 h-6 stroke-[2.5]" />
              </motion.button>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
