import { StrategicPageContext } from './types';
import { ELEICOES_EVIDENCES } from '../evidences/eleicoes';

export const ELEICOES_PAGE: StrategicPageContext = {
  pageId: 'eco-eleicoes',
  pageTitle: 'Eleições 2026 — Cenários para o Ambiente de Negócios',
  theme: 'Economia Brasileira',
  subtheme: 'Eleições',
  status: 'analyzable',
  description: 'Mapeamento de pesquisas de intenção de voto, cenários de 1º e 2º turno, propostas macroeconômicas e implicações para o ambiente corporativo.',

  sources: [
    {
      id: 'nexus-btg-2026',
      name: 'Instituto Nexus / BTG Pactual — Pesquisa Eleitoral',
      dateStr: 'agosto/2026',
      type: 'Pesquisa de Opinião Pública Registrada'
    }
  ],

  evidenceIds: ELEICOES_EVIDENCES.map(e => String(e.id)),

  factualContent: [
    {
      id: 'eleicoes::pesquisa::1turno-lula',
      statement: 'Na pesquisa estimulada de 1º turno (Nexus/BTG, ago/2026), Lula lidera as intenções de voto com 37%.',
      kind: 'distribution',
      value: 37.0,
      unit: '%',
      period: 'agosto/2026',
      block: 'Cenário 1º Turno',
      sourceId: 'nexus-btg-2026',
      evidenceId: '1'
    },
    {
      id: 'eleicoes::pesquisa::1turno-flavio',
      statement: 'Na pesquisa estimulada de 1º turno (Nexus/BTG, ago/2026), Flávio Bolsonaro registra 31% das intenções de voto.',
      kind: 'distribution',
      value: 31.0,
      unit: '%',
      period: 'agosto/2026',
      block: 'Cenário 1º Turno',
      sourceId: 'nexus-btg-2026',
      evidenceId: '1'
    },
    {
      id: 'eleicoes::pesquisa::1turno-diferenca',
      statement: 'A diferença entre os dois principais candidatos no 1º turno é de 6 pontos percentuais.',
      kind: 'comparison',
      value: 6.0,
      unit: 'p.p.',
      period: 'agosto/2026',
      block: 'Cenário 1º Turno',
      sourceId: 'nexus-btg-2026',
      evidenceId: '1'
    },
    {
      id: 'eleicoes::pesquisa::2turno-lula',
      statement: 'Na simulação de 2º turno entre Lula e Flávio Bolsonaro (Nexus/BTG, ago/2026), Lula registra 46% das intenções de voto.',
      kind: 'distribution',
      value: 46.0,
      unit: '%',
      period: 'agosto/2026',
      block: 'Simulação 2º Turno',
      sourceId: 'nexus-btg-2026',
      evidenceId: '1'
    },
    {
      id: 'eleicoes::pesquisa::2turno-flavio',
      statement: 'Na simulação de 2º turno (Nexus/BTG, ago/2026), Flávio Bolsonaro alcança 45% das intenções de voto.',
      kind: 'distribution',
      value: 45.0,
      unit: '%',
      period: 'agosto/2026',
      block: 'Simulação 2º Turno',
      sourceId: 'nexus-btg-2026',
      evidenceId: '1'
    },
    {
      id: 'eleicoes::pesquisa::2turno-empate',
      statement: 'O cenário de 2º turno aponta empate técnico entre os candidatos com diferença de apenas 1 ponto percentual.',
      kind: 'comparison',
      value: 1.0,
      unit: 'p.p.',
      period: 'agosto/2026',
      block: 'Simulação 2º Turno',
      sourceId: 'nexus-btg-2026',
      evidenceId: '1'
    }
  ],

  existingAnalysis: [
    'O quadro eleitoral reflete um ambiente de polarização acentuada, no qual a disputa de 2º turno tende a ser decidida pela capacidade de conquista do eleitorado de centro e pela mitigação das taxas de rejeição.',
    'A volatilidade política pré-eleitoral pode gerar momentos de instabilidade em taxas de câmbio, juros futuros e apetite por investimentos de longo prazo.',
    'Impacto Lorenzetti: os ciclos eleitorais podem afetar as expectativas de confiança do consumidor e a liberação de crédito imobiliário, recomendando acompanhamento preventivo das políticas habitacionais e de incentivo à renda propostas pelas diferentes candidaturas.'
  ]
};
