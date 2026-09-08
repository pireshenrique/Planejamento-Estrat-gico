import { Building2, type LucideIcon } from 'lucide-react';
import type { Evidence } from '../../components/layout/EvidenceCard';

export interface MercadoImobiliarioData {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  statusSubtitle: string;
  observeSummary: string;
  observeTitle?: string;
  observeNotes: string[];
  lorenzettiImpacts: string[];
  evidences: Evidence[];
}

export const MERCADO_IMOBILIARIO_DATA: MercadoImobiliarioData = {
  id: 'mercado-imobiliario',
  label: 'Mercado Imobiliário',
  icon: Building2,
  headline: 'O mercado imobiliário residencial apresentou sinais mistos no primeiro semestre de 2026. O volume de financiamento aumentou e as vendas ainda acumulavam crescimento no semestre, mas o segundo trimestre mostrou desaceleração de lançamentos e vendas, menor velocidade de comercialização dos imóveis e expectativas mais cautelosas para a construção em um ambiente de juros e custos elevados.',
  statusSubtitle: 'Crédito imobiliário cresce e sustenta o mercado no semestre, enquanto vendas, lançamentos e velocidade de comercialização mostram perda de ritmo no segundo trimestre',
  observeSummary: 'O mercado imobiliário entrou no segundo semestre de 2026 com movimentos distintos. O financiamento pelo SBPE cresceu 29% no primeiro semestre, enquanto as vendas das 14 incorporadoras analisadas ainda acumulavam crescimento de 7,5% no período. O desempenho mais recente, porém, mostra perda de velocidade, com redução de lançamentos e vendas no segundo trimestre e menor proporção dos imóveis disponíveis sendo comercializada. O Minha Casa, Minha Vida apresentou maior resistência do que o segmento de médio e alto padrão, enquanto juros elevados e condições financeiras desfavoráveis continuam pressionando as empresas da construção. O cenário indica desaceleração e maior cautela, e não uma retração generalizada do mercado.',
  observeTitle: 'Últimas notícias e dados apurados',
  observeNotes: [
    'O financiamento imobiliário pelo Sistema Brasileiro de Poupança e Empréstimo, o SBPE, alcançou R$ 93,7 bilhões no primeiro semestre de 2026, crescimento de 29% em relação ao mesmo período de 2025. Desse total, R$ 67,2 bilhões foram destinados à compra de imóveis, com alta de 12%. O avanço mostra que houve mais recursos disponíveis para financiar compradores durante o semestre, criando uma condição favorável para a demanda por imóveis mesmo em um ambiente de juros elevados.',
    'O movimento de expansão do crédito também ocorreu do lado das empresas. Os recursos do SBPE destinados à construção de novos empreendimentos chegaram a R$ 26,5 bilhões no primeiro semestre de 2026, crescimento de 107% em relação ao ano anterior. Esse financiamento ajuda incorporadoras e construtoras a executar novos projetos antes da entrega das unidades, criando condições para sustentar obras futuras. O aumento dos recursos, porém, não garante crescimento equivalente de lançamentos, porque as empresas também consideram vendas, estoque, custos e condições financeiras antes de iniciar novos empreendimentos.',
    'Apesar da expansão do crédito, os resultados mais recentes das 14 incorporadoras analisadas mostram perda de ritmo. No primeiro semestre de 2026, as vendas ainda cresceram 7,5% e os lançamentos permaneceram praticamente estáveis em relação ao ano anterior, mas no segundo trimestre as vendas recuaram 1% e os lançamentos 1,9%. O contraste indica que o mercado analisado ainda acumulava crescimento no semestre, porém entrou na segunda metade do ano com sinais de desaceleração.',
    'A perda de ritmo também não ocorreu da mesma forma entre os diferentes segmentos residenciais. As vendas do Minha Casa, Minha Vida cresceram 3,4% no segundo trimestre de 2026, enquanto as vendas das incorporadoras de médio e alto padrão caíram 5,1%. O resultado mostra que o segmento ligado ao programa habitacional permaneceu mais resistente, enquanto os imóveis de maior valor apresentaram uma desaceleração mais intensa. Isso significa que a composição da demanda está se tornando tão importante quanto o desempenho total do mercado.',
    'Além da desaceleração das vendas, os imóveis disponíveis estão levando mais tempo para ser comercializados. A velocidade de vendas, indicador que mostra quanto do estoque disponível consegue ser vendido em determinado período, caiu de 23% para 17,7% entre o segundo trimestre de 2025 e o mesmo período de 2026 na amostra das 14 incorporadoras. A queda foi mais intensa no médio e alto padrão. Se uma parcela menor do estoque é vendida no mesmo intervalo de tempo, as incorporadoras podem se tornar mais cautelosas antes de ampliar novos lançamentos.',
    'Os sinais de cautela também aparecem nas expectativas das empresas da construção. Juros elevados foram apontados como o principal problema por 36,2% das empresas consultadas e, em julho, as expectativas para atividade, emprego, novos empreendimentos e compra de insumos ficaram simultaneamente abaixo do nível que indica crescimento pela primeira vez desde abril de 2020. Como a pesquisa considera toda a indústria da construção e não apenas imóveis residenciais, ela não mede diretamente as vendas de moradias, mas reforça que o setor iniciou o segundo semestre com maior preocupação em relação ao ritmo futuro da atividade.'
  ],
  lorenzettiImpacts: [
    'O crescimento de 107% dos recursos destinados à construção pode sustentar a execução de novos empreendimentos e, conforme essas obras avancem, gerar demanda por produtos instalados nas etapas de acabamento. Para a Lorenzetti, categorias como chuveiros, torneiras e metais sanitários podem se beneficiar desse movimento. O efeito não é imediato, porque existe um intervalo entre a liberação do financiamento, o avanço físico da obra e o momento em que esses produtos são comprados e instalados.',
    'A maior resistência do Minha Casa, Minha Vida indica que parte relevante da atividade residencial pode continuar concentrada no segmento econômico mesmo com a desaceleração dos imóveis de maior valor. Para a Lorenzetti, isso pode favorecer produtos adequados a projetos que combinam grande quantidade de unidades, controle de custos e necessidade de fornecimento em escala. O impacto depende da participação da empresa nas construtoras, incorporadoras e distribuidores que atendem esses empreendimentos.',
    'A queda mais intensa das vendas no médio e alto padrão pode se tornar relevante para a Lorenzetti caso resulte posteriormente em menor quantidade de novos empreendimentos desse segmento. Nesse cenário, a demanda por linhas de maior valor agregado utilizadas nessas obras poderia perder ritmo. O efeito tende a ocorrer com atraso, porque empreendimentos já lançados ou em construção continuam comprando materiais mesmo quando as vendas de novas unidades começam a desacelerar.',
    'A queda na velocidade de vendas significa que uma parcela maior dos imóveis permanece disponível por mais tempo. Se essa situação continuar, incorporadoras podem reduzir ou postergar novos lançamentos para evitar aumento excessivo do estoque. Para a Lorenzetti, esse seria um sinal antecipado de possível redução futura da demanda da construção residencial, principalmente nos segmentos em que a comercialização estiver mais lenta.',
    'Os dados de 2026 mostram que a disponibilidade de crédito pode crescer ao mesmo tempo em que vendas, velocidade de comercialização e confiança das empresas perdem força. Para a Lorenzetti, a leitura mais útil do mercado exige acompanhar essa sequência completa, desde o financiamento para construção até lançamentos, vendas e absorção do estoque. Isso ajuda a diferenciar um aumento de crédito que efetivamente gera novas obras de um cenário em que os recursos estão disponíveis, mas as incorporadoras se tornam mais cautelosas para iniciar novos projetos.'
  ],
  evidences: [
    {
      id: 'imob-ev-cbic-credito-1s2026',
      tag: 'CBIC / SBPE • FINANCIAMENTO HABITACIONAL',
      dateStr: 'Julho/2026',
      title: 'Financiamento para aquisição de imóveis pelo SBPE cresce 12% no primeiro semestre de 2026',
      headline: 'Financiamento imobiliário pelo SBPE avança e amplia recursos para compra e construção de imóveis',
      source: 'Câmara Brasileira da Indústria da Construção (CBIC)',
      url: 'https://cbic.org.br/financiamento-para-aquisicao-de-imoveis-pelo-sbpe-cresce-12-no-primeiro-semestre-de-2026/',
      summary: 'O financiamento destinado à aquisição de imóveis pelo Sistema Brasileiro de Poupança e Empréstimo, o SBPE, alcançou R$ 67,2 bilhões no primeiro semestre de 2026, crescimento de 12% sobre o mesmo período de 2025. Quando também são considerados os recursos destinados à construção, o volume financiado pelo SBPE chegou a R$ 93,7 bilhões, alta de 29%. O crescimento foi ainda mais intenso no financiamento à construção, que passou de R$ 12,8 bilhões para R$ 26,5 bilhões, avanço de 107%. Somando SBPE e FGTS, o financiamento habitacional alcançou R$ 160,3 bilhões no semestre. O movimento mostra recuperação da disponibilidade de crédito imobiliário, criando condições para sustentar compras e novos empreendimentos mesmo em um ambiente no qual os juros ainda permanecem elevados.'
    },
    {
      id: 'imob-ev-cbic-condicoes-2t2026',
      tag: 'CBIC / CNI • SONDAGEM DA CONSTRUÇÃO',
      dateStr: 'Julho/2026',
      title: 'Condições financeiras da indústria da construção continuam negativas no segundo trimestre',
      headline: 'Juros altos, crédito restrito e custos elevados reduzem confiança e perspectivas da construção',
      source: 'Câmara Brasileira da Indústria da Construção (CBIC)',
      url: 'https://cbic.org.br/cni-condicoes-financeiras-da-industria-da-construcao-continuam-negativas-no-segundo-trimestre/',
      summary: 'As condições financeiras das empresas de construção permaneceram desfavoráveis no segundo trimestre de 2026, mesmo com pequenas melhorias em alguns indicadores. A satisfação com a situação financeira ficou em 45,2 pontos, o acesso ao crédito em 39,3 e a satisfação com o lucro operacional em 41,7, todos abaixo de 50 pontos, nível que indica avaliação negativa. Os juros elevados foram apontados como principal problema por 36,2% das empresas, acompanhados por carga tributária e dificuldades relacionadas ao custo e à disponibilidade de mão de obra. O sinal mais estratégico está nas expectativas: em julho, os quatro indicadores para os seis meses seguintes — atividade, emprego, novos empreendimentos e compra de insumos — passaram simultaneamente para o campo negativo pela primeira vez desde abril de 2020. A intenção de investimento também recuou, indicando maior cautela do setor no segundo semestre, mesmo sem paralisação da atividade.'
    },
    {
      id: 'imob-ev-valor-incorporadoras-2t2026',
      tag: 'VALOR ECONÔMICO • INCORPORADORAS',
      dateStr: '29/07/2026',
      title: 'Incorporadoras decepcionam no 2º trimestre',
      headline: 'Mercado residencial perde velocidade no segundo trimestre, com desempenho mais resistente no Minha Casa, Minha Vida',
      source: 'Valor Econômico',
      url: 'https://valor.globo.com/empresas/noticia/2026/07/29/incorporadoras-decepcionam-no-2o-trimestre.ghtml',
      summary: 'Na amostra de 14 incorporadoras apresentada pelo Valor, os lançamentos recuaram 1,9% no segundo trimestre de 2026 em relação ao mesmo período de 2025, enquanto as vendas caíram 1%. A desaceleração foi mais intensa no segmento de médio e alto padrão, onde os lançamentos diminuíram 2,3% e as vendas 5,1%. O Minha Casa, Minha Vida mostrou maior resistência, com lançamentos praticamente estáveis e vendas crescendo 3,4%. O primeiro semestre apresenta um cenário melhor do que o trimestre isolado: os lançamentos ficaram praticamente estáveis, com alta de 0,2%, enquanto as vendas cresceram 7,5%. A velocidade de vendas (comparando o vendido com o estoque disponível) caiu de 23% no 2T25 para 17,7% no 2T26 na amostra total (no MCMV passou de 31,5% para 27,8%, e no médio e alto padrão caiu de 18,7% para 12,7%), indicando que os imóveis disponíveis estão levando mais tempo para serem absorvidos pelo mercado.'
    }
  ]
};
