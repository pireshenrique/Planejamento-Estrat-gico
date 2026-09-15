import { precoCommoditiesData } from "../../data/eletroeletronico/precoCommodities";
import { useState } from 'react';
import { COMMODITY_EVIDENCES } from '../../data/evidences/commodity';
import { 
  Coins, 
  TrendingUp, 
  BarChart3, 
  Target, 
  ArrowUpRight, 
  ExternalLink, 
  Globe, 
  Activity, 
  Download, 
  FileText, 
  Search, 
  Box, 
  Sparkles, 
  Flame, 
  Building2, 
  Printer, 
  X, 
  FileCheck, 
  Scale, 
  BarChart2, 
  Globe2, 
  AlertTriangle 
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { EvidenceCard } from '../layout/EvidenceCard';

interface PrecoCommoditiesViewProps {
  setActivePage: (page: string) => void;
}

interface CommodityItem {
  name: string;
  category: string;
  unit: string;
  variationDollar: number;
  impactSector: string;
  relevanceLorenzetti: string;
  evidenceSource: string;
}

const COMMODITY_DATA: CommodityItem[] = [
  {
    name: 'Alumínio',
    category: 'Metais Industriais',
    unit: 'Var. em Dólares (05/25 a 04/26)',
    variationDollar: 45.0,
    impactSector: 'Dissipadores térmicos, perfis de extrusão, carcaças de motores e estrutura de painéis.',
    relevanceLorenzetti: 'Pode aumentar o custo de componentes metálicos, estruturas e dissipadores de calor.',
    evidenceSource: 'Abinee/Decon – Carta de Conjuntura Março/2026 (Quadro 1)'
  },
  {
    name: 'Prata',
    category: 'Metais Preciosos',
    unit: 'Var. em Dólares (05/25 a 04/26)',
    variationDollar: 42.0,
    impactSector: 'Contatos elétricos de alta condutividade em relés, disjuntores e chaves.',
    relevanceLorenzetti: 'Pode influenciar o custo de fabricação de contatos de chaves elétricas e circuitos de controle.',
    evidenceSource: 'Abinee/Decon – Carta de Conjuntura Março/2026 (Quadro 1)'
  },
  {
    name: 'Petróleo (Brent)',
    category: 'Energia & Petroquímica',
    unit: 'Var. em Dólares (05/25 a 04/26)',
    variationDollar: 41.0,
    impactSector: 'Combustíveis, frete logístico global e cadeia de insumos sintéticos.',
    relevanceLorenzetti: 'Pode gerar pressão nos custos de frete rodoviário, frete marítimo de importação e derivados petroquímicos.',
    evidenceSource: 'Abinee/Decon – Carta de Conjuntura Março/2026 (Quadro 1)'
  },
  {
    name: 'Ouro',
    category: 'Metais Preciosos',
    unit: 'Var. em Dólares (05/25 a 04/26)',
    variationDollar: 40.0,
    impactSector: 'Reserva de valor e revestimento especial de conectores e microeletrônica.',
    relevanceLorenzetti: 'Pode refletir a busca global por ativos de proteção contra risco fiscal e depreciação monetária.',
    evidenceSource: 'Abinee/Decon – Carta de Conjuntura Março/2026 (Quadro 1)'
  },
  {
    name: 'Cobre',
    category: 'Metais Industriais',
    unit: 'Var. em Dólares (05/25 a 04/26)',
    variationDollar: 28.0,
    impactSector: 'Condutores elétricos, fios esmaltados, enrolamentos de motores, resistências e transformadores.',
    relevanceLorenzetti: 'Pode demandar acompanhamento contínuo dos custos de resistências elétricas, fiação interna e barramentos.',
    evidenceSource: 'Abinee/Decon – Carta de Conjuntura Março/2026 (Quadro 1)'
  },
  {
    name: 'Níquel',
    category: 'Metais Industriais',
    unit: 'Var. em Dólares (05/25 a 04/26)',
    variationDollar: 25.0,
    impactSector: 'Ligas metálicas especiais, ligas de resistências de níquel-cromo e banhos anticorrosivos.',
    relevanceLorenzetti: 'Pode impactar elementos de aquecimento de níquel-cromo e tratamentos superficiais metálicos.',
    evidenceSource: 'Abinee/Decon – Carta de Conjuntura Março/2026 (Quadro 1)'
  },
  {
    name: 'Polipropileno (PP)',
    category: 'Resinas Petroquímicas',
    unit: 'Var. em Dólares (05/25 a 04/26)',
    variationDollar: 17.0,
    impactSector: 'Resina termoplástica para injeção de corpos moldados, tampas e carcaças de eletrodomésticos.',
    relevanceLorenzetti: 'Pode elevar custos da injeção plástica de corpos de duchas, purificadores de água e acessórios.',
    evidenceSource: 'Abinee/Decon – Carta de Conjuntura Março/2026 (Quadro 1)'
  },
  {
    name: 'Minério de ferro',
    category: 'Siderurgia & Ligas',
    unit: 'Var. em Dólares (05/25 a 04/26)',
    variationDollar: 10.0,
    impactSector: 'Chapas de aço silício, estruturas metálicas de sustentação e utilidades domésticas.',
    relevanceLorenzetti: 'Pode representar risco moderado de alta em chapas siderúrgicas e componentes de suporte.',
    evidenceSource: 'Abinee/Decon – Carta de Conjuntura Março/2026 (Quadro 1)'
  }
];

const COMMODITY_GRUPOS = [
  { name: 'Alumínio', category: 'Metais Industriais', var: '+45.0%', icon: <Box className="w-5 h-5" />, lorenzettiImpact: 'Pode elevar custos de dissipadores térmicos, perfis de extrusão e estruturas.' },
  { name: 'Prata', category: 'Metais Preciosos', var: '+42.0%', icon: <Sparkles className="w-5 h-5" />, lorenzettiImpact: 'Pode influenciar custos de contatos elétricos de alta condutividade em chaves.' },
  { name: 'Petróleo Brent', category: 'Energia & Fretes', var: '+41.0%', icon: <Flame className="w-5 h-5" />, lorenzettiImpact: 'Pode gerar pressão sobre fretes rodoviários, marítimos e insumos sintéticos.' },
  { name: 'Cobre', category: 'Metais Industriais', var: '+28.0%', icon: <Coins className="w-5 h-5" />, lorenzettiImpact: 'Pode pressionar custos de resistências elétricas, fiação interna e barramentos.' },
  { name: 'Polipropileno', category: 'Resinas Petroquímicas', var: '+17.0%', icon: <Activity className="w-5 h-5" />, lorenzettiImpact: 'Pode elevar custos de injeção plástica de duchas, purificadores e acessórios.' }
];



export function PrecoCommoditiesView({ setActivePage }: PrecoCommoditiesViewProps) {
  const [selectedDocument, setSelectedDocument] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['Todas', 'Metais Industriais', 'Metais Preciosos', 'Energia & Petroquímica', 'Resinas Petroquímicas', 'Siderurgia & Ligas'];

  const filteredCommodities = COMMODITY_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.impactSector.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadPdf = async () => {
    try {
      const response = await fetch('/Indicadores_Abinee_Sobretaxas_EUA_Julho_2026.pdf?t=' + Date.now(), {
        cache: 'no-store'
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Carta_Conjuntura_Abinee_Preco_Commodities_2026.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      const link = document.createElement('a');
      link.href = '/Indicadores_Abinee_Sobretaxas_EUA_Julho_2026.pdf?t=' + Date.now();
      link.download = 'Carta_Conjuntura_Abinee_Preco_Commodities_2026.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const generateJsPdfReport = () => {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
    
    doc.setFillColor(11, 23, 54);
    doc.rect(0, 0, 210, 24, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('PORTAL DE INTELIGÊNCIA ESTRATÉGICA LORENZETTI', 15, 12);
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    doc.text('Relatório Oficial: O Choque de Preços de Commodities e seus Efeitos (Abinee 2026)', 15, 18);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('VARIAÇÃO DE PREÇOS EM DÓLARES DE COMMODITIES (MAIO/2025 A ABRIL/2026)', 15, 34);

    let y = 42;
    COMMODITY_DATA.forEach((item, i) => {
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'bold');
      doc.text(`${i + 1}. ${item.name} (${item.category})`, 15, y);
      doc.setFont('helvetica', 'normal');
      doc.text(`Variação acumulada no período (05/2025 a 04/2026): +${item.variationDollar.toFixed(1)}%`, 15, y + 4.5);
      y += 14;
    });

    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text('Fonte Oficial: Abinee / Decon - Carta de Conjuntura Março/2026 (Publicado em 12/05/2026)', 105, 285, { align: 'center' });

    doc.save('Relatorio_Abinee_Choque_Precos_Commodities_2026.pdf');
  };

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* HEADER */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">Preço de Commodities</h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">
            Acompanhamento do choque de oferta, cotações em dólares e impacto em insumos industriais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center shrink-0">
              <Coins className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Maior Alta (05/25-04/26)</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-amber-600 dark:text-amber-400 leading-none">+{precoCommoditiesData.commodities.aluminio},0%</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Alumínio em Dólares</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Índice CRB</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-indigo-600 dark:text-indigo-400 leading-none">+150%</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">vs. Pré-pandemia (2018-19)</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Efeito Câmbio</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[26px] 2xl:text-[28px] font-black text-emerald-600 dark:text-emerald-400 leading-none">~10%</h3>
              </div>
              <p className="text-[14px] text-slate-400 mt-0.5 leading-tight">Apreciação do R$ em 2025-26</p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-sm shrink-0">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">Choque de Commodities <span className="text-amber-600 dark:text-amber-400">pressiona insumos e fretes</span>, exigindo gestão de custos.</h2>
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
                    <Coins className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  
                  <div className="pt-1">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que aconteceu e o que explica o resultado</h4>
                    <div className="inline-flex bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold">
                        Aumento expressivo de dois dígitos na maioria das commodities industriais e metais preciosos.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                    Segundo a <strong className="text-slate-800 dark:text-slate-200">Carta de Conjuntura Abinee (Março/2026 - publicada em 12/05/2026)</strong>, no último ano a economia mundial sofreu importantes choques de oferta decorrentes de três fatores centrais: (a) a escalada tarifária dos EUA e a decorrente retaliação dos países afetados; (b) o novo conflito no Oriente Médio envolvendo os EUA, Israel e Irã; e (c) o déficit fiscal norte-americano, aumento da dívida federal e o resultante aumento do risco percebido sobre os ativos em dólar.
                  </p>
                  <p>
                    O fato mais marcante foi o extraordinário aumento de preços da maioria das commodities. De maio de 2025 a abril de 2026, destacam-se as altíssimas variações em dólares: <strong className="text-slate-800 dark:text-slate-200">Alumínio (+45%)</strong>, <strong className="text-slate-800 dark:text-slate-200">Prata (+42%)</strong>, <strong className="text-slate-800 dark:text-slate-200">Petróleo Brent (+41%)</strong>, <strong className="text-slate-800 dark:text-slate-200">Ouro (+40%)</strong>, <strong className="text-slate-800 dark:text-slate-200">Cobre (+28%)</strong>, <strong className="text-slate-800 dark:text-slate-200">Níquel (+25%)</strong>, <strong className="text-slate-800 dark:text-slate-200">Polipropileno (+17%)</strong> e <strong className="text-slate-800 dark:text-slate-200">Minério de Ferro (+10%)</strong>.
                  </p>
                  <p>
                    O índice de preços de commodities em dólares situa-se atualmente cerca de <strong className="text-slate-800 dark:text-slate-200">15% acima do pico observado na saída da pandemia (2021-22)</strong> e <strong className="text-slate-800 dark:text-slate-200">150% superior ao período pré-pandemia (2018-19)</strong>. No Brasil, o aumento dos preços domésticos foi parcialmente amortecido pela apreciação de cerca de 10% do Real frente ao Dólar no período de 2025-26.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Evidência Utilizada: Abinee / Decon - Carta de Conjuntura – Março/2026 ("O choque de preços de commodities e seus efeitos", publicada em 12/05/2026).
                  </div>
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
                          Risco de estagflação global, trajetória da Selic e espaço fiscal no Brasil.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      Existe o temor de que o mundo ingresse em um ciclo de estagflação (aumento da taxa de inflação acompanhado por queda de renda e emprego), onde aumentos de juros mitigam a inflação mas reduzem o nível de atividade econômica.
                    </p>
                    <p>
                      Entre os pontos de acompanhamento destacados pelo estudo da Abinee estão a persistência do choque de custos ("cost push inflation") no mercado internacional, as expectativas de inflação no Brasil com o IPCA em 4,8% frente à meta de 3%, a postura do Banco Central quanto à manutenção ou interrompimento do ciclo de corte de juros, e as restrições fiscais decorrentes do aumento de cerca de 10 pontos percentuais na relação dívida-PIB nos últimos quatro anos.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidência Utilizada: Abinee / Decon – Carta de Conjuntura Março/2026 (p. 2-3).
                    </div>
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
                          Pressão em custos de matérias-primas e acompanhamento de margens.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      Em conformidade estrita com a governança corporativa, a expressiva alta do Alumínio (+45%), Cobre (+28%) e Polipropileno (+17%) <strong className="text-slate-800 dark:text-slate-200">pode gerar pressão</strong> sobre os custos de matérias-primas de resistências elétricas, condutores e corpos injetados de duchas e purificadores de água.
                    </p>
                    <p>
                      Além disso, a aceleração da inflação de custos ("cost push inflation") no cenário global <strong className="text-slate-800 dark:text-slate-200">pode demandar acompanhamento</strong> atento das margens de contribuição e estratégias comerciais de repasse ao longo da cadeia.
                    </p>
                    <p>
                      Por fim, a manutenção de taxas elevadas de juros no Brasil para conter as pressões inflacionárias <strong className="text-slate-800 dark:text-slate-200">pode influenciar</strong> as condições de crédito ao comércio varejista e o poder de compra do consumidor final.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Evidência Utilizada: Hipóteses observacionais baseadas em Abinee / Decon (12/05/2026).
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. QUADRO DETALHADO DE COMMODITIES */}
      <section className="bg-white dark:bg-[#111827] rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded">
                Dados Oficiais Abinee (Quadro 1)
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Variações de Preços em Dólares das Commodities
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Filtre por categoria ou pesquise para analisar aplicações setoriais e hipóteses observacionais Lorenzetti.
            </p>
          </div>

          <button
            onClick={generateJsPdfReport}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-white text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Exportar Relatório PDF</span>
          </button>
        </div>

        {/* FILTROS E BUSCA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Buscar commodity..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* TABELA DE COTAÇÕES */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/80 dark:bg-slate-800/80 text-[11px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                <th className="p-3.5">Commodity / Insumo</th>
                <th className="p-3.5">Categoria</th>
                <th className="p-3.5 text-right">Variação em Dólares (05/25 a 04/26)</th>
                <th className="p-3.5">Aplicação no Setor Eletroeletrônico</th>
                <th className="p-3.5">Hipótese Observacional Lorenzetti</th>
                <th className="p-3.5">Evidência / Fonte</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
              {filteredCommodities.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-slate-500 dark:text-slate-400 font-medium">
                    {item.category}
                  </td>
                  <td className="p-3.5 text-right font-black text-amber-600 dark:text-amber-400 text-sm">
                    +{item.variationDollar.toFixed(1)}%
                  </td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">
                    {item.impactSector}
                  </td>
                  <td className="p-3.5 text-slate-700 dark:text-slate-300 max-w-xs leading-relaxed bg-amber-50/30 dark:bg-amber-950/10 font-medium">
                    {item.relevanceLorenzetti}
                  </td>
                  <td className="p-3.5 text-slate-500 text-[11px]">
                    {item.evidenceSource}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Notícias e dados base que fundamentam esta visão estratégica.</p>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {COMMODITY_EVIDENCES.map((ev) => (
            <EvidenceCard 
              key={ev.id} 
              evidence={ev} 
              onViewPdf={ev.isPdf ? () => setSelectedDocument(true) : undefined}
              onDownloadPdf={ev.isPdf ? handleDownloadPdf : undefined}
            />
          ))}
        </div>
      </section>

      {/* MODAL DE VISUALIZAÇÃO DO DOCUMENTO PDF OFICIAL */}
      {selectedDocument && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-3 md:p-6 overflow-y-auto">
          <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[94vh] flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">
            
            {/* BARRA DE TÍTULO DO MODAL */}
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
                    <span className="text-xs text-slate-400">12/05/2026</span>
                  </div>
                  <h3 className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white leading-tight mt-0.5">
                    CARTA DE CONJUNTURA MARÇO/2026 – O CHOQUE DE PREÇOS DE COMMODITIES
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={handleDownloadPdf}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                  title="Baixar arquivo PDF oficial completo"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar PDF (.pdf)</span>
                </button>

                <button
                  onClick={() => setSelectedDocument(false)}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all ml-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* CORPO DO DOCUMENTO */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-100 dark:bg-slate-950 flex flex-col gap-6">
              <iframe 
                src="/Indicadores_Abinee_Sobretaxas_EUA_Julho_2026.pdf?v=commodities2" 
                className="w-full h-[700px] rounded-xl border border-slate-300 dark:border-slate-800 shadow-md bg-white"
                title="Visualizador PDF Original - Commodities Abinee"
              />
            </div>

            {/* RODAPÉ DO MODAL */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Fonte original: Abinee - Associação Brasileira da Indústria Elétrica e Eletrônica (12/05/2026)
              </span>
              <button
                onClick={() => setSelectedDocument(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER NAVEGAÇÃO */}
      <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
        <span className="text-xs text-slate-500">Setor Eletroeletrônico &bull; Preço de Commodities Setoriais</span>
        <button
          onClick={() => setActivePage('Indústria do Setor Eletroeletrônico')}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
        >
          Voltar ao Painel Eletroeletrônico
        </button>
      </div>

    </div>
  );
}
