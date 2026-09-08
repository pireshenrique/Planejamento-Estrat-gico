import React from 'react';
import { Landmark, Scale, Building2, Droplets, ShoppingCart, TrendingUp } from 'lucide-react';

export const ELEICOES_EVIDENCES = [
  {
    id: 1,
    tag: 'Mercados & Volatilidade',
    dateStr: 'Agosto / 2026',
    title: 'Eleições de 2026 aumentam a volatilidade e colocam Bolsa, câmbio e juros sob pressão',
    headline: 'A aproximação das eleições elevou a incerteza sobre a condução econômica do próximo governo, principalmente em relação à trajetória da dívida pública e à credibilidade fiscal. Em agosto, houve saída de capital estrangeiro da Bolsa e do mercado cambial, enquanto analistas passaram a projetar juros mais altos por mais tempo. A matéria mostra que o impacto eleitoral sobre os mercados depende menos do nome do vencedor e mais da percepção sobre a sustentabilidade fiscal do próximo governo.',
    source: 'Folha de S.Paulo',
    url: 'https://www1.folha.uol.com.br/mercado/2026/08/eleicoes-aumentam-volatilidade-e-colocam-bolsa-e-real-sob-pressao.shtml'
  },
  {
    id: 2,
    tag: 'Cenário Fiscal Comparado',
    dateStr: '26/08/2026',
    title: 'Lula e Flávio Bolsonaro apresentam estratégias econômicas diferentes, mas ambos enfrentam desafio fiscal',
    headline: 'Lula e Flávio Bolsonaro defendem caminhos diferentes para a economia, mas investidores veem dificuldades para uma mudança expressiva na trajetória da dívida pública em qualquer dos cenários. Lula tende a combinar arcabouço fiscal e investimento público, enquanto Flávio defende maior contenção de gastos e uma regra vinculada à dívida. A credibilidade fiscal aparece como fator crítico para juros, câmbio e crescimento independentemente do resultado eleitoral.',
    source: 'Reuters',
    url: 'https://www.reuters.com/world/americas/brazil-vote-offers-opposing-politics-similar-fiscal-outcomes-2026-08-26/'
  },
  {
    id: 3,
    tag: 'Plano Econômico / Lula',
    dateStr: 'Agosto / 2026',
    title: 'Lula aposta em investimento público, infraestrutura e produtividade para sustentar o crescimento',
    headline: 'O programa de Lula propõe manter o arcabouço fiscal e ampliar investimentos em infraestrutura logística, indústria e desenvolvimento produtivo. Entre as propostas estão uma nova edição do Novo PAC, continuidade de concessões de rodovias e ferrovias e estímulos ao mercado imobiliário. O principal ponto favorável dessa estratégia é a tentativa de usar investimento público e privado para ampliar produtividade e crescimento; o desafio é compatibilizar essa agenda com a trajetória fiscal.',
    source: 'Folha de S.Paulo',
    url: 'https://www1.folha.uol.com.br/poder/2026/08/veja-pontos-em-que-os-planos-de-governo-de-lula-e-flavio-bolsonaro-divergem.shtml'
  },
  {
    id: 4,
    tag: 'Plano Econômico / Flávio Bolsonaro',
    dateStr: 'Agosto / 2026',
    title: 'Flávio Bolsonaro propõe corte de gastos, novo teto fiscal e redução da máquina pública',
    headline: 'O programa econômico de Flávio Bolsonaro propõe um “tesouraço” nas despesas públicas, criação de um novo teto de gastos, redução de pelo menos dez ministérios, corte de cargos comissionados e retomada de privatizações e concessões. Também prevê revisão de exceções da Reforma Tributária. Para o mercado, a proposta sinaliza maior disciplina fiscal; o desafio está na execução política e no detalhamento de como os cortes e a nova regra fiscal seriam implementados.',
    source: 'Folha de S.Paulo',
    url: 'https://www1.folha.uol.com.br/mercado/2026/08/plano-de-governo-de-flavio-bolsonaro-propoe-tesouraco-e-novo-teto-de-gastos.shtml'
  },
  {
    id: 5,
    tag: 'Fatores de Risco / Lula',
    dateStr: 'Agosto / 2026',
    title: 'Situação fiscal, endividamento das famílias e avaliação do governo aparecem entre os principais riscos para Lula',
    headline: 'Entre os fatores que podem dificultar a reeleição estão o elevado endividamento das famílias, problemas na fila do INSS, preocupações com a dívida pública e juros elevados, além da avaliação negativa de parte do eleitorado. A rejeição elevada e dificuldades em alguns segmentos, como o eleitorado evangélico, também aparecem como vulnerabilidades da candidatura.',
    source: 'Folha de S.Paulo',
    url: 'https://www1.folha.uol.com.br/poder/2026/08/o-que-pesa-contra-lula-nas-eleicoes-de-2026.shtml'
  },
  {
    id: 6,
    tag: 'Fatores de Risco / Flávio Bolsonaro',
    dateStr: 'Agosto / 2026',
    title: 'Rejeição, dificuldade entre mulheres e falta de experiência executiva aparecem como riscos para Flávio Bolsonaro',
    headline: 'A candidatura de Flávio enfrenta rejeição elevada, desempenho mais fraco entre mulheres e questionamentos sobre sua experiência em cargos executivos. Controvérsias envolvendo o caso da “rachadinha” e o financiamento do filme “Dark Horse” também aparecem como fatores de desgaste. Ao mesmo tempo, aliados avaliam que parte de sua rejeição pode ser reduzida durante a campanha por estar associada à imagem de Jair Bolsonaro.',
    source: 'Folha de S.Paulo',
    url: 'https://www1.folha.uol.com.br/poder/2026/08/o-que-pesa-contra-flavio-bolsonaro-nas-eleicoes-de-2026.shtml'
  }
];

export const ELEICOES_EIXOS = [
  { 
    name: 'Sustentabilidade Fiscal', 
    weight: 'Dívida Pública', 
    var: 'Fator Crítico', 
    icon: <Landmark className="w-5 h-5" />, 
    lorenzettiImpact: 'Pode influenciar a trajetória das taxas de juros de longo prazo, câmbio e estabilidade macroeconômica.' 
  },
  { 
    name: 'Investimento & Infraestrutura', 
    weight: 'Novo PAC e Imobiliário', 
    var: 'Produtividade', 
    icon: <Building2 className="w-5 h-5" />, 
    lorenzettiImpact: 'Pode criar oportunidades de demanda para o setor de construção civil, habitação e infraestrutura.' 
  },
  { 
    name: 'Controle de Gastos & Teto', 
    weight: 'Redução de Despesas', 
    var: 'Disciplina Fiscal', 
    icon: <Scale className="w-5 h-5" />, 
    lorenzettiImpact: 'Pode demandar acompanhamento sobre despesas governamentais, concessões e privatizações.' 
  },
  { 
    name: 'Reforma Tributária', 
    weight: 'Revisão de Exceções', 
    var: 'Regulamentação', 
    icon: <Scale className="w-5 h-5" />, 
    lorenzettiImpact: 'Pode demandar acompanhamento sobre a implementação das alíquotas de CBS e IBS e transição fiscal.' 
  },
  { 
    name: 'Endividamento & Renda', 
    weight: 'Orçamento Familiar', 
    var: 'Consumo', 
    icon: <ShoppingCart className="w-5 h-5" />, 
    lorenzettiImpact: 'Pode impactar o orçamento das famílias, confiança do consumidor e volume de reformas residenciais.' 
  }
];
