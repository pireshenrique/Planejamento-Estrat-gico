import React from 'react';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../../layout/HeaderKpiCard';
import { EvidenceCard } from '../../layout/EvidenceCard';
import { ENDIVIDAMENTO_EMPRESAS_EVIDENCES } from '../../../data/evidences/endividamento_empresas';
import { ENDIVIDAMENTO_DATA } from '../../../data/economia-brasileira/endividamento';
import { 
  Building2, 
  Wallet, 
  AlertTriangle, 
  BarChart3, 
  Search, 
  Target, 
  TrendingUp,
  Lightbulb,
  Briefcase,
  Layers,
  HelpCircle,
  Users,
  Sparkles,
  DollarSign
} from 'lucide-react';

interface EndividamentoEmpresasViewProps {
  setActivePage?: (page: string) => void;
  embedded?: boolean;
}

export const EndividamentoEmpresasView: React.FC<EndividamentoEmpresasViewProps> = ({ 
  setActivePage,
  embedded = false 
}) => {
  const handleDownloadPdf = async (fileName: string = 'Endividamento_Empresas_2026.pdf') => {
    try {
      const cleanName = fileName.replace(/^\//, '');
      const candidates = [
        `/${cleanName}`,
        cleanName.endsWith('.pdf') ? `/${cleanName.replace(/\.pdf$/, '')}-1.pdf` : `/${cleanName}-1.pdf`
      ];

      let blob: Blob | null = null;
      for (const targetUrl of candidates) {
        try {
          const response = await fetch(`${targetUrl}?t=${Date.now()}`, { cache: 'no-store' });
          if (response.ok) {
            blob = await response.blob();
            break;
          }
        } catch {
          // try next candidate
        }
      }

      if (!blob) throw new Error('Falha ao obter arquivo');

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', cleanName);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      const cleanName = fileName.replace(/^\//, '');
      const link = document.createElement('a');
      link.href = `/${cleanName}`;
      link.download = cleanName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const formatOneDecimal = (value: number) =>
    value.toLocaleString('pt-BR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

  const formatSignedPercent = (value: number) =>
    `${value >= 0 ? '+' : ''}${value.toLocaleString('pt-BR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}%`;

  const { 
    inadimplenciaMensal, 
    composicaoSetorial, 
    recuperacoesExtrajudiciais, 
    creditoEmpresarial 
  } = ENDIVIDAMENTO_DATA.empresas;

  // Derivações da Série Mensal
  const inicioSerie = inadimplenciaMensal[0];
  const fim2025 = inadimplenciaMensal.find(item => item.mes === 'dez/25');
  const ultimoPonto = inadimplenciaMensal[inadimplenciaMensal.length - 1];

  // Derivações das Recuperações Extrajudiciais
  const item2023 = recuperacoesExtrajudiciais.serie.find(item => item.ano === 2023);
  const item2025 = recuperacoesExtrajudiciais.serie.find(item => item.ano === 2025);
  const itemParcial = recuperacoesExtrajudiciais.serie.find(
    item => item.ano === recuperacoesExtrajudiciais.parcial.ano
  );

  const val2023 = item2023 ? item2023.value : 43;
  const val2025 = item2025 ? item2025.value : 82;
  const valParcial = itemParcial ? itemParcial.value : 44;

  const crescimento2023a2025 = val2023 > 0 
    ? ((val2025 - val2023) / val2023) * 100 
    : 0;

  const peakRecuperacaoVal = Math.max(...recuperacoesExtrajudiciais.serie.map(item => item.value));

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* HEADER */}
      {!embedded ? (
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
            <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Endividamento das Empresas
            </h1>
            <p className="text-[17px] text-slate-600 dark:text-slate-400">
              Acompanhamento da inadimplência empresarial, busca por crédito, condições de oferta bancária e vulnerabilidade financeira corporativa.
            </p>
          </div>

          <ResponsiveContainer minWidth="200px" gap="gap-3" className="flex-1">
            {/* Card 1: Inadimplência Empresarial */}
            <HeaderKpiCard
              title={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.title}
              value={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.value}
              context={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.context}
              explanation={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.explanation}
              source={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.source}
              icon={AlertTriangle}
              color="rose"
            />

            {/* Card 2: Dívidas Negativadas */}
            <HeaderKpiCard
              title={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.title}
              value={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.value}
              context={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.context}
              explanation={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.explanation}
              source={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.source}
              icon={DollarSign}
              color="blue"
            />

            {/* Card 3: Recuperações Judiciais */}
            <HeaderKpiCard
              title={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.title}
              value={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.value}
              valueSuffix={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.valueSuffix}
              context={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.context}
              explanation={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.explanation}
              source={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.source}
              icon={Building2}
              color="amber"
            />
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Inadimplência Empresarial */}
          <HeaderKpiCard
            title={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.title}
            value={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.value}
            context={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.context}
            explanation={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.explanation}
            source={ENDIVIDAMENTO_DATA.empresas.kpis.inadimplenciaEmpresarial.source}
            icon={AlertTriangle}
            color="rose"
          />

          {/* Card 2: Dívidas Negativadas */}
          <HeaderKpiCard
            title={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.title}
            value={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.value}
            context={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.context}
            explanation={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.explanation}
            source={ENDIVIDAMENTO_DATA.empresas.kpis.dividasNegativadas.source}
            icon={DollarSign}
            color="blue"
          />

          {/* Card 3: Recuperações Judiciais */}
          <HeaderKpiCard
            title={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.title}
            value={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.value}
            valueSuffix={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.valueSuffix}
            context={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.context}
            explanation={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.explanation}
            source={ENDIVIDAMENTO_DATA.empresas.kpis.recuperacoesJudiciais.source}
            icon={Building2}
            color="amber"
          />
        </div>
      )}

      {/* EVIDÊNCIAS DE DESTAQUE (TOP 3) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Principais notícias e dados</h2>
          </div>
        </div>
           
        {ENDIVIDAMENTO_EMPRESAS_EVIDENCES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {ENDIVIDAMENTO_EMPRESAS_EVIDENCES.slice(0, 3).map((ev: any) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev} 
                onDownloadPdf={ev.isPdf ? () => handleDownloadPdf(ev.fileName) : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Nenhuma notícia cadastrada no momento. Insira novas evidências para exibir nesta seção.
            </p>
          </div>
        )}
      </section>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* O que observar nos próximos meses */}
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
                        Inadimplência recorde, necessidade de crédito e maior restrição financeira
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>
                      Acompanhar a trajetória da inadimplência empresarial. O recorde de junho mostra que a pressão financeira permanece elevada, com micro e pequenas empresas concentrando a maior parte das empresas inadimplentes.
                    </li>
                    <li>
                      Monitorar a tensão entre demanda e oferta de crédito. A procura das empresas por crédito cresceu 9,2% nos 12 meses até junho, enquanto os bancos esperam manter condições mais restritivas no 3º trimestre.
                    </li>
                    <li>
                      Observar a evolução das recuperações judiciais como sinal de estresse financeiro mais severo. Os pedidos cresceram 65,8% entre o 2º trimestre de 2023 e o mesmo período de 2026, alcançando 6.341 casos. O avanço foi associado a juros elevados, crédito restrito e pressão sobre custos e atividade em setores como agropecuária, transporte, logística e varejo.
                    </li>
                    <li>
                      Acompanhar a capacidade de recomposição do caixa, especialmente entre empresas menores. Juros elevados, condições financeiras restritivas e desaceleração da atividade podem dificultar a reorganização das dívidas e a recuperação financeira.
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> Serasa Experian (Indicadores de Inadimplência e Demanda por Crédito), Banco Central do Brasil (Pesquisa de Condições de Crédito - PTC / UOL Economia) e Folha de S.Paulo (Recuperações Judiciais).
                  </div>
                </div>
              </div>
            </div>

            {/* Impacto para a empresa */}
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
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a Lorenzetti</h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Risco de crédito comercial, recebíveis e liquidez
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>
                      A inadimplência empresarial reforça a importância de acompanhar a capacidade de pagamento dos parceiros comerciais, especialmente em segmentos com maior exposição a micro e pequenas empresas.
                    </li>
                    <li>
                      A oferta de crédito mais restritiva pode aumentar a pressão financeira sobre empresas que dependem de financiamento, tornando mais relevante o equilíbrio entre prazo comercial, crescimento das vendas e exposição de crédito.
                    </li>
                    <li>
                      O aumento da inadimplência e das recuperações judiciais reforça a necessidade de monitorar recebíveis e antecipar sinais de deterioração financeira entre clientes e parceiros comerciais.
                    </li>
                    <li>
                      A maior pressão financeira reforça a necessidade de segmentar o risco comercial, equilibrando expansão de vendas, prazo concedido e segurança dos recebíveis.
                    </li>
                  </ul>
                  
                  <div className="p-3.5 bg-red-50/70 dark:bg-red-950/30 rounded-xl border border-red-100 dark:border-red-900/40 text-[13px] text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-red-800 dark:text-red-300 block mb-0.5 uppercase tracking-wider text-[11px]">SÍNTESE ESTRATÉGICA</span>
                    <p className="italic">
                      &quot;Inadimplência elevada, demanda por crédito ainda crescente e oferta mais restritiva reforçam a importância de monitorar a qualidade dos recebíveis, segmentar o risco comercial e preservar liquidez.&quot;
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> Hipóteses observacionais fundamentadas diretamente em dados da Serasa Experian, Banco Central do Brasil e Folha de S.Paulo.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMO A INADIMPLÊNCIA EMPRESARIAL ESTÁ EVOLUINDO? */}
      <section className="bg-white dark:bg-[#111827] p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight">
                COMO A INADIMPLÊNCIA EMPRESARIAL ESTÁ EVOLUINDO?
              </h3>
              <p className="text-[14px] text-slate-500 dark:text-slate-400">
                Evolução do problema, concentração por setor e sinais de reestruturação financeira
              </p>
            </div>
          </div>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-3 py-1.5 rounded-lg self-start md:self-auto">
            Análise Estratégica
          </span>
        </div>

        {/* GRID DOS 4 BLOCOS ANALÍTICOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* BLOCO 1: EVOLUÇÃO DA INADIMPLÊNCIA */}
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 lg:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-3 pb-2.5 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    A INADIMPLÊNCIA EMPRESARIAL RETOMA A ALTA E ATINGE NOVO RECORDE
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Empresas inadimplentes — milhões de empresas
                  </p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 shrink-0">
                  Série Mensal
                </span>
              </div>

              {/* 3 DESTAQUES NUMÉRICOS (MENORES E INTEGRADOS AO GRÁFICO) */}
              <div className="grid grid-cols-3 gap-2 mb-2.5">
                <div className="p-2 bg-slate-50/50 dark:bg-[#111827] rounded-lg border border-slate-100 dark:border-slate-800 text-center">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block">{inicioSerie ? inicioSerie.mes.toUpperCase() : 'JUN/25'}</span>
                  <span className="text-lg font-black text-slate-700 dark:text-slate-300">{inicioSerie ? formatOneDecimal(inicioSerie.value) : '7,8'} mi</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Início da série</span>
                </div>
                <div className="p-2 bg-slate-50/50 dark:bg-[#111827] rounded-lg border border-slate-100 dark:border-slate-800 text-center">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block">{fim2025 ? fim2025.mes.toUpperCase() : 'DEZ/25'}</span>
                  <span className="text-lg font-black text-slate-800 dark:text-slate-200">{fim2025 ? formatOneDecimal(fim2025.value) : '8,9'} mi</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Fim de 2025</span>
                </div>
                <div className="p-2 bg-rose-50/40 dark:bg-rose-950/20 rounded-lg border border-rose-100 dark:border-rose-900/40 text-center">
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase block">{ultimoPonto ? ultimoPonto.mes.toUpperCase() : 'JUN/26'}</span>
                  <span className="text-lg font-black text-rose-600 dark:text-rose-400">{ultimoPonto ? formatOneDecimal(ultimoPonto.value) : '9,1'} mi</span>
                  <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 block mt-0.5">Novo recorde</span>
                </div>
              </div>

              {/* GRÁFICO DE BARRAS DA SÉRIE MENSAL */}
              <div className="bg-white dark:bg-[#111827] rounded-xl border border-slate-100 dark:border-slate-800 p-2.5 mb-2.5">
                <div className="flex items-end justify-between gap-1 h-36 pt-4 pb-1">
                  {inadimplenciaMensal.map((item, idx) => {
                    const min = 7.0;
                    const max = 9.3;
                    const pct = Math.max(15, ((item.value - min) / (max - min)) * 100);
                    const isJun25 = idx === 0;
                    const isDez25 = item.mes === 'dez/25';
                    const isJun26 = idx === inadimplenciaMensal.length - 1;
                    const isDrop = idx > 0 && item.value < inadimplenciaMensal[idx - 1].value;

                    return (
                      <div key={item.mes} className="flex-1 flex flex-col items-center h-full justify-end group">
                        <span className={`text-[11px] sm:text-xs mb-1 leading-none ${
                          isJun26 ? 'text-rose-600 dark:text-rose-400 font-black' :
                          isDez25 || isJun25 ? 'text-slate-700 dark:text-slate-300 font-bold' :
                          'text-slate-400 dark:text-slate-500 font-medium'
                        }`}>
                          {formatOneDecimal(item.value)}
                        </span>
                        <div className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-t-sm flex items-end h-full">
                          <div 
                            className={`w-full rounded-t-sm transition-all duration-500 ${
                              isJun26 ? 'bg-rose-600 dark:bg-rose-500' :
                              isDez25 ? 'bg-slate-700 dark:bg-slate-400' :
                              isJun25 ? 'bg-slate-500 dark:bg-slate-500' :
                              isDrop ? 'bg-slate-300 dark:bg-slate-700' :
                              'bg-slate-400/80 dark:bg-slate-600'
                            }`}
                            style={{ height: `${pct}%` }}
                          />
                        </div>
                        <span className={`text-[10px] sm:text-[11px] mt-1.5 leading-tight text-center truncate w-full ${
                          isJun26 ? 'font-bold text-rose-600 dark:text-rose-400' :
                          isDez25 || isJun25 ? 'font-bold text-slate-700 dark:text-slate-300' :
                          'text-slate-400 dark:text-slate-500'
                        }`}>
                          {item.mes.split('/')[0]}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
                  <span>Trajetória: <strong className="text-slate-700 dark:text-slate-300">{inicioSerie ? formatOneDecimal(inicioSerie.value) : '7,8'} mi → {ultimoPonto ? formatOneDecimal(ultimoPonto.value) : '9,1'} mi</strong> ({inicioSerie ? inicioSerie.mes.replace(/^./, c => c.toUpperCase()) : 'Jun/25'} → {ultimoPonto ? ultimoPonto.mes.replace(/^./, c => c.toUpperCase()) : 'Jun/26'})</span>
                  <span className="font-semibold text-rose-600 dark:text-rose-400">Recorde histórico</span>
                </div>
              </div>

              {/* CAIXA O QUE ISSO MOSTRA */}
              <div className="px-3 py-2.5 bg-slate-50/80 dark:bg-slate-800/30 rounded-lg text-sm leading-relaxed">
                <span className="font-bold text-slate-700 dark:text-slate-300 mr-1.5">O QUE ISSO MOSTRA:</span>
                <span className="text-slate-600 dark:text-slate-400">O número de empresas inadimplentes não avançou de forma linear: após uma pequena redução no início de 2026, a inadimplência retomou a alta e atingiu novo recorde em junho.</span>
              </div>
            </div>

            {/* FONTE */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500">
              Fonte: Serasa Experian
            </div>
          </div>

          {/* BLOCO 2: CONCENTRAÇÃO SETORIAL */}
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 lg:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-3 pb-2.5 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    SERVIÇOS CONCENTRAM A MAIOR PARTE DA INADIMPLÊNCIA
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Participação das empresas inadimplentes por setor — {composicaoSetorial.periodoAnterior} vs. {composicaoSetorial.periodoAtual}
                  </p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shrink-0">
                  Composição
                </span>
              </div>

              {/* GRÁFICO DE BARRAS COMPARATIVO HORIZONTAL */}
              <div className="bg-white dark:bg-[#111827] rounded-xl border border-slate-100 dark:border-slate-800 p-3.5 mb-3 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <span>SETOR ECONÔMICO</span>
                  <div className="flex items-center gap-4">
                    <span>{composicaoSetorial.periodoAnterior.toUpperCase()}</span>
                    <span className="text-blue-600 dark:text-blue-400">{composicaoSetorial.periodoAtual.toUpperCase()}</span>
                  </div>
                </div>

                {composicaoSetorial.setores.map((item) => {
                  const isLeader = item.label === 'Serviços' || item.label === 'Comércio';
                  return (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm">
                        <span className={`font-medium ${isLeader ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}>
                          {item.label}
                        </span>
                        <div className="flex items-center gap-4">
                          <span className="text-[13px] text-slate-400 dark:text-slate-500 font-medium w-9 text-right">{formatOneDecimal(item.anterior)}%</span>
                          <span className={`text-sm font-bold w-10 text-right ${isLeader ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
                            {formatOneDecimal(item.atual)}%
                          </span>
                        </div>
                      </div>
                      {/* Barra de comparação - Somente Jun/26 */}
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden flex">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            item.label === 'Serviços' ? 'bg-blue-600 dark:bg-blue-500' :
                            item.label === 'Comércio' ? 'bg-indigo-500 dark:bg-indigo-400' :
                            'bg-slate-300 dark:bg-slate-600'
                          }`} 
                          style={{ width: `${item.atual}%` }} 
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* NOTA METODOLÓGICA */}
              <div className="mb-2.5 px-3 py-2 bg-slate-50/80 dark:bg-slate-800/30 rounded-lg text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                <span className="font-semibold text-slate-600 dark:text-slate-300">Nota metodológica:</span> Percentual das empresas inadimplentes pertencentes a cada setor; os valores representam a composição da inadimplência, não a taxa de inadimplência de cada setor.
              </div>

              {/* CAIXA O QUE ISSO MOSTRA */}
              <div className="px-3 py-2.5 bg-slate-50/80 dark:bg-slate-800/30 rounded-lg text-sm leading-relaxed">
                <span className="font-bold text-slate-700 dark:text-slate-300 mr-1.5">O QUE ISSO MOSTRA:</span>
                <span className="text-slate-600 dark:text-slate-400">Serviços concentram mais da metade das empresas inadimplentes e ampliaram sua participação em relação a junho de 2025, enquanto o Comércio perdeu participação.</span>
              </div>
            </div>

            {/* FONTE */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500">
              Fonte: Serasa Experian
            </div>
          </div>

          {/* BLOCO 3: RECUPERAÇÕES EXTRAJUDICIAIS */}
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 lg:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-3 pb-2.5 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    RECUPERAÇÕES EXTRAJUDICIAIS GANHAM ESCALA
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Número de recuperações extrajudiciais — 2020 a ago/26
                  </p>
                  <p className="text-[11px] text-purple-600/90 dark:text-purple-400/90 mt-1 font-semibold flex items-center gap-1">
                    <HelpCircle className="w-3 h-3" /> Outro mecanismo de reestruturação financeira
                  </p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 shrink-0">
                  Extrajudicial
                </span>
              </div>

              {/* CARDS DE DESTAQUE */}
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <div className="p-3 bg-purple-50/50 dark:bg-purple-950/20 rounded-xl border border-purple-100 dark:border-purple-900/40">
                  <span className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase block">2023 → 2025</span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-2xl font-black text-purple-700 dark:text-purple-400">{formatSignedPercent(crescimento2023a2025)}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 block mt-0.5">{val2023} → {val2025} casos</span>
                  <span className="text-[11px] text-slate-400 block mt-1">Crescimento derivado da série</span>
                </div>

                <div className="p-3 bg-slate-50/50 dark:bg-[#111827] rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase block">{recuperacoesExtrajudiciais.parcial.ano} (PARCIAL)</span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-2xl font-black text-slate-800 dark:text-slate-200">{valParcial} casos</span>
                  </div>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 block mt-0.5">Acumulado até {recuperacoesExtrajudiciais.parcial.acumuladoAte}</span>
                </div>
              </div>

              {/* GRÁFICO ANUAL */}
              <div className="bg-white dark:bg-[#111827] rounded-xl border border-slate-100 dark:border-slate-800 p-3 mb-2.5">
                <div className="flex items-end justify-between gap-2 h-28 pt-2 pb-1">
                  {recuperacoesExtrajudiciais.serie.map((item) => {
                    const maxVal = 90;
                    const pct = Math.max(12, (item.value / maxVal) * 100);
                    const isOld = item.ano <= 2022;
                    const isBase = item.ano === 2023;
                    const isPeak = item.value === peakRecuperacaoVal;
                    const isPartial = item.ano === recuperacoesExtrajudiciais.parcial.ano;
                    return (
                      <div key={item.ano} className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className={`text-xs mb-1.5 leading-none ${
                          isPeak ? 'text-purple-700 dark:text-purple-400 font-black' :
                          isPartial ? 'text-amber-600 dark:text-amber-400 font-bold' :
                          isOld ? 'text-slate-400 dark:text-slate-500 font-medium' :
                          'text-slate-600 dark:text-slate-400 font-bold'
                        }`}>
                          {item.value}
                        </span>
                        <div className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-t-sm flex items-end h-full">
                          <div 
                            className={`w-full rounded-t-sm transition-all duration-500 ${
                              isPeak ? 'bg-purple-600 dark:bg-purple-500' :
                              isPartial ? 'bg-amber-400 dark:bg-amber-500/80' :
                              isBase ? 'bg-purple-400 dark:bg-purple-700' :
                              isOld ? 'bg-slate-200 dark:bg-slate-700' :
                              'bg-purple-300 dark:bg-purple-800/60'
                            }`}
                            style={{ height: `${pct}%` }}
                          />
                        </div>
                        <span className={`text-[11px] mt-1.5 leading-tight text-center ${
                          isPeak ? 'font-bold text-purple-700 dark:text-purple-400' :
                          isPartial ? 'font-bold text-amber-600 dark:text-amber-400' :
                          isOld ? 'text-slate-400 dark:text-slate-500' :
                          'text-slate-500 dark:text-slate-400 font-medium'
                        }`}>
                          {item.ano}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* NOTA METODOLÓGICA */}
              <div className="mb-2.5 px-3 py-2 bg-slate-50/80 dark:bg-slate-800/30 rounded-lg text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                <span className="font-semibold text-slate-600 dark:text-slate-300">Nota metodológica:</span> Recuperação extrajudicial e recuperação judicial são mecanismos distintos de reestruturação de dívidas.
              </div>

              {/* CAIXA O QUE ISSO MOSTRA */}
              <div className="px-3 py-2.5 bg-slate-50/80 dark:bg-slate-800/30 rounded-lg text-sm leading-relaxed">
                <span className="font-bold text-slate-700 dark:text-slate-300 mr-1.5">O QUE ISSO MOSTRA:</span>
                <span className="text-slate-600 dark:text-slate-400">As recuperações extrajudiciais ganharam escala até 2025, indicando maior utilização desse mecanismo de renegociação fora do Judiciário. O dado de 2026 ainda é parcial.</span>
              </div>
            </div>

            {/* FONTE */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500">
              Fonte: Indicadores de Recuperação Extrajudicial (Serasa Experian / Reuters)
            </div>
          </div>

          {/* BLOCO 4: A TENSÃO NO CRÉDITO */}
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 lg:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-3 pb-2.5 border-b border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    A TENSÃO NO CRÉDITO
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Demanda corporativa em alta vs. oferta bancária mais restritiva
                  </p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shrink-0">
                  Dinâmica Financeira
                </span>
              </div>

              {/* PAINEL DUPLO DE DEMANDA X OFERTA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
                {/* Lado 1: DEMANDA (Procura por Crédito) */}
                <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30 flex flex-col">
                  <div className="border-b border-blue-100/80 dark:border-blue-900/40 pb-2 mb-2">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block mb-1">
                      PROCURA POR CRÉDITO PJ
                    </span>
                    <span className="text-[11px] text-blue-600/70 dark:text-blue-400/70 block">
                      {creditoEmpresarial.demanda.periodo}
                    </span>
                  </div>
                  
                  <div className="mb-2.5">
                    <span className="text-3xl font-black text-blue-700 dark:text-blue-400 leading-none">
                      {formatSignedPercent(creditoEmpresarial.demanda.crescimentoGeral)}
                    </span>
                    <span className="block mt-1 text-[11px] font-medium text-blue-600/80 dark:text-blue-400/80 leading-tight">
                      Crescimento da procura empresarial por crédito
                    </span>
                  </div>

                  <div className="space-y-1.5 mt-auto">
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">{creditoEmpresarial.demanda.segmentos.mpes.label}</span>
                      <span className="font-bold text-blue-700 dark:text-blue-400">{formatSignedPercent(creditoEmpresarial.demanda.segmentos.mpes.value)}</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">{creditoEmpresarial.demanda.segmentos.grandes.label}</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">{formatSignedPercent(creditoEmpresarial.demanda.segmentos.grandes.value)}</span>
                    </div>
                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">{creditoEmpresarial.demanda.segmentos.medias.label}</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">{formatSignedPercent(creditoEmpresarial.demanda.segmentos.medias.value)}</span>
                    </div>
                  </div>
                </div>

                {/* Lado 2: OFERTA (Banco Central) */}
                <div className="p-4 bg-amber-50/40 dark:bg-amber-950/10 rounded-xl border border-amber-100 dark:border-amber-900/30 flex flex-col">
                  <div className="border-b border-amber-100/80 dark:border-amber-900/40 pb-2 mb-2">
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider block mb-1">
                      OFERTA BANCÁRIA
                    </span>
                    <span className="text-[11px] text-amber-700/70 dark:text-amber-500/70 block">
                      BANCO CENTRAL — PTC
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-lg font-black text-amber-700 dark:text-amber-500 leading-tight block">
                      {creditoEmpresarial.oferta.status}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Expectativa {creditoEmpresarial.oferta.periodoExpectativa}:</span> bancos projetam manutenção de condições mais restritivas para grandes empresas e MPMEs*, apontando a inadimplência como principal fator limitador da oferta.
                    </p>
                  </div>
                </div>
              </div>

              {/* SÍNTESE RELACIONAL */}
              <div className="bg-slate-50/50 dark:bg-slate-800/20 rounded-xl border border-slate-100 dark:border-slate-800 p-3 mb-2.5 text-center flex flex-col items-center">
                <span className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase block mb-1">
                  Necessidade de financiamento <span className="mx-1 text-slate-300 dark:text-slate-600">×</span> Condições de concessão
                </span>
                <span className="text-xs font-black text-slate-700 dark:text-slate-300 block mb-1">
                  A TENSÃO ESTÁ ENTRE NECESSIDADE E ACESSO
                </span>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  A procura por financiamento continua crescendo, enquanto os bancos esperam manter condições mais restritivas de concessão. O crédito continua relevante para financiar capital de giro, equilibrar o fluxo de caixa e sustentar as operações das empresas.
                </p>
              </div>

              {/* CAIXA O QUE ISSO MOSTRA */}
              <div className="px-3 py-2.5 bg-slate-50/80 dark:bg-slate-800/30 rounded-lg text-sm leading-relaxed">
                <span className="font-bold text-slate-700 dark:text-slate-300 mr-1.5">O QUE ISSO MOSTRA:</span>
                <span className="text-slate-600 dark:text-slate-400">As empresas continuam buscando crédito mesmo em um ambiente de maior restrição bancária. Essa combinação pode aumentar a pressão sobre capital de giro e fluxo de caixa, especialmente entre empresas com menor capacidade financeira.</span>
              </div>
            </div>

            {/* FONTE E NOTA */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-1">
              <span className="text-[10px] text-slate-400 dark:text-slate-500">
                * MPEs e MPMEs: referem-se a Micro, Pequenas e Médias Empresas.
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500">
                Fonte: Serasa Experian (Demanda) e Banco Central do Brasil (PTC)
              </span>
            </div>
          </div>

        </div>

        {/* FAIXA HORIZONTAL DE CONCLUSÃO DA SEÇÃO */}
        <div className="mt-4 bg-slate-900 dark:bg-slate-800 rounded-xl p-4 md:px-5 flex flex-col md:flex-row items-start md:items-center gap-3.5 shadow-md border border-slate-800 dark:border-slate-700">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
            <Lightbulb className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-black uppercase tracking-widest text-blue-400 block mb-1.5">
              O QUE OS DADOS REVELAM
            </span>
            <p className="text-[15px] md:text-base font-medium text-slate-200 leading-relaxed">
              A inadimplência empresarial retomou a alta e permanece concentrada principalmente em Serviços e Comércio. Ao mesmo tempo, a necessidade de crédito continua elevada enquanto a oferta permanece mais restritiva, aumentando a pressão sobre empresas com menor capacidade financeira.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUTRAS NOTÍCIAS */}
      {ENDIVIDAMENTO_EMPRESAS_EVIDENCES.length > 3 && (
        <section id="evidencias" className="scroll-mt-12 relative mt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">Outras Notícias</h2>
            </div>
          </div>
             
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {ENDIVIDAMENTO_EMPRESAS_EVIDENCES.slice(3).map((ev: any) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev} 
                onDownloadPdf={ev.isPdf ? () => handleDownloadPdf(ev.fileName) : undefined}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
