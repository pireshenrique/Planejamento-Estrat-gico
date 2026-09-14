import re

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("currentGen.theme.text.split(' ')[0].replace('text-', 'bg-')", "currentGen.theme.topBar")
content = content.replace("${currentGen.theme.text}", "text-slate-800 dark:text-slate-200")

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed!")
