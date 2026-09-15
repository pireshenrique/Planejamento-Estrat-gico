const fs = require('fs');

const data = {
  producao: {
    totais: {
      setor: { m1: '+3,1', m2: '-4,3', m3: '-2,4', m4: '-3,5' },
      eletronica: { m1: '+0,5', m2: '-8,7', m3: '-3,3', m4: '-4,0' },
      eletrica: { m1: '+5,5', m2: '-0,1', m3: '-1,5', m4: '-3,0' }
    },
    ajusteSazonal: { setor: '+0,5', eletrica: '+2,6', eletronica: '-2,0', industriaGeral: '-0,2' },
    geral: { acumAno: '1,4', extrativaAcumAno: '7,9', transfAcumAno: '0,2' },
    segmentos: [
      { nome: '26.1 - Componentes eletrônicos', m1: '-21,1', m2: '-24,6', m3: '-7,0', m4: '+8,8' },
      { nome: '26.2 - Equipamentos de informática e periféricos', m1: '+6,2', m2: '-6,8', m3: '-6,5', m4: '-6,9' },
      { nome: '26.3 - Equipamentos de comunicação', m1: '+6,3', m2: '-12,1', m3: '-4,9', m4: '-8,4' },
      { nome: '26.4 - Aparelhos de áudio e vídeo', m1: '-8,5', m2: '+1,1', m3: '+2,8', m4: '-0,4' },
      { nome: '26.5 - Instrumentos de medida e teste', m1: '+2,7', m2: '-5,1', m3: '-0,2', m4: '+0,7' },
      { nome: '27.1 - Geradores, transformadores e motores', m1: '+7,9', m2: '+5,1', m3: '-3,1', m4: '-4,6' },
      { nome: '27.2 - Pilhas, baterias e acumuladores', m1: '+4,7', m2: '+0,5', m3: '+3,8', m4: '+2,0' },
      { nome: '27.3 - Equipamentos para distribuição e controle', m1: '+2,7', m2: '+1,7', m3: '+2,7', m4: '+1,1' },
      { nome: '27.4 - Lâmpadas e equipamentos de iluminação', m1: '-3,0', m2: '+4,6', m3: '+18,5', m4: '+2,2' },
      { nome: '27.5 - Eletrodomésticos', m1: '+6,2', m2: '-1,8', m3: '-2,5', m4: '-4,8' },
      { nome: '27.9 - Equipamentos elétricos não especificados', m1: '+11,8', m2: '-34,3', m3: '-30,5', m4: '-12,8' }
    ]
  }
};

let facts = [];

// PRODUCÃO
const pblock = '02 · Produção da Indústria';
const psource = 'ibge-pim';

function addProdFact(id, stmt, val, group) {
  facts.push(`    {
      id: 'eco-eletroeletronico::02-producao::${id}',
      block: '${pblock}',
      statement: '${stmt}',
      value: '${val}',
      unit: '%',
      group: '${group}',
      sourceId: '${psource}',
      evidenceId: 'producao-maio'
    }`);
}

