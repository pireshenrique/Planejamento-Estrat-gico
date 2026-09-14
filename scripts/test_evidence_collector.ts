import fs from 'fs';
import path from 'path';

// Load and parse all evidences from the codebase
export interface NormalizedEvidence {
  id?: string;
  title: string;
  source: string;
  url: string;
  normalizedSource: string;
  origin: string;
}

export function normalizeSourceName(rawSource: string, rawUrl: string): string {
  let s = (rawSource || '').trim();
  
  if (!s && rawUrl) {
    try {
      const hostname = new URL(rawUrl).hostname.replace(/^www\./, '');
      return hostname.toLowerCase();
    } catch {
      return 'Fonte Externa';
    }
  }

  // Remove trailing details like " - Artigo", " • Análise", etc.
  s = s.replace(/\s*[–•—|/]\s*(artigo|notícia|estudo|relatório|pnad|caged|focus|pesquisa|dados).*$/i, '');
  
  const lower = s.toLowerCase();
  
  // Official Statistics & Government
  if (lower.includes('ibge') || lower.includes('geografia e estatística') || lower.includes('sidra')) {
    return 'IBGE';
  }
  if (lower.includes('banco central') || lower.includes('bcb') || lower.includes('focus') || lower.includes('copom')) {
    return 'Banco Central do Brasil (BCB)';
  }
  if (lower.includes('ipea') || lower.includes('pesquisa econômica aplicada')) {
    return 'IPEA';
  }
  if (lower.includes('fgv') || lower.includes('getulio vargas') || lower.includes('getúlio vargas') || lower.includes('ibre')) {
    return 'FGV / IBRE';
  }
  if (lower.includes('cni') || lower.includes('confederação nacional da indústria')) {
    return 'CNI';
  }
  if (lower.includes('fiesp') || lower.includes('federação das indústrias do estado de são paulo')) {
    return 'FIESP';
  }
  if (lower.includes('abinee') || lower.includes('elétrica e eletrônica')) {
    return 'Abinee';
  }
  if (lower.includes('dieese')) {
    return 'DIEESE';
  }
  if (lower.includes('sebrae')) {
    return 'Sebrae';
  }
  if (lower.includes('mte') || lower.includes('ministério do trabalho') || lower.includes('caged')) {
    return 'Ministério do Trabalho e Emprego (MTE)';
  }
  if (lower.includes('fazenda') || lower.includes('receita federal') || lower.includes('tesouro nacional') || lower.includes('ministério da fazenda')) {
    return 'Ministério da Fazenda / Receita Federal';
  }
  if (lower.includes('mdic') || lower.includes('desenvolvimento, indústria')) {
    return 'MDIC';
  }
  if (lower.includes('anp') || lower.includes('petróleo')) {
    return 'ANP';
  }
  if (lower.includes('aneel') || lower.includes('energia elétrica')) {
    return 'ANEEL';
  }
  if (lower.includes('ons') || lower.includes('operador nacional do sistema')) {
    return 'ONS';
  }
  if (lower.includes('inpe') || lower.includes('pesquisas espaciais')) {
    return 'INPE';
  }
  if (lower.includes('inmet') || lower.includes('meteorologia')) {
    return 'INMET';
  }
  if (lower.includes('fundacentro')) {
    return 'Fundacentro';
  }
  if (lower.includes('tst') || lower.includes('tribunal superior do trabalho') || lower.includes('justiça do trabalho')) {
    return 'Tribunal Superior do Trabalho (TST)';
  }
  if (lower.includes('senado') || lower.includes('câmara dos deputados') || lower.includes('congresso nacional')) {
    return 'Congresso Nacional';
  }
  if (lower.includes('itamaraty') || lower.includes('relações exteriores')) {
    return 'Ministério das Relações Exteriores (Itamaraty)';
  }

  // Real estate & Housing
  if (lower.includes('fipe') || lower.includes('fipezap')) {
    return 'FIPE / FipeZAP';
  }
  if (lower.includes('abrainc')) {
    return 'ABRAINC';
  }
  if (lower.includes('cbic')) {
    return 'CBIC';
  }
  if (lower.includes('secovi')) {
    return 'Secovi-SP';
  }
  if (lower.includes('caixa') || lower.includes('cef')) {
    return 'Caixa Econômica Federal';
  }
  if (lower.includes('fundação joão pinheiro') || lower.includes('fjp')) {
    return 'Fundação João Pinheiro';
  }

  // International Organizations
  if (lower.includes('world bank') || lower.includes('banco mundial')) {
    return 'Banco Mundial (World Bank)';
  }
  if (lower.includes('imf') || lower.includes('fmi') || lower.includes('fundo monetário')) {
    return 'Fundo Monetário Internacional (FMI)';
  }
  if (lower.includes('oecd') || lower.includes('ocde')) {
    return 'OCDE';
  }
  if (lower.includes('wef') || lower.includes('fórum econômico mundial') || lower.includes('world economic forum')) {
    return 'Fórum Econômico Mundial (WEF)';
  }
  if (lower.includes('wto') || lower.includes('omc') || lower.includes('comércio mundial')) {
    return 'Organização Mundial do Comércio (OMC)';
  }
  if (lower.includes('un ') || lower.includes('onu') || lower.includes('united nations') || lower.includes('nações unidas')) {
    return 'Organização das Nações Unidas (ONU)';
  }
  if (lower.includes('who') || lower.includes('oms') || lower.includes('saúde mundial')) {
    return 'Organização Mundial da Saúde (OMS)';
  }
  if (lower.includes('ilo') || lower.includes('oit') || lower.includes('organização internacional do trabalho')) {
    return 'Organização Internacional do Trabalho (OIT)';
  }
  if (lower.includes('iea') || lower.includes('agência internacional de energia')) {
    return 'Agência Internacional de Energia (IEA)';
  }
  if (lower.includes('eia') || lower.includes('u.s. energy information')) {
    return 'EIA (EUA)';
  }
  if (lower.includes('ipcc')) {
    return 'IPCC (ONU)';
  }
  if (lower.includes('cepal')) {
    return 'CEPAL';
  }
  if (lower.includes('brics') || lower.includes('ndb') || lower.includes('novo banco de desenvolvimento')) {
    return 'Novo Banco de Desenvolvimento (NDB / BRICS)';
  }
  if (lower.includes('dane')) {
    return 'DANE (Colômbia)';
  }
  if (lower.includes('indec')) {
    return 'INDEC (Argentina)';
  }
  if (lower.includes('inegi')) {
    return 'INEGI (México)';
  }
  if (lower.includes('eurostat')) {
    return 'Eurostat';
  }
  if (lower.includes('bce') || lower.includes('european central bank') || lower.includes('banco central europeu')) {
    return 'Banco Central Europeu (BCE)';
  }
  if (lower.includes('federal reserve') || lower.includes('fed')) {
    return 'Federal Reserve (Fed)';
  }
  if (lower.includes('noaa')) {
    return 'NOAA';
  }

  // Major Press & Economic Media
  if (lower.includes('folha de s.paulo') || lower.includes('folha de sp') || lower.includes('folha.uol') || lower.includes('folha')) {
    return 'Folha de S.Paulo';
  }
  if (lower.includes('valor econômico') || lower.includes('valor.globo') || lower.includes('valor')) {
    return 'Valor Econômico';
  }
  if (lower.includes('o estado de s. paulo') || lower.includes('estadão') || lower.includes('estadao')) {
    return 'O Estado de S. Paulo (Estadão)';
  }
  if (lower.includes('g1') || lower.includes('globo.com') || lower.includes('o globo') || lower.includes('oglobo')) {
    return 'G1 / O Globo';
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
  if (lower.includes('financial times') || lower.includes('ft.com')) {
    return 'Financial Times';
  }
  if (lower.includes('the economist') || lower.includes('economist')) {
    return 'The Economist';
  }
  if (lower.includes('wall street journal') || lower.includes('wsj')) {
    return 'The Wall Street Journal';
  }
  if (lower.includes('forbes')) {
    return 'Forbes';
  }
  if (lower.includes('você sa') || lower.includes('voce sa') || lower.includes('você s/a')) {
    return 'Você S/A';
  }
  if (lower.includes('época negócios') || lower.includes('epoca negocios')) {
    return 'Época Negócios';
  }
  if (lower.includes('poder360') || lower.includes('poder 360')) {
    return 'Poder360';
  }
  if (lower.includes('jota')) {
    return 'JOTA';
  }
  if (lower.includes('uol')) {
    return 'UOL';
  }
  if (lower.includes('cbn')) {
    return 'Rádio CBN';
  }

  // Top Consultancies & Research Institutes
  if (lower.includes('mckinsey')) {
    return 'McKinsey & Company';
  }
  if (lower.includes('pwc') || lower.includes('pricewaterhousecoopers')) {
    return 'PwC';
  }
  if (lower.includes('deloitte')) {
    return 'Deloitte';
  }
  if (lower.includes('kpmg')) {
    return 'KPMG';
  }
  if (lower.includes('bcg') || lower.includes('boston consulting')) {
    return 'Boston Consulting Group (BCG)';
  }
  if (lower.includes('bain')) {
    return 'Bain & Company';
  }
  if (lower.includes('gartner')) {
    return 'Gartner';
  }
  if (lower.includes('idc')) {
    return 'IDC';
  }
  if (lower.includes('accenture')) {
    return 'Accenture';
  }
  if (lower.includes('manpower') || lower.includes('manpowergroup')) {
    return 'ManpowerGroup';
  }
  if (lower.includes('michael page') || lower.includes('pagegroup')) {
    return 'Michael Page';
  }
  if (lower.includes('robert half')) {
    return 'Robert Half';
  }
  if (lower.includes('wgsn')) {
    return 'WGSN';
  }
  if (lower.includes('statista')) {
    return 'Statista';
  }
  if (lower.includes('kantar')) {
    return 'Kantar';
  }
  if (lower.includes('nielsen')) {
    return 'NielsenIQ';
  }
  if (lower.includes('carnegie')) {
    return 'Carnegie Endowment';
  }
  if (lower.includes('brookings')) {
    return 'Brookings Institution';
  }
  if (lower.includes('chatham house')) {
    return 'Chatham House';
  }
  if (lower.includes('sipri')) {
    return 'SIPRI';
  }

  // Clean title capitalization
  return s.split(/[:;,]/)[0].trim();
}

// Function to collect all evidences and sources across the project
export async function collectSystemMetrics() {
  const allEvidences: NormalizedEvidence[] = [];
  const seenUrls = new Set<string>();
  const seenTitles = new Set<string>();

  function addEvidence(title: string, source: string, url: string, origin: string, id?: string) {
    const cleanTitle = (title || '').trim();
    const cleanUrl = (url || '').trim();
    const cleanSource = (source || '').trim();

    if (!cleanTitle && !cleanUrl) return;

    // Deduplication key
    const urlKey = cleanUrl.toLowerCase();
    const titleKey = cleanTitle.toLowerCase().replace(/[^\w\s]/gi, '').slice(0, 50);

    if (urlKey && seenUrls.has(urlKey)) return;
    if (titleKey && seenTitles.has(titleKey)) return;

    if (urlKey) seenUrls.add(urlKey);
    if (titleKey) seenTitles.add(titleKey);

    const normSource = normalizeSourceName(cleanSource, cleanUrl);

    allEvidences.push({
      id,
      title: cleanTitle,
      source: cleanSource,
      url: cleanUrl,
      normalizedSource: normSource,
      origin
    });
  }

  // 1. Central Evidences Registry
  const { CENTRAL_EVIDENCES_REGISTRY } = await import('../src/data/evidencesRegistry');
  for (const topic in CENTRAL_EVIDENCES_REGISTRY) {
    const items = CENTRAL_EVIDENCES_REGISTRY[topic];
    items.forEach(ev => addEvidence(ev.title, ev.source, ev.url, `evidencesRegistry/${topic}`, ev.id));
  }

  // 2. Data Evidences
  const evDataFiles = [
    'agro', 'balanco', 'cambio', 'china', 'commodity', 'confianca', 'consumo',
    'desemprego', 'eleicoes', 'emprego', 'endividamento_empresas', 'endividamento_familias',
    'eua', 'exportacoes', 'governo', 'industria', 'inflacao', 'investimentos',
    'juros_real', 'juros', 'perfil_consumo', 'pib', 'producao', 'rendimento',
    'servicos', 'sobretaxas', 'sondagem'
  ];

  for (const f of evDataFiles) {
    try {
      const mod = await import(`../src/data/evidences/${f}`);
      for (const k in mod) {
        if (Array.isArray(mod[k])) {
          mod[k].forEach((ev: any) => {
            if (ev && (ev.url || ev.title || ev.source)) {
              addEvidence(ev.title, ev.source, ev.url, `evidences/${f}`, ev.id);
            }
          });
        }
      }
    } catch {}
  }

  // 3. Geopolítica
  const geoFiles = ['africa', 'americaDoNorte', 'americaLatina', 'asia', 'conflitosTensoesInternacionais', 'economiaMundial', 'europa'];
  for (const f of geoFiles) {
    try {
      const mod = await import(`../src/data/geopolitica/${f}`);
      for (const k in mod) {
        const val = mod[k];
        if (Array.isArray(val)) {
          val.forEach((topic: any) => {
            if (topic && Array.isArray(topic.evidences)) {
              topic.evidences.forEach((ev: any) => {
                addEvidence(ev.title, ev.source, ev.url, `geopolitica/${f}`, ev.id);
              });
            }
          });
        }
      }
    } catch {}
  }

  // 4. Commodities
  try {
    const mod = await import('../src/data/commodities/commodities');
    for (const k in mod) {
      const val = (mod as any)[k];
      if (Array.isArray(val)) {
        val.forEach((topic: any) => {
          if (topic && Array.isArray(topic.evidences)) {
            topic.evidences.forEach((ev: any) => {
              addEvidence(ev.title, ev.source, ev.url, 'commodities', ev.id);
            });
          }
        });
      }
    }
  } catch {}

  // 5. Cenario Habitacional
  const habFiles = ['deficitHabitacional', 'laresUnipessoais', 'mercadoImobiliario', 'programasSociais'];
  for (const f of habFiles) {
    try {
      const mod = await import(`../src/data/cenario-habitacional/${f}`);
      for (const k in mod) {
        const val = mod[k];
        if (Array.isArray(val)) {
          val.forEach((topic: any) => {
            if (topic && Array.isArray(topic.evidences)) {
              topic.evidences.forEach((ev: any) => {
                addEvidence(ev.title, ev.source, ev.url, `cenario-habitacional/${f}`, ev.id);
              });
            }
          });
        }
      }
    } catch {}
  }

  // 6. Components with evidence declarations
  // Let's parse components in src/components/
  function scanDir(dir: string): string[] {
    let res: string[] = [];
    fs.readdirSync(dir).forEach(file => {
      const p = path.join(dir, file);
      if (fs.statSync(p).isDirectory()) {
        res = res.concat(scanDir(p));
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        res.push(p);
      }
    });
    return res;
  }

  const componentFiles = scanDir('src/components');
  for (const file of componentFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    if (!content.includes('Evidence') && !content.includes('url:')) continue;
    
    // Look for { id: '...', title: '...', source: '...', url: '...' } blocks
    const lines = content.split('\n');
    let obj: any = null;
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('{') && (trimmed.includes('id:') || trimmed.includes('title:') || trimmed.includes('url:'))) {
        obj = {};
      }
      if (obj) {
        const titleMatch = trimmed.match(/title\s*:\s*['"`]([^'"`]+)['"`]/);
        if (titleMatch) obj.title = titleMatch[1];

        const sourceMatch = trimmed.match(/source\s*:\s*['"`]([^'"`]+)['"`]/);
        if (sourceMatch) obj.source = sourceMatch[1];

        const urlMatch = trimmed.match(/url\s*:\s*['"`](https?:\/\/[^'"`]+)['"`]/);
        if (urlMatch) obj.url = urlMatch[1];

        const idMatch = trimmed.match(/id\s*:\s*['"`]([^'"`]+)['"`]/);
        if (idMatch) obj.id = idMatch[1];

        if (trimmed.includes('}') && (obj.url || obj.title)) {
          if (obj.title && (obj.url || obj.source)) {
            addEvidence(obj.title, obj.source || '', obj.url || '', file, obj.id);
          }
          obj = null;
        }
      }
    }
  }

  // Calculate unique normalized sources
  const uniqueSources = new Set<string>();
  allEvidences.forEach(ev => {
    if (ev.normalizedSource) {
      uniqueSources.add(ev.normalizedSource);
    }
  });

  return {
    totalEvidences: allEvidences.length,
    uniqueSourcesCount: uniqueSources.size,
    sourcesList: Array.from(uniqueSources).sort((a, b) => a.localeCompare(b, 'pt-BR')),
    evidences: allEvidences
  };
}

// Run test
collectSystemMetrics().then(res => {
  console.log('=== COLLECTED SYSTEM METRICS ===');
  console.log('Total Evidences:', res.totalEvidences);
  console.log('Total Unique Sources:', res.uniqueSourcesCount);
  console.log('Sources sample (first 30):');
  res.sourcesList.slice(0, 30).forEach(s => console.log('  -', s));
});
