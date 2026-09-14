import React from 'react';
import { LucideIcon } from 'lucide-react';

export type HeaderKpiColor = 'blue' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'purple' | 'slate';

export interface HeaderKpiCardProps {
  title: string;
  value: string;
  valueSuffix?: string;
  valueClassName?: string;
  comparison?: string;
  comparisonColor?: HeaderKpiColor;
  context?: string;
  secondaryHighlight?: string;
  secondaryHighlightColor?: HeaderKpiColor;
  explanation: string;
  source?: string;
  icon: LucideIcon;
  color?: HeaderKpiColor;
  className?: string;
}

const colorMap: Record<HeaderKpiColor, {
  bgIcon: string;
  textIcon: string;
  textValue: string;
}> = {
  blue: {
    bgIcon: 'bg-blue-50 dark:bg-blue-900/20',
    textIcon: 'text-blue-600 dark:text-blue-400',
    textValue: 'text-blue-600 dark:text-blue-400',
  },
  indigo: {
    bgIcon: 'bg-indigo-50 dark:bg-indigo-900/20',
    textIcon: 'text-indigo-600 dark:text-indigo-400',
    textValue: 'text-indigo-600 dark:text-indigo-400',
  },
  emerald: {
    bgIcon: 'bg-emerald-50 dark:bg-emerald-900/20',
    textIcon: 'text-emerald-600 dark:text-emerald-400',
    textValue: 'text-emerald-600 dark:text-emerald-400',
  },
  amber: {
    bgIcon: 'bg-amber-50 dark:bg-amber-900/20',
    textIcon: 'text-amber-600 dark:text-amber-400',
    textValue: 'text-amber-600 dark:text-amber-400',
  },
  rose: {
    bgIcon: 'bg-rose-50 dark:bg-rose-900/20',
    textIcon: 'text-rose-600 dark:text-rose-400',
    textValue: 'text-rose-600 dark:text-rose-400',
  },
  purple: {
    bgIcon: 'bg-purple-50 dark:bg-purple-900/20',
    textIcon: 'text-purple-600 dark:text-purple-400',
    textValue: 'text-purple-600 dark:text-purple-400',
  },
  slate: {
    bgIcon: 'bg-slate-100 dark:bg-slate-800',
    textIcon: 'text-slate-600 dark:text-slate-300',
    textValue: 'text-slate-700 dark:text-slate-200',
  },
};

export const HeaderKpiCard: React.FC<HeaderKpiCardProps> = ({
  title,
  value,
  valueSuffix,
  valueClassName,
  comparison,
  comparisonColor,
  context,
  secondaryHighlight,
  secondaryHighlightColor,
  explanation,
  source,
  icon: Icon,
  color = 'blue',
  className = '',
}) => {
  const scheme = colorMap[color] || colorMap.blue;
  const compScheme = comparisonColor ? colorMap[comparisonColor] : scheme;
  const secScheme = secondaryHighlightColor ? colorMap[secondaryHighlightColor] : scheme;

  const isLongValue = value.length > 8;
  const defaultSizeClass = isLongValue ? 'text-[20px] sm:text-[22px] 2xl:text-[24px]' : 'text-[26px] 2xl:text-[28px]';

  return (
    <div className={`bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 shadow-xs flex flex-col h-full ${className}`}>
      {/* 1. ÍCONE + TÍTULO */}
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-6 h-6 ${scheme.bgIcon} rounded-full flex items-center justify-center shrink-0`}>
          <Icon className={`w-3.5 h-3.5 ${scheme.textIcon}`} />
        </div>
        <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-none truncate">
          {title}
        </p>
      </div>

      {/* 2. NÚMERO PRINCIPAL */}
      <div className="flex items-baseline gap-2 my-0.5">
        <h3 className={`${valueClassName || defaultSizeClass} font-black ${scheme.textValue} leading-none tracking-tight whitespace-nowrap`}>
          {value}
        </h3>
        {valueSuffix && (
          <span className="text-[12px] font-semibold text-slate-500 dark:text-slate-400">
            {valueSuffix}
          </span>
        )}
        {comparison && (
          <span className={`text-[13px] font-bold ${compScheme.textValue}`}>
            {comparison}
          </span>
        )}
      </div>

      {/* 3. CONTEXTO / COMPARAÇÃO */}
      {context && (
        <p className="text-[11px] text-slate-700 dark:text-slate-300 font-bold my-0.5 leading-tight">
          {context}
        </p>
      )}

      {/* 3.1 HIGHLIGHT SECUNDÁRIO (OPCIONAL, ex: Classificação IDH) */}
      {secondaryHighlight && (
        <p className={`text-[10.5px] font-semibold ${secScheme.textValue} my-0.5 leading-tight`}>
          {secondaryHighlight}
        </p>
      )}

      {/* 4. EXPLICAÇÃO CURTA */}
      <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-snug my-1">
        {explanation}
      </p>

      {/* 5. FONTE */}
      {source && (
        <div className="text-[9.5px] text-slate-400 dark:text-slate-500 mt-auto pt-1.5 border-t border-slate-100 dark:border-slate-800 leading-tight">
          {source.startsWith('Fonte:') ? source : `Fonte: ${source}`}
        </div>
      )}
    </div>
  );
};
