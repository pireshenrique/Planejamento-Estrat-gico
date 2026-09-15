const fs = require("fs");
const path = require("path");

const pagesDir = "./src/data/pages";
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith(".ts") && f !== "types.ts" && f !== "strategicPagesRegistry.ts");

const exactMappings = {
  "rendimento-brasileiro": "eco-rendimento",
  "hab-lares-unipessoais": "hab-lares",
  "perfil-consumo": "mer-perfil",
  "jornada-compra": "mer-jornada",
  "ecommerce": "mer-varejo",
  "transformacao-varejo": "mer-varejo",
  "tendencias-produto": "mer-produto",
  "casa-conectada": "mer-produto",
  "transformacoes-sociais": "mer-estilos",
  "endividamento-familias": "eco-endividamento",
  "endividamento-empresas": "eco-endividamento"
};

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, "utf-8");
  
  const pageIdMatch = content.match(/pageId:\s*['"]([^'"]+)['"]/);
  if (!pageIdMatch) continue;
  
  const pageId = pageIdMatch[1];
  
  if (exactMappings[pageId]) {
    const newRoute = exactMappings[pageId];
    content = content.replace(/portalRouteId:\s*['"][^'"]+['"]/, `portalRouteId: "${newRoute}"`);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Updated ${file} with correct portalRouteId: ${newRoute}`);
  }
}
