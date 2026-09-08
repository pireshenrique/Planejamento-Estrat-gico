import type { ThreeItems, StrategicObserveBlock } from './types';

export interface JurosRealKpiItem {
  title: string;
  value: string;
  subtitle: string;
  detail: string;
}

export interface JurosRealStrategicAnalysis {
  observe: StrategicObserveBlock;
  companyImpact: {
    summary: string;
    notes: ThreeItems<string>;
  };
}

export interface JurosRealData {
  kpis: {
    atual: JurosRealKpiItem;
    projecaoIfi: JurosRealKpiItem;
    captacaoCorporativa: JurosRealKpiItem;
  };
  strategicAnalysis: JurosRealStrategicAnalysis;
}

export interface RealInterestRankingItem {
  pos: number;
  code: string;
  country: string;
  rate: string;
  flag: string;
  bg: string;
}

export interface RealInterestRankingMeta {
  title: string;
  referencePeriod: string;
  subtitle: string;
  brazilHighlightDescription: string;
  sourceNote: string;
}

export const JUROS_REAL_DATA: JurosRealData = {
  kpis: {
    atual: {
      title: 'JURO REAL ATUAL',
      value: '9,33%',
      subtitle: 'Juro real ex-ante — próximos 12 meses.',
      detail: '2º lugar global (após Selic 14%).',
    },
    projecaoIfi: {
      title: 'JURO REAL — PROJEÇÃO IFI',
      value: '7,5%',
      subtitle: 'Projeção para 2026.',
      detail: '5,5% em 2027. (Selic: 14% → 12% | IPCA: 5% → 4%)',
    },
    captacaoCorporativa: {
      title: 'CAPTAÇÃO CORPORATIVA',
      value: '−12,1%',
      subtitle: 'Volume captado em debêntures no 1º semestre de 2026.',
      detail: '59,4% atreladas ao CDI.',
    },
  },
  strategicAnalysis: {
    observe: {
      summary: 'Trajetória do juro real, ritmo dos cortes e reação do mercado de crédito corporativo.',
      notes: [
        'Acompanhar a trajetória projetada dos juros reais, que a IFI estima em 7,5% em 2026 e 5,5% em 2027, condicionada à queda da Selic e da inflação.',
        'Monitorar a manutenção do juro real em patamar elevado: após a Selic cair para 14%, o Brasil ainda registra 9,33% de juro real e ocupa o 2º lugar no ranking da MoneYou / Lev Intelligence.',
        'Observar como empresas continuam adaptando suas estratégias de captação ao custo elevado do crédito, incluindo operações menores e mais frequentes no mercado de dívida.',
      ],
    },
    companyImpact: {
      summary: 'Custo de capital ainda elevado, sensibilidade ao CDI e possível flexibilização gradual das condições financeiras.',
      notes: [
        'O juro real atual de 9,33% pode manter elevado o custo de capital de giro e exigir maior seletividade em novos investimentos.',
        'A elevada participação de debêntures atreladas ao CDI mantém parte do custo de financiamento corporativo sensível à trajetória da Selic.',
        'A queda projetada do juro real para 5,5% em 2027 pode ampliar gradualmente o espaço para redução do custo de capital e reavaliação de projetos de médio prazo, caso a trajetória de desinflação se confirme.',
      ],
    },
  },
};

export const REAL_INTEREST_RANKING: RealInterestRankingItem[] = [
  { pos: 1, code: 'RU', country: 'Rússia', rate: '9,67%', flag: '🇷🇺', bg: 'bg-blue-50/40 dark:bg-blue-950/20' },
  { pos: 2, code: 'BR', country: 'Brasil', rate: '9,33%', flag: '🇧🇷', bg: 'bg-emerald-50/50 dark:bg-emerald-950/20' },
  { pos: 3, code: 'MX', country: 'México', rate: '5,09%', flag: '🇲🇽', bg: '' },
  { pos: 4, code: 'ZA', country: 'África do Sul', rate: '4,62%', flag: '🇿🇦', bg: '' },
  { pos: 5, code: 'ID', country: 'Indonésia', rate: '3,31%', flag: '🇮🇩', bg: '' },
  { pos: 6, code: 'HU', country: 'Hungria', rate: '3,02%', flag: '🇭🇺', bg: '' },
  { pos: 7, code: 'CO', country: 'Colômbia', rate: '2,63%', flag: '🇨🇴', bg: '' },
  { pos: 8, code: 'PL', country: 'Polônia', rate: '2,61%', flag: '🇵🇱', bg: '' },
  { pos: 9, code: 'CZ', country: 'República Tcheca', rate: '2,20%', flag: '🇨🇿', bg: '' },
  { pos: 10, code: 'IN', country: 'Índia', rate: '2,19%', flag: '🇮🇳', bg: '' },
];

export const REAL_INTEREST_RANKING_META: RealInterestRankingMeta = {
  title: 'Ranking Global de Juros Reais',
  referencePeriod: 'Ago/26',
  subtitle: 'Taxas ex-ante descontadas da inflação projetada para 12 meses | MoneYou / Lev Intelligence',
  brazilHighlightDescription: '2º maior juro real do mundo após corte da Selic para 14% (0,34 p.p. abaixo da Rússia)',
  sourceNote: 'Fonte: MoneYou / Lev Intelligence — levantamento de agosto/2026. Taxa real ex-ante baseada na inflação projetada para 12 meses.',
};

export const BRAZIL_REAL_INTEREST: RealInterestRankingItem =
  REAL_INTEREST_RANKING.find((item) => item.code === 'BR') || REAL_INTEREST_RANKING[1];

export const LEADER_REAL_INTEREST: RealInterestRankingItem =
  REAL_INTEREST_RANKING.find((item) => item.pos === 1) || REAL_INTEREST_RANKING[0];

