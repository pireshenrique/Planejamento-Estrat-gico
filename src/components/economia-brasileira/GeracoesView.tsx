import React from 'react';
import { DollarSign, Home, Heart, Target, BrainCircuit, ExternalLink, Activity, Briefcase, Users, Building, ShoppingCart, BarChart3, TrendingUp, AlertTriangle, Lightbulb, ArrowRight, RefreshCcw, Search } from 'lucide-react';

interface GeracoesViewProps {
  setActivePage: (page: string) => void;
}

export function GeracoesView({ setActivePage }: GeracoesViewProps) {
  return (
    <div className="space-y-12 pb-10 font-sans text-slate-800 dark:text-slate-200">
        
        {/* 1. TOPO: TESE CENTRAL E FONTE */}
        <header className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6 transition-colors">
            <div>
              <h1 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">Dossiê Executivo</h1>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Gen Z e Millennials 2026</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-lg shadow-sm transition-colors">
              <span className="font-bold text-slate-700 dark:text-slate-300">Fonte:</span> 
              <span className="text-slate-600 dark:text-slate-400">Deloitte Global Survey</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 hidden sm:block"></span>
              <span className="font-medium text-slate-600 dark:text-slate-400">+22.500 pessoas</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 hidden sm:block"></span>
              <span className="font-medium text-slate-600 dark:text-slate-400">44 países</span>
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-12 -translate-y-12 pointer-events-none">
               <TrendingUp className="w-96 h-96" />
            </div>
            
            <div className="relative z-10 w-full lg:w-1/2">
              <span className="inline-block px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold tracking-widest uppercase text-[12px] mb-5 border border-indigo-500/30">
                Resumo das Evidências
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 text-white tracking-tight">
                Prioridades da <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Gen Z e Millennials</span> no trabalho
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                Com base no levantamento com mais de 22.500 pessoas em 44 países, os dados indicam padrões claros de comportamento que influenciam a atração e retenção destes profissionais.
              </p>
            </div>
            
            <div className="relative z-10 w-full lg:w-1/2">
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                <h4 className="text-indigo-200 font-bold text-sm uppercase tracking-wider mb-4">Principais Fatores Identificados</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                    <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                      <strong className="text-white font-medium">Custo de vida:</strong> Impacta o adiamento de grandes decisões e dita o modelo de trabalho desejado.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                    <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                      <strong className="text-white font-medium">Tecnologia:</strong> Adoção autônoma e acelerada de Inteligência Artificial no cotidiano (74%).
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                    <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                      <strong className="text-white font-medium">Gestão:</strong> Baixo interesse pelo modelo tradicional de liderança, associado a risco de burnout.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></div>
                    <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                      <strong className="text-white font-medium">Retenção:</strong> Fortemente atrelada ao senso de propósito da empresa e à existência de laços de amizade.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* 2. PRINCIPAIS EVIDÊNCIAS (GRÁFICOS) */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Principais Evidências em Dados</h3>
          </div>
          <div className="flex flex-col gap-6">
            
            {/* Card 1: Financeiro */}
            <div className="bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-8 lg:items-center hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <div className="lg:w-5/12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Custo de Vida e Moradia</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  O custo de vida é a principal preocupação. A dificuldade de acesso à moradia própria altera o comportamento, forçando o adiamento de grandes decisões e impactando ativamente as escolhas de modelo de trabalho e carreira.
                </p>
              </div>
              
              <div className="lg:w-7/12 w-full flex flex-col gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-4 md:p-5">
                  <span className="text-[13px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">Adiaram grandes decisões de vida pela situação financeira</span>
                  <div className="flex items-center gap-6">
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Gen Z</span>
                      <span className="text-2xl md:text-3xl font-black text-blue-600 dark:text-blue-400">55%</span>
                    </div>
                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Millennials</span>
                      <span className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400">52%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-4 md:p-5">
                  <span className="text-[13px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">Custo da moradia dita onde e como preferem trabalhar</span>
                  <div className="flex items-center gap-6">
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Gen Z</span>
                      <span className="text-2xl md:text-3xl font-black text-blue-600 dark:text-blue-400">69%</span>
                    </div>
                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Millennials</span>
                      <span className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400">64%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: IA */}
            <div className="bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-8 lg:items-center hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
              <div className="lg:w-5/12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Adoção Autônoma de IA</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  A adoção de ferramentas de Inteligência Artificial acontece de forma rápida e individual, com colaboradores buscando atalhos de produtividade por conta própria, à revelia das diretrizes formais.
                </p>
              </div>
              
              <div className="lg:w-7/12 w-full flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 border border-purple-100 dark:border-purple-800/50 flex flex-col justify-center items-center text-center">
                  <span className="text-4xl md:text-5xl font-black text-purple-700 dark:text-purple-400 mb-2">74%</span>
                  <span className="font-bold text-purple-900 dark:text-purple-300 mb-2 text-sm">Usam IA no trabalho</span>
                  <span className="text-[12px] font-black uppercase tracking-wider text-purple-700 dark:text-purple-400 bg-purple-100/60 dark:bg-purple-900/40 px-2 py-1 rounded">Gen Z & Millennials</span>
                </div>

                <div className="flex-1 bg-orange-50 dark:bg-orange-900/20 rounded-xl p-5 border border-orange-100 dark:border-orange-800/50 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 dark:text-orange-400 shrink-0" />
                    <span className="font-bold text-orange-900 dark:text-orange-300 text-sm">Descompasso Corporativo</span>
                  </div>
                  <p className="text-sm text-orange-800 dark:text-orange-200/80 leading-relaxed">
                    <strong className="text-2xl font-black block mb-1 text-orange-600 dark:text-orange-400">~30%</strong>
                    afirmam que a empresa não está preparada ou não oferece suporte para as mudanças da IA.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Liderança */}
            <div className="bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-8 lg:items-center hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
              <div className="lg:w-5/12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Crise no Modelo de Liderança</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  O interesse das novas gerações em assumir cargos de gestão existe, mas o modelo tradicional é amplamente rejeitado por ser percebido como tóxico e exaustivo.
                </p>
                <div className="mt-5">
                  <span className="text-[12px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">Barreiras para assumir gestão:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 rounded text-[13px] font-bold border border-rose-100 dark:border-rose-800/50">Alto Risco de Burnout</span>
                    <span className="px-2.5 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 rounded text-[13px] font-bold border border-rose-100 dark:border-rose-800/50">Carga Desproporcional</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-7/12 w-full flex flex-col gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 md:p-5 rounded-xl border border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                  <span className="text-[13px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Têm a liderança como alvo principal?</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">Apenas</span>
                    <span className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-200">6%</span>
                  </div>
                </div>
                
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 md:p-5 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                  <span className="text-[13px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-500 mb-3 block">Mas consideram assumir cargos de liderança:</span>
                  <div className="flex items-center gap-6">
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300">Gen Z</span>
                      <span className="text-2xl md:text-3xl font-black text-emerald-700 dark:text-emerald-400">76%</span>
                    </div>
                    <div className="w-px h-8 bg-emerald-200 dark:bg-emerald-800/50"></div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300">Millennials</span>
                      <span className="text-2xl md:text-3xl font-black text-emerald-700 dark:text-emerald-400">67%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Retenção */}
            <div className="bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-8 lg:items-center hover:border-rose-300 dark:hover:border-rose-700 transition-colors">
              <div className="lg:w-5/12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Propósito e Retenção</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  A retenção de talentos está intrinsecamente ligada a fatores intangíveis. O alinhamento com o propósito ético da empresa e a qualidade das conexões humanas são determinantes para a permanência.
                </p>
              </div>
              
              <div className="lg:w-7/12 w-full flex flex-col gap-4">
                <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-5 border border-rose-100 dark:border-rose-800/50">
                  <span className="text-[13px] font-black uppercase tracking-wider text-rose-800 dark:text-rose-400 mb-3 block">O papel do Propósito</span>
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex-1 bg-white/80 dark:bg-slate-800/50 p-4 rounded-xl border border-rose-100/50 dark:border-rose-800/30 flex flex-col items-center text-center">
                      <span className="text-3xl font-black text-rose-600 dark:text-rose-400 mb-1">96%</span>
                      <span className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider">da Gen Z</span>
                    </div>
                    <div className="flex-1 bg-white/80 dark:bg-slate-800/50 p-4 rounded-xl border border-rose-100/50 dark:border-rose-800/30 flex flex-col items-center text-center">
                      <span className="text-3xl font-black text-rose-600 dark:text-rose-400 mb-1">97%</span>
                      <span className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider">dos Millennials</span>
                    </div>
                  </div>
                  <p className="text-sm text-rose-900 dark:text-rose-200 font-medium text-center bg-rose-100/50 dark:bg-rose-900/30 p-3 rounded-lg">
                    Afirmam que ter um <strong>senso de propósito</strong> é fundamental para a sua satisfação e bem-estar no trabalho.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-100 dark:border-blue-800/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-[13px] font-black uppercase tracking-wider text-blue-800 dark:text-blue-400">O peso das Amizades (Gen Z)</span>
                  </div>
                  <p className="text-sm text-blue-900 dark:text-blue-200 mb-4 font-medium leading-relaxed">
                    As amizades impactam diretamente a retenção: a porcentagem de jovens (Gen Z) que pretendem <strong>ficar mais de 5 anos</strong> na empresa cresce substancialmente quando eles têm amigos no trabalho.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 bg-white/60 dark:bg-slate-800/50 p-4 rounded-xl border border-blue-100/50 dark:border-blue-800/30 flex flex-col justify-between">
                       <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 leading-snug">Pretendem ficar +5 anos<br/><strong className="text-slate-700 dark:text-slate-300 block mt-0.5">Sem amigos próximos</strong></span>
                       <span className="text-3xl font-black text-slate-400 dark:text-slate-500">33%</span>
                    </div>
                    <div className="hidden sm:flex items-center justify-center">
                       <ArrowRight className="w-5 h-5 text-blue-400 dark:text-blue-600" />
                    </div>
                    <div className="flex-1 bg-blue-600 dark:bg-blue-700 p-4 rounded-xl border border-blue-700 dark:border-blue-800 flex flex-col justify-between shadow-sm">
                       <span className="text-xs font-medium text-blue-100 mb-3 leading-snug">Pretendem ficar +5 anos<br/><strong className="text-white block mt-0.5">Com amigos próximos</strong></span>
                       <span className="text-3xl font-black text-white">48%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. IMPACTO PARA A LORENZETTI */}
        <section className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Activity className="w-7 h-7 text-rose-500 dark:text-rose-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Impacto para a Lorenzetti</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 ml-10">Levantamento de potenciais riscos e oportunidades (hipóteses observacionais).</p>
          </div>
          
          <div className="flex flex-col gap-6 ml-10">
            {/* Tema 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col lg:flex-row hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <div className="lg:w-1/3 p-6 bg-slate-50 dark:bg-slate-800/50 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg"><DollarSign className="w-5 h-5"/></div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Custo de Vida e Moradia</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  A inabilidade de prever estabilidade financeira e a dificuldade em adquirir moradia própria moldam decisões mais conservadoras de carreira.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-[12px] uppercase">RH</span>
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-[12px] uppercase">Comercial</span>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 flex flex-col sm:flex-row gap-8">
                <div className="flex-1">
                  <span className="text-[13px] font-black uppercase tracking-wider text-rose-500 block mb-3 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Impacto Lorenzetti - Riscos</span>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-3">
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div> Pode gerar pressão contínua por aumentos de remuneração.</li>
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div> Pode aumentar a resistência ao retorno 100% presencial pelo custo de deslocamento.</li>
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div> Pode gerar maior sensibilidade a preços no padrão de consumo.</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <span className="text-[13px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-3 flex items-center gap-1"><Lightbulb className="w-3 h-3"/> Impacto Lorenzetti - Oportunidades</span>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-3">
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-300 dark:bg-blue-600 mt-1.5 shrink-0"></div> Pode criar oportunidades de retenção ao estruturar benefícios que atuem diretamente no alívio do custo de vida.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tema 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col lg:flex-row hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
              <div className="lg:w-1/3 p-6 bg-slate-50 dark:bg-slate-800/50 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg"><BrainCircuit className="w-5 h-5"/></div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Adoção Autônoma de IA</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Colaboradores estão utilizando IA por conta própria (74%) para poupar tempo, frequentemente operando à frente das diretrizes da empresa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-[12px] uppercase">Tecnologia</span>
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-[12px] uppercase">Processos</span>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 flex flex-col sm:flex-row gap-8">
                <div className="flex-1">
                  <span className="text-[13px] font-black uppercase tracking-wider text-rose-500 block mb-3 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Impacto Lorenzetti - Riscos</span>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-3">
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div> Pode representar risco de vazamento de dados via ferramentas não homologadas (Shadow IT).</li>
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div> Pode criar abismos de produtividade e qualidade técnica entre membros da mesma equipe.</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <span className="text-[13px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-3 flex items-center gap-1"><Lightbulb className="w-3 h-3"/> Impacto Lorenzetti - Oportunidades</span>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-3">
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-purple-300 dark:bg-purple-600 mt-1.5 shrink-0"></div> Pode gerar ganhos reais de escala se a empresa implementar treinamentos para nivelar o conhecimento.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tema 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col lg:flex-row hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
              <div className="lg:w-1/3 p-6 bg-slate-50 dark:bg-slate-800/50 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-lg"><Briefcase className="w-5 h-5"/></div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Rejeição ao Modelo Gerencial</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  O cargo de liderança é visto como fonte de estresse e burnout, afastando talentos que preferem estabilidade técnica a gestão tóxica.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-[12px] uppercase">Gestão</span>
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-[12px] uppercase">RH</span>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 flex flex-col sm:flex-row gap-8">
                <div className="flex-1">
                  <span className="text-[13px] font-black uppercase tracking-wider text-rose-500 block mb-3 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Impacto Lorenzetti - Riscos</span>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-3">
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div> Pode comprometer seriamente o pipeline de sucessão no médio prazo.</li>
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div> Pode gerar estagnação de talentos críticos na base operacional da empresa.</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <span className="text-[13px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-3 flex items-center gap-1"><Lightbulb className="w-3 h-3"/> Impacto Lorenzetti - Oportunidades</span>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-3">
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-300 dark:bg-emerald-600 mt-1.5 shrink-0"></div> Pode abrir espaço para fortalecer as trilhas de carreira técnica (Carreira em Y) na organização.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tema 4 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col lg:flex-row hover:border-rose-300 dark:hover:border-rose-700 transition-colors">
              <div className="lg:w-1/3 p-6 bg-slate-50 dark:bg-slate-800/50 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 rounded-lg"><Heart className="w-5 h-5"/></div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Propósito e Autenticidade</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  O alinhamento ético e os rituais reais de conexão humana deixaram de ser benefícios e passaram a ser pré-requisitos de permanência.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-[12px] uppercase">Cultura</span>
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-[12px] uppercase">Marca (ESG)</span>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 flex flex-col sm:flex-row gap-8">
                <div className="flex-1">
                  <span className="text-[13px] font-black uppercase tracking-wider text-rose-500 block mb-3 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Impacto Lorenzetti - Riscos</span>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-3">
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div> Pode despencar rapidamente a retenção caso haja desalinhamento entre discurso e prática.</li>
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div> Pode prejudicar a força da marca empregadora em processos de atração.</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <span className="text-[13px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-3 flex items-center gap-1"><Lightbulb className="w-3 h-3"/> Impacto Lorenzetti - Oportunidades</span>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 flex flex-col gap-3">
                    <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-300 dark:bg-rose-600 mt-1.5 shrink-0"></div> Pode aumentar o engajamento através da criação de momentos reais para conexões e amizades no trabalho.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400 flex items-start gap-3">
              <BrainCircuit className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" />
              <p>
                <strong className="text-slate-700 dark:text-slate-300">Análise assistida por Inteligência Artificial:</strong> Os impactos, riscos e oportunidades apresentados acima foram gerados como hipóteses baseadas nas evidências e dados da pesquisa. Eles servem para direcionar debates estratégicos e não constituem decisões absolutas.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex justify-center pb-8 transition-colors">
          <a href="https://www.deloitte.com/global/en/issues/work/genzmillennialsurvey.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ExternalLink className="w-5 h-5" />
            Abrir PDF Original (Deloitte)
          </a>
        </div>

    </div>
  );
}
