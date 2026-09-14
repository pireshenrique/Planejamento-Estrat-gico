import { User, type LucideIcon } from 'lucide-react';
import type { Evidence } from '../../components/layout/EvidenceCard';

export interface LaresUnipessoaisData {
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

export const LARES_UNIPESSOAIS_DATA: LaresUnipessoaisData = {
  id: 'lares-unipessoais',
  label: 'Lares Unipessoais',
  icon: User,
  headline: 'Os lares unipessoais passaram de 7,5 milhões em 2012 para mais de 15 milhões em 2025 e já representam 19,5% dos domicílios brasileiros. O crescimento ocorre em perfis diferentes de idade e gênero e começa a influenciar o mercado imobiliário, com studios e imóveis de até 40 m² representando 41,1% das intenções de novos lançamentos. O movimento indica que a redução do número de moradores por residência já está alterando o tamanho, o formato e o público-alvo de parte dos novos empreendimentos.',
  statusSubtitle: 'Lares com uma única pessoa já representam cerca de 1 em cada 5 domicílios, enquanto imóveis de até 40 m² ganham espaço nas intenções de novos lançamentos',
  observeSummary: 'Os lares unipessoais passaram de 7,5 milhões em 2012 para mais de 15 milhões em 2025 e já representam 19,5% dos domicílios brasileiros. O crescimento ocorre em perfis diferentes de idade e gênero e começa a influenciar o mercado imobiliário, com studios e imóveis de até 40 m² representando 41,1% das intenções de novos lançamentos. O movimento indica que a redução do número de moradores por residência já está alterando o tamanho, o formato e o público-alvo de parte dos novos empreendimentos.',
  observeTitle: 'Últimas notícias e dados apurados',
  observeNotes: [
    'O número de domicílios com apenas um morador passou de 7,5 milhões em 2012 para mais de 15 milhões em 2025, mais que dobrando em 13 anos. O crescimento mostra uma mudança estrutural na composição das famílias brasileiras, com morar sozinho deixando de ser uma configuração pouco comum e passando a ter peso relevante no mercado habitacional.',
    'Os lares unipessoais já representam 19,5% dos domicílios brasileiros, o equivalente a aproximadamente uma em cada cinco residências. Na prática, quase 20% das moradias do país atendem apenas uma pessoa, tornando esse perfil relevante para decisões de desenvolvimento imobiliário e consumo residencial.',
    'O crescimento dos lares unipessoais não ocorre de maneira uniforme entre os diferentes grupos da população. Entre os homens que vivem sozinhos, há maior concentração nas idades de 30 a 59 anos, enquanto entre as mulheres a presença é mais elevada a partir dos 60 anos. Isso mostra que o mercado de pessoas que moram sozinhas reúne perfis com necessidades residenciais diferentes, e não apenas jovens buscando imóveis menores.',
    'A mudança demográfica já começa a aparecer no planejamento dos novos empreendimentos. Studios e imóveis de até 40 m² representam 41,1% das intenções de lançamento das incorporadoras analisadas, indicando aumento do interesse por unidades menores e com menor preço total. Esse dado representa intenção de novos projetos e não significa que 41,1% de todos os imóveis lançados no país já tenham esse tamanho.',
    'Os imóveis compactos também estão ganhando espaço fora das grandes capitais, indicando que esse formato começa a alcançar mercados regionais. A expansão, porém, não deve ocorrer de maneira uniforme, porque renda, preço dos terrenos, perfil dos moradores e características locais influenciam a demanda por unidades menores.',
    'A expansão dos imóveis compactos está relacionada a uma combinação de fatores, como crescimento dos lares com menos moradores, busca por menor preço total e preferência por moradias mais práticas. Isso não significa que toda pessoa que mora sozinha escolherá um studio, mas mostra que a redução do número de moradores passou a influenciar o tipo de imóvel que as incorporadoras pretendem desenvolver.'
  ],
  lorenzettiImpacts: [
    'O crescimento dos lares unipessoais pode aumentar a participação de residências menores e com menor necessidade de equipamentos por unidade. Para a Lorenzetti, isso pode aumentar a importância de produtos adequados a espaços compactos, com foco em praticidade, facilidade de instalação, uso eficiente do espaço e preço compatível com imóveis de menor tamanho.',
    'O aumento das intenções de lançamento de studios e imóveis de até 40 m² pode aumentar a participação de plantas residenciais com banheiros, cozinhas e áreas de serviço mais compactas. Para a Lorenzetti, isso pode favorecer produtos com dimensões adequadas a espaços reduzidos e soluções que conciliem funcionalidade, design e aproveitamento do ambiente. O efeito depende de esses projetos efetivamente avançarem da intenção de lançamento para obras realizadas.',
    'Os diferentes perfis de pessoas que moram sozinhas podem gerar necessidades distintas de produto. Consumidores mais jovens podem valorizar praticidade, design e tecnologia, enquanto uma parcela relevante de mulheres com mais de 60 anos pode aumentar a importância de ergonomia, facilidade de uso e segurança. Para a Lorenzetti, isso sugere que o crescimento dos lares unipessoais não deve ser tratado como um único segmento de consumo.',
    'O crescimento de unidades menores também pode alterar o mix comprado por incorporadoras e construtoras. Empreendimentos compactos normalmente concentram grande quantidade de unidades em uma mesma área construída, o que pode aumentar a importância de produtos padronizados, de instalação simples e com boa relação entre custo e desempenho. Para a Lorenzetti, esse movimento pode influenciar tanto especificações de produtos quanto negociações voltadas ao canal de construção.',
    'A expansão dos imóveis compactos para mercados regionais pode ampliar a demanda fora das grandes capitais. Para a Lorenzetti, isso pode tornar mais importante acompanhar onde esses empreendimentos estão sendo desenvolvidos e se os canais locais de distribuição possuem capacidade para atender esse novo perfil de imóvel. O efeito, porém, tende a variar bastante entre cidades e regiões.'
  ],
  evidences: [
    {
      id: 'lares-ev-band-morar-sozinho-15mi',
      tag: 'IBGE • PNAD CONTÍNUA',
      dateStr: '18/04/2026',
      title: 'Número de brasileiros que moram sozinhos mais que dobra em 13 anos',
      headline: 'Domicílios com apenas um morador passam de 7,5 milhões em 2012 para mais de 15 milhões em 2025, atingindo 19,5% do total',
      source: 'Jornal da Band / IBGE (PNAD Contínua)',
      url: 'https://www.band.com.br/noticias/jornal-da-band/ultimas/numero-de-brasileiros-que-moram-sozinhos-dobra-em-13-anos-e-supera-15-mi-202604182240',
      summary: 'O número de domicílios com apenas um morador passou de 7,5 milhões em 2012 para mais de 15 milhões em 2025, segundo dados da PNAD Contínua do IBGE. Atualmente, 19,5% das residências brasileiras são unipessoais, o equivalente a aproximadamente uma em cada cinco. O crescimento ocorre por motivos diferentes entre os perfis demográficos, com maior presença de homens entre 30 e 59 anos e de mulheres acima de 60 anos. O avanço mostra que morar sozinho deixou de ser uma configuração residencial minoritária e passou a representar uma parcela relevante da estrutura habitacional brasileira.'
    },
    {
      id: 'lares-ev-exame-lancamentos-compactos-40m2',
      tag: 'EXAME • LEVANTAMENTO HOUSI',
      dateStr: '2026',
      title: 'Imóveis compactos já concentram mais de 40% das intenções de novos lançamentos',
      headline: 'Studios e unidades de até 40 m² já representam 41,1% das intenções de lançamento das incorporadoras',
      source: 'Exame / Levantamento Housi',
      url: 'https://exame.com/mercado-imobiliario/mais-de-40-dos-lancamentos-imobiliarios-tem-ate-40-metros-quadrados/',
      summary: 'Studios e unidades de até 40 m² já representam 41,1% das intenções de lançamento das incorporadoras, segundo levantamento da Housi obtido pela Exame. O movimento não está restrito aos grandes centros e indica que os imóveis compactos estão ganhando espaço também em outras regiões. A tendência está associada a mudanças demográficas e comportamentais, como crescimento dos lares com menos moradores, busca por unidades de menor preço total e maior procura por formatos residenciais voltados à praticidade e à locação. Para o planejamento habitacional, o dado mostra que a redução do tamanho dos domicílios já começa a influenciar diretamente o tipo de imóvel que o setor pretende construir nos próximos anos.'
    }
  ]
};
