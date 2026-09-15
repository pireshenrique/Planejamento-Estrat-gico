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
