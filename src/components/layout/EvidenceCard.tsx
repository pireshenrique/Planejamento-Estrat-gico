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
  pageUrl?: string;
  downloadLabel?: string;
  actionLabel?: string;
  secondaryActionLabel?: string;
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
        return {
          ...initialEvidence,
          ...parsed,
          fileName: initialEvidence.fileName,
          pdfUrl: initialEvidence.pdfUrl,
          isPdf: initialEvidence.isPdf,
          author: initialEvidence.author || parsed.author,
        };
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
        setEvidence({
          ...initialEvidence,
          ...parsed,
          fileName: initialEvidence.fileName,
          pdfUrl: initialEvidence.pdfUrl,
          isPdf: initialEvidence.isPdf,
          author: initialEvidence.author || parsed.author,
        });
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
      const fileName = evidence.fileName || (evidence.pdfUrl ? evidence.pdfUrl.replace(/^\//, '') : '') || 'documento.pdf';
      const downloadEndpoint = `/download-pdf?file=${encodeURIComponent(fileName)}`;
      
      const link = document.createElement('a');
      link.href = downloadEndpoint;
      link.download = fileName;
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
      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col gap-0 h-[480px] relative group"
    >
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        
        {/* Título da Evidência (Tema) */}
        <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 dark:text-slate-100 leading-snug shrink-0">
          {readOnly ? (
            evidence.title
          ) : (
            <InlineEditable
              value={evidence.title}
              onSave={(val) => updateField('title', val)}
              placeholder="Tema da evidência..."
              multiline
              rows={2}
              textClassName="text-[17px] sm:text-[18px] font-bold text-slate-900 dark:text-slate-100 leading-snug"
              inputClassName="text-[17px] sm:text-[18px] font-bold"
            />
          )}
        </h3>
        
        {/* Trecho Literal / Resumo Executivo */}
        <div className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 flex-1 overflow-y-auto pr-1">
          {readOnly ? (
            <p>{textContent}</p>
          ) : (
            <InlineEditable
              value={textContent}
              onSave={(val) => {
                if (evidence.summary !== undefined) updateField('summary', val);
                else updateField('headline', val);
              }}
              placeholder="Clique para preencher o resumo executivo..."
              multiline
              rows={4}
              textClassName="text-[14px] sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-400"
            />
          )}
        </div>
      </div>

      {/* Container de Data */}
      <div className="mt-6 mb-4 flex items-center gap-2 text-[13px] font-medium text-slate-500 dark:text-slate-400 shrink-0">
        <Calendar className="w-4 h-4" />
        {readOnly ? (
          evidence.dateStr || evidence.date || ''
        ) : (
          <InlineEditable
            value={evidence.dateStr || evidence.date || ''}
            onSave={(val) => updateField('dateStr', val)}
            placeholder="Data (ex: 2025)"
            textClassName="text-[13px] font-medium text-slate-500 dark:text-slate-400"
          />
        )}
      </div>

      {/* Rodapé: Fonte Oficial + Ação */}
      <div className="pt-4 mt-auto border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap shrink-0">
        
        {/* Lado Esquerdo: Fonte */}
        <div className="flex items-center gap-2 truncate max-w-full sm:max-w-[65%]">
          <Globe className="w-4 h-4 text-blue-600 dark:text-blue-500 shrink-0" />
          {readOnly ? (
            <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-300 truncate">
              {evidence.source}
            </span>
          ) : (
            <InlineEditable
              value={evidence.source}
              onSave={(val) => updateField('source', val)}
              placeholder="Fonte oficial..."
              textClassName="text-[14px] font-semibold text-slate-700 dark:text-slate-300 truncate"
            />
          )}
        </div>

        {/* Lado Direito: Botão de Ação */}
        <div className="flex items-center gap-3 shrink-0 ml-auto">
          {isCustomized && !readOnly && (
            <button
              onClick={handleResetOriginal}
              className="p-1.5 rounded-lg text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors"
              title="Restaurar originais"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
          
          {evidence.isPdf ? (
            <a
              href={evidence.pdfUrl || (evidence.fileName ? `/${evidence.fileName}` : '#')}
              target="_blank"
              rel="noopener noreferrer"
              download={
                evidence.fileName || 
                (evidence.pdfUrl ? evidence.pdfUrl.replace(/^\//, '') : 'documento.pdf')
              }
              onClick={(e) => {
                if (onDownloadPdf) {
                  e.preventDefault();
                  onDownloadPdf();
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-[13px] font-bold transition-colors cursor-pointer shrink-0"
              title="Baixar arquivo PDF"
            >
              BAIXAR PDF
              <Download className="w-3.5 h-3.5" />
            </a>
          ) : (
            <>
              {evidence.url ? (
                <a 
                  href={evidence.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-[13px] font-bold transition-colors cursor-pointer shrink-0"
                >
                  ACESSAR FONTE
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}

              {!readOnly && (
                <div className="relative">
                  {editingUrl ? (
                    <div 
                      className="absolute right-0 bottom-10 z-30 w-72 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-3 rounded-xl shadow-xl flex flex-col gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-[12px] font-bold text-slate-600 dark:text-slate-300">URL do link da fonte:</span>
                      <input
                        type="url"
                        value={tempUrl}
                        onChange={(e) => setTempUrl(e.target.value)}
                        placeholder="https://..."
                        className="w-full px-2 py-1.5 text-[13px] border border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoFocus
                      />
                      <div className="flex justify-end gap-2 mt-1">
                        <button
                          onClick={() => setEditingUrl(false)}
                          className="px-3 py-1 text-[12px] font-medium text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => {
                            updateField('url', tempUrl);
                            setEditingUrl(false);
                          }}
                          className="px-3 py-1 text-[12px] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                        >
                          Salvar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setTempUrl(evidence.url || '');
                        setEditingUrl(true);
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                      title="Editar URL da fonte"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
          
          {/* Ícone decorativo de link ao lado do botão, conforme a imagem de referência (opcional, mas presente na imagem) */}
          {readOnly && (
             <LinkIcon className="w-4 h-4 text-slate-400 shrink-0 opacity-60" />
          )}
        </div>
      </div>
    </div>
  );
}
