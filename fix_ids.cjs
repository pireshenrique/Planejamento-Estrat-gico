const fs = require("fs");
const path = require("path");

const pagesDir = "./src/data/pages";
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith(".ts") && f !== "types.ts" && f !== "strategicPagesRegistry.ts");

const mappings = {
  "eco-macro-pib": "eco-macro",
  "juros-selic": "eco-macro",
  "juros-real": "eco-macro",
  "eco-inflacao": "eco-macro",
  "eco-cambio": "eco-macro",
  "endividamento-familias": "eco-endividamento",
  "endividamento-empresas": "eco-endividamento",
  "estados-unidos": "geo-america-norte",
  "china": "geo-asia"
};

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, "utf-8");
  
  if (content.includes("portalRouteId:")) continue;
  
  const match = content.match(/pageId:\s*(['"][^'"]+['"]),/);
  if (match) {
    const pageIdMatch = content.match(/pageId:\s*['"]([^'"]+)['"]/);
    const pageId = pageIdMatch[1];
    let portalRouteId = mappings[pageId] || pageId;
    
    content = content.replace(/pageId:\s*(['"][^'"]+['"]),/, `pageId: $1,\n  portalRouteId: "${portalRouteId}",`);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Updated ${file} with portalRouteId: ${portalRouteId}`);
  }
}
