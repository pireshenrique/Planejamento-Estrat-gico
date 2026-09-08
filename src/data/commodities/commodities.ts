import { Coins, Droplet, Hexagon, Cpu, Sparkles, Layers } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export type CommodityTopicId = 'aco' | 'cobre' | 'polipropileno' | 'petroleo' | 'semicondutores' | 'terras_raras';

export interface CommodityTopic {
  id: CommodityTopicId;
  label: string;
  icon: LucideIcon;
  headline: string;
  statusSubtitle: string;
  observeSummary: string;
  observeTitle?: string;
  observeNotes: string[];
  lorenzettiImpacts: string[];
  evidences: Array<{
    id: number | string;
    tag: string;
    dateStr: string;
    title: string;
    summary?: string;
    headline?: string;
    description?: string;
    source: string;
    url: string;
    image?: string;
  }>;
}

export const COMMODITIES_TOPICS: { id: CommodityTopicId; label: string; icon: LucideIcon }[] = [
  { id: 'aco', label: 'Aço', icon: Layers },
  { id: 'cobre', label: 'Cobre', icon: Coins },
  { id: 'polipropileno', label: 'Polipropileno', icon: Hexagon },
  { id: 'petroleo', label: 'Petróleo', icon: Droplet },
  { id: 'semicondutores', label: 'Semicondutores', icon: Cpu },
  { id: 'terras_raras', label: 'Terras raras', icon: Sparkles },
];

export const COMMODITY_TOPICS = COMMODITIES_TOPICS;

