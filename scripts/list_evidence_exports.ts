import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('src/data/evidences');
for (const f of files) {
  const full = path.join('src/data/evidences', f);
  const content = fs.readFileSync(full, 'utf-8');
  const exports = content.match(/export (?:const|function|interface|type) (\w+)/g);
  console.log(f, '->', exports ? exports.join(', ') : 'no exports');
}
