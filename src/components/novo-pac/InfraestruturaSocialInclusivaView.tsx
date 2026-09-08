import React from 'react';
import { ResponsiveContainer } from '../layout/ResponsiveContainer';
import { HeaderKpiCard } from '../layout/HeaderKpiCard';
import { EvidenceCard } from '../layout/EvidenceCard';
import { 
  Building2, 
  BarChart3, 
  Search, 
  Target, 
  TrendingUp,
  Lightbulb,
  MapPin,
  Users,
  Star,
  ArrowRight,
  Activity,
  Landmark,
  HeartPulse,
  BookOpen,
  CheckCircle
} from 'lucide-react';

interface InfraestruturaSocialInclusivaViewProps {
  setActivePage: (page: string) => void;
}

const EVIDENCES = [
  {
    id: 'pac_social_relatorio_2025',
    tag: 'Relatório de Gestão',
    dateStr: '2025/2026',
    title: 'Novo PAC acelera a expansão da infraestrutura cultural',
    headline: 'Relatório de Gestão 2025 do Ministério da Cultura aponta R$ 360,98 milhões em repasses e 2026 como ano de grandes entregas.',
    summary: 'O Relatório de Gestão 2025 do Ministério da Cultura registra 187 propostas de CEUs da Cultura em execução, com Termos de Compromisso assinados, além de 32 em fase de contratação. O documento informa R$ 360,98 milhões em repasses via Novo PAC para essas obras, abrangendo mais de 200 municípios. Também aponta 2026 como ano de grandes entregas de infraestrutura, com novos CEUs da Cultura, unidades do MovCEU e obras de patrimônio.',
    source: 'Ministério da Cultura',
    url: 'https://www.gov.br/cultura/pt-br/acesso-a-informacao/auditorias/auditorias/relatorio-de-gestao-2025/view'
  },
  {
    id: 'pac_social_sniic_jun2026',
    tag: 'Boletim SNIIC Monitora',
    dateStr: 'Junho/2026',
    title: 'Novo PAC avança na expansão da infraestrutura cultural',
    headline: 'Boletim do Ministério da Cultura detalha contratos e obras em andamento no Novo PAC.',
    summary: 'O Boletim SNIIC Monitora, do Ministério da Cultura, traz o acompanhamento mais recente da infraestrutura cultural. Em junho de 2026, havia 229 CEUs da Cultura selecionados, 182 com contrato assinado e 26 com obra iniciada. No Novo PAC Patrimônio, o boletim registra R$ 474,6 milhões em investimentos realizados entre 2023 e 2026, 50 obras em execução e 21 obras entregues. É a melhor fonte para mostrar execução e estágio dos projetos, e não apenas intenção.',
    source: 'Ministério da Cultura / SNIIC',
    url: 'https://www.gov.br/cultura/pt-br/assuntos/sniic/boletins-sniic/sniic-monitora/boletim-sniic-monitora-a01-n01-junho-2026.pdf/'
  },
  {
    id: 'pac_social_territorios_cultura',
    tag: 'Programa Territórios',
    dateStr: 'Julho/2026',
    title: 'Infraestrutura cultural é direcionada a territórios periféricos e com menor acesso',
    headline: 'Programa reúne CEUs da Cultura e MovCEU com foco na redução de desigualdades sociais.',
    summary: 'O Ministério da Cultura apresenta o Programa Territórios da Cultura, que reúne CEU das Artes, CEU da Cultura e MovCEU para ampliar e descentralizar a oferta de espaços culturais. A página atualizada em julho de 2026 mostra que o programa busca priorizar territórios periféricos e municípios definidos segundo critérios territoriais e populacionais, além de detalhar a evolução das seleções dos CEUs dentro do Novo PAC.',
    source: 'Ministério da Cultura',
    url: 'https://www.gov.br/cultura/pt-br/assuntos/acoes-programas-e-politicas/programa-territorios-da-cultura'
  },
  {
    id: 'pac_social_criterios_inclusao',
    tag: 'Critérios de Inclusão',
    dateStr: '2026',
    title: 'Novo PAC prioriza redução de desigualdades e necessidades dos territórios',
    headline: 'Casa Civil estabelece critérios de seleção focados na inclusão social e baixa restrição ambiental.',
    summary: 'A Casa Civil explica como os empreendimentos entram na carteira do Novo PAC. As Seleções permitem que estados e municípios apresentem propostas consideradas mais urgentes e adequadas às necessidades de seus territórios. Entre os critérios gerais estão a redução das desigualdades sociais e regionais, adaptação às mudanças climáticas, maturidade dos projetos e baixa restrição ambiental, institucional e fundiária. Para a Infraestrutura Social Inclusiva, o programa busca ampliar o acesso a serviços integrados de cultura, esporte e cidadania, especialmente para populações de baixa renda.',
    source: 'Casa Civil / Novo PAC',
    url: 'https://www.gov.br/casacivil/pt-br/novopac/criterios-de-inclusao-de-empreendimentos-no-novo-pac/criterios-de-inclusao-de-empreendimentos-no-novo-pac'
  }
];

