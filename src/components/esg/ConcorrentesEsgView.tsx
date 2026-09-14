import React, { useState } from 'react';
import { 
  Building2, 
  Target, 
  Search, 
  Activity, 
  ShieldCheck, 
  Leaf, 
  Award, 
  Scale, 
  FileText, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Recycle, 
  Layers, 
  Droplets, 
  Zap, 
  CheckCircle2, 
  Store,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface TopEmpresasConcorrentesEsgViewProps {
  setActivePage?: (page: string) => void;
  
}

const TOP_ESG_EVIDENCES: Evidence[] = [
  {
    id: 'esg-merco-natura-1',
    tag: 'Ranking Merco Brasil / Liderança ESG',
    dateStr: '2025/2026',
    title: 'Ranking Merco ESG: Natura lidera responsabilidade corporativa no Brasil pela 12ª vez consecutiva',
    headline: 'A Natura conquistou novamente a 1ª colocação geral no Ranking Merco de Responsabilidade ESG no Brasil. Ao lado do Grupo Boticário, lidera o subranking ambiental com foco em descarbonização e proteção de biomas, através do monitoramento de rastreabilidade reversa de ativos da biodiversidade e embalagens recicláveis pós-consumo.',
    source: 'Exame ESG / Merco Brasil',
    url: 'https://exame.com/esg/ranking-merco-natura-lidera-esg-nas-empresas-pela-12a-vez/'
  },
  {
    id: 'esg-times-ranking-2',
    tag: 'Ranking ESG Brasil / Top Líderes',
    dateStr: '2025/2026',
    title: 'Ranking ESG Brasil: Natura, Grupo Boticário e Mercado Livre compõem o topo nacional',
    headline: 'O Mercado Livre avançou para o Top 3 geral no ranking ESG impulsionado pela integração de frotas elétricas nativas à malha logística e eco-eficiência em centros de distribuição (saltando da 12ª para a 8ª posição ambiental). Itaú Unibanco (7ª colocação) e Toyota destacam-se em práticas éticas e transparência de governança.',
    source: 'Times Brasil',
    url: 'https://timesbrasil.com.br/brasil/ranking-esg-2025-natura-boticario-mercado-livre/'
  },
  {
    id: 'esg-dexco-obs-3',
    tag: 'Concorrência / Dexco (Deca, Portinari, Hydra)',
    dateStr: '2025/2026',
    title: 'Dexco conclui ciclo de estratégia de sustentabilidade atingindo 75% dos compromissos assumidos',
    headline: 'O grupo Dexco encerrou seu ciclo corporativo de metas com 75% dos compromissos ESG integralmente cumpridos. A companhia realizou reestruturação de portfólio para focar em produtos de alto padrão e ecoeficiência fabril, além de vincular metas climáticas à remuneração dos executivos.',
    source: 'Observatório do 3º Setor',
    url: 'https://observatorio3setor.org.br/dexco-conclui-ciclo-de-estrategia-de-sustentabilidade-e-atinge-75-dos-compromissos-assumidos/'
  },
  {
    id: 'esg-dexco-oficial-4',
    tag: 'Concorrência / Dexco ESG',
    dateStr: '2026',
    title: 'Dexco atinge 100% de Aterro Zero em Metais e Painéis e 36% de liderança feminina',
    headline: 'A Dexco conquistou o índice de 100% de Aterro Zero nas divisões de Metais (Deca/Hydra), Painéis Brasil e Revestimentos Cerâmicos (Portinari), eliminando o envio de resíduos industriais a aterros. Atingiu 36% de mulheres em posições de liderança e reconfigurou seu balanço ao vender as marcas Corona e Thermosystem.',
    source: 'Dexco ESG / Relações com Investidores',
    url: 'https://www.dex.co/esg/'
  },
  {
    id: 'esg-docol-residuos-5',
    tag: 'Concorrência / Docol Metais',
    dateStr: '2025/2026',
    title: 'Docol recicla mais de 3,7 mil toneladas de resíduos e projeta reduzir em 70% o consumo de água até 2030',
    headline: 'A Docol reciclou mais de 3,7 mil toneladas de resíduos industriais em suas fundições de metais e estabeleceu meta pública de reduzir em 70% o consumo de água até 2030. Conquistou o Selo de Compromisso EcoVadis e desenvolve portfólio de economizadores de água voltados a Prédios Verdes e certificações LEED.',
    source: 'Jornal do Brás',
    url: 'https://jornaldobras.com.br/noticia/81424/docol-recicla-mais-de-3-7-mil-toneladas-de-residuos-e-projeta-reduzir-em-70-o-consumo-de-agua-ate-2030'
  },
  {
    id: 'esg-zagonel-fiesc-6',
    tag: 'Concorrência / Zagonel Termoplásticos',
    dateStr: '2025/2026',
    title: 'Zagonel adquire marcas Corona e Thermosystem e assume parque fabril em Aracaju-SE',
    headline: 'A fabricante catarinense Zagonel assumiu as operações das marcas Corona e Thermosystem e o parque industrial de Aracaju-SE, despontando em volume de chuveiros e torneiras termoplásticas. A empresa assumiu o desafio logístico de absorver e reestruturar os planos de Logística Reversa e Economia Circular pós-consumo (PNRS), focando em P&D para produtos híbridos inteligentes de alta eficiência energética.',
    source: 'Federação das Indústrias do Estado de Santa Catarina (FIESC)',
    url: 'https://fiesc.com.br/pt-br/imprensa/zagonel-de-pinhalzinho-compra-marcas-corona-e-thermosystem'
  },
  {
    id: 'esg-zagonel-gptw-7',
    tag: 'Concorrência / Zagonel Pilar Social',
    dateStr: '2025/2026',
    title: 'Zagonel recebe certificação Great Place to Work (GPTW) em gestão de pessoas e clima organizacional',
    headline: 'A Zagonel obteve a certificação oficial Great Place to Work (GPTW), atestando a conformidade de suas práticas corporativas de gestão do trabalho, clima organizacional e valorização dos colaboradores no segmento industrial de termoplásticos.',
    source: 'Great Place to Work Brasil / LinkedIn Oficial',
    url: 'https://www.linkedin.com/posts/gptw-greatplacetowork-orgulhodeserzagonel-share-7490490673465298944-W-PP/'
  }
];

interface BenchmarkingItem {
  categoria: 'Líderes Nacionais' | 'Concorrentes do Setor';
  empresa: string;
  marcasSegmento: string;
  pilarAmbiental: string;
  pilarSocial: string;
  pilarGovernanca: string;
  destaqueMetas: string;
  hipoteseLorenzetti: string;
  evidenciasTrace: {
    fonte: string;
    titulo: string;
    url: string;
  }[];
}

const BENCHMARKING_DATA: BenchmarkingItem[] = [
  {
    categoria: 'Líderes Nacionais',
    empresa: 'Natura & Grupo Boticário',
    marcasSegmento: 'Cosméticos & Higiene (Referência Geral ESG Brasil)',
    pilarAmbiental: 'Liderança no subranking ecológico: descarbonização, proteção de biomas, rastreabilidade reversa de bioativos e embalagens 100% recicláveis pós-consumo.',
    pilarSocial: 'Forte presença comunitária nas cadeias de extração e programas de impacto social regional.',
    pilarGovernanca: '1ª posição sustentada por 12 edições consecutivas no Ranking Merco de Responsabilidade ESG no Brasil.',
    destaqueMetas: 'Benchmark máximo em rastreabilidade de insumos naturais e circularidade de embalagens.',
    hipoteseLorenzetti: 'Pode servir de referência metodológica para futuras certificações de rastreabilidade de matérias-primas e embalagens plásticas e metálicas pós-consumo.',
    evidenciasTrace: [
      {
        fonte: 'Exame ESG / Merco Brasil',
        titulo: 'Ranking Merco ESG: Natura lidera pela 12ª vez',
        url: 'https://exame.com/esg/ranking-merco-natura-lidera-esg-nas-empresas-pela-12a-vez/'
      },
      {
        fonte: 'Times Brasil',
        titulo: 'Ranking ESG 2025: Natura, Boticário e Mercado Livre',
        url: 'https://timesbrasil.com.br/brasil/ranking-esg-2025-natura-boticario-mercado-livre/'
      }
    ]
  },
  {
    categoria: 'Líderes Nacionais',
    empresa: 'Mercado Livre',
    marcasSegmento: 'E-commerce & Logística (Top 3 Geral Brasil)',
    pilarAmbiental: 'Salto da 12ª para a 8ª posição ambiental através da eletrificação massiva da frota de entregas e centros de distribuição ecoeficientes.',
    pilarSocial: 'Aceleração de metas no pilar social atrelada à inclusão logística e frotas de baixa emissão.',
    pilarGovernanca: 'Ascensão contínua no ranking consolidado geral impulsionada por metas auditadas e investimentos verdes.',
    destaqueMetas: 'Ecoeficiência logística e eletrificação acelerada da malha de transporte nacional.',
    hipoteseLorenzetti: 'Pode demandar alinhamento com operadores logísticos e marketplaces que venham a exigir frotas sustentáveis na distribuição dos produtos da Lorenzetti.',
    evidenciasTrace: [
      {
        fonte: 'Times Brasil',
        titulo: 'Mercado Livre escala no Top 3 do Ranking ESG 2025',
        url: 'https://timesbrasil.com.br/brasil/ranking-esg-2025-natura-boticario-mercado-livre/'
      }
    ]
  },
  {
    categoria: 'Líderes Nacionais',
    empresa: 'Itaú Unibanco & Toyota',
    marcasSegmento: 'Setor Financeiro & Automotivo (Top Governança)',
    pilarAmbiental: 'Critérios rígidos de concessão de crédito verde (Itaú) e eficiência produtiva (Toyota).',
    pilarSocial: 'Programas de diversidade e relacionamento com partes interessadas em escala nacional.',
    pilarGovernanca: 'Destaque em integridade corporativa, transparência de conselho e modelo operacional de conduta ética.',
    destaqueMetas: 'Itaú atingiu a 7ª colocação geral do ranking brasileiro de responsabilidade ESG.',
    hipoteseLorenzetti: 'Pode refletir exigências crescentes de transparência e governança por instituições bancárias na concessão de financiamentos e linhas de crédito corporativo.',
    evidenciasTrace: [
      {
        fonte: 'Exame / Times Brasil',
        titulo: 'Itaú Unibanco e Toyota destacam-se em ética e governança',
        url: 'https://timesbrasil.com.br/brasil/ranking-esg-2025-natura-boticario-mercado-livre/'
      }
    ]
  },
  {
    categoria: 'Concorrentes do Setor',
    empresa: 'Dexco',
    marcasSegmento: 'Deca, Portinari, Hydra, Durafloor (Metais & Revestimentos)',
    pilarAmbiental: 'Conquistou 100% de Aterro Zero nas divisões de Metais, Painéis Brasil e Revestimentos Cerâmicos, eliminando envio de resíduos industriais a aterros.',
    pilarSocial: 'Atingiu 36% de mulheres em cargos de liderança corporativa e presença comunitária em todos os territórios onde opera.',
    pilarGovernanca: '75% dos compromissos ESG atingidos; metas climáticas atreladas à remuneração variável de executivos; desinvestimento das marcas Corona e Thermosystem.',
    destaqueMetas: 'Reestruturação de portfólio para produtos de alto padrão e ecoeficiência fabril.',
    hipoteseLorenzetti: 'Pode intensificar a pressão competitiva sobre práticas de Aterro Zero e inclusão de métricas ESG na governança corporativa e remuneração da liderança.',
    evidenciasTrace: [
      {
        fonte: 'Observatório do 3º Setor',
        titulo: 'Dexco conclui ciclo de sustentabilidade com 75% das metas atingidas',
        url: 'https://observatorio3setor.org.br/dexco-conclui-ciclo-de-estrategia-de-sustentabilidade-e-atinge-75-dos-compromissos-assumidos/'
      },
      {
        fonte: 'Dexco ESG Oficial',
        titulo: 'Relatório ESG Dexco: 100% Aterro Zero e Metas Climáticas Executivas',
        url: 'https://www.dex.co/esg/'
      }
    ]
  },
  {
    categoria: 'Concorrentes do Setor',
    empresa: 'Docol',
    marcasSegmento: 'Metais Sanitários & Sistemas de Economia de Água',
    pilarAmbiental: 'Reciclou mais de 3,7 mil toneladas de resíduos industriais em fundições de metais; meta pública de reduzir em 70% o consumo de água das fábricas até 2030.',
    pilarSocial: 'Atuação em conformidade socioambiental e processos industriais seguros nas plantas catarinenses.',
    pilarGovernanca: 'Conquistou o Selo de Compromisso EcoVadis (manufatura avançada de metais classificada internacionalmente); portfólio focado em Prédios Verdes e certificação LEED.',
    destaqueMetas: 'Alinhamento direto a certificações prediais ecológicas e validação internacional EcoVadis.',
    hipoteseLorenzetti: 'Pode elevar as exigências de certificações internacionais (como EcoVadis e LEED) por grandes construtoras corporativas e residenciais na especificação de metais sanitários.',
    evidenciasTrace: [
      {
        fonte: 'Jornal do Brás',
        titulo: 'Docol recicla mais de 3,7 mil toneladas e projeta redução de 70% no consumo de água até 2030',
        url: 'https://jornaldobras.com.br/noticia/81424/docol-recicla-mais-de-3-7-mil-toneladas-de-residuos-e-projeta-reduzir-em-70-o-consumo-de-agua-ate-2030'
      }
    ]
  },
  {
    categoria: 'Concorrentes do Setor',
    empresa: 'Zagonel',
    marcasSegmento: 'Chuveiros, Duchas e Torneiras Termoplásticas (Marcas Zagonel, Corona, Thermosystem)',
    pilarAmbiental: 'Desafio de absorver e reestruturar os planos de Logística Reversa e Economia Circular pós-consumo das marcas adquiridas conforme a PNRS (Lei 12.305); P&D em produtos híbridos de alta eficiência.',
    pilarSocial: 'Conquistou a certificação Great Place to Work (GPTW), consolidando práticas de gestão de clima e valorização da equipe de colaboradores.',
    pilarGovernanca: 'Consolidação de mercado com incorporação do parque fabril de Aracaju-SE e reestruturação da governança operacional integrada.',
    destaqueMetas: 'Principal concorrente em volume de termoplásticos após aquisição de Corona e Thermosystem.',
    hipoteseLorenzetti: 'Pode representar maior concorrência no volume de vendas do canal de materiais de construção e demandar acompanhamento das estratégias de logística reversa e eficiência energética na categoria de duchas elétricas.',
    evidenciasTrace: [
      {
        fonte: 'FIESC Imprensa',
        titulo: 'Zagonel compra marcas Corona e Thermosystem',
        url: 'https://fiesc.com.br/pt-br/imprensa/zagonel-de-pinhalzinho-compra-marcas-corona-e-thermosystem'
      },
      {
        fonte: 'Great Place to Work / LinkedIn',
        titulo: 'Zagonel conquista certificação GPTW',
        url: 'https://www.linkedin.com/posts/gptw-greatplacetowork-orgulhodeserzagonel-share-7490490673465298944-W-PP/'
      }
    ]
  }
];

export function TopEmpresasConcorrentesEsgView({ setActivePage }: TopEmpresasConcorrentesEsgViewProps) {
  const [selectedFilter, setSelectedFilter] = useState<'Todos' | 'Líderes Nacionais' | 'Concorrentes do Setor'>('Todos');

  const filteredBenchmarking = BENCHMARKING_DATA.filter(item => {
    if (selectedFilter === 'Todos') return true;
    return item.categoria === selectedFilter;
  });

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              Regulação & Sustentabilidade
            </span>
            <span className="text-xs text-slate-500">Benchmarking Corporativo & Setorial</span>
          </div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Top Empresas e Concorrentes ESG
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 mb-3">
            Acompanhamento estratégico dos líderes do Ranking Merco Brasil de Responsabilidade ESG e das metas socioambientais e de governança dos concorrentes diretos (Dexco/Deca, Docol e Zagonel).
          </p>

          {/* Subtopic Switcher Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1">
            <button 
              onClick={() => setActivePage?.('ESG')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ← Visão Geral & Normas
            </button>
            <button 
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
            >
              Top Empresas & Concorrentes ESG
            </button>
          </div>
        </div>

        {/* 3 TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-teal-50 dark:bg-teal-900/20 rounded-full flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                LÍDERES MERCO ESG
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-teal-600 dark:text-teal-400 leading-none">
                  Natura & Top 3
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">12x Liderança Merco.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Boticário e Mercado Livre no topo.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                CONCORRÊNCIA METAIS
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-emerald-600 dark:text-emerald-400 leading-none">
                  Dexco & Docol
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">100% Aterro Zero (Dexco).</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Selo EcoVadis e -70% água (Docol).</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                TERMOPLÁSTICOS & PNRS
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-blue-600 dark:text-blue-400 leading-none">
                  Zagonel (Corona)
                </h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Consolidação de mercado.</p>
              <p className="text-[12px] text-slate-400 mt-1 leading-tight font-medium">Logística Reversa PNRS & GPTW.</p>
            </div>
          </div>

        </div>
      </div>

      {/* EVIDÊNCIAS DE DESTAQUE (TOP 3) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">
              Evidências Oficiais e Notícias Estratégicas
            </h2>
            <p className="text-xs text-slate-500">
              Dados comprovados por publicações econômicas, relatórios oficiais e entidades setoriais
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            Total de Evidências: {TOP_ESG_EVIDENCES.length}
          </span>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {TOP_ESG_EVIDENCES.slice(0, 3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* DUAS COLUNAS ANALÍTICAS (01 E 02) */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* 01 - O que observar */}
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
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que observar nos próximos meses</h4>
                    <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-orange-700 dark:text-orange-400 font-semibold">
                        Metas de Aterro Zero, certificações prediais sustentáveis (LEED/EcoVadis) e consolidação da logística reversa pós-aquisições.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>O alcance de 100% Aterro Zero por grandes concorrentes de metais (Dexco/Deca) reforça a exigência de destinação integral de resíduos industriais na cadeia fabril.</li>
                    <li>A busca de certificações internacionais (Selo EcoVadis pela Docol) orienta o fornecimento para construtoras e empreendimentos com foco em Prédios Verdes e LEED.</li>
                    <li>A absorção de fábricas e marcas consolidadas (Corona e Thermosystem pela Zagonel) impõe desafios de adequação aos sistemas de Logística Reversa (PNRS) de termoplásticos.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 02 - Hipóteses de Impacto para a Lorenzetti */}
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
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Hipóteses de Impacto para a Lorenzetti</h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Acompanhamento da ecoeficiência fabril, posicionamento em prédios verdes e dinâmica concorrencial no canal de materiais de construção.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>O avanço de metas públicas de descarbonização e resíduos zero na concorrência de metais <strong className="text-slate-800 dark:text-slate-200">pode demandar acompanhamento</strong> contínuo dos indicadores de ecoeficiência nas unidades industriais.</li>
                    <li>O direcionamento de concorrentes para soluções hidro-economizadoras com selos internacionais <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades</strong> para fortalecimento do portfólio Lorenzetti para construções sustentáveis e corporativas.</li>
                    <li>A unificação das operações de Corona e Thermosystem pela Zagonel <strong className="text-slate-800 dark:text-slate-200">pode gerar</strong> maior pressão concorrencial em volume e custos na categoria de duchas e torneiras termoplásticas no varejo da construção.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MATRIZ EXECUTIVA DE BENCHMARKING ESG */}
      <section className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <h2 className="text-[22px] md:text-[24px] font-bold text-slate-900 dark:text-white tracking-tight">
                Matriz de Benchmarking ESG: Líderes Nacionais & Concorrentes Diretos
              </h2>
              <p className="text-[15px] text-slate-500">
                Comparativo estruturado dos pilares Ambiental, Social, Governança e Hipóteses de Impacto Lorenzetti
              </p>
            </div>
          </div>

          {/* FILTRO CATEGORIA */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 self-start sm:self-auto">
            {(['Todos', 'Líderes Nacionais', 'Concorrentes do Setor'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedFilter === filter
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* LISTA COMPARATIVA */}
        <div className="space-y-6">
          {filteredBenchmarking.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/60 transition-all hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-700/60">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      item.categoria === 'Líderes Nacionais'
                        ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800/40'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/40'
                    }`}>
                      {item.categoria}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{item.marcasSegmento}</span>
                  </div>
                  <h3 className="text-[20px] font-bold text-slate-900 dark:text-white">
                    {item.empresa}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 self-start lg:self-auto">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{item.destaqueMetas}</span>
                </div>
              </div>

              {/* 3 PILARES ESG EM GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                
                <div className="bg-white dark:bg-slate-800/80 rounded-xl p-4 border border-slate-200/60 dark:border-slate-700/40">
                  <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-bold text-[13px] uppercase tracking-wider">
                    <Leaf className="w-4 h-4" />
                    <span>Pilar Ambiental (E)</span>
                  </div>
                  <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.pilarAmbiental}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800/80 rounded-xl p-4 border border-slate-200/60 dark:border-slate-700/40">
                  <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 font-bold text-[13px] uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    <span>Pilar Social (S)</span>
                  </div>
                  <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.pilarSocial}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800/80 rounded-xl p-4 border border-slate-200/60 dark:border-slate-700/40">
                  <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 font-bold text-[13px] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Governança (G)</span>
                  </div>
                  <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.pilarGovernanca}
                  </p>
                </div>

              </div>

              {/* HIPÓTESE LORENZETTI & RASTREABILIDADE */}
              <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/30 p-4 rounded-xl">
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>Hipótese de Impacto Lorenzetti</span>
                  </div>
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
                    {item.hipoteseLorenzetti}
                  </p>
                </div>

                <div className="lg:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700/60 pt-3 lg:pt-0 lg:pl-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    <FileText className="w-3 h-3" />
                    <span>Evidências Utilizadas</span>
                  </div>
                  <div className="space-y-1">
                    {item.evidenciasTrace.map((evTrace, tIdx) => (
                      <div key={tIdx} className="text-[12px] leading-tight">
                        <a 
                          href={evTrace.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
                        >
                          <span className="truncate max-w-[230px]">{evTrace.fonte}</span>
                          <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                        <span className="text-[11px] text-slate-400 block truncate max-w-[230px]">
                          {evTrace.titulo}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* OUTRAS EVIDÊNCIAS / GRID COMPLETO */}
      <section id="todas-evidencias" className="scroll-mt-12 relative mt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-1">
              Todas as Evidências e Fontes da Análise
            </h2>
            <p className="text-xs text-slate-500">
              Rastreabilidade integral das matérias jornalísticas e comunicados corporativos de sustentabilidade
            </p>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {TOP_ESG_EVIDENCES.slice(3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const ConcorrentesEsgView = TopEmpresasConcorrentesEsgView;
export const TopEmpresasConcorrentesEsgViewAlias = TopEmpresasConcorrentesEsgView;
export default TopEmpresasConcorrentesEsgView;
