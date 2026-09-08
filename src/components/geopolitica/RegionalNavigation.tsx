import React from 'react';

export type RegionalPageId = 
  | 'Economia Mundial'
  | 'América Latina'
  | 'América do Norte'
  | 'África'
  | 'Ásia'
  | 'Europa';

interface RegionalNavigationProps {
  activeRegion: RegionalPageId;
  setActivePage?: (page: string) => void;
}

interface RegionalHeaderProps {
  title: string;
  subtitle: string;
  activeRegion: RegionalPageId;
  setActivePage?: (page: string) => void;
}

export function RegionalNavigation({ activeRegion, setActivePage }: RegionalNavigationProps) {
  if (!setActivePage) return null;

  const isGlobalActive = activeRegion === 'Economia Mundial';
  const isLatamActive = activeRegion === 'América Latina';
  const isNorthAmericaActive = activeRegion === 'América do Norte';
  const isAfricaActive = activeRegion === 'África';
  const isAsiaActive = activeRegion === 'Ásia';
  const isEuropaActive = activeRegion === 'Europa';

  const activeBtnClass = "h-[32px] rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-sm shrink-0 flex items-center justify-center select-none text-center whitespace-nowrap";
  const inactiveBtnClass = "h-[32px] rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-700/60 transition-colors cursor-pointer shrink-0 flex items-center justify-center select-none text-center whitespace-nowrap";

  return (
    <div 
      id="regional-navigation-bar"
      className="max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shrink-0"
    >
      <div className="flex items-center gap-1.5 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 w-max lg:w-[622px] h-[46px] shrink-0">
        {/* 1. Economia Mundial */}
        {isGlobalActive ? (
          <span id="nav-btn-economia-mundial" className={`${activeBtnClass} w-[144px]`}>
            Economia Mundial
          </span>
        ) : (
          <button
            id="nav-btn-economia-mundial"
            type="button"
            onClick={() => setActivePage('Economia Mundial')}
            className={`${inactiveBtnClass} w-[144px]`}
          >
            ← Economia Mundial
          </button>
        )}

        {/* 2. América Latina */}
        {isLatamActive ? (
          <span id="nav-btn-america-latina" className={`${activeBtnClass} w-[106px]`}>
            América Latina
          </span>
        ) : (
          <button
            id="nav-btn-america-latina"
            type="button"
            onClick={() => setActivePage('América Latina')}
            className={`${inactiveBtnClass} w-[106px]`}
          >
            América Latina
          </button>
        )}

        {/* 3. América do Norte */}
        {isNorthAmericaActive ? (
          <span id="nav-btn-america-do-norte" className={`${activeBtnClass} w-[124px]`}>
            América do Norte
          </span>
        ) : (
          <button
            id="nav-btn-america-do-norte"
            type="button"
            onClick={() => setActivePage('América do Norte')}
            className={`${inactiveBtnClass} w-[124px]`}
          >
            América do Norte
          </button>
        )}

        {/* 4. África */}
        {isAfricaActive ? (
          <span id="nav-btn-africa" className={`${activeBtnClass} w-[64px]`}>
            África
          </span>
        ) : (
          <button
            id="nav-btn-africa"
            type="button"
            onClick={() => setActivePage('África')}
            className={`${inactiveBtnClass} w-[64px]`}
          >
            África
          </button>
        )}

        {/* 5. Ásia */}
        {isAsiaActive ? (
          <span id="nav-btn-asia" className={`${activeBtnClass} w-[56px]`}>
            Ásia
          </span>
        ) : (
          <button
            id="nav-btn-asia"
            type="button"
            onClick={() => setActivePage('Ásia')}
            className={`${inactiveBtnClass} w-[56px]`}
          >
            Ásia
          </button>
        )}

        {/* 6. Europa */}
        {isEuropaActive ? (
          <span id="nav-btn-europa" className={`${activeBtnClass} w-[84px]`}>
            Europa
          </span>
        ) : (
          <button
            id="nav-btn-europa"
            type="button"
            onClick={() => setActivePage('Europa')}
            className={`${inactiveBtnClass} w-[84px]`}
          >
            Europa →
          </button>
        )}
      </div>
    </div>
  );
}

export function RegionalHeader({
  title,
  subtitle,
  activeRegion,
  setActivePage
}: RegionalHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
      {/* Lado esquerdo: título + subtítulo */}
      <div className="flex-1 min-w-0 pr-0 lg:pr-6">
        <h1 className="text-2xl sm:text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-[16px] text-slate-600 dark:text-slate-400 leading-normal">
          {subtitle}
        </p>
      </div>

      {/* Lado direito: navegação regional */}
      {setActivePage && (
        <div className="shrink-0 flex items-start w-full lg:w-auto">
          <RegionalNavigation activeRegion={activeRegion} setActivePage={setActivePage} />
        </div>
      )}
    </div>
  );
}
