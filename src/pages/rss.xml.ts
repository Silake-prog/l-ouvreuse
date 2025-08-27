import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteUrl } from '../lib/utils';

export async function GET(context){
  const posts = await getCollection('articles', ({data}) => data.status==='published');
  return rss({
    title: "l’Ouvreuse",
    description: 'Journal sportif féminin',
    site: siteUrl() || context.site || 'http://localhost:4321',
    items: posts.map(p => ({
      title: p.data.title,
      description: p.data.excerpt,
      link: `/articles/${p.slug}/`,
      pubDate: new Date(p.data.date)
    }))
  });
}
