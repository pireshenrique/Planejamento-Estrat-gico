with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target = "{/* SEPARADOR */}"
idx = content.find(target)

new_content = content[:idx] + "            </div>\n            " + content[idx:]

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
