const fs = require('fs');

const srcPath = 'src/components/economia-brasileira/EmpregosView.tsx';
const destPath = 'src/components/economia-brasileira/RendimentoBrasileiroView.tsx';

let content = fs.readFileSync(srcPath, 'utf8');

// 1. Rename Component and Data
content = content.replace(/EmpregosView/g, 'RendimentoBrasileiroView');
content = content.replace(/EMPREGO_EVIDENCES/g, 'RENDIMENTO_EVIDENCES');
content = content.replace(/import \{ RENDIMENTO_EVIDENCES \} from '\.\.\/\.\.\/data\/evidences\/emprego';/, "import { RENDIMENTO_EVIDENCES } from '../../data/evidences/rendimento';");
content = content.replace(/import \{ EvidenceCard \} from '\.\.\/layout\/EvidenceCard';/, "import { EvidenceCard } from '../layout/EvidenceCard';\nimport { RENDIMENTO_EVIDENCES } from '../../data/evidences/rendimento';");

// Remove handleDownloadPdf if it exists, or just replace it with undefined
content = content.replace(/onDownloadPdf=\{ev\.isPdf \? \(\) => handleDownloadPdf\(ev\.fileName\) : undefined\}/g, 'onDownloadPdf={undefined}');
// Strip out the handleDownloadPdf function if it's there
content = content.replace(/const handleDownloadPdf = \(fileName: string\) => \{[\s\S]*?\};\n/, '');

// Remove lucide-react imports and replace them with what we need
content = content.replace(/import \{ \n  Briefcase,\n  TrendingUp,\n  Users,\n  Building2,\n  Lightbulb\n\} from 'lucide-react';/, "import { \n  DollarSign,\n  BarChart3,\n  TrendingUp,\n  Lightbulb,\n  Wallet\n} from 'lucide-react';");

// 2. HEADER
content = content.replace(/<Briefcase className="w-5 h-5" \/>/g, '<Wallet className="w-5 h-5" />');
content = content.replace(/Emprego e Renda/g, 'Rendimento do Brasileiro');
content = content.replace(/Criação de Empregos Formais/g, 'Evolução do Rendimento');
content = content.replace(/Uma análise estrutural sobre a geração de vagas com carteira assinada/g, 'Uma análise estrutural sobre o crescimento da renda e da massa salarial');
content = content.replace(/Caged, IBGE e Ministério do Trabalho/g, 'IBGE, XP Investimentos e Observatório das Desigualdades');
content = content.replace(/bg-blue-/g, 'bg-emerald-');
content = content.replace(/text-blue-/g, 'text-emerald-');
content = content.replace(/border-blue-/g, 'border-emerald-');
content = content.replace(/from-blue-/g, 'from-emerald-');

// 3. TOP KPIS
// KPI 1
content = content.replace(/<Briefcase className="w-5 h-5" \/>/, '<TrendingUp className="w-5 h-5" />');
content = content.replace(/>\s*Junho de 2026\s*</, '>1º Trimestre/26<');
content = content.replace(/>\s*\+10,1 milhões\s*</, '>R$ 3.726<');
content = content.replace(/>\s*Vagas formais criadas\s*</, '>Rendimento médio real habitual<');
content = content.replace(/>\s*Total acumulado de novos postos\s*</, '>Alta de 4,0% em relação a 2025<');

// KPI 2
content = content.replace(/<Users className="w-5 h-5" \/>/, '<DollarSign className="w-5 h-5" />');
content = content.replace(/>\s*1º Semestre\/26\s*</, '>Trimestre Mai/26<');
content = content.replace(/>\s*\+4,1%\s*</, '>R$ 377,7 bi<');
content = content.replace(/>\s*Crescimento no 1º Semestre\s*</, '>Massa de rendimento real<');
content = content.replace(/>\s*Ritmo de expansão\s*</, '>Alta de 4,8% em um ano<');

// KPI 3
content = content.replace(/<Building2 className="w-5 h-5" \/>/, '<BarChart3 className="w-5 h-5" />');
content = content.replace(/>\s*Estoque Total\s*</, '>Fechamento 2025<');
content = content.replace(/>\s*62,89 mi\s*</, '>R$ 3.560<');
content = content.replace(/>\s*Total de vínculos ativos\s*</, '>Média anual (Nível recorde)<');
content = content.replace(/>\s*Estoque de empregos\s*</, '>Alta de 5,7% em relação a 2024<');


// 4. LEFT SIDE
content = content.replace(/>\s*Contribuição por setor\s*</, '>Projeções Macro (XP)<');
content = content.replace(/>\s*Empregos formais adicionados entre 2023 e junho de 2026\.\s*</, '>Visão de crescimento para 2026<');
content = content.replace(/>\s*Dados Brutos\s*</, '>Perspectiva<');

// Bar 1: Serviços -> Rendimento Médio Real
content = content.replace(/>\s*Serviços\s*</, '>Rendimento Médio Real<');
content = content.replace(/>\s*\+8,45 milhões\s*</, '>Cerca de 2%<');
content = content.replace(/>\s*\(≈84% do total\)\s*</, '>(Projeção)<');
content = content.replace(/style=\{\{ width: '100%' \}\}/, "style={{ width: '40%' }}");

// Bar 2: Indústria -> Massa Salarial Real
content = content.replace(/>\s*Indústria\s*</, '>Massa Salarial Real<');
content = content.replace(/>\s*\+832 mil\s*</, '>Avanço de 3,5%<');
content = content.replace(/style=\{\{ width: '26%' \}\}/, "style={{ width: '70%' }}");

