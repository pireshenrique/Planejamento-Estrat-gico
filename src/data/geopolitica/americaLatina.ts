/**
 * REGRAS DE GOVERNANÇA E CONTRATO DE DADOS — AMÉRICA LATINA
 * 
 * Países monitorados: Colômbia, Chile, Costa Rica, Peru, Paraguai, Argentina, Bolívia, Equador.
 * 
 * 1. Tópicos cadastrados em LATAM_TOPICS seguindo estritamente LatamTopicData.
 * 2. A View (AmericaLatinaView) é estruturada com o mesmo layout e padrão de Conflitos e Tensões Internacionais.
 * 3. Campos obrigatórios essenciais para a renderização da página:
 *    - id, label, icon, flags, headline, observeSummary, observeNotes, lorenzettiSummary, lorenzettiImpacts, evidences.
 * 4. Padrões fixados para consistência visual do layout:
 *    - observeNotes: exatamente 3 itens (tupla [string, string, string]);
 *    - lorenzettiImpacts: exatamente 3 itens (tupla [string, string, string]);
 *    - flags: lista de países com code e name para renderização na Pill Bar;
 *    - evidences: notícias factuais com id, title, source, date, dateStr, url, summary.
 */

import {
  Landmark,
  Mountain,
  Zap,
  Building2,
  Factory,
  DollarSign,
  Flame,
  Ship
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type LatamTopicId =
  | 'colombia'
  | 'chile'
  | 'costa-rica'
  | 'peru'
  | 'paraguai'
  | 'argentina'
  | 'bolivia'
  | 'equador';

export interface LatamFlag {
  code: string;
  name: string;
}

export interface LatamEvidence {
  id: string;
  title: string;
  date: string;
  dateStr: string;
  source: string;
  url: string;
  summary: string;
  tag: string;
  category?: string;
  evidence?: string;
  brazilImpact?: string;
  lorenzettiImpact?: string;
}

export interface LatamTopicData {
  id: LatamTopicId;
  label: string;
  icon: LucideIcon;
  flags: LatamFlag[];
  headline: string;
  statusSubtitle: string;
  description: string;
  observeSummary: string;
  observeNotes: [string, string, string];
  lorenzettiSummary: string;
  lorenzettiImpacts: [string, string, string];
  evidences: LatamEvidence[];
  badge?: string;
  badgeColor?: string;
}

export const LATAM_TOPICS: LatamTopicData[] = [
  {
    id: 'colombia',
    label: 'Colômbia',
    icon: Landmark,
    flags: [{ code: 'co', name: 'Colômbia' }],
    headline: 'A economia colombiana ganhou tração em 2026, mas a inflação voltou a se afastar da meta e mantém a política monetária restritiva.',
    statusSubtitle: 'Crescimento econômico, inflação persistente e política monetária ainda restritiva',
    description: 'Acompanhamento da taxa de crescimento do PIB, da inflação e das diretrizes do relatório de política monetária do Banco Central da Colômbia com base nos dados do DANE, Reuters e Banrep.',
    observeSummary: 'A economia colombiana mantém crescimento forte, mas a combinação de consumo elevado e inflação persistente limita uma flexibilização mais rápida da política monetária. O desafio central é reduzir as pressões sobre os preços sem interromper a expansão da atividade.',
    observeNotes: [
      'O PIB da Colômbia cresceu 3,5% no 2º trimestre de 2026 em relação ao mesmo trimestre de 2025. No acumulado do primeiro semestre, a economia avançou 2,9% sobre o mesmo período do ano anterior, mostrando continuidade da expansão da atividade econômica.',
      'Administração pública, educação e saúde foram o principal grupo de atividades por trás do resultado do trimestre. A atividade econômica desse conjunto cresceu 10,0% em relação ao 2º trimestre de 2025 e respondeu por 1,7 ponto percentual dos 3,5% de crescimento anual do PIB.',
      'Comércio, transporte, alojamento e alimentação também contribuíram para a expansão. A atividade desses setores cresceu 2,2% em relação ao mesmo trimestre de 2025 e acrescentou 0,5 ponto percentual ao crescimento anual do PIB.'
    ],
    lorenzettiSummary: 'A expansão no comércio e serviços associada à política monetária restritiva e desinflação gradual delineia as condições de demanda comercial e crédito na Colômbia.',
    lorenzettiImpacts: [
      'A inflação permaneceu muito acima da meta de 3% e chegou a 6,03% em julho de 2026 na comparação com julho de 2025. As pressões estão associadas principalmente a custos trabalhistas mais elevados, consumo ainda forte e fatores de oferta que afetaram os preços dos alimentos.',
      'O nível de gastos das famílias e do setor público continua elevado em relação ao que a economia consegue produzir sem gerar pressões adicionais sobre os preços. Esse desequilíbrio ajuda a explicar por que a redução da inflação está ocorrendo mais lentamente do que o desejado pelo Banco Central.',
      'A taxa básica de juros foi mantida em 12% em julho, após uma alta de 0,75 ponto percentual na reunião anterior. O Banco de la República mantém uma política monetária restritiva porque espera uma convergência gradual da inflação para a meta de 3%, com aproximação da meta somente por volta de meados de 2028.'
    ],
    evidences: [
      {
        id: 'ev-co-dane-pib-2026',
        title: 'PIB da Colômbia acelera no segundo trimestre de 2026',
        date: '15/08/2026',
        dateStr: '15/08/2026',
        source: 'DANE (Departamento Administrativo Nacional de Estadística)',
        category: 'Crescimento Econômico',
        tag: 'PIB Colômbia',
        summary: 'A economia colombiana cresceu 3,5% no 2º trimestre de 2026 em relação ao mesmo período de 2025. No acumulado do primeiro semestre, o PIB avançou 2,9%. O crescimento foi puxado principalmente por administração pública, educação e saúde, além de comércio, transporte, hospedagem e alimentação.',
        evidence: 'Avanço do PIB de 3,5% no 2T2026 frente ao 2T2025 e 2,9% no primeiro semestre de 2026, impulsionado por administração pública, educação, saúde, comércio, transporte, hospedagem e alimentação.',
        brazilImpact: 'Pode manter aquecido o fluxo comercial com a Colômbia nos setores ligados a comércio e serviços.',
        lorenzettiImpact: 'Pode criar oportunidades para colocação de produtos nos canais comerciais e de distribuição atendidos pela empresa.',
        url: 'https://www.dane.gov.co/index.php/estadisticas-por-tema/cuentas-nacionales/cuentas-nacionales-trimestrales/pib-informacion-tecnica?utm_source'
      },
      {
        id: 'ev-co-reuters-inflacao-2026',
        title: 'Inflação deve convergir lentamente para a meta de 3%',
        date: '26/08/2026',
        dateStr: '26/08/2026',
        source: 'Reuters / Banco Central da Colômbia',
        category: 'Inflação',
        tag: 'Meta de Inflação',
        summary: 'O Banco Central da Colômbia projeta que a inflação se aproxime da meta de 3% apenas em meados de 2028. A inflação anual estava em 6,03% em julho de 2026, enquanto a projeção para o fim de 2027 foi elevada para 4,3%, indicando um processo de desinflação mais lento do que o previsto anteriormente.',
        evidence: 'Inflação anual de 6,03% em julho de 2026, projeção de inflação para o fim de 2027 elevada para 4,3% e convergência para a meta de 3% esperada apenas em meados de 2028.',
        brazilImpact: 'Pode demandar acompanhamento das taxas de câmbio e da competitividade de preços dos manufaturados exportados ao mercado colombiano.',
        lorenzettiImpact: 'Pode demandar acompanhamento da evolução dos preços e do poder de compra local na precificação de mercadorias.',
        url: 'https://www.reuters.com/world/americas/colombia-central-bank-sees-inflation-approaching-3-target-by-mid-2028-2026-08-26/?utm_source'
      },
      {
        id: 'ev-co-banrep-demanda-2026',
        title: 'Demanda interna forte mantém pressão sobre inflação e juros',
        date: '31/07/2026',
        dateStr: '31/07/2026',
        source: 'Banco de la República (Banrep)',
        category: 'Política Monetária',
        tag: 'Demanda & Juros',
        summary: 'O relatório de política monetária de julho de 2026 reforça um cenário de atividade econômica mais resiliente, mas com demanda interna crescendo acima da capacidade de produção doméstica. Esse desequilíbrio mantém pressão sobre os preços e dificulta uma convergência mais rápida da inflação para a meta, prolongando a necessidade de uma política monetária restritiva.',
        evidence: 'Atividade econômica resiliente com demanda interna crescendo acima da capacidade de produção doméstica, pressionando preços e prolongando a necessidade de política monetária restritiva.',
        brazilImpact: 'A demanda interna superior à capacidade produtiva doméstica pode gerar oportunidades para produtos e insumos industriais importados.',
        lorenzettiImpact: 'O prolongamento da política monetária restritiva pode influenciar o ritmo de financiamento de bens duráveis e materiais elétricos.',
        url: 'https://banrep.gov.co/en/publications-research/monetary-policy-report/july-2026?utm_source'
      }
    ]
  },
  {
    id: 'chile',
    label: 'Chile',
    icon: Mountain,
    flags: [{ code: 'cl', name: 'Chile' }],
    headline: 'O Chile combina crescimento moderado no curto prazo com reformas voltadas ao investimento e maior integração regional em mineração.',
    statusSubtitle: 'Crescimento moderado, reformas econômicas e expansão do investimento em mineração',
    description: 'Acompanhamento das projeções do FMI, da reforma econômica com redução de imposto corporativo e da reativação de projetos mineradores transfronteiriços no Chile.',
    observeSummary: 'O cenário chileno combina desaceleração econômica no curto prazo com iniciativas para ampliar investimento e produtividade. Ao mesmo tempo, preços mais altos do cobre e a retomada da integração mineradora com a Argentina podem fortalecer as perspectivas de médio prazo.',
    observeNotes: [
      'O crescimento econômico do Chile deve perder ritmo em 2026. O FMI projeta expansão de 1,8% do PIB, abaixo dos 2,5% registrados em 2025. Para 2027, a expectativa é de recuperação para 2,6%, apoiada principalmente por preços mais elevados do cobre. A leitura, portanto, não é de recessão, mas de uma desaceleração temporária seguida de melhora moderada.',
      'A inflação continua sendo um ponto de atenção mesmo com a atividade mais fraca. O FMI espera que ela permaneça temporariamente acima da meta ao longo de 2026 e no início de 2027. Ao mesmo tempo, o governo busca reduzir o déficit fiscal e reconstruir espaço no orçamento público, o que é importante para limitar o crescimento da dívida e preservar capacidade de resposta a futuros choques econômicos.',
      'O governo tenta melhorar o ambiente de investimento por meio de uma reforma econômica mais ampla. Entre as principais medidas está a redução gradual do imposto corporativo de 27% para 23% até 2029, com o objetivo de estimular investimento e crescimento. A mudança, porém, não deve ser tratada como totalmente concluída, porque parte da implementação ainda depende de etapas legislativas e jurídicas.'
    ],
    lorenzettiSummary: 'A expansão da capacidade produtiva de cobre e a reforma tributária corporativa no Chile influenciam a oferta de insumos condutores e as condições de operação no país.',
    lorenzettiImpacts: [
      'A retomada do acordo de integração mineradora entre Chile e Argentina busca facilitar projetos de cobre que dependem de infraestrutura dos dois países. O marco permite avançar em projetos transfronteiriços e ampliar o uso compartilhado de estradas, portos, energia e outros serviços necessários à atividade mineradora, reduzindo barreiras que dificultavam novos investimentos.',
      'O potencial econômico dessa integração é relevante, mas ainda é uma estimativa. O governo chileno calcula que os projetos associados ao novo marco podem destravar mais de US$ 20,7 bilhões em investimentos e acrescentar cerca de 540 mil toneladas por ano à produção de cobre. Esses valores representam capacidade potencial de expansão, e não produção ou investimento já realizados.',
      'A integração também pode ampliar o papel do Chile como plataforma logística e de serviços para a mineração regional. Projetos localizados na Argentina poderão utilizar portos, infraestrutura e serviços chilenos para escoamento e operação, o que pode fortalecer a cadeia mineradora dos dois países e aumentar a relevância do corredor Chile–Argentina na oferta regional de cobre.'
    ],
    evidences: [
      {
        id: 'ev-cl-fmi-pib-2026',
        title: 'Crescimento moderado, inflação acima da meta e necessidade de ajuste fiscal',
        date: '06/07/2026',
        dateStr: '06/07/2026',
        source: 'FMI (Fundo Monetário Internacional)',
        category: 'Atividade Econômica',
        tag: 'PIB & Política Fiscal',
        summary: 'A economia chilena segue resiliente, mas o FMI projeta desaceleração do PIB para 1,8% em 2026, após crescimento de 2,5% em 2025, com recuperação para 2,6% em 2027 apoiada por preços mais altos do cobre. A inflação deve permanecer temporariamente acima da meta em 2026 e início de 2027, enquanto o país precisa reconstruir espaço fiscal e manter a dívida sob controle.',
        evidence: 'Desaceleração do PIB chileno para 1,8% em 2026 e recuperação para 2,6% em 2027 projetadas pelo FMI, com inflação temporariamente acima da meta e necessidade de ajuste fiscal.',
        brazilImpact: 'Pode demandar acompanhamento do ritmo de importação de manufaturados industriais brasileiros pelo mercado chileno.',
        lorenzettiImpact: 'Pode demandar acompanhamento da evolução do consumo local e do ritmo de demanda por materiais de construção.',
        url: 'https://www.imf.org/en/news/articles/2026/07/06/pr26238-chile-imf-executive-board-concludes-2026-article-iv-consultation?utm_source'
      },
      {
        id: 'ev-cl-reuters-reforma-2026',
        title: 'Congresso aprova reforma econômica com corte de imposto e incentivos ao investimento',
        date: '04/08/2026',
        dateStr: '04/08/2026',
        source: 'Reuters',
        category: 'Política Tributária',
        tag: 'Reforma Econômica',
        summary: 'O Congresso chileno aprovou uma ampla reforma econômica proposta pelo governo Kast, voltada a estimular crescimento e investimento. Entre as medidas está a redução gradual do imposto corporativo de 27% para 23% até 2029, mas parte da implementação ainda pode atrasar por vetos, revisões legislativas e questionamentos no Tribunal Constitucional.',
        evidence: 'Aprovação legislativa de redução gradual da alíquota do imposto corporativo de 27% para 23% até 2029, com trâmites e análises constitucionais pendentes.',
        brazilImpact: 'A diminuição da tributação corporativa chilena pode criar oportunidades para investimentos diretos e comércio bilateral.',
        lorenzettiImpact: 'A redução gradual do imposto corporativo pode criar oportunidades para aprimoramento da competitividade das operações no mercado chileno.',
        url: 'https://www.reuters.com/world/americas/chiles-congress-passes-kast-economic-reform-bill-2026-08-04/?utm_source'
      },
      {
        id: 'ev-cl-reuters-mineracao-2026',
        title: 'Chile e Argentina retomam integração mineradora para destravar investimentos',
        date: '27/08/2026',
        dateStr: '27/08/2026',
        source: 'Reuters',
        category: 'Mineração & Investimentos',
        tag: 'Cobre Transfronteiriço',
        summary: 'Chile e Argentina reativaram o marco bilateral de integração mineradora para facilitar projetos transfronteiriços de cobre e o uso compartilhado de infraestrutura. O governo chileno estima que a iniciativa pode destravar mais de US$ 20,7 bilhões em investimentos e adicionar cerca de 540 mil toneladas por ano à produção de cobre, além de ampliar o uso de portos e serviços chilenos por projetos argentinos.',
        evidence: 'Reativação de marco bilateral Chile-Argentina com potencial estimado em destravar mais de US$ 20,7 bilhões em investimentos e adicionar cerca de 540 mil toneladas anuais à produção de cobre.',
        brazilImpact: 'Pode favorecer a oferta regional de cobre e o abastecimento de cadeias industriais na América do Sul.',
        lorenzettiImpact: 'O acréscimo de 540 mil toneladas anuais na produção de cobre pode influenciar a estabilidade e previsibilidade de custos de condutores elétricos industriais.',
        url: 'https://www.reuters.com/world/americas/argentina-chile-revive-cross-border-mining-framework-investment-2026-08-27/?utm_source'
      }
    ]
  },
  {
    id: 'costa-rica',
    label: 'Costa Rica',
    badge: 'América Central',
    badgeColor: 'emerald',
    icon: Zap,
    flags: [{ code: 'cr', name: 'Costa Rica' }],
    headline: 'A Costa Rica mantém crescimento econômico moderado, sustentado pela demanda interna, enquanto a inflação muito baixa abriu espaço para redução dos juros em meio à desaceleração recente da atividade.',
    statusSubtitle: 'Crescimento moderado, inflação abaixo da meta e flexibilização da política monetária',
    description: 'Acompanhamento das projeções econômicas do Banco Central da Costa Rica (BCCR), do ritmo da atividade manufatureira e das decisões sobre inflação e taxa básica de juros.',
    observeSummary: 'A economia costarriquenha continua em expansão, mas perdeu ritmo no 2º trimestre de 2026. Ao mesmo tempo, a inflação permanece muito abaixo da meta, permitindo ao Banco Central reduzir os juros sem, no cenário atual, elevar as pressões inflacionárias.',
    observeNotes: [
      'A economia da Costa Rica deve crescer 3,4% em 2026 e 3,5% em 2027. As duas projeções foram reduzidas em 0,1 ponto percentual em relação às estimativas divulgadas em abril, indicando um crescimento ainda positivo, porém ligeiramente mais fraco do que o esperado anteriormente.',
      'A demanda interna deve continuar sendo o principal motor da economia nos próximos anos. Isso significa que o crescimento esperado depende principalmente do consumo e dos gastos realizados dentro do próprio país, e não apenas das exportações ou do desempenho da economia internacional.',
      'A atividade econômica continuou crescendo no 2º trimestre de 2026, mas em ritmo menor. A desaceleração ocorreu principalmente porque a produção das empresas instaladas nos regimes especiais — grupo importante para a indústria exportadora do país — perdeu força no período.'
    ],
    lorenzettiSummary: 'As projeções de expansão do PIB e a redução da taxa básica de juros para 3,0% pelo BCCR definem o ambiente de crédito e demanda interna na Costa Rica.',
    lorenzettiImpacts: [
      'A inflação ficou abaixo do intervalo definido em torno da meta de 3% e terminou junho de 2026 em terreno negativo na comparação com junho de 2025. A inflação subjacente, que busca medir a tendência dos preços eliminando oscilações mais temporárias, permaneceu próxima de 0% desde fevereiro.',
      'Esse cenário permitiu ao Banco Central reduzir a taxa básica de juros em 25 pontos-base, de 3,25% para 3,0% ao ano em julho. A decisão considerou a inflação muito baixa, expectativas de inflação abaixo da meta e a desaceleração recente da atividade econômica.',
      'Mesmo após o corte de juros, o Banco Central continua monitorando riscos que podem voltar a pressionar os preços. Entre eles estão conflitos geopolíticos, aumento das matérias-primas e eventos climáticos que podem afetar alimentos e energia, enquanto o cenário central ainda aponta inflação abaixo da meta de 3% durante boa parte do horizonte de projeção.'
    ],
    evidences: [
      {
        id: 'ev-cr-bccr-crescimento-2026',
        title: 'Costa Rica deve crescer 3,4% em 2026 e 3,5% em 2027',
        date: '31/07/2026',
        dateStr: '31/07/2026',
        source: 'Banco Central de Costa Rica (BCCR)',
        category: 'Atividade Econômica',
        tag: 'PIB Costa Rica',
        summary: 'A economia da Costa Rica deve crescer 3,4% em 2026 e 3,5% em 2027, com leve revisão para baixo de 0,1 ponto percentual em ambos os anos em relação à projeção de abril. A demanda interna segue como principal motor da atividade, mas o crescimento perdeu ritmo no 2º trimestre, principalmente pela moderação da manufatura dos regimes especiais.',
        evidence: 'Projeção de crescimento de 3,4% em 2026 e 3,5% em 2027 pelo BCCR, com revisão de -0,1 p.p. em relação a abril e moderação no 2º trimestre na manufatura dos regimes especiais.',
        brazilImpact: 'A sustentação da demanda interna costarriquenha pode demandar acompanhamento das exportações brasileiras de bens manufaturados e insumos.',
        lorenzettiImpact: 'A continuidade do crescimento impulsionado pela demanda interna e pelos regimes especiais na Costa Rica pode favorecer oportunidades de distribuição comercial.',
        url: 'https://www.bccr.fi.cr/cr/es/noticias/listado-de-noticias/2026/la-economia-cpstarricense-crecera-3-4-en-el-2026-y-3-5-en-el-2027.html?utm_source'
      },
      {
        id: 'ev-cr-bccr-taxa-juros-2026',
        title: 'Inflação baixa abre espaço para corte da taxa básica a 3,0%',
        date: '18/07/2026',
        dateStr: '18/07/2026',
        source: 'Banco Central de Costa Rica (BCCR)',
        category: 'Política Monetária',
        tag: 'Taxa de Juros & Inflação',
        summary: 'O BCCR reduziu a taxa básica de juros em 25 pontos-base, para 3,0% ao ano, diante de inflação ainda abaixo da meta e desaceleração da atividade econômica. A inflação interanual terminou junho de 2026 em terreno negativo, enquanto os indicadores de inflação subjacente ficaram próximos de 0%, criando espaço para afrouxamento monetário sem pressionar a meta de 3%.',
        evidence: 'Redução da taxa básica de juros para 3,0% ao ano pelo BCCR, com inflação interanual negativa em junho de 2026 e inflação subjacente próxima de 0%.',
        brazilImpact: 'O afrouxamento da taxa de juros pelo banco central pode criar condições de crédito mais favoráveis para a aquisição de bens no mercado costarriquenho.',
        lorenzettiImpact: 'O corte da taxa de juros para 3,0% e a inflação em níveis contidos podem propiciar condições mais acessíveis para o crédito ao consumidor.',
        url: 'https://www.bccr.fi.cr/cr/es/noticias/listado-de-noticias/2026/junta-directiva-del-bccr-acordo-reducir-la-tasa-de-politica-en-25-puntos-base-para-ubicarla-en-3-anual.html?utm_source'
      }
    ]
  },
  {
    id: 'peru',
    label: 'Peru',
    badge: 'Produção & Mineração',
    badgeColor: 'blue',
    icon: Factory,
    flags: [{ code: 'pe', name: 'Peru' }],
    headline: 'O Peru combina crescimento apoiado pela demanda interna e pelo investimento privado com uma estratégia de expansão da mineração e redução de entraves para novos projetos.',
    statusSubtitle: 'Crescimento econômico, investimento privado e expansão da mineração',
    description: 'Acompanhamento das estimativas de crescimento do Banco Central de Reserva del Perú (BCRP), do ritmo do investimento privado e das iniciativas regulatórias para atração de investimentos em mineração.',
    observeSummary: 'A economia peruana entra em 2026 com perspectiva de crescimento mais favorável, sustentada pelo mercado interno e pelo investimento privado. Em paralelo, o governo busca acelerar novos projetos de mineração e ampliar a capacidade de atração de capital para um dos principais setores da economia.',
    observeNotes: [
      'A projeção de crescimento do PIB para 2026 foi elevada de 3,2% para 3,4%. A revisão reflete uma expectativa mais favorável para atividades ligadas ao mercado interno e para o gasto privado. Isso indica que o crescimento esperado para 2026 depende menos de uma aceleração pontual de um único setor e mais de uma combinação entre consumo, investimento e atividade doméstica.',
      'Para 2027, a projeção de crescimento permanece em 3,2%. O cenário indica continuidade da expansão econômica após o avanço mais forte esperado para 2026, mas em ritmo um pouco menor. A leitura, portanto, é de crescimento sustentado, sem expectativa de uma nova aceleração relevante no ano seguinte.',
      'O investimento privado deve ganhar força e exercer papel mais importante na expansão da economia em 2026. A expectativa está associada à execução de projetos, melhora das condições de investimento e maior dinamismo do gasto das empresas. Esse movimento é relevante porque amplia a capacidade produtiva e reduz a dependência do crescimento exclusivamente do consumo.'
    ],
    lorenzettiSummary: 'A elevação na projeção do PIB para 3,4% e o plano de atração de US$ 33 bilhões em mineração definem as perspectivas de investimento e atividade no Peru.',
    lorenzettiImpacts: [
      'O governo pretende atrair pelo menos US$ 33 bilhões em investimentos em mineração ao longo dos cinco anos de mandato. O valor representa uma meta de atração de capital, e não investimento já contratado ou realizado. A estratégia está baseada em reduzir atrasos burocráticos, aumentar a previsibilidade dos processos de licenciamento e acelerar decisões sobre novos projetos.',
      'Para 2026, o governo anunciou a intenção de autorizar 240 projetos de exploração e extração mineral. A proposta busca aumentar a velocidade de entrada de novos empreendimentos no setor, mas esses projetos ainda dependem de aprovação e execução. O governo afirma que a redução de burocracia ocorrerá sem flexibilização das exigências ambientais e sociais.',
      'A mineração faz parte de uma estratégia econômica mais ampla de integração do Peru com mercados internacionais. Além de acelerar projetos minerais, o governo pretende colocar em vigor o acordo de livre-comércio com Hong Kong, buscar novos acordos e ampliar as exportações regionais. O objetivo declarado é fortalecer o país como elo de comércio, investimentos e serviços entre a América do Sul e a Ásia-Pacífico.'
    ],
    evidences: [
      {
        id: 'ev-pe-bcrp-pib-2026',
        title: 'Peru eleva projeção de crescimento para 3,4% em 2026',
        date: '21/08/2026',
        dateStr: '21/08/2026',
        source: 'Diario Oficial El Peruano / BCRP',
        category: 'Atividade Econômica',
        tag: 'PIB & Investimento',
        summary: 'A projeção de crescimento do PIB peruano para 2026 foi elevada de 3,2% para 3,4%, apoiada por uma perspectiva mais favorável para a demanda interna e pelo avanço do investimento privado. Para 2027, a projeção permanece em 3,2%, enquanto o Banco Central também elevou a expectativa para o crescimento do investimento privado em 2026.',
        evidence: 'Elevação da projeção do PIB de 3,2% para 3,4% em 2026, manutenção em 3,2% para 2027 e aumento da expectativa de crescimento do investimento privado pelo Banco Central.',
        brazilImpact: 'A elevação na projeção de crescimento da demanda interna e do investimento privado no Peru pode favorecer o intercâmbio comercial e a demanda por produtos manufaturados.',
        lorenzettiImpact: 'O avanço na projeção do PIB e a expansão do investimento privado podem criar oportunidades para o fornecimento de produtos industriais e materiais de acabamento.',
        url: 'https://elperuano.pe/noticia/298355-bcr-eleva-proyeccion-de-crecimiento-del-pbi-economia-se-expandiria-34-el-2026?utm_source'
      },
      {
        id: 'ev-pe-mineracao-investimentos-2026',
        title: 'Peru busca atrair US$ 33 bilhões em investimentos em mineração',
        date: '20/08/2026',
        dateStr: '20/08/2026',
        source: 'Valor Econômico',
        category: 'Mineração & Investimentos',
        tag: 'Mineração & Infraestrutura',
        summary: 'O governo do Peru pretende atrair pelo menos US$ 33 bilhões em investimentos no setor de mineração ao longo de cinco anos, com foco em reduzir atrasos burocráticos, dar mais previsibilidade ao licenciamento e acelerar a aprovação de projetos. Para 2026, a meta anunciada inclui autorizar 240 projetos de exploração e extração mineral, mantendo as exigências ambientais e sociais.',
        evidence: 'Plano do governo peruano para atrair pelo menos US$ 33 bilhões em 5 anos para mineração com desburocratização de licenças e meta de autorização de 240 projetos em 2026 mantendo exigências socioambientais.',
        brazilImpact: 'A aceleração de projetos de exploração mineral no Peru pode estimular a demanda por equipamentos, peças e insumos industriais fornecidos pela região.',
        lorenzettiImpact: 'A autorização de 240 projetos de exploração mineral e a atração de investimentos de grande escala podem demandar acompanhamento da infraestrutura predial e de serviços associados.',
        url: 'https://valor.globo.com/mundo/noticia/2026/08/20/com-reduo-de-burocracia-peru-prev-us-33-bi-em-investimentos-para-minerao-em-cinco-anos.ghtml'
      }
    ]
  },
  {
    id: 'paraguai',
    label: 'Paraguai',
    badge: 'Crescimento & Maquila',
    badgeColor: 'emerald',
    icon: Building2,
    flags: [{ code: 'py', name: 'Paraguai' }],
    headline: 'O Paraguai combina crescimento econômico robusto, inflação próxima da meta e maior atratividade industrial, apoiado por consumo, investimento e vantagens competitivas como o Regime de Maquila.',
    statusSubtitle: 'Crescimento robusto, inflação ancorada e avanço da atratividade industrial',
    description: 'Monitoramento das projeções de PIB e juros do Banco Central do Paraguai (BCP) e FMI, e da competitividade do Regime de Maquila para operações industriais.',
    observeSummary: 'A economia paraguaia mantém um ritmo forte de expansão, sustentado principalmente pelo consumo privado e pelo investimento, enquanto a inflação próxima da meta abre espaço para uma flexibilização monetária gradual. Em paralelo, o país amplia seu apelo para empresas brasileiras interessadas em reduzir custos e operar com maior competitividade industrial.',
    observeNotes: [
      'As expectativas de mercado apontam crescimento de 4,3% do PIB em 2026 e de 4,0% em 2027, enquanto o FMI projeta expansão de 4,4% em 2026 e crescimento médio de 3,8% no médio prazo. Embora as estimativas sejam produzidas por fontes diferentes, ambas apontam para a continuidade de um ritmo de expansão relativamente elevado em 2026, seguido por uma moderação gradual nos anos seguintes. A leitura, portanto, é de crescimento ainda forte no curto prazo, mas sem expectativa de aceleração permanente.',
      'O crescimento paraguaio segue apoiado principalmente pelo consumo privado e pelo investimento, o que dá maior peso à demanda interna na sustentação da atividade econômica. Isso significa que a expansão não depende exclusivamente do desempenho das exportações ou de um único setor. O FMI também avalia que os riscos para o cenário permanecem relativamente equilibrados, indicando que, no momento, não há predominância clara de fatores negativos ou positivos capazes de alterar substancialmente a trajetória esperada.',
      'As expectativas indicam inflação de 3,3% no fim de 2026 e de 3,5% em 2027, mantendo a variação dos preços próxima da meta definida pelo Banco Central. Esse comportamento ajuda a preservar a estabilidade do cenário monetário e reduz a necessidade de novos aumentos de juros. A leitura, porém, não é de ausência de riscos inflacionários, mas de uma inflação ainda controlada dentro do horizonte atual de expectativas.'
    ],
    lorenzettiSummary: 'O crescimento do mercado interno paraguaio e os diferenciais de custos e tributação do Regime de Maquila balizam o cenário para o intercâmbio e investimentos industriais.',
    lorenzettiImpacts: [
      'A taxa de política monetária é esperada em 5,50% no fim de 2026 e em 5,25% no fim de 2027, indicando uma trajetória de flexibilização gradual dos juros. Essa redução esperada depende da continuidade de uma inflação próxima da meta e da avaliação de que pressões temporárias, como as relacionadas à energia, não se transformem em aumentos persistentes de preços. Portanto, trata-se de uma possibilidade condicionada ao comportamento futuro da inflação, e não de uma sequência de cortes já definida.',
      'Empresas brasileiras de diferentes setores vêm ampliando o interesse em instalar ou expandir operações industriais no Paraguai, atraídas por uma combinação de tributação simplificada, custos trabalhistas mais baixos e condições voltadas à produção para exportação. O movimento já inclui empresas com operações instaladas, como Lupo e Döhler, enquanto outras companhias ainda estão na fase de estudo e avaliação. Isso indica aumento real do interesse empresarial, mas não significa que todas as sondagens resultarão em novos investimentos.',
      'O Regime de Maquila é um dos principais fatores de atratividade industrial do Paraguai, porque permite tributação de 1% sobre o valor agregado localmente, importação sem impostos de máquinas e matérias-primas utilizadas na produção e transferência isenta de lucros e dividendos. Esses benefícios podem melhorar a competitividade de operações voltadas à exportação, mas a própria experiência das empresas mostra que a decisão não depende apenas dos impostos. Logística, infraestrutura, disponibilidade de mão de obra qualificada e características específicas da cadeia produtiva precisam ser avaliadas caso a caso, porque podem reduzir ou até eliminar a vantagem financeira em determinados setores.'
    ],
    evidences: [
      {
        id: 'ev-py-bcp-crescimento-2026',
        title: 'Paraguai mantém perspectiva de crescimento robusto em 2026',
        date: '15/08/2026',
        dateStr: '15/08/2026',
        source: 'Banco Central del Paraguay (BCP)',
        category: 'Atividade Econômica',
        tag: 'PIB Paraguai',
        summary: 'As expectativas de mercado apontam crescimento de 4,3% do PIB em 2026 e 4,0% em 2027, enquanto o FMI projeta avanço de 4,4% em 2026 e média de 3,8% no médio prazo. O cenário é sustentado principalmente pelo consumo privado e pelo investimento, com riscos relativamente equilibrados.',
        evidence: 'Expectativas de mercado indicando crescimento de 4,3% em 2026 e 4,0% em 2027, projeção do FMI de 4,4% em 2026 e 3,8% no médio prazo, ancoradas em consumo privado e investimento.',
        brazilImpact: 'A sustentação do consumo privado e do investimento no Paraguai pode demandar acompanhamento dos fluxos de exportação de manufaturados brasileiros.',
        lorenzettiImpact: 'O crescimento continuado da demanda interna no Paraguai pode criar oportunidades para linhas de materiais elétricos e produtos de acabamento.',
        url: 'https://www.bcp.gov.py/es/web/institucional/w/encuesta-de-expectativas-de-variables-econ%C3%B3micas-agosto-2026/-/categories/158845?utm_source'
      },
      {
        id: 'ev-py-imf-inflacao-juros-2026',
        title: 'Inflação permanece próxima da meta e cenário abre espaço para flexibilização gradual dos juros',
        date: '29/06/2026',
        dateStr: '29/06/2026',
        source: 'Fundo Monetário Internacional (FMI)',
        category: 'Política Monetária',
        tag: 'Inflação & Juros',
        summary: 'As expectativas indicam inflação de 3,3% no fim de 2026 e 3,5% em 2027, próxima à meta do Banco Central. A taxa de política monetária é esperada em 5,50% no fim de 2026 e 5,25% no fim de 2027, enquanto o FMI avalia que há espaço para flexibilização gradual caso as pressões de energia sejam temporárias e a inflação permaneça ancorada.',
        evidence: 'Inflação esperada em 3,3% em 2026 e 3,5% em 2027, taxa básica projetada em 5,50% em 2026 e 5,25% em 2027 e avaliação do FMI sobre espaço para afrouxamento monetário gradual.',
        brazilImpact: 'A inflação controlada e a perspectiva de redução das taxas de juros no Paraguai podem favorecer a estabilidade financeira nas trocas comerciais bilaterais.',
        lorenzettiImpact: 'A perspectiva de juros menores e inflação próxima da meta pode favorecer a demanda por bens de consumo duráveis e reformas residenciais.',
        url: 'https://www.imf.org/en/news/articles/2026/06/29/cs-062926-paraguay-imf-staff-concluding-statement-2026-aiv-consultation-mission?utm_source'
      },
      {
        id: 'ev-py-valor-maquila-2026',
        title: 'Paraguai ganha espaço como alternativa industrial para empresas brasileiras',
        date: '10/07/2026',
        dateStr: '10/07/2026',
        source: 'Valor Econômico',
        category: 'Indústria & Competitividade',
        tag: 'Regime de Maquila',
        summary: 'Empresas brasileiras de diferentes setores vêm avaliando instalar operações no Paraguai em busca de tributação mais baixa, custos trabalhistas menores e maior competitividade para exportação. O Regime de Maquila, com imposto único de 1% sobre o valor agregado localmente e benefícios sobre importações de insumos, é um dos principais atrativos, embora logística, infraestrutura e mão de obra precisem ser avaliadas caso a caso.',
        evidence: 'Empresas brasileiras avaliam instalação de operações industriais no Paraguai atraídas por tributação mais baixa e custos trabalhistas menores sob o Regime de Maquila (imposto único de 1% sobre valor agregado e benefícios em insumos).',
        brazilImpact: 'A busca por competitividade tributária no Paraguai pode influenciar decisões empresariais sobre instalação de capacidade produtiva e logística no Cone Sul.',
        lorenzettiImpact: 'O modelo de incentivos do Regime de Maquila e os custos operacionais comparativos podem demandar acompanhamento das cadeias de suprimento e competitividade industrial na região.',
        url: 'https://valor.globo.com/empresas/noticia/2026/07/10/cresce-o-interesse-de-empresas-brasileiras-em-ter-operacao-industrial-no-paraguai.ghtml'
      }
    ]
  },
  {
    id: 'argentina',
    label: 'Argentina',
    badge: 'Mercosul & Reformas',
    badgeColor: 'blue',
    icon: DollarSign,
    flags: [{ code: 'ar', name: 'Argentina' }],
    headline: 'A Argentina combina avanço na estabilização macroeconômica com crescimento projetado para 2026, mas ainda enfrenta inflação elevada, reservas frágeis e um desafio importante de dívida externa concentrado em 2027.',
    statusSubtitle: 'Estabilização macroeconômica, crescimento projetado e desafio de liquidez externa',
    description: 'Monitoramento da disciplina fiscal, projeções de atividade e inflação do FMI e do cronograma de obrigações em moeda estrangeira da Argentina.',
    observeSummary: 'A economia argentina avançou na redução da inflação, na disciplina fiscal e na recomposição parcial da confiança, ao mesmo tempo em que voltou a crescer. Ainda assim, a consolidação desse processo depende de continuar acumulando reservas, preservar o equilíbrio fiscal e atravessar um volume elevado de compromissos em moeda estrangeira nos próximos anos, especialmente em 2027.',
    observeNotes: [
      'A atividade econômica deve continuar em expansão em 2026, com crescimento projetado em torno de 3,5%. O avanço esperado é sustentado principalmente pelo investimento privado, pelas exportações de setores primários e pela retomada da construção. A projeção indica continuidade da recuperação econômica, embora em ritmo mais moderado do que o observado na retomada de 2025.',
      'A inflação segue em trajetória de queda, mas permanece elevada. A projeção é de encerramento de 2026 em torno de 25% ao ano, abaixo dos 31,5% registrados no fim de 2025. O processo de desinflação, portanto, continua, mas em ritmo gradual e ainda depende da manutenção de políticas monetária e fiscal restritivas.',
      'O equilíbrio fiscal permanece como um dos pilares do programa econômico. O superávit primário federal é projetado em aproximadamente 1,4% do PIB em 2026, nível semelhante ao de 2025. A continuidade desse resultado é importante para sustentar a redução da inflação, a estabilidade externa e a gestão da dívida pública.'
    ],
    lorenzettiSummary: 'A evolução da estabilização argentina, a dinâmica da inflação e o calendário de pagamentos externos definem o ambiente de previsibilidade e demanda no mercado vizinho.',
    lorenzettiImpacts: [
      'As reservas internacionais seguem como uma das principais fragilidades do cenário argentino. Embora tenham se recuperado parcialmente desde o fim de 2025, a cobertura de reservas ainda é baixa e a posição externa permanece vulnerável. O programa prevê aumento de pelo menos US$ 8 bilhões nas reservas líquidas em 2026, condicionado à continuidade das políticas econômicas e à melhora dos fluxos externos.',
      'O ano de 2027 concentra um volume elevado de compromissos em moeda estrangeira, o que mantém a necessidade de reforçar reservas e ampliar as fontes de financiamento. A capacidade de pagamento permanece sujeita a riscos excepcionais, principalmente porque o país ainda possui reservas líquidas reduzidas e precisa recuperar acesso sustentável aos mercados internacionais.',
      'A melhora da posição externa depende da capacidade da Argentina de gerar mais dólares por meio das exportações, atrair investimentos e fortalecer suas reservas internacionais. Energia, mineração e agricultura têm papel importante nesse processo, porque ampliam as receitas de exportação e concentram parte relevante dos novos projetos de investimento. Ao mesmo tempo, recuperar acesso mais estável aos mercados internacionais de capitais é importante para que o país consiga refinanciar suas dívidas e reduzir a dependência de fontes extraordinárias de financiamento.'
    ],
    evidences: [
      {
        id: 'ev-ar-reuters-divida-2027',
        title: 'Argentina avança na estabilização, mas dívida de 2027 segue como principal desafio',
        date: '27/07/2026',
        dateStr: '27/07/2026',
        source: 'Reuters',
        category: 'Dívida Soberana & Finanças',
        tag: 'Dívida Argentina',
        summary: 'A Argentina registrou melhora recente na inflação, no equilíbrio fiscal, na recomposição de reservas e no risco soberano, mas o país continua vulnerável pelo volume elevado de compromissos em moeda estrangeira e pela necessidade de recuperar acesso sustentável ao mercado internacional. O FMI avalia que a capacidade de pagamento ainda está sujeita a riscos excepcionais em razão do baixo nível de reservas líquidas e da concentração de obrigações em 2027.',
        evidence: 'A melhora recente inclui queda da inflação, disciplina fiscal e recomposição de reservas, com o FMI apontando riscos excepcionais na capacidade de pagamento decorrentes do baixo volume de reservas líquidas e do montante de dívida concentrado em 2027.',
        brazilImpact: 'O gerenciamento dos compromissos externos argentinos e a estabilidade cambial podem influenciar a previsibilidade e o fluxo de exportações industriais brasileiras para o país vizinho.',
        lorenzettiImpact: 'A concentração de pagamentos de dívida externa em 2027 pode demandar acompanhamento contínuo sobre a liquidez cambial e o ambiente de negócios na Argentina.',
        url: 'https://www.reuters.com/world/americas/imf-chief-visits-argentina-2027-debt-hurdle-looms-2026-07-27/?utm_source'
      },
      {
        id: 'ev-ar-imf-projecoes-2026',
        title: 'FMI projeta crescimento de 3,5% em 2026, com inflação ainda alta e reservas frágeis',
        date: '29/06/2026',
        dateStr: '29/06/2026',
        source: 'Fundo Monetário Internacional (FMI)',
        category: 'Atividade Econômica',
        tag: 'PIB & Inflação',
        summary: 'O FMI projeta crescimento real de cerca de 3,5% para a Argentina em 2026, impulsionado por investimento privado, exportações e retomada da construção civil. A inflação projetada aponta encerramento do ano em torno de 25% ao ano. A consolidação da recuperação depende da continuidade na acumulação de reservas, preservação do equilíbrio fiscal e ampliação do acesso a financiamento externo.',
        evidence: 'Projeção do FMI de crescimento de cerca de 3,5% em 2026 com base em investimento privado, exportações e construção, com expectativa de inflação ao redor de 25% ao ano ao fim de 2026.',
        brazilImpact: 'A retomada da atividade na construção civil e o crescimento de 3,5% podem estimular a demanda por insumos e manufaturas de parceiros do Mercosul.',
        lorenzettiImpact: 'A retomada da construção civil argentina pode criar oportunidades de demanda para produtos de instalação hidráulica e elétrica, enquanto a inflação em torno de 25% pode demandar acompanhamento dos custos operacionais.',
        url: 'https://www.elibrary.imf.org/view/journals/002/2026/105/article-A001-en.xml?utm_source'
      }
    ]
  },
  {
    id: 'bolivia',
    label: 'Bolívia',
    badge: 'Energia & Recursos Naturais',
    badgeColor: 'amber',
    icon: Flame,
    flags: [{ code: 'bo', name: 'Bolívia' }],
    headline: 'A Bolívia busca estabilizar a economia por meio de um programa de reformas apoiado pelo FMI, enquanto propõe abrir o setor elétrico a maior participação privada e ampliar o uso de energias renováveis.',
    statusSubtitle: 'Estabilização macroeconômica, recomposição de reservas e abertura do setor elétrico',
    description: 'Acompanhamento do acordo preliminar com o FMI e instituições multilaterais, e da proposta de nova legislação para o setor elétrico e fontes renováveis na Bolívia.',
    observeSummary: 'A Bolívia enfrenta desequilíbrios fiscais, reservas internacionais reduzidas, inflação elevada e menor produção de hidrocarbonetos. Para enfrentar esse cenário, o governo negocia um programa de reformas com apoio financeiro do FMI e, em paralelo, propõe modernizar o setor elétrico para ampliar a participação privada, diversificar a matriz energética e reduzir a dependência do gás natural.',
    observeNotes: [
      'A Bolívia chegou a um acordo em nível técnico com o FMI para um programa econômico de 36 meses, com aproximadamente US$ 1,9 bilhão em financiamento previsto. O objetivo é apoiar a estabilização da economia, reforçar as reservas internacionais e reduzir desequilíbrios fiscais e externos. O acordo ainda não é definitivo: precisa ser aprovado pelo Diretório Executivo do FMI e depende do cumprimento de medidas combinadas previamente, portanto os recursos ainda não devem ser tratados como já liberados.',
      'O programa econômico negociado com o FMI busca enfrentar problemas que vêm pressionando a Bolívia, como gastos públicos acima das receitas, queda da produção de gás e petróleo, redução das reservas internacionais, inflação elevada e dificuldades no mercado de câmbio. Na prática, a intenção é melhorar as contas públicas, aumentar a disponibilidade de moeda estrangeira e reduzir a vulnerabilidade da economia a novos choques.',
      'Além dos cerca de US$ 1,9 bilhão previstos diretamente no programa com o FMI, a estratégia de estabilização pode ajudar a mobilizar pelo menos US$ 5 bilhões em financiamento ao longo dos 36 meses. Esse valor mais amplo pode incluir recursos de instituições como Banco Mundial e BID, mas não representa dinheiro já garantido ou disponível de uma só vez.'
    ],
    lorenzettiSummary: 'O programa de reformas com o FMI e a proposta de reestruturação do setor elétrico configuram os principais vetores de estabilização e investimento no mercado boliviano.',
    lorenzettiImpacts: [
      'Em paralelo ao programa econômico, o governo boliviano propôs uma nova legislação para modernizar o setor de eletricidade e energias renováveis. A proposta pretende substituir regras vigentes desde 1994 e permitir maior participação de empresas privadas na geração, importação e exportação de energia. Como a mudança ainda depende de aprovação legislativa, seus efeitos ainda são potenciais.',
      'A reforma do setor elétrico também busca reduzir a dependência do gás natural e ampliar a participação de fontes renováveis na geração de eletricidade. Isso é relevante porque a produção tradicional de hidrocarbonetos vem diminuindo, o que aumenta a necessidade de diversificar as fontes de energia e reduzir a dependência de uma base energética concentrada no gás.',
      'A abertura do setor elétrico ao capital privado pretende facilitar novos investimentos em geração de energia e infraestrutura necessária para levar essa eletricidade até os centros de consumo. Para que isso aconteça, porém, não basta aprovar a nova lei: também será necessário definir regras claras, ampliar redes de transmissão e criar condições para que novos projetos consigam operar e se conectar ao sistema elétrico. Por isso, a transformação do setor ainda depende da implementação efetiva da reforma.'
    ],
    evidences: [
      {
        id: 'ev-bo-imf-acordo-2026',
        title: 'FMI e Bolívia chegam a acordo em nível técnico para programa de reformas de US$ 5 bilhões',
        date: '29/07/2026',
        dateStr: '29/07/2026',
        source: 'Fundo Monetário Internacional (FMI)',
        category: 'Reformas Econômicas & Finanças',
        tag: 'Acordo FMI',
        summary: 'O FMI e o governo boliviano chegaram a um acordo em nível técnico para um programa de reformas de 36 meses, de aproximadamente US$ 5 bilhões, com a participação de outras instituições multilaterais.',
        evidence: 'Acordo em nível técnico entre FMI e governo boliviano para programa de reformas de 36 meses com apoio de cerca de US$ 5 bilhões e participação multilateral.',
        brazilImpact: 'A estabilização macroeconômica apoiada por instituições multilaterais pode contribuir para a previsibilidade nas relações financeiras e comerciais no ambiente regional.',
        lorenzettiImpact: 'O avanço do programa multilateral de reformas pode contribuir para a estabilização econômica na Bolívia, demandando acompanhamento das condições de liquidez e pagamentos.',
        url: 'https://www.imf.org/es/news/articles/2026/07/29/pr26268-bolivia-imf-reaches-staff-level-agreement-on-an-extended-fund-facility-arrangement?utm_source'
      },
      {
        id: 'ev-bo-reuters-energia-2026',
        title: 'Bolívia propõe reforma do setor elétrico para atrair investimento privado e renováveis',
        date: '07/05/2026',
        dateStr: '07/05/2026',
        source: 'Reuters',
        category: 'Energia & Investimentos',
        tag: 'Setor Elétrico',
        summary: 'O governo da Bolívia anunciou proposta de nova legislação para eletricidade e energias renováveis com o objetivo de substituir a lei de 1994, atrair investimento internacional, reduzir a dependência do gás natural e permitir a atuação de empresas privadas na geração, exportação e importação de energia.',
        evidence: 'Proposta governamental para substituir a lei de 1994 por novo marco de eletricidade e renováveis visando capital internacional e autorização de atuação privada na geração, importação e exportação.',
        brazilImpact: 'A abertura do mercado de eletricidade boliviano à iniciativa privada e ao comércio transfronteiriço pode abrir canais de cooperação e integração energética com o Brasil.',
        lorenzettiImpact: 'A expansão da geração elétrica e do uso de fontes renováveis na Bolívia pode criar oportunidades de demanda para materiais e equipamentos de infraestrutura elétrica e hidráulica.',
        url: 'https://www.reuters.com/business/energy/bolivia-announces-energy-reforms-attract-foreign-investment-2026-05-07/?utm_source'
      }
    ]
  },
  {
    id: 'equador',
    label: 'Equador',
    badge: 'Economia Dolarizada',
    badgeColor: 'blue',
    icon: Ship,
    flags: [{ code: 'ec', name: 'Equador' }],
    headline: 'O Equador avança na estabilização econômica, com inflação baixa e reservas internacionais em níveis elevados, enquanto amplia sua abertura comercial por meio de um acordo de livre-comércio com o Canadá.',
    statusSubtitle: 'Estabilização macroeconômica, fortalecimento das reservas e maior abertura comercial',
    description: 'Monitoramento do programa com o FMI (Extended Fund Facility), das reservas internacionais e dos desdobramentos do acordo de livre-comércio assinado com o Canadá.',
    observeSummary: 'O Equador combina melhora do cenário macroeconômico, inflação baixa e fortalecimento das reservas internacionais com uma estratégia de maior integração comercial. Em paralelo ao avanço do programa econômico de 48 meses, o acordo assinado com o Canadá poderá ampliar significativamente o acesso de produtos equatorianos àquele mercado quando entrar em vigor.',
    observeNotes: [
      'O Equador concluiu a quinta revisão do programa econômico de 48 meses firmado com o FMI, o que permitiu um novo desembolso de aproximadamente US$ 394 milhões. Com essa liberação, os recursos recebidos desde o início do programa chegaram a cerca de US$ 3,7 bilhões, destinados a apoiar a continuidade das reformas e a estabilidade econômica do país.',
      'A economia equatoriana deve crescer cerca de 2,5% em 2026, enquanto a inflação permanece baixa e o mercado de trabalho apresenta melhora. O cenário combina continuidade da recuperação da atividade com estabilidade dos preços, embora sua sustentação ainda dependa da continuidade das políticas econômicas e das reformas em andamento.',
      'A posição externa do Equador também se fortaleceu, com superávits em conta corrente e reservas internacionais em níveis recordes. Em termos práticos, isso significa que o país ampliou sua disponibilidade de recursos externos para enfrentar pagamentos internacionais e eventuais choques, um fator especialmente relevante em uma economia que utiliza o dólar como moeda oficial.'
    ],
    lorenzettiSummary: 'A consolidação do programa com o FMI e a celebração do acordo de livre-comércio com o Canadá reforçam o dinamismo externo e a previsibilidade econômica do Equador.',
    lorenzettiImpacts: [
      'Equador e Canadá assinaram um acordo de livre-comércio que, quando entrar em vigor, permitirá que 99,6% dos produtos exportáveis equatorianos destinados ao mercado canadense entrem sem cobrança de tarifas de importação. Como o acordo ainda precisa cumprir os procedimentos necessários para sua entrada em vigor, esse benefício comercial ainda não deve ser tratado como plenamente implementado.',
      'Mais de 600 produtos equatorianos deverão obter acesso livre de tarifas ao mercado canadense, incluindo banana, cacau, camarão, frutas tropicais e vegetais. Flores, preparações de atum, têxteis, calçados e cosméticos também terão tratamento preferencial, ampliando o alcance do acordo para diferentes segmentos da pauta exportadora do país.',
      'A abertura comercial não será total: 227 produtos agrícolas considerados sensíveis permanecerão excluídos ou protegidos, incluindo arroz, milho, leite, carne e açúcar. Essa proteção mantém barreiras para segmentos considerados mais sensíveis à concorrência externa, enquanto a maior parte dos produtos exportáveis equatorianos terá acesso preferencial ao mercado canadense quando o acordo entrar em vigor.'
    ],
    evidences: [
      {
        id: 'ev-ec-imf-eff-2026',
        title: 'FMI conclui quinta revisão do programa EFF do Equador e libera cerca de US$ 394 milhões',
        date: '22/04/2026',
        dateStr: '22/04/2026',
        source: 'Fundo Monetário Internacional (FMI)',
        category: 'Estabilidade Macroeconômica & Finanças',
        tag: 'Programa FMI',
        summary: 'O FMI concluiu a quinta revisão do acordo de 48 meses do Equador (Extended Fund Facility), liberando cerca de US$ 394 milhões e elevando os desembolsos acumulados para aproximadamente US$ 3,7 bilhões, em um contexto de crescimento acima do esperado, inflação baixa, melhora do emprego, superávits em conta corrente e reservas internacionais recordes.',
        evidence: 'Conclusão da 5ª revisão do EFF de 48 meses com liberação imediata de cerca de US$ 394 milhões (totalizando US$ 3,7 bilhões acumulados), crescimento acima do esperado, inflação baixa, superávits em conta corrente e reservas recordes.',
        brazilImpact: 'A solidez de reservas e a estabilidade de preços no Equador podem contribuir para a previsibilidade nas transações comerciais e financeiras bilaterais na região.',
        lorenzettiImpact: 'O nível recorde de reservas internacionais e a estabilidade da economia dolarizada podem sustentar a previsibilidade nas exportações faturadas em moeda forte.',
        url: 'https://www.imf.org/en/news/articles/2026/04/22/pr26126-ecuador-the-imf-concludes-5th-review-of-eff-arrangement?utm_source'
      },
      {
        id: 'ev-ec-reuters-canada-2026',
        title: 'Equador e Canadá assinam acordo de livre-comércio com isenção tarifária para 99,6% das exportações',
        date: '24/07/2026',
        dateStr: '24/07/2026',
        source: 'Reuters',
        category: 'Comércio Exterior & Tratados',
        tag: 'Acordo Comercial',
        summary: 'Equador e Canadá assinaram acordo de livre-comércio que, quando implementado, tornará livres de tarifas 99,6% das exportações equatorianas ao Canadá. Beneficiará mais de 600 itens (banana, cacau, camarão, frutas tropicais e vegetais), com acesso preferencial a flores, atum, têxteis, calçados e cosméticos, preservando proteção para 227 produtos agrícolas sensíveis.',
        evidence: 'Assinatura de acordo de livre-comércio Equador-Canadá com isenção para 99,6% das exportações equatorianas em mais de 600 produtos, acesso preferencial para manufaturas e proteção mantida para 227 itens agrícolas sensíveis.',
        brazilImpact: 'O aumento de competitividade equatoriana no mercado norte-americano pode demandar acompanhamento sobre a dinâmica de cadeias produtivas agroexportadoras na América Latina.',
        lorenzettiImpact: 'A expansão das receitas externas gerada pela diversificação comercial equatoriana pode criar oportunidades de demanda e sustentar o poder de compra no mercado interno.',
        url: 'https://www.reuters.com/world/ecuador-says-canada-trade-deal-make-996-exports-tariff-free-2026-07-24/?utm_source'
      }
    ]
  }
];

export const LATAM_BY_ID: Record<LatamTopicId, LatamTopicData> = LATAM_TOPICS.reduce(
  (acc, topic) => {
    acc[topic.id] = topic;
    return acc;
  },
  {} as Record<LatamTopicId, LatamTopicData>
);
