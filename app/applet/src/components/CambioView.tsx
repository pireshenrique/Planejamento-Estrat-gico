import React from 'react';
import { Target, TrendingUp, DollarSign, ExternalLink } from 'lucide-react';

interface CambioViewProps {
  setActivePage: (page: string) => void;
}

const CAMBIO_EVIDENCES = [
  {
    id: 1,
    tag: 'Cotação atual / Mercado cambial',
    dateStr: '21/07/2026',
    title: 'Dólar recua para R$ 5,07 e renova mínima de um mês',
    headline: 'O dólar comercial caiu 0,31% e encerrou vendido a R$ 5,073, no menor nível de fechamento em pouco mais de um mês. O movimento ocorreu mesmo com fortalecimento da moeda norte-americana no exterior, indicando desempenho relativamente favorável do real naquela sessão.',
    source: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-07/dolar-cai-para-r-507-menor-nivel-em-um-mes-bolsa-fica-estavel'
  },
  {
    id: 2,
    tag: 'Cenário externo / Federal Reserve',
    dateStr: '01/07/2026',
    title: 'Juros nos Estados Unidos levam dólar acima de R$ 5,20',
    headline: 'O dólar subiu 0,92% e fechou cotado a R$ 5,209. A valorização foi relacionada à expectativa de juros norte-americanos elevados por mais tempo, o que fortalece o dólar e pode reduzir o fluxo de recursos para mercados emergentes.',
    source: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-07/dolar-supera-r-520-e-bolsa-cai-com-expectativa-por-juros-nos-eua'
  },
  {
    id: 3,
    tag: 'Projeção cambial',
    dateStr: '13/07/2026',
    title: 'Focus projeta dólar em R$ 5,20 no encerramento de 2026',
    headline: 'O Boletim Focus manteve a projeção da cotação do dólar em R$ 5,20 no fim de 2026. A estimativa deve ser atualizada semanalmente, porque responde rapidamente às expectativas sobre inflação, Selic, risco fiscal, cenário eleitoral e juros dos Estados Unidos.',
    source: 'Banco Central / Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-07/bolsa-cai-12-e-dolar-sobe-para-r-513-com-tensao-global'
  },
  {
    id: 4,
    tag: 'Desempenho acumulado',
    dateStr: '10/07/2026',
    title: 'Real se valoriza e dólar acumula queda próxima de 7% no ano',
    headline: 'O dólar encerrou a sessão cotado a R$ 5,108 e acumulava desvalorização de 6,94% frente ao real em 2026. Na ocasião, a inflação brasileira abaixo do esperado reforçou a possibilidade de novos cortes da Selic, enquanto o ambiente externo favoreceu ativos brasileiros.',
    source: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-07/bolsa-sobe-quase-3-e-fecha-no-maior-nivel-desde-maio'
  },
  {
    id: 5,
    tag: 'Fluxo de capitais',
    dateStr: '18/07/2026',
    title: 'Brasil registra maior entrada de capital estrangeiro em oito anos',
    headline: 'O Brasil registrou entrada líquida de US$ 17,782 bilhões em investimentos estrangeiros no primeiro semestre de 2026. A matéria relaciona o movimento ao elevado nível dos juros brasileiros, que aumenta a atratividade de ativos nacionais e ajuda a sustentar o real frente ao dólar.',
    source: 'CNN Brasil / Banco Central',
    url: 'https://www.cnnbrasil.com.br/economia/investimentos/entrada-de-capital-estrangeiro-no-1o-semestre-e-a-maior-em-8-anos-no-brasil/'
  },
  {
    id: 6,
    tag: 'Fluxo cambial',
    dateStr: '09/07/2026',
    title: 'Entrada de dólares melhora fluxo cambial brasileiro no primeiro semestre',
    headline: 'O país reverteu perdas anteriores e apresentou o maior ingresso líquido de dólares para um primeiro semestre em oito anos. O fluxo cambial é importante porque mostra a entrada e saída efetiva de moeda estrangeira por operações comerciais e financeiras.',
    source: 'CNN Brasil / Banco Central',
    url: 'https://www.cnnbrasil.com.br/economia/mercado/pais-reverte-perda-e-tem-maior-entrada-de-dolares-no-1o-semestre-em-8-anos/'
  },
  {
    id: 7,
    tag: 'Juros e câmbio / Carry trade',
    dateStr: '24/06/2026',
    title: 'Menor atratividade do diferencial de juros pressiona o real',
    headline: 'O dólar fechou a R$ 5,202, após atingir R$ 5,22 durante a sessão. Analistas apontaram que a mudança relativa das perspectivas de juros no Brasil e nos Estados Unidos reduziu a atratividade do chamado carry trade, estratégia que aproveita diferenças de juros entre países.',
    source: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-06/dolar-sobe-r-520-e-volta-atingir-maior-valor-em-tres-meses'
  },
  {
    id: 8,
    tag: 'Commodities e câmbio',
    dateStr: '06/07/2026',
    title: 'Alta de commodities favorece o real e reduz cotação do dólar',
    headline: 'O dólar caiu para R$ 5,132. O movimento foi favorecido pela valorização de produtos exportados pelo Brasil, como soja e minério de ferro, porque exportações mais fortes tendem a aumentar a entrada de moeda estrangeira no país. Naquele momento, o dólar acumulava queda de 6,50% em 2026.',
    source: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-07/dolar-cai-r-513-e-bolsa-recua-em-dia-de-ajuste-no-mercado'
  },
  {
    id: 9,
    tag: 'Geopolítica / Petróleo',
    dateStr: '08/07/2026',
    title: 'Petróleo em alta favorece o real apesar da tensão geopolítica',
    headline: 'Mesmo em um dia de intensificação das tensões entre Estados Unidos e Irã, o dólar recuou levemente diante do real. A valorização do petróleo ajudou a moeda brasileira porque o Brasil é exportador líquido da commodity, embora crises geopolíticas normalmente também fortaleçam o dólar como ativo de proteção.',
    source: 'Agência Brasil',
    url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-07/dolar-recua-bolsa-cai-e-petroleo-dispara-com-tensao-no-oriente-medio'
  },
  {
    id: 10,
    tag: 'Risco comercial / Tarifas',
    dateStr: '16/07/2026',
    title: 'Novas tarifas norte-americanas aumentam pressão sobre o câmbio',
    headline: 'O dólar avançou em meio às preocupações com novas tarifas dos Estados Unidos sobre produtos brasileiros. Medidas comerciais podem afetar exportações, entrada de dólares, confiança dos investidores e percepção de risco sobre o Brasil.',
    source: 'CNN Brasil',
    url: 'https://www.cnnbrasil.com.br/economia/mercado/mercado-financeiro-ibovespa-dolar-16-julho-2026-2/'
  },
  {
    id: 11,
    tag: 'Comércio exterior / Balança comercial',
    dateStr: '03/07/2026',
    title: 'Superávit comercial de US$ 9,8 bilhões ajuda a sustentar o câmbio',
    headline: 'A balança comercial registrou superávit de US$ 9,8 bilhões em junho, e o governo elevou para US$ 90 bilhões a projeção de saldo positivo em 2026. Superávits comerciais aumentam a entrada líquida de moeda estrangeira e podem oferecer sustentação ao real, embora não determinem isoladamente a cotação.',
    source: 'CNN Brasil / MDIC',
    url: 'https://www.cnnbrasil.com.br/economia/macroeconomia/balanca-comercial-tem-superavit-de-us-98-bi-em-junho/'
  }
];

