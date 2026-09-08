/**
 * REGRAS DE GOVERNANÇA E CONTRATO DE DADOS — ÁSIA
 * 
 * Tópicos monitorados: China e Índia.
 * 
 * 1. Tópicos cadastrados em ASIA_TOPICS seguindo estritamente AsiaTopicData.
 * 2. A View (AsiaView) é estruturada com o mesmo layout e padrão de África, América do Norte e América Latina.
 * 3. Campos obrigatórios essenciais para a renderização da página:
 *    - id, label, icon, flags, headline, statusSubtitle, description, observeSummary, observeNotes, lorenzettiSummary, lorenzettiImpacts, evidences.
 * 4. Padrões fixados para consistência visual do layout:
 *    - observeNotes: exatamente 3 itens (tupla [string, string, string]);
 *    - lorenzettiImpacts: exatamente 3 itens (tupla [string, string, string]);
 *    - flags: lista com code e name para renderização na Pill Bar e banners;
 *    - evidences: notícias factuais com id, title, source, date, dateStr, url, summary.
 */

import {
  Factory,
  TrendingUp,
  Building2,
  Cpu
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type AsiaTopicId =
  | 'china'
  | 'india';

export interface AsiaFlag {
  code: string;
  name: string;
}

export interface AsiaEvidence {
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

export interface AsiaTopicData {
  id: AsiaTopicId;
  label: string;
  icon: LucideIcon;
  flags: AsiaFlag[];
  headline: string;
  statusSubtitle: string;
  description: string;
  observeSummary: string;
  observeNotes: string[];
  lorenzettiSummary: string;
  lorenzettiImpacts: string[];
  evidences: AsiaEvidence[];
  badge?: string;
  badgeColor?: string;
}

export const ASIA_TOPICS: AsiaTopicData[] = [
  {
    id: 'china',
    label: 'China',
    badge: 'Segunda Maior Economia Mundial',
    badgeColor: 'rose',
    icon: Factory,
    flags: [{ code: 'cn', name: 'China' }],
    headline: 'A China desacelera com demanda interna fraca e crise imobiliária prolongada, enquanto amplia estímulos ao investimento e depende cada vez mais das exportações de manufaturas avançadas para sustentar o crescimento.',
    statusSubtitle: 'Desaceleração econômica, crise imobiliária, estímulo ao investimento e maior dependência das exportações',
    description: 'Acompanhamento do PIB chinês, retração do setor imobiliário, ferramentas de financiamento de infraestrutura e dependência do modelo focado em exportações.',
    observeSummary: 'A economia chinesa perdeu força em 2026 porque o consumo, o investimento e o setor imobiliário continuam frágeis. Para sustentar a atividade, Pequim reforça instrumentos de financiamento para infraestrutura e setores estratégicos, enquanto a forte expansão das exportações de veículos elétricos, baterias, tecnologia solar e componentes avançados aumenta a importância da demanda externa e intensifica tensões comerciais com outras grandes economias.',
    observeNotes: [
      'A economia chinesa cresceu 4,3% no 2º trimestre de 2026 em relação ao mesmo período do ano anterior, abaixo dos 5,0% registrados no 1º trimestre e no ritmo mais fraco em mais de três anos. A desaceleração mostra perda de força da atividade doméstica, com investimento e consumo enfraquecidos enquanto as exportações ajudam a compensar parte dessa fragilidade.',
      'A fraqueza da demanda interna aparece também no consumo das famílias e no investimento. Em maio, as vendas no varejo chegaram a recuar 0,6% na comparação anual e cresceram apenas 1,3% em junho, enquanto o investimento em ativos fixos caiu 6,7% nos primeiros sete meses de 2026. Isso mostra que a desaceleração não está concentrada em um único setor, mas envolve partes importantes da economia doméstica.',
      'A crise imobiliária chinesa já entra em seu sexto ano e continua afetando não apenas construtoras, mas também famílias e a demanda interna. Milhões de imóveis permanecem inacabados, vendas e novas construções continuam fracas e, em cidades menores do interior, os preços de imóveis usados caíram quase 25% em relação a 2020. Como a compra de imóveis foi durante décadas uma das principais formas de acumulação de patrimônio das famílias chinesas, a queda dos preços reduz riqueza, confiança e disposição para consumir.',
      'O problema imobiliário é estrutural e vai além do colapso de uma única incorporadora. Grandes empresas privadas como Evergrande*, Country Garden* e China Vanke* enfrentaram ou ainda enfrentam dificuldades financeiras, enquanto bancos reduziram fortemente o crédito às incorporadoras privadas e empresas estatais ganharam participação no setor. A combinação de imóveis em excesso, menor procura e elevado endividamento indica que a correção pode continuar por vários anos, sem uma solução rápida para o mercado.'
    ],
    lorenzettiSummary: 'A moderação no crescimento e as políticas de exportação podem afetar dinâmicas globais de oferta e demanda de manufaturados e insumos básicos.',
    lorenzettiImpacts: [
      'Para tentar reanimar o investimento, o governo abriu aplicações para um instrumento de financiamento de 800 bilhões de yuans, cerca de US$ 119 bilhões. O mecanismo fornece capital para projetos de infraestrutura e setores estratégicos que já estejam em planejamento ou tenham aprovação preliminar, ajudando a atrair recursos adicionais de bancos e investidores privados.',
      'Os 800 bilhões de yuans anunciados para apoiar projetos não se transformam imediatamente em investimento na economia. Os projetos precisam ser apresentados, avaliados, aprovados e depois receber os recursos, e a quantidade de iniciativas consideradas economicamente viáveis também pode limitar o ritmo de execução. Por isso, apesar do tamanho do programa, seu efeito mais relevante sobre investimentos e atividade deve aparecer gradualmente entre o fim de 2026 e o início de 2027.',
      'Enquanto o consumo e o investimento domésticos permanecem fracos, as exportações ganharam peso ainda maior na sustentação da atividade. Em julho de 2026, as vendas externas chinesas cresceram 24% em relação ao mesmo mês do ano anterior e o superávit comercial chegou a US$ 113 bilhões. O contraste entre setor externo forte e demanda doméstica enfraquecida mostra que as exportações passaram a exercer um papel ainda maior no crescimento.',
      'A expansão das exportações está cada vez mais concentrada em manufaturas de maior tecnologia, como veículos elétricos, baterias, painéis e componentes solares e outros produtos avançados. Esse movimento reflete uma mudança na estratégia econômica chinesa: parte do crédito e do apoio estatal vem sendo direcionada do setor imobiliário para indústrias consideradas estratégicas. O aumento da capacidade produtiva e das vendas externas fortalece a presença chinesa nesses mercados, mas também amplia tarifas e outras barreiras comerciais nos Estados Unidos e na Europa, levando empresas chinesas a instalar parte da produção diretamente no exterior.'
    ],
    evidences: [
      {
        id: 'ev-cn-pib-q2-2026',
        title: 'Crescimento da China desacelera para 4,3% no 2º trimestre',
        date: '24/08/2026',
        dateStr: '24/08/2026',
        source: 'Reuters',
        category: 'Macroeconomia',
        tag: 'PIB & Desaceleração',
        summary: 'A economia chinesa cresceu 4,3% no segundo trimestre de 2026, ritmo mais fraco em três anos. A perda de tração reflete a demanda doméstica retraída, queda de investimentos e a persistência da crise imobiliária, com as exportações atuando como principal suporte.',
        evidence: 'Crescimento recuou para 4,3% (ante 5,0% no 1º trimestre) afetado por consumo fraco, investimento em queda e dificuldades imobiliárias.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências atuais.',
        lorenzettiImpact: 'Não foram identificadas oportunidades ou riscos explicitamente suportados pelas evidências atuais.',
        url: 'https://www.reuters.com/world/asia-pacific/chinas-119-billion-policy-financing-tool-begins-project-applications-faces-roll-2026-08-24/'
      },
      {
        id: 'ev-cn-ferramenta-infra-2026',
        title: 'Governo lança ferramenta de 800 bilhões de yuans para sustentar investimentos',
        date: '24/08/2026',
        dateStr: '24/08/2026',
        source: 'Reuters',
        category: 'Política Fiscal',
        tag: 'Investimento & Infraestrutura',
        summary: 'A China abriu aplicações para um instrumento de US$ 119 bilhões destinado a destravar obras de infraestrutura. A medida visa compensar o recuo de 6,7% nos investimentos em ativos fixos, embora atrasos possam adiar seus efeitos práticos para o final de 2026.',
        evidence: 'Instrumento de 800 bilhões de yuans busca atrair capital bancário e privado. Impacto forte projetado apenas para fim de 2026 ou início de 2027.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências atuais.',
        lorenzettiImpact: 'Não foram identificadas oportunidades ou riscos explicitamente suportados pelas evidências atuais.',
        url: 'https://www.reuters.com/world/asia-pacific/chinas-119-billion-policy-financing-tool-begins-project-applications-faces-roll-2026-08-24/'
      },
      {
        id: 'ev-cn-crise-imobiliaria-2026',
        title: 'Crise imobiliária segue como um dos principais freios da economia',
        date: '23/08/2026',
        dateStr: '23/08/2026',
        source: 'Reuters',
        category: 'Setor Imobiliário',
        tag: 'Crise & Construção',
        summary: 'No sexto ano da crise, o setor imobiliário chinês continua enfrentando vendas fracas e retração na construção. O cenário é marcado por milhões de imóveis inacabados, endividamento sistêmico de incorporadoras e queda de quase 25% nos preços de imóveis usados desde 2020.',
        evidence: 'Preços em cidades menores caíram 25% desde 2020. Setor sofre com baixa demanda e alto endividamento das incorporadoras (Evergrande como símbolo).',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências atuais.',
        lorenzettiImpact: 'Não foram identificadas oportunidades ou riscos explicitamente suportados pelas evidências atuais.',
        url: 'https://www.reuters.com/world/china/chinas-property-crisis-grinds-after-evergrande-sentencing-2026-08-23/'
      },
      {
        id: 'ev-cn-estrategia-exportadora-2026',
        title: 'China reforça estratégia exportadora em meio à fraqueza da demanda interna',
        date: '09/08/2026',
        dateStr: '09/08/2026',
        source: 'Reuters',
        category: 'Comércio Exterior',
        tag: 'Exportações & Tensões',
        summary: 'Para compensar a economia doméstica, a China ampliou sua dependência das exportações, que cresceram 24% em julho de 2026. O avanço, concentrado em setores de alta tecnologia e transição verde, tem provocado aumento das tensões comerciais com Estados Unidos e União Europeia.',
        evidence: 'Exportações avançaram 24% em julho, contrastando com consumo interno fraco. Foco em energia solar, baterias e veículos elétricos.',
        brazilImpact: 'Não foram identificados impactos explicitamente suportados pelas evidências atuais.',
        lorenzettiImpact: 'Não foram identificadas oportunidades ou riscos explicitamente suportados pelas evidências atuais.',
        url: 'https://www.reuters.com/commentary/reuters-open-interest/china-shock-20-reshuffles-winners-losers-manishi-raychaudhuri-2026-08-09/'
      }
    ]
  },
  {
    id: 'india',
    label: 'Índia',
    badge: 'Economia com Maior Ritmo de Expansão',
    badgeColor: 'amber',
    icon: TrendingUp,
    flags: [{ code: 'in', name: 'Índia' }],
    headline: 'A Índia mantém crescimento econômico acima de 6%, sustentado por demanda interna, investimento e inovação, enquanto acelera a produção doméstica, amplia sua relação comercial com o Brasil e diversifica mercados e cadeias produtivas.',
    statusSubtitle: 'Crescimento robusto, força da demanda interna, industrialização, comércio com o Brasil e diversificação produtiva',
    description: 'Acompanhamento do PIB indiano, demanda interna, comércio exterior com o Brasil, política de manufatura doméstica e diversificação produtiva.',
    observeSummary: 'A Índia combina crescimento elevado e um grande mercado consumidor com uma estratégia para ampliar a produção doméstica e reduzir dependências externas. O país continua exposto ao petróleo importado, a um déficit comercial elevado e a fragilidades fiscais, mas mantém forte investimento em infraestrutura e maior integração às cadeias globais. Ao mesmo tempo, o comércio com o Brasil alcança níveis recordes e empresas indianas diversificam mercados e locais de produção.',
    observeNotes: [
      'A economia indiana deve crescer 6,4% em 2026, após uma revisão de apenas 0,1 ponto percentual para baixo. Indicadores recentes mostraram atividade mais forte do que o esperado, mas preços mais elevados de energia e petróleo compensaram parte dessa melhora porque a Índia depende fortemente de combustível importado. Para 2027, a projeção foi revisada para cima em 0,2 ponto percentual, com expectativa de fortalecimento à medida que o choque energético diminua; no médio prazo, o crescimento é estimado em torno de 6,5%.',
      'A demanda interna responde por cerca de 62% do PIB indiano e é sustentada por uma população superior a 1,4 bilhão de pessoas, uma classe média em expansão e maior capacidade de consumo. Ao mesmo tempo, investimento e inovação continuam dando suporte ao crescimento, enquanto melhorias no ambiente de negócios e a diversificação internacional das cadeias produtivas ajudam a atrair empresas e investimentos para o país.',
      'A Índia identificou produtos que representam aproximadamente US$ 51 bilhões em importações anuais para tentar ampliar sua fabricação dentro do próprio país, em setores que vão de têxteis a energia renovável. A estratégia busca substituir parte das compras externas por produção local, reduzindo a dependência de fornecedores estrangeiros — inclusive da China — e diminuindo a exposição do país a conflitos geopolíticos, restrições comerciais e interrupções internacionais no fornecimento de componentes e matérias-primas.',
      'A tentativa de produzir mais internamente enfrenta um desafio estrutural, já que a manufatura representa apenas cerca de 13% do PIB indiano e o país compra do exterior mais bens do que exporta, gerando um déficit comercial superior a US$ 300 bilhões por ano. Para ampliar a produção local, o governo vem oferecendo incentivos a setores industriais considerados estratégicos, incluindo US$ 13,3 bilhões para semicondutores e mais de US$ 6,5 bilhões para celulares. Mesmo com esses programas, iniciativas anteriores tiveram resultados desiguais, mostrando que reduzir a dependência de importações e ampliar a capacidade industrial é um processo de longo prazo.'
    ],
    lorenzettiSummary: 'A expansão da economia indiana, o recorde nas exportações brasileiras e as políticas de diversificação fabril e redução de dependência externa influenciam mercados de commodities e cadeias industriais.',
    lorenzettiImpacts: [
      'As exportações brasileiras para a Índia ultrapassaram US$ 5 bilhões até julho de 2026, crescimento superior a 80% em relação ao mesmo período de 2025 e o maior valor das últimas três décadas. Com esse avanço, a Índia passou da 11ª para a 5ª posição entre os principais destinos das vendas brasileiras no período. Algodão, minério de ferro, cobre e derivados de petróleo estão entre os produtos que impulsionaram essa expansão.',
      'O algodão brasileiro mostra como uma mudança tarifária pode alterar rapidamente o comércio entre os dois países. A projeção é de mais de 300 mil toneladas exportadas para a Índia nesta safra, contra apenas 8 mil toneladas na temporada anterior. O avanço foi favorecido pela retirada temporária de uma tarifa indiana de importação de 11%, reduzindo o custo de entrada do produto brasileiro e ampliando sua competitividade no mercado indiano.',
      'A aproximação comercial entre Brasil e Índia também foi acelerada por mudanças no cenário internacional. O conflito entre Estados Unidos e Irã alterou rotas e fluxos de petróleo no Oriente Médio e ajudou a impulsionar as vendas brasileiras de derivados de petróleo para o mercado indiano, enquanto mudanças na política tarifária dos Estados Unidos estimularam países a diversificar parceiros comerciais. Esse contexto ajuda a explicar por que a relação Brasil–Índia avançou rapidamente em 2026 e passou a envolver, além de produtos agrícolas, minério de ferro, cobre e derivados de petróleo.',
      'A Índia mantém classificação soberana BBB/A-2*, com perspectiva estável, apoiada pela continuidade das políticas econômicas e pelo elevado investimento em infraestrutura. A manutenção do grau de investimento indica que o país é considerado capaz de cumprir suas obrigações financeiras, mas a avaliação ainda é limitada por dívida pública elevada, desempenho fiscal fraco, baixa renda por habitante e forte dependência de petróleo importado.'
    ],
    evidences: [
      {
        id: 'ev-in-imf-weo-2026',
        title: 'Crescimento da Índia segue forte, mas choque de energia reduz projeção para 2026',
        date: '08/07/2026',
        dateStr: '08/07/2026',
        source: 'Fundo Monetário Internacional (FMI / WEO)',
        category: 'Macroeconomia',
        tag: 'PIB & Energia',
        summary: 'A economia indiana deve crescer 6,4% em 2026, após uma revisão de apenas 0,1 ponto percentual para baixo. Dados recentes mostraram atividade mais resiliente do que o esperado, mas o impacto de preços mais altos de energia e petróleo compensou parte dessa melhora. Para 2027, o crescimento foi revisado para cima, com expectativa de fortalecimento à medida que o choque energético diminua. No médio prazo, o crescimento é estimado em torno de 6,5%.',
        evidence: 'Projeção de crescimento de 6,4% em 2026 e 6,5% no médio prazo segundo o WEO/FMI, com preços de energia e petróleo compensando parte da resiliência recente.',
        brazilImpact: 'A sustentação do crescimento indiano acima de 6% mantém a demanda internacional por commodities energéticas e agrícolas exportadas pelo Brasil.',
        lorenzettiImpact: 'Pode demandar acompanhamento das oscilações nos preços de energia e insumos derivados de petróleo no mercado internacional.',
        url: 'https://www.imf.org/en/news/articles/2026/07/08/tr070826-weo-press-briefing-transcript-july-8-2026'
      },
      {
        id: 'ev-in-cnn-crescimento-consumo-2026',
        title: 'Índia se consolida como uma das economias de maior crescimento, apoiada por consumo, investimento e inovação',
        date: '15/08/2026',
        dateStr: '15/08/2026',
        source: 'CNN Brasil',
        category: 'Atividade Econômica',
        tag: 'Consumo & Investimento',
        summary: 'A Índia aparece entre as economias com maior potencial de expansão em 2026, sustentada por uma combinação de investimento, consumo interno e inovação. A demanda doméstica representa cerca de 62% do PIB, apoiada por uma população superior a 1,4 bilhão de pessoas e por uma classe média em expansão. O país também vem atraindo cadeias produtivas internacionais, favorecido por melhorias no ambiente de negócios e pelo movimento global de diversificação da produção para além da China.',
        evidence: 'Demanda doméstica representando cerca de 62% do PIB, população superior a 1,4 bilhão de pessoas e atração de cadeias produtivas na diversificação além da China.',
        brazilImpact: 'Expansão da classe média e do consumo doméstico indiano amplia oportunidades para exportações brasileiras de produtos básicos e intermediários.',
        lorenzettiImpact: 'Pode criar oportunidades para acompanhamento de novos canais comerciais e de demanda por bens no mercado consumidor indiano.',
        url: 'https://www.cnnbrasil.com.br/blogs/ciro-dias-reis/economia/money/macroeconomia/o-mundo-cresce-india-e-a-bola-da-vez-e-o-vietna-corre-por-fora/'
      },
      {
        id: 'ev-in-g1-exportacoes-brasil-2026',
        title: 'Índia ganha relevância como destino das exportações brasileiras',
        date: '10/08/2026',
        dateStr: '10/08/2026',
        source: 'G1 / Jornal Nacional',
        category: 'Comércio Exterior',
        tag: 'Exportações Brasileiras',
        summary: 'As exportações brasileiras para a Índia atingiram o maior valor das últimas três décadas até julho de 2026, superando US$ 5 bilhões e crescendo mais de 80% em relação ao mesmo período de 2025. Com isso, a Índia passou da 11ª para a 5ª posição entre os principais destinos das vendas brasileiras. O avanço foi impulsionado por produtos como algodão, minério de ferro, cobre e derivados de petróleo. No algodão, a retirada temporária de uma tarifa indiana de 11% ajudou a elevar a projeção de exportações brasileiras para mais de 300 mil toneladas, contra apenas 8 mil na temporada anterior.',
        evidence: 'Exportações brasileiras superando US$ 5 bilhões (+80%) até julho de 2026, com a Índia alcançando o 5º lugar no ranking de destinos de exportação do Brasil.',
        brazilImpact: 'Elevação da Índia para a 5ª posição entre os principais parceiros de exportação do Brasil, com saltos significativos em matérias-primas e insumos industriais.',
        lorenzettiImpact: 'Pode demandar acompanhamento das dinâmicas comerciais e de custos de suprimento de insumos industriais como cobre e derivados de petróleo.',
        url: 'https://www.g1.globo.com/jornal-nacional/noticia/2026/08/10/india-se-destaca-como-destino-para-os-produtos-brasileiros-exportacoes-para-o-pais-batem-recorde.ghtml'
      },
      {
        id: 'ev-in-reuters-producao-domestica-2026',
        title: 'Índia reforça produção doméstica para reduzir dependência de importações',
        date: '21/07/2026',
        dateStr: '21/07/2026',
        source: 'Reuters',
        category: 'Política Industrial',
        tag: 'Substituição de Importações',
        summary: 'O governo indiano identificou produtos equivalentes a aproximadamente US$ 51 bilhões em importações anuais que podem ter sua fabricação ampliada dentro do país, envolvendo setores que vão de têxteis a energia renovável. A estratégia busca reduzir dependência de fornecedores externos, incluindo a China, aumentar a participação da manufatura — atualmente em torno de 13% do PIB — e criar mais empregos. O desafio é relevante porque o déficit comercial de bens supera regularmente US$ 300 bilhões por ano, e campanhas anteriores de industrialização tiveram resultados desiguais.',
        evidence: 'Mapeamento de US$ 51 bilhões em importações anuais para fabricação interna, manufatura correspondendo a 13% do PIB e déficit comercial de bens acima de US$ 300 bilhões ao ano.',
        brazilImpact: 'Políticas indianas de manufatura local e substituição de compras externas podem alterar fluxos de comércio e demanda de insumos industriais.',
        lorenzettiImpact: 'Pode representar risco de maior proteção tarifária na Índia ou criar oportunidades de fornecimento de componentes técnicos especializados.',
        url: 'https://www.reuters.com/world/india/india-file-new-delhi-renews-self-reliance-drive-2026-07-21/'
      },
      {
        id: 'ev-in-sp-rating-soberano-2026',
        title: 'S&P mantém grau de investimento da Índia, apoiada por crescimento e infraestrutura',
        date: '27/08/2026',
        dateStr: '27/08/2026',
        source: 'S&P Global Ratings / Reuters',
        category: 'Finanças Públicas',
        tag: 'Risco Soberano',
        summary: 'A Índia manteve classificação soberana BBB/A-2, com perspectiva estável, apoiada pela continuidade das políticas econômicas e pelo elevado investimento em infraestrutura. O crescimento permanece forte em comparação com outras economias emergentes, com estimativa de 6,6% no ano. Ao mesmo tempo, a avaliação continua limitada por desempenho fiscal ainda fraco, dívida pública elevada, baixa renda per capita e vulnerabilidade aos preços internacionais de energia devido à forte dependência de petróleo importado.',
        evidence: 'Manutenção do rating soberano em BBB/A-2 com perspectiva estável pela S&P, amparada por crescimento de 6,6% no ano e investimentos em infraestrutura.',
        brazilImpact: 'Sustentação do grau de investimento da Índia favorece a estabilidade macroeconômica e a previsibilidade financeira nas relações comerciais entre emergentes.',
        lorenzettiImpact: 'Pode demandar acompanhamento das condições macroeconômicas indianas e da pressão de demanda sobre energia e fretes internacionais.',
        url: 'https://www.reuters.com/world/india/sp-maintains-india-rating-policy-stability-infrastructure-push-2026-08-27/'
      },
      {
        id: 'ev-in-reuters-pearl-global-europa-2026',
        title: 'Fabricantes indianos buscam produção mais próxima da Europa para diversificar mercados',
        date: '25/08/2026',
        dateStr: '25/08/2026',
        source: 'Reuters',
        category: 'Cadeias Produtivas',
        tag: 'Diversificação de Mercados',
        summary: 'A Pearl Global, fornecedora de marcas como Zara, Levi’s e Gap, avalia ampliar sua produção mais próxima da Europa em resposta ao crescimento da demanda europeia, às mudanças na política comercial dos Estados Unidos e às interrupções nas rotas marítimas ligadas às tensões no Oriente Médio. O movimento faz parte de uma estratégia mais ampla de fabricantes indianos de vestuário para reduzir a dependência do mercado americano. A participação dos EUA na receita da Pearl caiu de mais de 85% em 2021 para cerca de 50%, enquanto Europa e outros mercados ganharam espaço.',
        evidence: 'Queda da fatia dos EUA na receita da Pearl Global de mais de 85% para cerca de 50% e avaliação de expansão de unidades voltadas à Europa diante de tensões logísticas no Oriente Médio.',
        brazilImpact: 'Reconfiguração geográfica de fornecedores internacionais influencia rotas de navegação marítima e custos logísticos globais.',
        lorenzettiImpact: 'Pode demandar acompanhamento da reorganização de rotas logísticas marítimas internacionais e de seus reflexos sobre prazos e fretes de importação/exportação.',
        url: 'https://www.reuters.com/world/india/zara-clothing-supplier-pearl-global-evaluates-africa-expansion-europe-demand-2026-08-25/'
      }
    ]
  }
];

export const ASIA_BY_ID: Record<AsiaTopicId, AsiaTopicData> = {
  china: ASIA_TOPICS[0],
  india: ASIA_TOPICS[1]
};
