import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BaAw02kb.mjs';
import { a as getCollection } from '../chunks/_astro_content_DKFm-Ywi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const rubriques = await getCollection("rubriques");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Rubriques \u2014 l\u2019Ouvreuse", "description": "Parcourir les rubriques." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Rubriques</h1> <ul class="grid"> ${rubriques.map((r) => renderTemplate`<li class="card"><a${addAttribute(`/rubriques/${r.slug}/`, "href")}><h3>${r.data.title}</h3><p>${r.data.description}</p></a></li>`)} </ul> ` })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/rubriques/index.astro", void 0);

const $$file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/rubriques/index.astro";
const $$url = "/rubriques";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
