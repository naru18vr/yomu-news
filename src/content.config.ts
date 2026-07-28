import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    day: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    edition: z.enum(['morning', 'evening']),
    description: z.string(),
    topics: z.array(z.string()).min(1),
    topicSlugs: z.array(z.string()).min(1),
    contentTypes: z.array(z.enum(['essay', 'short-short', 'flash-fiction', 'dialogue', 'observation'])).min(1),
    readingTitles: z.array(z.string()).min(1),
    keywords: z.array(z.string()).default([]),
    readingTime: z.number().int().positive(),
    featured: z.boolean().default(false),
    sources: z.array(z.object({
      publisher: z.string(),
      title: z.string(),
      url: z.string().url(),
      publishedAt: z.string(),
    })).min(1),
  }),
});

export const collections = { news };
