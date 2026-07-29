import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    displayTitle: z.string().optional(),
    date: z.coerce.date(),
    day: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    edition: z.enum(['morning', 'evening']),
    description: z.string(),
    topics: z.array(z.string()).min(1),
    topicSlugs: z.array(z.string()).min(1),
    contentTypes: z.array(z.enum(['essay', 'short-short', 'flash-fiction', 'dialogue', 'observation'])).min(1),
    readingTitles: z.array(z.string()).min(1),
    hashtags: z.array(z.object({
      label: z.string(),
      slug: z.string().regex(/^[a-z0-9-]+$/),
    })).default([]),
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

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    day: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    type: z.enum(['essay', 'short-short', 'flash-fiction', 'dialogue', 'observation']),
    description: z.string(),
    articleSlug: z.string(),
    topics: z.array(z.string()).min(1),
    topicSlugs: z.array(z.string()).min(1),
    hashtags: z.array(z.object({
      label: z.string(),
      slug: z.string().regex(/^[a-z0-9-]+$/),
    })).default([]),
    readingTime: z.number().int().positive(),
  }),
});

const monthly = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), displayTitle: z.string().optional(), year: z.number().int(), month: z.number().int().min(1).max(12),
    period: z.string().regex(/^\d{4}-\d{2}$/), date: z.coerce.date(), description: z.string(),
    topics: z.array(z.string()).min(1), topicSlugs: z.array(z.string()).min(1), readingTime: z.number().int().positive(),
    featured: z.boolean().default(false), draft: z.boolean(),
    sources: z.array(z.object({ publisher: z.string(), title: z.string(), url: z.string().url(), publishedAt: z.string() })),
  }).refine((data) => data.topics.length === data.topicSlugs.length, { message: 'topics と topicSlugs の数を一致させてください' }),
});
const monthlyParts = defineCollection({ type: 'content', schema: z.object({ period: z.string().regex(/^\d{4}-\d{2}$/), partSlug: z.string().regex(/^[a-z0-9-]+$/), order: z.number().int().min(1), title: z.string(), description: z.string(), readingTime: z.number().int().positive() }) });

export const collections = { news, works, monthly, monthlyParts };
