with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# I want to find the `{/* SEPARADOR */}` area.
print(content[content.find("{/* SEPARADOR */}")-500:content.find("{/* SEPARADOR */}")+500])
