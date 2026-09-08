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
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col gap-5">
              
              {/* CABEÇALHO */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center shrink-0">
                    <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <h4 className="text-[17px] sm:text-[19px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      02. COMO A OPERAÇÃO ACONTECE NA PRÁTICA?
                    </h4>
                    <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      Da venda ao recebimento: veja como documento fiscal, pagamento, segregação e conciliação se conectam dentro da operação.
                    </p>
                  </div>
                </div>
                <hr className="border-slate-100 dark:border-slate-800" />
              </div>

              {/* FLUXOGRAMA COMPLETO */}
              <div className="flex flex-col gap-4">
                
                {/* MACROFASES (LINHAS) */}
                <div className="hidden xl:flex w-full gap-5">
                  {/* FASE A */}
                  <div className="flex-[2] flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                    <div className="h-px bg-blue-600 w-4 shrink-0"></div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-2.5 whitespace-nowrap">FASE A — ORIGEM DA OPERAÇÃO</span>
                    <div className="h-px bg-blue-600 flex-1"></div>
                  </div>
                  {/* FASE B */}
                  <div className="flex-[2] flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></div>
                    <div className="h-px bg-indigo-600 w-4 shrink-0"></div>
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest px-2.5 whitespace-nowrap">FASE B — PROCESSAMENTO</span>
                    <div className="h-px bg-indigo-600 flex-1"></div>
                  </div>
                  {/* FASE C */}
                  <div className="flex-[2.2] flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                    <div className="h-px bg-teal-500 w-4 shrink-0"></div>
                    <span className="text-[10px] font-bold text-teal-600 dark:text-teal-500 uppercase tracking-widest px-2.5 whitespace-nowrap">FASE C — FINALIZAÇÃO</span>
                    <div className="h-px bg-teal-500 flex-1"></div>
                  </div>
                </div>

                {/* CARDS DO FLUXO */}
                <div className="flex flex-col xl:flex-row items-center xl:items-stretch gap-3 xl:gap-2 w-full relative">
                  
                  {/* FASE A MOBILE HEADER */}
                  <div className="flex xl:hidden w-full items-center mb-[-4px] mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                    <div className="h-px bg-blue-600 w-4 shrink-0"></div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-2">FASE A — ORIGEM</span>
                    <div className="h-px bg-blue-600 flex-1"></div>
                  </div>

                  {/* 1. OPERAÇÃO */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center justify-start text-center shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-2.5 shrink-0">1</div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-2.5 shrink-0">
                      <Handshake className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </div>
                    <span className="text-[11.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-2 min-h-[28px] flex items-center justify-center">OPERAÇÃO<br/>REALIZADA</span>
                    <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">A empresa realiza uma venda ou prestação de serviço.</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0 xl:-mx-1.5 z-10">
                    <div className="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>

                  {/* 2. DOCUMENTO FISCAL */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center justify-start text-center shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-2.5 shrink-0">2</div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-2.5 shrink-0">
                      <FileText className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </div>
                    <span className="text-[11.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-2 min-h-[28px] flex items-center justify-center">DOCUMENTO<br/>FISCAL</span>
                    <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">A operação é registrada e as informações tributárias de CBS e IBS ficam associadas à transação.</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0 xl:-mx-1.5 z-10">
                    <div className="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>

                  {/* FASE B MOBILE HEADER */}
                  <div className="flex xl:hidden w-full items-center mb-[-4px] mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></div>
                    <div className="h-px bg-indigo-600 w-4 shrink-0"></div>
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest px-2">FASE B — PROCESSAMENTO</span>
                    <div className="h-px bg-indigo-600 flex-1"></div>
                  </div>

                  {/* 3. PAGAMENTO */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center justify-start text-center shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-2.5 shrink-0">3</div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-2.5 shrink-0">
                      <CreditCard className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </div>
                    <span className="text-[11.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-2 min-h-[28px] flex items-center justify-center">CLIENTE REALIZA<br/>O PAGAMENTO</span>
                    <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">O pagamento é iniciado pelo meio utilizado na transação.</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0 xl:-mx-1.5 z-10">
                    <div className="w-5 h-5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3 h-3 text-indigo-400" />
                    </div>
                  </div>

                  {/* 4. SEGREGAÇÃO (DESTAQUE) */}
                  <div className="flex-[1.1] w-full bg-white dark:bg-slate-900 border-2 border-indigo-500/60 dark:border-indigo-500 rounded-xl p-4 flex flex-col items-center justify-start text-center shadow-sm shadow-indigo-100/50 dark:shadow-indigo-900/20 relative overflow-hidden">
                    {/* Fundo suave */}
                    <div className="absolute inset-0 bg-indigo-50/30 dark:bg-indigo-900/10 pointer-events-none"></div>
                    
                    <div className="w-7 h-7 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-[13px] font-bold text-white mb-2.5 relative z-10 shrink-0">4</div>
                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-2.5 relative z-10 border border-indigo-200 dark:border-indigo-700 shrink-0">
                      <Filter className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-[12px] font-black text-indigo-800 dark:text-indigo-300 uppercase tracking-wide leading-tight mb-2 min-h-[28px] flex items-center justify-center relative z-10">CBS / IBS SÃO IDENTIFICADOS<br/>E SEGREGADOS</span>
                    <span className="text-[10.5px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed relative z-10">O sistema identifica a parcela tributária e a separa dentro do fluxo financeiro da operação.</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0 xl:-mx-1.5 z-10">
                    <div className="w-5 h-5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3 h-3 text-indigo-400" />
                    </div>
                  </div>

                  {/* FASE C MOBILE HEADER */}
                  <div className="flex xl:hidden w-full items-center mb-[-4px] mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                    <div className="h-px bg-teal-500 w-4 shrink-0"></div>
                    <span className="text-[10px] font-bold text-teal-600 dark:text-teal-500 uppercase tracking-widest px-2">FASE C — FINALIZAÇÃO</span>
                    <div className="h-px bg-teal-500 flex-1"></div>
                  </div>

                  {/* 5. DESTINOS (BIFURCAÇÃO) */}
                  <div className="flex-[1.25] w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-start text-center shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-2 shrink-0">5</div>
                    <span className="text-[11.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-2">OS VALORES SEGUEM<br/>SEUS DESTINOS</span>
                    
                    <div className="w-full flex flex-col relative mt-1 gap-1.5">
                      {/* Conector de bifurcação centralizado */}
                      <div className="absolute left-[14px] top-[18px] bottom-[18px] w-px bg-slate-200 dark:bg-slate-700"></div>
                      
                      {/* Fornecedor */}
                      <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 flex items-start gap-2.5 relative z-10 w-full ml-1">
                        <div className="absolute left-[-5px] top-[16px] w-[5px] h-px bg-slate-200 dark:bg-slate-700"></div>
                        <div className="absolute left-[-5px] top-[16px] w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 -translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                          <UserCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex flex-col text-left pt-0.5">
                          <span className="text-[10px] font-black text-blue-800 dark:text-blue-400 uppercase tracking-wide mb-0.5">FORNECEDOR</span>
                          <span className="text-[9.5px] text-slate-500 dark:text-slate-400 font-medium leading-tight">Recebe o valor correspondente à operação após a segregação.</span>
                        </div>
                      </div>

                      {/* CBS / IBS */}
                      <div className="bg-teal-50/40 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/50 rounded-lg p-2.5 flex items-start gap-2.5 relative z-10 w-full ml-1">
                        <div className="absolute left-[-5px] top-[16px] w-[5px] h-px bg-teal-200 dark:bg-teal-800"></div>
                        <div className="absolute left-[-5px] top-[16px] w-1.5 h-1.5 rounded-full bg-teal-400 dark:bg-teal-600 -translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-800 flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div className="flex flex-col text-left pt-0.5">
                          <span className="text-[10px] font-black text-teal-700 dark:text-teal-400 uppercase tracking-wide mb-0.5">TRIBUTO — CBS / IBS</span>
                          <span className="text-[9.5px] text-teal-700/80 dark:text-teal-400/80 font-medium leading-tight">A parcela tributária segue separada dentro do mecanismo de recolhimento.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center shrink-0 xl:-mx-1.5 z-10">
                    <div className="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center rotate-90 xl:rotate-0">
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>

                  {/* 6. CONCILIAÇÃO */}
                  <div className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center justify-start text-center shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-2.5 shrink-0">6</div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-2.5 shrink-0">
                      <FileCheck className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </div>
                    <span className="text-[11.5px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide leading-tight mb-2 min-h-[28px] flex items-center justify-center">CONCILIAÇÃO<br/>DA OPERAÇÃO</span>
                    <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">A empresa relaciona documento fiscal, pagamento, valor recebido e parcela tributária segregada.</span>
                  </div>

                </div>
              </div>

              {/* CONCLUSÃO BASTIDORES */}
              <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center">
                    <Settings className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-[11.5px] font-black text-blue-800 dark:text-blue-300 uppercase tracking-widest pt-0.5">
                    O QUE ACONTECE NOS BASTIDORES?
                  </span>
                </div>
                <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                <p className="text-[13px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed pt-0.5">
                  Documento fiscal, pagamento e informações tributárias precisam estar conectados para que a segregação ocorra corretamente e a operação possa ser conciliada.
                </p>
              </div>

            </div>

            """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