addProdFact('setor-m1', 'A produção do setor eletroeletrônico teve variação de +3,1% em maio de 2026 comparado a abril de 2026.', data.producao.totais.setor.m1, 'Variação da produção por segmento');
addProdFact('setor-m2', 'A produção do setor eletroeletrônico recuou 4,3% em maio de 2026 comparado a maio de 2025.', data.producao.totais.setor.m2, 'Variação da produção por segmento');
addProdFact('setor-m3', 'A produção do setor eletroeletrônico acumulou retração de 2,4% no período de janeiro a maio de 2026 comparado ao mesmo período de 2025.', data.producao.totais.setor.m3, 'Variação da produção por segmento');
addProdFact('setor-m4', 'A produção do setor eletroeletrônico recuou 3,5% no acumulado de 12 meses até maio de 2026.', data.producao.totais.setor.m4, 'Variação da produção por segmento');
addProdFact('setor-sazonal', 'A produção do setor eletroeletrônico cresceu 0,5% em maio de 2026 em relação a abril de 2026, com ajuste sazonal.', '+0,5', 'Ajuste Sazonal Mensal');
addProdFact('eletrica-sazonal', 'A produção da área elétrica cresceu 2,6% em maio de 2026 em relação a abril de 2026, com ajuste sazonal.', '+2,6', 'Ajuste Sazonal Mensal');
addProdFact('eletronica-sazonal', 'A produção da área eletrônica caiu 2,0% em maio de 2026 em relação a abril de 2026, com ajuste sazonal.', '-2,0', 'Ajuste Sazonal Mensal');
addProdFact('industriageral-sazonal', 'A produção da indústria geral recuou 0,2% em maio de 2026 em relação a abril de 2026, com ajuste sazonal.', '-0,2', 'Ajuste Sazonal Mensal');
addProdFact('industriageral-acum', 'A produção da indústria geral cresceu 1,4% no acumulado de janeiro a maio de 2026 em relação ao mesmo período de 2025.', '1,4', 'Indústria Geral');
addProdFact('extrativa-acum', 'A produção da indústria extrativa cresceu 7,9% no acumulado de janeiro a maio de 2026 em relação ao mesmo período de 2025.', '7,9', 'Indústria Geral');
addProdFact('transformacao-acum', 'A produção da indústria de transformação aumentou 0,2% no acumulado de janeiro a maio de 2026 em relação ao mesmo período de 2025.', '0,2', 'Indústria Geral');

data.producao.segmentos.forEach((seg, i) => {
  const shortId = seg.nome.split('-')[0].trim().replace('.', '-');
  addProdFact(`seg-${shortId}-m1`, `A produção do segmento ${seg.nome} variou ${seg.m1}% em maio de 2026 comparado a abril de 2026.`, seg.m1, 'Variação da produção por segmento');
  addProdFact(`seg-${shortId}-m2`, `A produção do segmento ${seg.nome} variou ${seg.m2}% em maio de 2026 comparado a maio de 2025.`, seg.m2, 'Variação da produção por segmento');
  addProdFact(`seg-${shortId}-m3`, `A produção do segmento ${seg.nome} variou ${seg.m3}% no acumulado de janeiro a maio de 2026.`, seg.m3, 'Variação da produção por segmento');
  addProdFact(`seg-${shortId}-m4`, `A produção do segmento ${seg.nome} variou ${seg.m4}% no acumulado de 12 meses até maio de 2026.`, seg.m4, 'Variação da produção por segmento');
});

// TOTAL ELETRONICA / ELETRICA
addProdFact(`eletronica-m1`, `A produção da área eletrônica variou ${data.producao.totais.eletronica.m1}% em maio de 2026 comparado a abril de 2026.`, data.producao.totais.eletronica.m1, 'Variação da produção por segmento');
addProdFact(`eletronica-m2`, `A produção da área eletrônica variou ${data.producao.totais.eletronica.m2}% em maio de 2026 comparado a maio de 2025.`, data.producao.totais.eletronica.m2, 'Variação da produção por segmento');
addProdFact(`eletronica-m3`, `A produção da área eletrônica variou ${data.producao.totais.eletronica.m3}% no acumulado de janeiro a maio de 2026.`, data.producao.totais.eletronica.m3, 'Variação da produção por segmento');
addProdFact(`eletronica-m4`, `A produção da área eletrônica variou ${data.producao.totais.eletronica.m4}% no acumulado de 12 meses até maio de 2026.`, data.producao.totais.eletronica.m4, 'Variação da produção por segmento');

