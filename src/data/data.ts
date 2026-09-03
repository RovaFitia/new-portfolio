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

export {BADGES_DATA, STATS, NAV_LINKS};
