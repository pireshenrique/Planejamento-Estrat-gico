import React from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Hourglass, 
  Circle, 
  ExternalLink, 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Target, 
  Scale, 
  FileText, 
  Activity, 
  Radio,
  Layers,
  Sparkles,
  Award,
  Vote,
  ShieldCheck,
  Building2,
  Users
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface Escala6x1ViewProps {
  setActivePage?: (page: string) => void;
}

// ============================================================================
// OBJETO CENTRALIZADO: ÚLTIMA ATUALIZAÇÃO (ARQUITETURA PARA ATUALIZAÇÕES FUTURAS)
// ============================================================================
const latestUpdate = {
  date: "03/09/2026",
  dateFormatted: "03 SET 2026",
  category: "TRAMITAÇÃO",
  title: "Senado deve votar fim da escala 6x1 após as eleições",
  summary: "Após a aprovação na CCJ, a votação no Plenário não ocorreu. O presidente do Senado afirmou que a proposta será apreciada após as eleições.",
  sourceName: "Agência Brasil",
  sourceUrl: "https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/alcolumbre-diz-que-senado-vota-fim-da-escala-6x1-apos-eleicoes"
};

// ============================================================================
// EVIDÊNCIAS PRINCIPAIS (URLs OFICIAIS)
// ============================================================================
const ESCALA_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'escala-agenciabrasil-ultimaupdate',
    tag: 'Última Atualização / Agência Brasil',
    dateStr: '03/09/2026',
    title: 'Senado deve votar fim da escala 6x1 após as eleições',
    headline: 'Após a aprovação na CCJ, a votação no Plenário não ocorreu. O presidente do Senado afirmou que a proposta será apreciada após as eleições.',
    source: 'Agência Brasil (Política)',
    url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/alcolumbre-diz-que-senado-vota-fim-da-escala-6x1-apos-eleicoes'
  },
  {
    id: 'escala-cbn-produtividade',
    tag: 'Produtividade & Bem-estar / CBN',
    dateStr: '2025/2026',
    title: 'Experimentos com jornadas reduzidas apontam ganhos de produtividade e qualidade de vida',
    headline: 'Estudos e experimentos sobre redução da jornada apresentam evidências de possíveis efeitos sobre produtividade, bem-estar, retenção e desempenho empresarial em pilotos controlados.',
    source: 'CBN (Economia & Trabalho)',
    url: 'https://cbn.globo.com/brasil/noticia/2025/09/26/jornada-de-trabalho-reduzida-melhora-produtividade-aumenta-receita-e-qualidade-de-vida-segundo-pesquisa.ghtml'
  },
  {
    id: 'escala-cni-deficit-produtividade',
    tag: 'Produtividade Industrial / CNI',
    dateStr: '2026',
    title: 'Brasil pode levar até 30 anos para compensar déficit de produtividade com jornada de 40 horas, diz CNI',
    headline: 'Estudo da Confederação Nacional da Indústria aponta que a redução da jornada semanal para 40 horas sem ganhos equivalentes de produtividade pode exigir até três décadas para compensar o déficit gerado nos custos da produção.',
    source: 'CNI (Conexão Trabalho)',
    url: 'https://conexaotrabalho.portaldaindustria.com.br/noticias/detalhe/trabalhista/-geral/brasil-pode-levar-ate-30-anos-para-compensar-deficit-de-produtividade-com-jornada-de-40-horas-diz-cni/'
  }
];

