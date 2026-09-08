import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{/* BLOCO 02 — COMO A OPERAÇÃO ACONTECE NA PRÁTICA? */}"
end_marker = "{/* BLOCO 03 — O QUE MUDA NO FLUXO DO PAGAMENTO? */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found")
    exit(1)

new_block = """{/* BLOCO 02 — COMO A OPERAÇÃO ACONTECE NA PRÁTICA? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col gap-4">
              
              {/* CABEÇALHO */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center shrink-0">
                    <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <h4 className="text-[17px] sm:text-[18px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      02. COMO A OPERAÇÃO ACONTECE NA PRÁTICA?
                    </h4>
                    <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Da venda ao recebimento: veja como documento fiscal, pagamento, segregação e conciliação se conectam dentro da operação.
                    </p>
                  </div>
                </div>
                <hr className="border-slate-100 dark:border-slate-800" />
              </div>

              {/* FLUXOGRAMA COMPLETO (GRADE HORIZONTAL STRICT) */}
              <div className="flex flex-col xl:flex-row items-stretch gap-1.5 xl:gap-2 w-full">
                
                {/* FASE A */}
                <div className="flex-[28] flex flex-col gap-0 w-full">
                  <div className="flex items-center w-full h-4 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                    <span className="text-[9.5px] font-bold text-blue-600 uppercase tracking-widest px-1.5 whitespace-nowrap">FASE A — ORIGEM DA OPERAÇÃO</span>
                    <div className="h-px bg-blue-600 flex-1 opacity-40"></div>
                  </div>
                  <div className="flex-1 flex flex-col xl:flex-row items-stretch gap-1.5 w-full">
                    {/* 1 */}
                    <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[9px] font-bold text-slate-500 mb-1.5 shrink-0">1</div>
                      <Handshake className="w-5 h-5 text-slate-500 mb-1 shrink-0" />
                      <span className="text-[10px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">OPERAÇÃO<br/>REALIZADA</span>
                      <span className="text-[9.5px] text-slate-500 font-medium leading-[1.35] w-full">A empresa realiza uma venda ou prestação de serviço.</span>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                    </div>
                    {/* 2 */}
                    <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[9px] font-bold text-slate-500 mb-1.5 shrink-0">2</div>
                      <FileText className="w-5 h-5 text-slate-500 mb-1 shrink-0" />
                      <span className="text-[10px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">DOCUMENTO<br/>FISCAL</span>
                      <span className="text-[9.5px] text-slate-500 font-medium leading-[1.35] w-full">A operação é registrada e as informações tributárias de CBS e IBS ficam associadas à transação.</span>
                    </div>
                  </div>
                </div>

                {/* Arrow A -> B */}
                <div className="flex flex-col shrink-0">
                  <div className="hidden xl:block h-4 mb-1.5 w-full"></div>
                  <div className="flex-1 flex items-center justify-center py-1.5 xl:py-0">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                  </div>
                </div>

                {/* FASE B */}
                <div className="flex-[32] flex flex-col gap-0 w-full">
                  <div className="flex items-center w-full h-4 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></div>
                    <span className="text-[9.5px] font-bold text-indigo-600 uppercase tracking-widest px-1.5 whitespace-nowrap">FASE B — PROCESSAMENTO</span>
                    <div className="h-px bg-indigo-600 flex-1 opacity-40"></div>
                  </div>
                  <div className="flex-1 flex flex-col xl:flex-row items-stretch gap-1.5 w-full">
                    {/* 3 */}
                    <div className="flex-[45] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[9px] font-bold text-slate-500 mb-1.5 shrink-0">3</div>
                      <CreditCard className="w-5 h-5 text-slate-500 mb-1 shrink-0" />
                      <span className="text-[10px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">CLIENTE REALIZA<br/>O PAGAMENTO</span>
                      <span className="text-[9.5px] text-slate-500 font-medium leading-[1.35] w-full">O pagamento é iniciado pelo meio utilizado na transação.</span>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                    </div>
                    {/* 4 */}
                    <div className="flex-[55] bg-indigo-50/40 dark:bg-indigo-900/10 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-2.5 flex flex-col items-center justify-start text-center shadow-sm w-full h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-indigo-50/30 dark:bg-indigo-900/10 pointer-events-none"></div>
                      <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-[9px] font-bold text-white mb-1.5 shrink-0 relative z-10">4</div>
                      <Filter className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-1 shrink-0 relative z-10" />
                      <span className="text-[10px] font-black text-indigo-800 dark:text-indigo-300 uppercase leading-tight mb-1 shrink-0 relative z-10">CBS / IBS SÃO IDENTIFICADOS<br/>E SEGREGADOS</span>
                      <span className="text-[9.5px] text-slate-600 dark:text-slate-400 font-medium leading-[1.35] relative z-10 w-full">O sistema identifica a parcela tributária e a separa dentro do fluxo financeiro da operação.</span>
                    </div>
                  </div>
                </div>

                {/* Arrow B -> C */}
                <div className="flex flex-col shrink-0">
                  <div className="hidden xl:block h-4 mb-1.5 w-full"></div>
                  <div className="flex-1 flex items-center justify-center py-1.5 xl:py-0">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                  </div>
                </div>

                {/* FASE C */}
                <div className="flex-[40] flex flex-col gap-0 w-full">
                  <div className="flex items-center w-full h-4 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                    <span className="text-[9.5px] font-bold text-teal-600 dark:text-teal-500 uppercase tracking-widest px-1.5 whitespace-nowrap">FASE C — FINALIZAÇÃO</span>
                    <div className="h-px bg-teal-500 flex-1 opacity-40"></div>
                  </div>
                  <div className="flex-1 flex flex-col xl:flex-row items-stretch gap-1.5 w-full">
                    {/* 5 */}
                    <div className="flex-[60] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[9px] font-bold text-slate-500 mb-1 shrink-0">5</div>
                      <span className="text-[10px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">OS VALORES SEGUEM<br/>SEUS DESTINOS</span>
                      
                      <ArrowRight className="w-3 h-3 text-slate-300 rotate-90 mb-1 shrink-0" />

                      <div className="w-full flex flex-col gap-1 mt-auto">
                        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-md p-1.5 w-full text-left flex flex-col justify-center">
                          <span className="text-[8.5px] font-black text-blue-800 dark:text-blue-400 uppercase tracking-wide mb-0.5">FORNECEDOR</span>
                          <span className="text-[8.5px] text-slate-500 dark:text-slate-400 leading-[1.25]">Recebe o valor da operação após a segregação.</span>
                        </div>
                        <div className="bg-teal-50/40 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/50 rounded-md p-1.5 w-full text-left flex flex-col justify-center">
                          <span className="text-[8.5px] font-black text-teal-800 dark:text-teal-400 uppercase tracking-wide mb-0.5">CBS / IBS</span>
                          <span className="text-[8.5px] text-teal-700/90 dark:text-teal-400/80 leading-[1.25]">Parcela tributária segue separada no mecanismo.</span>
                        </div>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                    </div>
                    {/* 6 */}
                    <div className="flex-[40] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[9px] font-bold text-slate-500 mb-1.5 shrink-0">6</div>
                      <FileCheck className="w-5 h-5 text-slate-500 mb-1 shrink-0" />
                      <span className="text-[10px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">CONCILIAÇÃO<br/>DA OPERAÇÃO</span>
                      <span className="text-[9.5px] text-slate-500 font-medium leading-[1.35] w-full">A empresa relaciona documento fiscal, pagamento, valor recebido e parcela tributária segregada.</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* CONCLUSÃO BASTIDORES */}
              <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-2.5 sm:p-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-7 h-7 rounded-md bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center">
                    <Settings className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-[10.5px] font-black text-blue-800 dark:text-blue-300 uppercase tracking-widest pt-0.5">
                    O QUE ACONTECE NOS BASTIDORES?
                  </span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-slate-300 dark:bg-slate-600"></div>
                <p className="text-[11.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug pt-0.5">
                  Documento fiscal, pagamento e informações tributárias precisam estar conectados para que a segregação e a conciliação ocorram corretamente.
                </p>
              </div>

            </div>

            """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

