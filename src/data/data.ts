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
    label: "2021",
    title: "Développeur Web & Formateur",
    content: "Début de carrière en tant que développeur web et formateur. Premières réalisations : sites pour des ESN et des blogs."
  },
  {
    id: "2022",
    label: "2022",
    title: "Intégration WordPress & Voyage",
    content: "Création et personnalisation de thèmes WordPress. Réalisation de sites dédiés au secteur du voyage."
  },
  {
    id: "2023",
    label: "2023",
    title: "Tourisme & Partage de connaissances",
    content: "Interventions sur des sites existants et création de nouveaux projets dans le domaine du tourisme tout en poursuivant la formation."
  },
  {
    id: "2024",
    label: "2024",
    title: "Développeur Front-End Remote",
    content: "Projets à l'international (immobilier, investissement locatif). Expertise sur Divi, Elementor et intégration Front-End."
  },
  {
    id: "2025",
    label: "2025",
    title: "Projets Internationaux & Résolution Technique",
    content: "Interventions pour des ONG, e-commerce et immobilier en France, au Québec et à Maurice. Résolution de problèmes techniques complexes."
  },
  {
    id: "2026",
    label: "2026",
    title: "Expert WordPress & Spécialiste SEO Technique",
    content: "Freelance confirmé (+5 ans d'expérience). Maîtrise complète de l'écosystème WordPress (Gutenberg, WooCommerce, Avada, Elementor), performance web et SEO."
  }
];

export {BADGES_DATA, STATS, NAV_LINKS, TABS_DATA};
