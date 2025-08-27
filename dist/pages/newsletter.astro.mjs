import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BaAw02kb.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$NewsletterForm = createComponent(($$result, $$props, $$slots) => {
  const list = "yourlist";
  return renderTemplate`${maybeRenderHead()}<form${addAttribute(`https://buttondown.email/api/emails/embed-subscribe/${list}`, "action")} method="post" target="popupwindow" onsubmit="window.open('', 'popupwindow')" class="grid" aria-label="Inscription newsletter"> <label> <span>Votre email</span> <input type="email" name="email" required placeholder="votre@email.fr"> </label> <input type="hidden" value="1" name="embed"> <button class="btn" type="submit">S’inscrire</button> <small>Propulsé par Buttondown — désinscription en 1 clic.</small> </form>`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/components/NewsletterForm.astro", void 0);

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Newsletter \u2014 l\u2019Ouvreuse", "description": "Recevez nos articles." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Newsletter</h1> ${renderComponent($$result2, "NewsletterForm", $$NewsletterForm, {})} ` })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/newsletter.astro", void 0);

const $$file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/newsletter.astro";
const $$url = "/newsletter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Newsletter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
