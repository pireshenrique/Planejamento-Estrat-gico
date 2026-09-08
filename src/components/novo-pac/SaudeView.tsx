import React from 'react';
import { EvidenceCard } from '../layout/EvidenceCard';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { 
  HeartPulse, 
  Target, 
  TrendingUp, 
  Search, 
  CheckCircle,
  Activity,
  Layers,
  ArrowUpRight,
  Calendar,
  Building2,
  Stethoscope,
  PlusCircle,
  Hospital,
  Shield,
  Truck,
  Award,
  Globe,
  Users,
  Baby,
  Ambulance
} from 'lucide-react';

interface SaudeViewProps {
  setActivePage: (page: string) => void;
}

// Catálogo de evidências estruturadas com base nas fontes fornecidas
const EVIDENCES = [
  {
    id: 'ev-saude-1',
    title: 'Ceará terá 24 novas unidades de Saúde em 22 cidades',
    source: 'O POVO',
    date: '24/04/2026',
    url: 'https://www.opovo.com.br/noticias/ceara/2026/04/24/ceara-tera-24-novas-unidades-de-saude-em-22-cidades-obras-devem-levar-ate-dois-anos.html',
    summary: 'Investimento de R$ 56,5 milhões do Novo PAC Saúde para a construção de 24 unidades em 22 municípios cearenses: 16 Unidades Básicas de Saúde (UBS), 7 Centros de Atenção Psicossocial (CAPS) e 1 Centro Especializado em Reabilitação (CER), com previsão de execução em até dois anos.',
    category: 'Atenção Primária & Reabilitação'
  },
  {
    id: 'ev-saude-2',
    title: 'Planaltina terá nova maternidade com 100 leitos financiada pelo Novo PAC Saúde',
    source: 'Jornal Opção',
    date: '10/04/2026',
    url: 'https://www.jornalopcao.com.br/ultimas-noticias/planaltina-tera-nova-maternidade-com-100-leitos-financiada-pelo-novo-pac-saude-814077/',
    summary: 'Construção de nova maternidade em Planaltina (GO) com 100 leitos e aporte de R$ 103 milhões do Novo PAC Saúde. A unidade atenderá cerca de 105 mil moradores e integra o plano nacional que prevê 34 novas maternidades pelo programa.',
    category: 'Atenção Especializada & Maternidades'
  },
  {
    id: 'ev-saude-3',
    title: 'Wellington Dias anuncia policlínica de R$ 30 milhões do Novo PAC para Timon',
    source: 'Conecta Piauí',
    date: '20/05/2026',
    url: 'https://conectapiaui.com.br/noticia/politica/wellington-dias-anuncia-policlinica-de-r-30-milhoes-do-novo-pac-para-timon-19477.html',
    summary: 'Anúncio de policlínica financiada pelo Novo PAC Saúde em Timon (MA), com investimento de R$ 30 milhões, para expansão da oferta de consultas especializadas e exames de média e alta complexidade com abrangência regional.',
    category: 'Atenção Especializada & Policlínicas'
  },
  {
    id: 'ev-saude-4',
    title: 'Mogi Guaçu recebe nova ambulância do Samu do Ministério da Saúde',
    source: 'Prefeitura de Mogi Guaçu',
    date: '11/05/2026',
    url: 'https://mogiguacu.sp.gov.br/noticias/saude/2921/mogi-guacu-recebe-nova-ambulancia-do-samu-do-ministerio-da-saude.html',
    summary: 'Entrega de nova ambulância do SAMU 192 em Mogi Guaçu (SP) dentro de pacote de R$ 14,4 milhões do Novo PAC Saúde que atende 32 municípios com 20 ambulâncias, 12 micro-ônibus para Tratamento Fora de Domicílio (TFD) e 3 Unidades Odontológicas Móveis (UOM).',
    category: 'Mobilidade Assistencial & Urgência'
  },
  {
    id: 'ev-saude-5',
    title: 'Qual o investimento do Novo PAC Saúde?',
    source: 'Ministério da Saúde',
    date: '2026',
    url: 'https://www.gov.br/saude/pt-br/assuntos/novo-pac-saude/faq/faq/novo-pac-saude/qual-o-investimento-do-novo-pac-saude',
    summary: 'Diretrizes oficiais e estrutura do eixo Saúde no Novo PAC, detalhando os eixos de Atenção Primária (UBSs), Atenção Especializada (Maternidades, Policlínicas, Centros de Parto Normal), Urgência/Emergência (SAMU) e Complexo Econômico-Industrial da Saúde.',
    category: 'Diretrizes Estruturais Oficiais'
  }
];

