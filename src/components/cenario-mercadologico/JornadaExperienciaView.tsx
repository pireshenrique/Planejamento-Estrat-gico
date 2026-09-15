import React, { useState } from 'react';
import { 
  ChevronRight, ExternalLink, ChevronDown, ChevronUp, Search, CalendarCheck, ShieldCheck
} from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';
import { JORNADA_COMPRA_PAGE } from '../../data/pages/JornadaCompra';

const EVIDENCIA_INTENCAO: Evidence = {
  id: 'ev-globo-casa-construcao-2025',
  tag: 'Estudo Online',
  source: 'Globo · Casa & Construção 2025',
  dateStr: '2025',
  title: 'Intenção de reforma e planejamento da compra de materiais para o lar',
  headline: 'Tijolo a Tijolo — um estudo sobre decisões que moldam o lar',
  summary: 'Melhorias no lar evoluem para decisões sobre ambientes, materiais e prazos de compra. Conforto, estética e modernização estão entre os principais motivos para reformar; cozinha e banheiro aparecem entre os ambientes planejados; 70% pretendem comprar os materiais em até seis meses e serviços de instalação também participam da avaliação da oferta.',
  isPdf: false,
  url: 'https://gente.globo.com/tijolo-a-tijolo-um-estudo-sobre-decisoes-que-moldam-o-lar.ghtml',
  actionLabel: 'ACESSAR FONTE'
};

const EVIDENCIA_PESQUISA: Evidence = {
  id: 'ev-fundacao-dados-2026',
  tag: 'Estudo Online',
  source: 'Fundação de Dados',
  dateStr: '04/03/2026',
  title: 'Pesquisa e comparação de materiais de construção na fase pré-obra',
  headline: 'Consumidores pesquisam materiais de construção combinando lojas físicas e virtuais; YouTube é a principal mídia social',
  summary: 'Durante o planejamento de obras e reformas, a loja física permanece como principal meio de pesquisa e comparação de materiais de construção, utilizada por 69,7% dos consumidores. Sites/e-commerces, YouTube, sites de fabricantes e Instagram complementam uma jornada de pesquisa distribuída por diferentes pontos de contato. O peso desses meios varia entre classes sociais, assim como a quantidade média de fontes consultadas.',
  isPdf: false,
  url: 'https://fundacaodedados.com.br/2026/03/04/consumidores-pesquisam-materiais-de-construcao-combinando-lojas-fisicas-e-virtuais-youtube-e-a-principal-midia-social/',
  actionLabel: 'ACESSAR FONTE'
};

const EVIDENCIA_CONFIANCA: Evidence = {
  id: 'ev-opinion-box-octadesk-cx-trends-2026',
  tag: 'Estudo Online',
  source: 'Opinion Box + Octadesk',
  dateStr: '30/04/2026',
  title: 'CX Trends 2026: dados e tendências de customer experience no Brasil',
  headline: 'Confiança, experiência e fatores que confirmam ou interrompem a decisão de compra',
  summary: 'Qualidade, preço e custos associados participam da decisão final, enquanto confiança e experiência anterior ajudam a diferenciar alternativas semelhantes. Frete alto, falta de confiança e avaliações negativas podem interromper a compra. Experiências posteriores também alimentam novas jornadas: boas experiências reforçam preferência e relatos negativos podem afetar a reputação da marca e a decisão de outros consumidores.',
  isPdf: false,
  url: 'https://blog.opinionbox.com/tendencias-de-customer-experience/',
  actionLabel: 'ACESSAR FONTE'
};

interface JornadaExperienciaViewProps {
  setActivePage?: (page: string) => void;
}

