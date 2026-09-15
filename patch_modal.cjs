const fs = require('fs');
let content = fs.readFileSync('src/components/layout/StrategicReportView.tsx', 'utf-8');

const oldModalStart = content.indexOf('{selectedLeituraAudit && (');
const oldModalEnd = content.indexOf('</div>\n        </div>\n      )}\n\n      {/* =========================================================================\n          MODAL: ESTABILIDADE E GOVERNANÇA', oldModalStart);

if (oldModalStart === -1 || oldModalEnd === -1) {
    console.error("Could not find modal bounds");
    process.exit(1);
}

const newModal = `{selectedLeituraAudit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#121c32] w-full max-w-2xl max-h-[85vh] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#0c162c] dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  Auditoria de Fundamentação
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono font-medium">
                  {selectedLeituraAudit.id} — {selectedLeituraAudit.titulo}
                </p>
              </div>
              <button
                onClick={() => setSelectedLeituraAudit(null)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 sm:p-5 overflow-y-auto space-y-6">
              
              {/* PÁGINAS UTILIZADAS */}
              {selectedLeituraAudit.supportingPageIds && selectedLeituraAudit.supportingPageIds.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Páginas Utilizadas (Contexto Analítico)
                  </h4>
                  <div className="space-y-3">
                    {selectedLeituraAudit.supportingPageIds.map(pageId => {
                      const page = strategicPages.find(p => p.pageId === pageId);
                      if (!page) return null;
                      
                      const usedFacts = page.factualContent.filter(f => selectedLeituraAudit.supportingFactIds?.includes(f.id));
                      
                      return (
                        <div key={pageId} className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
                          <div className="font-bold text-slate-900 dark:text-white text-sm mb-2">{page.pageTitle}</div>
                          {usedFacts.length > 0 ? (
                            <div className="space-y-2">
                              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Fatos utilizados:</div>
                              <ul className="space-y-2">
                                {usedFacts.map(fact => (
                                  <li key={fact.id} className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2 rounded border border-slate-100 dark:border-slate-800/80">
                                    <span className="block font-medium mb-1">- {fact.statement}</span>
                                    {fact.source && <span className="block text-[10px] text-blue-600 dark:text-blue-400 font-semibold">Fonte: {fact.source}</span>}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <div className="text-xs text-slate-500 italic">Análise estrutural da página utilizada como contexto.</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* EVIDÊNCIAS VINCULADAS */}
              {selectedLeituraAudit.evidenceIds && selectedLeituraAudit.evidenceIds.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Evidências Vinculadas (Catálogo)
                  </h4>
                  <div className="space-y-2">
                    {selectedLeituraAudit.evidenceIds.map(evId => {
                      const ev = allEvs.find(e => e.id === evId);
                      if (!ev) return null;
                      return (
                        <div key={evId} className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-1.5">
                           <div className="flex items-center justify-between gap-2">
                             <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px] font-bold text-slate-700 dark:text-slate-300">
                               ID: {evId}
                             </span>
                             <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                               {ev.source}
                             </span>
                           </div>
                           <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                             {ev.title}
                           </div>
                           {ev.url && (
                             <div className="pt-1">
                               <a href={ev.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                 <span>Ver link original da fonte</span>
                                 <ExternalLink className="w-3 h-3" />
                               </a>
                             </div>
                           )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* FONTES INSTITUCIONAIS */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Fontes Institucionais Declaradas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedLeituraAudit.sourceIds?.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-medium text-[11px] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                  {(!selectedLeituraAudit.sourceIds || selectedLeituraAudit.sourceIds.length === 0) && (
                    <span className="text-xs text-slate-500 italic">Fontes herdadas das páginas/evidências acima.</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedLeituraAudit(null)}
                className="px-4 py-1.5 rounded-lg bg-[#0c162c] text-white text-xs font-bold hover:bg-slate-800"
              >
                Concluir Auditoria
              </button>
            </div>
          </div>
        </div>
      )}`;

content = content.substring(0, oldModalStart) + newModal + content.substring(oldModalEnd + 14);

fs.writeFileSync('src/components/layout/StrategicReportView.tsx', content);
