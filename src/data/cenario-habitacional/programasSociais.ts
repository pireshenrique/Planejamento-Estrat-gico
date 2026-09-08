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
  { id: 'mcmv', label: 'MINHA CASA MINHA VIDA', icon: Home },
  { id: 'reforma_brasil', label: 'Programa Reforma Brasil', icon: Hammer },
];

export const PROGRAMAS_SOCIAIS_BY_ID: Record<ProgramasSociaisTopicId, ProgramasSociaisTopic> = {
  mcmv: {
    id: 'mcmv',
    label: 'MINHA CASA MINHA VIDA',
    icon: Home,
    headline: 'O programa Minha Casa, Minha Vida ampliou sua meta para 3 milhões de moradias até o final de 2026, amparado pelo orçamento histórico de R$ 142,1 bilhões do FGTS para a habitação, novos ciclos de contratação nas faixas 1 a 3 e a estruturação da Faixa 4 para famílias de classe média.',
    statusSubtitle: 'Mais de 2,27 milhões de moradias financiadas até abril de 2026, meta ampliada para 3 milhões de unidades e R$ 142,1 bilhões do FGTS para habitação',
    observeSummary: 'O Minha Casa, Minha Vida consolidou-se como o eixo central de sustentação da construção residencial no Brasil em 2026. Com aporte recorde do FGTS de R$ 142,1 bilhões para o crédito habitacional, o programa expandiu as faixas de renda e os tetos de avaliação dos imóveis (até R$ 400 mil na Faixa 3 e até R$ 600 mil na recém-instituída Faixa 4 de classe média). Enquanto o segmento de médio e alto padrão sofreu desaceleração decorrente de taxas de juros elevadas no mercado livre, as operações do MCMV registraram avanço nas vendas (+3,4% no 2T26), demonstrando maior resiliência sustentada por subsídios, descontos e funding compulsório.',
    observeTitle: 'Últimas notícias e dados apurados',
    observeNotes: [
      'O Governo Federal e o Ministério das Cidades elevaram a meta global do Minha Casa, Minha Vida para a entrega de 3 milhões de moradias até o final de 2026, superando a estimativa preliminar de 2 milhões de unidades contratadas no início do ciclo plurianual.',
      'Até o primeiro quadrimestre de 2026, o programa totalizou mais de 2,27 milhões de habitações financiadas em território nacional, correspondendo a um montante superior a R$ 300 bilhões em investimentos acumulados via FGTS e Orçamento Geral da União.',
      'O Conselho Curador do FGTS aprovou o Orçamento Operacional para a área de habitação em 2026 no valor de R$ 142,1 bilhões, estabelecendo o maior volume financeiro nominal da história do fundo destinado à concessão de crédito habitacional, subsídios e descontos às famílias beneficiárias.',
      'As faixas de renda familiar urbana foram atualizadas para o ciclo vigente: Faixa 1 (renda bruta de até R$ 3.200), Faixa 2 (de R$ 3.200,01 a R$ 5.000), Faixa 3 (de R$ 5.000,01 a R$ 9.600) e Faixa 4 para classe média (de R$ 9.600,01 a R$ 13.000, com teto de imóvel de até R$ 600 mil e taxas reguladas).',
      'No segmento de habitação de interesse social com subsídio integral ou preponderante, o Ministério das Cidades abriu seleção via Fundo de Arrendamento Residencial (MCMV-FAR) para 110 mil novas unidades habitacionais urbanas, além de autorizar mais de 21,2 mil moradias no modelo MCMV-Entidades voltadas a famílias com renda de até R$ 2.850.',
      'Nas apurações trimestrais das 14 principais incorporadoras de capital aberto, as vendas de unidades vinculadas ao Minha Casa, Minha Vida apresentaram alta de 3,4% no segundo trimestre de 2026, enquanto as vendas de médio e alto padrão recuaram 5,1% no mesmo período.'
    ],
    lorenzettiImpacts: [
      'A ampliação da meta para 3 milhões de moradias e o orçamento de R$ 142,1 bilhões do FGTS podem gerar sustentação da demanda estrutural por chuveiros elétricos, torneiras e louças básicas instalados nas unidades entregues.',
      'A expansão dos tetos de financiamento e a criação da Faixa 4 (renda até R$ 13.000 e teto de R$ 600 mil) pode criar oportunidades para linhas intermediárias de metais sanitários, duchas multitemperaturas e acessórios de maior valor agregado.',
      'O cronograma contínuo de contratações do MCMV-FAR e MCMV-Entidades pode demandar acompanhamento da capacidade fabril e dos canais de suprimento direto a grandes construtoras do segmento econômico (como MRV, Direcional, Cury e Tenda).',
      'A resiliência das vendas no segmento econômico em contraste com o médio/alto padrão pode demandar acompanhamento do mix de produção da Lorenzetti para preservar competitividade em itens de alto giro e grande escala.',
      'Oscilações na liberação de recursos do FGTS ou restrições orçamentárias nos repasses do Tesouro Nacional podem representar risco de repactuação no cronograma físico de obras e nas etapas de acabamento predial.'
    ],
    evidences: [
      {
        id: 'ev-mcmv-meta-3m-2026',
        tag: 'MINISTÉRIO DAS CIDADES • META MCMV',
        dateStr: '2026',
        title: 'Minha Casa, Minha Vida atinge 2,27 milhões de moradias financiadas e projeta 3 milhões até o fim de 2026',
        headline: 'Meta do MCMV é ampliada para 3 milhões de unidades com R$ 300 bilhões em investimentos',
        source: 'Ministério das Cidades / Governo Federal',
        url: 'https://www.gov.br/cidades/pt-br/assuntos/habitacao/minha-casa-minha-vida',
        summary: 'O Ministério das Cidades e a Secretaria Nacional de Habitação confirmaram que o Minha Casa, Minha Vida ultrapassou a marca de 2,27 milhões de moradias financiadas, totalizando R$ 300 bilhões em investimentos acumulados. O Governo Federal atualizou a meta global do programa para alcançar a marca de 3 milhões de habitações entregues ou contratadas até o final de 2026, impulsionando a redução do déficit habitacional quantitativo em todas as regiões do país.'
      },
      {
        id: 'ev-mcmv-fgts-orcamento-2026',
        tag: 'FGTS / CAIXA • FUNDING HABITACIONAL',
        dateStr: '2026',
        title: 'Orçamento Operacional do FGTS para habitação atinge recorde histórico de R$ 142,1 bilhões em 2026',
        headline: 'Conselho Curador do FGTS assegura maior volume financeiro da história para o crédito habitacional popular',
        source: 'Conselho Curador do FGTS / Caixa Econômica Federal',
        url: 'https://www.caixa.gov.br/poder-publico/programas-governo/habitacao/minha-casa-minha-vida',
        summary: 'O Conselho Curador do FGTS estabeleceu o Orçamento Operacional de 2026 para a habitação popular em R$ 142,1 bilhões, com recursos regionalizados para financiamento oneroso, subsídios e pró-moradia. O montante garante liquidez e continuidade aos contratos de financiamento habitacional, beneficiando famílias com renda bruta mensal de até R$ 8.600 nas faixas tradicionais e até R$ 13.000 na nova faixa intermediária.'
      },
      {
        id: 'ev-mcmv-far-contratacoes-2026',
        tag: 'HABITAÇÃO SUBSIDIADA • MCMV-FAR',
        dateStr: '2026',
        title: 'Ministério das Cidades abre seleção para 110 mil unidades habitacionais via Fundo de Arrendamento Residencial (FAR)',
        headline: 'Novo ciclo do MCMV-FAR prioriza cidades médias e grandes com infraestrutura e equipamentos públicos',
        source: 'Ministério das Cidades (Portaria MCid)',
        url: 'https://www.gov.br/cidades/pt-br/noticias',
        summary: 'Abertura do ciclo de contratação do MCMV-FAR prevê a seleção de 110 mil unidades habitacionais urbanas (100 mil para demanda geral e 10 mil para atendimento a situações de emergência e reassentamento). As propostas são operacionalizadas pela Caixa em modelo continuado com prioridade para terrenos localizados próximos a redes de saneamento, postos de saúde e escolas.'
      }
    ]
  },
  reforma_brasil: {
    id: 'reforma_brasil',
    label: 'Programa Reforma Brasil',
    icon: Hammer,
    headline: 'O Programa Reforma Casa Brasil disponibiliza R$ 40 bilhões em linhas de crédito facilitado pela Caixa para financiar reformas, ampliações e melhorias estruturais e hidrossanitárias em residências urbanas de famílias em todo o país.',
    statusSubtitle: 'Volume de R$ 40 bilhões em crédito e financiamentos de R$ 5 mil a R$ 50 mil por família em até 60 meses para compra de materiais e serviços',
    observeSummary: 'Instituído pelo Governo Federal com operacionalização da Caixa Econômica Federal, o Programa Reforma Casa Brasil (Reforma Brasil) foi desenhado para atuar sobre o déficit habitacional qualitativo brasileiro — caracterizado por moradias que já existem, mas sofrem de banheiros precários, falta de instalações hidrossanitárias, coberturas inadequadas ou ausência de cômodos essenciais. Com R$ 40 bilhões em recursos (sendo R$ 30 bilhões oriundos do Fundo Social para famílias com renda de até R$ 9.600 e R$ 10 bilhões alocados pela Caixa via SBPE para rendas superiores), a linha viabiliza créditos entre R$ 5 mil e R$ 50 mil com amortização em até 60 meses e parcelas limitadas a 25% da renda familiar.',
    observeTitle: 'Últimas notícias e diretrizes operacionais',
    observeNotes: [
      'O Programa Reforma Casa Brasil estrutura R$ 40 bilhões em linhas de financiamento para modernização habitacional, com R$ 30 bilhões garantidos pelo Fundo Social (famílias até R$ 9.600/mês) e R$ 10 bilhões originados do SBPE pela Caixa Econômica Federal para faixas superiores.',
      'O crédito prevê tíquetes individuais de R$ 5.000 a R$ 50.000 por família, com prazo de amortização de até 60 meses (5 anos) e limitação de comprometimento mensal em 25% da renda bruta comprovada para resguardar a capacidade de pagamento.',
      'Os recursos são destinados estritamente à aquisição de materiais de construção (incluindo louças sanitárias, torneiras, chuveiros elétricos, fiações, tubulações de água e esgoto), pagamento de mão de obra e contratação de serviços técnicos especializados.',
      'A contratação foi modelada em plataforma digital simplificada pelos canais da Caixa Econômica Federal (aplicativo Habitação Caixa e agências bancárias), com atendimento prioritário inicial a municípios com mais de 300 mil habitantes, capitais e arranjos metropolitanos integrados.',
      'Estudos do IBGE e da Fundação João Pinheiro identificam que o déficit habitacional qualitativo (inadequação de moradias, banheiros precários e sobrelotação) atinge mais de 11 milhões de domicílios brasileiros, superando em número absoluto o déficit quantitativo de novas habitações.',
      'No âmbito regulatório, tramitam proposições legislativas no Congresso Nacional (como o PL 2.550) com o propósito de autorizar o uso direto de recursos do saldo do FGTS na compra de insumos de construção civil para melhorias habitacionais realizadas pelo próprio trabalhador.'
    ],
    lorenzettiImpacts: [
      'A liberação de até R$ 40 bilhões em crédito para reforma pode gerar estímulo direto às vendas de chuveiros elétricos, torneiras, duchas higiênicas, registros e louças no varejo tradicional de materiais de construção e lojas de vizinhança.',
      'A concentração das reformas em banheiros, cozinhas e instalações hidrossanitárias pode criar oportunidades para kits promocionais de reforma rápida integrando louças, metais e chuveiros elétricos.',
      'O tíquete médio de financiamento (entre R$ 5 mil e R$ 50 mil) pode favorecer a substituição de equipamentos antigos por modelos com maior apelo de durabilidade, conforto e eficiência energética/hídrica.',
      'A dispersão geográfica dos recursos em cidades com mais de 300 mil habitantes pode demandar acompanhamento da capilaridade da distribuição atacadista e do abastecimento dos pequenos e médios varejistas locais.',
      'A velocidade efetiva de liberação dos R$ 40 bilhões pela Caixa e eventuais exigências documentais aos tomadores de crédito podem representar risco de desembolso financeiro inferior ao teto divulgado pelo governo.'
    ],
    evidences: [
      {
        id: 'ev-reforma-brasil-40bi-2026',
        tag: 'CAIXA / GOVERNO FEDERAL • CRÉDITO REFORMA',
        dateStr: '2025/2026',
        title: 'Programa Reforma Casa Brasil disponibiliza R$ 40 bilhões em crédito para reforma e compra de materiais',
        headline: 'Linha habitacional operada pela Caixa financia de R$ 5 mil a R$ 50 mil para reformas em até 60 meses',
        source: 'Caixa Econômica Federal / Ministério das Cidades',
        url: 'https://www.caixa.gov.br/voce/habitacao/Paginas/default.aspx',
        summary: 'O Governo Federal e a Caixa Econômica Federal estruturaram o Programa Reforma Casa Brasil com R$ 40 bilhões em recursos disponíveis para combater o déficit qualitativo das habitações. São R$ 30 bilhões do Fundo Social para famílias com renda de até R$ 9.600 e R$ 10 bilhões via SBPE para faixas superiores. O financiamento cobre materiais de construção (louças, metais, instalações hidráulicas e elétricas) e serviços técnicos com pagamento em até 60 meses.'
      },
      {
        id: 'ev-reforma-qualitativo-ibge-fjp',
        tag: 'DÉFICIT QUALITATIVO • ESTUDOS HABITACIONAIS',
        dateStr: '2025/2026',
        title: 'Déficit qualitativo atinge mais de 11 milhões de domicílios no Brasil e impulsiona demanda por reformas',
        headline: 'Inadequação de banheiros e instalações hidrossanitárias predomina nos domicílios urbanos das famílias de menor renda',
        source: 'Fundação João Pinheiro / IBGE',
        url: 'https://fjp.mg.gov.br/deficit-habitacional-no-brasil/',
        summary: 'Levantamentos oficiais sobre a qualidade das habitações no Brasil apontam que as deficiências de infraestrutura interna, carência de banheiros exclusivos e problemas de instalações elétricas e hidráulicas superam o déficit quantitativo de novas moradias, fundamentando a criação de linhas federais de crédito específicas para modernização e reformas prediais.'
      },
      {
        id: 'ev-fgts-materiais-pl2550',
        tag: 'LEGISLAÇÃO E FGTS • PROJETO DE LEI',
        dateStr: '2026',
        title: 'Congresso debate autorização para saque de saldo do FGTS na compra de insumos e materiais de construção',
        headline: 'Projetos legislativos propõem permitir uso direto do fundo para reforma e ampliação da casa própria',
        source: 'Câmara dos Deputados / Congresso Nacional',
        url: 'https://www.camara.leg.br/',
        summary: 'Projetos de lei em tramitação no Congresso Nacional, incluindo o PL 2.550, analisam permissão para que titulares de contas vinculadas do FGTS utilizem parte dos recursos acumulados na aquisição direta de insumos de construção, louças e metais para obras de reforma residencial em imóveis próprios averbados.'
      }
    ]
  }
};
