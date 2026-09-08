import type { ConflictTopicData } from './conflitosTensoesInternacionais';

declare global {
  interface ImportMeta {
    readonly env?: {
      readonly DEV?: boolean;
      readonly PROD?: boolean;
      readonly MODE?: string;
    };
  }
}

export interface ConflictValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  metrics: {
    totalTopics: number;
    totalEvidences: number;
    totalFlags: number;
  };
}

/**
 * Valida a integridade estrutural e a qualidade de dados dos conflitos geopolíticos.
 * Não altera nem tenta corrigir os dados automaticamente.
 */
export function validateConflictTopics(topics: ConflictTopicData[]): ConflictValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const seenTopicIds = new Set<string>();
  const seenEvidenceIds = new Set<string>();

  let totalEvidences = 0;
  let totalFlags = 0;

  if (!Array.isArray(topics) || topics.length === 0) {
    errors.push('[Conflitos] A lista de tópicos está vazia ou não é um array válido.');
    return {
      valid: false,
      errors,
      warnings,
      metrics: { totalTopics: 0, totalEvidences: 0, totalFlags: 0 }
    };
  }

  for (const topic of topics) {
    const topicPrefix = `[Conflito: ${topic?.id || 'ID_INDEFINIDO'}]`;

    // 1. Validação de ID do tópico
    if (!topic.id || typeof topic.id !== 'string' || topic.id.trim() === '') {
      errors.push(`${topicPrefix} id: Identificador do conflito é obrigatório e não pode ser vazio.`);
    } else if (seenTopicIds.has(topic.id)) {
      errors.push(`${topicPrefix} id: Identificador duplicado '${topic.id}' encontrado em múltiplos conflitos.`);
    } else {
      seenTopicIds.add(topic.id);
    }

    // 2. Validação de rótulos e textos estruturais
    if (!topic.label || typeof topic.label !== 'string' || topic.label.trim() === '') {
      errors.push(`${topicPrefix} label: Título do conflito é obrigatório e não pode conter apenas espaços.`);
    }

    if (!topic.headline || typeof topic.headline !== 'string' || topic.headline.trim() === '') {
      errors.push(`${topicPrefix} headline: Manchete informativa é obrigatória e não pode conter apenas espaços.`);
    }

    if (!topic.observeSummary || typeof topic.observeSummary !== 'string' || topic.observeSummary.trim() === '') {
      errors.push(`${topicPrefix} observeSummary: Resumo de observação é obrigatório e não pode conter apenas espaços.`);
    }

    if (!topic.lorenzettiSummary || typeof topic.lorenzettiSummary !== 'string' || topic.lorenzettiSummary.trim() === '') {
      errors.push(`${topicPrefix} lorenzettiSummary: Resumo de impacto empresarial é obrigatório e não pode conter apenas espaços.`);
    }

    // 3. Validação de Ícone
    if (!topic.icon) {
      errors.push(`${topicPrefix} icon: Componente de ícone Lucide é obrigatório.`);
    }

    // 4. Validação de Bandeiras (flags)
    if (!Array.isArray(topic.flags) || topic.flags.length === 0) {
      errors.push(`${topicPrefix} flags: Deve conter pelo menos uma bandeira de país.`);
    } else {
      totalFlags += topic.flags.length;
      topic.flags.forEach((flag, index) => {
        if (!flag.code || typeof flag.code !== 'string' || flag.code.trim() === '') {
          errors.push(`${topicPrefix} flags[${index}].code: Código da bandeira é obrigatório e não pode ser vazio.`);
        }
        if (!flag.name || typeof flag.name !== 'string' || flag.name.trim() === '') {
          errors.push(`${topicPrefix} flags[${index}].name: Nome do país é obrigatório e não pode ser vazio.`);
        }
      });
    }

    // 5. Validação de Notas Observacionais (observeNotes - exatamente 3)
    if (!Array.isArray(topic.observeNotes) || topic.observeNotes.length !== 3) {
      errors.push(`${topicPrefix} observeNotes: Deve conter rigorosamente 3 notas observacionais (encontrados: ${topic.observeNotes?.length ?? 0}).`);
    } else {
      topic.observeNotes.forEach((note, index) => {
        if (!note || typeof note !== 'string' || note.trim() === '') {
          errors.push(`${topicPrefix} observeNotes[${index}]: Nota observacional não pode ser vazia ou conter apenas espaços.`);
        }
      });
    }

    // 6. Validação de Impactos Empresariais (lorenzettiImpacts - exatamente 3)
    if (!Array.isArray(topic.lorenzettiImpacts) || topic.lorenzettiImpacts.length !== 3) {
      errors.push(`${topicPrefix} lorenzettiImpacts: Deve conter rigorosamente 3 hipóteses de impacto (encontrados: ${topic.lorenzettiImpacts?.length ?? 0}).`);
    } else {
      topic.lorenzettiImpacts.forEach((impact, index) => {
        if (!impact || typeof impact !== 'string' || impact.trim() === '') {
          errors.push(`${topicPrefix} lorenzettiImpacts[${index}]: Hipótese de impacto não pode ser vazia ou conter apenas espaços.`);
        }
      });
    }

    // 7. Validação de Campos Opcionais do Conflito (se presentes, não podem ser apenas espaços)
    if (topic.description !== undefined && typeof topic.description === 'string' && topic.description.trim() === '') {
      warnings.push(`${topicPrefix} description: Campo opcional preenchido com string vazia ou apenas espaços.`);
    }

    if (topic.badge !== undefined && typeof topic.badge === 'string' && topic.badge.trim() === '') {
      warnings.push(`${topicPrefix} badge: Campo opcional preenchido com string vazia ou apenas espaços.`);
    }

    if (topic.badgeColor !== undefined && typeof topic.badgeColor === 'string' && topic.badgeColor.trim() === '') {
      warnings.push(`${topicPrefix} badgeColor: Campo opcional preenchido com string vazia ou apenas espaços.`);
    }

    if (topic.keyFactors !== undefined) {
      if (!Array.isArray(topic.keyFactors)) {
        errors.push(`${topicPrefix} keyFactors: Quando fornecido, deve ser um array.`);
      } else {
        topic.keyFactors.forEach((factor, index) => {
          if (!factor.title || typeof factor.title !== 'string' || factor.title.trim() === '') {
            errors.push(`${topicPrefix} keyFactors[${index}].title: Título do fator-chave não pode ser vazio.`);
          }
          if (!factor.desc || typeof factor.desc !== 'string' || factor.desc.trim() === '') {
            errors.push(`${topicPrefix} keyFactors[${index}].desc: Descrição do fator-chave não pode ser vazia.`);
          }
          if (!factor.status || typeof factor.status !== 'string' || factor.status.trim() === '') {
            errors.push(`${topicPrefix} keyFactors[${index}].status: Status do fator-chave não pode ser vazio.`);
          }
          if (!factor.statusColor || typeof factor.statusColor !== 'string' || factor.statusColor.trim() === '') {
            errors.push(`${topicPrefix} keyFactors[${index}].statusColor: Cor de status do fator-chave não pode ser vazia.`);
          }
        });
      }
    }

    // 8. Validação de Evidências (evidences)
    if (!Array.isArray(topic.evidences) || topic.evidences.length === 0) {
      errors.push(`${topicPrefix} evidences: Deve conter pelo menos uma evidência/notícia associada.`);
    } else {
      totalEvidences += topic.evidences.length;

      topic.evidences.forEach((ev, evIndex) => {
        const evPrefix = `${topicPrefix} / evidence[${evIndex} - ${ev.id || 'SEM_ID'}]`;

        // ID da evidência (unicidade global em todo o módulo)
        if (!ev.id || typeof ev.id !== 'string' || ev.id.trim() === '') {
          errors.push(`${evPrefix}: ID da evidência é obrigatório e não pode ser vazio.`);
        } else if (seenEvidenceIds.has(ev.id)) {
          errors.push(`${evPrefix}: ID de evidência duplicado '${ev.id}' detectado no módulo.`);
        } else {
          seenEvidenceIds.add(ev.id);
        }

        // Título
        if (!ev.title || typeof ev.title !== 'string' || ev.title.trim() === '') {
          errors.push(`${evPrefix}: Título da notícia é obrigatório e não pode conter apenas espaços.`);
        }

        // Fonte
        if (!ev.source || typeof ev.source !== 'string' || ev.source.trim() === '') {
          errors.push(`${evPrefix}: Fonte oficial da notícia é obrigatória e não pode conter apenas espaços.`);
        }

        // Datas (date e dateStr)
        if (!ev.date || typeof ev.date !== 'string' || ev.date.trim() === '') {
          errors.push(`${evPrefix}: Campo 'date' é obrigatório e não pode ser vazio.`);
        }
        if (!ev.dateStr || typeof ev.dateStr !== 'string' || ev.dateStr.trim() === '') {
          errors.push(`${evPrefix}: Campo 'dateStr' é obrigatório e não pode ser vazio.`);
        }

        // Resumo
        if (!ev.summary || typeof ev.summary !== 'string' || ev.summary.trim() === '') {
          errors.push(`${evPrefix}: Resumo executivo da evidência é obrigatório e não pode conter apenas espaços.`);
        }

        // URL estrutural
        if (!ev.url || typeof ev.url !== 'string' || ev.url.trim() === '') {
          errors.push(`${evPrefix}: URL é obrigatória e não pode ser vazia.`);
        } else {
          try {
            const parsedUrl = new URL(ev.url);
            if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
              errors.push(`${evPrefix}: Protocolo de URL inválido '${parsedUrl.protocol}'. Aceita-se apenas http: ou https:.`);
            }
          } catch {
            errors.push(`${evPrefix}: Formato de URL inválido ('${ev.url}').`);
          }
        }

        // Campos analíticos opcionais na evidência (se presentes, não podem ser apenas espaços)
        const optionalTextFields: Array<keyof typeof ev> = ['category', 'tag', 'evidence', 'brazilImpact', 'lorenzettiImpact'];
        optionalTextFields.forEach((field) => {
          const val = ev[field];
          if (val !== undefined && typeof val === 'string' && val.trim() === '') {
            warnings.push(`${evPrefix}: Campo opcional '${field}' preenchido com string vazia ou apenas espaços.`);
          }
        });
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    metrics: {
      totalTopics: topics.length,
      totalEvidences,
      totalFlags
    }
  };
}
