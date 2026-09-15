/**
 * COLETOR E AGREGADOR DE MÉTRICAS DO PORTAL ESTRATÉGICO LORENZETTI (2027-2037)
 * 
 * Regras de Governança e Diretrizes do Usuário:
 * - Evidências: Mapeamento de notícias, indicadores, dados estatísticos, estudos e fatos reais.
 *   Não conta elementos visuais, títulos soltos, insights gerados por IA ou cards decorativos.
 *   Desduplica itens por chave única de URL/Título.
 * - Fontes: Mapeamento de fontes distintas, normalizadas por órgão/instituição (ex: IBGE, BCB, IPEA, FGV, etc.)
 * - Subtemas: Contagem estrutural precisa a partir da arquitetura oficial do portal.
 * - Performance: Execução rápida em memória com cache otimizado para não onerar a renderização da Home.
 */

import { CENTRAL_EVIDENCES_REGISTRY, EvidenciaEstrategica } from './evidencesRegistry';
import { getSubthemesCount } from './portalNavigation';

// Importações diretas dos dados de evidências para agregação determinística
import { AGRO_EVIDENCES } from './evidences/agro';
import { BALANCO_EVIDENCES } from './evidences/balanco';
import { CAMBIO_EVIDENCES } from './evidences/cambio';
import { CHINA_EVIDENCES } from './evidences/china';
import { COMMODITY_EVIDENCES } from './evidences/commodity';
import { CONFIANCA_EVIDENCES } from './evidences/confianca';
import { CONSUMO_EVIDENCES } from './evidences/consumo';
import { DESEMPREGO_EVIDENCES } from './evidences/desemprego';
import { ELEICOES_EVIDENCES } from './evidences/eleicoes';
import { EMPREGO_EVIDENCES } from './evidences/emprego';
import { ENDIVIDAMENTO_EMPRESAS_EVIDENCES } from './evidences/endividamento_empresas';
import { ENDIVIDAMENTO_FAMILIAS_EVIDENCES } from './evidences/endividamento_familias';
import { EUA_EVIDENCES } from './evidences/eua';
import { EXPORTACOES_EVIDENCES } from './evidences/exportacoes';
import { GOVERNO_EVIDENCES } from './evidences/governo';
import { INDUSTRIA_EVIDENCES } from './evidences/industria';
import { INFLACAO_EVIDENCES } from './evidences/inflacao';
import { INVESTIMENTOS_EVIDENCES } from './evidences/investimentos';
import { JUROS_EVIDENCES } from './evidences/juros';
import { JUROS_REAL_EVIDENCES } from './evidences/juros_real';
import { PRIORIDADES_EVIDENCES, PERFIS_EVIDENCES } from './evidences/perfil_consumo';
import { PIB_EVIDENCES } from './evidences/pib';
import { PRODUCAO_EVIDENCES } from './evidences/producao';
import { RENDIMENTO_EVIDENCES } from './evidences/rendimento';
import { SERVICOS_EVIDENCES } from './evidences/servicos';
import { SOBRETAXAS_EVIDENCES } from './evidences/sobretaxas';
import { SONDAGEM_EVIDENCES } from './evidences/sondagem';

// Geopolítica
import { AFRICA_TOPICS } from './geopolitica/africa';
import { NORTH_AMERICA_TOPICS } from './geopolitica/americaDoNorte';
import { LATAM_TOPICS } from './geopolitica/americaLatina';
import { ASIA_TOPICS } from './geopolitica/asia';
import { CONFLICT_TOPICS } from './geopolitica/conflitosTensoesInternacionais';
import { ECONOMIC_TOPICS } from './geopolitica/economiaMundial';
import { EUROPA_DATA } from './geopolitica/europa';

// Habitação
import { DEFICIT_HABITACIONAL_DATA } from './cenario-habitacional/deficitHabitacional';
import { LARES_UNIPESSOAIS_DATA } from './cenario-habitacional/laresUnipessoais';
import { MERCADO_IMOBILIARIO_DATA } from './cenario-habitacional/mercadoImobiliario';
import { PROGRAMAS_SOCIAIS_TOPICS } from './cenario-habitacional/programasSociais';

