import React, { useState, useEffect } from 'react';
import { Globe, ExternalLink, FileText, Building2, Download, Eye, RotateCcw, Link as LinkIcon, Calendar } from 'lucide-react';
import { InlineEditable } from './InlineEditable';

export interface Evidence {
  id: string | number;
  tag: string;
  dateStr: string;
  title: string;
  summary?: string;
  headline?: string;
  source: string;
  url?: string;
  isPdf?: boolean;
  author?: string;
  fileName?: string;
  pdfUrl?: string;
  [key: string]: any;
}

interface EvidenceCardProps {
  evidence: Evidence;
  onDownloadPdf?: () => void;
  onViewPdf?: () => void;
  onUpdate?: (updated: Evidence) => void;
  readOnly?: boolean;
  key?: any;
}

export function EvidenceCard({ 
  evidence: initialEvidence, 
  onDownloadPdf, 
  onViewPdf,
  onUpdate,
  readOnly = false 
}: EvidenceCardProps) {
  // Chave de persistência local por ID de evidência
  const storageKey = `lorenzetti_ev_edit_${initialEvidence.id}`;

  const [evidence, setEvidence] = useState<Evidence>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!initialEvidence.author) {
          delete parsed.author;
        }
        return { ...initialEvidence, ...parsed };
      }
    } catch {
      // fallback
    }
    return initialEvidence;
  });

  const [isCustomized, setIsCustomized] = useState(false);
  const [editingUrl, setEditingUrl] = useState(false);
  const [tempUrl, setTempUrl] = useState(evidence.url || '');

  // Sincroniza se o prop externo mudar e verifica se há personalização
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!initialEvidence.author) {
          delete parsed.author;
          try {
            localStorage.setItem(storageKey, JSON.stringify({ ...initialEvidence, ...parsed }));
          } catch {
            // ignore
          }
        }
        setEvidence({ ...initialEvidence, ...parsed });
        setIsCustomized(true);
      } else {
        setEvidence(initialEvidence);
        setIsCustomized(false);
      }
    } catch {
      setEvidence(initialEvidence);
    }
  }, [initialEvidence, storageKey]);

  const updateField = (field: keyof Evidence, value: any) => {
    const updated = { ...evidence, [field]: value };
    setEvidence(updated);
    setIsCustomized(true);

    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch (e) {
      console.warn('Não foi possível salvar no localStorage:', e);
    }

    if (onUpdate) {
      onUpdate(updated);
    }
  };

  const handleResetOriginal = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
    setEvidence(initialEvidence);
    setIsCustomized(false);
    if (onUpdate) {
      onUpdate(initialEvidence);
    }
  };

  const handleDownloadPdf = () => {
    if (onDownloadPdf) {
      onDownloadPdf();
      return;
    }

    try {
      const fileName = evidence.fileName || evidence.pdfUrl || evidence.url || 'documento.pdf';
      let targetUrl = fileName;
      if (!targetUrl.startsWith('/') && !targetUrl.startsWith('http')) {
        targetUrl = '/' + targetUrl;
      }
      
      const link = document.createElement('a');
      link.href = encodeURI(targetUrl);
      link.download = evidence.fileName || 'documento.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error('Erro ao realizar download do PDF:', e);
      const url = evidence.pdfUrl || evidence.url || '#';
      window.open(url, '_blank');
    }
  };

  const textContent = evidence.summary || evidence.headline || '';
  const authorText = evidence.author || '';

  return (
    <div 
      className={`bg-white dark:bg-[#111827] border ${
        evidence.isPdf 
          ? 'border-blue-300 dark:border-blue-800/80 shadow-md ring-1 ring-blue-500/20' 
          : 'border-slate-200 dark:border-slate-800'
      } rounded-xl p-3.5 sm:p-4 flex flex-col gap-2.5 sm:gap-3 shadow-xs hover:shadow-md transition-all h-full relative group`}
    >
      <div className="flex-1 flex flex-col py-0.5 sm:py-1">
        
        {/* Título da Evidência */}
        <h3 className="text-[15.5px] sm:text-[17px] font-bold text-slate-900 dark:text-slate-100 mb-1 sm:mb-1.5 leading-snug">
          {readOnly ? (
            evidence.title
          ) : (
            <InlineEditable
              value={evidence.title}
              onSave={(val) => updateField('title', val)}
              placeholder="Título da evidência..."
              multiline
              rows={2}
              textClassName="text-[15.5px] sm:text-[17px] font-bold text-slate-900 dark:text-slate-100 leading-snug"
              inputClassName="text-[15.5px] sm:text-[17px] font-bold"
            />
          )}
        </h3>
        
        {/* Trecho Literal / Resumo Executivo */}
        <div className="mt-1 text-[13.5px] sm:text-[14px] leading-relaxed text-slate-600 dark:text-slate-400">
          {readOnly ? (
            <p className="line-clamp-4">{textContent}</p>
          ) : (
            <InlineEditable
              value={textContent}
              onSave={(val) => {
                if (evidence.summary !== undefined) updateField('summary', val);
                else updateField('headline', val);
              }}
              placeholder="Clique para preencher o trecho da evidência ou resumo executivo..."
              multiline
              rows={4}
              textClassName="text-[14px] leading-relaxed text-slate-600 dark:text-slate-400"
            />
          )}
        </div>

        {/* Informações adicionais de PDF / Autor */}
        {evidence.isPdf && Boolean(evidence.author && evidence.author.trim() !== '') && (
          <div className="mt-3 p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-[12px] font-bold text-blue-900 dark:text-blue-300">
                <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Autores: </span>
                {readOnly ? (
                  <span>{authorText}</span>
                ) : (
                  <InlineEditable
                    value={authorText}
                    onSave={(val) => updateField('author', val)}
                    placeholder="Nome dos autores ou instituição"
                    textClassName="text-[12px] font-bold text-blue-900 dark:text-blue-300"
                  />
                )}
              </div>
              <span className="text-[11px] font-extrabold text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 rounded shrink-0">
                PDF Anexado
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Container de Data (Acima do Rodapé) */}
      <div className="mt-3 mb-2 flex items-center gap-1.5 text-[13px] font-medium text-slate-400">
        <Calendar className="w-3.5 h-3.5" />
        {readOnly ? (
          evidence.dateStr || evidence.date || ''
        ) : (
          <InlineEditable
            value={evidence.dateStr || evidence.date || ''}
            onSave={(val) => updateField('dateStr', val)}
            placeholder="Data"
            textClassName="text-[13px] font-medium text-slate-400"
          />
        )}
      </div>

      {/* Rodapé: Fonte Oficial + Link ou Download */}
      <div className="pt-2 mt-auto border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2 truncate max-w-full sm:max-w-[70%]">
          <Globe className="w-4 h-4 text-blue-500 shrink-0" />
          {readOnly ? (
            <span className="text-[13px] font-semibold text-slate-600 dark:text-slate-300 truncate">
              {evidence.source}
            </span>
          ) : (
            <InlineEditable
              value={evidence.source}
              onSave={(val) => updateField('source', val)}
              placeholder="Fonte / Veículo oficial..."
              textClassName="text-[13px] font-semibold text-slate-600 dark:text-slate-300 truncate"
            />
          )}
        </div>

        {evidence.isPdf ? (
          <div className="flex items-center gap-1.5 shrink-0 ml-auto">
            {isCustomized && !readOnly && (
              <button
                onClick={handleResetOriginal}
                className="p-1.5 rounded-lg text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors"
                title="Restaurar originais"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
            {onViewPdf && (
              <button
                onClick={onViewPdf}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-[12px] font-bold transition-colors cursor-pointer shrink-0"
                title="Visualizar documento em tela cheia"
              >
                Visualizar
                <Eye className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[12px] font-bold transition-all shadow-xs cursor-pointer shrink-0"
              title="Baixar arquivo PDF original"
            >
              Download PDF
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            {isCustomized && !readOnly && (
              <button
                onClick={handleResetOriginal}
                className="p-1.5 rounded-lg text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors"
                title="Restaurar originais"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
            {evidence.url ? (
              <a 
                href={evidence.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-[12px] font-bold transition-colors cursor-pointer shrink-0"
              >
                Acessar link
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}

            {!readOnly && (
              <div className="relative">
                {editingUrl ? (
                  <div 
                    className="absolute right-0 bottom-8 z-30 w-72 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2.5 rounded-xl shadow-xl flex flex-col gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">URL do link da fonte:</span>
                    <input
                      type="url"
                      value={tempUrl}
                      onChange={(e) => setTempUrl(e.target.value)}
                      placeholder="https://..."
                      className="w-full px-2 py-1 text-[12px] border border-blue-400 rounded-md dark:bg-slate-800 dark:text-white"
                      autoFocus
                    />
                    <div className="flex justify-end gap-1">
                      <button
                        onClick={() => setEditingUrl(false)}
                        className="px-2 py-0.5 text-[11px] text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                      >
                        Fechar
                      </button>
                      <button
                        onClick={() => {
                          updateField('url', tempUrl);
                          setEditingUrl(false);
                        }}
                        className="px-2 py-0.5 text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded"
                      >
                        Salvar Link
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setTempUrl(evidence.url || '');
                      setEditingUrl(true);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Editar URL da fonte"
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
