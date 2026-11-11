import { useTranslation } from "react-i18next";

export default function HeroBadge() {
    const { t } = useTranslation();
    return (
        <>
            <div className="eyebrow inline-flex items-center justify-center gap-4">
                <span className="status-dot"></span>
                <span className="font-haffer-r uppercase text-sm">
                    {t("hero.badge")}
                </span>
            </div>

            <div className="hero-glow" aria-hidden="true"></div>
        </>
    );
}
