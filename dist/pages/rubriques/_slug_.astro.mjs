import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BaAw02kb.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_TPhrbi8k.mjs';
import { a as getCollection, g as getEntryBySlug } from '../../chunks/_astro_content_DKFm-Ywi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const rubs = await getCollection("rubriques");
  return rubs.map((r) => ({ params: { slug: r.slug }, props: { r } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { r } = Astro2.props;
  const posts = (await getCollection("articles", ({ data }) => data.status === "published" && data.rubrique === r.slug)).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${r.data.title} \u2014 l\u2019Ouvreuse`, "description": r.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${r.data.title}</h1> <p>${r.data.description}</p> <section class="grid"> ${await Promise.all(posts.map(async (p) => {
    const rub = await getEntryBySlug("rubriques", p.data.rubrique);
    return renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": p, "rubrique": rub })}`;
  }))} </section> ` })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/rubriques/[slug].astro", void 0);

const $$file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/rubriques/[slug].astro";
const $$url = "/rubriques/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
