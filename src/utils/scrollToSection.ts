import React from "react";

export const scrollToSection = (
    e: React.MouseEvent<HTMLElement>, // Acceptation de tout élément HTML (<a>, <button>, etc.)
    href: string,
    onComplete?: () => void,
) => {
    if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);

        if (elem) {
            elem.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        if (onComplete) {
            onComplete();
        }
    }
};
