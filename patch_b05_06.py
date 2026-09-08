import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '<div className="grid grid-cols-1 lg:grid-cols-5 gap-4">'
end_marker = '          </div>\n        )}\n        {/* Placeholder Estrutural para Temas em Construção */}'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found")
    exit(1)

new_content = """{/* Wrapper vertical para BLOCO 05 e BLOCO 06 para ocupar espaço 100% horizontal */}
            <div className="flex flex-col gap-4 w-full">
              
              {/* BLOCO 05 — COMO O SPLIT PAYMENT SERÁ IMPLEMENTADO? */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-slate-400"></span>
                    <h4 className="text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wide">
                      05. COMO O SPLIT PAYMENT SERÁ IMPLEMENTADO?
                    </h4>
                  </div>
                </div>
                <span className="text-[13px] text-slate-600 dark:text-slate-400 font-medium leading-snug">
                  A adoção depende de preparação técnica, integração entre sistemas e evolução gradual da infraestrutura necessária ao novo modelo.
                </span>

                <div className="flex flex-col md:flex-row items-stretch gap-3 mt-1">
                  {/* Etapa 1 */}
                  <div className="flex-1 bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                        <Settings className="w-3.5 h-3.5" />
                      </div>
                      <h5 className="text-[12px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">PREPARAÇÃO TÉCNICA</h5>
                    </div>
                    <span className="text-[12.5px] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                      Empresas, sistemas fiscais e meios de pagamento precisam ser adaptados para identificar corretamente CBS e IBS e permitir a segregação dos valores.
                    </span>
                    <div className="mt-auto pt-2">
                      <span className="inline-block bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                        Preparar tecnologia e processos.
                      </span>
                    </div>
                  </div>
                  
                  {/* Seta visível apenas no desktop */}
                  <div className="hidden md:flex items-center justify-center shrink-0 w-3">
                    <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                  </div>

                  {/* Seta visível apenas no mobile */}
                  <div className="flex md:hidden items-center justify-center shrink-0 h-3">
                    <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 rotate-90" />
                  </div>

                  {/* Etapa 2 */}
                  <div className="flex-1 bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <h5 className="text-[12px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">INÍCIO DA IMPLEMENTAÇÃO</h5>
                    </div>
                    <span className="text-[12.5px] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                      O mecanismo passa a ser incorporado às operações conforme a regulamentação, a infraestrutura tecnológica e as modalidades previstas forem sendo disponibilizadas.
                    </span>
                    <div className="mt-auto pt-2">
                      <span className="inline-block bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                        Entrada gradual na operação.
                      </span>
                    </div>
                  </div>

                  {/* Seta visível apenas no desktop */}
                  <div className="hidden md:flex items-center justify-center shrink-0 w-3">
                    <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                  </div>
                  
                  {/* Seta visível apenas no mobile */}
                  <div className="flex md:hidden items-center justify-center shrink-0 h-3">
                    <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 rotate-90" />
                  </div>

                  {/* Etapa 3 */}
                  <div className="flex-1 bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <h5 className="text-[12px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">EXPANSÃO DO MODELO</h5>
                    </div>
                    <span className="text-[12.5px] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                      A utilização tende a aumentar à medida que o novo sistema tributário avança e mais operações e meios de pagamento passam a suportar o mecanismo.
                    </span>
                    <div className="mt-auto pt-2">
                      <span className="inline-block bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                        Ampliação progressiva do uso.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-1 bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/60 rounded-xl px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                  <div className="bg-slate-200 dark:bg-slate-700 px-2.5 py-1 rounded text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest shrink-0">
                    O QUE A EMPRESA DEVE ACOMPANHAR
                  </div>
                  <span className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                    Cronograma oficial, especificações técnicas, integração com meios de pagamento e regras aplicáveis a cada modalidade de implementação.
                  </span>
                </div>
              </div>


              {/* BLOCO 06 — O QUE A EMPRESA PRECISA PREPARAR? */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    <h4 className="text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wide">
                      06. O QUE A EMPRESA PRECISA PREPARAR?
                    </h4>
                  </div>
                </div>
                <span className="text-[13px] text-slate-600 dark:text-slate-400 font-medium leading-snug">
                  O Split Payment exige coordenação entre sistemas, financeiro, fiscal e processos internos para que venda, pagamento, recebimento e recolhimento permaneçam conciliados.
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                  {/* Card 1 - Sistemas */}
                  <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                        <Monitor className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h5 className="text-[13px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">SISTEMAS</h5>
                    </div>
                    <span className="text-[12.5px] text-slate-600 dark:text-slate-300 font-bold block border-b border-slate-200 dark:border-slate-700/80 pb-2.5 mb-3 leading-snug">
                      ERP, emissão fiscal e meios de pagamento precisam reconhecer a mesma operação.
                    </span>
                    <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Integração:</strong> conectar informações de venda, documento fiscal, pagamento e segregação.</span>
                      </li>
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Parametrização:</strong> garantir que os sistemas identifiquem corretamente os valores de CBS/IBS e o valor recebido.</span>
                      </li>
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Testes:</strong> validar se as informações circulam corretamente antes da entrada efetiva do mecanismo.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card 2 - Financeiro */}
                  <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                        <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                      </div>
                      <h5 className="text-[13px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">FINANCEIRO</h5>
                    </div>
                    <span className="text-[12.5px] text-slate-600 dark:text-slate-300 font-bold block border-b border-slate-200 dark:border-slate-700/80 pb-2.5 mb-3 leading-snug">
                      Os controles precisam diferenciar o valor pago pelo cliente do valor efetivamente recebido pela empresa.
                    </span>
                    <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Conciliação:</strong> conferir venda, pagamento, valor líquido recebido e tributo separado.</span>
                      </li>
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Contas a receber:</strong> ajustar a baixa dos títulos quando parte do pagamento seguir diretamente para o recolhimento.</span>
                      </li>
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Caixa:</strong> acompanhar como a segregação interfere no valor disponível para as operações do dia a dia.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card 3 - Fiscal / Tributário */}
                  <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                        <FileText className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                      </div>
                      <h5 className="text-[13px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">FISCAL / TRIBUTÁRIO</h5>
                    </div>
                    <span className="text-[12.5px] text-slate-600 dark:text-slate-300 font-bold block border-b border-slate-200 dark:border-slate-700/80 pb-2.5 mb-3 leading-snug">
                      A empresa precisa acompanhar o que foi segregado, recolhido e considerado na apuração.
                    </span>
                    <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Recolhimento:</strong> identificar quais valores de CBS/IBS já foram direcionados em cada operação.</span>
                      </li>
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Apuração:</strong> conferir se os valores segregados estão coerentes com os documentos fiscais.</span>
                      </li>
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Créditos:</strong> acompanhar corretamente os créditos vinculados às operações.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card 4 - Processos & Responsáveis */}
                  <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                        <Users className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                      </div>
                      <h5 className="text-[13px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">PROCESSOS & RESPONSÁVEIS</h5>
                    </div>
                    <span className="text-[12.5px] text-slate-600 dark:text-slate-300 font-bold block border-b border-slate-200 dark:border-slate-700/80 pb-2.5 mb-3 leading-snug">
                      Fiscal, Financeiro, TI e Contabilidade precisam atuar de forma coordenada.
                    </span>
                    <ul className="flex flex-col gap-3 text-[12.5px] text-slate-700 dark:text-slate-300 font-medium">
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Responsabilidades:</strong> definir quem acompanha cada etapa da operação.</span>
                      </li>
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Tratamento de divergências:</strong> estabelecer como corrigir diferenças entre venda, pagamento, recebimento e tributo segregado.</span>
                      </li>
                      <li className="flex items-start gap-2 leading-snug">
                        <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[3px] shrink-0" />
                        <span><strong className="font-bold text-slate-900 dark:text-slate-100">Governança:</strong> criar rotinas de conferência e acompanhamento da implementação.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-1 bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40 rounded-xl px-4 py-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                  <div className="bg-indigo-100 dark:bg-indigo-800/60 px-2.5 py-1 rounded text-[10px] font-black text-indigo-700 dark:text-indigo-300 uppercase tracking-widest shrink-0">
                    LEITURA EXECUTIVA
                  </div>
                  <p className="text-[12.5px] font-medium text-slate-700 dark:text-slate-300 leading-snug">
                    O principal desafio do Split Payment não é apenas calcular o tributo. É garantir que <strong className="font-bold text-slate-900 dark:text-slate-100">venda</strong>, <strong className="font-bold text-slate-900 dark:text-slate-100">documento fiscal</strong>, <strong className="font-bold text-slate-900 dark:text-slate-100">pagamento</strong>, <strong className="font-bold text-slate-900 dark:text-slate-100">recebimento</strong>, <strong className="font-bold text-slate-900 dark:text-slate-100">recolhimento</strong> e <strong className="font-bold text-slate-900 dark:text-slate-100">conciliação</strong> estejam conectados dentro da mesma operação.
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
                O Split Payment conecta o recolhimento tributário ao fluxo financeiro da operação. Para funcionar corretamente, empresas precisarão alinhar sistemas, processos, controles financeiros e acompanhamento fiscal.
              </p>
            </div>\n"""

content = content[:start_idx] + new_content + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

