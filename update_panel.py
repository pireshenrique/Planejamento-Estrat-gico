import re

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{/* PAINEL DA GERAÇÃO */}"
end_marker = "            {/* SEPARADOR */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx == -1 or end_idx == -1:
    print("Markers not found!")
    exit(1)

new_panel = """{/* PAINEL DA GERAÇÃO */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 flex flex-col shadow-sm animate-in fade-in duration-300 overflow-hidden">
                <div className={`h-1 w-full ${currentGen.theme.topBar}`} />
                <div className="flex flex-col">
                  
                  {/* CABEÇALHO DA GERAÇÃO & ASSINATURA */}
                  <div className="p-5 lg:p-6 flex flex-col gap-4 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 shadow-sm ${currentGen.theme.headerIconBox}`}>
                          <CurrentGenIcon className={`w-5 h-5 ${currentGen.theme.headerIcon}`} />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-none tracking-tight">
                              {currentGen.name}
                            </h3>
                            <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                              {currentGen.period}
                            </span>
                            {currentGen.isForming && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                                Em formação
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* SÍNTESE - PONTO FOCAL */}
                    <h2 className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-snug">
                      "{currentGen.assinaturaCurta}"
                    </h2>
                  </div>

                  {/* O QUE MOLDOU (CONTEXTO FORMADOR) */}
                  <div className="px-5 lg:px-6 py-4 bg-slate-100/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-col gap-1.5 border-l-2 border-slate-300 dark:border-slate-600 pl-4">
                      <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Contexto Formador
                      </h5>
                      <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                        {currentGen.oQueMoldou}
                      </p>
                    </div>
                  </div>

                  {/* SÍNTESE EXECUTIVA (3 COLUNAS) */}
                  <div className="px-5 lg:px-6 py-5 border-b border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/80">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800/80">
                      <div className="flex flex-col md:pr-4 gap-1.5 pt-4 md:pt-0 first:pt-0">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Valoriza
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-900 dark:text-slate-100 font-semibold leading-snug">
                          {currentGen.leituraRapida.valoriza}
                        </p>
                      </div>
                      <div className="flex flex-col md:px-4 gap-1.5 pt-4 md:pt-0">
                        <div className="flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Decisão de Consumo
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-900 dark:text-slate-100 font-semibold leading-snug">
                          {currentGen.leituraRapida.comoTendeAConsumir}
                        </p>
                      </div>
                      <div className="flex flex-col md:pl-4 gap-1.5 pt-4 md:pt-0">
                        <div className="flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Relação com Tecnologia
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-900 dark:text-slate-100 font-semibold leading-snug">
                          {currentGen.leituraRapida.relacaoTecnologia}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CONTEÚDO PRINCIPAL (Perfil vs Atuação) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800/80">
                    
                    {/* ESQUERDA: PERFIL DE CONSUMO (Analítico) */}
                    <div className="p-5 lg:p-6 flex flex-col gap-5 bg-white dark:bg-slate-900/80">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                          Análise de Perfil
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          Entendimento do comportamento base
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <h5 className="text-[12px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            Comportamento Base
                          </h5>
                          <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                            {currentGen.perfilEConsumo.prioridadesComportamento}
                          </p>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                          <h5 className="text-[12px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            Marcas & Canais
                          </h5>
                          <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                            {currentGen.perfilEConsumo.marcasCanaisExperiencia}
                          </p>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                          <h5 className="text-[12px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            Valores & Sustentabilidade
                          </h5>
                          <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                            {currentGen.perfilEConsumo.sustentabilidadeValores}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* DIREITA: COMO ATUAR (Prático) */}
                    <div className="p-5 lg:p-6 flex flex-col gap-5 bg-slate-50/50 dark:bg-slate-800/30">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${currentGen.theme.text.split(' ')[0].replace('text-', 'bg-')}`} />
                          Diretrizes de Atuação
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          Ações recomendadas baseadas no perfil
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                          <h5 className={`text-[12px] font-bold uppercase tracking-wide ${currentGen.theme.text} flex items-center gap-1.5`}>
                            <Package className="w-3.5 h-3.5" />
                            Produto
                          </h5>
                          <ul className="flex flex-col gap-1.5">
                            {currentGen.comoAtuar.produtoEProposta.map((p, idx) => (
                              <li key={idx} className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                          <h5 className={`text-[12px] font-bold uppercase tracking-wide ${currentGen.theme.text} flex items-center gap-1.5`}>
                            <Megaphone className="w-3.5 h-3.5" />
                            Comunicação
                          </h5>
                          <ul className="flex flex-col gap-1.5">
                            {currentGen.comoAtuar.comunicacao.map((c, idx) => (
                              <li key={idx} className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                          <h5 className={`text-[12px] font-bold uppercase tracking-wide ${currentGen.theme.text} flex items-center gap-1.5`}>
                            <Globe className="w-3.5 h-3.5" />
                            Experiência
                          </h5>
                          <ul className="flex flex-col gap-1.5">
                            {currentGen.comoAtuar.canaisEExperiencia.map((e, idx) => (
                              <li key={idx} className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                                <span>{e}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TENDÊNCIAS E PALAVRAS-CHAVE (Rodapé Executivo) */}
                  <div className="px-5 lg:px-6 py-4 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col gap-2 md:w-1/2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Macrotendências
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentGen.tendencias.map((item, idx) => (
                          <span key={idx} className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-slate-200 dark:bg-slate-700 shrink-0" />
                    <div className="flex flex-col gap-2 md:w-1/2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Palavras-chave
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentGen.palavrasChave.map((tag, idx) => (
                          <span key={idx} className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            #{tag.toLowerCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
"""

content = content[:start_idx] + new_panel + "\n" + content[end_idx:]

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Panel updated successfully!")