addProdFact(`eletrica-m1`, `A produção da área elétrica variou ${data.producao.totais.eletrica.m1}% em maio de 2026 comparado a abril de 2026.`, data.producao.totais.eletrica.m1, 'Variação da produção por segmento');
addProdFact(`eletrica-m2`, `A produção da área elétrica variou ${data.producao.totais.eletrica.m2}% em maio de 2026 comparado a maio de 2025.`, data.producao.totais.eletrica.m2, 'Variação da produção por segmento');
addProdFact(`eletrica-m3`, `A produção da área elétrica variou ${data.producao.totais.eletrica.m3}% no acumulado de janeiro a maio de 2026.`, data.producao.totais.eletrica.m3, 'Variação da produção por segmento');
addProdFact(`eletrica-m4`, `A produção da área elétrica variou ${data.producao.totais.eletrica.m4}% no acumulado de 12 meses até maio de 2026.`, data.producao.totais.eletrica.m4, 'Variação da produção por segmento');


// SONDAGEM
const sblock = '03 · Sondagem Conjuntural';
const ssource = 'abinee-decon';
function addSondFact(id, stmt, val, group) {
  facts.push(`    {
      id: 'eco-eletroeletronico::03-sondagem::${id}',
      block: '${sblock}',
      statement: '${stmt}',
      value: '${val}',
      unit: '%',
      group: '${group}',
      sourceId: '${ssource}',
      evidenceId: 'sondagem-maio'
    }`);
}
addSondFact('vendas-cresc-anual', '52% das empresas indicaram crescimento nas vendas e encomendas em maio de 2026 em relação a maio de 2025.', '52', 'Vendas e Encomendas');
addSondFact('vendas-cresc-anual-ant', '46% das empresas haviam indicado crescimento nas vendas e encomendas em abril de 2026 em relação a abril de 2025.', '46', 'Vendas e Encomendas');
addSondFact('vendas-cresc-mensal', '44% das empresas indicaram crescimento nas vendas e encomendas em maio de 2026 frente a abril de 2026.', '44', 'Vendas e Encomendas');
addSondFact('vendas-cresc-mensal-ant', '26% das empresas haviam indicado crescimento nas vendas e encomendas em abril de 2026 frente a março de 2026.', '26', 'Vendas e Encomendas');
addSondFact('vendas-abaixo', '53% das empresas relataram negócios abaixo do esperado no mercado interno em maio de 2026.', '53', 'Vendas e Encomendas');

addSondFact('uci-atual', 'A Utilização da Capacidade Instalada (UCI) foi de 76% em maio de 2026.', '76', 'Capacidade Instalada');
addSondFact('uci-ant', 'A Utilização da Capacidade Instalada (UCI) foi de 77% em abril de 2026.', '77', 'Capacidade Instalada');
addSondFact('uci-var', 'A Utilização da Capacidade Instalada (UCI) recuou 1 p.p. em maio de 2026 comparado a abril de 2026.', '-1', 'Capacidade Instalada (p.p.)');

addSondFact('emprego-estab', '83% das empresas apontaram estabilidade no nível de emprego em maio de 2026.', '83', 'Nível de Emprego');
addSondFact('emprego-aum', '12% das empresas relataram aumento no número de funcionários em maio de 2026.', '12', 'Nível de Emprego');
addSondFact('emprego-queda', '5% das empresas indicaram queda no nível de emprego em maio de 2026.', '5', 'Nível de Emprego');

addSondFact('custos-pressao', '57% das empresas relataram pressões de alta nos custos de componentes e matérias-primas em maio de 2026.', '57', 'Custos e Preços');
addSondFact('custos-reajuste', '62% das empresas informaram que já reajustaram os preços de seus produtos finais em maio de 2026.', '62', 'Custos e Preços');
addSondFact('custos-reajuste-baixo', '63% dos reajustes de preços repassados situaram-se na faixa de até 10%.', '63', 'Custos e Preços');

addSondFact('insumos-falta', '27% das empresas relataram dificuldades na aquisição de componentes e matérias-primas por falta no mercado em maio de 2026.', '27', 'Abastecimento');

