import { c as createComponent, b as createAstro, m as maybeRenderHead, a as renderTemplate, k as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_55BT9lWN.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BadgeRubrique = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BadgeRubrique;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="badge">${title}</span>`;
}, "/Users/simonbrigode/Downloads/l-ouvreuse/src/components/BadgeRubrique.astro", void 0);

const frontmatter = {
  "title": "Paris 2025 — Les nageuses qui bousculent la hiérarchie",
  "slug": "paris-2025-natation",
  "date": "2025-08-20",
  "excerpt": "Un panorama des talents qui montent et des tactiques qui changent la donne dans les relais.",
  "author": "Romane-Quoniam",
  "rubrique": "natation",
  "tags": ["analyse", "équipe de France"],
  "image": "/uploads/natation-relai.jpg",
  "status": "published",
  "premium": false,
  "seoTitle": "Paris 2025 — Nageuses à suivre",
  "seoDescription": "Aperçu des nageuses françaises et internationales à suivre en 2025."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "les-débuts",
    "text": "Les débuts"
  }, {
    "depth": 2,
    "slug": "les-sacrifices-de-leffort",
    "text": "Les sacrifices de l’effort"
  }, {
    "depth": 2,
    "slug": "le-temps-de-la-rémission",
    "text": "Le temps de la rémission"
  }, {
    "depth": 2,
    "slug": "un-retour-doré-pour-la-championne-de-france",
    "text": "Un retour doré pour la championne de France"
  }, {
    "depth": 2,
    "slug": "désillusions-de-paris-2024",
    "text": "Désillusions de Paris 2024"
  }, {
    "depth": 2,
    "slug": "une-nouvelle-aventure-à-paris",
    "text": "Une nouvelle aventure à Paris"
  }, {
    "depth": 2,
    "slug": "les-blessures-et-la-résilience",
    "text": "Les blessures et la résilience"
  }, {
    "depth": 2,
    "slug": "fidélité-et-valeurs",
    "text": "Fidélité et valeurs"
  }, {
    "depth": 2,
    "slug": "objectif-los-angeles-2028",
    "text": "Objectif Los Angeles 2028"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    em: "em",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Entre passages sous 25 secondes et retours en nage libre, ", createVNode(_components.strong, {
          children: "les relais se redéfinissent"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Retour sur la carrière sportive de la championne de natation Anaïs Podevin, sur le chemin de Los Angeles 2028 après les difficultés rencontrées durant ses dernières saisons."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "les-débuts",
      children: "Les débuts"
    }), "\n", createVNode(_components.p, {
      children: "Anaïs a 12 ans lorsqu’elle plonge pour la première fois dans le bassin de l’US Colomiers aux abords de Toulouse. Une première victoire pour la jeune nageuse qui, jusque-là, attendait patiemment que ses parents puissent organiser leur emploi du temps professionnel pour la conduire aux entraînements :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« J’étais attirée depuis longtemps par la natation et lorsque ma mère infirmière a changé de service j’ai pu commencer à nager. J’ai un parcours atypique, j’ai débuté assez tard. »"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Ce loisir, d’abord pratiqué une fois par semaine, est rapidement devenu une évidence aux yeux de la nageuse, qui en fait alors son sport de prédilection. Lorsqu’Anaïs entre au lycée Victor Hugo en 2014, elle rejoint l’équipe 1 de son club, dite « équipe élite », pour suivre quatre à cinq entraînements hebdomadaires. Ce changement de cadence porte ses fruits : l’athlète se qualifie aux championnats de France Elite et termine 2ème jeune sur le 200m dos. Première d’une longue série de récompenses, ses succès ne seront pas sans sacrifice."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "les-sacrifices-de-leffort",
      children: "Les sacrifices de l’effort"
    }), "\n", createVNode(_components.p, {
      children: "Rapidement, les performances de la nageuse lui permettent d’entrer dans les listes ministérielles de l’Etat en tant qu’athlète de haut niveau. À sa sortie du lycée, décidée à exploiter ses capacités, Anaïs intègre le pôle France au club des Dauphins du TOEC (Toulouse Olympique et le Toulouse Employés Club) et continue de gravir chacun des podiums de sa catégorie."
    }), "\n", createVNode(_components.p, {
      children: "Les entraînements s’intensifient jusqu’à neuf fois par semaine et se complètent par des séances de musculation exigeantes. Le corps de la sportive supporte deux ans de surentraînements intenses, mais l’effort soutenu finit par altérer sa santé. À bout de force, la jeune promesse du TOEC est hospitalisée :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« C’est simple, mon médecin m’a expliqué que l’expression « mourir d’épuisement » n’en était plus une, je risquais ma vie »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "L’épuisement physique de cette pratique intense lui a laissé des marques, notamment des problèmes pulmonaires, comme le développement d’un asthme important qui pourrait lui être préjudiciable au cours de sa carrière."
    }), "\n", createVNode(_components.p, {
      children: "Consciente du danger qu’elle encourt, Anaïs refuse de se surmener de nouveau et quitte le pôle France pour rejoindre un groupe du niveau moyen durant un an. Mais ses résultats antérieurs scintillent encore dans les yeux de ses anciens coachs, qui ne relâchent pas la pression :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Mon nouveau coach recevait des directives du pôle France sur le travail qu’il me donnait, on lui demandait de me faire travailler tel ou tel aspect de ma nage, je n’étais jamais complètement tranquille »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Alors qu’Anaïs se remet doucement de ses blessures, elle décide de rompre définitivement avec le TOEC."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "le-temps-de-la-rémission",
      children: "Le temps de la rémission"
    }), "\n", createVNode(_components.p, {
      children: "Décidée à obtenir son master, la nageuse n’a d’autre choix que de rester à Toulouse. Les deux années suivantes sont alors synonymes de retour aux sources, dans les couloirs réconfortants de son club d’origine à Colomiers. Deux années de quiétude, durant lesquelles la nageuse continue ses suivis médicaux et se concentre sur ses études de STAPS filière santé, jusqu’à l’obtention de son diplôme en activités physiques adaptées et santé."
    }), "\n", createVNode(_components.p, {
      children: "Nous sommes en février 2020 lorsque la pandémie du covid-19 amène Anaïs à se confiner chez ses parents, tous deux anciens cyclistes de haut niveau. Attachés au milieu sportif, ils décident de soutenir leur fille dans la poursuite de son rêve :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« On ne veut pas que tu aies de regret dans ta carrière sportive. On te laisse un an »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Un an de soutien financier, dans le club choisi par la nageuse, pour tenter une dernière fois d’exploiter ses capacités. C’est ainsi qu’Anaïs rejoint le stade Clermontois en juin 2020, auprès de l’entraîneur du Haut-Niveau Bruno Verweirde."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "un-retour-doré-pour-la-championne-de-france",
      children: "Un retour doré pour la championne de France"
    }), "\n", createVNode(_components.p, {
      children: "À peine six mois après son intégration à Clermont, la nageuse honore l’opportunité que lui a offerte sa famille et devient championne de France toutes catégories sur 200 mètres dos aux Championnats de France élite 50 mètres à Saint-Raphaël (Var), édition 2020. Sa progression d’années en années est grandissante et lui permet de se qualifier aux Jeux méditerranéens de 2022."
    }), "\n", createVNode(_components.p, {
      children: "En parallèle, Anaïs obtient un poste de banquière et rejoint les bureaux du Crédit Agricole face à la piscine clermontoise :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« J’ai pris mon courage à deux mains et je suis allée leur demander s’ils pouvaient m’embaucher avec mes conditions »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Déjà partenaire du club de natation, l’entreprise accepte de lui aménager un contrat spécifique, adapté à son volume d’entraînements :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Ils savaient que la natation faisait partie du contrat. Ils m’ont proposé un accompagnement financier pour que je continue mon parcours sportif en gagnant ma vie »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Anaïs a suivi une formation en interne, propre au milieu banquier : ", createVNode(_components.em, {
        children: "le parcours du nouvel embauché"
      }), ", réalisable en six mois, lui permettant d’obtenir le poste même si ses études antérieures relèvent du domaine sportif. L’entreprise n’avait encore jamais accordé un contrat de ce type à une athlète féminine ou à un sportif en général mais Anaïs s’est immédiatement sentie intégrée, malgré son emploi du temps décalé :"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Ça reste un rythme très soutenu, plus de 6 heures par jour [d’entraînement], mais mon équipe est très compréhensive, elle me soutient lors de mes compétitions, elle suit mes résultats »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Le cas d’Anaïs reflète les difficultés que rencontrent les sportifs à financer leur carrière :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Je veux pouvoir continuer le sport après mes études, mais pour cela, il faut pouvoir allier sport et scolarité »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Les sponsors sont quant à eux une ressource financière difficile d’accès pour la nageuse, qui demande au préalable une large influence sur les réseaux sociaux."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "désillusions-de-paris-2024",
      children: "Désillusions de Paris 2024"
    }), "\n", createVNode(_components.p, {
      children: "En 2024, Anaïs frôle de peu une place pour les Jeux olympiques de Paris. L’athlète entame sa journée de qualification par une parfaite nage, lors de laquelle elle obtient le 2ème meilleur temps en 2’12. Mais les courses suivantes ne sont pas à la hauteur de ses espérances et elle parvient, avec frustration, à la 4ème place au pied du podium :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« L’après-midi, j’ai eu envie de trop bien faire, je me suis précipitée et je suis passée à côté de la qualification »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "C’est une grande déception pour l’athlète, qui doit essuyer dans le même coup un changement de club, suite au départ à la retraite de son coach :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Je devais trouver un nouveau club et j’avais peur de perdre mon contrat de travail en ratant les qualifications »."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "une-nouvelle-aventure-à-paris",
      children: "Une nouvelle aventure à Paris"
    }), "\n", createVNode(_components.p, {
      children: "Pour s’orienter vers un nouveau club, Anaïs a sollicité l’aide de Michel Chrétien, entraîneur de l’Institut National du Sport et de la Performance (INSEP). À la tête du pôle excellence, il lui conseille les bassins d’Etoile 92, basés dans les Hauts-de-Seine, sous le coaching d’Olivier Sangaria."
    }), "\n", createVNode(_components.p, {
      children: "Financé par son président Etienne Passani, le club tient sa particularité de son statut privé. Anaïs a pu alors déménager à Paris dans une colocation, tout en conservant son contrat professionnel."
    }), "\n", createVNode(_components.p, {
      children: "C’est donc avec joie que l’athlète, passionnée de musées, de mode et de balades dans les jardins rejoint la capitale pour entamer une nouvelle saison auprès des Etoiles 92."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "les-blessures-et-la-résilience",
      children: "Les blessures et la résilience"
    }), "\n", createVNode(_components.p, {
      children: "Alors qu’Anaïs fait ses débuts au sein de son nouveau club, ses résultats s’envolent. Lors des championnats de France, l’athlète rafle trois médailles individuelles au 200 mètres dos et deux médailles en relais, tout en améliorant ses temps au passage. Performance épatante, d’autant plus que la forme physique de la nageuse n’était pas de bon augure :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Durant la compétition, je me suis blessée le pouce sur l’arrivée. J’avais vraiment mal mais j’ai décidé de continuer de nager et ça a payé »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Même si sa blessure ne l’a pas empêchée d’exceller en compétition, la nageuse doit entamer une convalescence de deux mois et demi pour arrachement osseux :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Je continuais à m’entraîner mais seulement avec les jambes ! »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Le chirurgien ne pouvant pas opérer cette articulation, Anaïs a fait preuve de patience jusqu’à son retour en janvier 2025 et a retrouvé dès sa reprise des performances intéressantes."
    }), "\n", createVNode(_components.p, {
      children: "En février 2025, les Etoiles 92 s’envolent pour un stage en Italie dans le centre d’entraînement de Riccione. Ce dernier est une piscine couverte mais peu aérée, conditions respiratoires malsaines dans le cadre d’une pratique sportive. Cela s’est révélé problématique pour la santé d’Anaïs, déjà affaiblie par ses antécédents médicaux :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Depuis les épisodes de santé à Toulouse, je suis sujette à un très gros asthme. En Italie, c’était complètement déréglé, j’avais de l’asthme 24h/24 »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "La résurgence des blessures passées est catastrophique pour la nageuse, qui doit passer une journée aux urgences dès son retour en France. Soignée à l’hôpital Cochin, la santé d’Anaïs est inquiétante et ses bronches très irritées. Robuste, la jeune femme devra s’entraîner un mois sans intensité pour limiter son asthme avant de reprendre de plus belle."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "fidélité-et-valeurs",
      children: "Fidélité et valeurs"
    }), "\n", createVNode(_components.p, {
      children: "Moins d’un mois avant le Championnat de France 2025, Anaïs décide de quitter le club des Etoiles. Cette décision délicate répond à une situation critique : le staff et deux nageurs sont démis de leurs fonctions par le président."
    }), "\n", createVNode(_components.p, {
      children: "La situation est inacceptable pour la sportive, dont les valeurs ne s’alignent plus à celle de son club. Suivie par deux autres nageurs, Anaïs raccroche le bonnet du 92 et se retrouve esseulée, en pleine préparation de la compétition."
    }), "\n", createVNode(_components.p, {
      children: "Grâce au soutien de la piscine de Sartrouville, Anaïs parvient à suivre ses entraînements, toujours en autonomie :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« C’est très compliqué de trouver un club comme ça juste pour un mois, surtout que la plupart sont des clubs associatifs et que les frais de transferts peuvent être élevés »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "C’était sans compter le soutien de la Fédération de natation, qui, alertée par la situation délicate dans laquelle se trouvait la nageuse, a aidé financièrement son club d’origine à assumer son transfert afin qu’il puisse la compter de nouveau dans ses rangs."
    }), "\n", createVNode(_components.p, {
      children: "Les bassins de Colomiers retrouvent donc pour la troisième fois leur pupille, accueillie chaleureusement pour l’occasion :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Ils m’ont ouvert grand les bras et m’ont dit qu’ils étaient ravis de me revoir et de m’aider, que j’étais comme à la maison chez eux »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Usée par les aléas de sa saison, Anaïs a tout de même participé au Championnat sans chercher les résultats :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« Ceux qui avaient suivi ma saison et me croisaient au bord du bassin me demandaient comment je pouvais être là, mais moi je venais en plaisir »."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "objectif-los-angeles-2028",
      children: "Objectif Los Angeles 2028"
    }), "\n", createVNode(_components.p, {
      children: ["Selon les dernières nouvelles en août 2025, la nageuse venait d’être accueillie par Nicolas Miquelestorena au sein du club ", createVNode(_components.strong, {
        children: "ES Massy Natation"
      }), ", dans lequel elle fera sa rentrée le 8 septembre."]
    }), "\n", createVNode(_components.p, {
      children: "Décidée à rester à Paris, la championne a établi sa liste de clubs potentiels dans lesquels elle se voyait prête à évoluer et a finalement jeté son dévolu sur l’équipe élite, coachée par Nicolas :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« On s’était déjà croisés aux compétitions, il était content de m’accueillir et très motivé pour travailler ensemble, et c’est réciproque ! »"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Les objectifs de la nageuse sont nombreux :"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "En parallèle des bassins, la fan de musique, et notamment de métal, s’est lancé le pari d’apprendre à jouer de la guitare basse."
      }), "\n", createVNode(_components.li, {
        children: "À court terme, l’athlète fraîchement Massicoine a pour objectif de participer au championnat d’Europe :"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« J’ai vraiment envie de prendre ma revanche et de nager à mon plus haut niveau »."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Les compétitions auront lieu en juillet et août 2026 à Paris.", createVNode(_components.br, {}), "\nÀ long terme, Anaïs partage son ambition de participer aux Jeux olympiques de Los Angeles 2028."]
    }), "\n", createVNode(_components.p, {
      children: "Son nouvel entraîneur est partie prenante et prêt à la soutenir jusque-là :"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "« On a trois ans pour faire des belles choses »."
      }), "\n"]
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

const url = "src/content/articles/2025-08-20-paris-2025-natation.mdx";
const file = "/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-20-paris-2025-natation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-20-paris-2025-natation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
