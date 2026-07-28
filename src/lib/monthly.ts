import { getCollection, type CollectionEntry } from 'astro:content';

export type MonthlyIssue = CollectionEntry<'monthly'>;
export const monthlyDisplayTitle = (data: MonthlyIssue['data']) => data.displayTitle ?? data.title;
export const monthlyLabel = (data: MonthlyIssue['data']) => `${data.year}年${data.month}月号`;

export async function getMonthlyIssues() { return (await getCollection('monthly')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()); }
export async function getPublishedMonthlyIssues() { return (await getMonthlyIssues()).filter((issue) => !issue.data.draft); }
export async function getMonthlyIssuesByYear(year: number) { return (await getPublishedMonthlyIssues()).filter((issue) => issue.data.year === year); }
export async function getLatestMonthlyIssue() { return (await getPublishedMonthlyIssues())[0]; }
