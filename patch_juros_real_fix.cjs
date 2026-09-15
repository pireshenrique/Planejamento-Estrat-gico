const fs = require('fs');

let content = fs.readFileSync('src/components/economia-brasileira/juros/JurosRealView.tsx', 'utf-8');

const reps = {
  "{JUROS_REAL_PAGE.existingAnalysis[0]}": "{JUROS_REAL_DATA.strategicAnalysis.observe.summary}",
  "JUROS_REAL_PAGE.existingAnalysis.slice(1, 4).map((note, index) => (": "JUROS_REAL_PAGE.existingAnalysis.slice(0, 3).map((note, index) => (",
  "{JUROS_REAL_PAGE.existingAnalysis[4]}": "{JUROS_REAL_DATA.strategicAnalysis.companyImpact.summary}",
  "JUROS_REAL_PAGE.existingAnalysis.slice(5).map((note, index) => (": "JUROS_REAL_PAGE.existingAnalysis.slice(3).map((note, index) => ("
};

for (const [k, v] of Object.entries(reps)) {
  content = content.replace(k, v);
}

fs.writeFileSync('src/components/economia-brasileira/juros/JurosRealView.tsx', content);
