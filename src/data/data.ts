type Badge = {
    label: string;
    bg: string;
    iconColor: string;
    size: number;
};

type KeyValuePair<K1 extends string, K2 extends string> = {
  [K in K1 | K2]: string;
};

type Stat = KeyValuePair<'value', 'label'>;
type NavLink = KeyValuePair<'name', 'href'>;

type Tab = {
  id: string;
  label: string;
  title: string;
  content: string;
};

const BADGES_DATA: Badge[] = [
    { label: "◆", bg: "#4f46e5", iconColor: "#fde68a", size: 40 }, // Violet / Losange
    { label: "✚", bg: "#facc15", iconColor: "#3b0764", size: 40 }, // Jaune / Croix
    { label: "▮", bg: "#ec4899", iconColor: "#064e3b", size: 40 }, // Rose / Pilule
    { label: "●", bg: "#bae6fd", iconColor: "#1e1b4b", size: 40 }, // Bleu clair / Cercle
    { label: "■", bg: "#047857", iconColor: "#f472b6", size: 40 }, // Vert / Carré
    { label: "⬢", bg: "#10b981", iconColor: "#fef08a", size: 40 }, // Émeraude / Hexagone
    { label: "✿", bg: "#fdba74", iconColor: "#881337", size: 40 }, // Orange / Fleur
];

const STATS: Stat[] = [
  { value: "5", label: "Ans d'expérience" },
  { value: "50", label: "Projets réalisés" },
  { value: "25", label: "Entreprises satisfaites" },
];

const NAV_LINKS: NavLink[] = [
    { name: "Product", href: "#product" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
];

const TABS_DATA: Tab[] = [
  {
    id: "2021",
    label: "2021 - 2023",
    title: "Initiation et passion",
    content: "Début en tant que développeur web et formateur en développement web. Découverte de ma passion pour ce métier, partage d'expériences et réalisation de sites pour des ESN, centres de formation, blogs, projets de voyage et tourisme. Création et personnalisation de thèmes WordPress"
  },
  {
    id: "2024",
    label: "2024",
    title: "Freelance et expansion",
    content: "Fort de trois années d'expérience, j'ai travaillé en sous‑traitance pour des entreprises françaises. Résolution d'innombrables problèmes techniques et bugs. Interventions et créations de sites web, simples comme complexes, notamment dans l'immobilier, l'investissement locatif et divers projets front‑end."
  },
  {
    id: "2025",
    label: "2025",
    title: "Expérience et polyvalence",
    content: "Développeur expérimenté, spécialiste WordPress et intégrateur pixel‑perfect. Interventions dans de nombreux projets web pour des entreprises malgaches, françaises et canadiennes. Collaboration avec des ONG, organisations, secteurs de l'immobilier, centres pour femmes, conciergeries et autres domaines variés. Expertise en performance web et SEO technique."
  },
  {
    id: "2026",
    label: "2026",
    title: "Expertise confirmée",
    content: "Toujours animé par ma passion, je poursuis mon activité en tant que freelance déclaré. Devenu webmaster expert, WordPress n'a plus de secrets pour moi: création et personnalisation de thèmes, développement de plugins, optimisation de la performance web et SEO technique. Maîtrise de Gutenberg, WooCommerce, Elementor, Divi, Avada et bien d'autres outils. J'ai atteint une cinquantaine de projets réalisés, confirmant mon expertise et ma polyvalence."
  }
];

export {BADGES_DATA, STATS, NAV_LINKS, TABS_DATA};
