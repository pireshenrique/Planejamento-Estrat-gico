/**
 * REGRAS DE GOVERNANÇA E CONTRATO DE DADOS — EUROPA
 * 
 * Região monitorada: Europa (União Europeia e Zona do Euro).
 * 
 * 1. Dados cadastrados em EUROPA_DATA seguindo estritamente EuropaTopicData.
 * 2. A View (EuropaView) é estruturada com o mesmo layout e padrão de África, Ásia, América do Norte e América Latina,
 *    mas sem os botões de navegação internos, conforme solicitado pelo usuário.
 * 3. Campos obrigatórios essenciais para a renderização da página:
 *    - id, label, icon, flags, headline, statusSubtitle, description, observeSummary, observeNotes, lorenzettiSummary, lorenzettiImpacts, evidences.
 * 4. Padrões fixados para consistência visual do layout:
 *    - observeNotes: exatamente 3 itens (tupla [string, string, string]);
 *    - lorenzettiImpacts: exatamente 3 itens (tupla [string, string, string]);
 *    - flags: lista com code e name para renderização do banner;
 *    - evidences: notícias factuais com id, title, source, date, dateStr, url, summary.
 */

import {
  Globe,
  Building2,
  TrendingUp,
  ShieldCheck,
  Coins
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface EuropaFlag {
  code: string;
  name: string;
}

export interface EuropaEvidence {
  id: string;
  title: string;
  date: string;
  dateStr: string;
  source: string;
  url: string;
  summary: string;
  tag: string;
  category?: string;
  evidence?: string;
  brazilImpact?: string;
  lorenzettiImpact?: string;
}

export interface EuropaTopicData {
  id: string;
  label: string;
  icon: LucideIcon;
  flags: EuropaFlag[];
  headline: string;
  statusSubtitle: string;
  description: string;
  observeSummary: string;
  observeNotes: string[];
  lorenzettiSummary: string;
  lorenzettiImpacts: string[];
  evidences: EuropaEvidence[];
  badge?: string;
  badgeColor?: string;
}

export const EUROPA_DATA: EuropaTopicData = {
  id: 'europa',
  label: 'Europa',
  badge: 'União Europeia & Zona do Euro',
  badgeColor: 'blue',
  icon: Globe,
  flags: [{ code: 'eu', name: 'União Europeia' }],
  headline: 'A Europa desacelera em 2026 com um novo choque nos preços de petróleo e gás, que pressiona inflação, consumo e investimento. Ao mesmo tempo, a zona do euro enfrenta perspectiva de juros mais altos e a União Europeia lida com menor competitividade externa e novas tensões comerciais com os Estados Unidos.',
  statusSubtitle: 'Desaceleração econômica, choque de energia, inflação, competitividade externa e novas tensões comerciais',
  description: 'Acompanhamento das projeções econômicas da Comissão Europeia, choque de energia decorrente de tensões no Oriente Médio, inflação e juros do BCE, e impacto das tarifas comerciais norte-americanas.',
  observeSummary: 'A economia europeia perdeu força após o conflito no Oriente Médio provocar uma forte alta dos preços internacionais de energia. O choque voltou a pressionar a inflação, reduziu o poder de compra das famílias e enfraqueceu investimentos, enquanto a zona do euro passou a conviver com maior possibilidade de alta dos juros. Paralelamente, o baixo crescimento das exportações e novas tarifas americanas reforçam as dificuldades competitivas e comerciais enfrentadas pelo bloco.',
  observeNotes: [
    'A economia da União Europeia deve crescer 1,1% em 2026, abaixo dos 1,5% registrados em 2025 e 0,3 ponto percentual abaixo da previsão anterior. Para 2027, a expansão projetada melhora para 1,4%, ainda em ritmo moderado. Na zona do euro, formada pelos países da União Europeia que utilizam o euro como moeda, o crescimento esperado é menor, de 0,9% em 2026 e 1,2% em 2027, mostrando que a perda de ritmo atinge de forma relevante as principais economias do bloco.',
    'A desaceleração está diretamente ligada a um novo choque de energia provocado pelo conflito no Oriente Médio. Entre o fim de fevereiro e o fim de abril, o preço do gás subiu cerca de 50% e o petróleo avançou 65%, enquanto a forte redução dos fluxos de petróleo e gás natural liquefeito pelo Estreito de Ormuz restringiu a oferta mundial. Com isso, a inflação média da União Europeia deve subir de 2,5% em 2025 para 3,1% em 2026, antes de recuar para 2,4% em 2027.',
    'O encarecimento da energia se espalha para a economia porque aumenta custos de transporte, produção e distribuição, que depois chegam gradualmente aos preços pagos pelas famílias. A inflação mais alta reduz o crescimento da renda real disponível, ou seja, o poder de compra que sobra depois de descontada a inflação, enquanto o consumo privado deve crescer apenas 1,1% em 2026. O investimento também perde ritmo para 2,2%, com máquinas e equipamentos entre os segmentos mais afetados por custos elevados, juros altos e incerteza.'
  ],
  lorenzettiSummary: 'O choque energético nos preços de petróleo e gás, a perspectiva de juros elevados pelo BCE e as novas tarifas transatlânticas podem influenciar custos operacionais, taxas de câmbio e fluxos internacionais de suprimentos.',
  lorenzettiImpacts: [
    'Na zona do euro, a inflação anual subiu de 2,8% em junho para 2,9% em julho de 2026, permanecendo acima da meta de 2% do Banco Central Europeu. A inflação subjacente, que exclui alimentos e energia mais voláteis para mostrar pressões de preços mais persistentes, aumentou de 2,4% para 2,5%, enquanto os serviços avançaram 3,3%. Esse quadro reforçou a expectativa de novas altas dos juros, especialmente porque a economia cresceu 0,4% no segundo trimestre, o dobro do esperado. A elevação dos juros, porém, ainda dependia das próximas decisões do BCE e dos novos dados de inflação.',
    'A Europa também enfrenta dificuldades para transformar o crescimento do comércio mundial em expansão de suas próprias exportações. As vendas externas da União Europeia devem crescer apenas 0,9% em 2026, e o saldo entre exportações e importações deve retirar cerca de 0,4 ponto percentual do crescimento econômico no ano. Entre as causas estão investimento mais fraco, perda gradual de participação em alguns mercados e presença limitada em setores tecnológicos de crescimento rápido, especialmente quando comparada à expansão de economias asiáticas.',
    'A relação comercial com os Estados Unidos ganhou uma nova fonte de incerteza após Washington aplicar tarifas de 10% e 12,5% sobre bens de 60 parceiros comerciais, incluindo a União Europeia, alegando falhas na fiscalização de produtos associados a trabalho forçado. A União Europeia contestou essa justificativa, afirmou ter cumprido os compromissos do acordo comercial firmado com os Estados Unidos no ano anterior e passou a buscar esclarecimentos sobre a medida. O episódio mostra que, mesmo após o acordo anterior, as regras comerciais entre os dois blocos continuam sujeitas a mudanças e novas disputas.'
  ],
  evidences: [
    {
      id: 'ev-eu-ec-spring-forecast-2026',
      title: 'Crescimento europeu desacelera enquanto novo choque de energia eleva a inflação',
      date: '15/05/2026',
      dateStr: '15/05/2026',
      source: 'Comissão Europeia',
      category: 'Macroeconomia',
      tag: 'PIB & Energia',
      summary: 'A economia da União Europeia deve crescer 1,1% em 2026, abaixo dos 1,5% registrados em 2025, e avançar 1,4% em 2027. Ao mesmo tempo, a inflação deve subir para 3,1% em 2026, principalmente após o conflito no Oriente Médio provocar forte aumento nos preços internacionais de petróleo e gás. O choque energético também reduz o poder de compra das famílias, enfraquece investimentos e pressiona custos de produção e transporte, enquanto a recuperação prevista para 2027 permanece moderada.',
      evidence: 'Projeções da Comissão Europeia indicam crescimento de 1,1% em 2026 e 1,4% em 2027 para a UE, com inflação atingindo 3,1% após disparada nas cotações de petróleo e gás gerada pelo conflito no Oriente Médio.',
      brazilImpact: 'A desaceleração europeia e a pressão inflacionária de energia podem moderar a demanda do bloco por bens intermediários e influenciar preços de commodities energéticas.',
      lorenzettiImpact: 'Pode demandar acompanhamento das oscilações de custos internacionais de frete, combustíveis e transporte decorrentes do encarecimento do petróleo e gás.',
      url: 'https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/economic-forecasts/spring-2026-economic-forecast-slowdown-growth-energy-shock-drives-inflation_en'
    },
    {
      id: 'ev-eu-reuters-inflacao-bce-2026',
      title: 'Inflação da zona do euro volta a subir e reforça possibilidade de aumento dos juros',
      date: '31/07/2026',
      dateStr: '31/07/2026',
      source: 'Reuters',
      category: 'Política Monetária',
      tag: 'Inflação & Juros',
      summary: 'A inflação anual da zona do euro subiu de 2,8% em junho para 2,9% em julho de 2026, impulsionada principalmente pelo encarecimento do petróleo. A inflação subjacente, que exclui alimentos e energia mais voláteis e ajuda a mostrar a tendência mais persistente dos preços, também aumentou de 2,4% para 2,5%, enquanto os serviços avançaram 3,3%. O cenário fortalece a possibilidade de nova alta de juros pelo Banco Central Europeu, mas a decisão ainda não estava tomada e dependeria também dos próximos dados de inflação.',
      evidence: 'Taxa de inflação ao consumidor da zona do euro em 2,9% em julho de 2026, núcleo em 2,5% e serviços em 3,3%, sustentando discussões sobre nova alta de juros pelo BCE segundo reporte da Reuters.',
      brazilImpact: 'Juros mais altos ou prolongados na Europa tendem a influenciar taxas globais de financiamento e o diferencial de juros internacional.',
      lorenzettiImpact: 'Pode demandar acompanhamento das taxas de juros do BCE e seus reflexos na taxa de câmbio do euro, afetando custos de equipamentos industriais e insumos importados da Europa.',
      url: 'https://www.reuters.com/business/euro-zone-inflation-ticks-up-july-bolstering-rate-hike-case-2026-07-31/'
    },
    {
      id: 'ev-eu-reuters-tarifas-eua-2026',
      title: 'Novas tarifas dos EUA aumentam incerteza comercial com a União Europeia',
      date: '24/07/2026',
      dateStr: '24/07/2026',
      source: 'Reuters',
      category: 'Comércio Exterior',
      tag: 'Tarifas & Comércio',
      summary: 'Os Estados Unidos incluíram a União Europeia em uma nova rodada de tarifas de 10% e 12,5% aplicada a produtos de 60 parceiros comerciais, justificando a medida por supostas falhas na aplicação de restrições relacionadas a trabalho forçado. A União Europeia afirmou não esperar ser incluída na medida e decidiu buscar esclarecimentos de Washington, especialmente porque considera ter cumprido os compromissos de um acordo comercial transatlântico firmado no ano anterior. A nova disputa adiciona incerteza à relação comercial entre os dois blocos e ocorre em um momento em que empresas europeias já enfrentam custos elevados de energia e menor competitividade externa.',
      evidence: 'Inclusão da UE em tarifas adicionais dos EUA de 10% e 12,5%, questionamento de Bruxelas sobre a justificativa da medida e elevação de atritos comerciais transatlânticos reportados pela Reuters.',
      brazilImpact: 'A imposição de tarifas dos EUA sobre a UE pode gerar desvios de comércio internacional e impulsionar a busca de fornecedores ou mercados alternativos.',
      lorenzettiImpact: 'Pode representar risco de instabilidade nas cadeias globais de suprimentos e pode criar oportunidades na reorganização de fluxos de insumos manufaturados.',
      url: 'https://www.reuters.com/business/eus-kallas-questions-us-rationale-tariffs-bloc-seeks-clarification-2026-07-24/'
    }
  ]
};
