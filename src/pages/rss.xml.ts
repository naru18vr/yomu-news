import rss from '@astrojs/rss';
import { getNews } from '../lib/news';

export async function GET(context: { site: URL | undefined }) {
  const articles = await getNews();
  return rss({
    title: '読むニュース',
    description: '今日の重大ニュースを、エッセイと物語で読む。',
    site: context.site ?? 'https://naru18vr.github.io/yomu-news/',
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: `articles/${article.slug}/`,
    })),
  });
}
