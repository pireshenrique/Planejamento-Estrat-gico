import { EvidenceCard } from '../layout/EvidenceCard';
import React from 'react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { 
  GraduationCap, 
  Target, 
  TrendingUp, 
  Search, 
  CheckCircle,
  Activity,
  Layers,
  ArrowUpRight,
  Calendar,
  BookOpen,
  School,
  Globe,
  Award,
  Cpu,
  FlaskConical,
  Microscope,
  Compass,
  Building2,
  UtensilsCrossed
} from 'lucide-react';

interface EducacaoCienciaTecnologiaViewProps {
  setActivePage: (page: string) => void;
}

const EVIDENCES = [
  {
    id: 'ev-edu-1',
    title: 'MEC anuncia R$ 785 milhões para construção de 117 escolas indígenas',
    source: 'CNN Brasil',
    date: '27/02/2026',
    url: 'https://www.cnnbrasil.com.br/educacao/mec-anuncia-r-785-milhoes-para-construcao-de-117-escolas-indigenas/',
    summary: 'O Ministério da Educação anunciou R$ 785 milhões para a construção de 117 escolas indígenas em 17 estados no âmbito do eixo Educação, Ciência e Tecnologia do Novo PAC, com infraestrutura adaptada à realidade territorial e cultural das comunidades.',
    category: 'Educação Básica & Inclusão'
  },
  {
    id: 'ev-edu-2',
    title: 'Campus Matão do IFSP inaugura restaurante estudantil',
    source: 'IFSP',
    date: '02/06/2026',
    url: 'https://www.ifsp.edu.br/index.php/eja2026/17-ultimas-noticias/5909-campus-matao-do-ifsp-inaugura-restaurante-estudantil',
    summary: 'Inauguração de restaurante estudantil com apoio de R$ 7,3 milhões do Novo PAC para cinco unidades. O programa contempla R$ 1,6 bilhão para melhoria e ampliação da infraestrutura dos Institutos Federais (270 restaurantes previstos e 46 concluídos), além de abrigar Polo de Inovação Embrapii em engenharia e tecnologia de alimentos.',
    category: 'Educação Profissional & Inovação'
  },
  {
    id: 'ev-edu-3',
    title: 'Planejamento de expansão da UFTM segue com o MEC',
    source: 'UFTM',
    date: '25/05/2026',
    url: 'https://www.uftm.edu.br/ultimas-noticias/7016-planejamento-de-expansao-da-uftm-segue-com-o-mec',
    summary: 'A Universidade Federal do Triângulo Mineiro submeteu 14 propostas de novos cursos, somando-se à implantação de oito novos cursos entre 2026 e 2027 pelo Novo PAC, estruturados para atender desafios de transformação digital, economia de baixo carbono e transição demográfica.',
    category: 'Educação Superior & Futuro'
  },
  {
    id: 'ev-edu-4',
    title: 'Recursos do Novo PAC na UFABC: aporte recente para entrega da Unidade Tamanduatehy e atualizações sobre a passarela e as obras de SBC',
    source: 'UFABC',
    date: '19/02/2026',
    url: 'https://www.ufabc.edu.br/noticias/recursos-do-novo-pac-na-ufabc-aporte-recente-para-entrega-da-unidade-tamanduatehy-e-atualizacoes-sobre-a-passarela-e-as-obras-de-sbc',
    summary: 'A UFABC recebeu R$ 8 milhões do Novo PAC para mobiliário, equipamentos e infraestrutura de rede dos laboratórios da Unidade Tamanduatehy, somando-se a R$ 27,79 milhões do programa para obras civis dos blocos H e I e outros projetos de infraestrutura universitária.',
    category: 'Pesquisa & Infraestrutura Científica'
  },
  {
    id: 'ev-edu-5',
    title: 'Cemaden expande rede de monitoramento e passa a monitorar 1.295 municípios',
    source: 'Cemaden / MCTI',
    date: '25/03/2026',
    url: 'https://www.gov.br/cemaden/pt-br/assuntos/noticias-cemaden/cemaden-expande-rede-de-monitoramento-e-passa-a-monitorar-1-295-municipios',
    summary: 'Expansão da rede de monitoramento do Cemaden de 1.133 para 1.295 municípios, com a incorporação de 162 novas cidades no Novo PAC, ampliando a infraestrutura de sensores, dados e prevenção de desastres geo-hidrológicos.',
    category: 'Ciência Aplicada & Dados'
  }
];

