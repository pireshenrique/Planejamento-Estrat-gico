import { MacroeconomicKpi } from './types';

export interface EndividamentoKpiItem extends MacroeconomicKpi {
  valueSuffix?: string;
}

export interface ModalidadeDividaItem {
  label: string;
  value: number;
}

export interface CausaEndividamentoItem {
  label: string;
  value: number;
}

export interface CustoCreditoItem {
  label: string;
  value: string;
}

export interface VulnerabilidadeRendaItem {
  label: string;
  endividadas: number;
  inadimplentes: number;
}

export interface BetsIndicadorItem {
  label: string;
  value: number;
}

export interface BetsFamiliasData {
  amostra: {
    apostadores: number;
    entrevistados: number;
  };
  indicadores: {
    endividamento: BetsIndicadorItem;
    pressaoRenda: BetsIndicadorItem;
    perdasFinanceiras: BetsIndicadorItem;
  };
  gastoAcimaMil: {
    anterior: {
      ano: number;
      value: number;
    };
    atual: {
      ano: number;
      value: number;
    };
  };
  perfilEndividados: {
    value: number;
  };
}

export interface InadimplenciaMensalItem {
  mes: string;
  value: number;
}

export interface ComposicaoSetorialItem {
  label: string;
  anterior: number;
  atual: number;
}

export interface ComposicaoSetorialData {
  periodoAnterior: string;
  periodoAtual: string;
  setores: ComposicaoSetorialItem[];
}

export interface RecuperacaoExtrajudicialItem {
  ano: number;
  value: number;
}

export interface RecuperacoesExtrajudiciaisData {
  serie: RecuperacaoExtrajudicialItem[];
  parcial: {
    ano: number;
    acumuladoAte: string;
  };
}

export interface DemandaCreditoItem {
  label: string;
  value: number;
}

export interface CreditoEmpresarialData {
  demanda: {
    periodo: string;
    crescimentoGeral: number;
    segmentos: {
      mpes: DemandaCreditoItem;
      grandes: DemandaCreditoItem;
      medias: DemandaCreditoItem;
    };
  };
  oferta: {
    status: string;
    periodoExpectativa: string;
  };
}

export interface EndividamentoData {
  familias: {
    kpis: {
      endividamentoBacen: MacroeconomicKpi;
      familiasEndividadas: MacroeconomicKpi;
      rendaComprometida: MacroeconomicKpi;
    };
    modalidadesDivida: {
      cartaoCredito: ModalidadeDividaItem;
      carnes: ModalidadeDividaItem;
      creditoPessoal: ModalidadeDividaItem;
      financiamentoCasa: ModalidadeDividaItem;
      financiamentoCarro: ModalidadeDividaItem;
    };
    causasEndividamento: {
      desempregoPerdaRenda: CausaEndividamentoItem;
      gastosEmergencia: CausaEndividamentoItem;
      descontroleFinanceiro: CausaEndividamentoItem;
      apoioFamiliaresAmigos: CausaEndividamentoItem;
      atrasoContasBasicas: CausaEndividamentoItem;
    };
    custoCredito: {
      taxaMediaPessoasFisicas: CustoCreditoItem;
      creditoRotativoCartao: CustoCreditoItem;
    };
    vulnerabilidadeRenda: {
      ateTresSalariosMinimos: VulnerabilidadeRendaItem;
      acimaDezSalariosMinimos: VulnerabilidadeRendaItem;
    };
    bets: BetsFamiliasData;
  };
  empresas: {
    kpis: {
      inadimplenciaEmpresarial: MacroeconomicKpi;
      dividasNegativadas: MacroeconomicKpi;
      recuperacoesJudiciais: EndividamentoKpiItem;
    };
    inadimplenciaMensal: InadimplenciaMensalItem[];
    composicaoSetorial: ComposicaoSetorialData;
    recuperacoesExtrajudiciais: RecuperacoesExtrajudiciaisData;
    creditoEmpresarial: CreditoEmpresarialData;
  };
}

