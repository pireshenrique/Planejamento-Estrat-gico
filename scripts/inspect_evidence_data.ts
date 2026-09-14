import fs from 'fs';
import path from 'path';

// Let's inspect data files in src/data and components
function findFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(fullPath));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allFiles = findFiles('src');
console.log('Total files found:', allFiles.length);

interface EvidenceItem {
  file: string;
  title: string;
  source: string;
  url: string;
  tag?: string;
  dateStr?: string;
}

const evidences: EvidenceItem[] = [];

// Simple line-by-line parser looking for url: and (source: or title:)
for (const file of allFiles) {
  // Skip test/script files if any
  if (file.includes('node_modules') || file.includes('dist')) continue;
  
  const content = fs.readFileSync(file, 'utf-8');
  
  // Quick check if file mentions "url:" or "source:"
  if (!content.includes('url:') && !content.includes('source:')) continue;
  
  // Regex to extract object fields in evidence-like objects
  // An evidence typically has:
  // url: 'http...', source: '...', title: '...'
  const lines = content.split('\n');
  let currentObj: Partial<EvidenceItem> | null = null;
  let braceDepth = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('{')) {
      // maybe starting an object
      currentObj = { file };
    }
    
    if (currentObj) {
      const urlMatch = line.match(/url\s*:\s*['"`](https?:\/\/[^'"`]+)['"`]/);
      if (urlMatch) currentObj.url = urlMatch[1];
      
      const sourceMatch = line.match(/source\s*:\s*['"`]([^'"`]+)['"`]/);
      if (sourceMatch) currentObj.source = sourceMatch[1];
      
      const titleMatch = line.match(/title\s*:\s*['"`]([^'"`]+)['"`]/);
      if (titleMatch) currentObj.title = titleMatch[1];
      
      const tagMatch = line.match(/tag\s*:\s*['"`]([^'"`]+)['"`]/);
      if (tagMatch) currentObj.tag = tagMatch[1];
      
      const dateMatch = line.match(/dateStr\s*:\s*['"`]([^'"`]+)['"`]/);
      if (dateMatch) currentObj.dateStr = dateMatch[1];
      
      if (line.includes('}') && (currentObj.url || currentObj.source || currentObj.title)) {
        // If it has at least url and (title or source)
        if (currentObj.url && (currentObj.title || currentObj.source)) {
          evidences.push({
            file,
            title: currentObj.title || '',
            source: currentObj.source || '',
            url: currentObj.url || '',
            tag: currentObj.tag,
            dateStr: currentObj.dateStr
          });
        }
        currentObj = null;
      }
    }
  }
}

console.log('Total extracted evidences with URL:', evidences.length);

// Normalize sources function
function normalizeSource(source: string, url: string): string {
  let s = (source || '').trim();
  
  // If empty source, derive from domain
  if (!s && url) {
    try {
      const hostname = new URL(url).hostname.replace(/^www\./, '');
      return hostname.toLowerCase();
    } catch {
      return 'fonte-externa';
    }
  }
  
  // Normalization dictionary / rules
  const lower = s.toLowerCase();
  
  if (lower.includes('ibge') || lower.includes('geografia e estatística') || lower.includes('sidra')) {
    return 'IBGE (Instituto Brasileiro de Geografia e Estatística)';
  }
  if (lower.includes('banco central') || lower.includes('bcb.gov.br') || lower.includes('relatório focus') || lower.includes('copom')) {
    return 'Banco Central do Brasil (BCB / Focus)';
  }
  if (lower.includes('ipea') || lower.includes('pesquisa econômica aplicada')) {
    return 'IPEA (Instituto de Pesquisa Econômica Aplicada)';
  }
  if (lower.includes('fgv') || lower.includes('getulio vargas') || lower.includes('getúlio vargas') || lower.includes('ibre')) {
    return 'FGV (Fundação Getulio Vargas / IBRE)';
  }
  if (lower.includes('cni') || lower.includes('confederação nacional da indústria')) {
    return 'CNI (Confederação Nacional da Indústria)';
  }
  if (lower.includes('abinee') || lower.includes('associação brasileira da indústria elétrica')) {
    return 'Abinee';
  }
  if (lower.includes('fiesp')) {
    return 'FIESP';
  }
  if (lower.includes('dieese')) {
    return 'DIEESE';
  }
  if (lower.includes('folha de s.paulo') || lower.includes('folha de sp') || lower.includes('folha.uol')) {
    return 'Folha de S.Paulo';
  }
  if (lower.includes('valor econômico') || lower.includes('valor.globo')) {
    return 'Valor Econômico';
  }
  if (lower.includes('estadao') || lower.includes('estadão') || lower.includes('o estado de s. paulo')) {
    return 'O Estado de S. Paulo (Estadão)';
  }
  if (lower.includes('g1') || lower.includes('globo.com')) {
    return 'G1 / Grupo Globo';
  }
  if (lower.includes('agência brasil') || lower.includes('agenciabrasil') || lower.includes('ebc')) {
    return 'Agência Brasil / EBC';
  }
  if (lower.includes('infomoney')) {
    return 'InfoMoney';
  }
  if (lower.includes('exame')) {
    return 'Exame';
  }
  if (lower.includes('cnn brasil') || lower.includes('cnn')) {
    return 'CNN Brasil';
  }
  if (lower.includes('reuters')) {
    return 'Reuters';
  }
  if (lower.includes('bloomberg')) {
    return 'Bloomberg';
  }
  if (lower.includes('world bank') || lower.includes('banco mundial')) {
    return 'Banco Mundial (World Bank)';
  }
  if (lower.includes('imf') || lower.includes('fmi') || lower.includes('fundo monetário')) {
    return 'Fundo Monetário Internacional (FMI)';
  }
  if (lower.includes('ocde') || lower.includes('oecd')) {
    return 'OCDE';
  }
  if (lower.includes('wef') || lower.includes('fórum econômico mundial') || lower.includes('world economic forum')) {
    return 'Fórum Econômico Mundial (WEF)';
  }
  if (lower.includes('mte') || lower.includes('ministério do trabalho') || lower.includes('caged')) {
    return 'Ministério do Trabalho e Emprego (MTE / Caged)';
  }
  if (lower.includes('fazenda') || lower.includes('ministério da fazenda') || lower.includes('receita federal') || lower.includes('tesouro')) {
    return 'Ministério da Fazenda / Receita Federal / Tesouro Nacional';
  }
  if (lower.includes('anp') || lower.includes('agência nacional do petróleo')) {
    return 'ANP';
  }
  if (lower.includes('aneel')) {
    return 'ANEEL';
  }
  if (lower.includes('ons') || lower.includes('operador nacional do sistema')) {
    return 'ONS (Operador Nacional do Sistema)';
  }
  if (lower.includes('ecla') || lower.includes('cepal')) {
    return 'CEPAL (Nações Unidas)';
  }
  if (lower.includes('onu') || lower.includes('un ') || lower.includes('united nations')) {
    return 'Organização das Nações Unidas (ONU)';
  }
  if (lower.includes('brics') || lower.includes('ndb') || lower.includes('novo banco de desenvolvimento')) {
    return 'NDB / Cúpula dos BRICS';
  }
  if (lower.includes('fipezap') || lower.includes('fipe')) {
    return 'FIPE / FipeZAP';
  }
  if (lower.includes('abrainc')) {
    return 'ABRAINC';
  }
  if (lower.includes('cbic')) {
    return 'CBIC (Câmara Brasileira da Indústria da Construção)';
  }
  if (lower.includes('secovi')) {
    return 'Secovi';
  }
  if (lower.includes('sebrae')) {
    return 'Sebrae';
  }
  if (lower.includes('mckinsey')) {
    return 'McKinsey & Company';
  }
  if (lower.includes('pwc')) {
    return 'PwC';
  }
  if (lower.includes('deloitte')) {
    return 'Deloitte';
  }
  if (lower.includes('gartner')) {
    return 'Gartner';
  }
  if (lower.includes('ipea')) {
    return 'IPEA';
  }
  
  // Clean up punctuation, suffixes
  return s.split('/')[0].split('–')[0].split('-')[0].trim();
}

const uniqueSources = new Set<string>();
const uniqueUrls = new Set<string>();
const uniqueTitles = new Set<string>();

evidences.forEach(ev => {
  if (ev.url) uniqueUrls.add(ev.url.trim().toLowerCase());
  if (ev.title) uniqueTitles.add(ev.title.trim().toLowerCase());
  const norm = normalizeSource(ev.source, ev.url);
  if (norm) uniqueSources.add(norm.toLowerCase());
});

console.log('Unique URLs:', uniqueUrls.size);
console.log('Unique Titles:', uniqueTitles.size);
console.log('Unique Normalized Sources:', uniqueSources.size);

console.log('\nSample normalized sources (first 25):');
Array.from(uniqueSources).slice(0, 25).forEach(s => console.log(' -', s));