export function InfraestruturaSocialInclusivaView({ setActivePage }: InfraestruturaSocialInclusivaViewProps) {
  return (
    <div className="w-full flex flex-col gap-8 font-sans text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500" id="infraestrutura-social-root">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row gap-6" id="infraestrutura-social-header">
        <div className="w-full xl:w-1/2 2xl:w-5/12 shrink-0">
          <h1 className="text-[30px] md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-1 leading-tight" id="infraestrutura-social-title">
            Infraestrutura Social e Inclusiva
          </h1>
          <p className="text-[17px] text-slate-600 dark:text-slate-400" id="infraestrutura-social-desc">
            Acompanhamento dos investimentos em equipamentos públicos comunitários, centros de convivência, cultura e esporte no Novo PAC.
          </p>
        </div>

        <ResponsiveContainer minWidth="200px" gap="gap-3" className="flex-1" id="infraestrutura-social-kpis">
          {/* Card 1: Escala do Investimento */}
          <HeaderKpiCard
            title="ESCALA DO INVESTIMENTO"
            value="R$ 4,0 bi"
            context="Projetado até 2026"
            explanation="Volume de recursos previstos no eixo."
            source="Casa Civil / Comitê Gestor do Novo PAC"
            icon={TrendingUp}
            color="indigo"
          />

          {/* Card 2: Alcance Territorial */}
          <HeaderKpiCard
            title="ALCANCE TERRITORIAL"
            value="686"
            context="Municípios atendidos"
            explanation="Municípios com obras e projetos selecionados."
            source="Casa Civil / Presidência da República"
            icon={MapPin}
            color="emerald"
          />

          {/* Card 3: Obras em Execução */}
          <HeaderKpiCard
            title="CONTRATOS E OBRAS"
            value="182"
            context="Contratos assinados (CEUs)"
            explanation="Além de 26 obras iniciadas (CEUs) e 50 em execução no PAC Patrimônio."
            source="SNIIC Monitora / Jun. 2026"
            icon={BarChart3}
            color="amber"
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
           
        {EVIDENCES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {EVIDENCES.slice(0, 3).map((ev) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev as any} 
                onDownloadPdf={undefined}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Nenhuma notícia cadastrada no momento. Insira novas evidências para exibir nesta seção.
            </p>
          </div>
        )}
      </section>

      {/* 1. LEITURA ESTRATÉGICA */}
      <section>
        <div className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* O que observar nos próximos meses */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-orange-100 dark:border-orange-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-orange-50 dark:text-orange-900/20 leading-none pointer-events-none select-none">
                01
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">O que observar nos próximos meses</h4>
                    <div className="inline-flex bg-orange-50/80 dark:bg-orange-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-orange-700 dark:text-orange-400 font-semibold">
                        Ritmo de contratação, início das obras e capilaridade municipal
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-orange-400 dark:marker:text-orange-500/70">
                    <li>
                      <strong>Acompanhar a formalização e avanço das obras.</strong> O Boletim SNIIC (junho/2026) reporta que 182 propostas de CEUs da Cultura já possuem contratos assinados e 26 obras foram iniciadas.
                    </li>
                    <li>
                      <strong>Monitorar a priorização regional.</strong> Os critérios da Casa Civil e o Programa Territórios da Cultura confirmam o direcionamento dos recursos para territórios periféricos e municípios com populações de baixa renda, visando a redução de desigualdades.
                    </li>
                    <li>
                      <strong>Observar a maturação de entregas em 2026.</strong> O Ministério da Cultura aponta 2026 como ano de entregas estruturantes. No eixo Patrimônio do Novo PAC, 50 obras estão em execução e 21 já foram entregues.
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> Ministério da Cultura (Relatório de Gestão 2025; Boletim SNIIC Junho/2026; Programa Territórios da Cultura) e Casa Civil (Critérios de Inclusão, 2026).
                  </div>
                </div>
              </div>
            </div>

            {/* Impacto para a empresa */}
            <div className="relative bg-white dark:bg-[#111827] rounded-2xl border border-red-100 dark:border-red-900/30 p-8 shadow-sm flex flex-col">
              <div className="absolute top-8 right-8 text-[44px] font-bold text-red-50 dark:text-red-900/20 leading-none pointer-events-none select-none">
                02
              </div>

              <div className="flex flex-col gap-6 relative z-10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-red-500 dark:text-red-400" />
                  </div>
                  
                  <div className="pt-1 pr-12">
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">Impacto para a Lorenzetti</h4>
                    <div className="inline-flex bg-red-50/80 dark:bg-red-900/30 px-3 py-1.5 rounded-lg mt-1">
                      <span className="text-[13px] text-red-700 dark:text-red-400 font-semibold">
                        Cadeia de materiais de construção, instalações prediais e redes regionais
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">
                  <ul className="list-disc pl-4 space-y-2.5 marker:text-red-400 dark:marker:text-red-500/70">
                    <li>
                      <strong>A construção de novos equipamentos públicos em territórios periféricos pode gerar demanda por materiais prediais e hidrossanitários</strong>, exigindo soluções para os espaços coletivos comunitários (banheiros, vestiários, redes elétricas).
                    </li>
                    <li>
                      <strong>A formalização descentralizada de contratos (ex: 182 CEUs da Cultura) pode movimentar redes e distribuidores locais</strong>, visto que as contratações municipais tendem a abastecer os canteiros por meio do comércio da própria região.
                    </li>
                    <li>
                      <strong>O avanço das 26 obras recém-iniciadas (CEUs) e 50 em execução (Patrimônio) pode demandar acompanhamento comercial regional</strong> contínuo, mapeando municípios onde os lotes entram na etapa de instalações hidráulicas e acabamentos.
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[12px] text-slate-400">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Evidências Utilizadas:</span> Ministério da Cultura (Boletim SNIIC Monitora; Relatório de Gestão 2025) e Casa Civil.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DISTRIBUIÇÃO DOS INVESTIMENTOS E FRENTES DE ATUAÇÃO */}
      <section className="bg-white dark:bg-[#111827] p-5 md:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-[28px] font-black text-rose-300 dark:text-rose-400/60 leading-none">
              02
            </span>
            <div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 dark:text-white tracking-tight uppercase">
                DISTRIBUIÇÃO DOS INVESTIMENTOS E FRENTES DE ATUAÇÃO
              </h3>
              <p className="text-[14px] text-slate-500 dark:text-slate-400">
                Distribuição dos equipamentos públicos, frentes prioritárias do PAC Seleções e cronograma de expansão territorial
              </p>
            </div>
          </div>
        </div>

        {/* CONTAINER PRINCIPAL */}
        <div className="flex flex-col gap-6">
          
          {/* GRID SUPERIOR: 2 COLUNAS (DISTRIBUIÇÃO DE EQUIPAMENTOS & AS 3 FRENTES) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* BLOCO 1: DISTRIBUIÇÃO DOS EQUIPAMENTOS POR FRENTE (BARRAS HORIZONTAIS) */}
            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header Card */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight uppercase leading-snug">
                      DISTRIBUIÇÃO DE EQUIPAMENTOS SELECIONADOS NO NOVO PAC
                    </h4>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Unidades homologadas no Novo PAC Seleções por frente temática
                    </p>
                  </div>
                </div>

                {/* BARRAS POR TIPOLOGIA / FRENTE */}
                <div className="space-y-3 pt-1">
                  {/* Espaços Esportivos Comunitários */}
                  <div className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 text-[13.5px]">
                    <div className="w-32 sm:w-36 shrink-0">
                      <span className="text-slate-800 dark:text-slate-200 font-semibold truncate block">
                        Espaços Esportivos
                      </span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block">
                        492 municípios
                      </span>
                    </div>
                    <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full" style={{ width: '100%' }} />
                    </div>
                    <span className="w-24 text-right font-bold text-emerald-600 dark:text-emerald-400 shrink-0 text-[14.5px]">
                      500 unid.
                    </span>
                  </div>

                  {/* CEUs da Cultura - Contratos */}
                  <div className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 text-[13.5px]">
                    <div className="w-32 sm:w-36 shrink-0">
                      <span className="text-slate-800 dark:text-slate-200 font-medium truncate block">
                        CEUs da Cultura
                      </span>
                      <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider block">
                        Contratos Assinados
                      </span>
                    </div>
                    <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full" style={{ width: '79.4%' }} />
                    </div>
                    <span className="w-24 text-right font-bold text-indigo-600 dark:text-indigo-400 shrink-0 text-[14.5px]">
                      182 unid.
                    </span>
                  </div>

                  {/* PAC Patrimônio */}
                  <div className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 text-[13.5px]">
                    <div className="w-32 sm:w-36 shrink-0">
                      <span className="text-slate-800 dark:text-slate-200 font-medium truncate block">
                        PAC Patrimônio
                      </span>
                      <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
                        Obras em Execução
                      </span>
                    </div>
                    <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: '21.8%' }} />
                    </div>
                    <span className="w-24 text-right font-bold text-blue-600 dark:text-blue-400 shrink-0 text-[14.5px]">
                      50 obras
                    </span>
                  </div>

                  {/* Obras Iniciadas - CEUs */}
                  <div className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 text-[13.5px]">
                    <div className="w-32 sm:w-36 shrink-0">
                      <span className="text-slate-800 dark:text-slate-200 font-medium truncate block">
                        CEUs da Cultura
                      </span>
                      <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider block">
                        Obras Iniciadas (Jun/26)
                      </span>
                    </div>
                    <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full" style={{ width: '11.3%' }} />
                    </div>
                    <span className="w-24 text-right font-bold text-indigo-600 dark:text-indigo-400 shrink-0 text-[14.5px]">
                      26 obras
                    </span>
                  </div>

                  {/* Centros Comunitários pela Vida (CONVIVE) */}
                  <div className="p-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 text-[13.5px]">
                    <div className="w-32 sm:w-36 shrink-0">
                      <span className="text-slate-800 dark:text-slate-200 font-medium truncate block">
                        CONVIVE (MJSP)
                      </span>
                      <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider block">
                        PRONASCI 2
                      </span>
                    </div>
                    <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 dark:bg-purple-500 rounded-full" style={{ width: '6.0%' }} />
                    </div>
                    <span className="w-24 text-right font-bold text-purple-600 dark:text-purple-400 shrink-0 text-[14.5px]">
                      30 unid.
                    </span>
                  </div>
                </div>

                {/* Caixa de Interpretação: O QUE ISSO MOSTRA */}
                <div className="mt-4 p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                  <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-1">
                    O que isso mostra
                  </span>
                  <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    Os dados sinalizam a transição da fase de seleção para a execução formal, com destaque para a formalização contratual de 182 CEUs e o andamento de obras do PAC Patrimônio em territórios de menor acesso e regiões periféricas.
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: Boletim SNIIC Monitora, Ministério da Cultura, Ministério do Esporte e Casa Civil — 2026
              </div>
            </div>

            {/* BLOCO 2: AS 3 FRENTES ESTRUTURANTES DA INFRAESTRUTURA SOCIAL */}
            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header Card */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800/50 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight uppercase leading-snug">
                      AS 3 FRENTES ESTRUTURANTES DA INFRAESTRUTURA SOCIAL
                    </h4>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Direcionamento dos recursos e tipologia das intervenções nos territórios
                    </p>
                  </div>
                </div>

                {/* 4 DIMENSÕES DAS FRENTES */}
                <div className="space-y-3 pt-0.5">
                  
                  {/* 1. CEUs da Cultura */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3.5">
                    <div className="shrink-0 text-center min-w-[95px]">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-[24px] font-black text-indigo-600 dark:text-indigo-400 tracking-tight leading-none">
                          229
                        </span>
                      </div>
                      <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 block mt-1 tracking-wider leading-tight">
                        CEUs da Cultura<br />em 218 municípios
                      </span>
                      <span className="inline-block mt-1 text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                        MinC / PAC
                      </span>
                    </div>
                    <div className="border-l border-slate-200 dark:border-slate-700/60 pl-3 py-0.5">
                      <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug font-medium">
                        Centros integrados com <strong>cultura, educação, esporte e cidadania</strong> em áreas de alta vulnerabilidade social.
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                        Equipamentos multiuso com auditórios, salas multiuso e biblioteca.
                      </p>
                    </div>
                  </div>

                  {/* 2. Espaços Esportivos Comunitários */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Espaços Esportivos Comunitários
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        Total: <strong>500 unidades</strong>
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-[11.5px]">
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-2 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Municípios</span>
                        <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-[13px]">492</span>
                      </div>
                      <div className="bg-orange-50/60 dark:bg-orange-950/30 py-1.5 px-2 rounded-lg border border-orange-200/50 dark:border-orange-900/40">
                        <span className="text-slate-600 dark:text-slate-400 block text-[10.5px] font-medium">Foco</span>
                        <span className="font-extrabold text-orange-600 dark:text-orange-400 text-[13px]">Periferias</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-2 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Gestão</span>
                        <span className="font-extrabold text-purple-600 dark:text-purple-400 text-[13px]">M. Esporte</span>
                      </div>
                    </div>

                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-snug pt-0.5">
                      Instalação de quadras poliesportivas, campos society e estruturas voltadas à <strong>prática esportiva comunitária e lazer</strong>.
                    </p>
                  </div>

                  {/* 3. Projeto CONVIVE (Cidadania e Assistência) */}
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Projeto CONVIVE (PRONASCI 2)
                      </span>
                      <span className="text-[10px] text-slate-400">30 centros selecionados</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-[11.5px]">
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Assistência</span>
                        <span className="font-bold text-slate-900 dark:text-white text-[13.5px]">Social</span>
                        <span className="text-[9.5px] text-slate-400 block mt-0.5">Atendimento</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Formação</span>
                        <span className="font-bold text-slate-900 dark:text-white text-[13.5px]">Cidadã</span>
                        <span className="text-[9.5px] font-semibold text-rose-500 dark:text-rose-400 block mt-0.5">Jovens</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/40 py-1.5 px-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Segurança</span>
                        <span className="font-bold text-slate-900 dark:text-white text-[13.5px]">Cidadã</span>
                        <span className="text-[9.5px] text-slate-400 block mt-0.5">MJSP</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-0.5">
                      Centros Comunitários pela Vida voltados à integração de serviços de assistência, formação, esporte e cidadania em áreas críticas.
                    </p>
                  </div>

                  {/* 4. Recorte de Escopo e Investimento */}
                  <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Investimento Total Previsto
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-700 dark:text-slate-300">
                        Volume: <span className="text-indigo-600 dark:text-indigo-400 font-black">R$ 4,0 bi</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[12px]">
                      <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-800/60">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Horizonte PPA</span>
                        <span className="text-[14px] font-bold text-slate-900 dark:text-white block mt-0.5">2024–2027</span>
                      </div>
                      <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-800/60">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10.5px]">Meta de Eixo</span>
                        <span className="text-[14px] font-bold text-slate-900 dark:text-white block mt-0.5">Redução Desigualdades</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-0.5">
                      Recursos vinculados formalmente ao Plano Plurianual (PPA 2024–2027) para fortalecimento dos equipamentos sociais.
                    </p>
                  </div>

                </div>

                {/* Caixa de Conclusão: O QUE ISSO MOSTRA */}
                <div className="mt-3.5 p-3.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-400 block mb-1">
                    O que isso mostra
                  </span>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    A infraestrutura social inclusiva articula múltiplos ministérios para entregar equipamentos comunitários multiuso, gerando capilaridade em periferias e cidades do interior.
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: MinC, Ministério do Esporte, MJSP e Mensagem Presidencial do PPA 2024–2027
              </div>
            </div>

          </div>

          {/* PARTE INFERIOR: CRONOGRAMA & VETORES DE SUSTENTAÇÃO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* BLOCO 3: CRONOGRAMA DE MATURAÇÃO DOS INVESTIMENTOS (ESQUERDA - 7 colunas) */}
            <div className="lg:col-span-7 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800/50 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight uppercase leading-snug">
                      CICLO DE MATURAÇÃO DAS OBRAS (2024–2027)
                    </h4>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Fases do Novo PAC Seleções até a entrega dos equipamentos públicos
                    </p>
                  </div>
                </div>

                {/* TIMELINE VISUAL */}
                <div className="py-5 px-2 sm:px-4">
                  <div className="relative">
                    {/* Linha horizontal conectora alinhada ao centro dos pontos */}
                    <div className="absolute bottom-[7px] left-[15%] right-[15%] h-0.5 bg-slate-300 dark:bg-slate-700 flex items-center z-0">
                      <div className="w-[66%] h-full bg-amber-400 dark:bg-amber-500" />
                      <div className="w-[34%] h-full border-t-2 border-dashed border-slate-300 dark:border-slate-600" />
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 absolute -right-2 -top-1.5" />
                    </div>

                    {/* Os 3 Pontos com números acima */}
                    <div className="grid grid-cols-3 text-center relative z-10">
                      {/* 2024 */}
                      <div className="flex flex-col items-center">
                        <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          2024
                        </span>
                        <span className="text-[18px] sm:text-[22px] font-black text-amber-600 dark:text-amber-400 tracking-tight leading-none mb-3">
                          Seleção
                        </span>
                        <div className="w-4 h-4 rounded-full bg-amber-400 dark:bg-amber-500 border-2 border-white dark:border-slate-900 shadow-sm shrink-0" />
                      </div>

                      {/* 2025/2026 */}
                      <div className="flex flex-col items-center">
                        <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          2025/2026
                        </span>
                        <span className="text-[18px] sm:text-[22px] font-black text-amber-600 dark:text-amber-400 tracking-tight leading-none mb-3">
                          R$ 4,0 bi
                        </span>
                        <div className="w-4 h-4 rounded-full bg-amber-400 dark:bg-amber-500 border-2 border-white dark:border-slate-900 shadow-sm shrink-0" />
                      </div>

                      {/* 2027 (ENTREGA) */}
                      <div className="flex flex-col items-center">
                        <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          2027
                        </span>
                        <span className="text-[18px] sm:text-[22px] font-black text-amber-600 dark:text-amber-400 tracking-tight leading-none mb-3">
                          Entregas
                        </span>
                        <div className="w-4 h-4 rounded-full bg-amber-400 dark:bg-amber-500 border-2 border-white dark:border-slate-900 shadow-sm shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caixa de Interpretação: O QUE OBSERVAR */}
                <div className="mt-4 p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-0.5">
                    O que observar
                  </span>
                  <p className="text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                    <strong>A fase de maior demanda por materiais de construção e instalações prediais concentra-se na execução física das obras civis entre 2025 e 2027.</strong>
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: Casa Civil e PPA 2024–2027
              </div>
            </div>

            {/* BLOCO 4: VETORES DE SUSTENTAÇÃO DO EIXO (DIREITA - 5 colunas) */}
            <div className="lg:col-span-5 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-400/30" />
                  <h4 className="text-[14.5px] font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                    VETORES DE SUSTENTAÇÃO DO EIXO SOCIAL
                  </h4>
                </div>

                {/* 3 VETORES EXPLICATIVOS */}
                <div className="space-y-2.5">
                  {/* Vetor 1: Previsão no PPA */}
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <div>
                        <span className="text-[12px] font-bold text-slate-900 dark:text-white block">
                          1. Previsão orçamentária no PPA 2024–2027
                        </span>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          Enquadramento formal como um dos 9 eixos estruturantes do programa federal.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vetor 2: Parceria Federativa com Municípios */}
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[12px] font-bold text-slate-900 dark:text-white">
                            2. Parceria Federativa
                          </span>
                          <span className="text-[12px] font-extrabold text-blue-600 dark:text-blue-400">(686 mun.)</span>
                        </div>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          Execução descentralizada com disponibilização de terrenos e gestão pelos municípios.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vetor 3: Integração Interministerial */}
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                      <div>
                        <span className="text-[12px] font-bold text-slate-900 dark:text-white block">
                          3. Articulação Interministerial
                        </span>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          Atuação conjunta entre MinC, Ministério do Esporte e MJSP para equipamentos multiuso.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusão do painel */}
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 space-y-1">
                  <p className="text-[12px] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                    A continuidade dos investimentos depende do cumprimento dos cronogramas e da capacidade de execução dos municípios conveniados.
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 italic leading-snug">
                    Balanço oficial do Novo PAC e editais setoriais.
                  </p>
                </div>
              </div>

              {/* Fonte */}
              <div className="mt-4 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 text-[11.5px] text-slate-400">
                Fonte: Casa Civil e Ministérios Setoriais — 2026
              </div>
            </div>

          </div>

          {/* FAIXA DE INFERÊNCIA ESTRATÉGICA */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 block mb-0.5">
                INFERÊNCIA ESTRATÉGICA
              </span>
              <p className="text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed">
                A maturação de 182 contratos assinados (CEUs) e a execução de obras do Patrimônio sinalizam que a etapa burocrática está sendo superada. Para os fornecedores de materiais, a capilaridade desses canteiros em áreas periféricas exigirá acompanhamento comercial junto a redes distribuidoras e instaladores regionais.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUTRAS NOTÍCIAS */}
      {EVIDENCES.length > 3 && (
        <section id="evidencias" className="scroll-mt-12 relative mt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-[13px] font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">Outras Notícias</h2>
            </div>
          </div>
             
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {EVIDENCES.slice(3).map((ev) => (
              <EvidenceCard 
                key={ev.id} 
                evidence={ev as any} 
                onDownloadPdf={undefined}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
