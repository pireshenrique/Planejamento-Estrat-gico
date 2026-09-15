const fs = require('fs');

let state = fs.readFileSync('src/data/strategicReportState.ts', 'utf-8');

state = state.replace(
  "  evidenceIds: string[]; // Rastreabilidade obrigatória: IDs das evidências no sistema (mínimo 2)",
  "  supportingPageIds?: string[];\n  supportingFactIds?: string[];\n  evidenceIds: string[]; // Rastreabilidade obrigatória: IDs das evidências no sistema (mínimo 2)"
);

// update FundamentacaoFactual interface if there is one
if (state.includes('export interface FundamentacaoFactual {')) {
    state = state.replace(
        "export interface FundamentacaoFactual {\n  afirmacao: string;\n  evidenceId: string;\n  source: string;\n}",
        "export interface FundamentacaoFactual {\n  afirmacao: string;\n  evidenceId?: string;\n  factId?: string;\n  source: string;\n}"
    );
}

fs.writeFileSync('src/data/strategicReportState.ts', state);
