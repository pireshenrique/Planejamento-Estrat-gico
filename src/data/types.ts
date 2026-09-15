export type StatusAprovacao = "pending" | "approved" | "rejected" | "review";

export interface EvidenciaAssociada {
  titulo: string;
  data: string;
  fonte: string;
  categoria: string;
  url: string;
  url_status?: "valid" | "invalid" | "error" | "unprovided";
}

export interface TendenciaEstrategica {
  id: string;
  titulo: string;
  descricao: string;
  fatores_principais: string[];
  relevancia_estrategica: string;
  confianca: "Alto" | "Médio" | "Baixo" | string;
  horizonte: "Curto prazo" | "Médio prazo" | "Longo prazo" | string;
  fontes_principais: string[];
  evidencias: EvidenciaAssociada[];
  status: StatusAprovacao;
}

export interface PageProps {
  setActivePage?: (page: string) => void;
}