export function JornadaExperienciaView({ setActivePage }: JornadaExperienciaViewProps) {
  const getVal = (id: string) => JORNADA_COMPRA_PAGE.factualContent.find(f => f.id === id)?.value;
  const getStr = (id: string) => getVal(id)?.toFixed(1).replace('.', ',');
  const getMeta = (id: string, key: string) => JORNADA_COMPRA_PAGE.factualContent.find(f => f.id === id)?.metadata?.[key];
  const getHistVal = (id: string) => getMeta(id, 'valorHistorico');
  const getHistStr = (id: string) => {
    const v = getHistVal(id);
    return v !== undefined && v !== null ? `${v.toFixed(1).replace('.', ',')}%` : '—';
  };
  // Estado da navegação interna entre blocos - Nova ordem: 1. Intenção e Planejamento, 2. Pesquisa e Comparação, 3. Confiança e Decisão
  const [subTab, setSubTab] = useState<'intencao' | 'pesquisa' | 'confianca'>('intencao');

  // Estado para expandir/recolher dados complementares do Gráfico 01
  const [showAllMeios, setShowAllMeios] = useState(false);

  // Dados do Gráfico 01 - Top 5 comuns (2025 x Média Histórica 2022–2024)
  const topMeiosG1 = [
    {
      nome: 'Lojas físicas de materiais de construção',
      val2025: getVal('jornada-compra::pesquisa::loja-fisica-2025')!,
      valHistorico: getHistVal('jornada-compra::pesquisa::loja-fisica-2025'),
      label2025: `${getStr('jornada-compra::pesquisa::loja-fisica-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::loja-fisica-2025'),
    },
    {
      nome: 'Sites / e-commerces de materiais de construção',
      val2025: getVal('jornada-compra::pesquisa::ecommerce-2025')!,
      valHistorico: getHistVal('jornada-compra::pesquisa::ecommerce-2025'),
      label2025: `${getStr('jornada-compra::pesquisa::ecommerce-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::ecommerce-2025'),
    },
    {
      nome: 'YouTube',
      val2025: getVal('jornada-compra::pesquisa::youtube-2025')!,
      valHistorico: getHistVal('jornada-compra::pesquisa::youtube-2025'),
      label2025: `${getStr('jornada-compra::pesquisa::youtube-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::youtube-2025'),
    },
    {
      nome: 'Sites das empresas fabricantes',
      val2025: getVal('jornada-compra::pesquisa::sites-fabricantes-2025')!,
      valHistorico: getHistVal('jornada-compra::pesquisa::sites-fabricantes-2025'),
      label2025: `${getStr('jornada-compra::pesquisa::sites-fabricantes-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::sites-fabricantes-2025'),
      destaqueFabricante: true,
    },
    {
      nome: 'Instagram',
      val2025: getVal('jornada-compra::pesquisa::instagram-2025')!,
      valHistorico: getHistVal('jornada-compra::pesquisa::instagram-2025'),
      label2025: `${getStr('jornada-compra::pesquisa::instagram-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::instagram-2025'),
    },
  ];

  // Dados complementares do Gráfico 01
  const complementaresG1 = [
    {
      nome: 'Pinterest',
      val2025: getVal('jornada-compra::pesquisa::pinterest-2025')!,
      valHistorico: getHistVal('jornada-compra::pesquisa::pinterest-2025'),
      label2025: `${getStr('jornada-compra::pesquisa::pinterest-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::pinterest-2025'),
    },
    {
      nome: 'Aplicativos de construção e reforma',
      val2025: getVal('jornada-compra::pesquisa::apps-2025')!,
      valHistorico: getHistVal('jornada-compra::pesquisa::apps-2025'),
      label2025: `${getStr('jornada-compra::pesquisa::apps-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::apps-2025'),
    },
    {
      nome: 'Tablóides / folhetos de ofertas',
      val2025: getVal('jornada-compra::pesquisa::tabloides-2025')!,
      valHistorico: getHistVal('jornada-compra::pesquisa::tabloides-2025'),
      label2025: `${getStr('jornada-compra::pesquisa::tabloides-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::tabloides-2025'),
    },
    {
      nome: 'TikTok',
      val2025: getVal('jornada-compra::pesquisa::tiktok-2025')!,
      valHistorico: null,
      label2025: `${getStr('jornada-compra::pesquisa::tiktok-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::tiktok-2025'),
    },
    {
      nome: 'Programas de TV sobre decoração, reforma e construção',
      val2025: getVal('jornada-compra::pesquisa::tv-2025')!,
      valHistorico: getHistVal('jornada-compra::pesquisa::tv-2025'),
      label2025: `${getStr('jornada-compra::pesquisa::tv-2025')}%`,
      labelHistorico: getHistStr('jornada-compra::pesquisa::tv-2025'),
    },
    {
      nome: 'Facebook (média histórica 2022–2024)',
      val2025: null,
      valHistorico: getHistVal('jornada-compra::pesquisa::facebook-historico'),
      label2025: '—',
      labelHistorico: getHistStr('jornada-compra::pesquisa::facebook-historico'),
    },
  ];

  // Matriz Comparativa por Classes Sociais - 2025
  const matrizClasses = [
    {
      nome: 'Loja física',
      classeA: getMeta('jornada-compra::pesquisa::matriz-loja-fisica', 'classeA'),
      classeB: getMeta('jornada-compra::pesquisa::matriz-loja-fisica', 'classeB'),
      classeC: getMeta('jornada-compra::pesquisa::matriz-loja-fisica', 'classeC'),
      isFabricante: false,
    },
    {
      nome: 'Sites / e-commerces',
      classeA: getMeta('jornada-compra::pesquisa::matriz-ecommerce', 'classeA'),
      classeB: getMeta('jornada-compra::pesquisa::matriz-ecommerce', 'classeB'),
      classeC: getMeta('jornada-compra::pesquisa::matriz-ecommerce', 'classeC'),
      isFabricante: false,
    },
    {
      nome: 'Sites dos fabricantes',
      classeA: 40.4,
      classeB: 30.5,
      classeC: 19.9,
      isFabricante: true,
    },
    {
      nome: 'YouTube',
      classeA: getMeta('jornada-compra::pesquisa::matriz-youtube', 'classeA'),
      classeB: getMeta('jornada-compra::pesquisa::matriz-youtube', 'classeB'),
      classeC: getMeta('jornada-compra::pesquisa::matriz-youtube', 'classeC'),
      isFabricante: false,
    },
    {
      nome: 'Instagram',
      classeA: getMeta('jornada-compra::pesquisa::matriz-instagram', 'classeA'),
      classeB: getMeta('jornada-compra::pesquisa::matriz-instagram', 'classeB'),
      classeC: getMeta('jornada-compra::pesquisa::matriz-instagram', 'classeC'),
      isFabricante: false,
    },
    {
      nome: 'Aplicativos de construção/reforma',
      classeA: getMeta('jornada-compra::pesquisa::matriz-apps', 'classeA'),
      classeB: getMeta('jornada-compra::pesquisa::matriz-apps', 'classeB'),
      classeC: getMeta('jornada-compra::pesquisa::matriz-apps', 'classeC'),
      isFabricante: false,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5 sm:gap-6 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in duration-300">
      
      {/* CABEÇALHO COMPACTO DA PÁGINA */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-0.5 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button 
            onClick={() => setActivePage?.('Home')} 
            className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0 cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 shrink-0">Cenário Mercadológico</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#0c162c] dark:text-white font-bold shrink-0">Jornada de Compra</span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-0.5">
            Jornada de Compra
          </h1>
          <p className="text-xs sm:text-[14px] text-slate-600 dark:text-slate-400 max-w-3xl leading-snug">
            Como o consumidor pesquisa, compara, valida informações e constrói sua decisão de compra.
          </p>
        </div>
      </div>

      {/* ================================================== */}
      {/* NAVEGAÇÃO INTERNA ENTRE OS 3 BLOCOS                */}
      {/* 1. Intenção e Planejamento                         */}
      {/* 2. Pesquisa e Comparação                           */}
      {/* 3. Confiança e Decisão                             */}
      {/* ================================================== */}
      <div className="w-full bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-2 sm:p-2.5 shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full">
          {/* BOTÃO 1: INTENÇÃO E PLANEJAMENTO */}
          <button
            type="button"
            onClick={() => setSubTab('intencao')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              subTab === 'intencao'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md border-indigo-700 dark:border-indigo-400 ring-2 ring-indigo-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                subTab === 'intencao'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400'
              }`}
            >
              <CalendarCheck className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Intenção e Planejamento</span>
          </button>

          {/* BOTÃO 2: PESQUISA E COMPARAÇÃO */}
          <button
            type="button"
            onClick={() => setSubTab('pesquisa')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              subTab === 'pesquisa'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md border-indigo-700 dark:border-indigo-400 ring-2 ring-indigo-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                subTab === 'pesquisa'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400'
              }`}
            >
              <Search className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Pesquisa e Comparação</span>
          </button>

          {/* BOTÃO 3: CONFIANÇA E DECISÃO */}
          <button
            type="button"
            onClick={() => setSubTab('confianca')}
            className={`w-full h-full min-h-[96px] px-2 py-3 rounded-[16px] text-[13px] lg:text-[14px] font-bold transition-all duration-200 ease-out whitespace-normal break-words leading-tight text-center cursor-pointer border flex flex-col items-center justify-center gap-2 select-none active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              subTab === 'confianca'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md border-indigo-700 dark:border-indigo-400 ring-2 ring-indigo-600/30'
                : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 shadow-sm border-slate-200/90 dark:border-slate-700/80 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-200 hover:shadow-md'
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 ${
                subTab === 'confianca'
                  ? 'bg-white/20 border-white/40 text-white'
                  : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400'
              }`}
            >
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <span className="mt-0.5">Confiança e Decisão</span>
          </button>
        </div>
      </div>

      {/* ================================================== */}
      {/* BLOCO 01 — INTENÇÃO E PLANEJAMENTO                 */}
      {/* GLOBO · CASA & CONSTRUÇÃO 2025                     */}
      {/* REFINADO: COMPACTO, FLUIDO E SEM FRAGMENTAÇÃO      */}
      {/* ================================================== */}
      {subTab === 'intencao' && (
        <section className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm flex flex-col gap-4 sm:gap-5 animate-in fade-in duration-300">
          
          {/* CABEÇALHO DO BLOCO */}
          <div className="flex flex-col gap-1.5 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-md border border-blue-200/60 dark:border-blue-800/60">
                01 · INTENÇÃO E PLANEJAMENTO
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
                GLOBO · CASA & CONSTRUÇÃO 2025
              </span>
            </div>

            <h2 className="text-base sm:text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-snug mt-0.5">
              Da necessidade de melhorar o lar ao planejamento da reforma e da compra de materiais.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
              Conforto, estética, modernização e manutenção ajudam a iniciar reformas. A partir dessa necessidade, o consumidor define ambientes, materiais, prazo de compra e avalia elementos que podem facilitar a execução.
            </p>
          </div>

          {/* ABERTURA — RELAÇÃO RECENTE COM O LAR (FAIXA HORIZONTAL COMPACTA) */}
          <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 rounded-xl px-4 py-3 sm:py-3.5 flex flex-col gap-2.5">
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              RELAÇÃO RECENTE COM O LAR
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5">
              <div className="sm:w-[48%] shrink-0 flex items-center gap-3 sm:border-r border-slate-200 dark:border-slate-700/60 sm:pr-4">
                <span className="text-3xl sm:text-[34px] font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none">{getVal("jornada-compra::intencao::busca-melhorar-lar")}%</span>
                <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                  buscam constantemente novas formas de melhorar o lar.
                </p>
              </div>
              <div className="sm:w-[48%] flex items-center gap-3">
                <span className="text-3xl sm:text-[34px] font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none">{getVal("jornada-compra::intencao::obra-12-meses")}%</span>
                <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                  realizaram alguma obra ou reforma no imóvel nos últimos 12 meses.
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
              <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Os dados indicam uma relação ativa com o imóvel: buscar melhorias e realizar intervenções no lar já fazem parte da rotina de grande parte dos consumidores.
              </p>
            </div>
          </div>

          {/* QUEM ESTÁ PLANEJANDO REFORMAR (COMPOSIÇÃO DO PÚBLICO) */}
          <div className="border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-4 sm:p-5 bg-slate-50/40 dark:bg-slate-800/20 flex flex-col gap-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                QUEM ESTÁ PLANEJANDO REFORMAR
              </span>
              <span className="text-[12px] sm:text-[13px] text-slate-500 dark:text-slate-400">
                Composição das pessoas com intenção de realizar algum tipo de reforma nos próximos 12 meses
              </span>
            </div>

            {/* ÁREA ÚNICA COM 3 COLUNAS: IDADE (~31%), REGIÃO (~31%) E CLASSE SOCIAL + GÊNERO (~38%) */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-stretch pt-1">
              
              {/* COLUNA 1: IDADE (~31%) */}
              <div className="w-full lg:w-[31%] flex flex-col gap-2 lg:pr-5 lg:border-r border-slate-200/70 dark:border-slate-700/60">
                <span className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1.5 border-b border-slate-200/60 dark:border-slate-700/60">
                  Idade
                </span>
                
                <div className="flex flex-col gap-1.5 pt-0.5">
                  {[
                    { label: '18–24', val: 21, highlight: false },
                    { label: '25–34', val: 29, highlight: true },
                    { label: '35–44', val: 13, highlight: false },
                    { label: '45–54', val: 20, highlight: false },
                    { label: '55–65', val: 13, highlight: false },
                    { label: '66+', val: 4, highlight: false },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[12.5px]">
                      <span className={`w-12 shrink-0 ${item.highlight ? 'font-bold text-slate-900 dark:text-white' : 'font-medium text-slate-600 dark:text-slate-300'}`}>
                        {item.label}
                      </span>
                      <div className="flex-1 bg-slate-200/80 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all ${item.highlight ? 'bg-blue-600 dark:bg-blue-400' : 'bg-slate-300 dark:bg-slate-600'}`}
                          style={{ width: `${(item.val / 30) * 100}%` }}
                        />
                      </div>
                      <span className={`w-9 text-right shrink-0 ${item.highlight ? 'font-bold text-blue-600 dark:text-blue-400' : 'font-semibold text-slate-700 dark:text-slate-300'}`}>
                        {item.val}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUNA 2: REGIÃO (~31%) */}
              <div className="w-full lg:w-[31%] flex flex-col gap-2 lg:pr-5 lg:border-r border-slate-200/70 dark:border-slate-700/60">
                <span className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1.5 border-b border-slate-200/60 dark:border-slate-700/60">
                  Região
                </span>

                <div className="flex flex-col gap-1.5 pt-0.5">
                  {[
                    { label: 'Sudeste', val: getVal('jornada-compra::intencao::regiao-sudeste')! },
                    { label: 'Nordeste', val: getVal('jornada-compra::intencao::regiao-nordeste')! },
                    { label: 'Sul', val: getVal('jornada-compra::intencao::regiao-sul')! },
                    { label: 'Norte', val: getVal('jornada-compra::intencao::regiao-norte')! },
                    { label: 'Centro-Oeste', val: getVal('jornada-compra::intencao::regiao-centro-oeste')! },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[12.5px]">
                      <span className="w-24 shrink-0 truncate font-medium text-slate-600 dark:text-slate-300">
                        {item.label}
                      </span>
                      <div className="flex-1 bg-slate-200/80 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-slate-400 dark:bg-slate-500 h-full rounded-full transition-all"
                          style={{ width: `${(item.val / 50) * 100}%` }}
                        />
                      </div>
                      <span className="w-9 text-right shrink-0 font-semibold text-slate-700 dark:text-slate-300">
                        {item.val}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COLUNA 3: CLASSE SOCIAL + GÊNERO (~38%) */}
              <div className="w-full lg:w-[38%] flex flex-col gap-5">
                
                {/* CLASSE SOCIAL */}
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1.5 border-b border-slate-200/60 dark:border-slate-700/60">
                    Classe Social
                  </span>

                  {/* Labels e valores centralizados exatamente sobre seus segmentos */}
                  <div className="w-full flex pt-0.5">
                    <div className="w-[42%] flex flex-col items-center text-center">
                      <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">Classe AB</span>
                      <span className="text-[15px] sm:text-base font-bold text-blue-600 dark:text-blue-400 leading-tight">42%</span>
                    </div>
                    <div className="w-[41%] flex flex-col items-center text-center">
                      <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">Classe C</span>
                      <span className="text-[15px] sm:text-base font-bold text-slate-800 dark:text-slate-200 leading-tight">41%</span>
                    </div>
                    <div className="w-[17%] flex flex-col items-center text-center">
                      <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">Classe D</span>
                      <span className="text-[15px] sm:text-base font-bold text-slate-600 dark:text-slate-400 leading-tight">17%</span>
                    </div>
                  </div>

                  {/* Barra 100% contínua segmentada */}
                  <div className="w-full h-3 rounded-md overflow-hidden flex bg-slate-200 dark:bg-slate-700">
                    <div 
                      className="bg-blue-600 dark:bg-blue-500 h-full transition-all" 
                      style={{ width: '42%' }} 
                      title="Classe AB: 42%"
                    />
                    <div 
                      className="bg-blue-400 dark:bg-blue-600/80 h-full border-l border-white/40 dark:border-slate-800/40 transition-all" 
                      style={{ width: '41%' }} 
                      title="Classe C: 41%"
                    />
                    <div 
                      className="bg-slate-300 dark:bg-slate-600 h-full border-l border-white/40 dark:border-slate-800/40 transition-all" 
                      style={{ width: '17%' }} 
                      title="Classe D: 17%"
                    />
                  </div>
                </div>

                {/* GÊNERO */}
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1.5 border-b border-slate-200/60 dark:border-slate-700/60">
                    Gênero
                  </span>

                  {/* Labels e valores centralizados sobre suas metades */}
                  <div className="w-full flex pt-0.5">
                    <div className="w-[52%] flex flex-col items-center text-center">
                      <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">Mulher</span>
                      <span className="text-[15px] sm:text-base font-bold text-blue-600 dark:text-blue-400 leading-tight">52%</span>
                    </div>
                    <div className="w-[48%] flex flex-col items-center text-center">
                      <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">Homem</span>
                      <span className="text-[15px] sm:text-base font-bold text-slate-700 dark:text-slate-300 leading-tight">48%</span>
                    </div>
                  </div>

                  {/* Barra linear 100% contínua */}
                  <div className="w-full h-3 rounded-md overflow-hidden flex bg-slate-200 dark:bg-slate-700">
                    <div 
                      className="bg-blue-600 dark:bg-blue-500 h-full transition-all" 
                      style={{ width: '52%' }} 
                      title="Mulher: 52%"
                    />
                    <div 
                      className="bg-slate-300 dark:bg-slate-500 h-full border-l border-white/40 dark:border-slate-800/40 transition-all" 
                      style={{ width: '48%' }} 
                      title="Homem: 48%"
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* LEITURA EDITORIAL DO PERFIL */}
            <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-3 py-0.5 mt-2">
              <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                Entre as pessoas com intenção de reformar, 25–34 anos é a faixa etária mais presente (29%), o Sudeste concentra 48% e as classes AB e C apresentam participações semelhantes, com 42% e 41%. A distribuição por gênero é praticamente equilibrada.
              </p>
            </div>
          </div>

          {/* TRANSIÇÃO EDITORIAL COMPARTILHADA PARA MOTIVOS + CÔMODOS */}
          <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
            A decisão de reformar parte de necessidades diferentes e se materializa na escolha dos ambientes que receberão intervenção.
          </p>

          {/* MOTIVOS DA REFORMA & CÔMODOS EM FOCO LADO A LADO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 w-full">
            
            {/* MOTIVOS DA REFORMA */}
            <div className="border border-slate-200/70 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 bg-slate-50/40 dark:bg-slate-800/20 flex flex-col justify-between gap-3">
              <div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    O QUE MOTIVA A REFORMA
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-slate-500 dark:text-slate-400">
                    Principais razões para realizar melhorias no imóvel
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 mt-2.5">
                  {[
                    { label: 'Melhorar conforto ou acessibilidade', val: 42, color: 'bg-indigo-600 dark:bg-indigo-500' },
                    { label: 'Melhorar a estética', val: 41, color: 'bg-indigo-500 dark:bg-indigo-400' },
                    { label: 'Renovar / modernizar o ambiente', val: 39, color: 'bg-indigo-500 dark:bg-indigo-400' },
                    { label: 'Valorização do imóvel', val: 27, color: 'bg-slate-400 dark:bg-slate-500' },
                    { label: 'Conserto emergencial', val: 20, color: 'bg-slate-400 dark:bg-slate-500', nota: 'Ex.: vazamentos, rachaduras e infiltrações' },
                    { label: 'Reforma geral ou estrutural / prevenção', val: 18, color: 'bg-slate-400 dark:bg-slate-500' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2 text-[13.5px] sm:text-[14px]">
                        <div className="flex items-baseline gap-1.5 min-w-0">
                          <span className="font-medium text-slate-700 dark:text-slate-200 truncate">
                            {item.label}
                          </span>
                          {item.nota && (
                            <span className="text-[11.5px] text-slate-400 dark:text-slate-500 truncate hidden sm:inline">
                              ({item.nota})
                            </span>
                          )}
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white shrink-0">
                          {item.val}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200/80 dark:bg-slate-700/60 rounded-full h-2 overflow-hidden">
                        <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CÔMODOS EM FOCO */}
            <div className="border border-slate-200/70 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 bg-slate-50/40 dark:bg-slate-800/20 flex flex-col justify-between gap-3">
              <div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    CÔMODOS EM FOCO
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-slate-500 dark:text-slate-400">
                    Ambientes planejados para reforma nos próximos 12 meses — 2025
                  </span>
                </div>

                <div className="flex flex-col gap-2 mt-2.5">
                  {[
                    { label: 'Quarto', val: 42, highlight: false },
                    { label: 'Cozinha', val: 36, highlight: true },
                    { label: 'Banheiro', val: 33, highlight: true },
                    { label: 'Sala', val: 31, highlight: false },
                    { label: 'Imóvel inteiro', val: 20, highlight: false },
                    { label: 'Quintal / jardim', val: 17, highlight: false },
                    { label: 'Lavanderia', val: 14, highlight: false },
                    { label: 'Escritório', val: 8, highlight: false },
                    { label: 'Outro cômodo', val: 4, highlight: false },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-0.5">
                      <div className="flex items-center justify-between gap-2 text-[13px] sm:text-[13.5px]">
                        <div className="flex items-center gap-1.5 min-w-0">
                          {item.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                          )}
                          <span className={`truncate ${item.highlight ? 'font-bold text-slate-900 dark:text-white' : 'font-medium text-slate-700 dark:text-slate-300'}`}>
                            {item.label}
                          </span>
                        </div>
                        <span className={`shrink-0 ${item.highlight ? 'font-bold text-blue-700 dark:text-blue-400' : 'font-semibold text-slate-600 dark:text-slate-400'}`}>
                          {item.val}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200/80 dark:bg-slate-700/60 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${item.highlight ? 'bg-blue-600 dark:bg-blue-400' : 'bg-slate-300 dark:bg-slate-600'}`} 
                          style={{ width: `${item.val}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* CONCLUSÃO COMPARTILHADA: MOTIVOS + CÔMODOS */}
          <div className="border-l-2 border-slate-400 dark:border-slate-500 pl-3 py-0.5">
            <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
              Conforto ou acessibilidade, estética e modernização lideram os motivos para reformar. Entre os ambientes planejados, quarto aparece em primeiro lugar, seguido por cozinha e banheiro.
            </p>
          </div>

          {/* MATERIAIS NOS PLANOS DE COMPRA (RANKING ÚNICO HORIZONTAL) */}
          <div className="border border-slate-200/70 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 bg-slate-50/40 dark:bg-slate-800/20 flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                MATERIAIS NOS PLANOS DE COMPRA
              </span>
              <span className="text-[12px] sm:text-[13px] text-slate-500 dark:text-slate-400">
                O que está previsto para a reforma nos próximos 12 meses
              </span>
            </div>

            {/* RANKING ÚNICO DE BARRAS HORIZONTAIS */}
            <div className="flex flex-col gap-2.5 mt-1">
              {[
                { label: 'Cimento / argamassa', val: 80 },
                { label: 'Tinta', val: 77 },
                { label: 'Pisos e revestimentos', val: 61 },
                { label: 'Hidráulica', val: 38 },
                { label: 'Móveis planejados', val: 33 },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2 text-[13.5px] sm:text-[14px]">
                    <span className="font-medium text-slate-700 dark:text-slate-200 truncate">
                      {item.label}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white shrink-0">
                      {item.val}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200/80 dark:bg-slate-700/60 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-slate-500 dark:bg-slate-400 h-full rounded-full" 
                      style={{ width: `${item.val}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* LEITURA EDITORIAL DE MATERIAIS */}
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 mt-0.5">
              <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Cimento/argamassa, tinta e pisos ou revestimentos aparecem com maior presença nos planos de compra. Materiais hidráulicos estão previstos por 38% do público analisado.
              </p>
            </div>
          </div>

          {/* PLANEJAMENTO DA COMPRA */}
          <div className="border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-4 sm:p-5 bg-slate-50/60 dark:bg-slate-800/30 flex flex-col gap-3.5">
            <div className="flex flex-col gap-1">
              <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                PLANEJAMENTO DA COMPRA
              </span>
              <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Depois de definir o que reformar e quais materiais considerar, o planejamento passa também pelo preço e pelo momento da compra.
              </p>
            </div>

            {/* DOIS CARDS ANALÍTICOS INDEPENDENTES LADO A LADO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-stretch">
              
              {/* CARD 1: ATENÇÃO ÀS PROMOÇÕES */}
              <div className="bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/70 rounded-xl p-4 sm:p-5 flex flex-col justify-between gap-4 shadow-xs">
                {/* Cabeçalho e Indicador Principal */}
                <div className="flex flex-col gap-3">
                  <span className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1.5 border-b border-slate-200/60 dark:border-slate-700/60">
                    Atenção às Promoções
                  </span>

                  <div className="flex items-start gap-3.5 pt-0.5">
                    <span className="text-3xl sm:text-[38px] font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none shrink-0">
                      78%
                    </span>
                    <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-snug pt-0.5">
                      estão atentos às promoções de materiais de construção.
                    </p>
                  </div>
                </div>

                {/* Gráfico Comparativo por Classe Social */}
                <div className="flex flex-col gap-2 py-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Atenção a promoções por classe social
                  </span>
                  
                  <div className="flex flex-col gap-1.5">
                    {[
                      { classe: 'Classe A', val: 82, isHighest: false },
                      { classe: 'Classe B', val: 79, isHighest: false },
                      { classe: 'Classe C', val: 73, isHighest: false },
                      { classe: 'Classe D', val: 84, isHighest: true },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-[12px] sm:text-[12.5px]">
                        <span className={`w-18 shrink-0 ${item.isHighest ? 'font-bold text-slate-900 dark:text-white' : 'font-medium text-slate-600 dark:text-slate-300'}`}>
                          {item.classe}
                        </span>
                        <div className="flex-1 bg-slate-200/80 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all ${item.isHighest ? 'bg-blue-600 dark:bg-blue-400' : 'bg-slate-400/80 dark:bg-slate-500'}`}
                            style={{ width: `${(item.val / 90) * 100}%` }}
                          />
                        </div>
                        <span className={`w-9 text-right shrink-0 ${item.isHighest ? 'font-bold text-blue-600 dark:text-blue-400' : 'font-semibold text-slate-700 dark:text-slate-300'}`}>
                          {item.val}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rodapé Interpretativo do Card */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    A atenção a promoções permanece elevada em todas as classes, variando de 73% na classe C a 84% na classe D.
                  </p>
                </div>
              </div>

              {/* CARD 2: JANELA DE COMPRA */}
              <div className="bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/70 rounded-xl p-4 sm:p-5 flex flex-col justify-between gap-4 shadow-xs">
                {/* Cabeçalho e Indicador Principal */}
                <div className="flex flex-col gap-3">
                  <span className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-1.5 border-b border-slate-200/60 dark:border-slate-700/60">
                    Janela de Compra
                  </span>

                  <div className="flex items-start gap-3.5 pt-0.5">
                    <span className="text-3xl sm:text-[38px] font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none shrink-0">
                      70%
                    </span>
                    <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-snug pt-0.5">
                      pretendem comprar os materiais da reforma em até 6 meses.
                    </p>
                  </div>
                </div>

                {/* Gráfico Analítico de Distribuição Temporal (Colunas Verticais Proporcionais) */}
                <div className="flex flex-col gap-1 py-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Intenção de compra ao longo do tempo
                  </span>

                  <div className="pt-2">
                    <div className="flex items-end justify-between gap-2 pb-1 border-b border-slate-200 dark:border-slate-700/80">
                      {/* Até 3 meses (37%) */}
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[12.5px] sm:text-[13px] font-bold text-blue-600 dark:text-blue-400 leading-none">
                          37%
                        </span>
                        <div 
                          className="w-full max-w-[54px] bg-blue-600 dark:bg-blue-500 rounded-t-sm transition-all"
                          style={{ height: '48px' }}
                        />
                      </div>

                      {/* 4 a 6 meses (33%) */}
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[12.5px] sm:text-[13px] font-bold text-blue-600 dark:text-blue-400 leading-none">
                          33%
                        </span>
                        <div 
                          className="w-full max-w-[54px] bg-blue-500/90 dark:bg-blue-500/80 rounded-t-sm transition-all"
                          style={{ height: '43px' }}
                        />
                      </div>

                      {/* Divisor sutil entre os primeiros 6 meses e os meses seguintes */}
                      <div className="h-10 w-px bg-slate-200 dark:bg-slate-700 shrink-0 self-end mb-1" />

                      {/* 7 a 9 meses (12%) */}
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[12.5px] sm:text-[13px] font-semibold text-slate-600 dark:text-slate-400 leading-none">
                          12%
                        </span>
                        <div 
                          className="w-full max-w-[54px] bg-slate-300 dark:bg-slate-600 rounded-t-sm transition-all"
                          style={{ height: '16px' }}
                        />
                      </div>

                      {/* 10 a 12 meses (19%) */}
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[12.5px] sm:text-[13px] font-semibold text-slate-600 dark:text-slate-400 leading-none">
                          19%
                        </span>
                        <div 
                          className="w-full max-w-[54px] bg-slate-400/80 dark:bg-slate-500 rounded-t-sm transition-all"
                          style={{ height: '25px' }}
                        />
                      </div>
                    </div>

                    {/* Labels e Bracket Inferior */}
                    <div className="flex items-start justify-between gap-2 pt-1.5 text-[11px] sm:text-[11.5px] text-slate-600 dark:text-slate-400 font-medium">
                      {/* Grupo 1: Até 6 meses */}
                      <div className="flex-2 flex flex-col">
                        <div className="flex justify-around">
                          <span className="text-center leading-tight">Até 3m</span>
                          <span className="text-center leading-tight">4 a 6m</span>
                        </div>
                        <div className="mt-1 pt-0.5 flex flex-col items-center">
                          <div className="w-full h-1.5 border-b-2 border-x-2 border-blue-500/60 dark:border-blue-400/60 rounded-b-xs" />
                          <span className="text-[10.5px] font-bold text-blue-600 dark:text-blue-400 mt-0.5 tracking-tight">
                            70% em até 6 meses
                          </span>
                        </div>
                      </div>

                      <div className="w-px shrink-0" />

                      {/* Grupo 2: 7 a 12 meses */}
                      <div className="flex-2 flex justify-around">
                        <span className="text-center leading-tight">7 a 9m</span>
                        <span className="text-center leading-tight">10 a 12m</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rodapé Interpretativo do Card */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    A intenção de compra se concentra nos primeiros seis meses: 37% pretendem comprar em até 3 meses e 33% entre 4 e 6 meses.
                  </p>
                </div>
              </div>

            </div>

            {/* TEXTO DE FECHAMENTO (LEITURA SINTÉTICA REFINADA DA SEÇÃO) */}
            <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-3 py-0.5 mt-0.5">
              <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                O planejamento da reforma combina diferentes motivações, definição dos ambientes e materiais, prazo de compra e atenção a promoções.
              </p>
            </div>
          </div>

          {/* INSTALAÇÃO TAMBÉM PARTICIPA DA DECISÃO (FAIXA HORIZONTAL COMPACTA) */}
          <div className="border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-3.5 sm:p-4 bg-slate-50/60 dark:bg-slate-800/30 flex flex-col gap-2.5">
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                INSTALAÇÃO TAMBÉM PARTICIPA DA DECISÃO
              </span>
            </div>

            <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Em materiais mais técnicos, como hidráulica, a compra pode envolver não apenas a escolha do produto, mas também a forma como ele será instalado. Por isso, serviços associados à instalação passam a fazer parte da avaliação da oferta.
            </p>

            {/* 74% gostariam de instalação | 58% preferem comprar em lojas com instalação */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 py-1 border-y border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-[34px] font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none shrink-0">
                  74%
                </span>
                <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                  gostariam que as lojas oferecessem serviços de instalação.
                </p>
              </div>

              <div className="flex items-center gap-3 sm:border-l border-slate-200 dark:border-slate-700/60 sm:pl-6">
                <span className="text-3xl sm:text-[34px] font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none shrink-0">
                  58%
                </span>
                <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                  preferem comprar em lojas que oferecem serviços de instalação.
                </p>
              </div>
            </div>

            <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A preferência por lojas que oferecem instalação indica que, para parte dos consumidores, a conveniência de resolver produto e serviço no mesmo processo também pode influenciar onde realizar a compra.
            </p>
          </div>

          {/* NOTA METODOLÓGICA */}
          <div className="text-[11.5px] sm:text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-900/40 px-3.5 py-2 rounded-lg border border-slate-200/50 dark:border-slate-800/60">
            <strong>Nota metodológica:</strong> o estudo considera como reforma desde ações simples, como pintar uma parede, até intervenções mais complexas, como trocar pisos ou azulejos. Os dados apresentados fazem parte do estudo proprietário Globo | Casa & Construção 2025.
          </div>

          {/* EVIDÊNCIAS E FONTES */}
          <section id="evidencias-intencao" className="scroll-mt-12 relative pt-3 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-2.5 sm:pb-3">
              <div>
                <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  EVIDÊNCIAS E FONTES
                </h3>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                Evidências factuais rastreáveis com fontes e datas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              <EvidenceCard evidence={EVIDENCIA_INTENCAO} />
            </div>
          </section>

        </section>
      )}

      {/* ================================================== */}
      {/* BLOCO 02 — PESQUISA E COMPARAÇÃO                   */}
      {/* FUNDAÇÃO DE DADOS · 2026 (PRESERVADO INTACTO)      */}
      {/* ================================================== */}
      {subTab === 'pesquisa' && (
        <section className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm flex flex-col gap-4 sm:gap-5">
        
        {/* 2. CABEÇALHO DO BLOCO */}
        <div className="flex flex-col gap-1.5 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-md border border-blue-200/60 dark:border-blue-800/60">
              02 · PESQUISA E COMPARAÇÃO
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
              FUNDAÇÃO DE DADOS · 2026
            </span>
          </div>

          <h2 className="text-base sm:text-[18px] md:text-[19px] font-bold text-slate-900 dark:text-white leading-snug mt-0.5">
            A pesquisa de materiais de construção acontece em múltiplos canais, com a loja física ainda no centro.
          </h2>

          <p className="text-[14px] sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
            Antes da obra ou reforma, o consumidor combina loja física, sites/e-commerces, conteúdo digital e informações dos fabricantes para pesquisar e comparar alternativas.
          </p>
        </div>

        {/* 3. DESTAQUE COMPACTO DE 69,7% */}
        <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 rounded-xl px-4 py-3 sm:py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5">
          {/* Lado Esquerdo */}
          <div className="sm:w-[42%] shrink-0 flex flex-col sm:border-r border-slate-200 dark:border-slate-700/60 sm:pr-5">
            <div className="flex items-baseline gap-2.5">
              <span className="text-3xl sm:text-[34px] font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none">
                69,7%
              </span>
              <span className="text-[13px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                utilizam lojas físicas para pesquisar e comparar materiais de construção.
              </span>
            </div>
            <span className="text-[12px] sm:text-[12.5px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Média 2022–2024: 69,7%
            </span>
          </div>

          {/* Lado Direito */}
          <div className="sm:w-[58%] flex items-center sm:pl-1">
            <p className="text-[13.5px] sm:text-[14px] text-slate-700 dark:text-slate-300 leading-relaxed">
              A loja física mantém a liderança: 69,7% em 2025, exatamente o mesmo nível da média de 2022–2024.
            </p>
          </div>
        </div>

        {/* 4 & 5. PRIMEIRO GRÁFICO: PRINCIPAIS MEIOS UTILIZADOS PARA PESQUISAR E COMPARAR */}
        <div className="flex flex-col gap-2.5 pt-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
            <div>
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-slate-900 dark:text-white">
                Principais meios utilizados para pesquisar e comparar
              </h3>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                Pesquisa 2025 x média histórica 2022–2024
              </p>
            </div>

            {/* Legenda e Média de meios discreta */}
            <div className="flex flex-wrap items-center gap-3 text-[13px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-blue-600 dark:bg-blue-500 inline-block shrink-0"></span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-slate-300 dark:bg-slate-600 inline-block shrink-0"></span>
                <span className="font-medium text-slate-500 dark:text-slate-400">Média 2022–2024</span>
              </div>
              <div className="h-3.5 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
              {/* 6. Média Geral de Meios Discreta */}
              <span className="text-[12.5px] sm:text-[13px] text-slate-500 dark:text-slate-400 font-medium">
                Média de meios consultados: 2,9 em 2025 | 3,8 na média 2022–2024
              </span>
            </div>
          </div>

          {/* Lista Compacta de Barras (sem labels repetidos "2025" e "Média") */}
          <div className="flex flex-col gap-2.5 pt-0.5">
            {topMeiosG1.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-xs">
                <div className="flex items-center justify-between font-normal sm:font-medium text-slate-800 dark:text-slate-200 text-[14px]">
                  <span className="flex items-center gap-2">
                    {item.destaqueFabricante && (
                      <span className="text-[10.5px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded border border-amber-200 dark:border-amber-800">
                        Fabricante
                      </span>
                    )}
                    {item.nome}
                  </span>
                </div>

                {/* Par de Barras Horizontais com Percentuais */}
                <div className="flex flex-col gap-0.5 w-full">
                  {/* Barra 2025 */}
                  <div className="flex items-center gap-2.5 w-full">
                    <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden relative">
                      <div 
                        className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${Math.min(item.val2025, 100)}%` }}
                      ></div>
                    </div>
                    <span className="w-13 text-right font-semibold text-[13px] sm:text-[14px] text-blue-700 dark:text-blue-400 shrink-0">
                      {item.label2025}
                    </span>
                  </div>

                  {/* Barra Média Histórica */}
                  <div className="flex items-center gap-2.5 w-full">
                    <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden relative">
                      <div 
                        className="bg-slate-300 dark:bg-slate-600 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${Math.min(item.valHistorico, 100)}%` }}
                      ></div>
                    </div>
                    <span className="w-13 text-right font-semibold text-[13px] sm:text-[14px] text-slate-600 dark:text-slate-400 shrink-0">
                      {item.labelHistorico}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* 18. Expansão Inline: Ver todos os meios */}
            {showAllMeios && (
              <div className="flex flex-col gap-2.5 pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-800 animate-in fade-in duration-200">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  DEMAIS MEIOS ENTRE OS 10 MAIS CITADOS
                </div>
                {complementaresG1.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1 text-xs">
                    <div className="flex items-center justify-between font-normal sm:font-medium text-slate-700 dark:text-slate-300 text-[14px]">
                      <span>{item.nome}</span>
                    </div>

                    <div className="flex flex-col gap-0.5 w-full">
                      {/* Barra 2025 */}
                      <div className="flex items-center gap-2.5 w-full">
                        <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden relative">
                          {item.val2025 !== null ? (
                            <div 
                              className="bg-blue-600/90 dark:bg-blue-500/90 h-full rounded-full transition-all duration-500" 
                              style={{ width: `${Math.min(item.val2025, 100)}%` }}
                            ></div>
                          ) : (
                            <div className="h-full w-full flex items-center pl-2 text-[11px] text-slate-400">
                              Não listado entre os 10 mais citados em 2025
                            </div>
                          )}
                        </div>
                        <span className="w-13 text-right font-semibold text-[13px] sm:text-[14px] text-blue-700 dark:text-blue-400 shrink-0">
                          {item.label2025}
                        </span>
                      </div>

                      {/* Barra Média Histórica */}
                      <div className="flex items-center gap-2.5 w-full">
                        <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden relative">
                          {item.valHistorico !== null ? (
                            <div 
                              className="bg-slate-300 dark:bg-slate-600 h-full rounded-full transition-all duration-500" 
                              style={{ width: `${Math.min(item.valHistorico, 100)}%` }}
                            ></div>
                          ) : (
                            <div className="h-full w-full flex items-center pl-2 text-[11px] text-slate-400">
                              Não listado na média histórica
                            </div>
                          )}
                        </div>
                        <span className="w-13 text-right font-semibold text-[13px] sm:text-[14px] text-slate-600 dark:text-slate-400 shrink-0">
                          {item.labelHistorico}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Botão de Toggle Ver todos os meios */}
            <div className="pt-0.5">
              <button 
                onClick={() => setShowAllMeios(!showAllMeios)}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-0.5 transition-colors cursor-pointer"
              >
                {showAllMeios ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span>Recolher demais meios</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    <span>Ver todos os meios da pesquisa</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 7. LEITURA APÓS O PRIMEIRO GRÁFICO (FAIXA DISCRETA) */}
          <div className="bg-slate-50/70 dark:bg-slate-800/30 border-l-2 border-blue-500 dark:border-blue-400 px-3 py-2 rounded-r-lg mt-0.5">
            <p className="text-[14px] text-slate-700 dark:text-slate-300 leading-relaxed">
              A loja física permanece como principal referência, enquanto sites/e-commerces, YouTube, sites dos fabricantes e Instagram ampliam os pontos de contato utilizados durante a pesquisa.
            </p>
          </div>
        </div>

        {/* 8, 9, 10, 11. SEGUNDO GRÁFICO: NOVA MATRIZ COMPARATIVA POR CLASSE SOCIAL */}
        <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-1">
            <div>
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-slate-900 dark:text-white">
                Os meios de pesquisa mudam conforme o perfil do consumidor
              </h3>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                Participação dos principais meios por classe social — 2025
              </p>
            </div>
          </div>

          {/* MATRIZ COMPARATIVA ÚNICA */}
          <div className="border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-x-auto bg-white dark:bg-slate-900/40">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 text-xs">
                  <th className="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-300 text-[13px] w-[34%]">
                    MEIO DE PESQUISA
                  </th>
                  {/* 11. Média de meios integrada aos cabeçalhos das classes */}
                  <th className="py-2.5 px-3 text-center w-[22%]">
                    <div className="flex flex-col items-center">
                      <span className="text-[13px] sm:text-[14px] font-semibold text-indigo-700 dark:text-indigo-400 tracking-wide">
                        CLASSE A
                      </span>
                      <span className="text-[12px] sm:text-[12.5px] font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                        4,4 meios em média
                      </span>
                    </div>
                  </th>
                  <th className="py-2.5 px-3 text-center w-[22%]">
                    <div className="flex flex-col items-center">
                      <span className="text-[13px] sm:text-[14px] font-semibold text-blue-700 dark:text-blue-400 tracking-wide">
                        CLASSE B
                      </span>
                      <span className="text-[12px] sm:text-[12.5px] font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                        3,2 meios em média
                      </span>
                    </div>
                  </th>
                  <th className="py-2.5 px-3 text-center w-[22%]">
                    <div className="flex flex-col items-center">
                      <span className="text-[13px] sm:text-[14px] font-semibold text-sky-700 dark:text-sky-400 tracking-wide">
                        CLASSE C
                      </span>
                      <span className="text-[12px] sm:text-[12.5px] font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                        2,6 meios em média
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {matrizClasses.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    {/* Meio de Pesquisa */}
                    <td className="py-2.5 px-3.5 font-normal sm:font-medium text-slate-800 dark:text-slate-200 text-[14px]">
                      {item.nome}
                    </td>

                    {/* Classe A */}
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full" 
                            style={{ width: `${Math.min(item.classeA, 100)}%` }}
                          ></div>
                        </div>
                        <span className="w-13 text-right font-semibold text-[13px] sm:text-[14px] text-indigo-700 dark:text-indigo-400 shrink-0">
                          {item.classeA.toFixed(1).replace('.', ',')}%
                        </span>
                      </div>
                    </td>

                    {/* Classe B */}
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="bg-blue-600 dark:bg-blue-400 h-full rounded-full" 
                            style={{ width: `${Math.min(item.classeB, 100)}%` }}
                          ></div>
                        </div>
                        <span className="w-13 text-right font-semibold text-[13px] sm:text-[14px] text-blue-700 dark:text-blue-400 shrink-0">
                          {item.classeB.toFixed(1).replace('.', ',')}%
                        </span>
                      </div>
                    </td>

                    {/* Classe C */}
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="bg-sky-500 dark:bg-sky-400 h-full rounded-full" 
                            style={{ width: `${Math.min(item.classeC, 100)}%` }}
                          ></div>
                        </div>
                        <span className="w-13 text-right font-semibold text-[13px] sm:text-[14px] text-sky-700 dark:text-sky-400 shrink-0">
                          {item.classeC.toFixed(1).replace('.', ',')}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 12. UMA ÚNICA LEITURA EXECUTIVA DA MATRIZ */}
          <div className="bg-slate-50/70 dark:bg-slate-800/30 border-l-2 border-slate-400 dark:border-slate-500 px-3 py-2 rounded-r-lg">
            <p className="text-[14px] text-slate-700 dark:text-slate-300 leading-relaxed">
              A loja física lidera nas três classes, enquanto sites/e-commerces, sites dos fabricantes e outros meios digitais apresentam maior participação entre consumidores da classe A.
            </p>
          </div>

          {/* 13. FAIXA: O FABRICANTE COMO FONTE DE INFORMAÇÃO */}
          <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/50 rounded-xl px-3.5 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex flex-col gap-0.5">
              <span className="text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                O FABRICANTE COMO FONTE DE INFORMAÇÃO
              </span>
              <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-800 dark:text-slate-200 leading-snug">
                Site do fabricante na pesquisa: <span className="font-semibold text-slate-900 dark:text-white">Classe A 40,4%</span> · <span className="font-semibold text-slate-900 dark:text-white">Classe B 30,5%</span> · <span className="font-semibold text-slate-900 dark:text-white">Classe C 19,9%</span>.
              </p>
            </div>
            <p className="text-[13.5px] sm:text-[14px] text-slate-700 dark:text-slate-300 leading-relaxed sm:text-right">
              O site do fabricante aparece entre os meios utilizados para pesquisa e comparação, com maior presença na classe A.
            </p>
          </div>
        </div>

        {/* 17. NOTA METODOLÓGICA */}
        <div className="text-[11.5px] sm:text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-900/40 px-3.5 py-2 rounded-lg border border-slate-200/50 dark:border-slate-800/60">
          <strong>Nota:</strong> a pesquisa considera materiais de construção de maneira geral durante o período de planejamento da obra/reforma. A própria Fundação de Dados ressalta que os resultados podem variar quando analisados produtos específicos.
        </div>

        {/* EVIDÊNCIAS E FONTES */}
        <section id="evidencias-pesquisa" className="scroll-mt-12 relative pt-3 border-t border-slate-200/80 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-2.5 sm:pb-3">
            <div>
              <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                EVIDÊNCIAS E FONTES
              </h3>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
              Evidências factuais rastreáveis com fontes e datas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            <EvidenceCard evidence={EVIDENCIA_PESQUISA} />
          </div>
        </section>

      </section>
      )}

      {/* ================================================== */}
      {/* BLOCO 03 — CONFIANÇA E DECISÃO                     */}
      {/* OPINION BOX + OCTADESK · CX TRENDS 2026            */}
      {/* ================================================== */}
      {subTab === 'confianca' && (
        <section className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm flex flex-col gap-4 sm:gap-5 animate-in fade-in duration-300">
          
          {/* CABEÇALHO DO BLOCO */}
          <div className="flex flex-col gap-1.5 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-0.5 rounded-md border border-indigo-200/60 dark:border-indigo-800/60">
                03 · CONFIANÇA E DECISÃO
              </span>
              <span className="text-[11.5px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
                OPINION BOX + OCTADESK · CX TRENDS 2026
              </span>
            </div>

            <h2 className="text-[18px] sm:text-[19px] md:text-[20px] font-bold text-slate-900 dark:text-white leading-snug mt-0.5">
              Qualidade, preço, frete, confiança e experiência ajudam a definir a escolha final.
            </h2>

            <p className="text-[14.5px] sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
              Depois de pesquisar e comparar alternativas, o consumidor ainda avalia qualidade, preço, custos associados, confiança e experiências anteriores. Esses fatores podem confirmar a escolha, desempatar ofertas semelhantes ou interromper a compra.
            </p>
          </div>

          {/* SEÇÃO 01: PRINCIPAIS CRITÉRIOS NA ESCOLHA */}
          <div className="border border-slate-200/70 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 bg-slate-50/40 dark:bg-slate-800/20 flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                PRINCIPAIS CRITÉRIOS NA ESCOLHA
              </span>
              <p className="text-[13.5px] sm:text-[14px] text-slate-500 dark:text-slate-400">
                Critérios mais citados como principal fator na decisão de onde e o que comprar
              </p>
            </div>

            {/* ESCALA VISUAL APROPRIADA: 0% A 25% COM GUIA SUPERIOR */}
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex items-center gap-3 text-[11px] sm:text-[11.5px] text-slate-400 dark:text-slate-500">
                <span className="w-44 sm:w-52 shrink-0"></span>
                <div className="flex-1 flex justify-between px-0.5 font-mono">
                  <span>0%</span>
                  <span>10%</span>
                  <span>20%</span>
                  <span>25%</span>
                </div>
                <span className="w-10 shrink-0"></span>
              </div>

              {[
                { nome: 'Qualidade do produto', val: 22, destaque: true },
                { nome: 'Preço baixo', val: getVal('jornada-compra::confianca::criterio-preco')!, destaque: true },
                { nome: 'Frete grátis', val: getVal('jornada-compra::confianca::criterio-frete-gratis')!, destaque: false },
                { nome: 'Confiança na marca', val: getVal('jornada-compra::confianca::criterio-confianca-marca')!, destaque: false },
                { nome: 'Descontos', val: getVal('jornada-compra::confianca::criterio-descontos')!, destaque: false },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[13.5px] sm:text-[14px]">
                  <span className="w-44 sm:w-52 shrink-0 font-medium text-slate-800 dark:text-slate-200">
                    {item.nome}
                  </span>
                  <div className="flex-1 bg-slate-200/70 dark:bg-slate-700/60 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        item.destaque 
                          ? 'bg-indigo-600 dark:bg-indigo-500' 
                          : 'bg-slate-400 dark:bg-slate-500'
                      }`}
                      style={{ width: `${(item.val / 25) * 100}%` }}
                    />
                  </div>
                  <span className={`w-10 text-right font-semibold shrink-0 ${
                    item.destaque ? 'text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'
                  }`}>
                    {item.val}%
                  </span>
                </div>
              ))}
            </div>

            {/* LEITURA ESCOLHA */}
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
              <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Qualidade é o critério mais citado como principal na decisão (22%), seguida por preço baixo (19%). Frete grátis, confiança na marca e descontos também aparecem entre os principais fatores.
              </p>
            </div>
          </div>

          {/* SEÇÃO 02: QUANDO O PREÇO É O MESMO (DESEMPATE) */}
          <div className="border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-3.5 sm:p-4 bg-slate-50/60 dark:bg-slate-800/30 flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                QUANDO O PREÇO É O MESMO
              </span>
              <p className="text-[13.5px] sm:text-[14px] text-slate-500 dark:text-slate-400">
                Principais fatores considerados para desempatar duas ofertas de mesmo preço
              </p>
            </div>

            {/* COMPOSIÇÃO HORIZONTAL COMPACTA COM 2 INDICADORES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 py-1 border-y border-slate-200/60 dark:border-slate-700/60">
              {/* Lado Esquerdo: Valor do frete */}
              <div className="flex flex-col gap-1.5 justify-center">
                <div className="flex items-center gap-3">
                  <span className="text-[28px] sm:text-[32px] font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight leading-none shrink-0">
                    61%
                  </span>
                  <p className="text-[13.5px] sm:text-[14px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    VALOR DO FRETE
                  </p>
                </div>
                <div className="w-full bg-slate-200/70 dark:bg-slate-700/60 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full" style={{ width: '61%' }} />
                </div>
              </div>

              {/* Lado Direito: Experiência anterior */}
              <div className="flex flex-col gap-1.5 justify-center sm:border-l border-slate-200 dark:border-slate-700/60 sm:pl-6">
                <div className="flex items-center gap-3">
                  <span className="text-[28px] sm:text-[32px] font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight leading-none shrink-0">
                    54%
                  </span>
                  <p className="text-[13.5px] sm:text-[14px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    EXPERIÊNCIA ANTERIOR COM A EMPRESA
                  </p>
                </div>
                <div className="w-full bg-slate-200/70 dark:bg-slate-700/60 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-indigo-500/80 dark:bg-indigo-400/80 h-full rounded-full" style={{ width: '54%' }} />
                </div>
              </div>
            </div>

            {/* LEITURA DESEMPATE */}
            <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Quando o preço deixa de diferenciar as alternativas, o custo do frete e a experiência já vivida com a empresa ganham peso no desempate.
            </p>
          </div>

          {/* SEÇÃO 03: O QUE INTERROMPE A COMPRA (DESTAQUE VISUAL PRINCIPAL) */}
          <div className="border-2 border-indigo-500/30 dark:border-indigo-400/30 bg-indigo-50/20 dark:bg-indigo-950/10 rounded-xl p-4 sm:p-5 flex flex-col gap-3.5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-indigo-100 dark:border-indigo-900/40 pb-2.5">
              <div>
                <span className="text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  O QUE INTERROMPE A COMPRA
                </span>
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-400 mt-0.5">
                  Fatores que podem fazer o consumidor abandonar uma alternativa já considerada
                </p>
              </div>
            </div>

            {/* GRÁFICO DE BARRAS HORIZONTAIS */}
            <div className="flex flex-col gap-3 pt-1">
              {[
                { label: 'Frete alto', val: 65, destaque: true, nota: null },
                { label: 'Falta de confiança na empresa', val: 56, destaque: true, nota: 'A falta de confiança pode surgir diante de informações pouco claras, percepção de insegurança ou medo de golpe.' },
                { label: 'Avaliações negativas da empresa', val: 39, destaque: false, nota: null },
                { label: 'Avaliações negativas do produto', val: 39, destaque: false, nota: null },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[13.5px] sm:text-[14px]">
                    <span className={`w-full sm:w-64 md:w-72 shrink-0 ${item.destaque ? 'font-semibold text-slate-900 dark:text-white' : 'font-medium text-slate-700 dark:text-slate-300'}`}>
                      {item.label}
                    </span>
                    <div className="w-full sm:flex-1 flex items-center gap-3">
                      <div className="flex-1 bg-slate-200/80 dark:bg-slate-700/60 rounded-full h-3.5 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all ${
                            item.destaque 
                              ? 'bg-indigo-600 dark:bg-indigo-500' 
                              : 'bg-slate-400 dark:bg-slate-500'
                          }`}
                          style={{ width: `${item.val}%` }}
                        />
                      </div>
                      <span className={`w-11 text-right font-semibold shrink-0 ${
                        item.destaque ? 'text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'
                      }`}>
                        {item.val}%
                      </span>
                    </div>
                  </div>
                  {item.nota && (
                    <p className="text-[12px] sm:text-[12.5px] text-slate-500 dark:text-slate-400 pl-1 sm:pl-2 font-normal leading-relaxed">
                      {item.nota}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* LEITURA ESTRATÉGICA INTERRUPÇÃO */}
            <div className="border-l-2 border-indigo-600 dark:border-indigo-400 pl-3 py-1 bg-white/60 dark:bg-slate-900/40 rounded-r-lg mt-1">
              <p className="text-[14px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Encontrar uma alternativa adequada não garante a compra. Custos adicionais, falta de confiança e avaliações negativas podem interromper a decisão mesmo quando o consumidor já avançou na escolha.
              </p>
            </div>
          </div>

          {/* SEÇÃO 04: A EXPERIÊNCIA ALIMENTA A PRÓXIMA DECISÃO */}
          <div className="border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-3.5 sm:p-4 bg-slate-50/60 dark:bg-slate-800/30 flex flex-col gap-3.5">
            <div className="flex flex-col gap-1">
              <span className="text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                A EXPERIÊNCIA ALIMENTA A PRÓXIMA DECISÃO
              </span>
              <p className="text-[14.5px] sm:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                A experiência não termina no consumidor que realizou a compra. Boas experiências podem reforçar a preferência pela marca, enquanto experiências ruins podem ser compartilhadas e influenciar decisões futuras de outras pessoas.
              </p>
            </div>

            {/* PRIMEIRO MOVIMENTO — BOA EXPERIÊNCIA → PREFERÊNCIA FUTURA (COMPACTO) */}
            <div className="border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/40 rounded-lg p-2.5 sm:p-3 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[26px] sm:text-[28px] font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight leading-none">
                  60%
                </span>
                <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 hidden sm:block" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  BOA EXPERIÊNCIA → PREFERÊNCIA FUTURA
                </span>
                <p className="text-[13.5px] sm:text-[14px] text-slate-700 dark:text-slate-300 font-medium">
                  dão preferência a comprar de marcas que oferecem boas experiências.
                </p>
              </div>
            </div>

            {/* SEGUNDO MOVIMENTO — QUANDO A EXPERIÊNCIA RUIM SE PROPAGA */}
            <div className="flex flex-col gap-2 pt-0.5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  QUANDO A EXPERIÊNCIA RUIM SE PROPAGA
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-slate-500 dark:text-slate-400">
                  Uma experiência negativa pode ultrapassar a relação entre consumidor e marca e passar a influenciar outras decisões.
                </p>
              </div>

              {/* GRÁFICO COMPACTO COM TRÊS BARRAS HORIZONTAIS: UMA LINHA DE LABEL + BARRA + % */}
              <div className="flex flex-col gap-2 pt-1">
                {[
                  { 
                    label: 'Criticam a marca após uma experiência ruim', 
                    val: 63 
                  },
                  { 
                    label: 'Podem deixar de consumir após relato negativo de pessoa próxima', 
                    val: 49 
                  },
                  { 
                    label: 'Evitam comprar ao ver reclamações nas redes sociais', 
                    val: 70 
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-[13.5px] sm:text-[14px]">
                    <span className="w-full sm:w-[440px] md:w-[470px] shrink-0 font-medium text-slate-800 dark:text-slate-200">
                      {item.label}
                    </span>
                    <div className="w-full sm:flex-1 flex items-center gap-3">
                      <div className="flex-1 bg-slate-200/70 dark:bg-slate-700/60 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-slate-600 dark:bg-slate-400 transition-all"
                          style={{ width: `${item.val}%` }}
                        />
                      </div>
                      <span className="w-10 text-right font-semibold shrink-0 text-slate-700 dark:text-slate-300">
                        {item.val}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* NOTA METODOLÓGICA DA SUBSEÇÃO */}
              <p className="text-[12px] sm:text-[12.5px] text-slate-500 dark:text-slate-400 italic pt-0.5">
                Percentuais correspondem à soma de “concordo” e “concordo totalmente” em cada afirmação.
              </p>

              {/* CONCLUSÃO DA EXPERIÊNCIA NEGATIVA (ÚNICA) */}
              <div className="border-l-2 border-slate-400 dark:border-slate-500 pl-2.5 py-1 mt-1">
                <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  Experiências ruins podem ultrapassar a relação entre consumidor e marca: quando compartilhadas, podem afetar a percepção e a decisão de compra de outras pessoas.
                </p>
              </div>
            </div>
          </div>

          {/* SÍNTESE FINAL DO BLOCO 03 (ÚNICA) */}
          <div className="bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/70 rounded-xl px-4 py-3">
            <p className="text-[14px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Qualidade, preço, confiança e experiência ajudam a confirmar a escolha, enquanto custos adicionais, desconfiança e avaliações negativas podem interrompê-la. A experiência vivida depois da compra passa então a influenciar novas jornadas.
            </p>
          </div>

          {/* NOTA METODOLÓGICA */}
          <div className="text-[12px] sm:text-[12.5px] text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-900/40 px-3.5 py-2 rounded-lg border border-slate-200/50 dark:border-slate-800/60">
            <strong>Nota metodológica:</strong> o CX Trends 2026, realizado pelo Opinion Box em parceria com a Octadesk, está em sua 11ª edição e reúne respostas de mais de 2 mil pessoas de diferentes regiões e classes sociais do Brasil. Os indicadores apresentados correspondem a perguntas e cenários distintos e devem ser interpretados conforme o contexto indicado em cada visualização; percentuais provenientes de perguntas diferentes não devem ser somados entre si.
          </div>

          {/* EVIDÊNCIAS E FONTES */}
          <section id="evidencias-confianca" className="scroll-mt-12 relative pt-3 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-2.5 sm:pb-3">
              <div>
                <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  EVIDÊNCIAS E FONTES
                </h3>
              </div>
              <span className="text-[11.5px] sm:text-xs text-slate-500 dark:text-slate-400">
                Evidências factuais rastreáveis com fontes e datas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              <EvidenceCard evidence={EVIDENCIA_CONFIANCA} />
            </div>
          </section>

        </section>
      )}

    </div>
  );
}
