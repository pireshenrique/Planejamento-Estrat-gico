const fs = require('fs');
const filePath = './src/data/strategicReportState.ts';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(/export function isEditorialMode\(\): boolean \{[\s\S]*?\}\n/, '');

content = content.replace(/export function getStrategicReportData\(\): StrategicReportData \{[\s\S]*?\}\n\n\/\*\*/, `export function getStrategicReportData(): StrategicReportData {
  if (PUBLISHED_REPORT !== null) {
    const leituras = Array.isArray(PUBLISHED_REPORT.leiturasEstrategicas) ? PUBLISHED_REPORT.leiturasEstrategicas : [];
    return {
      ...INITIAL_REPORT_DATA,
      ...PUBLISHED_REPORT,
      resumoExecutivo: PUBLISHED_REPORT.resumoExecutivo || INITIAL_REPORT_DATA.resumoExecutivo,
      governance: PUBLISHED_REPORT.governance || INITIAL_REPORT_DATA.governance,
      leiturasEstrategicas: leituras,
      macrotendencias: leituras,
      riscosConsolidados: Array.isArray(PUBLISHED_REPORT.riscosConsolidados) ? PUBLISHED_REPORT.riscosConsolidados : [],
      oportunidadesConsolidadas: Array.isArray(PUBLISHED_REPORT.oportunidadesConsolidadas) ? PUBLISHED_REPORT.oportunidadesConsolidadas : [],
      conexoesEstrategicas: Array.isArray(PUBLISHED_REPORT.conexoesEstrategicas) ? PUBLISHED_REPORT.conexoesEstrategicas : [],
      implicacoesLorenzetti: Array.isArray(PUBLISHED_REPORT.implicacoesLorenzetti) ? PUBLISHED_REPORT.implicacoesLorenzetti : [],
      temasMonitoramento: {
        prioridadeAlta: Array.isArray(PUBLISHED_REPORT.temasMonitoramento?.prioridadeAlta) ? PUBLISHED_REPORT.temasMonitoramento.prioridadeAlta : [],
        acompanhamento: Array.isArray(PUBLISHED_REPORT.temasMonitoramento?.acompanhamento) ? PUBLISHED_REPORT.temasMonitoramento.acompanhamento : [],
        sinaisEmergentes: Array.isArray(PUBLISHED_REPORT.temasMonitoramento?.sinaisEmergentes) ? PUBLISHED_REPORT.temasMonitoramento.sinaisEmergentes : [],
      },
      principaisFontes: Array.isArray(PUBLISHED_REPORT.principaisFontes) ? PUBLISHED_REPORT.principaisFontes : []
    };
  }
  return INITIAL_REPORT_DATA;
}

/**`);

content = content.replace(/export function saveStrategicReportData[\s\S]*?\}\n/, '');
content = content.replace(/const EDITORIAL_SESSION_KEY = 'portal_editorial_mode';/, '');
content = content.replace(/const STORAGE_KEY = 'strategic_report_draft';/, '');

// Hash function
const hashRegex = /export function computeStrategicContextHash\([\s\S]*?return `EV-\$\{validEvidences\.length\}-\$\{hashHex\}`;\n\}/;
content = content.replace(hashRegex, `export function computeStrategicContextHash(evidences: { id?: string; title: string; source: string; url?: string }[], strategicPages?: any[]): string {
  let pagesPart = '';
  if (strategicPages) {
    const pagesData = strategicPages.filter(p => p.status !== 'placeholder').map(p => {
      const facts = (p.factualContent || []).map((f: any) => \`\${f.id}:\${f.value}:\${f.unit}:\${f.period}:\${f.sourceId}:\${f.evidenceId}\`);
      const existingAnalysis = (p.existingAnalysis || []).join(',');
      const sources = (p.sources || []).map((s: any) => \`\${s.id}:\${s.name}:\${s.dateStr}:\${s.type}\`).join(',');
      return \`\${p.pageId}|\${p.status}|\${facts.join(',')}|\${existingAnalysis}|\${sources}\`;
    }).join('||');
    pagesPart = pagesData;
  }
  if ((!Array.isArray(evidences) || evidences.length === 0) && !strategicPages?.length) {
    return 'EV-0-EMPTY';
  }
  const validEvidences = evidences.filter(isStrategicallyUsableEvidence);
  const sortedStrings = (validEvidences
    .map(e => \`\${e.id || ''}:\${(e.title || '').trim().toLowerCase()}:\${(e.source || '').trim().toLowerCase()}\`)
    .sort()
    .join('|')) + '|PAGES:' + pagesPart;
  
  let hash = 0x811c9dc5;
  for (let i = 0; i < sortedStrings.length; i++) {
    hash ^= sortedStrings.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const hashHex = (hash >>> 0).toString(16).toUpperCase().padStart(8, '0');
  return \`EV-\${validEvidences.length}-\${hashHex}\`;
}`);

fs.writeFileSync(filePath, content, 'utf-8');
