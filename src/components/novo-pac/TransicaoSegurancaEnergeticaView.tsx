import { EvidenceCard } from '../layout/EvidenceCard';
import React from 'react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Search, 
  CheckCircle,
  Sun,
  Shield,
  Activity,
  Flame,
  Radio,
  Layers,
  ArrowUpRight,
  Calendar,
  Leaf
} from 'lucide-react';

interface TransicaoSegurancaEnergeticaViewProps {
  setActivePage: (page: string) => void;
}

const EVIDENCES = [
  {
    id: 1,
    tag: 'Geração e Transmissão / SIN',
    dateStr: '01/07/2026',
    title: 'Expansão da transmissão e avanço da geração levam SIN a novo patamar de segurança energética',
    headline: 'Novo PAC contabiliza 446 empreendimentos de geração concluídos até junho de 2026, adicionando mais de 20 GW ao SIN.',
    summary: 'Leitura ampla do eixo de energia no Novo PAC que destaca 446 empreendimentos de geração concluídos até junho de 2026, adicionando mais de 20 GW de capacidade instalada ao Sistema Interligado Nacional (SIN), além do avanço em obras de transmissão e integração regional.',
    source: 'Cenário Energia',
    url: 'https://cenarioenergia.com.br/2026/07/01/expansao-da-transmissao-e-avanco-da-geracao-levam-sin-a-novo-patamar-de-seguranca-energetica/'
  },
  {
    id: 2,
    tag: 'Geração Térmica / Região Norte',
    dateStr: '25/06/2026',
    title: 'UTE Azulão inicia testes no Amazonas e consolida expansão térmica de R$ 781 milhões no Norte',
    headline: 'Usina Termelétrica Azulão inicia operação em testes com 361,5 MW e investimento de R$ 781 milhões.',
    summary: 'A Usina Termelétrica Azulão iniciou operação em testes com 361,5 MW de capacidade e investimento de R$ 781 milhões. O Complexo Azulão integra o Novo PAC e prevê atingir 964 MW quando concluído (previsão para 2027), reforçando a segurança energética da Região Norte.',
    source: 'Cenário Energia',
    url: 'https://cenarioenergia.com.br/2026/06/25/ute-azulao-inicia-testes-no-amazonas-e-consolida-expansao-termica-de-r-781-milhoes-no-norte/'
  },
  {
    id: 3,
    tag: 'Transmissão e Subestações',
    dateStr: '22/04/2026',
    title: 'ISA Energia Brasil conclui Projeto Jacarandá e reforça segurança energética em Guarulhos',
    headline: 'Subestação Água Azul tem capacidade duplicada de 600 para 1.200 MVA com modernização da rede.',
    summary: 'Conclusão do Projeto Jacarandá pela ISA Energia Brasil na Subestação Água Azul, em Guarulhos, elevando sua capacidade de 600 para 1.200 MVA, reforçando a transmissão e a modernização da rede em polo logístico e industrial de alta demanda.',
    source: 'Cenário Energia',
    url: 'https://cenarioenergia.com.br/2026/04/22/isa-energia-brasil-conclui-projeto-jacaranda-e-reforca-seguranca-energetica-em-guarulhos/'
  },
  {
    id: 4,
    tag: 'Transmissão e Resiliência',
    dateStr: '07/04/2026',
    title: 'Projeto Riacho Grande reforça sistema elétrico em São Paulo',
    headline: 'Empreendimento de R$ 1,14 bilhão no Novo PAC adiciona 63 km de linhas de transmissão e 800 MVA ao SIN.',
    summary: 'Com investimento de R$ 1,14 bilhão e integrado em grande parte ao Novo PAC, o Projeto Riacho Grande adiciona cerca de 63 km de linhas de transmissão e 800 MVA de capacidade de transformação ao SIN, fortalecendo a resiliência da rede diante de eventos climáticos extremos.',
    source: 'Jornal de Brasília',
    url: 'https://jornaldebrasilia.com.br/noticias/economia/projeto-riacho-grande-reforca-sistema-eletrico-em-sao-paulo/'
  },
  {
    id: 5,
    tag: 'Geração Solar / Renováveis',
    dateStr: '23/02/2026',
    title: 'Complexo Solar Draco inicia operação em Minas Gerais',
    headline: 'Nove das 11 usinas entram em operação comercial com 505 MW e investimento superior a R$ 2,4 bilhões.',
    summary: 'Entrada em operação comercial de nove das 11 usinas do Complexo Solar Draco em Minas Gerais. O projeto soma 505 MW de capacidade, mais de R$ 2,4 bilhões em investimentos no eixo de transição energética do Novo PAC, com capacidade para atender mais de 500 mil residências.',
    source: 'Agência iNFRA',
    url: 'https://agenciainfra.com/blog/complexo-solar-draco-inicia-operacao-em-minas-gerais/'
  }
];

