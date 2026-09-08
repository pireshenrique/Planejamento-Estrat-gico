import { EvidenceCard } from '../layout/EvidenceCard';
import { useState } from 'react';
import { Target, TrendingUp, Search, Globe, FileText, Scale, ShieldCheck, DollarSign, Layers, Percent, ArrowUpRight, AlertTriangle, CheckCircle2, Building2, BarChart2, Download, Eye, X, Printer, FileCheck, ExternalLink } from 'lucide-react';
import { SOBRETAXAS_EVIDENCES } from '../../data/evidences/sobretaxas';

interface ImposicaoSobretaxasViewProps {
  setActivePage: (page: string) => void;
}

export function ImposicaoSobretaxasView({ setActivePage }: ImposicaoSobretaxasViewProps) {
  const [selectedDocument, setSelectedDocument] = useState<boolean>(false);
  const [activePageTab, setActivePageTab] = useState<'iframe' | 'overview' | 'page1' | 'page2' | 'page3'>('iframe');

  // Dados exatos extraídos do Relatório Indicadores Abinee (Julho/Agosto 2026)
  const exportEvolution = [
    { ano: '2020', valor: 1.2 },
    { ano: '2021', valor: 1.4 },
    { ano: '2022', valor: 1.5 },
    { ano: '2023', valor: 1.7 },
    { ano: '2024', valor: 2.0 },
    { ano: '2025', valor: 2.1 },
  ];

  const exportShare = [
    { destino: 'Estados Unidos (EUA)', pct: '26%', destaque: true },
    { destino: 'ALADI (exceto Argentina)', pct: '25%', destaque: false },
    { destino: 'Argentina', pct: '18%', destaque: false },
    { destino: 'Ásia (exceto China)', pct: '10%', destaque: false },
    { destino: 'Demais Países do Mundo', pct: '10%', destaque: false },
    { destino: 'União Européia', pct: '9%', destaque: false },
    { destino: 'China', pct: '2%', destaque: false },
  ];

  const tradeBalance = {
    exp: 'US$ 2.133,6 mi',
    imp: 'US$ 4.784,8 mi',
    saldo: '-US$ 2.651,2 mi',
  };

  const mitigationMeasures = [
    'Ampliação dos programas de apoio às exportações por meio de crédito, garantias e seguro de exportação;',
    'Fortalecimento das ações de promoção comercial e abertura de mercados alternativos;',
    'Apoio à obtenção de certificações internacionais e homologações necessárias para acesso a novos mercados;',
    'Instrumentos que reforcem a competitividade da indústria nacional exportadora diante do aumento das barreiras comerciais;',
    'Insistir nas negociações diplomáticas e comerciais com o Governo dos EUA para revisão ou flexibilização das medidas tarifárias.'
  ];

  // Evidências do tópico - Apenas o Relatório Oficial PDF Anexado
  

  const handleDownloadPdf = async () => {
    try {
      const response = await fetch('/Indicadores_Abinee_Sobretaxas_EUA_Julho_2026.pdf?t=' + Date.now(), {
        cache: 'no-store'
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Indicadores_Abinee_Sobretaxas_EUA_Julho_2026.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      const link = document.createElement('a');
      link.href = '/Indicadores_Abinee_Sobretaxas_EUA_Julho_2026.pdf?t=' + Date.now();
      link.download = 'Indicadores_Abinee_Sobretaxas_EUA_Julho_2026.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      {/* HEADER E BARRA DE IDENTIFICAÇÃO */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-5/12 shrink-0">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-[13px] font-bold tracking-wider uppercase">Indicadores Abinee</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-[13px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">Comércio Exterior (Julho/2026)</span>
          </div>
          <h1 className="text-[28px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Imposição de Sobretaxas pelos EUA
          </h1>
          <p className="text-[15px] md:text-[16px] text-slate-600 dark:text-slate-400">
            Impactos sobre os produtos brasileiros exportados do Setor Elétrico e Eletrônico
          </p>
        </div>

        {/* METRIC CARDS OFICIAIS (DOCUMENTO ABINEE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full flex-1">
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Exposição ao mercado americano</span>
              <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                <DollarSign className="w-4.5 h-4.5" />
              </div>
            </div>
            <div>
              <h3 className="text-[26px] 2xl:text-[30px] font-black text-blue-600 dark:text-blue-400 leading-none">US$ 2,1 bilhões</h3>
              <p className="text-[12px] text-slate-500 mt-2 font-medium">Exportações brasileiras para os EUA em 2025</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Produtos impactados</span>
              <div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Percent className="w-4.5 h-4.5" />
              </div>
            </div>
            <div>
              <h3 className="text-[26px] 2xl:text-[30px] font-black text-amber-600 dark:text-amber-400 leading-none">91%</h3>
              <p className="text-[12px] text-slate-500 mt-2 font-medium">Participação das exportações ao EUA atingidas pelas sobretaxas</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Nova carga tarifária</span>
              <div className="w-8 h-8 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400">
                <AlertTriangle className="w-4.5 h-4.5" />
              </div>
            </div>
            <div>
              <h3 className="text-[26px] 2xl:text-[30px] font-black text-red-600 dark:text-red-400 leading-none">Até 37,5%</h3>
              <p className="text-[12px] text-slate-500 mt-2 font-medium">Impacto acumulado das medidas tarifárias</p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. LEITURA ESTRATÉGICA & IMPACTO LORENZETTI */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm shrink-0">1</div>
          <h2 className="text-[26px] md:text-[30px] font-extrabold text-slate-900 dark:text-white leading-tight">
            Sobretaxas dos EUA elevam tarifa a 37,5% <span className="text-red-600 dark:text-red-400">e atingem 70% dos subitens NCM do setor</span>.
          </h2>
        </div>
        
        <div className="mb-0">
          <div className="flex flex-col gap-5">
            {/* O QUE ACONTECEU E O QUE EXPLICA O RESULTADO */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-slate-100 dark:text-slate-800/50 leading-none pointer-events-none select-none">
                01
              </div>
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  
                  <div className="pt-1">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que aconteceu e o que explica o resultado</h4>
                    <div className="inline-flex bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-slate-700 dark:text-slate-300 font-semibold">
                        Sobretaxa americana amplia custo de acesso ao principal mercado externo do setor.
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <p>
                    Os Estados Unidos anunciaram novas sobretaxas sobre produtos brasileiros exportados, elevando a carga tarifária acumulada para até <strong className="text-slate-800 dark:text-slate-200">37,5%</strong> em grande parte dos produtos eletroeletrônicos. A medida ocorre no âmbito das Seções 301 e 232 do USTR, afetando <strong className="text-slate-800 dark:text-slate-200">864 dos 1.240 subitens NCM do setor</strong>, aproximadamente 70% do universo tarifário analisado.
                  </p>
                  <p>
                    O impacto é relevante porque o mercado americano representa um dos principais destinos das exportações brasileiras do setor. Em 2025, as exportações eletroeletrônicas brasileiras totalizaram <strong className="text-slate-800 dark:text-slate-200">US$ 8,1 bilhões</strong>, sendo <strong className="text-slate-800 dark:text-slate-200">US$ 2,1 bilhões</strong> destinados aos Estados Unidos (26%). Deste valor, aproximadamente <strong className="text-slate-800 dark:text-slate-200">US$ 1,9 bilhão</strong> estava relacionado aos produtos atingidos pelas novas tarifas.
                  </p>
                  <p>
                    O setor havia conquistado espaço no mercado americano nos últimos anos, com crescimento de aproximadamente <strong className="text-slate-800 dark:text-slate-200">80% entre 2020 e 2025</strong>, passando de US$ 1,2 bilhão para US$ 2,1 bilhões exportados. A nova barreira comercial coloca em risco parte dessa evolução.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Fonte: ABINEE.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* O QUE OBSERVAR NOS PRÓXIMOS MESES */}
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
                          Redirecionamento de mercados, manutenção das exportações e revisão de investimentos.
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      O principal ponto de atenção será a capacidade das empresas brasileiras de absorver o aumento tarifário sem perder competitividade frente a fornecedores internacionais.
                    </p>
                    <p>
                      A substituição do mercado americano por outros destinos apresenta desafios, pois muitos produtos eletroeletrônicos possuem especificações técnicas, certificações e normas próprias, dificultando uma rápida realocação dos volumes exportados.
                    </p>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      Os próximos meses devem indicar:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 pl-1 text-slate-700 dark:text-slate-300">
                      <li>Evolução das negociações comerciais entre Brasil e Estados Unidos;</li>
                      <li>Possíveis medidas governamentais de apoio aos exportadores;</li>
                      <li>Capacidade das empresas em acessar novos mercados;</li>
                      <li>Revisão de investimentos relacionados à expansão da capacidade exportadora.</li>
                    </ul>
                    <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                      Fonte: ABINEE.
                    </div>
                  </div>
                </div>
              </div>

              {/* IMPACTO PARA A LORENZETTI */}
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
                      <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a Lorenzetti</h4>
                      <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                        <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                          Pressão sobre margens, estratégia comercial e avaliação de mercados externos.
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                    <p>
                      Para empresas expostas ao mercado internacional, o aumento das tarifas pode pressionar margens de exportação e exigir revisão das estratégias comerciais, principalmente em produtos destinados aos Estados Unidos.
                    </p>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      O cenário pode gerar três impactos principais:
                    </p>
                    <div className="flex flex-col gap-3">
                      <div className="p-3 bg-red-50/50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/30">
                        <div className="font-bold text-slate-900 dark:text-white mb-1">1. Precificação e margem</div>
                        <div className="text-slate-600 dark:text-slate-300">
                          A elevação dos custos tarifários pode exigir revisão de preços ou absorção parcial do impacto para manter competitividade.
                        </div>
                      </div>
                      <div className="p-3 bg-red-50/50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/30">
                        <div className="font-bold text-slate-900 dark:text-white mb-1">2. Diversificação comercial</div>
                        <div className="text-slate-600 dark:text-slate-300">
                          A necessidade de reduzir dependência do mercado americano pode acelerar busca por novos mercados internacionais.
                        </div>
                      </div>
                      <div className="p-3 bg-red-50/50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/30">
                        <div className="font-bold text-slate-900 dark:text-white mb-1">3. Planejamento industrial</div>
                        <div className="text-slate-600 dark:text-slate-300">
                          Uma eventual redução dos volumes exportados pode influenciar decisões relacionadas à capacidade produtiva e investimentos futuros.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANÁLISE ESTRATÉGICA VISUAL E MATRIZ DE RISCO */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm shrink-0">2</div>
          <div>
            <h2 className="text-[22px] md:text-[26px] font-extrabold text-slate-900 dark:text-white leading-tight">
              Análise Estratégica Visual
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Avaliação de trajetória histórica, dependência de mercados, matriz de riscos e respostas estratégicas.
            </p>
          </div>
        </div>

        {/* LINHA 1: BLOCO 1 E BLOCO 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BLOCO 1 — EVOLUÇÃO DAS EXPORTAÇÕES PARA OS EUA */}
          <div className="bg-white dark:bg-[#111827] p-6 md:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              {/* TÍTULO */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">Como estava a evolução antes do problema?</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Evolução das exportações brasileiras para os EUA</h3>
                  </div>
                </div>
              </div>

              {/* EXPLICAÇÃO / INTERPRETAÇÃO ACIMA DO GRÁFICO */}
              <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs md:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                O Brasil ampliou sua presença no mercado americano entre 2020 e 2025, com crescimento aproximado de 80% nas exportações. As novas sobretaxas colocam em risco a continuidade dessa trajetória e podem reduzir a competitividade dos produtos brasileiros.
              </div>

              {/* GRÁFICO DE BARRAS */}
              <div className="flex items-end justify-between gap-3 h-44 pt-4 px-3 border-b border-slate-200 dark:border-slate-800">
                {exportEvolution.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <span className="text-xs font-extrabold text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      US$ {item.valor} bi
                    </span>
                    <div
                      className="w-full bg-blue-600 dark:bg-blue-500 rounded-t-lg transition-all group-hover:bg-blue-700 dark:group-hover:bg-blue-400"
                      style={{ height: `${(item.valor / 2.5) * 100}%` }}
                    ></div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-1">{item.ano}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONCLUSÃO ESTRATÉGICA / OBJETIVO */}
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Objetivo:</span>
              <span>Mostrar que existia uma trajetória positiva antes da mudança tarifária.</span>
            </div>
          </div>

          {/* BLOCO 2 — DEPENDÊNCIA DOS DESTINOS DE EXPORTAÇÃO */}
          <div className="bg-white dark:bg-[#111827] p-6 md:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              {/* TÍTULO */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block">Qual é o nível de exposição atual?</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Distribuição das exportações por destino (2025)</h3>
                  </div>
                </div>
              </div>

              {/* BARRAS HORIZONTAIS / RANKING VISUAL */}
              <div className="flex flex-col gap-2.5 my-4">
                {[
                  { destino: 'Estados Unidos', pct: 26, color: 'bg-blue-600 dark:bg-blue-500', isMajor: true },
                  { destino: 'ALADI (exceto Argentina)', pct: 25, color: 'bg-slate-700 dark:bg-slate-400' },
                  { destino: 'Argentina', pct: 18, color: 'bg-slate-600 dark:bg-slate-500' },
                  { destino: 'Ásia (exceto China)', pct: 10, color: 'bg-slate-500 dark:bg-slate-600' },
                  { destino: 'Demais países', pct: 10, color: 'bg-slate-500 dark:bg-slate-600' },
                  { destino: 'União Europeia', pct: 9, color: 'bg-slate-400 dark:bg-slate-700' },
                  { destino: 'China', pct: 2, color: 'bg-slate-300 dark:bg-slate-800' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1 text-xs">
                    <div className="flex items-center justify-between font-semibold">
                      <span className={item.isMajor ? 'text-blue-700 dark:text-blue-400 font-extrabold' : 'text-slate-700 dark:text-slate-300'}>
                        {item.destino}
                      </span>
                      <span className={item.isMajor ? 'text-blue-700 dark:text-blue-400 font-black' : 'text-slate-900 dark:text-white font-bold'}>
                        {item.pct}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${item.color}`}
                        style={{ width: `${item.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MENSAGEM ESTRATÉGICA */}
              <div className="p-3.5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 text-xs md:text-[13px] text-purple-900 dark:text-purple-200 font-medium leading-relaxed">
                A concentração dos embarques em poucos mercados aumenta a exposição das empresas brasileiras a mudanças comerciais e tarifárias.
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Objetivo:</span>
              <span>Mostrar que o risco não está apenas na tarifa, mas na dependência de determinados mercados.</span>
            </div>
          </div>
        </div>

        {/* LINHA 2: BLOCO 3 E BLOCO 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BLOCO 3 — SEGMENTOS MAIS EXPOSTOS (MATRIZ DE RISCO) */}
          <div className="bg-white dark:bg-[#111827] p-6 md:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              {/* TÍTULO */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">Quais segmentos possuem maior risco?</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Segmentos mais expostos às sobretaxas</h3>
                  </div>
                </div>

                {/* LEGENDA DE RISCO */}
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase">
                  <span className="flex items-center gap-1 text-red-600 dark:text-red-400">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> Alto
                  </span>
                  <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span> Médio
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Baixo
                  </span>
                </div>
              </div>

              {/* CARDS DA MATRIZ DE RISCO */}
              <div className="flex flex-col gap-3.5 my-2">
                {/* ITEM 1 */}
                <div className="p-4 rounded-2xl bg-red-50/40 dark:bg-red-950/20 border border-red-200/80 dark:border-red-900/40 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      Automação Industrial
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase bg-red-100 text-red-700 dark:bg-red-900/60 dark:text-red-300">
                      Risco: Alto
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">Motivo:</strong> Produtos com alta especificação técnica e direcionados à indústria americana.
                  </p>
                </div>

                {/* ITEM 2 */}
                <div className="p-4 rounded-2xl bg-red-50/40 dark:bg-red-950/20 border border-red-200/80 dark:border-red-900/40 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      Componentes Elétricos e Eletrônicos
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase bg-red-100 text-red-700 dark:bg-red-900/60 dark:text-red-300">
                      Risco: Alto
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">Motivo:</strong> Grande quantidade de subitens NCM afetados e impacto potencial sobre margens.
                  </p>
                </div>

                {/* ITEM 3 */}
                <div className="p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      Geração, Transmissão, Distribuição e Armazenamento (GTD)
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
                      Risco: Médio/Alto
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">Motivo:</strong> Equipamentos dependentes de requisitos técnicos e padrões regulatórios específicos.
                  </p>
                </div>
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Objetivo:</span>
              <span>Facilitar a identificação dos pontos críticos.</span>
            </div>
          </div>

          {/* BLOCO 4 — RESPOSTAS ESTRATÉGICAS POSSÍVEIS (CAMINHOS ESTRATÉGICOS PARA MITIGAÇÃO - TIMELINE) */}
          <div className="bg-white dark:bg-[#111827] p-6 md:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              {/* TÍTULO */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Quais caminhos estratégicos podem ser avaliados?</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Caminhos estratégicos para mitigação</h3>
                  </div>
                </div>
              </div>

              {/* TIMELINE DE RESPOSTAS ESTRATÉGICAS */}
              <div className="flex flex-col gap-4 my-2 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {/* HORIZONTE 1: CURTO PRAZO */}
                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs mt-0.5">
                    1
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex-1">
                    <span className="text-[11px] font-black uppercase text-blue-600 dark:text-blue-400 tracking-wider block mb-1">
                      Curto prazo
                    </span>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <li>Negociação comercial e diplomática</li>
                      <li>Avaliação de impacto tarifário</li>
                      <li>Ajustes de precificação</li>
                    </ul>
                  </div>
                </div>

                {/* HORIZONTE 2: MÉDIO PRAZO */}
                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs mt-0.5">
                    2
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex-1">
                    <span className="text-[11px] font-black uppercase text-amber-600 dark:text-amber-400 tracking-wider block mb-1">
                      Médio prazo
                    </span>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <li>Diversificação de mercados internacionais</li>
                      <li>Busca por novos clientes</li>
                      <li>Adequação de certificações e homologações</li>
                    </ul>
                  </div>
                </div>

                {/* HORIZONTE 3: LONGO PRAZO */}
                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs mt-0.5">
                    3
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex-1">
                    <span className="text-[11px] font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider block mb-1">
                      Longo prazo
                    </span>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <li>Aumento da competitividade industrial</li>
                      <li>Redução da dependência de mercados específicos</li>
                      <li>Estratégias de internacionalização</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Objetivo:</span>
              <span>Transformar a informação em direcionamento estratégico.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Notícias e relatórios oficiais em anexo que fundamentam esta visão estratégica.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {SOBRETAXAS_EVIDENCES.map((ev) => (
            <EvidenceCard 
              key={ev.id} 
              evidence={ev as any} 
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
                    <span className="text-xs text-slate-400">03/08/2026</span>
                  </div>
                  <h3 className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white leading-tight mt-0.5">
                    IMPACTOS DA IMPOSIÇÃO DE SOBRETAXAS SOBRE PRODUTOS EXPORTADOS PARA OS EUA
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

            {/* BARRA DE NAVEGAÇÃO DE PÁGINAS DO DOCUMENTO */}
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
                    onClick={() => setActivePageTab('overview')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all ${activePageTab === 'overview' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    Visão Completa
                  </button>
                  <button
                    onClick={() => setActivePageTab('page1')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all ${activePageTab === 'page1' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    Página 1 (Medidas EUA)
                  </button>
                  <button
                    onClick={() => setActivePageTab('page2')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all ${activePageTab === 'page2' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    Página 2 (Estatísticas & Setores)
                  </button>
                  <button
                    onClick={() => setActivePageTab('page3')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all ${activePageTab === 'page3' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    Página 3 (Propostas Abinee)
                  </button>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-400">
                <FileCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Documento PDF Anexado (Decon/Abinee - 03/08/2026)</span>
              </div>
            </div>

            {/* CORPO DO DOCUMENTO */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-100 dark:bg-slate-950 flex flex-col gap-6">
              
              {/* VISUALIZADOR IFRAME DO ARQUIVO PDF ORIGINAL */}
              {activePageTab === 'iframe' && (
                <div className="w-full flex flex-col items-center gap-3">
                  <div className="w-full flex items-center justify-between bg-blue-50 dark:bg-blue-950/60 p-3 rounded-xl border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200">
                    <span>Exibindo o arquivo PDF oficial anexado <strong>Indicadores_Abinee_Sobretaxas_EUA_Julho_2026.pdf</strong>.</span>
                    <button
                      onClick={handleDownloadPdf}
                      className="inline-flex items-center gap-1 font-bold text-blue-700 dark:text-blue-300 underline hover:text-blue-900"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Baixar Arquivo PDF Inserido
                    </button>
                  </div>
                  <iframe 
                    src="/Indicadores_Abinee_Sobretaxas_EUA_Julho_2026.pdf?v=original" 
                    className="w-full h-[700px] rounded-xl border border-slate-300 dark:border-slate-800 shadow-md bg-white"
                    title="Visualizador PDF Original - Sobretaxas Abinee"
                  />
                </div>
              )}
              
              {/* PÁGINA 1 */}
              {(activePageTab === 'overview' || activePageTab === 'page1') && (
                <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-4xl mx-auto w-full flex flex-col gap-4 text-slate-800 dark:text-slate-200">
                  <div className="w-full flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800 text-[12px] font-bold text-slate-500">
                    <span className="text-amber-600 font-extrabold uppercase">Indicadores Abinee</span>
                    <span>PÁGINA 1 DE 3 - DECON / ABINEE (03/08/2026)</span>
                  </div>

                  <div className="text-center my-2">
                    <h2 className="text-lg font-black uppercase text-slate-900 dark:text-white tracking-wide">
                      IMPACTOS DA IMPOSIÇÃO DE SOBRETAXAS SOBRE PRODUTOS BRASILEIROS EXPORTADOS PARA OS ESTADOS UNIDOS
                    </h2>
                    <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1">
                      SETOR ELÉTRICO E ELETRÔNICO – JULHO DE 2026
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base mt-2 border-b border-slate-100 dark:border-slate-800 pb-1">
                      Imposição de sobretaxas pelos Estados Unidos
                    </h3>
                    <p>
                      Os Estados Unidos anunciaram, em <strong>15 de julho de 2026</strong>, a aplicação de uma sobretaxa de <strong>25%</strong> sobre as importações de produtos brasileiros, com vigência a partir de 22 de julho, em decorrência da investigação conduzida sob a <strong>Seção 301 do Escritório de Representação Comercial dos Estados Unidos da América (USTR)</strong>.
                    </p>
                    <p>
                      Vale lembrar que os Estados Unidos já haviam aplicado uma sobretaxa de <strong>25%</strong> às importações de produtos derivados de aço, alumínio, cobre, no âmbito da <strong>Seção 232 do USTR</strong>, que entrou em vigor em abril deste ano. Dessa forma, a recente ampliação das medidas da Seção 301 não resultou na sobreposição de uma nova tarifa adicional de 25% sobre os produtos taxados na Seção 232.
                    </p>
                    <p>
                      Porém, no dia <strong>23 de julho</strong>, os Estados Unidos anunciaram a aplicação de uma tarifa adicional de <strong>12,5%</strong> sobre produtos brasileiros, com vigência a partir de 24 de julho, conduzida sob a Seção 301 sob o argumento de combate ao comércio de bens produzidos com trabalho forçado.
                    </p>
                    <p className="bg-amber-50 dark:bg-amber-950/40 p-3 rounded-lg border border-amber-200 dark:border-amber-900/50 font-semibold text-amber-900 dark:text-amber-200">
                      Com a nova sobretaxa eleva-se para <strong>37,5%</strong> a carga sobre grande parte das exportações de produtos do setor, comprometendo ainda mais a competitividade dos produtos fabricados no país no mercado dos Estados Unidos.
                    </p>

                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base mt-4 border-b border-slate-100 dark:border-slate-800 pb-1">
                      Impactos no Setor Elétrico e Eletrônico
                    </h3>
                    <p>
                      O Setor Elétrico e Eletrônico é representado por <strong>1.240 subitens da NCM</strong>, das quais <strong>864 subitens (70% do universo tarifário do setor)</strong> foram atingidos pelas sobretaxas decorrentes da Seção 232 ou da Seção 301.
                    </p>
                    <p>
                      No ano de 2025, as exportações totais de produtos elétricos e eletrônicos somaram <strong>US$ 8,1 bilhões</strong>. O mercado dos Estados Unidos representa um dos principais destinos de exportação para diversos fabricantes do setor, registrando <strong>US$ 2,1 bilhões</strong>, com participação de <strong>26%</strong> do total exportado.
                    </p>
                  </div>
                </div>
              )}

              {/* PÁGINA 2 */}
              {(activePageTab === 'overview' || activePageTab === 'page2') && (
                <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-4xl mx-auto w-full flex flex-col gap-4 text-slate-800 dark:text-slate-200">
                  <div className="w-full flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800 text-[12px] font-bold text-slate-500">
                    <span className="text-amber-600 font-extrabold uppercase">Indicadores Abinee</span>
                    <span>PÁGINA 2 DE 3 - DECON / ABINEE (03/08/2026)</span>
                  </div>

                  <div className="flex flex-col gap-3 text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <p>
                      Ainda em 2025, as exportações para os Estados Unidos desses 864 subitens do setor, atingidos pelo aumento das tarifas adicionais, alcançaram <strong>US$ 1,9 bilhão</strong>, o que representou <strong>91% do total exportado pelo setor para este destino (US$ 2,1 bilhões)</strong>.
                    </p>
                    <p>
                      É importante lembrar que, ao longo dos últimos cinco anos, as exportações do setor para os Estados Unidos cresceram <strong>80%</strong>, passando de <strong>US$ 1,2 bilhão em 2020</strong> para <strong>US$ 2,1 bilhão em 2025</strong>.
                    </p>
                    <p>
                      O principal impacto da imposição das sobretaxas pelos Estados Unidos é a <strong>redução da competitividade dos produtos brasileiros</strong> e, consequente, a perda gradual da participação nesse mercado.
                    </p>
                    <p>
                      Esses fatores deverão levar as empresas a reavaliarem investimentos destinados à expansão da capacidade exportadora e poderá gerar influência indireta sobre produção e geração de empregos vinculados às operações de exportação.
                    </p>
                    <p className="bg-blue-50 dark:bg-blue-950/40 p-3.5 rounded-lg border border-blue-200 dark:border-blue-900/50">
                      <strong>Áreas Mais Afetadas:</strong> Esses impactos deverão ser percebidos de forma diferente em cada uma das áreas do setor, com destaque, principalmente, para as áreas de <strong>Automação Industrial</strong>, <strong>Componentes Elétricos e Eletrônicos</strong> e <strong>Geração, Transmissão, Distribuição e Armazenamento de Energia Elétrica (GTD)</strong>, cujas participações das exportações de produtos para os EUA, que tiveram elevação nas tarifas, representaram em média cerca de <strong>14% do faturamento em 2025</strong>.
                    </p>
                    <p>
                      Adicionalmente, vale lembrar que, no ano de 2025, a balança comercial do setor com os Estados Unidos teve um <strong>déficit de US$ 2,7 bilhões</strong>, visto que as exportações brasileiras foram de US$ 2,1 bilhões e as importações foram de US$ 4,8 bilhões.
                    </p>

                    <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-xs mb-2 uppercase">
                        Balança Comercial do Setor com os EUA (2025)
                      </h4>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                          <span className="block text-[10px] text-slate-500 font-bold uppercase">Exportações</span>
                          <span className="font-extrabold text-emerald-600 dark:text-emerald-400">US$ 2.133,6 mi</span>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                          <span className="block text-[10px] text-slate-500 font-bold uppercase">Importações</span>
                          <span className="font-extrabold text-red-600 dark:text-red-400">US$ 4.784,8 mi</span>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                          <span className="block text-[10px] text-slate-500 font-bold uppercase">Saldo Comercial</span>
                          <span className="font-extrabold text-slate-900 dark:text-white">-US$ 2.651,2 mi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PÁGINA 3 */}
              {(activePageTab === 'overview' || activePageTab === 'page3') && (
                <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-4xl mx-auto w-full flex flex-col gap-4 text-slate-800 dark:text-slate-200">
                  <div className="w-full flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800 text-[12px] font-bold text-slate-500">
                    <span className="text-amber-600 font-extrabold uppercase">Indicadores Abinee</span>
                    <span>PÁGINA 3 DE 3 - DECON / ABINEE (03/08/2026)</span>
                  </div>

                  <div className="flex flex-col gap-3 text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-1">
                      Redirecionamento
                    </h3>
                    <p>
                      O redirecionamento dos volumes atualmente destinados aos Estados Unidos apresenta <strong>elevada complexidade</strong>, seja por aspectos técnicos, seja por razões de ausência de demanda específica. Vale destacar que muitos equipamentos do setor possuem características técnicas fortemente associadas às normas, regulamentações e especificações próprias de cada mercado, o que torna difícil vender estes bens em outros países.
                    </p>

                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base mt-4 border-b border-slate-100 dark:border-slate-800 pb-1">
                      Medidas para mitigação dos efeitos sugeridas pela Abinee
                    </h3>
                    <div className="flex flex-col gap-2.5 mt-1">
                      {mitigationMeasures.map((m, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80">
                          <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                            {m}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
                      <span><strong>Fonte Oficial:</strong> Abinee/Decon – 03/08/2026</span>
                      <span><strong>Autores:</strong> Cristina Tozzi Keller, Peterson Richard Monteiro e Sabrina Souza da Silva</span>
                    </div>
                  </div>
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
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Arquivo PDF</span>
                </button>
                <button
                  onClick={() => setSelectedDocument(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER NAVEGAÇÃO */}
      <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
        <span className="text-xs text-slate-500">Setor Eletroeletrônico &bull; Imposição de Sobretaxas pelos EUA</span>
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
