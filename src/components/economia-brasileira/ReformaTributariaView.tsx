import React, { useState } from 'react';
import { ListChecks, Link2, Wallet, ArrowLeftRight, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Activity, 
  Search,
  Scale,
  ArrowRight,
  HelpCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  Check,
  AlertTriangle,
  Store,
  Settings,
  Handshake,
  UserCircle,
  FileCheck,
  Info,
  Star,
  Building2,
  ShieldCheck,
  Layers,
  Percent,
  CreditCard,
  Factory,
  Receipt,
  Award,
  Network,
  FileText,
  Monitor,
  Users,
  FlaskConical,
  Lightbulb,
  Plus,
  ShoppingCart,
  GitFork,
  Filter,
  CheckSquare,
  MapPin,
  Tag,
  Cpu,
  FileCheck2,
  Truck,
  Landmark,
  Compass,
  Sliders,
  Calendar
} from 'lucide-react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../layout/HeaderKpiCard';
import { EvidenceCard, Evidence } from '../layout/EvidenceCard';
import { REFORMA_TRIBUTARIA_PAGE } from '../../data/pages/ReformaTributaria';

interface ReformaTributariaViewProps {
  setActivePage: (page: string) => void;
}

type ThematicTopic = 
  | 'aliquotas'
  | 'split-payment'
  | 'simples-nacional'
  | 'ipi'
  | 'incentivos-fiscais';

interface TopicItem {
  id: ThematicTopic;
  label: string;
  description: string;
}

const THEMATIC_TOPICS: TopicItem[] = [
  { 
    id: 'aliquotas', 
    label: 'Alíquotas & Recolhimento',
    description: 'Alíquotas de teste, referência e lógica de apuração de CBS e IBS.'
  },
  { 
    id: 'split-payment', 
    label: 'Split Payment',
    description: 'Separação automática de CBS e IBS no momento do pagamento.'
  },
  { 
    id: 'simples-nacional', 
    label: 'Simples Nacional',
    description: 'Regras do regime, formas de recolhimento e impactos sobre créditos e relações B2B.'
  },
  { 
    id: 'ipi', 
    label: 'IPI',
    description: 'Redução das alíquotas do IPI e principais exceções.'
  },
  { 
    id: 'incentivos-fiscais', 
    label: 'Incentivos Fiscais',
    description: 'Transição de benefícios fiscais, compensações e regimes específicos.'
  },
];

// Estrutura de evidências baseada exclusivamente nos documentos oficiais fornecidos
const REFORMA_TRIBUTARIA_EVIDENCES: Evidence[] = [
  {
    id: 'rt-ev-g1-cobranca-2027',
    tag: 'Cobrança sobre o Consumo',
    dateStr: '08/08/2026',
    title: 'Reforma Tributária começa a mudar efetivamente a cobrança sobre o consumo em 2027',
    headline: 'Entrada em vigor da CBS e do IBS, substituição gradual dos tributos atuais e cronograma até 2033.',
    summary: 'A matéria explica de forma didática como será a entrada em vigor da CBS e do IBS, a substituição gradual dos tributos atuais e o cronograma de transição até 2033. Também diferencia o período de testes de 2026 do início efetivo da cobrança em 2027 e apresenta os principais pontos que ainda dependem de regulamentação ou definição operacional.',
    source: 'G1',
    url: 'https://g1.globo.com/economia/noticia/2026/08/08/reforma-tributaria-cobranca-de-novos-impostos-sobre-consumo-comeca-em-2027-veja-como-vai-funcionar-e-o-que-falta-definir.ghtml'
  },
  {
    id: 'rt-ev-receita-transicao-2026',
    tag: 'Transição Operacional',
    dateStr: '2026',
    title: '2026 marca o início operacional da transição para CBS e IBS',
    headline: 'Empresas entram na fase de testes com emissão de documentos fiscais e destaque individualizado de tributos.',
    summary: 'A partir de 2026, empresas entram na fase operacional de adaptação ao novo sistema, incluindo emissão de documentos fiscais eletrônicos com destaque individualizado de CBS e IBS. O ano é tratado como período de teste e adaptação, com regras específicas para cumprimento das obrigações acessórias e preparação dos sistemas empresariais para a substituição gradual dos tributos atuais.',
    source: 'Receita Federal',
    url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/orientacoes-2026'
  },
  {
    id: 'rt-ev-receita-cronograma-doc-fiscais',
    tag: 'Cronograma Fiscal',
    dateStr: 'Julho/2026',
    title: 'Receita divulga cronograma para adaptação dos documentos fiscais',
    headline: 'Receita Federal e Comitê Gestor do IBS publicam cronograma e novos leiautes de documentos fiscais.',
    summary: 'Em julho de 2026, a Receita Federal e o Comitê Gestor do IBS publicaram o cronograma de implementação dos documentos fiscais eletrônicos relacionados à CBS e ao IBS. O calendário define datas de obrigatoriedade e publicação de novos leiautes para diferentes documentos e setores, considerando a necessidade de adequação dos sistemas emissores e realização de testes prévios pelos contribuintes. Para contribuintes do Simples Nacional, por exemplo, os novos leiautes têm publicação prevista em setembro de 2026 e obrigatoriedade a partir de janeiro de 2027.',
    source: 'Receita Federal / Comitê Gestor do IBS',
    url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/julho/receita-federal-e-comite-gestor-do-ibs-publicam-o-cronograma-de-implementacao-dos-documentos-fiscais-eletronicos-da-reforma-tributaria-do-consumo'
  },
  {
    id: 'rt-ev-g1-simples-nacional-2027',
    tag: 'Simples Nacional',
    dateStr: '24/08/2026',
    title: 'Simples Nacional muda em 2027: empresas têm até setembro para escolher como pagar novos impostos',
    headline: 'Escolha entre recolher CBS e IBS pelo Simples ou regime regular, impacto em créditos e relações B2B.',
    summary: 'A matéria do G1 detalha as escolhas das micro e pequenas empresas a partir de 2027: manter CBS e IBS no DAS ou optar pelo regime regular para esses tributos. Analisa as exigências de controle contábil/fiscal, a diferença no aproveitamento e repasse de créditos tributários para compradores, e o potencial impacto na atratividade comercial em relações B2B.',
    source: 'G1',
    url: 'https://g1.globo.com/empreendedorismo/noticia/2026/08/24/simples-nacional-muda-em-2027.ghtml'
  },
  {
    id: 'rt-ev-aliquota-teste-1-pct',
    tag: 'Alíquotas & Recolhimento',
    dateStr: '03/08/2026',
    title: 'Alíquota-teste de 1% passa a constar nos documentos fiscais em 2026',
    headline: 'Preenchimento de CBS (0,9%) e IBS (0,1%) em documentos fiscais eletrônicos para validação de sistemas e processos.',
    summary: 'Em agosto de 2026, empresas do regime regular passaram a preencher os campos de CBS e IBS nos documentos fiscais eletrônicos, utilizando uma alíquota-teste total de 1% — 0,9% de CBS e 0,1% de IBS. Essa etapa serve principalmente para validar documentos, sistemas e processos antes da cobrança efetiva dos novos tributos. O ponto importante é que esses percentuais não representam a alíquota definitiva que valerá no novo sistema.',
    source: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/reforma-tributaria-nova-etapa-inicia-nesta-segunda-3-veja-o-que-muda/'
  },
  {
    id: 'rt-ev-aliquota-efetiva-cbs-2027',
    tag: 'Alíquotas & Recolhimento',
    dateStr: '16/01/2025',
    title: 'Alíquota efetiva da CBS em 2027 ainda será definida pelo novo modelo de referência',
    headline: 'Substituição de PIS e Cofins pela CBS com alíquota calculada pela metodologia de referência para preservar arrecadação.',
    summary: 'A partir de 2027, a CBS passa a ser efetivamente cobrada e substitui PIS e Cofins, mas sua alíquota cheia não deve ser confundida com os 0,9% utilizados em 2026. A legislação estabelece um mecanismo de alíquota de referência, calculado para preservar a arrecadação durante a transição, e a CBS de 2027 será definida dentro dessa metodologia. O IBS continuará em fase inicial antes de sua transição mais intensa a partir de 2029.',
    source: 'Câmara dos Deputados (LC nº 214/2025)',
    url: 'https://www2.camara.leg.br/legin/fed/leicom/2025/leicomplementar-214-16-janeiro-2025-796905-normaatualizada-pl.html'
  },
  {
    id: 'rt-ev-cbs-declarada-sem-recolhimento-2026',
    tag: 'Alíquotas & Recolhimento',
    dateStr: 'Agosto/2026',
    title: 'CBS poderá ser declarada em 2026 sem recolhimento efetivo durante a fase de testes',
    headline: 'Obrigatoriedade de informar CBS em documentos fiscais com dispensa de desembolso mediante cumprimento das obrigações acessórias.',
    summary: 'A regulamentação de 2026 exige que empresas do regime regular informem CBS nos documentos fiscais para adaptação ao novo sistema, mas o cumprimento das obrigações acessórias pode dispensar o recolhimento da alíquota-teste. A matéria também ajuda a diferenciar destacar o imposto no documento fiscal de efetivamente desembolsar o tributo, uma distinção importante para evitar a interpretação de que todas as empresas já estão pagando 1% adicional em 2026.',
    source: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/reforma-tributaria-empresas-serao-obrigadas-a-declarar-cbs-em-agosto/'
  }
  ,
  {
    id: 'rt-ev-exame-split-payment-logica',
    tag: 'Split Payment',
    dateStr: '2026',
    title: 'Split Payment separa automaticamente imposto e valor do fornecedor no momento do pagamento',
    headline: 'Mecanismo divide automaticamente o valor da operação entre fornecedor e recolhimento de CBS/IBS.',
    summary: 'O mecanismo divide automaticamente o valor de uma operação: uma parte segue para o fornecedor e outra é destinada ao recolhimento de CBS e IBS. A principal mudança é que o imposto deixa de depender apenas do recolhimento posterior pela empresa e passa a ser segregado no momento da liquidação financeira.',
    source: 'Exame',
    url: 'https://www.exame.com/invest/minhas-financas/como-o-split-payment-da-reforma-tributaria-pode-impactar-seu-bolso/'
  },
  {
    id: 'rt-ev-exame-split-payment-impactos',
    tag: 'Impacto Financeiro',
    dateStr: '2026',
    title: 'Split Payment pode mudar caixa, crédito e integração entre áreas das empresas',
    headline: 'Adaptação exige integração entre financeiro e fiscal, alterando dinâmica de caixa e capital de giro.',
    summary: 'Além da arrecadação automática, o mecanismo pode alterar a dinâmica de caixa das empresas, porque parte do valor da venda não transita da mesma forma pelo caixa do fornecedor. A adaptação também exige integração maior entre financeiro, fiscal, sistemas e meios de pagamento, além de poder influenciar capital de giro, formação de preços e margens.',
    source: 'Exame',
    url: 'https://www.exame.com/negocios/reforma-tributaria-muda-logica-financeira-das-empresas-e-amplia-papel-da-ia-na-gestao/'
  },
  {
    id: 'rt-ev-rfb-split-payment-infra',
    tag: 'Infraestrutura Técnica',
    dateStr: '2026',
    title: 'Receita e Comitê Gestor avançam na infraestrutura técnica do Split Payment',
    headline: 'Publicação da documentação técnica da Plataforma Pública do Split Payment, com ativação efetiva prevista para 2027.',
    summary: 'A Receita Federal e o Comitê Gestor do IBS autorizaram a publicação da documentação técnica da Plataforma Pública do Split Payment, incluindo manual de integração e especificações para conexão dos sistemas. Os campos criados em 2026 têm caráter preparatório e a ativação efetiva do mecanismo está prevista a partir de 2027, com implementação gradual.',
    source: 'Receita Federal',
    url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/legislacao/legislacao-da-reforma-tributaria-do-consumo'
  }
,
  {
    id: 'rt-ev-ipi-exame-2026',
    tag: 'Redução do IPI',
    dateStr: 'Setembro/2026',
    title: 'IPI terá alíquota zero para a maior parte dos produtos, mas não desaparece completamente',
    headline: 'A partir de 2027, imposto deixa de ser cobrado sobre grande parte dos produtos, mas permanece relevante.',
    summary: 'A partir de 2027, o IPI deixa de ser cobrado sobre grande parte dos produtos, mas permanece relevante para determinadas situações relacionadas à preservação da competitividade da Zona Franca de Manaus. Mesmo quando a alíquota chegar a zero, algumas obrigações acessórias do imposto podem continuar existindo enquanto a regulamentação não for ajustada, o que mantém atenção sobre documentos fiscais, enquadramentos e procedimentos das empresas.',
    source: 'Exame',
    url: 'https://exame.com/bussola/o-ipi-vai-acabar/'
  },
  {
    id: 'rt-ev-ipi-contadores-2026',
    tag: 'Exceções do IPI',
    dateStr: 'Maio/2026',
    title: 'Quais produtos podem continuar sujeitos ao IPI depois de 2027',
    headline: 'Redução do IPI não será igual para todos, focando em manter os benefícios da ZFM.',
    summary: 'A redução do IPI não será igual para todos os produtos. A definição dos itens que continuarão sujeitos ao imposto está ligada principalmente à produção incentivada na Zona Franca de Manaus e aos critérios estabelecidos pela regulamentação. A mudança pode exigir revisão de classificação fiscal, precificação, enquadramento e tratamento dos créditos pelas empresas que comercializam produtos alcançados pelas exceções.',
    source: 'Contadores.cnt.br',
    url: 'https://www.contadores.cnt.br/noticias/tecnicas/2026/05/14/reforma-tributaria-novo-regulamento-traz-relacao-de-produtos-que-manterao-cobranca-de-ipi-apos-2027.html'
  },
  {
    id: 'rt-ev-ipi-uol-2026',
    tag: 'Transição do IPI',
    dateStr: 'Agosto/2026',
    title: 'Governo prepara redução do IPI e indústria precisa se preparar para a transição de 2027',
    headline: 'Governo quer editar decreto antecipado para dar tempo de adaptação, com atenção aos créditos de IPI.',
    summary: 'A redução a zero está prevista para janeiro de 2027, e o governo pretende divulgar antecipadamente a regulamentação para dar tempo de adaptação às empresas. Um dos pontos relevantes para a indústria é evitar a continuidade do acúmulo de créditos de IPI durante a transição. O novo desenho também reduz gradualmente o papel atual do IPI dentro da tributação sobre o consumo.',
    source: 'UOL Economia',
    url: 'https://www.economia.uol.com.br/noticias/redacao/2026/08/25/durigan-diz-que-governo-vai-editar-decreto-para-zerar-ipi.ghtm'
  },
  {
    id: 'rt-ev-ipi-seletivo-2026',
    tag: 'Imposto Seletivo',
    dateStr: 'Agosto/2026',
    title: 'Imposto Seletivo assume parte da função hoje exercida pelo IPI',
    headline: 'Novo imposto será cobrado sobre produtos nocivos à saúde e ao meio ambiente.',
    summary: 'Enquanto o IPI perde incidência sobre grande parte dos produtos, o Imposto Seletivo começa a ser cobrado em 2027 sobre produtos e atividades considerados prejudiciais à saúde ou ao meio ambiente, como cigarros, bebidas alcoólicas, bebidas açucaradas e determinados veículos. A transição mostra que a mudança não é simplesmente a retirada do IPI: parte de sua função extrafiscal passa para um novo tributo com lógica própria.',
    source: 'Agência Brasil',
    url: 'https://www.agenciabrasil.ebc.com.br/economia/noticia/2026-08/arrecadacao-com-imposto-do-pecado-deve-chegar-r-419-bi-em-2027'
  },
  {
    id: 'rt-ev-incentivos-mt-transicao',
    tag: 'Transição do ICMS',
    dateStr: '2025/2026',
    title: 'Quais benefícios entram na transição e como serão reduzidos',
    headline: 'Benefícios fiscais de ICMS continuam durante a transição com redução gradual entre 2029 e 2032.',
    summary: 'Os benefícios fiscais de ICMS existentes continuam durante a transição, mas são reduzidos gradualmente entre 2029 e 2032 junto com o próprio ICMS. A fonte também apresenta exemplos de tratamentos diferenciados, como redução de alíquota, crédito presumido e alíquota zero. Para benefícios onerosos concedidos por prazo certo e sob condição, existe mecanismo específico de compensação.',
    source: 'Escola da Reforma Tributária (MT)',
    url: 'https://www.escoladareformatributaria.mt.gov.br/perguntas-frequentes-faq?hash=80877557-1'
  },
  {
    id: 'rt-ev-incentivos-rfb-compensacao',
    tag: 'Compensação e Habilitação',
    dateStr: '2026',
    title: 'Compensação e habilitação para benefícios onerosos de ICMS',
    headline: 'Procedimentos de habilitação para futuros direitos de compensação de benefícios de ICMS.',
    summary: 'Desde janeiro de 2026, titulares de benefícios onerosos relativos ao ICMS podem apresentar requerimentos para habilitação a futuros direitos de compensação. Os pedidos devem considerar os benefícios passíveis de compensação e os respectivos programas de concessão utilizados pela empresa.',
    source: 'Receita Federal',
    url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/orientacoes-2026'
  },
  {
    id: 'rt-ev-incentivos-thomson-localizacao',
    tag: 'Localização e Competitividade',
    dateStr: '2025/2026',
    title: 'Redução dos incentivos muda a lógica de localização e competitividade',
    headline: 'Tributação no destino reduz a guerra fiscal e valoriza logística, mercado consumidor e eficiência.',
    summary: 'A Reforma reduz progressivamente o papel da guerra fiscal entre estados e altera a lógica em que incentivos tributários influenciam decisões de localização. Com a nova estrutura, fatores como proximidade do mercado consumidor, eficiência operacional, logística e estrutura da cadeia tendem a ganhar maior importância estratégica.',
    source: 'Thomson Reuters',
    url: 'https://www.thomsonreuters.com.br/pt/reforma-tributaria/incentivos-fiscais.html'
  }
];

// Agrupamentos temáticos de notícias e evidências
const EVIDENCIAS_ALIQUOTAS = [
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-aliquota-teste-1-pct'),
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-aliquota-efetiva-cbs-2027'),
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-cbs-declarada-sem-recolhimento-2026'),
].filter(Boolean) as Evidence[];

const EVIDENCIAS_SIMPLES = [
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-g1-simples-nacional-2027'),
].filter(Boolean) as Evidence[];

const EVIDENCIAS_SPLIT_PAYMENT = [
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-exame-split-payment-logica'),
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-exame-split-payment-impactos'),
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-rfb-split-payment-infra'),
].filter(Boolean) as Evidence[];

const EVIDENCIAS_IPI = [
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-ipi-exame-2026'),
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-ipi-contadores-2026'),
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-ipi-uol-2026'),
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-ipi-seletivo-2026'),
].filter(Boolean) as Evidence[];

const EVIDENCIAS_INCENTIVOS = [
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-incentivos-mt-transicao'),
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-incentivos-rfb-compensacao'),
  REFORMA_TRIBUTARIA_EVIDENCES.find(e => e.id === 'rt-ev-incentivos-thomson-localizacao'),
].filter(Boolean) as Evidence[];

