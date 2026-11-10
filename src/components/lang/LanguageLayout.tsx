import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SUPPORTED_LANGS = ["fr", "en"];

export default function LanguageLayout() {
    const { lng } = useParams<{ lng: string }>();
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        // Si la langue dans l'URL est valide, on met à jour i18next
        if (lng && SUPPORTED_LANGS.includes(lng)) {
            if (i18n.language !== lng) {
                i18n.changeLanguage(lng);
            }
        } else {
            // Si la langue n'est pas valide ou absente, on redirige vers /fr par défaut
            navigate("/fr", { replace: true });
        }
    }, [lng, i18n, navigate]);

    return <Outlet />;
}
