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
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-6">
              
              {/* CABEÇALHO */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center shrink-0">
                    <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <h4 className="text-[18px] sm:text-[20px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      02. COMO A OPERAÇÃO ACONTECE NA PRÁTICA?
                    </h4>
                    <p className="text-[14px] sm:text-[15px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Da venda ao recebimento: veja como documento fiscal, pagamento, segregação e conciliação se conectam dentro da operação.
                    </p>
                  </div>
                </div>
                <hr className="border-slate-100 dark:border-slate-800" />
              </div>

              {/* FLUXOGRAMA COMPLETO */}
              <div className="flex flex-col gap-6">
                
                {/* MACROFASES (LINHAS) */}
                <div className="hidden xl:flex w-full gap-8">
                  {/* FASE A */}
                  <div className="flex-[2] flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                    <div className="h-px bg-blue-600 w-6 shrink-0"></div>
                    <span className="text-[10.5px] font-bold text-blue-600 uppercase tracking-widest px-3 whitespace-nowrap">FASE A — ORIGEM DA OPERAÇÃO</span>
                    <div className="h-px bg-blue-600 flex-1"></div>
                  </div>
                  {/* FASE B */}
                  <div className="flex-[2] flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></div>
                    <div className="h-px bg-indigo-600 w-6 shrink-0"></div>
                    <span className="text-[10.5px] font-bold text-indigo-600 uppercase tracking-widest px-3 whitespace-nowrap">FASE B — PROCESSAMENTO</span>
                    <div className="h-px bg-indigo-600 flex-1"></div>
                  </div>
                  {/* FASE C */}
                  <div className="flex-[2.2] flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                    <div className="h-px bg-teal-500 w-6 shrink-0"></div>
                    <span className="text-[10.5px] font-bold text-teal-600 dark:text-teal-500 uppercase tracking-widest px-3 whitespace-nowrap">FASE C — FINALIZAÇÃO</span>
                    <div className="h-px bg-teal-500 flex-1"></div>
                  </div>
                </div>

                {/* CARDS DO FLUXO */}
                <div className="flex flex-col xl:flex-row items-center xl:items-stretch gap-4 xl:gap-3 w-full">
                  
                  {/* FASE A MOBILE HEADER */}
                  <div className="flex xl:hidden w-full items-center mb-[-8px] mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                    <div className="h-px bg-blue-600 w-4 shrink-0"></div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-2">FASE A — ORIGEM</span>
                    <div className="h-px bg-blue-600 flex-1"></div>
                  </div>

                  {/* 1. OPERAÇÃO */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex flex-col items-center text-center shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-4">1</div>
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4">
                      <Handshake className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </div>
                    <span className="text-[12.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-2 min-h-[30px] flex items-center">OPERAÇÃO<br/>REALIZADA</span>
                    <span className="text-[11.5px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">A empresa realiza uma venda ou prestação de serviço.</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0">
                    <div className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* 2. DOCUMENTO FISCAL */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex flex-col items-center text-center shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-4">2</div>
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </div>
                    <span className="text-[12.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-2 min-h-[30px] flex items-center">DOCUMENTO<br/>FISCAL</span>
                    <span className="text-[11.5px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">A operação é registrada e as informações tributárias de CBS e IBS ficam associadas à transação.</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0">
                    <div className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* FASE B MOBILE HEADER */}
                  <div className="flex xl:hidden w-full items-center mb-[-8px] mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></div>
                    <div className="h-px bg-indigo-600 w-4 shrink-0"></div>
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest px-2">FASE B — PROCESSAMENTO</span>
                    <div className="h-px bg-indigo-600 flex-1"></div>
                  </div>

                  {/* 3. PAGAMENTO */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex flex-col items-center text-center shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-4">3</div>
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4">
                      <CreditCard className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </div>
                    <span className="text-[12.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-2 min-h-[30px] flex items-center">CLIENTE REALIZA<br/>O PAGAMENTO</span>
                    <span className="text-[11.5px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">O pagamento é iniciado pelo meio utilizado na transação.</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0">
                    <div className="w-6 h-6 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                  </div>

                  {/* 4. SEGREGAÇÃO (DESTAQUE) */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border-2 border-indigo-500/60 dark:border-indigo-500 rounded-2xl p-5 flex flex-col items-center text-center shadow-md shadow-indigo-100/50 dark:shadow-indigo-900/20 relative overflow-hidden">
                    {/* Fundo suave */}
                    <div className="absolute inset-0 bg-indigo-50/30 dark:bg-indigo-900/10 pointer-events-none"></div>
                    
                    <div className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-[14px] font-bold text-white mb-4 relative z-10">4</div>
                    <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4 relative z-10 border border-indigo-200 dark:border-indigo-700">
                      <Filter className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-[13px] font-black text-indigo-800 dark:text-indigo-300 uppercase tracking-wide leading-tight mb-2 min-h-[30px] flex items-center relative z-10">CBS / IBS SÃO IDENTIFICADOS<br/>E SEGREGADOS</span>
                    <span className="text-[11.5px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed relative z-10">O sistema identifica a parcela tributária e a separa dentro do fluxo financeiro da operação.</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0">
                    <div className="w-6 h-6 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                  </div>

                  {/* FASE C MOBILE HEADER */}
                  <div className="flex xl:hidden w-full items-center mb-[-8px] mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                    <div className="h-px bg-teal-500 w-4 shrink-0"></div>
                    <span className="text-[10px] font-bold text-teal-600 dark:text-teal-500 uppercase tracking-widest px-2">FASE C — FINALIZAÇÃO</span>
                    <div className="h-px bg-teal-500 flex-1"></div>
                  </div>

                  {/* 5. DESTINOS (BIFURCAÇÃO) */}
                  <div className="flex-[1.2] w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex flex-col items-center text-center shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-2">5</div>
                    <span className="text-[11.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-3">OS VALORES SEGUEM<br/>SEUS DESTINOS</span>
                    
                    <div className="w-full flex flex-col relative mt-1 gap-2">
                      {/* Conector de bifurcação */}
                      <div className="absolute left-[16px] top-[24px] bottom-[24px] w-px bg-slate-200 dark:bg-slate-700"></div>
                      
                      {/* Fornecedor */}
                      <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex items-start gap-3 relative z-10 w-full ml-2">
                        <div className="absolute left-[-10px] top-[22px] w-[10px] h-px bg-slate-200 dark:bg-slate-700"></div>
                        <div className="absolute left-[-10px] top-[22px] w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 -translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                          <UserCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex flex-col text-left pt-0.5">
                          <span className="text-[11px] font-black text-blue-800 dark:text-blue-400 uppercase tracking-wide mb-0.5">FORNECEDOR</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">Recebe o valor correspondente à operação após a segregação.</span>
                        </div>
                      </div>

                      {/* CBS / IBS */}
                      <div className="bg-teal-50/40 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/50 rounded-xl p-3 flex items-start gap-3 relative z-10 w-full ml-2">
                        <div className="absolute left-[-10px] top-[22px] w-[10px] h-px bg-teal-200 dark:bg-teal-800"></div>
                        <div className="absolute left-[-10px] top-[22px] w-1.5 h-1.5 rounded-full bg-teal-400 dark:bg-teal-600 -translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-800 flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div className="flex flex-col text-left pt-0.5">
                          <span className="text-[11px] font-black text-teal-700 dark:text-teal-400 uppercase tracking-wide mb-0.5">TRIBUTO — CBS / IBS</span>
                          <span className="text-[10px] text-teal-700/80 dark:text-teal-400/80 font-medium leading-tight">A parcela tributária segue separada dentro do mecanismo de recolhimento.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0">
                    <div className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* 6. CONCILIAÇÃO */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex flex-col items-center text-center shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[14px] font-bold text-slate-500 dark:text-slate-400 mb-4">6</div>
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4">
                      <FileCheck className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </div>
                    <span className="text-[12.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-2 min-h-[30px] flex items-center">CONCILIAÇÃO<br/>DA OPERAÇÃO</span>
                    <span className="text-[11.5px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">A empresa relaciona documento fiscal, pagamento, valor recebido e parcela tributária segregada.</span>
                  </div>

                </div>
              </div>

              {/* CONCLUSÃO BASTIDORES */}
              <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-[12px] font-black text-blue-800 dark:text-blue-300 uppercase tracking-widest">
                    O QUE ACONTECE NOS BASTIDORES?
                  </span>
                </div>
                <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
                <p className="text-[13.5px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                  Documento fiscal, pagamento e informações tributárias precisam estar conectados para que a segregação ocorra corretamente e a operação possa ser conciliada.
                </p>
              </div>

            </div>

            """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

