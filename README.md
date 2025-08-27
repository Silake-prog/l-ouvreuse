# l’Ouvreuse — Astro + MDX + Decap CMS (GitHub Pages)

Site statique gratuit (0 €) avec SEO, accessibilité, newsletter Buttondown et soft paywall P0.

## Prérequis
- Node.js 20+, Git
- Compte GitHub (repo public)

## Démarrer
```bash
npm i
npm run dev
# http://localhost:4321
```

## Déploiement GitHub Pages
1. Remplacez `OWNER/REPO` dans `public/admin/config.yml` par `votreUser/l-ouvreuse`.
2. Poussez sur `main`. Le workflow GitHub Actions publie automatiquement.
3. Dans *Settings → Pages* : Source = GitHub Actions.

## Variables d’environnement (facultatives)
- `PUBLIC_BUTTONDOWN_LIST` (slug Buttondown, ex. `louvreuse`)
- `PUBLIC_SITE_URL` (ex. `https://<user>.github.io/l-ouvreuse`)
- `PUBLIC_READ_LIMIT` (ex. `3`)

## Contenu
- Articles : `src/content/articles/*.mdx`
- Rubriques : `src/content/rubriques/*.md`
- Auteures : `src/content/auteures/*.md`

## SEO
- `src/pages/rss.xml.ts`, `src/pages/sitemap.xml.ts`, `public/robots.txt`
- JSON-LD `NewsArticle` injecté dans `ArticleLayout.astro`

## Paywall P0
- Compteur de lectures localStorage (modifiable via `PUBLIC_READ_LIMIT`)
- `premium: true` dans le frontmatter pour teaser immédiat

## Licence
MIT (ajustez selon votre besoin)
