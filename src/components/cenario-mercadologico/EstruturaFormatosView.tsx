import React from 'react';
import { Building2, ChevronRight, BookOpen, ArrowRight, ArrowDown } from 'lucide-react';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';

interface EstruturaFormatosViewProps {
  setActivePage?: (page: string) => void;
  hideHeader?: boolean;
}

const EVIDENCIA_PRINCIPAL_BLOCO_01: Evidence = {
  id: 'ev-fundacao-dados-pulverizacao',
  tag: 'Fonte Principal · PAC 2024',
  source: 'Fundação de Dados',
  dateStr: '02/09/2026',
  title: 'Estrutura, capilaridade e pulverização do varejo de materiais de construção',
  headline: 'Varejo de materiais de construção permanece como o mais pulverizado do Brasil',
  summary: 'Com base na PAC/IBGE 2024, a Fundação de Dados identifica 181,9 mil unidades locais de materiais de construção, equivalentes a 13,7% das unidades consideradas. O setor ocupa a 1ª posição em número de unidades, a 4ª em sell-out e a 6ª em receita média por unidade. A fonte associa essa combinação, juntamente com a atuação dos atacadistas, à elevada pulverização e capilaridade do varejo de materiais de construção.',
  isPdf: false,
  url: 'https://fundacaodedados.com.br/2026/09/02/varejo-de-materiais-de-construcao-permanece-como-o-mais-pulverizado-do-brasil/',
  actionLabel: 'ACESSAR FONTE ↗'
};

const EVIDENCIAS_COMPLEMENTARES_BLOCO_01: Evidence[] = [
  {
    id: 'ev-fundacao-dados-atacado-sellout',
    tag: 'Evidência Complementar · PAC 2023',
    source: 'Fundação de Dados',
    dateStr: '22/10/2025',
    title: 'Participação estimada do atacado no abastecimento do varejo de materiais de construção',
    headline: 'Atacado de materiais de construção responde pela maior parte do sell-out do segmento',
    summary: 'A Fundação de Dados estima que aproximadamente 54% do sell-out varejista de materiais de construção teria origem em mercadorias distribuídas pelo atacado. O cálculo utiliza dados da PAC 2023 e uma premissa de margem, portanto deve ser interpretado como estimativa e não como percentual diretamente observado pelo IBGE.',
    isPdf: false,
    url: 'https://fundacaodedados.com.br/2025/10/22/atacado-de-materiais-de-construcao-responde-pela-maior-parte-do-sell-out-do-segmento/',
    actionLabel: 'ACESSAR FONTE ↗'
  },
  {
    id: 'ev-fundacao-dados-razao-varejistas-atacadista',
    tag: 'Evidência Complementar · PAC 2023',
    source: 'Fundação de Dados',
    dateStr: '29/10/2025',
    title: 'Relação entre empresas atacadistas e varejistas no setor',
    headline: 'Para cada atacadista, há 10,3 varejistas de materiais de construção',
    summary: 'Com base na PAC 2023, a Fundação identifica 162.351 empresas varejistas de materiais de construção e 15.799 empresas atacadistas relacionadas ao setor, relação equivalente a aproximadamente 10,3 varejistas por atacadista. A análise é utilizada como evidência da concorrência e das alternativas de fornecimento existentes no canal.',
    isPdf: false,
    url: 'https://fundacaodedados.com.br/2025/10/29/para-cada-atacadista-ha-103-varejistas-de-materiais-de-construcao/',
    actionLabel: 'ACESSAR FONTE ↗'
  },
  {
    id: 'ev-fundacao-dados-expansao-atacadistas',
    tag: 'Evidência Complementar · PAC 2023',
    source: 'Fundação de Dados',
    dateStr: '05/11/2025',
    title: 'Expansão e concorrência no atacado de materiais de construção',
    headline: 'Atacadistas de materiais de construção faturaram, em média, R$ 680.333,00 por mês',
    summary: 'Entre 2022 e 2023, o número de empresas atacadistas relacionadas a materiais de construção passou de 13.445 para 15.799, crescimento de 17,5%. A Fundação interpreta esse movimento como aumento da concorrência no atacado e como fator relevante para compreender a estrutura de abastecimento do varejo.',
    isPdf: false,
    url: 'https://fundacaodedados.com.br/2025/11/05/atacadistas-de-materiais-de-construcao-faturaram-em-media-r-680-33300-por-mes/',
    actionLabel: 'ACESSAR FONTE ↗'
  }
];

