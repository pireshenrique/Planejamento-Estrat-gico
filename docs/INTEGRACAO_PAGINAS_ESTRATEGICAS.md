# Guia de Integração de Páginas Estratégicas (Ciclo 2027–2037)

Este documento estabelece o padrão arquitetural obrigatório para criação, estruturação e integração de novas páginas, dados e evidências no **Portal de Planejamento Estratégico 2027–2037** da Lorenzetti.

---

## 1. Princípios Fundamentais de Governança

1. **Fonte Única de Verdade (Single Source of Truth):**
   - Nenhum número, percentual, valor monetário ou indicador deve ser "hardcoded" dentro de componentes JSX/TSX.
   - Todo dado quantitativo deve residir em um arquivo de dados dedicado sob `src/data/<modulo>/<indicador>.ts`.

2. **Diferenciação Estrita de Camadas:**
   - **Fato / Evidência:** Informação objetiva extraída diretamente de fontes confiáveis (IBGE, FGV, CNI, Abinee, etc.) com rastreabilidade completa (URL, data, instituição).
   - **Interpretação Estratégica:** Síntese analítica construída a partir da correlação de fatos existentes na base.
   - **Implicação para a Lorenzetti:** Hipóteses de impacto (sempre formuladas no modo condicional: *"Pode gerar"*, *"Pode demandar"*, *"Pode pressionar"* — nunca em tom categórico como *"Gerará"* ou *"Exigirá"*).

3. **Arquitetura Editorial do Relatório:**
   - O **Relatório Estratégico Consolidado** é estático, versionado e controlado editorialmente (`src/data/publishedReport.ts`).
   - A criação de uma nova página ou indicador **NÃO** altera o relatório publicado em tempo de execução. O relatório só é atualizado mediante solicitação explícita de revisão editorial da equipe.

---

## 2. Estrutura de Arquivos de um Novo Subtema

Ao integrar um novo subtema (por exemplo: `TransicaoEnergetica`), crie e registre a seguinte estrutura:

```
src/
├── data/
│   ├── energia/
│   │   └── transicaoEnergeticaData.ts      <-- 1. Dados e séries estruturadas
│   ├── pages/
│   │   ├── transicaoEnergeticaPage.ts      <-- 2. Contexto da Página (StrategicPageContext)
│   │   └── strategicPagesRegistry.ts       <-- 3. Registro no Registry Central
│   └── portalNavigation.ts                 <-- 4. Item de Navegação (se aplicável)
└── components/
    ├── layout/
    │   └── StrategicPortal.tsx             <-- 5. Rota e Renderizador no Portal
    └── energia/
        └── TransicaoEnergeticaPage.tsx     <-- 6. Componente Visual de Apresentação
```

---

## 3. Passo a Passo de Implementação

### Passo 1: Arquivo de Dados Estruturados (`src/data/<tema>/...`)
Defina valores numéricos puros (não strings formatadas) para viabilizar cálculos e formatação na camada de exibição:

```typescript
export interface TransicaoEnergeticaData {
  capacidadeInstaladaSolar: {
    value: 43.5,
    unit: 'GW',
    period: '2026',
    source: 'Absolar / ONS'
  };
  // ...
}
```

### Passo 2: Contexto Estratégico (`src/data/pages/<id>Page.ts`)
Toda página deve exportar um objeto compatível com a interface `StrategicPageContext`:

```typescript
import { StrategicPageContext } from '../../types';

export const transicaoEnergeticaPageContext: StrategicPageContext = {
  id: 'transicao-energetica',
  portalRouteId: 'transicao-energetica', // Rota única correspondente no portal
  title: 'Transição Energética e Renovação da Matriz',
  group: 'Energia e Infraestrutura',
  status: 'analyzable', // Use 'placeholder' se a página ainda não possuir dados reais
  lastUpdated: '2026-09-15',
  summary: 'Mapeamento do avanço das fontes renováveis e impactos na matriz brasileira.',
  factualContent: [
    {
      id: 'transicao-energetica::solar::capacidade-instalada',
      claim: 'A energia solar atingiu 43,5 GW de capacidade instalada no Brasil em 2026.',
      sources: [
        {
          institution: 'Absolar',
          title: 'Panorama da Energia Solar Fotovoltaica no Brasil',
          year: 2026,
          url: 'https://absolar.org.br'
        }
      ]
    }
  ],
  existingAnalysis: [
    'A expansão acelerada da geração distribuída aumenta a relevância de soluções elétricas integradas.'
  ],
  implications: [
    'Pode abrir oportunidades para expansão de produtos integrados a sistemas inteligentes de aquecimento e gestão de energia.'
  ]
};
```

### Passo 3: Registro em `src/data/pages/strategicPagesRegistry.ts`
Adicione o novo contexto ao registry para que seja considerado nas métricas de cobertura e auditoria:

```typescript
import { transicaoEnergeticaPageContext } from './transicaoEnergeticaPage';

export const STRATEGIC_PAGES_REGISTRY: StrategicPageContext[] = [
  // ... outras páginas
  transicaoEnergeticaPageContext,
];
```

### Passo 4: Integração de Rota em `src/components/layout/StrategicPortal.tsx`
Certifique-se de que a rota e o componente correspondente estão mapeados em `customPageRoutes` e no renderizador principal da página:

```typescript
// No customPageRoutes:
'Transição Energética': 'transicao-energetica',

// No renderizador:
{activePage === 'Transição Energética' && (
  <TransicaoEnergeticaPage setActivePage={setActivePage} />
)}
```

---

## 4. Checklist de Validação da Nova Página

Antes de finalizar a integração, execute o seguinte checklist:

- [ ] Os dados numéricos estão centralizados na camada `src/data/`?
- [ ] Todas as afirmações factuais possuem fonte, título e instituição associados?
- [ ] O ID de cada fato segue o padrão persistente `<pageId>::<bloco>::<slug>`?
- [ ] A página está registrada no `strategicPagesRegistry.ts` com status `analyzable` ou `placeholder`?
- [ ] O `portalRouteId` coincide exatamente com a rota no `StrategicPortal.tsx`?
- [ ] As implicações para a Lorenzetti utilizam linguagem probabilística/hipotética?
- [ ] O projeto compila sem erros (`npm run build` / `compile_applet`)?
