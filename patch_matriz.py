import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{/* BLOCO 03 — NA PRÁTICA, O QUE MUDA EM RELAÇÃO AO MODELO ATUAL? */}"
end_marker = "{/* BLOCO 04 — O QUE MUDA PARA A EMPRESA? */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found")
    exit(1)

new_block = """{/* BLOCO 03 — NA PRÁTICA, O QUE MUDA EM RELAÇÃO AO MODELO ATUAL? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col gap-4">
              
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

              {/* MATRIZ COMPARATIVA (SINGLE COMPONENT) */}
              <div className="flex flex-col gap-2.5 w-full mt-1">
                
                {/* Cabeçalho da Matriz */}
                <div className="hidden md:flex items-center w-full px-1 pb-1">
                  <div className="w-[26%] shrink-0 pl-1">
                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">DIMENSÃO ANALISADA</span>
                  </div>
                  <div className="w-[37%] shrink-0 pl-3">
                    <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                  </div>
                  <div className="w-[37%] shrink-0 pl-3">
                    <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                  </div>
                </div>

                {/* Linha 1 */}
                <div className="flex flex-col md:flex-row items-stretch w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-[10px] overflow-hidden shadow-2xs">
                  {/* Tema (26%) */}
                  <div className="md:w-[26%] shrink-0 flex items-center gap-2.5 p-2.5 bg-white dark:bg-[#111827] border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase leading-tight">MOMENTO DO<br/>RECOLHIMENTO</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 leading-tight">Quando o tributo é direcionado.</span>
                    </div>
                  </div>
                  {/* Comparativo (74%) */}
                  <div className="flex-1 flex flex-col md:flex-row items-stretch relative">
                    {/* Hoje */}
                    <div className="flex-1 flex flex-col justify-center p-3 md:pr-6 bg-slate-50/70 dark:bg-slate-800/30">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[9.5px] font-black text-slate-500 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                      </div>
                      <span className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                        O fornecedor recebe a operação e o recolhimento tributário ocorre posteriormente, conforme as regras aplicáveis.
                      </span>
                    </div>
                    {/* Arrow Divider */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -ml-3.5 items-center justify-center w-7 z-10">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      </div>
                    </div>
                    {/* Split */}
                    <div className="flex-1 flex flex-col justify-center p-3 md:pl-6 bg-indigo-50/60 dark:bg-indigo-900/15">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[9.5px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                      </div>
                      <span className="text-[12.5px] font-medium text-indigo-900 dark:text-indigo-200 leading-snug">
                        A parcela de CBS/IBS é segregada dentro do próprio fluxo do pagamento.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Linha 2 */}
                <div className="flex flex-col md:flex-row items-stretch w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-[10px] overflow-hidden shadow-2xs">
                  {/* Tema (26%) */}
                  <div className="md:w-[26%] shrink-0 flex items-center gap-2.5 p-2.5 bg-white dark:bg-[#111827] border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <Wallet className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase leading-tight">VALOR RECEBIDO<br/>PELO FORNECEDOR</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 leading-tight">Como o dinheiro chega à empresa.</span>
                    </div>
                  </div>
                  {/* Comparativo (74%) */}
                  <div className="flex-1 flex flex-col md:flex-row items-stretch relative">
                    {/* Hoje */}
                    <div className="flex-1 flex flex-col justify-center p-3 md:pr-6 bg-slate-50/70 dark:bg-slate-800/30">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[9.5px] font-black text-slate-500 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                      </div>
                      <span className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                        O valor da operação transita pelo recebimento da empresa antes do recolhimento posterior dos tributos aplicáveis.
                      </span>
                    </div>
                    {/* Arrow Divider */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -ml-3.5 items-center justify-center w-7 z-10">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      </div>
                    </div>
                    {/* Split */}
                    <div className="flex-1 flex flex-col justify-center p-3 md:pl-6 bg-indigo-50/60 dark:bg-indigo-900/15">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[9.5px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                      </div>
                      <span className="text-[12.5px] font-medium text-indigo-900 dark:text-indigo-200 leading-snug">
                        O fornecedor recebe o valor correspondente à operação após a segregação da parcela tributária.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Linha 3 */}
                <div className="flex flex-col md:flex-row items-stretch w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-[10px] overflow-hidden shadow-2xs">
                  {/* Tema (26%) */}
                  <div className="md:w-[26%] shrink-0 flex items-center gap-2.5 p-2.5 bg-white dark:bg-[#111827] border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <Link2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase leading-tight">PAGAMENTO ×<br/>TRIBUTAÇÃO</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 leading-tight">Quão conectadas estão as etapas.</span>
                    </div>
                  </div>
                  {/* Comparativo (74%) */}
                  <div className="flex-1 flex flex-col md:flex-row items-stretch relative">
                    {/* Hoje */}
                    <div className="flex-1 flex flex-col justify-center p-3 md:pr-6 bg-slate-50/70 dark:bg-slate-800/30">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[9.5px] font-black text-slate-500 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                      </div>
                      <span className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                        Pagamento e recolhimento tributário ocorrem como etapas mais separadas dentro da operação.
                      </span>
                    </div>
                    {/* Arrow Divider */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -ml-3.5 items-center justify-center w-7 z-10">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      </div>
                    </div>
                    {/* Split */}
                    <div className="flex-1 flex flex-col justify-center p-3 md:pl-6 bg-indigo-50/60 dark:bg-indigo-900/15">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[9.5px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                      </div>
                      <span className="text-[12.5px] font-medium text-indigo-900 dark:text-indigo-200 leading-snug">
                        Pagamento e recolhimento passam a ficar mais diretamente conectados no mesmo fluxo.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Linha 4 */}
                <div className="flex flex-col md:flex-row items-stretch w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-[10px] overflow-hidden shadow-2xs">
                  {/* Tema (26%) */}
                  <div className="md:w-[26%] shrink-0 flex items-center gap-2.5 p-2.5 bg-white dark:bg-[#111827] border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <ListChecks className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 uppercase leading-tight">CONTROLE DA<br/>OPERAÇÃO</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 leading-tight">O que precisa ser conciliado.</span>
                    </div>
                  </div>
                  {/* Comparativo (74%) */}
                  <div className="flex-1 flex flex-col md:flex-row items-stretch relative">
                    {/* Hoje */}
                    <div className="flex-1 flex flex-col justify-center p-3 md:pr-6 bg-slate-50/70 dark:bg-slate-800/30">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[9.5px] font-black text-slate-500 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                      </div>
                      <span className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                        Financeiro e fiscal conciliam pagamentos, recebimentos e tributos de acordo com suas rotinas atuais.
                      </span>
                    </div>
                    {/* Arrow Divider */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -ml-3.5 items-center justify-center w-7 z-10">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      </div>
                    </div>
                    {/* Split */}
                    <div className="flex-1 flex flex-col justify-center p-3 md:pl-6 bg-indigo-50/60 dark:bg-indigo-900/15">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[9.5px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                      </div>
                      <span className="text-[12.5px] font-medium text-indigo-900 dark:text-indigo-200 leading-snug">
                        Documento fiscal, pagamento, valor recebido e parcela tributária segregada precisam estar mais integrados para a conciliação da operação.
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Faixa Principal Mudança (Substituindo a antiga) */}
              <div className="mt-1 bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-[10px] px-4 py-3 flex flex-col md:flex-row items-start md:items-center gap-3 w-full">
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-800/60 flex items-center justify-center border border-indigo-200 dark:border-indigo-700/50">
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-300" />
                  </div>
                  <span className="text-[11px] font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-widest pt-px">
                    PRINCIPAL MUDANÇA
                  </span>
                </div>
                <div className="hidden md:block w-px h-6 bg-indigo-200 dark:bg-indigo-800/80"></div>
                <p className="text-[13px] font-medium text-indigo-900 dark:text-indigo-200 leading-snug pt-px">
                  O Split Payment aproxima o recolhimento de CBS e IBS do momento do pagamento, conectando de forma mais direta o fluxo financeiro e tributário da operação.
                </p>
              </div>

            </div>

            """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

