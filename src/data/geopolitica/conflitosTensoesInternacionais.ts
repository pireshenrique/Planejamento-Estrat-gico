/**
 * REGRAS DE GOVERNANÇA E CONTRATO DE DADOS — GEOPOLÍTICA (MÓDULO PILOTO)
 * 
 * 1. Novos conflitos devem ser cadastrados em CONFLICT_TOPICS seguindo estritamente ConflictTopicData.
 * 2. A View (ConflitosTensoesInternacionaisView) é genérica e NÃO deve receber código JSX específico para novos conflitos.
 * 3. Campos obrigatórios essenciais para a renderização da página:
 *    - id, label, icon, flags, headline, observeSummary, observeNotes, lorenzettiSummary, lorenzettiImpacts, evidences.
 * 4. Padrões fixados para consistência visual do layout:
 *    - observeNotes: exatamente 3 itens (tupla [string, string, string]);
 *    - lorenzettiImpacts: exatamente 3 itens (tupla [string, string, string]);
 *    - flags: lista de países com code e name para renderização na Pill Bar;
 *    - evidences: notícias com id, title, source, date, dateStr, url, summary.
 * 5. Campos complementares opcionais mantidos para governança:
 *    - description, badge, badgeColor, keyFactors (no conflito);
 *    - category, tag, evidence, brazilImpact, lorenzettiImpact (na evidência).
 */

import { Flame, Ship, Swords, ShieldAlert } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ConflictTopicId = 'ucrania-russia' | 'eua-israel-ira' | 'eua-china' | 'china-taiwan';

export interface ConflictFlag {
  code: string;
  name: string;
}

export interface ConflictEvidence {
  /** Identificador único da evidência/notícia */
  id: string;
  /** Título jornalístico factual */
  title: string;
  /** Data da publicação ou período */
  date: string;
  /** Data formatada para exibição no card junto ao ícone de calendário */
  dateStr: string;
  /** Veículo de imprensa ou organismo oficial de alta credibilidade */
  source: string;
  /** Link externo oficial verificável */
  url: string;
  /** Resumo executivo objetivo do fato registrado */
  summary: string;

  // Campos analíticos e complementares preservados para auditorias e fases posteriores:
  category?: string;
  tag?: string;
  evidence?: string;
  brazilImpact?: string;
  lorenzettiImpact?: string;
}

export interface ConflictKeyFactor {
  title: string;
  desc: string;
  status: string;
  statusColor: string;
}

export interface ConflictTopicData {
  /** Identificador único do tema geopolítico (conforme ConflictTopicId) */
  id: ConflictTopicId;
  /** Título nominal do conflito para cabeçalho e navegação */
  label: string;
  /** Ícone representativo do conflito (LucideIcon obrigatório) */
  icon: LucideIcon;
  /** Bandeiras dos países envolvidos (código ISO e nome) para a barra de navegação */
  flags: ConflictFlag[];
  /** Manchete executiva resumida exibida no banner informativo */
  headline: string;
  /** Resumo de curto prazo de observação (destaque no Bloco 01) */
  observeSummary: string;
  /** Exatamente 3 notas observacionais para manter o padrão visual do Bloco 01 */
  observeNotes: [string, string, string];
  /** Resumo executivo de impacto empresarial (destaque no Bloco 02) */
  lorenzettiSummary: string;
  /** Exatamente 3 hipóteses observacionais de impacto empresarial no Bloco 02 */
  lorenzettiImpacts: [string, string, string];
  /** Coleção de evidências e notícias factuais associadas ao conflito */
  evidences: ConflictEvidence[];

  // Campos opcionais / não renderizados diretamente na tela atual:
  /** Subtítulo contextual do card Status e principais notícias */
  statusSubtitle?: string;
  /** Descrição contextual detalhada do conflito */
  description?: string;
  /** Status operacional ou badge de alerta */
  badge?: string;
  /** Cor de referência do badge de status */
  badgeColor?: string;
  /** Fatores-chave e direcionadores críticos sob monitoramento */
  keyFactors?: ConflictKeyFactor[];
}

