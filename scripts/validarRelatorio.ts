import { validateAll } from '../src/data/report/validateCandidates';
import { getStrategicPagesContext } from '../src/data/pages/strategicPagesRegistry';
import { getAllSystemEvidences } from '../src/data/portalMetrics';
import { isStrategicallyUsableEvidence } from '../src/data/strategicReportState';
import { CANDIDATES } from '../src/data/report/candidates';

function main() {
  const pages = getStrategicPagesContext();
  let totalFatos = 0;
  const temasSet = new Set<string>();

  pages.forEach(p => {
    if (p.theme) temasSet.add(p.theme);
    totalFatos += p.factualContent?.length || 0;
  });

  const allEvs = getAllSystemEvidences();
  const validEvs = allEvs.filter(isStrategicallyUsableEvidence);

  console.log('\n  BASE DISPONÍVEL');
  console.log(`    páginas analisáveis: ${pages.length}`);
  console.log(`    fatos:               ${totalFatos}`);
  console.log(`    evidências válidas:  ${validEvs.length}`);
  console.log(`    temas distintos:     ${temasSet.size}`);

  const results = validateAll();
  let totalValidas = 0;
  let totalRejeitadas = 0;
  let totalAvisos = 0;

  console.log('\n  CANDIDATAS');
  if (results.length === 0) {
    console.log('    (Nenhuma candidata cadastrada em candidates.ts)');
  } else {
    results.forEach(r => {
      totalAvisos += r.avisos.length;
      if (r.isValid) {
        totalValidas++;
        const pagesCount = r.validPageIds.length;
        const factsCount = r.validFactIds.length;
        const themesCount = r.temasDistintos.length;
        console.log(`    ${r.candidateId.padEnd(9)} ${r.titulo.padEnd(32)} VÁLIDA`);
        console.log(`              ${factsCount} fatos · ${pagesCount} páginas · ${themesCount} temas`);
      } else {
        totalRejeitadas++;
        console.log(`    ${r.candidateId.padEnd(9)} ${r.titulo.padEnd(32)} REJEITADA`);
        console.log(`              ${r.motivo}`);
      }
    });
  }

  console.log('\n  RESUMO');
  console.log(`    propostas:  ${CANDIDATES.length}`);
  console.log(`    válidas:    ${totalValidas}`);
  console.log(`    rejeitadas: ${totalRejeitadas}`);
  console.log(`    avisos:     ${totalAvisos}`);

  const allAvisos: Array<{ id: string; aviso: string }> = [];
  results.forEach(r => {
    r.avisos.forEach(av => allAvisos.push({ id: r.candidateId, aviso: av }));
  });

  if (allAvisos.length > 0) {
    console.log('\n  AVISOS DE LINGUAGEM HIPOTÉTICA (R7):');
    allAvisos.forEach(item => {
      console.log(`    [${item.id}] ${item.aviso}`);
    });
  }
  console.log('');
}

main();
