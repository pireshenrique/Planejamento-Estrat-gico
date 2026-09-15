import fs from 'fs';

const path = 'src/components/cenario-mercadologico/EstruturaFormatosView.tsx';
let content = fs.readFileSync(path, 'utf-8');

const regex = /\{\/\* FAIXA EXECUTIVA \*\/\}[\s\S]*?\{\/\* SEÇÃO EVIDÊNCIAS E FONTES \*\/\}/;

const newBlock = `{/* FAIXA EXECUTIVA */}
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-700">
              {/* INSIGHT 1 */}
              <div className="flex flex-col flex-1 pt-1 sm:pt-0 sm:pl-2 first:pt-0 first:pl-0">
                <span className="text-[28px] sm:text-[32px] font-black text-slate-900 dark:text-white leading-none">45,7%</span>
                <span className="text-[13px] sm:text-[14px] font-bold text-slate-800 dark:text-slate-200 mt-1">das lojas estão no Sudeste em 2025</span>
                <span className="text-[12.5px] sm:text-[13.5px] text-slate-500 dark:text-slate-400 mt-0.5">a região ainda concentra quase metade da rede</span>
              </div>
              {/* INSIGHT 2 */}
              <div className="flex flex-col flex-1 pt-3 sm:pt-0 sm:pl-4">
                <span className="text-[28px] sm:text-[32px] font-black text-indigo-600 dark:text-indigo-400 leading-none">+6,8 p.p.</span>
                <span className="text-[13px] sm:text-[14px] font-bold text-slate-800 dark:text-slate-200 mt-1">ganho conjunto de Norte + Nordeste + Centro-Oeste desde 2006</span>
                <span className="text-[12.5px] sm:text-[13.5px] text-slate-500 dark:text-slate-400 mt-0.5">29,0% &rarr; 35,8%</span>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-slate-700 dark:text-slate-300 font-medium leading-relaxed border-t border-slate-200 dark:border-slate-700 pt-2.5 mt-1">
              O Sudeste continua liderando, mas sua participação relativa diminuiu enquanto Norte, Nordeste e Centro-Oeste ganharam espaço na composição da rede.
            </p>
          </div>

          {/* GRÁFICO REGIONAL */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3">
              <div className="flex flex-col gap-0.5">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  EVOLUÇÃO REGIONAL DA REDE &middot; 2006 &rarr; 2025
                </h4>
                <span className="text-[12.5px] sm:text-[13.5px] text-slate-500 dark:text-slate-400">
                  Participação de cada região no universo de lojas do setor
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] sm:text-[12px] font-medium text-slate-500 pb-0.5">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-slate-200 dark:bg-slate-700"></div>2006</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-indigo-500"></div>2025</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 w-full">
              {/* SUDESTE */}
              <div className="flex items-center h-[34px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Sudeste</span>
                <div className="flex-1 flex flex-col justify-center gap-1 mx-4 sm:mx-6 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '80%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">50,3%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '72.68%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">45,7%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-slate-500 dark:text-slate-400">-4,6 p.p.</span>
              </div>

              {/* SUL */}
              <div className="flex items-center h-[34px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Sul</span>
                <div className="flex-1 flex flex-col justify-center gap-1 mx-4 sm:mx-6 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '33.08%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">20,8%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '29.58%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">18,6%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-slate-500 dark:text-slate-400">-2,2 p.p.</span>
              </div>

              {/* NORDESTE */}
              <div className="flex items-center h-[34px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Nordeste</span>
                <div className="flex-1 flex flex-col justify-center gap-1 mx-4 sm:mx-6 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '27.19%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">17,1%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '31.80%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">20,0%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-indigo-600 dark:text-indigo-400">+2,9 p.p.</span>
              </div>

              {/* CENTRO-OESTE */}
              <div className="flex items-center h-[34px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Centro-Oeste</span>
                <div className="flex-1 flex flex-col justify-center gap-1 mx-4 sm:mx-6 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '12.56%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">7,9%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '15.58%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">9,8%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-indigo-600 dark:text-indigo-400">+1,9 p.p.</span>
              </div>

              {/* NORTE */}
              <div className="flex items-center h-[34px]">
                <span className="w-[85px] shrink-0 text-[13.5px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-300 text-right">Norte</span>
                <div className="flex-1 flex flex-col justify-center gap-1 mx-4 sm:mx-6 h-full">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-r-sm" style={{ width: '6.36%' }}></div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 leading-none">4,0%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-indigo-500 rounded-r-sm" style={{ width: '9.54%' }}></div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-indigo-700 dark:text-indigo-400 leading-none">6,0%</span>
                  </div>
                </div>
                <span className="w-[65px] shrink-0 text-right text-[13.5px] sm:text-[14px] font-bold text-indigo-600 dark:text-indigo-400">+2,0 p.p.</span>
              </div>
            </div>
            
            <p className="text-[13px] sm:text-[14px] text-slate-700 dark:text-slate-300 font-medium leading-relaxed mt-3 border-t border-slate-100 dark:border-slate-800 pt-2.5">
              Entre 2006 e 2025, Sudeste e Sul perderam participação relativa, enquanto Nordeste, Norte e Centro-Oeste ampliaram sua presença na composição da rede.
            </p>
          </div>

          {/* PERFIL DA REDE (FAIXA) */}
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl p-3 flex flex-col gap-1.5">
            <h4 className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              PERFIL DA REDE
            </h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-700">
              <div className="flex items-center gap-2 pt-1 sm:pt-0">
                <span className="text-[18px] sm:text-[20px] font-black text-slate-900 dark:text-white leading-none">69,5%</span>
                <span className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-snug">das lojas têm até 4 funcionários</span>
              </div>
              <div className="flex items-center gap-2 pt-1.5 sm:pt-0 sm:pl-4">
                <span className="text-[18px] sm:text-[20px] font-black text-slate-900 dark:text-white leading-none">5,03</span>
                <span className="text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-snug">funcionários por loja, em média</span>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-slate-600 dark:text-slate-400 font-medium leading-snug mt-1 border-t border-slate-200/60 dark:border-slate-700/60 pt-2">
              A redistribuição regional ocorre em uma estrutura varejista predominantemente formada por pequenas operações.
            </p>
          </div>

          {/* SÍNTESE FINAL DA SEÇÃO 02 */}
          <div className="border-l-[3px] border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20 rounded-r-lg px-3 py-2 sm:px-4 sm:py-2.5 mt-0.5">
            <p className="text-[13px] sm:text-[14px] font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              A rede permanece concentrada no Sudeste, mas sua distribuição regional tornou-se menos concentrada entre 2006 e 2025, com avanço de Nordeste, Norte e Centro-Oeste.
            </p>
          </div>

        </div>

        {/* Nota Metodológica do Bloco 02 */}
        <div className="text-[11.5px] sm:text-[12px] text-slate-400 dark:text-slate-500 leading-relaxed max-w-5xl mt-1">
          Nota metodológica: os dados regionais comparam 2006 e 2025 no levantamento Anamaco/RAIS. O agregado Norte + Nordeste + Centro-Oeste foi calculado a partir dos percentuais regionais divulgados pela Anamaco. Os dados não devem ser comparados diretamente às unidades locais da PAC/IBGE 2024 do Bloco 01.
        </div>
      </section>

      {/* SEÇÃO EVIDÊNCIAS E FONTES */}`;

content = content.replace(regex, newBlock);

fs.writeFileSync(path, content);
