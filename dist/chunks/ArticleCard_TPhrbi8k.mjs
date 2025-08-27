import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from './utils_DzU96_J-.mjs';

const $$Astro = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article, rubrique } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="card article-card"${addAttribute(`/articles/${article.slug}/`, "href")}> ${article.data.image && renderTemplate`<img${addAttribute(article.data.image, "src")} alt="">`} <div> <span class="badge">${rubrique?.data.title ?? article.data.rubrique}</span> <h3>${article.data.title}</h3> ${article.data.excerpt && renderTemplate`<p>${article.data.excerpt}</p>`} <small>${formatDate(article.data.date)}</small> </div> </a>`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
