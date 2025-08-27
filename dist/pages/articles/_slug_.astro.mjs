import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, e as renderSlot, r as renderComponent } from '../../chunks/astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BaAw02kb.mjs';
import 'clsx';
import { f as formatDate } from '../../chunks/utils_DzU96_J-.mjs';
import { g as getEntryBySlug, a as getCollection } from '../../chunks/_astro_content_DKFm-Ywi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Teaser = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Teaser;
  const { show, ctaHref = "/newsletter/" } = Astro2.props;
  return renderTemplate`${show ? renderTemplate`${maybeRenderHead()}<aside class="card" aria-live="polite"><h3>Rejoignez la communauté</h3><p>Vous avez atteint la limite d’articles gratuits. Abonnez-vous pour un accès complet.</p><a class="btn"${addAttribute(ctaHref, "href")}>S’abonner</a></aside>` : renderTemplate`${renderSlot($$result, $$slots["default"])}`}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/components/Teaser.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$ArticleLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleLayout;
  const { post, author, rubrique } = Astro2.props;
  const url = Astro2.site ? new URL(Astro2.url, Astro2.site) : new URL(Astro2.request.url);
  ({
    headline: post.data.title,
    datePublished: post.data.date,
    dateModified: post.data.date,
    author: { name: author?.data.name || "Rédaction" },
    articleSection: rubrique?.data.title || post.data.rubrique,
    image: post.data.image ? [post.data.image] : void 0,
    mainEntityOfPage: url.href
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": post.data.seoTitle || post.data.title, "description": post.data.seoDescription || post.data.excerpt || "", "image": post.data.image, "type": "article", "url": url }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> ', "<article", '> <header class="grid"> <p><a class="badge"', ">", "</a></p> <h1>", "</h1> <p>Par <a", ">", "</a> — ", "</p> ", " </header> ", ` </article> <script>
    (function(){
      try {
        const LIMIT = Number(import.meta.env.PUBLIC_READ_LIMIT || 3);
        const article = document.querySelector('article');
        const premium = article?.getAttribute('data-premium') === 'true';
        const KEY = 'lo_reads_v1';
        if (!premium) {
          const n = Number(localStorage.getItem(KEY) || '0');
          localStorage.setItem(KEY, String(n + 1));
          if (n + 1 > LIMIT && article) {
            const aside = document.createElement('aside');
            aside.className = 'card';
            aside.innerHTML = '<h3>Limite atteinte</h3><p>Créez un compte gratuit pour continuer la lecture.</p><a class="btn" href="/newsletter/">S’inscrire</a>';
            article.appendChild(aside);
          }
        }
      } catch (e) {}
    })();
  </script> `])), maybeRenderHead(), addAttribute(post.data.premium ? "true" : "false", "data-premium"), addAttribute(`/rubriques/${post.data.rubrique}/`, "href"), rubrique?.data.title || post.data.rubrique, post.data.title, addAttribute(`/auteures/${post.data.author}/`, "href"), author?.data.name || post.data.author, formatDate(post.data.date), post.data.image && renderTemplate`<img${addAttribute(post.data.image, "src")} alt="">`, renderComponent($$result2, "Teaser", $$Teaser, { "show": post.data.premium }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })) })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/layouts/ArticleLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("articles", ({ data }) => data.status === "published");
  return posts.map((p) => ({ params: { slug: p.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getEntryBySlug("articles", slug);
  if (!post) {
    throw new Error(`Article not found: ${slug}`);
  }
  const author = await getEntryBySlug("auteures", post.data.author);
  const rubrique = await getEntryBySlug("rubriques", post.data.rubrique);
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "post": post, "author": author, "rubrique": rubrique }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/articles/[slug].astro", void 0);

const $$file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/articles/[slug].astro";
const $$url = "/articles/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
