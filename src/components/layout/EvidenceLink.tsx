import React from 'react';
import { ExternalLink, ShieldCheck, AlertCircle, Link2 } from 'lucide-react';
import { isValidUrl, getCleanDomain, EvidenciaEstrategica } from '../../data/evidencesRegistry';

interface EvidenceLinkProps {
  url: string;
  sourceTitle?: string;
  sourceName?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'button' | 'inline' | 'badge' | 'card';
}

export const EvidenceLink: React.FC<EvidenceLinkProps> = ({
  url,
  sourceTitle,
  sourceName,
  className = '',
  children,
  variant = 'button',
}) => {
  const valid = isValidUrl(url);
  const domain = getCleanDomain(url);

  if (!valid) {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-md border border-amber-200 dark:border-amber-800 ${className}`}>
        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
        <span>Fonte documental (Link pendente de verificação)</span>
      </span>
    );
  }

  if (variant === 'badge') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Acessar fonte original em ${domain}: ${sourceTitle || url}`}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11.5px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200/80 dark:border-blue-800/80 rounded-md transition-colors ${className}`}
      >
        <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
        <span>{sourceName || domain}</span>
        <ExternalLink className="w-3 h-3 text-blue-500 shrink-0 ml-0.5" />
      </a>
    );
  }

  if (variant === 'inline') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Acessar evidência em ${domain}`}
        className={`inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline ${className}`}
      >
        <span>{children || sourceName || 'Ver fonte oficial'}</span>
        <ExternalLink className="w-3 h-3 shrink-0" />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Acessar documento na íntegra: ${url}`}
      className={`inline-flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/60 dark:hover:text-blue-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-800 rounded-xl transition-all duration-150 ${className}`}
    >
      <Link2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
      <span className="truncate max-w-[200px] sm:max-w-[280px]">{children || `Fonte Original (${domain})`}</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
    </a>
  );
};

interface EvidenciaCardViewProps {
  evidencial: EvidenciaEstrategica;
}

export const EvidenciaCardView: React.FC<EvidenciaCardViewProps> = ({ evidencial }) => {
  return (
    <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 md:p-5 shadow-xs hover:border-blue-300 dark:hover:border-blue-800 transition-all flex flex-col justify-between gap-3">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-extrabold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-md border border-blue-200/60 dark:border-blue-800/60 tracking-wider uppercase">
            {evidencial.tag}
          </span>
          <span className="text-[12px] font-medium text-slate-500 dark:text-slate-400">
            {evidencial.dateStr}
          </span>
        </div>

        <h4 className="text-[15px] font-bold text-slate-900 dark:text-white leading-snug mb-2">
          {evidencial.title}
        </h4>

        <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
          {evidencial.summary}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Fonte: {evidencial.source}</span>
        </div>

        <EvidenceLink
          url={evidencial.url}
          sourceTitle={evidencial.title}
          sourceName="Acessar Notícia / Documento"
          variant="button"
        />
      </div>
    </div>
  );
};
