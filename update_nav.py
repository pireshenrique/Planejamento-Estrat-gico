import re

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target_start = "{/* BARRA DE NAVEGAÇÃO DAS GERAÇÕES */}"
target_end = "{/* PAINEL DA GERAÇÃO */}"

start_idx = content.find(target_start)
end_idx = content.find(target_end)

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
                      className={`relative flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden text-left ${
                        isSelected 
                          ? gen.theme.btnActive 
                          : `bg-white dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/80 ${gen.theme.btnHoverBorder} hover:shadow-md hover:-translate-y-0.5`
                      }`}
                    >
                      {!isSelected && (
                        <div className={`absolute top-0 left-0 w-full h-[3.5px] ${gen.theme.topBar}`} />
                      )}
                      
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isSelected ? 'bg-white/20 border-white/20' : gen.theme.headerIconBox
                      }`}>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? 'text-white' : gen.theme.headerIcon}`} />
                      </div>
                      
                      <div className="flex flex-col mt-0.5">
                        <span className={`font-bold text-[13px] sm:text-[14px] leading-tight ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                          {gen.name}
                        </span>
                        <span className={`text-[11px] sm:text-[12px] font-medium mt-0.5 ${isSelected ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                          {gen.period}
                        </span>
                      </div>

                      {gen.isForming && !isSelected && (
                        <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-2.5 right-2.5 shadow-sm" />
                      )}
                    </button>
                  );
                })}
              </div>

              """

content = content[:start_idx] + new_block + content[end_idx:]

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated successfully")
