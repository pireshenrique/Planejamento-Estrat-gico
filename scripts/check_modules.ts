import fs from 'fs';
import path from 'path';

// Import all known evidence modules and check their counts
async function checkAllModules() {
  console.log("Checking modules...");
  
  // 1. CENTRAL_EVIDENCES_REGISTRY
  const { CENTRAL_EVIDENCES_REGISTRY } = await import('../src/data/evidencesRegistry');
  let regCount = 0;
  for (const k in CENTRAL_EVIDENCES_REGISTRY) {
    regCount += CENTRAL_EVIDENCES_REGISTRY[k].length;
  }
  console.log('CENTRAL_EVIDENCES_REGISTRY count:', regCount);

  // 2. Geopolítica modules
  const geopoliticaFiles = ['africa', 'americaDoNorte', 'americaLatina', 'asia', 'conflitosTensoesInternacionais', 'economiaMundial', 'europa'];
  for (const f of geopoliticaFiles) {
    try {
      const mod = await import(`../src/data/geopolitica/${f}`);
      const keys = Object.keys(mod);
      console.log(`geopolitica/${f}: keys =`, keys);
    } catch (e: any) {
      console.log(`geopolitica/${f} error:`, e.message);
    }
  }

  // 3. Cenario habitacional
  const habitacionalFiles = ['deficitHabitacional', 'laresUnipessoais', 'mercadoImobiliario', 'programasSociais'];
  for (const f of habitacionalFiles) {
    try {
      const mod = await import(`../src/data/cenario-habitacional/${f}`);
      console.log(`cenario-habitacional/${f}: keys =`, Object.keys(mod));
    } catch (e: any) {
      console.log(`cenario-habitacional/${f} error:`, e.message);
    }
  }

  // 4. Commodities
  try {
    const mod = await import('../src/data/commodities/commodities');
    console.log('commodities: keys =', Object.keys(mod));
  } catch (e: any) {
    console.log('commodities error:', e.message);
  }

  // 5. Cenario logistico
  try {
    const mod = await import('../src/data/logistica/cenarioLogistico');
    console.log('cenarioLogistico: keys =', Object.keys(mod));
  } catch (e: any) {
    console.log('cenarioLogistico error:', e.message);
  }
}

checkAllModules();
