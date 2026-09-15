const fs = require('fs');

const content = fs.readFileSync('src/components/cenario-mercadologico/EstruturaFormatosView.tsx', 'utf-8');

const t1 = content.includes('O Sudeste continua liderando, mas a distribuição regional da rede ficou menos concentrada entre 2006 e 2025.');
const t2 = content.includes('Em 2025, o Sudeste concentrava 45,7% das lojas de materiais de construção, ainda como principal região do setor. Desde 2006, porém, sua participação diminuiu, enquanto Nordeste, Norte e Centro-Oeste ampliaram presença na rede.');
const t3 = content.includes('das lojas estão no Sudeste em 2025');
const t4 = content.includes('estão em Norte + Nordeste + Centro-Oeste');
const t5 = content.includes('ganho conjunto dessas três regiões desde 2006');
const t6 = content.includes('O Sudeste ainda concentra quase metade da rede, mas sua participação perdeu espaço ao longo do período. Em sentido oposto, Norte, Nordeste e Centro-Oeste ganharam relevância relativa.');
const t7 = content.includes('Variação da participação de cada região no universo de lojas do setor');
const t8 = content.includes('Entre 2006 e 2025, Sudeste e Sul perderam participação relativa, enquanto Nordeste, Norte e Centro-Oeste ganharam espaço na composição da rede.');
const t9 = content.includes('Comparação entre a principal região e o conjunto que mais ganhou participação');
const t10 = content.includes('A liderança do Sudeste permanece, mas a diferença regional diminuiu: enquanto o Sudeste perdeu 4,6 p.p., Norte, Nordeste e Centro-Oeste ganharam juntos 6,8 p.p.');
const t11 = content.includes('UMA REDE FORMADA PRINCIPALMENTE POR PEQUENAS OPERAÇÕES');
const t12 = content.includes('A redistribuição regional ocorre sobre uma estrutura formada majoritariamente por estabelecimentos pequenos e equipes enxutas. Ou seja, a expansão territorial do varejo não está associada apenas a grandes redes ou grandes operações.');
const t13 = content.includes('A rede de materiais de construção continua concentrada no Sudeste, mas tornou-se regionalmente mais distribuída entre 2006 e 2025. O ganho de participação de Nordeste, Norte e Centro-Oeste ocorre em um setor cuja base é predominantemente formada por pequenas operações.');
const t14 = content.includes('Nota metodológica: os dados regionais comparam 2006 e 2025 no levantamento Anamaco/RAIS. O agregado Norte + Nordeste + Centro-Oeste foi calculado a partir dos percentuais regionais divulgados pela Anamaco. Os dados não devem ser comparados diretamente às unidades locais da PAC/IBGE 2024 do Bloco 01.');

console.log('All matched:', t1 && t2 && t3 && t4 && t5 && t6 && t7 && t8 && t9 && t10 && t11 && t12 && t13 && t14);
if (!(t1 && t2 && t3 && t4 && t5 && t6 && t7 && t8 && t9 && t10 && t11 && t12 && t13 && t14)) {
  console.log(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14);
}