export const COMMODITIES_BY_ID: Record<CommodityTopicId, CommodityTopic> = {
  aco: {
    id: 'aco',
    label: 'Aço',
    icon: Layers,
    headline: 'O mercado mundial de aço enfrenta excesso crescente de capacidade produtiva, enquanto a demanda avança lentamente e novas expansões mantêm pressão sobre concorrência, rentabilidade e comércio internacional.',
    statusSubtitle: 'Excesso de capacidade pode chegar a 745 milhões de toneladas em 2028, enquanto a demanda global cresce apenas cerca de 0,9% ao ano',
    observeSummary: 'O mercado global de aço enfrenta um desequilíbrio estrutural entre capacidade produtiva e demanda. Mesmo com cerca de 640 milhões de toneladas de capacidade excedente em 2025, novas expansões continuam previstas e podem elevar esse excesso para 745 milhões de toneladas em 2028. A baixa utilização das siderúrgicas, a expansão das exportações chinesas, os incentivos à ampliação da produção e o aumento de tarifas e medidas de proteção reforçam a pressão competitiva e a fragmentação do comércio mundial de aço.',
    observeTitle: 'Últimas notícias',
    observeNotes: [
      'A capacidade mundial instalada para produzir aço atingiu aproximadamente 2,445 bilhões de toneladas em 2025, enquanto cerca de 640 milhões de toneladas dessa capacidade ficaram acima do volume necessário para atender o mercado. Esse excesso pode aumentar para 745 milhões de toneladas em 2028, aproximando-se dos níveis observados durante a última grande crise mundial do setor.',
      'Mesmo com o mercado já apresentando excesso de capacidade, estão previstos até 138,8 milhões de toneladas adicionais de capacidade produtiva até 2028, aumento de 5,7% em relação a 2025. Ao mesmo tempo, a demanda mundial deve crescer apenas cerca de 0,9% ao ano até 2030, mostrando que a capacidade de produzir aço continua avançando mais rapidamente do que o consumo.',
      'A diferença crescente entre capacidade e demanda deve reduzir o uso efetivo das siderúrgicas. A utilização das usinas, que estava em aproximadamente 76% da capacidade disponível em 2025, pode cair para 74% ou menos em 2028. Com mais instalações disputando uma demanda que cresce lentamente, aumenta a pressão sobre preços, margens e rentabilidade dos produtores.',
      'A China continua exercendo forte influência sobre o mercado mundial de aço. Com a demanda doméstica enfraquecida, o país exportou um recorde de 131 milhões de toneladas em 2025, equivalente a cerca de 14% de sua produção anual e 153% acima do volume de 2020. Ao mesmo tempo, até 38,6 milhões de toneladas de nova capacidade estão planejadas no país até 2028, mantendo elevada sua presença no mercado internacional.',
      'O aumento do excesso de oferta também vem intensificando disputas comerciais. Brasil, Canadá, Índia, México e Estados Unidos elevaram tarifas sobre diferentes produtos de aço, enquanto União Europeia e Reino Unido também anunciaram medidas de proteção. Essas barreiras buscam limitar a entrada de importações em mercados pressionados por excesso de capacidade, mas tornam o comércio mundial do aço mais fragmentado e sujeito a diferenças de preços e disponibilidade entre regiões.',
      'O apoio governamental também influencia a expansão da capacidade produtiva e a concorrência internacional. Em 2024, a siderúrgica chinesa mediana recebeu, proporcionalmente aos seus ativos, cerca de 15 vezes mais subsídios do que a empresa mediana do setor em outros países analisados. Esses incentivos podem sustentar investimentos e produção mesmo em um mercado com excesso de capacidade, aumentando a pressão competitiva sobre produtores de outras regiões.'
    ],
    lorenzettiImpacts: [
      'Como a capacidade mundial de produzir aço está crescendo mais rapidamente do que a demanda, as siderúrgicas tendem a disputar um mercado com oferta abundante. Para a Lorenzetti, isso pode aumentar o espaço de negociação na compra de chapas e outros componentes de aço, principalmente em períodos de demanda mais fraca. Esse benefício, porém, não é automático, porque o preço final também depende de câmbio, frete, especificação do material, origem e condições praticadas no mercado brasileiro.',
      'Mesmo com excesso de aço disponível no mundo, o material não necessariamente ficará mais barato no Brasil. Tarifas de importação e outras medidas de proteção podem encarecer produtos estrangeiros ou limitar determinadas origens, fazendo com que o preço doméstico siga uma trajetória diferente da cotação internacional. Para a Lorenzetti, isso torna importante comparar o custo efetivo de fornecedores nacionais e importados, considerando não apenas o preço do aço, mas também impostos, transporte e prazo de entrega.',
      'A utilização mais baixa das siderúrgicas reduz o volume produzido em relação ao tamanho das fábricas e pressiona a rentabilidade do setor. Se esse cenário persistir, algumas empresas podem reduzir produção, adiar investimentos ou se consolidar com concorrentes. Para a Lorenzetti, isso pode afetar a quantidade de fornecedores disponíveis, os prazos de entrega e a segurança de abastecimento, tornando relevante avaliar também a capacidade financeira e operacional dos parceiros, e não somente o menor preço.',
      'A China possui grande peso nas exportações mundiais de aço e pode ampliar suas vendas externas quando a demanda dentro do país enfraquece. Esse aumento da oferta pode pressionar preços internacionais para baixo, mas também costuma estimular outros países a criarem tarifas e barreiras para proteger suas siderúrgicas. Para a Lorenzetti, essas mudanças podem alterar rapidamente quais países e fornecedores oferecem as melhores condições de compra, porque uma origem competitiva hoje pode perder vantagem após uma mudança tarifária.',
      'A combinação de excesso de capacidade mundial e mudanças frequentes nas regras comerciais aumenta a importância de não depender excessivamente de uma única origem ou fornecedor. Para a Lorenzetti, comparar periodicamente fornecedores, preços nacionais e internacionais, prazos de entrega e condições contratuais pode ajudar a aproveitar momentos de maior oferta sem aumentar o risco de interrupção no abastecimento caso tarifas, produção ou rotas comerciais mudem.'
    ],
    evidences: [
      {
        id: 'ev-aco-oecd-2026',
        tag: 'SIDERURGIA GLOBAL',
        dateStr: '06/2026',
        title: 'Excesso de capacidade e demanda fraca pressionam o mercado global de aço',
        summary: 'A indústria mundial de aço enfrenta um desequilíbrio crescente entre capacidade de produção e demanda. A capacidade excedente global deve chegar a aproximadamente 745 milhões de toneladas em 2028, próxima dos maiores níveis registrados na última grande crise do setor. Ao mesmo tempo, estão previstas adições de até 138,8 milhões de toneladas de nova capacidade até 2028, crescimento de 5,7% em relação a 2025, enquanto a demanda mundial deve avançar apenas cerca de 0,9% ao ano até 2030. Esse descompasso tende a manter baixa a utilização das usinas, que pode cair de 76% em 2025 para 74% ou menos em 2028, aumentando a pressão sobre preços, margens e rentabilidade das siderúrgicas.',
        description: 'Relatório da OCDE detalha o descompasso entre a capacidade instalada e a demanda global por aço.',
        source: 'OCDE (OECD)',
        url: 'https://www.oecd.org/en/publications/2026/06/oecd-steel-outlook-2026_a79fb861.html?utm_source=chatgpt.com',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&h=400&fit=crop'
      }
    ]
  },
  cobre: {
    id: 'cobre',
    label: 'Cobre',
    icon: Coins,
    headline: 'A demanda mundial por cobre deve crescer cerca de 50% até 2040, enquanto limitações na mineração, no processamento e no tempo necessário para novos projetos ampliam o risco de déficit de oferta.',
    statusSubtitle: 'Demanda projetada em 42 milhões de toneladas, produção com pico em 2030 e déficit potencial de 10 milhões de toneladas em 2040',
    observeSummary: 'O cobre tende a ganhar importância estratégica à medida que eletrificação, redes elétricas, veículos elétricos, inteligência artificial, data centers e defesa ampliam simultaneamente o consumo do metal. A oferta, porém, deve crescer em ritmo insuficiente, porque novas minas levam muitos anos para entrar em produção e a capacidade de mineração e processamento permanece concentrada em poucos países. Mesmo com forte expansão da reciclagem, o déficit potencial pode chegar a 10 milhões de toneladas em 2040.',
    observeTitle: 'Últimas notícias',
    observeNotes: [
      'A demanda mundial por cobre deve chegar a 42 milhões de toneladas em 2040, aproximadamente 50% acima dos níveis atuais. A demanda econômica tradicional, que inclui construção, equipamentos elétricos, veículos, transporte e geração de energia, ainda deve representar a maior parcela, chegando a 23 milhões de toneladas, ou 53% do consumo global projetado.',
      'A transição energética será uma das principais fontes adicionais de consumo. Veículos elétricos, armazenamento de energia, geração renovável, redes de transmissão e distribuição e eletrificação de países em desenvolvimento devem elevar essa categoria para 15,7 milhões de toneladas em 2040, crescimento superior a 7 milhões de toneladas em relação aos níveis atuais.',
      'Inteligência artificial, data centers e gastos militares adicionam novas fontes de pressão sobre a demanda. O consumo de cobre ligado a data centers e defesa deve aproximadamente triplicar até 2040 e adicionar, em conjunto, cerca de 4 milhões de toneladas à demanda. A capacidade instalada mundial de data centers também pode superar 550 gigawatts, mais de cinco vezes o nível observado em 2022.',
      'A produção mundial de cobre deve atingir um pico de aproximadamente 33 milhões de toneladas em 2030. Sem investimentos e mudanças relevantes na oferta, o déficit pode chegar a 10 milhões de toneladas em 2040, equivalente a cerca de 25% da demanda projetada. A oferta proveniente diretamente da mineração poderia cair para aproximadamente 22 milhões de toneladas em 2040, abaixo do nível atual.',
      'A reciclagem deve mais que dobrar, passando de aproximadamente 4 milhões para 10 milhões de toneladas até 2040, mas ainda não seria suficiente para eliminar a necessidade de novas minas. Um novo projeto de cobre leva em média 17 anos entre a descoberta e o início da produção, devido a etapas de exploração, licenciamento, construção e outros desafios técnicos e regulatórios.',
      'A oferta também apresenta forte concentração geográfica. Seis países respondem por aproximadamente dois terços da mineração mundial de cobre, enquanto a China concentra cerca de 40% da capacidade global de fundição e 66% das importações de concentrado de cobre usado nesse processamento. Essa concentração deixa a cadeia mais exposta a interrupções de produção, mudanças regulatórias e barreiras comerciais.'
    ],
    lorenzettiImpacts: [
      'O crescimento da demanda mundial e o déficit potencial de até 10 milhões de toneladas em 2040 podem manter o cobre sujeito a períodos de preços elevados e maior volatilidade. Para a Lorenzetti, isso pode pressionar o custo de componentes que utilizam cobre, como condutores, fiações e barramentos, com possível efeito sobre margens caso os aumentos não sejam compensados por produtividade, negociação com fornecedores ou reajustes de preços.',
      'Como novas minas levam em média 17 anos entre descoberta e início da produção, a oferta tem pouca capacidade de responder rapidamente a aumentos de demanda. Em cenários de maior escassez, disponibilidade, prazo de entrega e capacidade dos fornecedores de garantir volumes podem se tornar tão relevantes quanto o próprio preço de aquisição.',
      'A forte concentração da cadeia também aumenta a exposição a interrupções externas, já que poucos países concentram grande parte da mineração e a China possui participação relevante no processamento do cobre. Mesmo quando a compra ocorre de fornecedores nacionais, mudanças de produção, comércio ou regulação nesses mercados podem se refletir nos preços e na disponibilidade global do metal.',
      'A expansão da reciclagem pode aumentar a importância de fornecedores capazes de oferecer cobre reciclado com qualidade e rastreabilidade adequadas. Para a Lorenzetti, isso também pode estimular iniciativas de redução de desperdício, melhor aproveitamento de sucata e uso mais eficiente do cobre, desde que sejam preservados os requisitos técnicos, elétricos, de durabilidade e segurança dos produtos.',
      'Uma valorização persistente do cobre também pode elevar o valor financeiro dos estoques e aumentar a necessidade de capital para compras de matéria-prima. Isso torna mais importante integrar planejamento de compras, níveis de estoque, engenharia de produto e formação de preços, porque oscilações do metal podem afetar simultaneamente custo industrial, necessidade de caixa e margem dos produtos.'
    ],
    evidences: [
      {
        id: 'ev-cobre-spglobal-2026',
        tag: 'MINERAÇÃO & TRANSIÇÃO',
        dateStr: '08/01/2026',
        title: 'Demanda global por cobre deve crescer 50% até 2040 e ampliar déficit de oferta',
        summary: 'A demanda mundial por cobre deve chegar a 42 milhões de toneladas em 2040, cerca de 50% acima dos níveis atuais, impulsionada pela eletrificação, expansão das redes elétricas, veículos elétricos, data centers, inteligência artificial e maiores gastos em defesa. A oferta, porém, não acompanha esse ritmo. A produção global deve atingir pico de 33 milhões de toneladas em 2030 e, sem novos investimentos relevantes, o déficit pode chegar a 10 milhões de toneladas em 2040, equivalente a cerca de 25% da demanda projetada. Mesmo com a reciclagem mais que dobrando, o desenvolvimento de novas minas continua essencial, mas o prazo médio entre descoberta e produção de uma mina de cobre é de aproximadamente 17 anos, o que torna a expansão da oferta lenta e complexa.',
        description: 'Estudo da S&P Global indica que a corrida pela IA e maiores gastos em defesa ampliam o déficit na oferta global de cobre diante da demanda acelerada.',
        source: 'S&P Global',
        url: 'https://www.press.spglobal.com/2026-01-08-Substantial-Shortfall-in-Copper-Supply-Widens-as-the-Race-for-AI-and-Growing-Defense-Spending-Add-to-Accelerating-Demand,-New-S-P-Global-Study-Finds',
        image: 'https://images.unsplash.com/photo-1605336692734-77e8a94b419c?q=80&w=600&h=400&fit=crop'
      }
    ]
  },
  polipropileno: {
    id: 'polipropileno',
    label: 'Polipropileno',
    icon: Hexagon,
    headline: 'O mercado brasileiro de polipropileno depende estruturalmente de importações para complementar a produção doméstica, enquanto o cenário internacional combina excesso de capacidade, expansão acelerada da produção chinesa e riscos temporários de oferta ligados ao Oriente Médio.',
    statusSubtitle: 'Capacidade brasileira abaixo da demanda, importações elevadas, expansão da oferta chinesa e perspectiva de excesso global',
    observeSummary: 'O Brasil possui capacidade para produzir cerca de 1,85 milhão de toneladas de polipropileno por ano diante de uma demanda próxima de 2,05 milhões, tornando as importações necessárias para equilibrar o mercado. Em 2026, o conflito no Oriente Médio interrompeu fluxos tradicionais e provocou forte alta dos preços, mas o cenário mundial continua marcado por capacidade produtiva superior à demanda. A expansão da produção chinesa e a normalização gradual das rotas comerciais podem voltar a pressionar os preços para baixo, embora tarifas, câmbio e custos logísticos façam com que esse movimento não seja necessariamente reproduzido integralmente no mercado brasileiro.',
    observeTitle: 'Últimas notícias',
    observeNotes: [
      'O Brasil possui capacidade instalada para produzir aproximadamente 1,85 milhão de toneladas de polipropileno por ano diante de uma demanda próxima de 2,05 milhões. A diferença é de cerca de 200 mil toneladas anuais, o que significa que a produção doméstica, mesmo operando em níveis elevados, não consegue atender sozinha o consumo do país. Por isso, as importações têm papel estrutural no equilíbrio do mercado brasileiro e não representam apenas uma resposta a períodos temporários de escassez.',
      'As importações brasileiras de polietileno e polipropileno somaram 1,079 milhão de toneladas no primeiro semestre de 2026, ante 1,018 milhão no mesmo período de 2025. No polipropileno, Colômbia, Arábia Saudita e China permaneceram entre as principais origens, enquanto as compras de produto chinês aumentaram de 44,1 mil para 59,3 mil toneladas, mostrando que a China vem ganhando espaço no abastecimento brasileiro.',
      'A origem das importações também é influenciada pelas regras comerciais brasileiras. O polipropileno dos Estados Unidos permanece sujeito a uma tarifa antidumping de 10,6% até outubro de 2027, cobrança adicional aplicada para reduzir os efeitos de importações consideradas vendidas abaixo de condições normais de mercado. Medidas envolvendo África do Sul e Índia estão em revisão, o que pode alterar a competitividade entre diferentes origens mesmo quando existe produto disponível internacionalmente.',
      'O conflito no Oriente Médio provocou uma forte alta temporária dos preços de polietileno e polipropileno no Brasil, com aumentos entre 64% e 80% desde o fim de fevereiro. O movimento ocorreu porque fornecedores tradicionais tiveram dificuldades para manter os fluxos, ao mesmo tempo que compradores buscaram aumentar estoques por receio de falta de produto. O cenário divulgado em abril indicava normalização gradual dos preços ao longo de três a seis meses após a reabertura de Ormuz, e não uma alta considerada permanente.',
      'Fora do período de interrupções, o mercado mundial apresenta oferta superior ao consumo. A capacidade global de produção de polipropileno é estimada em aproximadamente 123 milhões de toneladas por ano diante de uma demanda próxima de 98 milhões. Essa diferença mostra que a escassez observada em 2026 está relacionada principalmente a problemas temporários de produção e logística, e não à falta estrutural de capacidade mundial.',
      'A China deve adicionar mais de 4 milhões de toneladas por ano de nova capacidade de polipropileno em 2026 e já possui autossuficiência superior a 90%. O país deve se tornar exportador líquido do produto, enquanto a demanda asiática permanece relativamente fraca. Com novas plantas entrando em operação e a oferta regional se recuperando, o mercado tende a retornar a condições de excesso de oferta em 2027, embora novas interrupções geopolíticas ainda possam provocar períodos temporários de escassez.'
    ],
    lorenzettiImpacts: [
      'Como a produção brasileira não é suficiente para atender todo o consumo de polipropileno, uma interrupção relevante nas importações pode reduzir rapidamente a disponibilidade do material e elevar fretes ou prazos de entrega. Para a Lorenzetti, isso pode tornar mais importante manter alternativas de fornecimento previamente avaliadas e conhecer os prazos de reposição das resinas utilizadas na produção, reduzindo a dependência de uma única origem em períodos de restrição internacional.',
      'Oscilações internacionais do polipropileno podem afetar o custo de resinas, compostos plásticos e componentes produzidos a partir desse material. O impacto efetivo para a Lorenzetti depende da participação do PP em cada produto, dos contratos com fornecedores, do câmbio e da capacidade de negociação ou absorção de aumentos ao longo da cadeia.',
      'A expansão da capacidade chinesa pode aumentar o volume de polipropileno disponível para exportação justamente quando o Brasil continua necessitando de produto importado para complementar sua produção. Isso pode ampliar o número de fornecedores e aumentar o poder de negociação da Lorenzetti, mas a vantagem econômica depende do custo efetivo de chegada ao Brasil, incluindo preço da resina, câmbio, frete, tarifas, qualidade e prazo de entrega.',
      'O excesso de capacidade mundial não significa necessariamente que os preços brasileiros cairão na mesma proporção. Tarifas antidumping, câmbio, frete internacional e diferenças entre fornecedores podem impedir que uma queda do preço externo seja totalmente transferida ao mercado doméstico. Por isso, comparar preços internacionais com as condições efetivamente oferecidas no Brasil pode ser mais útil do que acompanhar apenas uma cotação global.',
      'O contraste entre a escassez temporária observada em 2026 e a possibilidade de excesso de oferta em 2027 pode criar condições muito diferentes para compras e estoques ao longo do tempo. Para a Lorenzetti, decisões sobre volumes, contratos e níveis de estoque podem considerar que períodos de produto caro e restrito podem ser seguidos por maior disponibilidade e competição entre fornecedores caso os fluxos internacionais se normalizem.'
    ],
    evidences: [
      {
        id: 'ev-pp-plasticosemrevista-2026',
        tag: 'IMPORTAÇÕES BRASIL',
        dateStr: '07/2026',
        title: 'Importações brasileiras de PP seguem elevadas e fornecedores asiáticos ganham espaço',
        summary: 'As importações brasileiras de polietileno e polipropileno somaram cerca de 1,08 milhão de toneladas no primeiro semestre de 2026, acima de 1,02 milhão no mesmo período de 2025. No caso do PP, Colômbia, Arábia Saudita e China permanecem entre as principais origens, com forte avanço do produto chinês, cujas vendas ao Brasil passaram de 44,1 mil para 59,3 mil toneladas entre os primeiros semestres de 2025 e 2026. A combinação de consumo doméstico fraco, oferta nacional insuficiente, alterações tarifárias e mudanças nos fluxos globais continua mantendo o Brasil dependente de importações para equilibrar o mercado.',
        description: 'Plásticos em Revista reporta o avanço das importações de resinas plásticas no Brasil e o crescimento expressivo da participação chinesa no fornecimento de PP.',
        source: 'Plásticos em Revista',
        url: 'https://www.plasticosemrevista.com.br/pp-e-pe-importacoes-mantiveram-o-pique-no-1o-semestre/',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&h=400&fit=crop'
      },
      {
        id: 'ev-pp-icis-brasil-2026',
        tag: 'MERCADO BRASILEIRO & ORMUZ',
        dateStr: '16/04/2026',
        title: 'Choque do Oriente Médio eleva preços de PP no Brasil, mas normalização pode trazer alívio',
        summary: 'O mercado brasileiro de PE e PP sofreu forte pressão de preços em 2026 após interrupções de oferta ligadas ao conflito no Oriente Médio. O Brasil possui capacidade produtiva de aproximadamente 1,85 milhão de toneladas por ano de PP, abaixo de uma demanda próxima de 2,05 milhões, o que torna as importações necessárias para evitar escassez. No mercado mundial, porém, a situação é oposta, com capacidade de aproximadamente 123 milhões de toneladas para demanda de 98 milhões, indicando excesso estrutural de oferta fora do período de interrupções. A ICIS avalia que preços elevados podem persistir por alguns meses após a reabertura de Ormuz, mas tendem a perder força conforme os fluxos comerciais sejam normalizados.',
        description: 'ICIS detalha o descompasso produtivo de PP no Brasil, o papel das importações e a perspectiva de alívio nas cotações com a reabertura de rotas.',
        source: 'ICIS',
        url: 'https://www.icis.com/explore/resources/news/2026/04/16/11198640/brazil-s-pe-pp-prices-could-peak-in-may-as-middle-east-conflict-squeezes-supply-icis/',
        image: 'https://images.unsplash.com/photo-1518112166137-85f9979a43ac?q=80&w=600&h=400&fit=crop'
      },
      {
        id: 'ev-pp-icis-china-capacidade-2026',
        tag: 'CAPACIDADE ASIÁTICA',
        dateStr: '2026',
        title: 'Nova capacidade na China aumenta perspectiva de excesso de oferta de PP após choque de 2026',
        summary: 'O mercado asiático de propileno e polipropileno combina custos de matéria-prima ainda sujeitos às tensões no Oriente Médio com crescimento acelerado da capacidade produtiva. A China deve adicionar mais de 4 milhões de toneladas por ano de nova capacidade de PP em 2026 e já apresenta autossuficiência superior a 90%, podendo se tornar exportadora líquida do produto. Os preços chineses de PP chegaram aos maiores níveis em mais de quatro anos durante as interrupções do início de 2026, mas recuaram após a melhora da oferta. Com demanda final ainda fraca e novas plantas entrando em operação, o mercado tende a retornar a condições de excesso de oferta em 2027, embora novas tensões geopolíticas possam provocar períodos temporários de aperto.',
        description: 'ICIS analisa a adição de mais de 4 milhões de toneladas de capacidade na China em 2026 e a perspectiva de excesso de oferta de PP em 2027.',
        source: 'ICIS',
        url: 'https://www.icis.com/explore/commodities/chemicals/propylene/',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&h=400&fit=crop'
      }
    ]
  },
  petroleo: {
    id: 'petroleo',
    label: 'Petróleo',
    icon: Droplet,
    headline: 'O mercado mundial de petróleo permanece pressionado pelas restrições de produção e transporte no Golfo, enquanto o Estreito de Ormuz continua sendo o principal ponto de vulnerabilidade da oferta. O cenário de escassez em 2026 pode, porém, se inverter para excesso de oferta em 2027 caso os fluxos da região sejam normalizados.',
    statusSubtitle: 'Déficit projetado de 1,5 milhão de barris por dia em 2026, Brent próximo de US$ 90 e possível retorno do excesso de oferta em 2027',
    observeSummary: 'A guerra no Oriente Médio alterou rapidamente o equilíbrio do mercado de petróleo. As restrições à produção e às exportações do Golfo transformaram a expectativa anterior de excesso de oferta em déficit para 2026 e elevaram os preços do petróleo e, principalmente, de derivados como diesel. Ao mesmo tempo, produtores aceleram rotas alternativas para reduzir a dependência do Estreito de Ormuz. Para 2027, a recuperação dos fluxos do Golfo, maior produção nas Américas e menor crescimento da demanda chinesa podem levar o mercado novamente a um cenário de excesso de oferta, mas essa projeção depende da normalização do transporte pela região.',
    observeTitle: 'Últimas notícias',
    observeNotes: [
      'O mercado de petróleo passou de uma expectativa de excesso de oferta para um déficit médio projetado de 1,5 milhão de barris por dia em 2026. Antes da guerra com o Irã, analistas esperavam superávit de 1,63 milhão de barris por dia. A mudança ocorreu porque o conflito reduziu produção e exportações do Golfo e restringiu o transporte pelo Estreito de Ormuz, rota que concentrava cerca de um quinto do abastecimento mundial de petróleo antes da guerra.',
      'A redução da oferta elevou fortemente as cotações. O petróleo Brent chegou a superar US$ 120 por barril em abril e mantém média próxima de US$ 90 em 2026, ante aproximadamente US$ 70 no ano anterior. O movimento mostra como interrupções de produção e transporte no Golfo conseguem afetar rapidamente o preço internacional, mesmo quando outras regiões ampliam a oferta.',
      'Os derivados de petróleo sofreram pressão ainda maior do que o petróleo bruto. O diesel foi especialmente afetado pela menor oferta proveniente do Golfo e por problemas em refinarias russas, enquanto o aumento da produção e das exportações de refinarias americanas ajudou a aliviar parte das restrições sobre combustível de aviação. Isso mostra que os preços de cada derivado podem reagir de forma diferente mesmo quando todos partem da mesma matéria-prima.',
      'Para 2027, o mercado pode passar novamente para excesso de oferta de aproximadamente 1,9 milhão de barris por dia. A projeção considera recuperação dos fluxos do Golfo, reversão de cortes da Opep+, maior produção nos Estados Unidos e América Latina e crescimento mais fraco da demanda chinesa. A oferta mundial pode aumentar cerca de 7,5 milhões de barris por dia no próximo ano, mas essa recuperação depende diretamente da normalização do transporte por Ormuz.',
      'A dependência do Estreito de Ormuz permanece elevada mesmo com os novos projetos de oleodutos. Iraque, Kuwait e Qatar exportam juntos cerca de 5 milhões de barris de petróleo por dia pela passagem, aproximadamente um quarto do petróleo bruto que atravessa o estreito. Arábia Saudita e Emirados Árabes Unidos já possuem rotas alternativas e estão ampliando sua capacidade, enquanto o Iraque avalia corredores pela Síria, Turquia e Jordânia e o Kuwait ainda possui alternativas muito mais limitadas.',
      'Os produtores do Golfo estão acelerando rotas alternativas para reduzir a dependência do Estreito de Ormuz, incluindo ampliações de oleodutos para o Mar Vermelho, Golfo de Omã e possíveis corredores pela Síria, Turquia e Jordânia. Essas alternativas podem preservar parte das exportações em períodos de bloqueio, mas não eliminam o risco, porque oleodutos, portos e outras infraestruturas energéticas também podem ser atingidos por conflitos. Por isso, Ormuz continua sendo um ponto central de vulnerabilidade para o abastecimento mundial de energia.'
    ],
    lorenzettiImpacts: [
      'A pressão sobre o diesel pode afetar diretamente custos de frete e transporte rodoviário, mesmo quando a cotação do petróleo bruto não sobe na mesma proporção. Para a Lorenzetti, isso pode elevar custos de movimentação de matérias-primas, abastecimento de fábricas e distribuição de produtos, porque o diesel tem peso relevante na logística brasileira.',
      'O petróleo também serve de matéria-prima para plásticos, resinas, embalagens e outros produtos petroquímicos utilizados em diferentes etapas da cadeia industrial. Uma alta prolongada do petróleo e de seus derivados pode pressionar esses insumos, embora o efeito final sobre a Lorenzetti dependa de contratos, câmbio, oferta local e capacidade dos fornecedores de absorver ou repassar os aumentos.',
      'As restrições em Ormuz podem afetar a Lorenzetti mesmo em itens que não utilizam petróleo diretamente. Quando navios enfrentam atrasos, mudanças de rota ou maior custo de abastecimento, fretes internacionais e prazos de entrega podem aumentar, afetando matérias-primas e componentes importados ao longo de diferentes cadeias de fornecimento.',
      'A forte dependência mundial de Ormuz e a possibilidade de ataques também às rotas alternativas mantêm risco de novas interrupções repentinas. Para a Lorenzetti, esse cenário pode aumentar a importância de acompanhar origem dos insumos, prazos de reposição, fornecedores alternativos e níveis de estoque em materiais mais sensíveis a atrasos logísticos.',
      'A possibilidade de o mercado passar de déficit em 2026 para excesso de oferta em 2027 cria um cenário muito diferente entre curto e médio prazo. Caso os fluxos do Golfo sejam normalizados e a oferta mundial aumente conforme o projetado, preços de petróleo, derivados e alguns custos logísticos podem recuar. Para a Lorenzetti, decisões de compra, contratos e estoques devem considerar que as condições atuais de custo elevado podem não permanecer no mesmo patamar no próximo ano.'
    ],
    evidences: [
      {
        id: 'ev-petroleo-reuters-deficit-2026',
        tag: 'MERCADO DE PETRÓLEO',
        dateStr: '22/07/2026',
        title: 'Guerra transforma mercado de petróleo em déficit em 2026, mas excesso de oferta pode retornar em 2027',
        summary: 'O conflito no Oriente Médio alterou de forma significativa o equilíbrio mundial de petróleo. Analistas passaram a projetar um déficit médio de 1,5 milhão de barris por dia em 2026, aproximadamente o dobro do déficit estimado em abril e uma mudança relevante frente ao superávit de 1,63 milhão de barris por dia esperado antes da guerra. Para 2027, porém, o cenário pode se inverter para um excesso de oferta de cerca de 1,9 milhão de barris por dia, sustentado pela recuperação dos fluxos do Golfo, aumento da produção dos Estados Unidos e América Latina, reversão de cortes da Opep+ e menor crescimento da demanda chinesa. Essa recuperação depende principalmente da normalização do transporte pelo Estreito de Ormuz.',
        description: 'Reuters analisa a projeção de déficit médio de 1,5 milhão de bpd em 2026 e a perspectiva de excesso de oferta em 2027 caso haja normalização em Ormuz.',
        source: 'Reuters',
        url: 'https://www.reuters.com/business/energy/middle-east-war-deepens-2026-oil-deficit-outlook-2027-glut-still-looms-2026-07-22/',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&h=400&fit=crop'
      },
      {
        id: 'ev-petroleo-reuters-seis-meses-2026',
        tag: 'ENERGIA E DERIVADOS',
        dateStr: '27/08/2026',
        title: 'Seis meses de guerra mantêm petróleo e derivados pressionados pela interrupção das rotas do Golfo',
        summary: 'A interrupção da produção e das exportações do Golfo elevou fortemente os preços de energia ao longo de 2026. O petróleo Brent chegou a superar US$ 120 por barril em abril e mantém média próxima de US$ 90 em 2026, frente a aproximadamente US$ 70 no ano anterior. O impacto foi ainda mais forte sobre derivados como diesel, pressionados por menor oferta do Golfo e problemas em refinarias russas, enquanto o aumento da produção e das exportações de refinarias americanas ajudou a aliviar parte das restrições sobre combustível de aviação. Novas interrupções em Ormuz durante o inverno do Hemisfério Norte podem voltar a pressionar combustíveis e inflação.',
        description: 'Reuters detalha a manutenção da média do Brent próxima a US$ 90 em 2026 e o impacto severo sobre derivados como o diesel.',
        source: 'Reuters',
        url: 'https://www.reuters.com/business/energy/six-months-war-how-middle-east-conflict-has-shaped-financial-markets-2026-08-27/',
        image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&h=400&fit=crop'
      },
      {
        id: 'ev-petroleo-valor-oleodutos-2026',
        tag: 'ROTAS E INFRAESTRUTURA',
        dateStr: '02/09/2026',
        title: 'Países produtores aceleram oleodutos alternativos para reduzir dependência do Estreito de Ormuz',
        summary: 'O fechamento prolongado do Estreito de Ormuz está levando produtores do Oriente Médio a buscar rotas alternativas para exportar petróleo e gás. Arábia Saudita e Emirados Árabes Unidos planejam ampliar oleodutos que permitem chegar ao Mar Vermelho e ao Golfo de Omã sem atravessar o estreito, enquanto o Iraque avalia rotas pela Síria, Turquia e Jordânia. Kuwait e Qatar estão em situação mais vulnerável por terem poucas alternativas de escoamento. Iraque, Kuwait e Qatar exportam juntos cerca de 5 milhões de barris de petróleo por dia através de Ormuz, aproximadamente um quarto do petróleo bruto que passa pela rota, mostrando por que ampliar infraestrutura alternativa ganhou importância estratégica.',
        description: 'Valor Econômico reporta o avanço dos projetos de oleodutos no Oriente Médio para contornar o Estreito de Ormuz.',
        source: 'Valor Econômico',
        url: 'https://valor.globo.com/mundo/noticia/2026/09/02/produtores-de-petrleo-buscam-alternativas-de-oleodutos-para-contornar-estreito-de-ormuz.ghtml',
        image: 'https://images.unsplash.com/photo-1582883793739-e9323f40d165?q=80&w=600&h=400&fit=crop'
      }
    ]
  },
  semicondutores: {
    id: 'semicondutores',
    label: 'Semicondutores',
    icon: Cpu,
    headline: 'O mercado global de semicondutores continua sendo impulsionado pelo crescimento da inteligência artificial e dos data centers, que ampliam investimentos em chips avançados, memórias e equipamentos de fabricação. No Brasil, em um contexto de elevada dependência de importações, o governo regulamentou o Brasil Semicon para ampliar gradualmente a participação nacional na cadeia mundial.',
    statusSubtitle: 'Mais de 85% dos chips utilizados no Brasil são importados, enquanto IA acelera investimentos globais e o Brasil Semicon busca ampliar a produção nacional',
    observeSummary: 'A cadeia de semicondutores vive um ciclo de investimentos concentrado nas tecnologias ligadas à inteligência artificial, enquanto segmentos tradicionais avançam em ritmo mais moderado. O Brasil parte de uma posição de elevada dependência externa e capacidade limitada nas etapas mais sofisticadas da fabricação. O Brasil Semicon busca ampliar gradualmente essa participação por meio de incentivos, pesquisa, qualificação profissional e financiamento, mas a construção de uma cadeia nacional mais robusta depende de escala, tecnologia e investimentos de longo prazo.',
    observeTitle: 'Últimas notícias',
    observeNotes: [
      'O Brasil regulamentou em julho de 2026 o Programa Brasil Semicondutores, conhecido como Brasil Semicon, com a meta de elevar a participação nacional na cadeia global de chips de aproximadamente 1% para 2% até 2033. O programa atualiza os instrumentos do antigo Padis e prevê incentivos tributários, apoio à pesquisa e inovação, formação de profissionais especializados, financiamento de investimentos e simplificação do comércio exterior.',
      'Mais de 85% dos semicondutores utilizados no Brasil são importados, mostrando que a indústria nacional ainda depende fortemente de fornecedores estrangeiros. O país possui empresas e centros de pesquisa capazes de atuar em algumas etapas da cadeia, mas ainda não produz em grande escala e apresenta limitações nas fases mais sofisticadas da fabricação, tornando a redução dessa dependência um processo de longo prazo.',
      'Parte da política industrial já começou a se transformar em investimentos concretos. Em junho de 2026, o BNDES aprovou R$ 143,3 milhões para a Zilia Technologies ampliar sua capacidade produtiva, realizar pesquisa e desenvolvimento e modernizar sua fábrica em Atibaia. O projeto representa um exemplo do tipo de expansão industrial que o Brasil Semicon pretende estimular.',
      'A inteligência artificial está direcionando uma parcela crescente dos investimentos mundiais em semicondutores para equipamentos de inspeção, montagem, testes e empacotamento avançado. A demanda é impulsionada por data centers e processadores de alto desempenho, que utilizam tecnologias como memórias HBM, desenvolvidas para transferir grandes volumes de dados em alta velocidade e necessárias para aplicações intensivas de inteligência artificial.',
      'O crescimento do mercado não ocorre de maneira uniforme. Chips e equipamentos relacionados à inteligência artificial e à computação de alto desempenho apresentam expansão mais forte, enquanto segmentos associados a computadores pessoais e smartphones avançam em ritmo mais moderado. Isso significa que o atual ciclo de investimentos está concentrado em determinadas tecnologias e não representa crescimento equivalente para toda a indústria de semicondutores.',
      'A produção de semicondutores envolve várias etapas altamente especializadas, desde o desenvolvimento e desenho dos chips até fabricação, montagem e testes. O Brasil possui empresas e centros de pesquisa capazes de atuar em partes dessa cadeia, mas ainda tem presença limitada nas etapas de maior complexidade tecnológica e não possui produção em escala suficiente para atender o mercado interno. Essa estrutura ajuda a explicar por que ampliar a participação nacional exige mais do que simplesmente instalar novas fábricas.'
    ],
    lorenzettiImpacts: [
      'Como mais de 85% dos semicondutores utilizados no Brasil são importados, componentes eletrônicos usados em produtos da Lorenzetti podem permanecer expostos a variações de câmbio, frete, disponibilidade internacional e prazos de entrega. Uma interrupção externa pode chegar à empresa mesmo sem ocorrer diretamente em um fornecedor brasileiro, porque grande parte da cadeia nacional continua dependente de componentes produzidos no exterior.',
      'O Brasil Semicon pode ampliar gradualmente a capacidade nacional e criar novas alternativas de fornecimento, mas essa mudança não deve ser tratada como solução imediata para a dependência de importações. O desenvolvimento de produção local exige investimento, conhecimento técnico, escala e qualificação dos fornecedores, fazendo com que os efeitos do programa sejam mais relevantes no médio e longo prazo.',
      'Os investimentos apoiados pelo BNDES e pela Finep podem aumentar a capacidade tecnológica de empresas brasileiras e ampliar as etapas da cadeia realizadas no país. Para a Lorenzetti, o avanço dessa estrutura pode abrir novas possibilidades de fornecedores nacionais no futuro, desde que os componentes oferecidos atendam aos requisitos de desempenho, qualidade, confiabilidade e escala necessários aos produtos da empresa.',
      'A concentração dos investimentos mundiais em chips avançados para inteligência artificial não significa necessariamente maior disponibilidade de todos os semicondutores utilizados pela indústria. Fabricantes podem direcionar capacidade e investimentos para segmentos de maior crescimento, enquanto componentes eletrônicos convencionais seguem outra dinâmica de oferta e demanda. Para a Lorenzetti, isso reforça a importância de acompanhar especificamente os componentes utilizados em seus produtos, e não apenas o crescimento geral do setor.',
      'A criação de uma cadeia brasileira mais ampla também pode reduzir parte da exposição logística e cambial no longo prazo, mas apenas nos componentes que efetivamente passarem a ser produzidos nacionalmente com escala e competitividade. Para a Lorenzetti, isso significa que uma eventual nacionalização deve ser avaliada componente por componente, comparando custo total, desempenho técnico, disponibilidade e segurança de fornecimento com as alternativas importadas.'
    ],
    evidences: [
      {
        id: 'ev-semicondutores-investing-ia-2026',
        tag: 'TECNOLOGIA & IA',
        dateStr: '2026',
        title: 'Inteligência artificial amplia investimentos em equipamentos e empacotamento avançado de semicondutores',
        summary: 'O crescimento da inteligência artificial está aumentando os investimentos em partes específicas da cadeia de semicondutores, especialmente equipamentos usados em montagem, testes e empacotamento avançado dos chips. A expansão de data centers e os maiores investimentos de fabricantes de chips e memória vêm ampliando a demanda por tecnologias como HBM, memória de alta largura de banda, e empacotamento 2.5D, necessários para processadores avançados de IA. O cenário é forte para equipamentos de inspeção, testes e montagem, embora a demanda mais moderada por computadores pessoais e smartphones continue sendo um risco para segmentos menos ligados à IA.',
        description: 'Investing.com destaca o crescimento dos investimentos em tecnologias de montagem, testes e empacotamento avançado de semicondutores impulsionados pela IA.',
        source: 'Investing.com',
        url: 'https://www.br.investing.com/news/stock-market-news/b-riley-aponta-as-principais-acoes-de-equipamentos-para-semicondutores-93CH-2011861',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&h=400&fit=crop'
      },
      {
        id: 'ev-semicondutores-valor-mercado-2026',
        tag: 'MERCADO GLOBAL',
        dateStr: '21/07/2026',
        title: 'Setor de chips mantém força nos mercados mesmo com tensão geopolítica e petróleo acima de US$ 90',
        summary: 'As empresas de tecnologia, chips e semicondutores voltaram a liderar os ganhos nas bolsas americanas em julho de 2026, após uma correção recente, mostrando que as expectativas em torno do setor permanecem fortes mesmo em um ambiente internacional mais instável. O setor de tecnologia avançou 2,35% no pregão, enquanto Nasdaq, S&P 500 e Dow Jones também fecharam em alta. Ao mesmo tempo, a continuidade dos ataques entre Estados Unidos e Irã levou o petróleo Brent acima de US$ 90 por barril, mostrando que o ciclo positivo dos semicondutores ocorre em paralelo a riscos geopolíticos e energéticos relevantes.',
        description: 'Valor Econômico analisa a valorização das ações de tecnologia e semicondutores em Nova York em meio a incertezas geopolíticas globais.',
        source: 'Valor Econômico',
        url: 'https://valor.globo.com/financas/noticia/2026/07/21/bolsas-sobem-em-ny-com-impulso-de-chips-e-semicondutores-apesar-de-tensoes-no-oriente-medio.ghtml',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&h=400&fit=crop'
      },
      {
        id: 'ev-semicondutores-forum-brasilsemicon-2026',
        tag: 'POLÍTICA INDUSTRIAL BRASIL',
        dateStr: '07/2026',
        title: 'Brasil regulamenta programa para ampliar participação na cadeia global de semicondutores',
        summary: 'O Brasil regulamentou em julho de 2026 o Programa Brasil Semicondutores, o Brasil Semicon, com o objetivo de ampliar a presença nacional na cadeia global de chips e elevar sua participação de aproximadamente 1% para 2% até 2033. O programa moderniza o antigo Padis e reúne incentivos tributários, apoio à pesquisa e inovação, formação de profissionais especializados, financiamento para expansão tecnológica e simplificação do comércio exterior. A política busca reduzir uma dependência atualmente elevada, já que mais de 85% dos chips utilizados no Brasil são importados e o país ainda possui capacidade limitada nas etapas mais sofisticadas de fabricação. A estratégia também prevê apoio do BNDES e da Finep para novos projetos, aquisição de máquinas, infraestrutura laboratorial e modernização industrial. Em junho de 2026, o BNDES aprovou R$ 143,3 milhões para a Zilia Technologies ampliar a produção de semicondutores e modernizar sua fábrica em Atibaia, mostrando que parte da política já começou a se traduzir em projetos concretos.',
        description: 'Revista Fórum reporta a regulamentação do Brasil Semicon e os primeiros desembolsos do BNDES para a fábrica da Zilia Technologies.',
        source: 'Revista Fórum',
        url: 'https://www.revistaforum.com.br/tecnologia/o-plano-do-brasil-para-entrar-na-corrida-global-dos-semicondutores/',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&h=400&fit=crop'
      }
    ]
  },
  terras_raras: {
    id: 'terras_raras',
    label: 'Terras raras',
    icon: Sparkles,
    headline: 'O Brasil possui uma das maiores reservas mundiais de terras raras e atrai crescente interesse internacional em um momento de busca por alternativas à cadeia concentrada na China. O potencial é elevado, mas a transformação das reservas em produção comercial depende de investimentos, processamento local, licenciamento e projetos que levam vários anos para amadurecer.',
    statusSubtitle: 'Brasil possui cerca de 21 milhões de toneladas em reservas, US$ 2,2 bilhões em investimentos previstos e apenas uma operação comercial atualmente',
    observeSummary: 'O Brasil reúne cerca de 21 milhões de toneladas de óxidos de terras raras, a segunda maior reserva mundial, mas ainda possui produção comercial limitada. Há 20 projetos em diferentes estágios de desenvolvimento e US$ 2,2 bilhões em investimentos previstos entre 2025 e 2029, enquanto o interesse internacional aumenta diante da busca por fornecedores alternativos à China. Transformar esse potencial geológico em oferta comercial, porém, exige pesquisa, licenciamento, financiamento, mineração e capacidade de processamento, processo que pode levar de cinco a dez anos e não garante que todos os projetos atualmente anunciados cheguem à produção.',
    observeTitle: 'Últimas notícias',
    observeNotes: [
      'O Brasil possui aproximadamente 21 milhões de toneladas de óxidos de terras raras, volume que coloca o país como detentor da segunda maior reserva mundial, atrás apenas da China. Apesar desse potencial geológico, apenas o complexo Serra Verde, em Goiás, opera comercialmente atualmente, mostrando que possuir grandes reservas não significa ter capacidade equivalente de produção e processamento.',
      'Os investimentos previstos em projetos brasileiros de terras raras somam cerca de US$ 2,2 bilhões entre 2025 e 2029, acima dos US$ 1,5 bilhão estimados anteriormente para o período de 2024 a 2028. O país possui 20 projetos em desenvolvimento, dos quais oito apresentam estudos de reservas mais avançados, indicando expansão do interesse, mas com grande parte da capacidade ainda em fase de desenvolvimento.',
      'A Serra Verde possui uma posição particularmente relevante porque é a única produtora comercial de terras raras no Brasil e a única operação fora da Ásia capaz de fornecer conjuntamente neodímio, praseodímio, disprósio e térbio. Esses minerais são utilizados na fabricação de ímãs de alto desempenho empregados em motores elétricos, eletrônicos, turbinas eólicas, equipamentos aeroespaciais e sistemas de defesa.',
      'O interesse internacional pelas reservas brasileiras aumentou rapidamente. Das 2.727 solicitações de pesquisa de terras raras registradas no país, 42% envolvem empresas estrangeiras ou com participação estrangeira e mais de 86% foram protocoladas nos três anos anteriores. O movimento mostra que o Brasil ganhou importância na busca mundial por novas fontes desses minerais fora da cadeia hoje fortemente concentrada na China.',
      'A transformação de uma descoberta mineral em produção comercial é lenta. Novos projetos de terras raras podem levar entre cinco e dez anos para passar da pesquisa ao início da produção, enquanto parte das áreas de interesse está próxima de unidades de conservação ou territórios indígenas. Por isso, disponibilidade de reservas e anúncio de investimentos não devem ser tratados como oferta disponível no curto prazo.',
      'O Brasil também discute instrumentos para ampliar o beneficiamento e a transformação de minerais críticos e estratégicos dentro do país, grupo mais amplo que pode incluir terras raras entre outros minerais considerados importantes para a economia e a segurança de abastecimento. O projeto em análise no Senado prevê cerca de R$ 7 bilhões em mecanismos de apoio ao longo de cinco anos, mas ainda não está em vigor. Separadamente, BNDES e Finep disponibilizaram uma chamada de R$ 5 bilhões para projetos de transformação de minerais estratégicos, mostrando que parte dos instrumentos de financiamento já existe enquanto a nova política nacional permanece em tramitação.'
    ],
    lorenzettiImpacts: [
      'O desenvolvimento de uma cadeia brasileira de terras raras pode, no longo prazo, ampliar a oferta nacional de materiais utilizados na fabricação de ímãs de alto desempenho e de componentes eletroeletrônicos. Para a Lorenzetti, isso pode ser relevante em produtos ou componentes adquiridos de fornecedores que utilizem esses materiais, reduzindo potencialmente parte da exposição a cadeias internacionais. Esse efeito, porém, depende da entrada efetiva dos projetos em produção e do desenvolvimento de processamento industrial no Brasil, algo que ainda não existe em escala suficiente no curto prazo.',
      'O prazo de cinco a dez anos necessário para novos projetos entrarem em produção significa que o crescimento das reservas e dos investimentos brasileiros não elimina a dependência atual das cadeias internacionais. Para a Lorenzetti, eventuais componentes que utilizem terras raras podem continuar expostos a preços, disponibilidade e decisões comerciais de mercados externos durante a maturação da produção brasileira.',
      'Ampliar apenas a extração mineral não é suficiente para formar uma cadeia nacional de terras raras. Depois de retirados da mina, esses minerais precisam passar por etapas de separação, refino e transformação antes de poderem ser utilizados em ímãs e componentes tecnológicos. Para a Lorenzetti, uma cadeia brasileira mais completa poderia ampliar futuramente as alternativas de fornecimento, mas isso depende de o país desenvolver também essas etapas industriais com qualidade, escala e competitividade.',
      'A procura internacional por projetos brasileiros aumenta a competição pelos recursos e pode direcionar parte da futura produção para mercados externos. Isso significa que o crescimento da mineração nacional não garante automaticamente preços menores ou disponibilidade prioritária no Brasil, já que contratos de longo prazo, demanda internacional e capacidade de processamento também influenciam para onde esses minerais serão destinados.',
      'Os desafios ambientais e regulatórios podem alterar cronogramas ou impedir o avanço de determinados projetos, especialmente quando áreas de pesquisa estão próximas de unidades de conservação ou territórios indígenas. Para a Lorenzetti, a eventual seleção de fornecedores ligados a essa cadeia pode exigir atenção à origem dos minerais, regularidade do licenciamento e rastreabilidade, reduzindo riscos de depender de projetos sujeitos a interrupções regulatórias ou socioambientais.'
    ],
    evidences: [
      {
        id: 'ev-terras-raras-senado-politica-2026',
        tag: 'POLÍTICA NACIONAL',
        dateStr: '08/05/2026',
        title: 'Brasil avança na criação de política nacional para minerais críticos e estratégicos',
        summary: 'O projeto que cria uma política nacional para minerais críticos e estratégicos chegou ao Senado após aprovação na Câmara, propondo estímulos para que o Brasil avance além da extração e desenvolva também beneficiamento e transformação desses minerais dentro do país. A proposta prevê cerca de R$ 7 bilhões em mecanismos de apoio ao longo de cinco anos, sendo R$ 2 bilhões para um fundo garantidor e R$ 5 bilhões em créditos fiscais. Também cria um conselho responsável por definir e atualizar quais minerais serão considerados críticos ou estratégicos e estabelece instrumentos para pesquisa, inovação e priorização de projetos. Na data da matéria, o texto ainda seria analisado pelo Senado, portanto as medidas não deveriam ser tratadas como já implementadas.',
        description: 'Agência Senado detalha a tramitação do projeto de política nacional para minerais críticos e estratégicos com previsão de R$ 7 bilhões em estímulos.',
        source: 'Agência Senado',
        url: 'https://www12.senado.leg.br/noticias/materias/2026/05/08/senado-vai-analisar-criacao-de-politica-nacional-para-minerais-criticos',
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&h=400&fit=crop'
      },
      {
        id: 'ev-terras-raras-apnews-brasil-2026',
        tag: 'MINERAÇÃO & RESERVAS',
        dateStr: '2026',
        title: 'Brasil ganha importância como alternativa à China em terras raras, mas expansão traz desafios ambientais',
        summary: 'O Brasil está atraindo crescente interesse internacional por possuir uma das maiores reservas mundiais de terras raras e poder ajudar Estados Unidos, Austrália e outros países a diversificar cadeias hoje fortemente concentradas na China. Das 2.727 solicitações de pesquisa de terras raras registradas no país, 42% envolviam empresas estrangeiras ou com participação estrangeira, e mais de 86% dos pedidos haviam sido apresentados nos três anos anteriores. O avanço, porém, também traz desafios ambientais, já que parte dos projetos está próxima de áreas protegidas ou territórios indígenas e a passagem da pesquisa para produção comercial pode levar de cinco a dez anos. A matéria também destaca que a Serra Verde, em Goiás, é atualmente a única produtora comercial brasileira e a única fora da Ásia capaz de fornecer conjuntamente quatro terras raras magnéticas relevantes — neodímio, praseodímio, disprósio e térbio — usadas em setores como eletrônicos, veículos, energia renovável, defesa e aeroespacial.',
        description: 'AP News analisa o potencial das reservas brasileiras de terras raras como contraponto à China e os desafios ambientais e de licenciamento.',
        source: 'Associated Press (AP News)',
        url: 'https://www.apnews.com/article/brazil-energy-rare-earth-mining-amazon-rainforest-d247150492581197cfa9614c9437c4c2',
        image: 'https://images.unsplash.com/photo-1518112166137-85f9979a43ac?q=80&w=600&h=400&fit=crop'
      },
      {
        id: 'ev-terras-raras-timesbrasil-investimentos-2026',
        tag: 'INVESTIMENTOS & INDÚSTRIA',
        dateStr: '2026',
        title: 'Brasil projeta US$ 2,2 bilhões em investimentos em terras raras até 2029',
        summary: 'Os projetos brasileiros de terras raras têm US$ 2,2 bilhões em investimentos previstos entre 2025 e 2029, acima dos US$ 1,5 bilhão estimados anteriormente para 2024–2028. O país possui cerca de 21 milhões de toneladas de óxidos de terras raras, a segunda maior reserva mundial, atrás apenas da China. Há 20 projetos em desenvolvimento, dos quais oito possuem estudos de reservas mais avançados, mas apenas a Serra Verde já opera comercialmente, mostrando que grande parte do potencial brasileiro ainda está em fase de pesquisa, licenciamento ou desenvolvimento. A expansão é favorecida pela busca mundial por fornecedores alternativos à China e por iniciativas brasileiras de financiamento e política industrial, incluindo uma chamada do BNDES e Finep de R$ 5 bilhões para transformação de minerais estratégicos.',
        description: 'Times Brasil reporta a projeção de US$ 2,2 bilhões em investimentos em terras raras no Brasil até 2029 e a chamada de R$ 5 bilhões do BNDES e Finep.',
        source: 'Times Brasil',
        url: 'https://www.timesbrasil.com.br/brasil/brasil-atrai-corrida-por-terras-raras-e-projeta-us-22-bi-em-investimentos-ate-2029/',
        image: 'https://images.unsplash.com/photo-1621250953685-934cbbccdbcc?q=80&w=600&h=400&fit=crop'
      }
    ]
  }
};
