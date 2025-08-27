import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// ⚠️ Renseignez `site` après le premier déploiement :
// ex. site: 'https://<votre-user>.github.io/<repo>'
export default defineConfig({
  integrations: [mdx()],
  scopedStyleStrategy: 'where',
});
