import { useTranslation } from "react-i18next";

export type FooterLink = {
    label: string;
    href: string;
    external?: boolean;
};

export type FooterSection = {
    title: string;
    containerClassName?: string;
    links: FooterLink[];
};

// export const FOOTER_SECTIONS: FooterSection[] = [
//     {
//         title: "App",
//         containerClassName: "border-b border-line sm:border-r",
//         links: [
//             { label: "À propos", href: "#apropos" },
//             { label: "Services", href: "#services" },
//             { label: "Portfolio", href: "#portfolio" },
//             { label: "CTA", href: "#cta" },
//         ],
//     },
//     {
//         title: "Informations",
//         containerClassName: "border-b border-line",
//         links: [
//             { label: "FAQ", href: "#faq" },
//             { label: "Témoignages", href: "#reviews" },
//             { label: "Mentions légales", href: "mention-legales" },
//         ],
//     },
//     {
//         title: "Réseaux sociaux",
//         containerClassName: "border-b border-line sm:border-b-0 sm:border-r",
//         links: [
//             { label: "Facebook", href: "https://facebook.com", external: true },
//             { label: "Twitter", href: "https://twitter.com", external: true },
//             { label: "LinkedIn", href: "https://linkedin.com", external: true },
//             { label: "Github", href: "https://github.com/codeurMDG", external: true },
//         ],
//     },
//     {
//         title: "Contact",
//         containerClassName: "",
//         links: [
//             { label: "Email", href: "mailto:codeur@gmail.com;?subject=Contact%20CodeurMDG", external: true },
//             { label: "WhatsApp", href: "https://wa.me/0344679728?text=Bienvenue%20sur%20Codeur%20MDG%2C%20quelle%20partie%20de%mes%20services%2C%20int%C3%A9ressez-vous", external: true },
//             { label: "Téléphone", href: "tel:+261344679728", external: true },
//         ],
//     },
// ];

export function useFooterSections(): FooterSection[] {
    const { t } = useTranslation();

    return [
        {
            title: t("footer.app.title"),
            containerClassName: "border-b border-line sm:border-r",
            links: [
                { label: t("footer.app.about"), href: "#apropos" },
                { label: t("footer.app.services"), href: "#services" },
                { label: t("footer.app.portfolio"), href: "#portfolio" },
                { label: t("footer.app.cta"), href: "#cta" },
            ],
        },
        {
            title: t("footer.info.title"),
            containerClassName: "border-b border-line",
            links: [
                { label: t("footer.info.faq"), href: "#faq" },
                { label: t("footer.info.reviews"), href: "#reviews" },
                { label: t("footer.info.legal"), href: "mention-legales" },
            ],
        },
        {
            title: t("footer.social.title"),
            containerClassName: "border-b border-line sm:border-b-0 sm:border-r",
            links: [
                { label: t("footer.social.facebook"), href: "https://facebook.com", external: true },
                { label: t("footer.social.twitter"), href: "https://twitter.com", external: true },
                { label: t("footer.social.linkedin"), href: "https://linkedin.com", external: true },
                { label: t("footer.social.github"), href: "https://github.com/codeurMDG", external: true },
            ],
        },
        {
            title: t("footer.contact.title"),
            containerClassName: "",
            links: [
                { label: t("footer.contact.email"), href: "mailto:codeur@gmail.com;?subject=Contact%20CodeurMDG", external: true },
                { label: t("footer.contact.whatsapp"), href: "https://wa.me/0344679728?text=Bienvenue%20sur%20Codeur%20MDG%2C%20quelle%20partie%20de%20mes%20services%2C%20int%C3%A9ressez-vous", external: true },
                { label: t("footer.contact.phone"), href: "tel:+261344679728", external: true },
            ],
        },
    ];
}