export function Escala6x1View({ setActivePage }: Escala6x1ViewProps) {
  return (
    <div className="w-full flex flex-col gap-6 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* CABEÇALHO DA PÁGINA COM NAVEGAÇÃO E 3 CARDS DE INDICADORES PRINCIPAIS     */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Identificação & Navegação */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 flex items-center gap-1.5 shadow-xs">
                <Calendar className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                Carreira e Gerações • Subtópico 04
              </span>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 flex items-center gap-1.5 shadow-xs">
                <Radio className="w-3 h-3 text-amber-600 dark:text-amber-400 animate-pulse" />
                TEMA EM TRAMITAÇÃO
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Atualizado: {latestUpdate.date}</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <Calendar className="w-7 h-7 text-rose-600 dark:text-rose-400 shrink-0" />
              Escala 6x1 e Redução da Jornada
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              O debate sobre a redução da jornada semanal e a ampliação dos dias de descanso pode alterar modelos de trabalho, custos operacionais e gestão da força de trabalho no Brasil.
            </p>
          </div>

          {/* Navegação Rápida entre Subtópicos */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage && setActivePage('Carreira e Gerações')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral
            </button>
            <button 
              onClick={() => setActivePage && setActivePage('Perfil das gerações')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Perfil das Gerações
            </button>
            <button 
              onClick={() => setActivePage && setActivePage('Mudança de carreiras')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mudança de Carreiras
            </button>
            <button 
              onClick={() => setActivePage && setActivePage('Empreendedorismo')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Empreendedorismo
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Escala 6x1
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo (Alinhados às Principais Evidências) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          {/* Card 1: Previsão no Senado (Agência Brasil) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Vote className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                PREVISÃO NO SENADO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[20px] 2xl:text-[22px] font-black text-amber-600 dark:text-amber-400 leading-none">
                  Pós-Eleições
                </h3>
              </div>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">Votação no Plenário postergada pelo Senado.</p>
              <p className="text-[11.5px] text-slate-400 dark:text-slate-500 mt-1 leading-tight font-medium">Agência Brasil (03/09/2026).</p>
            </div>
          </div>

          {/* Card 2: Produtividade e Bem-Estar (CBN) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                PRODUTIVIDADE & BEM-ESTAR
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[20px] 2xl:text-[22px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  Ganhos em Pilotos
                </h3>
              </div>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">Melhora de receita, retenção e qualidade de vida.</p>
              <p className="text-[11.5px] text-slate-400 dark:text-slate-500 mt-1 leading-tight font-medium">CBN (Economia & Trabalho).</p>
            </div>
          </div>

          {/* Card 3: Impacto de Produtividade Industrial (CNI) */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                DÉFICIT INDUSTRIAL
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[20px] 2xl:text-[22px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  Até 30 Anos
                </h3>
              </div>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">Prazo estimado para compensar déficit com 40h.</p>
              <p className="text-[11.5px] text-slate-400 dark:text-slate-500 mt-1 leading-tight font-medium">CNI (Conexão Trabalho).</p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. PRINCIPAIS NOTÍCIAS (ALINHADAS AOS 3 INDICADORES / URLs OFICIAIS)     */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais Notícias sobre a Escala 6x1
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes das Evidências: <strong>Agência Brasil • CBN • CNI</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {ESCALA_PRIMARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. O QUE OBSERVAR NOS PRÓXIMOS MESES / IMPACTO PARA A EMPRESA (2 COLUNAS) */}
      {/* ========================================================================= */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* Coluna 01: O que observar nos próximos meses */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-blue-100 dark:border-blue-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-blue-50 dark:text-blue-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      O que observar nos próximos meses
                    </h4>
                    <div className="inline-flex bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold">
                        Pauta do Plenário do Senado pós-eleições, prazos de transição gradual e regras para regimes contínuos industriais.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-blue-400 dark:marker:text-blue-500/70">
                    <li>O agendamento da votação em dois turnos da PEC 221/2019 no Plenário do Senado após o período eleitoral (Agência Brasil).</li>
                    <li>Possíveis emendas ao texto aprovado na CCJ prevendo prazos diferenciados de transição (44h → 42h → 40h) e tratamento a indústrias de ciclo contínuo (Senado Federal).</li>
                    <li>As cláusulas de flexibilização e autonomia para negociação coletiva entre sindicatos patronais e de trabalhadores (G1 / Senado).</li>
                    <li>A divulgação de novos estudos empíricos e setoriais medindo impactos de custos em serviços e manufatura (CNN Brasil / CBN).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coluna 02: Impacto para a empresa (Lorenzetti) */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-red-50 dark:text-red-900/20 leading-none pointer-events-none select-none">
                02
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      Impacto para a empresa
                    </h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Planejamento antecipado de regimes de turnos fabris, modelagem de custo horário e aceleração da robotização de células.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>A eventual aprovação da PEC <strong className="text-slate-800 dark:text-slate-200">pode demandar</strong> o redesenho dos regimes de turnos para preservar o ciclo operacional contínuo de fornos e linhas de injeção.</li>
                    <li>A redução de 44h para 40h sem redução salarial <strong className="text-slate-800 dark:text-slate-200">pode aumentar</strong> o custo unitário da mão de obra direta e a necessidade de turmas adicionais de operadores.</li>
                    <li>A transição gradual <strong className="text-slate-800 dark:text-slate-200">pode incentivar</strong> investimentos em automação fabril, robotização e otimização de tempos de montagem (OEE) para neutralizar a pressão de custos.</li>
                    <li>A ampliação do repouso semanal <strong className="text-slate-800 dark:text-slate-200">pode gerar oportunidades</strong> de redução de absenteísmo, fadiga operacional e afastamentos nas células industriais.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STATUS DA TRAMITAÇÃO & O QUE O TEXTO PROPÕE (PAINEL ESTRUTURAL)       */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] border border-amber-200/80 dark:border-amber-900/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-blue-500 to-emerald-500" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Acompanhamento Legislativo • PEC 221/2019
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Em que estágio está a proposta?
              </h2>
            </div>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
            Fonte Oficial: <strong>Senado Federal</strong>
          </div>
        </div>

        {/* TIMELINE LEGISLATIVA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          
          {/* Etapa 1: Câmara dos Deputados */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                1ª Casa Iniciadora
              </span>
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              CÂMARA DOS DEPUTADOS
            </h3>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold mt-1">
              ✓ Texto aprovado
            </p>
          </div>

          {/* Etapa 2: CCJ do Senado */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Comissão de Const. e Justiça
              </span>
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              CCJ DO SENADO
            </h3>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold mt-1">
              ✓ Aprovado em 02/09/2026
            </p>
          </div>

          {/* Etapa 3: Plenário do Senado (STATUS ATUAL) */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-400 dark:border-amber-600/80 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 animate-pulse">
                ESTÁGIO PRESENTE
              </span>
              <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center">
                <Hourglass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
              </div>
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              PLENÁRIO DO SENADO
            </h3>
            <p className="text-xs text-amber-800 dark:text-amber-300 font-bold mt-1 flex items-center gap-1">
              ⏳ Aguardando votação
            </p>
          </div>

          {/* Etapa 4: Promulgação */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-col justify-between opacity-80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Fase Final
              </span>
              <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center">
                <Circle className="w-3.5 h-3.5" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300">
              PROMULGAÇÃO
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
              ○ Pendente
            </p>
          </div>

        </div>

        {/* BOX DE DESTAQUE DO STATUS ATUAL */}
        <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-200 dark:bg-amber-900/80 text-amber-900 dark:text-amber-200">
                STATUS ATUAL
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Aguardando votação no Plenário do Senado
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              A CCJ do Senado aprovou em 2 de setembro de 2026 a PEC 221/2019. A proposta ainda precisa ser aprovada pelo Plenário do Senado em dois turnos, com pelo menos 49 votos favoráveis.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://www12.senado.leg.br/noticias/materias/2026/09/02/aguardar-fim-da-escala-6x1-passa-na-ccj-e-vai-a-plenario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              Consultar tramitação <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* COMPARAÇÃO: O QUE O TEXTO PROPÕE */}
        <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  O que o texto propõe?
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Comparativo direto entre a regra constitucional vigente e a proposta em tramitação (PEC 221/2019)
                </p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md self-start sm:self-auto">
              Art. 7º da CF/88
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            
            {/* COLUNA 1: HOJE (REGRA VIGENTE) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-5">
              
              {/* Header do Card */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    HOJE (REGRA VIGENTE)
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  Em vigor (CF/1988)
                </span>
              </div>

              {/* Linhas de Dados Estruturadas e Alinhadas */}
              <div className="space-y-4">
                
                {/* Parâmetro 1: Jornada Máxima */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 flex flex-col items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700">
                    <span className="text-xl font-black leading-none">44h</span>
                    <span className="text-[9px] font-bold uppercase tracking-tight text-slate-500 dark:text-slate-400 mt-0.5">/ sem</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Jornada Semanal Máxima
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      44 horas semanais
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                      Limite máximo legal permitido pela Constituição Federal.
                    </p>
                  </div>
                </div>

                {/* Parâmetro 2: Descanso Semanal */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 flex flex-col items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700">
                    <span className="text-xl font-black leading-none">1</span>
                    <span className="text-[9px] font-bold uppercase tracking-tight text-slate-500 dark:text-slate-400 mt-0.5">dia</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Repouso Semanal Remunerado (DSR)
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      1 dia de descanso por semana
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                      Viabiliza a escala 6x1 (6 dias de trabalho por 1 de folga).
                    </p>
                  </div>
                </div>

                {/* Parâmetro 3: Remuneração */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex flex-col items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700">
                    <span className="text-xs font-black leading-none">CLT</span>
                    <span className="text-[9px] font-bold uppercase tracking-tight text-slate-500 dark:text-slate-400 mt-0.5">Base</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Garantia Salarial
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Salário contratual pactuado
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                      Remuneração associada à jornada padrão acordada.
                    </p>
                  </div>
                </div>

              </div>

              {/* Rodapé do Card Vigente */}
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <span className="font-bold text-slate-700 dark:text-slate-200 shrink-0">• Regime atual:</span>
                <span>Modelo tradicional da legislação trabalhista nacional desde 1988.</span>
              </div>
            </div>

            {/* COLUNA 2: PROPOSTA (PEC EM TRAMITAÇÃO) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-700/80 flex flex-col justify-between space-y-5">
              
              {/* Header do Card */}
              <div className="flex items-center justify-between pb-3 border-b border-blue-200/80 dark:border-blue-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                  <span className="text-xs font-black uppercase tracking-wider text-blue-900 dark:text-blue-200">
                    PROPOSTA (PEC 221/2019)
                  </span>
                </div>
                <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
                  Aprovada na CCJ
                </span>
              </div>

              {/* Linhas de Dados Estruturadas e Alinhadas */}
              <div className="space-y-4">
                
                {/* Parâmetro 1: Jornada Máxima */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-blue-200 dark:border-blue-800/80 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex flex-col items-center justify-center shrink-0 shadow-xs">
                    <span className="text-xl font-black leading-none">40h</span>
                    <span className="text-[9px] font-bold uppercase tracking-tight text-blue-100 mt-0.5">/ sem</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        Jornada Semanal Máxima
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                        Após 42h
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      40 horas semanais
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                      Transição gradual: primeiro para 42h e posteriormente para 40h semanais.
                    </p>
                  </div>
                </div>

                {/* Parâmetro 2: Descanso Semanal */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-blue-200 dark:border-blue-800/80 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-indigo-600 text-white flex flex-col items-center justify-center shrink-0 shadow-xs">
                    <span className="text-xl font-black leading-none">2</span>
                    <span className="text-[9px] font-bold uppercase tracking-tight text-indigo-100 mt-0.5">dias</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Repouso Semanal Remunerado (DSR)
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      2 dias de descanso por semana
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                      Estruturação do modelo 5x2 (5 dias de trabalho por 2 de descanso).
                    </p>
                  </div>
                </div>

                {/* Parâmetro 3: Remuneração */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-blue-200 dark:border-blue-800/80 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-600 text-white flex flex-col items-center justify-center shrink-0 shadow-xs">
                    <span className="text-base font-black leading-none">100%</span>
                    <span className="text-[9px] font-bold uppercase tracking-tight text-emerald-100 mt-0.5">Salário</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Garantia Salarial
                    </div>
                    <div className="text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      Sem redução salarial
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                      O texto veda expressamente qualquer redução na remuneração nominal.
                    </p>
                  </div>
                </div>

              </div>

              {/* Rodapé do Card Proposta */}
              <div className="p-3 rounded-xl bg-blue-100/70 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-950 dark:text-blue-200 flex items-center gap-2">
                <span className="font-bold text-blue-900 dark:text-blue-300 shrink-0">• Implementação:</span>
                <span>Prevê transição progressiva e espaço para negociação coletiva setorial.</span>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. BALANÇA VISUAL & MATRIZ POR TIPO DE OPERAÇÃO                          */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
        
        {/* CABEÇALHO DO BLOCO ANALÍTICO */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/60 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Pontos em Debate
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Menos horas: produtividade ou aumento de custos?
              </h3>
            </div>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
            Análise Conceitual de Trade-offs
          </div>
        </div>

        {/* GRID BALANÇA: BENEFÍCIOS VS DESAFIOS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Coluna 1: Potenciais Benefícios */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-300">
                  POTENCIAIS BENEFÍCIOS
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-emerald-600 font-black">↑</span> Qualidade de vida e recuperação física
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-emerald-600 font-black">↑</span> Retenção de talentos e atratividade
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-emerald-600 font-black">↑</span> Engajamento e clima organizacional
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-emerald-600 font-black">↑</span> Produtividade por hora trabalhada
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-emerald-600 font-black">↓</span> Redução de absenteísmo e afastamentos
                </li>
              </ul>
            </div>

            <p className="text-[11px] text-emerald-800/80 dark:text-emerald-400 italic">
              Observados com maior frequência em áreas administrativas, técnicas e em experimentos controlados.
            </p>
          </div>

          {/* Coluna Central: Eixo Decisório */}
          <div className="lg:col-span-2 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center space-y-3">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              NÚCLEO DO DEBATE
            </span>
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center font-bold text-base shadow-sm">
              6x1
            </div>
            <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase">
              REDUÇÃO DA JORNADA
            </h5>
            <div className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
              O impacto depende do setor, produtividade, modelo operacional e capacidade de reorganização.
            </div>
          </div>

          {/* Coluna 3: Potenciais Desafios */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-red-900 dark:text-red-300">
                  POTENCIAIS DESAFIOS
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-red-600 font-black">↑</span> Custo unitário por hora trabalhada
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-red-600 font-black">↑</span> Necessidade de contratação de turnos adicionais
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-red-600 font-black">↑</span> Complexidade de gestão das escalas de trabalho
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-red-600 font-black">↑</span> Desafio de cobertura operacional contínua
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-red-600 font-black">↑</span> Pressão sobre setores intensivos em mão de obra
                </li>
              </ul>
            </div>

            <p className="text-[11px] text-red-800/80 dark:text-red-400 italic">
              Destacados com maior intensidade em plantas fabris de manufatura contínua, varejo e serviços 24/7.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
