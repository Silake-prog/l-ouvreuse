import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BaAw02kb.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_TPhrbi8k.mjs';
import { a as getCollection, g as getEntryBySlug } from '../chunks/_astro_content_DKFm-Ywi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const all = (await getCollection("articles", ({ data }) => data.status === "published")).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const [featured, ...rest] = all;
  const side = rest.slice(0, 6);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "l\u2019Ouvreuse \u2014 sport f\xE9minin", "description": "Reportages, interviews et analyses sur le sport f\xE9minin." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero"> <h1>l’Ouvreuse</h1> <p>Le journal qui met en avant le sport féminin — reportages, interviews, analyses. Rejoignez la newsletter pour ne rien manquer.</p> <p><a class="btn" href="/newsletter/">S’inscrire à la newsletter</a></p> </section> <section class="posts" aria-label="À la une et dernières publications" style="margin-top:1.5rem;"> <div class="post-featured"> ${featured && renderTemplate`<div class="card"> ${featured.data.image && renderTemplate`<img${addAttribute(featured.data.image, "src")} alt="" style="border-radius:12px;aspect-ratio:16/9;object-fit:cover;width:100%">`} <div style="padding:.5rem 0"> <span class="badge" style="margin-bottom:.4rem;display:inline-block">${featured.data.rubrique}</span> <h2 style="margin:.2rem 0"><a${addAttribute(`/articles/${featured.slug}/`, "href")}>${featured.data.title}</a></h2> ${featured.data.excerpt && renderTemplate`<p>${featured.data.excerpt}</p>`} </div> </div>`} </div> <div class="post-list"> <div class="grid"> ${await Promise.all(side.map(async (p) => {
    const rub = await getEntryBySlug("rubriques", p.data.rubrique);
    return renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": p, "rubrique": rub })}`;
  }))} </div> </div> </section> ` })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/index.astro", void 0);

const $$file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
