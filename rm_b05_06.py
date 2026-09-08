import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "{/* Wrapper vertical para BLOCO 05 e BLOCO 06 para ocupar espaço 100% horizontal */}"
end_marker = "        )}\n        {/* Placeholder Estrutural para Temas em Construção */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found")
    exit(1)

# we need to keep the closing </div> of the activeTopic === 'split-payment' wrapper
# before end_marker there should be a `          </div>\n`
# Let's see exactly what's between them
substring = content[start_idx:end_idx]
# find the last </div> in substring
last_div = substring.rfind("          </div>\n")
if last_div != -1:
    new_content = content[:start_idx] + substring[last_div:] + content[end_idx:]
    with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Success")
else:
    print("Could not find closing div")
