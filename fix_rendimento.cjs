const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src/components/economia-brasileira/EmpregosView.tsx');
const destPath = path.join(__dirname, 'src/components/economia-brasileira/RendimentoBrasileiroView.tsx');

let content = fs.readFileSync(srcPath, 'utf8');

// Component name
content = content.replace(/EmpregosView/g, 'RendimentoBrasileiroView');

// Imports
content = content.replace(/EMPREGO_EVIDENCES/g, 'RENDIMENTO_EVIDENCES');
content = content.replace(/import \{ RENDIMENTO_EVIDENCES \} from '\.\.\/\.\.\/data\/evidences\/emprego';/, "import { RENDIMENTO_EVIDENCES } from '../../data/evidences/rendimento';");
content = content.replace(/Criação de Empregos Formais/g, 'Evolução do Rendimento');
content = content.replace(/Caged, IBGE e Ministério do Trabalho/g, 'IBGE, XP Investimentos e Observatório das Desigualdades');
content = content.replace(/Uma análise estrutural sobre a geração de vagas com carteira assinada/g, 'Uma análise estrutural sobre o crescimento da renda e da massa salarial');

// Top KPIs
content = content.replace(/\+10,1 milhões/g, 'R$ 3.726');
content = content.replace(/Vagas formais criadas/g, 'Rendimento médio (1º Tri/26)');
content = content.replace(/Total acumulado de novos postos/g, 'Alta de 4,0% em relação a 2025');

content = content.replace(/\+4,1%/g, 'R$ 377,7 bi');
content = content.replace(/Crescimento no 1º Semestre/g, 'Massa de rendimento em 2026');
content = content.replace(/Ritmo de expansão/g, 'Alta de 4,8% em um ano');

content = content.replace(/62,89 mi/g, 'R$ 3.560');
content = content.replace(/Total de vínculos ativos/g, 'Média anual de rendimento em 2025');
content = content.replace(/Estoque de empregos/g, 'Crescimento de 5,7% e nível recorde');

// Left side - Chart Title / Subtitle
content = content.replace(/Contribuição por setor/g, 'Perspectivas e Estrutura');
content = content.replace(/Empregos formais adicionados entre 2023 e junho de 2026\./g, 'Projeções de crescimento (XP) e indicadores macro.');

// Left side items
// 1. Serviços -> Rendimento
content = content.replace(/Serviços/g, 'Rendimento Médio Real');
content = content.replace(/\+8,45 milhões/g, '≈ 2,0%');
content = content.replace(/\(≈84% do total\)/g, '(Projeção 2026)');
// change width: '100%' to '20%' for the first one
content = content.replace(/style=\{\{ width: '100%' \}\}/g, "style={{ width: '20%' }}");

// 2. Indústria -> Massa Salarial
content = content.replace(/Indústria/g, 'Massa Salarial Real');
content = content.replace(/\+832 mil/g, '≈ 3,5%');
content = content.replace(/style=\{\{ width: '26%' \}\}/g, "style={{ width: '35%' }}");

// 3. Construção Civil -> Renda Disponível
content = content.replace(/Construção Civil/g, 'Renda Disponível');
content = content.replace(/\+354 mil/g, '≈ 4,2%');
content = content.replace(/style=\{\{ width: '16%' \}\}/g, "style={{ width: '42%' }}");

// 4. Agropecuária -> Desocupação
content = content.replace(/Agropecuária/g, 'Taxa de Desocupação');
content = content.replace(/\+197 mil/g, '5,6%');
content = content.replace(/style=\{\{ width: '9%' \}\}/g, "style={{ width: '56%' }}");

// 5. Comércio -> Desigualdade
content = content.replace(/Comércio/g, 'Desigualdade de Renda');
content = content.replace(/\(Variação percentual\)/g, '(1% mais ricos vs 50% mais pobres)');
content = content.replace(/\+3,3% no período/g, '31,5x maior');

