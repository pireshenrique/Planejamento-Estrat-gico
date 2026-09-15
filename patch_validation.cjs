const fs = require('fs');

let server = fs.readFileSync('server.ts', 'utf-8');

const oldLoop = `        for (const cand of candidates) {
          if (!Array.isArray(cand.fundamentacao) || cand.fundamentacao.length === 0) {
            console.log(\`[Gate de Publicação] Rejeitada: \${cand.titulo}. Nenhuma fundamentação.\`);
            continue;
          }

          // Validação da fundamentação
          const validFundamentacao = cand.fundamentacao.filter((f: any) => {
            const ev = rawEvidences.find((e: any) => e.id === f.evidenceId);
            return isStrategicallyUsableEvidence(ev);
          });

          // Pelo menos 2 fundamentações válidas
          if (validFundamentacao.length < 2) {
            console.log(\`[Gate de Publicação] Rejeitada: \${cand.titulo}. Fundamentação insuficiente (\${validFundamentacao.length}/2).\`);
            continue; // NAO PUBLICA
          }

          // Promove ou mantém ID
          const isExistingMT = cand.id && cand.id.startsWith("MT-");
          const finalId = isExistingMT ? cand.id : \`MT-\${String(mtCounter).padStart(3, '0')}\`;
          mtCounter++;

          // Filtra ou sobrecreve impactos se fraco
          let finalRiscos = cand.riscosLorenzetti || [];
          let finalOportunidades = cand.oportunidadesLorenzetti || [];
          if (validFundamentacao.length < 3) {
             finalRiscos = ['Evidência insuficiente para detalhar implicações'];
             finalOportunidades = ['Evidência insuficiente para detalhar implicações'];
          }

          const uniqueEvidenceIds = Array.from(new Set(validFundamentacao.map((f: any) => f.evidenceId)));
          const uniqueSourceIds = Array.from(new Set(validFundamentacao.map((f: any) => f.source)));

          validatedLeituras.push({
            id: finalId,
            numero: validatedLeituras.length + 1,
            titulo: cand.titulo,
            sinal: cand.sinal,
            tendencia: cand.tendencia,
            riscosLorenzetti: finalRiscos,
            oportunidadesLorenzetti: finalOportunidades,
            impacto: cand.impacto || 'Médio',
            horizonte: cand.horizonte || 'Médio prazo',
            temasRelacionados: cand.temasRelacionados || [],
            evidenceIds: uniqueEvidenceIds,
            sourceIds: uniqueSourceIds,
            fundamentacao: validFundamentacao
          });
        }`;

const newLoop = `        for (const cand of candidates) {
          // Validação programática
          const validPageIds = (cand.supportingPageIds || []).filter((id: string) => 
             strategicPages?.some((p: any) => p.pageId === id)
          );
          
          const validFactIds = (cand.supportingFactIds || []).filter((id: string) => 
             strategicPages?.some((p: any) => p.factualContent?.some((f: any) => f.id === id))
          );
          
          const validEvidenceIds = (cand.evidenceIds || []).filter((id: string) =>
             validEvidences.some((e: any) => e.id === id)
          );
          
          const validFundamentacao = (cand.fundamentacao || []).filter((f: any) => {
             // Aceita se tiver factId válido ou evidenceId válido
             const hasValidFact = f.factId && validFactIds.includes(f.factId);
             const hasValidEv = f.evidenceId && validEvidenceIds.includes(f.evidenceId);
             return hasValidFact || hasValidEv;
          });

          if (validPageIds.length === 0 && validEvidenceIds.length === 0) {
            console.log(\`[Gate de Publicação] Rejeitada: \${cand.titulo}. Nenhuma página ou evidência válida suporta a candidata.\`);
            continue;
          }

          if (validFundamentacao.length === 0) {
            console.log(\`[Gate de Publicação] Rejeitada: \${cand.titulo}. Fundamentação insuficiente.\`);
            continue; 
          }

          // Promove ou mantém ID
          const isExistingMT = cand.id && cand.id.startsWith("MT-");
          const finalId = isExistingMT ? cand.id : \`MT-\${String(mtCounter).padStart(3, '0')}\`;
          mtCounter++;

          let finalRiscos = cand.riscosLorenzetti || [];
          let finalOportunidades = cand.oportunidadesLorenzetti || [];
          if (validFundamentacao.length < 2 && validFactIds.length < 2) {
             finalRiscos = ['Evidência insuficiente para detalhar implicações de risco'];
             finalOportunidades = ['Evidência insuficiente para detalhar oportunidades'];
          }

          const uniqueSourceIds = Array.from(new Set(validFundamentacao.map((f: any) => f.source).filter(Boolean)));

          validatedLeituras.push({
            id: finalId,
            numero: validatedLeituras.length + 1,
            titulo: cand.titulo,
            sinal: cand.sinal,
            tendencia: cand.tendencia,
            riscosLorenzetti: finalRiscos,
            oportunidadesLorenzetti: finalOportunidades,
            impacto: cand.impacto || 'Médio',
            horizonte: cand.horizonte || 'Médio prazo',
            temasRelacionados: cand.temasRelacionados || [],
            supportingPageIds: validPageIds,
            supportingFactIds: validFactIds,
            evidenceIds: validEvidenceIds,
            sourceIds: uniqueSourceIds,
            fundamentacao: validFundamentacao
          });
        }`;

server = server.replace(oldLoop, newLoop);
fs.writeFileSync('server.ts', server);
