import { useTranslation } from "react-i18next";

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

function useServices(): Service[] {
    const { t } = useTranslation();

    return [
        {
            id: "wordpress",
            title: t("servicesList.wordpress.title"),
            description: t("servicesList.wordpress.description"),
            tags: t("servicesList.wordpress.tags", {
                returnObjects: true,
            }) as string[],
            image: {
                path: "/images/services/CJE-2.webp",
                alt: "CJE Quebec",
                width: 2880,
                height: 11576,
            },
            layout: "full",
        },
        {
            id: "custom-dev",
            title: t("servicesList.customDev.title"),
            description: t("servicesList.customDev.description"),
            tags: t("servicesList.customDev.tags", {
                returnObjects: true,
            }) as string[],
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
            title: t("servicesList.maintenance.title"),
            description: t("servicesList.maintenance.description"),
            tags: t("servicesList.maintenance.tags", {
                returnObjects: true,
            }) as string[],
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
            title: t("servicesList.optimization.title"),
            description: t("servicesList.optimization.description"),
            tags: t("servicesList.optimization.tags", {
                returnObjects: true,
            }) as string[],
            image: {
                path: "/images/services/generation-mada.webp",
                alt: "Generation Mada",
                width: 2884,
                height: 12442,
            },
            layout: "full",
        },
    ];
}

export default useServices;
