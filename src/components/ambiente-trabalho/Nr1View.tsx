import React from 'react';
import { 
  ShieldAlert, 
  Calendar, 
  BarChart3, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Target, 
  Scale, 
  Eye, 
  Check, 
  Search,
  Radio,
  HelpCircle
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface Nr1ViewProps {
  setActivePage?: (page: string) => void;
}

// ============================================================================
// EVIDÊNCIAS DE DESTAQUE (ALINHADAS AOS 3 INDICADORES PRINCIPAIS COM URLs REAIS)
// ============================================================================
const NR1_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'nr1-g1-vigor-regras',
    tag: 'Marco Regulatório / G1',
    dateStr: '25/05/2026',
    title: 'NR-1 entra em vigor e amplia gestão dos riscos psicossociais',
    headline: 'A nova redação da NR-1 passou a vigorar em 26 de maio de 2026 e incluiu expressamente fatores de risco psicossociais relacionados ao trabalho no Gerenciamento de Riscos Ocupacionais (GRO).',
    source: 'G1 (Trabalho e Carreira)',
    url: 'https://g1.globo.com/trabalho-e-carreira/noticia/2026/05/25/nr-1-regra-entra-em-vigor-veja-o-que-muda.ghtml'
  },
  {
    id: 'nr1-exame-44-mapeamento',
    tag: 'Maturidade / Exame',
    dateStr: 'Panorama 2026',
    title: 'Apenas 44% das empresas já haviam mapeado riscos psicossociais',
    headline: 'Pesquisa sobre maturidade organizacional revelou que a adaptação ainda é desigual: 44% das organizações afirmavam ter mapeado os riscos, enquanto 39% ainda não haviam realizado o processo e 17% não sabiam informar.',
    source: 'Exame / Protiviti',
    url: 'https://exame.com/carreira/apesar-da-nr-1-apenas-44-das-empresas-mapeiam-riscos-de-saude-mental-no-brasil/'
  },
  {
    id: 'nr1-cnn-indicadores-gap',
    tag: 'Percepção vs Prática / CNN Brasil',
    dateStr: 'Estudo Swile/Poli-USP',
    title: 'Empresas dizem estar preparadas, mas poucos indicadores são monitorados',
    headline: 'Levantamento divulgado pela CNN apontou uma distância entre percepção e prática: 58,9% das empresas se consideravam preparadas, mas apenas uma parcela monitorava indicadores reais como horas extras (11,7%) e clima (23,9%).',
    source: 'CNN Brasil (Negócios)',
    url: 'https://www.cnnbrasil.com.br/economia/negocios/empresas-ignoram-indicadores-de-saude-mental-exigidos-pela-nr-1-diz-estudo/'
  }
];

// ============================================================================
// EVIDÊNCIAS COMPLEMENTARES DE MONITORAMENTO CONTÍNUO
// ============================================================================
const NR1_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'nr1-infomoney-cobranca-metas',
    tag: 'Gestão de Metas & Limites / InfoMoney',
    dateStr: '2026',
    title: 'Cobrança por resultado não é risco psicossocial: especialista esclarece a nova NR-1',
    headline: 'Especialistas esclarecem que a exigência de metas e desempenho integra a atividade empresarial legítima; o risco reside na humilhação, jornadas abusivas, falta de clareza e ausência de suporte estrutural.',
    source: 'InfoMoney (Carreira)',
    url: 'https://www.infomoney.com.br/carreira/cobranca-por-resultado-nao-e-risco-psicossocial-especialista-esclarece-a-nova-nr-1/'
  },
  {
    id: 'nr1-epoca-ambiente-trabalho',
    tag: 'Governança & Clima / Época Negócios',
    dateStr: '2026',
    title: 'Como a NR-1 altera a governança da saúde mental nas empresas brasileiras',
    headline: 'Com a inclusão dos riscos psicossociais no PGR, companhias passam a ser auditadas por medidas concretas de prevenção, canais de escuta e gestão de sobrecarga nos ambientes corporativos e fabris.',
    source: 'Época Negócios (Futuro do Trabalho)',
    url: 'https://epocanegocios.globo.com/futuro-do-trabalho/noticia/2026/03/salario-e-maior-motivacao-para-aceitar-emprego-mas-nao-garante-permanencia-na-empresa-diz-pesquisa.ghtml'
  },
  {
    id: 'nr1-mte-portal-inspecao',
    tag: 'Fonte Oficial / Ministério do Trabalho e Emprego',
    dateStr: '2026',
    title: 'Diretrizes Oficiais de Inspeção do Trabalho — Capítulo 1.5 da NR-1 (GRO/PGR)',
    headline: 'Texto normativo integral do Ministério do Trabalho e Emprego que estabelece o Gerenciamento de Riscos Ocupacionais e orienta as fiscalizações da Auditoria-Fiscal do Trabalho em todo o território nacional.',
    source: 'MTE / Governo Federal',
    url: 'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho'
  }
];

