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

# Increase titles in cards
block_content = block_content.replace('text-[11.5px] font-black', 'text-[12.5px] font-black')

# Increase descriptions in cards
block_content = block_content.replace('text-[10.5px] text-slate-500', 'text-[11.5px] text-slate-500')
block_content = block_content.replace('text-[10.5px] text-slate-600', 'text-[11.5px] text-slate-600')

# Increase numbers
block_content = block_content.replace('text-[11px] font-bold text-slate-500', 'text-[12.5px] font-bold text-slate-500')
block_content = block_content.replace('text-[11px] font-bold text-white', 'text-[12.5px] font-bold text-white')

# Card 5 inner titles
block_content = block_content.replace('text-[10px] font-black text-blue-800', 'text-[11px] font-black text-blue-800')
block_content = block_content.replace('text-[10px] font-black text-teal-800', 'text-[11px] font-black text-teal-800')

# Card 5 inner descriptions
block_content = block_content.replace('text-[9.5px] text-slate-500', 'text-[10.5px] text-slate-500')
block_content = block_content.replace('text-[9.5px] text-teal-700/90', 'text-[10.5px] text-teal-700/90')

content = content[:start_idx] + block_content + content[end_idx:]

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

