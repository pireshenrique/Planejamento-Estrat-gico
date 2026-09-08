import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{/* BLOCO 03 — O QUE MUDA NO FLUXO DO PAGAMENTO? */}"
end_marker = "{/* BLOCO 04 — O QUE MUDA PARA A EMPRESA? */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found")
    exit(1)

new_block = """{/* BLOCO 03 — NA PRÁTICA, O QUE MUDA EM RELAÇÃO AO MODELO ATUAL? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
              
              {/* Header */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                    <ArrowLeftRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <h4 className="text-[17px] sm:text-[18px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      03. NA PRÁTICA, O QUE MUDA EM RELAÇÃO AO MODELO ATUAL?
                    </h4>
                    <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Compare como o Split Payment altera o momento do recolhimento, o recebimento financeiro e a integração entre pagamento e tributação.
                    </p>
                  </div>
                </div>
                <hr className="border-slate-100 dark:border-slate-800" />
              </div>

              {/* Matriz Comparativa */}
              <div className="flex flex-col gap-2 w-full">
                {/* Cabeçalho da Matriz */}
                <div className="hidden md:flex items-end gap-2 w-full px-1 pb-0.5">
                  <div className="w-[28%] shrink-0"></div>
                  <div className="w-[36%] shrink-0 flex items-center px-1">
                    <span className="text-[10.5px] font-black text-slate-500 uppercase tracking-widest">Como funciona hoje</span>
                  </div>
                  <div className="w-[36%] shrink-0 flex items-center px-1">
                    <span className="text-[10.5px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Com Split Payment</span>
                  </div>
                </div>

                {/* Linha 1 */}
                <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-3 w-full">
                  {/* Tema */}
                  <div className="md:w-[28%] shrink-0 flex items-start gap-3 py-2 px-1">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 mt-0.5">
                      <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11.5px] font-black text-slate-800 dark:text-slate-200 uppercase leading-tight">Momento do<br/>recolhimento</span>
                      <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-snug">Quando o tributo é direcionado.</span>
                    </div>
                  </div>
                  
                  {/* Hoje */}
                  <div className="md:w-[36%] shrink-0 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 sm:p-4 flex flex-col justify-center">
                    <div className="md:hidden flex items-center mb-2">
                      <span className="text-[9.5px] font-black text-slate-500 uppercase tracking-widest">Como funciona hoje</span>
                    </div>
                    <span className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                      O fornecedor recebe a operação e o recolhimento tributário ocorre posteriormente, conforme as regras aplicáveis.
                    </span>
                  </div>
                  
                  {/* Split Payment */}
                  <div className="md:w-[36%] shrink-0 bg-indigo-50/50 dark:bg-indigo-900/15 border border-indigo-100 dark:border-indigo-800/50 rounded-xl p-3 sm:p-4 flex flex-col justify-center">
                    <div className="md:hidden flex items-center mb-2">
                      <span className="text-[9.5px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Com Split Payment</span>
                    </div>
                    <span className="text-[12.5px] font-semibold text-indigo-900 dark:text-indigo-200 leading-relaxed">
                      A parcela de CBS/IBS é segregada dentro do próprio fluxo do pagamento.
                    </span>
                  </div>
                </div>

                {/* Linha 2 */}
                <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-3 w-full">
                  {/* Tema */}
                  <div className="md:w-[28%] shrink-0 flex items-start gap-3 py-2 px-1">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 mt-0.5">
                      <Wallet className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11.5px] font-black text-slate-800 dark:text-slate-200 uppercase leading-tight">Valor recebido<br/>pelo fornecedor</span>
                      <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-snug">Como o dinheiro chega à empresa.</span>
                    </div>
                  </div>
                  
                  {/* Hoje */}
                  <div className="md:w-[36%] shrink-0 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 sm:p-4 flex flex-col justify-center">
                    <div className="md:hidden flex items-center mb-2">
                      <span className="text-[9.5px] font-black text-slate-500 uppercase tracking-widest">Como funciona hoje</span>
                    </div>
                    <span className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                      O valor da operação transita pelo recebimento da empresa antes do recolhimento posterior dos tributos aplicáveis.
                    </span>
                  </div>
                  
                  {/* Split Payment */}
                  <div className="md:w-[36%] shrink-0 bg-indigo-50/50 dark:bg-indigo-900/15 border border-indigo-100 dark:border-indigo-800/50 rounded-xl p-3 sm:p-4 flex flex-col justify-center">
                    <div className="md:hidden flex items-center mb-2">
                      <span className="text-[9.5px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Com Split Payment</span>
                    </div>
                    <span className="text-[12.5px] font-semibold text-indigo-900 dark:text-indigo-200 leading-relaxed">
                      O fornecedor recebe o valor correspondente à operação após a segregação da parcela tributária.
                    </span>
                  </div>
                </div>

                {/* Linha 3 */}
                <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-3 w-full">
                  {/* Tema */}
                  <div className="md:w-[28%] shrink-0 flex items-start gap-3 py-2 px-1">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 mt-0.5">
                      <Link2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11.5px] font-black text-slate-800 dark:text-slate-200 uppercase leading-tight">Pagamento ×<br/>Tributação</span>
                      <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-snug">Quão conectadas estão as etapas.</span>
                    </div>
                  </div>
                  
                  {/* Hoje */}
                  <div className="md:w-[36%] shrink-0 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 sm:p-4 flex flex-col justify-center">
                    <div className="md:hidden flex items-center mb-2">
                      <span className="text-[9.5px] font-black text-slate-500 uppercase tracking-widest">Como funciona hoje</span>
                    </div>
                    <span className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                      Pagamento e recolhimento tributário ocorrem como etapas mais separadas dentro da operação.
                    </span>
                  </div>
                  
                  {/* Split Payment */}
                  <div className="md:w-[36%] shrink-0 bg-indigo-50/50 dark:bg-indigo-900/15 border border-indigo-100 dark:border-indigo-800/50 rounded-xl p-3 sm:p-4 flex flex-col justify-center">
                    <div className="md:hidden flex items-center mb-2">
                      <span className="text-[9.5px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Com Split Payment</span>
                    </div>
                    <span className="text-[12.5px] font-semibold text-indigo-900 dark:text-indigo-200 leading-relaxed">
                      Pagamento e recolhimento passam a ficar mais diretamente conectados no mesmo fluxo.
                    </span>
                  </div>
                </div>

                {/* Linha 4 */}
                <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-3 w-full">
                  {/* Tema */}
                  <div className="md:w-[28%] shrink-0 flex items-start gap-3 py-2 px-1">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 mt-0.5">
                      <ListChecks className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11.5px] font-black text-slate-800 dark:text-slate-200 uppercase leading-tight">Controle da<br/>operação</span>
                      <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-snug">O que precisa ser conciliado.</span>
                    </div>
                  </div>
                  
                  {/* Hoje */}
                  <div className="md:w-[36%] shrink-0 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 sm:p-4 flex flex-col justify-center">
                    <div className="md:hidden flex items-center mb-2">
                      <span className="text-[9.5px] font-black text-slate-500 uppercase tracking-widest">Como funciona hoje</span>
                    </div>
                    <span className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                      Financeiro e fiscal conciliam pagamentos, recebimentos e tributos de acordo com suas rotinas atuais.
                    </span>
                  </div>
                  
                  {/* Split Payment */}
                  <div className="md:w-[36%] shrink-0 bg-indigo-50/50 dark:bg-indigo-900/15 border border-indigo-100 dark:border-indigo-800/50 rounded-xl p-3 sm:p-4 flex flex-col justify-center">
                    <div className="md:hidden flex items-center mb-2">
                      <span className="text-[9.5px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Com Split Payment</span>
                    </div>
                    <span className="text-[12.5px] font-semibold text-indigo-900 dark:text-indigo-200 leading-relaxed">
                      Documento fiscal, pagamento, valor recebido e parcela tributária segregada precisam estar mais integrados para a conciliação da operação.
                    </span>
                  </div>
                </div>

              </div>

              {/* Faixa Principal Mudança (Substituindo a antiga) */}
              <div className="mt-1 bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/60 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-7 h-7 rounded-md bg-indigo-100 dark:bg-indigo-800/50 flex items-center justify-center">
                    <Settings className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <span className="text-[11px] font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-widest pt-0.5">
                    PRINCIPAL MUDANÇA
                  </span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-indigo-200 dark:bg-indigo-800/80"></div>
                <p className="text-[12.5px] font-semibold text-indigo-900 dark:text-indigo-200 leading-snug pt-0.5">
                  O Split Payment aproxima o recolhimento de CBS e IBS do momento do pagamento, conectando de forma mais direta o fluxo financeiro e tributário da operação.
                </p>
              </div>

            </div>

            """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