export function EducacaoCienciaTecnologiaView({ setActivePage }: EducacaoCienciaTecnologiaViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200" id="educacao-ciencia-root">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6" id="educacao-ciencia-header">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight" id="educacao-ciencia-title">
            Educação, Ciência e Tecnologia
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed" id="educacao-ciencia-desc">
            Acompanhamento dos investimentos do Novo PAC em educação básica territorial, expansão e permanência nos Institutos Federais, formação universitária estratégica e infraestrutura de pesquisa e monitoramento.
          </p>
        </div>

        <ResponsiveContainer minWidth="240px" gap="gap-3" className="w-full flex-1" id="educacao-ciencia-grid">
          {/* Card 1 — Infraestrutura dos IFs */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="educacao-ciencia-card-1">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0">
              <School className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">INFRAESTRUTURA DOS IFS</p>
              <div className="flex items-baseline gap-1">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">R$ 1,6 BI</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Melhoria e ampliação da infraestrutura da Rede Federal de Educação Profissional, Científica e Tecnológica.</p>
            </div>
          </div>

          {/* Card 2 — Educação Indígena */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="educacao-ciencia-card-2">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">EDUCAÇÃO INDÍGENA</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">R$ 785 MI</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">117 escolas em 17 estados no Novo PAC.</p>
            </div>
          </div>

          {/* Card 3 — Monitoramento Cemaden */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="educacao-ciencia-card-3">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">MONITORAMENTO CEMADEN</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">1.295</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Municípios monitorados, com 162 novas cidades incorporadas pelo Novo PAC.</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-snug">Cemaden — Centro Nacional de Monitoramento e Alertas de Desastres Naturais.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section id="educacao-ciencia-analise-section">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Análise Estratégica
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            
            {/* 1. O que aconteceu e o que explica o resultado */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs" id="educacao-ciencia-analise-1">
              <div className="flex flex-col gap-6">
                
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-800">
                      <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">1. O que aconteceu e o que explica o resultado</h4>
                      <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                        <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                          Expansão da educação territorial, fortalecimento da rede federal e ampliação da infraestrutura científica e de monitoramento.
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800 shrink-0">
                    FATO
                  </span>
                </div>

                <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                  <p>
                    No segmento da educação básica, o Ministério da Educação destinou R$ 785 milhões do eixo Educação, Ciência e Tecnologia do Novo PAC para a construção de 117 escolas indígenas em 17 estados, com modelos de infraestrutura adaptados às características territoriais e culturais das comunidades.
                  </p>
                  <p>
                    Na educação profissional, o Novo PAC contempla R$ 1,6 bilhão para melhoria e ampliação da infraestrutura dos Institutos Federais, incluindo restaurantes estudantis e estruturas de inovação. No ensino superior, universidades federais avançam na criação de novos cursos alinhados a transformações como digitalização, descarbonização e mudanças demográficas.
                  </p>
                  <p>
                    Na frente de ciência e tecnologia, os investimentos apoiam infraestrutura laboratorial e pesquisa universitária, além da expansão da rede do Cemaden, que passou a monitorar 1.295 municípios, com 162 novas cidades incorporadas pelo Novo PAC.
                  </p>
                  <p>
                    Em conjunto, os investimentos ampliam a capacidade de formação, pesquisa e geração de conhecimento aplicado, combinando expansão territorial da educação com infraestrutura científica e tecnológica.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Evidências utilizadas: CNN Brasil (27/02/2026), IFSP (02/06/2026), UFTM (25/05/2026), UFABC (19/02/2026), Cemaden/MCTI (25/03/2026)
                  </div>
                </div>
              </div>
            </div>

            {/* 2. O que observar nos próximos meses e 3. Impacto para a Lorenzetti */}
            <ResponsiveContainer minWidth="320px" gap="gap-5" className="w-full" id="educacao-ciencia-duas-colunas">
              
              {/* Bloco 2: O que observar nos próximos meses */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col justify-between" id="educacao-ciencia-analise-2">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800">
                        <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">2. O que observar nos próximos meses</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                            Expansão da rede federal, consolidação da infraestrutura científica e alinhamento da formação às novas demandas produtivas.
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800 shrink-0">
                      MONITORAMENTO
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                    <p>
                      Acompanhar a execução e entrada em operação dos novos campi e da infraestrutura da Rede Federal, especialmente em regiões com expansão industrial e menor oferta de formação técnica.
                    </p>
                    <p>
                      Monitorar a implantação de novos cursos, laboratórios e estruturas de pesquisa, observando sua aderência a áreas como transformação digital, engenharia, descarbonização e novas tecnologias.
                    </p>
                    <p>
                      Observar a expansão de redes e sistemas científicos, como o Cemaden, e sua capacidade de transformar dados e pesquisa em serviços aplicados, especialmente diante do aumento dos riscos climáticos.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências utilizadas: CNN Brasil (27/02/2026), IFSP (02/06/2026), UFTM (25/05/2026), UFABC (19/02/2026), Cemaden/MCTI (25/03/2026)
                    </div>
                  </div>
                </div>
              </div>

              {/* Bloco 3: Impacto para a Lorenzetti */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col justify-between" id="educacao-ciencia-analise-3">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-800">
                        <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">3. Impacto para a Lorenzetti</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                            Hipóteses observacionais sobre formação de competências, desenvolvimento regional e resiliência operacional 2027–2037.
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800 shrink-0">
                      HIPÓTESE
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                    <p>
                      A expansão da infraestrutura educacional e científica pode ampliar a atividade de obras e serviços técnicos nas regiões atendidas. Para a Lorenzetti, o efeito é potencial e depende do perfil dos empreendimentos e dos canais de fornecimento envolvidos.
                    </p>
                    <p>
                      O fortalecimento de cursos e polos de inovação pode ampliar a disponibilidade regional de mão de obra qualificada em engenharia, automação e processos industriais, variável relevante para polos produtivos e para a disponibilidade futura de competências técnicas.
                    </p>
                    <p>
                      A expansão do monitoramento climático pode melhorar a capacidade de antecipação de eventos extremos. Para a Lorenzetti, esse avanço deve ser acompanhado como variável de resiliência logística e continuidade da distribuição regional no horizonte 2027–2037.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências Utilizadas: CNN Brasil (27/02/2026), IFSP (02/06/2026), UFTM (25/05/2026), UFABC (19/02/2026), Cemaden/MCTI (25/03/2026)
                    </div>
                  </div>
                </div>
              </div>

            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. MATRIZ DE FRENTES DE ATUAÇÃO */}
      <section className="flex flex-col gap-6" id="educacao-ciencia-frentes">
        
        <div className="flex flex-col gap-1 pb-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">2</div>
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
              Principais Frentes do Novo PAC – Educação, Ciência e Tecnologia
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 pl-[44px]">
            Pilares estratégicos de investimentos em educação básica e inclusão, educação profissional e tecnológica, e infraestrutura de ciência e monitoramento.
          </p>
        </div>

        <ResponsiveContainer minWidth="280px" gap="gap-6" className="w-full" id="educacao-ciencia-frentes-grid">
          
          {/* Card 1 — Educação Básica e Inclusão Territorial */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="educacao-ciencia-frente-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <School className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Educação Básica e<br />Inclusão Territorial
              </h3>
            </div>
            
            <div className="h-px w-full bg-indigo-100/70 dark:bg-indigo-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Construção de infraestrutura escolar adaptada às realidades territoriais e culturais de comunidades tradicionais.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-indigo-50/40 dark:bg-indigo-950/20 rounded-2xl p-5 border border-indigo-100/80 dark:border-indigo-900/40 mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 block">APORTE NOVO PAC</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                  R$ 785 <span className="text-[22px] md:text-[24px] font-bold">mi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-indigo-100 dark:border-indigo-900/40">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-indigo-600 dark:text-indigo-400">117 escolas</strong> indígenas em 17 estados.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <Globe className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Ampliação do acesso à educação básica com infraestrutura adequada às especificidades territoriais.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — Educação Profissional, Superior e Inovação */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="educacao-ciencia-frente-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Educação Profissional,<br />Superior e Inovação
              </h3>
            </div>
            
            <div className="h-px w-full bg-blue-100/70 dark:bg-blue-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Ampliação da infraestrutura de permanência nos Institutos Federais e alinhamento de novos cursos universitários a transformações tecnológicas.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-blue-50/40 dark:bg-blue-950/20 rounded-2xl p-5 border border-blue-100/80 dark:border-blue-900/40 mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">INFRAESTRUTURA DOS IFs</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  R$ 1,6 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-100 dark:border-blue-900/40">
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-blue-600 dark:text-blue-400">8 novos cursos</strong> previstos na expansão da UFTM até 2027.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Activity className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Aumento da permanência estudantil, qualificação técnica e integração com polos de inovação tecnológica.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — Pesquisa, Laboratórios e Ciência Aplicada */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="educacao-ciencia-frente-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <FlaskConical className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Pesquisa, Laboratórios e<br />Ciência Aplicada
              </h3>
            </div>
            
            <div className="h-px w-full bg-emerald-100/70 dark:bg-emerald-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Modernização de infraestrutura laboratorial universitária e expansão do monitoramento de dados científicos e geo-hidrológicos.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/80 dark:border-emerald-900/40 mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 block">REDE CEMADEN</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                  <Microscope className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  1.295 <span className="text-[18px] md:text-[20px] font-bold text-emerald-600/90 dark:text-emerald-400/90">municípios</span>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-100 dark:border-emerald-900/40">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    162 novas cidades incorporadas pelo Novo PAC.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <Award className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Ampliação da capacidade nacional de pesquisa científica, infraestrutura laboratorial e gestão de riscos territoriais.
                </p>
              </div>
            </div>
          </div>

        </ResponsiveContainer>

        {/* Rodapé de Fontes da Seção 2 */}
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl px-5 py-3.5 flex items-center gap-3 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
            <Search className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-[13px] text-slate-600 dark:text-slate-400">
            <strong className="font-semibold text-blue-600 dark:text-blue-400">Fontes:</strong> CNN Brasil (27/02/2026), IFSP (02/06/2026), UFTM (25/05/2026), UFABC (19/02/2026), Cemaden/MCTI (25/03/2026)
          </p>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="educacao-ciencia-evidencias-section" className="scroll-mt-12 relative mt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Rastreabilidade direta de publicações especializadas e veículos de comunicação sobre o Novo PAC.</p>
          </div>
        </div>

        {EVIDENCES.length > 0 ? (
          <ResponsiveContainer minWidth="320px" gap="gap-5" className="w-full">
            {EVIDENCES.map((ev) => (
              <EvidenceCard key={ev.id} evidence={ev as any} />
            ))}
          </ResponsiveContainer>
        ) : (
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <Search className="w-8 h-8 text-slate-400 mb-3" />
            <p className="text-[15px] font-medium text-slate-600 dark:text-slate-400">Nenhuma evidência registrada no momento.</p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">As evidências serão exibidas aqui conforme novos relatórios e dados forem documentados.</p>
          </div>
        )}
      </section>

    </div>
  );
}