export function SaudeView({ setActivePage }: SaudeViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200" id="saude-root">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6" id="saude-header">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight" id="saude-title">
            Saúde
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed" id="saude-desc">
            Acompanhamento dos investimentos e obras do eixo Saúde no Novo PAC, abrangendo atenção básica (UBS), saúde mental, reabilitação, maternidades, policlínicas regionais e frotas de urgência e transporte sanitário.
          </p>
        </div>

        <ResponsiveContainer minWidth="240px" gap="gap-3" className="w-full flex-1" id="saude-grid">
          {/* Card 1 — Escala do Programa */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="saude-card-1">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0">
              <HeartPulse className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">INVESTIMENTO NOVO PAC SAÚDE</p>
              <div className="flex items-baseline gap-1">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">R$ 37,2</h3>
                <span className="text-[14px] font-bold text-slate-500 dark:text-slate-400">BI</span>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Obras, equipamentos e veículos para fortalecimento do SUS.</p>
            </div>
          </div>

          {/* Card 2 — Expansão Territorial */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="saude-card-2">
            <div className="w-10 h-10 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">NOVA ETAPA DE UNIDADES</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">541</h3>
                <span className="text-[14px] font-bold text-slate-500 dark:text-slate-400">unidades</span>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Novas unidades em 505 municípios, com R$ 1,2 bilhão para UBS, CAPS e CER.</p>
            </div>
          </div>

          {/* Card 3 — Atenção Materno-Infantil */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="saude-card-3">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <Baby className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">REDE MATERNO-INFANTIL</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">36</h3>
                <span className="text-[14px] font-bold text-slate-500 dark:text-slate-400">maternidades</span>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">R$ 4,4 bilhões previstos para novas maternidades pelo país.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section id="saude-analise-section">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Análise Estratégica
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            
            {/* 1. O que aconteceu e o que explica o resultado */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs" id="saude-analise-1">
              <div className="flex flex-col gap-6">
                
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800">
                      <HeartPulse className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">1. O que aconteceu e o que explica o resultado</h4>
                      <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                        <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                          Expansão da rede do SUS em diferentes níveis de atenção, combinando atenção básica, saúde mental, reabilitação, atenção hospitalar e mobilidade assistencial.
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0">
                    FATO
                  </span>
                </div>

                <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                  <p>
                    O Novo PAC Saúde avança em diferentes níveis de atenção do SUS, combinando expansão da atenção básica, saúde mental, reabilitação, atenção hospitalar e mobilidade assistencial em diferentes regiões do país.
                  </p>
                  <p>
                    Na atenção básica, psicossocial e de reabilitação, o Ceará recebeu R$ 56,5 milhões para 24 novas unidades em 22 municípios, incluindo UBS, CAPS e um Centro Especializado em Reabilitação. O investimento amplia a cobertura física da rede e diversifica a oferta de serviços.
                  </p>
                  <p>
                    Na atenção hospitalar e especializada, projetos como a nova maternidade de Planaltina, com 100 leitos e R$ 103 milhões, e a policlínica regional de Timon, com R$ 30 milhões, ampliam a capacidade de atendimento especializado e regionalizado.
                  </p>
                  <p>
                    Na mobilidade assistencial, o programa também avança com ambulâncias do SAMU, veículos para Tratamento Fora de Domicílio e Unidades Odontológicas Móveis, ampliando o acesso da população aos serviços de saúde em diferentes municípios. Em conjunto, os investimentos indicam uma expansão simultânea da cobertura territorial e da capacidade assistencial do SUS.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Evidências utilizadas: O POVO (24/04/2026), Jornal Opção (10/04/2026), Conecta Piauí (20/05/2026), Prefeitura de Mogi Guaçu (11/05/2026) e Ministério da Saúde (2026).
                  </div>
                </div>
              </div>
            </div>

            {/* 2. O que observar nos próximos meses e 3. Impacto para a Lorenzetti */}
            <ResponsiveContainer minWidth="320px" gap="gap-5" className="w-full" id="saude-duas-colunas">
              
              {/* Bloco 2: O que observar nos próximos meses */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col justify-between" id="saude-analise-2">
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
                            Execução das novas unidades, distribuição territorial dos investimentos e conversão da expansão física em capacidade assistencial.
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
                      Acompanhar a execução e a entrada em operação das novas unidades, especialmente em regiões com menor cobertura assistencial e maior necessidade de expansão dos serviços públicos de saúde.
                    </p>
                    <p>
                      Monitorar a distribuição territorial dos investimentos, identificando regiões com maior concentração de novas UBS, CAPS, maternidades, policlínicas e equipamentos móveis e avaliando possíveis mudanças na oferta local de serviços.
                    </p>
                    <p>
                      Observar se a expansão física da infraestrutura se converte efetivamente em aumento da capacidade assistencial, incluindo atendimento especializado, saúde mental, maternidade, reabilitação e mobilidade do paciente.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências utilizadas: O POVO (24/04/2026), Jornal Opção (10/04/2026), Conecta Piauí (20/05/2026), Prefeitura de Mogi Guaçu (11/05/2026) e Ministério da Saúde (2026).
                    </div>
                  </div>
                </div>
              </div>

              {/* Bloco 3: Impacto para a Lorenzetti */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col justify-between" id="saude-analise-3">
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
                            Hipóteses observacionais sobre infraestrutura de saúde, atividade construtiva regional e demanda institucional no horizonte 2027–2037.
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
                      A expansão da infraestrutura de saúde pode ampliar a atividade de obras, instalações prediais e serviços técnicos nas regiões atendidas. Para a Lorenzetti, o efeito é potencial e depende do perfil dos empreendimentos, das especificações adotadas e dos canais de fornecimento envolvidos.
                    </p>
                    <p>
                      A ampliação de maternidades, policlínicas e unidades básicas pode aumentar a demanda institucional por soluções relacionadas a água, aquecimento e instalações hidráulicas. A relevância comercial deve ser monitorada conforme os modelos de contratação e as especificações técnicas adotadas em cada empreendimento.
                    </p>
                    <p>
                      A expansão da rede de saúde também pode alterar a concentração de investimentos públicos e a atividade construtiva em determinados municípios, com possíveis efeitos indiretos sobre distribuidores, construtoras e fornecedores locais no horizonte 2027–2037.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências Utilizadas: O POVO (24/04/2026), Jornal Opção (10/04/2026), Conecta Piauí (20/05/2026) e Ministério da Saúde (2026).
                    </div>
                  </div>
                </div>
              </div>

            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. MATRIZ DE FRENTES DE ATUAÇÃO */}
      <section className="flex flex-col gap-6" id="saude-frentes">
        
        <div className="flex flex-col gap-1 pb-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">2</div>
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
              Principais Frentes do Novo PAC – Saúde
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 pl-[44px]">
            Eixos de investimentos em atenção primária, infraestrutura hospitalar/especializada e mobilidade sanitária documentados nas evidências oficiais.
          </p>
        </div>

        <ResponsiveContainer minWidth="280px" gap="gap-6" className="w-full" id="saude-frentes-grid">
          
          {/* Card 1 — Atenção Primária, Saúde Mental & Reabilitação */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="saude-frente-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Atenção Primária, Saúde<br />Mental e Reabilitação
              </h3>
            </div>
            
            <div className="h-px w-full bg-emerald-100/70 dark:bg-emerald-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Ampliar e estruturar UBS, CAPS e Centros Especializados em Reabilitação (CER) em diferentes regiões do país.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/80 dark:border-emerald-900/40 mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 block">EXPANSÃO DA REDE</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-[26px] md:text-[30px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  541 <span className="text-[18px] md:text-[20px] font-bold">novas unidades</span>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-100 dark:border-emerald-900/40">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-emerald-600 dark:text-emerald-400">505 municípios / R$ 1,2 bi</strong>: UBS, CAPS e Centros Especializados em Reabilitação.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Ampliação da cobertura da atenção primária e fortalecimento do cuidado psicossocial e da reabilitação.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — Atenção Especializada e Rede Materno-Infantil */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="saude-frente-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
                <Hospital className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Atenção Especializada e<br />Rede Materno-Infantil
              </h3>
            </div>
            
            <div className="h-px w-full bg-rose-100/70 dark:bg-rose-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Ampliar a capacidade de atenção especializada, com novas maternidades e policlínicas regionais.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-rose-50/40 dark:bg-rose-950/20 rounded-2xl p-5 border border-rose-100/80 dark:border-rose-900/40 mb-6">
              <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-3 block">PROGRAMA NACIONAL DE MATERNIDADES</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center shrink-0">
                  <Baby className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-rose-600 dark:text-rose-400 leading-none">
                  34 <span className="text-[22px] md:text-[24px] font-bold">maternidades</span>
                </div>
              </div>

              <div className="pt-3 border-t border-rose-100 dark:border-rose-900/40">
                <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-rose-600 dark:text-rose-400">R$ 4,4 bi</strong>: Novas maternidades previstas pelo Novo PAC Saúde em diferentes regiões do país.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
                  <Activity className="w-4.5 h-4.5 text-rose-600 dark:text-rose-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Ampliação da capacidade hospitalar e da assistência materno-infantil, com possível redução de vazios assistenciais.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — Mobilidade Assistencial e Urgência */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="saude-frente-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Ambulance className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Mobilidade Assistencial<br />e Urgência (SAMU)
              </h3>
            </div>
            
            <div className="h-px w-full bg-blue-100/70 dark:bg-blue-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Ampliar e renovar a capacidade de transporte assistencial, incluindo SAMU, Tratamento Fora de Domicílio e Unidades Odontológicas Móveis.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-blue-50/40 dark:bg-blue-950/20 rounded-2xl p-5 border border-blue-100/80 dark:border-blue-900/40 mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">FROTA SAMU</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-[26px] md:text-[30px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  4.700 <span className="text-[18px] md:text-[20px] font-bold">ambulâncias</span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-100 dark:border-blue-900/40">
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Expansão e renovação da frota assistencial pelo Novo PAC Saúde.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Globe className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Maior capacidade de transporte e acesso regional aos serviços do SUS, especialmente em situações de urgência e deslocamentos assistenciais.
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
            <strong className="font-semibold text-blue-600 dark:text-blue-400">Fontes:</strong> Ministério da Saúde (2026), O POVO (2026), Jornal Opção (2026), Conecta Piauí (2026), Prefeitura de Mogi Guaçu (2026)
          </p>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="saude-evidencias-section" className="scroll-mt-12 relative mt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Rastreabilidade direta de publicações oficiais e veículos de comunicação sobre o eixo Saúde do Novo PAC.</p>
          </div>
        </div>

        <ResponsiveContainer minWidth="320px" gap="gap-5" className="w-full">
          {EVIDENCES.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev as any} />
          ))}
        </ResponsiveContainer>
      </section>

    </div>
  );
}