export function Nr1View({ setActivePage }: Nr1ViewProps) {
  return (
    <div className="w-full flex flex-col gap-6 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO DA PÁGINA COM 3 CARDS QUANTITATIVOS (MODELO PADRÃO DO PORTAL) */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Título e Identificação Executiva */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 flex items-center gap-1.5 shadow-xs">
                <Radio className="w-3 h-3 text-rose-600 dark:text-rose-400 animate-pulse" />
                CONFORMIDADE & RISCOS OCUPACIONAIS
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento 2027–2037</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <ShieldAlert className="w-7 h-7 text-rose-600 dark:text-rose-400 shrink-0" />
              NR-1: Riscos Psicossociais
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              A atualização do Capítulo 1.5 da NR-1 incorpora expressamente os fatores de risco psicossociais ao GRO e ao PGR, exigindo identificação, avaliação e controle no ambiente de trabalho.
            </p>
          </div>

          {/* Navegação Rápida entre Subtópicos de SST e Força de Trabalho */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage && setActivePage('Carreira e Gerações')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral
            </button>
            <button 
              onClick={() => setActivePage && setActivePage('Saúde Mental no Trabalho')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Saúde Mental
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              NR-1 Psicossociais
            </button>
            <button 
              onClick={() => setActivePage && setActivePage('Assédio no ambiente de trabalho')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              CIPA+A & Assédio
            </button>
            <button 
              onClick={() => setActivePage && setActivePage('Escala 6x1')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Escala 6x1
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          {/* Card 1: Vigência da NR-1 */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                VIGÊNCIA DA NR-1
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[20px] 2xl:text-[22px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  26 MAI 2026
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Entrada em vigor do Capítulo 1.5 com inclusão de riscos psicossociais no GRO/PGR.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Ministério do Trabalho e Emprego
              </p>
            </div>
          </div>

          {/* Card 2: 44% Mapearam */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                MAPEAMENTO PRÉVIO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-amber-600 dark:text-amber-400 leading-none">
                  44%
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Empresas que afirmavam ter realizado o mapeamento formal de riscos antes da vigência.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                Exame / Protiviti
              </p>
            </div>
          </div>

          {/* Card 3: 11,7% Monitoram Horas Extras */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                MONITORAMENTO REAL
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  11,7%
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Empresas que monitoram horas extras de perto, apesar de 58,9% se dizerem preparadas.
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                CNN Brasil / Swile / Poli-USP
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CARDS DE DESTAQUE: 3 EVIDÊNCIAS FUNDAMENTAIS (G1, EXAME, CNN BRASIL)   */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais Notícias sobre a Nova NR-1 (Riscos Psicossociais)
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes das Evidências: <strong>G1 • Exame • CNN Brasil</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {NR1_PRIMARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DUAS COLUNAS PRINCIPAIS: O QUE SE OBSERVA NO BRASIL vs LORENZETTI      */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Análise Estratégica Comparativa
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Cenário Regulatório Nacional e Hipóteses de Observação
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Coluna 01: Evidência / O que se observa no Brasil */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-blue-100 dark:border-blue-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-blue-50 dark:text-blue-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      Evidência / O que se observa no Brasil
                    </h4>
                    <div className="inline-flex bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold">
                        Entrada em vigor da nova NR-1 (Capítulo 1.5) e formalização dos riscos psicossociais no PGR.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                    A partir de 26 de maio de 2026, as empresas brasileiras devem obrigatoriamente incluir a identificação, avaliação e medidas de controle para fatores de risco psicossociais no Programa de Gerenciamento de Riscos (PGR), parte integrante do Gerenciamento de Riscos Ocupacionais (GRO).
                  </p>
                  <p>
                    Embora 58,9% das organizações declarem estar aptas, apenas 44% realizaram o mapeamento prévio formal e uma fração reduzida (11,7%) monitora sobrejornada contínua, evidenciando uma lacuna entre discurso de bem-estar e governança auditável de segurança ocupacional.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna 02: Impacto para a Lorenzetti */}
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
                      Impacto para a Lorenzetti
                    </h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Estruturação do GRO/PGR integrado, capacitação de liderança de chão de fábrica e métricas de clima.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>A vigência da NR-1 <strong className="text-slate-800 dark:text-slate-200">pode demandar</strong> a revisão formal do PGR para documentar matrizes de risco psicossocial nas linhas fabris e áreas de apoio.</li>
                    <li>O monitoramento de sobrejornada <strong className="text-slate-800 dark:text-slate-200">pode exigir</strong> acompanhamento mais próximo de horas extras e rotatividade em células de maior pressão operacional.</li>
                    <li>A capacitação contínua de supervisores e encarregados <strong className="text-slate-800 dark:text-slate-200">pode reduzir</strong> riscos de passivos trabalhistas e fortalecer a cultura de respeito mútuo.</li>
                    <li>A integração entre RH, Medicina do Trabalho e CIPA+A <strong className="text-slate-800 dark:text-slate-200">pode gerar oportunidades</strong> de redução de absenteísmo e aumento da retenção de talentos técnicos.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DIAGNÓSTICO: DISTÂNCIA ENTRE PERCEPÇÃO E MONITORAMENTO REAL            */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Levantamento Swile / Poli Jr. USP & CNN Brasil
            </span>
            <h2 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">
              Distância entre Percepção de Preparo e Monitoramento Prático
            </h2>
          </div>
          <a 
            href="https://www.cnnbrasil.com.br/economia/negocios/empresas-ignoram-indicadores-de-saude-mental-exigidos-pela-nr-1-diz-estudo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0"
          >
            Fonte: CNN Brasil
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Lado Esquerdo: Barras de Indicadores */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Barra 1: Percepção 58,9% */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-900 dark:text-white">
                  Empresas que afirmam estar preparadas para lidar com o bem-estar
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">58,9%</span>
              </div>
              <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '58.9%' }}></div>
              </div>
              <span className="text-[10.5px] text-slate-400 block mt-0.5">Percepção institucional declarada</span>
            </div>

            {/* Barra 2: Turnover 44,9% */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-900 dark:text-white">
                  Monitoram turnover (rotatividade de pessoal)
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">44,9%</span>
              </div>
              <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '44.9%' }}></div>
              </div>
              <span className="text-[10.5px] text-slate-400 block mt-0.5">Indicador de retenção e movimentação de pessoal</span>
            </div>

            {/* Barra 3: Clima 23,9% */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-900 dark:text-white">
                  Monitoram clima organizacional de forma estruturada
                </span>
                <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">23,9%</span>
              </div>
              <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '23.9%' }}></div>
              </div>
              <span className="text-[10.5px] text-slate-400 block mt-0.5">Pesquisas formais e acompanhamento de equipes</span>
            </div>

            {/* Barra 4: Horas Extras 11,7% */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-900 dark:text-white">
                  Monitoram horas extras e sobrejornada de perto
                </span>
                <span className="text-rose-600 dark:text-rose-400 font-bold text-sm">11,7%</span>
              </div>
              <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                <div className="h-full bg-rose-600 rounded-full" style={{ width: '11.7%' }}></div>
              </div>
              <span className="text-[10.5px] text-slate-400 block mt-0.5">Indicador crítico de sobrecarga crônica</span>
            </div>

          </div>

          {/* Lado Direito: Quadro Comparativo e Insight */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-center pb-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  QUADRO COMPARATIVO
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-center">
                  <span className="text-[11px] font-bold uppercase text-indigo-700 dark:text-indigo-300 block mb-1">
                    PERCEPÇÃO
                  </span>
                  <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                    58,9%
                  </div>
                  <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                    Dizem estar preparadas
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 block mb-1">
                    PRÁTICA REAL
                  </span>
                  <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                    11,7%
                  </div>
                  <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                    Monitoram sobrejornada
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 block mb-0.5">
                LEITURA ESTRATÉGICA
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                A conformidade com a nova NR-1 exigirá transformar discursos institucionais em rotinas rastreáveis de gestão de risco e medição contínua de fatores operacionais.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 5. DIFERENCIAÇÃO TÉCNICA: METAS vs RISCO PSICOSSOCIAL (INFOMONEY)        */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#111827] border border-amber-200/80 dark:border-amber-900/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Esclarecimento Jurídico e de Gestão
              </span>
              <h2 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">
                Cobrança por Resultado × Risco Psicossocial
              </h2>
            </div>
          </div>
          <a 
            href="https://www.infomoney.com.br/carreira/cobranca-por-resultado-nao-e-risco-psicossocial-especialista-esclarece-a-nova-nr-1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0"
          >
            Fonte: InfoMoney
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* O que é Prática Legítima */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Prática Empresarial Legítima
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                A exigência de resultados, produtividade, cumprimento de prazos e disciplina operacional faz parte do poder diretivo regular da empresa.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Estabelecer metas claras e desafiadoras</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cobrar cumprimento de padrões técnicos e prazos fabris</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Avaliar desempenho com base em critérios objetivos e transparentes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* O que entra no Fator de Risco */}
          <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                <h4 className="text-sm font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider">
                  O que Caracteriza Fator de Risco
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                O risco psicossocial surge quando a forma de gestão ou a organização do trabalho geram degradação contínua da saúde emocional.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Exposição pública, humilhação ou comunicação agressiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Metas comprovadamente inexequíveis sem dimensionamento de equipe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Jornadas abusivas reiteradas e supressão sistemática de pausas</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 6. OUTRAS EVIDÊNCIAS DE MONITORAMENTO CONTÍNUO                            */}
      {/* ========================================================================= */}
      <section id="evidencias-complementares" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Outras Evidências de NR-1 e Diretrizes Regulatórias
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>InfoMoney • Época Negócios • MTE</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {NR1_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}
