import { useState } from 'react';
import { Target, TrendingDown, TrendingUp, ExternalLink, Search, Globe, Factory, FileText, Download, Building2, CheckCircle2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { EvidenceCard } from '../layout/EvidenceCard';
import { PRODUCAO_EVIDENCES } from '../../data/evidences/producao';

interface ProducaoIndustriaViewProps {
  setActivePage: (page: string) => void;
}



export function ProducaoIndustriaView({ setActivePage }: ProducaoIndustriaViewProps) {
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
    doc.text('PESQUISA INDUSTRIAL MENSAL - PRODUÇÃO FÍSICA', 105, 32, { align: 'center' });
    doc.text('IBGE – MAIO DE 2026', 105, 38, { align: 'center' });
    
    // Subtitle box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, 43, 180, 18, 3, 3, 'FD');
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(185, 28, 28);
    const subText = 'Produção industrial do setor eletroeletrônico recua 4,3% em maio de 2026, na comparação com o mesmo período de 2025, e acumula retração de 2,4% nos cinco primeiros meses do ano.';
    doc.text(doc.splitTextToSize(subText, 172), 19, 49);
    
    // Content Page 1
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('INDÚSTRIA ELÉTRICA E ELETRÔNICA', 15, 69);
    
    doc.setFontSize(10);
    doc.text('• Maio/2026:', 15, 76);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    
    const p1Body = [
      'A produção da indústria elétrica e eletrônica, conforme dados do IBGE agregados pela Abinee, cresceu 0,5% no mês de maio de 2026 em relação ao mês imediatamente anterior, com ajuste sazonal. Este aumento contou com a elevação de 2,6% da produção da área elétrica, visto que a área eletrônica caiu 2%.',
      '',
      'Ao comparar com maio de 2025, a produção recuou 4,3%, com retração de 8,7% na área eletrônica e leve redução de 0,1% na área elétrica.',
      '',
      'Na área eletrônica, destacou-se a queda de 24,6% na produção de componentes eletrônicos. Caiu também a produção de equipamentos de comunicação (-12,1%), de bens de informática e periféricos (-6,8%) e de instrumentos de medida (-5,1%). Já a produção de aparelhos para áudio e vídeo cresceu 1,1%.',
      '',
      'Na área elétrica, destacou-se a queda de 34,3% na produção de equipamentos elétricos. A produção de eletrodomésticos recuou 1,8%. Por outro lado, a produção de geradores, transformadores e motores elétricos cresceu 5,1%, seguida de iluminação (+4,6%), distribuição/controle (+1,7%) e pilhas/baterias (+0,5%).'
    ];
    
    let currentY = 82;
    p1Body.forEach(line => {
      if (line === '') {
        currentY += 3;
      } else {
        const split = doc.splitTextToSize(line, 180);
        doc.text(split, 15, currentY);
        currentY += split.length * 4.2;
      }
    });

    // Page 1 Footer
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Decon - Departamento de Economia | Cristina Tozzi Keller, Peterson Richard Monteiro e Sabrina Souza da Silva', 105, 285, { align: 'center' });
    doc.text('Página 1 de 3', 195, 285, { align: 'right' });

    // PAGE 2
    doc.addPage();
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 16, 'F');
    doc.setTextColor(249, 115, 22);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Indicadores abinee - Produção Física IBGE (Maio de 2026)', 15, 11);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('ACUMULADO JANEIRO-MAIO DE 2026', 15, 26);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const p2Body = [
      'No acumulado de janeiro a maio de 2026, a produção da indústria elétrica e eletrônica caiu 2,4% na comparação com igual período do ano passado. Este resultado foi consequência da queda de 3,3% na área eletrônica e da retração de 1,5% na área elétrica.',
      '',
      'Na área eletrônica, as maiores quedas foram na produção de componentes eletrônicos (-7,0%), de bens de informática e periféricos (-6,5%) e de equipamentos de comunicação (-4,9%). No caso de instrumentos de medida a redução foi de -0,2%. Já a produção de aparelhos para áudio e vídeo cresceu 2,8%.',
      '',
      'Na área elétrica, a retração mais expressiva foi na produção de equipamentos elétricos (-30,5%). Também foram observadas quedas na produção de geradores, transformadores e motores (-3,1%) e eletrodomésticos (-2,5%). Por outro lado, destacou-se o aumento de 18,5% na produção de iluminação, pilhas e baterias (+3,8%) e equipamentos para distribuição e controle (+2,7%).'
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

    // Summary Box with Data Table
    currentY += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('TABELA DETALHADA POR SEGMENTO E SUBSETOR (IBGE)', 15, currentY);
    currentY += 5;

    // Render Table Header
    doc.setFillColor(241, 245, 249);
    doc.rect(15, currentY, 180, 8, 'F');
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text('Segmento / Subsetor', 18, currentY + 5.5);
    doc.text('Mai/26 X Abr/26', 105, currentY + 5.5, { align: 'right' });
    doc.text('Mai/26 X Mai/25', 135, currentY + 5.5, { align: 'right' });
    doc.text('Jan-Mai/26 X 25', 165, currentY + 5.5, { align: 'right' });
    doc.text('Acum. 12 Meses', 192, currentY + 5.5, { align: 'right' });
    currentY += 8;

    const tableRows = [
      { name: 'TOTAL 26 + 27 - SETOR ELETROELETRÔNICO', m1: '+3,1%', m2: '-4,3%', m3: '-2,4%', m4: '-3,5%', bold: true, highlight: true },
      { name: 'TOTAL 26 - ÁREA ELETRÔNICA', m1: '+0,5%', m2: '-8,7%', m3: '-3,3%', m4: '-4,0%', bold: true },
      { name: '26.1 - Componentes eletrônicos', m1: '-21,1%', m2: '-24,6%', m3: '-7,0%', m4: '+8,8%' },
      { name: '26.2 - Equipamentos de informática e periféricos', m1: '+6,2%', m2: '-6,8%', m3: '-6,5%', m4: '-6,9%' },
      { name: '26.3 - Equipamentos de comunicação', m1: '+6,3%', m2: '-12,1%', m3: '-4,9%', m4: '-8,4%' },
      { name: '26.4 - Aparelhos de áudio e vídeo', m1: '-8,5%', m2: '+1,1%', m3: '+2,8%', m4: '-0,4%' },
      { name: '26.5 - Instrumentos de medida e teste', m1: '+2,7%', m2: '-5,1%', m3: '-0,2%', m4: '+0,7%' },
      { name: 'TOTAL 27 - ÁREA ELÉTRICA', m1: '+5,5%', m2: '-0,1%', m3: '-1,5%', m4: '-3,0%', bold: true },
      { name: '27.1 - Geradores, transformadores e motores', m1: '+7,9%', m2: '+5,1%', m3: '-3,1%', m4: '-4,6%' },
      { name: '27.2 - Pilhas, baterias e acumuladores', m1: '+4,7%', m2: '+0,5%', m3: '+3,8%', m4: '+2,0%' },
      { name: '27.3 - Equipamentos para distribuição e controle', m1: '+2,7%', m2: '+1,7%', m3: '+2,7%', m4: '+1,1%' },
      { name: '27.4 - Lâmpadas e equipamentos de iluminação', m1: '-3,0%', m2: '+4,6%', m3: '+18,5%', m4: '+2,2%' },
      { name: '27.5 - Eletrodomésticos', m1: '+6,2%', m2: '-1,8%', m3: '-2,5%', m4: '-4,8%' },
      { name: '27.9 - Equipamentos elétricos não especificados', m1: '+11,8%', m2: '-34,3%', m3: '-30,5%', m4: '-12,8%' }
    ];

    tableRows.forEach(row => {
      if (row.highlight) {
        doc.setFillColor(239, 246, 255);
        doc.rect(15, currentY, 180, 6, 'F');
      }
      doc.setFont('helvetica', row.bold ? 'bold' : 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(30, 41, 59);
      doc.text(row.name, 18, currentY + 4.5);
      doc.text(row.m1, 105, currentY + 4.5, { align: 'right' });
      doc.text(row.m2, 135, currentY + 4.5, { align: 'right' });
      doc.text(row.m3, 165, currentY + 4.5, { align: 'right' });
      doc.text(row.m4, 192, currentY + 4.5, { align: 'right' });
      doc.setDrawColor(241, 245, 249);
      doc.line(15, currentY + 6, 195, currentY + 6);
      currentY += 6;
    });

    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Decon - Departamento de Economia | Fonte: IBGE / Abinee – 03/07/2026', 105, 285, { align: 'center' });
    doc.text('Página 2 de 3', 195, 285, { align: 'right' });

    // PAGE 3
    doc.addPage();
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 16, 'F');
    doc.setTextColor(249, 115, 22);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Indicadores abinee - Indústria Geral vs Setor Eletroeletrônico', 15, 11);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('COMPARATIVO COM A INDÚSTRIA GERAL E CATEGORIAS ECONÔMICAS', 15, 26);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const p3Body = [
      'A produção da indústria geral recuou 0,2% no mês de maio de 2026 em relação ao mês imediatamente anterior, com ajuste sazonal.',
      '',
      'No acumulado dos primeiros cinco meses do ano, a produção da indústria geral cresceu 1,4% em relação ao igual período de 2025, estimulada pela indústria extrativa (+7,9%), visto que a indústria de transformação aumentou apenas 0,2%.',
      '',
      'Nota-se que estes resultados foram mais favoráveis do que o da indústria elétrica e eletrônica, que caiu 2,4% no período citado.',
      '',
      'No que se refere às categorias econômicas, verificou-se o recuo de 6,2% na produção de bens de capital. Já a produção de bens de consumo duráveis apontou crescimento de 0,6% neste mesmo período.'
    ];

    currentY = 32;
    p3Body.forEach(line => {
      if (line === '') {
        currentY += 3;
      } else {
        const split = doc.splitTextToSize(line, 180);
        doc.text(split, 15, currentY);
        currentY += split.length * 4.2;
      }
    });

    currentY += 8;
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(15, currentY, 180, 45, 3, 3, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('SÍNTESE DOS INDICADORES E CRÉDITOS OFICIAIS', 20, currentY + 8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    doc.text('• Documento elaborado pelo Departamento de Economia da Abinee (Decon).', 20, currentY + 16);
    doc.text('• Equipe Técnica: Cristina Tozzi Keller, Peterson Richard Monteiro e Sabrina Souza da Silva.', 20, currentY + 23);
    doc.text('• Data da publicação oficial: 03 de julho de 2026.', 20, currentY + 30);
    doc.text('• Fonte primária de dados: Instituto Brasileiro de Geografia e Estatística (IBGE) / PIM-PF.', 20, currentY + 37);

    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Copyright © Abinee - Associação Brasileira da Indústria Elétrica e Eletrônica', 105, 285, { align: 'center' });
    doc.text('Página 3 de 3', 195, 285, { align: 'right' });

    doc.save('Pesquisa_Industrial_Mensal_Maio_2026_Abinee.pdf');
  };

  const handleDownloadPdf = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Pesquisa_Industrial_Mensal_Maio_2026_Abinee.pdf';
      link.download = 'Pesquisa_Industrial_Mensal_Maio_2026_Abinee.pdf';
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
            <span className="text-[13px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">Produção da Indústria</span>
          </div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">Produção da Indústria</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">Pesquisa Industrial Mensal - Produção Física (IBGE / Abinee – Maio de 2026)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center shrink-0">
              <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Setor Eletroeletrônico</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-red-600 dark:text-red-400 leading-none">-4,3%</h3>
                <span className="text-[12px] text-slate-500">vs Mai/25</span>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Jan-Mai/26: -2,4%</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center shrink-0">
              <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Área Eletrônica</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-red-600 dark:text-red-400 leading-none">-8,7%</h3>
                <span className="text-[12px] text-slate-500">vs Mai/25</span>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Jan-Mai/26: -3,3%</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center shrink-0">
              <Factory className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Área Elétrica</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-amber-600 dark:text-amber-400 leading-none">-0,1%</h3>
                <span className="text-[12px] text-slate-500">vs Mai/25</span>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Jan-Mai/26: -1,5%</p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. LEITURA ESTRATÉGICA SOBERANA BASEADA EM EVIDÊNCIAS */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm shrink-0">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Produção industrial do setor eletroeletrônico <span className="text-red-600 dark:text-red-400">recua 4,3% em maio/2026</span> e acumula retração de 2,4%.
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
                    <Factory className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  
                  <div className="pt-1">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que aconteceu e o que explica o resultado</h4>
                    <div className="inline-flex bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold">
                        Dados IBGE agregados pela Abinee para Maio de 2026.
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                    A produção industrial do setor eletroeletrônico registrou retração de <strong>-4,3% em maio de 2026</strong> na comparação com maio de 2025. No acumulado dos primeiros cinco meses do ano (janeiro a maio de 2026), a queda foi de <strong>-2,4%</strong>. No acumulado em 12 meses, a produção apresenta recuo de <strong>-3,5%</strong>.
                  </p>
                  <p>
                    Na comparação mensal com ajuste sazonal (maio/2026 em relação a abril/2026), a produção teve um leve crescimento de <strong>+0,5%</strong>, impulsionada pela elevação de <strong>+2,6% na área elétrica</strong>, enquanto a área eletrônica recuou <strong>-2,0%</strong>.
                  </p>
                  <p>
                    A retração da área eletrônica (-8,7% vs Mai/25) foi fortemente puxada pela queda na produção de componentes eletrônicos (-24,6%), equipamentos de comunicação (-12,1%), bens de informática e periféricos (-6,8%) e instrumentos de medida (-5,1%), enquanto aparelhos de áudio e vídeo registraram alta de +1,1%.
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
                          Evolução da média móvel anual e comportamento dos bens de capital.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      Conforme aponta a Abinee/Decon, a média móvel anual da produção do setor aponta desaceleração e perda de dinamismo. Deve-se acompanhar o desempenho dos bens de capital (-6,2% no acumulado jan-mai/26) e o ajuste na produção de equipamentos eléticos e eletrônicos nos meses subsequentes.
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
                          Acompanhamento de demanda e planejamento de produção.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      A retração de -2,4% no acumulado do setor eletroeletrônico <strong className="text-slate-800 dark:text-slate-200">pode demandar acompanhamento rigoroso</strong> na gestão de estoques e ritmo fabril. O crescimento de +2,7% na produção de equipamentos para distribuição e controle de energia e +18,5% em equipamentos de iluminação <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades</strong> no segmento de materiais de instalação elétrica e soluções prediais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRÁFICO DE VARIAÇÃO DA PRODUÇÃO FÍSICA (JAN-MAI/2026 X JAN-MAI/2025) */}
      <section className="bg-white dark:bg-[#111827] p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <Factory className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <h2 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">Variação % da Produção Física</h2>
              <p className="text-[14px] text-slate-500 dark:text-slate-400">Comparativo Acumulado: jan-mai/2026 X jan-mai/2025</p>
            </div>
          </div>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-3 py-1.5 rounded-lg self-start md:self-auto">
            Fonte: IBGE / Abinee (Maio/2026)
          </span>
        </div>

        {/* CONTAINER DO GRÁFICO E SÍNTESE EM LAYOUT LADO A LADO */}
        <div className="bg-white dark:bg-[#0c162c] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* GRÁFICO SVG REPRODUZINDO A IMAGEM */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="text-center mb-2">
                <h3 className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Var % da Produção Física
                </h3>
                <p className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">
                  jan-mai/2026 X jan-mai/2025
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <svg viewBox="0 0 580 280" className="w-full h-auto max-w-[460px] mx-auto font-sans">
                  <defs>
                    <linearGradient id="orangeBarGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#c2410c" />
                    </linearGradient>
                    <linearGradient id="tealBarGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#226d83" />
                      <stop offset="100%" stopColor="#113e4c" />
                    </linearGradient>

                    <filter id="barShadow" x="-10%" y="-10%" width="130%" height="130%">
                      <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
                    </filter>
                  </defs>

                  {/* Linhas Guia Y */}
                  <line x1="80" y1="35" x2="540" y2="35" stroke="#334155" strokeWidth="1.5" />
                  <text x="70" y="40" textAnchor="end" className="text-[14px] font-bold fill-slate-800 dark:fill-slate-100">0%</text>

                  <line x1="75" y1="100" x2="80" y2="100" stroke="#64748b" strokeWidth="1.5" />
                  <text x="70" y="105" textAnchor="end" className="text-[14px] font-bold fill-slate-800 dark:fill-slate-100">-2%</text>

                  <line x1="75" y1="165" x2="80" y2="165" stroke="#64748b" strokeWidth="1.5" />
                  <text x="70" y="170" textAnchor="end" className="text-[14px] font-bold fill-slate-800 dark:fill-slate-100">-4%</text>

                  <line x1="75" y1="230" x2="80" y2="230" stroke="#64748b" strokeWidth="1.5" />
                  <text x="70" y="235" textAnchor="end" className="text-[14px] font-bold fill-slate-800 dark:fill-slate-100">-6%</text>

                  <line x1="80" y1="35" x2="80" y2="230" stroke="#334155" strokeWidth="1.5" />

                  {/* BARRA 1: Setor Eletroeletrônico (-2,4%) */}
                  <rect 
                    x="125" 
                    y="35" 
                    width="80" 
                    height="78" 
                    fill="url(#orangeBarGrad)" 
                    stroke="#9a3412" 
                    strokeWidth="1" 
                    rx="2"
                    filter="url(#barShadow)"
                  />
                  <text x="165" y="132" textAnchor="middle" className="text-[17px] font-extrabold fill-slate-900 dark:fill-white">-2,4%</text>
                  <text x="165" y="255" textAnchor="middle" className="text-[14px] font-bold fill-slate-900 dark:fill-white">Setor</text>
                  <text x="165" y="272" textAnchor="middle" className="text-[14px] font-bold fill-slate-900 dark:fill-white">Eletroeletrônico</text>

                  {/* BARRA 2: Área Eletrônica (-3,3%) */}
                  <rect 
                    x="270" 
                    y="35" 
                    width="80" 
                    height="107" 
                    fill="url(#tealBarGrad)" 
                    stroke="#0f2e38" 
                    strokeWidth="1" 
                    rx="2"
                    filter="url(#barShadow)"
                  />
                  <text x="310" y="161" textAnchor="middle" className="text-[17px] font-extrabold fill-slate-900 dark:fill-white">-3,3%</text>
                  <text x="310" y="255" textAnchor="middle" className="text-[14px] font-bold fill-slate-900 dark:fill-white">Área</text>
                  <text x="310" y="272" textAnchor="middle" className="text-[14px] font-bold fill-slate-900 dark:fill-white">Eletrônica</text>

                  {/* BARRA 3: Área Elétrica (-1,5%) */}
                  <rect 
                    x="415" 
                    y="35" 
                    width="80" 
                    height="49" 
                    fill="url(#tealBarGrad)" 
                    stroke="#0f2e38" 
                    strokeWidth="1" 
                    rx="2"
                    filter="url(#barShadow)"
                  />
                  <text x="455" y="103" textAnchor="middle" className="text-[17px] font-extrabold fill-slate-900 dark:fill-white">-1,5%</text>
                  <text x="455" y="255" textAnchor="middle" className="text-[14px] font-bold fill-slate-900 dark:fill-white">Área</text>
                  <text x="455" y="272" textAnchor="middle" className="text-[14px] font-bold fill-slate-900 dark:fill-white">Elétrica</text>
                </svg>
              </div>
            </div>

            {/* DETALHAMENTO DO GRÁFICO */}
            <div className="lg:col-span-7 lg:border-l border-slate-100 dark:border-slate-800 lg:pl-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                Síntese da Variação Acumulada no Período (Jan-Mai/2026)
              </h4>
              <p className="mb-3 text-[13px] md:text-sm">
                O gráfico reflete o desempenho da produção física industrial acumulado nos cinco primeiros meses de 2026 na comparação direta com o mesmo período do ano anterior:
              </p>
              <ul className="space-y-2.5 text-[13px] md:text-sm">
                <li className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <strong className="text-orange-600 dark:text-orange-400">Setor Eletroeletrônico (-2,4%):</strong> A produção total do setor acumula queda de 2,4%, impulsionada pelas retrações registradas em ambas as áreas do segmento.
                </li>
                <li className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <strong className="text-teal-600 dark:text-teal-400">Área Eletrônica (-3,3%):</strong> Registrou o recuo mais acentuado do setor, decorrente das maiores reduções na produção de componentes eletrônicos (-7,0%), bens de informática e periféricos (-6,5%) e equipamentos de comunicação (-4,9%).
                </li>
                <li className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <strong className="text-teal-600 dark:text-teal-400">Área Elétrica (-1,5%):</strong> Apresentou retração menor de 1,5%, fortemente influenciada pela queda na produção de equipamentos elétricos (-30,5%), geradores e motores (-3,1%) e eletrodomésticos (-2,5%), atenuada pelo crescimento em iluminação (+18,5%) e baterias (+3,8%).
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Relatório oficial completo que sustenta os dados apresentados nesta página.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {PRODUCAO_EVIDENCES.map((ev) => (
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
