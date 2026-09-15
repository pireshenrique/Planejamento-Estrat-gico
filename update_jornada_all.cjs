const fs = require('fs');

const data = fs.readFileSync('src/data/pages/JornadaCompra.ts', 'utf-8');
let component = fs.readFileSync('src/components/cenario-mercadologico/JornadaExperienciaView.tsx', 'utf-8');

// Ensure import and helpers are there
if (!component.includes('JORNADA_COMPRA_PAGE')) {
  component = component.replace(
    "import { EvidenceCard, Evidence } from '../layout/EvidenceCard';",
    "import { EvidenceCard, Evidence } from '../layout/EvidenceCard';\nimport { JORNADA_COMPRA_PAGE } from '../../data/pages/JornadaCompra';"
  );
}
if (!component.includes('const getVal =')) {
  component = component.replace(
    "export function JornadaExperienciaView({ setActivePage }: JornadaExperienciaViewProps) {",
    "export function JornadaExperienciaView({ setActivePage }: JornadaExperienciaViewProps) {\n  const getVal = (id: string) => JORNADA_COMPRA_PAGE.factualContent.find(f => f.id === id)?.value;\n  const getStr = (id: string) => getVal(id)?.toString().replace('.', ',');"
  );
}

// Map of replacements: regex to string
const replacements = {
  // BLOCO 01
  '86%': '{getVal("jornada-compra::intencao::busca-melhorar-lar")}%',
  '82%': '{getVal("jornada-compra::intencao::obra-12-meses")}%',
  
  // Idade
  "label: '18 a 24 anos', val: 21": "label: '18 a 24 anos', val: getVal('jornada-compra::intencao::idade-18-24')!",
  "label: '25 a 34 anos', val: 29": "label: '25 a 34 anos', val: getVal('jornada-compra::intencao::idade-25-34')!",
  "label: '35 a 44 anos', val: 13": "label: '35 a 44 anos', val: getVal('jornada-compra::intencao::idade-35-44')!",
  "label: '45 a 54 anos', val: 20": "label: '45 a 54 anos', val: getVal('jornada-compra::intencao::idade-45-54')!",
  "label: '55 a 65 anos', val: 13": "label: '55 a 65 anos', val: getVal('jornada-compra::intencao::idade-55-65')!",
  "label: '66 anos ou mais', val: 4": "label: '66 anos ou mais', val: getVal('jornada-compra::intencao::idade-66-mais')!",

  // Regiao
  "label: 'Sudeste', val: 48": "label: 'Sudeste', val: getVal('jornada-compra::intencao::regiao-sudeste')!",
  "label: 'Nordeste', val: 24": "label: 'Nordeste', val: getVal('jornada-compra::intencao::regiao-nordeste')!",
  "label: 'Sul', val: 17": "label: 'Sul', val: getVal('jornada-compra::intencao::regiao-sul')!",
  "label: 'Norte', val: 6": "label: 'Norte', val: getVal('jornada-compra::intencao::regiao-norte')!",
  "label: 'Centro-Oeste', val: 5": "label: 'Centro-Oeste', val: getVal('jornada-compra::intencao::regiao-centro-oeste')!",

  // Classe/Genero
  "label: 'Classes A/B', val: 42": "label: 'Classes A/B', val: getVal('jornada-compra::intencao::classe-ab')!",
  "label: 'Classe C', val: 41": "label: 'Classe C', val: getVal('jornada-compra::intencao::classe-c')!",
  "label: 'Classes D/E', val: 17": "label: 'Classes D/E', val: getVal('jornada-compra::intencao::classe-d')!",
  "valMulher: 52": "valMulher: getVal('jornada-compra::intencao::genero-mulher')!",
  "valHomem: 48": "valHomem: getVal('jornada-compra::intencao::genero-homem')!",

  // Motivos
  "nome: 'Melhorar conforto ou acessibilidade', val: 42": "nome: 'Melhorar conforto ou acessibilidade', val: getVal('jornada-compra::intencao::motivo-conforto')!",
  "nome: 'Melhorar a estética', val: 41": "nome: 'Melhorar a estética', val: getVal('jornada-compra::intencao::motivo-estetica')!",
  "nome: 'Renovar ou modernizar o ambiente', val: 39": "nome: 'Renovar ou modernizar o ambiente', val: getVal('jornada-compra::intencao::motivo-modernizar')!",
  "nome: 'Valorização do imóvel', val: 27": "nome: 'Valorização do imóvel', val: getVal('jornada-compra::intencao::motivo-valorizacao')!",
  "nome: 'Conserto emergencial', val: 20": "nome: 'Conserto emergencial', val: getVal('jornada-compra::intencao::motivo-conserto')!",
  "nome: 'Reforma geral ou estrutural', val: 18": "nome: 'Reforma geral ou estrutural', val: getVal('jornada-compra::intencao::motivo-estrutural')!",

  // Comodos
  "nome: 'Quarto', val: 42": "nome: 'Quarto', val: getVal('jornada-compra::intencao::comodo-quarto')!",
  "nome: 'Cozinha', val: 36": "nome: 'Cozinha', val: getVal('jornada-compra::intencao::comodo-cozinha')!",
  "nome: 'Banheiro', val: 33": "nome: 'Banheiro', val: getVal('jornada-compra::intencao::comodo-banheiro')!",
  "nome: 'Sala', val: 31": "nome: 'Sala', val: getVal('jornada-compra::intencao::comodo-sala')!",
  "nome: 'Imóvel inteiro', val: 20": "nome: 'Imóvel inteiro', val: getVal('jornada-compra::intencao::comodo-imovel-inteiro')!",
  "nome: 'Quintal ou Jardim', val: 17": "nome: 'Quintal ou Jardim', val: getVal('jornada-compra::intencao::comodo-quintal')!",
  "nome: 'Lavanderia', val: 14": "nome: 'Lavanderia', val: getVal('jornada-compra::intencao::comodo-lavanderia')!",
  "nome: 'Escritório', val: 8": "nome: 'Escritório', val: getVal('jornada-compra::intencao::comodo-escritorio')!",
  "nome: 'Outros', val: 4": "nome: 'Outros', val: getVal('jornada-compra::intencao::comodo-outro')!",

  // Materiais
  "nome: 'Cimento e Argamassa', val: 80": "nome: 'Cimento e Argamassa', val: getVal('jornada-compra::intencao::material-cimento')!",
  "nome: 'Tinta', val: 77": "nome: 'Tinta', val: getVal('jornada-compra::intencao::material-tinta')!",
  "nome: 'Pisos e Revestimentos', val: 61": "nome: 'Pisos e Revestimentos', val: getVal('jornada-compra::intencao::material-pisos')!",
  "nome: 'Materiais Hidráulicos', val: 38": "nome: 'Materiais Hidráulicos', val: getVal('jornada-compra::intencao::material-hidraulica')!",
  "nome: 'Móveis Planejados', val: 33": "nome: 'Móveis Planejados', val: getVal('jornada-compra::intencao::material-moveis')!",

  // Promoções
  ">78%</span>": ">{getVal('jornada-compra::intencao::promocoes-geral')}%</span>",
  "label: 'Classe A', val: 82": "label: 'Classe A', val: getVal('jornada-compra::intencao::promocoes-classe-a')!",
  "label: 'Classe B', val: 79": "label: 'Classe B', val: getVal('jornada-compra::intencao::promocoes-classe-b')!",
  "label: 'Classe C', val: 73": "label: 'Classe C', val: getVal('jornada-compra::intencao::promocoes-classe-c')!",
  "label: 'Classe D', val: 84": "label: 'Classe D', val: getVal('jornada-compra::intencao::promocoes-classe-d')!",

  // Prazos
  "label: 'Até 3 meses', val: 37": "label: 'Até 3 meses', val: getVal('jornada-compra::intencao::janela-ate-3m')!",
  "label: '4 a 6 meses', val: 33": "label: '4 a 6 meses', val: getVal('jornada-compra::intencao::janela-4-6m')!",
  "label: '7 a 9 meses', val: 12": "label: '7 a 9 meses', val: getVal('jornada-compra::intencao::janela-7-9m')!",
  "label: '10 a 12 meses', val: 19": "label: '10 a 12 meses', val: getVal('jornada-compra::intencao::janela-10-12m')!",
  "ate 6 meses": "até {getVal('jornada-compra::intencao::janela-6-meses')} meses",
  ">70%</span>": ">{getVal('jornada-compra::intencao::janela-6-meses')}%</span>",

  // Instalação
  ">74%</span>": ">{getVal('jornada-compra::intencao::instalacao-gostariam')}%</span>",
  ">58%</span>": ">{getVal('jornada-compra::intencao::instalacao-preferem')}%</span>",

  // BLOCO 02 - Meios de Pesquisa
  "val2025: 69.7": "val2025: getVal('jornada-compra::pesquisa::loja-fisica-2025')!",
  "val2025: 34.0": "val2025: getVal('jornada-compra::pesquisa::ecommerce-2025')!",
  "val2025: 25.5": "val2025: getVal('jornada-compra::pesquisa::youtube-2025')!",
  "val2025: 24.1": "val2025: getVal('jornada-compra::pesquisa::sites-fabricantes-2025')!",
  "val2025: 24.7": "val2025: getVal('jornada-compra::pesquisa::instagram-2025')!",
  
  "label2025: '69,7%'": "label2025: `${getStr('jornada-compra::pesquisa::loja-fisica-2025')}%`",
  "label2025: '34,0%'": "label2025: `${getStr('jornada-compra::pesquisa::ecommerce-2025')}%`",
  "label2025: '25,5%'": "label2025: `${getStr('jornada-compra::pesquisa::youtube-2025')}%`",
  "label2025: '24,1%'": "label2025: `${getStr('jornada-compra::pesquisa::sites-fabricantes-2025')}%`",
  "label2025: '24,7%'": "label2025: `${getStr('jornada-compra::pesquisa::instagram-2025')}%`",

  "val2025: 15.8": "val2025: getVal('jornada-compra::pesquisa::pinterest-2025')!",
  "val2025: 15.3": "val2025: getVal('jornada-compra::pesquisa::apps-2025')!",
  "val2025: 14.6": "val2025: getVal('jornada-compra::pesquisa::tabloides-2025')!",
  "val2025: 14.5": "val2025: getVal('jornada-compra::pesquisa::tiktok-2025')!",
  "val2025: 12.6": "val2025: getVal('jornada-compra::pesquisa::tv-2025')!",
  
  "label2025: '15,8%'": "label2025: `${getStr('jornada-compra::pesquisa::pinterest-2025')}%`",
  "label2025: '15,3%'": "label2025: `${getStr('jornada-compra::pesquisa::apps-2025')}%`",
  "label2025: '14,6%'": "label2025: `${getStr('jornada-compra::pesquisa::tabloides-2025')}%`",
  "label2025: '14,5%'": "label2025: `${getStr('jornada-compra::pesquisa::tiktok-2025')}%`",
  "label2025: '12,6%'": "label2025: `${getStr('jornada-compra::pesquisa::tv-2025')}%`",

  // Media canais
  "3,8 → 2,9": "3,8 → {getStr('jornada-compra::pesquisa::media-meios-2025')}",
  "val: 4.4": "val: getVal('jornada-compra::pesquisa::media-meios-classe-a')!",
  "val: 3.2": "val: getVal('jornada-compra::pesquisa::media-meios-classe-b')!",
  "val: 2.6": "val: getVal('jornada-compra::pesquisa::media-meios-classe-c')!",

  // BLOCO 03 - Confiança e Decisão
  "nome: 'Qualidade', val: 22": "nome: 'Qualidade', val: getVal('jornada-compra::confianca::criterio-qualidade')!",
  "nome: 'Preço baixo', val: 19": "nome: 'Preço baixo', val: getVal('jornada-compra::confianca::criterio-preco')!",
  "nome: 'Frete grátis', val: 13": "nome: 'Frete grátis', val: getVal('jornada-compra::confianca::criterio-frete-gratis')!",
  "nome: 'Confiança na marca', val: 10": "nome: 'Confiança na marca', val: getVal('jornada-compra::confianca::criterio-confianca-marca')!",
  "nome: 'Descontos', val: 6": "nome: 'Descontos', val: getVal('jornada-compra::confianca::criterio-descontos')!",

  ">61%</span>": ">{getVal('jornada-compra::confianca::desempate-frete')}%</span>",
  ">54%</span>": ">{getVal('jornada-compra::confianca::desempate-experiencia')}%</span>",

  "nome: 'Frete alto / prazo longo', val: 65": "nome: 'Frete alto / prazo longo', val: getVal('jornada-compra::confianca::interrompe-frete-alto')!",
  "nome: 'Falta de confiança', val: 56": "nome: 'Falta de confiança', val: getVal('jornada-compra::confianca::interrompe-falta-confianca')!",
  "nome: 'Avaliações negativas da empresa', val: 39": "nome: 'Avaliações negativas da empresa', val: getVal('jornada-compra::confianca::interrompe-avaliacao-empresa')!",
  "nome: 'Avaliações negativas do produto', val: 39": "nome: 'Avaliações negativas do produto', val: getVal('jornada-compra::confianca::interrompe-avaliacao-produto')!",

  ">60%</span>": ">{getVal('jornada-compra::confianca::boa-experiencia-preferencia')}%</span>",

  "label: 'Criticam a marca após uma experiência ruim', val: 63": "label: 'Criticam a marca após uma experiência ruim', val: getVal('jornada-compra::confianca::criticam-marca')!",
  "label: 'Podem deixar de consumir após relato negativo de pessoa próxima', val: 49": "label: 'Podem deixar de consumir após relato negativo de pessoa próxima', val: getVal('jornada-compra::confianca::relato-proximo')!",
  "label: 'Evitam comprar ao ver reclamações nas redes sociais', val: 70": "label: 'Evitam comprar ao ver reclamações nas redes sociais', val: getVal('jornada-compra::confianca::reclamacoes-redes')!"
};

// First replace exactly
for (const [key, val] of Object.entries(replacements)) {
  component = component.replace(key, val);
}

fs.writeFileSync('src/components/cenario-mercadologico/JornadaExperienciaView.tsx', component);
