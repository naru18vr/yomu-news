import type { APIRoute } from 'astro';
import { getNews } from '../lib/news';
import { toUrl } from '../lib/paths';

export const GET: APIRoute = async () => {
  const articles = await getNews();
  return new Response(JSON.stringify(articles.map((article) => ({
    title: article.data.title,
    date: article.data.day,
    edition: article.data.edition,
    description: article.data.description,
    topics: article.data.topics,
    topicSlugs: article.data.topicSlugs,
    contentTypes: article.data.contentTypes,
    readingTitles: article.data.readingTitles,
    hashtags: article.data.hashtags,
    keywords: article.data.keywords,
    readingTime: article.data.readingTime,
    url: toUrl(`articles/${article.slug}/`),
  }))), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
