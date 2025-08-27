import { a as getCollection } from '../chunks/_astro_content_DKFm-Ywi.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const base = String(context.site || "").replace(/\/$/, "");
  const urls = [
    "/",
    "/articles/",
    "/rubriques/",
    "/auteures/",
    "/a-propos/",
    "/contact/",
    "/newsletter/"
  ];
  const posts = await getCollection("articles", ({ data }) => data.status === "published");
  const rubs = await getCollection("rubriques");
  const authors = await getCollection("auteures");
  const all = [
    ...urls,
    ...posts.map((p) => `/articles/${p.slug}/`),
    ...rubs.map((r) => `/rubriques/${r.slug}/`),
    ...authors.map((a) => `/auteures/${a.slug}/`)
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((u) => `<url><loc>${base}${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
