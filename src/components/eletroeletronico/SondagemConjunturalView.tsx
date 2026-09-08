import { useState } from 'react';
import { Target, TrendingUp, Search, Globe, FileText, Download, Building2, Activity, BarChart3, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { EvidenceCard } from '../layout/EvidenceCard';
import { SONDAGEM_EVIDENCES } from '../../data/evidences/sondagem';

interface SondagemConjunturalViewProps {
  setActivePage: (page: string) => void;
}

const CHART_1_PRICE_INCREASE = [
  { label: 'mais de 31%', value: 10 },
  { label: 'entre 21% e 30%', value: 12 },
  { label: 'entre 11% e 20%', value: 15 },
  { label: 'entre 6% e 10%', value: 36 },
  { label: 'até 5%', value: 27 },
];

const CHART_2_DIFICULDADE_INSUMOS = [
  { month: 'Nov/25', sim: 3, nao: 97 },
  { month: 'Dez/25', sim: 3, nao: 97 },
  { month: 'Jan/26', sim: 7, nao: 93 },
  { month: 'Fev/26', sim: 8, nao: 92 },
  { month: 'Mar/26', sim: 21, nao: 79 },
  { month: 'Abr/26', sim: 31, nao: 69 },
  { month: 'Mai/26', sim: 27, nao: 73 },
];

const CHART_3_PRESSAO_PRECOS = [
  { month: 'Nov/25', sim: 23, nao: 77 },
  { month: 'Dez/25', sim: 24, nao: 76 },
  { month: 'Jan/26', sim: 40, nao: 60 },
  { month: 'Fev/26', sim: 47, nao: 53 },
  { month: 'Mar/26', sim: 63, nao: 37 },
  { month: 'Abr/26', sim: 72, nao: 28 },
  { month: 'Mai/26', sim: 57, nao: 43 },
];

const CHART_4_OUTROS_CUSTOS = [
  { month: 'Nov/25', sim: 33, nao: 67 },
  { month: 'Dez/25', sim: 27, nao: 73 },
  { month: 'Jan/26', sim: 36, nao: 64 },
  { month: 'Fev/26', sim: 35, nao: 65 },
  { month: 'Mar/26', sim: 39, nao: 61 },
  { month: 'Abr/26', sim: 34, nao: 66 },
  { month: 'Mai/26', sim: 25, nao: 75 },
];

const CHART_5_EXPORTACAO_CARGAS = [
  { month: 'Nov/25', sim: 6, nao: 94 },
  { month: 'Dez/25', sim: 8, nao: 92 },
  { month: 'Jan/26', sim: 2, nao: 98 },
  { month: 'Fev/26', sim: 9, nao: 91 },
  { month: 'Mar/26', sim: 14, nao: 86 },
  { month: 'Abr/26', sim: 19, nao: 81 },
  { month: 'Mai/26', sim: 19, nao: 81 },
];

const CHART_6_IMPORTACAO_ATRASOS = [
  { month: 'Nov/25', sim: 10, nao: 90 },
  { month: 'Dez/25', sim: 13, nao: 87 },
  { month: 'Jan/26', sim: 12, nao: 88 },
  { month: 'Fev/26', sim: 18, nao: 82 },
  { month: 'Mar/26', sim: 25, nao: 75 },
  { month: 'Abr/26', sim: 27, nao: 73 },
  { month: 'Mai/26', sim: 23, nao: 77 },
];

function PriceIncreaseChart() {
  return (
    <div className="bg-white dark:bg-[#0c162c] rounded-2xl border border-slate-200 dark:border-slate-800 p-4 md:p-5 shadow-sm flex flex-col justify-between h-full">
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 block">
          PREÇOS DE PRODUTOS FINAIS
        </span>
        <h3 className="text-[14px] md:text-[15px] font-extrabold text-slate-900 dark:text-white leading-snug mb-0.5">
          Aumento médio nos preços de produtos finais
        </h3>
        <p className="text-[11.5px] font-bold text-[#1c4e5e] dark:text-blue-400 mb-3">
          maio 2026 X dezembro 2025 (percentual de empresas)
        </p>
      </div>

      <div className="w-full my-auto overflow-x-auto">
        <svg viewBox="0 0 440 220" className="w-full h-auto max-w-[420px] mx-auto font-sans select-none">
          {[0, 5, 10, 15, 20, 25, 30, 35, 40].map((val) => {
            const x = 125 + (val / 40) * 280;
            return (
              <g key={val}>
                <line
                  x1={x}
                  y1={10}
                  x2={x}
                  y2={180}
                  stroke={val === 0 ? '#64748b' : '#94a3b8'}
                  strokeWidth={val === 0 ? 1.2 : 0.8}
                  strokeDasharray={val === 0 ? 'none' : '2 2'}
                  opacity={val === 0 ? 1 : 0.3}
                />
                <text
                  x={x}
                  y={198}
                  textAnchor="middle"
                  className="text-[10.5px] font-bold fill-slate-500 dark:fill-slate-400"
                >
                  {val}%
                </text>
              </g>
            );
          })}

          {CHART_1_PRICE_INCREASE.map((item, idx) => {
            const barY = 18 + idx * 32;
            const barHeight = 20;
            const barWidth = (item.value / 40) * 280;

            return (
              <g key={item.label}>
                <text
                  x="115"
                  y={barY + 14}
                  textAnchor="end"
                  className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200"
                >
                  {item.label}
                </text>

                <rect
                  x="125"
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill="#1c4e5e"
                  rx="1"
                />

                <text
                  x={125 + barWidth + 6}
                  y={barY + 15}
                  textAnchor="start"
                  className="text-[11.5px] font-black fill-[#1c4e5e] dark:fill-blue-400"
                >
                  {item.value}%
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-center">
        <span className="text-[11.5px] font-semibold text-slate-500 dark:text-slate-400">
          Reajustes praticados por 62% das empresas no setor
        </span>
      </div>
    </div>
  );
}

function StackedBar100Chart({
  title,
  data,
  categoryTag,
}: {
  title: string;
  data: { month: string; sim: number; nao: number }[];
  categoryTag?: string;
}) {
  return (
    <div className="bg-white dark:bg-[#0c162c] rounded-2xl border border-slate-200 dark:border-slate-800 p-4 md:p-5 shadow-sm flex flex-col justify-between h-full">
      <div>
        {categoryTag && (
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 block">
            {categoryTag}
          </span>
        )}
        <h3 className="text-[14px] md:text-[15px] font-extrabold text-slate-900 dark:text-white leading-snug mb-3 min-h-[40px]">
          {title}
        </h3>
      </div>

      <div className="w-full my-auto overflow-x-auto">
        <svg viewBox="0 0 440 220" className="w-full h-auto max-w-[420px] mx-auto font-sans select-none">
          <line x1="45" y1="20" x2="430" y2="20" stroke="#94a3b8" strokeDasharray="2 2" strokeWidth="0.8" opacity="0.35" />
          <text x="38" y="24" textAnchor="end" className="text-[11px] font-bold fill-slate-400">100%</text>

          <line x1="45" y1="60" x2="430" y2="60" stroke="#94a3b8" strokeDasharray="2 2" strokeWidth="0.8" opacity="0.25" />
          <text x="38" y="64" textAnchor="end" className="text-[11px] font-bold fill-slate-400">75%</text>

          <line x1="45" y1="100" x2="430" y2="100" stroke="#94a3b8" strokeDasharray="2 2" strokeWidth="0.8" opacity="0.25" />
          <text x="38" y="104" textAnchor="end" className="text-[11px] font-bold fill-slate-400">50%</text>

          <line x1="45" y1="140" x2="430" y2="140" stroke="#94a3b8" strokeDasharray="2 2" strokeWidth="0.8" opacity="0.25" />
          <text x="38" y="144" textAnchor="end" className="text-[11px] font-bold fill-slate-400">25%</text>

          <line x1="45" y1="180" x2="430" y2="180" stroke="#64748b" strokeWidth="1.2" />
          <text x="38" y="184" textAnchor="end" className="text-[11px] font-bold fill-slate-600 dark:fill-slate-300">0%</text>

          {data.map((item, idx) => {
            const barWidth = 36;
            const startX = 58 + idx * 53;
            const chartHeight = 160;
            const simHeight = (item.sim / 100) * chartHeight;
            const naoHeight = (item.nao / 100) * chartHeight;

            const naoY = 20;
            const simY = 180 - simHeight;

            return (
              <g key={item.month}>
                <rect
                  x={startX}
                  y={naoY}
                  width={barWidth}
                  height={naoHeight}
                  fill="#d96b18"
                  rx="1"
                />
                {item.nao >= 14 && (
                  <text
                    x={startX + barWidth / 2}
                    y={naoY + naoHeight / 2 + 4}
                    textAnchor="middle"
                    className="text-[11px] font-black fill-white pointer-events-none"
                  >
                    {item.nao}%
                  </text>
                )}

                <rect
                  x={startX}
                  y={simY}
                  width={barWidth}
                  height={simHeight}
                  fill="#1c4e5e"
                  rx="1"
                />
                {item.sim >= 12 ? (
                  <text
                    x={startX + barWidth / 2}
                    y={simY + simHeight / 2 + 4}
                    textAnchor="middle"
                    className="text-[11px] font-black fill-white pointer-events-none"
                  >
                    {item.sim}%
                  </text>
                ) : item.sim > 0 ? (
                  <text
                    x={startX + barWidth / 2}
                    y={simY + simHeight / 2 + 3}
                    textAnchor="middle"
                    className="text-[10px] font-extrabold fill-white pointer-events-none"
                  >
                    {item.sim}%
                  </text>
                ) : null}

                <text
                  x={startX + barWidth / 2}
                  y="200"
                  textAnchor="middle"
                  className="text-[10.5px] font-bold fill-slate-700 dark:fill-slate-300"
                >
                  {item.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex items-center justify-center gap-6 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#1c4e5e] inline-block" />
          <span className="text-[11.5px] font-bold text-slate-700 dark:text-slate-300">Sim</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#d96b18] inline-block" />
          <span className="text-[11.5px] font-bold text-slate-700 dark:text-slate-300">Não</span>
        </div>
      </div>
    </div>
  );
}



export function SondagemConjunturalView({ setActivePage }: SondagemConjunturalViewProps) {
  const [activeChart, setActiveChart] = useState<'reajustes' | 'uci'>('reajustes');

  const generateJsPdfFallback = () => {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
    
    // PAGE 1
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 210, 297, 'F');
    
    // Header Banner
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 22, 'F');
    doc.setTextColor(249, 115, 22);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Indicadores abinee', 15, 14);
    
    // Title
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('SONDAGEM CONJUNTURAL DO SETOR ELETROELETRÔNICO', 105, 32, { align: 'center' });
    doc.text('MAIO / 2026', 105, 38, { align: 'center' });
    
    // Subtitle box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, 43, 180, 18, 3, 3, 'FD');
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(185, 28, 28);
    const subText = 'Sondagem de maio aponta desempenhos distintos nos principais indicadores do setor e destaca a preocupação com o aumento das pressões sobre os custos de componentes e matérias-primas.';
    doc.text(doc.splitTextToSize(subText, 172), 19, 49);
    
    // Content Page 1
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('DADOS DA PESQUISA DE MAIO DE 2026', 15, 69);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    
    const p1Body = [
      '• Vendas e Encomendas: 52% das empresas indicaram crescimento nas vendas em relação a maio de 2025 (ante 46% na pesquisa anterior). Na comparação com o mês anterior (abr/26), 44% indicaram crescimento (ante 26%). Porém, 53% relataram negócios abaixo do esperado no mercado interno.',
      '',
      '• Capacidade Instalada: A utilização da capacidade instalada (UCI) recuou 1 p.p., passando de 77% em abril para 76% em maio.',
      '',
      '• Emprego: 83% das empresas apontaram estabilidade no nível de pessoal. 12% relataram crescimento no número de funcionários e 5% indicaram queda.',
      '',
      '• Estoques: Normalidade relatada por 70% das empresas em matérias-primas/componentes e por 62% em produtos acabados. Estoques de insumos abaixo do normal caíram de 13% para 8%.',
      '',
      '• Custos de Matérias-Primas: 57% das empresas relataram pressões nos custos de componentes e insumos (queda após 5 aumentos consecutivos, mas ainda em patamar elevado). Destaque para altas em memórias, plásticos, polímeros, PVC, resinas, derivados de petróleo e cobre.',
      '',
      '• Repasse de Preços: 62% das entrevistadas informaram que já reajustaram os preços de seus produtos finais em resposta à alta de custos. 63% dos reajustes acumulados entre dez/25 e mai/26 ficaram em até 10% (27% até 5% e 36% entre 6% e 10%).'
    ];
    
    let currentY = 75;
    p1Body.forEach(line => {
      if (line === '') {
        currentY += 2;
      } else {
        const split = doc.splitTextToSize(line, 180);
        doc.text(split, 15, currentY);
        currentY += split.length * 4.1;
      }
    });

    // Page 1 Footer
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Decon - Departamento de Economia | Cristina Tozzi Keller, Peterson Richard Monteiro e Sabrina Souza da Silva', 105, 285, { align: 'center' });
    doc.text('Página 1 de 2', 195, 285, { align: 'right' });

    // PAGE 2
    doc.addPage();
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 16, 'F');
    doc.setTextColor(249, 115, 22);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Indicadores abinee - Sondagem Conjuntural (Maio/2026)', 15, 11);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('COMÉRCIO INTERNACIONAL E EXPECTATIVAS 2026', 15, 26);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const p2Body = [
      '• Abastecimento de Insumos: 27% das empresas relataram dificuldades na aquisição de componentes e matérias-primas por falta no mercado, sendo as memórias os itens mais citados (devido ao aquecimento global impulsionado por Inteligência Artificial).',
      '',
      '• Comércio Exterior: 30% relataram crescimento nas exportações. 19% apontaram problemas no envio de cargas por via marítima. Nas importações, 23% indicaram atrasos no recebimento de cargas.',
      '',
      '• Capital de Giro: 26% comentaram dificuldades para obtenção de financiamentos de capital de giro. 64% das empresas pesquisadas não utilizam esses instrumentos.',
      '',
      '• Expectativas para 2026: 61% das empresas preveem crescimento nas vendas/encomendas no acumulado do ano de 2026. Porém, o otimismo vem desacelerando mês a mês (era 81% em dez/25). 23% esperam estabilidade e 16% queda. Industriais permanecem cautelosos devido a inflação, juros altos, desajuste fiscal e conflitos no Oriente Médio.'
    ];

    currentY = 32;
    p2Body.forEach(line => {
      if (line === '') {
        currentY += 3;
      } else {
        const split = doc.splitTextToSize(line, 180);
        doc.text(split, 15, currentY);
        currentY += split.length * 4.2;
      }
    });

    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Abinee/Decon – Publicado em 25/06/2026 | Fonte: Abinee', 105, 285, { align: 'center' });
    doc.text('Página 2 de 2', 195, 285, { align: 'right' });

    doc.save('Sondagem_Conjuntural_Eletroeletronico_Maio_2026_Abinee.pdf');
  };

  const handleDownloadPdf = () => {
    try {
      const link = document.createElement('a');
      link.href = encodeURI('/Sondagem Estrutural.pdf');
      link.download = 'Sondagem Estrutural.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      generateJsPdfFallback();
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-[13px] font-bold tracking-wider uppercase cursor-pointer hover:text-blue-600" onClick={() => setActivePage('Indústria do Setor Eletroeletrônico')}>Indústria Eletroeletrônica</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-[13px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">Sondagem Conjuntural</span>
          </div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">Sondagem Conjuntural</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">Acompanhamento do Nível de Atividade, Custos de Insumos e Expectativas (Abinee / Decon)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Capacidade Instalada (UCI)</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-blue-600 dark:text-blue-400 leading-none">76%</h3>
                <span className="text-[12px] text-slate-500">(-1 p.p.)</span>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">UCI em Maio/2026</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Pressão nos Custos</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-amber-600 dark:text-amber-400 leading-none">57%</h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Alta em insumos/componentes</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Reajuste de Preços</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-emerald-600 dark:text-emerald-400 leading-none">62%</h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Repassaram a produtos finais</p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. LEITURA ESTRATÉGICA SOBERANA BASEADA EM EVIDÊNCIAS */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm shrink-0">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Sondagem de Maio aponta <span className="text-blue-600 dark:text-blue-400">crescimento das vendas</span>, mas alerta para pressões de custos em matérias-primas e insumos.
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            {/* O que aconteceu e o que explica */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-slate-100 dark:text-slate-800/50 leading-none pointer-events-none select-none">
                01
              </div>
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  
                  <div className="pt-1">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que aconteceu e o que explica o resultado</h4>
                    <div className="inline-flex bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold">
                        Sondagem Conjuntural Abinee/Decon referentes a Maio de 2026.
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                    A Sondagem de maio apontou que <strong>52% das empresas relataram crescimento nas vendas e encomendas</strong> em relação ao mesmo mês do ano anterior (avanço de 6 p.p. em relação aos 46% de abril). Frente ao mês imediatamente anterior, <strong>44% indicaram alta</strong> (subindo de 26% em abril). Por outro lado, <strong>53% relataram negócios abaixo do esperado</strong> no mercado interno.
                  </p>
                  <p>
                    A <strong>Utilização da Capacidade Instalada (UCI)</strong> teve ligeira redução de 1 p.p., recuando de 77% em abril para <strong>76% em maio de 2026</strong>. No nível de emprego, a maioria absoluta (83%) registrou estabilidade, enquanto 12% relataram aumento de vagas.
                  </p>
                  <p>
                    Quanto aos <strong>custos de componentes e matérias-primas</strong>, 57% das empresas relataram pressões de alta em maio. Embora seja uma redução após 5 aumentos consecutivos, o patamar permanece elevado, impulsionado por memórias, plásticos, polímeros, PVC, resinas, derivados de petróleo e cobre. Como resposta, <strong>62% das empresas já reajustaram os preços de seus produtos finais</strong> (sendo 63% dos reajustes situados na faixa de até 10%).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* O que observar */}
              <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-8 shadow-sm flex flex-col">
                <div className="absolute top-8 right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
                  02
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
                          Abastecimento de componentes, frete marítimo e inflação de insumos.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      Deve-se acompanhar a escassez de componentes no mercado internacional (citada por 27% das empresas, com destaque para memórias impulsionadas pela demanda global por IA), atrasos nas importações (23%) e gargalos em fretes marítimos (19%).
                    </p>
                    <p>
                      Apesar de 61% das empresas projetarem crescimento de vendas em 2026, a cautela empresarial permanece elevada diante de juros altos, inadimplência e tensões geopolíticas no Oriente Médio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impacto Lorenzetti (Sempre com hipóteses) */}
              <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-blue-100 dark:border-blue-900/30 p-8 shadow-sm flex flex-col">
                <div className="absolute top-8 right-8 text-[44px] font-bold text-blue-50 dark:text-blue-900/20 leading-none pointer-events-none select-none">
                  03
                </div>
                <div className="flex flex-col gap-6 relative z-10 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    
                    <div className="pt-1 pr-12">
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a Lorenzetti</h4>
                      <div className="inline-flex bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg mt-1">
                        <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold">
                          Monitoramento de insumos plásticos/metálicos e calibração de preços.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      O aumento de custos em derivados de petróleo (polímeros, PVC e resinas) e cobre <strong className="text-slate-800 dark:text-slate-200">pode demandar monitoramento preventivo</strong> da estrutura de custos nas linhas de duchas, chuveiros e metais sanitários.
                    </p>
                    <p>
                      A decisão de reajuste praticada por 62% dos fabricantes concorrentes no setor (com concentração de 63% das altas em até 10%) <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades de adequação de margens</strong> e competitividade de preços.
                    </p>
                    <p>
                      A permanência de atrasos nas importações de componentes (23%) <strong className="text-slate-800 dark:text-slate-200">pode sugerir o fortalecimento</strong> dos estoques estratégicos de segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRÁFICO E DETALHAMENTO DE DADOS SONDAGEM */}
      <section className="bg-white dark:bg-[#111827] p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">
                Indicadores Detalhados de Sondagem (Maio/2026)
              </h2>
              <p className="text-[14px] text-slate-500 dark:text-slate-400">
                Acompanhamento dos 6 indicadores oficiais de Preços, Custos, Suprimentos e Comércio Exterior (Abinee / Decon)
              </p>
            </div>
          </div>
        </div>

        {/* GRID COM OS 6 GRÁFICOS SOLICITADOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Gráfico 1: Aumento médio nos preços de produtos finais */}
          <PriceIncreaseChart />

          {/* Gráfico 2: Dificuldades para adquirir componentes e matérias-primas */}
          <StackedBar100Chart
            categoryTag="ABASTECIMENTO & COMPONENTES"
            title="Empresas que tiveram dificuldades para adquirir componentes e matérias-primas"
            data={CHART_2_DIFICULDADE_INSUMOS}
          />

          {/* Gráfico 3: Pressões nos preços de componentes e matérias-primas */}
          <StackedBar100Chart
            categoryTag="PRESSÃO DE CUSTOS DE INSUMOS"
            title="Empresas que perceberam pressões nos preços de componentes e matérias-primas"
            data={CHART_3_PRESSAO_PRECOS}
          />

          {/* Gráfico 4: Elevação em outros custos (energia, água, impostos, etc) */}
          <StackedBar100Chart
            categoryTag="CUSTOS OPERACIONAIS & INFRA"
            title="Empresas que sentiram elevação em outros custos, como de energia, água, impostos, entre outros"
            data={CHART_4_OUTROS_CUSTOS}
          />

          {/* Gráfico 5: Exportações - Dificuldades no envio de cargas marítimas */}
          <StackedBar100Chart
            categoryTag="LOGÍSTICA INTERNACIONAL - EXPORTAÇÃO"
            title="Exportações - Empresas que tiveram dificuldades no envio de cargas marítimas"
            data={CHART_5_EXPORTACAO_CARGAS}
          />

          {/* Gráfico 6: Importações - Atrasos no recebimento de cargas */}
          <StackedBar100Chart
            categoryTag="LOGÍSTICA INTERNACIONAL - IMPORTAÇÃO"
            title="Importações - Empresas que verificaram atrasos no recebimento de cargas"
            data={CHART_6_IMPORTACAO_ATRASOS}
          />
        </div>

        {/* SÍNTESE EXECUTIVA DOS INDICADORES */}
        <div className="mt-6 bg-slate-50 dark:bg-[#0c162c] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-base flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            Síntese dos 6 Indicadores da Pesquisa Abinee/Decon (Maio/2026)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[13px] md:text-sm text-slate-600 dark:text-slate-300">
            <div className="bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <strong className="text-blue-600 dark:text-blue-400 block mb-1">Repasse e Ajuste de Preços:</strong>
              62% das empresas efetuaram reajustes nos preços dos produtos finais (com 63% dos aumentos concentrados em até 10%).
            </div>
            <div className="bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <strong className="text-amber-600 dark:text-amber-400 block mb-1">Pressão e Dificuldade de Insumos:</strong>
              57% relatam pressão nos preços de componentes e 27% enfrentaram dificuldades para aquisição de matérias-primas.
            </div>
            <div className="bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Gargalos de Comércio Exterior:</strong>
              23% registraram atrasos no recebimento de importações e 19% apontaram problemas no envio marítimo de exportações.
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIA OFICIAL</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Relatório técnico oficial da Sondagem Conjuntural Abinee/Decon que fundamenta os indicadores desta página.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {SONDAGEM_EVIDENCES.map((ev) => (
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
