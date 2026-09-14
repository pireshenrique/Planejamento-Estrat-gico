import { Home, type LucideIcon } from 'lucide-react';
import type { Evidence } from '../../components/layout/EvidenceCard';

export interface DeficitHabitacionalData {
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

export const DEFICIT_HABITACIONAL_DATA: DeficitHabitacionalData = {
  id: 'deficit-habitacional',
  label: 'Déficit Habitacional',
  icon: Home,
  headline: 'A atualização da Fundação João Pinheiro indica que o déficit habitacional no Brasil recuou para 7,4% dos domicílios em 2024 (após 7,6% em 2023), com o ônus excessivo com aluguel urbano permanecendo como seu principal componente. Ao mesmo tempo, aproximadamente 28 milhões de moradias apresentam inadequação habitacional — sobretudo por problemas de infraestrutura urbana — e o país conta com cerca de 11 milhões de imóveis desocupados segundo dados do IBGE, evidenciando desafios simultâneos de novas construções, requalificação do estoque e capacidade de pagamento das famílias.',
  statusSubtitle: 'Déficit recua, mas aluguel elevado, moradias inadequadas e imóveis desocupados mostram que o desafio habitacional vai além da construção de novas casas',
  observeSummary: 'O déficit habitacional brasileiro caiu de 7,6% dos domicílios em 2023 para 7,4% em 2024, mantendo a trajetória de melhora. O principal problema, porém, passou a estar cada vez mais ligado à capacidade de pagar pela moradia, com o gasto excessivo com aluguel como maior componente do déficit. Ao mesmo tempo, cerca de 28 milhões de moradias apresentam inadequações e aproximadamente 11 milhões de imóveis estão desocupados. Os dados mostram que a necessidade habitacional brasileira exige respostas diferentes, envolvendo novas moradias, reformas, infraestrutura, acesso financeiro e recuperação de imóveis existentes.',
  observeTitle: 'Últimas notícias e dados apurados',
  observeNotes: [
    'Os dados mais recentes da Fundação João Pinheiro, referentes a 2024 e divulgados em 2026, mostram que o déficit habitacional caiu de 7,6% para 7,4% dos domicílios em relação ao ano anterior. A redução confirma uma melhora gradual, mas ainda representa milhões de famílias em situações que exigem uma nova solução de moradia ou maior capacidade de pagar pela habitação. A queda do indicador, portanto, deve ser interpretada como avanço e não como resolução do problema.',
    'O gasto excessivo com aluguel urbano permanece como o principal componente do déficit habitacional. Nesses casos, a família possui onde morar, mas precisa comprometer uma parcela elevada de sua renda para pagar o aluguel, reduzindo sua capacidade de arcar com outras despesas. Isso mostra que uma parte importante do déficit brasileiro está relacionada à dificuldade financeira de acessar a moradia e não simplesmente à ausência de imóveis.',
    'Além das famílias contabilizadas no déficit, aproximadamente 28 milhões de moradias apresentavam algum tipo de inadequação em 2024, principalmente problemas relacionados à infraestrutura urbana. São imóveis que já existem e são utilizados, mas apresentam condições que precisam ser melhoradas. Essa diferença é importante porque, nesses casos, a necessidade pode ser atendida por reformas e melhorias de infraestrutura, sem exigir necessariamente a construção de uma nova residência.',
    'O Brasil também possui cerca de 11 milhões de imóveis desocupados, incluindo unidades inacabadas, prédios abandonados e outros espaços sem utilização. A existência de tantos imóveis vazios ao mesmo tempo em que permanece um déficit habitacional mostra que quantidade total de construções e disponibilidade efetiva de moradia são coisas diferentes.',
    'Os imóveis desocupados não podem ser considerados automaticamente uma solução para as famílias que precisam de moradia. Parte desse estoque pode estar em locais inadequados, necessitar de reformas, apresentar problemas de regularização ou simplesmente não estar acessível às famílias de menor renda. Por isso, os 11 milhões de imóveis vazios representam um potencial de recuperação de parte do estoque existente, mas não significam que existam 11 milhões de moradias prontas e disponíveis para reduzir o déficit.',
    'A Fundação João Pinheiro diferencia o déficit habitacional da inadequação porque os dois problemas exigem soluções diferentes. O déficit inclui situações em que a família precisa de uma nova solução de moradia ou compromete renda excessiva com aluguel, enquanto a inadequação envolve casas existentes que precisam de melhorias. Na prática, a política habitacional precisa combinar construção de novas unidades, reformas, infraestrutura, acesso financeiro e recuperação de imóveis que possam voltar a ser utilizados.'
  ],
  lorenzettiImpacts: [
    'O déficit habitacional ainda representa necessidade potencial de novas moradias, mas essa necessidade somente se transforma em demanda por materiais quando novos empreendimentos são efetivamente financiados e construídos. Para a Lorenzetti, programas que convertam parte desse déficit em novas obras podem gerar demanda futura por chuveiros, torneiras, louças e metais sanitários conforme os projetos avancem para as etapas de instalação e acabamento.',
    'As aproximadamente 28 milhões de moradias inadequadas mostram que existe uma necessidade habitacional relevante também dentro do estoque de casas que já está ocupado. Para a Lorenzetti, reformas destinadas a melhorar instalações elétricas, hidráulicas, banheiros e outros ambientes podem gerar demanda por reposição e modernização de produtos, criando um mercado diferente daquele associado à construção de novas unidades.',
    'Os cerca de 11 milhões de imóveis desocupados podem gerar uma segunda frente de demanda caso parte desse estoque seja recuperada e volte a ser utilizada como moradia. Para a Lorenzetti, a reforma de unidades antigas ou abandonadas pode exigir substituição de instalações, chuveiros, torneiras, louças e metais sanitários. Esse potencial depende, porém, de os imóveis serem regularizados, reformados e efetivamente recolocados em uso.',
    'Como o gasto excessivo com aluguel é o principal componente do déficit, uma melhora do indicador não significa necessariamente aumento equivalente na construção de novas casas. Parte da redução pode ocorrer por melhora de renda, condições de financiamento ou menor comprometimento das famílias com aluguel. Para a Lorenzetti, o déficit habitacional deve ser analisado junto com dados de novas obras e reformas para estimar melhor seu possível efeito sobre a demanda por produtos.',
    'As necessidades habitacionais brasileiras podem gerar demanda por caminhos diferentes, desde novas construções até reformas de moradias inadequadas e recuperação de imóveis vazios. Para a Lorenzetti, acompanhar essas frentes separadamente permite entender melhor onde a demanda pode surgir, porque uma nova obra, uma reforma e a recuperação de um imóvel existente envolvem momentos de compra, canais de venda e combinações de produtos diferentes.'
  ],
  evidences: [
    {
      id: 'def-ev-fjp-metodologia',
      tag: 'FUNDAÇÃO JOÃO PINHEIRO • METODOLOGIA',
      dateStr: '2025',
      title: 'Metodologia da FJP distingue déficit habitacional e inadequação de moradias',
      headline: 'Déficit requer novas moradias enquanto inadequação analisa condições e infraestrutura do estoque existente',
      source: 'Fundação João Pinheiro (FJP)',
      url: 'https://fjp.mg.gov.br',
      summary: 'A metodologia da Fundação João Pinheiro separa as necessidades habitacionais em duas dimensões. O déficit habitacional representa situações em que é necessária uma nova solução de moradia, incluindo habitações precárias, coabitação e famílias urbanas comprometendo parcela excessiva da renda com aluguel. Já a inadequação habitacional considera imóveis que existem, mas apresentam problemas de infraestrutura, condições da própria construção ou regularização fundiária. Essa distinção é importante porque mostra que enfrentar o problema habitacional brasileiro exige tanto ampliar o acesso a moradias quanto melhorar parte do estoque residencial existente.'
    },
    {
      id: 'def-ev-imoveis-desocupados-ibge-cnj',
      tag: 'IBGE / CNJ / TV JUSTIÇA • ESTOQUE DE IMÓVEIS',
      dateStr: 'Abril/2026',
      title: 'Brasil possui cerca de 11 milhões de imóveis desocupados ao mesmo tempo em que enfrenta déficit habitacional',
      headline: 'Dados do IBGE reportados na TV Justiça e CNJ apontam prédios abandonados e construções inacabadas',
      source: 'TV Justiça / Conselho Nacional de Justiça (CNJ) / Colégio Registral RS / IBGE',
      url: 'https://colegioregistralrs.org.br/noticias/20836/imoveis-abandonados-no-brasil-e-tema-de-reportagem-no-reporter-justica/',
      summary: 'O Brasil possui cerca de 11 milhões de imóveis desocupados, incluindo construções inacabadas, prédios abandonados e espaços sem utilização, de acordo com dados do IBGE apresentados em reportagem da TV Justiça e do Conselho Nacional de Justiça. O número evidencia que o problema habitacional não decorre apenas da quantidade de imóveis existentes, mas também da localização, condição, regularização e capacidade de colocar esse patrimônio novamente em uso. A existência simultânea de déficit habitacional e grande quantidade de imóveis vazios reforça a necessidade de políticas que combinem novas construções com recuperação e melhor aproveitamento do estoque já existente.'
    },
    {
      id: 'def-ev-fjp-30anos-2024',
      tag: 'FUNDAÇÃO JOÃO PINHEIRO • DÉFICIT 2024',
      dateStr: 'Junho/2026',
      title: 'Déficit habitacional brasileiro continua em queda, mas aluguel elevado e inadequação permanecem como desafios',
      headline: 'Déficit recua de 7,6% para 7,4% dos domicílios em 2024 e inadequação atinge 28 milhões de moradias',
      source: 'Fundação João Pinheiro (FJP)',
      url: 'https://fjp.mg.gov.br/fjp-lanca-e-book-resultante-das-discussoes-do-seminario-internacional-30-anos-da-pesquisa-deficit-habitacional-no-brasil/',
      summary: 'A atualização da Fundação João Pinheiro para 2024 mostra continuidade da redução do déficit habitacional brasileiro, que passou de 7,6% dos domicílios em 2023 para 7,4% em 2024. O gasto excessivo das famílias com aluguel urbano permaneceu como o principal componente do déficit, mostrando que o desafio habitacional está cada vez mais relacionado também à capacidade de pagar pela moradia e não apenas à ausência física de imóveis. Ao mesmo tempo, aproximadamente 28 milhões de moradias apresentavam algum tipo de inadequação em 2024, principalmente problemas de infraestrutura urbana. Os dados mostram melhora gradual no déficit quantitativo, mas uma necessidade habitacional ainda muito ampla quando também são consideradas as condições das casas existentes.'
    }
  ]
};
