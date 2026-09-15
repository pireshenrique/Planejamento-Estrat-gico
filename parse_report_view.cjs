const fs = require('fs');
const filePath = './src/components/layout/StrategicReportView.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Print out some key search terms to see where they are
function findAndPrint(searchStr) {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(searchStr)) {
      console.log(`Line ${i + 1}: ${lines[i].trim()}`);
    }
  }
}

console.log("--- Atualizar análise ---");
findAndPrint("Atualizar análise");
console.log("--- Forçar reavaliação ---");
findAndPrint("Forçar reavaliação");
console.log("--- Exportar Relatório Publicado ---");
findAndPrint("Exportar Relatório Publicado");

