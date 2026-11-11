import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

interface LanguageOption {
    code: "fr" | "en";
    label: string;
}

const LANGUAGES: LanguageOption[] = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
];

export const MobileLanguageMenu: React.FC<{ onCloseMenu?: () => void }> = ({
    onCloseMenu,
}) => {
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const changeLanguage = (newLang: "fr" | "en") => {
        if (i18n.language.startsWith(newLang)) {
            if (onCloseMenu) onCloseMenu();
            return;
        }

        // Mise à jour du segment de langue dans l'URL
        const pathSegments = location.pathname.split("/").filter(Boolean);
        if (pathSegments[0] === "fr" || pathSegments[0] === "en") {
            pathSegments[0] = newLang;
        } else {
            pathSegments.unshift(newLang);
        }

        const newPath = `/${pathSegments.join("/")}${location.search}${location.hash}`;

        i18n.changeLanguage(newLang);
        navigate(newPath);
        if (onCloseMenu) onCloseMenu();
    };

    return (
        <div className="py-3 px-5 pe-7 border-b border-b-line/70">
            <div className="flex flex-col gap-1">
                {LANGUAGES.map((lang) => {
                    const isActive = i18n.language.startsWith(lang.code);

                    return (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full text-left py-2 font-haffer-r text-sm flex items-center justify-between hover:bg-gray-100 transition-colors ${
                                isActive
                                    ? "text-green-700"
                                    : "text-gray-600"
                            }`}
                        >
                            <span>{lang.label}</span>
                            {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
