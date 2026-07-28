// GitHub Pages project sites are served below the repository name.
// Keep this in sync with `base` in astro.config.mjs when the repository is renamed.
export const basePath = '/yomu-news/';

export function toUrl(path = ''): string {
  return `${basePath}${path.replace(/^\//, '')}`;
}