// Left Footer
content = content.replace(/Total adicionado no período: <strong>\+10,1 milhões<\/strong>/g, 'Ritmo projetado: <strong>Desaceleração em 2026</strong>');
content = content.replace(/Base: 2023 – Jun\/2026/g, 'Fonte: XP Investimentos');

// Right side - Insights
content = content.replace(/Principais sinais do crescimento do emprego formal/g, 'Principais sinais estruturais da renda');

// Insight 1
content = content.replace(/≈84%/g, '≈2%');
content = content.replace(/do total/g, 'em 2026');
content = content.replace(/DA EXPANSÃO VEIO DE RENDIMENTO MÉDIO REAL/g, 'DESACELERAÇÃO PROJETADA PELA XP'); // Note: we already replaced Serviços with Rendimento
content = content.replace(/Cerca de 84% dos 10,1 milhões de empregos adicionados no período foram gerados no setor de Rendimento Médio Real\./g, 'O rendimento médio real do trabalho deve crescer cerca de 2% em 2026, com a massa salarial avançando 3,5%.');

// Insight 2
content = content.replace(/\+1,19 mi/g, '31,5x');
content = content.replace(/combinados/g, 'maior renda');
content = content.replace(/MASSA SALARIAL REAL \+ RENDA DISPONÍVEL/g, 'DESIGUALDADE ESTRUTURAL PERMANECE');
content = content.replace(/Empregos adicionados pelos dois setores no período, reforçando sua contribuição à atividade produtiva e construtiva\./g, 'O 1% mais rico mantém renda 31,5 vezes superior à dos 50% mais pobres, com disparidades de gênero e raça.');

// Insight 3
// we replaced 62,89 mi with R$ 3.560 earlier, so now the text says "R$ 3.560" here.
// Let's replace the whole Insight 3 block text
content = content.replace(/R\$ 3\.560<\/span>\s*<span className="text-\[10px\] uppercase font-bold text-slate-400 dark:text-slate-500 block mt-1 tracking-wider">\s*em jun\/2026/g, 'R$ 3.726</span>\n                        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mt-1 tracking-wider">\n                          no 1º tri/26');
content = content.replace(/TOTAL DE EMPREGOS FORMAIS EM JUNHO\/2026/g, 'RENDA CONTINUA SUBINDO (IBGE)');
content = content.replace(/O país chegou a R\$ 3\.560 de empregos formais em junho de 2026, com aumento de 2,46 milhões no primeiro semestre \(R\$ 377,7 bi\)\./g, 'Rendimento real habitual chegou a R$ 3.726 no trimestre encerrado em maio de 2026, alta de 4,0% em um ano.');


// Mensagem Chave
content = content.replace(/O crescimento do emprego formal permanece fortemente concentrado em /g, 'O rendimento e a massa salarial atingiram patamares recordes, mas ');
content = content.replace(/<strong className="font-extrabold text-blue-700 dark:text-blue-300">Rendimento Médio Real<\/strong>, enquanto <strong className="font-extrabold text-amber-700 dark:text-amber-300">Massa Salarial Real<\/strong> e <strong className="font-extrabold text-emerald-700 dark:text-emerald-300">Renda Disponível<\/strong> adicionam escala relevante ao mercado de trabalho\./g, 'o crescimento tende a desacelerar em 2026 e a <strong className="font-extrabold text-purple-700 dark:text-purple-300">alta desigualdade</strong> permanece como um entrave estrutural à expansão da base de consumo.');


// Right Footer
content = content.replace(/Padrão estrutural: <strong>Alta concentração setorial<\/strong>/g, 'Cenário estrutural: <strong>Desigualdade persistente</strong>');
content = content.replace(/Ritmo 1º Sem\/26: <strong>R\$ 377,7 bi<\/strong>/g, '');

fs.writeFileSync(destPath, content, 'utf8');
console.log('Done');
