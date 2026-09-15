const fs = require('fs');
let server = fs.readFileSync('server.ts', 'utf-8');

const targetStr = "const pagesContext = getStrategicPageContext().map(page => `PÁGINA: ${page.pageTitle} (${page.pageId})\\nFatos:\\n${page.factualContent.map(f => `- ${f}`).join('\\n')}\\nAnálise Prévia:\\n${page.existingAnalysis.map(a => `- ${a}`).join('\\n')}\`).join('\\n\\n');";

const newStr = "const pagesContext = (strategicPages || []).filter((p) => p.status !== 'placeholder').map(page => `PÁGINA: ${page.pageTitle} (${page.pageId})\\nFatos:\\n${page.factualContent.map(f => `- [ID: ${f.id}] ${f.statement}`).join('\\n')}\\nAnálise Prévia:\\n${page.existingAnalysis.map(a => `- ${a}`).join('\\n')}\\nEvidências Vinculadas:\\n${page.evidenceIds?.join(', ')}`).join('\\n\\n');";

// just use substring to be safe
const idxStart = server.indexOf("const pagesContext = getStrategicPageContext()");
const idxEnd = server.indexOf(".join('\\n\\n');", idxStart) + 14;

if (idxStart > -1 && idxEnd > -1) {
    server = server.substring(0, idxStart) + newStr + server.substring(idxEnd);
}

const oldPromptRules = `4. RASTREABILIDADE OBRIGATÓRIA E ESPECÍFICA: Toda candidata deve possuir uma lista de "fundamentacao", mapeando cada "afirmacao" do sinal a uma "evidenceId" e "source" reais. 
5. CONDIÇÕES MÍNIMAS:
    - Se a candidata tiver pouca sustentação, não crie riscos e oportunidades; utilize a frase "Evidência insuficiente para detalhar implicações".`;

const newPromptRules = `4. RASTREABILIDADE OBRIGATÓRIA E ESPECÍFICA: As candidatas DEVEM surgir das PÁGINAS (Contexto Analítico) + EVIDÊNCIAS (Catálogo). O campo "supportingPageIds" deve conter os IDs das páginas utilizadas. O campo "supportingFactIds" deve conter os IDs dos fatos/indicadores das páginas. O campo "evidenceIds" deve conter os IDs das evidências do catálogo.
5. VALIDAÇÃO DO SINAL: O "sinal" é factual. Cada afirmação nele DEVE estar amparada por supportingFactIds ou evidenceIds. Não insira detalhes não presentes na base.
6. TENDÊNCIA É INTERPRETAÇÃO: A tendência deve ser extraída da combinação dos fatos, com linguagem probabilística (ex: "sugere", "pode indicar").
7. IMPLICAÇÕES: Riscos e oportunidades são hipóteses, marque conceitualmente como potenciais e evite previsões numéricas ou de mercado que não estejam na base.
8. CONDIÇÕES MÍNIMAS:
    - Se a candidata tiver pouca sustentação, não crie riscos e oportunidades; utilize a frase "Evidência insuficiente para detalhar implicações".`;

server = server.replace(oldPromptRules, newPromptRules);

fs.writeFileSync('server.ts', server);
