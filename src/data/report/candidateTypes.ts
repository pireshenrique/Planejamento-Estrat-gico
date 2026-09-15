export interface CandidateFundamentacao {
  /** A afirmação factual que está sendo sustentada. */
  afirmacao: string;
  /** ID de um fato existente em src/data/pages/. Obrigatório OU evidenceId. */
  factId?: string;
  /** ID de uma evidência existente no portal. */
  evidenceId?: string;
}

export interface StrategicCandidate {
  /** CAND-001, CAND-002... IDs MT- só são atribuídos após validação. */
  id: string;
  titulo: string;
  /** FATO. Cada afirmação precisa estar em fundamentacao. */
  sinal: string;
  /** INTERPRETAÇÃO. Linguagem probabilística. */
  tendencia: string;
  /** HIPÓTESES. Até 3 cada. */
  riscosLorenzetti: string[];
  oportunidadesLorenzetti: string[];
  impacto: 'Alto' | 'Médio' | 'Baixo';
  horizonte: string;
  temasRelacionados: string[];
  supportingPageIds: string[];
  supportingFactIds: string[];
  evidenceIds: string[];
  fundamentacao: CandidateFundamentacao[];
}
