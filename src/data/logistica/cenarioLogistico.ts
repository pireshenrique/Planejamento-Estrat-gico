import { Ship, type LucideIcon } from 'lucide-react';

export interface CenarioLogisticoData {
  id: string;
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

export const CENARIO_LOGISTICO_DATA: CenarioLogisticoData = {
  id: 'cenario-logistico',
  label: 'Cenário Logístico',
  icon: Ship,
  headline: 'A logística internacional continua operando com menor previsibilidade porque conflitos e restrições operacionais afetam simultaneamente algumas das principais rotas do comércio mundial. O Estreito de Ormuz permanece sob forte instabilidade, grande parte dos grandes navios entre Ásia e Europa continua evitando o Mar Vermelho e o Canal do Panamá enfrenta limitações relacionadas ao nível de água. Ao mesmo tempo, corredores alternativos ganham importância, com destaque para a Rota Bioceânica, que pode criar uma nova ligação brasileira com o Pacífico e os mercados asiáticos.',
  statusSubtitle: 'Ormuz permanece muito abaixo do fluxo normal, grandes navios continuam desviados do Mar Vermelho e novas rotas ampliam as alternativas de acesso aos mercados asiáticos',
  observeSummary: 'A pressão sobre a logística global não está concentrada em um único ponto. O Estreito de Ormuz continua operando com tráfego visível muito inferior ao padrão considerado normal, enquanto a crise no Mar Vermelho mantém grande parte dos grandes navios da rota Ásia–Europa utilizando o trajeto mais longo pelo Cabo da Boa Esperança. Ao mesmo tempo, cancelamentos de viagens permanecem acima dos níveis observados antes da pandemia e a pontualidade dos serviços voltou a piorar, mostrando que a recente redução de alguns fretes não representa normalização da operação. Nesse ambiente, alternativas como a Rota Bioceânica ganham relevância estratégica para o Brasil, mas sua competitividade dependerá de infraestrutura, integração entre fronteiras, custos terrestres e disponibilidade de serviços marítimos.',
  observeTitle: 'Últimas notícias',
  observeNotes: [
    'O tráfego pelo Estreito de Ormuz caiu cerca de 66% após a escalada do conflito no Oriente Médio, mostrando o impacto relevante da crise sobre uma das principais rotas do comércio marítimo mundial. Apesar de uma recuperação parcial observada posteriormente, a movimentação continuava muito abaixo dos níveis considerados normais. O estreito permanece, portanto, como um ponto crítico para a logística internacional, com risco de novas restrições enquanto persistirem as tensões na região.',
    'A crise no Mar Vermelho permanece um problema separado da restrição em Ormuz e continua afetando as rotas entre Ásia e Europa. A maior parte da capacidade dos grandes navios ainda utiliza o trajeto pelo Cabo da Boa Esperança, no sul da África, em vez da passagem pelo Mar Vermelho e pelo Canal de Suez. Esse desvio exige mais navios e mais tempo para transportar o mesmo volume de carga, reduzindo a eficiência da frota mundial. Em julho, também existia risco de agravamento das restrições em Bab el-Mandeb, passagem que conecta o Mar Vermelho ao Oceano Índico, o que poderia ampliar ainda mais os desvios já existentes.',
    'As companhias marítimas continuavam retirando regularmente entre 10% e 14% da capacidade programada nas rotas mais movimentadas, diante de uma faixa de aproximadamente 6% a 8% antes da pandemia. Ao mesmo tempo, a pontualidade dos serviços caiu 3,7 pontos percentuais em junho de 2026, depois de atingir em maio o melhor nível do ano. Os fretes haviam começado a cair após cinco semanas consecutivas de alta, mas a combinação de cancelamentos e piora na pontualidade mostra que preço menor não significa necessariamente maior disponibilidade de navios ou cumprimento dos prazos programados.',
    'O Canal do Panamá também adicionou incerteza às rotas internacionais em julho de 2026. Estavam programadas reduções graduais no limite de profundidade permitido aos maiores navios, de 49,5 pés para 49 pés em 24 de julho e para 48,5 pés em 15 de agosto, como parte da gestão dos níveis de água do sistema do canal. Uma profundidade menor limita quanto peso determinadas embarcações podem transportar, e algumas companhias já começavam a aplicar cobranças adicionais para serviços que utilizavam a passagem. Na data da atualização, portanto, parte das restrições ainda estava programada e não deveria ser apresentada como situação totalmente realizada.',
    'A Rota Bioceânica de Capricórnio está sendo consolidada como uma alternativa de acesso do Brasil ao Oceano Pacífico por um corredor de aproximadamente 3.900 quilômetros que atravessa Paraguai e Argentina até os portos do norte do Chile. Para determinadas cargas destinadas aos mercados asiáticos, estudos e comunicações oficiais indicam potencial de redução de aproximadamente 12 a 17 dias no trecho marítimo, dependendo da origem, destino, porto e configuração da operação. A importância estratégica está em ampliar as opções brasileiras de rota, especialmente para fluxos que possam se beneficiar do acesso ao Pacífico, mas a vantagem precisa ser calculada caso a caso porque o corredor envolve cinco passagens de fronteira, transporte terrestre, armazenagem, seguros e serviços marítimos. A rota não substitui automaticamente Santos, Paranaguá ou outros corredores brasileiros e ainda depende de avanços em infraestrutura, integração aduaneira, fiscalização, segurança, capacidade portuária e regularidade dos serviços marítimos para alcançar maior maturidade operacional.',
    'A Rússia autorizou sete embarcações chinesas a utilizar em 2026 a Rota do Mar do Norte pelo Ártico em direção à Europa, enquanto a Sea Legend Shipping anunciou planos para lançar o primeiro serviço regular de contêineres pelo corredor, com viagens semanais durante a temporada de navegação. O movimento representa uma mudança em relação às viagens anteriores, que eram principalmente experimentais ou pontuais. A rota, porém, continua limitada pelo gelo sazonal e por custos de transporte mais elevados, portanto ainda deve ser tratada como uma alternativa emergente entre China e Europa e não como um substituto consolidado do Canal de Suez.'
  ],
  lorenzettiImpacts: [
    'A instabilidade simultânea em Ormuz e no Mar Vermelho aumenta o risco de que uma interrupção localizada provoque atrasos muito além da região onde ocorreu o conflito. Para a Lorenzetti, matérias-primas, componentes ou equipamentos importados podem ser afetados mesmo quando o fornecedor não está no Oriente Médio, caso a carga ou algum trecho da cadeia dependa dessas passagens. Isso torna relevante conhecer não apenas o país de origem de cada item crítico, mas também as principais rotas utilizadas até sua chegada ao Brasil.',
    'A queda do preço do frete não deve ser utilizada isoladamente como sinal de normalização da logística, porque as companhias continuam cancelando capacidade e a pontualidade dos serviços piorou. Para a Lorenzetti, uma tarifa marítima menor pode coexistir com maior risco de atraso ou necessidade de reservar espaço com antecedência. O planejamento de compras pode precisar considerar conjuntamente custo do frete, prazo real de entrega, regularidade das viagens e nível de estoque necessário para absorver eventuais interrupções.',
    'Os desvios pelo Cabo da Boa Esperança fazem com que os mesmos navios permaneçam ocupados durante mais tempo para completar uma viagem entre Ásia e Europa, reduzindo a quantidade de viagens que cada embarcação consegue realizar. Mesmo sem uma redução física da frota mundial, esse efeito pode diminuir a capacidade efetivamente disponível e aumentar a sensibilidade do mercado a novos problemas. Para a Lorenzetti, isso reforça a importância de acompanhar disponibilidade e prazo de transporte, e não apenas o preço contratado.',
    'A Rota Bioceânica pode criar no futuro uma alternativa adicional para fluxos entre o Brasil e mercados asiáticos por meio dos portos do Pacífico. Para a Lorenzetti, o corredor merece ser analisado tanto para eventuais importações de fornecedores asiáticos quanto para exportações destinadas à região, mas a redução do trecho marítimo não significa necessariamente menor custo total. Uma avaliação real precisaria comparar transporte terrestre, fronteiras, portos, frete marítimo, prazo porta a porta e regularidade das viagens com as rotas atualmente utilizadas.',
    'O aumento simultâneo dos riscos nas rotas tradicionais e o desenvolvimento de corredores alternativos tornam mais importante identificar onde existem concentrações logísticas dentro da cadeia de suprimentos. Para a Lorenzetti, mapear quais materiais dependem de um único fornecedor, país, porto ou passagem marítima pode ajudar a identificar pontos de maior vulnerabilidade e avaliar alternativas antes de uma interrupção. O objetivo não é substituir preventivamente todas as rotas atuais, mas conhecer quais opções realmente existem para os itens mais críticos.'
  ],
  evidences: [
    {
      id: 'logistica-ev-1',
      tag: 'ESTREITO DE ORMUZ',
      dateStr: '27/08/2026',
      title: 'Tráfego marítimo em Ormuz apresenta melhora pontual, mas permanece abaixo do nível recente',
      source: 'Reuters',
      url: 'https://www.reuters.com/world/middle-east/shipping-traffic-through-strait-hormuz-rises-slightly-data-shows-2026-08-27/',
      summary: 'O tráfego de embarcações de commodities pelo Estreito de Ormuz apresentou pequena recuperação no fim de agosto de 2026, com 10 navios identificados em um dia, acima dos oito registrados no dia anterior, mas ainda abaixo da média de aproximadamente 15 embarcações observada nos dez dias anteriores. A situação permanecia instável devido ao impasse entre Estados Unidos e Irã, enquanto um navio-tanque havia sido atingido por um projétil na própria passagem. O tráfego também desacelerava em Bab el-Mandeb, outra rota estratégica do comércio marítimo. Os dados indicam uma melhora pontual, mas não representam normalização da circulação pelas principais passagens do Oriente Médio.'
    },
    {
      id: 'logistica-ev-2',
      tag: 'LOGÍSTICA GLOBAL',
      dateStr: '23/07/2026',
      title: 'Transporte marítimo enfrenta menor previsibilidade mesmo com início de redução em alguns fretes',
      source: 'Flexport',
      url: 'https://www.flexport.com/global-logistics-update/july-23-2026-GLU-Newsletter/',
      summary: 'A logística marítima global continuava pressionada em julho de 2026 por conflitos e restrições em diferentes corredores. O número de travessias pelo Estreito de Ormuz caiu de 157 para 53 em uma semana, redução de 66%, enquanto entre 17 e 19 de julho aproximadamente 13 embarcações por dia atravessaram a passagem, diante de uma taxa considerada normal próxima de 88. No Mar Vermelho, grande parte dos grandes navios continuava utilizando rotas mais longas pelo Cabo da Boa Esperança devido à insegurança na região. As companhias marítimas também continuavam retirando entre 10% e 14% da capacidade programada em algumas das principais rotas, acima dos 6% a 8% observados em 2019, enquanto a pontualidade dos serviços caiu 3,7 pontos percentuais em junho. Ao mesmo tempo, os fretes começaram a recuar após cinco semanas consecutivas de alta. O cenário mostra que uma eventual redução no preço do transporte não significa necessariamente retorno da confiabilidade operacional, porque cancelamentos, atrasos e desvios de rota permanecem relevantes. O Canal do Panamá também passou a enfrentar novas limitações de calado, levando algumas transportadoras a implementar sobretaxas e aumentando a pressão sobre capacidade e custos em determinados serviços.'
    },
    {
      id: 'logistica-ev-3',
      tag: 'ROTA BIOCEÂNICA',
      dateStr: '2026',
      title: 'Corredor Bioceânico pode diversificar as rotas utilizadas pelo Brasil para alcançar mercados asiáticos',
      source: 'Rota Bioceânica News',
      url: 'https://rotabioceanicanews.com.br/rota-bioceanica-o-brasil-diante-de-uma-nova-fronteira-logistica-para-o-pacifico-e-a-asia/',
      summary: 'A Rota Bioceânica de Capricórnio conecta o Brasil aos portos do norte do Chile por um corredor terrestre que atravessa Paraguai e Argentina, formando uma ligação de aproximadamente 3.900 quilômetros e cinco passagens de fronteira entre quatro países. Para determinadas cargas destinadas à Ásia, a utilização dos portos do Pacífico apresenta potencial de reduzir aproximadamente 12 a 17 dias do trânsito marítimo, dependendo da origem da carga, destino, porto escolhido e estrutura da operação. A rota não deve ser interpretada como substituição automática de portos brasileiros como Santos ou Paranaguá. Seu valor estratégico está na criação de uma alternativa adicional, permitindo comparar diferentes combinações de prazo, custo e risco. A competitividade efetiva dependerá também de transporte terrestre, procedimentos nas fronteiras, armazenagem, seguros, disponibilidade de navios e integração logística entre os países envolvidos.'
    },
    {
      id: 'logistica-ev-4',
      tag: 'ROTA DO ÁRTICO',
      dateStr: '07/08/2026',
      title: 'Rota marítima pelo Ártico passa de operações experimentais para um serviço regular durante a temporada navegável',
      source: 'Internazionale / Reuters',
      url: 'https://www.internazionale.it/ultime-notizie-reuters/2026/08/07/rosatom-says-seven-chinese-vessels-will-sail-to-europe-via-russia-s-arctic-route',
      summary: 'A empresa chinesa Sea Legend Shipping planejou para 2026 o primeiro serviço regular de contêineres entre China e Europa utilizando a Rota do Mar do Norte, que atravessa águas do Ártico ao longo da costa russa. A Rosatom, responsável pela administração do corredor, informou ter autorizado sete embarcações chinesas e afirmou que o programa previa viagens semanais durante a temporada de navegação, diferentemente das operações anteriores, que eram principalmente experimentais ou pontuais. A rota ganha importância como alternativa aos corredores tradicionais em um período de maior instabilidade no Oriente Médio, mas ainda possui limitações importantes. O gelo restringe sua utilização a determinados períodos do ano e os custos de transporte permanecem superiores em algumas operações, o que significa que o corredor deve ser tratado como uma alternativa logística emergente, e não como substituto consolidado de Suez ou das demais rotas entre Ásia e Europa.'
    }
  ]
};
