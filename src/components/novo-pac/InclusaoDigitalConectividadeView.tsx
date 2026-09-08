import { EvidenceCard } from '../layout/EvidenceCard';
import React from 'react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { 
  Building2, 
  Target, 
  TrendingUp, 
  Search, 
  Globe, 
  ExternalLink,
  BookOpen,
  Wifi,
  MapPin,
  Activity,
  Landmark,
  Users,
  CheckCircle,
  Map,
  Monitor,
  ShieldAlert,
  Server,
  Smartphone,
  Radio,
  Cpu,
  Share2,
  Tv
} from 'lucide-react';

interface InclusaoDigitalConectividadeViewProps {
  setActivePage: (page: string) => void;
}

const EVIDENCES: any[] = [
  {
    id: 1,
    tag: 'Conectividade Escolar',
    dateStr: '2025',
    title: 'Mais de 2 mil escolas públicas vão receber internet de alta velocidade',
    headline: 'Iniciativa do Novo PAC prevê R$ 91,2 milhões para conectar 2.123 escolas públicas no país.',
    summary: 'A iniciativa integra o Novo PAC e destina R$ 91,2 milhões para levar internet de alta velocidade a 2.123 escolas públicas brasileiras, ampliando o acesso digital para atividades pedagógicas e inclusão escolar.',
    source: 'O Estado Online',
    url: 'https://oestadoonline.com.br/cidades/mais-de-2-mil-escolas-publicas-vao-receber-internet-de-alta-velocidade/'
  },
  {
    id: 2,
    tag: 'Novo PAC / Educação',
    dateStr: '19/06/2025',
    title: 'Mais de 2.000 escolas públicas receberão internet de alta velocidade nos próximos meses',
    headline: 'Investimento de R$ 91,2 milhões no âmbito do Novo PAC contempla 2.123 escolas públicas.',
    summary: 'Matéria confirma que a etapa integra o Novo PAC e contempla 2.123 escolas públicas com investimento de R$ 91,2 milhões para garantir conexão em alta velocidade em estabelecimentos de ensino básico.',
    source: 'R7 Educação',
    url: 'https://noticias.r7.com/educacao/mais-de-2-mil-escolas-publicas-receberao-internet-de-alta-velocidade-nos-proximos-meses-19062025/'
  },
  {
    id: 3,
    tag: 'Educação Básica',
    dateStr: '2025',
    title: 'Mais de 2 mil escolas públicas serão conectadas à internet com alta velocidade',
    headline: 'Programa federal no Novo PAC direciona R$ 91,2 milhões para 2.123 unidades escolares.',
    summary: 'A Assembleia Legislativa do Piauí registra o plano de conectividade integrado ao Novo PAC que destina R$ 91,2 milhões para levar internet de alta velocidade a 2.123 escolas públicas em âmbito nacional.',
    source: 'Assembleia Legislativa do Piauí (TV Assembleia)',
    url: 'https://www.al.pi.leg.br/comunicacao/tv-assembleia/noticias-tv/mais-de-2-mil-escolas-publicas-serao-conectadas-a-internet-com-alta-velocidade-no-brasil'
  },
  {
    id: 4,
    tag: 'Infovias / Região Norte',
    dateStr: 'Setembro/2025',
    title: 'Novo PAC: 12 mil km de infovias levarão internet e oportunidades a toda Região Norte',
    headline: 'Investimento de R$ 1,3 bilhão para 12 mil km de infovias, alcançando 70 municípios e cerca de 10 milhões de pessoas.',
    summary: 'O programa Norte Conectado, no âmbito do Novo PAC, prevê R$ 1,3 bilhão em investimentos para a implantação de 12 mil km de infovias de fibra óptica, beneficiando 70 municípios e cerca de 10 milhões de habitantes na Região Norte com internet de alta capacidade.',
    source: 'Agência Gov / EBC',
    url: 'https://agenciagov.ebc.com.br/noticias/202509/novo-pac-norte-conectado-com-12-mil-km-de-infovias-leva-iternet-e-oportunidades-ao-povo-celebra-lula'
  }
];

