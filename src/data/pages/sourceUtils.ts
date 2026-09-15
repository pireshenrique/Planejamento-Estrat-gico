import { PageSource } from './types';

export function toSourceSlug(sourceName: string): string {
  if (!sourceName) return 'fonte-desconhecida';
  return sourceName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function extractUniqueSources(
  evidences: Array<{ source?: string; dateStr?: string; url?: string; type?: string }>
): PageSource[] {
  const map = new Map<string, PageSource>();
  for (const ev of evidences) {
    if (!ev || !ev.source) continue;
    const slug = toSourceSlug(ev.source);
    if (!map.has(slug)) {
      map.set(slug, {
        id: slug,
        name: ev.source,
        dateStr: ev.dateStr || '',
        url: ev.url,
        type: ev.type || 'Relatório / Notícia'
      });
    }
  }
  return Array.from(map.values());
}
