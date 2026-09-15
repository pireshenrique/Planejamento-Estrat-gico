import { StrategicPageContext } from './types';
import { ENDIVIDAMENTO_DATA } from '../economia-brasileira/endividamento';

const fam = ENDIVIDAMENTO_DATA.familias;

export const ENDIVIDAMENTO_FAMILIAS_PAGE: StrategicPageContext = {
  pageId: 'endividamento-familias',
  pageTitle: 'Endividamento das Famílias',
  theme: 'Economia Brasileira',
  subtheme: 'Endividamento',
  status: 'analyzable',
  description: 'Visão geral do endividamento das famílias brasileiras e o seu impacto na renda e no potencial de consumo.',

  sources: [
    {
      id: 'bacen',
      name: 'Banco Central do Brasil',
      dateStr: '2025/2026',
      type: 'Dado público'
    },
    {
      id: 'cnc-peic',
      name: 'CNC — Peic',
      dateStr: '2026',
      type: 'Pesquisa'
    }
  ],
  evidenceIds: [],

  factualContent: [
    // KPIs
    {
      id: 'endividamento-familias::kpi::endividamento-bacen',
      statement: `Endividamento 2025: ${fam.kpis.endividamentoBacen.value} (${fam.kpis.endividamentoBacen.context}). ${fam.kpis.endividamentoBacen.explanation}`,
      kind: 'kpi',
      value: 49.7,
      unit: '%',
      block: 'KPIs',
      sourceId: 'bacen',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::kpi::familias-endividadas',
      statement: `Famílias Endividadas: ${fam.kpis.familiasEndividadas.value} (${fam.kpis.familiasEndividadas.context}). ${fam.kpis.familiasEndividadas.explanation}`,
      kind: 'kpi',
      value: 82.0,
      unit: '%',
      block: 'KPIs',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::kpi::renda-comprometida',
      statement: `Renda Comprometida: ${fam.kpis.rendaComprometida.value} (${fam.kpis.rendaComprometida.context}). ${fam.kpis.rendaComprometida.explanation}`,
      kind: 'kpi',
      value: 29.5,
      unit: '%',
      block: 'KPIs',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },

    // Modalidades de Dívida
    {
      id: 'endividamento-familias::modalidade::cartao-credito',
      statement: `Modalidade de dívida — ${fam.modalidadesDivida.cartaoCredito.label}: ${fam.modalidadesDivida.cartaoCredito.value.toLocaleString('pt-BR')}% das famílias endividadas.`,
      kind: 'ranking',
      group: 'Modalidades de dívida',
      value: fam.modalidadesDivida.cartaoCredito.value,
      unit: '%',
      block: 'Modalidades de dívida',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::modalidade::carnes',
      statement: `Modalidade de dívida — ${fam.modalidadesDivida.carnes.label}: ${fam.modalidadesDivida.carnes.value.toLocaleString('pt-BR')}% das famílias endividadas.`,
      kind: 'ranking',
      group: 'Modalidades de dívida',
      value: fam.modalidadesDivida.carnes.value,
      unit: '%',
      block: 'Modalidades de dívida',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::modalidade::credito-pessoal',
      statement: `Modalidade de dívida — ${fam.modalidadesDivida.creditoPessoal.label}: ${fam.modalidadesDivida.creditoPessoal.value.toLocaleString('pt-BR')}% das famílias endividadas.`,
      kind: 'ranking',
      group: 'Modalidades de dívida',
      value: fam.modalidadesDivida.creditoPessoal.value,
      unit: '%',
      block: 'Modalidades de dívida',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::modalidade::financiamento-casa',
      statement: `Modalidade de dívida — ${fam.modalidadesDivida.financiamentoCasa.label}: ${fam.modalidadesDivida.financiamentoCasa.value.toLocaleString('pt-BR')}% das famílias endividadas.`,
      kind: 'ranking',
      group: 'Modalidades de dívida',
      value: fam.modalidadesDivida.financiamentoCasa.value,
      unit: '%',
      block: 'Modalidades de dívida',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::modalidade::financiamento-carro',
      statement: `Modalidade de dívida — ${fam.modalidadesDivida.financiamentoCarro.label}: ${fam.modalidadesDivida.financiamentoCarro.value.toLocaleString('pt-BR')}% das famílias endividadas.`,
      kind: 'ranking',
      group: 'Modalidades de dívida',
      value: fam.modalidadesDivida.financiamentoCarro.value,
      unit: '%',
      block: 'Modalidades de dívida',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },

    // Causas do Endividamento
    {
      id: 'endividamento-familias::causa::desemprego-perda-renda',
      statement: `Causa do endividamento — ${fam.causasEndividamento.desempregoPerdaRenda.label}: ${fam.causasEndividamento.desempregoPerdaRenda.value}%.`,
      kind: 'ranking',
      group: 'Causas do endividamento',
      value: fam.causasEndividamento.desempregoPerdaRenda.value,
      unit: '%',
      block: 'Causas do endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::causa::gastos-emergencia',
      statement: `Causa do endividamento — ${fam.causasEndividamento.gastosEmergencia.label}: ${fam.causasEndividamento.gastosEmergencia.value}%.`,
      kind: 'ranking',
      group: 'Causas do endividamento',
      value: fam.causasEndividamento.gastosEmergencia.value,
      unit: '%',
      block: 'Causas do endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::causa::descontrole-financeiro',
      statement: `Causa do endividamento — ${fam.causasEndividamento.descontroleFinanceiro.label}: ${fam.causasEndividamento.descontroleFinanceiro.value}%.`,
      kind: 'ranking',
      group: 'Causas do endividamento',
      value: fam.causasEndividamento.descontroleFinanceiro.value,
      unit: '%',
      block: 'Causas do endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::causa::apoio-familiares-amigos',
      statement: `Causa do endividamento — ${fam.causasEndividamento.apoioFamiliaresAmigos.label}: ${fam.causasEndividamento.apoioFamiliaresAmigos.value}%.`,
      kind: 'ranking',
      group: 'Causas do endividamento',
      value: fam.causasEndividamento.apoioFamiliaresAmigos.value,
      unit: '%',
      block: 'Causas do endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::causa::atraso-contas-basicas',
      statement: `Causa do endividamento — ${fam.causasEndividamento.atrasoContasBasicas.label}: ${fam.causasEndividamento.atrasoContasBasicas.value}%.`,
      kind: 'ranking',
      group: 'Causas do endividamento',
      value: fam.causasEndividamento.atrasoContasBasicas.value,
      unit: '%',
      block: 'Causas do endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },

    // Custo do Crédito
    {
      id: 'endividamento-familias::custo::taxa-media-pf',
      statement: `${fam.custoCredito.taxaMediaPessoasFisicas.label}: ${fam.custoCredito.taxaMediaPessoasFisicas.value}`,
      kind: 'indicator',
      value: 61,
      unit: '% a.a.',
      block: 'Custo do crédito',
      sourceId: 'bacen',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::custo::rotativo-cartao',
      statement: `${fam.custoCredito.creditoRotativoCartao.label}: ${fam.custoCredito.creditoRotativoCartao.value}`,
      kind: 'indicator',
      value: 400,
      unit: '% a.a.',
      block: 'Custo do crédito',
      sourceId: 'bacen',
      evidenceId: ''
    },

    // Vulnerabilidade por Faixa de Renda
    {
      id: 'endividamento-familias::vulnerabilidade::ate-3sm-endividadas',
      statement: `Vulnerabilidade por faixa de renda (${fam.vulnerabilidadeRenda.ateTresSalariosMinimos.label}) — Famílias endividadas: ${fam.vulnerabilidadeRenda.ateTresSalariosMinimos.endividadas.toLocaleString('pt-BR')}%.`,
      kind: 'distribution',
      group: 'Vulnerabilidade por faixa de renda',
      value: fam.vulnerabilidadeRenda.ateTresSalariosMinimos.endividadas,
      unit: '%',
      block: 'Vulnerabilidade por faixa de renda',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::vulnerabilidade::ate-3sm-inadimplentes',
      statement: `Vulnerabilidade por faixa de renda (${fam.vulnerabilidadeRenda.ateTresSalariosMinimos.label}) — Famílias inadimplentes: ${fam.vulnerabilidadeRenda.ateTresSalariosMinimos.inadimplentes.toLocaleString('pt-BR')}%.`,
      kind: 'distribution',
      group: 'Vulnerabilidade por faixa de renda',
      value: fam.vulnerabilidadeRenda.ateTresSalariosMinimos.inadimplentes,
      unit: '%',
      block: 'Vulnerabilidade por faixa de renda',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::vulnerabilidade::acima-10sm-endividadas',
      statement: `Vulnerabilidade por faixa de renda (${fam.vulnerabilidadeRenda.acimaDezSalariosMinimos.label}) — Famílias endividadas: ${fam.vulnerabilidadeRenda.acimaDezSalariosMinimos.endividadas.toLocaleString('pt-BR')}%.`,
      kind: 'distribution',
      group: 'Vulnerabilidade por faixa de renda',
      value: fam.vulnerabilidadeRenda.acimaDezSalariosMinimos.endividadas,
      unit: '%',
      block: 'Vulnerabilidade por faixa de renda',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::vulnerabilidade::acima-10sm-inadimplentes',
      statement: `Vulnerabilidade por faixa de renda (${fam.vulnerabilidadeRenda.acimaDezSalariosMinimos.label}) — Famílias inadimplentes: ${fam.vulnerabilidadeRenda.acimaDezSalariosMinimos.inadimplentes.toLocaleString('pt-BR')}%.`,
      kind: 'distribution',
      group: 'Vulnerabilidade por faixa de renda',
      value: fam.vulnerabilidadeRenda.acimaDezSalariosMinimos.inadimplentes,
      unit: '%',
      block: 'Vulnerabilidade por faixa de renda',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },

    // Apostas e Endividamento (Bets)
    {
      id: 'endividamento-familias::bets::amostra',
      statement: `Apostas e endividamento — Amostra: ${fam.bets.amostra.apostadores} apostadores em ${fam.bets.amostra.entrevistados.toLocaleString('pt-BR')} entrevistados.`,
      kind: 'indicator',
      group: 'Apostas e endividamento',
      value: fam.bets.amostra.apostadores,
      unit: 'apostadores',
      block: 'Apostas e endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::bets::endividamento',
      statement: `Apostas e endividamento — ${fam.bets.indicadores.endividamento.label}: ${fam.bets.indicadores.endividamento.value.toLocaleString('pt-BR')}% entre apostadores.`,
      kind: 'indicator',
      group: 'Apostas e endividamento',
      value: fam.bets.indicadores.endividamento.value,
      unit: '%',
      block: 'Apostas e endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::bets::pressao-renda',
      statement: `Apostas e endividamento — ${fam.bets.indicadores.pressaoRenda.label}: ${fam.bets.indicadores.pressaoRenda.value.toLocaleString('pt-BR')}%.`,
      kind: 'indicator',
      group: 'Apostas e endividamento',
      value: fam.bets.indicadores.pressaoRenda.value,
      unit: '%',
      block: 'Apostas e endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::bets::perdas-financeiras',
      statement: `Apostas e endividamento — ${fam.bets.indicadores.perdasFinanceiras.label}: ${fam.bets.indicadores.perdasFinanceiras.value.toLocaleString('pt-BR')}%.`,
      kind: 'indicator',
      group: 'Apostas e endividamento',
      value: fam.bets.indicadores.perdasFinanceiras.value,
      unit: '%',
      block: 'Apostas e endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::bets::gasto-acima-mil-2025',
      statement: `Apostas e endividamento — Gasto mensal acima de R$ 1.000 em ${fam.bets.gastoAcimaMil.anterior.ano}: ${fam.bets.gastoAcimaMil.anterior.value.toLocaleString('pt-BR')}%.`,
      kind: 'comparison',
      group: 'Apostas e endividamento',
      value: fam.bets.gastoAcimaMil.anterior.value,
      unit: '%',
      block: 'Apostas e endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::bets::gasto-acima-mil-2026',
      statement: `Apostas e endividamento — Gasto mensal acima de R$ 1.000 em ${fam.bets.gastoAcimaMil.atual.ano}: ${fam.bets.gastoAcimaMil.atual.value.toLocaleString('pt-BR')}%.`,
      kind: 'comparison',
      group: 'Apostas e endividamento',
      value: fam.bets.gastoAcimaMil.atual.value,
      unit: '%',
      block: 'Apostas e endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    },
    {
      id: 'endividamento-familias::bets::perfil-endividados',
      statement: `Apostas e endividamento — Perfil endividados (Classes D e E com dívidas em atraso): ${fam.bets.perfilEndividados.value.toLocaleString('pt-BR')}%.`,
      kind: 'indicator',
      group: 'Apostas e endividamento',
      value: fam.bets.perfilEndividados.value,
      unit: '%',
      block: 'Apostas e endividamento',
      sourceId: 'cnc-peic',
      evidenceId: ''
    }
  ],

  existingAnalysis: [
    'Acompanhar a evolução do endividamento das famílias. Em julho de 2026, 82% das famílias possuíam algum tipo de dívida, enquanto 29,5% do orçamento médio estava comprometido com pagamentos.',
    'Monitorar a trajetória da inadimplência. Apesar do endividamento recorde, a inadimplência estava em 29,8%; para o 3º trimestre de 2026, os bancos projetam piora desse indicador.',
    'Observar o custo e a duração das dívidas. Juros elevados, especialmente no crédito rotativo, e o prolongamento das dívidas podem dificultar a redução do comprometimento financeiro das famílias.',
    'O elevado comprometimento da renda pode tornar o consumidor mais sensível ao preço e às condições de pagamento, especialmente em compras de maior valor.',
    'Juros elevados podem favorecer decisões de compra mais cautelosas, aumentando a importância de propostas com boa relação entre preço, benefício e durabilidade.',
    'O impacto do endividamento tende a variar entre os perfis de consumidor, reforçando a necessidade de acompanhar diferenças de renda, capacidade de pagamento e sensibilidade a preço.',
    'O elevado endividamento pode reduzir a flexibilidade financeira das famílias, tornando preço, valor percebido e condições de pagamento fatores relevantes para a demanda.'
  ]
};
