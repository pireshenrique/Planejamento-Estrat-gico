import React from 'react';
import { 
  GraduationCap, 
  Search, 
  Target, 
  TrendingUp, 
  Compass, 
  Factory, 
  ShieldCheck, 
  Briefcase, 
  Cpu, 
  BookOpen, 
  Award, 
  Wrench,
  Users,
  AlertTriangle,
  DollarSign,
  TrendingDown,
  ZoomIn,
  X,
  FileText,
  ExternalLink
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface PageProps {
  setActivePage?: (page: string) => void;
}

const REPORT_PDF_URL = 'https://7793757.hs-sites.com/hubfs/MPG_EscassezdeTalentos_2026.pdf';



// ----------------------------------------------------------------------------
// EVIDÊNCIAS DE DESTAQUE (EVIDÊNCIAS PRINCIPAIS)
// ----------------------------------------------------------------------------
const MAODEOBRA_PRIMARY_EVIDENCES: Evidence[] = [
  {
    id: 'mob-folha-escassez-80',
    tag: 'Pesquisa Nacional / Folha de S.Paulo',
    dateStr: '2026',
    title: 'Escassez de mão de obra atinge 80% dos empregadores',
    headline: 'Pesquisa nacional revela que 80% dos empregadores no Brasil enfrentam escassez de candidatos qualificados para preencher postos de trabalho abertos, atingindo patamares históricos nos setores industriais e técnicos.',
    source: 'Folha de S.Paulo',
    url: 'https://www1.folha.uol.com.br/mercado/2026/07/escassez-de-mao-de-obra-atinge-80-dos-empregadores-no-brasil-aponta-pesquisa.shtml'
  },
  {
    id: 'mob-exame-custo-335bi',
    tag: 'Impacto Econômico / Exame',
    dateStr: '2026',
    title: 'Escassez de mão de obra qualificada custa R$ 335 bilhões ao Brasil, diz estudo',
    headline: 'Estudo quantifica as perdas econômicas decorrentes do déficit de mão de obra técnica e especializada no país, calculando um impacto anual de R$ 335 bilhões gerado por ociosidade produtiva, atrasos em investimentos e ineficiências operacionais.',
    source: 'Exame',
    url: 'https://exame.com/brasil/escassez-de-mao-de-obra-qualificada-custa-r-335-bilhoes-ao-brasil-diz-estudo/'
  },
  {
    id: 'mob-forbes-tech-98',
    tag: 'Tecnologia & Operações / Forbes Brasil',
    dateStr: '2026',
    title: 'Escassez de Talentos em Tecnologia Desafia 98% das Empresas no Brasil',
    headline: 'Dados apontam que 98% das organizações no Brasil enfrentam escassez severa na atração e retenção de especialistas técnicos em automação, engenharia de software e infraestrutura digital, intensificando a necessidade de capacitação interna.',
    source: 'Forbes Brasil',
    url: 'https://forbes.com.br/carreira/2026/04/escassez-de-talentos-em-tecnologia-desafia-98-das-empresas-no-brasil/'
  }
];

// ----------------------------------------------------------------------------
// EVIDÊNCIAS COMPLEMENTARES
// ----------------------------------------------------------------------------
const MAODEOBRA_COMPLEMENTARY_EVIDENCES: Evidence[] = [
  {
    id: 'mob-cnn-dificuldade-vagas',
    tag: 'Macroeconomia / CNN Brasil',
    dateStr: '2026',
    title: 'Mão de obra escassa: 80% das empresas têm dificuldade para preencher vagas',
    headline: 'Levantamento econômico detalha que 8 em cada 10 companhias no Brasil relatam obstáculos críticos para preencher vagas técnicas e operacionais, afetando cronogramas de entrega e produtividade fabril.',
    source: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/economia/macroeconomia/mao-de-obra-escassa-80-das-empresas-tem-dificuldade-para-preencher-vagas/'
  }
];

export function MaoDeObraQualificadaView({ setActivePage }: PageProps) {
  const [selectedImage, setSelectedImage] = React.useState<{ src: string; title: string } | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* ========================================================================= */}
      {/* HEADER NO PADRÃO EXATO                                                    */}
      {/* ========================================================================= */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Trabalho e Qualificação • Subtópico 01
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">•</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              Planejamento Estratégico 2027–2037
            </span>
          </div>

          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Mão de Obra Qualificada
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 mb-4">
            Diagnóstico do déficit de profissionais técnicos e especializados, impactos econômicos da escassez de competências e estratégias corporativas de capacitação.
          </p>

          {/* Subtopic Switcher Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1 flex-wrap">
            <button 
              onClick={() => setActivePage?.('Trabalho e Qualificação')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Visão Geral
            </button>
            <button 
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm cursor-default"
            >
              Mão de Obra
            </button>
            <button 
              onClick={() => setActivePage?.('Soft skills')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Soft Skills
            </button>
            <button 
              onClick={() => setActivePage?.('IA e o futuro do trabalho')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              IA e o Futuro
            </button>
            <button 
              onClick={() => setActivePage?.('Automação')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Automação
            </button>
          </div>
        </div>

        {/* 3 Metric Cards no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          {/* Card 1: Dificuldade de Contratação */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                ESCASSEZ DE MÃO DE OBRA
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-amber-600 dark:text-amber-400 leading-none">
                  80%
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Dos empregadores no Brasil.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Dificuldade para preencher vagas (Folha / CNN).</p>
            </div>
          </div>

          {/* Card 2: Custo Econômico */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                CUSTO AO PAÍS
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  R$ 335 Bi
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Prejuízo anual estimado.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Perdas de produtividade fabril (Exame).</p>
            </div>
          </div>

          {/* Card 3: Desafio em Tecnologia */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                DESAFIO EM TECNOLOGIA
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  98%
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Das empresas no Brasil.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Escassez técnica severa (Forbes).</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. PRINCIPAIS NOTÍCIAS E DADOS GLOBAIS / NACIONAIS (EVIDENCECARDS)       */}
      {/* ========================================================================= */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Principais Notícias e Dados Globais / Nacionais
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>Folha de S.Paulo • Exame • Forbes Brasil</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {MAODEOBRA_PRIMARY_EVIDENCES.map((ev) => (
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
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      O que observar nos próximos meses
                    </h4>
                    <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-orange-700 dark:text-orange-400 font-semibold">
                        Gargalos no preenchimento de postos técnicos, custos de ociosidade operacional e aceleração de programas de qualificação.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>O comportamento do índice de escassez que atinge 80% dos empregadores no Brasil para preencher vagas em aberto (Folha de S.Paulo).</li>
                    <li>O impacto econômico direto da falta de mão de obra qualificada, estimado em R$ 335 bilhões ao ano em perdas de produtividade (Exame).</li>
                    <li>O desafio enfrentado por 98% das organizações na atração e retenção de especialistas técnicos em automação e tecnologia (Forbes Brasil).</li>
                    <li>As dificuldades generalizadas de companhias nacionais para suprir postos fabris e operacionais (CNN Brasil).</li>
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
                        Capacitação interna em linha viva, atração técnica qualificada e mitigação de gargalos fabris.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>A escassez que atinge 80% dos empregadores <strong className="text-slate-800 dark:text-slate-200">pode aumentar</strong> a concorrência na atração de operadores de ferramentaria, injeção plástica e manutenção eletromecânica.</li>
                    <li>O custo de perdas de produtividade por déficit técnico <strong className="text-slate-800 dark:text-slate-200">pode demandar</strong> o fortalecimento de academias internas e treinamentos no posto de trabalho.</li>
                    <li>O desafio de 98% das empresas em funções de tecnologia <strong className="text-slate-800 dark:text-slate-200">pode gerar</strong> a oportunidade de estabelecer parcerias educacionais direcionadas às necessidades fabris da Lorenzetti.</li>
                    <li>A carência de candidatos habilitados reportada pelo mercado <strong className="text-slate-800 dark:text-slate-200">pode exigir</strong> ações contínuas de valorização e retenção do quadro técnico fabril.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EVIDÊNCIAS EMPÍRICAS: PESQUISA DE ESCASSEZ DE TALENTOS (MANPOWERGROUP)  */}
      {/* ========================================================================= */}
      <section id="escassez-talentos-manpower" className="scroll-mt-12 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-8">
        
        {/* Cabeçalho do Bloco */}
        <div className="flex flex-col gap-3 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              ESCASSEZ DE TALENTOS • BRASIL • 2026
            </span>
            <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 w-fit">
              Fonte: <strong>ManpowerGroup — Pesquisa de Escassez de Talentos 2026</strong>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
            Escassez de Talentos no Brasil (Série Histórica e Distribuição Setorial)
          </h3>

          <p className="text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
            Evidências documentais extraídas da Pesquisa Global de Escassez de Talentos 2026 conduzida pelo ManpowerGroup, apresentando a evolução temporal do indicador brasileiro e a distribuição das dificuldades de contratação por setor de atividade econômica.
          </p>
        </div>

        {/* 1. PRIMEIRA IMAGEM — EVOLUÇÃO HISTÓRICA */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-6 flex flex-col">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-500 border-b border-slate-100 pb-2">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Evidência Documental • Evolução Histórica no Brasil (2014–2026)
            </span>
            <button
              type="button"
              onClick={() => setSelectedImage({
                src: '/escassez_tempo_brasil_2026.png',
                title: 'Escassez de Talentos ao longo do tempo no Brasil — ManpowerGroup 2026'
              })}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-lg transition-colors cursor-pointer text-[12px] font-medium"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Clique para ampliar</span>
            </button>
          </div>

          <div 
            className="w-full flex justify-center cursor-zoom-in"
            onClick={() => setSelectedImage({
              src: '/escassez_tempo_brasil_2026.png',
              title: 'Escassez de Talentos ao longo do tempo no Brasil — ManpowerGroup 2026'
            })}
          >
            <img 
              src="/escassez_tempo_brasil_2026.png" 
              alt="Escassez de Talentos ao longo do tempo no Brasil" 
              className="w-full h-auto max-h-[620px] object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 2. SEGUNDA IMAGEM — ESCASSEZ POR SETORES */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-6 flex flex-col">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-500 border-b border-slate-100 pb-2">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Evidência Documental • Escassez de Talentos por Setores no Brasil
            </span>
            <button
              type="button"
              onClick={() => setSelectedImage({
                src: '/escassez_setores_brasil_2026.png',
                title: 'Escassez de Talentos por setores no Brasil — ManpowerGroup 2026'
              })}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-lg transition-colors cursor-pointer text-[12px] font-medium"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Clique para ampliar</span>
            </button>
          </div>

          <div 
            className="w-full flex justify-center cursor-zoom-in"
            onClick={() => setSelectedImage({
              src: '/escassez_setores_brasil_2026.png',
              title: 'Escassez de Talentos por setores no Brasil — ManpowerGroup 2026'
            })}
          >
            <img 
              src="/escassez_setores_brasil_2026.png" 
              alt="Escassez de Talentos por setores no Brasil" 
              className="w-full h-auto max-h-[620px] object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* FONTE E LINKS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 space-y-0.5">
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              Fonte: ManpowerGroup — Pesquisa de Escassez de Talentos 2026
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Pesquisa realizada com mais de 39 mil empregadores em 41 países, incluindo 1.020 entrevistas no Brasil.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Botão Secundário: Página oficial do estudo */}
            <a
              href="https://www.manpowergroup.com.br/insights/estudos/pesquisa-de-escassez-de-talentos-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
            >
              <span>Página oficial do estudo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Botão Principal: Visualizar relatório completo (PDF) */}
            <a
              href={REPORT_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 transition-colors shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Visualizar relatório completo ↗</span>
            </a>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. OUTRAS NOTÍCIAS E MONITORAMENTO CONTÍNUO (EVIDENCECARDS)               */}
      {/* ========================================================================= */}
      <section id="evidencias-complementares" className="scroll-mt-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">
              Outras Notícias e Monitoramento
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Fontes: <strong>CNN Brasil</strong>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {MAODEOBRA_COMPLEMENTARY_EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* Lightbox / Modal para ampliação das imagens originais */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 md:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-xs font-semibold">
              <span className="truncate pr-4">{selectedImage.title}</span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer shrink-0"
                title="Fechar (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2 sm:p-4 overflow-auto flex items-center justify-center bg-slate-100 max-h-[calc(92vh-50px)]">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-w-full h-auto object-contain rounded-lg shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export const MaoDeObraQualificadaViewAlias = MaoDeObraQualificadaView;
export default MaoDeObraQualificadaView;
