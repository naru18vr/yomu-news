import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsArticle = CollectionEntry<'news'>;

export async function getNews(): Promise<NewsArticle[]> {
  const articles = await getCollection('news');
  return articles.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function articlesOnDay(articles: NewsArticle[], day: string): NewsArticle[] {
  return articles
    .filter((article) => article.data.day === day)
    .sort((a, b) => a.data.edition === 'morning' ? -1 : b.data.edition === 'morning' ? 1 : 0);
}
