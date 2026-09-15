const fs = require('fs');
let server = fs.readFileSync('server.ts', 'utf-8');

const oldPromptJson = `Gere o Relatório Estratégico Consolidado rigorosamente em formato JSON:
{
  "resumoExecutivo": {
    "paragrafo1": "texto executivo...",
    "paragrafo2": "texto executivo...",
    "principaisMensagens": ["bullet 1"]
  },
  "candidatas": [
    {
      "id": "MT-001", // ou CAND-001 se for nova
      "titulo": "Consumidor racional e seletivo",
      "sinal": "Fato real observado...",
      "tendencia": "Movimento estrutural...",
      "riscosLorenzetti": ["Pode..."],
      "oportunidadesLorenzetti": ["Pode..."],
      "impacto": "Alto",
      "horizonte": "Curto a Médio prazo (2027–2031)",
      "temasRelacionados": ["Tema 1"],
      "supportingPageIds": ["jornada-compra"],
      "supportingFactIds": ["jornada-compra::kpi::...", "outro::id"],
      "evidenceIds": ["id-da-evidencia-se-houver"],
      "fundamentacao": [
        {
          "afirmacao": "Fato real observado...",
          "evidenceId": "id-da-evidencia-ou-vazio",
          "factId": "id-do-fato-se-aplicavel",
          "source": "Fonte do fato ou evidencia"
        }
      ]
    }
  ],
  "riscosConsolidados": ["risco 1"],
  "oportunidadesConsolidadas": ["oportunidade 1"],
  "conexoesEstrategicas": [{ "temas": ["A"], "insight": "..." }],
  "implicacoesLorenzetti": [{ "dimensao": "Operações", "implicacoes": ["Pode..."] }],
  "temasMonitoramento": {
    "prioridadeAlta": ["item 1"],
    "acompanhamento": ["item 1"],
    "sinaisEmergentes": ["item 1"]
  }
}\`;`;

const newPromptJson = `Gere rigorosamente apenas as candidatas a macrotendências em formato JSON:
{
  "candidatas": [
    {
      "id": "MT-001", // ou CAND-001 se for nova
      "titulo": "Consumidor racional e seletivo",
      "sinal": "Fato real observado...",
      "tendencia": "Movimento estrutural...",
      "riscosLorenzetti": ["Pode..."],
      "oportunidadesLorenzetti": ["Pode..."],
      "impacto": "Alto",
      "horizonte": "Curto a Médio prazo (2027–2031)",
      "temasRelacionados": ["Tema 1"],
      "supportingPageIds": ["jornada-compra"],
      "supportingFactIds": ["jornada-compra::kpi::...", "outro::id"],
      "evidenceIds": ["id-da-evidencia-se-houver"],
      "fundamentacao": [
        {
          "afirmacao": "Fato real observado...",
          "evidenceId": "id-da-evidencia-ou-vazio",
          "factId": "id-do-fato-se-aplicavel",
          "source": "Fonte do fato ou evidencia"
        }
      ]
    }
  ]
}\`;`;

// There might be slight indentation differences, so let's do a substring replace
const idxStart = server.indexOf('Gere o Relatório Estratégico Consolidado rigorosamente em formato JSON:');
const idxEnd = server.indexOf('}`;', idxStart);
if (idxStart > -1 && idxEnd > -1) {
    server = server.substring(0, idxStart) + newPromptJson + server.substring(idxEnd + 3);
}

// Ensure the response parsing handles missing blocks
server = server.replace(
    `          resumoExecutivo: parsed.resumoExecutivo,
          leiturasEstrategicas: validatedLeituras,
          riscosConsolidados: parsed.riscosConsolidados,
          oportunidadesConsolidadas: parsed.oportunidadesConsolidadas,
          conexoesEstrategicas: parsed.conexoesEstrategicas,
          implicacoesLorenzetti: parsed.implicacoesLorenzetti,
          temasMonitoramento: parsed.temasMonitoramento`,
    `          resumoExecutivo: {
            paragrafo1: "Análise atualizada com sucesso. O Resumo Executivo será recriado em etapa posterior baseando-se apenas nas leituras já validadas.",
            paragrafo2: "",
            principaisMensagens: []
          },
          leiturasEstrategicas: validatedLeituras,
          riscosConsolidados: [],
          oportunidadesConsolidadas: [],
          conexoesEstrategicas: [],
          implicacoesLorenzetti: [],
          temasMonitoramento: { prioridadeAlta: [], acompanhamento: [], sinaisEmergentes: [] }`
);

fs.writeFileSync('server.ts', server);
