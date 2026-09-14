with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# First, remove the bad </div>\n</section> I added earlier.
bad_addition = "            </div>\n          </section>\n\n          {/* SEPARADOR */}"
if bad_addition in content:
    content = content.replace(bad_addition, "            </div>\n            {/* SEPARADOR */}")
    
with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
