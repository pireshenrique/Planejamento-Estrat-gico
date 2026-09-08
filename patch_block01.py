import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{/* BLOCO 01 — O QUE É SPLIT PAYMENT? */}"
end_marker = "{/* BLOCO 02 — COMO A OPERAÇÃO ACONTECE NA PRÁTICA? */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found")
    exit(1)

new_block = """{/* BLOCO 01 — O QUE É SPLIT PAYMENT? */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
              
              {/* COLUNA ESQUERDA - TEXTOS (40-42%) */}
              <div className="flex flex-col justify-start w-full lg:w-[42%] relative z-10">
                
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                  <h4 className="text-[13px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">01. O QUE É SPLIT PAYMENT?</h4>
                </div>
                
                <hr className="border-slate-200 dark:border-slate-800/80 mb-6" />

                <h3 className="text-[20px] sm:text-[22px] font-black text-indigo-800 dark:text-indigo-400 uppercase tracking-tight leading-[1.25] mb-4">
                  O TRIBUTO PASSA A SER SEPARADO<br className="hidden sm:block" /> NO PRÓPRIO FLUXO DO PAGAMENTO
                </h3>
                
                <p className="text-[14px] sm:text-[15px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  No Split Payment, o valor pago pelo cliente é dividido no próprio fluxo da operação: uma parte segue para o fornecedor e outra corresponde à parcela de CBS e IBS.
                </p>

                {/* Microbloco "Em termos simples" */}
                <div className="bg-indigo-50/50 dark:bg-indigo-900/20 border-l-[3px] border-indigo-500 rounded-r-lg p-4 mb-6">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider text-[11px] block mb-1.5">EM TERMOS SIMPLES</span>
                  <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    O dinheiro da venda não segue inteiro pelo mesmo caminho — a parcela do tributo é separada no próprio pagamento.
                  </p>
                </div>

                {/* Nota explicativa */}
                <div className="mt-auto">
                  <div className="flex items-start gap-3 text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                    <Info className="w-4 h-4 mt-0.5 shrink-0 text-slate-400 dark:text-slate-500" />
                    <p className="text-[12.5px] leading-relaxed font-medium">
                      A separação do tributo no fluxo financeiro <strong className="font-bold text-slate-700 dark:text-slate-300">não representa um novo imposto adicional</strong> — ela altera a forma como o recolhimento acontece na operação.
                    </p>
                  </div>
                </div>
              </div>

              {/* COLUNA DIREITA - FLUXOGRAMA (58-60%) */}
              <div className="w-full lg:w-[58%] bg-[#f8fafc] dark:bg-slate-800/30 rounded-xl border border-slate-200/80 dark:border-slate-700/60 p-6 sm:p-8 flex flex-col items-center relative z-10 justify-center">
                
                {/* 1. Cliente */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-6 py-3.5 shadow-sm text-center flex items-center justify-center gap-3 z-10 min-w-[220px]">
                  <UserCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-wide">CLIENTE PAGA</span>
                </div>
                
                <div className="w-px h-6 sm:h-8 bg-slate-300 dark:bg-slate-600"></div>
                
                {/* 2. Processamento */}
                <div className="bg-indigo-50/80 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/60 rounded-xl px-6 py-4 text-center flex items-center justify-center gap-3 z-10 shadow-sm w-full max-w-[420px]">
                  <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="text-[13px] sm:text-[14px] font-black text-indigo-800 dark:text-indigo-300 uppercase tracking-wider leading-tight">
                    PAGAMENTO É PROCESSADO E DIVIDIDO
                  </span>
                </div>

                {/* Conectores e Setas (Bifurcação) */}
                <div className="w-full max-w-[420px] relative mt-[-1px] z-0">
                  {/* Linha vertical central descendo do card */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-5 bg-slate-300 dark:bg-slate-600"></div>
                  
                  {/* Linha horizontal conectando as duas descidas */}
                  <div className="absolute top-5 left-[25%] right-[25%] h-px bg-slate-300 dark:bg-slate-600"></div>
                  
                  {/* Linha vertical esquerda */}
                  <div className="absolute top-5 left-[25%] w-px h-5 bg-slate-300 dark:bg-slate-600 flex justify-center">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-slate-300 dark:text-slate-600 absolute bottom-[-4px]">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Linha vertical direita */}
                  <div className="absolute top-5 right-[25%] w-px h-5 bg-slate-300 dark:bg-slate-600 flex justify-center">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-slate-300 dark:text-slate-600 absolute bottom-[-4px]">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                {/* 3 e 4. Destinos */}
                <div className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mt-10 z-10 max-w-[500px]">
                  {/* Fornecedor */}
                  <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-5 px-4 shadow-sm flex items-start sm:items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-50/80 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800/50 flex items-center justify-center shrink-0">
                      <Store className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[12.5px] font-black text-slate-800 dark:text-slate-200 uppercase leading-tight mb-1 tracking-wide">FORNECEDOR</span>
                      <span className="text-[11px] sm:text-[11.5px] text-slate-500 dark:text-slate-400 font-medium leading-snug">
                        Recebe o valor líquido da operação
                      </span>
                    </div>
                  </div>
                  
                  {/* Tributo */}
                  <div className="flex-1 bg-white dark:bg-slate-900 border border-teal-200/80 dark:border-teal-800/50 rounded-xl py-5 px-4 shadow-sm flex items-start sm:items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[12.5px] font-black text-teal-700 dark:text-teal-400 uppercase leading-tight mb-1 tracking-wide">CBS / IBS</span>
                      <span className="text-[11px] sm:text-[11.5px] text-slate-500 dark:text-slate-400 font-medium leading-snug">
                        A parcela tributária segue separada no fluxo
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-8 relative">
                   <div className="w-full border-t border-dashed border-slate-300/80 dark:border-slate-600/80"></div>
                   <div className="flex justify-center mt-3">
                     <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                       <CheckCircle2 className="w-4 h-4" />
                       <span className="text-[11.5px] font-medium">Fluxo dividido no momento do pagamento</span>
                     </div>
                   </div>
                </div>

              </div>
            </div>

            """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

