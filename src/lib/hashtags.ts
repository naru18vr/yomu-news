import type { NewsArticle } from './news';

export interface HashtagSummary {
  label: string;
  slug: string;
  count: number;
}

export function collectHashtags(articles: NewsArticle[]): HashtagSummary[] {
  const tags = new Map<string, HashtagSummary>();
  for (const article of articles) {
    for (const tag of article.data.hashtags) {
      const current = tags.get(tag.slug);
      tags.set(tag.slug, current ? { ...current, count: current.count + 1 } : { ...tag, count: 1 });
    }
  }
  return [...tags.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'ja'));
}
