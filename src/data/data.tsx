import { useTranslation } from "react-i18next";

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
    { label: "P", bg: "#4f46e5", iconColor: "#fde68a", size: 40 }, // 1. Violet / Jaune pastel
    { label: "O", bg: "#facc15", iconColor: "#3b0764", size: 40 }, // 2. Jaune / Violet foncé
    { label: "R", bg: "#ec4899", iconColor: "#064e3b", size: 40 }, // 3. Rose / Vert foncé
    { label: "T", bg: "#bae6fd", iconColor: "#1e1b4b", size: 40 }, // 4. Bleu clair / Indigo
    { label: "F", bg: "#047857", iconColor: "#f472b6", size: 40 }, // 5. Vert / Rose
    { label: "O", bg: "#10b981", iconColor: "#064e3b", size: 40 }, // 6. Émeraude / Vert foncé
    { label: "L", bg: "#fdba74", iconColor: "#881337", size: 40 }, // 7. Orange / Bordeaux
    { label: "I", bg: "#8b5cf6", iconColor: "#ffffff", size: 40 }, // 8. Violet pur / Blanc (L'élément I a maintenant ses propres couleurs)
    { label: "O", bg: "#0284c7", iconColor: "#e0f2fe", size: 40 }, // 9. Bleu océan / Bleu clair (Le 3ème O a sa propre palette)
];

function useStats(): Stat[] {
    const { t } = useTranslation();

    return [
        { value: "5", label: t("stats.exp") },
        { value: "50", label: t("stats.projects") },
        { value: "25", label: t("stats.clients") },
    ];
}

function useNavLinks(): NavLink[] {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.slice(0, 2);

    return [
        { name: t("nav.about"), href: `/${currentLang}/#apropos` },
        { name: t("nav.services"), href: `/${currentLang}/#services` },
        { name: t("nav.reviews"), href: `/${currentLang}/#reviews` },
        { name: t("nav.portfolio"), href: `/${currentLang}/#portfolio` },
    ];
}

function useTabsData(): Tab[] {
    const { t } = useTranslation();

    return [
        {
            id: "2021",
            label: t("timeline.2021.label"),
            title: t("timeline.2021.title"),
            content: t("timeline.2021.content"),
        },
        {
            id: "2024",
            label: t("timeline.2024.label"),
            title: t("timeline.2024.title"),
            content: t("timeline.2024.content"),
        },
        {
            id: "2025",
            label: t("timeline.2025.label"),
            title: t("timeline.2025.title"),
            content: t("timeline.2025.content"),
        },
        {
            id: "2026",
            label: t("timeline.2026.label"),
            title: t("timeline.2026.title"),
            content: t("timeline.2026.content"),
        },
    ];
}

export {BADGES_DATA, useStats, useNavLinks, useTabsData};
