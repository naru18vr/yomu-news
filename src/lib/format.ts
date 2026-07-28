export const editionLabel = {
  morning: '朝刊',
  evening: '夕刊',
} as const;

export const contentTypeLabel = {
  essay: 'エッセイ',
  'short-short': 'ショートショート',
  'flash-fiction': '掌編',
  dialogue: '会話篇',
  observation: '観察記',
} as const;

export function formatDay(day: string): string {
  const [year, month, date] = day.split('-');
  return `${year}年${Number(month)}月${Number(date)}日`;
}

export function formatMonth(month: string): string {
  const [year, value] = month.split('-');
  return `${year}年${Number(value)}月`;
}
