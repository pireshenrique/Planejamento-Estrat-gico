import React, { useState, useEffect } from 'react';
import { Compass, BarChart3, Maximize2, ZoomIn, X, ExternalLink } from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import { MERCADO_IMOBILIARIO_DATA } from '../../data/cenario-habitacional/mercadoImobiliario';

interface MercadoImobiliarioViewProps {
  setActivePage?: (page: string) => void;
}

export function MercadoImobiliarioView({ setActivePage }: MercadoImobiliarioViewProps) {
  const currentData = MERCADO_IMOBILIARIO_DATA;
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageModalOpen(false);
      }
    };
    if (isImageModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageModalOpen]);

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* CABEÇALHO COM TÍTULO E SUBTÍTULO (SEM OS BOTÕES REGIONAIS) */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
              Mercado Imobiliário
            </h1>
            <p className="text-sm sm:text-[16px] text-slate-600 dark:text-slate-400">
              O mercado imobiliário residencial apresentou sinais mistos no primeiro semestre de 2026. O volume de financiamento aumentou e as vendas ainda acumulavam crescimento no semestre, mas o segundo trimestre mostrou desaceleração de lançamentos e vendas, menor velocidade de comercialização dos imóveis e expectativas mais cautelosas para a construção em um ambiente de juros e custos elevados.
            </p>
          </div>
        </div>
      </div>

      {/* 1. CARD UNIFICADO: STATUS E PRINCIPAIS NOTÍCIAS (COMPACTADO EM ALTURA) */}
      <section>
        <div className="w-full bg-white dark:bg-[#111827] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-3.5 sm:p-5 md:p-6 shadow-sm">
          {/* Cabeçalho do Card Compacto */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3.5">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                  Status e principais notícias
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                  {currentData.statusSubtitle || 'Principais desdobramentos e pontos de atenção para o setor imobiliário'}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0 hidden sm:inline-block">
              Síntese Estratégica
            </span>
          </div>

          {/* Destaque de Status do Cenário Compacto */}
          <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-xl p-2.5 sm:px-3.5 sm:py-2.5 border border-slate-200/70 dark:border-slate-700/60 mb-2.5 sm:mb-3.5">
            <p className="text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-snug font-medium">
              {currentData.observeSummary}
            </p>
          </div>

          {/* Lista Unificada de Pontos Sob Monitoramento em 2 Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-snug">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="font-bold text-slate-900 dark:text-white mb-2">
                {currentData.observeTitle || 'Últimas notícias e dados apurados'}
              </div>
              {currentData.observeNotes.map((note, idx) => (
                <div key={`obs-${idx}`} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0 mt-1.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="font-bold text-slate-900 dark:text-white mb-2">Possíveis impactos para a Lorenzetti:</div>
              {currentData.lorenzettiImpacts.map((imp, idx) => (
                <div key={`imp-${idx}`} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0 mt-1.5" />
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGEM ANEXADA: OPERAÇÕES DAS CONSTRUTORAS (2º TRI E 1º SEMESTRE DE 2026) */}
      <section className="w-full">
        <div className="w-full bg-white dark:bg-[#111827] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-3.5 sm:p-5 md:p-6 shadow-sm flex flex-col gap-3 sm:gap-4">
          {/* Header do Card com Título e Ação de Ampliar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5 sm:pb-3">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Desempenho Operacional das Incorporadoras (2º Tri e 1º Semestre de 2026)
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                  Lançamentos, vendas e velocidade de vendas (VSO) compilados de 14 companhias abertas
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setIsImageModalOpen(true)}
                className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                title="Ampliar gráfico em tela cheia"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ampliar Gráfico</span>
              </button>
            </div>
          </div>

          {/* Container da Imagem com Moldura e Zoom Interativo */}
          <div 
            onClick={() => setIsImageModalOpen(true)}
            className="group relative w-full overflow-hidden rounded-lg sm:rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white p-2 sm:p-4 cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors shadow-xs"
            title="Clique para ampliar o infográfico"
          >
            <img
              src="/valor_incorporadoras_2t2026.png"
              alt="Construtoras seguram lançamentos e vendas crescem menos - Desempenho no 2º trimestre e no primeiro semestre de 2026"
              className="w-full h-auto object-contain max-h-[580px] mx-auto rounded transition-transform duration-200 group-hover:scale-[1.005]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-slate-900/85 text-white text-[11px] font-medium flex items-center gap-1.5 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
              <ZoomIn className="w-3.5 h-3.5" />
              Clique para ampliar
            </div>
          </div>

          {/* Rodapé Informativo e Rastreabilidade */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800/80">
            <span>Fonte: prévias operacionais de 14 companhias; apuração Valor Econômico (valores em R$ milhões).</span>
            <span className="font-medium text-slate-600 dark:text-slate-300">
              ¹ Minha Casa, Minha Vida e Médio e Alto Padrão • ² Venda sobre oferta, na média entre as empresas
            </span>
          </div>
        </div>
      </section>

      {/* 2. PRINCIPAIS NOTÍCIAS E DADOS (EVIDÊNCIAS FACTUAIS DO TEMA SELECIONADO) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 sm:mb-4 gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4">
          <div>
            <h2 className="text-sm sm:text-[16px] font-bold text-slate-900 dark:text-white">
              Principais notícias e dados — {currentData.label}
            </h2>
          </div>
          <span className="text-[11px] sm:text-xs text-slate-500">
            Evidências factuais rastreáveis com fontes e datas
          </span>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {currentData.evidences.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* MODAL DE AMPLIAÇÃO DA IMAGEM EM TELA CHEIA */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/90">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Construtoras seguram lançamentos e vendas crescem menos
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Desempenho no 2º trimestre e no primeiro semestre, em relação aos mesmos períodos de 2025
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/valor_incorporadoras_2t2026.png"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Abrir imagem em nova aba"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsImageModalOpen(false)}
                  className="p-1.5 sm:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Imagem Ampliada com Scroll Suave */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-100/50 dark:bg-slate-950/50 min-h-[300px]">
              <img
                src="/valor_incorporadoras_2t2026.png"
                alt="Construtoras seguram lançamentos e vendas crescem menos - Desempenho no 2º trimestre e no primeiro semestre de 2026"
                className="max-w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-md border border-slate-200 dark:border-slate-800 bg-white"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Rodapé do Modal */}
            <div className="px-4 py-2.5 sm:px-6 sm:py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/90">
              <span>Pressione <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-slate-200 dark:bg-slate-800 rounded">ESC</kbd> ou clique fora para fechar</span>
              <button
                type="button"
                onClick={() => setIsImageModalOpen(false)}
                className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Fechar Visualização
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
