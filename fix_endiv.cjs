const fs = require('fs');

let content = fs.readFileSync('src/components/economia-brasileira/endividamento/EndividamentoFamiliasView.tsx', 'utf-8');
const search = `export const EndividamentoFamiliasView: React.FC<EndividamentoFamiliasViewProps> = ({ setActivePage, embedded = false }) => {
  const getVal = (id: string) => ENDIVIDAMENTO_FAMILIAS_PAGE.factualContent.find(f => f.id === id)?.value?.toString().replace(".", ",");
  embedded = false
}) => {`;

const repl = `export const EndividamentoFamiliasView: React.FC<EndividamentoFamiliasViewProps> = ({ setActivePage, embedded = false }) => {
  const getVal = (id: string) => ENDIVIDAMENTO_FAMILIAS_PAGE.factualContent.find(f => f.id === id)?.value?.toString().replace(".", ",");`;

content = content.replace(search, repl);
fs.writeFileSync('src/components/economia-brasileira/endividamento/EndividamentoFamiliasView.tsx', content);