export function TransicaoSegurancaEnergeticaView({ setActivePage }: TransicaoSegurancaEnergeticaViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200" id="transicao-seguranca-energetica-root">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6" id="transicao-seguranca-energetica-header">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight" id="transicao-seguranca-energetica-title">
            Transição e Segurança Energética
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed" id="transicao-seguranca-energetica-desc">
            Acompanhamento dos investimentos do Novo PAC na expansão da capacidade de geração renovável, reforço da transmissão, térmicas despacháveis e resiliência do Sistema Interligado Nacional (SIN).
          </p>
        </div>

        <ResponsiveContainer minWidth="240px" gap="gap-3" className="w-full flex-1" id="transicao-seguranca-energetica-grid">
          {/* Card 1 — Investimento Total */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="transicao-energetica-card-1">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">INVESTIMENTO TOTAL</p>
              <div className="flex items-baseline gap-1">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">R$ 596,2 bi</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Investimentos previstos no eixo de Transição e Segurança Energética.</p>
            </div>
          </div>

          {/* Card 2 — Geração de Energia */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="transicao-energetica-card-2">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0">
              <Sun className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">GERAÇÃO DE ENERGIA</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">R$ 75,6 bi</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">343 empreendimentos, sendo 92,4% de fontes eólica e solar.</p>
            </div>
          </div>

          {/* Card 3 — Pós-2026 */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full" id="transicao-energetica-card-3">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">PÓS-2026</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-900 dark:text-white leading-none">R$ 156,8 bi</h3>
              </div>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">Investimentos previstos após 2026, reforçando a continuidade do eixo.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section id="transicao-seguranca-energetica-analise-section">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Análise Estratégica
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            
            {/* 1. O que aconteceu e o que explica o resultado */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs" id="transicao-energetica-analise-1">
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
                          Expansão da geração (+20 GW), reforço da transmissão e segurança do suprimento regional.
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                    01
                  </span>
                </div>

                <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                  <p>
                    Até junho de 2026, o Novo PAC contabilizou 446 empreendimentos de geração concluídos, adicionando mais de 20 GW à capacidade instalada do Sistema Interligado Nacional (SIN).
                  </p>
                  <p>
                    A expansão da geração vem acompanhada do reforço da infraestrutura de transmissão e de projetos de geração despachável, combinando aumento da oferta, integração regional e maior segurança do suprimento.
                  </p>
                  <p>
                    Projetos como o Complexo Solar Draco, a Subestação Água Azul e o Complexo Azulão exemplificam diferentes frentes desse movimento: geração renovável, transmissão e segurança energética regional.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Evidências utilizadas: Cenário Energia (01/07/2026, 25/06/2026, 22/04/2026), Jornal de Brasília (07/04/2026), Agência iNFRA (23/02/2026)
                  </div>
                </div>
              </div>
            </div>

            <ResponsiveContainer minWidth="320px" gap="gap-5">
              
              {/* 2. O que observar nos próximos meses */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="transicao-energetica-analise-2">
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
                            Conclusão de novos projetos, expansão da transmissão e resiliência do sistema elétrico.
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                     02
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[64px]">
                    <p>
                      Acompanhar a conclusão e entrada em operação dos empreendimentos de geração ainda em implantação, especialmente aqueles com impacto regional sobre a segurança do suprimento.
                    </p>
                    <p>
                      Monitorar a expansão de linhas de transmissão e subestações necessárias para absorver o crescimento da geração e reduzir possíveis gargalos de integração ao SIN.
                    </p>
                    <p>
                      Observar investimentos voltados à resiliência da rede diante de eventos climáticos extremos, além da evolução da geração despachável em regiões com maior necessidade de segurança energética.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências utilizadas: Cenário Energia (01/07/2026, 25/06/2026), Jornal de Brasília (07/04/2026), Agência iNFRA (23/02/2026)
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Impacto para a Lorenzetti */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs flex flex-col" id="transicao-energetica-analise-3">
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
                            Hipóteses sobre confiabilidade energética, consumo elétrico e decisões de portfólio 2027–2037.
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
                      A expansão da capacidade instalada e o reforço da transmissão podem aumentar a confiabilidade do fornecimento elétrico, reduzindo riscos operacionais para unidades industriais e favorecendo investimentos em expansão e modernização produtiva.
                    </p>
                    <p>
                      Mudanças na disponibilidade, confiabilidade e custo da energia elétrica podem influenciar o perfil de consumo residencial e a atratividade de soluções elétricas de aquecimento, devendo ser acompanhadas como variável de mercado.
                    </p>
                    <p>
                      No horizonte 2027–2037, a evolução da matriz energética, dos custos de eletricidade e da confiabilidade do sistema deve ser monitorada como variável de contexto para decisões de portfólio, eficiência energética e posicionamento de produtos elétricos.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências Utilizadas: Cenário Energia (01/07/2026, 22/04/2026), Jornal de Brasília (07/04/2026), Agência iNFRA (23/02/2026)
                    </div>
                  </div>
                </div>
              </div>

            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. MATRIZ DE FRENTES DE ATUAÇÃO */}
      <section className="flex flex-col gap-6" id="transicao-seguranca-energetica-frentes">
        
        <div className="flex flex-col gap-1 pb-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 font-bold text-sm shrink-0 border border-slate-200 dark:border-slate-700">2</div>
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
              Principais Frentes do Novo PAC – Transição e Segurança Energética
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 dark:text-slate-400 pl-[44px]">
            Pilares estratégicos de investimentos em geração renovável, transmissão e descarbonização dos combustíveis.
          </p>
        </div>

        <ResponsiveContainer minWidth="280px" gap="gap-6" className="w-full" id="transicao-energetica-frentes-grid">
          
          {/* Card 1 — Geração e Expansão Renovável */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="transicao-energetica-frente-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                <Sun className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Geração e Expansão<br />Renovável
              </h3>
            </div>
            
            <div className="h-px w-full bg-amber-100/70 dark:bg-amber-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Ampliar a capacidade de geração de energia, com predominância de fontes eólica e solar, fortalecendo a matriz elétrica.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-amber-50/40 dark:bg-amber-950/20 rounded-2xl p-5 border border-amber-100/80 dark:border-amber-900/40 mb-6">
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3 block">CARTEIRA DE GERAÇÃO</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-amber-600 dark:text-amber-400 leading-none">
                  R$ 75,6 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-100 dark:border-amber-900/40">
                <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-amber-600 dark:text-amber-400">343 empreendimentos</strong>, sendo 92,4% de fontes eólica e solar (+20 GW adicionados ao SIN).
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                  <Activity className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Ampliação da oferta de energia e maior participação de fontes renováveis na matriz elétrica brasileira.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — Transmissão e Segurança do Sistema */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="transicao-energetica-frente-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Transmissão e<br />Segurança do Sistema
              </h3>
            </div>
            
            <div className="h-px w-full bg-emerald-100/70 dark:bg-emerald-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Expandir e modernizar a rede de transmissão para escoar geração e aumentar a confiabilidade do SIN.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/80 dark:border-emerald-900/40 mb-6">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 block">LINHAS E SUBESTAÇÕES</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  R$ 91 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-100 dark:border-emerald-900/40">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-emerald-600 dark:text-emerald-400">119 empreendimentos</strong> com expansão projetada de 12,5 mil km de linhas até 2026.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <Shield className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Maior confiabilidade do sistema, integração regional e escoamento da geração renovável.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — Combustíveis e Descarbonização */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col shadow-xs h-full" id="transicao-energetica-frente-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-tight">
                Combustíveis e<br />Descarbonização
              </h3>
            </div>
            
            <div className="h-px w-full bg-blue-100/70 dark:bg-blue-900/40 mb-6"></div>
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">OBJETIVO</span>
              <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Expandir combustíveis de baixo carbono e modernizar a cadeia energética com redução gradual de emissões.
              </p>
            </div>
            
            {/* Box Destaque Indicador + Contexto */}
            <div className="bg-blue-50/40 dark:bg-blue-950/20 rounded-2xl p-5 border border-blue-100/80 dark:border-blue-900/40 mb-6">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 block">BAIXO CARBONO</span>
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-[28px] md:text-[32px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  R$ 28,3 <span className="text-[22px] md:text-[24px] font-bold">bi</span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-100 dark:border-blue-900/40">
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">CONTEXTO</span>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong className="font-bold text-blue-600 dark:text-blue-400">20 empreendimentos</strong> de biocombustíveis, biometano, biorrefino e captura de carbono.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Impacto Esperado */}
            <div className="mt-auto pt-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2.5 block">IMPACTO ESPERADO</span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Shield className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Diversificação da matriz de combustíveis e avanço da descarbonização industrial.
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
            <strong className="font-semibold text-blue-600 dark:text-blue-400">Fontes:</strong> Casa Civil / Novo PAC (2026), MME / EPE (2026), ONS (2026)
          </p>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="transicao-seguranca-energetica-evidencias-section" className="scroll-mt-12 relative mt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Rastreabilidade direta de publicações oficiais, portais especializados e notícias do Novo PAC.</p>
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
