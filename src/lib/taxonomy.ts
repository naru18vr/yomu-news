export const topics = [
  { slug: 'international', name: '国際' },
  { slug: 'politics', name: '政治' },
  { slug: 'economy', name: '経済' },
  { slug: 'science', name: '科学' },
  { slug: 'technology', name: 'テクノロジー' },
  { slug: 'society', name: '社会' },
  { slug: 'environment', name: '環境' },
  { slug: 'culture', name: '文化' },
  { slug: 'sports', name: 'スポーツ' },
  { slug: 'education', name: '教育' },
] as const;

export function topicName(slug: string): string {
  return topics.find((topic) => topic.slug === slug)?.name ?? slug;
}
