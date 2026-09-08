import React from 'react';

export interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  minWidth?: string; // Default: '280px'
  gap?: string;      // Default: 'gap-5'
  layout?: 'flex' | 'grid'; // Default: 'flex'
  id?: string;
}

/**
 * ResponsiveContainer wraps sections or lists of cards using flexbox with 'flex-wrap' 
 * and 'min-width' constraints (or CSS grid auto-fit minmax), preventing layout breakage 
 * when zooming or rendering on smaller viewports.
 */
export function ResponsiveContainer({
  children,
  className = '',
  minWidth = '280px',
  gap = 'gap-5',
  layout = 'flex',
  id,
}: ResponsiveContainerProps) {
  if (layout === 'grid') {
    return (
      <div
        id={id}
        className={`w-full grid ${gap} ${className}`}
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minWidth}), 1fr))`,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div id={id} className={`w-full flex flex-wrap items-stretch ${gap} ${className}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return (
          <div
            className="flex-1 min-w-0"
            style={{
              minWidth: `min(100%, ${minWidth})`,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export interface ResponsiveSectionProps {
  children: React.ReactNode;
  number?: string | number;
  title?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  containerClassName?: string;
  minWidth?: string;
  gap?: string;
  layout?: 'flex' | 'grid';
  headerExtra?: React.ReactNode;
}

/**
 * ResponsiveSection provides a standard section layout with a section header (number, title, badge)
 * and a responsive content area with 'flex-wrap' and 'min-width' constraints.
 */
export function ResponsiveSection({
  children,
  number,
  title,
  subtitle,
  badge,
  className = '',
  containerClassName = '',
  minWidth = '280px',
  gap = 'gap-5',
  layout = 'flex',
  headerExtra,
}: ResponsiveSectionProps) {
  return (
    <section className={`w-full ${className}`}>
      {(title || number || headerExtra) && (
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3 flex-wrap">
            {number !== undefined && (
              <div className="w-8 h-8 rounded-lg bg-[#0c162c] text-white flex items-center justify-center font-bold text-[16px] shadow-sm shrink-0">
                {number}
              </div>
            )}
            {title && (
              <div>
                <h2 className="text-[18px] md:text-[22px] font-bold text-[#0c162c] dark:text-white uppercase tracking-wide leading-tight">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</p>
                )}
              </div>
            )}
          </div>
          {badge && (
            <span className="text-[13px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
              {badge}
            </span>
          )}
          {headerExtra}
        </div>
      )}

      <ResponsiveContainer
        className={containerClassName}
        minWidth={minWidth}
        gap={gap}
        layout={layout}
      >
        {children}
      </ResponsiveContainer>
    </section>
  );
}
