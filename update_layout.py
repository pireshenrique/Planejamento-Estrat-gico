import re

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make sure we only affect the section from "6. LEITURA GERACIONAL DO CONSUMO" to "BLOCO 2: MICROGERAÇÕES"
start_marker = "{/* 6. LEITURA GERACIONAL DO CONSUMO */}"
end_marker = "{/* BLOCO 2: MICROGERAÇÕES E TRANSIÇÕES DE CONSUMO */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found!")
    exit(1)

section = content[start_idx:end_idx]

# 1. NAVEGAÇÃO DAS GERAÇÕES
section = section.replace('className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4"', 'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3"')
section = section.replace('className={`relative flex items-center gap-3 p-3 sm:p-3.5', 'className={`relative flex items-center gap-2.5 p-2 sm:p-2.5')
section = section.replace('className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg', 'className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md')
section = section.replace('className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected', 'className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected')
section = section.replace('className="flex flex-col mt-0.5"', 'className="flex flex-col"')
section = section.replace('className="flex items-baseline gap-1.5 flex-wrap"', 'className="flex items-baseline gap-1 flex-wrap"')
section = section.replace('absolute top-3 right-3 shadow-sm', 'absolute top-2 right-2 shadow-sm')

# 2. PAINEL DA GERAÇÃO (Main container)
section = section.replace('className="p-5 lg:p-6 flex flex-col gap-6 lg:gap-7"', 'className="p-4 lg:p-5 flex flex-col gap-4 lg:gap-5"')

# 3. CABEÇALHO DA GERAÇÃO
section = section.replace('className="flex flex-col gap-4"', 'className="flex flex-col gap-3"')
section = section.replace('className="flex gap-4 items-start"', 'className="flex gap-3 items-start"')
section = section.replace('w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-sm', 'w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 shadow-sm')
section = section.replace('className={`w-6 h-6', 'className={`w-5 h-5')
section = section.replace('className="flex items-center gap-2.5 flex-wrap"', 'className="flex items-center gap-2 flex-wrap"')
section = section.replace('leading-relaxed mt-2', 'leading-relaxed mt-1')

# 4. O QUE MOLDOU
section = section.replace('className="pl-4 py-1.5 border-l-2', 'className="pl-4 py-1 border-l-2')
section = section.replace('flex-col gap-1 mt-1"', 'flex-col gap-0 mt-0.5"')

# 5. RESUMO EXECUTIVO (3 COLUNAS)
section = section.replace('className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0', 'className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0')
section = section.replace('className="flex flex-col md:pr-6 gap-1"', 'className="flex flex-col md:pr-4 gap-0.5"')
section = section.replace('className="flex flex-col md:px-6 gap-1"', 'className="flex flex-col md:px-4 gap-0.5"')
section = section.replace('className="flex flex-col md:pl-6 gap-1"', 'className="flex flex-col md:pl-4 gap-0.5"')
section = section.replace('className="flex items-center gap-1.5"', 'className="flex items-center gap-1"')

# 6. CONTEÚDO PRINCIPAL (Grid & Esquerda)
section = section.replace('className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 border-t border-slate-100 dark:border-slate-800/80 pt-6 lg:pt-7"', 'className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 border-t border-slate-100 dark:border-slate-800/80 pt-4 lg:pt-5"')
section = section.replace('className="lg:col-span-7 flex flex-col gap-5"', 'className="lg:col-span-7 flex flex-col gap-3"')
section = section.replace('className="flex flex-col gap-4"', 'className="flex flex-col gap-2.5"')
section = section.replace('className="flex flex-col gap-1"', 'className="flex flex-col gap-0.5"') # Also hits Como Atuar

# 7. DIREITA: COMO ATUAR
section = section.replace('className="lg:col-span-5 bg-slate-50/80 dark:bg-slate-800/30 rounded-xl p-5 border border-slate-100 dark:border-slate-800/80 flex flex-col gap-5"', 'className="lg:col-span-5 bg-slate-50/80 dark:bg-slate-800/30 rounded-xl p-4 border border-slate-100 dark:border-slate-800/80 flex flex-col gap-3"')
section = section.replace('className="flex flex-col gap-1.5"', 'className="flex flex-col gap-1"')
section = section.replace('gap-1 pl-5.5"', 'gap-0.5 pl-4"')

# 8. TENDÊNCIAS E PALAVRAS-CHAVE
section = section.replace('className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6"', 'className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4"')
section = section.replace('className="flex items-center gap-3"', 'className="flex items-center gap-2"')
section = section.replace('className="flex flex-wrap gap-1.5"', 'className="flex flex-wrap gap-1"')

# Note: We need to be careful with 'flex-col gap-4' and 'flex-col gap-1' as they might be replaced multiple times.
# 'flex-col gap-1' replacement is fine because both left and right columns have it and we want them tighter.

content = content[:start_idx] + section + content[end_idx:]

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Changes applied!")
