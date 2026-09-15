import { StrategicPageContext } from './types';

export const MERCADO_CARBONO_PAGE: StrategicPageContext = {
  pageId: 'ene-carbono',
  portalRouteId: "ene-carbono",
  pageTitle: 'Mercado de Carbono',
  theme: 'Energia e Infraestrutura',
  subtheme: 'Mercado Regulado de Carbono & SBCE',
  status: 'analyzable',
  description: 'Estruturação do Sistema Brasileiro de Comércio de Emissões (SBCE), Lei 15.042/2024, precificação, cronograma de MRV e transmissão de custos pela cadeia.',

  sources: [
    {
      id: 'fazenda-sbce-lei15042',
      name: 'Ministério da Fazenda / Legislação Federal',
      dateStr: '2024/2026',
      type: 'Legislação federal e regulação oficial',
      url: 'https://www.gov.br/fazenda/pt-br'
    },
    {
      id: 'fazenda-consulta-publica-2026',
      name: 'Ministério da Fazenda — Proposta de Implementação e Consulta Pública do SBCE',
      dateStr: 'Fevereiro 2026',
      type: 'Documento regulatório governamental',
      url: 'https://www.gov.br/fazenda/pt-br/orgaos/spe/assuntos/sustentabilidade/sbce'
    },
    {
      id: 'folha-artigo6-cop29',
      name: 'Folha de S.Paulo / Relatórios COP29',
      dateStr: '2024/2025',
      type: 'Imprensa especializada / Acordos climáticos globais',
      url: 'https://www1.folha.uol.com.br/ambiente/2024/11/cop29-aprova-regras-para-mercado-global-de-carbono.shtml'
    }
  ],

  evidenceIds: [
    'sbce-precificacao-marco-economico',
    'fazenda-consulta-sbce-2026',
    'artigo6-paris-cop29-regras'
  ],

  factualContent: [
    {
      id: 'ene-carbono::statement::marco-legal-lei15042',
      statement: 'A Lei nº 15.042/2024 instituiu o Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa (SBCE), criando as bases para a precificação de emissões no Brasil.',
      kind: 'statement',
      period: '2024',
      block: 'Marco Legal e Regulatório',
      sourceId: 'fazenda-sbce-lei15042',
      evidenceId: 'sbce-precificacao-marco-economico'
    },
    {
      id: 'ene-carbono::statement::cronograma-mrv-2027',
      statement: 'A proposta de implementação submetida a consulta pública pelo Ministério da Fazenda em 2026 prevê o início das obrigações de Monitoramento, Relato e Verificação (MRV) para os primeiros setores a partir de 2027.',
      kind: 'statement',
      period: '2027',
      block: 'Cronograma de Implementação',
      sourceId: 'fazenda-consulta-publica-2026',
      evidenceId: 'fazenda-consulta-sbce-2026'
    },
    {
      id: 'ene-carbono::statement::cobertura-3etapas',
      statement: 'A entrada dos setores produtivos com emissões acima do teto regulatório foi proposta em 3 etapas sucessivas: 2027, até 2029 e até 2031.',
      kind: 'statement',
      period: '2027–2031',
      block: 'Cobertura Setorial e Etapas',
      sourceId: 'fazenda-consulta-publica-2026',
      evidenceId: 'fazenda-consulta-sbce-2026'
    },
    {
      id: 'ene-carbono::statement::conexao-internacional-artigo6',
      statement: 'A COP29 aprovou as regras operacionais para o Artigo 6 do Acordo de Paris, viabilizando mecanismos multilaterais de transferência de resultados de mitigação (ITMOs) e comércio internacional de créditos.',
      kind: 'statement',
      period: '2024/2025',
      block: 'Conexão Internacional e Acordo de Paris',
      sourceId: 'folha-artigo6-cop29',
      evidenceId: 'artigo6-paris-cop29-regras'
    }
  ],

  existingAnalysis: [
    'A precificação de carbono em setores industriais intensivos (aço, alumínio, química e cerâmica) pode provocar transmissão de custos ao longo da cadeia de suprimentos da indústria de bens de consumo.',
    'Exigências de dados de intensidade de carbono podem influenciar critérios de homologação e relacionamento com a cadeia de fornecimento.',
    'Projetos fabris de eficiência energética e substituição de combustíveis fósseis podem adquirir dimensão econômica mensurável conforme créditos e penalidades entrem em vigor.',
    'Regulações internacionais de fronteira de carbono (como o CBAM europeu) podem exigir rastreabilidade de emissões para exportações manufaturadas.'
  ]
};
