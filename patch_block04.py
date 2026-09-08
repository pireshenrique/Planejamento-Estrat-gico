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
                    O valor que transita pelo caixa e o momento do recebimento podem ser alterados.
                  </span>
                  <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Recebimento líquido:</strong> o fornecedor pode passar a receber o valor da operação já deduzido da parcela tributária.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Fluxo de caixa:</strong> a entrada financeira reflete de forma mais imediata a segregação do tributo retido no momento do pagamento.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Capital de giro:</strong> as mudanças no valor líquido e no tempo do recebimento podem afetar diretamente a gestão de curto prazo.</span>
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
                    Pagamento, conciliação e baixa de recebíveis passam a exigir novas rotinas.
                  </span>
                  <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Conciliação financeira:</strong> exige correlacionar o valor líquido recebido com o valor total faturado no documento fiscal.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Contas a receber:</strong> a baixa de títulos precisa considerar que parte do pagamento foi direcionada ao Fisco, não à conta da empresa.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Identificação de parcelas:</strong> é necessário identificar claramente as frações do pagamento segregadas na liquidação.</span>
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
                    A área fiscal e a área financeira precisarão dialogar de forma integrada e rápida.
                  </span>
                  <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Adaptação de ERP:</strong> os sistemas de gestão precisarão parametrizar a segregação automática e a baixa composta de recebíveis.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Meios de pagamento:</strong> plataformas de cobrança (cartões, PIX, boletos) precisarão se conectar ao fluxo inteligente de retenção.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Sincronia de dados:</strong> as informações da emissão da nota deverão alimentar instantaneamente as regras no momento da liquidação.</span>
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
                    A lógica de apuração, acompanhamento e apropriação de créditos se transforma.
                  </span>
                  <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Controle do recolhimento:</strong> a empresa passa a monitorar tributos que foram recolhidos diretamente pelas câmaras de liquidação.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Dinâmica de créditos:</strong> a vinculação do pagamento do tributo na origem impacta a validação e o aproveitamento do crédito pelo adquirente.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 mt-[3px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Coerência documental:</strong> documento fiscal, evento de pagamento e fluxo de segregação deverão estar perfeitamente alinhados na apuração.</span>
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
                  O Split Payment altera o fluxo de recebimento, as rotinas de conciliação financeira, a parametrização dos sistemas de gestão e a dinâmica de validação dos controles tributários.
                </p>
              </div>

            </div>

            """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

