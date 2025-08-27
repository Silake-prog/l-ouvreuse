import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, r as renderComponent, e as renderSlot, f as renderHead } from './astro/server_55BT9lWN.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const nav = [
    { href: "/", label: "Accueil" },
    { href: "/articles/", label: "Articles" },
    { href: "/rubriques/", label: "Rubriques" },
    { href: "/auteures/", label: "Auteures" },
    { href: "/newsletter/", label: "Newsletter" },
    { href: "/a-propos/", label: "\xC0 propos" }
  ];
  return renderTemplate`${maybeRenderHead()}<header role="banner" class="sticky"> <div class="container site-logo" style="justify-content:space-between;"> <a href="/" aria-label="Accueil l’Ouvreuse" style="display:flex;align-items:center;gap:.6rem"> <img src="/brand/logo.svg" alt="l’Ouvreuse" height="42" loading="eager"> </a> <nav class="nav" aria-label="Navigation principale"> ${nav.map((i) => renderTemplate`<a${addAttribute(i.href, "href")}>${i.label}</a>`)} </nav> </div> </header>`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer role="contentinfo"> <div class="container"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} l’Ouvreuse — Journal sportif féminin indépendant.</p> <p><a href="/rss.xml">RSS</a> • <a href="/sitemap.xml">Sitemap</a></p> </div> </footer>`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Seo;
  const { title, description, image, type = "website", url = "" } = Astro2.props;
  return renderTemplate`<title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:type"${addAttribute(type, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${image && renderTemplate`<meta property="og:image"${addAttribute(image, "content")}>`}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>${image && renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>`}<link rel="canonical"${addAttribute(url, "href")}>`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/components/Seo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title = "l\u2019Ouvreuse", description = "Journal sportif f\xE9minin ind\xE9pendant", image, type, url } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="fr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">', '<!-- Cloudflare Web Analytics --><script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon="{&quot;token&quot;: &quot;YOUR_TOKEN&quot;}"><\/script>', '</head> <body> <a class="skip" href="#main">Aller au contenu</a> ', ' <main id="main" class="container"> ', " </main> ", " </body></html>"])), renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "image": image, "type": type, "url": url }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/layouts/Base.astro", void 0);

export { $$Base as $ };
