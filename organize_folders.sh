#!/bin/bash
set -e

mkdir -p src/components/economia-brasileira/pib
mkdir -p src/components/economia-brasileira/juros
mkdir -p src/components/economia-brasileira/emprego
mkdir -p src/components/economia-brasileira/endividamento

mv src/components/economia-brasileira/PibView.tsx src/components/economia-brasileira/pib/
mv src/components/economia-brasileira/ExportacoesView.tsx src/components/economia-brasileira/pib/
mv src/components/economia-brasileira/GovernoView.tsx src/components/economia-brasileira/pib/
mv src/components/setores-produtivos/* src/components/economia-brasileira/pib/
rmdir src/components/setores-produtivos/

mv src/components/economia-brasileira/JurosView.tsx src/components/economia-brasileira/juros/
mv src/components/economia-brasileira/JurosRealView.tsx src/components/economia-brasileira/juros/

mv src/components/economia-brasileira/EmpregosView.tsx src/components/economia-brasileira/emprego/
mv src/components/economia-brasileira/DesempregosView.tsx src/components/economia-brasileira/emprego/
mv src/components/economia-brasileira/EmpregosDesempregosView.tsx src/components/economia-brasileira/emprego/

mv src/components/economia-brasileira/EndividamentoFamiliasView.tsx src/components/economia-brasileira/endividamento/
mv src/components/economia-brasileira/EndividamentoEmpresasView.tsx src/components/economia-brasileira/endividamento/
mv src/components/economia-brasileira/EndividamentoFamiliasEmpresasView.tsx src/components/economia-brasileira/endividamento/

echo "Folders organized"
