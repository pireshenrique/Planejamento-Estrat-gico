import React, { useState } from 'react';
import {
  MapPin,
  AlertTriangle,
  Droplets,
  Flame,
  Waves,
  Building2,
  TrendingDown,
  ShieldAlert,
  Compass,
  Info,
  Layers,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface RegiaoImpacto {
  id: string;
  nome: string;
  siglas: string;
  corTag: string;
  bgTag: string;
  bordaTag: string;
  destaquePrincipal: string;
  indicadoresChave: { label: string; valor: string }[];
  impactoEvidencia: string;
  hipoteseLorenzetti: string;
  fonteEvidencia: string;
  dataEvidencia: string;
  tituloEvidencia: string;
}

const REGIOES_DADOS: RegiaoImpacto[] = [
  {
    id: 'sul',
    nome: 'Região Sul',
    siglas: 'RS • SC • PR',
    corTag: 'text-blue-700 dark:text-blue-300',
    bgTag: 'bg-blue-50 dark:bg-blue-950/60',
    bordaTag: 'border-blue-200 dark:border-blue-800/60',
    destaquePrincipal: 'Inundações Severas e Reconstrução Estrutural',
    indicadoresChave: [
      { label: 'Eventos Hídricos', valor: '>400 mm em chuvas' },
      { label: 'Foco Crítico', valor: 'Bacias do Taquari e Guaíba' }
    ],
    impactoEvidencia: 'Inundações sucessivas e precipitações extremas alteraram o relevo produtivo e impuseram reconstrução habitacional ampla em municípios gaúchos e catarinenses.',
    hipoteseLorenzetti: 'Pode demandar reposição emergencial e continuada de duchas, chuveiros, torneiras e metais básicos; pode exigir planos logísticos de contingência para o escoamento na malha rodoviária do Sul.',
    fonteEvidencia: 'OMM / Defesa Civil & Cemaden',
    dataEvidencia: '2025/2026',
    tituloEvidencia: 'Relatório Regional de Extremos Hídricos na América Latina e Sul do Brasil'
  },
  {
    id: 'sudeste',
    nome: 'Região Sudeste',
    siglas: 'SP • RJ • MG • ES',
    corTag: 'text-orange-700 dark:text-orange-300',
    bgTag: 'bg-orange-50 dark:bg-orange-950/60',
    bordaTag: 'border-orange-200 dark:border-orange-800/60',
    destaquePrincipal: 'Secas Severas e Ondas de Calor Urbanas',
    indicadoresChave: [
      { label: 'Prejuízos Nacionais', valor: '88% por Secas' },
      { label: 'Calor Extremo', valor: 'Ao menos 6 ondas de calor' }
    ],
    impactoEvidencia: 'A região concentra as principais perdas econômicas associadas a estiagens prolongadas (R$ 28,4 bi totais no Brasil) e pressões em mananciais como Cantareira e Paraíba do Sul.',
    hipoteseLorenzetti: 'Pode impulsionar a demanda por pressurizadores de baixa vazão, purificadores de água e duchas eletrônicas eficientes em consumo hídrico-energético.',
    fonteEvidencia: 'Folha de S.Paulo / Aon & Inmet',
    dataEvidencia: '05/02/2026',
    tituloEvidencia: 'Desastres climáticos causaram R$ 28,4 bilhões em prejuízos no Brasil em 2025'
  },
  {
    id: 'nordeste',
    nome: 'Região Nordeste',
    siglas: 'Semiárido • 9 Estados',
    corTag: 'text-amber-700 dark:text-amber-300',
    bgTag: 'bg-amber-50 dark:bg-amber-950/60',
    bordaTag: 'border-amber-200 dark:border-amber-800/60',
    destaquePrincipal: 'Risco de Desertificação e Escassez Hídrica Crônica',
    indicadoresChave: [
      { label: 'População Ameaçada', valor: '39 milhões' },
      { label: 'Área Crítica', valor: 'Caatinga e Semiárido' }
    ],
    impactoEvidencia: '39 milhões de brasileiros habitam áreas sob risco ativo de desertificação, reduzindo a retenção hídrica do solo e agravando secas em reservatórios locais.',
    hipoteseLorenzetti: 'Pode criar oportunidades para reservação domiciliar, arejadores economizadores de água e tecnologias acessíveis de filtragem residencial.',
    fonteEvidencia: 'Agência Brasil (EBC)',
    dataEvidencia: '15/08/2026',
    tituloEvidencia: 'Risco de desertificação no Brasil ameaça segurança hídrica e alimentar'
  },
  {
    id: 'centro-oeste',
    nome: 'Região Centro-Oeste',
    siglas: 'MT • MS • GO • DF',
    corTag: 'text-rose-700 dark:text-rose-300',
    bgTag: 'bg-rose-50 dark:bg-rose-950/60',
    bordaTag: 'border-rose-200 dark:border-rose-800/60',
    destaquePrincipal: 'Ondas de Calor Acima de 40°C e Umidade Crítica',
    indicadoresChave: [
      { label: 'Picos Térmicos', valor: '>40°C constantes' },
      { label: 'Umidade Relativa', valor: '<15% em estiagens' }
    ],
    impactoEvidencia: 'Eventos sucessivos de calor anômalo no bioma Cerrado e Pantanal com estiagens que pressionam produtividade agropecuária e conforto térmico habitacional.',
    hipoteseLorenzetti: 'Pode influenciar o hábito de banho frio ou morno, aumentando a penetração de duchas multitemperaturas e sistemas de ventilação ou purificação.',
    fonteEvidencia: 'Inmet / G1 / OMM Regional',
    dataEvidencia: '2026',
    tituloEvidencia: 'Projeção de ondas de calor anômalas no Brasil Central'
  },
  {
    id: 'norte',
    nome: 'Região Norte',
    siglas: 'AM • PA • RO • AC • RR • AP • TO',
    corTag: 'text-teal-700 dark:text-teal-300',
    bgTag: 'bg-teal-50 dark:bg-teal-950/60',
    bordaTag: 'border-teal-200 dark:border-teal-800/60',
    destaquePrincipal: 'Secas Históricas nos Rios Amazônicos e Queimadas',
    indicadoresChave: [
      { label: 'Rios Críticos', valor: 'Solimões, Negro e Madeira' },
      { label: 'Impacto Logístico', valor: 'Restrição hidroviária' }
    ],
    impactoEvidencia: 'Secas recordes nos rios da bacia amazônica isolaram comunidades ribeirinhas e impuseram limitações periódicas à navegação comercial e ao transporte de cargas.',
    hipoteseLorenzetti: 'Pode exigir antecipação do cronograma de fretes fluviais para centros distribuidores no Norte e gestão reforçada de estoques locais.',
    fonteEvidencia: 'Cemaden / Inpe / Agência Brasil',
    dataEvidencia: '2025/2026',
    tituloEvidencia: 'Monitoramento de estiagens extremas nas bacias hidrográficas amazônicas'
  }
];

export function BrasilImpactosClimaticosVisual() {
  const [selectedRegiao, setSelectedRegiao] = useState<string>('todos');

  const regiaoAtiva = REGIOES_DADOS.find(r => r.id === selectedRegiao);

  return (
    <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      
      {/* CABEÇALHO DO INFOGRÁFICO TERRITORIAL */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                Infográfico Territorial Brasil
              </span>
              <span className="text-xs text-slate-400 font-medium">•</span>
              <span className="text-xs text-slate-400 font-medium">Mapeamento Macrorregional 2027–2037</span>
            </div>
            <h2 className="text-[21px] md:text-[23px] font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
              Brasil dos Impactos Climáticos: Vulnerabilidades e Vetores Regionais
            </h2>
          </div>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-slate-700/80 self-start lg:self-auto">
          Evidências: <strong>Aon • Cemaden • Inpe • SUS • OMM</strong>
        </div>
      </div>

      {/* 4 CARDS RESUMO DE INDICADORES TERRITORIAIS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
          <p className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            PREJUÍZOS 2025
          </p>
          <div className="text-[20px] font-black text-rose-600 dark:text-rose-400 mt-0.5">
            R$ 28,4 bi
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-1">
            88% concentrados em secas severas (Folha / Aon).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
          <p className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            MUNICÍPIOS VULNERÁVEIS
          </p>
          <div className="text-[20px] font-black text-blue-600 dark:text-blue-400 mt-0.5">
            90% do Total
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-1">
            Histórico de desastres ligados à água (Cemaden).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
          <p className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            RISCO DE DESERTIFICAÇÃO
          </p>
          <div className="text-[20px] font-black text-amber-600 dark:text-amber-400 mt-0.5">
            39 milhões
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-1">
            Pessoas em áreas suscetíveis no Semiárido.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
          <p className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            MORTES POR ONDAS DE CALOR
          </p>
          <div className="text-[20px] font-black text-purple-600 dark:text-purple-400 mt-0.5">
            120 mil
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-1">
            Associadas em 20 anos em 5.566 cidades (SUS).
          </p>
        </div>
      </div>

      {/* SELETOR DE REGIOES */}
      <div className="flex flex-wrap gap-2 pt-1 border-b border-slate-100 dark:border-slate-800/80 pb-4">
        <button
          onClick={() => setSelectedRegiao('todos')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            selectedRegiao === 'todos'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          Visão Geral (Todas as 5 Regiões)
        </button>
        {REGIOES_DADOS.map((r) => (
          <button
            key={r.id}
            onClick={() => setSelectedRegiao(r.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedRegiao === r.id
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${r.id === 'sul' ? 'bg-blue-500' : r.id === 'sudeste' ? 'bg-orange-500' : r.id === 'nordeste' ? 'bg-amber-500' : r.id === 'centro-oeste' ? 'bg-rose-500' : 'bg-teal-500'}`} />
            {r.nome}
          </button>
        ))}
      </div>

      {/* EXIBIÇÃO DETALHADA POR REGIÃO OU GRADE COMPLETA */}
      {selectedRegiao === 'todos' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {REGIOES_DADOS.map((r) => (
            <div
              key={r.id}
              onClick={() => setSelectedRegiao(r.id)}
              className="group cursor-pointer bg-slate-50/70 dark:bg-slate-900/40 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${r.bgTag} ${r.corTag} border ${r.bordaTag}`}>
                    {r.nome} • {r.siglas}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors group-hover:translate-x-0.5" />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {r.destaquePrincipal}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {r.impactoEvidencia}
                </p>

                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                  <span className="text-[10.5px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide block">
                    HIPÓTESE LORENZETTI
                  </span>
                  <p className="text-[11.5px] text-slate-700 dark:text-slate-300 leading-tight">
                    {r.hipoteseLorenzetti}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200/60 dark:border-slate-800 text-[10.5px] text-slate-500 dark:text-slate-400">
                Evidência: <strong>{r.fonteEvidencia}</strong> ({r.dataEvidencia})
              </div>
            </div>
          ))}
        </div>
      ) : regiaoAtiva ? (
        /* VISUALIZAÇÃO EM FOCO DA REGIÃO SELECIONADA */
        <div className="bg-slate-50/80 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-4">
            <div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${regiaoAtiva.bgTag} ${regiaoAtiva.corTag} border ${regiaoAtiva.bordaTag}`}>
                {regiaoAtiva.nome} ({regiaoAtiva.siglas})
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                {regiaoAtiva.destaquePrincipal}
              </h3>
            </div>
            <button
              onClick={() => setSelectedRegiao('todos')}
              className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors self-start sm:self-auto cursor-pointer"
            >
              ← Voltar à visão de todas as regiões
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  EVIDÊNCIA DOCUMENTAL RASTREADA
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-1">
                  {regiaoAtiva.impactoEvidencia}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {regiaoAtiva.indicadoresChave.map((ind, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    <span className="text-[10.5px] font-medium text-slate-400 block">{ind.label}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{ind.valor}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Fonte Oficial:</span> {regiaoAtiva.fonteEvidencia} • Data: {regiaoAtiva.dataEvidencia}
                <br />
                <span className="italic text-[11px] text-slate-400">{regiaoAtiva.tituloEvidencia}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-sm">
                    LZ
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950 dark:text-emerald-200">
                      Impacto Lorenzetti (Hipótese Observacional)
                    </h4>
                    <span className="text-[11px] text-emerald-700 dark:text-emerald-400">Planejamento Estratégico 2027–2037</span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
                  {regiaoAtiva.hipoteseLorenzetti}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-200/60 dark:border-emerald-900/40 text-[10.5px] text-emerald-800 dark:text-emerald-300/80">
                Aderência às regras de governança: formulação estritamente como hipótese observacional.
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* NOTA DE GOVERNANÇA NO RODAPÉ */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400">
        <span>Rastreabilidade: <strong>Cemaden • INPE • Aon • Folha • Agência Brasil • OMM</strong></span>
        <span>Portal de Inteligência Estratégica Lorenzetti • Ciclo 2027–2037</span>
      </div>

    </div>
  );
}

export default BrasilImpactosClimaticosVisual;
