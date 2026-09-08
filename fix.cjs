const fs = require('fs');
let file = fs.readFileSync('src/components/economia-brasileira/IdhView.tsx', 'utf8');

const target = `<ResponsiveContainer minWidth="220px" gap="gap-3" className="flex-1">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider leading-snug">IDH DO BRASIL — 2023</p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-blue-600 dark:text-blue-400 leading-tight">0,786</h3>
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-300 mt-1 leading-snug font-bold">84ª posição entre 193 países</p>
              <p className="text-[11px] text-blue-600 dark:text-blue-400 mt-1 font-semibold uppercase tracking-wider">Desenvolvimento humano elevado</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Índice de Desenvolvimento Humano do Brasil, calculado pelo PNUD com base em saúde, educação e rendimento.
              </p>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                Fonte: PNUD — Relatório do Desenvolvimento Humano 2025
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider leading-snug">IDH AJUSTADO À DESIGUALDADE</p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-amber-600 dark:text-amber-400 leading-tight">0,594</h3>
                <span className="text-[13px] font-bold text-amber-600 dark:text-amber-500">−24,4%</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-semibold">Perda de desenvolvimento associada à desigualdade.</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                O IDH brasileiro cai de 0,786 para 0,594 quando o índice é ajustado pela desigualdade.
              </p>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                Fonte: PNUD — Relatório do Desenvolvimento Humano 2025<br />
                Dados de IDH referentes a 2023
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <Target className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex justify-between items-start gap-2 mb-1">
                <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-snug">DISTÂNCIA PARA O IDH MUITO ELEVADO</p>
              </div>
              <div className="flex items-baseline gap-1.5 mt-1">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-slate-700 dark:text-slate-200 leading-tight">0,014</h3>
                <span className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">ponto</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-bold">Brasil: 0,786 | Limiar: 0,800</p>
              <div className="inline-flex mt-1.5 mb-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Diferença calculada
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                O Brasil está 0,014 ponto abaixo do limiar utilizado pelo PNUD para classificar um país como de desenvolvimento humano muito elevado.
              </p>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                Fonte: PNUD — Relatório do Desenvolvimento Humano 2025
              </div>
            </div>
          </div>`;

const replacement = `<ResponsiveContainer minWidth="220px" gap="gap-3" className="flex-1">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1 flex flex-col h-full">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider leading-snug">IDH DO BRASIL — 2023</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-blue-600 dark:text-blue-400 leading-none">0,786</h3>
              </div>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 mt-1.5 font-bold">84ª posição entre 193 países</p>
              <p className="text-[11px] text-blue-600 dark:text-blue-400 mt-0.5 font-semibold uppercase tracking-wider">Desenvolvimento humano elevado</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 mb-2 leading-snug">
                Índice de desenvolvimento humano do Brasil.
              </p>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
                Fonte: PNUD — Relatório do Desenvolvimento Humano 2025
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1 flex flex-col h-full">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider leading-snug">IDH AJUSTADO À DESIGUALDADE</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-amber-600 dark:text-amber-400 leading-none">0,594</h3>
                <span className="text-[13px] font-bold text-amber-600 dark:text-amber-500">−24,4%</span>
              </div>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 mt-1.5 font-bold">IDH sem ajuste: 0,786</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 mb-2 leading-snug">
                Perda de desenvolvimento associada à desigualdade.
              </p>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
                Fonte: PNUD — Relatório do Desenvolvimento Humano 2025<br />
                Dados referentes a 2023
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-start gap-3 h-full">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <Target className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            </div>
            <div className="min-w-0 flex-1 flex flex-col h-full">
              <p className="text-[12px] md:text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider leading-snug">DISTÂNCIA AO IDH MUITO ELEVADO</p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <h3 className="text-[24px] 2xl:text-[28px] font-black text-slate-700 dark:text-slate-200 leading-none">0,014</h3>
                <span className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">ponto</span>
              </div>
              <p className="text-[12px] text-slate-700 dark:text-slate-300 mt-1.5 font-bold">Brasil: 0,786 | Limiar: 0,800</p>
              <div className="inline-flex mt-1 mb-1.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider w-max">
                Diferença calculada
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 mb-2 leading-snug">
                Distância do IDH brasileiro para o limiar de desenvolvimento humano muito elevado.
              </p>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
                Fonte: PNUD — Relatório do Desenvolvimento Humano 2025
              </div>
            </div>
          </div>`;

file = file.replace(target, replacement);
fs.writeFileSync('src/components/economia-brasileira/IdhView.tsx', file);
