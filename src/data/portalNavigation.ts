/**
 * ESTRUTURA OFICIAL DE SUBTEMAS DO PORTAL ESTRATÉGICO LORENZETTI (2027-2037)
 * 
 * Regras de Governança:
 * - Não inclui a Home
 * - Não inclui o Relatório Estratégico
 * - Não inclui páginas técnicas ou de debug
 * - Não inclui categorias principais da sidebar como subtemas
 * - Itens estruturais que possuem páginas dedicadas ou tabs navegam como subtemas
 */

export interface SubthemeItem {
  id: string;
  name: string;
  groupName: string;
  path?: string;
  isPlaceholder?: boolean;
}

export interface StrategicGroup {
  name: string;
  iconName: string;
  subthemes: SubthemeItem[];
}

export const PORTAL_STRATEGIC_GROUPS: StrategicGroup[] = [
  {
    name: 'Geopolítica & Economia Global',
    iconName: 'ShieldAlert',
    subthemes: [
      { id: 'geo-conflitos', name: 'Conflitos e Tensões Internacionais', groupName: 'Geopolítica & Economia Global' },
      { id: 'geo-america-latina', name: 'América Latina', groupName: 'Geopolítica & Economia Global' },
      { id: 'geo-america-norte', name: 'América do Norte', groupName: 'Geopolítica & Economia Global' },
      { id: 'geo-africa', name: 'África', groupName: 'Geopolítica & Economia Global' },
      { id: 'geo-asia', name: 'Ásia', groupName: 'Geopolítica & Economia Global' },
      { id: 'geo-europa', name: 'Europa', groupName: 'Geopolítica & Economia Global' },
      { id: 'geo-logistica', name: 'Cenário Logístico', groupName: 'Geopolítica & Economia Global' },
      { id: 'geo-commodities', name: 'Commodities', groupName: 'Geopolítica & Economia Global' },
    ]
  },
  {
    name: 'Economia Brasileira',
    iconName: 'LineChart',
    subthemes: [
      { id: 'eco-macro', name: 'Cenário Macroeconômico', groupName: 'Economia Brasileira' },
      { id: 'eco-exportacao', name: 'Exportação', groupName: 'Economia Brasileira' },
      { id: 'eco-emprego', name: 'Emprego e Desemprego', groupName: 'Economia Brasileira' },
      { id: 'eco-rendimento', name: 'Rendimento do Brasileiro', groupName: 'Economia Brasileira' },
      { id: 'eco-endividamento', name: 'Endividamento das Famílias e Empresas', groupName: 'Economia Brasileira' },
      { id: 'eco-eletroeletronico', name: 'Indústria do Setor Eletroeletrônico', groupName: 'Economia Brasileira' },
      { id: 'eco-idh', name: 'IDH', groupName: 'Economia Brasileira' },
      { id: 'eco-pac', name: 'Novo PAC', groupName: 'Economia Brasileira' },
      { id: 'eco-reforma-tributaria', name: 'Reforma Tributária', groupName: 'Economia Brasileira' },
      { id: 'eco-eleicoes', name: 'Eleições', groupName: 'Economia Brasileira' },
    ]
  },
  {
    name: 'Cenário Habitacional',
    iconName: 'Home',
    subthemes: [
      { id: 'hab-mercado', name: 'Mercado Imobiliário', groupName: 'Cenário Habitacional' },
      { id: 'hab-deficit', name: 'Déficit Habitacional', groupName: 'Cenário Habitacional' },
      { id: 'hab-programas', name: 'Programas Sociais', groupName: 'Cenário Habitacional' },
      { id: 'hab-lares', name: 'Lares Unipessoais', groupName: 'Cenário Habitacional' },
    ]
  },
  {
    name: 'Cenário Mercadológico',
    iconName: 'Store',
    subthemes: [
      { id: 'mer-perfil', name: 'Perfil de Consumo', groupName: 'Cenário Mercadológico' },
      { id: 'mer-jornada', name: 'Jornada de Compra', groupName: 'Cenário Mercadológico' },
      { id: 'mer-varejo', name: 'Varejo e Canais', groupName: 'Cenário Mercadológico' },
      { id: 'mer-produto', name: 'Produto e Inovação', groupName: 'Cenário Mercadológico' },
      { id: 'mer-estilos', name: 'Estilos de Vida', groupName: 'Cenário Mercadológico' },
    ]
  },
  {
    name: 'Meio Ambiente e Clima',
    iconName: 'Leaf',
    subthemes: [
      { id: 'amb-fenomenos', name: 'Fenômenos Climáticos', groupName: 'Meio Ambiente e Clima' },
      { id: 'amb-mudancas', name: 'Mudanças Climáticas', groupName: 'Meio Ambiente e Clima' },
      { id: 'amb-aquecimento', name: 'Aquecimento Global', groupName: 'Meio Ambiente e Clima' },
    ]
  },
  {
    name: 'ESG',
    iconName: 'Award',
    subthemes: [
      { id: 'esg-top', name: 'Top Empresas ESG', groupName: 'ESG' },
      { id: 'esg-concorrentes', name: 'Concorrentes ESG', groupName: 'ESG' },
    ]
  },
  {
    name: 'Energia e Infraestrutura',
    iconName: 'Zap',
    subthemes: [
      { id: 'ene-renovavel', name: 'Energia Renovável', groupName: 'Energia e Infraestrutura' },
      { id: 'ene-carbono', name: 'Mercado de Carbono', groupName: 'Energia e Infraestrutura' },
      { id: 'ene-marcos', name: 'Marcos Regulatórios', groupName: 'Energia e Infraestrutura' },
      { id: 'ene-datacenters', name: 'Data Centers (Energia)', groupName: 'Energia e Infraestrutura' },
    ]
  },
  {
    name: 'Carreira e Gerações',
    iconName: 'Briefcase',
    subthemes: [
      { id: 'car-perfil', name: 'Perfil das gerações', groupName: 'Carreira e Gerações' },
      { id: 'car-mudanca', name: 'Mudança de carreiras', groupName: 'Carreira e Gerações' },
      { id: 'car-empreendedorismo', name: 'Empreendedorismo', groupName: 'Carreira e Gerações' },
      { id: 'car-escala', name: 'Escala 6x1', groupName: 'Carreira e Gerações' },
    ]
  },
  {
    name: 'Ambiente de Trabalho e Bem-Estar',
    iconName: 'HeartPulse',
    subthemes: [
      { id: 'tra-saude', name: 'Saúde mental no trabalho', groupName: 'Ambiente de Trabalho e Bem-Estar' },
      { id: 'tra-nr1', name: 'NR-1', groupName: 'Ambiente de Trabalho e Bem-Estar' },
      { id: 'tra-diversidade', name: 'Diversidade e inclusão', groupName: 'Ambiente de Trabalho e Bem-Estar' },
      { id: 'tra-assedio', name: 'Assédio no ambiente de trabalho', groupName: 'Ambiente de Trabalho e Bem-Estar' },
    ]
  },
  {
    name: 'Trabalho e Qualificação',
    iconName: 'GraduationCap',
    subthemes: [
      { id: 'tq-maodeobra', name: 'Mão de obra qualificada', groupName: 'Trabalho e Qualificação' },
      { id: 'tq-softskills', name: 'Soft skills', groupName: 'Trabalho e Qualificação' },
      { id: 'tq-iafuturo', name: 'IA e o futuro do trabalho', groupName: 'Trabalho e Qualificação' },
      { id: 'tq-automacao', name: 'Automação', groupName: 'Trabalho e Qualificação' },
    ]
  }
];

// Lista linear de todos os subtemas
export const ALL_PORTAL_SUBTHEMES: SubthemeItem[] = PORTAL_STRATEGIC_GROUPS.flatMap(g => g.subthemes);

export function getSubthemesCount(): number {
  return ALL_PORTAL_SUBTHEMES.length;
}

export function getAllSubthemes(): SubthemeItem[] {
  return ALL_PORTAL_SUBTHEMES;
}
