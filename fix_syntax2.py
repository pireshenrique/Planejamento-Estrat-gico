with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "{/* SEPARADOR */}" in line and i > 1900 and i < 2000:
        # We need to fix the lines before it.
        # Let's see what is there.
        print("FOUND AT", i)
        print("".join(lines[i-15:i+5]))
        break
