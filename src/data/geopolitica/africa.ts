/**
 * REGRAS DE GOVERNANÇA E CONTRATO DE DADOS — ÁFRICA
 * 
 * Tópicos monitorados: África (Integração & AfCFTA), África do Sul e Quênia.
 * 
 * 1. Tópicos cadastrados em AFRICA_TOPICS seguindo estritamente AfricaTopicData.
 * 2. A View (AfricaView) é estruturada com o mesmo layout e padrão de América do Norte e América Latina.
 * 3. Campos obrigatórios essenciais para a renderização da página:
 *    - id, label, icon, flags, headline, statusSubtitle, description, observeSummary, observeNotes, lorenzettiSummary, lorenzettiImpacts, evidences.
 * 4. Padrões fixados para consistência visual do layout:
 *    - observeNotes: exatamente 3 itens (tupla [string, string, string]);
 *    - lorenzettiImpacts: exatamente 3 itens (tupla [string, string, string]);
 *    - flags: lista com code e name para renderização na Pill Bar e banners;
 *    - evidences: notícias factuais com id, title, source, date, dateStr, url, summary.
 */

import {
  Globe,
  Factory,
  TrendingUp
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type AfricaTopicId =
  | 'africa'
  | 'africa-do-sul'
  | 'quenia';

export interface AfricaFlag {
  code: string;
  name: string;
}

export interface AfricaEvidence {
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

export interface AfricaTopicData {
  id: AfricaTopicId;
  label: string;
  icon: LucideIcon;
  flags: AfricaFlag[];
  headline: string;
  statusSubtitle: string;
  description: string;
  observeSummary: string;
  observeNotes: [string, string, string];
  lorenzettiSummary: string;
  lorenzettiImpacts: [string, string, string];
  evidences: AfricaEvidence[];
  badge?: string;
  badgeColor?: string;
}

export const AFRICA_TOPICS: AfricaTopicData[] = [
  {
    id: 'africa',
    label: 'África',
    badge: 'Integração Continental & AfCFTA',
    badgeColor: 'emerald',
    icon: Globe,
    flags: [],
    headline: 'A África mantém crescimento econômico resiliente em meio à turbulência global, enquanto amplia compromissos financeiros e políticas públicas para expandir o acesso a formas mais limpas de cozinhar.',
    statusSubtitle: 'Crescimento do continente, desigualdade regional e avanço do financiamento para cocção limpa',
    description: 'Acompanhamento do PIB continental africano, impactos da inflação, diferenças regionais de crescimento e novos investimentos em tecnologias de menor emissão.',
    observeSummary: 'A economia africana segue crescendo apesar de pressões externas, mas o desempenho continua desigual entre as regiões e a inflação média ainda permanece elevada. Em paralelo, o continente amplia o esforço para substituir formas poluentes de cocção por alternativas mais limpas, com novos compromissos financeiros, expansão de políticas públicas e mobilização de recursos para acelerar essa transição.',
    observeNotes: [
      'A economia africana deve crescer 4,2% em 2026, após expansão estimada de 4,4% em 2025, e voltar a 4,4% em 2027. O dado indica que o continente mantém ritmo de crescimento relativamente resiliente mesmo em um ambiente internacional marcado por tensões geopolíticas, custos elevados de energia, cadeias de suprimentos pressionadas e condições financeiras globais mais apertadas.',
      'O desempenho econômico africano continua desigual entre as diferentes regiões do continente. A África Oriental permanece como a região de crescimento mais rápido, enquanto a África Austral deve avançar apenas 2,1% em 2026, mostrando que a resiliência do crescimento africano não ocorre de forma homogênea.',
      'Apesar da continuidade do crescimento, a inflação média do continente permanece elevada, em 10,4%. Esse patamar indica que a atividade econômica ainda convive com pressões relevantes sobre preços e poder de compra, o que ajuda a explicar por que o cenário africano combina expansão econômica com desafios importantes de estabilidade macroeconômica.'
    ],
    lorenzettiSummary: 'A expansão econômica regionalmente desigual e o avanço da adoção de eletricidade podem reconfigurar o perfil de acesso e poder de compra.',
    lorenzettiImpacts: [
      'Países africanos garantiram US$ 900 milhões em novos compromissos financeiros para ampliar o acesso a formas mais limpas de cozinhar. Com isso, o volume total mobilizado desde 2024 ultrapassa US$ 3,1 bilhões, mostrando avanço no esforço de financiamento para enfrentar um problema energético e social ainda muito amplo no continente.',
      'O avanço desses recursos responde a um desafio estrutural de grande escala: quase 1 bilhão de pessoas na África ainda dependem de combustíveis poluentes, como lenha e carvão, para cozinhar. A transição busca ampliar o uso de alternativas mais limpas, como GLP, etanol, biogás, eletricidade e outras tecnologias que reduzam emissões e danos à saúde.',
      'Além dos novos compromissos financeiros, a agenda de cocção limpa também vem avançando por meio de implementação e regulação. Cerca de US$ 740 milhões dos recursos anteriormente anunciados já haviam sido aplicados em 22 países africanos, e mais de 30 países adotaram 121 novas políticas relacionadas ao tema desde 2024, indicando que o movimento já combina promessa de financiamento com execução prática e mudanças institucionais.'
    ],
    evidences: [
      {
        id: 'ev-africa-growth-2026',
        title: 'África mantém crescimento resiliente, mas com diferenças relevantes entre regiões',
        date: '04/09/2026',
        dateStr: '04/09/2026',
        source: 'African Development Bank (AfDB)',
        category: 'Macroeconomia',
        tag: 'Crescimento Econômico',
        summary: 'A economia africana deve crescer 4,2% em 2026 e 4,4% em 2027, mostrando resiliência diante de tensões geopolíticas. O desempenho, porém, é desigual, com a África Oriental liderando a expansão, e uma inflação média continental de 10,4%.',
        evidence: 'A economia africana deve crescer 4,2% em 2026 e voltar a 4,4% em 2027. A África Oriental continua sendo a região de crescimento mais rápido. A África Austral deve avançar 2,1%. Inflação projetada de 10,4%.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências.',
        lorenzettiImpact: 'Pode representar risco ao poder de compra devido à inflação, ao mesmo tempo em que pode criar oportunidades concentradas no crescimento mais acelerado da África Oriental.',
        url: 'https://www.afdb.org/en/news-and-events/press-releases/africas-growth-holds-firm-amid-global-turbulence-says-2026-african-economic-outlook-93626?utm_source'
      },
      {
        id: 'ev-africa-clean-cooking-2026',
        title: 'África amplia financiamento para acesso a tecnologias de cocção mais limpa',
        date: '04/09/2026',
        dateStr: '04/09/2026',
        source: 'AP News',
        category: 'Energia',
        tag: 'Infraestrutura',
        summary: 'Países africanos asseguraram US$ 900 milhões em novos compromissos para acesso a formas mais limpas de cozinhar, buscando reduzir a dependência de quase 1 bilhão de pessoas de carvão e lenha por meio de etanol, biogás e eletricidade.',
        evidence: 'Compromissos de US$ 900 milhões, elevando o total a US$ 3,1 bilhões. Quase 1 bilhão de pessoas dependem de carvão/lenha. Alternativas incluem etanol, biogás e eletricidade.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências.',
        lorenzettiImpact: 'Pode demandar acompanhamento do avanço do uso de eletricidade como alternativa energética.',
        url: 'https://apnews.com/article/africa-clean-cooking-lpg-ethanol-iea-22ba68674c361f87b936e84fbf873213'
      }
    ]
  },
  {
    id: 'africa-do-sul',
    label: 'África do Sul',
    badge: 'Maior Economia Industrializada',
    badgeColor: 'blue',
    icon: Factory,
    flags: [{ code: 'za', name: 'África do Sul' }],
    headline: 'A África do Sul mantém crescimento econômico fraco, com inflação em desaceleração após pico recente e novos financiamentos voltados à superação de gargalos estruturais em infraestrutura.',
    statusSubtitle: 'Baixo crescimento, inflação em desaceleração e reformas de infraestrutura',
    description: 'Acompanhamento do PIB da África do Sul, projeções do FMI, taxa de inflação ao consumidor (CPI) e esforços de reforma em áreas críticas de infraestrutura, água, energia e logística.',
    observeSummary: 'A economia sul-africana segue em ritmo de expansão limitado, enquanto a inflação começou a recuar após atingir níveis mais elevados no meio do ano. Em paralelo, novos financiamentos internacionais buscam apoiar reformas em áreas críticas como eletricidade, logística, água e saneamento, consideradas essenciais para reduzir gargalos que restringem o crescimento.',
    observeNotes: [
      'A economia da África do Sul deve crescer apenas 1,1% em 2026, mantendo um ritmo de expansão baixo para uma das maiores economias do continente. A projeção indica que a recuperação continua limitada e que o país ainda não conseguiu transformar as reformas recentes em aceleração mais forte da atividade, do investimento e da geração de empregos.',
      'Parte dessa fraqueza está ligada a problemas estruturais em energia, transporte e infraestrutura. Falhas no fornecimento de eletricidade, limitações no transporte ferroviário e na logística de cargas e deficiências em serviços de infraestrutura aumentam custos, reduzem a eficiência das empresas e dificultam novos investimentos, ajudando a explicar por que o crescimento permanece baixo.',
      'A inflação anual ao consumidor caiu de 5,0% em junho para 4,3% em julho de 2026, registrando desaceleração maior do que a esperada e interrompendo uma sequência de cinco meses de alta. O movimento foi favorecido principalmente por preços menores de combustíveis e por algum alívio em alimentos e tarifas municipais, indicando uma redução recente das pressões sobre os preços.'
    ],
    lorenzettiSummary: 'O baixo crescimento sul-africano pode sinalizar moderação na demanda interna no curto prazo, mas novos fundos para infraestrutura destacam esforços na construção e utilidades públicas.',
    lorenzettiImpacts: [
      'Mesmo com essa melhora, a inflação de 4,3% ainda permanece acima da meta de 3% do banco central. Isso significa que a desaceleração recente ainda não representa retorno completo à estabilidade dos preços, o que limita o espaço para uma redução mais rápida dos juros e mantém a política monetária em postura cautelosa.',
      'A África do Sul obteve um empréstimo de US$ 1,5 bilhão do Banco Mundial para apoiar reformas em áreas consideradas centrais para destravar o crescimento. Os recursos são direcionados a eletricidade, transporte ferroviário e logística de cargas, água e saneamento, setores onde problemas de infraestrutura vêm reduzindo produtividade, aumentando custos e limitando a capacidade de expansão da economia.',
      'O financiamento melhora a capacidade do governo de avançar nessas reformas, mas o efeito econômico depende da execução dos projetos e da redução efetiva dos gargalos. Na prática, o empréstimo só contribuirá para um crescimento mais forte se resultar em fornecimento de energia mais confiável, transporte de cargas mais eficiente e melhores serviços de água e saneamento, transformando recursos financeiros em ganho real de produtividade.'
    ],
    evidences: [
      {
        id: 'ev-za-imf-growth-2026',
        title: 'Crescimento econômico segue fraco em 2026',
        date: 'Agosto/2026',
        dateStr: 'Agosto/2026',
        source: 'Fundo Monetário Internacional (FMI)',
        category: 'Macroeconomia',
        tag: 'PIB & FMI',
        summary: 'A economia da África do Sul deve crescer 1,1% em 2026, segundo a projeção do FMI. O ritmo continua baixo para uma economia emergente e mostra que a recuperação permanece limitada, mesmo com alguma melhora em inflação e condições financeiras. O cenário ainda é condicionado por gargalos estruturais, especialmente em infraestrutura, energia e logística.',
        evidence: 'Projeção de 1,1% de crescimento em 2026; recuperação limitada; gargalos estruturais em infraestrutura, energia e logística limitam o avanço do país.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências.',
        lorenzettiImpact: 'Pode representar risco de moderação na demanda no curto prazo, refletindo a lentidão econômica estrutural.',
        url: 'https://www.imf.org/en/countries/zaf?utm_source'
      },
      {
        id: 'ev-za-inflation-2026',
        title: 'Inflação desacelera para 4,3%, mas permanece acima da meta',
        date: '19/08/2026',
        dateStr: '19/08/2026',
        source: 'Reuters',
        category: 'Inflação',
        tag: 'CPI & Juros',
        summary: 'A inflação anual ao consumidor caiu de 5,0% em junho para 4,3% em julho de 2026, desacelerando mais do que o mercado esperava. A queda foi ajudada principalmente por alimentos, combustíveis e tarifas municipais, mas a inflação ainda permanece acima da meta de 3% do banco central, o que mantém cautela sobre a trajetória dos juros.',
        evidence: 'Inflação anual ao consumidor (CPI) caiu para 4,3% em julho de 2026; a meta do banco central é de 3%.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências.',
        lorenzettiImpact: 'Pode demandar acompanhamento das taxas de juros, impactando o crédito local e as operações comerciais no país.',
        url: 'https://www.reuters.com/world/africa/south-africa-consumer-inflation-slows-more-than-expected-july-2026-08-19/?utm_source'
      },
      {
        id: 'ev-za-worldbank-loan-2026',
        title: 'Empréstimo de US$ 1,5 bilhão apoia reformas de infraestrutura',
        date: '21/07/2026',
        dateStr: '21/07/2026',
        source: 'Reuters / Banco Mundial',
        category: 'Infraestrutura',
        tag: 'Financiamento & Saneamento',
        summary: 'A África do Sul obteve US$ 1,5 bilhão em financiamento do Banco Mundial para apoiar reformas em áreas críticas como eletricidade, transporte ferroviário e logística de cargas, água e saneamento. O empréstimo também ajuda a reforçar o financiamento externo do governo, mas seu impacto econômico depende da implementação efetiva das reformas e da melhora desses gargalos estruturais.',
        evidence: 'Obtenção de US$ 1,5 bilhão do Banco Mundial focado em reformas nas áreas de eletricidade, logística, transporte, água e saneamento.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências.',
        lorenzettiImpact: 'Pode criar oportunidades em projetos de infraestrutura hídrica e saneamento que devem ser implementados com os fundos.',
        url: 'https://www.reuters.com/world/africa/south-africa-gets-15-billion-world-bank-loan-infrastructure-2026-07-21/?utm_source'
      }
    ]
  },
  {
    id: 'quenia',
    label: 'Quênia',
    badge: 'Hub do Leste Africano',
    badgeColor: 'amber',
    icon: TrendingUp,
    flags: [{ code: 'ke', name: 'Quênia' }],
    headline: 'O Quênia mantém crescimento positivo, mas mais fraco em 2026, pressionado por energia cara, menor investimento e incerteza externa, enquanto o governo tenta reduzir o déficit público e preservar a estabilidade fiscal.',
    statusSubtitle: 'Crescimento revisado para baixo, choque de energia e pressão sobre as contas públicas',
    description: 'Acompanhamento do PIB do Quênia, impacto dos custos de combustíveis, projeções de déficit orçamentário e riscos associados às contas públicas.',
    observeSummary: 'A economia queniana continua em expansão, mas o ritmo esperado para 2026 foi reduzido diante do aumento dos preços de energia e da maior incerteza internacional. Ao mesmo tempo, o governo enfrenta o desafio de diminuir o déficit fiscal sem interromper a atividade, em um cenário ainda exposto a choques climáticos, pressões pré-eleitorais e condições financeiras globais mais restritivas.',
    observeNotes: [
      'A economia do Quênia deve crescer 4,3% em 2026 e 4,4% em 2027, abaixo do ritmo de aproximadamente 5% ao ano observado nos últimos anos. A projeção para 2026 foi reduzida em 0,6 ponto percentual em relação à estimativa anterior, principalmente porque o conflito no Oriente Médio elevou os preços globais de energia e aumentou a incerteza econômica.',
      'O encarecimento de combustíveis afeta a economia por vários canais ao mesmo tempo: aumenta custos de produção e transporte, reduz o ritmo do investimento privado e diminui o poder de compra das famílias. O Banco Mundial estima que esses efeitos podem elevar a taxa de pobreza em 2 a 4,5 pontos percentuais, colocando entre 1 milhão e 2,4 milhões de quenianos adicionais abaixo da linha de US$ 3 por pessoa por dia.',
      'Apesar da desaceleração, alguns fatores internos ajudam a sustentar a atividade econômica. Boas colheitas agrícolas, uma política monetária mais flexível, câmbio relativamente estável e recuperação do crédito ao setor privado reduzem parte do impacto do choque externo e ajudam a evitar uma perda de ritmo ainda maior.'
    ],
    lorenzettiSummary: 'A moderação no crescimento e as pressões orçamentárias podem limitar a expansão do consumo interno, enquanto os custos de energia encarecem a distribuição logística no país.',
    lorenzettiImpacts: [
      'As contas públicas continuam sob pressão: o governo projeta déficit orçamentário de 5,5% no ano fiscal atual e pretende reduzi-lo para 3% até 2028/29. A meta exige controle de gastos e arrecadação compatível com o plano, mas o país tem ficado abaixo de seus objetivos orçamentários nos últimos anos, o que aumenta a importância de apresentar um caminho fiscal considerado crível.',
      'O esforço de ajuste fiscal enfrenta riscos externos e domésticos. Choques climáticos podem prejudicar agricultura e infraestrutura, enquanto tensões geopolíticas, volatilidade de commodities, crescimento global mais fraco e condições financeiras mais apertadas podem pressionar inflação, exportações e entrada de capital, dificultando a redução do déficit.',
      'O Quênia também recebeu novos mecanismos de financiamento para reduzir a dependência de dívida doméstica mais cara e apoiar reformas econômicas. No fim de junho, foram aprovados US$ 750 milhões em apoio orçamentário e uma linha de US$ 500 milhões vinculada à sustentabilidade. Esses recursos podem aliviar parte da pressão financeira, mas não substituem a necessidade de cumprir as metas fiscais e avançar nas reformas, especialmente com as eleições gerais de agosto de 2027 se aproximando.'
    ],
    evidences: [
      {
        id: 'ev-ke-growth-energy-2026',
        title: 'Crescimento do Quênia desacelera em 2026 diante de energia cara e maior incerteza',
        date: '09/07/2026',
        dateStr: '09/07/2026',
        source: 'Reuters / Banco Mundial',
        category: 'Macroeconomia',
        tag: 'PIB & Energia',
        summary: 'A economia queniana deve crescer 4,3% em 2026 e 4,4% em 2027, ritmo inferior ao previsto anteriormente, devido ao impacto das tensões no Oriente Médio sobre os preços dos combustíveis. O cenário eleva os custos de produção e reduz investimentos privados, mas é parcialmente mitigado por boas safras agrícolas, câmbio estável e política monetária mais flexível.',
        evidence: 'Previsão de crescimento reduzida para 4,3% em 2026. Preços globais de energia elevados afetam investimento privado e poder de compra. Fatores mitigantes incluem agricultura, câmbio estável e crédito privado.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências.',
        lorenzettiImpact: 'Pode representar risco de aumento nos custos logísticos de distribuição de manufaturados importados.',
        url: 'https://www.reuters.com/world/africa/kenya-economy-grow-43-2026-44-2027-world-bank-2026-07-09/?'
      },
      {
        id: 'ev-ke-fiscal-risk-2026',
        title: 'Quênia enfrenta pressão fiscal e risco de deterioração das contas públicas',
        date: '11/06/2026',
        dateStr: '11/06/2026',
        source: 'Reuters',
        category: 'Finanças Públicas',
        tag: 'Déficit & Eleições',
        summary: 'O governo do Quênia projeta um déficit orçamentário de 5,5% no ano fiscal atual, com objetivo de reduzi-lo a 3% até 2028/29. No entanto, a trajetória fiscal do país enfrenta riscos decorrentes de choques climáticos, altas do petróleo e o aumento potencial de gastos públicos com a aproximação das eleições de 2027, o que pode atrasar reformas estruturais.',
        evidence: 'Déficit projetado de 5,5% com meta de 3% até 2028/29. Riscos fiscais ligados a fatores globais e eleições de 2027, que podem elevar gastos e adiar reformas.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências.',
        lorenzettiImpact: 'Pode demandar acompanhamento das medidas fiscais e seu potencial efeito na tributação de produtos industrializados.',
        url: 'https://www.reuters.com/world/africa/east-african-ministers-unveil-budgets-amid-iran-cost-shocks-debt-strains-2026-06-11/?'
      }
    ]
  }
];

export const AFRICA_BY_ID: Record<AfricaTopicId, AfricaTopicData> = {
  'africa': AFRICA_TOPICS[0],
  'africa-do-sul': AFRICA_TOPICS[1],
  'quenia': AFRICA_TOPICS[2]
};
