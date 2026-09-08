import React from 'react';
import { Building2, Zap, ShoppingCart, Droplets, Activity } from 'lucide-react';
export const INFLACAO_EVIDENCES = [
  {
    id: 1,
    tag: 'Inflação oficial / IPCA',
    dateStr: 'Julho 2026',
    title: 'Inflação recua para 0,07% em julho e volta para a meta do governo',
    headline: 'O IPCA ficou em 0,07% em julho e acumulou 4,44% em 12 meses, voltando para dentro do intervalo de tolerância da meta. A desaceleração foi ajudada pela queda dos alimentos, enquanto a energia elétrica residencial foi um importante vetor de alta.',
    source: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/inflacao-recua-para-007-em-julho-e-volta-para-meta-do-governo'
  },
  {
    id: 2,
    tag: 'Projeção / Expectativas',
    dateStr: 'Agosto 2026',
    title: 'Após seis semanas da queda, previsão de inflação fica estável acima de 5%',
    headline: 'O mercado manteve a projeção do IPCA de 2026 em 5,02%, enquanto elevou a previsão para 2027 de 4,22% para 4,24%. A projeção continua acima do teto da meta em 2026, apesar da melhora recente do IPCA.',
    source: 'UOL Economia / Relatório Focus',
    url: 'https://economia.uol.com.br/noticias/redacao/2026/08/17/relatorio-focus---17-de-agosto-de-2026.ghtm'
  },
  {
    id: 3,
    tag: 'Risco inflacionário',
    dateStr: 'Junho 2026',
    title: 'Banco Central mantém alerta para riscos à inflação',
    headline: 'O Banco Central aponta riscos como expectativas desancoradas, inflação de serviços mais resiliente, políticas econômicas com impacto inflacionário e estímulos ao consumo. Ao mesmo tempo, uma desaceleração maior da economia e preços menores de commodities poderiam reduzir a pressão.',
    source: 'Banco Central do Brasil',
    url: 'https://www.bcb.gov.br/publicacoes/rpm/202606'
  },
  {
    id: 4,
    tag: 'Inflação da construção',
    dateStr: '31/07/2026',
    title: 'IGP-M de julho registra queda, mas custos de construção continuam pressionados',
    headline: 'O IGP-M caiu 1,16% em julho, acumulando 2,08% no ano e 2,76% em 12 meses. Porém, dentro do índice, o INCC-M acumulou 6,40% em 12 meses, com materiais e serviços em 5,93% e mão de obra em 7,06%.',
    source: 'Ministério da Fazenda / FGV',
    url: 'https://www.gov.br/fazenda/pt-br/central-de-conteudo/publicacoes/conjuntura-economica/inflacao/defeso-eleitoral-2026/informativo-igp-m-jul2026.html'
  }
];

export const INFLACAO_GRUPOS = [
  { name: 'Habitação', weight: '15,3%', var: '+0,63%', icon: <Building2 className="w-5 h-5" />, lorenzettiImpact: 'Custos de moradia podem influenciar a disponibilidade de renda para reformas e melhorias residenciais.' },
  { name: 'Energia Elétrica', weight: '4,0%', var: '+1,53%', icon: <Zap className="w-5 h-5" />, lorenzettiImpact: 'Variações tarifárias podem alterar o custo de uso e a percepção de eficiência de equipamentos elétricos.' },
  { name: 'Artigos de Residência', weight: '3,8%', var: '+0,23%', icon: <ShoppingCart className="w-5 h-5" />, lorenzettiImpact: 'A evolução dos preços de bens para o domicílio pode afetar o custo de aquisição de equipamentos residenciais.' },
  { name: 'Água e Esgoto', weight: '1,6%', var: '+0,30%', icon: <Droplets className="w-5 h-5" />, lorenzettiImpact: 'Mudanças nos custos da água podem aumentar a relevância de soluções voltadas à eficiência no consumo.' },
  { name: 'Alimentação e Bebidas', weight: '21,5%', var: '-0,24%', icon: <Activity className="w-5 h-5" />, lorenzettiImpact: 'A evolução dos preços de alimentos influencia o orçamento disponível para compras discricionárias.' }
];
