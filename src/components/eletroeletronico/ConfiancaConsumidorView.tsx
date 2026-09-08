import { useState } from 'react';
import { Target, TrendingDown, ExternalLink, Search, Globe, Factory, FileText, Download, Eye, X, Printer, Building2, CheckCircle2, FileCheck } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { EvidenceCard } from '../layout/EvidenceCard';
import { CONFIANCA_EVIDENCES } from '../../data/evidences/confianca';

interface ConfiancaConsumidorViewProps {
  setActivePage: (page: string) => void;
}



export function ConfiancaConsumidorView({ setActivePage }: ConfiancaConsumidorViewProps) {
  const [selectedDocument, setSelectedDocument] = useState<boolean>(false);
  const [activePageTab, setActivePageTab] = useState<'all' | 'page1' | 'page2' | 'iframe'>('iframe');

  const generateJsPdfFallback = () => {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
    
    // Page 1
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(217, 119, 6);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Indicadores abinee', 15, 20);
    
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(12);
    doc.text('ÍNDICE DE CONFIANÇA DO EMPRESÁRIO INDUSTRIAL', 105, 35, { align: 'center' });
    doc.text('SETOR ELETROELETRÔNICO – ABRIL/2026', 105, 42, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const textP1 = 'O Índice de Confiança do Empresário Industrial (ICEI) do Setor Eletroeletrônico, conforme dados da CNI agregados pela Abinee, registrou 47,9 pontos no mês de abril de 2026, queda de 1,1 ponto em relação a março (49 pontos).\n\nCom a terceira queda consecutiva no ano, o ICEI do setor se distanciou ainda mais dos 50 pontos, reforçando o cenário de falta de confiança.\n\nÉ importante destacar que o índice de confiança do setor ficou abaixo da linha divisória de 50 pontos em quase todos os meses de 2025, com exceção apenas do mês de março (51,7 pontos), permanecendo nessa situação há treze meses seguidos.\n\nDADOS DE ABRIL/2026:\n- Setor Eletroeletrônico: 47,9 pts\n- Área Elétrica: 49,3 pts\n- Área Eletrônica: 46,3 pts\n- Indústria Geral: 45,2 pts\n\nFonte: Abinee/Decon – 29/04/2026';
    
    doc.text(doc.splitTextToSize(textP1, 180), 15, 55);
    doc.save('Relatorio_Abinee_ICEI_Abril_2026.pdf');
  };

  const handleDownloadPdf = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Relatorio_Abinee_ICEI_Abril_2026.pdf?download=true';
      link.download = 'Relatorio_Abinee_ICEI_Abril_2026.pdf';
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
            <span className="text-[13px] font-bold tracking-wider uppercase">Monitoramento Estratégico</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-[13px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">ICEI - Abril/2026</span>
          </div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">Confiança do Empresário (ICEI)</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">Índice de Confiança do Empresário Industrial - Setor Eletroeletrônico</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center shrink-0">
              <Factory className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Setor Eletroeletrônico</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-slate-700 dark:text-slate-300 leading-none">47,9 pts</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Abaixo de 50 (Falta de Confiança)</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Área Elétrica</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-orange-600 dark:text-orange-400 leading-none">49,3 pts</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Migrou para falta de confiança</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center shrink-0">
              <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Área Eletrônica</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-red-600 dark:text-red-400 leading-none">46,3 pts</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Queda agravada</p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm shrink-0">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">Confiança do setor <span className="text-blue-600 dark:text-blue-400">recua pelo terceiro mês</span> consecutivo.</h2>
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
                  <TrendingDown className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                
                <div className="pt-1">
                  <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que aconteceu e o que explica o resultado</h4>
                  <div className="inline-flex bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg mt-1">
                    <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold">
                      Terceira queda seguida no ano, permanecendo abaixo de 50 pontos há 13 meses.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                <p>O ICEI do Setor Eletroeletrônico registrou <strong className="text-slate-800 dark:text-slate-200">47,9 pontos em abril de 2026</strong>, uma queda de 1,1 ponto em relação a março. A área elétrica recuou de 50,4 para 49,3 pontos, migrando de volta para o estado de falta de confiança, enquanto a área eletrônica caiu de 47,4 para 46,3 pontos.</p>
                <p>Esses resultados apontam que, com exceção de março de 2025, o setor eletroeletrônico permanece em estado de pessimismo ininterrupto, refletindo também a queda do ICEI da Indústria Geral, que marcou 45,2 pontos em abril.</p>
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
                      Acompanhar se a área elétrica retoma os 50 pontos.
                    </span>
                  </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>A linha divisória de 50 pontos é o <strong className="text-slate-800 dark:text-slate-200">marco entre confiança e falta de confiança</strong>. O retorno da área elétrica para baixo desse patamar sinaliza uma possível contração ou cautela extrema nos investimentos e contratações do setor, devendo ser monitorada nas próximas edições do ICEI.</p>
                </div>
              </div>
            </div>

            {/* Impacto */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-red-50 dark:text-red-900/20 leading-none pointer-events-none select-none">
                03
              </div>
              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a empresa</h4>
                  <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                    <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                      Impacto nas decisões de investimento e demanda B2B.
                    </span>
                  </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>Este pessimismo contínuo <strong className="text-slate-800 dark:text-slate-200">pode gerar impactos nas decisões de investimento</strong> e expansão ao longo da cadeia produtiva. Pode representar um risco de desaquecimento da demanda e exigir maior acompanhamento no planejamento de novos materiais elétricos e eletrônicos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* 2. COMPONENTES E EVOLUÇÃO DO ICEI */}
      <section className="bg-white dark:bg-[#111827] p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <Factory className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <h2 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">Componentes do ICEI</h2>
              <p className="text-[14px] text-slate-500 dark:text-slate-400">Gráfico Oficial do Índice de Confiança do Empresário Industrial (Abril/2026)</p>
            </div>
          </div>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-3 py-1.5 rounded-lg self-start md:self-auto">
            Fonte: Abinee / CNI
          </span>
        </div>

        {/* CONTAINER REPRODUZINDO O GRÁFICO E SÍNTESE EM LADO A LADO */}
        <div className="bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800/80 p-4 md:p-6 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* COLUNA ESQUERDA: GRÁFICO SVG */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="text-center mb-2 font-sans">
                <h3 className="text-[16px] md:text-[18px] font-black text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
                  ICEI - Índice de Confiança do Empresário Industrial
                </h3>
                <p className="text-[13px] font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                  Indústria Geral<sup>*</sup> e Setor Eletroeletrônico<sup>**</sup>
                </p>
                <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Índice de 0 a 100<sup>***</sup> (Série Histórica abr/20 a abr/26)
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <svg viewBox="0 20 630 365" className="w-full h-auto font-sans select-none max-w-[560px] mx-auto">
                  {/* FLECHA SUPERIOR (VERDE/AZUL ESCURO) - CONFIANÇA */}
                  <g transform="translate(15, 75)">
                    <path d="M 15 0 L 30 22 L 21 22 L 21 55 L 9 55 L 9 22 L 0 22 Z" fill="#0d525f" />
                  </g>

                  {/* FLECHA INFERIOR (LARANJA) - FALTA DE CONFIANÇA */}
                  <g transform="translate(15, 175)">
                    <path d="M 9 0 L 21 0 L 21 33 L 30 33 L 15 55 L 0 33 L 9 33 Z" fill="#e65c00" />
                  </g>

                  {/* EIXO Y */}
                  <line x1="80" y1="55" x2="80" y2="250" stroke="#475569" strokeWidth="1.5" />
                  
                  {/* TICKS E RÓTULOS DO EIXO Y */}
                  <g textAnchor="end" fontSize="13" fontWeight="bold" className="fill-slate-800 dark:fill-slate-200">
                    <text x="72" y="60">70</text>
                    <text x="72" y="108">60</text>
                    <text x="72" y="158">50</text>
                    <text x="72" y="205">40</text>
                    <text x="72" y="254">30</text>
                  </g>

                  {/* LINHA DE 50 PONTOS (EIXO NEUTRO) */}
                  <line x1="80" y1="154" x2="615" y2="154" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* TEXTO CONFIANÇA / FALTA DE CONFIANÇA NO GRÁFICO */}
                  <text x="320" y="112" fill="#0d525f" fontSize="14" fontWeight="extrabold">confiança</text>
                  <text x="290" y="208" fill="#e65c00" fontSize="14" fontWeight="extrabold">falta de confiança</text>

                  {/* VALORES DESTAQUE EM AZUL */}
                  <text x="495" y="174" fill="#0284c7" fontSize="13" fontWeight="black">48,6</text>
                  <text x="588" y="174" fill="#0284c7" fontSize="13" fontWeight="black">47,9</text>

                  {/* LINHA 1: INDÚSTRIA GERAL (CINZA) */}
                  <path
                    d="M 85 240 L 98 238 L 115 170 L 132 105 L 148 112 L 165 98 L 180 125 L 198 132 L 215 105 L 230 100 L 248 122 L 265 125 L 280 132 L 298 135 L 315 125 L 332 98 L 350 148 L 368 165 L 385 170 L 400 162 L 418 145 L 435 158 L 452 148 L 470 152 L 485 168 L 500 140 L 518 162 L 535 170 L 552 178 L 570 182 L 585 175 L 600 192"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* LINHA 2: SETOR ELETROELETRÔNICO (AZUL) */}
                  <path
                    d="M 85 248 L 98 253 L 115 175 L 132 95 L 148 112 L 165 90 L 180 108 L 198 132 L 215 138 L 230 108 L 248 98 L 265 122 L 280 135 L 298 122 L 315 130 L 332 108 L 350 178 L 368 132 L 385 132 L 400 142 L 418 122 L 435 145 L 452 152 L 470 170 L 485 132 L 500 150 L 518 170 L 535 172 L 552 165 L 570 148 L 585 152 L 600 162"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* EIXO X */}
                  <line x1="80" y1="250" x2="615" y2="250" stroke="#475569" strokeWidth="1.5" />

                  {/* TICKS E ROTULOS DO EIXO X */}
                  <g textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-slate-800 dark:fill-slate-200">
                    <line x1="98" y1="250" x2="98" y2="255" stroke="#475569" strokeWidth="1" />
                    <text x="98" y="270">abr/20</text>

                    <line x1="180" y1="250" x2="180" y2="255" stroke="#475569" strokeWidth="1" />
                    <text x="180" y="270">abr/21</text>

                    <line x1="265" y1="250" x2="265" y2="255" stroke="#475569" strokeWidth="1" />
                    <text x="265" y="270">abr/22</text>

                    <line x1="350" y1="250" x2="350" y2="255" stroke="#475569" strokeWidth="1" />
                    <text x="350" y="270">abr/23</text>

                    <line x1="435" y1="250" x2="435" y2="255" stroke="#475569" strokeWidth="1" />
                    <text x="435" y="270">abr/24</text>

                    <line x1="520" y1="250" x2="520" y2="255" stroke="#475569" strokeWidth="1" />
                    <text x="520" y="270">abr/25</text>

                    <line x1="595" y1="250" x2="595" y2="255" stroke="#475569" strokeWidth="1" />
                    <text x="595" y="270">abr/26</text>
                  </g>

                  {/* LEGENDA DAS LINHAS */}
                  <g transform="translate(130, 302)">
                    <line x1="0" y1="0" x2="35" y2="0" stroke="#64748b" strokeWidth="3.5" />
                    <text x="43" y="4" fontSize="13" fontWeight="extrabold" className="fill-slate-900 dark:fill-slate-100">Indústria Geral</text>

                    <line x1="230" y1="0" x2="265" y2="0" stroke="#0284c7" strokeWidth="4" />
                    <text x="273" y="4" fontSize="13" fontWeight="extrabold" fill="#0284c7">Setor Eletroeletrônico</text>
                  </g>

                  {/* NOTAS DE RODAPÉ DO GRÁFICO */}
                  <g transform="translate(150, 335)" fontSize="10.5" className="fill-slate-600 dark:fill-slate-400">
                    <text x="0" y="0">* dados CNI | ** dados CNI, agregação ABINEE</text>
                    <text x="0" y="15">*** valores acima de 50 pontos indicam confiança e abaixo mostram falta de confiança</text>
                  </g>

                  <text x="615" y="378" textAnchor="end" fontSize="11.5" fontWeight="black" className="fill-slate-800 dark:fill-slate-200">
                    Fonte: Abinee/CNI
                  </text>
                </svg>
              </div>
            </div>

            {/* COLUNA DIREITA: SÍNTESE E DETALHAMENTO DO ICEI */}
            <div className="lg:col-span-5 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                Síntese da Confiança Industrial (Abril/2026)
              </h4>
              <p className="mb-3 text-[13px] md:text-sm">
                O gráfico de evolução histórica do ICEI demonstra a permanência dos índices abaixo do divisor neutro de 50 pontos:
              </p>
              
              <div className="space-y-2.5">
                <div className="bg-white dark:bg-[#111827] p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200">Setor Eletroeletrônico</span>
                    <span className="text-[14px] font-black text-amber-600 dark:text-amber-400">47,9 pts</span>
                  </div>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-tight">
                    Recuo de 2,2 pontos em relação a março/26 (50,1 pts), retornando à zona de falta de confiança.
                  </p>
                </div>

                <div className="bg-white dark:bg-[#111827] p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200">Indústria Geral (CNI)</span>
                    <span className="text-[14px] font-black text-amber-600 dark:text-amber-400">48,6 pts</span>
                  </div>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-tight">
                    Recuo de 2,3 pontos comparado a março/26 (50,9 pts), sinalizando cautela abrangente na indústria.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-white dark:bg-[#111827] p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                    <span className="text-[11px] font-bold text-slate-500 uppercase block">Área Elétrica</span>
                    <span className="text-[15px] font-black text-slate-800 dark:text-slate-200">49,6 pts</span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 block font-semibold">Falta de confiança</span>
                  </div>
                  <div className="bg-white dark:bg-[#111827] p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                    <span className="text-[11px] font-bold text-slate-500 uppercase block">Área Eletrônica</span>
                    <span className="text-[15px] font-black text-slate-800 dark:text-slate-200">46,7 pts</span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 block font-semibold">Falta de confiança</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Notícias e relatórios oficiais em anexo que fundamentam esta visão estratégica.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {CONFIANCA_EVIDENCES.map((ev) => (
            <EvidenceCard 
              key={ev.id} 
              evidence={ev} 
              onViewPdf={ev.isPdf ? () => setSelectedDocument(true) : undefined}
              onDownloadPdf={ev.isPdf ? handleDownloadPdf : undefined}
            />
          ))}
        </div>
      </section>

      {/* MODAL DE VISUALIZAÇÃO E DOWNLOAD DO RELATÓRIO PDF OFICIAL DA ABINEE */}
      {selectedDocument && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-3 md:p-6 overflow-y-auto">
          <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[94vh] flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">
            
            {/* BARRA DE TÍTULO E AÇÕES DO MODAL */}
            <div className="p-4 md:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded">
                      Documento Oficial Abinee (PDF)
                    </span>
                    <span className="text-xs text-slate-400">29/04/2026</span>
                  </div>
                  <h3 className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white leading-tight mt-0.5">
                    ÍNDICE DE CONFIANÇA DO EMPRESÁRIO INDUSTRIAL SETOR ELETROELETRÔNICO – ABRIL/2026
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={handleDownloadPdf}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                  title="Baixar arquivo PDF oficial completo"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar PDF (.pdf)</span>
                </button>

                <button
                  onClick={() => window.open('/Relatorio_Abinee_ICEI_Abril_2026.pdf', '_blank')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all"
                  title="Abrir arquivo PDF diretamente em nova aba do navegador"
                >
                  <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="hidden sm:inline">Nova Aba</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all"
                  title="Imprimir documento"
                >
                  <Printer className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span className="hidden sm:inline">Imprimir</span>
                </button>

                <button
                  onClick={() => setSelectedDocument(false)}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* BARRA DE NAVEGAÇÃO DE MODO E PÁGINAS DO PDF */}
            <div className="bg-slate-100 dark:bg-slate-950 px-5 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 overflow-x-auto">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Modo de Exibição:</span>
                <div className="flex items-center gap-1 bg-white dark:bg-slate-900 rounded-lg p-0.5 border border-slate-200 dark:border-slate-800 shrink-0">
                  <button
                    onClick={() => setActivePageTab('iframe')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all ${activePageTab === 'iframe' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    Visualizador PDF Original
                  </button>
                  <button
                    onClick={() => setActivePageTab('all')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all ${activePageTab === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    Páginas 1 & 2
                  </button>
                  <button
                    onClick={() => setActivePageTab('page1')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all ${activePageTab === 'page1' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    Página 1
                  </button>
                  <button
                    onClick={() => setActivePageTab('page2')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all ${activePageTab === 'page2' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    Página 2
                  </button>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-400">
                <FileCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Documento PDF Anexado (Decon/Abinee)</span>
              </div>
            </div>

            {/* CORPO DO DOCUMENTO OU LEITOR DE PDF */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-100 dark:bg-slate-950 flex flex-col gap-6">
              
              {/* SEÇÃO VISUALIZADOR IFRAME DO ARQUIVO PDF */}
              {activePageTab === 'iframe' && (
                <div className="w-full flex flex-col items-center gap-3">
                  <div className="w-full flex items-center justify-between bg-blue-50 dark:bg-blue-950/60 p-3 rounded-xl border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200">
                    <span>Exibindo o arquivo PDF oficial anexado <strong>Relatorio_Abinee_ICEI_Abril_2026.pdf</strong>.</span>
                    <button
                      onClick={handleDownloadPdf}
                      className="inline-flex items-center gap-1 font-bold text-blue-700 dark:text-blue-300 underline hover:text-blue-900"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Baixar PDF Anexado
                    </button>
                  </div>
                  <iframe 
                    src="/Relatorio_Abinee_ICEI_Abril_2026.pdf?v=2" 
                    className="w-full h-[700px] rounded-xl border border-slate-300 dark:border-slate-800 shadow-md bg-white"
                    title="Relatório PDF Oficial Abinee"
                  />
                </div>
              )}

              {/* PÁGINA 1 DO DOCUMENTO */}
              {(activePageTab === 'all' || activePageTab === 'page1') && (
                <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-md max-w-4xl mx-auto w-full flex flex-col items-center gap-2">
                  <div className="w-full flex justify-between items-center px-2 py-1 border-b border-slate-100 text-[12px] font-bold text-slate-500">
                    <span>PÁGINA 1 DE 2 - DOCUMENTO ANEXADO</span>
                    <span>Abinee/Decon - 29/04/2026</span>
                  </div>
                  <img 
                    src="/page1.png?v=2" 
                    alt="Relatório Abinee ICEI Abril 2026 - Página 1" 
                    className="w-full h-auto rounded shadow-xs border border-slate-200" 
                  />
                </div>
              )}

              {/* PÁGINA 2 DO DOCUMENTO */}
              {(activePageTab === 'all' || activePageTab === 'page2') && (
                <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-md max-w-4xl mx-auto w-full flex flex-col items-center gap-2">
                  <div className="w-full flex justify-between items-center px-2 py-1 border-b border-slate-100 text-[12px] font-bold text-slate-500">
                    <span>PÁGINA 2 DE 2 - DOCUMENTO ANEXADO</span>
                    <span>Abinee/Decon - 29/04/2026</span>
                  </div>
                  <img 
                    src="/page2.png?v=2" 
                    alt="Relatório Abinee ICEI Abril 2026 - Página 2" 
                    className="w-full h-auto rounded shadow-xs border border-slate-200" 
                  />
                </div>
              )}

            </div>

            {/* RODAPÉ DO MODAL COM BOTÕES DE AÇÃO */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Fonte original: Abinee - Associação Brasileira da Indústria Elétrica e Eletrônica
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadPdf}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Arquivo PDF</span>
                </button>
                <button
                  onClick={() => setSelectedDocument(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-white rounded-xl text-xs font-bold transition-all"
                >
                  Fechar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