addSondFact('comex-exp', '30% das empresas relataram crescimento nas exportações em maio de 2026.', '30', 'Comércio Exterior');
addSondFact('comex-maritimo', '19% das empresas apontaram problemas no envio de cargas por via marítima em maio de 2026.', '19', 'Comércio Exterior');
addSondFact('comex-atraso', '23% das empresas indicaram atrasos no recebimento de cargas importadas em maio de 2026.', '23', 'Comércio Exterior');

addSondFact('giro-dif', '26% das empresas comentaram dificuldades para obtenção de financiamentos de capital de giro em maio de 2026.', '26', 'Capital de Giro');
addSondFact('giro-nao-utiliza', '64% das empresas pesquisadas não utilizam instrumentos de financiamento de capital de giro em maio de 2026.', '64', 'Capital de Giro');

// SOBRETAXAS
const sobblock = '04 · Imposição de Sobretaxas';
const sobsource = 'abinee';
function addSobFact(id, stmt, val, unit, group) {
  facts.push(`    {
      id: 'eco-eletroeletronico::04-sobretaxas::${id}',
      block: '${sobblock}',
      statement: '${stmt}',
      value: '${val}',
      unit: '${unit}',
      group: '${group}',
      sourceId: '${sobsource}',
      evidenceId: 'sobretaxas'
    }`);
}

addSobFact('tarifa-acumulada', 'A carga tarifária acumulada sobre produtos brasileiros exportados para os EUA alcançou 37,5% em julho de 2026.', '37,5', '%', 'Tarifas e Impacto');
addSobFact('tarifa-adicional', 'Os Estados Unidos anunciaram a aplicação de uma tarifa adicional de 12,5% sobre produtos brasileiros sob a Seção 301.', '12,5', '%', 'Tarifas e Impacto');
addSobFact('ncm-total', 'O Setor Elétrico e Eletrônico é representado por 1.240 subitens da Nomenclatura Comum do Mercosul (NCM).', '1240', '', 'Universo Tarifário');
addSobFact('ncm-atingidos', '864 subitens NCM do setor eletroeletrônico foram atingidos pelas sobretaxas das Seções 232 ou 301 dos EUA.', '864', '', 'Universo Tarifário');
addSobFact('ncm-percentual', 'Aproximadamente 70% do universo tarifário do setor eletroeletrônico foi afetado pelas novas tarifas americanas.', '70', '%', 'Universo Tarifário');
addSobFact('exp-total', 'As exportações eletroeletrônicas brasileiras totais somaram US$ 8,1 bilhões em 2025.', '8,1', 'US$ bi', 'Exportações');
addSobFact('exp-eua', 'As exportações eletroeletrônicas brasileiras destinadas aos EUA somaram US$ 2,1 bilhões em 2025.', '2,1', 'US$ bi', 'Exportações');
addSobFact('exp-eua-percentual', 'Os Estados Unidos representaram 26% do total exportado pelo setor eletroeletrônico brasileiro em 2025.', '26', '%', 'Exportações');
addSobFact('exp-atingidas', 'Aproximadamente US$ 1,9 bilhão das exportações para os EUA em 2025 correspondiam a produtos atingidos pelas novas tarifas.', '1,9', 'US$ bi', 'Exportações');
addSobFact('exp-crescimento', 'As exportações do setor para os EUA cresceram cerca de 80% entre 2020 e 2025.', '80', '%', 'Exportações');
addSobFact('exp-2020', 'As exportações do setor para os EUA eram de US$ 1,2 bilhão em 2020.', '1,2', 'US$ bi', 'Exportações');

