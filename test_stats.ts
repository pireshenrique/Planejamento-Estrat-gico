import { getAllSystemEvidences } from "./src/data/portalMetrics";
import { isStrategicallyUsableEvidence } from "./src/data/strategicReportState";

const all = getAllSystemEvidences();
const valid = all.filter(isStrategicallyUsableEvidence);
console.log(`getAllSystemEvidences encontra: ${all.length}`);
console.log(`são válidos: ${valid.length}`);
