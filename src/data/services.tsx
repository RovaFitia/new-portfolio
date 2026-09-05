import { ServiceImage } from "./index"; // ServiceImage est un objet { image: string, alt: string }

type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: {
    path: string;
    alt: string;
  };
  layout: "full" | "half";
};

const SERVICES: Service[] = [
  {
    id: "wordpress",
    title: "Développement WordPress",
    description: "Création de sites élégants, attractifs performantes et sécurisées.",
    tags: ["Vitrine", "E-commerce", "Refonte", "Maintenance"],
    image: {
      path: ServiceImage.image,
      alt: ServiceImage.alt,
    },
    layout: "full",
  },
  {
    id: "custom-dev",
    title: "Développement personnalisé",
    description: "Développement sur mesure moderne et unique. Chaque projet est pensé pour être évolutif, performant et parfaitement aligné avec vos objectifs.",
    tags: ["Creation Plugin", "Creation Theme", "Creative Design", "Design Pixel Perfect"],
    image: {
      path: ServiceImage.image,
      alt: ServiceImage.alt,
    },
    layout: "half",
  },
  {
    id: "maintenance",
    title: "Maintenance et débogage",
    description: "Un service pensé pour garantir stabilité, sécurité et performance, afin d’offrir une expérience fluide aux utilisateurs.",
    tags: ["Maintenance", "Performance", "Sécurisation"],
    image: {
      path: ServiceImage.image,
      alt: ServiceImage.alt,
    },
    layout: "half",
  },
  {
    id: "optimization",
    title: "Optimisation web",
    description: "Optimisation de sites web, de contenus et de la performance globale.",
    tags: ["SEO", "Visibilité", "Responsive", "Performance"],
    image: {
      path: ServiceImage.image,
      alt: ServiceImage.alt,
    },
    layout: "full",
  },
];

export default SERVICES;