// Commodities e Logística
import { COMMODITIES_TOPICS } from './commodities/commodities';
import { CENARIO_LOGISTICO_DATA } from './logistica/cenarioLogistico';

// Evidências Setoriais (Trabalho, ESG, Clima, Energia, Gerações, etc.)
import { EVIDENCIAS_SETORIAIS } from './evidences/setoriais';

export interface SystemEvidenceItem {
  id: string; // canonical string id
  originalId?: string | number;
  title: string;
  source: string;
  url: string;
  normalizedSource: string;
  topic?: string;
  summary?: string;
  headline?: string;
  dateStr?: string;
  verified?: boolean;
  tag?: string;
  category?: string;
  impacts?: string[];
}

export interface PortalMetricsSummary {
  subtemasCount: number;
  evidenciasCount: number;
  fontesCount: number;
  fontesList: string[];
}

/**
 * Normaliza o nome da fonte para evitar fragmentações como:
 * "IBGE - PNAD", "Agência IBGE" -> "IBGE"
 * "Banco Central - Copom", "BCB" -> "Banco Central do Brasil (BCB)"
 */
export function normalizeSource(rawSource: string, rawUrl: string): string {
  let s = (rawSource || '').trim();

  if (!s && rawUrl) {
    try {
      const hostname = new URL(rawUrl).hostname.replace(/^www\./, '');
      return hostname.toLowerCase();
    } catch {
      return 'Fonte Externa';
    }
  }

  // Remove sufixos operacionais como "- Artigo", "• Estudo", "/ PNAD"
  s = s.replace(/\s*[–•—|/]\s*(artigo|notícia|estudo|relatório|pnad|caged|focus|pesquisa|dados|mercado|análise).*$/i, '');

  const lower = s.toLowerCase();

  // Institutos de Pesquisa e Entidades Setoriais
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
  if (lower.includes('cna') || lower.includes('agricultura e pecuária')) {
    return 'CNA';
  }
  if (lower.includes('fiesp') || lower.includes('indústrias do estado de são paulo')) {
    return 'FIESP';
  }
  if (lower.includes('abinee') || lower.includes('elétrica e eletrônica')) {
    return 'Abinee';
  }
  if (lower.includes('anamaco')) {
    return 'Anamaco';
  }
  if (lower.includes('dieese')) {
    return 'DIEESE';
  }
  if (lower.includes('sebrae')) {
    return 'Sebrae';
  }
  if (lower.includes('serasa')) {
    return 'Serasa Experian';
  }
  if (lower.includes('canal solar')) {
    return 'Canal Solar';
  }
  if (lower.includes('canal rural')) {
    return 'Canal Rural';
  }
  if (lower.includes('epe') || lower.includes('pesquisa energética')) {
    return 'EPE (Empresa de Pesquisa Energética)';
  }
  if (lower.includes('great place to work') || lower.includes('gptw')) {
    return 'Great Place to Work (GPTW)';
  }
  if (lower.includes('pnud')) {
    return 'PNUD (ONU)';
  }
  if (lower.includes('wmo') || lower.includes('omm') || lower.includes('meteorological organization')) {
    return 'OMM / WMO (ONU)';
  }

  // Ministérios e Órgãos Públicos
  if (lower.includes('mme') || lower.includes('minas e energia')) {
    return 'Ministério de Minas e Energia (MME)';
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

  // Mercado Imobiliário e Habitação
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

  // Organismos Internacionais
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
  if (lower.includes('eia') || lower.includes('energy information administration')) {
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

  // Veículos de Imprensa e Economia
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

  // Consultorias e Institutos Globais
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

  return s.split(/[:;,]/)[0].trim();
}

// Cache em memória para acesso instantâneo na UI
let cachedMetrics: PortalMetricsSummary | null = null;
let cachedEvidences: SystemEvidenceItem[] | null = null;

export function getAllSystemEvidences(): SystemEvidenceItem[] {
  if (cachedEvidences) {
    return cachedEvidences;
  }

  const list: SystemEvidenceItem[] = [];
  const seenUrls = new Set<string>();
  const seenTitles = new Set<string>();

  function registerEv(ev: any, topic?: string) {
    const t = (ev.title || '').trim();
    const u = (ev.url || '').trim();
    const s = (ev.source || '').trim();

    if (!t && !u) return;

    const urlKey = u.toLowerCase();
    const titleKey = t.toLowerCase().replace(/[^\w\s]/gi, '').slice(0, 45);

    if (urlKey && seenUrls.has(urlKey)) return;
    if (titleKey && seenTitles.has(titleKey)) return;

    if (urlKey) seenUrls.add(urlKey);
    if (titleKey) seenTitles.add(titleKey);

    const norm = normalizeSource(s, u);
    
    // Create canonical string ID
    const topicPrefix = topic ? topic.toLowerCase().replace(/[^\w]/g, '-') : 'general';
    const canonicalId = ev.id ? ev.id : `ev-${topicPrefix}-${titleKey.replace(/\s+/g, '-').slice(0, 15)}`;

    list.push({
      id: canonicalId,
      originalId: ev.id,
      title: t,
      source: s,
      url: u,
      normalizedSource: norm,
      topic,
      summary: ev.summary,
      headline: ev.headline,
      dateStr: ev.dateStr,
      verified: ev.verified,
      tag: ev.tag,
      category: ev.category || ev.useCategory,
      impacts: ev.impacts
    });
  }

  // 1. Central Evidences Registry
  for (const topicKey in CENTRAL_EVIDENCES_REGISTRY) {
    const items = CENTRAL_EVIDENCES_REGISTRY[topicKey];
    if (Array.isArray(items)) {
      items.forEach(ev => registerEv(ev, topicKey));
    }
  }

  // 2. Módulos de Economia Brasileira
  const rawArrays = [
    { arr: AGRO_EVIDENCES, topic: 'Agropecuária' },
    { arr: BALANCO_EVIDENCES, topic: 'Balanço Comercial' },
    { arr: CAMBIO_EVIDENCES, topic: 'Câmbio' },
    { arr: CHINA_EVIDENCES, topic: 'China' },
    { arr: COMMODITY_EVIDENCES, topic: 'Commodities' },
    { arr: CONFIANCA_EVIDENCES, topic: 'Confiança do Consumidor' },
    { arr: CONSUMO_EVIDENCES, topic: 'Consumo das Famílias' },
    { arr: DESEMPREGO_EVIDENCES, topic: 'Desemprego' },
    { arr: ELEICOES_EVIDENCES, topic: 'Eleições' },
    { arr: EMPREGO_EVIDENCES, topic: 'Emprego' },
    { arr: ENDIVIDAMENTO_EMPRESAS_EVIDENCES, topic: 'Endividamento Empresas' },
    { arr: ENDIVIDAMENTO_FAMILIAS_EVIDENCES, topic: 'Endividamento Famílias' },
    { arr: EUA_EVIDENCES, topic: 'EUA' },
    { arr: EXPORTACOES_EVIDENCES, topic: 'Exportações' },
    { arr: GOVERNO_EVIDENCES, topic: 'Governo' },
    { arr: INDUSTRIA_EVIDENCES, topic: 'Indústria' },
    { arr: INFLACAO_EVIDENCES, topic: 'Inflação' },
    { arr: INVESTIMENTOS_EVIDENCES, topic: 'Investimentos' },
    { arr: JUROS_EVIDENCES, topic: 'Juros' },
    { arr: JUROS_REAL_EVIDENCES, topic: 'Juros Real' },
    { arr: PRIORIDADES_EVIDENCES, topic: 'Perfil de Consumo' },
    { arr: PERFIS_EVIDENCES, topic: 'Perfil de Consumo' },
    { arr: PIB_EVIDENCES, topic: 'PIB' },
    { arr: PRODUCAO_EVIDENCES, topic: 'Produção' },
    { arr: RENDIMENTO_EVIDENCES, topic: 'Rendimento' },
    { arr: SERVICOS_EVIDENCES, topic: 'Serviços' },
    { arr: SOBRETAXAS_EVIDENCES, topic: 'Sobretaxas' },
    { arr: SONDAGEM_EVIDENCES, topic: 'Sondagem Conjuntural' },
  ];

  rawArrays.forEach(({ arr, topic }) => {
    if (Array.isArray(arr)) {
      arr.forEach((ev: any) => {
        if (ev) registerEv(ev, topic);
      });
    }
  });

  // 3. Geopolítica
  const geoTopicCollections = [
    { topics: AFRICA_TOPICS, group: 'África' },
    { topics: NORTH_AMERICA_TOPICS, group: 'América do Norte' },
    { topics: LATAM_TOPICS, group: 'América Latina' },
    { topics: ASIA_TOPICS, group: 'Ásia' },
    { topics: CONFLICT_TOPICS, group: 'Conflitos Internacionais' },
    { topics: ECONOMIC_TOPICS, group: 'Economia Mundial' },
  ];

  geoTopicCollections.forEach(({ topics, group }) => {
    if (Array.isArray(topics)) {
      topics.forEach((t: any) => {
        if (t && Array.isArray(t.evidences)) {
          t.evidences.forEach((ev: any) => {
            registerEv(ev, `${group} - ${t.label || t.name || ''}`);
          });
        }
      });
    }
  });

  if (EUROPA_DATA && Array.isArray((EUROPA_DATA as any).evidences)) {
    (EUROPA_DATA as any).evidences.forEach((ev: any) => {
      registerEv(ev, 'Europa');
    });
  }

  // 4. Cenário Habitacional
  if (PROGRAMAS_SOCIAIS_TOPICS && Array.isArray(PROGRAMAS_SOCIAIS_TOPICS)) {
    PROGRAMAS_SOCIAIS_TOPICS.forEach((t: any) => {
      if (t && Array.isArray(t.evidences)) {
        t.evidences.forEach((ev: any) => {
          registerEv(ev, `Programas Sociais - ${t.label || ''}`);
        });
      }
    });
  }

  const habDataItems = [DEFICIT_HABITACIONAL_DATA, LARES_UNIPESSOAIS_DATA, MERCADO_IMOBILIARIO_DATA];
  habDataItems.forEach((habObj: any) => {
    if (habObj && Array.isArray(habObj.evidences)) {
      habObj.evidences.forEach((ev: any) => {
        registerEv(ev, 'Cenário Habitacional');
      });
    }
  });

  // 5. Commodities e Logística
  if (Array.isArray(COMMODITIES_TOPICS)) {
    COMMODITIES_TOPICS.forEach((t: any) => {
      if (t && Array.isArray(t.evidences)) {
        t.evidences.forEach((ev: any) => {
          registerEv(ev, `Commodities - ${t.label || ''}`);
        });
      }
    });
  }

  if (CENARIO_LOGISTICO_DATA && Array.isArray((CENARIO_LOGISTICO_DATA as any).evidences)) {
    (CENARIO_LOGISTICO_DATA as any).evidences.forEach((ev: any) => {
      registerEv(ev, 'Cenário Logístico');
    });
  }

  // 6. Evidências Setoriais (Trabalho, Clima, ESG, Energia, Carreira, etc.)
  if (Array.isArray(EVIDENCIAS_SETORIAIS)) {
    EVIDENCIAS_SETORIAIS.forEach(ev => {
      registerEv(ev, ev.category || 'Setorial');
    });
  }

  cachedEvidences = list;
  return list;
}

/**
 * Calcula e retorna as métricas consolidadas do sistema
 */
export function getPortalMetricsSummary(): PortalMetricsSummary {
  if (cachedMetrics) {
    return cachedMetrics;
  }

  const evidences = getAllSystemEvidences();
  const subtemasCount = getSubthemesCount();

  const uniqueSources = new Set<string>();
  evidences.forEach(ev => {
    if (ev.normalizedSource) {
      uniqueSources.add(ev.normalizedSource);
    }
  });

  const fontesList = Array.from(uniqueSources).sort((a, b) => a.localeCompare(b, 'pt-BR'));

  cachedMetrics = {
    subtemasCount,
    evidenciasCount: evidences.length,
    fontesCount: uniqueSources.size,
    fontesList
  };

  return cachedMetrics;
}
