import { balancoComercialData } from "../../data/eletroeletronico/balancoComercial";
import { useState } from 'react';
import { BALANCO_EVIDENCES } from '../../data/evidences/balanco';
import { 
  ArrowRightLeft, 
  Ship, 
  Globe, 
  Building2, 
  CheckCircle2, 
  Download, 
  FileText, 
  TrendingDown, 
  BarChart3, 
  ArrowUpRight, 
  Activity, 
  Search,
  Target,
  Layers,
  ArrowDownLeft,
  Cpu,
  Zap,
  TrendingUp,
  Package,
  AlertTriangle,
  Rocket,
  Shield,
  Quote,
  DollarSign,
  Star,
  ArrowRight,
  Scale,
  ExternalLink
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { EvidenceCard } from '../layout/EvidenceCard';

interface BalancoComercialViewProps {
  setActivePage: (page: string) => void;
}



// Dados Oficiais por Região / Bloco Econômico (Jan-Jun/2026)
const REGIOES_DATA = [
  { regiao: 'Estados Unidos', exp: 1199.1, expVar: 9.9, expPart: '29%', imp: 2214.2, impVar: -8.7, impPart: '9%', saldo: -1015.0 },
  { regiao: 'Aladi (Total)', exp: 1639.0, expVar: -4.3, expPart: '40%', imp: 1581.6, impVar: 40.0, impPart: '6%', saldo: 57.3, highlight: true },
  { regiao: '  - Argentina', exp: 661.5, expVar: -12.3, expPart: '16%', imp: 67.2, impVar: -22.3, impPart: '0%', saldo: 594.3, isSub: true },
  { regiao: '  - Outros Aladi', exp: 977.4, expVar: 2.0, expPart: '24%', imp: 1514.5, impVar: 45.1, impPart: '6%', saldo: -537.0, isSub: true },
  { regiao: 'União Europeia', exp: 444.1, expVar: 20.9, expPart: '11%', imp: 3190.2, impVar: -5.0, impPart: '12%', saldo: -2746.1 },
  { regiao: 'Ásia (Total ex. Oriente Médio)', exp: 444.6, expVar: 59.2, expPart: '11%', imp: 17953.3, impVar: 9.7, impPart: '70%', saldo: -17508.7, highlight: true },
  { regiao: '  - China', exp: 92.1, expVar: 45.3, expPart: '2%', imp: 11132.5, impVar: 1.8, impPart: '43%', saldo: -11040.4, isSub: true },
  { regiao: '  - Outros Ásia', exp: 352.6, expVar: 63.3, expPart: '9%', imp: 6820.8, impVar: 25.6, impPart: '26%', saldo: -6468.2, isSub: true },
  { regiao: 'Demais Países do Mundo', exp: 396.0, expVar: 9.6, expPart: '10%', imp: 828.3, impVar: 5.7, impPart: '3%', saldo: -432.3 },
  { regiao: 'TOTAL DO SETOR', exp: 4122.8, expVar: 8.2, expPart: '100%', imp: 25767.7, impVar: 7.1, impPart: '100%', saldo: -21644.9, isTotal: true }
];

// Dados dos Produtos Mais Exportados (Jan-Jun/2026)
const PRODUTOS_EXPORTADOS = [
  { pos: 1, produto: 'Transformadores Elétricos', val: 533, var: 26, dest: 'Estados Unidos (75% / US$ 399 mi)', categoria: 'GTD (Energia)' },
  { pos: 2, produto: 'Eletrônica Embarcada', val: 404, var: -5, dest: 'América Latina e Mercosul', categoria: 'Componentes' },
  { pos: 3, produto: 'Motores e Geradores Elétricos', val: 331, var: 1, dest: 'Estados Unidos (US$ 97 mi) e Aladi', categoria: 'Equipamentos Industriais' },
  { pos: 4, produto: 'Componentes para Equipamentos Industriais', val: 307, var: 6, dest: 'EUA (US$ 69 mi) e União Europeia', categoria: 'Equipamentos Industriais' },
  { pos: 5, produto: 'Instrumentos de Medida', val: 181, var: 24, dest: 'EUA (US$ 56 mi) e América Latina', categoria: 'Automação Industrial' },
  { pos: 6, produto: 'Componentes para Material de Instalação', val: 167, var: 8, dest: 'Mercosul e Países Vizinhos', categoria: 'Material de Instalação' },
  { pos: 7, produto: 'Motocompressores Herméticos', val: 113, var: -23, dest: 'América Latina e EUA', categoria: 'Refrigeração / Indústria' },
  { pos: 8, produto: 'Componentes Passivos', val: 112, var: 24, dest: 'América Latina e Europa', categoria: 'Componentes Elétricos' },
  { pos: 9, produto: 'Sucata Elétrica e Eletrônica (Recuperação)', val: 93, var: 93, dest: 'Europa e Ásia (Recuperação Metal)', categoria: 'Reciclagem de Metais' },
  { pos: 10, produto: 'Máquinas para Processamento de Dados', val: 91, var: 19, dest: 'EUA (US$ 54 mi) e América Latina', categoria: 'Informática' }
];

// Áreas do Setor em Exportações (Jan-Jun/2026)
const AREAS_EXPORTACAO = [
  { area: 'Automação Industrial', val: 416.4, var: 22.2, destaque: 'Instrumentos de medida (+24% / US$ 181 mi)' },
  { area: 'Componentes', val: 1511.7, var: 3.8, destaque: 'Componentes passivos (+24%) e Sucata eletrônica (+93%)' },
  { area: 'Equipamentos Industriais', val: 836.3, var: 17.1, destaque: 'Aparelhos para filtrar gases (+529%) e Motores (US$ 331 mi)' },
  { area: 'GTD (Geração, Transm., Distrib.)', val: 807.1, var: 14.7, destaque: 'Transformadores (+26% / US$ 533 mi)' },
  { area: 'Informática', val: 167.7, var: -2.2, destaque: 'Queda em cartões inteligentes (-38%)' },
  { area: 'Material de Instalação', val: 47.8, var: -2.3, destaque: 'Queda em fusíveis (-56%)' },
  { area: 'Telecomunicações', val: 153.9, var: -9.3, destaque: 'Impactado por cabos de telecom (-56%)' },
  { area: 'Utilidades Domésticas', val: 181.8, var: -11.8, destaque: 'Impactado por refrigeradores (-57%)' }
];

// Dados dos Produtos Mais Importados (Jan-Jun/2026)
const PRODUTOS_IMPORTADOS = [
  { pos: 1, produto: 'Semicondutores', val: 4251, var: 45, orig: 'Ásia (China, Taiwan, Coreia) e EUA', uso: 'Base para produção de placas e circuitos' },
  { pos: 2, produto: 'Componentes para Informática', val: 1785, var: 7, orig: 'Ásia e China', uso: 'Placas-mãe e conectores de sistemas' },
  { pos: 3, produto: 'Eletrônica Embarcada', val: 1724, var: 6, orig: 'Ásia e União Europeia', uso: 'Módulos de controle automotivo e industrial' },
  { pos: 4, produto: 'Componentes para Telecomunicações', val: 1333, var: -5, orig: 'China e Ásia', uso: 'Infraestrutura de redes e antenas' },
  { pos: 5, produto: 'Instrumentos de Medida', val: 1328, var: 4, orig: 'União Europeia e EUA', uso: 'Testes de precisão e controle de processo' },
  { pos: 6, produto: 'Máquinas para Processamento de Dados', val: 1041, var: 47, orig: 'China e Ásia', uso: 'Servidores e processadores de dados' },
  { pos: 7, produto: 'Componentes para Equipamentos Industriais', val: 822, var: 7, orig: 'União Europeia e Ásia', uso: 'Automação de máquinas e painéis' },
  { pos: 8, produto: 'Aparelhos Eletromédicos', val: 747, var: 4, orig: 'EUA e União Europeia', uso: 'Diagnóstico e equipamentos de saúde' },
  { pos: 9, produto: 'Componentes para Material de Instalação', val: 560, var: -5, orig: 'China e Europa', uso: 'Materiais e conectores de instalação' },
  { pos: 10, produto: 'Acumuladores (Baterias Elétricas)', val: 549, var: 48, orig: 'China e Ásia', uso: 'Armazenamento de energia e no-breaks' }
];

// Áreas do Setor em Importações (Jan-Jun/2026)
const AREAS_IMPORTACAO = [
  { area: 'Componentes', val: 13271.9, var: 10.3, destaque: 'Representa 52% das importações totais do setor (Semicondutores US$ 4,25 bi)' },
  { area: 'Automação Industrial', val: 3139.5, var: 6.5, destaque: 'Aparelhos eletromédicos (+16%) e quadros elétricos' },
  { area: 'Equipamentos Industriais', val: 3053.2, var: 4.9, destaque: 'Acumuladores e baterias (+48%)' },
  { area: 'Informática', val: 1782.5, var: 32.3, destaque: 'Processamento de dados (+47%) e memória (+54%)' },
  { area: 'Utilidades Domésticas', val: 1438.0, var: 7.2, destaque: 'Equipamentos de áudio e vídeo (+27%)' },
  { area: 'Telecomunicações', val: 1422.4, var: 2.6, destaque: 'Telefones celulares (+40% em importação)' },
  { area: 'GTD (Geração, Transm., Distrib.)', val: 1216.9, var: -26.9, destaque: 'Queda em módulos fotovoltaicos (-39% / de US$ 897 mi para US$ 548 mi)' },
  { area: 'Material de Instalação', val: 443.4, var: 3.5, destaque: 'Lâmpadas (+7%) e disjuntores (-14%)' }
];

export function BalancoComercialView({ setActivePage }: BalancoComercialViewProps) {
  const generateJsPdfReport = () => {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
    
    // PAGE 1: Capa & Síntese Executiva
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(0, 0, 210, 297, 'F');
    
    // Header Banner
    doc.setFillColor(30, 58, 138); // blue-900
    doc.rect(0, 0, 210, 28, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold');
    doc.text('ABINEE - DECON / RELATÓRIO OFICIAL', 15, 15);
    
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    doc.text('Departamento de Economia da Abinee | SECEX - MDIC | 28/07/2026', 15, 22);

    // Document Title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('BALANÇA COMERCIAL DE PRODUTOS DO SETOR ELÉTRICO E ELETRÔNICO', 105, 38, { align: 'center' });
    doc.setFontSize(11);
    doc.setTextColor(147, 197, 253);
    doc.text('ACUMULADO JANEIRO-JUNHO/2026 & MÊS DE JUNHO DE 2026', 105, 45, { align: 'center' });
    
    // Summary Box
    doc.setFillColor(30, 41, 59);
    doc.setDrawColor(51, 65, 85);
    doc.roundedRect(15, 52, 180, 26, 3, 3, 'FD');
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(52, 211, 153); // emerald
    doc.text('Exportações (1º Sem/26): US$ 4,12 Bi (+8,2%)', 22, 60);
    
    doc.setTextColor(251, 146, 60); // orange
    doc.text('Importações (1º Sem/26): US$ 25,77 Bi (+7,1%)', 108, 60);
    
    doc.setFontSize(10.5);
    doc.setTextColor(248, 113, 113); // red
    doc.text('Déficit Comercial Acumulado: -US$ 21,64 Bi (+6,9% no déficit)', 105, 70, { align: 'center' });

    // Section 1: RESUMO DOS RESULTADOS
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(96, 165, 250);
    doc.text('1. RESUMO DOS RESULTADOS DO 1º SEMESTRE DE 2026', 15, 86);

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(203, 213, 225);

    const mainSummaryText = [
      '• Exportações Totais: Somaram US$ 4.122,8 milhões no acumulado do 1º semestre de 2026, com alta de 8,2% em relação a igual período de 2025 (US$ 3.811,2 milhões). Em Junho/2026 isolado, as exportações atingiram US$ 718,6 milhões (+8,8%).',
      '• Importações Totais: Atingiram US$ 25.767,7 milhões no acumulado de janeiro a junho de 2026 (+7,1% em relação aos US$ 24.058,8 milhões de Jan-Jun/2025). No mês de Junho/2026, somaram US$ 4.636,4 milhões (+23,9%).',
      '• Saldo Comercial: O déficit do setor eletroeletrônico acumulou US$ 21.644,9 milhões no 1º semestre de 2026, montante 6,9% maior que o registrado no mesmo período do ano anterior (-US$ 20.247,6 milhões).',
      '• Destino das Exportações: Os Estados Unidos foram o principal comprador individual do setor, absorvendo US$ 1.199,1 milhões (29% do total, +9,9%). A região Aladi representou 39,8% (US$ 1.639,0 milhões, com destaque para Argentina com US$ 661,5 milhões).',
      '• Origem das Importações: A Ásia permaneceu como maior fornecedora, concentrando 70% das compras externas do setor (US$ 17.953,3 milhões), sendo a China responsável por US$ 11.132,5 milhões (43% do total importado).'
    ];

    let currentY = 92;
    mainSummaryText.forEach(line => {
      const split = doc.splitTextToSize(line, 180);
      doc.text(split, 15, currentY);
      currentY += split.length * 4 + 1.5;
    });

    // Section 2: TABELA DE COMÉRCIO EXTERIOR POR REGIONAL
    currentY += 3;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(96, 165, 250);
    doc.text('2. BALANÇA COMERCIAL POR BLOCOS ECONÔMICOS (JAN-JUN/2026 - US$ MILHÕES)', 15, currentY);
    currentY += 5;

    // Header da Tabela
    doc.setFillColor(30, 41, 59);
    doc.rect(15, currentY, 180, 6, 'F');
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('Região / Bloco Econômico', 17, currentY + 4.2);
    doc.text('Exp 2026', 85, currentY + 4.2, { align: 'right' });
    doc.text('Var %', 105, currentY + 4.2, { align: 'right' });
    doc.text('Imp 2026', 135, currentY + 4.2, { align: 'right' });
    doc.text('Var %', 155, currentY + 4.2, { align: 'right' });
    doc.text('Saldo 2026', 190, currentY + 4.2, { align: 'right' });
    currentY += 6;

    REGIOES_DATA.forEach((row, i) => {
      if (i % 2 === 0) {
        doc.setFillColor(15, 23, 42);
      } else {
        doc.setFillColor(24, 33, 47);
      }
      if (row.isTotal) {
        doc.setFillColor(30, 58, 138);
      }
      doc.rect(15, currentY, 180, 5, 'F');
      
      doc.setFontSize(7.5);
      doc.setFont('helvetica', row.isTotal ? 'bold' : 'normal');
      doc.setTextColor(row.isTotal ? 255 : 226, row.isTotal ? 255 : 232, row.isTotal ? 255 : 240);
      
      doc.text(row.regiao, 17, currentY + 3.5);
      doc.text(row.exp.toLocaleString('pt-BR', { minimumFractionDigits: 1 }), 85, currentY + 3.5, { align: 'right' });
      doc.text(`${row.expVar > 0 ? '+' : ''}${row.expVar.toFixed(1)}%`, 105, currentY + 3.5, { align: 'right' });
      doc.text(row.imp.toLocaleString('pt-BR', { minimumFractionDigits: 1 }), 135, currentY + 3.5, { align: 'right' });
      doc.text(`${row.impVar > 0 ? '+' : ''}${row.impVar.toFixed(1)}%`, 155, currentY + 3.5, { align: 'right' });
      
      const saldoStr = row.saldo < 0 ? `(${Math.abs(row.saldo).toLocaleString('pt-BR', { minimumFractionDigits: 1 })})` : row.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 1 });
      doc.text(saldoStr, 190, currentY + 3.5, { align: 'right' });

      currentY += 5;
    });

    // PAGE 2: Produtos Principais
    doc.addPage();
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 297, 'F');

    // Header Page 2
    doc.setFillColor(30, 58, 138);
    doc.rect(0, 0, 210, 18, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('ABINEE / DECON - PRINCIPAIS PRODUTOS EXPORTADOS E IMPORTADOS (JAN-JUN/2026)', 15, 12);

    currentY = 26;

    // Exportações Produtos
    doc.setFontSize(10.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(52, 211, 153);
    doc.text('PRODUTOS MAIS EXPORTADOS DO SETOR ELETROELETRÔNICO', 15, currentY);
    currentY += 5;

    doc.setFillColor(30, 41, 59);
    doc.rect(15, currentY, 180, 5.5, 'F');
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('Produto / Item', 17, currentY + 3.8);
    doc.text('Valor (US$ milhões)', 115, currentY + 3.8, { align: 'right' });
    doc.text('Var % (2025/2026)', 150, currentY + 3.8, { align: 'right' });
    doc.text('Destino Principal', 190, currentY + 3.8, { align: 'right' });
    currentY += 5.5;

    PRODUTOS_EXPORTADOS.forEach((p, idx) => {
      doc.setFillColor(idx % 2 === 0 ? 15 : 24, idx % 2 === 0 ? 23 : 33, idx % 2 === 0 ? 42 : 47);
      doc.rect(15, currentY, 180, 4.8, 'F');
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(226, 232, 240);
      doc.text(`${p.pos}. ${p.produto}`, 17, currentY + 3.4);
      doc.text(p.val.toString(), 115, currentY + 3.4, { align: 'right' });
      doc.text(`${p.var > 0 ? '+' : ''}${p.var}%`, 150, currentY + 3.4, { align: 'right' });
      doc.text(p.dest, 190, currentY + 3.4, { align: 'right' });
      currentY += 4.8;
    });

    currentY += 8;

    // Importações Produtos
    doc.setFontSize(10.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(251, 146, 60);
    doc.text('PRODUTOS MAIS IMPORTADOS DO SETOR ELETROELETRÔNICO', 15, currentY);
    currentY += 5;

    doc.setFillColor(30, 41, 59);
    doc.rect(15, currentY, 180, 5.5, 'F');
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('Produto / Item', 17, currentY + 3.8);
    doc.text('Valor (US$ milhões)', 115, currentY + 3.8, { align: 'right' });
    doc.text('Var % (2025/2026)', 150, currentY + 3.8, { align: 'right' });
    doc.text('Origem / Aplicação', 190, currentY + 3.8, { align: 'right' });
    currentY += 5.5;

    PRODUTOS_IMPORTADOS.forEach((p, idx) => {
      doc.setFillColor(idx % 2 === 0 ? 15 : 24, idx % 2 === 0 ? 23 : 33, idx % 2 === 0 ? 42 : 47);
      doc.rect(15, currentY, 180, 4.8, 'F');
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(226, 232, 240);
      doc.text(`${p.pos}. ${p.produto}`, 17, currentY + 3.4);
      doc.text(p.val.toLocaleString('pt-BR'), 115, currentY + 3.4, { align: 'right' });
      doc.text(`${p.var > 0 ? '+' : ''}${p.var}%`, 150, currentY + 3.4, { align: 'right' });
      doc.text(p.orig, 190, currentY + 3.4, { align: 'right' });
      currentY += 4.8;
    });

    // Footer
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('Fonte Oficial: Decon - Departamento de Economia da Abinee / SECEX - MDIC (28/07/2026)', 105, 285, { align: 'center' });
    doc.text('Autores: Cristina Tozzi Keller, Peterson Richard Monteiro e Sabrina Souza da Silva', 105, 289, { align: 'center' });

    doc.save('Balanca_Comercial_Produtos_Setor_Eletroeletronico_Abinee_Jan_Jun_2026.pdf');
  };

  const handleDownloadPdf = (targetFileName?: string) => {
    const fileName = targetFileName || 'Balanca_Comercial_Setor_Eletroeletronico_Abinee_Jan_Jun_2026.pdf';
    const fileUrl = `/${encodeURIComponent(fileName)}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      {/* HEADER NO MESMO PADRÃO DA SONDAGEM CONJUNTURAL */}
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
            <span 
              className="text-[13px] font-bold tracking-wider uppercase cursor-pointer hover:text-blue-600" 
              onClick={() => setActivePage('Indústria do Setor Eletroeletrônico')}
            >
              Indústria Eletroeletrônica
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-[13px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              Balanço Comercial
            </span>
          </div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Balanço Comercial
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">
            Acompanhamento das Exportações, Importações e Saldo Comercial (Abinee / Decon / SECEX - Jan-Jun/2026)
          </p>
        </div>

        {/* CARDS SUPERIORES DA BALANÇA COMERCIAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-stretch">
          {/* Card 1: Déficit comercial */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Déficit comercial</span>
              <div className="w-8 h-8 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400">
                <TrendingDown className="w-4.5 h-4.5" />
              </div>
            </div>
            <div>
              <h3 className="text-[24px] 2xl:text-[28px] font-black text-red-600 dark:text-red-400 leading-none">US$ -21,6 bilhões</h3>
              <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-2 font-medium">Saldo negativo no acumulado de janeiro a junho de 2026.</p>
            </div>
          </div>

          {/* Card 2: Importações */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Importações</span>
              <div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Ship className="w-4.5 h-4.5" />
              </div>
            </div>
            <div>
              <h3 className="text-[24px] 2xl:text-[28px] font-black text-amber-600 dark:text-amber-400 leading-none">US$ 25,8 bilhões</h3>
              <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-2 font-medium">+7,1% vs. primeiro semestre de 2025.</p>
            </div>
          </div>

          {/* Card 3: Exportações */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Exportações</span>
              <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <ArrowUpRight className="w-4.5 h-4.5" />
              </div>
            </div>
            <div>
              <h3 className="text-[24px] 2xl:text-[28px] font-black text-emerald-600 dark:text-emerald-400 leading-none">US$ 4,1 bilhões</h3>
              <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-2 font-medium">+8,2% vs. primeiro semestre de 2025.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. LEITURA ESTRATÉGICA SOBERANA BASEADA EM EVIDÊNCIAS */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm shrink-0">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Balanço Comercial registra <span className="text-blue-600 dark:text-blue-400">exportações de US$ {balancoComercialData.exportacoes.valor} bi</span> e importações de US$ {balancoComercialData.importacoes.valor} bi com déficit de US$ {balancoComercialData.deficit.valor} bi no 1º semestre de 2026.
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
                        Dados consolidados da Abinee / Decon e SECEX / MDIC (28/07/2026).
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                    No acumulado do 1º semestre de 2026 (Janeiro a Junho), as exportações de produtos eletroeletrônicos somaram <strong>US$ {balancoComercialData.exportacoes.valor} bilhões (+8,2%)</strong>, enquanto as importações atingiram <strong>US$ {balancoComercialData.importacoes.valor} bilhões (+7,1%)</strong>, resultando em um déficit comercial setorial de <strong>US$ {balancoComercialData.deficit.valor} bilhões</strong> (+6,9% de elevação no déficit comercial frente a igual período de 2025).
                  </p>
                  <p>
                    Os <strong>Estados Unidos figuram como o principal destino das exportações</strong> brasileiras do setor, somando US$ 1,2 bilhão (29% do total exportado, +9,9%), impulsionados sobretudo por transformadores elétricos (US$ 399 milhões destinados aos EUA do total de US$ 533 milhões exportados), motores elétricos e equipamentos de medição.
                  </p>
                  <p>
                    No lado das importações, os <strong>países asiáticos respondem por 70% das compras do setor (US$ 17,95 bilhões)</strong>, liderados pela China com US$ 11,13 bilhões (43% do total). O avanço das importações foi puxado por semicondutores (+45%, totalizando US$ 4,25 bilhões), componentes de informática (+7%) e máquinas de processamento de dados (+47%).
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
                          Políticas tarifárias nos EUA, custo do frete internacional e câmbio.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      Acompanhar possíveis desdobramentos de barreiras e sobretaxas tarifárias dos EUA sobre bens de automação e equipamentos elétricos de potência.
                    </p>
                    <p>
                      Monitorar a estabilidade nas rotas logísticas da Ásia para o Brasil e a disponibilidade de microcontroladores e chips semicondutores no mercado internacional.
                    </p>
                    <p>
                      Acompanhar o saldo comercial favorável no bloco da Aladi (superávit de US$ 594 milhões com a Argentina e US$ 57,3 milhões total no bloco).
                    </p>
                  </div>
                </div>
              </div>

              {/* Impacto Lorenzetti (Hipóteses) */}
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
                      <div className="inline-flex bg-blue-50/80 dark:bg-blue-950/40 px-3 py-1.5 rounded-lg mt-1">
                        <span className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold">
                          Acompanhamento de custos de insumos e oportunidades na América Latina.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      A elevada dependência de 70% das importações oriundas da Ásia (com alta de +45% nas compras de semicondutores) <strong className="text-slate-800 dark:text-slate-200">pode demandar acompanhamento contínuo</strong> da composição de custos de componentes eletrônicos para duchas e torneiras.
                    </p>
                    <p>
                      O superávit expressivo do Brasil na pauta com a Argentina (US$ 594 milhões) e demais países da Aladi <strong className="text-slate-800 dark:text-slate-200">pode criar oportunidades</strong> para fortalecimento das vendas externas de aquecedores a gás, duchas e louças/metais sanitários.
                    </p>
                    <p>
                      A elevação generalizada na importação de acumuladores (+48%) e matérias de instalação <strong className="text-slate-800 dark:text-slate-200">pode representar risco</strong> de flutuações de preços para insumos elétricos essenciais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANÁLISE ESTRATÉGICA DOS 3 PILARES DA BALANÇA COMERCIAL */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm shrink-0">2</div>
          <div>
            <h2 className="text-[22px] md:text-[26px] font-extrabold text-slate-900 dark:text-white leading-tight">
              Análise Estratégica dos Pilares do Comércio Exterior
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Desempenho de vendas externas, dependência de insumos importados e resultado do saldo líquido setorial.
            </p>
          </div>
        </div>

        {/* BLOCO 1: EXPORTAÇÕES */}
        <div className="bg-white dark:bg-[#111827] p-4 md:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
          {/* HEADER DO BLOCO */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-0.5">
                PERGUNTA RESPONDIDA: ESTAMOS GANHANGO OU PERDENDO COMPETITIVIDADE EXTERNA?
              </span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Exportações — desempenho externo e competitividade brasileira
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-0.5 font-medium">
                Evolução das exportações, principais mercados e produtos que sustentam o resultado.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/80 px-4 py-2 rounded-xl flex items-center gap-4 shrink-0 shadow-xs">
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">TOTAL EXPORTADO (1º SEM/26)</p>
                <p className="text-xl md:text-2xl font-black text-emerald-600 dark:text-emerald-400">US$ {balancoComercialData.exportacoes.valor} bi</p>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">CRESCIMENTO</p>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-xl md:text-2xl font-black text-emerald-600 dark:text-emerald-400">+8,2%</p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">vs. 1º sem/25</span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCO PRINCIPAL SUPERIOR (GRÁFICO HISTÓRICO + INTERPRETAÇÃO ESTRATÉGICA) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 md:gap-4 items-stretch">
            {/* GRÁFICO DE EVOLUÇÃO HISTÓRICA (~58% / lg:col-span-7) */}
            <div className="lg:col-span-7 bg-slate-50/70 dark:bg-slate-900/40 p-3.5 md:p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm md:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Evolução Histórica das Exportações (US$ bilhões)
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">Acumulado Anual / Semestral</span>
                </div>
                {/* NOTA DE TENDÊNCIA ESTRATÉGICA */}
                <div className="bg-emerald-100/70 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-200/80 dark:border-emerald-900/50 inline-flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-extrabold text-emerald-950 dark:text-emerald-200">
                    Crescimento sustentado por bens industriais e tecnológicos (+24,6% entre 2022 e 2025)
                  </span>
                </div>
              </div>

              {/* BARRAS DE EVOLUÇÃO ESTRUTURADAS COM EIXO Y */}
              <div className="relative pt-4 pb-1 pl-8 pr-2 border-b border-slate-200 dark:border-slate-800">
                {/* EIXO Y VALORES */}
                <div className="absolute left-0 top-4 bottom-7 flex flex-col justify-between text-xs md:text-sm font-black text-slate-500 dark:text-slate-400 pointer-events-none">
                  <span>10</span>
                  <span>8</span>
                  <span>6</span>
                  <span>4</span>
                  <span>2</span>
                  <span>0</span>
                </div>

                {/* LINHAS DE GRADE HORIZONTAIS */}
                <div className="absolute left-7 right-2 top-5 bottom-8 flex flex-col justify-between pointer-events-none z-0">
                  <div className="border-b border-dashed border-slate-200 dark:border-slate-800/60 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-slate-800/60 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-slate-800/60 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-slate-800/60 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-slate-800/60 w-full"></div>
                </div>

                {/* COLUNAS DO GRÁFICO - ALTURA COMPACTADA */}
                <div className="flex items-end justify-between gap-2 md:gap-4 h-36 relative z-10 pl-1">
                  {[
                    { ano: '2022', val: '6,5', h: '65%' },
                    { ano: '2023', val: '7,1', h: '71%' },
                    { ano: '2024', val: '7,5', h: '75%' },
                    { ano: '1º SEM/25', val: '3,81', h: '38%' },
                    { ano: '1º SEM/26', val: '4,12', h: '41%', highlight: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                      <span className={`text-xs md:text-sm font-black whitespace-nowrap ${item.highlight ? 'text-emerald-600 dark:text-emerald-400 scale-105' : 'text-slate-800 dark:text-slate-200'}`}>
                        US$ {item.val} bi
                      </span>
                      <div
                        className={`w-full max-w-[48px] rounded-t-lg transition-all shadow-sm ${
                          item.highlight 
                            ? 'bg-emerald-600 dark:bg-emerald-500 shadow-emerald-500/20 shadow-md ring-2 ring-emerald-400/30' 
                            : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400'
                        }`}
                        style={{ height: item.h }}
                      ></div>
                      <span className={`text-xs md:text-sm font-black whitespace-nowrap ${item.highlight ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {item.ano}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* INTERPRETAÇÃO ESTRATÉGICA CARD (~42% / lg:col-span-5) */}
            <div className="lg:col-span-5 bg-emerald-50/70 dark:bg-emerald-950/30 p-3.5 md:p-4 rounded-xl border border-emerald-200/80 dark:border-emerald-900/50 flex flex-col justify-between gap-3">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400">
                  <Quote className="w-4 h-4 fill-emerald-600/20 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-xs font-black uppercase tracking-wider">
                    INTERPRETAÇÃO ESTRATÉGICA
                  </span>
                </div>

                {/* MENSAGEM PRINCIPAL */}
                <div className="bg-white/90 dark:bg-slate-900/80 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40 shadow-xs">
                  <p className="text-xs md:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-semibold italic">
                    "Exportações mantêm trajetória positiva impulsionadas por bens industriais de maior valor agregado, porém permanecem expostas à concentração geográfica e às mudanças regulatórias internacionais."
                  </p>
                </div>

                {/* PAINEL DE SINTESE DE VETORES E ATENÇÃO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* VETORES POSITIVOS */}
                  <div className="bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-emerald-200/60 dark:border-emerald-900/40 flex flex-col gap-1">
                    <span className="text-xs font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Vetores Positivos
                    </span>
                    <ul className="text-xs text-slate-800 dark:text-slate-200 flex flex-col gap-1 font-medium pl-3 list-disc leading-snug">
                      <li>Crescimento de bens industriais de alto valor agregado</li>
                      <li>Maior participação de produtos tecnológicos</li>
                    </ul>
                  </div>

                  {/* PONTOS DE ATENÇÃO */}
                  <div className="bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40 flex flex-col gap-1">
                    <span className="text-xs font-black text-amber-800 dark:text-amber-300 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      Pontos de Atenção
                    </span>
                    <ul className="text-xs text-slate-800 dark:text-slate-200 flex flex-col gap-1 font-medium pl-3 list-disc leading-snug">
                      <li>Dependência de mercados específicos</li>
                      <li>Barreiras comerciais internacionais</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-emerald-200/80 dark:border-emerald-900/50 flex items-center gap-1.5 text-xs md:text-sm font-bold text-emerald-900 dark:text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Trajetória positiva impulsionada por bens industriais</span>
              </div>
            </div>
          </div>

          {/* BLOCO INFERIOR: 3 PILARES ESTRATÉGICOS EM COLUNAS EQUILIBRADAS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 md:gap-4">
            
            {/* PILAR 1: MOTORES DO CRESCIMENTO (ESTILO RANKING VISUAL) */}
            <div className="bg-white dark:bg-[#111827] p-3.5 md:p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
              <div className="flex flex-col gap-3">
                {/* Header com ícone verde */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-black text-emerald-900 dark:text-emerald-400 uppercase tracking-tight">
                      1. MOTORES DO CRESCIMENTO
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Setores e produtos que impulsionam as exportações
                    </p>
                  </div>
                </div>

                {/* RANKING COM BARRAS PROPORCIONAIS DE DESEMPENHO */}
                <div className="flex flex-col gap-2">
                  {/* ITEM 1 */}
                  <div className="p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">1</span>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Transformadores elétricos</span>
                      </div>
                      <span className="text-[11px] font-black text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        +26% vs. 1º sem/25
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span>US$ 533 milhões</span>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] font-bold">Bens de Alta Potência</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-full"></div>
                    </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-600/80 text-white text-[10px] font-black flex items-center justify-center shrink-0">2</span>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Eletrônica embarcada</span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/40">
                        Vendas em expansão
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span>US$ 404 milhões</span>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] font-bold">Sistemas de Automação</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500/80 h-full rounded-full w-[76%]"></div>
                    </div>
                  </div>

                  {/* ITEM 3 */}
                  <div className="p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-600/60 text-white text-[10px] font-black flex items-center justify-center shrink-0">3</span>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Motores elétricos industriais</span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/40">
                        Alto valor agregado
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span>US$ 331 milhões</span>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] font-bold">Bens de Capital</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500/60 h-full rounded-full w-[62%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barra inferior */}
              <div className="p-2.5 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200 font-semibold">
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Bens industriais e tecnológicos lideram o crescimento das exportações.</span>
              </div>
            </div>

            {/* PILAR 2: CONCENTRAÇÃO GEOGRÁFICA (BARRAS HORIZONTAIS COMPARATIVAS) */}
            <div className="bg-white dark:bg-[#111827] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
              <div className="flex flex-col gap-3">
                {/* Header com ícone roxo */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="w-8 h-8 rounded-full bg-purple-600 dark:bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-black text-purple-900 dark:text-purple-400 uppercase tracking-tight">
                      2. CONCENTRAÇÃO GEOGRÁFICA
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Dependência dos principais mercados
                    </p>
                  </div>
                </div>

                {/* BARRAS HORIZONTAIS COMPARATIVAS CLARAS */}
                <div className="flex flex-col gap-3 p-3 rounded-lg bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  {/* ALADI / MERCOSUL */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
                        <span className="text-xs md:text-sm font-black">ALADI / Mercosul</span>
                      </div>
                      <div className="flex items-center gap-2 font-black">
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs md:text-sm">US$ 1,64 bi</span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm md:text-base font-black">40%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-[40%]"></div>
                    </div>
                  </div>

                  {/* OUTROS MERCADOS */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span className="w-3 h-3 rounded-full bg-slate-400 shrink-0"></span>
                        <span className="text-xs md:text-sm font-black">Outros mercados</span>
                      </div>
                      <div className="flex items-center gap-2 font-black">
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs md:text-sm">US$ 1,29 bi</span>
                        <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base font-black">31%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div className="bg-slate-400 dark:bg-slate-500 h-full rounded-full w-[31%]"></div>
                    </div>
                  </div>

                  {/* EUA */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0"></span>
                        <span className="text-xs md:text-sm font-black">EUA</span>
                      </div>
                      <div className="flex items-center gap-2 font-black">
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs md:text-sm">US$ 1,19 bi</span>
                        <span className="text-blue-600 dark:text-blue-400 text-sm md:text-base font-black">29%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full w-[29%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barra inferior */}
              <div className="p-2.5 rounded-lg bg-purple-50/80 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 flex items-center gap-2 text-xs md:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-normal">
                <Shield className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Maior concentração em determinados mercados aumenta a exposição a mudanças comerciais e regulatórias.</span>
              </div>
            </div>

            {/* PILAR 3: RISCOS PARA COMPETITIVIDADE EXTERNA (PAINEL DE PRIORIZAÇÃO DE RISCOS) */}
            <div className="bg-white dark:bg-[#111827] p-3.5 md:p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
              <div className="flex flex-col gap-3">
                {/* Header com ícone laranja */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="w-8 h-8 rounded-full bg-orange-600 dark:bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-black text-orange-900 dark:text-orange-400 uppercase tracking-tight">
                      3. RISCOS PARA COMPETITIVIDADE EXTERNA
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Fatores que podem impactar o desempenho futuro
                    </p>
                  </div>
                </div>

                {/* MATRIZ DE RISCOS PRIORIZADA */}
                <div className="flex flex-col gap-2">
                  {/* RISCO 1 - ALTO */}
                  <div className="p-2.5 rounded-lg bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <div className="p-1.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                        <Shield className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white block">Barreiras comerciais e tarifárias</span>
                        <span className="text-xs text-slate-600 dark:text-slate-300 leading-tight block mt-0.5 font-medium">Exigências regulatórias rigorosas e impostos de importação nos mercados destino.</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                      ALTO
                    </span>
                  </div>

                  {/* RISCO 2 - ALTO */}
                  <div className="p-2.5 rounded-lg bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <div className="p-1.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white block">Competição internacional (asiática)</span>
                        <span className="text-xs text-slate-600 dark:text-slate-300 leading-tight block mt-0.5 font-medium">Aumento da participação de produtos asiáticos em bens industriais e tecnológicos.</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                      ALTO
                    </span>
                  </div>

                  {/* RISCO 3 - MÉDIO */}
                  <div className="p-2.5 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <div className="p-1.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                        <DollarSign className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white block">Oscilação cambial</span>
                        <span className="text-xs text-slate-600 dark:text-slate-300 leading-tight block mt-0.5 font-medium">Volatilidade do dólar impacta preços, custos e margens de competitividade.</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                      MÉDIO
                    </span>
                  </div>
                </div>
              </div>

              {/* Barra inferior */}
              <div className="p-2.5 rounded-lg bg-orange-50/80 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/40 flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200 font-semibold leading-normal">
                <AlertTriangle className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Exposição contínua exige monitoramento ativo de custos, tarifas e estratégias de hedge.</span>
              </div>
            </div>

          </div>

          {/* BANNER DE CONCLUSÃO GERAL DE EXPORTAÇÕES */}
          <div className="p-3 md:p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 flex items-center gap-3 shadow-xs">
            <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 fill-blue-600/30" />
            </div>
            <p className="text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              <strong className="font-black text-slate-900 dark:text-white">Conclusão:</strong> As exportações seguem em trajetória positiva, impulsionadas por bens industriais e tecnológicos, mas o cenário internacional exige atenção à diversificação de mercados, à competitividade de custos e ao ambiente regulatório global.
            </p>
          </div>
        </div>

        {/* BLOCO 2: IMPORTAÇÕES */}
        <div className="bg-white dark:bg-[#111827] p-4 md:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
          {/* HEADER DO BLOCO */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-0.5">
                PERGUNTA RESPONDIDA: DE ONDE VEM NOSSA DEPENDÊNCIA E QUAIS INSUMOS IMPACTAM A CADEIA?
              </span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Importações — dependência externa e cadeia produtiva
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-0.5 font-medium">
                Evolução das importações, principais produtos fornecedores e origens estratégicas.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800/80 px-4 py-2 rounded-xl flex items-center gap-4 shrink-0 shadow-xs">
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">TOTAL IMPORTADO (1º SEM/26)</p>
                <p className="text-xl md:text-2xl font-black text-amber-600 dark:text-amber-400">US$ {balancoComercialData.importacoes.valor} bi</p>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">CRESCIMENTO</p>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-xl md:text-2xl font-black text-amber-600 dark:text-amber-400">+7,1%</p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">vs. 1º sem/25</span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCO PRINCIPAL SUPERIOR (GRÁFICO HISTÓRICO + INTERPRETAÇÃO ESTRATÉGICA) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* GRÁFICO DE EVOLUÇÃO HISTÓRICA (~58% / lg:col-span-7) */}
            <div className="lg:col-span-7 bg-slate-50/70 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm md:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Ship className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400" />
                    Evolução Histórica das Importações (US$ bilhões)
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">Acumulado Anual / Semestral</span>
                </div>
                {/* NOTA DE TENDÊNCIA ESTRATÉGICA */}
                <div className="bg-amber-100/70 dark:bg-amber-950/50 px-3 py-1.5 rounded-lg border border-amber-200/80 dark:border-amber-900/50 inline-flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  <span className="text-xs font-extrabold text-amber-950 dark:text-amber-200">
                    Aumento concentrado em semicondutores (+45%) e máquinas de dados (+47%)
                  </span>
                </div>
              </div>

              {/* BARRAS DE EVOLUÇÃO ESTRUTURADAS COM EIXO Y */}
              <div className="relative pt-4 pb-1 pl-8 pr-1 border-b border-slate-200 dark:border-slate-800">
                {/* EIXO Y VALORES */}
                <div className="absolute left-0 top-4 bottom-6 flex flex-col justify-between text-xs md:text-sm font-black text-slate-500 dark:text-slate-400 pointer-events-none">
                  <span>50</span>
                  <span>40</span>
                  <span>30</span>
                  <span>20</span>
                  <span>0</span>
                </div>

                {/* LINHAS DE GRADE HORIZONTAIS */}
                <div className="absolute left-7 right-1 top-5 bottom-7 flex flex-col justify-between pointer-events-none z-0">
                  <div className="border-b border-dashed border-slate-200 dark:border-slate-800/60 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-slate-800/60 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-slate-800/60 w-full"></div>
                  <div className="border-b border-dashed border-slate-200 dark:border-slate-800/60 w-full"></div>
                </div>

                {/* COLUNAS DO GRÁFICO */}
                <div className="flex items-end justify-between gap-3 md:gap-5 h-44 relative z-10 pl-1">
                  {[
                    { ano: '2022', val: '41,5', h: '83%' },
                    { ano: '2023', val: '42,8', h: '85%' },
                    { ano: '2024', val: '45,2', h: '90%' },
                    { ano: '1º SEM/25', val: '24,06', h: '48%' },
                    { ano: '1º SEM/26', val: '25,77', h: '51%', highlight: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                      <span className={`text-xs md:text-sm font-black whitespace-nowrap ${item.highlight ? 'text-amber-600 dark:text-amber-400 scale-105' : 'text-slate-800 dark:text-slate-200'}`}>
                        US$ {item.val} bi
                      </span>
                      <div
                        className={`w-full max-w-[48px] rounded-t-lg transition-all duration-300 ${
                          item.highlight
                            ? 'bg-gradient-to-t from-amber-600 to-amber-400 shadow-xs shadow-amber-500/20'
                            : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400'
                        }`}
                        style={{ height: item.h }}
                      ></div>
                      <span className={`text-xs md:text-sm font-black whitespace-nowrap ${item.highlight ? 'text-amber-700 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {item.ano}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* INTERPRETAÇÃO ESTRATÉGICA CARD (~42% / lg:col-span-5) */}
            <div className="lg:col-span-5 bg-amber-50/70 dark:bg-amber-950/30 p-4 rounded-xl border border-amber-200/80 dark:border-amber-900/50 flex flex-col justify-between gap-3">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400">
                  <Quote className="w-4.5 h-4.5 fill-amber-600/20 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="text-xs font-black uppercase tracking-wider">
                    INTERPRETAÇÃO ESTRATÉGICA
                  </span>
                </div>

                {/* MENSAGEM PRINCIPAL */}
                <div className="bg-white/90 dark:bg-slate-900/80 p-3 rounded-lg border border-amber-100 dark:border-amber-900/40 shadow-xs">
                  <p className="text-xs md:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-semibold italic">
                    "A elevada participação de componentes importados mantém a indústria nacional exposta a oscilações de custos, volatilidade cambial e gargalos logísticos internacionais."
                  </p>
                </div>

                {/* PAINEL DE SÍNTESE DE VETORES E ATENÇÃO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
                  {/* VETORES DE PRESSÃO */}
                  <div className="bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40 flex flex-col gap-1.5">
                    <span className="text-xs font-black text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      Vetores de Pressão
                    </span>
                    <ul className="text-xs text-slate-800 dark:text-slate-200 flex flex-col gap-1 font-medium pl-3 list-disc leading-snug">
                      <li>Salto em semicondutores (+45% / US$ 4,25 bi)</li>
                      <li>Acumuladores e baterias elétricas (+48%)</li>
                    </ul>
                  </div>

                  {/* PONTOS DE ATENÇÃO */}
                  <div className="bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-rose-200/60 dark:border-rose-900/40 flex flex-col gap-1.5">
                    <span className="text-xs font-black text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      Pontos de Atenção
                    </span>
                    <ul className="text-xs text-slate-800 dark:text-slate-200 flex flex-col gap-1 font-medium pl-3 list-disc leading-snug">
                      <li>70% de dependência do mercado asiático</li>
                      <li>Inexistência de substitutos locais para chips</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-2.5 border-t border-amber-200/80 dark:border-amber-900/50 flex items-center gap-2 text-xs md:text-sm font-bold text-amber-900 dark:text-amber-300">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Dependência concentrada em insumos essenciais de montagem</span>
              </div>
            </div>
          </div>

          {/* BLOCO INFERIOR: 3 PILARES ESTRATÉGICOS EM COLUNAS EQUILIBRADAS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 md:gap-4">
            
            {/* PILAR 1: PRINCIPAIS GRUPOS IMPORTADOS (RANKING VISUAL) */}
            <div className="bg-white dark:bg-[#111827] p-3.5 md:p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
              <div className="flex flex-col gap-3">
                {/* Header com ícone amarelo/laranja */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="w-8 h-8 rounded-full bg-amber-600 dark:bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-black text-amber-900 dark:text-amber-400 uppercase tracking-tight">
                      1. PRINCIPAIS GRUPOS IMPORTADOS
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Insumos com maior participação no volume de compras
                    </p>
                  </div>
                </div>

                {/* RANKING COM BARRAS PROPORCIONAIS DE DESEMPENHO */}
                <div className="flex flex-col gap-2.5">
                  {/* ITEM 1 */}
                  <div className="p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-amber-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">1</span>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Semicondutores</span>
                      </div>
                      <span className="text-xs font-black text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
                        +45% vs. 1º sem/25
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span>US$ 4,25 bilhões</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-bold">Base para Placas/Circuitos</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full w-full"></div>
                    </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-amber-600/80 text-white text-[10px] font-black flex items-center justify-center shrink-0">2</span>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Componentes p/ Informática</span>
                      </div>
                      <span className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-100 dark:border-amber-900/40">
                        +7% vs. 1º sem/25
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span>US$ 1,79 bilhão</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-bold">Placas e Processadores</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500/80 h-full rounded-full w-[42%]"></div>
                    </div>
                  </div>

                  {/* ITEM 3 */}
                  <div className="p-2.5 rounded-lg bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-amber-600/60 text-white text-[10px] font-black flex items-center justify-center shrink-0">3</span>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">Eletrônica Embarcada</span>
                      </div>
                      <span className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-100 dark:border-amber-900/40">
                        +6% vs. 1º sem/25
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span>US$ 1,72 bilhão</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-bold">Módulos de Controle</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500/60 h-full rounded-full w-[40%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barra inferior */}
              <div className="p-2.5 rounded-lg bg-amber-50/80 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200 font-semibold">
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Componentes primários representam 52% do total de compras externas.</span>
              </div>
            </div>

            {/* PILAR 2: CONCENTRAÇÃO GEOGRÁFICA (BARRAS HORIZONTAIS COMPARATIVAS) */}
            <div className="bg-white dark:bg-[#111827] p-3.5 md:p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
              <div className="flex flex-col gap-3">
                {/* Header com ícone roxo */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="w-8 h-8 rounded-full bg-purple-600 dark:bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-black text-purple-900 dark:text-purple-400 uppercase tracking-tight">
                      2. CONCENTRAÇÃO DE ORIGENS
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Participação dos principais blocos fornecedores
                    </p>
                  </div>
                </div>

                {/* BARRAS HORIZONTAIS COMPARATIVAS CLARAS */}
                <div className="flex flex-col gap-3 p-3 rounded-lg bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  {/* CHINA */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span className="w-3 h-3 rounded-full bg-red-500 shrink-0"></span>
                        <span className="text-xs md:text-sm font-black">China</span>
                      </div>
                      <div className="flex items-center gap-2 font-black">
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs md:text-sm">US$ 11,13 bi (+1,8%)</span>
                        <span className="text-red-600 dark:text-red-400 text-sm md:text-base font-black">43%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full rounded-full w-[43%]"></div>
                    </div>
                  </div>

                  {/* OUTROS ÁSIA */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0"></span>
                        <span className="text-xs md:text-sm font-black">Outros Ásia (exceto China)</span>
                      </div>
                      <div className="flex items-center gap-2 font-black">
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs md:text-sm">US$ 6,82 bi (+25,6%)</span>
                        <span className="text-amber-600 dark:text-amber-400 text-sm md:text-base font-black">26%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full w-[26%]"></div>
                    </div>
                  </div>

                  {/* UNIÃO EUROPEIA */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0"></span>
                        <span className="text-xs md:text-sm font-black">União Europeia</span>
                      </div>
                      <div className="flex items-center gap-2 font-black">
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs md:text-sm">US$ 3,19 bi (-5,0%)</span>
                        <span className="text-purple-600 dark:text-purple-400 text-sm md:text-base font-black">12%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full w-[12%]"></div>
                    </div>
                  </div>

                  {/* EUA */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0"></span>
                        <span className="text-xs md:text-sm font-black">Estados Unidos</span>
                      </div>
                      <div className="flex items-center gap-2 font-black">
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs md:text-sm">US$ 2,21 bi (-8,7%)</span>
                        <span className="text-blue-600 dark:text-blue-400 text-sm md:text-base font-black">9%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full w-[9%]"></div>
                    </div>
                  </div>

                  {/* ALADI */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
                        <span className="text-xs md:text-sm font-black">Aladi (Total)</span>
                      </div>
                      <div className="flex items-center gap-2 font-black">
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs md:text-sm">US$ 1,58 bi (+40,0%)</span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm md:text-base font-black">6%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-[6%]"></div>
                    </div>
                  </div>

                  {/* DEMAIS PAÍSES */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <span className="w-3 h-3 rounded-full bg-slate-400 shrink-0"></span>
                        <span className="text-xs md:text-sm font-black">Demais Países</span>
                      </div>
                      <div className="flex items-center gap-2 font-black">
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs md:text-sm">US$ 0,83 bi (+5,7%)</span>
                        <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-black">3%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full rounded-full w-[3%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barra inferior */}
              <div className="p-2.5 rounded-lg bg-purple-50/80 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 flex items-center gap-2 text-xs md:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-normal">
                <Shield className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Ásia responde por 70% (US$ 17,95 bi), sendo China (43%) e Outros Ásia (26%).</span>
              </div>
            </div>

            {/* PILAR 3: RISCOS DA CADEIA DE SUPRIMENTOS */}
            <div className="bg-white dark:bg-[#111827] p-3.5 md:p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
              <div className="flex flex-col gap-3">
                {/* Header com ícone laranja/vermelho */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="w-8 h-8 rounded-full bg-orange-600 dark:bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-black text-orange-900 dark:text-orange-400 uppercase tracking-tight">
                      3. RISCOS PARA A CADEIA PRODUTIVA
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Ameaças ao suprimento contínuo de insumos
                    </p>
                  </div>
                </div>

                {/* MATRIZ DE RISCOS PRIORIZADA */}
                <div className="flex flex-col gap-2">
                  {/* RISCO 1 - ALTO */}
                  <div className="p-2.5 rounded-lg bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <div className="p-1.5 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white block">Semicondutores e chips estratégicos</span>
                        <span className="text-xs text-slate-600 dark:text-slate-300 leading-normal block mt-0.5 font-medium">Falta de produção nacional exige fornecimento ininterrupto da Ásia.</span>
                      </div>
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded uppercase tracking-wider shrink-0 shadow-2xs">
                      ALTO
                    </span>
                  </div>

                  {/* RISCO 2 - ALTO */}
                  <div className="p-2.5 rounded-lg bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <div className="p-1.5 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white block">Concentração em rotas asiáticas</span>
                        <span className="text-xs text-slate-600 dark:text-slate-300 leading-normal block mt-0.5 font-medium">Gargalos no transporte marítimo e tensões geopolíticas globais.</span>
                      </div>
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded uppercase tracking-wider shrink-0 shadow-2xs">
                      ALTO
                    </span>
                  </div>

                  {/* RISCO 3 - MÉDIO */}
                  <div className="p-2.5 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <div className="p-1.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                        <DollarSign className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white block">Flutuação do Câmbio e do Frete</span>
                        <span className="text-xs text-slate-600 dark:text-slate-300 leading-normal block mt-0.5 font-medium">Volatilidade cambial encarece custos de matéria-prima e insumos industriais.</span>
                      </div>
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded uppercase tracking-wider shrink-0 shadow-2xs">
                      MÉDIO
                    </span>
                  </div>
                </div>
              </div>

              {/* Barra inferior */}
              <div className="p-2.5 rounded-lg bg-orange-50/80 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/40 flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200 font-semibold leading-normal">
                <AlertTriangle className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Gestão de estoques estratégicos e hedge são determinantes para a estabilidade.</span>
              </div>
            </div>

          </div>

          {/* BANNER DE CONCLUSÃO GERAL DE IMPORTAÇÕES */}
          <div className="p-3 md:p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 flex items-center gap-3 shadow-xs">
            <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 fill-amber-600/30" />
            </div>
            <p className="text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              <strong className="font-black text-slate-900 dark:text-white">Conclusão:</strong> As importações (US$ {balancoComercialData.importacoes.valor} bi, +7,1%) sustentam a produção eletroeletrônica nacional, porém demandam monitoramento ostensivo devido ao forte salto em semicondutores (+45%) e à elevada dependência da pauta produtiva em relação ao fornecimento asiático (70%).
            </p>
          </div>
        </div>

        {/* BLOCO 3: BALANÇA COMERCIAL (RESULTADO LÍQUIDO E ESTRUTURA) */}
        <div className="bg-white dark:bg-[#111827] p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-5">
          {/* HEADER DO BLOCO */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                Balança Comercial — dependência estrutural do setor
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Resultado líquido do comércio exterior e principais desequilíbrios competitivos
              </p>
            </div>
            <div className="flex flex-col text-left sm:text-right shrink-0 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span>Período: <strong>Janeiro a Junho/2026</strong></span>
              <span>Fonte: <strong>ABINEE</strong></span>
            </div>
          </div>

          {/* 3 CARDS DE MÉTRICAS NO TOPO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* CARD 1: EXPORTAÇÕES */}
            <div className="p-4 md:p-5 rounded-2xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block">
                    EXPORTAÇÕES
                  </span>
                  <span className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                    US$ {balancoComercialData.exportacoes.valor} bi
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-xs md:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  ↑ +8,2% <span className="text-slate-400 dark:text-slate-500 font-normal text-xs">vs. 1º sem/2025</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Crescimento das vendas externas
                </span>
              </div>
            </div>

            {/* CARD 2: IMPORTAÇÕES */}
            <div className="p-4 md:p-5 rounded-2xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider block">
                    IMPORTAÇÕES
                  </span>
                  <span className="text-2xl md:text-3xl font-black text-amber-600 dark:text-amber-400">
                    US$ {balancoComercialData.importacoes.valor} bi
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-xs md:text-sm font-extrabold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  ↑ +7,1% <span className="text-slate-400 dark:text-slate-500 font-normal text-xs">vs. 1º sem/2025</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Dependência de insumos externos
                </span>
              </div>
            </div>

            {/* CARD 3: SALDO COMERCIAL */}
            <div className="p-4 md:p-5 rounded-2xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider block">
                    SALDO COMERCIAL
                  </span>
                  <span className="text-2xl md:text-3xl font-black text-rose-600 dark:text-rose-400">
                    -US$ {balancoComercialData.deficit.valor} bi
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-xs md:text-sm font-extrabold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                  ↑ +6,9% <span className="text-slate-400 dark:text-slate-500 font-normal text-xs">vs. 1º sem/2025</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Dependência estrutural externa
                </span>
              </div>
            </div>
          </div>

          {/* SEÇÃO INTERMEDIÁRIA: LEITURA ESTRATÉGICA & 3 PILARES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* LEITURA ESTRATÉGICA (Esquerda - 5 cols) */}
            <div className="lg:col-span-5 p-4 md:p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex flex-col gap-3 justify-center">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Target className="w-5 h-5 shrink-0" />
                <h4 className="text-xs md:text-sm font-black uppercase tracking-wider">
                  LEITURA ESTRATÉGICA
                </h4>
              </div>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                O setor eletroeletrônico mantém forte dependência externa, com importações aproximadamente 6 vezes superiores às exportações. O déficit comercial evidencia uma cadeia produtiva dependente de componentes tecnológicos importados, principalmente provenientes da Ásia.
              </p>
            </div>

            {/* 3 PILARES DE DEPENDÊNCIA (Direita - 7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* DEPENDÊNCIA TECNOLÓGICA */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <Cpu className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] md:text-xs font-black uppercase tracking-tight">
                    DEPENDÊNCIA TECNOLÓGICA
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal font-medium">
                  Componentes e semicondutores representam parcela relevante das importações.
                </p>
              </div>

              {/* CONCENTRAÇÃO GEOGRÁFICA */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <Globe className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] md:text-xs font-black uppercase tracking-tight">
                    CONCENTRAÇÃO GEOGRÁFICA
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal font-medium">
                  Ásia responde por US$ 17,95 bilhões das importações (70% do total).
                </p>
              </div>

              {/* OPORTUNIDADE ESTRATÉGICA */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] md:text-xs font-black uppercase tracking-tight">
                    OPORTUNIDADE ESTRATÉGICA
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal font-medium">
                  Expansão das exportações de produtos industriais de maior valor agregado.
                </p>
              </div>
            </div>
          </div>

          {/* SEÇÃO DE GRÁFICOS (2 COLUNAS) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* ESQUERDA: EVOLUÇÃO DO DÉFICIT COMERCIAL (US$ BILHÕES) */}
            <div className="p-4 md:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-4">
              <h4 className="text-xs md:text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider text-center">
                EVOLUÇÃO DO DÉFICIT COMERCIAL (US$ BILHÕES)
              </h4>

              {/* GRÁFICO DE BARRAS NEGATIVAS DÉFICIT */}
              <div className="relative pt-6 pb-2 pl-8 pr-4">
                {/* EIXO Y */}
                <div className="absolute left-0 top-6 bottom-8 flex flex-col justify-between text-xs md:text-sm font-black text-slate-500 dark:text-slate-400 pointer-events-none">
                  <span>0</span>
                  <span>-5</span>
                  <span>-10</span>
                  <span>-15</span>
                  <span>-20</span>
                  <span>-25</span>
                  <span>-30</span>
                </div>

                {/* BARRAS */}
                <div className="flex justify-around items-end h-44 border-t border-slate-300 dark:border-slate-700 relative">
                  {/* BARRA 1: 1º SEM/2025 (-20,25) */}
                  <div className="flex flex-col items-center gap-2 h-full justify-start pt-0 group z-10">
                    <div className="w-20 md:w-24 bg-[#0f172a] dark:bg-slate-800 rounded-b-md h-[67%] transition-all flex flex-col justify-end pb-2 items-center">
                      <span className="text-xs md:text-sm font-black text-white">
                        -20,25
                      </span>
                    </div>
                    <span className="text-xs md:text-sm font-black text-slate-700 dark:text-slate-300 mt-2">
                      1º SEM/2025
                    </span>
                  </div>

                  {/* SETA E LINHA TRACEJADA VERMELHA */}
                  <div className="absolute top-[62%] left-[30%] right-[30%] border-t-2 border-dashed border-red-500 pointer-events-none flex items-center justify-end">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-red-500 transform translate-x-1 -translate-y-[6px]"></div>
                  </div>

                  {/* BARRA 2: 1º SEM/2026 (-21,64) */}
                  <div className="flex flex-col items-center gap-2 h-full justify-start pt-0 group z-10">
                    <div className="w-20 md:w-24 bg-[#0f172a] dark:bg-slate-800 rounded-b-md h-[72%] transition-all flex flex-col justify-end pb-2 items-center">
                      <span className="text-xs md:text-sm font-black text-white">
                        -21,64
                      </span>
                    </div>
                    <span className="text-xs md:text-sm font-black text-slate-700 dark:text-slate-300 mt-2">
                      1º SEM/2026
                    </span>
                  </div>
                </div>
              </div>

              {/* CALLOUT FOOTER */}
              <div className="p-3 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/40 flex items-center gap-2.5 text-xs md:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-normal">
                <TrendingDown className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Déficit aumentou 6,9% devido ao crescimento das importações acima da capacidade exportadora do setor.</span>
              </div>
            </div>

            {/* DIREITA: ORIGEM DO DÉFICIT COMERCIAL – 1º SEM/2026 (US$ BILHÕES) */}
            <div className="p-4 md:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-4">
              <h4 className="text-xs md:text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider text-center">
                ORIGEM DO DÉFICIT COMERCIAL – 1º SEM/2026 (US$ BILHÕES)
              </h4>

              {/* HORIZONTAL BARS FOR DEFICIT ORIGIN */}
              <div className="flex flex-col gap-3 py-2">
                {/* Ásia (total) */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">Ásia (total)</span>
                    <div className="flex items-center gap-3 font-black">
                      <span className="text-slate-900 dark:text-white font-black text-xs md:text-sm">-17,50 bi</span>
                      <span className="text-slate-500 dark:text-slate-400 font-bold text-xs md:text-sm">(81%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-4 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full w-[81%]"></div>
                  </div>
                </div>

                {/* União Europeia */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">União Europeia</span>
                    <div className="flex items-center gap-3 font-black">
                      <span className="text-slate-900 dark:text-white font-black text-xs md:text-sm">-2,72 bi</span>
                      <span className="text-slate-500 dark:text-slate-400 font-bold text-xs md:text-sm">(13%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-4 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full w-[13%]"></div>
                  </div>
                </div>

                {/* Estados Unidos */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">Estados Unidos</span>
                    <div className="flex items-center gap-3 font-black">
                      <span className="text-slate-900 dark:text-white font-black text-xs md:text-sm">-1,02 bi</span>
                      <span className="text-slate-500 dark:text-slate-400 font-bold text-xs md:text-sm">(5%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-4 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full w-[5%]"></div>
                  </div>
                </div>

                {/* Demais Países */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">Demais Países</span>
                    <div className="flex items-center gap-3 font-black">
                      <span className="text-slate-900 dark:text-white font-black text-xs md:text-sm">-0,40 bi</span>
                      <span className="text-slate-500 dark:text-slate-400 font-bold text-xs md:text-sm">(2%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-4 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full w-[2%]"></div>
                  </div>
                </div>
              </div>

              {/* CALLOUT FOOTER */}
              <div className="p-3 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/40 flex items-center gap-2.5 text-xs md:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-normal">
                <Globe className="w-4 h-4 text-rose-600 shrink-0" />
                <span>A concentração das importações na Ásia é o principal fator do déficit comercial do setor.</span>
              </div>
            </div>
          </div>

          {/* BANNER DE CONCLUSÃO EXECUTIVA (RODAPÉ ESCURO COM ÍCONE DE ESTRELA) */}
          <div className="p-4 md:p-5 rounded-2xl bg-[#0f172a] text-white flex flex-col md:flex-row items-start md:items-center gap-4 shadow-md">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="text-sm font-black uppercase tracking-wider whitespace-nowrap text-white shrink-0">
                CONCLUSÃO EXECUTIVA
              </span>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                O setor apresenta crescimento das exportações, porém permanece estruturalmente dependente de fornecedores externos para componentes críticos. A redução dessa vulnerabilidade depende de maior competitividade industrial, diversificação de fornecedores e fortalecimento da cadeia tecnológica nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVIDÊNCIA OFICIAL E BOTÃO DE DOWNLOAD DO PDF ORIGINAL */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIA OFICIAL</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Relatório técnico oficial do Balanço Comercial Abinee/Decon/SECEX que fundamenta os dados desta página.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {BALANCO_EVIDENCES.map((ev) => (
            <EvidenceCard 
              key={ev.id} 
              evidence={ev} 
              onDownloadPdf={ev.isPdf ? () => handleDownloadPdf(ev.fileName) : undefined}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
