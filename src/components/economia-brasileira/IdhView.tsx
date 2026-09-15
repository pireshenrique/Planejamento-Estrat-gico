import React, { useState } from 'react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../layout/HeaderKpiCard';
import { EvidenceCard } from '../layout/EvidenceCard';
import { 
  Award, 
  Target, 
  TrendingUp, 
  Search, 
  Globe, 
  ExternalLink, 
  AlertTriangle,
  Cpu,
  Leaf,
  ArrowDownRight,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Info,
  Scale,
  Layers
} from 'lucide-react';
import {
  ResponsiveContainer as RechartsContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { IDH_PAGE } from '../../data/pages/Idh';

interface IdhViewProps {
  setActivePage: (page: string) => void;
}

const IDH_HISTORY_DATA = [
  { year: '1990', idh: 0.641, displayVal: '0,641' },
  { year: '2000', idh: 0.690, displayVal: '0,690' },
  { year: '2010', idh: 0.748, displayVal: '0,748' },
  { year: '2015', idh: 0.764, displayVal: '0,764' },
  { year: '2020', idh: 0.770, displayVal: '0,770' },
  { year: '2021', idh: 0.768, displayVal: '0,768' },
  { year: '2022', idh: 0.780, displayVal: '0,780' },
  { year: '2023', idh: 0.786, displayVal: '0,786' },
];

const PEERS_DATA = [
  { country: 'Peru', idh: 0.794, displayVal: '0,794', isHighlight: false, pos: '81º' },
  { country: 'México', idh: 0.789, displayVal: '0,789', isHighlight: false, pos: '82º' },
  { country: 'Colômbia', idh: 0.788, displayVal: '0,788', isHighlight: false, pos: '83º' },
  { country: 'Brasil', idh: 0.786, displayVal: '0,786', isHighlight: true, pos: '84º' },
];

const GLOBAL_RANKING_DATA = [
  { pos: 1, country: 'Islândia', category: 'Muito Alto', idh: '0,972' },
  { pos: 2, country: 'Noruega', category: 'Muito Alto', idh: '0,970' },
  { pos: 3, country: 'Suíça', category: 'Muito Alto', idh: '0,970' },
  { pos: 4, country: 'Dinamarca', category: 'Muito Alto', idh: '0,962' },
  { pos: 5, country: 'Alemanha', category: 'Muito Alto', idh: '0,959' },
  { pos: 6, country: 'Suécia', category: 'Muito Alto', idh: '0,959' },
  { pos: 7, country: 'Austrália', category: 'Muito Alto', idh: '0,958' },
  { pos: 8, country: 'Hong Kong (China)', category: 'Muito Alto', idh: '0,955' },
  { pos: 9, country: 'Países Baixos', category: 'Muito Alto', idh: '0,955' },
  { pos: 10, country: 'Bélgica', category: 'Muito Alto', idh: '0,951' },
];

const IDH_EVIDENCES: Array<{
  id: number;
  tag: string;
  dateStr: string;
  title: string;
  headline: string;
  bullets?: string[];
  footerText?: string;
  source: string;
  url: string;
  isPdf?: boolean;
  author?: string;
  fileName?: string;
}> = [
  {
    id: 3,
    tag: 'Relatório PNUD 2025',
    dateStr: '2025',
    title: 'Inteligência Artificial: Possibilidades na Era da IA',
    headline: 'A IA é um fator imprevisível, mas pode impulsionar o desenvolvimento humano se o foco for na expansão da agência humana. O relatório delineia três áreas de ação:',
    bullets: [
      'Construir uma economia de complementaridade (evitando a substituição total);',
      'Promover a inovação com propósito (alinhada a valor social);',
      'Investir em capacidades que realmente importam.'
    ],
    footerText: 'Evitar o tecno-determinismo e focar na escolha humana para orientar a tecnologia a favor das pessoas.',
    source: 'Relatório de Desenvolvimento Humano 2025 — PNUD',
    url: '#',
    isPdf: true,
    author: 'Programa das Nações Unidas para o Desenvolvimento (PNUD)',
    fileName: 'Relatorio_Desenvolvimento_Humano_2025.pdf'
  }
];

export function IdhView({ setActivePage }: IdhViewProps) {
  const [showFullRanking, setShowFullRanking] = useState(false);

  const handleDownloadPdf = () => {
    const fileUrl = '/Relatorio_Desenvolvimento_Humano_2025.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Relatorio_Desenvolvimento_Humano_2025.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">

      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            IDH (Índice de Desenvolvimento Humano)
          </h1>
          <p className="text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
            Acompanhamento estruturado dos indicadores globais de desenvolvimento humano (PNUD / ONU), renda, educação, longevidade e inovação tecnológica.
          </p>
        </div>

        <ResponsiveContainer minWidth="200px" gap="gap-3" className="flex-1">
          {/* CARD 1 */}
          <HeaderKpiCard
            title="IDH DO BRASIL"
            value="0,786"
            context="84ª posição • 2023"
            secondaryHighlight="Desenvolvimento humano elevado"
            secondaryHighlightColor="blue"
            explanation="Índice de desenvolvimento humano do Brasil."
            source="PNUD — Relatório do Desenvolvimento Humano 2025"
            icon={Award}
            color="blue"
          />

          {/* CARD 2 */}
          <HeaderKpiCard
            title="IDH + DESIGUALDADE"
            value="0,594"
            comparison="−24,4%"
            comparisonColor="amber"
            context="IDH original: 0,786"
            explanation="Perda associada à desigualdade."
            source="PNUD — Relatório do Desenvolvimento Humano 2025"
            icon={AlertTriangle}
            color="amber"
          />

          {/* CARD 3 */}
          <HeaderKpiCard
            title="DISTÂNCIA AO IDH MUITO ALTO"
            value="0,014"
            valueSuffix="ponto"
            context="Brasil: 0,786 • Limiar: 0,800"
            explanation="Diferença calculada para o limiar de desenvolvimento humano muito elevado."
            source="PNUD — Relatório do Desenvolvimento Humano 2025"
            icon={Target}
            color="slate"
          />
        </ResponsiveContainer>
      </div>

      {/* 1. LEITURA ESTRATÉGICA (ESTRUTURA PADRÃO PADRONIZADA) */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm shrink-0">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Análise Estratégica do IDH Global
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            
            {/* 1. O que aconteceu e o que explica o resultado */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs">
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    
                    <div className="pt-1 flex-1 min-w-0">
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">1. O que aconteceu e o que explica o resultado</h4>
                      <div className="inline-flex bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg mt-1 max-w-full">
                        <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold break-words">
                          Brasil avança no ranking mundial da ONU, alcançando a 84ª posição com IDH de 0,786
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[36px] md:text-[44px] font-bold text-slate-200 dark:text-slate-800/80 leading-none shrink-0 select-none">
                    01
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-blue-400 dark:marker:text-blue-500/70">
                    <li>
                      O Brasil apresentou IDH de <strong>0,786 em 2023</strong> e ocupou a <strong>84ª posição entre 193 países e territórios</strong>, permanecendo na faixa de desenvolvimento humano elevado.
                    </li>
                    <li>
                      O resultado brasileiro combina <strong>75,8 anos de esperança de vida, 15,8 anos de escolaridade esperados, 8,4 anos de escolaridade média e RNB* per capita de US$ 18.011 em PPC* de 2021</strong>, refletindo as três dimensões consideradas pelo IDH: saúde, educação e padrão de vida.
                    </li>
                    <li>
                      Com <strong>0,786</strong>, o Brasil permanece próximo, mas ainda abaixo do <strong>limiar de 0,800</strong> que define a categoria de desenvolvimento humano muito elevado.
                    </li>
                  </ul>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                    <span>Evidências Utilizadas: PNUD — Relatório do Desenvolvimento Humano 2025.</span>
                    <span className="font-normal text-slate-400 dark:text-slate-500 text-[11.5px]">
                      * <strong>RNB:</strong> Renda Nacional Bruta &nbsp;|&nbsp; * <strong>PPC:</strong> Paridade de Poder de Compra
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ResponsiveContainer minWidth="320px" gap="gap-5">
              
              {/* 2. O que observar nos próximos meses */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-amber-100 dark:border-amber-900/30 p-6 md:p-8 shadow-xs flex flex-col">
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center shrink-0">
                        <Search className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                      </div>
                      
                      <div className="pt-1 flex-1 min-w-0">
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">2. O que observar nos próximos meses</h4>
                        <div className="inline-flex bg-amber-50/80 dark:bg-amber-900/30 px-3 py-1.5 rounded-lg mt-1 max-w-full">
                          <span className="text-[13px] text-amber-700 dark:text-amber-400 font-semibold break-words">
                            Desaceleração global do IDH, perdas por desigualdade e impacto da Inteligência Artificial
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[36px] md:text-[44px] font-bold text-amber-100 dark:text-amber-900/40 leading-none shrink-0 select-none">
                      02
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <ul className="list-disc pl-4 space-y-2.5 marker:text-amber-400 dark:marker:text-amber-500/70">
                      <li>
                        O progresso global do desenvolvimento humano perdeu ritmo após a pandemia: o aumento do IDH em 2024 deverá ser o menor em cerca de <strong>35 anos</strong>, enquanto a distância entre países de IDH muito elevado e muito baixo voltou a aumentar.
                      </li>
                      <li>
                        No Brasil, o <strong>IDH ajustado pela desigualdade cai de 0,786 para 0,594</strong>, uma perda de <strong>24,4%</strong>, mostrando que o nível médio de desenvolvimento humano não é distribuído de forma homogênea entre a população.
                      </li>
                      <li>
                        A inteligência artificial tende a ganhar espaço em <strong>educação, saúde e trabalho</strong>: cerca de dois terços dos entrevistados em diferentes grupos de IDH esperam utilizá-la nessas áreas dentro de um ano, mas o PNUD ressalta que seus efeitos sobre o desenvolvimento dependerão de como a tecnologia será incorporada e distribuída.
                      </li>
                    </ul>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências Utilizadas: PNUD — Relatório do Desenvolvimento Humano 2025.
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Impacto para a Lorenzetti */}
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-blue-100 dark:border-blue-900/30 p-6 md:p-8 shadow-xs flex flex-col">
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      
                      <div className="pt-1 flex-1 min-w-0">
                        <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">3. Impacto para a Lorenzetti</h4>
                        <div className="inline-flex bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg mt-1 max-w-full">
                          <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold break-words">
                            Hipóteses observacionais sobre perfil de consumo, inovação com IA e acessibilidade
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[36px] md:text-[44px] font-bold text-blue-100 dark:text-blue-900/40 leading-none shrink-0 select-none">
                      03
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <ul className="list-disc pl-4 space-y-2.5 marker:text-blue-400 dark:marker:text-blue-500/70">
                      <li>
                        A evolução das condições de renda e qualidade de vida pode alterar a capacidade das famílias de realizar investimentos em moradia e adquirir bens duráveis, sugerindo atenção ao posicionamento de produtos conforme diferentes níveis de poder de compra.
                      </li>
                      <li>
                        A evolução das capacidades educacionais e digitais pode ampliar a importância de <strong>eficiência, tecnologia, usabilidade e informação</strong> na escolha de soluções residenciais, favorecendo produtos que entreguem benefícios percebidos de forma clara.
                      </li>
                      <li>
                        A expansão da IA pode criar oportunidades de inovação em produtos, processos e serviços, especialmente quando utilizada para <strong>complementar capacidades humanas, ampliar produtividade e melhorar decisões</strong>, em vez de depender apenas da substituição de tarefas.
                      </li>
                      <li>
                        A perda de <strong>24,4% do desenvolvimento humano associada à desigualdade</strong> sugere um mercado consumidor heterogêneo, no qual soluções de diferentes níveis de preço, acessibilidade e eficiência podem continuar relevantes para atender diferentes condições de renda.
                      </li>
                    </ul>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidências Utilizadas: Hipóteses observacionais fundamentadas no Relatório do Desenvolvimento Humano 2025 (PNUD).
                    </div>
                  </div>
                </div>
              </div>

            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. COMO O BRASIL SE POSICIONA NO DESENVOLVIMENTO HUMANO? */}
      <section className="bg-white dark:bg-[#111827] p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-8">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm shrink-0">
                2
              </div>
              <h2 className="text-[22px] md:text-[26px] font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                Como o Brasil se posiciona no desenvolvimento humano?
              </h2>
            </div>
            <p className="text-[15px] text-slate-600 dark:text-slate-400 md:pl-[44px]">
              Evolução histórica, comparação internacional e principais gaps do desenvolvimento humano.
            </p>
          </div>
          <div className="text-left md:text-right shrink-0 md:pl-[44px]">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
              Fonte: PNUD — Relatório do Desenvolvimento Humano 2025
            </span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              Dados de IDH referentes a 2023
            </span>
          </div>
        </div>

        {/* GRADE DE 4 BLOCOS ANALÍTICOS (EVOLUÇÃO → POSIÇÃO RELATIVA → DESIGUALDADE → SUSTENTABILIDADE) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* BLOCO 01 — EVOLUÇÃO HISTÓRICA */}
          <div className="secao-2-bloco-1 bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl p-5 md:p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between h-full min-h-[460px]">
            <div className="flex flex-col gap-4 w-full">
              
              {/* TÍTULO DO BLOCO 01 */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 shrink-0">
                <div>
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    01. Evolução do IDH
                  </span>
                  <h3 className="text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
                    O Brasil avançou, mas o ritmo desacelerou
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Evolução do IDH brasileiro — 1990 a 2023 (Série consistente PNUD)
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +22,6% vs. 1990
                  </span>
                </div>
              </div>

              {/* GRÁFICO DE LINHA DA SÉRIE HISTÓRICA */}
              <div className="bg-white dark:bg-slate-900/60 rounded-xl p-3 pt-4 border border-slate-200/80 dark:border-slate-800 w-full shrink-0 overflow-hidden block">
                <div className="w-full h-[180px] min-h-[180px] max-h-[180px] relative">
                  <RechartsContainer width="100%" height={180}>
                    <LineChart data={IDH_HISTORY_DATA} margin={{ top: 10, right: 15, left: -10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} vertical={false} />
                      <XAxis 
                        dataKey="year" 
                        tick={{ fontSize: 11, fill: '#64748b', fontWeight: 500 }} 
                        axisLine={{ stroke: '#cbd5e1' }}
                        tickLine={false}
                        dy={6}
                      />
                      <YAxis 
                        domain={[0.60, 0.82]} 
                        ticks={[0.60, 0.65, 0.70, 0.75, 0.80]}
                        tickFormatter={(val: number) => val.toFixed(2).replace('.', ',')}
                        tick={{ fontSize: 10.5, fill: '#64748b' }} 
                        axisLine={false}
                        tickLine={false}
                        width={38}
                      />
                      <Tooltip 
                        formatter={(val: number) => [`${val.toString().replace('.', ',')}`, 'IDH Brasil']}
                        labelFormatter={(label) => `Ano ${label}`}
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          borderRadius: '8px',
                          border: 'none',
                          color: '#fff',
                          fontSize: '12px',
                          padding: '6px 10px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="idh" 
                        stroke="#2563eb" 
                        strokeWidth={2.5} 
                        dot={{ r: 4, fill: '#2563eb', stroke: '#ffffff', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#1d4ed8' }}
                      />
                    </LineChart>
                  </RechartsContainer>
                </div>
              </div>

              {/* INTERPRETAÇÃO E DADOS DE RITMO */}
              <div className="flex flex-col gap-3 shrink-0 w-full">
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  O IDH brasileiro avançou de <strong>0,641 em 1990 para 0,786 em 2023</strong>, mas o ritmo médio de crescimento foi menor no período mais recente.
                </p>

                <div className="grid grid-cols-2 gap-2.5 w-full">
                  <div className="bg-white dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">2000 a 2010</span>
                    <span className="text-[14px] font-bold text-blue-600 dark:text-blue-400">+0,81% a.a.</span>
                    <span className="text-[10.5px] text-slate-400 block">Crescimento acelerado</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">2010 a 2023</span>
                    <span className="text-[14px] font-bold text-amber-600 dark:text-amber-400">+0,38% a.a.</span>
                    <span className="text-[10.5px] text-slate-400 block">Ritmo moderado</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between shrink-0">
              <span>* +22,6%: variação calculada sobre a série oficial</span>
              <span>Tabela 2 — PNUD 2025</span>
            </div>
          </div>

          {/* BLOCO 02 — BRASIL VS. PARES */}
          <div className="bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl p-5 md:p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              
              {/* TÍTULO DO BLOCO 02 */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    02. Brasil vs. Pares
                  </span>
                  <h3 className="text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
                    BRASIL PRÓXIMO DOS PRINCIPAIS PARES REGIONAIS
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    IDH dos principais países latino-americanos próximos ao Brasil — 2023
                  </p>
                </div>
              </div>

              {/* BARRAS HORIZONTAIS DE COMPARAÇÃO */}
              <div className="flex flex-col gap-3.5 my-2">
                {PEERS_DATA.map((item) => {
                  const widthPercent = ((item.idh - 0.700) / 0.120) * 100;
                  return (
                    <div key={item.country} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${item.isHighlight ? 'text-blue-600 dark:text-blue-400 text-[13px]' : 'text-slate-700 dark:text-slate-300'}`}>
                            {item.country}
                          </span>
                          <span className="text-[10.5px] text-slate-400">({item.pos})</span>
                          {item.isHighlight && (
                            <span className="px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold text-[10px]">
                              Brasil
                            </span>
                          )}
                        </div>
                        <span className={`font-mono font-bold ${item.isHighlight ? 'text-blue-600 dark:text-blue-400 text-sm' : 'text-slate-700 dark:text-slate-300'}`}>
                          {item.displayVal}
                        </span>
                      </div>

                      {/* BARRA PROGRESSIVA */}
                      <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            item.isHighlight 
                              ? 'bg-blue-600 dark:bg-blue-500' 
                              : 'bg-slate-400 dark:bg-slate-500'
                          }`}
                          style={{ width: `${Math.min(Math.max(widthPercent, 10), 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* LEITURA ESTRATÉGICA REGIONAL */}
              <div className="bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <Globe className="w-3.5 h-3.5 text-blue-500" />
                  <span>Leitura Comparativa Regional</span>
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  O Brasil apresenta IDH muito próximo ao de Peru, México e Colômbia, posicionando-se entre os principais pares regionais.
                </p>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  Diferença de apenas 0,008 ponto entre o Peru (0,794) e o Brasil (0,786).
                </span>
              </div>

            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Comparação com pares regionais</span>
              <span>Relatório PNUD 2025</span>
            </div>
          </div>

          {/* BLOCO 03 — IDH × DESIGUALDADE */}
          <div className="bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl p-5 md:p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              
              {/* TÍTULO DO BLOCO 03 */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
                    03. IDH × Desigualdade
                  </span>
                  <h3 className="text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
                    O RESULTADO MUDA QUANDO CONSIDERAMOS A DESIGUALDADE
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Impacto da desigualdade sobre o desenvolvimento humano brasileiro — 2023
                  </p>
                </div>
              </div>

              {/* VISUALIZAÇÃO DE FLUXO / QUEDA */}
              <div className="bg-white dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 my-1">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3">
                  
                  {/* CARD ESQUERDA: IDH */}
                  <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-lg border border-slate-200/60 dark:border-slate-700 text-center">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      IDH Original
                    </span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-mono block my-0.5">
                      0,786
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Desenvolvimento elevado
                    </span>
                  </div>

                  {/* CENTRO: QUEDA / PERDA */}
                  <div className="flex flex-col items-center justify-center text-center py-1">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-extrabold text-sm shadow-xs">
                      −24,4%
                    </span>
                    <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 mt-1">
                      Perda por desigualdade
                    </span>
                  </div>

                  {/* CARD DIREITA: IDHD */}
                  <div className="bg-amber-50/80 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200/80 dark:border-amber-900/50 text-center">
                    <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block">
                      IDH Ajustado (IDHD)
                    </span>
                    <span className="text-2xl font-black text-amber-700 dark:text-amber-400 font-mono block my-0.5">
                      0,594
                    </span>
                    <span className="text-[10px] text-amber-600/80 dark:text-amber-400/70">
                      IDH ajustado à desigualdade
                    </span>
                  </div>

                </div>
              </div>

              {/* EXPLICAÇÃO E LEITURA */}
              <div className="flex flex-col gap-2 pt-1">
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ao considerar a desigualdade na distribuição das dimensões do desenvolvimento humano, o resultado brasileiro é reduzido de <strong>0,786 para 0,594</strong>.
                </p>
                <div className="bg-amber-50/50 dark:bg-amber-950/20 p-2.5 rounded-lg border-l-2 border-amber-500 text-[12px] text-slate-700 dark:text-slate-300 font-medium">
                  A média nacional de desenvolvimento humano não representa igualmente toda a população.
                </div>
              </div>

            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>IDHD: Índice de Desenv. Humano Ajustado à Desigualdade</span>
              <span>Tabela 3 — PNUD 2025</span>
            </div>
          </div>

          {/* BLOCO 04 — IDH × PRESSÕES SOBRE O PLANETA */}
          <div className="bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl p-5 md:p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              
              {/* TÍTULO DO BLOCO 04 */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                    04. IDH × Pressão Ambiental
                  </span>
                  <h3 className="text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
                    O RESULTADO TAMBÉM MUDA QUANDO CONSIDERAMOS O PLANETA
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    IDH ajustado às pressões sobre o planeta (IDHP) — 2023
                  </p>
                </div>
              </div>

              {/* VISUALIZAÇÃO DE FLUXO / AJUSTE PLANETÁRIO (SIMÉTRICO AO BLOCO 03) */}
              <div className="bg-white dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 my-1">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3">
                  
                  {/* CARD ESQUERDA: IDH */}
                  <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-lg border border-slate-200/60 dark:border-slate-700 text-center">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      IDH Original
                    </span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-mono block my-0.5">
                      0,786
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Desenvolvimento elevado
                    </span>
                  </div>

                  {/* CENTRO: AJUSTE */}
                  <div className="flex flex-col items-center justify-center text-center py-1">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-extrabold text-sm shadow-xs">
                      −10,7%
                    </span>
                    <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 mt-1">
                      Ajuste planetário
                    </span>
                  </div>

                  {/* CARD DIREITA: IDHP */}
                  <div className="bg-emerald-50/80 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-200/80 dark:border-emerald-900/50 text-center">
                    <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">
                      IDHP (Ajustado)
                    </span>
                    <span className="text-2xl font-black text-emerald-700 dark:text-emerald-400 font-mono block my-0.5">
                      0,702
                    </span>
                    <span className="text-[10px] text-emerald-600/80 dark:text-emerald-400/70">
                      Impacto ambiental
                    </span>
                  </div>

                </div>
              </div>

              {/* EXPLICAÇÃO E LEITURA */}
              <div className="flex flex-col gap-2 pt-1">
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  O IDHP ajusta o desenvolvimento humano considerando as emissões de CO₂ per capita e a pegada material, incorporando a pressão ambiental associada ao padrão de desenvolvimento.
                </p>
                <div className="bg-emerald-50/50 dark:bg-emerald-950/20 p-2.5 rounded-lg border-l-2 border-emerald-500 text-[12px] text-slate-700 dark:text-slate-300 font-medium">
                  O valor do IDH é reduzido em 10,7% quando ajustado pelas pressões sobre o planeta.
                </div>
              </div>

            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>IDHP: IDH Ajustado às Pressões Planetárias</span>
              <span>Tabela 7 — PNUD 2025</span>
            </div>
          </div>

        </div>

        {/* SÍNTESE ANALÍTICA CONJUNTA */}
        <div className="bg-blue-50/60 dark:bg-blue-950/30 rounded-2xl p-4 md:p-5 border border-blue-200/70 dark:border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-700 dark:text-blue-400 shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-[12px] font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider">
              O que a leitura conjunta mostra
            </h4>
            <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              O Brasil avançou de forma expressiva no desenvolvimento humano desde 1990, mas o ritmo perdeu força. O resultado médio também sofre reduções relevantes quando consideramos a desigualdade e as pressões ambientais, revelando que o nível do IDH, isoladamente, não captura toda a complexidade do desenvolvimento brasileiro.
            </p>
          </div>
        </div>

        {/* RANKING GLOBAL COMPLETO (COMPONENTE SECUNDÁRIO DE REFERÊNCIA) */}
        <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-4 md:p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-700/60 pb-3">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h4 className="text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Ranking Global de Referência — 193 Países e Territórios
              </h4>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Posição do Brasil: <strong>84º lugar (0,786)</strong> • Faixa de Desenvolvimento Elevado
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700/80 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <th className="py-2 px-2 text-center w-16">Posição</th>
                  <th className="py-2 px-3">País / Território</th>
                  <th className="py-2 px-3 hidden sm:table-cell">Classificação ONU</th>
                  <th className="py-2 px-2 text-right">Índice IDH (2023)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60 dark:divide-slate-700/40">
                {GLOBAL_RANKING_DATA.map((row) => (
                  <tr key={row.pos} className="hover:bg-white dark:hover:bg-slate-800/70 transition-colors">
                    <td className="py-1.5 px-2 text-center font-bold text-slate-500">
                      {row.pos}º
                    </td>
                    <td className="py-1.5 px-3 font-medium text-slate-800 dark:text-slate-200">
                      {row.country}
                    </td>
                    <td className="py-1.5 px-3 hidden sm:table-cell">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
                        {row.category}
                      </span>
                    </td>
                    <td className="py-1.5 px-2 text-right font-mono font-medium text-slate-700 dark:text-slate-300">
                      {row.idh}
                    </td>
                  </tr>
                ))}

                {/* INTERVALO */}
                <tr className="bg-slate-100/50 dark:bg-slate-800/80">
                  <td className="py-1 px-2 text-center text-slate-400 font-bold">...</td>
                  <td className="py-1 px-3 text-[11px] font-medium text-slate-500 italic" colSpan={2}>
                    11ª à 83ª Posição (Demais Nações Classificadas)
                  </td>
                  <td className="py-1 px-2 text-right text-[11px] text-slate-400 font-mono">0,950 — 0,787</td>
                </tr>

                {/* BRASIL EM DESTAQUE NA TABELA DE REFERÊNCIA */}
                <tr className="bg-blue-600 text-white font-extrabold">
                  <td className="py-2 px-2 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-white text-blue-900 font-black text-xs">
                      84º
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <span className="text-sm">Brasil</span>
                  </td>
                  <td className="py-2 px-3 hidden sm:table-cell">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500 text-white border border-blue-400">
                      Desenvolvimento Elevado
                    </span>
                  </td>
                  <td className="py-2 px-2 text-right font-mono text-sm font-black text-white">
                    0,786
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* NOTA METODOLÓGICA DE RODAPÉ */}
        <div className="bg-slate-50/80 dark:bg-slate-800/30 p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
          <span>
            <strong>Nota Metodológica:</strong> Os valores do IDH apresentados são referentes a 2023. Para comparações ao longo do tempo, utilizar a série consistente indicada pelo PNUD no Anexo Estatístico do Relatório de Desenvolvimento Humano 2025.
          </span>
        </div>

      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES (PNUD / ONU, OBSERVATÓRIO E BANCO MUNDIAL)</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Rastreabilidade direta de todas as publicações oficiais sobre o IDH global, inovação, desigualdade e capital humano.</p>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {IDH_EVIDENCES.map((ev) => (
            <EvidenceCard 
              key={ev.id} 
              evidence={ev} 
              onDownloadPdf={ev.isPdf ? handleDownloadPdf : undefined}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
