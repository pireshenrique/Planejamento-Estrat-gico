export const producaoData = {
  referencia: 'maio de 2026',
  referenciaCurta: 'maio/2026',
  referenciaMensal: 'Abril/26',
  referenciaAnual: 'Maio/25',
  referenciaAcumuladoAno: 'Jan-Mai/26 X 25',
  referenciaAcumulado12m: 'Acum. 12 Meses',
  fonte: 'IBGE / PIM-PF (Maio/2026)',
  totais: {
    setor: { m1: '+3,1', m2: '-4,3', m3: '-2,4', m4: '-3,5' },
    eletronica: { m1: '+0,5', m2: '-8,7', m3: '-3,3', m4: '-4,0' },
    eletrica: { m1: '+5,5', m2: '-0,1', m3: '-1,5', m4: '-3,0' }
  },
  ajusteSazonal: {
    setor: '0,5',
    eletrica: '2,6',
    eletronica: '-2,0',
    industriaGeral: '-0,2'
  },
  industriaGeralAcumuladoAno: '1,4',
  industriaExtrativaAcumuladoAno: '7,9',
  industriaTransformacaoAcumuladoAno: '0,2',
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
};