export function InclusaoDigitalConectividadeView({ setActivePage }: InclusaoDigitalConectividadeViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200" id="inclusao-digital-conectividade-root">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6" id="inclusao-digital-conectividade-header">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight" id="inclusao-digital-conectividade-title">
            Inclusão Digital e Conectividade
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed" id="inclusao-digital-conectividade-desc">
            Acompanhamento dos investimentos do Novo PAC em conectividade de escolas, infraestrutura de telecomunicações, inclusão digital e expansão da rede de fibra óptica e 5G.
          </p>
        </div>

        <ResponsiveContainer minWidth="240px" gap="gap-3" className="w-full flex-1" id="inclusao-digital-conectividade-grid">
          {/* Card 1 — Investimento Novo PAC */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="inclusao-digital-card-1">
            <div className="w-10 h-10 bg-cyan-50 dark:bg-cyan-900/20 rounded-full flex items-center justify-center shrink-0">
              <Wifi className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">INVESTIMENTO NOVO PAC</p>
              <div className="flex items-baseline gap-1">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">R$ 23,6 bi</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Investimentos previstos em conectividade e inclusão digital.</p>
            </div>
          </div>

          {/* Card 2 — 4G e 5G */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="inclusao-digital-card-2">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">4G E 5G</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">R$ 14,2 bi</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Principal frente de investimento do eixo.</p>
            </div>
          </div>

          {/* Card 3 — Infovias */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="inclusao-digital-card-3">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">INFOVIAS</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">13,2 mil km</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">9 infovias para ampliar a conectividade na Amazônia.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section id="inclusao-digital-conectividade-analise-section">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Análise Estratégica
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            
            {/* 1. O que aconteceu e o que explica o resultado */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs" id="inclusao-digital-analise-1">
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    
                    <div className="pt-1 flex-1 min-w-0">
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">1. O que aconteceu e o que explica o resultado</h4>
                      <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                        <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                          R$ 23,6 bi em conectividade, com expansão de 4G/5G, infovias e conexão de escolas e unidades de saúde
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                    01
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                  <p>
                    O eixo de Inclusão Digital e Conectividade do Novo PAC concentra <strong>R$ 23,6 bilhões em investimentos</strong>, distribuídos entre expansão das redes 4G e 5G, conectividade de escolas e unidades de saúde, implantação de infovias e outras iniciativas de inclusão digital.
                  </p>
                  <p>
                    A maior frente de investimento está na <strong>expansão do 4G e 5G, com R$ 14,2 bilhões previstos</strong>. Em paralelo, o Norte Conectado estrutura uma rede de aproximadamente <strong>13,2 mil km de fibra óptica</strong>, ampliando a infraestrutura de conectividade em regiões da Amazônia.
                  </p>
                  <p>
                    Na conectividade escolar, uma nova etapa do Novo PAC destinou <strong>R$ 91,2 milhões para levar internet de alta velocidade a 2.123 escolas públicas</strong>. As iniciativas mostram que o programa combina expansão da infraestrutura de telecomunicações com aplicações concretas em educação e serviços públicos.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Evidências utilizadas: Agência Gov / EBC — "Novo PAC: 12 mil km de infovias" | O Estado Online, R7 Educação e Assembleia Legislativa do Piauí — "Mais de 2 mil escolas públicas com internet de alta velocidade".
                  </div>
                </div>
              </div>
            </div>

            <ResponsiveContainer minWidth="320px" gap="gap-5">
              
              {/* 2. O que observar nos próximos meses */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="inclusao-digital-analise-2">
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                        <Search className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      
                      <div className="pt-1 flex-1 min-w-0">
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">2. O que observar nos próximos meses</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                            Expansão da cobertura, ativação das infraestruturas e qualidade da conectividade nas regiões atendidas
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                     02
                    </span>
                  </div>

                  <div className="flex flex-col gap-3.5 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                    <p>
                      Acompanhar a <strong>expansão e ativação das redes 4G e 5G</strong>, especialmente em municípios fora dos grandes centros, observando se o avanço da infraestrutura resulta em maior cobertura e capacidade de conexão.
                    </p>
                    <p>
                      Monitorar a <strong>implantação e ativação das infovias</strong>, verificando a efetiva entrada em operação da infraestrutura de fibra óptica e sua capacidade de ampliar o acesso a serviços digitais nas regiões atendidas.
                    </p>
                    <p>
                      Observar se a expansão da conectividade evolui de uma lógica de cobertura para uma <strong>agenda de qualidade, capacidade de rede e uso efetivo dos serviços digitais</strong>, especialmente em regiões rurais e municípios do interior.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências utilizadas: Agência Gov / EBC | O Estado Online | R7 Educação | Assembleia Legislativa do Piauí.
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Impacto para a Lorenzetti */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="inclusao-digital-analise-3">
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                        <Target className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      
                      <div className="pt-1 flex-1 min-w-0">
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">3. Impacto para a Lorenzetti</h4>
                        <div className="inline-flex bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg mt-1 max-w-full border border-slate-200 dark:border-slate-700">
                          <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold break-words">
                            Hipóteses observacionais sobre digitalização do mercado, canais comerciais e relacionamento com consumidores
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                      03
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                    <p>
                      A expansão da conectividade <strong>pode acelerar a digitalização do varejo</strong> e ampliar o uso de canais digitais por consumidores e distribuidores. Para a Lorenzetti, isso representa uma hipótese de evolução dos canais de venda, relacionamento e suporte ao consumidor, especialmente em regiões onde a conectividade ainda limita a digitalização comercial.
                    </p>
                    <p>
                      A ampliação do acesso à internet em municípios do interior <strong>pode aumentar o alcance de canais digitais</strong> de comunicação, assistência técnica e capacitação, reduzindo barreiras de acesso a informações sobre produtos e serviços. Esse efeito deve ser tratado como oportunidade potencial, e não como impacto direto comprovado.
                    </p>
                    <p>
                      No horizonte 2027–2037, a evolução da infraestrutura digital <strong>deve ser monitorada como possível vetor de mudança</strong> no comportamento de compra, na atuação dos distribuidores e na interação entre marcas e consumidores. A relevância para a Lorenzetti dependerá da velocidade de digitalização dos mercados e canais em cada região.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências Utilizadas: Agência Gov / EBC | O Estado Online | R7 Educação | Assembleia Legislativa do Piauí.
                    </div>
                  </div>
                </div>
              </div>

            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. MATRIZ DE FRENTES DE ATUAÇÃO */}
      <section className="flex flex-col gap-6" id="inclusao-digital-conectividade-frentes">
        
        <div className="flex flex-col gap-1 pb-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">2</div>
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
              Principais Frentes do Novo PAC – Inclusão Digital e Conectividade
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 pl-[44px]">
            Principais frentes de investimento em conectividade móvel, infraestrutura de fibra óptica e serviços públicos conectados.
          </p>
        </div>

        <ResponsiveContainer minWidth="280px" gap="gap-6" className="w-full" id="inclusao-digital-frentes-grid">
          
          {/* Card 1: 4G e 5G */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="inclusao-digital-frente-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Conectividade Móvel<br />(4G e 5G)
              </h3>
            </div>
            
            <div className="h-px w-full bg-cyan-100/70 dark:bg-cyan-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Expandir a cobertura e a capacidade das redes móveis, ampliando o acesso à conectividade em diferentes regiões do país.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-cyan-50/40 dark:bg-cyan-950/20 rounded-2xl p-5 border border-cyan-100/80 dark:border-cyan-900/40 mb-6">
              <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-3 block">INVESTIMENTO PREVISTO</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-cyan-600 dark:text-cyan-400 leading-none">
                  R$ 14,2 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-cyan-100 dark:border-cyan-900/40">
                <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Recursos direcionados para expansão e implantação de redes móveis <strong className="font-bold text-cyan-600 dark:text-cyan-400">4G e 5G</strong> no território nacional.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                  <Wifi className="w-4.5 h-4.5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Maior cobertura, capacidade de conexão e acesso a serviços digitais de alta velocidade.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Infovias */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="inclusao-digital-frente-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Infraestrutura de Rede<br />(Infovias de Fibra Óptica)
              </h3>
            </div>
            
            <div className="h-px w-full bg-blue-100/70 dark:bg-blue-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Expandir a infraestrutura de fibra óptica de longa distância, conectando regiões com menor disponibilidade digital.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-blue-50/40 dark:bg-blue-950/20 rounded-2xl p-5 border border-blue-100/80 dark:border-blue-900/40 mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">EXTENSÃO PROJETADA</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <Radio className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  13,2 <span className="text-[22px] md:text-[24px] font-bold">mil km</span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-100 dark:border-blue-900/40">
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Rede estruturante de infovias para integrar a Amazônia e o interior às redes globais de telecomunicações.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Wifi className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Ampliação da capacidade de transmissão de dados e integração digital de regiões remotas.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Escolas e Unidades de Saúde */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="inclusao-digital-frente-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Serviços Públicos<br />(Escolas e Unidades Básicas)
              </h3>
            </div>
            
            <div className="h-px w-full bg-indigo-100/70 dark:bg-indigo-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Levar conectividade de alta velocidade a serviços públicos essenciais em educação e saúde.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-indigo-50/40 dark:bg-indigo-950/20 rounded-2xl p-5 border border-indigo-100/80 dark:border-indigo-900/40 mb-6">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 block">CONECTIVIDADE PÚBLICA</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-[24px] md:text-[26px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                  Escolas & UBS
                </div>
              </div>

              <div className="pt-3 border-t border-indigo-100 dark:border-indigo-900/40">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    Banda larga de alta capacidade em instituições de ensino público e unidades de saúde em todo o Brasil.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <Monitor className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Acesso a serviços públicos digitais, educação conectada e telemedicina em postos de atendimento.
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
            <strong className="font-semibold text-blue-600 dark:text-blue-400">Fontes:</strong> Casa Civil / Novo PAC (2026), Ministério das Comunicações (2026)
          </p>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="inclusao-digital-conectividade-evidencias-section" className="scroll-mt-12 relative mt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Rastreabilidade direta de publicações oficiais, portais governamentais e notícias do Novo PAC.</p>
          </div>
        </div>
           
        {EVIDENCES.length > 0 ? (
          <ResponsiveContainer minWidth="320px" gap="gap-5" className="w-full">
            {EVIDENCES.map((ev) => (<EvidenceCard key={ev.id} evidence={ev as any} />))}
          </ResponsiveContainer>
        ) : (
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <Search className="w-8 h-8 text-slate-400 mb-3" />
            <p className="text-[15px] font-medium text-slate-600 dark:text-slate-400">Nenhuma evidência registrada no momento.</p>
          </div>
        )}
      </section>

    </div>
  );
}
