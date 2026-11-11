import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Branding } from "@/data/index";
export default function Logo() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    return (
        <>
            <Link to={`/${currentLang}`}>
                <div className="flex items-center">
                    <span className="font-primary inline-block text-4xl font-semibold">
                        C
                    </span>
                    <img
                        alt={Branding.alt}
                        loading="lazy"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        src={Branding.image}
                    />
                    <span className="font-haffer-md inline-block text-4xl font-semibold">
                        deur
                    </span>
                    <span className="font-haffer-md inline-block font-medium -rotate-90 text-[16px]">
                        MDG
                    </span>
                </div>
            </Link>
        </>
    );
}
