import fs from 'fs';

let content = fs.readFileSync('src/data/pages/Eletroeletronico.ts', 'utf-8');

// Fix string values to numbers
content = content.replace(/value: '([^']*)'/g, (match, val) => {
  if (val.trim() === '') return `value: 0`;
  let parsed = parseFloat(val.replace(',', '.'));
  return `value: ${parsed}`;
});

// Remove description from sources
content = content.replace(/,\n      description: '.*?'/g, '');

fs.writeFileSync('src/data/pages/Eletroeletronico.ts', content);
