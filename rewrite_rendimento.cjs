const fs = require('fs');
const path = require('path');
let content = fs.readFileSync('/tmp/template.tsx', 'utf8');

// 1. Rename Component
content = content.replace(/EmpregosView/g, 'RendimentoBrasileiroView');

// 2. Imports and Evidences
content = content.replace(/EMPREGO_EVIDENCES/g, 'RENDIMENTO_EVIDENCES');
content = content.replace(/import \{ RENDIMENTO_EVIDENCES \} from '\.\.\/\.\.\/data\/evidences\/emprego';/g, "import { RENDIMENTO_EVIDENCES } from '../../data/evidences/rendimento';");

// 3. Header Texts
content = content.replace(/Criação de Empregos Formais/g, 'Evolução do Rendimento');
content = content.replace(/Uma análise estrutural sobre a geração de vagas com carteira assinada/g, 'Uma análise estrutural sobre o crescimento da renda e da massa salarial');
content = content.replace(/Caged, IBGE e Ministério do Trabalho/g, 'IBGE, XP Investimentos e Observatório das Desigualdades');

// 4. TOP KPIS
content = content.replace(/\+10,1 milhões/g, 'R$ 3.726');
content = content.replace(/Vagas formais criadas/g, 'Rendimento médio (1º Tri/26)');
content = content.replace(/Total acumulado de novos postos/g, 'Alta de 4,0% em relação a 2025');

content = content.replace(/\+4,1%/g, 'R$ 377,7 bi');
content = content.replace(/Crescimento no 1º Semestre/g, 'Massa de rendimento em 2026');
content = content.replace(/Ritmo de expansão/g, 'Alta de 4,8% em um ano');

content = content.replace(/62,89 mi/g, 'R$ 3.560');
content = content.replace(/Total de vínculos ativos/g, 'Média anual de rendimento em 2025');
content = content.replace(/Estoque de empregos/g, 'Crescimento de 5,7% e nível recorde');


// 5. LEFT SIDE: Bars
content = content.replace(/Contribuição por setor/g, 'Projeções Macro (XP)');
content = content.replace(/Empregos formais adicionados entre 2023 e junho de 2026\./g, 'Visão de crescimento para 2026');
content = content.replace(/>\s*Dados Brutos\s*</g, '>Perspectiva<');

// Bar 1: Serviços
content = content.replace(/Serviços/g, 'Rendimento Médio Real');
content = content.replace(/\+8,45 milhões/g, '≈ 2%');
content = content.replace(/\(≈84% do total\)/g, ''); // we can just remove this text, or change it
content = content.replace(/style=\{\{ width: '100%' \}\}/g, "style={{ width: '40%' }}");

// Bar 2: Indústria
content = content.replace(/Indústria/g, 'Massa Salarial Real');
content = content.replace(/\+832 mil/g, 'Avanço de 3,5%');
content = content.replace(/style=\{\{ width: '26%' \}\}/g, "style={{ width: '70%' }}");

// Bar 3: Construção Civil
content = content.replace(/Construção Civil/g, 'Renda Disponível das Famílias');
content = content.replace(/\+354 mil/g, 'Crescimento de 4,2%');
content = content.replace(/style=\{\{ width: '16%' \}\}/g, "style={{ width: '84%' }}");

// Bar 4: Agropecuária
content = content.replace(/Agropecuária/g, 'Impacto Fiscal');
content = content.replace(/\+197 mil/g, 'Depende de medidas');
content = content.replace(/style=\{\{ width: '9%' \}\}/g, "style={{ width: '50%' }}");

// Left Footer
content = content.replace(/Total adicionado no período/g, 'Ritmo 2026');
content = content.replace(/\+10,1 milhões/g, 'Deve continuar crescendo, mas em ritmo menor');
content = content.replace(/Base: 2023 – Jun\/2026/g, 'Fonte: XP Investimentos');


// 6. RIGHT SIDE: Insights (Leitura Estratégica)
content = content.replace(/Principais sinais do crescimento do emprego formal/g, 'Principais sinais estruturais da renda');

// Insight 1
content = content.replace(/≈84%/g, '≈2%');
content = content.replace(/do total/g, 'em 2026');
content = content.replace(/DA EXPANSÃO VEIO DE RENDIMENTO MÉDIO REAL/g, 'DESACELERAÇÃO PROJETADA PELA XP');
content = content.replace(/Cerca de 84% dos 10,1 milhões de empregos adicionados no período foram gerados no setor de Rendimento Médio Real\./g, 'O rendimento médio real do trabalho deve crescer cerca de 2% em 2026, indicando um avanço em ritmo menor.');

// Insight 2
content = content.replace(/\+1,19 mi/g, '31,5x');
content = content.replace(/combinados/g, 'maior renda');
content = content.replace(/MASSA SALARIAL REAL \+ RENDA DISPONÍVEL DAS FAMÍLIAS/g, 'DESIGUALDADE ESTRUTURAL PERMANECE');
content = content.replace(/Empregos adicionados pelos dois setores no período, reforçando sua contribuição à atividade produtiva e construtiva\./g, 'O 1% mais rico mantém renda 31,5 vezes superior à dos 50% mais pobres, com disparidades de gênero e raça.');

// Insight 3
// Let's replace the block entirely using Regex for exact texts
content = content.replace(/TOTAL DE EMPREGOS FORMAIS EM JUNHO\/2026/g, 'RENDA CONTÍNUA SUBINDO (IBGE)');
content = content.replace(/O país chegou a R\$ 3\.560 de empregos formais em junho de 2026, com aumento de 2,46 milhões no primeiro semestre \(R\$ 377,7 bi\)\./g, 'O rendimento real habitual chegou a R$ 3.726 no trimestre encerrado em maio de 2026, com massa salarial de R$ 377,7 bi (alta de 4,8%).');

// For Insight 3 number:
content = content.replace(/R\$ 3\.560<\/span>\s*<span className="text-\[10px\] uppercase font-bold text-slate-400 dark:text-slate-500 block mt-1 tracking-wider">\s*em jun\/2026/g, 'R$ 3.726</span>\n                        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mt-1 tracking-wider">\n                          no 1º tri/26');

// Message Key
content = content.replace(/O crescimento do emprego formal permanece fortemente concentrado em <strong className="font-extrabold text-blue-700 dark:text-blue-300">Rendimento Médio Real<\/strong>, enquanto <strong className="font-extrabold text-amber-700 dark:text-amber-300">Massa Salarial Real<\/strong> e <strong className="font-extrabold text-emerald-700 dark:text-emerald-300">Renda Disponível das Famílias<\/strong> adicionam escala relevante ao mercado de trabalho\./g, 'A renda e a massa salarial atingiram patamares recordes, sustentando o consumo. Contudo, o crescimento tende a desacelerar em 2026 e a alta desigualdade permanece como um entrave estrutural à expansão do mercado consumidor de base.');

// Right Footer
content = content.replace(/Padrão estrutural: <strong>Alta concentração setorial<\/strong>/g, 'Cenário estrutural: <strong>Desigualdade persistente</strong>');
content = content.replace(/Ritmo 1º Sem\/26: <strong>R\$ 377,7 bi<\/strong>/g, 'Dinâmica: <strong>Desaceleração à frente</strong>');


fs.writeFileSync('src/components/economia-brasileira/RendimentoBrasileiroView.tsx', content, 'utf8');
console.log("Rewritten completely.");
