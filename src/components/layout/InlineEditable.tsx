import React, { useState, useRef, useEffect } from 'react';
import { Check, X, Pencil } from 'lucide-react';

interface InlineEditableProps {
  value: string;
  onSave: (newValue: string) => void;
  multiline?: boolean;
  className?: string;
  textClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  ariaLabel?: string;
  disabled?: boolean;
  rows?: number;
}

export function InlineEditable({
  value,
  onSave,
  multiline = false,
  className = '',
  textClassName = '',
  inputClassName = '',
  placeholder = 'Clique para editar...',
  ariaLabel = 'Editar texto',
  disabled = false,
  rows = 3
}: InlineEditableProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Coloca o cursor no fim do texto
      if ('setSelectionRange' in inputRef.current) {
        const len = inputRef.current.value.length;
        inputRef.current.setSelectionRange(len, len);
      }
    }
  }, [isEditing]);

  const handleSave = () => {
    const trimmed = currentValue.trim();
    if (trimmed !== value) {
      onSave(trimmed);
      setShowSavedFeedback(true);
      setTimeout(() => setShowSavedFeedback(false), 2000);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setCurrentValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      handleCancel();
    } else if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      e.stopPropagation();
      handleSave();
    } else if (e.key === 'Enter' && multiline && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      e.stopPropagation();
      handleSave();
    }
  };

  if (disabled) {
    return <span className={textClassName}>{value || placeholder}</span>;
  }

  if (isEditing) {
    return (
      <div 
        className={`relative inline-block w-full transition-all ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={currentValue}
            rows={rows}
            onChange={(e) => setCurrentValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            placeholder={placeholder}
            aria-label={ariaLabel}
            className={`w-full p-2.5 text-[14px] leading-relaxed bg-white dark:bg-slate-900 border-2 border-blue-500 rounded-xl text-slate-900 dark:text-slate-100 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-y ${inputClassName}`}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            placeholder={placeholder}
            aria-label={ariaLabel}
            className={`w-full px-2 py-1 text-[14px] bg-white dark:bg-slate-900 border-2 border-blue-500 rounded-lg text-slate-900 dark:text-slate-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputClassName}`}
          />
        )}

        <div className="flex items-center justify-end gap-1.5 mt-1.5">
          <span className="text-[10px] text-slate-400 mr-auto hidden sm:inline">
            {multiline ? 'Ctrl+Enter ou clique fora para salvar • Esc para cancelar' : 'Enter ou clique fora para salvar • Esc para cancelar'}
          </span>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              handleCancel();
            }}
            className="px-2 py-1 text-[11px] font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-md hover:bg-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
            title="Cancelar edição"
          >
            <X className="w-3 h-3" />
            Cancelar
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="px-2.5 py-1 text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
            title="Salvar alterações"
          >
            <Check className="w-3 h-3" />
            Salvar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      title="Clique para editar este texto in-place"
      className={`group/editable relative inline-flex items-center gap-1.5 cursor-pointer rounded-lg px-1 -mx-1 py-0.5 -my-0.5 transition-all hover:bg-blue-50/70 dark:hover:bg-blue-950/40 border border-transparent hover:border-blue-200/80 dark:hover:border-blue-800/60 ${className}`}
    >
      <div className={`w-full ${textClassName}`}>
        {value || <span className="italic text-slate-400 dark:text-slate-500">{placeholder}</span>}
      </div>

      <Pencil className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover/editable:opacity-100 transition-opacity shrink-0 ml-1" />

      {showSavedFeedback && (
        <span className="absolute -top-7 right-0 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 rounded shadow-xs animate-fade-in flex items-center gap-1 z-10">
          <Check className="w-3 h-3" /> Salvo
        </span>
      )}
    </div>
  );
}