const EVIDENCIA_PRINCIPAL_BLOCO_02: Evidence = {
  id: 'ev-anamaco-estudo-cenario-2025',
  tag: 'Fonte Principal · Bloco 02 (Anamaco 2025)',
  source: 'Instituto de Pesquisas Anamaco',
  dateStr: '2025',
  title: 'Distribuição regional, evolução da rede e perfil dos estabelecimentos do varejo de materiais de construção',
  headline: 'Estudo do Instituto de Pesquisas Anamaco revela cenário do varejo de material de construção no Brasil',
  summary: 'O estudo mostra que o Sudeste ainda concentra 45,7% das lojas de materiais de construção em 2025, mas perdeu participação em relação a 2006. Nordeste, Norte e Centro-Oeste ampliaram sua representatividade no período, indicando uma composição regional mais distribuída. O levantamento também mostra a predominância de pequenos estabelecimentos, com 69,5% das lojas possuindo até quatro funcionários.',
  isPdf: false,
  url: 'https://anamaco.com.br/post/estudo-cenario-varejo-material-construcao-brasil/',
  actionLabel: 'ACESSAR FONTE ↗'
};

const EVIDENCIA_COMPLEMENTAR_BLOCO_02: Evidence = {
  id: 'ev-anamaco-pequenos-negocios-2025',
  tag: 'Evidência Complementar · Bloco 02 (Anamaco 2025)',
  source: 'Anamaco',
  dateStr: '2025',
  title: 'Pequenos negócios e presença local no varejo de materiais de construção',
  headline: 'A dimensão do varejo de material de construção e o papel dos pequenos negócios',
  summary: 'A análise reforça o papel dos pequenos negócios na estrutura do varejo de materiais de construção, destacando a presença de empresas familiares, o vínculo com as comunidades e a ampla presença local dessas operações.',
  isPdf: false,
  url: 'https://anamaco.com.br/post/dimensao-varejo-material-construcao-pequenos-negocios-2025-anamaco/',
  actionLabel: 'ACESSAR FONTE ↗'
};

const TOP_5_AGRUPAMENTOS = [
  { rank: '1º', nome: 'Materiais de construção', unidades: '181.881', share: '(13,7%)', width: '100%', color: 'indigo' },
  { rank: '2º', nome: 'Alimentos, bebidas e fumo', unidades: '178.207', share: '(13,4%)', width: '98%', color: 'slate' },
  { rank: '3º', nome: 'Artigos farmacêuticos, médicos e perfumaria', unidades: '125.000', share: '(9,4%)', width: '68%', color: 'slate' },
  { rank: '4º', nome: 'Móveis e eletrodomésticos', unidades: '110.000', share: '(8,3%)', width: '60%', color: 'slate' },
  { rank: '5º', nome: 'Tecidos, vestuário e calçados', unidades: '105.000', share: '(7,9%)', width: '57%', color: 'slate' },
];

const RECEITA_MEDIA_RANKING = [
  {
    pos: '1º',
    name: 'Hipermercados e supermercados',
    fullName: 'Hipermercados e supermercados (R$ 29.578.725,52)',
    value: 'R$ 29,58 mi/ano',
    pct: 100,
    highlight: false,
  },
  {
    pos: '2º',
    name: 'Combustíveis e lubrificantes',
    fullName: 'Combustíveis e lubrificantes (R$ 12.353.716,41)',
    value: 'R$ 12,35 mi/ano',
    pct: 41.8,
    highlight: false,
  },
  {
    pos: '3º',
    name: 'Lojas de departamento / varejo online',
    fullName: 'Lojas de departamento e comércio não especializado via internet (R$ 8.011.374,92)',
    value: 'R$ 8,01 mi/ano',
    pct: 27.1,
    highlight: false,
  },
  {
    pos: '4º',
    name: 'Eletrodomésticos e eletrônicos',
    fullName: 'Eletrodomésticos, equipamentos de áudio e vídeo e similares (R$ 5.963.570,91)',
    value: 'R$ 5,96 mi/ano',
    pct: 20.2,
    highlight: false,
  },
  {
    pos: '5º',
    name: 'Farmacêuticos e perfumaria',
    fullName: 'Farmacêuticos, perfumaria e artigos médicos (R$ 2.006.763,16)',
    value: 'R$ 2,01 mi/ano',
    pct: 6.8,
    highlight: false,
  },
  {
    pos: '6º',
    name: 'Materiais de construção',
    fullName: 'Materiais de construção (R$ 1.742.348,12)',
    value: 'R$ 1,74 mi/ano',
    pct: 5.9,
    highlight: true,
  },
];

