import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BaAw02kb.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_TPhrbi8k.mjs';
import { a as getCollection, g as getEntryBySlug } from '../chunks/_astro_content_DKFm-Ywi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const all = (await getCollection("articles", ({ data }) => data.status === "published")).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tous les articles \u2014 l\u2019Ouvreuse", "description": "Tous nos articles." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Tous les articles</h1> <section class="grid"> ${await Promise.all(all.map(async (p) => {
    const rub = await getEntryBySlug("rubriques", p.data.rubrique);
    return renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": p, "rubrique": rub })}`;
  }))} </section> ` })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/articles/index.astro", void 0);

const $$file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
