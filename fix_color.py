with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(515, 540):
    lines[i] = lines[i].replace('orange', 'rose')

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)