export function EstruturaFormatosView({ setActivePage, hideHeader }: EstruturaFormatosViewProps) {
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in duration-300">
      
      {/* WRAPPER CABEÇALHO + BLOCO 01 PARA CONTROLE DE ESPAÇAMENTO */}
      <div className="flex flex-col gap-3.5 sm:gap-4">
        
        {/* CABEÇALHO */}
        {!hideHeader ? (
          <div className="flex flex-col gap-3.5 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-2.5 sm:pb-3">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <button onClick={() => setActivePage?.('Home')} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-b-[3px] border-b-slate-300 dark:border-b-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium text-xs sm:text-sm active:border-b-[1px] active:translate-y-[2px] shrink-0 cursor-pointer">Home</button>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-slate-500 dark:text-slate-400 shrink-0">Cenário Mercadológico</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[#0c162c] dark:text-white font-bold shrink-0">Estrutura e Formatos</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1.5 leading-tight">
                  Estrutura e Formatos do Varejo
                </h1>
                <p className="text-sm sm:text-[16px] text-slate-600 dark:text-slate-400">
                  Como o varejo de materiais de construção está organizado, distribuído e estruturado no Brasil.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="border-b border-slate-200 dark:border-slate-800 pb-2.5 sm:pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1.5">
              Estrutura e Formatos do Varejo
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
              Como o varejo de materiais de construção está organizado, distribuído e estruturado no Brasil.
            </p>
          </div>
        )}

        {/* BLOCO 01 · UM VAREJO ALTAMENTE PULVERIZADO */}
        <section className="flex flex-col">
          
          {/* CABEÇALHO DO BLOCO */}
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-0.5 sm:pt-1 mb-1.5 sm:mb-2">
              <h2 className="text-[18px] sm:text-[19px] font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span className="text-indigo-600 dark:text-indigo-400">01 ·</span>
                UM VAREJO ALTAMENTE PULVERIZADO
              </h2>
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 dark:bg-slate-800/60 rounded-md shrink-0 w-fit">
                <span className="text-[11.5px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  FUNDAÇÃO DE DADOS · PAC/IBGE 2024
                </span>
              </div>
            </div>
            <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 dark:text-white leading-tight">
              Materiais de construção lidera o varejo brasileiro em número de unidades locais.
            </h3>
            <p className="text-[14px] sm:text-[15px] text-slate-600 dark:text-slate-400 leading-[1.45] w-full max-w-none md:max-w-[1100px] mt-1.5">
              São 181,9 mil unidades locais, equivalentes a 13,7% do varejo analisado pela PAC/IBGE, o que coloca o setor na 1ª posição entre 16 agrupamentos.
            </p>
          </div>

        {/* CONTAINER PRINCIPAL */}
        <div className="flex flex-col gap-2 sm:gap-2.5 mt-2.5 sm:mt-3">
          
          {/* LINHA 1: CARDS EXECUTIVOS LADO A LADO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
            
            {/* CARD ESQUERDO: DIMENSÃO DA REDE */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 shadow-sm flex flex-col">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 sm:mb-3">
                DIMENSÃO E CAPILARIDADE DA REDE
              </h4>
              
              <div className="grid grid-cols-3 gap-2 items-start border-l-2 border-indigo-500 pl-3 sm:pl-4 mb-2.5 sm:mb-3">
                <div className="flex flex-col">
                  <span className="text-[28px] sm:text-[32px] font-black text-slate-900 dark:text-white leading-none tracking-tight">
                    181,9<span className="text-[20px] sm:text-[22px] font-bold"> mil</span>
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-snug mt-1">
                    unidades locais do varejo de materiais de construção*
                  </span>
                </div>
                <div className="flex flex-col border-l border-slate-200 dark:border-slate-700 pl-2 sm:pl-3">
                  <span className="text-[28px] sm:text-[32px] font-black text-slate-800 dark:text-slate-100 leading-none tracking-tight">
                    13,7%
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-snug mt-1">
                    das unidades locais do varejo brasileiro*
                  </span>
                </div>
                <div className="flex flex-col border-l border-slate-200 dark:border-slate-700 pl-2 sm:pl-3">
                  <span className="text-[28px] sm:text-[32px] font-black text-slate-800 dark:text-slate-100 leading-none tracking-tight">
                    1º <span className="text-[20px] sm:text-[22px] font-bold text-slate-500">de 16</span>
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-medium text-slate-500 dark:text-slate-400 leading-snug mt-1">
                    agrupamentos em número de unidades locais*
                  </span>
                </div>
              </div>

              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-2.5 mt-0">
                Materiais de construção possui a maior rede de unidades locais entre os agrupamentos analisados pela PAC. Essa quantidade de pontos de venda evidencia elevada capilaridade da rede varejista.
              </p>
            </div>

            {/* CARD DIREITO: ESCALA ECONÔMICA X DISPERSÃO */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 shadow-sm flex flex-col">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
                ESCALA ECONÔMICA X DISPERSÃO DA REDE
              </h4>
              <p className="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 leading-snug mb-2 sm:mb-2.5">
                O setor está entre os maiores do varejo em vendas, mas sua posição muda quando a análise passa do volume total para o desempenho médio de cada estabelecimento.
              </p>

              <div className="flex items-center justify-between gap-1.5 sm:gap-2.5 bg-slate-50 dark:bg-slate-800/50 p-2.5 sm:p-3 rounded-lg border border-slate-100 dark:border-slate-700/50 mb-2 sm:mb-2.5">
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <span className="text-[17px] sm:text-[20px] font-black text-slate-800 dark:text-slate-100 leading-none tracking-tight">
                    R$ 316,9 bi
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-slate-600 dark:text-slate-400 uppercase leading-tight mt-1">
                    4º EM VENDAS TOTAIS
                  </span>
                </div>
                
                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />

                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <span className="text-[17px] sm:text-[20px] font-black text-indigo-600 dark:text-indigo-400 leading-none tracking-tight">
                    181,9 mil
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-indigo-600 dark:text-indigo-400 uppercase leading-tight mt-1">
                    1º EM UNIDADES LOCAIS
                  </span>
                </div>
                
                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />

                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <span className="text-[17px] sm:text-[20px] font-black text-slate-800 dark:text-slate-100 leading-none tracking-tight">
                    R$ 1,74 mi/ano
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-slate-600 dark:text-slate-400 uppercase leading-tight mt-1">
                    6º EM RECEITA MÉDIA POR ESTABELECIMENTO
                  </span>
                </div>
              </div>

              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-2 sm:pt-2.5 mt-0">
                Materiais de construção ocupa a 4ª posição em vendas totais e a 1ª em número de unidades locais. Quando o faturamento é dividido pela quantidade de estabelecimentos, o setor cai para a 6ª posição em receita média por unidade. Essa diferença mostra que a atividade econômica do setor está distribuída por uma base muito ampla de pontos de venda.
              </p>
            </div>
          </div>

          {/* LINHA 2: GRÁFICOS LADO A LADO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
            
            {/* GRÁFICO ESQUERDO: TOP 5 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 shadow-sm flex flex-col">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 sm:mb-3">
                TOP 5 EM NÚMERO DE UNIDADES LOCAIS
              </h4>
              
              <div className="flex flex-col gap-2">
                {TOP_5_AGRUPAMENTOS.map((item, index) => {
                  const isLeader = item.rank === '1º';
                  return (
                    <div key={index} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-baseline gap-2 text-[13.5px] sm:text-[14px]">
                        <span className={`min-w-0 ${isLeader ? 'font-bold text-indigo-700 dark:text-indigo-400' : 'font-medium text-slate-700 dark:text-slate-300'}`}>
                          <span className="tabular-nums mr-1 font-bold">{item.rank}</span> {item.nome}
                        </span>
                        <div className="text-right tabular-nums shrink-0 whitespace-nowrap ml-2">
                          <span className={isLeader ? 'font-bold text-indigo-700 dark:text-indigo-400 text-[13.5px] sm:text-[14px]' : 'font-semibold text-slate-700 dark:text-slate-300 text-[13.5px] sm:text-[14px]'}>
                            {item.unidades}
                          </span>
                          <span className={`text-[12.5px] sm:text-[13px] ml-1.5 ${isLeader ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`}>
                            {item.share}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-[6px] overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            isLeader ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-slate-400 dark:bg-slate-500'
                          }`}
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed pt-2.5 mt-2.5 sm:mt-3 border-t border-slate-100 dark:border-slate-800">
                A liderança em unidades locais ocorre por margem pequena sobre o segundo colocado, mas com distância maior para os demais agrupamentos.
              </p>
            </div>

            {/* GRÁFICO DIREITO: RECEITA MÉDIA */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 shadow-sm flex flex-col">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                RECEITA MÉDIA POR ESTABELECIMENTO
              </h4>
              
              <div className="flex flex-col gap-1.5 sm:gap-2">
                {RECEITA_MEDIA_RANKING.map((item) => (
                  <div key={item.pos} className="flex flex-col gap-1.5" title={item.fullName}>
                    <div className="flex justify-between items-baseline gap-2 text-[13.5px] sm:text-[14px]">
                      <span className={`min-w-0 ${item.highlight ? 'font-bold text-indigo-700 dark:text-indigo-400' : 'font-medium text-slate-700 dark:text-slate-300'}`}>
                        <span className="tabular-nums mr-1 font-bold">{item.pos}</span> {item.name}
                      </span>
                      <div className="text-right tabular-nums shrink-0 whitespace-nowrap ml-2">
                        <span className={item.highlight ? 'font-bold text-indigo-700 dark:text-indigo-400 text-[13.5px] sm:text-[14px]' : 'font-semibold text-slate-700 dark:text-slate-300 text-[13.5px] sm:text-[14px]'}>
                          {item.value}
                        </span>
                      </div>
                    </div>
                    <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-full h-[6px] overflow-hidden">
                      {/* Marcador vertical da Média do Varejo (8.89%) */}
                      <div
                        className="absolute top-0 bottom-0 w-[2px] bg-slate-400 dark:bg-slate-500 z-10 pointer-events-none"
                        style={{ left: '8.89%' }}
                      />
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          item.highlight ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-slate-400 dark:bg-slate-500'
                        }`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}

                {/* Referência da Média Geral */}
                <div className="flex items-center justify-between text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 mt-1.5 sm:mt-2">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-2.5 h-[6px] bg-slate-400 dark:bg-slate-500 shrink-0"></span>
                    <span className="font-medium">Média do comércio varejista (referência):</span>
                  </span>
                  <span className="font-bold text-slate-600 dark:text-slate-300 tabular-nums">
                    R$ 2,63 mi/ano
                  </span>
                </div>
              </div>

              <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed pt-2 sm:pt-2.5 mt-2 sm:mt-2.5 border-t border-slate-100 dark:border-slate-800">
                Com receita média de R$ 1,74 milhão por estabelecimento ao ano, materiais de construção fica abaixo da média de R$ 2,63 milhões do varejo analisado.
              </p>
            </div>
          </div>

          {/* LINHA 3: ATACADO */}
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                O PAPEL DO ATACADO NA CAPILARIDADE
              </h4>
              <span className="text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 tracking-wide w-fit">
                COMPLEMENTO · FUNDAÇÃO DE DADOS · PAC 2023
              </span>
            </div>

            <p className="text-[13.5px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-2 sm:mb-2.5">
              A Fundação de Dados associa parte da pulverização do varejo à presença e à concorrência no atacado, que ampliam as alternativas de abastecimento da rede.
            </p>

            <div className="flex w-full flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 rounded-lg p-2.5 mb-2 sm:mb-2.5">
              <div className="flex flex-col flex-1 items-center justify-center text-center py-2 sm:py-1 px-3 w-full">
                <div className="flex items-baseline gap-1">
                  <span className="text-[28px] sm:text-[30px] font-black text-slate-900 dark:text-white leading-none">54%</span>
                  <span className="text-[13px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">ESTIMADOS*</span>
                </div>
                <span className="text-[13.5px] sm:text-[14px] font-medium text-slate-600 dark:text-slate-400 mt-1">do sell-out varejista associado ao atacado</span>
              </div>
              <div className="flex flex-col flex-1 items-center justify-center text-center py-2 sm:py-1 px-3 w-full">
                <span className="text-[28px] sm:text-[30px] font-black text-slate-900 dark:text-white leading-none">10,3</span>
                <span className="text-[13.5px] sm:text-[14px] font-medium text-slate-600 dark:text-slate-400 mt-1">varejistas por empresa atacadista</span>
              </div>
              <div className="flex flex-col flex-1 items-center justify-center text-center py-2 sm:py-1 px-3 w-full">
                <span className="text-[28px] sm:text-[30px] font-black text-slate-900 dark:text-white leading-none">+17,5%</span>
                <span className="text-[13.5px] sm:text-[14px] font-medium text-slate-600 dark:text-slate-400 mt-1">empresas atacadistas entre 2022 e 2023**</span>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-lg py-2.5 px-3.5 sm:py-3 sm:px-4 mb-1.5 sm:mb-2">
              <p className="text-[13.5px] sm:text-[14.5px] text-indigo-900 dark:text-indigo-200 leading-relaxed font-medium">
                Na interpretação da Fundação de Dados, um atacado presente e competitivo amplia as alternativas de abastecimento e ajuda a sustentar uma rede varejista ampla e dispersa.
              </p>
            </div>
            
            <div className="flex flex-col gap-1 text-[11.5px] sm:text-[12px] text-slate-400 dark:text-slate-500 leading-tight">
              <p>* 54% é uma estimativa da Fundação de Dados baseada em dados de receita e premissas do estudo; não é percentual divulgado diretamente pela PAC/IBGE.</p>
              <p>** Indicadores do atacado utilizam PAC 2023 e número de empresas comerciais.</p>
            </div>
          </div>

        </div>

        {/* Notas Metodológicas do Bloco 01 */}
        <div className="text-[11.5px] sm:text-[12px] text-slate-400 dark:text-slate-500 leading-[17px] max-w-5xl mt-3 space-y-1">
          <p>
            PAC: Pesquisa Anual de Comércio (IBGE). ‘Unidades locais’ correspondem aos estabelecimentos ou pontos de operação vinculados à atividade analisada. Os indicadores complementares sobre atacado utilizam PAC 2023 e número de empresas comerciais; por isso, não devem ser comparados diretamente aos indicadores principais da PAC 2024.
          </p>
        </div>

      </section>
      </div>

      {/* BLOCO 02 · UMA REDE NACIONAL EM REDISTRIBUIÇÃO */}
      <section className="flex flex-col gap-2 mt-1.5">
        
        {/* CABEÇALHO DO BLOCO */}
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-1.5">
            <h2 className="text-[18px] sm:text-[19px] font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400">02 ·</span>
              UMA REDE NACIONAL EM REDISTRIBUIÇÃO
            </h2>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 dark:bg-slate-800/60 rounded-md shrink-0 self-start sm:self-auto">
              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                INSTITUTO DE PESQUISAS ANAMACO · CENÁRIO DO VAREJO 2025
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-0.5">
            <h3 className="text-[19px] sm:text-[21px] font-bold text-slate-900 dark:text-white leading-tight">
              O Sudeste continua liderando, mas a distribuição regional da rede ficou menos concentrada entre 2006 e 2025.
            </h3>
            <p className="text-[14px] sm:text-[15px] text-slate-600 dark:text-slate-400 leading-snug max-w-5xl">
              Em 2025, o Sudeste concentrava 45,7% das lojas de materiais de construção, ainda como principal região do setor. Desde 2006, porém, sua participação diminuiu, enquanto Nordeste, Norte e Centro-Oeste ampliaram presença na rede.
            </p>
          </div>
        </div>
        
        {/* CORPO DO BLOCO */}
        <div className="flex flex-col gap-2.5 mt-0.5">
          
          {/* FAIXA EXECUTIVA */}
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 flex flex-col gap-1.5">
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-700 items-stretch">
              {/* INSIGHT 1 */}
              <div className="flex flex-col flex-1 pt-0.5 sm:pt-0 sm:pr-2">
                <span className="text-[28px] sm:text-[32px] font-black text-slate-900 dark:text-white leading-none">45,7%</span>
                <span className="text-[13px] sm:text-[14px] font-bold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">das lojas estão no Sudeste em 2025</span>
                <span className="text-[12.5px] sm:text-[13.5px] text-slate-500 dark:text-slate-400 leading-tight">a região ainda concentra quase metade da rede</span>
              </div>
              {/* INSIGHT 2 */}
              <div className="flex flex-col flex-1 pt-2 sm:pt-0 sm:pl-4">
                <span className="text-[28px] sm:text-[32px] font-black text-indigo-600 dark:text-indigo-400 leading-none">+6,8 p.p.</span>
                <span className="text-[13px] sm:text-[14px] font-bold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">ganho conjunto de Norte + Nordeste + Centro-Oeste desde 2006</span>
                <span className="text-[12.5px] sm:text-[13.5px] text-slate-500 dark:text-slate-400 leading-tight">29,0% &rarr; 35,8%</span>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-slate-700 dark:text-slate-300 font-medium leading-snug border-t border-slate-200 dark:border-slate-700 pt-1.5 mt-0.5">
              O Sudeste continua liderando, mas sua participação relativa diminuiu enquanto Norte, Nordeste e Centro-Oeste ganharam espaço na composição da rede.
            </p>
          </div>

          {/* GRÁFICO REGIONAL */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
              <div className="flex flex-col gap-0.5">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider leading-tight">
                  EVOLUÇÃO REGIONAL DA REDE &middot; 2006 &rarr; 2025
                </h4>
                <span className="text-[12.5px] sm:text-[13.5px] text-slate-500 dark:text-slate-400 leading-tight">
                  Participação de cada região no universo de lojas do setor
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] sm:text-[12px] font-medium text-slate-500 self-end sm:self-center">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-slate-200 dark:bg-slate-700"></div>2006</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-indigo-500"></div>2025</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-1 w-full">
              {/* SUDESTE */}
              <div className="flex items-center h-[27px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Sudeste</span>
                <div className="flex-1 flex flex-col justify-center gap-0.5 mx-3 sm:mx-5 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '80%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">50,3%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '72.68%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">45,7%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-slate-500 dark:text-slate-400">-4,6 p.p.</span>
              </div>

              {/* SUL */}
              <div className="flex items-center h-[27px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Sul</span>
                <div className="flex-1 flex flex-col justify-center gap-0.5 mx-3 sm:mx-5 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '33.08%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">20,8%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '29.58%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">18,6%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-slate-500 dark:text-slate-400">-2,2 p.p.</span>
              </div>

              {/* NORDESTE */}
              <div className="flex items-center h-[27px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Nordeste</span>
                <div className="flex-1 flex flex-col justify-center gap-0.5 mx-3 sm:mx-5 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '27.19%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">17,1%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '31.80%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">20,0%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-indigo-600 dark:text-indigo-400">+2,9 p.p.</span>
              </div>

              {/* CENTRO-OESTE */}
              <div className="flex items-center h-[27px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Centro-Oeste</span>
                <div className="flex-1 flex flex-col justify-center gap-0.5 mx-3 sm:mx-5 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '12.56%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">7,9%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '15.58%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">9,8%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-indigo-600 dark:text-indigo-400">+1,9 p.p.</span>
              </div>

              {/* NORTE */}
              <div className="flex items-center h-[27px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Norte</span>
                <div className="flex-1 flex flex-col justify-center gap-0.5 mx-3 sm:mx-5 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '6.36%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">4,0%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '9.54%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">6,0%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-indigo-600 dark:text-indigo-400">+2,0 p.p.</span>
              </div>
            </div>
            
            <p className="text-[13px] sm:text-[14px] text-slate-700 dark:text-slate-300 font-medium leading-snug mt-2 border-t border-slate-100 dark:border-slate-800 pt-2">
              Entre 2006 e 2025, Sudeste e Sul perderam participação relativa, enquanto Nordeste, Norte e Centro-Oeste ampliaram sua presença na composição da rede.
            </p>
          </div>

          {/* PERFIL DA REDE (FAIXA) */}
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 flex flex-col gap-1">
            <h4 className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 dark:text-white uppercase tracking-wider leading-tight">
              PERFIL DA REDE
            </h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-700">
              <div className="flex items-center gap-2 pt-0.5 sm:pt-0">
                <span className="text-[18px] sm:text-[20px] font-black text-slate-900 dark:text-white leading-none">69,5%</span>
                <span className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-tight">das lojas têm até 4 funcionários</span>
              </div>
              <div className="flex items-center gap-2 pt-1 sm:pt-0 sm:pl-4">
                <span className="text-[18px] sm:text-[20px] font-black text-slate-900 dark:text-white leading-none">5,03</span>
                <span className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-tight">funcionários por loja, em média</span>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-slate-600 dark:text-slate-400 font-medium leading-tight mt-0.5 border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5">
              A redistribuição regional ocorre em uma estrutura varejista predominantemente formada por pequenas operações.
            </p>
          </div>

          {/* SÍNTESE FINAL DA SEÇÃO 02 */}
          <div className="border-l-[3px] border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20 rounded-r-lg px-3 py-1.5 sm:px-3.5 sm:py-2">
            <p className="text-[13px] sm:text-[14px] font-medium text-slate-800 dark:text-slate-200 leading-snug">
              A rede permanece concentrada no Sudeste, mas sua distribuição regional tornou-se menos concentrada entre 2006 e 2025, com avanço de Nordeste, Norte e Centro-Oeste.
            </p>
          </div>

        </div>

        {/* Nota Metodológica do Bloco 02 */}
        <div className="text-[11.5px] sm:text-[12px] text-slate-400 dark:text-slate-500 leading-tight max-w-5xl mt-0.5">
          Nota metodológica: os dados regionais comparam 2006 e 2025 no levantamento Anamaco/RAIS. O agregado Norte + Nordeste + Centro-Oeste foi calculado a partir dos percentuais regionais divulgados pela Anamaco. Os dados não devem ser comparados diretamente às unidades locais da PAC/IBGE 2024 do Bloco 01.
        </div>
      </section>

      {/* SEÇÃO EVIDÊNCIAS E FONTES */}
      <section className="mt-4 border-t border-slate-200 dark:border-slate-800 pt-8 sm:pt-10 flex flex-col gap-6 sm:gap-7">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              EVIDÊNCIAS E FONTES
            </h3>
          </div>
          <span className="text-[11.5px] sm:text-xs text-slate-500 dark:text-slate-400">
            Evidências factuais rastreáveis com fontes, datas e links originais organizadas por bloco de análise
          </span>
        </div>

        {/* EVIDÊNCIAS BLOCO 01 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-1.5">
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              BLOCO 01 · UM VAREJO ALTAMENTE PULVERIZADO
            </span>
          </div>

          {/* Grupo 1: Fonte Principal Bloco 01 */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                FONTE PRINCIPAL · ESTRUTURA DO VAREJO (PAC 2024)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              <EvidenceCard evidence={EVIDENCIA_PRINCIPAL_BLOCO_01} />
            </div>
          </div>

          {/* Grupo 2: Evidências Complementares Bloco 01 */}
          <div className="flex flex-col gap-2.5 pt-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 px-2 py-0.5 rounded">
                EVIDÊNCIAS COMPLEMENTARES · PAPEL DO ATACADO (PAC 2023)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              {EVIDENCIAS_COMPLEMENTARES_BLOCO_01.map((ev) => (
                <EvidenceCard key={ev.id} evidence={ev} />
              ))}
            </div>
          </div>
        </div>

        {/* EVIDÊNCIAS BLOCO 02 */}
        <div className="flex flex-col gap-4 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-1.5">
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              BLOCO 02 · UMA REDE NACIONAL EM REDISTRIBUIÇÃO
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            <EvidenceCard evidence={EVIDENCIA_PRINCIPAL_BLOCO_02} />
            <EvidenceCard evidence={EVIDENCIA_COMPLEMENTAR_BLOCO_02} />
          </div>
        </div>
      </section>

    </div>
  );
}