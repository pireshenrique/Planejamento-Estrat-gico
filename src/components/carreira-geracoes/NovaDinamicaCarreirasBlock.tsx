import React, { useState } from 'react';
import { 
  GitFork, 
  ArrowUpRight, 
  Repeat, 
  TrendingUp, 
  CheckCircle2, 
  Heart, 
  Compass, 
  Layers, 
  Sparkles, 
  HelpCircle, 
  Info,
  Building2,
  Workflow
} from 'lucide-react';

export const NovaDinamicaCarreirasBlock: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparativo' | 'vetores' | 'retencao'>('comparativo');

  return (
    <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
      {/* HEADER DO BLOCO */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
            <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Mapeamento Estrutural • Cenário Ocupacional 2026</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            A Nova Dinâmica das Carreiras: Mapa Visual da Mobilidade Profissional
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Estrutura visual comparativa dos novos fluxos de transição profissional, canais de ascensão técnica e direcionadores de permanência documentados nos relatórios recentes.
          </p>
        </div>

        {/* NAVEGAÇÃO ENTRE ABAS DO BLOCO */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl shrink-0 self-start lg:self-center border border-slate-200/60 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('comparativo')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'comparativo'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Modelos de Carreira</span>
          </button>
          <button
            onClick={() => setActiveTab('vetores')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'vetores'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>3 Vetores de Mobilidade</span>
          </button>
          <button
            onClick={() => setActiveTab('retencao')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'retencao'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Fatores de Retenção</span>
          </button>
        </div>
      </div>

      {/* CONTEÚDO DA ABA 1: COMPARATIVO ENTRE MODELOS */}
      {activeTab === 'comparativo' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* MODELO TRADICIONAL */}
            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Modelo Linear
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      A Escada Corporativa Tradicional
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    Histórico
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700/50">
                    <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300 shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Direção Estritamente Vertical
                      </p>
                      <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
                        Progresso medido por degraus hierárquicos rígidos (Operacional → Supervisão → Gerência → Diretoria).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700/50">
                    <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300 shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Gestão de Pessoas Obrigatória para Ganho Salarial
                      </p>
                      <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
                        O especialista técnico era forçado a virar gestor administrativo para obter aumentos salariais relevantes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700/50">
                    <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300 shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Tempo de Casa e Estabilidade
                      </p>
                      <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
                        Permanência de longo prazo em uma única organização como principal sinal de sucesso e lealdade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-[11.5px] text-amber-800 dark:text-amber-300">
                <strong>Limitação documentada:</strong> Gera perda de talentos técnicos de alta perícia que não desejam assumir encargos de gestão burocrática, além de turnover por frustração de carreira.
              </div>
            </div>

            {/* NOVO PARADIGMA: MULTIDIMENSIONAL & CARREIRA EM Y */}
            <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-blue-100 dark:border-blue-900/50">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Novo Paradigma
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Carreira em Y e Mobilidade em Rede
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                    Tendência 2026
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-blue-100 dark:border-blue-900/40">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-900/70 flex items-center justify-center font-bold text-xs text-blue-700 dark:text-blue-300 shrink-0">
                      <GitFork className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Bifurcação Técnica vs. Gestão (Carreira em Y)
                      </p>
                      <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
                        Especialistas em automação, engenharia de produto e ferramentaria ascendem salarialmente sem virar chefia.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-blue-100 dark:border-blue-900/40">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-900/70 flex items-center justify-center font-bold text-xs text-blue-700 dark:text-blue-300 shrink-0">
                      <Repeat className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Mobilidade Lateral e Intersetorial
                      </p>
                      <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
                        Mais de 40% dos trabalhadores demonstram intenção de transição de área ou requalificação via capacitação contínua.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-blue-100 dark:border-blue-900/40">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-900/70 flex items-center justify-center font-bold text-xs text-blue-700 dark:text-blue-300 shrink-0">
                      <Heart className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Equilíbrio de Vida e Saúde Mental como Moeda
                      </p>
                      <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
                        Salário é fator higiênico; permanência é condicionada por ambiente saudável, flexibilidade e respeito aos limites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-100/70 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-[11.5px] text-blue-900 dark:text-blue-200">
                <strong>Vantagem observada:</strong> Retenção de competências críticas fabris e técnicas, mitigando o apagão de mão de obra especializada no setor produtivo.
              </div>
            </div>
          </div>

          {/* DIAGRAMA EXPLICATIVO DA CARREIRA EM Y */}
          <div className="bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Workflow className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Estrutura de Bifurcação: Como Funciona a Carreira em Y na Prática
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Base Comum (Entrada)
                </span>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  Assistente / Analista / Técnico Júnior e Pleno
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Desenvolvimento das competências operacionais e técnicas fundamentais.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <div className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-800 text-xs font-bold text-blue-700 dark:text-blue-300">
                  Ponto de Bifurcação (Senioridade)
                </div>
                <div className="w-full flex justify-between items-center text-[11px] font-semibold text-slate-500">
                  <span>◀ Trilha Especialista</span>
                  <span>Trilha Gestão ▶</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-center">
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase block mb-0.5">
                    Trilha Especialista
                  </span>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    Especialista Master / Consultor Técnico
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    Equiparado a Gerente/Diretor em salário e prestígio.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-center">
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase block mb-0.5">
                    Trilha Gestão
                  </span>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    Coordenador / Gerente / Diretor
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    Foco em liderança de times, orçamento e processos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTEÚDO DA ABA 2: 3 VETORES DE MOBILIDADE PROFISSIONAL */}
      {activeTab === 'vetores' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* VETOR 1 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                    VETOR 01 • TURNOVER ATIVO
                  </span>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">&gt; 50%</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Troca de Emprego Ativa
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Pesquisa do LinkedIn com trabalhadores brasileiros revela que mais da metade dos profissionais planeja mudar de empregador em 2026.
                </p>

                <div className="space-y-2 text-[11.5px] text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span>Busca por melhores salários e benefícios diante do custo de vida.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span>Sensação de estagnação ou falta de perspectiva de crescimento interno.</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-[10.5px] text-slate-500 dark:text-slate-400">
                Fonte: Pesquisa LinkedIn Brasil / Exame (Fev 2026)
              </div>
            </div>

            {/* VETOR 2 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                    VETOR 02 • TRANSIÇÃO DE ÁREA
                  </span>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">&gt; 40%</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Mudança de Carreira / Área
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Levantamento da CNN Brasil aponta que mais de 40% dos entrevistados pretendem mudar completamente de profissão ou segmento.
                </p>

                <div className="space-y-2 text-[11.5px] text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Busca por segmentos com maior flexibilidade e autonomia.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>Investimento pessoal em cursos de requalificação (upskilling/reskilling).</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-[10.5px] text-slate-500 dark:text-slate-400">
                Fonte: CNN Brasil / Consultorias de Carreira (Fev 2026)
              </div>
            </div>

            {/* VETOR 3 */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                    VETOR 03 • RETENÇÃO ESPECIALISTA
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Indústria</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Trilha Técnica / Carreira em Y
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Empresas industriais estruturam trilhas para manter talentos em chão de fábrica automatizado, projeto técnico e manutenção sem impor gestão de pessoas.
                </p>

                <div className="space-y-2 text-[11.5px] text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Preservação do know-how técnico em processos de alta precisão.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Mitigação da escassez de operadores especialistas e projetistas.</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-[10.5px] text-slate-500 dark:text-slate-400">
                Fonte: CNI / ABRH / SENAI (2025/2026)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTEÚDO DA ABA 3: FATORES DE RETENÇÃO (ALÉM DO SALÁRIO) */}
      {activeTab === 'retencao' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  O que faz as pessoas permanecerem no trabalho quando o salário já não é suficiente?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Evidência documental da Forbes Brasil (Jan 2026) apontando os pilares que determinam a fidelização de talentos.
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shrink-0">
              Forbes Brasil 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80">
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                Pilar 01
              </span>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Saúde Mental e Equilíbrio
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Prevenção ao esgotamento (burnout), respeito às jornadas e limites entre vida pessoal e trabalho tornaram-se condicionantes essenciais.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80">
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                Pilar 02
              </span>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Cultura e Liderança Humana
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Gestores empáticos e ambientes com segurança psicológica superam estruturas autoritárias ou puramente baseadas em metas agressivas.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                Pilar 03
              </span>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Aprendizado e Capacitação
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Acesso a treinamentos contínuos de tecnologias emergentes e upskilling para manter a empregabilidade no longo prazo.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80">
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
                Pilar 04
              </span>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Flexibilidade Operacional
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Modelos híbridos, flexibilidade de horários e autonomia na condução das tarefas diárias sem microgerenciamento constante.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* RASTREABILIDADE DOCUMENTAL */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span>Evidências Utilizadas: LinkedIn Brasil (Fev/2026), CNN Brasil (Fev/2026), Forbes Brasil (Jan/2026), CNI / ABRH (2025/2026).</span>
        </div>
        <span className="text-[11px] font-medium text-slate-400">
          Governança Estratégica 2027–2037
        </span>
      </div>
    </div>
  );
};
