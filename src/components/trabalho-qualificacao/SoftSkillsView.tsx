import React from 'react';
import { 
  HeartHandshake, 
  Search, 
  Target, 
  MessageSquare, 
  Brain, 
  Sparkles, 
  Bot, 
  Users, 
  Share2,
  Cpu,
  Zap
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface PageProps {
  setActivePage?: (page: string) => void;
}



// ----------------------------------------------------------------------------
// EVIDÊNCIAS DE DESTAQUE (3 PRINCIPAIS NOTÍCIAS COM URLs EXATAS FORNECIDAS)
// ----------------------------------------------------------------------------
const SOFT_SKILLS_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'soft-exame-ia-contratacoes',
    tag: 'IA & Contratações / Exame',
    dateStr: '2026',
    title: 'IA avança, mas as soft skills continuam decidindo contratações',
    headline: 'Mesmo com o avanço acelerado da inteligência artificial e a automação de processos nas empresas, as competências comportamentais e humanas seguem como critério determinante na decisão final de contratação.',
    source: 'Exame (Inteligência Artificial)',
    url: 'https://exame.com/inteligencia-artificial/ia-avanca-nas-empresas-mas-soft-skills-seguem-decidindo-contratações'
  },
  {
    id: 'soft-exame-linkedin-comunicacao',
    tag: 'Competências em Alta / Exame (LinkedIn)',
    dateStr: '2026',
    title: 'Comunicação já aparece entre as habilidades que mais crescem no Brasil',
    headline: 'Levantamento oficial do LinkedIn divulgado pela Exame destaca a habilidade de comunicação entre as 15 competências em maior ascensão no mercado de trabalho brasileiro, refletindo a demanda por clareza e alinhamento.',
    source: 'Exame (Carreira / LinkedIn)',
    url: 'https://exame.com/carreira/essas-sao-as-15-habilidades-em-alta-para-2025-no-brasil-segundo-o-linkedin/'
  },
  {
    id: 'soft-infomoney-inteligencia-emocional',
    tag: 'Seleção & Escassez / InfoMoney',
    dateStr: '2026',
    title: 'Inteligência emocional e pensamento crítico estão entre as competências mais difíceis de encontrar',
    headline: 'Mapeamento de processos seletivos e contratações aponta que inteligência emocional e pensamento crítico figuram entre as competências mais demandadas e, ao mesmo tempo, mais escassas entre os candidatos.',
    source: 'InfoMoney (Carreira)',
    url: 'https://www.infomoney.com.br/carreira/o-que-empregadores-buscam-processos-seletivos-ti/'
  }
];

// ----------------------------------------------------------------------------
// EVIDÊNCIAS COMPLEMENTARES DE APOIO E MONITORAMENTO
// ----------------------------------------------------------------------------
const SOFT_SKILLS_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'soft-wef-future-jobs',
    tag: 'Tendências Globais / WEF',
    dateStr: '2026',
    title: 'WEF lista pensamento crítico, resiliência e comunicação como competências centrais até 2030',
    headline: 'Relatório do Fórum Econômico Mundial confirma que habilidades socioemocionais constituem a principal barreira contra a obsolescência profissional frente ao avanço de modelos cognitivos e automação.',
    source: 'World Economic Forum (WEF)',
    url: 'https://www.weforum.org/'
  },
  {
    id: 'soft-cni-lideranca-fabril',
    tag: 'Indústria Nacional / CNI & ABRH',
    dateStr: '2026',
    title: 'Indústria nacional direciona investimentos para capacitação comportamental de encarregados',
    headline: 'Pesquisa da CNI e ABRH indica que programas voltados a diálogo empático, mediação de conflitos e inteligência emocional em turnos operacionais reduzem ruídos de produção e aprimoram a retenção.',
    source: 'Confederação Nacional da Indústria (CNI)',
    url: 'https://www.portaldaindustria.com.br/'
  },
  {
    id: 'soft-senai-socioemocionais',
    tag: 'Educação Profissional / SENAI',
    dateStr: '2026',
    title: 'SENAI integra módulos socioemocionais em cursos técnicos industriais',
    headline: 'Currículos de formação técnica passam a incluir avaliação e práticas de comunicação assertiva, trabalho colaborativo e resolução de problemas complexos em conjunto com matérias técnicas.',
    source: 'SENAI Nacional',
    url: 'https://www.portaldaindustria.com.br/senai/'
  }
];

