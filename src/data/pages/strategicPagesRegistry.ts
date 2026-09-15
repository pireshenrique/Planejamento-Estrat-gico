import { StrategicPageContext } from './types';
import { JORNADA_COMPRA_PAGE } from './JornadaCompra';
import { PERFIL_CONSUMO_PAGE } from './PerfilConsumo';
import { ENDIVIDAMENTO_FAMILIAS_PAGE } from './EndividamentoFamilias';
import { ENDIVIDAMENTO_EMPRESAS_PAGE } from './EndividamentoEmpresas';
import { RENDIMENTO_BRASILEIRO_PAGE } from './RendimentoBrasileiro';
import { LARES_UNIPESSOAIS_PAGE } from './LaresUnipessoais';
import { JUROS_REAL_PAGE } from './JurosReal';
import { JUROS_SELIC_PAGE } from './JurosSelic';
import { CAMBIO_PAGE } from './Cambio';
import { EMPREGO_PAGE } from './Emprego';
import { INFLACAO_IPCA_PAGE } from './InflacaoIpca';
import { EletroeletronicoContext } from './Eletroeletronico';
import { PIB_PAGE } from './Pib';
import { EXPORTACOES_PAGE } from './Exportacoes';
import { IDH_PAGE } from './Idh';
import { NOVO_PAC_PAGE } from './NovoPac';
import { REFORMA_TRIBUTARIA_PAGE } from './ReformaTributaria';
import { ELEICOES_PAGE } from './Eleicoes';
import { DEFICIT_HABITACIONAL_PAGE } from './DeficitHabitacional';
import { MERCADO_IMOBILIARIO_PAGE } from './MercadoImobiliario';
import { PROGRAMAS_SOCIAIS_PAGE } from './ProgramasSociais';
import { COMMODITIES_PAGE } from './Commodities';
import { CENARIO_LOGISTICO_PAGE } from './CenarioLogistico';
import { GEOPOLITICA_AFRICA_PAGE } from './GeopoliticaAfrica';
import { GEOPOLITICA_AMERICA_DO_NORTE_PAGE } from './GeopoliticaAmericaDoNorte';
import { GEOPOLITICA_AMERICA_LATINA_PAGE } from './GeopoliticaAmericaLatina';
import { GEOPOLITICA_ASIA_PAGE } from './GeopoliticaAsia';
import { GEOPOLITICA_CONFLITOS_PAGE } from './GeopoliticaConflitos';
import { GEOPOLITICA_ECONOMIA_MUNDIAL_PAGE } from './GeopoliticaEconomiaMundial';
import { GEOPOLITICA_EUROPA_PAGE } from './GeopoliticaEuropa';
import { CHINA_PAGE } from './China';
import { ESTADOS_UNIDOS_PAGE } from './EstadosUnidos';
import { FENOMENOS_CLIMATICOS_PAGE } from './FenomenosClimaticos';
import { MUDANCAS_CLIMATICAS_PAGE } from './MudancasClimaticas';
import { AQUECIMENTO_GLOBAL_PAGE } from './AquecimentoGlobal';
import { ENERGIA_RENOVAVEL_PAGE } from './EnergiaRenovavel';
import { MERCADO_CARBONO_PAGE } from './MercadoCarbono';
import { MARCOS_REGULATORIOS_PAGE } from './MarcosRegulatorios';
import { DATA_CENTERS_PAGE } from './DataCenters';
import {
  CASA_CONECTADA_PAGE,
  ECOMMERCE_PAGE,
  TENDENCIAS_PRODUTO_PAGE,
  TRANSFORMACAO_VAREJO_PAGE,
  TRANSFORMACOES_SOCIAIS_PAGE
} from './MercadologicoPlaceholders';

export const ALL_STRATEGIC_PAGES: StrategicPageContext[] = [
  // Cenário Mercadológico
  JORNADA_COMPRA_PAGE,
  PERFIL_CONSUMO_PAGE,

  // Economia Brasileira
  PIB_PAGE,
  EXPORTACOES_PAGE,
  IDH_PAGE,
  NOVO_PAC_PAGE,
  REFORMA_TRIBUTARIA_PAGE,
  ELEICOES_PAGE,
  ENDIVIDAMENTO_FAMILIAS_PAGE,
  ENDIVIDAMENTO_EMPRESAS_PAGE,
  RENDIMENTO_BRASILEIRO_PAGE,
  JUROS_REAL_PAGE,
  JUROS_SELIC_PAGE,
  CAMBIO_PAGE,
  EMPREGO_PAGE,
  INFLACAO_IPCA_PAGE,
  EletroeletronicoContext,

  // Cenário Habitacional
  DEFICIT_HABITACIONAL_PAGE,
  LARES_UNIPESSOAIS_PAGE,
  MERCADO_IMOBILIARIO_PAGE,
  PROGRAMAS_SOCIAIS_PAGE,

  // Meio Ambiente e Clima (Lote 2)
  FENOMENOS_CLIMATICOS_PAGE,
  MUDANCAS_CLIMATICAS_PAGE,
  AQUECIMENTO_GLOBAL_PAGE,

  // Energia e Infraestrutura (Lote 2)
  ENERGIA_RENOVAVEL_PAGE,
  MERCADO_CARBONO_PAGE,
  MARCOS_REGULATORIOS_PAGE,
  DATA_CENTERS_PAGE,

  // Geopolítica & Economia Global / Commodities / Logística
  COMMODITIES_PAGE,
  CENARIO_LOGISTICO_PAGE,
  GEOPOLITICA_AFRICA_PAGE,
  GEOPOLITICA_AMERICA_DO_NORTE_PAGE,
  GEOPOLITICA_AMERICA_LATINA_PAGE,
  GEOPOLITICA_ASIA_PAGE,
  GEOPOLITICA_CONFLITOS_PAGE,
  GEOPOLITICA_ECONOMIA_MUNDIAL_PAGE,
  GEOPOLITICA_EUROPA_PAGE,

  // Economia Mundial (Lote 3)
  CHINA_PAGE,
  ESTADOS_UNIDOS_PAGE,

  // Placeholders (Lote 3)
  CASA_CONECTADA_PAGE,
  ECOMMERCE_PAGE,
  TENDENCIAS_PRODUTO_PAGE,
  TRANSFORMACAO_VAREJO_PAGE,
  TRANSFORMACOES_SOCIAIS_PAGE
];

export function getStrategicPagesContext(): StrategicPageContext[] {
  return ALL_STRATEGIC_PAGES.filter(p => p.status !== 'placeholder');
}

export function getAllStrategicPages(): StrategicPageContext[] {
  return ALL_STRATEGIC_PAGES;
}