// BALANCO
const bblock = '05 · Balanço Comercial';
const bsource = 'secex';
function addBalFact(id, stmt, val, unit, group) {
  facts.push(`    {
      id: 'eco-eletroeletronico::05-balanco::${id}',
      block: '${bblock}',
      statement: '${stmt}',
      value: '${val}',
      unit: '${unit}',
      group: '${group}',
      sourceId: '${bsource}',
      evidenceId: 'balanco-comercial'
    }`);
}
addBalFact('exp-total', 'As exportações de produtos eletroeletrônicos somaram US$ 4,12 bilhões no 1º semestre de 2026.', '4,12', 'US$ bi', 'Resultados Totais');
addBalFact('exp-var', 'As exportações de produtos eletroeletrônicos cresceram 8,2% no 1º semestre de 2026 frente ao mesmo período do ano anterior.', '8,2', '%', 'Resultados Totais');
addBalFact('imp-total', 'As importações de produtos eletroeletrônicos atingiram US$ 25,77 bilhões no 1º semestre de 2026.', '25,77', 'US$ bi', 'Resultados Totais');
addBalFact('imp-var', 'As importações de produtos eletroeletrônicos cresceram 7,1% no 1º semestre de 2026 frente ao mesmo período do ano anterior.', '7,1', '%', 'Resultados Totais');
addBalFact('deficit-total', 'O déficit comercial do setor eletroeletrônico somou US$ 21,64 bilhões no 1º semestre de 2026.', '21,64', 'US$ bi', 'Resultados Totais');
addBalFact('deficit-var', 'O déficit comercial do setor eletroeletrônico apresentou elevação de 6,9% no 1º semestre de 2026 frente ao mesmo período de 2025.', '6,9', '%', 'Resultados Totais');

// PRECOS
const cblock = '06 · Preço de Commodities';
const csource = 'abinee-decon';
function addComFact(id, stmt, val, group) {
  facts.push(`    {
      id: 'eco-eletroeletronico::06-commodities::${id}',
      block: '${cblock}',
      statement: '${stmt}',
      value: '${val}',
      unit: '%',
      group: '${group}',
      sourceId: '${csource}',
      evidenceId: 'preco-commodities'
    }`);
}
addComFact('aluminio', 'O preço do alumínio em dólares acumulou alta de 45% entre maio de 2025 e abril de 2026.', '45', 'Variação de Preços (Dólar)');
addComFact('prata', 'O preço da prata em dólares acumulou alta de 42% entre maio de 2025 e abril de 2026.', '42', 'Variação de Preços (Dólar)');
addComFact('petroleo', 'O preço do petróleo Brent em dólares acumulou alta de 41% entre maio de 2025 e abril de 2026.', '41', 'Variação de Preços (Dólar)');
addComFact('ouro', 'O preço do ouro em dólares acumulou alta de 40% entre maio de 2025 e abril de 2026.', '40', 'Variação de Preços (Dólar)');
addComFact('cobre', 'O preço do cobre em dólares acumulou alta de 28% entre maio de 2025 e abril de 2026.', '28', 'Variação de Preços (Dólar)');
addComFact('niquel', 'O preço do níquel em dólares acumulou alta de 25% entre maio de 2025 e abril de 2026.', '25', 'Variação de Preços (Dólar)');
addComFact('polipropileno', 'O preço do polipropileno em dólares acumulou alta de 17% entre maio de 2025 e abril de 2026.', '17', 'Variação de Preços (Dólar)');
addComFact('minerio', 'O preço do minério de ferro em dólares acumulou alta de 10% entre maio de 2025 e abril de 2026.', '10', 'Variação de Preços (Dólar)');
addComFact('crb-pos', 'O índice de preços de commodities (CRB) em dólares situa-se cerca de 15% acima do pico observado na saída da pandemia (2021-22).', '15', 'Índices de Commodities');
addComFact('crb-pre', 'O índice de preços de commodities (CRB) em dólares situa-se 150% superior ao período pré-pandemia (2018-19).', '150', 'Índices de Commodities');
addComFact('cambio', 'Houve apreciação de cerca de 10% do Real frente ao Dólar no período de 2025-26, amortecendo o aumento dos preços domésticos.', '10', 'Câmbio');

const out = `
export const additionalFacts = [
${facts.join(',\n')}
];
`;
fs.writeFileSync('temp_facts.ts', out);
