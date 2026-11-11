import React, { useState, useRef, useEffect } from "react";
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

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Fermeture au clic à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Met à jour i18n et réécrit le chemin d'URL (/fr/... ou /en/...)
    const changeLanguage = (newLang: "fr" | "en") => {
        if (i18n.language === newLang) {
            setIsOpen(false);
            return;
        }

        // 1. Découpage du path actuel
        const pathSegments = location.pathname.split("/").filter(Boolean);

        // 2. Vérification si le premier segment est déjà un préfixe de langue
        if (pathSegments[0] === "fr" || pathSegments[0] === "en") {
            pathSegments[0] = newLang;
        } else {
            pathSegments.unshift(newLang);
        }

        // 3. Reconstitution de la nouvelle URL
        const newPath = `/${pathSegments.join("")}${location.search}${location.hash}`;

        // 4. Mettre à jour i18next et naviguer vers la nouvelle URL
        i18n.changeLanguage(newLang);
        navigate(newPath);
        setIsOpen(false);
    };

    return (
        <div
            className="relative inline-block text-left"
            ref={dropdownRef}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Bouton déclencheur avec icône de traduction */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-text transition-colors cursor-pointer"
                aria-label="Sélectionner la langue"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                </svg>
            </button>

            {/* Menu Déroulant */}
            {isOpen && (
                <div className="absolute right-0 mt-0 w-44 rounded-xs bg-white shadow-md border border-line py-2 z-50 animate-in fade-in zoom-in-95">
                    {LANGUAGES.map((lang) => {
                        const isActive = i18n.language.startsWith(lang.code);
                        return (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-100 transition-colors uppercase cursor-pointer ${
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
            )}
        </div>
    );
};
