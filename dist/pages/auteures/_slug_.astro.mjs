import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BaAw02kb.mjs';
import { a as getCollection } from '../../chunks/_astro_content_DKFm-Ywi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const auteurs = await getCollection("auteures");
  return auteurs.map((a) => ({ params: { slug: a.slug }, props: { a } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { a } = Astro2.props;
  const posts = (await getCollection("articles", ({ data }) => data.status === "published" && data.author === a.slug)).sort((x, y) => new Date(y.data.date).getTime() - new Date(x.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${a.data.name} \u2014 l\u2019Ouvreuse`, "description": a.data.bio }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${a.data.name}</h1> ${a.data.photo && renderTemplate`<img${addAttribute(a.data.photo, "src")} alt="">`}<p>${a.data.bio}</p> <h2>Articles</h2> <ul class="grid"> ${posts.map((p) => renderTemplate`<li class="card"><a${addAttribute(`/articles/${p.slug}/`, "href")}>${p.data.title}</a></li>`)} </ul> ` })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/auteures/[slug].astro", void 0);

const $$file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/auteures/[slug].astro";
const $$url = "/auteures/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