export function ReformaTributariaView({ setActivePage }: ReformaTributariaViewProps) {
  const [activeTopic, setActiveTopic] = useState<ThematicTopic>('aliquotas');
  const [hoveredTopic, setHoveredTopic] = useState<ThematicTopic | null>(null);

  const displayedTopic = THEMATIC_TOPICS.find(t => t.id === (hoveredTopic || activeTopic)) || THEMATIC_TOPICS[0];

  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight">
            Reforma Tributária
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400">
            Acompanhamento das diretrizes, impactos setoriais, regulamentação e cronograma de transição.
          </p>
        </div>

        <ResponsiveContainer minWidth="200px" gap="gap-3" className="flex-1">
          {/* Card 1 — NOVO MODELO TRIBUTÁRIO */}
          <HeaderKpiCard
            title="NOVO MODELO TRIBUTÁRIO"
            value="CBS + IBS + IS"
            context="Nova estrutura da tributação sobre o consumo"
            secondaryHighlight="Substituição gradual dos tributos atuais"
            explanation="A reforma reorganiza a tributação do consumo em torno da CBS, do IBS e do Imposto Seletivo."
            source="Receita Federal"
            icon={Scale}
            color="indigo"
          />

          {/* Card 2 — ANO-TESTE */}
          <HeaderKpiCard
            title="ANO-TESTE"
            value="2026"
            context="CBS 0,9% • IBS 0,1%"
            secondaryHighlight="Início operacional da transição"
            explanation="Ano de testes, adaptação dos documentos fiscais e preparação dos sistemas para o novo modelo."
            source="Receita Federal"
            icon={Activity}
            color="amber"
          />

          {/* Card 3 — TRANSIÇÃO COMPLETA */}
          <HeaderKpiCard
            title="TRANSIÇÃO COMPLETA"
            value="2033"
            context="Vigência integral do novo modelo"
            secondaryHighlight="Extinção de ICMS e ISS"
            explanation="Conclusão do cronograma de transição e funcionamento integral do novo sistema tributário."
            source="Receita Federal"
            icon={Target}
            color="emerald"
          />
        </ResponsiveContainer>
      </div>

      {/* EVIDÊNCIAS DE DESTAQUE (TOP 3) */}
      <section id="evidencias-destaque" className="scroll-mt-12 relative mb-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-[16px] font-bold text-slate-900 dark:text-white">Principais notícias e dados</h2>
          </div>
        </div>
           
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {REFORMA_TRIBUTARIA_EVIDENCES.slice(0, 3).map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </section>

      {/* LEITURA ESTRATÉGICA (O QUE OBSERVAR & IMPACTO) */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            
            {/* Bloco 01 - O que observar */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-6 sm:p-7 md:p-8 shadow-sm flex flex-col justify-between">
              <div className="absolute top-7 right-7 text-[40px] sm:text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-5 relative z-10 flex-1">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Search className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                  </div>
                  
                  <div className="pt-0.5 pr-10">
                    <h4 className="font-bold text-[18px] sm:text-[19px] text-slate-900 dark:text-white mb-2 tracking-tight">O que observar nos próximos meses</h4>
                    <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg">
                      <span className="text-[13px] sm:text-[13.5px] text-orange-800 dark:text-orange-300 font-semibold leading-snug">
                        A implementação entra em fase operacional: regulamentações técnicas, ativação de novos mecanismos e tratamentos específicos passam a exigir acompanhamento próximo.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[60px] flex-1">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-orange-400 dark:marker:text-orange-500/70 font-normal">
                    <li>
                      A consolidação das regras operacionais da CBS, do Split Payment e dos documentos fiscais deve continuar sendo acompanhada, pois novas definições podem exigir ajustes em sistemas e processos antes da entrada efetiva das regras.
                    </li>
                    <li>
                      As definições aplicáveis ao Simples Nacional, ao IPI e aos tratamentos diferenciados previstos na Reforma merecem acompanhamento para identificar como cada regra será aplicada nas situações relevantes para a empresa.
                    </li>
                    <li>
                      A convivência entre o modelo atual e o novo sistema continuará exigindo atenção durante a transição, principalmente à medida que CBS e IBS avancem e os tributos atuais sejam reduzidos progressivamente.
                    </li>
                  </ul>
                  
                  <div className="pt-3 mt-auto border-t border-slate-100 dark:border-slate-800 text-[12px] sm:text-[12.5px] text-slate-400 dark:text-slate-500">
                    <span className="font-semibold text-slate-600 dark:text-slate-400">Evidências utilizadas:</span> Receita Federal, Comitê Gestor do IBS, LC nº 214/2025, G1 e Exame.
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco 02 - Impacto */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-6 sm:p-7 md:p-8 shadow-sm flex flex-col justify-between">
              <div className="absolute top-7 right-7 text-[40px] sm:text-[44px] font-bold text-red-50 dark:text-red-900/20 leading-none pointer-events-none select-none">
                02
              </div>

              <div className="flex flex-col gap-5 relative z-10 flex-1">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  
                  <div className="pt-0.5 pr-10">
                    <h4 className="font-bold text-[18px] sm:text-[19px] text-slate-900 dark:text-white mb-2 tracking-tight">Impacto para a empresa</h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg">
                      <span className="text-[13px] sm:text-[13.5px] text-red-800 dark:text-red-300 font-semibold leading-snug">
                        Frentes em que a Reforma pode alterar a rotina empresarial: sistemas e conciliação, dinâmica financeira e tributária, e relações comerciais na cadeia de valor.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed md:pl-[60px] flex-1">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-red-400 dark:marker:text-red-500/70 font-normal">
                    <li>
                      Sistemas, documentos fiscais, apuração e conciliação podem exigir adaptações para operar corretamente CBS, IBS e os novos mecanismos de recolhimento.
                    </li>
                    <li>
                      O fluxo financeiro e a composição tributária das operações podem mudar com o Split Payment, a nova lógica de créditos, as alterações no IPI e a transição de benefícios fiscais atualmente utilizados.
                    </li>
                    <li>
                      Relações comerciais e decisões de compra podem exigir nova análise quando fornecedores ou clientes estiverem sujeitos a regras específicas do Simples Nacional ou a tratamentos tributários diferentes no novo sistema.
                    </li>
                  </ul>
                  
                  <div className="pt-3 mt-auto border-t border-slate-100 dark:border-slate-800 text-[12px] sm:text-[12.5px] text-slate-400 dark:text-slate-500">
                    <span className="font-semibold text-slate-600 dark:text-slate-400">Evidências utilizadas:</span> Receita Federal, Comitê Gestor do IBS, LC nº 214/2025, G1, Exame e Escola da Reforma Tributária.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMO A REFORMA TRIBUTÁRIA VAI FUNCIONAR NA PRÁTICA? */}
      <section className="bg-white dark:bg-[#111827] p-5 sm:p-6 md:p-7 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
        {/* Cabeçalho da Seção */}
        <div className="mb-5 border-b border-slate-100 dark:border-slate-800 pb-3.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-[19px] md:text-[21px] font-bold text-slate-900 dark:text-white tracking-tight uppercase">
                COMO A REFORMA TRIBUTÁRIA VAI FUNCIONAR NA PRÁTICA?
              </h2>
              <p className="text-[13.5px] md:text-[14px] text-slate-500 dark:text-slate-400 mt-0.5">
                Entenda a nova estrutura de tributos, o cronograma de transição e as principais mudanças para o Simples Nacional.
              </p>
            </div>
          </div>
        </div>

        {/* SEQUÊNCIA VERTICAL: 01. COMO FUNCIONA -> 02. CRONOGRAMA -> 03. SIMPLES NACIONAL */}
        <div className="flex flex-col gap-4.5 sm:gap-5">
          {/* BLOCO 01 — COMO FUNCIONA */}
          <div className="flex flex-col bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-5.5">
            <div className="flex items-center justify-between mb-3.5 border-b border-slate-200/60 dark:border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                <h3 className="text-[14.5px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  01. COMO FUNCIONA
                </h3>
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                Transformação do Sistema
              </span>
            </div>

            {/* Diagrama de Transformação */}
            <div className="flex flex-col gap-2.5 flex-1">
              {/* Linha 1: PIS / Pasep + Cofins -> CBS */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3 items-center bg-white dark:bg-[#111827] py-2.5 px-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <div className="sm:col-span-4 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Tributos Atuais</span>
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 text-[13.5px]">
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">PIS/Pasep</span>
                    <span className="text-slate-400">+</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">Cofins</span>
                  </div>
                </div>
                <div className="hidden sm:flex sm:col-span-1 justify-center text-slate-400">
                  <ArrowRight className="w-4 h-4 text-indigo-500" />
                </div>
                <div className="sm:col-span-7 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-black text-indigo-600 dark:text-indigo-400 text-[15px] sm:text-[16px] tracking-tight">CBS</span>
                    <span className="text-[11.5px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-100 dark:border-indigo-900/50">
                      Federal
                    </span>
                  </div>
                  <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-tight">
                    <strong className="text-slate-800 dark:text-slate-200">Contribuição sobre Bens e Serviços</strong> • Tributo federal sobre o consumo
                  </p>
                </div>
              </div>

              {/* Linha 2: ICMS + ISS -> IBS */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3 items-center bg-white dark:bg-[#111827] py-2.5 px-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <div className="sm:col-span-4 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Tributos Atuais</span>
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 text-[13.5px]">
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">ICMS</span>
                    <span className="text-slate-400">+</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">ISS</span>
                  </div>
                </div>
                <div className="hidden sm:flex sm:col-span-1 justify-center text-slate-400">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="sm:col-span-7 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-black text-emerald-600 dark:text-emerald-400 text-[15px] sm:text-[16px] tracking-tight">IBS</span>
                    <span className="text-[11.5px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/50">
                      Estados + Municípios
                    </span>
                  </div>
                  <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-tight">
                    <strong className="text-slate-800 dark:text-slate-200">Imposto sobre Bens e Serviços</strong> • Tributo compartilhado por estados e municípios
                  </p>
                </div>
              </div>

              {/* Linha 3: IPI -> Redução a zero */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3 items-center bg-white dark:bg-[#111827] py-2.5 px-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <div className="sm:col-span-4 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Tributo Industrial</span>
                  <div className="flex items-center font-bold text-slate-800 dark:text-slate-200 text-[13.5px]">
                    <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">IPI</span>
                  </div>
                </div>
                <div className="hidden sm:flex sm:col-span-1 justify-center text-slate-400">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
                <div className="sm:col-span-7 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11.5px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      Tratamento Específico
                    </span>
                  </div>
                  <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-tight">
                    Alíquota reduzida a zero para a maior parte dos produtos, com exceções previstas na reforma.
                  </p>
                </div>
              </div>

              {/* Linha 4: + Imposto Seletivo */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3 items-center bg-white dark:bg-[#111827] py-2.5 px-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <div className="sm:col-span-4 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider mb-0.5">Novo Tributo</span>
                  <div className="flex items-center font-bold text-amber-700 dark:text-amber-400 text-[13.5px]">
                    <span className="bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/50 px-2 py-0.5 rounded">
                      + Imposto Seletivo (IS)
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex sm:col-span-1 justify-center text-slate-400">
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </div>
                <div className="sm:col-span-7 flex flex-col justify-center">
                  <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-tight">
                    Aplicado a determinados bens e serviços considerados prejudiciais à saúde ou ao meio ambiente.
                  </p>
                </div>
              </div>
            </div>

            {/* Frase de Síntese */}
            <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 text-[12px] sm:text-[12.5px] text-slate-500 dark:text-slate-400 italic">
              A reforma reorganiza a tributação sobre o consumo, substituindo gradualmente o modelo atual por uma estrutura baseada principalmente em CBS e IBS.
            </div>
          </div>

          {/* BLOCO 02 — CRONOGRAMA DA TRANSIÇÃO */}
          <div className="bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-5.5">
            <div className="flex items-center justify-between mb-3.5 border-b border-slate-200/60 dark:border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <h3 className="text-[14.5px] sm:text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  02. CRONOGRAMA DA TRANSIÇÃO
                </h3>
              </div>
              <span className="text-[11.5px] sm:text-[12px] font-semibold text-slate-500 dark:text-slate-400">
                Referência temporal: Setembro de 2026
              </span>
            </div>

            {/* Grid dos 4 marcos horizontais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
              {/* Marco 1: 2026 */}
              <div className="bg-amber-50/60 dark:bg-amber-950/20 border-2 border-amber-400 dark:border-amber-500/70 rounded-xl p-3.5 sm:p-4 flex flex-col relative shadow-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[24px] sm:text-[25px] font-black text-amber-700 dark:text-amber-400 tracking-tight leading-none">
                    2026
                  </span>
                  <span className="bg-amber-500 text-white font-black text-[9.5px] px-2 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                    ESTAMOS AQUI
                  </span>
                </div>
                <h4 className="font-bold text-[13.5px] sm:text-[14px] text-slate-900 dark:text-white mb-1 leading-snug">
                  Ano de testes e adaptação
                </h4>
                <div className="mb-1.5">
                  <span className="inline-block text-[11px] sm:text-[11.5px] font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-900/50 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                    CBS 0,9% • IBS 0,1%
                  </span>
                </div>
                <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-relaxed mt-auto">
                  Adequação de documentos fiscais eletrônicos e preparação dos sistemas empresariais (fase atual em andamento).
                </p>
              </div>

              {/* Marco 2: 2027 */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 flex flex-col shadow-xs">
                <div className="mb-1.5">
                  <span className="text-[24px] sm:text-[25px] font-black text-indigo-600 dark:text-indigo-400 tracking-tight leading-none">
                    2027
                  </span>
                </div>
                <h4 className="font-bold text-[13.5px] sm:text-[14px] text-slate-900 dark:text-white mb-1.5 leading-snug">
                  CBS entra efetivamente em vigor
                </h4>
                <ul className="space-y-1 text-[11.5px] sm:text-[12px] text-slate-600 dark:text-slate-400 leading-tight mt-auto">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                    <span>PIS e Cofins são substituídos</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                    <span>Início do Imposto Seletivo</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                    <span>Novas regras para o Simples Nacional</span>
                  </li>
                </ul>
              </div>

              {/* Marco 3: 2029–2032 */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 flex flex-col shadow-xs">
                <div className="mb-1.5">
                  <span className="text-[24px] sm:text-[25px] font-black text-slate-700 dark:text-slate-300 tracking-tight leading-none">
                    2029–2032
                  </span>
                </div>
                <h4 className="font-bold text-[13.5px] sm:text-[14px] text-slate-900 dark:text-white mb-1 leading-snug">
                  Transição gradual de ICMS e ISS para o IBS
                </h4>
                <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-relaxed mt-auto">
                  Redução progressiva dos tributos estaduais e municipais atuais enquanto o IBS ganha participação gradual na arrecadação.
                </p>
              </div>

              {/* Marco 4: 2033 */}
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 flex flex-col shadow-xs">
                <div className="mb-1.5">
                  <span className="text-[24px] sm:text-[25px] font-black text-emerald-600 dark:text-emerald-400 tracking-tight leading-none">
                    2033
                  </span>
                </div>
                <h4 className="font-bold text-[13.5px] sm:text-[14px] text-slate-900 dark:text-white mb-1 leading-snug">
                  Novo modelo plenamente implementado
                </h4>
                <div className="mb-1.5">
                  <span className="inline-block text-[11px] sm:text-[11.5px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/50">
                    Extinção de ICMS e ISS
                  </span>
                </div>
                <p className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 leading-relaxed mt-auto">
                  Conclusão do cronograma de transição e funcionamento integral do novo sistema tributário nacional.
                </p>
              </div>
            </div>
          </div>

          {/* APROFUNDAMENTO TEMÁTICO */}
          <div className="flex flex-col gap-4 sm:gap-5 mt-2">
            
            {/* Cabeçalho da Área Temática */}
            <div className="flex flex-col gap-1 border-b border-slate-200/80 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                <h3 className="text-[14.5px] sm:text-[15.5px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  APROFUNDAMENTO TEMÁTICO
                </h3>
              </div>
              <p className="text-[12.5px] sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Selecione um tema para entender como a Reforma Tributária funciona na prática e quais impactos podem surgir para as empresas.
              </p>
            </div>

            {/* Barra de Navegação Horizontal */}
            <div className="flex flex-col gap-2">
              <div className="overflow-x-auto no-scrollbar -mx-1 px-1 pt-1 pb-3">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 sm:gap-2.5 p-1.5 sm:p-2 bg-indigo-50/30 dark:bg-slate-800/40 border border-indigo-100/50 dark:border-slate-700/60 rounded-2xl w-full shadow-inner">
                  {THEMATIC_TOPICS.map((topic) => {
                    const isActive = activeTopic === topic.id;
                    return (
                      <button
                        key={topic.id}
                        id={`tab-tema-${topic.id}`}
                        type="button"
                        title={topic.description}
                        onClick={() => setActiveTopic(topic.id)}
                        onMouseEnter={() => setHoveredTopic(topic.id)}
                        onMouseLeave={() => setHoveredTopic(null)}
                        className={`flex-1 min-w-[150px] sm:min-w-0 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[14px] text-[13.5px] sm:text-[14.5px] font-semibold transition-all duration-200 ease-out whitespace-nowrap text-center cursor-pointer border flex items-center justify-center active:scale-95 active:shadow-none ${
                          isActive
                            ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-700 dark:border-indigo-400 shadow-md ring-2 ring-indigo-600/30 dark:ring-indigo-500/30 hover:bg-indigo-700 dark:hover:bg-indigo-600'
                            : 'bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 shadow-sm border-indigo-200/60 dark:border-indigo-800/50 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-100 hover:-translate-y-0.5 hover:shadow-md'
                        }`}
                      >
                        {topic.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Microdescrição Contextual da Aba Selecionada / Em Hover */}
              <div className="flex items-center gap-2 px-2 py-1 text-[11.5px] sm:text-[12px] text-slate-500 dark:text-slate-400 transition-all duration-150">
                <Info className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                <span className="leading-snug">
                  <strong className="text-slate-700 dark:text-slate-300 font-semibold mr-1">{displayedTopic.label}:</strong>
                  {displayedTopic.description}
                </span>
              </div>
            </div>

            {/* CONTEÚDO DINÂMICO DO TEMA SELECIONADO */}
            {activeTopic === 'simples-nacional' && (
              <div className="flex flex-col bg-[#f8fafc] dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 gap-4 sm:gap-4.5 shadow-xs">
                
                {/* 1. CABEÇALHO / HERO DA SEÇÃO */}
                <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 overflow-hidden relative">
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5 z-10">
                    <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[#ede9fe] dark:bg-indigo-950/70 border border-[#ddd6fe] dark:border-indigo-900/50 flex items-center justify-center shrink-0 shadow-2xs">
                      <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-[#4f46e5] dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-[26px] sm:text-[30px] md:text-[32px] font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight mb-1">
                        E O SIMPLES NACIONAL?
                      </h3>
                      <p className="text-[15px] sm:text-[16.5px] font-bold text-slate-800 dark:text-slate-100 mb-1 leading-snug">
                        A principal mudança não é o fim do regime, mas a nova escolha sobre como recolher CBS e IBS.
                      </p>
                      <p className="text-[14px] sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Essa decisão pode influenciar simplicidade operacional, aproveitamento de créditos tributários e competitividade comercial.
                      </p>
                    </div>
                  </div>

                  {/* Ilustração Visual / Badge Executivo no Canto Direito */}
                  <div className="hidden lg:flex items-center gap-3 shrink-0 bg-gradient-to-br from-indigo-50/80 via-blue-50/40 to-slate-50/20 dark:from-indigo-950/40 dark:via-slate-900/40 dark:to-slate-900/20 py-2.5 px-3.5 rounded-2xl border border-indigo-100/70 dark:border-indigo-900/40 shadow-xs">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center shadow-md">
                      <ShieldCheck className="w-6.5 h-6.5 stroke-[2.2]" />
                    </div>
                    <div className="flex flex-col pr-1">
                      <span className="text-[12px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                        Regime Protegido
                      </span>
                      <span className="text-[13.5px] font-semibold text-slate-700 dark:text-slate-200">
                        Manutenção & Escolha
                      </span>
                    </div>
                  </div>
                </div>

                {/* 1.1 CONTEXTUALIZAÇÃO DIDÁTICA — O QUE É O SIMPLES NACIONAL? */}
                <div className="bg-white/90 dark:bg-[#111827]/90 border border-slate-200/80 dark:border-slate-800 rounded-xl p-4 sm:p-4.5 shadow-2xs flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0"></span>
                    <h4 className="text-[14px] sm:text-[15.5px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                      O QUE É O SIMPLES NACIONAL?
                    </h4>
                  </div>
                  <p className="text-[14.5px] sm:text-[15.5px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    Regime tributário simplificado voltado a micro e pequenas empresas, que reúne diferentes tributos em uma única sistemática de recolhimento. Em regra, podem optar pelo regime empresas com receita bruta anual de até R$ 4,8 milhões, desde que atendam às condições previstas na legislação.
                  </p>
                  <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2.5 text-[13.5px] sm:text-[14.5px] text-indigo-950 dark:text-indigo-200 font-medium leading-relaxed">
                    <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>
                      A Reforma Tributária não extingue o Simples Nacional — ela altera a forma como CBS e IBS poderão ser recolhidos a partir de 2027.
                    </span>
                  </div>
                </div>

                {/* 2. DIVISOR CENTRAL: A DECISÃO QUE SURGE EM 2027 */}
                <div className="flex items-center justify-center gap-3 my-0.5">
                  <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs md:max-w-md"></div>
                  <span className="text-[14px] sm:text-[15px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest px-2.5">
                    A DECISÃO QUE SURGE EM 2027
                  </span>
                  <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1 max-w-xs md:max-w-md"></div>
                </div>

                {/* 3. COMPARATIVO CENTRAL: 2 OPÇÕES COM ELEMENTO CONECTOR DOMINANTE */}
                <div className="relative flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5 lg:gap-7">
                  
                  {/* Linha conectora desktop atrás dos cards */}
                  <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0"></div>

                  {/* Opção 1: Dentro do Simples */}
                  <div className="flex-1 bg-white dark:bg-[#111827] border-2 border-[#a5b4fc] dark:border-indigo-600/80 rounded-2xl p-4 sm:p-5 shadow-xs relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ede9fe] dark:bg-indigo-950/80 border border-[#c7d2fe] dark:border-indigo-800/60 flex items-center justify-center shrink-0 shadow-2xs">
                      <Store className="w-8 h-8 text-[#4f46e5] dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-[16.5px] sm:text-[18px] font-black text-[#4f46e5] dark:text-indigo-400 uppercase tracking-tight mb-1">
                        CBS + IBS DENTRO DO SIMPLES
                      </h4>
                      <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 font-medium mb-3 leading-snug">
                        Os tributos permanecem incluídos no pagamento unificado pelo DAS.
                      </p>
                      <ul className="space-y-2 text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-200 font-medium">
                        <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                          <span className="w-5 h-5 rounded-full bg-[#4f46e5] text-white flex items-center justify-center shrink-0 shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>Recolhimento unificado no DAS</span>
                        </li>
                        <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                          <span className="w-5 h-5 rounded-full bg-[#4f46e5] text-white flex items-center justify-center shrink-0 shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>Mais simplicidade operacional</span>
                        </li>
                        <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                          <span className="w-5 h-5 rounded-full bg-[#4f46e5] text-white flex items-center justify-center shrink-0 shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>Menor complexidade no dia a dia</span>
                        </li>
                        <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                          <span className="w-5 h-5 rounded-full bg-[#4f46e5] text-white flex items-center justify-center shrink-0 shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>Crédito transferido ao cliente tende a ser menor</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Selo Central "ESCOLHA DA EMPRESA" (Destaque Dominante Conector) */}
                  <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-22 h-22 bg-white dark:bg-[#111827] rounded-full border-2 border-slate-300 dark:border-slate-600 items-center justify-center shadow-md z-20">
                    <div className="text-center font-black text-[11px] text-slate-800 dark:text-slate-100 uppercase tracking-wider leading-tight">
                      ESCOLHA<br />DA<br />EMPRESA
                    </div>
                  </div>

                  {/* Conector Mobile */}
                  <div className="flex lg:hidden items-center justify-center -my-1 z-20">
                    <div className="px-4 py-1.5 bg-white dark:bg-slate-800 rounded-full border-2 border-slate-300 dark:border-slate-600 shadow-xs text-[12px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      ESCOLHA DA EMPRESA
                    </div>
                  </div>

                  {/* Opção 2: Regime Regular */}
                  <div className="flex-1 bg-white dark:bg-[#111827] border-2 border-[#86efac] dark:border-emerald-600/80 rounded-2xl p-4 sm:p-5 shadow-xs relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#dcfce7] dark:bg-emerald-950/80 border border-[#bbf7d0] dark:border-emerald-800/60 flex items-center justify-center shrink-0 shadow-2xs">
                      <Building2 className="w-8 h-8 text-[#059669] dark:text-emerald-400" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-[16.5px] sm:text-[18px] font-black text-[#059669] dark:text-emerald-400 uppercase tracking-tight mb-1">
                        CBS + IBS PELO REGIME REGULAR
                      </h4>
                      <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 font-medium mb-3 leading-snug">
                        Calcula e recolhe CBS e IBS separadamente, mantendo o Simples nos demais.
                      </p>
                      <ul className="space-y-2 text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-200 font-medium">
                        <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                          <span className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>Pagamento separado de CBS e IBS</span>
                        </li>
                        <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                          <span className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>Mais controles fiscais e contábeis</span>
                        </li>
                        <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                          <span className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>Aproveitamento de créditos nas compras</span>
                        </li>
                        <li className="flex items-center gap-2.5 justify-center sm:justify-start">
                          <span className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>Pode gerar mais créditos para clientes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 4. CALLOUT IMPORTANTE */}
                <div className="w-full bg-[#fffbeb] dark:bg-amber-950/20 border border-[#fde68a] dark:border-amber-900/50 rounded-xl py-3 px-4 sm:px-5 flex items-center justify-center text-center gap-2.5 shadow-2xs">
                  <AlertTriangle className="w-5 h-5 text-[#d97706] shrink-0" />
                  <p className="text-[14px] sm:text-[15px] text-[#92400e] dark:text-amber-200 leading-relaxed font-normal">
                    <strong className="font-extrabold text-[#d97706] dark:text-amber-400 uppercase tracking-wider mr-1.5 text-[12.5px] sm:text-[13.5px]">
                      IMPORTANTE:
                    </strong>
                    optar pelo regime regular para CBS e IBS <strong className="font-bold text-[#78350f] dark:text-white">não significa sair do Simples Nacional</strong>.
                  </p>
                </div>

                {/* 5. ÁREA DE IMPACTOS COMPARATIVOS (4 CARDS: 2 DENTRO DO SIMPLES / 2 REGIME REGULAR) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4.5 items-stretch">
                  
                  {/* COLUNA ESQUERDA: VINCULADA A "DENTRO DO SIMPLES" */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4f46e5]"></div>
                      <span className="text-[13px] sm:text-[14px] font-black text-[#4f46e5] dark:text-indigo-400 uppercase tracking-wider">
                        Impactos: Opção Dentro do Simples
                      </span>
                    </div>

                    {/* 3.1 Impacto Operacional — Dentro do Simples */}
                    <div className="flex-1 bg-white dark:bg-[#111827] border-2 border-indigo-100 dark:border-indigo-950/80 rounded-2xl p-4 sm:p-4.5 shadow-xs flex items-start gap-3.5 hover:border-indigo-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#ede9fe] dark:bg-indigo-950/80 border border-[#ddd6fe] dark:border-indigo-800/60 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        <Settings className="w-5 h-5 text-[#4f46e5] dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-black text-[15px] sm:text-[16.5px] text-[#4f46e5] dark:text-indigo-400 uppercase tracking-tight mb-2">
                          Impacto Operacional — Dentro do Simples
                        </h5>
                        <ul className="space-y-1.5 text-[13.5px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 list-disc pl-4 marker:text-[#4f46e5] leading-relaxed">
                          <li>Recolhimento permanece mais próximo da lógica atual.</li>
                          <li>Menor necessidade de controles adicionais no dia a dia.</li>
                          <li>Rotina tributária tende a ser mais simples.</li>
                          <li>Menor complexidade operacional em comparação ao regime regular.</li>
                        </ul>
                      </div>
                    </div>

                    {/* 3.2 Impacto Comercial — Dentro do Simples */}
                    <div className="flex-1 bg-white dark:bg-[#111827] border-2 border-indigo-100 dark:border-indigo-950/80 rounded-2xl p-4 sm:p-4.5 shadow-xs flex items-start gap-3.5 hover:border-indigo-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#ede9fe] dark:bg-indigo-950/80 border border-[#ddd6fe] dark:border-indigo-800/60 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        <Handshake className="w-5 h-5 text-[#4f46e5] dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-black text-[15px] sm:text-[16.5px] text-[#4f46e5] dark:text-indigo-400 uppercase tracking-tight mb-2">
                          Impacto Comercial — Dentro do Simples
                        </h5>
                        <ul className="space-y-1.5 text-[13.5px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 list-disc pl-4 marker:text-[#4f46e5] leading-relaxed">
                          <li>Tende a preservar simplicidade para a empresa.</li>
                          <li>Em relações B2B, o crédito transferido ao cliente tende a ser menor.</li>
                          <li>Em relações B2B, o menor crédito ao comprador pode influenciar a comparação com fornecedores que recolhem CBS e IBS pelo regime regular.</li>
                          <li>O impacto comercial depende do perfil dos clientes.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* COLUNA DIREITA: VINCULADA A "REGIME REGULAR" */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#059669]"></div>
                      <span className="text-[13px] sm:text-[14px] font-black text-[#059669] dark:text-emerald-400 uppercase tracking-wider">
                        Impactos: Opção Regime Regular
                      </span>
                    </div>

                    {/* 3.3 Impacto Operacional — Regime Regular */}
                    <div className="flex-1 bg-white dark:bg-[#111827] border-2 border-emerald-100 dark:border-emerald-950/80 rounded-2xl p-4 sm:p-4.5 shadow-xs flex items-start gap-3.5 hover:border-emerald-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#dcfce7] dark:bg-emerald-950/80 border border-[#bbf7d0] dark:border-emerald-800/60 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        <Settings className="w-5 h-5 text-[#059669] dark:text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-black text-[15px] sm:text-[16.5px] text-[#059669] dark:text-emerald-400 uppercase tracking-tight mb-2">
                          Impacto Operacional — Regime Regular
                        </h5>
                        <ul className="space-y-1.5 text-[13.5px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 list-disc pl-4 marker:text-[#059669] leading-relaxed">
                          <li>CBS e IBS passam a ser calculados e recolhidos separadamente.</li>
                          <li>Exige mais controles fiscais e contábeis.</li>
                          <li>Pode elevar a complexidade operacional e administrativa.</li>
                          <li>Pode aumentar a necessidade de acompanhamento tributário.</li>
                        </ul>
                      </div>
                    </div>

                    {/* 3.4 Impacto Comercial — Regime Regular */}
                    <div className="flex-1 bg-white dark:bg-[#111827] border-2 border-emerald-100 dark:border-emerald-950/80 rounded-2xl p-4 sm:p-4.5 shadow-xs flex items-start gap-3.5 hover:border-emerald-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#dcfce7] dark:bg-emerald-950/80 border border-[#bbf7d0] dark:border-emerald-800/60 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        <Handshake className="w-5 h-5 text-[#059669] dark:text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-black text-[15px] sm:text-[16.5px] text-[#059669] dark:text-emerald-400 uppercase tracking-tight mb-2">
                          Impacto Comercial — Regime Regular
                        </h5>
                        <ul className="space-y-1.5 text-[13.5px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 list-disc pl-4 marker:text-[#059669] leading-relaxed">
                          <li>Possibilidade de aproveitar créditos nas compras.</li>
                          <li>Possibilidade de gerar mais créditos para clientes.</li>
                          <li>Essa diferença pode ganhar relevância em relações B2B.</li>
                          <li>Pode aumentar a atratividade comercial para determinados clientes empresariais.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

                {/* 6. FLUXO VISUAL HORIZONTAL: POR QUE ISSO PODE AFETAR FORNECEDORES E CLIENTES? */}
                <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
                  
                  {/* Título da Seção + Frase-Chave de Leitura */}
                  <div className="text-center max-w-4xl mx-auto flex flex-col gap-1.5">
                    <h5 className="text-[17px] sm:text-[19px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      POR QUE ISSO PODE AFETAR FORNECEDORES E CLIENTES?
                    </h5>
                    <p className="text-[14.5px] sm:text-[15.5px] text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
                      Em relações entre empresas, a forma de recolhimento escolhida pelo fornecedor pode afetar o volume de créditos tributários percebido pelo cliente — e isso pode influenciar a decisão de compra.
                    </p>
                  </div>

                  {/* 4 Blocos em sequência horizontal padronizada e autoexplicativa */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-stretch">
                    
                    {/* Card 1 */}
                    <div className="bg-[#f8fafc] dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3.5 sm:p-4 flex flex-col items-center text-center gap-2 shadow-2xs relative">
                      <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center shrink-0 mb-0.5">
                        <UserCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <span className="block text-[14px] sm:text-[15px] font-black text-slate-900 dark:text-white leading-snug mb-1">
                          Fornecedor do Simples
                        </span>
                        <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                          Empresa enquadrada no Simples Nacional que vende produtos ou serviços para outras empresas ou para o consumidor final.
                        </p>
                      </div>
                      <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center shadow-xs z-10">
                        <ArrowRight className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#f8fafc] dark:bg-slate-900/90 border border-indigo-200/80 dark:border-indigo-900/60 rounded-2xl p-3.5 sm:p-4 flex flex-col items-center text-center gap-2 shadow-2xs relative">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center shrink-0 mb-0.5">
                        <Scale className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <span className="block text-[14px] sm:text-[15px] font-black text-indigo-950 dark:text-indigo-200 leading-snug mb-1">
                          Escolha da forma de recolhimento
                        </span>
                        <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                          A partir de 2027, a empresa poderá decidir se recolhe CBS e IBS dentro do Simples ou pelo regime regular.
                        </p>
                      </div>
                      <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center shadow-xs z-10">
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-600 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#f8fafc] dark:bg-slate-900/90 border border-emerald-200/80 dark:border-emerald-900/60 rounded-2xl p-3.5 sm:p-4 flex flex-col items-center text-center gap-2 shadow-2xs relative">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center shrink-0 mb-0.5">
                        <FileCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <span className="block text-[14px] sm:text-[15px] font-black text-emerald-950 dark:text-emerald-200 leading-snug mb-1">
                          Crédito de CBS/IBS para o cliente
                        </span>
                        <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                          Dependendo da escolha, o cliente pode receber menor ou maior aproveitamento de créditos tributários nas compras.
                        </p>
                      </div>
                      <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center shadow-xs z-10">
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#f8fafc] dark:bg-slate-900/90 border border-amber-200/80 dark:border-amber-900/60 rounded-2xl p-3.5 sm:p-4 flex flex-col items-center text-center gap-2 shadow-2xs">
                      <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-900/40 flex items-center justify-center shrink-0 mb-0.5">
                        <BarChart3 className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <span className="block text-[14px] sm:text-[15px] font-black text-amber-950 dark:text-amber-200 leading-snug mb-1">
                          Impacto potencial na competitividade
                        </span>
                        <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                          Em relações B2B, isso pode influenciar a atratividade do fornecedor na comparação comercial entre empresas.
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Bloco Explicativo: O Que Isso Significa na Prática */}
                  <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl py-3 px-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-slate-200/70 dark:bg-slate-700 flex items-center justify-center shrink-0 text-slate-700 dark:text-slate-300">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <strong className="block text-[13px] sm:text-[14px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-0.5">
                        O que isso significa na prática:
                      </strong>
                      <p className="text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                        Se o cliente for uma empresa que aproveita créditos tributários, a forma de recolhimento escolhida pelo fornecedor pode ganhar peso comercial. Já em vendas para consumidor final, esse efeito tende a ser menos relevante.
                      </p>
                    </div>
                  </div>

                  {/* Exemplo Prático Apoiando o Fluxo */}
                  <div className="bg-[#eff6ff] dark:bg-blue-950/20 border border-[#dbeafe] dark:border-blue-900/40 rounded-xl py-3 px-4 flex items-center gap-3">
                    <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <p className="text-[14px] sm:text-[15px] text-slate-800 dark:text-slate-200 leading-relaxed">
                      <strong className="font-bold text-[#1e40af] dark:text-blue-300 text-[13px] sm:text-[14px] uppercase tracking-wide mr-1.5">Exemplo prático:</strong> em relações B2B, dois fornecedores com preços semelhantes podem ser avaliados de forma diferente se um deles permitir maior aproveitamento de créditos de CBS e IBS para o cliente.
                    </p>
                  </div>
                </div>

                {/* 7. FAIXA "EM RESUMO" */}
                <div className="w-full bg-[#eff6ff] dark:bg-blue-950/30 border border-[#bfdbfe] dark:border-blue-900/60 rounded-2xl py-3 px-4 sm:px-5 flex items-center gap-3.5 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                  <p className="text-[14.5px] sm:text-[15.5px] text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                    <strong className="text-[#1d4ed8] dark:text-blue-400 font-bold uppercase text-[13px] sm:text-[14px] tracking-wider mr-1.5">
                      Em resumo:
                    </strong>
                    o Simples continua existindo, mas a decisão sobre CBS e IBS passa a equilibrar simplicidade operacional, créditos tributários e competitividade comercial.
                  </p>
                </div>

              </div>
            )}

        {/* CONTEÚDO DINÂMICO DO TEMA: ALÍQUOTAS & RECOLHIMENTO */}
        {activeTopic === 'aliquotas' && (
          <div className="flex flex-col bg-[#f8fafc] dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 gap-4 sm:gap-4.5 shadow-xs">
            
            {/* CABEÇALHO / HERO DA ABA */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-3.5 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-center shrink-0 shadow-2xs">
                    <Percent className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-[26px] sm:text-[30px] md:text-[32px] font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                        ALÍQUOTAS & RECOLHIMENTO
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-900/50">
                        <Sparkles className="w-3.5 h-3.5" />
                        Guia Executivo • CBS + IBS • Transição 2026–2033
                      </span>
                    </div>
                    <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                      Entenda o que vale no teste de 2026, o que muda em 2027 e como funciona a lógica de apuração da CBS e do IBS.
                    </p>
                  </div>
                </div>
              </div>

              {/* Microfaixa de orientação rápida */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/70 rounded-xl px-4 py-2.5 flex flex-wrap sm:flex-nowrap items-center gap-2.5">
                <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950 px-2.5 py-0.5 rounded-md shrink-0">
                  Leitura Rápida
                </span>
                <p className="text-[13.5px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  <strong className="text-slate-900 dark:text-white font-semibold">2026:</strong> Teste e parametrização <span className="text-slate-400 mx-1.5">→</span> <strong className="text-slate-900 dark:text-white font-semibold">2027:</strong> Cobrança efetiva da CBS <span className="text-slate-400 mx-1.5">→</span> <strong className="text-slate-900 dark:text-white font-semibold">Apuração:</strong> Débitos menos créditos <span className="text-slate-400 mx-1.5">→</span> <strong className="text-slate-900 dark:text-white font-semibold">2033:</strong> Consolidação plena.
                </p>
              </div>
            </div>

            {/* BLOCO 01 — O QUE VALE EM 2026? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4 sm:gap-4.5">
              
              {/* Header do Bloco */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></span>
                  <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    01. O QUE VALE EM 2026?
                  </h4>
                </div>
                <span className="text-[12px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-900/50 shadow-2xs">
                  Fase de Teste e Adaptação
                </span>
              </div>

              {/* CAMADA 1: HERO CARD PRINCIPAL */}
              <div className="bg-slate-50/60 dark:bg-slate-800/30 border border-slate-200/70 dark:border-slate-700/60 rounded-xl p-4 sm:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center relative">
                
                {/* Coluna Esquerda: Mensagem Guia */}
                <div className="lg:col-span-5 flex flex-col justify-center border-l-[3px] border-emerald-500 pl-4 py-1">
                  <span className="text-[11px] sm:text-[12px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-1">
                    DIRETRIZ DE TRANSIÇÃO
                  </span>
                  <h5 className="text-[17px] sm:text-[19px] font-black text-slate-900 dark:text-white leading-snug uppercase tracking-tight mb-2">
                    2026 É UMA FASE DE TESTE E ADAPTAÇÃO
                  </h5>
                  <p className="text-[14px] sm:text-[15px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed pr-2">
                    Os percentuais utilizados em 2026 servem para testar e preparar documentos, sistemas e processos para o novo modelo. Eles{' '}
                    <strong className="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/60 px-1 py-0.5 rounded">
                      não representam a alíquota definitiva
                    </strong>{' '}
                    da Reforma Tributária.
                  </p>
                </div>

                {/* Divisor vertical invisível no mobile, sutil no desktop */}
                <div className="hidden lg:block absolute left-[41.666%] top-4 bottom-4 w-px bg-slate-200/80 dark:bg-slate-700/50"></div>

                {/* Coluna Direita: Composição Numérica */}
                <div className="lg:col-span-7 flex flex-col justify-center gap-2.5 lg:pl-4">
                  <div className="flex items-center justify-between pb-1 px-1">
                    <span className="text-[11.5px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      COMPOSIÇÃO DA ALÍQUOTA DE TESTE
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 sm:gap-3.5 py-0.5">
                    
                    {/* Card CBS 0,9% */}
                    <div className="flex-1 min-w-[95px] max-w-[135px] bg-white/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-xl px-2.5 py-3 text-center flex flex-col items-center justify-between shadow-2xs">
                      <span className="text-[10.5px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                        CBS FEDERAL
                      </span>
                      <div className="flex items-center justify-center gap-1">
                        <Building2 className="w-4 h-4 text-indigo-500/80 dark:text-indigo-400/80 shrink-0" />
                        <span className="text-[24px] sm:text-[26px] font-black text-indigo-600 dark:text-indigo-400 leading-none">
                          0,9%
                        </span>
                      </div>
                    </div>

                    <span className="text-slate-400 dark:text-slate-500 font-black text-[22px] sm:text-[24px] flex items-center justify-center select-none pb-0.5">
                      +
                    </span>

                    {/* Card IBS 0,1% */}
                    <div className="flex-1 min-w-[95px] max-w-[135px] bg-white/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-xl px-2.5 py-3 text-center flex flex-col items-center justify-between shadow-2xs">
                      <span className="text-[10.5px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                        IBS EST/MUN
                      </span>
                      <div className="flex items-center justify-center gap-1">
                        <Scale className="w-4 h-4 text-blue-500/80 dark:text-blue-400/80 shrink-0" />
                        <span className="text-[24px] sm:text-[26px] font-black text-blue-600 dark:text-blue-400 leading-none">
                          0,1%
                        </span>
                      </div>
                    </div>

                    <span className="text-slate-400 dark:text-slate-500 font-black text-[22px] sm:text-[24px] flex items-center justify-center select-none pb-0.5">
                      =
                    </span>

                    {/* Card Destaque Protagonista 1,0% DE TESTE */}
                    <div className="flex-1 min-w-[115px] max-w-[155px] bg-emerald-50/90 dark:bg-emerald-950/40 border-[1.5px] border-emerald-500/80 dark:border-emerald-500/60 rounded-xl px-2.5 sm:px-3 py-2.5 text-center flex flex-col items-center justify-between shadow-sm relative">
                      <span className="text-[10.5px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block mb-0.5">
                        TOTAL 2026
                      </span>
                      <span className="text-[30px] sm:text-[34px] font-black text-emerald-700 dark:text-emerald-400 leading-none tracking-tight my-0.5">
                        1,0%
                      </span>
                      <span className="text-[10px] font-black text-emerald-600/90 dark:text-emerald-400/90 uppercase tracking-widest mt-0.5">
                        DE TESTE
                      </span>
                    </div>

                  </div>
                  
                  <p className="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 text-center mt-1 font-medium px-2">
                    Alíquotas utilizadas em 2026 para a fase de testes e adaptação operacional.
                  </p>
                </div>
              </div>

              {/* CAMADA 2: FAIXA DE ALERTA */}
              <div className="bg-amber-50/90 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-900/60 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 flex items-start sm:items-center gap-3.5 shadow-2xs">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-[14px] sm:text-[15px] text-amber-950 dark:text-amber-200 leading-relaxed font-normal">
                  <strong className="font-bold uppercase tracking-wide mr-1.5 text-amber-800 dark:text-amber-300">IMPORTANTE:</strong>
                  os 0,9% de CBS e 0,1% de IBS utilizados em 2026 são percentuais de teste e <strong className="font-bold text-amber-900 dark:text-amber-100">não representam a carga tributária definitiva</strong> do novo sistema.
                </p>
              </div>

              {/* CAMADA 3: O QUE ISSO SIGNIFICA NA PRÁTICA? */}
              <div className="flex flex-col gap-3 pt-0.5">
                
                {/* Título com divisor estilizado */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1 relative">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <h5 className="text-[14px] sm:text-[15px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider text-center px-1">
                    O QUE ISSO SIGNIFICA NA PRÁTICA?
                  </h5>
                  <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1 relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </div>
                </div>

                {/* Grid dos 3 Pilares */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  
                  {/* Pilar 1: Documentos Fiscais */}
                  <div className="h-full bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-3.5 flex items-start gap-3 shadow-2xs hover:border-emerald-300 dark:hover:border-emerald-700/70 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100/80 dark:bg-emerald-950/70 border border-emerald-200/60 dark:border-emerald-800/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0 shadow-2xs mt-0.5">
                      <FileText className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h6 className="text-[14.5px] sm:text-[15.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1">
                        DOCUMENTOS FISCAIS
                      </h6>
                      <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Passar a preencher e validar os campos de CBS e IBS nos documentos fiscais eletrônicos.
                      </p>
                    </div>
                  </div>

                  {/* Pilar 2: Sistemas e ERP */}
                  <div className="h-full bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-3.5 flex items-start gap-3 shadow-2xs hover:border-emerald-300 dark:hover:border-emerald-700/70 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100/80 dark:bg-emerald-950/70 border border-emerald-200/60 dark:border-emerald-800/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0 shadow-2xs mt-0.5">
                      <Monitor className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h6 className="text-[14.5px] sm:text-[15.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1">
                        SISTEMAS E ERP
                      </h6>
                      <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Adaptar cálculos, regras fiscais e emissões para que os sistemas estejam preparados para o novo modelo.
                      </p>
                    </div>
                  </div>

                  {/* Pilar 3: Processos Internos */}
                  <div className="h-full bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-3.5 flex items-start gap-3 shadow-2xs hover:border-emerald-300 dark:hover:border-emerald-700/70 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100/80 dark:bg-emerald-950/70 border border-emerald-200/60 dark:border-emerald-800/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0 shadow-2xs mt-0.5">
                      <Users className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h6 className="text-[14.5px] sm:text-[15.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1">
                        PROCESSOS INTERNOS
                      </h6>
                      <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Testar rotinas fiscais, contábeis e operacionais antes da entrada efetiva das novas regras.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* CAMADA 4: COMPARAÇÃO ROBUSTA (2026 Teste vs Sistema Definitivo) */}
              <div className="bg-white/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700/50 rounded-xl shadow-xs flex flex-col md:flex-row md:divide-x md:divide-slate-200/60 dark:md:divide-slate-700/40 overflow-hidden">
                
                {/* Painel Esquerdo: 2026 — FASE DE TESTE */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col bg-slate-50/40 dark:bg-slate-800/20">
                  <div className="flex items-center gap-2.5 pb-2.5 mb-3 border-b border-slate-200/60 dark:border-slate-700/40">
                    <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-2xs">
                      <FlaskConical className="w-4 h-4" />
                    </div>
                    <span className="text-[14.5px] sm:text-[15.5px] font-black text-indigo-950 dark:text-indigo-200 uppercase tracking-wide">
                      2026 — FASE DE TESTE
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-500/90 dark:text-indigo-400/90 mt-0.5 shrink-0" />
                      <span>Adaptação técnica e operacional das empresas.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-500/90 dark:text-indigo-400/90 mt-0.5 shrink-0" />
                      <span>Destaque de CBS e IBS nos documentos fiscais.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-500/90 dark:text-indigo-400/90 mt-0.5 shrink-0" />
                      <span>Validação de sistemas, cálculos e processos.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-500/90 dark:text-indigo-400/90 mt-0.5 shrink-0" />
                      <span>Etapa preparatória — os percentuais de teste não definem a carga tributária definitiva.</span>
                    </li>
                  </ul>
                </div>

                {/* Painel Direito: SISTEMA DEFINITIVO — ENTRADA PROGRESSIVA */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col bg-emerald-50/20 dark:bg-emerald-950/20">
                  <div className="flex items-center gap-2.5 pb-2.5 mb-3 border-b border-slate-200/60 dark:border-slate-700/40">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-2xs">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-[14.5px] sm:text-[15.5px] font-black text-emerald-950 dark:text-emerald-200 uppercase tracking-wide">
                      SISTEMA DEFINITIVO — ENTRADA PROGRESSIVA
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500/90 dark:text-emerald-400/90 mt-0.5 shrink-0" />
                      <span>CBS efetiva a partir de 2027 na esfera federal.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500/90 dark:text-emerald-400/90 mt-0.5 shrink-0" />
                      <span>IBS avança progressivamente na transição subnacional.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500/90 dark:text-emerald-400/90 mt-0.5 shrink-0" />
                      <span>Substituição gradual de ICMS e ISS pelo IBS entre 2029 e 2032.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500/90 dark:text-emerald-400/90 mt-0.5 shrink-0" />
                      <span>Modelo integral e consolidado até 2033.</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* CAMADA 5: FECHAMENTO EXECUTIVO (Lembre-se) */}
              <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 rounded-xl px-4 py-2.5 sm:py-3 flex items-center gap-3 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <p className="text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-200 font-normal leading-relaxed">
                  <strong className="text-blue-950 dark:text-blue-300 font-black uppercase tracking-wider mr-1.5">LEMBRE-SE:</strong>
                  2026 é uma etapa de preparação. Os 0,9% de CBS e 0,1% de IBS são percentuais de teste — a entrada efetiva do novo modelo ocorre progressivamente a partir de 2027.
                </p>
              </div>

            </div>

            {/* BLOCO 02 — O QUE MUDA EM 2027? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4 sm:gap-4.5">
              <div className="flex flex-col gap-1.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    02. O QUE MUDA EM 2027?
                  </h4>
                </div>
                <h5 className="text-[17px] sm:text-[19px] font-black text-slate-900 dark:text-white uppercase tracking-tight leading-snug">
                  2027 É A PRIMEIRA GRANDE VIRADA OPERACIONAL DO NOVO SISTEMA
                </h5>
                <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  Na esfera federal, PIS e Cofins dão lugar à CBS. Já o IBS continua em implantação gradual, mantendo a transição dos tributos estaduais e municipais.
                </p>
              </div>

              {/* Fluxo Didático: O que sai / O que entra / O que continua */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-3 py-1">
                {/* O QUE SAI */}
                <div className="flex-1 w-full bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl py-3 px-3.5 flex flex-col items-center justify-center text-center">
                  <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-0.5">O QUE SAI</span>
                  <span className="text-[15px] sm:text-[16px] font-black text-slate-700 dark:text-slate-300 line-through decoration-slate-400/60 decoration-2">PIS + Cofins</span>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 rotate-90 md:rotate-0" />

                {/* O QUE ENTRA */}
                <div className="flex-1 w-full bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/50 rounded-xl py-3 px-3.5 flex flex-col items-center justify-center text-center shadow-2xs">
                  <span className="text-[11px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-0.5">O QUE ENTRA</span>
                  <span className="text-[15px] sm:text-[16px] font-black text-indigo-700 dark:text-indigo-300">CBS — Federal</span>
                </div>

                <div className="w-4 h-4 flex items-center justify-center text-slate-300 dark:text-slate-600 shrink-0 font-black text-lg">+</div>

                {/* O QUE CONTINUA */}
                <div className="flex-1 w-full bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-xl py-3 px-3.5 flex flex-col items-center justify-center text-center shadow-2xs">
                  <span className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-0.5">O QUE CONTINUA EM TRANSIÇÃO</span>
                  <span className="text-[15px] sm:text-[16px] font-black text-emerald-700 dark:text-emerald-300">IBS — Estados + Municípios</span>
                </div>
              </div>

              {/* Explicações (Duas Colunas) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-1">
                {/* CBS */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-[14px] sm:text-[15px] font-black text-indigo-950 dark:text-indigo-200 uppercase tracking-wide">CBS — Federal</span>
                  </div>
                  <div className="space-y-2.5 text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p><strong className="font-bold text-slate-900 dark:text-white">Substituição federal:</strong> PIS e Cofins deixam de ocupar o papel atual na tributação sobre o consumo.</p>
                    <p><strong className="font-bold text-slate-900 dark:text-white">Nova apuração:</strong> A empresa passa a operar a CBS dentro da nova sistemática de débitos e créditos.</p>
                    <p><strong className="font-bold text-slate-900 dark:text-white">Marco operacional:</strong> 2027 representa o início efetivo da nova cobrança federal sobre o consumo.</p>
                  </div>
                </div>

                {/* IBS */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-[14px] sm:text-[15px] font-black text-emerald-950 dark:text-emerald-200 uppercase tracking-wide">IBS — Transição</span>
                  </div>
                  <div className="space-y-2.5 text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p><strong className="font-bold text-slate-900 dark:text-white">Implantação gradual:</strong> O IBS não substitui ICMS e ISS integralmente em 2027.</p>
                    <p><strong className="font-bold text-slate-900 dark:text-white">Convivência durante a transição:</strong> Estados e municípios continuam operando dentro do cronograma de transição.</p>
                    <p><strong className="font-bold text-slate-900 dark:text-white">Mudança mais intensa a partir de 2029:</strong> A participação do IBS aumenta enquanto ICMS e ISS são reduzidos progressivamente.</p>
                  </div>
                </div>
              </div>

              {/* Faixa Pedagógica com Protagonismo: O que isso significa na prática */}
              <div className="bg-blue-50/70 dark:bg-blue-950/40 rounded-xl p-4 sm:p-5 border border-blue-200 dark:border-blue-900/60 flex items-start sm:items-center gap-3.5 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs mt-0.5 sm:mt-0">
                  <Info className="w-4.5 h-4.5" />
                </div>
                <div className="text-[14.5px] sm:text-[15.5px] text-blue-950 dark:text-blue-100 leading-relaxed font-normal">
                  <strong className="text-blue-900 dark:text-blue-300 font-black block sm:inline mr-1.5 uppercase tracking-wide">O QUE ISSO SIGNIFICA NA PRÁTICA?</strong>
                  A empresa passa a operar a nova CBS federal enquanto ainda convive com a transição dos tributos estaduais e municipais. Na prática, 2027 inaugura um período de convivência entre o novo e o antigo modelo.
                </div>
              </div>
            </div>

            {/* BLOCO 03 — COMO O VALOR A RECOLHER É CALCULADO? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col gap-3 sm:gap-3.5">
              
              {/* Header */}
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500"></span>
                  <h4 className="text-[19px] sm:text-[21px] md:text-[22px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    03. COMO O VALOR A RECOLHER É CALCULADO?
                  </h4>
                </div>
              </div>

              {/* Fluxo principal (VENDA -> COMPRAS -> APURAÇÃO -> RESULTADO) */}
              <div className="flex flex-col sm:flex-row items-stretch gap-1.5 sm:gap-2 justify-between">
                
                {/* Passo 1 - Venda */}
                <div className="flex-1 w-full min-h-[58px] sm:min-h-[62px] bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40 rounded-xl py-1.5 px-2 flex flex-col justify-center items-center text-center">
                  <span className="text-[13.5px] sm:text-[14.5px] font-black text-indigo-900 dark:text-indigo-200 uppercase tracking-wide leading-tight">
                    VENDA
                  </span>
                  <span className="text-[12px] sm:text-[12.5px] text-indigo-700 dark:text-indigo-300 font-medium leading-tight mt-0.5">
                    gera débito
                  </span>
                </div>

                <div className="hidden sm:flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                </div>
                <div className="flex sm:hidden justify-center my-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 rotate-90" />
                </div>

                {/* Passo 2 - Compras */}
                <div className="flex-1 w-full min-h-[58px] sm:min-h-[62px] bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40 rounded-xl py-1.5 px-2 flex flex-col justify-center items-center text-center">
                  <span className="text-[13.5px] sm:text-[14.5px] font-black text-teal-900 dark:text-teal-200 uppercase tracking-wide leading-tight">
                    COMPRAS
                  </span>
                  <span className="text-[12px] sm:text-[12.5px] text-teal-700 dark:text-teal-300 font-medium leading-tight mt-0.5">
                    geram créditos
                  </span>
                </div>

                <div className="hidden sm:flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                </div>
                <div className="flex sm:hidden justify-center my-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 rotate-90" />
                </div>

                {/* Passo 3 - Apuração */}
                <div className="flex-1 w-full min-h-[58px] sm:min-h-[62px] bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl py-1.5 px-2 flex flex-col justify-center items-center text-center">
                  <span className="text-[13.5px] sm:text-[14.5px] font-black text-slate-900 dark:text-white uppercase tracking-wide leading-tight">
                    APURAÇÃO
                  </span>
                  <span className="text-[12px] sm:text-[12.5px] text-slate-600 dark:text-slate-400 font-medium leading-tight mt-0.5">
                    débitos − créditos
                  </span>
                </div>

                <div className="hidden sm:flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                </div>
                <div className="flex sm:hidden justify-center my-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 rotate-90" />
                </div>

                {/* Passo 4 - Resultado */}
                <div className="flex-1 w-full min-h-[58px] sm:min-h-[62px] bg-violet-50/60 dark:bg-violet-950/40 border border-violet-300/80 dark:border-violet-800/60 rounded-xl py-1.5 px-2 flex flex-col justify-center items-center text-center shadow-xs">
                  <span className="text-[13.5px] sm:text-[14.5px] font-black text-violet-900 dark:text-violet-200 uppercase tracking-wide leading-tight">
                    RESULTADO
                  </span>
                  <span className="text-[12px] sm:text-[12.5px] text-violet-700 dark:text-violet-300 font-bold leading-tight mt-0.5">
                    valor a recolher
                  </span>
                </div>
              </div>

              {/* Explicação de Termos (Débito e Crédito) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-center gap-2.5 bg-indigo-50/30 dark:bg-indigo-950/10 py-2 px-3 rounded-xl border border-indigo-100/50 dark:border-indigo-900/20">
                  <span className="text-[11.5px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide bg-indigo-100/80 dark:bg-indigo-900/50 px-2 py-0.5 rounded shrink-0">Débito</span>
                  <span className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-snug font-normal">
                    Imposto gerado nas vendas da empresa.
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-teal-50/30 dark:bg-teal-950/10 py-2 px-3 rounded-xl border border-teal-100/50 dark:border-teal-900/20">
                  <span className="text-[11.5px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wide bg-teal-100/80 dark:bg-teal-900/50 px-2 py-0.5 rounded shrink-0">Crédito</span>
                  <span className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-snug font-normal">
                    Valor do imposto das compras que pode reduzir o valor a recolher, conforme as regras aplicáveis.
                  </span>
                </div>
              </div>

              {/* Fórmula Resumo */}
              <div className="flex flex-col sm:flex-row items-center justify-center py-1.5 px-3 bg-slate-50/60 dark:bg-slate-800/30 rounded-xl border border-slate-200/60 dark:border-slate-700/50 text-center">
                <span className="text-[11.5px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest sm:mr-2.5 mb-0.5 sm:mb-0">EM UMA FÓRMULA:</span>
                <span className="text-[14.5px] sm:text-[16px] font-black text-slate-800 dark:text-slate-100">
                  Débitos − Créditos = Valor a recolher
                </span>
              </div>

              {/* Exemplo Prático Visual */}
              <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 sm:p-3.5 flex flex-col gap-2 sm:gap-2.5">
                
                {/* Cabeçalho do exemplo */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-[13px] sm:text-[13.5px] font-black tracking-wider uppercase text-slate-800 dark:text-slate-200">
                    EXEMPLO PRÁTICO
                  </span>
                  <span className="text-[12px] text-slate-500 dark:text-slate-400 font-medium italic">
                    * Exemplo didático — não representa alíquota oficial.
                  </span>
                </div>

                {/* Comparação: Como é Hoje vs Novo Modelo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-xl py-2 px-3 flex flex-col justify-center gap-0.5 shadow-2xs">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">COMO É HOJE</span>
                    <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 leading-snug font-normal">
                      A apuração varia conforme o tributo e o regime aplicável, com regras diferentes de créditos e recolhimento ao longo da operação.
                    </p>
                  </div>
                  <div className="bg-teal-50/60 dark:bg-teal-950/20 border border-teal-100/80 dark:border-teal-900/40 rounded-xl py-2 px-3 flex flex-col justify-center gap-0.5 shadow-2xs">
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">COMO FICA NO NOVO MODELO</span>
                    <p className="text-[13px] sm:text-[13.5px] text-teal-800 dark:text-teal-200 leading-snug font-normal">
                      A empresa calcula os débitos gerados nas vendas, desconta os créditos aproveitáveis das compras e recolhe a diferença.
                    </p>
                  </div>
                </div>

                {/* Conta Visual */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full py-0.5">
                  
                  {/* Débito */}
                  <div className="flex flex-col items-center justify-center flex-1 w-full min-h-[58px] sm:min-h-[64px] bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/40 py-1.5 px-2.5 rounded-xl shadow-2xs text-center">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight mb-0.5">Débito nas vendas</span>
                    <span className="text-[18px] sm:text-[20px] font-black text-indigo-700 dark:text-indigo-400 leading-none">R$ 1.000</span>
                  </div>

                  <span className="font-black text-[20px] text-slate-300 dark:text-slate-600 shrink-0 self-center">−</span>

                  {/* Crédito */}
                  <div className="flex flex-col items-center justify-center flex-1 w-full min-h-[58px] sm:min-h-[64px] bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900/40 py-1.5 px-2.5 rounded-xl shadow-2xs text-center">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight mb-0.5">Créditos das compras</span>
                    <span className="text-[18px] sm:text-[20px] font-black text-teal-700 dark:text-teal-400 leading-none">R$ 600</span>
                  </div>

                  <span className="font-black text-[20px] text-slate-300 dark:text-slate-600 shrink-0 self-center">=</span>

                  {/* Resultado */}
                  <div className="flex flex-col items-center justify-center flex-1 w-full min-h-[58px] sm:min-h-[64px] bg-violet-50 dark:bg-violet-900/20 border-2 border-violet-200 dark:border-violet-800/50 py-1.5 px-2.5 rounded-xl shadow-sm text-center">
                    <span className="text-[11px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wide leading-tight mb-0.5">Valor a recolher</span>
                    <span className="text-[20px] sm:text-[22px] font-black text-violet-800 dark:text-violet-300 leading-none">R$ 400</span>
                  </div>

                </div>

                {/* Texto Explicativo da Conta */}
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 text-center font-normal leading-relaxed">
                  A empresa gerou R$ 1.000 em débitos nas vendas e possui R$ 600 em créditos aproveitáveis nas compras. Ao compensar os dois valores, recolhe R$ 400.
                </p>
              </div>

              {/* Em Termos Simples */}
              <div className="bg-blue-50/70 dark:bg-blue-950/40 rounded-xl py-2.5 px-3.5 sm:py-3 sm:px-4 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2.5 shadow-2xs">
                <strong className="text-[13px] sm:text-[13.5px] text-blue-900 dark:text-blue-300 font-black uppercase tracking-wide shrink-0">
                  EM TERMOS SIMPLES:
                </strong>
                <p className="text-[13.5px] sm:text-[14px] text-blue-950 dark:text-blue-100 leading-snug font-normal">
                  O novo modelo busca tornar a lógica de apuração mais uniforme, utilizando débitos das vendas menos créditos permitidos das compras.
                </p>
              </div>

            </div>

            {/* BLOCO 04 — COMO A COBRANÇA EVOLUI ATÉ 2033? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4 sm:gap-4.5">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                  <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    04. COMO A COBRANÇA EVOLUI ATÉ 2033?
                  </h4>
                </div>
                <span className="text-[12px] font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-900/50">
                  Cronograma Evolutivo
                </span>
              </div>

              {/* Linha evolutiva conectada, compacta e com leitura linear */}
              <div className="flex flex-col lg:flex-row items-stretch gap-2.5 lg:gap-2 pt-1">
                
                {/* 2026 - Preparação */}
                <div className="flex-1 bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3.5 flex flex-col gap-2">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[22px] sm:text-[24px] font-black text-slate-800 dark:text-slate-200 leading-none">2026</span>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-700/60 px-2 py-0.5 rounded">Fase 1</span>
                  </div>
                  <span className="text-[14.5px] sm:text-[15.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight">Teste e Adaptação</span>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal mt-auto pt-1">
                    CBS 0,9% + IBS 0,1% são usados para testar documentos, sistemas e rotinas antes da entrada efetiva do novo modelo.
                  </p>
                </div>

                <div className="hidden lg:flex items-center justify-center shrink-0 w-4">
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                </div>
                <div className="flex lg:hidden justify-center shrink-0 my-0.5">
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 rotate-90" />
                </div>

                {/* 2027 - Virada Operacional */}
                <div className="flex-1 bg-blue-50/60 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700/60 rounded-xl p-3.5 flex flex-col gap-2 shadow-sm relative">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[22px] sm:text-[24px] font-black text-blue-700 dark:text-blue-400 leading-none">2027</span>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 rounded">Virada Operacional</span>
                  </div>
                  <span className="text-[14.5px] sm:text-[15.5px] font-black text-blue-900 dark:text-blue-100 uppercase tracking-tight">Entrada da CBS</span>
                  <p className="text-[13.5px] sm:text-[14.5px] text-blue-800 dark:text-blue-200 leading-relaxed font-normal mt-auto pt-1">
                    PIS e Cofins são substituídos pela CBS, iniciando a cobrança efetiva do novo tributo federal sobre o consumo.
                  </p>
                </div>

                <div className="hidden lg:flex items-center justify-center shrink-0 w-4">
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                </div>
                <div className="flex lg:hidden justify-center shrink-0 my-0.5">
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 rotate-90" />
                </div>

                {/* 2029–2032 - Transição */}
                <div className="flex-1 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/50 rounded-xl p-3.5 flex flex-col gap-2">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[22px] sm:text-[24px] font-black text-indigo-700 dark:text-indigo-400 leading-none">2029–32</span>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-100/60 dark:bg-indigo-900/40 px-2 py-0.5 rounded">Fase 3</span>
                  </div>
                  <span className="text-[14.5px] sm:text-[15.5px] font-black text-indigo-950 dark:text-indigo-100 uppercase tracking-tight">Transição do IBS</span>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-auto pt-1">
                    O IBS aumenta gradualmente enquanto ICMS e ISS são reduzidos ao longo da transição.
                  </p>
                </div>

                <div className="hidden lg:flex items-center justify-center shrink-0 w-4">
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                </div>
                <div className="flex lg:hidden justify-center shrink-0 my-0.5">
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 rotate-90" />
                </div>

                {/* 2033 - Conclusão */}
                <div className="flex-1 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 rounded-xl p-3.5 flex flex-col gap-2">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[22px] sm:text-[24px] font-black text-emerald-700 dark:text-emerald-400 leading-none">2033</span>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-900/40 px-2 py-0.5 rounded">Fase 4</span>
                  </div>
                  <span className="text-[14.5px] sm:text-[15.5px] font-black text-emerald-950 dark:text-emerald-100 uppercase tracking-tight">Modelo Integral</span>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-auto pt-1">
                    A transição é concluída e CBS + IBS passam a operar plenamente como a nova estrutura de tributação sobre o consumo.
                  </p>
                </div>

              </div>
            </div>

            {/* BLOCO FINAL — EM RESUMO EXECUTIVO */}
            <div className="w-full bg-[#eff6ff] dark:bg-blue-950/30 border border-[#bfdbfe] dark:border-blue-900/60 rounded-2xl py-3 px-4 sm:px-5 flex items-center gap-3.5 shadow-2xs">
              <div className="w-7 h-7 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Star className="w-4 h-4 fill-white" />
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                <strong className="text-[#1d4ed8] dark:text-blue-400 font-bold uppercase text-[13px] sm:text-[14px] tracking-wider mr-1.5">
                  Em resumo:
                </strong>
                2026 prepara a operação, 2027 inaugura a CBS, 2029–2032 consolida a transição do IBS e 2033 conclui a mudança para o novo modelo.
              </p>
            </div>

          </div>
        )}

{/* SPLIT PAYMENT */}
        {activeTopic === 'split-payment' && (
          <div className="flex flex-col bg-[#f8fafc] dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 gap-3 sm:gap-4 shadow-xs">
            
            {/* 1. CABEÇALHO / HERO DA SEÇÃO */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shrink-0 shadow-2xs">
                    <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-[30px] sm:text-[34px] font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1">
                      SPLIT PAYMENT
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
                      Entenda como a separação automática de CBS e IBS pode mudar o fluxo de pagamento, recolhimento e conciliação das empresas.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex items-center self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg text-[12px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                    <FileCheck className="w-3.5 h-3.5 text-indigo-500" />
                    Pagamento + Tributação
                  </span>
                </div>
              </div>

              {/* FAIXA LEITURA RÁPIDA */}
              <div className="mt-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 z-10">
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-200/80 dark:bg-slate-700/80 px-2.5 py-0.5 rounded shrink-0">
                  LEITURA RÁPIDA
                </span>
                <div className="flex flex-wrap items-center gap-2 text-[13px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300">
                  <span className="font-bold">Pagamento</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-bold">Tributação</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-bold">Caixa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-bold">Sistemas</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-bold">Conciliação</span>
                </div>
              </div>
            </div>

            {/* BLOCO 01 — O QUE É SPLIT PAYMENT? */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs relative overflow-hidden">
              
              {/* COLUNA ESQUERDA - TEXTOS (40-42%) */}
              <div className="flex flex-col justify-start w-full lg:w-[42%] relative z-10">
                
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                  <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-slate-900 dark:text-white uppercase tracking-tight">01. O QUE É SPLIT PAYMENT?</h4>
                </div>
                
                <hr className="border-slate-100 dark:border-slate-800/80 mb-3.5" />

                <h3 className="text-[17px] sm:text-[19px] font-black text-indigo-900 dark:text-indigo-300 uppercase tracking-tight leading-snug mb-3">
                  O TRIBUTO PASSA A SER SEPARADO<br className="hidden sm:block" /> NO PRÓPRIO FLUXO DO PAGAMENTO
                </h3>
                
                <p className="text-[14.5px] sm:text-[15.5px] font-normal text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  No Split Payment, o valor pago pelo cliente é dividido no próprio fluxo da operação: uma parte segue para o fornecedor e outra corresponde à parcela de CBS e IBS.
                </p>

                {/* Microbloco "Em termos simples" */}
                <div className="bg-indigo-50/50 dark:bg-indigo-900/20 border-l-[3px] border-indigo-500 rounded-r-xl p-3.5 sm:p-4 mb-4">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider text-[11.5px] block mb-1">EM TERMOS SIMPLES</span>
                  <p className="text-[14px] sm:text-[14.5px] font-normal text-slate-800 dark:text-slate-200 leading-relaxed">
                    O dinheiro da venda não segue inteiro pelo mesmo caminho — a parcela do tributo é separada no próprio pagamento.
                  </p>
                </div>

                {/* Nota explicativa */}
                <div className="mt-auto">
                  <div className="flex items-start gap-2.5 text-slate-500 dark:text-slate-400 bg-slate-50/70 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                    <Info className="w-4 h-4 mt-0.5 shrink-0 text-slate-400 dark:text-slate-500" />
                    <p className="text-[13px] sm:text-[13.5px] leading-relaxed font-normal">
                      A separação do tributo no fluxo financeiro <strong className="font-bold text-slate-700 dark:text-slate-200">não representa um novo imposto adicional</strong> — ela altera a forma como o recolhimento acontece na operação.
                    </p>
                  </div>
                </div>
              </div>

              {/* COLUNA DIREITA - FLUXOGRAMA (58-60%) */}
              <div className="w-full lg:w-[58%] bg-[#f8fafc] dark:bg-slate-800/30 rounded-xl border border-slate-200/80 dark:border-slate-700/60 p-5 sm:p-7 flex flex-col items-center relative z-10 justify-center">
                
                {/* 1. Cliente */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-6 py-3.5 shadow-sm text-center flex items-center justify-center gap-3 z-10 min-w-[220px]">
                  <UserCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-[15px] sm:text-[16px] font-black text-slate-900 dark:text-white uppercase tracking-wide">CLIENTE PAGA</span>
                </div>
                
                <div className="w-px h-6 sm:h-8 bg-slate-300 dark:bg-slate-600"></div>
                
                {/* 2. Processamento */}
                <div className="bg-indigo-50/80 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/60 rounded-xl px-6 py-4 text-center flex items-center justify-center gap-3 z-10 shadow-sm w-full max-w-[420px]">
                  <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="text-[14px] sm:text-[15px] font-black text-indigo-800 dark:text-indigo-300 uppercase tracking-wider leading-tight">
                    PAGAMENTO É PROCESSADO E DIVIDIDO
                  </span>
                </div>

                {/* Conectores e Setas (Bifurcação) */}
                <div className="w-full max-w-[420px] relative mt-[-1px] z-0">
                  {/* Linha vertical central descendo do card */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-5 bg-slate-300 dark:bg-slate-600"></div>
                  
                  {/* Linha horizontal conectando as duas descidas */}
                  <div className="absolute top-5 left-[25%] right-[25%] h-px bg-slate-300 dark:bg-slate-600"></div>
                  
                  {/* Linha vertical esquerda */}
                  <div className="absolute top-5 left-[25%] w-px h-5 bg-slate-300 dark:bg-slate-600 flex justify-center">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-slate-300 dark:text-slate-600 absolute bottom-[-4px]">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Linha vertical direita */}
                  <div className="absolute top-5 right-[25%] w-px h-5 bg-slate-300 dark:bg-slate-600 flex justify-center">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-slate-300 dark:text-slate-600 absolute bottom-[-4px]">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                {/* 3 e 4. Destinos */}
                <div className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mt-10 z-10 max-w-[500px]">
                  {/* Fornecedor */}
                  <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-4 sm:py-5 px-4 shadow-sm flex items-start sm:items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-50/80 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800/50 flex items-center justify-center shrink-0">
                      <Store className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[14px] sm:text-[15px] font-black text-slate-800 dark:text-slate-200 uppercase leading-tight mb-1 tracking-wide">FORNECEDOR</span>
                      <span className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-snug">
                        Recebe o valor líquido da operação
                      </span>
                    </div>
                  </div>
                  
                  {/* Tributo */}
                  <div className="flex-1 bg-white dark:bg-slate-900 border border-teal-200/80 dark:border-teal-800/50 rounded-xl py-4 sm:py-5 px-4 shadow-sm flex items-start sm:items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center shrink-0">
                      <Target className="w-4.5 h-4.5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[15px] sm:text-[16px] font-black text-teal-700 dark:text-teal-400 uppercase leading-tight mb-1 tracking-wide">CBS / IBS</span>
                      <span className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-snug">
                        A parcela tributária segue separada no fluxo
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-6 sm:mt-8 relative">
                   <div className="w-full border-t border-dashed border-slate-300/80 dark:border-slate-600/80"></div>
                   <div className="flex justify-center mt-3">
                     <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                       <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                       <span className="text-[14px] sm:text-[14.5px] font-medium">Fluxo dividido no momento do pagamento</span>
                     </div>
                   </div>
                </div>

              </div>
            </div>

            {/* BLOCO 02 — COMO A OPERAÇÃO ACONTECE NA PRÁTICA? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4 sm:gap-4.5">
              
              {/* CABEÇALHO */}
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center shrink-0">
                    <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      02. COMO A OPERAÇÃO ACONTECE NA PRÁTICA?
                    </h4>
                    <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                      Da venda ao recebimento: veja como documento fiscal, pagamento, segregação e conciliação se conectam dentro da operação.
                    </p>
                  </div>
                </div>
                <hr className="border-slate-100 dark:border-slate-800 mt-1" />
              </div>

              {/* FLUXOGRAMA COMPLETO (GRADE HORIZONTAL STRICT) */}
              <div className="flex flex-col xl:flex-row items-stretch gap-2 w-full">
                
                {/* FASE A */}
                <div className="flex-[28] flex flex-col gap-0 w-full">
                  <div className="flex items-center w-full h-4 mb-2">
                    <div className="h-px bg-blue-600 flex-1 opacity-40"></div>
                    <span className="text-[11.5px] font-extrabold text-blue-600 uppercase tracking-widest px-2.5 whitespace-nowrap">FASE A — ORIGEM DA OPERAÇÃO</span>
                    <div className="h-px bg-blue-600 flex-1 opacity-40"></div>
                  </div>
                  <div className="flex-1 flex flex-col xl:flex-row items-stretch gap-2 w-full">
                    {/* 1 */}
                    <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1 shrink-0">1</div>
                      <Handshake className="w-5 h-5 text-slate-500 mb-1 shrink-0" />
                      <span className="text-[14px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">OPERAÇÃO<br/>REALIZADA</span>
                      <span className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed w-full">A empresa realiza uma venda ou prestação de serviço.</span>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                    </div>
                    {/* 2 */}
                    <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1 shrink-0">2</div>
                      <FileText className="w-5 h-5 text-slate-500 mb-1 shrink-0" />
                      <span className="text-[14px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">DOCUMENTO<br/>FISCAL</span>
                      <span className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed w-full">A operação é registrada e as informações tributárias de CBS e IBS ficam associadas à transação.</span>
                    </div>
                  </div>
                </div>

                {/* Arrow A -> B */}
                <div className="flex flex-col shrink-0">
                  <div className="hidden xl:block h-4 mb-2 w-full"></div>
                  <div className="flex-1 flex items-center justify-center py-1.5 xl:py-0">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                  </div>
                </div>

                {/* FASE B */}
                <div className="flex-[32] flex flex-col gap-0 w-full">
                  <div className="flex items-center w-full h-4 mb-2">
                    <div className="h-px bg-indigo-600 flex-1 opacity-40"></div>
                    <span className="text-[11.5px] font-extrabold text-indigo-600 uppercase tracking-widest px-2.5 whitespace-nowrap">FASE B — PROCESSAMENTO</span>
                    <div className="h-px bg-indigo-600 flex-1 opacity-40"></div>
                  </div>
                  <div className="flex-1 flex flex-col xl:flex-row items-stretch gap-2 w-full">
                    {/* 3 */}
                    <div className="flex-[45] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1 shrink-0">3</div>
                      <CreditCard className="w-5 h-5 text-slate-500 mb-1 shrink-0" />
                      <span className="text-[14px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">CLIENTE REALIZA<br/>O PAGAMENTO</span>
                      <span className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed w-full">O pagamento é iniciado pelo meio utilizado na transação.</span>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                    </div>
                    {/* 4 */}
                    <div className="flex-[55] bg-indigo-50/40 dark:bg-indigo-900/10 border-2 border-indigo-400/80 dark:border-indigo-500 rounded-xl p-3 flex flex-col items-center justify-start text-center shadow-sm w-full h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-indigo-50/30 dark:bg-indigo-900/10 pointer-events-none"></div>
                      <div className="w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-[12px] font-bold text-white mb-1 shrink-0 relative z-10">4</div>
                      <Filter className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-1 shrink-0 relative z-10" />
                      <span className="text-[14.5px] sm:text-[15.5px] font-black text-indigo-800 dark:text-indigo-300 uppercase leading-tight mb-1 shrink-0 relative z-10">CBS / IBS SÃO IDENTIFICADOS<br/>E SEGREGADOS</span>
                      <span className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed relative z-10 w-full">O sistema identifica a parcela tributária e a separa dentro do fluxo financeiro da operação.</span>
                    </div>
                  </div>
                </div>

                {/* Arrow B -> C */}
                <div className="flex flex-col shrink-0">
                  <div className="hidden xl:block h-4 mb-2 w-full"></div>
                  <div className="flex-1 flex items-center justify-center py-1.5 xl:py-0">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                  </div>
                </div>

                {/* FASE C */}
                <div className="flex-[40] flex flex-col gap-0 w-full">
                  <div className="flex items-center w-full h-4 mb-2">
                    <div className="h-px bg-teal-500 flex-1 opacity-40"></div>
                    <span className="text-[11.5px] font-extrabold text-teal-600 dark:text-teal-500 uppercase tracking-widest px-2.5 whitespace-nowrap">FASE C — FINALIZAÇÃO</span>
                    <div className="h-px bg-teal-500 flex-1 opacity-40"></div>
                  </div>
                  <div className="flex-1 flex flex-col xl:flex-row items-stretch gap-2 w-full">
                    {/* 5 */}
                    <div className="flex-[60] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1 shrink-0">5</div>
                      <span className="text-[14px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">OS VALORES SEGUEM<br/>SEUS DESTINOS</span>
                      
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 my-0.5 shrink-0" />

                      <div className="w-full flex flex-col gap-1.5 mt-auto">
                        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-2 w-full text-left flex flex-col justify-center">
                          <span className="text-[12px] font-black text-blue-800 dark:text-blue-400 uppercase tracking-wide mb-0.5">FORNECEDOR</span>
                          <span className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug font-normal">Recebe o valor da operação após a segregação.</span>
                        </div>
                        <div className="bg-teal-50/40 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/50 rounded-lg p-2 w-full text-left flex flex-col justify-center">
                          <span className="text-[12px] font-black text-teal-800 dark:text-teal-400 uppercase tracking-wide mb-0.5">CBS / IBS</span>
                          <span className="text-[12px] text-teal-700 dark:text-teal-300 leading-snug font-normal">Parcela tributária segue separada no mecanismo.</span>
                        </div>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 rotate-90 xl:rotate-0" />
                    </div>
                    {/* 6 */}
                    <div className="flex-[40] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex flex-col items-center justify-start text-center shadow-sm w-full h-full">
                      <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1 shrink-0">6</div>
                      <FileCheck className="w-5 h-5 text-slate-500 mb-1 shrink-0" />
                      <span className="text-[14px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight mb-1 shrink-0">CONCILIAÇÃO<br/>DA OPERAÇÃO</span>
                      <span className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed w-full">A empresa relaciona documento fiscal, pagamento, valor recebido e parcela tributária segregada.</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* CONCLUSÃO BASTIDORES */}
              <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center">
                    <Settings className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-[14px] sm:text-[15px] font-black text-blue-800 dark:text-blue-300 uppercase tracking-wide">
                    O QUE ACONTECE NOS BASTIDORES?
                  </span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-slate-300 dark:bg-slate-600"></div>
                <p className="text-[14px] sm:text-[14.5px] font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                  Documento fiscal, pagamento e informações tributárias precisam estar conectados para que a segregação e a conciliação ocorram corretamente.
                </p>
              </div>

            </div>

            {/* BLOCO 03 — NA PRÁTICA, O QUE MUDA EM RELAÇÃO AO MODELO ATUAL? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
              
              {/* Header */}
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                    <ArrowLeftRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      03. NA PRÁTICA, O QUE MUDA EM RELAÇÃO AO MODELO ATUAL?
                    </h4>
                    <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                      Compare como o Split Payment altera o momento do recolhimento, o recebimento financeiro e a integração entre pagamento e tributação.
                    </p>
                  </div>
                </div>
                <hr className="border-slate-100 dark:border-slate-800 mt-1" />
              </div>

              {/* MATRIZ COMPARATIVA (SINGLE COMPONENT) */}
              <div className="flex flex-col gap-2.5 w-full mt-1">
                
                {/* Cabeçalho da Matriz */}
                <div className="hidden md:flex items-center w-full px-1 pb-1">
                  <div className="w-[26%] shrink-0 pl-1">
                    <span className="text-[11.5px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">DIMENSÃO ANALISADA</span>
                  </div>
                  <div className="w-[37%] shrink-0 pl-3">
                    <span className="text-[11.5px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                  </div>
                  <div className="w-[37%] shrink-0 pl-3">
                    <span className="text-[11.5px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                  </div>
                </div>

                {/* Linha 1 */}
                <div className="flex flex-col md:flex-row items-stretch w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden shadow-2xs">
                  {/* Tema (26%) */}
                  <div className="md:w-[26%] shrink-0 flex items-center gap-3 p-3 bg-white dark:bg-[#111827] border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[13px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight">MOMENTO DO<br/>RECOLHIMENTO</span>
                      <span className="text-[11.5px] text-slate-500 dark:text-slate-400 font-normal mt-0.5 leading-tight">Quando o tributo é direcionado.</span>
                    </div>
                  </div>
                  {/* Comparativo (74%) */}
                  <div className="flex-1 flex flex-col md:flex-row items-stretch relative">
                    {/* Hoje */}
                    <div className="flex-1 flex flex-col justify-center p-3.5 md:pr-6 bg-slate-50/70 dark:bg-slate-800/30">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                      </div>
                      <span className="text-[14px] sm:text-[14.5px] font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                        O fornecedor recebe a operação e o recolhimento tributário ocorre posteriormente, conforme as regras aplicáveis.
                      </span>
                    </div>
                    {/* Arrow Divider */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -ml-3.5 items-center justify-center w-7 z-10">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      </div>
                    </div>
                    {/* Split */}
                    <div className="flex-1 flex flex-col justify-center p-3.5 md:pl-6 bg-indigo-50/60 dark:bg-indigo-900/15">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                      </div>
                      <span className="text-[14px] sm:text-[14.5px] font-medium text-indigo-950 dark:text-indigo-200 leading-relaxed">
                        A parcela de CBS/IBS é segregada dentro do próprio fluxo do pagamento.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Linha 2 */}
                <div className="flex flex-col md:flex-row items-stretch w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden shadow-2xs">
                  {/* Tema (26%) */}
                  <div className="md:w-[26%] shrink-0 flex items-center gap-3 p-3 bg-white dark:bg-[#111827] border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <Wallet className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[13px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight">VALOR RECEBIDO<br/>PELO FORNECEDOR</span>
                      <span className="text-[11.5px] text-slate-500 dark:text-slate-400 font-normal mt-0.5 leading-tight">Como o dinheiro chega à empresa.</span>
                    </div>
                  </div>
                  {/* Comparativo (74%) */}
                  <div className="flex-1 flex flex-col md:flex-row items-stretch relative">
                    {/* Hoje */}
                    <div className="flex-1 flex flex-col justify-center p-3.5 md:pr-6 bg-slate-50/70 dark:bg-slate-800/30">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                      </div>
                      <span className="text-[14px] sm:text-[14.5px] font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                        O valor da operação transita pelo recebimento da empresa antes do recolhimento posterior dos tributos aplicáveis.
                      </span>
                    </div>
                    {/* Arrow Divider */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -ml-3.5 items-center justify-center w-7 z-10">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      </div>
                    </div>
                    {/* Split */}
                    <div className="flex-1 flex flex-col justify-center p-3.5 md:pl-6 bg-indigo-50/60 dark:bg-indigo-900/15">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                      </div>
                      <span className="text-[14px] sm:text-[14.5px] font-medium text-indigo-950 dark:text-indigo-200 leading-relaxed">
                        O fornecedor recebe o valor correspondente à operação após a segregação da parcela tributária.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Linha 3 */}
                <div className="flex flex-col md:flex-row items-stretch w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden shadow-2xs">
                  {/* Tema (26%) */}
                  <div className="md:w-[26%] shrink-0 flex items-center gap-3 p-3 bg-white dark:bg-[#111827] border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <Link2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[13px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight">PAGAMENTO ×<br/>TRIBUTAÇÃO</span>
                      <span className="text-[11.5px] text-slate-500 dark:text-slate-400 font-normal mt-0.5 leading-tight">Quão conectadas estão as etapas.</span>
                    </div>
                  </div>
                  {/* Comparativo (74%) */}
                  <div className="flex-1 flex flex-col md:flex-row items-stretch relative">
                    {/* Hoje */}
                    <div className="flex-1 flex flex-col justify-center p-3.5 md:pr-6 bg-slate-50/70 dark:bg-slate-800/30">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                      </div>
                      <span className="text-[14px] sm:text-[14.5px] font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                        Pagamento e recolhimento tributário ocorrem como etapas mais separadas dentro da operação.
                      </span>
                    </div>
                    {/* Arrow Divider */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -ml-3.5 items-center justify-center w-7 z-10">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      </div>
                    </div>
                    {/* Split */}
                    <div className="flex-1 flex flex-col justify-center p-3.5 md:pl-6 bg-indigo-50/60 dark:bg-indigo-900/15">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                      </div>
                      <span className="text-[14px] sm:text-[14.5px] font-medium text-indigo-950 dark:text-indigo-200 leading-relaxed">
                        Pagamento e recolhimento passam a ficar mais diretamente conectados no mesmo fluxo.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Linha 4 */}
                <div className="flex flex-col md:flex-row items-stretch w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden shadow-2xs">
                  {/* Tema (26%) */}
                  <div className="md:w-[26%] shrink-0 flex items-center gap-3 p-3 bg-white dark:bg-[#111827] border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                      <ListChecks className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[13px] font-black text-slate-800 dark:text-slate-100 uppercase leading-tight">CONTROLE DA<br/>OPERAÇÃO</span>
                      <span className="text-[11.5px] text-slate-500 dark:text-slate-400 font-normal mt-0.5 leading-tight">O que precisa ser conciliado.</span>
                    </div>
                  </div>
                  {/* Comparativo (74%) */}
                  <div className="flex-1 flex flex-col md:flex-row items-stretch relative">
                    {/* Hoje */}
                    <div className="flex-1 flex flex-col justify-center p-3.5 md:pr-6 bg-slate-50/70 dark:bg-slate-800/30">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">COMO FUNCIONA HOJE</span>
                      </div>
                      <span className="text-[14px] sm:text-[14.5px] font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                        Financeiro e fiscal conciliam pagamentos, recebimentos e tributos de acordo com suas rotinas atuais.
                      </span>
                    </div>
                    {/* Arrow Divider */}
                    <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -ml-3.5 items-center justify-center w-7 z-10">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      </div>
                    </div>
                    {/* Split */}
                    <div className="flex-1 flex flex-col justify-center p-3.5 md:pl-6 bg-indigo-50/60 dark:bg-indigo-900/15">
                      <div className="md:hidden flex items-center mb-1.5">
                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">COM SPLIT PAYMENT</span>
                      </div>
                      <span className="text-[14px] sm:text-[14.5px] font-medium text-indigo-950 dark:text-indigo-200 leading-relaxed">
                        Documento fiscal, pagamento, valor recebido e parcela tributária segregada precisam estar mais integrados para a conciliação da operação.
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Faixa Principal Mudança (Substituindo a antiga) */}
              <div className="mt-1 bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-xl px-4 py-3 flex flex-col md:flex-row items-start md:items-center gap-3 w-full">
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-800/60 flex items-center justify-center border border-indigo-200 dark:border-indigo-700/50">
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-300" />
                  </div>
                  <span className="text-[12px] font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                    PRINCIPAL MUDANÇA
                  </span>
                </div>
                <div className="hidden md:block w-px h-6 bg-indigo-200 dark:bg-indigo-800/80"></div>
                <p className="text-[14.5px] sm:text-[15.5px] font-medium text-indigo-950 dark:text-indigo-100 leading-relaxed">
                  O Split Payment aproxima o recolhimento de CBS e IBS do momento do pagamento, conectando de forma mais direta o fluxo financeiro e tributário da operação.
                </p>
              </div>

            </div>

            {/* BLOCO 04 — O QUE MUDA PARA A EMPRESA? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  04. O QUE MUDA PARA A EMPRESA?
                </h4>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-1">
                {/* Impacto Financeiro */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                      <BarChart3 className="w-4.5 h-4.5 text-orange-600 dark:text-orange-500" />
                    </div>
                    <h5 className="text-[15px] sm:text-[16px] font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">Impacto Financeiro</h5>
                  </div>
                  <span className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 font-semibold block border-b border-slate-200 dark:border-slate-700/80 pb-2 mb-2 leading-snug">
                    O jeito como o dinheiro entra na empresa pode mudar com o Split Payment.
                  </span>
                  <ul className="flex flex-col gap-2.5 text-[14px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 font-normal">
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Quanto a empresa recebe:</strong> hoje, em muitos casos, o valor da venda entra primeiro na empresa e o tributo é recolhido depois. Com o Split Payment, uma parte desse valor pode ser separada antes, de forma que a empresa receba apenas o valor líquido da operação.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Quando o dinheiro entra no caixa:</strong> além de mudar o valor recebido, a empresa também pode precisar acompanhar com mais atenção o momento em que o dinheiro entra e como ele aparece nos controles financeiros.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Planejamento do caixa:</strong> se a empresa passar a receber um valor líquido já descontado da parcela do tributo, isso pode exigir mais atenção no planejamento de pagamentos, compras e compromissos do dia a dia.</span>
                    </li>
                  </ul>
                </div>

                {/* Impacto Operacional */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                      <Settings className="w-4.5 h-4.5 text-blue-600 dark:text-blue-500" />
                    </div>
                    <h5 className="text-[15px] sm:text-[16px] font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">Impacto Operacional</h5>
                  </div>
                  <span className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 font-semibold block border-b border-slate-200 dark:border-slate-700/80 pb-2 mb-2 leading-snug">
                    Receber, conferir e dar baixa nos pagamentos passa a exigir novas rotinas.
                  </span>
                  <ul className="flex flex-col gap-2.5 text-[14px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 font-normal">
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Conciliação:</strong> será preciso conferir se o valor recebido, o valor da venda e o tributo separado estão corretos.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Contas a receber:</strong> a baixa da venda precisa considerar que uma parte do pagamento pode seguir diretamente para o recolhimento do tributo.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Identificação dos valores:</strong> a empresa precisa conseguir enxergar claramente quanto recebeu e quanto foi separado como CBS/IBS.</span>
                    </li>
                  </ul>
                </div>

                {/* Sistemas & Integrações */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                      <Monitor className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h5 className="text-[15px] sm:text-[16px] font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">Sistemas & Integrações</h5>
                  </div>
                  <span className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 font-semibold block border-b border-slate-200 dark:border-slate-700/80 pb-2 mb-2 leading-snug">
                    Os sistemas fiscal e financeiro precisam trocar informações de forma integrada.
                  </span>
                  <ul className="flex flex-col gap-2.5 text-[14px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 font-normal">
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">ERP:</strong> os sistemas precisam reconhecer o valor total da venda, o tributo separado e o valor efetivamente recebido.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Meios de pagamento:</strong> cartões, Pix e outros meios precisam estar integrados às informações necessárias para o processamento da operação.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Integração de dados:</strong> nota fiscal, pagamento e informações tributárias precisam estar conectados para evitar divergências na conciliação.</span>
                    </li>
                  </ul>
                </div>

                {/* Impacto Tributário */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm shrink-0">
                      <FileText className="w-4.5 h-4.5 text-teal-600 dark:text-teal-500" />
                    </div>
                    <h5 className="text-[15px] sm:text-[16px] font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">Impacto Tributário</h5>
                  </div>
                  <span className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 font-semibold block border-b border-slate-200 dark:border-slate-700/80 pb-2 mb-2 leading-snug">
                    O recolhimento do tributo fica mais conectado ao próprio pagamento.
                  </span>
                  <ul className="flex flex-col gap-2.5 text-[14px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 font-normal">
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Acompanhamento:</strong> a empresa precisa saber quais valores de CBS/IBS já foram separados e recolhidos em cada operação.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Créditos tributários:</strong> será necessário acompanhar corretamente os créditos associados às compras e operações realizadas.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 mt-[5px] shrink-0" />
                      <span><strong className="font-bold text-slate-900 dark:text-slate-100">Validação:</strong> documento fiscal, pagamento, valor recebido e tributo segregado precisam estar coerentes para que a apuração funcione corretamente.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Faixa Resumo */}
              <div className="mt-1 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 w-full">
                <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center shrink-0 shadow-sm mt-0.5 sm:mt-0">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                </div>
                <p className="text-[14px] sm:text-[15px] font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="font-black text-slate-900 dark:text-slate-100 uppercase text-[12px] tracking-wider mr-1.5">Em síntese:</strong> 
                  o Split Payment não muda apenas a forma de pagar o imposto. Ele também pode mudar quanto entra no <strong className="font-bold text-slate-900 dark:text-slate-100">caixa</strong>, como os <strong className="font-bold text-slate-900 dark:text-slate-100">pagamentos</strong> são conferidos, como os <strong className="font-bold text-slate-900 dark:text-slate-100">sistemas</strong> se comunicam e como os <strong className="font-bold text-slate-900 dark:text-slate-100">tributos</strong> são controlados.
                </p>
              </div>

            </div>

                      </div>
        )}
        
        {/* CONTEÚDO DINÂMICO DO TEMA: IPI */}
        {activeTopic === 'ipi' && (
          <div className="flex flex-col bg-[#f8fafc] dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 gap-4 sm:gap-5 shadow-xs">
            
            {/* 1. CABEÇALHO / HERO DA SEÇÃO */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center shrink-0 shadow-2xs">
                    <Factory className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-[28px] sm:text-[32px] md:text-[34px] font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight mb-1">
                      IPI
                    </h3>
                    <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                      Entenda como a Reforma Tributária altera o papel do IPI, quais tratamentos permanecem relevantes e onde as empresas precisam concentrar atenção.
                    </p>
                  </div>
                </div>
                
                {/* Badge lateral */}
                <div className="flex shrink-0">
                  <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                    <Building2 className="w-4 h-4 text-blue-500" />
                    <span className="text-[11.5px] font-black text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                      INDÚSTRIA + TRIBUTAÇÃO
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2.5">
                <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shrink-0">
                  LEITURA RÁPIDA
                </span>
                <p className="text-[13.5px] sm:text-[14px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
                  Regra geral → O que muda na prática → Impactos para as empresas
                </p>
              </div>
            </div>

            {/* BLOCO 01 — O QUE ACONTECE COM O IPI? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-4">
              
              <div className="flex flex-col xl:flex-row gap-5 items-stretch">
                {/* Lado Esquerdo - Mensagem Principal */}
                <div className="flex-1 xl:max-w-[46%] flex flex-col justify-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md">
                      01.
                    </span>
                    <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      O QUE ACONTECE COM O IPI?
                    </h4>
                  </div>
                  
                  <h5 className="text-[16px] sm:text-[17.5px] font-black text-slate-900 dark:text-slate-100 leading-snug uppercase tracking-tight">
                    A PARTIR DE 2027, O IPI DEIXA DE SER COBRADO COMO REGRA GERAL PARA A MAIOR PARTE DOS PRODUTOS
                  </h5>
                  
                  <p className="text-[14.5px] sm:text-[15px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                    Hoje, o IPI é um imposto aplicado a produtos industrializados. Com a Reforma Tributária, a regra geral muda: a partir de 2027, a alíquota do IPI será reduzida a zero para a maior parte dos produtos. Isso não significa, porém, que todas as empresas poderão simplesmente deixar de olhar para o imposto, porque ainda existem situações específicas que precisam ser verificadas.
                  </p>
                  
                  <div className="bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-xl p-3 sm:p-3.5 mt-0.5">
                    <span className="block text-[11.5px] font-black text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-1">
                      EM TERMOS SIMPLES
                    </span>
                    <p className="text-[14px] sm:text-[14.5px] text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                      Para a maioria dos produtos, a empresa deixará de calcular valor de IPI a pagar. Mas antes de aplicar essa regra, será necessário confirmar se o produto está realmente dentro da regra geral.
                    </p>
                  </div>
                </div>

                {/* Lado Direito - Comparação Visual Direta e Equilibrada */}
                <div className="flex-[1.2] flex flex-col justify-center bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-xl p-3.5 sm:p-4">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full h-full min-h-[170px]">
                    {/* Card 1: HOJE */}
                    <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-xs flex flex-col justify-center">
                      <span className="text-[11.5px] font-black text-slate-500 uppercase tracking-widest mb-1.5">HOJE</span>
                      <h6 className="text-[15px] sm:text-[16px] font-black text-slate-900 dark:text-slate-100 leading-snug mb-1.5">
                        IPI é cobrado sobre produtos industrializados
                      </h6>
                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                        A empresa verifica a classificação do produto e aplica a alíquota correspondente.
                      </p>
                    </div>

                    {/* Seta de Transição */}
                    <div className="flex items-center justify-center py-1 sm:py-0 shrink-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-700 dark:text-cyan-300 shadow-2xs">
                        <ArrowRight className="w-4 h-4 rotate-90 sm:rotate-0" />
                      </div>
                    </div>

                    {/* Card 2: A PARTIR DE 2027 */}
                    <div className="flex-1 bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900/50 rounded-xl p-4 shadow-xs flex flex-col justify-center">
                      <span className="text-[11.5px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-1.5">A PARTIR DE 2027</span>
                      <h6 className="text-[15px] sm:text-[16px] font-black text-cyan-950 dark:text-cyan-200 leading-snug mb-1.5">
                        Regra geral: IPI com alíquota zero
                      </h6>
                      <p className="text-[13.5px] sm:text-[14px] text-cyan-950/90 dark:text-cyan-300/90 font-medium leading-relaxed">
                        Para a maior parte dos produtos, deixa de existir valor de IPI a recolher.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alerta Importante */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-3 flex items-start sm:items-center gap-3 shadow-xs">
                <AlertTriangle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-[14px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  <strong className="font-black text-slate-900 dark:text-white uppercase tracking-wider mr-1.5 text-[12px]">ATENÇÃO:</strong> 
                  não assuma automaticamente que todo produto terá IPI zerado. O enquadramento do item precisa ser verificado.
                </p>
              </div>

            </div>

            {/* BLOCO 02 — COMO A MUDANÇA DO IPI PODE AFETAR A EMPRESA? */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs flex flex-col gap-5">
              
              {/* Cabeçalho do Bloco 02 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md">
                    02.
                  </span>
                  <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    COMO A MUDANÇA DO IPI PODE AFETAR A EMPRESA?
                  </h4>
                </div>
                <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  Entenda onde a redução do IPI pode gerar efeitos econômicos e quais ações ajudam a empresa a se preparar.
                </p>
              </div>

              {/* SEÇÃO 1 — ONDE PODE APARECER IMPACTO ECONÔMICO? (PALETA AZUL / ÍNDIGO CORPORATIVO SUAVE) */}
              <div className="border border-indigo-100/90 dark:border-indigo-900/40 rounded-xl p-3.5 sm:p-4 bg-indigo-50/20 dark:bg-indigo-950/15 flex flex-col gap-3 shadow-2xs">
                
                {/* Header Seção 1: Título e Subtítulo aproximados */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12.5px] sm:text-[13px] font-black text-indigo-800 dark:text-indigo-300 bg-indigo-100/80 dark:bg-indigo-950/70 px-2.5 py-1 rounded-md">
                      1. ONDE PODE APARECER IMPACTO ECONÔMICO?
                    </span>
                  </div>
                  <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                    A redução do IPI pode produzir efeitos diferentes conforme o produto e a composição tributária da operação.
                  </p>
                </div>

                {/* 3 Cards Horizontais com Leitura Progressiva */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
                  
                  {/* Card 01 — IPI PAGO */}
                  <div className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/50 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between gap-3 shadow-2xs">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-900/60 flex items-center justify-center text-indigo-800 dark:text-indigo-300 shrink-0 text-[11px] font-black">
                            01
                          </span>
                          <span className="text-[14px] sm:text-[14.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            IPI PAGO
                          </span>
                        </div>
                        <Wallet className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      
                      <p className="text-[14px] sm:text-[14.5px] font-bold text-indigo-950 dark:text-indigo-200 leading-snug">
                        Alguns produtos podem deixar de gerar IPI na saída.
                      </p>
                      
                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Se o produto estiver na regra geral de alíquota zero, deixa de haver aquela cobrança específica de IPI nessa operação.
                      </p>
                    </div>

                    <div className="bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 rounded-lg px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                        EM TERMOS SIMPLES
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                        Pode haver menos IPI a recolher naquele produto.
                      </span>
                    </div>
                  </div>

                  {/* Card 02 — PREÇO & MARGEM */}
                  <div className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/50 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between gap-3 shadow-2xs">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-900/60 flex items-center justify-center text-indigo-800 dark:text-indigo-300 shrink-0 text-[11px] font-black">
                            02
                          </span>
                          <span className="text-[14px] sm:text-[14.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            PREÇO & MARGEM
                          </span>
                        </div>
                        <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      
                      <p className="text-[14px] sm:text-[14.5px] font-bold text-indigo-950 dark:text-indigo-200 leading-snug">
                        A mudança pode alterar a composição econômica do produto.
                      </p>
                      
                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        A empresa precisa avaliar possíveis efeitos sobre custo, preço ou margem, considerando também os demais efeitos da Reforma.
                      </p>
                    </div>

                    <div className="bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 rounded-lg px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                        PERGUNTA-CHAVE
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                        Isso muda preço, custo ou rentabilidade do produto?
                      </span>
                    </div>
                  </div>

                  {/* Card 03 — CARGA TRIBUTÁRIA TOTAL */}
                  <div className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/50 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between gap-3 shadow-2xs">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-900/60 flex items-center justify-center text-indigo-800 dark:text-indigo-300 shrink-0 text-[11px] font-black">
                            03
                          </span>
                          <span className="text-[14px] sm:text-[14.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            CARGA TRIBUTÁRIA TOTAL
                          </span>
                        </div>
                        <Scale className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      
                      <p className="text-[14px] sm:text-[14.5px] font-bold text-indigo-950 dark:text-indigo-200 leading-snug">
                        Menos IPI não significa automaticamente menos imposto no total.
                      </p>
                      
                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        O efeito final depende dos demais tributos e regras aplicáveis ao produto no novo sistema (como CBS, IBS e Imposto Seletivo).
                      </p>
                    </div>

                    <div className="bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 rounded-lg px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                        EM TERMOS SIMPLES
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                        É preciso olhar a conta completa, não apenas o IPI.
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* SEÇÃO 2 — JORNADA EXECUTIVA DE PREPARAÇÃO (PALETA VERDE / TEAL SUAVE) */}
              <div className="border border-emerald-200/80 dark:border-emerald-900/50 rounded-xl p-3.5 sm:p-4 bg-emerald-50/20 dark:bg-emerald-950/10 flex flex-col gap-3 shadow-2xs">
                
                {/* Header Seção 2: Título e Subtítulo aproximados */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12.5px] sm:text-[13px] font-black text-emerald-900 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-950/70 px-2.5 py-1 rounded-md">
                      2. O QUE A EMPRESA PRECISA PREPARAR?
                    </span>
                  </div>
                  <p className="text-[14px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                    A preparação pode ser organizada em três movimentos: mapear a exposição, simular o efeito e preparar a operação.
                  </p>
                </div>

                {/* 3 Etapas Conectadas (MAPEAR → SIMULAR → PREPARAR) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
                  
                  {/* Etapa 01 — ENTENDER A EXPOSIÇÃO (MAPEAR) */}
                  <div className="bg-white dark:bg-slate-900 border border-emerald-200/60 dark:border-emerald-900/40 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between gap-3 shadow-2xs">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300 shrink-0 text-[11px] font-black">
                            01
                          </span>
                          <span className="text-[14px] sm:text-[14.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            ENTENDER A EXPOSIÇÃO
                          </span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                          MAPEAR
                        </span>
                      </div>
                      
                      <div className="text-[13px] sm:text-[13.5px] font-bold text-emerald-800 dark:text-emerald-300 leading-snug">
                        Onde a mudança realmente afeta o negócio?
                      </div>

                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Mapear quais produtos são afetados e quanto eles representam no portfólio e nas vendas da empresa.
                      </p>
                    </div>

                    <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-900/50 rounded-lg px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                        SAÍDA ESPERADA
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                        Visão clara de onde o impacto está concentrado.
                      </span>
                    </div>
                  </div>

                  {/* Etapa 02 — SIMULAR O EFEITO (SIMULAR) */}
                  <div className="bg-white dark:bg-slate-900 border border-emerald-200/60 dark:border-emerald-900/40 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between gap-3 shadow-2xs">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300 shrink-0 text-[11px] font-black">
                            02
                          </span>
                          <span className="text-[14px] sm:text-[14.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            SIMULAR O EFEITO
                          </span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                          SIMULAR
                        </span>
                      </div>
                      
                      <div className="text-[13px] sm:text-[13.5px] font-bold text-emerald-800 dark:text-emerald-300 leading-snug">
                        Qual pode ser o impacto econômico?
                      </div>

                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Avaliar, por produto ou grupo relevante, possíveis efeitos sobre IPI pago, preço, margem e carga tributária total.
                      </p>
                    </div>

                    <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-900/50 rounded-lg px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                        SAÍDA ESPERADA
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                        Estimativa do efeito econômico nos produtos mais relevantes.
                      </span>
                    </div>
                  </div>

                  {/* Etapa 03 — PREPARAR A OPERAÇÃO (PREPARAR) */}
                  <div className="bg-white dark:bg-slate-900 border border-emerald-200/60 dark:border-emerald-900/40 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between gap-3 shadow-2xs">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300 shrink-0 text-[11px] font-black">
                            03
                          </span>
                          <span className="text-[14px] sm:text-[14.5px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            PREPARAR A OPERAÇÃO
                          </span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                          PREPARAR
                        </span>
                      </div>
                      
                      <div className="text-[13px] sm:text-[13.5px] font-bold text-emerald-800 dark:text-emerald-300 leading-snug">
                        A empresa consegue aplicar corretamente a nova regra?
                      </div>

                      <p className="text-[13.5px] sm:text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Adequar ERP, cadastros, emissão fiscal e apuração e acompanhar regulamentações que alterem o tratamento dos produtos.
                      </p>
                    </div>

                    <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-900/50 rounded-lg px-2.5 py-2 flex flex-col gap-0.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                        SAÍDA ESPERADA
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                        Sistemas e processos preparados para operar a nova regra.
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* FAIXA FINAL: LEITURA EXECUTIVA */}
              <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 rounded-xl p-3.5 sm:p-4 shadow-2xs flex items-start sm:items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-[14px] sm:text-[15px] text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                  <strong className="font-black text-blue-700 dark:text-blue-400 uppercase tracking-wider mr-1.5 text-[12px]">LEITURA EXECUTIVA:</strong>
                  o IPI zerar em muitos produtos é apenas o ponto de partida. Para a empresa, o mais importante é <strong className="font-bold text-blue-950 dark:text-blue-200">mapear onde a mudança afeta o portfólio</strong>, estimar o <strong className="font-bold text-blue-950 dark:text-blue-200">efeito econômico</strong> e preparar <strong className="font-bold text-blue-950 dark:text-blue-200">sistemas e processos</strong>.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* CONTEÚDO DINÂMICO DO TEMA: INCENTIVOS FISCAIS */}
        {activeTopic === 'incentivos-fiscais' && (
          <div className="flex flex-col bg-[#f8fafc] dark:bg-slate-900/50 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 gap-4 sm:gap-5 shadow-xs">
            
            {/* 1. CABEÇALHO LIMPO E DIRETO */}
            <div className="flex flex-col gap-1.5 px-1">
              <h3 className="text-[28px] sm:text-[32px] md:text-[34px] font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                INCENTIVOS FISCAIS
              </h3>
              <p className="text-[15px] sm:text-[16.5px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-5xl">
                Entenda como a Reforma altera gradualmente os benefícios ligados ao ICMS, quais mecanismos existem durante a transição e por que a lógica de atração de investimentos pode mudar.
              </p>
            </div>

            {/* BLOCO 01 — O QUE MUDA NOS INCENTIVOS FISCAIS COM A REFORMA? */}
            <div className="bg-white dark:bg-[#111827] border border-blue-200/90 dark:border-blue-900/40 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col gap-4 shadow-xs">
              
              {/* Header Bloco 01: Título */}
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] sm:text-[14px] font-black text-blue-700 dark:text-blue-300 bg-blue-100/90 dark:bg-blue-950/70 px-2.5 py-1 rounded-md">
                  01.
                </span>
                <span className="text-[18px] sm:text-[20px] md:text-[22px] font-black text-blue-900 dark:text-blue-200 uppercase tracking-tight">
                  O QUE MUDA NOS INCENTIVOS FISCAIS COM A REFORMA?
                </span>
              </div>

              {/* Explicação Inicial */}
              <p className="text-[15.5px] sm:text-[16.5px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                Hoje, estados utilizam benefícios ligados ao ICMS para reduzir a tributação de determinadas operações e aumentar a atratividade de investimentos. Com a Reforma, esses incentivos entram em transição junto com a redução gradual do próprio ICMS.
              </p>

              {/* Exemplos de Benefícios que Podem Ser Afetados */}
              <div className="flex flex-col gap-2.5 pt-1">
                <span className="text-[13px] sm:text-[13.5px] font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
                  EXEMPLOS DE BENEFÍCIOS QUE PODEM SER AFETADOS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 rounded-xl px-3.5 py-3 flex items-center gap-3 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold text-slate-900 dark:text-slate-100">
                      Crédito presumido
                    </span>
                  </div>

                  <div className="bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 rounded-xl px-3.5 py-3 flex items-center gap-3 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                      <Percent className="w-4 h-4" />
                    </div>
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold text-slate-900 dark:text-slate-100">
                      Redução de alíquota
                    </span>
                  </div>

                  <div className="bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 rounded-xl px-3.5 py-3 flex items-center gap-3 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                      <Tag className="w-4 h-4" />
                    </div>
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold text-slate-900 dark:text-slate-100">
                      Alíquota zero
                    </span>
                  </div>

                  <div className="bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 rounded-xl px-3.5 py-3 flex items-center gap-3 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold text-slate-900 dark:text-slate-100">
                      Outros benefícios de ICMS
                    </span>
                  </div>
                </div>
              </div>

              {/* Exemplo Prático (Ilustrativo) */}
              <div className="bg-blue-50/40 dark:bg-blue-950/20 border border-blue-100/90 dark:border-blue-900/30 rounded-xl p-3.5 sm:p-4 flex flex-col gap-2 shadow-2xs">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-[13px] sm:text-[13.5px] font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wide">
                    EXEMPLO PRÁTICO • <span className="font-normal text-blue-700 dark:text-blue-400 text-[12px]">ILUSTRATIVO</span>
                  </span>
                </div>
                <p className="text-[15px] sm:text-[16px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  Empresa A possui um benefício de crédito presumido de ICMS em determinada operação. Durante a transição, esse benefício acompanha a redução gradual do ICMS e perde relevância ao longo do processo.
                </p>
                <div className="text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-200 pt-1.5 border-t border-blue-100/70 dark:border-blue-900/30 leading-relaxed">
                  <strong className="text-blue-950 dark:text-blue-200 font-bold uppercase tracking-tight text-[12.5px] sm:text-[13px] mr-1">NA PRÁTICA:</strong> a empresa precisa entender quanto essa operação depende hoje do benefício e como essa vantagem pode mudar durante a transição.
                </div>
              </div>

              {/* Área O que Muda? */}
              <div className="bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 shadow-2xs">
                <div className="flex items-center gap-2 shrink-0">
                  <ArrowLeftRight className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <h4 className="text-[14px] sm:text-[15px] font-black text-blue-900 dark:text-blue-200 uppercase tracking-wide">
                    O QUE MUDA?
                  </h4>
                </div>
                <span className="text-slate-400 dark:text-slate-600 hidden sm:inline text-base">•</span>
                <p className="text-[15px] sm:text-[16px] text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                  <strong className="font-bold text-slate-900 dark:text-white">Esses benefícios perdem relevância progressivamente</strong> à medida que o ICMS é reduzido durante a transição para o IBS.
                </p>
              </div>

              {/* Faixa Em Termos Simples */}
              <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-black">
                  <Info className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="text-[13px] sm:text-[14px] font-black text-blue-700 dark:text-blue-300 uppercase tracking-wide shrink-0">
                    EM TERMOS SIMPLES:
                  </span>
                  <span className="text-[15px] sm:text-[16px] text-slate-800 dark:text-slate-100 font-semibold leading-relaxed">
                    O benefício que hoje ajuda determinada operação pode perder parte da sua importância ao longo da transição.
                  </span>
                </div>
              </div>

            </div>

            {/* BLOCO 02 — OS BENEFÍCIOS ACABAM OU SÃO SUBSTITUÍDOS POR OUTROS? */}
            <div className="bg-white dark:bg-[#111827] border border-emerald-200/90 dark:border-emerald-900/40 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col gap-4 shadow-xs">
              
              {/* Header Bloco 02 */}
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] sm:text-[14px] font-black text-emerald-700 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-950/70 px-2.5 py-1 rounded-md">
                  02.
                </span>
                <span className="text-[18px] sm:text-[20px] md:text-[22px] font-black text-emerald-900 dark:text-emerald-200 uppercase tracking-tight">
                  OS BENEFÍCIOS ACABAM OU SÃO SUBSTITUÍDOS POR OUTROS?
                </span>
              </div>

              {/* Resposta Principal em Destaque */}
              <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/90 dark:border-emerald-900/60 rounded-xl p-3.5 sm:p-4 flex flex-col gap-1.5 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <h4 className="text-[15.5px] sm:text-[17.5px] font-black text-emerald-950 dark:text-emerald-100 uppercase tracking-tight leading-snug">
                    OS BENEFÍCIOS ATUAIS DE ICMS PERDEM ESPAÇO, MAS O NOVO SISTEMA AINDA PREVÊ TRATAMENTOS DIFERENCIADOS.
                  </h4>
                </div>
                <p className="text-[14.5px] sm:text-[15.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal pl-7 sm:pl-7.5">
                  Esses tratamentos passam a seguir hipóteses e regras nacionais específicas.
                </p>
              </div>

              {/* Comparação Didática em 3 Cards Horizontais */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-4 items-stretch">
                
                {/* Card 01: BENEFÍCIOS ATUAIS */}
                <div className="bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-4.5 flex flex-col justify-between gap-3 shadow-2xs">
                  <div className="flex flex-col gap-2">
                    <span className="text-[13px] sm:text-[14px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      01. BENEFÍCIOS ATUAIS DE ICMS
                    </span>
                    <div className="text-[13.5px] sm:text-[14px] font-semibold text-slate-700 dark:text-slate-300">
                      O benefício atual continua igual?
                    </div>
                    <div className="text-[17px] sm:text-[19px] font-black text-slate-900 dark:text-white leading-tight flex items-center gap-2">
                      <span className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-[13px] px-2.5 py-0.5 rounded font-black uppercase">NÃO.</span>
                    </div>
                  </div>
                  <p className="pt-2.5 border-t border-slate-200/80 dark:border-slate-800 text-[14px] sm:text-[15px] text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    Em geral, sua vantagem tende a diminuir durante a transição.
                  </p>
                </div>

                {/* Card 02: NOVO SISTEMA (Destaque Visual) */}
                <div className="bg-teal-50/60 dark:bg-teal-950/30 border-2 border-teal-400 dark:border-teal-500/70 rounded-xl p-4 sm:p-4.5 flex flex-col justify-between gap-3 shadow-sm relative">
                  <div className="flex flex-col gap-2">
                    <span className="text-[13px] sm:text-[14px] font-bold text-teal-900 dark:text-teal-200 uppercase tracking-wider">
                      02. NOVO SISTEMA
                    </span>
                    <div className="text-[13.5px] sm:text-[14px] font-semibold text-teal-800 dark:text-teal-300">
                      Ainda podem existir tratamentos diferenciados?
                    </div>
                    <div className="text-[16px] sm:text-[18px] font-black text-teal-950 dark:text-teal-100 leading-tight flex items-center gap-2">
                      <span className="bg-teal-600 dark:bg-teal-500 text-white text-[13px] px-2.5 py-0.5 rounded font-black uppercase">SIM.</span>
                    </div>
                    <p className="text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-300 leading-snug">
                      O novo sistema prevê tratamentos específicos nas hipóteses estabelecidas pelas regras nacionais.
                    </p>
                    
                    {/* Chips de Exemplos */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[12.5px] sm:text-[13.5px] font-bold text-teal-950 dark:text-teal-200 bg-teal-100/90 dark:bg-teal-900/60 px-2.5 py-1 rounded-md border border-teal-200/70 dark:border-teal-800">
                        Redução de alíquota
                      </span>
                      <span className="text-[12.5px] sm:text-[13.5px] font-bold text-teal-950 dark:text-teal-200 bg-teal-100/90 dark:bg-teal-900/60 px-2.5 py-1 rounded-md border border-teal-200/70 dark:border-teal-800">
                        Crédito presumido
                      </span>
                      <span className="text-[12.5px] sm:text-[13.5px] font-bold text-teal-950 dark:text-teal-200 bg-teal-100/90 dark:bg-teal-900/60 px-2.5 py-1 rounded-md border border-teal-200/70 dark:border-teal-800">
                        Alíquota zero
                      </span>
                    </div>
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 dark:text-slate-400 leading-snug pt-2 border-t border-teal-100 dark:border-teal-900/40 font-medium">
                    Não são tratamentos que qualquer empresa pode escolher livremente.
                  </p>
                </div>

                {/* Card 03: QUEM JÁ POSSUI BENEFÍCIO */}
                <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 rounded-xl p-4 sm:p-4.5 flex flex-col justify-between gap-3 shadow-2xs">
                  <div className="flex flex-col gap-2">
                    <span className="text-[13px] sm:text-[14px] font-bold text-emerald-900 dark:text-emerald-200 uppercase tracking-wider">
                      03. QUEM JÁ POSSUI BENEFÍCIO
                    </span>
                    <div className="text-[13.5px] sm:text-[14px] font-semibold text-emerald-800 dark:text-emerald-400">
                      Pode existir compensação?
                    </div>
                    <div className="text-[16px] sm:text-[18px] font-black text-emerald-950 dark:text-emerald-100 leading-tight">
                      Em determinadas situações, sim.
                    </div>
                    <p className="text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-300 leading-snug">
                      Determinados benefícios onerosos de ICMS podem ter direito à compensação, desde que atendam às condições aplicáveis.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-emerald-100 dark:border-emerald-900/40 text-[13px] sm:text-[14px] text-emerald-950 dark:text-emerald-200 leading-relaxed font-medium">
                    <strong className="font-black text-emerald-950 dark:text-emerald-100 uppercase text-[12px] sm:text-[12.5px] mr-1">DESDE 2026:</strong> Titulares de determinados benefícios podem iniciar procedimentos de habilitação para futuros direitos de compensação.
                  </div>
                </div>

              </div>

              {/* Área Didática: MELHORA OU PIORA? */}
              <div className="bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-4 sm:p-5 flex flex-col gap-3.5 shadow-2xs">
                <div>
                  <h5 className="text-[14.5px] sm:text-[16px] font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
                    <Scale className="w-4.5 h-4.5 text-slate-700 dark:text-slate-300" />
                    MELHORA OU PIORA?
                  </h5>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
                    Não existe uma resposta única. O efeito depende do benefício atual, do tratamento aplicável no novo sistema e, quando cabível, da possibilidade de compensação.
                  </p>
                </div>

                {/* 3 Elementos Horizontais Compactos em Tons Suaves */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
                  
                  {/* Situação 1: Benefício atual perde efeito */}
                  <div className="bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between gap-2.5 shadow-2xs">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[12px] sm:text-[12.5px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md self-start border border-slate-200/60 dark:border-slate-700/60">
                        BENEFÍCIO ATUAL PERDE EFEITO
                      </span>
                      <p className="text-[13.5px] sm:text-[14px] text-slate-700 dark:text-slate-200 leading-snug pt-1 font-medium">
                        A vantagem tributária existente hoje pode diminuir durante a transição.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-tight">
                      <strong className="font-semibold text-slate-800 dark:text-slate-200">Leitura:</strong> Pode representar uma piora em relação à condição atual.
                    </div>
                  </div>

                  {/* Situação 2: Novo sistema prevê tratamento diferenciado */}
                  <div className="bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200/70 dark:border-teal-900/40 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between gap-2.5 shadow-2xs">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[12px] sm:text-[12.5px] font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wide bg-teal-100/70 dark:bg-teal-900/50 px-2.5 py-1 rounded-md self-start border border-teal-200/60 dark:border-teal-800/60">
                        TRATAMENTO DIFERENCIADO NO NOVO SISTEMA
                      </span>
                      <p className="text-[13.5px] sm:text-[14px] text-slate-700 dark:text-slate-200 leading-snug pt-1 font-medium">
                        Determinadas operações podem estar previstas em hipóteses específicas de redução de alíquota, crédito presumido ou alíquota zero.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-teal-100/70 dark:border-teal-900/30 text-[12.5px] sm:text-[13px] text-teal-900 dark:text-teal-300 font-normal leading-tight">
                      <strong className="font-semibold text-teal-950 dark:text-teal-200">Leitura:</strong> Pode existir uma condição tributária diferente no novo sistema.
                    </div>
                  </div>

                  {/* Situação 3: Possibilidade de compensação */}
                  <div className="bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between gap-2.5 shadow-2xs">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[12px] sm:text-[12.5px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide bg-emerald-100/70 dark:bg-emerald-900/50 px-2.5 py-1 rounded-md self-start border border-emerald-200/60 dark:border-emerald-800/60">
                        COMPENSAÇÃO
                      </span>
                      <p className="text-[13.5px] sm:text-[14px] text-slate-700 dark:text-slate-200 leading-snug pt-1 font-medium">
                        Para determinados benefícios onerosos que atendam às condições aplicáveis, pode existir mecanismo de compensação durante a transição.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-emerald-100/70 dark:border-emerald-900/30 text-[12.5px] sm:text-[13px] text-emerald-900 dark:text-emerald-300 font-normal leading-tight">
                      <strong className="font-semibold text-emerald-950 dark:text-emerald-200">Leitura:</strong> Pode reduzir parte do efeito da perda do benefício atual.
                    </div>
                  </div>

                </div>

                {/* Conclusão da Área */}
                <div className="bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-[13.5px] sm:text-[14px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  <strong className="font-bold text-slate-900 dark:text-white mr-1 uppercase text-[12.5px]">EM RESUMO:</strong>
                  a Reforma pode reduzir vantagens existentes, criar tratamentos específicos no novo sistema e prever compensação em determinadas situações. O resultado precisa ser analisado conforme o benefício e a operação.
                </div>
              </div>

              {/* Exemplo Ilustrativo - Sequência Simples */}
              <div className="bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100/90 dark:border-emerald-900/30 rounded-xl p-3.5 sm:p-4 flex flex-col gap-3 shadow-2xs">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-[13px] sm:text-[14px] font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide">
                    EXEMPLO ILUSTRATIVO • <span className="font-normal text-emerald-700 dark:text-emerald-400 text-[12px]">SEQUÊNCIA DIRETA</span>
                  </span>
                </div>

                {/* Sequência em 4 Etapas Conectadas (HOJE → TRANSIÇÃO → NOVO SISTEMA → COMPENSAÇÃO) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
                  
                  {/* Etapa 1 */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 flex flex-col gap-1 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11.5px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                        1. HOJE
                      </span>
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    </div>
                    <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium">
                      Empresa A possui um benefício de ICMS.
                    </p>
                  </div>

                  {/* Etapa 2 */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 flex flex-col gap-1 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11.5px] font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                        2. TRANSIÇÃO
                      </span>
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    </div>
                    <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium">
                      A vantagem associada a esse benefício pode diminuir.
                    </p>
                  </div>

                  {/* Etapa 3 */}
                  <div className="bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-900/60 rounded-xl p-3 flex flex-col gap-1 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11.5px] font-black text-teal-800 dark:text-teal-300 uppercase tracking-wider">
                        3. NOVO SISTEMA
                      </span>
                      <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    </div>
                    <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium">
                      A operação pode ou não estar enquadrada em tratamento diferenciado previsto nas novas regras.
                    </p>
                  </div>

                  {/* Etapa 4 */}
                  <div className="bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 rounded-xl p-3 flex flex-col gap-1 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11.5px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                        4. COMPENSAÇÃO
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <p className="text-[13px] sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium">
                      Se o benefício atual atender às condições aplicáveis, pode existir possibilidade de compensação.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* FAIXA FINAL: LEITURA EXECUTIVA */}
            <div className="bg-blue-50/60 dark:bg-blue-950/25 border border-blue-200/80 dark:border-blue-900/50 rounded-2xl p-4 sm:p-5 shadow-2xs flex items-start sm:items-center gap-3.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold mt-0.5 sm:mt-0">
                <Star className="w-4.5 h-4.5 text-white fill-white" />
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-[13.5px] sm:text-[14.5px] font-black text-blue-900 dark:text-blue-300 uppercase tracking-wider shrink-0">
                  LEITURA EXECUTIVA:
                </span>
                <span className="text-[14.5px] sm:text-[15.5px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                  Os incentivos atuais de ICMS perdem espaço durante a transição, enquanto o novo sistema mantém tratamentos diferenciados específicos e prevê compensação para determinadas situações. O efeito final pode ser diferente para cada operação, dependendo do benefício atual e das regras aplicáveis.
                </span>
              </div>
            </div>

          </div>
        )}

        {/* Placeholder Estrutural para Temas em Construção */}
        {activeTopic !== 'simples-nacional' && activeTopic !== 'aliquotas' && activeTopic !== 'split-payment' && activeTopic !== 'ipi' && activeTopic !== 'incentivos-fiscais' && (
          <div className="flex flex-col items-center justify-center bg-[#f8fafc] dark:bg-slate-900/50 border border-dashed border-slate-300 dark:border-slate-700/80 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 shadow-2xs">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-[15px] sm:text-[16px] font-bold text-slate-900 dark:text-white mb-1">
              {THEMATIC_TOPICS.find(t => t.id === activeTopic)?.label}
            </h4>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 max-w-md">
              Estrutura temática preparada para consolidação das evidências e análises de impacto empresarial.
            </p>
            <span className="mt-3 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300/60 dark:border-slate-700/60">
              Conteúdo em construção
            </span>
          </div>
        )}

      </div>
        </div>
      </section>

      {/* SEÇÃO DE NOTÍCIAS E EVIDÊNCIAS ORGANIZADAS POR TEMA */}
      <section id="evidencias" className="scroll-mt-12 flex flex-col gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-[17px] md:text-[19px] font-bold text-slate-900 dark:text-white tracking-tight">
            Fontes & Evidências Documentais
          </h2>
          <p className="text-[13px] text-slate-500 dark:text-slate-400">
            Notícias e documentos de referência organizados por tema.
          </p>
        </div>

        {/* 1. Alíquotas, CBS e fase de teste */}
        {EVIDENCIAS_ALIQUOTAS.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[12.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                • ALÍQUOTAS, CBS E FASE DE TESTE ({EVIDENCIAS_ALIQUOTAS.length} NOTÍCIAS)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              {EVIDENCIAS_ALIQUOTAS.map((ev) => (
                <EvidenceCard key={ev.id} evidence={ev} />
              ))}
            </div>
          </div>
        )}

        {/* 2. Simples Nacional */}
        {EVIDENCIAS_SIMPLES.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[12.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                • SIMPLES NACIONAL ({EVIDENCIAS_SIMPLES.length} NOTÍCIA)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              {EVIDENCIAS_SIMPLES.map((ev) => (
                <EvidenceCard key={ev.id} evidence={ev} />
              ))}
            </div>
          </div>
        )}

        {/* 3. Split Payment */}
        {EVIDENCIAS_SPLIT_PAYMENT.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[12.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                • SPLIT PAYMENT ({EVIDENCIAS_SPLIT_PAYMENT.length} NOTÍCIAS)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              {EVIDENCIAS_SPLIT_PAYMENT.map((ev) => (
                <EvidenceCard key={ev.id} evidence={ev} />
              ))}
            </div>
          </div>
        )}

        {/* 4. IPI */}
        {EVIDENCIAS_IPI.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[12.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                • IPI ({EVIDENCIAS_IPI.length} NOTÍCIAS)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              {EVIDENCIAS_IPI.map((ev) => (
                <EvidenceCard key={ev.id} evidence={ev} />
              ))}
            </div>
          </div>
        )}

        {/* 5. Incentivos Fiscais */}
        {EVIDENCIAS_INCENTIVOS.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[12.5px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                • INCENTIVOS FISCAIS ({EVIDENCIAS_INCENTIVOS.length} NOTÍCIAS)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
              {EVIDENCIAS_INCENTIVOS.map((ev) => (
                <EvidenceCard key={ev.id} evidence={ev} />
              ))}
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
