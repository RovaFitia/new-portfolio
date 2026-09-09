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

export const FOOTER_SECTIONS: FooterSection[] = [
    {
        title: "App",
        containerClassName: "border-b border-line sm:border-r",
        links: [
            { label: "À propos", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "CTA", href: "#cta" },
        ],
    },
    {
        title: "Informations",
        containerClassName: "border-b border-line",
        links: [
            { label: "FAQ", href: "#faq" },
            { label: "Mentions légales", href: "#legal" },
        ],
    },
    {
        title: "Réseaux sociaux",
        containerClassName: "border-b border-line sm:border-b-0 sm:border-r",
        links: [
            { label: "Facebook", href: "https://facebook.com", external: true },
            { label: "Twitter", href: "https://twitter.com", external: true },
            { label: "LinkedIn", href: "https://linkedin.com", external: true },
            { label: "Github", href: "https://github.com/codeurMDG", external: true },
        ],
    },
    {
        title: "Contact",
        containerClassName: "",
        links: [
            { label: "Email", href: "mailto:codeur@gmail.com;?subject=Contact%20CodeurMDG", external: true },
            { label: "WhatsApp", href: "https://wa.me/0344679728?text=Bienvenue%20sur%20Codeur%20MDG%2C%20quelle%20partie%20de%mes%20services%2C%20int%C3%A9ressez-vous", external: true },
            { label: "Téléphone", href: "tel:+261344679728", external: true },
        ],
    },
];
