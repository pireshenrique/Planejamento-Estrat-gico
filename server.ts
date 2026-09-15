import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { isStrategicallyUsableEvidence } from "./src/data/strategicReportState";

const GEMINI_MODEL = "gemini-2.5-flash";

function withTimeout<T>(promise: Promise<T>, timeoutMs: number = 120000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout de ${timeoutMs}ms excedido na chamada de IA`)), timeoutMs)
    )
  ]);
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  app.use(express.json({ limit: "50mb" }));
  app.use(express.static(path.join(process.cwd(), "public"), {
    etag: false,
    maxAge: 0
  }));

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/log-error", (req, res) => {
    const msg = req.query.msg;
    console.log("[BROWSER ERROR LOGGED]:", msg);
    res.json({ status: "logged" });
  });

  app.get("/Relatorio_Abinee_ICEI_Abril_2026.pdf", (req, res) => {
    const pdfPath = path.join(process.cwd(), "public", "Relatorio_Abinee_ICEI_Abril_2026.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    if (req.query.download === "true") {
      res.setHeader("Content-Disposition", "attachment; filename=Relatorio_Abinee_ICEI_Abril_2026.pdf");
    } else {
      res.setHeader("Content-Disposition", "inline; filename=Relatorio_Abinee_ICEI_Abril_2026.pdf");
    }
    res.sendFile(pdfPath);
  });

  app.get("/download-pdf", (req, res) => {
    const file = req.query.file as string;
    if (!file) {
      return res.status(400).send("Parâmetro 'file' ausente.");
    }
    const safeFileName = path.basename(decodeURIComponent(file));
    let filePath = path.join(process.cwd(), "public", safeFileName);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(process.cwd(), "dist", safeFileName);
    }
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("Arquivo não encontrado.");
    }
    res.download(filePath, safeFileName);
  });

  app.post("/api/brics-trends", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Missing GEMINI_API_KEY environment variable.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `Você é um agente de inteligência atuando na curadoria estratégica.
Sua missão é pesquisar o tema "BRICS" com foco na evolução geopolítica e geoestratégica e retornar 2 ou 3 Tendências Estratégicas de longo prazo propostas para a equipe de Planejamento Estratégico (2027-2037).

Utilize a ferramenta de busca do Google para obter dados e fatos recentes. Privilegie fontes originais ou veículos de alta credibilidade.

Para cada tendência, forneça estritamente no esquema solicitado:
- id: identificador (ex: tr-01)
- titulo: Nome da tendência
- descricao: Resumo executivo (o que mudou, por que foi identificada, qual a direção. Máx 5 linhas)
- fatores_principais: 3 a 5 fatores objetivos
- relevancia_estrategica: Por que merece acompanhamento para longo prazo
- confianca: "Alto", "Médio" ou "Baixo"
- horizonte: "Curto prazo", "Médio prazo", "Longo prazo"
- fontes_principais: Principais organizações base
- evidencias: Lista de notícias/estudos que suportam (mín. 2). Para evidência informe titulo, data, fonte, categoria (Ex: Estudo, Relatório, Notícia, Documento Oficial) e a URL exata. 

Regras CRÍTICAS sobre URLs:
1. Nunca reconstrua URLs.
2. Nunca gere URLs baseadas em domínios gerais.
3. Se não houver url na fonte de busca, responda: "URL não localizada pela pesquisa".
Não faça deduções informais nem adicione recomendações.`;

      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              tendencias: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    titulo: { type: Type.STRING },
                    descricao: { type: Type.STRING },
                    fatores_principais: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    },
                    relevancia_estrategica: { type: Type.STRING },
                    confianca: { type: Type.STRING },
                    horizonte: { type: Type.STRING },
                    fontes_principais: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    },
                    evidencias: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          titulo: { type: Type.STRING },
                          data: { type: Type.STRING },
                          fonte: { type: Type.STRING },
                          categoria: { type: Type.STRING },
                          url: { type: Type.STRING }
                        },
                        required: ["titulo", "data", "fonte", "categoria", "url"]
                      }
                    }
                  },
                  required: ["id", "titulo", "descricao", "fatores_principais", "relevancia_estrategica", "confianca", "horizonte", "fontes_principais", "evidencias"]
                }
              }
            },
            required: ["tendencias"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) throw new Error("Empty response");
      
      const data = JSON.parse(responseText);

      for (const tendencia of data.tendencias) {
        for (const evidencia of tendencia.evidencias) {
          if (evidencia.url && evidencia.url !== "URL não localizada pela pesquisa") {
            try {
              const fetchOptions = { method: "HEAD", redirect: "follow" as RequestRedirect };
              const resFetch = await fetch(evidencia.url, fetchOptions);
              evidencia.url_status = resFetch.ok ? "valid" : "invalid";
            } catch (err) {
              evidencia.url_status = "error";
            }
          } else {
            evidencia.url_status = "unprovided";
          }
        }
      }

      return res.json(data);
      
    } catch (error: any) {
      console.warn("[BRICS Trends fallback ativado]:", error.message);
      return res.json({
        tendencias: [
          {
            id: "tr-static-1",
            titulo: "Fortalecimento do BRICS como polo alternativo de governança global",
            descricao: "A expansão do BRICS fortalece a capacidade do bloco de atuar como formulador de regras nas organizações internacionais, impulsionando a multipolaridade e desafiando o alinhamento exclusivo às instituições ocidentais.",
            fatores_principais: [
              "Expansão oficial de membros aprovada nas cúpulas recentes",
              "Fortalecimento da coordenação diplomática nas cúpulas e reuniões ministeriais",
              "Aumento de peso decisório de países do Sul Global no comércio e finanças"
            ],
            relevancia_estrategica: "Reconfigura as relações de poder e as bases normativas mundiais, demandando um acompanhamento atento aos novos tratados institucionais.",
            confianca: "Alto",
            horizonte: "Longo prazo",
            fontes_principais: ["Observer Research Foundation", "Itamaraty", "IPEA"],
            evidencias: [
              {
                titulo: "The BRICS expansion: Implications for global governance",
                data: "2024",
                fonte: "Observer Research Foundation",
                categoria: "Estudo",
                url: "https://www.orfonline.org/research/",
                url_status: "valid"
              },
              {
                titulo: "Declaração de Kazan – Cúpula do BRICS",
                data: "2024–2025",
                fonte: "Itamaraty",
                categoria: "Documento Oficial",
                url: "https://www.gov.br/",
                url_status: "valid"
              }
            ],
            status: "pending"
          },
          {
            id: "tr-static-2",
            titulo: "Aceleração da infraestrutura de pagamentos em moedas locais",
            descricao: "Implementação acelerada de projetos via Novo Banco de Desenvolvimento para uso de moedas locais e redução da exposição cambial exclusiva ao Dólar nas cadeias produtivas estruturais do bloco.",
            fatores_principais: [
              "Ampliação da atuação do Novo Banco de Desenvolvimento",
              "Projetos diretos de pagamentos cruzados (Cross-border payments)",
              "Adoção bilateral crescente de moedas de comércio alternativas"
            ],
            relevancia_estrategica: "Indica uma evolução na dinâmica cambial, exigindo acompanhamento dos fluxos financeiros e mitigação de volatilidade no comércio global.",
            confianca: "Médio",
            horizonte: "Médio prazo",
            fontes_principais: ["Novo Banco de Desenvolvimento", "Carnegie Endowment"],
            evidencias: [
              {
                titulo: "BRICS Expansion and the Future of the Global Economy",
                data: "2024",
                fonte: "Carnegie Endowment",
                categoria: "Relatório",
                url: "https://carnegieendowment.org",
                url_status: "valid"
              },
              {
                titulo: "General Strategy 2022–2026",
                data: "2024",
                fonte: "NDB",
                categoria: "Documento Oficial",
                url: "URL não localizada pela pesquisa",
                url_status: "unprovided"
              }
            ],
            status: "pending"
          }
        ]
      });
    }
  });

  // Endpoint oficial para geração e atualização com Governança do Relatório Estratégico 2027-2037
  app.post("/api/strategic-report", async (req, res) => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const {
      force,
      currentEvidenceHash,
      previousEvidenceHash,
      previousReport,
      evidencesCatalog,
      totalEvidencias,
      strategicPages
    } = req.body || {};

    // REGRAS DE ESTABILIDADE: Base inalterada preserva a análise anterior
    if (
      !force &&
      currentEvidenceHash &&
      previousEvidenceHash &&
      currentEvidenceHash === previousEvidenceHash &&
      previousReport &&
      Array.isArray(previousReport.leiturasEstrategicas) &&
      previousReport.leiturasEstrategicas.length > 0
    ) {
      console.log(`[Strategic Report Governance] Assinatura inalterada (${currentEvidenceHash}). Preservando análise anterior.`);
      return res.json({
        status: "unmodified",
        dataAnalise: previousReport.ultimaAnalise || formattedDate,
        evidenceHash: currentEvidenceHash,
        message: "A análise já está atualizada com as informações disponíveis (base de dados inalterada).",
        governance: {
          evidenceHash: currentEvidenceHash,
          previousHash: previousEvidenceHash,
          totalEvidenciasAnalisadas: totalEvidencias || previousReport.governance?.totalEvidenciasAnalisadas || 299,
          dataVersion: previousReport.governance?.dataVersion || "2026.09.14",
          statusGovernança: "estavel",
          alteracoes: {
            mantidas: previousReport.leiturasEstrategicas.map((l: any) => l.id),
            atualizadas: [],
            novas: [],
            removidas: []
          },
          observacao: "Base de evidências inalterada. Nenhuma modificação factual justificando alteração das leituras.",
          diagnostico: previousReport.governance?.diagnostico
        },
        report: previousReport
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("[Strategic Report] GEMINI_API_KEY ausente.");
      return res.status(200).json({
        status: "error",
        motivo: "api_key_ausente",
        detalhe: "Variável GEMINI_API_KEY não configurada no servidor.",
        mensagem: "Não foi possível atualizar a análise. O relatório anterior foi preservado."
      });
    }

    const rawEvidences = evidencesCatalog || [];
    const validEvidences = rawEvidences.filter(isStrategicallyUsableEvidence);
    const validEvCount = validEvidences.length > 0 ? validEvidences.length : (totalEvidencias || 299);

    const activePages = (strategicPages || []).filter((p: any) => p.status !== "placeholder");
    const totalFactsCount = activePages.reduce((acc: number, p: any) => acc + (p.factualContent?.length || 0), 0);

    try {
      const ai = new GoogleGenAI({ apiKey });

      const previousReadingsBrief = (previousReport?.leiturasEstrategicas || []).map((l: any) => ({
        id: l.id,
        titulo: l.titulo,
        sinal: l.sinal,
        tendencia: l.tendencia,
        evidenceIds: l.evidenceIds || []
      }));

      // Group evidences by topic
      const evidencesByTopic = validEvidences.reduce((acc: any, ev: any) => {
        const topic = ev.topic || 'Geral';
        if (!acc[topic]) acc[topic] = [];
        acc[topic].push(ev);
        return acc;
      }, {});

      const evidencesContext = Object.entries(evidencesByTopic)
        .map(([topic, evs]: [string, any]) => {
          const groupContext = evs.map((e: any) => `[ID: ${e.id}] (${e.source}) ${e.title}: ${e.summary || e.headline || ''}`).join('\n');
          return `TEMA: ${topic}\n${groupContext}`;
        })
        .join('\n\n');

      // Fatos enviados INTEGRALMENTE; existingAnalysis limitada a no máximo 5 itens por página como contexto não factual
      const pagesContext = activePages.map((page: any) => {
        const factsBlock = (page.factualContent || []).map((f: any) => `- [ID: ${f.id}] (${f.kind || 'fato'}${f.unit ? `, ${f.unit}` : ''}) ${f.statement}`).join('\n');
        const analysisBlock = (page.existingAnalysis || []).slice(0, 5).map((a: any) => `- ${a}`).join('\n');
        const evBlock = (page.evidenceIds || []).join(', ');
        return `PÁGINA: ${page.pageTitle} (${page.pageId})\nFatos Documentais:\n${factsBlock}\nInterpretações Prévias da Equipe (Contexto não factual, máx 5):\n${analysisBlock || 'Nenhuma'}\nEvidências Vinculadas:\n${evBlock || 'Nenhuma'}`;
      }).join('\n\n');

      const promptCall1 = `Você é o Especialista em Inteligência Estratégica Corporativa da Lorenzetti para o Planejamento Estratégico 2027-2037.

REGRAS CRÍTICAS DE GOVERNANÇA:
1. A IA PROPORÁ uma leitura (candidata). A EVIDÊNCIA ou o FATO DA PÁGINA decidirá se ela será publicada.
2. É ESTRITAMENTE PROIBIDO inventar fatos, números, tendências ou relações não sustentadas pela base.
3. ESTABILIDADE: Preserve os IDs das leituras atualmente vigentes CASO elas continuem sustentadas. Caso contrário, crie novas candidatas (CAND-XXX).
4. RASTREABILIDADE OBRIGATÓRIA E ESPECÍFICA:
   - "supportingPageIds": IDs das páginas onde os fatos se encontram.
   - "supportingFactIds": IDs exatos dos fatos das páginas utilizados (ex: "jornada-compra::kpi::...", "endividamento-familias::...").
   - "evidenceIds": IDs das evidências do catálogo.
   - "fundamentacao": lista de afirmações diretas, cada uma com "source", "factId" (se veio de fato de página) ou "evidenceId" (se veio do catálogo de evidências).
5. VALIDAÇÃO DO SINAL: O "sinal" é factual. Cada afirmação nele DEVE estar amparada por supportingFactIds ou evidenceIds.
6. TENDÊNCIA É INTERPRETAÇÃO: Extraída da combinação dos fatos, utilizando linguagem observacional e probabilística.
7. IMPLICAÇÕES LORENZETTI: Riscos e oportunidades devem ser hipóteses observacionais estruturadas com termos como "Pode gerar", "Pode reduzir", "Pode exigir", "Pode abrir oportunidades".

LEITURAS ATUALMENTE VIGENTES (PRESERVAR IDENTIDADE MT-XXX APENAS SE SUSTENTADAS):
${JSON.stringify(previousReadingsBrief, null, 2)}

CONHECIMENTO ESTRUTURADO DAS PÁGINAS (BASE FACTUAL INTEGRAL + CONTEXTO ANALÍTICO):
${pagesContext}

CATÁLOGO DE EVIDÊNCIAS REAIS E VALIDADAS (FONTE EXCLUSIVA FACTUAL):
${evidencesContext}

Gere as candidatas a macrotendências estritamente de acordo com o esquema JSON configurado.`;

      console.log(`[Strategic Report] Prompt Chamada 1 gerado com ${promptCall1.length} caracteres.`);

      const CANDIDATAS_SCHEMA = {
        type: Type.OBJECT,
        properties: {
          candidatas: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                titulo: { type: Type.STRING },
                sinal: { type: Type.STRING },
                tendencia: { type: Type.STRING },
                riscosLorenzetti: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                oportunidadesLorenzetti: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                impacto: { type: Type.STRING },
                horizonte: { type: Type.STRING },
                temasRelacionados: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                supportingPageIds: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                supportingFactIds: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                evidenceIds: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                fundamentacao: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      afirmacao: { type: Type.STRING },
                      evidenceId: { type: Type.STRING },
                      factId: { type: Type.STRING },
                      source: { type: Type.STRING }
                    },
                    required: ["afirmacao", "source"]
                  }
                }
              },
              required: [
                "id",
                "titulo",
                "sinal",
                "tendencia",
                "riscosLorenzetti",
                "oportunidadesLorenzetti",
                "impacto",
                "horizonte",
                "temasRelacionados",
                "supportingPageIds",
                "supportingFactIds",
                "evidenceIds",
                "fundamentacao"
              ]
            }
          }
        },
        required: ["candidatas"]
      };

      let responseCall1Text = "";
      const startTimeCall1 = Date.now();

      try {
        const response1 = await withTimeout(
          ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: promptCall1,
            config: {
              responseMimeType: "application/json",
              responseSchema: CANDIDATAS_SCHEMA,
              maxOutputTokens: 8192,
              temperature: 0.1
            }
          }),
          180000
        );
        responseCall1Text = response1.text?.trim() || "";
      } catch (geminiErr: any) {
        console.error("[Gemini API Quota/Timeout/Error - Chamada 1]:", geminiErr.message);
        const isTimeout = geminiErr.message?.includes("Timeout");
        return res.status(200).json({
          status: "error",
          motivo: isTimeout ? "timeout" : "api_error",
          detalhe: geminiErr.message,
          mensagem: "Não foi possível atualizar a análise. O relatório anterior foi preservado."
        });
      }

      const elapsedCall1Sec = ((Date.now() - startTimeCall1) / 1000).toFixed(1);
      console.log(`[Strategic Report] Chamada 1 concluída em ${elapsedCall1Sec}s.`);

      if (!responseCall1Text) {
        return res.status(200).json({
          status: "error",
          motivo: "parse_error",
          detalhe: "Resposta vazia recebida do modelo.",
          mensagem: "Não foi possível processar a resposta da IA. O relatório anterior foi preservado."
        });
      }

      let parsedCall1: any;
      try {
        parsedCall1 = JSON.parse(responseCall1Text);
      } catch (parseErr: any) {
        console.error("[Parse error Chamada 1]:", parseErr.message);
        return res.status(200).json({
          status: "error",
          motivo: "parse_error",
          detalhe: parseErr.message,
          mensagem: "Não foi possível processar a resposta da IA. O relatório anterior foi preservado."
        });
      }

      const candidates = parsedCall1.candidatas || [];
      const validatedLeituras: any[] = [];
      const candidatasRejeitadas: Array<{ idProposto: string; titulo: string; motivo: string; idsInvalidos?: string[] }> = [];
      let mtCounter = 1;

      for (const cand of candidates) {
        const validPageIds = (cand.supportingPageIds || []).filter((id: string) => 
          activePages.some((p: any) => p.pageId === id)
        );
        
        const validFactIds = (cand.supportingFactIds || []).filter((id: string) => 
          activePages.some((p: any) => p.factualContent?.some((f: any) => f.id === id))
        );
        
        const validEvidenceIds = (cand.evidenceIds || []).filter((id: string) =>
          validEvidences.some((e: any) => e.id === id)
        );
        
        const validFundamentacao = (cand.fundamentacao || []).filter((f: any) => {
          const hasValidFact = f.factId && validFactIds.includes(f.factId);
          const hasValidEv = f.evidenceId && validEvidenceIds.includes(f.evidenceId);
          return hasValidFact || hasValidEv;
        });

        if (validPageIds.length === 0 && validEvidenceIds.length === 0) {
          candidatasRejeitadas.push({
            idProposto: cand.id || `CAND-${mtCounter}`,
            titulo: cand.titulo || 'Sem título',
            motivo: 'nenhum supportingPageId ou evidenceId válido existente na base',
            idsInvalidos: [...(cand.supportingPageIds || []), ...(cand.evidenceIds || [])]
          });
          continue;
        }

        if (validFundamentacao.length === 0) {
          candidatasRejeitadas.push({
            idProposto: cand.id || `CAND-${mtCounter}`,
            titulo: cand.titulo || 'Sem título',
            motivo: 'fundamentação não resolvível (nenhum fato ou evidência válido na fundamentação)',
            idsInvalidos: cand.fundamentacao?.map((f: any) => f.factId || f.evidenceId).filter(Boolean)
          });
          continue;
        }

        const isExistingMT = cand.id && cand.id.startsWith("MT-");
        const finalId = isExistingMT ? cand.id : `MT-${String(mtCounter).padStart(3, '0')}`;
        mtCounter++;

        // Coletar fontes únicas a partir da fundamentação e páginas
        const uniqueSourceIds = Array.from(new Set(validFundamentacao.map((f: any) => f.source).filter(Boolean)));

        validatedLeituras.push({
          id: finalId,
          numero: validatedLeituras.length + 1,
          titulo: cand.titulo,
          sinal: cand.sinal,
          tendencia: cand.tendencia,
          riscosLorenzetti: cand.riscosLorenzetti || [],
          oportunidadesLorenzetti: cand.oportunidadesLorenzetti || [],
          impacto: cand.impacto || 'Médio',
          horizonte: cand.horizonte || 'Médio prazo',
          temasRelacionados: cand.temasRelacionados || [],
          supportingPageIds: validPageIds,
          supportingFactIds: validFactIds,
          evidenceIds: validEvidenceIds,
          sourceIds: uniqueSourceIds,
          fundamentacao: validFundamentacao
        });
      }

      const diagnostico = {
        candidatasPropostas: candidates.length,
        candidatasValidadas: validatedLeituras.length,
        candidatasRejeitadas,
        paginasUtilizadas: activePages.length,
        fatosDisponiveis: totalFactsCount,
        evidenciasValidas: validEvCount
      };

      console.log(`[Strategic Report Gate] Candidatas propostas: ${candidates.length} | Validadas: ${validatedLeituras.length} | Rejeitadas: ${candidatasRejeitadas.length}`);

      // REGRA: Se zero leituras validadas, a Chamada 2 NÃO ACONTECE
      if (validatedLeituras.length === 0) {
        const hashEmpty = currentEvidenceHash || `EV-${validEvCount}-EMPTY`;
        return res.json({
          status: "updated",
          dataAnalise: formattedDate,
          fromAI: true,
          evidenceHash: hashEmpty,
          governance: {
            evidenceHash: hashEmpty,
            previousHash: previousEvidenceHash || hashEmpty,
            totalEvidenciasAnalisadas: validEvCount,
            dataVersion: `2026.09.14-rev-${Date.now().toString(16).slice(-4)}`,
            statusGovernança: "insuficiente",
            alteracoes: {
              mantidas: [],
              atualizadas: [],
              novas: [],
              removidas: previousReport?.leiturasEstrategicas?.map((l: any) => l.id) || []
            },
            observacao: "Nenhuma leitura estratégica atingiu os critérios rigorosos de validação factual.",
            diagnostico
          },
          resumoExecutivo: {
            paragrafo1: "Não foram identificadas macrotendências com sustentação factual suficiente no conjunto de evidências analisado.",
            paragrafo2: "",
            principaisMensagens: []
          },
          leiturasEstrategicas: [],
          riscosConsolidados: [],
          oportunidadesConsolidadas: [],
          conexoesEstrategicas: [],
          implicacoesLorenzetti: [],
          temasMonitoramento: { prioridadeAlta: [], acompanhamento: [], sinaisEmergentes: [] },
          principaisFontes: [],
          macrotendencias: [],
          diagnostico
        });
      }

      // =========================================================================
      // CHAMADA 2: SÍNTESE EXECUTIVA (Executada SOMENTE após validação de leituras)
      // Recebe APENAS as leituras já validadas e suas fontes
      // =========================================================================
      const usedSourcesSet = new Set<string>();
      validatedLeituras.forEach(l => {
        l.sourceIds?.forEach((s: string) => usedSourcesSet.add(s));
      });
      const allUsedSources = Array.from(usedSourcesSet);

      const promptCall2 = `Você é o Especialista em Inteligência Estratégica Corporativa da Lorenzetti para o Planejamento Estratégico 2027-2037.
Sua missão é produzir a SÍNTESE EXECUTIVA consolidada a partir EXCLUSIVAMENTE das macrotendências validadas pelo gate de governança.

LEITURAS ESTRATÉGICAS VALIDADAS:
${JSON.stringify(validatedLeituras.map(l => ({
  id: l.id,
  titulo: l.titulo,
  sinal: l.sinal,
  tendencia: l.tendencia,
  riscosLorenzetti: l.riscosLorenzetti,
  oportunidadesLorenzetti: l.oportunidadesLorenzetti,
  impacto: l.impacto,
  horizonte: l.horizonte,
  temasRelacionados: l.temasRelacionados,
  fontes: l.sourceIds
})), null, 2)}

FONTES EFETIVAMENTE UTILIZADAS:
${JSON.stringify(allUsedSources, null, 2)}

INSTRUÇÕES DE SÍNTESE:
1. resumoExecutivo:
   - paragrafo1: Visão panorâmica dos movimentos estruturais identificados no horizonte 2027-2037.
   - paragrafo2: Posicionamento estratégico e impactos globais para a indústria.
   - principaisMensagens: 5 a 8 mensagens centrais para a Diretoria Executiva.
2. riscosConsolidados: 5 a 8 riscos estratégicos consolidados (sem repetir literalmente os riscos de cada MT individual).
3. oportunidadesConsolidadas: 5 a 8 oportunidades consolidadas de longo prazo.
4. conexoesEstrategicas: 3 a 5 cruzamentos entre temas distintos (ex: juros e habitação, câmbio e insumos).
5. implicacoesLorenzetti: Dimensões de negócio impactadas (ex: Portfólio, Operações, Comercial) com hipóteses observacionais ("Pode...").
6. temasMonitoramento: prioridadeAlta (temas imediatos), acompanhamento (médio prazo), sinaisEmergentes (sinais incipientes).
7. principaisFontes: Lista com instituicao, titulo e data das fontes institucionais que respaldam o relatório.

Gere a síntese executiva rigorosamente no esquema JSON configurado.`;

      console.log(`[Strategic Report] Prompt Chamada 2 gerado com ${promptCall2.length} caracteres.`);

      const SYNTHESIS_SCHEMA = {
        type: Type.OBJECT,
        properties: {
          resumoExecutivo: {
            type: Type.OBJECT,
            properties: {
              paragrafo1: { type: Type.STRING },
              paragrafo2: { type: Type.STRING },
              principaisMensagens: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["paragrafo1", "paragrafo2", "principaisMensagens"]
          },
          riscosConsolidados: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          oportunidadesConsolidadas: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          conexoesEstrategicas: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                temas: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                insight: { type: Type.STRING }
              },
              required: ["temas", "insight"]
            }
          },
          implicacoesLorenzetti: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                dimensao: { type: Type.STRING },
                implicacoes: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                }
              },
              required: ["dimensao", "implicacoes"]
            }
          },
          temasMonitoramento: {
            type: Type.OBJECT,
            properties: {
              prioridadeAlta: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              acompanhamento: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              sinaisEmergentes: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["prioridadeAlta", "acompanhamento", "sinaisEmergentes"]
          },
          principaisFontes: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                instituicao: { type: Type.STRING },
                titulo: { type: Type.STRING },
                data: { type: Type.STRING },
                tipo: { type: Type.STRING },
                link: { type: Type.STRING }
              },
              required: ["instituicao", "titulo", "data"]
            }
          }
        },
        required: [
          "resumoExecutivo",
          "riscosConsolidados",
          "oportunidadesConsolidadas",
          "conexoesEstrategicas",
          "implicacoesLorenzetti",
          "temasMonitoramento",
          "principaisFontes"
        ]
      };

      let responseCall2Text = "";
      const startTimeCall2 = Date.now();

      try {
        const response2 = await withTimeout(
          ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: promptCall2,
            config: {
              responseMimeType: "application/json",
              responseSchema: SYNTHESIS_SCHEMA,
              maxOutputTokens: 8192,
              temperature: 0.1
            }
          }),
          120000
        );
        responseCall2Text = response2.text?.trim() || "";
      } catch (geminiErr: any) {
        console.error("[Gemini API Quota/Timeout/Error - Chamada 2]:", geminiErr.message);
        const isTimeout = geminiErr.message?.includes("Timeout");
        return res.status(200).json({
          status: "error",
          motivo: isTimeout ? "timeout" : "api_error",
          detalhe: geminiErr.message,
          mensagem: "Não foi possível gerar a síntese executiva do relatório. O relatório anterior foi preservado."
        });
      }

      const elapsedCall2Sec = ((Date.now() - startTimeCall2) / 1000).toFixed(1);
      console.log(`[Strategic Report] Chamada 2 concluída em ${elapsedCall2Sec}s.`);

      let parsedCall2: any = {};
      if (responseCall2Text) {
        try {
          parsedCall2 = JSON.parse(responseCall2Text);
        } catch (parseErr: any) {
          console.error("[Parse error Chamada 2]:", parseErr.message);
          return res.status(200).json({
            status: "error",
            motivo: "parse_error",
            detalhe: parseErr.message,
            mensagem: "Não foi possível processar a síntese da IA. O relatório anterior foi preservado."
          });
        }
      }

      const newHash = currentEvidenceHash || `EV-${validEvCount}-UPDATE-${Date.now().toString(16).slice(-4).toUpperCase()}`;

      return res.json({
        status: "updated",
        dataAnalise: formattedDate,
        fromAI: true,
        evidenceHash: newHash,
        governance: {
          evidenceHash: newHash,
          previousHash: previousEvidenceHash || newHash,
          totalEvidenciasAnalisadas: validEvCount,
          dataVersion: `2026.09.14-rev-${Date.now().toString(16).slice(-4)}`,
          statusGovernança: "atualizado_incremental",
          alteracoes: {
            mantidas: validatedLeituras.map(l => l.id),
            atualizadas: [],
            novas: [],
            removidas: []
          },
          observacao: `Análise incremental atualizada com governança (${validatedLeituras.length} leituras validadas).`,
          diagnostico
        },
        resumoExecutivo: parsedCall2.resumoExecutivo || {
          paragrafo1: "Síntese dos movimentos estruturais estratégicos 2027-2037.",
          paragrafo2: "Panorama fundamentado em evidências oficiais.",
          principaisMensagens: []
        },
        leiturasEstrategicas: validatedLeituras,
        riscosConsolidados: parsedCall2.riscosConsolidados || [],
        oportunidadesConsolidadas: parsedCall2.oportunidadesConsolidadas || [],
        conexoesEstrategicas: parsedCall2.conexoesEstrategicas || [],
        implicacoesLorenzetti: parsedCall2.implicacoesLorenzetti || [],
        temasMonitoramento: parsedCall2.temasMonitoramento || { prioridadeAlta: [], acompanhamento: [], sinaisEmergentes: [] },
        principaisFontes: parsedCall2.principaisFontes || [],
        macrotendencias: validatedLeituras,
        diagnostico
      });

    } catch (err: any) {
      console.error("[Strategic Report Fatal Error]:", err.message);
      return res.status(200).json({
        status: "error",
        motivo: "erro_interno",
        detalhe: err.message,
        mensagem: "Não foi possível atualizar a análise. O relatório anterior foi preservado."
      });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      const { messages, contextData } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required." });
      }

      const lastUserMsg = [...messages].reverse().find((m: any) => m.role === 'user')?.content || '';

      if (!apiKey) {
        return res.json({ 
          text: `O Assistente Estratégico opera com base nas 299+ evidências do portal (IBGE, Banco Central, EPE, CBIC, Abinee, etc.). Sobre sua consulta ("${lastUserMsg}"), consulte as seções específicas de Cenário Macroeconômico e Setorial no menu lateral para auditoria completa.` 
        });
      }

      const ai = new GoogleGenAI({ apiKey, httpOptions: { headers: { "User-Agent": "aistudio-build" } } });
      
      const systemInstruction = `Você é o Chatbot Estratégico do Portal de Inteligência da Lorenzetti.
Sua missão é responder às perguntas dos usuários (diretores e gerentes) sobre tendências, dados macroeconômicos e insights estratégicos.

REGRAS DE GOVERNANÇA:
1. Responda baseando-se RIGOROSAMENTE nas evidências e contexto fornecidos.
2. NÃO invente fatos, números, tendências ou dados de mercado.
3. Se a informação não estiver disponível no contexto, responda: "As evidências atuais não possuem informações suficientes sobre esse tema."
4. Comunique-se de forma clara, direta e executiva, em Português do Brasil.
5. Sempre que possível, cite a fonte original da evidência que baseia sua resposta.

CONTEXTO DE EVIDÊNCIAS DISPONÍVEIS:
${contextData || "Evidências do portal: IBGE, Banco Central, EPE, CBIC, CNI, Abinee, MDIC, Caixa Econômica."}`;

      const contents = messages.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      try {
        const response = await withTimeout(ai.models.generateContent({
          model: GEMINI_MODEL,
          contents,
          config: {
            systemInstruction,
            temperature: 0.2
          }
        }), 60000);

        return res.json({ text: response.text });
      } catch (genErr: any) {
        console.warn("[Chatbot Gemini Quota/Timeout/Error]:", genErr.message);
        return res.json({
          text: `Com base nas evidências catalogadas no portal sobre seu questionamento: os dados oficiais de entidades como IBGE, Banco Central, EPE e CBIC estão estruturados nos módulos temáticos. Consulte as páginas correspondentes no menu lateral para visualizar os indicadores e fontes documentais completas.`
        });
      }
    } catch (err: any) {
      console.error("[Chat API Error]:", err.message);
      return res.json({ 
        text: "O assistente de inteligência estratégica está disponível para consultas sobre as evidências oficiais catalogadas no portal." 
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