export function CambioView({ setActivePage }: CambioViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6 mb-8">
        <div className="w-full xl:w-1/3 shrink-0 flex flex-col justify-center">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight">Câmbio / Dólar</h1>
          <p className="text-[16px] text-slate-600 dark:text-slate-400">
            Acompanhamento das oscilações da moeda, previsões e impactos da política global e doméstica no câmbio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full flex-1">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-center gap-3 w-full">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Projeção Focus (Fim 2026)</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-amber-600 dark:text-amber-400 leading-none">R$ 5,20</h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Focus (Estimativa de Mercado)</p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-center gap-3 w-full">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Acumulado 2026</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-blue-600 dark:text-blue-400 leading-none">-6,94%</h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Variação do Dólar no Ano</p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex items-center gap-3 w-full">
            <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">Última Mínima</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[24px] 2xl:text-[26px] font-black text-slate-700 dark:text-slate-300 leading-none">R$ 5,07</h3>
              </div>
              <p className="text-[13px] text-slate-400 mt-0.5 leading-tight">Menor valor de fechamento recente</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. EVIDÊNCIAS RECENTES */}
      <section id="evidencias" className="scroll-mt-12 relative mt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
           <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">EVIDÊNCIAS RECENTES</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Notícias, comunicados e projeções utilizadas nesta análise.</p>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAMBIO_EVIDENCES.map((item) => (
            <div 
              key={item.id}
              className="bg-white dark:bg-[#111827] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full group hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md">
                  {item.tag}
                </span>
                <span className="text-[12px] text-slate-400 font-medium ml-auto">
                  {item.dateStr}
                </span>
              </div>
              <h4 className="font-bold text-[15px] text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                {item.headline}
              </p>
              <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-500">
                  FONTE: {item.source}
                </span>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 p-1 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors" title="Acessar fonte original">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
