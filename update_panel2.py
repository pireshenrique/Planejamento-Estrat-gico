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
                  
                  {/* CABEÇALHO DA GERAÇÃO & CONTEXTO */}
                  <div className="px-5 lg:px-6 pt-5 pb-4 flex flex-col gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className={`w-8 h-8 rounded border flex items-center justify-center shrink-0 shadow-sm ${currentGen.theme.headerIconBox}`}>
                        <CurrentGenIcon className={`w-4 h-4 ${currentGen.theme.headerIcon}`} />
                      </div>
                      <h3 className="text-[20px] sm:text-[22px] font-bold text-slate-900 dark:text-white leading-none tracking-tight">
                        {currentGen.name}
                      </h3>
                      <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400">
                        · {currentGen.period}
                      </span>
                      <span className="hidden sm:inline text-[14px] font-medium text-slate-500 dark:text-slate-400">
                        —
                      </span>
                      <span className="text-[14px] font-medium text-slate-700 dark:text-slate-300">
                        {currentGen.assinaturaCurta}
                      </span>
                      {currentGen.isForming && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 ml-2">
                          Perfil em formação
                        </span>
                      )}
                    </div>

                    {/* CONTEXTO FORMADOR */}
                    <div className="flex flex-col gap-1 mt-1 border-l-2 border-slate-200 dark:border-slate-700 pl-3">
                      <span className="text-[12px] font-semibold text-slate-600 dark:text-slate-400">O que moldou</span>
                      <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                        {currentGen.oQueMoldou}
                      </p>
                    </div>
                  </div>

                  {/* RESUMO EXECUTIVO (3 colunas, faixa compacta) */}
                  <div className="px-5 lg:px-6 py-3 border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
                      <div className="flex flex-col gap-0.5 md:pr-4 pt-2 md:pt-0 first:pt-0">
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Valoriza</span>
                        <span className="text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-snug">{currentGen.leituraRapida.valoriza}</span>
                      </div>
                      <div className="flex flex-col gap-0.5 md:px-4 pt-2 md:pt-0">
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Como decide</span>
                        <span className="text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-snug">{currentGen.leituraRapida.comoTendeAConsumir}</span>
                      </div>
                      <div className="flex flex-col gap-0.5 md:pl-4 pt-2 md:pt-0">
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Tecnologia</span>
                        <span className="text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-snug">{currentGen.leituraRapida.relacaoTecnologia}</span>
                      </div>
                    </div>
                  </div>

                  {/* MATRIZ: O QUE OBSERVAMOS -> COMO ATUAR */}
                  <div className="flex flex-col">
                    {/* Cabeçalho da Matriz */}
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
                      <div className="px-5 lg:px-6 py-2 bg-white dark:bg-slate-900/80">
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">O que observamos</span>
                      </div>
                      <div className="px-5 lg:px-6 py-2 bg-slate-50/50 dark:bg-slate-800/30">
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Como atuar</span>
                      </div>
                    </div>

                    {/* Linha 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
                      <div className="px-5 lg:px-6 py-4 flex flex-col gap-1.5 bg-white dark:bg-slate-900/80">
                        <h5 className="text-[13px] font-semibold text-slate-900 dark:text-slate-100">Prioridades e comportamento</h5>
                        <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          {currentGen.perfilEConsumo.prioridadesComportamento}
                        </p>
                      </div>
                      <div className="px-5 lg:px-6 py-4 flex flex-col gap-1.5 bg-slate-50/30 dark:bg-slate-800/20 relative">
                        <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full items-center justify-center shadow-sm z-10">
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </div>
                        <h5 className="text-[13px] font-semibold text-slate-900 dark:text-slate-100">Produto e proposta</h5>
                        <ul className="flex flex-col gap-1">
                          {currentGen.comoAtuar.produtoEProposta.map((p, idx) => (
                            <li key={idx} className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2">
                              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-slate-300 dark:bg-slate-600" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Linha 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
                      <div className="px-5 lg:px-6 py-4 flex flex-col gap-1.5 bg-white dark:bg-slate-900/80">
                        <h5 className="text-[13px] font-semibold text-slate-900 dark:text-slate-100">Marcas, canais e experiência</h5>
                        <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          {currentGen.perfilEConsumo.marcasCanaisExperiencia}
                        </p>
                      </div>
                      <div className="px-5 lg:px-6 py-4 flex flex-col gap-1.5 bg-slate-50/30 dark:bg-slate-800/20 relative">
                        <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full items-center justify-center shadow-sm z-10">
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </div>
                        <h5 className="text-[13px] font-semibold text-slate-900 dark:text-slate-100">Comunicação e relacionamento</h5>
                        <ul className="flex flex-col gap-1">
                          {currentGen.comoAtuar.comunicacao.map((c, idx) => (
                            <li key={idx} className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2">
                              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-slate-300 dark:bg-slate-600" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Linha 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
                      <div className="px-5 lg:px-6 py-4 flex flex-col gap-1.5 bg-white dark:bg-slate-900/80">
                        <h5 className="text-[13px] font-semibold text-slate-900 dark:text-slate-100">Sustentabilidade e valores</h5>
                        <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          {currentGen.perfilEConsumo.sustentabilidadeValores}
                        </p>
                      </div>
                      <div className="px-5 lg:px-6 py-4 flex flex-col gap-1.5 bg-slate-50/30 dark:bg-slate-800/20 relative">
                        <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full items-center justify-center shadow-sm z-10">
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </div>
                        <h5 className="text-[13px] font-semibold text-slate-900 dark:text-slate-100">Experiência e canais</h5>
                        <ul className="flex flex-col gap-1">
                          {currentGen.comoAtuar.canaisEExperiencia.map((e, idx) => (
                            <li key={idx} className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2">
                              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-slate-300 dark:bg-slate-600" />
                              <span>{e}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* TENDÊNCIAS E PALAVRAS-CHAVE (Rodapé Executivo) */}
                  <div className="px-5 lg:px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-semibold text-slate-600 dark:text-slate-400">Tendências</span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentGen.tendencias.map((item, idx) => (
                          <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="hidden md:block w-px h-4 bg-slate-300 dark:bg-slate-600 shrink-0" />
                    
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-semibold text-slate-600 dark:text-slate-400">Palavras-chave</span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {currentGen.palavrasChave.map((tag, idx) => (
                          <span key={idx} className="text-[12px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                            {tag}
                            {idx < currentGen.palavrasChave.length - 1 && (
                              <span className="text-slate-300 dark:text-slate-600">•</span>
                            )}
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
