import { k as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_55BT9lWN.mjs';
import 'clsx';

const frontmatter = {
  "title": "Championnes du monde d’épée — L’équipe de France brille à Tbilissi",
  "slug": "escrime-tbilissi-2025",
  "date": "2025-07-26T00:00:00.000Z",
  "excerpt": "Quatre Françaises montent ensemble sur le podium géorgien et décrochent l’or mondial en équipe d’épée.",
  "author": "Romane-Quoniam",
  "rubrique": "actualites",
  "tags": ["escrime", "championnats du monde", "équipe de France"],
  "image": "/uploads/escrime-france-2025.jpg",
  "status": "published",
  "premium": false,
  "seoTitle": "Championnes du monde d’épée 2025 — L’équipe de France triomphe",
  "seoDescription": "Retour sur le sacre historique de l’équipe de France d’épée féminine aux championnats du monde de Tbilissi."
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Le 26 juillet, quatre Françaises montent d’un même pas sur le podium géorgien et deviennent championnes du monde d’épée en équipe."
    }), "\n", createVNode(_components.p, {
      children: ["Du 22 au 30 juillet 2025, se tenait le championnat du monde d’escrime à Tbilissi en Géorgie. Les principales nations de l’escrime mondiale y ont croisé leurs fers : françaises, hongroises, coréennes, italiennes, états-uniennes ont brandi épées, fleurets et sabres. L’équipe française formée par ", createVNode(_components.strong, {
        children: "Lauren Rembi, Marie-Florence Candassamy, Alexandra Louis-Marie et Eloïse Vanryssel"
      }), " a brillé face aux athlètes russes, autorisées à concourir sous bannière neutre (AIN) par la Fédération Internationale d’Escrime (FIE)."]
    }), "\n", createVNode(_components.p, {
      children: ["C’est la Française de 29 ans originaire de Martinique, ", createVNode(_components.strong, {
        children: "Alexandra Louis-Marie"
      }), ", qui ouvre le match face à Kristina Yasinskaya sur un score de 2-1 en sa faveur. Sa coéquipière de 34 ans issue du Paris Université Club d’escrime (PUC), ", createVNode(_components.strong, {
        children: "Marie-Florence Candassamy"
      }), ", prend la première rotation et marque 3 points mais reste suivie de près par son adversaire Aizanat Murtazaeva, 5-3. ", createVNode(_components.strong, {
        children: "Eloïse Vanryssel"
      }), ", toulousaine de 26 ans originaire de l’Académie Beauvaisienne d’escrime (ABE), vient d’atteindre les quarts de finale à l’épée individuelle dans le même championnat. Elle remporte elle aussi 3 points face à Iana Bekmurzova, creusant un peu plus l’avance de son équipe : 8-5. Le retour de Candassamy marque le passage à la dizaine, 12-7 contre Yasinskaya. C’est par l’estoc de Louis-Marie que les Françaises dépassent le double des points de leurs adversaires, mais Bekmurzova résiste à l’entaille psychologique et ne laisse pas l’écart se creuser, 22-12."]
    }), "\n", createVNode(_components.p, {
      children: ["Murtazaeva a fait trembler ", createVNode(_components.strong, {
        children: "Frédéric Chotin"
      }), ", manager de l’équipe française, en remontant le score russe de 16 à 23 face à Vanryssel qui n’a pourtant pas baissé sa garde. Alors que Milen Bavuge Khabimana continue l’assaut de sa coéquipière, Candassamy revient avec assurance sur la piste et impose la retraite à Bavuge Khabimana avec un score de 27 à 20. Vanryssel clôt son dernier passage avec brio face à Yasinskaya : 31-22. Le combat se termine comme il a commencé, Alexandra Louis-Marie entre en piste, attire Murtazaeva par une retraite avant de monter en flèche et de donner le coup de grâce à l’équipe russe avec un score final de 41 à 32."]
    }), "\n", createVNode(_components.p, {
      children: ["Un match serré donc, durant lequel l’endurance et le sang-froid de nos athlètes françaises ont primé. ", createVNode(_components.strong, {
        children: "L’esprit collectif, la défense rigoureuse et la stratégie de rotation"
      }), " ont permis aux bleues de conserver leur avance jusqu’à l’assaut final."]
    }), "\n", createVNode(_components.p, {
      children: "C’est avec joie et humilité que les athlètes tricolores sont devenues premières mondiales, félicitant dans le même temps leurs adversaires AIN médaillées d’argent et l’équipe de Corée du Sud médaillée de bronze face à l’Italie."
    }), "\n", createVNode(_components.p, {
      children: ["L’émotion française est décuplée : les épéistes bleues n’avaient pas été premières mondiales depuis les exploits de ", createVNode(_components.strong, {
        children: "Laura Flessel, Hajnalka Kiraly-Picot, Maureen Nisima et Sarah Daninthe à Pékin"
      }), ", 17 ans plus tôt."]
    }), "\n", createVNode(_components.p, {
      children: "Félicitations aux épéistes françaises qui n’ont rien à envier à leurs étincelantes médailles d’or."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/articles/2025-08-18-entretien-capitaine.mdx";
const file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-18-entretien-capitaine.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-18-entretien-capitaine.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
