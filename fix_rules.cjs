const fs = require('fs');
let server = fs.readFileSync('server.ts', 'utf-8');

const rule4Idx = server.indexOf('4. RASTREABILIDADE OBRIGATÓRIA E ESPECÍFICA: Toda candidata deve');
const readIdx = server.indexOf('LEITURAS ATUALMENTE VIGENTES', rule4Idx);

if (rule4Idx > -1 && readIdx > -1) {
    const newRules = `4. RASTREABILIDADE OBRIGATÓRIA E ESPECÍFICA: As candidatas DEVEM surgir das PÁGINAS (Contexto Analítico) + EVIDÊNCIAS (Catálogo). O campo "supportingPageIds" deve conter os IDs das páginas utilizadas. O campo "supportingFactIds" deve conter os IDs dos fatos/indicadores das páginas. O campo "evidenceIds" deve conter os IDs das evidências do catálogo.
5. VALIDAÇÃO DO SINAL: O "sinal" é factual. Cada afirmação nele DEVE estar amparada por supportingFactIds ou evidenceIds. Não insira detalhes não presentes na base.
6. TENDÊNCIA É INTERPRETAÇÃO: A tendência deve ser extraída da combinação dos fatos, com linguagem probabilística (ex: "sugere", "pode indicar").
7. IMPLICAÇÕES: Riscos e oportunidades são hipóteses, marque conceitualmente como potenciais e evite previsões numéricas ou de mercado que não estejam na base.
8. CONDIÇÕES MÍNIMAS:
    - Se a candidata tiver pouca sustentação, não crie riscos e oportunidades; utilize a frase "Evidência insuficiente para detalhar implicações".

`;
    server = server.substring(0, rule4Idx) + newRules + server.substring(readIdx);
    fs.writeFileSync('server.ts', server);
}
