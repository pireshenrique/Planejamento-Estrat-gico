const fs = require('fs');
let server = fs.readFileSync('server.ts', 'utf-8');

// replace the old import
server = server.replace('import { getStrategicPageContext } from "./src/data/strategicPageContext";\n', '');

// get strategicPages from req.body
if (!server.includes('strategicPages,')) {
    server = server.replace(
        "      totalEvidencias\n    } = req.body || {};",
        "      totalEvidencias,\n      strategicPages\n    } = req.body || {};"
    );
}

// update the pagesContext generation
server = server.replace(
    "const pagesContext = getStrategicPageContext().map(page => `PÁGINA: ${page.pageTitle} (${page.pageId})\\nFatos:\\n${page.factualContent.map(f => `- ${f}`).join('\\n')}\\nAnálise Prévia:\\n${page.existingAnalysis.map(a => `- ${a}`).join('\\n')}`).join('\\n\\n');",
    "const pagesContext = (strategicPages || []).filter((p) => p.status !== 'placeholder').map(page => `PÁGINA: ${page.pageTitle} (${page.pageId})\\nFatos:\\n${page.factualContent.map(f => `- [ID: ${f.id}] ${f.statement}`).join('\\n')}\\nAnálise Prévia:\\n${page.existingAnalysis.map(a => `- ${a}`).join('\\n')}\\nEvidências Vinculadas:\\n${page.evidenceIds.join(', ')}`).join('\\n\\n');"
);

// update the prompt instructions
const oldPrompt = `4. RASTREABILIDADE OBRIGATÓRIA E ESPECÍFICA: Toda candidata deve possuir uma lista de "fundamentacao", mapeando cada "afirmacao" do sinal a uma "evidenceId" e "source" reais. 5. CONDIÇÕES MÍNIMAS:`;

const newPrompt = `4. RASTREABILIDADE OBRIGATÓRIA E ESPECÍFICA: As candidatas DEVEM surgir das PÁGINAS (Contexto Analítico) + EVIDÊNCIAS (Catálogo). O campo "supportingPageIds" deve conter os IDs das páginas utilizadas. O campo "supportingFactIds" deve conter os IDs dos fatos/indicadores das páginas. O campo "evidenceIds" deve conter os IDs das evidências do catálogo.\n5. VALIDAÇÃO DO SINAL: O "sinal" é factual. Cada afirmação nele DEVE estar amparada por supportingFactIds ou evidenceIds. Não insira detalhes não presentes na base.\n6. TENDÊNCIA É INTERPRETAÇÃO: A tendência deve ser extraída da combinação dos fatos, com linguagem probabilística (ex: "sugere", "pode indicar").\n7. IMPLICAÇÕES: Riscos e oportunidades são hipóteses, marque conceitualmente como potenciais e evite previsões numéricas ou de mercado que não estejam na base.\n8. CONDIÇÕES MÍNIMAS:`;

server = server.replace(oldPrompt, newPrompt);

// update the JSON format
const oldJSON = `      "fundamentacao": [
        {
          "afirmacao": "endividamento atinge recordes",
          "evidenceId": "id-real-1",
          "source": "Fonte real 1"
        },
        {
          "afirmacao": "taxas de juros elevadas",
          "evidenceId": "id-real-2",
          "source": "Fonte real 2"
        }
      ],`;

const newJSON = `      "supportingPageIds": ["jornada-compra"],
      "supportingFactIds": ["jornada-compra::kpi::...", "outro::id"],
      "evidenceIds": ["id-da-evidencia-se-houver"],
      "fundamentacao": [
        {
          "afirmacao": "Fato real observado...",
          "evidenceId": "id-da-evidencia-ou-vazio",
          "factId": "id-do-fato-se-aplicavel",
          "source": "Fonte do fato ou evidencia"
        }
      ],`;

server = server.replace(oldJSON, newJSON);

fs.writeFileSync('server.ts', server);
