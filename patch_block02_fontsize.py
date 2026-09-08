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

block_content = content[start_idx:end_idx]

# Replace font sizes to make them bigger
# Phases
block_content = block_content.replace('text-[9.5px] font-bold', 'text-[11px] font-bold')

# Numbers
block_content = block_content.replace('text-[9px] font-bold', 'text-[11px] font-bold')

# Titles
block_content = block_content.replace('text-[10px] font-black', 'text-[11.5px] font-black')
block_content = block_content.replace('text-[10px] font-bold', 'text-[11.5px] font-bold')
block_content = block_content.replace('text-[8.5px] font-black', 'text-[10px] font-black') # Fornecedor / CBS IBS
block_content = block_content.replace('text-[10.5px] font-black text-blue-800', 'text-[11.5px] font-black text-blue-800')

# Descriptions
block_content = block_content.replace('text-[9.5px] text-slate-500', 'text-[10.5px] text-slate-500')
block_content = block_content.replace('text-[9.5px] text-slate-600', 'text-[10.5px] text-slate-600')
block_content = block_content.replace('text-[8.5px] text-slate-500', 'text-[9.5px] text-slate-500')
block_content = block_content.replace('text-[8.5px] text-teal-700', 'text-[9.5px] text-teal-700')

# Description in footer
block_content = block_content.replace('text-[11.5px] font-medium', 'text-[12.5px] font-medium')

# Subtitle
block_content = block_content.replace('text-[13px] sm:text-[13.5px]', 'text-[14px] sm:text-[14.5px]')

content = content[:start_idx] + block_content + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

