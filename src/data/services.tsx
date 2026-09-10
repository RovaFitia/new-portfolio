type Service = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: {
        path: string;
        alt: string;
        width: number;
        height: number;
    };
    layout: "full" | "half";
};

const SERVICES: Service[] = [
    {
        id: "wordpress",
        title: "Développement WordPress",
        description:
            "Création de sites élégants, attractifs performantes et sécurisées.",
        tags: ["Vitrine", "E-commerce", "Refonte", "Maintenance"],
        image: {
            path: "/images/services/CJE-2.webp",
            alt: "CJE Quebec",
            width:2880,
            height:11576,
        },
        layout: "full",
    },
    {
        id: "custom-dev",
        title: "Développement personnalisé",
        description:
            "Développement sur mesure moderne et unique. Chaque projet est pensé pour être évolutif, performant et parfaitement aligné avec vos objectifs.",
        tags: [
            "Creation Plugin",
            "Creation Theme",
            "Creative Design",
            "Design Pixel Perfect",
        ],
        image: {
            path: "/images/services/nousgerons.webp",
            alt: "Nousgerons",
            width: 2880,
            height: 12326,
        },
        layout: "half",
    },
    {
        id: "maintenance",
        title: "Maintenance et débogage",
        description:
            "Un service pensé pour garantir stabilité, sécurité et performance, afin d’offrir une expérience fluide aux utilisateurs.",
        tags: ["Maintenance", "Performance", "Sécurisation"],
        image: {
            path: "/images/services/monpoleformation.webp",
            alt: "Mon pole formation",
            width: 2880,
            height: 12358,
        },
        layout: "half",
    },
    {
        id: "optimization",
        title: "Optimisation web",
        description:
            "Optimisation de sites web, de contenus et de la performance globale.",
        tags: ["SEO", "Visibilité", "Responsive", "Performance"],
        image: {
            path: "/images/services/generation-mada.webp",
            alt: "Generation Mada",
            width: 2884,
            height: 12442,
        },
        layout: "full",
    },
];

export default SERVICES;
