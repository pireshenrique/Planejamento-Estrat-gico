import { Home, Hammer, type LucideIcon } from 'lucide-react';
import type { Evidence } from '../../components/layout/EvidenceCard';

export type ProgramasSociaisTopicId = 'mcmv' | 'reforma_brasil';

export interface ProgramasSociaisTopic {
  id: ProgramasSociaisTopicId;
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

export const PROGRAMAS_SOCIAIS_TOPICS: { id: ProgramasSociaisTopicId; label: string; icon: LucideIcon }[] = [
  { id: 'mcmv', label: 'Minha Casa Minha Vida', icon: Home },
  { id: 'reforma_brasil', label: 'Reforma Casa Brasil', icon: Hammer },
];

export const PROGRAMAS_SOCIAIS_BY_ID: Record<ProgramasSociaisTopicId, ProgramasSociaisTopic> = {
  mcmv: {
    id: 'mcmv',
    label: 'Minha Casa Minha Vida',
    icon: Home,
    headline: 'O Minha Casa, Minha Vida ganhou peso central no mercado residencial brasileiro e já responde por mais da metade dos lançamentos e das vendas de imóveis novos no país. O programa combina financiamento mais acessível e metas elevadas de expansão, mas manter esse crescimento exigirá recursos suficientes para novas contratações nos próximos anos.',
    statusSubtitle: 'Programa supera metade dos lançamentos e vendas de imóveis novos, enquanto expansão aumenta a necessidade de financiamento para os próximos anos',
    observeSummary: 'O Minha Casa, Minha Vida tornou-se um dos principais motores do mercado residencial brasileiro, apoiado por juros de financiamento inferiores aos praticados fora do programa e pela ampliação do público atendido. Mais da metade dos lançamentos e das vendas de imóveis novos já está ligada ao programa, enquanto o estoque disponível continua relativamente baixo diante do ritmo de comercialização. A expansão deve continuar, mas metas elevadas de novas contratações aumentam a dependência de recursos do FGTS, da poupança e de fontes complementares.',
    observeTitle: 'Últimas notícias e dados apurados',
    observeNotes: [
      'O Minha Casa, Minha Vida já responde por mais da metade dos lançamentos e das vendas de imóveis residenciais novos no Brasil e, na cidade de São Paulo, chega a aproximadamente dois terços dos negócios. O tamanho alcançado pelo programa significa que seu desempenho passou a influenciar uma parcela relevante das novas obras residenciais do país. Uma expansão ou desaceleração do MCMV, portanto, tende a ter efeitos mais amplos sobre a atividade da construção do que quando o programa representava uma parcela menor do mercado.',
      'Uma das principais vantagens do Minha Casa, Minha Vida está no custo do financiamento. As taxas do programa variam aproximadamente entre 4,5% e 8,16% ao ano, enquanto financiamentos imobiliários fora dele estão próximos de 12% a 14%. Na prática, juros menores reduzem o peso das parcelas e permitem que mais famílias consigam financiar um imóvel, ajudando a explicar por que as vendas do programa permanecem mais fortes em um ambiente de crédito caro.',
      'O crescimento do Minha Casa, Minha Vida ocorre ao mesmo tempo em que os segmentos de médio e médio-alto padrão enfrentam maior dificuldade com os juros elevados. Com o financiamento convencional mais caro, parte das incorporadoras passou a direcionar novos projetos para o programa habitacional. Assim, o aumento da participação do MCMV reflete tanto seu próprio crescimento quanto a perda de força de outros segmentos residenciais.',
      'Mesmo com o aumento dos lançamentos, o estoque disponível do Minha Casa, Minha Vida continua relativamente ajustado ao ritmo das vendas. As unidades atualmente disponíveis correspondem a aproximadamente 7,6 meses de comercialização se o ritmo atual for mantido. Isso significa que, embora a quantidade de imóveis à venda tenha aumentado, ainda não há sinal de um estoque excessivo que, por si só, obrigue as incorporadoras a reduzir fortemente novos projetos.',
      'O governo pretende manter um ritmo elevado de novas contratações, apoiado por um orçamento do programa superior a R$ 200 bilhões em 2026. A previsão era contratar aproximadamente 1 milhão de novas unidades em 2026 e uma projeção posterior passou a indicar cerca de 1,5 milhão para 2027. Esses números representam metas de contratação e não moradias já construídas ou entregues, mas mostram que a necessidade de financiamento continuará elevada.',
      'A continuidade desse crescimento depende da capacidade de financiar volumes cada vez maiores. Em uma pesquisa com mais de 150 profissionais e investidores do setor, 25% avaliaram que pode haver limitação de crédito nos próximos anos e 44% apontaram a forte dependência do FGTS e da poupança como uma fragilidade. O risco é de médio prazo e não representa falta atual de recursos, mas indica que novas fontes de financiamento podem ser necessárias para manter a expansão planejada.'
    ],
    lorenzettiImpacts: [
      'Como o Minha Casa, Minha Vida já representa mais da metade dos lançamentos e das vendas de imóveis novos, o desempenho do programa passa a ter relação direta com uma parcela relevante da futura demanda da construção residencial. Para a Lorenzetti, a continuidade desse volume pode sustentar a procura por chuveiros, torneiras, metais sanitários e outros produtos instalados nas novas moradias conforme as obras avancem.',
      'O financiamento mais barato dentro do Minha Casa, Minha Vida ajuda o segmento a manter maior força justamente quando compradores de imóveis de médio padrão enfrentam juros mais elevados. Para a Lorenzetti, essa mudança pode alterar a composição da demanda, aumentando a importância de produtos adequados a empreendimentos que precisam combinar preço competitivo, confiabilidade e fornecimento em grande escala.',
      'O crescimento do Minha Casa, Minha Vida ao mesmo tempo em que os segmentos de médio e médio-alto padrão perdem força pode alterar a composição do mercado residencial nos próximos anos. Para a Lorenzetti, isso pode aumentar o peso relativo de empreendimentos com grande número de unidades e maior pressão por equilíbrio entre preço, desempenho e capacidade de fornecimento. Esse movimento pode influenciar não apenas o volume vendido, mas também quais linhas de produtos ganham maior importância no mix destinado às construtoras.',
      'As metas elevadas de novas contratações podem ampliar o número de obras residenciais nos próximos anos, mas existe um intervalo entre a contratação do imóvel e a compra dos produtos utilizados no acabamento. Para a Lorenzetti, o aumento das contratações funciona como um possível indicador antecipado de demanda futura, e não como crescimento imediato das vendas de materiais.',
      'A principal limitação para esse cenário está na capacidade de financiar a expansão por vários anos. Se FGTS, poupança e fontes complementares não acompanharem o aumento das contratações, o ritmo de novos projetos pode diminuir no futuro. Para a Lorenzetti, o efeito apareceria com atraso, porque obras já contratadas continuariam avançando antes de uma eventual redução na quantidade de novos empreendimentos.'
    ],
    evidences: [
      {
        id: 'ev-mcmv-participacao-infomoney-2026',
        tag: 'INFOMONEY / ESTADÃO CONTEÚDO • MERCADO RESIDENCIAL',
        dateStr: '2026',
        title: 'Minha Casa, Minha Vida amplia participação no mercado residencial apoiado por financiamento mais acessível',
        headline: 'Programa responde por mais da metade dos lançamentos e vendas no país e 2/3 em SP, com estoque ajustado a 7,6 meses',
        source: 'InfoMoney / Estadão Conteúdo',
        url: 'https://www.infomoney.com.br/minhas-financas/minha-casa-minha-vida-domina-mercado-e-evidencia-fragilidade-nos-demais-setores/',
        summary: 'O Minha Casa, Minha Vida já responde por mais da metade dos lançamentos e das vendas de imóveis residenciais novos no Brasil e, na cidade de São Paulo, representa aproximadamente dois terços dos negócios. Parte desse avanço está relacionada às condições de financiamento do programa, com juros entre aproximadamente 4,5% e 8,16% ao ano, diante de cerca de 12% a 14% no crédito imobiliário fora do programa. Ao mesmo tempo, segmentos de médio e médio-alto padrão perdem espaço diante dos juros elevados, levando mais incorporadoras a direcionarem projetos ao MCMV. Apesar do aumento dos lançamentos, o estoque nacional de aproximadamente 137 mil unidades representa cerca de 7,6 meses de vendas no ritmo atual, indicando que a oferta permanece relativamente ajustada à demanda.'
      },
      {
        id: 'ev-mcmv-credito-forbes-2026',
        tag: 'FORBES BRASIL • CRÉDITO HABITACIONAL',
        dateStr: 'Julho/2026',
        title: 'Expansão do Minha Casa, Minha Vida encontra risco de limitação futura das fontes de crédito',
        headline: 'Pesquisa aponta que 25% dos executivos temem falta de crédito futuro e 44% veem dependência de FGTS e poupança',
        source: 'Forbes Brasil',
        url: 'https://forbes.com.br/forbes-money/forbes-real-estate/2026/07/falta-credito-minha-casa-vida-mcmv/',
        summary: 'O Minha Casa, Minha Vida chegou a 2026 com orçamento recorde superior a R$ 200 bilhões e forte expansão de sua participação no mercado habitacional, mas cresce a preocupação sobre a capacidade de manter esse ritmo nos próximos anos. Em pesquisa com mais de 150 incorporadoras, construtoras, gestores e investidores, um em cada quatro executivos avaliou que pode faltar crédito para sustentar o crescimento projetado do programa, enquanto 44% apontaram como fragilidade a forte dependência do FGTS e da poupança. O risco está principalmente no médio prazo, porque retiradas extraordinárias reduziram a disponibilidade futura do FGTS e a poupança vem apresentando saídas líquidas de recursos. A situação não representa falta de financiamento atual, mas um risco para a continuidade da expansão caso novas fontes de recursos não ganhem escala.'
      },
      {
        id: 'ev-mcmv-contratacoes-infomoney-2026',
        tag: 'INFOMONEY • POLÍTICA HABITACIONAL',
        dateStr: '2026',
        title: 'Governo projeta manter o Minha Casa, Minha Vida em ritmo próximo de 1 milhão de novas unidades por ano',
        headline: 'Ministro das Cidades projeta 1 milhão de unidades em 2026 e mais 1 milhão em 2027, respondendo por 85% dos lançamentos',
        source: 'InfoMoney / Ministério das Cidades',
        url: 'https://www.infomoney.com.br/politica/minha-casa-minha-vida-deve-contratar-1-milhao-de-imoveis-em-2026-e-mais-1-mi-em-2027/',
        summary: 'O governo projetava contratar cerca de 1 milhão de novas unidades habitacionais em 2026 e mais 1 milhão em 2027, mantendo o Minha Casa, Minha Vida como principal programa de financiamento habitacional do país. A expansão foi favorecida pelo aumento das faixas de renda atendidas, que ampliou o programa também para famílias de classe média. Na declaração reproduzida pelo InfoMoney, o ministro das Cidades afirmou que o programa já respondia por aproximadamente 85% dos lançamentos imobiliários do país.'
      }
    ]
  },
  reforma_brasil: {
    id: 'reforma_brasil',
    label: 'Reforma Casa Brasil',
    icon: Hammer,
    headline: 'O Reforma Casa Brasil oferece crédito para famílias realizarem melhorias em imóveis já existentes, incluindo reformas elétricas, hidráulicas e de acabamento. O programa possui R$ 40 bilhões disponíveis, mas até julho de 2026 apenas 6,7% desse valor havia sido contratado, apesar de uma aceleração recente nas operações.',
    statusSubtitle: 'Programa amplia acesso ao crédito para reformas, mas utilização ainda representa apenas 6,7% dos R$ 40 bilhões disponíveis',
    observeSummary: 'O Reforma Casa Brasil pode estimular diretamente o mercado de materiais porque financia melhorias em imóveis já existentes, incluindo instalações elétricas, hidráulicas e acabamentos. As condições de acesso foram ampliadas em 2026 e o volume contratado começou a crescer, mas apenas R$ 2,7 bilhões dos R$ 40 bilhões disponíveis haviam sido utilizados até julho. O principal ponto de atenção é transformar essa grande capacidade de financiamento em reformas efetivamente realizadas e, posteriormente, em compras de materiais.',
    observeTitle: 'Últimas notícias e diretrizes operacionais',
    observeNotes: [
      'O Reforma Casa Brasil financia melhorias em imóveis que já existem, incluindo instalações elétricas e hidráulicas, telhados, revestimentos, portas, janelas e ampliação de cômodos. Diferentemente de um financiamento para compra de imóvel, o dinheiro é destinado diretamente à reforma da moradia. Por isso, o programa pode gerar demanda por materiais durante a execução das obras.',
      'As regras foram ampliadas em 2026 para facilitar o acesso ao programa. O financiamento pode chegar a R$ 50 mil, atender famílias com renda de até R$ 13 mil, ter juros a partir de 0,99% ao mês e prazo de até 72 meses. As condições aumentam o número potencial de famílias atendidas, mas não garantem que todo o crédito disponível será contratado.',
      'O programa possui R$ 40 bilhões disponíveis para financiar reformas, mas até julho de 2026 aproximadamente R$ 2,7 bilhões haviam sido contratados, equivalente a 6,7% do total. Foram realizados cerca de 117 mil financiamentos, com valor médio próximo de R$ 23 mil. Isso mostra que o programa já alcançou um número relevante de famílias, mas ainda utiliza uma parcela pequena de sua capacidade financeira.',
      'O ritmo de contratação apresentou melhora depois das mudanças nas regras. O valor acumulado passou de aproximadamente R$ 1,3 bilhão em maio para R$ 2,7 bilhões em julho, praticamente dobrando em dois meses. A aceleração é um sinal positivo, mas o período ainda é curto para concluir que o programa conseguirá utilizar uma parcela muito maior dos R$ 40 bilhões disponíveis.',
      'O aumento das contratações ainda não foi suficiente para provocar uma recuperação ampla do mercado de materiais de construção. As vendas do setor caíram 3,4% no primeiro semestre de 2026 e a projeção de crescimento para o ano foi reduzida de 1,9% para 0,5%. Isso mostra que a existência de crédito para reformas ainda não se transformou, na mesma proporção, em maior venda de materiais.',
      'Também existe diferença entre conceder o crédito e garantir que o valor seja utilizado na compra formal de materiais. Representantes do comércio questionaram a ausência de exigência de nota fiscal para comprovar essas compras e levantaram a possibilidade de parte dos recursos não chegar aos produtos esperados. Essa é uma preocupação do setor, e não uma comprovação de uso irregular, mas mostra por que o valor financiado não deve ser interpretado automaticamente como venda equivalente para fabricantes e varejistas.'
    ],
    lorenzettiImpacts: [
      'Como o programa financia reformas elétricas, hidráulicas e de acabamento, ele possui ligação direta com categorias atendidas pela Lorenzetti. Conforme os financiamentos se transformem em obras, pode surgir demanda adicional por chuveiros, torneiras, registros, metais sanitários e outros produtos utilizados na renovação das moradias.',
      'O Reforma Casa Brasil atua principalmente sobre imóveis já existentes, criando uma fonte de demanda diferente daquela gerada pela construção de novas moradias. Para a Lorenzetti, isso pode fortalecer o mercado de reposição e modernização de banheiros, cozinhas e instalações residenciais, ampliando as situações em que seus produtos podem ser adquiridos.',
      'Os R$ 40 bilhões disponíveis representam o potencial financeiro do programa, mas ainda não representam demanda realizada por materiais. Como apenas 6,7% havia sido contratado até julho, para a Lorenzetti o indicador mais importante é acompanhar quanto desse orçamento realmente se transforma em financiamentos, reformas executadas e compras de produtos.',
      'O valor contratado praticamente dobrou entre maio e julho, indicando que o programa começou a ganhar velocidade após a ampliação das regras. Se essa evolução continuar, a demanda por materiais de reforma pode aumentar nos períodos seguintes. Esse efeito ainda não está garantido e depende de novas contratações continuarem crescendo e se transformarem em obras efetivas.',
      'As vendas de materiais de construção ainda caíram no primeiro semestre, mostrando que o programa não produziu até agora uma recuperação ampla do setor. Para a Lorenzetti, isso significa que o potencial do Reforma Casa Brasil deve ser separado de seu impacto comercial efetivo. A oportunidade aumenta à medida que mais crédito contratado chega às famílias e se transforma em compras nas categorias em que a empresa atua.'
    ],
    evidences: [
      {
        id: 'ev-reforma-terra-regras-2026',
        tag: 'TERRA ECONOMIA • LINHA DE CRÉDITO',
        dateStr: '2026',
        title: 'Crédito para reformas amplia acesso a melhorias residenciais e pode estimular demanda por materiais e serviços',
        headline: 'Linha financia de R$ 10 mil a R$ 50 mil para instalações elétricas, hidráulicas e obras residenciais',
        source: 'Terra Economia / Meu Negócio',
        url: 'https://www.terra.com.br/economia/meu-negocio/reforma-casa-brasil-pode-desencalhar-imoveis-a-venda-e-ajudar-o-mercado-imobiliario,1abc28e179c9f25430dbde236792dad4823l9meg.html',
        summary: 'O Reforma Casa Brasil oferece crédito de R$ 10 mil a R$ 50 mil para famílias realizarem melhorias em suas moradias, incluindo intervenções em instalações elétricas e hidráulicas, telhados, revestimentos, portas, janelas e até novos cômodos. Após mudanças nas regras, o programa passou a atender famílias com renda de até R$ 13 mil, com juros a partir de 0,99% ao mês e prazo de até 72 meses.'
      },
      {
        id: 'ev-reforma-estadao-desempenho-2026',
        tag: 'ESTADÃO • EXECUÇÃO ORÇAMENTÁRIA',
        dateStr: 'Julho/2026',
        title: 'Reforma Casa Brasil tem utilização abaixo do esperado e ainda não consegue impulsionar o setor de materiais na escala projetada',
        headline: 'Programa concedeu R$ 2,7 bilhões (6,7% dos R$ 40 bilhões previstos) em cerca de 117 mil contratos até julho',
        source: 'Estadão',
        url: 'https://www.estadao.com.br/economia/programa-credito-reforma-imoveis-empaca-frustra-setor-materiais-construcao/',
        summary: 'Apesar de possuir orçamento total de R$ 40 bilhões, o Reforma Casa Brasil havia concedido aproximadamente R$ 2,7 bilhões em crédito até meados de julho de 2026, equivalente a apenas 6,7% do total previsto. Foram realizados cerca de 117 mil contratos, com valor médio próximo de R$ 23 mil. O volume já havia dobrado em relação a maio, indicando alguma aceleração após mudanças nas condições, mas continuava muito abaixo da capacidade financeira disponibilizada para o programa.'
      }
    ]
  }
};