// Bar 3: Construção Civil -> Renda Disponível
content = content.replace(/>\s*Construção Civil\s*</, '>Renda Disponível das Famílias<');
content = content.replace(/>\s*\+360 mil\s*</, '>Crescimento de 4,2%<');
content = content.replace(/style=\{\{ width: '16%' \}\}/, "style={{ width: '84%' }}");

// Bar 4: Agropecuária -> Impacto Fiscal
content = content.replace(/>\s*Agropecuária\s*</, '>Impacto Fiscal<');
content = content.replace(/>\s*\+88 mil\s*</, '>Depende de medidas<');
content = content.replace(/style=\{\{ width: '9%' \}\}/, "style={{ width: '50%' }}");

// Bar 5: Comércio -> Desigualdade de Renda
content = content.replace(/>\s*Comércio\s*</, '>Desigualdade de Renda<');
content = content.replace(/>\s*\(Variação percentual\)\s*</, '>(1% mais ricos vs 50% mais pobres)<');
content = content.replace(/>\s*\+3,3% no período\s*</, '>31,5x maior<');

// Left Footer
content = content.replace(/Total adicionado no período: <strong>\+10,1 milhões<\/strong>/, 'Ritmo 2026: <strong>Deve continuar crescendo, mas em ritmo menor</strong>');
content = content.replace(/Base: 2023 – Jun\/2026/, 'Fonte: XP Investimentos');

// 5. RIGHT SIDE
content = content.replace(/>\s*Principais sinais do crescimento do emprego formal\s*</, '>Principais sinais estruturais da renda<');
content = content.replace(/>\s*Leitura Estratégica\s*</, '>Leitura Estratégica<');

// Insight 1
content = content.replace(/>\s*≈84%\s*</, '>≈2%<');
content = content.replace(/>\s*do total\s*</, '>em 2026<');
content = content.replace(/>\s*DA EXPANSÃO VEIO DE SERVIÇOS\s*</, '>DESACELERAÇÃO PROJETADA<');
content = content.replace(/>\s*Cerca de 84% dos 10,1 milhões de empregos adicionados no período foram gerados no setor de Serviços\.\s*</, '>O rendimento médio real do trabalho deve crescer cerca de 2% em 2026, indicando um avanço em ritmo menor.<');

// Insight 2
content = content.replace(/>\s*\+1,19 mi\s*</, '>31,5x<');
content = content.replace(/>\s*combinados\s*</, '>maior renda<');
content = content.replace(/>\s*INDÚSTRIA \+ CONSTRUÇÃO CIVIL\s*</, '>DESIGUALDADE ESTRUTURAL<');
content = content.replace(/>\s*Empregos adicionados pelos dois setores no período, reforçando sua contribuição à atividade produtiva e construtiva\.\s*</, '>O 1% mais rico mantém renda 31,5 vezes superior à dos 50% mais pobres, com disparidades de gênero e raça.<');

// Insight 3
content = content.replace(/>\s*62,89 mi\s*</, '>+4,0%<');
content = content.replace(/>\s*em jun\/2026\s*</, '>no 1º tri/26<');
content = content.replace(/>\s*TOTAL DE EMPREGOS FORMAIS EM JUNHO\/2026\s*</, '>RENDA CONTÍNUA SUBINDO<');
content = content.replace(/>\s*O país chegou a 62,89 milhões de empregos formais em junho de 2026, com aumento de 2,46 milhões no primeiro semestre \(\+4,1%\)\.\s*</, '>O rendimento real habitual atingiu R$ 3.726, mantendo alta frente a 2025, sustentando base de consumo.<');

// Right Footer
content = content.replace(/Padrão estrutural: <strong>Alta concentração setorial<\/strong>/, 'Cenário estrutural: <strong>Desigualdade persistente</strong>');
content = content.replace(/<span>Ritmo 1º Sem\/26: <strong>\+4,1%<\/strong><\/span>/, '');

// FAIXA HORIZONTAL DE MENSAGEM-CHAVE
content = content.replace(/>\s*O crescimento do emprego formal permanece fortemente concentrado em <strong className="font-extrabold text-emerald-700 dark:text-emerald-300">Serviços<\/strong>, enquanto <strong className="font-extrabold text-amber-700 dark:text-amber-300">Indústria<\/strong> e <strong className="font-extrabold text-emerald-700 dark:text-emerald-300">Construção<\/strong> adicionam escala relevante ao mercado de trabalho\.\s*</, '>A renda e a massa salarial atingiram patamares recordes, sustentando o consumo. Contudo, o crescimento tende a desacelerar em 2026 e a alta desigualdade permanece como um entrave estrutural à expansão do mercado consumidor de base.<');

// Remove Outras Noticias since we want to render the top 3 and then the rest.
// Wait, the original EmpregosView had this logic:
content = content.replace(/\{RENDIMENTO_EVIDENCES.length > 3 && \(/, '{RENDIMENTO_EVIDENCES.length > 0 && (');
content = content.replace(/RENDIMENTO_EVIDENCES\.slice\(3\)\.map/g, 'RENDIMENTO_EVIDENCES.map');
content = content.replace(/>\s*Outras Notícias\s*</, '>Evidências e Notícias<');

// Fix double import 
content = content.replace(/import \{ EvidenceCard \} from '\.\.\/layout\/EvidenceCard';\nimport \{ RENDIMENTO_EVIDENCES \} from '\.\.\/\.\.\/data\/evidences\/rendimento';\nimport \{ RENDIMENTO_EVIDENCES \} from '\.\.\/\.\.\/data\/evidences\/rendimento';/, "import { EvidenceCard } from '../layout/EvidenceCard';\nimport { RENDIMENTO_EVIDENCES } from '../../data/evidences/rendimento';");


fs.writeFileSync(destPath, content, 'utf8');
console.log('done');
