import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{activeTopic === 'split-payment' && ("
# Find the start index
start_idx = content.find(start_marker)

# Find the end by counting braces
idx = start_idx + len(start_marker)
open_braces = 1
while open_braces > 0 and idx < len(content):
    if content[idx:idx+2] == '{"': # naive check to avoid string braces? no need if we just count parentheses
        pass # actually it's parentheses we are counting: ( ... )
    if content[idx] == '(':
        open_braces += 1
    elif content[idx] == ')':
        open_braces -= 1
    idx += 1

end_idx = idx

new_block = """{activeTopic === 'split-payment' && (
          <div className="flex flex-col bg-[#f8fafc] dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 gap-4 sm:gap-4.5 shadow-xs">
            
            {/* 1. CABEÇALHO / HERO DA SEÇÃO */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shrink-0 shadow-2xs">
                    <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-[18px] sm:text-[21px] font-black text-slate-900 dark:text-white uppercase tracking-wide mb-0.5">
                      SPLIT PAYMENT
                    </h3>
                    <p className="text-[13px] sm:text-[14px] font-bold text-slate-800 dark:text-slate-200 leading-snug max-w-2xl">
                      Entenda como a separação automática de CBS e IBS pode mudar o fluxo de pagamento, recolhimento e conciliação das empresas.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex items-center self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    <FileCheck className="w-3.5 h-3.5 text-indigo-500" />
                    Pagamento + Tributação
                  </span>
                </div>
              </div>

              {/* FAIXA LEITURA RÁPIDA */}
              <div className="mt-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 rounded-xl p-2.5 sm:p-3 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-200/80 dark:bg-slate-700/80 px-2 py-0.5 rounded shrink-0">
                  LEITURA RÁPIDA
                </span>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[12.5px] font-medium text-slate-700 dark:text-slate-300">
                  <span className="font-bold">Pagamento</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span className="font-bold">Tributação</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span className="font-bold">Caixa</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span className="font-bold">Sistemas</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span className="font-bold">Conciliação</span>
                </div>
              </div>
            </div>

            {/* BLOCO 01 — O QUE É SPLIT PAYMENT? */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xs relative overflow-hidden">
              <div className="flex flex-col justify-center gap-3 relative z-10">
                <div className="flex items-center gap-2.5 mb-1 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                  <h4 className="text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wide">01. O QUE É SPLIT PAYMENT?</h4>
                </div>
                <h3 className="text-[17px] sm:text-[19px] font-black text-indigo-900 dark:text-indigo-400 uppercase tracking-tight leading-snug">
                  O TRIBUTO PASSA A SER SEPARADO NO PRÓPRIO FLUXO DO PAGAMENTO
                </h3>
                <p className="text-[14px] sm:text-[15px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                  No Split Payment, o pagamento da operação é processado de forma que a parcela correspondente a CBS e IBS possa ser segregada do valor destinado ao fornecedor.
                </p>
              </div>

              <div className="flex flex-col items-center bg-slate-50 dark:bg-slate-800/40 rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700/80 relative z-10 justify-center">
                <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 px-5 py-2.5 rounded-lg shadow-sm w-48 text-center flex flex-col z-10">
                  <span className="text-[13px] font-black text-slate-900 dark:text-white uppercase">CLIENTE PAGA</span>
                </div>
                
                <div className="w-px h-5 bg-slate-300 dark:bg-slate-600"></div>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/60 px-5 py-2 rounded-full w-56 text-center flex items-center justify-center gap-2 z-10">
                  <Settings className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-[11px] font-black text-indigo-800 dark:text-indigo-300 uppercase tracking-wider">PAGAMENTO É PROCESSADO</span>
                </div>

                <div className="flex justify-center items-center gap-[4.5rem] mt-1 z-10 w-full px-8">
                   <ArrowRight className="w-4 h-4 text-indigo-400 dark:text-indigo-600 rotate-[135deg] shrink-0" />
                   <ArrowRight className="w-4 h-4 text-teal-400 dark:text-teal-600 rotate-[45deg] shrink-0" />
                </div>
                
                <div className="w-full flex justify-between gap-3 mt-1 z-10 px-2 sm:px-4">
                  <div className="flex-1 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-lg py-3 px-2 text-center shadow-2xs flex flex-col items-center justify-center h-full">
                    <Store className="w-4 h-4 text-slate-400 mb-1" />
                    <span className="text-[12px] font-black text-slate-800 dark:text-slate-200 uppercase leading-tight mb-1">FORNECEDOR</span>
                    <span className="text-[10px] text-slate-500 font-medium leading-tight">Valor correspondente à operação</span>
                  </div>
                  <div className="flex-1 bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-200 dark:border-teal-800/50 rounded-lg py-3 px-2 text-center shadow-2xs flex flex-col items-center justify-center h-full">
                    <Target className="w-4 h-4 text-teal-500 mb-1" />
                    <span className="text-[12px] font-black text-teal-800 dark:text-teal-200 uppercase leading-tight mb-1">CBS / IBS</span>
                    <span className="text-[10px] text-teal-700/80 dark:text-teal-400/80 font-medium leading-tight">Parcela tributária segregada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCO 02 — COMO FUNCIONA NA PRÁTICA? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <h4 className="text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  02. COMO FUNCIONA NA PRÁTICA?
                </h4>
              </div>

              <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2 pt-1">
                <div className="flex-1 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center text-center gap-2 shadow-2xs">
                  <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-200/50 dark:bg-slate-700/50 px-2 py-0.5 rounded">ETAPA 1</span>
                  <span className="text-[13px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide mt-1">PAGAMENTO</span>
                  <span className="text-[11.5px] font-medium text-slate-600 dark:text-slate-400 leading-tight">Cliente realiza o pagamento.</span>
                </div>
                
                <div className="hidden lg:flex items-center justify-center shrink-0 w-4"><ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" /></div>
                <div className="flex lg:hidden justify-center shrink-0 my-0"><ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 rotate-90" /></div>

                <div className="flex-1 bg-indigo-50/40 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/40 rounded-xl p-4 flex flex-col items-center text-center gap-2 shadow-2xs">
                  <span className="text-[10px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-widest bg-indigo-100/50 dark:bg-indigo-900/40 px-2 py-0.5 rounded">ETAPA 2</span>
                  <span className="text-[13px] font-black text-indigo-900 dark:text-indigo-200 uppercase tracking-wide mt-1">IDENTIFICAÇÃO E SEGREGAÇÃO</span>
                  <span className="text-[11.5px] font-medium text-indigo-700/80 dark:text-indigo-300/80 leading-tight">O sistema identifica os valores correspondentes à operação e à parcela tributária.</span>
                </div>

                <div className="hidden lg:flex items-center justify-center shrink-0 w-4"><ArrowRight className="w-4 h-4 text-indigo-300 dark:text-indigo-700" /></div>
                <div className="flex lg:hidden justify-center shrink-0 my-0"><ArrowRight className="w-4 h-4 text-indigo-300 dark:text-indigo-700 rotate-90" /></div>

                <div className="flex-[1.5] bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-200 dark:border-indigo-700/50 rounded-xl p-4 flex flex-col items-center text-center gap-3 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                  <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-300 uppercase tracking-widest bg-indigo-200/50 dark:bg-indigo-800/50 px-2 py-0.5 rounded">ETAPA 3</span>
                  <span className="text-[13px] font-black text-indigo-900 dark:text-indigo-100 uppercase tracking-wide mt-1">DESTINO</span>
                  <span className="text-[11.5px] font-medium text-indigo-800 dark:text-indigo-200 leading-tight">O fluxo se divide:</span>
                  
                  <div className="w-full flex flex-col sm:flex-row justify-center gap-2 mt-1">
                    <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 flex flex-col items-center justify-center">
                      <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-0.5">FORNECEDOR</span>
                      <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400 leading-tight">Recebe o valor correspondente</span>
                    </div>
                    <div className="flex-1 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/50 rounded-lg p-2.5 flex flex-col items-center justify-center">
                      <span className="text-[11px] font-black text-teal-800 dark:text-teal-200 uppercase tracking-wider mb-0.5">TRIBUTO</span>
                      <span className="text-[11px] font-medium text-teal-700 dark:text-teal-300 leading-tight">Segue dentro do mecanismo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCO 03 — O QUE MUDA NO FLUXO DO PAGAMENTO? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-slate-400"></span>
                <h4 className="text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  03. O QUE MUDA NO FLUXO DO PAGAMENTO?
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-1">
                {/* COMO É HOJE */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center bg-slate-50 dark:bg-slate-800/40 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="text-[12px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                  </div>
                  <div className="flex flex-col gap-3 relative z-10 px-2 mt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-black text-slate-500">1</span>
                      </div>
                      <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200 mt-0.5">Cliente realiza o pagamento</span>
                    </div>
                    <div className="ml-[9px] w-px h-4 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-black text-slate-500">2</span>
                      </div>
                      <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200 mt-0.5">Fornecedor recebe o valor da operação</span>
                    </div>
                    <div className="ml-[9px] w-px h-4 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-black text-slate-500">3</span>
                      </div>
                      <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">Tributos são posteriormente apurados e recolhidos conforme as regras aplicáveis</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <p className="text-[12.5px] font-medium text-slate-500 dark:text-slate-400">
                      O recebimento financeiro e o recolhimento tributário ocorrem em momentos distintos do processo.
                    </p>
                  </div>
                </div>

                {/* COM SPLIT PAYMENT */}
                <div className="flex flex-col gap-3 relative">
                  <div className="hidden md:block absolute left-[-13px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700/80"></div>
                  <div className="flex items-center justify-center bg-indigo-50/70 dark:bg-indigo-900/30 py-2.5 rounded-lg border border-indigo-100 dark:border-indigo-800/50">
                    <span className="text-[12px] font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                  </div>
                  <div className="flex flex-col gap-3 relative z-10 px-2 mt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400">1</span>
                      </div>
                      <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200 mt-0.5">Cliente realiza o pagamento</span>
                    </div>
                    <div className="ml-[9px] w-px h-4 bg-indigo-200 dark:bg-indigo-800/50"></div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400">2</span>
                      </div>
                      <span className="text-[13px] font-bold text-indigo-900 dark:text-indigo-300 mt-0.5">CBS / IBS são identificados e segregados</span>
                    </div>
                    
                    <div className="ml-[4px] flex gap-4 pt-1">
                       <div className="flex flex-col items-center"><div className="w-px h-4 bg-slate-200 dark:bg-slate-700 rotate-[-25deg] origin-top"></div></div>
                       <div className="flex flex-col items-center"><div className="w-px h-4 bg-teal-200 dark:bg-teal-800/60 rotate-[25deg] origin-top"></div></div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 mt-1">
                      <div className="flex-1 flex items-start gap-2.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-2.5 rounded-lg shadow-2xs">
                        <div className="w-4 h-4 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[9px] font-black text-slate-500">3A</span>
                        </div>
                        <span className="text-[11.5px] font-bold text-slate-700 dark:text-slate-300 leading-snug">Fornecedor recebe o valor correspondente após a segregação</span>
                      </div>
                      <div className="flex-1 flex items-start gap-2.5 bg-teal-50/40 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/50 p-2.5 rounded-lg shadow-2xs">
                        <div className="w-4 h-4 rounded-full bg-white dark:bg-teal-900 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[9px] font-black text-teal-600 dark:text-teal-400">3B</span>
                        </div>
                        <span className="text-[11.5px] font-bold text-teal-800 dark:text-teal-300 leading-snug">Parcela tributária segue separada no próprio fluxo</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-indigo-100 dark:border-indigo-900/40">
                    <p className="text-[12.5px] font-medium text-indigo-600 dark:text-indigo-400">
                      Pagamento e recolhimento tributário passam a estar mais diretamente conectados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-md border border-indigo-700 dark:border-indigo-400">
                <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 dark:bg-black/20 px-3 py-1.5 rounded-md shrink-0">PRINCIPAL MUDANÇA</span>
                <p className="text-[13.5px] sm:text-[14.5px] font-bold leading-snug">
                  O tributo deixa de depender apenas de um recolhimento posterior e passa a ser segregado dentro do próprio fluxo de pagamento.
                </p>
              </div>
            </div>

            {/* BLOCO 04 — O QUE MUDA PARA A EMPRESA? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                <h4 className="text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  04. O QUE MUDA PARA A EMPRESA?
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Impacto Financeiro */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-2xs shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <h5 className="text-[15px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">Impacto Financeiro</h5>
                  </div>
                  <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-bold block border-b border-slate-200 dark:border-slate-700/80 pb-2">O valor que transita pelo caixa pode mudar.</span>
                  <ul className="flex flex-col gap-2.5 text-[13px] text-slate-700 dark:text-slate-300 font-medium pt-1">
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" /> Recebimento líquido.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" /> Fluxo de caixa.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" /> Capital de giro.</li>
                  </ul>
                </div>

                {/* Impacto Operacional */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-2xs shrink-0">
                      <Settings className="w-4 h-4" />
                    </div>
                    <h5 className="text-[15px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">Impacto Operacional</h5>
                  </div>
                  <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-bold block border-b border-slate-200 dark:border-slate-700/80 pb-2">Pagamento e conciliação passam a exigir novas rotinas.</span>
                  <ul className="flex flex-col gap-2.5 text-[13px] text-slate-700 dark:text-slate-300 font-medium pt-1">
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" /> Conciliação.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" /> Contas a receber.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" /> Fechamento financeiro.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" /> Identificação das parcelas segregadas.</li>
                  </ul>
                </div>

                {/* Sistemas & Integrações */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-2xs shrink-0">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <h5 className="text-[15px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">Sistemas & Integrações</h5>
                  </div>
                  <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-bold block border-b border-slate-200 dark:border-slate-700/80 pb-2">Fiscal e financeiro precisam conversar em tempo real.</span>
                  <ul className="flex flex-col gap-2.5 text-[13px] text-slate-700 dark:text-slate-300 font-medium pt-1">
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" /> ERP.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" /> Meios de pagamento.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" /> Integração fiscal-financeira.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" /> Parametrização.</li>
                  </ul>
                </div>

                {/* Impacto Tributário */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-2xs shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <h5 className="text-[15px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">Impacto Tributário</h5>
                  </div>
                  <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-bold block border-b border-slate-200 dark:border-slate-700/80 pb-2">Pagamento, apuração e créditos ficam mais conectados.</span>
                  <ul className="flex flex-col gap-2.5 text-[13px] text-slate-700 dark:text-slate-300 font-medium pt-1">
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" /> Acompanhamento do recolhimento.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" /> Apuração.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" /> Créditos.</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" /> Validação das operações.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* BLOCO 05 — QUANDO COMEÇA? */}
              <div className="lg:col-span-2 bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col gap-3">
                <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-slate-400"></span>
                  <h4 className="text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wide">
                    05. QUANDO COMEÇA?
                  </h4>
                </div>
                <div className="flex flex-col pt-2 pb-1">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0"><Settings className="w-3.5 h-3.5 text-slate-500" /></div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200">PREPARAÇÃO TÉCNICA</span>
                    </div>
                  </div>
                  <div className="ml-3.5 w-px h-5 bg-slate-200 dark:bg-slate-700 my-1"></div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0"><Clock className="w-3.5 h-3.5 text-slate-500" /></div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200">IMPLEMENTAÇÃO GRADUAL</span>
                    </div>
                  </div>
                  <div className="ml-3.5 w-px h-5 bg-slate-200 dark:bg-slate-700 my-1"></div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center shrink-0"><Layers className="w-3.5 h-3.5 text-indigo-500" /></div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[13px] font-bold text-indigo-700 dark:text-indigo-400">EXPANSÃO DO MECANISMO</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOCO 06 — POR QUE ISSO IMPORTA? */}
              <div className="lg:col-span-3 bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col gap-3">
                <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                  <h4 className="text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wide">
                    06. POR QUE ISSO IMPORTA?
                  </h4>
                </div>
                
                <div className="flex items-center justify-between gap-1 sm:gap-2 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-lg border border-slate-200 dark:border-slate-700/60 overflow-x-auto hide-scrollbar mt-1 shadow-2xs">
                  <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase shrink-0">VENDA</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                  <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase shrink-0">PAGAMENTO</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                  <span className="text-[11px] font-black text-indigo-600 dark:text-indigo-400 uppercase shrink-0">SEGREGAÇÃO</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                  <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase shrink-0">RECEBIMENTO</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                  <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase shrink-0">CONCILIAÇÃO</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                  <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase shrink-0">APURAÇÃO</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex flex-col gap-1 shadow-2xs">
                    <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase">CAIXA</span>
                    <span className="text-[11px] font-medium text-slate-500 leading-tight">quanto efetivamente entra.</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex flex-col gap-1 shadow-2xs">
                    <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase">PROCESSOS</span>
                    <span className="text-[11px] font-medium text-slate-500 leading-tight">como conciliar e fechar.</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex flex-col gap-1 shadow-2xs">
                    <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase">SISTEMAS</span>
                    <span className="text-[11px] font-medium text-slate-500 leading-tight">como identificar e integrar.</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex flex-col gap-1 shadow-2xs">
                    <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase">TRIBUTAÇÃO</span>
                    <span className="text-[11px] font-medium text-slate-500 leading-tight">como acompanhar.</span>
                  </div>
                </div>

                <div className="mt-auto pt-3">
                  <p className="text-[14px] sm:text-[15px] font-black text-slate-800 dark:text-slate-200 leading-snug">
                    O Split Payment não é apenas uma mudança tributária: ele conecta tributação, pagamento, caixa e sistemas dentro da mesma operação.
                  </p>
                </div>
              </div>
            </div>

            {/* FAIXA FINAL "EM RESUMO" */}
            <div className="w-full bg-slate-800 dark:bg-slate-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 shadow-md mt-1">
              <div className="bg-white/20 dark:bg-black/10 px-3 py-1.5 rounded-lg shrink-0">
                <strong className="text-[12px] text-white dark:text-slate-900 font-black uppercase tracking-widest">
                  EM RESUMO
                </strong>
              </div>
              <p className="text-[13px] sm:text-[14.5px] text-slate-200 dark:text-slate-700 leading-relaxed font-medium">
                O Split Payment aproxima o recolhimento de CBS e IBS do momento do pagamento, alterando a forma como empresas recebem, conciliam e acompanham o fluxo financeiro e tributário das operações.
              </p>
            </div>

          </div>
        )}"""

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

