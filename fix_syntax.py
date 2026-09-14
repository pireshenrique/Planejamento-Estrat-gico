with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

bad_str = """              </div>
                          </div>
          </section>

            </div>
            {/* SEPARADOR */}"""

good_str = """              </div>
            </div>
            {/* SEPARADOR */}"""

content = content.replace(bad_str, good_str)

with open('src/components/cenario-mercadologico/PerfilConsumoView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
