import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BaAw02kb.mjs';
export { renderers } from '../renderers.mjs';

const $$APropos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "\xC0 propos \u2014 l\u2019Ouvreuse", "description": "Notre mission \xE9ditoriale." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>À propos</h1> <p>l’Ouvreuse est un journal sportif féminin indépendant. Notre mission : couvrir et valoriser le sport féminin.</p> ` })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/a-propos.astro", void 0);

const $$file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/a-propos.astro";
const $$url = "/a-propos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$APropos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
