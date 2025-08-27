import rss from '@astrojs/rss';
import { a as getCollection } from '../chunks/_astro_content_DKFm-Ywi.mjs';
import { s as siteUrl } from '../chunks/utils_DzU96_J-.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection("articles", ({ data }) => data.status === "published");
  return rss({
    title: "l’Ouvreuse",
    description: "Journal sportif féminin",
    site: siteUrl() || context.site || "http://localhost:4321",
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.excerpt,
      link: `/articles/${p.slug}/`,
      pubDate: new Date(p.data.date)
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
