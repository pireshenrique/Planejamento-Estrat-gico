import { StrategicPageContext, PageFact } from './types';
import { ENDIVIDAMENTO_DATA } from '../economia-brasileira/endividamento';

const emp = ENDIVIDAMENTO_DATA.empresas;

export const ENDIVIDAMENTO_EMPRESAS_PAGE: StrategicPageContext = {
  pageId: 'endividamento-empresas',
  pageTitle: 'Endividamento das Empresas',
  theme: 'Economia Brasileira',
  subtheme: 'Endividamento',
  status: 'analyzable',
  description: 'Inadimplência empresarial, dívidas negativadas, composição setorial, recuperações extrajudiciais e demanda de crédito.',

  sources: [
    {
      id: 'serasa',
      name: 'Serasa Experian',
      dateStr: '2026',
      type: 'Relatório'
    },
    {
      id: 'folha-serasa',
      name: 'Folha de S.Paulo / Serasa Experian',
      dateStr: '2026',
      type: 'Notícia / Relatório'
    }
  ],
  evidenceIds: [],

  factualContent: [
    // KPIs
    {
      id: 'endividamento-empresas::kpi::inadimplencia',
      statement: `${emp.kpis.inadimplenciaEmpresarial.title}: ${emp.kpis.inadimplenciaEmpresarial.value} (${emp.kpis.inadimplenciaEmpresarial.context}). ${emp.kpis.inadimplenciaEmpresarial.explanation}`,
      kind: 'kpi',
      value: 9.1,
      unit: 'milhões de empresas',
      block: 'KPIs',
      sourceId: 'serasa',
      evidenceId: ''
    },
    {
      id: 'endividamento-empresas::kpi::dividas-negativadas',
      statement: `${emp.kpis.dividasNegativadas.title}: ${emp.kpis.dividasNegativadas.value} (${emp.kpis.dividasNegativadas.context}). ${emp.kpis.dividasNegativadas.explanation}`,
      kind: 'kpi',
      value: 232.9,
      unit: 'R$ bilhões',
      block: 'KPIs',
      sourceId: 'serasa',
      evidenceId: ''
    },
    {
      id: 'endividamento-empresas::kpi::recuperacoes-judiciais',
      statement: `${emp.kpis.recuperacoesJudiciais.title}: ${emp.kpis.recuperacoesJudiciais.value} ${emp.kpis.recuperacoesJudiciais.valueSuffix || 'casos'} (${emp.kpis.recuperacoesJudiciais.context}). ${emp.kpis.recuperacoesJudiciais.explanation}`,
      kind: 'kpi',
      value: 6341,
      unit: 'casos',
      block: 'KPIs',
      sourceId: 'folha-serasa',
      evidenceId: ''
    },

    // Inadimplência Mensal
    ...emp.inadimplenciaMensal.map((item): PageFact => ({
      id: `endividamento-empresas::inadimplencia-mensal::${item.mes.replace('/', '-')}`,
      statement: `Inadimplência empresarial em ${item.mes}: ${item.value.toLocaleString('pt-BR')} milhões de empresas.`,
      kind: 'series',
      group: 'Série mensal de inadimplência empresarial',
      value: item.value,
      unit: 'milhões de empresas',
      period: item.mes,
      block: 'Inadimplência Mensal',
      sourceId: 'serasa',
      evidenceId: ''
    })),

    // Composição Setorial
    ...emp.composicaoSetorial.setores.map((setor): PageFact => ({
      id: `endividamento-empresas::setor::${setor.label.toLowerCase()}`,
      statement: `Composição setorial das dívidas negativadas (${emp.composicaoSetorial.periodoAtual}) — ${setor.label}: ${setor.atual.toLocaleString('pt-BR')}% (anterior ${emp.composicaoSetorial.periodoAnterior}: ${setor.anterior.toLocaleString('pt-BR')}%).`,
      kind: 'distribution',
      group: 'Composição setorial',
      value: setor.atual,
      unit: '%',
      period: emp.composicaoSetorial.periodoAtual,
      block: 'Composição Setorial',
      sourceId: 'serasa',
      evidenceId: ''
    })),

    // Recuperações Extrajudiciais (Série histórica)
    ...emp.recuperacoesExtrajudiciais.serie.map((item): PageFact => ({
      id: `endividamento-empresas::recuperacoes-extrajudiciais::${item.ano}`,
      statement: `Recuperações extrajudiciais em ${item.ano}: ${item.value} processos.`,
      kind: 'series',
      group: 'Recuperações extrajudiciais',
      value: item.value,
      unit: 'processos',
      period: String(item.ano),
      block: 'Recuperações Extrajudiciais',
      sourceId: 'serasa',
      evidenceId: ''
    })),
    {
      id: 'endividamento-empresas::recuperacoes-extrajudiciais::2026-parcial',
      statement: `Recuperações extrajudiciais em ${emp.recuperacoesExtrajudiciais.parcial.ano} (acumulado até ${emp.recuperacoesExtrajudiciais.parcial.acumuladoAte}): 44 processos.`,
      kind: 'indicator',
      group: 'Recuperações extrajudiciais',
      value: 44,
      unit: 'processos',
      period: `Até ${emp.recuperacoesExtrajudiciais.parcial.acumuladoAte}/${emp.recuperacoesExtrajudiciais.parcial.ano}`,
      block: 'Recuperações Extrajudiciais',
      sourceId: 'serasa',
      evidenceId: ''
    },

    // Demanda e Oferta de Crédito Empresarial
    {
      id: 'endividamento-empresas::credito::demanda-geral',
      statement: `Demanda por crédito empresarial (${emp.creditoEmpresarial.demanda.periodo}) — Crescimento geral: ${emp.creditoEmpresarial.demanda.crescimentoGeral.toLocaleString('pt-BR')}%.`,
      kind: 'indicator',
      group: 'Crédito empresarial',
      value: emp.creditoEmpresarial.demanda.crescimentoGeral,
      unit: '%',
      block: 'Crédito Empresarial',
      sourceId: 'serasa',
      evidenceId: ''
    },
    {
      id: 'endividamento-empresas::credito::demanda-mpes',
      statement: `Demanda de crédito (${emp.creditoEmpresarial.demanda.periodo}) — ${emp.creditoEmpresarial.demanda.segmentos.mpes.label}: ${emp.creditoEmpresarial.demanda.segmentos.mpes.value.toLocaleString('pt-BR')}%.`,
      kind: 'distribution',
      group: 'Crédito empresarial',
      value: emp.creditoEmpresarial.demanda.segmentos.mpes.value,
      unit: '%',
      block: 'Crédito Empresarial',
      sourceId: 'serasa',
      evidenceId: ''
    },
    {
      id: 'endividamento-empresas::credito::demanda-grandes',
      statement: `Demanda de crédito (${emp.creditoEmpresarial.demanda.periodo}) — ${emp.creditoEmpresarial.demanda.segmentos.grandes.label}: ${emp.creditoEmpresarial.demanda.segmentos.grandes.value.toLocaleString('pt-BR')}%.`,
      kind: 'distribution',
      group: 'Crédito empresarial',
      value: emp.creditoEmpresarial.demanda.segmentos.grandes.value,
      unit: '%',
      block: 'Crédito Empresarial',
      sourceId: 'serasa',
      evidenceId: ''
    },
    {
      id: 'endividamento-empresas::credito::demanda-medias',
      statement: `Demanda de crédito (${emp.creditoEmpresarial.demanda.periodo}) — ${emp.creditoEmpresarial.demanda.segmentos.medias.label}: ${emp.creditoEmpresarial.demanda.segmentos.medias.value.toLocaleString('pt-BR')}%.`,
      kind: 'distribution',
      group: 'Crédito empresarial',
      value: emp.creditoEmpresarial.demanda.segmentos.medias.value,
      unit: '%',
      block: 'Crédito Empresarial',
      sourceId: 'serasa',
      evidenceId: ''
    },
    {
      id: 'endividamento-empresas::credito::oferta-status',
      statement: `Condições de oferta de crédito corporativo para ${emp.creditoEmpresarial.oferta.periodoExpectativa}: ${emp.creditoEmpresarial.oferta.status}.`,
      kind: 'statement',
      group: 'Crédito empresarial',
      block: 'Crédito Empresarial',
      sourceId: 'serasa',
      evidenceId: ''
    }
  ],

  existingAnalysis: [
    'Acompanhar o nível recorde de inadimplência empresarial e de empresas negativadas, com maior concentração de dívidas no setor de serviços e comércio.',
    'Monitorar a evolução dos pedidos de recuperação judicial e extrajudicial em meio a custos financeiros elevados e restrição na concessão de crédito.',
    'A restrição nas condições de oferta de crédito pode exigir maior disciplina no capital de giro e gestão cautelosa de risco de crédito com fornecedores e parceiros comerciais.'
  ]
};
