import re

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target_start = "{/* BARRA DE NAVEGAÇÃO DAS GERAÇÕES */}"
target_end = "{/* SEPARADOR */}"

start_idx = content.find(target_start)
end_idx = content.find(target_end, start_idx)

if start_idx == -1 or end_idx == -1:
    print("Could not find targets")
    exit(1)

new_block = """{/* BARRA DE NAVEGAÇÃO DAS GERAÇÕES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
                {GERACOES_DATA.map((gen) => {
                  const isSelected = selectedGeneration === gen.id;
                  const Icon = gen.icon;
                  return (
                    <button
                      key={gen.id}
                      onClick={() => handleSelectGeneration(gen.id)}
                      className={`relative flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden text-left ${
                        isSelected 
                          ? gen.theme.btnActive 
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm hover:-translate-y-0.5'
                      }`}
                    >
                      {!isSelected && (
                        <div className={`absolute top-0 left-0 w-full h-[3px] ${gen.theme.topBar} opacity-70`} />
                      )}
                      
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isSelected ? 'bg-white/20 border-white/20' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'
                      }`}>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                      </div>
                      
                      <div className="flex flex-col mt-0.5">
                        <div className="flex items-baseline gap-1.5 flex-wrap">
                          <span className={`font-bold text-[13px] sm:text-[14px] leading-tight ${isSelected ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                            {gen.name}
                          </span>
                        </div>
                        <span className={`text-[11px] sm:text-[11px] font-medium mt-0.5 ${isSelected ? 'text-white/80' : 'text-slate-500 dark:text-slate-500'}`}>
                          {gen.period}
                        </span>
                      </div>

                      {gen.isForming && !isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-3 right-3 shadow-sm" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* PAINEL DA GERAÇÃO */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 flex flex-col shadow-sm animate-in fade-in duration-300 overflow-hidden">
                <div className={`h-1 w-full ${currentGen.theme.topBar}`} />

                <div className="p-5 lg:p-6 flex flex-col gap-6 lg:gap-7">
                  
                  {/* CABEÇALHO DA GERAÇÃO */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-start">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-sm ${currentGen.theme.headerIconBox}`}>
                        <CurrentGenIcon className={`w-6 h-6 ${currentGen.theme.headerIcon}`} />
                      </div>
                      <div className="flex flex-col mt-0.5">
                        <div className="flex items-center gap-2.5 flex-wrap">
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
                        <p className="text-[14px] sm:text-[15px] text-slate-600 dark:text-slate-300 font-medium leading-relaxed mt-2">
                          {currentGen.assinaturaCurta}
                        </p>
                      </div>
                    </div>

                    {/* O QUE MOLDOU */}
                    <div className="pl-4 py-1.5 border-l-2 border-slate-300 dark:border-slate-700 flex flex-col gap-1 mt-1">
                      <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        O que moldou essa geração
                      </h5>
                      <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                        {currentGen.oQueMoldou}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-800/80" />

                  {/* RESUMO EXECUTIVO (3 COLUNAS) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:divide-x md:divide-slate-200/80 dark:md:divide-slate-800">
                    <div className="flex flex-col md:pr-6 gap-1">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Valoriza
                        </span>
                      </div>
                      <p className="text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-snug">
                        {currentGen.leituraRapida.valoriza}
                      </p>
                    </div>

                    <div className="flex flex-col md:px-6 gap-1">
                      <div className="flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Como Tende a Consumir
                        </span>
                      </div>
                      <p className="text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-snug">
                        {currentGen.leituraRapida.comoTendeAConsumir}
                      </p>
                    </div>

                    <div className="flex flex-col md:pl-6 gap-1">
                      <div className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Relação com Tecnologia
                        </span>
                      </div>
                      <p className="text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-snug">
                        {currentGen.leituraRapida.relacaoTecnologia}
                      </p>
                    </div>
                  </div>

                  {/* CONTEÚDO PRINCIPAL (62/38) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 border-t border-slate-100 dark:border-slate-800/80 pt-6 lg:pt-7">
                    
                    {/* ESQUERDA: PERFIL DE CONSUMO (7/12) */}
                    <div className="lg:col-span-7 flex flex-col gap-5">
                      <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-slate-900 dark:text-white">
                        Perfil de Consumo
                      </h4>

                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <h5 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
                            Prioridades e comportamento
                          </h5>
                          <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                            {currentGen.perfilEConsumo.prioridadesComportamento}
                          </p>
                        </div>
                        
                        <div className="border-t border-slate-100 dark:border-slate-800/60" />

                        <div className="flex flex-col gap-1">
                          <h5 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
                            Marcas, canais e experiência
                          </h5>
                          <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                            {currentGen.perfilEConsumo.marcasCanaisExperiencia}
                          </p>
                        </div>

                        <div className="border-t border-slate-100 dark:border-slate-800/60" />

                        <div className="flex flex-col gap-1">
                          <h5 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">
                            Sustentabilidade e valores
                          </h5>
                          <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                            {currentGen.perfilEConsumo.sustentabilidadeValores}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* DIREITA: COMO ATUAR (5/12) */}
                    <div className="lg:col-span-5 bg-slate-50/80 dark:bg-slate-800/30 rounded-xl p-5 border border-slate-100 dark:border-slate-800/80 flex flex-col gap-5">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[13px] font-extrabold uppercase tracking-widest text-slate-900 dark:text-white">
                          Como Atuar
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                          Orientações derivadas do relatório
                        </span>
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                          <h5 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <Package className={`w-4 h-4 ${currentGen.theme.accentIcon}`} />
                            Produto e proposta
                          </h5>
                          <ul className="flex flex-col gap-1 pl-5.5">
                            {currentGen.comoAtuar.produtoEProposta.map((p, idx) => (
                              <li key={idx} className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed list-disc">
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <h5 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <Megaphone className={`w-4 h-4 ${currentGen.theme.accentIcon}`} />
                            Comunicação
                          </h5>
                          <ul className="flex flex-col gap-1 pl-5.5">
                            {currentGen.comoAtuar.comunicacao.map((c, idx) => (
                              <li key={idx} className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed list-disc">
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <h5 className="text-[13px] font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            <Globe className={`w-4 h-4 ${currentGen.theme.accentIcon}`} />
                            Canais e experiência
                          </h5>
                          <ul className="flex flex-col gap-1 pl-5.5">
                            {currentGen.comoAtuar.canaisEExperiencia.map((e, idx) => (
                              <li key={idx} className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed list-disc">
                                {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-800/80" />

                  {/* TENDÊNCIAS E PALAVRAS-CHAVE */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
                        Tendências
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentGen.tendencias.map((item, idx) => (
                          <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="hidden lg:block w-px h-4 bg-slate-200 dark:bg-slate-700 shrink-0" />
                    
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
                        Palavras-chave
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentGen.palavrasChave.map((tag, idx) => (
                          <span key={idx} className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated successfully")
