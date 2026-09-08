import React, { useState } from 'react';
import { Compass, ZoomIn, Maximize2, X, Download, ExternalLink, BarChart3, Table as TableIcon } from 'lucide-react';
import { EvidenceCard } from '../layout/EvidenceCard';
import {
  ECONOMICS_BY_ID
} from '../../data/geopolitica/economiaMundial';
import { RegionalHeader } from './RegionalNavigation';

interface EconomiaMundialViewProps {
  setActivePage?: (page: string) => void;
}

export function EconomiaMundialView({ setActivePage }: EconomiaMundialViewProps) {
  const currentData = ECONOMICS_BY_ID['crescimento-global'];
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* CABEÇALHO COM TÍTULO E ATALHOS REGIONAIS PADRONIZADOS */}
      <div className="flex flex-col gap-3.5 sm:gap-6">
        <RegionalHeader
          title="Economia Mundial"
          subtitle="Acompanhamento de crescimento do PIB global, comércio internacional, decisões de política monetária dos bancos centrais e cadeias de suprimentos."
          activeRegion="Economia Mundial"
          setActivePage={setActivePage}
        />
      </div>

      {/* BANNER INFORMATIVO DO TEMA ATIVO */}
      <div className="bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            {React.createElement(currentData.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
          </div>
          <div>
            <h2 className="text-base sm:text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white mb-0.5 sm:mb-1 leading-tight">
              {currentData.label}
            </h2>
            <p className="text-xs sm:text-[14px] text-slate-600 dark:text-slate-300 max-w-4xl">
              {currentData.headline}
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
                  {currentData.statusSubtitle || 'Principais desdobramentos e pontos de atenção para o cenário internacional'}
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
              {currentData.observeNotes.map((note, idx) => (
                <div key={`obs-${idx}`} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0 mt-1.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
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

      {/* IMAGENS DOCUMENTAIS (PROJEÇÕES FMI WEO JULHO 2026) LOGO ABAIXO DO CARD DE STATUS */}
      <section className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 sm:gap-3 border-b border-slate-200 dark:border-slate-800 pb-2.5 sm:pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                FMI • World Economic Outlook Update
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Julho 2026</span>
            </div>
            <h3 className="text-base sm:text-[18px] font-bold text-slate-900 dark:text-white mt-1">
              Projeções de Crescimento do PIB Global (2025–2027)
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
            Clique sobre qualquer uma das imagens para expandir e inspecionar em alta resolução
          </span>
        </div>

        {/* GRADE DAS DUAS IMAGENS OFICIAIS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          
          {/* IMAGEM 1: MAPA E GRÁFICOS REGIONAIS */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111827] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-3 sm:p-4 shadow-sm flex flex-col gap-3 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    Projeções de Crescimento por Região
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Variação percentual anual do PIB Real por polo geográfico
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage({
                  src: '/weo_growth_projections_map.svg',
                  title: 'Projeções de Crescimento por Região (PIB Real, %)',
                  subtitle: 'Fundo Monetário Internacional • World Economic Outlook Update (Julho 2026)'
                })}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-950/40 px-2 py-1 rounded-md transition-colors"
                title="Ampliar mapa em tela cheia"
              >
                <Maximize2 className="w-3 h-3" />
                <span className="hidden sm:inline">Ampliar</span>
              </button>
            </div>

            <div 
              className="relative overflow-hidden rounded-lg sm:rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-950 cursor-pointer group-hover:border-blue-500/50 transition-colors"
              onClick={() => setSelectedImage({
                src: '/weo_growth_projections_map.svg',
                title: 'Projeções de Crescimento por Região (PIB Real, %)',
                subtitle: 'Fundo Monetário Internacional • World Economic Outlook Update (Julho 2026)'
              })}
            >
              <img
                src="/weo_growth_projections_map.svg"
                alt="FMI World Economic Outlook - Projeções de Crescimento por Região"
                className="w-full h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-slate-900/85 text-white text-[10px] font-medium flex items-center gap-1 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3 h-3" />
                Clique para ampliar
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800/80">
              <span>Fonte oficial: IMF.org/pubs • WEO Update Julho 2026</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Estimativas 2025 • Projeções 2026 e 2027</span>
            </div>
          </div>

          {/* IMAGEM 2: TABELA DESAGREGADA */}
          <div className="lg:col-span-5 bg-white dark:bg-[#111827] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-3 sm:p-4 shadow-sm flex flex-col gap-3 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <TableIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    Tabela Detalhada por Países e Blocos
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    World Output, Economias Avançadas, Emergentes, G7 e Brasil
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage({
                  src: '/weo_growth_projections_table.svg',
                  title: 'Tabela Completa de Projeções de Crescimento (WEO FMI)',
                  subtitle: 'Fundo Monetário Internacional • Projeções 2025, 2026 e 2027'
                })}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-md transition-colors"
                title="Ampliar tabela em tela cheia"
              >
                <Maximize2 className="w-3 h-3" />
                <span className="hidden sm:inline">Ampliar</span>
              </button>
            </div>

            <div 
              className="relative overflow-hidden rounded-lg sm:rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white cursor-pointer group-hover:border-emerald-500/50 transition-colors"
              onClick={() => setSelectedImage({
                src: '/weo_growth_projections_table.svg',
                title: 'Tabela Completa de Projeções de Crescimento (WEO FMI)',
                subtitle: 'Fundo Monetário Internacional • Projeções 2025, 2026 e 2027'
              })}
            >
              <img
                src="/weo_growth_projections_table.svg"
                alt="FMI World Economic Outlook - Tabela de Projeções de Crescimento"
                className="w-full h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-slate-900/85 text-white text-[10px] font-medium flex items-center gap-1 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3 h-3" />
                Clique para ampliar
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800/80">
              <span>Fonte: FMI WEO Update Julho 2026</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Brasil: 2,3% (2025) • 2,4% (2026) • 2,2% (2027)</span>
            </div>
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
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-5 w-full">
          {currentData.evidences.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* MODAL PARA EXPANSÃO E INSPEÇÃO DAS IMAGENS EM TELA CHEIA */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho do Modal */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/90">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedImage.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedImage.src}
                  download={selectedImage.src.split('/').pop()}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Abrir em nova aba / Salvar"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 sm:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Imagem Ampliada com Scroll Suave */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-100/50 dark:bg-slate-950/50 min-h-[300px]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-md border border-slate-200 dark:border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Rodapé do Modal */}
            <div className="px-4 py-2.5 sm:px-6 sm:py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/90">
              <span>Pressione <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-slate-200 dark:bg-slate-800 rounded">ESC</kbd> ou clique fora para fechar</span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
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