export const ENDIVIDAMENTO_DATA: EndividamentoData = {
  familias: {
    kpis: {
      endividamentoBacen: {
        title: 'ENDIVIDAMENTO 2025',
        value: '49,7%',
        context: '+1,3 p.p. vs. 2024',
        explanation: 'Relação entre saldo das dívidas e renda familiar.',
        source: 'Banco Central',
      },
      familiasEndividadas: {
        title: 'FAMÍLIAS ENDIVIDADAS',
        value: '82,0%',
        context: 'Jul/26 • Nível recorde',
        explanation: 'Famílias com algum tipo de dívida.',
        source: 'CNC — Peic',
      },
      rendaComprometida: {
        title: 'RENDA COMPROMETIDA',
        value: '29,5%',
        context: '7,2 meses de comprometimento médio',
        explanation: 'Parcela média do orçamento comprometida com dívidas.',
        source: 'CNC — Peic',
      },
    },
    modalidadesDivida: {
      cartaoCredito: {
        label: 'Cartão de crédito',
        value: 85.3,
      },
      carnes: {
        label: 'Carnês',
        value: 16.1,
      },
      creditoPessoal: {
        label: 'Crédito pessoal',
        value: 13.0,
      },
      financiamentoCasa: {
        label: 'Financiamento de casa',
        value: 9.6,
      },
      financiamentoCarro: {
        label: 'Financiamento de carro',
        value: 9.0,
      },
    },
    causasEndividamento: {
      desempregoPerdaRenda: {
        label: 'Desemprego ou perda de renda',
        value: 38,
      },
      gastosEmergencia: {
        label: 'Gastos de emergência',
        value: 16,
      },
      descontroleFinanceiro: {
        label: 'Descontrole ou desorganização financeira',
        value: 13,
      },
      apoioFamiliaresAmigos: {
        label: 'Apoio financeiro a familiares ou amigos',
        value: 10,
      },
      atrasoContasBasicas: {
        label: 'Atraso de contas básicas',
        value: 7,
      },
    },
    custoCredito: {
      taxaMediaPessoasFisicas: {
        label: 'Taxa média de juros para pessoas físicas',
        value: '~61% a.a.',
      },
      creditoRotativoCartao: {
        label: 'Juros do crédito rotativo do cartão',
        value: '>400% a.a.',
      },
    },
    vulnerabilidadeRenda: {
      ateTresSalariosMinimos: {
        label: 'Até 3 Salários Mínimos',
        endividadas: 84.9,
        inadimplentes: 38.5,
      },
      acimaDezSalariosMinimos: {
        label: 'Acima de 10 Salários Mínimos',
        endividadas: 72.0,
        inadimplentes: 15.1,
      },
    },
    bets: {
      amostra: {
        apostadores: 355,
        entrevistados: 2724,
      },
      indicadores: {
        endividamento: {
          label: 'ENDIVIDAMENTO',
          value: 39.7,
        },
        pressaoRenda: {
          label: 'PRESSÃO SOBRE A RENDA',
          value: 52.4,
        },
        perdasFinanceiras: {
          label: 'PERDAS FINANCEIRAS',
          value: 68.7,
        },
      },
      gastoAcimaMil: {
        anterior: {
          ano: 2025,
          value: 18.3,
        },
        atual: {
          ano: 2026,
          value: 30.1,
        },
      },
      perfilEndividados: {
        value: 46.8,
      },
    },
  },
  empresas: {
    kpis: {
      inadimplenciaEmpresarial: {
        title: 'INADIMPLÊNCIA EMPRESARIAL',
        value: '9,1 milhões',
        context: 'Jun/26 • Recorde da série',
        explanation: 'Empresas com dívidas vencidas e não pagas.',
        source: 'Serasa Experian',
      },
      dividasNegativadas: {
        title: 'DÍVIDAS NEGATIVADAS',
        value: 'R$ 232,9 bi',
        context: 'Jun/26 • 7,3 dívidas em atraso por empresa',
        explanation: 'Volume total de dívidas empresariais negativadas.',
        source: 'Serasa Experian',
      },
      recuperacoesJudiciais: {
        title: 'RECUPERAÇÕES JUDICIAIS',
        value: '6.341',
        valueSuffix: 'casos',
        context: '+65,8% vs. 2º tri/23',
        explanation: 'Pedidos de recuperação judicial no 2º tri/26.',
        source: 'Folha de S.Paulo / Serasa Experian',
      },
    },
    inadimplenciaMensal: [
      { mes: 'jun/25', value: 7.8 },
      { mes: 'jul/25', value: 8.0 },
      { mes: 'ago/25', value: 8.1 },
      { mes: 'set/25', value: 8.4 },
      { mes: 'out/25', value: 8.7 },
      { mes: 'nov/25', value: 8.9 },
      { mes: 'dez/25', value: 8.9 },
      { mes: 'jan/26', value: 8.7 },
      { mes: 'fev/26', value: 8.8 },
      { mes: 'mar/26', value: 8.9 },
      { mes: 'abr/26', value: 9.0 },
      { mes: 'mai/26', value: 9.0 },
      { mes: 'jun/26', value: 9.1 },
    ],
    composicaoSetorial: {
      periodoAnterior: 'jun/25',
      periodoAtual: 'jun/26',
      setores: [
        {
          label: 'Serviços',
          anterior: 53.8,
          atual: 55.7,
        },
        {
          label: 'Comércio',
          anterior: 33.9,
          atual: 32.2,
        },
        {
          label: 'Indústria',
          anterior: 8.0,
          atual: 8.0,
        },
        {
          label: 'Outros',
          anterior: 3.2,
          atual: 3.1,
        },
        {
          label: 'Primário',
          anterior: 1.0,
          atual: 0.9,
        },
      ],
    },
    recuperacoesExtrajudiciais: {
      serie: [
        { ano: 2020, value: 12 },
        { ano: 2021, value: 17 },
        { ano: 2022, value: 20 },
        { ano: 2023, value: 43 },
        { ano: 2024, value: 66 },
        { ano: 2025, value: 82 },
        { ano: 2026, value: 44 },
      ],
      parcial: {
        ano: 2026,
        acumuladoAte: '18/agosto',
      },
    },
    creditoEmpresarial: {
      demanda: {
        periodo: '12 MESES ATÉ JUN/26',
        crescimentoGeral: 9.2,
        segmentos: {
          mpes: {
            label: 'MPEs*',
            value: 9.2,
          },
          grandes: {
            label: 'Grandes',
            value: 7.8,
          },
          medias: {
            label: 'Médias',
            value: 7.4,
          },
        },
      },
      oferta: {
        status: 'MAIS RESTRITIVA',
        periodoExpectativa: '3º tri/26',
      },
    },
  },
};
