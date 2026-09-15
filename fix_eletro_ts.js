import fs from 'fs';

let content = fs.readFileSync('src/data/pages/Eletroeletronico.ts', 'utf-8');
const tempFactsMatch = content.match(/export const additionalFacts = \[([\s\S]*?)\];/);
if (tempFactsMatch) {
  const additionalFactsString = tempFactsMatch[1].trim();
  content = content.replace(/export const additionalFacts = \[[\s\S]*?\];/, '');
  
  content = content.replace(/existingAnalysis: \[\]/, `existingAnalysis: [], // placeholder\n  `);
  content = content.replace(/\]\,\n  existingAnalysis: \[\]/, `,\n${additionalFactsString}\n  ],\n  existingAnalysis: []`);
  
  fs.writeFileSync('src/data/pages/Eletroeletronico.ts', content);
}
