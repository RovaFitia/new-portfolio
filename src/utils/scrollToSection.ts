import React from "react";

export const scrollToSection = (
    e: React.MouseEvent<HTMLElement>,
    href: string,
    onComplete?: () => void,
) => {
    if (href.includes("#")) {
        e.preventDefault();
        const [pathPart, hashPart] = href.split("#");
        const targetId = hashPart;

        const currentPath = window.location.pathname.replace(/\/$/, "");
        const targetPath = (pathPart || "").replace(/\/$/, "");

        // Vérifie si on est déjà sur la bonne page (ex: /fr ou /en ou racine)
        const isSamePage =
            !pathPart ||
            currentPath === targetPath ||
            (targetPath === "" &&
                (currentPath === "/fr" ||
                    currentPath === "/en" ||
                    currentPath === ""));

        const cleanPath = pathPart || window.location.pathname;

        if (isSamePage) {
            // Cas 1 : On est déjà sur la page d'accueil
            const elem = document.getElementById(targetId);

            if (elem) {
                elem.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                window.history.pushState(null, "", cleanPath);
            }
        } else {
            // Cas 2 : On est sur une autre page (ex: /fr/mentions-legales)
            // On navigue vers la page propre sans hash, puis on scrolle après le chargement
            window.history.pushState(null, "", cleanPath);

            // Redirection douce vers la page d'accueil (sans rechargement complet si géré par React Router, ou rechargement propre)
            window.location.href = cleanPath;
            // Note: Si vous utilisez React Router (navigate), vous pouvez remplacer window.location.href par votre fonction navigate(cleanPath)
        }

        if (onComplete) {
            onComplete();
        }
    }
};
