import { ALL_STRATEGIC_PAGES } from "./src/data/pages/strategicPagesRegistry";
import { PORTAL_STRATEGIC_GROUPS, ALL_PORTAL_SUBTHEMES } from "./src/data/portalNavigation";

let totalRotas = ALL_PORTAL_SUBTHEMES.length;
let rotasNoRegistry = new Set(ALL_STRATEGIC_PAGES.map(p => p.portalRouteId));

let totalEntidades = ALL_STRATEGIC_PAGES.length;
let entidadesAnalyzable = ALL_STRATEGIC_PAGES.filter(p => p.status === 'analyzable').length;
let entidadesPlaceholder = ALL_STRATEGIC_PAGES.filter(p => p.status === 'placeholder').length;

let rotasAnalyzableCount = 0;
let rotasPlaceholderCount = 0;

rotasNoRegistry.forEach(routeId => {
  const pages = ALL_STRATEGIC_PAGES.filter(p => p.portalRouteId === routeId);
  if (pages.some(p => p.status === 'analyzable')) {
    rotasAnalyzableCount++;
  } else {
    rotasPlaceholderCount++;
  }
});

let missingRoutes = ALL_PORTAL_SUBTHEMES.filter(r => !rotasNoRegistry.has(r.id));

let facts = 0;
let indicators = 0;
let analyses = 0;
let sources = new Set();
let sourceLinks = 0;
let evidences = new Set();
let evidenceLinks = 0;

ALL_STRATEGIC_PAGES.forEach(p => {
  if (p.factualContent) {
    facts += p.factualContent.length;
    indicators += p.factualContent.filter(f => f.kind === 'indicator').length;
  }
  if (p.existingAnalysis) {
    analyses += p.existingAnalysis.length;
  }
  if (p.sources) {
    p.sources.forEach(s => {
      sources.add(s.id);
      sourceLinks++;
    });
  }
  if (p.evidenceIds) {
    p.evidenceIds.forEach(e => {
      evidences.add(e);
      evidenceLinks++;
    });
  }
});

console.log("=== ROTAS ===");
console.log(`Total oficiais: ${totalRotas}`);
console.log(`Rotas Analyzable (únicas): ${rotasAnalyzableCount}`);
console.log(`Rotas Placeholder (únicas): ${rotasPlaceholderCount}`);
console.log(`Rotas ausentes no registry: ${missingRoutes.length}`);
console.log(`Cobertura geral: ${((rotasNoRegistry.size / totalRotas) * 100).toFixed(1)}%`);

console.log("\n=== ENTIDADES ANALÍTICAS ===");
console.log(`Total: ${totalEntidades}`);
console.log(`Analyzable: ${entidadesAnalyzable}`);
console.log(`Placeholder: ${entidadesPlaceholder}`);

console.log("\n=== CONTEÚDO ===");
console.log(`Facts: ${facts}`);
console.log(`Indicators: ${indicators}`);
console.log(`Analyses: ${analyses}`);
console.log(`Sources únicas: ${sources.size}`);
console.log(`Vínculos de sources: ${sourceLinks}`);
console.log(`Evidências únicas: ${evidences.size}`);
console.log(`Vínculos de evidências: ${evidenceLinks}`);