export const CONFLICT_TOPICS: ConflictTopicData[] = [
  {
    id: 'ucrania-russia',
    label: 'Guerra Ucrânia e Rússia',
    badge: 'Conflito Ativo',
    badgeColor: 'red',
    icon: Flame,
    flags: [
      { code: 'ua', name: 'Ucrânia' },
      { code: 'ru', name: 'Rússia' }
    ],
    headline: 'Sinalizações de negociações para setembro e alertas de inteligência sobre tensões com a Otan',
    description: 'Acompanhamento da potencial retomada de conversas mediadas pelos EUA em setembro e dos relatórios de inteligência sobre pressões da guerra e relações com a Otan.',
    observeSummary: 'A possibilidade de retomada das negociações em setembro e o risco de escalada entre Rússia e Otan são os dois principais pontos de acompanhamento no curto prazo.',
    observeNotes: [
      'A possibilidade de retomada das conversas entre Ucrânia e Rússia em setembro merece acompanhamento, especialmente pelo papel dos Estados Unidos e pela preparação de uma proposta preliminar com participação de parceiros europeus.',
      'As sinalizações diplomáticas ainda não indicam um acordo próximo, por isso será importante observar se a possibilidade de negociação evolui para conversas efetivas entre as partes.',
      'Avaliações de inteligência apontam risco de intensificação das ações russas contra países da Otan caso aumentem as dificuldades militares e econômicas, incluindo possíveis ações de sabotagem, ataques cibernéticos e uso de drones, sem indicação de ataque iminente.'
    ],
    lorenzettiSummary: 'O contraste entre possibilidade de negociação e risco de escalada mantém elevada a incerteza geopolítica no curto prazo.',
    lorenzettiImpacts: [
      'Um avanço efetivo das negociações pode reduzir parte da incerteza associada ao conflito, mas as informações disponíveis ainda não indicam acordo próximo ou resolução definida.',
      'Uma eventual escalada envolvendo Rússia e países da Otan aumentaria o nível de risco geopolítico e exigiria acompanhamento mais próximo dos desdobramentos internacionais relevantes para a empresa.',
      'Como os dois cenários permanecem abertos — avanço diplomático ou maior escalada — eventuais efeitos econômicos e operacionais devem ser tratados como riscos a monitorar, e não como consequências já confirmadas.'
    ],
    keyFactors: [
      { title: 'Negociações em Setembro', desc: 'Proposta conjunta com EUA e Europa para possível retomada de conversas diretas.', status: 'Janela Diplomática', statusColor: 'blue' },
      { title: 'Tensões com a Otan', desc: 'Alertas de inteligência da CIA e negação formal do Kremlin sobre ações contra a aliança.', status: 'Sob Monitoramento', statusColor: 'amber' },
      { title: 'Sanções & Infraestrutura', desc: 'Dificuldades econômicas decorrentes de sanções e impactos no setor energético.', status: 'Pressão Ativa', statusColor: 'red' },
      { title: 'Mediação dos EUA', desc: 'Papel da equipe dos Estados Unidos na condução e viabilização de diálogo trilateral.', status: 'Ponto Focal', statusColor: 'blue' }
    ],
    evidences: [
      {
        id: 'ev-ur-reuters-01',
        title: 'Ucrânia vê possibilidade de retomar negociações com a Rússia em setembro',
        date: '27/08/2026',
        dateStr: '27/08/2026',
        source: 'Reuters',
        category: 'Diplomacia & Negociações',
        tag: 'Frente Diplomática',
        summary: 'Kiev sinaliza que conversas com Moscou podem ser retomadas em setembro, com participação dos Estados Unidos considerada importante para o avanço do diálogo. A Ucrânia também trabalha com parceiros americanos e europeus em uma proposta preliminar a ser apresentada à Rússia, mas ainda não há indicação de acordo próximo.',
        evidence: 'Kiev sinaliza que conversas com Moscou podem ser retomadas em setembro, com participação dos Estados Unidos considerada importante para o avanço do diálogo. A Ucrânia também trabalha com parceiros americanos e europeus em uma proposta preliminar a ser apresentada à Rússia, mas ainda não há indicação de acordo próximo.',
        brazilImpact: 'A possibilidade de abertura de diálogo diplomático e eventuais acordos pode influenciar a estabilidade de preços internacionais de commodities agrícolas e minerais negociadas pelo Brasil.',
        lorenzettiImpact: 'Pode sinalizar menor volatilidade nos custos internacionais de frete e matérias-primas caso haja avanços diplomáticos concretos.',
        url: 'https://www.reuters.com/world/europe/zelenskiys-top-aide-says-ukraine-russia-talks-may-be-possible-september-2026-08-27/'
      },
      {
        id: 'ev-ur-cnn-02',
        title: 'Inteligência dos EUA alerta para risco de escalada da Rússia contra a Otan',
        date: '28/08/2026',
        dateStr: '28/08/2026',
        source: 'CNN Brasil',
        category: 'Segurança & Geopolítica',
        tag: 'Risco Geopolítico',
        summary: 'Avaliações da inteligência americana indicam que dificuldades militares e econômicas podem aumentar o risco de Moscou adotar ações contra países da Otan para elevar o custo do apoio à Ucrânia e pressionar por uma negociação mais favorável à Rússia. Entre os cenários citados estão sabotagem, ataques cibernéticos, drones e outras ações de escalada, embora não haja indicação de ataque iminente.',
        evidence: 'Avaliações da inteligência americana indicam que dificuldades militares e econômicas podem aumentar o risco de Moscou adotar ações contra países da Otan para elevar o custo do apoio à Ucrânia e pressionar por uma negociação mais favorável à Rússia. Entre os cenários citados estão sabotagem, ataques cibernéticos, drones e outras ações de escalada, embora não haja indicação de ataque iminente.',
        brazilImpact: 'O risco de escalada nas tensões entre Rússia e países da Otan pode manter elevada a aversão global a risco, com impactos sobre taxas de câmbio e cotações de insumos.',
        lorenzettiImpact: 'Pode demandar acompanhamento constante sobre potenciais riscos de desestabilização em rotas logísticas e volatilidade em preços de derivados de energia e metais.',
        url: 'https://www.cnnbrasil.com.br/internacional/dificuldades-na-guerra-podem-levar-russia-a-agir-contra-otan-dizem-fontes/'
      }
    ]
  },
  {
    id: 'eua-israel-ira',
    label: 'Guerra EUA/Israel e Irã',
    badge: 'Instabilidade Regional',
    badgeColor: 'amber',
    icon: Ship,
    flags: [
      { code: 'us', name: 'EUA' },
      { code: 'il', name: 'Israel' },
      { code: 'ir', name: 'Irã' }
    ],
    headline: 'Seis meses de conflito no Oriente Médio: efeitos sobre energia, comércio global e segurança regional',
    description: 'Acompanhamento dos impactos de seis meses de guerra sobre os preços do petróleo, custos de transporte e seguro, Estreito de Ormuz e estabilidade internacional.',
    observeSummary: 'Após seis meses de conflito, EUA/Israel e Irã permanecem sem um caminho claro para encerramento. O Irã sofreu perdas militares e econômicas relevantes, mas mantém capacidade de ataque e de pressão sobre a navegação regional, enquanto Washington sinaliza maior uso de pressão econômica no curto prazo.',
    observeNotes: [
      'A guerra chegou a seis meses sem rendição do Irã e sem uma solução clara para o conflito. Apesar das perdas sofridas por Teerã, a capacidade iraniana de continuar realizando ataques impede uma leitura de encerramento próximo e mantém elevada a incerteza regional.',
      'Os Estados Unidos sinalizam uma mudança de ênfase na condução do conflito. Diante da avaliação de que novos ataques militares não necessariamente forçariam concessões iranianas, Washington voltou a priorizar pressão econômica, enquanto novos bombardeios foram considerados improváveis no curto prazo.',
      'O Estreito de Ormuz continua severamente prejudicado e permanece um dos principais pontos de risco econômico da guerra. Antes do conflito, a passagem concentrava aproximadamente um quinto do abastecimento mundial de energia, o que explica sua importância para petróleo, transporte marítimo e comércio internacional.'
    ],
    lorenzettiSummary: 'Os efeitos já observados sobre energia, transporte e cadeias de suprimentos justificam acompanhamento próximo dos desdobramentos do conflito.',
    lorenzettiImpacts: [
      'O impacto sobre a economia mundial foi relevante, mas inferior aos cenários mais severos inicialmente temidos. O FMI reduziu sua projeção de crescimento global para 3,0%, ante 3,3% estimados em janeiro, enquanto a economia internacional mostrou maior capacidade de absorção do choque energético do que em crises anteriores.',
      'A guerra também elevou custos de seguros, transportes e operações logísticas no Oriente Médio. Ataques a embarcações e restrições em rotas marítimas passaram a afetar cadeias de suprimentos e aumentaram a incerteza para economias dependentes do tráfego regional.',
      'O Irã foi militarmente enfraquecido, mas não perdeu sua capacidade de provocar instabilidade regional. O país ainda dispõe de drones e mísseis e continua capaz de atacar embarcações e instalações militares, o que ajuda a explicar por que o conflito permanece difícil de encerrar.'
    ],
    keyFactors: [
      { title: 'Estreito de Ormuz', desc: 'Gargalo logístico estratégico sob forte impacto com reflexos no comércio marítimo.', status: 'Ponto Crítico', statusColor: 'red' },
      { title: 'Petróleo & Energia', desc: 'Pressão contínua sobre as cotações de combustíveis e energia global.', status: 'Volatilidade', statusColor: 'amber' },
      { title: 'Custos de Transporte', desc: 'Elevação de tarifas de seguro e fretes de navegação na região.', status: 'Custos Altos', statusColor: 'amber' },
      { title: 'Crescimento Global', desc: 'Revisões para baixo no ritmo de atividade econômica mundial.', status: 'Atenção', statusColor: 'blue' }
    ],
    evidences: [
      {
        id: 'ev-ira-reuters-01',
        title: 'Seis meses de guerra expõem impactos duradouros sobre energia, economia e segurança regional',
        date: '27/08/2026',
        dateStr: '27/08/2026',
        source: 'Reuters',
        category: 'Energia & Geopolítica',
        tag: 'Segurança & Energia',
        summary: 'Após seis meses de conflito, o Irã segue sem se render, o Estreito de Ormuz permanece fortemente afetado e não há caminho claro para o encerramento da guerra. O conflito elevou os preços do petróleo, reduziu as projeções de crescimento global, aumentou custos de seguro e transporte na região e ampliou a instabilidade no Oriente Médio. O Irã sofreu perdas militares e econômicas relevantes, mas mantém capacidade de ataque, enquanto os Estados Unidos também enfrentam desgaste político e pressão sobre estoques e prontidão militar.',
        evidence: 'Após seis meses de conflito, o Irã segue sem se render, o Estreito de Ormuz permanece fortemente afetado e não há caminho claro para o encerramento da guerra. O conflito elevou os preços do petróleo, reduziu as projeções de crescimento global, aumentou custos de seguro e transporte na região e ampliou a instabilidade no Oriente Médio. O Irã sofreu perdas militares e econômicas relevantes, mas mantém capacidade de ataque, enquanto os Estados Unidos também enfrentam desgaste político e pressão sobre estoques e prontidão militar.',
        brazilImpact: 'A elevação dos preços internacionais do petróleo e a redução das projeções de crescimento global podem influenciar a dinâmica inflacionária e os custos de transporte e combustíveis no mercado brasileiro.',
        lorenzettiImpact: 'Pode demandar acompanhamento nos custos indiretos de logística internacional e insumos sensíveis às cotações internacionais de energia.',
        url: 'https://www.reuters.com/world/middle-east/six-consequences-six-months-war-iran-2026-08-27/'
      },
      {
        id: 'ev-ira-valor-02',
        title: 'Seis meses de guerra entre EUA/Israel e Irã deixam efeitos duradouros sobre energia, comércio e segurança global',
        date: '28/08/2026',
        dateStr: '28/08/2026',
        source: 'Valor Econômico',
        category: 'Comércio & Macroeconomia',
        tag: 'Comércio & Logística',
        summary: 'Após seis meses de conflito, o Irã segue sem se render, o Estreito de Ormuz permanece gravemente afetado e não há perspectiva clara de encerramento da guerra. Os efeitos já alcançam a economia mundial, com pressão sobre o petróleo, revisão para baixo do crescimento global, aumento dos custos de seguros e transporte e interrupções em cadeias de suprimentos. O conflito também enfraqueceu militar e economicamente o Irã sem eliminar sua capacidade de ataque, aumentou a instabilidade no Oriente Médio e pressionou a prontidão militar dos Estados Unidos.',
        evidence: 'Após seis meses de conflito, o Irã segue sem se render, o Estreito de Ormuz permanece gravemente afetado e não há perspectiva clara de encerramento da guerra. Os efeitos já alcançam a economia mundial, com pressão sobre o petróleo, revisão para baixo do crescimento global, aumento dos custos de seguros e transporte e interrupções em cadeias de suprimentos. O conflito também enfraqueceu militar e economicamente o Irã sem eliminar sua capacidade de ataque, aumentou a instabilidade no Oriente Médio e pressionou a prontidão militar dos Estados Unidos.',
        brazilImpact: 'A persistência de interrupções em cadeias de suprimentos e aumentos nas tarifas de transporte internacional podem impactar prazos e custos do comércio exterior brasileiro.',
        lorenzettiImpact: 'Pode exigir acompanhamento de prazos de trânsito em fretes marítimos e potenciais reflexos na disponibilidade e custos de componentes industriais.',
        url: 'https://valor.globo.com/mundo/noticia/2026/08/28/guerra-entre-eua-e-ira-completa-seis-meses-veja-seis-consequencias-do-conflito.ghtml'
      }
    ]
  },
  {
    id: 'eua-china',
    label: 'Tensão EUA e China',
    badge: 'Disputa Estratégica',
    badgeColor: 'red',
    icon: Swords,
    flags: [
      { code: 'us', name: 'EUA' },
      { code: 'cn', name: 'China' }
    ],
    headline: 'EUA avaliam tarifa de 7,5% por sobrecapacidade e China amplia exportação de terras raras antes de encontro Trump–Xi',
    statusSubtitle: 'Disputa comercial, capacidade industrial e insumos estratégicos nas relações entre Washington e Pequim',
    description: 'Acompanhamento das discussões sobre potencial tarifa de 7,5% pelos EUA sob alegação de excesso de capacidade produtiva chinesa e dos fluxos de terras raras antes do encontro entre Donald Trump e Xi Jinping.',
    observeSummary: 'A relação econômica entre EUA e China continua combinando pressão comercial e dependência em insumos estratégicos. Washington avalia novas medidas tarifárias ligadas ao excesso de capacidade industrial chinesa, enquanto Pequim mantém posição dominante no fornecimento de terras raras importantes para setores americanos.',
    observeNotes: [
      'Os Estados Unidos avaliam uma tarifa adicional de 7,5% sobre produtos chineses ligada às preocupações com excesso de capacidade industrial da China. A medida ainda estava em discussão e não havia sido apresentada como tarifa oficialmente implementada.',
      'A discussão tarifária ocorre antes de uma reunião prevista entre Donald Trump e Xi Jinping. Isso mantém política industrial, excesso de capacidade produtiva e desequilíbrios comerciais entre os temas centrais da agenda econômica bilateral.',
      'Caso seja adotada, a nova tarifa representaria mais uma camada de pressão comercial sobre produtos chineses. Neste estágio, porém, trata-se de uma medida potencial e não de uma mudança já incorporada às regras de comércio entre os dois países.'
    ],
    lorenzettiSummary: 'Acompanhamento da estabilidade de custos e da disponibilidade de insumos e minerais críticos diante de possíveis tarifas e controles de exportação.',
    lorenzettiImpacts: [
      'As exportações chinesas de óxido de ítrio para os EUA chegaram a 29 toneladas em julho de 2026. Foi o segundo maior volume mensal desde que a China introduziu controles sobre a exportação de terras raras em abril de 2025, indicando recuperação parcial dos embarques para o mercado americano.',
      'O ítrio é relevante para a indústria aeroespacial americana porque é utilizado em ligas especiais de motores e em revestimentos resistentes a altas temperaturas. O aumento das exportações reduz parcialmente a pressão sobre compradores que dependem desse material para aplicações críticas de aviação.',
      'A China continua produzindo a maior parte das terras raras do mundo e mantém controles de exportação sobre esses materiais. Isso preserva a importância estratégica desses insumos nas relações comerciais e diplomáticas, mesmo quando alguns embarques para os EUA apresentam recuperação.'
    ],
    keyFactors: [
      { title: 'Tarifa de 7,5% (EUA)', desc: 'Avaliação de sobretaxa por excesso de capacidade industrial chinesa antes do encontro Trump–Xi.', status: 'Sob Avaliação', statusColor: 'amber' },
      { title: 'Terras Raras (Ítrio)', desc: 'Alta nas exportações de julho aos EUA oferecendo alívio a setores dependentes como o aeroespacial.', status: 'Alívio Pontual', statusColor: 'blue' },
      { title: 'Controle de Exportação', desc: 'Uso do domínio da produção mundial de terras raras como instrumento econômico e diplomático por Pequim.', status: 'Instrumento Estratégico', statusColor: 'red' },
      { title: 'Canal de Negociação', desc: 'Previsão de reunião e conversas comerciais em Washington entre Donald Trump e Xi Jinping.', status: 'Diálogo Previsto', statusColor: 'blue' }
    ],
    evidences: [
      {
        id: 'ev-ec-reuters-01',
        title: 'EUA avaliam nova tarifa sobre produtos chineses antes de encontro Trump–Xi',
        date: '24/08/2026',
        dateStr: '24/08/2026',
        source: 'Reuters (via Bloomberg)',
        category: 'Comércio & Tarifas',
        tag: 'Tarifas Comerciais',
        summary: 'Os Estados Unidos avaliam impor uma tarifa de 7,5% sobre produtos chineses, associada a acusações de excesso de capacidade produtiva da China, às vésperas de uma reunião prevista entre Donald Trump e Xi Jinping. O movimento reforça que as tensões comerciais continuam presentes mesmo em meio às tentativas de diálogo entre as duas potências. A Reuters ressalta, porém, que a informação foi publicada originalmente pela Bloomberg e não pôde ser verificada de forma independente.',
        evidence: 'Os Estados Unidos avaliam impor uma tarifa de 7,5% sobre produtos chineses, associada a acusações de excesso de capacidade produtiva da China, às vésperas de uma reunião prevista entre Donald Trump e Xi Jinping. A Reuters ressalta que a informação foi publicada originalmente pela Bloomberg e não pôde ser verificada de forma independente.',
        brazilImpact: 'A avaliação de sobretaxas entre as maiores economias do mundo pode manter sob atenção o comércio multilateral e os preços de manufaturados globais.',
        lorenzettiImpact: 'Pode demandar acompanhamento preventivo das condições de mercado e de custos de insumos industriais caso novas medidas tarifárias se concretizem.',
        url: 'https://www.reuters.com/world/china/us-eyes-china-overcapacity-tariffs-75-before-xi-trump-talks-bloomberg-news-2026-08-24/?utm_source'
      },
      {
        id: 'ev-ec-reuters-02',
        title: 'China amplia exportações de terras raras aos EUA antes de negociações comerciais',
        date: '20/08/2026',
        dateStr: '20/08/2026',
        source: 'Reuters',
        category: 'Insumos Críticos & Comércio',
        tag: 'Terras Raras',
        summary: 'As exportações chinesas de ítrio para os EUA aumentaram em julho, oferecendo algum alívio a setores americanos dependentes do material, especialmente a indústria aeroespacial. A China continua dominando grande parte da produção mundial de terras raras e mantém controles de exportação como instrumento de política econômica e diplomática, enquanto Xi Jinping se prepara para novas negociações comerciais em Washington.',
        evidence: 'As exportações chinesas de ítrio para os EUA aumentaram em julho, oferecendo algum alívio a setores americanos dependentes do material, especialmente a indústria aeroespacial. A China continua dominando grande parte da produção mundial de terras raras e mantém controles de exportação como instrumento de política econômica e diplomática, enquanto Xi Jinping se prepara para novas negociações comerciais em Washington.',
        brazilImpact: 'O domínio chinês sobre terras raras e a utilização de mecanismos de controle de exportação reforçam a atenção sobre insumos minerais estratégicos.',
        lorenzettiImpact: 'Pode demandar acompanhamento das diretrizes de fornecimento e comércio de minerais e componentes técnicos que utilizam matérias-primas críticas.',
        url: 'https://www.reuters.com/world/asia-pacific/china-exports-us-rise-rare-earth-critical-aerospace-sector-2026-08-20/?utm_source'
      }
    ]
  },
  {
    id: 'china-taiwan',
    label: 'Tensão China e Taiwan',
    badge: 'Sensibilidade Tecnológica',
    badgeColor: 'amber',
    icon: ShieldAlert,
    flags: [
      { code: 'cn', name: 'China' },
      { code: 'tw', name: 'Taiwan' }
    ],
    headline: 'Patrulha militar dos EUA no Estreito e proposta de alta recorde de 18% nos gastos de defesa de Taiwan',
    statusSubtitle: 'Principais desdobramentos da tensão no Estreito de Taiwan e pontos de atenção no cenário regional',
    description: 'Acompanhamento das operações militares no Estreito de Taiwan, da proposta de ampliação para mais de 3% do PIB em defesa por Taipei e da pressão política e militar contínua de Pequim.',
    observeSummary: 'Taiwan está ampliando seu esforço de defesa diante da pressão militar crescente da China, enquanto os Estados Unidos continuam realizando operações no Estreito para reafirmar sua posição sobre liberdade de navegação. A combinação mantém Taiwan como um dos pontos mais sensíveis da relação entre Washington e Pequim.',
    observeNotes: [
      'Taiwan propôs elevar em 18% seus gastos de defesa em 2027, levando o orçamento acima de T$ 1 trilhão pela primeira vez. O valor representa mais de 3% do PIB e inclui investimentos em drones, mísseis, Guarda Costeira e modernização das forças armadas.',
      'O aumento do orçamento responde a uma presença militar chinesa praticamente diária no entorno da ilha. Pequim intensificou operações aéreas, marítimas e de Guarda Costeira, enquanto Taiwan busca ampliar sua capacidade própria de defesa e desenvolver sistemas produzidos internamente.',
      'O reforço militar proposto ainda depende de aprovação política interna. O Parlamento taiwanês, controlado pela oposição, já atrasou e reduziu recursos adicionais de defesa em etapas anteriores, o que significa que o valor proposto para 2027 ainda não deve ser tratado como totalmente garantido.'
    ],
    lorenzettiSummary: 'A ampliação de gastos militares e a persistência de manobras no entorno de Taiwan justificam o acompanhamento preventivo das condições de trânsito e das cadeias de suprimentos.',
    lorenzettiImpacts: [
      'Um avião de patrulha P-8A Poseidon da Marinha dos EUA atravessou o Estreito de Taiwan em espaço aéreo internacional. Os Estados Unidos classificam esse tipo de operação como exercício do direito de navegação e circulação previsto pelo direito internacional.',
      'As forças chinesas acompanharam o avião americano durante toda a travessia. Pequim afirma possuir jurisdição sobre o estreito e considera Taiwan parte de seu território, enquanto Taiwan e os EUA defendem que a passagem possui caráter internacional.',
      'A movimentação militar ocorreu enquanto Washington e Pequim tentavam estabilizar uma relação marcada por divergências sobre Taiwan, comércio e tecnologia. Por isso, mesmo uma operação considerada rotineira pelos EUA ocorre dentro de um contexto diplomático mais amplo e sensível.'
    ],
    keyFactors: [
      { title: 'Gastos de Defesa de Taiwan', desc: 'Proposta recorde de T$ 1,1225 trilhão (+18%) para 2027, ultrapassando 3% do PIB com foco em drones e mísseis.', status: 'Recorde Histórico', statusColor: 'amber' },
      { title: 'Patrulha Naval dos EUA', desc: 'Voo de avião P-8A Poseidon no Estreito em espaço aéreo internacional em defesa da livre navegação.', status: 'Sob Monitoramento', statusColor: 'blue' },
      { title: 'Operações de Pequim', desc: 'Pressão militar contínua com operações frequentes no entorno da ilha e defesa de interesses centrais.', status: 'Pressão Ativa', statusColor: 'red' },
      { title: 'Canal Washington-Pequim', desc: 'Tentativa de estabilização das relações bilaterais antes de encontro previsto entre Xi Jinping e Donald Trump.', status: 'Canal Diplomático', statusColor: 'blue' }
    ],
    evidences: [
      {
        id: 'ev-ct-reuters-01',
        title: 'Presença militar dos EUA no Estreito de Taiwan',
        date: '22/08/2026',
        dateStr: '22/08/2026',
        source: 'Reuters',
        category: 'Defesa & Geopolítica',
        tag: 'Estreito de Taiwan',
        summary: 'Um avião de patrulha P-8A Poseidon da Marinha dos EUA atravessou o Estreito de Taiwan em espaço aéreo internacional, em uma operação que Washington apresentou como demonstração de compromisso com a liberdade de navegação no Indo-Pacífico. A China acompanhou o voo durante todo o trajeto e reiterou que Taiwan e o estreito fazem parte de seus interesses centrais, em um momento de tentativa de estabilização das relações entre Washington e Pequim antes de um encontro previsto entre Xi Jinping e Donald Trump.',
        evidence: 'Um avião de patrulha P-8A Poseidon da Marinha dos EUA atravessou o Estreito de Taiwan em espaço aéreo internacional, em uma operação que Washington apresentou como demonstração de compromisso com a liberdade de navegação no Indo-Pacífico. A China acompanhou o voo durante todo o trajeto e reiterou que Taiwan e o estreito fazem parte de seus interesses centrais, em um momento de tentativa de estabilização das relações entre Washington e Pequim antes de um encontro previsto entre Xi Jinping e Donald Trump.',
        brazilImpact: 'A movimentação de forças no Indo-Pacífico e a busca por estabilidade diplomática entre EUA e China demandam atenção para fluxos de comércio e logística internacional.',
        lorenzettiImpact: 'Pode demandar acompanhamento constante sobre a estabilidade de navegação e trânsito de cargas no Estreito de Taiwan e conexões asiáticas.',
        url: 'https://www.reuters.com/world/china/us-navy-aircraft-transited-taiwan-strait-it-says-2026-08-22/?utm_source'
      },
      {
        id: 'ev-ct-reuters-02',
        title: 'Taiwan amplia gastos militares diante da pressão chinesa',
        date: '20/08/2026',
        dateStr: '20/08/2026',
        source: 'Reuters',
        category: 'Defesa & Segurança',
        tag: 'Gastos de Defesa',
        summary: 'Taiwan propôs elevar em 18% os gastos de defesa em 2027, para um recorde de T$ 1,1225 trilhão, acima de 3% do PIB. O plano inclui recursos para drones, mísseis, Guarda Costeira e modernização militar, enquanto Pequim mantém pressão militar e política crescente sobre a ilha e realiza operações frequentes em seu entorno.',
        evidence: 'Taiwan propôs elevar em 18% os gastos de defesa em 2027, para um recorde de T$ 1,1225 trilhão, acima de 3% do PIB. O plano inclui recursos para drones, mísseis, Guarda Costeira e modernização militar, enquanto Pequim mantém pressão militar e política crescente sobre a ilha e realiza operações frequentes em seu entorno.',
        brazilImpact: 'O reforço de orçamentos de defesa e a persistência de atritos no entorno de Taiwan sustentam a atenção de economias emergentes sobre cadeias industriais globais.',
        lorenzettiImpact: 'Pode demandar acompanhamento de estoques e planejamento de suprimentos de componentes eletrônicos diante da contínua pressão no entorno da ilha.',
        url: 'https://www.reuters.com/world/asia-pacific/taiwan-proposes-boosting-2027-defence-spending-18-record-high-2026-08-20/?utm_source'
      }
    ]
  }
];

export const CONFLICTS_BY_ID: Record<ConflictTopicId, ConflictTopicData> = CONFLICT_TOPICS.reduce(
  (acc, topic) => {
    acc[topic.id] = topic;
    return acc;
  },
  {} as Record<ConflictTopicId, ConflictTopicData>
);

// Validação da qualidade dos dados (executada em desenvolvimento sem bloquear renderização)
export { validateConflictTopics } from './validateConflitosTensoesInternacionais';
export type { ConflictValidationResult } from './validateConflitosTensoesInternacionais';

import { validateConflictTopics } from './validateConflitosTensoesInternacionais';

if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
  const validation = validateConflictTopics(CONFLICT_TOPICS);
  if (!validation.valid) {
    console.error('[Governança Geopolítica] Foram detectadas inconsistências nos dados de Conflitos e Tensões Internacionais:');
    validation.errors.forEach((err) => console.error(`  ❌ ${err}`));
  }
}
