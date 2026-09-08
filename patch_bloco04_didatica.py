import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{/* BLOCO 04 — O QUE MUDA PARA A EMPRESA? */}"
end_marker = "{/* BLOCO 05 — QUANDO COMEÇA? */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found")
    exit(1)

# Find the enclosing div of BLOCO 05 to replace right before it
end_div_idx = content.rfind('<div className="grid grid-cols-1 lg:grid-cols-5 gap-4">', 0, end_idx)
if end_div_idx != -1:
    end_idx = end_div_idx

new_block = """{/* BLOCO 04 — O QUE MUDA PARA A EMPRESA? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                <h4 className="text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wide">
                  04. O QUE MUDA PARA A EMPRESA?
                </h4>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-1">
                {/* Impacto Financeiro */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                      <BarChart3 className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                    </div>
                    <h5 className="text-[14px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">Impacto Financeiro</h5>
                  </div>
                  <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-semibold block border-b border-slate-200 dark:border-slate-700/80 pb-2.5 mb-3 leading-snug">
                    O dinheiro que efetivamente entra no caixa da empresa pode mudar.
                  </span>
                  <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Valor recebido:</strong> parte do pagamento correspondente ao tributo pode ser separada antes de o dinheiro chegar à empresa.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Fluxo de caixa:</strong> a empresa passa a receber um valor líquido diferente do total pago pelo cliente.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Capital de giro:</strong> essa mudança pode exigir atenção ao dinheiro disponível para despesas e operações do dia a dia.</span>
                    </li>
                  </ul>
                </div>

                {/* Impacto Operacional */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                      <Settings className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                    </div>
                    <h5 className="text-[14px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">Impacto Operacional</h5>
                  </div>
                  <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-semibold block border-b border-slate-200 dark:border-slate-700/80 pb-2.5 mb-3 leading-snug">
                    Receber, conferir e dar baixa nos pagamentos passa a exigir novas rotinas.
                  </span>
                  <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Conciliação:</strong> será preciso conferir se o valor recebido, o valor da venda e o tributo separado estão corretos.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Contas a receber:</strong> a baixa da venda precisa considerar que uma parte do pagamento pode seguir diretamente para o recolhimento do tributo.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Identificação dos valores:</strong> a empresa precisa conseguir enxergar claramente quanto recebeu e quanto foi separado como CBS/IBS.</span>
                    </li>
                  </ul>
                </div>

                {/* Sistemas & Integrações */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                      <Monitor className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h5 className="text-[14px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">Sistemas & Integrações</h5>
                  </div>
                  <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-semibold block border-b border-slate-200 dark:border-slate-700/80 pb-2.5 mb-3 leading-snug">
                    Os sistemas fiscal e financeiro precisam trocar informações de forma integrada.
                  </span>
                  <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">ERP:</strong> os sistemas precisam reconhecer o valor total da venda, o tributo separado e o valor efetivamente recebido.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Meios de pagamento:</strong> cartões, Pix e outros meios precisam estar integrados às informações necessárias para o processamento da operação.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Integração de dados:</strong> nota fiscal, pagamento e informações tributárias precisam estar conectados para evitar divergências na conciliação.</span>
                    </li>
                  </ul>
                </div>

                {/* Impacto Tributário */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                      <FileText className="w-4 h-4 text-teal-600 dark:text-teal-500" />
                    </div>
                    <h5 className="text-[14px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">Impacto Tributário</h5>
                  </div>
                  <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-semibold block border-b border-slate-200 dark:border-slate-700/80 pb-2.5 mb-3 leading-snug">
                    O recolhimento do tributo fica mais conectado ao próprio pagamento.
                  </span>
                  <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Acompanhamento:</strong> a empresa precisa saber quais valores de CBS/IBS já foram separados e recolhidos em cada operação.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Créditos tributários:</strong> será necessário acompanhar corretamente os créditos associados às compras e operações realizadas.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Validação:</strong> documento fiscal, pagamento, valor recebido e tributo segregado precisam estar coerentes para que a apuração funcione corretamente.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Faixa Resumo */}
              <div className="mt-1 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 w-full">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center shrink-0 shadow-sm mt-0.5 sm:mt-0">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                </div>
                <p className="text-[13px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                  <strong className="font-black text-slate-900 dark:text-slate-100 uppercase text-[11px] tracking-wider mr-1.5">Em síntese:</strong> 
                  o Split Payment não muda apenas a forma de pagar o imposto. Ele também pode mudar quanto entra no <strong className="font-bold text-slate-900 dark:text-slate-100">caixa</strong>, como os <strong className="font-bold text-slate-900 dark:text-slate-100">pagamentos</strong> são conferidos, como os <strong className="font-bold text-slate-900 dark:text-slate-100">sistemas</strong> se comunicam e como os <strong className="font-bold text-slate-900 dark:text-slate-100">tributos</strong> são controlados.
                </p>
              </div>

            </div>

            """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

