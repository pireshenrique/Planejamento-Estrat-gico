import { StrategicPageContext } from './types';

export const REFORMA_TRIBUTARIA_PAGE: StrategicPageContext = {
  pageId: 'eco-reforma-tributaria',
  pageTitle: 'Reforma Tributária do Consumo',
  theme: 'Economia Brasileira',
  subtheme: 'Reforma Tributária',
  status: 'analyzable',
  description: 'Diretrizes, transição operacional, CBS, IBS, Split Payment, Simples Nacional, alíquotas de teste e impactos sobre a indústria.',

  sources: [
    {
      id: 'ec-132-2023',
      name: 'Congresso Nacional — Emenda Constitucional nº 132/2023',
      dateStr: '2023',
      type: 'Legislação Constitucional'
    },
    {
      id: 'lc-214-2025',
      name: 'Congresso Nacional — Lei Complementar nº 214/2025',
      dateStr: '2025',
      type: 'Legislação Complementar'
    },
    {
      id: 'receita-federal-rt',
      name: 'Receita Federal do Brasil / Comitê Gestor do IBS',
      dateStr: '2026',
      type: 'Órgão Regulador / Administração Tributária'
    }
  ],

  evidenceIds: [
    'rt-ev-g1-cobranca-2027',
    'rt-ev-receita-transicao-2026',
    'rt-ev-receita-cronograma-doc-fiscais',
    'rt-ev-g1-simples-nacional-2027',
    'rt-ev-aliquota-teste-1-pct',
    'rt-ev-aliquota-efetiva-cbs-2027',
    'rt-ev-cbs-declarada-sem-recolhimento-2026',
    'rt-ev-exame-split-payment-logica',
    'rt-ev-exame-split-payment-impactos',
    'rt-ev-rfb-split-payment-infra',
    'rt-ev-ipi-exame-2026',
    'rt-ev-ipi-contadores-2026',
    'rt-ev-ipi-uol-2026',
    'rt-ev-ipi-seletivo-2026'
  ],

  factualContent: [
    {
      id: 'reforma-tributaria::kpi::modelo',
      statement: 'O novo modelo tributário substitui cinco tributos atuais (PIS, Cofins, IPI, ICMS e ISS) pelo Imposto sobre Valor Agregado (IVA) Dual: CBS (federal), IBS (subnacional) e o Imposto Seletivo (IS).',
      kind: 'kpi',
      period: 'EC 132/2023',
      block: 'Indicadores Centrais',
      sourceId: 'ec-132-2023',
      evidenceId: 'rt-ev-g1-cobranca-2027'
    },
    {
      id: 'reforma-tributaria::kpi::ano-teste-2026',
      statement: 'O ano de 2026 marca a fase de testes operacionais com alíquota-teste de 1% (0,9% de CBS e 0,1% de IBS) preenchida nos documentos fiscais eletrônicos para adaptação de sistemas sem cobrança cumulativa.',
      kind: 'kpi',
      value: 1.0,
      unit: '%',
      period: '2026',
      block: 'Indicadores Centrais',
      sourceId: 'receita-federal-rt',
      evidenceId: 'rt-ev-aliquota-teste-1-pct'
    },
    {
      id: 'reforma-tributaria::kpi::cobranca-efetiva-2027',
      statement: 'A cobrança efetiva da CBS entra em vigor em 2027 com extinção simultânea do PIS e da Cofins e redução da alíquota de IPI para zero na maioria dos bens industriais.',
      kind: 'kpi',
      value: 2027,
      unit: 'ano',
      period: '2027',
      block: 'Cronograma de Transição',
      sourceId: 'lc-214-2025',
      evidenceId: 'rt-ev-aliquota-efetiva-cbs-2027'
    },
    {
      id: 'reforma-tributaria::kpi::transicao-completa-2033',
      statement: 'A transição completa do novo sistema tributário será concluída em 2033 com a total extinção do ICMS e do ISS e vigência integral do IBS estadual e municipal.',
      kind: 'kpi',
      value: 2033,
      unit: 'ano',
      period: '2033',
      block: 'Indicadores Centrais',
      sourceId: 'ec-132-2023',
      evidenceId: 'rt-ev-g1-cobranca-2027'
    },
    {
      id: 'reforma-tributaria::fato::split-payment',
      statement: 'O mecanismo de Split Payment separará eletronicamente, no momento da liquidação financeira do pagamento, o valor líquido devido ao fornecedor e a parcela correspondente aos tributos (CBS e IBS).',
      kind: 'statement',
      period: '2027+',
      block: 'Split Payment',
      sourceId: 'receita-federal-rt',
      evidenceId: 'rt-ev-exame-split-payment-logica'
    },
    {
      id: 'reforma-tributaria::fato::simples-nacional-b2b',
      statement: 'Empresas do Simples Nacional poderão optar entre recolher CBS/IBS pelo DAS unificado (gerando crédito restrito para compradores) ou pelo regime regular com apropriação e repasse integral de créditos em relações B2B.',
      kind: 'statement',
      period: '2027',
      block: 'Simples Nacional',
      sourceId: 'lc-214-2025',
      evidenceId: 'rt-ev-g1-simples-nacional-2027'
    },
    {
      id: 'reforma-tributaria::fato::ipi-zfm',
      statement: 'O IPI terá alíquotas zeradas para a maior parte dos itens industriais em 2027, mantendo-se aplicável apenas para produtos que tenham fabricação incentivada na Zona Franca de Manaus para preservar sua vantagem comparativa.',
      kind: 'statement',
      period: '2027',
      block: 'IPI e Imposto Seletivo',
      sourceId: 'lc-214-2025',
      evidenceId: 'rt-ev-ipi-exame-2026'
    },
    {
      id: 'reforma-tributaria::fato::tributacao-destino',
      statement: 'A tributação passará a ocorrer integralmente no local de consumo (destino) e não na origem da produção, eliminando progressivamente a guerra fiscal de ICMS entre os estados.',
      kind: 'statement',
      period: '2029-2033',
      block: 'Incentivos Fiscais',
      sourceId: 'ec-132-2023',
      evidenceId: 'rt-ev-g1-cobranca-2027'
    }
  ],

  existingAnalysis: [
    'A Reforma Tributária simplifica radicalmente o arcabouço fiscal ao instituir base ampla e créditos financeiros plenos para insumos, energia e bens de capital da indústria.',
    'O mecanismo de Split Payment pode demandar profunda reconfiguração dos fluxos de caixa empresariais e sistemas contábeis ERP, reduzindo o tempo de retenção financeira do imposto faturado.',
    'A opção das micro e pequenas empresas no Simples Nacional pode provocar pressão comercial para que revendedores e fornecedores B2B adotem o recolhimento regular para transferir créditos aos clientes industriais e comerciais.',
    'A migração da tributação para o destino encerra o modelo de guerra fiscal e passa a valorizar a proximidade dos centros consumidores, a eficiência da malha logística e a produtividade da planta industrial.',
    'Impacto Lorenzetti: o fim da cumulatividade tributária e a apropriação desimpedida de créditos fiscais sobre investimentos industriais e insumos podem beneficiar a eficiência fabril e a cadeia de distribuição de produtos em todo o território nacional.'
  ]
};
