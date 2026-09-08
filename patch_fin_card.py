import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{/* Impacto Financeiro */}"
end_marker = "{/* Impacto Operacional */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found")
    exit(1)

new_card = """{/* Impacto Financeiro */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                      <BarChart3 className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                    </div>
                    <h5 className="text-[14px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">Impacto Financeiro</h5>
                  </div>
                  <span className="text-[12.5px] text-slate-500 dark:text-slate-400 font-semibold block border-b border-slate-200 dark:border-slate-700/80 pb-2.5 mb-3 leading-snug">
                    O jeito como o dinheiro entra na empresa pode mudar com o Split Payment.
                  </span>
                  <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Quanto a empresa recebe:</strong> hoje, em muitos casos, o valor da venda entra primeiro na empresa e o tributo é recolhido depois. Com o Split Payment, uma parte desse valor pode ser separada antes, de forma que a empresa receba apenas o valor líquido da operação.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Quando o dinheiro entra no caixa:</strong> além de mudar o valor recebido, a empresa também pode precisar acompanhar com mais atenção o momento em que o dinheiro entra e como ele aparece nos controles financeiros.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Planejamento do caixa:</strong> se a empresa passar a receber um valor líquido já descontado da parcela do tributo, isso pode exigir mais atenção no planejamento de pagamentos, compras e compromissos do dia a dia.</span>
                    </li>
                  </ul>
                </div>

                """

content = content[:start_idx] + new_card + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

