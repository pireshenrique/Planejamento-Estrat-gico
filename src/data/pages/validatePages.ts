import { ALL_STRATEGIC_PAGES } from './strategicPagesRegistry';

export function validateAllPages(): boolean {
  let hasError = false;
  const allFactIds = new Set<string>();

  console.log(`[VALIDATOR] Iniciando validação de ${ALL_STRATEGIC_PAGES.length} páginas estratégicas...`);

  const lote3Pages = ['perfil-consumo', 'china', 'estados-unidos'];

  for (const page of ALL_STRATEGIC_PAGES) {
    if (!page.pageId || !page.pageTitle || !page.theme || !page.status) {
      console.error(`❌ [${page.pageId}] Metadados básicos ausentes.`);
      hasError = true;
    }

    if (page.status === 'placeholder') {
      if (page.factualContent.length > 0 || page.existingAnalysis.length > 0) {
        console.error(`❌ [${page.pageId}] Página placeholder não pode conter fatos ou análises.`);
        hasError = true;
      }
      continue;
    }

    // Validação de fontes
    const sourceIds = new Set(page.sources.map(s => s.id));

    // Validação de fatos
    for (const fact of page.factualContent) {
      if (!fact.id) {
        console.error(`❌ [${page.pageId}] Fato sem ID.`);
        hasError = true;
      }

      if (allFactIds.has(fact.id)) {
        console.error(`❌ ID do fato duplicado globalmente: ${fact.id}`);
        hasError = true;
      }
      allFactIds.add(fact.id);

      if (!fact.statement || fact.statement.trim() === '') {
        console.error(`❌ [${page.pageId}] Fato sem statement: ${fact.id}`);
        hasError = true;
      }

      // Para páginas do Lote 3, aplicar validação estrita de governança
      if (lote3Pages.includes(page.pageId)) {
        if (!fact.period || fact.period.trim() === '') {
          console.error(`❌ [${page.pageId}] Fato sem período: ${fact.id}`);
          hasError = true;
        }

        if (!fact.sourceId || !sourceIds.has(fact.sourceId)) {
          console.error(`❌ [${page.pageId}] Fato com sourceId inválido/inexistente (${fact.sourceId}): ${fact.id}`);
          hasError = true;
        }

        if (/Lorenzetti|fornecimento de materiais|quadros elétricos/i.test(fact.statement) && page.pageId === 'china') {
          console.error(`❌ [${page.pageId}] Fato violando regra de Lorenzetti: ${fact.statement}`);
          hasError = true;
        }
      }
    }
  }

  if (hasError) {
    console.error(`\n❌ Validação FALHOU! Corrija os erros acima.`);
    return false;
  } else {
    console.log(`\n✅ Todas as ${ALL_STRATEGIC_PAGES.length} páginas foram validadas com SUCESSO! Total de fatos: ${allFactIds.size}`);
    return true;
  }
}

if (process.argv[1]?.endsWith('validatePages.ts')) {
  const ok = validateAllPages();
  if (!ok) process.exit(1);
}
