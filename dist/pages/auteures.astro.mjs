import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BaAw02kb.mjs';
import { a as getCollection } from '../chunks/_astro_content_DKFm-Ywi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const auteurs = await getCollection("auteures");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Auteures \u2014 l\u2019Ouvreuse", "description": "L\u2019\xE9quipe \xE9ditoriale." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Auteures</h1> <ul class="grid"> ${auteurs.map((a) => renderTemplate`<li class="card"> ${a.data.photo && renderTemplate`<img${addAttribute(a.data.photo, "src")} alt="">`} <h3><a${addAttribute(`/auteures/${a.slug}/`, "href")}>${a.data.name}</a></h3> <p>${a.data.bio}</p> </li>`)} </ul> ` })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/auteures/index.astro", void 0);

const $$file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/auteures/index.astro";
const $$url = "/auteures";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
