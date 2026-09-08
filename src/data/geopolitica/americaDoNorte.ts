/**
 * REGRAS DE GOVERNANÇA E CONTRATO DE DADOS — AMÉRICA DO NORTE
 * 
 * Países monitorados: Estados Unidos e México.
 * 
 * 1. Tópicos cadastrados em NORTH_AMERICA_TOPICS seguindo estritamente NorthAmericaTopicData.
 * 2. A View (AmericaDoNorteView) é estruturada com o mesmo layout e padrão de América Latina.
 * 3. Campos obrigatórios essenciais para a renderização da página:
 *    - id, label, icon, flags, headline, observeSummary, observeNotes, lorenzettiSummary, lorenzettiImpacts, evidences.
 * 4. Padrões fixados para consistência visual do layout:
 *    - observeNotes: exatamente 3 itens (tupla [string, string, string]);
 *    - lorenzettiImpacts: exatamente 3 itens (tupla [string, string, string]);
 *    - flags: lista de países com code e name para renderização na Pill Bar;
 *    - evidences: notícias factuais com id, title, source, date, dateStr, url, summary.
 */

import {
  DollarSign,
  Factory
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NorthAmericaTopicId =
  | 'estados-unidos'
  | 'mexico';

export interface NorthAmericaFlag {
  code: string;
  name: string;
}

export interface NorthAmericaEvidence {
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

export interface NorthAmericaTopicData {
  id: NorthAmericaTopicId;
  label: string;
  icon: LucideIcon;
  flags: NorthAmericaFlag[];
  headline: string;
  statusSubtitle: string;
  description: string;
  observeSummary: string;
  observeNotes: [string, string, string];
  lorenzettiSummary: string;
  lorenzettiImpacts: [string, string, string];
  evidences: NorthAmericaEvidence[];
  badge?: string;
  badgeColor?: string;
}

export const NORTH_AMERICA_TOPICS: NorthAmericaTopicData[] = [
  {
    id: 'estados-unidos',
    label: 'Estados Unidos',
    badge: 'PIB & Política Monetária',
    badgeColor: 'blue',
    icon: DollarSign,
    flags: [{ code: 'us', name: 'Estados Unidos' }],
    headline: 'A economia dos Estados Unidos deve crescer 2,3% em 2026, enquanto a inflação permanece acima da meta e mantém incerteza sobre a trajetória dos juros. Em paralelo, o governo avalia novas tarifas para semicondutores e produtos que utilizam chips.',
    statusSubtitle: 'Crescimento econômico, inflação e juros, e política tarifária para semicondutores',
    description: 'Acompanhamento do PIB dos EUA pelo FMI, da inflação medida pelo PCE e taxa básica do Federal Reserve, e das discussões sobre estrutura tarifária para semicondutores e produtos tecnológicos.',
    observeSummary: 'A economia americana mantém crescimento sustentado, mas a inflação persistente continua limitando uma flexibilização da política monetária e voltou a alimentar discussões sobre possível alta dos juros. Ao mesmo tempo, o governo avalia novas medidas comerciais para ampliar a produção doméstica de semicondutores e reduzir a dependência externa em uma cadeia considerada estratégica.',
    observeNotes: [
      'A economia dos Estados Unidos deve crescer 2,3% em 2026 e 2,2% em 2027. A projeção indica continuidade da expansão econômica, apoiada por investimento empresarial, ganhos de produtividade, condições financeiras ainda favoráveis e apoio fiscal. A condição dos EUA como exportador líquido de energia também tende a amortecer parte do impacto de choques internacionais nos preços energéticos.',
      'A composição do crescimento mostra peso importante do investimento das empresas, especialmente em equipamentos, tecnologia e propriedade intelectual, enquanto o consumo avança em ritmo mais moderado. Isso significa que a expansão da economia está sendo sustentada em maior medida pela ampliação da capacidade produtiva e pelos investimentos empresariais, mesmo em um ambiente de juros ainda elevados.',
      'A inflação medida pelo PCE — indicador de preços acompanhado de perto pelo Federal Reserve para orientar suas decisões de juros — subiu de 3,6% em junho para 3,7% em julho de 2026, permanecendo acima da meta de 2%. A inflação subjacente, que exclui componentes mais voláteis e ajuda a mostrar a tendência mais persistente dos preços, permaneceu em 3,3%.'
    ],
    lorenzettiSummary: 'As projeções de expansão, a trajetória de juros pelo Federal Reserve e a avaliação de tarifas para tecnologia balizam o custo financeiro global e as cadeias de semicondutores.',
    lorenzettiImpacts: [
      'O Federal Reserve mantém a taxa básica entre 3,50% e 3,75% ao ano desde dezembro. Com a inflação permanecendo acima da meta, aumentou no mercado financeiro a percepção de que o Fed poderá elevar os juros ainda em 2026. Essa possibilidade representa uma mudança nas expectativas dos investidores e não uma decisão já tomada pelo banco central.',
      'O governo americano avalia uma nova estrutura tarifária para semicondutores e para produtos que utilizam chips, como servidores de data centers, laptops e consoles de videogame. A proposta ainda está em desenvolvimento, não foi implementada e pode sofrer alterações antes de qualquer anúncio ou adoção oficial.',
      'Uma das opções em avaliação permitiria que empresas estrangeiras reduzissem ou evitassem parte de eventuais tarifas caso realizassem investimentos na fabricação de semicondutores dentro dos Estados Unidos. A lógica seria utilizar a política tarifária como incentivo para ampliar a capacidade doméstica de produção de chips, mas esse mecanismo ainda está em discussão e não deve ser tratado como regra já definida.'
    ],
    evidences: [
      {
        id: 'ev-us-pce-fed-2026',
        title: 'Inflação persistente aumenta a possibilidade de alta dos juros pelo Fed',
        date: '26/08/2026',
        dateStr: '26/08/2026',
        source: 'Reuters',
        category: 'Política Monetária',
        tag: 'PCE & Fed Funds',
        summary: 'A inflação medida pelo PCE, indicador acompanhado de perto pelo Federal Reserve, subiu para 3,7% em julho de 2026, ante 3,6% em junho, permanecendo bem acima da meta de 2%. A inflação subjacente ficou em 3,3%, sem melhora em relação ao mês anterior. O Fed mantém a taxa entre 3,50% e 3,75% desde dezembro, e os dados mais fortes de inflação aumentaram as expectativas do mercado de que uma elevação dos juros possa ocorrer ainda em 2026. Isso deve ser tratado como possibilidade, e não como decisão já tomada.',
        evidence: 'PCE de 3,7% e núcleo de 3,3% acima da meta de 2%, com taxa básica mantida entre 3,50% e 3,75% desde dezembro e expectativas de elevação de juros avaliadas como possibilidade.',
        brazilImpact: 'A persistência da inflação nos EUA e a eventual elevação de juros influenciam o diferencial de taxas e a volatilidade cambial para economias emergentes.',
        lorenzettiImpact: 'Pode influenciar o custo de financiamento internacional e demandar acompanhamento da paridade cambial em insumos cotados em dólar.',
        url: 'https://www.reuters.com/business/fed-seen-bit-more-likely-hike-after-inflation-data-2026-08-26/?utm_source'
      },
      {
        id: 'ev-us-imf-weo-2026',
        title: 'Economia dos EUA deve crescer 2,3% em 2026, apoiada por investimento em tecnologia',
        date: '08/07/2026',
        dateStr: '08/07/2026',
        source: 'Fundo Monetário Internacional (FMI)',
        category: 'Atividade Econômica',
        tag: 'PIB dos EUA',
        summary: 'O FMI projeta crescimento de 2,3% em 2026 e 2,2% em 2027 para os Estados Unidos. O cenário é sustentado por política fiscal, condições financeiras ainda favoráveis e continuidade dos investimentos empresariais ligados à tecnologia, acompanhados por ganhos de produtividade. O impacto do choque energético internacional é relativamente menor porque os EUA são exportadores líquidos de energia.',
        evidence: 'Projeção do FMI de avanço de 2,3% em 2026 e 2,2% em 2027, sustentado por investimentos corporativos em tecnologia e produtividade.',
        brazilImpact: 'O crescimento dos Estados Unidos apoia a demanda global por manufaturados e insumos básicos comercializados internacionalmente.',
        lorenzettiImpact: 'Pode manter estável a demanda internacional por insumos industriais e componentes técnicos para manufatura.',
        url: 'https://www.imf.org/en/publications/weo/issues/2026/07/08/world-economic-outlook-update-july-2026?utm_source'
      },
      {
        id: 'ev-us-tarifas-chips-2026',
        title: 'Governo avalia nova rodada de tarifas para semicondutores e produtos tecnológicos',
        date: '27/08/2026',
        dateStr: '27/08/2026',
        source: 'Reuters / Politico',
        category: 'Comércio Internacional',
        tag: 'Tarifas & Tecnologia',
        summary: 'O governo americano está avaliando, e não implementando neste momento, uma nova estrutura tarifária para semicondutores. A proposta discutida poderia ir além dos chips e atingir produtos que os utilizam, como laptops, consoles de videogame e servidores de data centers. Uma das possibilidades é vincular alívio tarifário de empresas estrangeiras a investimentos na fabricação de semicondutores dentro dos Estados Unidos, reforçando a estratégia de ampliar a produção doméstica.',
        evidence: 'Avaliação governamental de estrutura tarifária para semicondutores e equipamentos que utilizam chips, condicionando eventual alívio a investimentos em fábricas nos EUA.',
        brazilImpact: 'Medidas tarifárias sobre tecnologia e semicondutores influenciam os custos globais de componentes eletroeletrônicos e rotas de suprimento.',
        lorenzettiImpact: 'Pode demandar acompanhamento das condições de fornecimento e precificação de componentes eletrônicos e semicondutores no mercado internacional.',
        url: 'https://www.reuters.com/business/us-weighs-new-round-tariffs-semiconductors-politico-reports-2026-08-27/?utm_source'
      }
    ]
  },
  {
    id: 'mexico',
    label: 'México',
    badge: 'PIB & USMCA',
    badgeColor: 'emerald',
    icon: Factory,
    flags: [{ code: 'mx', name: 'México' }],
    headline: 'O México retomou o crescimento no 2º trimestre, reduziu a taxa básica de juros para 6,50% em meio a uma inflação ainda acima da meta e negocia divergências comerciais com os Estados Unidos na revisão do USMCA.',
    statusSubtitle: 'Retomada da atividade econômica, juros em 6,50% e revisão do USMCA',
    description: 'Acompanhamento do PIB do México, da condução da taxa básica pelo Banco do México e das negociações sobre dependência comercial e regras de produção no USMCA.',
    observeSummary: 'A economia mexicana voltou a crescer no 2º trimestre após a contração registrada no início do ano, enquanto a política monetária entrou em uma fase mais cautelosa diante de uma inflação ainda acima da meta. No comércio exterior, o USMCA permanece em vigor, mas sua revisão mantém abertas negociações importantes entre México e Estados Unidos sobre produção regional, regras comerciais e integração das cadeias industriais.',
    observeNotes: [
      'A economia mexicana cresceu 1,4% no 2º trimestre de 2026 em relação ao trimestre anterior, revertendo a contração revisada de 0,3% registrada nos três primeiros meses do ano. Foi o maior avanço trimestral desde o início de 2022. Na comparação com o mesmo período de 2025, o PIB cresceu 2,1%, confirmando uma recuperação da atividade após o início mais fraco do ano.',
      'A recuperação do 2º trimestre ocorreu nos três principais grupos da economia, e não ficou concentrada em apenas um segmento. As atividades primárias, ligadas à produção de recursos naturais e que incluem agricultura, pesca e mineração na classificação apresentada, tiveram o maior avanço, de 2,4% frente ao trimestre anterior, enquanto os demais grupos também registraram crescimento.',
      'O Banco do México reduziu a taxa básica em 0,25 ponto percentual, de 6,75% para 6,50% ao ano, levando os juros ao menor nível desde maio de 2022. A decisão foi dividida por 3 votos a 2 e encerrou o ciclo de redução iniciado em março de 2024. A orientação passou a ser de manutenção da taxa enquanto o banco avalia a evolução da inflação e da atividade econômica.'
    ],
    lorenzettiSummary: 'A retomada do PIB mexicano, o patamar de juros em 6,50% e o formato de revisões anuais do USMCA definem o ambiente de atividade, crédito e comércio na região.',
    lorenzettiImpacts: [
      'Na primeira metade de agosto, a inflação anual estava em 3,26%, dentro do intervalo de tolerância da meta de 3% do Banco do México, que admite variação de 1 ponto percentual para cima ou para baixo. Já a inflação subjacente — que exclui alguns preços mais voláteis e ajuda a mostrar a tendência mais persistente dos preços — permanecia mais elevada, em 3,93%. O quadro mostra melhora da inflação cheia, mas ainda com pressões persistentes em seus componentes menos voláteis.',
      'O acordo comercial entre México, Estados Unidos e Canadá continua em vigor, mas não foi prorrogado imediatamente por um novo período completo após sua revisão de seis anos. Com isso, o USMCA permanece válido por mais dez anos e passa por revisões anuais, período em que os três países podem negociar mudanças antes de uma eventual renovação do acordo.',
      'As negociações entre México e Estados Unidos envolvem divergências concretas sobre a integração comercial e industrial da América do Norte. Os Estados Unidos levantaram preocupações sobre dependência do comércio exterior, perda de empregos industriais e déficits comerciais, enquanto o México busca reduzir tarifas americanas sobre aço e alumínio e discute regras de origem para automóveis e autopeças — critérios que determinam quando esses produtos podem receber os benefícios do acordo — além de tarifas sazonais aplicadas ao comércio agrícola.'
    ],
    evidences: [
      {
        id: 'ev-mx-pib-q2-2026',
        title: 'México retoma crescimento no 2º trimestre após contração no início do ano',
        date: '24/08/2026',
        dateStr: '24/08/2026',
        source: 'Reuters',
        category: 'Atividade Econômica',
        tag: 'PIB México',
        summary: 'A economia mexicana cresceu 1,4% no 2º trimestre frente ao trimestre anterior, o ritmo trimestral mais forte desde o início de 2022, após uma contração revisada de 0,3% no 1º trimestre. Na comparação anual, o PIB avançou 2,1%. Os três grandes grupos de atividade contribuíram, com destaque para as atividades primárias, que cresceram 2,4% no trimestre.',
        evidence: 'PIB com crescimento trimestral de 1,4% e avanço anual de 2,1%, superando a contração de 0,3% no 1º trimestre, com expansão de 2,4% no setor primário.',
        brazilImpact: 'A retomada do nível de atividade mexicano serve como referência de desempenho entre as principais economias da América Latina.',
        lorenzettiImpact: 'Pode indicar recuperação da dinâmica de demanda interna por produtos manufaturados no mercado mexicano.',
        url: 'https://www.reuters.com/world/americas/mexicos-economy-grows-14-q2-previous-quarter-2026-08-24/?utm_source'
      },
      {
        id: 'ev-mx-usmca-revisao-2026',
        title: 'México busca preservar integração com os EUA em meio à revisão do USMCA',
        date: '01/07/2026',
        dateStr: '01/07/2026',
        source: 'Reuters',
        category: 'Comércio Internacional',
        tag: 'USMCA & Comércio',
        summary: 'O México busca responder às preocupações dos Estados Unidos sobre dependência comercial e cadeias produtivas durante as discussões sobre o acordo entre México, EUA e Canadá. Os EUA optaram por não renovar imediatamente o acordo por um novo prazo completo, mantendo-o em vigor com revisões anuais enquanto negociam possíveis mudanças. O tema envolve principalmente dependência comercial, produção regional e regras da relação econômica norte-americana.',
        evidence: 'Negociações do USMCA mantêm o tratado vigente com revisões anuais para tratar de dependência comercial, produção regional e regras bilaterais.',
        brazilImpact: 'As diretrizes de comércio e produção regional na América do Norte condicionam fluxos comerciais e regimes concorrenciais nas Américas.',
        lorenzettiImpact: 'Pode demandar acompanhamento das definições de regras de origem e requisitos regulatórios para componentes na cadeia norte-americana.',
        url: 'https://www.reuters.com/business/mexico-looking-address-us-dependence-concerns-usmca-talks-ebrard-says-2026-07-01/'
      },
      {
        id: 'ev-mx-banxico-juros-2026',
        title: 'Banco do México reduz juros para 6,50%, mas inflação mantém cautela',
        date: '27/06/2026',
        dateStr: '27/06/2026',
        source: 'Investing.com',
        category: 'Política Monetária',
        tag: 'Juros Banxico',
        summary: 'O Banco do México reduziu a taxa básica em 0,25 ponto percentual, de 6,75% para 6,50%. A decisão foi dividida: dois membros defenderam a manutenção em 6,75%. Ao mesmo tempo, a previsão de inflação para o 2º trimestre de 2026 foi elevada de 4,0% para 4,1%, e o banco esperava convergência para a meta de 3% posteriormente.',
        evidence: 'Corte de 0,25 p.p. na taxa básica para 6,50% em votação dividida (dois votos por 6,75%), com revisão da inflação do 2º trimestre de 4,0% para 4,1%.',
        brazilImpact: 'A calibragem de juros pelo Banco do México baliza o diferencial de taxas de juros e o comportamento do fluxo financeiro na América Latina.',
        lorenzettiImpact: 'Pode influenciar o custo de financiamento de operações comerciais e a estabilidade de preços no mercado mexicano.',
        url: 'https://www.investing.com/news/economy-news/bank-of-mexico-cuts-benchmark-interest-rate-to-650-in-split-vote-4669508?utm_source'
      }
    ]
  }
];

export const NORTH_AMERICA_BY_ID: Record<NorthAmericaTopicId, NorthAmericaTopicData> = {
  'estados-unidos': NORTH_AMERICA_TOPICS[0],
  'mexico': NORTH_AMERICA_TOPICS[1]
};