export function SoftSkillsView({ setActivePage }: PageProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* CABEÇALHO DA PÁGINA COM NAVEGAÇÃO E 3 CARDS DE INDICADORES PRINCIPAIS     */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-4 bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Lado Esquerdo: Identificação & Navegação */}
        <div className="w-full xl:w-4/12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Trabalho e Qualificação • Subtópico 02
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Planejamento Estratégico 2027–2037</span>
            </div>
            
            <h1 className="text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight flex items-center gap-2.5">
              <HeartHandshake className="w-7 h-7 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Soft Skills
            </h1>
            
            <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Mapeamento de competências comportamentais, comunicação, inteligência emocional e pensamento crítico frente ao avanço da inteligência artificial no mercado de trabalho em 2026.
            </p>
          </div>

          {/* Navegação Rápida entre Subtópicos */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage && setActivePage?.('Trabalho e Qualificação')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral
            </button>
            <button 
              onClick={() => setActivePage && setActivePage?.('Mão de obra qualificada')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Mão de Obra
            </button>
            <button 
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Soft Skills
            </button>
            <button 
              onClick={() => setActivePage && setActivePage?.('IA e o futuro do trabalho')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              IA e o Futuro
            </button>
            <button 
              onClick={() => setActivePage && setActivePage?.('Automação')}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Automação
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          {/* Card 1: IA vs Soft Skills */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                DECISÃO NO RECRUTAMENTO
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  Soft Skills
                </h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Seguem decidindo contratações com avanço da IA.</p>
              <p className="text-[11.5px] text-slate-400 mt-1 leading-tight font-medium">Exame (Inteligência Artificial).</p>
            </div>
          </div>

          {/* Card 2: Comunicação em Alta */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                HABILIDADES EM ALTA (2026)
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  Comunicação
                </h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Comunicação e storytelling em ascensão no Brasil.</p>
              <p className="text-[11.5px] text-slate-400 mt-1 leading-tight font-medium">LinkedIn — Habilidades em Alta 2026.</p>
            </div>
          </div>

          {/* Card 3: Escassez Crítica */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                MAIS DIFÍCEIS DE ENCONTRAR
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[22px] 2xl:text-[24px] font-black text-purple-600 dark:text-purple-400 leading-none">
                  IE & Crítico
                </h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Inteligência emocional e pensamento crítico.</p>
              <p className="text-[11.5px] text-slate-400 mt-1 leading-tight font-medium">InfoMoney & WEF.</p>
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
              Principais Notícias de Soft Skills (Alinhadas aos Indicadores)
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes das Evidências: <strong>Exame • LinkedIn 2026 • InfoMoney</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {SOFT_SKILLS_PRIMARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. O QUE OBSERVAR NOS PRÓXIMOS MESES / IMPACTO PARA A EMPRESA             */}
      {/* ========================================================================= */}
      <section>
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
                      Avanço da IA na triagem técnica, ascensão da comunicação no LinkedIn e escassez de inteligência emocional e pensamento crítico em 2026.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <ul className="list-disc pl-4 space-y-2 marker:text-blue-400 dark:marker:text-blue-500/70">
                  <li>O comportamento das empresas que, mesmo adotando inteligência artificial em larga escala, mantêm as soft skills como fator decisivo nas contratações (Exame).</li>
                  <li>A consolidação da comunicação, storytelling e coordenação entre as competências que mais crescem no Brasil segundo o levantamento do LinkedIn (2026).</li>
                  <li>A dificuldade persistente relatada por recrutadores para encontrar candidatos com inteligência emocional e pensamento crítico consolidados (InfoMoney).</li>
                  <li>A adaptação dos currículos de formação profissional e técnica para integrar o desenvolvimento de competências socioemocionais (SENAI / WEF).</li>
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
                      Aprimoramento dos critérios de seleção de lideranças, reforço na comunicação fabril e trilhas de inteligência emocional para encarregados.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                  <li>O papel decisivo das soft skills frente ao avanço da IA <strong className="text-slate-800 dark:text-slate-200">pode demandar acompanhamento</strong> nos processos seletivos de liderança técnica e supervisão fabril.</li>
                  <li>O crescimento da comunicação como competência crítica <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades</strong> para estruturar treinamentos contínuos de diálogo operacional e alinhamento de turnos.</li>
                  <li>A escassez de inteligência emocional e pensamento crítico <strong className="text-slate-800 dark:text-slate-200">pode representar risco</strong> de atrito em células produtivas e elevar a necessidade de capacitação comportamental interna.</li>
                  <li>O desenvolvimento de pensamento crítico em equipes multidisciplinares <strong className="text-slate-800 dark:text-slate-200">pode aumentar</strong> a eficiência na resolução de anomalias em linhas automatizadas de produção.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GRANDE BLOCO ESTRATÉGICO DE SOFT SKILLS (CENÁRIO 2026 E PERSPECTIVA)    */}
      {/* ========================================================================= */}
      <section id="bloco-estrategico-soft-skills" className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-10">
        
        {/* CABEÇALHO DO BLOCO */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2 max-w-4xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                SOFT SKILLS • CENÁRIO 2026 • TENDÊNCIAS ATÉ 2030
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
              Soft Skills que ganham relevância no mercado de trabalho
            </h3>

            <p className="text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Em 2026, o avanço da inteligência artificial, da automação e de novas formas de trabalho reforça a combinação entre competências tecnológicas e habilidades humanas relacionadas à análise, adaptação, liderança, comunicação e colaboração.
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 self-start">
            <span className="font-semibold block text-slate-700 dark:text-slate-300">Evidências:</span>
            <span>LinkedIn 2026 • WEF • Exame • InfoMoney</span>
          </div>
        </div>

        {/* PRIMEIRO BLOCO — BRASIL EM 2026 (LINKEDIN HABILIDADES EM ALTA) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                Principal Evidência do Cenário Brasileiro Atual
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                O que está ganhando relevância no Brasil em 2026?
              </h4>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Fonte: <strong>LinkedIn — Habilidades em Alta no Brasil em 2026</strong>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
            O levantamento Habilidades em Alta do LinkedIn identifica as competências que apresentaram maior crescimento recente no mercado brasileiro, destacando a necessidade de transmitir mensagens com clareza, alinhar diferentes públicos e integrar pessoas e tecnologia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            {/* Competência 1: Comunicação */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                    EM ALTA EM 2026
                  </span>
                  <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <h5 className="text-base font-bold text-slate-900 dark:text-white">
                  Comunicação
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Clareza na transmissão de informações e alinhamento em ambientes profissionais cada vez mais complexos.
                </p>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800 font-medium">
                Tendência de Mercado • LinkedIn
              </div>
            </div>

            {/* Competência 2: Storytelling */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                    EM ALTA EM 2026
                  </span>
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <h5 className="text-base font-bold text-slate-900 dark:text-white">
                  Storytelling
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Capacidade de estruturar informações e transformar conteúdos complexos em mensagens compreensíveis.
                </p>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800 font-medium">
                Tendência de Mercado • LinkedIn
              </div>
            </div>

            {/* Competência 3: Gestão de Stakeholders */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                    EM ALTA EM 2026
                  </span>
                  <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <h5 className="text-base font-bold text-slate-900 dark:text-white">
                  Gestão de Stakeholders
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Capacidade de alinhar interesses, comunicar prioridades e coordenar diferentes públicos.
                </p>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800 font-medium">
                Tendência de Mercado • LinkedIn
              </div>
            </div>

            {/* Competência 4: Colaboração / Coordenação entre Áreas */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3 hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                    TENDÊNCIA 2026
                  </span>
                  <Share2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h5 className="text-base font-bold text-slate-900 dark:text-white">
                  Colaboração & Coordenação
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Competências relacionadas à colaboração transversal ganham importância em ambientes com maior integração entre pessoas, processos e tecnologia.
                </p>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800 font-medium">
                Tendência de Mercado • LinkedIn
              </div>
            </div>

          </div>

          <div className="text-[11.5px] text-slate-500 dark:text-slate-400 italic bg-slate-50/50 dark:bg-slate-800/30 px-3.5 py-2 rounded-xl border border-slate-100 dark:border-slate-800">
            *Nota metodológica: As competências acima estão representadas como tendências qualitativas identificadas pelo levantamento oficial, sem atribuição de percentuais artificiais não fornecidos pela fonte primária.
          </div>
        </div>



      </section>

      {/* ========================================================================= */}
      {/* 4. OUTRAS NOTÍCIAS E EVIDÊNCIAS DE SUPORTE (EVIDENCECARDS)                */}
      {/* ========================================================================= */}
      <section id="evidencias-complementares" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Outras Notícias e Monitoramento de Soft Skills
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Evidências institucionais de capacitação, liderança fabril e tendências de competências socioemocionais.
            </p>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>World Economic Forum • CNI • SENAI</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {SOFT_SKILLS_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const SoftSkillsViewAlias = SoftSkillsView;
export default SoftSkillsView;
